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
    "3aVw9jgwgLtYAB7sM7rMjfrCr52rsR2hiwpW2cGGYRBWSaTchbLuHrPHurSMKnmBkyf41SS3XJ9eJog1k82UFVZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GarvEWe7e5EGSrjB7uhot35Yq7b7PVrAK5wtE4xttBtLaziiQMq5qRdP5F2k2bwzcdkFB1toiBakV9QLbtmGZUh",
  "key1": "uFamzQZagjBcwHDf8KrTN919EvTAdRozrH1o1wHgktgRJn7FwSqTnMMzCAhTXK2J2PUh7moB2YcK2F5NxZ6KKcj",
  "key2": "2QvL893jX9wZ24WwHcv9Q37kE7RUqZdEbEDWFT6jMSfvyQBKp9tsYdMP8j9rrPdzyGfEUgMQoCViAwbGzKHzQRfb",
  "key3": "498kMENxvr4JnLMoHjubFWuXDc95Ajc9oAZBFav1zDxkFwDQujh44YDRHSWJQrNUUYcC5jVcKRCffG3VLXojUaUq",
  "key4": "29rkHxHkZGLB8rhPra4sPhpF6mAXcvW5kLfsWtF5oP75oZ8quQs2BKcYWMrNHDULp1Vz3RCjHwdfuoH3mkHHFHx5",
  "key5": "5kFivvetAovzYYuyjFRM65eHMZ5gYvTTAteYD6usQfjMDbqRV7egyELPCoEb6Taf4JX3QZqa716vESn9YAHTM1ZD",
  "key6": "5gtiQQqAL2ndqzz7b8qjD68UNnyuwwRNTqJ2tP2wpjApio8Cu1pdYXdiy4wZqq9BhXkusb1dXPyDbnK83edaqAic",
  "key7": "3JfBi9Ui4x7Ly5pMxYTCYYoHg2CvH2bMUzyoGjHv4PUhFFUomck42vKZBY4LGYkNqi8zkxB7htvbLQ7jUXRsNQVb",
  "key8": "5CUr2VeiDLonNMKnHjYnXF8a9sgdM1pakAZEdRoSvMBEepc59Y9yA4pnTwitgXPrrJ9tn2L9pUcxZYi89Rqocfxd",
  "key9": "5zG9ppc4e5nxtnL8CAoLhGnJT19f2kHSDVPNmgs6wvpt7ZzSAPptNwV5qfq7xDcctxxdxYygZh5xKw2gaovTr5zt",
  "key10": "3Bqx5K8tUg6ykVKvUqE67JdXSn7hqK9UYqzh9bLfztYDHVGeSYHd8zdwSLG3f3fhZCB7YBfc9u1AZa3pxWCZarzm",
  "key11": "4HoagDh5uSuq676LZbJ2YTzqtmpRLRJmbcoefYYG1ZHhuxueefj3P7pZ1HexVFezGBS5zwZZz5zTKbmqLubt8Fem",
  "key12": "5LP9u1Hi6zr7mUABek3WciEs5BEoEa8eXLb7MbqTTHhWJkYZZbtJ2fudjbrHyt7Kp8tVbQSpmLT8cMaf1mncZvv5",
  "key13": "2W1UTLhZsBtkZCJpfC45M5FJYgBwcepz6ksy3eanEmY3u9u8QCf5nR7nTMHby8gZWSWeubQ8HtqoCQ6N8RHBvrdh",
  "key14": "eDWMokZMY6D1BN1KkyrtQGemD2LpFjqvAT8npBbWxE6srPmkAk8NxWouXBmWbYD3aPjF9EKpTAsqPBRa3G4rDA9",
  "key15": "4HEQNmKCeH2CkGVUKxWNAwDtSxtxEY2U3bLatQfHu79tBazt4ZFFpqTjKKsrkLKrpT3iU9us9K3vh55NUU9jKXxg",
  "key16": "2kRPw6WNDyc972x1BrTjLkg8ufZcxocrW5Bumtqe4HnHGVypB1B9dUNrmgM84kAd6GgW6p4K6XSLEiu3r54cHLYf",
  "key17": "32sMqoEDhwG2dHDqzy1t1LLuG6CLLLspHWkK9U4twu1HsonWqCeeSAithYBkrAtSbx3koPQHRUazBgzgzKysHTpv",
  "key18": "TsmccaiWa5jc15fN2joFB1sJQEcju3icwpT1T8Yshg3jfXbDtB5PAzDmARtYFCJH3VrCz9MZAyGha1TCpChMu2V",
  "key19": "m8UM6d5DvCSACgAcfGnQC8cRit4SPvV9vf2CZMCsHwQqyvmQ2Q37ttYbDr2DTFQ6jDY9hgPyfX2p1yNDC17ABom",
  "key20": "3as6zxVgS3vsewiH9M8nKviLFTmQvLBAoDQkY4dgWq2wSrimD8pJippExBthaJScuzWsrGaEgMA9BepgXGPhnFQx",
  "key21": "2UeotVLJVkxccp8g5CeFAvsGu3YdDKyRnLYTUiwA1MuVr9Zv8SFaKGb5qtWgBk4F7RSubHATTrygSq8H8KQ7YjbZ",
  "key22": "hDqwEESGqa2XEKUjuvGrhKSnycxF7Zqs1g8hroUUsaJzyoMvVEQ3Z6tpB3ojcTLNPaRFJq5pdv9YUnZM2Bc9RxP",
  "key23": "5ZVmdJT1GFZ6sxTGeBbJh5XAPsSqK1AnwuixRnzAxz9c3E5RUJAyG3c4UiHzTLDrgzDyKsqiUGLjwGswKz8Uvst5",
  "key24": "4WfZfEaAULcHYGc6skaq9Rr7tvhWqAKorz3J88BJy3DkYc9BPMx6c5y6MA1f5Zq5Wp1s7WMoYNRbxGUTwghWx1cj",
  "key25": "4PkERtCNN6JDVnKaqJdF3bWMTBenVQuA5tJ7ogRUMTW3vEtjVqLNnXyyGAMCGdYPurYYbrHS8Mq9AB9Uyboi7Nv4",
  "key26": "384chorjwPNSoiYKhWZFKpvcY7p4kUJyMmh7JEFHPhMc1TCj7xunxzyt8hQEAV8j3TPEzyieYmMjVRffc1GGWxEt",
  "key27": "3hFWjAj6ddRyPUYYM3D5t9AFsa9sSSAYG2EXkwckP1oN3RsMxJTnkqQwUfdYne1CchEcHvQQzV8eQmNjAzZ6NVEd",
  "key28": "3rfDu1pcvPmsHiTw2t7Rqo6wqXPAXhCH9P63vrFPSRLg1pkSje5bogCG8QCYtu1QmpPAarGzhMobyFh6KNY5gyTm",
  "key29": "3isuAKLXTiiR2Pkd89zsL31NzGiW18YdX7WeY9cgFWiPK4SRiB9PbDwRMWzgEz47kJ6kvVAA5VYAhqMY1qK3qnsF",
  "key30": "4d6a4XnUXbM7KkLpnSyfLsgcuM2sN7MoZSEtBoaFHEWcaCRC5gbjvJUW2mSHHBrq7PPfE7SpUmjv7o4EXm3obfdu"
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
