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
    "5EghL9CiXzcE3tZisYcb3gqqgLUHAwogF26pLB711L7rEfLv6FLL4nJ25zjCVaVMbaFEAmLoDwpiDMLupvFoXW3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AifnktncD4p4x6k1VJuKyzUVV8fGJFCuNaGt13bWT7g14Lkc5AYtjeHKxPws4GAnXKWNJUa58fmJLE9DdspVw8f",
  "key1": "47gvzxa6uG6TBzfznFBGLrC7YxSrnTgwyZQfNaiPGYjucrHMiRH1ZEcRxqgWuxJh4S9zJoePz6Q9PrSXVUSmynaz",
  "key2": "64sweDHE3sumHPjy1ELEJTCo3nvRUL8AAUpCGsRLYSnfg2qfEDoJicTRzQFPiijzGcf2koDLfPKN5Kt5TsAmFK8o",
  "key3": "5J6WFpGr8ENv7jaaKTPjqk7woCL7VUm4A6pU46WoCPEazBZpcXSRK6F7EkNbwMvrnJpKrQnC7zTMNKAAFTqSxxCe",
  "key4": "PcgnxMyQpPNcV1qxZrBquVbA2YrS6ztSK6cJVaTKw8hxoYLMuejiSR6ECuTW9DT9Q9ZGEBtpW23YT91N1AoX764",
  "key5": "moNWbKRkKXVXtxjich7RDu1uv3LbEwMoibumceQbGjDaBZo4zUwKVcWtejrqKHJsPMioaDnnJVQVxWNxuBasX1W",
  "key6": "59g4EDNMmmwt3XobPHpLoaAtt7EZrYGT7wnR4GsHvwU4uRLH6TzeVEXXK3km4iFuu4WsdKUkRCDRWJqDqZDj56Te",
  "key7": "fTUnqZ7FJoC6AV5WESv5wVQbA51cZ2nKAyC7NLDzezYy36jTGDXnbtnw8zyZ8D7EQERwFGgige6TTaRGEw8QuJA",
  "key8": "5AcYN8WnAbXe4vRPJ7ceYgnqBPdok15hEixuFXQkBUtJGbgMkU9uCajsfypXVraYu4FdFXiEMjxpDRzBPLKQRzGP",
  "key9": "2Dd4biWv8xSw6U89M96yJEFPsTnDxKVt927EpUveSm4qXZGf6jkAE28S8SDFtj3uemG7Mwixe2FqZ6VrqYRxytS2",
  "key10": "3r2rehYBvUifsgb6Jgpo1vZxYecEiybX2E2t1HU3da9PRusmfZcwUjp6ucB282VXKencxKiEdLsjKoUhSWBTDjCM",
  "key11": "563RJVdcNbcDKKGUSCJ1nqHgQxFbQnPsV9m7S2NWdQtAV41d3tUmvirZ6T81qdSyntuSDE3a3VeNtunVEqkYgaa",
  "key12": "2B4CHwyBaipfHRS58RWvn6SDX6GkFJC2xPDarkcuLwS7Luseztvi4WJ986f1JkGok4fnrasbWfZ9UkBiRGDCjqzd",
  "key13": "2U9JnADuC8jPrHba5ZzFCJ6bkZXzdUNKbjothiqETiKDP6J8KV6Hej5V3Po9f7wmT5EKbLypcxCjPtwwkJf61qxz",
  "key14": "MnzsDLQNVYTUAoXi1Ph8WU4XgqtjG15WYPyUXyPKPn7HgmprkhtkivTYEzWEMgCktAvD5iZwiw3rYaLEGwGwjfe",
  "key15": "57mQjxcAitA8fBE2cbmq16qHjfH1NSCDTYkZC5eupFcGmpKVX3wLCXDVTMn3DeK1F5Leeb87zi19jLqqJLBieg3u",
  "key16": "5QxjZwihLK7qsYVXvEoE4xcc64NEZXXvxYh5PAt4RmLfpFP57Piz8qEexDAfTUXzuWKedErsKq6dKYVyWC5p3uyL",
  "key17": "2vBFvUYzkLa36GDsXyTSCkBSBguLz4fTAgfoN27hW3hAzRUsF3Xa6n4f6qPpasuiaKaLbqfKHRRBt8PsGFsCqCi7",
  "key18": "2mEePTKw678yQUdNWjD6wXnYHHzy33zX37dRXTvj3vSUf2xzdHhKziD9gZexSfdioCkZZEd6ewX5HnaUdjz2Lc7R",
  "key19": "3aQ5sWAZxWCyf9QG4L8nVEpcNQ8PAZbmBH3Snpfuag5gTWQQRZ5WHk1VkiiDZJoJ6JDyNC5XpPt2usvRby7gPMyw",
  "key20": "643kTENPh7KSWyq6fiF13CyNnwHiGN7SXVJaSEpCkiCWcPQ3kzue1SC8ETy2hAJmrVHLXUFmyJKCRU2SV4K52mCy",
  "key21": "3HZxxueFJCcNHqYkK8uuDWv6YbLvkNTfXCtJF9AjsZYtcJZ6p2Vfcnrn9w7UzgUeC6s8FfWzWYshXvtJj5c8Mbfk",
  "key22": "3mZDKotKkZpNpo2wjLg5gg3oTwdFsSWcTArxM68kHSXU4mtfq9gzssRb6oWjTUn5KNTYEhRTHSUsGdJaAnRVXDQE",
  "key23": "4opbxcagn3oEdqEqEETuqziLC3DoJJqxDJmYgMRtJTkwVk36n38MvFyUS5vvCehcPtgrnuNRxGrUrzBxeFkoBoVR",
  "key24": "5xudMFdau9V1uvv92jDMUKGkQ6wzZCCc6Uu3tzQJXQLTSJRfSX7kDhqDRhsn1GDUmTtQK7KfVSYhcMBaFPuXngUT",
  "key25": "4RxuoSg2eRJUYY4GsKx4nVPTdzCjHKBaMjM3A15LpxMYuQJH6inEnzx8owQs9kEmRvnAy5ZMbtDrQjtcGjiwBEXj",
  "key26": "dswy9BwDkZ1dbJF3k9asFFFuDDVGvz5z4732YqmKqbT3kC9NwS8Sd4Mj9BSN5r535BuU6qZAbqoH4LvK4T18Pbd",
  "key27": "MCyYVAe4A7k65R9LtrkQRogq3iKA6kJ8REcMRkBacCDBuVEzit963YsASD8uX28JpgJEh62cQZeWpe5KSot9gkv",
  "key28": "3kGQxjNaS17BYc2RiGjjP2NYAoYf4ELH9yC9HPeEwBGGtFN3tJGnBz5usQBNX1BDtvm5QMrLcQes1qryAoY6y8R7",
  "key29": "fioh143MZB1HB4TS1fRBeh8Xc3NeEkdHQBmy1JDDsxnMZS5XxX2WxjP8jgXRwuZgHn4SscSaUkZKC5Je8ded2zs",
  "key30": "4TGoUxoSZVDqhvLh9T6YndAw5SR6B9CbLWLKSfTQVmfU3ipUG1Ks1oqEi8KA9XKkjDdcbKtg1913bj4cgD6hXiUG",
  "key31": "Fz5VE1P28FrtvYDtuZd8Sg1jkGzQaSv9ndGNLimHrgVcqHEhAv1wbnLumogyuH99e22tk7sTkSCPFixk51hqrmM",
  "key32": "2AmQz3BQhopL6w53rHsM67uMtjS7knKejR28s33tBpGVvZ2DrANjcu4SQFyuNsv9Bm1S1hpFjJ6DYbY8aDuGmNZp",
  "key33": "5zEcQoDetXVv4nL8gfBHU6CmHLHBiCsC8yVRKTgL8mhWcdAsCRcXaSoThXnF5TFTmztGeaVF7mHH37wPscLNPMGP",
  "key34": "4jasyguwg7cYBTaDCiKPBCkMoxwXQ5gBW5vBVcMFArwaRMLcrxNUHTQaDVuR5GBguh3Ca4QYJXRxLpyn6LQXuRv6",
  "key35": "4NGEpZBGLCaSYNg8dL8DfxeNE2PtCyCKgovQ5kyw54Cbd6DsnYVXaxUTcyfAiSELUweS99xAScGhMXEo1FSQaKVo",
  "key36": "fu92cssM4FXrSsr2zdgPCp8dokdiB2zGLULPUok8gwWuNt6pr6jYs7yjg1ANo6bVkr4AueTnemJGD1RvHEjbJWW",
  "key37": "56pC5N2jpU9tLN1PJxLKfuNzh9YGx1Bxhju8BV5cso1wgN2p3So5UW9CwTHVaS1vp2uptfLc2tA3xFXDnsqfrhLU",
  "key38": "5i4btRg5AigJ57kXUw3r3JK6jNCUtoRukUoGsvR8Yun5BwuJ9VoRE8be2q3sfGBpBp4JGnnGSB2o9ett7PLaMiiM",
  "key39": "3H855L1VzymvtbJ6g2fXmdngSqcA3h177VcPSe7ttdvQjvAyqnTojcVwQzstLEqZbgfEtR444uz4Sfg22uhaYxtZ",
  "key40": "kBRDUd13AWLTe8TUACPq4NsgVbXT3UZypadhiP8VfzGfNvEF1wY9vSrSdEAc5gzC2v5BNnvCmnEJ7SvL1MLctC3",
  "key41": "bZuPYY6FyU2uzdRVYp6fKUwxzr84VytbFKLxHA3uyuyGEVU5UV34mFJYZybg8NzJBtXeVUt6CuRRs8EDGqNoWtn",
  "key42": "C119CYTCpYo5KJYbhY7KavbUbmyNnzcFyQcy1s2vU9x6Gg2kksyf4QwvRrjvhmiAMNMgU2gkSKE5c13jPtVuHjc",
  "key43": "3q4t1y6YbNJQKm6VUf9w6xD2DjdNBbhPa1xy1PzLw3c6frpZZjHQnAfEnF2RNspjirhWUVu8gCDGK5bZZiswCYzq",
  "key44": "65TotEtnRJytRs3xvtzrLTNamMXfv1ffZVuqZEYizbdpQhwMfA4WdJU51cAFRMgaNKtG67hVLGefRz8G74PyahT7"
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
