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
    "24YU2AsYeH7p5v9THaNH1HxYpzdY7PijmZomMtWLkhHfimm3X4qkfP2arPN8yvgvAotoB3uKjprEmYMH8iHataGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B5k3d2jd85BwBpLgrUTr3WjA93XaaRYCryRB2HtBof6RVfqCUTaJ8qceeT5Bo2GBXAXN5MW24sdmxtL9tjMDSzR",
  "key1": "EPxfX6yJsTkBd4gTXshra8oGGzbmy7LbPJG11Af8hhWd88WhqVtyuNLsUUytUf2kLABHEXeeA359DYiinr2t9wy",
  "key2": "3zyPEuC4vfedhd5sQPdvpsqfW9eP3axZrZupMMqb12bbUmHCPCerGCPPteTZH2fypJHUDo8ypN2wBgJpM2PC2B2K",
  "key3": "4zsbUxzmGfM7XDKHiDnZA2A8KtG6bLBkMG8jhXrMg6xjCmg9uhx1jt29fTtLSNgMLVk2XFZ4zik5j4Xfh7ioG4Aq",
  "key4": "2SHgbHiKdhxKLShYBne1w4EE6x4kdvmMjuv8zbgoWz5xBdwRD2vLxDFostLeqVGp5WkACid9rEfBJ5XwCQqD3nRD",
  "key5": "2m369m2NXVTgocr2h4PJnT7t3FpMgKXt54TH3MTbBRsmJAN98FjnmxW8Sd7PMFk6HAxv9hsB6DezfWX3JZ94U22o",
  "key6": "3RxXftTG22gGeXZy6WDbAQWSzMqu9bQTZ91VqBGtBAoE7SmvrtjgmYzW3KXs5bMhAYv5MTkfcct45XWecfvs7vob",
  "key7": "53xL9K1JqwDdMxifFT5yXVRWzCCt75NXcsfotbzEbmkhsKbVtvznGRbj1akq3q2dW67qNFYPcCop7mAfjFi9ErGH",
  "key8": "4CWBoPuGwxHyehpvDc5LGYacBfTXo6G7hhoebE7316dnTuxWnRNxaqLBr6vgPRbr9DeWsuMJh5xpD5YnqS8mEo1H",
  "key9": "5zKeQY8R8oPc4jndM4z8CtraUMKr9qNjda6HArDEnMfjJCihJ4RmnW27pQXBxepvzLhCLHrRyUtnX5Yyg9MmCaAf",
  "key10": "PXp6QEZ53iX9LrAywREfjrez1wge6rAK5HmxDzRS6g5adjocERvLXvTJ5LzhxuqLQBh5vroBUz1nxCC7WAYC937",
  "key11": "4ij9mZ4KWGXm7v5KEaQVfjb3YNErJPD2a57VngWfLgNo8zQ4hokvimKW3t6S5i1X5E5p1bFxX2s4hHgErqznxrsu",
  "key12": "21UEQV7kuNxnVQEXkP2PskHmtst8dHhvyPQshPjY8CB3ytaBxtgqSYzXQTkWB9xJhBs8jvjWgmiUxEGbPWSKGZ6U",
  "key13": "3RSosPNV9aV7Z6dUtr2Cx7usKPcHRy8fSxXmHxNJ7MwnUVqgYCBrWZx1JxLxxQYic5iofmJJeUuGY1gxqNdEW5WF",
  "key14": "2PgqStCxobzZDGqSqCreTgAavhUPA8nYpjUUKUW7ZDPqbuAPgYidbARXpdn153FZgjVD298kCRLH2jRXV8hY2cit",
  "key15": "4ZNQowRFWvD8QMUH9qZepsWcJAuXq5QQiregFmVF9HvtmvA1ggNBakb7NDE26hByiZb1YZJjWHMatjj7zqFViZ7T",
  "key16": "S7vxMPtfgmWuukCuw2vYENo87wqScr5muMs7peGqcGipYj5RPoLpYV7RECGxHWv6o6qfg4aHSQUQpSvNwSacsvP",
  "key17": "5qi7nAZ1XazpmNbb47bVHBUp8aCHqpRDBWdebMM5Y4HpgjRwa5sLy1ZDGsxgWAqywNoXGJRBdgLcyX56bAwzWCMX",
  "key18": "4uTC8xE6rxQosRVyfadV4t8zYiuxzbAf1jc4i3RaWUUdzpZDDTMXc6ZQq1CEzmH443iuU9gB2uK8kD5WM3F3kUag",
  "key19": "3ymRBBxxN8yMaVpbawkJFgLoZ8awgbTYxjBXa27FY26ewnU2er5CpiriAC5jeUKzH5HBmHPLQRSEKKCbZs58D3yY",
  "key20": "2JjB54fbkgqsVkwzQtTaEAoVDezCqrRvDRzE53ueENvfa4ZktVQNgmFaiB7tVzVaAJFuBAjikWccniKQtMGeSj4g",
  "key21": "4Lz3gjSBuA7k3th1DNrCXGncBGSRMFzA3JErqtdqiHHnVXkkufQGQwdLkcdVq4tnbJqPsF6RxxY6NDBnyvwL9CjB",
  "key22": "3ogC6sw28ZGgKBfs3qLCjMqnvtRjrWGfBAqxNGSeA8yAoFSnGrsgwQcwvHz8ToRDSWvfbiX5pujJ1Jh7qpGZXKbd",
  "key23": "5xfLiTD1Hg26NKt8XJBbBQ2LF3z7fMfcPuAacTwQS3YfYjVR5hy8T4u9gvZNxLokUCD48qVS1CoTTDgoX6yEcnhZ",
  "key24": "3kCaoeX5EpaFAR1gBV8su5DhdYXP1EJ8Bs17TNtppAsZ11zAZF8ECAFBJobWzG8fGMFsrHjKb1JzJQJ7tVWfUxYc",
  "key25": "2RRCSEnrBnWSuoTk2WUqEww4jtAsYUVH3kDHU9icyJTE46xFfqf1A4Fn4qRLeNCLs2nSgUfm43XtnvDWpAE4xuW9"
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
