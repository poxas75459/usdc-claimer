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
    "L54ACXytNfZZqH4k96LPrbdU3E5qxoJzvpgK4uxobehWVCgghFhLLe47W5LossBVJFKh47dNn8dSznXVK1SXaNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAv81p61tqNxZLsAgVQDGgmCpAcFRDvAiTHz41AaEtAoH71SbtyttyqVm4RHF7kDc7HjoiDHLFtV87jHpR5DirK",
  "key1": "V8hy3Tn7vV2zDZsr1JjDPc8yjmRATUAZ7Rr6kLjdGY2PTbKzrULcco9R21fqByyVe5QvcZBspCqYTD357fwWQXE",
  "key2": "4GYtQ2E7ftGaHcszHUxxKnyPBUeP63nZzccoYubBa4BPUJMV3DayKMhQAnpUpLA8ABQhWYbkpNAoTybi6ZMros8x",
  "key3": "2G1jCi5tLbyXZoAq8i8n6kbSGqCfJuq6nmJPzuBddfHnb8EmUV66yPdFBUJLhnVKqj5As62us8d5eo7kDuGzEjAQ",
  "key4": "45pMF6Paq7ciejqvb7Yqc9cYTKnmZrNUm42Auv9mxuSgBt7vBkoGm6me89mD9tSq3Rj8UtnVheVivHoaixhmuUpE",
  "key5": "5nwun2C6pjxDDQsDWrGJyZcCvH2nGkfqKoFRdLuhSHy5P7NktZzVcp4c7YCYXKU9LYZaBF8pgidJeNqStgF63ghM",
  "key6": "5WZ5Gmy5hFG2MnLnPPHpmYLsD7nDGjorjPvkX4AorjJ3whCyrBRp4V6CfEWEpzkuVmNrJwmztQh5VNovF6XuthdL",
  "key7": "31VN9M4bxW4PsgFjED94DePPLqitVBTWTAHhF3edKuQaEU5fW17rHgtKTpEPY83jmj3odvTsvXVfDUtzTuZtk2jo",
  "key8": "4JSBUDdav6GwhmiaAwcbsqgVrBmYQ9S8NvuyaB4Ba1R8Rf5i2gLfqGDbREKJedccVkFvP8umYcDvPjMAnrrgMVeP",
  "key9": "5Ksh6NPj57GWGL6gQVAq87zyPWhMmhwTLYkxSQJp2Nutg73X2Xbx33LdqXQEaaZSqwgtWU8HrhZxX2P2LWrRA9E9",
  "key10": "2xP7xjYeT7W8umLp7rPqoz4rNtPhX2WMnLBZmzDymBFCiKDhSdj3WXZee98VwHTTnYes4mtNTEWRV5PptLDF1oiW",
  "key11": "5XJ6FKtrroCMziZw9qXmdi3bCMmkjaHbKWfyLYLNZNcUFRj9q1wcKeHG1pzWXKD3fuCkUn8VdfR2jgF5egsJmmX2",
  "key12": "2UVbAkPoJdHaULcCxNoobkBes8FuYBWUd1RaKqofAYjjEpCH5tqiFnyKyjh89DGDwm8YJaF7XoGX8gNBBqUPGHCS",
  "key13": "3jsP17VuqtkdE9cS7DfuKqtgFesneiWc6DXyd4igS5DsCamsYSW6hgKXsFyR3NQgksFCr4Y7kUQxwa1t1YJE5zMD",
  "key14": "2pNeLdUViRNrwqXP5rQ64t5shi9GLjH18tiaU3BvFjNjMNc7La7tPzuC9txR8ebDcvR6Qi3JMDwXvpdCBXnS5dEB",
  "key15": "4jxvW88mzwp9DhjTTKb7ypV6fy2zKHSrbBm9vUQfSNUkk4j72VEvmX9sJqUTBGCrWKyZ4r33sstzTaz5zcVJQgo1",
  "key16": "2nMHknbJafsvfvBoitx3VU249NT8HV9yndpEiMPPSLTZumYUqehkgaospS9zjAGhrM6b4LRtMtpxgLrFfLnrKccc",
  "key17": "4yUHQWnrdSRRzQsH3oFmgD4qfCioUjKZJrks61NTzpoynPrySbrtVsvnuca1cUGUB1G4ooS8P3u3cZsfAFK3qBaf",
  "key18": "3Vmw9YAHvKqRzpvq8Pyeefq3RNYrSUPhcBG6CTANdCP2J9pShcDNeYcERCg39KphtCKdkJBp1Mppn7QZ8iFGyZBc",
  "key19": "5radsbj6tHe9Wh5E7sbV2UaDBD7TriijSfxVingZx2BQXAL2zsFAmYNwjE6F9s3Tvy99HR8TvKQRSmyVXjVZJmDU",
  "key20": "2kTNsBG1g1jNbxta7fQmEUEMZe241r4EDenwWL3KedBh9dYMkrMJzgfUAY3NKRQWMxuQV6CMdfUNRiENJru1PTQg",
  "key21": "23FDRTE6uw1qYPeqn4CSFphtMTTXA2SLmrLAMsdFzbBLJTT5coj5Cn85YtjqmVHYvPAvk462s8SEfgue3NvNw9UQ",
  "key22": "N4rLszUgMWukxxktNLfncJszbU6JqXYk6DzVn9B2GmvLQgfR1mMyQdzaE22fjmmuDm24YVo2v1iG9SsQGhZtBmS",
  "key23": "59q9DpA654k7VPbyJR61uADfdFCYb35b1XUcfphc6Jz4n5Y762VTqrg6k9gKxbZP4XACRzaD2jGVfdMeWFgz9uN3",
  "key24": "Bwi5YS2PwYAvXTiyonM8bL4VMjfGRS5Uhk946Q3bRjkrdW3ufqLCkRYYbgE1j6gkuAWbbxvcwurqiMN8SBe9XvM",
  "key25": "5aFhxiTjdoLDWtcV49oLPoFoSLqxjHEEh4d4FhNNrGSTG8VoxkKUUJZqnpwWwKkueeuKn7j3bnSWfU4dMfsX7PXm",
  "key26": "3CEpYv7rNXgWfvdEXYavXfoLCQCo7afFaHx1oSVSaHEGbUJPjnqTv6vrguHctYvt253KUgWq3CpVtmaJqpDfSwiG",
  "key27": "22Rbo3kL6D2gAhFRviGSPU7RvzxY7jkovTHBHViDRTLHs26bu59WyRFsYY4S7DM9xLU7T1K7B3NE2aoAn3qwi3hR",
  "key28": "3st37NYnPrcjkH2r7Enxr4cSQkChRLW3rsfxQH7HVRVJacy1cuuj7C2UzCfWytRcMHTqnegUYeMn3fV5BqA7ZwgY",
  "key29": "5GB8DY6iUrFtm6eGUWF4Z18p2zfK9crRMjEfnffrxgLCZKCjHZarzgitHqYBvHdGb2JoBtJrTYCd1EHtjSDsMu67",
  "key30": "44xcW2BFXk4ZmH3dDJ7tW57KTv2GozLt4KTmq386TbAdJ2pCLMRJfVcPj9JriCga25kdtEhoAkoZLozwi2DKGHGH",
  "key31": "2wzJXnxsDn76qGTbXXyXwbEScUtrFP3eenEnLiq9NtoG5D46UuYvtemmPXqPwq4cHYawc1H3kBYjg6juDkbNuvo1",
  "key32": "2ntush9xHfeadxtRYmSDEGSPNwf5MNccfjdzgcZvyuDaYCN2sM4tTkN99hVG3sHeYrTneEnt58BbAeKCieCRL6VD",
  "key33": "4t7eaG22XgfKP8T1zAHoZpvzHpBvdP9iGPkEaAkVHFE18krQ1GL3uG4Vik7Vo98AiT9dirt5dLTxkix3Ge9HhGyF",
  "key34": "mPR25wdrsPkuqqLqh27gmRZnFsBvekefgxexxVNzfQLtXTADmgRz3HLBZ45s346Ls8NnKpyusLjY99Ddd2J8BhU",
  "key35": "2EWQwMYTADMNh8ZeTubz4yBAbcEB1aty4z5v7k8ZZA5FNS9J2tH6zsLLLfE2RGBS5GWnLRvRSN1e8iJV3LMYMEW4",
  "key36": "VTcv8emF9kBGNq4Fu56DwgFeX9iZJznK2XovC25VhEzgJVupnAJzZGX1fDL63y8NScMxVRcDb1i2NFbiWxYu9Vz",
  "key37": "3EKun9SzeQakNCiBf2e5puxWPGv8qzYqXsYKGPoSRwNAvAH1EUzNe7qSkKWwBAPha6hotrv3yeAW1aF7EZZiNgWY",
  "key38": "2XkMzXVoQSAorkZEw7GKEjV4WdThDpWT26hJKbdpmWXB1qB4314JefdeMQqJhSLAeCH9v9T2w6RKKiBKHP4eyzNf",
  "key39": "3CxZrpiHQzF32bQjAkh5RX2VTKKYYHLHRkSMf1GSFkqppzckF1TLZ5EbuWiMPqmdvW84ecDhL7wR1aemU45Mbqf6",
  "key40": "48trmWLKrAzwSAMsT1yLB7tT3d5pV1zxpeEaz3rEA3Pq4MStRLykujXtneEMXTCsCaPXCcoSFkMaFwgiWRXLY51e"
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
