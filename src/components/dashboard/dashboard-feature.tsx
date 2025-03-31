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
    "5ELF1DAhxRJbyrQvo2uqsRjq88438wTzhYwZH6fDa58yXzv5JU4V6gNvWsSPZnPS4FmmCthuwVwjawPAHikYrEFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7gSnr2qN1o2fvew7bqVm4hzrEQL8Dioun9ahpt1Hes35tKFZfrSd6Xbt7jyqCS6i7TqRSgWa4a5nUNG8Sevzf5",
  "key1": "4cQjYf3bqCKaDJbSgu1AHJhqGSQHzU1zeENsJbBJuZw4cHvr3EWUU7Ur4fjrXDcErmncWXZ3ejuK8rLWR6wJ52PB",
  "key2": "3LYwbys1p429ZKF76H5Pkt3tGW2NFCVtQhqhVhHqF7XyYEcsXW9FSD2kYaqvZqwC4FGqKscz4Bx1pUeRe3RbacQn",
  "key3": "4FMwGiDjiKkULt5h8LtMyjTwZ94DKZGbdjsXTAzBJdHxj5fsf7X3JLcCnEGwYfUxRvYo6GdC5EdrHSJXssoHncoZ",
  "key4": "5LgkUj1s3JD1UhhZTJcTRCk1jTLyMB9BsCsuNizFx24NHHHhzwqmG6xcQSH2CG6KmXM4UysMRU9SnYKHDjn2nDis",
  "key5": "38jrzV4XFSpK2oSZLiMRiGbtuMF1YKcfTtATuNQygvjzxjsfyNnCqEuAtiPYp8pH4sFYd3zo1izngtAewg4NoPZ6",
  "key6": "4EPNkgj79eoY46WRaTnko5wkWXsnUhJ1j1UF2huoo4ahT1eg8RE8EMCWHC4GndoHcbGvbg18GF5m4f7f69FrTjvL",
  "key7": "3Y938qxhJYvV2gmVSq6ETzp73VkVNj9m6edtXmHPM8CcYJbWGBMuErFMjAWu7ThpgY2yfDJDeC1pHDqLuDo5ZXYq",
  "key8": "4HnKUSiXXangy7wycssH7Fw1Bd6PqA3R5Ks8ErSdapP9KP13U67a2TQfFNaHqqwvQLfwdyoYFQ7y48fJe2YRYXey",
  "key9": "2m6iqDHn8379PjzyFtzxr9nob9VYAGTz9TDpRhxq9s5ekpvcz35NcrjPtnL62d6oCa2EgKPStEvsy9iyd1UT6FLB",
  "key10": "RM4xzakiHSKZSLkomDmDNwBwgYg4hmhDukFeKBxALJkWaNPWLEo9ETU9kwfrzGYqrn3tKkAMfr5SRrWm1AddQJP",
  "key11": "4wNtcz6dSNeDL4rvHZZgkbTzgM7Bxxur88rf6hshg36oVhvZwdmAcS2WAkCNwkETSXSZveoZmkFPDXwmDkyyraaj",
  "key12": "2Hwv2dMgFrpvzEbjdcHXyLayYtcc5SEq14pGnWouY8F3LiNKU1gaCGACqJJdQB6aSDH7PHnKYCzYjmP39riKta47",
  "key13": "D97CAcMTWvrW7Ddm2xehrk7xuHLmUvXn24CSQA9PWegdXp22Zdj99ysFgyj1sAVw23auXQfgKVQdmm83RaXGpLd",
  "key14": "3ntBGg79hRVgELnfiGnwQsmDy4pzMTbj6r4XQBQpkcLVJc6kcf2JZnS5fbre8xHR8mVDD1w3Bh5MXWBz9md4fsWf",
  "key15": "4igoPHrvQJ3UGnPTBmaZKxC8w8PKXS3R19TKM7d8aeHnKiCdn7fyLQZ2FPzsxpMHuo4SyaUXpkLooi8RNVYBois3",
  "key16": "5C1EeQD1doST1uMgdSqFXvCTmpqbvuEjnHSnJUWfGaEJxxhAYoDw5GTG4oN6iUAqYaryvQwe7JvRj8ecT4chWv71",
  "key17": "5UdyJhJZuEAx6CBXf1NqLKZiPVHPLrD9WKHEjJt8QT65Fb6FAXujuEqYDmWmPZQUgQ1G22CQa88YH6kDfRxp62Dp",
  "key18": "CttNNTGBEusAGmVfjM1XnaZud4GKCe56heomGcsfhToLj7AtQF1P9doD5t8r7RtcTJUfrFyczCb6DEDhfmjaZ5w",
  "key19": "3r56pPvzURWY3nuMzeGtfoHGSRsx5Qd87BmwZwYhCtEXoB9HGVpUv66G3bKa3wjx5BFAE9TrgFZRUEBXG7yghYGi",
  "key20": "crEevyeN99sBEiqytP7ppsPkG5tQKeFmdW8ok2BxXm2yu2bqgcpMjvaHXQQxftefMpZ8tsBaeGjqU3gYfGTHnNt",
  "key21": "3enuG47Bm3GZSwnwLCaLhGRkYL8DTr6rbkt5mBd22csYUXX6wC297icwMQnYX9tdtQkfsHEEcxYze8Q9FkgtR2GH",
  "key22": "4JydtV77w35DbsdRi9ChyWhvQbEML8k84MeZkLVdoMrrKGb8HU2npXGkQ7hfkeH7LYsfdX62fg9RiYtUvmQqjqPT",
  "key23": "4w7kABnGGtxhm69WKopx8AUWem1kktiPrXf5uQz8iy36DstCv3rFMRMYsjcpYHAxqPvNtUWSLi3ftu77QCvwyan9",
  "key24": "L9cxCNXx2xeKJVTMEmKcpML9jq3FSRCaEEu2zdmZ4r4UVSD1A7RtAhqauRWYm3aeBZY1vKSf86QDr1NKby252s6",
  "key25": "5YxN2oqYbMw4QeJsT95qxdrGk23zkGoPMG6i8PmUjsYoYzix2WzQA2KbkhDNhxYDXjtHyB97hrGdvxKb221iRjJ5",
  "key26": "5mcHY6xpA5mJFmPMGmagRKadtW3hRGSnaXNd31M5CiUNq5BDoUusBEKfCWvagp22a6Uyo1ygvE9nNxenPFshjf2J",
  "key27": "5LpAjBvYhxoPhfE5B8qed2q4z6PFzMSAzEc9bYmmuF1muFkT134ZeFfyo617nnVtJ1DyJL75Q6Ek6xCcgm9HNzTP",
  "key28": "4nC7NRPupZfy5fzBQRRAy1VB5vJkH7k5vcoqnn6WgtSzAvhgUMugNqprPDydYcUjbWvcw3Wf4rmQJ15oc7ve4WnQ",
  "key29": "21rj6Qs7GcDckhkEfmRXumRT4wxHRNysRM6A3VuS1C5KhMP9BZv3V4psMzrs1ShyLL1WwzKDZfHFur4C7uEwuXuJ"
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
