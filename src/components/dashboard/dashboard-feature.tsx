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
    "3wMbAQAzu3QHiiP678rNYTUC3EaYCw4jxQ8osyXB2BUdtcdkDmcvyCfqVkh24yiq71xxWv6ZYUxmYVJvhXKJFd7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cU2MseaJpvGt3Cx7YtcXjYSbhQhQjkTtP8VS4J7oZGhe8u4m3V3SU9MUgr2q7WLQvvep7NdGAuSbt9aXQ9W6kUC",
  "key1": "5A4BK4k7cd2CkUwjfwirBxFWV6WmuLCFPRjhMaNeJq1apzE35fCJjznQJtZjftCcGGPJnvEq9vYBgCGidWxF9fnp",
  "key2": "329dewXR7JUajygxbETx1htye5HXnMsZ3Ff5B6MiVSQ5qnzaWpybsq7YmBPx9X9muw3dzvCc5WN6Codh3ftxfHqx",
  "key3": "2Wu5mvpJoUFm2TV26AsEactt6jTksBt7YRprT7fBr4mmo2KtTVfGakwYyN3EDiA8AAf3B9z4b17QbRKYgTYgPLqN",
  "key4": "4TiD97W3pEWQmvMy6vfW1pxPQmaXNzxBoVkAhi56XrQmk8vQQus7KYLg3SqKsXda9T4utH1txzPxkq4MiQa2qDt",
  "key5": "5D6xouKgVZPppx3igez1DFPpokQm6QymHQK9gVX1k5c6fUEKm1QQP4s356xi9JUy5j4wMpnWZismVjeLzcLRcieM",
  "key6": "52JtTRWbPZrsy2LFffcwp3jNdximuxokbxn9B9qcTiUS7jUSjGKaPLZa8X71yYqW1Fs4QRxdvhhSgQ2ReDykCyDQ",
  "key7": "2VUF6vEnCFnog9D1K8Z92Ah98d4ufNpAxfyE5hBdCacK4gqgkpY5Hce3VqFznk591RF3NziXLDrPNnp96netfBm1",
  "key8": "2XNQ2Y7UYL7HtJitHt4WfeKGwZQHxaW2fsQUEi4kmDW1nzBecUtvtqJHi1dmJ4DJLFq5dE1DJAgJRH8yMGXuCgsU",
  "key9": "3W7jKWj3e1SzCfParnMvDsZmBjN4ikshPn6xe2rtzrWNo9L1zABZMuNhSxH4tEcCoTJNhrvwXf5Ke9FNnAec9M3a",
  "key10": "3VGzgkYtPWNLWoQ7dXKUoQ6kFtasNDt5dpZX48PLLjTSaoJZudjHW13HfencNPcLCb1FcqnqnpKwVgcEBZw7Xwht",
  "key11": "GfjhFou6MFfH2EheigjM71Jr6aax24BzQFKaMEx7uAfxBXw8y4UQHqWSYccwvw7xJ7SZWrKATr9Apr7nxPSuZup",
  "key12": "GLt6hvbt4Hcc6UKsC79Wj3pFajYVsr5FG8p7Zh5KuQxv3kkGjNgdobYLWsHZZKHq3k6U5p7jMCzo1G1iZjoMsaS",
  "key13": "5GesBUUWaaBA53yXbAfLNanpK7AT8y9RJhG69zoLVpcdmwW7YXeLdfqm4oRN2uB69naC9QTV4dJuWs5UQZrm2RJ7",
  "key14": "rzQvcoV7H4Ae6ydzKbbJ4vBCC2dARhzoBw9AASxTUHwJ1fkQbpkQDZw3Uo5By5hyiNEWdqUnfDSS8TzTnKndqSK",
  "key15": "3v939PDrqxkZEDSZZy6T9gJTbXmdHUUpDCNqKn2q1v71aPKJgjyvYAUxCirENYSaZ6Zn3hzkrUmNRtBwyPWA12UP",
  "key16": "5AMBpHMTB7oPTVVyujBYEzahvoVFJJ8Kct3mxTa5yqZNqLwm6o9pbv9A4A5umNY6aMFbNUqet9RmyAEhV2YH2ZW6",
  "key17": "2MYUrFAQa5sYpA284ZLm29AvhQX4MmdQh3C3hs8T8Fa2q8RJMR1EbsVMVZUckX3Ra9JK2vkEyoYMZpj3Av6UhYY9",
  "key18": "4xFznXkdoYfdeHFj33G4uddBCenSoewkAdYRwxbng4R5pxVXPeSTir223P6didbPtBq7DoBeGFMy9oNbBNtNpXmd",
  "key19": "2gjR8ZxRV3k9bNTjexnzfJjPMSz7nYgK3oK4vZRxdCiRzzXxdaaESZhBtiqzgsJBj3uoJtQhX8s3f2GTCLRNL4Ns",
  "key20": "3kpZbwmAgbsUnZsmGgpdCiZbXomS4MbSmDJL9JEgseBxtg3W3Nhin3H1toY9tBxLyq6wYXokRYMPKhr7KFN2Gqxo",
  "key21": "2tYvSL9XrBFJRqBrphieVb8D6BDgNLAPibCc9aL9N8rgKYc8M3a7vE29Bn8ENQjjDT364gL5dHGXaHBkpxTvngW8",
  "key22": "5spVd9wj25TZZ6MEAhLVPWsPs457t2UHattQrudZFooYDFYXfxwbswkr7g6HzNbyY3FHk9zo8we9ihp7fL8Hmz1x",
  "key23": "4Qxu9aVgzbhSGXef8px7SGjDfnWXMztqWDggqT3KcudnqReXywo3NSMmwSfDm5JJhpjCHkDAU7rBk3Ms8UAtetv3",
  "key24": "36nH3giLQfVTA9x1Vdhbyz5z83jV3kMrnTFxJ48G17ckqnNY2jc9X3XpgT8PgEJLeRhyUW1FC2PsDvPx8ARvwUPZ",
  "key25": "537Z8E9nqDgmwdduKBP5u1wTRnMf6AFKwHVpVdxkiJRvVxvaT5jZBaM5KAYvyHwBKYGeSvgUG1CRR1yR7NbLEEZS",
  "key26": "y6cQ1XuJMY1E2JVnRy5fcxZf1nufVWLVvmD1XUCPszzxHCnpoJhL7u7VyBZhM7kGoh92it2sG5LnvdQvC8ArADz",
  "key27": "267t7jJGjYu6uDqmTRddygGTRzd7tYrtedkXgCJs8SmvQcn3BxbZZYsJCVw6L6jwyQYYmZBYwZfLRrT4tsGgT968",
  "key28": "5uE58MXB5UixdvLfG4mSMmNjh7hiYgSJYaVv73YThsi1fQbCvEbCsdnmWyHuZDdVqFWVKRa9zWDgU7VUvicUK8g9",
  "key29": "2zGWPvNfcqSx7eGEbWVdMobmmCR9FvbU46ApmdqZYkcEJPRsQeVY4QHZG3hyDRWe8VDQH4acJwKNjNr926znGom1",
  "key30": "2fKqx4dKtqCfTHxKQzZoVHpoTwYRijKHwnDfZF4Ng7yatnUf8ptx1DdaeRg9yU7DkArv6wBHx4cCyieLuanQQwEP",
  "key31": "4UCQU9QjgVqmRKwZcfaHdhW9rF2qzjZy7qfs56TxAxW46kwreFHAqLMRH1XacRVwTLWvGBGsmFgJAM3JkiqMSsWw",
  "key32": "4yrbLMsxxvsHyaqaQXsDpqo31KQwNHgyWiQ8PZVaYmenhXkHMz5BnqirNTzyxATD2xRdAXrMfUnn9ELmoSMUghKK",
  "key33": "5JGbkcbmD6NNQPi283kohoM8VKyvaK5jcoSMjAZJawNHGokV8mikd86PWN2UF2dLKcXUv67G3g1mogkdnM5DwakM",
  "key34": "3k4SoUxFEJPKUCkZsh6eFzUFXgVRHwC9u3xva68ThNuipJqYY9u8nL7rDE5NFZuXHqkzQ5uQBGnsG6FsYwR9hNtD",
  "key35": "5Y6i6svBRaSUwzTsJHV2EpYt2b9GxfJUcubCHkv8yUQpWzGmveDpmdqxuT4K3m4HBvw3VwHFwpJZPXGw4WeZbLr5",
  "key36": "4QxUYnKuQe7qesFZiQZRuzYN6DLnF4kYsJD9gSsJX1hm4evqmTw8digp6rMputd1jP4XPHn8wA6rPdUPuVYXyMKM",
  "key37": "3kF5pi2zpGR8bg1m9kBGTa3FTA3bHiGpFZpWRCU9N1NTLrgnLSYAPDUhimXqrjQa5f9xor5BMEA6sWFE2CoYK4SV",
  "key38": "5LdcQpUJ7Z7HQnZkc8Ls4Cadjn2FRgNeuNA3DrcivJDjayX7nRBB5dgysS3QMQ2CZAiFvEL12DRRK7BqR4DWh56Q",
  "key39": "4eFBwQ9vuzH8sVrvsafLHKHLbM1a5kHosnK6wayfqgWtpA57eYMiT5kFHH2qUSj4QEnAtvxeB8S2DdFC7xBuMJrD",
  "key40": "2GP2MfZE3UHfwQ2tdeWgrPk467gj35JpA9HExJQBzjZyZQPT7DzbNfWBEkJFAb9iLqWfzXCe1y68XhBMjiDmiFcJ",
  "key41": "2vw9BpHdngpUe7y2q7uUJPyYVxQ6YFdvpQeTeE2BkXdmhwVYfPkCTGajjXn8TMvLh8Fq4FDFP9T2YpJCKS8qifc3",
  "key42": "2h4q4NStnfiyBY745SdaMzroPo4ByWnzbA6PF2EwWbgnhEYTCwR6fJ7MuZoQgY1VMPMxEdqGf7SUzYV76Yspotak",
  "key43": "2PRLzj1KTbUxiVivzPy8LdmKAekJqb7MHPgtimzLQtnDnip4zBdnAP1wVZmvYZb4jKAXJjn4W5edzpPkFnpXK9y"
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
