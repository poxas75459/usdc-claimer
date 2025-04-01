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
    "2tUDcH7fyvHNFiDDHhc3vjNmNuUvrkwevJCQq8p2Zybd1EgUkihMKsdRWD5NFJzkx3Qi9yVPS78tTu4L42utE7pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1izCUSDqTFFm8GASvAXi7RvRd774xaj3sb5eXUat1yERekzsHqiA3JbgvHPizJ6FgB5WNSyf6oaB7fGycYbaEFG",
  "key1": "3sMC53gvvZLP4knzQ946FzNfFFiWA1SQH4iBN8tMam2UyypRmaHCQ2cAuXf2oiWkqyva51fc42dFsdFQ1y1gAKtN",
  "key2": "27NapeaRbywAmNtuXxf6XwMp3M6QoQeHMvEv5p663Xt4G5DsUYgjj4WNdzyB89y21QFi7A7hqvVt5geUUcJw519g",
  "key3": "YNoeSTsa3TQuXds29E6nq7XZuDh6rjKjnwpRH2CbKHvB8uRRqbR74EShMdPdpMk7xLdkS46aM6LN4mXDpgbW6e2",
  "key4": "2HLKgWfNZgmEgSFQewBTzsncucRneeLd46xiiyWtHuYfCU2i1c2fk7XC2chwzPQvUy9CGdkhqGTdDrmCwc4xcFLm",
  "key5": "RsyzE1CG2xqukCsHPKARnEWUMLw9WKwbUHiY7wyfEBwwh4gK7DmEmLvSjsAkvTaJ97gintvi2A4Wtf9e3DfETTw",
  "key6": "4RtdvxNQZr1EwqTBEFDbinmmUunRE2V6u76ckeyLLiJwhY7ZmA7aAbYVtJbqj5zrTVo4bShKQG5CvRf6f4GcQpH7",
  "key7": "4HKfMBPSoo8ChGwLXbtPWAiYWEHZxYvXKVDbvpWXG2Jx3nuRiQVYZYFzj6gbF2QC2jVymCCKQdPM1HbqMdpkCUrX",
  "key8": "4MWrq7zPmkbazGWc3ejvPS6CixhLQGXtyXaCTi3Ws1cKSSVSPd1e2Nx3S9AVLvjo8CJhrEy35uC1t98Nn6VkPdnY",
  "key9": "3bWTD3u2CL7NHE8jfhAGfJhdVnRH1nUwFo8tHTGbPjFtMNWbLVuJBfja6C8Geav5d1YJ41KnKtL9UqBvErpupCb3",
  "key10": "xXTHUyxwcARXHY1KYHeEMd3LpdXLgcoYfJTPdoEjyeKrtYpF6XXrCPMq6YhoPgJYPXwj32xqEqAwdMLVfTAsjTz",
  "key11": "T7EcpXhy5CuPrkfx4FQsiUuZWKCpGvgHYFG66v5KsAdLdHQySZWkyx1RCvwRtYURWLUYukieUPwjYdoW1wvN3tS",
  "key12": "paRP24ahhbV5wjeTF5vASPeM6bKKFQqvPT51RSjA5P3RE7fwguZm61Jv6t8r32u1XHCeK77Fupj4TewmSg7kPZy",
  "key13": "5YPr9F8T1unWegZ2pHrdBPH3Ewh7ezpfoTE7sZTmcYRkgKim2SkUkyBBi92tT996Wd4GFCZSkcenQnfRDyUVGMiA",
  "key14": "3FRWr7CTUe491p2pttKFNgEti4RczZzaWjDY1sTaqjC6eY8CuDp7hfAJkeSKcj4PUwazrfCQT5d5tjHr7GcsguuM",
  "key15": "bBu5g2TkrfhVuWBb9DCJGaNK8Rcf85cHEbXGmnUibao88HvF5bUABMSY63kpjLRfwWE7bZX1UAWDmk7rNLd9ep8",
  "key16": "3vzRtUvvZYBMWPVZ8HUGQDKBNeXrfJVAvN13Vt5sJGxtX8Gc1DE5Z4jK5UDXqUpZVv3UtiGhZH59J2fMrGYPHLzP",
  "key17": "5SXtHqaCs26FWxCN6PBgaEzT5puYYjR4xnMj5muWWF7JiQNCVXHV7oXpigLZZYmKcKyFb1jixuXZwQcQc2iHMBUW",
  "key18": "3xM82Ph2sLESHT2v4PsHrMfVi1pJyh9GkuQXipmaCy71Ji3ADjhVnFT6PEwCNDpSPyxyhrkxWhrJav6GKbC7inAP",
  "key19": "2UHk4rQZYXeYgS9HWWAFTcoQPJaH3Cj9juX3XEMVjXX1NH8fdyxdRP6QyHk7pjYNfuSbjaAgNhuUoM9MpDgHb2UR",
  "key20": "5ikWqWrVsPnN1AUTGbK5f82AB1Mqg5aCNtaJTdnzCwuNXHSevqUfSwTm7Ahbp1W1YAo14bZhY6B9tc9j6dGBEC6i",
  "key21": "4VLEj4JMpejtZjjWJvo5N2WXhC5XzkKLBemWimEYSLkR4Sv8C6E1B3eA6bAj35wiZYh8Z6mgj7dnec7zDmAxat34",
  "key22": "VRRPo42agrbQEGZzPJkiadyJvorWA4KP1ZbJUyj9b65GvrtbUCSRq1wt8MiqFBq3HrFVGKUtX36zK6qqtbabn6F",
  "key23": "VZVbuYELATAssoZ3rJT2tCPFFbV6tg2DyiKCNdEBjExDSUHgUE6oMh5pWbErsTUedkLc8hfCJYKZEuG7EwoRGaH",
  "key24": "2EEsxTTGXSSCn8B5ewa4vUGkiU8zTDM3mAzFvKr5Mgpndc23CLGrNabKWXNDqCyZWnRt7wEsxd6sHf7vfBKwwqyn",
  "key25": "5GoACfxNmWSgXBz6KhYSJK9A7q61uRFdxPaJzeVQaTyzvVDhtgEN4omYdVfyDtfRXjqMcCnddDWUYn2nLWU2TofL",
  "key26": "3VjRZb1EeqTUFQAfKmJ7vZKnT52CUsf71Kk5oFADqohvfyqPvcuhoY7uSw1zW7jGWzRGViK3HijQUApp5x7fsese",
  "key27": "2mDv7a3JBsNhT68g1nu5ohGxR8YipTg29ddzCVE3uCot2cArLyRhEEJroWdbfoVKLr1brQJkstoCSXiJJ11CqBnn",
  "key28": "4SVfhyZ3QbeSQXmaCn4GsxhUzWAsZGgr8xkEDJp89qCVgxKt4ZdhKFrWWNWT2vYX5MASkBNVah5AqDteJ4STkFJo",
  "key29": "5KFJv6NK7V8Ur9ayATWyPyfeoMdXsLtSpoPdG9RhR3PEiLwaURCx21JtpdmRAWSdWYKeaPf9w6G9TUsXTUYJaYNC",
  "key30": "3pSMeDw2Z2zS7CHvk1bvesaJxe5PHo3RcHgtC289yyvmB8s99sKEjMJ77uoBu4jwi4iTGQRrGfRn1TvfNbft91db",
  "key31": "4XqoUuVzuEsj3CCMi5n7uhCgt1xUvw9gxSEwwuTe2fsj3RnfWyWDRzbnDeUcGLiahzUaSW4uLZDUMtgNQMxBucVe",
  "key32": "42hfh8Pau9hAwqKjWr2ae3UhBjf5refbuMt798j7ib8nHtKj9BM9zstUsjRWvjbR778LL1JKWWWX6SMf4ceKwwv7",
  "key33": "4f4tj5cwzHCjfSf7qXZyiL9BxGLUMUx9ZPwWK67xBM1FaCCmRm1j1bu6oT4nVi8JWxeuCAMTsS17CQroHwwF4263",
  "key34": "66vEeTGZGZg4YDsyjF3jvdiXwLPAjXH7kMfCyBnJjL34jwDDo19qnia6no3VRuMMtCc9Qyhu7K2r4GcbA7eZCcrQ",
  "key35": "42J9VQypdoNRBNfvQe7UqTZLoGcgdoeJYnq1SYRnbQ9VbhrP3HKn7wy55QmDyqedSJZWu7m7QKLgddHkRwbkRWa",
  "key36": "3gMtdCpZS3k7LqVuhHub1SVsw9RtSjyhrBUVQkzj7MtAiuYwXuCzF7YnZurZvH5pZwr72JTxfgp919HyZCSdpFW5",
  "key37": "4hVGhMDg6nL1LkKiQ32gpZxkZ1HCv5PMagvuqA3nPHfpkXmAESHHcdyxDqa11MGDR5WJWXeoYtWMTwYLzL9YwrFP"
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
