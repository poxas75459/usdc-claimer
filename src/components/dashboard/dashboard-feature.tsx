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
    "4BCsekt8gHQZv2bTbkQgr45VbdszV7sQmwDDVUxnZvMGqkyqNsU3JWABgBbvkF67bZcNhi4RwPaNbkKqG31MmQ4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TcVRk5X6j7dPr98eU9WdbQpjtRRZn5Mh3yTT3i9cw7wx149c3GAmt8rmmA5zTp2Xw28WGuHRPLHfbhzMvaRG52",
  "key1": "5rCY4qo5C4a3wLa6nQs7mWrpZXX9VhbckqFUx8PtdxBJt5X1s3Ey3wxo1VYh9x6nrjdDSehdFVfunVdooyRgyxdy",
  "key2": "4QnGusP9bcQ2S12nvkUeHbBLni2g7VBe99bU1rhw3SUELBtdAapEzJawMHB2aQ7iRn4Vgwjcz88z5Qtukie1bmN1",
  "key3": "5wUqZSj99BdF6r4ca8ykKFfTVBf36m5VQdSrsMZBo3D5JiGadLw8LNdEjHMbhSKGVXosuyd61pj4DBftWpqK9Bm6",
  "key4": "vJMCnh78t5xzwYT75Mr67CnHWiCFKX6vhUTUmuv5UfTSB6tPsnya3h9MVvvAJW1W8dS22BEEAiPp39TvAEQEEGF",
  "key5": "5kJS1HebnH5Prjw6nZoR4zQVCF5LUFh1c76SL9j2RU65vseEhGcoS7ujuLoUiFLKzPRu9ufWAQcMivKiNhQ4J7gQ",
  "key6": "2TNMS8XBb16CJiwAnXquijirbcMmeMtpaXpJ3AhVGfUBeyVBSHaLpoCtPttdZpRwGZYjYT73vACPAiRwXZyFwvd8",
  "key7": "5qrmh6YTBSMZJjEquuWVVC1GWU5jZ9mb9fck4PMeeaFbhXWnGoLSWjut4bDZgSZhFnoyXNG8TC4StgBYmtJdzDaq",
  "key8": "4skhTibJzjacALxU5d6y3cbZsH5ckEEmk6BmRPi4bRpFFPqYMG6iffS64nALftotZDnhvCxddKM3e1EAL2By22xP",
  "key9": "5Ks1PMr4Wi1hQaS4mrdNisLwpPLzGzrSFQFivGQ5JnwfCfvwYdeAjtkiiMTeKsa44QwPpXsLViuJgP9Gqeb7wGTA",
  "key10": "3ywsQQbxjsWESZ3Cn8sn6kyZ9zemDJttEjxzKcTcS6ofPPCmcq8kEBduWQJgPMahdSqNpEbvsxoaXibCvj1fUuuu",
  "key11": "4t6xhxfiUj1MhCyQvfZwrM4rVYyNZJ3NQW1c9WgYD7VNaKraNZiSYjXpJJtq53TB6UFWpntBMvyMHgbN12Wt15Mo",
  "key12": "2AQPhw8iNF5JJpup9cNYHHPJFcRbomj6AMc8j5gw8TQHw8HRAZ1yYM8DU28A2P8PYitGe7W7Fbfv291WsoZSMJJS",
  "key13": "41uXsH3Vd2cXGUo9c77Xw78dkVCmZGgcoNuKbs5CkW1E4KYQeSfcK5dwf7wcvBRgbJGSSn1FafBC7tgFMGbziX9B",
  "key14": "128EKta6dcc4zMdJUkkH5PWnfcEkbbvXfq6mCWivJZx1Hw1i79ejJtoyKuHA48HXJrgyMt4mjihWN6ZyQ22PPxbS",
  "key15": "6mNkuiJG4Bd7chXvpuNs1dBGzd4Reag19q7UF4RyBYdE6ZKrkwt43FjzQjW2Qo2Spq5t9g86jM4cd54A6bvTNts",
  "key16": "4XTvVfwcZsik5tPspWPzuE7QNhSyvnH7dFwdd3qPxi7gPQFmdLEWFBsMTwoonFGnaJxGU1an8YUSBZNzZxuSf96W",
  "key17": "3CHewwsT6Yi3xMpL6e9NXYoDkgZD8BXYTtksBe7SMnuerWfaMJwjHLYi88XLskBvmKSJe24wdYZa8N6TnrDZqvPt",
  "key18": "2AZzpinptkK5CHhfBh5w2nxprDiUCMbEcVLNeRfprL2ps1gX1sLnzWS2XxRNGKpmwfhDEoiffc1QwPeQBrA6dG32",
  "key19": "43okBg2cPgVQDCX4uPqqHHUAERSj6dhvuVghL3duCEtGNvRJn3aodZhPnJ7D4YGZX95ZqmFay9MP97LRYEazNj5P",
  "key20": "XLXKgUnAWjdBByF5mAuHrvt1VM4JhavqJzV4KKY3cdCgnA6xjcokzh3pEWcXQyBUPKpqvcymFFdKWguywVswEGs",
  "key21": "5CHg35xtLD2oa8T9oQjXQYjsnz8UdN7qrEEpTrdksuuewEVeCvbhbWarfP4YHj7G6pH2d6Jewvssah7ebT79CLUS",
  "key22": "325QAndX8opVhzAeHoRcB66ETVJh6hkz3Sez7rCVJMv5nTZdKbhA7XWyjSfYKy56NmsF7zVrptJQhieAdo93gFrv",
  "key23": "t1DQCsjfPRypXaqT5mymAEUFGZf7RH3d1a5m6oANYmtNPMspNGkESiLd5VYpWAa7Ld6KdCuoa8Aq1FqKBjmfHuV",
  "key24": "5avKxJATkK4pn8DrLCUiz9UPVHsG5qsiiKaboZ8WEypKKDmzWge4m78qpA9kEc5UjcN7aMVBBeBg2sF5WEn8dVPS",
  "key25": "3zbiUnz7YXpVCxmJjx7AsKkaz6HNdShuRnh7YM2acQP9wjRkrNH9BpsTX4cWuPoN3sbPszjknfJjg91TR9a8wuqn",
  "key26": "47rf9Xn5DLEiyZDCMYXKkCEWrm3BzGYW68JDPY89zHZNYfiwfdXyH6ovqbJiEQxbLaj8KGbY8z9BoP8EkVVpMxiQ",
  "key27": "3ve1zAdRsrhxvXpTTw5MBeau4PUiAkikzsDshnSXRd7qoCyZWM8sZUVadJHzDdexryw9hTvRHoGgXk42V4aWrCFM",
  "key28": "3SQDVo8edfwFp4S4kjZSs7PSpTnPxDkmnJCkjc3y73LDd99ypFUzXb7g1KzYZhTtLcrAYwemLK7ZLKiD4Jd1wBKu",
  "key29": "4Q4P5YoX3ewtH7ePr4Cy6xYfvwYW4Fx9qU68WX95idnGPXUcp9EqXjrbN7HUbaetVgCikz63QxuUe62tTsYzd262",
  "key30": "5MnjQup4tZR97ZPZxqHFj98qfy1iXLA2johoDJ5qeDXx3QH2CVGzDDEqZjxPhRb7BqDHevoFnoMD67nRVTi1WT4W",
  "key31": "4oQtLkJtq1jFWSLxt2St8SuF4i7JsEfpoQ7EqtcHCb2uSXBsrkZHAiMa3fNtq34Lc4YZbZFAejAXAAQkZg49oipt",
  "key32": "64vdQoDuYeDVJmPWd39hLZ9bsV4L3e7bcRCC954nr95n1GuZMP4E6Rai2xf7jyGaww1JLVDcRC2ccP7x2xxxkLq7",
  "key33": "61AGVYkMn1ddgdJYKrgXYYw5birhnRSP1wZ98QcX92by7CrHjTq9bHU8SkT9AaFrBf5x1LnLxrzbLujEngm8ssk",
  "key34": "q15Dsqj3Mqdi6sYcEZhLsvmpdZYg2ULiCAdijaZG5Mtird1PqSK7HxGb4FpwKcwZ3aKKD6jk6pFC5fMEaGoxhkK",
  "key35": "Sg8Cib1L7yPVU9vh85ehvV74fT4Vz5afHGHfrJiA3gQzFjW6zNoYrUuX8qR3fv76H8aeJrV4qZKVh2pNHfs9fbw",
  "key36": "HpNid7o5kXSM5XXTPbiJufRc8vQkxgxhaGUmy7mWa7e92DyBgXxSqSxLH6X8wbNfNCAPCJecVvp3GyZvSiZW6Ju",
  "key37": "2tgb5xGzwdByS8REzn4r7rLXrFSwfH28CdKXeTJiH89qvRtpfLape1SXXAKaMYRD4wmD8xJfPyiGZqeGuvJ4v9yJ",
  "key38": "4qaFEuxYK9F1aCcjNa62UfhmNqw7cz4McMyfp5CDt33kHyERQidsHQiRX2niDGT7gmm3bDfNBE9DFVn3re8LoUG8",
  "key39": "5yay8gf3cMNiWXirXy9t4M94e4x9uwU5siVarub5LN8r7fNjR73iuKykKiGUUi7ZuDuXjPJFkF39b3XZaP5mvdaE",
  "key40": "2RdwKRVkp1JnaeLLmyfSH8kk8R7nK4PkVEEuMe38n5PGmxGLJZkndyyY3XzXP43P9jhj8U1EP4866b8yqY4qWXUH",
  "key41": "38dtEx8m5RRuUSFhJ67fcaqRA5kw8ENZMtdiymqgj6LaTapZCmFhywHjz44B6i9JjUKf9jDGBDw3nDZC9Zjsg7Xo",
  "key42": "3kT6udYPcaoMzt1ALsp9J5NANgLi45wY8Me2BazgSwksgxWqn4svvHAMWKmbbbPb6XNeE2LmVmhqbhktNXL7K8xB",
  "key43": "5ABZP1oWk4pmiZpqikrrnk68Efyp6BfBwSWzcGQrWy4zqeUiqWrigPioZ3qDHrdMYMzV9h5C2DdyUTVtyMQCvMb2",
  "key44": "4aJJCNK6xr7ye22RQPERNL8zcU1pSNfw9Qq1cjn9RDvpaY9kzP6xENcUCSMXupY2jQmkAv1P2Uhbi9pYx8MPMtzq"
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
