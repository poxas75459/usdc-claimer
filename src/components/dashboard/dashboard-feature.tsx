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
    "5x7nfPLmBX6TmkyrMndPGBBevB5ZPqZcQWAkweMhoTjXm4e75cDo55DwyPj2S6CpfAqeX1eMwgSUiiYP6Dm2pP2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hckn1gnzV6X4dEBvCRa3Hxmhu4EJLiW8L6PeUn7ky46PGQn6uEU4gmeNsZKFK7WRNt2stWtpBFK7LtMJ3Yg2E97",
  "key1": "4H9h8pyy68HtSV1LwFxjKqMpVKvTaJrDDs4XvgZcZpHLMB5L1RD8nAGxSvcD7b3ZqU6km3CtL13qzCAAKGGMfNQW",
  "key2": "2bbYPaqFYz6cj3DcVjLbUiqqpHFjUE238LrD88iveqrKWi9AZiRHRoZDedCHec5hkVyE5EPv1c4qhrUP7gLdmPxq",
  "key3": "5TymntWftEzTWZnLiQYo8cZDB8CWFfPS9d3vQZRXPV9KnZVT6yfobC21gqBjYZjKrJNSsBMkUpFxGtpjh7TdThyF",
  "key4": "22yPejUjWQyU6X9mVc2jbKaV55qwosqtktWTWpvCLNcNGuWvqftJQBb8rSo37jY7jQfVDC7cs1qyo7BmPR3KRpk1",
  "key5": "4HJVkH4r9T1hNsoKmS3y9tzSBGTj821EmBT9BN9AwupyqiajDFJ85EBpoevYZQBZ4oMRmWddSkbL9M4ArpswtRtF",
  "key6": "yVByTbV493uSqCLUoG7BNWiLNS58R7LJ4vD9t5HW5PawsvcJ5iyMbtuFj2gAxdUfq8ychGuGnqe8ZkDmgx85VWD",
  "key7": "5Pwyw1sf69XUKetQFPH7VPE95M8FqBusdv2x5eF9PtoQsWpEpvzzQtEFaVcmupYhn9rU2TJhWuSV3bUaUf7GnzeE",
  "key8": "3AaYYbE8s7QbugjjogzH1wfywBS5ZgeWSh6sr7wusd65E84b762RxCpTvQhLWeWCMxH9B16QYQLZzYqPSPK6TcaN",
  "key9": "59JLjqh3jySxtJ96xg7ztquHDaqDsGcG2x1wR93hKfkoESxNb7T6QnWdz4KXsWg6EVdvwtLjDqNDV6ufxpHSbMj4",
  "key10": "WjWVLk8Nk1uxSbHTuENsaKEgCRXGXG2nJbFmrUfVGeUK2JpB8GsKe4Fe67heRCQKhBoyfqrZsWRjxQDKgEZq1xP",
  "key11": "3nY9eNotj3eK6zre1Nq2hyrB6izPRqg8C6fger4H4GM94yBowbEQ3SeRc8zwig6uDoMCAVkAuuryBMqFeVix9rDa",
  "key12": "TjhMBSVUSJ6D6yiK3zn2wRcMzAckdsT7P8YYMuJzycSnHSgpbrvMqTwvkCNyFUtNh91M96Vaw5Li2dyTKqBrJwz",
  "key13": "2UfuxK2NS4z71eLyDS6sAynzUKaNyQP5WAz2CKvzm5rNMuCSmp5MqjULft3YHSg52UAADcHJgo14b6dEyW9Vz53i",
  "key14": "4QpnwzepZ8XwYpfHEGChaDqawkZNZTWAB6EUBCejweeHdPn7hDVBQ1MYb5tHNy6nxwc7wJ1BnGPYv3YFVdxqp2V2",
  "key15": "5uDB7zAE2SpAjzmtNHDS2UWLneXKrTPUrSaLyeu33uykypQXVKhz1s6Kd1UV5rT5St4Darx3KqadftwcSArt9CDj",
  "key16": "2H3wPkUjrRpZNEaiAgyTB2VUJ49VrVvPPSeWNq3HL98WqkqNG3zyF1LvcynJByE4WDYh2w5hxRhKUNCYCXnUWFtE",
  "key17": "5mBJBv6oXq8HMwc4DyQJqrfwkQKonqD5hSJwyketARUY9EYWAXQFFSa7gDBbtkoLpRCCDYqcPaVEJWL1qkxYzsHB",
  "key18": "3orMCSC5Wqm8DgajGBEg6fnUaJUqrYG121wEZby64jQx7tuP7rt26V6GYt4ydPhfqRpcAbh74WUmBphwxjMQX1T3",
  "key19": "2xQTTTNH54RuL6oeLTFvm4bTBVhdr5kZFKh3hY1K5JvF78PTkX8tW3rx54qDuBFPE2Gh4pqqX1gAkA7WqkDo5thq",
  "key20": "3y6ewe82Yk3fGiEFJdqAUfgG3hjfx6vd4dUgRjCgSeKWSqKFcryWqn1nQ5JCvTbsxCrKJTEQtiY3DL1ZdPsiQwrt",
  "key21": "2YWXUvAnC3Ns9J2j31yEEac2z6QNGyeWNsTjPXMShNz6V2zszioXgDeooNbdShMTsfDwyt2uMTwPScuoiMTGGjkk",
  "key22": "2TnD1hZazCRtmYPz9FCE6K3vJJCitePRxZ7DLfZ42AEZwmpSMbzLGsb8vBKZbrheVAcpqH1LxEFTR9aFrVo4yZMz",
  "key23": "2pErEAVaiAubCgEJoHBgN3xjurZN1xqgHdRg7meRzBPdqb3yL1n5dqaUDZjkXPWR6akXnXYmAWKCkprSJtL1Grb7",
  "key24": "3YMnBjmzCApWDMDre5Gu6sMiTQzGx1Qw6a26yZ5cLuspUuc2JrTADWAbod8mJAYVmpV4sBmiQDoe6hk3xCvVvSmU",
  "key25": "mL7fK11CyBYrM4H7CHiXAtvbMgv6VhiPFN1AUxzgWPsnjVcwzVEyPe2yo96h28qnsPcREcjj4K6D1TEM8K3nmRi",
  "key26": "4P8DzCdw9KZfXZ3hqhgweSewgCGZFUnwUntKp3EhL5F78kJ9WpAZakP1ihYfoyMQpqTRBM9UfriwGb7ev92BAwVV",
  "key27": "5stszUwBE2Sx8McEURb6PFZA8VznNWUE9W7efHdC3UWPPbnEgpA3qC2JJxjQGS1TofQKiyHhc7JbTznK8ECBRToH",
  "key28": "4PrbwPJN1EtqvB7q7Tu5ZH3LUpFGiQAE6Fmtqz51XzyQxKV1AxqQ1M8UwvHgSsRTPY17UvggpsBwEZvywTT58mnV",
  "key29": "Avf1KQbUDDVp4CAkw2w1oTUB8m3Y2BggJajfnWqwXX9Wn1zPzbpTquWb2errWp7JTAgB5ZZKqs9Nc2egKAffSDS",
  "key30": "UvpRX3zhaH3FztBVoHkfrX7FFG7k57PVKXxKwCh4E7UcnApwpJZPx5Z2ikxxFnB618hKqLpSfsqch7DxCyvLWjY",
  "key31": "47ip8xvfPYZYs5t9hMAt8AXpCdaLx1XuG8wc4vNqsVk1FMXSLLWjMVmNKfJpVzDBNdrSuGpd1wtQexX3iTGMGrg9",
  "key32": "5gNPz5UvrtoC23dQfKP8axW3fspeFvC3V5UbE1zUjcny6iscedoKesWCPJR5GVpiL4MJMFfGWdcdVXpA1AATsGLq",
  "key33": "3SCpdez5rFTr8YQGSj78KRmmK3eUNvesNjmt7ExA9xWCKaYFtvNBfhpRosKCFmm4bQPffgmLxeEPozmtFMsnqfJ7",
  "key34": "3HnaDe2mES7Drq9huvgAM9Sq6Y3PMYYEh8gBxkd7g8xR5fbiqFauAFLKoMoDqmBw1tSJb5BiJfaqiv1fBjoLkSps",
  "key35": "4TSQmBsSzDPHLshkMwQYnLpSxuexT6oPhdR74q5Z6ip33ZrBrXaZ5u4SJE8Ji5eKuGF7g972seQ1Px7FwnyxK5Sz",
  "key36": "52J23A1hFZkBZreq7WeugqKgo2bMNQPkX3oa78NoXHkoKJmck2DDXKZTw8LkXGL2t8mKRR7nPKAaWQQFdDYiiTom"
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
