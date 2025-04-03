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
    "6uKYg3t1aGKcMh8DeKAYXAomj5neLWTfG1sh119DgHrd6rQDcAHxVrbmJXtCMxvgWnqi9UtFdTkRksRHBEjYQLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPygyybm9RrmDcxEykqAPxiS6UGwpRMM3Cgy6NGwJfTd31b9BnLDXJNG6zRgR62Gm5YWPJX2RiEX7WAPhu8pAaB",
  "key1": "2wFVNFDRjQ4UkNDYaKwZx8LpR3PZ3FNmv4LpQsN54z11WwcW2uiUfmCJvkdVRQqpNVDHVzE3VvzQcUWSEK3LgXBC",
  "key2": "MGx8qr7qvqaoLusJu7puvZkb1nf5J6co3uBVWriYMUJqVuQskU94GWLKp93xLmVDmLGhBfVPY9pZyDx9Pkixvs8",
  "key3": "3GB7Ygi3UGskW4TuU84MnYWeyZyRKGxE2tUtpCUGyam6CzrkLr2MbQG3W82UL4z4ZZh5AN63S1hthmgkb6f18vEC",
  "key4": "2ZVs9dS54KUxL84Ur493ygtew4RyYkRwWwKj8e6aGyYJDjRFunu3nsSdavAZmSXyWh742iiCXkPBgebFFzPCZDz9",
  "key5": "5DA5HoGkcG7HpdW7si3acKy7etiUiacGouEByo5fQuRZaz243knRqNeMGEQuShfQcyxKQi1t5W9M2Dsdy3qp14qx",
  "key6": "3tJ2qxBB3fPpmXKRcsTqEUMp5AfLdygvW8yEkd4FtXZx68nr2WYu6cZur4VKJ9B1HZJvjzPN6bXn8hYVJ7oaNiz9",
  "key7": "376qaTahoEt27cuXK3qxPUWWuD3d74444SEz6ceoBChDqZgyqCtVfrG2aVyUEVLt3nansyLpbB2FHuPChbFd6PXP",
  "key8": "26hhZ86ACmvnAZbmsAbv4G9nLynUigpfJRHuiciMds41xRTmshLkMBEoiJyzHyWuLfXBASuAxu1u7Dx2w3oJc2ZJ",
  "key9": "2HiEQ67Gkk56uTrzzPjEgEqoDpFSTRyfYSUkhzQLNdaQQcvLk7puySxipwUCnxF9eNrmkCSunMFp4a2DiArUhV19",
  "key10": "3eUXtnxptbKhprfWez66zKCDLb6MgjS1TmPNTCqExCUUBTMKjtki1qN4ZTq8JVwCFokUDJJwoHE48U9ooMN9fPgA",
  "key11": "3MYLGkAu2EfgPNwiM4zEY3UVk9q527qw6E3hhLET6bKHeNQ8wjQJAQDn1gucQSsvwUEDSKy16ycMeDfPSoEZT7go",
  "key12": "Snc16fSKJ1yd7W55pVHvHyKcoTUqsi6nCEqBAc9o834soejkNXmL6iTA1tDhSHHaA9WthAvWf8qna3UfSGkb41j",
  "key13": "2mtdFtbjifGxJYkMNsttW7MVe9ngdeHtjkSKzuMez9HACZ8iGvgtrkpc5ui5oVPVQpd89XewSGUT7f7wbuNxszvB",
  "key14": "4YxaiotuZEtapzGE8f7jhvaPvi4vPKN8U4sB8cngAotvaxz8zXqsPfNqaRYfzxR4rdDEufB8dmZe29gXM5kuSUrY",
  "key15": "4yTRzTYrZxaHvWTPxw1nxwtcSUj4RcSnbMpByVpwPjC3P1N2qkDT8CWgpzQR9cMQ1ACgNZyJRVHZf86kKcsv2cVq",
  "key16": "3U1GQ8vs2HLSp67Swi7yb87dh19NLsnK8QMD6QynmEz2iKfegcamKJS7TXWWWGG6sfUiMbtX1KgPL25bQASJyEeB",
  "key17": "2t1ygF9Dhjji19P9U1uJ62C4HEvkeA5yAHW8FVKrnZKejs34tTuvrovroLxUmpZu7Liw1Pjp5NNQTKPaJ41fjGiL",
  "key18": "2SjHCrbWmY1QYQ3ymkxynMQBFR7NMRvdYxFe5jXQFtCJmmVCcmSC2ySYF3dyAUXwVABbJcoLQ2SQsqt8wV1KFcJH",
  "key19": "4MSHY873ifubSfPGXZpB6Lv6Ggr17vD9iNMQ7NmrfKZD5Yeh4Ey54cmioMP1N2aGHbUEyieoGPrcep7XLeQFzKK8",
  "key20": "56v7RFf79PzQF6PuiN1iRMHb5Xii3VusgvDfDxHj7X6Aj1P69nhju9KGhRBa2zgfbubmxsMuEYFaYnjRsccZY37X",
  "key21": "5cdQ5nAjZ2TaT9nwpjoiMGrA58HPi6sPZswFcqq6D1wkSu1ztFdLkNbEWeNpiH6Upz4zrZNgX9pDY4fYsrUKKLaw",
  "key22": "4gRN4Ea4eaWxcTCAxDsqcnHQbVGCs4GN7Es8BdPia9MWycTX9JobbgYYjjyYByRA3uuweE8xL8m3z1TqZautgbmS",
  "key23": "YQRGRk9157qmDwaH39HDEoMp4xbf1nFVhX7v61tiGDcXM2cwnu49sGuNgBuFJeiTVATGLjRhnZubCzGEqghLQ6H",
  "key24": "BdvbT5ZyLNKVSt3wofSzrXaFVsfstZ4RBSDv7LXtoA2h2jNTpsoekptsfHLK2QxPEZbZumEdzpxJ1oTJSdp8LTL",
  "key25": "5U32jFt6o2SPSwqb4svRCtosaHw5qtQtQpgDQ61dacfWdJdzgZ98CZVq9HXeGzeGyRwEXhYkMDxWCuJH3DSmtxQk",
  "key26": "tmGZxJMQAA6wVKfQ3UT57LCQYMyqGNpyjtUqSGNVL96hidEa6RGDkM5ZqinngE7ZaX3WnNtB2xC49c8D1MDrvPR",
  "key27": "3hJ1gRDYt8oYAWvZCANc5HEidjmqEjLsaLsohNZTRmG67rK6rBTC8Kb4K9yaVAJspwTuCYoon8HQ8M6ZzKFoWb42",
  "key28": "2HJXCEyW7sksE9UBgcQtLTjn2SSGmZfXowppdjqm62ZTUxiSfobfFqCUKMxuD7BoYit3jcjfXKLsdnpmiEPN1QBR"
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
