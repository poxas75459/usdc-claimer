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
    "Qw3RqooAxkSCAQGTJ2UF3CZoV6W6kwcqTPzQeq1MSF9aBbHs836Xz8w7kcvMxWoBv1PXgiuSTXMmHXAQ3MgqNjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owVpG11xt63gWVM9hXUXb8CCjr3e8vxyMFCxR9KpchE8W9xYt6RVNt9ea2DX5CD6SGVSVKzhzHZbtZrqWsQ1Mbm",
  "key1": "4nNMnAnxoEQPfKLUWuBC97yWRNmeNiQqjSXyZnKLLfn1MMRnozkWiia1gevPJiG1rEh8HBmWnETN4gjSVgbYhtac",
  "key2": "24YCFi7cgYkfkXcX7QkGXpmmcFbjYp3BSAUohVidLuzEZRuJrAxVsqWMaApQCMRqNg9YmMDuEfMQV5wPJKoop4MZ",
  "key3": "2YoWv6wxvZVBZX5LSzH7uj9AcXbhuzuBoeUVSPxkuerWSHfNMwSxqGFsYiHSUZqssYEWbafUmDbqnuSk2K6yvxAp",
  "key4": "39oERViqicNcveqsvbjk2cLCWo2yTa7Tumo5Uvj2SDcZfinSEe8EKLncZSzDPttWXBEtT5h8TqLw3N7KtUuwXuC9",
  "key5": "5r3VLA3S7ccK9C5uWRSLXgQjjPT11GcgEUi5PGqkuBUsbe7RytrV7D2wAvHKppGdSTroW17bUeVpLTsUoT8rSfEa",
  "key6": "3ZRnAc6YSCRsttW7oiGHV9mrVDi2S5BWvuXEwfxBJLdFVU8NiVTEFaTgBM2JVeAQc1KRamzv7tonfpaEVRYs44gR",
  "key7": "JS7a6C215bKcwmSCg5aYHzmrdQNzDydMzwoZnPqybvssvpKAuHqaKymoNTNdDJt3biBKyJP8HReQ8AEtHL1nPLi",
  "key8": "43Tw5KFmGdSQyWy5ajR91Q7dSsF5QUd8dQzBM2zo1YgBPkHDgvQCEpM2gzktSLRFwTQAx1fY2KX6EjXNzxxKBHaw",
  "key9": "v8Uf8PMZ3eTSQaTuMJ8dMA7cqhwMkVK2QSKcFPjmwp32b6Wgq2JGcd8WutcgqiFkVfreb7axq6vBNv57K5yWZdS",
  "key10": "7rEqSBFGoTjNnHpgGAcyW7nWeKRaAne7o2mWEtce6dGSvMDKSU8WWwdTrTfFojz57HorwUNhu9PcJmz6RMpusLF",
  "key11": "2a9JcjmaRAMBdxxN43f5qLAPT8h6QyqyAtMzEeHpyySG2WobJRTJ2XjU8Ms7k8r3sqiA8dLxs6YKMG1krKhgBxC3",
  "key12": "LH1F2tfLxBGgVNgudCWbcfMBahW56JZ5HYLygqJ9G2AT1SyJexin12EAMBzY65HeU9VcSNA5gDbkxL72R9V73PQ",
  "key13": "XpK2pgA1KkLVFzSzc5BjWwwm3Xo8Mxo8c8NL4VCM71ZwqrE3Jaff3PqqpEB4TRoh3G3mH8db1PpNWvgHDpw4iha",
  "key14": "2KBzwHARdrRwYb8x6mEeHV2YGYdGUa77SqyChoPWM8oAQYxqzQ5hPtZsB462DRcuG7F6dMrkvWLmjvG1hyf1aqUx",
  "key15": "3Lkz4g4nifk7K9kXteWBBgwcwm5Xyo6cstR897cQgHcsF2Yh3GEU86TKuJn3Tn7nSVGKBnoheDna1i6wSbFRcVge",
  "key16": "3TXrJJHeqJZe8hvYuearfFF7Y9qdNuzrVgX15eki5pFx32kgcHy36VbZMDB4BgpjHUmYw3QLMfQRwAk2GWPQBbA5",
  "key17": "2QLwnut5W5ZQK8ZVh2YYoXALo8VKVmjM8Xhpv34tVDJABqXCVJiYds9rY9Aj8gofq4g8jJJnQtEj2K3uLGvqkbR2",
  "key18": "2e2fUWdgzNDfu1CNyJUs848x969TmYMFMorvtKgtqmbEXhmpsKc9oW4TEKf6bFqJ19RMXKQE3CroKPbgx5PjgF2b",
  "key19": "5oFbjx6V9xCTSQNckYhqJFMS7o4thsNbtAqu2y6z2KeWD67UMDNozdSwWRXagtWjghZGf94ceVVuSgpVyXupEiTg",
  "key20": "kKcdNecAXRgb1iJBLXFKxxNKcQnaAAA5CVmKTTDJysg1ekreL7MhxFTMN4dQbYzEtFVSWD56aJupZdcCSko4fvL",
  "key21": "4SmJS7UmaSa9KsQK4Ycpx5RbXTDhZJ5vHVfGFSL4kJ9fSydteQKVPsqPMMZ7ZFTGe81ryLRpEg2JfijrQvu3f78n",
  "key22": "zeFQHPspAhwgtA5SqcU36X8K9oZSL4TJLcdJVVimBVnKieBbz3VXES3yGwFyiqGBAykKndibzX8JS7WoY88R9KH",
  "key23": "5sSzaR16jiUt2R15P68UdFgj1wmJqKRZaXEi4jDVqZDdafaUbxL9inpsH3A2CeC7bTDU7g288st9NoZ5iui8ufg7",
  "key24": "56HbUUnibU7HPSfb14dFDHfk6eG2Fkb2zEhAoz4BLAkUn86EopLFmNDLtsQpmYFhVqbWUozJ1KmWQ7BFBMZgxE2R",
  "key25": "4XQgXEUTfREzmt1Dwv3RDE1jmutLaT2rbYZbpaufR4jBg4EwYcEnYHJFaEz8VU9KsYZvo2gvajnrznbdZQUXwY45",
  "key26": "2iY1Ch7Kh2iwzrvyaykAk7qTcJQCLG2RDNTewDtsLxcHTY8MHfeHwGMMmjJVRGa14tYuKrTosXYFgGNFjLYak5eg",
  "key27": "vpE1qCmMUDpCLYXYaDu7pxeY9zTJhs4EXQvmJsar2GVF2iuxkCFiSxpWGBCaRsTLbHKf5DDTqC6qUBfLu7qMpNi",
  "key28": "4bPAo9SqJ1KfyECZg5wQAatYm74s4cXeM7JEQt6NinhV3k2bkdBsj7sqvu5nPQhJTjeZRM1ZhKgpt2SCevtER4Rf",
  "key29": "72unNFRu3G9edETmDxyToGV7gvi7vt8vqSKz1FhKWJ15xxjpEm6zbynv8JSopdTLyb2Eg7uY3W58jt7SG8c9Nr7",
  "key30": "4ek17uoo1u3DAnyJvLQjMr9hzj2JVeJN9MahPfFmUwNbwZ91fbxFLjKdjtgxSQtegpsneE6eBEPvDj7vthdowLqe"
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
