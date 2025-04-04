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
    "22bXFYmHMwhy7A8wXZBJV9YdYVNkBJtRAGHBdUGjD7sN9zvk3qbfsgsG9R9ywGtH19Yy9Y7wQa1vDNE5FkeTJmBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npdKQXQK4uTxrhCM5Qg4mXwKhshb8bcHsurxW5mSwo3Mmiy4pToPWYzr6WnrF3Vdft8mexk6XVA8qN79kLCqzUM",
  "key1": "34R37ikiWVT5FhvG9qhWAamG2QsyL1k7VdAvnE4cGjUKeRZTRceW2DgiaekPBTBLQ9jFHqRqnRyd7NdNCcigVHU8",
  "key2": "31gQeU39vu2LRbg2ydB8tqFFvcXEcGqpz4nE3Gf5RdwrDCA1PukdqSWzznRvjRFUi3inzeVtaFpSxRsFhFqp1wV3",
  "key3": "66i5EURt3ahpTaC4r95hRjNuwcGqgBTzXMKMFPUktGQineeJTrQaaqXJoQtHP4yyBEHchkP6KNuFy1FLGJdVP9XC",
  "key4": "4K85R7Y5kEJfjKvShWdKjEnxY9GeDCUswW9h8XTD4m2Uw6zM6ycLwCns75Y81x9CMLbzfVo7qbNBu6wYEt5VFox4",
  "key5": "2TdjmxFYaB2h3WLhmEonwT4t54SC7SsYo1FyQqz3jaKZDt2fGw2PpUgpYQGWBvEdcCwZxFAnXxGqeYAeYKhfLAA",
  "key6": "4GSJcV8w9K7tzEy5XaRJgMivXQ5VdjrvN1eT9toUep8M3QjCeZsuAyyx8H1qt888FApB7np8Q3wnpEaKpRG7LyGB",
  "key7": "BY3UvGWgQAcPLbu5Gsa2NPftR8jcZmaeSEFVM3XT1pjG3FthAPF77i9XxAaJ348zzmUkD8R5bo1MLHHgSJ2rmf3",
  "key8": "fzN1ugvwRWwCRK1WLAgjUKQnDWfpPcY4ziyzGMa6mW99a7BkX7HGVEJL88EPw3VzMV4nSHRaGsVG1CbQHQxAPgY",
  "key9": "sBQP4VwKe4YfvVEgLDDDNHt9xho1KPzGTFU6bQNsbD6PimvbAo2M2BkB5Lvr9tMrSHxCB8JkrkR9e7x7YhVPTPJ",
  "key10": "4uybyHqfLt4hCbqpysFq4VEgToXSQtZcp5mPk1L1DYgqKqu534ZWE87MAeJjf1rEHHreKBQbC2wcRFhPxbr5aw31",
  "key11": "5gcpaxSDNJh2wkn6fjk4peeukuWLwZRa3NyBGC9eEgnhSz8WUfczPyEhFErc96t3RczK2JYiko34jGgTV4Pc8K5P",
  "key12": "E9Ht7f613iAfWPUrgk5VbwuQjTTsFhnnAvtTVMp8UmZGRjTLNYkh4qQvZUAdPSZUoKg2eYwEZuGaKA7hyQLvvfU",
  "key13": "2HL4DKpbJhcP4qhh7LyP1txeJVdTqENSFd9rN3j1FWD4zsBsrnYUyeqHtoCaPFRNERpWRTpRdQsN52rdzZvHqxBa",
  "key14": "4LAtUk7zJe5xtAfa16gLEqT7pdoju9CzbRXuG52hfr84LcdLxV7AZW3hJeKPV398Jp2nFMKh5dTvyk1vQnUKKA5v",
  "key15": "2vWBWSzcp9jKRrZ3hvMKPHu2na51TM2Wq4YDA55FxicDSFSR1igqV22KDvJMFoB4cQCScKSc8cccpo8vSdtMekAj",
  "key16": "HgJkuV9twkqy1FCas3yreJNoeqNY7b1MVZBzc7XCJrQmy3jaHz24izoacn4pUenebtVqCEzq219kJBijCXrjiya",
  "key17": "2kb14rvLyweApiWTGz9qoJSBEbyg9dVDkkwVbZEWVxspq8FUJMEsRa74tNxysQFXDajjY939mTzR4y3CywfXN3hF",
  "key18": "5BkfzmucA8YWPTLnKxzeVD5vESZe8Uk792TKyRZtRkRLMuNqvaWc3LXZMgfQZT51xb2E1atpzimrkvkCwf1ZypJD",
  "key19": "xNDwXtzZXMRN26qqNN6Crwg9onffPXvwztwENnFmyE5FNoBig7V6Jx7qQq2cxnL1R1VhxiDw844fjpkWZm3owvD",
  "key20": "2894qXCc6yTBU9cWRLKhvS6i83Z6atKnEf2QwustHdhuyg2NUX7tDALosgKxJyd3VpW67QZRDXUmSNGJUhwVhvVS",
  "key21": "5oyJU8ECQc13rog9n6eJU9qYA9XDbqMPVeuaQuHSDu2MbctBcgE7TGWuNReGa6SHZ4283eri1etR9hDPsQQN3XRn",
  "key22": "4Fe8PdnJ2m5ou6Wns6E71gdg4U3mVtktsMiWZHWfJaBVdUV8DoH3R1PjnXRdXF4abBeAGm7C92wCiPUezyv5sHYf",
  "key23": "q6UgSbNc2HczMnvtVLCkYDQUr9sVwqNkLRNWU9icBssFNy43PVGdzpCWUU8VB9J9Z1oFxsyFHtQ3B5FYJHXfH9k",
  "key24": "3S6LZzZymtV14XLKoUQDx1hj2ZF7Sp4ADwYnS2yNiiWnUx9sTYqNTw8b9GvdAWLig5Q6674WTaM8JextMyUq96n2",
  "key25": "3CF7AUFic1pBv9MJc8hQfBqma4HAgMFfssFY1tGDpztUEaGiu6nYtEhtVbzzy9vsMk9wuLw89CQPb6fWXxnVDAEw",
  "key26": "5EUXccUJbgW7j4DT57cjQtjnf8ftFGSgr9Dc9dV6qgAmVJPceKz1C7YWtLuv9imKnfgDWAkdkFGVqPr1HsJK94jG",
  "key27": "311RYdVJVtXuwK8qEEuyX3PcMtNhd97ZYkw8RyHJqbzvosmeiCWmMg7MTAdoGLBTBhhg9YSXfhphSMo1xGSAqHMr",
  "key28": "3PEYf7SzCw9JstiwLGPxdCcZpR6nypnz2dnrFb3ZaptqQAQ5BMtWoLnxUsQAKeuopRw23vySmVyzYHtWbQFDERHb",
  "key29": "4YQ7mS6HwyNgnk34modToqWPzTFJPYevU8Qz9pP182VrxuikJP7zq4rrjtYVTcs3acxYPqvQ8Y4YUd9YucQS9pfa",
  "key30": "5jnamob8i7p2TK5ZxgGheVeP84UdK3p1Ge2FrxpADVSDXZ5oHNVDP6sTePNTHMc6QHwsB9BXQrNJzWJkEb92jFqM",
  "key31": "5EeWutncfS1ovnmSiVfp9nppkJBJmGXP7HM4GDy49CaqhUQMyWXhXf2Q1avHV2eiMx3Y5YbCy8w8Mp1pEB3Yh564",
  "key32": "2AuZobBManVQMaKCArpKQCjcG6FNZSarNp5tiKizZHQouDiNXbsX4ovPbLvSqZi36eKXhyPTKiUeuVpTinCEUAP5",
  "key33": "yUuLHYRT4ZR28VAF11ZAdjtQij24n7VhBjcgL2QJ4kaBvtMAkjwuzwJpruNfBVmWZ7CtbfNVtmuinABHRNjGE6S",
  "key34": "3yMdUtJTmyWZDL3S2Uzxj2DKkoRjD57o9sDpGNa6nzfDq7vMAYdXNTY29QajzaTgEnEnvxfLL6XowoJQRxYBUwv4"
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
