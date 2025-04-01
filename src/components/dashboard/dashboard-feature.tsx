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
    "55mwb3NNJryDDNo3rTRyNYT4EgKvCh2ydEzmxnmeMmpBjmLQYyaQuSqczfnRbdWzAjzBUQz9FAiVeLqjGyBrKs9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66F98PpVWD4skN4C9bdLjAd7XJcf1T4S8RPMBPMdyV9cjrBydXK1vCCxsrHVwqrL5fcbpvTJtuM4u8KnLqMxWvDU",
  "key1": "53zzVrEupyBn65Aaafqq9mPncdyohDH18GAeuGJUPyBQJFgokd63gWZa3RV7G8UFFD54H16QU9TR1Hkz5M4GHQ9r",
  "key2": "5B8HgGET1r9q8oqX8r3SA4j93k1xNpsWiy8R1YFDopeQVNbV54KJkvizrqSJ9P6QKyN14uLVJs6qG9gmvvxdwLXH",
  "key3": "oNeAcdzcgmcvCQbYVJu4UcaASm3rooLZQu8TJhEVsJgXC1GEdfA8Hq4CEcDYMBEFWKvTckpAUYW6yH8G71Uwnuo",
  "key4": "2GQfCbEvNddRkSRgutUucEWrupgpXLgnj2xGojKxeU6usVED4BUA8yeeseyrRCZoeZwXf7acjBaVpixvZnwLYh8r",
  "key5": "2iXGiYBUB51zUYVuqjPiAMG7H526Fpqm2fT3aDhHUWqZgYQSAMuXo93wyjf1raRFY7wSKnbsot6MYFS1rK3ELaKw",
  "key6": "99pFnjYxnFkvDG1QrYC1CwZa8uKaDqXRWGfRaYWzjpuLDkCx9LP1iXwYx6b2q8PCetSaqoGuVurcChxSsJ7b5z5",
  "key7": "319GiN5DoBa39Q2iYLRMFu2s8GEkNgWcCh7ryHLGG3VVzD6Boi17fkME6YdPP2SjZL48sdBsqzE3WPg4VCmy1qGB",
  "key8": "2bGwsBNuAmc6qsoro7CoYGAuzYnBCBH3vLc1itnEhvXR29HGbUcUsBfH8Ruh2DDjaSNEVjUFne4kjSY6iy3xbeZJ",
  "key9": "3DG4QpPJJeSY2qrLn22BahjHMrwLZti2gN78pAh6bv57xmCXSJP6PRejgpMD7ZtUkGbM9tCpVZnGJGAK7y3Ecjym",
  "key10": "31haeNHppinQ3BSb3fDQUaZqy6rk6LKzmf732Rxx4gt97JvogvnfbY7bSZZ5fQ4xaNRrHnusxfP8eqEsbNAsVs8b",
  "key11": "5oX7LNVpXY46t8op1HRCQCuUNi1hSBu4MoK2bV6x26SSAk7QLZJSGRd2RdKS7DwzoFjKxm4eqfZaGyacJgovCGGg",
  "key12": "4KAbuSqXL25QCDUcMSSNAfxTYspabw1oPSwVifj7Nr4AsxG8hggbf2U38QNq1LRU1Z41A82iBxZomBSCjJgVAZ31",
  "key13": "2QnKcdHhawJk2hccg7TjbsgTKwWsteQ23oDLsDX7MHyXywexp3aE2wQoCVFyDzCJ2x3w8c8P9uWvpupVWDjmMXQi",
  "key14": "4U1iDWk8mA6A4QjgtcSTfMWdaV5gWn6oJiUkGtLxNZyyzNh5T35Gi5Qt4XGX9orRkRrfM9stAkLqb7jA3KPupQW7",
  "key15": "22EUpNcM8irDb1jb1jsQzusnPN98HMTs5CKjEYGoiL7YmW5ND7jBpLNHcLEekdYFRymbKETSNQHD9mpKJgQ6EcrN",
  "key16": "As29FptuGnxECtUKwDKkZ7XzbNuWwETrCWMqGLvSH5G8hFXuRibJdcq7qGbBdRB1oFueXUNLH3jY6s5uCYNxx8n",
  "key17": "4D6Xj2xHF24qjvvgooW8oCj8ECkgnHbK5Z4cs1X91fAzhX8jT5uBvj7zTibwu2xokQR4zBxAicaeSHxNtpr1BNUT",
  "key18": "5TycH4y4ouQA4baiFwFkqeja7xkCHqErMnntkMa8gzcPdqGDXgwe16TasSa1tq4PNJEUyFM6YWnuf18f1gAJ9VGB",
  "key19": "39fHttX7TH6MRCYXXZCtvRYxubQTfPGF9gbzAqoFUVkt8DHL2vvB6Yqtp6DM4ac6VksJqowhDm3NppSzyXKMcK3W",
  "key20": "UVAHnFreha4QavMydzfCscKSEdUT6P7HuJKNwVw9Y567TfMPEAxuVyYcmTwooMmtFk9HzeVEXW4cjCbVFMNuXVL",
  "key21": "5cT6H8avPjrcHeUTADWXGJTPWUgoN96HGB4UkMDmM9oSdiPtufvndkvctSRhfABW2NC8qfiyo6J3YroxQvmbhxd9",
  "key22": "4G1e9vDvDMLMnZrSqADVBmo9NsDYHPR4pXgqdcamNombdWMNuogeVMrKKNNbYpuEsPjPyUkiCQhdvD4TSWxRbZWZ",
  "key23": "wyj9TKXCt7W2eYia2ykumD3qoQ4uSF17nK3yAGLGCfhAnjAabzg9yZUEje9LGb3hcCGue5T2bY7xStNZoZVre3q",
  "key24": "2iyvWjJopEE6jfvxBw9yj3sZtJXudYhhwuo3bttfQFMoH4Yf4Uzb1y5PwtHMFifX8TKrC2okmfjcNgqZaVJJ4Dwk",
  "key25": "2PioW9BabUeS6bQRZZurm5np2PYu3U9bw5Fz4KSbZ4GamuipjG3S1rfvmjJCXHwTDwUBVtqUxDB9aiHVv3sv9cZn",
  "key26": "4h53tJBahdrhZuPiicqacJzEKfBcJiXpAV42CGPNj24oJ9GoXLNUHWJWqAUCpoj3cuMQUtecNiL8yFA4B4kyZvNT",
  "key27": "4E3dcG58yUF7u1DdyqVBhdGsEMEU8A2vWA5xASPxoWckvLyvy3X9kbLpHSvM97Z69m2M7tWJUaDpEJF7TpRU62hi",
  "key28": "5FJtJZDnH3aBuDu6rB1PmQNud6czC8pPQxyJc6wgvHrZEknwBVEzWEsJed3Mq1e6eHtNozCAb7E7miAy77YGfiZp",
  "key29": "5oobnkKBSe8oW8GKRXbqvgyQgW15UexhMa9C1ArCrYbVdVXXGHTf3RfFiUudBw16rhDzxpxWjCecXM1EMKDWh99V",
  "key30": "2jQRdUnHnDnrSDDfEqWCQFpAMEPi7sdKFvNMUfrWivVRuPBz41xDwJfGzNM6mezD4Do3pkgiMEjuYrqr8PBdiwQb",
  "key31": "5sZPo6iyxEDR43nGygx92GuBHSbNCsH8864T5ic5kkuSzg4tZsM5DxPeFLt7Gpu1R1b9TdDy891g7T2UHNz5eLT3",
  "key32": "2b8AzgTFmg63bUxmxBDJP3aL7duCb2GLDgP7676Sn9LQhzkFHyAyeduVZNC7yQQjM3q9AbAHQ5yhLhAbbXyEMdA3",
  "key33": "44NGua59PRW4uGKecV2HiTUPyJo7mYp5Gzrvrzdow4FtPqK5mJvDrN4ceiYH9jsTXu4q9PYbuqjZQsFqQMx2JvLs",
  "key34": "5cfmBi5Nd5NKBAUAaqphqEEtPGDnF19eoArNRu8YW2RFkBAVDWL7WyJLpeyaRmWDaz1FMA2rrUiQj6uRJehxNcS",
  "key35": "iWEiqq8sxFjYMJT6iFeW8vp3QNSSVQrsFmJaxJQAobksq3HcR6L6DjwSFYGXgqpaJee8T6myX4yMQcRLca9WQ94",
  "key36": "4RWbRUGN9jGZAqeEexJkE5e4CNbCEuMMxkZSwZyC8rMxkzhC4gRXiCvVENAf9czmapXBqMmF6HUPQp2cz4oAZG5B",
  "key37": "66bUF1YTtJBVrw5KZkEBydwzXak2BA33ezs1qAefQQgT6ic6mWMNi6ivw5QxNgpFkrEW3Frtyb9b6WnBqpjUU6SM",
  "key38": "2ECdQdrtZzB4QTQFDLKWpiv5cE2a1fbqUX6pDroZ6MMVA6epwsJTHCuHatLF8zj26SJiNdH8FAUUgKHmp16dGxQ2",
  "key39": "26ssNF1ZxetSnxmKiimh9cfNDteDgQQPjZKj46BxRtyCZYobCyHuivx1b1jvWztjtmPVGKt4BvBdEGMrtu3KpEiy",
  "key40": "628zKxpfKgaYEF3jDAabPB9NeUCS2ydfC8Nwe6LugWkGc8mTN2KpiKWcyYBQK2YrrnNcuysWNVmT7mwjKHhVXzkK",
  "key41": "3vKkmGqLkDFwHdzF5xVNHZF5Vy447fDvjX82Hx5NqV6J3pdmSUw8kztFUWQxV9V9qch5h1mwPBG9KSu1hgpHdSXM",
  "key42": "3a5jeXcS35Bo4hQL7gZqiNu2ckyScN2N5QeQXgJ8zDhBPbjNptYFvNRBKHUfzFF3vveFXvJWZuCjUTtEHg26nEU8",
  "key43": "3TUar6eqAL9ymKAnRx9rogXsAVN6xfth1omrPVGmmhkz2YcigqnuucJQkmMLngiHtXSAjsKuCm2Dv6wFoFKe2adc"
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
