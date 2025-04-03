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
    "4HjvzLUWppgt15Bsmv3a4FYj7QVgtkBzEuh6yRAojSyPsVcuEVbVEoTQkzH4Dh4z4MTna76QpvjSTePYosw9xfck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbMbuhWqkVaj7nbqMAmzotJeH1xjvSZWLMSkwuTstyq3hcKcBvXvLdCXodGzh2WQPYYuNT89UetZ5sDtyBDCDyu",
  "key1": "32arrYrcVpPLZH2TirG2A8GZX43x2qy5Pw1z2fcsXyDZeRgUKpoEa8qmz4HBRkYjVUHxoCrBHYT57pP1iEczjHye",
  "key2": "43E9yVFNtXf5aYPj7qLdsCbXybsSyrP7vmjZ5zRxnftobywrVHLkGYqrzyKcmcxCSGddvJijbu8LC2U3NSpEWho8",
  "key3": "45Ekj1oy95s78LTTo8x8YxA9qTDN8B3UdEAQV3gz8sEQUULPkXRvPqrdvigaNPaPjY35czjhaVmaydbTgxrrueYM",
  "key4": "4DY8J7YrjNv2owniwiF1tHKCN3YPDekzQ18uZfncRtseYu34aAHHnBie4gDHBiAk9hXDVHzxKHGGa5XhYi6B9xUY",
  "key5": "54XnH7M1SXFX9xFzv2hi2MgHZKA7jy4u3S5xdDb8fVTjcFmx5sMXQhsPpQQ1Awo1VdMg34ETxM4BzwM7tHZQaAWc",
  "key6": "5BpDwXuwhJvCwSVantmmAzXmtzyzNDcg6KJrKpjriWkXEwM97AzSXZtXUsDFXvthPr1E1eegj6kKxsbaGiS3S234",
  "key7": "5h1wrKByhL34VyGbQKN7KBtLAhN9zdV7g2E59rmYPwqGSr7We2yyi9i1w9twg7cdBknd8YqASuayhizb2kXDZPMa",
  "key8": "44eHyqkXcPwUVX7We6z8Rp5f5d8WXiE4qfKeXMwUMVTbBvjfcw2D6Tf98rQkg7njL5HnFBzN8MipxMgdzBo3kqkC",
  "key9": "4kGsYu4ZXpPZRUjszydGWCGDfbGnRPnWv2F1JcMBsufM4JMkYmVQwExvYdCZW3Wp48irdhHXocgezYTN4poyZHzg",
  "key10": "3DC1eMVhYhnFCbNGaVZRYzmRAmZNvmpAmrbvre92uMVtM9p7MVb5qhcSHTi4BwQ5ZdLukUMUU88fH3wNjdiqCZfw",
  "key11": "3jwPZEePPy1XDjaubuvExhuCVJkPR5NX7kcW9HM64pkmfgxvqZURkcFnzwBFH91iBNYZCXbXuDWm2KRsM2QVHRv8",
  "key12": "3e8m9eitpyaAcWMQQiQKRFbteEh9FMUZVPfK5ZfbQzZztTxgTEEBEUSKjo7FxoT7oJfHsYkC1Yz4phbZ3z6hMFqy",
  "key13": "3hnqktMD5wsbP7tU1mFwW9CpoKKGnR1FJZjqvbAQmMTZXw3nGvarAfgoURiGZzYSeB5BbsDPCDM1occwMRVM9Zfa",
  "key14": "64BMTcHUKe7oDRsjY9H3tZS8hzhceSHU6KoouDFgbYzZVRySRUtsnnyaDjKF747tMcGRGjqLGk4doKkLLogykRRF",
  "key15": "3D8WBRWLP1FVYUUc5rACCNmbnEGeV2xiqDaJAYGEBCtSEw5iX88wqKXyq2uGcdzScJzCSCgLBbtcH1M7PzbF1Z3T",
  "key16": "1iUAuJhcCfeoVX5TbiZzMyQzoAgbFQLCn5nfq3TdFXXzefqRrapd1uYQANYkrY5MUHCZ3f8sHXaE5Gq8ALwv2wH",
  "key17": "5KjLCCVBe8Yn1YZu2gQCWjqUkpsBWF8vghDjkbBLXLin5k8LHDC514ZCHAY1SdXDYUfUS4uT4wpFjyKYfjRpnuvd",
  "key18": "4whoSWoGVNoaj9hEefuHqzrJdTqZJoNZTdwEyf2DK2Swc4giuGtBtHzQZU6Lv54XXG5j1hANKhhR2yVq1xDkzp6E",
  "key19": "5sCEU8t2qVTZsXQ5hLRz7vhXEbDhL97JufQV3Gy7GSbzfNvYzrh6DZooFfeBf8N8N53jq3VxMKHpJUZdPDCjxoWh",
  "key20": "3veF7hfcTYtVtDA2eCGZAAFmkde9eeYg6V3wDcwqXcLHepP5HrP5DYSRLV7z6gJ5zrYZ4AJ48FH5QsxUd7W3n9ZY",
  "key21": "4x9DKp5ZW1qyq2VeWeq9gyCMRfJTv6XR1Zq7R721GFUcDo8HK44LLAGpGm5EQB2iY71ZKmf5nDnPdnK3YjHFSEvx",
  "key22": "44aZjCZELaU1jZfHhEUoK8AojcuFcCES9T3toi9ioF8BabdhR3vBMa9X6LwjnCa8kCXXrXaqvgDRHpqg9tXvrJuD",
  "key23": "2nkxMU8FD9EiCW8CDaEYiMMw4EYhP6nn57yPzDkmf8EXu1kDHCqQmA8wQYLXpjJUne5HsSU76kuHFmLvF3D27PQB",
  "key24": "2JJkSrHJqHxYCtxMMhrLTrZbr4fYXZAoHwXLrnCuEh4q9ZAVs8nP2Kgz6N7qK9bKR4PxoYCrLViNLVMwkMfYzKa2",
  "key25": "q9gXrz9Ft19jd4uYXQv3agGQVDkXhAZsndM4y22Syow1yxEwHhKqvnURkGUsEVwP2rGjedWaPn5sJBPDC6WPNPB",
  "key26": "5DGtKQxugfs2jf8bVAqvzh1ucc6HRrA4SHGFrqycjvX5abqcYiPg4SKr3fvgixqvJnT29SMQvSKCFGXM5FTu5zjJ"
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
