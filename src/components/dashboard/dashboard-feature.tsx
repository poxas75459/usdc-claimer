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
    "oVXXf9BoFUw3F21hifiS9wuNXrQuE1xf3QrJ3zVvxH7wTwmN2VTK2QubNgykHa9rUM4LeGcmxrAUitS6Rjvfsfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mc3sbVMJe62iQwGeyXBvDKD9mvJkrKL6Rqq1REs3kGmUGozLvya5swsUgDdB1dFGcN6dRjjcRNqNaEf86YHN5bL",
  "key1": "4uKZdkcJzkib157VGKo75CVJSsrPTew7gHH6gcYDx5XE4s4S5i9JZMMJqHgeskzCs9N97KeqAPC4N5eb7B4HBZZs",
  "key2": "3z3KAMzgTUgYT1cVFLdLTsGknaUW71gr6k2k7vB38VGXvyKM2ygYNK3LP1vMVavJE8dhv1ThWL5tjbW97SN6Eu95",
  "key3": "pAWRa2czwtsghmuSHuyuqFfckCkxF4sNhq28Y7cUVDBJJx9L72M56oAuUJBZWv5nuqosifBFvYHDVcjyXpPz8M2",
  "key4": "27ZnC7WF8pNfvchEQfYrKEjxh6J1b2C37a6m33wgUfJbktPqACX57Hf62sx98n2FvKS29V4YqLYaWKyKTN66BiGb",
  "key5": "4n2MaBojZE9cqZNn9bvNbW8pssr22Loj76u8YiFTohi9u3jbZoEbJnVFwHx85ZuGPoUENMvckv4S16cQKWvSi6Uz",
  "key6": "3z8LSRPJGRSoXcxLAHWkvUiHdC6v8kjPZdXPE8aRVsjDqvotco2HQVZEeRpKHfRdeYMayAhQyQQWRDQttcJSL6io",
  "key7": "548akq77fRJ1ezerjmdqs3Rus89jJvARf7o6VwGUMvkJgUaL1PXb8WVNPyDnj3Cv2SbW3cEcKCeWjHYz3zqMLMpn",
  "key8": "37mmSesSbwLqhSfFYzNjZREr84b1Z7iTsXDcVuyou6M6yZGWFsrCGJBuTY6tkPkw8vn1umnKgeWynxtekiM2R4C6",
  "key9": "2KV5Drt9erKVidZ8282Rt7DMbnzdaNFA94VNNhZYrmP1k1kvfVMhrvk16W3m2T9yDGBY3mAF5hGvcBX17oJeumGQ",
  "key10": "2AYRtbcp75X1G7eARkGoNxRZFP4XR7XuapNicasC6nzxiMKAmh7ZAZBVMuGBkVMEjdC35uGS1cAVR33dB3NM59mg",
  "key11": "3XusZPzSeWu4WBPHSr3ATJH1oKSgwW8aFyxqDkG16R9DhA5Rzh22GUsVwwDBFUDvhVC6dRhUnpeqFQoJFgGjxZf2",
  "key12": "4dbUA2tVqrHHBqKWiAmuiyC5pTcTMCyP4hLkMkbsJQuTf5nZWrdxsRa3yeQCCNZebB4r4xtGaMPfKXG8S7tdPfyk",
  "key13": "4qCPEGK7pLbfRBdKpk3NbvA2GwKwETmnuZMUM1h2nu9bSE18riGtLgtwhej9Ux5ZLdXqh6hTRdnsp3QA6SBfcRkT",
  "key14": "612efuYCbtSHB2PtHDH2TKLEQVeUBDyYU5GDi4G61XRsp6gC1SwSiadNV3ZYwc41EX5u4MU3AuAoSzWsZpiFh2Js",
  "key15": "4vWq7BbXscYhqPPKPmU5moWCEQbTHAj5DmGt7bXRzt1ZYVjDdLgq7skAz8ReFWJBRZKAuJdcZ1h3KqwHC6JQnQRe",
  "key16": "4SKFecL3pUnksVhKHexNMxZo7oAsRxkrtWJFEYWYZ2vqSQwL8Sk1KW6pAifJbxJGJGBvZfx36PECqoj1kS5onfYZ",
  "key17": "4vSX4JtZQt8bSP9GP3Hs6r2WoCU536u854m246JrurZE3sb7vrKo3xEJs8qZzfVQvT1uLAxg7tSwxfzSjy38hY6v",
  "key18": "4j3TRLCqJMHkEozPPNjxnJjinwa3awqP5fRW7Vc4ZAwLrDgkcqcWpHNPkcsxNUB39WHsLnM2BEC2EqdMkaS5Go1G",
  "key19": "2m3spiAMyQ9jg2Fu4DvvM1Dgko7xN2eQKFZhUjLkAuc8eNPTkPpMYzU6EYFZpd3ajKetcSvYFnRDKUtvHD98Unei",
  "key20": "4pZwoVWtYMNedtxBVG87KPqadUdNoEDW3KkFyHfBgn7mfBTWRDfCzuZXvEfPEFcN7oVqpwDz3ejFmxKgAhkggxgT",
  "key21": "5ZrEPWjE2ATtzG5YxEi3hA4JG7q9wb4Svu3DvG9kYBqXvvQHjqcoLX9qppX8Tpkw1paY8X7ypgXk5UyqDRLgeKET",
  "key22": "5PbSiSZbKbLRPNG2PEaowsU4o5MGPQcR62dbXDfkD4HA51kqBpTqYPBPQDEZrXfurc74H6F9ZMN6he3c6mAczUpb",
  "key23": "3cvC5bQB9MhGHSoYWhCAshprwDquu86eUbXoCUa4iGszN6rqAHWYeMek1vCdayzs8j7kNh8wVyPsHVKTxNssSkXW",
  "key24": "TwR55PY5amAuNSXHnweuyA6uCDTgiCQ1rMvTHD8n9wz8oM8SVkekeZqmGf5ziwccEjfpQrJr4Db1yEkRJZs2qid"
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
