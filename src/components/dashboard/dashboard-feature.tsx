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
    "2TfGsACZTvK4qmVXYGMyhNgjNh5oMo15Pp9ykmnujYMEA29wHVd2EuLJWLNMgnWYZDR7jjXER9DKubaFc5U158qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uu71gmMdqVYVg76JMdts38JKU5rm3gRkwd2k3N8DdjnqpjxjXDGJ93XKBshwG3G4v7it4kcys3z9kXTyfGGhx47",
  "key1": "5iCf2ggwtaG6WvYSWht1hJhDzJVvo5h4S68ox9EYjhxVhCMpCYF2DTWa1wC7JbNMWzfwT59Dwd3wfJMYxJKGYRsL",
  "key2": "4zU6RA4eBuZqfK7rXwT1brbuM63hb1QAzGbwVyWzfsJk3m5DYY5qtv54PybMdBfwHkC6JB5qqgAWYT3gStYqQ5S6",
  "key3": "2NsQgQpLKaZTQCrCZsjnDUubCL7x7xXN8vHAtMmZu5NfbqAMonHRf57h1jH98FKg3W5kGQyziY48i8y9iyWN5wDp",
  "key4": "4zjcopHXfjjUW5dhu9vrU33mkp7Rh2Lzk77CGqB67MTJ2C6wShEFcj8btHj252koDz11Ed5LSznRmRLCgEer3UcV",
  "key5": "2vd7qCsVEa76ZD1HwFe8ihzvBfaDmAwyaTEnGnfQZpz2W8ZvAzB29zaiUG9JU6toZ9VFLhNL2vhG6SyxDmiFAphF",
  "key6": "49FRGmJ16ey6EkK4CyYJrdrnRhYG5XoTRZncweUCQnUGWmruFYXQmbGr1ZBhyGUoMaibBXV8zPbqG39KYA7PJbpm",
  "key7": "KA54hNzrBxJKLNbPs57Vqw2UNe6V9G2c2gEktpHZgTa94vAvJNhsiy1AbTPm9ePG8zBvLJDerVGbduNr1oPs6J7",
  "key8": "4eiwt7EBhE6C5TXhAEsDhBiXfc3BabFD2YaVvWoPS7hHQuobWHqoXheD8bbPZbXPfx4PExLn41soWH1eVF2TSHrY",
  "key9": "2tddCsfn2ChzAuXhr56396r64iYWfnTw9zZwxhLVqPKGUJ8gGCwJmTeVHhnSbHYhLuEqravp2GxLdiApGTg4C6F8",
  "key10": "3mKmAzRa9zcFDaxAZtSTgqnKoEoY53Shg4v9ap1zaRwvfixMtJN6nyyrELUJBmPzY1XrhRFDNkjiiTdz7Y2uDbbC",
  "key11": "2SVXjneUoRHesRjYLMf6CJPkhBzv4jndX3XaRC58P6DgsorHPPCrNBmncUaGbfeMDBKbZFo2XC2F6R7CAVFCN5eq",
  "key12": "qLUQtqS7q3AGaobh4VTLZYH1ENpkzMJyEH55gycXtBtr8VgFb2sQnQCfwLL2CS19J2Yu5t9F3cYXgxThZonBjVQ",
  "key13": "3oTLNWNCGZDegsAEbkq1WGmiSeiCbqasCMH1SFWnQubTQDyJLgqXg7PiCbAQtjYF7rcHJJjGAn9dZxhGpXedEPHD",
  "key14": "BQpkXKe1c1HQrVLVSS4ntsw81arD864zwhjwznZ5UsFzA87CjeyzHj9D8SfwKWBBTKa3RMTKQwy6726X37nvah8",
  "key15": "3LAJ5R7USHybtF5CGQi3sT9qhfng8D3mJdUMsUjEY9CbMXWEXBPMXsat7EDvtAxR84Fa1aXFshuigEkayEkKCKyD",
  "key16": "2tjqez2TYVrthn4sahejYaKFbypMSxBLHNUMtoPfKP8WShXD37rNF1XNKPPdJSLSoAwNNZb3cc9Pzrz1goH5RDwr",
  "key17": "49GE52qEQBhoyukW8gzEa4r2AN2JpaNZsSPr82kA58GZX3wFy5MHyv4QmGP9p9kM3pWGXfEzSFeEc2XgXGDouB5v",
  "key18": "AS5TKpetkec1GHKacBj2JKLGATQBQiC5MsLPkM8NvQuB95foRgjJPP2RWZLE9WoSTe1MY8MqQRRzuyrFaf5J6QU",
  "key19": "5jCPH6ervUm9EdeDhnSmvKJee5ycYALhBWokd6T25v4bryq8FJ7aDoYjCfTM3No7FisMdnsCVErZYxSgfWjSNtV1",
  "key20": "2RGwwwFFZooPVCUb4kEA5kebEt1oVpc8TbJbF9UqWAQoUFsytDmdMwdVk8LqmqoDittpm6PSTtrKLSYyUGKC68m6",
  "key21": "29YFjnNRD9fA942FdBhhnTmP8ATLHjneEthtWLHLLqra1eyKvT27TDVT1bKKMPtdy8aVScmFaXUCPXjBFsK1TGVg",
  "key22": "2FBQWiajRtdsi9y8v4bU5P7GmQHx8tuPNcDraJMMJmuHUKGbfDCy93uJxGAqQ59pPvXuigTJdPNZLYDAAW2hyWgr",
  "key23": "xeoXprmG5TMJkQxSimB8TDUx7Y8tqZ8dHkSCbwdK8AkKjqs6Eq9MnH4w8UJUiC9rpwdysaskBxyJaoPV7vxgznr",
  "key24": "2p1etkF3dBSfkkZhSxarbaocbzHEEFPLnJSd9YwovL8rNcNBsAXsT5wiCp8NHEaBS84db32o4WVDdtudfUbJHjax",
  "key25": "64MRJQBJxoTNyCJ8uZU3yMuh2j1QX9FxzbnjEE4aqeXaaViXcnSH5he7V9HavpURrjAqNP3TT1jVADz43hMqAKZJ",
  "key26": "4zzjreEWQvvmjE8SKKAGANVWhCSpBu88WRhGbWZEY5WTP7Q1kZsZ95VRL3C7FBToQUQUyAvUKY4BFuw1ensYrKZf",
  "key27": "4uc9HWCXpzWFdAL7LPgvQs2cQwXPtLjR76MNvHLA7E3cEYWVh1tfGPyjSnTs6f7TfHaavU9MyQfQ7fRKKfyHfTey",
  "key28": "3zuoWizNWhbWNzvEyMPGHRqeyvi4T6XFmUbPSmsAXrzGdeWjRWyHiNLSEwerX3pGVgNQgCkNFzynX3eFA45pgs9p",
  "key29": "4sZrXTcvh72M337vihpmNEZSAavySN5p79uXr8Ts1WeCVSVYWPpGqJCmrfRRvkN7M4zgck6aMckKKWyL1NvksXCD",
  "key30": "3ak7ELeXNHQRTVNuFeWESLMUf1zTZCf6rSZ4eUuNjrcdPKWWGc75V2QPHAa9ruoqhGZkbwU1nb8VtE5wkAZjbnkY",
  "key31": "3MS3WgPmrQTkKjZtdo3rqWZQkhDB5eE69p72pqDHjPmodrJFfGeD3GpVEcdDNd16aPP2kkPDwWcoXSuvBpQT2fio",
  "key32": "2o8xMFYiyQUdgvLNJjtHz9mVHU8zpoVp7hN2iiBYhQpazfRufsUVbcGT6D3E7SecbBy2RSvdtRbm6CJRMrNrYN3m",
  "key33": "F6fb8BRaYx7fhJDDSLMqzesbqyWXfU12qtaqUCoMwsUJAVhqxGEm9bAY61q6fiwY5MLsvoj2nGY8cSPLaK22kat",
  "key34": "ZV4S7dCm2hGUtqD2A1erdGhXfE1QCeoyN9WW23rMQJzmryAjXKvmaEsRx1rJskFyZovYHP91AJ9PY1umVoS5uyX",
  "key35": "5zwGW73rv9LTd7p6TTeMFR1ScfGSuMmKM8nfPDxDMU948a2PYefw44Sa554gMW8kLgWdajy1QcybNmRERxMXgNiP",
  "key36": "29bngyMo3cBo16CgN6zN4iRBn7EfWXTj5wvYeAVHV9Z483b8NX5NmCC1atzhQFyhoHLos4QXPkenDj61LqjCPdoY"
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
