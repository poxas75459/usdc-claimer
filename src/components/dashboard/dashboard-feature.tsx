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
    "4EHPba7b7qVmp3PQ1PW3nZB16bPS5zjNS4MuPJqbnhh4DCcKKagrqqbJEgLkJvMvq3UhWXNwvLgDk7qP17agwJXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCv9GSqgC8ieXszPddY9abGSYpFLN5gX5LjXxm8ptNbvkhCFmBQt5MWu3o7w8sNazFRrB3GUkUpSZ7uE6XAJDSZ",
  "key1": "4JEDvDDVJxcp5PRLTeCETQd1rmdGmbn7kxVAjSAh48R754wQ8sjd2yfcf1WaxWvxm9Uq8ADQjdg4pbbhokPDqp89",
  "key2": "5EZfZACWXskJjgRMFkVrFQg1hSCzdJSanmYzKSbwn6Vmqg4hM6B3ae7GMYFV7wR96DFCLHNrmajjfAppTVCxST2o",
  "key3": "3Rd7yXzZGohaHCCroti3851SfGFepEL4brKFSmKijvZ6jVMY9F6xshxh8SUGf2sULnCm2C4WnJtizpVLjyWJs5o1",
  "key4": "5AtYjmRvTwq8v1F6gG53SREim3UXSdDxEN8Q8yhDmSpcSPYB3fNvLrFmux8NKZEixjkeZxME8Ju8oSaozNWwhFDd",
  "key5": "4GiEUQxSfS6mhAJwtcBKHt79RY7nGaCpYYRWEffgkHKMzWp724uDiitekFtAdfL2LrhdsnGTi76QYhGV7aDDENGy",
  "key6": "33Q7WwLP4vyGaqZjGoGcBj7AxG1qGwT7Rva9a5rHxj5R2SLE3m3VequvMXy5nccFwrM1S9WDFzpvkh28e8DSxDSE",
  "key7": "4BkL8Ra73ZcNC1o3XHqNmAB81bGC6aMVuRUsWiS9eWM9GgY6vaTFgqK6jtHGoRvnKR2yiFbQYMYF4VhgxqG63pNy",
  "key8": "5js3sFu6mDm2hQeTgszhdAjpHQre3vKTdH1MuMwRmwrNDU7teSupcpax4SxAVGL4YZnKYDu8NQ8dSCqX3hUjBpd5",
  "key9": "4yND8wcV1CohL4zB91f6neYJgHmc1H8osoHwV6QhDiKMu4463YJwmqkS4g3RLvb6TynELEd6MNzuFXH7kQbMdWji",
  "key10": "4STRFZbZgUuFGRrcDnxZsn78C6WF86wGM4SDQvwX2rbpZcpVqkBBRUhf7m1ACwzqU5ZLHDTxgqHnRyVe9Ac6KPsE",
  "key11": "3T5SykPRCB25MnuFmGeSqUQgAtkAoyn7DQcnJz7499pwQhadURjzMwGtVMyCDFAsy1Djr3KBQDwsyzkytC57XEuS",
  "key12": "4JXJ1PGu2KVdZQz26Pi98ig8zXqU5yUuYD8KrzJWicViayArATMU3rdDkG7XFCVwBqignkdQ7wEWjs3s53nbioJi",
  "key13": "51D14AL11XiryV1PWnRs3kKmA5uGfh3RcXPc1ut1khB3JJpBizAwuCfMyVRRqqDveumgcRx5Dn4qZxB1wXS3jiuh",
  "key14": "3942njoxVismeLKC4CdjXpnHU1WpD9gvQKDhMEg4vYyvhJkwFkJ6vyD2nomCB8ad4ELMBqr2UTAsPoaxEMesmmqp",
  "key15": "2tzyBbjHeCR6wRkvLLtuYHMCaDwZ8BNzzXTtzjHS9q2PAA8WovJnyxXWrz54PGJb1jtweMYxKbMbpuJZ8LGhBipW",
  "key16": "5ZvLarQg9TyXeSdKJmg2j4tpXgjsaVrW9qGujFkMEVMFsLz9DBtbbn3eCbUBPptVu2Gick8wTDrHpStg17YkXCk8",
  "key17": "2phfNYGcaEf5zVT1qkMjDqAzCswKwj8Q3jvmdpJVJsetdZmnfHM4pNS5cXcG71ivW6x9BzS2NjmV1AVrWmMLd76Z",
  "key18": "2Pra6x9MygqfeLkM3Wyv65cVPscM7KiEQCfuJBWhur5VDFW5aYzvZ873yN3aFhAGpV3JHqDSLuPy8U4j6a3MS2ut",
  "key19": "B4ooP8Uuw3KE5EG3vmB2fv2zyGXLDx5hKcN5X19xCgaPdg91bCimVnJgdBL2xqXiqFMGNHfYovdFpgLYBStYMUK",
  "key20": "2QUEUvJkKn59jiYk9LYRpk4w6KtsNyMruQNFa1rU34RSSs9iZKyebQ7eAmUKZoohmqBUKfY6rzqqnsDES6LUmwuX",
  "key21": "22RiNUyisMgeVd45LmivSTrwDa4p5jiCvzkWDESHLjq1yFi9Y3GWo3xA8F6BvRDb4SCWBtqE8fSCodn74minK5BN",
  "key22": "4Kxn2XN9pwT1sJQVWLGvNMVFbE8XvdE6yZjtZDqFu8Yed74yFLfCqVyvL68JbWbzPR6zpJen9BLeoC9rhNhiMcp8",
  "key23": "61QSuymo5HMLsXmNSxdJ3g2L4GbguCrZgukaWn9UFxCM3kyRTHQUUxuS81jkmXotStyzwdJXbJxPkQv8JRxLe8rj",
  "key24": "3qP2Y78ZPkhr7PwzcjB628sfVsa5pLgV9H8gmq2Gj1oFuboQkGPf9pZkqZ578pHUnVPj4zE9aiuPKo9sisjpU6k8",
  "key25": "1GY1TkbRKN5TjyZf3WNhwx3bLAbBZLeuQHoDJXx6d6uqs1vfAYLhhAa5BPGujmKUptAYm39MRcLZBFBCuNNoVSH",
  "key26": "2Zp8nDYhUJKyKjocA1PECnUnQpYKDYbXei86jyJdhcxyRKP5ifZUhAwUUJMwELJUCu2sr27jzWirxJ4ptNacFN4D",
  "key27": "3AF5XFNrJ4z7UDeZawnw2mfBa9XCu7tcCMvz1PzHfn96bTop7U6fWFvLPYEXzzMWLRWZqQbcpVpqkzkarYLRt8No",
  "key28": "48CdUSwKU6qLVetMeqKjhZA7EiomsRDTZnB8MVy3aqXWjCm3g71hredfUFDTAdFt3qByfvfVqKV3AXqkU8zV1zK8",
  "key29": "5ytXTE7NHjHGacZ43iWhsyaucojz4Spr9eVChaNr86nMwMVJtE5vUeNbUhq3jCFm9NqddTnDjQhazU6S6AeUe3Za",
  "key30": "XZuS5bHD3u78ASsqwpsUcE1rx2yMChzG598dMNLyjjSyXLK85FGErsbu9MeD7RNbtKFvp4YXBc7X882386UiGaP",
  "key31": "5SyNee4uB8x1KPWZ9wyo8aLRCH5jyW6mnmsWkubvL26h8wP4DbuVjuNd7b3C1SHiv2nvcVtzwgFZvuyA6zbJmauL",
  "key32": "5pqnTxaRYNbCW1y6trwFY5n8MWaeJ13WZWHKRZTDYiYwH8yfrt4K9aMsuLekLzVRNY67uvWkbfafWViG4ugLfLEh",
  "key33": "5er8bPyHcGireqFDxCtAKjz2nbjZQ9fTukntY8sW291qH722X4VYzWXbVWn3BHjz4Pq2JjnWCWSR9SHEGXNd5jzi"
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
