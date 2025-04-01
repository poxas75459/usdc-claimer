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
    "2RwotkhjSfcX16oRd3ZDCkF91HMxym21fagCcihgPB2abdeAWi1345zuaxeWzFRck5yiqkn4DR6NPYvFSmGqEg4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qf3b4CWmv2hmtCek5fEnVwbkzbhsUrCqUbRxm6Eu56RYPCoR22UkXi5AG8jNBVzQdghCkXmGrUntxLpfp7jzgpa",
  "key1": "3pzYu3Cq2182M8m87M3x3rZZNL5eH4WkhNi87qJbcmrKbnqpH4pm1BsvhvGiaVRxdJZjX4XJ5m8u4nm8j15EtgU6",
  "key2": "2ayXZvR29isihk5DLYcnPH31Q7auVAUsxx5sve3mjKNDvYdeFBP4ow3T9TiQ7qpAVqu9AzBYnnvZEM2aRkjBfKLQ",
  "key3": "3sXt5kUAuuV9YVmZtvyRpGt5rxeo5x9igWaXip5dSx31bSRSGFPyrhKB8VP82EDtWXDCCesRJHSqa9rSnUZNQcgP",
  "key4": "4r18icDxrXTuik9uza193sGMLz1hZmYgRR2fHa1vHBb4rKPz7dQHBnx9TgnYxWGd2XrhnEmnu3o1kYXr43bwVyv1",
  "key5": "2nMPs9yy1bAXyDHdouVorepYETH26rFPwCw8Usr7v9b2mELvazGjKxA4jqbkwUGX9GqkmokHU3yX1UCVCR4Y4BGc",
  "key6": "4qw37grVCh8MXcqWd71sVaupbBtw2QK8Hb5kKqrpDTMj2ESPiY8JwbK7e8xP8rBKupSPdrioD6DpLBc7cEGMGJuv",
  "key7": "3CbzX3ZRetZ31wrNzzVPcyJGJSpvcXoJe5H9G4WmRDwHYSMpA6YZrzBeuAtnGibrknSTgWGCdTGRLqcLAMKgHAtp",
  "key8": "bgX9fWTZbk4TbvQYy5gV93ahEdeqEZfRxv8k5xSvifr36jff8ynJQVZ26G5cGy83hwB7JxNwsmToXkTXqb5V6v6",
  "key9": "5KHuzpA4gyRdHyCh3Q8QdyGVL6HKYT8sQSQiy2kqYehBqtK2Rbg9LCgZfzaR3bdGGA9ZEnCgu8MNTg2xi8ptMU49",
  "key10": "5iSLLukzu495aKhQCHz67WpXXmpZoPgZStXXjS2Ro7TYxxUjainoXbqtPuq7NPuxpSuFpyW9WGEac41Qa6fNDgA7",
  "key11": "57CwnRi67sxV4CoU2Kb2puJ7cjoUK24523WaxmU2JyHyhLGiZSDVXGz39B1oNUUEbL1kETVzKKdq2LAkDZUqRECH",
  "key12": "63PJmMrRVPCVReRVmrq1SyN7KRVKpU5NhdAgtCv5TUWhoT6DzHP5BSG4w2hmKHqBRERPpLCWzKU7DcfbJro8uy8t",
  "key13": "RC7qEvtSt4dKu4M8j663uQgd5zwP3hQAc8hFi3fCY9j7V46cQiQvATMxShMK83boj5agr7ksk3T1PT7Cwa6Ng5Q",
  "key14": "HwERHtbTg6V3WHwA6WwVExQk1X7gueZ3Snd8BXLH2AsDk1JDqBZrqGH6k3LFX8ujj5mk5yXX8gHCkstbywoieEt",
  "key15": "28nWZ6QquMtSU52wGYicqj1Vrr5nF3uAftQxNkrXU9xhWswS6g6hsJ7z9dicbt3u5ttHxLAJq6aAXpoZ15v51U4c",
  "key16": "u9M7cHAPGP7ymYtKM1rumvQ4tAuGzmKXGm4QvSC65UAaa7g6FK4MJtZS4ETLV3FVhtpetNmRQzNwZmBm88hvobR",
  "key17": "2sxCmhgD4LU5BPFVtkThLDibxAEr4zRuAgukMsD6v6146e1visEic7HX6Gg56Xqf2eCAq5Q7M8uLreoE4LFFcoaf",
  "key18": "3f1B38Cr3vXYfYR4CjDF3MXz5jBg1RJE5uE7upbvYFYVhnV6CyL9eeyNMk4QTZcWBFNsSpcoJGP2iqdPBgu2jpKV",
  "key19": "Epe4SbWZcW8mnjC7woKCPd1WfjzwPcRABFaVVWbiFpPLio6W9xPGGjP6uTdTvuJX7zZBYnpayxQ9osmHvydhLoz",
  "key20": "gWriGXkJmSShBA13KSqCszaWA4AEooMDEQGnDtX2XHDtqSZAr4kA3Axqf8e2ZnEmSs6bApeUzxYTrMHaMPjdcdU",
  "key21": "4PGW1yZsrR8QjU9xG8FkYJHkH7XoAgWASVT1hLsBoPzZZ5QeB1RGZxxdygJeXx95TEkuVmvLmJ546dBFrJRkqXz8",
  "key22": "HsJC85eZ2RrjTtMus6u4oDeEcE9SKJQ9mgqpAdBU4wfYURYKcwSpZTnLVUXb7ctawvN22sgFJqXpt739RjmskeR",
  "key23": "4aRU4nuwfKbqE99unsVDNQmJJWtehiEqoPXNz5iU9t8X9cVaDsjciF9Dd1QHiTVSPweiaZzbT9GoeLZkGVZggW63",
  "key24": "ADq7qJybT5qMWxvkerAPZ98rPWSAJ5YqZdbBq2cYQ5YECZFPQCNCLUQLtfq1z8jc1uwGKS4rTiZMTZTeppDbdNV",
  "key25": "z21DFofDWfxFgg7s9CNzQZjzEc5R36VTtoXJR1ZQAEB4Pb1cK92PmzDVZkdtQ17BfRwSyjMYbCCQ1EAZzcY3rwy",
  "key26": "4x4jRMbB2jHKETL5Ca1wPnh1yKCLHizYhE3zCyo9A5o9BsJTTUHaYwqVMW6VDG1oXJpYsYxAsHPMNm79pd5wXoNw",
  "key27": "vKz5Ks4FW8CMNeKHCqGjSohsHrKjvDGEn5hwMHZR3TXQiKuVjL7BcmKtGjfksTXd9RgNxqJH2o2n13UshaRHESh",
  "key28": "12MuNePou5zohDvkZ7sGoqfy5jG9Tgpyf7wMqZwzdbqwdnoS7gbZFFYtFiFeE1EVvDjFYw6scV44AjdLpRZ7QUc",
  "key29": "2NP4i9onBrUzXnNX4pF7T1LcicvG8KQbNrwKi1FZGhCV8Hnu8ntbPBpovv2FR1WzxTNM9dUKmsYkZTe1re7ixwcY",
  "key30": "3G8Wjy4dKrAL13fprmZy4ABZ5yV4mTm9sL6wchKU6DYjnqHcH6qyPjDDi1QnMumjidmF2A1rM1hrbSXHH1ZBWdKY"
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
