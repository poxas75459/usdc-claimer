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
    "2YqXmqKVc7UqixiyXjjDv6n3aYPk5K6A3qMqGVy3oNk8UL1GUHTySQi9tQ5BZQ8Gw5q1FeuDudaUzJ3V1Ab9c9pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWr1XuncoDJj9pXkRUh5PeDcfTMfiSW5JWixU4ekAoMPYicuFZRGJDm4hwRzbMZcgopdjdRwums3ENfU4SgHjw2",
  "key1": "47KH8nLVpsA1MFN8JbeoNQGfrea6Jb4RPvwnsj3dVLQpprqu8sNjQ2P4J4TPCmQ8hcYtDER86MMchsJEtZimxWV4",
  "key2": "2FRS3f7v3uptJCj3b4AGoyfxS3veXpk8BstS523AWC4VBjaZkHoskL2ESKY5Y322LY7CTc2m68LvnMaQDXT9AfNe",
  "key3": "335U1aHkyQk12sgYQi8yBWAgNvYRXTHGRKbd4N8xy7vDfMiVPqCoQnTkG6P75dvPnB49wiF1uVAUZWDAC6bT1Abf",
  "key4": "5MB8kvym6Mv7Gud4sez2Ryd3unXYpJ23athCS8g3923npzxg7WbKADFSrg8urxLAQBAPNBmRBXyhSTbNGMhaVxyT",
  "key5": "4pdG1vZeZck8MxW6PuDuc9QXe9XGKRQnWuha4ycVdFTX7jzv9EuXNmbNEWcgzd21hiarLT7T3xeC6pQ3wPYAtP1c",
  "key6": "37H5ap4vBLtLofJnnK31s8PLuWWg2haAa82omtxApXisWNutHzpmH7LUMkxv27wNJ1gttDRVdrwS1VxPCq5rXKb2",
  "key7": "rbMcnxMpn3kMP4uprvMbeVVvc7MpjvrFPkei3UKqa7jENfgtooka11oFyUXLevCh5TrShx1aXyAeYJkCV69GThK",
  "key8": "4ghxxVWM75ZFNui7PcwPnEy2RE4D8x4uYspcN7QmyJpqSNTLUn7HQe1JZLEmdnGBGuZgfkYt9L29hkpQxSDEJv3h",
  "key9": "5VqxLeXFr9X6BL6GGnnY7rh7SKvuRab8XvLY1Ne9htQZz37TekmV47PAZH13daHoKgpcaxtfPUg4nnRMg38NSysr",
  "key10": "3reaTxjEU6D41b3tSDBcVBCJs5KtoTT5UDPycLiXTnprsQMhnSv8c4E3GTVhbCQQjidz5DeenzTcq2CKjdZLQNdF",
  "key11": "4ZMMvLTjzyCPn82WhcAvMXiWmd1Vzppj5NmaynpYSoV3bDx6BByLtYWguYGjm8dbMuBnGrpgwV582BWRuTTTJN9e",
  "key12": "4Zqb1N76juGeTyFBYaZDENApV7TDG7BwqRopVZFDZNgmZiHtKnoXrAvVV7hyYvjpCq5LD1cpuywyoCkW7G2NCRse",
  "key13": "b9t8fGEEZSt6mp32zNk3WqySWqiW27rtccLiqXaktWmrQ2tuyiS6d6ZC1rP1UDKNyphgTfaDr6bW5KmiPFxi4yC",
  "key14": "2iRNGH5cJaHGUcF4uySYUngvBTyCALSSdnN94XqNLeoPqZSzhvWnn6GDBKmqGkCK5U1jEQdghnSArU6M1UM5XQ3",
  "key15": "5B6RbEbduBvSzz4KRQebdfATtbsVEphfBAjztihMreWxzN3BdPXwEuEhfzsmE4uDr1BfjwUYGUk6hz4VB7ehD19k",
  "key16": "9HnUXHwgt2ZUoPKR8AwFVbFEcYDj5VJ384BgpCM4cSqyrTfwmKTbKHjG8aKV1D3qeU15WkB35tckMHUxHH9WgwL",
  "key17": "2Tjgb6zPRFF47RhqMcMiR4UdqeE1DfxGnA2JkR8Mc4u5B6JEs3Lm6vu3bzwD9aQDzEZBANUqdH8YJ4EWWf5Fz1kE",
  "key18": "4tCKh9Sqm8aQcGtNP4xdXT4fnzdN7aXxCUWDyEBu5N2EzqUWaBYBdP32yGZVjBLvveoawaXKXXDij8QFh6ZMjv71",
  "key19": "5mz5tP3diaWWGAzSgtfA8DQqH8afoFxHSj5uzGTyDKwsHdYszR7L9rCBiRuNyyvrEcWB9vMekZk9BVnZHfpoPnTg",
  "key20": "4X7Cqf9rjL9vPxyPquvhxEgqMnA1r5xzbFCYHboSRGconiHbgorZTUnALxyPY7txphtLi7xm33XYqp8XuG64Wy43",
  "key21": "4ZNKeeVWSkmsgm4vLgNhTyyvVBrZjeD3Bw3zsfL5n4vEiiLVjywXBMtmBvweheHrHGAsBwiY5ryZEd852R35iV97",
  "key22": "38FzxtFT7Ct3nfpYXNrnrQN42rWmB6x7nLightxB6UEsi8UWqPCPR1Vg9Lm4c26gnuHBp7AZ6jbDpHJY6mHLhg9a",
  "key23": "3coTpYy7msbim7mgDDdroqZVR2ajkefqo9o7prmzPT4J5UdAfYgkH7U95YNfrLFWtemad7D5Dg7fMtE3W9jMiYYL",
  "key24": "3C6oNgHZ7sPANpuraMJnZGwELTv5NahynNubfgpQgAhwD1ZWcq7jLVP9SpSMhGKPfPBs6J9UZo1L2roiQGbh8nSe"
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
