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
    "39sSQt77HijPf5xKJZxMQGLNsG1W8oBroZ1yu8AVCGopnQgbjLSTJACkeghv9YjTn9Exq7FF88jAXaisu5RfJsSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6eVJ8wGh73u2bKnrRCmLVPoPWqR4Va1t4En8NQso4eW4sJrWRz7LwfsXS3d9TmNKQVRJbtf16YsnT7TmnhHRqw",
  "key1": "4P5ZMNNybNjjs3mZsDkhDpDBvxYnUP4EUdRHULRwX5KFXCtcR9FSKsdJSP2xSDrr5ktk1wrPKjuR2PUmvBsnEr9r",
  "key2": "3fsuSAGEbeP35E4ZxePuVZ4NtES7wwegDJ7vHAjLDZv9kFV4UoRoVhLUk2d23F2aicdh7C4b3wVAhwfmBY4JHSFZ",
  "key3": "3wDqEmkSkaVb4MeC7cgBZ7s5hE8L7xnPUdvTewh8badV42bDEsTGYgETbAuYEuTqopyevSPdWQ3MAikaMf6CfHDd",
  "key4": "4zzNRHimHCbnk8dHFoMPN9QJWZkX7iBJFeHuEEkxapxVTAsVGScZpNwnHK6pgkkr3qKJf4oDVJb8grGB5q6jBU5g",
  "key5": "5eisg4gXozNaZ8GZDqGtud1bMHzqsiCJfcFFMaF8VDjQCg5ZepGotZhegRWoNS9AALF26CR46QHvi5nnQ9642fah",
  "key6": "5R68MfoUMygwNJTCesQcGv7z5PTZvfPmis97ED1ZpqG2bPcwAaFF8moE8mwSeyKLs3NSRE1we8n7sUjCzGSiZHVs",
  "key7": "31DP1JhUW83TKa3DoRer2VLi3cZikxjToQuZG5czu7UD9ERqBcDLnuhK1Q2TtszcRQghxSizZDrtEG1XJ4ZvFRvL",
  "key8": "5JwCHAgMiyrM5WknQp5t7LyJRxojKCNaNJsbMWyTzjHBfd8wqFxecRMwEdvZThmxf9j8aQywQQH4RXQ79SSMz9aW",
  "key9": "4Q4G8EeQy4uTcbnVBzip2f4et3derRCVCZNSq848dDLehuk1MEqq6fiMyCa8wzK33kGPWytbiodD7uShXybePHLo",
  "key10": "3zM1dUcqfZsRi97vueV4pN3od9Mgeui1oE9wEy2tTJrj8YeCrvzyi2rB8PkVete3JH1ipKSkBMoVvKaciLW4QSvQ",
  "key11": "DUsgVXvJzNKw91HPGA8VvLK3qF2FSXTxX8qFq2HowmjkDCqs9m1k1oPUhPjfhHRdSDbyLzct6d283QJsnKHT3Jw",
  "key12": "2kKxC97sB88vgjVUX5pPELCjHU4q4BrAHLTp7zirw9CEWEDmwgWpwJ6aZT1QxbhPx3reMcbtxmEZvDHTgddZ43FL",
  "key13": "2KbKoacUfWChQjabJQFDEaQvdoT6hrsxEuyd3dmqLiJ4vtaCLAS71HnNZKie6gyuY1hteDTBV9EDNVqoeXWUwfW3",
  "key14": "3XSVxCX9uza7bCVcT6aJTHJnWp1WcAN4YpehhMCs6RyKbqBtSjCVVYR3AZ7Kcf7YJ6TUUoQ7fvegMbqruWvH39WL",
  "key15": "3y9N5b8JFqB1B3skHegUNCHagCxdZ7dnN4unePn8tgZr42dD9NegrYsBEvnrqTt14EnWdZyowSdcywZtw3gMroBr",
  "key16": "2B7wGpXQd72S5ZqmtHRYgJ4uMxuie6tjW8ZcHZJibkgaGYP7ifbPoPP26BcjStHFYJ8Yb4wkYpM9Q9Z2v7gFhDAw",
  "key17": "5LrkGw4DkbJ4VHjMA56eJL31ojqDEk9PZPomovo4zSyG4HeQhRDvf5qEU23TjbfE35WnxruvUGceNwMMsG6GjdjL",
  "key18": "2Nzga5xEXJjAFihohCyc742YTbekz7TNZLAKSu4L7QNMCPQFx4vCZQZ1bdPXgeThUABiFBmDnL1rs5qtQh9vLYAA",
  "key19": "2VVGUy8mYCtzwqCpssBi5k5cK8aN1KbGLXezdWDymyGaCjy8BHxRvQQwaWuoLKQgPNuKo21RXcPHQ2VheNum41Dx",
  "key20": "q5bqqzYpLeBYshjLQu4UAcuZ8VpMrB7hwWVfPaPqGvMp3YHbZm7s9So8DdaSpJDRN2FLfg34Qhf6tFP6iEgR1s4",
  "key21": "3YcYCWcbHLKNHzZy76YUoxUbaVkQLiz532YP4Q7fruMofNT9GhB7MdkSrcad5p12TSVSWAjZZ3NbvCWoMdQHVccH",
  "key22": "2SWu49fKqw67oJL7UxUjaYrxQHgoL4UkqcxaB3YdjBSnroVMCJECyuLknH25asMBRWjcz66RsdNrTuHn78DvYHtk",
  "key23": "hrm49MkeyMALuJZ1QrkJa7kkRWrw3wCqKS2hgWhqrbNPPYTx6ZdVHi3WcK9PN6JS7Qbm2qrkY1zzRA8SL2FQMXi",
  "key24": "Das85tZAuJjU9jcQKEtjGovRQ4igiBSEBUir8oEeCaT2ywXSu5SYJLXiei8wvTfXAzRYffngyJRJWTTdAVWaWMU",
  "key25": "3ih67jq1eo5rL8GcUx9xFmgymC66wtygRJEpXQhYs4M9jxyXyjiHjQrc29jdwTrF1gq3RoZCUqJEqCcjTyUg3Un",
  "key26": "46damRQWYY9gA1c8Lc3SfNonbmrDo8BoFr76cek42dXwjFqkbXJgjnxT9bieCtan7LUqy2wmSXF6BLPTnsA5VRdo",
  "key27": "5tXxWGip1yd1ceWQvAcbsAs99GLcbvi7Vw3pmgG2qwdCqcSDkaesRR4QczM1JsjGjsKBnr7Szsw3gnHfDmvAJoT5",
  "key28": "eUW3xTUKrGjVyMdfbJLBUCJReVU3R1nNAFDRfR4Z6nyxKf8RQx3RkyyrN55MPTEAJiSGN589wG1FGjsXtqzLYoa",
  "key29": "65B95fyqoeptCZ5p7YqBWeNN1aP2QUVwHYH6ghm18Hg78wu8PjodGE2cKGWEcbcoX5HEsH5ee1hQcCFTixUkiHmT",
  "key30": "bUTMh9TuqiivxwoGUMrW6XJVUbqRN1TDQmuj2Vutrcmd4i69ifpFqZw3yEFGMXspeXbvfygN6JA94wy4SAyQitq",
  "key31": "4nAWoLQEvPrYVSMNBVbiFx7yJTmX2itUb3Lq39yo8XhzWaxEhkKTiZ1Md5kKzZJprZYgg8NzMm3Yq7a6bfqih71u",
  "key32": "2rqNkuBxdb3wvYAzVi64vLxwMXRKwqUartG8bN8EdiPG1RoCJWQTCsY9wmLGe7Eibh7cFaQToyibGvjVR6vCMzzH",
  "key33": "2398iuJfkRQ8hGCfTvjvWTnu13NquSKrsUDJgDx8zaT1XbpTFAHtqAr9LAHiTx1H9iUP1zpnuBaQH2n73b8t7tMu",
  "key34": "5z8BSVGkgShMR8Vs4E8yFGnokak8c9AKiUzU1gFh6HqBiTmkmTnxJDd9Ybuhy9CiPZ6iHZR54KDXSq9EzqGSzX7h"
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
