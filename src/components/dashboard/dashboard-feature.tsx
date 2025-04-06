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
    "4MDpy4VtoJp4Fi5zdLygzpPXK7b8k4P83UETdvxNyyz1dk582A5DMGWAMbtsZqttjJo2Gsz5VyNbArtXqCuYbRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aLut25FgJjANQYvuoRq8waAgvZJbLFvQ6uCFwxSXQzXGcysAZLjRcKaM6VguMrDTNPJ3THJWYPAv7xKcDJ9TSm",
  "key1": "4i9KtAKc2FDV53a8vSCi5FxZKrrmtb93jx3KvSHqoqZBUuHiHUz2PmBcTNqvA8MQzzKpX1WiwhuuETskHTGgDXL3",
  "key2": "66q4i2nCYXFhLYz8uykhNTtKKQCFP9cZUFGFnzkdFSNuS9sGaHeNgdeLSrfpodn3fTHd6HF8D6iMB6GNXhdHnopQ",
  "key3": "5C4ujCDEkpwDVq8PpudqMn7d5xHrkCSPZx9H8sd7ZVxHGCtV2XYJGQQG8CqB5tWHNUcqfyTRgF5cAzFxSH8mYEm5",
  "key4": "4Uc8nhGm7jF5Va7PECjwPgHWrxt6KtKji3H595Jv9Vz7H799Dic1BxeCadWvwMxf67mM4QqbYxpu8iRkBCLF4cKu",
  "key5": "585stAq3pRpgEG8MHKwZ98GMPT2hTmnaNtFt9b6GQJEBF7kq3fZ3maq6KJSv6QHbds1NF1BBotMUG4iPJxYsnGbi",
  "key6": "43R6ptRYAurz3XYhSzCQroW9e8D26k6LL5x7PG7AzLYdyBVWJZxQ7SwxX5GQZiMQFfcgT9kpY6m6DXKwHMU38HPF",
  "key7": "35Uhy87gNhTsiJa5vefMd5Ujy4gYqXKdG2BbGy91X6PyTRJzWkdpdanfPaeUQhKDHZv3pjTjAyDDdxD88hstWKiK",
  "key8": "2iVBDFLgTPuVhrWpQhZCUUP3pQ8dX6aXLCSk2vHLF1furBUt3s84bZRrRcZoZ3StbNQZPLNzWjvUKeWQ6fr69S2j",
  "key9": "GB268Z6LdogQ3GWv8YwFTJSD7JFfzg9pj3XPUPHquhqZbjhkT7uPrkUdqYBiJNPqvoRDXBbVhktcmwbuDgSCaHf",
  "key10": "o5eS1qRHTWpRime844cUqSwBfAjRRe9D4tVs1CH72YANKcq9hA5d7qzVhE71icpZSbdfQt31y9v2wwkRdEMgbtr",
  "key11": "27jv5sU2vzPUMY3mxeGRG1piuJKiBX8zY8FEgNXXfGA5L7AFVC22fQyEYAyXykNrJEN6UQvQy5AGKWQnW8GuNM2H",
  "key12": "2hM1ATSoQ2gFGLhgMvxSiGN48AHLLcRGL3Z1AMEVeXDmuWhGSdRxPVadHXqehx9zTR1Sz8rYNdC1n5ZSjmYNEzyk",
  "key13": "2jf4aTxMPvkMcHz8qRxvahBwd4sqKeGPwHoM8LPtwUwTjwQroxzbKjhAsVJkutUvMdZsg6oUvcBKsdmCXL4AsNQX",
  "key14": "G8JTuKdXHa4Taph414GMWFu6brRefM8JWTjNBDgujcbBum4WCDJ5Z1txh5RqU5XeNyBZG9dbyAxsi9ifHaSKTrt",
  "key15": "4rT1AjTxDJtKhrWoy1rQfuoqHqWgf9D93UJKD8GxewLTCaaNYsUjJGcEW5VoDPFvNeq2sL5K8jekxzhZbzoAUWN5",
  "key16": "3rtEEXExfyNGML55xjbHJPPZa3v68AvAde1ZjozZHUEmXg9tAGUk9C6VBViBMCo9wRmvp5XZNmLWmXWqhwcB5Jhh",
  "key17": "43y1qb4Dnw1APpNBwrzsWGycBwshJYGNKNWp4xGAMGH4pSuwDj9XhjcfXFuSgb14u4tu9Y8syRvxtJ6xvYuHseCS",
  "key18": "3XU6v4gGLUrtY9SztPALKwUbpszoJ4xdoU1wScTmzqGSu5TXs2qkfUGZiQ7zPPbktrw3sM3V9DF6mkCtJTWjYLQb",
  "key19": "5YUvwAcLhN7gW35u8uuNx31JxMVEwfMpVagc35btWkRhfboqN15T7pNezbvKLmmKx77ojabJ4rkeXnRGU3QXAUwm",
  "key20": "4agHchGSebFugs1FAtd92PiKMirdaiKxf6cESYa9ZJzK8ttvAzfmGqpQsiaN4YaagG5txSFXV6kN8FYhL8aZioSD",
  "key21": "4VzfwtVttmDavxMuCCCwuYa4StVUKFNfhLF3y8ppTSi4ykiEguao3L7dqPD9PNxVv5nBB178dH7WMV53VCaCSWJu",
  "key22": "5zBiL174kvoCqy9vVEkxC7pAEH366ckJuUe5LndqMHqEbs8TPWUV6eEFt7FTrV2vzayhkb2ZEesGJxhiWzn9Nqrz",
  "key23": "5VyjeKo3kCQeF6RVFcm3ps7btqSEeURV3BuGpK1bE2ff5p9rCx4VKzsa9N48ggW2a3LH999FdmfmUzqhAjJYB82v",
  "key24": "2WD3oczTHCDjLLiArB6WkPi7Qbbgjxfpr8pL47Q6xfM1utoDi9cUxDo3cHfAUqVbAd8LncnzgW7hhLwWJ3evPGjp",
  "key25": "2i3VC27ve2bnMCTwMgu4cMW5PRicBoZvZzV1igsjKXy2e5wQsViwnAs2cgcidcchab8z9WELnqKvUYnGMYThVdTt",
  "key26": "3G19vEQcFbj1CyEDQ2qv7bTzWh1NdS3g3SxgJH7TmFHRZK3HkziijCwWCvLqYH8arbao88wFZ124SD1Lt7f3nZG6",
  "key27": "JUF1HByXMzxdJHWJPCYG44rHgrb4baJq6wjs2nMcLNAcy5D554e8VQn55BVn7d3DdgkJg9cT9C71XdG677g8vgX",
  "key28": "cKAF2z2SPY9FiUmGx4gUNgHHVe5JS44tCYR7bfKzrHGEEmB6zUt8nG1LMWZVzLMQa2zr5DgF1zM5NUmZdZCW6Gc",
  "key29": "646LssYdGyCiu9YyScM8JaGjzRYHTg9hiP6DCSDwjvEea8qJWWL2QJ8o8HQqFmtnM7tYJLjcPigjm6j79zHnDYjt",
  "key30": "5qZAJU8vRWw6bbq8kUHzvc1wahBJ6hTfzVgJReBqhE1fmYvWztZmi2MBFR7ytJdDYPB5QWuw4bmi8W5rpS7bLhRU",
  "key31": "bNfaKZUgdMoEP2hGicSVeCdjsWfEXEXmBwU9BhkrGaYuqHbcWfDuT8s24hYabGg2VwZyc625f4ZxDe4tSEKg7Wn",
  "key32": "3zGNZ2FWDpqAKLtn4AGedfVRfKkXj9BaujZwYnGw5AV1oLhTqwYgDN9AeZycHsW3fLb3mmNvV226MpMhbzbTpo7A",
  "key33": "4JKYn1ZKX7Sj3Eu9GndgrHx1wtmuXW1UQuQhtSKBNxDSrt17FCkUAFSw2mtfzQVtfWszqUFh7dAqHNST81WiJcCR",
  "key34": "4pSuqm531hHwwGw2QKivpfLwrk8jDmg1ZxWY2mcP1MubdLAGGS7fryK9eztjxptyJ3t8MzQm2JDEnFaQV83WRGL9",
  "key35": "3Jb35hH2pUfNxB4H4jHZ1wTKS2CDVrFFU21CBCR1pKHrVz5AukUHVeg9NZ7hWjQoRdrF81B9NycXEvQocduEmenh",
  "key36": "5rHmiKHfkvKr5PgSjhCj2ho22sKjzNrTSHCD3hD6frM9hWqG6F2D464LqyFxZvjaAMsrr6soYXbCXmrdnVr4t4Kv",
  "key37": "5ZJxrDRWdqeivfrrvxce5S5nz8eZHH2CRwmE2qLEg7wKpmzZ7c7JPqud1d2saZha8TBqArQhGbZpRe4TdoHaEW8b",
  "key38": "W9EYxmnyvBgEu1miMxLbQYdaPq541fxGjcvhLW73rxH6hAPsHbK415mmPXSeiCdswKFJk8cBP32kkD4Gsbfbs1f",
  "key39": "3k8nViQeWu24iX6mbLfGcAQ5QVjLXZ1wythr2BmSxSCim2f3SuiUN8AjLidaLWeBd91VXiuxqbjA5ndKSECwC4HP",
  "key40": "2bf4ZKt3KbfFU9svgY27ztAJVPTDUynV9LE6TBWX1jRSfH4FBzTrnDRE8RSWf5N4hwF7FB5eu3AiR71LTEh1wsMB",
  "key41": "4pzPsWMzSrmYY2878kDxKjnausuUhiiTBLRQyDsfXoDGx9xC7qH1KdBsSj8gYxv3C3yV63ZnYzzpJLFbbFyziu9v",
  "key42": "2pCF8tPQf3soQHGbTWv6u2Z2HUgbuJKjEVsSDJU1y7AdvG7TsDmUM5faLGBKePoRovbmigR8RopKUncaN3Jd91hG"
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
