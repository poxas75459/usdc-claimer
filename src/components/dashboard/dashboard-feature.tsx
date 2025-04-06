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
    "4pWtYcLuVyVpt6EqE8arSKrgiFkQ3gx8Ktr1ACAks53pJc9ULVAS52PB2pKoPAxKFcyhfGPETRc6D7owrjZwJpSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9TdN7gNa7qXxT4isRRkxZTW6Dy997qRpbYBYUgnSCerQbpHuUcCc26Kg2pVTVbGT1U66etqCpGhZJ1aAB9Y69s",
  "key1": "i8vvs3e9mhVsgfQ8uL1XMetfbf37VHv2463hMGj8m3idaSbEMJmMBQ4HHoftHPApuAL9ZxzvgstaagDBRTG1UcL",
  "key2": "5GbZR4GfW7qkMEUdxRjTAdfahGAFNeSNjKY2i9zzHe9ez2tqohG5Xf3hD6DLZ3bh9EPsjovJHwgqEESRy3XeiLEm",
  "key3": "5Dw9nnB9Y9QdhMhi7sKyGPgC2pAhMAuAj6umhK7rzqzL1w7kqfhZjEi8yUFQeKRp7vmVb3MAjKfALTxNAujdJsq9",
  "key4": "3CKXvFHDcekPv7MKKUwVr6Ydj34yjPZv2tRw54yXCpsynExPdRJunGLRonrh9MPKFoeyT9RTjUzCj6DUQdPaDnwS",
  "key5": "HNoUAz2QXFvLQqfTiW9xZMioiwhchvxFkFBHJHNWh2GTZdzxDGAzNAGvakLbAz6MEADDtBsoBAuRnXSs37q8bYg",
  "key6": "5LgLhpESdmuKyFEECaNwshCLtCJUF3XAQKtL9RARgwu7KaV4D2hnFLSuQJefxfbF2oHvSAKmCYyh6aJG8PbozEqL",
  "key7": "3Zz8f1XFMyRwMxUegm5zsRknvpPxrJRaLd8kbRF1K4PErWprPeYHH3CiEBKVryZkAUkv1hMppzmHDHekQbw8Zd6N",
  "key8": "5s5YUZwakS8Qpu9xtiM1wo5RrMHbXU5hpjFWz9TDrSCL15FEkyX3spqpwn7w6Viuhu1yGA5jWgfqupqhL3vh9hy4",
  "key9": "5QSJbVVe2C36y8gpBfwszrdxSUwzpLB21aQyV8SR2HysVHZEmt8FJfX9duM8iDdo2ALhLzUxekYsKiKwrPQcGTUQ",
  "key10": "6EZP7f7ojhM9NZheBGtkkApa7WLqb6c2PSwC6jxmHzLpzb8foBkS8GKpS39x57grw62ZVFUfj6T2tGP8ioaVgew",
  "key11": "HxGtN9FVd1YRbTTARZq1ZiM9urJPkcR1ZCzahaUetccyHmdnJWCf38XopnkYSuDJXuKsY6bxBLbep4KFjBk5Ctd",
  "key12": "269Em8DC97cUboiQqrCdgLBhRsURPywh9HAGwNM9Nfg73c7G6JXqSw5iQ6pP4woit1opR4KV7vVpWYt4L1WW5r3Q",
  "key13": "3SWwrggfhdYzkMoSALeFUGQ5WmJaDKdTohk4RGAuqq4EJ14D6xY4toRbXdQQjkZb71DSX7ipjCDz5iuj5jQXYvj6",
  "key14": "2w8TuPrVhuFTpGSdtLvFqmypgtSqSDCcRbcA1mp4zD8mDqLpp6o9jL5fSN7UWgdbf9HdUGg99tqx5HNmfBuQyggi",
  "key15": "3PWjPNkPkRi3UwqCRv3qgksmY2MaYqoVFtktnWJzphnJHMyUtKqFvoGSvr5exfubyNa6LBZ4FEnwWD4yBAeS71wA",
  "key16": "3aHWErtTC6HGo69qdnctPPT7MEZrZLME5YvjX4Am9mvYAd3r5tNmbkvGjtBS4RChjhSXzwBinBd4i1pWuZNxPTNf",
  "key17": "51UzfoS45YoGqiq35TkYmRqVk2THtUKrEa9HrV3XdVquVJBHujxigWG3vtF23Ne4YR9juQXWaKgudZAr3tj4sswk",
  "key18": "ykmVrejRYP9k8wvonGS67zGGzomPuo31n6dUwihSwkvE26FWBpR3rQGWUZK4g8Qwe7goUgbyKgAr6uK1XzpRfqW",
  "key19": "5jub9B7pkHGT5nYpTz3GPA2terzJwVZU9zaRgcfE7m9ymF9j5La6fJ5XDs2TtEBSbug3ipJg6JNJGtfLhmXVZ53u",
  "key20": "2HZM7hSEGNvTeNeWMvTsvx2kJ59fKhntwQ7XbkFpd2K5rc7SCJgdmPRXT7Jg88jtQYNGZoSqpxnShsi4Fg9UmY1g",
  "key21": "54sgfFobxSZmvZDWR8dN1ZBL8fFBLSxRxpGDMBd29an5FZJicMuLFyHAKRrHNG7FtExb3GzRHTdDZpNw1mqiTkkL",
  "key22": "3j9S2bKpWkCh65y7R6nAw8ao8KKa2uFxfprsMZx2B9YA3kYKNWm4hgSv84FWPfcjT3bBCW6ZhzpupzuvF4zUk3tA",
  "key23": "2iuDyiMKC4Sec7zw8U9ht8JSPkqkUXa5RnvQexVhYsG8UqBLag575sLQuuVPydistiGJcCiDD4uoXhJsV9g99J3h",
  "key24": "4Q9fUHESDyAqXKiiKzxqfiy9NY9Ct5FcP2xR9X3uMjjWf5DK9DQhT1BaGKkCamWF1YqsPWwSk8r5emVPWxeMTgPX",
  "key25": "UwEcY3AUdW1Mp2SPEoN5LPsZSixfirR5avb1AfyUFpynUbshcmYiCW6gDQXEGub6H9qpxUK1n1cSHeAfMaeZx5d",
  "key26": "3bcjcgDLxB9ELEd47r3hovuJcNZxVorq3HHgMXTjaTnDwnkZo9Som5BxnL3EMrqaFsUxwUDkTWxLw1hnhNfBf5SL"
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
