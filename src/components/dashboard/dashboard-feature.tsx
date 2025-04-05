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
    "5cZQNrNbrqrKc4624DEPX5NF69H1DGzJwXzAvdAD5yHeLTBgJwthrc7dZbNxdsQPSzrri4u1YFU6m2xeYZ9Ye3rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmNzQDkuYyKEsE3G3xdc1fzsRXeqMkpnp7MbmZk3B9MiPv1AvVi8MNodTqcVU4aMMZDnNMrsts8LGFZWHjtG5Kn",
  "key1": "2zaKyrFRB5shyWQxx34s7XaJPrECByjsSUXCm4Mm8Kyy9RABQsaNn1jN5pEva3k8QM9FAn4QGpA7pkCjV92o6YSj",
  "key2": "3mLemBEAs93RagK8LRQfHAR9EEL6qs9RvKKjZv33LHDhueYnw7n4tPbbLGimPz8d7iLF3fz135psf1tS7UkMZ7uB",
  "key3": "m5DpWgrvo9hTwiXwTHhCuqLMBC19pjwhFiM8qJjTrP5SuorjiG28jq68Tuzigeb2PkLHpB1LBmdRBwiiH4FgnmZ",
  "key4": "4gj2V9a51u4jNNUvJbsAWEANAK6a6K7AeeFUpDkCvpDM11WApnxxsakftmnX36ED9W6kqbY27tUPYzsD6dgSwyaC",
  "key5": "2FiS8QRS9pXmfB8KEJK9BdDGHUkRmHonSaRJRJkucbsJ26sTFG7kWgKcAgjy23bqD9k4M7myay18jM6DAgFNqCmh",
  "key6": "2jwQLL8n32om1kk9NAEeQ4vu9zkXyyh42wb9mXaZ3wzYjqVh7h6WgQeTQAgnt5rsReF3tWHekhEQqMcRARzDq8qj",
  "key7": "uKxQRQaD2PNQAdiQxEeeSqdM97gmZfzdkikg3G4J7b7WEJJFpxGQSdPsD2mtftDAARH2o58rXWpuUWDN2wR941J",
  "key8": "63v6J75peW2Cygq3cnC8jfr4spzVpTKHuvpWvR3ACg7A11gJBeBwYwX6MMUVhEPJE3hBwK6R5WjN4URMBhrYozt8",
  "key9": "2sp6BSDcjZJJYvPo7C2yGK8P1C3qehnFN15yb5ijeeQAbEBFH6pJveadbnhf1PFsptyDiZok49DzmyiEzxmryMAF",
  "key10": "3a9AKCkhCuJhWKt9ntLf7EdEzf3mnBaQFodWzseMV15zytcDSytxGZxPHdESXu38MjXCDKL9DLPugB7qN6hcdkoR",
  "key11": "24dVxmRPyDh19mXoHmhwcbSqK7tnWPgtEcjR26ibMsoZk1zfVfGt81SZgqDS4MFnv3RHdkCZTBxwJjFS4UzgTQoA",
  "key12": "2DidC97LtginCoGNJ9AGY4zP9EM6KrWGXCJuJv5C3MRfHEY8YgY7iZBsGvGdEPFuVtkvTRUopMpiKCABRWpQK4fh",
  "key13": "TwFtL1N3S2PFL4z81Xr8wCRV2GNMhh9qRycJwoyJWeXteqS4Ar2PqF37uJs72uUxERErfmPVrZingi5jSUCXWtL",
  "key14": "3uAH94SLnTdkAcsDfSBwdWw7qctVdodqgutX7TppWHeD2Tj5LKXxp2oTDpysv33rFDm8x38zrNgy3i5Mg8iithhK",
  "key15": "5rrWCLyfodSi3U52k5p96T1dZwbdzERAUmhtYi4iHhBsPCZH2rdPbgWTbaTDyjWBEpFmgz4w3twADTjwMXbsKery",
  "key16": "5Y2PCC3Twj12EVsNZdDrVjLeakU71cbf4vvwsVm2u1uojKLzczzt2jZpxnbjbqDjVtcp7RycEqh9fwDNfJu7xn1U",
  "key17": "4gjUSqL72SHNbB9SPFSC738f6d37WvNxa9gfgLww4YrmqNGsMBgWRbYeu8hB3gk61JhL3jw8195LxLpSPTKqSW6G",
  "key18": "5USi1tXvdhRbU6mtZ37Nj5tqh1PCaCzgQBhpLiF6jeZCiy8uC2XWGeQyDKvXctZgoY6KQevWCSvRapEBXVrNaBFy",
  "key19": "gV1YsoSCSG52228YRTs1y7t1QZ1c4qPK6wvqkfo3UBDxQvWarHB5aizjuUrhR6rD7oWQYje1Qojcmt6LvvS9a8f",
  "key20": "3o9MfuPtYawhWH54NMGL5d3W2HKeUmc5VrDk4s3oo3W72dayfbkF4sR3664tSFNR4GorqEuSUYKGcGqq8B2v2ixV",
  "key21": "5oXZYNW8tCgnAWzf6wCYJ5PpigbgZTzNRKFmob7ZREmQnaqymLwgb1QPpfaaURE6MyzVUQtoLvNC7aCitxPPJ4Av",
  "key22": "5cYgMDTXe9KDMwjQt9Lzi6cnNz2vdqPwcyN4FdcTNhkHbkDMVouPJ79DYme1xy2TWFEKCZaAN76xttQgQcgoLVnm",
  "key23": "5dTduH65H3zUhyGmXSKNc77G4aXtQDxfFModh8T5whLUZh6xanQDhBZvmfKfbA42GqXYg2q33k4yJo6v382wtRpq",
  "key24": "vium9qneaVdZK1LVz7y9T4QZJ91YJCVG2Mb23vJQzSu4ihjRrEfCmVAhihEK14dWcpyXJDcXxfMNgnzEnrTDerw",
  "key25": "5eQyjsKGDDEj3VczDZxHNZUTr2xoJFekkbzCMhoXfswhwWNjarQ54AN1WyHxBYxp3s8hxnZRwzLD26Fo2L4sDVjK",
  "key26": "4b2X4NJDZdaU24CugbhqAyuDsErhyebduSfSaPn37qaEotr2NmRKWAGbFjA3Vqy3cWRVQC3CcQ6jKjHP1swWwxnj",
  "key27": "5fy3o9b9Ng2FFMZzup8BUAGjRZXpbHANTQmAzKJP3Xjwzdsghzwg1bCLwswkA8SCnj2QBqTV1eYtj4VUxLuZyyPP",
  "key28": "49EtRGzahaYgPzaW3SN5Hamzg4nuaVRcrqSj34yixVK7ZzU9vCQDn4aA6P2vDn8df6PbJe6DD6J42uuWB6S4XhpS",
  "key29": "iWgDVLqkxEXmRLcc485Nvrz4RUJRSV347eYAMiJVmkNDj1Hpm5iHFdvYKiYHmhPwm1HeQXv53fZADRvc5ZtizTk",
  "key30": "3YKQh393Yhb2mQUSJfQFtnxtzUJ6yM7ua2dtrq8nfJuzTKMB7xJvi4T882Di5BXuQ5xmhH4tFYP5KnZovSAwYUnp",
  "key31": "62qaYaHd6H5uyPaSbU2uJEXNbFjhcbsVrZGhQefcLxxCmBkkEwTufEo4xDEx352YNF17MV44LmXT9WBN5YsTm4MP",
  "key32": "jYM2PYDmbUZ1LEaadmf9bsNGaNE3XXSuPTTKyde8ucmGXVonSKua5rP7S31iBBvMyCC5XzSFa6jkGo5gbvdWV4p",
  "key33": "j8AFHMXkMGVurnj9NWoCyN3RKNQrN1aCpBBpzc7xcZQ3aQ6YX2Yzh7eZiAgqFDYJ69rQ929KXdqoVVBtdH6ZRaY",
  "key34": "5Q9ZnGPm1JFMrY8tu6sND2FTaa7fjhaCNLmxXJXQh9LsFeKtdFkMEiuqyMhzWSdwLAAs91QNNtXSasrQVJpZsEvK",
  "key35": "ffz9ggBePMTkGth6Mf1QjKWW2YAKAPWkC7ySXRcYX7NifndR87fNVcXBgtdGXTK6m25TXSSB6JZpVqBzdo3RFDD",
  "key36": "2XjQqFya3Z76sVPitN6RJocGn42HeZrwGPUPeemzF7yeDiXJ1XfoV5nT9nov1e1Z2rtAtYNVkD3BGnSSuAHhtVAg",
  "key37": "4Z1NmqguxKBMQ1SnYfyNaFPk4MWYUNpQNLsjZrygN7fxHzyDUXtWJkkGojfiFubYe3taB3X4JhKUp5iky4d2aoTK"
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
