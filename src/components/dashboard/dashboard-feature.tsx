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
    "4ctMp4tfWMo31yVeMeoGWkjC4VZYpG49wdg8sm2xvxhQzKfJ4EsnEkYS8QPiTTzeodVgAtKGMgMSNKmphUHrwXvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mf6AFtctqyE7iXVUkEHzTUhn5MGoA5TAgMKCrGtVFRXhb4Qg6QZktLd9zrbp1HcVsKJwAtesB61gMBrweMacCAH",
  "key1": "yfpLfKhtU9eJ5RMRJQ5qkSMfQBxLSz3dhueGqCe1vgPAT7QEj9fQkoHTtf1FqHzsJFfPqYmkBSRP5TBXLPsc4uN",
  "key2": "3t46vD48KBZpXLtmr3WnhoGAoM2xnkWkqbhEzEpZDnR4onQr8AkWhtwrzjrtzwDpx8EKSEAxz5JNCMCB4NsKxvmA",
  "key3": "25QuPfvXb9iJQ72JmQFifLodHGqmNpfjTtUmoGg7gC6F1pZLhzLAgxaz9wWZBruNAQz3k15NLArkponiUmRPiKfu",
  "key4": "ZkJk6nx2h1weRTNQ4kQ6CJqxCWNGtugkEd9eLDC4YY9LKZXcyeXMrxjdgHp15Rz8gCeZc8XGK5kppBtUeJTPJGk",
  "key5": "34n7TuKsKXXt5ZUCaArbpkts3FE2TSEqRhqUtsjSc6LzpQk3db3Mf5sUv7a7fRT4ubhG5aSKtjppVxrqETp5rY61",
  "key6": "5NZrrcfUZEN2o4Sj7tyui3y51DYiGxXPb9FXFcYLv1hitjzXDQnPSmWMrG8JakLr6kH3hDqxHqc82VuGqpyvYRDo",
  "key7": "4ZUWip2Zt7e5114159pRoywKTfSvH4QsbT7BadATxXfiVsPLDcQ5S6kxWccCjZeBAmbvGXxnafDeU7WPzTuHi4F6",
  "key8": "5UqVVpDQjeD128nMdihbYiidiRDgvXCbpfbp3UrYKDEDgc4sRghsCpKVkYCkUjgvSRDPRR92PA2Y7pBifCjGwzDA",
  "key9": "zYQZY5bfPUXaLEYKja3Fdc44AsUCSnT3gEk5f7XzmeFomrirWJm5oeLSQ7jYNxJzrwy6F8QzBynyYcLheeXjcxc",
  "key10": "26FvTJpVMCQkMyWy1bQxkUCZPjPBZ7LpsishjKPbXFU1rRVktJ81CcTrrotAuDfF46kGWBkFZvBUK9nwR3HZQB2a",
  "key11": "4a1vH5WGh2trwoXgExmTrdaTXUaTinXHXqnnSvwy3DHKPprwDB5GYUhmVMq7wCLuTMHK4WK7K43bNCJ1WP9EHhtC",
  "key12": "5AfG6WsH1dnmt7df5bXUYxLEY6pLMWgjdYsNgXtHBB5xF16eQbe5E4cMcgCo5QiTQksMqyEb1axxk7hGebAcmkf4",
  "key13": "2CaUjCsEU9h6j4Xx3EKaGTEtVU1UpftEegfpWJ9FLVDnoNn63abGLMKFcVaoG4kFLQ82jdWQv7iHc5k3dqLhPruZ",
  "key14": "4aDXQwTTE5M4EZSXuANTHbARteT4VudNFNFC3LFdbeBP5WsYBLi76F29j6o7grM4fRnE7hGa97vUQEssDBnAm3ef",
  "key15": "4SYQ7zHUBAZU2TjGm6FEr7UpTD6fEbJ5h3sN3Rfd7AkjDsgNwnBwbvAkJTq1TsTfAe4aR4yz3xF3KTVYimptQsL1",
  "key16": "4t5TwhbmT41Dy4z92Pi2UwiFx7VRY3GSSPWkBiBai3vqg3q8LtdCCMpwgL5UryoKBnuwA2XWye964Jnze2Lafvxp",
  "key17": "2bEzjFHrGiYkd5kkE9n3F6Vri9gj8xJyDjqo3ucfrjpbDL9x2s7vbHL6g2JQ52fXhMGvLNj7dBJDgiwDhXGC2yHd",
  "key18": "ZTHj5bqz9h3vCovqGF5bkobDgy1tGWxB1XUWYLnUNMLfekud7wgsvTraJQWWKREP9Wr7WdWYfVh1he5ikhfEmg9",
  "key19": "PPvQJ2kEznJHCU8i2xoqc1D274WZimZFbK67GfNdoZ7vFWtYMZaYBth6nMFsvJ2jhtskcP9c7miFiAF51LK1fgo",
  "key20": "273uVAs6Hbj5Zz1BzJKNYRD89GHrdWY4XBZgg992QrPbWP6tYjwj9h8XeFk5JSQUa72y3LdWvk3wNa2A5xtpkEcp",
  "key21": "5iixSEQbMSAeqpXW8hTrqE9EsnQyrgzK7mK2eYFu1iJE2i4eY7pZ4X7pQPsPjcKNmjTURza3q8jEwoYNMT7gN5X7",
  "key22": "53m54VDKgQzX7yU6wu6YQoDnGnE5gmw12eqwKJWsFFYe3WV8L7a6NecjGHX9rUsL7k3NpZBWCn6WJB3aq7fJrUpF",
  "key23": "22hidhXADQN9cLBrnwZfDhTM8QTbGCncCxSuZdfm9wpcFKVY78GDEYy7tAtUhAzM6xurk6fXzS5FphxtVdAkXtGX",
  "key24": "5Z6fUr2DkKa1NLJa43n3MB5Ag6xMvdmejmPX5DBN5GGXGwSgDw39ZxMG8vdVt5QNYRTqPRjAi3NUHPLJS82w1Gv4",
  "key25": "4VWGVAYJNkyPRTK9sssm3gk5ZK5jJCVZDRbE8oaESwYU8jJtX4g5JyW5ufWuhp1Pazk4pE9cgGPszH5A3hy7ybFG",
  "key26": "56T1ayQsYEypmdH3TgSdJnPu6fQZrNmtsqrJnJkVAVReDoyUmiZe2ENXVFWNeFTSVpXij5RmBoKZNK1j7Wfdyaw6",
  "key27": "2pbWyALGT1W8DfPEkCKWuKhooxJ6fXCyx5dNuF4PF7KdNi6ZNhtRwut9moi45tUEP5KqhJopfWvN2YnKw69BDWTX",
  "key28": "267njP6iW9vHot3LG3Lr3WLsmU5ALwCMdNtcN1RLFqRQqQcNfA3Swf1fwTL5p75JxWxQaWhwaMCEm9EmwbuRCPnr",
  "key29": "4cbXWYwGMzSqdkBavUs3xxcyC3GboTNJPodjSa4zQmJXAf8P2JmseD1e7cSzyeysg1NtWZAJ2cRrrQNdEgxnowL9",
  "key30": "3hHnjhebQpvyXpA4npSoyK673Ao8B2Z4GZcLeY6ZfuimzK67VX7UDdNMxbGh9u2PsyvA1MyurWEDJhQRQWUp8GmJ",
  "key31": "2m5VNzPGRi5SVspLNTT15JaiwZhFuLAPeTzBLzqcFsUQsXLUyEnrPaLe7BrHBnLTc2BAgDaaQPJ8Sqr6Z7zqgCFU",
  "key32": "4kfpJLsvSY9BTyZre3TFwBwo3b3CiKKZXmfCCyv43BRD5aeCcfubf8bTQdmMAJAZymtUijkxNazvgBrazvvptyUX",
  "key33": "iVSKPZZKjrLdwHhws1hj6xkTsV4cUs71Qw1kJ5SitFyBV2nWBXMJmq6itenjs51RBa88v3v5igQfYDZuKvg7oPX",
  "key34": "21wYnBxDD7NSgAGSr1YL5bEiZrGaTkJ6ETz9XLVUE8MPMmFfCSJtWwfLqAmeUp34XEZy5QAQG8yhhbLFDprLbkDA",
  "key35": "2LHG8LfkEmYAEr4ZJpNnru3Wh1XRaHRaDC6jtbwBjsJXKQnZxyCzK99W9kjByc7eUHvrCZuQuAmCgLyYoJUuMBWU",
  "key36": "3ZKKKqxWyFwFSEGTnqYoCFquVyxvW8nAyB7judP7WrntzWWhokAb9ovu3jjWy5FVKzb3rzcvU8UCy1zMkPNnagCA",
  "key37": "7vPrd9kJQCji3VvmKKZfZfj1fKT4wMdLKuA8xA7aPr37Qwwejrz9b4PmVhNjvdTszBcxPZZLhw5nnsT5XoW5nD3"
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
