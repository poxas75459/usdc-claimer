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
    "5htZ2nWycx7mbgQzwVHhv1eNkB7EuingD4ahgNJaX1QQQvDMb6X5AT1w7Uz9y48e5CKbeGzbqZFgYTm1tMCTsP5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVBiaKBogWZAb5C7wFE1LNP7BaAviRbVtYwEJMUPMBybkikwTzEiBEnC7XSJXNqPeU7etBsuF5bRUPZrU4sRmxm",
  "key1": "4iEjgrpafkJrzXXRKAi3h3CNgLdGhKo86PByfZHF4kQhY4ynMa4uEywi458K2aGLYxjJ7887wGvkk6nAvFvYN49U",
  "key2": "2YVEPzZKagbwDAfKvsEaPRt3DqCvnL6HmLHEvLhp58iPUokfAXw118jVhBnSi63TJsTnMh6G4UtNWYpAUBUKKQC2",
  "key3": "3TVJwUYHLLau5newtB4zNKchyME3dNtifWhuzwPSFhSrwgM2YupnejojuqHSqUmrLbVmXbiKroL7hFh1PeJbCN4r",
  "key4": "2ihNLoD1TN9cPPZk3E293Eh62gH4RiR5jmcDZD7z4nBYAa9D7qyBwaS2pr1dMNtzzjfuR6zWTKQjsqMdn4K1CNHX",
  "key5": "3gjSKnzcUmnNMbzcFvHdwuHq76b6rJVsDqR57r67eFmkLQALKSJA5z3r8yJN96kVwxJ41kTwn5YTCtt8ZyXuCTtR",
  "key6": "4B1eqikuhozvpL7iR4WFcNYLBWQ7CFXfoJhKFfu7G4GeCMoZgHGv1GUPWCZBfySiL8iPKtaMais6vaq3BdvSqVeD",
  "key7": "2NCbjFJhe2S7XzbuJAVhzwf2CkxakVXAZajJ9mcUoXymHU4Uths39CipSQrAPSy4ND67uAo5qjGbZj7tCtaBBQLC",
  "key8": "57KSn5GXWYBC5JJLypNYaXtM3FLZSbG5KNYu1bLW9EYHMGbCGkwfDhfNNcP3WW3ym1kjqPKm1PsC8eiXmbP8fA8A",
  "key9": "4wenXxpi1pf3otd9n3oDoBGFhysdwWJ7PDLCb2JBQUG1A3C7hzQcyPU1jwP1dPvcACckf49CjJaVMuyaBPZJ7uz1",
  "key10": "5B1do9xNxuiajgEi5owD98mYZbspsat56R6y8hCyhGLgNtsTtNbJ5kNfFnTMZWPztPR5KDAG1PEQwMVbp1ZYtyV8",
  "key11": "4SaT3aN8fjqfsdyRNiVXM54RtGt5WevXz5HJRsn8vhVMhi1yXv41v1jmYVyRxFTxw6k9UcstEsRyPZhnkQX82W8V",
  "key12": "4LvR6BCQo14geCAY2UrPNUrCWyX7tDx4vvLA6Ytu34Fe9Ld3fTUZ2cFHFJWizi446hUzkQ2PoPsgZBpCmQ19eWdm",
  "key13": "4kMnnsr2GrTC3YswUySygWDnpGJ2zi6yUNAGdEStLdmcQJuUVTzphKoDkK4ayUxxrhcWkTA9ja5wGYoscQa7gLUk",
  "key14": "4twLKSf2KP8EmXYHM7KbtHst4DEE8bsqyMZVwEUjEL8joBTgoGoMfkPb2hBXu6Kki8dEskPvMppHoYcZA3tg4HrB",
  "key15": "657ywtEecLyeXkABdcmv6gpgcf7M2c8iDEMu9xgHj9cXz5uVdcyYELCtCLsQYwZ28XcQonhSm47ZPi2bCYVUKNBZ",
  "key16": "67UW8fF5aDUns6tmZJ5UP1YRmAGXiE5CbuokxV8LaQa3SXAcQYHskmWLptwQM79SEKfrWV4TD5MGQM51JgwHU812",
  "key17": "zH3G8ypse1XPh2jmyyF89SLV6n8L7WPAsNux8jDacEJbUCr2wmG1LmRZE3sFqqNagiKVE6JJDuyUabvSHvzjFBx",
  "key18": "4oLQj17PCUAPM9S6AM2QvkDkSUmdUL8ono45FyyPXGq2CNzCReB6cWXyLyXqACEKjARDcfKqfm5WWs8mLbsT45bu",
  "key19": "4rNiagnF34tjs63tci1erZQzxDScyEB6BXz339gD3wRT6oy59a3xGs14fCk1dUc81JNSHF9mHjXnFtNvHv5HCKAb",
  "key20": "49ag5rGRXX8Me2NUF5fJet6tUsR11fKP3bWLaqdeg9iE7Lbm1Lzx2tCE8GjRUxvKg11PCxzg57jAf9CmiznEa2R1",
  "key21": "5XSvZxNrCUZNe4EJjfgNfFoZJYj29cEnAnSm8QLtRKUcgPnJvYedXUB5hvnuP4xNJYXo6MFxbga9NziSGzR1zPKQ",
  "key22": "3GhH3Lueyy7CYoQiyTL6qrifiGLGJghxdoeiEcVk65ZXtWSeSWGKvpqpoRu6NNHtaCebummPPQM7ytin8NZgN517",
  "key23": "2jS4QKKgV3rPr5rjoBTJtGLKx8Ci48sDHHamFBej1k1dtCgwwrE7fwd8NwMtZWn1iCJ8xX8ozk9KT94z7CPXL5Am",
  "key24": "5HPMRkC5C6yLzj21k13aDgywpzt1ar34Nmj7GKXdrS7nRvwEMLX6xjH78ZMudASYezBo9hkiE5zKHda8hFQ59a4w",
  "key25": "4ii5UA65FKKTojA4ojX4WwcspgvMHjLaB8YUQzQyGKHx2kTa3RHqqB2RtcwSeU5xLx5a6Fv5pyyT1Abo9XRrie83",
  "key26": "rbnkgVZcdXvR65u6VeyJjAfAqhkxs9Qo2sKNkydR42TjJfi4LsqsuFEkpgzFqDEr5aNDSwothsXbyhWk1sDym1X",
  "key27": "54XrbYZdoHJtorc7QELpi2Y4GDt9kFQrk1W6KcC8tw9MyW1yjAttkigyKn3sYc8Z9zLNGE6V3kgWZnxjCv6yqSiL",
  "key28": "4ZcHqmchWjqLYroZhorkn8JuoqgzPQZH1xuVFBfM2XCVFm83aWbwk9x13eyvgE4edQbWyNxuye3kf74UD8K51LpV",
  "key29": "5aJRwcEA8gzM1egpoTNNpE8vJMkAJFEetyahudSUNJ3qeadBxSsV14tkfVxWgAVtc6HGWxPuX2AnuaviMbkqE8eU",
  "key30": "5wgNGXpoqGLtFYUGGNDkc8XpGGGf84uUXxJh7mxG9DT4evTgPAmefNzzQYiSJSzm6jDeMAtyXnR38AKTVvdtFsWP",
  "key31": "3pysx2nFHzg2bbMztsoX9nT445CazQwT3G2aqMk89N6K2ybpTfqrh58eNqDCfq8bUXduKeoui2jHwouViyX3mAPo",
  "key32": "3UGqrfz9sNZXfySwP9rAfaNtqDQRs7Ewinu78Ak6M4dRSakSubomBnUMLM1hsJMMHxgzdVD1Nb9SQePBMqCExrt6",
  "key33": "2kxvrYzjGv7q3YEfUzXctnSNKLj4y8cWcYJrUPDbb3fs8zWCMEiJSMeW9TY36naoZSD3ZWbZB1aq5A4LrimXnSFq",
  "key34": "5H9Rg3YdQ5LsJL5AuxWNs75SdR11k1HuxeNH41hUeGbEwFXrcmTwEpP1oeWkdSzdW4PRfGsEFMaCax8xSsvfVVT8",
  "key35": "YAXCMBzTVawPjwXFUhrqVeAtK1eGeMUCiyStnL1marfEZApGkjfKaw49a6SNPGwfUgEDb1KWSLvqQGQbUh2KiyJ",
  "key36": "qFaBmg8xe4q1QWKjxnPUcQNugGsLEbySwUXmSEfnkLfb9mZrTFKb6j5F6xakfBZmGBHdKGQWLc3ghf55xXhkH6N",
  "key37": "3vQLb3kgBTRoEX2niT1FTutCW8WTyqaNZqJfM2AC9eP6aGKX4SZPrVJsikxjCdJM9hw7F7sZx7bzVnntpXXDSApZ",
  "key38": "45mzU7YCiATBEpGkQYuoYEgir2jYs9FHxXCsHL7GSnFR9soYTQeLksesRChwtFCARCkXF1eKZa3dy9hmdu1m1rXz"
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
