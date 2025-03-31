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
    "3A62pennsWVLEYKRH8fSMWPiooiViQHb4mWC6DXzdLkRZQxS9UqZaMbV5H4f6yWETgdExrzmai14uCejYEJuUnZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euVvMLUzKhgmbgmxWtj76YwjU9HbTD1WfW7wQDGFND971S8UUscuWzyhV6gL78VcAdCD7fbQjm5QpdM2HNrrfaJ",
  "key1": "5jF4maFowNUWHr5VbxCE2BMrunobGCQ57ZHFc69jNpGeZfaPeAfQkSGqVisaPg6YhnHqCVCNwPfgxYPmDg9psmAM",
  "key2": "3w3JKtJ4Zy9SCVa4e437qtNeZZMBnBDEykWeq1ehtKZZYvCEke4TojMVWxMqAFzwW4DkUNxMbdgab8SZVqz3fvi7",
  "key3": "2M7dPmGYSVsQib6K7WEccdDCU6QxHyuaRdKsCLHf8mpgtWx19XWN91zJQU8GzkSNiWgLQwxXyWg5gMzosRXE7udw",
  "key4": "BLB9MM41ic1RQiWrbenSuZVqdEiE9kioTFpKRpuQTntcaTkYoG6H6JXTBeQPE4uqMEnoryQWJZ8mLuBERG7c4CB",
  "key5": "5WTMjJMDbPJHA787Yy2fbzj9Bwa1MWWBd94LX1pfgG6b17kPtsrZ1hjNTo63GtzQLJDmjnj6qWb6yWCedziiQkQf",
  "key6": "3BgqHFRbvMUMgztZi7Cogt4FUc1LGmTsQLJXUEn4u7ymcezY9krZAWfw7fDLDatWtKYu9Ea5a7pvZMRZXCW5i5BM",
  "key7": "3VCeUwqrX2USnLqzMsgrEBA9DHkHxriQWWnkkMhz9kBcKMvfoMYMJDAs71JLD8mqn7XJmQ1ncKrkwDrTpcSDrugb",
  "key8": "3sF1nqHrVuXnqqNwJAd9NjbiUsg7R2X9BWG7SmeCGzMbmSZ1bjVoVk6AJyM2XKnsFdVCMBvswZe7AzXK1drVy6iB",
  "key9": "234mzzC5GBxpoJCzvviDfQRLWxgHmyjv83imT2bBm6RpAjukzfvAHsPvdFneQgbU3HfR4icrdXWcbA4p6GAZj22X",
  "key10": "2eP78jzstny4WyghVKVHG8Q5i8tNzjaBiAWv9BUwDMbc14a2qLjUZr4j9iyJzCLjd1P6rUHdJbqvziWPNfMxPgTL",
  "key11": "5MgRdYum1WZPrT6xLPQRVdpi8LZLwYa11Ud77aXHh3wwjEUeaWsDtNZfYFNv4gf9kbRvvibPymAHYk73Q9fGvu4N",
  "key12": "fcR65X88M87rjzEXAWr3rk4iUuMXcuNDiDeW15157nMEiVJPMFnDdEEFEg1mnEXNjLrqRzimQY983SZ8usk1ZZC",
  "key13": "3UxqSgG953oGdxN2646Yv3bTpv8tz4xsfLVUftbdSvyzvxk42nr5cBx94zYoWy76xPvCibpkqGRwD9sk3E7d8CzB",
  "key14": "62xeM8hYs9P7g2No6E76j3bTgLv8sJfzWfx1MKoPyuqGfUc6rUU8Ff8pPaDWG1E1D1bwxgU3zWywXBgd9jaZNLwJ",
  "key15": "3Fcu5gWYLGQJsQcCd9e1p47AZfpmEiC1sj7rjjbvBk5sVLMqA5yv6cvtrg9RysezWDPNtnKybhg1Zkt1aC3UxAMc",
  "key16": "3s5scBfpAf8EGoGrnKWu93KETpp4oQ8r5ewe1WmjQCssK8P3pPAdg6Grp5EEVkkxC5HQFuEM4tQFmA8zSbv8Cu6J",
  "key17": "3LUdepLPqKXY8WwM95jQPpBJVPxi9HBeagrfQBP6i9LCkEogpVMMHAx9Qs7Rb7KyYatK2w1DHbppes11u6SKcdWx",
  "key18": "4S7oEgukiX2gx4JnGj6kAVYNRwPBZxD4AfwDqqR82eTotfpE11EeGK5V63ivpqXmFAyTMaKVTWgKs2jm3fb5ENyv",
  "key19": "2ZpMC4KLnezXZSTKXmmnnn6wmuCp6D21iE9v81xQTgqqotvmENbyFKAFmFB664KvCEVEFk7bcP8FexoPntYg3yod",
  "key20": "4qPupAfQ4W7eWjiVp7LytSnKE1iCPQsDaoBeokGvB2sTDMC6YUupTC54sqmge2ze2HTxtbwdKiMN69JCGrDKAgfM",
  "key21": "5aY7BrdqxpztrZf3dRu55fgBJ6Y8CCasUvH7atbPK7L5B8heCjXJxkR7DEtbyaxQkxLKUuHZazjokY8Y83ucunHb",
  "key22": "4YF5SVog2w75Kqsx58xGryUEwqU2a7r8vX2HS8Vec4sGc6V1YHJCjgAoMT1QWXyfgSUuSJYKx8S6tBbyRuWdrVnk",
  "key23": "2foJxzXmWof88QP14kqVpRdnYmgSSvkrN1LTkTn5LbcsYqezAA87RkiFpvtRYn9FzFLS8bFNiRU9ArPfj4Le4w2A",
  "key24": "5mybKJcaCAovoQp4E643Ee2WnSthCwFsXrHuEmHXHhJSZcG1aCHpEA85V5cJTq7gvkkzjDARUuMxdqUa6K5ZETJx",
  "key25": "5cF6mYTfx48byu7S2Xt9EZv4oQDcYTpVhwKbP7vcvkLpbXoHZLhRd1uFPadHckPUXvpYF3Wc9WNSn6AhjJZkbd47",
  "key26": "4sVJHTKUMKanZQ7ZTMTg7ydsKYXYd6KB3ziFtAwgxV8Lp71yZYUdoVgy4GkbSNqq6n5oDh8CrcvqcXu8J3weV79e"
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
