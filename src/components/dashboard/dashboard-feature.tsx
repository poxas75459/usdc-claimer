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
    "4NzNDuw8RrgqV36a56t4RtisK4UpZy44U3yXUV6qG4fpug2JbPsBioHJj8JeNYUy3pM82CAzW3zxvqdNmjZdwfyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P87x2biRR2dMpF1WC4iwvAaWSM4NFeU3NVzXYy3s6kjeagFtPQkNq8QTTv5CNEA6fv9xWhmgq1LPEkDCwKCFi2G",
  "key1": "3PHoc9KRwJS7e7A6Zk9kXjTEoPgPxdJi27RyY7WozapDkwoFiuZUHenwkgTw11oGXE2qKtYw1vV3JD7Nc9JCDDHT",
  "key2": "4M322AGBTZXNsKzzrwm4MGeyrdrmsNcrdwDrACQVgHffJAB7iDRhBvi3VP5CYFv4Thv9WZ9fxhvBaJm2RFXrkjSF",
  "key3": "4ZyKQesQHu6CGSrPZzx4W2Y2m9cPFqNuR55h6t1EgfTwXr26JET6G4DwHurV4XSneKqXbKPQhSioQYwLAYD3neQ4",
  "key4": "4cgSY7uT2QZPBbdNpCRJziMcE26Qn7bY43rgkK4EX4WDzid7UFuyhLequZsFuZBNCoexQuDgbkXJ228Y91yfTaws",
  "key5": "3zVc7QFb6FWTPTn7JVwQgbHKEC3TVj2QdCsH9U5KBhDSBikRpJpWPEEDpaiDkLegSdFuiBYWmrLVVWrCcs34uLP4",
  "key6": "aw3YQMgNWVkLd8fyFHE8g3wZgt1L9W6fRoamkJmMF7XakWPSitDYGw5YrYGLunFd5usCTSNpF2bzZ712bdnqscG",
  "key7": "4c3MMhEVPFPn8dK3oHZ8sfPGiCRXLPF22XCcVPia88GPrZPCDcFqYXez3aPxke3KPFtg2gULRZhJvgBtNGcCoifJ",
  "key8": "2LP5ASYWYyPJ7CRSuHq1pUpwAzgtydcm55vUFxdgGx39VLMJBL6rgex9mjH6itYBwgcQbTz7pdrf2SGmSuWjJrSq",
  "key9": "3Wb2X7AL4bqJgKys3p5HR4cVfJ3L4pmxE9b3zKvtQkSF71ZA4xfhGwoNbux8LbFRrz211VVSNwReziqGcxzRoAi6",
  "key10": "33xQQxmC8C9y6AGn4XyzWAtDtrJoyDZKP6JiSp1i83gbN3umTjn3nAGnJNcBrnQWL4tqzD6xVcg6HqjWqPbEcaNo",
  "key11": "5x3btjVcQcsBCvSGLqKCqVDgj2iuQvTRKteiWvi2mSCCekhjMtYopdrKD54mHrsNQW73fxFnHJLybtA25BxiC8pt",
  "key12": "5xK2XXwyDpHmhcFai1saezixsMy5mvSnNyqWMH5E5cA9LqZTZp3AQHxAqGMiGrjAqJjxMa8f5vngsyxxwpLirvux",
  "key13": "2YXioCWQ8b2g58bchaikY3aotZdCnbtgSwerb1xHCJ9YdPiMD5DG932uqLTwuRMHVURrzWBceWA7QdNMw2UkEsjm",
  "key14": "5KvtT7P2c1WGeKwn2kSgmdDJLyZ9xr6fKoVKx59e9iXSL8s7yFMgZrwwB6Wgco4Nm5rn2FcPLjZWpvKFEAifF26n",
  "key15": "7uTXdfrFkmHoMEWwqXk17fhpHXiVoMdaZPjzf5RdsWPYs8tEgkCAPy2nNyNTEEqwQqiE9hXG2ba2FqkhpyyMZgX",
  "key16": "4qADq4tMEyoBbgCf58AvVzA4FHKFH5c8wPppze7srLrUPH4ebmuGEBwHPeLrP5jUXVQjsryMJXsZs2W2D6vM5oCC",
  "key17": "NE3cNmsoS9hhrRYLgzaFENgekJRh1APj7KjBBDkvMvkSNj15BWHF7fm69tup8WoC3LMMSdHg9iuLmcA3EafQazP",
  "key18": "4gWQ125dk5jTDVuAzi884NxBR5ifRAyUWCaJ3iSFpeon2mDGPWBfWHEhvq8bY7ysLtUzLL3X87vh8ZBkb7qmE6tM",
  "key19": "ExBG4GDhAZH7uP5CXoaTsgd4UcEry9a3ZojoN1N239FqyJtZ3fs2Jy5Fh5YpVzp4qaWF4cq7jg5M9sJ6NBD1WoC",
  "key20": "2WDXfE4XZXJubKJ9wTjpUC6VUQRatea9QSqdWSJhwXDGedvHiD8zzR175uwyTmvqy5NFCmmN4qEsbwGMVm3eMLhD",
  "key21": "38o93y8RxpzUsGGn7JyoYtJ5DuoRj1GjboESfBEtJ4wAz4QBshwAYVcSBoD1JyZqwkX1Mhe71VE68CAQ63EoM5am",
  "key22": "5uA6vc9sKDBCNRPx4kcc9jmtagZNzG6vckCJvapnNkfAKjvVphQAcRjYhETN8bVYRb9hvNbDsZembaBUqiWHdc6V",
  "key23": "Qam4hyvGhqzjVUrMsb7nHmPUeXBkp27kswZEH5L9wcqcgaSDv4cpoVCjLWySKGptXyvDvN12VjefNb7pThq6EMK",
  "key24": "4WyDNzWN4fR7SJi2tmcMhoXqV9zH3yjXjoFzPbBtTa38ZsYZFEQiQExjWPquPvc9wQLFFmNdRt8cqYQVA6q7ctzV",
  "key25": "55A1wfDeLiaegqJSzTCVBWSTKwtvDojPaKRtzVz2ebG7zHesEM69mjHzMapEtksDR1hfcPGpxr8n8jsinPFX8wxP",
  "key26": "39mirT17LB6piDky46DqGkBRhNajxeurhDCvS2mFH3KGLxA4kc59vuG1LucmFG8Hnssm8SaSM81p8Tjnx6qnG5dM"
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
