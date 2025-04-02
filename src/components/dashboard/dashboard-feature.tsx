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
    "4fLjwnqFfPek7NDk3k42hnxasPKKUw7hQkg7Zp2W6Y4srrnHW9TsCAWyJjeJSUT63zM8Y6xQYzLQfyZRuQkkXL4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knzuGW1Ch8j7e9NmchaHrbsqUXVmXzPdSDdvSVFsXP4V2ePueswPQA4M6kqWtaMfvdsi45pibYCfsrKCZXLahF8",
  "key1": "5H5T4SGPnbfM4uMwtDkT2HY4g5iVrRn2qT1ozUGQo2puHcyxtZnZiYiqXjxR2fxx4FYhStB71FU3oe6YxbeWaDvU",
  "key2": "4XZZWYYAwepKDt6rT16d41WMbLSf4x32nmUQ8xPVkTJ2AyRPNd1CjDEP8Uw66xP1XPMXquBTYmW1dDspBSQoK1wn",
  "key3": "4PreYonacVVHfa7VpLPruWPj11auL1MY1CwPrkvkQMMAHauUvWoBvvJRkaYYFYRX62J7hKooCoVbeza73purkV1d",
  "key4": "4TMX41RzA22HNGeGBokwEMRR5Sh6WVH1PZxU5X4bE8rPwXe5gAUowc7ksSJHoDVL3TpTqagdcLwqMatX9w2AXiEx",
  "key5": "5eLcggPaTkuF1VSojs8Zz4CxGa1e56jrfZNgGmZNVuRxexdxXKokiwxSS2orZ7vVMLEm1HXG8MYzRFw3vxJHposW",
  "key6": "4AgFXgmCVp9cbd8dkYE63cJMSasKBTm8PB8NGVEDgFmhEpZkt23Subw38JdApmzMF6kAQtjqTAHKZ2TgeftATzMR",
  "key7": "3ySeKRn5CRThaTRRx2oYQHJDT419E7GT1y8PGyYgBUXHpAsd6opqczraGeoixPcRcn8ZhdcRYYt1Tn2Schtqocw5",
  "key8": "3P7GDRUe67S3NnHE9oNykXLmQi9GZ2j6PbZTUfeJTWgUf1qCvTnnK2Cb89SCkJA4YrWv26TmWyWwx7nhKwKhtAUJ",
  "key9": "uLmMV55gAuadJc34YGyzJNuPJoLjQTttiomVDxoiVuFAz8mZZajgrx3q2w6Rn8528DqmHhtruwGsF23FUjmPFxN",
  "key10": "3VjQnK7kxrP9X6dVbq8XBrozASkqQwBRiVtHbtMSQStj5RRXuvNKKU7S6jRVdnY9FwxB1gzjhviN4HWisSDAooW",
  "key11": "61Aoef3AdLoVCQoA2MA355eNGt5FUP8R2Mo6C5eDwAkYWBvqpKqdVjhXNCkULThBL1WGisToTQbCW84j8k9acSmt",
  "key12": "5HvcmjBoLojyZHvxNGaS5QNMTNiEghkjuMdjDHQtmWoGfLwWSZhjUU3vLFpVvsyrBwzFSLbnHDrcXc7nQU5D2GVv",
  "key13": "KeNZfyHBL5BfanRstwEpvAQ6hxzFZPiY8zQ3eh36S9pNY1kUWG4jYgnp2PpXEVjAV815f9XMz5EQxTk7n6kraFx",
  "key14": "28cXXa7Pbk71dUFS85QxefV7U8JzXr4wy1dqmKqaCyNmdz7hPK3AKrHx39sm1kvEJ72wmSY3ya2nf7DLG3wnxS5E",
  "key15": "3AaE6rrrYU9harzD9rQbZWaWypHgwzJpRgMRsbKKrfJbP8m4pNEwviNSn4PEwjVMW3ExBsV1Ud1eiLgZRH4gp8tS",
  "key16": "4AJRaQVgNMVZXcohRBXbnDcVD6Ama1r9fxJGajXknwwbNBPZ9Rjws4DndCxa9J9vUkTZUDTrtN48JyLpTG9M8Vx4",
  "key17": "5pbR7mWic9oYQwT9V37XBujY6QaP3t65AA3FaRzkyaftdui96kaMUGf3b2bjwXbLjP8K4V1qR93dsrpJC2zkxkmW",
  "key18": "ZDFVryxD3YWdHTUdM8Qi3nTt8PGxP4B47AbZpjDbpP25FRPVgS2MdxTagZKV1YbrBu6Uy4FEtN1eJSfRBFd3Ms6",
  "key19": "2iytjG1XdfMknu2ahikW1PzxeLqJuWEeAi3cYhbMxzUH5uu1XUSkK698BHzbpmiHhXBKegHmo6PmJ5a6e2fV4iMY",
  "key20": "3gSacB66vR995E1j1wrRYrRPKQbywj3Dfb3e3YDVVMaMmuHe8SitMoFTTcYFxZ1Eqo3N6RD7SCzMQ8Xy78KBz6Qn",
  "key21": "f9pK5aWHb7GWnqJLfPaWQjCsPr8Rnkyo1Q57fy4vvGZWkWT76JEU9TpdV7PJ6iUX8vMVGBhypdxoWMi75FK7Rev",
  "key22": "3TWYDTTZjCogLMrkbinc7krrbeVKj1tDkuoRrVEwxjvHwzXwCDeGrSgrvGLqvaznJb5okVnjZ2aASHJadn8rLGmo",
  "key23": "2TxF5CQz1bTZHea8dQacsQFjzGWYYN5b4qcQG7bWJebz7CowsxUCLpazsVfDThPyypVCVRsNPVSoDY1eFWEGyPtM",
  "key24": "2qPcdSW92J1WX9Nj3KUr7ervW4xrRsTtnbfqJWvUk7KdUuKGL8ysUxEoXrSbdUQkGU8UnRo6btWs2MVyewhbc7CC",
  "key25": "26gHhTjgArVK6RWAcwWVynRyH6WzksvksgP1yXZS6jFG3WQkPJfa2q5q8pcJYhRP2eANHLDFD8h9V7rFQx6XEKnB",
  "key26": "2aM64h2H8uwTJT28ihFSKVjJCmg7cfDH7WYHcbGkuqCJdtBx3Gzsa8NUSUpebByVmvmiq4c9omM62jDV9vUHoioT",
  "key27": "3D6Bd8TmFRgQfbdcVWQ5PnZDwuQNaUtLLH96FtssiNTe3bqStrUFkzxPebwdW7KzdMYkdwPKi8fVEvXaeGj5LeFj",
  "key28": "4cZPAF7pY26dyX4Uk55bFyCS5r5cQPNejBJW3BkadXutiCw1b8DingVQmDGTbENJByo3GSKxC1YFkM35ytj8fMWe",
  "key29": "55gAuqp2gX6extxdhqNo1zQkhffHCkw8HxpUZirSqgvZzQxBpU8KkqVNfKHUDv3dr2bFoKkHdEy762YxLbDE6Q6U",
  "key30": "67gP5u4rz8thnAv8S8WTvxZBbgfyz2aihdByDggFW8aCkDEmiG2byh33JGw3L3Kn5vw1nf4e6TXSXYvCzDd3Xqdq",
  "key31": "5xK7VrznRYLUYjGqUodtt59DjpS4WdVLk16jghgjhgcAKZKCCxRN7u4CW7vyYD55T3qHhnLt78FCnSea1b7cUGcb",
  "key32": "3nrrMQuftH3Jb7LCTx9isb9NQS3mARg8EjtruvX2uBpTRi5iR3NkedHaJSeuzbaZF1YgbeJ8FiGkr2qNwat6gWSx",
  "key33": "3XUbncqvbJnRrujqQ5fVVojksznEiRmrToqLujf2P4zFKYhYDU2osKSWQ9188JcRdjMfnSbA4M9poMao4adqzuE4"
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
