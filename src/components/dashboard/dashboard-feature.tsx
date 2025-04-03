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
    "23UADggwsDL9vfE5XwaHDouM19JpzfjAgqu8tPnzMRVcYnXQDfMQxgjVdD6ijaufPqi5Uikk4kMK1g5vwwTnGFVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezaz88fiUZFD9Tk44sBVNExThycVhFendLMGX1RW6aKzTyxmDJBxgb71rAEqVJHAsB6wU8UsnppnTPfFFyrj7z1",
  "key1": "44LXKqiA7Jh8hnmKnd3pkyHRmkaEZFYUb4epfWUKWnUUuSPUkPudB3VttGFnTwR3scynHES8mdexz4FwZZBh3Lpk",
  "key2": "AynXxSBRvKts1QvjbUAdZKfWsEgMiUvqX8xwiCV8SS18QxbFP7Hd2Fsp99RCuBoirXRFo2J8kGMVuKz4YPE5vCL",
  "key3": "4rTz2om1VPmRAPZ4fSGD4K134xfNQuvo5iAna78Sn2mrQEtCeZtMGSTKpAjaSC5Rraa8Whr6dpBKfE3CxcfVhDtx",
  "key4": "3AxoDYB9n73unthKLfmHepLxfNB7zZPqW8FwMebuzhr3RxEr1PUiqyTsVpGxBwV4HKtN7EqtuPHjUPgJNHJcPypP",
  "key5": "3n65GneVSE5x4Qe8hHMEe2dJQJKJTr9Nhz2KFfeKq34sxAcVodV4uWL4g5drtGL1DzPEfDK1tDoyHxNZkesP5hSb",
  "key6": "2piLv5cKEDtTnuJSctMU9CmJAxwLj4vBFCxRWDknK9htDKjsKGpWiuHbVcAvaNNP9jrr2BLa8xbchMWBC4fZhCkR",
  "key7": "4UsYhgZ6RyQVp4S8G5Mah2TP4AoSycxAQbdZWqT779BZkZpLm2SeTne2gXTpeQ1vBW7tbvt8sPaRcoSih7qvEnXs",
  "key8": "vE9p7AG4qkq3X5J5sYyK1tkXruwhpZ9fQ2Vnnov4fuDFCvtdcNmjNriV1qRFnN6FHS9F7BebxPXFfohSMypeKU5",
  "key9": "4qymVtFyLH1PG7Wkq5xAyMzQ8mN7dLcoGvH5gfomP6jFdHD13ixYt7EohgLQPHgbgJhiBHhJHnhJPFhz3V3qH5Rp",
  "key10": "3Fcv6jiw5n5pYzzyroLSQx6h8UqjKLE4sHYmXXycV5wXGW3N7siJYt6v1NFedbXHwA3sHT3q7xsyn2GpFHEHcYZF",
  "key11": "irPcwPA7vE93mL2Ny7mtpQdLbdPmuSazj2mmpinpbnwZeewh2dnRjUmqCqrVhbDRBdLrQS4hTstNP1ekHHSmFSA",
  "key12": "1oHVbo9MFEEzB7AkvYcw9dm8uYXAbpzccs3hqPpkGJsKy2M9JkPaxL6dc9PLhGYcCwMh81cgE6MZd2sar3uBgAG",
  "key13": "2333a3Hw1WkyKW542PsdPDtsChXmDGjFRb88SQUSoZQNa69wEHfHohzCrKELBTsjit5bBHdP99GkZKMXj99mf1qG",
  "key14": "5GehtTvCz46isEDXb8hxtNXwiLQe3UvcHZ72ihjZ6oB5tdcGnC5iSSDtx3FzYm23sCtyaEPPAuztmYHaHcTRhwnt",
  "key15": "M3AvVWjLGkU8TD12KH4TgxBRiiQZgqyGxQ9PhtixX6Z22Q1NkK4gh3wiXNqd2VQKWoYvyffW7BzXypcQ5cmMDfv",
  "key16": "3moXRe46EfhSM9kYFuMkqXVZQMp68v2bLcJMLMbrcJ1K5Ep7nYt1y2b6QDoRGAxhtdreGeCfmWWCyVF3rR7qaun7",
  "key17": "59BNpgD6HnyFPtQ6L2WQqSkpEndpQjkGUYJLZqVyvELEa5ioYnYYRKG6XgvWtyARrzmJxGGEaaTydysPGXnwpkA7",
  "key18": "UVPcbsoK5M8hXip6YJ5GyhxSASg2xSCTW6hqBRKxst9dd6syyeLgpv42audK483q7wxWnq4S5tb94JPx1xin8FC",
  "key19": "4HrcJbtdM22TyFvk7QRnKPeFSACjKySNa7mpM5r3HQ81UvBcN9q8UhcYNKVmLxUfUE4RCWVq8MTpnPkMua4f2er7",
  "key20": "4NQ8kgoPpeUpNSEsRdekUUEbSDpmAxmR3cSmgQC5bmkb73xZrYuqM42KQ8PSq7VLAh4cwJeFhDuFZ2nEAEzeEfjA",
  "key21": "34RSAuSfRybH3Ro2rcrpYDctuxTb2NrwpPAP8kE7Xse2Sz87H5N4FL9Mvy9jhYsK21ohj6dUhaRTkqcWz7uDXsMP",
  "key22": "452eXe6scgnqr7ZcrVrfyp9pASzTFfNWCivJzd2nvUWb8dHBUeRxWYnLc9QQz9qY6tDxbGQ6Nw5RWTfhkqgFaLP",
  "key23": "5fZWoMWTrgC6kWDrpZ1hWzvsrUAsKV76AS3uvLzNDnbaXixRS9yyT6LgbAc42LDL4MHoej4qxytF9Ci7sfXQaFp6",
  "key24": "y1iLwxqvHKj2bCopg5ERQJMsxtKVeR7RoWP7uefE613S1YVHphfG86h5g6RghzX6qDqjbf81s91oD9gWS91kUvR",
  "key25": "in1iqdLXkUr5S8VaJAyuPEF7Pq5yCCDvN1V7JW8fn8mLcqyGUpFjy8TA2q4DvR5f11qUvRB8heMEYFuZUsA3DbU",
  "key26": "2yD4zMWck8WnU9oo9aUKE6idrN9U1aNUFT76X5bvvQzTKf5V9PLTv8FDHwWhn3zTLvDcAePEHhTTM6UYqY1PDgdv",
  "key27": "4ujWtC3QTSEBHMyTF8jKs1J2vxDftNBRTeGR9hcfk8fNs8fax3DkTd8Rv1oXTkuGQDxKwLBwRimK48ztQ64NAfor",
  "key28": "3aXRHp9pmaFo2CEZYKxucvDvyvnkbGZsvH1rB6s5VHgaiCdQbwSXJpRPVbtcSbe4HZvz949wmm9SEvhA2cFHi5f1",
  "key29": "4qRapapkXYWsEEPURaeiNMQDD11vddBfsMwakgTt8grUaGfvpFq4bC7sVaD92qYCiL8CNkGrdCUtNpyRkYXbv18i",
  "key30": "3QU9HL33vR5nbxZEFJq3f6UReSQqVacveHqEP6AYr72pQ7n91D7YECayvQW1wjQQCKPqY5CvwJeXYkjT4GPuoeL9",
  "key31": "3f7GfqUBDxzwQdzaxuHDC2U9qEvai6J4fq46uLyHnReMWNBGFZMscX5PCxWq2vZdhqvgVzsrHLLPo9eBEVV3qmo2",
  "key32": "3CBNhKSpx95EV6rXsMgRn1Tpc9jUCKTqzWNz6nGQpkskT4vzmmrmQHLFhihz8JybwJv6mT8aCt6yZQFGeesazcRi",
  "key33": "W9WMyvfkm6755efG1DTpmAHLbzF2G7WAjjv6VaG5rNzrXv744RPrH81ma81inFn9P6bHCHktRexCgybGNPetN2a",
  "key34": "6cqDBZ1kPo82jPRmTcFQHGsCBZ7hfnXf4r5jVV3focdVDzAok4oFRCTdEEa2dwG5AztxZNSfRhRP65auTGpK5EG",
  "key35": "4igzVDnYEcPZsStV2yn4DE9LwKTq6y77CNGK9kPnLH9sBV4PrQ7WWfNppazUSx4AW13gUPb2tuZ7sFYZhao9ZLSv",
  "key36": "2qzm3w9yk7ZUHpceKi67FkwxTjmK4fPv88PB8JJwW9ksvg941hRxSD94VA6qxc8VLbTiirUV81tTJx5PsEztmpAT",
  "key37": "4QxA52GCmezDrcWbbfXhKdFpCgSsc9J4xL6NjnZYafFgc215taprcnaHeAFJKYLm7bmh7pqzrskzi6qiNwhyMYwG",
  "key38": "4wnBayQo662buGnJ5N4ZYZMK8kAeqirzGfTHqpzfJZGsuzYPcp9MhdEYJL7tSdJ873VA93nQYPD1y8EFcm4q4rgb",
  "key39": "61dUZyWHePMe1DgyVZ7GKCSUSDjsCeDPVkLwzsaXaqARVq5Cz3RSmuJgBGcSThdJ4AqPCWxrrzAkKGx5PvBUUncb",
  "key40": "2wbNm1aVLoi6RDZFGHQrqJxkkKFMPQndX1nY9jmnQWbwnMrSbytkLTdGw4C8HTvxWooLz3z5yqD7574V6qWkpsZh",
  "key41": "3bQWVBE2Y85GrRRp8aZJgiKnSnGxpMCoCtB2KDJcpAFsMepssGBFQH8b2M5zX1iq7nXbQHkGZipQgyV5dHD1dQfs",
  "key42": "38dNToCA1277SGupbPg2kz3o4S2dA6uLhFxs5pq4g3xKGxJCXBhypjgmVG4xLCsYrFX5QWhJDmNS3bcaqwXLamgS",
  "key43": "5XWv9Jxvzxmb6bhrCnANr9K81q6M9qSA7dK8QEquDPTJNtTBf9QP9ySNRUMmVWt18zaqypkoyWY9ck95xm7zKbcL",
  "key44": "2RpoQDuZo3mjR8omwma9ciepKAFVtNjKhuyk9LcYbmhWTVLKqSmkvSogBCCnCfMpBN4UkCMqewSp9GeVQNq25L7V",
  "key45": "2dpjETaMzEf6S9yofAvvHdxmGi8a5BxiASBicn8rjQVKF7KaigTqGCgvGMnhnZYcPf1Hcd6EDNHoX8tkcDc7RotG",
  "key46": "3Cjnm9hAXCYSKABagtwzHQkkP1E1GcLHfonDrEusPhcu7fYzSasE8kniLqzGtoxETnNiGoXUBJE5PUybexQr5kfm",
  "key47": "5umnkXgV52ocTGQWomA1fhf4C3RTWVegzgyEpCdLkvApborzx7YKxdZTfY6oniu1dh4ttqT9oyQu5eyzf268W7Dc",
  "key48": "292HKpTh8sBBRthbWuegmshwoS5gia8ijaGqT9Lc9S4y2NL7ykv457V7ejhbfhhpxQYawxrnH9XyCRC1VAsxF3pP"
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
