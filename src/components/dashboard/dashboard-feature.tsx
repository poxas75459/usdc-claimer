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
    "45TcKHT8w9muo6KXyg53pDBc6nxxViLbR2b7inVU3xk4LyEDMw83KEjejSRWPierEw8CmpDgN81SpNFGRiwxUAQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5585jULiF9R7hbrQsNCV5xgR52x7m4TCaZ3421coxSLJ8Akj3VUCnjDKWN7uyoXmwP2YjUVDhasdk6Q3vh4zfuM1",
  "key1": "4XboXV48GdZTL5uuasEpsnNofNbZELbzdnB5LJT9uhdZnuCs4U9Jt6PzhE7Hb8amUB9bGYfZnhb3duEQdcrDYi9F",
  "key2": "3hrvVjaARGeDXLHbhKghvz7oto88vWGpY3Ahq5nkenwEufN1GzqGpBY6jAQhgeQxQLd9qD2hWNNxHnGyHfowrvfZ",
  "key3": "82reHMJF2r62KTKhxahf7DVuPMr51R8zzdjGCbQmtix18L2gB5YUXaNDCsZbx6RyrgacD4nCM1p8LCVEwtzirAe",
  "key4": "29kabfxb4Sw6xJjSBxdNeMzbaYtUsySqz3ADZ7iPC7zBqGFn4mdXY688fzrG5sMNxPwC6yWLMCQfRphbER9MGFim",
  "key5": "45mrX52RuyEEHhR5UbHgJp7ZYtuQhbZj7hrVGWwuApPCPPgTVQTTmyQJMt4SaJrvz8N6jsZgZb6SJAfWmPXwGd3y",
  "key6": "2A62bQnH3tHdsqQMU8dpJrzgz93p6BV3rU1WEoCjxAQ24Kr7b83pMfYz3fvz3EQbWWvjTxvjtbjAxo869GVurSu6",
  "key7": "3HCP8y7iYJzLTvmv6FfdmPbbQe1szZdCBtB5RiJNJUtqn4co66HZUuYzjLvtydPDbcU3uahvMvh4XaXaj3RFkQ9a",
  "key8": "3gHb7CZCu1gAJ4sTEWxm22enLUBVgXSx2DguxDtvcSL8fiX2St1CK7FZtMeiEZfuVwbBzJiebRurX36k36QY68DL",
  "key9": "5M5CKocLvWXXajQ5X8MKu3qd5ANZbKodqgcVGgWMJ2cjsButP8SYHfHL6gxkL3nJW3MTwuVUzQWvzKmcXMUjJ5qt",
  "key10": "h5SVEpfrePtYJiyAbj6WKcnfVgxCtRNo3ds1TsU9Cu8TBpMKquSwa2wPc9w5om26zAK3eJZ2gtHSCHuuzYsEjNo",
  "key11": "35YvsGaThCSEa31XL5pb34nr2Z2scahPjvNtTx2h6RXyUoKpyXApi4BjeZfXWjHeeFFEB57TbxNQR8cSU73MS6vS",
  "key12": "3fNkFZYjCSp3VJztEnfz48mtC1fMNBqhJrPbqRxyjq4tjZxAY4xB1Lmhfua2ysAwobBwAUQz88nXQqgdiWmEu3Cn",
  "key13": "3B5zudzwPn6YBLJa9FH97kZVVGnSFe5MskxRQRzBxgjN1gV7vscGakVY1EUHdzh15wgNvMS5wymZwwNPyTxRXDDE",
  "key14": "2Vx5Tgmzo64mc6R3yMnDxUAGWoy1BFE1YCYCgX7taBJUapsQkvxpLfgnnbKLqPcfFHodFT4sB1Zibh6rr8BV75gY",
  "key15": "3upHCUX4xXFW7hZUScFVCwdVLg2hrrcjcmSzEp27CWzDLHfMX6aMQcdZcSCYkasLJT4f8Cf8DeUQkEHZPZFt7cMJ",
  "key16": "QuamrEsqXKdufCw1btQWQ48yb3JEUaTp2oqBweieMPbD4xX1bTfDKSVbVKESVoxq11uMrZJUTbZ55MtArCcpyAD",
  "key17": "4nSW67DEhV4nGPtGSRyWz94PwnsrTQkeFwjrKUfMdHKzDAECQqFiCW6UMCX8kG2kDgE5pStzXJDbcHzK9rPgcP9B",
  "key18": "5AtyEhvCQFETT8EgkXUJZ23vc98P77LRFTogWWfcBGFj3JmfhBe9CJHbpxXnzWCXBcKwGgUKwwkZJQxhaq285zWD",
  "key19": "y6d5soEUJvoyY8kPioT9T31dnHUVVEF6wcB2DAJsANUvMnyNcfyjNkiRNfc4rugAVmgAdRSPqJPcqoxtwoK2zHu",
  "key20": "3N56yKLJpLmzhr9uaUh18bhVsWLP3ns4ffqGEb58qrnWJTTHvqqR5RydQ2iKRcjpmXtT4nRrtCgHEpkVBFcmWneN",
  "key21": "3eHH7WxTgj6AaAPX8A8pA9WwMcJ1kCHJ84P5SoYNWuYLUeP9t7hB6MfTS4bQY8EAQaygksgW6UuWaU1WwpdPg2tm",
  "key22": "2MUYPNA6NHqzkof9wspezshhnPkqg4r9sQFfozGLuWAvt7uEFDPmuV8Jxob8q7gvTEf3R7FmpkJe45HrupuEztcM",
  "key23": "v2TGmYmEGn7g7kQmaAQoktdKwr258k2UuaqQd4yQT7Sfvk6Vt9gRZ8qHC1WPG6VyrmaPCadNso5TRYS95MrtLvR",
  "key24": "3CHXWz8RjrnKfeiNj2aqVdu9Zo6vLgrsSTiu7e8XzyAYpctEtTWiiXKLTrdQ3DGcxtN5J6kPLk36yjnV7seCdrJ1",
  "key25": "5Wq6EEuskQVQ1P1LrWGsg2NpMz9QjqCaAvtfz1dRUaq2xb8FEvRHw3M1C8QQcXv2cVL9kvCQnGuadWAj4av7excZ",
  "key26": "2Z3YZkEvCRzpLzJWVANyt2LiARGHeNqhRYhSVdVY5Qhr539nxTRMJKCUVmqxJpVo2pbiPhk4WPmkUvFJug3sbCT7",
  "key27": "2qnXtugxs9BjduQuG6Qzf4qdLz6eWp2rr9pGKojzWY6K7DR3G9TwqqQoLfrpQarYhXwLwHL87J1at9E1gSvbvBpw",
  "key28": "3bb7xadYNKs5AK3BLWNdW52ZaMf1KgViN7aJM3iwca1bDVxworrz2eR9UE27apgXV8VFswNVgrRGwbJkuGuvcRZB",
  "key29": "3BP8YVkk8k8YjY5d1RXPtL65outYaFgNvsNDXGyjAxLxX7HzHQB9h2dtq1R1ZtLVXqNHgziJJgMKFgzuD127mRFY",
  "key30": "zUCwXUc1AG9xBeU6wmM4vGAcbeEHCq3VHF3eQZDuURony55ivJSQYZWENAvoRbbRdNbaetkQt6Ryiabm9vgfp7p",
  "key31": "4rXKsZDig2MweRjWHNQAHQPj2HHakq4ykjWUruezSrGP81Q4hzwFyqw4fbKL5yvdXqQRPwD1ugCjWBnYgYWbeVkV",
  "key32": "2vbHELnM1JkmfeKjvGwGRwnQDzMeNzZehsh1VALToukmCFmVzZoHMQDbYQPRSVk5HHgGJsH9vjCgYcaaCvoaAwqp",
  "key33": "5N5LzbHU1VUEckJZrzwMdSfKY64N1NdW8rcjx5cfuLK5HGBJnFpfmfdxgKoteQWHUGoWHWEbxYidQGpTw2GKMQVE",
  "key34": "8fKWNJYR4aEzt2Z6XArFzBfX16wMuFoZpmzozBDr3hTNsa5t8qQEsqnLRMvUKiiGCQn4WCGynATEpAGbLyvETSb",
  "key35": "4Qr2FtwMDMeN3sYpbLhCivy3aW4mtm28yroETqcYKNGjKx6W9cQ3vL7koadxnZBCgx5pgGJsMezdCg5Npn4se5M1",
  "key36": "5o2tCTgq1wNWy7y4QBY9U9cmwSe92d9cbBrYiM6EaUgUzy2YQkQfBLYVfVzaLBM2K9X9FDW32MKqkzAHUwx74jDR",
  "key37": "4UVpToK8Y37x4QkGVofMh597UmsX5dDmnRLfyMgYEJu1Ayoy2pZgnMW7dQpiwZJT8Umdv9e1CeXbNqDUrNcj5Rem",
  "key38": "4dZScHrBVzDrbAtSKh889CvRXWXkbJzKQ3SF6pvnUFt2xGtPUZkNMoQXi13can7svKHLuL4CjXk33o5qL59x1Lhf",
  "key39": "4gamHJisPt1FH3v2XaHTcYckGe2a8gm7EYjeuSyikSc7YnPfWmD35HE6vtrn4rmfXRWYswcdRFQQwuxXt8MWotCp",
  "key40": "4JTbiUtRSa3Dt2vctpVqDYgTh7c91oHCTt3DPs2oaj5ZQLafDqZyfc2xwnzWHSULWTMdT2H1MwqBrRgiKwKEaZxJ",
  "key41": "3M2Q2APG2Nx8sBzC2vDNBY8YY3KU9wXyf5HSJybPFYutAnYnqBSTpRbbghnAcx5PfUemgn9AzWoX4vHH6vpDhsBL",
  "key42": "4Saef2aUTB2vNxAVbs1QxnQZmX8snX81zqVyRgshMpCca5D9boEpkQhZ5UYncEVBttczJ9L4ifEgTcW1szak1wUh"
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
