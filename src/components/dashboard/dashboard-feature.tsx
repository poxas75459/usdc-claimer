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
    "4XUQWasHcWnr6pnppPYPpr4q5fVHMeaCVgM2FaAUZ1WBtdj1EUciEWrYz9A2mNM2kar19ySGy9ETGSeDZ2ChgNJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MX731RLub7deKTRPhSoZCNK22jtM2EekukhtxVVY7ZhGi8S1Y15p28DsUGTi46EKCBurkfkKPsePpAVjVAuRRw1",
  "key1": "3mLTVnqFfj62VUGd9yTaE465Hzbk6Wdv2ZLMUJgjxrBBKAHyj2rntM56jKhKFSdw7Z6Y7uE94cGR69DfiNzKJriL",
  "key2": "5bDGnrPPQAxf8X7uUxq8wJmf6BppCfYad2Rn5KVWw7MwfdBdQNfhKKx7f2fwz4Z9G1UEcbrXHnEuErVEaAm8HA94",
  "key3": "415Qp8mQvA7Ltm87GBnVq2K3LQcfMTR4g3Pw1QnkZPovcmdS9j2ZMR5ST1uwGqavtx9H9BdJAdSEcK75uqRfkC9x",
  "key4": "44wQmNLWTS884iV31nW9zb23nHw6Hcyuj5PUkmHfrbmm9n6FPM1a4XH8DoQxMMr621ByHkhGPgGHt1WNApZbE7vt",
  "key5": "2iK98ijccnGTpADXirsN2mXczLnjcW6QpWPwBTpSc7cp8pXefcRYerXqZSwSd8fAH4zxsRcQS4WHaBenxko1sATZ",
  "key6": "59UcqMESC2Ts2Uh1yDY5uFTwESuienYjUoq8rD6eryWto7nETeKdv3ZCDukGvCYZpWcmwxVPFnj3yu7eGycUxJY4",
  "key7": "2RLHueTodkDCSNSqVEwy9HN2RnpMGyzQiC1qFrUVieETSMjxwKKXkMzuCsLiceambYPbV5W7bvAzixBuhZeyQmda",
  "key8": "5hJqDCxoPp2dsrRhhDuJ7eko8S16VnQ4PM3L6JCs6PQdd2FvBvaujrXhgVT8tuDbFRj5gj3xThdUnKTNB7CpBHEe",
  "key9": "2LpbhQjeU97nf5pipA67EymxD7cTxeGYGWa6mYHB5UH8SdgTvgfGUUEFKuF8pKa6MxR5vhqd9kq7A95hyzGn2rLo",
  "key10": "2eSkj5GyJCpSoWrWCknprNowPwEtGkkjYFQcwM199Yt2CsfW8cTfjEUroX6MpnSQbwaB5gj4WrfRu35xKcspt9GW",
  "key11": "ZPLRe29cGS2LzvnCgGk5Fph1mmy9n6BtAA5AThUqBxTWpU4LQ8zWesYppRzqxjk5SeMR7qRk75GgPni12gyqERJ",
  "key12": "4bpbFoiFfwSagNR5UBUnh42mmFPzkMWFnPBDjVsJGLdENKfJaHjQwrJVxqvHhtoGqAnPF9sdnL5uvspXa97amREb",
  "key13": "2yMiz8cELYEaNWXWWAhM8nocf1ADGWzC68a3dKU6FpTJwbrGM3eFisqZSB5zfWJhS4MyRy9EbuYP1KrmbVejkdsQ",
  "key14": "3annfCKsSc651gARG832L7cFqNEvx5y1CFueVeZGbf73Qu7rdfttEJAhwm3S5HMw3mf5Zq1DRS69xqGTpg2KEW5x",
  "key15": "2LgQ4Cksqbspzai6f2m2SkjafQhtWfHrAeaBuWj4frhkw1xwQW6nLwwTeFwGkjgkfuro4gpiVYZDfUtfCUTrQnbF",
  "key16": "2yRuBuzrnThHwNUUYLdibfnv6GzADtLaS75Sa6GgxL3ChgYFghA4m7dBpfRrZWZ3aeuxgc652aHaEoaTqki1PeYj",
  "key17": "u7sXTcd7mX5FeYQ2pVZaCfbEi5uL8NXuNEX3g8utko5gjRNFpqUDq4ZKjZyaqZq9fP2seBunGrV5mo7tgqhWYWV",
  "key18": "5ATHMF1u2PXV9T7RvEs7C5xgho5DGpxTYoC7CgTD8N2RGUDcCbZE8DmP2j2yJB6cCCPkwiwFoQvCwhDTX9obopqA",
  "key19": "5tQfS8VSu5NyEcLabsbEQ21vpVbcHywskj3MBUzSx4NxBt4j9h7oSUTiGmXSssTFMgP92DzKMkJaNXvwmdU2FiAe",
  "key20": "3kYTDzL7S9HxohKnSezLQr7B1U9q2NmoWC95nK9B5WabnAMUTsJ6Y1VK7FAHz9fwbEoT46RFHV7rB46TVoSaQGxm",
  "key21": "3Z4QdRUeVJWdfobkMEp6xcSZVYqDbUJomVhHWENYJEQD34NBXW83gJX1sRyHvcCufsWGAeNcyYrqLecn1om5EbVk",
  "key22": "2eF58hPQpPjZ8StmuScLfbWM8o9bqfPY2u2gRhtoCnifrrTJht4pnNCgWk5iwmaY1JwkZXeVYXfvLQxcjuA4z7wo",
  "key23": "5dPejb4Nmj78nhDAQ4BtoDCiaxaygo3j6bwPLZj795VikZWWBmdNuaR67amF3q5BGywjqXarh7SSvS7yBykfQSTn",
  "key24": "4XXoBtTHsC2we8Z9c3FTvPBt274LEWv13AD746q3eB1BziSxiFH2UZK8Tx8eBWu2EhFSiSqVNDTzu1iNTfrLE6Sc",
  "key25": "3HWEkgjnkoCrf1bG7f1sQaEnqtoHRywDNYdcaL3FR693ogm9VJeixWSoRzqGuP7WbszKFsom6XS1ujhZXTcb1L81",
  "key26": "soVGCxVAiQgLAsLkX4quFKFLePdMdtUvt1RRVpxiMoiNk5KYaChdebvhjqDSb4PtvteYjCutoCZMhKtEeuA6wcp",
  "key27": "3XY3rdbbJ1Ycznfvo2agqwwmuUwfo3c6BWpanCNC4mwMWuDqa9smTCC7gVqvunjtYgpdSr5vR9WHDsdq7QoENniN",
  "key28": "5gtY678YGwsR35FAAxrXv6mcfCr4F74N2oipypLxqp95aA3pVu6dHX6HRjavFy78NCoWPrKpM9RGydhHiULE9E83",
  "key29": "FViJ4WLzr1M6pbVFphE1YwfG1fu8kbX8URwkiqDssWj6bLtUFLtLgkmNT5bQTGaTfqPpL18ozSzRxTMVHrEz9E5",
  "key30": "Cn8W5PdYj8GfciJhgsmKhGsg7QrE39a6RG1KZNT4sLboUX79MLHtn5Knn2G4RDuotyfEjSNpzXULr4JtsoSnpPW",
  "key31": "BCwD2SX7vj9j3WnLMmCYVsaRoaoZnbC2VPsvYYdKEqL28mopJDBtF3V68H5Gx8NjcPoc3GzmU72CXgxaz6cYRja",
  "key32": "ig8oGsLXHmqSewr3y2Cww3QTW1c1EbsZmYeRjhAE9t3pU17XTxXGZuhq6GNgGTYDqqfhHPym4GMEZrZ4QoxESTJ",
  "key33": "5mhKaa2ybfde5z2fWrEu7WuhjJUdVvUhNnok7TBxeoGw4aT53TxynvH5vnXMADCp7JJUSuJmrbunVxVnCtWMb5zG",
  "key34": "2aL2R8QfTXnhrfvYr9pbbzqEdLkwuqshTDN7yazQdz8iYwwSFbHKCkooPsTxqXeLHVB4BEywfGVDq2Www2SxNaeC",
  "key35": "27NsuNr939Pe2JTG19vPkz5Pu7YWDdbamNxbkWboE2pdLfR95BwQNfFRUL5uFjHwvdxNYSxyQupnDFnEt3qjCqKK",
  "key36": "3yzBrfPokRAa25B31d2MMJHRw2bR5yQX8Y6UnZKnynb5j4itibDg7KyapwKXS4uMCJGGSv1zCMjkxqdNdQn5iUEm",
  "key37": "4FWZRpgVSRGpam6cGRN6Ww9FYhm286nCmM5sjhFELwHDxkigy55oXrgAWKoqK7mVoZQ9BRfgTgbbxAsFDUxxH2ss",
  "key38": "2ZG1FLp89SKSWrju61tcaQU16ZmK2PkPLjW8nNdDmR73ScGFnZcFmfBDEu1Bj5pArNe5XbPdpZRGCqeADgtTLHwf",
  "key39": "5f9kyx3T5d85fdG2jTxwYw719VpcsBnHvzZ9cZ4Tqb2s4CcjKUyjeoioksUMDmJUDwyiTSiWT6dt5CrRY4ae7Ynw",
  "key40": "H4x6B1xTsguWsvsFqzbXNvayrN5yJy2M2eiTFxz89ujEtRztoVuanVyfDLH4jtist76KY8dfpJGfEQVT7EUWAou"
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
