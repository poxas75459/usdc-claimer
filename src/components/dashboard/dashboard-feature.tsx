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
    "274PjUagKWChqG6NjoghnWMNgqhpJEyFof56jpEfSdBpxrHFzijRq5nzhHTe8eDdZwA9VjyF4bRXU3Wb6gTXLGTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vNwr7M14ArNzaSFsetAazVr7sMeKarLg1tNiCFjiDmcTWLfZbFZ9snk1aQEc77KGth2ricEzZ6FuToaH6JwR9TW",
  "key1": "QW4peq7HrpJLYXZGK8bvju1Z6bQamVa8KJNebEdGocZvBZ5MrLgQy3Gq3R7b2nMYp8EBm6F8u5noKJey7hbcoMX",
  "key2": "35ViruXtKpGoB6bUZ2WJpsqgztQU28Wk7Rbep4m4DYevnfb41irKe9A9jaqB7kkAJbasQHHmPcKCMyRE66ngxgtG",
  "key3": "6UUTsdtYHGuZuoZpv3bSJjCrExJKVEEE4auMMtPXZuU5yu86JLBWGXYLvZsezvBZRGuKmb4k4zV1hv1KhJz6PPr",
  "key4": "2GYir9PehVMzM2bj1GV9fzEkiUNxTipfLJj5WoBVWKMMCJQk1V8WhVh6yrpwAYkdVJd6dijhwj4rdcaHMqevAdK6",
  "key5": "5dG7sc1jGj3wfvPqt2cRUtzofRie9ML3ZfcVeKWThYYZo1ePUwmUgK3anHq7Yo1mabS3keMLQaAn4WwaN8aQ7gun",
  "key6": "xgPhC2gWrFKFKn3WjjmrADudMEW16C7HTn6zL4AphQjVbyYV1sNz7cDrZjhFpDSAczE2Df4SDPcBsagHwpfuNgb",
  "key7": "SwUTb5iTGe72eBVVZ2X2bGECSj7QaKvm9Dwd3kNvpkcpLi7exG94eSod6jdVutKk65wAA5H4isgZCbyxcRZLbF6",
  "key8": "4ZBBhmGSexGBRoobpB6gLQhEvRxKoT6tiEYqVsr1scj2jiVNYAkup735Fk2tBVcm7Dm2no8GTTYsZ9S61hUupypT",
  "key9": "3rso7AaPjVTeFWDfLB9ndAf5mikZSiJYCQjtN2yJTvEujztnES44cL5yr2kJAbi3vGnDaWX54q4y5ji4s5r84pYK",
  "key10": "5ehMi9iLr8GHmSHAixuNBCViJvzTkW5Luj7L3umctUGiYYetBQLptaTQw5kuWn2mQRB2BfiZ8sVPKc4CJSQjJ3gZ",
  "key11": "45VaFvAX5odW51vKthLZamSqsciWBLiDRKfjHda6E5dVaV4QpcNU5zrk7gDHLSxZ1LJDMxUzTRQBEACeUzeMuiuc",
  "key12": "4UWYaGsmPQqh8XsnEgHKoGjyzLfSz2JmNMN8hH61SJKjE56WUtK6JHNhagbbE6zvcfseXjGuRpJrjbwDb8mSYR8m",
  "key13": "6SqVLZ8nsZevDKr72aSRRc2H3mr1tmGXwJfz5N8e92EgFcDs3u3CidAgLBoLjGLqZaZd5hMgxRWfWCKVSsQ5dW7",
  "key14": "58B662aKq46XHmodpMSYchnwJ2VutQzxrEm8LmGmt8xbcbkvPsZTTST8w7FWRK6dvjZpraiQZzSLzfQy3pUVEUYT",
  "key15": "QfUvwYvFsm7x5N7R6dmkgiiANBT7tRQhGW7D17Fj7t2hdCvA9vxKwfYFqwBDemjE52bDemZYf4rNr3kseqwZk4n",
  "key16": "i422JWkCyDibUon3PB6wQaE5VtuhCT4cckZZ5MuPqoywfxMHK1baYfbdSthqEpeK9Uw9FeXH5AjRxJxM68r566p",
  "key17": "gNx9whqrggFVJEhMNCnAdH5qZ9pmRSnxVYLJVXz1PHyVFs7rXTEQrH2gxK4Z4L8oPR1vs6stDCXpoFkwvnwjPV5",
  "key18": "4R2dX3egLmxbCUVMnCAKJevsf3aauYD79UKYD3gQrvBKKj37mN52FHyo9SfxzJr4b4Um9eohE4f1HYCQeWv5PVUD",
  "key19": "5TRcRBTK5nwb6NZFmcmaZwn6Sysnpi5pGjs7iXD2rPhxjcjHFHCRaXpmEbAiXwQK5TUrJRiPAVkmeDjYLPdQ9vnL",
  "key20": "3haFiQ2ohCHwLu5rpSuC2er9yUzcpWHQomFr1fknBxLFWqwEcZQafmVGKMAbcUmuJCoDLtzNFR2RfXkF2rRrB6EN",
  "key21": "5LsCBZwJNXZdtmt6F9eMtwqq65MjvcC1c1tmTPBvA9uPphbbRUJTpmncmCC6viBjMPTw1yhoDd1NQiVQayc4Q86L",
  "key22": "3WzN2ru6cmg45Xhbh7uKMXWbQaSMcwo5UEpSiDwf9hL88KZq3RxMCN9nEZrgibAKdr9BrBW9Gz5Da8tzhRVfgvwp",
  "key23": "2EBtDHznBEY9HRmzs4vUqjobaJ4wv5DQgyyPF1tQzkJ455X5hEBCjG7bWThHr9bAeyF84gyi3Xu3yqZ1PP7wHySD",
  "key24": "tpdzDS1BC4FfQwwYJNy7amU9QMAnDZHJUsRdGQCisMZLwRX4ny8ZW2wMCLQc7Uedbn9SHTSZHKM6LhoKtFFtub6",
  "key25": "uAqQ98HfPjUHwR2ge7i5E1NymdHjWGgxjib9XFjz1BmeK1rSRiUnNbs5CJeqLS9pvKbPHkNuSA39jX7FYmBV2UQ",
  "key26": "4KENBvPGbGNJ6k1GUpVic3gANHiuhCGKvdvE51FsnCYbxj4SYvs7BRGu6zbBYgX4aWoTZkzpUcumbrVc8rebmFnS",
  "key27": "3GyH7ugcGqxZTkV9Afe4pyjtMfRNw9eNn3EULUDzRc12ebEbuNLfWExefKjSTLqJjCoagvG4iWpgBNuNun2kAhBc",
  "key28": "3XdqQYr3NJfX5ebNzPRZprGNJw35vRUB9M1sMYbwrtrexuboV155fYQk5Xpyn15faFemWN63vu8CqcrXmCEAfM1p",
  "key29": "41SGF3LrM4G1veri8rrfJdqePDHBVJ4Mtf5Rdp1Yj4453tc7auw25wzLeec3hUW724bhPbDJ2bit3wBCxt81EdsK",
  "key30": "3XRGWKYri9pzG8ErDPDmoUDBedtWM7sHJzfP5u6Hxod1rba9ooeztiM7EzpXDG2pxxoaQArxkVJA2rPfvUXYHYAu",
  "key31": "zqme2oHTNFgVGRE2RLR9MtU3eT4wG19jq1d7vhpmznhZbDGyJMJ3QbJGEKFUHT2kkAh6iFouPrHKL2dVNEamQKX",
  "key32": "3dQQN3BedzigtNy1JkqnBUcK5NSdieKyrLS7JhfoPu3VeJtMjysUt1WcZo44WncXPoDkyvXoT9yBwQRE4h1x2qsx",
  "key33": "FhXyW5VmRDyGSngBpEntV1kPJXSqT2ztLQf1Cxkh4uZgkWMUqexqtDbP6pvPGn4R8NKvLwTVDe81sgsZgJMkdwr",
  "key34": "2qDSDLfWLJWUnzVhogy9RmV98WK93zt5YVZ91P4z41Nk3PMEyXsWxJmb4VaY2R2svBRrvQ9Rvbxp2q1bQQyXvehQ",
  "key35": "3BCwUHCCsVvRr82WjSH6ABQJyEKUa5F2TWpWAL6EBf2Ge2GSsiDEyYYJYbKm83vshi5oqVkmBpFxMfPC85Q66LEW",
  "key36": "5iaUfm731fjKaGoPjd2zTnjZbTyVhdtCNv5qA5dL3eyvmfe4r56Q2GpX9MEDnmWoJ5a7q1PLEVeUgfJCTHooqSB7",
  "key37": "5XduKXoYEZTXwff1N6xATUKhCCU1f6t3YEb6JX24UUPnxfMfVXydTt5tcbJdCJKZzrx2gNCkwETJgohe4ih9Xd5X",
  "key38": "VRajyshccW2DAtCPr75juzPYJHqt3aohTE3EE5yoBJYQ3aTuoAxWzRu4SanHiX7EShMwcKVBmJHghwHYkLjn9df",
  "key39": "5ytW6dFfvVdN9rJBFvyaMzQutBZKeLUP2ehBb6qUvQb2rSxjbaz16n3BMZkyRF4khhcZg5kfC5u8TFNYL49hHSus",
  "key40": "4U1s8t493srYJRfbED6YLQaaotkKQgDiJUApT1QNFMP6rRwRs5e3zYJP9ofBPmLYeQwa2E8KxtfFFVGwBqu2WiNN",
  "key41": "33tXpHkjQeJbKdamPB8dxxcHws5F34LWZnhS1uh5vXP2p8fi6krwACECnbfEaB4JEJpSgeSgvhWk1QPHzAKmUSJz",
  "key42": "2ug7Mqs2u7hTqrpLG7sU14fi3iGtv5fwVNYxPV6jPBiqm8S5hMGq8esiLBL9S9FzMkjRAuQLzvskQaJrH2orMSaB"
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
