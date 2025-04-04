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
    "3QvG77gzcEGDGUUY5yXzoy8THPfy4sB1eBuXVXjFtRzjf9kmiAjAxpdRyCk3DgCDiQQUtxB3hbRQQAkgi6X49UNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGj4uNq4LnmiHJL79w8mj35FqC19ee7j5C4xuDYKBqLiCmQY5NJ31zmwj1qmBYkavTbhSRPmCRBedSim7MzLERL",
  "key1": "3bVitTwqqq6vMizEX4vwnASKx6esSBwFjXBRmTPoFibu4UghqhAPRG2m9ZjyfFrCg2p7wByoqWaDBh8UxuT6EUsW",
  "key2": "2QaqCEkVyJJhho7eBHvXzKNqpoxQruEEd3SXppU6Y82rBsqGCMYV5ZF1vkKrNsKz3W9s2woBP8LoJNQwx5L1kSDr",
  "key3": "29QWzfFg56JbkmCqdsnMHdJuFAE5B4aAHTsYjhCMLEJAgMTNKGcHA2hM9eQCptz4pvDG9yZEgU9r6tzcEcm5Ne9h",
  "key4": "3JZbuVk5g5E4qjNEPAQbp8vgdXwBbA1Ld4KQPUnb7vhm8utyDqbwC6nT8JBZ7ns3gKT2u1auXfM8sFtnR3rzCLcv",
  "key5": "5HZN3L8Hq8qQuGn69pRhdZpuf4csr99aXDRsnfkzcfq5UQcJEk8NckPsmbpZb1XPo21f7jzFnWLBB3U5WPpBMFrp",
  "key6": "5kZJt8zV6QQvHtn6iHtdtmaAiJ1Sq4M9aHqpzMGdMDiWHdrKKzE78mJdE67MWvpf8tDsN9Yj4XyDa1efzLsE8Msg",
  "key7": "3VWY6PG8eRyMAhxvVu8UC78v9ETLeQoqRWXU4KubAEvvJ2bVHpyvQR5rVGxdeunWQuYhr6qyvPrtRMqu9fDkLuLD",
  "key8": "591uujEpXvs5Qda75neEuSz8pMHeS4TsPzcvcQrs1DduvPWhguKo5RvFdTw7GpMWsDxiFG91Sdb1RARLgFbMW3Q4",
  "key9": "5ZMkRjJuhrDKm1GNusB15cKPXsxj1PJzvCD8PjW3jkkeHa4HPBJ4QQWY11rhCJ3cZkGw8WBjqyoFoQqxPqWxaQXj",
  "key10": "5Bjrn8H1xEZGcqykzDqyBv2Gg48PMeq4L5jDDMs6XVaX4EQa7NBHwr6sKQbmxraD2NJ5mwJn3CCEXvBbAXZM7goK",
  "key11": "h3eV8c1q6pUpe5tYZdJ4DRYQmSxaXeZ1kqN9cRmZTuqfSNuhPd5qxAoV7Y9Ar1rWPpZVyzTf9QqjXAsi69mm17h",
  "key12": "SV1xYS4zGci66wYYe1g3FXV266zTG6Sp7jBaH5tDqr6kyFmckG1tXP2vNUWn5aAKH5BsNHFkD6z4qrzrS3AjewR",
  "key13": "4KabU33B57BdqCR3veZPsafV8w1c6iQ9bzH123YQCaiVThnDw1vb3BhNmufdorcwZh4R6we6iQ1hckdKJfCnYxT6",
  "key14": "YbKn1qWW2inKDp2CgWYU33cQMNS4mPBJe2LqENMpq1hTPXciXQ9UkeuZiwAyGfzzdakbyqfR8b3PFWwg8yW8juv",
  "key15": "36QCsMYaqN7ST2HHwFojv8dfvMwNmAqpaReCvgux8nshGMudJjBDve3HKjSh6xNyNfg5QusyNzjhUAjT91b4T93y",
  "key16": "w9x9vPXEDHpj15B5jDbrpUeCC5vhp1CGg4zx6FKqokG7W7vfKUyPFJf7dJr4GDyTBbiJgoFgFZ8K9k83ThkxAab",
  "key17": "3XnSA1mQidEo7Sm9cq4XBxKibY28QTgWHrkNArMbnSbp9jeuw1wskhR6sCXHB6mudpMi5XxW6ZcM6jif3yxRrUBW",
  "key18": "3pKmFPgbwxRxZ4chioLXp1bvMuJ7jTPC4GqR97W9zzHsxRAAE7yvFZEBhvbFQvy49KR94wnw2Q3tFPwSmJhnSu8a",
  "key19": "5EhPiQxcTm5CTrmXjTTptEPNhVNJ5SkidWd72vGi9wGZWDpX75ZxVpHrosSS7ofJiMNTsUjPHkgwhPGc5D5icwvJ",
  "key20": "2Fhrsu4eWRDjpcXpeNWzRpgojPnoahoXwg2yjDpAzVcWEWLmh1MzbVi4jUMiwWnSoA9jUBE37sTZ4vQo6SC2RhfM",
  "key21": "5bD6hmtTsTkLxMQDshgnu5mjvtwTXsFA1hqEpUuARpF3PNvoai7v8K3HzbePCE54ZQByqU6kcekx4ydWpuKcLn7a",
  "key22": "4tJbRzgjLHBSAQhrhoj9wZ3NghbY5HcXrVoPBxKxwcKawbPwdWYyYwoMV7KTdVJYPj34Y2a8GbrRkgct8zSWFJRr",
  "key23": "5upGqssj5YPceb6QckERH5iN8eAf2Zz4EDsQ5oBLYPApVBHoQxinH3iHjB5oN84eBANf8vhYzq7KT3AHWJo1LBPC",
  "key24": "5SpbcxteoVhM7Cet42Mz6aYSxmN8aFHihcrzH4euF4kHp6WnPtH2bokgeZq6QcYUW9M3APkRRLtg5JyZzMgd4Un8",
  "key25": "2PtQtxTBx4BrWiTc1wUGFGpguR23kxvwYNFqEWCybSz8qZVCASYYo6FLNwnDQEFL7X3vhswvWoLwgwawfL5m5pLZ",
  "key26": "3MnuYYtPUVVdaJhpFr77NgTv5goKbwmyEajjKj9Kh1AYE4Lmj99UjqQXNxmLwvrgiwYjtmf5jBzjb8vWmBycUppQ",
  "key27": "H1uax3XQzJhQZ1oZsspp7Pt695KbweUynDf9dgc8JJWPzfHEmB2t97Hpj2ZHouaNQA4Ygm7aWwwxnWJ9gMdoygy",
  "key28": "31KukxaFHvp2pjYmjB4yeCKFn87TS4wYC6xF2EF26qvXQjnL3ooKczVVWf6qzgBSb194EvB1brdGFUduskngnzBX",
  "key29": "32vtHcHEr2QknkGRhZ166JjsV9tm8hFVzQAhcXwAMCFXArUTHQCEJu7hkGaih6c6fbYHE7raemYetPaKvUw2gfAE",
  "key30": "5koqvksQaTPEfXAnS6Pq4fniwREKjKqeSsodYGQ7oemwhDUh324kTbqCkcexkTRNp2DR4mZoNgE4TnSbvcmefof5",
  "key31": "4zQZKpNuUVipzgeAB2Ci9WN6MnYfVU5gdTK5Qbm4PDsnXDSfaM6GGfYYfATbQbRyFbiMioqns2x1xA2bf34juU5p",
  "key32": "48xLh7toyksNuXCCetEAcAXwi6yndPTG2S8DBWK6HbFM5UEDfnN7JoxAcu2x2Xxpz2wNokxHFR7ztU44CHhYrsnn",
  "key33": "5GfFSxM2nabwuWfLd6VXxf1ibanrcbhvagvRjhGti7YLxayE4gH1hsyXfMva5SC9XNJ2PNUqoiu88BQeHDCYtGkJ",
  "key34": "5o3AqY9LaiMjiVrZd7rT4oWVZxWHjq5cvEtqitUnAcg5NFbtsTtBzRnxef4NjLgpt1vSZzB7r735bCKRp1VYWrwV",
  "key35": "2mcdWtowXbfr1Jsf9rmgKVhVRyTnY5AvDtrb7aTfBqYseixjEXPUbzRbtV84QUTMYQZBnVAkhZjtL1gp5q8msyAn",
  "key36": "4JB29p37VVGyR3KZJ6abKjhzjv272CgPCo3xWL5bFLLGa8vcJwGg3yS5656RT9v8sShHebVUub6iGRXdt38xsAYB",
  "key37": "FvwaC26YBv9CRRuzSb2RoXVJeoxe6vbhgauK7oCuGwTdLqvb3vPr3zDPuPPygC5RzP6ZpfKWzFPp9NrFkgcqWd2",
  "key38": "xfayXTFAh1WYQviWUomBhjEaHPTYv1EZDDhQiz7s43DvrvMbErjuo1rJgdu9wYLFWhwQczKye3qqGmhdT8sUkf5",
  "key39": "3mZJqbNqgtupSsN8pPdUKR45WFyUmGEwVkRksiqoBpZkAXZdQM3SKzcWQvYsPtamRy4kGXxD6cVxaVNCstd25R35",
  "key40": "4h3f9651UkEGrmLNobGDbePA1BDKJYhYetRWB518G8DHYpKDwdjavKXks5zp8YWaJ339DtEBRdokSGNBWKn898uz",
  "key41": "32BUYWJSXFwVnzqm5f9tqHvwbfA1REveQrNkGH47FtgDJ5wqSnnV7oqKJa2sfLFBeqUGy6ai49dHERdqJK31m5kf",
  "key42": "66BCruu1KYM31PtpR9TcPwyZqZ8GHcgAMFWZYUCD4kKRnfzUEcZWLceDSciFMQE5zA9VBoHzKKrET2s1awXJtjfr",
  "key43": "4MsMC5K8DAf9MGxMzwqoFQv8SKYNLM3Qjzr55d78jjZwdG6YjeUbgDcAsybHP8PMAw62J1Erb6VQThYt8S5s2gwG",
  "key44": "51h8F6Kw3DRGTrfgzhJ6yFHfBaFkVZZsSCYGNkAYj4y3Q8oeKJG55rj5fvf7VCVPi9Cy8iEHY2RGoiPYiAbfvF2A",
  "key45": "277yHZrPRYtMyeU72T9HrQ13NZfT27DbCz3pH5byE25C6qhakzHTYbH94DL8CPabxj8iDa8a4MNKpcxxDYRvacpY",
  "key46": "3eYs3hsee5PhJNHFsnc1wZLFAVrh4HjEpQ6iHZj39KaF7f6FxVjbbBur7LTmpidg5ZofpmUAHExFK7bNrwKSVS93",
  "key47": "4MzLwAXsDgepmCaQyCRY9mqC9K9frM5m8p8AELyfYJf2UrqmEaa9L8gaQT5ht7ALamEwBveKomT3NsLi7hxbcd8Y",
  "key48": "939gMCaz61FNU5BQWWcbiBfDWQhsTmt54h9yZ2qTf5MX19MwheZYjMR9hnojJQQB62fCeLi8dqNvgpLW1yr5HEm"
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
