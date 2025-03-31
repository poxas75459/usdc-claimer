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
    "5MBeVyNdBfVFC6ZD36qSHGLZYYTogizPNvFb59o3Bqe2vX2KrTCkyAdZjzGXPipgXLYXtUjwD4SgH5HZo5MNbKva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5sv5YPkRTKbFhBRxcNcBBaEwDEELXt41L2n1trWyw5jbF9xYyrCKheBKhbeuLBaYZnxcwU4i9WMiq5uEShDt7n",
  "key1": "4iwzQxSAP9VhT9yP93TQ8gTnHMnMj2pxH9f1tT6SFgD4kFWwdKc2FmSgYVJSnLvpgcat5zMaG7AcafGFYVbwfLmq",
  "key2": "WcCUxMnrQmFPVEtB2BtCDMpDVpNMRUFcoUUxN8JLNfredXS2VqAVyLbTD2wgXd6MV2ay8TLRLV2DNCU7gMC6fcH",
  "key3": "QQg9QM5UbATNwhb3qWwPDgqtkLEcRcQmtsfcmDQf4Ph7knfBD29uiS87U5XUZEiJDi4oRFRJXauiPPQaZbQdmdH",
  "key4": "2ss9TPSkFJPCTfv85hNJLwgqcc12GWiyH5VT2y6yMeNDj9ZzrzcgmWPcrWdNjWzFdnuunQR6cYQ4uGeGhbNU8coj",
  "key5": "46tfWMkFDZL8npnErk5KovBEsph6YmGzqZrpT3immPqY8Ut7b8hZJFaDc9b9mCkejkVNNo2jFE6UXHrzS7gvURWa",
  "key6": "4XbpmrXWUbKPPwPHtfcwG4DWd3NpKs6BKKjv9xjHYDnnZ7EKpN4CsWHfaFvKwqQC5n2E2EVjMijX4VrmnvWmdEBp",
  "key7": "4vdiDgvyTdbJt7qxXH1Fn6c6CeY9k71us7MmuYbBPGD8J59WiSXaQbueJ7xKjxdHh9QXNvGJ8KuRMtJfBKsGqE2B",
  "key8": "41BvopKPgWs4cCdcbLdnewxFputDoFE7x4KPiLkAwkHrZgMcvZ6jLqFSu7J5NLnKn9v7QkQuhyLW5JsgZ37aUEfg",
  "key9": "4qrS2rBUuR8oXBtvZLQmRgMyJuE4mfR3PmFrvo6cST3YkPiSKyLufWw3qtjLenMRaJZzwGCzHK1qkrn93aTNE16Q",
  "key10": "3mqqXCN5kWdfYCeznsonTZncZjSWX6pfM4a2k4inNmJP5vct7ZUo9GsvBUiAgRuangdsGMPAK6ZFsrWDw32bePa7",
  "key11": "4uiZDXHGBmXw5C5cPRF9nSuTsh1NhUkvcVqmhmFXipevoKy55hAnPL96WJH2yngQbJHma4UTE2RRpuzHB7mBjjXu",
  "key12": "2yWZUBKJrPBwB1rmhWs3KN1ExiW8DdSw5MrZHDtm62Yuv33R6ev5K64dp6w3JcJv6Wn7pmz1cEwVjivwjTDJTJAJ",
  "key13": "28S9uZBGTKD177uWvvTgkQTwNfksJtCr75putTWuqu35yBXDZjAyDgdmq7U1VxhqFwC5YX6ndNZa9cVxmL7QKVjx",
  "key14": "h9cDY6eNAmPd4ZV3rk3sApGrbCk7yzf2aKjxx856dM2SBv8vjG21f8pidGBQBdHDUGna5krGqgVixVgeXFH9E1T",
  "key15": "SzQgCNfBXM47Gnum5qDZESE6hmFxn921N28gECgv1t9YDgWhVDpboxzurjf4Y917X8sX7L8n58Xu1RWveKi3XLX",
  "key16": "3G1SvDMy8B1pShfwLB5GWdJGpMHR7pYakAAZuzX19QTnGQx4M6irfdarToSHjiNKtLTxbf3nBVDvBRPDaga7RZmG",
  "key17": "KWJd1tNsVU3mZ82ZfnWTcpRUto8UyAHAz84DwDj1LwXypn2eQj7a3rimFZhAC1qDK1DYrtTSWFYu5mHscjXRgKF",
  "key18": "4A1gv5ShEAC3EmLxwkQqjCiiRek8qqMtQeCRF81Pz2KvhEiARM2JNk2JAfWpK9FSpvfuxR7CcTQhH5XwrerDgZAL",
  "key19": "2DPor8XCz3qShu6S4dD74AGGgytrDwfZCAt14xyFz19cjnMK3zhCX9y4scdGjHjU1QsGLEEodEMG3fNQ4ppAFacr",
  "key20": "4uY5PiA5QNdCRAZezP972q9VgWgsvp7zBoMpyHRmHMM4B1y6ffCVwLyBorZZaZKSDUc3MVXPXkPXMiG5f1LiDrDA",
  "key21": "4tKL6sc1WBrUJpXmxfBp6hFDwV9owtPJYQX8M7xDjjr1pXSzRS9ZUiaWLY5wEMk5oPSTnqFDXz5w9H7dXW1xfmZA",
  "key22": "36B8QnxuvnW25A79hbg4F9LpoVYdtEhTGViM7Bdh3HGq1Lhdwv34c2Mt6KJuPtyUVESZfrokKW3JwyBREf2uWPQq",
  "key23": "3mq1ayk4cHvACkDEZA5VZBCP2oRdofApDK6M8rb6DHVjjFj7a5uhmStzRBwtcjkjWcLpKXywHhkaFxM9EgVz3yc8",
  "key24": "2dQvppQEJeiFWVPe6qfghU5F4XSfgiU7kwmgJh3FSp8YzuUdot8G99iEAWbGCESETArGib5KjEv5HME3A9uzWbUw",
  "key25": "58um9CJAT4MgKpWa1gEVPSBo9w5NrS91CTf8wHjhYBqex5AkzVSD1ysQdBDy76y5EEZRXDGzCk1wQZg4U6T5VoWT",
  "key26": "2USM55Js5kNpMxTYtYfJCzvLGGtyfT2wVsU6JqPypuTyiBG7hb1W4xH2juzWmVWrTZ6WUdr6Gzfp29gqQY2Y4eJV",
  "key27": "2EP8qGdWewuUBbTysQbjjU8MdAC8wfhYycYYbwR8ZWej9WGjSTvViG2gXTYMVPvrH92zA94WyUsjhcKYoi6Twqw",
  "key28": "5tA1KAvpTpFYe9EMP12Wh6sy7Qo7rn33YSnBg1Zi7WHE6fVYzfX2CYTtMnduCG5qB3wrL3nMFga5AoAA6PNcFdVa",
  "key29": "2x7NVCmcLTHiYeW487pGXbQamsL7iCw6T7zGJZEravVr1HinYqft3cDECXtj9GUd9AWz3AMGAZiy3rdbw7jNiobz",
  "key30": "3tyNPcn4f9WHxtftdfLzEw2PGg7uZMgGFShwJwBa5CPGctrVFLcu5zmRV7cFQtJdDyvhTHSdhpboC2hy1eS4unjf",
  "key31": "5h3gnPpKzhJ9UJa6A7ECi9FfUtYPWEZx3XUfRbQQEHuJcbE2a52WsniCLzh6yLMGvr2UjrZP8sCoys7JTKvHRg9g",
  "key32": "5YKP2xzcQ5vg5JGfY2VoyCjnHM4fcJ3hW4u3CwRp5tjkQaZj9KAjSuL7Ti3dt2UztyLjXkjoZRCqu2agF1i5iQ8v",
  "key33": "2Tkqvd972oe7vyd2aco5hTwT6yZiMsdEZET6cZvApMgf8Ujus9NYSUAixU7d23zqupro7fCzacSJu8M6No7x3xhS",
  "key34": "2HY9HDiRxZhTEbvbSAUQw7ssd4HajaWX6AfsZMXXeFQkoHREw3HVMd4THLbBrLteZ9ZJfrMsEKLcQUqCLDsPoPQQ",
  "key35": "588zcwGvrQwyXCuW7iRtithZr1vq6xgzEDHVpNBkEx7YJVAQMShN88wrXRfwig5wEBzKjCE5YGpf5DrpFGCmgAcX",
  "key36": "2qbKgo7j3aP5E1zELjw5gFpLPAGtGoFM6NBfJQgCQ534L3FTbsRJ9wWyAoHdubwUG9cXUGdTXN5R7NdSetpfwY1Y"
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
