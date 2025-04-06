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
    "2BgKeBVChEQkRj9PjnMw828N4t7XUWP5cb5ijpv9XNNqgigVJm6J59kRCNFaUkRnPsXeJppnNy5aSSc2vhpCADvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uwZxa4XoTnmVESCegze3B3PL5uL823WxQsGRibuVJktzurfRQJTJLTdgdVwMeFuucthMuN4b9JzfzVvKjB166F6",
  "key1": "5SH8b88C3Haukd6YMQFFKRJfFvEYmTSinkveihf5SKxNokRY3r378XStbWuUzvJWSroMgxDixEmb5x8xEEadXft2",
  "key2": "2Xo6He2jjV3vaiRCfwgwvuMFimRsSsa5DVzr8JUfpcqU2FtuGvSYz47CFezymx7FwULzxccbj195qNotbstdxjFk",
  "key3": "5TfPw6N2ACyP5S9pyU3jCxj6CuMmfzbHyjqojWYN9EpxWvX5rcvrPHGEPBv48mabpchzKBisXZMkkapxZzK5ay34",
  "key4": "4pTormJuJJZAH5qN4HiX5Pgx3eoJQGt2oVp7NgxMVYxp3JNNXNcEogSwsyeotUE88VwWPVUcpnzDBHuFi38a8EL1",
  "key5": "5i6aMizkS3ovXGDXxhV4pQJsCUR5Q4gxTC3N9rcK5JXb4vTtEpR6fJ2NQ3ewedDhrtD3o67WXvnoU2RUid8pdFsb",
  "key6": "VhDujrSudpUHXyyvJvM3jHrjjG9nPEg412SgvYvgks6qFSQzDkzP8vpTRyyE5ie7s6M7xTP5x9hYPCtTBGvqXRo",
  "key7": "611s4YvvcsMjzh7Gr59gGLSS9xGhshvtHUdnG8d2Gi5LqYmsAPtaPZYD9aeonnxE4TRMGaVsdQ2C9o4wjHjRe7oy",
  "key8": "51gcj9GjuKUtZNQmt7uUDwC61oFde4s2geLotVyawsMNdWU9zfayN1renJCbrzAKTowkYxZ2Qox7jSxzhfm5F4qs",
  "key9": "2dGvJsnJaHrBhYRoyJcnK1RWSUYN63XKhTqVg8R5L24CEJfJpXoMrtX1kR5uWFBybymgxNqTuPTzYJ2cTeuEzMo",
  "key10": "2cahxQTjMJbLpKiH3niQdFCH8HmRfy77yUpvAznnQ9Qq6FnFPVZeWFVBx2kooU3pqybdovPNkuatiUnDWAkYVQXv",
  "key11": "4BtHYS3MuHJKCoA8qWCiWjYfgzFGq2KbWAgZ6y8ERGgR2r9Xb5L26x6Qt7qaXpBtXHPK6TkWKc5gJXYynwGJn79p",
  "key12": "63uwcgvukDHGGpwE6rhReEb6wo4U31dCVxK354w7oRGKJqk6BYeeGUqtw8R2Paxd9gTnLQ24y1fwfCFNdty73KmV",
  "key13": "ySgnwLr7v71rKoqsAsMfWKkA2BF5v3EWS9YfnxEzyU2BAXha9pq1Jz8WW41k7XL26zhkrAn1iHUnR1gfYHeE5Xq",
  "key14": "2TVKDtZL2gGfZkt2xzsjUv3hgeUvTNk85Gbw7ofP7zAqwqYXzJAFk4LFRu2gT1Fmh73Q2hPrks1eVmgHzZBooiV4",
  "key15": "5Xiz4i2uekQt1C6VxsPa7mDYvUWqwmYKK2zHyfcUEdwdXa66UwFTnrkPfeUrwvsZpNV4RvQgkYpi2rLoAbKn7VVu",
  "key16": "2ShQmLjdGGTDYLiyW3ajgkxub7kNqLRPBCs64GwCEbWbUCDU2p87nENw56dyr5EjJoYUoBCsFhwK9oL2x2GaW1TM",
  "key17": "3VFcYCvZKxQj2PM2TyHqsG6dnbh1KpEqZaWzYcAtfMigmg1ZBuZEGvJ4QzfcDyKQtXCHyvbqgbgpbbyVYCDU9Cad",
  "key18": "z9rGhm9wUEnACqnX7sfq3mYTGfbF4wWUVTiyk9LzZ9VhgYRqiSQE3emCcu2sJSvtWTxkgsGbF5Kh7fJpNAqLxoz",
  "key19": "4xDRhT7tpejozbz7HK6QngTTCNWDNnFAeZbWu3PwtHq9azJHRecQVHrBH2Hv1oZnDu3kdeQmjkLT6EucfCt5tc8h",
  "key20": "5Qohdwcn3PnhNMxAWpvAdD8Ggin2mpea2PATVPht3so8Wn8ggQpJwaJiJDDfa5ERw3TUg2anYwR9T9VB558NFutM",
  "key21": "sXd1HtBRXN15vS7pUiudpq4ejvU8qjJ9xDK5Xxmt28KRvqKzMJR3qVQHbcqeXYr1Gt565ETBnGG7v6vh2pYkZzv",
  "key22": "2Z74i3WqGbZ1Z4uZLVtzVwVjX54bBNw5CyVvjDAfdxuDr5jcqNNR4AbFPkjAEL5QTxunSDQveQSPu3MuKmUiadXK",
  "key23": "33nCr2xKnxG7LTaFBjEHHzX9hWX4SUuehRU7XX9yQYK9AJ5TRk919kxCAd3soFLU4sYGkKM5y7h5TjSrnktEMJUr",
  "key24": "5jckpHfyJvHWeTdaZadcdYhKoEPn5bTCVeCgpJX6T4zGuX5hgcAZvkPu5kmmugTQ8icw8CaVso9zV3smWcyeMXan",
  "key25": "2da8o9zvPcaGTibJoLaJ8oBuYEt6BQWSHm5DEXzKr1w3GGruKfgdiZx1RwXETFDQBZQkV4DBEkzFfjfnYksztUv3",
  "key26": "2WwrpEkrN6yqy4gA1aF3K4y24DDREjQmntfYENVPMah9Bp12xnE5UySdkWbRAXN9YsgtJkbtsS8Ys1q22jL9Ynaj",
  "key27": "64a9vNzecVHdGqEsH4Wz5jxYhwf1wwag9MCm9SWACRxm2NXWExh4Sg97oxmfKWqgJyzHLX9spx7iUsY6Remy17gE",
  "key28": "MWMxGxmWNqZaVdbQ6eESwqwwmUFKNUy1zXWrEf976W9FtLPDYTQwMxq8beSp3PcwQT9hN6g7hjhG2BYGEjUTv9h",
  "key29": "27bN5z51WowpjYbSNrSkuRwCCAXkhwqHisYcVTnFxbGR7tDRgMcvdEms3xqqZuH6dyw5b5zPpzAzTTThjb7HN2v5",
  "key30": "5KvZu3yQivr7kBAXWP9Ddka5XNYQET9MwQvJ31GwD2VHsxeDJVkBnVU8Uu8CHFbRYmdQ5n4j2THgnuxWY8XXcswf",
  "key31": "3E1bGnaS5sgQRic3mEeCBfBd2PUiR2pTFdmpXWWqS2Af2xXqF2DzkH4VJgqDKdydtTmQFPdCQ3ZRiQbbh1viTNsD",
  "key32": "3WYPpWGk1Qda3hnsZma837286pLrsqUQpYdsZqHG2ouoSV34ECwfh4DPrvKzJEzKxKWNdthHF4Aj6CZ1vrAXS5je",
  "key33": "G7nFsjC6UmyDgrgK8ZmjfXpgAnUWj9wthrF7TAkCy9fyoQDZXon8rUX7e4bLaXGEM1hwUHXkg9RfYFo8g6ojiHx",
  "key34": "5Z8d3wcdky4XL3AMJyYBDsj4xNRSmzhSWSy2QgMLtsmhN8ZrT2nDGBg2uccsteq4FmNv7N8jAyF2c7Ci4Jpgpfch",
  "key35": "3qCcz2ZvmfJ7QqRUnCBbsLWM6NYp4YuQbYiPEwgLktV8g2FFsSVkydfRW8C6Y1RxitaKAE9or8Z4HHgBbipUgFSz",
  "key36": "2YCbuKNDquXqQcvmGKSuA2NJsZRZKaUsBL6uVNoUXajyBwop8R3GtbkA6qQ2cXMfrFghQ3Pu62yQwKJwJppdtQe9",
  "key37": "2bgtkFFwfKsgg4Tv1CQio4XUqUumgtWVMwggzz3vZ1PpLEiHrTHDBDKDxxwGTakiqnUjfNpRzka3mWRQVnubPxJN",
  "key38": "5uJjv1ha4fky8LfEf47Adqe7WEnhe8s4oXVb1XZzr6RRPE2hyzN2WXAQ45aSrsz2Unneu9UqGV2bjCGRBHKLoHMM",
  "key39": "39gtm3VWdozm1dhQLhZkoGZ3ZpHCA1xds4B6g8AYkfNvkzWQTAYw2LbM7mQ1iFxs6DrKxhhAqAhEnNQLBkwMHsa4"
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
