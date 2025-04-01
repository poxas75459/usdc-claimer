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
    "3sGVZAvQrnDYnpPYLXJm39rd4J9DWr99tSg4C7ubA5EsZb5ZM7eDV65CKQvrbXfv8zBznHjatRzxM2sPYc3WfV1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FB3jXX1hFR3PYtLqXNi35cXwd8KApQmRpXCZXzYGzPiWKBWtfxKd9F3P2FCHnTY6mQM5KLc2N3JVUpoF9WJwTMG",
  "key1": "48RQYH5GYknDN86uZwfUR6mzGCyoUUAVE1W9mHZ4JXcHwaRPEduL3XcX4XuXrVYB8RYx8X5cTQNwTiFTxHBnqSn7",
  "key2": "4vweT65JLnnnLX5vfTfjwJFxEuB2pAP5doAc223RXx8c9az8wLCKtC91Z12fGQrBb5W8xLBmJcctDy8kCNnYYYcY",
  "key3": "3jBHUBYELRWHXkwZHoJXRUmHqud21PZD1o74DHHaPyfWQd77GSP5NtTE9DC1LmLtMSPE6CSgiwyXZLn2H5fRqPkY",
  "key4": "5pmw5MuiBBj55kRJYHCvPNmfzEi4qeWi1kd2PVPmWQafm7TNomBopo1hCLvStScEUoF3k8buE5e5ATBfc4EXjEKN",
  "key5": "3kgnR5xjX1LvfC3jc4X7e2KboVxz3H8dv8s8J28e4TvTxu9qnzfvA9sxQYy4xtq9cbedtVx8NN3Cy28riSRo4JL7",
  "key6": "2j8Led8bd6t1nUDh7MRG8jeZJMX6rxP5QM7eyAZ12JdQszTyVSGJyqogP87mbJMYuLmQfezSUv6f6XeaozmhSJMa",
  "key7": "121RaYusiquTH78ByfGAbnFTjf1hsr5bX5BaMSFY4GSSWNPKJBiv4yuqof2P6HJCs9Aby2KQkXSxCvZACApgtfSs",
  "key8": "2dqwscZt9zYPBpnW2Bx5wK7hDNAqRBhW85TPUyhvGhLfSiBq4ibcSkCuhuLFxtHQ4DWPtvCHKSo2dFPuqKdC3i7r",
  "key9": "25MQZNtTQeGJqKsBumjaW1xw7NTAdHjNYKMDUBNT31h6pAunP9drECbCo2ox6THFkGXpa1YzPLSi6dhZ4wQS2PFi",
  "key10": "fHzYqUqYFFySrgiiRzCosoVqCEZqB8eCg4S1HtorVAxmp6i9GPvpGbkd2NNuj4jRf7A62J9cNZjWgUx9HLCkk5E",
  "key11": "3YkBYUzkvXbFnAoDvJVag5siSXQEDR8WfeW8WPzw6L4goTXb4gSrw7Tm7H2R4VRiAzeJi4RHoPsS9SzPwe3DD3Jg",
  "key12": "vvcA32wEbUEaGEVmay2ynDNiCYqkqe21bkxJLkA79FkkFj4jb9YU1D7e2hAj4oeWeKUNzn3e5s3ZZa3yk8MCUMi",
  "key13": "EHGuLWHyM9zysPk523ARpNWkRm5S7xAixc3wbjCPB3ME9pGRLGfzaJUUc53NqG3C2XFfD4f2SeZr4D38LN6da8B",
  "key14": "2BenVh9meaZeV3TBpYs3wPjUhNL2gFSuf7FAUcp3f2PehsBw8T4TuqShF23wRA7wbU6uuvgpT5x5jFXPdpaVDBjG",
  "key15": "2X6LvMVzhamcUj2oeKwS5qMkcgKuf67ex3XsqnvGD7aPvDrBHp1MZRgJEV2w7T4b1S8PY9Mmc1Sk9XwmTQPU2wrj",
  "key16": "5GVAvcFtHWXQx4SfCJr3rvM71vSFqrqGkaRDf4DLjqaYd6APpneixbfmawe7718t6k1jYdzsWjjKGSmrH4dQrxFn",
  "key17": "wC3maSPVrZ8WULTSZ1iStvkG9NsVpXFxGyyN7Z8STyj8yKVnxSpMwdPWacipZ4CkqZEnGrHL1XstYn2XfrDaLHR",
  "key18": "4DqfMdfp6KBSSmjHSkZqM4spEtT9iUYkNAdQTDamZ4NaxEeMbAHVQPwXKDswHgPkmoi4akNht9tK4X4eVeXCgZv",
  "key19": "5GMeQv6ji99vBwC7M6osiAPv1pxQ84hTDCgNCYAcf9rTdtSs43rNidREsASzcveFSzaHHqer3KsuppVQB92C3x68",
  "key20": "53gSnBGVd69s4orwxeDcKQhW84Sem4Xnm5vTXKeXJBwSS5HA4GUB5mF9dMxnNPM8pcCVYdXnxQhTRHLL5uuHrCD",
  "key21": "5iTNnsQ6wWg9vufa45FCVbySfMFm9dR3at19a6C5UUohuqNjiYqkYa1cSbHGNbNMYFi1U6JNNXovVUZmNWcih8A7",
  "key22": "bqCTF7tFRENa4qo1BpGb2RgTNUHmqe1JMss1bNJ76s17eZ22R9Nj8qcukdjFXae7gJ9qieHg7XokGpDYs7NSnjk",
  "key23": "4uvyJRSGZmbadS6nyh8XVCSJgoUKTHv5Mke7S2jjAM9r3wjZoWkmrEPXDjUqcHYDVVjj6PLJ78ySxamw3KAhRGdT",
  "key24": "5Ee1nTbNiJ2gfeWk5xy3DWJ9jxgDd1jRHpxzyPeAN7dHVTuMgTNJDdCME86WkxqXdGRryL72FGuLiw8dRJ1yBaUD",
  "key25": "2qbGbxKCLj7T2p2W72gn2zf9hfTv9iFJuzjFxvyq3eYLYytWMf1HRRdA22PovjW31hhu5EaMRhY23qpo9ap4pFJa"
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
