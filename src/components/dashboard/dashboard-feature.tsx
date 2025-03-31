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
    "2yf3GUCwpxXffVbkyrZtkqcRftqr8FMox4Kjz6nXpcLn7QCr86EuzfpFLMakX8URMc57dEVV4RSjUN4nsg44fz5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrFzPg62avjGUXXCrzwC3QqdL4Uja3RmBbsVCbShWSEc388idXmFrgYCe2sgDLvSYWovLwVvjhJzpm5qzsw4ktT",
  "key1": "65TZ3wqb8a5T9os1WTJsoCQqiwR2JksXEfARR11ZtrbSQBnwN6ZE9QW8pRvJ6EBZ7efqVJGQ4WMEHTcq87Y4GQFK",
  "key2": "3mHEZynqCPtfSxwx8aykEyegMdih4GMuw615JRSQaGVnfGvXTb5K4NbiTcWbGSuQpPdmZJBtDK5EM2FBRwyuf6Eq",
  "key3": "5ikmQwuDn33S76dbZG7vDrgyPRXkmbzXYsgz5HFor3bMpCdT8cuJCcSyAjtwiyrKQ3kcSoTkATUXvWPkURQ4QpLD",
  "key4": "3ugujzvFd32SQa9hA7E9q5GuhPjx4LQHUfEb4xpkS6RkUfwAt59fcQum75ajCQ731sdvPXTpobNAc6tneGz7Pqpm",
  "key5": "2aMDonEAWCUsw3N8YPkmhqtv7WwHEHtWtxoBm42ZcFhMJcFZcYfXWJUSWSJGQkH69unQdjS5SerkLmYCKTCw15CT",
  "key6": "5PcAzX6zLNF6bMSe4GX7ko3krinbpPU34XEJ3SHt2MuTR2jDvxWSgagVmWCnJ9M7dNQ1vCLii1qDj3q1wNdSkDcQ",
  "key7": "3cvv1NU5xKQZsycz21cUbGBxZEgcyZLp3oUgAnLYgMT4dbvdUmwq3wiZtTzu4RDyzx2SHHJNX69zj7p6UvztDhyU",
  "key8": "5thm2HuAoHi6UrwC7bUgBjHDMm1Rdgx4GMBTDjb3bN6bCJcRV7u66JpzWaREa8JrHCxNHjDRV7qdD4ET6y26cTjm",
  "key9": "32wJUFGC5T21h3W39ipVUeDn5p4iDUqczqagHA33W4FEy7T4czQxUmr5Dy2hTJaGADw7oQRQJDkJWFo4WFc995RH",
  "key10": "3DTDFX5UmSP7qSMookUf4Ad2Fqrj3RtAap98Q8NVJEwzSKJFVBFL2mHmKrCksFy2vvTvh3CteCUX2ZAdU9EUZ65i",
  "key11": "3FzYGxsAkUkSbQM7HyhxkSLw44jg9TLTavebjPVoaUWoz713D6cMwwemUK1kQFzcPPwFUrzvXV7gGSHQkahkT2aF",
  "key12": "5PQaL9RPBuXRVhk3PyuhMKcDH5kj5b64PFNrhf1xJGvSUoc5GqgDktQUBzT6v5HSqnYpmkXE68LbHRGKHo7FmYqG",
  "key13": "3suHysqEH8h48sLYogyb579csWumFUmps5Pw3SDJ1n5ydLwaUD2R6c5KkmEqfZSGCRX6tyiCsDvPYygkjf8BJ4dK",
  "key14": "4YBuEayT9S3vgi8KMHccGQfMNUaCbxohNE4gjp2aBhyMBme1fBbEH1dVLHSNwbBmH2W5qKj8x9pz6C5C5c3NCqzp",
  "key15": "2wAURnddRLLip9c5fbgbaQwHsasjBTtJ9c67aquR6YNUPmB7V7q1wDi2pbtfDa259Nz3rBkWzAwaF58t8Hamzjg4",
  "key16": "5T7uYn5HBc8toJWhfykMrzUDnrmR46BChyEnxRtk4SKda38ncsVwktdYR4Cvmu61aQfzgvHYmxXjcwtDAU4JgEJW",
  "key17": "tiJT7A5vKbb7RdVTgD1UuKAhW6b53uipB5eoVbq9TKdkTqfw8D5z8VYFCQGQK2pzG8y93qGQFtUKHYx7QZm4N1u",
  "key18": "Hihfa8j4f7iwD4H8x2nLY6SQPd3pruyWhH51Z6qCv5m8fUrwmFEGBbwh3GzU5TTS19T6fudUCdrDcs4FJBxDKhw",
  "key19": "3kCv7arQCCc9Trb7ShWCuLECPdFGA5e9VG6U7kNamt1bTZS6xKk9XRQFRKuncwBJNhCtWT3eRXJohdT9SAEjnu9G",
  "key20": "4cLRXgJC9X6pCJZy2mZo2KyaFmvvbY9qj2Rcoc5xyVUqSLis5CTP4oA19PBEKcZUvVvyvBn9SnxpWjG3cLWAR2Cs",
  "key21": "2kgFAXNaZuYPGV5TB6YdwRsqcN8qieh1568vf7TZ8p2YaA4SeaA6g1vmkNCytxZsovS5PyuxNYYJkJVbfEgCXxJP",
  "key22": "2c5bCBgCzxFWDcgh791fRLRuwhNFvTFu17G62BXiYDdfUjAqG3DMEt4Ctr4JeDnTJkE4L1FNnBt9D1juUKfz4uRt",
  "key23": "5T5ziAXty4gbiGZiGJn3Ab4sxNbuugmqtgMD7wSuHcF2ekH8uza7c6qM89krCDDPJfGDWYj4NxZufsWXDLZc3YbA",
  "key24": "5sf9xBCy3gQoZaNaoB24V931QN8qSsvvyCVRvCuuLQtn6mrqFRRbMYPegh9sV7XN2R7N2VHR9QUxf121sYsj5eAC",
  "key25": "2KoavnBBPHDBsTwdRMKXYaYLB43URJREG5FWi6a6zFEQXjtQRDtKnVewVDXmWSnL3UQXhtatUXYY4nBZbbxPJ2N2",
  "key26": "5F6HTyCJrgJoKYpc5jwSRBNGXVAUqSgrXhnihyW7PVGHLjdvh6K96jwhsWsRBtnAVksnLgHChGgtM233LMKtsVko",
  "key27": "2cxW7yzumb5QLBy32c8HRL4tXX7PU1nTVAKpZoxBLt6q9H8ipbhiCm1NfGPyod61s4b2MDyYBeePfw4VmFyKTFn2",
  "key28": "2aPxJoxz6PebBJfUbRNZgZfbNyukB6ARnwcP3LP8ZUzkXQmFZKZzySf6QEXLvVrrT6HKguu7KEigeAKDJREQ6TFJ",
  "key29": "3zDxg7nvJWdAnXFyGAVCrC6VBNWGVNZEeD5rFHABnaEhT7gxrWUaZqPsZeZcTTNfCMt22jnnqGWZX9zB3QujHG7c",
  "key30": "4Z74VdhEDYQwgH7Lg9HaM8caEemanKtc5Ty2CEjJDFAUe86bt2UtaqoJBoV6k8XxLoB94y6ahGPM4SxSVhn2FvNf",
  "key31": "2qhFTaQ8XB5GLjwkjRPLouRYS2jNRN7v3T7Gyzqzs2gMKSSdWktMChAo8HPC7FdoPQGQCExDjCSXsqqRoxUWmsTG",
  "key32": "4Wo2rHPEg3SafhAtYDE7DyZCtAGuz2sf4ibqYYmEWJfw6ToKFsaFNjXDw8RqvWH1HLsAskb7J3NXhrQvusCUS1vE"
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
