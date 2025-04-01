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
    "5QgVKqN6oQiAR2TuKUAnScHf5xBVzGZSJTW3nwiniPCPVFxxkmJuamtWZpFNq6yrL49xsiNrqTxfJdGq9YUshmMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JC3PvPJK1wdfkDGtsnU96CwGHdhNPGBbPhBKbw9ZzRQgEyGnn93FP71GonPhET6efrMUGv31ggxmq6LVvg12Fm8",
  "key1": "dqAp3SLwhWx2WXUfbjD2Bh74bNBFhyjepTAra3AKdjYuT9vh3gTGH4sFdLeh4PJsdq3iFunvdv3ikudPpEqEgN2",
  "key2": "NoQ54d2ne7goX3tJqwyR7AJCfcTnUpSSdhG85TqmbX9WJzqKur9CzkpW9BJntxLWhTXuXjo1FoFw4xCNMADwhj3",
  "key3": "2yvZSKqC5P23NjamLKzGBmtxXFPgYVhsbeRhBC1T4yKeG9tABbUBEZnNgEsEVNReyGkezRytnWzUwKgZe4iJCsMK",
  "key4": "3EawdFDqHqsKZsBVQ4KBLV2RZmmC95kMxjByccLbGn1DfcNXHqic8CLUvTp6aNgLwJUJ8Hoz5oJ28anwFSDnbX5i",
  "key5": "3unFBVbXwCEEShbFJt9roDYHFD1dbrvACxRNC5kkJSV18sJe71GC3BVviJp8JC4FffSebTEtVhgfxPWrPkCvefoV",
  "key6": "6717sombis8CiF6eAE6EVDAE5tc1XCACQv4p2o9GHmP2PtDsYEvEV77HydnH7HQYnfDnE1MKnkfjgLBKMdvfr3cQ",
  "key7": "3rMmBqH8KaaQZK1fax98jYzSAKStHe9EWbx8Uc7VTGrmzhEGDLExB3tiVHFiC7fK18XrbAuYNNw5Z24iFSNU5WY4",
  "key8": "2BAKoDrghW7BSsSsQiTpgWSJtvAhMbCqnSVsHUDSFytnkfNodTCoVJvdSRURtSVKqkdba3sxpCUpvNbNw28YzAMM",
  "key9": "3JYivypQvcEHvdc1bWUc4qTNaSLKxKErmAT3qRdSPuPVbdu6JQFekjfPjpjNaYRzwSfVDJFV1eNSmrbW4eB3jQLg",
  "key10": "42XmvdLtqGrbemxtmMbZW8mMdbG6LwiP87qni7ZRWqhkRwBWqT1cxkqHWEasHZnUpfoWUDbFWkrVRk99qSDwxXQk",
  "key11": "58iyegEScoWSjbrEbkk5QnRJ4pNm78Bu7xwVRcypE5TegXDzZkvsWeNmiTrKpv3uDxWJ2uFkrJrFnJqr8JxJopYN",
  "key12": "4a7nAcqa5QLv7Hcsu4LLVSdnbVXGML7Yh3XjanyRjcg6MVvSJCML1dHzG7U1RJjMZTMQdnPu1SoZasaREbvcU9Pt",
  "key13": "3i36sBYCYzVi7WjokfbkNNr6ULWnTo56zyrZeUiJXZiupi1jADHgNZ2YT93LSCcr31c79RYKZ3E1qvUxpcFeR4XK",
  "key14": "paWQWtDSbtVhis9Uc2Be6kpbqj4wwhxshGGQptQ3yrZrHdLCpvkpsjEXhqJapLxKmDRbeSojrFW6VcMKvics2zm",
  "key15": "3wusrssakfdpV8gdCK3fsMAUJjgvpa1G2YmRYJMRN48q2zqtzo1nYNveW4LxdSDZVkWZMghHCWb1LQVY2kxxoRfk",
  "key16": "4fB4NGpoF4fdL49ajWn5r3qRdMx1zNd38snb9PKnXERLe8sagaNACc6TGu6WyN4UjLLBySDSCu3cNjkQP6fRkbfJ",
  "key17": "3RqFhm6UX7depPWZU2yPiL5vNfJhq6eQGvgCX9uZ6bqZiqLsciyiqEUrJtJ4S7sXhFdCTbHiS1ZZcx7NJ6redtat",
  "key18": "4kppPBPKgSHe69NfDv344JDfo68Dw6qamNKn9bXqDLEP7dcgsiJVEpFhRH3wf8QxPHfGywCLYWfE8M8JuWVm1AFW",
  "key19": "z2HycKDtySUESzaykT9HA8gywnstRpmBfvET3Spc2LYTfSV5r8wiw9JZuQ7epJ4p8rYuJAugXwfUBpAnXUsrC7U",
  "key20": "m3AF2WsMto6YiY37dcbFQdhN9npv1cMR2X1Kx2ik9ciRUruJFawQcALNi1PHA3mZvqkPdSWeqxLWfDHpm2nCD93",
  "key21": "4EGpduWk7Abgutcxy8R5BtpjLuPbg3ZmmyJXiqwyboQJFXdtBEcAddksVavm3GkBeAnYkFVXmaH4NgWRYwc8oZbi",
  "key22": "5mkreQ8Yw6MoYkfmyrckQ8XsV3rP9ZN4Xi55nqYc9Y164qSCz6Q2m428k58JHESrsEPgyPZrKFwQuRPRHicsGHWB",
  "key23": "2o1XTrVQbVkznmg7LaWQBEfcPMBSJj2bVyWfadVwuVt7aZjuVbi53qk5pnh6CKujaEGQxS1jTVhxP1CL2LetBjZM",
  "key24": "5SKuNCf52rVeimhL8kuqpNjBiTmibTD7bNna9ZfkGVYdghmHPMct8ryw2wN2j7FtzvtgfXB77jfePehxGeVAYxYQ",
  "key25": "Sx5QBA9DaFktJqsHaXnVLuwFCvvLkDpimHTNa3FiGbMZekoiWwuqTqQWhdDsatufLxPRKYGRQaFDoD7FrJzwXNM",
  "key26": "2XLrEwjcDEVCRCHD5moeV2c1nWgC31jrYSu8JQQ7B5Zxh9saTqZPaZVTfasGtVk4krBJ8gRpRiByZtfdnyD6Jje7",
  "key27": "5jgTHY9y1QwxoPTmX22tGVPZCvXefcL5Z3JCWpFPgvRpCfku3yowu375tBc5wBc9ApeZ3vGg1U6DRc4rCbhMt4Hy",
  "key28": "3YVkDNpFvy9iejUboioxuBiMb3cehns9WVJxT1TBwvkvVBQU8wAdgHXaNLGrqopwmr3oohDJ5cCeYDbJAgxRRLN1",
  "key29": "3LMn5wxVxtep2V1uLkQRhnSAyKRkV3b8HcY121rTn8WyKM2Pxn1JgG1Qs57cJcDtZa1P8oqMzgKNet9kxYKeaiWR",
  "key30": "2drAmAYz9zxRUfPiV2XXNzTFaEgLiBkBX5eEz5rgm3FFx53eGk9CqTKtCkvLN7YojJP6xgseze5JB86ZipiL1rms",
  "key31": "sP6WgVXxNq6yohwDmabnvJHt7yjTzRTecx3pKkCK577gV3YCvk3BQHAwntFSPuMzwqS39wFfGFho6iwFhnmbhzR",
  "key32": "A3eLHsZRJqSzEf4b1sEZ7XdCp6RFNWYaKGC6yC8NwEGL17Kgo5RboUgUxGW5H6MjymEbp35AqN2EeXMGAthDts2",
  "key33": "irFG2mxNEMew1tuRF7ErVnnsxNB2SiTvYVZS3M6Trmti88fufrgyYys8RexVzsVQoBYoQqtgbbQesPHd8JjVV1M",
  "key34": "29JhZNixUBtzmg3oR5DgXt3DN4nRhKFVMjYiNhizFKSBmyNSksTxf7rtkJvaeuvRQY6dBz3xuKJN71uabyYfQZM1"
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
