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
    "2hiuCp9gFAxX1UzXHXGzUR3kx421CveFJoD2PLuko9k2ExceVkEmPzghTJSq724mQLv5tTZ2h8UBX2PakK7X2Kxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K49QyVJNQ33XKa7JVbZKSfu2fFZsjuTpZpGvrtgfgkpTZiEinyR24eWAJ7TkbQ7JojcEtn4zaWW3MAkAAcsS1ZP",
  "key1": "5WZqnxUP3vAfHXtMUzeUTLjwsxjd96ftsqoVakZ3p7ho7ATsauLxcouMNwQzmVSM54qpFKcp5uEwzCk58wWuPZfR",
  "key2": "2HzE9a4o5rtL5jzyeAxqgDKdNHgbWPxRZeAqdGHWHJGRMMQwvppixuLysNSt7KrRDeJ88UBfAAWtA8nz7W9Pwqhn",
  "key3": "3JmerMd71593kw1S4U9erNXakG516AWA42fmvbQZERzriMYxCvcC3Snu9DJT3gTXCk4keKk3oGVuM8Mb8q1yVH6K",
  "key4": "5MFW9VSMpzo5Ejvi3kWRBsQet2XYsbBBTeEVHhbqntjU58933VvwE5EoucWnoyMXvo9pNuvc1XqLwhxfPwPZfyo6",
  "key5": "HKfc3jXbSRR6W2e3NvHoP3zrkQGFQMxNoLmBE67S77bQmBrafypfMSm29Y3bh4pMv7vFFNFfzxyjrd8qoXDUpaz",
  "key6": "uDpF8d85NdsMYNTBUmcMg1PcunAwbTMmjmnoVig1R5qXiHKwUEBniMJ1m4Vif7HySnD6u7LGGx5P1ht8jWrLkft",
  "key7": "3xbyFugdZbrEau9G2td5oJ5FHKdWhPhwhheBNVTPpWsRgp4LkbJFh8A8B743ArHF7bXQJK9n7fmcAAKamFMuvE7z",
  "key8": "2uoZqeTxxhwi3ZcobPcjF5Fy9bCPkhzyY3nwjNRHwRaSyddYc8W82zoYVcqFuSBVU4z8goHMhsBrRzjMSNUZoXQg",
  "key9": "2pMi19wFpgz5UyaWRjJGwJZLcLuDMx4gHcbzmWfX6Y5KCjngL6JJTHkdkyDUDeNf5do9LrSRDAG6VoBdnrDoJAS",
  "key10": "399roxGAN8RHW3V7tpxAaCV48FiPwoUjpqs6HbnHfLe5tVHMEpjrhaidGoLCvWC7Jww1oPF5zmqE9QGfsZnPRfqf",
  "key11": "5f521njqHnwPGtqFWp6W7AKbMVHSc9Dp7VrFUSc8eqopdJgze7SVhcAnqkKrZTAbfT8JJL3Yvokao6N4kuhGKZkM",
  "key12": "5xWgPkQB6RnbVHXcaM2aahKLF81htb3tbfC78b4BC4nuFMEiyJ96kvGQu89EVkvLuTzpg9ReVHZVxKi2vyasiQQ1",
  "key13": "5ynopCZA8ds4SErxok5zMuebBGthxFi9YmHfyQcVXQUobnPgyqKyCTZ1vBJhRVYQxmVPV8TFpxJynEsNpqtsdbet",
  "key14": "39cL3bqmJX5amJ8q3QNpUJQmTo6GE5woo5GZswFu5Wd9VtmY3PjeftrXgYbk1LSPyvX2Md71njReXrAfoik3rKwR",
  "key15": "2ZMSqmgGyN6hufabPTopckgiLgMWjwt1K1jPS1HQbjEfjQuzprXxAzBm28eogz77Gku3gjAVD93oDWd4Y5g31chp",
  "key16": "5Qmo7KgoAEEbejAHvSUFsEPDavtksegR6EecBUHt5kuFrPCvgqbtMuq7VhZvT7wJqdBxsbTCufdvcfbAHzG3yco",
  "key17": "35VivYew4StALTq5EVaFy9SVxddQtkjq8D6Lw56Y9et2YKwzmx6pLEMTyg8GgFAgpeW3CzoSXNXdFtKwN68UMbJF",
  "key18": "2Ech3wJGdZfd8Acov3VTPvxH5MEKWvDQFCE2pw22zXToZZQADYD9WU8eU36YgYognQrUpQ412WqzMQf5C412xARf",
  "key19": "3NN4Sw9VBaYmaYAy9afJ5DRsCfkz3Q8hgJi61L7JLfi6Ee7snKooJikKwy7Dpcc9ZWNDGCSi4NRCKwNte8T6LxE1",
  "key20": "2nHK7XWZmtYDysxJSaVTu6f2VKeM9cVMXArQoi2CAxebhxwqmPfnNmBP4pgGAD8yiMaifNPDSEyNSmth8EeCtziF",
  "key21": "2mJG2GhKWX5D5bQEw3vvAbvwe9KGkpbKvx4zha7z895eEqYgifRY35p14HTc8aYH7EUXNHaRjrshB1CLzrRinykq",
  "key22": "cA8Xj417MCayeToqSLHpAtMhgaoc5Vavj2iccBWAA15Pt6cKNpKUukY8xC3ch5SNceBzPospKS6Ha19JUeJY5E2",
  "key23": "5dfmziwbfb9PduARiuDpbNXasJ1rKXoX8nXwwBm6jPfAdswhXavRgPXMktkzKDrLR2MnYmbqcSVXm5cQJdgifnHR",
  "key24": "3dyEoWT72arM5gg4ndHn6AUwqyzbomsf36gPyKbBaAg9p5wKn1hcT7C4oxHiW1oLe6vYbwRQF2CzHgvUHeV41ov3",
  "key25": "2VYQZKExMBiP4cuLBWEX7kRmvoRACrpgUXYfoB1a7fUt6gm6kYXiMJdnRUXbPKWAC4sQGRn5iVnXNPdb4j4LSpZQ",
  "key26": "34iL4tHc5PxWiQtHnnMFCVErLAT1wD2YPSQaNQeZh3hTuGtMD8BRCbmuDLRg5hXmbnGGtekxFoVNTMmncikSPSJe",
  "key27": "4dZQnfz9H13w5bG62CCyGdjfJBEHbATz165nqDyET4rqGNvR89uRqZ7kxVauCztrEN1dndfY6npaTikzqWQ8uwzz",
  "key28": "4g1jrnExYKpvLfkhxVxq7ZC9hkDje76a21vK4C1ofuNPdo8MVmCZDfqseWA3cAwiQcUAqRMdHmXaAuTAs8wzXD75",
  "key29": "2hecxcbCgCNR4yWQfCsSod5hTpn61RcGxJYYixJNeT474gUhKiHuxNG2DWqB3qBPmabkG1XCUYztZ7JXmi4sUJw7"
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
