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
    "2gV7fmJpNtQJP68bbL2BvKozB5wjA51CXGnPcv87JfAxi32f9q1X2UUjKUjdvxfqkxBupYU5X3ptgnXF6U4uKaog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Rnwa5nmudaJ6kyGckA6fwxQC2xxG1taXEWPhw57Ss4wfpejxxiF3UwZQUYyRbkcn2XQnm3Z2HggUwEVzxUc4LX",
  "key1": "2orRHw9gbHf19mjvWtzYRymvszmmXSXWS4SRigXmSRsocy7irbfswJdBg4frWBdJd9cWu1gqahM65hWBCQb4fZVe",
  "key2": "2wTn8xEYG8zRmKNfBv6HMcfTr8P9rdrreCXwuRJjfgrcaXAeKNimiSkNGYKwhsnCs2W98HPRYEnEb6UM7xGqa6op",
  "key3": "4hh53L7moYKmQUw12dvujjMKjiFzccCQd1VEhL8KGrdKmSq3Bsh9VKWpRvAzoxEcm66TRq3qrienPKmRdDBLpKwW",
  "key4": "4o7HcyhZDopvEwghKZrJ2gAFgL62VhtPGGfYEcGdfRSjJzFmdCTbAyUnEJ4hqfSpEdi9uNnmdTSeJyvvkDSd4LBF",
  "key5": "3bJDidqeGYwTJHN1cxhasbRkugHGbBiPKSyXWMFtis3CccqcTU6sVLQffkrvcF3XNQd7EjXTWseznQRvZfNWa2cS",
  "key6": "5qRUGcnBcmU1gum5nnvMJgrGJCiN8bw5sAw1SLVi85PLANF7j29sophbYRqTwT92KUzycLsVj3KhxWVTBzSKT5Sf",
  "key7": "3MB3T4mGQ4kg8hpvzfYvSZLsAq47u9tyqjxrLyb9otq3wbuiF4uzByovAMfCMQEHjboHyr4oxWKTGko6bAxuDaC",
  "key8": "5pzrE3SvHZFT7KiZzs4WxN2uPNTwKeYzT2aoqL8rY5myYnvacHvYT5YzYayHGoRiiSaJq3HLaRg5Xdrd2yzaTLV",
  "key9": "5iUVSqHmmUPzw5Db6qsTwboLiQoRLTeWk9zaVUReNQK759MjmRs6smE5GMNCetjC3y56VGF9j7w6kcTbNKgQshHC",
  "key10": "2DZEnCAFkB2r8jhAAQEFFcWuGcD74GC5M8NieZx2gi6z7apFA4MSkKnQFNuwXqfmSACgHaUGVs3VGRTEMSwxJt2a",
  "key11": "4oP5HTQCJ7LxLJp1JVJrWRQ8EtzjgZE4rKTT8U7mLyeHxtDa1MhQehmgpNVmivRLcjyHeG3oqMZUmzvGt1ivATBM",
  "key12": "2SsZmXtyfMg4SUqoF8VmnkZ9duQBfVMxve4qNzFHZN25o6cZ1jng9XiA1F1mudbpY9zR6jRVkv2jmoi7zG2DvLra",
  "key13": "jEK1kRMxQBC3nT37zDSxmCpGCCTQod1ZGRfQUQrXmAtTwE2qvocdh19r9Sy1c52aHno2vBU4JArHdb9kGjFjGdz",
  "key14": "vxxd3wKkrmEv5vcgbhfHZb4XmsNPmTtpkfgmP4JcvjM6f1jS1dw3dwgnj7M3AH84eiSokFPtR28v1hufCsXzd7g",
  "key15": "3Sbprj6FPEBX1DZLWoiuLrzNvkTRPTTfTtWr2ABLGETrhmYKhSjuxPZZPhAzgPF77Zd5eigpFGAQGcqPSoRFmfPs",
  "key16": "3rddiPSWceDbj6NeNfQxP84wMpAsLJkYsemVkPSjRqsHg3h2UeCnB4b4hqhwDgJVaaD4qiAtBPpAtDa9BLWCepMB",
  "key17": "38jFpH3eUHGP68SHJVAo9mBnQWY6NXn3ZEa3fGbvgmfULZsjsCH2KgZ2aNdLo2z9j1MErFr541upWC4Xf5XCeuWW",
  "key18": "2kEvJD8MzAcpQQpFesFYnXUhWTkrcXSG9CGDJsViiVdHR56toLyyJRFjyPNw7dvGewdy5wUx6mntNrpcZSGejPjX",
  "key19": "4ncQiyMT4VspjqwbVPA7cv1DMsEtLgM8kAVU2VpTkm2ztmvBW49EGa8giiBBUNHb7An5NfDTjy64rSqRELHdBgVW",
  "key20": "5yhZd9j1EcBWhMeHVcEuVjyfFx9JUNw9RV5Mw7oLT543xR4yTErvueJQ64Q5pc9mTu4BdkEgtVs4mUdVpuot4kV7",
  "key21": "3gYwhARqCWMuXwN8xB7uUmBQTxy4T9PH7VUQS1oWe8cpt9JD4KbirvZfDkDUiS3Bp2yCSM424E6MPtTdAoyNKzGT",
  "key22": "5yvK4rVcz7QwDRjtxygVVYioGpw6rtxDoW9A9d5mYoeFwZ278cvK8JqbZV1hQXbRU6is3pekLxu9oPGJamWioxS4",
  "key23": "5JtHbxqpiUTovFD3693xEkP1QwDVTDqFRwoEeq8iUNK31Y5c5kHR6EdNNKYWJX5txdB69FUUYq7QUoLKdmFGmZPL",
  "key24": "4kgDjvi9XjfjX6cGyx3PVdVmkYkvoRMUX1yWQRVJZccU643ZmpuMU3Tfb3sAgKSMpzMb6BgA6tvUAujtuVH8h6Vi",
  "key25": "4ZY6MdC4MYKku3iUMmBHrDPzsqeKC9Gh3jUCt1LLA3mV3TLCoQ8Mq1FFrF577grpBRRrizJBUFJPGvF15DyRbFLb",
  "key26": "2soAPpe9J726NW7jsem5DCP9YAJcauw7WGbqr1zHzggmeHRbeBBzHygUP6UczQoQvvu9K62QkbNey3Dp7GUkJu8Y",
  "key27": "5yFPeboUVhZcHwXLF6KUhYjg3ZqAuX6kUhdU1Swf7kniQnN3itXtRHhBxssbpyh7qDSPpytLozjcyaJcrU7XbDDB",
  "key28": "54KpwuBX8phFjtSnWn7jhpELro7bUtrbNPn3hPMNwVjrPYfaVGXfCR5Zq7hBV1EUdYd51mmMhbiQNAZicrZ8jju2",
  "key29": "2GZaFJCJkZeAgoYGmd1NKhpviB1VNoPhqfc2MHKRiTcn4imLNuCBU47dyxrG5eQ7AAQJwuEoiGA45rAuNX67pDwC",
  "key30": "3H6tn1CU895SGRKZXBR49ED7a6ZCwdCZw2dEcDvFi3sqnUvhAZg7cQafYetNDXKaQgrVAR6mGRaNrg4jM7ys7nsM",
  "key31": "5b2LAn5n1nQK2uoGhxGyoX6FCxA4ctKmSvSXasHhv2DmL4VtdfypteA25hCvX2UH38sSAVUmYNZ4S4PJYxLS9Yza"
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
