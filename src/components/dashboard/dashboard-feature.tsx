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
    "fv6yLQY1HLnt1AArDFXUabXqnyWtbX4sAF3aNFyXowRXB5iVjYYheKscy2283DrqLDVxYKfekX5p7tV1pAcMCuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YurUUBeqV8SzJm2nPTWFHJR9QJzYgDF46A8UzAuQt6wwe78Gb9RHPUitrT7u2TMT7r9avtbrKfjRTo7CfrojRT",
  "key1": "32Qa25UFd4LJVSCq1TUCV1Gq8GBUS8Dr3KRba4Hu4ZBuSxLa5QuS5ygRQr6LQcFK8BiFdPJvBLxZ14E6JeZVGQiZ",
  "key2": "4sg6yJmAisSX6UtmTxdrSpgAzjqF65nJHeu9uprqBPYL9Zfr8gBaKVvgdykxmbnNPEJ8gYdFbQzDoKgLnjZjGcfp",
  "key3": "4nMtjKEvbRgNU7CmibmT3MDejLumf4cVmBzMhjmJJZS2KxeSFoRmyYgkM9DvwVKjjgpwanpEKv8oBM8GkTodqTLC",
  "key4": "3ZAQZQqNTgXpqn2R3DfRRFF9VAJc3JytpbG9UUBLfPfg86GessDyhZitdt7fEJANq77DBNCAvmN5tuq9GTzN16Zo",
  "key5": "4NsYEyA1Z7x5HrgEws8pHkJEGLBJyCjis9HUvcFzBk88EEba6DbeV7KukpmcznCaBdUp7e6eG7tLyyg3oqogXoLo",
  "key6": "25u6y8caZMBxAk6Jxhg1Gn7VPXG6r5kRK9TT8BJXABFrnpNG4UrYoKw8G7Q2w8cGXxmqowsN1Kvj21HktneAGZxX",
  "key7": "3ru7JVZ8ww1AfnPNBVupqaJvoEmj9vKvSTCbTvLd4kpXyq3gveHcpph1QUA39bVgLxH77tLHTisKhHfvgphhrRJ3",
  "key8": "3rKEFjezZyiihwZprjBbMe26iA3cc4JRc8tmEHuQgrodrQkQ9Ca33x6VQwWpn5Z4VhpcBtv8NtJhvWTgR4MigypE",
  "key9": "3t1hzuzCetC5oTpkAgu3JwCBYvxveHnuQyhaAAkUcqdtQR84xBHoTTBmWR5YxvqTbdKTq3THFyn2A2p3UPWVyWY6",
  "key10": "5edApDskRD6h4FpNzB73Wm2U48s7ygAvQYHAmrTUgNv3KMc2DUt4YnZ4SGHGUzN6mHJ3wHuc3p8aTNJ4qmZm1RMm",
  "key11": "2rmh1jucVD43Y8PPanWd1huAqnPQH7c1L5Pa4ztkU3zzysYuoqYreVx6z2ghhGheVB4NB7iapWZqRDBrvkyBSNAK",
  "key12": "3Htx45FUar1SgEQZXspi8fXbpCD4NUUxhFGUsfnZRu4no6DySg9FnBb1LugGntkHy6p5KaE6p8FiakZrYRBgDTki",
  "key13": "61jGvzaQZmisAxtpVEEmXiszfFaZJ38MSEM2FNJdEoQTiTH3pWErn3exhss5o135mCAwnCibQezbhasj541AYkyD",
  "key14": "2ybW6Y6jZfGiZJDCeBvPBXVRJW9Yp4g4fdkBAoNLnszSSqwLVEC5zXt9uxNApnB4EQxyPwtAQrKyna24UHjh43Jc",
  "key15": "24aE1UboLFZL6qwq6xiuMrS6t272wLhJs2sKmwJpzqzTutQ9FVGG6NzejafCvm8EAm8MnLomysKz4VnhpdYvZxVw",
  "key16": "3jBy4e8koCaXBUMmHFFGyyqAAQxtDb3mhfb1JmLby4LPS4AVkG3jdGhBB7Sg2sbL6LT5eDatyESGDpQzLt67FHAB",
  "key17": "EeYv3TNdxAyJmo7yhVumyskDnf4odKMXDzthTc9xyEC5WeK9KXcb9kZzT8oB2nrBcn1nikKWHqamNsfyzPfs4La",
  "key18": "42ri2F4SHc5BeqD4881WgVX9jR2wX4ciqfZ8mHxT3psEb2TpHCQetB5JJ22xsNDWoXFaBH4M6MV3VXJToPMSaXLf",
  "key19": "4Up97sKJMGnwn9j1Z2Aqxq2aCSrsgkKgMnvxB1LXBNwxpXpVPMDNs5AWkGkZ7vJKok88PLzzQLqkzwWNH5WaAK7p",
  "key20": "4Si95TkmChbWMZcX6MUaRTzGhnXnZe6i8EgWbHDi4dGzQceJTjXcFp7ygsfdX55EzryMnbwC91a4kf5pu1VBjht9",
  "key21": "23raNWZWPrpEMoyJVMyi8XcPLEwHeFHCCQaMMBcJP71UUtVHovvFGEVMPMcGWTXRBFFxR74sFrYo7fzdPHwZaopW",
  "key22": "mggyhNRUzRUCqKfrtjZ7zsv5JA9BLZ7wF4ZmLDTtXvT5evypss7Vypxr7wVvUJ6UvsyhpTaVJizMx6aGm1vwi5g",
  "key23": "3S1ZvT2qc8qxXJqk2fKZz5LupM9vtxa1rjpyxUXdZqjUgQbw6UXZerZxhA6wiz2iWzuftX4xJTuPtToGfJohe3D8",
  "key24": "5qmDwi1hgSxQFsB5w8R93FuRYeXswj1XqdQQ87ohWuDi7uc7FbBF21Ei952PwVe3JR2Gh5Aczu4esrYXVMKo95pW",
  "key25": "5C5x2nY4Ty6pxChV4Dbottt7GcwqJH4QS3ChoDqzX6xvQ6EF14FAcXdxTUaDjwnQQaKTGJVqgaXuHpJUTvjhkbHL",
  "key26": "41mAzc49nL4BU6pbqm4L3isNrUhmr9mF7PqR7sraVexcn6JsTUrHvJLrHLMgD8sGskTmJgUUYV7yPctmgk4JiJxS",
  "key27": "ad95ucBpWQeWq5vZtBVzrWsmudnQfDC1ukzP6H1TQNPqTCVUrB6s5yg4iYssLewFcYQ8tqnLfUxjyeNnerzSTcB",
  "key28": "2ebKr3sLxZGwDusJVoEH9iMa4okjBriL89v2PUBHW6NrUBvHcXrvvqijFfeRTzKJHZeUDwk94wFyCCG7DfuA4mEJ",
  "key29": "3om32kUAD9maeDNxin12FyJPXRCkPrJQA3PRuaA4j1ymxAXZGkYBNWqBjstsUcsRVGUSvYv9gqcsu7B1tC6N4dBk",
  "key30": "uTyTdH6SyBpYzzydgfKWgQwqYb3wWb2hvD22egqevRxYrB6epD4uqZQuyQVYkqC17gaxcLyqoC6Lq4JhqE8gqmK",
  "key31": "4Vg2euGzqV3Zxdzvin7922ozdspmucyRvQVngSFsCXRC8KQMj4w3aRMmhfW7rAmpEqfx67MN5KHdE5oFWYvkvTcr",
  "key32": "25eVgxG7Gfb3wncjZQbi1NoDrjFbbypKSaaYjpxfcKzWjkL4afecLNNRh6EKCrqjAQrDfNMqqPchp1rTzygBJa1A",
  "key33": "4wZyGfcXk97zmbntzpeAU18YRnQ9F6KxXwxQNvrLDzdDkcS1d9HQPpafdfd4N6KUTJdRo6BUL8ieLp7YiZDyWnFL",
  "key34": "45ansqiWweq9CuxnFDZaPxaPZsba45U7rAQHcuzTX6qWM7KtWzvkZ8eBwuU6hCQmW8HZDthZSFL7bCv1rAbpMKh9",
  "key35": "2KRjgXhHooYdxXuAT21ydFLAsGE6Q2QYz2UpxXNLbg4SeEzdLhWPA9m3FzV4YwxH13ncZBVMdNXayXKqcHHCRb3y",
  "key36": "2J8FUksNMCWQJPUddBc7nKa2JiHDFZ3GXWrFPh6Qtye2uaaStaJgXopB1XBLmHoai8Mi2cYczB1CPFJgs9Yo2rTb",
  "key37": "2c7SycD7WnmJkeERFwP5JaEbuJLWwn5Lfk5W2GtZ2NpKvUH7aRvVDnQyi62pPMN9QQMCLn1UTugh3f9MBLxHEpLP",
  "key38": "2nEMoenE14CSRiTKSeohcji3FfQc5GA6sLouHMbVVenNG3fpJ6Bp5CMvc7yDWLyyBVGKbM7VXd6oR1QYcfrjGLiV",
  "key39": "66SUZsNMBs1mTdzB81ebZyUZVNV2B1yR93v2BLgRyigxcawdmm2g9B2fmHtchqjcrP3QJ3YcJnKQTV5NxXzy7qbZ",
  "key40": "67onxPM66dxD9caz1cPAgrNdyKTWR8gGemA2jvTvhkGWhVBkM3ax6YLAN9h38HNiLevfp3EHse29q6Dbk8qVaJSg",
  "key41": "2zpBSt6G8BddBfMYqMeLev3643BKuFFhb7vfY92y9PuEic8118VKHJmaf53g1ZbXa2TgWzSgBSgRM9k2rSuNv73h",
  "key42": "66rdEZP7qis9oLyDG4vMzTKcQt6TX79u7abyv3jtAUtR8N4hfqYGm1F9Q7q2W2T4SurV9BMNCsr44M7BFFfZ2Q3A"
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
