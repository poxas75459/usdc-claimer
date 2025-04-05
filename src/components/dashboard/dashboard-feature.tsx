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
    "2HiUXNDKnxykqGDvopAvJRw7EmwtURhh6ysnaxWqJeoUUBmxsDhBRhF7pM2PGbVMMVvr1Hn1EXLzuELkoXN4VjPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BL27vbrT3uCXMhumzy3FyP9NSB7EMLZ2AjgUtaXdzmtuyfVGWniN7RBE9XP2ErFdPHDECyS6qFt2ALChaW5v9ru",
  "key1": "5NZF5bA1mzXqUfNV1oNEAvpFWhX73Fc4LiqHKqZ8JXQQG1jQW4EQptwcZJzmfUQfZ31z1LCcFMiennM6j8mQja1K",
  "key2": "4JPSvUS4kCP6JZWtf7gqy6NnBAsQ2VkKW9oVPHg4n46vKgS1AvCwHFcyPgoCmrLJs89qBfhrSCfKgVA4YzGG1ygc",
  "key3": "5LEkqa4D3VUPnwE4bWJ5eodxsYuCnPCKa44eFPdPDbE8gAnQS1MtcxvpzBi3juorVu82V7LpeQvwejv8L5RJniXm",
  "key4": "3jYtRKtn5sXRqSuNi2SEyvZKzCno1UzdJ2evAbRbYhXYsa3PUvcTaxGVuZd7PUUHurBKQHKVphVoT6UkZsXjNzgH",
  "key5": "4h2vPYzZUJHuzDRvfs6zSxTvQXEEKLeid8HRVy7QiTPSy3jnXB5oAiF43nCKocxJM15SGZV71f3mGBefe7w36KAC",
  "key6": "5Qmz1vuYdLuKfhXXuTfwjcTAxvzuHL34pL5F2QVVP3rEutFeE53qeRkRNZvc8P1LRkfHW8XEfeamhtxJbEWGUmMx",
  "key7": "5TNHj8Rb4bfvg1YV73M87K9Lvm894MVD6HkMtbcX72eiXouHHnBTaBGz5DqBoq3cncNrYQds6yDeDb4iqCCjNeCs",
  "key8": "44p8YVBsUjzW3Txmn8guPBGPxAJTgbVFkdUKwmkULakoYLoRBdV7pVsJYy32JGnfTvbYNMYgjYHE1bcB1voF56Yc",
  "key9": "1RNVGVjQxN6jK5WofWfWqFdnunUPdKPjZ6VLRqHwFtGNuTAAu9YHAMe1aK8jibpARTn3thrNtHo97GedyyYhFUV",
  "key10": "2TF6x2ZZ2D3XCSeJXi6Ec4Y3nQpNnsuoUVBJKDDjrdbBeht13BWunoEnULFc6VQi4SoYfsFrojSnqxaDUQkN2azR",
  "key11": "4JexYX688d9niZ4yAZVqcoe8qhUUnjRDqaWohDFSe47ChzTHX9RDYDYJ6GBLP2T2Kxn1WQ6jgWZcCJLAsDVPtHAw",
  "key12": "3d9dBVhfj9hF84gd9SwdZinnoQLnVWMbzS2ANmvGyCpGGFXga48RWS6EyDZ4eLNHHLfJGnunRhWLJwHzuNtLboyp",
  "key13": "54pfwSdaiPx2khmLbGgxuqnfBYF8RyebmRv8UMHZ26qJpnuTv5gWQQQ1goPsnBv54yopqxGFLQabWGj6KcbsiR93",
  "key14": "5smMJbTxHJ9Gtfav61quX86nCdqherc7Hi67cNn2pkj3P8BxQLoH1nsjnk8Qm5Zq2K91ZNtofDUERGWdSGjWsbt8",
  "key15": "38YNMwjchVmNjTyRbjDA1squq8xezyCkswvdiJnQPfLSU7iNfkarbHaY1X8rnpVRrfbVJY7AfZamsY5mKjHQ3ykf",
  "key16": "GwLyjLkyV6Xe7nvy8JTj3DDf3anW9o7mJ4N9ixpYYKAmask1tZLGgfUiNkwRjsMnMTvvsgFx26orArL6SvmfnHT",
  "key17": "vuDStansymdz7ukbt9aCY9FJVMkTtCsdSGe3bXB7PFFibeaS9jHH2iDuTeJrQfmj5dDJUFZzucxD7nVpZjJhGpq",
  "key18": "7ntU9z5bC1ZFvyEVwjadB2sjrCGD9jFjDAqjQWdbhk2hwQ9QrP3gMRu7n8H55ngFht5NfH7r1CEimSmUNHV4SJD",
  "key19": "4S1As3zPpR7WSKz2SGNCgdh4eJFoUHDo14S3CLZ433Qf8sGnBgKY72F8agPGwLghqH7aVDCfZoY5Gqw9KaNkUepb",
  "key20": "5g2F6vjdgFgY8ko589CVgqocC1yzukMfa6DwEaLEQwLYQWvMetMDPoqKzVV6pGD4GgvG47hv7rVhhdp7RXS6vZM3",
  "key21": "2mn2JZhNEPj5ZHgdxuCqRgLAR3ENkSemfRt2TSeQEVJnDBy765GjRjZXySreeDP3JezJ1ZiEZM1brCnXxQVmeZ7E",
  "key22": "41dCzxGJgNmtoCnmJX6oSosmqbeLfEkvUpToTwAgWUVuc9UxXebNA9TacoLqe2pRT8iZJvD3Wbqq2ASg561eySip",
  "key23": "5pk3frLgiqy9BTuxh6N9xs5k7PgFaYWLdAhLwu6RGzQz6LMQpGCbtNjjn15PHH8RZRtVDufPqsDVeEr5kvMDkBxi",
  "key24": "2XraquWPAPihgB8RpqXN5wKhPVCffn7yueHN57EJUxjtjq13tXghMjDMJJhngvmsCKDdSixS6hrydW6vxBPEhsQj",
  "key25": "5yqawZBYt2iWDqpYHb8YU6goS84m3PQVW2w3wsBQH6gfaPYnyk9HfvDsZnJS9pEBMjv5bd7897GUricfkKMDpqo4",
  "key26": "4gmNyxg3mBkWeQ2ZdsGyDnTHJdLJWcHMH2w5ZVoAeAZfkbcwVy42i2EhD3YYBCr5mfYnWDcfBxDBsMTNu9WQABBJ",
  "key27": "4SpszJ47qkC3x8AnXmCZZ4dhLRc1W68yaDG3U356xqmZJ11Bh9RpNVh1gukizm9Htv28JnatrmWVTS8zuqgs7F4r",
  "key28": "2uhmxWC1nKwJeQVkW4vm1GGwz9VZyZcmxKBpqpqicmJ1aw3TNppYdZzTUqjUGTroYKpgaKSFJTzNKDwHqpj4Ex8s",
  "key29": "2ZVBu9jmghRqm6cYdHowpVaT7WnyW9hXnPmxKiQCfe3mLy7q8MJw7wBN4QurgorQpgZ3twNwSJvWxZ4XjoGBhsSh",
  "key30": "2uhSxWEBa3xLae2wNNxwSD8rSWfo24v494fWRUbh9oahWAL34cC9AnAx9gfEWurMizyeTqixRW6gGFF1FMuUjBvw",
  "key31": "37Lvw1xpzv5nN3NP6vGaDP1Z8QoAuqDmetvUxptRG3ZEA6dgduchsJELh7rVHrE8MyRdERjaqzgfitVkpi5Pzfo4",
  "key32": "2RQtN3QxFPXETzQhLTTB9dmvYJuNn2Q5xq7726Xy5sdXT93g1tfPhf3yULtc6AFMpsLLTqD4rCeFqD7Nhu1bMseH",
  "key33": "2WKsGBZrBGs3pqCXNKQdcKdq5m7UvfRz5n1c1eZUD9dLH6eWrbLUcVpBwqynwWs4qevViBUsh9MKspnccAvVVy5p",
  "key34": "5abNskKUXYcx7tSezSEVtMmJyYyKQbV8KLhBkAhkiCcw1ovypWvotkRbhLb1qwd8urYbh4qn5k2RkWTQ3Pz8qxtM",
  "key35": "YJ1YxsVtxFrK5XxQsk2Z1V7z87KfBnVXdT7AzM8ngBGE42L98tig3zYP5coKfxfquMooTQzXYR69dG9cZgEgL2D",
  "key36": "46RdAzj8cENKp4vv93sJcpVmRSJLBRfBKJHqb99n3bk27bFESzo4ohLHePMbv8dydsZzBesLAV4nmrPhevZgRWZ1",
  "key37": "5w1DGwvVVRwNirT1Vuv6kJkEvjW4eAAve3PjVxS8pGdD3JVDPDR9CmwUhfZB4bdJcYXrRmxnMdZese8rQMpUnUV8",
  "key38": "3fdC1uDrxvEuQkmmH2Chi1nnRWkNDxxZtr18XyevQenqDfNzSvHAB1HpNuhEpkdv3AAvvLRNv1XExCErJoWuaUn8",
  "key39": "3LcWfFgcWo7uZJPa48gRcp9Dgd8WpS9qU7XZ9g78J3pDVnJwbDwgQzjmaB7xkbx8TmhSNU8WBDuX27f59jiSHa7b",
  "key40": "tmvuv5LGKhwLWpBxLu7jBkoCbPrYe2b2jdHQGQEB8zCDujY9a2XqyiMB5j98bvJGLkeQf2Zg3jNrAoCGFcJquAA"
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
