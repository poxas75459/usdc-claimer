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
    "4GpexjgRkvD2puWTECNjWerU5Ld4P48NK8Ju113RansXJkF2tx1vLCTisKiR7ujUtwmiTHiboo4gSjwUTdM6aDsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pn47WpTNXzphvurw4LSaniRjKLx9azLudjPz3fzuRNKovNzMnXwoyrhbt3XQvvZmcMkYt77r5Vd254MeDYC2CbH",
  "key1": "3WjkAhid9qyXMvtZMraEwdX5FTiX2okB1pyjHYnXg4GcephepUfK2Jofwm29TtdikAAFquSsE5PcHePy32o8oZ7h",
  "key2": "2evz8r5cRfmWrZmv9EKH8okQWCLtkdcEbmnipEgYdSzSzBxFQVLnnkSeMx56h6QzbqdqwrsutCVwhgVfHYAXwbbA",
  "key3": "2TzyZ1FhLr52F4BopJXYNFAVoQWgk8uhNxK8JWP84uafCDh4QHyFryJ8N8qT85yifBeJnCmgjaPjy8y2emGZoSpt",
  "key4": "AAEkLzeyibnkKTPMbX1m2nZjdt9tXb4ziJhiXJSXNTHqLHqArEE25GKiF4NJdpDSgCX8xtpdbekm4mae1AUuMAr",
  "key5": "2Xgxc8bBCUTYs5AcRSYBKcVgQ3AjNaxrVSaTjUyvvaNnBeNWETjNfuuKcGRRMRuixP58Qmw96LZwfPxr53r4NwdT",
  "key6": "4cmJKVn5HgxieQBHqbkcCcHMgAbWeAj7VASS18yrgL4a8zV9kQrdRjMMbmZJLJzeKCbhLAQEE1XDkmAhw8ZPenhw",
  "key7": "4NHXPnv13ohcks6sxCfqxRpUpQXb4yr99DAMehrr4NH2JygA2WZfLwzgk2FqhtbDC9dyzs5Jepz1LPULvcfa1yDi",
  "key8": "5TeNFMGm6eEaF5wS2qBwsUkdxU541H3SCsKLfDSAM2j8Za7ScAc6nRrL2FdUUPXkyUDf9UUyBnzL69Ncipp6QRcJ",
  "key9": "BmKgLqrL4iigoYtWRVFYboefwbo1hBU8AqNqJgnsFiNq6XMb9wYW6qGTacE5FTgsw8qmi7r1m52NZPkRieZ16cZ",
  "key10": "65M8SUL9GxtuQ58M6e24qLFbgqznijgJx5CxktJS5qQFi5m1YJNAZZsdr8pbzET1d1eRbRrMWoZQZwm5zv6XmT7n",
  "key11": "2ASb2eUPW4gngqsR2jDxHQ6faboobBKDgiVTRc5j6bm5CAGA9BVKGoiDmxRhX9zVkUYaWFwsyJWUxTPWEZqiVun1",
  "key12": "3at2bzyQJvqGtWvZYJmCU5jtbzSB6iZUTG437RZaWDbYKrDNBbMpBRUj1jidRW95KJfWn5bFWXM31c211GAztqgj",
  "key13": "2hBHftMmMFvUiDxaJpv4SwnsYDyhzBTkC67fDNaQLuzmw3GvPGFoW3jeceYbT6964Uboy7a3EMJdkGeYWnKsVFns",
  "key14": "4rZ288qRUFGPvZXLeFt9dtpWkA3Tnje9pGzAPHcHNQtz9LUKoQRQXdK7AMovYc6w5CDP5ARk8gwcXgNcH9ia2Xt3",
  "key15": "3FohEV8KdLoE7LSoTnKMAj7AxBYw7CSPsFps8avDdu5yG3hqMLFmyFdjzQVsiHvpHqQqMaaPVqSvNrVpPAo4eX6F",
  "key16": "3Z89hHm33wvriN1fdrXwPmiqgBJSBAMtbex6wSxudtk5D4VngRKWeBHFnDNNkrWHQeWo26EY9XFxqJvybE9kkQHM",
  "key17": "ZLVhdF82GgtGr9rp9cffU6jEykvkNVekt17pSVMd4sEnMYayXkyEmtk32dd9zMdvtyqgNMPzSjeVLc9DHm8pQHB",
  "key18": "5Db1jb8ZZbdazbNduqMdwY5qTytCTjRaztqAVv2Ned5rGQkogCjF8q342L4kMC6NRLBmPfY7NHHcucQQmXgmdwYc",
  "key19": "3Xoc8woS1HiX1Sdq2rVeBmutqa8BbygVB9ou8P3daRSytbFrtd9faPJD1JoujHGy8RjP8U1PQehRH2HW3FTMht5F",
  "key20": "4p7pJRDTMNauwt1b4guyKmWY53ZqL72s3arm3W35k2yEYCY69TrsRhuTmvAMPRUUzBJ5ycrdfGkhXbExPf2HNBfd",
  "key21": "3gEk5eqGZGBdLPn4GJCjAamykbtGkktC6wgg8ns6xToCwUDEw7MpuC6YH4nZGdPknYvNgmq1K5taBNYWtiswUwzB",
  "key22": "3BCvcdCH8crnpWA8FNUkeQQi6gQu74eRw1BsJecJMByLRzwRLCVUkMjTZbWFMQbct5xVjYyEWw2waKBwdWTdLq8B",
  "key23": "3N9mHssyDFFFYLRFVToKx1meBGm8fxYZmE95BKqncpTJdeyofex6XVhmPd2R4mdVmnijQKC6y8DCXn4YYeYpBBGu",
  "key24": "63ErV87rRRuNzQFyMnuQSc6sXqzt9uxsWy3vhQWBF69euAWUZGuHTUgYjGALajQ2gMEUwB7EpidpE8tMnnpyggS4",
  "key25": "89xvyy9x8pR4fv9vvKn2D7DWgR959fiSwHdL1W3btPiLNF6Jh4mvMAYERJrzFXn6h7hRY8p96RTSDxSQcFALkQ2",
  "key26": "2Xvi81WRpnfL6YCk1wAYGgb1ZZGMhsVwQxTC6yJFnY5eACZcmT7b78VUcifUiqkdWygLg1DV3Jo4iZiHAJi6nku7",
  "key27": "2yGeZ7XvYm7fyrPrckFSP5NRLj8NeHuwgEpyzGJFXEQnCRteVR6kqqwFqR9czH1Hv6yA6NN1wZe8Eaxx1jwckAQd"
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
