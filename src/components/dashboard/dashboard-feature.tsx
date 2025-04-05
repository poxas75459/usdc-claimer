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
    "2JHyna6BH3qguA8RFKvy73hPpEwSHPKqyGvAwGL5vf16rM3WqvcCGBYaaKfyRFiSPRyCMdnWf6wFhbMqKKiryTKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8m4P1HhLG3LH75S3HNyzEnz1PF73CjxACMa8emUhr2dZTHEiy5UxDrjiVKsano6Hog5Nro29dXQZzVMkLo8D3Q",
  "key1": "3FeZahUYRDYoLHys7MrQgJ9dARFDLtiyMzf2z189SoY2m2GcqgtfSwSsbh8RwnFGVDQLwBwUw6RkEgr7VfKtJGgr",
  "key2": "5kF33HXkqut59H3ozBzYzZoKMNA57rQyp57c1metET813tVk7SL1aYW18acCH8t6yUHg1RJcg31HDywixQhSXoR9",
  "key3": "3W3q95PqYA9geyiBPrdrWyVdDmQZwRkJvGFraXdo5SvN1K3WChwpza3DqYU57tMNeGTvdM8nq6yYsdkBa1mWCW5z",
  "key4": "3zYFS9YCh5baEA2h4nQ9gPxE9sahjHtvLqCBreo2r65JtonJouhhGAsjgQm3UKUMp1JkGjKjRcvnVDcuNtNapV12",
  "key5": "5U4tqtvZE9VstDTcnAMSzKcAaX1A8TRvJRgM15Ayw8S2mXBGXr4vxRgvH3KdHwWiPbhf2d2EhnCyqFLUKbQr1BM5",
  "key6": "5kQd7hCw15p1ZsMgbwy17bQEJXi61SS19qvGguRRDkQNetvz7tQiaKkJ4iFXyvJLu6HfCGGnyCwq7bCPSZwCPLbE",
  "key7": "5MezUFPdKFJ5CpkDGodvZHDeidt7tLbkbPzvcfQw4ZruCKjnYdZAr1LfPLhGjELK3hJ7nc1Zg37ju6Duv4jqyddB",
  "key8": "2LSmR5UvbN8CgjWi829y7oZFqkrxXNv2m1XP5zjRJx93i7f8hw7qQQU8QLKd4As6DYvAC5Cv7ZKDn7VGrJTQyggu",
  "key9": "4TdaizKbogyj8eLYzSe7p54fXGNRGJ3up7Nr1PzSj5L8VpFh8D4YpVs8XSoQtcvtGF5rBLtLcL5aGawzpvZLYfNi",
  "key10": "e7jT5XTNNKAbADdvEWRB61HXV2erZuWaVJLy8EL3fDdn9WQnPvBCca4vbbFPQ8zC7hxPV1aMDY8QCF1bYPBMk4a",
  "key11": "2b7V1ighZh9yw5GKnHE6UTgZStk2g3wW3h1iUbWd18d8vpfJ1hZBqRJk1m5MVaFPjSUVKro2seykawfsLwYBdbAu",
  "key12": "urJNLnGCpzvjwAiMLtY7pnDjQQHmdh3NthUoHHNKUCD3tMLy8GWu5mtpWfhuXZKQRDy631mXjEkVXQ711p1sbDH",
  "key13": "5p3WDh2dU4rwjTPxxNNqtyw5HHssfTNWQ7XvZhCSV6iKh4KpvoRprXmx1iDqnZT6B68bPte7jxwc59H6k8PkqHrM",
  "key14": "rEaS8rFiDGmiQqfv9npms5SUQViWU7w97JFUL24S4wtCNQ8EdZip6kJ8y8jdAvTWx5z6TeG7VRkszooU3r9Xpgw",
  "key15": "5BeYT4QjQSu654BGnUpxGqokJcxcZU8BcAfTTeyHfUoQTLqxv2zygCjURp2tVqLVV3z8EGS5eEc9s6iwH2XPe9ne",
  "key16": "2BfuU4G4PurAvvgKrkiZrRiEoCHmvGsF5A1JnyXeCUriF6nLMnV2x8AUhSj3j4eVvmojeqBTZzrekmU2EWv4crxy",
  "key17": "AaYsUJSdCjq9P1osRmTgSb9xembvyWeTz2y7GgsEuYqfM7cyMQpL6xfCPTWHiCH5RXoqB5FiLtJBYQ9jfjK7pfb",
  "key18": "WApgfaReYfZJmZGf7zc1iuaHpsNocCHRXxHWNgJmoS9SxuqCDE1S2uXeJFeWsZuRcB6NTCd1HMVd4zZfgAQvmvL",
  "key19": "3ezSuUKcHP5bqykjwAchBLFhbAAu8XPbGPcSSRh8bnUAS9uMvMU3o3yisqWNeyxCSKNR8K5wU1W6ATX1wbbHZtGf",
  "key20": "EA7K8wc7eMa8nMBBpkjatSPqdgmxwJD7CHLZERwe4eQwC7aPtpozmiXGyDWcpxjQaUsvWN5JrHFRBQdDZq4Aqta",
  "key21": "5Xsppo9vL7FACEDSLBH7xGqmScGTr8FZHoYLgXa7NpdDGg7rUz4xQN35TNf9msFoY6HyQsH59e1HeKBtTEMGPaPG",
  "key22": "5dbkhU6af19PUzzeSatVeo2EJiUPYtDz4pDyc4Xn2fPQa1DJEWDnSJYE5TPBatcHFqi7zbNV53EWaNwpGi62hJG6",
  "key23": "5ju78JzsyhsSqiLBDnjKw6YiwxdyD45uUx3DAbDsgxV2i5kNd6AJUn2Ge4tb6ARVJvL9x3PCJz9X6YjmUTp63EHy",
  "key24": "3PSTFfuLAF1NRGtCoLcZXYuskrzs9Y8VFTXUaRR4BeMMcvtyXBLPgW7xHBQHexg7xjTSru1xGXseimdKysRMY4NZ",
  "key25": "2R3kkB3iKcw8uiw6FbDL9jz4xxPGPsQomecK9wpPFYHiEgjr9PwSMWRF96TUR6TECDzZuGWzYshXc9mHCi57K6wA",
  "key26": "5MZEeEd2mygGSijcWngizxsoEcUigM8EbCKxiuWZ9txwjex7SZi8UGmzzZMFQuLwW83C5nuEKxaivjW841KpEh9e"
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
