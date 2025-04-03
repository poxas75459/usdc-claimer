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
    "3dt9GmC4WbxMPoqZhoHaokcyHJkXqrCBJtK7Vw2ytjt8rVrSfZ99QaZsJtRhSvi88j34maV1JUjFvyZncMvDeNrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvxRW9g8XtLryh93sAE7cEDFbL5EKhbwydHfg5RHDNS5VmuZojgQwoBSnjbpABuL9qJdKfs4w8uHfMDjEB1puKC",
  "key1": "5GvGnatjD3fPVnwyJZVSXZhPnhpzkCZKfhKy3LecZkTnXsrTQt4LuX32L7AFyxc6t5MAvxMQcTHAwmnU9njmL2mr",
  "key2": "4BBFDYox8q5sYk5dkdDitpyQrYcFDkrN9Wx1tQSD2NpaJbV9DnJmKxwm1EiwEeZadpcjR5L4AM1SirJYxxTLKhei",
  "key3": "45dz3xxooPB1iuTXhGSKTHdqxXGqVYQNym3VY614QxR5RmZW9kjU4sryaezkrvFcP19bQaKq91wF9V1gtw36zJbM",
  "key4": "51wqpjXhXPTa7vkLbKrjQHhT5Ras8U2ikfMXJ4JLSCKKQDbTwTjjdjzSxj8jSEVF9m7Jxum2mR59X8QYnsmy1hnQ",
  "key5": "pGaFCbSZkRhE7TxT4AHjXDynSZpgHW15Pu9xDHnE6ERk5ar7EzcpN7yzvn9b7L5vY4BMoLYhLJescThEPXWrxqa",
  "key6": "47MGzFwm8EbnNAG4GUoD3q9sZ1r9a8XPrsessTwPdciozhtogboPSP7ERevjtkt6gfQXQmgZEVz9Lohrme9pjYib",
  "key7": "3sZ2HdJJwJweAPGa3pR7vdRzY2y1638b7sapk5FQ1CGpXCXDRthrhSwerNW9xwzx373AmsaGA1zjE3afrX3zVMJt",
  "key8": "2GHH6AGiWknhnpVJnSye9NBhUR3xHs5kd3ZApZiLkgxbQo3cD1HzbRw4Ux71xLNVN11hGGwQ6xke2GFgEFewfUqT",
  "key9": "41HZYyWtEjb4bHtfkZuouaeeuc113ETm2yvsibxVwA8gZYd6pAwJDzDktmUp6SpugHhQWMAVwQt7WJBbLHAwwgXN",
  "key10": "4tRXpDNecfpynJEq97H8hMwJiR6Ye39oXDkDgytgE1CJLV8mBrZ6APCGng52QVxdUAMwAZ2PukvnMB745caDhgCW",
  "key11": "4PC3itaQ5p7bfDx8JGzxB9GBK7BWzEUPjG8tibhXUhM1uStKgoh6crMVN1nfiJSGJWwneW1yuVQLKYUkpq6ZyAFT",
  "key12": "4JXhocDAevGdapddSbP25UoNyAch8HKkuEH8aC9PRG74Q4hxi8tk1vVnzJZPEPjyc7HPfViF8JsBZrJaojMj2JpE",
  "key13": "SS2pUhVmHLHKou7fFEbxX8tpNccSZ93LDcYMCxuimDXYhBHm1FVvKWv3eM81hMHBPSnxogJH3eR7Z3RUMjMoxXf",
  "key14": "2ZduDzr47c9UnFyynmaGFoeuzM5MirTYNDYtJNqUXP6P2EHEpFkFHVE4kWrao23qnNof1ZG3tRkXQJnabRHRwdK",
  "key15": "3ud5qcvf9kB4ncb5yaBmzu8PMGBBms681JyXueFh2S6fbzXH7PYZ3VKFQQ1kKJzFKqbZ99Tvew1itnt81859GoXa",
  "key16": "3R7yRkQA45x8JZRA9V9iLp8N1MYhmYKPvLcoJDdC1Kgpz7MALMpds1Q1hZHfLe2SR4TuEDTjNVgU7YozC8kYKqVs",
  "key17": "pYaGHrd8U6QffrXPkSq1Uu9xVfcVp8AaexXcPF1iMm11WRiJ13rQPCVCt1xemkadBqzGnMMpa3uV1nnQyw7YSg2",
  "key18": "2DW756CziGPYhv9jKomGYjVTnZUfhM8scV1jCo1RGFA3TjmWKCqAhFLPSR6g34WryYNWHochFtRErmyPVXtoNxNL",
  "key19": "4FZr1gLiEC7A1hzbAYRkNEcjAdNMSoL2doDwFYfc6CyJiYeYmier2pLe8BQTK3s3xH3iH7kpcFFHUNdYzovWwYhy",
  "key20": "CYyyYSe5cLBiUdbDXJ2iPLxSaeMvaEAkNNaPWEBC8mKTMct46rrKcF11b99YL5YMZTZF4FhsTzVbzyFxngrrFfP",
  "key21": "4KPZZ1Qx4i8eYJhm2yd6ZVCjaoNmbHUuxD4DVXQKTfq6rYSonm3niKsMahHCdkQTjXHuqucZuoNGpLZWPPVNovFU",
  "key22": "64RCxzMNpewyuUmrqRQPrQzdFLaZnphWRFsc122XvhEReQRLW1X2QhzrRzKvFtqhfA32kxDDJj5YgWG1rLoBYrkm",
  "key23": "2qLJjkR9Vc8UYvmJpbi3yT1ciFWNzqYMbRKoVdVP29si4RPMKTr6CwZ2NgE5FLZxidaTYmCTPbNSaKjow76jtsxC",
  "key24": "7xY9F2nUm5FnkFmKc88DMQRzcDCykPFCK9rJWgTUJGmdgjJBPvLysMsomPvzZj2NRUF1wDaRxeLjWoeqFAZ2nRC",
  "key25": "2UJRo9xpHgFW38q5fGg1z21y5QZ7HXcqN8J1U4jyCQBuFtYCBXjoxhbLzvRA9cS1f1ETkUNBzfXixoyxHeugZLiX",
  "key26": "3BURAiPBSR8DvK5WVjrzn73zsjBusD3Q3nremd4o9vKAyy41Bo9fEXhAr6BYQ745Vs1WYFvRt4UPajbHWVYVwvnq",
  "key27": "CjpPiA9bhNrQ1RFwjbZnyRCSECK4tCYxC4iDWMRZimV61hkRDXSHHnTZoXUVKwBPHHLtcmjQt5kkrnkTdcRmRSR",
  "key28": "5bFsiBv5K9EeVCwLKjG9vNeVf3fng2VBS3S5RNiYRmTnqWi5N6QCpQCwfgD381Gt2goQY9oUcccccd4vP61ZbSMT",
  "key29": "32xb8pUD2W8haVccpaQTqNSWuvmfbg9s1eAZ7Jtk1wbw5z2vfbLb54g6xH92uC7P3c4xaCoTE8AhBSmTQXtqfMzd",
  "key30": "2hq1ZRbymkqFv2YUijLqZZyjEKzhPF6M3hkfSViGYrGywabFHQdtU8SMMi415X3SD3Xfbncb7gaE74okRh3YZPkh",
  "key31": "5EM9zGzaw7Frpo8z4aotYkw2aX6Ca6mBwS8ks2kp9MwkFDWyzXJPLwuedZRR3pdsGsNo1Ur9DLPWaLjQjnJrVgm6",
  "key32": "49v67qHTNWpkUQGsddgeSzoDejUCTr3sj5DuCaopviaxebj7Bof6KvybJAQN3adsoVtjvu3NUrjWiByUM9mEqcmc",
  "key33": "5b6krWR5b2qyFAThDNV4F2bmuGrwJVw7HZmNEWBp7jhtJ71pwd4irGCGdbeeLo3L4Tbnj8B3Wckv9mpYCQDueB7J",
  "key34": "3SiXsHZ1du1phqE6Pv2n4PRxm7NvfCiKpF48GndaGCtwA7j3Fnf18mtHEXezUbtwWu5uinKYuwC8bYTJ7DpyWzeJ",
  "key35": "3JcStNK6dmtdRaKaRG2W9WAbQ3JLeX4R9hybFMwJ76LdPeutYbaRCxTncvFByXikuMhE5aTztcZ1f28rSmQxDU6j",
  "key36": "4tNSxoH3ZMTK2tjdX116GyqsBpsb1FZMRWE1LdgoF3hMDWaWxespeTRie4jEM4JmLuiwvUZ6L5YuPopt7CTrdQ4H",
  "key37": "2dqUFEXuahGwLhacPVZwK8mTcghwo2BpRouP6G9tvFq7tf67krRPrfWeyuv3kqH6GLjBmZ9E1gAp2GBo4pGMBKgh",
  "key38": "42piRAydf2ctWQ1YAV2Ey2jYNqAvCgr6N3CADtqx57QhRVeqtuTAffi6ZRC3Xq9BdPu1dPowaPsNpxJ9BJFUsi2x",
  "key39": "2vasYyH26Gwf1mgmKNCsMz1WVqQWeR3FiXxB2gZ3Lm9fsybNtBN9o1m4qgYwdzeC2aCkS93YoAhzv6A7zVKf5vzW",
  "key40": "4ZabsYFQA2aGJR3yqkECbM9GWQ4yFL2ZQRRiw1qPyjgs8KT8qNL7tbfHWHMGswjkY8jzg4uejBqYqUJKR3bGmZ68"
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
