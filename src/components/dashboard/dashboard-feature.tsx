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
    "2Nth3pMT5E5HL5Wr8ppJByWCkphgoB3k8sySy5zvCH18eEJ7ucHNWH3oDtcaM5qVYvg6xZPswNNuvw8avNbuvKrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWpghhzpQLHew86BLBn42yFvq34ByQfSAbQj9yNXqMkpmRN8VDx4PuA7DDskkgLKzhGt6Y9Toh1T4i36RVJHZK8",
  "key1": "2m26YtDhxSd3pbT9EVxkbDo6QntPSXUs8g1W8UvfGDmLngoT5jEBvfYFHGexv9x8DeWzd5H7kxaPENdUy291m8sh",
  "key2": "4bptmTW6ZTKRWxKE6z4y4vNueTXf8ac6VEaryeV31mUKobCZJgfvu2qimkLS85WD26Egw6bQ4d69SxeuDVXgfLQw",
  "key3": "5ngCBSAvvwDuM7kBx6o7jrpj2hhFVFRVzBinQ3H71o8ytc1Fm4bvZi83aznvttKdetEKskit7UMX6QG9zdJRPMXB",
  "key4": "4MxxWGZWfxSoTvF2uECcHCNouje1QxapojrdPfJSNartQzDAhNvky8XkPwQHpkVsK39zBYmuFDc57SM8YeRkrwkH",
  "key5": "5VGKqxKL1X9RPQATGutn1ma4kgTxCK6s3CPSxFpmhXFXA6gaFFpz9FifxNigG9yMPzzguJqNVUKiXqjveA6TUNzD",
  "key6": "Xv7pkTU3fetAmP7baJhvJWrVnbMgjjkHaVpoyWenQTbx1YP7pUiMUB54PiZnibDQpF6SYKdZcGBXcRTKSYZ8yt8",
  "key7": "3MyAgsg5A6HGWNPdVDRwFhexxTvbdUKLxCf1wZGPcunNAVkoijaBWnSVF5EHFKKD613Ah2ynsEDqPcSUUaHydCdB",
  "key8": "3S4v6hJbXL9jr7i2Be4BFakPH2V7MWi7UTiwaFhoTRjkmai3eTZbbKjxmkAgSdrVYNLTpuEV2FZRohAKwfgoyDue",
  "key9": "4KWFw3uDJ1KaQB6N4NybUKK7z9PtrNFki2thUeQbwCnrPxTXa7Jug3BETvYNNmrxkadNab3AgvXyuzZFzcmkdoPd",
  "key10": "WAsVXHtRp31oomynYzQMDrvoVCExpVbd4XhBdfeYSyv78CTtiRQCEHiy6WQ7Vv8yiThskX8z1Qnc25nhB1yJHnD",
  "key11": "2CHnXAUhEWfSmWPCUyGhBq63duzwTarLe83SVbDpPx2YENNvDe8VCzU33DuCfnqC31PR7cXvRFtshttPnqbrz4fo",
  "key12": "66bugBWSDQkbeLAS7FAxBjk6S8bHT3Fpwfc9WMdZQVZnrtvwhopYXo3omp6hjJG33T7SzMQsp9iPn7dq1owkAkzJ",
  "key13": "5WQo1Utg7tXSjQkxxoSkKUznrC11MW7FshsLcpHTZk5pqdVjN8gB3yKghuy3kQs2fXto31UfUJHtx7UqUYjH9g2i",
  "key14": "3VKAkmLHobTWgdzkG89SmpqiHnQaX4my6kp7ZdW578yWRTgQfVpkZNjwixkYP5FtJgKtJGvNgspv5mpyDJFQ5EeW",
  "key15": "2vuZH2uNG983yog3yLbq3Lm3CCECwBuJyBPd93aPTEqehd4FDv8zRFaHvogfqzVNedEWYq6nz11RhBph1LTbUe18",
  "key16": "62E8tDJmZ4HreeuvE5JxAPWsp4gGgxTowCuqpLMPwE4mZdQvzG3iuFWY33YZQaM2NCAQh2QGiDvAr5NfUnydtZaS",
  "key17": "49aNqzKY2vqt8AyB1XKpsbTb7TgzMkThxr3yT4uCr4p6viknM7Rx78M52Sk9sKZYUt672ZtfKkPY3NfmgCx8phDR",
  "key18": "3xfFe7vt9MXJD4gA9caoZjMCkHTSA7a9iw4q61XrVoxWd6WL3cRN2qD6s1H8PXSQsRAjNpzgE3unoL61cLGJf5ti",
  "key19": "4fhE6Z79342CAnmAi5JtURXu7xtpMpXjiJpCXdExAtcisHVvLgzGYQ6odqEg9ptnmpd6GWmeuzzAqVRUe7GTNy7x",
  "key20": "2poYDceHznD2hxcoT3xmxCTVpjosgdZQVFCFqa1RTvWQJLEQkgAcJ8asFhVPH2C9SYWMBGk8MwbUmS7BZEWahwKp",
  "key21": "5WjhyEXXdE2HRQMVSUMakkws4hr4piFvfXqELfAJjoiuS65DXKtmJFKPeKd6EZRJ6PQTwMd9om7jNRExHU6YaysA",
  "key22": "2bqpyJDEXcMPWDQKqGd8CeByVg5A4fkWt7hNExfc9TpE7gnssCkgfQfpBmKFXqsm4HtDr8m6JNSLmzr9K8nGHFHF",
  "key23": "522WLpTpKErKcLim7Ea1yS9gJorNpgvmLXtqAcMhVZwibp5kKY8mkCpDSvpK42DSRbRUxUoP8oM8VjJ6dje6ZTSg",
  "key24": "y618HJ4mVakQuiBkqdfcBGrQvG8aMfUNs53ReTF3cZSQ9zXx6qigs3PJzV8F2Ky84etk8KWEfqV3bshsZreoXnH",
  "key25": "3auuQLyBNJoM9L8fmMfMmK9zKsqH6yE5F67JiwH3FGvyxcf6a3nLVvGEm2WoQTK1qB9R7HuSb2wQxP6H3Ao467Hw",
  "key26": "31a17A6yvQotsDEdbvpod8xRWSGeMXVXfguthLugSaYSfcQn6YeK3cXCW4EgH9ZQh356cHNQQT7dcMRt7iFXr3to",
  "key27": "5S82evcb2n5j54FuSERiFC9vYWWYcR6y6Acbv7yEbcg1VpXbKh4ahsfKc26h2SaBtPkgXa3wTdTBFRtSocanw4Bp",
  "key28": "GSzMSfXp3sUdT8kofFpb1944vqTo9BDMeuKS5xnPM2NDnXmjhHxsmAZgcApASPWkgGwJKCa8t1q1EjFzKjSt3H3",
  "key29": "32zutRGr9fux6Jyw3YNPr9vB91371Nna6USyChnBotbG6LzBvmHKnU2SJJH7omMqrZub4np7bstRSYSQ3X3jmNuW",
  "key30": "4KZzjbrtfoKFohAo1TACxKtcCHKm3HKCMK3p7GzjQLX4qv3fTH6jt1b9KfCREcbetNcvDmpAzDbsUUgNSHhSQBST",
  "key31": "zHoWWpg6HrXFiFNGEnSMRAAmnMG4Y88KtHvGetXCqagPEo8ijx9YoWBLjMwfb1G1MvFubRvW6X2zPuFcwMR6VsF",
  "key32": "AdRs1XXbBTJxE9w3NqvYx8GArTZiEPGf8Q6Le1oc5XxSnWpcbZEXXU8svbAconGstPeQ26UvFRj7Sk82bmoRusN",
  "key33": "3TLHLg5eCJkNJGuPbAwim24ai6R9D4ffSbnKF9Ag8P5BFHDzXb2TZJECUAz22NFUiYe13BTaDnmseHhaXM57KQqq",
  "key34": "5YgFhtUdnknJn38RWEPVarPgVFM7Cmw5gotuWMkfzKmzuwavyauBpXHMpeWedpqLXmYGMKXJ9xQdc5KZ9XwTosXP",
  "key35": "3UF7ksR9dMcZ2cw513vE7sNgyGksV5XpKtT8h67yEzf6jjh4ZRbD8PQS1uY4dpvvfH7n7yDmqxFNoUZtT7hJg2ne",
  "key36": "3izFXXpn7WmXyNdccxkQqXkVwxWgM7xHrEhmFkykUcEhhmx6yxbnTZBTFmnA6VgVuKp1hcs48bELrrpTv9XqjBNn",
  "key37": "2BzgjwczTtT4KCNL7JDnQjGnUf3U2HbGQEnS3PDv62aByYUgzMUgpiTNpU8HMBerYGfqV32VgsJhJA6HNnhkeCDT",
  "key38": "3nJmmaLW38vK52sVkp7UeKt9wCo4oYpeu7YSDtCb7pmwPWzqLDhv2rXbyD5JGYLNtiaXZhED5MgskEn89kdefaDS",
  "key39": "FBCoev8EoHFB93bTMDGgofnHUhPWN7XVeY1TiDC8Vikik6t6bXaVDjQnGysrFaBxgkMAymeWs1mqxfhfMdDiLpN",
  "key40": "33LXLYCJ8drejgJjjYcrMo43Cv7Bmiw8jcEr7HencYUTcMDiEtcVPP3TaRKC89iU9nWSomaStMwShpZspwwpALpj",
  "key41": "2LPDcLPoKZWZUp4VUTP4DA1LCs8rkmk9WszWWyexUKmmPzeu7Yq6xvgFsYbjF3m4yZehFvbAJAe8KGstuQKVTiip",
  "key42": "2XYU4r5kqnRYcQwd7P5my2ht7W7PMug5ryS2dwgF6ndRrSBaybbqJ55DoKQAhmtGmaQw9T9hWL5UGAKWuZrH6Cju",
  "key43": "4BQuUr2xoWih2MXQbau679auepCXMmYxmTsXitxV9KpsJyDLBsfEC4cipzPvRp23V3iguKm9AezCLf5LrTKNDPCb",
  "key44": "tuYUjbisrABp3tQzud1CiQzGcDjmeWAPUxsGqsQE3HJirmukqQEEfWsxgZon6LFNV2cB5sjwQSPUhCtappQHWeK",
  "key45": "4JV9ZsP2AiUYQC5AtV8Le2sq4PFuENeHZ8fSEYtoEswNWJskzHPgWd1PQGTvYGEfMEcfAo7vVNh6TzKBeGddBKek",
  "key46": "2aUNDcBKLcq6UvTGEWxBs76UvKYb1xdiRYewbJta4jkVL7VAqjg7KnJED1xUyqvDeAV6taNcct4AFgXEHKTKCD6y",
  "key47": "4dEGygWdY5mmu4rJPWoEmUE5WWson2XCcPRoGzckTx3J8DB4NzMCyeUQ3MJ3miJ2meMLTqJJLkfYRwURCNksZAjq",
  "key48": "4qaogtHiq5AQQxfQq6FPg1J8VNPb8xDWQPpx6YfJxbg8Hgvrs9ZhCt2RwzjvF34v4Tq2tPQsaXz1JuEcny354KKS"
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
