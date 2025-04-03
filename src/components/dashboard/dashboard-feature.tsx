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
    "2RL1MFxFuL16H7BTsxS4b4jRhPvmcQvBRA7JCghP1i9tb6zPHufE7kHW1iZ2tHHkLatdwTjbXq8d8JkwJHtpqBAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLZmoYqfBSAhSyQX45qhWwRqdkRXkYyzfvcasxMKuKVhMLGhdhNaTbd5Z4YNMrvLJrEaanJjUFcKUPmy98BPzh1",
  "key1": "5SWmdooQEEPHSgaQv2SNLEvnotQzqELa9DFxRLTg971GDRsNGXb4XrxVaenRWcC3SrHDnyi2xewPm36ZAohYQ9nR",
  "key2": "3LJGFxWSsH9fu1GxUoP6ZGx5qRLsPF2sCy2KyJ2FzoEBXUNAK6AZMzvbU3mTtDexhrgzEpP9bNhb7UduuaWGM4ia",
  "key3": "62DeDiyxnncuN3eoUNqirJVmXUZ8ZJ8j61kbTrEpEKrH9fNH2QsKWFSKajNdoDeEjHC2h2yJBhjHzw2xGwcXuuSg",
  "key4": "FQbaBVpfQ3MEhbmrEGpHZv3CqH4v3twzULQ21cNJaEjBg3TQ7a6TKm4EpaViDNAMDSYR2CT5ndpSfmCCeygF3iN",
  "key5": "2XMMku4UMnXXU6HUn4KzoMNknWpzgGX3VrwCc19wpb3bXyfCZBNDdWGv2kokssKKwFpZxCfXHeugycGBDoEEWVrg",
  "key6": "3ZWLP3aPhVDBFBwXBZGH1iLNxnuEkE7corqDKhhi4TKxBX8Srybs9f7jMQyrXNEXiA71En7VQjsKyb5DVrknKSW8",
  "key7": "2CkkKw6rxLaGq6Xk6MFJ179nU1tW8ceW6KQYAB16yLWRNtRbHwd31KbTMwdD25ag3BRTb2cvo1hDTDyZdF3HhDfQ",
  "key8": "44Yea2gW8t2dtoHWESXi2ey3atLTaDEp3AvGpKpUcJ8vSwRNoDG61geps2qeYRj162LUigWpRMBEcr2LhV5XyYrq",
  "key9": "n6Ncb2XvN5tMGYV8ze2T3YDbwE8VhZ191rzY6oNxLS7uWVe6Fpd2YhXha7BHEpXwFBKFy5B8pMxXz3KsjL9pPAf",
  "key10": "5RcysXuyorUihJJwEJ1kJwsoW52q5r4Vruqy6gBtz9ZUKksbHPsxJ2TRa2D1KTRCMCoftjX7sQi8qY1yoWL1kwTR",
  "key11": "5gv2KkVXLroHqWGFWTsBhKavRryzdW96c2ZYxmN7VrFVKi93nQFwpJbHCp9GtdCrn1Dv6GPfn36XrCvv5WDL2kQ6",
  "key12": "5Z7pTuv3fDBZJVrwL1Npwdo9TC8gSE2WT87P2VEWC6fYeimZWrDcWQ5bh97VGjiYwgzC5Kf5uU78r4tpUTeSzyuv",
  "key13": "4kFdvLvztpP68mbqWH49QFAbTicPfHwyxXoijcYeicNp8fH5fgU5hzaKAbjvWwxqikmvXUSp4ZnR3hS5adK1K8oL",
  "key14": "5p2iWrdaqjAPQPAhLDMnjB2KHZ4SnyhMsx15rvcKZuVN9J2Xf8W48DtMZQop9d5ka4RHkeskmiiejS7WhVuZe4Jf",
  "key15": "5m5bavQQSz8RDyTR5KDRM5RuJ14WXdXp6dyoBqrdMV8xp5Zb4RV96NfAT9VUthDiT2k6AF3EjVw6RmW79FfkEiSj",
  "key16": "4UaC3nYck9MExG24BtzHat3RG1Gvhz4dMBYDFXQf6SJ2ZG81F1iur8snQCTXZPt3yurkWyu6vfbE7fqhXCxmakph",
  "key17": "5q1RZmknLQe6Ny8JF3SP6p7RKKiPQHw5Vdmp7KQyN5ev2ty8NfhSCAKDULbNEpxnpGpL3B9MYpmHXN7f66vW7M21",
  "key18": "49J7wuu4c6iuB1mEv9kA4ukMwzksdYvEoVNimH9DyWrCfURGnmHRBQSmT4WoYtGZhVjDqKuh6uNK5wfpwuSs6HLz",
  "key19": "2PHaUptDMKtyZDoLBtXcsFwWLeHDRrqG8EQjdvpCBS5YvPuN88oaRnLFWJ7FgPvGQ4zZ1rasqfHu8vNDeLaVdgZr",
  "key20": "5ouVxR5FmAcPfBpPgh7yRjjUsbTC3A4K6GWo9QXTp7paLknBHvk2dMTnHd5Abj5t8FQWY4qc7Rnr9VMy4RSgzeAv",
  "key21": "3NGUuaKX3r16cQuXToZCjQzsuwS4pKoPBBJDRr8V7649JzkbwRa9LHFka52tbYENwxMF4vPGW9AJNACKkqLnXcSo",
  "key22": "27Wt7rqmgWK21UaSX2PBKQeYQszHts47nwVDbFijo9GGmAWpcXz5CrUD4yiTEicKH1zwm9fv6YQF8Bm3PSJ1Uqii",
  "key23": "2krv27CvS8TAPjASyHGj3Zg9BkUpiPvjQ2s9saSrxTnA12fnACnMammuxj63dzMoYrREHcXiFxA7rsxZa5uUX3Y1",
  "key24": "3jL8m6s1k3n1gob9rXKq5XgfWfnjriaenwgphDzjGw6Fa9NRU7ynZdugcKuXcmhv1p1D1JiQ5kn9f3axCxTGFLUV",
  "key25": "281M18MAq43KLHan7hjPfkqLmZpa7NvcYYRM6KfQZBVbxaryD21SNvF2RY4stga28PkYNKo6fXEdYdYs3mhUUiHa",
  "key26": "3Pgkn327JJ1enfU4wgSwvuSTrtZqjHYNktdPJSwC8AM6aK1qhR5qnh9U3X8ZLgFbMNtujUVrQfk3JLBkK61ctmBX",
  "key27": "4N9GdUA3yKZAHqJTt8Xi3tkhAiiP3171BKgSue1BztDyRsXMfrJRio6SDynBsggd3jwMGytXXAkuV26xk8CjJe7P",
  "key28": "vCBNo4F4rMQEM6LLpx3EwQ6VkVmVCEBemwQbDPQDvUqoXTL6BBxtj1aLCSq7UL3ncSGTkLQGwRuDrsg9Ba8wbaj"
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
