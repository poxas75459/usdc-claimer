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
    "65oTE5nb5bd1FAex5WoyLULpksNFaWfCMiRapUxogrwavV4p6VtxM1PWuiD8UQxx2dErkZZjzd7Swnxkw4t2FRnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42AKsLgE9E8CU8aoQ8AhhgCJnJpbTpRjogE7dXvVWR1umyAzr1v8Dqn7VLX7qB2g5n87W9e27tyjYusnMUX1SZDP",
  "key1": "3yNpMJ6eiV8R1jWswfvyNUKT7MNmZvRXGGMT2qCnnuBkeqCjQmEpw725gVuXpHKtP7VMhCVgZjxngQLJPFSQqMPK",
  "key2": "5mC8QE9B9th7QmTujx3PPLap8AuJf4o4VN1NaWSdXmuNn4w12WQrThQZ41p9SVyUeQCfx8zb5L3LvSUzRcSR6RGy",
  "key3": "2EvCPkz4K2jxTPQHgLPGcgTBU12GGvw2XZWHvb2XmiLJxdy39F1XKtYGjpV57iD9vtA6wKB1owQD3feYoyt48nZC",
  "key4": "3WAMkvTgCWLGgq1K5dZS1kb72piNcpud6kBDHK3ohnyVjzLMaA49EgdskotrK2zB6RKwfsqFAd8pxGUbmz4n5hgt",
  "key5": "4fay9j7cs1kLNHsaxUqX7Ap9RB3BsRgniXcsfCFR6nHouFgShtjv4MME2pwRaiFCz74Bz4erp5MCnEhdzFdyCTcM",
  "key6": "2qdyZbeMirt57kqDhbDkSeixMDB7R1347TKsES73n6z3HVNMTbiCXb8KCq2YCjkWaaGGMyZFKvLXjkZAnvvkfvoR",
  "key7": "4Y4no2aWWVsiQ7orthD7dP8AGE7D9qWSjg5jv2jNo5TZV9ufr2pUgKQLRs627Hhyqd1C1JQxiBfy64kfZ9P8scFV",
  "key8": "2Z5WPoHpmGkKfMHxxXkd6ZvWCRx6XJsTnNMBGaSqowyUiNZve9e2aaq2EPho9aqNKu3eEybqLmVNJQrGznWhwuPm",
  "key9": "4R8m2JqzuvTbT3PFCKAUKfdLkStUh1VYGYhPurhGSDqTUuf4yJ7tM97TunCgjkyL4qNdLbDxYF221Y8zyKmiMHTX",
  "key10": "2XszPtnZKt6DHui8Mi7Pfj4HuByCqXxCvPnFvmrtZqZ5n12TRcW5qqG77osT5STHXaCRkSMGRYHskMh5jg2qtiRr",
  "key11": "4SUXJDU7u8dCrA4NUnvMqmtiupAhNoYcWfEnfbrhVqPXsPeoR3s9QYdVjK5twabZqBMSSqvxwKmCwA8tYkVj1HHE",
  "key12": "t6RdbquTgYA65HU1TnATYHLC6SpUYnvryKJmfYUuZhoYGu5cmWegzuDmcLdoDtm9q2opH2GowCr4nFVKokvQ7vF",
  "key13": "3jpz71WxfmTMVXnyDSs3VnKgEqyfzCbiUXRWAYAJ9ffhXGt1tBRSCPqwS7GLGfeVCU31Rjy6XjF47gYGZoQNAoAU",
  "key14": "5yjiJiQYr741WoeTM25M8DFJ99bmwpNC8DoB4qJD8YQ6P3Yd5nkAtZvoEULHX7eFFD7kiJMfGYjDLy4tVF81Wrxy",
  "key15": "ZmnWBcECQ4mTBxu6oDqiGrexTqYkpkNb3iV7i52MvE5ADmvaT1WzDM6MfTta5rBvfkHhYwpRB2sxBXQf5t49Qkq",
  "key16": "3w9roTjfpz1edhkVjQMzMAxUGni7ZZ3nVN7YarLWCgXCJnj4WX6DjeMeKpXR2CmQygURgdj5PZ6L45oBoDDBh7qk",
  "key17": "2mh2ZqAvJxst6H3pPv1tJAimoqWokz9RkUkPA2mrZEKNZjmKGtDjBkF6EdsDqHzjfsFHubDRANSQzuNTfz5HxxNy",
  "key18": "4EtduG3x47tS73Sx2nwhq4gn9uvPZNs17rpu5BY1iA4UugzJXNwEvhcF6SPBWnmDbMFrXonrzTHNF8LroVsGSDVC",
  "key19": "2R1CELea4MN88uMBAvJFYVhzfL3c7ycq6nx2piYDFPv2cs3STHx9BXrgsQ2ggu2yBKripDirkbQfPQGBpjxjcvfi",
  "key20": "38Lj7QSLyapGWz7JBZnbBBaJZTJpAS1nhv45beBkuwq2ojwSUVuwCkAZS9syD3jsxg9UgLhHm9pJ2JudPHEDE9bZ",
  "key21": "4DH1wWdvRc1bz5aiqJrbCBv7UUGvdzqU7frdGLjqB3Twcz8cvfDyJAFEjvSQiSrKHLodRSSS2hafVmVx5ZFJUyjj",
  "key22": "qU5JmHy9PTu5PNvXFRuVNWVXFv526Zzo8ZXEpKCbDuWcs5TvLHgi5CAWH38zqRUBVxY87tr8SHbRMcesqxrMS7N",
  "key23": "2F4aNoCR74BK5vVbK5zdkEE5Ky8ur4FAW32t9x12w1CRQmbVaNLpeXNEFWYgviWVkQZAeHi6ZgqJ1uNnZ9vY6u5Y",
  "key24": "3nQByHWLF6dz8mthKpiFJyLvdy1ySz3ubD6PUihfLSEZ7TMqWfM6ZFjUqxJYHFWwx5LeKxk1oDzfk677Yvxthv7q",
  "key25": "2toCHYgycdJijkfMMmVudPrmVmXayBxWmKwmSWBjY3wAggdYRsoP41kj7qK86w3aqhHxVC3J34mM415yMhxmBvT3",
  "key26": "5WgEZQkvcyTVx27GiN3WCN2rqoRhGfUuEg6t5rAxZWx52Xb13EqyQzCr4DdMsq1TRuxdeL1G2t7ktRCgCJKkTkQp",
  "key27": "oFuuFBeMektDqCYyPjEi4P17f124ruGDnYECgJX7VaNLyDXsZyLpz21GgRE9htLQexb15MXpZ4YngSVGC1bNU4o",
  "key28": "4tj1oWHTsfJNrJfnGYEMY6MwaAGnNyt3N5yPPNuf8ptRxUijQ5BnYeo1AyCw8Eehprbq4XR3K4G6KCkNgmp57McJ",
  "key29": "2E7Nhc8YjYXTs77wCGKK7G2jX2bJEYUMRtx8uHjQMxziNbxcu95puBUuVY57R5AhbRBFFQvjZh7XnyT6XuU2Bn6y",
  "key30": "66uWn4Hd9exHXB4cqivMcWZPYuKHBsEvwpAUxkeSnvao2bckbiVCvSWSE26fhNfJS2r32n6kw4Vgy6TvwppHULjq",
  "key31": "4UFik7XJWcQKvnquM79Auu3UoRqoZEJzqwqZfo3ETuk1tNqsMV2TpXMJEyzTpSeQQFkSVHnm5c3zCMjpbyBHgpzX",
  "key32": "23pQjvXSFeG9YaiRabE2ckjmUHWW1LXjRbDXfyRHprDW5Zj7d7CBiTh4kdswggqdvx293v53FCMyNKT1N33bS9ih",
  "key33": "5y56Uvb5sHnxkQy9NapL43A9TPzzadiJcU1AUXSuN5MuQtvwMrCMKJ861ntebFHfUFpL9VT7yu7cumewrpgFy5H8",
  "key34": "4pS2DVp1mfUS8veQFJSmd62imRC6jHyqg51gBexYdgJhuVPfwMaD6M8kPT48Cf5g7n8d1Ck9JLdFWFn4EzCP2ZBC",
  "key35": "5Vju6T38HrVTMU29MPSM46XYQqCr3N2eHhoZZ1h8PEWQ6AehY1DZgRMYNTsvi2yEtwkCcEFmLpoQC6EQnSFX8cuP",
  "key36": "57RvPpLjf95sYX3dSLPufpcA7MayQzWNabYdQ5yybRz6zFRGLsWKyJ1HydjrkMBDZWUAWhyfUjnv7HKhVNVpH8Kz",
  "key37": "5UuE8orC3XSUXGA9E694VsAQdo7s6LuVLBdBBFz6ckLkvDfkEmmCWUcjYcwKLHHT4vGjTpvaW2B3BiYiLpGzPSRv",
  "key38": "4pc44AAL568y2vczAwZ8azyfdJ8pZpW6wKhUQFwTJZv9bmAEkZ4joYjdR3HdenkrRjxWG4bnjKkRQbepe2bnW3HV",
  "key39": "4pJ5mdFwQ6q7FKrjxhDQqhkeTfKqzahWj6njsFNAskMYUgmxQxZPLwdJsj4rX3apK7kDLWwpD9BZRV2SZjhEhioD",
  "key40": "DmL5S6btWCryMmof2MWk7cNb826Mpo6BxBi2bt2zHvnVn4JtNLGvuL4vmuFsT2YNnJtqaizogho4jnXVTm2QRnk",
  "key41": "3PfgVBv3s5APFjmefj9U5RQt5LqTp1vhnUuQeo1qBkabADw9y75c3pwW6d52sNArkW9sQSLCaWzYMVFCf6NSAfCp",
  "key42": "4wqw6M2Hb5GG1xZdFwZ1fEuyotfyMPjSVxcCiqXKUQdXRCKQjrVF6XRDvoTqzicSQ56TXcFPigYXBj26Xp8W4RBd",
  "key43": "3HCc7yBjoVtboeh8MEPkQNNbLBPapVDeaPeKob7Y4Bc7zCqTvfYE5SzCLM8G9GrcfF2if8UP82uV4P8GgwpAk3xu",
  "key44": "2J4G1kTP8eGmabM8h3m6GXxUQtZTMqo99yHRijwZxN3zUC5BP1zzdYNjJMnPdC27y8HpMp41ARu9vzoRRRsRaiFu",
  "key45": "3csbEChoBCaKB5xYiv5bopNbJ7VFvTHnvr4Gj58ufbVnVniwPB5c4CkEPi1oXM2nmpSevNZrVgPUanNbkkjwYyRs"
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
