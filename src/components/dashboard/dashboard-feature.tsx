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
    "43h9K2mNDwXiXNgouis9N8ijHFZQzk9XP2VthYzNxVZqY6zJ9BT7Vvfmi9pLEVAztDDYJaTuWCNftFpapGZ1G4XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1APTfCGgjwWhKnascs3Snv4ZMkqJdkB7EnMDLMEVhJCU59dj5FuHLaiHC9waMjkipQ4U1trgXnizYCAaCkvTLD",
  "key1": "5dox181E13YEyhsBek65LqJF9X2PwwMsdjqTb2rBGbZZdTo1haptm5shrBFVhLALSp27m6BTmJv1awuMokc6m2Pt",
  "key2": "Cxg87PgLUZ2CSz7p7WYFbMUuJQLXE6qE3qrcE28sfYwkAFps87Yq1Ep861nqpzahFg1BNqBqE7BWmJ3gWPy3eBy",
  "key3": "2eYpF5HtiEN9xUtSJYkgAtpJcgyyHSbubaPFFeqjo896JBYMvdS41ByFiznEWvrm5q7W8ho6WeiimtXt6orcfZS2",
  "key4": "5GYC5nS7FLzWtVagaXCAJa1ttnjziJpMoqDns7DwEHj1tUdsHcWEuBF864qW9q9ZDisER5wfubyFMaHzqToDhKbe",
  "key5": "Y53cpqH6dYcMCmDND4q7CeyvBXWLeN7dmF5wdVCcByDuGJ7Y2iENcSjaEq3bcSPD4YpiWQGLZCDxEX4ZkKkgyDq",
  "key6": "58Ci4yhZ9ApmT1JiAgfTfitmAsY8oAyVEF2A13oQ3xeK35Dg712y26Y8hiT5i5kfupYEVLKu28My1zAPz5QAqqY5",
  "key7": "5bfkN1dhM6rR5GxquRdictM5Dwcj3Mcm4dVj7yMhpSXEBCeWJJv8SFS62uaSA7CrwdneNR2o95kDepN8TDzZdb8Y",
  "key8": "2JimEDuW9Wxvvmo8oYXjv2Gwid3RrLgMFYSKJwWFK6gbexqjdJokUuy96vvm2B1TA5wuo6rivZwxAAULykHbCWCL",
  "key9": "3sSnNA9xwVwyqNowNjPjVoUaHrGxwybKfgiHbZuwPUeePS2E6KAaYZRoCwXsFjxUwCt6peQ2xQVTv8yvMTXN7nuA",
  "key10": "VVKVGYohr8pcka2yDgdKdfn4VimsuPwuyNoUiJD4xFNxBNqmX1xr4mJzwQg9d9vgSs7Anit2aqRaVvmMF55aczf",
  "key11": "mHw19U1FYL7nZKmEPibswsd6ktVSmrumJ9dW3fZ3B76hcG4VTbHg8TXHuhM5b1Zt8PrcjMGuN4rV4ViHrxiNRzm",
  "key12": "59edDWUS7CDyPs4KCuF7Zvc6cnBaPsJCQ3Teqt7whi6FBQMBCrLdXMbtLTeKvCyCJVTuueB1xwdJCVmGeZpuWtry",
  "key13": "2ByY2crqvcJstrdbaWWYH3XkEPSQRpyUWYG8KiaSMCdRm8iDgJxFW4km8qo3dTHXYK6DapiGxxUdhBAA6h96N4Qz",
  "key14": "BEV4ctE124siLVrhoT9aDrXZUkrfn4yYuFFW9GE5tSzDj6TZKbi2HDyutp8D4mGC9jFz8V4ycU8dgXtwTHhstgo",
  "key15": "4HB49cvgKgZQKruF5LwQ3F4dgpTCeMPaXWQEPoQPNahTJ7f74tFBqxYjLPj5wUHML8NPTQ76cXp5Ftj1LL6SvrWi",
  "key16": "5kuMQX8DV7nbCKzziJouwkoaN6JcL2JNVCzjn2BL13MeYT8Fmmvaammt28Jaz1LdmPBdc193yyYJauaY7qieNntS",
  "key17": "2wZ1DocLhnU3kfAgKYbSUCn2TFsMSZ1fyR3mScw2SxmPGcU256vQ8Yy6CZYzx8tvaVPqMvpdry3Zjk8uDE8VkDnb",
  "key18": "2kEShwBajHRFoE58stizK75T1JbeR83JDxG3urhUFwuSu1w4Z4uZQ6hFgm51efFW7yqb6jdUkGsEzbemQtrEHMwF",
  "key19": "2duTSAS2RXRKZTNFMLk4XcKHVrErbTu6LDzSnF8y4yT3MUHRcLfeRFKmwXk5igiNq7DuDnHDFArBmwsR2qMkUJpe",
  "key20": "42iWRLRwqHKopGbhZYGYUS5ZzBc6gHDJA8YuGjU8uQFuuyTfgtRWbmPjyjBomYVG5fKT9mYDytQvGNAx7FdTo8vC",
  "key21": "46jKTJRxJKGHcjg4NnkshUq3wu99RmM3gWaQXPKUaAMbga4drGJzooPdkisVX81gEDvFF8ZVTCujerryveKdqdgH",
  "key22": "3oyaaWReqkN6xGCJFK8wEcCMZe4Z2Sv3wAYo6rrjpFrZESMvZuqaX2EupYiJbxo9Q8Vzka3jZPutp3TkM6A6RnGn",
  "key23": "5JGQgsqNdcMfLwqBStuWzp1CdjdKbBf6NyMv3kfb32gKkJZgYA1V3NFpC93ELpeH3AVfjVkFWBbUDZHAEgxbc8m1",
  "key24": "3LdKe6LL4c7JTPHKWpPNxAfixjNL5H8WPWaSyJxCXXvx6DyNfHwJC86B5ehUpMnwyq4yGCAuZiKfyjWG2byE4dfn",
  "key25": "4GoeLHuhn3ogQDptyxpPSGmZoyF2vDuB1JLqDYa2eMgg7MESYTRVB1bcUALCDB9AEHEiE3FjR5xBVeb6XvHQu8Ed",
  "key26": "3zRWDMVyRkYuz2iYqkS62UJdMez3EG283Mxxsg9P7NzpimNRiHJdF3Uk7C6aqJiE4tMKHX2ZwUYShiuakR3f1MsC",
  "key27": "2CpLRGqHdH3YBc7crdhBEqke5S6LagqKNsAEQsc7qThh4cmy752xxBxuRtFuzRWis1dPx9KHg7GFD5Bnm4AcUYb4",
  "key28": "3cZXQWv2kwbqj7pZ8kJrPRnqPHhzHd8zm6xmV9cJLQqUzBfFMEhwzAWzXPJCyaocjoPW8wHGWxKGJ17PenkryYas",
  "key29": "TKWJkusHUtUC9YpHDZSzRL3t4ndSD1SA35L74dHyUr53uNHFN6aHogDTcXRq3i8xJ4ksnAUVKXQxs4vXGQjtcof",
  "key30": "2JNnjMAh4qNz7XiVPDq4umMCqnVFPFLEAbKqb9ustk1imh8fSpYvzahw5bGN6CrBEgQfWfkn9awqqw9ZFYi3d8Dj",
  "key31": "49ZWZD9wkWwvj2gyRbB5CEqM2D2AD5kdE4Tpd5YS7rbAR4vzDuUh9ELDTaVuDRoAMgrAYT133EXoF9kZQbBgGVTn",
  "key32": "3fPKL2jLzopUeZVDMgnj4ybRm4X9USQCwJmGP5Q3tdrGeJWMHQRvUVLHhMj9Q423SGjLQu9ftojGhxEmyPVwMYGC",
  "key33": "QZL5hnSNMV3Hn76oRvES4AESan11jynq9fqDjJfVErF8s74SXme7goyGfnDViwdJp4XS64DnpnJQngV14Xt6K5G",
  "key34": "5Y8JbaPb6hFaYEGimnftAHUQm76SWqh8Ks2aW8YwkWNcti3yEU7UUuidtqbWinVVnCaskBkSA6gykfL19h5vnW14",
  "key35": "2bGEwMzEvKrBNxnS83mXDjnYLsBwMr9YEGCqcVi4EABBaH69hNMrk1q3R3T3UDk5p1jYfiXd5s71vY7syvYfe3Um",
  "key36": "3GMmLD3tJqZJdAgZnyPELAXJvAfWyoHyeTchh7pSheJrHaeEjBXffF2TzB4YiqTLLMM4iARj9soXpSHGeeQYDw5F",
  "key37": "2HCp1pKNNBJqJV3US972pys1T9X5iR9mks9BJRqXjZsaAHQNTYV6L5gvYPRiVJqG5DAUSXw26sJfFso4zGHFxVLz",
  "key38": "3ggqqjv6CY1iJkA4dT6KQ594qcQZpx4hvrZf8r4bD5THgF4jPPWBBm9KjggZPCZZDAEcgtW6M7bnn57bzAQ8VCXv",
  "key39": "Gs8r3EtbXFU5WtA9GpFWg3GaLUBe9P1kjV4ZpVDYHYWcQwVfg75c6dXsQtQhXrVTQAuM4afAzRbz9DQNgefmazh",
  "key40": "4qiUabdWXRbmdUSbmM8J6EbhX659apJ7cLpj4HNPAKTDGBgFapWBDcjUYGoq71ryp4Q8nJJToEaBoZjqsMPQxK8C",
  "key41": "5m1MQYBTWeWc14eybwwh2xS125gnm3Zkiyzcn9SSLGubp6k28pcZQDuf6YaKw6LWYVFXE5sfhmyFrsPP6n7m2God",
  "key42": "4GcKvTUoSmcNjKbLH8wDY6bHwVyKPXdYz9b9KajwgjssV3xnQGg4hSe8K7KwU2z6okoCGga7cGSui7FERp6TFf5W",
  "key43": "5Rb7MeqGhizLBMCeg5Me5AfxM6fvgQeJNuJMAmUcNMhr2yuQrjnQNCnoFTtJUsDYQQHJJUtZxeKrmS3fMXXrEvHY",
  "key44": "26D8roPkqhZS5KeT4U8Ev2UbRb9S4UPrkbK4Do4Wktm8Gv7vkgMWiPQJkMPNGbm823AevP1DXzP47dKRpooVLWmT",
  "key45": "2cx9Gp86Y88eSqYsEfL21rWbxLjqhniLJeerNiJ3cohjCdSB4nVtgkYF6uoDrfYpJ94y58PxGPLzwCg6dHLN4LfW",
  "key46": "3vs2QZ7gNdgggMi1NQwsfJ6NpUprCiM7kgRNH1aJj4NMsjHet7ntdNs54UAstxsXB6sNAJLWUPXNS5L5tNutHnfN",
  "key47": "58oHf5F2EN9RHmoCRAvgPDYKs77XcMAWHbvqDB7qsC9KpyHgQZhs3AhwHnTNx1jMWt7UU2E8bMjV1WzByG54fUB2"
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
