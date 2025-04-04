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
    "53WQ3MJdtjkZNjEN9JiZLHuNT3pukYEhZCu8ztNjpv2XvTbB5ErCTDmusmUtPmVgqmhm1316ZyEyTVRpdM9GATR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLigxiVZYK89B1Y4x4av1tscr9pyfsQq32u2LoDR6xhVVYfJuRiUuHDHoKHYqBtM3SdcWWFnG6kFoPYXZmK4ube",
  "key1": "4BoqmuTFhraez3gqAdFehkHBxKxndhoiD8KFYswFmxkgipy8XhTCJroJbDpUmNb3aurQ4dcQNvHUPzvYeNewVHsY",
  "key2": "26GwRiYJwoKLEuN7SwQxEdrEGVYgKCE2c4CNEGH5XK96pt8gWjQC3p8xEmMySEgvYmLxuyroVvq7A6aebWFcDKrp",
  "key3": "3YRsFkuuzT8KxhF7QdwfBWsTo9HavKqGnN9d9cK55d9pSu98ceccFcuPWvrqFn7nHUmPuBiFwe4HwwJPcmGbv7jf",
  "key4": "3e5eqVnUufg3w75pzykwL3oy2WbnHfvJ6PEFN2KmB2mxhEdapRrwBJsFtPo2irkucWCkoQAQ7mcFFqZqMDwaJyWb",
  "key5": "2zgpzKs4HWyY4btpLuUGsYMSDx3riAGWXxGfMMFRCrSfE2Yw1GsQ9mrwtGNufcJbDvDp5R3Qt9EsRYjA68565z8x",
  "key6": "58deUeZwxKtoaG8H9B6SipkAX2DkcB9gJAgdusDUL7bWf8KTrnRGN64NZLB4EqV98o1A5scUGvGuLeqWG9GKo9bi",
  "key7": "3b3d7p64ixDBscLCPFBN5YCPVbq9YR6FNxbTjTVC3ptyBQc6V4apgziNagqd9UPKDsmyyEs78Jss3nd1NE5VYCVT",
  "key8": "WeaDNWomNistFjCzLxgfRkHvLgZwuBQWCdgie52GV5qgMPxFWcLC4dNc7TErMsrzCvFGAx7wvthfjUxm7SqjFjx",
  "key9": "4oYVBXcfFeVETf9zKsMjgaEEmNBJxZMtEsrg5unSbUDtBAWNnrcT3vzqWLQuqUymYzJE5XNzifULTP13wdviHAJU",
  "key10": "qX1r5VDTcs19wx5XkVieFgDDyqAhmxqRE6A2g7YyggdqPg8MfCLNcRitcGAYrnzeJXtcRpasoaSeRzJfNVhoyA7",
  "key11": "4WeJDbZ5cT3XeGFRmNDHyeq49H5BJkRmW4jCrxhDU6xUJFmoMXmcVrXKmr643oMbCQBKbJnQoYPeFU7DBemTJHHJ",
  "key12": "2VvaV8JsMwk6Wy6xk5v7S2yzTkwtekcotJ17LppDEyCKwM626p9e6MEzkhuLFn7fHytohWYFvwom2jhAvU6LWZmz",
  "key13": "53M6C8YHrLujLECqJ1CUA7ENEqJwWsfoQVibpqD6B7U9AjooHaAeUChLfHXDrVJyF4A8y833CARenhwAR41pRdZn",
  "key14": "DNfzEy8Xg7Lr9mXbGQLf8ZbxocDQvaZxKrW3gm9gdK6TdCVED87d1UVqN4dsFfFCeMQXN2kiBaQHpLNRecFrxM4",
  "key15": "aeQK7oEoDiEDn29A7YWCWHimZjKT6UG8LiyG2BdgH2XMi4q9mnFmUvcEg71vaxQc5JqJpcp56YkuiGHT6xpuWDV",
  "key16": "3BPTyihQKgZRauKCsoLtRsma4KX4CP6qdbWJTAVrsnGrfNiqAAWd6Gq6FbTrLQJt4PGEooxGnm9oAtoknVmUm3f8",
  "key17": "3BRnEoaohWvTKdLX9r5H2iyQ9p8xTzLcMh4ewkvQTZaoAv6orsqjduWcVLd4yqGbAjjHDvFgPWwTwcDiktZ1BQs",
  "key18": "zChDVXLftfbvzETbWqsbS6BpYueBRiwx1CgLfsBvLDAK54UfSXYH6Y1BnzgLf2CmSCQWR3mL9djvkYaiGxq7bgZ",
  "key19": "4gWBUtgVEDhA2aTFaB3rQFggZh1rMvrntgHeD5bUoeRp6kB415bEAiW2SURYk8dxWdRjxoP9ZwXy529z2R3svKQ",
  "key20": "4X5BTVeqyCVsYiRfMmdQD7HCpniVqSVLJWnAS4DQERwpRSDamXt1gYnmXrKugjZz4P5vUVj6zJbjkZnZ4Z5gvtcD",
  "key21": "53yy7C1mfWG5BBispowwVk3pWhU7xFw45qowDjnNuCPApuCcD4JPc9Xx7WQB24MMJVZU4YuvpmMvKQ6VTABuMakk",
  "key22": "qfPMWs5FxEmop7MECXtPyQBAeCsEayP1LBNqXf17VdnXaNimSZFXo8bf2mqGHrxi22isFxi6mCbKDtLygLBPZCa",
  "key23": "2dK6fFVHiP3WUD2mcHiNpmXEyqbkxBUqeo8vNMr8XF9VfVu2UXHxtjyqvv1sNG8G57cU1eakb8sJciLmkzufE4x1",
  "key24": "guqyaGJu6bpjgUDs1nQaSyRZBu2jnfq6dd4z8j27zQ6XnYZKwtErsboKFBSku35hBD3sAqVXZZaLzVhkpXznEsR",
  "key25": "4rb8hEQQS3KUw2tg7nY7vWoq2Tn3wjBbVqzg7zG9LY7msNTyQDccmk1hsxxjrCSW4PjuTM39fMhhxS9yrd8bxicA",
  "key26": "4bGdtnz7A2sDDDQny55hP97pPCPasyh4Gg5MviUfeLhmaXFusBD3NtxGWYTVtNiWTdPDQ1NQjSNZbMYGeza87fGN",
  "key27": "4TQVdw598XGDgs2dKxLWVeSjv6ctGQuW16Hk3fPEmuz2bnEH4PiRiz6eAPHRtMpdibFP59ZHgfns17QcV4FEEuHf",
  "key28": "3B46aKactzACz7n3wQUtchZX5cfhsrpx2qApEWaUTJr86TrgJayYQq4iwcZixFr5ANmsqE18drtCwAcrkgK1bJo6",
  "key29": "vVfLuMfzfLSA831DshvrNgfwjKC2wEcfhWSD7vecs1Y9bg1TUGJ3gQtwVuL8Tbc7ERjwhVXACeMDZCu3WFaCFXK",
  "key30": "3qxHvHCBBUi33HPqTqxZS7mb4SHW3n9QDqK5tiPPvTAxVUkHF9Uo4o6EcniJjF3VqEGtWq5ZZSCLPfvM6iHTZaWe",
  "key31": "2yCLMPCJZ5G3DqcMMoGMH3HbHpHEw8MhHcPedhvzGRy3PDQfmGN54p8V9jvf4V4QfemY5baRTAJo2QQ9FpWUJZdL"
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
