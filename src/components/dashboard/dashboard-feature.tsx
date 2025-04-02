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
    "5Ry4tHvVYUjDniw258vzwFSxTnNx7qVqiNmiVnqimDRJJzJPT3LwYn3zsVhjMByG4WrtpbWe6WK9Fx1XXk4gDcX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JU8foypuU4H6QQWwwGuV6JyGj6tpeo6YgwWmDAUGC6F6nkkjiUqgoYYoPva3h6Km3bGBNH8sAJNNsDmYCSsbhRh",
  "key1": "8kisTjb8tVzPY8BbmszwcPLiDB2ckNJKWaecwh45r6k33vzUf8Wnx6VkZx4SySDdzsAj9ZHfqFx2A4oiHsCLRGQ",
  "key2": "4XCcMtn3KgVYjYDm5gsUmMAsD4moQufT6mFQeXVVp1jUXayTBMqHXJG8i99SiUN73rBGKXFLvDW9E4z7R5ayFL8T",
  "key3": "QhLs95iEW239dT9J9TAod7JqiD5roVrbP3jtRZgV8ZjkymiKcZpBdJ7kasL5qAemTdND3R2C2QxrSKJqEJAmLgP",
  "key4": "4vtCk4r4yoUv1uAscxgjc3WddnHJidfCtvaa4ef5hvU8hKGQZpUL634eWsAY3nRsizi6AELZjgAMDRuRCECoighD",
  "key5": "34LVsRTyCYCH1CWfsUEJ6rtbcsTwgodWVHpGpRp3kBMJRtUqyNoA866VKUK4grTsmxkgHMHpoxfMYbuzdrwLmmE5",
  "key6": "56YJ67DsUzhMT9ymryaBy61SkRyrZ6tYo9v4zTAKknRd5NQGiczq5jCc7jZwv9LkxS7zQBurpDWFvWG4G3pP8iCR",
  "key7": "2qwQaXwq76JdSYzzMELg5fpDhz1Wroa2HW4i9sKmdRg6iVqzktnPTo2CcKaCwN1TcjMwQBN8euFdTZ7UwGV14gNq",
  "key8": "46xbkxEZ1jZmjhdEdWVqDBLiAH7vU15ouE8jP3GxqYJAEwXjhBTFmAD3RYdYvVzuSo9h24HcQ7SENRETqUv56rR1",
  "key9": "kEuagjjHr3SaD5SBbB74TWAvNFA3XFnhuVbnWgrgCRBw7HhXoWwmyLWqEM9bjFfADArBbfkBLfNnFU2JmqMJSdA",
  "key10": "56F1Sig3waaeYbTJqTzH3LBUV7MFaNTAof1xoVQzrWGMmKxCJfY1aoL5gULVWfopbqTDHgQksNmceKZCdzeoVWse",
  "key11": "66u8ajNFYVA8ywpCT7BbxRFM7ffnc6kGFzBUdgARLzNpAcpLKUYqYvYVQj5RTcwxKQzRqtEdPmiukN996f8VKQev",
  "key12": "2LbEAvB97XsGtTqh5eQGFi3ZV8njaeYB5RF1yVtmxrugSru4g3sCG2WKcUeh7XAKLqDwVU7rbjvRT4B9SiDXtF4T",
  "key13": "5UUiJ7YUELs616kEDRbH71zsqrY8YKBUbWth5rjAp9ocXWJjbUHUH7Jif8RQVfxCdXWC7uM2WKWtgF54Dqgu5fJU",
  "key14": "4735YdBNmBCYwqF8qr1Ph3pfT1kwR1Nj5yDLtSrwQqGZMY3Cj3s7FP7CdqkXQj4yQ97G4NPFF4fjnAB1Znd7f9w",
  "key15": "4iJ23K9Xbk5Sgb6bTsJSh9GbCfx7QZnwfNiNdgJ26LT9J5ZbrxZwssv9HR8kWq9Y1njUSMuS9WUo5dpMTc2qmwzo",
  "key16": "Md6LY6aETJU7mFeCVs34RJdtFkdZFY6R45bD1DYG8vYZdWdxxvxSm2xRwCy4iDmtoEBfvnEtBJphFLVU7Q38pV7",
  "key17": "4cWtZEmVYyqTSpoz9gLmGkLJA6KmFB1cQ7Ag8VrZz2N25mzGX6nJukbWQRC7cXX4DfVmCqx7VVHkdnCUCKFrPM7y",
  "key18": "3ACmU6MC4DCGUuE7brT7AAnBKTrR5P6EaSegnKaGoPmWyP6asNQJQBoPgBajZFVWcdRqYTtz8SJCePgZtzQx5w3D",
  "key19": "4H3vjSRfkxVkLcU9qktQm8Ga6WTeRs7RibHDQ4ZG6UiLr1nwjAo3Xjq1uAW5kgCz5yvjqBkdQR7XypBRxEU4oUkK",
  "key20": "3i35hDgma71yCx5P62dFWAh4QwbSDQUAkLJsB3GhKCFpWGrAyPPewENCZZcuTTLFJCFJoy3RGWHjNukD32bdFYNS",
  "key21": "2WHCfN9axnJew3Hqd6T3W4JYcsH28JYRwpPz6zbg77PHFMxBseG9p45woyNc1pba4AzJjtAKRM4ydXt8zwsBGy9q",
  "key22": "4BSLQTeavhJqMddsWoXFk2hWTra59q4dgvnNVky8XMp7SuQtdMHcD9EqRCoSSJcF7NeA5QC3BBLS1ohdCD1Nb3Gz",
  "key23": "4taHZpAx54ivyYx6C3YtG2nZ7MF8EWDchKdkKqeXnrSMH7mWUnaKxMgNB8tN5ERphL2y7RfXZJmocxAWGCkSoyso",
  "key24": "racZWdnStmDGZWpmLSCy6mYW6HNKPSVeE5CKr5UZ1sYqxsMb5YQC6AX2h33QUwUxQZV2a4zmUYRzw1VXXbVcBx5",
  "key25": "gd9GudsHB53xeJJ8DXncHqnrgeFFRn9uaijC4CKfZmsi4ivd3xY9NwdYsXGwrVRrpNz67gWgWMctpf6zAndVkb5"
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
