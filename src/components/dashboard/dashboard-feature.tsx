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
    "4ivaZqyfDnF1adcPcTkoSrdHwiebwXNvJ8D9Q2PcrE11bbBfSqdW17GmfdEJLQLvzaxWADbKvm2MuUNw2vcfYKdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rPupeSfUcAS8BmcM3y32Hw3MHy5EqsiBJMNSnntkBkr79Tgxig4hkWYXCbXsXeXizsVmH3riTsJNGumnf2MbGJM",
  "key1": "4m9HAMzrVdULeXLdqnTGjqNgatmw5JTy1rRaNuL3Mz8z7mF8b4d31KwQTZXxcB3uTWunQGgzmFteTgA9NRnMG54j",
  "key2": "52Qnjdz3mrahFJrijLhagV9Np942CfmE3jE4ztpZ4RvTz3Xwn8jJCYe4gSm5G2F6m8ev81c2tsGYLxMFQ773XcF6",
  "key3": "2opnsmAKRQ5kqQPf1AhE6B29pM9NRTtMrMH3WWVs1DHWo5o6H23ss3jYrcwNXEiTzFTzXTAPrVAn5RGQ8R2XLQae",
  "key4": "5uCUpMmjhw2N8gVei8hyyBhKLLz5ich9j4VMtC5StuKECuAAGpgncNxveKFuzUBSo7NAkfADCcFJ8hpRDNJhtQi6",
  "key5": "2BBLj7w1eVMUKA8iEg9iSiX8iEbeYreryZy1jEY3UQfFiT8V2tXd9drq29LycLXnGU9qugYjhNvtXP5YyL8mUsH7",
  "key6": "3PvAo3HTn7HmRZiaJQDui8c6MGug3VQibKh4YL3NGxnknYqhQYSB1v3XxCB13f1z7DruwCeV75oMJZnGbgKb2Xfa",
  "key7": "3SsDx1KdTYBBwVENDvzpcPhJ546mjkhD4xikaH6wLcPzosDBptKJ8qH8EEeEbK3EJZAhqen14KQ2s91u3AVSeJ65",
  "key8": "3M9NMRMHdjJJcLBjAUdgWTgofByjwuiVZcNaDyeScMtJ58aVL1WMLo1XY4rK2vH9exXn2t2KNXbyc9KkGQfAhv9L",
  "key9": "KeSELhkVCpjHxvzR244zLgQ4fUjv1jtJkyzMEDU4UCbrAN8kmNudoZZeCNzPTmH4eUDD94RCXq8zaBWNTvW3UMW",
  "key10": "kXAw3yHrRge5ArPQBgq7RRoK4BbtdPHUy4P4jxHGN8BvXV9jHYvQ6buWiRoCRSgW4ZvxXGqkMYtRbJSL73FmHie",
  "key11": "3QwVugXF1ZQPKdb7i6ciKQRA4DVhu9aBFgz9KWfDWfvhaYaSrDC9yo1fmGhm6PZhZf56NhUM7kUQzSitPKPBk8Y7",
  "key12": "2HjAbWGGpJ9EhupPDMcCfBpid8798ibEmChqUHcmhn9KPYLhtzdYBmYR3UBxzrJNcVqNfeKpgJkGkpkbQ4CXDKja",
  "key13": "2kLQJwUPwZBeqLd8vUHWR6i5D2oMFkDbcwipqgFUFcbEE452eWEGmtjLBuy8HWnQf5CYpnA4AXVBkbHq1R6nZBnF",
  "key14": "3CFPeD2XV1fmWHu3BtWe3CmvmriidcqutzrT5ANxKx45JB9oUjEJNsnpYajigAu8XjwiwWb8Yvgii5s6GJRu6jah",
  "key15": "2BiPgBRvGGH9EA7AfkD6n6D4SVQkJ2iJMsFnhqn7qfPaRPTCHasSpdMsMjQ5CyKVcYPDJqZWWbzHECiDPXneQnVx",
  "key16": "wx76z7AAVvPuxFGPJXQd3TbagsnGoedTG2m1H6fzXeEW6UXz7QeoxvmSwUkihRbdH8s6rZb5xw3Az4oqhzKjDvr",
  "key17": "3a8htFW8hLnrMd6oVPjyP8m7nhqft8HFpWdW7FSiSNP88yHf5aJHUiP2vQQP1G8z1HkV4gC2km21oA9wu75iK6us",
  "key18": "2EWEZbGZkYNExRESv3p2jpmYgiPHTJU12DzWkwYVSGSnyHEn7N6N4BrLnzCinNh4ALT7LvEiXyfhbEFa1EJNZhPM",
  "key19": "rAgUj9D6SAURCXLokMocUZ1d3P1Xdkdddkd5V1wNntAh2RxNBtzEMNZ3VX4Fnuy1UHaSy4tbqmKokVVrLZgcQMK",
  "key20": "63Re4dhKYAQecUpxj5srMeQhwqMW9egAtTMM9frP52kaWwA8z2YKXv77rjkSH8Zar5JPhwAgsa4qqSEM4kmb4mLi",
  "key21": "266VJ2UkJYsEPKrEvmPK7riUVYArqwz4rWN6fYBiXFMoMnwX9BYNDtZ7KjnAJoHFCMQRkrZJNQwX2AWvERhyjKC4",
  "key22": "3KrTYSnKzZf5vd6NgiEBRrr2zoTVCtmnU7XW4KV2zsJrjuJGhSQ7en2KeY2cGWSf5TfJXq6MjDwXWuwSqJx6sZXD",
  "key23": "KP92qy8yTX94Fwd1autczRBpRHfrqpnVxsL6sEsaMxFAQDSRL1F7mhq2CXZmrxm2DpvPkqmSwRGuqeDSpWz46oJ",
  "key24": "5vyA6ekyHDJd34Kn16ADyU3AoKKv8C6JGLtE3e3gUhYsHERhriTumuTUa18d3sPezuuRqzzKSt2om4u1ujGrUCJR",
  "key25": "56KvT4KbT7maht2ugGdSvabJ6y71vpLtEs5fS4Auhyjp3kEpoCNaxb3r4CUanaVmxRAQhiVVmtKGCC6mUmukkkLg",
  "key26": "5tnZSoG3u3TSuZ7dJ69pUbUcAiq5iVgBU9cjoUVMbnhYS7nPV7DkbN5KFoUGDoxr7Mc3qZkQMGTMNws3igLs4U1C",
  "key27": "odZa4ab4DuXw9VFzMxuecBKXBTPnc1HD18YNpbh3vDsg3zuumUQTuDFS7T276LkdEQtus2JWMDDZAuYnqzkKDTT",
  "key28": "4FsQBDbwpWBizoKnJE8Qk84Rs1bLgx6WGuRCiXJeHdWABn6nrD8CyveDGxNRLr5o8KDTCqrEk1eBHDtppUZiKCvr"
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
