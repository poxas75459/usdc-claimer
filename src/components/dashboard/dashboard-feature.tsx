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
    "3trn3ZDDHFbspaHLFMNcEP6LQu6sQhN9KtpaqFtt9fLygemYZp6SWGjKN8LxCWzdNpogpXexGxHSrMppjskucPrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vr7LSHCYK4Ypyaf2VTB35tM3Bx6SicTuCrfp7DZrtS3UnDmGwzfDCamSmG5KZDMKssMPUM75zdfLfefUm54RnvY",
  "key1": "5uiJakWfYfk1hfrVkLiLoSKKqitzS5C9YkEtSgUCZAMnBucfzMeAuKdMgAM9kybvpYzcf3aFZQPiNDmjaPHvJsFs",
  "key2": "43yzZ1hhVzxYAW55cGSXf6uxavT9DBnJBZJ4cFpgwQ7a7WGFXa1ea8TVZhMj4Qjk3u9Ru9ygZUbA22BtzCyYmjeU",
  "key3": "2SYs2AUVsn5iN7H3rmabcZdxNaeRfeTytTrdhWBJJi5b3hbCf11FwX4sJAmrptjGcma5M5K6sCZEiPHFLqmd67hX",
  "key4": "4UVdCqL3WSb36inXU3qGjdZj3XDf5jM98TDTUBGNppXBXagfpcQBNSbS62dMsXCuADrEfaWghLEMoGLyu3DYhCdn",
  "key5": "GQEjm1Npd6cmoqZezHx14w2YFqPCfdVCKSQroPtXGW2jx2DKY2Zj2kMeK14RVAU5digNhADEDEy9Ymf74zwrjdX",
  "key6": "5L5BUAwQCYKnjuT3QtSKqkumkVN9NkTwRSAmN6e4exN7FBpk9foj8mj6TjQ7qGuGNdTsWaSCZ8vwmJHAWzbWWRtD",
  "key7": "3vsbxuwXvjGjdD2bufaDaeApxhYkBVtxPRh28YkZJZUpV7uGciWPVZm8tw4Lfp5UN86qNKNjyiUJuLxje43vU5SY",
  "key8": "3t46kM2DrHhSct2qwtuUQLohF5xuf6pLdVLA49ngvRax9Zg73GgDUZWomqdzXiQVvqBRNk5YJbQbNmgM4nirstqd",
  "key9": "5NCdoksuwwzeboYtgDFyvEuBKYds2i4qJVst4R266d6e8kVdjSX4TNCnnKZrBZUnnqyjiVadkpFZbUPr39gnm2Lv",
  "key10": "3eauWbr9Nx1E2rotsAPQvJC2yi8nwnubSczxURjWfKJ53CT5CUW4WeNaqMq7o6ohehVDVuwKQMzzy79yLaw5CHF2",
  "key11": "3F4sypS7x2F9ejLm4LqDWPH6M7bb8fWZLMqUfRoPc6cQPrNiW8p9M64fXayM3GHQZzzZaQLAt6Pnd8WkNT1xvsM7",
  "key12": "ukpbPjQwrek92Q9JYHFWm2W3vzyYHpKTKsU6SExjKaTKxHynVSSVQTdMTjquesJ2kcx2rfccnuuRZujBbaAFWhQ",
  "key13": "4aw6Nm35StFhY1QcjQ73YRcMD9Pspvmuiw9DB8A5LtWYiZnLtZz7xn5ChE2A5KDbTXdqbY6gxFQmswEjRrCbQwmc",
  "key14": "5yQN11ucyhHsK7Rnp2TccLPJTunY6HFtNkWfDE4QhFivQWKCMbScLxADHv9HSA9Uyep15wLczMS9UnHJJy98EGoF",
  "key15": "eJv7zJUJxxfLAYBfPMfUKgFJVaSaXRqSkP3d4q8xvr4t4qwHpPQcj3rmKZ4yTkJ5gQ1hXgKXaC4KWdAesAGwd8F",
  "key16": "4sP9c1wS6RjJ1NJZRsAqjYB3SFsXTRkA5DHu54DKoZwh85baB1Hk5NEhzJBhYhR8Xx6CHtYpbVRZpcRvGaFgEH22",
  "key17": "NpVrFX2RBzGqVSar9rXhKsGQ3dKh47eDb3RYtkJKbXdCsgjuDcyJKWyBKKjXb5jeCkC3UQ7XnR8pnhuUfWy5SCZ",
  "key18": "34chD3ZftiCEoM22vWSSFaZZNUASkMDVp6VT7LoMH3QbLAF3HXQ9WwTPPGNfKvbpHcXw7DXnwwXrwzUpDCEpNq8R",
  "key19": "PhuZ8ogZCnyPLEKbHPvrdKcNgCRXUGb3bJWK14Ndm1y4tT56Ybucxo7NDxbAnwDqtcftor2sW4MdbURF9LB9cJ4",
  "key20": "2u5VP2rNykhefSY6Ru8p6aF8x6AFcC4dLVyGugyFJqU7XMXyhVZk8vRUxECfeE7vy3dfCHbLnf1AQ89YKHjayb4C",
  "key21": "3msfFJt2AucnJhG6NLGZNgoHgKDbJPEkib45mAdf4mJXRqVUVae3fjjT9myQUdZ8wCRXU4HR1Mhu5VZbGij9oCcx",
  "key22": "325BJtqCvWcTSBVbZpVZH8Rm89MmbV89yRdobWHbPLFTDtnmkGFb9juwJiUjAct7bsye2biarXU6YR7dPMEYdNoc",
  "key23": "4ccPxTzhJV2mqntAwzhtujnWdRvKfKQ5ZZ6SpvSYWtA69u9oRCAJJH3BJECbZ2KWiis9pdGsegFGDjE3N4c9dDUX",
  "key24": "42rpBEmFsUHVY6ce2stqT7DxbjGdXHwFyqf1qJEDBDm9uKmxoaZ3kaqV93aoiddgogJ3YzXn98HhmLvY3WRpUnai",
  "key25": "4R7mkHmKpY76u2FPQZEYijNjH3ovRFT95zXrae7NXWrF4Qsmej2xrLyiD8bBD8JxiYSfLt8PpBPaVWgZ2p2Kv2L3",
  "key26": "2r7kiTeNVLFd9676z7sCzQ2k1cZsGh94poWyswH9YopiikUSvp1MwemfqBGs3tH8yhBdzKpxgBqwK4rQHoM6YNLu",
  "key27": "2HTKxAHdj2MbZJh7X3HopfvzypfYmkAMqD5R3RMDAzLb9CeabBfBGJHjaNwNEFuKT1dhAwYc6qKNTmGKneyhGawH",
  "key28": "2QoxitWo3aPtsBQRK9AYbpmA6qcpkgKqtW7NCrJ9UkBkNEhgTKmBqGj4KYAzmHqURL1etFb9tu6BVHzYSv3Mjm5v",
  "key29": "27hzxvf7cVtk8Lqw1oGmaQKSZtgRCkBxoMgxNKgt8oy7edKVkh4CD1LFMxgWLP1RV8fRNHXGbuP71hyGYYXWHHRJ",
  "key30": "2CpUERTCsowJZ1EwJLTt75Ra1E7LNYCssSEQFyUKkuuqNiHTg1Jw4jKaZoE7dDncU3T1oazbP6R2yUEPX9d8KVPy",
  "key31": "4tssqg4mouKZwBhFvVkJChXzX4kzjbNpWnLtgxQHGPyhuVzN3K8SCPLDARKTov5UiVtvaGCCUxWDzftzfA6Djesn",
  "key32": "whESLcMnJb9zkFCXRQDE1hGy2jzMtcJzQQ9jiyjJZBeMaNaN29PwCkiAG59KmSZyCxwVbyaDkQHVnHqh2wh53K9",
  "key33": "25QGd9kM2kFsGcomcy2akqDasN964Jitnb7Bf29ozKdP5sh9QzATCqMGk5X5hvKoA5JsSvF9cDAhPP1xbBWp6Ybr",
  "key34": "24yKgT5JjdnrbaVVkcxzdrcdMZrBDBc6Sddnb7zc7qpLw5GHvV3JP6bvEh37Eg84wzpix7rxH4srBs7Arx7Lvomt",
  "key35": "3EKY5a2TFQYG3VY1jMpTnnC6niKftUyDK4LwqLqPpYRySrBZTKTwC3rzKYgvDt1pEDHTpXcdV4KVAM4kzgWS4YKy",
  "key36": "2QwCA1JWk6vNZjWqfCrE7cdMb521pkSvqjCaJzDDw5ncxSQd6ERFbrK24MapZM2WfQHZiEuJoTtce5S1Bzt2ahrw",
  "key37": "3G1NoEazaPjtGhnBhkr2qNwkRSRK9zv9ykcwLfuZa5eouRqArq7eBoCkmCRRBu2CcxUKnCi5YZDVzU9xddzpvZpz",
  "key38": "29BpdxLH3SoXpfHcHeJNn6jez9HjNrmrfJ4XjajSunpRyAchEKczuWHnpVRfSbrGVvt8ib1QqSWgZz5yP9SPwJL4"
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
