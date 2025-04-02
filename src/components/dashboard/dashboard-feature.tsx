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
    "3qchsmPcDEaaWLxfPEoH9cbMELnTScuhjaG8NhvGXsJzZK88bY9jiz5rar2x2EhbfD5Awo6M5ti84Rt72tb4roKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xV9PvmD7ppigauZ8CCikB9ehapZjrCUr3RLa8HUsjoB4qHxA3f2Uos8dK8AbabhCpvtZ12xAzERxUhqi41kw1P6",
  "key1": "i8pwvnZoYtzFyVCLfopMqNHXxmRerhHx7a1SRVU9eb9GzK3u4C5xwQTfLeKrwhKFoDJV4GkB5ppRTV9xpPm852h",
  "key2": "33nRMF58KE8iQscL4uyyvRV5fB7Seh46fu3w8iXtEqR7Bjhj2LUEuHHxAZPPxcCbZPU4GsNnMmNGQ362gNJpHsuA",
  "key3": "2risHgnGWqqstN594C3P8TnicJT3sj1MrpbT23MmsSuLuu1kSCBV6zGgu3QogN2b3tSRuEKQ8dFrYacFLwPBfsfJ",
  "key4": "5nh4NHcWWRZkYiqaAwDy7zidVCBAiEAz22AKZEGq6x1kpKUZxakoJdiaRDxsUzHhki3wnskPNLFXWmbgw9bez5JQ",
  "key5": "2Htm86Lt6zyoz278KNo312aTy7fZrJ8bMKSnDDRyQxsMZZtQycQHWYvV94GBAMPK9vidxQEsQ9XTRsgvDkbit7tH",
  "key6": "5BFSXA8DCYX3oJaRPaoBcffNtYDjc7aZf6aT9L5FXwwgVDJZenJsEBmLLttc465qNKi2wjWWKzt2hguak1pBZ1b2",
  "key7": "3Z168cTZ6o2GTpU5wUNAMzLi436FFwjm9bELFQffB6LUhJWgJX59jzKP88PdVCMA4mRwEinZ5Pbbihfdz7Aimp8U",
  "key8": "5vb64GesBcGLfbWTUV5wwtda659fyASx6PPBPgSSkogWjBXWfAaaNyaBy2AYYJs4H3JT4CdmVb6XxZ5fjrjoKfgv",
  "key9": "32JMeXy5BszRCmo5mCiKi8DGgPB6em1k5tLNhx8GeyDW7iHGWbikiLfDMS4VyAd7yoheqacJWJp5EWsf3Fi9Dfea",
  "key10": "552etetAcJsN9gzttPNJnRQ48Rx2VJXfeRipfhAuFf6NXq3N4NvM1r4xKhJKQACNcgwtzcTXgzoSqkdLCmSB1gUY",
  "key11": "332zs34JXkLrKz3KB4zYpkZYaXNWf7VTmaDo9JPcxFc2PMyTkVNtrK9HsKwZky3FHtKBRxWsSyPu3HbNYHXm2Uq9",
  "key12": "66bRu294d6gxeeKaFUukV7YqcarzuDwPFyMi2qLEnKjkpwZTq7uT9qmBSDUNvqvESnuBwBFqrBhPPrY8ypDmkr9f",
  "key13": "zYKBgxJ6mnkADnoSqZoHMh2b99FsCAb2Jy6GVZW2TbStcunrytj2jkmzEgzaMoFcxqmFzh6NjDKj9tvt6MSqaDa",
  "key14": "4DEBToAbMdZM9Ctj7WSSN4wC1VnNy8PaJa6e7fNQcaLKQoixq6kuktR4dhMJmzPB3oxeUZiqnCo62ucz448VWpuc",
  "key15": "3vRbyS1i76Penwt9pFZGt5w7wWd1Hr3PUVHv2nnrN8n7w6xZXpiaYa7pDgidijdpJ9BxpHRsV1nG1FB8EvVCoyLT",
  "key16": "4zzebXmrtb7F1mQnmaxJwbrn2xeA9HrgeiLWqtxcY2mjLTKtpcDYLuBk3jybCWanuPy5Lwz316c6BLP8nDZiDDwU",
  "key17": "4SyjoscnHxrajVedAXezqatgKBveKtzPR9Ftrwa9v4skPYPg5hndaWA73uCGwrdePA3ZbhmFKA7LKZhw4ssUngUA",
  "key18": "2Lr1oaMz8NbQxtshPWTBKTxzBcF5LEk7SeXDpWoE7n9GXoMCeqyUJ96VsehNNQPRb5912xFkngpfBVw9Hmi5ptWa",
  "key19": "2abAAC9Q5z4FyjtYvzfNBLwy42QdhNv5WGgftDnbtrKkJ7Pgp7amvvF9uHnD9nXGvNTeHpJs2GdvssTguNyMS2Sr",
  "key20": "2JoSHiABb1tQiSzirGUES5BSLwXhyySZrm4GC5KJufrMnVZUztMCnrce5oo3FXwaoeAe8ah3vfsKv5wk2rwRdVNM",
  "key21": "656UxSUL342F6oFBDFjeUfj61tuezKrTF2CKDnD7v8gSF4LKF4tHw2ZivSMyRK5G4W6A7tiD27xQFVXBvBj1QHoC",
  "key22": "3nRqHPcbjWxYZiqtkjP2LCAzWZRuSWo37MTW5dTkmCrSHcjjmubjQGF5oLMjYT3JzP8NmWJtmCPCCyNqYNXnRkfQ",
  "key23": "FoBTsUVvYnXqPdbTkG7L68grq4aALiSwyemb52wGYHdLez8nWjbNgXngovCV4urnfUtLmTdEkdTrvK657p5og9L",
  "key24": "4qs637JQ1QvUuHYi7U7NFcywwYEhbgd1P8HfxWFyuZMLMF7PwUqfQ2N1Bmz7LciynmPjAfBLnGxTT8dA6bT7Ns8D",
  "key25": "ypo3y21QVQAWxfKC2uKJdFdh2EoPEiXLRTESnxs6zJgY9kf7BtWKDxRi234ugxsoEB5tCJYhyVwtzemHo1NhXqz",
  "key26": "wBZuxT3r1gq9a8Znd15giHCMdGmjjhHASEF1wCSEXpFR8dPLMCop9qWxNVqQxjbzVExWWRcnyt6NANgDnwxhu62",
  "key27": "GteV8PshRcWhQWCzmCCNqvagJesAAobqpmRVEsXKS5UzLcrtBmDD8ayzQQ8WjKBtZom6HxZy9onu62KChW5TrZd",
  "key28": "5VpyhVRPfXCV4DFjVTAzy87wkQPHJZYkr7JutW93EXZuHJvqePrEfCuawnmMaEGZkWB4KBkPpUwpUQjcYaCb5cMP",
  "key29": "3oGCKprW9kWjwPFxw6PJPGhbr1QAYGstpa8BaPFKftmZmeLgxi3VzQ6iews7TVdGRPqdHNebCAjzyXqtpgiBEeah",
  "key30": "3LngdoJmYw56aNFvix2AkAS37q5oYeRWY1HG1vKhTxB3jeHBarjKenpWnzSqRbH7mn4qdQ6ARbUVpFG4uiz2iWbB",
  "key31": "4VjPnjQZE6USK7chCdNszEKuMyN7AA2NCNcqHcCYUFpjSWNCGeuSsip7uVeX6ZevbCUsgGtQjBQyWLu7xzxWC2uu",
  "key32": "55jTkVr4cHDaoqNe5QEvzgss2bwUr7s4PuDyUpLwxrPth6Jt4kXRnod5pRRP1u8m7oWshyygaw76H49vGQw3BhEm",
  "key33": "3Bt7XBhEvc6rZinykQ8DAjUtujpGmEazGnDMKrQ5U49figaz2je1GG7gkxaCzakdQx7ZsyGr52HbbDAqoxZZf2hY",
  "key34": "cPMgGgQnGphTF173teue5ZVciv8jzLQBxEf5Aorz2KfcXbDQeTTCNez76nRnaVxY3Dv9UQCvas3DghMd7nsSipQ",
  "key35": "SGdX46V9oTRxPJVSFmpSif4ZEw4TwKL4iN8o9uZSXSwZsZ7rGTkzukifSitnPVcagyxUA2Tc3T9e6fGQ8uTi8mZ",
  "key36": "5u4WrLNPunQWkmi1unjdHu595FwPzwL2FwcM6M7ggnETgquJAv1KbNU4UtMYoC38G6Pt6i6sT776CB4SFfB4ysvi",
  "key37": "3y6HtDf2wsEWREoqsnRBieeV3EHiKpct54uCCvAr1V9VZ4Rxe9mE2tnUwhCztoH6w8BbmSwYGGnqYrN9F9KvX8tQ"
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
