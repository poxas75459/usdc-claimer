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
    "4y5EvgBrGdQGKPHN11nkzLX41gPTxoNbGAs8jFXEdkCLX1pBv36g4sRooPuhCuJy85sZ7XTN9Mb1TnaxJ8nKT4qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nFBWNhRGiGd6R7MRTWm1koR4PZKNsAZJbi3SUqzcD5yxRKWRBSbYpHRYbVLch751BciorD7ZvJrqYckFg74KC5G",
  "key1": "kYmf7DWSCcbzPL8VtWnuyi8LU3hBSsgYw1FoYP6GrHaEsQ4ucrfc7MqfsFx61YUbcNiyiq74YSzfoJbWqiTREme",
  "key2": "UojReDpRTKw5FN4EKnECA2mCFVAqDrnMm4w7Pk3jdUoVfCK9CuJtnisEV5eZFDw7uef2TYN1XEEma2xFKm2P1P1",
  "key3": "5rPKA4FSFRchKujb4maSEmfes2q1qBrgLBMabw9ndMivHBzY4YEy4qmxAcYjEyx3UjcaCY4zfPGxmRmLudgNcBcw",
  "key4": "j7iVk7cK3wQ79Z33UgLSAL9mEJrPmE36LTxqsHJ2u1bJXHy2ZdNLzC4dg4DEBcUq72Cq9uMjB3beUQ5XJ7WepuA",
  "key5": "4j587qZGhfVLbPpAoBthicXxYgGFFYx1Z3rBVeBJjzWA8KPWBp9uqXkhJoR8MXx8AwPiqoWLK6sLXNhd64gjemMr",
  "key6": "3VzyYYEVdPTFkRAmxwR8zFzJURnobVdmYA3s2MRDLXMTTsTzEW4KC93GtY5qnhzduMgb9rJboNxraY7yKcpQUzsY",
  "key7": "34q9f8W5SxvYPcDofFBp1NRfqi1akq7dLFjACZUgsu7rUga1ent4pb2XjNkmA6BRenbx5aAHVZhRXqmoVDyMzfdq",
  "key8": "3jkyTzoDKWwcko4LEDCMvBYJww6JKufZfheg39oLtgEWwDrQpXf9kvXrTRhp12qkAYzahPs4yJZhHXRPVHRPPH9V",
  "key9": "435uo2TgYjsEsNVcYPBG54tQWkunpzLQeTb1FMeihyupa4eLJTKSKNAr1G1q3XGVFGFo7QngLDHmEkRxANXE5bCT",
  "key10": "25dJQLeiPiBBiYJqfAVdpv97TTY6unNxDpZP8py2Bix2icPuikiLw8zoAXFApSPaHnVsN9dsYZSGekxZg67gzqmE",
  "key11": "5SViCg9ooy4Q8WSRScJxbWRrs2t9ckmJHT63GG2S8JwLoJVy8vkeiar6iGUHA27kJtojQv74rWuV8zShYmRnCPy3",
  "key12": "5XZ2TERQZLcLhWdcJP8LgKmayZ3YjdrFEgvkWPwEfWvJVscDCQ4nTzx6qjMGt5wif4aAhypw1FVU8HzU5cny6gXm",
  "key13": "4XZdWB2ALF7fqKgHGwMqYK9CbjTw8d2WxgpZJ1wiqxjYw7Ssw9MB6yQr2it5CKqC5dd3rd4KjeuzNaUCewAaaLGQ",
  "key14": "oUZAncKS3Dpn4cuezttTVeEU95YuUKBuGZRq8A2AekL5GFxj6enouZvCqFQQDDyoTP11NR22BfxMMnQNQBW3BJ6",
  "key15": "4Z8HF8ifm57a4VoQ9CmUe5P92RbbLRAxoR94LNpnKrjkfHRCfERyYWZsQpx3hgcXscofHbWdym56pmKr6FeQ9fP7",
  "key16": "2zZrYxcu35avMMLBVAqe2b4uFXsB4QrEPzzHbYpKYgDMKHJpz1ghJ4KYba75EVWiMyJ6V6gNygzZQ2ik9b2ZWikh",
  "key17": "4TfqncjPq1GHMPab5Z2oTqbTbhJMWNFUethC45xaVecugWv86hBx2KkeModvAAuKi4JyHQekEKTQngQagTm6VDry",
  "key18": "3vwFNrmXzZZT2TedYqGhNzpxsz8LFGNB2EqF1AcETkqTHKVc7ntYHfvJin8kNpskTiJpEHVvV6WTs8hBGhzujNDt",
  "key19": "qMfvRLYZmcSKdiKJjT6DU1LqjmBdd87BFsNdbyj5bfWYcGGGJpcNh83Z7MtNAYHbrdYHekDrGECwBEn22S85k3m",
  "key20": "52jM7fmtyRzQBWRDdhu1o1ryLJv9Kbhank654zVfC5HEsVFPTeKddZ7wHT3g2AwWzyn6yod4UGajH1aYrtXZWCb4",
  "key21": "45hsePH4oDwJ4nt3FyC9tkDyqCTq5wyoJzgzisN6d8iDsy9Ta7f7gPbYBsbC4eKLXjVgE2WXGda9VavxgkExwGrh",
  "key22": "5EyNTQFKH91Bx1pNquFye2jWVfSjt4gq9DdNs6BSzVyLMqYUPMeTBGw4XWhb79xzc2jiS5c9VCGBY4GR4THggh8r",
  "key23": "4fgKTByNCDnToahm289GiMXABABAiMsScTgPQzreHjEi4oKMigsdTAWJSug5hYf4g5eS7bRP1brJq6TQAb4CrPS5",
  "key24": "5y3969PJqAu2vSGippuSN2KAj5dcFpYpCtcwoYgCVFfmUkbPBkkwbjjqKDVnUnzArB8p9bWT6pXaHgYzpUJQqBkh",
  "key25": "cKh6PVBcKcVgkAVf997qyMDVkPRP5Uoh3PcdSW5GVWzgt9Cz3R9wK2zvBY5QnC238wDsbjPN8GfUpnE9T1CQuzP",
  "key26": "36nWYbdoWS27pZwMvCajcRafAuZYa44r1sJhcn5JbSm9so9m8CSRXpG66QYFsrAPQxTyR42jeQ5JWL8UBTbtwBiG",
  "key27": "KS3eyxTWNUriaKNYWtYeHTgTiAqQ5vHVFmPzryAUq34uU1Y8J3wZdZr11Y11EgW6k84Gd1d8vksDFZahD1X8k3v",
  "key28": "Cg6G1Ykqr82sSF8VFb73h2SqRGuSxwAY8VWxKxwJ4bT36TFb5HXgd1hLwii5VSPPDy1rrFzFAU8T2Lh41ZTKR6p",
  "key29": "35WT8PGmsAuo15NNU3e3zrJ6UD92VCZifAG1TZ4S4abZ8yqjSmPW2qMpcrr5NRHNtegjQec35qC46YQDBjKCSccA",
  "key30": "4NiYRfnLGHLk5jbMZRu8HGxZjWTwR8uDtX5v9tBcG8bUPnC4z46XTisUTMTAaoabK3JaxBypdV33jXYCKHwjfAeG",
  "key31": "ZHqZqNMfnv6X1gvZJpd15t3swRvKR8TkGJMWAjrPuoLL1qJVyyz5qSQE7RwSXFQvqKaiBiReagomZ8x8Y3SxqU5"
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
