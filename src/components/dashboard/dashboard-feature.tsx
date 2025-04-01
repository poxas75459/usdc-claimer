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
    "5cksAroQ3ETeEtAhooxzHbzXS6YZUKEnE1fPk3CQnc6aS25nfQUeFbPru7vq9N7gFT2f7PY9c8yxYohb59QuH7nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkPCm5kFKka3PwG6qkUkghi92XndVnkMZHBB7rTYTpFgSZsDgEVXUtjg5kJS9YhXKs9v44ME8Y3XsbVBZRD6jWz",
  "key1": "29rfKapemMVw64GXpimnYEVeAkuXE1s9oEtmUTdGxGgszQ24CjQo81VxnujJ7w3wYF7fSVcF1Ah11GvGgmAQKLsd",
  "key2": "5gHeWAgpYkzka9ie8YHJfT6ykbyws1DWXGYWfiHjR2pmyk6cvHKx3hNx1TQEcNtBt9vASZ9WWRh2ioHpXDYmWGhs",
  "key3": "4g1c8MjT1Dy2sFSFZnGBdhAxKVAkM1hoPsAudbTctQrqWUpfksb2NQYYLTkqdJbMiFpCN4w3iPPyDGkZK6QNiKFv",
  "key4": "317wEZvFwQbieofSBJJki6RizCCUmqZbPy131xDxmMQhLjMjzuvxgYACpt5g6xsHPMDcYN6dhdEiNZuQwmjjcPL8",
  "key5": "fReTN6BXPuoaAXXeAVV6YLuAumbBG4QA9KQvMnmLmvbb3m3hobc8L2hsZdtfLrDQgk8u6EyncweCt6UokMJNYxt",
  "key6": "2dyq9JGAdP7dWdPZKc2pwJuMvhUCTCd6Ho5cyVoZQ6YEbNBBSCFqYUVGyAf2pq1vxH9fmrEjLyrr15QXLcW7nekm",
  "key7": "28nYLw7f3En9qULiMUBCxjgYJssDbxCczE8XyouhBLtUFYPk8ezYTxk6XiNQXuBU5ibWKXD29qgYMHeeq6PBwxBK",
  "key8": "5z8VBJzjZwJbf2sCMddUirfhQUELyt4fd6qjF7v7EPENZbyJKxsgCJTrv3rtoso7h6UgdMWUj2bBJqnFpdUQrweX",
  "key9": "3JicfaSDit4LA1hWYafGWAz6RKz4UVQ4AUp5ZCGsPNoSPctmyMqUqWBksMqCnFu1iGgSX7s1VGUHC1wxq7iJrquR",
  "key10": "2SRAa5DrY5UbBMDfbY4NKLSTvAYEkYeeMwZWDEXS1r7bVyS7rUyZ8gm9TctkxEk8XjmMAJsrpztD3bBm4z7zF5hp",
  "key11": "d3wsDpYCTSdG8c2Efa6fkJqqBy9nYfqFyCdiVSWVjfSdz5csskG6fqdoKw9x78TJxRadugQQqbuYoBYxCG5me7W",
  "key12": "g2qds4FLjHkzp5zG5ByhBTD9LDsCbhYjE1NkaYrnRT13Lbpknbd3byC4ycB5mB3swyT4srzites1VseNNTZ1RzW",
  "key13": "3zbmeco7WQP6pAHa6GKXYsY3SQt39o23BLnRdmeughDAJ49Kzq8GhYgEFrgKhDmEPkgkhhmeNGNxNrUYQ9TjoiXZ",
  "key14": "atvACVZyQF9QhjbGphNCxJ1C2FVbyn8P79NhNkKFANZ39VdpGCLUc2AZQaCtsrLrFmFyuiGPZLewSZCNY4icPWq",
  "key15": "4YMuxzhLoDgKCJnA8QoiRaFPMraAfi6io57zdqvQEkcJJjrfNKdw1wgwanY7NAPKBpZmpvZMacTw5bKQfru4a85p",
  "key16": "5EZMzevyG89dTezLtsAFvc8VbBNkcXhL7tjBKGGNWmcJ4DB4uUeTzzc62aWCjqUDUSZNcwtSCrJcQyZ783t7v38B",
  "key17": "4esu82MK84YFxFGMgUhCDuR9s6BNaxRhwoa31JUMdcUDXPERkKFk2c766Nd8tNqhv2NGm9E8FeSbcqg1pHEEk4TM",
  "key18": "55GBCRaa7EeW42GiRsNxgBBa2pmQ5sRgT4LVqo57Xgkwog2NGMzAJj4iXKZPPh7D749BJFBvfnbNZFY7KsAbf3PW",
  "key19": "42R1ZsHubUUDzLY4oRBctjfFYDhBZhKKa1Z4UjqowSmruVFM7rYn9dYEeBfdT7eYXv4SJwhBj16Qs6yJE62Cgmk7",
  "key20": "5J5hUELgh8qq5nWTpATxxguQxHDPx2q9qKtQf4pQzQpUBmSw7NKy7UuztGnKsr9xE3YjpPAgQaNMA5mMh29jwhmn",
  "key21": "HdFjWWi7hVfvbL2hGoJMSBh2dj7QV5y1T2kT8mkxqFv2MxD6tRroVFe4rFDKWspTc4MLbUZDbFgZVgDW27BUXUw",
  "key22": "48Y9bKUrm8u2wr1NG8uapRbm5yMjznv5Kb85pr8Rcc2kNaQ4Loujk9sCaeuFSNRZma8bT89nceDumEPuBcnqzQEL",
  "key23": "5kzhEFiqs8tAG6uZMQY96S4Joua2yz2HdzLLPbF8yBPPDWAw9VvtaLrHrgLRDxcBsEu2AS28jfYRKbXNmN2jpXxE",
  "key24": "319kSFDvsnUL1C4Q8mDg4XpQXhxbfsfpn9Tq6Qd9pJUuQYaDAHUvgxUUimW82bZor6ynuQ3vkAg4fPPwWEnvZCft",
  "key25": "3sCtU7DvocoU96ZnXbP5jjyrSpPs5dovnPFbY88ZUf7cKBP3eXpUQwvmufMPYLyJGpMMeeYN3LK5fyqT6Tg7JeFj",
  "key26": "5Vz8GtbCCAMtSA56XVpavLRzwXdbmFfJ6Af1xcX49KidrZ18Hf7wT9EJMPiCV7z8bnC8NbLAJQuxx5LYsgmFsNCA",
  "key27": "2iqSBPuo6FAfWgvPZbeHLEkHF8VhQrPaubabvVpGqh4pUnLhctATR1FzJUEJagfrkcDTRy8T7uPwNofijRFaLEyL",
  "key28": "2ofdfL7z8f7aWz9vuaaoeyMWdu6Ym83vwmF8ceeQDND15tcjbgoCH4v93f7qq7QtEbL7UcvxourNJo99YLG9Kzpt",
  "key29": "2cxmabkKJcDu2Kzn2CbFysa6EH3XDhacp7ZQcT8ZaFSfxYJEf1AUNBbbpfMFPnXvsWYaZ2xic2ZEZ4U463N4Bq4P",
  "key30": "3SRtcq9SKMXJuuhsifnU6wpRRakmtso49H6axDb71bUdcUxQuQyeE949d9ithiw7NzRmGwzjvUiimTywhxC3dnov",
  "key31": "25DLvwbmFXkzzvWNyaPoQ12dspVFc73vSZUtTBd5dELGaHM3vxNUi5rwJoNVSqnwbUxhgVJNgvn3Y3HWy8H7gJkQ",
  "key32": "21zrGdHdq3u4rgjQruPCEBVzTFZAyWPRUv7HY1AcnHA1rEoYsSAm7MVXAo6e4cf3JLQX527jbnJheLB2E4ZnhtwA",
  "key33": "2a8MkhvFfWakzCTBa3ZUGxmHv49xBwiWsqhBQCwrFtJ6dA9nYmBa9ycBas2tbvEQRBmPx39N93CFq56Svg3KohUZ",
  "key34": "5yfY7rKf1AkvB8GzL38KMQPu9we9NSYni9UBncTTK2yTZiamPYGENFEZrFTHKvJBTwXeeqFjrP6MCPpV1np7BJzt",
  "key35": "2Cnit5dSGgGBGHA8x5svRwLmFJbUu84zgHxyMHWASGLMmA3kweKnD1SMRyucjx84UN6gwyY7nWeJtwizAtJhcxMD",
  "key36": "4HLPk71zvMD9GfXvpPtZCDCqkoAqWqSqmZgc34mQTWvj9mDYjN4mzaPByZM8Db5uMHUtp6jPYL8mJyn8pjZDbDfx",
  "key37": "4ppmRYHJ6PkngX5RPVY2AEU5FQUxqDhNBvwWCgkutFpWmeijx3zXUz5w2BN2Qxb8Ta345UNSoULutMps88osgLKp",
  "key38": "3S3ArVb6qqMoG9QTUPpa8BjnKbL6cbKBdDbn69YXeA6jixB5qAFXpF5oUaUEEerbRQnY9bwuSGvmSZDdNGvNEVof"
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
