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
    "3NK8K6Swxq8xDmMCuxU1AwQKwwNZUSKE8tEPQ95xPSc2Rb2n3G4HkiWS6WGfYE3VMDWiixbtgL8T3hinNDSitWBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7nvVyLY5AEr8RQYAGMdW9XJL7PE2oN3bHxFBiV8t1Y5wyfrpqP75DCPnaVtMC5zvUUm2yHXPYooJHMs2E73Zy2",
  "key1": "3XWPKeapzEJ7YkwKXU6NhNpsTAPSL4jAzW7v3fTeN2ZHiEHhHf3nu1BTznxRD82HzrMLeXUKpkdpsZp5jJLLBqR6",
  "key2": "3ULdV3qLidKWw8CKzaoCHvu9Z6qeGS1Q7gsXasz7s6BTGUZTmEiFx6xmanCTJgcCFsnPhFhE367tz4cbXxWX3SVX",
  "key3": "KxXe7vE8rrxAsWzCV2xUcY7kKy9Rpi6r2Ha8P2bZMZzDcY9rXHU5sY17uRZ111SLUZ8Lk8TeGUNAQv8T8Lm3Q4F",
  "key4": "5ydNBiNrA99T3MEHpmimNibM4TRvjw7Er1qukhrUT4JmjjtNmWjZZiM4H9HwP84MjjRjHNQsjsUAenmNyJ65fhxC",
  "key5": "2EVgSx4KS3GsBx2RsY6Uk6W4YpWsyh86WYWd3eGkrfitMQ6ymiJaqAJ9Uvwdw3WxZvPAfBwfc4y5mqYK8SGGL4Di",
  "key6": "2ePkmDHdMDE9TjY4tDVaRNXqEtjX59ydTd3Cc81ymVQz7TZeiLJsyQpdhLsbrHNagjU9DRU4QgFVu5GGCJNbZYGL",
  "key7": "2er8yh64o1PLDPVtmEEtWkXkp8agvD8fhh2Ux6zcNytCYNSDGNsEwiZLs4g2qmS9WpSuLaidQcZgHmjXj2zQumkg",
  "key8": "2nXTxom1JJmkk4WwnaaGjamsNF1s6KcMvDUV3pHV3XsoJLTsjgVatMRbgyUZiXobqQGNuQC4JyCo2QHAYgmUA5eJ",
  "key9": "2CrPqJcUZgWVTTdW2i8RmH8P7cL21hifZNJH9XMtPy3zDeF95VMLGd3mcUT875oqqmBhrygmQ33D4VyssGA1BWRh",
  "key10": "4RaahkdTQD6Zw7EgFomAycqUNBPg9xtyJSvExLNDZdABjuqYVxykUACx3oWWNVsXgffDip7u9MtEHMGnQuCEzbZr",
  "key11": "5ryxkcQjCbsjeRAPWV2YdpmNnPMDd1hwmTWrHZpDTPo3m6Hb3WPAUuAT8mBrZ7EkDBTkEAwhSqXsRN1VjqS8FkaC",
  "key12": "5HEcnWmjnjpvbe4HwrNT48N1jnhNXHy7xw39sDP4LJRJxrZmNFhiQSizXmGw2sQwAavtaYha6WXuAsxxmL5XFXhT",
  "key13": "5r69HAHw6VLuaaCMaixPmEhJtZfNqGWv7EqyBpprV8ssmNrUCaTdUu7EBfxjzqowtd9qUMQByEgoHfbKEvKfTzgo",
  "key14": "2yWnNCZGYTwvaZ4xmPtQM5x5DnXDVWw6AmQ28Hkjg3MHXBQwPht42EWn8jQMnpTtEqaeabC5SFkrxnwrHza7aWfi",
  "key15": "rzKkjNkEfi8iYzEaDVZbtgL2DiMrhJXquWKhjBB23QRbiMwz3UMJztqUtqb1JXfSD4n2q6sLaFtpBm7HxyvaqRA",
  "key16": "4CwYYzV37VVs3wD7pi8t83YLm97ZcqJyQLHp63ywFXanGas8SyMydBCCkFiqUF3pupvMW3fCAYHgW3uG9WbxM827",
  "key17": "2oxtx9NderDEaZduv2TmzLCwTSi5Q245ojh6LXF379GHstPmxgN9NpkJCZ7yhuQkwzLX7p2oT7dt5NBenghfNWzX",
  "key18": "5yPy8nC5s6qfYH8wxwAoYdE9TUh3aeZEBx1rYZiMCPChWCgoXXLeEapKcKXdhLKFNbgMVkbqjGUSUesUUJJaqCtH",
  "key19": "5u1BewBkCL2GwzA6U5d9WSoc4yz17xw1QHHfPtpc7HwSYSpEKcYirmx3Sa5SEgdbrE6rcorUV6BM9rJDceTzREzf",
  "key20": "3Fw9whwBann1CEC94WghJwrKE1CfzWo4MWSHiVcNKcRA5hULVr3ygFWTyExi9i28VCGjWugEvZn796ALDAiTJCdP",
  "key21": "UrZpKZUrQgyAhcYytgmQZjy77qVWW2g4SqdTE3Bp4yeHUh2aRZG49DeY8i4KdAN8BjM7bFWNMk6iK5UTA1TJ8ih",
  "key22": "4bqogyRUSQzQsxMewQGtBnFWxoPg2u4xeeVDn4Ho1c7EecftfrRCKCdso2YSeDisxy1pcfcS4LyXKgABtBiY1Mo7",
  "key23": "5f3562YQJ3E2QV6RjhdpveUoHancKdsf85X2CdMVVDvst5EgbZAuTVxMbU3XqChLTDYr3jPUpVk3wuFHTBeRS8CT",
  "key24": "4n9UoL5kPniUWw7po8xY3hG5veLsh4zdDH4ZPQpsdP1F4oecDW3eWgMzxu6w66GDz1wdQvEhS1LJyxB3zAKPwiBW",
  "key25": "D6M4wtjX7EPU7p6DEZfzNbfyyQ2boDA2iQJSc5JqWv1ZvU9EJJzeea8yocShK6Wf3q2NWHtC1nLLjETvUYa4PSZ",
  "key26": "kTWp8c5EQ5QUcXgwQihfDchV9C6jVTMwra9S4sskr1EvzLie4pfRiqjyS3Vh531UGo2pJfCN9uk8Gsvd5Lk8XoK",
  "key27": "35J2DNEGTFRcEmz9nEjsKq4PYt7LiYhYyHkdGhmaKqQRfgZDcfM8yfvS6c8pvwErkB6PHJbGDPVbjPwUSJqAuFPu",
  "key28": "3SH6Uz8jiNJWUzYrCp5sc9T1hqWGr17ACpsrbEL9HYKfZH1hp1WiLtFh3q7fL6cD5DXQRkp46HuBYfY9W7UerVvA",
  "key29": "3axPWViRHaEzzXtqHahQp85NHwoVUkt8iDQhizyaorCQouAVBuvQbXxY7SUkXbDzgV9cJfP1uakXz4ZuXhipj6ZL",
  "key30": "5yhhXghnnCYbJXiV2QnYoJMuwAqKFJZNbDrKA7w1bs69wdCQG6kxD5epjtPcyjFwTgPz5QAHTHF2Lxnh2FFfmVDT",
  "key31": "32ArhnqZN9FWjBsd2UQ8v7eK5NzJHZKS5JpGbWrUwNTfdqxjDT6Xqid5Nq4NbtcmnFUZudoEsPNZvHxzZjHKtGyJ",
  "key32": "3pZhG7g6KCVeM3qB6m7w8Jq625h8BXzsbnyXZs5RVKBjaeMDRqjK9t1aWyFmpDHuTCjZhV63CDodktRkFzSJD8qv",
  "key33": "2DHkV6DWPZ4t9e4CejXUsVFU6T1xDNT5xAokP9jVygmfLUSj61QxXmCcP5s6q7wZEGbrsDUqj4qsnDb6eGgfWo6K",
  "key34": "5JSEH2VGn3anemsUZRNywLB1bwV1P9FX14KdmvoEbhPHqk5qU5fwJ8NTLZ8F6qDdVXFSTJYwPav6Pn8T1xXpybKX",
  "key35": "2fsDWWW8cTPYwh7uTaQcwx6gFwk7NmRnrMkty6Yd78mzRv1K7kuWV3tNbdEZR4e6jP4Cg9V7su6M3zXPvS6x8VSS",
  "key36": "wdoJb26KNRFmydYUzwdxGdvPzAVWcKWJMt6SubBaJ3pyNcC6xSJ7zmcqG7LtdUcJbEFmgLCt2jrWcHqTfHCAp3q",
  "key37": "3Ljh5LtJ9k9uftkk8uBknHuKx7RtTnDdEZf49KWjgNVXvXJhmtcnhxLj94cgV7XKTsLHBA6oiacDfrP4pR2kz33W"
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
