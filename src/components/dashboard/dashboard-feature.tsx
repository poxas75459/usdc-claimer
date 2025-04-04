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
    "4dDDqoqnh1ntmgyp1oHKQtNUxjLZP6gse51TZu5NzhLErXfQJ4Vx9nbUgDBBBkd3GjTzowgrjRUxJKg9mL88E6Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLys5ZxAmPVVyRhjZ5CHZ5Cfv8AqLUHB9mn8drYqJTHGqr7qHVNbqX7TA7BeTfbcjm4uBioF2PEXJigBx81jdFi",
  "key1": "2U73dhFabuDA9R6ivcaxZZspHtoLEEFNrMq3FoNzBwaRiuBA9HqbqUAYmLsuHxu8eWZYNKFkCgiLsq16nipCCWN2",
  "key2": "5yz3hzNQzUmyRFvZM8KXz1MB6hi68cczsUZ3CdVFVhcAxkTx1ToCg9uSfZJvGs8BN2V5QaEaA8NshRLLMHwXes3e",
  "key3": "5egMru29AV8772DFDhv18EPoZcNthAgH8tKP1XhAWrCToDD2eWMqDqv2XRzQCd4K9FKPKVDxRjTc9PcpGzkcviys",
  "key4": "5zEMiGvKDsXW1VPkaGQPmvbSxTwhomFMSn8HKWprrfd1xfGFuyoN3D4MA6jqEAY4Y7GLgwDCh5AbyNVhaf9BAgSn",
  "key5": "4RgUhDDw98dGVVsDEajcruCNf1cEwsrrL3LmvaYXcRD6yozQ7bX8m2aBexchrjzo7qDQie26Kk6o86uynweKccmg",
  "key6": "2c9ViMaXQS4TM6PeuNk5nThbSMGuMGCcPAy5sQ37dsDymY12DnKDQ5KLxshYzaC7PnAcwKL98h7FWkBip4CASBV7",
  "key7": "3iuR7NA7VVqRakiLxqt5dN7yGw5s6bR3qYW3MdHVznKXRpfqe7wP5hnwviYXZMK5ogpg5B5v7c5hbexSobmuByRS",
  "key8": "3V9MDMFSNCCeZhvq6jcwrfWCiSt11pbK8CM3bbe6ojwa8N6nEEsGvAEk5X8CLpZ9euNYXk78AErEdZTXmPF1fqh6",
  "key9": "67aogvQiw957geoyyZZqity9JdYLts3fLwiBxrK2JrA7623WJSZ8EnhSSMGJu1sw2ZqPLUnWA76WoPc8ZmAXv47q",
  "key10": "2pjW7iCX41e5Nym7qacu92LBERh7SfVMbL66ZxnR5waeAV8xetkyqmXA4xA4QfngCxpdADoQGHH7c6isAsggRJoG",
  "key11": "5JeSq7vfVKtcqoy1Nsw8ZmKgVGqXvbQeSjoFs2eo8gWpYZGfcb7VQm7c85Q8xBwh8Sf851i1hn8KFpazassfTNxH",
  "key12": "35KviYGozezYChdHC7KPTk9Go2oVRVPXBABQRRKmWknLmDsPjxkGiQPrMZvHd1w2BNTWiXFRi7zXRG1nPVmdqd7o",
  "key13": "4uMPXMZopprwcxi3biNvnH4gR2ExhepSAa1cHqeiFmZLg8kMj89saTzSnmbD2zASNZbTLPXFxEDkHx22nSt6odaB",
  "key14": "3tYSSvsbbR9PsbRCY4wkWuXNaZFjbfVTbEL7e9aXPdR9EwVoLv3DUQLCzxUwFYFvvkARVcSh5vcRvCze8A3gvVYh",
  "key15": "2Yj8tZBHdWFNh8mWB5BJjrFZshnVAyZ1NNsx18aBokmF9p1ht8RqgETSzbQki8aTRru4GWNh6Gt9v5bzVd9kPWuZ",
  "key16": "5VtQnLWiPnKy3anwBv2PrpjHrYBXjH1BeAAPgbRjkMF7GjzMonSQRiPtMtS2Fg7PL9o1weS1Mfpn982ktsNBpPRB",
  "key17": "e7k6KbawpNU33mR7YAd1SYnJKsjrsiCGxsAi92pM1WosfN6q1xCHWjeGy9apgiYgoghve9PkVtWxSWEcv9raovo",
  "key18": "3phwmDLqbnnwzSmTiU28n6HTtAtXPBD64Gd7k9jojpLxXDP45gidFbuSo8xrceAWqPyDn3qnAEuuu5bet6mfdGhy",
  "key19": "3R6uaoqB4kTQeUVjeTaTVesX2295c2erq3qytDJHzKMNz6W3dAyLXALxHa7UaXLwcWFEkuWuRVswEMr4apf4marg",
  "key20": "3AMyxCzYpFyVdQtZq7N6n4doLazBkwPWi7LbemzSw9TnEKS1RDdhY5PqpzVSyzvkVPDbWsfwf23EQ4FvvXYympJA",
  "key21": "qyMzWzXRieMYYtpabxsJ24pQ15XBR9usmvf7KQLEL9KT5o4eWQR6AHuFaLNyEvFMygD26YjhkhJ6UfL4yafDD6Y",
  "key22": "4zyhzoUZ2YzhtqYPodUzJr395Rw47UEjV7fLN25Tt52SDcDysXYb6mjMDdvQACpKkhq3mkvaHFha1LncXEYrHCm7",
  "key23": "5kMmsGnxYtciGtwNwPaCLri6rgYVGXijkN23ykAqupoNZm36rbB166jRjCheX7rumdCgSgRZUPjuNhhjPUkmaA5k",
  "key24": "4RwvYZjRk3ba1NVrRy7QZpKyi3XDyHXHkrsH8ibbDkemyQs9NVnPHbbJaneqAn4vccXioKn747sa9CKkwUgpsgYU",
  "key25": "4FXEzYhkCbb5nncRhasVLBxkHehig5VR9Rt9C4cPHFiqtiVCPZdwEPgwoMBTo3Uf8wRe1jHnWpEEsCCKcSYGHZNU",
  "key26": "4EKTCEP65rU85khDiYgPi6VXHpfug3dim9WjHxSaXGTN735aBpr55kKE82NYZgjgLsCkbivduHu9BQUWqnus43UH",
  "key27": "2nWKBHfW5XD8hdfGgAhmKf3zssVPFjX9JQfhJSeNrh5jgkKx1VuyDor324BwEKsB4i9nB2LyBjDsXRvmff9cMc6G",
  "key28": "2XWW4ckXUwpTx18aWYkaYA39qg3VW1DsD9VXEM971EiR1pcbc775BLHe6WVUSNecwPchQqxYs92HrvpqkZqvVkzj",
  "key29": "4MhcnRwZgPPBcLtj8RHUPDTY4ZtScaWffbkSNHHCiCDXYZMb6gRS368d147zcQT8wmis12VdCbZ8VGGpP2Uuhds",
  "key30": "3apyEGGkzrhuPHBUfiwUMZTedPuZAbNQFD7xiv4YqHHTwimCfFQe8XpPreEGwsGkcyk74yp3LVRiq6GUtFcENBCo"
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
