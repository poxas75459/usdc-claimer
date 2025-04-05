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
    "2q6PFKxEVB2tbZgZvp4xJifsrMz2sGyRih1TVL3SojA5i3G9a4Go86Uc2R8K5UGNrTKEFRHxi86ABiCEisBfdSpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FG5H7yGF69y4hdkyaivnWoV5wzz3v5FUZGz5RUTR6tUmpdwYnCWXbABEag2YdJz1TGDsMZL4367hgLPD4ya3emw",
  "key1": "2Md9HEPmq18TpS4mazCpoVa4Bt88R2AjK9mZ77mwyFvcPQxDAhrsq6iw3sGwQnA1RtFwSjpkxerKqcZYBpf4WNiV",
  "key2": "5bAaUdKidcJTurWH2jaWbEqGEfZdJW223W7gk2rJXktZRv4hPx9QbYVYbDbECizxxWfxAvaRi5A6uCYBWZH213e6",
  "key3": "Qh6vap33rQA7k4Q5L3xWQy9Cd8aB9HMg9r1ECBNT2BDcJBMbGJNgyyxNa47WeZozvwoTPVzAoCWiis9paVqNayh",
  "key4": "5wpVp73bn1gExtjNfjZRFmBtoBcFXacceoDzkewKX8EoQ7mFL7gu6iiBVj5dMdPjMnXz5FW76MBQRTy4aYLA1dNm",
  "key5": "FFwHSCM4Q8BQTTrNEURs2q4oqGrGnfVsXgLEEuzmkwQAXwF4EnDjgf1wgFpXQxDpsVJ2WahkCKvmPZR9fcuMuSC",
  "key6": "5qFeuvDzXtkRUQtjqxwBPhrW2juHygmVxyUtW72S7Y6naLUUS5X4U1m7yunWan62brSx7WjTHTeQwLoYtPWDFNir",
  "key7": "3wBpjbvMkiyJaDZUbgUnVuKNkHqz1wdry4JumBHqiLJf3eevT23wTKFMTPwvrqFLV93q2vkcwv3NmGnSmtcoNjuA",
  "key8": "tKeBX5RvdGHzNJmJcsHNMTkYpdDRqJCnGyCXi6tCp9MfXQ8gBC7D25ABKNKVmqBbBmDG9MzQwUWwjTMUWagNDec",
  "key9": "YQPHKkiHCtHpB8iK3RC6kbwYakND3hSnrZmh594W3rJV2hbzjvHRVF4ZZ9zsot1XSgRKDnQEs8djpEYbCwu2HAz",
  "key10": "51wbRANiRNjeEvNoYqAQst6zJReWbE1XGTkikE6YLW6LyMNmXUZauWcn7m9V7LaDjYBWVeTX7MKYzSLZ9HE5NEvn",
  "key11": "522w3LL9M38DyY1ptkefeh8HnbYWXAm9RqtQY3aAZgdVHUHzGjQa55eVkqYitXa4FekRKTApAi8ZQ6Tf1sBW3wiV",
  "key12": "4zTL5s3c5GVUuPE2scs7ce4STfzTSsK9JZ5nxv2CvCyacKQrgo8Ue2VTkg5dsYtvomUBPpEK3hQjM7y82Th9ZjRA",
  "key13": "3hkkozgZKFURsjV7FyFNnfMWEzAqHX2z4nzSNiFAahzGbwsuqhib4j3LuqHMoNTFo3JJqR56k5zApyrDcLaTMsc3",
  "key14": "3Jkz8NZ6Fcu9r8y7HiXLYeiwSkWd2x9LdqzwNTSTREWnLELhjS3R7tahMMUWgeyPtS7QGrj8cYZMWUxNKDnc8SSm",
  "key15": "2TpkhEQumi35Adz1kBkDm8DXH4UWMAEKzRPPpL6TcDjUki5ANx1vQX8RjdgSUDtCdXYKkVjFCHLiCL1JBgQBmnFK",
  "key16": "34RdQkUWTMWReZjX8Qou8sz9KZ96mQXG5cSqfQ1o2Bp296utRMAB6U9Uv15nUXKSUbqm8zsAFTN7bdwjEQMRvL4b",
  "key17": "4g5gSERBkGNWu13eW4vDyrfVsewQmfBu3WFbgAr6ytr8nh7Qm9hH4XepnckRoRKguCXuRxc8Ti3uzLS5xXYKa3rD",
  "key18": "2ZCe63HZkv3gDfURWv1fweEuWVnRSAYENfE9rGiQEfvCvb34MRUR7cb19dyjjrpHtN9XVEk4wvBhAbPQhqi9NtVs",
  "key19": "TL2UgkrR4Pp5z8eHtFjUivWSS5ronSrrMEnAPxDmj6qsp4xsi9HqUCE1ztGjt52ytEJBsxFLuXrEzHYHNZJPG83",
  "key20": "3id1KToZqjVHBLZvPa52fdA71mxeNpGyCJiHYPMsWq83KJtAbtQy2d6YmtqaC2roahKB3KEQKR9K6tEu4DxHPDqi",
  "key21": "u7ryNDApafBYzdHobfYAr99UCCPk8MH2iqbuvSJ4XDMV9UibTCYzgeUiHTZkm48kF3zjMDS46xQxrKBjVSuVFx1",
  "key22": "4b5MenFVdaCMUCHVaJtYPsmvLhm1ciHh7aHWByxD2pWkvANRMVQSzPnUSBYQ6sYahmquGACdYC4ZKnZRG4q81FNE",
  "key23": "4KuBn6QEuArjfuiwRANsa1JbNXLGwpMPk2rLupZvpVFtGxRnbCwRiGr3yF5ztmwHsB5b2MKLSaE8Udghyj8CPMXh",
  "key24": "2RM5d7myQGZEzFYcmwCp3yRf42DMVy5575Srzz4ugvoBwb9Z8VwRu7XzTCEfcRTEgv6msFytrTaEzZwCiZSQKV1U",
  "key25": "3jqvQiQ6ws6XfHFTF51oPgz4wvrWLxZxkyzKksScNg1gjYacp4Ddr9gfpYeN9h4Qm6GsCHBV5XBHHvRm47rn3iwQ",
  "key26": "5SH5pXzSXKaT6XNLRpAK1zcfXxY6xPtLUKDfMaGX14hL7MPFYNSY8YhE4ZTj4tQgvdRoGuh5tLZ4EYxGQyTVBFQe",
  "key27": "3QDtyRgTUK8hxpD9TKC3L5zQkgYMJiQkSKdD1VuYG35wVCPMWEUePDnjSNBKuibcdQv3Cgddcp5kTbDd485YmE1u",
  "key28": "2CaWATkWYmuhMwy7aGpJ5CcDXGGnchWfzibFMXsFxJoSY1SNo4gjDKr221omKVPPVB8bUHgT7e2M44m1jQdgDGxo",
  "key29": "5VVD3CnW4eSwy8XXcLRarJtBcqfbXWApjaktes7uou2tDbaotqyh6UMgY3r8Vw8bwFZbozqkwbhJ1yJCM5pNtCAA"
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
