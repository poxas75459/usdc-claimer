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
    "63LjiHnKsYdwKLEvBiRVYBPtQukxZEuQ1Hk7hRPGyEhfAFmimtXrr5uWTUrKtE4G3kNBrkhwkhFgKart4cSVcEe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2cQnQLCY17yn89a5rcee2DUsM2KsfEdQDT6QA6dN6bZBs9eMfqBhmy7iU4PdtptV27avYAPqP4VYgTeFTX1EXP",
  "key1": "2M8gjUMnbPCmyiJ1JQzfDTD4n9kNhro8G2QeL4SWne4Qvr2aTrc5EbWoMumdZmbkL1TZmGGqjQQCQJgnngVujubj",
  "key2": "22qDF8jUcyuPgG5uu6RgAhwU94SQcaX5YC3Jxn3ybGZ1XxDTezuuUxFUbyDGaRukvrNjLeDPeRaFy1Z4j5nuuRhj",
  "key3": "5CNxUULmbiYPEJEoKfrZBKc9qESXxB2EH4M1D9K8DXy1N2YtmnpTcvLpDxhNNPwZ4XUoW6c5BEJaZd2AuS4gtUXi",
  "key4": "vVwFzKS9aj3Xp1LHiRo4JqjvGxiGagSscFByenxGBwzbipZ33sSrujeVUiakW3xDfEYPyK8hoCiNsxmcDejDqQL",
  "key5": "62vTnKfonmKd8iytbdaDYftiBBzzSjQLvtqQHKFixkVRgE4jHUTUYfmmxpJKPLjDgkp7eoE7gj62AqBnZ4o94TaW",
  "key6": "4Hs63mWs6ye34WmJdERbNAkjku1ak57EveoUGUu4ocMgZV29Uo24s8tPU4wikAYWZehJvxJfctiWiwLaoAYGAk1V",
  "key7": "4x1UZe865Tn5rux1En9MyYkgiGXdDSnSNsBVnNhmbfDWY1Bvzqok2ah8yJ69wYagQ4tTbe3PktvAujfy95kvm1kV",
  "key8": "5CHVDjchRpZYwmsCHnPZEoF5Wt3G8KQdcMDbeVLp2Ztc1HmQLDkv3trqBbnkXEHNM857ZtJHSCkxDKP35NNcE5hF",
  "key9": "5o7oRKXVhmR4uaQqivj2SG825SGrAcY1rG4huJLvCGqH2cXFdknZtjfLGjVzcGh1VajKutvrxd76RQuDpSCcf7Nq",
  "key10": "5X3ies8kLVq4jXoUufxLkEX8w2NcCEHVs3oUzxwANm2r1zncDBQor4UxLnrEeNEnfrHUF9h3FtbAYRBqx7atub59",
  "key11": "SrA1Zt6ZByCuaT9sggR3HkTz6qJQyu69s6fGgJwAZQkc3CCSq3JY23vojWNAFCTg5E4WoJf8BRJPiVBxP4E4oLa",
  "key12": "2e2XJa7ok61ahsHFfVWGbJDey6vqtgKoaQQMWy7jLhZtPwf6D3UZSBAmJv5Lpk36ZgX2hJiRMhdiswS5dUyPKpR7",
  "key13": "3Nw6uJ82yPmWX1sxZ5pDq5urEr4rGiwq85xzprMqrDbKdqqhUYcxecyFD5YmkM4g5gMG3wUcCMikNXxeYd6yuxKB",
  "key14": "2djo5Xu2g88zDcNe7b8Kuk1czhDgpVcmk3zS1bVeY3cCj2buaZ9wq7KNWnQYkt4ybsL7jj7A43WAmGs9UseTCqkT",
  "key15": "5moWohvC8MCmcwSo5iTcetjiQbtNzTdAEk8Xqto4pYXdBCmg3GjCC7BHTcRCSyxeBxg4rEPUbtgnrAhYXSzvDwT7",
  "key16": "461mPLpgxL8tmQniXSq35yTXmaNaM7uEzSmimi13WeTNodixtswkUL8SWFRBRr1Zw3XZT9A5nmPeEjKYE8gDdyjT",
  "key17": "4RofJhxsaw4eC9JA5zjjv4r9CxcEKZ5vTTfzDahQi5rjZavVDdRx95krzT6NZ3PouW6E5JYKR6wBJnVM6fYJDdby",
  "key18": "263nNKQThTVVtwCsdEBqqCBBsvFAPfuawvdoRmza7FhBrFgGfwauMGrrMqM324oPgbQZEQkSHWUikoj8rJT5wy1i",
  "key19": "CyY6JbSACr99uJo3xdgwAn9JJqTiEWYCJAQHuYDSAmNvPuSG9UikpE2kRigCo4fizGg3WkTrntNxjnd3ZXyjdZi",
  "key20": "G6zASUHcAQ3PksJKVPjrtiMAw1haHK3zMsY9u7DpghpS6We2BdYgMLUBjyZKdEMuNGDbk7ta4hWseQP8qBgn4ti",
  "key21": "4G45o4hm9wrE46jCAM2rP54zcHNM7BzNtTETFqw4RAAiAYiUf4TEVR5Tn6Ge7GwhmGaNsAhhzakj2gpZ5dLaURq6",
  "key22": "RoXDZvfLTHbxpNrFYGheJ4krpiLEJD6wx1SZ8jrgnp9hnVUWyNyw6xRofVkmgFHFndvAzftFuXqjTBQQjMG6mqu",
  "key23": "5WtwvsoYWWtXaUGVKAwD9Ky3hZUaTyM3boAenTPu2bM4TJ6Mx9Z5fDzSRAg5xF5NhbWPPgCs2iwEfs4tzCNGtVtS",
  "key24": "27zEhVNaU7CKnmn174tYDSZymRYCMgp9CL534zZ4ZroK42KUFssVuqGTYf9EgvUDALYfc6HXqLi9KyWX7KpAy3Sc",
  "key25": "4KrYS7Zc2DHwvpkyBGfatW5zxpQFXgw1Y9dS6WxeDLz7DtHgLmUgo8f5vjJBvQZx5JnDdXQVDpFFff7dP1oCVU5K",
  "key26": "3DvyHmzXhKnrXM8WqUMHTjgrgpALWNbZZ1tndiiVsoV9AJhTLHMMp23rf6PaMPt6gXt2KzFaPioGm3immaDCGWJu",
  "key27": "4C8vD5WEFyGp79tfTJspvoaBiBEnv8x4eSBwoFgWCLdjapzmf47cZmukXP48nMizWLNo7UE4ETxCFeb9xYKR5qwa",
  "key28": "3ZFua9UCCvKi4bpdRcsECd1aRFzuByCRFuhjBE4fpipVA4gw1imXkUQVAMF3e9PyKtj4Zb6dLtkeQjmneTskVjQc",
  "key29": "2vCvTq5G34c9stivrVVHRqpNpJzrv6XqK6eoK8aCDSFLWuvydeypuZv9VN8xGDrEa6HkyZB2ERVY2ebGoXCazPqW",
  "key30": "5PZpKN4Wmg6P2hMCVwRq9vGbQnQBepNbQJ3LknBPZbqjcqXsLVFu33Ynb83fyqRx4PPzV81j7ogozTUuNXevuXVo",
  "key31": "3g4ZJcV9bMAnE5skgA9GvoWdpxnR9iSM9TkYNWRMaxEj6U49Kszrky4DqWTqmQfYzFL7SVQGGqyGgTEZGDb3dLiT",
  "key32": "5ZSc1Hh46gd93Jra86Nm4GoRSthrCvQZSw6udGHtYoJbeCNEKxj1KMYm2sxDALX8S1NqnyLCx5T7pAGe3PoUKmxP",
  "key33": "3RVSYosS4QuHgjWB3JX4PfWrnRPcBvQbSrPeUaNZ6PsHnF3BWqBCVkUJXfutqKyapgGkMXGSsk6Zixh1MHf79345",
  "key34": "5nDP29gLTjWZESftJieF2rt1LVvteQSGLPBQ9EsZdq9TmKUAufG3bLfPNqFHfsLo2PrKMCf9TioaTn63H8Hic51j",
  "key35": "s4MpsGgRUSjKZeZAeB3FXDk9RRTiPBdx83uz345boo186dGPGoVTJmPFviCUe4VeBvZbiGw7wyK9NKY8C2FSrSP",
  "key36": "42nV7BQMnr5rGeDwzqSYXs2R2U38kYhay1WiQ4dW74bkYrBGzTS1FtjESy1gomMTB6xtx7pRPerFXEbyp7B2gYBC",
  "key37": "5VCnmBKjbEMPuzCZgymBAVhp1CeDhgigqmnGh5iheW7g5WuLTNxFgDJfue6NUg3L4sDJWMcEZAd1Sz9j9nqYcRwe",
  "key38": "5n8YDvfKo41surSoq2JFeaj7V19XixEbu89HeZxtpTXTvvyx5gXK4LyGGmjit1qhWQ9cK3ksnkvTAHZcXbSPWxY5",
  "key39": "27rbUqDRaf8MaVj5EuSW6qFFfMjbMMEWW81LmuqU4pvjcPXM5UxAHixXCAzbxJshJMtgsgKfAh2gkG7XTmN9iYVt",
  "key40": "4mHyyyTXF8RNwmCY71Ph9LukVcB9EKhmTwrZbMMGrZ9Db5Z7rqh7ahKYTRk28hvTitcMGjzk2BYx89bjgrbYSdJy",
  "key41": "RFxkdNroxNPmDfWFwexwkvrAtpj5RgCprYrMM9Fo3JWdEzX97bt9BPnKR7mnDYYCuvkaUdtbPsKY9Hoa7k9sHN5",
  "key42": "2h4eBGYUkX6hg3R87Rpab437FYawCbRQTaqp8uJcshvkc9wEX9c7W5UNiN5axYWt6pJsNM6Y1a8efz6XmaTk6rQ1",
  "key43": "3GppvPUmpLJtDR2vNRX6X3wXigEcdrVUdkVGLvdo2BW6PijczyrMNYK4L3b5jHUEKUY8pWKhGVU2Nt6qqofdHsB7",
  "key44": "4petPMR7PSTg3Z2s7GdQhgUhfDgDsKmWEjTZRQMxv4spTWNysAnwMS9zL59QR4kDAKa5N4tKJQK2UUkNUozQN2Mz",
  "key45": "31vLP9tq8E253M3XZgWjXxk211pFNA5tucm38BY7pwFZqjKNwn32N1ZEuMUkMGXKoHxTtxYSRd2QdPmJfoxnYBEf",
  "key46": "5RMpnVUUpxamftNqU5NAhCMGnQBDpFD66MKG7nXVJztVD5oK3JdzscGmSoBH6wxi8tXCNTtfAehXzKcVtjccPoDm",
  "key47": "4DrBpXCqgQCWvawvgrBvVzRoaD3XAiouoZhW1nN1bMd61atskAQrZ8M41LZFhgH6cUtWDb3VdagJ6qCD5wgGydEr",
  "key48": "4rtsPY1HWse83R7SkCmhySCwDE8wnexieZmStpYPYCAvt2UP7iZY79AkRnC7hZKLgjBwXe6c9d3aksiA4dW3GynB",
  "key49": "3fYqpTZYXUmytf91mjNx4GC9d57NKBP6vjnnqBgwMy6RPpbYWVeieB7BnY8Cey7dJ4Yp9ZPwUArushCAJ8mzSAFQ"
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
