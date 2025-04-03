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
    "3zo7dE2HSQsneiLTwbTRqbcgg5Zxo5pcPg7VbSicoc8cenp8iJ6c3LRnKMSUeYmjGMsk8SfwWPVSc77Wwnbksz1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KgsUZnuBWkTNSsfwdR9e3X84BuHZn6qHYySHX32tZFXDtTEqGDfNtpK5EMYjVpZ18WWn4q2fHgPtHqPK7Cvx3e",
  "key1": "2n76amqUsMhmNdULbjgCa64MyxQLwkv9HhGTNx99eGyaUES4CVSkantjeJAGFC1Lm6geeSmV9jf2ZRPD8nn7L62P",
  "key2": "3aWvYh3Ss37jYGEmrPRTNf4C6mY9JgoPtWGj3ae33t11oN5DEp6S4MvJCgZKqCHT5AKRawnotXk682bk6fQAmrVB",
  "key3": "3Gpm2MLtdWpuuWBCoDhadqcWv8g1C56itMU5GcQ6sc4bpSoENqj7sHwSj3hZvn6EEAyq6bh8yV4xdzAQBdmX1Zpf",
  "key4": "5vrTNNHi7EcoSsHeNJqfGzXaveQv8PfiiEEtkKs6PjyVukpnwz8qxmdU1sex5qq466TQ7K2S1fHJNfTub39tDmiK",
  "key5": "h7fDinC67v8GAGShgh9WifgtEnDM21nD9wYhSSTf6L7JAMs5TKfXV2T6NPPgacxRiMFR3YAtRX9rmg6J6d1NtRn",
  "key6": "3ZV74DbfmQjV2rXP1qBpvzCwEayPumcmRLPMVEGiNNyWcQqgBDPsfCdyR3v9YZLEuKtsrGmFf5GbN5xs9M7ypyGo",
  "key7": "6FzsJvPrd8quNrdzmjdwFNZyoQgPUSGyD8Wa4ehDrnpJaWNviAbPhUbkgJE1jbPbRdAPk857FHwLhZ5vQQ1AbPW",
  "key8": "663TEgDQbq81z9EuLKpqeQzdvqzDX4eTXdM3SrDJiayxX5ZHKkBFzVFcTHcUrZzZdKZ93r3rJYqSU61V1unras1K",
  "key9": "3PAzZqosH2Nr5TqcUCSpCNm2WZmH8bYmkaGCxyhYTNWEZeLV8d6Ano1TMP891ZqJEjh2GBXEsiKVASqUDusRDjco",
  "key10": "3pia6xeT5NABeR8YeCDhcNtthV8wgBccknMCiqpvEzL1KB71zFBxpw1J1NT8dBTmrUFyj26GbTL58yc3A23VG637",
  "key11": "5hDjuvUetToPJTJMdwq8eRaVT9ABPrh6jxcvSoUjUqzFdHp6gkiz4rpsTUQpi2Kw9m8AkPSdx1W99EBPCkTFwAqW",
  "key12": "3thuQci2hg1Y7U4PcEKuRZWrKLin6VkiGFEBECfj4VemGHns6U8jiPdZFXUXkAwwZxDLeJGmarSQgXp52R5CazGH",
  "key13": "4QKXXCHQXvDDXQi3fR5vYyRdMsvsHys5dZGdxAKfWzZy1jVeD6BW3cMqBYCUJb6qwW9Qy7pGF1DF5XdDssXMBqqo",
  "key14": "3KimExyb2XAqc8sEWWxLaTmZzyVbgu9MZzrYKk7gBwRePJzWGN2qnNf2q1wR9dVdxuYz28akddmuwEK8F42dX22C",
  "key15": "4QCpSHpsnkjPxP7WVkspp42LHDhsq9dft5oMUgYCWi44poANhXaobo9R7FFGn6RaSARjhn2LDWYoPmDnswHmzWbL",
  "key16": "5VJPET2W8JHAPgaM2eFj8b9FE85LYJzSvQyMnsPYHGXV3oRG6dXrrC7LHPJvS7Ds1fuDxqDeKKRVY9YH4GLzXNn3",
  "key17": "2rgaPsEicp2R9PpAotZ3uH7vuLLnTvBgFGjEfp7jdbPtpfc6rozzjFPchNDCHkxRFKJtJnVrVQEpQLoxo1os9MvX",
  "key18": "3XPGEmRe1Cr9G156sHRBDptKXrUYfnPGixeb3D15S5AM99KNbDrpAewd77bMbtMyK4joQ1nHiXEC6xhnvkSnDXej",
  "key19": "4N5iQPqvY8f9uXccmndb4qkWeibPukhF3DnKm3eZXJtd5BKLc8XriRha8cFzYi4cUC8wSfoMVLyrGfRVADikyMhB",
  "key20": "4aznLicLKXKwQZomogw9S9mKENBEsp7AdUk4qZnrAh5y2gBNFPFU8HK2vz2GBfZeTr7K7jvGqPk6ZWMJhV5hopTi",
  "key21": "3ckpxzZQoELYJwq5qsxZSJoPUCDTBj4VTBTa3W9ghewc3dkcSV2Qc7D6hopMhTca8SqxYM432uugub8mhch2gCRM",
  "key22": "3nkYSdyfGajM4upV4ja3XA1yoh2xjWRHuhQCwrxtNNDowzitqhFSE9gWsSV9bs2ezCNoQRC54reNBEcNT45BSBL9",
  "key23": "5bDzre5kfNS2PpB7tvo7coZwoc7NKnck5zdkiGAVWThGrVehpTCfMuEutSb7g5tvNpWhUrM8BM1qXkWyX6fg9cmb",
  "key24": "271AWt9mDoM4SMCkH1m2G9xjB8ksA3GAJAuxzkHML3BEAaoPvTMCR3YyHMHgPF2o8grVqGJJ7iz27JTggbdA4NYr",
  "key25": "kAZf9s5WrvJbQQWaAfLBwCmdcRNNys8NsFTw1VwrWji3QYsbMu85K7V6WExwEZ3DpUWmb8CjpxZwXEYzXRwqngC",
  "key26": "42PRZJB46QJeYxnL1rnmUztYiHz7bA2c4w62ppYiyRX5qeYSmESTH3cHbnCuQT11J54eDsU5upHZggBUGbhAS5tB",
  "key27": "Wondnp9uymUSD1Bs2k6X2rohKMYFTh3jg8kPMxPeW159rmdbPEBQDissXv1PzLj6Y5vv26raEJFm3dSVKpvqbDf",
  "key28": "2qe78j8boGeUrSvf6k9xMNQUQMHcfCmKgJqjx3V7gWYdbnq6skXtWGxSuP5hSd7pBNHd4D4onUaogEu38z4izpf3",
  "key29": "4KsfWGF4CcXv84XTV4Ugh9c1Vbzgpexfii3pLVSBSmjom5BnCHi5fDGzz62pCvcJLA32mdUAczkAEZbuYL8kSsjk",
  "key30": "4Tw9BzhyUX2Xnf3XPCvqbqVHo9ezb635zV5Skp5rshxXNDp36XqoTFws7R3zzJdiuGf5MoMG4GyhVFgWnQ5pghbG",
  "key31": "w7FJ4Jpb5ZAVeYj4oeoqWiXCZ3xaHVNaRRqwmQM2wRf4J1UMLGyCuy6hAyqjPJ9kyd8Z2sKfcEQowcPhUYRkqxF",
  "key32": "44JSAJTj1CaFjUeF45Ts5oAQM4De2x8R6YQGNb9dsqQvMvdwgYh4U7qTW3BjVYiqcnkTPB2kJdM4ynQXqJySsne9",
  "key33": "32Gg5Ukc3UsDR9uXfnhChnjpniaSduD8znyFRjfrbWs7msMQERTP9M9p12rjnJJ8yDUk7KPqygtCXK4pm7bij1fD",
  "key34": "4bYtdqvMjkh3QiDCCirtF7233wkR2LQAEREzyYTYjxAbNcSE5uC9EzgDfT5MgrHQ6N77hyC6FP6NH4tWvuaQa6Hn",
  "key35": "4xFmpm7A49K8hypQxJjPJpGcnwi1z5BTjyQS7LMekPXaGDKJs4iE89AvWTPrmRbj5tJ115Gid657UmggjB26M3c1",
  "key36": "2EfAKep5oeUZSYz6xvVP4GsFELHss8gbAS5verfWcR5AKnKsvnYLQxeppMzx7BBDENTjZZUFtiH8JQheNTjPYtGR",
  "key37": "4y8WUtLXzdvUBv7KUuD833dvbw2VxpxTvurMQ7yiJ68HV6FvLYXHCd9seR9jcFWMvSmKC5KPc6Qf93op6V5hiF6T",
  "key38": "5fojPUR9DoMbg2i5HusNmo5LXPJbFL5SvHAsinTNT8qTCht8DFKSBDT7ygBpCWqApQ9n5YwctaS1N6iDEBhBrDm",
  "key39": "4q3jvYEjM5xQY63wm4LcQWv8TQrkrr61CXu2t1HH1dE5LP6TWri7cJ2HN5eSxURDP6oC24G7nwWCxFvGMAaN422N",
  "key40": "3KFbwRo3gPwMVGNpn5JqusrkX2eMCZa43tWhW2AhwKT52jV9XqDGrHTEnyGu6DqcUiZERBYZ1UXYuRpRxkkMwWhR",
  "key41": "3Kj7WAHbxZUohT5ukBvoJpjzhxq3RHJA1pnpTDv7Uo8Ko6L1spRZbFcGYVdJp6bFAvXEf7Xgk7eNhxQcwerqSgvL",
  "key42": "5ELekN5mBTTG65UbJAUUmiVKWkw3B6J822Nw2GwEkc9iVJhcKznpypkqHopyat1ng86rb84KcNgZHm9zyotLUqT5",
  "key43": "37W2WU2rbYobNw9sTWpEmbXMopVh17BhuB26xhgTm2triTBfLkLsNViyKwJzQn9yXZvokmk78r8SFkUZJ2BG8WCZ",
  "key44": "5cdyxZhztMBA5JCmaR1FWx3PMygznX9eVvvTbiPGXcxjcUZ1Laeg6HwpK9smiq5ZV3WeJM7SBaoa8cEksuM7FkSv"
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
