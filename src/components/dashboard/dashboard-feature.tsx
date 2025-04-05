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
    "22QyH4bH9xQS4bxo6xjbzM6qGDkjXELNUgzScspUUHvw3TTw6b642U69eDbQ68zJ29bjzKeJVCH9iNXnHuuZszL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7cwkxdsDkFcKc4ifaPkxrFSwBU3jbAJmXTcWgHCfMXcVsRfUdne3iALSWswWxfFh19D6rLyt27K2ca4o6quVZ2",
  "key1": "moCh7FEAkgLw9h1xNQHEMfpvE68VeDTavaw6eg5LK7v6xhS56P1M7Zckd8v2Nm5voiJoVrr2pwrbD6QhXgn6UFf",
  "key2": "2cR2hA2tZJoKqYdVXcMHmhg797T9maPc2EZ3zKVG7u2kSSTVasHHqDfTudjrb5ZUktXTu5RVBw2WbRH8HgEQM94c",
  "key3": "2ywFLZjcgESNKFnnuf27qLyMXUski8sfWHHxrhB6ZtqgP2cpxzVJr9n3XHYijZTDQLw4cUgh1z7xQfHpEWMxxKLR",
  "key4": "6371kjV7kTSG7r67TjJPrbYWekB8SQohVg59LoP26P4jSzpiwjrXdWeCgBDidgnBenzSSGtvrV9mFuDmNGQmYVSL",
  "key5": "64pq9g38kCrnMopiXDy2dAFPFHuwijFbGDcK98VBk617hCcvk2mzXrnvg29oM8UmThhhGGqGC4bB97mQAqwXt8r3",
  "key6": "5e6eiEMiPt3GrRpLzx7rCR9Vq87tnuwEtY9oZ7KjZryxNyh1Sckn6GzfyDiecM3bB1KgMhMoiVeFS5d4noAXjJx9",
  "key7": "5y2MdKPZniPb6oxb6Ud2UhNDzdrsDh97ojT4jguTKUQnJ5d8bPc3wquVhkZ5HF4RRr3BSf7UFnYUTdBEj4GEJzUH",
  "key8": "3RiGxVN1EWycietgM63KQ7ZTjVpyaTapFjvps5kg9A8LpTPDPWfU1Nk429idjPVfKPRSQ35iQgTZeaAnohfKo2KJ",
  "key9": "2RxtvWqwn8AqhTpSMF2jJxvYMsoz1PBX7T3vQWqowM9cynM1XVxmSTHLwf3PDeS7xPM8ewwwHy4jjS7JeoMtVMWA",
  "key10": "3ztR1Gw1eKJbeXz8ouXmas23fHqZasPphqmf4njfzWEoWvSujHFfr1iAFG8FS8GS8Fc9kAcjVh59WCNngEkQXmn7",
  "key11": "2sLW3BiwuU8KntDinnsAZGXGifkiW4UArJzrt3DKBxWAjJGsDoiDXq2XCVpi4q5DZeMNcUvqPCyyk7VkEHs6PLSJ",
  "key12": "ByzG9pq1icjHuo2qCAYTG7z1ai5zkvhfkboR47xjXg8HozoHVpPtWyYrVbZYbRyGiri4Ed53Pzogsdq7d4cbwWC",
  "key13": "3fHUNFanUe7t9Szr9wRt4uBTzyXsZBWkoWtnMeyN35S1kEr3ttC7DVRwhtrNNdY8m1yffKUoUB891NwUyZ1zN3LZ",
  "key14": "3U74wmVnu8DzLmj3sik9ksgVtNVYxzLiqhyfjT8FF5kskp6Nmd7duykN8TrsqtxqysyoHaVJadpMh6JdFUMk3B1S",
  "key15": "54bnG1fALks1qxW9vaFXZkww73hGcFuKh6ksf1Ugy8Z3fwBcsNsJjkckN4XF9KemWQmDaqZbP85fq9ym6FzLXRS3",
  "key16": "37iNfkbP4XXffn8nE7m2SfLSQqE2nr1wXHW566PYzNnBoZDEUWREYgSCd4sTakWLWEhPrexUBykT5caaHjBXh6un",
  "key17": "3oPWPJh2oRgtyqxCFgS7mXS3uL9bfAwbHk4mY51bLEZBUiG5VpZ8N9oiKpQGWEjxxGXPYCMSBUToBWcJUJaffWRN",
  "key18": "3FjFzkjatZpiDcYAP2pbBeMEfhB3KtTHDv6xkKuLxngAyC3iXFCnaQg4un8xKP5uMCf35bfjC7au5bFXWfEeBtDC",
  "key19": "469W7kkYs9CXB95N3xRgm6tRd5PijeYNMpm187Vy5vttLJxfVZ2zYiASQVuN6yX2PJYt6eLh9FVdnk6QHu115bB4",
  "key20": "2enkugiXdJoGskNYYUfvvWceGM7V5QCQkZEWJef2TwUCAWZXrZzauj29RToN4w6BzLiNScTZzGdj6i4f67RaqNvT",
  "key21": "pgPwG2WgZZuhPVFXqxyQpxmVSzo54BCgt4W7sq8EcF2NgUDZpquekA9i2PXyNXfR2EMTooGJSRizUcGT9rbSAgb",
  "key22": "5smZNZ74Ue4eHfB95PX22dKyNQCGAXJdr9xHLHA54NN7NjNVQoQqJhofhTEs2k8h5a2JgUjK2JvvqZZwjuXGrw8g",
  "key23": "2irAT3hzsgSoPtuEu3NiwPG84Uox99J6gQuZDQbrFxQg4W8w7H6veWZgWWrKGtY89ChveZyd1pbR24SY5yxYU7FZ",
  "key24": "3Je4a2sGaSEpC6CSrE76mKX3ERu9soHoFYVhNAJmQHoPsWSd38At23e2s5CsgmGurB4Z1kuZGCPz3eFpi9yCvhqw",
  "key25": "o2NV3fdqk5Zy9zVqi61ZpsNf8rbxHiTMqJT35BW7jiWxxiJ2Xa4kBrjz6DYKTDFo48CJurhmypoU4oDFyEzYjxY",
  "key26": "4RBvkXfNxuX2pk6BzKb2FyfPKEK2VhEfgNmL24QTo82tJZTUHr1vuz9kKaiEVYNVqd7cECWbyTF2WDcUgapdnswB",
  "key27": "2McfVq6Kii7Q26djbEdGGyKeT6BjMP9vmAwWq2o66r7Kj6rVk7uhFkBQJgraWbzwuZp184zM4hHo2uBMtQ7bN5CY",
  "key28": "35MpDwj3FjC2qNaoysy1WeSA2ncYZHBdyQ9Qgf3YyxxXnKGKfr3UBy7qmTaS1cG6YZZwWQVUPpzze1UWnKNVgYi6",
  "key29": "ZP4sjLdUeh6BS64xmUpDzHf38nAvUccfjvgZmAinVoUFNnqFxP4sAVbTYevysRFXXwb5ZCMuC6USHDMXvZk6YDr",
  "key30": "5AAQDYVmdzd98UNX8rD72Fg6VsX8Nembxo17Nh9n2hjzuN9rfttwXThy3ktqTRkcQW7Fv7u3URYorXyC3jkoMY4X",
  "key31": "2rmsf9nFXBbXkK4NAiWsVLw4u9WWtcRaLz2cbQ2tzUFkR5uVDQCLdHFGmZKKfkWRNWm6PQ3pV5njVYeinLXiCTsb",
  "key32": "631oA1w98Ex4yzgrRvvnbJVXwibpjyvnWUoYwT41KNPHj26o94yeT7WDvp9nSFR7MMz7wFprkaL98KbZo6xAnmy7",
  "key33": "25P3vkBpS5a3kikuxh7QNQJSDwafTrMdGQLne5hnxqLxiv6Zay7yFSH77n9CJmcH1yPY1Qe9UFRwsxAvN19sa3WX",
  "key34": "3v2x46jGmCQBd2PsBKJcfD4EZCkij1vrvEaGbTkCU3ypQ8NcDr41HmDK223VfCYnJyCKg1weejsWPKvFwoC2Sfn8"
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
