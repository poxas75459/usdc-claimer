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
    "27CqxYyxDtnU6NUe2sHbVdKdJPMXLjoes9pTNsEhQsUp1cBGQ3PKQHU6r2vaQMjC2xwaGBSVafh7sH3mMLjt1ZNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KZ9GHagStvcpPoZ8HXvFQjTqhUvaFeMHxXTtWh9aEXpbTfD2uPtJJ4oPddSmxjhaZVXVC76WmY2vxsFixxeZCCX",
  "key1": "2XoHKWCkZkHKwJrfd9o7cLPLJa1dcCEjRnvCav2xffn5k48wMqFss5kq46dyRggKFp24UuXS3eQkh9Kh2k4waKbG",
  "key2": "skfJeT49tBawKd9wPpBHvW2aeW1FMHAsQyJzKV7fbawrcu7gPEZRg1EQkdF3GejrVVdxd8tc1bN8Yh5Y8WiK5m5",
  "key3": "2hYXmfjAafbKkkz8KGQxR9RaHU7DLedchLaAFAeBc5sMJcJg1RJxeUn7rVYMQB63QAjQ39G761RFYNhQd15Fkh9k",
  "key4": "5UR2tcduHsPb2Svq9UrxRSBULV6WyAmkQovNVYofR8bAQ3kadyJz4mS6kZrJHVBALYUNez1ynsJ1hqZvxrB7a83C",
  "key5": "394CJPxoPqXuYDubY4BzSyVmNLNA7a8PC4SSNKVmEGyW6EmymZdEari6ATKetGh8FC26FyuTCAAxdfNMZdqv8xJj",
  "key6": "47kSg7bndQz9XZduhXT7SW2xdpMRYyGwZZ9dwQ3TCUwh8PF1BZvZq51BFuHGpzCT8XH84RkZ1eNNPVxv3AiAmqu8",
  "key7": "5Fc9nCjk9DPk4DXRoR7pqHaPMddn5NSVX8Pa9iU1jHdEJuZnsZvgzuVeN9mXWZGfJ3Cb9DJ3onsTA1Sp6B399zNb",
  "key8": "56J5oq3qSUtTKkN3BQ52SvdCJZ1vdg6HWgcsBSciEPhfPhtngZ1TfUqbwC3qrLWxaRK82ZEnHb1LLLvxFHfh95pV",
  "key9": "5G5jB6CG2b4xaUmWBap3soRqsuJTW3szMkPyB1xDqUHLYEmgApeDKM4jSECeuqbUR4Gj2ubmp2dStcTapeh93WD7",
  "key10": "52hQXK1Y4MW7ENMozegyLJRuJmmoFNDnRExpofjij3sYB2wvCjQTx8kVJqaDCQrpW1EDvLiYrsD3WqftujSPME1G",
  "key11": "5SdoTfBJhQpq1ZqNPVxPY33RYJZi4FLivVJRiWgiGHAnsSkbCE5zhJ8iDEVPAVLpwzvZRHusQH2pqPyGihHNK2Ro",
  "key12": "3utYYTPWchcuL7466fJScGfWpmnHUrDo9jCCrjBXc4K9m9vpBFEgoDPPYwYovdJTXGhErHo6uiH7JPcg8zzMCNBk",
  "key13": "rEHdigzqGH8i5zVRgfmkbtrPpPBC2qbq2qH9c6qG5H4vb8dAkAmu85LsgBYitTRijQNGavcG3Xyb1giKEhTWKm5",
  "key14": "4n7r8XLnKpyKpme4hCXurzs8wpCS5SFpLq6vDDq4gTtoZyibPt8s7iWsFrjREy4XkQicJTTHVCFcNjp7jzizSJf",
  "key15": "2jwErd27ZTRH58oF3qRrZ6ECRCb1NvJ5YYxqxr6nBATUuxhxr7g2o7hudLDc37KAg3ni7FAmtEhekoaCdYcJf3G5",
  "key16": "3KfRYegHE3cZ6En2XpcyebyxvSahdZgqpniPR5CE6TC8SGdvUqiuEHJgcuNiTvSbTz8WiDMXR17MUS3Q9YP9nnYv",
  "key17": "57LcJXcbYjxMp8UYzjaaZmD58JS6QJAv1nPDLqkJKiqGC8LK382Luviysid5Gv6QXvLyNCVQNUJCGNLkycEBHXQQ",
  "key18": "3kNfkBVeZXmcTTiPgg3gFo5MRQb9EuFi44SLa2UNkiucGaLHcWNvYFUuVkEGpH92zcsYtEctq2sT38vd6Q4UGQsS",
  "key19": "2YwH8RekGky5wdmhtXW1Kz6yU99GBPZ1kt8j9mPaPqjG3Tjs6Z8GgQbipus1XuY56QpVJCgLmy6FwaE31srnXUee",
  "key20": "3G9Md6Wdy9LSrNAvsiv1ZVQ2DNiGYtt2UcVDmJsSy4zFfiasAv1s2cvqzGcjRyMMa9xJatJ5euuHJsxnZLe5bWKG",
  "key21": "3cQqQ1aVrLJsJCtKncsAw4iTAPUVu99PE3G4hp4JVn2ErKYLtMBzX5z178NjikdSZogjmr6hdVvtB1KDvibizpKp",
  "key22": "63WvCWFAbzfajoB6xDerGC4EEj4W1JWe9GYqTi8VgQrzDrjkk6gq3Zvvyk9n5RVkWsEpTdatF2w1dQuvwM6jAwbY",
  "key23": "5yBpQ9SLMqDsjD51WfXCo6dPAPCSqsX5KR93kabNNPWGUeiKAL9SppbuFYxxPrtaXEM8Kz5RLKWKywpXSoWPyNYs",
  "key24": "2yTKc3sKEkyEAs3b3iy8XsbYFuQTeaU8KbP8jgh8tQvG228TEuzDHD8iUppVxKs74thX7wfrkc4QKVFiBaB7EUWB",
  "key25": "3u2szwNWQTv9GVtGDkG5jv6ctJi9F6Gm8rycMsoQYWXH4QWemh3LJmrV83qXVPsjgcB5iwpKHZsWWwV1mJaidKzo",
  "key26": "2WSKzhfcyG7EPUZyBdWXw8E8VgRJMSiXpvi6ZMpSvQ3rsyzZjpz5awsKmraM7dms5nzJ159TNHNPmQ6BcpX37vif",
  "key27": "3YfZFSjUSP8sdQYLLMEJpHYfDLNBb3PEJ369MRpHHDfNG4txZAFQkWiXEFKiLPmFPmN7zj2Cvr3MGYSW13XCXse9",
  "key28": "64LGiGxb6tCdfVK6fz5HVSC1wfzNzfxt4rhsvAyYPMiDVnSEyE3aGs4hy1vVhtf3sg3cGEZk3faC1wKA88sx8iwr",
  "key29": "Q4U1RobEoJ1fjoPXDQkwxCdXZTwEQ1JmmNNBVbQLjQYc5oYFRjYcE9nxGUzZQNhWBsxm2fkExyfCLMDcQDse17x",
  "key30": "4siKCDt53LiufcA5V3fLVbYpgbbUDmzyTu8fRHXSjZrnRgDMbwWX9uzDtxuGJ8bfsQgyZgi8eRuA2j3Np4TScb8J",
  "key31": "4vwvKNLdn7VuDTYMP3mMBMqD81ezBRXxNNqcuREB3jDNMEJF43dXb1KDxoTVduWU27tvXK6EiAGwyizfjjboa8N1",
  "key32": "4GcneCzt3TwaZGx6m8RPXDi6s8nYSKgbeDnNkwL3q1dEcX3BNx2aqsyUupGJChbpZudc2tUdUNCAzAxSJNy9XejD",
  "key33": "5hRPfind4aqUm7YTohUeG3WTiqQKfkCwkRv4m2uHE7zrJM37qRNdzGGZvmZPWQuPsnmBnbUhE6bz5RDCC9yWcBch",
  "key34": "5JabedFm1wAYMuHW9c5q4ZyuUX9oZHjLWoTb9gtAeeHtFqZV3jNb1Qbwp2PK5yoJCbNya4o7fkTEhUei747mfFMa",
  "key35": "6LCtxLobAfmagns9J924vj3nLmky4vdPsDwrqmkS8Swhuh1mjVaYqL6PG59PDgpKJES3aFqEwSyfWrYRcrKjL3H",
  "key36": "2zRPFkyvSeBJA6KYsfnP6WLhwwMkpNvSmDwvt86kaJA3vpKdGPeiahoqS2ULaYxMJ4KbeA5NRZ8zCR6KEwQLJmQL",
  "key37": "3JnW4EmpSLb1urU2n7vGRq9FNbJ64VDpnbnDbeGUHLWYKgKbZ7FMWn3QAefNMtbbfcKDf4wR2DARqncjP3x8fe2w",
  "key38": "5XeA1KovpiFR39TbfddEZD1HKkFa3QpXvuQibuxH3sUcb2KNnbwmUAmwV2U4T9bsdxrUnbhonAtTBjX2aLaDPjjW",
  "key39": "5zMdyQFMEdHmwbEH8XQtgFBuAk1x7qiKeUgjAuCVBnSDSvoLGYmgXpgiXTuKbVidNjMr1ZUJ5D1RsJAsCf9j68Sh"
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
