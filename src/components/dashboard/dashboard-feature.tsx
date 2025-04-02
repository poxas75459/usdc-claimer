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
    "5kYZGZpGzGVMyD5pUY6PDxeGyMqSZ645ffczzymi77KTxhJw6DjsXqCGh78a7HBv8tjgwB79bV88cinXEwnKJhXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655SRcBVBEyCnCJbkBsDTKfuLgAeQgjr4Uw4BhX9cF8s1SPfLb8tD7pMwxGvJe99T6xyoDb68W3TdU2hDYWB6gsC",
  "key1": "4qTdgUBaSEVAMvwTWmHXzTr2phh9RbZ1iW7yggpZxewkm6Hh1kZLV9ybCwj9hWDFEU6ppKFRucLx14XKxZSNeKTM",
  "key2": "5kmgCgTZmehhAViQQAeS4ESXU91y11oDmdUEGtzFgT2ay87pkQuxTuEYuNxz8rfb9vebZ7ZwkLYv4RbpGkPtm7sR",
  "key3": "2LG7unLg8h7931oCdYczmtJaD3E3u8eMosQWdoiA3yxqTPGKxrfGrCCyjdZLYNrYWvNzpz7PQqrozCZWVPHjQ6rD",
  "key4": "5piZTUikFZf35BVzcQUVhrMf1xJh8SPopkmDMwAFnFx9ycbKixhMuxr3YXHcugN9mpLA97d9wybrxZRPpugt1nFS",
  "key5": "5btM6MmgfM9umsTm7WhY6R2thbBLU6jBER6oCgJCtCwAW3CMb32mCtzUv94g4UpymqapkGRznGrQRrL3S1o8R4of",
  "key6": "4dCARuqR31okpMhF6ysE5LWdi9TvQSagtibruSPn3jrQobxN6C32PyC3WRxkcaggjRzDFFqLZNWcZNsLGUyA92Fx",
  "key7": "3ySLc5ENXzdXFdfzTxYrx92A42Wd8z7x3ccUyNz47ZWoEAZ8UbtFCZqVvGVMoLuCsKr426j2hLw3SeJdvjZejyMV",
  "key8": "3zP6TXYSHUe1DHGVaNd6HSr6Dm8SX94G1jiGHguYwQZg1z4Jd8MBTTprj1nqzm8gkGCMHNshxxVayDJHKh7RYibH",
  "key9": "5Y4VbdaCn47feEGq2kcHBsBjNDYpB8cagChMTBqc61ZMGTYqYebeYsRwd59UPvBVMfyNyevEoa3Q1E7updgTz8tJ",
  "key10": "3Hz8dJQK5ir8sXfL9FsLEoMrQTerhN5gprKoA33MHKbunFhhhbw47qw6ZRs61ZM2goosFGA3n6YvdrvX5VPg5Qzr",
  "key11": "3mMShJHY7c6p3mLMiry8oNJZoprZKumsST5cZiek85sU9AvSzRRsyPkkx6gFMZ9KnEDpt13UVMwHQy1LcThqHP1t",
  "key12": "24VHk4KNS6PWcYsWRc4nzinVgfvFtUJG1yQGtNaz1Jdbp9xaQST6m7jSWYhhAN74RQVS2mFWsyvbd21n9q1c7pSt",
  "key13": "2frv3WUUvtBP8eeWg9s7RaMtzVaYxHQhQvEKpMxvN8p4BJevcyNvwYppFbvgu5X68GXEHA1A16Mzjk28nebuEixv",
  "key14": "65j7L3omUKxTLz1qsTzwLjUKKqzwqzHBhg1bYAGkRej9tzK5nbt9qTgCbczm4HoA8GR7bBTTCbbsMVxAVX5VrLfh",
  "key15": "4pw481LUQpxHrook9UpyrZfWZ6NE58bfZqqPm5j74RTXYUJYDUDyLV9FuygTggDMw9MKgK7cbeWsR4g2w7CdhPhW",
  "key16": "5MedJwQHyWA81Y7LkB6zUunkdoPz78kKnyp49GmVHEz92iRv67R8Q8d318xgXozcS2uN3nzfthxeWyKHiZP5J84X",
  "key17": "WDRfPRdWCuosXfSfrPi5B7RaGeRYJfSom4FQVNWnoLjPdfVNQcjh4LBgZW7HE6yAeXMTPy889dUyBjKcgB8zsHv",
  "key18": "4EXCX5yTLa4iWDgKF8rvNzhcdPYs5K62mGwCPo7uUvJeDwLqmvk6rDAfM7z7ixRLzDpRZZMAw9fekqKTSMumgFXh",
  "key19": "3GHLW79fBDtkDhc6SdpXUUPZRc9WrDy9yBr2LjEBFqSBtagGmLiukstEKS2wqBzaqDPeX8i8CYp7oD3qHC6wLBjk",
  "key20": "53SWTopodQtxST2bnjq6sbKmHT3y1Szj5WSCKnKwmzFBTsXA7mdeDU3jvvXBTvj8fnXBPwFTMtR73TwMPWuQyHWL",
  "key21": "366TjWk9VXxQ5erYjgezkeu36Q2mVmrfVPACBZ2rLjgLVRMkgsYmvc5v2oggWFM75fvkjyiNU1GEVJRHtVJb5LX8",
  "key22": "5pGDrvGC2Xpm6QftcxshS66qWtHwqe31TRhfVo1SKQKRoJF5nv5nZAwBLHommnGby8iUCyKiHNrJ869aabgYHMSa",
  "key23": "2zSZdP2173EX1d5aQxXQHoSVeBKTqxZaRc6kshKhnMQbH7kartxL1uZitGztMddCFnRQumJB957JQLhjunDpmeaz",
  "key24": "5DnSBq43kTW2vkTVa2EAtiK17Hxdpi2XKb22iwPWyHTfhqbtXgDY9csXbFgEf2YeY7QCJSqhZk6HtM5RdSyXriRZ",
  "key25": "5GSCid1uhsh2ymhsYrvNToCiX9ZdEwANv3syyPz2SohjD78dBysvgZzcmj67S4ojpcDBBLi4KKKGhj2qdNNAue5K",
  "key26": "Ag3YWrNHAty7g8hh57bZpLALMvWUtGERxH8pJh7zPop66uEDZ9LkKpJvxqHZS4i6VMJK5aJp5dNXvW4DoSCYkiC",
  "key27": "51Y3SZA8H2xmHuLr6uz8FpCUGueLpLn5d7Bw8mDiddeoozYMCBo3HhSpWT9cRybqZG22rSr2Bk5y2TRb7WxNLMNq"
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
