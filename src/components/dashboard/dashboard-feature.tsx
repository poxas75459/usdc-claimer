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
    "4eNauS8GTEUjPYQhd9uBo8oFySMbYcNWu1F77pHS2MtjnRLVcXwvVKdcqVDLZhysMfP7ZEtuELvgorV2995T8iXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MH5WtByeB6SpHfDUcx37XayS7eP4bcdhjd3ShtTrfsFdVMt62d1WjW2WBv1dRPWaRn4NHD3gUsqQDdkBSq6Nv71",
  "key1": "5ktzDyoygP5Kug3okbrf5QacedSMUFFUnaFZSEcgCEwLoe6snd6oihE864nVbTVJV3G2wUjxteUuPR4uWj8Eho1X",
  "key2": "3SX1GfgHQN44c8d3WRxqtLutZ24gJEZfW9mrAUMxnQqzpKnHZd7zmH4e3tYMX5Rx3wLfieKbgy2oznwmG2ND2t4f",
  "key3": "4DQg9ApH6r668PVA1YnLF39sUvEFC3hE4WtnCKaGHHwLu6YiYZfoENPQdQmZXfxgk8MeTikx2PNNo7b8o1CxWkuk",
  "key4": "3Mdgoyyoxu8M7BxrgTF77DwxYfFaUGgRzL4kRE3vguQXpAmnfULGpKbbaec5bvvgcjTA8drckokBYmpnYwAqKUye",
  "key5": "3sgiK7gTmHE49SNCq3E87PixWWpQa8XtPebK78bKVy9k1FeYh8Cb88NU9EyUYwteyZbZtuwAFEQaPyuCMWf9RcJy",
  "key6": "EtzcL9JBC4rpR3AouYZjjPmyRC5hyHMhZhbNAN9XjW3AJjAzTUUm6c2Nxxg9RaQ4oZC4J6JQRea9F9Syam4FRqh",
  "key7": "td1qAU8EH9b31XkEGBgCkMj5kzeY8QP59KwosSuSUc1YxhXFypyvpdmTLKyUpUAS6MArzzm2D6yDFUKxy5Y5rDT",
  "key8": "3RFvPr3F7dR2V3FM9sNnizKnANk9FyYQ9UuYoK8AyBNCwW742XT4HKSUskuPEQnmPQNgtEqdTaA3QNbNqRtWPTjg",
  "key9": "54cppZCRmtLb4PWVDmGSE5GpGVrionW4xUo6VQcGdREy4J29M8NrzG4PGfdoEJtfVJQhRE8gmnUg8VEkwbqztJwx",
  "key10": "2qemqduP9F6NHsuv1AeD1cNSVBMGneHWATQBqt3xidQPddjVCcLFiGySJuVtMsf1PUhHM3odiE7rJnvzKF9dvRm3",
  "key11": "2SxwNgA8HL99MjDvxsDLzTpFYBUKsWP3zaQ7BqBhWQzSca7PXvL2c9uiSp9xAgZF6ieyZ6XHocfUCcFAw2nntbAg",
  "key12": "5coapD3bZRsrdkNuQnwqJX4BgfRGUCtNMN4YGxUg5Tangn2H2DjdSpk9VeZK5BBVCRfmis5FFiFfGrRfkN7tcKVt",
  "key13": "5C4Ee8d1gHV96WdvRL9gDcCS5bLFCxH5pVCyuDXrkV3NiMiRL2zCWse8W4oozNReW77qgPjz7rZupYAcqMybKJh",
  "key14": "39eUWMd9gWtbK5fLcdPgd2Kz38amCYxT3HZA58RVRXWpH6iMBsqtyYEcFNKPK5uZyPkFXnNo9pQ1K3RRQHFU22N5",
  "key15": "2JFqAxqU5vF7SX2VsC6aWSJQwPQCKvTM54eKQUjo8ZjMb3QN2NJ5diC8NM63whRgjdg44kDjdjeQxZs2bg7jL5eT",
  "key16": "5F3BH4uCX64hPMQSB6KBXuKkSoTYm9WACdvo41vYqs3w5LiBJukZ8DYmCtdBHUbi73wXhXEkxPxbd3cB4awzPKV5",
  "key17": "4wTDcGvP3sbMS1sjFE7mZ3tVPqqxYFCZbAVCk7GYqy7oKx17icwrz97cqTFDsEYTnRk79JjrvnoAUtc9DYLJMS5d",
  "key18": "2gRS2Vd5ipyDJ8wrEtkqPKoZQ1FGxioEgeTnLA47oyy1TgKm575UPNssgvoPowNsATRAmtgvsdiBUfi22tfe6DFn",
  "key19": "rvr6KmCRBfQoaM2EiJHew5JZFTAqFV3AbHtWoWTsgCCf1Qnp39pniCsXgKQH31eX13HswD8sUtZijoJp4XNfbvC",
  "key20": "4fG1CZ277yZTqF5RUyEqxoi3FYrmZ2yjbuWFAt7cEEEruV2vHd8frCnoVbVBvyMhbroY1vQN89uE65oQ4ebY25tC",
  "key21": "4Pv4vF3U5NbHQerMM7ngN8xkPWrVNWXPWBMYxqH6rvokap9SBViUpdAeHwvzwK6RqNCdK97ST9heJmTiCnqzx4aQ",
  "key22": "327FF5NAABXrkVQzpXQ1c8nTxgLqXSgEtVr13kphn6GbSgbHE9z59hPAqn7aKjr1DwFGkjnMhp6m8rN9cTtHAAfN",
  "key23": "3nsH6sqYoGCLG3vo8MfJETkAQvFbs6uRRJ6z8zjjVqL8gti6MxUPKgD5W5ahDGSrGBjjD3mBa6eJ79gmE9oUhz8P",
  "key24": "4zRA3eRxv6gwNKrRnS5wPL9rPg19Gzm9MBHEYpowU5tvdLSevkFa3SFueu7acxb24URzaAc4vkwSxuZGp58TnV3q",
  "key25": "5BVFQzUEuVMbrZHb35j2PiefQnXxbNScDXi5ifo4kR78jC2P6NM8MrsG7NsXoFQH92dK7D8PNsJGtN9E1nvPXtZH",
  "key26": "J6rM35jmcZKJnjB4UQ2QhU9WJmMyfLdBBJ4TKr6hJYkKGypzBznCjQKWNX41YovKXb5Kau3FN6bTPBLD1w6iv4r",
  "key27": "XA4PrDj4YFarPsfYdB6Ae82Vy7rNZ54KS73JXBNoMkgP4BqXdSmRUEreBzCMfLQ5ZGEFqTF7HpXdkYna3TY7iQc",
  "key28": "66BrP8Q444Rgb4RJa44LbMJ8nkLqWxrihttFv24JyVwvbYGGjvrnUgrPEGQrXvuir4a3VDSbZ1xQKP78Gu2eRT39",
  "key29": "4RB7U3wUDnvXcQYGRugY94YHakd18cLxwqVmdgpjRaCP5V1uTC587kwVvMg57PAxR9uyBSLScJUPNRWCw7Gzg8Vi",
  "key30": "424AkgRJrk3HpBXpBz5WN5mqX1pQqR3DpaWpVe44wqJUx12xpcBrQZ9pwWdXdUDbBfVBBvUCqXt1edx5d2rPd8HK",
  "key31": "5YagZvpUxzF91ckXNJP5fB3huoU8TxhZPaXvVm4erjs5jsoVnmyVwcmnvX5fFrNd5LQ5KEcYJQKvbox95CZeLgWE",
  "key32": "2YSd8vwudih9SRxg3VAdyfXfxAuy5ByjTYbsbVJucz3g7ZkFLJaTcWDKMnrRvyPjHaZLpxXdzjcYtZKuFkirzoqp",
  "key33": "5vHmQWWmXsFBWxrXzmUS6wiTWYmzvTgyozYdQALQjYxbxPF46KnkT1gxkbFqkodPSpKDqZMSnmi5EWEZHjFMcfvm",
  "key34": "4iZnmWJkVVkMzSqThePc61EmmddeUx7sG7MsPU5gVAGJCuH8xXSh4nAjezZwU1FdZuuPA3DAXoNjHrSJ8ZN5igKd",
  "key35": "4aa9iibiWC71ttKbrvkhqiAPC1mtuuVKKiYQHivEhdfNnyJFt6Hrg6pm4CqiDcrC2p575S4WHPoJA6azLhsS4hGR"
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
