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
    "4auyW1pJkUS4zVAZiMYaVmBAvQ2QGuxyvxx3xgKnsLaZBsYBYW2B1f3vDd9YBFw1Eq2SjRHcrSg5QtiFbbY1RCT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGje4PfbKCgjDpsQBRivVcx1TK7sjDSwZpqkD3X3xFEa6LSo48NPRa5ZvL1xGHo24dFVv9x55pMo74VXXisA7j3",
  "key1": "2rs2STXip6hTwN9Ed9HRzgBmSoARkyrYYwGswwNG8TewoqqWywKbwVnPfAscHAAbdYvURrsqoRntRsCW3vR2oAHu",
  "key2": "3XjUg4w1qMvohxk9NVLY6oUeiF8yh7LTdkXuw4XPQK2Bv49L9T65zgigtgzJsKhxGno3wkS3mdCh19JZtgXuxKNm",
  "key3": "61Pvm6kyH4zx74vfTT5RUvEqArKFb6SgBwNRMSv36wuMjne7boSzPf2d8viXH2FXzJdjptJoM9hYWBS4S3JTabhx",
  "key4": "4jV1LLQE9LWuVu28vSBTyQ6fHQaffxRuHYkYHqURx9jYHYUXFmG3KpcGJrGuUVML8BQ5F1i1LcCSbtNU5YhAru7C",
  "key5": "3tiUsqVFo9hVeeix4oSxioZ6AGoiFmBDah9RmPaPWxAreKSdwuYnfqxo7KFNDcQ7eihFn7cMEnG7RAFVwMbaxTp5",
  "key6": "43xgqWHVcnS167AiPh4imrtCLFv9USgMX7FGQ5qknR9yMmNnT3Z3n9KB1Vo5AcJkzuz473QJqU1TLycNihUnmwfZ",
  "key7": "5ZMYCxpkZVvKWVx375opFqdftnPmGoYJdSUCSKzDBY9hBGPd9mhCUMbj4y184rUWVhBT1FyfCD4qRWyVvZUdkeRJ",
  "key8": "2s4EWxd9WYwZSE3PXejPP659LbShohJnZtUSBRJTbT934tzsioLbX6TSTFLPrWBt9dfML5PA3xHdssZVnnWNkP4A",
  "key9": "51LzFR7JtpayuFQimkEeKtWagXLQcUrVrxUVGVm9VvtuZ9JzxBZWuzH4TV4MhXnTQs6zCogUYfV5AyS22sVQRdcJ",
  "key10": "5xFnUmzjnAfMpG1HNTK6u9xWgs2TirzFHBf9EFrEHPhmNovF1GkyZbTSQrkDwDEqtkz5BsCCUHJkUXwSg6njzCiK",
  "key11": "3BjEULKm9PYvA6EJ1xJgDCuRNP4BVCUiG4UYr5K7FVkXwv4XFWtQpsc5iGxadxta93omw61LvsUxRaUpYVMsrxrt",
  "key12": "5s4Aa3BNdeHFAHToPCVxpBMoxeKQbdtpfcmFgYBva2eMMY75VHxNoD5e7hgggWAC9twWWudbP7ycA17WExurWc3i",
  "key13": "3cB95Xb2BDetoD6w87Zf9U5EWazvmon8koEej39VKn4EUQBKCHsqfB6uUBMwkULq66vV9Xfv1YvKtj7h6Xxmp7Mb",
  "key14": "2XMmPZQ1WdLEkzz6iiVC6EwYWZGCst29gAdPpp5wYtKG7LsJHHno6Svxby7MHdUMCGHRVhhAVZ7WzbEa64oLNXVw",
  "key15": "txz2W9ZCvMVeQhx7tSnaHrZpqzPC2dHyGP9UFY84fqXZQntmP9AUi75AoZfUUKnBTb3rokgVcmfBnqmtSgHAHfp",
  "key16": "5ZMsWtmtoifKSXKh5HBKDAwyCB9XNiWXkuXNpN7T8maNQ8fZkBEBPbjrXm6UQPtiqqBj3dCESKw92nfohj42dT2j",
  "key17": "33i2M5EWERkGkNLWvbWSSxh4G85ipfKBH3jyVuD45MSstW7fGX8afzLf12QrMHBTBRbC6gRkKQBE1R1npQETRKVo",
  "key18": "2MdpWxe4Up56HG5ESwU8u554krL3KHunNkGm3S4vjw19wwg5TjfP6aebYLUyPKh7Tiut6zap127abTDzXTooKXkW",
  "key19": "3515DgkRuQ1tiTbkBASpee4H6QrLGTUh1xnZgcxRb2io2wMi6UvADUANB276iS8ZR7Pdmndt7sjaBAweqNwMLfNs",
  "key20": "Pm6f3aEygqgoKUWHkPZ7mCJFGJEusfm8TAFypQZfTkE7F11s46Murc65dRAake485cUVfmaGtjnQ6J8RbvMsePd",
  "key21": "44UgRCnaZeP6SnwKAuxiMunM7yz9EndsWxRc5j2FJvwEYdjgmDBd9djNJB3mmpcv3kQKWVLf1HikKFL56yXFyxpm",
  "key22": "AHNQohnRac3fkuCSX3DR22FCqH1P4XvGmwF3sgxdDmmc2WJipn2SUBo9JpHyPCKMeJNVnB9LdMLG5n39tBgMLgW",
  "key23": "4nB2szaGUWukxRZzw4nY5tBWTbkV5bq79wiJ26kn4sisd8B6MFyiPgDR1V7cHZczkACpKgsJEUTLrsoomLMNpFwf",
  "key24": "62wKJvpbfWH1k9mtVeBXiShnrLCjPk7t3hMNpAyiL4fCFrHgas8sEi8kkasgL3mJr5sVJvbuAwa8sEeCXgUwuf18",
  "key25": "5HY3uXecKk3fkLVQsCU4bNA5BLks5oEi8btTWTJzjatSKMJC7rDw3UfnZcEJJZUKqzmT8aRbzTqtQGKrVzv7xrQV",
  "key26": "kVKgkiQHF1CxoAB7VD6QGkxtvwdazKfzgKx5GEvKujjHcbpo9PRjkjv5KS2Ss63HRnGV8kWdhLThg5aPYzdcEox",
  "key27": "5h6xGnaEHxCWMqhMHVHazdDL7R2zEqTw1Z1w9WXzpE8X7wnUHcyy47hfwWSDAPteuekEgRXXKcmg9n9LWbp5TEGM"
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
