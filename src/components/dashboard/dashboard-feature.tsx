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
    "2vBMrp14VhfSEFKd95cgaAC7pnZ9gM7NWYmCoJ5k4XnZUkpmk8a59Kzne9pkaLsCwaEQ831S5Pftm65i3fPeQYwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAkf8fhmHjmkHCwZy6aqgHJnVVKZn4Wzjoe9BfCwJESeb4zLy7NBYbezUtUV172HMakDcB5AHyy8Aie5jREtfwP",
  "key1": "q9kkFmBWEhrYQ2Kb2cZqGQXpJAoNgQkqHD44KYJ8ap4yXsk4nA2tWQXcR7jydBBpCfF6Haes7S8zaggnEJBTW8Z",
  "key2": "4Hmh4vEywyGsZdyUBqmKZMtqFpCW1MauBwH8bo4Ly1qZ58kS4mCMG6225Zm59fpc3SwmzAqe5uswVkrYWD8v1pfN",
  "key3": "3ZgGGANQK8tkooofKKEA2kBjxMhVdf6hziX8WC8L6bAivEGHB7QsGHQsX8xw2fdm3DnWWsJgSwsXFJkDhveebTfJ",
  "key4": "BczdQ9b78jJBpKUFN1CR4TMs5kXfa5P9j9xLSsudnyGYkyAg8Ga1h4TC6YMEPngkxMLmTVdkKE8buEs9XkPB4AC",
  "key5": "2RU16hVXjyjrFWccBPpCxR8Gp4oPRPX9qcvxSHAMHrtrbJFMYfdAx9ZCtAM6FrpR8Yvu8psiduEXjjohmth7szDc",
  "key6": "3vaKdUfR5GasW3CKwajM3qh82erCngrN1SzELPEygaNMbgT3M4Fem6qENka6ioLaARpqoR2LpmGqkBrcReWxjfLz",
  "key7": "2qh8PX3fqUTuWccELeUayE1gojL9AJPL5XLvihBGRzvmYvqmt2dF9jFZiUWJXJQqNhLzAz8FBvLSDGotMtazVmc5",
  "key8": "54WQdj56cPyQd9EwLpTsAfVcTm4QUau18FUALVqEDNr3LrGLjC6aXhSYyZzVjHnbEnvmQxEXyj4s4drXwQWR92KZ",
  "key9": "TznsD1zgU8izW9gBuTNxD53qEWxhsN9cVXNkmdNsotScFKCWG3Y7Rs9hJ7bt5LYRB71HFFPRaprHGwTxPofKMkd",
  "key10": "2y1zAZzBGVwXXg3udSSr7UhxxYoje83nE3PDooVDvbh7AEkioFQLAMSSNSY1AhkLSrEJrCubH3XcVw5cgAsYNQyG",
  "key11": "2JL8QLG6K28GZUVwhgiK7c6gdy3gap53eKKYjC3DRqJYJHx7B3KRheuMSnsjWpcYgUxarg7MnagwjSTbXZWj2Kt4",
  "key12": "43xbqHoyxoQMcev13RBV5U6erUQaxkMvjJyxUv8crVnMCTCyn1c3SuRsFifC1t8N4fHooq7PodCJ8PMdCcHdQYwP",
  "key13": "4EfzL5pX9d4pr2ULEfD2hubk2eXxx6QCn1ASBGBoi35AtcrgaQmyj1RejCNsrBMhhstnjrCRZnEty6xGfc4de3f3",
  "key14": "5yS7ppZCoUdupBhUL26M66dk6DGYREX75bV1dDwFCW55L1sdoBdWJWpUjivnTt9YdhyYrzMQ7EzWZoizniJqumYG",
  "key15": "3jDMYJqXZyG5fC68xgzZqju4NyUGnYsPdq48TG56rZLwJYfFu9XwsQZ6GNLyQTwvAhbwtxE3Kb1vXWMMXwGgn93D",
  "key16": "2twYtu9aesPw9gugryTAGU4uDNmbwSSN9d4yZfPJjkr3vAJhPUTRkFn6GLLwG8FtZPsjmUz2hrrA7GXNoTZ9dwLX",
  "key17": "mQtaEkSJpbZDPWJ4d3pZpPgmdBHUx8p6KgKm2dchB4bRrq7ythgV4CttFKixV5QsCYo76vmfe9YhhXp4SJW2MPH",
  "key18": "27gkgkos4RnMWoAGsMjW51CgEXwo2f6P3ezRESmw34rCpAHKE5hTqRURSh8NY5EZBMZ6x3pRX4ppovfCrsYPwnTe",
  "key19": "2xX7Xtv8HreihFkchBMbbZ4mBaxN6viYGHr5kMvawgGt5rexpMcsAvixFmP6gTqGjCeh2oRj2p7WBDw7eRqsH22",
  "key20": "4njnb23CHXA6955naT66WPCVs1wcrg3qzYxShjPNwrv2uD4qwdPocFA2jJe2tNgDoiox4gm3BwbW2DZZyPs5iygE",
  "key21": "5Szmop4BSZ8nHJjFpjBSF68YBeoLD6FA5NYvVMDCpuYkxWmfWMUtMTXvgeoKuCT5qTaC1m5iq5iTNNzFZ2wWG9Kj",
  "key22": "jWGhavLB5PfXHEGUfG2vyrvv19E57pXzEjTWZ7cLuqiUSjp61YCwr18CFSWCmGsGisubyyCAUPfa1WWKjV3mgyf",
  "key23": "5seV211rt89mUCNvqBpixG46AYaj7xQkPy2KVvoAidKxovfcJnMfQHitk635kkdu5a6NJNoTG8iw86ifnMKgFhZs",
  "key24": "8aHwtXPHSfcMT2qmv89bb2qjQtVHCG4wBY5qdnJ46YB7amoqHJx4GpjjUapX3ULGLZNjWQYBHanKcQUp6SanB4X",
  "key25": "3etsBY2i5nDxsGvp4Vw1CQb4sJFrrZuPr3szkKR5W3dxufNwHQajCAcNYMB79Ps5WZuz9YhgwkdqGGiPgCtuHKb5",
  "key26": "5AfWKYYrdJqRqJjibRUsknBTepG5TX2PzDEPhjkxuQQXEqZkm9JjjTBQ2NdQ1A4r721SrUgnsciiK2cVyXEHNn9U",
  "key27": "28DK8PFsCVRDNmWgvnwF2zwXX3pHwssMi8Ni4vu5hwsH2Yv5cFDGfiapT1cJyND2mSARQdA9uevPQJzTeNB5xYNC",
  "key28": "4sJJFJqJb4TTPDVBhqKmmRLdH5CDrLTSFUvbvVUNmNRZnXo7o1MVgpkfx2S9erSjoqe4RES7Eekku3kvCGFNdShq",
  "key29": "eEufJY36SS9vtxeq7bqDVopb9GDiidN6t5UgaCTmMAiK7AZ9bWYv32eSdYXtenK56jyiKyFa79CAXCeMU6nuV7V",
  "key30": "2xFCPUHXvxLWGn3ZRtCWMWGYnuiqV3LYMPcBmc3EXKRAXxjc1pDDCgYrnagvFh8XzMzLgik2ByPakv5qjcxddNXV"
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
