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
    "2MoRXkxrPpZPesjzTrGsj1gBHc8rM8ihYpiVBxXaJxhFMUKuVfPkePuRjTnqomacf4rKnQ7b6GkPe5Kow2jAo9Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6ftfzw8EkvgJ84jMnk8XgkR4iX9N5RaxuddWHeMc7qwA3m6Yc2j1EhsYjzfuNuYLRArTx1Cs4JGV2RkHHGahqj",
  "key1": "2tyWWZY6gQrX6BLUDUPQnU25SBXwnt5VXSw5q8LdK57Lxr3EGfEHEYcCfakfVbN2uCECi127BDhLntebDBuenF1u",
  "key2": "35GuTNCAEFGAHwh4ESkbwtS9PzGrPYwFAToNX2nRsCzyLj9QeViJqHYBPBRLiGNCGXoJ7jr9yPnrBDRQqnrzrwDV",
  "key3": "oTG2FHoSeLX31QQrFJ5j7ra3krUxBmGCWMsJAeu2vVVbDnykwcLTAiPjtFD4zYns9n4snBbRqBWNEBEvAAV2QcS",
  "key4": "2wXQWMa8tFu3hfd3sDjV33tbk374oyzAmvsuzbUGUMq2YoGFe6QkLwVGcrwQA8redUnA7Y141quz6djpTq3F1Bux",
  "key5": "NSjJbd8L6ghHx9TD4vbQbK6MsdnwUhzEb1hwtyHb5GNHmyyAXjiT84dsoNt3EshT729CQBZ6uoHosMLwNHn4YdK",
  "key6": "qLQuX3ai3FZMeTxBur3EmFJ5XtLtkWxxmw2KHN1HPegbtnZQjb2ZbVKsWBFYCkdLnhqujwFsz7h6Dk9y7D5n6aH",
  "key7": "24Rg3En8mze67trME7wYSBiTidBRnumLNX8hR2Tef41kgfR2WjffUJnfTK7QiosVikYgo6cvfg5swDqVAnVv35dS",
  "key8": "5N3zUtnMrcJyfQ8NJsuG2bpQ4E1pLwHkitAjTUvebcAcU6q6JfZdhr6J9d5puPjsPvWAFBdPpSwu8paCpfrSyMYF",
  "key9": "hM1q1puR163kTbSgFnWytThFNTexRgdn5AnHjSV946EgA7MKPJ3qWZWezmrifuRUHKbxFu8ryxBoHpvXaJezMxb",
  "key10": "4rfsZqE5VF7NLG9TAbwLUsDreq3fi7AVpPwygGX1hKggYSDQLmVtvND5fQMT2dFicBHeCxzmsNkCj4BS4Q8UWaqU",
  "key11": "Z988Rxifonozaco6NJC395PMfwYmfZVxYWvnDjMBLjTm3DWACGBw7yanUpA9TXYK36EKaYVNPsfMsLmxEqQiDuh",
  "key12": "63YDQtFHpDNgEXFPAbfYnpKRarXqF4Gn8zY7JDzTHLvjnJ7aHNtbWRHPzxgg8TDRfxTa5QzyDhtCi44tmsmx189i",
  "key13": "4FhMq3VJ57kbqfiFHKHadPohQaeizj1Qz4n92PPo6W2qffuGdGSYusaU4atJF8179kGWqyE43uJ7fA8pp6GUhzmj",
  "key14": "4LWThzvt7e2scLM7qCjnAAUWizdoUdkDqz8xGtie9RcBTUjN4JYY7a3aPvf1RwjjA7cez5vw8AkgUyTAYRsmSjAE",
  "key15": "3ERH6BQyzy5pWKsiFYrfSBDxd2FKwZPv7y9NEC7Q4zdmwPKpVjG4QSZaH8r6CsZe2munkHWuS2GNY7AAeENUCjWY",
  "key16": "5uDfcE2os1CuTTehPSGsjZeZ5PGKLja6wGS9y7XGE8LWCtwiwvW359qkVK1eCwZootJXCgWgGk2aA7fnnshZfLhD",
  "key17": "phRLVo5QzeB3dTXyApvGkjsZ7T6svfGY1C6xt339c2VKXDpM1sZmVPVnvYPaAbX7in6Cfb3FJeLNheCdQDquF44",
  "key18": "Ymc7bXFEanVejvfAo6CA4prqYiiVWoiDmbLYFRqPCPnq8sgxHo1z5uMJeTssh5jTYTeNaPigQfs4h2iZB8NpzDc",
  "key19": "3VWVUNZWAQBmKhXRopPNf4ZjpXKDhRzJrhVwiPVEdjCd9S7smpQ1xW4Nr6qwSdjZfLDNiZJpmtCWy98BVPKHeYAV",
  "key20": "5tThPTEnrn4uarDcpkXvo8LUEbZhy1yTc65ezPVfYC44RZrfkArxXCNyZCXmooqihicPH7Dn33PWzCTa8wfUoayM",
  "key21": "348USSFyZoYnPG34vvdhoCTb4Q5WShtqhuxg6sjtNeX5UyxRcMEbcMA4pxJv7fZKbCSgbGfwjpbGiT499NdJEdbu",
  "key22": "M4F6ZM651A8kbPNqPUK4N1DfJKvV47gt2LcwdH6ATxtYdYTpvNMHBVkkcPGj3snuWTuQVb21HiLUyVZ7jhdv7ix",
  "key23": "5nw9q3dPAerdit4wFAZmNRV5z87tmMEbjHU7pknsd7XhbMW1QKzQMr7NuKWGxGwZTT3N3FD1ew4xNsdhABPitnqt",
  "key24": "3eQqh5g6LXUUCPz5PJGRDiNdz3VgYBBwAf1zNvKGeuxiV3DLiQoNgTjZW3YZmxTpNuB3Mv2pbvrgZZqcN6HSVCDe",
  "key25": "Poca4A8GG5eKi4BFWqHqJREvUiZZ4cQ56aJi76rhg8FZdgFm7GaXcsnL7epTdMGjiV7F7BFHnfxvo1ET7X4NSQU",
  "key26": "4qDKKhAb8K3coV5UBDLGiSxP4hHZpHjYche2U7DAg9xsnuSygjthCTwHpWHyqUnujwAd91Uxg7o2e3uDu8uNrQGN",
  "key27": "3XTVBYWhLJdLNWAkJiohVKAoU3vmTwCiqVYeUHvwTnZR7CSjQrJbyckT7n7bayvDg5de8HX1KZGQypaEosyQeCzm",
  "key28": "3cJFTnTGosemrEuChPhbjBhrDAYXLiJBtgDBA2rsXpUH6PwbgqtGynrX3tYAaGaHREXiBJNTTXA1FYnBdSrUwUU4",
  "key29": "2ksPGtZtYAZNcXS4As1nNfVv5UfWW2yyk7REteFSnP3LoNnsyxvM5QuQVfdtW1FQ22eG8ykesstsabytuCwrDKay"
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
