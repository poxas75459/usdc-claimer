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
    "55SrkemM8vXMShK7bSGdUsPkX6yr1R6gL4s7bNwU1tUwr9q6BTMyhRQFakDN6M8Vgf7TucpZ5Z4S5f6r7gFW1ToK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQaA1MiNbCoqQpyWJqR9KBTwCcPzbRozfFy6hJMDdRkRfPTpmDMzchd9eQZ8fD3rc3DvNYnqztc5yuqxyHjiFok",
  "key1": "2RYY6CzEmeuzfSYnpQeeb3S2cKdX9vMYJxyPoE3zZMnZHM9fd4dVmtWWFJ97FsnNwoYux8HQCx8zRCB2HNRQHNk3",
  "key2": "3GPHstEaadPN2MvZRrd9k3KHdFRYsXuDwuj1s2VoT1CVjGiM1KKbECsoYTqBPgBuUZfkZquDSKQq1Ksct4K6LDtK",
  "key3": "4vZadJvCXkisZeXHrenLHfcpjwxsCrKfeE38VjW8BRY5sqRAQZC8CLrc4ajA6iUdCcm9yx9kXUXnSw5RTKLFJAx1",
  "key4": "5PZUqdecT7MH4NJELZcLR6iso8i5Edyxdv1zCg4ZGL3KiqRHexfcDXtSxkwmWLfnhLTmuF1ns9hXFEcmg5Jqcaws",
  "key5": "5NNCFdTiKkAupC8oG6RSjUtStaxUdvWPgtWLJRCoxM2wzPMEPBu9J2ccybhgq4pbwymog6fTrFJrCc26tXL4Ag7y",
  "key6": "2rhQVE2DhCvufn6ASgg64g25Na4VxdLDbYi31Q1wyu7L4bgnTEaSgoPa3rNn4fAwiEmQoBS6A7pH8vV2SSVRFJvA",
  "key7": "33NJkSLbfueL2HnhRFMXVFERZGmGh74U6oDqEQz2dRzGkY9EJxRGijtzgig8ZCSMtojQt55h5RsTPA8yhVr6kif4",
  "key8": "3RRKY5k38rHjmTcvg3zPjk8zgHJ3T2kikvmXgukD2PSMkbgxUcBEKDhSpZrsR5UpLfrcwbq7xcM8vjRoXx1YC1TB",
  "key9": "3rqkCeF7PfZCGVqyvhpToeguq5U7sL2TdwyAjDQFFmRpYotAHssnpQviKAqUioA8wfkRAuvoPpbVPZz2GdZyat4N",
  "key10": "4tRW5SnhZpycHg4T1rbVsJ8QvgV895Hzsi79NaMZf6SzYvdLTPVp2GYCk31eKtxAPc33e1QKCZ1Wd9BTWHDZN532",
  "key11": "4LbanQWjdVFQxYEHJVvZJsHC1HtRcz2JPLv7JR97HSzNEP7X74BHHsLjNyF5XV4G5BHtwUXM9roFszgaowRNRfBn",
  "key12": "3AEUDCYruH8NB5ArYXmEoaZpKasWQnSgyp7dHNQdUtYhdQJbdz1cgmbyN6hmnquc9G3Jvk4LCSVuMVtRo9D9eqkh",
  "key13": "2r9XURTmfV7Rvhdwji37J6tou5TjeQNqsCtQzQXZ8fkbHT3f2sJJc3mQa9sDvhdVwiNqZ16h8fzimADX47VrGfQL",
  "key14": "5h5MHXXsUm93eE6Z5YhTV57jtkjGobq83PbchGg8eZjD7nuy8LVFmL7izrN2oYdE1y1yU71rtC6RuMfnzCribYkL",
  "key15": "5BFNEN7QMTFAYczsQ3afQo354GbaMA8R3kHyKbJGsAqnxuJfYbaPztHNCnEHVtyeN8udzGQWJ2hqUazubgB727WS",
  "key16": "2kgHYZQ5d2Mr8tscX63HGWnUowYDeh6LAY4EPN9fR5DonqPVcu1681rh9LmiGGsraCQveYW5KVjsvkMBGUbUNcDK",
  "key17": "tP2oKmhqfUrpj3t2CCQJM1GBTkZSQf73D7WMbXXQnNkYxK85w9PGr8BjW61eDQrrwVGqGRkDb4mJ5RtGbN8rhR3",
  "key18": "49iRhZRQGTm7yEbZJd812uWcmoVp8qaXYmnbR5DZ5C6udtMBpPGMufkCtxCUPw3L7fA2VXuymYfq8gGtJSeahUum",
  "key19": "WCcsSnmVvm1s4BMCzwmf5amApn5amRuFAWwHhKcuCv7XMTAJw2ppGuNv8CnaP52JSCYPkXDCsgTJbWMNXHXbu9t",
  "key20": "ySqcAiyMEzn7ksdLpm5HKtLikypBxXayJYAk71feyKeZSUu8Gco12wcSc1uzX3ZBWnVhkY4oovPhdJPRA4PEYkb",
  "key21": "5z3WkpSWZ9W5cVatbU8H9Ad5Rq1WDhx8ZZjskrBhdsQGzuiPuVwjEyCbPW4PEvocx9AjoL1k9bdACuZcy9MuuNgA",
  "key22": "2CynRW3JSEws3X5WeTUN5ZECybQXmhmENtq1obexMUgGcK9zwTdY2DVfrusdvdNVJQs6e4c1tF2tUShDjLH9YTeg",
  "key23": "okSU8SWwvW4yGKyLRqMR9D5BmU4uFPrtDmFVkyEu177UrLmXpFYQgLMXDYqpdejRvmuXbaQb4E5CENGXYQGVoyt",
  "key24": "59EKTVWQHw7xerJhgrVQTp3aPBEj2FrC1DPWSjcD7QLdSjHM6Y2qGUxXJSy1VgUyMKbLj3btdFYfbEKkUtoVRKmw",
  "key25": "7y7KcVKEfqLYGrKBneth3WV9snfJhX6RwyYv5ZxxftNtU1tEaQohZns4mjjciGz8GWH7mKspJpK2t4EJ9iVJyJa",
  "key26": "5Ntxm8dn1ayn1fPKJPu1s76hacXd5SX5W1NQY65VPHsZMeAz1FtFWTW8oEEfdv4sm2UFcMgykQR6pvzamR9Cz7XH",
  "key27": "88TynTPVs928oUqYk4EFuw5d5f7FPC32KmoDYb67wgj4L9W8mTrvky5hMU2Lsh6ZDKZResM5r9sdZ3dH6hbWRAr",
  "key28": "my6nVUxp1PkxiRDgFtpLuL6HFPZthm5HYCMPzxb8hiU8gfpjBAgXPnUyfkDqQkxRsWp1wYmhkC6DmeiwiCfxGvX",
  "key29": "61LYdVRsoncbRmZ9PimUtutuLh5eQVkLzHBj8t4ZDSZFXinqqArqPDVuhGLgVXhcLukMdG39WFnyGdx7WwAayaJ5",
  "key30": "5tr97EFHSobSQ1rAsJJCa6cAEfoXMvkb4KgNCE2uo1uyzidmyFJDFvDfegDvoUKRF28VBbW23bBzCj8DuhSvBoNp",
  "key31": "5U6GMjRG3W2vxAHxZDspvfyhyq2EhQsbkXBw1BexB3U1rQU7HGvoEwZAx7WAAZAQsMsRt4PLBgKDniC75Sdb6k8C",
  "key32": "2xPjtGD3xrnRjjBSuV8K2Zf7WQCUAuTD1bJUhcBJ5zKpuZwf6SnDFpUiJtdqhgnQmyt9ghMQsQWfZRhSzxybwy5M",
  "key33": "4uVnG3WYM1NKP6wohant5s2gf8i811aCBtosg8Vrs1gq9op11SBLYVJK1RPpBPvQc7L3tFo7JLkjHJ1pkvxWsRrH",
  "key34": "qf2K3zasobY7QPousce8gkwbFEEEQPYs8ZAyDor9mBcUELzfu6c2YbuM7mzRT7fmMqZCtPceeQTKWKgESug6Lrp",
  "key35": "2S2ZudChCXhfuujHKA4NMi5vMBEzsyXWbvX8VsFjwvDb2vrFR7iozj7Nf5opRJZMGV6ho14sZaUPfZ8JLU7JnoBJ",
  "key36": "scjmdRL1hyy1MeYmPm1rfgVh6kMm4xq9cQNKdTFBGRvxBB552aLK4P1fvMWhPSJvQo4ExYSfy3QbEf2vqsiWvhb",
  "key37": "gVp3yPKFkLkD1GzYh8oMZxGBSSp3VyvtF9KuRJ1zeEs7NorpR9UGhMn4ELufgyahXTMbHm1GSqLE8uBcBLYczS2",
  "key38": "2ZDgcu7uqxYvcVNmhqe2fnN6LrL5Pai2cmbER3FjUBiRR14iddW14zjpqKzSo4WpWi75eQoiy3spmkwDCxfta7HJ",
  "key39": "3hrEcB9B6Qc4FdmDaoVKx54macsJQoEswZtH7WB2WzZJdyphTnnnZZvTP1GGHXHc95FSGjMMTMXMexDkt5G1peSA",
  "key40": "4TiPc6ina2gKGKnVZNShXf6CM2FKTURD1RMtdLBmKVwphoXJVnxsx8MkrHufihXfoxsyg48uZeLYMnM5dFDhTeCL",
  "key41": "2kVJMqFsPomjGoYJjWZQcXwwCC98WqndCRMz2fKn54kDJK2gEm8AHjDGQKjmKWqLjt3om9rprFPWPmVYwqRNyQB8",
  "key42": "2SF65kfBUHmFfsCYuDbSwfKWdUci4Aw1PDdM32xTtNJYBK2njAyrV5VWQuJ2XAivbC2jpE7F8S2FejHCmyLTjnPS",
  "key43": "5ibgKZsmvCBxd97JH1CUScrqLQiyCKmGVhhxoRFAg1GFFWjB1pWJPXNk1quMAdboujhfvVQ4F5q8KoUUTJipUG13",
  "key44": "4KTFjQkLn9AV4Jx6GABmsY8tTjJArzytUJf2z2RobHgZ78ksuREBNDNxBmQqydVRJy1L2UdjY8QuLsTY5tGacHCe",
  "key45": "2dLoyQTHkGMrsy5KEWt2GiVbPpz7ig5gAb1yJN1LZ8vZrqxRsMW5sPjVbMhUwXpnoPVhB44Pqry14hP2iPkGmcxp",
  "key46": "4j4SK2BicLBncBZoQnbr1gV1H9c7BYNX6yFpJG5tUZZ8cwQb9ovwUEC1RhFyni7KiYLTYxjXAP45vprYtTA6V1Yz"
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
