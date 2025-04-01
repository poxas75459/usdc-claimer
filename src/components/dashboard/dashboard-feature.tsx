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
    "4XzbMSThFsCnm8nfLdTnqa8jgR3Wag8YfCWbnBBPJdpYFrSHJDTSYWb6yyJUEFHn2t5xdWoVYQiUY8qoLFY2TWPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5queBoRqm7qcR5Fmd41v4QDuLZApT2KJWJh6yYo6DoQKLuWaSA7CyzCr7ZGKZ9btEDvGhqoZUwExbtmFbxFLaS1N",
  "key1": "33Hn5gTCnMYNgXcZnMt9UsEG1Zno68vzkR6xV6YPUioJ8dhBmAfNxYpAADSKpetzr8ChWVGkoHk9BLKPcLyYKnEc",
  "key2": "3nFqxSvtnDgT48ePmh3546yB133xjc42hF76SBvVLFtfSsBYvycHptpc9sdK1giHteGM3BHpmjjLtsoXiPNJaQrr",
  "key3": "4SBZoVCY3SVdUe9v4iUSPskS7bvBD4MwEfN5p5DK496xbW3RrUMiynbPw2iZ2Uzy4Zoo5st292JoAEdKWYpDiBEH",
  "key4": "5eAcD6GuiN2PF4ihEJJQ753WrwDt3Ty4rCUBgrys1J78GBUxivdactUSwP6dQw7dNJqvCACziYki9Q5SbN8U8dux",
  "key5": "2zGnaiT5RacqD5M5M7rnNYL3EawDCJyHPiFvgHQQRaauc7kG3849A9sufY4wZdSC6xwKcdM54eNuH7upZcYb4KFg",
  "key6": "4muXcyXHmKQ3hosj17dREo2H6cKKSEzifkza3r42x462ACpEHXxnBBubwHAUq9NbmHUKDigQ42TVE91385xMQVck",
  "key7": "2sszB662hSgWXJ7pguLAgxFP4hzSgG1MySUoVs2bJ4LGxL8ip2zGNiJeMKyNLQ6uZy2ssyx6mnpM9gp4VHCqTVWr",
  "key8": "2AeUxafMPcoyiBte6raC6QC55ytEstsHZrdpqh3cmvqYS3x6TBY39UyxJkbrBuPG7Lh9D1XoUjk459JL7kfgsxet",
  "key9": "5rRQ6885atFBLLWX39Lrkd1snMHfLM1DFwKGAu5gSTUyFymnyAqPJM5X2tTkWEqy16C1dvdp81D4853w6h3kkYuJ",
  "key10": "52CvZBx1gwberPXtxwzqJiiiwp22mr2FokYkxEPdeWjs3SMibgUr6HV3dVKAXrVwx4aEtjWH915ccUwuKigP9NK1",
  "key11": "4nJSbHKr2GpBfjpmuvFXr63hjJAJRmThT3CoxxxoxLwsYJwAQrFuMRDAA32H8QJqZ51tgnnrFjCezc32Yuo4gd7K",
  "key12": "49g7fJKu358C3wFb7Yj422ZqSfpUg7ebXKjdXzZ5j7GNMPk4VgUn7pcwAf7smTm4NgUpvZ8X8ZUiMq946BX5rHm8",
  "key13": "5heUdR3vEGY5Lg45Sg8Xs7EfPFhNf8yYYGGB5Cy9cL1hSeHdQBUwDAQQaNgWL34MLm6aRGA5rGdeDmPNVbrwgZNY",
  "key14": "2j4JyrjcaLiXHivFGFCSkdfNCtFSewX7ZaMbbZYvdvP2ADKDio7WjkHj9KEJ8oUH9X5Pj6TvsXn7w1QNnwyiMptr",
  "key15": "4FCQgUamNLRfBNEfn4ygiphMKFxWVnQeyh7ikNhBkfB6BnT8TdYQHszDXaj7VoATMwso51AEUuuLeuMbo6Yb6RML",
  "key16": "4vWPYPF7RhKALkfgiAfKnkTS2mdVcKq9d2NZ7a52YquYVQev3Y4JdeqMbbkNxbSgoPdFGaygifU6tWWqqM39RRDT",
  "key17": "3WCTWAaY9rPF8sY5yrA8WhZsfPVEpccjpJfPUaJf4Noj5qAJA3GDjDhbm42E3qut88fsE49mzej8DJXbhZLMKNiU",
  "key18": "4zd1J91VkxMNN1RimUpeRyT5wgVbFQengjcgprabjkj1B7v2sDf5LQud9VKbmHTyQaeoHcc93NMXSK7SBAkMXc1i",
  "key19": "5RJXD1gpNWWGK2rrXMvW3woNf9JNbZKHGb3PhDP8U182hSa7PviGqrkJiKrSh8aBZsKsjq2hX2prnPhqCGLamEg8",
  "key20": "nQaZibobD71Vx58xfuYnK5NZiDjAvxdtJMap4JDg9N8NRuwUjyC7Z1FbvpuvE8UALiqEHtxTpXLNbSjrLerbYxR",
  "key21": "2RbUFKxtYzKb5m8tjREeppDHqHHMJebokXtv7TiJVTF2oApLnm5XkKjviR3PoTSYCgyTzEva1zAZFALSZkdjQrin",
  "key22": "52ecknhwcjC9LrnVavscQcziK6TayN5NMQ4wCcZSqVk8n6TPop9cgbcGe2HoBiHP2TYH49mDidTPCgbdZi2qGU69",
  "key23": "3QJPkrttxhbDufvwRSEbHpC4HAiqtD1hV5Lns2HpL8gD2jwZ2tvgkK6DsUx6DBge7QvkMG27H1TVp5HS74uPjc9U",
  "key24": "47b9EoUWgkXUWfv57fEKsG6PPv1Pxh6eJ6rT6rGrEPm1fpZXjJa2PeiiDpDsn5PqdKJEjGKfHFnLoguakvUFJfJe",
  "key25": "cGxPHX48ks5HxcqRCUekMomHMFPxDdT8zkR7VNJny6KDsoeEhGBnFB6MhGzswYQkRvbY6j5jyg845qDEBNbYGLJ",
  "key26": "2HYAukcKpwCbamKatjFqPY4ednUfFHxP3b5uQiqHKm3WwmwLw3zLFVqebxZ2jxmywHmfjQdfHeFx7Dkkymua6vMH",
  "key27": "2iZX8j4Bg24iCZMzqnvYqWu8qzCHZeuqfHVrLabiAqv4PNXQ2NYGpg2yP2hAxiuF6RyWDL57t2UBCpsxUrcciTjK",
  "key28": "2ADpp9qeJbemptEx9goufZPhgEqHGiyVU54aYFh1eaUCnQAcmNSuN9Pnvc4ZifjQELdgPh1wNSD62mrYctLfRMZE",
  "key29": "5k5c7ux7D699FT9U2LJFCwnmnQbHh85XdSbZx2Gth9wC9Pq1zP9x9jifLpqFW34jTw9ZuhALWfLj8SfknSL3Q1V5",
  "key30": "2MJhJ1sWgN5NYCdJCm1qFgXCRLkd42qoyp4QDQw3i23jJiEYZr8UJEXd5TdPgjJZp83jps1UoqZAwXaLcwPSmUn6",
  "key31": "2QxkidULGRhPsKDdFJnUKCJmt9SBpuhRXrTHxjvpisvF2r3oUueeNK9NpJ618kL1nFAbL3AeMrzQfLy44oiCCKDd",
  "key32": "3UY6JfaZqxaA4Vzs6vJDCqzR3wtMqaLu3ncz8A8xXmofLN1YRQcUPvFdbQm9RD3ZiQuT7ekBT4DfLST2wRgDx4ZM",
  "key33": "5ksDg6eWnFcLgv9eweFprNMYpGwWcRw3GkXEt8wn2BbtSgAjtT9rp2H9jKvG4N1teMmsMWgUGNf1PcLyxWwEUf4h",
  "key34": "34o16bTV5RBsTpGxqrXfsQDk5ooBJdcPK7GqzAMBXr56izYvt4sG9CoBZaY6BgorSHZE2YNnfwTFdBZhQXk3q8v4",
  "key35": "VBaiV7B6F4HnkYbhAaAKN24KR89qtu9ETW4WwwWrF8kPzkktKxWzP4Dqcx77Pjq7M57kpLCVEgtRb9gdus8hQdV",
  "key36": "aJhx1FAoNwa98VtPLV1mcSemSQ786Au1xxHRG8SaKuUBZgnSTkGkGo6siBmWNKARdeg8UJUHDGQ7BumxK8HTjmD",
  "key37": "5KKF9orUfurA61yF2jHjWuLSmCcFeM9pj8V4baWqyNvtUQnU9wPPS4hp6ragUtFBdHZQ3wy6obKDdTwkps5fJ7om",
  "key38": "67afzfg1GSNLPYf3LFpuTwb7N18daXuiE7cBR5LnAC4Ag6hSznnG9eNVc2xBKpKs77D8Y3np2JJGpnzxBSfCxmrR",
  "key39": "2uW7SPKV7hme8KFgyiqYt5iJbHbL8gTJyL8CgUqh3LXWqsoc9p4UmFvCKH2bCjXxwWbDmPw2iXSkEgtyr7LcedhJ",
  "key40": "2PWLwkgqS1y7taQR6Cos4EukQ2eJQiXdQRtu98Ko2qpAXEvQdhvVfSN9xXPfDq2m5quS4Dkj27YSkn1eCD47NbBS"
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
