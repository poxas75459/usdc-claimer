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
    "5fKy7jeQw5VSSNH7P4xrbnpg3wLHaah4sosZfPcBeq6iwvLA711gUHrv47E4yX1tEh8Dj55dntGA6fGVHK6mjjCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSoiRB1pDqUaz5uHKrQphVNHengTFxQmDC16x3PoZ7Lth6qsHRZ1zXy5oEozuSLgqa71iAMnAF9ekvijqwYUtXj",
  "key1": "udpVKBChjWd5pZeagn24LDnztCeW3DVYpCvUZXgWFTZx4ty9eNTHGb2QGsuypsHBTtE83zLSKSUEjK7GQP2uuzX",
  "key2": "2YEjQfrrQtkYwiYF8bvyyPaE5ujfFM6Vp99prJC6djJBiMhiPSvseuCpBTnB1dQBjZ4jHTSndUKLLrE1uDU9fPdT",
  "key3": "4sRXzbJkdoiomPcNPDfQW83ai91iQndo2Jd1M3pVxGjg8sHptkCa8LFFooU99oHn38iTbHiJZSzVUsSoV2krYAjx",
  "key4": "4yC4A2KXz273JTfYeoojx5GQFsPcFpMQd4Qbfp4Uu7EB7p1C5VrWY42ibb7rpLvPdggKftgMT8pyFqKMJ1T4hsw9",
  "key5": "3nw5eMEY6ZbrqoGFnPcUeRXHgV4iHqfTXq4o6VqT7CD9Eyyw8t9uAJmJ1TnoGpKdcQsGaQQ6YV935nsVsw8roz5B",
  "key6": "nkz8P63RTvibh7RrEtEkfzeoUfU6sTBum9VaqAXALWdGThpRbvVhwudUt6FPcQNMLQ5MGaRk6zUmhNVNhcjiw7S",
  "key7": "JnQNWVPgaCK6sjJ8CiazFvfEpw5N7GCm2rnwHcdpjQbTbCGjTyssQtQq1iutRSD2U1318CfKGLQMN1qC45QFPsB",
  "key8": "2fxieXWUqP5EVpnXrR3HUe35KTRtWDHvzxVfnTyaPaignYffnqJezCF3eMoR1oQ8oYXCK6XvZgHAiWLf13WdR9En",
  "key9": "3NNc35695ipHreAfJfHcBrnLkDUbP32vhda2iTUZxyyaxT5v76TrRKjEV5LPqiEVcXRY5Mq7qfH5jUGfW1Gq7iJy",
  "key10": "3ZqFXkAw7boEWa7EojPpxWrjTuGNvropLh8pjvBjunsLNSaN7zRmNkVbbyBDe9dsVTX9D3KS5nvra4J8hUHqMKhT",
  "key11": "5FDWmSoNoX7Wks2TR9ccs9Xuyx5QNQ8QAkZz4mmhqaviVMsDa4sj6Mv5Q25hwAD3sahwRkvYTrn3siDhhxbyxt6p",
  "key12": "4b4bwryeMdaMxVL5o2RcAZ374sCRYsrGQc9w1yBVrbht1sGgAHzdKe8p5GChtmerDon6uMYx7jemHq8hc4JrQENx",
  "key13": "4FP43xH7wkTzkqcKo2Y2yyxDLb1kbVezpE6cnAbPt9di1zm6tinWCeYHtZxwBU4yuQ3FscS3zAwNtzg2d5eKRAMm",
  "key14": "2kuQixEApiS82dS997MCWX873dfQgntkaKV3MZkBagqCHYH77xA9znChhu3Tf617SQJ5CKae2cc2mKo92UP8HHjf",
  "key15": "5akCdjzyLJyMuuSa6pJTS6hDy8MEBezcxy8GdTQU6vvQDSZL9LQxBFWZFpM5jmx1wkikrkuYzfKfYC6QAo1KR9eN",
  "key16": "3dbPdfm7FwNqDCP33onsMmHqcUYU9hcSGUycSCWBt4LkYjuD5D1pu3sdEFXaXowxMbmSdQkFMMYMnihJgp3wZZJ2",
  "key17": "2RJWGE8f69SwyUjbdEbMbcxsXnjkQqcjJvuedLGkgPFZ4LZEPVwGPTSyL3uGC8RRe5FFRt5nTF8nkrJJsMYyme8v",
  "key18": "5N6bXTBnnZoztBCxVPm3F38TjDqkLxSTHPaa4Z5gMPiuBCBTYGqSGdBqbWfYH6uwQqfPKQyh75id1uGMfgFWxf42",
  "key19": "NQEPeTc3vzQCBrddDXyiMnpYPArZMxBBMgvKd2C1ZHkDmMuXxNUaqQwZSWABPWRMrwTqL7SzwtJfPTmymz4fqgn",
  "key20": "YudsojvgeE8RT8qVsQiHqRALzrF9juPyZMFnB7WtLK6APcAbm6oRQqwpGTSDpCyTLfZfwjEmdQuXk7sdwgMDs4F",
  "key21": "34HwvrJyiquLh8WYqtBAK56T3BWZRo4Lb6N669Hj1DXRk5hoXQamJyNH1Hvmu96g7cBGZm6kfFgj2ZDiymGh9KgM",
  "key22": "3irpdLspkZVU4bdAjh1bhrHuBvDmBCPqUVfeCkTdcsTifLicbvKF87WjFU7VQpW92vdzYU2nZBzc8FghEECPJSvh",
  "key23": "3a2p92PjABknhrf6yWAAZwoQaYL3gsjEFRPbceF5prWZk2muUQJ4cy2pUMKkDmBbXxaj6jgHFLxGnWyusdiD7crt",
  "key24": "2rUQ4dbUrUNmyXoX56q7fCLBkfbZT4jnmgi7M2fNEUQnWfAMzxxFpwB6gvS8XrJiEyVLZGNa5XCMHT5rJjNZntz6",
  "key25": "3TX6gvjkaoAxRLpEjPcMDC2cLwaJbRdq9GkaCZfU5wZbAvM74oNTdD6qGLU3K7TZ6gQnsB9B6Wuxk9SxuowFUxKS",
  "key26": "3Cd1Xth7YTaTpFXvGvmTimR3GXNdfq2zknXjHB71KE1vUr4hdb64NjbrDgBybCnSJeMKCUCaKYAR7WN6DFEMT7Re",
  "key27": "5j2BU9gMbpNRm6dQG8LNfCVNPpengyiSR9EroQN7FUUxGzrXif7b5pF7GTW5KiUFejuUwFbxQxoe4tTG166Y7qAW",
  "key28": "4ZnRwKKpQ6dhwZpxFun1s2oujfiqEDeGH4z4TZMmUYEy6HQcikuZDn2DXjBxWUHu1DgmXMydfw2uCJWk3FBp4rVX",
  "key29": "3QtVH3XdMDamRXpz7EhfGrRHbzBu4Me5XqGjfdGWrhivedveheLrb1U3gct2QA6jPVSNnhLiYgp96dEJFWR5NgRq",
  "key30": "3V69pnxEbgnDivW77J3ETs2AYkuwWeQu963DSDSUmv4yyqEdKWCaYiqnjg1Ehf5i9BRYSQopdD5vg9VAKWxesj9M",
  "key31": "4bg7EMRRZC2veehbnXckuQsNMWrp6281ZGMZFPuK8QqWuSq16987ngBScPTyMY5SyoSNGnxmjCCbHZsXPCHNNXKp",
  "key32": "3xpYDUXBWe87y8E6Ejnr5HjvTiyQuy2DxoVuYsCb4iaJm1jhqwEFi8osVC9NNqf6SDTtgfdztMqWpJEyQomSh3Ky",
  "key33": "4KGUhursiH9dHUTyPY1ZfN2ptjpAHVNNTy7EbDyewsTKRvNxcNbwVn9TSK5W3uwS5MB4z37U8zKWnkdb7XKEfDXA",
  "key34": "2U8ezxm2MqVgwxWaM2Yd5KWutiG4S7JCTzYH9xCnPteFUERLRuG7feqPLEkLwujaHrEkN8EuaztRL7uTwSotJH1c",
  "key35": "4KNHiFn74XL3BGJeQkVbMhZRKZU8AUFy7FG92sGCRYQtiXQVMKCXVyCP2TfQgE2y798nyUetuQkRZQXg1FHLBVXW",
  "key36": "2UxRPP51R5Un4VAm8jZXsb6tmMQBkWd5mpRxdN2NX1H37hRrC28hsNjKcb36mwRQP3ennS3Ls3KAQUzACdHfUPCC",
  "key37": "MXn6brYeDcGsnkgFCzHD182qTJ1oPMZJN3zJgSEoDUgdicFBkX9QMHusiGFw9kXw1LFd48PRH9PLJsChDCJy5MY",
  "key38": "EJT3rhMjSw2KycHHfJHsyhgVeWJ8SNa6rAk4okgRggUqrBszfS71WwDtX4YUTJLqNUeVUchAfHdtdyfaNrcpwaB",
  "key39": "56Kq4sEAiQKx4bGL2un2xvfmxPB4G9SyVBCGfYEy4gj78RTEfNipC5N5krNQNySbuMoupi967dNYswXxXz65UM7X",
  "key40": "5iMeB7XPsSCWm3vymboTWREk2J9bAoEBYwp9tXKmdUEQex2g7wS8fHoXJ6AQAfJCLtViK7EVArw7panskGRTN51m",
  "key41": "3FQozdhMSBS5QRfNTPDS8u3PKVR3DnANQNbfjx6eYoKmCcHH9YmYg5XXtF6VSrgxvpzCkmzBAEUwhJLP5B3YWGFc",
  "key42": "2rEUGrJ82PpyicwAmDGhnnYTod3scfuVwFh6qWEBaNZC7Jsyc5xW45gDndwg99qSJBcbbfwTCeTQPZDR1YeCDtHk",
  "key43": "43htHoHM4mqJve9nDWAnkCpgPGWm17HYb5cpZpSBNX7kFjFnJWqJgtK13pF41g57SWsPpyWeXVAsFxCsAWAXAFda",
  "key44": "4z4PyP6cqz1X5oNpYt1T9BVcGMocnpB554NvXkXZGpiVG5zNZ3LWDLe8z4ZFuCkNjdQPsvuZBHaKaH6h3dFEPkbF",
  "key45": "5ChAYTEKVY3Hk2G38z8PMFv4h7NRhqCPRXmyAbeYPp2AGF2wyXnwM6fuYEUhkvJk5Hyoy8bBZSDqdQYwWfj7FRhf",
  "key46": "YSUCDEbqW8urPpH8jxDUK2fPbg3zsKns4yn3VTZ3N4cvBrRtYnSo7KaBixBAhibgV7SJjQnhnwEZ5Wmowq7ZsRm"
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
