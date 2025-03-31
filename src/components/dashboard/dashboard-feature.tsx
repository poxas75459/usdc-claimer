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
    "2CT75oipedAPmBrL8C16H4F9mLAi1QzEp8sS5bJdnH9Do6QJyCfBrr5Eh82vqoF1zwEuYhy6GjYDjvqUmtPrXT7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1QvE25XsxnBzsHaoK9XKVMFQtF1NZHsuCdnW3RHciRLdwtB9JRS9xxFaJUYwguS9in4UBstGQjgDh4a2iXTF5C",
  "key1": "2yYrjGgEPGrydN68apvbZwmAHyE7W8gkzJhmwSZAKHvybz56QXz4iGjDet4v3mV7GxBHySsT7dzgxac13xv4whe7",
  "key2": "4wRFzg3ZmgPJUTCPGN2WP8EqvZWBj9EL9JV9KPsBWRDKMW95L4W4yBezyK5qTTGFdWHLtioRzKwejULsChmDFaRq",
  "key3": "4dWShZkjKqSZCSFbzHkq5mNB22EjFnHYxgz5iirhE3fh6idX4VrZu3ZotEc7cejSLoUb59xtrrLMRgM1YG7XFGDY",
  "key4": "1awamA1DWfPXnFNUbivtS98bbDmeJR4ht8rAaF8ZqBV7dStx1ZC5BYnKvdxYmnWPonR851cQjhJt1dWjRogsVxo",
  "key5": "3QKrAYwSuhjYwo2zGKQamqjjLm94mLAbTUAuwp2VmVw1EHtcc1qJV8WHVC3pd17U25QVRSdFRnWakhmRUempz7ss",
  "key6": "4DHeGfPat7QYKXXAczHFjS9scqXxJzFBjes2uonGKXBHQkD4qtNMKVHN62APLVR7qegoaymVsUwsfRZafoUNzkG8",
  "key7": "63JG2bvThtW4Z2C7TV59CPzsShRFhaWB5hZafVonDvuT1MnpyaD71H6cwgFpxnm2wKLMiQgSRcybPWEsKYEhyZ1U",
  "key8": "46eZd2wjojjCEHkhMhreaQLyCmzhBKJUz27fWizgY5JoBfUpXrfbAaMHtgPNdCvUTun2uks6XYjWMvo2N1ZeEojD",
  "key9": "3fN1AnhiFgAozPhp59HgGSuPEHWPzi4EPRHQh7BzT8S496rqspbj9QFgA5iZhBqWswUY6DSoo759Lre4JS5XBABx",
  "key10": "5uDVHMZAW4TdSq6Bwyj9PYW5hsvFLFgcX31tTap7SuNZGUZpzYwsYD5eNjHE1PAj4nDsrb51RxiVYmBQ55Taeujo",
  "key11": "2yoWa9krm4jZfyJRVQW7WoWbeAYZZ5yHTdrhDztq5EMcG1KRoZ6PszUdVCgFBKpotk8WAA6XR7ooXB1vsMzovmbh",
  "key12": "71RgAXdLscZysTgSdFbYmkkmKjBcYPtodjayKR9a3q5UAx7BPPdXqmNJdwZmTwybhb4nzXGS1gtwRgyoYUYWGMC",
  "key13": "5eGBEY5kqCxNEGQdNFiWXpzmoVrqG6iAXW4EtsSVGPwXjrQb8MWgmznonhjtn8LKjZo89y9vyJCEThaBr3qcHLj2",
  "key14": "3KVZjMC3SgHuz5X3M1jAi6PRLkGWNurK8pbY1cCCayXzykccgoMrzQF1LpvsuAGfGvHCWbjPBTYuj1WExbGYRV2C",
  "key15": "S3qxBS4kjNWWjvy7TUiz8AEygYN1PJW67HNT9g8GSsaVdaqoPrFz536EP3EYFocGyeGt7Kr1FLY63eVdq5xW4cD",
  "key16": "5mGZoTxqzaRPYY6o1itXE6Fr7ZtQaWekTQLxFrhmZ5JyPWyJT7DoiGqcKGW6bkBNtVtaGxtEGBUYK7nEkWnW5qnG",
  "key17": "5LsBLGu85eJJ9DgXZARG12sLjnT5X1n39hysqjCQZ5SNi94HWHhP9w6vtyUoNfRP3wcqKthujkQgpL297dPfKBRE",
  "key18": "5f6VeNkTEBNRoqDNgQUD42UAVdGrXF7QVaL9fdWm7zgpTKUwBrNsfKyGvEWhnEFm4Bg5p5XKEKRz4keQZzMn44Yp",
  "key19": "3iuDv21rZg5swF7Cg3WiA82HNC8U3znzzeiHA2H2wtEwxvMEA8Ea2sJidXBqVP6HYKMFXVjjPkAVLRpjWRRisD9Q",
  "key20": "4g3Tnry1LXn74hytSDhgnPNr9A2oPcYJfmMPkZg23jj3d7YWf47CGAdqiPgYLZgB1UtRPg7usjvUaY84joZUsSSb",
  "key21": "9Rve2nPvbBw4Ygjc2MNVMfWKw4tzQmuWYgMYwbMQzqbdToyby9FmUCQx4xr34TsK8Qz3k3TTGESPFpwsuyczvqL",
  "key22": "2VpwMZ9Wu5r16CTzeYyyMKX5wA4QmzfJvVhRQ671sovyP3ViYFiu7sujf9rT2kPofUBxZB8VbRV1wmJ5tnxzs1t9",
  "key23": "37PfjPE7rMkHdXbb4AbQqCxERnGVU2pm8PyNJNmSWKwfujqeRBxYmg1aEFs6jsXdN7XWPTz8wyGXP9ziYdx3qYCK",
  "key24": "4DF7UDPoA4QqVptuiSUyFsBdHuUqyphxU5M6gZVgRoCfYt3tF9JfYiG4aFTe6vjmYs543Am8nhaoC3zY72VkfFp5",
  "key25": "34uwpEfapyFymNsEzz2Fy4d31nKybSHnZNoiENmWbo34hVgX4mqvLQ6P1oWzdGkyUv8WnmEHgZkz3dLb4fg5dMrZ",
  "key26": "4tqw4xAzawXDAzkHtR8GWpQPNizodLzeVrniEzA3tTzUUFH4dfPxBEu9oRNUz41sShKhHmLzaAdoLcH1msE7xNC6",
  "key27": "5VvyrifXmfdjfgRQc9AjqHzNc8pP8vNMFf1Y6YhHePnpn9fWEJRoLVqhVpzKGZgkXBUQqcaDwZaNnbVyYsFuKHvS",
  "key28": "2ULQQ8aaiLMW4x4zNt7W1taayzgNHrAJcF4j8GmsZQzchRd7hKY8Rguh4JqTWab6AvZ2DDMXYHNGmsgX74KYjy4C",
  "key29": "3dnM1QcqEMTDQyVK6qk3MqK8v2JMqHLUrZeLEY5QsbAfrKiiPYd4mimBcABfD6PpJ3SkxA1A9vvoZozqpao7vH6U",
  "key30": "3sJmxYaAVpT9ezYmkB1hFCnx9XhrbU9AVX3J1PkDYGyN82pFdtLuJQeL5uKC2DgBAKj3MFUHHnmyWhApQs3fCR8a",
  "key31": "62Zxvr6hvGD4XnfHnuusMZ4aCVt3PWpXTdXXgzskdbnYqEpHzp1PHg2oQRpBHyytqh6szhCfSFjxg4w4nrjsmZ2e",
  "key32": "518tMmgBnpWT3kh5M6dnGh4YXNk9pHeLxCQrhJPFibxkNqzTyr5cpLn2JqezC6paRrNwqPSDyrsynyBh38FjFYEB",
  "key33": "4ii1NswY8jixrv9V913eFAjWDgdvNcYy6t6br9rSoUVu3p5dwb9msR6dUAb3v8nCf7YfhgSNApi1Z8mVqi5eAPig",
  "key34": "3imchQLTyFLqfRgcRe3R1qEo6T2UXCGY9AMLr7wMuThu2ti5Xj7V93xxQWLhmYGMZkTqVpnp739ZppoFATbAHEVL",
  "key35": "4i2PnpbjgmFTwZTmkYzvEujSRXetrXbfpmyjQ39DGV4VSPDXMuXRLtiwGBV92WHeGFe5MDdiZLLZVUBP3eqAVSjL",
  "key36": "3uTsPxi241dPaLBjdAzFQfPwkgwBPNVHpGSHwFGtDYDrHgeXb95WBcum5bwEXnf3KoinATXXgYe7rg8sd3kfhVQs",
  "key37": "31srjf4WVnBPG8v3yZdA64fMhctdmFsNuf86yHCvmeorFrYuRTjdEqBprqnqNmFTmbbfHaZj97ME8uKQXvBTY7fR",
  "key38": "66ye7tAqdVp3AKneuo9XpepcNcqgnWnpWxjBcmAfLrAmqYjQ7QL92146BZpS653X4U2Edr9UbdJPRcp9uC8kEwS"
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
