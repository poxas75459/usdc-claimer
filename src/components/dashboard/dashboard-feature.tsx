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
    "4HpFKWoYgTSniMWWWgFTAPSbZPGWHCtqZWKNjZLodJCyLHBmwtuHjwNKKmEbfKXJELM5MXk7S46ESjxv5t7eQbCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAuhakyXB4JFNN7NJM92SpcNPPgw4E4zAUNvmvRTpDruHBtXhWjTaGsURiwfkU7oavYBch5cqm5hfKWyziaP4VX",
  "key1": "2YniK34224cHBcw628J3JEN3WSvGX4Sj1ck5jYbAKcKnaCyNoEjrBzCW7MjJGi5eAfJHAGuuTo6BvAwc4sT2Yyuv",
  "key2": "4NcQD3hqJ65276U8bzFNrRNGQHWk5rWHTh9gUoYcuL4AxjUnX5aDdteMJNDPVjq3PGajdS4SJbsQGkLTior8JjUW",
  "key3": "12732TjGCFg1PFVnAU2jg3SzrYKURVkDEsGcjbbkRmA1pHHEAt9mYgMHemc6uAeUuAn7rBKtJzcGTst7ZhyR2EhG",
  "key4": "87FP9Do6dL6oU7BMEHTynKTgGHhwShPmdxdPABFo3meu3Zd9DewR4YKEuK1dcwVMVroT5n6HjdzxXuNw8Ts3XS9",
  "key5": "QirLoVgrG9heqKn3V5aQfbSqVvGAJbA9yPVSMhfks4gc9AAPz2esEM9osfp3CdJRA1mN2EYJkYMW7rUdqY5n6EL",
  "key6": "54isf4k4TfWhxYxNuTeWNMJWrUJXquZ7nSepJvBbEXsY9mhcyHRqYnSJ9EErV86dnfYhmCBLDFK3pavR72L4iCMe",
  "key7": "36TZRSNDP3GrEMD9wU4xpw1nbgcfPryj85UyGy9eyFoW45U63Twv2gZhXZSMo934H8kRJQSaCV3Net7JRr2XVHtR",
  "key8": "2epmRgCzNubPNVibjefXHBj8LXSz2LShuxjqQDDHU2VKjMLRPK8UppmKoA9bVS2BvkohUKYdc5qAikixQ8BW7Qbo",
  "key9": "2wREhhkVR75XVijpRavUQ2fWUna1cWgLLuwcjEHChNWSg8Lh5YZbmzcEATrnrs9S8fLnfTq2oBWyg534HEFDoDnX",
  "key10": "462k91oY7kdg6ApwLefNw1bR5tzTVcwvrUZPjSSpGfm8CTvemAQrZFpsU9fn8h4RVACid8W3GpAsmZer8aHXUfjz",
  "key11": "2KwaqBsGg8GMDaen4cs6GCY1eik4AfhQWCDtoLkjaxN8QmUYy85WYA9HrJaw18mQzgUEoyqZGg3jtH4JKBN3oVVx",
  "key12": "ouqbk2nVrDpFsSQR3Bizf3mq4exdVgCjFxwXh9U8sjeErkMzTjjxroFFRybGko8XX8tZG7fw2V5zWcaKN8oNMed",
  "key13": "5dLUKZAmG3W4e44sKn7knVgzqM4dp57BMmhx81TUgeqPpRbNz2ASxE4M9eQfABxQqBFoWZKTChgRMhonYrCo74qV",
  "key14": "3KE5UVaiWk8DsGbY1ia4ozmjvWXxBaxEUMSFobaJ1HJe35p3Un63MFvkLew8ZDZVucKdXLyx4TRRVL3rpM48ZgYF",
  "key15": "62JvcJQM67kQcKrmEVZ6cUPSNBqtN1ifGo8q7By5H4kFq7BJksabVSyAmTUrZseTjP9Ui3j66Q9xM7t9aughhHXD",
  "key16": "3jaRk8dPEeiV2VgyPcchr1uhyuXZx3LpsToZujmr61RXsUZiMsR3QHYVfVDXtapkdA9Jh94ceyQ9dnrgh8P5tTFr",
  "key17": "56FtNcBeeE44aA7pZuuh3AB5vY3S73yS5aMLgudypbacQ8LAkBpRgF2Nr6Y3627gUjkF8vEs1xk2mNXqZu7oJDjC",
  "key18": "4qcyZ6fEAnTnbAyknxZSexCg2GZ5T5fc9DKmrbHdcpZYeT7oUgy6pgzLuUYeHCyunsMihTAJr9VfLpsR8p8KLUpD",
  "key19": "5rYgBFg3iooEM92RBLVSLsSBAjntwH6LzQabx6wG5EhTX6z49eaXMuz2fN3qAXjFbgwVZZvDbaJkVjwEuLaeYSqL",
  "key20": "25k8XfE32R4CooLLotAkD5gRC9wcPmqkLXM91WXLismAXkN8HHqx56Ag4G8zSDbStufpj4k8kCCKHsPqbUHsNdLy",
  "key21": "4yw9CipMaxJUaBcYWsSmvHgSvD8v5DvDcPSamQiCvUc4iLgy8GEZrQbvx97vFSib4dKLcgCWbQP9Vda4KxVWobHh",
  "key22": "ERkx4mt1G6qxFm9Df39NuNAgJT26DZmQaNntM3HqYQgrfHqxx9mxsAJAyu45cXptuhTnYexCxCxtj4UCcjLTC9W",
  "key23": "2gax6sjpFwST3mDYegz4TqiSRn6mccXMpC2t6bck6K7Da8XQqeHEqH6RrtzrbUm7Cegs8Yo2ncYWAYQteQVFkkmt",
  "key24": "5eqHkfe6ir3CCwftBFNoMGYq17WvoTYzpHEHAGVk7CFQ3mtwU55StypqctfnNR8vfRSTRr7Yx8LUw9yfH2dSr7m",
  "key25": "5SY1dGJMN77Y5kekdZBqG3HuPgdtejJoYFQgfkiF553sKDpfPcT1TqaSSDjnhWTMEpBk5BWytnNa3SNrp4qW7haS",
  "key26": "5sNEjManYSCDXsLyBGzvys1P7Rr6jRukh6GbMmkXJXVPYDZRDTZqtUvvFv15ewgj2JqNggM9RKAdRNaEi22mmExe",
  "key27": "omh3zBh173hAGFzkNAx5VDZed2MBQyLnE4i9xtFLLYEwYrjXefm49N3gURa81b6oWabe4TBoZ2KpTiJRap2e27e",
  "key28": "46QzYRsDBNsTZUctvXdhEBGtPsg2b7fjGFuc7CqwhXdFavhqzc24cqXpbn5w5QGDtP1LxdhaNeevouy2VMVboPpb",
  "key29": "46vyK94QLu2sR5n14kYVg7NXSnPLTv9esi9R29KWGwUgNuanw3zCChKFd6hLjtgyXtv1QvK23AdSgPXu99eHk4wu",
  "key30": "29J4ZxQsArtnGGeWRQFp8y6e2GbqsT5E9E3JPfEtNECdnTBSZu1dBZAjmgzMJPM9GNxowACr4dHi5Tuwxj6NHEtY",
  "key31": "2LwHiHsbQY7qBdUviVwvZ33Fp1XR931TqeBQXTPVohfKHsi56gppwQAmTTAn2sDPu5qYGXyGdhtzKEnxhKy16dmK",
  "key32": "2gqR6cxAC7ubGBiSyd3zpsCeV6ziMMtV8jxxQV3qjmna1gcNUqsdRF9sSg3fS1iynkPNwuXt31xuTw61MdLhqJKc",
  "key33": "BAvfVkuoyuRsNcETWzFnzTDX5W1ZdUtFy6szPsMHNKgfvA78PTwmf53JSXVHjgcwNKy2DCj5qgLrrrEgW4DhFKJ",
  "key34": "5iqps3u8UjoXmfFSE5JP4kcemR5SEF63Notv5rLGYRzciUoMY6s5sk9mg8PZhF6YdSKmwfjWFGM5CYiQF6Pd3pBt",
  "key35": "5k8axTCeMZdAt4A1KwcP8PAUTgmyLMGarFPbfFEAghhjj4CzetjYLTXWkznf6bmHgNaEmufqbncaBBZUdPh4uTp7",
  "key36": "3AiMqk7HUT7VhdkwkSwhGafBYkqFcbJCpy2ufgdmEixYwmgMKjh12BtL19HjsKf51bJCmYvQZP8SHPbj4L5Vg4GC",
  "key37": "3c6xCXVsuZAfcSs5kqQQEopB4BEbpPWkPo9Dn8RWvs6kua8cnjPCVyCKV8ne6V1KmBuCzRXW3g2HL352FNapyvad",
  "key38": "v3u78mVqckduMg8mP4zMwovJjCodas5Tbdj5b3gza2A62nKC9uKQRCK5UGZo65GKHdFhGRk1novaEvciqEJWwHd",
  "key39": "34f8VaXtT6J7sr7qGhADt7bd9UkcvyCN8K2b7Z4MAmsWvPN6iZTGiFJ3hy9ozovbrxrTDeia8uweQTS3Vm5NsSMP",
  "key40": "4BvPFbuJK5MJu4m6iRMCN7x6ebL3F5fVw33adJMRsYDcYjEEYs4NcahzB53QDMYJEc3dXnKZibXX6YifBHzhkAhh"
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
