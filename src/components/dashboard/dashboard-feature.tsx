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
    "5B1a592Zt5heXbTMhNZssqpK6ex6NMzDd5uUu36W1QCRNfEUyN7g9Wmk3fqX3TkEucDYQfiqZyryCukovSLnnWF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQ2aVCUJWmxMvgAoavTrSj7UiQPZHNihbdAA8ZkdGmPQAAMaTqJrNWECu8wvcB7pdN9MJGvyURN4achX6jLnVvs",
  "key1": "3JVz4h6QtXXNzsiHvo1CxfkmA4iVa7uYwYPn221rMRSTey95LwodPMX91Yfp7EeR1ntNqdZkBeHjuuxFwB3p4jG2",
  "key2": "3GFwMR2T1Y96dxpQSwtkJy1LBYEYV146SJCuSxbN8xooZPyvtr6d7NbGotnjFFs2uYFfNoB9gWViKbdo7g7iSyRH",
  "key3": "5enfrUHXep8aFus5mReFw1DsantQ2RF4ehutQMcAJS4obCw5iSEfRYqkY77dUnNABbksFwaopRpKpptzKBHt7ESh",
  "key4": "4gpMrAduMTu2spFF2u6KvC4DfGp17JRZcoQ8Ri76suumafTEH1hz5YoRN47Qzhy9f2wKnsxGSTFGPpSZFiVywwx8",
  "key5": "TvkuKame5AvjQpz8Dar8PsfCcdcjEYg3BwezsWCf89SWLqBTvULjua8pkLi3HuwhBZZmBfLXCM1fMjmp5UyosPB",
  "key6": "35PSY1RNbvwvyvmr2B9afEUeBMEr7RNK5qvnxcUym93t4JZqfPREDuXGJg1d9pwyEHz17CaTqfEz4HkLByGWFbms",
  "key7": "3tZMxQBa8sh5QFkFfAAC6qN15mmX7rbV6MLKsR2a2LN7AJY65wGy5wy2ANoXM7KKXJJoiPWzeovZoMUHHCYUh4G8",
  "key8": "7C1YFLnPkrcPU6Tiy1XfLko4ZQe9WrCTVgbJ2YpUMNecHPjtP7QNKpGPTSK9CmN7zADzNpXyQsa22STJb8xpP3z",
  "key9": "5TSbzxHgBAf9gTtF8hnaVqUbKzRQrdA75Q4dN7fjy4o3CmtLRHU741RVr7TVQk7sGwFZVTYjSc7nCZtpgFpNn8NT",
  "key10": "5bm248xGAgzeVpRQjyouvrzfpVUpB3WLoZLuE46SHgvJCUppBrjQai69RyuJhr1C9KoAweTm1datYv14b8VVGQgd",
  "key11": "2GzgJh4asawrxb1iSPHEJDukUZ1xpyJiXLGDcJksztz5ET22KyYzZQWQndNJTWPTCWoqyKg1RmJtAXWSJaW4zLr4",
  "key12": "4EAW3wfYWX5rD8e1MVWRY2R3HvZ7xbHYRpyVdrJTZPUFu7pDw36BKDUkkTEyhcPuzHtkAd2ewYggKSDAxrg72Nur",
  "key13": "eDbdXYv6SUGDgdPWrxCcSP6uJhBoAn3e36Memb94SqryDudWLbJEA1XjRXwKpAZJujrQRJVgWrNWVhpfiwcRGdc",
  "key14": "bi1EuMW4Y1ap4AoAGoMaLDyX6imTidtKBN7TgWzXjtWZ6Xoe8H9a12FmZigwenVsed787b2zxYjn4vEKKQptff7",
  "key15": "2SA3H5RxYA3XGeqpYFnU23GSjcCB3BvUG2yhraTyXYDZLgPL83VYUmqaYMdzjoT3gdof5nxesUWewHkM2EoaFqCm",
  "key16": "58w7QXMKK1VFNiaBfHwakWucHfoDWpGj7q56VPj7RaGina9w96uVpNtnxrnuxgu5PTLL9PddhUV2skmhgwcY8Mdd",
  "key17": "2Ux2fQhzMRXQvZg4WGwxKiQb84uggBbXfbQRAijMRMMsPdBwT4jpYZoF19jwSRpRfoAB6zqv7fCKKSnoRgqeA517",
  "key18": "PcEEKZapCHCZvxNbi2yQ9J8J6mbRQA1q72Q5qKdhjBZhmRE4UBjc17igkTLoNE5WDM4q4F91PNrcsFEGsPjbYPU",
  "key19": "2CGdA7tjYeyMThTHsnk6cY6KuSEcvQhUzmVgRsmusVQfdtb8fCkBsQfoU536LYRhhAvzEPqKCATUTVvCjEmis5Ra",
  "key20": "2uJ1g3kJgrL3aPSsjckqT1N8rpYvXk78esKiGwvzMWsghVeFsdj7GhZDbx8byLHLUy3foQu9LRGwrbfbffR4oRVi",
  "key21": "5J9E9cZvtuESsP3VRhXEiwKcAXszapP4PBVV1oenWtQ1e4J3W9bMobYzUsmYAdkZhYUs32PU4pnNv9QHyW2UdfJD",
  "key22": "59hAqsdLER5cYUQ1Tv6jsjbdadQZiZ4pYDhGduGV4hsrLrPfH6ifNuhmHKi6SAwjZhByWkuGuAiiLwDne6MZqyc",
  "key23": "2herkbBUXaT9TBX9MQwn96sEMn6ZwUA7aFPygjyUJQyHvq7q4qtTP89AkoCDU46NkCwXmHMwMxhHQE8JRHzZiHb",
  "key24": "2WXe39XJHkeMWVv2cetZX8fGjomZSetH3aFCk9eVjap28xjmD7HZEdzYTN9W4wpMuZU9S3Y8CK7cGU6d9GLcNL6X",
  "key25": "2D1qF9MAxeFsUCD5xYWoQKXzvxee83vPcBgvxwD9FWvVzGpbbGpRmuaaTvRySC1YhB3GtyXdkvdMEHySuiW6e1cV",
  "key26": "3gZaFD4bBT8ZpzcaHkQ3M7V7NSMFzEzt3eq5j3EQ5ArncGPTWuzsN9eG2xKNw5Xt45eeC7EjG2ncu8PUztWEsaVV",
  "key27": "4tKrn6dcmCerPtsLD1ggLMYTEumFga2Az8EQ6YHifiYAazx7CssmFThaY84ERZqfFvPpbY2buNbxX8kkubsVi5mr",
  "key28": "5zuZMiHEj8hAUmcFTFtsMenEdsmQjAUrxQakGp5GqvxK1JAZHhJDrHjxHAvxW8j38bfJdJGstuScDc61GdipPUgA"
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
