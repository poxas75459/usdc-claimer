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
    "2V1yBP1rPTgLTWziboCBXWgDfyGwZj9XsHzLrCNToSNJPFjzNfhzFUCMxmQvgfLEw9h81a99C3qacwUbULMJCrAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8Lf6wbWP4CRe4WQPgV9sXHqHAVRnm9JV4ktymkkzTE9Vi81RPFjeZgwwEpEsKpVm5XJ2NseiEUa99SLnxcJipA",
  "key1": "5AZHsWdPvfDsT6uMhbWE9epZMufE86BttPfNNkyqHw9raCUCpeJxT18Rtnt24enTgLvboeVWsdHBQQEhhS7ETBNu",
  "key2": "5mCzpgLbMV4C8QJXKSFiMZTupgN5LowtTWKqxbGPQdPfGcAzHTKCoEABr6C7xFSMR7PvgHsobH11hYkxVMhQGSoH",
  "key3": "3jzuMDjHMReifgTpQ9vnpk9YJmV46NCR94x6n8Fou4YhKmKz7mJvw1QtoYzkvAsWRjETLwVR3VmfA8kkG7j2SpzU",
  "key4": "67UNZheGmKUkJJUongnwKG7fn4zvGGS8uFeeY8HMm54ux2nVDZrppYuC1Sscy6RetY7kDmgRorfzHehCycxx33kt",
  "key5": "5TQaxpRgXG4EB7EHdfZCNx5tgdRSjRZrjoFVqnHnN5fpGhiNhcHKs6pJ7JLtkiS6JQMkurko1pQApj5SjgZCQfNn",
  "key6": "5u3NH7TkaCngnB4Kqd2VhHCNh8HeDTXNsrSZ1eNuqVkxhVuZADShgv9YsccyyCZMUxs5bCKvbLiZzSUi8R5PiGfJ",
  "key7": "3K4juNAmgJizovhHnwRnRrsPTEivGg5iwGT52TzNZYsUZj5Ra5Tb5bUSuqUqctNSoXN6LJbWBJvvTHh7QRAvEsA2",
  "key8": "3CXuVKjfsUgNJwyWYsU5xWAatSCFkFYA2phAGqEdFgnMxSEHs5RmWpWRoyNFVaaN752b9tVN1smbzqzBNwNXsTho",
  "key9": "zcv3tkJvnKNQaDr4UHiQsSxykg1dGFGQGgFaHiPHbsXcShkSJCGRVFtjCrnN4UMs9dtPheohJ6pwcoXinTQkynB",
  "key10": "4JugKWxALSZUjcj6dEMvbvwL2LnGiVb2tN3WJ91tvpM1Ac87YLdgR2T8WMR6dRetzgTJj3gmyosXf2P7omErMbEN",
  "key11": "53HEsvrYEcEYA9j8rfotgYtiPNX7pKtDGqEske7juTDa7cio2ugmwMNYstwBsXHsUqsMrhh8it3sJpw6F2UjYGM3",
  "key12": "5uKn4DfvkVQqYJZq1HthDZ2W13M8Epy3s9EVzEJ7bxxQ2ELE4rCUpimfpzwm79NP8JHGfp5P5iMgoRBhPUNuK5Hb",
  "key13": "39N6WgmBTsf4nxyHugnAqyKFQD2d66aBywNT7JkFwXMXGP9QR6kijp6dwp1vzLSZy3HFMBweCb9PvLAQUmG4wHUq",
  "key14": "3CeDxjkfcTJGus85STdQkUu842Ge1KAM25gPf3HSQ9uphSRKw1Zg9x7B3pfJzPM38NuSGTqZJUKqXnjEL8sa3BDq",
  "key15": "9hhvxmCxukb9QkkqwFFKtHDS7taNNuynWE2p7XTjRAEG4ELMop6Ta6VMHnW9pvoA6mG18GFPgcCWcw2j8h1riqU",
  "key16": "2B7zXYTSqLrNoKjELr8KNHGqHvnXQsLWm8hyTscC6Z6eXsq4JjQkri4J7ymQLS1ULFaYWkcoC1fg3w2zdH3b5Kxq",
  "key17": "52bQugZsFtyhcWFR99cieDYj3w4Z4QFxM7fq8RifHacrJUxi1mop4MXF2pJrYdnxvkVDHp4ZugyWUFGJH2gS55gT",
  "key18": "3ChkkoEDEC3dY1ukWyyFgD2B19xd1312hYT2GeoPaF6ittq6PsjtzdW381Vvdye8fYomgC3xHza1L5xqJkdPUTb5",
  "key19": "5xyA2GHfPmBANJwxW2brVtM5aooWLnQDCTQ5cJBYki7LRNhr2vALMpH5LRjTufL6SqynJP9rfWNehesXDrMjFPN3",
  "key20": "2rHnpxVw3syK1wgXFbGaXtdduw5FQfb5XTEt8VKDZ8EzkkWfQ1WCis8QGne2NAcyDTUgDyymJc7vuvHXGSPnBQSP",
  "key21": "2qcdzFjBsFpbZHjpbqxvADp1YKM2d2U7X3QShVU9G8Mf8h8mLP9dryCTgx6dxhiJSDRpwWEmiWk312cGcGNhGP9n",
  "key22": "4qv6MNa9yLTmWfAjcoHiP7yYGDQpS2EXW4rgEKJxvsYb8hgLHPzkLSWKXBJUFQEtwxfAWn86PA9u5jHRZsJo57p3",
  "key23": "5DCMLfjnUuu3YBTieGoiqBHTA8JReRyBft1nqj3BCpb7X3aYz8ikzfypGXiHizfMrXR6CGNPFKoJJhVqpnYYwy7o",
  "key24": "2AfFEubsAcuf67ULVu973K5hQa8VPYMeVoWsvkoMFaEdfsw3R3r2cMJbJgW61ywcAGK4nHPZRAaJpjPWtyHG3G9t"
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
