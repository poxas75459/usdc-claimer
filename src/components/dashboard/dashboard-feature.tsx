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
    "2GdPQzqquLPGQGHhJYT8VfTtUmVEkNuQwv7psjsUxy28UiMwwM8rPdShv8qhADSRuQmPShaPnaDyfuGT4TQoDinp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x1pLWxtM25sF6mqszPH45AwZHeTrFWTVftTJbwpvRju8fqLVRBrBGXBY59XQAYXzvV9NdCdE4owxErTTFSpKmLe",
  "key1": "2cUGukaC5DVrRGts9b7Et84SEeET9hcBSaWgywfkmkhmdS9vhU526RD2Kxj631ufUoLfHDzD6xDVxi2YdKPtQJxT",
  "key2": "3kp4K9BuyVQJMaoV2ab4Ui81QjowMeP8N3qzdZmH4G3yfQ7YvtANtXB9JSb42dDZFgqXs1ingdZbCxAdgVt2F7Cv",
  "key3": "3QNkPghHYR9UM1y5aUoxeceB47uaEX1eFBm3j5pUDiww3kofbsNVEUFjvwAQ75fzNPURJzQtq4iXkwrZL7Zkty2T",
  "key4": "4723SnWgz9X2U7qfnqyK7htxqY7m6UAWse2mRfrN44gHanaUpB6fKBXLiDQsi12kwaPdpNXf8Ap8QKEm8P7M6fwt",
  "key5": "25fvXTvzSW74MYHFMLGkM4v1PKTXM9k9mqgcWCdWSYxn8HooGhfgszNjPQRjERpu1nq9whE588SmW5FTXy2AWXMK",
  "key6": "4ugaPv9a7NNQiMEM4KqJsjstRANLgtgNReXe1Qw1NKXcxQUCmtGvyurxt2T5VFrcNJNZ3JLH8rweCysrgG6LAyLG",
  "key7": "3nVa9atwosqyfdnxKW3UnrnfA61KpWGszBVeGeNkVCVqLUKpdRrTCooJHz1rfT2joDKiKc7n1UUDLB2A3RZucu1Y",
  "key8": "3Gykxgd4ysiYf1ueuXJCzXs3RZBY4fuysL89vpRdXyGGzkQV2ERPaAnF7wm5rrPoxM4g5GVVuMKN8QhJcFaUPLAG",
  "key9": "AvRuSYb3bT2jHUjnuqWyuqGVHQ5DWcgX5FAeAfBzbSq1wNpBhpuky9HCR4BRXKH8VdLaStq72716qJjv95gMqtD",
  "key10": "26A7VQbeWKybEeS6755hnojaDthgbiKUqBKEc9f7XaKzWy9BCipoSfPjKCSjDEADSwCoVKnPNXWGWxrFir6i4zWJ",
  "key11": "3mwLnkgYJ9VqyVNyKXe4HjpMPXimGW2STi5MVYAe8WXzZoeZsAUCgPgwR1a2LsjjFy1CyWZe1neA1UUxqerPMWSC",
  "key12": "3Cjh8RWQx6bQrEPjtF3nhern4Zg3AFJ7ioyGeCbAreH7dbEbJ7ThCajLqKXZLkqh3Qy4AP6QiqR96m12wCaRSCZB",
  "key13": "5vjj9E9kp29FfKGm3d4yJBepJiWLhQDLCfHNwZLihPtnwWgMrCyPEbWo4heuUD8cCCKqJaHEPn5sbTYNn77Jtc76",
  "key14": "3duysLjrdq8GwY2aE8JMgEsTZHVzLHVWNei3s1rkGaWSiUcDP3RR7KPBrqJ3kx6HUGXzTUPVVubeDuGScvXkQYJy",
  "key15": "2enFvWxw3n7CH7Xzyv73RqEhezDZkktmug83GCfMW1TT8WNXRfwmHyzYJQHoEVLeHuorL3LpdU7UqLhkVXe3mfKU",
  "key16": "4u7r497pAUmzTWkooqxCqeZADrBTm1Qn3U3HpN1gkvqL3H2ARndyCn7NrjPbQ6ZJrUaMbZo4D7aWYxJ2gb6B8UMg",
  "key17": "2diQcQTCnz9497NcsEgGQ6DLsnyqZ6WVwd5uuR4RbUAWDzfoSLZ2FhVN3txEdhWaHiR1NZfRZRPTVvwjcGHWkyej",
  "key18": "5bPdTjwu3Kph7F6GKGguDb2rffwzGYWQtmBDCAhnyJPwqAEtiPzp9spVe5wUx4LQT9YLpWWVH6Ui3ijkKPok6Z4q",
  "key19": "4rC48PrZFzNoLWxk7apokN8ZfnYy3ipxUArp42R1GYr8SYoc16fCwUpXgBSKzg3NtEn5eFhZQdyhqXJ6Au4SCoa5",
  "key20": "2afL5ZfYPMmBgog79bkVh1MBCHeZxHML2MypGDecKmFeg1jSjEN5fRLbBmrBAeSQxEaFxYhqsusG6oZtAAdGH16G",
  "key21": "4RwF4dTi4YEz6sDdm17Qq1jAFeDTKkpTU2Ns5bXts1dD1q8M12tmk7v1TNPCKdyHB8eVP77R6NBNWXGa6mwrUboP",
  "key22": "3qi6UJHKYDVcgkeUtUDiEAXt2ffT9EYRGr4L7s62xFm7W2KQFq8FQh7XNuhx4cHQojcAisBrdZ5iM3PaJS4nHxiJ",
  "key23": "2MrJUwu6kdVUat2cGQuQfCbJkAFsd34BMohXSdE3NULnNbzwM7tJqNR4sNqkNhfteaFz3a2yAjHdFiXeoziLdFXm",
  "key24": "DKM3YEvspd4QyRxwaRqLRyAHHqwn6eKNcuSPXQxMnrfqHcDU5gwuGTUA1aht5X2LgyGCJGKmCrWZn5WWmvo3Tt1",
  "key25": "24yFWGQyajdEspbKSMSakimDnrsgKK5tVhuXf582s6Ldf1GMCW6yPV2tRN33kcXVWb44x6bQmkEbQsKJ2B4V1ReL",
  "key26": "4H926BfBpbzGEsGypLCDsSsfG6Ghkf2bMr4XHdGbY1iRFjBaCnmzS5h9vgoZ3kZwWjK6taJqETWpj1YfVKQcGRS4",
  "key27": "N4UkrG2rkvVYBGdUPPFfvtXD8zDw271tTYp9RYU2R3xG5d9rp9HmJQHyATC3wiMsCTRSt4V7nvnWbAArVGSsA9A",
  "key28": "4JyRyb2C6w1Z5SycCapSeMi7uZEAmcpMpZGWyhSqte7sST1zvHPzA7DTY596NFPzgxEb3j75F3EAnhsu2mgoRYT5",
  "key29": "othT8EGJK4u3uwvC11LhaYdBsRKMEZD7TqPZ2xPJRmQN1MkWFmDzqAx1gLd8gQ283XZjBRiudxTMGwCEYyXW8rQ",
  "key30": "e9gjBPJa1Hr6ojX5WvN5G7NLmSm3dNLS1c39vEozRE8HuZTXmYBUxXx5H9NziMNMsv2PyeuWmAxtuLUR9sBmmuw",
  "key31": "4PY3KoUSF2HT68dRjX7XxgpxTSQqfpZfRKn5D1v3fJDnSCCa6M9tAvxT8hAyz5BP1jiPHo1akvxuaSTXM3fnsqCV",
  "key32": "4zJ4F5Jox1B8nWdw99594cWWCRxAadyuSzx5acTpA7q1epZZMg9o2nMncrV7pjoHNNV1wMmDGNbZ1q5m7qkdtoCm",
  "key33": "4iyxDmnHiKv1LpmZzFtXjCePrmZJLWVZnK8iGfjLSHeyYvo3AFMFPufwWe3aEpnoXPQ7eUgMgUo53om2GogRD5im",
  "key34": "5FYVGe6UhXaajhtKuMm7G8AAHQNm8jWsUgMqeofyU1DMSzexg98hsruArADhxVUuM4hWHmxB8bVreF455iU1E1i2"
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
