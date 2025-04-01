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
    "2JXxVquNtJAytiQab5HxHUsFAriJ5RGn2H28jXSdzi3q6yqEfJqFeHJynbbfshyCtjs2MU28oD9SpeZDxizN6D3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CG2gxwEwBwVndunN9y2k82dm9KCGxbMXUn9u2Mf5e3i3LT9CKkhuAUxK6YZUY3f6iAJGBaT1fsePKAzLwsz1epo",
  "key1": "2pRTbiRMqVjQZwp6YCJdEgRQQQFnJTMypkj2ZDrC2EvUNm4PT6XHWJFzXLfJZS37oNNtjPLJkcjq5mL56F3N1ADa",
  "key2": "5UuxUD31nTknucAhCN7FDXuytv7PpVKngQHJ6zCCnkoaq3fV7izQjnEDuC9UbeLNzin5DZLbCzE6tF9oNXuUevp7",
  "key3": "61uNtx6zPKdYJ1Sf1cHsVusRg5YYnABi7j8hGnjJkHZpEjuboHwaFAvQLcpdA8fKUTRjfcCe8NF8gqFPiGAXw8wQ",
  "key4": "4QR42AcXXy5zJ1jEJa3QruG9RUbzaJdi73AakiQjjCwLtdaRyuRw15v6k9yfeTWSnqJoMaeg7dS9CqAc5M9FzFrT",
  "key5": "4HkooRaE26znMNua7yevFkGheavmMUm64LtPqsbGxdRPVW9PhefQyVmQcsQjHJRcE6sJ73CBhFHDM6pJYXAKxg8d",
  "key6": "5BRFa3G1GUzP9J2QtJGwTVXL2naXKQtew1nmT76dN3UruBFRhtUnfuduqeRcKQH5Pk3eq3FCzKvXRUaaHAtrJpsa",
  "key7": "35PJVqTBDgh8Vh7ERDw9hqwiKR4An3MGwuRKgKs1czz2EVNLty5bBLy7iErAY8ry7hh3BhKjSqKujwJuNYw1RnFA",
  "key8": "5NLPuoyTiaXDy9wnjSiu4WczC2R89sCfNSPQQb56rBu2c2A7kuqYpPfPp56DU2HX4WwDdeo5DfDQMZEMSx4otQ7c",
  "key9": "5RXCXLTXzJmvvSbzr1SkqfEKDgMS92ji8Vj9twYu7Arg1BPZMzuGKPeZ5pcJA3HZ91j1UgaV6LKZezRPnCrgeAxE",
  "key10": "5Df4ZYRN382E76LK58UVRxuaqUFkgnCRRC4rtYQsoWFkri1pvTLHiqQk5XztLtJ9z3kW5RZgQ3cm4Psyyt8tHu5P",
  "key11": "3NjYcTy1aNzRnxeQHJ8Q8SQFZRULKjrQwANJkwzNQWPfeEYwnTfhnVKsJGbcUNMRveeBY4zaQcDrRUDePCzpTAz2",
  "key12": "31iq8JAwzrs3YBZA2Wxzfsi9mbHTy3fhiVhUvRKDta2epTqirxP2FdskcZL8apH9ayf7UuupgDbqqzkuYygTunoE",
  "key13": "3V8hRyTaLdWvMtxaH8yfXhTLK3WKinBahAFSTkrX3xyVKGYeSrVgdQhvfABFF3NQjEFHFtYVk9Uo9yUVy7geyfx8",
  "key14": "4yU2bi5UTa8WAydQ7o1xopqsyBsRbe1CAUGvtfCzoKbQzaGGRnDtEXwmLjdtPw7SZPrhPWkdmDMoR4mMANfcNxW7",
  "key15": "3xkdTYwwaPkAo8EaaMEK7h514Gt6K34FCjTD9dviCcesgRQGnE1iv6HSeYr39WeVzQ2FYN2Qkp7Nha5PAdUQyaJE",
  "key16": "5radgy9WVUww5cjUZiyWtNBCbj6QsJYfgcfp5MUACHzGcW5CERZBJhDx1XhWkzm19Ln1g8HRbzDZZz8MQYd6orY9",
  "key17": "37rXT1hQ8VapRx9mC6qooe7vdVwDFNMrqtQwphxNyC9RSYiZTGoAqgHMPuN5hWVVkvHs6NPRaBwQTzgnnhw7n9oh",
  "key18": "GPpLokKv1Fkb2irV1JGcgy6yUP88zRYcJ8uYFHgKPQMKkiJD4uMUo9n3t8H4dRcUvVoCCgrR32qHbMPyvDNXvEu",
  "key19": "3GXgMX2e3SWdhZuSGfmNZFv1HHoENshs753VmjSt7uVLMgCTjrzUxBVyXdhnVGc8DHxP3fKVPfj6ZFB9Rp9pdk18",
  "key20": "63NwNWLVcZBMUnhZQTcWSHfFfMapTjrMhsSeUar97vPoQXYcYXQkzHP3BD4pgkN5KTsQ1hof9SSrjPEez3gLkmgH",
  "key21": "72w1NhWwiVwvgSoFHxk35bwS52aRzygYmrEV1v7jtkq7ZXt5PW5d6Egt3stU24v3NjngCbL5F3prZRbkCicQYSf",
  "key22": "4VdhLpMy9JNsrdZsUUEBAuQdGn3QznnLbZLYz3MbXTdksraPCcEfC44Dgyth8iYinnKEsCAbWtMQMPbReZ2dWJme",
  "key23": "3Jqt9stWJENg979RmQriT44YPhJzLApryDrjdvdhXBPjVq8J18fUZsGYn8HPJKfJcRThjPaUbthzT5qMbxqWHLed",
  "key24": "5HEH8Hxw4A94uim7XzbxEivnhqRivYdsWDHG85yC34uC7ptCAcPVGPxgtN8x6xLiQhBHyzCbe53akWADtm7gqSAT",
  "key25": "5gdCkS33AgVF1bFX3RBGni1CZ5kuNLMvoUAugqDDSdUJ8yGBQzMR9giTEYeMkHrYk7dFCnSuAA5fPDE3dUcRhRSM",
  "key26": "3Z95EdSbkypMDDa7TKogHvv6DvseyCrx6JF76op9sXf5GBUa2CvYKKLztX4ySfysxRapVnfiYx11cAedidhRyCzX",
  "key27": "3Ke1gviRy2LX8Yo5d3qgCbg4KRW8qmWM4S4Ud6jn1BLPeEAw7QZFrUeXPobNi4zqc2gCDefQc1S9PZuHL48kRUAV",
  "key28": "2sCmfxo6s585iSfgj1GBQJi3SSzXCJcXVeMZyRpMPQGcGD9airRCR4oBpYLJCJa2y9Pz3EspoPMHG1LBHLHebbpz",
  "key29": "4eLMNwuLcdZ3GzvNnmUsTDTotrbKBu7jDx6XxFFyhud9BNqPnf4NriVuU5MQzTMENhmGJU3e8GNf16eKRHc2RpB7",
  "key30": "4kp1cJSjArodAX7qhPjejbBJsbh5c6aRo5JPnFtyZQkHBMuEJ7dKmJG4FxBadHa9VRT7gfidApXDEzcGiUDWXT68",
  "key31": "UNvC4TyeLEB3Hfuxog2U8G6QEqPa5L5s9kpodw59Xzn44d9FmVVUCv4bWjdjPDX55QopdcPjW2ijc7DKQmkF51x",
  "key32": "5VcDBj25kmMQziydRhStCjHNf2YAa4reXj94KACdrHkoznRFt93dk32rNpTcLdrngU5ZuDQjwufnHTosTxobKKGG",
  "key33": "3PLMPKGPkzGbophQFMEFUGqmiXkMdSHt68GGdsFsL83PanZWThYz3u4yoBKPVMhVrNEA6M4xNwrZa7rqmtD8i5B7",
  "key34": "2pNkGSx6uoz4d3hxgoBk1q7TAyAvfn889X56gPopwdyRhVppEA223j9PUvbmd2obJfvVNTGxyXsHpdKNcY6atPDw",
  "key35": "2vcssMD9D9rYeYCPK77fxR7vogV33B79gZjKbQZzkTfQND8Jn3D7LmBcs1zLSGJUWgrQN8xEsMUEyymyaZdNQWka",
  "key36": "8gur5TtCH29zwdnjGzMqosXNRYuMVW7Gq5qhGCsFbKCXEkFRFxRZ64a5126P9pLQyE3UfgLquYJtxm32ofnDSeq",
  "key37": "iTVdYHAM8ZGUUgd6vV3c2i4ZKErqvrXWkJyHhTN5azjv1SM4ezjxcmHaFEVAU2MysBPkUKH4ubBzhHuixKtiw3g",
  "key38": "4rj6biKibW39AWyBu78SLVumdfZzNYej1Sc2zpaEYf9Eohkn9gxJmZSJT4Av1iSzSKzgjMG2bpP2FUbu9GHHDdmr",
  "key39": "3EQRVYTZzvtySUuh5Bs8czgZKLm3zahupBuq8ah1EuTCPEvBRgGRH3AGxNmQPktERfY97qAeHaA4q7d7HZQAHBC5",
  "key40": "4zfrhhvRvYspoHCePEtdqQR5foZ86YoKQodipN5hukWEGYw28ZqmMBLXpKnUSYWZL6NBbLTgnSfviMTXER25jJoR",
  "key41": "3r3pYfnv1gas318nJPTMmbvTfVGgfKSXXZ8qmyyRYMnXF1HYUCxVtXMKwc2wi2gEeyfUDdXZFWbCeudm4JP9oSyP",
  "key42": "PDj1q5Q4wRHC11hnz1ia6pBW3fPM2WKSmfWX7EamP5iF14n2EKhRSjwMwZt4jZ4w6BHCe3dp7R3VPvS9yU1Levq",
  "key43": "2ER5hbLvY4wdyUTWWsjXPEc3Umg8Q6gxd43BeR5TwzqjxorwG1oZApjDBStyVFxgpbBtLi2MTYRXRAWntgtc2Pom",
  "key44": "2teXoMU5uWLYSFArX64rX68ybJ7EATdSJEUaoD3hLGZwBgQvMhzPrYYSdTeRYQGsPCXKTSCiLrqDXHeeXjUnHwGa",
  "key45": "3sskJEH896222dmjr98toJpNCrmaZotbcj1X3EwSAdNxV6UWqXVVvws8gw3UweWCqQDSuh8ddPU92hmVCqRbSakw",
  "key46": "5UfBPjXLw5qk2xNGK9PvjspQSbuEQBzeHpcJBVNaghKeRnwKS8wnQutCzMxk3xtbxT4bz3AbNE9MSAWzqjMUzPxD",
  "key47": "2MTanUtQxnHayb5eKomhS5jb5pF3aSzfxcEpNvx3RmoMomCLruPMQETGtd36qV5ufBFE8AEA86W6EEwsXeT9UDAc",
  "key48": "4z2SNdwdCWgmTrvMxhsbQ7h3jJvjWUpx5XHoqfcKFDZ63rRuoELqkuJUYdUtYGYC5jKGDo8Dj6gY7PUsyokqJ381",
  "key49": "4sfsxNbgqWrpbJ1MzT2QXNcr9P3GodcM9Y54aeyp3RVU9iquv9TiaQBS23uksaY9A44HL4wmxWLeT4hEa8Nd7ct4"
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
