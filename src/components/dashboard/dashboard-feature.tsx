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
    "38rhTvu9Qe5VaiAH8qs51B5NZzfPbxzxPXL8YBbmSwNeUtDwFM67SrpJpzBRVGuGjbd81XmcwVAzUH8M2zeWiKJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xF9PWXKkD46GJjn9kjHVi3adD3M62nZgAfL8FxaFsR3N7zn3bzFAugo3SNXxZhsutsaCGs5tFM8YxTEHy82JjUN",
  "key1": "CoPyQh8jR5QmUuuzSb7hszUVftMtuS5ApK17ceZbaSGozKtqAt3CAvh254n7nqLsR3GVAiLktZt7yGykM9LBDkw",
  "key2": "21fz55ZUQvwx1KJ2rXB8fnjguacTSsAn1LDCBzNLN3EP54zhSZJrKEjWSVMqHNuDrLpmV1mS9Lg86LETksYDjqWk",
  "key3": "nGeRgdg9VsVofyyptfqDEvgk9JeHJbqQmftf9AqfK1T1rGVGHBt3wHPiDQZC3r7aGF2gJtqYCUBTbEBNEZwALdN",
  "key4": "2mwKYEtuBSLZLyicenMfwPTYfDgrxwCdstK78XFfZg8b6gyfdWvGHNnxfxKdC2QwRoWe7w8Tuz5gZr9RkqjKbkmX",
  "key5": "5TvxyyFwKyYZYUqbos5sV2b89HsNYFRrXFfnnLvqEvUJmec6bTP9pA3Ye36GYFhKCnm969vocmNqFAwrVMvfTosA",
  "key6": "67781vsmPut8DcKGFjyGygSzKksjp75G3RWtFYKdQ6J51ZRL9H4F52AmeUky9f2DufbX2uBgUdG9RbGfuNF1Ehya",
  "key7": "YKD3B8AmREU1mmeLo98xBGt5f9n7AX2MCcLewBNt4oAhinbP4wCPW2NFQNJMHTFUdYWvCbcD7yF14K9KCKaet5s",
  "key8": "5XyZ1kSqGpuuT2nKaNtqiR3g2JpAjeMiKdy5mGt2nxH5ncXEqvuDx4jMx7dypaguMWgsyHCGDaYphMmWf84JaV3R",
  "key9": "YSHgZo6cMb1KtyDXtV9zi9Vi6kASSrZN2FuVSNai8RyjHjMLfKyCgGZM7xmy6jxXFfRMJJRx5dhQHU5axVpYPQb",
  "key10": "3JTGFKpgkLcxrPcdxEgK4yHxnExsbB3zyXreauQVivq2GCXMcwsgYg3PrRUCpk1sN7oCdETRiBjx1GTMLetK5fiB",
  "key11": "4ea1jeV9EEXhNuodneqGzeZKLGiw1yYGqNwMbQ2aq4rZ49QpTYn2p9Uk124QDbjjhq234JRhQuaggFQmBRaeHrph",
  "key12": "4HAaQrJctNvno7WR6gE3AubXvtf2a4Qq4a3SmqY9pQeqDdXf1aCekU5UPbJgsYyxNYCrKuWBDBmhUAPmZtWausqd",
  "key13": "3dLbPSLU5suGyEh52ACpyp3gLDYkbrhTPE2MkKtDQUQ5sagceBKK514eyVKrZik4FwtAHCfNnMbF5jpiKfkNx96p",
  "key14": "5HRohzWKXDroDLsC89fva4emca4fXQAeufecAA7dBM8fGyecLA2TqZPgZ53ngr2RrD6DwQpovCdEyjBRdBSgBTL",
  "key15": "3epB5dwsue38ECFmNrTr9C1Et4WBuAW5sG3j3NGUqA6tph8e8Z3jBzxobacsxoqtGBtEqs9G1HVZu3apcwLuyk4o",
  "key16": "56E88JxRcskMipxaZNRmmUM94QkH239tA9BWefcJERgUkMERGDphGoi2scRQe3xdksfUi3HFnW42Tgh9cWyggJrJ",
  "key17": "rhgia2kg8EbK7coZb27KhFgduW2swvRaN3N8hDsJbev3G5EiN9FVw8hHSC6TBye7funvjsC2TewvkbRzR3FMwDJ",
  "key18": "5PFHVXMW5arfF3RdMwQ784M8y4oBjtCEETc6C4snVREoU5nc8yS5zGqxFoAmY5ZVsMcVx5gynC5ix38Tppv5jA7j",
  "key19": "WssmVbNc77tCbJq1oPWxxuctgebb5CnupBvGrzPdDyS1t6AJUSQSDREVKFzBZayFPAvt1kWgZQNVmyHXicc2Sh6",
  "key20": "UjCLE51LhoGWScXEpT5j3giFaxXfXU4FmNmNTht4r7EqpZ8fGGdVT54qVEp3KwHUwwCwFJEi1tFUWn49d7UR7JX",
  "key21": "7QvBvB11Nj81Aq17wWjq4BwyFYLzn92Guv6V8SMPUyh35xzrb1awkfHVWUc5y9r3ifgTz7acJza7my2minSd86V",
  "key22": "4oZD98bg97GGMVF7FptTV9h4bkYTnVVUpdaruZqEzCtpqv59qoL4AGKrGoRjRmJbKBDSM94KcDAyPQSa5Sfg38HD",
  "key23": "5eeytowFhzi42atHuaa8e7VxSE7mK7FL7wC9G4e5vK2qvkSi3nqEW48FnchFnrRs8qS58yZrt7pj5HGHL4AYoGBq",
  "key24": "3BRF1zFGvK9UYTyFs72ds5LrYurVuGWEX2Dn3dVKRGWoGf5qqscGrmGxPX9tHV7HRzd1e9aGwJkZE2NmnJAr1rfm",
  "key25": "4hwLYNjcaoeQ23KS3vMRtZNgGPMpdVNYhWYiBQAbGtTJ6xixZN6atxLKNK6nShgKyfrGqtQWeXTFNLuCcFTyn46W",
  "key26": "2L7kJEKV6hQszmzNVE354pYjBtqHojpaRvDmn5g8XiJmXpnqUKV8exh9VCYJHtYnRskWarfmbU7VdGbjaetr1PnF",
  "key27": "4QfhNxYw4YFzyb6uV379i52NY1AVyjH8XbQefYSxenNKUsbt6nLGM7V8QG27Wsiv4Ei8PLakjhbnzbG1yYFfGsGA",
  "key28": "2j1TYuACjpKkdmQpGdQPNu8SeiJ3H9D8J69BjpKxqETrSxUzQCA4Bvp2TFsrUga7Xr2v21NPrk9LDsixruvDTs35",
  "key29": "2nCZLFqjqhRATaiEEW6qK1XFvqp4kkviPp9riAaKzTp8GDBAYyFR6XUcFkZCPd6PvU4hiHdtc2uMsWDs3MQHDkFw",
  "key30": "3iJBtzEA93SvWdiDC32SsGRe7DCgegkmEbSrSCv7krq5fN2v9CQehKa9bxMuTpSSdkJEMa4dZ6LQsgrK1mB5bxfJ"
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
