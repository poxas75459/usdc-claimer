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
    "2Fss9znnovVV9pGDzbtqnsPgBHQ5tKD1Cmd85kAPuCQMKaCuckFp8NvAsfBDRjgQQE29eDLZ1DMPbMBptrfv9Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59BqTwp1NNYLFWc7L9PBPZTYjGUyfjg84Rg33k5wqyXqq7ide6DogawLQzk6aozA925zK4yLB13fM6eCdfVv3Cwp",
  "key1": "2DcHaJcF7jftLzEj8c1de6vEGrZ94f16bDKiwavk3Q2fvsGC1CG9ysXa9AkeqVKPQnwWwQ3Kb1vpsvFjTfyygsn9",
  "key2": "52TG4jvALAeceqkgEkcP2R6ErXT5izA6wJQqC7B9WPY5qJZL2ek6qzRShsnrMkHNjy4LME6dpoUQe8pP9sqCyc7L",
  "key3": "4Nx97EStaDG8eVp9qWa5LEypSJ4pMHEoNLDRsMTDcbeK4qm7MHiiSrKjvqryCjfcWFn7NNoPVq8698CBiuDy6VPZ",
  "key4": "2w43BpHhPW9Jk6AYQcfEsuqveABsi2ApVXmmAixbV75soRLYfpPsu2GmEMgTCGrAXpAGHTVynN3nuUvm1Sfaar6d",
  "key5": "RLdN4qGZBpSYBCChEncrcGrcxbcvXdyU5mu3HBZV9MQfGYGiu4SJd6eNKGyczQYr5Bkz6nadAS15nUZxX4ChfHd",
  "key6": "4gvTn6vJX9Vxz6Y9s3JZYzPgFiRsWjJtouLNtTRsqdTMCk86ggrZuRArgDoxgUXQiqvDqMQBA2Nt7x3WuHSkkd4m",
  "key7": "3naZGUZWjLWVuYC5eQcpUbY7tWBPZ7SP8FqZ6MyukTZeWZiY6Q56nj5GbdGstDV1LPeTEhiCc4XEfND1j41HWhqD",
  "key8": "2zVFRAtdaX8H7hcL2J2M8uaafNymPiYUbYuGMtruvJGjXHzZdyrXyYiPiN4gVv4SnJ35khNMocuq2sx2LQ7PPUqD",
  "key9": "2o6sz7awpaWSmtE5CygzGMygd53kDd7RAsgfMnAx3rHYUsPvu3gBinUTX9SLPxHzrsPpBT1nTDCqSXRjvr9CcwB5",
  "key10": "28827XASafqzJmPcx6TvpPkhzBuZ8Ksn44ART841xVf8cvTzjcA7HwneHpYYDPMz19Y4ghbMjN7bC8AdLiLPKhWq",
  "key11": "2CuWnTZ1KSiKYvoHYVwaw12ja2RHj6zZjd4JWsoHFC3Kyku1d2NELiBxu59SYgFuZnQDx8ezYycWa7ZcczLc5ZZE",
  "key12": "58MmFu2pR7SyGqQ2v7T5sBcZxLg9T66V2tYyVdNNuBrKJB1FF99TmhrDjc7tM5MnZNaVZBJarETLnoQjrEHt8f8S",
  "key13": "2gQ7RZ3musVhwXfmDT9uHkBjRCofinGYceBJHBrzdo7JKEAXqTAh5tkr9BwSbNnijXVwEUMFMc7u6dJ6aXeM1m51",
  "key14": "GE1xMBPtQpsgBAukXLkmB7RHrB7B3xJpJds3fANCG5oMMF6S3oy8DJq79Xxsp6L47ASP3XPpq77oHTxwLAX354Q",
  "key15": "3xbguoLUAAi4T8VYfBDdrKHUZSy1yFuNXiJutYZ1WemWW2iSznqrbtUFcpBL2B1CaFwLSoJRewiWfs5tqTTLJMoV",
  "key16": "4mWXXqrrR5N76V5NYjP46MjFKTQCf6yHnN8TZ9YroA2PmF7gLQKse3A1iUp9BnpQRLaCwbxwFeWsDK6wcANoSzvo",
  "key17": "4qRGte1WKd8X2JFCAjCS6oxTAUFixz2DBBCQBXFxxGTi7cLjxqtVemwYcPaGkmVQ6YKbJXste7R2nEPLGNiEXjMm",
  "key18": "5HwxDHpgEzqKUeLk8J7zKcGDU4W2HzxjkTvESsyExCoJiLysWdx7wnLPwThsrbCpJGmtYETHfrfvZReTCLSTTJgY",
  "key19": "2DbkrPZQk8iYCGGzpyEShMHAapa3eaAH7B5VPZB87xrUMoDGmw9413reiAf1uAZqwyHyZKDqY8Z7ESH3Q4WB5xNp",
  "key20": "3PEdS2apvXP8T1aVL9s1CFEWskD9VkA7ko7Yx8mFNPSBdfR3VtcFmi1KcE3mX5H52q1grAaNaA9wa7LKQ1LvPDBt",
  "key21": "5Q7gLrzYqxH8WRCLnv1ZaqhCoUR6jGypVvpi44dkQZ6R1Kf7wUAsRQdwxdeGf3YF4D6MYVnSxtLnWwVaxfCkhQv4",
  "key22": "2Juqvnhsvu2kmUQs6maYJqNi6oi6yYa6MQL6p4FVvmYkssDdppgPV72wZzdJK3b5xrXrdcwAirrTnhsXhrNj7Evf",
  "key23": "5JxPmnKeL7R4Qo6hufpSVdthVBQkEZg7B6TNZTpucpn5auPf9dJzFNL3RRihtmdmk1g8vZStXBBuBjsnWWJoGyTg",
  "key24": "4pmaMSgGTqdnkhFnMxP5xSiMeW5HmxQRmTp8HTkRF1kkdzvkYJETf3L4WwSABeUysMUap3heUKGZVPkwGDU9e3DW",
  "key25": "YQBtcsUkjUZhes4EmNwh6k4zH95wAxUujbuvPnUyFbzMTK4ERuu4HudSNMSuMiqx3nMqZirmPchDYiyGGfRcsDJ",
  "key26": "4Cyd1vBa5iFubBKPkJPUEosB8yAsDUWNR6p4YbYYXGp3sbaQfTPGzsuyng1XoMUK3sHeqtWFDrCHXDiC9RYgumrC",
  "key27": "55pqTEQzDxVabuLaazq5dYYE3fdCUyAAWVMzvJf1izvmCA26LN2jaFtR9GcHXUCF1ESF9u2U5pRv4Nm86msecjKm",
  "key28": "MiiHMEiMxgotH8RDPmPkQBcBrkZhFcPqoEmX15WRHyDBrdyvnXTGmzAcMhecuG1arqqLBY6jiJmbL9bDjWnpHoL",
  "key29": "36CmGVgThR8CeQRRnEtx6LoXuPhsDiSdW7HdD4Z6wYpNco8hzcdFBs9YH5TQoY1ssAhDQn13W75JNTgfaAV8N9h2",
  "key30": "3vsVP88ngjBLP8ufN5GWVU8H3G4a5XqDhBWEPpX23i6keysV3Zn8EaE36jEMcqGBGfUCywYG9Cj7gUw7nb6Cp3GQ",
  "key31": "3A8d7vpV3t5W8bXiWaBg3WVy3ThC6QmuUo5aTkXZry99fSj79YGpUuH1t12Y9vMAdwpwfN3jp7NBMidQQs73LtLq",
  "key32": "iUDRukvz125LL5RFRfdpCcrafSoyYH9pFd9nLv4VoUbwxQNpuhEfi6mXMzeAcv4h7KBMCMzr7rNMRBp14vCU3ux",
  "key33": "hDSq1CKwuZVs515JVuYGSQkiSuoKCNFX3roSMNKFCwEXSBgkUutQMc4dFbjGjQH5XoyRq7BYNxDBk1tQy7Rsh3w",
  "key34": "5naS1XPLgXQMWKvFgAcJ7UZ1FJuh5Z6UL8oPyKybNrDr9ohxWT7g1idGM52BpBZNnRBjWtoc7qzVq4jdXh9Qkb6p",
  "key35": "3XDYdUzhjTdDnAd4Ys8KBYAH6uAwzM8DgRZRdJJcqm1JHuDgoLChcrM7ZH7evft6bgn7wd221sexuCRWaKqzuLnY",
  "key36": "3KgmHgvZvyoqDtrN37rEaWUPqpYGK1QWTqA9QbV3PanZur6ViHxewodBSspWBdgXn3WymByxfvrfmR7MBQY8EukS",
  "key37": "2YgBHeyprE3tpEGB8Jy1fwwLzgmup8cc7TdEfZG7gZUWLrW9XsivGPJRAafSUk8KrTfRCxT2FgNT2DTy7VtN1aib",
  "key38": "tNvDHXWrncqKjDgjEjxhYs5RBkDMFbGzocykVV7fw4VNcVvgfpGohcSnZZARAFYLv6spuCQxEdUXoxBgCqCwzjA",
  "key39": "2kvK2vTdzXiqKpKmBFdsXhcehmkZgbmXRwV7TXAHmi2CCx9Sik2DgL9MjT8KAVdCj1Z1ehPWsXoCRy5aXKYQYUfb",
  "key40": "4bUHqu36EUXut4TKbusngFtEYtf4ZVfyTyvkFLFonhcr8QQ1UVFEf1Sxe2ENqywTjonUfqnpBdd1c7RJDjQ6xWNm",
  "key41": "4jW5PadJq78SMscXKjRjtcWHnCcDb2S3tjGzXExbeQr7EY8d2sA6D9RmyNxsqaYHzhMWrWFsuvHGXiuXZhzWMn8G",
  "key42": "4wi42zEyfApPoZXjsRY5cEt4XvtrKEst1AqnnxTEiAZWsrEzgsqsaj29QzqcNhpdipP6rVDYhDBTCJF7RZXXhwz3"
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
