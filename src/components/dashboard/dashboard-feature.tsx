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
    "iAVSNEjdJi6PyMGy1iX3fwW8Xx7it1qvfSrxYru53vMEZsC2TfM7Evscbi1VxR6vd7gFNsPdnWDMuYsRkL5HzMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFJ82pbYQFkHNAFP3Qw9eN7nzV5DNo9aQXQJjsAf8rT5zVZujQV2m7p865xDoQbhWZLpTPPsthuQKr74BX5Cuiy",
  "key1": "5ZEeBgjC2fW3ZzB4Zz71oecVsX4N6BsDuXp49EKah9GXccE81wFAHS3hx6g8246QkkBwp3NCcoCrHxAPYdeHhvek",
  "key2": "1pE2YDqPkEmifwE2cKNKjzTeUDspG8J5uSMBpP1ZCeUAG8H3C9ca3LmigjDjw4P8QLrL3erpTKpmP8MyVWYdCiK",
  "key3": "4ZdYgLtHw3Y66LomfNkPs5E13uS8EkdFnJqcRVMFP9SNqcgVZF9zS8aAtrLgsboAoBnFAz1vSCDaBAgSqJLtuaHh",
  "key4": "4T2HH4HkDievVZAvYVPvqSrjQj9RjE8nvWqq7kcJY886aYU87vQHuvrFHG9syHphUL8tksMNvQ8mS5Cxur7Befn9",
  "key5": "2K81yFh1fAjmsyCPT2WtHmyoToNfP5Jn6pQ4TuBGuMyiz9uvcp9BA2w2MWbmW5NHjLCQsp8BTEMdGgwgBPbDj4e7",
  "key6": "orQAxw4Rzv27bQzS7JWRPHA57kj6jrY5e4VPUTTT6Uaf8L2rsorgcjnPV8x6icu2rsXMuDmF2oTScVop8RChiS7",
  "key7": "3qD9Rv9RBJzxC5xjHJVMTJRkJRFDkp5pdDfdkdRzL6zswvyeUNP5DLe1UpzMLaZuXSA7By39ywUWd8pXzCqqYZLN",
  "key8": "4oXxBLJDZqyqGCeZTdWzfM6PBAxZXKF84EVKvMsGrfAmMRFYw8iaynktpfD8VFBnUQtReRtYKNKpvCDJ4imHix57",
  "key9": "5rgW2NXrv1XpGy6Y6ZQKLvvNHoEU3Yy8MbC4xNZu1bn6jxPqsGb9oqeF1v4QUbi8KKaLrtpskGbyX3wT4JpW5ujL",
  "key10": "3eJ8hMjhLxRcr4XpaSkuLgi6RdH6Xqx175pAJNUPhdezwwnoynwQSDNNsroJ1L8hz1r74a7zegPQRaswjGnasg3G",
  "key11": "22dUcEE49MBgmMb6aSCCViLkkzuFGnWxPeGpdNoGJA8EDg2NZeyNfaKBukjwzZ2q3AekRDuqUtmC3EGLAtQQ6SyU",
  "key12": "4zJvwzuWujExoQgJ8hZ574cj94nqsVdZ4s4rK3P9m2Bz8M8BKdwqwQL6VgjyidXTPnvcm5jRBy3cSRf5hmPhEunK",
  "key13": "4ZgFDgB34RsbrBjR2v6UMzomWRiMr3DF5yNfGydf5cF4VhfXb9xa3sCCDE7YonrzrD9xH5RR2jGQBmb7qHmJNzd5",
  "key14": "5Ujzj113dU7GDK1GD6JYuR5ds47gEX46FbXy5prVQ8QS4xUx79aT6PotHVcE7mtD4Wxm6KLFa163affwi5w4nvx2",
  "key15": "tKYyx6nZtV9KerH4caEG5M75TVBbLGB3AoicrS84YZucKjSaGezzER9L5eJws116DqSYpxuBtJWr2hosEY3Gp4x",
  "key16": "4RJronFoqfvvZf1v9Wm3JzapQCLsicFnxrnr8Mhd1XwjzQURSx9LvLurgRjoTgj1na6EVGSw7jXq3H1my843KnSa",
  "key17": "5yM65BSMrde8yMZpir7ZgYN6m9vP7BvNg2jYQJtho5wGJvKfqUv2oqZX51U9mhviWWP4AonxDHihwYZZKGJvQcwN",
  "key18": "Wbo5aZh6Vgnxup5cT3z8UZAxS3wQMmj4rcrpPZMoMauvLAyUz75VMcTjFFvspYJQcgf5HbiKtZM3G7K8rtiWYbX",
  "key19": "4jx12hatBQzfeohhxz28eqLa5riw44YzFPmMsUB4UoLK22pXdEcFn6Sa6hbZJvFZ4TCw9Mj71E6PVEw74jWSVmGz",
  "key20": "58w39ZaaS3ZwLtYGdvfgvTjy8kz2cRCL8KbkQfsVBcyi7YJdZN4dMyNd6kBrJYa2NvXGHWojHSd4xN4zfGA6u71o",
  "key21": "3NRLAic5HYRpzeey3s9epxB3cprNk7PJUhsFwW7LM7ijJUv7cRviJP5KubGz1oaWxyMhrGAcLd86ZXp41HwYSkJQ",
  "key22": "4GhgmzUsTnKep9nxi8BHNwj1dPDU1ksmudSyetPJrgegrMG4kPoWjVp8NGBBxjs74Kq6QMpKSiwEp2yoKamL8dzP",
  "key23": "os1BvKiGdk3cv717TjxQy46HDebuFgQp4C6TJ1L3jx5ruwEKs5PnsT6La4xYUKqsZT3xJ4xo3UzrEHhpBD3vjcU",
  "key24": "yg5XrD8zHGJKQwBdzpwb1pUmansM1Stmbww9TvBaEdZ5pP1ZeWewmM28A9eGYZEQU5HNvibfeDzA1Eb8zqEyPvg",
  "key25": "5gC2Xd5yQcgv8VLKtsJaBGP58oTKvhytZQdSipkmujPZKpKvrtcAkHSPuHoy3QfnJygTN13FkhTrSViZyWmiS2ry",
  "key26": "vp3TEHsjL3RwqdxyfuGEPvgpPrX1be9JokY2WFcG5LykBHp3GWX2ETPpcrit4mi7bVCvLeWsZ5XcSTZiDadxg8g",
  "key27": "Ucy73N6yFa1JpdqoGr7kRifyuG8SRhLTzMaNhuhpncT4MwAUpFozKTVibX73Zw3PJxe7YJ4UdYtNCq2aNGmo8L6",
  "key28": "jx5RRMtxC4v7WG6xUhnLqph8cbg3bQggt6FdSeVMnhodchkvPBoyNj15BV1YcYDqacgfEvZLWQjDKEQAgNMVwLY",
  "key29": "4MhUCdh4TxuDcxix8aczx4AWGkiyFj9v8p3Mtg7U7u7PeptyR5XcepQtRHaWEJPHoAGKqjFM6NmNJFw7mYDm167p",
  "key30": "4KGgKhvC9fUwdJHQvGFU9batCp4BaHyPrsHCwE7XKm1CtQETLPNLxCSkFuDWWrD2uwYbVCYpzFe1vrZRZKpSaJvA",
  "key31": "3qpw5gL6MDyRQDpiAFzDBC6NP99uAAAaHRRU1fQXDzqWgRsDAuQBPNHnUyRicxArWHgiGYfxXEkiseQ6p8MxWL6X",
  "key32": "49jZyTvNazHfwNEKGfmDqvDCB5zfV7GtiSDcnvPujJnd1XgXRiqcb8YpQeSb1UBW8HP9qy6VTojt4kmhmyWsLCp3",
  "key33": "4Zr7UWaTitC3AqvR44ErfyyQxHA8zwDPzrcM5jovoAHu8R48pfPYE6nu7JM55cYU7S9oSx57A3ftHy36LFUnAY2d"
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
