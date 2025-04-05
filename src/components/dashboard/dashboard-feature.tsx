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
    "2F2hrdLkWto3iRNYQ7tPWXr8vvsQ57J8Cw9Q7KojeFbyHMVmsDSjBarkko2WjstM4a5YWg5Ztco5Y5G4eNysLCf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWrDprNc1HkSVeayGn8QE2yXwXAJ8L3cKuh66J8JM9o4n4x3QaXVzsn7yG2X1fkTzr9sJHxQyW6m7HYJ2D8sX3G",
  "key1": "2Re6ZRAjcfxiWZZuHeNP3tWX3cx31Uj4seZ4LLwNBQwkM9n7T51S7cCmncSFCsg6yqLXwSDgqaL7AfTh9CaMmnad",
  "key2": "MapKjC6HwziGY53GPj8yFrK4fG2LmYLKDGKfuyXvcqR979p1TNsDkzDyk6SKLGSVxvSR5fPxek9PNDxFgRXnS5M",
  "key3": "boADQmQxbyTJ1TLGnTw5JmD1s3YNH7PWZ4Xp8hB7zqRKCTT7Vg2FXnWHLCuSR3UQhNKCEZtK1fGekJWNW5BWitc",
  "key4": "3jtJ3QXro38ZWgSMqyRp24iy9HXbnc33L5MQuiyZd4abRLqkdSAkLNdHK6SkWVyY95mqQZECXds5CUJwpjHJALje",
  "key5": "4mspAeUkzdR2SocuuFm8Zi4na5iEUBN7ATrukVJSvM7mdoThGC69uPWFVJDzLEEZEEYcxc2rMBnAdy737R4op9cz",
  "key6": "3JPBWh3kJXzfYLpZnTiYqiY1nuXJt6GKEzGCiEXpx6QLiUbs1hHppzveY7si1Pq6FZqkMMXYjBfrPBKXw7UoBQ9A",
  "key7": "2xJ6pRSnfzCnc1aXopD5zt9fCAacdjmN5sCYWu5Q1TeovbYGnNWJ4uQnShMUH2dwn3LEsQSE1jC1VWt4wbpNSdXR",
  "key8": "4XCW6czf6TJsY6JftBRkUHXLAVvNL2TuTzQv1DGW2X4Yk8xwxWHDJ8CdPgZgg4csVkFqMpVcGjmzHCk5f3uQi11E",
  "key9": "4BdxXbaerh7PzwnCR9KV7RCorv5JfRgQRd1AydnLHDwubDEBKQX2QPr7iAvkvXh1nTC5QWDzSSC6AhqyUXC4VYNa",
  "key10": "31brLVycQjnnP6yb3RUeV6EvKULtV7vLUQoeyTEtdoY6assG1Evf95nHByUgEvWL8Q949cn5itL9M6VyJR3afK9d",
  "key11": "4bPuxkRWpuyMsmudRgtCzoXDGYuV2h15rvABHRQwYzBe4Ami1DdHLJdrv8n5xmdbAKTquYuEuyZM7ctiyNwqZ33f",
  "key12": "2TkvzDe4ybSHFpRkAv2hDVG5jXpcGdP1E2FRdPkYhDmU5hWw4QWwuc6dQrNB6X2zDQtCwseMUbEi56UFDsfT3gkV",
  "key13": "211ke1M5TnA6q6X5SgNCospV3WPYuqaWFAFzPKVThhUBY55w9NaS3EGqH1hvZN6UEWZFMDCNnBCd88xcUc8U726M",
  "key14": "3LhTrAEeyhCVZbSeoWKHC6cL9XY2o2RGEec3Mf4vZD7GmUH56bT22jzEE2C6epQEC3c64c54VJmDifMQYc9rkuu7",
  "key15": "4nnd7ymVxixoYFC5RebiUfDj7EosUGKFzPznZ3XjyrUkBDj83QL7mUZnW2vxG347BnHrqZdVHbQnAcudc2Rb2tRm",
  "key16": "4QMuSMc9J6gd1YkbXRnPEFNkESjaoQgfrFE8vckmXi5cDgctdQTLRYCkW3qR8fcEXMZkX51VdX9XUcRV6t3gemR7",
  "key17": "2V5bgBDjyR6dyMyMNueKwRhhSoieQZ7FCrgyHY5ff7qdNxuCS43jWsqGiGsQWGE2HgsBScqvuqppqowBk9ZYheUD",
  "key18": "3wT32FH5RshsHyMHx1FjsoArhWwqAVtALki5kFH1s7hmNLbFcqo1AjW8o1wM26oyXhRwZee3stp49aLgwjKQguQk",
  "key19": "2vzacvZfttLXzqK4hUUBhE2v1UqbRLm62DX96pkPKih3HxG2J7EwnU4FGcgcWpVcBLamAoQeTf7EwjCyuBkg6WFj",
  "key20": "22fyDzgQbXBY3KmQ1EXy7Mnt5RNUqTRuEtse1UyACzUZ3NgqHS5p9qqSCB2v2uTNx8hdfbb3HueuEtAsAiUK8Z83",
  "key21": "2k4o7AavKdMCK5mbXpea6b5BRQkv7prhJjiqUqwYXJFpCybTa7xa6LNnQANdRQCNehrMcJKyZ1GAMUURZVSHGQMQ",
  "key22": "4GCzj4fMWUVALNfBbRKHVz5dZ3ZUQF6mCtV9Qpc8oWindf6a76vbHsXevRs1DyFmCV9DD9vbnkqwDD2A8oVbQmUq",
  "key23": "3SEWBjrQwyFMhau86par8ejd8LM5YTJpTobgFKorYFoGeqyHp4ECRhV5EhgACUf6xqS3wuYeYj6KD3gczNvFfruB",
  "key24": "4XTvctdbBpqWcF9Xx2VywKaE5o8roFLqpJyMPBR9WfHdZThx5FJAajjHtN1wvZCA49x2YNXBDqNvVvWDLf1FCtAW",
  "key25": "5368f8qNDe9ufrW9HZiFGidof3Lpd3iggmbcXkKcS2uwaQzPQ9LFFBAQ2ZBcQ4HuSGXS1LAMn8Zveno5PdeteXLB",
  "key26": "2PLRBxSMbvLiKB9Egk6D3dT13ETWWK3NA1Ss1vbtZFcBDHUhZzxDeRatfFex3MRERFimpp28T6NRg9XhyStK8vNf",
  "key27": "63uTa7JskyR8TXUkgRwJeU3oQq2gUQjQR5636TieGKAcYTuuFAwSkN61prejC2yAuraQZGpCaNQ4bsU6MwwrFFZ5"
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
