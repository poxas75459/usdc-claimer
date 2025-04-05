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
    "2VWWscPyTHqayUqnV8qu7eZuKSYrvkcVgsUoypjQERHuEih2PgkUMEfHGqXDTnR3Q4CxaBmbcSp5hhzbT8CXskff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sn2BFFQsrGhdjv4HUJayi3APrAwNpPQv7QhkYs1pJdhQ1vGVs4tZ7jERSW9pVsK2Ui4xmhQH9EwPjChSBkGjXcq",
  "key1": "5atKwp6H1qedqm1yNS8Mznt7XxMQr1FaXJ7jjZXtDvnjUFyJUF72FCjsNBHbnfjZBDo8SmwVymUohfBTnFT2CFaT",
  "key2": "2KFGqiFzAKrAup4jBGNuK74PZUDfudV9P1kjTpMTKhkfUt5xvhMEv7Ervg7rZoYztJnC6TgURaB8g76XZW7U4jYo",
  "key3": "3sYKvmuCQBrKpLTsgCrGzddzepUJL9u8oKj4yz6mg5mBeTjycMGAjWhKfiRMUKQkRqTCkxd8QC4jT8GrcFGvFEVE",
  "key4": "2o8gMExrNtZwo2EmqgU8tcbY1pFzGD8fD9yUsSiLWmc9PK2jBsa8LSDKVNgvcEozVvjYuYsQTy8GtK6AFQBrhxb8",
  "key5": "4Q3ATwBfZ8eQEN7E8EWukXfHS6ghbq5rhb5h1GwYgnA3zc1DaW6jUodZ3uMg5LLVqePLYMruQEvGV2Bj2YeRqiUb",
  "key6": "LakdFhoSe2PXdUNARG1MACVzBTYwafkeXAiAJUvqrQcEb6nTdWvuhNsZbFTt7AD5X3uErrYiR5MCfkF9mfn4ycb",
  "key7": "2dhEY1hvB2yM6hcr5gCKjkt4RQ4c5U8kWK7oL1DV2uWY1hLLSpzv1fFZTDr5z149t5wVFqnnR8juj6VFr3HRNsJ9",
  "key8": "2ZEB7Ekn9t8mKf6DkxuhXJyTQ9Zbgq8k8TpWD1mnnPKAKdhW9wxMa5CKPGxWJvp4Cy71HbayGfuDNcYvrBjr8fyW",
  "key9": "3ctZ8GM3gc33yGL7k4ZcC1sB3vwuJPAACXYnGcdYX7SmDtuRa6pR6XepF3UkC2XdbGHAR7x1eVD9N5YLpSJ6SJW9",
  "key10": "49RXwkShMpeCHM6gnF5ohpPYzfX322utFowaxEnhgKqjeBc7rWhbWukWpkB9ujn39tzU3dVPvZsrcsN5iFnGC9jv",
  "key11": "4RbHwZXjvsz4sQ9Jyorb7o3mZq29wxx1NksQFecCzgbHamG46TnadQPiy98fPHCJbc1FGgLGF7r2hQH1uuSvUzt1",
  "key12": "46yk4XzkcCpSj3NvhANoyMCehkSjh2BrbAeVByv1nvBiaU72dq5JiVvoDgcQkCSZMfFAxe7cPt7WMrTyhvTGM6N9",
  "key13": "5KXcPcsakiwyVC6XzCyq585nWpbG8qv8nqNyokxnmPhDB7snRqpx75QUzAawwwy2xQANwPhAPwVb5vuPCZ2MMZk5",
  "key14": "4VrJE72xRLmfxoUr2phnrUxBavGv2m99sfc4KwV3xjYG8jGhdQ5GoqncxTYgCGYrpcYKqZkU3T4To1fGBfnmGmb2",
  "key15": "64LoeXHA4EwE5JbCCoPm7LCek8q7aEVoUj1rsWV6qfmaTM5AxAU8cHpN9bKmADR7w9NB1YC54Pps3ziw69dmwTTX",
  "key16": "uiksXeg9bMzFvvpnLhoKLmTXMge2S99VuYqSgd3UppEa6hxMUper9SqxPWcqk7m3XfQNjWwVstMfZPeURojZ1bk",
  "key17": "26E8nxo57xF5JW1G1mcYPC1xSeMny4eKSPtj1URzJT5kCDb2QFqrot9j3epuMKmC8o4LdymZXav9MnHx7BUQxgiy",
  "key18": "3Y6dUbqKPhMwyTkv6q9T1BjsNhhFRGNHAP1DH5StcwHL8FPt9nB7abu23gMBeParbYZ5NDSNStF1x4FjZZZ9DyHY",
  "key19": "3DmK39qcoWLCHxrQojukzbeCpG3YWsM6Km5E96FsDbqioJ6k5V8kufXfngrPCwQmNQjDEunrePdnp4d1es1p9JvD",
  "key20": "27kxWRDj5TBCqWdipYPP91MxBfiPQFMqHe8dbtLcbLGRybZrRSJoPrwqQrYPP9AUjy4kkebQPmZsrYVy8zfct7kN",
  "key21": "3TBZFP9eitLyiL7uuP5jMf3qvAgFyGEoxj7CUpe1aFFYxzSRC4yDpzvVEKAfPwjn8JoiAkzcJ4ZQttwaghR239tx",
  "key22": "2uTox2LHLDNuTEWmoDnLAfXMjTKndEnUWaMcTbQw7UqQi9UmbV6fqeDSGRXvbcSvypJ1dDdgYKnTxcptwGoD8CT9",
  "key23": "4BNqJSkidxpWs1CfXLdkPunW3QoCWADnADbrKxLM5ieechuAVCUGjrspiSoeAsjFfuwHgioYz61k2umn3RJop1am",
  "key24": "zLEhWL4yiGwvGri6NQGoHsjLq4phwWpRN8HV6yRp9Lukh4ssg2Y1edEqssPSNQFhAK3a7MLsrTBZfA9mp3JQVDP",
  "key25": "5gja7Ask2nQubfDkXM4HHagfLeMz5Kj18PKjzNfPy8SVhGSJNahq4Bjs55e8drfixv5nsJ5FT9BU7vWWt4JDgt1J",
  "key26": "mPnFK9iLNxQcFW3FLNeyjSj4Vxb6zNAUvNBJ6JjvCaBFuL3jn9sU72xhSP1VkuSvRD9FXmGM2CMCKidDXXsAnpC",
  "key27": "2uT5MrNECJ38k8cMJUag2zAa2jfnRB76y45kQjgW7xYGJxRsixq9Gyk1v44xKiY1v3xA1PvmkZkhjzDiyuTqYLQJ",
  "key28": "3yUrRPNqhH6CxKPou7oANPSA8GSAYUMyij4J3WZiB3AJzZERCiTNHDAKCVduWRas4ojbshqHJftk4QErjAKEmPTR",
  "key29": "NVgfss89za845FFoLsQGCy2tVxmcLftkXkrEnPXD3i2kMNmDJ72mYLkBHMfAgtjuEKjwdKyzHmRk1SPuSNEq6Dn",
  "key30": "Vmf56AeCgcSvPA4QTvS2LCAScVfJMGVqFAM5ZH9bTk5uCmPwhvPjP8VL9kR3Qp5qfDLbpo99euMh9xZGjRsLazy",
  "key31": "3YBXZS5VYm9cqK26VUiwFDdTXp5bX8FmqEkzysKZKZMVTL1Mv6vQQG49M7QB2rbM6TYU77n5nt4xXyWMv8Hwj8Yg",
  "key32": "4nKPuommk6TmtFbbdZYP5q3Bd4iUmFuVGMB7gF3qpA7A2UeXLAqXWrvgP36AXZj5s9ojbkS6fL4nM4vQTHRGctvn",
  "key33": "39H5Eu95oLN7R4g6w4SyUDPR6W92B9c4YXFn5PT3VZqv48aihtbmsB8NjZDbhzEHF3m7pJ95gUwqjNZSuEF2y2ye",
  "key34": "65B2Cgp69kEjkmHUMFCDQwFsntpM2f7kQtQgFC41JKrUknD4YsGm1i78ZoJqxQFCgsNs2p36WVgre5Ma6qPkarCA",
  "key35": "4pvRkSaqT5GyT5iv9oT2TVo4NGXPB2i7F8QyAdGzzNhbZwYv58n32HdHXeo45faLMPyish8VdKUHetLQwBAVM8Ju",
  "key36": "aAT5w9BAL7msiircizRtLZRqBdSwmHt1CyLyrfzmL8AaNmzfsRHg4ffEjDtBusxz7M4JMd3x6xsmDPxLTkACJ2s",
  "key37": "5rhXQSZYMjrLDf4Tbk33JVRUJ77KA9Fj5ZfWrHV3dtB9PQ7gRNqoyuZrrSbBGaKBvygUDw2Va3QZs9w33Ja84VJr",
  "key38": "588MKPgRUWKKvZcLoTKXVCexsATAhzAkwzNccCnXbivAVKt4NtncnkkZV7JRpCmNZ4ijHKPQwsWVfUqhZNz4SQmu",
  "key39": "5WaAeXUrNumBE4TAgLpoopqgutjQYYXpRwmHDpR7bNMXeVXmw3MXtFvPCRzuk2p9D5egbDjHYqtqDYQxifGn4rAM",
  "key40": "2u6cXpjmdfY6ee6pCGcg2xiYLQzS83Uw7peyWBCCRMQfqExZhgjPTdELggBuM5pM7pk2A1neniS7MjnF68ofd2jX",
  "key41": "4Rbim24H2LyqjQyjdEqAEa5GUpAbyPerdfkFFYffDBYECLU9J4wzLSFxFNYqbWvzY9adkjhb5q5MgUkRvnC5XyF",
  "key42": "3jp7PAS8JBMbm5jzd5BeHgxMhJKHhHgJ7XvKoLG45JBHSW5FeUKh7XyvEkkHSBVqhQVTHBipdTcmbt5TA6hRJ1Gx",
  "key43": "3nPcPnAPSh4Febc9m65KGebDCMv6qzvGfT7Wbwai1JTDQFEVZXfR9CftSfDkgmc2qJpacDLWntGdrfkmTcZkPUWT",
  "key44": "2CdjwJ48GQSPCm5JoHmKLZqbJS9bf9HBALjCxR6ARBin1TZqVQoDYVrfoNUcCU7kjLdpFMHTQumvmBwXYfwTPodc"
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
