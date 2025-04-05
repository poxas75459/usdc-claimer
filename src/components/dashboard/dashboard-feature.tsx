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
    "3K31n8DFqvjiFPyHbpAmULBCzkz6FezPR2VC2LGvdQKUVqkQX6WQA3h88UmGRQqecKZBaZek1fHqAZrXjPeaWEZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUwdXiptygfrxzkTztwCWnn6PDGN8mKxqBYTZfgKGRiuJAygGGArmybtrKiw7fevctcMWQDzkK4xD8vr9NgjxGq",
  "key1": "4GUm7L8jrYH65YK9HHnRgjVKT248f4nDEqFbibz85Txs98tVaGmHvGMJzwwsofKEDBnSoDRWo98Kx54A8pdfnENP",
  "key2": "3eA28FQoTSYy6WFUAdRtfUAEdRpkdBnv1jiGWaCrQn4j2s9s6bi14vCH2VgJk8swYQV2FUmZ5e5Fob3aAZPSJQof",
  "key3": "4D9RjTz44Z16CWfLEuV7bQ8f45kAXwuyHDiwfW27ydneFXmfYaiDmXL4CPAfL13CHNwbcbhA35h9xu8oxUfrp1U1",
  "key4": "Ft1ZhFR73oxZnUPzqL3UP3H2S6dpScesmLzKHo4hFHBvWExDCWCdwDFdU5iV86C9Qde9eNxcP3MPQAmxSom1dSt",
  "key5": "4V9ucERGPpJSahDdLnaeLAc1Xzmtu8rm4gEUmVGAWGtemcuEZ2BPV5mpuBGMjcn7Bpm1BMc8wEM9nhb7jkMzgDuG",
  "key6": "5QGnzSBcPRVxJVqkhuTPydSgxtUmrVPL8zo1H6LzVeFABEx6aTbBfqNumrSecP37cXAB27FQEa2W8Mm6FewPAjsW",
  "key7": "QksrL3cTr2cEuA4qatgdYqiVuUBKTX1XXfmYJKsxGPRi2AuLCiMRCF5xwS4svrqCG2oWNebVe97xUtaPbGw6kfZ",
  "key8": "3ebpozXCQ2KW6dHHwqD7vDZ18CJYaa9aqL84hzWFr1gbZKBnLuoD6c6oBiYioWm2kFijJA8e7WvX4npWMiBSiQEk",
  "key9": "EZqsQ5tBLBdXtTJPdwwNo4dHocSUr4h6vvL4ce7UNZPVibeZTE5HmjyPqjomch4iobyNz86iucWKsH5UZ4nWRqw",
  "key10": "2gHrE6MJnRcEttCWRQxSA3cmUaA1EdEJxUZ8FJkKb8v4h4of49TJ2wKzVAKcjCmPw6DWJA3CBKHnDRKVgwCJNKio",
  "key11": "5WcoGNMNqqsPsM4SxT5z32cqvLndkyMWdqC5nLM8y84mLcgezvqWa5YCYSfpmJvQGUw4Jg7WfxHwSA9Gt2VTVJDG",
  "key12": "dWY6eHqHzuUdZv5iLPe84B911yNctRvqGE3LVXXSvj7hSLfcd1dCXyc3gGZXPS1HUKLSkd79xyM3TZVVRNYQ1i9",
  "key13": "375gAVtReEXYJN9XixNBey73m5g6tSXCS4o9kmRaPoST1tniniRyJfeM8TkDc5FBdE9RJZPtzF7sgWcWtz5rjhaH",
  "key14": "3q7tDvfyzEreajECEJebGtDWC5cdZZPQiVxyfN6oe5QRFQ346H69uW27fmjHcsGSaHEqEduyLFLZnsVcNZHCh656",
  "key15": "2Q39qdPP6EwY3p3f3drGkkWAfyknBKChad7yD5fWPYVkaW5hzfhUkZ3E9MtKuZ7FUVVMBa6ACM6A9Gyndsu6S2Nm",
  "key16": "2GQNNfGsFhpNSnVXd3d2c5eRb98R9y7Y7VefGrmiKNQPcXD8PaGWNMogRfGHzSQ1y828S53cWaTodqQFcuH98Svi",
  "key17": "2VCTFrVeQ9rX2zzDT5DZtCt3YG8NwCzm2c6QvU5Wu6F9DtpGmucjJvrzdKyEf1fEyCzL6QauBbS5F5hxadQPWEY9",
  "key18": "4GXbU5fiyDethEBAb7kPnoybYxApSxQQigxp51gFZYbaCM9uNDdeQfByvpJ5Rb9HnMJtkoWeqVQLqwgEBRsEgvJK",
  "key19": "27rwqEVEeEWspQVg2vXpenfLEfSiRC4R42DiBcjh36bD7LEZwER6mMK6dudTPpik4T5C4iiAcxfpkT3BDysTS7Kq",
  "key20": "WPWD9SePjXn1EAvADqoxB2xFGS46uVi4A3u2Z4AZ3GKfuyHHkpCNCczVmcB4zV5ocHCqFuHnVd1jb4mu2ZKGW2B",
  "key21": "c4VzezJxp64W1w1MqJsjzZd3Y8LgjA5ybVKtra7ALQRN3o4wuexeRTLZmmYM6xjFwkqvWaUzuKhrjUuHxKu5ofR",
  "key22": "3wJNiGVJSSXdqYyWPYaRCJ7w76knRFbtEZoAup6yS4Mez7xuAud27YZKGNRhXeGJEEMYD38cF3iquh74aPVNUU1E",
  "key23": "ikUSQqMmDRgi6XukBN1gSAPoJ1QqJCVDF29WCoUmY9PzDZ2CtdE4nDPp3xqNN7ASbngUHquKwVM8cqKkhBwAzud",
  "key24": "4dNK5My1eU5MMmNtQ3BHPjLhvkvCLE21tT5SEFSqq7rE3cW4nXutNYp78Fx6E1VQoPYauAWG9aptRtGGxLEncUF8",
  "key25": "28tfRmPS4NBs2iGRm3HMYV9BSpV2PpW7kVnfdvSpM3fAyrJbSFESKDYAKERnFi9i1bYzDZofXNzyBb5bzepyBRTY"
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
