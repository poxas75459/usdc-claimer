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
    "2KNA9LcmAUbb3WWQGhhiGKGUomQokxQ4Gm4dk5XNbzooa134NWcihTkRMGbKdaLgtizKNksVUUnukAdULf6fkyAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWiaYUwrkKYfQj77yAHK1YiBQvu97ixkiN2i4qkRU3gdkXRReXPcGEGKLPo7GWXv6VjZ99NZBVPWkt6apYjVqkb",
  "key1": "4VoVGzhbs8857Sp9NULKVG6Z1f959reiAPKuCN1i8CEUybxKBwttnF4sp4srgZJB56uzQE7T7tPJotxNHZ7NnmX1",
  "key2": "Mp2kX1x2kPRcvDgrM525trW6LXCwvxyA74wuBJQ5VseT84wGF5BbA8WkvoT58AcHzmyXXeGrfKrkKJJ9pdGMbfe",
  "key3": "57pnSatMAD9BSkbdN2NUYHsLKt5AuoXWhDcTQRkiuxBXuZs1hQ55hYSpt3YAC7UUnwz7CR5Lu4PyRHCzpt5QopGn",
  "key4": "5Dt9GThkKbwiMt2N6x2o5B73q9noggHRHYfgncApuXx9DBmnNrwKh845Wsc2ryLr4V49EYaHEwrZ1H8S1WPegHj7",
  "key5": "3FtQYDuicA1NSJ853Ah8fKdySoNpnF3P81N1CgGuHSvEZM6PqguxHn4s3Eoxt3efnj8t6yzH4qaWYHKPGBwem4bu",
  "key6": "r2DhoV4dChfxFZbrBvh7B9AH98eTJ83hd9TmurMAr5dqtYv1uBGQ4FGys2wYWR1JpZuuV9dFo79ka9NxssvmYSs",
  "key7": "5iM4MwAtdGdusjGpZZzKW8Vzs7geM32idKjJWEpYkVFmGrP9B7oyoitJNWh9AUqddDmyyjAcXesXrTUpmdJ32Fub",
  "key8": "32m7oH31WTfsnZPYDogauoTBTSB9DSrdzgZ47MF2WHmoGBRZs3tV8z1SDVMXexUyXTPmjGaKxnP659Yeejz2kdmG",
  "key9": "X7eYvx5dWY4VqKUAaZuhdxygZ21LmF5ky4SsH64p4wBuZ4UPtxHDYprMM82AwnHoWf4tj7JWUANmmSeHDLwmjo8",
  "key10": "3mUjs3AwnrVim1uffCDi1GYNGmYnWSon5X1ionzwmhqoqCj43EpMTnKF4fV3r1pWtZ52rqa2PQQx18xqhcCWSKBP",
  "key11": "tDramAj8NbshJ9ctBXTZY3cZo3p6vt8jGkNHKmSpfikjo2Spemfa2ArGvPvE1wSkwHRwbjRJ4sYjGV5VLMego5N",
  "key12": "46prRcKHukA3NcjfpeSTCQDmgmGJWNVE4FMM23YMZWoszreYqTeBBZXzekiCrnJTsWkRNx1Bg4NQhn7fpqvfDVov",
  "key13": "5asouhcJBWKeiYWtmREn637pJ2YEwW7jo2qTibYzXTimjBMSj2ZY3vxofwPsQbboRocdX2U5cMPsoLPihACJafPx",
  "key14": "LYeTt6U6Wc1q3upgZ8VKev2G6iHdneHzW4PXDbgNp9qQUthVSnFGNLMjcgU2X9s8SaQwJH1tb7rYM62aUFPkYwe",
  "key15": "3MGbBNwMjm2UimpDHaT3x9o3gZMmBn8WGrbvXWy2HGkGGKqa5rQm1vcKF7fKF5EDzrxqFLVpTKkGgr5z2ZYynwL5",
  "key16": "2D8CAttAQonBmj5ZACbqsMtYstxxR6ZALmkbz2wqDfdXiREYwYqtQNbPnCeuQTA8sX5FAUeUEDAzodxaFxiZ2DCN",
  "key17": "28sWcyAq3Fhg14x5Vq6Bo7FnMXGSNxLR5gZhHvKri5gXgWEqygq8piLRBBRRhPDdiGCRWzwfDtogHUVvbd53DfaW",
  "key18": "2bt4EQgdeQSPnY9ixivWSKbWELCSBGgBjH4TniumyxAhg4xBBG7UeecavzL1xuwHS1mrCKbrUeyBUDnBUSeWvq7L",
  "key19": "2SxodLKDvrtvuEtttQRrK31d3wiy9MDTwchNUQVMgYznMZc8DvmQVTLP1QNmUFuX2vcCYzCFarJnXLpviQU1aPEf",
  "key20": "5PhdHHDc5TEE7mCMtg1cjDp4ggtq9yZp92pyVzstpoKMLuW1p8vbvoT7f3GRUwchH6GKwn8xGwAXfNd3FqjzWsom",
  "key21": "5bQC6iiLbQ1nH1WuQVdUg9RZEXL6LPxasnkTzq5Jf85pW6ivwSvzRgkpM2BftBKiYJ1Wcx2tLiNUDbEq8e7mqKqd",
  "key22": "2mYkr7S3gg7qy6BeCkXAccQB9qKoYEb7YeNSXPDu8fTbrsKyXvfZYHq85aBxQMM5QZoch1LBT85p3jiHQc38NPsD",
  "key23": "3F6zZdPTqZe846TMxFTwZYedh898z6LqRgBDFvBzorK2X3mmorsBahRye96wfrcTofXf7Twp8hYPj5xRxoWxDQbV",
  "key24": "KCF3JbCnAkdewnm4rL5wZwgz1Z9JsvsM8N3yRHsnHShdBZxQzbGVtx7DiyN1ULF6TurW2iT2fdHUbCZzfHkuKLt"
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
