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
    "5UMwbRa7AJpTLh1aEga3purLVNAt9H9uGrF75u2EzuPxPcByYP6GnuPkucVBsfMPDyiursQXKkpSNARhHAD8QQSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313nMQKKwcVoFFDfU3LSFEN8JCeD5W1j4mdfY7M73Z6koU7oiSmnzPAY36dMUUKPQic4PZ95Hws2SHpwjU3FP6GB",
  "key1": "2d7AgSMN2yFoKrW5JsFvk6vwWXeogAob3iqJz8gZmAKCrRaL6xRVMCiCeaAw1r82odURfLoec271Zyetg8QmPvic",
  "key2": "2MfxftnNxbZgSqi581GYjyKFdFdGsS7ZAKmkXK6CQqm4Gh7x4cCgiZCeYmuaUVtZ3RNkXrs9KqsGB9fnNGN73177",
  "key3": "2A8TDFJSpLNnPaVvNJHfTBasJXgUzbtBdWa794Koo2UCpZ9jRfYeMS8Uf2BRQgovTyGvK964siYWV6tGmNP2Fegu",
  "key4": "22Yu4tFSbKAjxY154gDrURGvXjtU1RJ8o5GmcNRX4M2MsbaGbFREg7oAVNbmQjUQ4vbx8BPRdaPwqiPCuQKREczk",
  "key5": "3eqyxJts5gqhqkUC5YhL9XAiffKHWDjdDGFutHsFxmJ6ejQDeJVBkiuRg2SVEesvNNsThWXZsTiMSLwseoYJEAZs",
  "key6": "koyCmVxQYshqoHf6iwr1bxZUvYhsuEPfkNgGvYqHpwAe9bpdFdcFSwXhbid2F4cfzfXqtuimoQyMt9SW4dFzZZK",
  "key7": "5iHdRwWnRUr44dToK1PpvffkKxr7AiGizvvpDuzGkGKi3KUFYNkbMdD9fadASf9iJHCXQifwTsQPGGqYzvkfJ37k",
  "key8": "LmymYfAckatg1LHQBsELGWYuCyvgxfn4ZUX1jgQt6agYmFBtBp1GA4tFLPW7XoFz3NUv4HpuB2tXgPab9CKoDpo",
  "key9": "3mJGqJ1hnJUztABLSxPaGULr5CWZsVCmKnKS51MBvQatk5T7BMgpkusNcSDERUNNbpHzfXs2iJAVakmn5jScCi31",
  "key10": "4oXjow3hm7KowCRjW5Xa3hPtPhs1jD1pKJpWMN5zCLeca5hwb6HtJFTRNKZzWLae4VBjhkoXdLp33feqzqQeLbar",
  "key11": "6UoTFpe7gMJoZv26n1ivwXTggZexjBJad89NpQUyXLtKVs6U9zbqmDTxx1VCwqLHSeyuS8f5TAPQXKNEPycjHPz",
  "key12": "2pkuuE5eUKig2gAdkbkmbT4YsmAMcKvFF8Q1tp47GKjTgZcEAmx82rVYmxGHsM3GAGFqkvHRGUxbeEudebGoCU78",
  "key13": "31i31YMN7axk9AAVCkwffYs4otKCh742mDYQAhgkhJJM5113terUq7AMHC17cn6HbL1j1NLKPdLTMVSj4wnfyU3E",
  "key14": "5bxzvg5hmnhu6rnceQ85MRbgUwyxaayNQfdeNmLdtHtHNWvnvxEW6JSiU9nAuL2yP1McFp5YRqUadgojtc8gXX83",
  "key15": "5WzLec4rAuArvaqquFSHRusQum9y6MZs32skfFtx4GbabVCUdR6UE891BDLYRRYm7cAHLBBnuYki6y6zsZHa5aJb",
  "key16": "5Vqi4UWkE23mjjf8eYi5aTkUqUfW8a5B6X1zRoUEjQRPcdTYvu5sciNd989ByTwAMvjL5CsKrcp3xrYAtYcZhzaP",
  "key17": "H5KnwioxBexc6QYgyejR5XYS6Ut3W5TSbwGoPFofwCMTbBfwwwNdaiCN9uoL7PjAwgdnyGjFGHkmjhk8zdXYoaJ",
  "key18": "4jYETekWzs1Zmzpfpt8j6A9L5j6WpqYoqwY5MpJ9HedAqNd1rxfXH33pqj27TDDkqn9zXvViFVAHHZyVGELH2xxX",
  "key19": "5NbcrW1syNFynaYfK18U2xYPwNbB66BSaNydCy5xXyEp3ANB9kU9ruAxJh4ikcbVcMjq7nTsaA1yMRhfXsoaMiZm",
  "key20": "2WhHdiitSqQixcRUbKSTbwLuFbAYSVNNefC7oo3hDBcDp5tLeEvMzbXtNGjnziDUYnTBTJey3uxMPqtrr3ZYvaTA",
  "key21": "28mvo72EhVwGK9EvYtxtjspGeugVAhGLT29UjoX3oqQAo4ZJKvptinnXidpSSTe1XCrAPeLmmnhRKna85PVsL5wv",
  "key22": "4RRvVotm1QYJYu2GGBzudsTDAs2pE2A24y7bsBEZP9MtqYPStFDe7cYnrepjvjpKgG9oE8pB5Dn1DVfNHkiA4Ymj",
  "key23": "2UD1fkEbHsmXUakpU8jAzdeiJhuq6fpfWM1JDEQR4g1gVZegV7ny79NfyfrRN4xyWmQj2HouueLoyn4dAzYvCE8K",
  "key24": "5ttafc9zdRumEaWmhJcfLEDKEC7sQVNQKKv4qQGVfbG6zyi6DXDKJS2ShJMq42HzG8JShafZc6TxNZvFhcx5J1Wc",
  "key25": "2e99BYgw2PLA62NXE32W1cCc4WbZFYv94cDBYQRgKUv1aRtVp8mPS148SATDrkiStwvhvrqkkUvf4kfEVbnjGjpR",
  "key26": "5RnpVMs41zbA6ykPuwCRmmW8pyAt5MNN1PGCSDh44Srf9j4wUUZPn7poLPEtZAjLX45Q7qeENX1BRpeifJ3s7vSB",
  "key27": "2VddHzcph8zdXXqif2faKeBQMvvYjHx3mr9s1ryjyPcapsUyn8yKdC4AivJBQWnd6Ld3EpwtG2NG7MvCefBnLjiM",
  "key28": "ZfsPSwyrWXHnM2VQbxCwDiDkKyzrkdsvUmyy9WmTtA4oXqLcLqUKnKkrE4CG8md3q268i5m6BzM9LrAQwtQ3jPR",
  "key29": "2XagbWSoiCQ1Z2ABgUutQAb7NkasVX85o7SyKvKLa4mAR9fGGeUU6PptbFtZbqoVJnne8TPCYb1b3b2zzDNvWgpA",
  "key30": "2GX7V9fkgWLYn76cFbqTVWxy1inJo5eoQmA8MpEoAVDo3LU8qt2NCWPfBG8gjcbBYHEAtzg794edcW8LDZjPVDaf",
  "key31": "zXwmPufTs5NS2rcVaA2Ga2e75uHy4szSqoHdTYQW5McYBZrsCiG4eR8QH5qSgQwUfK4EibTqdeyq6nyz3vRnqmX",
  "key32": "4WPdUWBhzYCcTbJwHjLeRwJC92QLbzVjo9AkgYCRTWrJtG887cexEMZmxTTD9nsnpNosAkpbfD8sEgdcvbRyi6yK",
  "key33": "4TywFZoUPRsZmKYMmXV4oNdkSc8hjYzKysMxAjSupH3AMHj4akhoJ6RHirnTPw7mnjiqzjbWxbuvQeMPiVxn5Wcd",
  "key34": "jsxzvBfogw8ue9DeY4fkBwUKDhwp8is1nBw1jhpv5ShBUmVgvFUa461M7YkhHiECET9jkKTMEfr9kLn6krXRbfh"
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
