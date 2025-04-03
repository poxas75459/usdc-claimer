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
    "2VPpuSkMcRN96jL2Tn4iRfgJMo62uv6cHYSiHJcxRvANS6tP4tuda5SdW6WH5MwohngPmGKkcwW3hgrMDeWSNdCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5GKoNPt5AXpuH3gn1XnejHT5CW4ANQpnz8fb3Hj8s2itdfNyA6npf5s8GP5Mynnd2b3D1vervHu21gtN2z15e3",
  "key1": "4ihZZwHq5XwnZBmi44agN6srZzq8N8g7nZq28hKqx9hygqme3FU8q6uo5KHgrJ1fTB6WyXL9GBcHzqQYD57j7gMZ",
  "key2": "vSutjWKiYQB6nSXGj3TaQ6jiYGE5Kk4p6TtA3niQHdrKLrL1cR91WcARAC4K56epgDuBxbN6mNAyyYaGLBBivcQ",
  "key3": "hzspMRwvU9LhxJcoPW9tAZeNw6J3pr91KfkoXcQjebFWt1TjnrtmAABHLNsmSbzUNt9apNRACpJLYB4t8X1W8tb",
  "key4": "5ZZwWf2rjHDbDoJ7TfTsdxw85wpgLnBUnACGNQuY7jkUpNoTUNd4qmtaRySUXdR2kTRzn21wVUCxiC1NLkugqzRm",
  "key5": "5iQeYNuC9FkH38GetgMEoB66FDiexe9SXogjCww38ohDEXhDQ6CCoNXFTNDzKCDmS2puc1qL2XDoskqJS8VzrNif",
  "key6": "NzQn7Pd8CZE8yNdA1vCWRzx4xtgtcEdYwbnXgcq3WoXRqzkxaidmcVvGtBvPj43saf9BkXQHphrFgs1UaPP57FZ",
  "key7": "9GuPfQNucjqfeYiYAPYGvEnfiRDLuWJaUEp3swWWNhCS1tYkZvqdsT1hRUBinHRe4gMTTAib4mH45aeHhmm8Aqt",
  "key8": "57SBDgXHK1ewUkN2hmHRmrgSrbVSPScke5yTczQVQvX6Z338wcxxESWDZJZVHEbABwJYgf3cnQXXEtJb6npouPBS",
  "key9": "53hyvz7udbD1m35no7pY6tV1Nc6zXpSphhvAJpygXjnZRanCxoU2ipYQmaGVDcShETRwqodTsuhs9LFWZZvNDWXK",
  "key10": "29hud8h1DoVUtEgv4ErTvVRkoW517cBiXDgazaVb5ZcjCAufnM8DThJeg1oMGPyCSNHmzKM2JfDZmuS64LyW5JuX",
  "key11": "2W3xHUeWtHv6JcyX7CBVmZyZUZ2Q1mNbBg1J2oyeoqPhx6Quzx5qLY78VorYkPdDbBGwKxVSKAVdpCRjhoFUeoBY",
  "key12": "C9kKSvNv9S5TLAAYdrbEMGLRQsVpLNSVGbruaokVXRcKVWLWDvfNzZK5pbx1H1jU8Vdi2f4XgMtHCm8izgHpZvd",
  "key13": "3MmiE1NNso48JeqoucwKK4ejqDcogZ86LeDAzsVHsJLcBoRf46dmriWUSi2eXPWYaRHEnQsD9HW377wuAwgFMhoL",
  "key14": "ZHjavVe5G8Pn1vb2xJQKTUeR2M8AVUYpYFx56ojdGMktiUu5jEEYF5UHSPZ3K2ogTdu8f8eiByXSwH2bBmSoy8m",
  "key15": "3CWdML8M6nXxprGaVKATgo18yPSLkSDTBtShDQxeKHjqEioc6C7bmnz7dtjPEP3JmVHuM3SnVZefBRU27xbJnj9A",
  "key16": "63zFq5R6e4jMuEBDZgrG6wyAFABg33DwEHxomtXaEfgnTE3tKCFBeWkq5hMfCsfHVYGz9fbR6XCRnLtMvAhRVQAF",
  "key17": "2o3xqkrPjtTcJ4Eoer5yedMmoZxfDR2jfbdZmaYUZEy5DbvaAMhiqJuZ8dehXWszDZ1iK6w3Sw7rvVDRoTANbnhz",
  "key18": "3nQAB8PBunkQcNjNEknmLBsyx4m9WNckKkX6rRQi3MKcJqxBxEAgUeVbXcVbVpEJPvEWUhfew9CVkeaAPPPAPFj9",
  "key19": "2LvWdqxbgEphLZ6XitX5KMA4d51LTQtEVoCuys5yZTytXyaUZFFBtkrgAfzdJsggnCNragH4EY91SRk4dWQQCBFL",
  "key20": "33pPcmXuyeuQWyupQ4WhY8UegEFzbjonnpvP9tFrx7GwNami672uAQvACLifrw4sPuqf6cUxvsFGryQnd2fEWvXh",
  "key21": "uMuNK6GAqHw5BRpq4HekUw2WRmYn8UAXmG2c6kSi97azDvtALJ3Q4dPSHHNvSrLMddYPhWsDA2A7JHAmtS9VGPA",
  "key22": "361FAKFzTuxgJHesYNYhTg1M8NBsb6SSdLgjMP8DpMt668jJ6Zd6iB4hdWZpQTxebWLmhEtgYmmLxVy7a366iQPk",
  "key23": "2vmiCU7io9kdt16Tt3LUbsLRvqbfwJpm8keejS6UJbojCiQqg3p1H6uS94Rh78LNX9hxGNoqot2QEDC5oU7xU76L",
  "key24": "2uFTdekoSh6HcmgWx25vLJ8zHpE22KhNw6MydhXAHN4reHzbXkaMrWuvWq1iueMiSsK8vedNhwW9YEX5Aq8Ke9QC",
  "key25": "3Jrix1pwKhFgGHbQXq6drfyGtwNPwzrySsyQBEyRY7KEa96E9CinDkJwqEhoz9VN5QK93DBgRj5kdsuuHWCVm7Hf",
  "key26": "39nsUYehnoJNDJiy3B4QyQQLimS1UtGZs2wC3NmP1RR4kufyQPYFQZwgwYKnrUPUpkpUZDZTtoQ8jBEAQMJgiqna",
  "key27": "4sLUTxzS2wXRXnqanEArtcERZcvsopzaeS3Fxq3fuEyuzjVoZ7jAv6q34uBmWuejRzQxGZ74eGwkRDuStjHcGAfi",
  "key28": "KXxBLQcz5CFbRFxNs2MtE6pXyNwyKHeDNsuwjSr6KATkGghrkWxNawX8BdnnyZmR6posA6turhzSw3ZW3QrB1Kb",
  "key29": "4j2ZPMMLKn885yzgJQiUeReVTLy4gsiLxFQfRXGTpoDcNW59tDtYrYmGBj9obXCxm8AA6r2q2YRVN51WaeCVML2e",
  "key30": "2DZmdGnp63UthHikR1eu5z1LqAassyxY1Wdykg216zD4fdHooAyVVDt3jmqaQiGuN6XebPrk6fXu2jA7Fkwvgk8S",
  "key31": "37MmLNfRCt8U7TqSTRnNFqMcYoiRgBD5scXZSeBzpLTkvnWvgR6EsJ3xevpQ5wDyLdq5JKU32VvmAHB3B3mi77mn",
  "key32": "5VruK5uqBfxWcG7SKqoe3DC3W861vCZ2VuDvHSMErvfFH4FPeM7dJC9KcP2qd3vag7UfyTdWzJXKdo4UZ8aS3Roa",
  "key33": "5DUVgaiPV5W9Pki1ADAj9g2Y9UZtRoTvhc8j51e4X4sg9kSGH8sJLJHLxgYaC3263o9v83QkKAkYCeFZkzaq1ken",
  "key34": "2eQr855FyMLisABiwVpZSKpRaWnb5VNGnysAavsE9be5hbrGyzrfjeihG2YmwW2AVm32uNDSFNvUg5ivNe6SpjBA",
  "key35": "xv5mQPc4qbd43u3Ek3T4Ti8JtZr6c8g8yz883qJb4ys7g4CdphRAbbueMECLNPjReTJ3EL44Wbr7GYjgZEop8yJ",
  "key36": "4UyUG5UQnjF3ujdWrG25HiqpGbbDedQBGfsnBE6SBVz59Sa1GNmF5PhGfrCmpy7tyiduqsnHPt8cknbyFJmTwpAy",
  "key37": "5Vbmep5h9QoAaMkXWYkkvVgKT71WuKoK7eXGKNHFM6kKRbo3nrF9FbDqGSg4gqgtUX2AWW4jrB7AUrEmmve6uMtM",
  "key38": "3BUED1NUpyNZfTdichrLcs4CUGfbCp2CtAm6FK6M9F8kjudrE82rB13msUbLoX4tNJo3EmhJexaRNQdWAGEfCTNW",
  "key39": "3YbNf9gawKTPVxjBvnM2y8oxMgU3NkLs8iwYM7Sk2e3ayN8BpasgRkNnqxjBZGFLEv2FgmuBjAtotdseCWgEdhCd",
  "key40": "u8u6yRPxyQTjA6CQbt1gMPqJe6NbzFaaTPHoJpM7KKMmfGyzAEwKEok8aY9FbuE9uSi5ExkSTsc5KE4if5ZQYyu",
  "key41": "2npz3qduh2Bu81eQ3C1fiuwoeEiZNCneS3XnwUU12vxW4YUmqHQSo3SmCxmb5MxrLrvTjgzsUMVPgWcLt8s5hGTx",
  "key42": "2G8yvSnfkhcJo4vitaTRa689obiAehBsTi7uGU4Qb3hMxNFKABU2xfdzzM4REm6CtjUijMYqBWz1BFRdh4z2ejE8"
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
