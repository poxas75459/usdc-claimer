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
    "2bjmV3zqgCNdXHrCkAmNpoMzcsWBx2dTXgmBEpd5agqgbAopvaF49THbX2BJpxdCFTbFmRHy6JfHHsE6X9vbexK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qzq5Xtw8iG9aAMW4zRcNnYeWNC9cWcsCeKoHxzfDaV7rzZDmtRAZgT1sqsyUCes4Fy3UPM55Ahbuh6FFkTot3h5",
  "key1": "48nuQvnTgYy9H89azJrAH1wYugw4yVJTTzBxB4Dq7uterHYw9i7u8KfotYLMdMZ7dFi1ht9Xg6FMHu5v7p7extcH",
  "key2": "3cARMb5SRnAPHsPYEy5b4Rzq6xsHtovjHRctx73fEcNvnRwuXQpx7ffnQQPkhcEAgH9diLxnCcMvohp13UhTCPrt",
  "key3": "DiHZenTT8qPbAJiBcudYfBXvUzrM83oVdMkwqquMyvVGxRDaveJJGWfWuqnfZRZ4qBeRgohCUNXDjfAweupraji",
  "key4": "yFqNRYkmDR6z7MFoq3wi4LiaSSyTp5jXdtkAZ7e2C2HWVpfURf4E4CFmULj8ZBkPF9a7zvN8qZKfBqkbMayeygw",
  "key5": "5benqFupdZ9y8PVdWQTfeNvweqnVBGQNe91vAamWN9jrjoyBE1QoqHGcMnoJAXULvBkHaLyEen8zGUwkmksChEH1",
  "key6": "62rqcdRRQBMaGpKM8giAtpwyFDUJ76SiZbxrRiJfx324CAmUHxMPq12jkjxtJPgt294viSSKdtf6JoukZ2eDNHyq",
  "key7": "41Ndtp6aifYbhtmU5GcnWNCLAXhqgAyneBgpFemMW3o8M4zpnrye4oBxpN41G7YTy9mXD56T4M714keoRRSV7qP9",
  "key8": "2ir1XCktYw8jL632kzLgT9rVkeFZ5yx4oQYEMMGJaTuYviUJKNjTuDUAaJ6GfVW28FhiLgs2bR55B6yFYVz9Y2ac",
  "key9": "87PupAQBfDSGGVqUtwYo5xqjxyo4hpas6s1FaEVhmFrdbfMtS12UE4hAwaeCM4ZNY1MpiXG9GGqeQect1HTwPrt",
  "key10": "3wkybw7pgwKJEWGJiPCgyibnrq5P2t1q62bsPAT4aA2XrHUG1QMq2xHxL3GMUEsp91Kyr3d3ApvZi3TPmaLmhNzY",
  "key11": "5bfDdv71pWRuhPQGR4nYipdzgtPzV4TwBZuuTUU6Xrpxvq43bCjJCGorsYUf22VAPKzC18nHvhSFURzxPQPLVZYX",
  "key12": "5xKZy5L1rTnweKEC1Qh9jremuvxWKXEVdnz589YXcnc3vX2A78baCKeCav6fjcr9v2XbujRLgX6bo93AZZtUy7GA",
  "key13": "2nEuQBLB4TXkgxjGHyebj7eQCif7vA1xWCTK7rtjRkqg5AzUY1kEMbMdXB9dcEfytPbWUdJHqZwVbMroG59xXAQy",
  "key14": "55E3RaSgPQtBcad1TYoxzQqawoGsvAVJgKMFAnfDEG656vgGb45s6gUqF3of9AF2VGDS1iCP4BhUkJUEpQdCz8kn",
  "key15": "3GFdNA8qtKxKQXxRSxTWK8ajCSLmBXju5pbASE96h2nqbNLWdtSMwLWJNiCicLkZosniG6tzgGH5vzbucFDSAqod",
  "key16": "HSYCnttJnnbtNLQ1biHowM8XCN1JCr8aTCQxUYFeDjAoNqf3jgN7E8p1pQvMpV6CEG3TsmgKY1K7f2PcrCPCMoF",
  "key17": "3FwTr2WvrxdLmX19pjK9a7ZEg8qCfeSsmnjkBn1fw3thveSJmCNC2aFZg5Q273LFrT5wDK77cuLuTEyq68VoUvn1",
  "key18": "cHqPh93BoSBFKSgDy2smLBEYWgeRhLvgwQoW7UGvhfgbWEC8LKJtqUMD7qvLCL2aFERfnBKxNzex6ov2NwGQ8Pk",
  "key19": "TuNwo2SL6V3K6CUZnKSQnYVoeW8isg9nVYsw7CsbxkoUurXBzY2UQkbfti7MQ542ueJi2AabvbQWGtJ8BfNig6V",
  "key20": "38ceSqqfFSg3ZyPLDoTAt8oDfGBNPAttxYoViEEcYmq6SiTfgSBR79rez1Xq5T9mDLUNz6rfXwz7aesApr5weY3a",
  "key21": "LLoTcDEYqDcVZFHHTY8MgdzKG4qJhXYEFsXoyRsX1Dq6fTosTF7aGtsm3mf1ieGNJf7cE4j6UYJJA4ejhT4UF5g",
  "key22": "3Dv8J1jXhPo7Md4puvDayh3bEdSWPpZnav921hh5bTfS5noRej7nhKSpLonwPzcYLX48KhbAfeeZoy2kdNezFfRP",
  "key23": "5umV7oP8j5C6dXZQMfxRXP8hDRFvqev5AXcdQqUruEG6EQwerNC4eREnLfqRAvhAzr2dN4t7X3kJkmtu6MeZqJTt",
  "key24": "5AdfxpoJYGddNwULqwFwPiJw5PBERrEc2BTJADrrmTb4uTfhxa61YWKFdU4XCWxz47aDeGKAc23BbEW1TNdvjsM6",
  "key25": "5xwTNuk1mf4jkCE7oS7rzp7GKBknwGpAe6noXormDpHZRr8EwhkmXVVVPEyNXXBaZwDQfxgMDdF8tj4pScCTK9NN",
  "key26": "2CNWgTypEfCdBGH1mwL2Ca4T7cnZ3q4JSrLNAJ7DLrcHAcRWuqTqc5ToARfmxbndhkWhhawR2sB1dpbWX8KFPXCg",
  "key27": "3iyJ8kn9Ghs6nQFtvwEcN7QCYKCJWnCUoHAViJk3ovERobQWtZnqpeAtkjNchWnxocC7F9PLZELhgpWJ37iWRrpa"
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
