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
    "3Mi4an77efunrmnCrx34CGF4CTS3PMWR4tV7f5xAVCe1Xi9WPJENQaRQ9Ku363X21ZgXpkaRaDoPMmoY5HTMPPzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wv7ZDjeG5qKonx5EBxv6SK3km9A2WzRCssuuPmLLH7ZxhzdALkXSae1pjRWackC2EBfuSgj5GSS4b4RsGnaAux6",
  "key1": "3HFuTUqNoAfDyoYWjwkVunuydpSD9y4pz9RCaxP6N25B7UaC8dR8bruh2KpE7b34UH2CfQtMciLPVhcnmmh1qws5",
  "key2": "32ccTmzzJ5kjy8vUwTS7pP18aW5THGAtPKM5cFFmEL2HUdNEmKD1kHQzQXbThiT7hEishBCdPELQnuVxgLHQGyRb",
  "key3": "4jqjQeJspAFCdAu14N29BnZ9Dxy22cHmK3bTi7wTptPQq2S3HwmUGHQmzLE5B7Wmystj8h1PNMBpfWZtXg1ycRm9",
  "key4": "m3QjSkXHpgkm9XW1tAWCnwUL8anJ34ZqFSXtNmXX3pCMrKVHQSf8RWiB8mXCXjPiHNK5cdUsmHjZJbMozzhb1ZC",
  "key5": "5wsTowwJRecQHDAPowz6nDSK7SFtdyirBGEDBo2QYWuekg3m5Wu8VMYuniRD9uDsXRSMr9ET1kfB1duteRBQykys",
  "key6": "3JaAHtXqiv7sNp4wmjL6bTYrden6kAvRkme79tRL1fVJhX4nyPPANMTTYWVDveciZVkHyfBNSyBs6vdo3y2vewnE",
  "key7": "4TuPea67LxnCUPSTi57a4wwbk8wMxFAnfwaKdBzjd74VMtoxPr4MVvcsJGPaMotFsSN68veNK6VjU9FnETh8MfpH",
  "key8": "22zhX7efCB1swNQiJ3ZyATeeiTe5T753hTEMPTWfjGZ1ubRiijW1KpARPrzWootEELRWdt5ASFhyTRUmb7NC4ym1",
  "key9": "VhjNnzfxCpoqw9YPFEkyv7fitr3tXMZaaBQzRQqYGCscSKQpaUmet6Sh43rWcmbZ51Esat26DpNWyBKJg5PbHVj",
  "key10": "4wtcurNDKZdZXBwt6wVdXQ5t4HF7DYt7TJko9q1DBGXJ5xCP2eYumH3sYfRseJ5D26szzWCkLHoTs9GYnYtr11gJ",
  "key11": "5mMKK7jURPejrYPXMqvxdGYzgvEDCBZmggTcAoZGQGf6GrZRwybGj8q3DnwxUxHgSzPS4DtVmvh2KHvj2imEYg1s",
  "key12": "3ydRNNDQykKCqY5XjuCvDqoeF8DrDEZLTuoVw8bk2n7BvNSbSBdYwrjgLLqxK6eY5N3ezxxguq4EwpeGhDrpmnpr",
  "key13": "copf7QA1LAskwuqiaya4qNfWqKLUi26pHx1kdxYEqkJFxTYb2GaGZaJEJGyXxesq1nEcwvLyHBjX9zCtryPjGp9",
  "key14": "3Nc9YXjZkrG62EcDjsteEXioSC5gxmFFWu9qY6brZaoCiXSEgrf1VfPqbPADWYy9Xtas8ZdHx8do3m9sec7r9isK",
  "key15": "2PaiR7UWMZaiQ5oEUp7VAPSWUYsBY4Kz8KEX9J5pxuZoRC97dFMXAd1GtkwKoNGzc2HGKsoSBjHizZ3VhPJhULwE",
  "key16": "SDWQfBAwiJ6orKD84a5KHZxb17NDqyu3yY1p29EgVHLsEBK6R4TdNwx7nqTtNaBdZ5A2vnW8izR2DPBzCQmxS45",
  "key17": "RmAgGUmC6vGLn2wybNCMGFAAmektRNAPFBC4k4fGmo2Kwap5jyiufKjNk19WBCC2oFSGrjnoZWnJJDsfi7KTR1b",
  "key18": "4R49Sw1MCKuk3xDEz8RRbji9NTMP36pkvtXbZjvy1yJ8DHf49RvfUEWcCuZjbMfTmqdrJg8AZ7LJDe6bUTSggnBp",
  "key19": "3Dk8Cqrtzo7cmepM9px6Wf5o9vvNnbrckGuXHYHgxWmenQPYHgabqPDiCjZv3p7PUnYRkQsYi1nEauA2HeJqCEcF",
  "key20": "216RPTTJbtm2HWtUCxmdHrwMqcRV5dTmid4YpjH7jzqACVny5N2ZBXg2jYd2hWzfk1aJw8wDL7W8q6r4iE8v7i1R",
  "key21": "2FSYr5eyrTkkyRN9k1EVL3VLSRdoSdSbU6vRjo8WdCfRUvMg9wTMnmEBekj4nvRmqckGaPt1zMq7DB9FBD4iMDLF",
  "key22": "24X1YctgDANXEhKDAkNKGde7N81srXqqcKd6PFbY9w3SGTFbxFveyTMN7mKmPBCAi92YyLXKaFKP79HcCR9Yw71X",
  "key23": "mVJKjJ8EUaBVvY1MAXfhrYYMcJq94KSfmM4XNGajTD95Wurwh8U9L3DW5XiWj6eZcmUu2CHZr4GcUAhpNHNKef9",
  "key24": "x1csMgrB9FrvfWEn1tyAyWNXDH6d7cfnSb8S4626ED9HxYgqNi1ZXiogxAPGf6yPERNTfe1NYwirZDYUJV1Cn4u",
  "key25": "4khHXTjH71XvcWb2Rarm2pb8uqqELD4vTcPJr5DvCoYxmtzLt1psKJnWA8HvTMoTY4T39VLtvbDC9Rid9cWfK2rG",
  "key26": "3L14md7xtVhd8tx5tUsdgJ6751NFupVrAEWUguNo3svzCTR6ydGeunao4cLeHTY7vQrRzHyghxn7ErtbrCF74mb8",
  "key27": "FVWxSi1YLgKy2KUy3YbmLrce6i7sG4o9Z12rwAk7yogaJSLQ1pjWN9E8YfKQPfzywjLVRKUHAZ8oc911MjptQcx",
  "key28": "25nZ92aS5s9uRvacgrxVkieMvBUgEASq25ZUfSE7KavtCcELJxCVCSKsPcAEaag9gygWwdfebFJrfi66Bm5ygaxn",
  "key29": "3LgjieQoZcheDrS9NqG5xSbfQGLnuQyHPEWjc9ETVfsvHrrTJYpo3v5zoGtAHcihgFmgStUMT4EEPKGayoQTDVHj",
  "key30": "33td7y5iLMY5RDi9egBZCWch87LAWcfcm7MBdJqC1t9HBtHqxtputFQaMcjJ3pLf52esCAf3Pf4HUxXWvAgXwbdW"
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
