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
    "2tofDgWiV6auvwuXqwDv94s9g7a59Zu9t68izAihGR4EGVTAWLvbeXVBt7oKya1GietUrLNfBryDLjojj44XX6By"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVkc8UAd7896forGie1ojdh2sQDQWGDu7r5iHod4Y2aAv2BS7ESBbtVJyhHg1J27PxHXSNUx4FVJ8pXSvbn5mhS",
  "key1": "2u4BfMpstibdNSwJFzxJxpns3vszWzeZvEAPQrJfwvhJtk8g4gk8HJsFtVoEPo43dfy3wg8SEmCpu9r1FJoGdSvB",
  "key2": "frNyXXGgTPnaGH6Ng81jmm9m77oTDRApv9EcGPccmYRQzw2fAGUQi9or85Rm6kCeLkcvBLaVMStxyYpzNg5bCQw",
  "key3": "5qdZxA6eupX8EsnmTVWAtamnM2n65GkuAn75262FFF3MpdtunpSmpGVXjKpQuWVkTLWUzW2hHQbDEUmXskT1Y9dC",
  "key4": "4Cp2BTibvvo3NpFfmDN4BekovnM7chCkjoZrwMqTk4NH3hA2rZCCU6FgdyHwrL6NqetgLZsLrV38fsPEso6L18gx",
  "key5": "5YKKJ6i5nSBW2KZbsyPN3ViGABGm8A3j1xbzbrnCiimw7nqgHqyaR9bgYedctWKgE8i8ApXjx9kzq9gUuyVgd7RX",
  "key6": "3eFQiXVsXuZ2AF1GqjT2iEXk8aXNkeyHvoqcCjHR7nZF7g1V7MgLjvfyrjud4Xn3apN3c34YvwTiZUgQ1apbxx8c",
  "key7": "4x4J5SPsQXPGgY3cEH9oCEM1YqXeyPdo1yTm3HpU3aQSyP5N85Zf4DFqPeekFZBigDxH4pjfRvZ65c41JoLZjsb7",
  "key8": "4nfMZKZ5gYumWExSzG6ugGDuF8LGo1QettBehb7cQKzmcwtjKVnyyx28oP7G89sRnoppdSZhfRwYj6k4oDCx8YSv",
  "key9": "4q2RqUnzfDXHcNXeZhAURV9pS6tLx2D4n58G8y5wbyy7cm1Yaj2XhbNPdiUrfH8dhP9bEajJc5RBY6Thbgw1Nus9",
  "key10": "5pHidNHFsYyXrtCziJLnPEMp3gpbkbpFnYVucFKymso5VzkBxHrmxNqDXBUCQCyusRmM7CkXLaY2BP5SeZcCwESc",
  "key11": "29VLGQus6saFT4f9Jh83ggKXaybb3ZsSqvu8raFYfcypZLWcSLcNAHNNS2U9At83Ev7aChZZoQnYV9ARsg6fL1uz",
  "key12": "456w8HajCfLtotqjvYi2WgGh4W8MqgTiL1tSM6zpdwhBhfskezYH1wgEtNcGeXFxfwzupxUZAmkqTLE68T75km2u",
  "key13": "5z7fQ4WQ7ggxK6r6KsnZorqHzgFzH4vBdG9LiPkRANYaoh2Yh7sFvCuDoPsepTqejMAAXHkXELzi4rBMoDm9xX7y",
  "key14": "3nB5gDG4ieMbsDMUT2SdRb8UxmHAKuXsUY7NvXSDAkJmQMRH3HP61P1KEf35WxkNbj6AsBqShtZGgTkv3rcitVt7",
  "key15": "44xDdaDmX2C7EZPTmHtxE18Q1UgPoyq2DwmHoaM13ncd5F47SsZqevBPtq4MrP2si4NRYPQNmxWyVdmsQxA5WRsV",
  "key16": "2TUNszMv2EJqQFniQZ6ikg7N2uYynTNVDJ2JsE76v7svipz4cuYRBTTwuu3dmTPaBtbi1scbc58YD2c3PcShxSX7",
  "key17": "4FzzSCDFYRvfbfYGWMdb2Ws31wq2eTGXWABZ4uHies4fiwmMFVctaz95naxkZyvqULpC96NXhNRGJdGg5V1qLKsq",
  "key18": "2N5fkmVG7WpebuUVR5QKDJ4s93p7dMB1S7ZosuatZdoPyV6fedEjLYREtRdqbGPWsN7QWvZ8GDXXC1E4MrokivGg",
  "key19": "53aPxWMDRJmgvPtgrq9MdTtMsGU264ahcDxwqat454txVstvXSPsA1wF6M2LPoXumNw4AGfEsReNTZCY3gu2Hz6W",
  "key20": "5fpbfByWQq1T5jZkbs4krPrmhqAqJxJwjFC7tgSc4cuLgj4wReXMbsH1GnRmrMKimgXtAufP4ssHwmb75NBDhowe",
  "key21": "4jFft4GmJGpDr5Zno1QTXKa5PLQcAYoNijyriq7HyZzXpUTBfG1Y1seLYvM1kEA8MkqnN3a52Ppm9RnsFCHBXgkx",
  "key22": "gbc3CNVSHxUQTmb6RqPeYe9JNMbaTeHEhZEsGistbN9GzBAwrSdeyS8fLjjXPBfw6Wvm7FezSEQYxDuKP19zy8q",
  "key23": "3BMZaw1rq6XFLpJngVkVu8J3L5GrFXd84Mo1Zr3ZTXAeWSbXwyfgSvgTX4zFsa63d88MhdGKgFHQyiDVBZA7z3Xm",
  "key24": "5i4d1j45DniADT7uhHS156QCyZCvHXBasp2gndtxB6JJhNeMzsMPCLHALKnjM7GAq43sV1dmdB45uquvoq71xTk2",
  "key25": "UR5SVhUFAa74cEMruA2xMCXiKnbPxJRB5yyfpsAzJXtQtReRwV7JbRwuDFjjyv4KZWL5Es1LLSUZDkAabvwE5pX",
  "key26": "hnLfZrqpgUkEvZ2cCE2FoWBF26zgebriifUk5GGN6FXUewRTCkYacXnu1s9nQsiLi8En2x3HgxHwLPuJM2UJJ9H",
  "key27": "5FN8hnnnSz77xrppommB3iQNx8nWRRw2jJ2gFvHHYUKUi2TLHpYwTuJmY1vqNd5UBFGegJNBM2hQ7UXhvpHDrEkZ",
  "key28": "3AXwA9HSJDBmayFAuUuRrBWUPXGQtZNot51BXF855ZdJ3mrYXeXpGUmYXLToYe9AruwVBink7ixahzHpAVVtgVc8",
  "key29": "5hYWU9MoSLSqmKPUGS9RZArNcFdcWYkEZJ2sbuHv9P4C4zQEj1o7mbsECVkTzdNXU5bjqCQW1318Db6xjF46PpV4"
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
