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
    "5ms8vfaZejRbcUa3Q2mve2d5KBP9jE3hnbteh4u37PBdtY9Y9ewHfgvN2Ds9TQqCnjx91keaFGnpWRkoUvTnzcHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31E2y37N5fSjgEZpJuCJFSWDhyvyiKPzKEqk84eEaGcpAURGGNepxsfF3KLKELFf5TJeNTw3dw7gaRptgmxaZ2TY",
  "key1": "YNid3jQ8cUnjab1rY4fYaH9w7UNMSqhuja8wG4GLuAfeaW72detEWE7kMCPvLzcwXypTM2v1dY6GejHNfDgvXQ2",
  "key2": "25mdxsWsh3sBHErpymbTLYinovqPDBqQrX3EmoZXxYEQhueadrTHxQEL5qCAi7SyfApfEXYSwTu33t2BquWAHcKJ",
  "key3": "3u6RG6DMQV7wSwqq9sdomCAr5QcNk4DCsKxbJ3SBm7XPqmUNy919KYsritgVP1xM9M4QA1TmyUAPeTtGQroZk3wc",
  "key4": "2zGYkBa91kvrKZWQbEncoFjDcvgNt2G8U4t6yQpvsWjtRNtpPGfkwEcsj6gJtQBxttQbq3wz65DNGgq95ttZnk7W",
  "key5": "yAr7YcuX3HcgufEhpyb4rv1WuYckc6EPdGYHyix1Ujgf7nqmpmvsMFiG9ibYdu9DvPZvdnHmF4Ggd7QoamnG5AS",
  "key6": "2vti11cCUxCyrQjA176GxnMycUWUfutujRq4CLaE5fepsB6QFV8MMh4Zt77AUKUDi6DAWNabjPofZ4PSKuT2K1bg",
  "key7": "5FCinhidv5qNZbpqdja9qQrWHS8TBxCMFMNh3APbFik8i3iL4kBnpZkKCxaF3FGREaDhJRFdDodgU8edBVF12xvv",
  "key8": "4yCp2f1vjiP1k46ZYU2i3xb6kjQJBLUdt6N6p1nbfAF8J1ZheRX2Ez5CW7f6LL8QNfrzg1MV2LMxxSaT6cZCiX87",
  "key9": "47o5YxSScjEN9fPfz5ojKdkAY16tYCDxpnLNSkryPjRwqCmi2Ln1CihKvVbjAkDBxnzUUkDjQeKa6funeR6AHry9",
  "key10": "5xWDavJ43Vuj9E885k5KTzxwz7fXcv6Y378M3g6mH7XuNoTYMsyKUQfsAgRrPwXyfB1GaMpv5NPnHhqBwTAAkaZS",
  "key11": "4RN6pQm4QTD4V6CsHSHeWan6tkw8TExBtEESjZkR2P7Zmsf9uumjqxJueaJvree15ZZBPvHLViFY77YEvghQQ4Rv",
  "key12": "5MU2i7H5NseXFeJ5p4yz72d4vuF4MaR3s8zJvrMVzd6bgdsQZmmhTHKzokZrEUdGMRDx73y4rRA2dkWRPHdHpzBp",
  "key13": "22qKhVannVTx4WFdrQyXA4EYPnVNKVMwU6bYDBKjafqHRsaBiLHfLKfGTG8naF289z7ajUV5gVWfxLQ687oQ9NiH",
  "key14": "3e2w4JzWDv1SMzrmkYup1fSbHxd465xmx4h1HFrueSiFKGG2CDsAzm3yukoqsuPFiQ61XZDSRcxcmDShk7AsuM2f",
  "key15": "3ZTudpc4x8yJNvCu9Q7PJ7XAhAzn7zyEjTSFxtxZNqt81omSvc88iAMFPYxSXd698sx5Jv4MypVNBX66ntczU1QH",
  "key16": "4B3YtQPLA2Gh263dYpsk6SQFGRKM6m58cG51Lp6w3jaG2B2LykvYoziwuctJRbLA9FGahiyJdgEggaTteouFmGzZ",
  "key17": "43GyDxWXaRPAmAgpBphKp3p1kssp4kB3ZyfknpGZNLAKJ2jVNfVYixSMs6p96jKxZaR9jgTsEKwEh81AHLTmHiid",
  "key18": "JPmxhidkuKy5rHtVKT5VkRVfC34jg5J2wRZQoEEdU75cbuowq5fgQQfeyUX23U9VqJcjfjWPuTzSFqzYJuvy3sB",
  "key19": "21BnhzR2TpQHfC7s6UkYA1MA4VhEkHFwAB4t2D8KxdpLux8nrxawkK5WV6oPp3zLipovHrS1jqfETtvc8Rr4pJum",
  "key20": "5TCZLzLuc3MD8WqL1CMV8AmJL8zk9A9ZWwnmtZdJ2FpeRPSC9va4Jwo4sX383ppURrndQ7m896axA4cyurNqojGh",
  "key21": "5or1bKXfKVJBwdQkAZ5mtCtsgiG21uyQhkdWm8Uns68pn4n9W5KEBAGWy7a3NbZHFK7CWRDe5Wc13YEwBkuYXRxe",
  "key22": "2SvCHfawcYNs7jtVrkSscMNXdsNB6Yz7TQbaSDp51Ba9tURL5FTd2iX6xR4ToHYMp8c2wEQHiSSnxjAvVziuUMjM",
  "key23": "5bUVfwyjjqCXdmUPmLAdpoPriSUBLjkjYt2cbgSwXu1JngFPJTfap3KV96v4NnZb4pQJTjgwTVp7vCt5eqCB3Hs7",
  "key24": "44nkdX6Kfuj6FLS7Yu6MFrdUoEqvckWwuc6W6zmx1ibKxq5dLp1HL5XbQauCpzcxSjowheT6KFL1WbGH5KP1UtGm",
  "key25": "65ehRY5UAScb9j9Q6X5o9dXPmfmTbt4x9uqhELzC5mTM7RsosTTQ8VnAaxqFNUsFTuH8hGik4aMWQroVPXaQF1HA",
  "key26": "5WATf5xxtwMR7EouTyo4nyEYz9puNxaLYUEYpCKLvQNUY9Acx51w3yYATTyVAsTbUnECaNpFTTn2nioDzyuhreCt",
  "key27": "5rYrdw7i6UsPmkYAMJfrVn2bCoABfz48MQz1Ln4VJZCgt4UBHurDiTEGTBkWZb9AQxi3pBbHQ3HKD8nyGugWtHTp",
  "key28": "5FvgXRhTvjMuRBHk2y3wfZsvan2T7Dm844pRFJCuk2QCgXdTzofJn6J81bEwFf3m1WUo68cut2yUJCXAAF1tPd8d",
  "key29": "5G5R1psccJkxJeC6pd7rcUgLjFeRdRzuyrMErvtYHvBdGqZYRSK7xWcXxsi5NnGDyxd7jHfzupqgLca1382dBPgn",
  "key30": "3Y8wAAUuSS2fJxR5M6gmg3T9ufFigcFJG8PPZnH6aDzn8WDdhpNEKCNRXiEQpbXzUcYzHXBkvgKU7oq819VmVSEv",
  "key31": "66mpiPnBdwYZdmfAfLLBbbxAR3GarMZAYKfHWujEiZzCZxfvFDbrLcksJvyTVxVEgVTqkNF4dCnEMsSFpCPtR33f",
  "key32": "MwbnPDpQvGJEGNFXN6k3Bi2McesFpNhLNqAwe9xqw7Sdnb5WA1F3xBrxC9q5w7wmLNkrZZSpt4BUQQLKLTig3r8",
  "key33": "vNZyhoxZuZcxRsvfsZj7HnbTDSmDNzz82ZojL6X1NQP5TspfHaBHqnAmKizSaM968nYR8P5tr98peUPW6eLJQhv",
  "key34": "4RNFhvqPa6kGAydAFYedxfF3Ruhp3PXWXCSddRVMNkt8As3uoKc1eEz5sjHx9Ys4TNFEyxPesSH7tqbCg9JgMcuH",
  "key35": "2MnvsZ8KXhnupuuuUU6k1qKMYpdC4WeUT2qvM2QBdKYXKPwNxkUpXEfDm1xYAqANSrVMBtYUgpHKpvAX3pa6fYkd",
  "key36": "2xBsRR4ZxATcQ4EkbHsTnBMVRGWrzTYXhTkN4RXhgQJMQDxWxR8FBgBo6TnnLstXDJP2CxgauVp59e9EARbTrpjM",
  "key37": "5diE6x5Sr6CWFgo5sSr3JtnTsN1Fqtt6XWAfPjgnyGUEjvGHZJbYBAd5kZuKjpHJiCUoRcJwXGuv3zBXSbxnRWz5",
  "key38": "455nWunyJxScTvZbJPcuRuF4WnsGBoK2zxN4b9TA4UpDfFA91YUmyaXTb3XkPcK4zNxiLuNkubbBYfzS5NRiqunv",
  "key39": "5wY3gWFFyBmZNTfN5KDptg64gGfksaHRyDRQRvry9UepR6g36voL9Y1xqpyfkWbdBzYE1ANyxkYoyjvqFSwNXQyb",
  "key40": "442UXYgbVFQWsfWC8hWnCcVYLJSurrBUfyHXxXLHh7cXuXrg3c3FXsNZZ3T6h8HT5H9j29sYDkd8eQTkQNYcmJjH",
  "key41": "5jvdBTfCL5Skh9pKTQY1y3DNcvgAqLRy5eKR26fHX8x69XcKt3V4fadqciRxBiRM6rZ48o1JYjrwncxTonUw4VZb",
  "key42": "3de9nBS38XWDF6NXLbmKGkryfmkrNthk3kVtCz7n4HAyaymZUDeuyJ13Aj38urYaxRDhSGBWAaYCbUzMhPSVQkFe",
  "key43": "3JebRZBa7zWjHrUU3Zi2cJL77mShBf4znoNhkxPf4hkTwYamZLFwSan4eQeubf1LJy5zNuQcJCXNJrKoLRdMnVAH"
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
