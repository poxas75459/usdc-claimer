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
    "3FEfiDJe3Jg5A5YahCszPyo6QM63M2aDePQ4tbTb93o2g2LygaW4VHFcez4kxLss6mMJ1q6bnET2zYo1dcz7xXrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6En7SnYb3GCwy1ifDTzD45zRVdnpviXDcfxAHcs1r2V9HY2Eee1DAffxK6GdZpunxWBDRb9rrhxNRwUmS1nWFY",
  "key1": "23BVbSJXLR1ofW3bRBZHxs76h9cJzUc9LYxb1bCZiuQLqmzmoknvToTxpvKszR7uGM7znoS2VkszQbxopBMVxe5J",
  "key2": "585psfS3NbzvtuRKR9ejiQYCEPzyFWFgk7CwkppUZ3TLJX8CwnCthpek4zkRdFVGfK5cgz5fvAGtk9umCetTf5j2",
  "key3": "3HLVycB8KY9X8yPv6Y3vmxJAzrZYgBwm1wsZEx1fPV598CuQXdq4gJRbPhZYDg8tXrScBVJiVq2n4E3Ec3DKopZa",
  "key4": "3iSzsXyvRspKNbLiogbVBevsxL9wVaD5aUvN8PNMKfzwFP4x86Mf9dhqG7i3it9uE5beJY9GX4uVuUfzxRVGMLwt",
  "key5": "gd7CtgBPothBbC5uEXRb8mAn8ydfWFPWD7s2scBZoTPoffWpZibMeKGjjpfx85BcWrF5bmACfLE8cnYu3Bjvy1w",
  "key6": "Ue7pHQC2WnXNHg3JnXbQdeD2Dwn4vSgxvjmqSrHgheRUkgq5MYLSmiXXs5k6hXVQg8Ws7sJWCsTuvbAMLXoWvzg",
  "key7": "3E5rqZSdzSGMWKAw1dV9ymUgpp1G9pY9kBuZMmEbUViNfRLEPXNVTRqzkDj94if9AVkiGYQxAaAnCY1d5z8xtvQ4",
  "key8": "2u6hxx1AKwpLWCmWiKrsa4KUvMgdFFpWfefQLXbJ5SLiQFMSMgCFbdQCxWGkfR3tiNws7fMr2qQChGuR3Exs2vRh",
  "key9": "2GwHiPCoSG92YobFwiwyRKX8a4b4AUnkHSyVAJxUnANsemnMXdtc9VgcpcgHuEfxHUMxPgsysw9dhXzmKG84Hzz5",
  "key10": "3sEyAghRGt2UkaEMyd1d4eea57rQ2eMBwhQ5wmoiSc1z7F7G6UsBB23eCMJsr4oFYes5XzoupKynDG9gjFDPB2Hs",
  "key11": "4Sg2A4rRs9qUtqvkCoQ4cxcJiqJpu9L4i1jFMSq5eyrEEg3vEjz5BTPKNTJnyWsLYEL6URE4e69FoqqDxtz9aq1g",
  "key12": "2TpUANMue2demhEgNVXmAae6gSzCavZZh6diuzDCJg1uav7u6ejS4RmKaSNfkqP6mB6ux6wMdXHY44MTTGh1o6F5",
  "key13": "4A29Af1tXmAiru8zTvJxdvTyGD9WTHQYzTj5SWQfq39n8WMV41TR2cfQUT3tdbuG6Xb8qQw9Xvc9Y8znTSKZvhJc",
  "key14": "ZRcnf9abuezo3FoG6YAeTu3VBAQvVTrxpkbcB8xh6dKLp37ptYzoPgkABiPTeRMjaVpY9T4qKv9Hq6UKmaLbX7X",
  "key15": "xNkJmFMXYt6kuA4SkuFgQBAJzJuprzw156ugRmXm2Jopp4XZiHVfxdQndctu87eV8XkiCT7RSB78nJHmEBCtEHd",
  "key16": "27kz92JaqvQHKxQg6RKpYPHMSo4jFHAJpopHGihM7LD7LdX737A3uTosvecuJKbbDTgWH6uKbpCzXuYDkdGsyHzk",
  "key17": "3DSnHadWBMM9vMFoZaBXP8Y1vMvDu132nLQ4T2QK68cemRHHyoPoWB5FdMHSVoQaGxRBCgzyPZth7a5dUjATu37C",
  "key18": "2yS4x5FfshX1guCCQA3Wiq6xFEKPqDEWzwitTP53TAYZSXXbagRqPBFNtBndUrrQKuzEmgD2e65GTAjd1aHuqtV4",
  "key19": "gSZe6DsMSU4NqBZ8za5cfdDCr55BGHJxzJ5wen8bNs4uoCucGHJan5Rf7b7MTHpEtGk1gaCzpxQTdpj2dcVBu6B",
  "key20": "3VRuqGziqGjNkCU7JCscZ33JXqx7GnrpzSiwJa9oko74oZJMvi9sVXCGGvTwiahDEtHK8itVL5kMSYKv2TVBmhiT",
  "key21": "7CAmWtQDhsXrUV6tfzkeW9VhBiDzhBAk79NPLncccd8DaDujBA5rKtDfQYG7XYUxt6BR3B9EQefBHX4P7hsVdL1",
  "key22": "3fVtoSiWAn5J2mtzBDvj4N2YdAz3iykzN3ZHSjYMEQJ6ruasFwfA1B6skQbmntWFgNeKHXdou9MRebYQymVBHDjK",
  "key23": "3qyKamm59nvaLy25A1JXUmDJWTiymhLTeaX3u5tJ8jMeUN5kJN1ZfkXAKC6JBUceStBd5dz56SKyPPZKFu2nxGyL",
  "key24": "2dEsw5QpjUmZyXK21gtEedzRXbrhNUkjJhHwL2FsEn9ZmR7gt3catSP13eEb3Q75WfMFdjCYqSH45yT1WHJfmsCa",
  "key25": "3pivUrBcJMmSyALZru6YdXvY7KFzM3LdrtnjYAiMBhN4QdtDRr8WbXTMnkEAFVdBZdbFtnGiGvJCtWqVHo1zTLDk",
  "key26": "31yApiKs77jHaG3LSkx2o6kMb9ADHWxnjtUP32zbF9NZXLzHaJnkVPewqaPwWDPdFWMYS4WA4GeAWMa2ML7YNHsA",
  "key27": "4N7u2PN9wW5FuTY2Lx5C5tzVeMzctQ7MQE5sJ6AZax879ftiVBwrf8RcrvTTWcq3zgnc8wCYEMqNvHRFFYnCLawB",
  "key28": "a5NJWrdYaKAQ695BXAafSRX76rddRAwURoBh48GBLL7uhpgPu8GVMaDydGipXLPi8mjfgpWQdt1AWU4UimZE5Fz",
  "key29": "52s4uNxPX14S8o8NJfbhMJXfCduw3tv1CfJtLE1snCT6bynFTPTXja8DjLGHJQKoLGPGMzC2Cce7yoC8wodQwkGD",
  "key30": "CLgwwWPqAReZnMPFC5jaUwrn7qztrnDAt6QSuPtwtWYDgWbESHr2rtY4kVf9qsZLrbcpASZ4VeX8psHT9VxjRQ4",
  "key31": "4v6qfYdB4H8K6K6TBy6qfR9iVybrSWPugpARKRVuaHraCkEUeacFMf1qhCJgJbuqq5mvrgCETz8oG3zBdbejnK99",
  "key32": "3UYk87mm4jFsRGgFMZfy7Wx5BZGPvPTPV9vCgvGfjpNCPFct93UhnhcgQmSKWqQYK75Gg16sGHexgpm8yuCWSdK7",
  "key33": "3QWRpLERqKKXyKyckG18VQfqQA5oUBEgFrdZ4bi4dfqixY8D98eJnhNHTmnvi5SG6spTDZQLw4CQfiLtPi8q87D1",
  "key34": "2nmTU7kwBhAHNAhYSA6M5j7zYoyVGYCp34Sdb48o2S9LYn7EaqB44vQfQ7nizduB4sBvuw7p8uPU4uwQLRQr3B6a",
  "key35": "4TVCrVm5wT1KgtibuYf9iHfCQLeVSk8fzeoXFFX27MoeKX89NoCNJG1tkkJsBbSkAZBKgAYuqJKUTFXcRXvpFhuj"
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
