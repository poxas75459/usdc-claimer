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
    "5ueQFdrN3xQynPY7ScTbSN2aqdvNAjam5aMutSNMcdgnbwHvzwmMof6EqEqC8QcXsPEDtkHR6eZuj9CAVr7qMZZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RZtUnFpSYsFLgK6wNwxTCjVDvWHdNY4WrKmoWVNbaXYKdWnbU4m7oB9E3LEumjitF6xDNHhVk57hjHtVZGZ3dRL",
  "key1": "51GNWE4Qo61vHtB6S4BE1QL7Y8Yd2nEfH6oNXHnobLG7yE1sYMwBExiGtmX8zLr7vbGYkM3AW7CuXBvp7LdW6WqC",
  "key2": "2Std4VTUvntu78bmDgSLNX7xisdUb27QkyH4r5Bz3yaWVaUGRu3zUr6LC6Vx1EPbRXEj2dzvD4ia3aNs564BMge8",
  "key3": "3FQhp4KYX61hNzxiFmpfxmEBGkykfFr8mBonqV6krgAmzotAZ8dMojYGKZvytYQN2RXJC3ajT2bY2WmxiTDfX1wq",
  "key4": "2ia6qh2dAtGNyeAHPn7e5137eZnKj3DWU9FgTupDjewZ3av8mMu8zzEGhXrpQyumKXhMbyfFWhAJKBxZ4oy5r4GF",
  "key5": "VRtzRbu5X8CD8FQXppfV6Cewx5Js89JNa3rptz8fGEGmNisQHw49ehESL6jvw5p2GYpcXMdJX4pz3hHZMgVrKKA",
  "key6": "5nTCeZ857CPMgkKTMafFYE7XbR46Ho88QLi38VrBmQT9RdRA9PMzETDL7eBm8G2epjkVYcjE8ZT5PoWJZtD4Ujrs",
  "key7": "2R5Sper8KVJckbsg9bBLxhW1XfZ44GgaPsq8uBUfbSHWhZBaucDM5atZVnG87ddQWV79s9rKVE8wzFZXM27RVrvY",
  "key8": "5N4JGwJjXCmYXpbovP5CtEojGr541Ygf83vvRJZeatLJKJHhLnMbH6jCV745EoBfDoZEFYdGJ9Gako7AiyExD5JW",
  "key9": "mHvVXns4sEs8pnEZtr8Skn6JyffMgXCsHva8qHT6kSScCaFTzZnyVUiFzJiUzv2nT6YskG4uTV35UgabzMHgNaQ",
  "key10": "US4e8atjrNrWgtvkHKQE87edfRydJDAq4H8XionPgw2aCuvp3QQwoVTg3Nva6ALnL8VNLzMfBmHu8KzU7ScuiBc",
  "key11": "4GtVdVYgqWdYQCQdwbF6eRkpfLfV5w1EtqjpJ7TguK2ce3HiuEQJVyrFtT6jZPuFDS3wDue7JxDrhK9FJrXStnpm",
  "key12": "2ZDeqbAB12eqCDwHibwpEnwTxbqbE11x2Vqj5yuMrrmgjUeN3kB7XT4irxmawtvb9CwWoCgTyMJACiSz332vLGxi",
  "key13": "5QUQGeYisM2PPnWL8La6bG1gFYTWM1RZCVJE9WyDksd7Ya64d3k2rhBRGodakAJzPkCvLPL8MkicXznu5Zch7i32",
  "key14": "57GGRU8KsUYYBU2nmKAwkwzffBJ3UAhixwxKFCE8A9NQLb87SQi6NHJ3nKCmKGo6tdRxWXmYKwSwbvtd6EerUoeg",
  "key15": "RMLvCME7AbuduQzLA2hG3vSakDeVmKG8KjLMVqxjJ6jHcDK7ucayQcjJNHimnzBtMfLQEJ2brA4LjT73gbE9ZtP",
  "key16": "22vuujShkwAuuAXfqHEE59TosKvGs7qQH2JjVATEFWxd4eFb1gsBAMF3QxwkVwFV3oBTvMDqSC47YVW2Q9dbrQph",
  "key17": "53ZKBah56raM4Rzmat5qwEvEAcDLxK9UY4MfZ5Cwac2YVhkQ7qCaCNhRAG5NcpkLLEKGDXAZwYFFmaKNmxMobHbi",
  "key18": "26q58WcGv3Bf2bJ3djNnP8xrJRcj1bXTuWpptkRjBGktJ2bDXciqquf88RaPouuz2CS6vdbAmvW367aUg3mLtRmS",
  "key19": "5QiZNhgLMPWKgHvHgsVvHJuKX5LQpn1HLzSF8rMrfEFDz8pwxL2LCvgKA3cV81isAk6JFbepQFtKfhhtWQpSCpeT",
  "key20": "54eWckTGSFpaFHPLrHUCQJLrxxCGrZU5d7vUGzYKyAkfBDrQjfHghJMyg5WuaKGNzFd8MDTKMu6wrhEUHFNLWCaG",
  "key21": "5vJcJrL6ZQkA9f9HjeviGdNeZK7UZWf2hYQsXUNK2wXRJX3u7oLk4DkSP386ypBKQwJBJSryySmRa3JoPFm1cpJE",
  "key22": "2E1uZr7MQ2z7wSTpVSQaEP4WaWGFE6Wei3B7xg7GQ65TciXU8kVXF1N9yNpGZJAxjpPS72DRwR4iYJ4VtMUjGkG1",
  "key23": "Rqx6SNGWFZnWQ3BvHddrdf3zm7zFwyU4obkEp23wpcodheKUw88XUizxbxTNvaDPwj2WKbtEvwGJxpeQtJGiZcy",
  "key24": "3dqhpwmTBDN6rLT2zRKJDdi1Weri19HXYcogeFP2XM8bwRdcFnqT64LfpRB7yCjYRNamA459A3SQEwMeFvLCtgnt",
  "key25": "25a3em4AKvmqshswrSV2jDMc1WmJfTQV8yAgPBB2DvqvcwDRfsJqwWvjN23kH74Ky5aE6fjznRGYfC7f42D6Cpxz",
  "key26": "3Z8SUivUNZgGeR8JbPmqAYjj7VN3CVEsG6uZLVEgzjqNtPCzc4tNpwmbPgoVLU7fdetwYoy55Y8EbYbLAu4sZ7c8",
  "key27": "64VwSH2CYQn1vKeJZG3brGt41kCFtfrDiLc6piLQjFhovHeUY8iXyWADrLKn6yG7QgKBAwpctUaH76ND3f67kqWn",
  "key28": "2eJJApRn9seW7szW4LVLYBa2XV7Ut53Sdy3YaSqWgKpLkfq467dA1m36JEjx28x8JiYCNJ8EPigK3cVq2LswnYMd",
  "key29": "48pmyrnK47F13LZ1MpW4p69xEdvrFe2ZJLbDhLufaLWGiUQ6dwp8b4M4PFXvk9zrGDyJxjJgJmB6wXgvtxMyDEqw",
  "key30": "Szk3QSde4viBiomHhWCaCQFJ9MF7fEfKGJknEK8DWH7JQRAY8PG67xPsNqaWTwL3emrjXCWMnfFKpXonSFVQiHf",
  "key31": "5T4bZ7xSkKyNtfovDEYQhnSsnX9jcQ66WhwDyFuY1untFBdGBEWv1KsvUCRrcSDt39MB6jMYDwsmEuxc6p4geJMu",
  "key32": "4LZxoQXyajkjKZYiB4Lp5xCwNCRFz4PVXGMX1qKM3ZwCfGGXA8dCvkwnSh6VYEjsdJZMPRAMtvWNLhrxno7fAdrY",
  "key33": "2dtgUgqXFZ29DzoMArCawAMQBFWWDDUAVn9Eoi79C5HbqoRH9oTHMpsVmbsNA4xGA9fnpQTVqMeSMGcVGh9DrzJ",
  "key34": "45xoUrxfTBzar5TGKde2WgrbbLoEGsmHwoA679qtAUcp9TSTNaVoFNQK5XgHhvRaiMnJhRXUinVs7yopZvugEEmF",
  "key35": "meS5dHizU63cozjTLtw4PidnYhTmWfaFH4v1vC21UDsWsCHoyovZSx7m9iU3MXnWxEATWuSVSRMHYTpD9LB8Gio",
  "key36": "PKPtz5FQa8qS647AoJjKtUBHjU9mJa1mvWshsyLT8EcyFAE847Hum1tgnr1egqHinFua7S6feBXBgjy3sV5giKm",
  "key37": "3kw9NYMjcSJN6hN1725fu4LmzdVpWhorR299rC56SaNURS7gXfjTve3mgGhkzUDHgAzDX2jWcS7Gcni8VEpCLxDm",
  "key38": "2fHuVeghSNwHRyY6uc49eL3wjpkFMt3AazHMKxjraBVsDdWXMhZCmHCJNiPJBkqeXpoNZLD4gMRvnp997t8neuAA",
  "key39": "551AnkdpXczx4a1SdRPaFJfrhd9h2S3HcpMN4G5ycLs9u4tg1oxZAm9WYcGErEZbSEq6sq2gER7jNswm8itmwsmP"
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
