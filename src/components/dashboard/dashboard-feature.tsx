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
    "37QtujjnSkTDBHnGwjibxFT1HnAz5qqMX1BZScB8buiy3qEhTYyNsCa4TkQGcqDz7b4o6JNNiU6x9vJhuPF1m9Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZiwYTrxZeMr6E8dhje4iPmJcYuPXpE45S3C3v8qN1y1a7uwJWuUmLsiq4BRLpurhyL6QuTxLCyXU9Fr6zNhfYDh",
  "key1": "52zg7Bf2Eiw2PHu2t1AZ2H4Tten6crhLDAp9Aw1E8bXDa14sWzXKHzNpDEiJK14nr3NAmGPMviZJLdHtrbGE13m2",
  "key2": "29A8QNwQ5bCXvhSoc8qCmvDdRjWUQNp7FctzH2vQV9CFbwBEx1cX4oBNPm1QhxGioEjzggVp3UHsxSNpT6djrZCp",
  "key3": "679aGjCUay4ZQuCHrtCHW5xaBYxUyzckMrxDH9gU8HZ2EYyUeUee2giLJxmSxh5RQ6tuoiqv23HZR5p9a6RsxEap",
  "key4": "3H43JuiuQCfGHDU4R7xtEnzhvPKEWBPVTbyq2bCUe3vdZbJeiQtd6mZbLSH4bGYTboeSavbokpyC69StqCLBub2W",
  "key5": "5Dd9P1mb39qHHBzdy2oy9k1xwoZYX1Mnsf9qhwvkiyLVSN1qAeLonq9htL4En4YcLeGH1a7whe3AvZWuepFnXCRf",
  "key6": "3ZYV4pHkXboPo33dGEKtN4jnixAyg8ga5mEL76tpsuRtus5L25P4HznKTQnzck8rRLACybyc1HS9TC2ED5Pk2Adb",
  "key7": "PLgAMkSEVfKcvhf2zkBLFDWqd9tMw9Sxk4zVFndsTrjCsfdozmvWuTgq5K1rSfx7v1vfzH3v5mvxo1ELfKQJHy7",
  "key8": "44mNaad34mtPRNa4KnJaRddGv4m3E2UtEncQNazWNLcDBTPsgpAucyHfSpxxrJAYUXtiEngzJiaQk5awU6HozU59",
  "key9": "5v6yTSu33yt4Uxgt3ToTzioy4Ton6MWjKJrBkVmGQ3Y6MeFqQQRym7CuYaYWCWMyZiY16gPhE71ncYPsncPbSmvM",
  "key10": "ZhHKqw4W4zatdPPg6qpPdif16hiT9o4gxtXimaCK8vh214RbDXhNMaPhuikSEamJ58UqaaanqfYmyCUCBieLV6Y",
  "key11": "3jgEUeieb4csN2aq7C71Qi2jKvwcS9uuR3kMwpnUqLnavhevDs2hh3inhYaxrmwSBpjZ1SM8nk7BTJsZXfhncFzj",
  "key12": "4c9PRAaHJjhMziG6JSRrZi2oA2naN65FBArZpY6bXKqoE1hzay44VkHBYrDcCKRyB11yjkqiUHJH73rFjiVSe4zt",
  "key13": "37Vq1RFxQS3Q3C8rxQfP2pc3DUPSpBLVRMjiqtLBvyLBj4j3ExKPLGF1BzizpcrgPr9ZDPcoGC2v1XKFgdvhKeBz",
  "key14": "utrCteYCJCtWCoP4Nux3vqcLmh8E796RH97FKju2mUVSixC7MHum7p3BdhrfKSCsDsP2kYXJt3Ko7NsRL66ygcS",
  "key15": "3Tb6fqgaPzKbZrvLK57p17BfHUhEckdA9f51uZeKkkXXREEw9g1rdzNB6GK5edZDkhVoqCBACS45Ytqzb3N4GxTx",
  "key16": "27vAD7sSmbGCGTtwPLPK44CUy64n1ufUXwj3sptG66xhtQjTJ46fUg8yRqeS4KJVDEy3h6cDe4qqHK7LZJJkchCs",
  "key17": "4cAunm9rQo8YG9jYydrqg1Vr6aePBEdX4mCutAxmRvRNkhH2FL9j225LULW5qACFRgtcuqGjnsgNiEs72q6QYCnZ",
  "key18": "5ryiArbGwAMgRKazvuaRigVRk6NJwQkNB2UKLHyzbHHaurM4Wf59AkNU6rGR5BSwwEcRnaJxZpBifBCX15aHykEg",
  "key19": "5h5xiKKekhCHbvRdFGaizTXkcEKfFrmRDybCd2g2hRtu9U3Xfva4rTozaUhscvTZsm2jRpbpCMiQQ3jLBbFkqfcS",
  "key20": "Vv8EHCRu2qn5HDoBTbJFA2gEK2uqRaRX2jVTB5zSRzWDwjRekcF9LEj6SmgS8M36XQacZZ2wCyQkfGWvCotJHdB",
  "key21": "3yKbFhpTwWwwx6fKcL89gG5TJUrHG2c7gNXP6qBdvS691Ff5i4362DoUKUBj1vXfcwpKQqF9ckaMP7Pu8Q748tNP",
  "key22": "5hm4nxuJHFqXKptCmwRMcAtAxzmoRaCCUiuZpRZtJVNPqAxdFh4qcoA5rDUh1whX7cNqdGvWKpcDE7EmvzRT3XNS",
  "key23": "5mWWPaYVptwi6NWUDipYuRbF9wqWwdb2rB6KyLb3x2Hn1xNtAemRQ8VcnNeNzZzZg5ydx3f52BaEs1Ym1Ub8BKFA",
  "key24": "2rneGWGJv3DyZZ9twjde6yHXuEU3XxLjCfstyrXfGqDUQwjQ5vKtxh9jZsTuWi8hTsyagAMxKpxDELRBpD6ynEmS",
  "key25": "2LchcgntP8fPvdeSkikEd3rD8WAeu5xXZD27Pb9QhDfiJY1eZEMxv93DjHKXfQFBWSvmpe8SwdgSdaYvtvYuN9Uk",
  "key26": "LG6az6hWsLSyWw67cnqJYMfZKSXy8UBPGS6gAhPUpVEoay3VEdCMx8mC1JSbqLYZ9QPeSLQqdZRpXxErF355uo6",
  "key27": "2EqMcrrC7qiGYVsig132B7RG8rYPT2KBicyQcPBB5bcKRViBzEuEigBEE5gpkV3hFGoNCU8EpnagWZimjsPfQCpw",
  "key28": "6jbiDMTPngbm95yfNPCXvAfp9dWs64LiKQ6sCW6yV6QQgvha6QZQJFuEq3EyHPpMZfMFAJGQGoSzs1W4UR7ThSM",
  "key29": "3RUbowujztSQRVkAyskPTYvCZRHsx8CGTJha8ZJY25wzhgwH6kpzieay69ekAyGXaLMcm7zNfpKAH1QfnBaqx95r",
  "key30": "2VUrE4mescLbNYJ8sXQ3Ad4R6xtUH8nFpbfsZyUfvh16bg9hWu4B2Z7qkWaupPn5985aGNPx8zzZMgyEwuMjL4cd",
  "key31": "BadwDkpAsNFE6eySRnUjVcSHAshsTdpN2PomPh8dF2BncHS2MnaLVw5JoCpfby4teYrYyvtXthAkkPdfbPCuWeP",
  "key32": "2hBgFS87dzVaf5SKA2yHirpnnDDCnEfvknyV5TWg13g8ob2irZdMUN4dugXdfdKBjEiTi2ASgD3e1mn1yk7GVnvb",
  "key33": "3Tygx4AdAwSG7MRtnNpdEEZacRW9CnMTJejfvw8oEW8zgbTCQX9kwnUj3efqnYdJM9gFLbrQmGDk5zSGYyZBBrB6",
  "key34": "WpyMu84nPn5ZqnRqjuu5BfjjGd9V21n2Dk8aQhFPHPApfdoFjDSFXWXr4sa884Tr2CdaXvt1b7F5WE7e7NVXMH1",
  "key35": "qNvLEoXCfgLmMnTCJ7CBf3MRSThJwcjkxn7pyzwS6xf1HpsQvsjkZHrLRUbkwuzHZnG4Hnbft3ZpU8cTX9vnyVG",
  "key36": "5WkGf7t6bdzZ1uHvFMSLoDdHQe3oHpS1biwLcKWU6jS3AaqYdXMuDavPusu7q4wxJUmdYqYXTMpoXe2ioJ9JfeBm"
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
