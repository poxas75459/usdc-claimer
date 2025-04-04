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
    "5SFJGcu9DqAwhqRxf71KQ5SiG8W1eToTtH3JBHC9zFoEW9C7hwrtEtnbB298R3DZhcY1x7qNWBqeN6tZ6AVWaMt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593FW5dfC6CaXGAuwAd1ndbAzFDmwbNp3QK4UkbZQNi3BkihfBNoKxABsUqUUKmULs7AxR3VgaiEdSH3pBXanPey",
  "key1": "2ymyXowDopoCr93uzEjHAU9FWvxN9pAk7q4hfsRPEHzPiBQXUi8EiHKT98NkSW8SvQSCDvToieNMUEU6ARBA3h1T",
  "key2": "29PMYgBNd3cat8yYHzDT6GdyDY5U8SAUT7LaiDESPC44Qb6bJcmo5gmJZ8RyRg7QaHh1W7VhPyeLfWo6edS1aG3p",
  "key3": "4Srpgp95mUkHGi8TnSzaJBRW1gY7iuuXcVvJa6xQoDSvZbBHoiJwebLwuY1QDbunLZREhxU5VLSZHef7iiMFTnmu",
  "key4": "47kYwUh4yTGuRx3ZMAr6QipFwv37S1TAj8JM8zKZmK1Vjsxne5mKZSp4eQT5594qNscaRWqQ9hh3Lf53UBQ5W4Wo",
  "key5": "jmMR2fgpM3GKKYgxw7SMkvWt7cDiAaRhfzz4CvRRxZgduZjeyKanBU4xsEovG5SUzGq3BUZ74pnioNaeQedJET6",
  "key6": "29hQ4c3kmNbo3p5y3izR3q25Jh87EjMqq1iUcSc6qTmLUEKH8VguF234cEk6JnjNHcSCaHEwtcNcCkdSP4g8D6FJ",
  "key7": "2QKuBsPp4KMXHEPMvboeUAu2jXjfW2BtEmoqZ3iSVHQJDvB2pVn3LY5Kck29tmNENQmEx8xMk4Zpkd17kKxkVwzj",
  "key8": "5c6FWnzc38fZR355JhqY7ViLvjqmKj81E3Lr7r2WFESAaf3a2BeHWXAJ4wm6VzKnW5PJBGss4QyLCJkQSys7wEPe",
  "key9": "k8T1HaKzYcLSfTsK1hho8oax3RRAY6SdBb6Ur2yjHfY9v789JGW47VVAjbuMadByzfPimaow4eFWm6rAdBMHbcP",
  "key10": "2ExtXFdQ5rGjbeSnSbbxrx1TnnirfNt4f121onXLcsTdJqppauA1NsdzUxfPbvmWXZNpr8XEvvqiGXQBMXAfKHkJ",
  "key11": "6ssqEYUKqZjJ2hymm11LtMM1A4MiUqLW4RvR4KSh3eh3gqmqSTmJvMcEXmC3kb8kirqmEe5LzarWUTCme38cgtk",
  "key12": "27mZF9kpeU37x2ahHxUkQ2z2DnXtnBTQgTyza3D5B7g7WFuDw1xeboZ4HJoNRLoCTM2nL7iSuRP7EWGf54zWQ2Yg",
  "key13": "5cVtGQwB7n4TG8sZ3qbotG6FMaUSyhveekRncdLeZvBZvghxaTsPFGuSo4d3LcxnYv5pZxNpPcebmDbhDoqdipGz",
  "key14": "5nWRDZJYwXzWLfUVcB6GFJs1x366qjXmCXcx83oPJDa9kYqZZKHJZCXNFUtfnUWq8hodMvRrfczZyHZnKZGPK9QV",
  "key15": "EGCi6oZ97GX8GFTubQ3JXZ5WBwzM4tGz4XKVew5y7pYEsWX1ajUM7tmhH5a4PqXf9tMnsD7cNyCqy1oUU4YNHVR",
  "key16": "4JJEpzH4ju2UD8tggSX9MoFB5xSU7ofbp9tqw5H3QsA3PQkmEneT7BMaC6bbsiaUdgzyPHuadHwPznmL978SvQqA",
  "key17": "3tekRAzGNmihSR5bM3ockx1BfkCVaD1k458hVHq9XeQF691yPbprQJEgQ58X5eV7MxbF5LQ5UnGAzwGro6KSWurE",
  "key18": "21a393Ybb95n8okBZ5wxd7tUaJ1rmB8MgPKH4gHgty1r3nWsWkfQ1XkV1j1CgrokHNSMoGMZQaPiQkRUzKFxb1Y1",
  "key19": "3sjPhep4VZbc8pPWwXjX1WmrUc6yrJBmFpzmDCLgu4xdWgsURFDQq1ZJvQVoFLkfchWoLa9BVNgQ6oJxomv1Ghwj",
  "key20": "5zzBQtWU8ELZwoq6bHJDYbM7fvS6q3UNLqpUHYjJrCkmffG8C5p1aqiapyqWqMsoAZ2zQqVp9EaZjjTFfv82PT85",
  "key21": "3B3hgapakPemuPnrLhMnrYYwqiQfSV2nTjdzyXHr2j8ewmYP3LHwduiSj21Vm5iX1MrtfpjQrGsEorLWGEkNsqf1",
  "key22": "5xQtMNvpcZAveom78pGSBB7WbujzSMgsdV11QmnYoFN3VpNU91CR1Qh5EqYWwJi91K6a1pePCe3R1P5urgA9JKLe",
  "key23": "3qKQuz5P1BoBik1g7YVXL3kJysmZW61zpihWJiNKmmYGodzaJStMs5sYRzHvw1xna8gUugvDRH1ezeTu1JnKmCJT",
  "key24": "5DxP4GYnVqGCvkFdSc6xcnSwiCUfXqYHE2d5d9KunALgeQsLQjuTqrFaYhNo7H6WoEzbFtrsHA55EXygpwR8xDMZ",
  "key25": "5LgcGCQbpMbJjXfFeeeMF1jHvDSx4o74DbzrjLEXJ42FeuHfarrP5bSYAuERtBQvah9tRza2f6m86QibcWQn9F8H"
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
