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
    "23BxypBzizRTGRDAKGN6Ew4G1iRsRMAVuy3Hqv8FV9JFPympbjwzdR5ZcE8S1RBhsuc1ztgmM4zw5xFVfzyVCCwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2tfbsKXMc6Rjr7yppx7jfgTC4add1G8LC3EPofH18jZ1nqqsCt6eUvhc4fQAr3hfUrFJswNbqQELyJUo9Eu1Xz",
  "key1": "2592vx2yuwLWEMCEbX4YVwqSSzBEAnS6b5BzMN5kPCj45FQxUPYff1XAiATatuK5Cxr5RyADqhUEM538khhd8DTR",
  "key2": "3MrVQ2ZKkdh3Lo6KgiU9HCZDN3VhSnwSyXTE4C6pk3xLzU834NDuvMsveee2f1mqRf92JBhcTGTp5hryAkFcpXu8",
  "key3": "yo4tUCoziSF3aA2SwWteiQ2hfb3fa5p8Ka7HcjWU52JrMYXdhvD6NFQRn8NL3nrd4ZWTLq8Jab925WsS6QozMfW",
  "key4": "2aDSquX7EquKXrPCuLFJkKRyGomFaAgCwuU59n71Eq22YSq6h3PZWdMKNXUP6Q5F1pcpNxKWTfeiBNmSd8VV7tLF",
  "key5": "3e2MUb3MnATHaMqUzCyzSGnxxBM9HoKf2Ra2dR2vYrHiHyU9rSMCaYU1zZjAeArPyix7MsSbALX7GN23jyi8RvKJ",
  "key6": "4HaTCCwR6FsbZAx7jKja7msPUWMdc6LXaefBho2PavBUmLCUJ8TcHJBRNNyk2fhWGsEriMXToHJ4GR4nH3JvMdYa",
  "key7": "4WfAMfdNBcyBKCN7v5zuGbd22oDzDazJYma9dtrmegyJ3FPfcTpuT5sza1x4L1V4km6Ha7iYSSnyQAFPs9wnPtEm",
  "key8": "494pHzPsdWYGDFG9ncmXn3SXJs1giC6qofCqUeh6o3nXDw5B63JwgYSYR4S7kc6V4C45SsrHsJYYTSE9dvsgBYVe",
  "key9": "2Ama25p7WT9vAuV5Ao7aVu1SWggQ8vUrfPMEWFYVziDrzsVRRbU4bx4kqaU88CUySGRNsXtK4KstXPo5UdFC5bUD",
  "key10": "2JrBsoHxA4HANXP6ktnhEy8REZUVMSGya1dWpRrmJ1JuLH4kNT2hsTUbJZvPbTNiBBTDtu9RcGYP1J6uPj56Pa6p",
  "key11": "4pPKTRRq7pCWyDt7ZwvLPNXLqaSG3y6b8hvsgNKJCiTCanKMLkMVx4mz8NnAe22K6zhWhSV6baKodiQjk6Tstur1",
  "key12": "5ZG8gH5aD4wojKCXp1fLBaZskhJiCUs9Mz2cEU4egvHtjGq68TKBZ71K3ujMgfgzHsaeuPSbo2apYP85YqtthsE",
  "key13": "3EbuYpuN1sad7QmrGiiy6jDxVRApeARBpp62XjzdrMBemm3c4LVnNdHNf1n2vqtMPfNudyQsi6bcLyos4zTKb3vm",
  "key14": "4aszNC2G5qdMPBmtvmugtfkLnNu1HYpDSDEHKZBFGKB1wBueGZWuRruoh9KKLt37M8A9Zh9xHJnn1niJRrYMYDkF",
  "key15": "3hhDo2wtiMUKopNdLmMwPupyVLCzAo9psCLw9W5iM6H5MBd3tMJ2BE7JLbMEVDDcazPjdzqjZuRcaqPumdAjC4G7",
  "key16": "5K2FxnRaSVCqdhGtJXMZfJMUgCmxj3xnmAh9Pr52tvAT2ij5579yijie2PJNvNG9xQwKiY1F7mHENkR1D5DdzyAb",
  "key17": "63zvSkDmjA4vUZe9U2axx9bdpjNZe6wuuXid1jx3h5m2fj9MucGmui7btzWYSoqSu7KGoREZ1yznzcTdeFeTMdU",
  "key18": "7ESvPj6wncu9tShc7cm9mW1W7JcKuVz3HokX5xHvDFKCEuCutFTmh46CHQzyGNBJFKHB2kQW4cEvzT3mWst6krB",
  "key19": "3cF4xnHuzMAxQYoP1kNkiskKPZrEw3XRXGuXTocbt7zyDRhFvAPVjYNgFHpxHrAEKm4FgEFXM3Utb7XcWrQuig4B",
  "key20": "5aMT2V9CiCt7UJLTGu2wR4mhUWWK4oBpVFGGZbokUSwmwmy9Jhuw4ZU9fPPD6HHB62seJGDGPE78Ynvv23djJwuR",
  "key21": "65xoq2KJdzhwE2RfQA9gHoaqpEoopn9zErvQjyWUk23oLJG9kGeuwWAkuetXHfvf2HWkwDnRRXwau7XtcPRADwoe",
  "key22": "2SkB4BjtbVnx5XQ6vEoPekRMCwANC2XULKUVB59PHSAsigSUs77Y1NihjUbgtGu3JNG6L4NrQ35FnqjFeWeh2WCf",
  "key23": "5cxJMK6J6ermGKWekUDFLMjmMmYgD8sFEuFUfgAAgckccxaB6d8fZk2Ak8nQiMrTDEhEgGUw2zArCXpukGk2c2yL",
  "key24": "3888TzP6friWZttgz89Uai5KrTtRruDhkrDLechCUymYFV9Wvi6vx7VzvCEQiYRxtGWpFVLkEARxb9RfcGYZED1T",
  "key25": "5t24nUNw1TVsKkh7JpG3Le86Lrg4oTER54Wtwbpa2nTfuea7cVot99LwD8kfNQURjK8gQwgxaDexCsuVcygwbWVi",
  "key26": "5SB6cZ8YNzwdTsK1W6bmEozdzCpuL9fRk1Xz5DWirFPA8d9vD46PtZbCz75rPhUH8GjBWcwFHFXN7s86thCwWTDh",
  "key27": "5TBALWx6QSXid5wdeV3ygoYudVsPbczHaAFeRzg3qz75YPgBNBsqF6q1W7xndf2sXFKPVrZAz2j2RcdrU2T1C27f",
  "key28": "5onMLSrFAyNz6yaD9LVhkWDH8sZ6E7wmjyQyT1dUwmhHvZLEfYcimZpxCpsz68msJpuKhjVTJ5gd9uMef7ro3aeN",
  "key29": "aSUC3xtMwmvdgLzXTwcjBmgiasWLoutANsUDWJm7ihA47w5Rxzb1vqhQ2UJPfJW4nfxHABYbj36dkfDkxcuXvWQ",
  "key30": "39zTXeETUA2Gojw7MhgS2D1E9fFLNHG1xTQh2wE1iAyNxErwYrSpQbDvEAzWN2zjBPV2g7ePWN5mRfs1zZJShU1F",
  "key31": "3gY586v9M7txDnLshbfWFsw5mGxU5nrLisTZypWqRGHVGDWT5iTAU81i4A9asGkML3xwHLLcRVsaABNbGfqECRpa",
  "key32": "5U63mf4sk99zURgdQz79625z9ygZnx3LvbGSR4JQHT1Gs1rhnps8FhGt9XR6NmBRyNtj3xYXq6ndBG7cGJrLwvP6",
  "key33": "7uA9ojwsRsXoa3BnVpG3myqqvZ9CfVHFgcPZKLaLK68y9mJoNi5mmhEMdkUoAUst2n9RkdN9tynr9mPn2DBzHDY",
  "key34": "2bjsTW6uip5tYCfDHYNQW5gMDB219WzQta1E9rYCcHxnHfU8qLjV6pU1uaqeBjRkfeWysQojpMttsVyV2eAM6uVr",
  "key35": "5gPpb2JpmwNrkcWFhPEbf3Wev2QoMX2keq6uRABGwp6qVtea832EqG6WkzesC4gob7ACis5ZFaX7tabFvqBTVfoY",
  "key36": "5CxVFSCvbhj1Ro1P3HCbzhMNkGa2EkKuCSMEnrzNNVFg9xt9fFbMiXyqz2Zs4PHSTvwZrbdfXZNktsZkHtYjCWgn",
  "key37": "54BfYVEjpPQgPANeqFDum8chifRcXAc7CpuhZzy32VYa2QbD3q2Xjoc7YLC5gEMS9vdNK5f9qgAqbkgVMMUjCxeG"
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
