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
    "5dfJct2rVmDW8AwHDxmuWCh6DGNCk2vcCxTfsPaWqFAS8JahYHVFcxQi9X44iFPXWoBrN36VV8bNHVU2vnVNDGAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvVDYo18dF8xfBUvs4bEdiDiuHmYvR9zzKYJocQyQRm7VGzP1aXapazh9X85o9upxbLomrfZnuwkD36zGqiHM5h",
  "key1": "4cpg9vNxHjHwx9e2gbUg91hdNcVoPL16Vqir7WNJdVr72HfeeDZ81vyCKo8jom3u2tXEU8LCadKwMWZBHRS9hGsV",
  "key2": "36H2hWUwdBonYGGUhvKCKahoYA6HCBknSeZiZdG5LU4UrXQHbfSjwDcZRhgq6iEvC5iJB9nFsnjhxsLRLNjPTbPa",
  "key3": "2mTd1vgweUkjeaWZSzjcFPD6S37Ndio1Jrb8kEoNAossRSw9v4BNXfFLWTCfpZaykAT7WWXqvfdj9CvhZ1KJ1JLR",
  "key4": "2EYwNnd9aUsjLGiJ9ZzDia5iqV33S3S5BQ7qrwKfM9qz6u2w1q1v6jM3H4eCzEVFpKbnq9vstpLtydmEcsn6xVnA",
  "key5": "7c3icx5gfg23f8yt6nR2RJHYY5mCw3cLpVZuDygeiVbUnJYvwcgPgVMGhb3NHMVfXaEPnCKoNibE5iDeXLQ9kE2",
  "key6": "DqHsBZrPrezq3HnF4A5FDv8SkoETtXKSHoYxDkxvZxqeiZsfgQcniPz3AkeSZY6JRtoYDMtwbGQuijCeFysr9nR",
  "key7": "2rWGgiUYgp4CNMkkb5R8ZWYGd8X2g3a5UfoqZS6rRmdEgkuArUwh6quHDgNcJRXJVfxvdvMFHZV8kEa8kfH5ti57",
  "key8": "35h7N9wWmRa7366nRN7DWsjuEnsX4yT5sdaDEj9P3LLw5rVpp4Tak1ToJTxNs88j2d26wpAVTdpz4iTR1zcZ7Vax",
  "key9": "62VcBHBSeSeCwMDQL8pChTa9SnRsDQRaZRXHc5BUfjFf568dzFYXgd7hEo1BSPFqqdsZzKJHzK3EafiTzAiKdkzd",
  "key10": "3t83PfusVFmdYX4qpopJ8bMqjyiF2AQzN8gXvjD4XPookwwtS776ZrPDKaqzkxp32ATsoVz9Lqpe2KPqS4sQCTFK",
  "key11": "5qcR23DQKeEyLa1ELpu7oCQZwKKCeNQS3sbttZiJoYDpCkU5B1tfxkM6iPggZ5stVv7om4dftXQuwUAqrBiG99PQ",
  "key12": "22rda8TedB3jnzzwhscKgvHihMRAQPWagxpkwcFcsjv6BdbaJy7yQzcDT8yF2z6Rn6utJYMyCEukhw8SHXEY8xQc",
  "key13": "51htUftLm6PVq2vbUwjXBGiMjxV57Fb1uVATdzS2Ntn8mBrBjTjrDHTv7qGdKGQzKoM8HztthMazyF8rN7Te63kg",
  "key14": "2PQbSMx6NLUycytWtVuCpcVs4z4xoEgj3BbuaceGydbBNd8hcj3Gzp5vCR2qtZcAm1746ySKd3i7trjLuwiBGL8a",
  "key15": "uMmcYt1i7fNPHD9wyQwZ3B913NmTsU7UPMnJ2DESzR526jS2rbnWHjbzUn1XuaHJftDCGu8accGCKiWWPq78oNx",
  "key16": "2aXc3UmDefHeACmAXxkHZEfpG2s8LGQWZLo4UpT4KdAMjKx8af5QYG6jcRStttggN9MtzJUwurz49DhbAH6VnqEH",
  "key17": "3qEuLqPWbH1cSuSZgW71s7kykQw7AhFg2R6T1fpeSae2dqPjUB6FP39uBqJQYY8BTv8WJz3CspHgz4GV94sSRuER",
  "key18": "4pQMKiShs592U7cnZuqr1xWmJtpmr93bV8JTBFysVisBkMGQqdathEQQMHWm1pBHPBfZvTaUu8TkZZUeJRD3M8A2",
  "key19": "63vVhdadefeGE6bBKGQh9bBK6whWNxvxX7uc9yCJCXPcbgx48Cs8Hvj6Ynz1uvDqFGDDGQHJM3sUrKuFAYheVek9",
  "key20": "ZX3K953N1KYatPBg42vGg86ks9F4UjRvbiQrCeNSfQFvU3XEZMAHCYhr68KLUp1C4wCEMWEzByrG1xqifepRqif",
  "key21": "39x4AmQcMhXuSmHciVA97ZmmVLhtFtrYvDyQ9K9D2ZY2uZjwdg3KvfWFzi9nBjbom4BRNEFfaq2dV9V7vedbQMHF",
  "key22": "5Z6hoUUa3jEKS4gH1Dv75aB9vVmAWeDcxTgm7fAWy4enHoRpsuRCU9C7e4tH27TEBLekqiPJvBPQH2o1qM7qDpbA",
  "key23": "iLxHuaJWPxXDr4zGQYu6CXESZNzrGTtZJUCdN7P21fZwEaEBm73L6T757xDAnPQ6Ke3L5rv4ppJbRkDv7QwkshX",
  "key24": "5Dg4oaa1aSWefJz8jWGkGqqYELpUZ3pK2mzTs28aW1pGM4yMXy4Ztg9Z3LCxmdBiD5ehAKJjTin71G5w4LWyhJzC",
  "key25": "3pLfHSthzumK4uDrFrLJVJLuQCBPVsZ6wPDSULLNtc4iaDJMVCPjjyiMqSzhaJePf5CmvToM2FC5p5sLvisus9iG",
  "key26": "5j3A4Zsx8tTNFhMXZGco5t98tsonqU7C4ohw9vgvEsgyPty7ehMQzke5r5hLpecpb5xic9q3acy6yeGkSYCheLiD",
  "key27": "E7hFeRBPd4BwLg9dr81Sdazbom8i4S4i1kWePLfmEGddg5NLwLvJQ8ubpbdCo6d15G3gQSMGEq4AgZ2bBLeTrRC",
  "key28": "T6QnUoT2hYURn5KDhtfskYJstQEmBTar7SPrWcFCb8rbZV7cF1Bqt4Y1JhcyQ2zKAVES4T4GWFrvAj26TVnjXhh",
  "key29": "2iAAZiECLSzN3UBnNYce22ARCXf8X5cdhyRG1kmX6b1Q2CVwxoxU6uJFsuo9EoMaDCiF9krJy7Gfg4ar2Qc8856q",
  "key30": "5RJcXiHLkoXpvrGmh9rNT2MHj3W5TKjDWBBtpSZZ5oQaZZZzXKGoxmKJNr6wvzRxxTxgArX6KABWsKTr3dvvXeBf",
  "key31": "52QqNUYLuMooB3R4cdD2rxhEbszTY5tBqNXyqe7YKR855RbRMCeCCUwvJHs348sYzMt4smVQtFLPJFc3yNTSvpZf",
  "key32": "5pgeVFHRWVkbU2hx46NfcCNTUGEDZghQWJ9PxUAYT1mScqWENQW2ofpQ2E2N3fKLa4rJqWcrtXU9nwEpTFyySiSd",
  "key33": "2Qrn5UTQydgqdvudGHsGUpK1yBS96NFZePTxcWkAxtKJCSshDu8ki65KXUuBLYPpAFsqn2jcru7XSxpLBXrponuj",
  "key34": "2suhtE9nswkTAU62dPUqHE9hyySqbUsgVKH6rLVeA4SuQtVQTrV3ni1hAi5mQKivW2ppcgsR8u6sNuLb7wKeZZ5E",
  "key35": "2diKMYXJ2Es8Y3HDcCjBA27SFUxwsWzsyiSYH99fT6KXdfHRsi2ao44Lq81tQNUYUCbSJRkiWHXc9hRmAsNprJYc",
  "key36": "2Z7vJSotWkWYZRvifSBk1HGibmrEoaEmunBoeh9ejkWK65DN9BJLPCnJ4jTjQL1HAqFtKY4YQxkMcCENi5r9Czsu",
  "key37": "3dedFyh3zwG3QF4xPWcsd16B2WocMaM1D16wruN79KCEGj8RDji4DeepogK34Ub4Tedcy62y54dnUzFL1ZRL88HQ",
  "key38": "45g6cvDz1uFTvXzqdsgDPtk676q3vPXfvdDAWHedovaHGn1ZPPaDDG8xR8zExFRJMgvWPJD77qB9byn1XjJpmnga"
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
