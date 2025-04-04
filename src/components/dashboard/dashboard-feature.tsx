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
    "3kN8Qp6grbpJiZWQa3bP68F5vMgCNe9upAMUcu6k87PKaKPBt6KYJM1SHdc2XoRBhB9a9KqafXby8B7NDVkLv914"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFuaerrVV36SzLbZRmsa8TcuSa1MtKCPNoeEMAYoQok4XjzBkcn5Ukuchch143TQjRSiMYKRqtjkgo2zYVzwrAd",
  "key1": "NqDJ1cDq3EVTdTCihMXhQ8ESftGiDFyymxcinMD69to7HJHAMkKumqzpoPp4T9RiyNQideH9PJ8Auq5RHTQSqLk",
  "key2": "5kbcfwQjmkbxMRR4aDD5WAWx1qs4yxsEhgGvKTR7tnEAJCcVo6vJH7rJRDbxsjh5vTycY7Kv82QTufax1mwqy2Tf",
  "key3": "5u4GDhPRmNBeeR3zLxgUwgPbzGmdLhNExBAaNatYEKrKwDRN1qmAnYuH6p4VE9z2nv1kS5mwwqfBQXb4Z6E9A3bY",
  "key4": "9kAZsCHSAHTkd8FTL25yrbju8rQshxdash9S4mEqSCTHyrUjRuRJDA6B8pQ5ZeknkH3kcgPqkWEXkXGm115jtSj",
  "key5": "2aeo5zcmEExEBR3yra7r4SJggecEdJFbQmQK4ffhkiwpK4w3Ps1BKKDkADa1X18r85UgjP2dpe8VFAZa7uGcTxcw",
  "key6": "yVjXdYyWZ2XtEPhXnR4mjqxRCJS7n1zSzyF9MsXp4vQQnHo5tG4SLs91cHui4i8YmzHGR8RNbTcxHgJDVKJnKJX",
  "key7": "2jkdCa8faimHDcK8CQtv2ideBzN3dAsmKSHPkwEdKfzq5TdHaq8N6216v82NqcdjJZrfXRU4MxNXCeEkZhqGnBuV",
  "key8": "2UAxjB4Wk2yZa4vSc1f6fc5ETXCDe39aNo7uGdT8Qr51MmvTW5eZvSLkdVYmWmLhxT8k5sYjtJsPyH85vHmCT8aY",
  "key9": "QUed4sqjQReAhXcXHuK6W56qhuoLMnUkNMV73LLSysmJJ9ziazSzTzoGqBeZnGjawX4bS2HDcuhZSn5SgrnseHB",
  "key10": "4aS6njzykw6VjpS4ERmhQp4HWoSCBRd37vzsY4uKAH2g7Sv4MTEyvS4DBSDfiQB1XzMfMVjKGS9aqp4ZGJeVdA3j",
  "key11": "2wXfmXzpWLYzS4tnzLAhEgngYPVLiMP4jk76ZqFMrXXN86ZBXM1vwVZxHfS56ySeDBSt9n4KnhcLPr13nrp5seoV",
  "key12": "MDzMK4TSYjk3jwHdD6vNpgvpTZsWmA42WK21Jd2Ao634TD5EDUTguYif5btWGxQLTdp9YbGzRgM5ESnzGskTeWm",
  "key13": "3rTfmGotdxV1YCTV2X2VWRP7BDrgEtNspWG6HyAZdueYeBagrHUsNtamByBL26KeqtKu1b7tHk1G46wLUVYuZ8oZ",
  "key14": "mRf7xrR6eSmYM9Jwe4CtUbpRPPxGdJPjRFtb5sAbC7gwt1pMgCxqKLWzzvcXYqbW33ByCJAJGKnFB8QKvVZYUYc",
  "key15": "5wKhgTwHwgH842GxExAE1AzRN2kqFkYuuz4ya95MRNt2o4bFumHfXwcDUsCwGDVPbdzHPCyn7LGhQrEkgYsknwFy",
  "key16": "5sC7e1B4nQYJwfqguW8yYafm8vEm2u6rNBZUem9HpTDHZPJVeeASSeyAcua4F72e1kWCbTA8bjoX2yBshPGi8GTo",
  "key17": "3Fu5bF4z9GWXQh9Ve1U5itjsw4isdb1fibqerLgjZ9EnSLQsZbMmdNAVkHN5x2VuDWbkhwB6QWx2ThHz9gkgcsXn",
  "key18": "WhRoXvYb5dkoMHsdDug25qNWhvnLWKEPcH5rQWXhVxLET9HRhWLRYykffFPEfy1uJEj7Ft1qRDto1YFnWfZZ2sZ",
  "key19": "56A7X9dMUUUv5Mfw9fHnfhWgegnNrqffvPoYaT3RKzUAvK8ranE9zDPc6YtVx8R6Po5i4DSkzGs9Z6o2rVa6yo79",
  "key20": "4NXSvDU2CPvC7dBh2PQQPnc8GX7mic3wjyuUjYV2WCSBRYwBkamCNpuDT2ZzSdpoaQno4wEPRCa4tebynGtLoFxB",
  "key21": "5PLrqc5tViAM2GaT3hkBcupHcSFqR4y6pdQgxDDRBuUaVeoSGy3HZKU7b98h6SkqV56Y3NgErQcdWou1CKhtFnNW",
  "key22": "5PEMWFQLSb73X72ZmdgQ3xpj9gAeyxRttU1ujL7Ewyn13NfN7hFj6sqRqEW5pPacBhuNerCH8CrEDSjQnkcDStVh",
  "key23": "4jWiwC9biJtQ1p3UKZ1i3ANk1tSf2dxhsPQaGAfVE9QXUfEUUu5tLXmJkDF6a4pBhe4R76CRVpUGckga13jnp6Gr",
  "key24": "4igU6h29gCZGhQpUqe4oKD38rEwxYtuHUHn9KgeE21phfDZoP2U4JqpEJQHg6XW7Q48VaLj85dcZZNTeXU2P3Ajp",
  "key25": "KFSieGmPB6LogqKUgqQEgTQAQSWk3EXUJ7Q7Kw6TMyLeX7GSKLtmACMFDosMNSfKLU6FRu5r5FzHzbkPRnyFNmg",
  "key26": "65BTEwKXgBS82R3peEfGDGffpt8KvMiEKqSdSARJkz7AbnpsxCfmi85krZiCJoiKJSMfbJY4aT1CyaBLm5rkTKiK",
  "key27": "LeSw9TB5eXshK8oYX5MxMy3XGXwzUEtrRqt1VhZYt6gzpFs857Rkr9hpysYS7p7X4VN9k9PxSA7ypkwQiG2VmGs",
  "key28": "2WDkCYSaA7MUbrPe7DrjJCBVyd8XKpf3Kwv6HoFBtvyU9bTxaLbY29AvTvcLY99hdgN8tghGZbwrJErQmiV4MQdG",
  "key29": "2WiVweBGty7HEws158Wn3ZRNgBTyteorU4agZfopaR7qQBq9uyfYtUmFhSPEPDNMKPuqaWuqpwgXpv3YHSSaco97",
  "key30": "4MhTT67Sxyz3dTx7UoP1TGQmnpkjhCpbBVmjVVexjaAXm1QJKYydj3iyqUSibprcs8AHEpve22VBhHnTEkMyTccc",
  "key31": "4THMVzCVmbf1ddPrkAaX7aNizHH3FaARbtgtbCoG5LD9YZbjutEYVnLkh566miWoKDsNhXgScpcYqiH8gUf5gj83",
  "key32": "iMpQRgA6HkNgGKJhFw3UJQWe4ZMG3BN16ksEyragBdGr6LBiYX6r9Fsu7ADMigCgBnkWtJuEueARTyr22mUi5nq",
  "key33": "3kKwYeTKc2Y63iRGJpZXYU8Ts9VqwRhUhWdhsHYZ2k2NLYG2FPyVYSK7Nt9tAQPxXvG6cZqWCTrSvDDBw1m5Pcmj",
  "key34": "5GiG7APbkkQZYmeL34ZwAuLgBug6UnZLL9ygTxd5E9UA2BtTYYZ4CASfMX9y2Bsw9BhZ87UiPGqcnC6URrmLcqKD",
  "key35": "3USKB8WocVs2dXvjtLKjDAiJzvGrJWFKQHLvBqt8bw4V1Jb3WiyXdbE3Qq2eLpbuynfEQee4p1aEchUJr4MLiwNy",
  "key36": "2rbR9u5mQfrvSXQivLwbcSPgpQG9kAM4SbGRUqhSWwt3RrBoh2D1f4NFuC3TukGpDBLEvBHuCKff77BuBWqHeTvu",
  "key37": "54YPbhV3rMcHRvV5yvcU4wxvtywEvHpobZRu6BUiWZELPWv8s3hLu13PjDdTZcCWdALRFdJsR24CM8hy3jXiw9V1",
  "key38": "24qL91Q7646bVS1u5kDzUt1DjmMxRPcf29bCxTRA2qceE6b4TriWngmVSikw73djiTPCH79qhDWsgGNxs2vqfqgz",
  "key39": "255V3mwSqkPVLfxMxuWp7FHVrn29WFBznBbQp6uYj97bcVZxsAaqiTz9krCYq4otyPS2LF2Ludf75SBCkH1Ccqpx",
  "key40": "2J9WtVKP9Y97tExh7tHhGEFCk75z1Ep8ziUfLDnooaRmMXgpjpJkLyUeUpRQ8ZmsPQs1oXJD9bXomsv5ybQhkqb3"
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
