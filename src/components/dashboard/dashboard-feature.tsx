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
    "LZWbvMEomrurrLkpdiB2gjV4LZWBT9Mqex6c3f9rzzpWuSHcayzKU2BXP4fBXwmPcXYXnVWxJieRnAKu73F8R6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tHwm6DYVrNj67vbxhbMwQYS79XUTqCpwdw423jYmg4HZbLhVohKMyaq8R7RMRotGEhcfW1r48aDcfqjgEybRdmS",
  "key1": "YENPqL3pgRvtst4HW2NtXSrXsB7NjdQSKDM4ictcEPw4cHHrJD2yXffBLANE841ZUhGWC3pxh1NfTQV4D8Y9nSp",
  "key2": "3Kh3sFM2B2pCzP8VtTwTgZhvHJmUNWWNMQ9oGD7WG21bHzTUcZQhAFcqEZj3vPpYHmyAM1SZW2enk5RjEeHpfvpP",
  "key3": "5Y2uJJvd9GcVfXcoXbcfqDYmHBF6fUkWsgeTGtbjmEYyhXQ1nB3e9c1xX7dY6FpcSXW9tgGhmhJxbYFFuFFFFnoD",
  "key4": "Fx9UHNmexB47HxHrXfESeUoFUojRpqHFTNcC9xPhZCuyEfS8r8j9ovEHHWtoaZfGKoRtSSECFMU6XkuVEK5ysQ2",
  "key5": "5aLKCdLQCpj7GubAZ9LwadMG3R3ervFFfZwweHo44pwNsyFxVnoJqskGnycBwp7im5fbr8kLm8GYQg6B6dgsrwhE",
  "key6": "4F7kfyqsUozByNwcBym8b5FZfFrWzoLVG75pV6CQP1d3gNPVTMmqVEipCHRu3Gs4MHhGEjtUrG7yAGhwkTMLjwxE",
  "key7": "2CeNoJ3PUQq3NWCZhdk79FA1yQvK3pC6vVmTPpHg8YnWo8LoNzL5MPujybRaHVwFSpw7Csp6QkffN5rMN4JQcLcx",
  "key8": "4NNDE4bVdM5uSKpLLDFiSpeD731rrUYC1BjYn5vqMb2iHeaxUSTE9qCuVQL7AvRxBbCThMcrhBmNnZgp2vcbLwpc",
  "key9": "3FSdLJk5L6ME2CJ8AhD2BhqTP3juLeShB53wMwoS8kB2y5Lqfrn2jo8u5569URnXDarnciTtDPBKefG9svKkbjBs",
  "key10": "2DbiAJcw67wFg8Xz8VBijyY1hLG9a2J9LvbdN3AkSG6BhPPhrcNkgwxjNqbgKXXdYgECTTJowKBqZs938hW89ju7",
  "key11": "3NJXCBnkMFtnT3k4VGUr5tqZH1hAzx6ir4EcSnmx2q4Tg65M8QGGeipfZK3hFGieiKajje2RbZRkyGiT6ZVwJGKi",
  "key12": "51sikodPewtsga18NEtvPRfDYWDkv6CaMMKKaerLj38iMKxVBQnL1qQCegYcSa1rL58nVBTZN9ZKj1um5ZY44qLe",
  "key13": "2W3qUeyNGZq7hZr9DqJNprf5uo5o2PmTRkBiAxNTPghuFRd5rxu24Ait1wnVVhKre8wSD8xmf9v8f7TiZuzsjbN7",
  "key14": "d1iLh4igyCLWNPKLam9Kbsb13GDzR1j6dYvN3jebv62FmkAypD7t59RpdHmgcT7wyjLjmapdemSrUMKkzNBRuuF",
  "key15": "2viN9HU5gswY8JcspXW5HvPsbppYJistwfjaicwdwy8QMhqmGgT8hqPEigdYGQ7rxYPwdFC8qitYvuiiGqaY8mnR",
  "key16": "2b6tanDaNzsVhVwdZRZXTyV3hEbcfKaYGd5Fpaf4XkKDRkLieEqQyZs1CRnRKC9LqLkF1kVoNfdbnGrRT3TA57G1",
  "key17": "3dJ1iU7bEV4JTQ2f54L7cuVNmsS4JhGTzrsBo7yXZc6PwsiSnySz9aDU3wn9Nj6RRNY5tuMazdDV8L6UYBNmB6YR",
  "key18": "4HfTev1woXhhTAmK8pmWNxe8MGXqYEW7nsCC9MZ6Nk4pCGJe4nfeQFWjpFVcR2Dg2CMWjbWaZdGqX12dmmoZ4uaH",
  "key19": "3x5R1xoG2ZcVrhKK1QrofrY6YF123nvik82wystgLTgEzLx8vw13B539EzSvTjr1EnsRRb7Mwd6fPucEPiuECSpA",
  "key20": "2Dx2bgg5AYBgDHuaFtBZ6qenCCRstwPPfqU83NHc9iw9355vpGa8fPAL61m6xGTX8LLJAJJjV1VSvxM6RiHB37hZ",
  "key21": "4kSHt8qZxFWPwgLqfFXwM1fUCPw27WybbxE6TEUA4JnBmPbeijn92TZ1uyN2YNhpzTAqVF2b52yA9ZJemMUg1nmw",
  "key22": "4Ugkixkhdgafb8Yx5yW49PZMJ1afCgw3jBGHPBooRWQzawf76nGghLga4XBepTjAcaShH9d2HcLc4ZUbedqMvFot",
  "key23": "5ZjjU3T2YVNZWDPjPwNkoJVHZ6K9njQoS9F7j8Q9zaSuaoqTfdk8RHeatEhNWzt4NDg8iF5zWvBnwgxroXunzxZr",
  "key24": "9bdLEN5RJpUxcuwmAdMiHSyeKn7m6gMEhoEX1t8hLuJp9yYCYwHpPbw43r59ytjgkLruV2R6sPuV15gYgoTrYPZ",
  "key25": "38D4DpM7b8Q2c6uHsfcMDwrYPVBtj8ubzk8WMaxMV6MLM6Ku4EvtYNbtAAkaaHtFsJDH3N7QDBCEqcjZ5MSG6uy8",
  "key26": "2gRHwWHcXGfQoTKnx8F2Zanx56rkLL7dFzT65WbdmUrdwqLE8qP62qLQGanZGHFJkpPybQ86NtHPJ5dR1fjzsR8r",
  "key27": "MFsBf4f4bMWZwHHXjfPMPKZkK95HrZn6ujrphUQDApkpb3EMb5pd7TSujqTesvkZxkHTugZSpSLGSXqj3R1jsMT",
  "key28": "Yt9Gecnd9dHfKSA1y9bviEeJi7u9ah51z2uq5Eshtr9Cixjo2sk6VbLQgkRDeprTfyydS1Ynu8vbvcSmpKjcD7x"
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
