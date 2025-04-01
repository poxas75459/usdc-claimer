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
    "4TTX3Kf7nPSp8kFNzUVeQwqVbQvGmQJ56nSoLo2Z3jfrKEvspAbmFF5u4GfKYqwURe2SRbRbdLJFPBtpUVHAZusV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXb9mT9Q7tiLLac8X6VN8aQVD3Eaovvj5MM1Nf6t4MBR2L2VPJe3Nyv36XcpXwHpSuMaWMmnoZ1sFXakaK347Yp",
  "key1": "48jPR2oqhHKmvQ2c3SKrarda3JDMz1nPogBA9gdcN2TXC91vkS3eoZUyTg8U9gmizZ6YwCwm9wjAhUy9qGWSRYsj",
  "key2": "5eXX2BgztLXQEdfN9QEw2jXjxgP6tXQKW7CL81afErK4Y9nsnKSAMK51GEz7yExLd3kprMuWwzPW3oXZQZbg7Aew",
  "key3": "2nD9qrG6xVKfBhxqefDZb4jBJpQG7MVGJPGfiRoRS7Lif9JnmTLMLJkrAXNmwwJ8XbQDaRqGwPWve1zujBprWck6",
  "key4": "66isYaSVEMBZZpAKsL4ugZm27sLSnXvgWmEZzTZuG1GDZSB4KdbPQQf263pURTy1BGGcc2rwhfnDaa623GJf2A7R",
  "key5": "476cU7r7eejVzN5E74oWnTLbvJ4JQK33yKuZxjo6CjcGfBGAKTcmTbh9rtR9UCURZxx5caKtPFxbGBwoz8V92ECU",
  "key6": "35p2N6tj8iUMVs4a71kBW385ME2yUhnbudTLBct2vArogXkr5mQqTEdyZgNEJtFHmspPutWUdEXUdiaUEyGo74At",
  "key7": "4928mGdN4xqrtiU1349pDEXmAGoYvuPLUzFbdv9P9uv8Qwe2LbPepaJXkdjN1Urj3yWwCJFe7wRUiRFWaBrd2MH8",
  "key8": "52z4KS4cKzGSJC3QvKHRgFEd6qQBRNFWEXSDnV4rdkeHpeAtXY2TyfmS6MhfCvYMszfitjB9D8CLryxjHj6gTnYk",
  "key9": "3K3WTabmYFU8jzWYZCEgxnWrmpjtRkzgkxDjmAnVqNr9n5ju865iSvB2fUZRugE4L7g64XhymtBxad1zWXAhD4ca",
  "key10": "3FrEBjmB6euZvNwXDYdH4tPoouU32Y2vqpi2iZxyZEegpYGCDamGF3yGGuVnHc2G64kheQFSgPh1W66M15mNFmpe",
  "key11": "4MYvSTG4TigM1cqRa2dkF8m3ZeHdhSruVmYcpkS6c88259Ud9wPJrmZdPcZWrweWc9K2yzHv1yhToWm2uZbovviq",
  "key12": "VyNn36SSZjCD8PArUHXvfiQpvJn3wWUioQAmRvwNFjmpRWL78RiamiYvWHv7KLhLz65FVe4pSWRsxnX7e2SYJpH",
  "key13": "2dEYrZUgcUjYjmZqsZkVhzRvTJYvxHgz5NSZvViD1MGEJ7rR5vwJkAjTTiNayjZLpQYxDLqmJ7oVTBJvdqQTR9jX",
  "key14": "4z2fqWVNBaC183xaWiXVoQ3a1KWpVtyy6iJHwpCGsxBfV8BzvF8YmkCYj7H8NVneVuVpxUgfJ84Ct35cDNJYXjVf",
  "key15": "4aoRDfrMuJYcsir5x3eT5VJNNf3YdrFjmqQdnwb4YQAwPGZoUu1axw6Nt3USJjDZoYuiJZo4iRMun8W562SamsT",
  "key16": "3bSGXmZak7bfJ5SqqsMAUP8QJ8zdPxFr3PP2sXcBQvmQemxRCMwtvD32CKQZoHRpL2gAMasPJjAY5dK7dYmjDFFG",
  "key17": "5fzsCoQE1sH7KAEn7WYJ9ANiBoDyampujq85drNcqNtamBacLYQkwFa1RJqSacP93Cm6C1eGTmZjk4p3EEsuKr6Y",
  "key18": "5Y8CB5JnNFh8Ui8pj8PVtSVjULptJdvubEAJWH2uecxnMdnQqS1mvBSPx8euRnyDNzMkSuX3fZpfkXP6q1dkmVr8",
  "key19": "3HqsQYWQGQfQQgUY2xP5C6iPeWYUeLL6QVJGYBeN2bKLddLW9y5KMPUn8fcK6pt6DmzuEmb4GyuxGgtuuJcQz4Xo",
  "key20": "5RFwG3CnVEfifxEo2VQjrMJLFmgdoD6ux3fAvk8ESsE1t851wEa9nR5XdJva9VJV64RFL7Afx8b6eiEN3xecXPHT",
  "key21": "oEmAj5k1SB7hwKP38JqYdDLMWE1GukoX1yo46byhAbrBStQcsxjN9fpku14PTfr5kg7mZcXgQ24g6VeHwhNnLp4",
  "key22": "3nJmcquwU1gKFKjgzUcuPrCtAcdxAbXvq6YuifzZSj1LGqshWHC9ZN4m6rjMz6mXhVTqugi9oexwYcMqUQfYVBm2",
  "key23": "B5JVTYydXY4bP1jM41LpdkaUEqcUsxpDnm51af7Rq39ZcedS5zr2QaBfs7bxMz2EFikoB2TXpvamkguS4eY6fYq",
  "key24": "5MRJw4HMgGpWmNyqBKXXZRBkfru9uqqXTCXK6JA34LC8jUytpK4G6bLosackXHr3s6d72Vv81HH9nX7PMkimmVbf",
  "key25": "5XhAg9p9yEVc1BTweyPUk4Yu3N9uZEFaXbysKQ3rSoMEp5RnPFig1CFSPxgzV4veiWAUuYb9r69Cw3Jw4QaY8GHz",
  "key26": "zXRtBgUKaw9fff3MqaWppyLkYwUTKiWK9rJq9aYjdjDovQVtukSQasr8TehV3m39qYL8fGUCbGuniCtoua5cXh9",
  "key27": "5ywHKvNW7FdeqP9MiDKEuWiPAiERdMXBmCJok54Cbf14Eo9MeutRhTysAZdbD6P4KjBuYvjRJFcviTinrR1HAF8",
  "key28": "5DqCGz2kBrMUBFvV1XWmjd3TFowtrkrxLZdFhbU9DxAncdLdzYwsR6CTWq5FyAaWq53ZZFAErhz7Fd7nbe3SbyiA",
  "key29": "2EsiQ9UQTSbJ1Hb39XrMhy6WmyZvsh5aZBs2SWvqwUR1TSpiPThUJ5rrSjZXyDRmQFbJo7tQFH3zVKAsbqJGhSvf",
  "key30": "5mXXmqoQiyhjdvrnyvajBvW5vEzsCmtGN1hGB7QPv87sUybCutQicUgWQCSPoMmDiTUTK4A6Uedm4tv3rMPc238d",
  "key31": "2nbzwdHpWevzZ7uK2HxsX5UpGVkDW54UQAdnvVwuE1NqQj3Gnc9jhLPPCVioPHBJvKqMJZ3ZZ1sm2phmuFEaxCE6"
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
