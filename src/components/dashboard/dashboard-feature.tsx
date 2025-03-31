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
    "559SGLjxAW8SvUexicNv83fMCEntmon98eVrbCovYgeuwao8kd5EAyHT4bm1K55384et8nheRFwnX8bYsu8xW7UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j8dx9fikkwYhMEknqR9rotSCPkNVUjLCxmT5KQaof618kPfQGsEs9Wgxt6Ep2QMDCop98GrvtezNxJPeU8rZY47",
  "key1": "mRz3RP6p5fNnTcRogJHExBGCzo3XULh9DB2TYAztM9e6B196yRSCM2WQ19c8CA3nzB6DRfdhLBqwSgDvv787mQ3",
  "key2": "M6kVDPehFWoc6BjUAtwND51zwgdSggrrSJPzjfxerExzYMc7s5h88Y5Dy1TDXqxEBkKagU1tUMKsNeR3kWzgE2B",
  "key3": "5xRsrcjgwk3G3LSsRMYKWK4xuMfvn1tGroe4gkDS2SmksSE3uPG2eGHm3kJ2N49EDVod7zujhbf2Z7K7BHVWCNQ",
  "key4": "2VcFsaCEjDHyR5pxpPyuX6uJv1oyG5G2X4aEAxLxHApqrsJppwR1WE9LbZF3AonF6WkpUQu2Vw3nxDsUkDNwjBMG",
  "key5": "2qFq3Lbp2jjm2cLPov3UuYcKiMLD8t944wx4cEGJpmRu4LHznLUa2fXJVWuU9W2q4vZoJXup3FpvzJn1vntmAEUT",
  "key6": "4MwAbb2f4uNZxxWVc22CwV4aFaEMeJG39mySvDY4tvjBSaRmpVQKeHf6GLKJTbTvk23Kpx9xZL2kaTdxd4zFEpiS",
  "key7": "64Y9iHp7hGaUw3BS5gcEnPsYaRHXJ1qx2UuhfqEqQW7MSSUSYHLndSKXe8yTGbYS2G1Xz3CffCWioKRPqkzR8u8t",
  "key8": "3tj9zwLDWXv4Tf6nH4ibreL7hUCWYiX4Pq6r72Rwx8kQuyvEPfhToYGceYWg5Xwg3b5Tvp21jEqsKRiQrSMyD935",
  "key9": "4CpM5W8eUd41a3jLBTxXMeeNhT7HiYfAT9TX2NvyuUAsjFaPML6ryo9ujSRH2N4FhGgq9zeucHaiXUsLLJXcvLQM",
  "key10": "4Sk7EBdSvumdj8djuFtgh5JafgDrPUVeKypRYDUpxHPyDGsrXc4GPHGvBmrxvHNojwaqNLcdomX2M8nQXHE4J1dA",
  "key11": "3yTDJ1y25c3nFrgiNwwVuSREMij6pRYb6GJj89sbp15bxKWiyMwhZDUVbEBkaWJyFT6asRxvq3TfBLfNbnpX1kd5",
  "key12": "4U8HPD1TF3i4c3T39QpHH2YvdKzBSwdk1iyr8T5VaLT5oiscQDiDyXrwovgL8QtJ43p2cBGwcuYycEAt8VSwrArY",
  "key13": "4ELd8MDoUAafMzyJA7X2Xv3cCQVvjX3DLu8P7Sb4xGw4PS49Rktc35sgkC2CgYxp3Kxb9eniNf56CHVzK2E1SLbe",
  "key14": "1f9L2uK9cmJNoN6hBpyZARLYbhY7v86QnTXhcLwxa3E4urQpB49ZV5XSFaR5mAqrHaxkgCipGegbBNbG6vfLNkk",
  "key15": "4RSjzb4UwwvEuNhshpQ86bHNGPNwpTVyF3AsLgUs28pZUKGnKfSqSiG3zgNsu4Ez2feem2rWzcyJxKDdWvEo7zvo",
  "key16": "jqL4SBToiizRmWhe94tYgH8z8qBAapeUprTjCnzTnuSZCFjfSPuGomx7UTUkjc7ukWc9rSVpjejCkaj41XqTiAN",
  "key17": "5YPsiK1xsGRQ6MWcjLwQp6XaRukXiSEeBDvPz9bTMTUWkWTzHeRK2PjCCasj1ExcXZMJgVt9putjHvYNUE9cMHyS",
  "key18": "2TSNhvu43hBhUb3ygkaoC4oqGbRwhYuQFF9ZSDreAFZ9LeGB9uGTofhXkrxVTA2ZkDe9grzKYyekU5xZu2VG3Uwj",
  "key19": "4DE5nVWodQnFFRzHYYhwe4MpYwbhwuabpMhhCaFbg81aKr91HKXJJfWmFebb6BN9ivcLAPHP9t5waAFuD14YcnGw",
  "key20": "2UoAuAG6ntk4JFb1KdFN3vZKFmKUNqJYixDrfUeyPo6jPX8QKLDvEXmD1TEZ23sHiE5GjoUGQExwJtkBQNWtczCA",
  "key21": "5kapf81SpmQ2BihE8dVhpDi4bvCanVChMGQ5HLjLNdvSDMJYKdWSLcex2wJ95KQLpx57SSBzFBMpEiJd8roi9nUA",
  "key22": "2mNRkVEiVmtBrdVntCH5JdoDMRoTfdrGv1qJWK9hxSDMrQ7UqeZ4LJECpzFCJHSPzZyZZYqeQi4QUwKjVgpasoQx",
  "key23": "4tvMBVoJT3douECtRe2qvE9nNx9CraxYUvGPbhaWajAbZ4EJnAvJF5ZdbgEXQEB4TLzKTQSQaeMMiddeBo9Pw6ew",
  "key24": "5Z7XFxGRBkUZmiUg3Kt4Mvvf875GHVjvcU9Kzggmquqnm95BwwFYaKt2FqnEt4GztBT9EohBMiUW3CdHqshNxfH1"
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
