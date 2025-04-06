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
    "24e9WXiCz1Df69uZskcyqSK8ZovNFiiG7LmQpWgCPWNnebTZietXKB53KJ6jHjuRfuHFJcro5mqp2yr2Sds8VUfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onFVUNgdY7cCeuYsAwyMDbhocG3jroJc97hBDJxNbpwYG9WjsgARMRMx4CwF5qa3gZrgLWn1aWrLmzvZNWdhLtH",
  "key1": "2PiYu5hdGbzsC8UCzjNbFih3HAwcMRrBmST6cuW5nELbeyr6QoXzFkKVWyLR8i4vW7dUDUbUFNxZvN5ZbUvvz2MD",
  "key2": "2dYFdjvMLzsNjdGdm4XH6DtF6kEKPEwdgRQbvyW3RMAzxRRCrR2PwSMwfEJ9HSda4DYr3mvMq4bWAPuq5Mwp3cYr",
  "key3": "53Yssis2aN7SRfskcFafgv5jt1KZL8wcZogqQovG3SMBnnd63HVsNGrjVpQE1go8mVULAwpJvWjEzRWQRafy8WFQ",
  "key4": "3uvi2yZE6ws8j4xMCTokSHFoaaSR6Et8gibtW87o2sGF8m1mmTpGSy9piaTS3aj9KGXvpG8x9pLwSHZ7gXNgw8Pk",
  "key5": "4b9S9Qtyy36xVvGPHXgwaeHgPXqgEYAxghjDm5vSLYrQnjqqEytkD9j4jm12BMYuBfpR33i2ZZXMr7kqWgmMsKR6",
  "key6": "5LRNsXkaFjjHNRkoMB11sqyvsWnC7ftrwhtQqS2kh5aFoWG5XtHEZJ8cNdUrkJd64GNwCSue2b2SPEBkwViE9YjF",
  "key7": "5NupYrXmGPKU8DXDW4UuykgzZiNCGjzdvRjHdQYZUF4ZHGT91wJGsGsG5XBBiuxN1kCcmy379wUU1eRy126MYW2X",
  "key8": "4W5mJmk5bSmG2UKVuYpkU6YBhncvjRYjNo6aR4GNzejHLop2B9wLGDLccmYiLGNEaBSEueMxJvLqHDje45wMkCtr",
  "key9": "4xd6MvDhMRgeJ6AppdbBgA17Lp7AmZ3KMNtCWetSj5HbtkU9gSbXQVcPMAbrJp4cWsCuh1p39egQr6ywDrM69Nzd",
  "key10": "3auiR6dFvNtTfd5B4P4f7gJR1cGJ89SGe6uPbexkrAR16xkBiXzXfncJJgVyAsTN4a6b8svM6NX6arjZASTrC1mM",
  "key11": "4Va3a3XfQ9w17a8N9fCM8jFvHRTq3JpLhnxVfXDeKcuY1JMysmkm2Kv6o3grkM8yPw8SDkcEPyFY4pyxUEkBp4ja",
  "key12": "3urdtV8qQ8DvNrwtfyxnu2NNNyyuLznV5mbgaz2NQZkxXuCKod39LmxdBiya8dTULAAUbaDbSaoVueoQ16BPZYn",
  "key13": "4CqCRmToLC2taJ1iaruxdSXgvzd8KgU2tFiDZ2jnFuAB4dqn9JemRbwbQhYERetvdkJ6w7PvFoUteGWprPeuJW8j",
  "key14": "3dNRuf4nsTQosgkYJQEDb5mUd1ezUn7TYHPXXagjTpXvBgkMfaoXWRopQrz7sz4Hr4VQywpgFNtTAmZNcUm89nMU",
  "key15": "312rWNA6VtzePaz3WtwT3QLLZaeL89VyvHZ1J92JhnBDq6hi5nHK5yYYuModrt9BM4UR29Lt9phCzTHehNEZaNtZ",
  "key16": "2uL3kjva4UyW8NzerNKDJ1f1xaxTBp98h4ydFQ3GhcMWc2vdPMcCvvYWQN2uAdQmjJhocsb4BBL9BKqiAoy22Seo",
  "key17": "5igqT74biSwbtgbzMi3YkRASX2GKJikoNZqHaoT8s2RVLmEEFUvayyCue9Vn1LQ69cnWQ4HHxMRgmUnW7Qi4Mko6",
  "key18": "4raJ3TZnfQKd71iLZSBon7pitKQkbyr29hVLZn1SUeik2KjYxBahmhcMjgY6EddwgJi7bCamsjYoH2527FLwXTYE",
  "key19": "5Hx7TS1ViWympM66Z67pcra4D3qYxrHdz2Qmh4ws5FvrBsPjcNAhjx8DBEWSjcxJHYZDTRK1hD4sc92AnaoWbYmS",
  "key20": "AyAVjANfyqdfY97zCLJJcwEe6BKifQLZ4b3T67mCQCge24arsuGgm7yR21p5hcqeCXj6u4zkhfSDStN6cd3DS5J",
  "key21": "5UY27RudA54ivNav9gvS3fC7vRxFgCuNSp4JLLUdkG4ZZjCvb5xrLB2ZKqrJ3Re1PcDiy831XDMj2n8v7PAbfsVU",
  "key22": "4NNttqTRtsL5wPcMMg6CELFGwncZv4qLYJfUd6hfQRgMAmftbk2mBor8Y65hFoBRhfw4B435eyiP8susMRMUi7Xy",
  "key23": "5qEDP1jL3mhmcrrAeStRx2i8CbhJfpRVAAW9F4Gntp9VtbS3BX38C4nRTAFekMoEXxJ9iDAG11XaP2ee1qbEfNAo",
  "key24": "4mrtc8JBUfXJLihkCymVY1bwm8vji1gjPmmodWG5JsevPrgrsMTX2X5vy63zk3bKLQBuBGSkatmijjDosQwW8xdR",
  "key25": "3vB3QVfmoFLNWdT4recc2fQBZyS9ov7173V4AffWLrpj7br1XvxMMzEaXKsTw19x1Lk6c8m7hD7NnzzuB4CkVmaq",
  "key26": "3aZtUp5L5FVtjUNFRk7wY2e4Wh6cDiYwpTg5bcSBMjHucoMKdCKC5oCUQ1CHhCD1jQ8shb55uQiuBvEnFXPd4Xgy",
  "key27": "4EpPH9xUJxrLv3srymmxftfDtEqbJH8CbrkYkBmVMeTeAmd9JksTogZureiEiSyM4v4HEkULhwtJhtqAhNESBB1p",
  "key28": "Xjf2oGzmiBtGeD8PBwrpAHqMTSiaS9gX9gJ7exHZ16Y9jse5EHqgBug1CBVFKv4VfSQNC4HZhwempUvarUnWUEK",
  "key29": "4eWN9q6V2u7D9whZjDVGn2t9YAGdZfAJPwbphq5EjB16JoZUujYLDUKV7myESCeyESyZABAsjwYRYUQjUScqaZRp",
  "key30": "5Wh5vXJHiSYNosCLhnRDLPiGZwDBPqKTpr9ts36HRFrXRdXSBMDarEWhmkZsKNs8S1PQ6eGBETNivU1NMQRJ6tAk",
  "key31": "4pcBmpXAzWQcdWphyEU9cuhPCWSTp8xxRY2nysSaDpHUWbSSurHKoKoBuJhcaZURNCUBf73E1QinEdyzPu46sCf5",
  "key32": "4yRq4Srbg7TyQEwY54NHdLZfRp9wimZEyK1Qj3XsPuqDgHuA22vcgyPGFxT2fYcHLEnHZqjp1GTPQymxUXAnXiNK",
  "key33": "52n7KoxqxEQCUTfKVwtQdAyjJv8QWpS8LzuZayFZEohRMMbdzK71CpmfNarA65WoFQx55xqPm9sTC3kRPM4h3NuT",
  "key34": "5bxCAi6a7ytQf4F9PeEmu4Sz1e4KdqFRkg65bsJthxkQ96K8GnYCgXUmyvSVGkpY5oRWeH4uK1wGbGSpX5qv7gyR",
  "key35": "3MD2zBEJLcwkBwZpdD8GpgQELPKNMHd7dSAxz365bEpqZ4aLNNQ28RHtjHPcgPv6W8prDmRGVvKGZCrG2xzFn8t5",
  "key36": "5zANnRLRw1B3ihvcZff97Xj9nuf8P1B9PhmEkBnA7zDt7TM6qyZosU59vAdF3WvjY6QAwRQAbiLLj2Ef9fZymwXc"
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
