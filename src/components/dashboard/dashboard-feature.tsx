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
    "4RvFQxSJ2GFa3G5ZEAD9nV3Sq18XUpTfeznKvTL5cUkjb3f4ogakDtqbppEMT8Y4raJrVG5guJNBeYG3j7hPtSbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6RoPDDPwsStQmCtnxyJPMx2yvnHTsBujTtxwob1D9cNLJrfSE6XpyBdnGiQM2tXnGmbFCgQMRNxiWp37d6FWMt",
  "key1": "65QDxWJE6snQXzHD8Nj5MKNtVka86Db5NCQHw2ghWho9ucc1hufQ3ieWqBgTMVZh1XziKYhywEEnLrsBxj8nzcE3",
  "key2": "3uTRLQYf6APkH6KSp9kUK93EUERcZNA1grApfeMDSa6kKWJYeFwuExBtc8PbfVrnMS9VD3ZSuRsaGLvU8f8TYxZ6",
  "key3": "3yHk2mpUzemuy9uHJMgCf8JTR9yqR6Q6nZ4G6kgXuMhyab9dkmQSxvoK45fbwaBzurecpQyedfPR7uYZkKArxzp6",
  "key4": "5inGu1HTra7qrmo8tVLzGYVH6cVa9fsW2mzPy1L4AaU3WwLXfXc8djrPDzRwd31styXMV1ntBPdEKNQZysW8XfpN",
  "key5": "4P3ou3amCjnFXAw8xu5WtDdoMmn7ksBTzd4nuL5nvmdhBjnVh3srNE4i5547cvikKSuBbNpyTcyNycLubCuhey7E",
  "key6": "46KkQeW6eFEv7FjzFRXBh8u1ygC5BFFaENysvBuF3zyw3iPXtEcmPR8vVjdgxx919aBJnKVy8gNL5RRQRJVxM5Sh",
  "key7": "36PBa1wVjTurmGZUMDRxx9MeyhAj8ctHNqpLApSMWhjWqE4U85Csd8DnxafvqqGMAZosAPiwjAQhKshq842RHKRu",
  "key8": "7CJ3qpd4S1LwZszMpkchTx1u3SFKxYyXWDDFh6A5GsnXxYJEsPaGTTyGaqxrCtoZi28xrxkexaAfhTb5aPTSmTo",
  "key9": "3Bn16dyvBLEdVgvBvnmNFCrLgsCf6hKEb4DLL1Wfjmkjx3FkHi4etTXsJQ3JL3Z7d59idap6CnvbeaS3NGk4hpJc",
  "key10": "5dzHrqRbNeRDx4uWbkVmqJiftzxFAs1c76LwQQQcK9foF48SxbwNn9BipCgyDGPoquByVKb9sqNpNzgNUqmYDGsq",
  "key11": "3joN46HpSrR55TzfBwtri5HuEHLTDJWEdRWrcxsDzZz8Dsr6VXLvqReSqUt14bn6swTzF2GhTqG2QjK4XLV8kxKX",
  "key12": "4AGWZLpt28gKzjxMgkV6J1d43yYGvN6q3MTDeA9Go9xf3WkLmjjH1Ks6XVVjAbfDNQBXxWJDLH8MyrMY5wLHpaqY",
  "key13": "388ETGZ598PcMfjHdK8uQjd6z1xYdmQWLt6yRF8ihNDG2phvLh3NAMZGdgHxnD8WpdoKbsYi9coj3bUxbC39qVb1",
  "key14": "5ANiqr5gbPKdGgCHQf4qNcSeAmnGBLnRM9sHRst5abCZjZ2z3yQaYPRh65RTNjDoQPoEk76xWzDjt4cw6bY1Wwau",
  "key15": "2SZKkxysBzUmbjXTSNwngEYaJUFeX7BtB6fc7qPqwou8zvNTTM2gWqLkS2A6DKABRcni248vHQG2MrEoNUwkiUnM",
  "key16": "35ht1VMzfnC5nnAKwvz6LUbWapKPmaQ1eZUtLyRb5bkpifngXFy4fK77unmxaupXCNh92ZeALkPC9bhofVBZ4TpM",
  "key17": "3zzm8q1dnfGg6XKrX6aojrbaNo2EJ2e9fgBksqz9XkLcXQPm9wD9oTcPoKBQJZTzJmrVU2K7N1TqPwYuWBYyuhf9",
  "key18": "4Y4AKCfVqTHPo6gnfKkeKK7mM1F8Y8YLwvgtCgVwTG3sW7XBkFYi6CYbveMMpGPLVnVqceknz5kNSKFE1D65jRrG",
  "key19": "rz4bYf4wWfEKSzgDRBEe9W5mb4z7vdYvuBFQMYHVEif9NmDGLgn1ybzJ9rsnEtXwMcpBVadZA35hC9jTNajH8To",
  "key20": "3S5QpbRRCaenELvy2hmTLdgVXzoWCxgCdH1eQ9FLuSpmRRnzQJA9zUUNCJ1t3ZKuxH3eaa9ufuwDEVjy2feUWUAy",
  "key21": "4oDPSbVhCXf4t27CBVsndMkfvVT6JNjWzHHn3skB9bygx7J9sFdeADryAZ6a85kp6qTSiDi5toGBhtNeQDYoCVbi",
  "key22": "2rMxFT3bYKeMHn9fD85j7pLXkgpfBKWzqN7NgvxN8Zv7tibagqa4b3tZb2RN1BwkNwzL5sdMBRRQos6hLwkfJF8k",
  "key23": "3AF6A1ygxXzqb7FN4krCzMx9WBEWGNFKFzfKNJx59vLS4MV3PyJzGHMckoD9DNZ5eKTuvbTt5EmhFLT7PVK4m4Vr",
  "key24": "J6mRt2ymh5Wjecud4LBfxRHjJ7rE8eBmkpZKoaRpZMLauieYJkgZQb27XDn9eFbUQmCxMs4To3QbvRXhG8p28k9",
  "key25": "4oGQe6PCkpt5MNVE7L45U2x49XG7icbRgdDG2EzJR2LegCpWaBCLBoC4f3brutqHcH4FvPD9RJVytaRtuxGGNwsE",
  "key26": "2gLR3CZgi6FMFJi6oX7kr2qYGhEpEWsKtDjJjCDM6G1N535MtJkp6XReKjjizk2JR3LKiSmrPcbLi3f3WyYdUejz",
  "key27": "62Zk7W5LGG7HaWBwX3pZZD1CH9YR4HfpjtFp8kcwm8Mmg4FYeLYyxQDabgEf62oAkwy88bSBj98SSkVL6Ec7TjYY",
  "key28": "4wyCodruhMrdrjn3ThuT6YEm9ndxDfzEuzJPwhUZab8yA6hCZ3XgZkJpmRd5taozk6UZxCuSTw4Fu6wVxX6ZC56Y",
  "key29": "5P797CFb8T1VvVY6SLkiu1rVNgaQT7X9Srzt4pbtAs64wcWV6V5zYRj5VrqNkySZycDxvuE4FvqShrpZxwtMnLn9",
  "key30": "5bzzAkczv3y5Y7bejQi83Gj8YQMFxh5d1MGrLxp1W52fWfG6c2CJ9mWyMaG92Vz2d7D8jdDyPzHKDVpu45s6o9uy",
  "key31": "2BzUYodDrhE21ShTH1RTzgr9dkbW4ZihjRjvPGRqQERZwhUYGiEUthy5EifanGwXuk3VrqVVrHPZ5yYaH72raAb",
  "key32": "5WotvcFeCEDboQNT3F9fQxsfUMRx2yBhVpSi2u1EhN1gYAuodC2jEAqwHsRwxTmryJNzbXapvFrx5MZzEqLofXwJ",
  "key33": "61fa9U9pYJhpvfFSLo2m6mRGH4Xz6ufSFFyEcSmahDkyFyHH6HbnR1kBf2jmCKDktDVx35Yhk1CnTiGuthjVXpY1",
  "key34": "3h3UkjY44AZcuNprZY4gMRGqHN8hWxR4UdTfR2LzLMXvP9fnakzCH3TG6pyJviGKJFmPFauiaBdRN5r7xa259LAm",
  "key35": "3uubHm1hHbRUqepo41qDFLZtrnpv4WRTZ5kGhFLpJFLNHkQX8YkNdDwoF6kVNAiU5q2fNi5uREycUQ1dBaJA156r",
  "key36": "3p16eQhfYsMkPCWD79Sz3FQWgnENrZbGkJj28mXcyDW99ucYQQf4Ze7B6VhtvuQQ9acV5fsmAJMMEtenNdrHWB9w",
  "key37": "X5Sh9gkh1x6GBm9MKoYu3sBtxdLedZA1NYjjgL9caYkioUE4a3gRugvYg7SzhvRiVMGP1EeXi754WZYRjmSEbmn",
  "key38": "51E9hzxSDtxJYXYX5QmEQHqJaTF7N4nhhjh2NqrZCQaneCwsNMx2snbxtkGgqkLn7bzD5a2PTVmXpfRsAFdxfmv",
  "key39": "2PgDpdSu8zbRxYswt7xUKfrgegcdm63LLDV7544VTnnXrQoh2AQbNtHJNKpyfkx1ZNNAqj4BXRqvTLKWoEaFUjtZ",
  "key40": "25Jidk4FBpJE86jWnHXyf3kqF8nsVsKcDWvWFG6CwAyP7h6PqKmSxNugSadiont445x9cLsXCbiVzazbNijsY7KB",
  "key41": "34vkhx5MqdrQu7RQrnQiaZgb3HLXWcudKpMpdb84TwrhtzHEi7ATJKtVQMTB5YTgrhKTER3XTLK9wkyyEf19j8RJ",
  "key42": "3GuKXigtjwZ6hENA7dFtFEKtCfpvqVnxj6MawhfR9wUAK9VRmdQTLCuF6ji9zXbQaZia8iDZD9wmvGcuoMkrFbbN",
  "key43": "5Cqye4FFvx2djAZxFsiLSfBgTBVccgk8wgBsh3dBrvbWDfpKDuQs3wVvaDXSawF31xFGxWgqD2jBBjgdbmMsLmjS",
  "key44": "JgYepKLD8syFvY4mMdiBTJtSCPkA1H5G9LCEBJkkJgAPBFzjMLBoRdCTpQo7LPH8zEgbr26PG1BCiKK16yapRrx",
  "key45": "3fPcwH5SB9iM48B2oAzFz6q33iWj3h15xQ5Ywn1v7wQELXSm8oHnF62xAaouupZjiCKPJWZhXZJV8B31G7GhGkCd",
  "key46": "3G5ZTJ4K8teT26KZuvXXwjYQCURM3LFu3MaY8eZcoDq8RazdeGPS3CdQ6uRTEg1m7jfY2LawQWw6Xvrin545N1st",
  "key47": "31xKeC8RBiXageqHMQSG8RB4cWowoqACWVmnQFXvwKmeLygSaLNzcdpdsijq3mdrPVJmG3ZKtmdeUHXDaEsKdgL1"
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
