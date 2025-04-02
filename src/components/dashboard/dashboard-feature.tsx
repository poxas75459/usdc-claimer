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
    "3vmu7JFtwxJzy3cVabpqjNXsmRvXxjhQEjyvp3CbE61Ya63y5hae6gNu9LeVwVrdaJpyz2MH4mntkDxENk3APUPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNfN3zMmUudgU3uHxoXdidRwyEj8YUZ46VQ4CqsMjGxCxhU8kvV17wDwUZvPfXxNww9jt2XxqKMXdmjBm5nH5Ae",
  "key1": "627KRQPRshD1pJbomAAU9NHrn8bqMrarMnuNGJM3QN5rMDnvXZXG6WodhAgSq5g5frzkBzwMdQJajaBi7QaRygSS",
  "key2": "3xwaNsrma2VEQdbewPdWVpxPUhCogqpY1vGSmbgCDPtGiB7Mq3nPtoch4jDJHTiRBHJueh5sJtjP6UnpfVqeQVBL",
  "key3": "39Fc9bS1BuB6Hkgp7qEMTz9PHmL2aZ8FUxv5nELfnJ4QhNbhCzogF31QkVBXSEs5v6q3NMQ5Wzw1dUo8TCEm58hZ",
  "key4": "6y9s87SFGzRdPpJvGZKoERAWyJw4BM3LY6Sfgt9Z35cr2QcQ2hxG8hhnhwFrdCydnMzT8MmbPdUfTN5gfgSauS7",
  "key5": "4eczXKZwwiBV172izeCTqyyUaKeWNcsMhi82Q2DxrTm3SvMFh49SRxLQhgAnPFv6oEjpj7E5MYkhaXHFe9fTYZt4",
  "key6": "2SanC72k1cRxAEx8H4s95ATfBBn532weUXH4EPJqS8xJPFpni8xY4sZS8eFUuLLnYzFngN2sxhGvuJfWbY7RtneT",
  "key7": "cktrhDcXXCoQKsFcNsbEBhi9x4GqhRzhFSLzPUZb95u2ZHy6B5b2Q6oJgqnV9hzBUz39fQSBCrWv8hjQH8FxVzX",
  "key8": "3vYMz7kZ3tp7yTfvYdCAtEDWQxpyjfnZD393KBRawk9KjQPtpnxMcGqGAEHk45CZou431Eut9sjkbvG4Rkvaz7io",
  "key9": "3bhDUXXVsoztnLJismoqQJNj83kAFXWSTNhZHTv2KQiTCKCPUyM2NgtksXfuFThPr5KMKfzTHvAKJjsXDaipcLXu",
  "key10": "Fvmb2MjpzR2HndGb7bvZvxAoDYoiuYB4GRTeRV7FmYW2w5o6rHC2SHkihqzqbov3rfKTuB1nzjU7A5yAWTKUc4H",
  "key11": "5DsFhP8jn1mgsEnK4ywjghj8uzXeRwPrSuuBUcLauSQGppxxhEmPHcufw3ZLBoHGpiMPTp7mYsc7TZTWf3hG2Wy3",
  "key12": "4m7Javkh9x4QhaasnzMRY7VUYxWxq7uxDWUSyDPDiYd9aYG84xKxdqtGenL59mFNnrAtYDt7kZMBGNJ5FzjbfehP",
  "key13": "EtXFDsx9iS6RXa6YXgkXdS5tyVL74R3fQdBjLgYtViSxeJfxjYjh4yCgQbsQXQkokYx5T4v6NzRK1d9yYBP961q",
  "key14": "2fce44S4sD8xT6hy6pP8YpET7AagDB5RjcojWSv9kzZVdRkoAD959PzU4LP4BGRgceqjyquHPRwunJJjFgBAkDT2",
  "key15": "64G5KiZG4hSq7ixmTjJCkBCfJApTSDxoH2JWH7z1gnjsKv7kUztasuFHg7YYSHmF75zPesyUYgzce3TKPAbM7moe",
  "key16": "pQdsPjMbvuozC1uQbrugvkfuN9XWTHKrb6XsQCDMYYafuwQnNcZLo363ugFHUFJ17pkdr6puzx16FeQGRwHsrYD",
  "key17": "2DkRqxVQTHo6CaomY5NcG9GU2oM9vbtb5EcBqPZ6T8t4n51LCcCU3fXseJoM9Uarh3QgiafS8QUFrcnu7GKdetxA",
  "key18": "5Q4X2tRyfvzTAqyhDjtJmn1xwinVDTFBX2swEAnY9Wr61v5cX9rx4H1WF9LtHTK3XavP81qac8Yr6EnkZj9hC6sK",
  "key19": "4m6HdhE9kSCUsLzhinnUoEC3Gpbp71MxifhyFj5MSxsYntju2wAu2u6FoE6zj9rE8nAxYyLqW4BypPa9DHjrf5vq",
  "key20": "56EL1M49YUhcwWP6GVA95jSAbqpcsjmRzJJdnxernWC2BNmWqf3r8uNBYGoy3qQVPVxz6DSoUnuCLN5Wfct3rxT6",
  "key21": "3LcpfoqBbwM95yFZUcbtTejv1fTNEUtRFQ9yjPaKP4ZTWGY6dBA4tpzfbLuvWmwvWMqfoPzP64NPiBMHTQs9NVaz",
  "key22": "5Zi4YoxXh4TsoHNPP1DEJurWFcVuGhk8j9XD5cEpXAXUSd7RGQ2fHSyELrnudJMpM9rV15Sfrd4SNwybsUCqm7B8",
  "key23": "5SJRt45RJnFP1AshQbaKieJnpd1TzMEGYw3uZAXZ47fjBRrLqLANdJPyET457CggARanNk7u1saSYx1QRU1g2tyA",
  "key24": "34u9Bwh4yxWbJ1mWfzawFMqk7mjSTQ8DayxzUs4sGbWjUshjbfCpQqbHqBUcrArLzvtGAYnE5gu9m7pLCwQiGoec",
  "key25": "27L9Xaf2YvbHRLDcHGihVc7bYiFhr5UdbkGnQ8rT71SM6tocgvTHn9mmJdtQ5Xij2YBaf1MnMBMjFFDcfJTNmSKB",
  "key26": "2a32FT7uYKnSoNECXxpDiAiW4Rg4KTC51nz5XFfFrA7pQ2V91cADb9sdA4Uf6n2Muqj2idUZH8Z6qKzTouJfyn1z",
  "key27": "ayTpuWK2VzduMDgR9RYwt4jyAgYDNiCEJujru2oRUr9fhENoTab4kqL4etZFLLLqHWHrSc1f9WoFZnf6EtdSGgn",
  "key28": "4Ljv5BpH44SWeXyY2LV4AJ8uHhWgSWGmBZQKFZ6GhTEmAfxSibKXN89bm5Dinxj184Qk6271wGWWVFP78WXRQHRy",
  "key29": "3bjFuvZtqGM5paEBzowmUWWSJELVG153aaW8h44kK7a5Yvte72f7DuymWF2vepSD4v1uTHvD9JxHgnRpvcmnR11c"
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
