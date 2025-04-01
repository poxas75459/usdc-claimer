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
    "Xu8MqP7H5vopHhC8rRs635TrFm2bC83hcpf1QzwGKErCYL2Jy3xFLga8RkcnRMkzZxkVy1nFo47to2Gqi85SW3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vKheficdWGn9amQrFm61GQzds8P17WoQJFbhsXQDh8zXihQyEnGZrK6NrzhC7nEt5GqCiJzZscZGVyKaceiy9bq",
  "key1": "124WZiwkHFEEeCxQxpxMSjXPCevzW89Jmgoze4iSba8EwUyVENwNH9PbqMp2ctjFGRwqqY9qAX8e4FXKaw5RaXkb",
  "key2": "48XUDjwLJhiMa3eWmDoZfwo3tWHdQnuySEx8Ts5BNRfCFpuy7coGTnEbwjz1cD84bBbVdHxM458kNXWNKEFyrQMy",
  "key3": "5BLGDne7ZvcNDKEmYgycUQVq4XVri3f1weT3ygBrtZbUGBCWGcNNHKL3hDAEsvPt9C8gM1FaTZD6GMXkKNrdvuq8",
  "key4": "53GhgLigaeyiVdkPq7T6ELr9jsmUm77RKze8JjyNvbHKUhUd9UgpVvSqMrpjKnS5k23D5vAxQ3Lhe9uStGVeDjXQ",
  "key5": "4YLXcHKqHrU9kM97aqgKGXY1G2HzTcrj8bTJNtp6py9SYQRHuFDJGZ5yYEdUhqN5myGU3maKSpUYJ1HC1X9BQCsb",
  "key6": "5EL91cTD7668mu6GwHE5QGCsmg78aTVyZPgQTGDSbfAzE8BN3uwZJzwbZfgPQGLPn8L11p4giptYZEgrXghQXwFB",
  "key7": "2ehcvXy4FTwXsmT34U9VAVNnKUghoU6LFFmbrmgt6S6rrgHQ57X4UndjWRD8VR9uA3hUpA57SkkyCi6ErqaTFB24",
  "key8": "35bzpDk8q479Ry4NLt44zV1MDKwC4Ei1h1KToYCUUgD3nCaLz9LH4CZmmJYTKNqMtNUsZ6KGYUsHkQ8W4swyQ4ZT",
  "key9": "2zYz2KD9RgdGLoaV7dbtMuCMknW7dpQCP3vncxgaHUNQMocTVS7JiekVeawGmFY5Xnm2t31trftVPfKwZmxe83e4",
  "key10": "5HbFTnyGkQfvLriMHTV9BaiLVF1e6umTjdXcmE9A6WUpqFDzk3JzScUK1vAiiuskCzaUH356XraXrvnKdHPQVLRm",
  "key11": "42qzE8VjW3MsTy2WfhH6nekcJ3feAPU2CMykwrFHc34cw5o1iNjgTzxw4PAovLvDjYW8WwPXMVgv9NwrvSjwPeSc",
  "key12": "4R5dPhLx4sN7sas96nhnMtP51qgKoiv73cLKECwPzBoTaVs6fdNXmNcu8XSLVfHcn89qsBmSsk1scPmWDKV8394B",
  "key13": "4ehWgrrDkysHiMnz1Ca4ssK29CCzPh7DnMsVLpvrvf6M6ugMK4YvWGPJerVKnbuUEYcyn1LnvA314PJb6WSAHs5g",
  "key14": "3m7DTirm4vnD37eRLgTYoonGXhxwznji3PUb7FMjRZBjStTTXGvQrFrdeS32LJFUCua7uu3kydJkNymMm38jo9o8",
  "key15": "3EAHTyif4CVAVKcJnrEThZe2F58jc5X5YmxZ1Mpgu8Qqht7aASMu3aazueHCMhSY7KWmEDxsQE9hpQsZ8WKeQxHs",
  "key16": "3GUU4vd8xJpMqCp1Q7bMEPL5NCGACJ3HJzkJQQjyyTLBZhBVVrR4svjftgJv14BpQcke5dQZikcxgt8bF6sYTQt6",
  "key17": "FtCdZyyNL1npnyzWKBRaNePUFFAWcKA1guzJPdNzqKVjpSBCxy5fZ3BSLzwNZATbFLxc2LmwbNo2RDNX1MkPB5m",
  "key18": "2EcvXuEJeDTiGydo5oGMYM5JAZyag1ATXiPD3t1eK6ushr6AbVHCEAMisSLJq77oNXbkhPPtxKTNmw3nzeRBMtiP",
  "key19": "3hEQnWfbAj3hpF9pQU1qUjpV7Co7cV8Cpj5NYY9HEGqF8dVd6dFA4GRSUskLxfJ2zagp1JpgAqUbUPu2Qr4SVWhm",
  "key20": "38YyaDSyzXmVbkCdzeDQUC3T5yUqW7E2oGWq15ArqF2QLUzmyvHf1LgjkQD5eo4N8W1D25BoLHZeEHhVJzqpUfQ2",
  "key21": "4C4xZxtnHT2oPxywrveLmMqnGm5GUhSHWtfMmrSPTEeqTfXC3F92zgpVcaPgNCZYXtJo6GZ2LXakzQfJ3kDyrts3",
  "key22": "3H1YBZ8ydH1eSVhRuQFJiJt52M4kt4xM5pcR9m1jr3ypWwMfjDEt9xtomtvdtsB1vwNPJuNYLVF6BFAe4rYW4JPo",
  "key23": "244A1pJ9KkkWJmcBXYjkV4vQeFAiL1aSTRfnfUkSjQeshGQ8avGnaV1DV1dMg5sKDeFFkfFAVCJDHwfsfPUNgZtf",
  "key24": "3Ask1mTMYBRJ3tFeQMjvDRQLpCtsDLYbETbYTcXUnxGtF1xULy6PWcTg2SsAFEJqCb5v9vFfKMRioPGY5SpZepp6",
  "key25": "4MVvgiWqUq9pQWs54vmtckg3oWuj48nujbnbPYNyyHEJkyu7kZCtNrgVjXvWmABgJ3L3APhmWSnDCkSbanmXVqsy",
  "key26": "5SmHF6ivUnfV76Z3re6Fe3KwnD1jVdhaJQzjaEYJA3xazJDSyvaji3u2pUzWwvP9oxh7G41YAj6rRFUXnNJdKTSB",
  "key27": "4KEvz9wtsBcpnAAfQmFUKMZAAru4GDJoN9yrU49BPoFWRkzFJvMZW82qAok7nddiBPZ9bvroA1syWe99irZDZjEr",
  "key28": "5VHJ2wc62E3FQ5NHzh5KRUNLmXi8ewmA5EZ3cJZcNJq6uyXtdg4ogvb5Tx44zgq6mzbHjy4hQhnwSQ8zdCxtKn4m",
  "key29": "56M5DrU9DZYF6npYRx1KceL4AEHJ92pMfGQE73d2BTTUYw4TsfjkqqHYFL5GHjLhVT3edjmebzMyTdT5RLLco6y7",
  "key30": "svkkoGnW9kCqCQQpZLBZYJR1uWgyjhKcnjxh425tP7dzLnxttD66Kr3Dm3Js5up3w4ab7YVHtZSQgQSGuFGszgk",
  "key31": "5iBKxeCAUBBTE33X46sHh7QkYpQe2kS1CB5YcEFPFpiVZWVfEy5LJoPX7u2oYzUdAufF11mMRBw9FgrQ1dqYJoj6",
  "key32": "3em4tf9DuVCcX1u4dFe9iQyovYBPNmvMMX6DCX89Qo6xUPrAWVr29XSmWiwb5MfKhK1NH7Q6piBVoMZgioRBjSUg",
  "key33": "3H4EVhvRSSfdS4CttMHui4zeUAiFYosszWpUZYVWHknz7vvuYYUBLQBWQm3wGU7P4VsdEdry45yW59qK7jFMnnaX"
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
