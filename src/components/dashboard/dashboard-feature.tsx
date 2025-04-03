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
    "67K8MmCa1HuwpGAt7Etip4pDiwXhxVTn38UfRgvx9QeL9BLdifapSzvRwn6ideR4trSQaiiv1aXj1iTxgwdtsXUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmcheZMmN6Mgmy15WARQkqrugWsLdER45b9fMEqESVLuDyPSqepvomv8FM1JWvRSh7BMn6yuw5eVceCtm2Vewz",
  "key1": "2kSX4PKLUuHyzCSoA537DrhRPrn3SFDeUvXw1mQCD2WU25zxPWNE8b5Qp97rnHAdXf8KdM6eYfDzK2cWY25LAKVs",
  "key2": "YjBqFJm1QNPaynsmmXz5t5ZwKHoZ4RjAm2XTMVUC9mFeoVhRwAxHgSTfHnuLt1zm5HE7BGDqfjxLp2nzj4kumUw",
  "key3": "5jt2Whu29MbtqiYvjX1jWD9AbKqGuANyiaSkhua28R7JrnMVAMAajqGDnmhoyMb919yWA7zZscJse8xdxVdg5jRd",
  "key4": "QuBPw54d7ZBjTaUwKRYusZy5X5sqLkDMseJSayfThjsV18indxHgVeQd4fqEjSqtFVu2EAkQearQxdSzGLoWdvg",
  "key5": "4Eask5v1kw31zKsjtjynt4ZczFSaXzxvXMvgr5RtWHVpCPuY3QdRzg3U1TLbgtvVnDXpQobVPCJ8da26UjLeGSiC",
  "key6": "3N6Zqh9isQ7PnaftvUcyXtbGs23CzWCfneu97bscKBW3KqAhittk3bkvTd1KBRn49bcFMLf8uCFo1PrGQ6RrBdnh",
  "key7": "47Cn5ztoL7eFW6zRMUrrnKKawxk3MBGpYgJmYyFLs3SXLFQ8jqraJrViLpXNGr2odJdvz5z8YFbukPYUpNDEqbsc",
  "key8": "24J3zWCu7MPGL2MZmz8mckvxz64CdWkqg4sebnWjHqnBMi6QXqwRtWvSaTS5faYFnaVEFNguEY46RdPWbryA2cUu",
  "key9": "4xCFUQSoEBE3jFJ2bySwfWZVjYy45brpkdpz8Q2bHPWtFz7znhDVzRp7tr791dyPmoAFzcotYF8pmjdtCpZnDbzT",
  "key10": "5YLHfy29qS34X2K7JFbDyScCepbuKprZkaxK9YtrfHBY3nW3BE6RXcA3G8LAqy6Z9iqzW9wB291ujgKtpNoxWCjY",
  "key11": "67fjLhrZPXoGr9dBjJDvygH3RnMKcP6wUgStocpjmXy5u2exaiXuATakXCm3Cq91QU6Qg1oQL1JND7qDg4kYWTdG",
  "key12": "63Sa42FtuLJZJGaA1V1xzogLD1ZYTk6mCx5kYTBuSp9v842Xp8AiqJChn51RReh9iKPim3roiCphfxj4811gpybe",
  "key13": "2SHXL9hWBfV21obUD2hWcFXxaRhCx4eC9iDoccEtK7kgxGdnRkDzpFcPKL8d5BSiBd47s4A4CuDpkXMagUPpUiog",
  "key14": "4j1MXea1deGtxmqU5MXkyxymWdrqq3WuraDvRkFu6xEgCfyNLncDJTonTqdNyw2KXznzcKPd7cwUKucWJY4sutDG",
  "key15": "5ERhvThDqnQiB2FWwRmYL141wNSX2aUGqt5BDjR1FDnc8ieQ9JjzmaaNn5BZ49awP4Gpka5Uw8DunUySKxPwxNEv",
  "key16": "5eoX8JZCRG3QywqriaM4ojP5WFXXqMMt8G9pnCANMeuuVTnPC8bUXNMNY1he1Sxt8uju7HMkwaD54kSQmrL4sDmd",
  "key17": "36gshCFvNdTMoNQXDJasfMqsC569xCeHKeqgznyoKYsyZEPpRZuLZQSRqQKgtW7rS2MXjsFPG8yGzj1LXiXVDHTs",
  "key18": "2sqhKMjPQ482TLYTLJJDoBBn5R7eFWrhHFaaBUTK54wBjKGmqqu1mxfvWVtk9T87ZZCyBgAA5CCw34X7XXprPbpM",
  "key19": "4dhesfMS7LmejgQvDc9hQxTshqEcC2PwYXrzUcYL6UvtBaeQBd6vyL998KCvz9UvRGmoWkjp5q7zDRcT8oKX1mFk",
  "key20": "2pKxt6w1JNqSNCHaFzPEXwdBGyxqJybLbgBGcu1z5trNC89mfFMSZrHH2q81xhnytYrU1qAgkAj16phQocUoM1SX",
  "key21": "drqKvK8j5rgDAnSy5BdQVgYRF2JUc1SkcTaAi5eJ9V7TveyDWz8NpjyF5tC8CQfDDX45J77d77hx2c3xYQcsHSf",
  "key22": "4RXcrXvw5MKTTNoKfA28ACfSdMRu315TYTTuV5dvZDcATYvggKEwVaVxqdEgzVuueChgAcN4aukdgSWNQqbAAe72",
  "key23": "cYvukzZLDoRVaKa3XGpKAGijiZWohw2smUMpw7YM8E545jqbXJqxgjK71YahRdJhRn3tJpikMSNoiVc9p81YJjC",
  "key24": "3MxxMiyU3fCVrKJJaRt2NP3rZppYAVqfTF3cm6LG7f88sBcNNpsUAA15RMBkUTy6UBUZJ9E9ZXK7i2wyKhhANFj2",
  "key25": "mLWYXC5Y8PRYA41rErM2AaXPscYzeEgSyG1GYRCKPJV53nSTmXgwLGC4cjCpqeZEsUcDwNuVN2QuQQyazQNT7wT",
  "key26": "528HUg8GiZJYD5dzTjmuiHh73TvtMgY3Nx6JFA6GrXUiQ1uEQWpFC3BxUbHZx4eaEueFHmF37p6vRN7STgAuDAB6",
  "key27": "3hjhSujMb4nEQHxXTqqn6EVZmpmdwh9mAjurw3vbBuH5jAVBJkgGZ1YfCJuN4Ae2UCH2U6C1RsgrxCDAQ91vmwrr",
  "key28": "2bEyGXkUxjXe5MdjmUYFJHr5uWbxQfV31cvsk8wsXrkbFVEL5qMFdCJ7fTkTK5MVCacJnhdpx3uMGAfM6AQ9rNn5",
  "key29": "55XbvvNHfZAEKZFoqdNDAfycmbm7DAxaSTtSGCiWnUwUZLudx3xLmtETJMgioFZ5XAGACG3HPeHdMkAiitLVR7hF"
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
