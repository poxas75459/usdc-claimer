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
    "2eHJBXHojXfJsXuLG7u5q5XfgczFuVdtbq4kWDNU1UAFfSq8LfGPqoWqw5BdZbzyaqV9aPnCWxwA1rwddAuWj1Qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRdEqqm7ogv3v3QzAnDDaz8tSfyeATBPV5Ni7PxR9JwTfVbZbbv6QEU1UqPoBtsD43XxtzvUbmjcXYTDf2cuwa3",
  "key1": "35kwNktPrKEwVM468qyYHV6TLhH6s54g8R7wjDinW6An8K5nu57suXX8krcWMqzp3xVvTCGJt3siw3GiMfNmwwLn",
  "key2": "47d1mUA6DESDhdpiy6mR2NA4rQqbiBmubZZYQJCAVyQ8cYJpAHkqvP7szsWYUHim9fNBb4M3N7iJNaTz65SV6BZJ",
  "key3": "4rakd5U2ySkX9HeZmsv4vjDGytSzDxXUaUE5xXY81Ufh9nnADyEYgppP8BnWdkEBC7gMGsYvH6LwpEG9M9RnPPYi",
  "key4": "4pXPpDGy7kD13XFSHrFPu2Jpvcbp1g1BbiPy5D6Q9bmhuL6KNAVXwLwuisDnwUpY62ofUUqCfKFt2su9xktGVTeu",
  "key5": "5wt2j111gdmsdHDMbQuBxuLCEB7Z9yo9VAiF7Mxg4swoi5q3dwuVQuUaHPDTNMCuJZc3CTNrswD6n2KgBjF4vYAG",
  "key6": "4by4ehrK9aS1tjeZ2u2ZYT9oGvKjjtzarRmHdnLrj8JWhnXiQnonrq4fDxbQJKqwrRYGHzwBuj3kvnia2R8AJapJ",
  "key7": "kShsQNDXn4h5oEjTzPDzch67YVsCD2GLgcaBgNe1SvnF1A3A37BQHohKKgYZnzRNmxZ4wtaHaCrLBrtZyzVAb9p",
  "key8": "3VZxHXp5dbRgBBMqT6ok59h4qqjFQPJdqTAB7uVAXkFs6p4wErkkQN9gsJaLuFREzWJxYaL9cEjikKEbLTVKgiQH",
  "key9": "5cbSDXmUxkchRPdvarNfgvWnUZXg8HUpN7Zau4q5DNHeXwgufj1qa1eWCP1jUQH6WSy5yqsUB2uij5szxc6c7BSC",
  "key10": "3HCiw12xzTtf3iT2vUPJyNqFnmyvf7CSDAEyCc87JpsXJpWPSZUYacqAe1zdXsJavRe7CRnZ156svbmU1KRLYmvC",
  "key11": "3eVJBx9dpbiHrNEJeSZtgNuFKDXoVdMAMSJCAkSkwqCJxgQ3w4ycQT1ZDCmoJeKRfRTRdKa5x94DXphY1qq8VhRV",
  "key12": "5ZoZs6ex54QikMQLmScLKm54ZKzawqpy9mPzvARSLXhcYe3cW5spt8wjQbStUspKrPjrVSuSojCvhhziXgmkYvqt",
  "key13": "4aGZ31DBfoVtvhh1qvprVpTbFqQvNREzEsXf7fyXH3gRqisarKnZXSxqvmgZuokn4vcaUNPFdQG1bD3affTGLxH6",
  "key14": "3NNRLLJuAsVrbprBkiWEC3kxcw9pZuaPBQW9W1hWjjbiyFZb44AoUrojeQPyHagmzSzsdUSrnbPq9GfXQQDkHGUP",
  "key15": "3qgZgifYgVHsXMHJvZeQiRVoSZaJTjZoRgzDjPka3bXiLu4EW14FLRZKNmkBMEcByJdF1MyB1tzLF1zWHgaPUCHm",
  "key16": "onDsDBg2Fusophx12EyCrBr8Zk9P8Gxr3EtZKxgc4AtLQB8rqgoDGA5dCGGmQykcja2MnRk9M8vM37HekbbcuvC",
  "key17": "5dN2D8sws66XEENSetjz3a1A3cuntwTbUoqHg1TdrdRSqfmjF1XfjtDmsdAcvtVXFpw6SipyyHtUTd5rtf4JAHAb",
  "key18": "gi4NftuyFhDoEDAyvbigs4gYJ89kC2NyryhcRwKrw2RMCc1zA6Cprzov7gGmQEmBGzQoBgbyS7DcXkzNsCfKZBA",
  "key19": "5qvohww5S351w2bAmnw5sjUdU2nN2NpLTpXHY2TExi34tXJG2Hd9PyUALhKeZnTEB3iFkhUnGhewT4XfZok4rKq3",
  "key20": "5YL2FNZxeZGVzegp835A1MF9TC71rtmQbmphDSQxvCoksb4EgF9iQXwgpY4maMiWE78EtHs8xMuwkUr7TyX6T4rM",
  "key21": "ZAzxTQqq5tFD4yhc5PAVDJd9HpxaHdKPRNdKQXJkytYQwWfei5WvCHW9kfuwid1Mjyk6NrcK3HFi5qB88sAzSQ6",
  "key22": "2iuaysatt4TyqUbTkifyvF8Cxkg5nqEiLbC7UYw3Yhr2cUdiE532mrKFaSd6J3N4z2VqfZUSY2fgHPWpLgxZEwQB",
  "key23": "2bo5dMFma1nTVuxwdbDmfmPP4tuDGCYq4XYgrdCWiL5khFfttqif9qm5ncXPV9owY6wpR9dkyW42fgssjh5R99K1",
  "key24": "32aPUxTAKzFMMZgLiox8YJkimVnWhLCS6bGiDeP9nLrc36edJ711dcEdPUyYZVD5CofXiD1VLCDzKZHeTDJex7iS",
  "key25": "n5fhksXyVzLf6bqRnenyD9vBYkpT9fbf79zwTrBmkPZAJjzE6kZaRuueHMCWGaip25fdY3fQxeRmWe7FKrULhTw",
  "key26": "2bj4ZewRUbA5gNFuV2jCcLDmq27kZrVfDMXZhthgVfHbyEK1eQBJdBkxHg28aVct9JbPYex7yy8pCjrwdp2owb8K",
  "key27": "2BqA3ccRMJWryU52vb1M8m77HrdgawEKREgfLSeLy9X8x3aYkVusMrZ53emxa6KkagD6DyBmuhqJrC7mZNEVkDR6",
  "key28": "386EPbayZo8VtBq2x9ZatCCjFjSN5NJrve9WGfp8FKMQxmcjxBPfKrUQDhpXMtfsXLRZW66yZMu3KMCLhgd1nXzv",
  "key29": "2Z62fFL47cb2Kn5y78EQdf7JJKVPivPHV5csLhVokaGLuihsjxXHip6sF2fJc2NEvQkT4YyRqdmi86zm8gv6MMKT",
  "key30": "4xT2YPVAVPkK741uFGjipFYJqp7yYeZbT42Cx9pCAUQJr93Woa1fPCHrHUTKYHPvKY7wXvNaYFfAduHTKXWzX9wY",
  "key31": "4x4pZrKnv6n7bofeGda32sJSREKYe5W7giDZxobV7umCiU54NfXbQPKc8WaUH998csGiDEg8FwrivmqB3kfXSfCX",
  "key32": "3vCZgpygo74sWj3QwjVT6WmgXgwv2pAJP9jY8GEyg2BRoe5jAkppBRhGvNu388Cqagq4CXi1gx1BkXdiCoN36aVg",
  "key33": "4DNMYxLyFQ2NPduwGo1h6NzU3TKp4SgqsiXcdcgCbY98woZzFrsVdQjmM9pR92ApQXn8f4JymXu5AqKUioVXDShE",
  "key34": "3akt3sf2Hbdnkqy9T6fSnbcKSH95Z6dQ5eTrX3NEaG2M6AsDazxW9ePooeLE6H6Z8gDYRJ9U1GZ9ZsT1ctUdTcUz",
  "key35": "5LjRbB7Ygn8jmjxWXgLnHUfU4Cc53d7qWM65kFgNwt2WRVwTWP2Hs4rmH34j5seTFrgjG91QrJNgkMAXovSNfnnZ",
  "key36": "5RB1jV9vP9fUjaWq8ZwToqPVbY5yTE5abdR6WQ8sbdyLRbcAaYw1TqCgvvfztnW6caqgSgg74auot77C4qmDen7f",
  "key37": "3DNn897kWCxJtL8J9TN2m7JAapJzMi59oSkK5i4ihZ4aQTveaEGpEyU2yT4hdbdbwskfkWRv7JjCQxUx3W8DHXQP",
  "key38": "4obkYKqkchCEAxxvFgqp65xdPdu9PFzecua2t5xwWWmf8nb1bRbBr6wPRySLrt7Mk3jA7ERhmsyXmKqhamCZRj9E",
  "key39": "4UVhFT2g6cE3o9G3k9vpbVuDnmQmmDuuso6ddQHbDMmtZx5jWaQxyZEQn3nYBw4KcfaWGXg4SuxbnapEGBdERL5R",
  "key40": "4puP9ChCfG9btcrfS5o6k3wGJgwZP6F1VUcwMrr3pDyVbTxsQsck9dZCrn1tk5ePa5xnbCygTQqaEhLL5idpL5Lu",
  "key41": "3EvSwEPFHnzHnucHFKTxWLivLK9M1D5ztgoSu1jDNA6weQ8kfvhU2Uurj7ftjYxCyu6hqsqNpCYwii2AhQnFptn6"
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
