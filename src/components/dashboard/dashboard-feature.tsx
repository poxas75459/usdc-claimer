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
    "5ARwAvzDdNwDRFsUzKCCsoV2xPJ4P9D2JXmWWfXVYhfgvUkwGryJ2ipE8xr694jxReiaSBcCnw7XXBTSgnP7XyqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYhW3i5eygDqVBBJ5RWX5W6tG8sfY2cseiLWmHvNcjXwGfR68Nd5TeMXbu6kVt4SuBqQrBK5pVWGv5QmyVoNdVs",
  "key1": "3trNcSnL1HaDAiQpqLarEoLinGazt6BvnDkD4Ho2JJSXM7LnohL1kmC7zDgGqakhX5EfVP4jep8bMKQK2igwbmPu",
  "key2": "4uf2hget52Nc3QJjVTnsRDaBq61wSKCf38Qu1N6BtUaWj9PD3N7ER2j4hMCYwUxNWdzPvJuLF6GEsMuXMMA413Ao",
  "key3": "3Nx5ffpg3tvTfwNfvU7xHNg7iC4vwsgvjAMqx9ZYKkDnbK1HUHkzvDGdcJCi2jMq5ihjibhNqrwuvfqBFw5AMGfD",
  "key4": "3KxihMmJUin4eh7Mp2hpYZ4mWjmc8AeGDJ37hiC1WNuunRLXFUtXo3T5vrpNzTNUy2NHcciknv14jmammbpiM8tf",
  "key5": "66LeK9qvAFhNM2FYkBEEz2LT1ZRgqUxBppZHg2t7fDMjcpagUtzfZeTwRxJCYHMhCHhQa3yzmUFw6uQj4bDnTR2x",
  "key6": "3bvjJUKsRiJMeY9dSCX9R82CBP185RmoFzpXxA8Ty5v5FbUGuFmn7ooMCUJRwsmjKJPTcbNZraKqvjaEiJueSKnu",
  "key7": "3MSdDL1YnLJJ1q2rvfRR6EzEgNqCKG2zXTQ56HaMHdt8DYjn3XgNKxd2sWAgoQw2YnQpZFnrkzUw5r1PNaZjmYku",
  "key8": "2shnVNGy468rtbvx1CoHTZysBjVihjKrRP2BmZS2FUfFyCkzJopYvhjCAmNbsQ7g99XvWSzc8h6Vpe3eByKPpscq",
  "key9": "3JA8WJaCRW8GqJ6dCErZLYEGV8X8HgDiABBLFPoZpwtwmKcfwaejaPU5mB2Dh9Xn5xczGTnVAu7myz2JZhk8PM3a",
  "key10": "4B29aVTFKxkEjQ9sZzUDDwdU4V6WdjGNBTLDvpKKBPHHQh9NWbdkXZqXBBMxBE2trRug8i4Ed4fD5EFvKRC4tb3Q",
  "key11": "skDVVTAbqhjTfhrBjoZwZc4qcBma8EQi12LrQxA8KQ3xieg9vsa3BhuFZ3SEeEWfbGZBRpGL3eKxA95kXeRuUEn",
  "key12": "3moM8or7iGPQCh7bHXJbxLmuXdmGPaoTSZTZoNAxG69mzLyNk4HTGivvnSTmn1WTSPhq9gysTk9qiyh3DAMPYzWx",
  "key13": "5hFdQJkHvGoNs9xiZNLMg16QzS8Ycj1TGPmd1HrrthkpX8QTLZ32pW2oRv9FsE9BGTop4ZCZ4juteZwLkBCJtPG9",
  "key14": "5TMdQ23ZZkqeiScVBQLjEyvemDjxgovPiyLHgVGE4rVrhZhjmniUmFXnFEFgRNiYvgTibcVAxWwS5vSQ2ctCtjTM",
  "key15": "5Scs3JMCDb38aEy6edhqQLKnv4Y2sJWxiyhA49XHgyfWQUDUP54iFAqycmumsJGVCNykx1aSDqiLSFekAQRjmHwg",
  "key16": "43LZrXFVs7s2mrjwivAZ1iZPyXi8mCYa78HUqSWbn68x9e4LNfhHh8xSz4b7J5DCYCkhYKt6VkspqR8jCwxvqFE9",
  "key17": "66T7RnDBjXrkSNwuqh5HMccph7sqQT87eiKu6w5WnUgM5zv93ysn9ozsN14GjsSjMdZifo8czG2jPAdxYjft7aKp",
  "key18": "2C1DqYrWwDFkmZhBdqK8xatZesV197hFwt3k5ZBe8r81xPccgtuPKReVng4r1shddAKTDubyALjvZyRYy9TgQNGi",
  "key19": "3PRhtj67CMcrfQEzgNYyD6XnXdg6DNTL3KFFUkTBfYmvyn57B3fHs6aeLLffYptKAVPZ5j3o6AVAVoz8hNbyuH5Q",
  "key20": "2cSjecR8z92qgJTtSWANo6oxzzgfZcJNntZ4hR6CpBh4DWNXT8tUYrtSWp7RpFw3CtZp8rGqo1DtXYdGCvUki7Zu",
  "key21": "3AU26RhRQdF7TT8SR89LVeamMmmReigfuLQhHtiK1Z4MoW5DG5NQEb8ipL7zP6Ymf7fiZsZ4VCPps6JEPL3eN7Tu",
  "key22": "3KAQbnqzmQMqprg4hg2ejbKHam8JcoWPRo7pyFNhXqEJVKnbHLpixPQZQUzahG16C3ojokMi6L1Lw1KuHwk1jipg",
  "key23": "5Su7Z4E4whLwCivq4VVYjgA5GJv4ZTfAhQEbs6ETHEUaXAV5s5FC6nWt3sX1kr5hqsmHBTWmzwTCuT9FMHarM7fp",
  "key24": "4A4sBsNLRjFQ4nySZtTXq14R1PGc9m5UAceGh1p8pkbCAoEZE2HxVC2FaScqsiQy5JZhmsNc1EopPpTSDv2uiaWZ",
  "key25": "46R8GcD7BreTjunk9bX9spQqVLvThQXcHhtaqyrzG8NzozFpt4XkwyXYnfjpFfCmdsVXknp2R43oEdkgNE3xhFYG",
  "key26": "4JMcbtSFdoBgc6CsyMGkzbGer82T4bvRnQYU9yJ6mBPCPby3ysjXYirmUKMdVSh9xcNgqaNLJtE2eGoNWsLJ8AK",
  "key27": "RnjR2nRtXCns9PkVfCqFCM3sECtknVdp7T3fTws7xhyVRpkBvj2tPgwsGaPR9fBuCmQ2fsyso1K17mEF964f4u9",
  "key28": "5LsofHoeUcCP5Um4YRHVhaxjapr37RrwucJwCdg77P8Pe2teWX3VHFUtnR4qXKNvmxgZUmtis35Qn7gm6gGJwHZT",
  "key29": "PM6eJoUjyPtpSe2chRaHJFdT4HNvACMXBKT9nqZjGEVfCeUbdUrgBpmm4VyvW1rFBt7JZ3YZW5x9FfAjTTxdhZh",
  "key30": "5QjFw7NzLq9yea4x8WL4AhC6tiVvMjC3dAHEsDXokPvGGh3tswBAGvx12sRjvN5ryVkeP6REnPvvkEsP1q7v2F9Y",
  "key31": "4B3pBQibjF8RQitMK7AjPCDAkGd8Sa4VsbFwb4grbooNwghsrCmtj5dorxNcPMxXQKJdSiteVD9xYZwRpydjEXZd",
  "key32": "2MgcQ1jgeAyGit6bLw18NyycAzSvFg6KceVeu7mzyB7ghjoGnbYSSpN6hNvpNicvurUAidi5884V1heoFUD61DgK",
  "key33": "55wJVPuCDBa2b3NU5hMmBvzuSddfp855KKgmE9MDXcNyu1NT7fd54SctW9JhddTxDQjHRv9CE1EC8x8VfV3K1fMv",
  "key34": "4yBDVceGwDXUCY2dBhn5vRrvjCGXfNGQyJC3ocsqicsZwLv1odZNFFFSHMVtAmKhfuZCm7JMqVbBiTQQMVyvdGR7",
  "key35": "5kfcUBgZ5rJY6KYR4Jq3hi3btLEM1onNk5vj1oDpLemB5CkiowfCeQ1CCdskPDu3mAjDtiRmwfNTzstDjNbGjupU",
  "key36": "5piaoTCggiC3ZaQBmqAGne4dAADK71csCcaDQQ381HaJYGKMFGS5Dh7zU9QzUYRtLtUjG1ZUHGrn6sEA61KWvk97",
  "key37": "4CrCqA7kjYnaKmVk9hohSJGx8KWrWb7tmRtriqT7swTAwDnj87iQySu1DzEWS98d912zRaXj482qiXi27oMGkMbw"
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
