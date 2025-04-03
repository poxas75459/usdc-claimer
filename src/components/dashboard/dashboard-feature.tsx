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
    "3cG1Lb9WevECjenfbSg4vUHZKYTfmRjLqSZQX69oufvpmLQt8UWHHq2Y971zqpPt4bxYaiqdjm73ckQQzeRKunPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxS8HNMB3f1MqjRQz8k9UUEVTpdVYNvLpHo62fHVMtNXFUb4ccbU5TvZzGM9BFmbMfiP2WswvQDYWzHiijXb6is",
  "key1": "4SZr8uFNyuVwDixiZRLyhQ9Fd6F235hoN684s4FeSv4MPUGVnqFKTnrgP1WavDeikophfYfsF2Rtke4NEWFotXeb",
  "key2": "borZSr7Qxw6d94RV9iHwoxTktzpoiWvXFpJqePSgepeKQF9d7kmbnCvkxUbYT1comC4pmxqXrJWzA5AuqGDSw8V",
  "key3": "5hRZnNoWk7sNk1weBrsJXGdTnkhatEVBnXAXrX9HoVEGA2s9G1fkBqeJKb2PwovvsDQ2pGz9sb5jhgWuqeFDoVxb",
  "key4": "3bZsfazcycuiD3jxJecuKDFkMk27FgtB3TNmSBZABNUUTDLW3S7qHCe9gAZnAnmvRUWagacrimA9ADbRPTqgGE1j",
  "key5": "5cWJr8pboYyALJCksapDfe3EnVfLRs2gjfxEHCVDK7UXAfLgMAt1nwufLvkcC2hJ4QRC9Yw2E2yTfVAMzKdHZq8e",
  "key6": "4unvkuk9CoWMNB3uuJ8eqnkBxZMXco8WqH4qs228LP9ds5Lx94QwXF9AuYKkcP4a8VK5y7YMRB7U4wKNXjAKJ5Tv",
  "key7": "589w1ou6DkmkTaaUmhFcFcTxTYKoeSeSKe9NmDv1UWfCueDSWubFJSKhM8XyZkYkKs1CwzVTR2EdNQsVvAGBurGW",
  "key8": "48x63GnnpuWNXkj7c4MZP5jYhzHEqSZroQm41VSApU7g3Mp2L9yrmEahasQcAeGiZUEHi5wmDCCzGBWruStjktT3",
  "key9": "DFCaU7MYsryzqkd6DtHUofZNCzt6rV3edf77AVT61cFGPdkSXbFqS14SRpWVhmYPkMYaFhWNgAiZW9d2oofP9BK",
  "key10": "2KdVoz9tN1fRHZhDEAznANRBdRiWviiwZVmzuxBPpSNTp4AYGDKpoiHPA7cBZzfsrMrjy44ZpT3yYUYfJFmQpVAJ",
  "key11": "2Z4RueR9oKw4MHrXt1Hyp18erYbLjs4JNQwCQGo14Av8dsz1JPaS59Zza3GNRdfKkJhXBCoNYxuKrBAx9VnjEYME",
  "key12": "2Qej1huSQgK1gSFfyLfeDdM6pLQSiK4rdeSrh2x7qQg4tvyLgbw6bhf2BQRpDY7K8y9sPfZPs7dzaKeZ3iABB73d",
  "key13": "2wcGHT3D1uu2oSUCvGVpoXb1q1puLbREE5jCgeaNv7UcxsfHFFH5J5hw3iBt1tUuTaEcmFgUH9UsrVXDddovr4Yz",
  "key14": "4rHXbbXf5d4s3sYzWFHUdLWML3PG2eCLr7xV8ZGWQAh8QVEH8ECNHoSeBhXtggfshkdT7bDX36maavnHrMuEG3mW",
  "key15": "2EYbSWwmEz31NToZGHhhGxd5tjxN6PCNPp1RPapcqejyN5Mtm9kB1QwVpFqjx5bpqde7QPk9D4K9vkomkPMJms5v",
  "key16": "3ogTjN8hkUHkijDu3ET8nRzqu7yyFeF3eSsz9RSvnZHxPRut86FbLYgR86B6GRTKuN9goJBgoR2SC6afvHxE89yT",
  "key17": "5vX2LxemZLgRrRW5JwPSAzVdMmJ3HqB4PCuANsZiB6jsAdYEv5tnXEt4RLm7oRJeS1ggpsE916koXRuhPJSHjego",
  "key18": "4NvfLfaMYohgz8a2MiDpz7qUAAUsHHb8RLaASbQsorpBQs2q7xC55KmYXzgjuEmRhg7h2X1ukLtbJsCb2NHYS94Q",
  "key19": "uaZfkC4JakyCWPgoj62ThKr14yCP6tRm5j14Vquo1wk17821QAwkQr36z2LYZdx9doz7k6U5GaHESvdUXCRpMWZ",
  "key20": "3DgznUqK9qG5sYx8PAmFMSam7ECZYc3RToik9cQVKhXikDpVfUZuY2fqFZBLp6Vd6eEVPVT8NHVjaYtZ5Gv8aiPB",
  "key21": "4X8hzLrL71QwhoQewRERYm74t5n162du685B3r6kngbiFxqaqAU9Dhi1MWWLozGdpYYrjE2qjeXV13pbGzrF4dtt",
  "key22": "2feu9YrGuW9pJRrpiyaHSAKhaDox39pggoS7iKHAKvPcDp5EyM8FVe3AGffA2Adu221VnFW82hP47rjzB9cNGHjc",
  "key23": "62yEqc3Z9gYGAPp4qhnGEZh55cmbjL9V73bjRdXDSXqk3mgszpSecsGLoZrXNZsGcNYUrWSdBYsuyWRvBRSEoddX",
  "key24": "5mhPqXk3fKEw2pcivMu9PFgDvit8D2p3J7ndBiXeD1HkXjed1NgqNMa6PkqHuaXQsyqLWcovV91SixFp5wGdB9qB",
  "key25": "61MUbaign7uUSEochnf4NF7k8uWTwicwoPFDN9zHZpF9tA7WUYbokcrJoDRzLT5oHhF6mK5s5BJ11bTGk8Gs4Lcy",
  "key26": "4eGnr2ay7ARRfypXALsQtkPkcmBn4KkWuMx85ak4mtUF8J9jXRaRBGtmRX6iryqBxngtomyUrRFsg9bhvEZ8GHvJ",
  "key27": "5ZwSsQd8otSNwRM6477KUqnUBrgmVyXX233XL8AD8QnXfeCSeEyJnVAsVAetJvSSEFqZ36eUp2SPwrWEArGiWepR",
  "key28": "5g9saA9yuMYrhRkaV949bfXGTd2e2b1sKoTAgymXwhJLCQxbZqd2i2u4NPLdWMXYZuGqDtTmUFf3fvBr8a4QogYz",
  "key29": "3GmeKhMm8gq1nJC94e8E4gByLRhwMp1KBSzG94RigZfeZFbEw3UAaSB9ZTAFdUzPucDyRVkkMNhyJ719kzMiK2HG",
  "key30": "4aeQSmu58Xy333nqdVFMLnKJsGPtxbqEZFAdUkhEXnKA5BcA1ttBqvH7RueGUBbD7w3oqZCzptXggJdfvBP1jzWH",
  "key31": "3nXHT2uM2M7RziyiLmaBBsBoaGYFpwv4yUhrXXqBny4Z9jiYGCQSnY5GX67uVHJ3W5weYxJMu6vdWJcndg4ZZ4aT",
  "key32": "64RAmg1g9dww1RN6sB15cHPWpcBwUjcGSc8CjCy3wT5C63Ks4GD9qCnXZDtt57GGT7t7X8zdVxwHeZL5kcnCof5h",
  "key33": "3FcWZbgyVvNfA2VhMsYb9scduAQAp6D713vbbznkQbZ7B9BGYi2DAVhwSaZmEFH68eyb3dXxmatqdd8RhN8APTbQ",
  "key34": "aQsTbryXNDesctcVSPYE1kKSH13gcs7CQqXNSkvxZ3kyuPqjXKfJmYMZzR7hFZyxchyTejv5AyNG7gZZthmAwCn",
  "key35": "42LtjKm12MUjyWWXR9rYbESWvt5k1W1MVgXSvZQ78XAoxc7oAwsXoWqWTinGmzPJmzt8rSjvn1EkoBeQ6ULn2qEj",
  "key36": "42AXUGduAQEcRBQAYZuhmc9Egbx956bmNrqnwL99K1q24o4drAqaUtXS884rcBSim2pXLVGv9ssswKerbpD4E9HB",
  "key37": "3SdRCDfzRrK5iYFsP8L1P7mEx5p1HURg1PBNVmfLe6cpSXxE4S7nXz6jsDxGCAWFgXrCWemgTZ78pNi3X59AVpaE",
  "key38": "5NdZz6CZUPvjFaShp5xCGt6jDmazk5iGNRF6MvchmqFNTfuzKLBGbchXYB5gsfoWt63brzt7TY7eMUX14i3UAhcJ",
  "key39": "5T6vAB5fxrinxRhU7gviJNsgY4MMHBQeZr9RXikoaYHPiougWQLRG5ng2rsmi41WH9AxtfwN1RvrAYLBTcPc1q5u",
  "key40": "UdZoNkddQpq9NwqJYBUKXtfLjTaf2Tjey1FoM8EHjXGt6jS4u6TVTCjTea54QaBt513cEj5irNwckRTUz3EQLKw",
  "key41": "2dsVgaep72pE4FMAbqoYBFQdjj871YBUQ5ZzuibZ3HxWdLijUQdKxhUN8AXi665VxjDQ8CjpVioF6ADbXZMYG6eR",
  "key42": "32TXHguigBX9YYTJnkNJxbefu1y5wXTVNsDZ4CLrQyyyTwFYrWiKVd9s6WRQNBLayruj7kc8WTy3KJeWznrmxahj",
  "key43": "5VsTxuCYvLt9QrYdszcMNfTLHaCqRzSSS2wfAEn2c6CR2hfLZWcKfL8fz2pmTz8rjUUzVFt47BvmSpmHrf5EyjVn",
  "key44": "2wNx9xCHHthp4aT3zVPrpsUtNYZFU4TU3LuEFEurNauEuKy9WYfXno5SrsUSHEMqmXJGjQFHh2twcRBgcwG9Q3hM",
  "key45": "2yqMiTXJt65GL67UsVdYo1q3aTsK4pTkbeg2Jnt4Nd89k7AnwsZ9wLkndvkUgRkX11ZxmpnkgBAQFsCgkZHxqWJP",
  "key46": "1vYAgNbGrk2owkospM6kY6aqxbmwBR6H7zbAqE8dTQA3FqNALjzkae2R6S9SiAqD3Dw69pgeceWaFNoX2kbZdhi"
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
