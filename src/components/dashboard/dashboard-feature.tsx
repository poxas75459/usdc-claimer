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
    "4JahYT4jMLdbH27AAtzM99AXTt1tfcBsFs1fLVcEjURsf3r4MtAjdXpwMnYY7FNFPBYGHtZCWbwyvyHXa1pXdXUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZsAbL72yA2kGfCVeFbPYGRKXULkPLq5TAVCYyYHXqGKfCQ76FenMaWZKyKksHhy2dhua2FiyNRNTd6QzshwYkH",
  "key1": "5sJK8wWzxjZnHsxefKVuyE2wnVnYeN4aWcVLtcidYe8dZfPeRm3QsLcJ71ULuXpfdBH4VLJJYVX2nFCZGZNFfkgD",
  "key2": "2cHW8Wd9cHY12n15uFKDY8aAkAgMGFEgKh5GcHt6f7nmEwwsgAY4BMPpUcuQdyPCzYBiU8taQzQnfD9YEatcxv9s",
  "key3": "ToFVch4VVesDgwQUUTj4DzvWr8QnpTxR4wgrBxbwmtziFM8HQfEjKooTZsVmhXd88Go2Dg3hNSdJZWdsHfDizvj",
  "key4": "8fh7aagLRkoWFwa8bQgSC7xtWViNSH8BNvfpJn661XhRRG1jF7wMiVLSamBZMykSt65T5dnDAAYtxQ67FySJHCi",
  "key5": "2y6VDbMuqfgCayAeDLhfwGiwrcpvBvick3XnPBHhRFC6VMA4NsE1t7ekqcgnjNFHgXGtQg758Xs4no76G8GLddoo",
  "key6": "57EJCHagGx9U5wZYW5mPZv23neN1NBLSqpptC5nMtVbgcsLrdfxgmXAcG4mNZL1bd1MzVxxFxY4bMJUbQJNnwHX8",
  "key7": "29evv7NLZzWd46gQp9j5ttWZvBSqjbKx6GGGLNyVZG1vx4qhYiQ2CbepxFUvokS4qS8HhbCthhVEWrPycv7o7dRg",
  "key8": "4f5N1VhykazvF6CEDUhFZ73eq1KoK6vPaGWWozUuzA2fB4q9yn7kySUr1mQFRpEc2DcjXfmrnbShdt8fj7zWbaFv",
  "key9": "2HtGSSyuMjoFGBobg6FayXPrYJQb32hxzVyGwj59jTjTBay85NqLsT8t2wYNTW7Tuv8mnQEmrEGMFPv9pgc4yZRQ",
  "key10": "3UM8ax7ajtEvv4NanmrC4ygUQzo45KymEXpFKSVg8fiokHnB4CrdFLW8dy83ThEx344rfJYdG4WqpvX48DyyGCTU",
  "key11": "4cNgFuZo4jxBBuhZVri8Ej8vfMokX8BTmQe4aowsRcmtd8KQL2h3SP26pRqDJUBtS7ansUnMtvwXh8SDeRHeikcQ",
  "key12": "3x9HTUEVDMhmHRiUzQJf17ewWnw4V5JsfufTcehygvYdsF8V6ETqrASqbBsU12Y4aXx6sk1ZMmto7vkwXyZk97wT",
  "key13": "PxnjheoUbBtYoeUFzjFZ9hdssfQyBHK5V69jKjCbvGxmzDDSkAEVSnvYdc5gf1e86UVN25UtX65nh8VpB1ftXbL",
  "key14": "3G3emYQLGPod7i1cpBNPwapBAmiZn3cDW6oN8VzB8VuSLQTTArFSbq1suzcrWUJfmKRGbMXwzEhwzLuTKYraqQTP",
  "key15": "4GPnwtc3E4kh8iLT5iyma49iWHegvPusc1rcfLgTzkburV1doacvxqfqMK34S8tuGdM8v1jrGuxbVHZLEuT4kt5B",
  "key16": "MiMsHJkNFf3LLpdKXPurRM6QF1AseYFA3JVLHXmDm2a1sKYR3m5yMoVQ6HpM3JgU2Su5zZbh3Eu2RAHqs6iAwNT",
  "key17": "4estCgCWWmKy8dBGRYWtonkLhcZSeqkEkbYkLD3VyGYPbFzLjnejdXmy667A7kNKsQbrpL77VeEjiks22FAJ4ZDP",
  "key18": "87dyNgu8rFeGhuHQd51wegpGRuBrW4N8nF2CVvtidbkfjs99kK6bcHvGLseG4rMhnFdqhxSjAM7Jr3D3vJsZ7aF",
  "key19": "2TdXKmE2Udr4a2jQgW53bCNz1Y63SmxgGLTPigD3WB6ea89cEYWbEqXy4JHSH6jaqPo2aiAZDm2XdLgNByxX56cF",
  "key20": "57UDZyaBdv4pfG7rUuM14dj1VUELH4cF9qS7jEcE4inFnnbGU5aURsKsjwXe5QcvXgVYACktFZYggmy5TMrVJY7R",
  "key21": "EoyiBPjj7tpe7fNCmBwAGEC2NxzHztHqfHubWXNCynLqZ7vukkS4SpqqTyD7fsnLBX7Hh4hRQ13B8M8p69BEPds",
  "key22": "3tFjS5qThVANDHemFzAdukM8NcchSZAUAFiMmq6m1Ziqa6p59UJusZX5xrZ9EocuLsHGC9jGWGv22WkwWUMHjjJh",
  "key23": "5gExR5yffdKn1ie8Rkji8FRGhW54q94et71RNLQaSPKz3pWVBYdhZVHSg5SyErgKkJLNr3zaWyhKZcpXJxRyky4F",
  "key24": "26igCFAyzurXkZ1paczyDjYJYUNvj7eBYDM2NTjBNyFPy541MGo2sJvJQae6VzfTmmB5eA6NQTZBonWfs8jkKx6s",
  "key25": "fGcF2nedB4vWr5J1kvF7riTsdWyn3Fz6JZMDYm8PG24eHd9TkVrHkci3QFMLuGnTVAcy2vHVsRQXdKeR4qg5FSr",
  "key26": "dmA4p9TmvU89cu8hANSouWgLA4ZrD9R4j569SAnsbrxwFSECXpMSsr7bwEa9ZhqMqoAqcuZQS96Lg8jShxVLwfA",
  "key27": "2dpH4hDan2rHosbLNcwwY91JiKKT6Bh9NU33KJB7HKRLZZeYT3emBZ4vecaW4TeW9zfm4P4oAnYX87NFVXePGWYy",
  "key28": "4LTo6bgpGbH5DzGywNpRKb6DaDYiPSaVziRkzfun5DbH7kyVSnPTB7Pwm5fxmXTFGK6z3vem2EMJuZ9RHNC5qQUt",
  "key29": "3SNtHda3tQtY5fVGJ62iXDS5GzrNvXM1QD94siSV6x2FQiJ2jNSi83zPQS7otALqwxyfV2NsxVXJcagzQes8oB49",
  "key30": "4zdRcZS16inquSjxP7Az4VhKSKR7hg6Aj9tj6obT5KoibgYSHHm36QQuNuUsLxX9TzCCnF4nh52NczfsUSAuV1y6"
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
