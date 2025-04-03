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
    "24cDPaE5h4HJ6KvTmdzospEko5zqAzgAZNz2hhXRtgpTbvQL48yXL8msXCNT5xPygScNh7E9SHRPmMf8GPnH9qdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RF98Fx42uz4TdGw2uka5j9KwRmjUFycbXG1dBj8Q8KnHDqaiQVkU9jau91gt15BKc9YXAXAhoKAL9jHinechGem",
  "key1": "51LPWofgwHBnvNxJX1j8AkVqSKNef74Bz8F9yiynAJNss853wqzMjezKko7YGC4pdDncnv3Ai2tfRrdyxgfzGotB",
  "key2": "GG8TMdoSVERRafEx3QbuGyqiQGgRwHZNqyZsxghQiXroDygGDKCVYpv3TNP6b4oEiefaXk8CGbLbzHs9Aaaht3D",
  "key3": "2E2VrxMyf5zx9RZjfuoZLPBzYy99d7Mfp1wnyVce4ugaWLrx5SAumevy8kgcVpJr75eakga4S25GXJaGGAo9Dxkf",
  "key4": "CZfZZjCdppY6W1GD8ja9yXtrFWxjgtMfCyAQFsyE6vo182w1sQnRx9BQnq6ebHeKTWt9NWh4MWntdRvoJRZ3UAg",
  "key5": "3tiFaRUbcX6siUhq8gorWPoiaTyujjYzha417xSsxGLYZpjpTCpVCFcR2GeNToYrq1mehn88qgNGaB33fVNKDPRW",
  "key6": "5rFcaLeCKfLVqsQivZDmt3DyABiXMuS2S3AARRerGw6NTtzjGuLzRUepBr2J5g4FAXKgznN8rdcfByVAxn5gvSED",
  "key7": "5xBZrRV7S7VFtwZYiL9Sj9Ewkd8tSPYZ2ixcPqbdf8mDAP3cZCNHRmoqa7HK2nLjMBypmdM4kGkbyLr7ytTuH8vq",
  "key8": "3NesuBi5MRRJ8FnLa1AAvERuQK7kf33J4cArCvtPmUskuVoe3tUH6XBw88dm5u1Ci3hi52R265QGnY9iCVGdAGaS",
  "key9": "46jDDPdT2oGdbrdtdwfydG9c8C1JkACrv6ivM53tqi4jRzwXNKJswf1XAadGV1S5MmzyvXE7k3BfmSF4FVoFte94",
  "key10": "R39Uut8DMGUtRAKAF9nmGVN8g1HW9tXjzvKhYY2zg8WjW2WtR9uDkPrnYc6Yvoompqfbm51R8uRBNGr4dyfBa8h",
  "key11": "4GHfwZi1pFznTQ43rPjsu4U5UzHAmDEUVVrGpbRGvvZqicgFNGYR7WAbihoVm3ebfUmAAkhE9UxkijA7nzJuBzzW",
  "key12": "8EEY55f5wMuWr9CTwbTqAycGyVaeicR4TYyPz4FTrqdsfcypkM2kHfLPW9KW4WRynG2zV44rYzGosQRhWPPpDKy",
  "key13": "4vnHV9YWiT9ENXXUrvFyox8bJURDmzQYtNs3ze328cZ8q6yn4VfSr6BJmR5KGCW3N1MJwBCu4D6TG4d67yXime4i",
  "key14": "3ELtDz1mqhtkxaLRRM8iCStqZZkzMbuw3o5jvMkWfYEbjMBQDj6WHVLN6ZenwXPg4KcLR6kVg5A6ZjSxf431yoLJ",
  "key15": "38MMwHKHdeL5DCUr62fMsdSMnwuvzuP7P4ugWjpagLsaAVdNXFiPiB8qhLUWAHdvcXkr3EMcAoRLWeoi8XxNtCc6",
  "key16": "4uZxR2iDw9jyYd6XHCAQTUVhz8c6wgeVW7xLWAPXRoqyEd3G8HaKNF3LNYzeiuqNc4rdThFdzUvY6Uo9nbMrt1dA",
  "key17": "5rE6u4HUcNAKYmRrdfJkHDzcwF8EBDv6zfT3rPDzLGb1RyfZgekJncHBsNVaZzy8A7tVghUG4LGmxisyKA5FNX7b",
  "key18": "5dwnc4cCcYRGggtuxHtiD3uaD94r6FHiLcVhfrnjSgRxtVz2NcGXpS2hWYdL8LnErQETNWB3V4nv9GbSsAvN4Dfa",
  "key19": "4fhF9k9RrBFosmLnHazLXaQbC966FKDo9rNoT7AAAkartvL8V9y5hvsxZbArMXUsS7Rmn1VZL3DiZpWXBgyp9m1g",
  "key20": "5L5DbFk7P1pzRp9YgxYCMGHYsM8THtAFhdMrbAYqc56GfAhbJPY5vHgzLio9JDRuHKaqkAnwPkKepJXtv9QXmo1E",
  "key21": "4rvES96wNXbSpFZ812rhW6GNvpYK5kxXL8vZt1FuWWFXqWWrEoEuQRcYDgF8Qac376Y5C2FfbQFEQUYz3eZFz9gN",
  "key22": "5QiPpRr11GFEeRQkJHNgRRMsssfdjEN6Rktj5FWiuLrCWGzErBBz8ASJKvobJmhbaS9XaeC4foMs2zMdzgf6zkUQ",
  "key23": "2CCJWSySXA3rDCAGCTNrHvoZaJLNurptzzhzDRzrnoKtx8BXuXgAzFshGxWoya1msx1CJmkZdF2nnATtiCj76Xa8",
  "key24": "2RSp7sEitktjc9jmgX6TRJprZVpj4UJUjiHKHn2NNBWieA6WZUkh6F3Rd9bSsgSpaJRyuMM64smjdF1bfB2BbMT9",
  "key25": "TxLN6LzB5JiDecMQEuTpqTpy5w3HSzUKFFNifGXzua9uooc1HkFc7SsNXXunKNVZTk3Cp8CR9RMw2aSVeQdC7YJ",
  "key26": "4mWEaibPRYU9nFr2EKnL77HYjEEF5YefnQjkAH4ZAvysmVncDKKGh3yJTbM35auXmbV2d71ZrdYKXe41tSwyDtbq",
  "key27": "An2y19sBsLjsvNK9xAYbMYMGoLojqFc99is9fLe3dWLZkVqB6SzmnGDVTPRLGpHqw3F19aKQ5d8xjTUe71cG4DC",
  "key28": "JdRhQievpfddRZPKvBjmRMWSKaFfHkSDYS7kehfHkq41kNaArUoQa6sHgGHWe5hASDk3VZt1GVDqux3ZU3XMDr9",
  "key29": "3sqnh77cXvQQxvuU16FN9UDYmgc66xjEaKvC68QeHoZZZXoHrbv2JL2gZa43tZo61CFYQjQ3hMDsfPUUUxoeS8YH",
  "key30": "5iNWh4gS6nXAb836mLDeQEKUQovc3ypvVCiNaxfZQc8sqbhL6Nq3T1Ajp8jNwATAcogd8PfCzeWEwCX2rSp939S",
  "key31": "3cdr8TxXJtMcwHGnRBmTEdf4myiLhRLQ15qd3JtCzJpan2mrETVafERm6hGVV7YvkTqqBWDUgrdhXRYFLm1uKn3U",
  "key32": "4tW2Qyo1JK31a2CfeH4Mv15SQW1PLpvXHYWectbqf5r7pMwUtTCyfPQQXiLBvkEEjKnWgJfy3YTboTCzseKGF9gr",
  "key33": "2j8A5hn3onwQPRt34Z5rKhUBWqdqz7aJohFgd6unRKxPVpkRTgJZyLdGN7wDv1zc2zmgnDraHpCZcfmpNtdrCGcW",
  "key34": "4LgTTSWWVkuhsRch9eror45UvV9NqVuKANxAz5XGpv8fvqyHPJMhTWV8WF8dvzHTWrcADqbqQzeTpWuHwsDzyMjd",
  "key35": "2oAyBPJGvrSp6ygJVoXF8PE1jtMYv2UbCXMTmm33tbj6fHEdECSztJE1Sxm8yMvsGYZESji3iogThJ8fDTUQHZMh",
  "key36": "2vx7Ey15ATYUzJ9jMHC1tFYGS2qhnaXQ82vpFcoaq2jwGMf8BvVA8m56xb4UksZvJhPhnhKZh72qizL2b6h6RGuZ",
  "key37": "2YGfhWdvZc8i8yew6gAJE1UESdPX4RtM9DHaV2nwbvhKz41XmponVnXyJzr3TD8NT1J4VsoiGDsp5gorHTW5yGjL",
  "key38": "51RC7bre7CkPcn4K2qDzqqJEuJowmbfgiyzyjBPTfjmu3d5eQa2Z3GUEfJtBNh7vFjnpRWg6JiG5Q2ouugspS5Xs",
  "key39": "CEobqMpuBjnH3UVjWaJV4Y5FcRNRHNYoWpHVTNkuGtvmgmSmewDG3jdX2vfjBqVHnzDBX8MJPa4EkDjAu9PTa5y",
  "key40": "iPoxrNXmPuP35n8RapQNV6WtCZfznWhjtb68b3VKVbY5t4fQvnCZgUVuzuMovFYwrv5Pd3fHyW5TreX2aNqqCH2",
  "key41": "LAMf5YmsT9paQjNerBD9a1H4zmwp6Rr8z3dmFDecu7mYPeJ6Z6yoa1tXiXfJBUsfH5aLMLNzWnB9FhSYTH5uuGt",
  "key42": "2QZxFMLbMe5B8z4XQTPbVXxjPkJouGJqbz8Fzkt9pmTfQqrd4vS2JALnDQes5tHXM5M14vhvFkSkRKTiqxKG8bsJ"
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
