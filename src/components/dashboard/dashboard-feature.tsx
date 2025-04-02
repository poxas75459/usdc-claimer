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
    "wtUFZLtB7BETrX7yRK9vAGafskrJHQ7cNkudK1mStRhya2kLn43ny4Aqg4suoJJtB3xkxSk2nvdtZRDfSA5ikzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mk7jAUZjUUNgKoHsJmS8evRAWLQL6kFSxSqEHMi9CTsWSzz4n3s8N33fUDyFcWFH7kBSBji5vGDrfgnG97sbiNc",
  "key1": "HvbYgB8s1G4EfBE3ngHiLg2dV3HN8FLb4W4xegxiTJT7DngqHkSvqNnbz2ZiuZqLUaPmVoCAsvUsaQPFBx4JAcL",
  "key2": "bJKm1TGfxCfzgQpb9aEu7fmjei6wXAKR7pbFrLJTrzBtq6wK2ftjH87py3rPBW6aRq1WEngj2GyxEGnoRVyvZ1U",
  "key3": "3MAXGTj2iP25CMLwWc2sTbFQrBdCQSwds4iEdYe75x1cZ8fpfJrRjdHB5jPaHnvznJWMjopESHhoaxXjxh8prCsD",
  "key4": "5oqDgZ6nA5Q3oFDMCTmiTHGWYhz7nvmBQyjQeTMELxhLa6yqepTDUQ8wsHqJWt2qbJkZGwnYGqKGBhsSFshdrRZo",
  "key5": "5hpdJEqaCp24zHfoaSXuh4rao5ieVpdiYb699Vb7XdN26iZ8nXJvrMZ6dWMJkYQuqqjyfgemqhvawgAQnRTZiZ2K",
  "key6": "4Udnfzx1pP3xrftWVeo3q1F8w41WWRE4nkacx8AnYVpid3bbT9LJhvM8AdsJf5tmafmCAXd4fr8coLiUcTYSQrPm",
  "key7": "qC1DFQouyDiLoxZ28U2keqsFVnxsBGUqrV2ecRqMncWiV6migc86TyhNQR3qYhkJqkuNE8CpoCdd4g9G6H6TxfX",
  "key8": "2pkWTm3Z3RCzoVXpeUzLJtjPkZQCLg7kGt2ZdSbtrVbA61JZhv45xFdNiUyYVmn23yMkvcrquxLznD2jjVBC4ehH",
  "key9": "sRRgXUabhxFYgTSnnujNoNqr8YQLwj9aMAttbkj7D7C5PHVUGZKYw4WrYFNTXzuqcnbzNyekLB1CdM1zAT2Noyi",
  "key10": "3HXW16gApmJBvSke5qKghLyjvpSFJjLPsCmDtirkHCVAfN4tjNNccdmVRC6demnPu7jqMbPdpZ83T2ih2yMsABqw",
  "key11": "VGk4r6n5i5BZsgwCyrCEJ1DmLv3g3SmDmb6Jqz1MzNSdq5zXUXp1zz3jthqSox7ZxvNnSnzZ3YdWSJwQ8yLiT8y",
  "key12": "4XYDjAVJVt3G2EjJ8S6tnujUunEGoZLZ4HtYFtoMwZAwmN7U8GLH55KSmGDJjdciJGRCoyZAnMrdvEdQfq17PGy2",
  "key13": "ZnKQr4vAePzcunwTjkqRu613bAz59NQn63mse3szCYeRFZ3i9XokPc21HqFdQbiNHktSQYC1mfLVgaCvzfXKmZW",
  "key14": "4QjMknSXxFo4r84MASUJivxEkcAfRgjE1NVGRv9k6dHZQSFZXtE9Lg2mWxzEr1WUd4eqkcXom67wso9Mk6yADrKF",
  "key15": "5t4MmDyQ5wph9LJ5rhwGMgxMD5cxhmqJR2h8fcDwMeE6w1Bb9vRspVtSKrkeYYajf3xhcUPKR8ytVr3Tc6RNyBoe",
  "key16": "5cLSB3p5JoAjHRk4tvEWDMLRjonJgZPVbPMnCzA1wZ3hh1rrkjgxpzBgwgjnbfY3MDNLWNjcdN4EiEyo94Nxkrdi",
  "key17": "2h5ee8dADjV8UWAwQ4BhLbdqL9xoqp33M7pqnBUkbKF9HyonCc42nSXYN2k6hjXFYvrq1pdEHAivJxmufqw1c5AZ",
  "key18": "ByoQ14QyGVZ7M912v2B2wSJukf1JAzwPmKKevQVZUmcWFMyxGc9JdHnkjXgRkYFwDi2793wN8KqP8WpDBhVMMKS",
  "key19": "5F6jWVB8Z4oNrzP8QK2eoaRY8Vs3b6G7C34Ep5eYYEgfcXXKgWURTnvuNasnVQsHTQVcCMAj869AASdNkh31fh4G",
  "key20": "5jUNk4YCqAFg1mAozKxNZ7MKDsr1peg2ucDFVLnr4bvnNjWisdF9TbxuEQGC3KpYXShbZEWWEiHML3jn5WGAMmXq",
  "key21": "34smYXrqYG1HE1oSAzSEdXNTCWRL2TcL1ZoRk3jnV82WZhib3Zbq2A99BMzqB8MDbb3mscKuDynLwQbHmsBTPTWb",
  "key22": "5mkBmvn1Adqv6vbubHvPZRF81WkU452nkV4RDtEjWN2ozdT1BfTKbJLAdW6926unsYJLj6w3UKZM4PhRgeLQAPXK",
  "key23": "2Hemt9A9H6ZujRE6Pm9zedUViFAXy3rETrbL5ioCtiQ6Np3RqfUHW3pLxsZVNM1zcmqnd7p58t2FuZvKUid1pESM",
  "key24": "7g4BaCwdU1UDzL8UFFDbgkSFisMtroeREhNLA8zxXRLaM9WgYC3NnvcGaa9hnrwSmwT2RmKSuUgY2kZ6nhiZqxv",
  "key25": "3yBWXWeqFmqx5HsNF7rTwupvdjuxcfzY6TpwZQiqXdgQU2JYjC7dUPVj2YTSk7tgwf8n9KJ2ecU5k6st9p1weXm7",
  "key26": "ZNxnCFLJZF4LkMPS6fMuSQ1Dnj7UwXqDzHv9GWcZxLXMWJ8fThCDcNvJRYMMcEGuTve5Q8ZdbEjdTF4cjVVTM73",
  "key27": "3i3Cg7vb4YTG97zgkmoMfvPPvmxjhuPHDMrgUror8axH7sfLwVobQVwHuJ5mBHZSagRi6XJgTv7FfHjyCxXBPb2m",
  "key28": "DRnwmaTZZyeAH9EfmP8VwSUkDBYPLJaXPFtEBoaszVxYqfAeC35UEMyPgJPNmGHZu3wvv7jKpmD7a5RGfESgSYa",
  "key29": "4j2MH8uVAxLcUTeURPqvJzxs4JJDTJ2Cw4WEHUbsGcUouN1vrdjogpGAnFpPQZSm9DAs5EpqhBpZxL62HqSa7pqN",
  "key30": "2NLJpKoQjURxqjUbKQnZ2cdwya6dejAuGWEuwDc9JF1vwBzdCk8rrvy6njVCrjRxAfCxqzRVPFhEGSeYP55Pjddz",
  "key31": "3hTXNDYtv54Lz5FUC63CrjAFH53ZJXfUxC3pK77E8VnfiPHMsnKpKwXbv4ABdMDXifBxubUJChFaEKVYt565NdCQ",
  "key32": "2GGjiEpaHo9zQVQRTWsienMDSMP6DANpH4rY1MAujQ85AWewJoYyHRARXuxF19zasmEVANR1j2mfq1ePxNWauePr",
  "key33": "3VZVPSo5Shmo7rR6nYFx1SLxvNLCqsTHuDAqEQsqb6Rw1eWJZD3dJaCnG6h6wVGomjKRPnxrSVu82aw6nMenPUWL",
  "key34": "4DYhjX5H7P54YmsvkXj72xABDMoh5nowg1YH6r59sRPMKvVhMvZpHnZSSYrANkemN7idbUKYXJtbgJvDXZrwAsW",
  "key35": "4hxLaQeUWidCp1XutRuVf4EZLnEPZ5YeDPmFC4H2D5zUuYQtMhG5JoxajrbREjNYcQTGKnEgKQHKRnBxJu59Wz3c",
  "key36": "vWHTTiVC55zqq9W8oeWEBJdBTF7tfHUMd9h2bLx2Zr9bVsAZeshbQBCde7v44Jp9n6juXVPhwj4RESWZP4iWgpf",
  "key37": "49eH8DL68NpH7dhLQSun3nuWXhQhJKLVqbwGUQLM9dvGEkXwTq2nJZu3h9yUK2Rwiedhf21bkm9JrjR2bZcBAySc",
  "key38": "32k8FoDP6hWMAiBMPnwx2LPooG9vATE7e4SUNjvHXxmxtPyribNhWfa9ZDyuzMfPUJgdkoiB9cCz6RBL3LEfX1xg",
  "key39": "2BHrXmjUFpmLm12K7Hr1rjJtoTmdahoQ48xwT3FJJS38WMVt76emHnpWV9XzuBxBtW5Pbj2NA4YZdrZb2g29iNjM",
  "key40": "4V4nYBy9U1bBhJa1JMGAaQdYb317Gag7ozHpFxhNsjbNZGQihaou5zrmNWxrSvExb2iaPMceeYXnLRXrC5MkkKMQ",
  "key41": "3u74YCSWKW3TgC8TwJYv48rXTitjw9M2noJYFsibG7aGWrEsYCfu4w41ws6rVWDAe2Va2B589PdjYoYUTWyoVysr",
  "key42": "3nsgG4YCYpvHp9bDzKiKYA1Ww87u7BGFUwYEbuCVZMCoxMJLwAPRuseeLHbRFocvZtXgkcjUvKgKZvoKFQfw4poB",
  "key43": "72hrrWcFL7vJ1Mg2Yjcv8s4tRcXjESxWBzHDymhHzZp5t6PFwWQ16qrzg6NP1C1nMPuGx6BL7HCkfxSnjz6uraq"
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
