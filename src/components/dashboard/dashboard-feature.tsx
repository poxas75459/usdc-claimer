/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "57EKeb5bDA13Jw2wjSLxyShDiHtiDa4XLqEXDxr4X1adow4oz6ca2qrYfw8FNT6oTb3b7zURdeVDcGdR67XmgF5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQt2QkhBh3SkLNDEncXRwWfuxXPtAPCbvDRnxCjFqq49PoysZQeogigF9fzUUvzHipdF7AwocyZvGE2GZRdV2NN",
  "key1": "5uodML1fMp2Pvuk8Y2X5R1ZvD7FQNQShd2kchb3x3YGQsJrkVu3brXm1KFRjapej1rurDeneeS1vUKxmR2Z4okYt",
  "key2": "3EuV6aeGUq3LQVTocbyprouvxe9tWSSXa8Ur98EgoFwDd4aaLrKct1iVNAdaNPtzpiW56Pj8Gvd52P2pNa5uthVS",
  "key3": "669UVdp6hLp5pokxHsd6GDNddLaDi1hA1mWHR89KSneZ9xHSGUBR1TFUJ8C8PiYz34FS7gfH1aN29wJyeuqLg1r4",
  "key4": "5uWLyC1rik4pr1gkcg4VzxArd2AwPiwoGsTvHmtfwhz967PDUgKPdKLDfH5fsv2nmbGpJGVVDnx151x4yB2pu2jA",
  "key5": "UXWeYwA3LJAFpkRdFHCZL3xTf6HFSvmFyZkDsPBV1JaJcKYURoBgMcoyYVXdx2Vtm3WW2Fe7gN1YpUgLjSrhYtF",
  "key6": "5a1Y3scFpBSRZk4ocw3MpL458PKkPeksxUgSG6modCamx1F2PY1cV6KorzWpLBL7C3e7kvfQnPNeRr6BCfkS2dHm",
  "key7": "3Cy8ys7t2adYdHjF4pVxm9yirVGGFZesqazpBWKXf4wyJoEEWiPuDF2NxKJY9MqJbpwNcsDzrXgVXR5jxCyHMKL",
  "key8": "59UzGwsA6LijHQv5iBwTXkQ3EGipnGNmGFnHbAXdvgCCuUAbhWxHNec1Tu6wJJkGWBFW6cWrZdVEELc94B7EXgak",
  "key9": "txy3fB1tnRftsJnTZ8k5JTcxQH9ReK6zV335M1rSqG7PcvRbfqazsJJgpEsKsJWggYa52cmiacZojjq6jCXrU5w",
  "key10": "4QB9DiufY2ewMj4pQhGZmQUPBKNhJxCFxRTZJgRyfrpe97rVHjUvb8k1duA344h2amoiQxDfpdeW2Nkia3JL6DLw",
  "key11": "3VnB4dPjaAbEiGGvB8QFJfTJoMm1hvcVpaWckyAVF1HfpQfoQVuwsmydTWTKN5z2dAvtm6w77fFmXx16959mDwJL",
  "key12": "b1DHNw71kytwyUnLG7cZCf1gvagAexibmDKdPA9vaZAVwiagPhKaGzENANXqcnZDgHZN3m2LEmg6ZsAFN5HWH7Y",
  "key13": "ZrHmTxxRcdPZgAgJ7i2yd5wyFbkYBoG4AYqB3PoxS6jm9w5kZHz2GkApg6BtTnJkhG3MPqwRopz2NnjcMbrJiVL",
  "key14": "3t62cXt19zMjPmYvt59Y5iLWQbESevjd5BU8PUr9XhAJrrqBM8Cq51TjoubgvF8oXhohyrJAD1ssXaDSasPNs6vy",
  "key15": "4NPvNxKTcUtpx5Eoo85PH2pUZvhxTzXrd6KsoogwbRciSCC1fpgG59zt71DxjrrQ7q4qtG279x1MkMExgXJDxv2J",
  "key16": "21xscwSqeWFjgFEw1KfMxL2fpgwtQ35RW8WGSam2qzkQJ5vXcRZnWhavgPWz7Xm1J1i5W6sHfwYnzJL75PeirSof",
  "key17": "4XnweC2AKN5jCFgmSiRTV4CtkJjp6faJHg4F3XHLRyVjvX68j4wcsnc9PSGUyFfy1SPw5JeL258ff1fXMtHtsEqK",
  "key18": "5FAvsRor97D916cFvJeQheBKKsRXFDSZY5Jshb3gWR9yRtu418jkm83fM9Cx35CBAbLEWHbaaPgCRmb87RvKfwtp",
  "key19": "4CqygdrhnHRpBvZtr2HvSFqJbFcLVMNSohanNWtSeTkAu6KxdXL5J9LqHJUus8Zsp9KvpnuAxYvRMjveSTLDyZqX",
  "key20": "4qASM5oH8Tt7s97JsM86S13oydZf4F9Agdbx3nuT2SQs4uinkEQh9cwPQH3agd54cnDaX4i79ioRYVouACbViZeE",
  "key21": "5G4Uvrnsv1CoERzXi14eMkQiiTi5bgD4JpAt7vMzubCpvt6Y96an7PMdcPpcnUbpmECkUGADps5s6Etc5KfcA3LZ",
  "key22": "Vm6rgiAjjwnfweVjh3P4UeipsDGnPCa55VTC23zyPJDkEkXP3sDNTT6caJigXSKwFXafffsdcM4JoqZ81frdV7c",
  "key23": "56ZwFQ5rVV2xWA3s4xuYP5rb7YR4vcbdqjfK3bohvTZTbtF8pTzb9HYrePWUyRtbzAyrwiPjqzBy4b4HE8Tp2Wem",
  "key24": "Ypf4euKovJEmWxhUDmCHedxnvwXqwCDrrWH8CUjpAGiU1ikxe2G8ieE6dzE7tBZXACnwooDrSxjZctKWsutckLD",
  "key25": "3DfT8x168utym8pTArhLrYsff1YjX5pPCztjz5ir8CXo5ZqC9xfBZtBfMMwH5CzeCRxcoxkxV7asZYfMrFbG1pdS",
  "key26": "2CGRggTKafSdTvatBXeidk5pvaHj1H5oGHp61T9y81dGAwhxDHzbbjMFmsu79UoSWR1xUrF2myWFsXaajddpc7yP",
  "key27": "4GMijhp8NxgKmd3YpsuG5zNX8CmAhoaxWt6yedpAJb2GrYkCPn1yarw9ezeMpfKtKB3gfUPZT1uuZ1V5WLiwFhmA",
  "key28": "sd612XWFcR5XJ6CVEskMC4rarFdnck5Vwb7TNR9K16855TAtU6LGbJcZtJTdqHZepZZQELRCZJH5WyTEbedQGMP",
  "key29": "sLeSstvxV4H1N41Qwmo6xZnjBXxRVrzbdAAJ5y5otdFqCqFNzhodYyMVAsdmM8NMGLsHhk3aNeYsm4FQLGCCJTP",
  "key30": "5XgCWjK5UmEPLq1p5GYp87cj6DtwUBmhN7WPeb8sThTouV2pKdMmBrGkv2Lu9FxWTnVC3oNpAq2rHEHHfzwKRP9z"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
