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
    "3W8rR93GirHCnDfX62cCDoDfiReEKXhcTiTHwga976pM6TYULyTKtKMR2tRgpC2LtjUUTZP5MeJKFMdHbZMWeExc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61z64qhN87y1nGSqVdsb3YaAQf3A966Rn4QikDsfEPFtThdoZkzWepngMhyArZ7JfBkSrrcDzHM1XJHTVSxD6xwE",
  "key1": "2LZZLEzQy3kzcWiWdfnDAPD4LaPfFGCPKm9tEH3kgaTWvtvELYNZEDhaV3DEquHBXgcRt5Y7E1jB9M8esYfXkkG9",
  "key2": "4UBioR7rXJRkTSKsasAJr57PGKb1jAb4pQQzid1bn2ppKGPc4135TrA6sN4Y7jKC71ZS2edWHAoS46RnngxE7e6N",
  "key3": "3bNeAT6YWLn4x39BRrGLzmuS53rycf5YHTA2LgjPaRxmdfHW9JC41m27vLQAFduGX4ckxEKGpJ9iboMi62a7V7rm",
  "key4": "2qJFzHefvGbs5BkvKbogUCCKdEv4o6pJAVtuB3rpF9XbkGx4DcM4mLQrxpJggL5D8hgyLuZQLdMos7BqC6zsqKBc",
  "key5": "57m6tKWiKn3HjRgpvyfKKsvFL2E5bywRWRJTLNUFXTDUUWJJkLHKSbuBYDn8DoAYHSPQA2FkSLCRADsvxstpEYGb",
  "key6": "2T49K7Uo29THKgP6a6WPAdQkdukfPA481hszW1j4JM4TgdhCF66kvLrogEgwsV6wufcwpauvZDsydyZHE6BmSXat",
  "key7": "2wU46xZecnYSxAEVktrWiuS3fJi21qsuHfbtZgHybsuiUffXWE6MkVi8BcNqhxnHGXKokVL9rE7v4AUKfYzHsPxc",
  "key8": "ia4W5iP1ou9McXQQRobfiSDngmMpTuUdm8VJYxNuC9KhSwVTdhtB6uvvrUmWVwKVoZi7YyhD3rnkZjkhvpnXPVm",
  "key9": "Bd35q9KQr2ELqF4ZoY63jm4EDHBSLhjkNhHXTwwHQaHLxQYVjGJuidWJFBLyvW4wSVqzdzkKhRAWQKnnxZuMxyG",
  "key10": "2i82wSwH63ZHEEvJ46xTeyHawuEvXHjJM1M3x5di3j2oy3iBXN8ysvNC6Jv237YT5WpSXqLDgigXGv92B38Pg76A",
  "key11": "4XxH9X1EnvwZvGNUUcjbnvpL2J8qjnQvhzfpoGoTBcYyEwbHQ6z4BYLEumxF5N7SLAKsAnof8gzNxr7rBCtWVUrE",
  "key12": "Bop8W2tzuKrEgNJp8xjJ1fgPSAMbvp7DWzVzsS2DeHnn7wco6Lv7FJT1YRRjqrHQNt1F1cShSWFdK3hAJGmFwsh",
  "key13": "5eViGfRmEuHp2mqz2x4GcoXmC1CU4kZHqYs5QNr7pYD7i8pPDxEXwxzBjczSjEZWSVvTqvwthqtM85h7VPUrFGdS",
  "key14": "5MUB7tEWTVrEVc3HyFUSd2YBMeLjFvAKZGJPwDeHe3VWVuQDnrz2LoZvSo3LWZDWoc4CG3PTMvRhST3DSrxZpqvx",
  "key15": "3HiiGufHi1Zcxn16xiTee8xr3Pbj7oreH9Q7j1CX4uN3xWeZEsCKBXcZzgcZTnKojGkyXe5Tx118vuekEJM5LYLF",
  "key16": "5ocLXkDWJ5rDD1Sr5NCn2SMkKWR1L3k1KPWsTbUeJmaTdAbFmviMvhx1VSHNaAtFsFYTGhdLNJ138YPspfuRUx7c",
  "key17": "1KLEAaoah2FUVQB9nRZ87B44RXbDGDhMGqVNwHqUrXhZRNTm2Heh9ACimf8koJwx1wxkutzdv3YcQnrEC3C2avC",
  "key18": "4a2N2HMQHgu93cKXAWVswrS3RZppgf9dRPjsNtqB4kwD4hKmnDdt69BeGSKrLnGNWCspwaUCKMAwKPtmSW1yeJvD",
  "key19": "4DCmVzhUmdqPG3HQnviXg1z5STyYX6jkF4PgYegvzdffHuU6SyHTFswoYH2HusPMxSfmBjqJaBtrEkycQMNZ7DBo",
  "key20": "4EMA1bHmTU6AshQLAtDDjCnZUxwnCuyLYG24iAi9Neb2aUW2qA2JXU6jxJ2WPobp8x1m8cJTHJRfz1LNjieChoUx",
  "key21": "mLj4ZyPqVz6kDkj2sT4ep48yYNWXko9Pqy1HKqbbaxEeqznTVmHhxDfSCf1rrDQYVfmwALiMB3cuqeuT8BWzaqS",
  "key22": "5iy2M3j8Bvxxqd2sWHhnyWmUurajAZpeVHTB8jJAciazabJUGsacfs5z7SJfZ7GQ9cy7pgLmDeUwh75aF1MQW9h2",
  "key23": "4QbQSt7ejwQCvmPu57X6NDME53ZifUbZWg8AaPcAhGMSfEis8dRx1dTngHSWvXc2SaNYsUr6fRkcxAMt6vyV92oR",
  "key24": "4SrYbyyh7cYY4ikEMVmxbqt2CifQDGJMN4UFHBYp3SuVjHG4AsXERU4ChmuGUKyQ2P5yd1jDAdrhfYrfsnCXx3Bk",
  "key25": "3JnLE7BSLDs31rLueAAT8pqx1hFdrZPbhhjBDcrmmp5NnryghSAj2dF3WaKVD34BKu85sDwvKT9iWYzXjoAMpAdG",
  "key26": "4MNH3PYD7ECJVTLea17iRZg46R9PfaMyGubLbanc8Ro3FnMEuckTNwEHvqvxz84S6hkKUqk2WMY6WmTvy2DvxPr2",
  "key27": "5XKQyCoSkN1eiD16oQy5Cm5Vab4Lqxc3GHkRo9z6X9kjJH77VMpmEeMTECfMVwqoDP7A7R6r7686JecoXqts5sAA",
  "key28": "4kcQ9PFp4P3FRaocL4ePKvcNoPRK8iCxczXowaGVkKeyd86Cihy5xhMxpR3CBMz5XcH3zBSRwCP4T2u1kLrGr7au",
  "key29": "Zb18TXpmfHHzpsZRjppR3gVMhLLRcjmrFLimr7YrtFSGJctKaQySFGBZZCAgHtfz1m1gfvg5Jtq8WtEnA4FhHUT",
  "key30": "44bToD6QLJjQWCh3GwqDUvLrLVWoCWyn2YYhygxqSJBBQ22v66HCBjLMXccL2hMQVogkQk3seL5gwVMa6KArZsiQ",
  "key31": "EW9WEqYWmvd6ftCKbnQqM1Ea3jaULp2P13wh1H45VoFbAwTVGicwKDy2Hiyk3MZEB11zQxwjsANbvvxMBqqizUH",
  "key32": "2TJBL24CPgRamnempwg4poaohdZqGiYvExzXiwEMzs95HLg9aNKHMz7r2BMRSxX6vVPrYT2R7VLtg867ivLw6uje",
  "key33": "2LFSru692afhGhChLxq7RvkVs25717BHayuiVmYCsd5Afn22Fof5mq6QyqHEBYkVzmgZLhH3Xcfn51Mk6fh8EQms",
  "key34": "5rP9hkQqBkAi3QHqQZ7vFiT72iWnodiDWgzoZbfhCJbCnLjL27kuYrwaPcDMvR3HCf7YWiu2f74MshiFVSDGv8Le",
  "key35": "dndpR8kUzxpSXqBdQap1D75bGzPTWf7AYo8uBvxCh6fU2qXBiuxVjoJHjJTn5NRFniDPbyb8k9YGz6iojPfyB53",
  "key36": "73P4r6ragFMbUTSihNc9o25SAVX5GLgio778jkQXTxGqdkFkKDHeW4J8pndSDS9yGmQsx5eC7awNNL8WbMeBEdy",
  "key37": "3EPFXj9NBAPxEXNCr7FwQG2UKjozdf8EVMfLmRjiTGdeuej1J7nFukDu4jc26ZkhTynVjvMZyY5vzzWRwHK7K6K8",
  "key38": "2vcccer7PVZ1pHoqtBLJtXn1bnVtBPyrL6x2oT6FkNU9MzzqUuHwGenqJ2BU7tbfL7du9JDW3JEFJDyF6SZh7T3T",
  "key39": "5oZVuiBAAyysrzi3Q6d7P2wZrJusJzAeMF7iSEja2wyDVonpJyws1gLyVXPtwkDdZS8EoPSMKUd7xm88fmpvUJp8",
  "key40": "sCy2r5o7ZtGWUuGaCptRVnbVaVMroj12HSUnMVPeBsNyNZcyny9Fn9jjQ5LjxGX4pmAer3K1yZG6AquxPLmJ7j5",
  "key41": "4hbJVq6DGDwvoVjeAhdPjizTpzQYG3koyBgs9aiNZNbGzHvi5Lsqb2DQ1iGvqZYMwWHo2LFd3oFLTB22vmVN8Vq1"
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
