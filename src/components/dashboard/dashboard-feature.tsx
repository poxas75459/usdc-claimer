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
    "4cUbfP7efM9AZ9cEaaxzR1wDZVFidXZLe2CFotjMbjLEaCLkSKHBAgETJyLdoKu2sDybMD9VBWcBcCUzEp7Wj2SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bMxvFJH5niixW6gsWcPaDyixtmPJK6bUmqQZ4e7deyS7i3SujV1BSwQ9yoc4Ekb4WU6oynaBDD1WAJF52zfbNHa",
  "key1": "2oxfAekSKWSWuF9N38pA3mqLEMgYEAmnqEidwX6Eyj7sAn4EQEfiWKsNvaic2E6Eiri6kHLheNJsMDVyo5hDrGeY",
  "key2": "5DFfR8f6xFvQAMm3s4LUiNwyyeVcipMwvbVvjnyZoSFePtdwnF5dB1Bvirckci9ZBV5D6beb8iPD57CusL649tuw",
  "key3": "32n4wHAPKTBdnDxNp33g4CyJZ8RJp1VXCUpjZTuJVf8cE1BzoXSdKyoZb9ghj1Txvx1dpXhc44SYqpe66HVtcUaC",
  "key4": "jq9rkgTNRo51aZBNKxE5rA8esS32Medda26qnMGNQRfwHNopsAuxx9Q8RZobJPsCjm4oKjEquJHCDrQ1jUm1yCF",
  "key5": "4KM5bWpCX1G6WyzS4CwPfyCg4ue17f7YcHdZWeuxiMB37s8Tc8DYGdLZVmeFKuG6CrWfx38LJi9hzAKDuTZ56YJe",
  "key6": "5S6zi86MSebcbD6M9WzbriByk8Se9ookYetM9BURPr3TVYTyCdXcnwH92mMMWuCoC4X9xY9cTUW4hTpCHgLZpLSF",
  "key7": "2PEbLUvcvCEuAea7wNy7T6GDEsNJyuuwfZoPMC5ScghR6avCdXMVuiDaZ8oVnSgo7rkSoNXPCJDPquJwVhGDw6W5",
  "key8": "5TcJrqchux97qmRpeMcZfuBWdjswhsnLgaCxTfRcqbGovbaFqtRMZvJ71dsYgnEhb2WNJsKBKrJRaVdsRqrdQfpK",
  "key9": "476NfEzbMiT8TU6LLRZR2iarTj7UiDwr3XSKnZE7RjSxZWfvoXKRkxTYSEPZwkWbn563E2iZq3h6xeLgE1cfaE1u",
  "key10": "4GiozSgF2aQwgVqgp7Y44ty6Pcptpii4PrdWTYtsqjBZr2QoR91sNjK23gX5EFsr9262Jq3jg6q3jLk96iRWzWNb",
  "key11": "3XpFemcFj3n1gYkygRejhiR4qUDwUk4xLcCGZrB18E3vcBFJNbKFgwyEzyMCjSnrkWhuL76Wjv6igyuiBs1DAseF",
  "key12": "2zqUCwLUiQT3GbS2y3jVd3MDLt9cmaB47EKxcTzCSBkNq1Km7RSRSavSKUYybJHdrj9xN99mu6PjRGFzSkquoQEy",
  "key13": "2ALhwaWLuca2dyB4RHtFWtBSinegFcZSkzGWy6Y4ABLXpFMMwm7p5GZu67unr7ZQRbk6UZ1JwhtYSqb6T3WmnP5Y",
  "key14": "DkNY8tcjNgKc54DS1gc6Q8xkYDHS19UhgjiRHDP2E8DPQ6mSYvQ5HrA83ubX6HeWFuMGRktd9YFSbTF77HFpprq",
  "key15": "26HxSUAcyGXVzmMErYk61ZjcK6AuEXnG9zSBVpA39arUaR2fpovYh8xteXPHTtU7KtJJDmzBGmwVNAkid2tAaK3h",
  "key16": "57XRnLreKrzUuufGFBKzD3R7mYFGTV8pginv6SLtG8UKibGFysz3i8i4L4n4Tz6uVxrB6HX33exZa3dCzANQurH7",
  "key17": "49HeocX7oXiGvnpkHNX71df7Y28cEYgA2tcf44iyUUfpyQG1WCQXkuSbiW6jmVGX3Mwu9YmTXKj4bGeS32gjzsRM",
  "key18": "2m7pAGDAGsFWARRBD2r1BWZ8ZT8uaWjzqFX6ty7JKTnxEWe1LaSjzfxPS782sWob6SWr7sVW9d7GYsFzLgnQwgPY",
  "key19": "3sdTwPKRHtkZKcw1Ng7PsvvaqCcYYU4Ym7dFFHhYTVU4vwZ7799BGnpSXzDcCnftNpVgw4hFLPN12Av7npfdgVzm",
  "key20": "2nDeB1BHA5so4ApCBfiSbDd5qsVaRsNjfn7AYkvzxE1abmAu7gBySgMwmQz68DcfWNmJWK3fPCAHeJAfGCcB7QVu",
  "key21": "Xu5PhWacNDod7d7JYHSFR6LLovyT8G19rnyoU6mTqrLXnwxNRKKpLknWNaz2NqT5sMAd6yNoaLaznYZaHefZPg3",
  "key22": "4A6qvrxbFuoJJjYLu5ExeKC9iF5gEuSyZPp8LHscJ76J9yCpAC8E751zCRZDTTJJXH4BmaRYYXtxFYQMPrFgfit9",
  "key23": "2jLqREnxPe18ybXwkPgeJYsJQ9DN9BYo27o1gkvPEjPWaCC7LXbuMasCh37ZD7TsWK1ufcWmxG2RtXJPjU6MgECu",
  "key24": "4wrNM37mZ3QRD3s3AbRsa4FLHuNuX9ns39Qq3ShnsZZBfGUhAWFmLHSDsuMDN8271PCW4SRBuX6i3WBGdhNnRq1n",
  "key25": "3TvnKTa64to4y8ihRHm2vEJxmqoWMTXzwMxwJGPpDz2SZtWNboPCCz6Zdyt7ZzoRs9NHZ7bJvygtXXCtqg2MUZJs",
  "key26": "3t8QQhEqTAFv2B1zzmvjLLXGmYXoQaG1vtYGxXoKaKDpqQRkvJTaMu8Qo6GHTNH7J8RKtdmJwB6DhdjeAwS3F5jQ",
  "key27": "rwsUmJQG7inN1o3MVvQnKRYitdMH5qMGxAGak2KRUkVJL6Y1n7r2FjJCNV611dDmqoNvoWfFyvkyPxSEJh8Auzw",
  "key28": "4G7Kmd8gkrPtkSUa5wCRfk8hvXJXHbDpZxBKmTE1m1UbMHSqVwSwiWUwNXuFFL4EJYZJTucXce1kqh39zganrYxL",
  "key29": "4JsFj45RDpJ4t59wmb2E9nLPqTuuD99p6AEosKqcqe3613gYqoiMzUBxzmtYupHZjr3e5LLWh1L7zXhHA4ArWbD2",
  "key30": "4xF5CdH5mE4RqWuw2UDraFrpv8phum5xLaXJCkzvY5X52DiLsEsfqXgQjJsFQS1P5fZWg8V4SfuiCWLmTms6N69W",
  "key31": "41wFsphRL4VZ6CZZyPyxUiRSHHs1w4kDE3jNikF6vRaPYTGQSbxQB3XfsdZPNpNjDsjnrgtre8XnKXNJrYekif6z",
  "key32": "2mxeXMbEjUK54wZRobg9fbUixnx1Fh7aDnf7v5mrETGnashDcqSGV8BcWpcrLPJ9UCmoVb795uGJ7uVmzwvJM1qe",
  "key33": "5Hi5UZosZEJr498ptrsN99b1LsbypX9v6rGewxetKTGETGQf54fzo8s26Jb7ACxnSmfnhuqHrPc7HGHTUtBBUsEr",
  "key34": "2M7kH6zZABsGhirnQKfP9XeuUL4uaiYTrNJ2YUoj7pxg1xm2NUfAcJ6mAMSn4Ln3UfSCGbY7rzQbaeeLzYVxNQLB",
  "key35": "Kc7FDsLMyALypb5SLHfJsW5Qgro7AXbYzYMvKKZLq39uh1AucRE11YjoKzvxCUjYx6kLB46Zzq8wFD7WMPFK5aV",
  "key36": "3yhghS4EGoSX4Ccgqn63bEMScPxZGfJ6WtMTVZKhNa18BNvEJKGDJcyJoSzeVy2yCVR9oD9VNVRMgb9pUEMQFQ2A",
  "key37": "3nJUK4GzVaeLED3bE1WYcUC8dSjUUbCnuySyrdyKfzMd31WpnBpSv9gvmNwcsBVXPPWgsKUUJjPKrtn5GtSqdTJU",
  "key38": "3WGMYX3XnV7vMkDUhugA3YmSDqjbNjKkXgLseR3pA296nXqZN2ZuafYeBooRjEcxArjJanix9xYpDuVDgc57GYdP",
  "key39": "WaRZ1NMVNpJZJssaTTq1PzebZ2LNx8d8vkvtztavNi6BTbsuteezu2rs3rYK5R544UHL8wroVjHjrNPPJPGgzPw",
  "key40": "3nBHxUcMxSHCchGrEu4ZcpRpBpD1MSQ89ZN7e6kuPeHhk3yuNtQUFz6hBLBRZ6N6RLQEYKWvFE3r3rByMdGGw73o",
  "key41": "5vUFJBaYuzVfEvuC1fpzmGywTMc9Nt81nDmg7U2MdyTDgUHXGdkX8jpsDD1JGw84Rdxpx7F3NJWE3SWWW6ZAevKm",
  "key42": "5vTxr95YfR9ghRxZh1GhQzMwNvwdWsYuR4R4pxwNAJafFteoQxRp6ify4FoXj6rXhpS6wmW1Uwbjd7tQFUNqvxPH"
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
