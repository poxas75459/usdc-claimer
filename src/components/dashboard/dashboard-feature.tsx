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
    "38sQhcsLEZkix6RRvqn8QCxo4nuFzXbt2LNXhoqo6hrsx34cHMnciVwbXPimwp5KhvCWW1dLtgJGX5dhPZQj1Tyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129kRtGKdEgtzZzRSJWFRk9cXxkFvmXXaZUK7Chh2RqdqrNSwohNgkcFAHtrxDRUQLAxtexxFF3oXq5rzUv6scTA",
  "key1": "3s8cnsaEHChDiSMNcD1irWSPewkZXmoBbBT4TYpXjpaUT2nkwZVQpPMeFjLXzBJZJhAEhVMndpAsbKY5GRaauQyU",
  "key2": "5GrRupZBRAm5D1qHZjhpgyrf2ELmYSSqcX3ptfu3BzLBowJa4JCpha7iHvQiQcEB79kc2UeCgc4QdjEayBhK8Tvc",
  "key3": "Kp8wrKCHeGaAmPVnaJ51z4nQgpzaxGokCyRrcjzgWdR4KZTzwth8M9zhHyna3WfAwSKhjUG4VGU4iLK8x8QyNuz",
  "key4": "3cWKczsZoyUaY6sFfVBJyoCkq352jEGnXTgtyJwLGARwf5wqjCQ4mEkaTgynDAoLWHxELMHSEstof4TYEkJg3kCR",
  "key5": "4t99ysB1CXXvA2o1AV6CQHKTWR4Khm7KLxMfd2QybSrt9oJNKmXJL6QB1MvStXcXh4GYCXHVqCa37XoqpdQak5jn",
  "key6": "2HpLXebi2WF8qRoZbwphBJxEDtEmg3wKwfK4YmFQtTqMEa6gHcRFenv4Fi6vcURbPNncJoMvzmusYuHtvQogdnk1",
  "key7": "2TzW5x5DNLhnmVwGdQarvHyKMespUo52wSRag1GHC72RjCu5CKm2krkaY2Y7EeT6tsAGLFeMWzCwvEjorUB5R2AR",
  "key8": "1qGFSTtpUWjCeVFjBeu1Wv79vqaRHTeibfcRiGxMUkzwwZuGMfwup7h28bimCh4pBdBGPXSjGPaEgCA2XoSX1M8",
  "key9": "275GqqPaa2612A4mSPxEgKLyqBJp7bpLLH7VsLBgYyeCJAkDn7i5kziJXG8u2eu1ETQ2y3suuWR4Nc6ibd1EPKXg",
  "key10": "23YGkHKESer6eh2GrK5jQD9TRdCjDXpWzPxJy5XHkkUK2GPKwAa1W6N1tEP4Ywc7XqNXWJChrh11FDFkA4q3zZxs",
  "key11": "5dbjVk1wQwkCB6LJzMFZ6HWPEfm4E1EafcZPafVKpzEd3NYjLk8MmarhaXhBEsLoWEQbgL4zWYAVFREaDxyHc3Kt",
  "key12": "5a9QaZWLy3p7u4gGbzZQgPr1gwZFGDM68bB4AMxSPXxB9pkBPg7eBauZwRuKN9wKHKLrseEhmUQPCHg9ufZ1DPd5",
  "key13": "67DXvbvFqxE2s3c2afx8Pn7A1bTbMSCj85jxH4HPm9poH7T1jK7nNoauKSuWNvpgKYveLnvrEPiwXPhti5JKXY3A",
  "key14": "43QW28acLfgSyEkzvL5nNxSKq9tSEVGLa7mxz9V1g4qik9rCcge8eEYnmX6vws4UpUpSKT2cnMPrAojmFapZpDpU",
  "key15": "65WFzhLaDFbHiNJkd8jdjmkbwQpfg2W3X36dHynAtvsYRx2N5ZJfK3kHWxmXJKyYX6E8koDtJEsYAmzR1juuv9nb",
  "key16": "2uQgqXk3kSv4VpuM8GQei7Rd1cURvVMuxw4RA3MbfmSrcvc1PrA98yZ57iiJaxqvhiiii1NURAN9zQmPJrBbRCZz",
  "key17": "T4QaGcWo9vKH3P31JQYw93X2W5FSCaxLnowMz5dB5gDCw96oTmbHpeMVtqJ4H3w557Mck8f7DixPjQYDdPTbX5y",
  "key18": "vaWiH2YiRVvwzo1kyJ7Z4KnVqk3xRYFMmodBRK4RfGi4oaHD3fNq5pPZNncWQEnGHfvrkgMvrkJeKbs7MpCMwKM",
  "key19": "58j6KZtptZCtsEQeY8YqwSi3qpz733yE9NRAduuu63k5WrnDZNTXQqKNPw4FuuUogCSV6RdupjGQHR8G1HKKaxbH",
  "key20": "sicR8SETR398seMEwqZiXK6DHA2HhG8JUNnvt7DM1UVfXbnxYmCd2QbnEQFrxp1eKjifcg7rjjxumVW2aRKLnPU",
  "key21": "5xi2FVMNr6QQUMs1g4d76ZzsPdJQjf7H5Vba2SEh5Vp1WrHngRWoNRamp451GwyYCnP2KWYGZh5wKSmiPuWaUmr",
  "key22": "2xbRviiG64famNGeWG7GRvvYCKvqYJ8iyN9vup8PFzZKhGmY4BVHD43kQGVFh7hmiJk6UXZYVAGo8GGeug1vL838",
  "key23": "QMVbfU1eX4BVUMCwbbmQpw6TjUAMMJba5eC257rN41h3DgnL6MsB31xyafaB2AFRa5bvkdx9b1r1sq8ffdS8fwM",
  "key24": "3jGTQT7NAas2U8AzQuXjQjYXJpHrNPXTNw1uctw2aBsKaoomYR62wKN5nAgb1cTayRUi5cbZNj2fgj2SJt5w97we",
  "key25": "3T85HdMUVVuXBC518hAxDcEua8Bm6w5E4Eqbk65tkfxPweTdCyHZQqiSUXuWUt985Xneu3dX1xNCLQhVoV7m7eFH",
  "key26": "2Vb68C4ej5t6V5GXdCW5DhXpfJ443GxFBiWFxkrmwmuMtf7rEi2HmfqtCdobuZmujRe1NJbbbxycTJgytugoNhLG",
  "key27": "4uVuXz8YMC5g6UpytNAmFGxJrPGAf7n5iJdS82ewNrtfMbLhLQRK6erZx48ZfC7SAn7oyqsHkXYr3u56PQqr63ZK"
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
