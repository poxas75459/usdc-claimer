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
    "K4nthLXqTQKjoP7Jirw2f3wXYAvMpbtPwnJkpBhsk3kZhatrGTDVPXtnWqCZ1LHBGuzXbaReDt4AwPUT3775Bac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yg7dqtG739mZiE3qndAL6497J1Y3dtQBJ5tidoXMt19yrJ9kRboeVu4CLcCpdnHEkuSVwDy1mxm7KyDGC1761q",
  "key1": "4aQbHhNvWX6qRKLMECWzb2d6iKwK9Zho7BH4yBXmF9yGo5U9ecHGYLD6eNN31cvxHvZxwJgtv138kHAUZZW98Xjt",
  "key2": "5zasqQKj3VWrnQFdJAfbHJABJ1oeX8Aqv9CMq1Bh8LKh62Pg94Cc1Mv5jW9PZ6t4TKKFctSNEzb8762168Gn2BYx",
  "key3": "3N9rtNZcTRWevn2b85oJcz4Ri4DFvob4N2thaUBTjUdZAQD95gs9cvPfLfPQYc7s1v5Yh4uZ3dgD6nBXM62VnaJt",
  "key4": "duWqK2YSBTYGp9kKJgHhNdU9YmkJRFtnTaaU6PSzVcHD3qSySRjVm8sm5oPNBMCUdvRKvJ4WYjA8xHFJ8F83hHg",
  "key5": "2AkK4daALJGPozkXBHZYEDTAzPgEc8GALNPjYvTuG3M5odfjJ5FfPdeWAeBxci5DALAtQFmbud7KRMK4mYaX1tEu",
  "key6": "n8wKPVfr4RSVKTHGqxWqZXmtS1Vk7yw7kfkVtqR8yP9EErnkPmhxcLmED9CYwbjDsuyD3NVEytciQ4n9A36MGDq",
  "key7": "tGWPpVFNqH4ARi44sorvE3m7UzkjWTVqg6nC71Q37icSoFwUm9ZZ5LRXrtzBqC8wGotSo1skMDSspDNTb9S4i9b",
  "key8": "2i9VGQ8ayJhvuG4F1grDWS4Ye7cN42F4s1AQ9mkmVevUiPJuxNG5y8DcTWwn3eJXcJNHtENQCNtXxG12XA2eVtHg",
  "key9": "4hETSyfmt1tBiX4ifp8nM1rjXCPYW1ZRTH6JKvvDfVrSts9J9PiwLQrx4H3D9M3sEx2EY3kdnvT3xzqifzWpCrJ1",
  "key10": "4WnbVvtd9NzQmjiQ2E48s7QDNzZ2u7Lz4MnV2p21N2rM7mAXzEmZ34p7dRWKw4hvHcdxuUPz2kg6V1PWYRZN2wyF",
  "key11": "NbUMNxZEUXi2CGncHaiyk5oWDzZb8u5p7GGWm3rqKMsEMqs8GqcRETTeBnYCF6ux8vXr4ZgbZdpyZRMqBLurFC9",
  "key12": "2x8pjy5wGXv9V3YQzx9T6j8vWFuG6jB4AnDCnzoDpbeoE4H72o6ePSVQX1j8cUYWr5RpYickPvjugFpwe7SFyk2V",
  "key13": "Y4qMGU1gGTPvMAkujB5ne6yoks5rCq94YTzLpKoGNbej5MgiCxWpqYHvW1B2q4d5oZFuCFraJvEWrscsLVYiCDS",
  "key14": "47XyaTgMcpAXkymj1HsUDXaDAsgeYX4yjNqsKEBtCq9nfTDBBkvBx5rNBETc9ryq2CTEan5JdQ6H5bzxG1gncQQ",
  "key15": "5Y3QtiSnspwti5qwkTRU8qQDp4YvMnBAix6wucyWZeZMTDqGNGfgDKx55jixsTcQeDLxwA1T65hgbJvuEoi6qF7b",
  "key16": "25a5cXkuKjoh9sksyrpsJd4qoboxNRZ4fYudgaHTL9tg7x1Y7AkWAQ8bTWz9jNnoSt7tPs3DBZwjaqDCiiLtiL8X",
  "key17": "4KgSUJXHJ4KUDfUdVmna7VrtLUbiaSLxYr9TnESEpA5Nx73A931Kw93uaWYN6niK9rTTnUFgvpyZKHdvNKJdawsn",
  "key18": "oQ6N5X7qZACb1tsEdU43FJCYkLb3uwjvHpzfxoZLiQgX7TJZuh1fVK8qc5TeaBBrTYntTdrdbe4qwQD1PiCBYiZ",
  "key19": "2AbnnwkU2zgBrU8ZNBY9DXYGdDrfctvwyXxWv2GBGsWV1B6oQR9jfEropQoWed68zipsyJFtpj4SRH3uURQhQqkp",
  "key20": "2adpxKRKwrDYYM8pYMKb9QsuxW2vXPXhAF4fPXs8Egocn5Lt9Djoy6RdgzKWrZc7wcpDD69FJkfitKCdtHcq9Ex8",
  "key21": "4FCdM39AYbcoA9sv7G7JtraVXJiweDxvUs5HLj4q52s9gtpwacnxsXqBJtmecVoKFt5XfftpFwRAMRvyDY796xN1",
  "key22": "5hFC2f1JAJ92gCLad6KYD579irDsX6E6SzwyYJxEi6uvSpn7L5TrK9MEVqy2oZRRgGehvb8auqwHyN8grczhSdaj",
  "key23": "5R6E2NA9hEF16qtZ17Q4BWdCSCdFo34WR2jRzhgCJMd1bsixavBKJayLuA3QiCUZ6nW5Xuh76VenpTw9vsjgkq9Y",
  "key24": "2qFBaTJxBmm9F5PLgkG7VERJZL1tRdSJpPM1Ys698as5qCLBw76oKtQLPouV7zwA3UL2znZ2EvYYbmnxjBbv3tyQ",
  "key25": "5kE9x4vtDC9P9RZHrnRRjdWeonFXD81bet6ubhmuJpp2fPqHkpnF71hPE6UTbPTrRLbw44SQokUiBKg9ULbeskhk",
  "key26": "5FfnVTnyTuN4QoHX8NufZxTUbKgwLQH1mpxhM93rHYgu7AgiWKXN7haz9MR8f48Q9dZEFEwyH2k2kgsNn6itNCq7",
  "key27": "2xr1W5XGkVwcjfatX8piu549kregUDBBffMxMSgKkpdb4nYsKpAjBrvxZeFwaMbn6uZmStp2jPJ82V8w4vKV4gQv",
  "key28": "3Qj8PZyw8JyKLA5jJpNMTPx2g7qgm1VtkQa6QVMEzEoRFr1UopPbJm8qcZefCLWRQoracML5VjEus3iFsCWyMDm1",
  "key29": "LxgWJGChsCFa1zzEGSUhhCBP9pgBsNUHoJ5bHigEZGUHQqGhcZTrvGJpgjiSaxHWSYhNPfUsQHoc7avAtcdJVdq",
  "key30": "2C9PNgzqPvhQabdyBuTTKT1eB54rfJPrixaRjQoYUYWpGGMShR2tQsUTswfvvXtnRd6nTUx521dH6YwQnddEKeT1",
  "key31": "2HwA4xcDAGZKA3CfZLZYpmxmM4M85wpUiaemDTNU5udzHDBEMoUJXTvwVo48qw47rBUSm84W42uerM7uj21Pgmpn",
  "key32": "wiRNA8coVo5ddrGUiF6cuv8oaqEVEsmVpkqc8vdUBpdDyuMP791q2bnwtX9ncTvz5KAEnUGGnWAF5mKFH6ebCK2",
  "key33": "Af1798Ckn8kR2h5vtiRSjCTQX1PpLqG3tzjLEfjXip5DjLxkdNNwWtRPPk3NMN4rWffhX29oYh96Cxg2omTCD6X"
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
