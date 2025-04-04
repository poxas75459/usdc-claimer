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
    "5iSC1hg2x7swxopRfVLeTcu2JPbFDhWyPgnm8kSASBhgrSKa3ACokEAL3siwE5fUFCDVr2U7UhU114MRf4SvJohz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fX7TcGreuAbrt8GicTCoMw2ihJ1tm9DrjW8ueXvzHavMAPvKUuQ2dRNQ541Z97cEt1gXAqNQQvw1LA8wNnpXoNk",
  "key1": "4aWtwkYWYptG746a1RdF2kDGq5UTzC6MT6WRBiBTvd7Ao5BRbffEU8PhfBDQhm8frEkCXy61FtEzvDm3tLjxK6z1",
  "key2": "51wqnGdApTyX1rktHFqLSCyVTmucK5yVgyzFME5bspLjCKoyEWEp3TCFB8EeArWK3NCGodHxKvpdXpRmJ8k39BE8",
  "key3": "5Wnfh3hXnj67a8T46fNyqd9W4t1LNxLbFpqU2eqbJxNXYC87eP5K1dsbJyjph6kFo7c82hqks68XY1FKtrwjdPPC",
  "key4": "44pukob7yrZ3Kj6mY6kzfvf9NatFk2UXKjtxCe7kT9YisJzRPqjxg7UdJabX3HKr3iuKYPM2GTbjaShqDiWA6qjb",
  "key5": "5u21WT1YKnSEbfg2yRwFjdALHDX7BV2oTyS7h7rU9FALqGsQXAZAJZR2ZUSnCqrf36J1jW42S9EVUiAvmief2f8e",
  "key6": "3JUgvZZuPeaeN8iQFkY2ghEBkBtmJohbgojjv1ovGByvHPwTkZVS5eHtsTtNPxNXNnmM5TE3yjwesGBNDKK5cEbK",
  "key7": "LikNJwtTThAvhYR26Frg2iYvzDbZhwN7dKKM8KRZx8m61owUE4XczUC8xPAtMW7WHCVWnT93pF3rT9bkcgpT7R4",
  "key8": "sDN4zgcMgvfQunAmd8e5Rfnf8ENUtfstwcFXp8gRnAkm3S8XD4ShbrYXmYSuhcny32Bgn9KnQaG8LFADcGXEPAD",
  "key9": "21nr9gVnvVmAd3eoZGfSpVoa94tVMKNQyiiynzhYq5a2vtRH9Qp1Fdz5QKRGnK6J9DGqZm1a14R66RZ9jM1owmPJ",
  "key10": "3K99ZL574rokLEdZgEbnp8uajtifnVWh6VmK6x5KJdyWzSds8qHwWujVB5LsETNzAVdhTDYeiSkQBW745XvG7412",
  "key11": "V8LizRUzYXLgMJBW6tWo49P8h9X7zKXqGNHqs54CF5DL8kN65yAgBwT7w81HUavXN1iArwuF7wYHe7UypntypCR",
  "key12": "3z3NwmnyA7Lto8VphUTzqZZ3Fm76WKhPyfYmemY92pvsr8Rg5Qq5u5ReUXMoW1uTgRaAFVaaujT3SYkVVYVmSnCt",
  "key13": "5QihKaW9EvQFyCZa4bsU14t8SHe1VXwDEi9WQbReQuEbsVRdKjGrXDceB1fYxjcjeeGVMRK6ZW652WG2b6MdAzL7",
  "key14": "9Y3XNEwcSeCpyPxKcxGXA9Czpk1Xv3nU5bV7SXo6aQ869Lshoit5sQuPAUBw8WvHM79yjTf7LuL5iGc4FWq3hkL",
  "key15": "54wm1nEqwCGvBytxXbQZQdzuqYcrY5dMmjd56Hw4zF91E3EraZj5NqhjemBdsDtWiGq9MnN7AB9ZNyz9brHikEiX",
  "key16": "635CAJxefsuV6tLCBfgSpQbMQ2zJJnebFiE5UZzLSBNo4gs6B96HFvSbTbgiixRxmmo6ZmBMaGWsr3oTrAHf7FKj",
  "key17": "2pPRS7CA2b5Ker5nQR59hv77hVjJSHg9dnHFTN8pisTRqbRCRDT2Hn17HVRbXVv3XLc84RKUGVPbYxJqzX1J66yg",
  "key18": "2xfANSGQDYFFURmnaxaGnJq6FCZFcfE3Ad5SR2FMZ2q79kbgMrUxYs6WiLodkmdtxjAhW1CQj1yeBVzfn7ppQLhZ",
  "key19": "4YArMFUS3gMeZUWuPEdiyxbUQ2Pu4U43hv8qYjzhCGmAXN2Ab2wy4ZiUk8Bc2nqjtbXnqFqrVAD4scSMcuebgGpw",
  "key20": "3kgJd7yT98BjCtFBfkzcy91bkFBiKvUcK82yogtSL1RfeSZFYuH2dKKWMbLx7wgKySfuZrSvyXgRLuirVXnASxB7",
  "key21": "5mfDJvxRC9S6wzb5d9rBMwq2ys5DLarKgD1BJj8JAQVWLsF5tX11oXb3jDz5gk4jRxSirYsbzUChobLRHkyeKgvZ",
  "key22": "5kuqFN2rvwHDTpry2cVTFCTuXEXkZ2MnLSmeftQHCrowymf76FptpZxyC9jg8z7KDgWLCVJY94qQPXW5Vs68ariq",
  "key23": "3AxkkWrrnL32VqUy2Di2WTsYUCMnQFe19HwrDJhbHPjKfnn5GdipBKgdqnbsgG5kKXM6byFD3DsgiPcR8HY4phq2",
  "key24": "4TorE2NkyHU9EaifkfyhCTvJe53LuRo4nB25rJnkU1mdWsoEjHSmompAWL9iV5GyaWLRCPdvVthrVV6oUpmVSiYS",
  "key25": "2Z69eRufCRwDvvm8uhiMmdo9n8hCkggy5LfixsEWWa3rqzYEAfeyB2AjpRXTrxaALVLtPeJzu1L9esMM2qmxUiM",
  "key26": "4SwLuAv3GKtKci7LWcGckqMAccanvN7dCsVasg4N1yeYVNu4WZnP9cTnEzkVeWvcGyiFXc44Ds4zGSpzsrohV245",
  "key27": "uNp66q252zz2JcXjG5jSWcage9nchPtTfjn3gyCJnSs2LR8Ai1WCTcPgouiseF6Q98Ey4fMz1gLo4QqxjRFHVGN",
  "key28": "4LL7zzxKNKEUxNA3Gkc1AfyL9kocaqp1VsRqLzNw2vWvKuShVH6o31ezqzkjZbzy6xYHX8yXCqfKXzoYTZ3zEgao",
  "key29": "4yb1FLXcbYK9T26aVE8QD7AUCe5WrWFwvPc1bTdFXxz7yyxLPtX6av71Fij6DAZ7ohaoddEX13A9Z2UtK8C2inWW",
  "key30": "3JXrX4wfCUXD4Qe78GcAyz5uKHpD1q7o7uwzko1yZC5oDD24eeSiHC7MZkpNHJyNJ7utp19ahrstpq87fBmbp33C",
  "key31": "4UF3cKeUK5fzRCes5GFC4xh3bmBj7n3Hqx2TLFuDgwGUJdtGKKpR8ci4Ygsc9Yr21VhURiZueWajHLqeayaarbSg",
  "key32": "4vuKHxcFUsedHZUhVcwNHecABdGVuTAEEVyrVDSGswQKkpBMTGhzTNnopCr9HBnmZYHVsFCihKVXzMz4PPXF6ZEM",
  "key33": "5U9koy7PchnvvHzcGdMoniiaPZrwBfEWAYXy3SevDHA467fmpFvV2dgfK5s83VpSpDX1v7y9oAdnv2EHcY2h9FW",
  "key34": "2Ds6K4jTDComx88cAHC32vF9X6AVtLYPHTaZnCxK9UeHvP918cxucEbADjF26DTcfagjMhgMEEXe9MBpcLhsuF6c",
  "key35": "3kgXr8acEVZEfiS7p9ynk9jaEXdsnpk8q4MCp6HZ6eh8BoefwhWj5tDoMrN4DEvhPDtePp5L4VEBht7eTT6yjw8H",
  "key36": "4Y2DL6fUmPZQcP4taG7wkyMYNkV97CXReEKDZ4JpKk7fhQFkGkG3Xwu1Wj8yfaXZURsg71GevpApTayB2Hhu6GqC",
  "key37": "3UydfUr2Z667DvbMtdWPHbdtV9vd4z9M2goyvhhm4YTNUaQdpM5Vgy21zkavRNtuUMW8uk7S8rWHs65Pq6t1ohfr",
  "key38": "2fvjQA2kWxoLv1uKCNoTTfht2PohBcM8Rt1E2VK1xFy8q4shaY5Ar2gBs6T5f3CLQiBSUm5rHVxTTbNysH7EJQbH",
  "key39": "4wB1cpNTknKNsMSo5CxvxFvk59ph9yw1AY2FnQL2PZ8X93DgWFMHivcJUzyX1ZWSe862dGG3qzp94kkHWh6EwoNp"
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
