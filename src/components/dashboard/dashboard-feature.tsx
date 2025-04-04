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
    "52RcHCbHiHosQ6XPK2MzTBZTZesrip7VSn3LKnbXPUQw4MH5aJyXUJp2dEFWmzeRkyyGLRoQWbDqabbqAEhsK9ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mzdr5AQPUQvmCvvqVh6cwicLvor8SVzkH64ZfCJXcGr1kYbAH61WGSCY43GFSPKNgNrmjcPaFauNgZUekaQeqnX",
  "key1": "J2C4pGaa2LA3CM8xWykyHuVCkErd31qxy48gjJL1R5squAmRW9s7S7TrbecafbgjJuwaxEkyUmXDFfkmeA6855p",
  "key2": "5oqvfaaBD8Gr3ERPmUe75pPYDfKHYyF9624NVyYTVBsdzBeLw4kQ8y2AMMswhaMvKdigaxy6PJoiFVnTBP1QJkHG",
  "key3": "CghLHFL1j2c2WxRFCQD4S7pDqSnNxdtstzAhznMnpvckDC2TKNVyj1TydL7m4eoAdBRSNJvVRxRzvvWiKvoCNP4",
  "key4": "3c1kVHE8MVcCQrCy3VMX4nQvuxT9kxEq3VjgVqfBXoSXzFqv4u7Yp1qdj6WQd1YCQ2NG8o6RFP2RTu7kDfjS7TQ5",
  "key5": "CYfz2pJMqmHU2vrKw58Li8L4MZfqCxeJ645QUfJEanSuqmxBgfBGSMKvJGdCzWQBNmsSsBjEE5mMnASCnDyvned",
  "key6": "34dxo9cEZMuhsrrSVapu6wYKny8kKJtfbSfUNW1nXJGLSiHmPRLxQxazeAUqLq6QBdUmvvJeACuiK4L2qShoKECM",
  "key7": "3bZuE4McpvgHTqzWT22UfEa3HAnsR5q4HubYyNznQE9XmKciWqGt8ydE1rnQSN4JZT71QdSqPKRZUtSWwPAct4N",
  "key8": "2KZhYeLUZAfsXFfB53VbRk9hbrBiQGnfanSgkgrqB9aCHDMrpRCCpsWhbJ8A2ccyd8VAzqxtCXgDiyApWvGag9UA",
  "key9": "SGiABXf1gfdantNWGPeKCUMkpWrruvLUeBM4iWCaSuYai3AAH2rYcXZpFMFwzwCKX3gUuuU4cFoswyb1HJDD5kJ",
  "key10": "hSL9rB1FXxkZqaStujnX3R7VJNnmg6z6E6cKqFP1HtKePEZTDaQZhi1rXGYES9KRwQAQZbYLqRmH7qL6wK414KD",
  "key11": "2GwoCBxCe6jQXf7wmsnX2cA94XgDwrNWmaJhaimBckff7e6CYyuTkVYoPw34hUNKkwc2kP8QJre689EtuuVQCxTA",
  "key12": "2xDcnXMqAoDwePedcdHXYW2Ehw5D7ssCSQkx23ch7Sz57DPGvkM4DX5hb13La91jhqXxLq9LX2MF339w7oQMcySk",
  "key13": "5mR4my3GmaYaKDwrURQEyvo8QWa9WfQFbMV8QJeSbiiNzSZjfzCeWBwJDbtBNyyFvDour7Y4ZNjvpCHDKq1vHmjX",
  "key14": "cjZj3HUWMNbC4S5DQrj9YsuwbgSCRmYbH58s6TxhzSzQ4NrbLL1TRFVbK1FrDjgHFAzkxNWPbkU6LLsCQJ1dozY",
  "key15": "fqF5PRLKA6zr1bD7kQX4FnEyZcpGYMry6GEiUaMyRLbB5JGCp8N59aYTRnMcsBoJwBvEFTDmEUAqDKjQ3R7UYwJ",
  "key16": "4L2VZRr4Ym5E8C2c2tVt7cSW7vzpUFu2QcNt3t4ijEjtDdGzJCTnzuHRsJJamrD45MStKnqnbpWqenBRZJwPuRnE",
  "key17": "67HUzCkHDUZHMqRX1dtvc85bRtFqg3EkQjuk3eeYAfZvstoZFawFoT3BvNZaq34GJTXZefpnPkaBKfwfF8yXzcoi",
  "key18": "3McRZf8QA4XDVbBDW8uxKAzX8TQ6bo6u4pDNaS9Pd6enyFvUTPoEYQg14fjqqbapZ4HUTX5dn7qokWH8dyQdt9uw",
  "key19": "3La9QutLdcEuQuWABQL5JwhpzrUzFXzk4XQHR41Hq2NtBkRo4JkkyfiAPv9mC4GeYjvub42vSUSurfsHpuoPAAi4",
  "key20": "2hmbe5cAVfm1qMpE6z85LK199daRtjh5bL143kS1SJ3P8NDx6S7xTLUSyQyRVZ58HMmgc7bWT6XDvXvedY8r3hi3",
  "key21": "2cx3BcToDs8zpU5vR4j5KqM2uKXVSD6XyT96xGxDJytow61zLKYzXW5qPF5TF5RknAtadLUoe7AVqeD3WuMK1tHj",
  "key22": "2nkaaDxZrrQWffn2qQ3YfDWxnV7y4bz6TWtN6SLngKaquPYM5sekXiquM9CAdHSSc2GRzbWmP8gvHYapXe2fg191",
  "key23": "Ds8F4yBaPFDcuYTJNDPQeA3rxTYFAzaHeXjBhuCQHFkRT5JrDn9VrnA3NuYyLLJ5rd4M8QjWpaycVEtrLEQJPdb",
  "key24": "5LMAT2HzrZjZBSXtJy5SBfJ2iJsB1WoVgodxu7msPr6NJeyEhB7NS8fWtrYGR7A7peHJNSjCthpHB8Cq7wfsQEHq",
  "key25": "4TJ2BeArjnPFRpmt5KgZnyTNvUYoUZDkTiUmCmJj1vqw9FXhHg2gj3sZgDr9QGfZ3A3yEU6P99qK7ZERzvd7xsLG",
  "key26": "2QoTZ8WqSWn7WfQyhb1kP2WE6CyjLiffyfbcJjnwEyxe7XDFjWVtZzaZ4vwusetK8TeEvsHEc9gvRn6z69wUedVY",
  "key27": "53WQXvuV17enx6ga65jCiZRqM5ajsbCEKn2of9JSSbje1FX62eXMGUorYTyVNMAjNpKgpXf2WC7JjRm4RrCMLxYn",
  "key28": "3KXNZ31cJnuwN3JqZbLW3vSW3i4hp8fdWyZZB8zy7zm3hhDwEfvwGdutEconJeBqRGjUih7hWqwpguXKH8TTs28m",
  "key29": "bNNW53fmND4qHzdkkMGogPCTh1ihk99SqpDxjpdu4tH47fTx7SfjFSdFoBFQC7fQBoeEFzeRoyEq4FHRTRaU6Dq",
  "key30": "63LQ8sW6aZvuZroSLWhX7TBNLJFEsQhjBo3DqHo3HPzwGF3xg5u4WzshcExNnJwp5qk4C1EqwwLRideuZxPJgFCT",
  "key31": "3My8oAApGru9gJjznxi87inTcMdVga1qPabhCNhvRrceP6yXUAg6HrahoiUeYprfa3FfDkaxubUpagtVxtUmWCcm",
  "key32": "5ZsULLuvxMPKEMH8mdzmQurfszLScyaVWQkxhmyHjjfqzHAKasEKkd262L3zAcSTKVXKYvEr8YEPgxWjuYzFvJvF",
  "key33": "5sGYAUA5V8fC7GrnGTFJJuo4z4mXrSMHK3JthQqj4nz17sz7uxUXnEodfra7Jf9vzURXjLTLqobHyLK1zqSMJ85o",
  "key34": "3bTN5ExYNWtFqsdrFHDbfDtcSFEWoGVcsvfNBqhCuW8RAshf9wagvxAkstfLzAZPstj82EBVdij46rVXKmiDgxAM",
  "key35": "5CkbcALGmPQMFSuF7rAV4TPaoMD7RgKRip3ng1Rhh3gA4d6P2iqb7pXBue37MHSqGKLW3utJpNwSUd5Du7Hzvxnb",
  "key36": "21nTVRX3wBJFWn5asdpWdm7nAAyTikMkrwaUuJuKvkWV7oH1wAkNSmukgdJ4t3Lc2x9n91iSX6hadWD3dXnjA5Lj",
  "key37": "8RoxhmompcNiMUk8KJMYw2Yb6pEhRe2s1sJBnXJvzcmdT9p36qfpfphECaCxv67NJ2P1sSNtLZswEMxdox54YJx",
  "key38": "5j2seL2ES3iK7mZf5YWjmj6tgQAaPvCpV17wAGqavY7ZYYrCdHFasv2Eq6JnGkrwzgEnDryL6STHs7FVRJhetpHh",
  "key39": "29YZy1VxDNL6w6yH5avzUVoih9K72G9WbABZ6Z8NoLGbLH69dUNMooaRRXwK1wai1DMsvuUHSEt6yeAwcncS7Vqy",
  "key40": "2WYuCxZkYraz8ZjCUrwDX3VyEG6pHezg2QcDwANuJAuuxgJSBdmzLt4oSzP8GBqavoTMSAyLpW9bAxroqJpubGcG",
  "key41": "5NSi8yseMRvvbXjPmDGUiDHZzqtM4QPkj1Y76r6c8WJe9825SgpgvbQQi4s6vwd1UEg74Bxw1mp6SDmnwzbcJkW4",
  "key42": "2WgJ2T3vV2USL5ePXZoFK4ZGnkGXQPBXBNja4ZHKSqSVy4Qa1kKm6XLk52iyYqDBGXLqze4YwjtWmpTrHNxbCzgx",
  "key43": "5f36Z3RN8C4jcq6kyasEuaftST9mMcALkMe1GYa2RyD5HE2MjnxKs5kJ8zSQS2Hb5JZrk7Pa98Vbh9RkwXywz7ZN",
  "key44": "2U58rTG4Dscicgcniy3tMjfZvVAdxFPP9Bo3rKiafLGmCfnPkXm3auG3ChrgWE3aGJZrNSbvLKQ64fABQzjeX79M",
  "key45": "45FLuV8DC7sAvtqbskkmANyDvpPQ2GoCwCGbUW3CoCZUrdBb6oR5Ehny5B36hozRxzZR5j1jnHpgM9HQyAXU5gUj"
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
