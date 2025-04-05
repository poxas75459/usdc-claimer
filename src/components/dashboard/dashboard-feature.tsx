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
    "56qTPE3M6i3HLd2ZuiB9neszTYhU5gS3XTVGLxTL4dtmF367mnyaNEU38zGphnhBWL3mPmSHpJAochxWZ1GQd3dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrruoQhLFY5EF886HNksLFhRNFNGtowb6miBGzXmNGheqPEkFw1wMXpMBQ29aeDfoSfHMfnqrWCGvPGwjUAr5za",
  "key1": "2TsxrH2V2nmgrdYRVbSwVFGoqBiMLFHg29KzoVFNQVEfYV4J999E7rSSqK3PtXi2ZW9SkXyrwtMj2YTmxFgyxni1",
  "key2": "3c9AG1jE8GJ3fusrUgmH8BNsc1N547kihvoquuQ4RPraAM75cXYS2KNrW7fsp4igRxZGndP1hCobmkQ7TaXUubTj",
  "key3": "2azj4oxdGYMa2AhfNJZ9m5kJfYvmzVFWT6Jxo7SNeLeLmPMkusN7XeQiChm6Ugi2smiJHWJ4HbVQnT4MuQHDhfEy",
  "key4": "4Qvwx4ygTprUKhPKwPmgU2Zu5LHEgHXL9xMUyZRfC4Zm8CPUFmBmkVmMAcjnEyDuQ2ZLremgjJdR7mMkX3MvHwu2",
  "key5": "41EYxrAyBgKSfAZCWbfdJeag165u6RkGYrj88Q4Ns6A9PYkBh3tZna9R9aGDm2MckeLtUmRZpeGZL55PYa6r5HqV",
  "key6": "61Tf3tAdKmPrbSPRnva31anh8gb3LKh6PPJgsLgjmH8JfsB8P1p77C67oDfW7zacToyJQfrXw4g9fxpHZnBWVkaC",
  "key7": "5XvkNk3hkNXK6RaUZwaGLW5KBxcokPgzEp246XRiEmJE4kcpL1RAXYJMF43NLxEqXZ9FwKBfRTk6BynRp4maU85L",
  "key8": "2S13VQ7cyucsxyqBV8YY3pkDcPfgAKarB7dg4dwqCZFZEpSMCKog4BYgdzZiRdeg7bvFbgmwX5szK4ZGhroWW2B3",
  "key9": "59hQPdvU1rpRGkPPx2YfdgiuMoPTb6vzedoieRdhuGciHaAeZa7sNK18Df4oNkgz56i3onpojWYigdos8rfDESqg",
  "key10": "4k5tsxMzyfDRa9dKbuSKVHdsQyc6TEXhCS3YYGJ1TXbryKYLzDoDmbTXpZfGiE7HNLR5hsx7pZVkEW3djysqbyeR",
  "key11": "4RMkUBjxPXcPkkJvi23SNTXYEvhzFCCUeJXCmmrw5bkcE2T1ECJn6BeD2UPTvbhLnqgrQezXcMHWY1P3TfwLzums",
  "key12": "5qzQ3vE8rvgLbr5cTqnamFw6bVpkAFXZLsENdFp3jQXdLF8xcMXj9eA3VXjjpdifoZytpPUz8XoQK31buTfPAvyo",
  "key13": "2Rmv4aWTFUQE7y7Q2vahv6TxWY4XAqfdZcfQD1je8cL6uyFX8VqotbwfAgFEpcFExKzA8cPFGA87XwP8pcDLbqUf",
  "key14": "4ntjt1AEEPkgzC6yLVeVjYdTbva79YXPVP61yiNHqqVHZgEpMB6S9NMk7UJhsY5Aj9rrWXkTyJpsEWMS1WqtDfui",
  "key15": "2YtXxPxZL1yLNxRfTnUfpNg1F3hTrQLFzVDQh2UXezwe3cPEhFchkya7BFkQzntc3iQho6BisquY5sJYsP3ZVAQ2",
  "key16": "3wv1XVH9tZHjWnNcN2Qz7F8WYnjQUC7KXV8FY7QApP6otnwy7Q2Tej8giXPuHyU8pv4AhtBbH7GE9a7tbw3Q1eYA",
  "key17": "5fzqmrGAUCCm9U8j1Lyg67cvHoRRTGEMrauuCBBWKw3Edgu6R7tKvyU1eWkneLCVieGTBnhuYgs1qH5qPh2PLGwN",
  "key18": "5LMZchw7GqZKp2oBKtWgrFLqHwh5b7vbyZhZZWee8dmKt1sFZtGuSZNkg5DvZ5hVgeA52yHEWNnxqmxZEAZ4AeBE",
  "key19": "VDKNyCngCWKYJzeNuADLh8fNF3ccYpQ7NbmjcKc5gSrvJ2FYddLQjoZdBivVhX7BPAHt8GhhY7pbUDXdg4WKJZJ",
  "key20": "Hk1FHwuDAv27he6DXaEKzN1F3TwvFzFD77VYo1usX67jTKcpSTQ92SyoQJmBPow2pBnmFW3AhjEk68BYCiYrd3Z",
  "key21": "5tUrA9kdkJzEBGFLf6LQoiUiku5ar3KdJU3j9QayBboeFkJNG23jnP4YViqLTaTLbdWmLzRHX3CWXTj6JwZ8eLJ4",
  "key22": "3bhoKYc7wnjhoxhvC1x1ohgvVnkZ3NM82U9VtgThii4zh6vLrethdQ7kheDn8ZZ7cs4dL8upFAikAMDGohg2Ta1c",
  "key23": "2G1zdrSA3XqUCVNRDyEoyMudiUC2umMcAtibWCHNGGYejbKxNgA6WrQaTp4fKUJHoXJ9NM2sLK6Y18xCGpNhwp17",
  "key24": "SyL2NL3K63jEhgqJRNNPq7cMGucYNTmkUiVFEmU17qfcN6U7jye81NkSgJwm9ygUQh9y9woNveGhuB5XDBW4tLr",
  "key25": "3tCZRFCUwaSGHQYJ6tTBcusTq7zLg5zmFssee3ShCHdv7HSymymJ1APE6vJUCJNV5YYUy2LVgEnFJVtnrgv4KGrk",
  "key26": "9sDtA1LC9gLkhfzXXKcXPkYSwsbJJaAptaut1WTb9r84VSu6qjqj9iRGYALTx8ojubsduYXhMjXRSzr6j6CEpCF",
  "key27": "4o8EYxdKsNxwFBSuvUV4fK5CJxAXHmYLMmytMtXTvycsp1QYw8x2AmZaxaMawU1AHBSHqGQCHzAWfG96q3Jj3UT2",
  "key28": "GE2mKiR2Pz4jF1jMjgSE3iZFehZTWbBq2WXb2L1t89MvqhBuHhYrBAEYJPaPqJMFG1jPth4is4tdrA6c6Rin7ch",
  "key29": "zqrtHCUiArah9Frb17FHpT4qnDMQDJjMHj8VyVjvhxrEPwzLDfUybNxnePQXVMyvQ4nMkZSKGMnfBqpfjzm85Lw",
  "key30": "eZbLvAQ97samcbDujAaPQ9RozAk5wu1m1tWRr64YrbdzeCfCXLuNFXpV7wHp8iRi8EDHpM8uuUu9jCbjh1bbx3v",
  "key31": "2YX2bEeeMSR3rZfhLph6DLHMsNBBVyUDSuxh8sNXXUMJJXYo2S3oeQEebE8wiqh6CPZNd7Rth6SnxTpZ4ZZUwbBg",
  "key32": "3b3dD2QghApaaJHEdWdoYdRiiGu7U9XeUwSihrHJgG9kcYN2EJu5oGsxFXmxxgYgiahVAAeamnXZmDs39MZwD6rY",
  "key33": "2EM1AmJexXNWhDAyQjvgM5SDu4qPAmgS5uzR1wGvxdJ2qBrFUZ1Y9ionGS32KJRaTNg4qJs1u5cYcbPAQdGiftNP",
  "key34": "4WJJC6JW1G2fELqPUka9uRsvoXDuvxt8UJ2iwaWea4tMXSLi2iFYYEnXe9qP4gNQGArpAcwjfw6W3Ujk774W3mzT",
  "key35": "QXTJ4KgAen9ZgfHbetQgj1iXrw1dRgy1gv7CDt6vnCHbATTGdoCdbgBLv2YThU1iPfmhS7FKf4NsGSC82xMsKWK",
  "key36": "5neCPoEXrVr2yVCWZiq2EiDAAPzG98MuZLq4ThGkpv621EJZfgwf5d6w5DVtbMN9jDXB2kU5qoPP7TS5p53E2p5X"
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
