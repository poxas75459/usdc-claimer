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
    "26MStkPgqd1KT9FhxwPDfnYH2gZwz351TuuyrhSCayKHWFqqLvVt4km7uNWXMHMKFiWeWHiRGNeJYMxk1VV8M7QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dDQpGNF2rYWfpJNUXLrVLHc5Feuwe8bw36WV5Q8k4peFnRid8xtFkTjTUWVyq94WbM7mSSUasfaQC3cTKoN25z",
  "key1": "4h9be6rc4pFdKa3HkfKUpjtPXGAPGCvbLgdDBaN8KHBrgQWf9Hjeihrs3XxUUGuWdhtdubaPVMnQbhSEYZUWyJgR",
  "key2": "2YfvdQyoRXpBmLNE7jwgassNFTSpFJmHFtmmbjC1YqFAoceFyGwh8R5KMoGNk7hd9eb9QAe4FC6rMTgcSsvpWoPv",
  "key3": "47KaNawtBpXvnMjpsWsGJtaQAprHah3JLzVvnLAhDqnKpHoR3QBNKJ2VaoW4TdgiyixRguM4RhVPq9DxzdsBvAHV",
  "key4": "3FMGWXmg9bTQefd2WPXW7asSxyQW8sctMuF5XY92xYvzZ4ag3TXXx7aLTYHtwRpB9t99GNZV5o3ARssyA6wwipHE",
  "key5": "2XvkMBNSE8MkEus9j5CYyNvcXW5MCxjgTTwwXDiJ1TNQW4eAWzpx9zeEHqb8Jz6TYUvhvw3BF7VuDEjdtLjH4Xmw",
  "key6": "oGyDTVdupRoqUg31Q9ktyNRXDLhxZZ4sEysrXWSkfZfye4xmV364dV5HH2Gmdxcov8edxmM1Xh7C9G495tDzitT",
  "key7": "4v6ETymsDuJT74Zjz8RNSqsh7b3q1SSUc4k1tPQRDUcSMet7aiakTSajqyX5NZtydgccEKeJJqnJRDHDuwit1oWT",
  "key8": "5ejRBqCm4D4WEovVmmcUQYfZNmAF2T4RXDvm24iWKhSJgPA54ncUEBdohyM5zboaiEAsN3WdFVyfehi3WugqRs1p",
  "key9": "5qEAsiPaW6tpZPCuHMtzQY4Gh4MNMH1hJsEqX8PfMw3UPPrm7H9TheMwfH42Qt3TK3KwSHoXMEcSQZgu2bcenU5X",
  "key10": "5eTxkNKz3eTvmuEuvJL1etEdJs1y4YGJP6CaaLoZKQyQq3xUR2eaMd8cTxUigEnWMWKvruPiKkppbBoTfTLdq2SQ",
  "key11": "4fe1mU5t4qaBBouQf5ovUCXw9cJntbUkt2XMxex8e6r2Lo8MwgHJouTdYrUTM13WeBxGuncq3581yCuji44wpqKv",
  "key12": "3HKb2tqKGCHeop533NUMVWLe5v4nwP5P84uXKbLi7ZfCaqViwK34whdTsSn2tkrttBTai6WBL1NetGwXHBmWPox3",
  "key13": "2NbLmKhujN468VkY5sEi4HJX9RvLWJpMSMShsJq2evkj2BjY5bGvSXxYt8BNQVdcyrgJwBd9VsYtcx16smBqKCBv",
  "key14": "ZAmCvPSRo1suPnusJTHXytwkHQeU7rZZcNynaB3QKxYgPWrfxp9Ha68XFngUDhMFuTHLRuBvU4NfYG2PMr6S18B",
  "key15": "4aV4gn8KwAvyyF7R9mfHGLm6mZwYfSspKKxw3aWgKPbWh3R9GHs7hyHK84AtqvNNvHESP3SPbJUAqez6KwJGMCLb",
  "key16": "XeK2DimRY8hxSTwpC6PJvacFsU5m6NfTPPu2gjy6DZVixmsumEnWZFqizXndS9dw389jMPNqZ7grpo5yEsomMuH",
  "key17": "3C3SxU9tJaSKSGmRPejqHUtsgZA6xVkz7rEDqjgpUU7MvWgj4bQk3PXBck3efFLBkNwraNU2BeJhzfwQkboi7bsY",
  "key18": "2s5MH1S5Mktcewj7hrr2edb3AUTQSnZQmt1uFv5pYFuhASBHaa9zW9jxQHzyv3LfKkb1a8EtynimxPhhk34S5zT",
  "key19": "2vfENh1ffpG1qvqRb54cboU3VL4k86fs9yUH4DP6xaYx2aHsxZAxpfvggmET7DRF7twxXXwocMTWBrEs44gzbYj7",
  "key20": "66sYjovBQ5LdnU6Rg3TJDzYrgngAe3cdY2ncU4rWPDFT4czhoXt8hKYMNTky7UJW5DmLvLWnXeXogm5tWkXKAULf",
  "key21": "2KcsqF4mGqRTtU8CH74d2y9bM9fPa1ZEs3tgbrdKZS1tE89AxbUQJbfhXPYtLXKVq2UxFgxQieps1x6F9STCNjUz",
  "key22": "3JVYUCsNYkcLtPSZpKfewCijPmMf7nmMpKpzAqkxFqJo38srfgwSDf9LdRtqQh5eB4JLukk4TFfycKZsFwPXshdZ",
  "key23": "217i4KdzdHPnXRJduzVXcQ1ez8rUnP8WFAszvfVMk6wuX4JznTHWieNQhpoX9k2ka9BYiwj4kqnMycvMvMsKWnLs",
  "key24": "4EVMCX9KRrQnooB6PHq4ScktF73kfgTHS93YwqB89gd51bGUeZ68rspGFMEPi66CLNPiNXGkEp29ousQtZMDSVu6",
  "key25": "mDdGNh7JynZsxphvPFeJyQUwkzdppmzDnk3hw8rrU5PvotdjyTAVdxqToYbLzRhvkSirzJD1C9AzwzyRMhVe2Mw",
  "key26": "58HLPyxw2v5Lzxq1vTY2wG9MpQPL14VbvyGyDLVHk2jPn6P4ocqGTCiUKPsqCiP42TxQrVyJJAZVrSk9dRdcavxN",
  "key27": "3eVS8yxUMqBUR3AyXqMApv2XJZe8bth4zqv81YyuzTb6dQH1eYU2MvkpXWKZbMGqNctL9m72bSkKeKAitAfcBFiA",
  "key28": "51Kg4XdXRGCXscFdejvZ4ZNqjjAG5LAdYPJry5Gubh72Z8NtNTQTciE41pe2tXxP1udT3yNRbcZwcdQxCAyg3saS",
  "key29": "33G2tiZ19dQiJQAt7DUBeycinoPqyyCsrmCGW6ZsRrXhmwYgYbyMhUwcTMXogCw8R5JWFXnQsLPLV4EvokYM15Qe",
  "key30": "222Vbaiv4JCgbPmyW2omQaR1HEjZKFVyxRMiyiDQAGLhXMzD3dBcDNp2LDzfUjSaUTimSovHKRz3tB1cL9jjuKVd",
  "key31": "5ukHiv68sDBzUoV5tey9BKQQ5L1uoYPZ3hRJSAetDD5qm1yw3T6ZVuqhP9EzduFVT4hfrWk3227nDTVQ6ifzAceT",
  "key32": "5ZRqWSF9jHMVqv4WaT3P4qaR5q3GxuYGZmsVadc4TghKK6XXRmLXqyBf3hiZtMGh5TiDGCo79mueF7QJ5ssQieWS",
  "key33": "iaUZdb5Ch1LkAJw9583jphqSjzdNj2vbRogwTRe5RNV6u9fKhfEvmS2SGYMrK2Gcmu4ZdLuNJFX4ENScYwLXxdP",
  "key34": "3Nnq2Hs39XbLVRF2VLmCPqGn9i3uVjjzsbDKEMVq2mUbjJpcpZjXFpQUW9fvhXXdjtjXA8tcwevc2RnBVdTv6rcj",
  "key35": "4aEB37ZHFMCjtF1BH7gZwtwGgw7oVpNmE7dKxK4qiAjMmgJC9QxXuXwYd1hK6NzmjQDgQ59HazzEcJuxoQppVWoM",
  "key36": "32BcGVkRfsKVksVmuBHRU4rWQkJ3qCzP72oM7qKPh6JNB8ccDNKkJAQ1YLePpK16jeXRbh6d86uswUKHzCXuHmXx",
  "key37": "sGjnFXAns84sGUsza2WU7y3SkpKj85Xmj3APLivj6Rf6xrGmRKZRFuckEUBMBnFm4WBDFUzyFSg8G8eBLG3xPxP",
  "key38": "4mQP5iwb8ACaiuAp3ZaYSH1YcFjR65bkpHFqmj66ZUELq5HFPZs8yvPvegAiaqAkEiqTjxjWWWD8cfB67FDNbADN",
  "key39": "5761hdbu6Sm5yUuHcUSytpAAEo52gQuEr2AEFMZw5FkyqhdZmjSvHS9ibQEdt7wbdpNFoaJzdEmAvG95vaSF49mn",
  "key40": "asSSkC276TBrUYYjRvXYcfNn9ipCzorLX7aoWd2GbNNhSZNQfKFdpE1FnFcFGB927WDshCyo3EH4oxLw4FGWHXS",
  "key41": "5tcb812frCj8yTQndkashL9bRhB2PzjXGnySSHeUAvg3mNpw5ARvvctmTwxKJXDooEc8hYEGpdnneXQH4z9XAHGz",
  "key42": "4ZJnCemQr8j4JELFVMALYQJqnhmdH9kPfw4GVeDHCd3jhH5vdjwup2HFR5h7Nsv9tGxgNExXtSzdVa2FAJ5kfTnN"
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
