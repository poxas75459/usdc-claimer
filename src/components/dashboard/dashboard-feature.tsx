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
    "3mCjn7C829NE9U3t7g53voJc5HEyrw1pWMXNU9Fpgjwgg7ME4Dkj3Uy3ANaVpJaQ447fGka9L2TjqpS5EvnwvvCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkYRPs57puvvHFwJ2YMATL8pv4dYsHmBmo6jtGrip7GKdA86jojEbdJmMP2uV2ZydK6G7m1KMsA5EhaFXbv3FXK",
  "key1": "5Uem6TfT1oWNNwLqJpKu6MxYkBFa3XSymbuVkxuQ5rmzYsPsSr7bRA2i71dtHiJezRXzNiWFHPAHSpJAta38xLcF",
  "key2": "3gPnhKFQHFrfJr1Xy9ZtP3tEPbhKBWPLcUifgZH8itGQ24Pz6twsX786WeoYKUVxBP6KFsrC3TopgKTWBGxBBDkj",
  "key3": "3AcyXERiFGy2iYD7TAKj4UpWMKGqXavpzeHW5QMAGBNwMaHq2PbAQfMjdcF3doTwzftmBDynvjG4N9PFUREfss9Z",
  "key4": "DiHfVDPiZtz6ep4jUzxwr1ZeuBWzNMPs3hUyA1NYyzy27DsVd368VbcRzNRS4rimaUbHggFeuQPJH7k2nzLC3LG",
  "key5": "42dXNQvzi4WSixpYpU9adsfdjo8jkRyG5WfKWvCTLfmDAXi3vrDxti7f7Kwj88ZAEaqwXpBPydjEa7R8Hk5VTXW1",
  "key6": "5oGRDynBTRpnCUodAnWwno3FnHJxWGALX9k8c5ZuQDys6fZ6j9GGf7xMMxTVgwmjvHMxxGL2biVP12y4MqaAYh9J",
  "key7": "2iBugjYYWa5uhPiLHmureQjBB1MmXj3zv85KXS7eKNW8spAdYV7BE7KFbkMs24yNL4PACjb8iN24fn8wH1MrtQCC",
  "key8": "3sGGNDyVZeUymNJJaftBMtFMR5rPmeETRkxkDbgWrXyk55WbhATXL2XrUQKdMzevzGKDbpnT77kuYhUHEW6cbf2J",
  "key9": "56X1WK9zW8MigWWeXYzoU88Wm3XgcuPxo9viaov9ikqrEDgvkk3yVJp3U9tFH2b7yTqU8rN1dHfySUAgAwYfMrLz",
  "key10": "3uz4qrWtahYi7XCWekCbaxt2QXWipX1NorbiY7KMSMh3pHx4BZU56Dxoy4jgvGBpku1JKbcquKVUhiv8Ei3XLCYC",
  "key11": "5tj2heQKzz8GhTWw4VbuDgEc7oHWfswiFZhBhj1BY8i66L5e8E8jtycxTKg2Y4FkC7vKLBjjArZadt64tt8wrJPK",
  "key12": "LwbaSHffkVzWQFzRGYQXEAT4fZRAEfHowd3PotGHS1Fej7qASoumSAxwEXXzz2zr4SUcNfarJVm6SMoKKUqAMGz",
  "key13": "4Qu41eBx7FD8kTAqLPs3KdAL5uyBLk7CrQdbzjrkBm1sTV4LAHga2oNYiWmPt2Jy1s7gZgG5Ze2NNRF39uoRPSvC",
  "key14": "kLMTayewAcDbpVT3mxjmRHsxKepPWQnEa4Azdh5deb69MGNggBgy7YxZquXvieWP8SnrVWSQ4RQ9f7LKRn9BA2r",
  "key15": "3Ea4boTs75YinMdXPiYz5vS6vKgJTPLP1n2Z8hZHtwT3GtVAm5JT6SgrFDfH2v9mdHQ5JSkGeLknsxp4ouXJegpT",
  "key16": "R1p7fsBMKqN4NG1prcHnLQobqzFVWY5DyCscBcqfUgtLGig1NMjPLQsvodP4SggjDYbDF4ZKUChDb7qePov1kRQ",
  "key17": "4D3SNUgQC4LoaMJpasxYBgNrHkruoFPHjSHHXP8a9hs3pt31H1oswTMhbJLJ35kaWcTa2RcmZXuZBQwP74MUV5X7",
  "key18": "yu1PRASrd1gpA7fTMb9ry8hyD6bqDiNuAbEPphwhMgwxP7kqWeRgVHuC5HgoqJPk5aS9NE4Qd2WvijWMZQTbytL",
  "key19": "2rPu7B2Uv24jRT9Kzdrz9jNqJ3oTg4u4cDubit3mzRRrBnZLVSC4gwror46QN9Ntv1dGeZmPFXMSqqDrT5VSmEFL",
  "key20": "5qS9z2oDQAwMDwSRmgpjriNx7KMbF4zoJKTZrgcKeNFdJmaW3XRXz2eB2vBpge559GD2Fb7z5utTxTzRZZ4yHzWK",
  "key21": "4SyNpwAyXNZ6BYHAgayMbDvcUFZjRdHWm9yTKRWQV1G4vKGfyrp9g7EEn4BKVaddGMxfpw3ddYcWJTZuguSZAEey",
  "key22": "rb8Q4cDQMiiVTxRYiGKmmqJD3EFzgYB8Ywt4wb3AX73DNfVvGsYkcingT4dkFfhStVWdoEkSWkApfLoLQaUSwZp",
  "key23": "p6WfBxWWC5tyzTYCqxCNZh3aFrwATcVR5mrYwSxu7ubWDKYRPj345DPQAsi62gCG8yVd9Q6fVR5RfRQHUzsufMn",
  "key24": "3o7ok5FSawKCssyL4dYBF3YqbjZbt4zadg6mxG1nBDsiMrcxKEVbuz3CNkLbh6RFLuEE3kGGCWv5CwiZH3p8Hcnu",
  "key25": "2UXKnhwRwXXqLLHW8xDMfGVjFwXZMLka8b85TwENU2wp6FsvXqAe3oYLyYXeCnU5g2We8b4BVu8qRptjZyuDb26V",
  "key26": "g1pgH6jw7oyiT7cJQzS39QHErJEfDWgrwsqcWchkt7FjSRdboLZAMUeXBrEx53enByqYAEfZbvBYEhuBbUMqii8",
  "key27": "64PwtTJTm5vqSPkWtooUoNUq3M3MEPA8iMG5vDi3fYWfuQwwXWBnvMnJ6f4v1VTowSj4TXhaTivmZkvqBv2HjZxV",
  "key28": "hnWao3dPbUomruGhMtrbA5ZH9vtdQRMB3DJGjtRo8H55ZSumuZJybpLMCNu2YyykENM8SwAfKz81WFTsATqKBDL",
  "key29": "3zdyJoxcZPBLeMRm3ysd9CvBe5TjZuE6Vac71QhjrcmKQwJEoxU6Fes3ECc2K5jRjS5NuwQ4LE6UrkjpycYKs3fo",
  "key30": "2HoWuHbJWaiJDU5mnijPmVJMok3ad2wmc9ooDYyaZ7wsX7V9niSCqGcoQBx1LJoQZN6xWmFFvET9PQpy9h9eT4oc",
  "key31": "2qQVHonUNeqnjxq1m1FeDFKyaRNANE3yCM2FFip6Ee3HRi3L8BLA4czqPTSpZeWepehKZnVUep7XdetQW5LQo1Zs",
  "key32": "3uB4MCSPgjuVgRj7nTgLLtP6ZTBT7WzozfNRsqDSoTSgiaqbDaqJSzVJew754H8m292EcWV1Xjz65WfNTrCL3RC1"
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
