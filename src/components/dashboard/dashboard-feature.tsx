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
    "34wwxTYNzBC1amuCfyP6nTFaEY3EU47ikPhMVnFTgyJJPbfGqYYHbZoC2uz7cDp5PajsnsWvDVv7KHiKdFPatkbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nreMQ4NegkhbL2AuALUqqnHvdpihK42iTMDV3kPLiGAtaJebiGgzC4r1KmJUjCdsNsjzy1fTZLqDLYbGY5UVvjL",
  "key1": "5JZDnP6AunXwnF6GrB5NWBSM6NnWUuFy8ue4KCW7n1s2UvDFyscwKgFc6CWDoXNnTHbDd9iZ4oX2cAXsu6XBKsV8",
  "key2": "3m3RhUwCXkaMSnihkZECZjasN4NF9U3oZ6TL8n1XdLivNcyX9DMBpLALYNrU5tvPYpanS2p9NCJP4N9jKnbmJH4N",
  "key3": "3vBZEr42PXAGZX2i64jhPqKBopnaxcXYsTEHBQpxe11nuUgMvhtNabHgqZLjULggksFPpJnrneRwCkxLU7W32Ugb",
  "key4": "PWfeniMKLrbxudiEzpGg3E6RHbaGJVmU8iFaV3rDYHykDrjgwdHsJ2Ub4yJsaJzkys8G6YPJAMDKtiuC83kSH6Z",
  "key5": "3CL39sFSViawdUfXbjwZuVVGRRNmyqzuAXbuUqLvmQYc9WyKs2cEgLxQPidd8exrzfuTDuBwtJ7dFnXDzK3xggnP",
  "key6": "4VLM1f6pjba5jLqhFqTwmhAUBKfpiz7NTkr26YugKTNNG7iMjHgeyVYMgz4E7nXsBA9X3UJY96HyT1yUWwNVqnSq",
  "key7": "4zNDGaa4SzMvqo8cKdVTC9esUTYx6fjebTyAAf4SxyZGjPkgYyMJK5aQUUMpY4bsW8rYMrzyxymaV69XWbNNAvkS",
  "key8": "2RCXHGwUcmS1xTFz17XxvURZgYNXKkGFoZFoCXwURuSiTeAMYXxCBAWX8DMhewjokjY9sAuD7D1h7BYmeBk3UCYh",
  "key9": "5bCcdZ6U3EZCG6Kc3ZZN3SvhEnypLGN7KRRkdDAoZYEFYUfDfwWtLB2ohK67Qzfz5p5uMtHBRb3oquvoXGZy24HP",
  "key10": "5QaHpMNgJVJYiRyzX1SGg5ZWWYTFvgv6JqSGGfRRueM5GXi3fDgSygmyxZVVCj8S628Hg36jjS2AjurLab2AJY2a",
  "key11": "nMjM8Ex5s1WkWVKjDwVE6mwjUmhQTnf41kuGn5cNsTcf6DDQ7RmBWQ3eN38hQiZawVHdAawydCEXRXq7PRyU7R8",
  "key12": "2mXwNX4RgNSBRKHgJZ6sybuboKAjaqNSmsfW8XQ6ASLXmEznZzZYpS7nQjpiM1LdmhREYQrKDBLq8LEDmvNC2dte",
  "key13": "3YLcBAZQYLueyjhCs87HMdWjPeS4CGnSXGgR1wYY8wevS1oxYKBQWTUuhSzZxhMDVut61QiAdtVwomTAW7EoHvCT",
  "key14": "5r7iGVgJtmFEEpRiXkisaw8VoN3ffD9jgdFEcwpmwjJQKtKYfyTKQMQCsUxvGo2fr2RnEaQ5dvj5czqrSFuLWQ2g",
  "key15": "sGJ3L81KtRS5XjT9SPR2AGiVXqrLfrU8ndg51cXqXzR2N5eqdKFtQioTnFnXa6RoDiV6SjZG1hiU615nQ9YXfot",
  "key16": "ybAm8M19suXMgRVfthMajASF9YzrKTA4dkpensdXCxQqRgmtR8f9bZVtzn6HLMjERRHtoHYrF2TraV5bytjTZdh",
  "key17": "32WjBZCTXtmWBFMC2sEo4W1K4i4m6muAU89ECtCJ8wRxsEbccAju585Vp4rLm8UbeKHEbTGH2oBk17VgpZ6aKaFb",
  "key18": "4sBTFr8oMzbW9WEVB2PAHca5rsewHnNXxu6cVFkWUv7TsLDS2JVnq7BiERDsfxy13hB8Cns3U29yts5xPbc9aKin",
  "key19": "3F5xnANZ9DjSsYLxWPp7RJDeXR38KdSWXqM5MJwnXyJfmuQeXBGf73zdMKV51BmjfL7TDngreQrEG6zZKqRvb1wM",
  "key20": "3bc8sbArTaAc95TsVvJLTuyMo1BoVuZF66UHG6PAHDzQR3dyza2S3cT1E2VdFVX7Mgnti89wXr6xdQ1uGgbBQxsm",
  "key21": "5VhYe6WesYKAkcy76MFpQWoUL1kfx5nDwLiuR7koXmSbVZXA5zH6YcwwzG16rb3RpsFdFKEXkBnxfuEzgWZRW3V",
  "key22": "aCLo5kzCAURqs7RfUL6h2oCiqGizhjVYTvG7cCbLGa7KiH25DFuScoBDBmBJC3ExNFbYLWHwxbDvfH2pzwB6kiJ",
  "key23": "3KRkPLoEiheViUt2XBw776h75Pt9buEFfEgtfK3dS33waEk5X6DXGP5vaVbB9LPag2zQjzvimJM5me8FU1WpkMtq",
  "key24": "2kDNpAhH7YyQoKXQibGndzCaBAJmzDt1XZnxwMMFxn9hpUuDceMTiUjrDgAW7uUgCaQFu8ddinYLE1bSzuh77j4e",
  "key25": "5qy3J56SeH3L7UyefVEdPftyYM9SS6FZzfWFjLVCCGvB65o2zLueQsrbYgSQpdLR3rShVV4AoZjpMbGYgEQJEwFC",
  "key26": "4nhJLss8hfwa3q3Gp4pb9bp5HLpWA9kjEWwdxgykUpgGpLmYMszuSRWFyz9ALvKQpKn8k7AtKHsRzydPhaK5r91f",
  "key27": "tdtMs8UppVDp8EiFZjC26TyTfvxceGmNMzXmtegqmj7xXFUf2u2ftjEbmi7tWiZUJpZdHNSeiPA4ft7Cg9DyfXx",
  "key28": "2AGLtYVqN8hzXgKsStc23Ez9YUZeeKoupo1jDPF5t6iBKkK8aVFvFosbr5WZgyrgp7SpaP2xk6u1AzF8PR2hdqeu",
  "key29": "3Ph9s1sFpXkH97LEyMCYAFauA3KEhwm4jrApppXi6R3mNfPP2kKV5wGzQgDFyTzDWcJcyFbQTVnvTyS681dASYum",
  "key30": "2QX46nP6JQf3SoiFkA4RqbembQ7hiYgwQtNqT1ZnY15otkaXsHnh9zMKofwtX4fJvxZi4dFtJFzFYNXPRABRyiH9",
  "key31": "2pDLZSJXiGjg3yUScuGKkCDkrfiTGNH7nuFYnJJeXC519ESohDM85RjdmoM9tnxP9RHo2aNSkQ1xDPwuiMnCsPDg",
  "key32": "4ZzG9ZJcX5qdH4cgmG47Xdny4qqn2B2VLp6aJokXofBhD8L8mcpzT4SiyexAQHXRWfKEbCXXU7PqiUuSu1G7kHHB",
  "key33": "MEUhJFi7MDdwaeEojqnbCAyQHGAZsSqCeEkjeph7Nf2wtSMvUQCW33wHbRnGaCtgQm7RiKswNoKY34Eufy12Bw1",
  "key34": "23YVe1nNKQ8RGFiij5X58NAskMfaXK3d1ZdFY8g5fXMpaTqvHXAJfq5HoZb6L8y5b3c3B6DTwUHxktKfCXxeepEX",
  "key35": "2HSifgb3LKyQM1AXQUWp1ZW8LuoRcPYSR2USuoEKBYdYSZcTsJz43dBHCcgmFAHQCeMfQaQ7bw9y9rDP49D7spH",
  "key36": "3jrYG9De7Q7sHYgtb3oNtHmuz5Gxpt5VGhmuU14NzL18Lqd6pJqcMQTgMcrz6uU5pb4kzVRuiGzVVwJiV8kfEHxh",
  "key37": "3WCjDxfLKer3XR5gjRwcVubvCsPqPMM6GxEmb3ae1FMTaJQFsbmgPoqR23vZvr756YHaan8eaq7P3PRtMiU7wNfu",
  "key38": "4KtXiWMEMvVGuemBboWbJokKAEdzyHG54D2b37XKQ4snD2B8iNPUcTVkx6hambvPG9Wdog99soPaRmr7a7V1sMWF",
  "key39": "2mJDVKWLtZf2T5NHNCECQgtakKdJp1thZXhLiRr7wgg9wnWLjx3cxWP51SQp9h9s9DaLfF6DyCgvcR9zT49D6zf3",
  "key40": "5LuVSizV7CLAcvDj8JEvYjkBA9LUHCgLhcVPmy94rxLtRuXukpdMV3CrRADxLP2HEoWUwBMWQLS44zywPM5rrqJV",
  "key41": "5CJU2ur7HkXnZ33NRfjLR6DSv7mHt7opsDQ7drcAdh8tpnuyegd2LrADkydPkSMRYd7iQXXL1yDyiheNSHHxCqQU",
  "key42": "5G5DLXMoQsYh6yWkEkrwUnpuXiHhyWtWTR33X1hqkQPn4D7yG5kmPzSNL8B5k4V7ykdX52ExCyeCKuQTJWktvecZ",
  "key43": "364eAFyd3gh6LrKzLKvgkkTuJA4pNFnGKVWAiGXMcd1u7LCRATdkgAokYf9RJKHmAK1cKnw8LWVtqoaLZJkCPX5t",
  "key44": "5ug8c6F3B7NZu6uQ7jNDdXArDiWojDZe3cWu9NZNiEcPVdbbYcQVwBhezP9eZA1NyxMmGCGxVZFCocEoRPZ2ympv",
  "key45": "3Ufai1S1KEpZS4AAFDrRDqwaZ3PWtbjAcyW6QeLSiQNeM9zy1rXCaezUigQt6mSXQ1SQYDMh3XQJYRovoAdkvZo",
  "key46": "xdq5yhuGqQz4rdQK1SKWHaMSrd85NLGkNBN94H9o4MXN2uHo9JdXVkPbyjhP6PWEzFuxF4AJ2zgG1qtyaHVU2PY"
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
