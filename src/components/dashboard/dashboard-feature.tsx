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
    "4QAjVmCJahzBMsj7iFXXGZuLJXTCbFRLfCgdLgSuvRwdKfdBrhM5efQSYeCmhMQCmMeW25hFS1L6Pb1bStbao1dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1raSWiGN6Gm7qJqnsPRxTzFSCB6sSbVvrgsn9WTRAF5tU1bAT18qo7fdcEQrsThkTFZzLd2Kpw7jrStcVJgB4x",
  "key1": "2Hnjahd36xegHLohAxXrZbAZab18X6kRznYmtoq3NWXMuJdvhoBet1k4Z7JtpJWodb3at37GckciLBemWdEtus8P",
  "key2": "5uRxTTJft9Q7nHDM3mPFM9ZL51adqHagPeiRhMaS1xEcYKG5YcnRcu1YiPjoPEy7tSGPDqXZkTeC81dLKa9VeGwp",
  "key3": "5VVRkJBBC4kSnZBjG8fhueQYnViptUwLkdaWTm7rnRFRGUw86QzQSXRtJWYmp8bmFx7SPEeCJFcSXidy2yjtErDN",
  "key4": "2y7UTNLvTG2ZqTWvJhKB5p19akSPj1ceFJstxLLu3TU3yJrYxeSefm5hjEgqepLHNtR8iJ5gZfVzUsJ2oCETP2AP",
  "key5": "5hY2qGrcLJnsYwt26xujDF4gPWCA2gYR5GrvRohL44T1vYVXth3dFaNprgS1sqotN9pdQntvdVpVrNUTPQWAAabt",
  "key6": "3xBdFrCmg76mU73Rt5smhXe8Ed4KUjZsgr6YMr879KTiCuFGCZTXPf8a2gTjBY2BFfXm1yzMJcBt9aTLqV8kLCAo",
  "key7": "45f5CjmARVThSin3QAenkJXmKhoxgtrdmzQDihxj9KpC6cm2BzQzJmXPwygcovuZiqH3A8WxjXNgksYL8kAKoARG",
  "key8": "3xqoruKRtmBWh4NEQRzhMHfYSozmAaBKX5oGwRTAMLCbanpzWsYxkMFMkvmMhvpaCdJhBYv2MtE8GxSNoDurJqUC",
  "key9": "4vG547DgwBnenafsvvpuQUePDZe8m586o5nPguwnoEaREX1uEXSTYVxQ8yo19Q6R8WGYY3cX9o6GGG3DQ9KsvbgY",
  "key10": "9kLY4aUpAonYA4Cj5kSmE7SQ13cRusAvnhxupirLa9YVBKK4LNw2FbcoXaF2dx3eYccAwYo2AAxseH4GkXFtvQP",
  "key11": "4RnbqTW4jQTb1fTiAGDBNAzULKn8YDwpm8vcUdY1WEpKRamQVhzEedunf75gqPV2UCDYeZkt8k1pNPnYGEAg2ziT",
  "key12": "dmJ3aDxBq1HgKt57YjevCtjtpMgxhQwcruDy7PTfZLNRecB2PGMTTKcEygVEKM6BM5nEuPZZKN5wg3PATfTTYSw",
  "key13": "3nRTWm4T8UqaRAghFt8PhtSp7Ucz4nJYGzBkD4Ybs4YTyFfkFXx8BQMoBfLqQSobxQtPpwA7dMigAkUEqfQMJEy2",
  "key14": "2tEdKm4Swuhe9RUTDA7xiWK9KgFcsBEUSBuP4QhMwiFUWuDJpVLW9b8SJaMN97bA4hLVLPr4sXJazBmSUuWxxUL1",
  "key15": "2PmTh47EzADhnKEHHwYFcfhAqetMW1RxhUGPfA7pttB6RzsFhhaD5nN3tuMmJ9LMHo8XKt2QB6WfGmTuoEnsvZUM",
  "key16": "4FFEMTh9CUZP1QCaprzsNCTb6BUgXDNT6yGxQzvw53k5MteG2LJUWuM5oaCJ9eVLeogULuNjYzeCj3yi4gVNGitD",
  "key17": "GVnUocMs6THhfKAmybGDVk2DDmDCq46mky4K8unXEi6JMqJdATjgutA6fNc8QfJHQzoc1P8YJZz8JzhqGdVzNGo",
  "key18": "5QHurGa8ztnhtoQMqziHriiaWgRFERW3WxeJ44VCfmd2WP3MXKdiE7cddQq2it6Bvs8FCrdAV8ygPBaCMZk1j41N",
  "key19": "z2vbCm1RFSLddjU4hd9j4fGJ1WL9ZJNY4cSYS6D8u95FanBceV9KagF7MqLHGrnGidBLQeoGDiPAkmKwdt17pgr",
  "key20": "2HE2bFmaK1mECkwBwLpp4G9yW7WDQMdXdFhBWAA8eyWagpTd8eQvRHmUbTfCptLvuhUuUdLJNREXFFsRwUA4VsMm",
  "key21": "3X3yyZ8w2T7cMo6xYRvPzU45znSMQk3Y1GR72xWBBWC6EEbyVN7y3nCUHSfxjDFNDnEnFGXYTuv7AQSG94AKpi78",
  "key22": "e19cfmMavdBZuMHQGyNzkkwshQk9TBE9dsdj4bxgVjvqS4PgnEPSww5rbb6c1tqn3TSZseAW89yUjweS96Cj9Jb",
  "key23": "2ztRezQhLhG7ayLcMBr8Aav3GH9WNttCEgTMQrobq3PpGnhR7ArXuGsDyWakW8JrF9GhKVWUgt14tDUFWbgTPJt5",
  "key24": "3uVND8B2d9Jbng8mHLk2vD63uRhcGFHw1jUz4qxzzcNbVWMsb3PwxEqUDigdahdxHVK4AMY2GmzLsuZG9X9cxt7M",
  "key25": "7rZDZbEDGASp3EJvLyHZCNa5ykPjwJywTbp4NGE4LhJUv7G5v9ht4k1TyL7mrKo52bCDpPEFvu2UQrAGwfHKG3f",
  "key26": "L3bK9vAbWbBKKg8rqte7eUaoezGXvLonqw3Rfsd7GwaEKiRvXUzPQF3iTSUXF9Y35WY1fGNdsBpJELVYQgQdXDU",
  "key27": "52o5694qYV5eGhLrkcWg23k2JZegnToqdwUZXTpbymRcDnALjFeU5VtzR9BZB5oeS5MnxQhPDpZTsVVV4HjugH9x",
  "key28": "473BJGUWiRbM3AveDbihJG4C22BketCYfws8fztCNZDzDgTs721hTWLGvz2z2f79dJVhCG1WCXHijAXZdJr9qok9",
  "key29": "5gVeWfmFiZ91vvMHkVPG9JjypvNfj9B2FGdo7pcggnqf24xsDfc98XqxcnEwtZjMYvpqq5WgSWcSWvaqrT8Fxyia",
  "key30": "32H7WXyfgqHyQCmC3aQaZ9oX3t2Ssqfq5q3bt7yBCpgvafQwDcKcuDBoYsSHC2LTQmAqrko2LXWaGSe8Zb9HDXJP",
  "key31": "2dfaR2szDK66qxjiff12bPi8WRyir3Nt67M4UqqFPdyu4nWf91MNLgfyyRC4dH8c57bANwrSGVaB7XXcwHpxTGqV",
  "key32": "nK9yfhyEVdVHRbTWA3AM8wD6vA27jRSmpgPhr1Gb1rSE9mvqsKzKJCvyEm1RYTE9Nn93j8Vcy4VyRUSBoDLaxqJ",
  "key33": "4T6rqyi4iqRP2GcUUZ3gkE83Bnr37nCXWPRHmb8eGU2qYPJMxpE3h81cp2KHEk9YcsrGcBXeygHWnHk2FJgPLKTp",
  "key34": "2tA5ZkJvCKshsm3hvZywd6Au68HA4yZuRLi8PZfmg4czmgscpNtZfGft8B59d3kLJu7E8EaABGthKNEpwd7um88T",
  "key35": "3GqxEKYn9LY52RwL9fXn81JB4E2ogVHh9yRCNnu6T3A9tAaoXHLpMKKx16A9QiAw4cEgN7mmyJWFZze5bpYSBCMz",
  "key36": "wWYBKVii2CpyRKRp4k51N8ec9TTvSJZh56eyCyKrsL5HUkLyaE2yxxdKpNT3LpRgy7Zpk5wm7uKwxStYxkf7MZg",
  "key37": "5be3tM33j3K7j4419hWE8KGs3eZcfG2Zgh2bjL5U3bxcH8uPnnkAYXc2cjQNwWtSAa1gLAiPYubdm24FutY8yXy9",
  "key38": "2rRAuY23Y7uAgDPDfxyJMvAHqAddHCJoyXCrBfPPjqCm9F87WVFMyPTBD3X7LbSS42R6GQ2vdCSuL3cakhNFTv8x",
  "key39": "3EDxq1sdrBWwgvV4sippe2NDNfTsLWgrodoWPr6n8f3kvR6DNcvKHWjMo6FCfdWwZ5EGpqW3co1aqKLdVbxmXoFr",
  "key40": "4RgQxxixqZLNrCYpMKhzNi5wkg3tpQwR35skfqhwkqewxJSeUKYZib1p3kYAcFc4QCUby3uq9VF2MFWvQ5FntX22",
  "key41": "yKhGrtkngS7THkR7MyZN4NKD4NofwLtr3LFUaq7GhPU2DzwY4ybQEu7kgvjB2Sw7xRaYXMKhkNDLjuQ1qPaUJ2H",
  "key42": "3k8UifYb2PQfBTvJCP6k4Qu6DWHPuHtAtYJvDL2w8zEskRcDZFxVNTmU7Vs5ZjYxPVDhCGVe7qmzAQd9cDjZcLnn"
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
