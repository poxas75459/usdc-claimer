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
    "3xqkD1YydR662nzzwT1FVVrmLxnkuCPFDxczUGY5LxqJ7S7MJAdT1QuUKRFGUH2zf3m9a4htRRMR9eZQPgQH972Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9abdvCvggKMGsWBCY4URxA1o8teHyLnA7zhh8EqcUuBhf2R1HL1KywhFyyPWAWLnK7krMpJCjmZkw9aiBhbRuK",
  "key1": "5BWUkrtoSp8reFz8YYWNxff5dfBx1Yw5uHGJDnCwFQ7SUuYD866vJ46qLH74UxGKKqcUGoN7ki37jeGNj3dL4xQA",
  "key2": "2oSthg9QGhUUmJ7JP2nR6eJGyQ1U3KvRzsnrMSn7no3Ri5afwX6moHyCRjvkeSWVNMoDywdmeE6xHPTm2Fzi7PfU",
  "key3": "2hp3RTSfxdnNbMZhafaDPeHzRm9nGr4yw15ormHYzWDbjNwK6dLt62SjESKwsz4mmEPbWW2hXcRnyiYpVgXch5aS",
  "key4": "5sFfXV59StykMA5DJKdZg2QSNPyQYRdzdDk23fjHfpT8EhCb4rGK56g2yGUVeTDsMRtMhZh4UXBFDKmZLAvdCGV6",
  "key5": "5DYhLQGXwn1crNUh6G74g39ETDaZfeXqZs54tH8puNifRyPAdhfm3hJNhpEGcuG6mXqHRawVtyR8B87KEaLMgwhp",
  "key6": "5GgmSdV18xwwaYfxGLop721hoScSJT3te4NfbR2uTk6atexj6YReYM77CzFgbmnsqzfcst4vfuN7M95yMNch1o3g",
  "key7": "3Za1RqjRFgdWSedDVypzJy9KdPbdxk1gXNdDaDGGKWFykqwt1xRL6uFdmPmjcTXQTdQ178aufHCQhWvAqsNUR1yn",
  "key8": "5pLVmZndCbkwnqvvHTBeUwdZwohhKPMVsPbKfDU5n823NqcVNMa2KDvCjSfGQndEYAyqqpz6vcRWvk5QyTnD6s3z",
  "key9": "67jDDR1ZpVFpUJeZvKS4vWpy1qEZWNhHkfDRrnscPb2cv92enU6YKP7mynjgfQrtug2qThsFmGfa9b3ko2qinTdE",
  "key10": "yuT7vfWEVKJ1C58vRXh5BAA9V2HAARYAWct1D6ZwRYbLaWgANKbVSqEFccWFjXjEyw9817fobibLN3utQq1h9KC",
  "key11": "3HZPTHn6suRCLxhH6JMS75HKGwzfaXBUDhjiP6qhxDsCqS4PKw21Sr24CWXLyWSrqSVRiyZ6HkrwGUKRTkMJFhRy",
  "key12": "3EGVL8AT7kZ5rK7mPZYYCn7pTUaRcVZYRcG7vAmcNpiFmnLCrkLTVwe8MBpVwwSgPtSiEGLRnKXBLejy1sVXLQBr",
  "key13": "4YVPxPT5sUJvcv5kYhZpPUACzMjXK1m6fHvYxZN1P7UWQ9LncJ3U3zGPTfsVjnot2LbyH6HopwnSNM6rZm4UvxYs",
  "key14": "4aM68hctt38yEPso6kpqfSnNzebdEw8AroW6VLjjwyaK6X2trBnCyZXSetWk9FdA4VJTdfYqurHZmqktrjZtgqEi",
  "key15": "2V81qMwPx6v78PsUZ6ErZLfrPKg4njrLNNguHotvDKMsMVdWL29Tvf9JSNQfRn1XbewAsHC15Gcmx3WdShwJkuQL",
  "key16": "3pR8WBNeMB4dhaZysXHTsuPgxYXEUTwC4W5tbxNmkczhws898Vq83W7S6k9cgBVCfcrWtcp35vSXsVCt5JVgyCQj",
  "key17": "3Xv12jiT32DJ8qyoLpbwaQcBUHDF13sS421KLiKLgjKEfcywJUruntf2GVzAqT9LBQNsR2UiCL2rt6WLYzGjM6pD",
  "key18": "5nGk2GzvWaQRUcnsV4PM5RUYtK2oYMefSVk8CP5r6ysFKDY3eCvwitV6ZjNoj7v4VKFfFZqbnkcg9KDmwmJd7Fht",
  "key19": "4o4tGQRLyJ9anUHWZ1aJ5wLkEd1UtxoK5ghQ84jrniY93rZGNqtgtiuHRjH4iM9vJMjTyR3HJ2KceXzMyhZ1oMrg",
  "key20": "2w6jM7BmtjpmvwVp9YhjsgNm4KwVJHiJZPBU9i6tApYX1wwqRWtJqKoJx1jB39Ldp4DmNbLQecfhsgBDhN62gRtJ",
  "key21": "2p85qQV7B1vtvUBC6XDYNtMW7AmxPBkYnxDx9ZybSXSoKYQFtMK5ojGxsTuRw5qB1wZaSQfyATQgi2SHd7Hfkz1s",
  "key22": "3QH95F8tuNN84DyG37xCnS8NvKpmSjcGsYnY2fYBbd66FFYZyT12ZCNe6n4FSP94SxbY8Y6xsvakBGDtiHDzcybR",
  "key23": "34ZggU6XjvoxA65YBWirFo8Ts6TbuDFMBAzWNiZiF9VwD66KrNDbGUExdZBt4H4jyBSPJiq9K8UDP8D37zD6SrHS",
  "key24": "535fZHRD8BKb9LcuzfiynTW14WZKpbRdoV6tpyuLDWT3rzGr5vEKN51nYqGDAb5qFGHdn3mTi2tUpoLDzmjKWhqk",
  "key25": "2SHZaFWMkTigDPCZsSo9F7hTQg6Pesexmo6trp7X6BS4AT5kWSNm8Bpm8SfND3E1VCFiUA1WaCZfPJefexG5f9XU",
  "key26": "5SmLtm3oKazLJCkwyciA8Lk3dgniSa8jCaf6NSEMXuUG16QkTBJwGhuKBhurKLYwudftTmxLw7QtKgCHAwnEVG4G",
  "key27": "5k8e2KUbyXDzi4ZGna4JN1gGZZegu8xuTT3yNTjPBkkt7m4SxrDrfkWYiv5xL1SPcwGpLf7zr5rnqRaYwGbvzqr9",
  "key28": "3v8uGrUGCGRJSXtAZjB96BMzYVe6V41995rxNBFWSMt1maN54vmJF3QT1mTjqwotoBje6yDs1cpUVHXFp2TKw1Nz",
  "key29": "2uvA3xAyJx6Yzoat6b7ckzy2G9sz482EJtERaorcd1Hvw9jo6Wy23n726CcLWzpTGJMtjYw9o7gu2oYWM815f6Bx",
  "key30": "3T9QzTMLd5qpCoNuBiBWgTqsFAtshRKqWB5LHjbmvJs4o5eVPmGo9FpyAZfyDHxW8qaAWmdSuP23gXhw2pEywRhh",
  "key31": "2oz1kasdAeVxswrWVgNjwa7hDjmv9FWXea8tXz3NJfSZBFpP1RG6gatgCC9bWzGyr9bpPHYJzFT6BGMJLQRuwkqf",
  "key32": "22QbELQpqjoKWVHFPAqbMaGjzjcfQMMNdyxuWeuRfnHttSX7cyrRj9RjCtir9vCSkLBceF6wosPUAEmNmKZDhqiF",
  "key33": "eiFAxM5cKdTrr25Rf7Hx7p198HZFZAiv4HXEnAvF11KeETEJCD9T4QXaSePDqQKe7WbgCcXwX2q2HDxjYb35K4f",
  "key34": "25JmS2YuzMZU62JRMLgdc4aePhT62rutRwZZwtyTMmacrbe9oAGgqebLCWCXqEJwmJ9mohov6DJQpXqNQxrDYoaC",
  "key35": "2E9XjzVY2phWVEx9Wun8yvnjxaiJCuh5SrVhf2uKccms1wmjMAy8q6SDEutcuXJCny3zSpUNKqcPBA2ZqEtoidR9",
  "key36": "5uaKDRLN8CaBC9qGXq8tg1WiqPk4M8WQ2STqDTZZvQBV19j7mAguo7RFEhzefGQqUb8WdKg8ZxKTnU2vyRV19SQb",
  "key37": "KP99d3JJoE35gcCQxLXNuN952pKMUf77kmCMm8uaEmAJpQ7vbaTRnqE7diTT3cvakGFY1bTp2KgezjtsBeN9s7C",
  "key38": "44wCJGvNEJcvRe4vGXY4yoRdywBu8BgU62RhSgwJDVz7usDnv1ThZcrgVqGC8KvGAphZjJCFvj3PF98NmJKVSRZH",
  "key39": "33riyrWepYo2oK6oRjmVuSD3yxjeahrAMrMaLaDLroWwEhznuPFNy4EpzqZ9FzJthP1Nw5jekr6AUgPbUFL7HCL3",
  "key40": "5BYLDddUB3GmA6G6j5tiQFfW6nDhdnSgarKiEFpcichRPGCY1yPpdzFuhcSGzYQd5QqDMfZy4ePnzgNNoM5Xj5JG",
  "key41": "53vVcfp4hMPVkd95pHMM4Lf3rSz4ATaZ4p7UzuzvARGoq1n5UbtTDss1792eCCgqaCTvYJkxyMjHvgy9CWG9xh7i"
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
