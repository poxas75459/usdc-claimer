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
    "3dTwtkfrUKp5YFr97gzwPGu62Ysmyw9FAdHgp7EpLMc67SujUNe6cUWwWJ4VWeV8WobcXC6M9FN1hhgjNkm5pYnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zqBvcXNSa4zjqP4BCmj2R57f9GmyB5CfmuA5aCKHrzc6EoJcnr8wd5iXHs3ifWAJxwa4FYkDsS9fv8e59mUX8u4",
  "key1": "4do5CCtVHSEdz5FycpN4U9dSToAoNMiXhCpQVEkHVABRykovcUpk4JMnePrthP1tJqd961aMGcBjpDSmT9SBPZ9r",
  "key2": "5av4N16NKLEB3CefqyoaRCpZ5TMxDrZ7gdVFGnVxcUxqdZ1tgZJRK7Q6QMyvRoq1tifXery9zPqxNhLzp8sd4vTL",
  "key3": "4u57EUHW9vXa9SpbycrDRktCPcyBfWzpLcN7qMmwXs1G6nF3Lzcwjc5CuNDAbuyNbfVR42QYyncpTx2yRXiMqWRC",
  "key4": "5g4JmAowkEHG9vhub4giUo7Q2vw2hRNX9bTbtKRGL3hzcoDyS3i2tUi8Zg18W8qyrtALRZ8Eu7tFgxEW1WU38h9v",
  "key5": "4neEAR4BtCAhnTHjBfbyyPawgu7e4fNd8cnrLhLBZoSgbBwnyAmKqGVmaSYvcpThNjjJJy5AVsJ7Q4wg6MGNX9qy",
  "key6": "2JUwyMSfh6orQ9tL6YiQQ5GcxM9mNDeAn6owNq36K9j2M2UKQCJi3Z4TSfNi2F4Dp57hjbEHkhU83dScXwVGgk9r",
  "key7": "2Z89jEfySAVdtnZQATKHbAGSpJSKVcoekc3nzGor8cN1dJgFoKYGxoBsWLfmSaH4KAjV4eLr619tR2aQ9ZZEFP9b",
  "key8": "3mLU3CYiXRQtpVZcqkuYLLQXXrGU2KcEsBn1f134evbferSQAtfuei11XvxQCakYAhRpgLt67MHrPseZoamZFueJ",
  "key9": "4oEHGJZgo2Cc7dUnrnyCbHWuqoPBLJX1X174NAjR5tUMVHdrXoSKDdVap9VX3jDBU1QB37MTrCT6jZzTQG5ns7RW",
  "key10": "iXuKzkpeY7x9Es48iuqQQfCMwzfLMGsiL2g38oAGWRmoEiniVwCxqv8snVWUraufWJqMg95ENeFHDzV2oqmeAPi",
  "key11": "3FYgxQd4EUbfBkzXnwaVD82CVHP5UxtioqPy86q91miqBWVttF2chUHtKiTd1WNVxvQd2WFu7zoVoUWZN4PgacqC",
  "key12": "5TtLUxEPh9sLvPwsa7tYRJQTNzY2qmgnSAN33ykFJuTK41iVhxpDkULvx6tV8SjZkjznEFpwdRCchYHpxLJMndYj",
  "key13": "2DYuLbEa7sv38s3FXxdeSwy4AdvuCgrfBcRNZqQtAn2J8FRaVwPKN6XVLrS342A8HfZMwR868ZiVAThicK2CiEj5",
  "key14": "4BcVygUPE2NHC8z99BJu76Ykmfz79mHcxLgT3BtX96MdmULsbCCiS4wWNoyij8mTczyg6wGZe4iAvyGGqrZVfevL",
  "key15": "4XnHAjruT5ygELD4zbd6VbYttdgQ6cqXN2HRoKduzd1WueCvKVFpsKLhsxGkgfha8LtSnaaepfvxYTSkzVVzb8s1",
  "key16": "5HiXawsD5eiRGj569NDhirDU8HmRs26Rhwd5kd14XYTYL1LM4c3doXoWHyTNPqDLp5YLpCAMtNubkF7ib9mFt1V2",
  "key17": "tMF4svQBbZdEZnPzGBX8GbguQi79wobgHEHZ5WGiDdCGh7WLJWQKBMmHWdScA3QMqxjC5ZWRK81np2QshEe4Hoh",
  "key18": "2zyZfwfFauDEjTUTNhAiHdeT8stFqtfrd2bi9PjAebxsRmPW9vDS44GFvLbCwQarALSZcrjjsSraDJpZCKH3daQP",
  "key19": "55dfa4ZtC53QUcPWuh6KBfTMpF15VgdnoWUb8NHghFMhf6ZYxetUzKUiudjStXqY3RqnJWt2p7y6hhdRGFjcXj1i",
  "key20": "2LEgCNweu1s9r31me1iX1kTHqx442kucErphrYF6sEcKgfEHnhWWjpwDL8YhuMFd7bMxuXbs4jc35t4FGATNroG4",
  "key21": "jFJ8vgmne6bKM2sdSTogE6wydU3Hk2psrBtjUzgs3iApf8yF6ycnuYbvZo2SAa5CXWwNgLN7JYu2WotJyXMguVC",
  "key22": "32sE29PGtormcVrTia9tY4V9Tg2nxLiWpQU6hT1pBkUhVUjkX9Ss9QG6Y1bZJxeDBVPaZtYTJLU6q62ipA3ZfEUp",
  "key23": "YuxwB8UeV7HFZz1HyFMyL9GYCY4MFu2ShjMpujKvL3WUCQTdkkjAWUvQ34KNWqoAPE5JZpEoro6NUwQjJb5DDfd",
  "key24": "4wQmQCStHpE6jLaSH6rYqXVcum7tKknDQwME3UAFo2rVtzmjfxptXT2bttcXr4NHRvBGGSAcwNSFX56rPLTpfX5L",
  "key25": "2ZtnHiuaMf9k5Qw4G4NkrvicZ2fZiyyCU561uRd1nDt6p2EXiVDs5SHgsvhuqw8A1Hx6e5r38KYGwuynTR8ZKXKY",
  "key26": "3C1a8zunPNuNUyBfXr5AdaeYpjj4JG14k1rQYcvhVVPmCZDtgvKdTAd7vKjiBXvYwMoiyEpvuiioLbwhwQXRaHQM",
  "key27": "2aTqFo2AkLhddX2EHA2HQgXHCDiTKCRoSZ71MDnKpSuBeK64EbsZWo78cdhBhqkfjHccFKQp5XsYFtB1ZhU8L37b",
  "key28": "4TTJuYo3DYRiyn3HfqreyiBPE1mYhisTY1kjYyPLwq19UHoipebNM366Bf51j5d4qaYSuYKuNZHy3YkeYtbgKPo4",
  "key29": "4kGsP7kbG9TmwPhJy4faVkQGS6yE47xF2CADHm4DuQHd4gkzor2crTG2qG19ZBMnAYDghcgMTrSjjMkR4VCGgkuY",
  "key30": "4njgk4QB9dwqKLQNRA2yWr1e492jSMEDAjYVjBLYM4tAur4RNttNtNjUemF2rk6KAucytTtsnQFR3WMXoS26FsyR",
  "key31": "5vB6SgUPnWWgKCBuvC8n9VUFiowsjj6m89aJdS6ffhiE9a27FQtbyPTrybMqEPHmeYaAnrCwKpjNPfbpjeScq3gP",
  "key32": "3zDcra2pYjCMW3YbsYs6obKXsH6iabvBSFEDxuL22Ln3RuhFsXb2WW4uFbhubHtMU3cocUu2xVvaFL3rX2D4E9Xb"
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
