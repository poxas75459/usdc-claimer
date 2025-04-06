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
    "3JQkuxfuFop98ixLqRzYY6WJDJ2Js4gdgTbZKxDTyySoHMm2JSZFnas7BouQRiMKAuPK8UAo7JAsTbkqp4NnU2ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ny6j1x1Dcn227aUQ6iRi2GtJ6RynEmnxKXhY7RMR7fsQNSBHofHUDHhnq13rSkYU4PQvUctuMkWKDsgAf5tdxCg",
  "key1": "5hi3hsacRRxoo2QPo8NU4mQFm6PzRrJ2d33PiwXg9Tn995i4DkqMMti7QZx9kZFyHnMGQ51LFwWTxjjo8dgfDgxy",
  "key2": "5R1yqp89wKq9n9UvNbLfDix3o4ccpy2EHgvCDTACVB9XY4KkPbJPMPs87vvpy58s7qsN94DUEwTSDx1Tu48ezXHV",
  "key3": "3xcWFKoqjEqJUEysXcYXWYAMc8NXxcyJVnCUToX1kFbvoSHDmTwpu5VKwooQfTfBrVkB3P1wovXSyiCuSnwSZkmL",
  "key4": "3rVhafXtq73YeZbZ66LL3mjKm9JNRfMWfDJcTyCRXpa9m2dBfYm8nGAm82hpL5DFM4SVXzdTxYdLN5osLdBt3hzD",
  "key5": "3PW547CnzZrAo7QoSn1Fq7yiY7gYR3RDCNWkZqAdcbGF7Up7xM99SBwyVGVPTSb2gx5E2wHEau6LRrBfBwjGXyqJ",
  "key6": "2hbvT2UDATRtfieYTVsDjCuWkLNqyFzSDaB5VD7rKBExUfztWCpuztha1nvvx7spmzwsmHvxVZs3zkN3jxgWr5M3",
  "key7": "ntNtSc7YVtWFHxPr2fzwHubkQpqvqYuAKHVMzN5sZgeZd3kFsQRZKNoWq1Qc9LDoTQ34guffHBdEVkCL8pySLse",
  "key8": "6YyLTT79yetScZFyNnXB8Ym6ckTMyp5NEyr7P5JmXXE7on5Gk5RpVsA5tGZMC5LHH5fXZYbMuMYfPjNYMiTUmMt",
  "key9": "2BqMreQQJsdk3Kf2x2NWjPmJoYC6t6nwwRVhG8dKpsccRcU7RydvDEFz5svmrR3WgUvK2UjJeAj3xRo9NbKduF5y",
  "key10": "2fKNEDWTg7hD1NZNj1mNypXLYvKprAVTEwdxYnVCj9dvxjD9zgu1mNgh1nwWQ6fPMoWa3fHkk8n3xZFCGgMKcLT5",
  "key11": "66JxH3cMb9GvWtAKFVQLxsmh7JT9cqccFnTaKpx4fE4RAz6PK3hwAHE9Bs3iYCdiZTMEiontVxgGyZTWhUss8kBN",
  "key12": "2b1HYLjVBVqprpVwGuAYiNRaRvtTNSKY67vixLNUzWNKn7u8ZeJQkXVWEDMzyBRHMgLvwBRAkjMa8dCx9a7XcpVt",
  "key13": "2kBvW6JowGyLBDaMgGFYeVfXrG8aTcU9HgfzGzKDvoebwZP4cEvMPKcvmJF2tizKh9JGcFECPnWrMe7rgLydgTqc",
  "key14": "4c8tdck15rACVvfoVYHZV5AbWerGVmThbXNuSnrLogYUw749GuADJx6vD4EFeLR1KkasDeiZGNGtSdRN2MBU3NuE",
  "key15": "5thQA9EarhaF4zLoKXdZKeyhPG96EsQonDiEMi12sgPTReNGhZeZ658WZXsExxFP2tTXkjGUwAqUePU74ty9edH6",
  "key16": "AK3gQrfvc6p25dThk7M7L81PkxuZf3wuSEdnXLHri2t3ydXHN3YycM1Bm5DYAfWEtrGYKeCCAdWdDxojokTnV4F",
  "key17": "5jAiqCS7AZWqgTCzLhDk13r1dYXRposPKib1MgYKerwCEKkfz5bsE2VLKgszYGopNpZXLanutqorT6aYyixqPhRK",
  "key18": "4XPrmvShFCGAmxRkmTSG1pHHJthuHrThd7gAtmEhUGw5HHzimfLvQd817t4sdqg6HWLQT6wPcJbVJvRCoV3Mpjof",
  "key19": "5mam5VjScAiSJgEkWywbhSSaxXrX5BRBMdxsuEk4bG4qvHQ9Pa8ejBiBpuW4AN2S2dYjRXbMM3cZYfPoUPLTNmDz",
  "key20": "4Nz5HMU7V39XF4yqJm45Mc1v1LeUKg2UpQ5rtJLTzefnN6rJNvV9fPm6Gh2jFSeeJj6CQXZbRZKkuj1opXBMDK4D",
  "key21": "2vuVAdMi5eHrmQmqGNNtqnnHCdzRDCpHMMuL6t5HQxMyysB5rKVfbRx63MsijVdYuaZpMCUi9idPCtgAZjLD1tuD",
  "key22": "5G5UmHQxSpaoxWpVVDTHVkgmD96kWEZivaahcvGA1YgsERD4HHpqCNyjVrh2zeRQWtZ3RTMkeevUwM6g9VCHJKxW",
  "key23": "MLGaWycKZFCjmK6BDWKjJwbiaoRyt1f3uWmApgz2MpfyosEc179nBYxfonWHSTfWpbfxjngCjFr7nD3o62FMD78",
  "key24": "4ywk4X9Zuw5KggsrZsNtTzfe5tSFjdShTLWVo1n8YHyprQ2WF36HU1co1LTDzNBTReJCbCX4ZM41BAKaNKqTSVwd",
  "key25": "5hNryt7LXg5sqUHo1cfD1ENhb5sHhrV6f1tHYnrKBHJPLEHrcBBhAMnSgxyGZsTKj59WNYM7afQaT82QMzDj1c5V",
  "key26": "39LPdTN51TWMJwq1o12NfrWpYfwM9w5KisCRXsg1GAZTj6qVgTkX368jTQvfZUA7jmpZS7TgmL6ask2vcbNtctt9",
  "key27": "2RwnjsWvXePRPeBGDnd1EvXQxxwrraM29VrfLybMuX2vSMiCHyxiXHnjXguDyZFkA6G7pprX1cBor67Ht8ufudPT",
  "key28": "5HwzBv1eB3a786SFdtsc5E7zMgtii6JxRCgyF4v8j2v94PTqQ3CH4vhbmGFaC89GETgh4ggQGAw4bcQFw3kWhzCS",
  "key29": "5v5KBNhXDbeuCEhtTz8x2eDopMEr9gJVdaNg1BHp19wqBbw7SvWiqKcX948AByNpnZE64T6NAwMUiBdyRuVmRBUk",
  "key30": "48chVoRNjo6vf4HtzdEMDVMasnUkGE5NfJADFEgeawXrr5Y1FuHLQAPbuxEVUCnPUCjEnixPhd9fAu483Bb8VWDm",
  "key31": "5wQnzFqixa6tWj254vNyhXDp694ZEU9Ls5HtPvKVrfXrFMaKtYKpZUyhJ7m26EgAoLgWU6Dn5RSg53H78pi8nyaG",
  "key32": "26GoWErT1AkMt68pmxuj6fMRCKgAbzdL8DzEDBmjwZkWcV1gZUhRBuJSoxMJbfB3rveYZX45nSa15MA64Kk1pGUL",
  "key33": "ycTyPwjbcfpTdAGpLhLtHTHCtW3UFJBS9sbuRqmL4eyxPzuYRxEt85TLFgwQhdj2ALe1bsMxvGVt2pkeF2doTfw",
  "key34": "496vDuXfbPuNNQ51mKRorajfVGHfnMp4deuS262y6h3UWaVhmL3n5ttJc3eQWbx2AJn4y8JbYFKKk7CqyTBR5yn3",
  "key35": "ZXF5g5jyBGPhLWusNi7ydCPnqJFpxZzqpFywzvWMN42ZKSh4nGVawKzHJyd9JfW9VsE96Rt4UBpgb7q72H8TxZe",
  "key36": "5GTzaQgzaQJ6shrra1dkE96sQtRK1SdJBCAYc9crCgDy5a9nrNQiWkTCL4aFDjZHtoeMXv4iTMmunRU26wLxV8Ft"
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
