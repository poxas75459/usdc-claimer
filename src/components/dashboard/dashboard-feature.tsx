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
    "41Y7cHaE376ZVDsAjtrBvU6xitExSvbefeiJ7QXaaRG5GxwAGQxtJskEFX3qmczUMoJcY56sZQogcY91trnknKox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CqTRSnXViFLsWEZJNAbKvr5MWXGvzakYQKFkiuaqmdkiQTGeVK6WyvmtexnDCjPygqMXxF8hWMUj6okMwA7myJB",
  "key1": "ypMRBZPyXQaJVzE8NzYXeKecVt2JR2cgnEgNv3oqtKPNFWhkghHps2PD26idVHfQu8GbX9rQjpvHAuDxm6pdrQD",
  "key2": "doaJEjDMpKEg2sqYAWsXf26JdMF9yWuUyFssL1tdAKrY92LCy8SwtnwKuXRPP1vtzGTJU5pGhzWWcj9SEBk8KT4",
  "key3": "5Wy89jkhWM6f8RBKTmkwciWDSNLRxgodQbRjWzyDRYfFk2LSsqkhZoEVuW2PQfZszShHvj7jsXKwMtmCUKCXCQb3",
  "key4": "4u8HUecFECjkU96VA2jZen6UKzdi8teh44kNjbCMNPfyNLtmMD9kyaC1PhQXrZc9NwDbfgdMc26AhRNfekR6bUYB",
  "key5": "oHRQNipn7KJSmdGWN4dFkf1NoHZV8UG1Lje68BaDeMKHhcdj7Qm9C9QzU5cfaXYJ7Sks65SwWJKxfSXQiFBtz9m",
  "key6": "5XBQu8q9xCeuNGCXN8xBFpG7zuC69ZiZScMLS43MAUyg5uBfenn65CPL6vTWhsQ2F7H53su9XnJQ4gCdGfuGHAcg",
  "key7": "4HdPgEkptxatPGm57UjAaxdF63xum2hN7CZsiDfL7TcDRQX8Mfo4voeCDJdveDaPs1ifERQEHnufcop3hBeAdggE",
  "key8": "2WvoUVftXYywMWxLiTGpDzvnywHst3tAY6jarvpG2r5F6TRfJf3hGpzMnQchPwzUeBMvBdW11JGe7vv9UsrDijyV",
  "key9": "245FkVzeBQycCSNzmxHwxWRmpzGMuicMX7gHj8RcW4gKEgZpa5TKCVyU3RiaYNwyb5GEaw27ySr5Lq1jWXDR8sKz",
  "key10": "2nLw35bbM7nY9BKxHfdHhXcvpC4nyqaj2G9F7jhRidqKENHUgovDb96r9qMLNSjq7EqoegpNYdALZq1ob5UNsSAX",
  "key11": "41tHfvyAhdHs6o6DuBHd4HMNLBAUNKWCnmN7dReWXj7aKXK5LYCgd1SjDWczymdSFHGoWtNSsmntRXBBTWWvUTpr",
  "key12": "31PnGsroNUK9qrQdZM8dvrnD59o87kZzZLJyMHzhMEHX7rW4AhJAN4Lx5rrHeKYxq2kbc9ErdscHhP3wKSN47WpX",
  "key13": "qgPAnoENfsXR137ACknrFhycGqigCT1WxSWc1odbx8LdfesmTVjs5ZHs3m4ciTwC9VJo2bEe3fst4hwibp45Xtw",
  "key14": "MtDusoG1VTqekCyjh7Tqiq7AEd5qXkCV3Sna9HnNFqJQy6x8gUgUWdGXcwej71d3MhShjwtmZu9gBbrsmxpv9Jh",
  "key15": "3U5EGeNr5wu74xCxzYD8afvk8JC9DTTdzjvheRbxP252JbxJ63hN5XKDhDZfJi6SAxqDfS8DpryU5excUw2TENjf",
  "key16": "4SyHFGc9SZzEoRqMWPQZWXfhm5FrPxcEfZNqnPTWJhC5TXn2feFRR364bAkhi27HLJ9EC62wVEY8xTTQ7ua1LPLG",
  "key17": "4fqckVycv45RNCzGJsuQkKT7CmyAYpP7ZWnV12HoWXiuBEFrqrY3w6hNs5Pnn4s98MxZLWWSMMdp8yZ8BDKVtgzp",
  "key18": "5r4PeNHK5WAKPQdnXyhHPQTEGDzXYQPJGgTSkQ1NcrCFPuzxEajpjHd7tcebVoCo69A8F3UFGGt6kHbuib5ZMHz7",
  "key19": "khTDX7cSgXqpwu7SMKs9puPMw1BsgqL9e43YVw1V5o4dHzUbF22vYHY2RzSmn6hGtpm3bAYEUDkRgTwbA5fjUT2",
  "key20": "2SSyJpaAb8P1pK7YigP91qVZWMGCzSmfDuMkRFQ777Z8TPVDchUtm1b76day8T5yL1cYrDSBAL4qGpudauEtx6Jc",
  "key21": "4jz9K3P8KZBQFmpA7V8caRP6yMGnFoXVhnh1vTk9rqb5U25ZqX7AmtRzvVrMRHL284P8Nat2Hd38tLB1yrK5595S",
  "key22": "54s3Pgb6EQuoJAomd4FKJ5qLq5CbKUi6V6LrK7E5wEFERuinNKWXyY4GNHYsk4jJy9ec16LsA3ZowSqweL7AgoEv",
  "key23": "3rp37DWMvJZHwPiitTETEThJcGfQkfpdQyt2kcASbqnKQJvYNXFHL6mbsVQ2yA8U7TzvN6ZebVfhMPXkkw3LQ9Kb",
  "key24": "3sX9qgGca8i1poZc6MCxBjRUYLtmNwfeK8DabXX1Vi8V6KzhVT5wbv5xs5wjjBcr4p4ipdf16XNKcDkP6ZKPbZYN",
  "key25": "4wfYP6HDMw54gHjJSDhVtpb7epjhmzrWxk3SdGE68gC2tF2iW78bQFu19Zu2vgesjXPuCFDDTHaBDU1uodfhYbiF",
  "key26": "3CMV7GUxT1ZSWWomvSWGyEPwLWWEiNsb62m8uzS8L1bcFki36qzosPTRm8VsxWFmPPgZkfJhqjVmpdhU7VErjrMK",
  "key27": "321e7PsnnH3xY67assWvpRx6BaRSroooHT7ggMNEDdn1d8Re28GYseEAV6LybU1BBvscngoUpGpZEHpfp2FtZ6cA",
  "key28": "NFDEtCF4qm3ARSzSF3Rcc3FEUbWqbSXmycfBkVKF2gCc56rKG9H3hL1A3pHxfeXv8VXGYmQcfHeMnBRqM8VFPq5",
  "key29": "5F4Xf4gB62r93GqpjYcHehKnaNB6PXYGiHRnVSNFaKTLcULUoLfAqTcbonPKJuPvU9sZ1ir1jnj7J88Sk4aXvAPW",
  "key30": "4SMBAsMEyF3AbUgRKyCAK5udWBxZLzuABA8dH17Pu7jG6qndPUp8ygsG5odtgNQgreqHQUmUQmxL1tDToxvmByNu"
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
