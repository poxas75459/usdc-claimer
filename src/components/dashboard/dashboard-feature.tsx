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
    "2tmS69TpoyjfVEWZ9S98Na25YxrJyXMXnsmTYdc74HVxG7YznyZ5AcwNAEnZEgqrwy5LesMQveaVfHDR46FFG9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYEkXCquAQCBpgFBwu1Pmt25T2byYy4JYJWFkmh9obqdLDCbWyENwf8zyQttqqnrmnP25TW1AZG29f1o5jwSB1v",
  "key1": "2yPLJgF3wAVcSgiEqnFa4tYkoHQUcUQWQa8GNvTvYjtf7Bw3BayY9S3NXksndKT9PvC3WhwVzZcNVfmovFvpGmwM",
  "key2": "5egnQf38dYM1LQXaXufE5F6gUt2U2Wf35Wy4KeXcpUvghdbXLtENDMRE2FeJkE6AeUFoi5XAPQfFSsiUW2iu9Ayj",
  "key3": "32fb9PC8rysTLDkvJzhaqRW2G4GnNnptRpKxGqMYWAaJPmqBpY7qQQ9ARDzx262NASaUTTV2QHYnme1o422NsbQ2",
  "key4": "xbS3b2fQEDecFnuQEt9iSuFSVY4R9AuniruLcHZhYRbLEndnZcSWtxkUV9u5GdTUFXrK5Z9BXufWcCno1s8SzCu",
  "key5": "2K5qrSPQxiMo68PPPK9PALqCYDJBpwX73m3bdDgYsxztC3qnacCrp2K7dSeW2WumGA6XEF9M2TwKPFtpvNcwJ4Rc",
  "key6": "4EAd6ZLLAQZoyZh7ndbRFcghy35CroWQwx5jrD32nkwnGWbjC46BdTnsnpyDLprsjF5286sygQv62yNGJWGdAXzQ",
  "key7": "4qVM33eTdmHdRG9ZxYUCoqkkqD2AGwtr1LJhPHvCnULA87DVeZL8GENBUrhYuPDDrxv32S8yitxUhZySJmaEbg6R",
  "key8": "35x9qTbTJPDj5z6v6XAhvmXf7jGynnAXbSLsxuH4BXT3sh4xupgLfBWrDNzLUjLfBdtrksY1jXQ9xRrrKaWrDhxL",
  "key9": "3Np1qCAuGX3eTZNHApc7CLetzgDz8PwXb8FzmmqLcXGNY4sMSRk9yVJht2oPPQkMHrneGpUicUn82RoccwjCF2aB",
  "key10": "4HZgEKhkyBYr84zHNsceggxrmxgEtFr6ryKZep5JhYQ3sHybmeK263vcoLC9W39TucCHDp2ZJJntiQNwWwgAzTQN",
  "key11": "2bcKCiHFZb69Gz4BEoXqYZYFGxXDtNpV59DC7kdTGx2Ex4J8ennLKRgrmiWbHuus4UrtmvF7QDkCNW7SGJjqna7g",
  "key12": "cUYFD7dsh995sBcPwya9JgcBgrLpxcg8kGpTXtsn2CrKuDVX8DYNLFfnamCL1oKQJhTqHiC74MLo1DxNPb72vxe",
  "key13": "4xGXVZ5sXfGCFfbDyVPBspegm5iewosfmYA2AKh5qyx8RLgMbNVrrgQXV3C6CDRkRCWH7qLa7JhFMM1PqNbGr79T",
  "key14": "3GBU72Ks8jaMHXae4SC5MatCVt6jF4nbW8Q39g6MkanM4PXxs7XdAtZUB2D9Dzqt5t7v2cpp4nJDpRkEzX1yL4sX",
  "key15": "3379i4kxmrP6BeQP85vD2oPkuAEUZ19KHW3ec2WeVaNcvQMM9Fbi8VBx43uvcboGruMC3hav5Qvo1uWJD5wRENw6",
  "key16": "52t7CJ2VSA5MzWZdZ7MFPbdMj46fvSDEapna988AMLdzEuFJEunD6zXwM7oX14Fb7Ccqs1yHMiMTDx51VAuQiyyT",
  "key17": "wR7Qr3EZbfDdvGW6AJYk1hLBsgwBzGvrbZgFcbSxNFztV84ai2wHvqNq3HV2Xrs9y8HQcyqKdSpqNmz7VZJPU6J",
  "key18": "4d7aCC5LH3nQ9rTVE4g3vYxc5QW1hzjeUUqGvUrLLwjkMDEQPe9DuKUAjEz8jYJwRQg6EjUQBfEkkVvjzTmq9Qhn",
  "key19": "suoHeQMkW25PHBGf8BKY6zAXd98uLm7EhVgPWsSUCg3RCEtffG1Z6cXyo7k77RjgJ8w1Vug5ntoguCCpYme17XP",
  "key20": "4aB6n7nWndfu71FYhKLASzRc1z6hn5Wd6Qxr1wRQccqCpdkEB9NmKXkzn8vepsf5Ct2we9Ht6sN3q6QRZhbTzi2P",
  "key21": "XHYuPtW1vpkE7fW9Z6hJn1enPA9taKGFGWxhQ9Kd4PRbzinzbAjcRtsQVb4c3mbBE7awCJ2Zy7f5TTVp42vzxum",
  "key22": "5YpCa6iwL5qwAaLF7p1trLoGXdHCuWaMLudZCXVSkf1kdXnvM4SCfYCSGnPyYkw2LCLfdHWbhTHDB7roaTTVCTmR",
  "key23": "45hfEcMWJsbA5P6iCKyJKgs14a8w7bb6eZGm3LLfQUjuNQv6qAgBRa8jQubASiFR8hh2X8s2YkCjDtde3VquWFGM",
  "key24": "3VzvDemeG6DpRU6zKpBARyEX4x3LKbiRonpFhhdwatQ8dZUTMCmXNSTxuC6aVu2FkSYFaq2CoVSMsLiqhpweQ2LY",
  "key25": "398wSN8qAaPhdeDBdcUF7qsGStKRgWDNPD9fQhHWPL6HPshgVNU9KndxHyMPEU8shz3zuZpVsaDKxcbcrzch29jb",
  "key26": "2EDhbeg1c9rmwykDM8urNgHBA8gNSRV2hXspFSAig8Z1KHFHgnEfsZBpiodDF6wq8z5aEEHyCtkeTVL5uiFu7AXd",
  "key27": "4bq7MefNxNBwRn9dZMziQSS6yYY5GVf6L4qN7N7pVJ95qLqorm2BwU9iYDjUKhqqAjWp8zXLaVZGxMGdBHpLthgo",
  "key28": "5rktrRJFnNMutkEgvRJ9mA2TfHhmrYvAGvuC3xsLpXyFkB4ZsmwnAq1ScHgyXBcZ3sHSw8Cco7rjyGLfXitSm55Q",
  "key29": "5Zqu5qpL48kLHaPRRFjWuKn7FhaTDYjkxA7CRaaZ1bUM7UDdfiPc9UHzaeh2Zej3KUfUHvs8iJxpki3Q3n7jRBQT",
  "key30": "X9gkUXtfMNMiBLi5FY23BdhVrFf6a8y9MtEwaYqH7McNRs1S3Q5tk7nTigy1Q2p2TDChTMcBVgAscN4M9La7Y9u",
  "key31": "47qMyqKgGX5TwcV3yxhGnim8xtvQvp8Zpjm3F2mK9Ays9MfJo5Z2di6uuhv9bznr7dXPQhwD8b4vwH5TUoDWrmY1",
  "key32": "2DLE2j6JYXCo68UHoBAGZcH9wxKHHwT5fbgSPiWNy1TyzyUnwmdiaEmnK5uRGii1MuTckmeuNZrMYTGxZ2o1UjkB",
  "key33": "42fsSXExjtPJQJe8Rt27EkEkKaZij9pwG8AAs7hikUMk88rWZ8TrZ3ikEd6pYuqi3PrMxK5kYZXywatEbBTUmZWv"
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
