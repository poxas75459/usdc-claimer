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
    "4hiZBsGcVi1wuk3wPZHsJfcfgLZnD8apSuewzpzzMp7i26KdaGPnm63L3vawdYHGg8QSSYsfZJfENz9vwn6paPxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jiL7Pu6wwmDYxvXnDBJi8YTe4MYoW4NnsxkHw5VEXw5vkeyNCz1fJme8MbR17oiRpVLSdeCxzjokp6gWuqLQp8H",
  "key1": "4jwfgMbeC7tMnHj7TvrdfwFsXYx2TV8QQ7MJgSJxUGvBPhjvsmkMtFeLiv35qXHGn81naUh98v5xsz2w1BgiNBXe",
  "key2": "2U8NgvpeFVLy4WoisFUpyUk8Z6wJrhCzSYGCvB9f2ZDa9FiFj6cauQbDP8ZTAoYb3GWtNfz4orddzewPyJn9aXVn",
  "key3": "266vHzBSfM3JtFr3VBFGuHNArT7LQmyqAzhL36hwRcdz6bPrEUQALz1zXESf7nvPRm3fqxHNikWASoGS4c1fV3dM",
  "key4": "2ssS8r3e1EhhEDCiUbA2jrBzqwga3RdgJ7xz2oMv6rRyXwaophKeFrtfoUmkerujFRi1gwWcwYq3GN3fhip1T3ob",
  "key5": "Eib9HYbVcZsQHSMxTQFNpxwsHsFRKzVSxewBL6rVQypneBzEeLpcusAPt9mf2vHkTHhK3VrbTSVBbC31GtzygEo",
  "key6": "2UMYuwVm6BbnPBbkaNxvvUj5KaHtfAvCApwEQC31e82kofQbs3TopVW5CtJsdh2ect4nYHnN6pShV87ZakwqMqKc",
  "key7": "2BpuCAsb1pQR8uwVmczZcyquhEBsFNit6rSk2PAoJGrqkWopwFqSdMoTDZ9h1KZ5s77FetnAixydfys7y5azn2M1",
  "key8": "2DVQC7vfQpatxb7oyK85xGE5FJgj1KXxHvbRiwBbc6iVUQY5s2oR8QAEWVzBD1yTP4MVJ6hv4H2WKZTm2EMErPtR",
  "key9": "2Wk38u7Wnvu3WnqmdsWvfbihZnVKkTTMU1yneqkBdHsLJ5nTq2DGZmRGDo78jeSB4wqwv4QaMW1y38h6i7iFBNhB",
  "key10": "4sqGKpBKCn5MdPte2k6Qf66knG7rkNMo344HwVPvV9Mtq5EhuSucYZw8eqG61pQa4wXDWjj83DQ27NPDCm4D1tMD",
  "key11": "2LavnFSr4nf5DKgGr29yGkrHk5t9Kk2JwKwr1Hx336fjB7QYpEM2u6X9mnD2hhpi3LW8nTQe3CVrxLozWudkPHeo",
  "key12": "3SEWpRJAfn8KceVMtiDctwnUfRQsbPn8iL9tybsUwNwTDMHjQ6NEbKe8LgnwBACbvMwAFNXTg1ZuAFWdgCuzub9F",
  "key13": "21DCJGpgqRfKcrwcnnmbgfZR7N9wMnMgqTy72tYMz98GC32s743N1tSoCadjiKg785TmPNxqSQiNb7Nzb46ayKwV",
  "key14": "3YqKHaKHL1EL69cTKmyg1MhWeaRrkbM1cuAeCCA5PQ2DJ5UBQBSC6p7rVCMTzbtTphobmYqKDFviHMKxGNV7m6xL",
  "key15": "8SkJUL1QZMtdxUhenrXiQgkSb1SCgnc9mNpm4wHL9LLBeFNRCht43tcdLe8Cge1vnGVQcshfwKJ5wUZoJbTosb3",
  "key16": "6avba2ec2KcNdRr4H6ehPf3DqyxJoxEuC9b3r7NHboGtVqFREBCN7LsjVCUHWu9q1iYUia4suEEgyxUSxDdDm3h",
  "key17": "24VbHy5HWAwsiGgiYCUpxCr4BeWRHe3Lc5oqKqa4yUFYhK6RbJNxQQs5jGyzzZxEyiy5eJHGrZnp37tc6X3FpqEb",
  "key18": "4rk8323cYyr8P7hSi32ytmwjBKfS58a4pxu1egC4GfcSLggSRjsw4RVLC88pLVPQa4vgeNmcZhf7H8AR73iM8CuU",
  "key19": "3J4NF5pKvL5qc6hYo7gkFAVtMQdSorA69L2pTv2JpFNmHaLBrXwkrPmKwCA7APFtxpnY6YoEpb3H7YwmaQjqGurM",
  "key20": "4Cs8WEuxcZLEKT98yTJzPojDA5To1eJBmwtv4QZe2WDJA5RVDbWwA2wWDCMhJm71QJ5FK8hFeqTJ8Bo4XEu27rCC",
  "key21": "4YZBtavPnZcxEDRE5uc3yT5XXK7TwaaDCJpAm7qtdqTuyoDXAaCtJWVDxJjSrrkgVLdw2pvSbz99LXM3bdMafN73",
  "key22": "WEmStrBAWHCyEMpyAryZ85CJJ9YVk2VHQYafvHuQ8YgJAptBDNxUifxKrJMw6tt7jKk6Y6HAowkDCVmPqauBcVX",
  "key23": "3JCqsm6qXDB2asNv4zr9JfzC7vWVc3KTvtijjtBSVoHmvoieA5esDQibuWStDPxSeu5mCdKLXty5YvKUHG2P2zhB",
  "key24": "2xoaiY7e7ZmwAFJcSuxwTaJiFisQNGWk2msFp4QpYi1L8pRvvFNfYR53Lo2u4uhRg9kXsg3WKXyZ3LSU7pE4uVkb",
  "key25": "2pSr2rCnUdJo8XHfJjLNLjtMs5qVqBhiLDkNVJeoPCfMq56EwJACR4cUzujXdUUyiZzuytPDaFNmX4y1nvt1WLgQ"
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
