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
    "4uHdfnF9KDvTCv4tyjuqDpXt396ofB7zdJmWEVsoa3rvPaprmY5iTppUsqhxBehKrT3BoyHmrrH87nxmdDXdDZeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5724a3K1r2YhyQDK8NkTykovZeNibhatu6dV65vcYp7HrKRCErGFVUTmz8N5QYT31C8H5TgtLnKw7YoHJuaJSf9K",
  "key1": "5jAHAXhdPyc41CX2PUHWDbua3oDDBZxGjmNcM7zwPu2jPJssbtWc7DbX6czCHkxbcyVQ28LKYsLBMnzVXCvcn6aH",
  "key2": "4jNe7q1gEuAc18jox6AEWoWxtvg8fRXdMUxoB3QgcjEiGzJXqhYKXvKiG8mcbJCu1ZcyzsLvQygDkG4oXsazUtZz",
  "key3": "3NVQo19ZH6eH6pdi6nRdoMqub7mJ5XuYfmafdkXiW2F8ypnL811uM2GEDTjZRcGBsjSSXb8JQsTSKYgT5cEJedSc",
  "key4": "28pmGyoDLuSX6XtioagVgfV4y1tAan9ic5FXe6m5KBKk3kUGT3eN8ZofCen7UgbneV2DVTc4Ak1WvS7uUdqiZeW6",
  "key5": "tmv522sAJUc5Db637kVpGzVyRa4ngvi1j96rrGY6MBYsAyTaoum7q71NNNGakcRUTUrVwWGUCuQWkn79L6kWPAE",
  "key6": "H3SCt1Tp8zrQY9eKAg4nPki7wdzsLG2vWvPqPjVTJ3AyJ8A3FzuT77AgSQKpE2xfopL9vLXZhJMKNQNJvRc9gzv",
  "key7": "5mDPT8UpBBj7YBJBAJQWPkMXYLuZceeFTR9SshZzws5BEUb6kF5vxvKrX1tVantqCjGKtMfY83EjoUCyFPAPgcSb",
  "key8": "58duG1tmkURVX42oAKzrXoxHHFCiN5ie1LzfzHi6zzQXYqxsasZ4ZsgZYe2pkbt2Yz5B1ypFRWaUjRBf4KnkGYvk",
  "key9": "2AtiUwirNiTtigbVwWuCSWVp2sWpTJkBXfn4pDGugUnJVWZY1MUqbEPMFHkgAAAzLn1Ui71GHhBjGmYuXyFcqdRJ",
  "key10": "23QNaerXq7LKjwmGAc9Eg5aMCbFZAmoqCSDWbkdPagPu4oEJmy8Wf87krKZVx52iUdP9Ljt8wQr4MFRPpz1LXeeM",
  "key11": "65X76qXybKvAZ9YMDjDJ9ZJX3Hbvua36itShhqeHPsenaS9NGQUtYR3btroE1LZkU7t7tPBDmXFZYgmXwiEWmfSV",
  "key12": "3qGo2F2xzSkx7N1zGpM9HP1JBVvN5Z95f8PZT1C4i8Jj9ojojjwckVaPZ7KW5EXGwMwoTsj2sK1szkkzL9Vcjdjh",
  "key13": "44HrhgqPGKSSPZuZe3vWAgmem22oAFFTVFD6m3dAEM8AsXppPAPQFu7NEo3VZBnkFgm7YDEdN5qEW1Mo4sSetFJL",
  "key14": "2PaLz92jBiGGWZod7gcGSZnv4orB4GYfCRo38ccnQ8KDXLNFft4M2wNvHt3jsaSyg9cVLmU3xK7VgEDhZ8TjTbyY",
  "key15": "3D9SNyuTCbkRMfqZNaFbjERjz6zLfMF69Y78rPBfJLGe8p4jCyhoZyXBAtoYdrpKQNMzroNkuExJkXtWsro9yXrL",
  "key16": "PvPxT6kwScSY8mHRZMfL1AyrWTiVRGu2r56dTt7VKUNAbiSGXBUWMCEcXoER7ihRvz6QmhR6b8DVe9gGwBu6AX1",
  "key17": "2xpzJiwRiioGXQTRh2m51kD2uW67MLvDSEzzmWxAoEEdh8yLvKJWoyJajvWBhgbuH6aS1ad4tB1eXz8AAisMwMm6",
  "key18": "341LyfoSJ4hN7efurxe2SdNnGTCEp96ekdV81qWFy89nQwZQh7zBqNgN4Uf1Rz8J1ZJw5kTty4K9LkqzAnJmpxAF",
  "key19": "5EM5MVLDuzMJn5dQpRLm6czYkVVff5qYDJZ4757SG9AjzVThkGCjKSvHNRxg4H9myqdSZYcUixfmH24qrTy8eGgV",
  "key20": "mwTcaTMwnPHqQFYqgr9CGJNeZHvS3c1pdGHMyAjK1yrMzPNmkFiJajkVMNuggnaTJt3tNMciU1yyjuQ2XXkweUL",
  "key21": "4CauexmMH2rYM7LhyJgGrsTPj6coyuZFchbCpdJTt1HM2gwUohqVa2psqDRdmwN6aiqDQzCogUCjGZxDu8PXc2g",
  "key22": "B4QwLKj3X8JdS631hZK4tNH5EVoqVBkVQ9xu3h9vr7VrxKhD5NKU3j9bWT8pYWuYHAFt5NPoshMdd4bhECBue4S",
  "key23": "DQ7QjYiT1YF1Cf5CXU4W5B2dLHmojXork76VEQ1ZBG1y3dPyWt9NjAGE2hN2zcwPJGhmNVVfkro47mfTnX4uJki",
  "key24": "3if1RRohP46ruMv8ziNWvTSiT2XUYhrNbqG16yq9WyoBFkZiJiNC6s98bVAMQuGvndbfUdJ3qS3A7Ck6i9xTzLDL",
  "key25": "4Xrg2w2Edz6Mo3XLEqjpuq2pbcoCrroyqAhX7rTnEE554JxPLmkZfHjp5o5iu7UT6iMV5haLy8k5xNHxGAWzLK4f",
  "key26": "4y9oCWporQD3fGKxv49xuGReSTxZ7UGFVUGnaiTfT7EHKtxS79iUHdoW1GsnXWcnPpKynJDCY65jsJP5YVHeNAyi",
  "key27": "4EitZtL2aFH4j6yjSagveA9rJDqxDcSHrGTgVbaTxtEbagRKRCFJfWVKcHaBqVbf6UzvDgTKqNzqaWw7gUrA2fay",
  "key28": "2rQ3pvWWtfyoCxphQJBPmSzhFyoyKc3ZaSxiVMbRaChqnm1DwYupWrPp652PAfNPiAL2Ptv5189Hy4SyR3XmNPXU",
  "key29": "5uTayv1LQLihB2wRvEWcyQqAuMCE5twn4Tt4LGW9xPHT4Lwh1JFoDezV6bYtjfVhnAq6f8pJtVLG2vPtWVijPAU5",
  "key30": "3WsiL1ipTJqRYD116UMyXCHLg8FT8kTjg6UrhcmiUB38ETgfcmPGhJorzdThCPZy2FeCgYQ1hJ9FkzX218ERM5nH"
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
