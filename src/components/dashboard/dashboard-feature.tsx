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
    "3Mtn3A8Gf2XFhGsoBMc22iwhWg4VzcyD8Luf2Jyno3Ha6QQ9zAZNof5zYU9Yq9nV5pieJ7eJT3DsjZAHr8nv1foa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXicBwfyHvcPz7dGLKqiDVGZfoVuWh7Zy3S9Sor9PaESJkf2kUDupErPFsrdUxPXeXXU9iaoknwAMTmni13VYBo",
  "key1": "4encJqQSbeNDL3Tap7FSLvQjpNBmtubJr8BKddNvKwjcA962irSmvR3UCv8xWogpeH2oCJDeNzjb54ogEaCvppfs",
  "key2": "2SfEU4EdQN1o3QFctaPGTF2uNLxuXxa4iU1NSKuW4RjrRUSAJnZncWTVsFtzyro45jNBw6zirJVJrVbgr7LaPG4f",
  "key3": "3QnbxQHBLrRqqL1dvryUgs8P4aTH1e97yhZy4yWX1h7focQ8ycJVKztPUQDu3cLvQ1E64NETSDahwK7D5RKKkEyN",
  "key4": "YrUVukvqdAbRQzZky2483HUPTdVBBjiaVFvSVUUioeCe4WSVY3U7YAvT9rzbtCueA8qihfyhbUkJpNwt5RcvJk1",
  "key5": "3ALzHL9jLsn7HBdunSvWk6F7mULqc9Ffcu6WyPeknmizFSdk6BrponEw67H4CQNjUSUfWGWcfWBkwV1hAQhRh6EM",
  "key6": "3wwVjAhC8cSFoQU6sbVhcBHUeiiuhjQ4Bh21qVx9ZUSdXytUV7AWWx1geQ1E7pud3B2uQ2bnkT2LrUahQJmQY3Vw",
  "key7": "4xTfN9WQ5w5gvnVUEvTqGa4VSdwdUckVNXgMDppHqfuBtVdKMu9itHZ1AcvVHr4tH2zXNGGqgMo7yomZny5qCWEC",
  "key8": "TnBKS1gjgjZhm1ZwHFLGBUxuFGHtKQCVagAY6hwoK41UDEN8bD1CC1T9PL7Lhd8TqNx29FaDnChi1p5q4bYKhrC",
  "key9": "4Bg3kPKesq4yx3qK9MNgFNnkDx47dXJmBHjcyAsowjZrxeB5Sveqc5danXDFBSJzKcGKqiW8q5fjiXeUyFBWmNDz",
  "key10": "u9Eezrwdh8sRYSJA6MXgghxzWGaZqi1A78WvUedt37JcHEcPHzeP44g6aNAvq8nXTAzREuV6gZ9EhgZqqhHqQaQ",
  "key11": "pXkayy9gXGnbU3buavDSMemME1XWFbUat9birKpURPW8Wa5dAwN6bs1fq3mMvV3fuvDVibdakXEp8iaNhHDJTTs",
  "key12": "4DT4S5VBzcqEs87kgKZThpW22xz313k8jQCsHVRv1g2DxEJVwsBEaXvsHLXEzdAs9Pk5L5WbCNWN4T3NVTcWBJ7h",
  "key13": "3NTENva4wMggLwH4YVK3MtpUSDpxnbttiHRWdtoSNo9DyPTmD6QXiPqk6hFzfnmEkdzX564n2svPzpoSf1D45GDB",
  "key14": "7qXrvCNv4JyUjhWhQoCPpPHGSvqjDEp3viH198cegNrhozoE36Z7NN343ZDLHEynLY7VC5geoJzDXBS1uRD6gHy",
  "key15": "5QgWjHMdmPhFWCmMUQmdRefS9ate1j3EhCeaqmaZ1aXyaJrWTrpzGxyzZspSB1U7AmV3nM6nGeMW4qzKojPxwd35",
  "key16": "44TVEuQpxSyPkEzMr4nBqQpocqWWkMtzvKtsCy2yGMwe1uPThDmqoZTW321urQBSVcL1i7g9WDRKn57VZS3uAhfj",
  "key17": "59B2MCCofgUo5jrCAqixu9BhVCgZSoRAkvbCtxxDGdhPHLTfdWRWku95Y3jpPxwoTN1htf6v56pzh9HJhghbnpbP",
  "key18": "xcQdL7PRaPwqhttDoxb5KW6y8kwD39Af2ZGJVhGYa5wkgZttwX3bJXsamwVX32rt1GPrdBmZVtsbcVVvfDBwkr1",
  "key19": "ouKWYt7ehepQXP2S7aLjNH7iaEVQnge2uHZejehfPu8Exqrm81zW6FPRDFoLtqJ6SSjdsQFsjPYQUHyfym2VQYa",
  "key20": "4x86ZcNrEkee2c5H2TSazvtkX27qhd46RQEFkfoCsJ45f53cCjREWz22SYCo7aceSWQrLfb5NPvpYDnUyztEyoK2",
  "key21": "5vX6sh6nQDA9xh6xbVVBCp99tRCakD8C5bDDNTcKkUnwgW6pt7NcswoYsQFC2neK3gz1An1NWChEGHDAdjuDhG9p",
  "key22": "3DKYZoghShHGDBCxUGBD8PPheednR2ztFzBEoNJM14kPxbU7AZnm1ZRYVsGWqEprcewx2pdasc4M232ddZtfYCWw",
  "key23": "4Qi8GmEXnqMs6LCyGWvpoLDUjHEQBDaFsdwLa69uXTVcADCxg1W7tMtt5paBiaNKFqZ8aSMQy5L3drR8Afb1gwMS",
  "key24": "3v8MLpLtjyDyrHtJEKpC7F74KQXLw4pATyaHcJdi86R5MuKU7MxAwJ91SinrkFHagoAz2kk2TVovmZ5Eqeszw5WN",
  "key25": "94rqKe2WpjwH5KeexToNKLf2NqZPeSnpxokih6tyEPZy4nLAvFZNxa89xj5hCBVBa3nLu41TTfCAEc54hFg3tiA",
  "key26": "5jqpygd8oqNjyz4HX9dfi2CXiPUha8wnMuHqAapQYg1VPk923ohMnYJg1W4J2FuNu2YW9EHVbD2cN2ypX1wWxJhm",
  "key27": "3cTqaNR6p2Lsh7UVcBHyWPA7mhzvu5osWEz1khWtsq2yYfUsGahD6gemYHJBLsFSvb3RQ3TYMF97QaF85gjtMgrg",
  "key28": "4fSiZEyDE7YViSowQ2D53UTTPrETei8szVzaZ9faoKPGyqRrNpDxULyFXnhAJFYMAxdeKapRwov6ZxNre2HixNRE",
  "key29": "2v8AGjxwjhg6xSPQLSHNxrGjkCsLwNwhHAQNw33jPS4EDVsjAd2EjPRn5s8uL3DCuZuTbTce7WirDJ2uBKC4qEfa",
  "key30": "29PiSYnaKELVKuZgAkDdK8QKga9Z4ADAtfB1vVjjrzsWhAj5datxpLHLix3gvC35nUVNL5cbJUk42E7HSj6VfLPr",
  "key31": "2oV8qweiTRq9uiJqxwdePka6rietzmBtbKTmAsVbBM9rWT1aCgutPKG5GZNkYomPg28KWkcHA23xD7KXL3WFBaPe",
  "key32": "PTpTK63feUmMU4acM1enGodY46a6JBR2ECEY2PumpeJoSrwSdhQfsWyczu1LSYQJdC6nJc4t7cQiem1hchodFGm",
  "key33": "5bVsdGUP2RgojBR9i3KCBzfaCEMUoErxnE6jLeQXSYzsJYgjzDNTiG7mihpVoj5ZcENeAgY9c6ARxJGTPqGfCUh8",
  "key34": "BjpmGuu333bCgN1vCdTPLCwHXDUhmnQmxy168LcSA8N6aJcjkr9feeNJYeyyDyiuNYt8xT29gCQB4EkBLeTk9eV",
  "key35": "rjAmfRptrxPFpHRPWgAab43knk53SbcTvk7p6UdZmhoH9c4qP9RRQwrAJ9q6vL7fbKaaG6Gh2UrV21s7LUXbeXm",
  "key36": "5UCxVbLTZzpGwdsrCMaeoQGpBriKQi9AED5xsHoMEA1JCuMSr87KzBsZdMZ3gqTL2Xr6few4iu8Pwe9ebG6JP4Qw"
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
