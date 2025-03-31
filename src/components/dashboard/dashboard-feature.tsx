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
    "39TtjUb2ZkXU53MaaHThhwiZb4ubiKhtdUiv9riSDDTXaoZgpMFtDsXDfiz6LpgtotBbk7XVkBFybKPqqgr7HTDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WaduQWoJqBEWVfxmLiGseNNgaQf3BLm1ys1raL6mas3hbcMsPR3TKE5qJ3nwfDYM3yBRqKCbWYZSF7tZVfFd1eH",
  "key1": "4hhx7rxwCRayQ9ESii7puXoiyCtbyFXKo5fL7JMybuU43yoAiZF3Ldhr6xiQgZKrfgy7eUgij5v8GmbEVjngJGTd",
  "key2": "45WWxFDDUUrfxK1H9s7ArZw2Msjqet9XfM67wUg9Hyfoup1o5pPcoyPdygn8b3pc4aUs5VxhYL3AUxw1vqG1cbsn",
  "key3": "4KuyiRv6A1gD9f47QZzWVCBqqHjWgsgdpurGDu43NzhDyMqJxkPPf4ETSUu34WnysASTyLfn8ZsRNF3R6ffaUh3z",
  "key4": "4Zd8QzNxGDQAmveesA1TRtGoU4rxEixc8hfDuHxvhg5sEhz1XNeV3asxF5MzS574Me2ncFAQ3dKuwayHXjQou5Z7",
  "key5": "5JgTfaki5NSiDbiZLFSnnrZSmCPkmmsL2HxfhaD9k5oiftJ1hmLyLC8ybKXWxygCL6uTVcniZLad9QQMyEP9ZMAp",
  "key6": "3X57kHk2sGvpRoWXDw1zHAduKGEbaFy15deRhruvfJipZXYPGjGL4Vb2wkb19KbYXfssPLdVEZovDLLfBSQipUpn",
  "key7": "5zXo8Wu9T6QJAstJncot3AvAKqcgT2dxQMNZrKunMikf2zLCYFHqUsD3DEVH7JkoJPJwMeSn3qCvQMsX13JSV8TL",
  "key8": "jkFFDzSaExNyW1Xw1s5MEx88SwvXeKD62tPjq3vQgFwEptJycPWBuoWbm3Q8WdxFTzDZfMMr5UEMVVCE79NKnRe",
  "key9": "4JxcL1C1wPfJrurZqo9DUFcnPR1fajCGcoSpiLrg7g3fA5NeJxRjVbcRSMhhxJzoDDLCsH67wb1MCJcvRxf6Dudm",
  "key10": "5UH6BvJspZf2mNFjuQJ327ggghPitRtweGqBAXtKBCpYbWsj1zyTRnTiYKbXruGQ6qeNQSghvzSWYXbSWuRYD6Js",
  "key11": "3kUCFjgCWiypqNn7TTptsKNLTgMMXhBKXGguBmyCaFkCHEBoP6isto1VW9wgMgQU8RERXkMtsiqQwV55kZLQJqTc",
  "key12": "3d6jEDkds3kPoEMZmi1iRQ2ANcBexuJgsXydw7rBhvjpjquALT1WJhL15ZmbsE56gZuSMhCVpFTuZNSYQpsWovQq",
  "key13": "5Biq6qjkVyM4xhYZ9qELekgk9ri9cigE8BtgMTqHp8Xsg6X4ETxk5G7qRCkG4SbVSNxns9JmVCY2QBKvoprApDT1",
  "key14": "3cYgh93xZ2NW9Pxcz1caWv4s5RXzWBTcMTieVhQTk2Mhy3U2AySAfbRANYNCJbiVg9KzMV3PeE3wypNQqMZsKkqu",
  "key15": "E5vkBYTdwGspFiPqcNuckX2hTywLG7hzLbjfVHamNAVTf6gZ2EGhDV82kSSquDhapqXJXMeymHi3eSuatG5KXUk",
  "key16": "3TM7xno1YeT2dMhdq3xDcu9mKG5dpzAHuD4iKKkeohXJDDoZyM3rs1AHJw3Zsamf8f1q5wrhdraFtNFVUzDHpJTm",
  "key17": "3GzVA2cbDHBrJ8EdLtUEHmUpF4nYr5TFc8Mcza4fN7BAVi6vV8jk3HRv5S1dSdmttFcHc7ReBTqva22Q3ZuC9xbZ",
  "key18": "4UN6Dt55dWzSRKAfCv1Qh4riVws8YuZeJXaiq8t4tZGjh4GEdEGzNpjjWuh2J5Kiz11rt4qaeRuAfnzFgHPHuUM",
  "key19": "5bAbu89XHKoxinKKeWrjwm1jsPkspJUHY4Q5FTXWJvPxbGWZXiNvvL8anVs1f1dhU86UzsS5Bb5ieKnL25ia1882",
  "key20": "2dXHxNkg5Ny3nqvJvebgc1AsSYSxd5sL9rdy3iK9rpXQNYF7e7nMLFC7ZbAFH8SMsTuHVymv9ky3ninkzL44ftgL",
  "key21": "3YDnE6LkhomrhDerC4DnA1e2bLWAPRLwUuUqygNA5szVqeyi1wnTUEfk654L2BWgPKdakKwRb81FgxsHnJuNfsnP",
  "key22": "Gnr3zJcTYtzGosv4HhprQX4FTM2A64n8vC8iXyPQucRguJuzgNt79DhaP4hKiunVDY15yRuQnSmiwh3bgqwRnFD",
  "key23": "gdHVyJ74gZFNFHamYft2UPxzmp57YhEWJKb8C2uSsevwux4HaWcTe3xhtsJJ1TciaQcmpGqUjqKbaWgUozsjMGE",
  "key24": "4eG64rVA5vo3Dahyny6bqMFjrkrCzBkqWwzCcGFJ3ZFRGUgn3s9j8wYHxgntH8WD5wDfGLjYVSusfvDqToJ52ew1"
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
