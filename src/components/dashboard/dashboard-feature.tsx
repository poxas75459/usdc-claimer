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
    "5qnpcmnexqESZztUKZDJKStRy6UDVyc8NviXftdTxQABDzPFGWjVM8TVkvxFCyiH9bYCYEMfvcBJ1Dp3MfnctLPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TmcNFKosZJoXuLAbCVX1v6xoinFJG94HGSGx4Rus59o35DJvYaHMsH12zumxd6do75u2dbq9TyUNTFoiYmcQdA",
  "key1": "3ctqDhvgqF78tUr6PM8BmhGWZTJBnpz6Y8xgCYvThPCJwLnJngM6tAa7pc2NrKC1AYC3DkMvgkQtd9Yt9ZPq72Nf",
  "key2": "5cErt82hRfPvCv7aWe6FZrkWifzcVMP4D6CgixE11VYjSL49VsjnEaYMfF5up4iRvuJSeRqQR2GTzwXcePy9chU",
  "key3": "5eJEZmbpd5EfV9wPP4f7B1EbVNje1ahGbXQa8FFxE3TRfgThQjB7bhCPoeZrxA29GpCcvR6kMRT7nZECg4veabaj",
  "key4": "4GcAGo6GRSadJNCgrmQu47xYUwHaa36gGzfTziL42kAoPkewb27SLWyk8atpKsrRSBWzSBjBYgLfpK7GyJHZUoVj",
  "key5": "4wxayKEkWNtK22rjnE2JjxnURyDhLw8UVew9Lp19NqnD4v9uh8kaTkinGxw9JJ7xiHsPU6h4sM3cFyz8MvdT1PXr",
  "key6": "2QHjNixAJKsNZgFGnDKJs5rf78Bhh8EG229w1mtQZCVED8G6Xf2MHURzofXVDvFm5KjSRbaShFVPHVDJPjvPHtPM",
  "key7": "7PgQoiGquoCQiCUdJdeazMt8ygrmDuT4fxDgadbjKcYSNpKq94HmhZLYA7784LzYpmHJsgQkLnDLiDHTKFNk5t4",
  "key8": "23UmiPwk98zuxznHHdTvdHyigmPVYobrdLTZBon4KfpffGmFS9e93PmZSP7EneLKaawpRt3MsXtJbdbifEsHVs6y",
  "key9": "3Ua3LAjjZkwzUUcNmYHmB4NZsGHsLVypmmzSxD2i8MpS2yj9muRyu1PiMhwSk1CneHgF5h8nRf3avsP6mrSFsxjY",
  "key10": "RQpjAhUxJbvfze5FQXf9ogxXMJDYJggeeCdDouwkYrypAiDKQu1n1ew9nrPe3EgxB1R9UV4m8LAv8VhUqnLA7Ue",
  "key11": "3UvQNnM1vVnM3fuZ48N51xXS9V2dcVPLRBV57St5TX6cjiZva82KFCuQfJ5cHwjJwLor6xbBa1xWPkaiPhJCx9T8",
  "key12": "3k48KYWeEeWvKRmWeSBiyT4ikE17WMGoG4q1NJNLpsxV1sampfAD8SjfBY8Bxe2qZ5X4ncu97iqW51YpcHQR7XTB",
  "key13": "2RAUUYRs44WRhEbtYfD6RVJP7WTED9BXWukK5jRLmPrzbQzDnc98NumCnc7zHbwKu78KVn5W77EjSmZwLgpY7c9S",
  "key14": "P84HogEGAxuNfasmpdwHNyyuki3wpbJQJmqpUvBhpTjGdt5YYuk1mUJDopM8idCgHNLpdSCuvBAtEprgzgfD5Mx",
  "key15": "4eMrJCMuiKoLy5eWHbw3jF7jiVQ3qKYfAPud7zSTgm8RhnLsMhyyVprnQnePFLvTWWUoeunTxu6HDQdaWydNa99F",
  "key16": "5oUU2coxGR5KRjYmkf3bs8LQfugSriyasQywEBczjiB6Cbfv9Z8VPHb97k3LJLx7DfYA1P1FYkakwva7f8XdaZ9Q",
  "key17": "2ba1fJchiV99kTMeTCFxEGv46zgHoAToD1CUhyQT6FoUqSgdH25LbL9ZfhHZK4MtZdtw9E9mBNk15yY2CwzDfTM3",
  "key18": "2RyyQihV3FyXEivH1cut7rZWjz7dJ16d7mKpiykJxwEizS6G2czhbBcgDJqmqMmSgkMVQv7geNF28xJ2pFSkJXiD",
  "key19": "KmuSqDuGNgWMjGgm8Gi3C1QJsJhB9xHEUaRMWWBLTKTMZTpVHb3zvf9gcaJfF1wmLTPoy3QPFLPU1vdwgtJcoLx",
  "key20": "qserXDbMpp2TqHhFm6JKWt7ubVfV3KK1LLYtd6Ciw8o2wByAAkwJz8jBuxq2T9CRZVbv44a35wZr89NozpWtCig",
  "key21": "59uUEBor8eMHNctHhQvALmf4vedKfLeQvqeLwGx5nTomHFsKixFttF62zdD8doSWze9Pke2qsZGnxQeYFX8FpKwo",
  "key22": "3obG9sRcfKjmzX7ui7xNMvdpE41BqwHrikrX9yEzNo5wnySgvsnzxXuUYyEmMVYEhy7FNQ2DMcWyAGkJ4Mq7mmKu",
  "key23": "38rYG5MgJLcFH7ZaD8wAhCE4DyNjuNjS2oxX7D5vmF4NprV3mMRJLJqietRA85VQKqfcr26UsTEmBrHY53PhzqAX",
  "key24": "46XVbjKvWZQQkjqc4PgYKbGXX4859C8iKq78T6ezUuCMuFrsJyrD3RjeXXCSBbFfmRyaZZmdZ1fmMaaT1nGDQq8k",
  "key25": "SvDobw8J3JZasR78y53MLnBmSJVvq5UELoPdEFa5TYcm8BJB9vxdb1BSGVrSGLAppx728dWDhhN7vYF8DmZtAgx",
  "key26": "5MKr511BCs3MmStT7wav8NCQtM2HZVkoS3g73LUafAhDAT3c9ekwTDFNJeA7UdN7SUWoTA6zQJSkW4JyFhxz4sRt",
  "key27": "ZCUGHBgmXc7NsDc7oKfonoLm31ZJNcF7LS7K3WcoBAyJaTswdHACgPUM7hAmgTpMofjM8kuxFLNSMw6b8SfBwTQ",
  "key28": "4jhgNa6L5GCkYQ1cYoi93bAcXM7J32c1R1KTi7azM9UhKXhkMTPK8359Dstx28kcBZjyfw5KX8D4fcwFoGj4KC4G",
  "key29": "66esqHGePh7WVRmqSqcgwe3qYpczjaBPAirGbZBV3R7wFCbrmY7K8NE8MMkgqs3upW67E1mvJ4XHUQipfkCDeGdc",
  "key30": "5x9J5RMk1jdvZwuYZmYXTQTMN2QgqbKjqPnLEy6eLjaKqt9ytTJp2ecmKSfZLFxUC9yDqjMkCykfAGqFBFyYbATf",
  "key31": "2ydpVo56xZ5UEVmywc4AfhDH2DzgNaHy7AQtyBZambk9PMwUx18aL8khWtTWB2Qkkx8aVYny9DHfpvsgcSu7NDtX",
  "key32": "3df35Y9tCccDAYJKADtE8q2LZgJa2tdStzbcMR1bSLHVjvQMA4DEowLmgVF4cHNqcbBAQGLssMzr3g4SaT53dc7r",
  "key33": "4nDyXdL74Qp3ZTo7QXiJWocj5ziwKBDr89zQng6V9AvrGpYCyBboXRq3mga1yQheKgmciFNewjux7YgwWYutmror",
  "key34": "RmveY3P8pn1pDNefJpup7ZBjELn92d3NC6xzoX6VdVXws1bUnsKBBgfJ13nZA58GzCfDuMksyotCteJZk3KbJxK",
  "key35": "2iXmdLPqdaZxzoBk2KNJqZytZD6yZgSnz6MdXtmZGSN4kaMsHvzcSkU4CQ2yWhC7thCDLc94UuwmdoMDcPycLzbn",
  "key36": "2uQFtGu7VxS4j4zgBW4AvNVnDtcqgGYP8jEBJaCdtyGYh8ExJvC1rQET16Zup8SjNV1wgkHdHTNmECSzKJfjrSUZ",
  "key37": "51S8k5ZwK86Pg97RqptA9JCpLmZT5eG4sRozi4iXof3CntJdZDc4ysgVePEUgiAGBNcB9jPbv4kVKUaCgBAcMHwK",
  "key38": "bDNUwByGiXsDeAh8j1BSkeR7zcJaewXg8UMHmMpPXrZVyBjfF7px3Z4fWzo31Zqh6YVUxsWWRybFEkmAwiPYPgo",
  "key39": "pNFp6VGCTPkkXTWC1TU3mJeTKmzheexgVb5RP2VD6o8yttVvNLVK1PuD7Kk3Mkt4g4pfVkyC2ktv9TNgsH3gDNQ",
  "key40": "76SQMgp89YyAGDb5QG8T8HzVVnQgBSTnPVABjn9iSpjXNpNdU7yRVZpbLNVhFCJHkCYqVbDQnGcWh6W23gAycQ4",
  "key41": "4s4HFecdxcHNqhWVcYev6NMg5jAYrCFRAvBpB5trPSJjQ8HugNfu3FGomUvUB72irviAjfuztSnHZCRZETawHcC3",
  "key42": "4WqBW5wNWgByUgR55uufNwzurWnbFyA7py6VSq52o2vBTx26dtFmQ6TkLeqnrcSUhj75aQaceVf4TbVZjRCz5Yak",
  "key43": "2Wo1sd39dmPCjs3YSuDQSytQvoS9vgXv8a9pFs5WDtaZTjw6mth16Q62N9rBv1LvQZVgCYe58GzjZfsUqWyXEczP",
  "key44": "3B9tziKLuyDtE8UuK4tDCfMALtdnd8sPGGxcayEpZDXByTo9BPn3vGbcvbSFjhyWfqsjPo32MZAmwYKUirYYQXaH"
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
