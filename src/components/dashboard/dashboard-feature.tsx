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
    "35dGX1bN28PASuLL8d8w2V5LBqaeoPA21AdPeu2eCdXMzkESmSHLHkvKeoxQAjnyrqZjs7yFTU3otCVF4ZdCXjgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLTvuW48CfqrWZb2yPD9okEVWhWNHPTVkfKi1rBwSAtGMQq2qegse7BEL2vNFSo3thCaPx61fBNbo6c9bBDxXei",
  "key1": "2zrZwuJA8eUNsbkxU2Y12urvsgwqU4iWhp6DDxtbW4zcp5UmTnBu6C5GwznHCQpCeJbKNoLQbC2WX7NtEV2RBsrD",
  "key2": "4YqStJVhmABZsJtK5P5PhN6YR8Wn4HVD7TZTEYrAAMnraujTGkE5xZPmXnk5ZcG88bEvvHYNFwe1Q1phNPaS4z1N",
  "key3": "4zE5XFruEZScoQQL8nPexQJoGVbGK344s9xvJtVz3oHxb6URS5xudgV8AXP6tBdA8dfV59Dua9fPQzSiECuvPKxW",
  "key4": "2RiTiuAXBnR8ej3fF3CVp9VUDhTr5SDLsaLYs6SGCn5dYGcu6BEdyczR8ZyVsngiUey3QMs9JGaVXfNRRXMPRVM3",
  "key5": "ofpBJVrdeVZjpE6NAmzCDi1a6KygY4xkQYT54qMZ4u8B9wZWQowriAPB7ygu98KQnxcXkyKYSY56AnEnKrYeBNT",
  "key6": "3BYSTfBxHm2hMqfMb2Z7jokwyxieUHQAC7F1cd6cyKoatWaVQHMpScDq9G1WCb22pzcc72XHGnp93n3ukf9mWhYa",
  "key7": "2UuRBJZC6mqp7uAGQY7x5Zt26gqDuSzbbwbW934AGh79nZvjJXgEDTvMnEgKswEWSchqdzodZAiS4LHgSs3Eqwos",
  "key8": "4sT1NFL6WXtnHMRgqgR8sqMCHzx17YzQ7ZfDZ1L7F9hjwBoTf8LPJLtEYK3DEhQdeEvqz6MLQhgMbiVi6TrunT91",
  "key9": "36z4ArhDYTatytxsec91A5tasGcbQqepCaisnrZhwpXK7esLj5PcvMvW5n4UDymc1a3W2EA3pmAq3PAAtDHriTC",
  "key10": "46mcbR9iyo3QSaUn4taa1EnzFCpYjphLuTH2x7UcL22xTMoMoxuwCfam8VcrvPYRZmDQKsZokzkwzXvk9H8orztg",
  "key11": "42kPqTSSCvumtBwYEmBnjhPX85eyFeVdfvGLtpWoYyyRbxSejpb8mqTPYUwx1tA7GFEy8Bzq7skWx9XYaPPx1Kny",
  "key12": "2cQwMguPfKzSS93wNUtNu5RtRYFnBMXkPa9jTe3KhXkjZs22qBgvPjLCF6pRD5WYs4xYTEzxSzC7NRyzN2KzbMaV",
  "key13": "o7sMVLXr1GU8S6semZo9T8gTtv9QCtXBS5J33QRWjpN8jWfttEfD9aRqReVDMmNhGowJx2MW3i9RGeMXuA2TjNF",
  "key14": "j1XDzDMvy8QhwHHsRdgP9NVYeAmoDFvhZvTJjdpgutGFwwHSk7v2uD6wzC3Ayen2Bjc5coF5tWMXA1Zd2k9Fv5D",
  "key15": "K881Z5QT12KZLZnKDZ8cf66xAcgMQJc6jM8jTRjsydZWPXayeXhHfJYW9NfNbGWCixWsULXuCoFjxfYNQxheyEa",
  "key16": "4LbrmE8ECs7csUyF4DAMmJJiU5iyU9e8PudoFdkeZLXsU548agg3BiSvVHmnexDDw8WAoFG2Q9L6kk2rx6g3eVFX",
  "key17": "2e9RAHsbBYRs7ncgQygBUUCmtBYK4gf6CAb66zDm96qpeQaWYJtSKfkL2LDAHc48fxHFkfnbLShaYftCyf4T5unZ",
  "key18": "4qetdJx7GQzPw1aUCkkqf58wG4EFjzpj3Z2niib1gAg4DQALRnB6xChETwSutzA6ziDhxTzuZZLqt1DQEMXUXLiG",
  "key19": "2HcENZMAve9iApZxC3GgqJRBRQKW8SQA5GZgd2kTD2skXWeYs9r1mNWGSAit8RaerFFJ9L7UZPLkcTiQaozRXVT1",
  "key20": "2pRq35fPi5HwMJU8pmKBf9GCFUFLrAixHgAgGFfZNR2dUL96zDZcoUSg46Z5kr9vVK8ewhYfC6PpBC9BK8Y6Edxh",
  "key21": "2iBXGQXCg4cVRe7MN2pgDQCiqqu8va1VaarXuAMvqZQ4zSxcrFhRLutTcnYmKSLeFA876xFyCMoozDBZfS6ieUqU",
  "key22": "4M5MmCW19jhBbsEPXeVTQRwkxSG2iaLqGHWcwitJTFeFPBjcWfjaTZR6jD9UxuvcX7YD1kue1aPmziTeRpGRqW3N",
  "key23": "RrD6UxnwCzLuPVnb2DUG1et3inJ8BLnAPSqFDqEEQQUZYYu5gFdfuuNWXRusRBHaY1PthyZ7cG1HJ2XGKuVut7U",
  "key24": "5RFX9hnQTm5om74rmFPdCzRFF17Ko9icA8kNgsWWpPGxq4xZAHRkXfRKLVA7E929woYkEz9QeNTSKnsHFdXzTzGb",
  "key25": "PfwqMAxbX7G8mU66KnzNkxc9tC7Hq4Amvd1oBduvsPXYjKihP3AJCMujGLfJWoACeRrXCqP1H3skcLYccAeUeJh",
  "key26": "jAe338FW6ihkcBfSuDcXUVr8qZaRfRDuCtXdfGaKxAp2Rk2969XP5biKtXTrwvHTPKrhyGARYMK1ei7UuSrRCza",
  "key27": "Q4BL76pJbQWTSwN23j5UqP1BVD3AsDFp5G5fsUtAyBa1dbwAkwnYVZmwQQydrs8sBEX8APqLQyypT43c72Fyk3r",
  "key28": "3KcyMjWFiHhCSK25sUvyV8E9WtpaLGBPY1pUDfPZ7ceUHJjAwgCL445VTyQZiR5UxnvzwDn1UcpD96Jt3j8pTQnf",
  "key29": "XaXGjQ6gLZSV2BWqydXe75h5r5uEqPbdFNzQkznEYmaeqoJTez9oKM3E2384MYq4cfGodQb8F9czEgv3qvex6pq",
  "key30": "2mWW7uTymoa5wDy4r416Vr3uHjeGE9Upy1sBKjbYTqtL6ibDAceUQqzk6MZHKNe6LEd6TtFUG5fCPNkc8hxxtjfk",
  "key31": "GWszGAB8YaDi6k3nqyzjMpvkZZ6VhPjcTHyqVFyVvE8jFrcNM3CrpJRyebfxwGbq11eHbzWnJg8ysAWuqWKwfwe",
  "key32": "3tNYCXTxfmuEjfdShcz5tpBRDMzSyzroGYg9DEQD8hfDWzzAnS9uAk81zDRXEtc6dHKR8TRQVbSULfbtWmHtKGTU",
  "key33": "m1EDN17u4ibMzqDGbTjzXtTRdJA2BorWLAEnQdqcxfaHzs3sBfBFZ7ZqgPHU8JFWjVkTJJ9jikFsMrq7iboXtvC",
  "key34": "49S4udWo8MXcBaVdmgZdADa6ds2bA4htKQ3yKGWEWWmkrU2wFutZrhmETydad2ES4gz2r61W4vsbLEav7KnG6wDY",
  "key35": "5qAR3B3qR8YUnHEhL4kWuFJrihbubbLabtJsYHX9tuXrvAxLsbn3pAmya1sL3S8oWFLtPgVF3fs25kBwESnURu4S",
  "key36": "3YUBpuhMneWR9E22JtrkgMh9jcQuzVTBVXNAdpBDixzG8hrkrHt5iA8wTPYXNXkxhPJEaNQTfsV9TfsCh1Snx59o",
  "key37": "5sip41sShYMaanwsQB6KnUsRQGTFhuK98Xzp2VVDXnDM1zsdduKBE7zty5qz2oGDLWJkWpQ9Xeeui18EbrnRBoyq",
  "key38": "65GnajeHzJubZDCZCDeG1Nf96on6u5vo3pi2aq2QKKuWuGKHKZrVhjd7PpCnxgjMe66NJ2Nmh6fJLhDdaPLTzmZY",
  "key39": "5XwJg3aHzRcrhFiPawYAbkuQkNbF3PgtV24om167sWGPntikjp5DQYCe7suQeSkN6UVwsP3KyC51TjEAiPgjJhwf",
  "key40": "BeitfZsyvVbBXkgV7BVUsHnF5MvDGMWET1PyzAZJBkqvC4va7yXVWmCkyeLHYCjLUvJrWgEiEbjS3pscASMFn93",
  "key41": "f1ziuXCaQyhxRL2BvSdBj6iTp6g8ZFy8Q6uzkvV1qDQJHgsRf92EKsiBwMZPWbVFx3pKQuyH4QHqsBPmPmq1bbL",
  "key42": "qQLrxZpty3vBSQ12M5AEXHK78eBqqfYSNHvvaHiecH9xVEW6npuX2eF5KXkrzfau2KFYGhXFqQiSdCPbaR8ARGb"
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
