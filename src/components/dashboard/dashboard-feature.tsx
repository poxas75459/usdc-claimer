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
    "5YNFbsuurrLo3KbndPGLx6Z9kAjsXM5LvnWcEc1VqrX7NoEHJXtP72A9RYJA3jd2HAFFpbT7SJRHynXGSHpDmPju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p45FYTecRmtdSRJeN3zTaKdturw4HoiDjWcJugHmFWXMaMHwM5xJF4Q3A4dbicps3jESiaKNHxFLdW1cZdrK1f1",
  "key1": "5aHEZGSTm955fDSed3sZ4ZrR7FeHNCrYcQv9q1JrVz2Mqrp6d89jNoVvo2BUJ235NxXCb8iS9w1ZwYLDmUJWHQay",
  "key2": "4hS6Zt8yvayMnxuH8iYnyfXfaPDHoSBz3PyDfG55upnjkFEib9GcL4ZNF9vDeiZGCnVMjjpWarrFDLBXTLXPnkbi",
  "key3": "3QN2j8YAHUugZQSe2uPy4vHcgy84AChJbgN8fWW2ag5g1KiTAZBSD2Xo8gyJgzaXM7HNYyxuJxhYfS3SfS3ZF31n",
  "key4": "2bwgxmFRLSQcVx1vRmBA2Sq22wmExAjiGSdv9Zk1XeG3HyLf6jDE3JgW86gP9D3Z5n611Ks6L5iFWTHYZRsK2wR2",
  "key5": "JZJHfDoSbrjwUnRquN2he2nV8wXHWmbucZXyQgC6YydepaAwJE9TF91ntVWdXBxsydFiWA9NoX5dKKCkvzTczFK",
  "key6": "5QHV4Xtr1zTQQ6iNdkFd2Ui6WPzWUP3XCvDxqpKddLq3MbC5UeuntiD59EWNBRDFdYCg7GpRaxSJJHgwhAkUGrZP",
  "key7": "2mX1vvK8wRrbYB885mhXomR7qhNqzhycyF3qw9CNrRBkWpEyyxBgqqicroRRjxgitqk8NafhAicVvBeknEwvPbqV",
  "key8": "3cCGukfC2b9PBbKYa4pje4AiPt58umAoPxChKzc61tEps2nr9TAxPvVdaap1ZGfLXFmQn26LoYL19usXoJn1zMMd",
  "key9": "2CvJEXsGjhtkhZ4EbYALVk7BpmDqwNXZFAoBeKhFwWq5vQWoppxGJK9vb3BEj8KJu7QCyVagpvVj1FzjTpfYXkNs",
  "key10": "4RScrTS7i4qRpeARNx9tHr1ByQ6PHGbNsNCosJUKZShkyDTLSWyD8FAF94QZCNUQPiJBUj4WiUEePUuw9rSnqskg",
  "key11": "5zqxMRTUHEcqgGyUo1kropiqQqU9ZNnU5tJkYDneKmkAGQYzAZ57p4PSbvceKvJSV5dNBuXqorHaYdWxK8k3xZZg",
  "key12": "5DJXy7S1MbHYZ4CnqnPufyCSqxjXYKuxcGRkxieVgejUiUE51eMNgoPhAV9owCQ2Nfmyr6fadzLMjuqztzG2cteS",
  "key13": "338vPZCyDDaMx9qsavzvQswotfpGiBfuzH4MgJqevRTGCaBtkSPLEGfzXHqNgbogvbNziH4k2WLe7YpQS22DhPeh",
  "key14": "59JvH1cSZJtwR89weNNu86k8hnxeQazSM9ghYvJC3z5q93bbsN6ENTqWDcyTUB1dLeYMdW14kHPSCDymDrAQCDa4",
  "key15": "4JZu7LjV2miErtcdFK46XeT2ryGU6qHm93RqLvSmz9oyScN6CX3rYhbBSQS4aPS3uBF1nen4YRhH7MmJXXxUntPy",
  "key16": "3SziFhtXanhtDm1o124jjLG2AKt8QoSjHJDqygWEAo7Qi3Shb4ivczTZ92FDoZRFFfyawswif2UPTeMozr3By8xY",
  "key17": "3heH9BsVfVzAUv9eDKfrKDpiMZcKM8GNdMSjheNQJFL7xC8FsEtWstARZzMMkgcNCtwmNWXT9M6NjSdRmGcKPGg8",
  "key18": "4fVxn8GdTEfL4XEkCqvp3W3oTgrTBXKmFdKnSwgTbhGKLiPVj7WBqe1543gPz1uhFGicoSvtzrSkFJpJqJjW1neC",
  "key19": "5PLQ4i2VT9HeXJ6hWU4QozRj56DYvw3AfauLw7qJxUoNDxP4jNjbdLkFm9Audk7SE1SxvS6fta3iW8TgwVvmETRf",
  "key20": "3FD1VqN9vRDmKaRYSw28BT2vvfnAHQwHzdGAHs8qJM7q797Zyawmc26NakTPN22jhVtLPmXHjYoBoSFB39XzVoP7",
  "key21": "5jnWacvjthw6E4ptKrSULrWGfGakTcFzYGtpmvpHwjiKtR3jiCgMAu3QkQTWNujvv5gBq8TWaRyKKmVS3rxBsSF8",
  "key22": "3j5CJbVu3YaBJrcFMCvXsDX8n4HR3xVWEE2jqpRoJEca2WmC9bzmim7TRoriWih5vX7WQ9uy3c4d8X17pTUxSz6B",
  "key23": "4HDxntmESaVcphK1uHoJGz6ZUP4QwKCezgPe6434oDBhJqGgRqLuhiiMX6t4EErjTFKjrtdVfDEgXmivzFhKu9Bw",
  "key24": "4v9HmMKYk9VjSUrpGLaGrYkbLVZ9uF1X9YPbkPkfqsxnxRnvpLQvne7rv9e2Zkh9KwFWiq5Egd7faU9oPWkP8AVo",
  "key25": "66CZPg7TYMcPa7gyaLYBv4kSe8YJs6VoJYg9Z735KaTqcATkNGFjktNHnRqZw9CsNLDqTRiiPXRAZbH3xUtBaiec",
  "key26": "4fyrUibS4RKUyfFr8e8q8yB35BmDayr8G7XMcjeTf3nxXXWGpEwWRHchwKGBHegcU6MECYof66z6fKk24BB4oBRv",
  "key27": "2hC4uhTDV7aacnnFssivV8ekP89xPMV2UPtLTpbJU5QZNiuVTGJx335n44Y9yZw9GC8dQBZWKriddBkCxtfP6imb",
  "key28": "4VHK7TExj9t27ZKa5xp3sspEm1qeQGbTagsWcm6rbnxnfFxN9Z5G1xmz49RapgRj5HBsR8b5qFT3WCJ57uFY8FQ6",
  "key29": "4r4JrfCmsv7KKT3GnZjmmESVTaMzg2HPwaizErq1CC28VbLzXnLPfnYWKYWzD1Shr4pDezEQFfYbH9W4QHsGngRC"
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
