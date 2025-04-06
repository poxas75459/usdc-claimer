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
    "2mpRMQmViTTVx1nT1Lm8u5tUktmvapXYvTXscyRCyYd6m9VkKTg6oQmwBfQXNqPJqjckTVyvrRYgnyixqf1Hsdtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCUP8mMy6BnPKuS8a1yjbGsGeERRkQRp1mWeTGCdxUJGbiE9PviFiJQq1sFx3BkAJqtGwFJ3BcrRrxzux7DVtRU",
  "key1": "TkQ1XXV9YBHF5b6tuKgtEbGys5bJPaMhBScsj7ccGgbjXv5CfGBXxj6xhts1NvwhLerukgdbH5UPMHv8U1Sbee3",
  "key2": "x9XGBzqHPh7XKugJ996rifCgz7CPzaxMGfEaNHv4Cov8QxhXaAfhY7ujB4ZiYrnxSAM6twTwbZPRxsBSGGSqcQU",
  "key3": "KsZC5oMThiCX48C8pdJ74q6mFcbfDgHqay86tJ2eMcbvzUuceCd1yMtTJhT41fR6RSc5vmR8KXwuGdBYFiF3Prp",
  "key4": "2Tjwq7gfXLDEMxmbuNJxCacCzi1WCAx7RsDPSrds8sidDx8fGUPHcWc3CSRbPBqqxHYNZqV5wA9PvYZrMJ2uBtU9",
  "key5": "5SdFiQRHD4dhZ8ct6kPHZeJZaK8xU9UoN19jwz4xzDWR6JHb3ReeLyiUn1NMP818WKefhvau3gzF4fkaUqVUUcTJ",
  "key6": "2aRpYPFng5i7hAngAR7zg51Vj25j8nka2mBD2XpYmXMWCEaMirgbTSPGDZaaqsfEyAyQQkJTQbkCtT46RgP2QYF1",
  "key7": "62m8TViMxa5LYsyXHFU7dV64Np4uCvJS4sLY4zrxA4iQxGJeAuEahdSWYfjALvNtViTkPvZtNNPuxyGRdswEju6A",
  "key8": "3R8eR8t8vudrzm2LWoWf42mP5frpyJYeq4ggpqprYLXo3Nzv7omy3se4fmHUEBfEJsxrLc36QKEdSZZRqU7d3kA9",
  "key9": "eYSREcCy2ooqcrTjghWk1oPrfFNYPN4HAxZvSDfr2m5LXfxvBrMViY4cGWuJTGjqJMS3MuYiqwYESQzCx2aWXsv",
  "key10": "4BSkFhKSnuiZYsSbSjeJsysaRaBqpJLYwU7nSEt55Gai8vJdQRojvgLu3senA53imyx8fgF3tdmTvQNknyxJknTr",
  "key11": "5RMmZ3XPCUWh8Pez6vmvPXaYHFz9z5RuJiyEQzE88oFZNyoiFFaAx5AcSkM6rGh6dN8gs4FEzMarHFabiydb9vNg",
  "key12": "5jKbT8h9EiXsZV1KyQ8VpaRhDMkN3h4EJfGcT173SmtDQpNzeqmz31xgpCjmrjfSWKskvjzVfWUE4Uo6aWZBM88X",
  "key13": "49rpihk4nuhBBEE1Y98PYByPbkM6ciswSkvU5sKhFYwTKTB96aQ7LWkfJJBimNvAtCcBr3wjLMDwpXWhtr1S5NS7",
  "key14": "3p6C4WoDkLcUx1w7V8WqvoX9Zm2PT1HyobE1Vskc48TP1YQyT5BSe3LpxeV7mduMwjUJWeZc7S5FBR5c7KVU8kuy",
  "key15": "587B8g7GEdhhcPmmjHBBfHKdadNV1TrJ7cY6bUBtwFm31QhbHh3tAbcUDRKatU9dznqr7iRgPVBX923xv8ZMnvEJ",
  "key16": "ThfzUSB3emHfxHJWJeu89HztGYDfxtLFziRmJyVzmSkUXh2mdHAF8qTnrcidtXW2FhkXex9uHeCPHRMFT78o37q",
  "key17": "5q9QKNP7HXzVpmWPUBz9UNzn2CSwQR1R7iur3z28Ct62x4TAhs7wLwT45ViLqKKsZCkcPSEwNCvn6J4UtUugk6Kg",
  "key18": "DCWNeCPQpT6ckunFMR7ntpeXo11Qky1EdJaWbpSH7edwRN9VgSeRtL8TnjEPZWtU3f8dqPdrQNJGNLpCG83no63",
  "key19": "3mbnEwJv2W4B7k5E4Z4kxm4AbeEXJNGVx7DtquuSjCTNUrxfqBKMqpFM2HRjwjgkjuYcoXTgrj4hQ3rGF4e8wg9A",
  "key20": "3bgdUwBreTKeaKUbgcVFNDvQZZ8mU97LUsvGbR1k46o7QNkiavSAu7WAZfDARtXeiZeNgQ8kC9Khrds2ZoANxxUU",
  "key21": "4iAbaRaq8uaGDqEWpFmeFzRDyxNYjx2hcoidhRRVDumK8ityJAtb6tHC9fK3emve3nKvnV3mmyenDWHqSGkTH6yK",
  "key22": "2X1o32qewqaBiLoLXQD82RSDGzT68N6CmmeeJkRCAk4isfjG7FsLzuBmr66fuJXZb2YcK3ayvbwnJW4k1JNrpP5Q",
  "key23": "5vwhw1NV9S4yDp2X6UTbUSx89VSWth2PTpd4Tiu1KzaDgSurDcwKKGAH3LE5CyHKwD7jP3FMBie89t9js7HXmMYB",
  "key24": "5LRaDDcmroAAq4GnqPFPk3wqidc2TGdLZT5zkzmxVSyjd3rz5QUkvivJSwwKAwpBUPyAxxtSeso2TkMhwHKD74YZ",
  "key25": "2yqZhzfC38ctTFfcX3fWKw8umFjPibbEbKwVMRSpp2isubdXc3bLwGcSdiyC5UdPUy4pgL6nzrqW8HNyvvrPUuGQ"
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
