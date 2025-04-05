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
    "5joMKJ5zMFpxyP6jyeQjc6LwLweEyxdd6ZWyZqFTNi4puP9QsJA7tX9iihvXktjkPnmNZ7tQenZCKg2ay2VM1FRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YXrYFZ5B84JTJBJbhLE5e9DaGPby4NVXn8sViciuvJhWzfLE64WXyMhQVP1WfCFvYNmizNXyHUjQ2LuBC7LTcP",
  "key1": "5yYW53SiGjeXQd6WjkRrPCJMQLC1UqPMu3tRsCnrYzTUtUmhgpbYMC4Sgi1xJi6iwAEg9eDSUTyhsyGMJB2QnqgH",
  "key2": "2Tvv8R7t3QUDWJcjNfk8x7qaCDqdGvxSTMDDkcXHKKV1cUZW7zXZ1Hom4Vem35quUcpg8zkx6Xe6NojnBH8uWLyK",
  "key3": "3PTQpWjiTDTMLbgFMtBeGVyCj4uSjinSnmjeiTsMQNJvtbz6DXdVBkQnHVC2Yo6pqkvNUMpw7LAnLkHiaz7wVQAJ",
  "key4": "52XhgrmGc4xqbvm3NFybUCJRySTGEGphVpW4ya98f8viv9VdZC4aQqHXJq2vSaMSWY7PexhcEFjnUnMyBJvuw2Kh",
  "key5": "2oGJjPw82TLZnR9mxfggMScC4nhiiSDKJTEWrpn5Q1dPx71QZoKvQ87mZ97A2pDvHPns4LFaB45PG5cgcbFgw76s",
  "key6": "58YBEUMdVUa1HTtxSrpxS4kyjaNCi97hy6tMdtDQAHuqgKG3GBUxpMCowjZbbbQKCpq2QzNr3PrRBJgP79z9b2fM",
  "key7": "63KozEziQTHEUoWh1B33PMBDxJQBsuJNtfwF8gCsUmLH8fSwJzm7npiK4H8a3HXBBB9hv4RHapZPUFC3DywS1kZj",
  "key8": "5knRF5HdTUG3FysAGLnDyn97zTXHAsQr99rtuTo7pDGzZsyuXMmp5ycRegRJRJjWdjN9atBDa61bqC2nEoVpdBvS",
  "key9": "33UBgz9LaaBV7wvYWfvxZQ8FLsVZFEpZtgrjuXhhAt1ff122aMCyZ2tf8YcFboWqEL15WXgYz3WA41fwjfjU8VxD",
  "key10": "3eYYQgJy7tGsRHGawHFCpgCARDK6rS6r1N5X2ZBV6RzFpWdPXsWp7FeFtM7dW8sStHAPnxupx4R4kZi9WvvTZwbB",
  "key11": "4krM1mSpDa81vAmriuakPf52tNF776piJqVYj3Xw81S94YtxgwTzgWWUeFrbPVGkbwvk9xi9eZCubmiMpQbPoMKA",
  "key12": "9kGGthNsgUNu3gUuMfEPKpWHzFXS2g25yscdoPrrHSJDkiTNoVdomt6LdLqvP7egWNpinLNQ9EnE1xh8HiUt1tZ",
  "key13": "744L4wiiktcA41EpVDHRLP1Nob9vHZcFmoH1tZdinTHMm8CAvh4VRmRRuSGfZTTGQexAJk9CPR98FeMuiJaR6Ms",
  "key14": "5q9iHPxda6oksNekQ81UuMr3hF3LuqnvnNWae7bit8534WQAKZeLWyW47JAKx74bU5AXyrkz8fVyokNf53ts22WN",
  "key15": "fnxxv16FVbaZCoE4XFbLBbYFdvdyn6JDKiVixAmws358vfusofKMoobjiArVL1spfPXqCkQG5aLxiD4ybWBonBB",
  "key16": "4bePUWgLD9at7M3o4Jc91wWhEH4TNx7fKKgizWnmZ4TnqezRrPhu3Zt9vvkY2g978NMVRbExeT2CufDfbMvNFqUZ",
  "key17": "2C2CxpNjUwJ5nJmrMGEyzm7giUhK48s9XBHw5Q4A8qd5fSz9LmUrQgPZAK3EtYZ88kjSpPgqTYWNyD8zsu3nhTEi",
  "key18": "8p5aUrSr8hzpJw4bzBFVk3KGjf7AjiKPctqxwmkWgDgbjQH1r6KseLN1BQk3YgdKoZwc6QM5dHVCvV66q8qWffd",
  "key19": "3kEoQJvuuwVQs6BKRv8556ANDtzBwNuH1FHBkG12My2Rv5SKL7Jt4UFAWLHAaqHV4zaXr8V8AR2CFaifi7azaC2G",
  "key20": "2AULGkS6pTSgcNgk4nsDAmyv4HAjz5pNUfTz4kdac3umSPhWnnxopFcGERKkwBQYYLCuXNZTSvW875sbwcnTByMc",
  "key21": "4gtReLRh4ce4H1x9qNjXi2FiZyVQLd3ciAXXviEMmdmid4ELzqEC8ojeYebHzbKM3FNLvD5aBjfzezfNDRrVHMVN",
  "key22": "5dPwytmkASz2GXiqdsiE465zENmoRLfnjcUENSbHJHTsvUqwcQMVJYBhQGd8ctXEan5BAWaZjFLATkTx3igr4QZR",
  "key23": "4XQNJdnhcQgSGwa3yNvUmcjRr5GEUAtjxGsYJsKHjMTpMBZTA5APBeugLjcJW9W8q1aUSv3hQ2JRsp7Evc1SRM51",
  "key24": "5Y2upXYQ5CHUhfuDiP91TyYkZs3Bijg2E3diNeSGCoCPYsFWhpgsJAmBdG7orjQfUEeKeSKKUdpvVjtRQtzQKozD",
  "key25": "61w7SpwhzM3PeTaaE5QYLFMXjf4P8ZPdNvXKqGs6HybMQR5Cgne3HVxDQGc3bBDnuBorv4ekuWPwME5v8WwGNqBm",
  "key26": "385NL3CDni1rZxqzAmocq7cijTd9LWwnekQZC3mD1w6bTQv1gqjEUmLU1X78oF5QpX68crandr9x2KNdUxi3LdNt",
  "key27": "5dTgoA4mzrz3pwHHNMQCTtW9FMFjuUYDspdnoaR27GstMiJ5vQpcHEnkjQxkHJeNXeGy2Mu3vqXdNNFuZSxpEBKY",
  "key28": "5uRBocZhZWVvuuADRMWNpxmMgdowTAFEG9gV5qHpi6hdfgokyMHHNCH76op8ifvqk6i9V2JrbLFrGMFTSs3tXswF",
  "key29": "3Fu3ePu8jVRbfeVuhBsy2A3wPWFhJcN7y3AynBrqxvwgUEH72mvJQCPZ3MzkY9ydUkD2ADm92Ym43mCu68BWX3qo",
  "key30": "2UU9yPPWgMKJnJGZjgD9ToaBgeDuXPx6APYjraqwpDpmEyQpZr6rEpSG2nNpMxkyPcxYDjJvqVXnAmg89gwxQAcV",
  "key31": "43ewVV4S5wkidqtEgAZpXKH6E92y4hBpUg3BiU9m6taDs8SvP4BhQwSLrGFbWPWyFpLp2FLLHRJAGPKZjd8KHiw4",
  "key32": "317hZfAwdKVAUWBxuf3WJBRXRE5uWYPYQFCzrjthaKvguDBXu4DvKWqUTbfcGEenCR7qAzXQZ4tb8gjZLpz47uLj",
  "key33": "TNfDVEaeG8dDzAbba3eKoid8QXC9Vvsf7uc8mAP3dkfPQXHRXQs3FMHh4xtvTDPwqYK9GTd8gDm6eWhQ9rF3ja7",
  "key34": "2fqRkCpe3EvQqDEWFuRXNGye64Sbydm4eqgQLnFXo48j4f4RDyYiuXsFURSNTz61guEafoyLepbssrKocSTCXdhW",
  "key35": "4Z8BWSMo3uhHW4CA76kD1bWjqxkkwGyLm3UieDvDG6Cn5S3RskSMCNaiDvX8rUiZzwJs7WaDbiSoRvmUtfw5bv6L"
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
