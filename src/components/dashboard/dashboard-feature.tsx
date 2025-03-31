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
    "3sqEtPBt1TrDSuNtYAv2pxG2a6zvf2Z4DdSwf2V8sypuMwntKtgRsUD6ez41NoUhHoxnV5yhcxSpqSn2STQimCdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iMUZtpaoT8mtJVTZPPf58dgJULSag3UxrCuRTJvVwDk9uBkoxHRanSQnM2LFnpZUNJoLq69unc3hVsTFCEnRa5j",
  "key1": "3UtoevXWn81fv2y73WAGgSvyeGFSuQZdxRqaSV99Y9jaghgEaT5iDF4VKTCxQ5CrWrWLqnpGPQQAwmKFS4yzgNAB",
  "key2": "2TaxVZqsKwiUKFbTeCxdZBVtkb23PXdyS2xRwoMUHycp1Mz3oAJhf7waZiGpjM9PVjwzNZwurWkidjH9NYwhP6VV",
  "key3": "5iNhn4bss3unU42xdpzLKSvGhiFAddfDZBGLSXp7mCvRgBzVzfBvKkcLsmszvKRAR9CpoKBUrQZHqnJF9qQvUPkV",
  "key4": "3rMda4UogXxLru1fwj5yJsMXa5nXvtd8DoBHR164QLxGReSyCDL9pxx8DFfueZqGC83srBb1XQ7vMEXv6jkynFTn",
  "key5": "5zYjrXkZLkmCPLBqe1yZuBgB3ZuBJCH91GrKWwm8cvU2ocUfixcCGthoPuHuFhFQ7RouBaeyVRKfHky1P5pEcQ3T",
  "key6": "4p9XY6e1pvbRmJqtszhAv1yHwSEzvNKYhfsaNwAvPQGRSL7fRgRi4659VGpoBWrqXXPJvBvtE7pDbMuBtamCUJNC",
  "key7": "2HH5NxZMZ1V781tgamH1ZzgF1o2zaz7ioHs9EG1MhqUKo7iPRGKhSvwQVEX1wDL1BxJbD26pgNProtJgo7JFUasM",
  "key8": "sRwVk4ytpgBPjSoNcTp5LnQyro2NknGh5isMj2nsFWp1kRXjqmkUeMwRLtjrP2sMQAsweyekkEH4QDa3CeqXzSe",
  "key9": "4mca7hToxQyC89C59B5Und8BED94NeJ7XVS92NE7MRA9SuJNRBz1714g375HXXiJDSqnBNMpeq4kDK9F3G148CL2",
  "key10": "4yoFdbjtfenbUF4SvFqAsXuXi7VM5RFH1n74orJF6kfDCBchz8kbEdXHmEUNh1v7jozpsgAwCQB7hPxSgheY88Vo",
  "key11": "24v8bc5YCeKrm4XYbrwbKiDe6FDodH3z6g3qrKh4wLqee5rEvpBDsmmuPM5HcsXu972ecKHigc1uB7yqQst3amaA",
  "key12": "5GSM44Mvd6jF5SnmjXKvYNGK7une7z6u1ZHueYWtjD6NbYK5dKSezdcEgUtWvi1gcz7bBBFR7eZfETnuBjDjx4j6",
  "key13": "4dPoCCnTgjT3MLxszNKy38PFY9JDeuJWipZNbZu5H6VNMcVjSjyjaSVKR6H9qGT4QPGMKCrbrfHM5LZeX46ra17g",
  "key14": "2of7bwvG66f1ijNU5LnAa3RX1xhmPjarmFy2ArmVJ9vnSgDV1xFmLiUZSKAg313iHQ8zDr9jHQhKxjj1prHxULe5",
  "key15": "5x2X7uwtZb3CAGGvjtRDSt6QQdAFKUN48LAkuG6bJ4kAeEEct35VSWJgn5bHuUyHkSn1Gb9D3EFf96yaVtU9uiM5",
  "key16": "2ydEBDDKzVLCE7imtHoinxyAvZ3VnPFoeZzQfW1q6Km9d4qZtUjWtNbBRrHZCkdARjtRoKY87WW9Usrdxr7WXtCE",
  "key17": "4B1TBaB4ZH6Y29D5MnUL9YA2odcYhQFiJ3JYLV12Jzv4BazZ7MdE72sk71GQArBhJ75YfHqD9w9szNAz6S5c3rTM",
  "key18": "MDtb5t7G5FsnUfYuP9giBvVRiNQbVdQ5kbQsTj4FBKvCbhDJUjYfHvr12f8uvSdqFGboUu7AXFha9qtynAxWcwR",
  "key19": "PL1ngtL9r4Za4mT2t1c3Pbh5HwxvRw4nntsVBJ9Fx3phyRUDduc1Kmwp16cEpaeXi6WXJeopjE9Umz9WiwbiGz2",
  "key20": "jWRG9QMCezHbf3ok1GPAuByxRizx2kZ3Z8zTWX9ZrTMB5boGfT5znGnhaeUUL2B6y5dn2Gd5UJH6RviDj2NdJf4",
  "key21": "3LnteKpdmYNuPLmPUrvYz4KGLSBKVLib7MaZfz9C5WBBR5PcnBm3fdE2JW2v3R5yqGiZKXUUSjjDrBdhFHDK8czd",
  "key22": "4q2f1JEymfSCWN2uDof5psZKiEHwF1hza9NTNi7U8PxZPzmPJpT7sJ6jNJqGgRfdt3akyFLVr9h6rpPEnUxppjiQ",
  "key23": "4JY32rgzuH4jyHkWPwHkWuxQAVJBuMdTo9m5xoG9YvvxRSvbQr8i7GNdD7pX2SbVY1cnx27e1Xr8CbU9oGTUrGtL",
  "key24": "3xeoEPBTgoKXiWNeKFHnXNNrH2LF5nMiTPrsMFKBda4yFi7VNxYRunEyNSvXoyTzMnnJFwbN81R8Ueug9YTvgooY",
  "key25": "41rFQGyavC6QzM33YfDDr5ACYb5fmz1dCWLfAw8rZd5pbQnt2kaXAsQfQjEXij4LKNYWY8bs5W8bHzT8itkWhBeu",
  "key26": "bqxJ8jLXzaejUqvBRvuMrf9Xm9ERmJ9zWECm7WSBsWNDwizuojPgq45STsQ1QAkoV38J35XzpHRTwmE4Vb2bSuo",
  "key27": "5wsmZdHnWAJQN6fjgTWBqfJqj1yB86db6p9WcB5CY3wbCPyCPLQu4Ey7TH1Ea2wcHPPkU6qB7CABs2DQjDSG8rE5",
  "key28": "4S4qYdHpRzZBCBvPGBRvXKG4F6RjCqeFnpJoLkgpKUaB3DFgs3eEXjcxfVzcvPS6pL7ki8hptvJ8U7QWz9tWtGYG",
  "key29": "2tsGGnKmXpQyJLZ3JtcJjDqxLWtrZ8ZZsetFrMkpJ49ZG9337DxCebiWcDg3AhNgSPZ7ZeTXBVmYrF2AicNqwSoL",
  "key30": "52kHC81HAFuoSrsd8mTdxYJTYSZjiiUJovGTy3q3Yg7PjanHtzwYgL9p72ef7hD4N1ZQ27B3PioKQsRkLNTonC5t",
  "key31": "23Z9T4ekrzgovqjaxrZNqogdeV1tVnTks7z9hYyTEEFQwhL3iZA4bcXJ9v7CLzgd24tqKu7eFGmVZfxvdbiGc9PX",
  "key32": "3zNgpM5DEVHFswhCutqjk2gQQeGY1yM9T1FreJgMLi4TWxDjc6eBpC7Sk7AEzSTj5jsiKYFV94BtyHvBEgVsZQod",
  "key33": "2Yo3yuB2gsPWcMEwqDSYsQ4zzn2BKR1UfWXiamF5abVvQyUB6wJxPp8wWJyMAaHDa4HeLaGDJQuEWHinTzgMja4y",
  "key34": "2LMTLmGJZR2jorG6rHBHKq9vPLPhcNcnVdqhB1G5obbmvK8ffPo6WrV8EcX4AvEYHQ6Fg7sbVND89Qh5atEozNuU",
  "key35": "S2xwMAMx1d2viVwr9rDTTaY7mbWEbXiXXb3hdGRkBkE8idbjvZwCkAtKAbKp2em3PNGPV99n8p7qwU79uAjYzRi",
  "key36": "sMJzk6tvzFuzR3EqJiZ5rsYWo33CpfiKyDPiN9CmHRR9RmG2tYukSKL64pawyx4TiEyebQEs659ewbsZPPndmSP",
  "key37": "3qnpPNKqyawUpjm9R5EuRE5fewiFLQ6JR5jpxG7K71kdFhb6QpwDztGDMSyXmYSYAzmpDD7wt9i9SbjVkLzhcigH",
  "key38": "5UArkMU7PMDqLA1LbxF2GfVuYHo6tgdKcBitBQR4cXjL8A78y9A3QKMz4pyaPEzQ8UTZgjKSehGuy9xre8b7UEvD",
  "key39": "5RFXWT4vCn1fCvt1d6fMqWAtUrmZRKYN2wJ4tndjfcq9D2nuQfcaNg7bYX6FVPJ5rRko85WLykZrPKYv68bhhsZf",
  "key40": "3dZSndXZLUqpv8RSD4wDYjr1nB3vEDgNHZ1p5r4qjpoAKmz4fFcqpVQ8TShbjGcATNhZYMpGTECE1KXYE8xS953a",
  "key41": "2enzVDEFAFpDuSXRjAV9SAV3tq2JKhEhAZnFz7EujdDCreKPpC3KkKqNx3JwowJGF9dabHJziTUjLqxRFTvTxAbg",
  "key42": "3yDo5BqCGzQhYkkMX5RYjyjs2RyGwKhKxM1APZkgvGGyHFA9Sy7Bdn1n7L31yuxxyvSyK4sGhEFzFKtqsxheFCMX",
  "key43": "4Wu6ELix3nL4dMa3gLcipWoqD6bHpvBfKRT3xujwf21BDjsbBej3Y9egNpVP9qu5x2WmtGg7Wcc2Jcp9e9fsbShB",
  "key44": "4T7uLYiA4RRzmMJzRtmUAU2GV4jx5jmJBgDwpj5ZMBHP6PBDWFsUMpymNJcw28F9db8p95gZXCWeKMaLDYqBGyFY",
  "key45": "33o4iFf5WPsVPbwRDTZMbMmrSeSS2Bih3SP9CB6bu4NEktRLDBnCiHdfW8AsR5dFdfyL5kL66KA3oRriPK1URPYf",
  "key46": "44nWHgBpvax5muxQJEquEdX2gN7HEEBRYgAUYdxhGkDKS6huTExoo4i7wER4CNMaU4hx9M2aBQXUCEzcVAGJQHae"
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
