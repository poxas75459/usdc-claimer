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
    "3A6LxgnfB4cNzFRNA57RL19M3gFjdZBATDVnK9CGFuDJTnbwoEkYUMh9ySaVut8X1WfgQZyjdrdAVScdyv4Ut9xZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i42sY79eN8jHQ28NVPNz5twbdAC9VS2BvKTFzCaFQCDmDPcFiKKErTE5sCVK2hHjpNciaZ3eHMnqYxvbtzVUonx",
  "key1": "h8HKXN1YdGEigZfhKaXLsEuxFG8B2htvqEPvDaizXjMU4HFtaArt5e4dtchrd37TnqYjiL4NQZdBrfjqRH1euvJ",
  "key2": "4qrnYfTHWfkM25HiFxvVv79w3DzpXcKJd1L4FWh5hbdVDFUR79SQmL7wNaye8rWeKBjfRuXbRJA53iGZmyJ8MEjC",
  "key3": "4EgtwP8p88SLZkwWuDNTzo3LZ2mZjsPxokMTckjw2FWENfx9FtDRmqQV1qp7SnQrSxQdkGtbWyTQStzLrs6SxBkW",
  "key4": "2dKA9iWquXhTttWNNJTeH2fd5iuzBdwZ12t1i5n8n6xJxajvdLwuB7wtDR2DHhWrFFvtEhmEKYub12BRSH8csGm7",
  "key5": "3FfnagRTfLEkXSp7cPDrnmqS1GPPX3d54MFUCav6YtsSyqvTzuQwVg7n1ZFejHhNjkoPFTntizEabPeAEMPtXgDY",
  "key6": "o6Wa8BZFESk5N98Hwscc72Sd96d7c5LGq9FGCx2CrJdM1Xzg1s2jTehvA37Ui51CutFPVBw4Q4HGxT71tCaaL4T",
  "key7": "5AHR4KFxeSGb7b3FbeGK8Sq4oQfwwuNVE3Ri3DiWE4J1tUcmbu1hYvAa9TXQwQPEsLnyg7bBt5RazWDhmrd9h9ah",
  "key8": "fktu5fF3BXz4J6CDaZwmfu3iniBBhMuZybvdfp6NubMx9QhyS3noWCbzDZrzV8B8oLerTbguWDXqLbdU95VAJFN",
  "key9": "3ki2zorTo9QCDX8C1GJja2QL6HepsQCW1fGWKPGZ9SxsgdbRxhwAZLFRUdgRCASaaTpy89LbRpmswVnpUNVRY1zz",
  "key10": "65cU1AWsbvgCgxiRgm3xM1bSZWTojFUokJbbf7ELATN1VcixTPMoM5sCeZCdyK13Upq4BfH2BsPwtpi2WGcyCumA",
  "key11": "65XKa1xiLiCTcu7YHuf89jPmybWwyigMz3ugfo8hZUyFTGRzN4cFgyM8i2NANB1ujWn6DVP7PoQ9xYtLiHePJ6xp",
  "key12": "j4PgbkUMxFLiuEtc4vUvJBy8gwZTvcxtb8nNM529z13uKyY7XFYZWjhin9W97DvhbKEGC9rLQStQ9JurvdNNqVa",
  "key13": "32QAo6ACBFfcKNYptFdPayUwDDEkSU2rJDDMtYWP6RZJGzMRJGAxrde46P9Meu7FHdo25Vqn2xppMKYusN6TNGV4",
  "key14": "4BTiy8kYjwqVz2QqoF83PS1ARVyUwv1iAw6vF1YSWJQgWFNKoe55A33AM5S2fu3jUsYVNr6cAhBsMqNeicamUzPV",
  "key15": "5xEZK5MVq2W3th4AUkrUE9JxM798YxUFjBbwz1dKVxzP6G2t2q5HVxVRFJV3LD4vUK5xREARQ8Tf9TJV1Cju6J3a",
  "key16": "JFfTAV47KLko87HKg7iE1TdT5MfU1kLzeCWfL5X1pn9E4StRX87bpvrrZMjZKFMGqh9uzTyWftAbHwGxXCwzX5M",
  "key17": "3tx4QCAde5aEkgiyV2tM5DZZnq68tjRKXSkJtJMZz7knjXX8rXDNxhndiqWtSRjVXspRANXschJizCizjTb2Adqm",
  "key18": "2fikjZ8rF71awa7PCw1nKip5N2B3mmxpNv3CwPFeGg8JcmxwwaojcmWqEK6tdTUBG4F2ophcwv2w9RQroHweDPRW",
  "key19": "4yGSunp4VYGudgTsbRNH5JVK2eDEHktMktHxT7z1W4HcEo36RXNDSsTFmkNCrGHprhTAUoRaibvzEeMEPd2eePC5",
  "key20": "2UL7EDYANqxRpyyprXrmu15xZ5FpDoLREX9tE93qdxGLAFAy13qVPMz5f3PgDjZ6fbuQmDYdmppuzm84peqPnbE",
  "key21": "2EZKBXRwX9chiPDG4cFpw34UsCK7XRU3qnfCrwcQHqUyMqSCA7vAkySWV7FasApj2qPYTXHy5KxUutLswm6hZDNj",
  "key22": "4qQkcr3zRxvd9KEeWVCq8e1JAsKeCzNnVD9bwWhFq2BWZ1LkvrTGNWiPwahnq3yeW795A797u3R3jfqPctR91ENT",
  "key23": "4NWxVyHjTAdXeayZBvBwYCFaXRjJVBypueeYzvZnP7C2j35iMvJcRmCbdHbakJarGHXa6Lcrwe915xR6EHdnZYMC",
  "key24": "3PjBrb3XiSvdzPk7fzALwvjF5hTRRAUnzQUDr4cxpZ9ki8QfQRRKTPZG3trzX9FCG3uyW7GmEEP4LF9GbMpKGAfc",
  "key25": "58eK66gUBwyrkB3KZwjNpbYDCYrixdxsqX17FW7PA5vLkcme3aHNNmcre58xGKduE8XR1oL6JqZ4PbfgV1GufXES",
  "key26": "542oaCseg2sqjjXY6Sro9Xzrk6eK5uhLDEXat2mWohWsoGK8yRRAiPNS6Zf3BVPMZEJcReRxb2krW2mfXXe8sZtf",
  "key27": "2PyEX5VNSXQcYc9ap1TSeEiX2vT2vvGbHEYsLrkcVWUXzZX5nMMqPuPR9UUEC3b4Jbtuy5owfTqeped6aYbCxh2n",
  "key28": "5wF91czTEETmsLE8w3goYfYh9Cx6iygYnmZuTLdA31m5BRgUyqNFQAseSUQHFTWTzE6HSoauuugZ4ufCJs8v6znb",
  "key29": "62yEyWQk72kGg4ZN3PBAyUMxXG5crwgsboGCxxJkJwxNv1VjvqMyXxcBV9497h517ZAGz3YhLVQgUqucX6XgNUWL",
  "key30": "2GYczpxX2TfBKMEANL73PvejxKj9yxDFCttXjhQG651gAs6LZdRcsknssYVhMuzz9a7zUyXuuAmxYo4rtnePsKga",
  "key31": "dgFMaaHD8XaG5AaZtBtqGdwdnTvVbSL4a7aUi17fzWupcvUSKyLeAStVBX3B9H1EvwfC69FkKFhQXhjqgWfGWfb",
  "key32": "3BDbc5zyWT7vxueKWoAG9FFHHAF6UCGjD4c6MTY9iQXn6Lsta2eSB1zTa1xvcJ718ixcryrjk8Rg5Vwhj5XfMKHA",
  "key33": "pgSoCcSmH39vwo1bj8cAUcwAB8xHQpYo9mX2en1abxPo5XFgx1XXiN6akyo8CZySaQNiETAza9hvhkRVE6vhpex",
  "key34": "24rwJu3krHMv1CRk5PLZUeEkomNFmw7s4jxpsGpPJWFGsYh5JSjrzSUtCNCdXALhAptRdXAm8WudeMac5FJeMxva",
  "key35": "kMuzTgnH3EDKcQGKYS7qwimddKRqsXiBKty9DCiHB2E5BAMoAauMyXKXEtRvWujwf9gwrW4DJNRv5hhe3kcjkzN",
  "key36": "5ML53zsPvxLeKARgsyYdGJokgMUEy1WztPPjZRwv5oL2pMwyhNbSFhzPvjpaWA8RrWZmApXBda78pKmPv1QsqXU1"
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
