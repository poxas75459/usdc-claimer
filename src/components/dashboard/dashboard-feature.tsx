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
    "4wapnUN5HvVon93qurik3ub1Y1s9yFu13em5NdxQrqimZdxYcR2iqv5Sb8xQJ4697NdVU1bcr1vbwvYYdg5njwjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ddp68wgEYNt4eTJ8zDbqDd8yMMBf7sPyYcaGanyNvAfGvav2WoeVgoX8NxRCxECQ9gKbN8k8mS2wKvFEtT84CbA",
  "key1": "2zPWJwFaUNmPvCWArKSdMhizkp8hNXmyssySa5BmwyJT7LEpuDSCsEe8tEZYgWs4kkZhPDNCb7GZ9KbKpwR76Bng",
  "key2": "3DjXzfCdsovaZNDtLHNS4fm6ynWo6mTiotpYh6UNrZ7kFR91zzXKWhZNwp2jrr9Yo4vDfmGkFuJS71mxNFEs2SUe",
  "key3": "64t8LkuLRnZmYbQRVhqkszW7KgSiagZQjyK3hyva7faQuazfju7gUDb2LkkvCfghUnJHbf6aVLvSTRaAMTUJvDa9",
  "key4": "3ko4J5jjAwg9D4TZRPaUFDKDYNWeixWtpY7g6h3m4GcAEZxwsfSnyZAoubrXdy4qHVbuCWgrCVfuSMZ7r9kKn62Y",
  "key5": "2EnpVd9URALYs8m6FjiVJsAPdCT27Y1dfUgcFZMBCeM8cxD43bbvKohYmCEhwRBYU1BtT9Qow9WKNG7MDmDN3z4V",
  "key6": "41j4Q99tHUfZo6isj5G4yF9p7qPHYn2rcazvjWUkHob5WgBbBSaqaBjfiHG5vQdG9sTYwmFnJTrrgr7FHvSeYfK2",
  "key7": "4aC3Kim22KQqDkjBZSdNtYYqEgZqJut4ihQTU19kvmkk4Qja2xpXH2FjheiiDuwxRnMktNFZDi7f6MeeJMmAWh2h",
  "key8": "33R2ekTTesbPLxvA4q8ZR8fPfEeZ255pb6FemsxN49Mq8BSnC5YHi6B6YZ38Waz7RqHVEDgFgYe18QwvAhpcsSKA",
  "key9": "2qndybJMXsKeZJMF7NYi5Mb8t1z24LNWH76URsiK7KX8jXgeTJEAnvz76ZMhkgoJdP5gsWBiVx5tep1eYTAmazT2",
  "key10": "3h61SsggqX6vHTJujLR4tpHo44cph7Fx24KAGANsnqajSEmCBGGEKneVNQTovRTR8aYtPfi7zzYhfWZ8PyssMuXe",
  "key11": "8NjZ6DiiUowEXY46a19JuayutFjz8xjuCnfWtLpbwQy56AyfPKZtrxEhndKuUdXEnnivHxCNnPUQiAf4EmNqz46",
  "key12": "FcLKDWPjFKM96rVE8fyUarUn9CUvqEt7v5KeZtn9fNJD83QEphXWin3KnwdzCexoJusZAg2xsrjbGbBkymcN2hn",
  "key13": "4WF1XLbxaSdLSeieu9KcFNTDbC3YHjGsqxSq6f1JacXeJwf3cdgxAibebnCCYR6GCmQaJCb16pnkXDWfJkwYtkhp",
  "key14": "27d6Hsb8gB9epc7h6dU9QrWkiRkqQhxh6xMsqspfuh64rJhAvctfz5HEWEDwTp9tXAMJYt9RrXCPQ5d9iFSW2NSN",
  "key15": "4tPu4o6osZuh69CGZBNLTsSptQZkeSwvVa1PKQB2JAbUuh92Vaay4RuZTQp3y2FeLqxq1prmFmFmeMFNDwSeCvNm",
  "key16": "2Cp4DVFKPJsYG1fc9P7nskBZLZrMpUK6qmnREGxGB3Z47yVZoNdQy1ejNEhZv4oKXndeESpPbcJkbmihRbAJKa93",
  "key17": "4PBTTxLqBSQCTKKbVagcmTmGgP4N5hUWVyuVubqPEDLvdG8z9fCtrLy9xBZdcDsQdXYLDaZzZjJtcLEVdGQSeHHC",
  "key18": "2vJcxUjfDejgrqsMzxtF3JixPMLfoasXmzRQTANgckja5jXabB582HmApogFddq3k6mcdFvzc8BkDNkbdCQP3qJu",
  "key19": "2nSki3sgGiKqhoCd5Y1qZ8LmEHToTMVQAUVBcS2HSEKeVY69XcD5X2ath3XRv1kLD1vi5rZVhukadgjJrgbQ965H",
  "key20": "7ioNcp2gBFyGhVCxoBgcHEHGpcxGrybUYnpwpUpxsRJTiEy3kzcJa55HyFB3uTvQNJxipRWB2A8K8tqrLDNGzZU",
  "key21": "5SxfX8xEcUZjczzdUEF1Pmrr4i6YmozZGjjSrgo4YuEaMUfs4HPmA6bnoNDJmVas6VRt7TpMCHt5cw1LuPf2z36S",
  "key22": "YnHud6f4Qx8HhTCceQQ8oYTeUQjiT7V5PDNgPqjEHKvcPdszvLED2LT4at71XBkhKFuL7baubGJtjAeHQxtjwXw",
  "key23": "3DBBVw3w5QvJ6z5HDKBMhHZXsvWBHJuUQNrfDwLt8M2rFKQxfx4rPL3LComPoS5VyeuyHZ1sgwb8tQ3Her8fGR1X",
  "key24": "gPj97RDcJoFeWcnzxmn67gzHQJykBmbM9ZqXExQrHMxVt1g4W2UsyibqyAEgyvh4ebU6hYR7SQeXriBX8L43fZN",
  "key25": "kgs5UiKoDoWbZ5otbTofFQLxDdGEv3kKY9iprs4jQwxRNgAzcw9EweE2JV8tG3BnPmWJa9XB7qHzKfAL2w9vwDj",
  "key26": "vDKK6zAQ5D1SkpUxzMAWfHEbs9CfjJLM4xDCfP38oevPSCpfZV6GauW4engqv3wdCGsDkzp6Zxbh1esk1YhQfjL",
  "key27": "c6Yrcv7ExCWvTu99ieN8N8i322YVdU7qZxLYvkbnst9CX4hA3Y4bNPm822miSYjNJ15Hef2KL7s9pvc3MXNrKuB",
  "key28": "4gc1VdLVvZEzXJS4ytf4EmYh3JAw5tRZi5V1QvzqQiv4sz6ZGh1DmmW2Hw5cnFmEmY7bvzSECWPBoJwFDG8mnUcY",
  "key29": "3HT8fiBJLEV3rJk4p8zk4eweEVonbvhLZ6xwnQahwjfwuQg7YjNiz2bmpJ8S6Dq6Hhxft5W8DPUyqS6ACZPCHY39",
  "key30": "2HHtjmZz3Yg3jgqZDgzt3fMF5FTobx8qsWTZfaE1SAB6QDJJFPgSyABuTQWmsiDNFkpusL4TxetyU1VvsdLF6a5H",
  "key31": "iKBsHXCEyJ4tMXBn16GxsWVt6xWLm6yb7TQMrPjXrbV9BudkobDh57THjD6UPAUo9qQyi4AyYrzzSfYRkEcfnjr",
  "key32": "gWwxPCqhVmyA93EM8mwWgwApj1eH6cyXfWjKXNCgoQWcLTRf6FhysFQ6k5U2LUwF8Hp3UVu4Tb7Ybcd4mMZjZtg",
  "key33": "3tM1UMFUoVNz6sdY9AcrwSNigyAPDcXvDHSL5VBjZBZcHsL6eewgLd8P77hgjNQEJjFANaG2hHF2oShUouJYvoRV",
  "key34": "2QgFo8Fpwo3L1wRcfJKuz79S5bkFXc3Lmaaaex8b6WenBkHhKiCtnkGFqppi4xowhnKAYSfkU7krRCAa54QHp4eH",
  "key35": "WdmE4tK2u5XWrEFixpau9PtsuBragpxXJHAty6t8eWxMG5wVptDD2czMpWWozhdhfxXitL2d1QJk2DXYZDsDKrq",
  "key36": "3PEUMkU1qgmHFD7FQizDve9NvJy28s4bHsnVzEWABegKXHnDdZGJ6Zc5GHQZtEPwdn63ZgebyTdtr4dereK6LMqZ",
  "key37": "47YAqFVRLrkevjXALwBUE3YN7hhoCjkdk4BuHykK2PZE2qyyDf45isUFrCRF8UVgkni8gipjG4VhPUHahWr9TSBu",
  "key38": "FcqFXczHyshZX9dtcF5kM9SCGasw4gi2yQyi6ss34J5EGTvkenrFCAs8NjC5uKqLnZLUBv3t4LLwUDVRBVK1WZP",
  "key39": "4ejA5Ax6CDpdbRXUC7qRuBovYBB3wAiT9YYD5e4Adv5FW1xjmdZAUiBt41HB4cC9gh6s2SmEa683XiWQDvg19WEo",
  "key40": "4pc4UUL2x7YBkrUKdhVMfkbuWiaUBtKjjTJL3gJuzU8bPP5r2XdYHeGXWAWYei4pK4LR7z7e8jtdSWSxu3Pbdi46",
  "key41": "27sP4Wr7gbwwmameUd5SJYKfycMJTmvc41DNzgoQAEUgW14eJcpqpYKCa2xXByEc8m9MTPkEoAeLv7wQJyazH1yF",
  "key42": "4c2CKe5gV89G5c87MNMTFdGXae9USs3YC4fMzh2MEr1mmiZMjGcDcn6nWqfvZQhYpUA6zD2gojBy5SqomzD9ByFW",
  "key43": "7WQixHkdE41qWgWeg8AHjSRiL9JLPFpbte2rs3rW2RWcmFHwCp9UB3EsomFHBPH9PHhfYn5ubHPrGmYgmwhpcBf",
  "key44": "3M4CDASgbVV2cV5XbkAP4nj9p45RNCQf5zqSZT5AcShcFJdnhNmuG8Yo1VQ11Z2ZK9azunJy4ubpcTKhvLwVm1dU",
  "key45": "32uUsMXiNNELkycuoyUYQBstHAmEtcDMKV75ReJKAiN9BkmUoaK6fd1cBDBaVhmuLUUBG7xpdrV1nhs3rm5rVity"
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
