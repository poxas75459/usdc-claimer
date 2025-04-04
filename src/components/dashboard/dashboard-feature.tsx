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
    "2MrPhsJgSP1GNZGFcAShY9cYpCgHC1qiBnmdYfbW3jvvGnWQupyAWEJXiwmiYitTj8d7mTLrD7n8QEaX5r9hkKB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVwf4A3TRSfheqwDhAwyFjT3sd5CuQbqSaPPrwxvqLRCSfaFnzZ1NX3hpNsjo4xQi848jCyNRQCUNH9eU4dpaq2",
  "key1": "4FCDNjA534ws9RSDXeeYB7MA4oYqZ3qu2ebyCoCaa99rMfPsspVy1A7z1AJDVNbBgaQQkKRX1z75kDUtXoC2Gx2Z",
  "key2": "5DDCdHjDj5YtCLRVXX3VjrtDuU1g2zQPy9q3rurUA5eKatWLBzyCwRve7DetWoWwJXdywv9cbjTMKh66VrJMtisB",
  "key3": "3B17PqR1WGGHNPGFFPAKi4S1tNW9DMRsiKnPm1LvWe1vueLFzAEfNokGuLKfRspZuqmdzmyaTh9iKNiSfZKEet45",
  "key4": "PDFYqCwgKHWWF9JPij15moXM4yRqA8dHQ1wrw3giL8cBcbjciqQHgeSLsLmvjXVEBZzoJ7osDhzT4ZvQiH1MMvb",
  "key5": "5YRoGhgPu78fi5m7VpdgEb8PDigKyPtuA1NkgVss7LFTAQ3KT5BLLyAsiWhYEPaEG1suS73U4DQ8t6Z3RXGEdap6",
  "key6": "3LExvMKPUjEFURVNeZhCCjxV6J4jkqZZH6n7WesoeZtiQewFNcnsg89AuouUATHmS9CWhtLCCxuN9d3dkihWLzcu",
  "key7": "Vz5JKQ5ABwn5V7AMK11kbiEczeqeTrDn5vr3HwTQicsZ5rYwmqHspBiSNwCnEGNFfZ7XWZHo3KJcqHL2F2az7iy",
  "key8": "4989cyTqhiSV9ohuDg7mHV6xdcoAt6tnjfZyh7LoxPRxBbLH6m3FL3EauiC4FxMCBf8uG7siRshHfxsY5jFGTHfq",
  "key9": "3u6JQWcGFQv2YZwC2GfUUN6PeqVgr34SYj5BWDYJyLBNYo8d6r8gqtUPjAYn8d2B9qXyY9bkN6AP9XGWoSDAFCf5",
  "key10": "26AuK34xWnMtykMVWibtE5B594usHbRMBdatEvmkpT155czUU3cJbe6D6U9mKD9JGgwKeh9yQC3Zu2UUbRHPRwvT",
  "key11": "4MKGhofdzv7azoARwYiGboQ945jK3ZzfknzRcmC86bTtKwQd3GCic3kVmATd2gNutkN92zuvu491FHbUTuS1LrGL",
  "key12": "3U2X6odGfpP76wyWZUowjPaeNs8sTVQwnrhB6iXpZYHPg6nx6rSaF4SXg1DwnwJoQVjd9dhRk84H1ZfZyFuVUCLV",
  "key13": "4Hh7dv5HfHYY4rBze5Sg2MTCQAqK6mTdb6c5vHqmm4sUdgkSheWDuDG8ERm3w3drdxDUfFhFiPzeiwDPjp8FNQHQ",
  "key14": "4m5m6fHTDJwnK4x9QE1vEdq49JfWUxa1hAHbhJ8eHZFsFiqhhwwgPro99RD6kAzrV27kmMjPL4LHSXnH5BqxDjnw",
  "key15": "3XTJot1BJWeU4z7FfsFe6Yn8h3XPQCmzBYzDyqJhHRiyv9riZ47ZARCzAEPcdzUAmCcyQQ4qvp2jTsKVVWiGURc5",
  "key16": "2M8QQ24jJbTd1KNmUdKqQfmwbAgsk4FmoWnQdrxiX86yEkxU8FuGdAgDN7Z7RqqTANCkzPTYT5mcnj27cvrn4v8x",
  "key17": "64qLfQanv4oiD2r1B3PCNTohWnkKjZ2LKyAzh81g3phdbuo9DijyHS2PNxKywhYHiFV1JnCsAxhbh3CDGwi4tzbz",
  "key18": "2qEEJtsPXZwTgcpgneuyEsPpxRz614k2hYG9H2kUahPH9yyw88FiwguZFfnSHWR7JSZkDuzjL9buPLf7VSbrMTnp",
  "key19": "iFKrVw7ZpYxvVzCUHMxDrrchz7g7t8tUh37MxHYhg2ThkfVj2cCSbbrbt5UK9dwTEyuLiizWqecvpiHoRtymZxs",
  "key20": "4SVwQe1L6vrNBMtnGgjgkucrewRxcZEHriv1bDPs2XhoaPmKHG1zXfgr4MiGTdSz5rgSXMmR9sDQekwyPWRCJ3pv",
  "key21": "YaM8dacbuTA4zf78td1JCchitWBQbWgcNdMo3NwRPJnz8ZsVj4JCQ3pxahWmZxqhNXske9aGiDw23KRLcSj2SgA",
  "key22": "2yAWLDz9HUeBtsTtPuEVwdujmdmB3Bfs2NgneEm7wpSBkDR6CYFvEyViZK1LZAJG6xHevgNa8yTBrcr8rkER53AW",
  "key23": "WospxdCg7GUKJWx9Tpos2rjxW8yYeY7y6Kzir57JuULseBkMupk7io2FCCar1mRJaFh5DGy5jdcUPtNGsxW1zec",
  "key24": "5PbVyHCC9EP5UfZHvV6MNJ3C85h2cYqWc8QCfEHEwDzGvc6p64qnkZYDgEo6VG18YHT75kdoGoyyXGvTYJ2fubeu",
  "key25": "3V7py7D3PQFNHJrJrNWoz54wuA5sc9Meb7iztN2ykiCyWeutqMDFk9BWkvi3Mw42xpYypZ5jBxDA7aFY1EcGZGi6",
  "key26": "3Rg3NpE1RiggyNw8Ce7jtakiVoNw6ZobEVizubowSptxzFAUKsy3qJkhyiUSNtvKuQ5YrBEt1Y9LbVqrxVrAh3rk",
  "key27": "4mSgChUpSu9MZWQmGCSVtWsbQmKrKsMGaFpmiCRa7hRqacHJVgAQNekZHqW22DiekVUQCD38cA5XXA1W12QhiHRc",
  "key28": "2ipdxaC2HnEF8TtAvTWCWj57sFrtN4G4gSYFLaaWxvTnXfVBC3HT8TZjub2yoHmxGkjwza15Z54be3z7zXwJzzup",
  "key29": "5cmTQuQ7MrTWhW6SEzuw9nTYgXdw2oscMw46LAFRVRt9zDt1zxYAz2WRhaCT6cbF8QdZCn4SRQLJB5F6DkMN9bAf",
  "key30": "2xQ91XWMLSqahsLEngVoSAVAQm78KLFs5kzAAETNaBPL7TnoJw1PsZUUHF83Rb5BGqcZ47b9zVtJK4VvP7qY3Q25",
  "key31": "53ZXLPe8dWepuHQbys6ZNeMPiQf8fsvPrgPbAZP7NaXiR1yKvMhKWniWci84Xz5GrEtNuThBoPonvxsca2CBVRc",
  "key32": "5tcwwbkZFHuK7iFUYBWMirmdFHumzPJ89ckJdYAxMNUr2zGH5Y128WAuZymK9HVzjHDXZMRfuWAq1AW9CCJT7uak",
  "key33": "5fj5eG8S3H8rFSr7qFWgb7tH2tz7ip9tPJejLj3x2BFG4neSVfMe2bycmZNFAWruwjZUejprX7kRhpV7M5FpoCcj",
  "key34": "5GSb4EVGV4EX6aQxKL1Zq35d6XeCVGKYZQ4Jg6rNpQPFXaddHjrhmr2kBzYejRZeoukNrk5UHcECM7azQFZYxq6x",
  "key35": "3KdTtfQaw7rSDgzB7QKyFdSVh2zGxvgTZVRjUUg9RZ5TUiyiK7nuzgDnqoR9diKKRSQaL9vEjxVcQaaG1JZprkkm",
  "key36": "3UvXg6oANLgwsy5wfKqpVfV6qsgo6pGhv2jWofWFWn5UbW2Kp3dLzzBK1Mxz6FyvFrPvD5qwLdfDyPXqCJw5BbHx",
  "key37": "cUpCVrJW7ncUdk1ksFE4vw6BB8APY7nV1MrJsSdHetvtic4ejp33rQCvyLVvP26ACmJKGAB15h3djMcYEV5fzi2",
  "key38": "3GXz8BevWWqws7kr99RpewpMNKgNLfyPRny6zYLMcnywufG3LjXeff42uHGJJWa39hMLWydSHGGfyCmv8dUGZbjA",
  "key39": "3y36jN6oojXVohoWU8RmgKVEjJrr7uN1zopHcUQfy5Ki8gvY4PbYH1er5GoXYazxG4BkTarCb78mFS9LCme15z2E",
  "key40": "3pTdWvLgwkD948Eg28JEvZSYut2JmLptfY2xwqxwGFsH3qgX9LzkUdXNBpqztZV7VpseCfJW4DwC4qgvJziq6WfU",
  "key41": "3QnpMJidfVXQYf2aJNZxE2PtU69vgtMRn4LXjEtV5n4dWQoUt5WtwhxhAh7qAkzKdusNV4X96jqwVCVCRKh1rjZF",
  "key42": "2wMAy5ocBQFB1UEDiNhVREAtiCk7ktqXj1sJe9H4oX8w88tePMuDJUmBw3fpKCPZkV46LrpDj16kPERWC6ga9rFb",
  "key43": "4KBVajeeqdKu8uU3AEXjT2fZcraL6kapY9gTFdvY3xkE6ZU84GCg2fa2Qmx4yY3VQhYrxm9m7mM5hb2sDsryR6F",
  "key44": "63m8dcYChH4Bw7aMp9bg5ed5khPyYn6o4MaWSnDBTXuiGDQ8HrffJ1ABXn4sN9Syy5nFgTW33yu11qENrHiemyjW",
  "key45": "Go3JDqM9dXEwgGk7h1UXxXhBW54ZYBRxVXcgKveywREbF5VG56sNqHS8X6mKfdwRjarnGaGSGMemkrCAQZERzwR",
  "key46": "5URGgoBS2kweyQCp785jEo48FXRLrAZEaDpu6TEiNw9QoqckgTWBMYgN8DWu2F7uW3DhW8qZfrNWWLdfNW1BVL3Y",
  "key47": "4DN51pdfnbXrDxt1iagxe5YgPPmJzYoiRxytxGCbpak6N58d5EsNAGXJt1EhzARNWQT76s2U4SPNQEUMSLRkiCoz",
  "key48": "538mXDbxUQdBkyr8arFuCRD54joBtAjjvS639G2pEpMjYVhX9UskK3bj77uFwiiW4dGexCxmKCyE3ggiRhs9A3Yy",
  "key49": "5qsqmf2Ho9uLaY1tXtX5JQrnD5ELudn2MGuhuxr8TdV7XLKo9NYK75jjxcenvgwa4sRzc9AyyeiCC1oRZ7dd6mgn"
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
