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
    "54H2ed1j2cc8Mj2D45NYewNb2iHQCRGEgMFZheAXHJCb9DHdy8UccfA92Dauzt3AYd1CxcHC814DxFV5UpfkSpHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZba3VZziyixLiz28oNdP1J8dpgH3sGZkHVi6Ssce3nsBjbum6JUt7gcbVNRTt7BwLzp3CtH8DLkedD5s6nazC3",
  "key1": "23xyVtbG6Zfuo9M5w1x7VwESkUkWrNATJ9RYg6Ca7hXm9VDUjruvvCdc2AToTBXSSdXj38cGzdrZJPkp9Zbxrcz1",
  "key2": "2HSgPhjLKNjiMXRyk6UEYeWNbPf5u8ptfv34ZiQxTevf682EoRgkiMNuonubFme73dhhiksj5cuEz4JPW8TKYAMf",
  "key3": "wA2ZTvQ4qCfqpia7ARfuxfxxED9wdKvGj1fJjSXBiUy6Gci7T8UVnBHFUoiqSfo76SDfQBw5sLmBAbXc9e1rWHK",
  "key4": "4gNc8D8YQzGLC1nysJkBaJ4995ZfKQsJ771gcwsQavhXZjv87yVpd2MvHFqL27hshsdHJVJxAVoKrgQyk63tvznn",
  "key5": "2bj73CbZxc1kpGy92UTHgi1S6AQbxymdttgcSXf3qfWYSAoDMrZTeDcjFHD8qm72LCYvhYFu4uB1YradrWqTWWtP",
  "key6": "5gdoA4A7AjbitXEAxheWThkjo32sn5mCwZ729zj5Z3ndgVVDvcLUzdHgv5NjCotwb2p9yKoBzcKNad872DoPpD27",
  "key7": "d4esMJcz7NiHjTJ36vdboYjKuV912T5oiTr5tcaSeMVik11Ue2bTVeVzz8AK97rcGoUD38PV5xEjxpVnhSdhoHA",
  "key8": "5FCgRAwN6teVGtyqhvNBeQimK7feMjcScoBeLimUnSUC5TqxAZ8NENjsZmryCWNnai41LPFHxG3Xcdtf3NCst2kg",
  "key9": "54nxbVBQqetNEo1jpL97PyCutZAnUqEBrMf17uvotS1jP2AoKBMWSe5yX61c8MjGNxa92Nx3YLaBhFRPTiRQsCcc",
  "key10": "2kCc53eruS8SSWppCG8pxgNnqE5AmJmzNtQUe1gxZPqUCYv6Np6xtWwgDXPhE1hF2BVvKnVfdUuwvLjyFzq5FiGs",
  "key11": "2VWaYcYTERQtyqCowpKnUVX6LuucAfXJc6sN1Jisn7SXdKBHfNGC8GBdMN28W1MC3ino25DmCcXmEbQuLWXWCxhc",
  "key12": "ZhvKtkdpbdJ2wuTY38yUPQpEaJaqnjjdfAJY9cQZ7r3GLHYKNqbLZBitJZKMNAdt47sUZ9Qn9XQ5uotSnYhNgo4",
  "key13": "4xek7rNxMwzNGKsk757jHwmAKsyA8VmkbGNCsnUS9VmeksQsmxJiuRKT3cuAGLpqEk6w4AE9r9i7huKBky4QENec",
  "key14": "5tC4RLmqmru2mM7PonwRdREUbUdoik23mG95ZVorXfG1FLyjZQC4Ejpv18aa16ZtqC9teccbk7dt54jG66KugXYt",
  "key15": "2rFg55PyTZptuKtnCtSutbgzzfiWNAZ3S3beAwkuxkK3qycQPnVLKaFdrVhY6ckw6CvpD7WcShFQs5HbAhmf3GbT",
  "key16": "4rsTCDaSGojnytw26n61pAyr93gHpgR1ZAiBfC6aYhLysdPvsF1Q58nBXi86jAzESS74wY7E8VGaeBdaGvLqX149",
  "key17": "3x9aXDXa9SbMaSwwn4vQvice8pE2jpjJR7VWYBKKhGDBjwqUBAcaP692hFRXHawtqnuKwqfmf5SBrqW1AW6soXaH",
  "key18": "3VnvzA9MX39Dbhihc82MBdt8FnhdCeXeffh5AKPrYjztqZdgh1sAqw2Pq1Bo5gvhZgq7nfmRNM75G2gQKhyzCioc",
  "key19": "2jPyi9VPQ855y8mrh7rdEnmGg9yDrh7yYfhhEjyGxCFxC6r91DCbfUBthbkX5WPMfgdvNdSmsvZeL9tV4jcY1ASR",
  "key20": "3AXvQmxKZVn3LJiBmb9sTkeNL3GuBgtQ5coEZYMQFqFhHTpqJTA4b7YS4EWq6tUTooMBrbm6eAWdwne5kQNLimb",
  "key21": "4dYMfhDpg3r7PsG7myWdwoceDJq29SucEo2ToLWuUMCBcWynGkKtuEKmDRGwmMLRmbihqMkuKgW7chqb4S2m93SG",
  "key22": "YuspxpxtwyhiAfBM1R8Ui7g4PSzmVN9KfYhCnnYEdMkQu7VMtAXcPsjTHpVMDk6KCnwU2FBRovSNWRGLfb4QVS9",
  "key23": "4Ya5cvpkJsKNMLvxF9Z5dLDkZvAqiGUKwBWJ1qwTV5xBpzS9WEma3d3XoQWUmvvDicaomgqEh5LKB15pgPVjV6Hp",
  "key24": "5b9HhgwZj9QMzbg8NurcK2oG4uH73M7iRZjcexH3iJYCnEB6M6TnQ7fKKdtPAbAmBRsaNECRdasz5qex7L5UMBby",
  "key25": "2K8EUzjMH2QFmw1zAGHPKAFizRzHt9jj2KMpWdAm3wFKWC7DyNrSzYejcpNjX1X1gAw9wUML7AKCED4Mvm5bzT9p",
  "key26": "4aRLGszu8UUsdPP7RoTapQMxKUaYoQzx2xy3HE1hbm8zxXVssBrAe9rwK8fpvJUXwNdRanRzXDK63QWKef1SNEMV",
  "key27": "2wryB4nEhzmk66zbcKMV8foKpTeUrcdsVgfi1XZgUgsPX8XfQ6mDPapTPRvzRFmebuzgMCu3zvSvEdHoKn22L2Fq",
  "key28": "3dk4zQuzX7rLMQ8JA7P5QTVcdtYWpdGE3xh9kSaFvSqGKnoLNkSRCkpzTjPywpLBcVePphy94YSS8gvmo5ubfsqK",
  "key29": "3ZPdUpRto4mKFScKX7JGf2v4qQGh1egZvZhwfeSBb1mAPEHzMPUCvmW9JuQrTZcRizZ4tzQu6JQUPuovKAZuu3EH"
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
