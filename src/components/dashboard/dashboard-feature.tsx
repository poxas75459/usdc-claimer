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
    "4AQF1urNKJn2y3XuAnfNgMkgKLwwFa18jZXNmkb8yuLAkNf7dtPRiHuAADkrkWz9BXZ4EhEE1jLSVmapaBgSdbLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHDV2S1trQdavg527Bw7tAoSxm11pKxyNDsJKmri9rf3CwKRkbA6qGtzEdzrrPipMWvkDgKLNcaLEBvJS8gK5EK",
  "key1": "zzxvnbV4uyWFcUQSpvtunCivVcd1Dg4rZM8JSKYJDkYxTcxiA6nipETT3KnDWzFnxHbgdjoyjRuCiF9DjYPRFWA",
  "key2": "2YSLzShGjBG6W9zh4WLuxmaeUCUP2KhLBHPKdqXUk3DopJNfTPH4WWNnwmxhHnEzkn7yMhHgBXc4hvYK5JBgkQcr",
  "key3": "66JyVSjCD5sPDaqsRbwSXKABki52xhFD3rS6Hx5PgJh47c4oUyJR5w3oVBgPGxuWbksnt3ivYnzytCSN8ZUQU2MZ",
  "key4": "4VJTgyyHhw9UNfMMALmvPMv7UMcNU5n1dVhQe2wEQgunUKRv9LzMTmMbiAP137Py1eHs3oL1QMiBFEjRuiyqv4r2",
  "key5": "NVfpXx7hgpUHM1DCtQzMFUCnfeENtonnx1qN5n2tnCuhn7jB9SeoxZMfaD1CufoCTZmEUVudwsQksmqixba4eYu",
  "key6": "sdGNTumr3CMFu3zaZ2TJZGKQHTmBZwDh7sBhNT9PMyXpWdddXgPQiwMkEwrEg9VbvaPGW27j38MNsT1j7c7DSRC",
  "key7": "TYZrrR1Q3kzwRVE317V2gKwMEcM8gyWFJ2EcbbAmBKSNA1QzoyuUj3aefvTGdzGCy59fyjPN5efRR4e2cgu4dSB",
  "key8": "5fWCPhu4gs5jq1AQ8vNFAWUSvfTjbxiGWCQ9Y3mXeWBf4EfmqoGM1yKEAUGnaD5jGUKMbqV8YSkLXWfY1gDDb9xg",
  "key9": "3GepnhfvTyHB2oQ8Q7QexUhZyawrjhNX5zFLjVBabieMXZwNAz4ehMgZkyZgPDnVqpLdxQbu2PZeQ5KaUacoZkp5",
  "key10": "5eoXt1DWzJdmeKrBP4RPR5WtMEDMeasbUiqXExHtd6wjENrWFAH6122RwPjmTK9qnrHidJZLZ2oFwggo5SgzbgJm",
  "key11": "3UjKE8zVGq6beQYCK7FCTSribQKDroEdDhBRReYKcAkDPJAJ1zfsGKf6udGB24wUFE5KTDqzDJYus3zoVJfKEbPZ",
  "key12": "39Z63aeBd6QfTWzq4DtwZ8jkjFRcnVh9W9qsroN5XUTTWwmvEDE8M2stUqoGYEUKkwesAEqP6eB726EWe511MaXs",
  "key13": "5Ayfx6b672ukxchnLXxoDGgLjq3Uz6LKupHjb6ZgP2cypXTy9HkTif5ioQrQBYHC5UT3R2ygt6zEazFJ7zygqFAz",
  "key14": "5TZfZQva1jYLq6TZhaEjYWsSZcWhKMtATZ7zV1jp6G3ozpA3HDRufNiTZr4hfB1uSf862S4hC1X2641CgsKaneCK",
  "key15": "4bg6ctn9cpJPe4szvH6nEUdtCGazsGnxYxt4neNKrgo2RzvKGaXuFEnCmPPhvm6RCsowFH5cQFz4Lnp1oxMVqrTL",
  "key16": "4X11nTGzwGAGZaDBYv8wysJejfjdbiatgTEvb4gpBTzSF948v73Ga67niiWfUksNczxMb3pvah1aY6zEdWmrVYD2",
  "key17": "G6WYU7rT6Gn8ECzUf2hTRWSngteS116D9zMtii7XrCpwWauQhzL7yHXp9BrcQreP5L8uqsN6N5AnVCt9R9f5gQ6",
  "key18": "3C5Pbftk43f7cwBFk163UtqTSfmeeCSv591RTaTc3ULtQdZcBm4ZX2i3eUk3hRRpBf5gLh6T2cpSZXaQnCKq8FCN",
  "key19": "5RbU42GmhBGYCCBryoB3TeXYf25XBLfe5fwgtBHbyfhgz8WfWnB8vWw9LyNqVNdULxW2JUKNo7WSu2CeGoF7cGbF",
  "key20": "SmPLozmeux9JEWxHnWRL9QgTYqGTK53rfYDbc2CRyGViRiM5Nd3wPjxGgiFeGS7CkEkFMBVtPNCyW541s2ZueAV",
  "key21": "3zXq7BY9WHGvaYt2ALnHikuXaHQkPZWaNfYxKTvj6E73uz3BDDJd7SB7crCXsdtppGngZRXhnMGvWDa6bMSQgfCB",
  "key22": "3ZzzvdBDQDa3LKHYFdoGm2EAmp93MEZeU7hoEPRZaMbXjQ1noo6FeWZarQsMZ9rDdQVeVXJVAM1MgqPuYJuH1eUv",
  "key23": "48r6TGh9GfkrBZtWyzCz2SwWVe4GUxXPowmyrVjoNGcHTUkSWbJFhxf7mrSKr9byrPNfCQ37vSEp6RjB2owh9ULY",
  "key24": "5BN2CxJ5CF3p7i8WC7owL9ENcNtocVeZbd3WfSZ72e8WLJMzdzMj7aAcWGJvAEVWiw3zH6pCR5KTGfFUmnhDYJxe",
  "key25": "4qY4gKDonMYjGZ4YAeCCey2zwc3rvsrwaKE5zcVhqAqgGwRTvaqvrGsWUWfTEH4JiLN99sNHQXgDpirDuLa2wCdU",
  "key26": "5jBUCd27UuFCgHCnBxNbp1tAythrWwFY9CZzkD4MFoT6wFtRS5is4EHJ8waNWohhCyWdJHC8EdLrjDGjaYy3h1mT",
  "key27": "3Avvb7WDZ7s7U1ZD4yPSCA6g9WwZHUTvpCrJBNxF6nX6v3EtJtAnpAFA8LbmAxgZe37WsBef6mZxRcMVLHrZ9mTk",
  "key28": "3npLUUhPkZEt6Hivj5QM1tE1wfvxZsixpkiuTkcPpyPZAxtfpL9iY5QNNfzLw4WCJNHbuCSyVC2W5fTjrdQx5hX3",
  "key29": "5a3cbXZRy8J4jB7SHhqVZGd1kwVn4L2ffjurwsEV5WwcHsAA1iNVFCAmQ4yFdNvEvPJFxqDWPCL75GLeHZ27vYsq",
  "key30": "2EsTztSSyn3RCMZHdTFh4ZfXpyAFNQ3YViGyv5wwJtdWBytY5Nzketqbt2vBuzK1WkQhebKhNzGz9txwvpbvBVtL",
  "key31": "A9WAczuaQonLQJHhN1z6KPaM78Znkp1a3RpdANbjbxBxxS5JYU1YsCxcwDkqaNNfEjxTnhpfPzJZtdDWFVa42cR",
  "key32": "3fh7WS2pNCgGAxq3DZcB9Wx8aXd2Bttnh86X7pnwdWGSZ2Wmvegk6uDwRFEjAjfzeVmkmUJKUgGDT7oKH6Dzemi2",
  "key33": "51xnZz32QoXDhEZDWXX4XMiUE26oeSDMGN7dsqxb9Sy5JQBazkYkM5c8xDvKHYLpHJJ7dVXMNP2FYGzMTpJeyJ3T",
  "key34": "281buNBtNpJYJVKM24QKTGDxycmUbjXwLTXh8nB7LA8DuPuD3st6cJjqrtDHzcFDHXSvcoAeUFifvWxuzP82WB1M",
  "key35": "gYP4FFwTTdGWGPynvyNaHVtzTY59LCYs3XqrmG38vyCPWiZ8WwkQkahJo5YztHM4SM4kYTCAbTkZaWE1GdpaZdj",
  "key36": "uK38QyTYiwQGDdXgg4c7tgi4eEea2d9cNxyE7AdumFw31jGKmxZxTVLVCmz9mcaRyMWaDDUsAahy2AHhWRUvytv",
  "key37": "gNvQiSjTNkSqcVJWBbeSq5ZqLQ2H3iy4zKSChEU1ehXGcotuq9Fh15eGp785GF1K91ywJ25gcLja58tc5zYa5tS",
  "key38": "3pyQ9WK3tr6dGgaF3q8KGDFejRjCowLPWBBqgGmF2qRW61w5DCgogCQBStqJPV78cNHmoxk719Ph7x1QpeRthQju",
  "key39": "2NXa6HejmHYjPTV3yZ8J2fZsLbXjmpYKmRXhnARcRspXsVDio5u5DCpD53JGqSQdoGxJXoikDANsVpnLpNbSo2LV",
  "key40": "4GNtoVmgCYJKrw3TZvHVCGnfMvRsdpE3APN5PnSvD7PETCBrNHCqGCMd8DkqgGfpjMVsjGnboaceVdvdpdNAKpjK",
  "key41": "2aBbyjYU6ELiWHU8i9DmNMqa73cVJqTEJ3QGfW6JcvyZcaCkxeuPgArVVa8J2KZMq7wVsGZpggiSFg1jwfEFsfrz",
  "key42": "5aRs4xVBczBLQm9FimfmzXKncgfJQCWt2eji5gWEGUzHBqkQgbpLpSzcBNStADcvrJSzcF8KV1dapkKM77zdNBdT",
  "key43": "5achbzNwExA9CuRdcDsFpyLUcQwwQBYYdDvUyA7rzMmbgKv3JLybZbpxHD6FbjUtT3y5ynxxK4Cn1W9kYLjb4YH6",
  "key44": "3kCJ6CKKfFyKEBKwiTYCd9fjKkZ7Uuwe44SrWhdWwRvUDn82ymQuq3aUDFJ5NQa6k8YHUFLaT5kArevHH8DDRooa",
  "key45": "2UWnDtpJdYFYoUEuVd6Lz5tHcjcjGmFT6FrADEBZDt6WEqTRZo5Uaup9vcqcxeGgnxf7ffGBzCPwFYT9kAT8uz3C"
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
