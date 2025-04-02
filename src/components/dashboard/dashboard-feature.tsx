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
    "3c57x36hdndHWdpBJbZY82K56ajD51SphwfBZzz46oaD4xKr1vVxm3xEu7nDUVW44fqKQEZrruyqfyhdunbmFFBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhNYUXKK2U2d4MoSN4huSYpmpZuMELnPy4X7s3Fxr72eiHz2cv9hWpN1UfDTdS2tZN7D85kWmrPXgULk5XfLktS",
  "key1": "41Gry8zmcCMY6bxJq925cKv4nhqzNr7k4CHbwE5X8frXPByEhqgHQJrirVgDUUehPyJDnRv2GnzsdStP7PdkCW4d",
  "key2": "2b549wPfUvvnzcMv1gSLBDDB9hjwGjqF58aS8WRSPEzg9xiJTAJN5gDUvNSCqinPNFzKi8ZMkcEvKQDKNtF3Q3xg",
  "key3": "4oHTBRp18R6L8eD3JDMyB3Qij6EtPt9LbPBX7z2N7zkF4D5dinKZuxM8mTU4545VDcfQ25yaemVgUhTtQmhhzubq",
  "key4": "4WrgGwcnZyiyj9WdHSjP9maAraRVjKFtstqVxuABahHxQPmLKCB6PovJj8jtiEYgMrTkGa64dg8MuwjzLy8oJTLe",
  "key5": "35Th3hwdWXgAjhx6NRaJWRe2J61BNYwNoFEkgGymQcVELt7jNC7cNEVUhf12vRXrgH2XffzGnybarKxPkyVoH2BX",
  "key6": "3Y22NNyPxYC1bWfMURuAXpqDNxbkNaUL9XicHpHkjmgbwEZdfiJJJubrFVCWqTp4YsvLCtMisCfPSNs8J2XZ7TGX",
  "key7": "YzmmubJXE66CcKkKuGi96ienupkdiAbf68pe76s1egwj5mPmDk4Uth2qEsVV8xrpEovdKRsjneYbDjZLXzxn1y4",
  "key8": "4p5ZRJksje6vepSWR4mfq74DBvfzntc1ctAVaLXEzFaG3PxA6VAertJWEM2nvdnUHnJGswawzg5GdYiBZzG35rRf",
  "key9": "3d2tdhfSWoFaMDYkaDtrEpJDo7CRBFsS8W1gw5pYAFC7gVxbcFJYaNdLyDCEyssnRqwgxeEEsh78aQXnBAjSjQ4G",
  "key10": "3sgvMLg73mTWmHX1E4HAJHYcaCVPJpBeKBqJYbs1SSujXnWMByww5Wg4UJDmcCPg2EsfpzC77ZRBPFQyurpp4hrk",
  "key11": "4WY7a2upkoHNbzkvGTmde4ezxs6EtniJKrxw8hcbzsYCvEGfUtde99YSAQHGD2nsnPVXgpBHMCdF5Ug79iXRHPA",
  "key12": "46Pv8saHDguSLmToaWmoj9iNEGjtVoGF6Acf53mMEcFkM2kDo3jp7TSs2tNtThUxcxVDJC591Rau5Gib1jx6y6qZ",
  "key13": "5UgJNxwR6fyx4qHe1PjnNAMRywXGgugPJLQrEgzZh71QY7uJVRePfThKHqLFbtrStRAjyp9SZafscANpyMJN8nfp",
  "key14": "48cJZBcB5Wri9LoiXTZy61zADgm6zZe2AApuyfrSCy93Xp8o3u94jWcFyDSzE95UZV4EHTK1ixLpCkoowwfv3W9B",
  "key15": "58VhgXpB5HitMuZXqcTfCu6EvvFgoUiuF6i3wQL83N9fQmkrYfTNKwDPAQxSX8XQLzGaKdz7wMRdFfyGHJ2RE8Yx",
  "key16": "2JX7cLy4swJi5inAuoAPyUwz7PqTWXPkJsnMpVNZLdbChCeMvjWtUMAajjXGNHr6F1YMiDEPx6gGV8uoRLBCah9q",
  "key17": "4rKYUFYdG69Jbvgko8Tzmq4U2333GAGWSbVfJWwocKDGoA9XsSddd7LRAp9dYrm2KhVpWs1j9MReD5kUeJtkYQmS",
  "key18": "2tBUAu9y4Mta9KNz5cDWHehKaWhWgh8pKjmwgHZeMC7k5aJmFC6Ks4SoWr5tNMvwGr1XdbPTaZVUUWAPFcAhUQL7",
  "key19": "2sThLpM3SzQA3p1fkK7kGAbZgEp36nAbuSeUXjBHXMsLMqqRDM7m2Ymtu7UQq1QB4NF6F1dHaWpEgcFJMCyEkTJ8",
  "key20": "4Acvh7zdcbFy4poiN1HJL98CR8rbrcf8d3D3Sn3HuhjjLFTht2X513mymAk54V1e5gVPah5Ja9rStrA3RQrmKmNh",
  "key21": "5uYfd5Yy8un7AmCSasm648SqH9gb46FDThysLHxn39RNyjQm4UyyZfWnkffFSj2YAy8aUyjNY134qHnLDykfMc7C",
  "key22": "35zzpvivhURtz58ktrYNMiEQhfUxpWvXvVLNTce8oWJCF5kMSmGEmpKEYENBZHFka51wWY9GxUMLjxscRrBo7ovo",
  "key23": "4wjLcfygAdXJLdR1M2KzJ4cpjzbgwPYcPFekYjYTse9NeEiFSu3NQwhWFNrj89pcjJU22QdUWBxcty2DRn9KeYjE",
  "key24": "4X8RJj4sBG9EXpTf2oGfdtdicfEi54eaR3yyTPqJTkX7P55paPdbxpfRMVTgbDSJQercwCnRfTSbjNcyqmhGAzVP",
  "key25": "4pbRrE1r2Q8eRDXmSgwddLsns8hrrAWHkjgmCErPQ1hCtWhJY9Ry8BPtjQCYHfDZpQEiN3mexo5zCxYBsAz8RJNm",
  "key26": "2EoD5sX9QGRs1gJjvAwSrMLyC8wZHSgACVEfxK5gqPwXDkVRfax5gsieniCefVocrVHgUC1koZ41BVogiQwMAQrk",
  "key27": "3CDd53sLVBZGGYnUjDmSHGqKBeeNYgRSabL3oE4nyrzYKSxUhTNZSsAThAwXHHbjECJJGPmdepDjGZureiFCXwfM"
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
