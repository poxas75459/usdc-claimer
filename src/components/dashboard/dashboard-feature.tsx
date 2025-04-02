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
    "64L1sFwGModU7cjBNj3MFH4hN2wzRXHT2sMB2FFSQYDcUcWsThkK51VdhBnRbHxYu9GQBpLiRaf98rHRrpzY9koB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nga3cT4cU1tLrEd17EPBY2TrAykv7Sz1W7awbLn3edssehHCNBBfQ1vbuEf2JJaRxXg8VNp9n3JM9XTEbFba1Uq",
  "key1": "5EC8rggcqg1fsoPWaeaP7YvKnepCWdjqGvYtde5ziccYLV4zx3uyXdFCNhaoLziW5kEEVMeGqamcYkqncBvJ78Zp",
  "key2": "327jAZhX8KbsqUCLpNNdFa5dun4xHo1i1PexAuoHiXvWD9JWeMifFfwtzYTtp5bLXWHJQvpfkjV5HJi8Ub7AP9an",
  "key3": "4V9zApXQX93AhU5jZkibZs1okH5QPfEafxmF6N4kJbgZvVTfnRkx5oeTYv8SizD6M8hrjxkCoC28wipbqvPcvDu9",
  "key4": "48LGsu7HH6mdrCJPc9gszjcPtT58ZJeXb6eohxiBePFZNpqgWVRtQ8PgJ5KEr4c8LzEnWuWYrL8TKTX4qt3z5xcD",
  "key5": "4sJkV4HkqRZWJ4AUqFZzSQA1xQeqgpAfuSwdvf4cRGprzhiBZTBrvYTTLd6ZJYX18wwr6v5H9864uCqFuh1e9sBc",
  "key6": "2UVVtmFDEfdZDvvL5bxCwa8WyvV1j9kfmK7xqMZrr2hxAC5RZd6C7rUMPNEKy4Wv3fLFZjWpKW2z4qDQZKRCg2bL",
  "key7": "41UoHhJVZYuE7qbG4PrpEJBHnCfrXXGWExXWVsNtYWzZr8GLncAvC5LqND1UUj6H8aK9rzE6fJxgLV83D9WfDmL9",
  "key8": "2zc5dQVND6aMhiTZsLM5XvxGFm3ZEbkfftDMZ7R71xd7EhA4msNkLMG1XLGiNzK1JeoSZJ45C6YYeEBL8E6CP78h",
  "key9": "3ZwdLwPd4TCvi7ZS24gTt3ywnTaMEXQLSmFUU7DicTiQR9sGQF5Qy14VVWRFkhLg5TyYi8eTFuuEmym8MukDy5m4",
  "key10": "KfyVTD3vsowy4rWBzWwhNSCqyz81MkQ5XkG4rCBiQvnWYc4H7ophrcRUhTcD8GAkkaFhWHQmCfErbhWnhXHFK4e",
  "key11": "4ESjsoUWF9qYPXGTphTXH3DU7PFpMJh1dbr8LCQWGn3tauyPUaGbtFWknYFD1VVy1UNt7exrp9rcvrnzBtPb6Ht5",
  "key12": "26dVSvprg9vXz1wg99sE4Kozy9AkSTVEogV48PzyybtdNA367z4rstLdjbq4UPdaHa1mfD3GapbrubJnC4WzwMaV",
  "key13": "3cod87R2ZFFP8KMsG5K69GVzNCrMqvPS2ai4sRXQeQvz9evtSETHReoHMGSH4pPdx4e92jtfWYygZrQQ3yt29UB2",
  "key14": "2D2CXLoscEMrjT5rPY8fbCZpYxdeTRUzEHJ7pb2h97LZuGm6vbH11MTNwoPkQ8KNzmvEQ2LQbTkT9kSGAtHXtfzH",
  "key15": "ZtfNZc5265QXgTSxtbgRMgg94kKqGWfAy9zXpTLc2W3kbGb9HB1EVLanrPuvYfavnbQefWhagNFwQ8KqCuWZCZr",
  "key16": "5otKmcLtTAsxRyc1Cf7hZ24oiMWNEuLWmMXSKikzK91DYbaKsW4myAxUExNNsZhuDWYbbknjeJ7oqmjszhttxzqR",
  "key17": "2NpdvbMsVbJrMQdaYgPzJq6gqXSGR2Bmi9FaJyj6THGbYS9byxdtJPR8Ts5h7MsY1acDY7Ys2aB6Vmv4AQJA82PY",
  "key18": "3om9ZC5FXoA452VP4DSGrU1xaYFMuPiJSR3HatswWKCujbhjxmjiG6q9fPuSuxZNGDBpApAHnzcvopCvZGEyBxg6",
  "key19": "4g1xrGeXLAv1kfeGZYoxShj41K2bakEzhRGzcBddJf31J5bCCy2tRryzhgruksrxpu6oBgLM3MbCR2u8pZoRa7sq",
  "key20": "3cxhHDZNtYuauN9Fd2MwkcFQDsFjwpk1v8iPkFm24etqFdDZeozVdqyjGdr4YzVEHm2eRHGZJWZ3D3nwteQRk2V",
  "key21": "252MUcQ5vg5vjTimCp5GEDQnL2yTSHgn9dBzmdttwBbouZ1Q2HaYoxYk4t72QrCv4t9vQ6iBrNgMCWJPY4Ts5TRa",
  "key22": "3KS5d2bU28TVbKN14KJdiGcBkh37cjUpCbU3ZXUVUXTs4QqQ56m6DHytj5rrSHf3TUeDZ5cnQMt8X7VP9Dmfq2q8",
  "key23": "28yV2hGWB7ejeHAFQpW167gBHShdan4RB5W9z9rdLznC5hDwpC8LCCgCm6PQh4CB3C8Fos5zqc96VXtZPmfRkHb1",
  "key24": "2Bynmt8vicLD3zxbmuBZ9CUp1yDC1k7u6KoHAiGyPFH5RR4nG2X669orXU9BoFzj4zVMqigKQj2yPBHHf5KK7eGb",
  "key25": "4hZsJe6JpbDGCEPir56QEoaFEnB73oUKQtLt1xjKowj1mQSzeDx9TjSX4cW4MEECPknyUWy2AfmMKf7PZuxMYqqC",
  "key26": "Z9f6kGNVrn3f9DGgrmaFU7gHsTdfcVjrTGoSKqHqYswL6psgPTFqjNwyPVryZVXWm14C9qrPTE2qdZMB8XBbMD1",
  "key27": "Cses4C4ZEPujm5B1dE9nYAWqN987AoAGqTrGiWih4vXgFxs15ao28Zg2dQ9KQNbPPDe8hiDS9h71yDrPcsEhXTk",
  "key28": "5yQ27wMfDNNnGQGzecsN3DTZab2BrUYXTiH2EbpKUjSxLzeJtwDN1HqKiaLQN19d9RJEfzuPyey4A892aAzcRQeM",
  "key29": "jwm236cdZLoaqH47PCXbDt21PvzrftkJgzVWj1UJa56HUx8LzZW7PL1BeGPBpQYLB7f4yfFdk5bGAejKxVN94t3",
  "key30": "2q8vucdWbZKYvxrHDkZAzt1dWZUNJjBXkJNfhXyP4HYA8nP6Eadnc4EQa2SnexE2SA1bkYovAksz3ZDJJczfeLeG",
  "key31": "He59ssrP2Y6N2KTLvyKs3eFq8b7EfAGZ6g6efdwj2E6kFeVHq24e4NzA8VvpPcfJWFLYmMKXMkQeBWcgdBzC4Ln",
  "key32": "2rJZFe4ySmLN4D68vxrg26CK3Sz8cjD7KRjqMFtcewk5Q2LCc8NUB11vs4simUJ6pWzYbGvGzXJhC6fRoKXVXC4N",
  "key33": "5fG1nKm9RUy9UGNsmKZ9tQg8a28TJK1EjUQ8suWUNeFSs6psMz2a4o3TAnAT9Hsqy2mnJED8BKyHoBXLtdyuVmgr",
  "key34": "3nwsKaFUN3ixxrY8UJws5QN6ZDH2KCsz5a5HNFVboUhTvEuSunBR3apKHnbcfz1gySww3aLq4nnbqw68aVgzTeCd",
  "key35": "nLWbR6tdjJYhaGNrSfunpjhmwTnnAgQh2wHVEvmZGYdhfv2boiT2RYDvmzsGzMtNoxmUZf9uCnsZpC79TCFX1Lv",
  "key36": "22m7hYpmPj4GByTp8rY5QzMf1ZDSCUsdQMW6kjUzFDKYigYVVbKNjRkBnfALSsgR6sjN7AKvwUctiZcVYWt5P6qN",
  "key37": "B51L2AYqiXoH3BUqmxxePSyaEkTMLyBLcUKZW1J342uEU67uiWNo8HMBQM1iAXq6yBT36r2F6aWTGnPgq1oNjpY",
  "key38": "4QaKQkjckYUEwfzHyybSuhUir1bDApT1gH6rbboXk3gEmiPaCb4fGdngyBMZnqpnBbbPhZoaY5xNDpuyoyXxcoHG",
  "key39": "2vQ95TWTSgRf8gD3uq7dmD1o7iHBdcsjn7JJ9i8kVjjZ39MjnGS2dRd4fMuJuWu8j7gx98jNfYKwb4Ducrmr9e7b",
  "key40": "5kmey4KQcwkPVubVKgnZrmdFfkiRksE3pUzVEZA8dAATRBawzs1X3SgLrRzhZW1TjZ4bX3mCA3KQn7SFGqrG91eR",
  "key41": "5GiD2ftNXhraeu8DUJzZUTKGoeGfNpLrVcWpFDaV4wrT9ZTB2gXYFVg2QM89gmY5S52jXKFQxqUjYfBvbqeyXEjk"
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
