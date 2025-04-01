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
    "3uVNFpxEgrAmcks7uK3ZN1tNNq9K5U6Ahsz6XP8KMmNTY5KASejwxqrzHUaCNK9Gg7bSjdn6BhZ8wHLzZ7SkbaKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWRPR8FGdKKqQMvQrpoNvV2DzzyBXYeikqpr5sRB4KjJkEQPqjaH36FKpmVGWEEBquoc5JkHJHuBQnEQyoZcoMc",
  "key1": "3wwcXL3ftRRPqcjtJJiSg8oCqSxmZuFJC19w59aNcbD8M2KrQRhCBFEEQR21is9cXmWLH25UujGdU6Kx8RNpVAxw",
  "key2": "2nAKjamC5dtVioE2gRJjgGYmR59FPEXLJt74QnumG7pEBi9kYQgYEJhx38hVjhKd71wKyLcYAsHdSZ5ySEjawWhx",
  "key3": "5zGt4ZJLCAmE7BERYGYBX5Lamy3oW6BjEE4P1fRbxh3NZAbYbUNWm1QLef7eBtLEdZQKLKb3mXheHULRZAEs9aeM",
  "key4": "3buTfekd44MJc51LsG3uixb7PQvEnY7HZj3dmoXBJF94AqhDENVfKEzq89Wd4Hc1ZnNKBVyZ4dAAPvfY3cK1Qjh5",
  "key5": "4hUsA1JapK1raaL5K4XcvapxevgPh8LRG13aLHbmMs9dsh4H1Lg2jy79RYoPrYKDWcGB1HAELA2MrmiN4VSUBZCH",
  "key6": "4RbA9EAWTHsH5KRd76BdLpiLXvmUDQMVTup94mGyqgqPKd64aXpMXT83PNdPx1DjcKShAhL8dPY71f9nYDuuMRYy",
  "key7": "4YsazzpVHTUDqrcS2DAjCyTVjczewAxvu71JXZoVdYnbWsPHRRe9u3U2KMDRXMqYcEeEM3N43k4xRRLRZ4JyZ2U9",
  "key8": "5rwnxXFK3Uq8zMfqVGstQkFHHrEpaXh67ZFDgphS6gj5Wz7C4Vz5odKqRJW5DR2fQiMHeMeMjhJ16UgKttJQjJyH",
  "key9": "3ZMhND2Xk765VcvY7Td77wgqSjGEGf97BKNBNWNb6mEX7NeuMWJwyMM9KxZXW9DAfFh1yzaqmyZUWuZ1f1drPMBs",
  "key10": "4jLM7sGTM9H4BsekzJC7Qr2AJTxv8y5JLqELqmQY5xDpMSndkaf1gVB9MGt83W4Wa1yyKupbx23ADJhnDhCF5KRa",
  "key11": "5yvccPd5aaKhUFviuvzkCLdpNcrTunWWvZ2xUkDXMCqiW68j5j7NwRE325hsArvp9kHoJL6XkxWXakDuFxNDKVZc",
  "key12": "BZweqYe8moASMoJZ1X6tniSZbAZMVHvSFDsmVz2oUE4p3b2dmAec5iZ2yL6UsbAtKZCzYBnjaZLqcaUFUzpWKJx",
  "key13": "Ja6KsLwxcyUNdjfu9kxdGxjvNdKBrzefHDDhDiBASczaGbtFMQKdanapA5Xox5GCWNsHfTpandrbsdcJPt2fJ35",
  "key14": "43K8fktpEDENr3VsnUCWLrHkLisiciiPQfdgeSFaKf4Ek5sWcMfcVj9D2b4D3jQeorAkoYBhnNGgSX8PA1GzyhDh",
  "key15": "5t9uBfrsyQ6Tu6hC6ARuYSaJfJtYAapJ1TxuYanNYtr27iLrufskMLWFqunSZVbUehRGjVxSHcEyqFL8DYkdJDAS",
  "key16": "2XfTMEMFuqn9Yt2LQtbSkSh5WxMnGbc1VMG28NdW55Votf9WBtKFA8ga1FGa9rBLs8Z1R1wdbPw1TmbNWq6v2wY1",
  "key17": "4FRFi2kVCkHcvQSTaUyjhkGjCMWfpaRvyHxtRbexfNxTwGsoxCVgsvzJNwXXCBRkEvmRU4u7MQaQKZ7Xvar2cVmB",
  "key18": "3Ju5Gsa6qrBQWKU3ce5Qc7vdQXRHYHeWLUNumE5fWoLLVLLPjk76LYRN7kA4oPfTaKpzHjLRg4qWpsCatG331SQh",
  "key19": "EWSSobbyvmv6wGJcJHnm61tWM7AzoFLgEAA8X4GUGvD8kJ1oc9vHaKFwvwqc1S9Cmrr5FmBbby7XYnkEJDLGhMa",
  "key20": "4Dt1ERT7xwGTAA9XUu9rUTsT2yCHBRQAWUERpW2AjXeTDAN8XdW59mcSJj15HJCCGp4eLDZjBmsPj78Fv7aWgxnY",
  "key21": "4iaFuqWLVjZ2XARtLcHhvbm41eNJ8bfRfEpRQMHamcuZHQveRFvtXMkAvfB4aNvv1wbdDEGSrMuwKHX5BsskA7RW",
  "key22": "5zLqG7gcoDVMsJopicJtBBmxr6hjDKrc4NjuouCMDh6kzvCHVQsj2SpkgNweEnarZ8j23ENyT6qeBK8TkWAov4y6",
  "key23": "fEtWo3BaRiS5Tuob3Kr9UnAeiQW8GzstLA2VRDL99CPNp3dNLgvQCxJw5ApUFgGfRHTmrpKazM8pesuWVNuJJWD",
  "key24": "4KNrMJ3joBFMAuGbRHDS8ZPSYLT7KjuBoU9bT3C5CZf4Bzc1TYTBMiLhGs6Ze95YUfch1GYUafHj7VxL53qRpjtX",
  "key25": "2kr2H5wsMCyPJNN7Tz3FVoZnD78mcv4wutwanfVJDU2SYTs8irdZa5UDQdovobqNEZPMjSHWWD7CBdS6b2RbP4hZ"
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
