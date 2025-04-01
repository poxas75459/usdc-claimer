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
    "3cZBkUtwgdqWhKHZzVaK6pkeFtYB2ByMVtadaj4QkY1MQVuD3JLDQqkZ4GWsPe7e2eU7kvM5tVAEQvqmmH33aqGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVg9hXeV9qzBfNaGNtXbunMu7r8jeTknAquJvF7gXmiU4nQNndCEQQgX3WTtd8d5ADDAq2ANxN4RfhWZ6RLsDJk",
  "key1": "4we72BG6DhCWMqxzzs13PiUwUQM1FZdFLenc3p9nPYAxXp1rBmgL2WcVHD6r7fsNDaGemnDENSoKhpKtkgV5afNH",
  "key2": "5PnpzcE2GJfqRCei6voGSsqtXTtKBqGqz7iUky5F7YvfC5LXekKzStJE5Mb8x46o1kVjJyCs4ENreC93As8oETLm",
  "key3": "4f33A1isV5hjDrC4AxMqSDDXynuJD6616WS4NuGpbh84wvCpnpkUdDtvUrjWswiE55tLiGNTWkwtToQSDmEYXW9s",
  "key4": "3s3sJ5Z7VEpeXv7yrkQ3jpwiwxqhmwmv2QXSq8FLYZevoyiQkuVZsBbgxX1R6dTdRcqXKyoeA6KGN6oEfehewg4X",
  "key5": "21NyW1jCx6Ko3BMiZdFFN2C5G7pEJwhB8AWVbHWPE4WRcRXMfjnf2RDK8Th1cTg3xE6qQnrxLRYer1jzBERtsnms",
  "key6": "4hcNznrKY5SZZtt96sCGQ2jJwAASVEJyjPibRBKRbac7ZZJY8NFheHZ3K6AY6f6J9EpB9JbR8LbSxCVa8oKSLUSD",
  "key7": "UMEVwdV7JeTM6kNjrJgedu8aFxiKq7A8FbqpjgypMWEAduUsjPPop9mCFUuAjCYcDhbWAaWZrCjYu5cScGdmXjU",
  "key8": "3aCRLjvsp8LFU6hFJ7f71gVQthKRB1rq73A8JjUUtCYmo9h7JAS9ngvvT47YdjUJkLWVRJmqxudVQ3dmW31gjCaT",
  "key9": "2A473FicfH5GN4RJ6yWYo6G6zpsqj4Ezmh69VzmzAvVYoUGQGh54cxx3zEgW7opsnbQMG1M4t9EaJoA4CaHMNBZf",
  "key10": "2gDsXaHbuZcSQnBT7Bh79qXtmYmFTAFT5Twoeisx8495N6ESEPur8R8dEQk9qbSCSacwWcQC6BdninE8yTCcftqr",
  "key11": "5QYHifrsNxkooPV8msX6CzyhHFEZHKSdvEx3N8rMMsnp8Y5WPGnB78YKSBgwYYgsvLwaEssGAoJT3iH1gt2hYxaP",
  "key12": "rnqZ7hRfSHYVdxjrLYfqyw1iwR6igenoctkEcudpGbMatfrVyD5xxMXz5hZmYKZQF2UcnwtGHMNmYxtFyWjXBhM",
  "key13": "4sZqeDCqCmpZHkGrSE4fUzCpdRuPWx2D6ZhGYnyKBfrd1Pay6bXmHT6R3q8DPwny7opVUut9ynfr5kHnVdXXrTmg",
  "key14": "5LtDTLNNDyuZN6WGzCjBfbv3KTzFPCLEnfpC7TjG3XxoNPrSCKJ8GMbDg6uED9P8vq8NfsRTx8TNz7ogjrnGsHtR",
  "key15": "3E15PGrGGL9PEQqGVdCh1hZYpLpJQKmh9f2DRjBDMgnyrfDBz2424aUZhiMYgMn4BiuuHeEg2Ws5GPJhAAP2xuKA",
  "key16": "4wgzfZ2GuPYetxLXxqvpQMjytoVhpFXFGH91Pns1iCg92PzT5EDsjWca2C3AYhH7VhgKdrHpTaVMZpMDck9T5hkJ",
  "key17": "2SdCA5pA7PU7gwdBpSyB5syuJ1WhFypPcZ8zARmzHKbD6k69qm6kwLDvcorNegdWb3ut6EHGyMaxXw89TFaUJHYa",
  "key18": "5MPSuJSr6Eqp2cfEZpMeLPX9pCndeDoYQ47byMTZY97vwgFP2dgssUGnfd2srwKGTmaZ6A8jNhjHdNT8mKbVHJEo",
  "key19": "M2dAVZ1u1ycq2SWQkAjNh3KoPD4PFbLxw4nkj9R7zxWe83sT6kaCWLFPhX6M45QvykeAu6ejAtsBRibH7uQRhap",
  "key20": "42WCfZB4H5y9v4pj2UhGbibkEP4kcZU1yEdzHmbPtkNAU1oLadXk4TVWv2q5jJvm1Md6tUuSLMabiunqPCVVf4Pv",
  "key21": "5AWnHZ9xv3sw3VUyi4LBabo8WCcoUd3JLE14fy3w5qLv6KjJWWGxDLBqRjSU3xCkTBAdXJUSn81Rzv2CMMbu46Ax",
  "key22": "WZZ4jsm376qcWWJa8Dp39jK2PoKDLomuuiVk199qG18FhxEnYCJf3QDamLUPhKAfD8hvtxZ6RwmFNCVgwag1Rsv",
  "key23": "eriKwoeDKZPsVqwU8KHsKofCM4ybGw6ycW11GMo3rcuBhPJ44gFHaD3uZNQJ2Dv6KfaRmfqwh36Cvn476hMsk26",
  "key24": "4BKQpFGLK2qn8LKMQBqRDXqdbW8y5rhciAsYejy6WJKcHJpxmPLkGHL5Jk268e8cwamFesAY8sHdZoHoWDMLrgqQ",
  "key25": "2vZToTxp6Jk8McuBcEyxvgV6T1ozcaiSZmMdTZU3WBc9bc1XH94y2RkTgKCNVSRrk6RSuwDz8rNKstUkHxzxy1ie",
  "key26": "DDAffDkozsiKpAr9cMZaVtiBLZcooQWy2tw2kmBVSfgLhoebNxmKkG77L2wbYuRwCgAxUMGFM3rQ7XSuejMxBRJ",
  "key27": "45GiC2qp4qzvhY2fR8jgHG6gsiwVo6EVQR3BnxeFDjNrx6g7cjSK18c8ngLJ99XQysd9UPjBPmnRgkazQDXYrm9y",
  "key28": "3r4MGLVAPXUahWL8B6yQczuLFjirg29RYC3mdVvQAPLubyLEhEjsFQhkBnt91A52rQZSiUPBRSD5axcoESjzw4g8",
  "key29": "66XZhqzk1g6JsdnxoShYXboTTYiB5jqMozchukpbKRFLHS4HvwZAdVNWatqtK1wCnUYmi4JboGXbBtLVg34T2Dt6",
  "key30": "25thyGR7hRuSe2Wn9NJVcAPMCZ1FsgChuccs37WziCtHEFFzaP6GNV5w6RkgYCuVXCHwikHPy6kzcEtYpfdihed8",
  "key31": "hQjSyMubZKFCftWpJMLWhPHxhfZeX8Sk87G5VXNuG5GqLuSNe9wHbaHvdrcqCeCyBZUzi49rxyL6v749YsNSP47",
  "key32": "5Y4nm2YyjLRD3ZcpPmQCTXBhswYCFVegH9CsD4Ahx2NQcF7YTbs29MAdXku8NYieAMNaqnVSgF8LCSvt2Dp1GXWa",
  "key33": "5dWVYigjocNcRZjrLMjZ5VDAjrihKHEh8fqU6D3S4HhiHbkuRMkyqnaT5SSGcqBiDewTCnsCxcJTpYr88YJUGDGr",
  "key34": "2adhV57j4CSvXYVJPZmorujzjDdEVdaFnS7UsHCoh2MsopcYRV46dX7jTT6aJUgJfjtBA3XFoiwBUHo5wmefMCmF",
  "key35": "5BBxJh3tpB5oXVvHCoR1bZBCEo9QY7L2dkzmeGL6YTkPddWE645b2wttnK359ZceX3LkUuotN1svcVY7bsX4F6Lf",
  "key36": "22QD3vWvyN3P5uztph2BskVcauoQi2mrjrXzqhpDLLoCsUf27ajRmsMjyhoNu4KQVMzerGFw16xNoWySWE2XnDiC"
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
