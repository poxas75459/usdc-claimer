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
    "65aZKCwE5D9vbjmY2rXiimhUmvGdRtsiV82kfE4HKtLYLEXuwrqQeYRt56sGjmMpN7ubLDMNPs8hdCPHHXj4PLo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZZVdpMmfSRJPpmaMPwNwnRbo9w5B4ofHDae71rDF4KKfnP2sWB1gM13hpJmR3Wr9EzsU8i4EwjiSdg8FxDYG3q",
  "key1": "4t8HVX3RreCTgJhqpB6C7FdFsRKhwaN5mkqUaEZeXq27CEhpRKasaeHxHm1sYB4T2q2EvVKVHFBhiA2i25hxk13d",
  "key2": "652JUsTBLikkhyPRYwRvRjPyZCDj2bidYvB2sAtXQsuZsyg8byEHREtZbd7MPn1LfdNRKwuHDuzoPTFCSaazZy4N",
  "key3": "2j6Gc1dSadbbtu3hXteq9WxDtReNh6KwqiFjhfQGaZQHpRWWM8rUpssJ55Dm96Zb2kVaPDZ79h5Syq2L1PvpMWaa",
  "key4": "4cN4CkdFAtCEQBpamqjf9UVba7g5zDbY7DLRD4X3NzqGVMXrL5GqGjE5ikzmpTtq66t3q62HJotHzBsGNbHP9oje",
  "key5": "5sSHJ4FHjVN92JvugWqmZQw2mPeMPc8bVc6svqJwwi8g9Jt8iqSu6mJC7Qnd9qdM1E6bWfHPZv28MUtvzwYHm33K",
  "key6": "5LH3fkV2k4SPFHCEKJ6fH3mMywM8qLzdvbAgkM2HBoBN2kCv7j8LVcqJBu3Awa7Y6dYhdf4hpdYDRbjkEqjRttcz",
  "key7": "2AowFvv42LCrcxWBsTbvn4fkcFYa2j9DkHR2kj237X6zXqTMjZwd1pBDLHrKkbdgPS132jtDLkK4cZBp9GbHqVF9",
  "key8": "4J4LJExjdDouQrsaW2LNGD3iduroxnAt4aRpYAmdNf2rTEErcqc9F8USyA6GxBc7TmQinbM69xDeCHp5PSji9ioa",
  "key9": "5krZPoLegMdyv94WSzKV6mYfBSmmLPd5ZtNo1gthUuZFGfUjfyqk8UQwXSMFvvmEa7F9vmX23uopQuWivXq5xQ6w",
  "key10": "66hNiiRBkR3uKcdZLZdmrvSG397hdp1LeJuZdNts63dKXxYSicBC1RhgXAS48imB4yKSoTtHh2iMieM5s5yNTdkM",
  "key11": "3AfSi5wxCzzD4GYufjWxo64LgbHsVMAGcNYrsHS1dcnDJJ4fsLSuBvVEMXzg4MdBtEtWwW8uYDWngr4xuoDiTaAk",
  "key12": "31RPHpmpVX7TMyph1n2knT3xTZtaePZKipun389pzssduTVYLFeG2HBqte3U9vK3qbQGfuTg8CemNQ2JWtidss3T",
  "key13": "2TaXkimB4MY7QMyrC1LDKWveftHz3H3oEyMrmpKJLSqXgAUcrm4BPFhBUAwiGzyGHtCHA6SdSyRkq292ZJFebNpq",
  "key14": "61RFZr6C73gDrgfR7twzWqvRnNnsm6sM1B6JYyMQSY8h48g7wCpckRj3kYSKjoJhxZXPRb736UKxQ3xnDbGSM4Y1",
  "key15": "3wAjZeV4TSZ49CKJAnsNv8yyZRCzA78RDZeHdTa4KMXaoanMteQZt6TSbS4n4no477KT3uevGycqhbyorBfbEvye",
  "key16": "2AVPckJqSuvUyAFAt8MPYGbTcMrxduMNswLgAmqnVjNEV7m9KDUoWVEKp7KUU6g1sncgVasX7vAM6wNRBJt3ExkR",
  "key17": "43qkCSDZdguEFZoDVjKYaLP5zyXUTN81jCaf5MnmaqdkACs8zQP9p8EN1bwNByhTTZjX6Ccqae3vJPoSqidqUjsB",
  "key18": "in8U4szMKzP8tYKRPYBJ4ZZrvNvvW3twDfUWSxJFrNpVEqPxD2bZEQtsbcKHqwhhjdS2fpk27F2DPtBFYKRPj5r",
  "key19": "5mCrsNt9K3rjkYUyCzrbK5S4X4Z9CfXPDR4scYSqN1TGSaKXrwwCjEUyQHhyqPZ8zibFYeh9drbtoon6kdfafpKi",
  "key20": "mGPYxbSJrdt8MoYocg42r839THEx9y9uZATbiYd7j9X6UCBmAjhdC5GP9wttMD7Ms8e1zFNsCiTjjY77q1H6CGn",
  "key21": "2jpQ2AfgdmyequizuH1RX1DD2aduyDvSxCy3NoRPci2dxi1pT49YZCm7NtXDtSXLEtPBoa8sNHJJqgTrKcB8An9a",
  "key22": "3mEFRkBi9MKapfcHe61jFbNu2pcNdW7T8eEkxeeWLvnBAsk7hP9ZwiyXLXMF8TohDxTCtZmbZGbZRw1uNzWkgFpp",
  "key23": "4N8WPwmjbgnK9Z9CaaYGrBHrHfQt3dfGRaxdCVao9mtkXg8K4XBVtC4CuXLRsMqMidAfoq5EdeFFMjF87ktFs2CR",
  "key24": "4kebAa7yuXQBocjG9N2LM1Mjq7PKL1L5PzA3Zj5ZN3MPLwup4ukFWWAfNrtz8mc7J98M2Ypbacau4X4YNGhDQxZD",
  "key25": "yLTtWpe2cN8FJrvGDHdLySftFfReReNAKEHovFebJYmxV823G1qX9EdoxxwfycjX8Sc2Tz6B8rJqfq85jErdcjP",
  "key26": "2orDDef8aQKzkwAaxLTGRB2emA21xPnddWHGTWymPr6rRDNWaU3aCmjQNWXgkhXEuWWSSWRYqXtTvfwCrgCPirME",
  "key27": "STsgqk2UC2bkdBqTY2wvn7TQ3Ww258sk8HesEkKyKAqszpw6aeBszF2FV9LJcaRz5pJguYPJBZe5Dj82hGZX9vJ",
  "key28": "5WB1Hujy8thPani4uZfUr298c64cetsU93NE7t9Mewk6chPN8SWQnvBEENbToSwCr4cqxqhQWsU5B8dffzvP2Z1G",
  "key29": "42XfY8L3tUi56ub4Dec9otXoKgCopvkqVoC7mcvSRsMKNiMAotTKSnSQ27XYUvMEsSG1nX2zhgbboq6AeZidrA1Y",
  "key30": "37sMrzmC7ga3Vf4bkZwSMzj1LB4yxAgkcQKm1ztaEprjF2KSycc4fmHb6MN1zKF5ujyDgfHnLaqc4CMeCRw69KkT",
  "key31": "2dTjshyQAQSnQyRrYmPwD7sVb2aFVoiRTEv1jRYoFXtiwoZhM4pnxNTsZTmdZWdSJ5S7UbscYDYZ8hyJXbEEonz9",
  "key32": "22ua3keFCxDB4M5Pj65AMW4FcVxSz5VXDfkm5ART6QCruwX7dqYa2qQ4MgZr9PZy4QU1KtyokVpp68HmQkrds39B",
  "key33": "3H6jeS5GYj9fbrVjUHdmsy9Yn56dv46sDYqCs1BsN3v7G9QRh7WrDB6oWQsP9ae1TQRpPZeWCW6CbvuUdEJztnbS",
  "key34": "47Ftf5BXKbBGU2wXADeWhHiaSTX9GxTn4ERZLeMKCZSNYyVVzM7a4nXwCTJSnuJcA1ziXSqwzhPtuyfXzhPMnuC",
  "key35": "d4VJCybWzyEbsf79LyjkYNb6Q8RfATNYRA75d97bzHu7uEcheVoKnCykxxaiY7FKJgq5NXmxW8jv5cfJkMkAtTe",
  "key36": "2h12fa1ULoEsBAi14wPNohiMZWditZkBF2p7apdTqd4cG1Q1Bq4VqgMpMeKzinTSR21SnSKXKtdVV8VmL6sPruvY",
  "key37": "2pbQ5cQMG2VW6gLEKxq2uKsUgx4y19p49eQKMD8GVMhoeJ1FRxat1rnX9DBAE1z39uKv3HYVWZykjxmg6Fv56Hr4",
  "key38": "3G6VMP7rN7PTKhpBCsNK5Ty8vvzjD61XRb9ootwNmwYifDTTd5Aj8FJMeRBY4dK7y7fxHU9B7UAZHVrDQoUK73kT",
  "key39": "4mktM9X6YjLEBoe6HW48Ty9js3uoYZeUNC5MFK3PTpuMGq9CbCSuacNHpoNYmLvn3S1nXP8kChJdzFkKuiXRss7q"
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
