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
    "5syWEQQWJobhsrJSac7FKFFrWVeaWP6mzGy7sEkcXh4L4vWxEiiVcGubDh2LGKoom7ZRvXLARVz5GNtxpmvs18Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNDf5ai5oKtsbDyGDPvCtNNWRN15qTxwaLSrTjpWfDxiesoPwH41yfT7stVF2qhWTGNSiVqxvMaKWBDdjrzv5f8",
  "key1": "Xc8hKHrcUCW4hPSW4fmDJrYn4RV1zKWKCkRGYEBePmAyHCmUGxcpEGRoLaX9vftR1zp9wKAdTud7LyogjEamqMN",
  "key2": "4FgMWvSsLJZoez5tTmpAgu5wskuBmvzoTc1Ce9GP414Jv3p723jRV32NAy1neFBNdFyN1wr9gRq9Ry9DFH63G6cE",
  "key3": "PT8EJxafFL6TCpHMQs9Jyi4tCsD3fh4jktcs7HnppBoQ1uvgjv5A6zAEQxptjicmYYaiD4hp1DX8TsEEx7iNT8T",
  "key4": "3gDpJXT7qhdhYw8f6qdW3Z77XEee7jtgM1oKAA179cJMNvKaKVCxQFWZKmHHRUoQvF9Dh3iGNbomm61LUYVee81z",
  "key5": "57rY1LR6WMvph2tPd7NY9fGQ2c2hQbPG6jgeVvkXLSSJ6NDxRBW8suRU3WEuuoaKJUhAJa3wA7mUkWyeUJjRutGZ",
  "key6": "y4ems5pAqNto5irbJ1A8ykaxdQgqpdKqipZM9x1qmFipDt7vCbkuSo2KbQ3JPEAHw2EbbRYcwsCYpWz953Cef8m",
  "key7": "5VbCi7nbtkcArdcua2CFJxDC2CDDAQJdJiQraDrjtZtfq8TfKUD9kx1uuktDELQiLpHfFTZQNPpNnU1Upaho6T16",
  "key8": "4AJPfWfUz9kpejoGNJr29MUKoYjrdMaHhtiW1a8BVvok9icT7Xr4aGPFrKrMfSb5jqB1gnBVVuVg5hjwtkh3oyW1",
  "key9": "5YkdU1dN7orsQ1ELWvWKsXuR6wkDkaLr9Rxh3MgKPXnPQU4aBTAnZUepp9cjbTQhSuUqWCksrwvGfHbgHJma9kk4",
  "key10": "2BufHtMCzTPZS6SB9erQ3fwqK6aRwhceuD4PqEpzLJ3yhRvXchKobbyw6YZxTAjzPwyDQZ46q7VmfwohmRXJy6Td",
  "key11": "ReR48G4TSQfLNR8cbjubNrsAhV2hquEzJMY5cHLUsCWYd5wEL9oUvYcXXxumhiYcPyUHHtj1gZcbSCkKA2HFapa",
  "key12": "2R57kP5j1m9faRGMXxFkGSFXo5X8hqcnSgLeY5aHpFazC3BnooMc5Wr7rtrunvUHyeMJGs7VN6ZwyWWGh7fVckbc",
  "key13": "61pyarM4PSTD9PYmgu6E8u2acgs1FYfsU3YH9rf7NpeDQwAxmAhLznKwGjXbjep4kBJAexRwwix5VpDhk88GqijZ",
  "key14": "2f4f3GAN1dHR3LHSBKmzNh2W2d3AZz9GSiPj6TYAsRX4xZ96FZZe1z4UxLRUc8W5k9S4ZeahmS5NV4DNkigHeT5n",
  "key15": "591J2CHC17ZSEt1xEbeK9xuALH2VQPqK8NDWkwCzskCY67YCdXCoxttbA8mVKqMsH6SJvtaP15jXa4YLbzZXayFG",
  "key16": "5Xj8jr8ekrMr6jPzF4CrAdKRa5qqgykRncS4n6b2KFWWpNBw2umXtadZJMLJZGAyBoD49ZCDtCpYSogsuxZAU9G",
  "key17": "6Be3iyyFFKP1781CP8kThp9KP2AEh8PPRWugiAExMdfHYE5KnaFZYyQoobcaNPSivuy1X6C7CzFduLeVRUb3Do6",
  "key18": "4gyooPEuD4xfsEiVTmCG1c2Eyjr5D1YTk41o9MtJHZTSzayLyF3mc9fosHz6LHy3jXhrKf7rbbeA3uMV31EBUzA8",
  "key19": "2Seu3jUbKn9vJzLiZQWFS8x2maVAZsYteAiwiDLfFjmR6jzPAkrC6PGADSb1L3yiJKLa1aVaSQgpzaoCCSnF8Vr7",
  "key20": "Vz45bE1ZzqBJJWHyk8P3dY6mv1VdS5aFvo9YwSYCFoos6fJ85FsmHxfYBaLvDiDkAepZPCkC51GGdeXpnhZtcyy",
  "key21": "3tDAzqNgEwRJPXKU9oS8dqn34KTNjeS18mb3y1kaNk4r3F7jaJQ1jHJWgYUfv6p2vqN9EBuAPYMytYDJTTktcY4R",
  "key22": "2WgvFaQ1LwBkUH541EQfn8xDWCXp2KG99kHR7FbPqBDEJE86oYYW7fDudjgsSaDNHzCovBn84rmFTAzHozsFMiMP",
  "key23": "5HczuxYKqHNWcUN1arAD9HJnfLctwpMi9oq9nn91UmaFUbwn11ai85sGLeE7tWDhucQvJGqK9payJ424CAcrfEg8",
  "key24": "xNmmYTJdRidsbCkrQhW8xYaGW2AeVWZj3MCkLGB3G5dzvQ8poLLrgVLtBouoaSRGeUKjXptY36ZoxEfEtCzPKD1",
  "key25": "4Zf8af7BgUSgBA9w3yNfBS4xnbsCrhKcWJnbkK23AGKR8qT1YUxKBQiMS9q9RLLsk9aXdpvEvM5NWPC5Ru3twQxM",
  "key26": "4Fd653tC8hwBdAAxKA8bG17zvNQFdyXqzv9kyzCooid8DFmED3PcyAfjgm1GFps6i2BEhPjZrEe9h68oHUoN8AYC",
  "key27": "2DGro7ejP7Bvu32H9uXTZe1LTxwSGgwsrhhVmyk7L2YQwKnJqTiGV5gH3WfnwgFYzznEqPj4gm4tifchHaDnbnZc",
  "key28": "3dTkFTfGBHfxUHR96CH58VQ6mxAV4zavMBgYB8Ya8YU36J99hzwkJYR2RJeYMEt8YhLegzm63W2VochmxiFRfHWg",
  "key29": "QCXHfWmi41uvxvYp3xMcqKCuBbsw9zHdpen7y3Pvgv6U7ec4NrD4qeScZLiXduRGjjPMDEmGWgJQEKSqPUWCAWw",
  "key30": "3UqxFK1kBEGTWFumZURMr5ZZWYYcWrmteUowHf6zuPgULszVD4LiDme4BsTQGv1yzD7Nyn1VoYhyDGvtRsCLf9Vn"
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
