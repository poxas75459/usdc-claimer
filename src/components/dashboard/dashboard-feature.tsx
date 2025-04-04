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
    "5ZhsC8kAR2TB3tp3zezNzbsVExxh9q5Ao1m6Y65gqizj7fQGcpvkra345xJxpGC3FwtbVXn1JcKMKzT2Yns2EHqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riCRi139vK3GNLib7TvCGztuKW1eS5XWcKL7f51dGKUfg78oFxEgZ2hizkmUvtym1a7i3ai6jBUEPquu98rsG6P",
  "key1": "2G79G35EopzgNBsBn8XttTXiziAF2o9taZgEv3xtXZ3sNhcvuxsVk6yqM9hd4PQ55vrnhEvpG7eiK3rtAWZjU9TP",
  "key2": "dvfG98f8hWSUxZ2C2yjJv9s4sRaFJKhBusV4g87cn7my5pFLCSSnTVmk9c8eadHEgA2NtUgSWzY5RJuk9r2Ltob",
  "key3": "5VKpYCmfSjFau9eGZrU1859o3nw1QiABxYGQx4WsMPA9SwDDBqZC3FePkrjYyeGy4JnjBe5wuXkVRGvdn2LAH2oT",
  "key4": "5aNRQe6S3wP8wD9q9PLp2ZLg765549V5811WnKRKi4HSH1r6qNYLKeQ77nwVZAgaU9njdGMSDkRLxMfkEDoGN5WD",
  "key5": "5vdDV4JCnBxyG2StraHuwykob9dnkZHRv1KqqTNtHiNcX7gXQNJcPe2emTTnZyGkPMj1i6kzitr7uwmzkTFM6FtJ",
  "key6": "5GRbWPsgHsgvGq6ChYpWNnxGpFWZnzxTsMNKhVod5B4GgwTLFGroXvS1teZN4VKd6o7zB4hfTYj1BWdxg4eiKnNP",
  "key7": "3KLpFvGY3YwZh8Wp7zcCmJeQBeBtae4D83ca6fPPX5v227Puzbcb5TdbuJ1XEfSWE3E2ekQCBnTTSo2csoqukUhX",
  "key8": "oLei7EotUFSrpepZ161axpFxjWU44vbGCLrPJ5CB4gAurjcnKxbbgrc7aBm8LvBLfzpzsfYSzCL6bQTCcafFLcT",
  "key9": "zV1t2Qx6cgVhWRTkZCQ3hATuKWdJx43kPAvYeJ1fCM6CxAYe91mTHpUBjBnaJTdPJ2fUdFuxwVL75nxNb77xtKP",
  "key10": "2CuBm82rCYqKjhHwW1dNzDq4QPWtnHSHqXyFCoF3dQ6msnsM7L1SpLWb87cWaxcaeyb2a7XLDwxgQAeqcJUrzxHc",
  "key11": "4LAnD1YWApk6i2xYA7cwjtzWewhGQdbGGqFZ9mooonrZDdyBh5dCvtDGSUDYMy5k87f3gSv2CFrh23b5mWWyWtNH",
  "key12": "5W8onz2ELqWD9cHusaJAceNGfzvzwJ3y8KM4xwDCt3eKu887MfNxPrZ46SM8PWA3meybKRRk3c8JopJVrvLMydvy",
  "key13": "3j7ZnUGTkhC6gyg5UwAoAe5Y2bFzqJVtNDZBke3fJosb19eSkk9Z4BQoPA4WW9WcjmeKemsuD739M2k4mmUyYJEi",
  "key14": "5iJYWgkLsEcBFxfyByFg9rtud6Dp72BipqsK8oHSe49NaJZwyCX95cu7r2kQPghmWYktx9JrBuRDi2WEgaVgAoBp",
  "key15": "QPGEMeT1fsht8YM2oBXLHxCdMxREAJjDKuksjgBiBGs71GDjfFh8DjhpAoPjEVuC38jgiTkhmZCKgxgnnD8AFvs",
  "key16": "BL1HkdJy1A3VtSyraUXQyp8hcmgDXDctRd7TQjvxHsDSVgRJhFhAiNPpLmaEUGpUjoUTG6fRsHEhkeykiMnoEUE",
  "key17": "7kFhKg6ovMa5ZnxrCdzFZ32V8YjZfu6mJCdTBo5JCHdyQr3UHXDthTBPx19UmvRNn8n7dtntvt47cMArMAYnUQo",
  "key18": "rNuH8i1tRXmKdmJqiYkcmSdSwZYBWsVhk4CVNy33Vi2epr1BaeYyxMe56Gfkxce7feStBSKPhGizEi7Gf9Zqv6S",
  "key19": "2NnzuQnv1qKG3rbPeTX7KjKQb7uZbSUCGgTrZfQJoy24ktQPUCZQoxu9ZX6NLzDiJBtRMj3jZmKQ9brtEb5W8Zun",
  "key20": "5KzNAtERVq1NKtpPdYPFeSh54YNprE1qS64BbL5Q9V5yefF6uh9HmJNwA7CQ1aUxiCLrgV7FS63J4aVW31C39KQV",
  "key21": "6Nt9hmKMThWKXu9J7T4z5XMP7fTZq9eFun9rJMRhNevXZyMcejSKTuw7Ua4bitBYFR3vxyhttU59NT7DaaZ7Qw4",
  "key22": "2EMqqFTcvCz6SusVisUJDo77LPYUvxUznqqgvLofS4geo8PVPqJJwNr4e6LSeFXRKMDhmjWqwkyXgZWRR8PpUa35",
  "key23": "5CWPUgmTPPBvwYLhb1Qiw1k8sQT6XKbCkNWnE9BwoLLp3JVzptH6Nj6tH7Zf3yFUcUpfKubQmphEG6jB1yTBVmSP",
  "key24": "4hCsytYKB2n42u1abEroaJnuKsZcPDu3HGM82Vn717kHmY7uT1jR7X8vfvruF7op6gU492b7cEaXJq3Dp5dXg4pV",
  "key25": "tiTVQv8M7xBk1DcuFNhyeAHLLYR4LSQD73SgHqeewAZiCmhNuxyUiaK7rvQhU3x4kwnMzkYtVrJ9tCqM47Ncj8y",
  "key26": "4ZkZ2TtHURYzTBX4bFiUc5SnyDhK9KVrUA6drPixHEwSwFA9RtTPWQ36BpsC2HWM4WKXNbbDMaSZx9D1mQzm8KdN",
  "key27": "2G9WyE6MHtc19MDqzvWgnbDsnAgmYcdUa5tdTAk7dPTf6JUDafFwMRRJ6QmtpZbRYksN3ADP3dMAhXKUwyLrKc1Q"
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
