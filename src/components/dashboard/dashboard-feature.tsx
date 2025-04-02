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
    "5pPw1V4yUxJGW1XGSFSH8ZiWuLwX3rdoc5QZ1UVta4Rh4VZmErkXV2K2brZe1WAeJYPreCw1MG8iuinmyWzo82sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAXSJ5xUkLDGmMz6Ujc1QmWnv5vUNrvwGJwsQs845UxiCCReGWdwRKg2JBt2zahxhQBFhHHzeEjNpY1Gj8r4Djh",
  "key1": "VSJPQetJQasgkzPYnW62kipWhNx33Bc24BebgT2e13zzMJF4ydGN2AKAw4LyBSSGzsxjQ8e1PPxPR9UdE9wsGRg",
  "key2": "3somGGKGGiia21h6DVVSgmU4Fd33zNgpWPCFhVy27XdNRwhwWa8RYBzg3MrqeuXEUur1JNZCEkkWrLRzgBHx2oKC",
  "key3": "4ACCrXztmvS4dupZYnkkTnDGSayR5gyJdckjkQPCkSZ5Ept1KjALxMxWxAeaDgwsTFc5mgEr5KxAjjj5YzdqRVeC",
  "key4": "3pzasRcC86UQnfMEhCWRb7pLGiFkF3xNF3jL44FHeUzhmQPsY1RkrbXFyKD3Zj6uWHfvegKRAbAqUWS9iyoXSXUK",
  "key5": "5sDwQfBcTV9YvLQBSZb6YrGNKKRbx2USupw9J6AoiypRh4pUUP3A43U7R6JU2dZKEpP6GGmrTxteqXwMTVYgBtz2",
  "key6": "3qYfwSasf9wZEbHCtow3Y43STG59baoSFng8ETYRVX4SwWueBc259eTjuCvUjWcCM3zvsgM834u1NG9rJRJHhGzF",
  "key7": "34T6rhzwuscnALTjTtD7Nk8BfoX5Ycod75BE98XMxqJCe3Wmji23bzV4bnqWQXeXB7khC7PwDYKJtibTPw5LdNkh",
  "key8": "2DLrPuNDmEi8rU8MC8rCmkMNNY3SqUvkofHfXvpk8cvXUMZvHwPN7nA6x7hRLKuo9GfEGTWQ1LwbmLzLrcMLqNZ4",
  "key9": "24ofA1j6aUksTaSSwzzU2PkcZy4fj3EuF5zoZmJjfKTYR95UMJyUppASs6EqxpxT4AoZDpj5D3EmRYkMAee4BXi5",
  "key10": "4e1qoGLUR3ZHPP72mr8DQmmwXmWaqYeaRgQykPFHxPHcTyTM6r4TE9kJwDDyVSW8mXT7Ryo3Un7mHQ4Z2ySBvDGK",
  "key11": "5VmNgQV3SPoHkJXeVZcotMT6osrpRuXaN2WUiggKXCxFmu7zNTfpZ6GD8cxHxS134k7yHD7NYEoCp8PP15sSFhjE",
  "key12": "3ztanrctMFwEqPF5F7RdRMcdTTmejNtfWgBjKT1NHCE9PWkCXjfWb73M7TPowgoQSeRUHtKd8hZcQqXsJtRkiWCv",
  "key13": "1kmAyvEhsUsj1x4QZF8mHVUbZnPTqim687HJ4uWHeue6j3JUjERAKzWaoTX3jW9aKQTBMJBHjKmwGgCY71LTAZd",
  "key14": "61K2pFCC7gS2iGS4GGcNxDP9L2bzfH1AJk95yz2fRYFFTVMa8UPrBQWbd8sbgnZSyJTgdNx3vBYWBgrEEnDq41JS",
  "key15": "3FRF6Tuox6AnDphmjXpLzJNxojXBJqKAU9WPfHf8eVtXeMMn92AmSP6bqiQ3G2bkQn5fmcnmyJdsfFnjnkrjjUSd",
  "key16": "3LzZx5HTf51itH59yYpvqfaWtF4XFrvE9b2dmdktCsu9jRxdUN3oqzgD24Zamf8KB6kd7j3E59ksUzuDvRJD6dh5",
  "key17": "5mhDAqw5p8DikTceQn6PfXSomqUCgxCmXEcLm9hQVotgXfd37EsmHUxjoXa9DveF8gY8whEdGsxJs713CxqAypfF",
  "key18": "5fhF7SDJjoRJDArxjvFEjD5Rms8pdZZUgGddwuhHnqbLb2a71yu3GRx721bQJA5ybSUUJNgkGAiuixGdBbUcZSme",
  "key19": "8DQDyRvLg1qq6P5Fq54SDcLQCHrX5YuUqT7xshq8k1kKtWwRpziczfUjFQgSWMXDSShRBzD8TBv4NayhiMbrEYH",
  "key20": "3Ea1NKHw6mkMKBZ2JJ6pXNoHYaaD5MniquwRrhvfZrfezs9U2LbJKyLk42Urki4uDcpEgCyJxcP3dQF4Xx8wbv2o",
  "key21": "3me4Z4kFzTUf794b8EyRSp5Vc2PLdrtm2V3yWVFXvhWx2ug4tt5MRJ86tq284aEs7F9sPRq1XTYAjkn5386Sc8Uj",
  "key22": "5gQ9BSpToufrXdFxLfjgdSzdaDS1FttJKeADbSBUVsyw4UdtzQ2TERQxWRyJf7t49S5fcfxhVacCvGSTUHsHXStH",
  "key23": "3W5LKgAy2vpv99VFUUb6aFJQywqzZeeJQDCy1w4xZLN1t5vtxoe4xDfWWwXetTZSrmKc9KMzd9tXVFnV5PTQX8ux",
  "key24": "3oU4MYiTsNyB2SERuAXkGbsb6d1uRusjoSB4KyWWgf3rRTXNiPN17qWjGPuAjQWtLPnqQW49TsXjAwoHX2V9o5h5",
  "key25": "3ygaMYoJnRi1NATYsBzjcJtBnigu7nBA6VtN6SsdeqQmJ11XV1Z77Yz7ksLCrnbJYzdRqWKD92Svv28S65VXLKVm",
  "key26": "55j7wZU3errwy5nYWCPXRGXUnJyF8wUyYoPsEFmp4kBLWdANTTYhR4uYSDdyugryN18ZnQK374SPJ3US7ha3kWMq",
  "key27": "fRdpsPEKhca4EWVL3SJjzeFrR5eHDSLebr6xXtWTfgPyTSdypdKM7ziW89gWPnat7rB6mshgjzruvTEvbAoduXQ",
  "key28": "3G1uK6aH3jgvF4vBSKDy13yzLnaNRUgo2dnZrGLZPxL7ktnU1fuuYHoEN33wNJShvbmXxjg9RTw1AxLBYjbwm22E",
  "key29": "4dDQqNUi3Tz2BE1GgZ6x31CyBtFhL5JaNZiG4sGidxABE8qugtmCyWJy3HreKUPdt4XFDykew8XvyvVToeW7uUyR",
  "key30": "5AjKmsTe15DKjcmF1HCLftJeH1pX6eQmgsoi6tNnHmVk2PcKhSKmmtyz4nurzYLPMLSQ1QcYzuHEP2CbCcMKuRig",
  "key31": "5DphyE48xK7PVxaM1oT7w6NxoapKVBxkAwV4pG1FWPppmxTzmvCqHSofjvFB3rWdXsEtXZiCwn6eCHuEJvsFJcyV",
  "key32": "4h6UB2iVCS7HaLykaxXE3GxFfngjkyNwgJgXELiW8jqor5vYrsZVD5FqueAQPhssJCS4j8CWzLFVG7Fj34BwxVTH",
  "key33": "vXE6XAkvXHa64m2mT9KAW2jMYGo63JSYfuSzoV51Vz7JkTRY8Xg1thsGQaeJumo5Ux5KupgEr8Eh1sAegA2rXwR",
  "key34": "28XQad7pDC2rZN1mDjhkocFR1To5hUjZZKEzFWMZUn4Y7mSX8xCAy1pbXbbm5cz7SmCf6VupGiFfm6gLn3qC16tM",
  "key35": "4FavZvftsg38TpoNCgodVq772KV6MqmDmLhZTPa776zmiRfVTyYnUUuUC5jZey88pwhAqwaGhuNud4LgNu3E8vB4",
  "key36": "57uWRSTHYePoJ2jpbN7adz4exCNpH5cb3hopShVdEgM6tFacew6Nuw8MpfvsFQCbsj63VPEzQ7YBBYt6Rh6yE6eR",
  "key37": "5KoPZcxLg1Dx2Dm9iGBzaJy9pmKzYc6jP2YtrNUNXfr5zHAyFovPVVPWC3EXgL1WyU364wGLTnAqJVPMQijz324W",
  "key38": "HVjkQtHSWbPAHNb8hbkPkq5vnogUjNxt1WwoxvbZTZ2FF5yVfYt6o8o6wwNmLuTrdVccA2GwQ1PSKYyw1cSsk2v",
  "key39": "4zt85tWqempoGpiBkdUyiBn8GDRdZqfwcRWTbgdaPPRdMXkGQRLPd33U6LiHiiPi2ktUXwvq8XPMs7CK3oJEMkfN",
  "key40": "hSZtQJ6Mgavu4YkbLEFZ6ZM9Q13egiTxvdAzQTskq4dMDN9tRru8uvVMwMRXArrtyqfquNaCVvkisXcwdbFGDDm",
  "key41": "27sc8xzJnKVTtytakbubSYXR71B2mHrJHtC8kvBy441eKZNJKVgyiNcyRuRZwHKwfxFVaWzdZDGXhFec8NmXo3Vz",
  "key42": "2gDfb3GBMJW75bY8o1vTbxPPRos1iYdwHmqEN8v7vAnZDRztdyzx3TzPdU32qcndVSFQL5n53iu2Mh5N2LG5HiPY",
  "key43": "P1nj2Bhz43RWam8YwjJW7efyVphfLNmjfzH6fTHt6aUvdGSYTbogZREb3rVniuupChKB4psh4rffgjUWgELLfBU",
  "key44": "4pzmoo4swNRuB82cdAGzEfE8U6bw9qBx3CaEVGE4EzswqrLFcJUZ9HKWF5MoE7HmBMw6BPMA1nwh9J1oBPe1U2qr",
  "key45": "2VChgAXfZp21yq8d6t3WpGSPV96eYSdbaBJuuq6Bzc1yHYfLKrb3XekpnfQdsidd2UPhCHWZjd4yQf2nEaK15E4w"
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
