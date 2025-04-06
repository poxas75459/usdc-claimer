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
    "4KEVG7Hf8VWz7meaXYZm6FrNdpfSy2ppUb3DDHTMfDASxKEtewJWNnL2mVWvKxudYPfGsAXSHVtT6SYgyxxeMDaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9oNSDCKyQz4AcVrHkMbGb6pTL3Rc4QwekqLYVuVTk1SUNoMN1kyZM4c89HAHvaAwcyxSpWj7ad3RCszARV1a4p",
  "key1": "4Sc5wWDPaSNedX5ECh9PzHwBzDhH4NcBoW8XU7QnrFxKwKHkWXvcMPfnmURj6eoswEaKCwxVgaHFHiHxQ8bHwUps",
  "key2": "3rGnpUYaSD37ar3ATVejmxRCEaQg6yYrYwA6PKrHM6M5bvzkC6nRTsmwGFAHJALgqBgpkX8ju3V7sjGHvxb8n7XV",
  "key3": "4Wqv6qVfVxGo7byVt2zY69roX6y1NHfB8nAT11TopKJLkpjswNEmGYg6SR6LgdXoDzMFvUpq1DbuaNPKaJb7F4kn",
  "key4": "2dpHBp34woeuorGCYwVrE6zbcdhqGrLSwNricFELYjMqcHvkjWZtZtGuaKLLLiNA4r3QbskCecsiqUByt7w7Tr9d",
  "key5": "3WGAHmspEMs18YsYY5nqWXEJgKSQM1eWPX5fSsgBPs4cENUbAQVuEsTpEAkKw5HKKg3YdPDtbyg5rQRRHRDjzGAa",
  "key6": "52JSN5KpTn4Eu8HKHZrsNZvdeQKZQjjD7Qm9s3VgYZdXW38uGkBZ8Vnkc3fM1rPwouC3j66UmnCX62NFfV16aivK",
  "key7": "56afWFmhak1Hqof2qAY5AKbuBxXwfb5j9bgRGEoQ7vhynBhqnX7QKkua6ec7uqn1wJwWuMitxsCTUmtQeFAxgQAX",
  "key8": "34kkicuR2upktfSToXBpNwys7KPSgseX9FGG1PULnc6mZFY2HKLTUKrDN4vQgLmES7UipXZaNz1NFi96x9X7TULC",
  "key9": "2YFCnbYS9qjdv8zVuMv2bheDyMfxuDKxZcxhtrkewbVq6Dyp5vs1weF6pVEMHAfpdYxXgc7W69efmMqFxDkuDt1i",
  "key10": "465FiRNyQgDouoMYn5fVwKJHjP6HLhFWHLSxrrdLJy35k37dnREswmSdkosLQHX4RVxVQMox7wwgJHSpkMGYkNXJ",
  "key11": "1hu82osznVpjH25QhxWDP5stkzSLZ3orZP1cMexoVnYzio2yKxQrC1CFPPNMbuibHrYTwgv1seWiGnDBa3FVES6",
  "key12": "uAmP7mB3WBYhcKm4c8YtYswctYMLpfh2afu6Yuews7gBek5SQqxHvAXoxUupowHXa131Fmfy7icKmgTVcokoBWm",
  "key13": "4HFb96dQLi6Rgx7w7nGsDZRC9DEDhvPy3ZWtnS2P6nN2mbG8fkxydLRRVi4PfAPbuYBYsRkfWtL76XHFEoQMgiiC",
  "key14": "4QEMkxuw7jXUHyCQ5657mirJxKLASSkYe68aezF43epqsNCUDdS6ogKU5ZuVwZ2a53ssrtq3BPg2du2DVNUJ7Vnf",
  "key15": "49BQFCRZBykKnvohU6XM9UVo6UTq91hXF8z6B3aEY8e3tV1QmkWx5LJfoitScwQENYDBDhvkFketEQzMw2bJrLYH",
  "key16": "55ZyqGAgPXLZ9J5NLnBruRkbjfANZ38LnPvqaTuFmjrzmDEVKCMx8qvJH22UrZBLd574tDxs7RYKfnVZ3jPczq9M",
  "key17": "37eJQ5Jh6NkHHyHyH2vebRvPjVXZeBjM36oR6yWKraXXa5pTWMGsW3fN4qw7ToAZTCABszPikQAihuP6kudLJmt9",
  "key18": "5DyTwgfPzwXKTHAZB3TPVgqa9PY3zkuM2HpkyCHcUv19JPEXwxkz3GL4btSs1v8EFt7tyGidZiXiFTzd1aUqFUY3",
  "key19": "5GTBeXFk4eXyyRd2gD3UUPsrKYoH9JCuxd7RYS2WWTeQ6AyWpLSaZiW7Zv4K1ajE8HLreNc7Ee56CWhLxRmVhjFN",
  "key20": "5ABzTNEAKhersoDA6QBZxFcnR83FViu77zVwxgqiGCURtMNKbGNUzna3DXwDv2nYYHRfVELJEABrCYrxi7uJGDUd",
  "key21": "5vwMTnZHbYQoZdpit15nZk259vJfe4eTJCJTkDjoJHWaRCDYqqrGFLwu7DYY19V53ZexZfZaNUeErQqf8XF315na",
  "key22": "4AE5r6Tk4RthZVCvJ4EPQRzCH6MXiKRogbMvMi2txgaVyK8icPPU1to2aqTQyeVmNYxRchqpggtohd6xBxsnzmSp",
  "key23": "2cnPeNoyVjvmnTkVUzzTduoMeDDGxKK4y137XFS6FqKHYvUKjL9RcU4bvD1PXcVGyTiJuVbGcdcP1yewSonWb736",
  "key24": "4To4RMk3SiJvyULn6n574Nv93W3UV8PsfxDZSny13dM4LyScTp8sQE2cVFerKM5UaZvZ2tJGBwgSPeYjcFBCGS8F",
  "key25": "5pBXNBrNEaF4if2oVxuuPvvNWGbiSn6jfCFhmputkyVAhGJSZ2e71pwkHUUVXuSLwPuMAh18LbWtpdLjCkgvCM29",
  "key26": "4Lp6hs31rhaeJkfWsrh4tnWSy6XM3LnGBeY7vim2JLshnpGN8GA3LFx4cbLnc4cjPmBWF4fzB5VrWTLs2QXbq4fN",
  "key27": "2qWvggwrMqoFbRxUvQC7eitnXCtP3BRu3xJ5MeBVsrDdnu5xKB15KBDxaD2ioz4D9eTdnYmbYVg4SVXbA9jH7iz4",
  "key28": "3vxW4XdezX7f4UakfSDW79RrXWpKdjrMhrhvKXxGW7vTFiJoNwbyszGHC8LvKqArKgiFsM17FfunYLQf85Qr5qir",
  "key29": "2RRByMmxL5yTVZKse6V26ophoJpNqdFjPQg2dmf8vALBeWmL9AHV96AXZEoeKXhppzy9Z6ueLS3CTgbNvKnptrS1",
  "key30": "2bxuBXGu14sbnMAarkaW3TeuKKWTnem4vw3CqjSuyDecVg3AE9YbapsA85XjvhMHJuuJQpxSfDW1GaaaavVYMqxa",
  "key31": "eUtVJczxWvgig8zGtar1MUgSx93RLULDRmjNKc8ixWqxng4qrqpZ49u9uywxzDM9Th3kRUyaR5PRPuRy6stbvLq",
  "key32": "5w5xiZxjhpt6ecFueEgLXchwGVEARJt6L4sMhbsCnNTsaLbv1nZRDG2vaBgi4ZSxdvq2xgzkZRoUNJ4mdQLfYiZc",
  "key33": "4K5ZntYW6vD7bfqpqCQFykFzdyvsnPXyDh9SvqY5Nk1sFmijza1URuqANTdCRjzRQJkyptvxVk3ATYNLvqoo6XvW",
  "key34": "237UPUjW8Avw6usoHVduFYgNTY9DxhWcGFF4gNUXYUXygeHACnP6GZsLj93F3hvndmcZaNYvs9xso6Lagk2Gtftv",
  "key35": "35uuM12aSj6FBhznjJK123gBn2poqFij7iWBpGMfkEuysdKdQNeKGg6Bdvcat4VS8zyrPKFhqqbkom9MoMSL3ESR",
  "key36": "4b7wUwx4bfYgvfPMaBNdr27LA9ZWwvvE6fkmXJCEEQ424zrb9zLtUBkAxhs4ih1yNo984gqawhBPyq9EGLxpPoGh",
  "key37": "32urPr11kV2HxNNz7wqD4d6WNDGEmcqRL3nEqbT6JRQjBTdqkMDzVkiVUckoZuWCgDkFiy3krCdjXAfgFL8k24XM",
  "key38": "r1TC7QHY6smzZMzTzbbTKVHxrM7M6FCg5eY8futsrEru9hTeGqrDUN4qe743YT55YijZacHjAGRKCGAQUzk9LTb",
  "key39": "3iqSmG4PHN4Hji1bUspaWNdsj7ADkWpJgXDiZxMLSvogPfH4ynmUaEtK6mojWcxDtdnPR1v37s4kTrBz8t37hRs3",
  "key40": "4L6HuWbnvNWbYGxrjPuKhyayCUyiMw3uiGGZy4y4uYiwaeugTBH63BV2GGUAgGj5aaAcJkLwzgBfqiCY7zwB5Jgf",
  "key41": "2Zj7cDv6VZQtSLFD7sNnSHQtiD41XtPQ5i7YEg2a6atJD6dZgL4ZkZtF82D2DSgunMSYp557SMsRJ7fpszFoxtKu"
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
