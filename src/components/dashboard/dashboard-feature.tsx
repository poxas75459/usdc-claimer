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
    "5C38bWGmJYpEqnxaSzYteSsg6iGwcb3d4KDeviPExFmAsVSwm4Rw1hyumykk8SbzjbtxzGdrctsCHgyFVDMaTAcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WsNsW1jBXkuQL3hQqFg4P1eYpBYQGe2ydJACBVZFnC2ZF2K4651BzHyAUZizdWKgEsPPrCa9SFYoYiB5WQi5LKU",
  "key1": "3VKjeU2BXnYmH5BMjsoG7fjG4kGKxAkvwRzSkTgR5hk2sEx7QfMqGvJmCfkdr6DzedfXTFJVqEq1D7U1AXuVCTsC",
  "key2": "YvVF5nCvHGfGbtyskqnjKSbMx5gGq2iF346jiBfFwkUMDDA2YEdhwurwPhu72eBCTPzpxSEsxM52vK7CaMEbimN",
  "key3": "27JVDgttmaP8ftMtrwarZ92vx2x1oh8QAFsa26ofHWdZqry8DovfGVe3MbSifhz9muAfeRKFRd893GdudjQSgXYi",
  "key4": "2y2mwLMAfeBMNa9yDG1FUg6CHW2kt3ucpivNNBmHxwqyNHyKfy6u9d9m867NAxNyawqaQPijcRi6kBbmpki7M2TW",
  "key5": "5HT4ipeGoAJRpi7jj77aENqHT123SSE4bGvuPeDBFdTbCs2FY5hxcczvJAzFcDDYitJ41TR2GQstN5MMK6XXYrhn",
  "key6": "yTrqNnBHt5kHLVua4kTpCftqryKNBnCLkk5fdpf8xAvcZhLiqBXWnE8WJU36Fjy754NpxzbpVN18oT1PbEZak4k",
  "key7": "QAW6UVxXy2kXi4M7a2AtqoK9UniuyjakYq6DHR34vLKPdALRmYHcSBimyhb8frVxw1bLx5pNwk5t85N1nSimYyf",
  "key8": "2Fou8dPioDYkxhmBgwiJwyMq8MoWHCJidDsdiiQu1v7JMfL8RQNRjQ1QB6jopeVd3Z4RxEdMpQ4wqqecnuZDpBns",
  "key9": "wXsq9NwQsN1kd2zS4mezrpfMxrgbJfaPx99VGspNYCUcrj1pXEgv61Ama3p3smXnnHprsvr2FoZWc9DFFzjgvJu",
  "key10": "2kyYeG4XVJUd4VsPhveULAvDKV32ByeeESi4KgmfSs2N6QUJoXtotVCjeH5iz7YRE1jzKR5nY7phkb2aXixwzsCu",
  "key11": "7Gqdk3XRExguJc7aqHCh9MjRj1WEWAek3wF4TSMTCWVZatABTfDHKHFwE4BhmZWsq43JL6y8LjecZcmbsLutPjs",
  "key12": "5br1V7wcUuWJR4yRSUYDLLpnD21jeAhxX9djbR75FobQxfTC9ZhC3vDtiLfrif2xZLcYUAoVUyzgEmdh3RskG4iY",
  "key13": "3jieDJE61NskShRhiqC8U1Rpi5nCKCdDZjMoDB4KgUSja2vioPdWMpHfSoszDKe9hHV3shfjr2mDQVBzPoLkJYst",
  "key14": "eQT3EF8GYFZbh9pWKxhQDxdtgRL83jDKueZVsmApisf5PtHaASN2SSQmGgQ1EEwPSP9Jd8DJp2PiFrUudD1V51T",
  "key15": "2FZcycVWbjJuhdWukfdMHryFLvReK9tDC3xAEGQVxfAPFxdNhHdMQySdf1HduJanx5yFgT68vVvfbyeQcb7ZDFWx",
  "key16": "xkwiqbAuaTCXZMUee47M3ibkkQ8Zqkd2Yd38GuyrEM8k9MJY1WRTnaG33cFL8ts6KsVuJBPYCqcXi3MzzPcrPJA",
  "key17": "4SWWhmeWEdGVaNSJNBGbAUNKxwoRcEFQbAGU9sKyYSTzvVw8JP4rutqPysjooEWfgDQNinZ2FAWcHijckTEzHrPz",
  "key18": "42R6Q6grzyybu8c5KThGa81m72cHTV6pLqQS9k366WbwiVw1KcxN7oaY5Ph8j7XrwHGLQap5Mdz8FLDdtFvhGaio",
  "key19": "2CZ7o3PydEZco25WiRYcDfp4gubXAAsg2AvMfN2oxseiAcHgEwKHL4kj75WM6XScpGtbuhD64HBzVyWx2DHf9SnN",
  "key20": "2J2XUHttaGQhVYui1GcBLq7kvmiUMfngAHTq6ry52MrZ6uNJUmJrJywweCsYdUkrHnBQVr9paLG9nJrruFGAWcbd",
  "key21": "Qevb8wBsZrrCgGjHVdYMn5T9uUt7owic6U1BWH6LoA5rEwLx2YHShU4ViNfrvRGsGvJ7rk6qFpDaHT7tmFK7ymV",
  "key22": "4oc86jELZo7FJmmN2eu53WoStWW1ZjbgNuapQT6gWBQuxST9hnMKu9WxuSRpM1Xtxbu5G44hVHzg2xMVoTFiQuF3",
  "key23": "3eEChrBEqvBz4Y6QT3wRfkPaq3VMzVHuSdpSpDUBVzJNHtEg1VdN65zphZgju3vUFda3sRgNNht8dtaGnnCqifSj",
  "key24": "4NMFSKENysMxmAcwSbBHmSCCcKVTynvnMPySh2hwWw8KYww9zhS8PT7yNuU6ZjC4GvcCYC48An34x74L8uWQzgU",
  "key25": "4p8RQwpFYGEzKFZDJW7n6rJqbusNZnyGe7iZCdTzRGd3AxxKXYPLjwnaXaCwK12YkVAq8BJPVGwNcAyTUNxHbSYN",
  "key26": "2YfmBFXHf63tzFsd5BKhx9o8HsHe4URXAJfvmjFbCY6zCrFXSb9ETMVhVC2cAojFswS3FkjzxgzEai5c58ZYtKWc",
  "key27": "3G8j7umPP2vj5B8xyYR3N9NEJRsnqQHt73u6vdXNrxiuLXcKaazwzpK8NRvp9EpfRu87229cGc9gKR1s51VdkoKQ",
  "key28": "g1Ff2ssDYBd342cZ8gcH8KTknGjUDhk7TPJDzRBbMt7iRfE3NaXoR9J3w3g72kzx9aKzf7nbyMw7BVb7ZchiFFp",
  "key29": "3hHHZqzpVXgQQMHkrhvTcKxX1o21UvkdPd4LDGGKoPN1G6s4dZqCMLarRrdAvkpXVrsVgZdUnaTm4idzDg2Z1KBq",
  "key30": "sdtU4YjrWNxo5sq1Vdj2wtbwWkkEDNLywX5d5dKkBfQ1KSLY1Dohc4ug9QA3NCFYWohD4uWhw8oP4VbuXYN1Znq",
  "key31": "5TBYvMCEbcCvKRNX4kKHNKS6kesawNnDvNQ9daXTFw7r4peACosJmdzDkEX2mD4gBXBUaqUL9kPbMpUQGp1Eoasu",
  "key32": "3DJhgikjeDuGRcGgYtDSVD6svZWiRNcD2kXUX9tNMMxHDycvZj8XX6uB6GCh6E6s4LKJwTqPb4j95cNTYNfFuiNp",
  "key33": "2N6AH4WnLbjoWAS5wdYD3TSnxruDPbpQNyD3vsHuvtmQVY782wij2YNz3N35o3FSLH7T6d9ZpQ2hfZ2xecQFpXdJ",
  "key34": "3YGtWR1iUNLYXvkqeaEby1btm71qSXHu5JRbDU4DmjVybTFx1TifkUausyBnorW8uxSKSGdCPJ8UyjpAP8D8F1Un",
  "key35": "5pyCapyWgaL6nZge772gxYFN3sD5QYSDTSrjNWjPcgzRYoyZmHcwAgCPduGn3nb6JkzgA9CYVQvLpVrmS1G9gfaR",
  "key36": "4WmzyhJ8tQvB1bMgJ31rFmFhYCZH4nUkNu6fyiz6YakAkF6yHqauwKTLer8PYNgxhdPoSU8TvJ5TPwJsMKsACCMj",
  "key37": "2AJNxmvxoysNSYCxneUZ9YJYRoiM4UkCLgguytHGrpkjEQoep85BLJWqAEzDigjZ6EpdyFJ2uYJQzfhzQRtbt8J8",
  "key38": "5tpRTnFuBdjMq5LrLehNWqt2fomq941Wz35jSiszwpGyqXSneBHjgnvc7BGgQSy96aBgfarF8mfDjUqH1ram6rdT",
  "key39": "EuSKz2qZYHLEeW7gtoGaN97x1cVuJ7WDFeRAe1o8mB4ADykUMGXDu78Kbee1gadSPrXxDy56dCXNATZARMSxj6c",
  "key40": "67Pqw4ihUkVaBq54XDTNJ7hkps3e2jwveRc1833n4JtdjvizemGGUnzDa5ht9oFT3WugEJmha3YMCmuwvJA8hD1X"
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
