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
    "4xfpPQCPTyZ84vZUQN2JPptdPvdiBaBcK3qg9u5DpjGRa9sk8EkrbGQTtdagVEpuq5VWxVxhLeR4AQHoUpnzamZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPii6D8CqBEk7RrFXvzR13X6mk5gxyQ1YXLVpKT3ZJqxc5yYDpcSeEUzAP4ddtF1BJu4jHC77vzZguPVnmUeZhZ",
  "key1": "2D4dv79fzgm98bn51MgZScRxJ55y5hWuAFMhzhDiCFDqas2ySXQnQk6rzyWVfSveyHdDFqm9sMnpLLSMGoyx6iTs",
  "key2": "5CijQ1mb37psVoY3HKPPstmnCqUZubssap5ijeJwheoJw9tDBFTQDX186J6zL5tp5CwxQ5zZrQMvDKkH78SL3YZF",
  "key3": "5W2dXuViLB6Bscyc8QDjdQ86kuJBQSF7x8bD1y6677VLqGMW3fGcYU9YHP7fSJspsGzc2GVGctfbLbSDfwtd5ayE",
  "key4": "5sFz376KM5F3adgBE8cQv7edieqbdDA7cBsF14Ec7AReRNtJj4oc32T4jx9pXg8iHLdtVQrCyAqFe6z7oqcgeGi8",
  "key5": "3CGyUqdeT2wZmVbiT8sUDmGx8JjhuVCm7F8vfaXvYwphMunTJuKVbcmXVJQ2BY8VBySJzwELqXyb4aSEh1izENhX",
  "key6": "52KGF8j5wvoLRRMrJ3hK4RWCbw8bVcpR6DigQ9y9Ck7EKsZbih5CxxaMjcmyDjKsL6AD5wVuqdM2Qfx66MLRcXbs",
  "key7": "5GfYMi8XcmuJMR4rUNNM3ffuyNspgMvpujeH75Ut5BFmWDxKeKQZXrdFtoHBMr2hUbK681HMz1F7mTbCxjo5xe3w",
  "key8": "28KEM25fTmTKWwu3rT1h5SydvX4564dosXT9caDcpv7o61CnzwUHJYXD1iqhfCPbsTjW5vwDxDFKatuakiuBAR9B",
  "key9": "4gKF861ukhKHsBca4rBZLoYohMdYUpu6qWGogRkkKsUYxRwg2MPvXN4n11SmH6z3ePGHUiMwPevEF4w5pjaBYAwy",
  "key10": "4Yygarkh9SWrUyBftzv2rHjC2eJ6dLeocQXZCUbD49uh6hixuYPSxVgsZLcMYcBfuER9seRmaYCj7wxMt3HJCcBc",
  "key11": "4UR8kkjJst3v2LVUGJHUE1E6zcdukVx1nNEdjkvz5p751xJFAv8KF1GSgrDnnkncESP7wr6Z6Y1DfJwduw9oHNdV",
  "key12": "2XWmTEovuymEC78wqdLSzDhQ2jhJerY7x6vudAUQm3tWJcLUmUhwYR7M9T14M73nWeQSwsjE89gYHPoHrXAMDuQZ",
  "key13": "5yTiUv9Sp9ybreJE9J3AdBgZqmbPCS4g7XhWJ6b1sZCvRrxRTFwaptMwW6chDfKKwmUvdzZJWH6s7mNFvLTwGK31",
  "key14": "2BQ8gmVqwwPpkEnCW1hQHVVxr6CqoS9Yb9ZmK2RCdd8TcSRQBt2XKGaaqa7p7ERjzJBRbXQNcakezFXVpSzd4DiW",
  "key15": "2eJKF2mjT4k49hT7Q8kRhpDcSEYWbRwLcQpkJX4Jw5r3uPomRskfWybJW2bX5eTieqto1zGueexvQHmjz3yqhQJZ",
  "key16": "ZPd9ATx5s4iwDXVieTqMjuvCuT762kQ3QNfBo3ZeGHTnn3j22v99o3ET4Zft17r9td4VJCL9MoqWybEMoSeSN8t",
  "key17": "NNSwbNrNtWTjU37it9xyP56VqWeNBHV5FpSLExurr87bpxP3DrUYHXYnXu6tVnSqazvMQrFsq2RFLFZ5Cu35wpG",
  "key18": "32ew6QVT2t7Ffd4ToWhJk2aYq43yBw3VNT8droDa4ZvguCG7THnqJqEuUJQveLirAjP8B8fYCyeMUBRYoe3gwhFa",
  "key19": "4NiSJyiSr6axwyRFEnzuiDx4CZWpM9MeGcyDwxF9pS2sYUHfDjHeiA9SesJsA1Abi8N7Z4t9CTgBVDeesE4kRia6",
  "key20": "2kU8Fdqxk68FP5UoQXfu88TFJoJwBtgRT25ELXXb5dsq3yMEB89ds3LsMNbDTckWCXs17Bg89siuiDYQFZBXJWZg",
  "key21": "A8EybCZqcntGzsPmmm1VqZsvBqZGzougjh1dPhcPsrW6YWed68ym6ko3YDMoXjUujUvAwB4h8LL6YRgWMFit32x",
  "key22": "2Tg57ZuR2MKfb4xEAjhzHJmd4mp3e1m1esQNr7NesNc97h4RgVovLHExJY6eeBmu5J2coUqG4hw4xNmxLyUEDwBM",
  "key23": "f53cDZBaFarRgFNwktEticLjuiih5xVzoRSCYatvPxMsYu6MPM9MNCE8K3AEsRbbvjegTZMYJmDeFYs6N7SPMgV",
  "key24": "2hd79o2UwfNnBsp92eqZRHPngpMzFqfqN3oD6ckzXa96mYrYf4ZFh4ZhQkbpyWrzNGDbuwu626K6KuxX1XwWTqRU",
  "key25": "5JxKEuttKzZ26vUpfyqutR9dRHfNqCK4CnzsGJtYuoWH5ak4nv9v56NGsWqYh4cQW7GyMS3s3rwMVovHtC2CYuWB",
  "key26": "5vtQbhFke9NqqiQFabG73GPW8AteKBeRC9ZKcJAJdYLM7QZLmeDxBXE7Urkv9US63M5gLkm21hsJmQQYAbkndDKi",
  "key27": "5u84ctd9KMudJsLzVVBcA1ZdTJPKAQJHV98mzFCUJR1osE1m2v8ch1JTEjDtZaPNk5nVecKhSfemCGm9zGjcqHX4",
  "key28": "3s2vM2T3UScWMzL7mudbQXa6D8GULsrKefWSfiqusHSkXvmW6xWRFv5XnHCPKPYwJ851wbTDLQGNRt4xjvvquJti",
  "key29": "58nTkPzjoptjBHPD57PjisoPge2oNCL2KfXbqLmP6Wmmq5fJFbCd6wM8upkfYyVrMVhWv1HyeNi4KCq7rPK2uCBx",
  "key30": "5xUwGYLMtw6QaaGdKTt9YjpKaqNQtL6qvrYNubhpmVnCGC5ZkE2zDLWjhhoyBkZVoYpQ3aG6ps4E1C7HAC1TQjnu",
  "key31": "4SBF5ExyMfzyL8yscRdcJgPuKqanYSdDEEqbaqZdbsemdf8oE4DrG9Jpt5wuuimSwRo7Y8uiPK3xiRTARuJmHAhT",
  "key32": "2B2fwZ5vsTMTbdgimQrAsxSVaoaZAa7DurwJCo3eu7otENDHmRsazg6uzNkpKs7boWoDEJnurWwF8gGXtYgQsfFg",
  "key33": "43bHkxjJg9AVkq57PG9HaUwrrSKu41M4dwyurBNnPphxbjJvY4AMkeHn6M4WnFwGSrHvnx21yXgJruYJrfD3ttas",
  "key34": "4auAfae7Kxe1DbdELzm1WivcAQUZ9CaaqSSujxgGoUZA157fGHe8M2zPzyKeWk9rxfLBVY2uC9gkx5oZWToQU1Qk",
  "key35": "2gPAJ6cHWbyUsvQysGDJqyVtmVLuNEJc9oy4cLexyoTEptbam3h8u6TT7Loj8YNkY1H2fh1PrrMxP4iHmMh9ebic",
  "key36": "2DLX8TLAdWKhb9LuTuBaRwi55nYKsHbc6s3w85BS53sojy9Dz8K65H3yngLdgwz4TnEpcUg9EUit1jLRyxfSxyM5",
  "key37": "5D5SbTpQkgtZqnEXown1Aw9BtL1u2dwrGEwSGrMc7cRzDeZmLDLtSDfkwr3YrLVuHhQ4NwL2We8vrMCdDvFKu7Pe",
  "key38": "4d4NYdfuwRzGMoYJKXmMkpFDvyqYrQu2eNaeESbhwtXbBC3ZbAqjjWRT8oCLXKYpibQgJRm3nndzGyB2W9qLE5gV",
  "key39": "5SrttavtUjiMZBsrRcrAyXFg2hfxNqPrhRSkJBpuRGgh6HQojqgH9GcrgMMJEdcbqoEMJ6yLrRskwyCxNJBwB2eE"
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
