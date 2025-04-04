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
    "2ccsicbnaHh17FXpR1zCL3D4EfXouTzWHLTmYtaUev3Juptsp6eJ1rAcP1TmymDQWUmrc8wJMJUFv7uy5gaUYRHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQuJaSnTyW4i6tHzNfVFTFAKGrxG8pGeuy7Hd6FgHM3344W9eS5HrcZu74zKFejQxqkoBkkjv29YKPLkHzkBkum",
  "key1": "2S3eHpGLANeqyLoBRp9J6ZuiN6C39WjfkDcGKZL4CaHdn3MCVVcsce68awraN17MAXHdrFR9HEGp7w3PpcXVjTgq",
  "key2": "MSa9RJYJNYeyjmu4KE1r11Lzg2H2sVj1DgdR37cUmuSMAGo5ngv61xuwzXy6Kh8jHMTvP1bBy9SFLPnSK5nosjU",
  "key3": "4Qjt1cBsmbBk59AqxyfuUHHhNJR1RmBubUa7zBWhnuCWkLK2xjXENgSLYxDsYFi7Kpr6V1jf2qtHTWMVWW27u1z6",
  "key4": "4J2GyGMvfWVC4WHjZTNntshcxXom8DUQ1c8TpfVFcwPyzzGrSvyGofBmL8aXW4vWKQWqqCYWy6ZRaLkqQUuDxGVn",
  "key5": "2cGWgoPKnjj5pfAxKhoFXDFqXxcKBQA4HaGE9wvjNYyNzks6v8wxJfpqVB3sEoQWSTtRnvNSCd3nS7Ja3jEdke87",
  "key6": "3XbQk4qeiba9sUZWYhWMfUvrPeLr7PhyrxYpEKWKJ9XTSCnDeBC44so6mKHkSXn3Wm6HqgMEquxQmTkuStckBzm3",
  "key7": "5wUwWERiBdn2rsbQWVdpqQV5vfxvkCqLLyDC9u4qxv9kY5Yg8Eb7nWnQK66V41qcTvLkonUYGBAdFwWiSSXBtgVZ",
  "key8": "NiauUDN7miCfEiixRtVuyZnJgqqh5WerPoG5uCmsWV9GmoAwYaijVJPxw6YNFwwsx1FH9tNRyL3QSaVyYwG7N4G",
  "key9": "3HoHLCH9evGaGeznJorEfvsCbAexYkUp5h4thNrrm5KsfY8KMxUBV52r8rs3MV5ZYVJwjUZw5Bp1K3W8UqVFiPzF",
  "key10": "3AVxPujtkiSzq99NRMa7jeYq3LnbqFXGYGCYfNnJv9ZWZqeWQY5rvYHMBWN6aJ1nexiJAJEpyDV7gqpVGAbz1kaT",
  "key11": "26ozAthPE9YGKziqhNZ5SEPbm2nLBJJkdJeWoMrmziM9q5UJLd6cdaCDKNWmEiLoTAa7gniJjseVHHXtZpJEBhBA",
  "key12": "3Cy3s5CKj9gAsU9JyijBxkXb786RtuSS6g6GngsdfESembHWkKL38nmHrrgUuyaPt9RVJJZBRUEcLWnZa7nJZZvD",
  "key13": "4GAu55BbhsMLAQxdyBJi9xqptmaSsK8fhRGh2noYDvoTwezfXRfCHJKdNmPBNAkmPUbbRzRrn8CZQY1RCfYgo8sW",
  "key14": "5VX7cQHd8q2PqeSrgVcPnL4D3EhBfkF9XkrVjGGUKDX1CQTQ7rAgg5HYd5CPRFRNHds6h2FnzWmeshp4bTmHgs9G",
  "key15": "3Ppp5wVeFAUxRttLFoBTdTJn4L77V9N4hsXhDqJ2txN4D29ybFjkvp9EvgP4fj3tuBtsX3L7zMyStXtwUc6Moh9A",
  "key16": "31kFDmVQdTk7eyFqHt2nye4CMLrmDufQrtcyVNrsEzRRS3HYJaU6k2XEpvBSQiNKhVjd6SBRfHSQvDF7ucBkToSZ",
  "key17": "5QZpXkk28xcdyw7sQU6sK8uw56dxKsgn2S5RvXBi7RNfq3FEDYzPT6gXn1FeFPzcGh6yTnJmmGHzhSvU9v2rJp4V",
  "key18": "qauBFwrS927SeKaWBHKXqnpYQEx2cVEtGG6two28Ef1MiFvhKxhWx1NeZtXDaAUZUFy9YVZ7CH3x8apuRmi4aHx",
  "key19": "4myCE3hXhAw2qj7vnB8BLiY1KtmuSBUzhtz9u9KmCq6gREfmYEePT8zmQkXet1r6dhWTDUyLb938qnum5Ryt4SmH",
  "key20": "2ijBMshp3TKCYCwcotvEXSTN2dUB4D6varNoJJLzppqPLVG8NPgVdXN9z469wgucwWEwS3W5QajJsWiNfMbbHyDq",
  "key21": "3YaUJbQyYfNCqphn1SpG6kUqhvJ89uxe2y8wjo3eVfFqaCDxvmAPAJU3W5D9nbZ2jfZjsXMFKm3MBg9z2AngKBy5",
  "key22": "NVidNeXEAvtvGr54b4NivCd32RJ1wW6pmirhEB4dhYUs8TbMed2WyCKjbSMngKM4Cvk752imur5a6fo3TsCdB3J",
  "key23": "mHMTM4kiREWPvnpCfo58kfV8a7nREzzVRPkBksKLumfQV6Zm1nZ7subvLiN7tGLF8pD9o8NhfKsLo6JLCr3uNy5",
  "key24": "2JoSsbRoa2zZSuSYtfK9UJwhFuXXndjBVjUMGjS6T8V24LWReYycEPXJWzdNYjMiKH2zhDw81Vd9WXDjb6edakFG",
  "key25": "batatTzFbJivzgkY5WJ2gDgfejhBUd8tzXUBZoA3JqyU3ynYZYxoD5g5gJSyppGkwU2Rs3TdiZtyu4964kj11QF",
  "key26": "3LHC43mHZTS3wg4qNbbeWt5RszxKBNJ7kf91jTydNsqChgfobjaqp2eFqamkPr3enE9KPT4yxa7hDsNLotfvfLzY",
  "key27": "5EZ5RW53ibfBendNHCh1gW9SPtwNaofncGRvFVJJuSyz7Dh3BcWBoBfdS9aPNvyVgqu1puXKJKYJGtxLiqfgCH72"
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
