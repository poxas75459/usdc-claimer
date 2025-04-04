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
    "4kWgjoea5wguS2Q8nCpdiDHqJNzYuEm15aGRAMBC6T9CvckwzBaQyfwiJTQDG7FWiVoFQgkDsQT52w5HtnzhKHJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxVDPy9hG5WVB6zC3oczZmmFLYFskKabSGedVLvMb4w2vCX51g7TVXTqXegck7sCiJ8gUzz4K9QfHMqoBsgZ8J7",
  "key1": "3BqaA69kSCi9vAijQynVFnjAeR262U7ZxxUTYbrgCCFuxgkxgcCmNBDtLhMcwVsXb1EvzBjvnvBzMCj9o19kiiqy",
  "key2": "5rBPcXfbdjNnDP5wSF6jEDgCmou6J354mKNEbuvC4sMp7z7wg6sGK762U8tYxhFtXVzNrrQQehCbuz4GnJL3Trii",
  "key3": "59LpkHofJKA3FQHDEryDjhVvYaMcvhzmBkQKgzcuL7z23wsJveVi1dunJzLbr5P2aCzC3C5uLjdDSA2YktVwKbkT",
  "key4": "4cderRkHqd5Vs2WHmghMWapYNuUJKFkNs9h3ohkAT4gdH4C3PX2EY2xNLuisRzwrnAtrt6m7FYZBPXPcFAVRPDV8",
  "key5": "4jKnhTgic6Y3GWyWcQnbffyzA9jaUyrTgD5ni2fSeZSVG5KkWshW7Y4vjiA8jk25jdpHFLhGwx7NFHFpeP1RFwfL",
  "key6": "57pqJFcR3Hzck836L4W2e7e6ph63iivYgLpbS7RMNjCh8XDTSBHzbtM61FrTSTDbXqpqs46uHY8Mb1cWUud6kYRd",
  "key7": "661UXjC6G4wKK9DW4wVLqpLxSJCFNztxK3qHnEs7qWm6EeC2MxqMgsw9zeg6oaNr91zWC8gan1dPGpCreuD2nN3a",
  "key8": "5yJL4xhGGMqCGM6g8rm6BpT1FRiDeipsUCahJ1mBh51NjAiVgpdWhyczVqydNBhCrECGrVFtQ59H1F5zbXmNNHT9",
  "key9": "4Kj76FgJzgBAyHzkhw2AReJE6qdzW7qvpC71STAnNYqPUMbUHjgcX7ewEbS3zyJRVfFC6eST23z8Ygt3LbswudAS",
  "key10": "3pSdKaHaekfZFDyvekFP74WZ22Kk9M9hmtD6pQh9qVjSdLRqMHzFs9D7vPuSovRRN4rej6duwNdJ1iQ16x96TzfS",
  "key11": "4Dkg1sbVwa1pU7CMK6cBQMN68debodkzXpG2x9z6YqwaixXHFVREUhA8HmdeZLRZskogfHDVozTFrrJmQoUd9Ymn",
  "key12": "3PVxB5eVbtusYPpsPcqryNj5kzkBAo6VYrUJZj2FzEHwSRAp4pbc9BbuuNR1YijACdwx7iSGTX47oqCjFzaXNPgd",
  "key13": "qNy6GMQcVqhHo5iowmdc9H3AvQDyhwwo9EeN6rnamphGgZCviAdxoHq5J3xh5TdvLZnidp19iaVUAwF7r5qzYMH",
  "key14": "2h7cQ16cEnphJh28ZR8u1ErQgD7aWtmvkB1JeGsvyEZdwjaUi1Z8tLzSF5FPqcRVwKMkqtyLNenUjP3SLQjRajUF",
  "key15": "UcUJTkZuD9n27RKR6php7MdN9hecKB6ziz6BN2DVBimNQUwdDcrj1UwnA1TojBG6bovuvw1t859zp39YDTzDY6B",
  "key16": "2vp5duX58hS2HM7T4vR399hcHxErpjK7nvsj3dvHZb6zrNB72AG3uhHzYBiqkWYPyM1YYCBxQMtebyRWA2xLhHyy",
  "key17": "4kvL12MVYxVT7mfTdBdjqBgveQtyeDVMT35d8SArnbouFzWpnrGM84SKEffaq7caPYDxpb2X8CfvmeMB5tGCBRu9",
  "key18": "44wsUwm3TiTxPbphbTUAbPjZC1KwxhXaakojE4QjVgG7o6bKVqViJyDkdaMU4UiZkmbAcekEgY7yxKo7NatENe7K",
  "key19": "2maVCPWs8nbnxkvAM3bRYTQ1dn9x9iQgHHxfWZKYDDxfmfKJyMg8T4fb76mn4svgm6LQPspSahezqJ9pp6a2Me7S",
  "key20": "MXsSJ3Yc4zupFTAGcfVYnrt1H62q9uVY9ZL5qvuY38M9CsHyDiMhESfrkFaNd1pqqCKduemkwDrLzmR7cdRFQ2B",
  "key21": "qwtLTu2QTYN71eNUEVr7A8j5ei9o9cVoLeCNtoMSci5xX2i5oZFPT9ALPuABpF5D66QY3MEUWa8vzX1ucocNodf",
  "key22": "2MZpi829eGoKsr76isdxNLWtrXV2eGEuxYSNMKHJrEVDbe2aZkYCRJiqobTCvAssoboMR4P2HKKRzREWP3a7tuap",
  "key23": "2PLGV2ytAaZpB2dbJuZ1tiUqWndCKLKW4vfTfHELuF2u8gxyBFwC5djPvRPVoyTUULjZrC5cvYPN2Yfx2s3crDFw",
  "key24": "ySoUT7LNBqbnCJhZt4RdtYc8VCzxHhBzqjJEvorGJUosm8pP8uMHSAF6Ry86pCWBYs52yeve2p4FdPMPakEY42Q",
  "key25": "UjpWMqLB888CA9Hint9iR94SRDWctz4JniiZeAxs7qFbjxeNXySKow1tndGwhMNqnPfnwFiD2RD51cRpP1Chsdb",
  "key26": "2Tss3T6Yj4M6jCcCTUb3TNs6tg3RW6BEgY2SoQnjoYhPmUauzMR7ghrzstSavg4PMeosrFXNGyhhYfqdjXPgC16x",
  "key27": "4FYQZyuLcXWyLkcHfCo5V1pN5A7C9qHAWV9DqDyXPhE4g79DTu68ud2xwAxtmC2Xd17dFr6X9734t1P7LXiPgvmS",
  "key28": "4Uif6WaGTJm193y9g6aY9wLin4bwqBXonYs9otiv1CY5FqwAqoawatu72cjkD6BBq8Yj8aafLJCTDSJr3HWNkgXU",
  "key29": "1Q7jsXTVFppKun9xKBtsXC1AkMZVuZopc6mpQKmmqwzP751WC2FviDFkLTbpL8ZHhCQuyC2Pr8GZegh2LL7feA1",
  "key30": "5wuBJKr4pvaCAPhQM2JEcZmfDMhWVhhnZ3sF3ZvVkScEaCgyVqXYYyU26PWaK4qWE5zunNthKU1xTxbnxA87BwcY",
  "key31": "4vBGqWLMghqMpkQuDfrxNQnvWFJ3UB3jrDv98UT4hADwqQrvsV8GLefpT4GCMCzygTfy7eMkFMoemX1wqXnxHX7j",
  "key32": "2LkJSesiXUpEtLhuPduSgdsSN8Po9RAfwW3uj8pNTS12HWyNiV9e3KifAqxFEkGY8PgJjjE18AeWCRL22TqPjzoe",
  "key33": "5Ee15rEfxNUHkMYhzUuWKTFoLbf3pmERpSapM8rWzJ2QeMGBEiMPCpXZXRcffAkm1GUGtpNeEPLJaJ52rr5KvFbr",
  "key34": "4dzUNG1nhALCNzhH7bpNGHjNyow3wweux8BhFcJSRatv2JX5sQdZDaufJsM8wUQBPYr3nDf6rRWmNCmCQ69pQw2U",
  "key35": "383omJwLM1sRBX9SHPxBsne1FgiqXirPrqS6bcschCcKDGFZXdaHQ79GmiQsLtA1BLcpkYKMUiN6DNJ6zojcFA4a",
  "key36": "oPXzY8ShfKKFG1VYWuixGpCakNj1ActabLZsgKhvRLVvb9Pbg2ofBxxGuTHNhbCvR6EvjeSGdQrCkSkQZtkjvvi",
  "key37": "5bJA9fmyD5QKxtWgH12cbDsX44vLj6nGhjN5AfgUCrgM1RPq7GTdfhWYZ6kyWRqfq8xG3CokvAHKrkjDkVNcRHbN",
  "key38": "43CYy8LLWf6H7NScmdttjfgSjp2oprTqERpob8LjqZFmic824RyHMY2CdxqxHQaLZejAj5UYwTBvCbUY7M5w6yDX"
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
