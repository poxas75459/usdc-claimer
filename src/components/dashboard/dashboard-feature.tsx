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
    "q52YqKBUGXmY9WxeFNJMQKTyeqoA6zN1sVyPpv2SdQWXzxeWbTmuEc69ve2Qg7VodBRusoiTxSsuo1hJDDerHuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSJQBDA8DBK9bAS3aY5cNwiaeAAjoXriHndGvVGv9wChwq6zauw1DZpE2Wk1nuFUzT6aMYWfDcHZABq9CNxoZd6",
  "key1": "2PehVKE98nUm2igqZxdRpL4PYcmFY6N2TrmBm7ijEW9et8HX7K2YMHAJ81Wg6mmYDDmMk5fddxdCW6sByZNpA8ML",
  "key2": "cwomTRh7JqCiJ5aEVGajiSLoPWuainLCMx52oo2m27xqLziQtwaSwJZ3HQon5s8GsaiZhQkTWBahqePVc2CVAEh",
  "key3": "3E4d7vW6QvogtYH5A5Yip9VEHW5Jtsk4nMKnJRZ1JokiaNQEiC2cse7gL3cPp1wPxEBYoBeXepYR7pNCfpdqsMS6",
  "key4": "66o73qJazB7svFmRQZRH96nkh1EAeMot8wXTkXypTTjBuU5MAyZdh4CyFWm8kynebyVTvQzxYa9sprcpAwfMkZ2V",
  "key5": "5Rp6aGEFJ1wktXsJLNAbsDCh5iC9Ni8wV8dJDcd2tou6wPzcSp34hsz85KCGnhCheKceSq97DttiR8rASPY1Y4bs",
  "key6": "2MCyk7ivSVoznshoHdCQYQeVKR3vgDyb4ZToerxvFr26WLP4ACF9ji2tjJ44cgZrLf276CDJ7iok5NZ9diHQYya2",
  "key7": "jxbUfWACAG1cqrrFJt5tKxK7fxkZvJ54STYhbp8RcpvTmPWD9jTM91cgkvcv1gmufNXnRKEvuBTFQJhaHNRk8Sm",
  "key8": "CBv9cTfiKjt2scmpgtK2wHdbPhpa1KLk5UStuH6EUeHFhRR3AuHgp4pGZNwxVPwttvx4w5FtW1vjrRqfvx9KCeE",
  "key9": "29yPXpk5szrcErLMuwVzBbQDG6pAo21wn9UZkdsNFn4cm9MrTSfADvaQuyhHKuyoCAS4jSxdsoTWGmawfKrwXiFH",
  "key10": "4fGayn4wNCvbvhwvxq77eymRoKhBNXa1iwNRBLApkXPpGQPKDfdbxNS1RwQAZjYfnRcFKWcVwuNNLCn167LdYuEK",
  "key11": "NYuwje5NHpPc2setx7F6SBG3bAZPkTj9mP9hqV25Xs1NTgNnQJZEitocbtHtcJBzwXAnQ9NFixpNk4YhhNWkU9D",
  "key12": "3uT7Decz8CAN7J5WjcRBS2vdXQ28BeoHXyoDd2UhTh5E1h3nM6BaZnM2PEZLJnKcPEkmokhJeojoRqabWPyiMU4Y",
  "key13": "4BDEHeGePMwNnvpJ3j4R63hesvEipJ4Ytu5sfLPBrxptxHgHnLX1cvLKfvTwuGkEKwfvpHXqnbvPB3LFKRL6m7HP",
  "key14": "5g1oAGpoSXFjBMwGDxmJzva5z3YDYtxLCL81rDMfT9WvKDge4P5rKLKNtjhQcqgBmowZCVZJ8gcSzNUGqHAPS2Fv",
  "key15": "5KfgynrpyqwYG6GnEQuVmnrUdFayXubniDQGpWSSUL229923LFoCPh8jT76ZaUc3tggkNWYL2JW447ViqxLSAq8t",
  "key16": "4yF3cZhwsWFgsL2Tmraa6eJm2EmXpiM3ZxM8BDenytzPYvsTragg4PCCmfqFczKsSh8qNeuJwFEdfst5tsW7GCgG",
  "key17": "5dRiCn75RuuExKSCGytuH5oSGW3wLsKkK759zrXXBgrxtKVq9kNm9euT2CTKUpkaLxawobH7hTvCs2Pa98CW6fJu",
  "key18": "2aHBNACX8bwDrkhurDqBtXXUa5Z4LQoyP3VZFmrWcQsmLd9DgDzRB7Z4qXXFEgSEYXtGvBUd9mduo18wz9zXTjdx",
  "key19": "4gGhAPU7K7zcqHeTezsih22PcMXAfqA8Tk5iaVDVkFngDjivRWBw5DutqmuUCMcosr7jxQKJN7Zyv7EBe8YNi7zm",
  "key20": "2NdjftfmGDh2A6GJJmrxw6cyk6wsBX4UnnQnNqfdwWfM9fsJdCpu6FpfdC2vbAefsvJwsQETQYqYFp4DdgfnivzR",
  "key21": "7Eapxw9WqPYyhvau6boSxsR9Guui9RmZwjVn11SojRKVKTPK8Xa7S3JEPPSwnfc8M5QU61tEqPZ8aWeYxNgg5bM",
  "key22": "3cLTMuTDLm17TziPFg73SqkzDYPX7tVmG78eZQMP5GWb7A8LUKW5EM4vARzCJyg9gUnKRsB3rBysZViyS3mC9Tuo",
  "key23": "3o9KJ85mtv3nhQY15SHyXVk55d6MGgah3Xw7Ekqorw7MekA3A241fgiXvAUCvMZE72DhzwW6TrrDkRrTnRgcmMAd",
  "key24": "3QUkVggegFv4KAbudpgqDxzTQVeaCsxCjoZhRVyRfbsuTE2JcfjXjznCdXHJfnjrtfvFoe7RT6EH3nFHb4z14wB2",
  "key25": "PR2DAdGGaP5fbB3Jia67SDxY3C57ysehFvJVHEfgi7iFCDmxiT2cxA1p8TQLft2M1KRFdakG9SyqaH45JL99axo",
  "key26": "4GWGhTciA1BxJbsH6vNiVPRLCaQNKcJo5V1LueonpvKZXRvaUDscbSfNrifXgMpbbdRqM5xF96KsVVFCY4DFRZNX",
  "key27": "Zhbbr2Z9Ub4yzzveQd99LYQ8EDq5qsmKcBjATJ2tn5BNngHQq97PyLbDccvdYpNiA5m4ogFbbr73EPXpZsa57XU",
  "key28": "5xxZGA7XDNLeX1TbjZrRXJEHmEMsGJyDosbC2ZDeMh9bjhfsDpYp3RKR4R1oPAo1onWY743HSsamsK45ABYW5548",
  "key29": "MZyMcW2K1str5rfkcw2DD8nk2VMXEvWDwn3MNjUvuRd79EJkCwqjyA8j8RJernqxqbtNmmVB7B85RLRFhmy6M7r",
  "key30": "qfJJ7K1Vzby3rQ6GbamN9osUC88CDAyAExi8GgNxA38xnBHERjmJ5othk2tAU7vLCpA7Uc27c6E4VarwcDr5uZW",
  "key31": "7BGy6YFyY8rq2b7fCuh7jMmeMYfj4gCGwQSR93y9q9vDhstef8tyQ1TNZKPKg8wWUW3NF6F3A8wQigQUjBTMtUL",
  "key32": "9pHc4xgPEA4Bg64caBFbcAdggVfhN5EtNEr9mJCKW26e5SHAJV3YKt7YxeBL7KYekWCNv3gRHmhkD1QqVavofCd",
  "key33": "56g7DKuZJUBRsVg4JTrHaEuxkaVRM4qb6vDCEe7FtYnKySdEuREEAKToiBQR9b7M2wX3TRPijBLQmcKYbsoK9wWe",
  "key34": "5HpByidaDdwHdw5GHf7gaJAV31V3WaCNdWVmfXK1GQ1DEUFEukD4JtCD8YSQ3oPFSTeGse1FhGMcegiEkJRXKrZp",
  "key35": "2gERxAg3LbfBQfougkbyoyom7rAMccc5pLQi12oHMVwrrHtdhrxux1WHVPhXfE2SNiXvGVysGsk9K7RWzu8hCdYT",
  "key36": "4LK9DSYuTb3UqR2BB5AnM68mDPGfCM4uqUK8SMAk7DMYfMVVjQM6tdKgMu51PgdiPHRzfW4PSzsfwk18vjMRCSLQ",
  "key37": "33BWCRaJBBBADB1HsYjwub6VUFQ3b6o9M2B78i5DEe2SwB7bY5bdbAtqiPQDN7Akc7f5FE1LCKCZdWz6r6RatGcK",
  "key38": "28RnNHFJ9Rx3fTpgwZaceYaXjzHFo8auL5FbBUufuJAQEeYvrCUFGHpq7VjnzTEbD74Zazobg9neCSeYQrkDWMmw",
  "key39": "2viJpxx48Bw7cqRaoXsxM4cQFAD33PVqPmayr4ppomsPQ5rvpN8dHjJKbEQKxMQ3wFeZYsJex3zNX2FFYgys8Voe",
  "key40": "DhGqfTuuCD9Z2VPKGPrtzuRekEHhNMfHpfrS4gMxLBcbn3KtGK84tH36yEBfy4JP1HucEJMiXdY7FHqVLN3fmcp",
  "key41": "5iVKi1RJnFeuNVoBnhe2txovEkH4oGeaLqnZqeReko5APoM21fiuMZTEFLi7JtKbY3xRWLD9qRkaa44zcz8pZmPG",
  "key42": "3ahKdezQAkFFpJwcy4AxsQsc19CrhVxMLahNLWMrGwQZUmEAKwXm7joeVNZc28Myd6m7boFJjUH8TYkgjoRa4m8u",
  "key43": "4bbGMsxkAcvzY3A3xpWh6FtzKtZkScJHaZ3btvDP8fcyCHzxg2jLJY6QewtrSdLnGRquMTuR5hmvfL1fR1PFvLNs",
  "key44": "4FMyJMjGDvnSsNbMLAKuDLouFpDzM1gp1hDAu693aZELRTvApTPNiS4MMCNnXKQRQNPFKJBrxSTvVuVxqTMFuEhu",
  "key45": "in2W4ygNY1hgahiqxowDDnbqBZcwUjtHHc4mvFHb46ETr3XLdCbFbUJt67mcrUcQtK6HAK3AtcTqwvH7wndiXsP",
  "key46": "37oUxoQqXYRBC2mm44r5up7WiGVaJ28XjdUzs5sgaYnADWM87XyFdu3VayREjLRcf8btaJfamiRMUc6tJRjLtC5B",
  "key47": "51oa8xh3pK4EdfA9rDvmDAhwE8YvFf192AG1gUqFQbuUq1deC3aFP46FEyse89xhtGtwDXSseGfAAqSfmRaSgXeZ"
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
