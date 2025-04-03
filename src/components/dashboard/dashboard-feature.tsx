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
    "VJYh5LNDpGvLYtZLsYsDSSettWJ7vpFdWNWj5ezU6c7JoNt3V7vNkdA2JBLynHhyMeBv1uFTLqJ6Se6w5PMJsgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3vQ8QMeLfsB8JaqZgRJBpFRUGrDvoQmvSEX1r7zVzak9mNYf2wLwDzPJMcQAcgowKvk6JSx7PNDAH77HCSQSm",
  "key1": "2ZV6ANXBTsYqHLfBQU2da8PQV4N6tzYfzJBvyrcjo8M5Cg6rRPDHyiGL9FJHRN9yUK5t4zZUsJizk1D8iAahExbk",
  "key2": "2PJQkMY9x2WUjvE3rS1JAn3AEgThLZpKuzgtfUURHbthzT5VrFMc8eDSz7QnnYbuLctvf3WFJCX7dw3915B8QCjc",
  "key3": "3JWq5uhJdA1TkkvFfwZBg5AeLVkSJNgMdJSKMB8nkFSMVPU2B6CeSRjZdU4wy5SxvinWku93j6ecf1bFH4Mp4fkB",
  "key4": "BgwsXnMNyT7qyKKJ2jcva86dEiHgQmXnLbz29HqAqsQge9BV6fUSekUnig7kQVHCcuGyeKSPv6huPSmVx6npYP4",
  "key5": "31BqHZB9cTMDBUQcrWmbEC6qoRi8UVQSgmwRW7QraCkLdNj8bFXvijaLxQXfkRBBxF3a3ygKsPsNxsPsorRNwY48",
  "key6": "3SgE3TwbBEQYZdoLeNiK2xu1Vt737HWopm4PZJWfYCPsjLamgLZSryF4kUxvFUK4LE5dF7pScPeMY58npE95pDoe",
  "key7": "498fn1ax1Sx9G54HJtRwZkHivQybAVPbw7groiH2R6KrwZ6TtTzK7QuAU7DweWGks7misEC3HGt4nEKbgHzVgt3D",
  "key8": "26PkwtAVPQGXwhK3Pd3hW9Sk3R2dwonBh2SndGtjkngYreHVXSSv2mUbvGq9FAHQ9FoiYyNMWzXhP5tXSCGDZfZd",
  "key9": "2hmPcnLb6aurrWhDjS9h2uZqz5UFny32QQEZcznkgfRH2GJ8Lwg2BJu4CZTJcKpteBsnVDf1DvM2BHBJ8631QqX3",
  "key10": "SAr1SfzWESjGyGipgJYgiXCjq8GPHyiEPfoMieFu9xqcaX32oh25tDWyk3UXC1mUEHqoUESPBHGhoj1khgYybN1",
  "key11": "5UKRYmuWJVPoWSkdUmRtW38o4Y1xZDxeUJ6E9oVvqVn2uWW4kwtqHVkdW6d9wLyNG62tyUyeq7XQcMUbNmuXJQPW",
  "key12": "3gF36FagCoK1Rufb5XAbRfmxCs2d6vY8qMfV3WHWtGkHRhzcqwtpDbrg6Tj4DtTAYVzzeoWr67JHhyM1qMXgCoLh",
  "key13": "5Qf3uZ1bqnsJELGg1MD1yJfAVJurQBDhPUrrHdqg5YchbKoQa8LF98tJByWSQhaVSKhdJXhGsSJXsKU9GoUF1Hcr",
  "key14": "ZgjDiFcBdjMdfSyfHKwXfcapfF5Ff2UU3mR6uXN8Kcyd3tMp7QZbdEgRJiVwG88a96PsMEXrq4hgAQBY2tLt7HM",
  "key15": "4XkjHvisA1XDyxqD42T9BCbB9S26pt79Vbh2NKDYJaz9ZXsoFxsaS5nuTYHsAPU169S4YkuhHFCa1d61cD21PWQa",
  "key16": "aTCgXmVHF3azgHuUQain8vWybzEmN7aNbPZ6UfYESCUL9dM4iVyT9HmdaLFcpX9tY2hr6mgrEJL2rnEnwdwdSJH",
  "key17": "7C3w1kqJSX8inSv5zihJCZNeCZoDjCEqAd4UPzdTtKHrwVCMEm5bvHEe8MzEwRcbaHRzMHoM9VeNYfXajGBtJgE",
  "key18": "5NtyTYFw1ffwwCKWp8KQdn4cXLTcw4USo8XPpgVBLHpRyBWTENunvXDzjAPvNKy9skvqmToYxFfcXDSf66SnemCd",
  "key19": "29LYt3i3YnYD1Eo4tJcTqYHPS9mdEjSj6F6CdSDn3tkoZDvTCDXj639dvXhVVd36xbZVAx6Hf6dZWiaGoZC2M3ou",
  "key20": "4yoBBjxhuQti1orpwoZ9ShPcpVMSzWBGr1He4df3exnyu3Cv7TuvmvdSUwUpCffipVZ6oUYSbWLLJZFKkhcBDjqb",
  "key21": "5zqxpWWtWPtGCwfpRdsexYiGcGMcxZExct9jV252jBpSAdAKH7LX295LcVbNgcYgcXvQ33auMiW1kAW2yxfVq4Lk",
  "key22": "48Wwfb3shk8TBj3rqtnXgBTUz98CQWN3YcovUhoZfz1SFqBFrnZUMWZ4XSmnMm2QcRbthFRsANtBQ2Lxh19N7kRg",
  "key23": "33A89suNTTYwWUv8PLVUxsF43SPQnc5U48PBDNx53C3fnenq2XMBS6z9Afz3RjSqKtRkSsv9DZUHfFaUZ6ZY9L6",
  "key24": "3zdP5xz4vCLs2KH6p5W2tCrurPBNjFUvUwQPhzdcFYFrCZhPGjTGSd3EMpYLZEo7Xc3wtSaxBLbTaPtQbo5mtHi8",
  "key25": "2VCFbix4SJ1JXgKbqvuKgPfTNnyDDhd6oGRgrV28MhcCdeXLPACDuSaf8w59qrXizJU1CSEgfbwtGc6jdKv3Jj4Q",
  "key26": "4MMrUwRe4zMb9NBFr6AehubcFgy85ZE1RjWb27EMJBwXWucE2Bp7z472d7HV6RGJTzUfbkE26DLURobjpKaWN4Uj",
  "key27": "2VZfJwyTGJVdm345A7Sj6miXM9X1tyicjsp4MKB6nKT5KC3gMxmTktTu34TjMzxV5CRRXqjjh6hR5Bwh62rJsWrD",
  "key28": "4yujXnjeJkPBDH83fynH2rxqjSwCwe3Q4k7VoWG3Z2yAUGUhiScMQ9VoQW1MNwAt4jLGjtLcZBWy6XP7yXWBYwst",
  "key29": "5sLhtzwF3G2HyF8M7Aun1rTPcZhCJN7oMRjoHJfoK5Pavt8iEET4N6nmhvJKyeZDGuS7sBEdzUWT5gfsRZybitWE",
  "key30": "2puWXnYbakPJECbi1r8TyC3fhv8Zmdywug2791orvsSr8XwkP8496a4QEM1zBXxL4TPZAJHMK6V6xM6EazwRgXpA",
  "key31": "5TdMQbT1bVsiikJrLsmu5U5nrzkLH2SThm4v8ynhZnXNBe7vhq15nTEavL5EFmJsby5DRMH7nhBKCFwi4MrMmdiH",
  "key32": "4YWY8UeeHz3jjtp1rWPAKuvEJWe9jp67NszVDUAVpj64zpDsCCZQSER6ayr9EXPcBPkj6YuXC6oVDQEW9F72UXbN",
  "key33": "Y22rq5HPxpBo2dvKcd2HrjAsjDwQLn3Xy27ukdPQrQMr4v4sbw5QKYKJf3NdWLDCdnPDiZDonJ62kAw24i8caZ8",
  "key34": "3jdMz3iVQEgF1zpQk57ptupvyM9Hxgm2i4rNNbRdaErmZQ95E1kmpriEfqog2wqecjgZQX9oM995cyXU3DhUJxSE",
  "key35": "5vCTg9zbvL15hpxRcoaeXLDdsCnitCeMgTn7wpup9ArFiR99VmtghkGiyAna3jK6PgZbvP5pAuc2owJaGzSqf2EC",
  "key36": "2MwqcCQ8SdwFtrPEUkgiQ3PsiA6pUQjMzhtRtCm2tjF3BYPnn3c1Fp3tCZ5TBe1Y9tZPmis9e2gw8AUnWcz2jrEc",
  "key37": "ZUioxE4wAJ3jNMmwnLwnE6VrDYkLmv3ELbdcTRLBUMH32vUiTF5LacRAKMXBE6rrXPJt1wddxXjZjThFupnUbtY",
  "key38": "rXVwtHoKyGvtdoz3yXwsx8ZDkMkaDjrbyFEZWxdKw8z6Q4rBMktMjDdpg7UBoCyQ36eUmSkiUewJbSoWSbMRk6e",
  "key39": "JB7avmwSmNDQZz9pCgT8n7ni6LqLNTpuMT7to3dEi4puEDdL5Ns3uw9ib76Lut8YFtHeCoKqiEWB5795CAB6Xih"
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
