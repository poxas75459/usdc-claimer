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
    "2eJiA4yXYRhyeZNU3B6Dzb2nF1ipoAmsm5WDVp9SDDihq5nmQsjwynBmJ7M4crSWdGfB3AuDVu6ZED517wVFdGr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzL5i6bYL3qZMLuFg6LDBM5gGBpSdQNT8eiFHa1s1VcXiGwRiqHsea6VtB1WBKXAJsQi8QSEJMZKtNz4mA5RYhp",
  "key1": "4HMJn9x4qBfoBLbMAhtDLQ1yeAV1pbNW4aAyXnajmi9y2sXUJ17JtLoRA7oa1hpCmSqFnnPbAFM6MD3kJWpKJsC9",
  "key2": "2p3pyGYZkWbp6io1UUbqHbSwWQRYUAeGR1VdahaosMs3iTL29nstcg76efKNMf5ziRfPdnj88pdzqXQdeNmjpSoX",
  "key3": "5Tw78xBt7kQfneMKuZ8fYtTDdXjCWw2TmpLAEUViVgkNJ9Li2r5UuYXh9FbkUUtuPJ9WzFPxUfWbbnAXA3wHCM9c",
  "key4": "ztLAkxKMjGRkW9UD1oNXoRJNnxqZWVVM8acCgiA61hLVcHLQjN6F35fRU3FJN2CdzRzWHDPazVn7VsvaU1wBLZt",
  "key5": "4NBuGkSSWkLFXFkSrgXRZADY3PioQGKvHM7RjMef1nG5vZGUi2D41w8WyNF32srkZp4Bz528gzA6koBxkH9CVGdC",
  "key6": "5QVv27ssxrBx6KLVpavqHoQvyjjLNtPqrCzunoz8L87ySMKmpT2qwvabqt5uSeLUJ2rX6PUn7K1WiGg89mLBUj5h",
  "key7": "cz8fHivKA5P7ApjWiS9a7cUFJYTZ1yxNKDmZFt1EygThsrtqmNZkMXhBcxrXPUuVu9VNEnuykvUJnUdazz6gtiz",
  "key8": "F7kMKY6bc85GmEVfY2RPUPpRHtggA9G8vPgxLiQuPWujEJM9saYpcwX9rFpd4TNWKAHq4AL6avSR44MLEyVtjWH",
  "key9": "2iUnYuDYHPTnF1EU5NCMQFeHuWtwe8myDDf6aDvPviD5arEFcbxHR67n9yPnvXdp8JiQBjEDRr6xHgk6g6LGXMJs",
  "key10": "5g63W3AJDBuUR4CETFNCPLgHNuZRMCqknkG3de4YJrb3gRV8QzWTQ1h3hmqtuQH67AGhhATbGaLkzCiScccvbjGD",
  "key11": "uxB63T2vkFpQMCn97SWXFvyYVXs6J1zUDgs7V3m4iAkjT6ufjLY7PaXkxbNx3JfhhEXg8ADuHWhWk74g51jQncL",
  "key12": "4LmHTdCBNTc1CLNLkw55cmpmbBgQoz35negYV2uiHEWTVQb5Ge2deXzGmcPvh67tzCx5wNNNwLLH34Mv4W73TYiU",
  "key13": "4VLjwETZP3G8QdRczA7REXcgwjEE7qb7jdSoUwNNhwQnxb3sj2xEvgq6xwkmUGFVrkhqK9PQC3Tt865v93jQSKbp",
  "key14": "2nCdfGGXBFCNA2DcvePj8H56xj8Li1ngUdyfG8CrMhsdza1SFuvQZaU8ULLG6Jk9WXMJPLxj22aUDwLs3iudutv7",
  "key15": "5CKWTbxPvTk6MGNtMYUaKLNY61NNgkbKqV2HuPBCzYcMaG3dmDThRYkFKzTTybbSrw9N6GZhWab8gSV3weuisFXc",
  "key16": "65WvwfjQ88qX99RWMj7gn36TjU3KmuYvSMgbcaPL5tx1pcrckBF2AdbsNxVwZCma17EwfwBaEVQRRuc3AWk3fHRi",
  "key17": "3FNaxrrCSHvTUBqQzSPzBoGt5vUFUHtRNiwZfAaVproB68JkYLHKZrX26pLm6yn8rR3DvoFbi5C7SHEeyLEwHKV9",
  "key18": "4EYngC8P3Qc8WM4qkbunz3foYeZDbaW5mJ8zowtzSRjUFQpGUvETosrtNyRp4UetcXMLfzejGEjVzQahXhmeJVXM",
  "key19": "3Jy7rXxYX5YKvrpPRon4WuYk477M2BgVx8w9xrsYq3Ff2UUKiL8kzYy25wztevQyEiG81bHDYASZKoSyWBFXXFDL",
  "key20": "22CxFZZb7wgMLwbNoEHeDFAWsbW7o24sYm2ZdaF2bEfTvZGtCZEvmZ56TaLs8ZHAVGRxTxs78cz3TKqt6pwyQH5i",
  "key21": "3rBCp1ENUXBN5iwKHf8uiNhyc1uv1aXCkjZQttGca2hTArqjwiLG23ufzF8LvxT2Cc5w5QkrpXA34C4L4V6QntLD",
  "key22": "VU34K7qCPLSGFjwVVGhHZAfoN9MjWSyTzoRbUo5GkEmTueyuYqEgbD9MokBAfkg2j5fB4v43WS2geD4xqj5XjYq",
  "key23": "62K2Ti3zHDd8zQ31gdu2ihhLNybWm14e5iy6U5G6Gf1YgvdvqRsy28oZQqPf9icxaCB2whBQpCH9UeQxNFaixcM5",
  "key24": "hu8WYn6kUMNKzAL4GsQZmwk9ooNSMPeJffG1dbESZwpD2rgbUaxJCeoeWj7PS8Mf9bqwbps3YGiwRpotQ7f5MPN",
  "key25": "2Yp7hGW98LMYw9G3qGABRk52jsGDJV4w3WLTuNQxQ2YWUSLV4cvw4kctH5b9j2xzqE2geTXuBNZSKU4uxG89VSsu",
  "key26": "3Q35sxkS5T9R3YwK4DRM9vHKCfqoPMPf6cwfURQn3g6amcu6soKyifcynRobqPFXeitNJkL8FKFix8QBWjKbz9W9",
  "key27": "2nRhr5jiVG1oshYv9iTDk2R2KzvGYMrBJKSDSFEGZeUib1dvrUEmPsFdgcUmZiYnayD2czQVTg2CdUC3iMHUsAex",
  "key28": "65L5ctQ9bzwwsbLt5SWFSQWLCKbgV5S4EsusjszNkkz9J4M4pDgpEDkEJNjes1wu7ik7A84G1QecFFEhCn5Av4CC",
  "key29": "5f7fEEwfRkMfRVqWu855mVehKNXgWtAdiX3bEwdBc4BFnuiAukUwMuJbTaxVC5wd72KPk7S2J6QYo5qLyKdq8FTU",
  "key30": "2CpV3c1FLmoHgKf3CtgxUo29y29YzWtZaCW2QojU5AcmG5Eft9MvWLBpSrVyTGYu9iPtpJSjow8atomjCd2hZ9Mt",
  "key31": "3MNjcK4A9woVWfawTzXfA9dhoDiCfqAEkaft5Fn84TfMexKCwrLMXV17MVJwjcjbxTaeNxwWJmbrSKBcHsajxC2J",
  "key32": "3w9xpxe2pP9QELgEzs1AhjaDCy8oqwRDt5pgkx1ExF5x5trQn59MzKhiC9tkZGAt143Y2WUKhCrpnoP1mhQKXJzC",
  "key33": "2bKtMRzva164SucCyn7snGpYntozjvFa125xDSPNPxQ4PmRL52vpSUd1mX8yKxojJ9K2CHhPWLnU3PmcgP25cDZ3",
  "key34": "4knSHrQQb5RVYRPNxCGiHj3escdhoeoFJMGfwi643NBDZkFvaAPo4Ct9Xx1fXHKXugYAuUQTkRyDAwdDidnfM8Gg",
  "key35": "5b55nUo1N45C2uibeRuvfzeEnN6YdU4QPwFw7zNcR46fpmjbrkjkznL6gNMtXofLrSiuqrUshkn6vMRjA2LAY4tg",
  "key36": "2WDbrf17865VQb3dL2GHDgrubVm9kMKGBN4EVopivaqXEUUN8qTUY22M2MH2qdmy8HwnTc496jmSx628YyA6Y4D1",
  "key37": "51TB1hCFkzC5Zx9s5eNgpC4BWMgVywKeVgnQE9d255kHpibbFrhbArjAbdNdMX2QoZYLd4vcTebUxNeRNe7Q5xZv",
  "key38": "3rRw9Aq6p12rj9gqCVmsUFANgG8reTwJ93PiGkfpST8C2QtSzA9VhhAPmB5a6ofBSFXGrbDurafM5kpMaTcA24zr",
  "key39": "4HP6h5BBSKHyhRpyppX1v67LEZXV1DFkiW7UvQ5nN7qfBkmP7nQbHvz4TQL8Ad1NSimq3RLicytehsKfNipgqDn7",
  "key40": "5VXmvDAHhDkuHwZHNviepSLsuNNvym22PZzJbbhUSwC1HjifPYMYXGgfcXJSwbMmjSeJZPUzR871112b9FW5Mp7R",
  "key41": "4aHg76gFyLkAJ5d4WpBeie7qD68NQJQxcRWogPDDx8W1Q6GpmSFLkt5ipQskVLHU2x4vZDhjhRUoMGYXue6ufweY"
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
