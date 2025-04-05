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
    "3RzbvSVGqJwg2Z5iQMsZ1WEfYuGh7km26W3bryhyCjUjutxQ5FiMQhLkr7LHVmxN8ydAvrQ6HBhezr7zKL8Sicbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sfUs1G7Xx6Hrgrn29sGNnj8NF9FcyG11RKcrPv1iCAa3NMfd2uxht2BLtZgW2ZzCBJVmDPRKqfXQD6BgSwmvhTy",
  "key1": "2wmvYB5CXfPDC17r2JuLZbyuv38ovCAyFGGJiw6HFCFenX9FDrLghqLztVUmL6BbsW8FggooyGDyxQM2c38SDSGC",
  "key2": "5uuH9iB7mS3C1e9EVN2g3NieSe6z6BqigjmvuVnxe27smdh77XBeHZi35Z2r6oW6FYDAjPxoYHT3HNdN8pDZu2se",
  "key3": "5B1mQVHbrQQpri1yPbD6znPqh3CYR4vPWSomjkqAW9itAJJYZRLdGfiAonKuPR6yWw1Zcxwq5Hay3SrSBGCyJ5bW",
  "key4": "626LD8trfX7nkAqkCbXF42pLiLdgyoxDWfn4jpgPNuQj22AxaNC8LEpZfSgq8kt55ZAtHQHgb8GF3tqcdeiRig85",
  "key5": "2ZdmqwQArttHeiwGitWo89V9Hvb6qNfeXJHgSowDEVKKNyMnmnH4KhndouWrWQecU3DBYKhR8TKqm6fNfXw2oCV5",
  "key6": "2RNZ1XJsTVDfpQEd5VbEfKjVsvRtFoV8GL1TFLsY3uP584eDyVGMN38a7KnFdQVgTGtBsL6ZM5GJMV7HifXhwtYB",
  "key7": "529j7vtYWL54ZFHq5PazudBrgXTfNsPXvupg4xQMV7zpfCXyjt4Co6oj88ZEArYGkQ6wMmiJF8BBjQZPPAbupB5F",
  "key8": "3pEMnvDgRJQ2a4t9T4Nk7Q5Em1HMGn48UPref8uQ5ZngKyvs2yJv1XCFgVE7YztFJ6mkmpGksLfSgHcw3kaJe1TD",
  "key9": "29oJ8Pu9AoVyrRMCGQH3QuT4trDBcAS9kq22LzyAx8XsHJv7ba5acjwfqDVWkYxmfRYkWUVty5gE85bvGpA3Eqqs",
  "key10": "4LaQHwLTkCR9uGBfjzsg7DxYTwSxjbZdTbEHtWy4N8P2nWYsNvJvmwMAqN55rDhSqoxD5GZgGFffn7CWYYnK7XVy",
  "key11": "2KxGv6CyDSKqz1q4JPxAVAETT38bDnrUNy1HPzce7XYubHpPmadNAAb7ceuar3Fdp6K8wE7s4EW4Yk7J3g4UPoKJ",
  "key12": "5fscs5C2SJ1JKJvpiCMfv92svN8DUsBEG9tig4S6EkDpHjacqnXwELbQqZxpQcKSejFdX9SAppePio1AsNm5FJHj",
  "key13": "2dGf27jGXqcgKNB9HwH3uZUoZnRZrVMuyfPYAshR895MFm6otNoDpoxETicP6817uJ1SPhTPmxqJkKKyz6TomKy1",
  "key14": "4jL3WEepCXALgFWVLhKrLDJd7DDX6mGT61AncaHTgAiBwaAHa3qy2BetxXWXAGxWWVN66vava6gnCKtey8qD4Wx",
  "key15": "3Eb7tjdswKBcYJ6WdEwWj3cxTcdrKzV2RysviBPwEM1FMU2djCBPN2xTuJ23YzTJDpUnvqAcBd1mdmnyPRgooHv5",
  "key16": "uAWi5DfnLSqvuUHuYdMKZNUUCykW1dH3XwdzXvpP8tSGWwn4X3znu3GU8oQFJARuZ7LB7omgrXX5KwXtMGeCmdJ",
  "key17": "5r2dP9p7hBeov39Eiaj6uAF4i89GBEZLyG3ywq4x2ikZBcjnwnEeZbjvjJTgPMrDM8mSsp2LivjcCaW71ToNAppk",
  "key18": "TPMy36mUioo4FoHkkiGhoqqK2EBkbXq8ZE8NsZGAduomxhpNkNyBNyiFHwvMBkkTXbQ4CdHWMEzu4DKxPgzzSKY",
  "key19": "5nXEx6Q7LfT9XudNFDbpCjC1pGp1zS7TSkGdseRJPQUSSP7D6XZeR1df67F8937boa2hDkv3wj96NtfBFkBFDu7T",
  "key20": "wcn9hGTP7Mz7H2BvXjjjUR8FEfr8Fubkwb5XEyZ6YWtKbWiEgQz1wYHE1zbDuhYnHYS9UtsBpiFzLeG3KGLZPqR",
  "key21": "2u76gCyQDkSjRhyQ9VaLvYqYkEZGn3bunTk56uY9G7R5kMRszAa4cDDem18tp1S8mt8x4dVbU39fAZHY2vAAbVcV",
  "key22": "3VcaijWSCK3mkYnV4NakBqwnrdmzcqF9niVkjucSRcgU53XgbLxZYnfQ7oreQXdJ4fsxYpup9RqbHzKjUR4DhAkR",
  "key23": "Eh7sZaj2gybGHmGoKGXRRvqCoWRn2fNVdSQnncgaSR7yXCDUamD1D1CLjqZU4XUJxXUGFHjZdeLTdqwEah1vEuT",
  "key24": "2WyiYCW3gHcYhqXfNk3Eo6do5w2mYJ6zYt7eaaAZ8ZmG7z36BJCHSPFH26sshTE1ZNWqbH58sjgFF6mJj3cBLWDX",
  "key25": "3tTuxFjSbAEAhsQGboU5UEJE1gz3GY7eNKJ5W7omgu1dCJm1EuzzLUdzzJkWbgTwqFexcmR7avErpD4Q9Q6t1N7s",
  "key26": "3mMaWumS11r6AHbqUSMy15zTi5Cozx4aE5h5jisQWWXNxoucHFxAyh241UHiLWXXkLBrqkGJcCSyYvPxptK3wayi",
  "key27": "2mVaYD6KyrxWcCxUmstPzpWzQ6GLfWYjgcNA3owee9zXBD4QhWNPXy5RJVNgpxeecbg4KtyBxeuHkLuFeNRccYaW",
  "key28": "5c2XdUmSag7MvsT1Jh5tVmVAuNtHg13aaSjDkWvJeq6bMWVJNc8WM386TqNCXbmgjCr8kbVzZYshCA6raqRCb1rh",
  "key29": "UDygGxFvi8PiaSdyF7bv4CKmBohqKUvtXqAfkpjxPQXgM5R6TXmohHZtphHXWLfRJG7ymMpjUgSXptc5KtdvLSZ",
  "key30": "EW2YjfwZUhf6zUC3oz11FadrpUF3Z5uqp8vUSiwKApmG2v9UPMNDLFkCLFqbkAUVbgLMdRbT9kmWdAwrEoHUbE6"
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
