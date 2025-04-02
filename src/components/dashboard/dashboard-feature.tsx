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
    "5xC33B7v67QmiKrtRoiV8c69HsdnD5YXwyCfQB5SoRCWWnU1HcZKH8uJz8p1qWedfM1b3pRgticaRn3o6BH67Zud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQUamnvVDUnyZwdxFrh3LLJFmeauxHwiyZezKf8Y3Dy4WBcwxJQmtT71RcR7XxLMBdRoWF69RykqR4TrnEn9HzZ",
  "key1": "2ekMYuRuzJ5N5VUfDaD9GVN9zTfF5wy7KLXhrF85UzRBYVEQBAJnE3Yp9948cPZUNS7prfs2eMHpn1Ko5hxPV2BC",
  "key2": "5kxsmH8nUyReCzL4eHj2g2YQSCBq6H7d9hc6qKh54cNAbeWwq9EM4SJuSvYJnfqGANDeCc51piyYNSddKWU4QWk",
  "key3": "3CeKAgfDMyksxv5UsqijMCSFZ8dxVJL9KEmdtY9VNaSYn1vzs8zyy1C6VCBVDXu4PfAB4g79mAusoPauVzn2WN3P",
  "key4": "57PTC2SGWKMRf6DAY2enwaf42aDf78Sk2tU5uYWJ1ManUHm88dbE5r19q8iHGtMHv1VrBP9S5bTkC71si5irYg2E",
  "key5": "64LWCKfoPFgbBid372fX6GvK1T5TqHTVYj9Uaj8TCNa97QqWwe2PQETrh8hCQv9fccFhqMTwzk1SjR6HxmVLi2oU",
  "key6": "3akQ9849YsdnDg7BhSNBGLK6NXUDrrX4LGYkmg2LoHTxkJA4u34yd1oSwpGtzU57QpRQNrC8DxqEjJwfkDtm65Mp",
  "key7": "2v5aUBzzQjL1x8VnmFGwxCzSV2nHbLbgCwvwuDtXAF63G5PA25rD8P4mWTkR2Wjyb8TXMqQSqzj2NatFQLbCTgxG",
  "key8": "3FzppnumGUh6kXXj5kunui6na9SzYyscfGx7D5K1CTaiX326Heb9NdQo3QxfeNxgPHt25QE2U5cybhCioRfhdNzT",
  "key9": "z1QVLoQZCpmzL7yhQigbbvV7UegRQo8WS6YEtvRfcE23HKsJuBx9X8WLby6Z9phw9zKbUg5Z2D5D15ZwJJHE61w",
  "key10": "UxN1RHdNQH1KvSdYuLSY7tqLdBbFBRG4nkWLBob2iVVm6sTxyS98DUp3deLNQSRm2ZVMrBNrZNohBdWUCurQrVp",
  "key11": "25DCAUgjuHnohJg6FWce4CSGMVJaWVv8wvRuH8YWqnyQVV3EZFTersecMbcyN8FXoLsFs37a8g57zTRxuBk7V8ub",
  "key12": "4uJZShQJBmmPfaAvTajUdZfZ8fSzBeTRBG6GMz22xtNMZW1pqtACApgzYws5ZUmQcCtaoGvtYZ7whbudLcLqzuf9",
  "key13": "Q8VF9YqWs6NBWme2RajBS9W3TdgCLT1t5fhgtcoLzBcWqjWgGrjFA6VrC7RkUgZkuP3yTc9kngNAwcGJfCUuFws",
  "key14": "45RzT1vjwanW6Z8fnNok6qdBybonxNYG6fz2rNH6hmavgg9bCxkw1cXmMmcNa3ZxnmCJVG74zR8dH8rFrk835TR2",
  "key15": "5eHgehiYtvfQbY1WZThPU1UgLpng7nE7uKsRmqDBqMfeg8fdrZ2v5erDQy5nVxJpz74MUmVT6ypL2aqoSeG5vdPE",
  "key16": "2Cx45qqGQPnofkpCRbooYJ9VNqCbDRU6PTfreBnTBDJyoaLKWSw5J7oUVz4tSeVrnEpdxcRQ7LqMNfC6t5NCmiGg",
  "key17": "3AbnD4YquwpoKBRXzHW2WMEWnHySq1HK7ZZFVG2zakTv8N5gzvY4ARkg2XEHESKJ7hBsTsCZqSfrDG4yqXGS16Pm",
  "key18": "2sMQqPtmgMsaHiwKASQXPXoFh4HGzbimZNaceSqpb17YWNLqYvDitNgVZywoNL6E6Xz6KhtJFRiznbU69ZHKmxzy",
  "key19": "UqbNkDnkxKLioTU4VUEatbvwrG9dor5g1uuBEy75PtoxN8ciEdn8kM7Y677oS3W2mjStGWfqZa4so9ZEFyQBcbg",
  "key20": "wCHjwNATMS39S3Vs2g1ZvZ5NUdVoJT8dDxKLbmDmyC37jxdtKpTT5aJhL2FGCrc5onTbVnHe8MkEb6eRZx4ZVjL",
  "key21": "puGKkqGWrEbsqnVtAGkZyQJeg4ueBSMfBwrchWKiNqhZSExhnb3Dny9gwPFhVKcav7VZEWyBq6LvmkwcBWSPSEL",
  "key22": "4gqfFTAFywXTSPBRK7M3vX1yMgzRT5dSWdc9mcp1WhpVyFXiQmmxFCidqyVJ6Tkff8UwWh8XV8o2XmFFmNjFjgvW",
  "key23": "4RuMEgHKodLaMQw6SwRHSQ9t8UBqhvvo8QE5Nsq49xFbVPch2hYuURXs2dW3SLmWS1EQBP3awDX7c9Tr8bcyedn4",
  "key24": "8xLvwbd3wvp7Xkp4TWDoGzuXEYce8fsYWwmGyy42BoyGtQnDN24FsqfkerkwsnjPDfAzKsQRMQMx5f5vxQaWUkw",
  "key25": "3STzzgaz2o5QKM2NnnaZMvdQgk6DVqY9apkNjNCfiNTKk1gideBt6huubiqBrKzyK1n2R1dQ7MZMTcmdyxsFT4rR",
  "key26": "3HjyyawXw2epyKxpsoxfNxxiJLTsaPxqwuaUM6WkbkvgS9CXDQQWACVPKunubon1GkTe8YRRUiraiSvPQgpnDhRv",
  "key27": "gS24tbCo86ucrQcyYzTxyoD32AF5f4SEQaZjtvFxZ7MhtNdj85gCyJCXHchiB6z6N1zou9pEXAhXQkqrUaJ2H35",
  "key28": "2grbrmYVjpoPwp9Zt8TLDioZ2T7adm6B1VCoP6wo9224cwtQtVb8PSv2HoPRavkhzyfhZ5u3pE1QVwomUazfq9Q7",
  "key29": "52NRxGHg2urPkeR5kYbpRLpPYnZGnr7vpYdQyraGtg6Zthq3YYRzbepkM96xK3VmVzaTDKnxXJRJePtTUXhTrSjV",
  "key30": "26op8hQAkzcDKH3J2SxH2EUttXfZkhG6xwS78DzpRRebbphkvXWjngq87hG6vyhZo8zYgLvgNGbkKifDxkmMSAxJ",
  "key31": "j5PoYwbxmBVqewovHJTknyC2VQydYXKk1ipFRNkZ3CMk6moe1xWiNN9NEiwnnvVu2Y1gdwK7tdLAhKXtTF68B56",
  "key32": "4YWJE2pzs7iep8uTFzBVawJxrhKSfNtsKqmLkq8mKCHztsLmMYwUZ19FaQMbTqngm3bztadYqfWk6QKkgphf1zvL",
  "key33": "3nnTm2rRGVZ3zbxsTqsRSQMpQS9NRXs43PH6FdjAvFbiLKuXyFPkon7ZWFikMy1EnP1DcPt3mTPgrzM4hiqxGKLy",
  "key34": "oBfQ1vRRDvpM9YLGJboGBbggT3aLGCBRQvXEHGtwogwrozhj926EVV9zranzDKnUSHMyVr8XcfYfNNy8YiHug1t",
  "key35": "4DdYitmMN2YxYi7FeAcdNPmSeF32MrfknmvCeXpBPGBPRudyU1TUYYNjsBzc1jgoYNdGojnSZLA9ffJUoyMWgjL3",
  "key36": "4NjxC97ScmcqFMhocPTovhN4jfPEihEhMrk3c4B2UvLjZN9tgoeSN1nNNaZVLiSNCUKiEhBHjosjUFTZPETe51Se",
  "key37": "4KzHizUFvjXoabwdPmMtYFyJbAhmuRJSe5R9WPZS9zNvEoRXbfZkux5aiZ8sap6FVAexUfh8drzarUNDFtjcPVSV",
  "key38": "4AD4wwuN9YKzf2Eroa1i2zGBCsjXugx6pCmundbdQqpRX8VfnhEmbpSjvKFJNha8o1jaa33qucpfkWudm42FpqxS"
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
