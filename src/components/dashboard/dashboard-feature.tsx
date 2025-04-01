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
    "o3MgNwyDp26FCn7pBUr8q2RV7eQbW8LfX73mbPCFsZxgbCpMrEBgCVEZtywo4EYA3ztPxV1p7jin7A4GtKW1xAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JvXfGYTyhdn5FQu92kjhrheHpgvparnuyHrs6FJrPWESbp5WBFvRn7YqfVN52CwZJJfGZW2CjnAF4x12V79XVZ6",
  "key1": "2Mzr87X7aGwnEJGvCg9nxGLwqL33sz4gcuXMZgNLiVLXSC3nLpHvabjNWdWagNNMbPYFLtn94GNjvgWuC2MUZnBr",
  "key2": "5JVf9ZMb5egfnopitxDvj52LagWY15GAwtYPydj7gQ11uuVds3UqwR93mhbjVMc6G9VKtTzMVaHn2DCfhcZnRqp2",
  "key3": "64ja1xKbydu2wczxFaHXDMXDR6T6sXeJ6SNJDopaorhGV9dbxfbDnNV5TGXx3u6H8acxGodVyqmQLZ3SmiVziGio",
  "key4": "WwHYJyTjnv3dHRDDFZvb1FRrTCo7cWvjo4hjH17rcsyZXSUqE64LsqY6MeZ7Rrzwf4WgGCB9JaLuB61tYqsi4jC",
  "key5": "2k5Tnv56zLn4w4az426fcmfP8qqmvht1toutcMn8Gzv7gpRHa9R5fWnEp2EjQ6DufogaHLbh9RnsRv6ySkx5e5bg",
  "key6": "4vaDgTdc82SNMgq3gG9fmURQxvpgiabL7cXnw7vskKvxDdbnoZW9BdPXrSV65FBJGC6R3A4cvWy3G683qhaYka8Z",
  "key7": "5b6Go5ox5ARGBhhYKSeiaVyeCDTkmkdVVevJHBZ8TRrzLKEzvUjQbqTatCPRPbHoq37M81vr7TtJYKE8jDzqMEBT",
  "key8": "2WLcAKPvfSN71NPPK2XPrgGULHFrurH2ob7eX9ed3XpX8N1GjKCUKsswPqo5jujSszA3WzmeTjVPZydzphYjHp8F",
  "key9": "4zqE3YcXCeFEuJ8xnYTAKNS5kNt3jcDgJHkVtN3VsLxuqYwZho2Sknz5LyiTtN39XijdQPPMnF4N5BKFa9XAL8p8",
  "key10": "4TeVPkVXrqx46P6UgBkR74WdAXiH7anuwnSytQXyjyW2NcNeEyqrS8zNjs7FRdppigtsmNm9Lx9EiYE6QLfAKCDq",
  "key11": "2ahFaWsM2Xvw1qGmRYLcTn3R1UZjYVRFuupkosGzsWSrTimJMaQcMsXQueNdczDgjwC8rQHoyFtFFuNbdwU77gJy",
  "key12": "3dAjRBF3WVYmW6GJCBrqGyUGcsdoEShFvs1yoR6cncV7ZGK2tzKZTEfk3yhWSxSBmvbRWi6FpgHmb2SE7FJhooXq",
  "key13": "3YfhiejMk5qH4Y2cXZ5g66qRyTkCrp7HRJEKfRVZ7sxD8ryTxWYKMtQWCqC5ieWgJmfLGfKFxymGmzAoyfHCiC5Q",
  "key14": "5zRiun91NECdNxQo5po55DNtUXt7473hf85mQCdx2MzLMEvnLcT4SCgsDwL5Mfnhi3iKDefeMKGVcgmFq9m8bJ9D",
  "key15": "54ZgiZ6NtTA9xHxqWbQLAtBwQwiVA7jwX6Srw18jEZ5qJqGJXH8AGF9HWgoFLyjBbN9uHUujkQDxPXs8Bdpi9HvL",
  "key16": "522Bg7rqh1Ka3cb6TJ2LrLda1ErLHXFmV47WMFXGfW3uPDRUG1eaVx2qEoaD8fuSfzMSnJwNQGoehtnLXYRuwm8f",
  "key17": "jNJL7coCRWpGaKuS9aZFeTP5i52Crd7ZuxXjhTrWnQa4dpepiqALLa6FWhk4yvTYH6UVHGsvixvVncDv9hUQjat",
  "key18": "5E1dLTTfuKYWgmf3fCarx8TwxSon9XgmqsrJhxeLYLAKJyDjpmDErCd8VP7wnrkwSjGkw3K6DT1uiwLa3ujFwZbi",
  "key19": "2YPrNXSC2msM6tHPxWY84TGAw8Vdrvx9kgKjfGWzhXb3m1oWgGrZ3C5FU6xzhYzhjupSVH8KuS6bJEBQS19ZESjh",
  "key20": "3Qk7qGUzfB3kHfxjHCGXoijpSRf2qvZ9xXGBkyG7oBFNPacatzywPdUvhhEEYpr6m6voPoofm5ECFA1ci5gvte7c",
  "key21": "53vTGgDZ8KiAh91W43BASQ6yQEMMx7qS7TN6FwYHifxZGsE17pgKWBwWmFLiTxywHtJKAFxtoAgPPMC3NqLBm9Mu",
  "key22": "3tq5ZTV9S1c7PeLkVg5YgA2bM6uooYmPCzJVMcu2MBPo78TUUTm2nQvybq7TQPwxhvZBx4z3jvSng4eDopshtMKC",
  "key23": "4frDVfwC76XRfkynvvj9pZJobZQ3bwPfFkR4UqN5YABYv5JW39d7kHzLjUpH9xcya91P1vfoXeeRNU2YMSXWXSsT",
  "key24": "3hqXN9pStuk4ouAG3SLsposo9i3AeoonFJEZ4ZDdajzPakmsww64P7y4GodZyTYW5FzEARmkTXNL5fKqQr6R5Pf9",
  "key25": "44XrsexwohaUFaWfuemV42kjmqCBZMGBF7i1U2CRHnRxm5t3DUeU2KgmFhFkmVJXoUqRmTe3cVDVrAeMm3XT3iQ6",
  "key26": "3t7yJMr8XkvH2pjMesa4zy4vYQBymps2D6w3D36xB3SoEENCgbc19U6JX5KKYV3m5FUdHBzoESBdDJJuhnieknKM",
  "key27": "5gCnTnePKiW7uMw1LHxzdPXLSJHD5zRt2btEZC2K1TiP1KSMxupXGsGZJTNw4pir3xj26AmkgfhU9BknaNWbRNj9",
  "key28": "4AJKqNRw6pL7xzy6eWvbh68rM3KQWkqWy8bbZwk7shzFzZuwGUBc5cMtYxTEAzHq1YzMmsVegkxdj63ALyfePcQp",
  "key29": "kvbDSzGiqDxRExipfTn2QkwMTGuVQ2aHiJ29B84uBQ135cFLYdeKYpuxbZ82zyDPMuJeMkfADP2hGaYbo6xKcdy",
  "key30": "2onXboDHNAwj9WngkjA2YLBginQpnv6L6RbyBFnDCsVMvh1xnojCL5WMehmTciUuVNJ5UizQZveZ3iAGUeFrBTRf",
  "key31": "jDQX2cc9G2indJW3qsheGNxtREqs6oSPHjayd2TXp73BJwPn4AdeCfauytdGxSkZgkomRGQcuTwXaoBzU6U4new",
  "key32": "3kY5nmuEztfc16dwH9A3Gv85WKwphEZAwAW8yTjr1gbGky19uczBBDpAewQgrh9U1aLi6kLqDyCcEUgagEn8B61G",
  "key33": "2dqi7TS7mFWFwBjBDVFy8ubzVWR8VEDNdSpra36dGPhtTz4w6MwB9YqZr9T1HgJSjC6C1qCT4zvaQNBXUbGCBaXc",
  "key34": "5spiXp4h2FcYhV7PEMTMMLUVLEj4PfPXgXXBbbViCxpcpJGFfjW7RN1nFiZAemyK44AHvZGrA6YL7naksdJ9tzqL",
  "key35": "4v1qscWKkBjTwFm86evvBQ142E4TeNmbWD7azynBp6cDpR9UmVWWBNfZ7qPQfj5G2compFdjvgVLevfRfEQQ5nUM",
  "key36": "4jK9XVGUUr6ohVdQFM426yDkbNxag5YYzeg8W7znjSTxW1H6GbHGrqPFkJ9ndPdL13inrqnXJcBKMYtnVQWuhqdN",
  "key37": "46JxypJHnhFxpSWJ8eYseuznG7vvUVa19u8unbfiuQYZSYEqTqioVQgZgpmAYWBXt6dUCA2btcMG5Wjc44KFJ9PK",
  "key38": "LpwqSptyyN1pRKqrU6RNY4YfVJTFDoCwzWvgm3VndjaHnonNmD78MtvdnwMHrC7tNrvts5wCtkDLspFPNsFyQXU",
  "key39": "3c41SbZWWLtWEytAqnDVxb6C2fKJSYnX6PUCmCG8vVRP1KSZ37f6cRS5RQ39ACgv9cZ4pv4Aq6Vq2UANojJa5KEA",
  "key40": "2Y5wovH4kptrG5gs64NTWZEHqF7iMshtEkJzXVzcrxvcEZiYT1dhRR5YrEPAMh98TCCrakmaMF1GgGmtpNn2iZ6U",
  "key41": "4HChpU577oUuSvrAK2dYZk4fnwfLY6iKNyJnRKqW3dg9bbfu6pjxETnKUFGX8RE8z8cSrv1GNvsJRqEJCDQgwTiT",
  "key42": "2WX1wzSUeCNmrXuZyXtdGEFxRFfTxuWfBLAgUp88MQ6YYPz1FMn5gj4TJN31NkSPR6K9GpaUHs4sjRkN7vhVmewA",
  "key43": "yEjEvzjWLsL3zQrNRs52KiPx9ifkQHSNhRn8XSLDgxFvgT1pmTSP9GdMoMD7RKM1oaKTi5EoWjjFWNv8niZ1HWN",
  "key44": "4fjMYnQKoGP6TgsJeLi7MERaynw8ZJ9nFr2MQaz2axu7LR9e1LqaPFf395rhXhqJvWbvWXGV7tStE81XRT7NiU55",
  "key45": "2yy1Br2pbTeCRnvUNJpFhjQfs4dABpZWtHwmv387iZ5yFGeNqCgSXofnSwTAQ397e3db8HEtwpcNeu4BBZbphLwz",
  "key46": "5uH4xjsqnpiDzupavMfzZpXbaPeVHqevW1SPzaNnKHvPC9P8zDJnCRxaaGFR3HVXggqVCtNWQZbWPFCNyBGr2nLT",
  "key47": "2okJBqMQ2AiEUXWMB4wqUsga3osZQ1moyuVd872cWsrSPUU8cv79o2Fe5f3p9UNuVGq82nwZAbveVk59qDh7grVX",
  "key48": "64aQmehwBjtBtB8CMZ7c389oQBDKNNDo3cPG2jr3zP6ao6bGTyAPekxJXH5c7Dr9g2VwetrJYYCB6Aqgvr7Tak3K"
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
