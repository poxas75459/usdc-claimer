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
    "3KD4sAswPXWP4cXPrbmEvnHxHSM9PpciZGKToEQi6YU3nAVsKpe7ht5wdCtXSdm7TKkpjh5fn9kbm8AzSoBDFo45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bhk1uLmhq8uHwvHQPvKoZV6abW6A9Sg9bMVPJsPpj5DYvPtuLyFtXViUQPK6ptcYUJKhpbUgNy5rF2fjMWAuQUM",
  "key1": "LjYYADSM5cpczxNi6ZcVdmBZ9KTcFmR6EGDUriiW2mQWmZWmU47DJQRDB1AtTB1ukimvnrtZMjA46vhFWJBZSeY",
  "key2": "3ByGh1zLdf2UoxBKjanCeeABbCZBz9q3HkZBMtiz2uguXSwiGyi11htJzidobQ4wmbKUVmixasd7a4wYdzcdfBaJ",
  "key3": "2p5ns7GTqJC3Hk19vbh133B77hXnjvQtRHJjZijN8Kbi2D7tYZqjj1D8MXK2p5b3BinguyeViFMvR6VFLXdTax5p",
  "key4": "3Hv6u3mU4jKZ4U6D2pzKRQAi23azqYjczgtiktKEphJ7iTUkyzUHeYYsnwkd67gX92RmrXsiDfrWTrbCNrBDRpAg",
  "key5": "4kS1pvpMJ6CunGVqtSFGRDzCxDg9R9Hy7aiwDTzCw6rWoq53zDbYo6ZEYsDK43TRWDNHt8k1i3ZfwZYVe88D2J2w",
  "key6": "EFHo8XYzY7CtFr7C51eHVf7Wa3QvH77LDYhhBjUEPS9JWzeFYTJfKjYsJdro6jmcshnWmQDBPJRzrdCCdobK1xd",
  "key7": "2RjPGAYXHpH1sbVCtK2a3UkMJusrbuuJafXFgM4CwBEQuoxxTZ3wtBSA2hrJdgvH81AFY9LECn95Nhe6Pz4K8mbQ",
  "key8": "2X7prYomHxGchUyhyFYkdcSSMSkDERj8NpnWRvgoYdqbwuZ6TcEYsZCgLda6rZf4hPpiGmwJ7h1ZjfkEnWjbQ3eF",
  "key9": "3rQWN75szxxrujfeKDCasnb6SPvfLJoGymNkdinY3vqGq6LbcX8LVqBWRG5Bx2svp8AxChFiy7vQhawZUaShAfAb",
  "key10": "54DpxYbX4n81JsSWdvp7N8zK8PwYb1qNVZF7dNuqU1kcCCHtGEvn1kg6PjrPwGKQLibP7BYMA6Lm9QZgZq8Ffwd4",
  "key11": "4dn5HC56VXcQgikjMCdqss9Hwd4esuVbVMVUtrKg5gg3TVe4oTZHESWG3D8SfWWmWo6CgAe7pXFE457qd5LtnSd5",
  "key12": "3d2ii9QdynkNovGPsUeS8cu1s8yhS1AQLEDPzXqkGVS7De4jp8rj4Eh4idAnmVEbRJxn1pm2U6rpGyzgQX97vEwf",
  "key13": "497jLCVnQUa4XL5igj5RwTtuFwqvutzToVahCBrEn9BSLDZPbhtg2pUoJX3tFwc6zje1cBCwLP2uypUV3zUm4b7e",
  "key14": "4sZtjpuBXAdDRXC327utQDD9AxUFcas9tiVBF4uG8m1y6buWPFYuXvknNQjCpUx26hAbfXUbRRt1x6HMdn7EvDRP",
  "key15": "58455kML4tFxGr1MGFrebasKc2YTTcCNcJKBJ7Qq3Pah4u2UtxVaS3hXxy6TefAy2B3hjhGFM8JDkZCkivLjg1cV",
  "key16": "4uwRbrKFxNT6K2RLaDzL6zYdASmkVJXPwrHLWjdSrRxyGP5gasugQXtkfQhidrysKMGTVEf2oSKCsNqzUF2CfH9n",
  "key17": "S8k9BZ5QHYuZqqiibhLwTdvScVKEHg8AnV9Nabz5VDET5UuAyzpUxMk2SdJgeT5nni5bvBs9JTirJJrZ9RtUsTb",
  "key18": "5Ld6WJYyjyJVku4PZG4dXwW1GpY7x9tWbVsAjy5L6heGwkBvVZ66EaEDoZcz2cNH7FrjHXsXmQEz1ynnfkqpb1bd",
  "key19": "41Hfv3cdZnNQTthkKCtc6ZGR6jJkvpnuvtoqX4ZqvAKNtt9hLdVitWCp2nZyUMxxSLkjz9BcUB7bGG7oPxtE8BwZ",
  "key20": "4m816t3qDkjjzMCsLtiiqfguQghGZJJ3ZiF1p4DD5TsjQj5rXLV7UhmhwrJrRQ4GGz7Gz53RyTycwzrbbPyGqbu7",
  "key21": "4DyTNePNLp5w2FcqsUcG4s382wJiUNEbDJkH2bdDPdAxLseBPRuadmqZbcqZDoeVDgvYSayHmySJuGU5Q97tSgBe",
  "key22": "2X1i5yt3msfJJYYDzUnHA1jHmEWv1T8dQ9zpNHr6USVvL9xat6hBbQ77U1xhAaxAESJ3shRrmuf7tfZtV5S7BCcR",
  "key23": "46roqY3JkRJ1Yt91gvjATYHuEVPAEBGyuKooyJdNgsVNYNJNZu3g396LdYB7Po3MfRBohgreRAvXrexUkyVSatqt",
  "key24": "2wCbDULqapogd73UPGQ5BatdrDdLndb8uTmMQ5hpNsrSZ13fFGVGtwje4vbhiiqNnbMQjLQ3iRzQsjQLzHroiGWZ",
  "key25": "47P3mcmzL3rDbC2B9rYeXU7oivCkoNPv8gygNJtfFGMordA2zYf4reUnVj7zF6He9ZF4AsE7WEWjAfBvCAVGTXQS",
  "key26": "45T7ajVfNfNactegATnzuJT1UvcGWhp2ZKMgzpud1iayg5EpW9aMBWmKNMp8Htmm4FFDg8dcKMhdiWkxzAxugZ1u",
  "key27": "6UsjnnyJuxj8Q2D1bW4iFR3y7pvgxS23CwhFjbkcgDmU1w6FDDE9nJik4ogbuGzXYDUkr44DT4Effi9ALqW5xgr",
  "key28": "5iPDxum1i4XdpZvQQK12gKDLxb7whkoNyT44AwsyC3GBFhq3gH7aQ6pA5PpPWfkHEsPtA9dnPTxkKVMBtgcUD2yP",
  "key29": "2DbekizisS5FdeyBGES3mwhYSosPX3d1X7YNS5SadtfHAW8F7sbLpNk3pLpweDGVxDFv2yVX4CykUVfpq1vEi77s",
  "key30": "2yXwfbgGbEqjtNJ23mxCsrusnnsPNMP6FybZKmGSmB2GvaJBqNzd1uQuprT2Xz4bzKpngzTT55JDmwRWiJMxsctk"
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
