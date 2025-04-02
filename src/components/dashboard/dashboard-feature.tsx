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
    "4YRjus9exga38EhxARTxU9uYAc87v1JxFXqmSb15JJWbxLcx3mF5FUsJnHbcUhoMkmP6HzWjMtpL3YvRRnBdf27R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnPMFGGCF9zpmKc2srDNkYtPxZhKeV1S6hDC557kiphN85EKH6PYjdDaQRyZENSyZmf745Ebx6FkppWsd3UeWnQ",
  "key1": "4Yt9TCtqftVR2p4gk6FnMRFoQoiJ5kriYV7vi7zDR3rU7kTS5nLVrkZDC9N7pMTKsQziidvpquUx3pV8eXDMpwcK",
  "key2": "3n1TbXBckGTnCQ6GpCo1UDJ7hUsAyaKUfqwDYgMWQEvEZCJRA1fm83Zrh19LsUjppQVKbSG6hLdQoKSMMmLVqiLN",
  "key3": "4aHJxEPMGKD46SiPwRBXoEBqYWNdkTGqQVSoaHcJRu6afrwcsw94yx2BzTGGpC7edTkX8ZN3VBjsPTWrfjraAuB",
  "key4": "4cbMJUVMkfYoRsLQAm4bDYFf79Qt3WR4nUhEtFMQTiebBrLy943fR3c8n4xQc5HoXuSrhiPHzK8tPXRgwWyR5Suo",
  "key5": "4kVbM6JTMKXioi91EFtDh3PtQV5abiDZzzHig8QyhMKjAe137psKC9fkspinV4mjQLHbfpCP5GoUbBPC3KTHdigo",
  "key6": "2wJD3bFsqniB3SkdiHW9GWegkVkjLKyc838zCt9bgHNfehGcmQp2HnkEB5uGqTEzj3RuEWPb6H63Y4yRSgdPF33B",
  "key7": "CuHNtk3at9n9fEiMn6jkcgjwyWMCYxN79s9UdxM4vc9dE31g2XPJaiDL1Uzm3mhXzFU8fTnVq3xQ3ChxFt5KBuE",
  "key8": "5NFnrqQHPq3YR2t4RaePuaYH8v7bTY5tyirxmRCAsRM7Y4S8634f6XDU3DWsHoyVDzZf5oS5yUsTvLKXzUM6ZR3V",
  "key9": "2GR4JE9toBpfcY11K7Acq9ttCJGpZAjnNqmqfdTAHUq1sMCdrJGo5RMYa9V4C7SSS3QhrWBzHxnfSsFoT6CLhKVs",
  "key10": "3vy51Zj8BqVW5GJbhxSjtRLq38yWJt3DYR5ZgWtyzggjYxTepXNyXfFroTRoYGkK74Wwv9YyqyK1WSfcED2cYQUp",
  "key11": "23NveS2rL9WK8f5WSJXBRK4j59Zot3r1L38u3jcLsH2dqLa8inrh5XyQQw6B9iLTH6Yhg55tqCSocejp7FjveXiG",
  "key12": "4TtmPEHwoyAQ1Wqryg24DSzAcRrV3pdQTeQ4psynTneb67wLeqn3LaK2rg69uphXDBhaDJu9H6crbw41Ejf3Ug5T",
  "key13": "3H6LstQDkr1xakXXTZty8d31ND4FoAxyhbcgSRS96TaKy8ja16dzAhaXd69KwZmy8NcSKPtkaJnV8U9tTJao6DzF",
  "key14": "dMyKwJZfHfVKu6NpX1Q3J3f1B3pPfXgU4kVPwiQJxxyaWM4hN39HSdY8HAmT3oAZuHyeUnfhDvyr2RZdMbMz4Qp",
  "key15": "jGixuEFZrowoVzj63R1UfwuxAESbDuXtw6ck8Rsft6tBoshyh5fuMfRZ218JD1nKuvgFfyHsbGjjHsyL1FNeSZt",
  "key16": "C94CNUMvUUHX5LLfbU7Qu26LqZ9ENiECf3FKtZ2KishAi1t3Wpu2wBwWvaZhofXJPJ8MSKsX52UthQLNvjx1gk4",
  "key17": "4wmrhMZhQMafPiCBX7RQLaagZFJBwi6fVAzFyvUooNGYuVt2iVxuxRXDECsAgJ6Eso43H9ZLAfDtgFJv5muagZkb",
  "key18": "25pAJJcTUucc1dSWY5vL22rKFujHVpuLMCcsND1FK5pSKRgbtZUSRKqzkhHVbbyLqbHrKFzGZJRittFJGDjeG5Qk",
  "key19": "41oogfWUyuuLH62TBkjXtDSZj7zUFtxTYhmvBhyVxhZJVYN8yLwBQ7G9YdpcqaC8XatyYZneuE2ULWWHRRAzoMsf",
  "key20": "ijmFKpsyCvLzdxmUrCxDFTuArg2KPEKndBeEAhW22yGDDRoTgV6KrGC9WpQFFWio9mPoLaxZiMiunbGSazXwEHL",
  "key21": "4zdKQpCT8xgyvKmU7ta4XPU17F5MdqzFS776r9kn3aZ6TS9GdKTvYX87ghdLchfQ9zdqSqvjbPKywE2KrKhzNCdG",
  "key22": "47kdWPKqD9Cwo8XwjaDQn2kvuSa92CjeBTZCDwDV8wPGTYBrutBjU1ZNQz5LLhH41MFtsDJeKQe1JzsXQ15AgLDD",
  "key23": "3WHwyFec31tTfDFq4GWb7EnPhrt5m5YWnfSksT6ozoRcy71d8NPNWzxWff58wFXcMMwzUoLhtcC1y7dYoLbTx12H",
  "key24": "4NQq6pMh9927BkXP8bQMQc6LXCUUDXXBCk7vvEgzpZT4pMdzaPQsc9f9eNpjsoZP1H51tECN1sXVgTXeNoPMHYCq",
  "key25": "LEtXVuR7DjtzhJALEN6iFj2kyZ13md8sZe8C5Kmumgm3bZieXBKtboAa4Rp4pazpKnAK5oBbeQKFs5DLL7T8SqT",
  "key26": "3E324JULy6fNuWTdbMQzt9QkydBk3wVSQHNjyb2niQAq7jtySjFBLPb9zKNLxRUtcFSaYDdzMexHET6W9FTnbKHi",
  "key27": "F9Fsmm7ywGExvDNxVv1NtkSyFcsV1pmvtD4vT1JD9aHDxqGFgJSMMeMtT2eXBzjT9VxtEARQxnfSHnnBzJCBNdS",
  "key28": "SJTJZU7Crru2WFTud9Erd6zvTCsvtVXTDrNEbvohhBeE2Wz7tHUAsUuui7gWiDsJZNhRgoWbjKFM48TmfDZFwez",
  "key29": "2GM9bhCtV4qDDkdLBwn3xN1MtBTdqMFmbvzdn6g5a1QPMRZvDtT3a6LA2XKmrDmjR8BMMyC2ySVw61iBaAsx8bAn",
  "key30": "62TpKkLFPEWZe7Qxio5tDLWCcYxZGdtWguAfvvT3aLPYoynKjRapqJaH9xEWnUwtgxJzTrfJs6dQ6Rx8sZhLfePA",
  "key31": "2YLgw3sJD7CmCRNtqxCiSBL9yBDZzYZTBVmTUhDg2wwKgK3SbLqDnoEtdfXCWQrNTuKih6WuAtkJXzTwYG2UerJH",
  "key32": "388Ki5kRt6ucBMgyEcEmiyV9CSGZW2W8VJyQbFPn3gXuaeUk6T2Ygtim5h6W9Wq1fyYF49EB4ms3arK8NB3JqYmf",
  "key33": "FBPUWkmTpREN7Jf7rYmSff1boKSbjdCDvDKRGn1mZd4xGEYa7PcmRu5HRq3TRi6bVE44kTztzkVF2CkJ93PhN1B",
  "key34": "56LoRHet8tRVnJ4gbsi3xu6iaPJhj6qs1bpVjRqeDVbdxAh4WVokceQEdcMou942kzRBi3igNQfigYiDYRt4BkVb",
  "key35": "3R3sZ5zqe9EyDbcFK2yJdJz7DUYmDw1BqB6iRpJM8iMizpt7Zs5veQbAj31MvcjkfZaeJNNL444t3jDrPcqgsfn8",
  "key36": "WA7h6pGg4DcjvYbuqiZjCa8rWVAcib5FS5DqRqqwau3ZxSNoadwVMDR1arZN2QsbvXhofHpqyKjqDxfUTd33ECm",
  "key37": "2jdYd2YqgaQvwyzXqJUG4yV9U8pBDn3ifv9WLmZczs4Hfv6gEr3swYPHujSMCm8xdRaiKtSgdSoPSB9GkBJFvSWD",
  "key38": "Ls28ttvbKzz5DBR21sqkbWEdhyVDbEdMRCB6ThfDjnqd5VHE7tjEoWaf2ZXRHjJyrEDmFtV6iX7BebjsXPA5pLA",
  "key39": "62vidk94z86gW19hjVgG3LD3ueP7S1Hh4sRqaLLq9SpQDGFcSLd3zgJStnxkSUZGYqYK2n4yJVwM6LD1JhfexQhj",
  "key40": "2Fu1wwu6HxE2i4bKFj447LiAT9FMxufRUxwTueTyzqNMSa6bsDJHsH7UznCGZhmoKdWvn6AqgDCvAnw824CLTKyh"
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
