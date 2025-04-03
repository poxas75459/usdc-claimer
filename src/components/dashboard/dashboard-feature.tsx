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
    "3z7KQnnxDbLRV73ejFvUoSG5KLXLEkFp7U3e7XBTX82HxNkfbiNGqeCYo9a1Tz5Y2vMwQirt31qMVh3TReUsKTjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKWNiFiCt95eKPpPicCmD9q3GMDwVHaZ6JTKjnvvdUGnWiL7LfWCB54gTDsb4nbuiQBJLqnpJ953igernmPxdeV",
  "key1": "2EJms5ggbUVBPDnv5SV7S6XfwHwhofb3s4NBJaaAszosHDGFDEB6yf6uc3oMDWECRubmDMyHYyhEcjmWLQku9KBs",
  "key2": "3XS54L2G4wJM3koGYx1chCiAyVV8XmmfERhFvdE7ZsAq5jcVMHtdkeonwzQuwauPuCMdSCS8y5Sfvv8A9UM2KHFU",
  "key3": "45P8Bp13UgVCS6mwqM7PNrQ5rsMbujUE2v9Yypv3SLcr729AuoGXckzfVm2wfjDk2VFZ9rB8Fq575EjWfv38enYB",
  "key4": "2bwg9qmXxpE2SqToaJPzzFwQnvXS2EBnQ54QzbAG7okcc4mwo6xTSZvMZjuYZiAZ2vKxoQjyPryDDvJ6Sggpftce",
  "key5": "31XZBehUWoedqEQGLtUHuap4dZgv5MLWUQKnYkZMGCgw5wA3oFMmkCuGu3WqDrqBnxbDcdJFtko3G3CFRP4NQaYv",
  "key6": "3PBs9E1wgFPZm2iBskoAyPWStYRctiXkwg9KCZv99kGAJSe17mjLesdMnd7GmBTKTvPK5bTQdrpG2MHuoL7fmBLF",
  "key7": "2caLTvyRa33LsWopkhaBiuU5V1BZc5V2BYQgrZ1b2UQUqxUQAz9dYPLkFNUfmEh2VpaopyWw7HZ2B4x484giyqBL",
  "key8": "3vsdJoB1FVTxzRi5BBkmzeUhWgUmwcDZTy2E8vLJJWievsiGT1K82PLvsZUSXUDkQQG5hThYqaxwAjj9gf4mTXu4",
  "key9": "3Z7Liy2Rqh7F4njo5ezEG86gxqo5hTbdBNAdqksZfW1xjRYYEPKMQkDXTvSjoZAmCcPJpAeBABcsCMyuoNj9aE6e",
  "key10": "2s44JFjcmB9UX5fhDjnD78QY4479fSGUDzGhuppygzG1N6Y64o5awDctKnYogAUC1wwdwim3mYkBWfwEKvCnh8P1",
  "key11": "4Gr4XkVsDdzRBE6Zvyp4BcgH5BG6WfFjpfyyURgMd1ywR5kmZR8ogFee7XDHM1o3bDePK81ACtZPKHieNtvZv2NN",
  "key12": "3fRWTQn451cf7y31zinX9Eiv8459CMkw8b56jvEFPmkuS5gdnSURVc6AT7hXw6baPibB68s2w5FowybUcjzyq9Vt",
  "key13": "36a47namDt3tFH3eovAYmXaE2xYamUCzeBUaxoP4gNSnRZWCB6TbhdGpGumbK5gFgZHtBcohYkqkzekjEsFZFAHE",
  "key14": "496P4z44DVxeDBn3Xtcv81xor3N5Z8Q9ZMpukKb5Cd9Hv3X3LrAeKdA8iH5ngFFeAJB4kpVqE2EoRMYQdCxu2kjQ",
  "key15": "5pmhSn8yK1ZrcX8q4ZEBG8u9mCKi6siZkvxr6VQtHZcHXkdngvHmAMsp9QRuLDCCgUuY7n9uCq7UJNx2GsKZePG3",
  "key16": "4fFjtTHxr2rnDAtz4EisHfqFBehNUJZoZKnExZS1evk2vtFXUjde5RQjeTuYBhBvqAxQ83bNa8u9pakqwV1rQ2rB",
  "key17": "27sJXz5xPhxNSG57i5EG4xeom2mF7abtXZU6kWXMC69aBjP2rJBvQ24tr75ruPz4bm4F7C1L7LJFbTWFyYoacU3b",
  "key18": "49VeQBGce4XPmPqAN86YfTpoV6t9FxfvYWVnNE11Em3LYEkHx4x5QbrmLWiXk477RbgUCw5TQb1jBYWtffEDxXdc",
  "key19": "58AdnXJxwYvAFiGYKnPoSqa8K6mKsW8eVS3KMb1B2YYkxfDfP2fQ6d4eiisvvekzWsU6m3LZtYJ3DzdBpYDF8KHh",
  "key20": "2rbtBMHfjspy8jmWvKn84MX9XJTWpk33tfxEiWFKULbXKrMcpAgq9Cje2kyDS7xjZQdKUn1vKuH5AgW7FWBFP38F",
  "key21": "5UPGzMjvrxmi9yyQE9kjfnVo69315qhEk97UckLXpoSYofhYxHWoPouUWiN27foAwyPvLSXFtfVz4ahdppkChNjy",
  "key22": "2yau1SZNUqERHfnuynTw9uJnHUVXAGDhDSfDtbXU1jqaNTt9Rm8z8z8KM3nDVu6sX7jhneVf8A7dnP44bTNePuUX",
  "key23": "4PzFe2QZbTU6Dwdqv831pfYo7wPfLmNVzFJnYYMzUvJSLDe2sftKy7NrqaF8jofrgprQhwwdGnwGfYJLNMTxYoFr",
  "key24": "3gtBEaGgMfwBifXBqPxj3sgpmJnaYg2hEry3npGBe1z2rhDDr1SJRZ5qxvMRe9d5HaaQQsFwYDwF5tV3q6CfaHdM",
  "key25": "53APXKKdgtax5X8c71HYjvtKdk6NZpSEvkGCkLgMwXn2SzckFRvUk1TDWkS93sjBEDmRsCaomrcLpejqRB8vYEMN",
  "key26": "3JY8ULFVXKwWEJoZgKUZwefWteT8NY2S1iwhtfKKSeP3bUYjQYXTZaLMjoYy8c3MpjGwt9WBHMmYRoGQFmo6ocEK",
  "key27": "wUjtx5qZLJhuF5SrVqDNsLHt2mMmCPUmcr4auiomybrirzJTzb1g68uADZiy4TgvAmw4xmwoh5twLzMWWWqtA77",
  "key28": "29dbk9x4az6bmLje3SWz8y7uiGfJ49g2WZFtcFCz7y1NRpKey5LK2vRnWmoPDRAJtukpiZ82DanPAtmXS3pKihCB",
  "key29": "3YukbQsm25pVdDahdocjGgKPqpCQM7GrE6CS2v1ywiKZVcHavaUSrHPSyJEneHm5V71291BWyPLc9nLVhqVTseU9",
  "key30": "3axQikcDDG2SqDdu8BnZKGYb6AvYD8GQ3W4g8ic23ftZdSN1DSvt4Gjen5uppXUN9gbEfVM4fiX9MTpidiMYPT5T",
  "key31": "35yCMHei1hpzrp8EtmtwFfDeJuXQXe5ADoRn9caY6RKNcaGr58yHBd4NpkyFNi3U4GPDCJkH8212UN9JPw8zqsz3",
  "key32": "5iAdXE4c3w5rETYZ7wg5YQa4gGDTNwQZSj2nWtGFfXfoHE5HNhiF3b2W247rGNNB1Z2nQ5XQcbnPXA3hWVGBCiJS",
  "key33": "5ndEPm5RRXgNhNMCdhEz2V9azBL41wR4r3ypmj317T64iMS5fcHYVVLQftaT17WuusLF5z6f4UFP2ctDVwky8EWG",
  "key34": "ddeNz4zkb5XV49erUJwfiiDcCnhLQfezpbb5EEdibjDWQtarorChnWRZr9FDvtk2wYxs68UjRMHK2vCUZ5e3tfa",
  "key35": "3HuVgeKcJi7WRzse3JpvjtMfpSY4pUk72tuqY4yFFE8ahpNAkk4i18sbBMqjrg1BFySxs9Pq6LEWBVffAEGxma6W",
  "key36": "TcTbX2roNajZWJvDa2je1MND27d5tE7M3iQ7kkzN7JGupALQ72bxLfR7zRwyjMiE5XZLxfGhZvMvkHRqnV8Xi1m",
  "key37": "3hqWrTm8rvG3GSUkfDbvTmNcvRFVU8FXgkQiB9CviV4fKTiXPhzB7s6e1Z3WQGowuVSN9SeLrbYPkEcowfgT4aSo",
  "key38": "5ge8E9hNcGx1q8dKBnPCsCLwQC4VBvQCW7p7h3GQud7vWG2qdqABggF35j6tqpKGD3etyekV7rB8jxW1nwkvsHzF",
  "key39": "2EunFcVyvdgm2CSQ1xL9hK1ZmYa5YTejoefEb1RiaALvbbarAG5auAmu5gRKkM3ZjPDR3oimDPT23t2qpRjBYmS1"
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
