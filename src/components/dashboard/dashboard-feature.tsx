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
    "4GS1cix4tG2rQZSRkqjuN1J5NcqS91JF7yVygxwPQhZKDe8sK5zcrBNscNh8ooPWDBRZXxm4ivrz39w3cQNaVeyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c7Hk1nycLm4okszhRyzpPieKf8cx4DxNpU24Poc9P2iK4uLYeX7DTcjNyBZRNuYGBskVZu4jEk8X3cGTc3wfhWC",
  "key1": "jiktmavXZofZp2JnKxqrYT8rKF7tXNnJTHeA6zbSkcUmkbzGtzSx5Njwu9kKhjBXWe4odoUQ6GnWLUK3UTnXx9p",
  "key2": "5cjRBSve6FrXgSJyjsBhpUsaUcdJBpKq1mAqqXtSdEVguUsbfpmzkHE1ZdZViy4Z586iEYP6RLVUaXygVJS8d5nw",
  "key3": "42kC8XWw4fTDuNzmX4wckWRYXf69GNUSoevTavVfsUWLRDgrvHu6GTpy3BVHaAwm4BS1aBBaa6ctA5nBH1xJBi2W",
  "key4": "41hWBvnpawZqDDeUjYmNmPDab7MRWUnMxiMpppkomjTa8QB93yLEGAScJNnKKVBBDuwHZRee7D5yLA7eVSpHyLDt",
  "key5": "4LtgUQeSEcmsNkz66u18VCAQfFgWYDeniHoJD4U1anyfex8cR3QuKWRo4cGovnLfpiJ6ygSvPzNuqoz3akT2YDXq",
  "key6": "2N16MmMVgPGUhaxysbf21L5c5uVdy7S51wAf4JLZ14x5WMnLue44du2uykKN1aGDZt7npMAABVmwKezgxoQkPiSL",
  "key7": "4DGu2jqTAWyR3YLkmbyUqcZk6T5NVBLzP8uXi6jAtNwCp9i56pfqA4PygwsqxRH4Pygs47zH4XnKFemzUDF9L2Ns",
  "key8": "4arVfAywV7wHrkr5T3zt9knVqrN7gczYkcK2i4onQe8dZqjhZTnABb454XUrzQfP3axwSutYMPtPW7LjMXtY61Mj",
  "key9": "4ff8XKGfmfdBvhHxcrrZo9JZRt1TVycPASvo1i8eMCmeaZSpMTT3CGm8A3tefoFZViGhBjsbgHGpkcxqegCLMEKC",
  "key10": "4P7XZnwKNZBSpwob9GJodZDKGFSR4nqpo13ipf8vF6hGuAdoL5kqPcHb1dsNHVW4QUtHakZFcpV2yazj64KqnY8t",
  "key11": "29Rq9WMHzNUaPFZFQQoNHLMxpLreT2DoSi3npWBVj3wgs37hLJu2tSZ7kuv4CEgLLxUpP1rjVuT7EQgnspUDUuDe",
  "key12": "DhvVZ1y8hqJkgwnvEqD1dueBYpbv7hQEZc6JX4KnV7y8b3HegnnuBbRrjYwz8aWue6cD1oSgrREnTqFpJqbA8Ca",
  "key13": "4F4cUqbcprUdM93mUDcDJsm6mUh3ufzEXcJDBtEmfPxY9nm3NYZC3bDQBqYkHthw5KTZVK2bePFQ2qJveuThPWHj",
  "key14": "2UFmPC8W44vLbeRd8uFSgFUfNaxH6VkfKoQyivF5EXKXvvx3B8k9auXD98VRNn6HNgj6ic7dodnksRnWFRXFQK6n",
  "key15": "57KBZPs5JVz6AUaaza3rCpQUeStdMAKifTntZHNnhrsfAT5ByDpRh28DdXZvWPUr4sVNmzc7rgg9Jp7dNrrPwz1A",
  "key16": "beeJDq4r7tn4hm41xggwcPUawzmEmVKu6m9F5YR6H8dNtYXMgbNSzkgCgD3mk3yW9YuJQwSPRSWUjoPiuwqvLdy",
  "key17": "jo8kjnbDAQ2tUr1c3Jr6kvaKpUCDgZjY8Ze8c9fRGqPBwKs9fYZk8XvhXysDWv3CnBW9bxazTDEjMJm6TRfDwNU",
  "key18": "4H7BGh6y8r2SYqcEjFdXFkKZcQHrEWoeuhdMSDRcY3vqx9uPaaLFjMjXbr4jmK3yjxpkcsiMoowubhEb8bYeyGrb",
  "key19": "61WS7duu5yLUDXc6UA53d5iuNHqKzxrv18VBos4nwN6y4uxqcAxiVx1qZKozYTr3dHTcHES7ajpyzbEcbMLnvrrb",
  "key20": "2JkSiS71Jt6S8dPmWXtMnxbBukSEgRy9xrSNwjRuzUs7CFbtmvNdRMngvUjxXbJZXsbbmDK9jLQqdJdJhNsBw5m5",
  "key21": "5bY8oLXbB2kuvH6FV5Dge7xSN63S1egozK8Gt95JjAQj1mMV4yR5638Kahd1rwDv43ER3yJCcBXRV3KBGtaN3sd1",
  "key22": "2LpsykoYpUiePyNjfK2Ao4CsJYDPxWuLvzkMsFcpKHwB8iLXtKtSJxMDpt9Bvb6cFp89sxDH8gVm2UNxrUCGQtvi",
  "key23": "3GTzTers9KTjo2chaeieQhnAqUdGH5UYMAwdw6ZD9XDQjr41QJhZwuygeDZdrvDeV4Lw35auwgjYKcYe7CLSXX9j",
  "key24": "277ysXNpeAuqbYuf7SMAJKYznqxT284CZ5SsYkynYTpyQYoWiZYaEhyqLzn1TAK2Mta1hE6NPTw9YzrvxQoVzbqt"
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
