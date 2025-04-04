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
    "2NLDRXnMugFX1PBgKwxqyfQR6GeWJQafYkz1YR2xMNdUjWGYK8oea55FRbzYLUxG8XzXpeziTSqR7vuN8hiee8bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8gko7nU7jSiaG7FXAYBA4VM2V7RTzT5X5nGZ6F9Y8bYT4ktTdUDuPbymX6j1WvtWSkP5uLTWW18T5BHprE1DaW",
  "key1": "2stpNSP7mn8mdbPvztWHSGimzLuDrembDsmSrL9UCeSTfi14tk7AjDhpVizL4RsRikkPrxpErAMft1rsNaZ6CTX6",
  "key2": "5FF9epy8T5QhxsrGwgRVkxjnvuHg8EKijd6EYYE1RDJGVwbTD18rcbE7zr55Kuz8CHfXNRSgmps86rb7uwGucNrC",
  "key3": "3NwYWcYBmb8oZSpXUfiKtduthcqAko8qeUamq2BFfhtHNyC1aeMgg6WBhZHV1yfqxHZ8hJydNDcvqQUjh5Sfg9Bv",
  "key4": "2P3tXEaYB5mqZ1b2sgqnK5EQ22NVnxpjDkujGTypz5pTk5u46kT38YxB9nMA9msgCBtJP1nxMPdUVXFWyDRTLh6M",
  "key5": "26aUHVkgQTnSb5tRsJBGEMiF1T922k5vsU9WZj8PUGD1zVFzck83VZ8Ymqp1v9RajP8cVL5eR2sVnSg3yP8YYfCQ",
  "key6": "3PLyoDE8axbLeJbZHBP9uap9HoTwkZKje1fhSPSwpMuP9Fa6N5BM8efTZXMJps3SspSQALBPykdgmEZVZeDUfgGD",
  "key7": "2XZZmx6LecWSuH8iV9GPcBkpWmFK5dsBCBDN28ygMtyUCWqMXvGfUgKsBmPfGj1UMMR1cRvoPj2iTE4P7meCAjjz",
  "key8": "5mMiZqNhvDYVr9qMuZEbePMbXFgPRWLKDeoRJhD2UMTWE9nZXDnkZPYSeQStAWmXowSEyuJDfcmSzwVAHtAm28rF",
  "key9": "5GxuRFYeSygVdE8Svn2hN6EwE7YQVCvUUfk6BQ2pLqLspp55BuPEME8PHYD71neAAKex9UgKrdBh5QvPjHpxAY7x",
  "key10": "4z5Ky5YgvtSUVqwpCR9vdS6qra2AYNoC9Ua47YnSUJaU21qExmycjQekTcXzLNGU4trsyDQRGN2RytenaYPJUu8P",
  "key11": "35YvSEZUX7B13ybes5z3LDRyFDQhyE7HHamQNxZ21yPgJYd12Rc166sifrSEQgsGF5TcRr8s4guia7NPwSWYuGJY",
  "key12": "3zJQAmEnnmgcE91nyv8ouHKuhzf7WzLThz73ujFWXJQqwMD3dhXcCBfxE3TWeTqFJV8DDxwwze6hpCSmiD1Yb6TZ",
  "key13": "3BksbxZncNbcxZNxadf6Muvcyt1pxDnGomJAe5MUgeHcmGkyZBLMkLTsRnsrev5S3tiTestjqV6GEd69uCjBVmTK",
  "key14": "Cms54hmwzBhNxN676BYzEbVwJLf7bmFRAMRctFpejEFE9o1SoC1ZrjETFuiEkwKSxU7d5C6BKoxNPMsnPDthr5L",
  "key15": "2AGPThWZAgPwrunU5DRrBKUYPfWMsq1ibra78GDSNAqxiV6vgH2yWhq1u29czCNkfbWm73FhAUXsgpRVXgXPsKHV",
  "key16": "3GdKxh6t28EvnCrJVg4QrxsN7RS2cxdT5dJG6rniVQJ52e4uHLRa9gLwyr1Bbcrfq4cr8QmU8i2UT2T3Eedam5fh",
  "key17": "2SGyudLNG6kct3hfUwoEjKdB8WoT2xX9AyWhdFbHy2Jdrd9B8sHbKhKc51kjo7qhYbntCkFDB1JUR7PtAzSbAypw",
  "key18": "2FruDRFCDNgpBWoTVsRJdzeUKHVfwPgewq5p493i3AQDNAkttsTcBo7WpWruLNEJnuENvm8mWNu1Hbm6xgikFBCw",
  "key19": "4PiC3wzDCVwPe8ojHARKr6aZPQJNMVggGJrrrpFKTBiPi1Mo1iXRofs2fdThP3BaDe5TFSUCwPsLJCSHwsGoERwa",
  "key20": "2RAc7WWqyAHHnF1X6U2iQ7vHrTqdA2aMkjSGycWqE8H5ww8pZbVSfXrcafNj8HJ6Hhm3mPeyrDbbvvu26oqkVemo",
  "key21": "4MFtp4JSW2WTMJVJz9UC6Pv5m1XiFdogQyrbaHa2kkAPLq61rgruRB6ug2FfJK966jkvFABuQZKSWkzTZmNT9mwT",
  "key22": "4HykQY5t1Q7wG8wonU7sK13hP2B894WsRbpYgYzchPNT7povEqD56YphWzpee3Zy9z1WpFPCoXeMoh8nLc8x7g46",
  "key23": "44q4aWzdoKNiqHm4DkAHuzU1ywkcUU9sfu1TE7o6WCeKDtEUGAbnTDHFroo68v8daDcFR8LT68qp9H7AKdb6JaP1",
  "key24": "3e8qe4r2hSWQitU6PqtY381f2R8jT4pKnC2hqd63TEzc4uSroYsB1rvsoEgjyEm268k5dYt9Z4fNE6JmakyVWivW",
  "key25": "noq2bzSJuFLJ1U2SiTCC9LAQzxzq71wAh7jRBQb9cBuvbdo6Vh9oKeWvYm4SNR1WBdxm7rRmPhKiQxcqDbxN68Z",
  "key26": "2BpgFU5F2qoW336zSBWem7zzy52qBTWn3NGNrfjR1w57VFeUA1Lvyg97GGBXzQz11QnBkoMBk3hnuYq2djfLk3Hj",
  "key27": "6MuLoEvBQLsLpSVCQUniLqFjh7W1sjeroStwWK173zfSe3kQizEvFXMTDP38b5sXS6d1nSwsZKnSgfLt72w9FfM",
  "key28": "4jTCRhrVi2H5QDQK2hL9XoQY7RyXgD94cko3jcSxXSPBJs6t7ksneRBTD8h6d475NxzM4wPDCZrECb8AatLy6NP3",
  "key29": "5hbr2xvG6Fg8dL2PggtqZ8avNbfbTuSVLaUmadxHM5Znih2o3ZJZUB6EAQn9n6tHrkLJiDMsNuFr54uqoptVzrd1",
  "key30": "2yZ1v9msXqtdCFjLiL8VVZod7AY5egZjBUBaFLNUpu3HhncQXBwF8LsbWmuJjvb3dud5aGnyyqYy6A9W3dxdQ9uw",
  "key31": "3trATmriJCcLL3ea3TaxRaVfko62u1B8LiZ6Avi9jGiRzNBZM29CegUHBUH4NFLNAmaQDnSTMqCx8958KREq9RWp",
  "key32": "5ayToM8j6kpmzHZdfVVTzr7uE24HLRdpe1iAD1C2LonmvYjP2kAL8SmsY7CRPckV2fomqqLM68mk3x5vCg3An8is",
  "key33": "4ouQTprsAw1TaxxDpKMe5jV7sqv3zhQvrGYLZJwxJGYoLjPGrewVGMk8DuBAc2ULDZL7YDRUem2oCYS4UTWrWT6j",
  "key34": "23dvc1im3854Mk368Xdj1K6WECgoRqJ4eG2pHJi97kiFfjqcf2roewxHL9en7htWc5tpRKHAgsnMpLUBFgS7WccQ",
  "key35": "5nWqucPS95iDxHEyUZDSjS2z9brE4SiJh7GGXvWA2VHzhrfi9jykQSz3jF9MPyLFwKrQmc7JGr5JZ8xHHWEtLaQJ",
  "key36": "3kpqNcv5fiL45S1ufnbFLUWkndXENAN18jQfHf7gixdbkiW2aWvVMxkEQ3xkUdqC4Q5cAK2hV3kMZLrcrQTkGefj",
  "key37": "5nGrrq8rFtf4MKcpKmzfdBEtDCrjnqxF7EaihfbZU4XyRkSaaxjgFc2bNx5ZpBAGquUCSDM5iHvCTmcT1yJvgTzF",
  "key38": "63FHWeuqJD2eTcNrKLaXzVYrpoXAU1mtLwTqXC3S5J2qqZhb23YFJqaeHJvR8DvJAyKgSLmWc9VrCbzfhQFnme5a",
  "key39": "3MrbuUspk3j3jef7NzRpLe93dSvGFjS9BXLoUPM5nbJuaTRMxPng3NceiMWQQhSpsTiBEvHJYHqqqQnGuXsaKxZx",
  "key40": "R13PnouAQysYAMP1VZMY5hyGd11wM2oUR6TK7bxjX1Rns18swp2VhgxVV5Yw9zbEirZLQNf8ugbR3KE9kcPd82P",
  "key41": "4HDUiwrJT8HejYf3RQaoFyei7AUAYAvrzXwPNrK593wXKTibS3bEErwkbmDfnstGfxDqxDwysWpNmzqHK3QKWowJ",
  "key42": "2UF5fw12tTcHvvTXD6GNTfJV2kyAhavbTn7AkyoDAqvqoocTMfKCMbtVMCHqsht1ZdGuEhCGbQRUsKRSXUTaHMTw",
  "key43": "6j6FdinKrhQnx1BEnmCUfZ49ccJJnFM7r65ZSr5Wy9CLKsq7FdZjpPxzCCyzPY6mgTKaAXN5vMuJJa6xmGzjhwo",
  "key44": "2LQBpYXMwH5BAxvqYk43KFXzwk584LXt8em2kXpvi4kAasVqrSf5eREKW7xbukxbLrTVxxie4PswMYRLPtLQX2it",
  "key45": "5EDY9sF1HHy8KkpxfnFw7qU7TCiCJbJizQWmmgnDiZbikcQNFjKD3CsvFXvdZkZ6Fh89KRHmP9eyUAcXW7XVFjbT",
  "key46": "5e8GATqjnqTfdhgP426hJojbZicXrDfDVM9rsZapke9gszkFhUm9AGnxu485dVDEjHD5srLEzAMq2huum1N4wVnz",
  "key47": "4zfNaehrE6RCVd12E7KD57cugQ9L5EVd8B9Ych7g2enSJQ1MbbAkUQiW9puXoXHTxJrf3Eeiw7ftV8bcf8RkFpT",
  "key48": "47aEiYNwfeBk7gVcNfcpuzfh1ytBUKeV5EYn6os4Lu8cbCpa7NL6KDavMNVVpWsCQSFTGBREF412M8C5qjCiP9L6",
  "key49": "3uwSGpKtvM66Erqf92vY19qGnZUoMfZeXbtyq2XN2eKzRj2vk4wC4VuVLf6m7xa6vPES85sxzxE2TKufcxkSUrYM"
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
