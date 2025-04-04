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
    "2vtWWGfGuZGJMqKH1XNKDeW6LXwkKbsWvAydSm9Zf5MwNeysz53JLjtUhMjTuLL5DnYihE4Kt4YGVuWFnRswckeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xw4QhexCMXFiwL453GHrEhoq43jPm7vABVrCgKCKPP34Xm7P2Ew1nY2zn2HPRS9H8DJHpg32RHijmWUusQPtWpk",
  "key1": "48G6nvVyRH5M9eaLgYgmHVTP57bybqaREnMknTPTvJLtZeqHsaQyafTpp8MaACadsFLg5T4sDiZDPJ4Jwgfkcr9u",
  "key2": "4eBUcJ66NvMD79agLGHvhGNjQGa4PNucKEVyY4NU7MLES75Wc3mUWGPyZDzLyuKmpZxSUFrK1sMmFCXeWARG4vVf",
  "key3": "3V9bwUeY5PmjCRNJgYQ6kspQ1S5ZEewjFC5QpEcsXXjVaUqD6nAJRTXCtayesaNK3J5kVJ9gfFqszk7dKQe8fcRH",
  "key4": "2V449hFXbdJkwkDgLzsNsMScGQWebcqdikdqvbcxYg3RtNRTHVDdHvRrHYLVL9hNQ7rt1QW98S9qvrCydVsM2he7",
  "key5": "5eitKPGeuryeRVPnk3nEZPKMaE2mS3DncNY4HgjzLJqyacK84YpqkcWE75uf5oqNr9wFZPEe3NnHuH18JnTsCsVo",
  "key6": "uftHMifiN1iou678pZiNxfRssfaDALqNXgvaRupPcLCbe84gMSz6k5rzk1aJjBAc3A6A5K46ivQzcrn7U7rG7t2",
  "key7": "3iXBUdoxTAYE6pVhCs9smgMj71FwGVKTjxWb7SUZD6DkSwL6SAGAYCkNEpcGe5kBfjTWavvpSMHPF1S8FYboGx6H",
  "key8": "5d7Lie8UGoVJnANe8rgRuviX3eMUHRWbatN33EKTPQfd7nHTrnAe1BSoUHFT6dBRCCkseS9KWLqzMRwhhPmKAYLK",
  "key9": "44i5fNV346dWemK7eKEHfifEbMuXPVDkXSqtgqeJWob8e2GWWQYjz4iRwdNoJwRBPTdx8G1B9VxyzpE2AErFurzm",
  "key10": "3qkmjUVcwNH95rmeVM2z2Ey3rBo3xkmdudC5oEWas4ev7vkExofwbewmw1yX3R5PPRSbxaq6MreaU1ojgqQcGmTU",
  "key11": "2dZKdV5oXFkw79ekD8qVPAaFofUPsov3gdSi8Ykxmoq5S5rH6cq4afEex8tgahhwqCJEsTghxWA7qsN8KqSAWQ9E",
  "key12": "5PR1fLHsphtrHhUFfMrAewjhm1TP9RBQYkkbvEayRC9XpBVSmzQYL9cX4YsEHVGuPaQf1t32HUBfrNZXrz4GGSjw",
  "key13": "57f4RB6owvK9PgvMKJsthiaytPFdjRV7RphekoL2vvVGqukaDi1mzpNgWRcCRei1HSvBz7asVWyMrqGUDxXUfbea",
  "key14": "46vPBihyvQ2z9fkRokSt1V2YHaY9iQULxjDKYwUTqKQwNiqR6D9dcR2rLbJ2Dpj8eQkt4Q3sJ5rqowhcgLHVCDu3",
  "key15": "BFDjsQZGJEznzgG7Gs5jvsFKsSXnSMda2zDBggByTs7W2YS8ZCT31iDWV4QpiLpVW9Vonb3g8UTaMBdivBebZz3",
  "key16": "2BPg5C2EmCcyE2wu4UxuRRpEVDkJXpVfRfwRrtkdkMnMtYto99dxjmosmR9mCVgVC9CM69bgnHvu8m3EbPLicCU2",
  "key17": "GPHzC3NVWki4qEL4Pgscf3DkGP8wipUw8dhKSQmNPXKdpT3sjhQZHuDk8rvqwiT36NkRSKitMREvBRz6yocHcKW",
  "key18": "vZfhcBmskF4PkfpKMiU1sRdVPvCk1T9Cxi7mXRWjC2MwJ9zfo5MYzL7jaXFnqht8hfGvnnCkyU4VNRkgsg1bGEN",
  "key19": "4YvatSvxdsEs5JPbuRSYKtWHGXkrA5bDRmjM9t3m2NCQW7CK2UEqnHQT1p94aQCX8ghhjak16cQd2uYLGkQ2b16u",
  "key20": "4xjKyKpBwrghbaoU5AtynRs8VzjnNyb9RThvzQMLpNhmwmWnA6DyJXVLWVhs2qNRVGSbCPpZ8LMpV9NvEGWurGAA",
  "key21": "GeEbd7iBAKQ16mS9yUGiwWywDHeef2weLugDeQ6Wgy63kRuyYwCPxLJHZoeshv71Mxeg7B4FVMaZLcQuUSVCJTG",
  "key22": "57ktHPxCsyVTuJaWKZ2zmjB1tcKnckLKjB97JELpPkCjWbzmSf8knfB6CKD6dntQpDoCEDvHx1gNR7ePXVTwaRi3",
  "key23": "BK9yVxRvYCjEYDX4apmcWGCUZhpXb1asey38cGY1MieXFVxSk5e1mTVQ81sBf3KxwRgBN7CHqkhrk2eqGzFrfnP",
  "key24": "KesYHF7PHvPwr8NZGr9RVGeowe5XLEuYivCgnG9XAMiFJYsC6dz8D46XWSL4kZwNeShNVcLqoG4r3tXGFcgXNnX",
  "key25": "46tpbEGPqNwgsXnfpg3ApJnYp1NfWU6G5rJMeqexGfyh26eezbuyPMVTiaTMTESS75BTaw1ZRywv1cLAaWH4C5je",
  "key26": "MVR9tuPoP8hy5XQuaqr2S26ev42DDCsX5jzMXSMYCxmC4FxEGTPjoo9B5bca6MBdBBxG5sg1r7fj8LwJt6oJ4nk",
  "key27": "4XRNJcQW6TsuPtsiZjtftsSCkMSETLo2L3XnKFtvmv4jGWDk2BtcjcNycuXpTRTCFQPJtrp5nCSZkjhjybvJTRKb",
  "key28": "3brtZEbeYUFghMDwJM4Mpf6wc7nJ1reH3jQoA3KpMRPHb4G5rJKcKnqvPYRWBpeQwntrW1uYWqehUnFcyuGv3p9N"
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
