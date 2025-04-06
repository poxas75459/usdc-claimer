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
    "3aC5EgJ5Ae9AN5GiBkUBJofZfUMfBxgvXiHERNG76XCriKvHKdb3DugrXXwsCGE3qrvn1AX11TJ1RFJYqnwWoQi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7v3Aavo5tYnoa74yTbThdCjQTNdaEtuyMUeQ324RCso2zg9EMbGGGtQbBDnRqvqARaKxEqGwLtXertkqxqpC3p",
  "key1": "4U31RvbvhcfW7uvm6D7TxLHBPqbSZ7WRTfp7rsz4VgMPcVkmCFxSNpCgnKavsi5miBGiG1HEspWwyAeLhEFjX4M7",
  "key2": "5KnLsYV31y9HE2v4CKvQhPL3cqLC3yuZ9NQ8JyV3uFRhEAvtSAwuuib9ae7E5XL9XPG4ULKdk6nXj73Eo9ZrpTeQ",
  "key3": "3c7HP5AeXiVPcL6CMHECLzK4pJTP3x7V9mv5ZRQcgRdfxFkkaGvkK51jL2MKRM7SAC9vKV7hWzuurgpB33p1HBUM",
  "key4": "2cTrrV1yfWiY9aaELfpWAbqqmQMpuN4ARFP4yATRSzK8BbzWYnKM9FbUXPDFCoNMaLmBvgTQ3FR3Cw3p7gyMK4nT",
  "key5": "A48oEsdJ7R2bexPoMzzn4oAzdS7zfhbFnnzcm5Z4Xx4ScKRijvrF3xVhPVThmApjCWW6GakcJrSGnLXqtwpMA73",
  "key6": "2LcmV74k2hpvvSyNwnFGaCf3YSAa3LGMWKsZKWJAidZqKTHoSQie2oJ4AvmAH7bu2vwT5Teu7Qx6fLgk1mPPAbeG",
  "key7": "2VJXgnujpN4H6uNzyBFomLND3TCCxjHsZprJA4aEX4NZdkGuHUVrmfQPoyTYiZq9oL1MqnDTvxS47dugBpcjQEdr",
  "key8": "2LowD7PeRhBU1KTnBJG1TGkP42rDRwpCjVqN8pHk9Cg2V8poKuRhewQdhXd1jKeP5Pu2Y3X1z5iM9MvWER3KSSYe",
  "key9": "5mrg4qfjZYnDe72DFqGnjBMguQ4yM6WXeA1YdxVQKtPgp5TNzrnPQxXjDRejG1zgy5RXabK4YL98X4YzwZL5gP2Q",
  "key10": "Y7SzoEhx7cYTJsRWwV5oEa612vnwWNbWpFHWuvu7mpfhxEoAarqD7g5ArdiciQrHjvvJszpDmZiaQ6gyT1HKBs1",
  "key11": "5ogZAvjpf99A9xH2CCrK3CPQQXNnzXd4NdrVGhFpPXQje7a3EmGq1sJ6vPXMjqqoGgeevnPTPqoBXBTFs5LzB8xz",
  "key12": "5GXpkGSPVCvwdcRnD94kTCGPTXLAa49KUVVbyq2jskqRRmqsY6e8caadWd4tHp8nAK3XzCbaymwpZpqTf8En4LpE",
  "key13": "PtCXjuoSi4GSpG6YusoeSj21Twxg2wCHUFNSM1A5spkYTvoXRuCUdgqV921WABJXnVprSeJoUWhE9z6MmdaaubA",
  "key14": "2LX5wn9FNNF1CGfba8SPtTpmhD76JkAhtd7f9SJJKATekV92D6yYUpK3J2Q65xpygvEV1LWcVoWum4NHWyifQocr",
  "key15": "41d2TnrbZ6wA4otd1oTpDmaDPi2HM9dAPMF65XGv43UDM6cDHxViJjLE9BK8A4teuq8YkUX7PKpyLNaQrGoG6R5a",
  "key16": "4mCanUCNEjQWVMj76KBYxTB8g78BcxppBX8UcqrSt5GXjs4jGs7xg78bLbEiyBEVEzo4GJtE3oVCxQnvpGFSezwJ",
  "key17": "5Pq4yUBQZTvHSmT9VyXhFzbatKqnUF1fzkcY3pF24NgHGxEvSY1uJDG5JzvuTcK168VMrqh1tFvJwvhXdHvDis2y",
  "key18": "6ziSBJdkmDdUZqmSuMVmu7nHQFgh9xBSS6dPSjPpjcCHpJM2h7PjcnvBkDmjRBdpdYW37ttameC6J7s73YZQ5M5",
  "key19": "Qczspc6vL8Gc6ocSnGV6Tx4RRm7HRHAmmRyZzg1az6GpNmVzYWEb89cbpZCmwjhWSvoAn67evJ7LQSdPZghYrF7",
  "key20": "5eq2yVieZUVddmCAbRN2pvCxxuErh9hGrb9hzmDmKQH8ZUkiiCddtMtvUCNhjMc54bzvieqyohntJS4cUo3cZiAP",
  "key21": "4mKiq6hWeDabuXHZoA8gHSKhxkwZCp6T2X7z71kBzaX4HhCNzkvtemgJrQYxwLvKdgdaU7QhmG2MMRWAvM2z1Mpc",
  "key22": "4Y9diBkEQDkGYmEQteZpZ9dPLKVQHpPezBwE1xMKkQuDzGghHKC977cpWUXRyLrbgKQp6FzzgXusXREwEpq3JGNf",
  "key23": "2cJtxJydJeX6usfVeetHiC6sRbTX2T37PQ5GwjCqFXZL1QA4erUcUVoPMkyvzsc6dq6wG6nkaAB2o1Aar7Xk4whk",
  "key24": "4tLAWEKumG1kJt1Erhsa1x8mskcfDRxZ1JA6ALNEmDs8nAMGJhDrWqBkqgNeV8TrxY73JHuUNHg5n7LbF2juWg9L",
  "key25": "Wq7R9A6aSyS5jr4EBuAtbsSt6RuVzM5h79X3DkkyYFfQne3eWoTasrEi1kumiHZJPxafKKfUCGWjvSUfj4tiTn3",
  "key26": "2YLj8jDi1GBCVtzAszzLEhYh7Rm3aacnKxTWAQHRbvJdUCNXeD4J8v29cUg7fFQ6mSvJzDagUpPbNB47nbF6X4NY",
  "key27": "28D4DT9Nmrp9TNM6p8CtSJ71h3K6T4gN2WBEN2QSkFpePxgTgvbwrbdp7qQpq7rmrHyWYNXpitvKYft3bxN9qLpj",
  "key28": "3UVdoiM47rcDDqZ2FXRRYeD2Ko1nkyiZKVD85roGbSG8WLztHgqFfB4cT21rafnZHs37HP6gCpkqb3zxNqPNUy5b"
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
