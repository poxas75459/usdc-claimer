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
    "2JafDV3Ap4ky5v295U6Q1WxdGsPK4Hdjq3K3cctP2ECAyag3NDfgAKysgcKahd9uzBSb9bkPGMKXdTv4E4Y9PfLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZX4398gzvtaKYHU2NM1qqf1YRm64ig9tBJKfm4L5o5x7noqdXk7ZnhkAt6jsZRsHPnZjP61hPSv4pqfYqK5Qt1",
  "key1": "3XpnKAjDwAE4aNx7SVrjvMy2UYYCUZzCDd6wAwLR9vcraXrWoHPixRzuLr54koYtNXbUkdSgDD2gTjmgmRqDYpsq",
  "key2": "2gY9KZtKmdj2fEUdxovBiV213we1Ke58E8wrqgyNSLi1CWrVMrg26fRCTFmRvZJpCmKRHxHuWDTEEzhwn3kVGJZq",
  "key3": "k5Qb1H1M4PPc5G5jq71BEe56ecui5hgTQ8vfLdTyGrfTiEYYb2V3nqDVfxZbDLEtaUbbp9M9x9p1PAGVGPdmeYE",
  "key4": "3NamVhTQ6NRemkcqdfRdeJfaVxZK9mgBfv4DKYZYkcaknFyQ4quqnTYWxkB45voL5MxF9GdiKxsJfSALAQ5cyJCg",
  "key5": "42tQsdvgQ9PGxzjw8cStzpL73PjaGmAJzkBhQYyRTFeXgYyVQuM6QeKaW6rZpnaRbt2dSDSfyiBesU5ZWUVnBzec",
  "key6": "4TsBaK39nxFHRD34JiCwZa5FjTH393v3x4t3JSif3uZUxgn4V851ivRNbcPGeDWzTt86oeoUhyuAwxdHA5KFnh6t",
  "key7": "5VHZuSnd1k8vdruhL4No21v6ZR8rECo9w7a7JVU9bK2hD8TmxHF6pBEQZLQyST5B4QejZzEoac5GkH5jkwoy4XYx",
  "key8": "5GDKAzkNggqgXBQdQP2r49Hi4M8BtmUj9cC1sHJNHuVqo2kECsbVxBT41A9tqbGaKKsQgyEhNzxSz99pHRjziqmZ",
  "key9": "4scfKZpLRTSAgKNHBpNRZot5mqCorzhSRVC8Fn7CETABRL5FVwcH9EsnDz6qQqPMuu52CcL6JMtsnVhWKebVoVL1",
  "key10": "GLVVGAAznLA551gR934uy1isGrr2jFB3exHX6pUFR16XkCpdrF4PxefFJ34mhzT3sGCmB7yDyhPGfTie2nd7abm",
  "key11": "2NRkAe5gq1czUjCxcZi2gd6EVd28wc7U5Tn4PRMndne2xRcTDNGLY8TiHADkWu6EbeS917vLgCjWuYbCSL5UHpTK",
  "key12": "WpLrWFPj8Spvgky3c1GheyYWqFXmf1NfetERnh4jsSs4RReUFjXJj5GLmysoBsNPrFCnwrLJZThXN7er6tTz3nt",
  "key13": "2qGAfrEsEfjR3o71JUzTj9Y743ZYDKBmUu9PqubdXzGxTM1Ena3rYDCJHPeChCpiogUVKwoFhjLBTVrFWXuCCU1S",
  "key14": "pQnVDTG7bJAKuivWr7Th4imYyKAB6PDj3r8HDBqo2J72VGSuxq3AhtANPBhFFtBUTC1cyGL79mGoBxhiPH3jzkP",
  "key15": "3E82P4ACMwTp4W8c5cv8GJkCNHMtEzUviaV5nQQNcaUcoNmPVctZbADhpLkf16aVAD32749h9N9HMqwoBZA6BbST",
  "key16": "R5VgsXKHME2TC1KbWp43F2qssBvPVggS17p6CnbcAk6jwDHyV9HkyYXMcyCPTEHT4JGCCTo3JXFgkfgFeU41eyQ",
  "key17": "58NrB7VwNXFyf1vAQ5iVeYMN5aLYZjMUAs8NWQqJWGieP556awFW435TouJhgQruKVAmYUpQXVSr2nV6DFro1Mrw",
  "key18": "52nThi3Kfq4jivJzC1hinfHXJX9vdk5nccsXrfBFcNnHM4M24qps6nz5B7jqSHzLWbCKXQAVHuXLGEcVyMKFQjBL",
  "key19": "2zz1k4X1rdaFDV3YiYH8VoUpti6Fg633XrE9kL2V5Ct3pPv1dCtZ4gavbXnFzEMaw9Xqzo36zja1cjjwxtS4SDJv",
  "key20": "gQDqPTNFzeymKv9aeU8ChMnQ8xWsG21P99qjjMpuLwmJFtcm43pCjDtsT52ePUn5xwJPGmHZRjWQgBMJUhhDSPs",
  "key21": "4Df8bN2egCmVF6nFxPK2exFjwnPZaosNCD6YHonXbM5rhPrmcJ13XdXe8e5ezzN1zgC5qgSNWCtFh3RKoJRzDwUX",
  "key22": "62fE6h2ENhMFSbTvRjNkkiqkDgZWRSaX8aRW1EboiUxrP3i7Ypz1RQxcQ5TJ2pAXVc9Lo4QmjbCYh6MzMpuYC1sL",
  "key23": "5evaMndHUvg9kKDRWcuQCEqa2KzvW712saJjLTo68tDUof78oT1JhdXFbmGMScUe4agQ7yzhmUTSdvb34AjYhHMK",
  "key24": "4kzBvksBYQLF5z9xZz6fCxzedJGEh8xYKYiG7QLmbHzWWB4N8dcjv9tkdCFpMQP4jcKwNUQ6jH8kEdr9tYL9mj4X",
  "key25": "3o3BRRf9jhCNHLbJTbYT5SL27YnEWj8q3gF2LJEqnmdcfv6KaAWH1jVHq2oN7gZjG7venhUhVhe4gGLnupxjoLSz",
  "key26": "57Ht8rhEvVLZK4DP6HA5kyQXNTu9X5qrLfSB5EXc7dXwLpgKEAzBema2q6LEN5YSDsDQwDgexxx9LvjBwouSQQoV",
  "key27": "51Bgx1XjZdEvaGZBe8Revn3kh8K7QWMqRAEFHRFcX96AGUX1oXYW3SqvrxEcs8pvLaiks7AmwbabynbfPyggxRcN",
  "key28": "3WfMuNqqWZcCc2KEZVuSGsQvuuMLnQbmwgSUWiUbYt3ryrxoRwnxxsNKmnqVp8JRoit73AkuzSJVhpD9wRcDRiKV",
  "key29": "2yuvbUkiCxCDMnYpVKfFr2WvTaFUUA6PdWemw2Gfa551XzVVyBuJ2WBKQtNMbXraaRnAqPmgM7NrVL6BJuKDdQHz",
  "key30": "5GzaPzY9VgZiPgSDCHsVbNtLmHNAore6URv4nvmormSzRyyDxsc2FM6sRTS3mtgXnZxoj6f78jAaBMYDTQb9QTtj",
  "key31": "2ALMzDK1YHNd2E2TGJFECmGVQFn4h1qXEMnQBrH5hcFfD82mJTqxkRh2raQCZgxZKndtfdzZYVDrTS6z96xuCGw1",
  "key32": "3HNqjcmmuaeC9opRXgAumn4fzynF99GotNaMBKNWCTuQCB9fb9LvaNZBnF5cUDE5FABTswKAvwA5xAem2iN7Sz9d",
  "key33": "3jp7FRX6w8XbAwWTDJWPhPmz2MS9cMQoFbFqwoyxmHRZuho1CSFWrDSdyspzSrggH89sSwhYuZbGjjYHsndtmowC",
  "key34": "4iHUDSsb112JogAUVaZzaHPYQTeXvDvzp1a9SDF3HRpMfTkM5j23rJyX8no7DECFy159XcbALfZMzDx7MuVoTQni",
  "key35": "MnD2x3Uyyk7GwGeZnZWrJ8uFJ9ZEChTwSBDSBXUriSMWAHPMdtTMRFFafA7oqdDcp1qTfzHk5PVLTg5wbkDmjsh",
  "key36": "2gzNtaGYjSufuKBRmrD8pZK3PKQonQBfLV1EKJR3vxgwRfLgvRKpQSj9q9S27JrrQxEDVZMLY3gW8gTRd4DgzMjR",
  "key37": "3a2wNoT6Fgd2Sj8TDYgXc1Qzs1UYCbvo9GsvcbmdvMopwQkKChYTz9NPUrsrJdKPCKL5aineWvxWhU58D3BdDnU",
  "key38": "5NERAZruDsrGjArHWWmHrJFtpw3wLfjXmfF3PtKowJxicE7feuWAT1Mvr6aanHTGhMyXDBVMcbfJw9kXVoVzyvzp",
  "key39": "2H15SUftgMhMnbW9VKf2uKu8PRvsxj89y5WCyJzJa8HSrR15UrtPycL7Mfs6774W8bozQZwv4721Joyt1ERpKjJY",
  "key40": "5ik2ABTDFWx8NGTNtvUnyxHm4Mzn9GvwUNkt9A8QiUMUdLUT9JQirAygDxVQNUPSS6JGFbG3wMxBZVMbR1BCZEap",
  "key41": "5Mo4Gj4FmS5keaeP3tyZEzDMtx6yxsJsYzCoiSDE1FkiRpSrZGty4DvERpHjFH8yGJL26t9W1cGFJdBdPxvNM76P"
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
