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
    "vMydSiJuuXyHrgmkuVKUR4BmX2ksGBLUpYE9WmMD1735cndVFQVPqa7nK74uYo8DU4yg77TF3K2UNicgL9xdXRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obVSmkGzS9vxSAgRBHg9NL3N6or8Hy3bRK2HnWzMDek13MaWMif4NpxxNJhQiC5Ag9KnbcHA1WKjNZLy25WhQm1",
  "key1": "tCgCrDixtEr7FGvXgRqqgH7yqzjCv1Sq3MA4Vj8MBz3DHoq5MhcdR7dqGThE2xMfPXVX3aRqAszp1yYs1uUJXEX",
  "key2": "4XonnZZ7MEim547rPHjNaMqvviZoV8nEBDxTvSzjLGkjMQ2mjdWTSkMTW9E4esXtZRbLzmtZ7VnPHBGCzwYvMFQW",
  "key3": "3S3xW2fZMn8aPNbdRFzo6HwkmCUyGSFUvzHRW9BtrPED3TCXKn36qVs73dGLR3hiQ9vQoPUGxoS9pdgqGrM9nw4h",
  "key4": "55rSYVFRfMdxJzZ94KXinFCSxVTAMuEmZrNipDUPdDyHYWPv4K6nwKhVPyUPwMvyChzDY1To6LqoR7xFE1euJQ8A",
  "key5": "2bXhREgkviZwUyA7j3zw5eyCvHQm74JUXTYfugQmwdRoE4W5A3Xc4bxUUN8RiCSetfEoH5yPJy9pJdSK4smqvaqK",
  "key6": "5hZv9goyjHzyrC7P7GfFoXHN8ue6hYCp79bWP8jvidjgQeZD6bbXSuyxmdkreFdmhqtb6nph92g34BqzbhLEA1M",
  "key7": "a5MJKTACfHCHpyGYuGQA8shQUf19UswSQewU8WRj1fLnCULsgShDoaUcTMsn8T7auonKaVz4HdjFFUtriieuKBK",
  "key8": "5FxxLxfGe14wWUa32fdTDqtFp3v7eWqkjMzdZJCGxW6ysz3kg2XThxXeU85D7H8V6Dfnv38TzV7zKxcnGq1ed2X4",
  "key9": "3hEA3hALgHmTKeRQWdKdNsB4e9vBbo9xPkx2rQSZbhdZeav5h4p7sLnK6aUWfsYCQxvQL1qmqTDp3krPsSg2ykB2",
  "key10": "3RYQ4zMYsRzaYqTKg3ZJ5o5m9LnoPVRRENd4Yjmx3LP7SThHhMxTATyP3dBR5KvBN6aMdZN6mNFTSfnuDmhevvP3",
  "key11": "25YHhkGhTZStom2zC8sbqE7BuhUgRms65JjZtLA5rmngA9twM59jpsyR34aBbw2Xzd12RghkzPUh91b66sAj5rud",
  "key12": "36yVKBnnWsi3zoGVX6noXCBiPDvoq5m9mHaX7SU8TSLt3z56YBdb4EqqBFb3q4bJB15c1EHtjWasEF36X17jKugN",
  "key13": "xgYzW5gDVALYTTQ2CQcVGzDxNJr8BL4PPPDzLsqjqHaFEpjDCZcSzEzKwnXFLiKwhRbysaTtGM9wRFSicQxacYE",
  "key14": "2dQWCbeYM48B3wiQBfdyCW9LfVUjqjaLTAnzM9Rd1PvecUqh5us9eKe875ioNt5Fxetw5icWD6eCj6uKjDLhb9B6",
  "key15": "2L975Wn5Cr7KnuSFN75a5UWftxV3KM6m8JGvoGujF7Zm11nDUVJZwDTAkwYPVpWcfHiS6fgysyctB3JFaJFqaXDU",
  "key16": "5gSyxowSbqUqURZdzpCcVnfUoj5rsnkvKRSD9Nr4wQpkFAXmiWwwZYrp9vik5JFeqC9ELdEJbA8vkRtFcU1pizEn",
  "key17": "2ActBBwWFRSTkV5GQwFxM9fP2UGzASNMiFrXuzx9Mh8ZAY1egzftaiucBGa1gKnUFXsgN6VTiFjZWiTxWprdL3aG",
  "key18": "3CBG67zi72xwP1S8FMsBzmKpPXgK3xcedkGxzS5xGim6EgMgisBNWgfgNSeaXJBLsUcgaETnp7DD8wCCAV4MXxvn",
  "key19": "2opGdJnQ9QJf3GiK4wyT2d3TSrLsDhHDAYchPAQYpehYyZko5BtfuQm4Qb4xGshLvrUR1GPnUwvpR8WCGbRFQNhe",
  "key20": "5xzgdZAts7WCFsBvX1nr6cyn7gHLGwqg2mjmdDpYj3CVzTeZBKmWmtSFR7CpRxN3zaeGMRip6aoGDnMCkRTKn3bD",
  "key21": "4Y1UmT1HcnwBbenvqpeWXhNKp1fhH6BsZCY71yWhroUnvXAto5a2t6cE7r9rLPKvqdwR72rqs1d6qSsfKwj1aKTQ",
  "key22": "61KSqqReQUHohJRdyeH4brurNdNq6q9pYfyqapLjHhduswoL3u1Ch2UgGKRAQbn6JfnUH6j7moErAtK4DK5kawfR",
  "key23": "2Yxbbb3Lw4pPvVFtE71GonJtSvx5WEuz47fqB2adBSH21vh8mBHyscu3TjMcN4j576mYtzrwYg1bh1MGGA3hFbvE",
  "key24": "35JGoK9jBqReCM6biDqTXpzHhgxgqckEhhB4PbGtJqqXdkpY3N2wsVtQ2PFZhYYNVhWnEzBhEzMb8CbN26YGR9KU",
  "key25": "3izbKdFNQH3x7CtmiYQ2krPpqYsbyfrxPBoPBnr2y8GpN1wrk81KpiJMhfZNMhqYGoXAg5uo6Wss1k36i9SiGASw",
  "key26": "2z8GnXs8R9japAtmTLDxy2V54oAibFzThVzQndfwi4iypivxWMt5K3J2oBSHuBYz5jm7gq7iHm3oCHasyiMYnDBj",
  "key27": "5qAeYCAfhnDQTvjBjYHYeXs1y3KdsxSiGQxXGkXR1t5yXLp4CNFmrJSX7t8cSjcp4jxhuq59w2Z97yNDXakdqivb",
  "key28": "C9xuxqLBwbUXRBG1nZboTPeZG9gjZX9MoW5FKnJUCk4cyNhN4VdksLuwipR8Dkp9gwwXqj95jXKvK9Sn8EYXKkk",
  "key29": "2a3EkPoMghDEmBFaUZKhb9iez5JACB1CRNVwJcnASVzF5dx4uLfgihgN2vS1VNf6JnpTE74Fe9VpqStV7mzw3ncw",
  "key30": "ZxfV3RMPxTvDxuypEqE4tzizCSftxG5sNHx44Ep4svRrCWTgpKcw48fSKk9hj1qGuCRUv9fGFBsumaXhHhYPA9H",
  "key31": "5iYGQHc6NQ6uQQHFyRXyuQZFLWqJR6qgV3f1hWJhPFnN24Ksx7ZSgzQHS1QgL6KzXzRiBuqGJ2we9TsTNagxLWCe",
  "key32": "ndchG8CbEBAuXRizTbbdmMeR7xdN5QZsQCAwbEenpGMDdQaTzBD57Hmg9u1Yo4swUpeCbhJx1Weph5ZUapBrm5B"
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
