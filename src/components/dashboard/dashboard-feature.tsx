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
    "4njxm38sPvtZb7qb9su4Rgi1rtDR8Dkx41xP7jQi1wZNBgHxR3A2qF4vSWRMcSA57Kx1kt2oZb3ngAVgxoMQcYnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFGkTPbDtGTJZb62D1mzmZ4Jchewmn21rNVjmPMLFJTbQig7VgCGJgkkqWrCLRfXuxxXQbvit69U11hnMz3bfQT",
  "key1": "5jc7aRe2pbKqiqnRkVAm6fyMUFxcj5AKxoDeELhhgmNJkBMT8L99ZRLUiH7oCxPH6xrmvR6eYVsu6SPboukvr8nS",
  "key2": "5pvodVPUS1tSuZSdrfXTifmBaD6upFdn9yzVWQyEHAoP6Av2mv1WQPhTm6a27dTQqdmZJPTauWx8KrzgCqaCVrfJ",
  "key3": "3HKYnJNEjTYVYNCMe6zMeXD4aqwMAv65Xp4e7WkFjstoGMXEn38CDFuiLZoMbJvRTgHtZfkkkfoYrpRFAQ22MFgY",
  "key4": "5A8mqnucZezuzNwjT14hkrxL7RZaFeU8SZTzwtANux66Vo3SQL9ckGLpQQZE5gBiL1ce5mGZhFtLWBQrtoRqY3xi",
  "key5": "64MFvMfotBxuiqHG2LjvQRbSkZSbokUiCjXK6N5bL2svbjtSNBeB9jCCgDVEcH7p66XQjS3VJ1pXk6YfP6Zdq8VJ",
  "key6": "aCvtXMh4PWqeBR9Xk4vMzWv1fhXNiAGunYwn2tunjmThF3G7xPAFg67hZrwMH1f7iKY4CakQNMKUPACdjWzHszA",
  "key7": "3TsiPL5RzcLoGbD2uLshbk7ZYebxfnh5wLHo4xCArEFKiVgcWeovTF3tLK5PrC7pejv7N2QWiweNFAx8zFzQNuu5",
  "key8": "412YFyX3n5Vm2q3xbM1X75VbDkDYFUwtX8NKAYJGXUEWTtgaihKKDTNuQhXQtnU4dXxuRApAQYKVzGLrYaJYFvPV",
  "key9": "3qp36VyKJv1tsrRTRCCqKtN8CbY8ddMiJ8UVtFyw5CC6mp11A5NzL8MPD9TWTUAnFbRfzpEL7eDtopYz6GMqpBjh",
  "key10": "2N7GdLjxezdAUbp2jTLkRRoMWv4xBe28HKuxsfAZstXB2wKEXvgibJvydshcvWjn7tPHbbUsnxAB7vCeZhkQLpNZ",
  "key11": "5RChQrCrDhozPVhnTfWPd3KxH9Usn3FHmhBUQQxuadPXKZXGQC5rV4CxAQprnjovVqCEw5Mj7uwHyLfjPJ9yrzp6",
  "key12": "2cunHJgo546czdTspEfaCtGPTY2QqGQXp8k1BcX5gh3hvPfd7BfuzdZsKTtpds6avnMcPwgyx2fxe3iR5rVTZe1D",
  "key13": "2Teqf5cmtGUgNHt4CKP6fivdLGCHn6PDaYSirEZp99Lfukb8S336gh61WAXH4kUoYEZHaixvnNyNck8zaXomn2Vn",
  "key14": "5KBZQajk8UWzLisDYNyKg24Vjd5Z4jaDMyLB57NRkaT17WoXTR8c5N5qcCSTNDmwwrmeGVf3LHNFKSCcrG836hbv",
  "key15": "4MC9XvysZRqwyKby4HmjQcxy5ycxQzkuSjP2d87yVSeKxSthZnCzsBM2XwZ6dhz7pigY4YHkE5fNwg62x2RWnH9v",
  "key16": "4DhfzQnvtQQ73aaCkbTTzVdiraAsTd9xZECxVVeSFonYPMWk2ZaVRfke3tiEoArJxJcdgfxfdB8jDPJSpwRU3VZV",
  "key17": "3sH59p71UWRZSKfbX6zEiBnAacyt95xG4HSpujYEi9z7Yz4133YsNd94kKiGa9D5EZuN9SBoBMok81jP3QHN8CPu",
  "key18": "2a7zHc329iaPA48thKs7pmRbrS15sbLGh7sHSWx1iydTbtnEvr9YxAKtdUVQxwMtjjv37tvvXaqJT2P7RmJQVSaf",
  "key19": "g7QBArM5RXY4vyBxUCQnWMryTwaPstY5FdyATjeceYU2FCbsqd4gCJo9eGrEvFp6FPqXq79b4wJvaXtHcHf5iiM",
  "key20": "2hhtKiaTrwefh9tUs8Cmi6MzKpmM7H7R78JJFmXQAC5T6oNGLXW63y6B4FYU5hUZKddWxg3eULvmA3y3hm2ZoddQ",
  "key21": "4M8uhf4EgxwTvsyVAWYt2V98armQaJZjhuNTGAVhpPutUFfyEFH5AnFvKy4bAkUkBK4vobFs5oTX1JyWkxLeH1n",
  "key22": "2irCsMR82jNwFXK4SG7TCDa5AR6aNyfE2nnAxx29MCqLLh2fJmk3yPUBbJjrc6FhgwLphVvXunNGCMhQYDFcbw4K",
  "key23": "4ufHZxN9kVNTRzL1i1BkQt6xfPec2AJxUdSEgKZYXfPngmFAQmazPWm3YsSPuyx5KEx5rCQAwwTyEFT19iCkzzJt",
  "key24": "5fu8pVTYvB1WxkugDzt9CemExpJsr83cLhjDgHXcYBgo6ydJeH2gWLvVZALFc2vRE4DYQktJd8TnkhuNp5JDFxWo",
  "key25": "621FzEX5nGGkGu1w9oGXiqidc7gEbkFDu6M3ARnB8MyGqLyUD7fCgMQxXnQunGUciB7M7cWyMLjFfbTVnzUvdacj",
  "key26": "aC3WtriGJX53WScMwERPvciuLTCGXJTkMLg4Z288aJ7wmq9grqiwDY1gvg2SdzYtrbHeoiEZ7gLqNQ7T1NdxmNn"
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
