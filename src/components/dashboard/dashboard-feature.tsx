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
    "5xeBVjS5Jfu9r6JSZJdbg7RGUxDtJHzBC95BLUHKjEFyHELMrgXiHNPq7PmCTcRiFFfk3F2bEdaher2m8unoVNbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvkM4qYdRMfkRt3VPSV1zRn7qaZWQWifNqzS6CF4yavTNmEN6E4WRSCNrZKVv8k21Tuqdnc236jaQ43UcNuVE9j",
  "key1": "bggbwYaZVjUvG5uWLY78gwksWkHj9vkxy8qQde1rQVmDDDPdtRrKEwpUGSaTkKH5JWfL2Lbfe7haZ4a6x7DWURi",
  "key2": "vPoyfHxUyAgGmZt85j8y1x9He6e9b5WoLMc1xiyNUvT6fDtnBPKb6V24tyZZc4KKGR24CNQGKigLuhJzJj6SAMj",
  "key3": "3XiPCA9V14TNZKMiDeSd4qkhECbyDSmnYQJQafY4euAQXpTHcXvX3S3gLZX39VLU4ez7pkw6gZcMbNduswixEZ1s",
  "key4": "2sgZKp5bw1BrnRQQEd3svWq4mQp4F21mGvbZLHtyt5U9p15E6yqc8e53RkzQ7xqnz2gAWuzBTHf6aR71G93yZZ6E",
  "key5": "bYzoMwy21eFgCy6pKcwmZQQuPk1eW2JMtU667vNHws9E9GdzDsntkHq9G8XeS8VXaBLmUVEGqUYt6oLYQbQf4P5",
  "key6": "43CfpZn4Uot5kK3nHHBaY7h66N3pR3mBT9wbeMPFjJjG93iUdBUG6aovmy8HKzicVqT5s46eBkFT85ZFiQzRUcwx",
  "key7": "5hWaX8UDw6wh1NbAJWJSTgL816BsA3nypCmJJpWQ9Cq3yJbHkp2BDnVUDYrLoJiSJ3NZst1nUzN725ZjyKEDHGXk",
  "key8": "3E8YKtaNjBcP1qs6bqXxxdHD8TTeNXYp8gdRFBiQYjL62qxZ5X7d9eUnHnNdqB65BphY74ViU4WKYhFYQjGG5oeb",
  "key9": "xQWJMj6ntVBbp7agnpSbwXyosKu2qmirNfC7oCLPACZs7DJTaupCcJmUvnNq4fsyDMkcj7Ue9FNXRLUy33MizAq",
  "key10": "67RoMDBu7NMw2Ds3QoEBzEtxdGmpLwRoQC5tugwU5XJEEGQ7hJqe5HBj4957DSq61Lcru3fKfqhN2raFwA5poDZd",
  "key11": "5Zaymxd2KshD3fUhWM4rZZEj7iodgRSxkLmNwhBX7JvPhPGBqT7Uj71QD6NsC4EqT1iKJr1xNvo5h41rk1sRgSH7",
  "key12": "3eM49svXdpCTM85uekHWqjYL6ieh2LxqkPgEgnC3pCU3sU1DAU3Dn1MbGme1ZEYq5bdEY8PUNAKNesEdf8kFP8bZ",
  "key13": "251BkcvA4vz2NJ2m85e4dvMTRQ1wfzN56NV3BgbkUBzyQaJzYJV2W1i7BmUnfT86w5udcQhRRT4mzjkBG1C7ub3a",
  "key14": "TEmY1TQDdhiJ8KncRrLvsutNB8S7mbWK9XFdvWrsEvrG1ugtQqcFc4jByV6fpqAm183D3AigWtnzSmBGEoNXpx3",
  "key15": "4LKxFcJnG5ZrUw83HWMAw6ibKz72xkJrPgWFccCdVW6gvxzJFbo3tT3XjHL6bV73QpdsZxQD3jtqaP73Gamobob2",
  "key16": "wMQYi9KNfuho3sxathGRd9ieZK35MoCHWVhjzukQJkpFMoQUTjJawChDFdJVGT9dpSWfbnq8RVkbfGpZT8YfpgM",
  "key17": "2YRDwjd23zN5wDMJ3xEFUvxLGV7vFsWEuEeAfj4gTG6PZDEfKK7Xv3SGDZwU4eG8gzYaaSokdsHTt2N2Ef82SjaQ",
  "key18": "2ZCiZLqgjjFnbRjrLBwadkb3VU3yWafABHbaNfrCPyiFpbTanBNva2NC3XtwX8pKPaVvqJhtRcx23wnmceUjSJtj",
  "key19": "3pA98T42No23seapxSKYitcHPjt4XNPUivA2BhUqgRYkLwJseDbwWN4uhbqDmeepovWZNKnkjT6bHHVsVdcv8H3q",
  "key20": "yVGobDBTDGaYDm5K2XKhsE5UK7yy3RPNHfGpAFJBV2ksiynAjyZFB3NRppQVdKe2sachdhRapRq1Q2vs19Ey9vP",
  "key21": "3szLuCZ9wKUxZGDxgcVr1CBnLK99E51qEbxk6SMTDgDkKdKhdgqQeKsDKTqSDCB7RZu2s8tWey9WiZm2vnfKCGLm",
  "key22": "25pquAVMRi4Nwxq8KtNvNCsQkDqDWXoSJ8GoHJZVpqGPyZBTixv6Rjt1KnQEzZgoZ5PfN5MyHCaDViEMDUoYfQ64",
  "key23": "2ZEfakjjj1ZkowbWQde29Pk5ubzFuALb9qKG4wje3NXD2r1fyoK8wH7PjqmMAVmbuxw7pJg2seedVaTL7gjsg2fL",
  "key24": "585N8X4gKM6XWvysasQbXw5TtkfJyGkpeaKA9g6KrcQ68admkhavMa7QUNv1y96oZjX2FWSuiqMW2ZJiqzzkNHgc",
  "key25": "5uHixfoRo3jKWACzPcQq6WKowPoHdXyRPr1VS3DZqT2KWgu1wPzvHv49umbs3jTwVEYfVYvXKUXeSWUUdZEeAWCo",
  "key26": "3QL84x3WyogGMik8nzu2HF3vtvzAJJoi4Ab9uRZAWstUQFDu8LDfhR8haAjyb1UZwPqbMtxJP1neFXvjXBbcKLMa"
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
