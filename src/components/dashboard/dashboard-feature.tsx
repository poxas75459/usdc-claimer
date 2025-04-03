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
    "2TLrUTBAn4e832Rk2wRZc2ibCUBh6yCtoQxqNQgBgHntG1t6eppGUj6kDftoeVJVyjW5mF9v87pNB7QkXJ3wKH4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HDjGRUDonLhYySst3J5LLMpysZmBa6ZVUsvApbSMzQ3LfCtycoKmdMMiw675LG248be9Rs23WzvjNZ8WLTNqkia",
  "key1": "5g6gggvcytZRV8DU5yW1dB4ogw1nhKoRGJsaAcXU57ivgjqz8JfsVkjBqq7oHVCrh27vgp3zxurpDDBXzZ4T4d2n",
  "key2": "5Fs8oWUPnSVrTMaN1GpYu75yakCvKyB4dk9zNtQf22t5Yb4EWfo7teeaNGuPCWPQVtBcLFmpMDm2cofSzi8fdnvk",
  "key3": "5zjDFYveiNu8LMZdXDQocuiXR5NEdQ8ZTLmAUigSekaYAhXv15gzAmi5x4Vy1EAa7DjYUMDrAuhzHASMo5AtbBhZ",
  "key4": "4JQu7icnymAtCJSxu51cv7ZTybcxHG6TneCjetfdMCB1Ziat2E83ZcwajBNmfd8qJbdwYg5FAwHwY89mKTNmqJFG",
  "key5": "5SfssSmbPPngCjK52fCaD2ZZoJZNeCWTNzPM4jL5GswUicsNwtvuFZnYWUYLAJLB45w4BFboC1R6Sb948LQANBze",
  "key6": "5RX5ZiQeGrmxYN61ee4bC2qTibArz4iGViPgvPcK79u6zf7gzGmaY94JTa8ZQWdLscjCTqNmsdwPiDbppa3kZfxM",
  "key7": "zW7iWdCbAT4s2MEeg1FL4q3nCFzBbXHMDWuoiWnEXVFsN6kmKD2wsroQW7qQpFyQN7pvQUJxFeivePvGUdDiddZ",
  "key8": "278Ub2kvtG3FKJctrgWEeRwmomrDZvh7HkkgbwvzuBHtEFVgFqjGvekG6Fs57XYacFcFwDPeAkXiA7fsfZq3HtQc",
  "key9": "49crPiVhF3NgXR2fJ7wts91VVQDbU6MduEfsJpTw8ZM624vDo3FgV4AaZVRF6JiSjFWen7yqe6LQthPH87JCdWNW",
  "key10": "GphopXVssatuTxdNuqTP7DkzJemUTqi6Amt9PdBUsqpHZiPD7fyavhE8PMk6jbsf7GRXh9aefhcXngqZVJv7U2v",
  "key11": "5Cw7DhbmArLCctkRHNsLXU7Eibzu8sk6E6a4eKUpSJYfXiBmFfEPXBN4pNzpLmqWvSHkv2YYxYSkXrGRtywJwGso",
  "key12": "hnnU6Lb6LQCQwHfcGNAoszFt69g2mFp9ZEpd2iG3p1unBSuApPrMWhh15CC5FJxFR5FgBeZSkjnQh6yA9izrfTh",
  "key13": "3AEGHmmDFrEak4s5HLYGCS58X88gNiu1tB6gV2EPLLDgFk9QWKc5RQijRuBqiMAnrcQ8CfVhDvYA9J2EhPWYVfgY",
  "key14": "29KDNF7wXxbD4D2bzAkf5nbM44P5tC7i3nLah7nVL7SxSgp9zmYtNS8ApNW9ZAJ6BoXBcT2AYBJ5RAgFhq9S3HMD",
  "key15": "7oeFJonvYb2MfZaKbxqSZ8ciJJtRJkx7YQrZkxn8nGZRoF9uaVKwVMsBr6g2F3Ut6QonoUie863TcqKQPNuMkJ3",
  "key16": "2u4nXCDhdWpfZcFfN6KRWsgJ5V22NYNLVS8DuQ3iDgwkNnSunikdtQsUkMQU5WZXRRnLX7vaXA2YNquXtgdpVK7q",
  "key17": "2cT2qrESjcoMR88T2QkRNAEYb4v4krueyGBqjDfFRkn9uiUo4XCsUe59wxTSkcVmZWQ25RXxw1QtcxpQ1ex2prk6",
  "key18": "2LTgzZdNkMnYHk5RRfXf4dBgxh8jsM4As54CFa2avhi7oXzYB75XMULRTyt59ViPWnekahxiFN3whDPa4yTyUwMd",
  "key19": "25AmEaZseq5UBTuToj6xQWC83oiYNkQ36jTrnEfNvYkT5hnfL2R3xT4dy72J3sdDZN6RaEi6PFN9yyauC2s1jakx",
  "key20": "5m1MkDsg3pLyLSbw4YU6YNVe6bLGNNbZHQQdDMcnrVawJk5utvLYqivqsLtDzrQM4f1yEordLFTV4oPFL4WNnBJv",
  "key21": "3qDed8DMos3TPp3RCSHF2R4SveqWf9NzxHec8VpmJaZX9iAyktxmsAt5iv4GzwTezTa49mkEU8eXpEejBVyceZPR",
  "key22": "4bFSgUVFw4BTgHxcZVvNEUoKYcEHHYFqEYYYT9B9aKRSZgT9mxKWDM1LZnMo7kxHvFhnVdh8d9fbDa47mkjkdVqX",
  "key23": "4AVoHrR9rTBrC8cWMiUxWbDXEAPiJt7PDvysrzS42uqVNdMuGS4JnbM1Ggn9hgGUU6bQK4D2aeJ7CUmorSebg4fJ",
  "key24": "2r3mujeXd2LLZiys3iPGxBttmwWTLJAsQ5Njv7wAbtUTvKtaQGHBn7xAEd2LAcCbQEsZJeVJ4v1ivsz65ciP2d7E",
  "key25": "27jLt3vrbQXV3wrSSC6kBTFXadzW9wBoWRqhLkscPTUDygd1D6UNB5BopEKBmEio9LNgrzLxSHU5VcAyhsLdQ14N",
  "key26": "SkXG2UMBSmZkP8774py2uMSHWJRRf84UbqqjEySCnG4sCc66rxq5KVUSLw8WGTAoQNdFrj3KZLptxf17he5DDqC",
  "key27": "cdrgvGLMUF62M1JdeT8i9MEcET1M355yzHi4Qa8qmN83PqY3NUgYVX1Gatc9B3UvkdsB4DRb3Yft9ixr6XkfVDz",
  "key28": "4eUrKQmZkdjKhxtiot9nANeciCzkrhGq1iTng6UQuXUZtCinCitXnJpMqKCwXcvgp6vQUto2UsPY3gbTrDtE1kPP",
  "key29": "38bNhrmxopQbpFqqFkDAj7SC6TptVuTRSmRot2r31PSkVeYc6ttmGgyndDyM8saonvqcqzANqZg4uPpmiw1HoDJK",
  "key30": "3jtHKdQbS12EoCdRSnCVwnGHATzwh5rB3o2LE3DEMgdHrkYUMEg2tFVF1QJzqvBNXTF4MhBM5QrWskfiWLKxLPAR",
  "key31": "4twphuEtTRmLN4mkKSpLk2cG684Qv5funmJgHrQvFEaw2W5xVhfKPY1r8F3R65GJZCM3iRkKBug8K3F4jVHh4bfo",
  "key32": "5FUiPeeD8KZcETm8BcuKq4AkECbQB3kjiwjzRc1EwzuEG3ZgX5gnryP3XCnpHMcCHQAJ85D8zdUafACdp1cCYXQx",
  "key33": "4RAUPTq7iZhXT42NiRE9H6h1hc2XHAyz8cB9RNf7ZFnaNxKAdnaaYsXDJJtotyZ4VkuNjv2ghAPXMB2qZCYxxaKT",
  "key34": "ozzfgH3bihQNCVvp5xb8XftKJiLc3sRRhcqgKkCyQqjZqpTSGfWeSgoLSkJVWYWGWyWw61SL18uYmpxCkQ9H7XP",
  "key35": "46jUkKhca7EK2VgEZnpTTu5EMS3cK6LFxKajbxLt7CwMx5ebhwSj4ig1XjoHArPxtuf1tVDwLnGUTkjQhsVJSs7C",
  "key36": "5nfDxBtwsS3DMcAmCouf5p7qfat7MQ1tXBJc4rs2hcq4MiKa4LEU8QHKyCfmFD7XVfB3dojhaaVdatPWpNwogjtM",
  "key37": "4TAEMPLqAvu4ra7eUFzmyWCYU1hriUj3SNnKKRswwHWEmd49LZp3zJ97FdKZ3XmWzZfa7jLw7u4Enjcd2vn4veTg",
  "key38": "4zoxGd3FZjo5Wga63qRN2kpZBSasfYNGrZHxc3c1udjngkXDgEKSF9XQvhMmqKQPzA2ZukeFQvq3DKfpmQ6vgmJt",
  "key39": "3gBf86MXasXPksjmmSYa7PVYvkPwaN3aqEcXS8t7j236zLHt23zP9tS5cJXCrtgpo7UHEvahyJHXeS9S9yGWWnz7",
  "key40": "5G9XgKoU3GxmYwQcmL1uX3APez8B5D76RUAn76s7VX9VG5fKFKdQFhBnfjS6Fxd78Mu3vj4VT74qUgVKNqf9uUfY",
  "key41": "3Ek11byB8L6UYMK6UPL83douzNzVvLk3Ym8ExwchK2rxDyXrVmxDE6VkarKvgBGph5ketvz2nM3ENrVnYtB48B5f",
  "key42": "2DyQgRVeABpAhc2ChmifC3ZtsNj3vCsFx82J6WCdjAji2NrkPD2TVgw75y3qDKj8Soz3dNBAyQpE4Qf5oUVAqYSr",
  "key43": "3myrvcAMbG6f6PoXt8DLn9Y63BV95EzdfUzfVncWzizQWkqVM5LngEcX1JUfmtgGZpUoZQgh5qiRuxFrabEUuBjm",
  "key44": "4jMFQ9EjFEtH6ikDAVjm3dyCQyA5ewXRXAxhqjcU6YR3kiwrFfST64Cwzqno8UUAvLxnDeyBFFcMbJMCqpJzK3oh",
  "key45": "8BUgRStskF3KxF715WA9becHmKWmh9ksoFDTEp5DwjRtokiSHpg2iygK1xnLYhswvXUYKSMCimwx1MdU2Mh6VMb",
  "key46": "2GLBtwbgvTgsafuTeU5VLXpTRMLGZRCn6PKVcSpYjB2jwkpCgAKC6SzvtbZwVd77SNpNpDyWnxdESbbPmxUqxFFM",
  "key47": "33vYLqGEcFRL7SWBQtr6JbkgCYzSc6JMCYovbU56qhcVxBiUeFHDfhR7ixnrCTZybXSCcXihhShZuWU6XGN4otZm",
  "key48": "2ULJzuXyDC4eMtAtQS8wmW8Z7ekg3s1x6sa1FRh6ZbxWSa8BziFN5S1tSNhNGppaF5RqhVj17UWtmBWW35ypSiKs",
  "key49": "3KgVRX4jxV5hnNGZumg6yDcczMM6GzVHtrDRqrxagGGDAhyDQ2UA9FezHQcivVsqYMd1FjKVbTdvPe9SrxQfVVM6"
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
