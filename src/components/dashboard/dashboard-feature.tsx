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
    "4SgCwwWmACAz9ra6b4V7TmLrwWFKBpimSZzj3bjJM64uBA8AMLuLUSWfQ7MR6Rc6cuei54ih9TiqP3hTtcrVmACm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvMSA3yNmmqvEJWamwvvzMyQXccpMrE78D1HYNczwbbdnqBDBwFxUPe3AXXETUVCRZCNa2fKYt53uAijdiAjTR2",
  "key1": "2xikqyepgX62vL1h8G9YciZZda84LeKayzKZkw8e14KwqVxE5RZ1x4njLJYLS3f7p6zwqpokXyoLCUrRrCQizMNb",
  "key2": "45b7LksJj9CCXAoivUVB3ewomgRmbBGsz7an7bN5enMdBv5yvKUZM4tnrv4SSBvzMKxu5N7qrHSqKF1oehwanz42",
  "key3": "2enssb61B6W7m61LJsBtAttpCDhgsvhWRRPL4A1adi7PByF4XB7Gq7zDASRW4FKGv1iZ9ZEdKPuCx55haTNttq4F",
  "key4": "3ifbkrurkat7Qm3zXByMZZMxGhqAGFRBbhyfMu3PyDT156xN3FJEX2VyoRf1crcSuEqWVjajdLp2WzH3VuV8364P",
  "key5": "62EZJVZJWa8rDUVVufR8vA471LW7HPszZMhna6dXoK4L5UjdZHefZupzPrREwznJ7P7c6vQFbmskA4Dk56sny6VA",
  "key6": "2jyzuhQcZSfNfneV1m5vDvjB9tgEcUeuEoEFWt1RABkwyzGNmfKB26uGTkzy5Znhs8wzVQD4RDydTJ5MVuC7Vsxm",
  "key7": "FRXS9W2MLbLg7mi9MW4yyFLgjvnnZ8Z7EUVxZG9y5h2Njj55WjbsB9dbFDNiVxGkmkQBy7UHEiQxoogrC9pgQjm",
  "key8": "ngLMcL3xBnvmXE1a9rVk3YJbFbXyeFLQDKvTFT9hGEc8TGdDLroHZAkViPxqqHgGnSAkXqqjSCn1Wd6MR4fwPVW",
  "key9": "3YoE4DMvCfeFLr3cjjwmmBQLazqmPNNeomYN26PSDLmFkrb8TzjLBx8gFkAvz9eYTuuHesEaUUenxy9vhtyBEviR",
  "key10": "4StdRiBsC5osNVJbbNRheuMyySxYKhtUGMfUSTiDM8qpn5v9e7H4DQsV2sb1vHJGiTLwvettHhbg284ZCnjJ8cwd",
  "key11": "5ekRoVvoizeeruv7RD4cyUVPDY7H8KZQ4wXjogigPp39gMzMinNPfLabsR12yJ9aMCkBSc8Ng5tadFh2K93wjZL3",
  "key12": "43qkn6Rx4BPeiEF1M94JjieXhFURTnHzSU4N9PkamzdGaufKyVkUiayssRB6CWbjSSKUxUcW4vaZHAypj4KKUTnG",
  "key13": "3WVFKapZrdXzkX1Rh78R2mD1TWPf4QfEz1TpthrGNxs1j9htwfq3xhosNfecZePQeKXt25H7v2uFfNuSgikAb6cJ",
  "key14": "3gMVDjN3QtWzyRcZTfSn3KJsLxe6f9t3M7WSfFBjUwHZzQSiEsQsifod3QqnFw8woX9GJ83kRniakCTnikgdCvTA",
  "key15": "peBuB1uMqLaa3HTp6gVHAtnWgBo2gAiW2RAcSJU79GUuqjJ21u3YSP1ZfGyi6vGZ6upSEQJood56daC4iKcz4J7",
  "key16": "22DvK8yWmuSkV9tDShbN8jm3HnATJAeea8JndTED9YTiLj35P9fywR7jff5yAyKtm38wvfjWWDW3XfCPmBqPtz58",
  "key17": "5LZyJKTFW8syjp54iNDSpTk4fkykJc6kTaCghgzWfgMEh5r3e7Kgd9pF88kKkrBaJKLNUeAis8gpRGhvuABvtPkf",
  "key18": "121dijWYXPPQjDXjx7xhhynpV6ainH1Y5SaztjgKqoei86afx5tnwcaTqjXBT1XKMumeUkVoaVPM1xKjGxaNSSXp",
  "key19": "4V6GNmFjdsp6aUppoXy11E4dYqc9uCf6u1riT6eR6kuX25P33vdpWzz1ML9rau2UZiWsVxaDqTstkzmfoDYPPnCy",
  "key20": "e78oNDaavuihQheSD2mx3hKCmGPTFYbiezBGN6rgqBfHkMVCW1LK5gEL7r2QfDwN4JaNLwtmr9aeYdRfnvsWXZj",
  "key21": "2jPRuYWpXRp3rYsqgyiDprxa2pjv3vZoiiMTafFdLMR6JWAYXuu5YaUhvJdsEpBkJcGgkxQun2SwAqFaPnXPq2Vz",
  "key22": "5qb2haoReqYXKKrKsYojwcULo3JpbRxprmHJsBjZA2uyex38VgGRm3FHivcpsETdZjzT7iGbx5y6rH51wQgQr9J5",
  "key23": "2HHa4WXKjjfWHp8Pyk7h68ok5Ajfw5WJSa4FcjkMfGu2R18PzgFwnP4K2z5VUrXTn6cPfp9e5Pm2VKNgfCaEeSML",
  "key24": "2r6MFsZ5YDRNorZswgQd34Fge72srFMYR4THwcsyjGQYpcGAMoRuX5Tqz2Bkm3RVPmMDFgB6Bz5Um6wDbuxRRY2c",
  "key25": "MqFUMm87QMPTQdBpvkkdQekJ3Sn6SyUPJ1Wy783vqkncsHsVYu6EQj271ZxqwDWa5SJxKUT5F4MhXas66JkzEjj",
  "key26": "eUr8GP974bTEn527tG5hXiejD4GCd9h4mmBeJBy4kPWPw2GYbpW6vbrDrhPhveY4xSi1EZJnFRjUe4EtwwQwF1f",
  "key27": "4cRy53v4fFA2bVRBuokGtVpCxVRNGxxZRoJykvT6MMhHgWooXz6mBbz33RFCqH5UQyuYGfRem87MvR2rpDrihwGK",
  "key28": "5pyeAFqsisfEAyJrdfzX1BvVAit5zetDU9ynHRhuDY1Bu3WLbRMnFbrh6o4dTWMEVmU7V4mL5rLUSDrpt7oK3v9q",
  "key29": "2FqEbg3wKN7mBQDtSdCyEXA96fxzGtjRwPkfj69jnEN8fKCY5LTFQdc8vU2fB9kH4H4kwENgncysaJrEgkY1qGBA",
  "key30": "2JNb96nrvF7cji8vMT29uYTACnzSFTxGpLU131d26B9HhJAFtR6DZnmsTmj9tH4c5FVozxbbE4aF9ZghjZf81o27",
  "key31": "2V8YAQkVjLtSjrrTWMj2tx3qhFXa85zkg82k3VtKaskzsrvSAhg8PoE1tcDn9sdjV1s6UHRJuxXHYZQvjRk2TV38",
  "key32": "5CAzhwT8imWDSDkkREoyysKMhwrXLRM9WCH56JBX729Wpf1mBtsto6JVdxzfokV3ofZNFjNUX7U42Z3mp6BtwTGY",
  "key33": "5NN92nAzSK7nDbrJuVPseMtgSJyuGk9H76v8fLLj2BYLVfah2UNH8MA1RpdHG6mX2JBnFoYSwuExa6qJVKYnRxvF",
  "key34": "2sRFcmPSk85DftpEn1XDb8X6KPoiiFxVathjjf6LeNJeHjZfB5VLugixDkyT2UPszAJrxxpKjysHcQBgwJMMf4Nr",
  "key35": "YQGcKPVCkKQe56xQaC2ZEn1uwBgc2yUBCWSse9zqwJoK1aVwQgkupUcZg8uwqiKgjTn1RYvzrzzCt1sdg6XYrBd",
  "key36": "3u7gBYNCAwh5Ufsmo5tW8rYEudgqDcuD2wK8HqCsLgJw1nRLZetBu6wBZRC9sQTP99grNzK2NJVbngQsSUysTEL2",
  "key37": "VGvA1mAvLAZnE49S8RL978UXrMmG1a3uHYweHndWCMzDWKPGa8o5hQYWPBGzS529ns98SiEj9oRMCJNtTudMB53"
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
