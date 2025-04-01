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
    "4cr9gZS3QNRg4yAYSEo6P3xyvJf4EKt77rTcx6CU17uMGv1kQV4CPVPgj9b9d31ZKAtkkHs6FofijGQBidTox8D6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RNtG9xVomz5Y582wA2Tz18iPoNEda42w5J3Q3PnXTfRSpWcCsWHTTUJ2kHVzNhCqAApRJkdEmBVRsXRDhVQvxNQ",
  "key1": "3825NqtqwD5PUKKArr9zzbbQGdcoc7XKgPt1T2PVzWpd9RXPipT9hxq4eni3cJSRuR21gUz8ebsXyfP46R6Gav61",
  "key2": "44yQFPmbTnfZDmUXv5FKTLJfcjytwzN8ovcm5Hkt5u2dbLezpH1GnbCF1wbq4apQfq3xKmYtpggKm1TNig4EPhum",
  "key3": "2rPRHbtyGJbickiFxokyxmz7hBbVaAqugioradWJTmmsi3zGDbRic7rwuox53o8gn33zoAJRF4pufR2fdgoLKN8Q",
  "key4": "MQ5zpLGFu8pdHMahbJ4NTRHa734xa89XtH2WAdKw9bXxsiRaud1vkD5jHAVqJuAbGLqqjENxQdcD5hZ47FKTkhZ",
  "key5": "57G6HvU3VuLocSazSNEPyv2RuA9pDe4S9jYZthJ8mJLZPmTvp1QLogt6B8i2tuzxsvVmP5QP8EsrHnxeZH3BG6Zq",
  "key6": "4dDhvW7qMvyCej8qU2sdF2MxB1P3JzqgrqjPUkfpeGBCF8pi5QjMws3CUprfYBE6XwK4ynRLek55FvP5P9ftDVGx",
  "key7": "2wjKch9BzNz3DyN7M7brn7RTi9D5Xt6DiJ7TokEX4o3N8dfCSHu9FiYW19G14ZPQ97Cxj1d72jMSkr1sGdtdFQ3y",
  "key8": "4g3yiGBH6tFSHfxJsKDS94UnJ8z7K68uCatJoSpcuEh349nLgHLHPub3cUgdZfHzGVV9jyLXVGsRJPUhHLCZUuuR",
  "key9": "iiMuTkGSdkvMELXJouAY5ghCw8xiUJNh97hjhvFqjGukvi9V7trbomUzuxzJda8vnSECJ2qqw3Xus7C2Mo3Hurd",
  "key10": "25rj541aSCASF5jf7jz4SGqgP3cQJ1cdNGQFo3Puy8UHSHcRmQNJwTRM8Ke8kJRdYWJ8HNWZYxNAWeyvCBKU8DZm",
  "key11": "3WuHNxQwEXDBHSRbWYTumkZoWCZUfuQkDvu1DYkCBr8f2U9Hjbz6xroycVeydiVXs9kBrGBDyYFvz58dtMtaY61g",
  "key12": "2k1VZCgGKmQwV8vSUWq3ayxL5Hg6gUdc7opd5Pnckf8UWHS7tW9FMev5THT5nDYoaJUhct2w1nr1vrLntuGwvmiH",
  "key13": "31iAzgEZe71jeFWF9Dj6pErZxSDUHjk92zZzuo9HM19JPGh6gyNqGVboj9yKiUQv4jyHrQBV5J4Jet45tsendR1k",
  "key14": "Do8zBNbgmMttoN86Xoiub5ZzDbrUD2nZyR6K615Y6uLoBeRGCPXYvgZXH2k2waqfjrCSjgVZkaYWnDG3eB5QwX6",
  "key15": "5iAtTf5xh5QACoH2FBHbGm2j4W87H7EQLjVhAoJJpD1ATBGgp7Q1VrC4XBKe4oKGnyQfiVUfYYEXLGcdZ1f63rpr",
  "key16": "bgNWUEG9qehYUXuh3fV8QAbRDTmQiZpgaMabUmbKZm9xq8gYxo3FNX81NeVKaLWm5BCPESTP3jTMKWB1sruepGi",
  "key17": "eGRb9Nfi3znZQULQKVW6AduueS6Ln5bpS6xc86jHHqVgdA9MHpUH7GEYgKRGYLhET5sZ594tk8DVoEi2EYtPuhR",
  "key18": "Ejt36CXQejLdf4358EXHwnA7YdnCR3sjWfiTofmmhdMDCcsjcQwv49tY3yrrSBLjBrp6NHfBfuJHhYjCr5NsaDC",
  "key19": "64isjW288dcWmYWMwepv2GTUHQmUhgreEGKry2mKAajAw2WC797J3B1bF8FTSJ2t7ctJRAzLW3mMJtqRyLGQEyzr",
  "key20": "27Zg6NnMYZsL8UrUVdB9YjEJCBZrqqXrW6miGrf1BUvc99heC2BrPGNZo9tFCqy367TNbs5YvTKPmRDvViAgsnzv",
  "key21": "MYTyNQM5eFzQSCoADVe3N8nApkti83ThdSshXk7UNbxKwBFWUGPcr1WYWYFi9TGTE1Ybdd3aBNvjohNJBEAKy1T",
  "key22": "3vk5tfdsLwG9tk216asCeDEPoUqE6nSwoWWqm4LLmyufFt25iBKXeVdAfbDuMvsGSrtYJmecHMb9TvGhzRazMwPw",
  "key23": "3BVAvjd62SYk5qgU2aBsAyx4uMHKteV6EGY5EpbUyoRhgMwGFA77rKWN8YgGCrF6X5BMjSKtXy1wDSF2gEUP5Z1Z",
  "key24": "2hJbcgCfRLYNgDGA2G9jaCSJSZkdpRMtNFdjcvxfhA2rb1X4isNNiK7eJeug1KVZcpL5QBMC2cHGdzW8akiiPAu8",
  "key25": "3TRs72mcoEEy44pN3Y5Hc7J1ScPX85nZK3ZDNkYPF2bn4mYBhJvqXt3zfxknpbD3DR8uVQn3fz2M5c6py5wWcqyN",
  "key26": "iz4L4Sr3yLxFkycq1j7cx5poPgQKK3MjhE9jdSQq6Wpn8RSpKd9ogThGGajbDTuBDdue9wSyFx87MuUUfghgb7U",
  "key27": "4jQa5UBUpRnfU8eLmXTA8849grxfxuZhNqExktt3Nu17X6YpNXbXJXkwdiFxhaYBzYLR4VWtsAP4jD22nPk13W57",
  "key28": "U3wQ3dsbJr2MBs7dXPkgXJNA7d3TaVpBV7cmKfvzP8SKM8kwQzo4mshawUZ6mU329MkfH6kjusZBGyoD8K1Kebb",
  "key29": "2SgueRVZWoG1iGwCsvu9r7eKnr8mXY1rwiWU1Taxrc4JcvZiwEZG3LXbEkbBht7bN1abthEWWtWefTiDTWW3u2ge",
  "key30": "4mRufcLcx8tw9bU1QggGkXtHZz8FR1R7jNtz2cKzNxET8RzTB82DL3eMhxuXDei2vFWq6Dw8JZZxkjM5UsahWWYE",
  "key31": "4rKC7C8Hm3vDne7H8bNZ6sUcBdPi9JNBYdLQdMP57qFQXbB2jJe6CuQ5EPEvLSg156k79CepzHmWfXG1QUnwpQy5",
  "key32": "7EKgQmm8cuniUPgPV6ebTvpS8hEaqz9GL7yzgwb2fx5HacGjyeZwk6m1XQmRa6J7187HEZaLFbkRRRzNCXFwPKg"
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
