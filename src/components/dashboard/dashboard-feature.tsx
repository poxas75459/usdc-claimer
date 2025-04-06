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
    "4tYiurLvpsLvQCG7p2VBZfP8wvtY1kbMHezJXfcCf2dRRTPJuBpnzwWUymZdqJQmnsQvHCxxqJAk553S4f47pqb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKUR6kHhWskd31zuCqnXxrtPMpx432c1AdqaG1DNeccw5PgpQXS5YveQgqWjqz969Z6ihrFN3yRSNDwvrNwJUiM",
  "key1": "3iZ5Tazd4GEmxrAJ2eBTYHoYg6Lmj8B1ii9vPLbfzVGCJRWpVh1v1m2qpioSNQh2ytBntj8wZGEQ3Zcd2JdERUPp",
  "key2": "5tgzFeRWPvydQ9s7gWZGfPEr9FVLxWnUhMc9T3fB5EUURVG5SqP2hFGteyuu8WihRetH1qK3HqQ5ARij3xzvMiNY",
  "key3": "4H6mnTbFQYfTuCeT25k5YpqSusG79P354LYarMNQVrRotsYL6VhtsQXdSYJsSxgNQixD8V9pUN9H6q6CB6tT5uNm",
  "key4": "489MKqCENjY8gfsMSA7yF1ZNkhb4oHftXZ4dVCRn9cB8DFERY4e2rL4ASBu3Jknu9cfv8i5wH4ncUeUBpmaZemud",
  "key5": "6GQatGvLfgyGJoWfx59x1bnyeYYCwqCgeBsHYPeTLxp8jawwzhKFKhny99QikpeuMMosULtqCoFdQTAkPhndrgy",
  "key6": "3K8nufQgagfQAfCVmeQ2am3n4KwTe9RRU8GTrRwRUjxHibEf1ihAzscAUqDh7kkYtSGkcbZGKU1WWJeCNKv5g13d",
  "key7": "2Pt9BeD2d15iCuwSQWVhxu9Ss8FkLFb4iHCab7wh1TYx5hkAgF8348V2aoN9Kz1QrKz6fPRJghbRjxtAFDuLPpzJ",
  "key8": "2KVj4n3hNStUAfJ3QFfZy9ortdv7oRYtSZZSFqvV33idg2ZWS63FGMMqpLKE4L7h4dRqHpzAM9HHyyyHxwhuCV7y",
  "key9": "3NXHkhbFYAP95X3YfcDR3VE9YnC2W91eECZpUsaiN7skq3gU87YGNsg1KJvCgw3FKn2e9J2ZVzZ669o5x7XvckLW",
  "key10": "4KugYocZRs49fd9CqfFdGdwzczC2XF1azSwawYGL7oRa3zqfC1DKbeod7omgvGsXAJCuBnY5QgQQ5p1HW4TEeCFw",
  "key11": "3rbqfGgQi3essePRqy2seBdJVRDJHLmvUSUqcUh95CGct8yVNyZ3A1nCFS2qVMC1pAD8va21cBFonMcq4CQQGXyk",
  "key12": "4VHLZaZEukuUk3v3tJHiNzx5kaMaMa7WBFDscmFnXU1QrXoNLYv4B4gytUiicEPijDeyaGYibuX5pzW9E9tngQmm",
  "key13": "491V44mymYEKarVaSXYzc2vCtF5GhH2jqETjgjvxumuBUTp5cFPbc1fGVxnUfEzGrh9M35QswRkonnYfxujguaM",
  "key14": "2yD3fTZnHp52wksZSs48FdnHnv8MUk2T21we4nph68zSoTKbpw86NBNCraKSLVhHFPKCaYqyHTo26SbffrvKrDn8",
  "key15": "4qku8GpXXoCSeVdgQXXSbsx8j3cZn7YCJy1cx91nadGhvqr481SQ25uFYBpRWwChasx7JCmpH2mwHY8YWEGkFmyq",
  "key16": "KZctFMV4a9ixATYZ2LYtCPF5xkSVq4VFcUBb21D2oQChdwpM9iZmNNMJqEiQKc5h1DkXdusA3qrNtFNEVdVLHcE",
  "key17": "61nJXyWad3kbBNMyY233cZ4h4Hzv84t63LTrH2UNBDdDMPLo9G5pWsWUq7ZLfbAUPWpyTfsPQX8RWtdyZYwfm5R1",
  "key18": "9qNodvgn85iDaS9QqAoen39c5JR7U2MmQE75TNzK2GQvbaY2VZyMbhpeyaeTaxjTzvTNnRWczBwnKQCibV1PrNy",
  "key19": "24deBaV7fTtGKz64pLueLPvYaAUYjdu9nYJKnQWYE3WNgLjR1fkAbVKQgBn7Bobrjov2jRJk1pAzMRRXBvs6eB7u",
  "key20": "2HndnnXuNsB7FXCba97fk8s9s3edTQFGXx3YYSwv92GMMet9dqCpH4SPAReKnM2LjymWzjuWmkmS4PjJoXjgN12n",
  "key21": "46cpYqFZoqsD7ywwGALEkUJi4s8x81pmS3hPNfm3pofJUeJypqTErq8JYjRKsv1UFFDADHMHWRkyuFt2xGiq7c12",
  "key22": "31nQ9jBbETVehpjuTUsV1F4EiqhsuGeg7NuBiXoQL8fYaTVRp7NcaqpYUZtopkEXwqFrVH7YYpAMi7gw5Vcmxe3K",
  "key23": "5wrx8EVT69MQJ1jveXuCxMFxcmea94DkHUByFCkNtVcVuviekxQEMZU6vPPPhHDzsmuBfNwMKZga71pVvhwoKJAM",
  "key24": "2LAz4KKtrPiHfEJ45zgq6K726Xi9DcA7iEj7ACQFn3KahRRp7ZTbxmvoBMXaoTn7fBrKxYeoJbZN4vmmVEqgihnP",
  "key25": "634PmsifHhhQQnhkqLmPhyNnni2K1CNYSmRmU7XFBGMRX9iF47DPnB47jpBs9uv3jTyNr6i82CBzUcGbENKT2iv2",
  "key26": "4Key3vwHmbkEpMZvVLFQMNejokVRYXZLfr6maqo9cc9UT8gcdateRvhzC7AzcrHa7tz4cJR1j3GNHzUaTBhqGtfy",
  "key27": "5v1m91GubU4vhz851HingpPRQrX6bAz87US5Yaw6Ln5ecarbsZoGegMV7Cm5zZ531282kgpL4in6mBa9rLFWodMd",
  "key28": "JWFLkMozMaTGvFnjroJFWRGpsbhCgmLcDJU184js7yv4vtMXmfM5NrteKgookDKwyGF1KoC8ZYW7grJYzAxr3qd",
  "key29": "4r1VtVRFNVZ5aArDVFqCQrDrpUzpAJvqszvA6LqKNDCney9f7Yg3T65czzc3vDX6vfKFvq8jZzTMgxGcyw5EBHye",
  "key30": "GwyN5snH28hdh7w8PGe7Gm9Nxf3zAJKmwpwJwKBrepuP5rCHpFSFsrUXRpfj7uwoCCLpDSNDZ4Gb8reCiBjj4Jw",
  "key31": "3gtMhmvacE3KeYfqHFBbUBeyuTCrQAz8T31U9JX3kzYZhiHjK7qFzvhTcFHGYSPh5VLbf7R6DEK8u5GRhkKg3m8M",
  "key32": "5FrnxMft9YgEa8sZM5XdF8uFp8JHBS2wRfQcnbQrgB4MJs1tfn5XpvxJxafNmFi1eKF9UaCddCDKGLR2FeSXzsmD",
  "key33": "48QPY8p6M3SGmyx92YFphp9x5GQ5fLckh2CK7biZjARu8wVAC2bSnxMuhFHsxzK3qneB5r2vMJKK3zjoPeedzp2q"
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
