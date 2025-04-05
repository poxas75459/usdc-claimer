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
    "Zm6eAUY8HFBkTDxykJTNeL1hmVeomS7bwAEBKZKEQyVnbXNH2HStREHs4AtaPJyLdP8Zr2XquUj1F5zG1nWMh8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5CvbdHvAbPYiWTFHvoWvf2T3NNbDq91bPa1smddxmDc7yFHT3g3isD7dZiPLWV3rSxCxBspzRc3Vo4Gfo6AFCW",
  "key1": "x2jdQSXo1Md7U52taLucVCjYvNU2fEcA9xTuMXqbm3QDxNWrgbEnDfGxyQPSizmpF3V6UUfUuCYH3hunFDHqbXf",
  "key2": "3ti4ZtqtXPFipPXadhWPffvipLpkTrchfEEjJwY4F7WpEAZEE3cn41bJ5zWYE5DMjBnrbhrg5XHqSqZ3VCfHKdt",
  "key3": "2vghyk6HVxLfcKj1MfDi7Zk64GYScdDF6VyfZSZhidDJ7jTKQdURUjw7FWYxcrYjnGEMYJHBmETpb5LKWYns3jFF",
  "key4": "67W4BcankdB9Aw4TUCnEpuCMtLdYD4KhbNvQ7y65pbRiQZCixULeJgS7R72DZo5e1GCSZ8uTTcyxoKgzfJphEnF6",
  "key5": "67joHMMfY6MGjWCvi5CFbfeQvh3rcufrUMeyumzN3ZYizmUy93iYZD7kxYRFDiYc8PYbL5ouYAwmEdvyy2JBBdfX",
  "key6": "5faH8wXULHqKa3eG2yPmvJ3tUg6NHTHdtsGCTntB5FrU2eE9C7LWt7rdZ1oHVtjnqBkk5jggEdXgatnCmoNkDRd6",
  "key7": "gFCiAEizGqusnL6SWVTHZQZQJ8oNcvkgWkdNU2qy47GNdhFTQP5EScpXVeQ8zQxVdqGsu9szRqHfUqzKJWiRBbX",
  "key8": "43DAjhFvSQjEXFN6apuX2fHr3Dhd5wbUqAWcwhVj1JRTPZHmnJUn1XTWor5mwr4bjwin2kd3j5rKngwoFmzdA1KX",
  "key9": "4jgZyKfBF5zsnyPhHiCLV6j5to7G7Go4VtsmvVCXBhTNZYci7tuNbkRTFUQyUSAVZ1X4uoG4zH5RAxibKNuissdm",
  "key10": "59uvqePCaFQehB5Fzj1FMoANMxLrT2WXPSoKpA7D2NCP6kUGQZA61UgU6mELQX1aFPhgwk79P3Ktzd6rdtvqUBUd",
  "key11": "4bzsRiVZ2bjaPjtnK19T4Jm3tYS5MDTZqra7Fcrzv5WvspW6sWeBLgKCs7WYNgrZYcbbxjYNk6P8gdeK1Eoqaqtd",
  "key12": "2pfJwpP6K7vgAdnH2fQ9eKqeTsLwjBDmjEu6xKddW2HQfX4i474RXiWqmU4zwGPeZBx4Lj2wR3dKMU8DkeG32Nef",
  "key13": "2NCXja2ojH6hcU72VatMzqRons5wpDCeVvDZkPDMJDkABRJzyXKni7bxs5pCMEpS51okWddsHiHbzCit9Fc9R8A2",
  "key14": "4uJkKR3GQCBrdbbyevcmyCFg2KnNuFrwvk5CjwT6fj4Xdu1UfMAD7K4VZgNz8vfdmq8MnTke1dna7BDzqYsH8zSq",
  "key15": "3usPxrXTwTQFupoANGhxTAeH1S2BK4trAtk31fHcMYCzA7nePwzwkp8MMiCVPbUtB7CXSCSEYDKLGBVyNwgvZMyk",
  "key16": "34T7ezmfAxrWYq3focQsBY2oHP7i9WRz5pB2K5pYHK8VKUtZYFARKZyYCvSjobuyLdyMSv31yxWv339S8oVwhT15",
  "key17": "vc1ZWcgoFzL2NK5Z2wjfScL3izuJsZmvX9ah4xmM5HBwyKkfCesMbHhikcPwVay2LPMPUAqwQCZ2EWEuDTup1ko",
  "key18": "2xmGWWcTf9aYS6fLKVMte8r9dQtGNJqWQ2RYJyp1k1xJXNbR5AVvYYGedpqbAcWfGq7KZkxtrY2KxMWYHv1zeudt",
  "key19": "4ex5oaCD5dpJVbfojXV4KWT8bTczuzL2kT4GkvG51TSDgeh9kJc3SXxbTavxREPA6tt648AYzztbN9UZqhS5FipM",
  "key20": "4hGHeCFeHBLfEV2i7nHY7ckFaadmjGYuCvxpMtr1LNopsg7yYwUbwXngwS1D2AnAyApTULDLorWmt88HRK7VY15h",
  "key21": "5okrvGBg6M5AAGrHssLoqCbkq2cUsRGKe53wFAdQWyYBMhk1swBWi9Vbwx9WT6ebaug8ERQniYnmDh1DifyVtyNW",
  "key22": "4tCpGkpwFE8v5ELWAvZSrzNpLqrub4EpXaT96Qhzb5rLHKmiASHqBQcparbkrTj2NN56ueiNG6XARUEc6Dd1NEGp",
  "key23": "ngcg35K7BaVVT5jr8p2BdfW36n4KxvoGPCvSuvxPHsVLeN7exqSUEKxTE8k418Ur6PY6kKNRSEuwdVgSyAdLBcc",
  "key24": "4BDyksnkH7hEpy64BfpTyMqRaWcbiu6sy27JxHMxidn484H64BEtDeTkN2q4NFUGc1wwm5pZBRJMcQjRN3XXCozV",
  "key25": "3DavyGgZi4BFKke6gAeSyS7yUZ7LgoEK6DwkdJ2n8DPfkwmCVd86y8ywgzPwF5cmrDqJiCbMF3MFVxmRNfeCoT9y"
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
