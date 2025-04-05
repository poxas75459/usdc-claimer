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
    "3LSCSk2HqtdsXMXmyrsbepde5txUyb9GnCNgHb6guLvNypgcaUKVsbue99Ha1Sr5zHnqtoTo57gfrkSSkmrRKNEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8H5gKWbunXoH75JhDpre9EfrPB2aGtsGYCL9Xktevzht2mTqyBvLUui3JpBNbgywQbEsfUkQgF1JYNo8beKc8q",
  "key1": "3fXA1V2Dn6NMpQccZsTcGdLHgKycCGg7q1f3e8obcC4UZiZUTeKnihA6vomjYchQcRy8otae6D42Cfw2DPTWbZwp",
  "key2": "c5DuL2ZATQeCLNvniMxAdhDMxJkHEWdyZSxCF7wagBHrFdbJZvnaGKCKxkqvDKog9m2tRe2NhweRFqNPxVqCEJF",
  "key3": "2de4vK5pz1oEjR5XYRotwpiNU7Jv2B7rB114z2E8zK5icfQ2MUCnNg2HWuiXDhTCadE9bckdS3t4SnpZvgYeprZQ",
  "key4": "3MYXeN3zPV5vzLAGuiZMfakWXUBHq9VdkJfXN28ZB7S3njBq5eUznpE8SWW9tFSaCd1JF1QZZFTWWHy6LCt6Y4Ny",
  "key5": "3oAZ8x4rWkCzk85W1mXh9gNZMYKcYABjafSeyw17T522zB79F36wm9v9osAxJgqxkBvFPyMCSeqpxsRnoJq2wBDT",
  "key6": "2vQRAThD172wFsEYVMoX25o48iwW5HAYgrddyFZC2pWh8ZkMHoS79FEFvyaeB5syZBMDpjutvoDSxS6FhaKgheRg",
  "key7": "5Kt5asm9L7Fw7gzwpn95j19Ryx3ftBDREMeMxpV162pcKF54sTnewDV4n55ydoDtfXN6XMLTDZQRoSNiaGAyR4T1",
  "key8": "mAfsemhABwod2Ak2Zw1CLuo6TkS9rg3bSJmVyu9BYnXDia4k4vhqLHPnmraaM1SbK4HhqzTbsaP6S2JJz1VPvmo",
  "key9": "GMQbVHnVfrLzoj77D1dYninFhqHFgwuDfwsgSKUYyZKMoALMvLwwYeW2SzVBhCotTRdGkrnMGpSKKYVgAFVejxc",
  "key10": "4SrDyujRjxQA3uUTfpHjAmGh5NzEJ5Ec7mgX78nFP2a8wD6saX9w53GHd17V821d8Cg9GtMc5DULgPnnnPDbceH6",
  "key11": "3ktZYTtrtppRCvef5ZkjTiURMyCzEE9cdjbQ1JmdATyAQiyNHoLNxFFp9BJdJscAvCfLyNSYveDCAKNgyqK9WGpZ",
  "key12": "2ffcsqrinuyAdbkTyVGFXjdHHUXm5sXYejNV6mwqY3yXD95zSHzGB3JNJS7i3Fe5n3isjJGSEzffL2LGMwRSEmf6",
  "key13": "2VXvotfrtLQdgFeUxnTk757R7yutA6DH9hviCBLSkfoz1KA9cceJNZnW4epdjDniYk9poxt7Y1WxSgjrpXSFwqvd",
  "key14": "5wpzrExQ9tA9UQdLKMYHSAymFQbkGVHMYRgNcZoEC97XmqHKUK83uhr96HS9dMvRALueucCU6E5sp2JdnZNiv3d5",
  "key15": "5JNvugWvsJjcBxdAy9dJ9P4BWKU2WP4sLvgJFTjyggprMK9FQ2ZjXz6NyrvzHkZDvAd3kx3zBemKbD2MH1iuzVf5",
  "key16": "2btkraYdtSYEvstMSFVpoiF7ubpbsDin3RVdvD2JongMMgQA5TZ42qGTAa9LTWBjoGgYhARbZpuFmYGMoQdHLHGW",
  "key17": "4LP1rbUzREwTLsByaPnFp3jJvSyKGXbmfCMSxXtykCjdAAAkF3GRajyLZZcLbGFL7A4PhCkqe6KcXM1zD6u5CsSu",
  "key18": "4XKqZL4apiMu9htMAf4bmT8vp7WfbksYv6jkLrq44TBqNA2cmJy3935rLBxKBWDj2JUcWbe111HdQuJHviCuecSv",
  "key19": "42QSEcPBEcNPoNkyYEQD7FbVExZ1CpJDTMAPMnbCGoTMzQbX6ghZhph31DSUrboHhTrFpQqVvxXDXYqiCgtjztT3",
  "key20": "5qvVBVYR57qaCSsG7kULStU6zwi5mE9VV4o1PjmFgidw3oGsPDCCMXcmadmHC65jEU4W795poduwyuHzki9PkYAg",
  "key21": "5rBiPx4DomjG7hK8T9QYfEh8uxF1YbTrkr1nTEtLShG68q7QFAFHRkko6ftvSKJHzxuLrvRqbktoRURb4V7Jn33x",
  "key22": "2KMHV7LbfTW6A85nkMRB2EzD722Y6EjCagWwCVk2XyEyBa9fX3NDKaXtbUVNaVzSDP41Lo4t4vSXSjbuDddhaoQj",
  "key23": "pLk6BxKAcHmP6zyUnoRbrNpkDuHC9LU87gXFQEgo8CJf6GW858VUeCHWKwccYH95r1Df28nNuydzT4pMmL48H7M",
  "key24": "Gfp6QoLw97NT7gEYUqv4zsZKjwVxJsjTNKkwefxHqy57tGdJ4xHdGMEZ4f3i1tkQiKPZ46pQtfPtuaHRwJUsWk6",
  "key25": "3uaJja3PUsam5HHbEG1jU74GV6GHkdEHmhsLCqY4Tqq3ihN4NPhGHhestLHZwTRAihVdBoRrso7mYtU9qEdo9doE",
  "key26": "4x6rCQcQLNbsioP63HgDPUBo3n1GBueGVaNqYHteH1uUduiyzGFcjNYkqba3PmXetqQ8xiWmq8z77tbBJgitEWUZ"
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
