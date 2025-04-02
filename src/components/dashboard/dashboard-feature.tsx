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
    "zcjw4VHtAiXgKiadg8ZconuexGkrALtXtkqZy6kCTrXe5Vp27FkmWpoqWLfZMy6WQDbD1EqxjHjYY9V5rrTGZfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGvS9gC8csAdZq9CMD4RxVp1jJx4otdjs5AqwWqxPryxjGtPxhmn8C1kBePjaNsTNkrsPg2VbVnx8XxbMWu5rGz",
  "key1": "4jVN3F9egT9458CmcxxDFWspjFU3Q3m7v3WuM9xZE8KSmsTvHXXR4TgxEUBjdP8XRWDdC8toXU1RUxku47Vy2UXj",
  "key2": "34NeJQCWDkDHRwFLeM4HbmYF53KrYb5Ybn5M1M5FmnvpnnV2roW1jVRhT3p45vyLjnxjxiqVg7kc4PiXZ2435grL",
  "key3": "kGdGLhcCVZtAiD7VE24AqqzmQmkXcFLKKwBpPuguUjQMHVcjg9vLGZvsA9M4zPf1ciQBfdW5D7jWMQCUdzPFosB",
  "key4": "4g7iPH2mvPimZvMGCWFkT7zVjcbYqhL6CvCuwQxaY8L7uZrH4kdtwk6Pi3J5xREqzhqLTotTVKhq9MXZhPBp9nuR",
  "key5": "3cqkpE5u2cfpg6ycbUwhvimNf6JMmSwCvB7uDcdvwmLJ2nB39ExsUfixaBTehJUrPULtUhqkcmabvrWatAq9cL3A",
  "key6": "ZVhqy6e5Pn2XYURoMGYQiPeehXbwqxnCsaN6MfYtXuu2YBwmCvBRUrBv69omRNK4t16fAg1hyBDLeUsudgEujRY",
  "key7": "5q7GHz9dMtvKDcZtVsH8Zr9tTcTED555s7wAjR1T5X6JFdseAGoJZxEicb9hMPEBB1LtvZ9M8NfsnCUdLceJZTfj",
  "key8": "3yHou3YxASiPDejjyuiztxkVwwfdSb4uUEtneWWfh8PV8LPNN79qpZ9Y29635zFQ4QsNdMMLW6rCv3JMYZnK5q9z",
  "key9": "3btybQyDVCvQQHzAcRZaiqfpNwXtkKCFVL5jWnqygRskDHKT1Yzt6Fy498KHc8h1okNVgkjB4tdGuM4E5vQUMjzg",
  "key10": "59PS9W1e2GA19D26oDc6GC8EH1pJ8TrxUrBdTP8uwjnjMcnFHahv5PEo5QzFUXgGfxNZGPEJd1BHtjPWdjyp2Vvi",
  "key11": "M6PndSbr5oK2zt4igczZz33TDeX8vDvTdcdMEFVZWQFZ4QbuzYaKsyHZ8oYuDNrtgmmN13KsKpNdtkj6hYm4qBc",
  "key12": "2Kx7Xfu63xBE1xws9PWUsz8EJnHGsMUB4KmYSGNWyHZpBw9E8pEE3wxAhjz1kqDum2apFU3pkCbZYKPNQShPDBdt",
  "key13": "AQ8E4HxCo3MVy7hBVCVPBeXdq26bp1aoDnXBqfnaySoSKGd4pci5A2maMp1k7DLhWWvWbagRnv8sqph2FsSSyqq",
  "key14": "5WcYNkec66rxuZ3b4yQ1AYLpZXnq4GezRA3D8G13bJic6U6NajVTkThuY7CSee1t9VEbbzFbE8Yjk72QCxTTLuEA",
  "key15": "2bCmBYrZwCB5oqjPudiwPZcyGzFBAVvDL95K2booTZkX3bqBKo31CVLEwqhRryQzFSE1V6bBgK6xzRRcakjhSQ8v",
  "key16": "qkbFvPn1RzaDJT14Vyc5sB27Zt9wLwsuSN67qDajWivMg6cf5QuP9odauVq9gGRkrutVrdmq6JRH8VwNECEoydQ",
  "key17": "41TMHvCszCBUq26ywxgTHpzRRbWuucXvK1Y7ZBgmdBBHufhdNrn3T5UMWMQtZqjYNUoVA9f3RRLhgwLr4FtKh9dP",
  "key18": "3xaLH3U5uTBNtshcK15914LFoGQpTEaJNRSSY2envcAMiCh1qasiwtku7jYHvn5A2Gvzc3Rk79vV45ysaaKk6JHK",
  "key19": "4WJBnxBpqQQqxoPjuYBGtwuCMCmUt3avuommW4Ai69cJJcqxgm35naoQepfTojSpqNBGoD5nWXYVQVFJ98dz5Hmk",
  "key20": "4M689bfzvLmgQorYRpGuHCnVEFB7Phj1d5soRKSToGNyf73ZzdeCUuNu1NEC5HWr8cyxPc9C6wvfY9GrocG8e9Py",
  "key21": "Z1YfdGkzy9iSwEp82BcuFwJ1NfQzc2LGwnpHqa69riSyfXVPGGZZvs6w4kqA2q3D24xEjFYzdb4EguWbWLfh2WV",
  "key22": "4H2zgysdL7aG5J4Qexoci4sS4nPfd6LnT3P4wYEAM89SxvrEmqmD1z3BLCdGNVduCbJZcXnfyEPQaoi7u9dY6yLa",
  "key23": "3jyehFgWbd3iK4PHZERsMSyr1w7VAjizi7iQpnZAkpoB2zZ7kWd8rZFQWqkSrPH7jnLHQJRZTAnV3yAk4JQvNq2o",
  "key24": "4RsE2HESoDFnGvP4w32nnvkwkVbBNwwMpvPGgEr22kGc4XHasMsNnEBY2Z4eZxdcn25FUmynT7556ntimnvF8LRW",
  "key25": "3W3DG3N9GR6MEcZV9VTWobQnevVpbQqc8feSpqMWmioq75PiyhK4Tcb7hTTTCnPS8AXG5fPsZYiSP2UAodX6hBQ4",
  "key26": "p7xZ8RtoS5pVNB56c3VrTCn9NJgXik63ToktPQ7RagJgTDeLXBHe7GSTQDG3hTWfuvQ7WggmzkNxEXyT1HvTiNo",
  "key27": "64BCQwk7U3fwbPJkmCAGGTRUN8ZyVjrirYKbX11FhCnbGYdv1MYdrEwnhR59xCmosuqnhfjRpjAoFcaS5eiMHzAx",
  "key28": "hc2KNHh9j7r8jnmTeTzbKkAqhTSBSLzpHy54aosiMkZx252R9BFeczTYD8t5P4haw5FrY1HF7uwowTi2tbvKD8d",
  "key29": "4PCyXWkgN35QmUdv4fKLFsWVfo27VuknWEWMjFxTWB6ggNiaj46U58xcjWxM7NGgXRdhYCDfN1LGWbz2wfqUyXsB",
  "key30": "5HbaBBs2gK9kunHamvvH6yek4dHtmPQdrbfPGcmvGGxAQKnSL4vFbUAoJphZMXaD5TJrU6s3Bmh8xTpU1zfaKEBx",
  "key31": "4EJR2v3LXbvVavbDW75G9oDKy1nYhCbSfn7ZEQFPKF7HmbKk6dRVfVghAHXaRJ2Rwj2fXu71ZWVHaWmbxx4TybhZ",
  "key32": "2UpXsGoVqi4sV5tNkndWKzKMfejBsTFXybGBPXeZRXndi1pvV14FosyTyjwizTPPutzAkQDamAi9XzVc5yikN1LE",
  "key33": "2tof4zmLcpPF7aQG9iZ6FbvGoSNYPdHthimdMjo7byrLigZubkVLeECqj2XzPpFqikdCvkQJNGueSsrRduTnuVjb",
  "key34": "67hQow1oCLGToKV6Timtcymvud8sKQQsVC8SVabjzydHnuqsfwvUvz9X9p3yQbXvReeFfzXYWtzzeTqTmnCiMxff",
  "key35": "31UXR3moVHR4HftnL2RuSAQeWH4xjZpjjo36RacJfNLhRHhP3LsVujcUHwhBrTPHNeEodPQtaZm1fVJc5bnZNGko",
  "key36": "4SUd14Zz5fWwGP6YGKtnmU4LwrBz3SEBybm46wuJDcxCRobLsmexQTYRtkmeL8yoBqNqWLqF7pzZzytLdVQn5uxJ",
  "key37": "5XktdrGDjpQkCGfS1JfmJhyJLPGoW7UcUsCGjDVB9zjpZQy3FCSz4mfKFuH6ydhx2Dry2r7tEkme5QEwNDghKgG4"
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
