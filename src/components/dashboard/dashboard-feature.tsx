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
    "E4infVbuR4zzPNszubBdaUDDspx6vXhp8e3Wb84FRsx5iTmqQaDw1doybeDBGdXvw4hEV3bDittfcFVsbc2iX2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZKXuToSsjUmtfnUerGhJyiqGRSivBDH6hpvVA2zmiE6YphgJ7Sej1qrvcMe1SfeP4RE6EEZUaZY9LsZ7czWqJm",
  "key1": "2orV4yqHWYXp5tNWx18QJEJn6k5bSQkBJDSf2Aes44skJavUhbMnHsdUuJKcE2UTwgb84z9nt4jCLzvoxyBNZizs",
  "key2": "4iWrPyeLJSZDEFwWooGQj22Bqq3xmBnFoYTptL4jBYiRV5eMbS7dAgZUqwjitkvAAX8gfntDe7iCgJCx22JHMq4E",
  "key3": "2vXzty9Ei7dKZoQod9h94YKwqEfKCuwEPU16AzbqKsRgiKpfMuZzqXp5mkzFcycy5WrUWDqdtCxc6iS3y3wAoj2",
  "key4": "3gNtsQ4YzYbGtKphkYHAk3hidVBnnRsAifqifU1HpFd2h6LF91235uTjJoMwAq64YLEDNQpKrvNGKweoV9pTF5C6",
  "key5": "5MkJL324Y6XHd93q7gw35yzUb5puKo7Q8oJ2FfkGJ9KSKW4itewMrnTYkw3KNvv1ro4BK2XUUG39kTfA2ZAohiMz",
  "key6": "3XkdfEmL5gmuUmsUEUv1tP6jvQweJH3LuGukBP3LXU5PCu3EKSBFvRPcW46GZakAuwvpmp4LK7u4p8YDoMmz1kYa",
  "key7": "2FzMnCQhNhPFYMFYiasXgWrEaz8L24kprdbPKH7UKBJTuiUbuBJ1iXA2PW7Wyvg2Mtr5ogJe5sK7AcsZY7TKW4aW",
  "key8": "4KCypGUNbX63gdFjy5BaXjXfpdbnZTMj7DkyV2WpNygoDj6mSVkm1mtQWDc73k8sCFPahuStFGYcZWJ6q4YNHhD9",
  "key9": "5pzJQeTqywv7zh6MsZCjnTNaeJMY1mgTQrpdyJAkLDToP3b2vE2rjH2w2o4diCL7E3MHd4Gk4QAYZfNCnFiqwvq3",
  "key10": "2kGEvg6fpqBxqCVMD74m4zrXYZuo1YTyhBUWYmLmxwyhLZFcNoE3XghGQGqVogv4ynsR3cKSxbzZSCft2YvEXUAh",
  "key11": "3WMrJogA3cWvaspCJWKnwdWKxa5SNpKwkfdirFEh8eNhrfGz2hXoSR8FM8rD72K1No5h3e5dF8cgeYHPpFLpCLFW",
  "key12": "8XWfUxdUTSAUSWddzNCRDhNY3DyCaAKqDDK5aDrAF4tZgabbZyYhctEDjghVXaHnx5jTWgmwacVwzMMWg4NhtiK",
  "key13": "62TsaTvcXyb1Ph6vBDFLVeXjEGjd5MgoGyJp8qDBiqwnwjnSxi96MXj3qkvA9MfsY6eNsebjucknuDU1ed4hiPSx",
  "key14": "5gebxKUfHoq7E3wic4QL31oTnvQRmaci8GS6NTfQMtMhdjBKugGsFzCEw4UHKmxguRjc7cYgyDTbWR3Y2hiDGDsT",
  "key15": "5jkWPUXR6bKJbcdYHq4qNKwYrKX7c3yzgexGbFe2BQ4UiDDZKyeZwJiKPBxZpSFQkh4YbxvW9HZVi2EaJq9w1Xkm",
  "key16": "4TxmJuww6YPqnDQJb8EyvscxUtKVHtzre2UaJBJ44mGtYKQSL7PfCnhPsBMR8xMvMPepf5k9UZdrFPm8WZDaAGdm",
  "key17": "5kdpBPYDqt2pBwCxZZQz2y6bqzLouUVMHPDbPcRU91CouFyyPFysh6NZUYnUiw3PcwQe79GJnSBMdpn3Fd7BavC2",
  "key18": "3dGFY3YhZBhUUnYeiya9o9GV21JGJ3gK5YHwprgDrRr6oRzEGnqSjkt4hoJUiQx5eLu1ghzpvDjS56bog7iXBas5",
  "key19": "MpyHZixCWNrHMEW4ZYdCLNnJo7MQUmVocHf8w6JdVhkHTD1W2T13GdiBavsBDzzjkMnrSRFmzZGVftd1FDYsF8v",
  "key20": "GYP5TxDfFc8DeyK3psaJzz5fY7nrs9psrYLdUFxXwRzLzfJvyGfb4SJF2uThsQH8nfWCqHVWzEmZxskMGKXfFrP",
  "key21": "48QUfVid8t3qiBoXTrp7eiCtdoJa8p6wRxfpZziYPGt8fW6fh3Dvz67Fsqs6jxKMbXAUxhJk7xDwtomUkXzZVZ2y",
  "key22": "3adKcg6XthuwG4529oY7ffVq5JLXqoAsQN7YW4ZH7okpjXyidhTWUKGJoFTxAWWZq8Xxtsj4VspLPbk4BgFkPvTS",
  "key23": "ST2BiuzpwnhUhZHUzomcdLfgghnbyQgvPhtrjyBf63PdCDcinJupu56aQHdWwpW4z37mBneFd4AoXuPpWT3yCeS",
  "key24": "4DLEYig6Lw2Lz4XmKNG7ks3Dh8ZH5LJg53r1GP5XDham2ZyDBBCKXjezqd1GL82UcdBCggrduJNjePQ9wLMWRYEC",
  "key25": "3rUUdBsJssFrprTZMPKgyzmw4VXa9SCkK5UFwkCNsJ4zLtjAk35suy2NLtGdi1VSXfxNhAxR6uKU5HzN3cCirgur",
  "key26": "4KkW523C5PwPXMFyvRf53ydAJnXzr34WSeK14QRba52nBXWPCLcfQJhnprqApYgQ4p9u9QPZ8x1g9SFbPvxpx5R6",
  "key27": "3XNZZ1W3oeGZdLGadPN7QfCgd1JTAK9PUmadMsyj6E25A67ZbAXKuFcDD17R9e5ptgsVz4tD9pRhFrGgpG5rsHKN"
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
