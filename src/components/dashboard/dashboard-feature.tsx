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
    "4s25C2jpE5VN7MFHhxsLSDUgL4NEF95guYgFtipsQ8YQwydFRND4NsWKzExVCmxEkivyXdb5gFN8wsP21EedtS35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orftxRmQLSikZTJYq2y6ytnKRPN9qmDVKuFPEwqwm59VdHgi4EJBvj8nF9VTEJxDFzxhip7Qbdo47tn2SEK9UTS",
  "key1": "54aAQQrJebK4UboPvmacdLde3Woj66ikHgiixGeBCFMSoSwQU1FaxGvfKsWGHyhYRqSMu7YqbmhDz1pV4gLqgnjN",
  "key2": "3gNE8rKVUWkheSsSWDa7p3hnifhRtYaNSW7iYkiTrYMhi1UDEaUsBH1SQEfJTbr65Ljy2cbe1yrEJBDCRtJiHMDs",
  "key3": "3fZocbo1g9eTtt5SQ5r7ckcER4MohSEPScRhSGy81Pvov6sUPFr3mpRuJ32iMGgKbYEihz5Ccie7A4CJSrh4qNby",
  "key4": "wMQnAnb2Z8hXbZ7ExSh2ku67E225DDuiwBVhm6xSS1fVFeJC8aiwYi3bHAuLA5NfKXw61iygyoqLsXpoJ2NtEbJ",
  "key5": "256SXbcEY3AG3wSGXV9As1aRzMcKW1Tbt4b3scYtj9BduM19cwBbJuPcjvH85e3XndaL3jW311r4GHABzSr267Jt",
  "key6": "2Hk7XxUfKD6Rx7gmD3yABQwYbNHPiQRkWZ9QbBcnp93QEY35FPXRWiVEtMaMRcGjuEyC6Jar4Qmf5th7YaAyFz6o",
  "key7": "2zA8CXexDYzRKutNp4z7nmLjZKUMxNdz4vAv2zaW3fL8P1gg9nhZixgkta8jpeo2fyEC532DLTbgumCFo2rqyUpX",
  "key8": "kEGg6dVW4HfFFTaF8x5ooBzL9TYG9CB8jhz23XjvBweoNnzuHAuCkPcLhGjqEzz8bRnTzUqdp3k5yfMK3KH3JMs",
  "key9": "4PnDwJeg9MT8FiiZbpmrm5Hf8M4VYNkVX8ZP9dyAujsrzNaNwb4iF4nCNNB1FkS7CaqEsyiEGMetNf352ioL3WVU",
  "key10": "3c5k3ZYRbjLxZYRTn94S8TDMLUqgf2K5wjVazDHNBQpWKN8jaQmFJmkWgJuEAMFjHewBSWgqpk4Tw4AEqaZswzUY",
  "key11": "3mbYhrw9fNRVmVJhu5ag3N7NJ9sBRHnMGid5YVShmQYPaoyEQTRS8hbQEDKEvTrrFrEWZo3z8PKzLzmyEqyUJ1r5",
  "key12": "5298d3y6y2FMiahGJ6PnGgN2Z7rU9Q4R9uDLSWhXMj5b1bdJfRznPfC54miYPctZFYUfoUdcJtofV1aubXEJ9mJf",
  "key13": "5spcDR9A9PbLDUHk4At2rmirMVmXRJNd4Uk9NGfkUWR9WuFSF7tmWz6Vt8AaqCV6eFE5Mjg19CnjooQUX2H3soBe",
  "key14": "5EET9ge55GP5pcnBtJP8J5RmtAm6PEqMqsTNCgkvGhNqkUXgCDd27vF7HdpVsYU22WqUw1vPEHmrNPT9wPKvCKJk",
  "key15": "3Kux8EH2Nbn5JekfEXxPAZXZg8GpbMMNtMeHf9Uk7FSAVpWVuXifXzzF8jRVvHKKFiVAtUk52HiPTaUEyA48i2Y5",
  "key16": "5ndmSWdBeDcRbpDtNSpxr1ePZDWoAT5Pqvjcn7EYRjfJrPHEBv1NzYVbEDMWSEHQwEqxcAtWJSqe4XXjaqCeBpBm",
  "key17": "33aW4j6ByLPFmWdwKkEwSCdnWneis5G3GskNHDFG1MtzibM2jPoGqMsqyhzfUB2LWP3JcFGSFSHeQWEBWZWEAxWe",
  "key18": "3hKGi5HtyQj9xbzJJj3eByThnnbzGvMV3999Y5m8CeD29C7evGU58RydxemDN8F3Z6HtJr6A5RjZKLf6yd3YVgfp",
  "key19": "4GzbhR7ntSxo4WkMbhJWSmi5nGMBF6wtwPLnszEjDRJGEyV8rxYWNTKfh79WgLZGXQ9beDZ9ucf18gf1vKJc6tuQ",
  "key20": "5Gkmgs4whiDa3fTU5nrRhxzzAPuuoVXnhADnjpbtMTkphH4RTNN2xaBupSxeo7Q6DhRk553eoBXr4a8198d7ZK8q",
  "key21": "2SevdxEiMggwN7zCH7NQhvzsd878EFZ6Losb1VcASRLM37s5gDGaTyr7BpToPbhupGodEnzSWKaQCxZxCvEusFic",
  "key22": "5J9fuYe7DdH365czsC3uvcVfGwkNSAN6JaFv9EMSwBrUNMp9A4jZQJtDtfcr9jSWonyVtL2eNuFj6aDkVo1pki2u",
  "key23": "59Q6SMC9gvpDqitQzRLuAGJhSnmNkXWYcxvntm83vodWdi2uGcB3ki9XLTYZQNY7gjqjWXU66guaTyq2GF2G6aVt",
  "key24": "ZMLSTKAFfw2bAmsMcUo13z1bDyKDSUnSoCu2Rq2koDVPtWUt6EkJc9STNvuDb71yR2vRY7UreBBSrkfpEvE7mJo",
  "key25": "29YzNTxMyjfHLeerFVYqPckUuaL8eSG42q9BYSJF8W3UCPbg5KVvdB4yGUwncLZ98UhAJyWHhJXuZGnrWCnwLePG",
  "key26": "4cLT637wuTPEjHmP5oW15C2wFcg4arin64Aea8PsribAWBoKs9MuEKSnKTGSyWGx3oGFxMUZGWmt4c2m9GzLSsDH",
  "key27": "2Jdsr4scAR6meBmfpkEuovKDqWQyXYE9iJxvQcna6SArWh4ZfadQQtzFhkocBQVmd91RMFhu8dBLdQ9WtcbgUrjF",
  "key28": "5pxfiytrYFZ1XGZQmmX19JqUcqN11tQhE7GpsPXZTD1721cR5nLkTvsquK87kCZc9KjLC9c7JiUQE6kFwYb34xQT",
  "key29": "5oCEu3P6Rb7MTZ3yGAGanJvpx6V9QFcgSS6tZnNWJh9Vz8V1o7CNKtD6W8f8wQWh9GLH5hB7yVb4hNY1MCJa5KWH",
  "key30": "61XZfEs25xrvyBP9a2Y8LvNWtZVkXitEoxhVQiapF2zLBwFAFmPH5PAK7JHd9jkAw71nzbQx9o3Gak5j4PWQxs6v",
  "key31": "2uzADzEyEc3HeGbWMi76PPoNyEeaM2f9pD39G7t5zzstbesCXEhJ5utfx1tp56wbM6rtsyqMUcYd9dq9J5U6ytFi",
  "key32": "P2hN3nReSWM2mGcNsPEEfHQ11EezS4RwVQqGLAnECkqwMTQgXdV1msms2BCqkvJArtRUdiofxbT7f3TrUPh1rUu",
  "key33": "33JkimvCmzMD7Xu9pe8XM76VCqiXeg3W7VVk3wFtCaSUm7yvzbTihygZSrcwizVzunKFSk3h9YB4HQ6wHnyRCjSf",
  "key34": "4PoHKkRtzALGtJaTeaeDPDd9wXqDcm6rDz2vBgJ2mbSdfwyri73nigRXsnfTmZgZfXnHhP7WqmiLucjFkM3zSNHt",
  "key35": "3KihouxFWg5L1eBH3cda2aixzKLh8S6HQFoiLKk2NLww1T64deyWcYYtoFckgc3zkSMy96C2yEUnHuWZ7K1MUm54"
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
