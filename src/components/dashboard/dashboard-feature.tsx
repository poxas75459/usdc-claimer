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
    "2VNv2mGpuqyZyREzWZEQqmZbNsYZF1E4t638HDjeXD8CN2LvzWcW8aowtWezVrVgajKJTpujYy6EHJpqN1DemcwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDkmafT3FY5JA68LeH1Fk3BJUmLFne2LEaeyQuqMoqGhyzqPvaMaFsYNz6pywcmA3HjpLuDi6cum2TTjPLJmvPs",
  "key1": "4D6LPn5CGuokwniGJXWp1QScUYaMUJs2vqdn78jLA16kXiSSQb4AbXYTHj8B8yr5MvR3TwQb7tH8KCbQTCk2HVK7",
  "key2": "5BhdxBbYqY57qQJ2a6eAjhE3PGYL2Tm3jo3JQc2ncHfj1xg5vJ1udfAaN1qhC9tT4sXSkx8dNxp7XCANe2gQNBbF",
  "key3": "2NfCxERknGMPG9ov2ZUGuhMp9PQnb3YRoShCYGJCEjkX5hWJZHGrFwTfJdnWirbuXQiV8TbQ2CorrKXWoe1E8CJ3",
  "key4": "5G7B4yYGxgLCmKw1jtb9RAttKMxpCYuDSxRSATUvk76mkEKeyqCxypNXegnXfPWj8ZjUbRDLFQSSHGnsaGftXQ6N",
  "key5": "51SLGGg5yYBBY3BmybZcTSwR6eR5yDNuzpdZi2WmHCyvafwbzeVmH1tVKK5UzgHtHfxz6dGVZ4vKTVk2oPGc3to2",
  "key6": "qkSuPdUDkTZwR5LeKf3nDjgCzhmZgX2TbZiyQPB9ivEQnim8fvk37Qc9uSucL9e3p9FeCypMTQh9hoTt5KxULXK",
  "key7": "4USLhbLByptwBHENYBwQGJNqdVS9EWxxwDhtNeHjs21zCgCkLc2ufTGPZZpmyDLZxP66gJNnTe6UcvXK6y83wbEs",
  "key8": "Zr2BUaUTHQaxN8TGHaEs9mptJyGrNixw1Tses6vQnmwkxSNSF6Vc8XfsV4n6uB4cbvWEZYkpJGThvwe9rAiDaY2",
  "key9": "38KqTguwJkJUw4Yr17ewjux7r3kK9GdDrvRrZf9YihAZ8UFgM3MEZtmoyeg4aDDM4MqLEnNPDyanjcaLrL8xAKX3",
  "key10": "39vXB4dQhPLYGdSVx4dxuZHH2tSDm6rRrPWvqpSx7TVa5KoGqz3o8kAApjr7LW7Phqvs9iLhVBzowYmReThfUQ2k",
  "key11": "5p5KT7SgrF7aSh7opTMkaJhqa43yzADWufZMEw2kySMVUqiPmSfbup7BkppDQtycCK4Z8WQ89rFTYoHn1iCHo4z9",
  "key12": "36ny1Pp6CFiPTGiqDiwBsi5fpWinKVZLLcnf18iDsr4VVkzHDik6kKQoa5aiNtdA1xxa234GBsxGrfnEzxHFYPZS",
  "key13": "2FsorBBZSBDUepZvHiJrSXPnJC5vPhSJMP5CRkV8xrQs5jFAarp2hCu2exJg2872SDLT5Lg23akbZz4E4ed86iDZ",
  "key14": "21fdyfRfhmHfkAjz4o5grcheFovETiny7ecCyiKzQzFehzokkJL8VbAzj1yqEed2Tfg3JPBJHnYNWNGxQFG39Ehw",
  "key15": "4qz3DQSkxp18Twif4c4njbWPLm3kjM2YdLZLAazoa3V9VaCbYZWNrLhEtqjz2fuCZpfGAk5SeV7kyVhBY91u3f8Q",
  "key16": "5LVViQnEtJRVGhYFEyg5EhfMmUFkg7EQp2gE736D9miBHqoz1dy7eWk6MyvrSovbMm1FcU5NRQYZS7UqNKjvQuqx",
  "key17": "54N5SFL2yytQ2A4EaMyYACj3mKe6wRU4sZ4SKJMMhMTS4PzqEi7MkMXcYvR6DzBSaPuPLqXr4CRN2FX7e4xDhcpy",
  "key18": "ekHC8H2bXo5xV2bE1ceyEut9B4Rs3dLyCh27b992CNvkmzM87xBUJrEhJSGoyxiXnMJVdpKrWF7DDeTnVdRwbhj",
  "key19": "3Ua6xDQR8d1A9xghFUMX8F4QCLLVXafeLpZQHehgs2fzL1E8jRC5ua4XdBqot66PmnHD2iJddTHWNEv7pTZmq8m4",
  "key20": "2Sr4rgBQEVTbQVsLmNSudEkr47NwwSF28bJg8mxBEr3DN8E5tDiYJ3EgsnHBuxyfHQhiPpNfytg8FmjcoqW8bpS5",
  "key21": "3n5uTwduYT2PuajJWa54rcVtwWJiiVEPFcoh64xabtnz1QenLGMRnP7UTboQjbfTepN2g5pAwfEgbah7rnYXs9eL",
  "key22": "2roye9fzLNnAMBHyVELuPSkoB2fW5jbhvU48whv6uBv8f4JsAiEMkAhcBxnfy6hKSrxPyL6zvGhyYZGFGiY35QHT",
  "key23": "6XDrDZFP6i7bXPne6x983xbPC2Npj3XVP34goX7u8brTEKx1zLUSFAv5DzUPTnh9qp47e8E3grUvkFHKKxJKSrX",
  "key24": "3oxoTHWnrzsvWP2xZBnPm6WEj6XCnnawiR6s9ukN5VkKCdZsV4FA7RreaEjMRcDW7r2L85S7Ynp6Pzm7nZmSH5cW",
  "key25": "2XghaNhVx8CTVSLr2PJKfH9sqSkCkUuwVoXLPtqjDG1SwZ7dv7FVPv3emUSJpYaD2gW7bU2fJaVW5QNLSnjHG5u6",
  "key26": "2A3Rdpous4msTWnypsD7if8HB11Ucp6KzYSHYd31xErUDBo3enENYTD7cHdtqSRuiVAmwoVf9KVM2AUAiwcUhrGC",
  "key27": "4pXo9CrbcyCqmeRzPFWUnvdrrkkQT88h8aZN6fpz2ba4tNVLonAWcn7F11BRMSRBynDXdSADrYSmkSJ6pFjcEDhS",
  "key28": "4c9hCjKtJ2o376kswMXGSSzVog8NHv7wyqfPrWRP1nCUeBhjyJaGf8e4yxwQ6zHSuQLvspHy1Kg27gLCSGefctq4",
  "key29": "2YrFH4UCpRCAYYb9rKdxi8PqG1iTTr1edrMAGE4w9BJhr4YWz7SxRfUpA1Crwjij54AtUsckNXagySxx69QrBz93",
  "key30": "3mWEdijDy3XEVG8zPFYRQGhatTyAwYTPiyuaeokmJXZb48o1DozGMwDEjDFgjqAU7m5DetkEdXU5W8KpuNVZ9h3C",
  "key31": "3UM67Wen1NRExseT9rYykav4XCxQyypweedWesNHCav4HSr215VBKkmofKYYUeBo9DakQJSQ74zDcPeKiuSVguHo",
  "key32": "2aT5p97UvPWvTCYcBtJKXpAs9PEa2ndpronUDA7rC4oyNEP2Cy6z9zEBD65PSzA8kq4WmEwfAguvegK77AN5SKJh",
  "key33": "qJy2NUPHtSN8B645viGyKNtZYjNJT9hXWMCyMG8vgTzWs3ckUQujgVZ9mT4cXZBfaPUpZLqbPzH26SmtD4Fv7R9",
  "key34": "471qxZqzfZBxoEoqmmjquDfYahFAuQ9Xce64BjV72FekwTNtq4RNUwWyswtgEriuj3pBbcEJGhLHfbjHc5HxBJnQ",
  "key35": "2btEQd9gWwpGVRXxgR48Hdhc7z45w3sfMig15Y4N2S7s89iXCKVT1DHSEzhg7zEx1P1WQnTVBNrLJVcptc8K5DS4",
  "key36": "3Ez7xjb5g58MAjdrxBj34B5VUC2FMoKFzazvNz8UD3ieF1sKttJaL4pcubFWPMxQsRT2YJNw5p4vKoj7d8esqSMG",
  "key37": "5EAhatA9oaWHDTv48UukS4Pc4ZuTbY26t4cCvGhsnEfKwZnuMkwyAwRuFDDCNbkwdbfmt6DsqDL3CzTjMV8CDpt",
  "key38": "4fHpEfd2PWmPpchnVs6y1y66iZ5bMS7DCuv7fUYBJ2v6zQ9bVYN8VfrMuD5fk1rDtFvpFp421tMVWGcK3URdGBfC"
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
