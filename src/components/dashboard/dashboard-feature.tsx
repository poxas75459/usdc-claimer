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
    "48xKhivCLqpHRhNHSyEJZcVxZPPV5B5gLJVpE8qQuVBFWSvzx3HZ1TLd7KZf7Ri7htr7ZLHijvbnSiX9r87HdybX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbMc2ViF28m1K9tyDbbngrSNM82WtepyjP5p3NWLupL5qrVk87i1Mg3VA9cdvnhmSZ1rXVQe8cNUasmaZRzusu4",
  "key1": "36BXeyUzi7MNzWffHrer6oqebmYqpLxgV5YEn3MufX65xK64w4yDdggEH9k3TvQRfiRjT73TkgVRVjHR2iitqkPs",
  "key2": "4H7GvETwCyUkbRtAw9xAjhzHabmr1gwbdxDpWQXz6UvwGmTVUQF3P18ksG3MfXTstcbv2bgUzCZJ6yZQv3VR7FsZ",
  "key3": "6zMMq9ytpXyUUp5deC2oCJJEHsFJhzKo7kRV3HfsLktzkL1BrP5ez2EECKYFstEcUcqZqD3MCBYRmGRFvAxPriE",
  "key4": "4q7W4UKaxS8PfUHzd36roSXZH4fYqjjxUBHYhs3LyX2fnf8tP3dT9fmD9rzHyGzSsTPAYd32thsj5MgUesFjXyZy",
  "key5": "4E7TEPLXGbQ8VfBnbhWdCoffXk7ch6ky7wEbumythXRA6ZCtxZkucM1b12WeQRMet1V4f8XYDjeEM1wgrxuR8zS4",
  "key6": "smZm6ZvLdGaRzrD5tNGbF374wYU4RYrnp6v4fdK1TtSoQV8PnVPXXRmFPcAYh2WFZcAWdn5YF5oZDCx2UMbrUEK",
  "key7": "3pSEAJe363FsV6yGXfHq99qfYCVcaetbY3QALKmUx2ePGrcF6oCCGhgWLYphsc9A9Q8nA15ZwvK6rHkhhipodvjK",
  "key8": "3Zy3Y5kDcpE8p6of94fGNnZG4uxxq4rijRSGpb2BT5yJ3HQQ87sRvZTTiKGyTmzcksgkGHYUVegmtfnQG69BtH3d",
  "key9": "2Byp6BZ7U6jVmG9FkBbdS8eAaj5gUPJjjuaGxFc1ANng7aPM6LxLDcEtRhbRY73uXCsPziJg9gtr9yLEdL6K2MEs",
  "key10": "46C4x3hW3BX5dcXZnDE9Pun85J6D5sTuNYS2JwyN6pLKwCZDsY8uPiqvCa5CqxReDEg9LxVj98KSf6aWsQFjna4q",
  "key11": "RknF8sA1ui3sdVzBRnHJzgc8BaoyWdQyGbUQENCrudbx5hAZaeRMwtq8m4SS6mH4hkhjzkfMwbFTkhs2ob24WTk",
  "key12": "4qMXBwF5VKsK3MP6dCWN8ofrJDSdLaRmb4FZAaVumdc5aQPfv75ZfUHeneTgFWLFpnyS9Vj3YLozE1h59jqrhUyR",
  "key13": "4zKdvpvtWjqzCMpJMrq89rCDYnQE5e2vQ7zwqV6u7SbrL7rUz69hBCci1w5r2eLNwEgNEabHq4jjBjpxfQVFVJ5e",
  "key14": "5LB7aKaNCjt3UQXQZYnfWFqiL3EDXJLs5FgUtbwB43chBMh1rNK7NXqkNkhZ9HDQXWz7Bz1sQEdt6woWVf32MZDD",
  "key15": "4YHi3oYmg7jHSv7XdxFjzbY91xnCJvQYmt1LRmaAw8ukRLevZJKztVyK4vfs4TvC23jJyES2xJjCuPCPCzSr2iTo",
  "key16": "5cmetb2E3xvbNiuEap5sg9RhvHo9tjj3Db94E5avvkJTxRv91QkSDMaGayw7xhT6TuQHACM2V1hsTYkBreerdms4",
  "key17": "5SkXtTch2t43m63WR6szFioipvFM3QsqVRAxrcHz6vugBV2TXWiCpVej5JzkUQmLCE2kyycXSwZRTPKAPdH41XUx",
  "key18": "5J2PhkHMXcArQR1dmKCnBQ8NjUTvB2sZxrARYAriPR2254J2tKrVAHwz3FEhhWXbQgJuN2N6Sqz3wQGwsYQtKdn8",
  "key19": "5khPQKfX9uK1KL71t7xEZrvx2r16ramgQ7VdFnd12cgtr3EP1vk5j7FaeHPzzZ5km49dEjULZEfvyJ8Eg1hXkucp",
  "key20": "3h4AwMUFU5rHz8EsP3hFcvyinPi6pF5NPHinjAmScT9nGfcbjsKpxRReoJt6mz7u41CcN1e1QmhCKq4nFkTwQNga",
  "key21": "2xoBZ8xUPmcVb5pfzQSyc84ETEQLTyNCsK6ZiUPFNM5H2zihHrjaB3Ktw2c4Wczf3BWbbkbssLwVasn2oDajXLW3",
  "key22": "5CEsffefm989Mb6DxigsQUYt5DSviD1P3gGXTt9p7euV3DqfiY3MApcrWQAiHpzzVN9Y8gW3josRzRUHmiVdmHzL",
  "key23": "4bHrF78HD89fMnLy1VCQSmfLL7LjvfN913imhZf7oaDWgsg63298vmisNLcjgm2LWBZhy3GnQGrRoxBBU78ettae",
  "key24": "38XgQvW65No4rfNsEjtabpdvvfdKsQvL2JK2Dm3wTwp6SqcoZpUxGcRkgxfH36yb4HPMqQgKd3sojQw7o1PABV6A",
  "key25": "4dcKSMx97aRyhAGPD1TEmo43rk7wfRT4x472sxQTPMmNu5MTR1PhiE8W13rdy3WPzD6qWksUr5PHkwsx7QRwbRDE",
  "key26": "4vKKWfr4jW6YZrfNjKhAxbf34fGRPEUwbaqJD9hzA3nqBgHKxMrGjw8pWqVVmuk2QkBAgwvHphhe4fz3gFZhnfk6",
  "key27": "5vLkao1upLAdkmf1jLfZx6TRuZ2cLAnLW8A27mfeweTS9DNfrcHkEcF6KD8568cXFNq9xsvFpFsawvb4PGTe4uHd",
  "key28": "4Q85yJ6Y8N888nV5DbsdkGR1KXu7f388bjVhJQs1pAFMe4g3FU1Rj1A7XeBcBL9vRonaaiyfJQnF2d2CBnSUspFi",
  "key29": "2eYHtNm5nCp1GmPMxxEGdDuujPww15JndGySJxczCjPMWPP3N9bAsy81xnaxFEY46GcW65WeveRwDroPuWx7nBXP",
  "key30": "2MdhNw6UFmARc89DbemCFC4ChJpWSxbgAX6HEFYgKiZTXovqdwfeqPqKjDTKbbqZoVkP3v8mP9ePxHAT4Tg3xhiy",
  "key31": "4CUfzLZ6mKwbjmJFY5BsNoPdaqYhNmbi4Cb7D8pHwidBvn2d7qBvSopv1AGvTf4MXyeib41mMfDEPaijaYL74b2T",
  "key32": "5tgKD7XaPSVhNdXLXCCnN238F7EzCH1xBLFKh1v7YxwuX8PiS7Ji2kwZCWGwHbsVf6TZL2AeWa7F41eBrBycT99q",
  "key33": "3VamSVbBm3T1Z7iGMoi2dZvkJDM16yB6PCLnqM5yPHayA12viWjev2B8UXyyS6waNGrg3cMkmNyhUDwuhFyW3sjH",
  "key34": "2JX7LGmrNKPdVG8xHEcBzx1sTcgUDsCvmLASf4rcaVeM2ZxZYfu8XM6S1VyxFy5TgWNs55iL5TZFLGEgAwNXYEU2",
  "key35": "4AGZF5WPDLp7Wva6NTbZwszVe2iKs8KjWCMbhxfDDyBprJ7GfE2QKx3Fwb73DV7YVTHgBRqNKK3NDUsAfbtKcfpk",
  "key36": "CXyiZFBoX7rPtBYw4tQ8Jjyb5k2xoYmAsakxvmKodMEToW1fg75XjEUUAsK7qUeKfZgcQ5K9FjybyjkJ6YUGrH5",
  "key37": "4QmQYNL5k8hmiMM1Zpzb9YYYtz4n71kh7nMBvoRmfFHwUC2M89jJqZhAR6838yaiawENNbbHgENrhox2ck6dLQvD",
  "key38": "Li51V9KXY4nm2oWCesamzMu4QVCApmyHsrXsApMtQttttURB7yjdJdMyKe64MUAm2vF1F4patTk9X6SdwLgiW4m",
  "key39": "4TaUgzk9Egc9GbNuM3GQCtZEWG6VHcVhbPd4jgtpyZV8gjGoFfpnf8RWgQPjwxmyPLSyeDbgLkWRBPZ6LMruu9gR"
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
