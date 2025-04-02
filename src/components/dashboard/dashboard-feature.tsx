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
    "67oJkYAGR6xmcsko8Gg6DBauuiVsjKoWNcaQaTVDt7tM7uyyrmqcmFHaDnhCHP8kMYLuTgf6SCqZCwAWxzZNA7n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sy5VbaAwEWpPLBgr29ibDxxf9xWLHe7MkbxVjqwfSUV79fg5CFeGnRcqhgyw2YfATN4J2GHaE9d4szBf7cDuDjm",
  "key1": "4HpQuqsBhpfJFqo72goKUQNHZZinW9rY9EgZAno9huFxYEXn25P6NZ9M5ANQQ6uH8wqnHsbkHgvneJsHrmnyRjZo",
  "key2": "3mYA7BfNZEeyWmPsezr4NyTxE4JBTPv3TwN8frcLKgigsMsbFGKxq3hrU3YFLazgnourvGsD3w5tsQnZ2djiqDgY",
  "key3": "35Uba1AZocP1Y3px7sBTVS3fE93MfjcPNPXmysgAKqLv8ASLhWiEu4W75V8w5C2wNmXqpcjHotGcpndEYwrtHTn4",
  "key4": "5YSqm6tMXJA6LwQk45h9fnegFqXfwixfkHmhNvJhHjLbLgtvJH6yAatCethTtEzDcfmfM3fSewaTqdf9HinHcdfn",
  "key5": "2zsgQ2rTaZAq7ArjdSQYTJYxAyeXsSE3pcHBkNDKMezqRRTKLXMSgYCfgUWvjfCHKf4raotStgSQkU3vtBCfuWBa",
  "key6": "21CBGVzpzgJXshRsifsK7qWb6R7Wdzdrc5Q1Xfk8bBTnKr76xHYvSsnisRwrHQvPFq1v7apWK5s1nmNsJuWXQTZD",
  "key7": "279VaFQW97MMB7Z7wxqXv5zJoms7rqKK7EYKpT5NNcv8kvFdGSPV4RwmWwqSPZZyAeGPQr1fUGSazzVyPRw2Q8qR",
  "key8": "rGLqMzp4sq1GfGZ8HT4ycpgxh7E82NbVrJWHBrUSJ7L39Yrpf9esiLeYuLwaj81J83qwv4FAQGpXZQev8SuHECa",
  "key9": "3V7AMgfXtZiRUJtWkcGgcwNmri6gh7mNVjLdzvZDQybnSAPZQTT9kee72129pXVJVkua379yweE4mNLSQjCc2czi",
  "key10": "pZj117RqceA6Jg6VzFajThaH3H2npP22d9iZDuoLWHbTthy8vHstEMNuENrzLAYzgAYADDEUkpZuksKpnvP3WLN",
  "key11": "jBssgbe1L4CwDcH4VZAKkrpTUWojknoqJEkqaiAYs2kY8k1As7DQcUWJnTkvTzjrditrE2S2GXUw851PcEDKQFr",
  "key12": "3tx4uRaBuErD5sVHWVj1fBZvcTxLhsnbKoMfvgLZePqsLnPfWcek5YMUafgUZN3RRVQzQa477Y8YmtoXd324PwSk",
  "key13": "2yca4ixU8xndo2kGVm6k1vgkNXJi1QMnieRYZ5ewni4RBgcp4rZ9A9tGdswmHbqiSPkwwivv6F2hQSNCdgamNoeN",
  "key14": "34NMHjrSXTRU6uAL1ipUmSYBkpSJpbcbQRJXnQ8Gt4m8fb1aheTst8ivPuPqBf3L2KPAqZWNVHWAGGRb3rVL1fFg",
  "key15": "5VRCBMn59jPTin14W3Gn1PurFbBBhZ6iQfw3ocm9Rb4kHJDBvi1wbpdA2eH74s6eQccYcpYDkzrw87ZvNQESf1oL",
  "key16": "2JLqKASCxvAhDNtiT4fPDC1UJsTaNUh37vBuuNL3TFqPmwHXLp3kFv8cm95FTbmRZC6uVQG2GPCRQa4bvVseLM9M",
  "key17": "4bnVoYdgLvQP1p9ckkEF4gJ9APkqjnW4czwzpQwCSd5hUmZzT1rCvchXWUwUxU17tjL3E8nnVoWRUDsqFksi6ASB",
  "key18": "3JNYgiHWbqnWvV1E8Y36Fpf8N6ujL5zdwcbdGHrf7Dq4S2QtRXeyCGahvyu4rUf6E3eyJTeH2RaMRixQ8N787cs1",
  "key19": "5tnmQesZgyJFBcH5u81wcVcmzMVgn7HXvUSgQcCTm7JdfHFrD1BSTmeRhTn88PA1yo6pksue9CHbFjrBckvsaZGt",
  "key20": "35z4KsdktbjeGW7SUs7eCjLxngfktcQZuvwtwkWfX2Jgi5C5CE1JGRMFeEb3FrMaDzNYHBZxHQGzu8riEDrte9bi",
  "key21": "3ZAVimUWLuvfBWBnEBZtwqhZuUF3xczeSxnBvYbokNSfz4BWdGNyQukJuUP62p8eE9Kfd5xAvSNXJJEowh6BVs8w",
  "key22": "eSppGzDDCj3MFvZCs6t21huc4UpmhoGWGHBrN8AMfAk1JyCBGFmu9X45BPuX3ypMxxY26hiYwTheVCCjyYGvVif",
  "key23": "cdqQs4BeLQoLcNb9tz7XRGHQLBnrDvLGu4YnugzgTAafDXLXFaP3sef86kVcuJwN1PVFT6zHxQZswdwH5WoFScy",
  "key24": "5GmcGdPSX9K8EGE9GD2uN8HCZcNKgB5vWQwX89nhKuR86RDiLpnpW69e6KdM2xYw7VD6uWfGKm6DD3TEexCuJjzz",
  "key25": "3WFGEeZBMjiz892utwSmtbpqeZ1oCKPwcbdDXBCVsqwSQtgrTV3VwHLQLeNoxhS89V2Wkgph8ifyEz2soByZWCBg",
  "key26": "4a7tYVdiXVfUijMMd55psYGq6sUwaUX6zc7abFc9V1TnBx7bQD3hRjYwqGMF4yjoyirGwJpep3BpnQJdd5M3Ytdo",
  "key27": "3A2fXFhwyeeseTt2rqU12SXXmUTw1sSpVZk5yGnWqZh5wsAraSbgvP4UPTpJXKMCQDnC2d6t3VV1V8ct3djge117"
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
