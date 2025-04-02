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
    "57weBHE7Le7nBaR9gvHHPUzraaaUD3pKpFofFVuRFLh6eqPi5BkaSVcD5xg4Y8zod7f7ZtYkwndEwRRtDUknhTpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rRuHtHAQU2Sbfa28nGa12UyD1vBRU2CXdUwwP7gxEMDco6GRB9tyWt4xDWBf3PLpNqEWqzWxLp6Jk4oy5eexDiH",
  "key1": "2W2cYYWHj2fGMhZTCzHXoJBRnC2FMDtDrJo7upsjrqZWX8w87p6UT5rbTU6EzJQgEeUCoSGgyb8T3tUPnBVTPL7m",
  "key2": "3hxiv7MoRKZdHcixYGGUDnrrZrpY3kRfibtawzG6MNQ4TEX7xS1Z8QNHJ4DNatqRfRQZxagLGqjdUwSTVEQqNHi8",
  "key3": "jgjHxibDYE11NJjKVmGSjxMPXmRXVw1HfKfJxDYDMMFqr5F6mpxeHT5nK9FpfxYjnGjQhbYvjLtBdtubZbBJg4a",
  "key4": "5hkLL4eMpDhsjPwTkoUVtmWwPdLXeBLbg6sV7VtAS6gikFv29FTXBuFHtumFTvsdLkfhk9AF8rcUrJkyZBRAvNQ8",
  "key5": "i5ov58mN8J3Wpcx8joid5PZ9oHbgkusDnznrcBPxA8V9PFipLbDbdXjNSu1y1W3kaM1Lu6n7sDbrGhqa8Vkf6K2",
  "key6": "2FxQhTsiKYKiMtTodnsHtZ3ef3qqnp7PETU5XWNDA1CrHeRX44dPETfKihRkZEDN3zP5J4pNduJhRmyMsdtF8S7N",
  "key7": "5tBoCohEhChxdTgPvDy4NaY3Bo7kvqf4cakmRgVnTjTYQLVSwcDcWpcrUatEGJz7Ya4yeTTCzJPDNKtQ2Vs27u9c",
  "key8": "3dV32nj4qtg8q4yWwwN97vs9qxFdJf1NG4BdRUA6VxWuN3AVWdaG7Asp2LUWEjh2tM9mL3wADfRyYBz5tUBsuZzp",
  "key9": "4LU1iJRp85C9QdvhXrcZBSTKHYYBcZnPEoh5A5Bhp9xmMVR7XKeCZBj5KPgkS3qVkA9Rp4y2pZigvRAPyKZzsTK4",
  "key10": "66kWEUsaMoAaPHpRCtLkzK7eYc5wxtxARqScGJFTsRf6J1Smxi3UfXhsk8ZM8f4Qpmio7naZAUkVhJHRyD1bwe9C",
  "key11": "3vhXtjjYvob8x3SmoYyRKzLNqFU1nciU5wFsNKRw2HiVYkdMsHXTDNwzpYRRZBpdwsSJZYYR48FUnjcw5DhWpsLS",
  "key12": "2tbxpzT7QUjbxV9yXvkjjkzgQVrxEUDvcq3VJehXZ1ggcsijiPKtY5Rf4Ef8vNQTJNvhdBHok4VCywSRa6fA42DF",
  "key13": "3z63GWmur6bCzgEBmhs5fhabmkLnhi9NGhJLUEjQZrEVNCRQGgut17oasCmPygvUygDFkued67xgh2PaGtrTvAni",
  "key14": "4NwTfzH9HmvTd5R4DSEzhZctUSyDm6ZnMHT2aXQG6pQAJLBtbNBfPYYCPYgiRdA6MBqRT3BMeSWhNzALa98HcGwy",
  "key15": "3rF5XwZqSx5FNbi3gs4pVyYfbrM6tom2GiiHHLLpUGufD4jxfMWwYbXZ6TdpcBLFENNd5qvzA7VNSiYC1W1zuzxt",
  "key16": "2hy8P3h7tjbuaAqNyb2eYRCxGCqqtwfU5BeEg8zRRqYJ1EVmDo6cgbzq42pMEBCGp47cxwgVKY3CH2pWmZz7Ghzq",
  "key17": "nGynNZRtTgxdbPeoFBcJtSooYiKnXdbKMuYDySW8wdgvuN2CeaRuiqC6SrDoMERqp5N4U1dCnQyFvyFLjpQ89CF",
  "key18": "3b76w2f2VUQyJX3gNfdn1xTEWkoS5UTBE8wBDroNUupFeMKJid3UAoE9aJ37Q9FqUzvVfFAFjsHfDZJMZGbjksTx",
  "key19": "5ReDxFCrnYw4uZ8fN3tGNwkDepQQceKswuGMDn3mwrKwJ6hBXTRGWhwViL73mpim4ahfbsEMcji5FB6Ga547KDb",
  "key20": "naZJqQqKX2rxanHgvppEsTzyv8KnzdbGf2ukN2nEUNoY764wqvLhnvYybHBWRr7JU6pErsPoUNHSwnUcz9Q47t6",
  "key21": "hd3ug7LHEjBy25RK3W2dVs8qJH6G3CKZZkfw5yKByXAtChPBv2RZ1JqeMawpP3XTep1UM8esP8U1Q7cCB59JEwn",
  "key22": "57oML6uCFnFkRjfxHF8QcSzPMsfSiXEwZeT4VLaeb8L9kvZF8FYb3A5564RJVjysDbTCDsrwnBMep41XLExLHQr9",
  "key23": "2o6EbVYvPGxi6NGaR8yW8nh6SY6GkxrKuenTDriAGabL3wF2zmSKqp8uAhqPKTTuhkZWgnW69h8tFgAaiMY5rjfn",
  "key24": "47ZC5VMX5vtNQEsaQXTwXrPiwKKL3yKfqow3cFLyJg8X5cok7mKsKrgVD3Y4RZsPgvJHhaMtQbBfU7Zu3hmiEHVo",
  "key25": "5sWYb6ATayK4AH1QtKEyGK5BfNRpPeYaejGHqw5z1VWjS7LooYJ5NQtUQWoawMKzwnHF81sw5krNbkjpf7q2aZoT",
  "key26": "5gFcdkJBq4DBAMMiRAkH5Uc6nfwwwsPA1onsGgBSKezm9LCeqKhsfNxejyPNfchviMPXMGn4pJ71a2HTtzjYci7r",
  "key27": "3fLG2Re1oBKYDmvj25MJoj19NsFzzrDRfiuVw7hvcCattMaDeff8mJGZxDdxchuCi2HgUuqgi9RgFNs6UteYAhNP",
  "key28": "2cF74u16qesn6ZdGEz7JJzn9eAjpxL5k8Yidy3YdozzL6uNjNnguSY59AW7S25aeS7GK9xV82sEgSurRaaii24qg",
  "key29": "4D5X7exrD928uRWtCeFLnYSxJ4mGa8jQEgNkY6ePrd9hAv7JVSC93eNir5pkQvkiSQvBvP7URnYjsRf9kjimLRNb"
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
