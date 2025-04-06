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
    "V1etXp1bLeQEFzZgnoyDB8hai5wR6HErtBgWetF1bUJhf3Mj4Rj6sve3KFTPBjAjJSkDs5V4bEkJpjGTyytdZMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jk3veLwqR8M5Mtk4wT7FktXxZhhzYNst3cXwpxkjhwonhgaJQ7Dv4hbvhi3kek65QKLJPUzCftGvc336GtmYVmG",
  "key1": "2MhBYRJeaq8vFXksoiokPReVN2hAnhUJEQsAmJxo8pGMx4V5ybvMvhdBwabGP6aE5hvzPbteX4zZNYhsK85XTMwX",
  "key2": "3yYeqHCjd6WpR8NQdqD479eLhYPke9DV3mCGaQ46jxHVAnVvG2BnMs2bhQbXNov36ikkq7b2aTFmb87wKiqmggK6",
  "key3": "4E4NuNLjWhHThfjMH3UR9KbhLku6YhqkHjtormZQMDng1fpZ3j6zQeuWHyDDj1rRB5oJWjAejxS92XXPePgoVhJb",
  "key4": "wZXb2D9tpm8ZgM1Bd64dqSsgUQuoTKDx8Yhi8D854mwEtZMzAsEymZdhH4kkNGNr5tiN2YHAHXt9NFYCHqUXQ4r",
  "key5": "hJXXsXsyqwzVCXGuGk3ciM8n3rFBTjYs19bU6YC5QBghVvbZpijcog8Wux5b2maV72BZk9vXQusZ1KbhMmiwPpR",
  "key6": "4DabwSxLrdsd3QL49ZTkZcDKjuAZ6H1gS5khahKsZLdAvz8wP737TBequ99mpEsbK6iYfEMQNZGhqaPNhWYqbbgz",
  "key7": "323JBY8YNGhKdhgXSqiPbJoXjmwCdCn97CMFSiyHvxEv6b1QoW1cdpr1E82EFJM2quQtso9ay8aidC2wByG6V7gD",
  "key8": "32TMX8x1Rbpc4iN2YkRdraAdaruwiYFQbSD3KkMabBYnCiNDrFUf3QpMPRJiCMDmcFTdgHhigqcojbqBcBUMQnR5",
  "key9": "3WXYPiMWiDVg6UWY3PbSDr1pZWaLsuUeXFmha3QqGkQfRGCDuBXYxyUWwn9Rkd4YbRoBCMULwLx86j58iyuvdAkn",
  "key10": "4iA78pLzXgqEUKZmGbd1jzvL2SxzxhKitdkuDTy4ar9bFQGrYsHbrof29HFDtYSvcGBXTMDAubVuFMZPFNeEq7wg",
  "key11": "52LJqACKPmng9AxZnqDf1JTrBw8d7jJCtVAc4JnSsr6izozxf1QHWvsBqvA9GgnAQXb1FgYshX8QhJvg3KKJ1GDy",
  "key12": "3duDq7DihgYg5MXCFLZuUW6v2Z5zSLRh4e4DZKUrFJp6ZBVqui9RtpUciepomeyF8mcbbAhYFUetjQup8YGY3b3x",
  "key13": "2CN29qVj8xDgPKcUw5UAtb2iWDkXmJpjKvc5DUCtHbC2n31bvpemvHUUczyBN9pTF8N8mCyRtVhBWg7Eg1Bzc5tD",
  "key14": "2p25X1KffvR3HpJgymu3Jqxt3VcEmQhuRVd184Nb3NnbcSsqUGTSdPyhBngcV4jgeDzsJrAxy2ixBfGtBCbE65jn",
  "key15": "2cU9bPnVDE9tYBAjqHnvPLLCocjNpeHkf88GoJJeJMQzwnj33pxJ6fJ9UepvNQzYgcrUucDn4wh8LzBoPJHvqqVG",
  "key16": "i4Lj7t7X5hK8bK8KFLhWi57NMn6BESm2uRgD7sDL2JCYNmToGUBoSVJUo5pBNTzZWJVeXARq8cFjwEaKNenULEL",
  "key17": "2n1nTE7tyZpmtw5RHiNGVRp2yTNBFNooSu2yVLk35vmGh38Gcpq4WZQfEpQbYM6NGjsDB3nhVg7yWXHC123Ep24z",
  "key18": "ezwxDRKVu3aUqvV26TxiYFLYvJ6Dr1DVf9FLnwoSPjJ3LGYZP7MxqXQ9zC6KkaYn8Rv8NJd1fexqsfLRoegv92Y",
  "key19": "2so668G6o8gKtpBbwJkKkdqT8vrrv41R23HvYrbGkik8awQ8uW1F8YdfQVbJw9EvJWi6KJT31AT5cURFW6a4KTwM",
  "key20": "vjizVYfRuDHwDxapozPzgG4uXoi9e8G6efWkASQwnhsjXD5XZmiDRuFrSMJtGp9ppHXt32sJwb27REWimhGgRiL",
  "key21": "27K6hg6g2RSWTEbWmBZARncoAQR6VA9GQ95a5ArxfpsnLJvs5EiGLJnmi9WfQVxxsbQcZk3Xkfrek643tibwhbvb",
  "key22": "Mvj4sgUFDh1VLMZ6hEdtNAhNoMzgwPBiQpWBH17cQLkSMKaUiYHyM9nR8FMippzBFFnCxjjmtAehQwHxbBGF1EV",
  "key23": "31oSYqEUM9wgrSd2PYRak3o9C4oG7fVeeMU2uxfF8p6EsqaGcbSNdbCzrLSi9CBaUYe86sPYSVyFeA4ieAKZp1yE",
  "key24": "5nz5VCEy5vVwteo9x7jchZsUXqtDF9aSMyJr3kZ9UFqMjqxuDtSqpKWtuSihFi1H38KSdHoyNN1Y7e8NbhCjtnpn",
  "key25": "2DsqHst67LR6YfugssNtWQeKpJD452rTX9NjRBQbsRscgeX2NzS1mTwfMw2kA5beLKomKokavAmRNHEYxmQfon2Q",
  "key26": "j1FBPATWahkht4WoMTAedP9GWfUtGNWwqkUPME9ERX8M6KwqvtUtKxCHCnzV1gLgbDtptxs5QLe9GRZcLQwZEj9",
  "key27": "44Q2oXS2orDBGak4UwoCLSybcV6mvkjgg62vuUQHB5WvUaoWjSmfj6g2oDnoHJoocAR9eeQUq5whAm73vXyEaUQm"
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
