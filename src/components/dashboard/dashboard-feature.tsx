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
    "3PaJFgcy7mPE9684PsK8DsaN1kc31PZqnGeRCpVGp97BevNY8DLgQPxYSfVhWbQ5yUS5oisjrJWoLWPy4Sd3wyAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYPxgXAwPwPwTyk72Y9kMgwkBFiyYs9WZAtb3zKGYk7N1fYGRD6mq2MZtD2viwrCgwWbV8qsvra87PaNF56q1SH",
  "key1": "T7qsmJ9HsbFiqXWVagxjpQWh6mJz8hf5MA6MjFWuv8ri2rKDkDZABQJhzXQb75yRK3nExae5omT3oApqN4Rupcc",
  "key2": "4aBEwzXQp6oCdxppb839gawxADSU9aQuQJhfGSyta8EwJmS3WihZ6WXTxZSJdp2omxagehRutMD9E2ZHStfUXxCS",
  "key3": "mbvzD4JhmFAGRY8arboUpMaB3Gj3nDCChuYP6ivsXGrAkDa4Z1YekG2sUkQZw69q7nWaMdwpVpbMhk8c89xrGTZ",
  "key4": "4aqqw5MatvjPzurtFVyGoowNrq6RR4rwTHyeLCfAqyH3Rpz9GwY159guSWbzKXv2YKWaPp8P2oYEwtq3NRW8jvcL",
  "key5": "3ua9fTB4VQNyqr2oi7zC4mmcoLvg4MDfwN2a74dfAQqYTBFrVk89zPTQU494dKyCBPJwkGSnKheqV8vDrog5ynNE",
  "key6": "2ZTg7qiUt6yv4wokBwrvUxMqDx3dhiaBT9UH16rpyNii1cCNjRVcgNK2Xv54CFhCKwEHTcJ9ZxLsTij3DtsnEqoS",
  "key7": "3sbnY792YtfsJQUTXKDbHM2b9GKF6RYzQbpaUfdHWbMNnBpJ55YssQcxXnxJU8JgeHCAsAuW9FZULFosXspde5dJ",
  "key8": "4hMMCAyJmMDm6V5n8EAcVCt4gbcqNMUWrkEYEbCCdqimPwmsCa1Zm1jhoh5wVLGM62Y6iKLjb24oCj5TyN4s1cyL",
  "key9": "2nGJ3PGQ3yKDtRSkEYH4JB9k3fi4wyejXPM2qtFp99srADCQPGapi5QQ2iuqoAiKrEQDPdWD1ZMxXnnQuyxB8S54",
  "key10": "xdRbMcamUZf6ut8vohn61t72aXwHb4Y5oicePzWdgn1xgFEDMgRoHRWUwU6cDUSphiCkBhjmT5tbHUqCdNFXSHF",
  "key11": "5qQw3bozaLcZiDcjFWYvKfhmL3qVL5VtZQRz1diZu4wvJKXZPG18se8q7KDX1XzZHqdApGZPBVn325CfKWCVhp7T",
  "key12": "jxTvPPV78hpDMgU1DoVJfew4EMnTWECcuRYvRXM4HTe7QjYXQPtoQtufKvbvbnCbyQKVD93mHQELUFWchWMxFi6",
  "key13": "3Kh7agvkcvP2QZnVQLEemVaUH6ShDoJ4v5V9sdwxTUgCa4KwbNfmXKQcBAydX7hCmKGonns9KUtcz1MAfwhA9wem",
  "key14": "5N29wQ69xqB8rzBciVrk8tk6onpxQWaQmctRJQPkPDULPym6AjqTFYdyTeaJFhp4VKGHyFPNrf8Pp5AQAwdXygFZ",
  "key15": "5u8w8eD7hXDtLAZpm517dCUykRbW1XukCRkmMjLVQjDyeypQ4arSKowzySmG7FPGfaGJEDrq6tZo2DMcmbRpwpoS",
  "key16": "nhsi4kpDZUZq49KMDWTuQjJA9hDGR8kYR2ePBLwfDSzwoxoiHHWq7vWcL1zDX4H53pF1Fts72wcBDaK12uXqj4e",
  "key17": "QdSMSrRG2qkfGAfqiofz3xrXBkET9gGi8kDrEyAXZYaYrNaRLvDMDZZ54BGBHfUvhm6uSugLpH3RsbkbfB8S9tZ",
  "key18": "3VYGkKVWhQGQkJ8zzVg2R7pr5GU4H3dJiys1DkSmpqJXxMazbeFc9mBQ64q46dY1UMk1a3uDS5yD9oHbbKPphPp2",
  "key19": "2rEPRL4WLLpbFsgYCp42ZgtH489pp4q4C9NfZnKQgN5khhKq7RhkArDp72Hob8r5u8cuf7zC5uCQ59d7Tsb4f58u",
  "key20": "3c5nsBborCZ2ebEo5P6nsyy8fyAgpiXHZjKs4T7N9CroKzfX2tGGsW7zYiPXX4kXWhN9vu9YL2SPo2SEF5zqUwqV",
  "key21": "5sLXEans3BVYQXG7uBFtsJoGpc9pmqhvgkgBc6ifVHYYhURL4tXqTYuw7n4GVshunL1smD5eMpwoqyUmxugxg7Vv",
  "key22": "5yaHhhztdReQwshsx9qHcSpg4ynaEVH1Z9BUsBA5t6ytWRRjVjo5NsS9LVui6jTVuW9tHMvVoLa8yQiknka6TKNR",
  "key23": "326ekyWYoXhRspYuBQK3rvwz99DjeK7eWFhRCHGp3j4fSwq4XS8TJxejGD6WdiMUm4ocMyDcFMcxDnrJnoFB4FQ3",
  "key24": "5FfYikqE55NfgUbspWwLetav9ATVcNh8MCUpm5eCDDDXtbj1xJfZzoLYEn1FDUugWU8AY9WzSevgdkf2SWVCvfpr",
  "key25": "4PGVzP2xWHkRJEgykhcRpq5oFBW2GSRJGRcUnJsRgekGbDk2vHn68BftcEjKdUNtiLe1xQZu6GpuSnARuffiUsNd",
  "key26": "4HbSnvBemA1TtGVNPymDnxXQuk7gCrHmxS3U8hP8AmYKrpw78Fg3kgu3SqEUCnLUEZqL44MrHdwPiuFhp127CECB",
  "key27": "22BdtrSzYZB3ZKnsS56tyykn46z37Fg14xZb9Ew8Bki7t4GsBTnuyJcnw2c3nUAGcXikFQFwPBTbiufo4gzr3EzS",
  "key28": "EX38j2WWgstUaBaj1yC36WeJ6qxUR4UKmDtDxWiyYVPVoW6uuETNrbB6Xt7ZugsVD5GQ5oS3qtVqJWstbTnpiwA",
  "key29": "34MZSRmTaXe57JDQSQUZMrqDCzrs2URcpAcbhuwaTwVGqm2RJNWAuaGp4vMUsVakeerc16bNx3jdxanHo6dq8Ey6",
  "key30": "3jAVppKbs3YMHLSBAnTJPngGBgvLm1geb1rRMzpwptPRuaNYxR7hMDDdNkrRKMUuomDxVVxH1oE3HTeA6Bta9Pj1"
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
