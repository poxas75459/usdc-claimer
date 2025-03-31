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
    "Mug7HMKvGGYndbF2LRLKFzfiVvubcaFwzaaDJMMujt1nsdgo4YGL8WM2ihyMsMesSCLKfBkZSt1JdTKFDR5fwLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5D3517Me5iZLLgUWqhJXaJh6KQmbS4LPZigvci31ErFz6S7zkQu6mt1UDy7pgGMBuoZduYAYGQD91dkJn6q2Wo",
  "key1": "2q9ymY1eitQCieUrtUBz9CG2pTeFnNfuxZa4ybf1BqzMNPUC5CQuNw6BW7tbNYg2nstYhWUndDUEFGcSUPyMtfKE",
  "key2": "3yGt4tk7e1RUZg9rNwjKkc2L1mNaT1AVg1nBh47mwsQhVKg8TZ6dfdN9AsJioGjrzDCfxHRao84SjYUJ2Zm6XQ5M",
  "key3": "2hPfzPjjJ3X2LxMqkgbjFu9eA1bNAe5TmaaM4zgy9HcQfpspaDrWQS5oicvdjqvB6JNreS5njRi4zXnUhcbqJTTt",
  "key4": "5yhx8ChZaGD2ZqgyQr2c68nYfsSg9sfuFLEgGfjdAn6QK55pZdeBjXoC2Z6bdVb8ALcf1NaB2Dka9aYXmpf46WBC",
  "key5": "4sqj9ZoMNnja2udF28eHZzG9EWutYic5fRbX5X7PjdRZxJWvwAMGKWxUcYk2wavVnULZ9uH8qWT4mfKvGLyn2jM4",
  "key6": "4PMmQW9o51AedMmUkfKod4wDEuZfD82nUB7RcdAS3LPurEFxFASmu3ssbeQcB7P84roPa9eZf9KfCYci7jEiUzb",
  "key7": "3WLhfzbW2SusntWokpuwxbEeiQh3wkBGvEfrCA4ingpiFcmPnv8Frm6NEKbpo8iwe3ZZH7eHhigVjoCfTtcf5anE",
  "key8": "3KSJ4gjJ7t8tj6TAAeStKWj46a7NQWwNDQpUyq7Q3VXa6fm7an2i2vqiZDDH3Y4Wqbn7pCgjihNYNAp2MDHpnXKM",
  "key9": "5dNEH1zepQLV7vEt8FYG7jHhbBaPmE7NP2fYKY3WuuQ11AjzKWwkFGYREh5qhKezRUotPwoFSHXFTbYdV5F1hfR",
  "key10": "5VZ94uaKzdXEgJ3edDByxYch6eXbbjJS5JKmJ8wJLJCokoRVRW2FxT7np9wBn2NbV3BYjQLdMYgpoybMgajVL7xq",
  "key11": "2p7YsGMuJB8YeFypYSBZY3SwkVCLvzZEK6gBHz851PqgbTENXQaEf8zHce5ua42ZHAndfhhTbjkqKuQ4Zh9XT5DV",
  "key12": "4wBgzjegSceLE1ygF3z8mkStjjPheqkzh6DhGuTWzqpMgt5zXGCKNY49xvpMQ2db7LJFgkmzLpqKc6YuhwDHZwRi",
  "key13": "22NSS1jWdk7u11xiUjUz1XQrf6DSmZVsDaa6Y78c4Hbeg3qTL5AXajjSJ7fHkAc2SizWkRdnaK5ukTFKHkMtL5dp",
  "key14": "35Mn42KqQxCwduZhSutnWZ53yeuoUJQpTSn2QhXC2bjY9XPzs43sqxLrjBDstjNabQjpJnVExEEDijX1MAyDHkkd",
  "key15": "WWqjCDdLwWEaGYBntx4dCFpQSYC3baUXQZCUouzwVGJKqz6oScRXDBh9Gf6EdWMEJ3zHQPXtzy5u7Aina27is9k",
  "key16": "5DcpDy9p1sDdWmgknh9vA2fRFiGDFxYuVfYDs2XJMU2vS7Yz4X5AAKgvCBCu8WUSGDgQAPN785mQ2thu5gzby5ws",
  "key17": "66PhVWQVoWvuvLTmEUp6B9bFbdTSHZjTn8QzGUHhCyWN7R2zK27nVAY3JMq11MuMpBb5s6EUwi8JM5zPxMjtW8QP",
  "key18": "3poSzLq3Jfiek8aXTuhGeHNbKUaQdbvA1huokr5FKHjS86DPQPtMmdNumLXHNpJ1kKpbGAqDQQB3kmnvHsM911QS",
  "key19": "3udA83VkmmadbXHksiK8Ds79XESXqKvU6Y2hfzeEj5iAsjtvHbTcHzRnUS8KdCUhan9Vmtb43seFZA5dYH2iiBVf",
  "key20": "3n4GgppZ7rhNC2XvAe1Vw7hyCRGu7UxuC9B6HzMgE78UfdZUMFkwf26m1q8WfSjKGYvnEgihujbdFLuvc69YbpSj",
  "key21": "3E11okrSyHFuavjFaoxEJUS67zdY3Z31EZ6V3sA2W6JSUoqs73XBe6hx1aNkedq1L2SwwLiejs9huDtrGz2xCCRP",
  "key22": "3KxqLQDYBkf43f9MhVVyXpc14p3K1d1j55zGfn99R6SeU6At4SmpfmezrFuLmGhJcCWjH4sjNPVDzS4Xj5vwmw2h",
  "key23": "2BwozfJB6htfmrnwetLKJQ2LSTutnK4k3bwhFFTt99cUFF4HndrgVvUtXN52Q25F9eg9EFWyEsqWLzTHG44eczf1",
  "key24": "323XTLWbQzSG3RouiEL7dJbRUywXbox1zTv543UFUGxNiBpjzRDteG1MAcx5LpQktgVp3Xpi8aHwMhMcFJXbDQDD",
  "key25": "4na1Cu1PYUHhckGU6ctaYB1VAyY3kW38B3wBTBDf5khQV7TuQPdu9wuXerFeJf4x3jksnHFEPS2qodYJWtwwt959",
  "key26": "4Ev5Ft8YW47UhEA6QSC7u49TwSb6L8CaJvBZWY4fkBjRTk9L9j6kshbwGe7Ke4hwzv4ncsZ9BPtVkZ2rBBW5T4bk",
  "key27": "2kHBUNgoryiQiQrzXEaG2SX6htCQvoVNJAsp7dzjTPD3oQ53LHWGMCGyfWsxkfncsekSCpf5ZZZoFQBunKFgcEp1",
  "key28": "4eG8bThH9QTu5cgSPKdVVV4rXhFfQpZF39hjaxAJWX7REaQDe3rYMYR5VXwJYQfBG99ALW2hWeQ8aM7tHv79PCXQ",
  "key29": "8ey5XZRhXz3zTNw8CH4K3xSgKfh2TYkmt1KvFmAbQa9EeigDsP5Ph8LjWn4M8M6UcQTcw9RVSxWgUPhUB5jYiNb",
  "key30": "4fmXktso8aFyS2JtSTKA2vbbUA2AsKRydaeLL596XS4Ger8wSnpoMKKJLC9XGVa8pEmSDABhZLRcn6qEs1NLVFwU",
  "key31": "3nYtxHs9WdTCMxPBEkstuJAzQeQpgiSDp7hZpc4jKCWd1EbF58C8iawgzLvUJgFx8R3C7DbXkcQPa3HNEGPtw1Uj",
  "key32": "4brUo6EFhtVdLadxErE6L4fqauzdi1Apw6Q1Sw5dGLjPsBD9Wc5Zt6f5i68MTiMuRFAuoKRZkxiJEwN7T7PSNTyT",
  "key33": "3Vsi7UkmPDVf6ikQZGM8YhHGHrFSHMdZd3jivrBVyP2K9J86sC585rbeHX2iJmpw4JPkfZmCYqv8ddDqfiaCKGA2",
  "key34": "5h5tk5mSYWnvkzvBHZFxBGMpWQT6EiM9J1CJMJG9mLt9pPCFm2Q5cLKGu65eEwW7isn47jD5DKn6moibTxYpxZry"
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
