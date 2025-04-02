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
    "48aYBhXPfbR5gtCsyomzwuaehSmVFPzAV27TUM9n8FwMsmGm1S5xKabHmeSqs7UdhYHQBZ5VLBXKrvKLED2ugNfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiGUzs7LEyLMCFbRRwV8iBzW7EYcvJZgWZNn8KojERQBGwzqeAdB5dyq7Bd9CEpEFrqtXaqmEBR9JHPrf6zsE51",
  "key1": "4ce3Guig564YzB7yn2jj5VXG3z2exZZtPeM3iDFBQXxcw6LwTHdYQyREv1fzFmFJzRz6pp8enJpDbwqXjmJFTJbk",
  "key2": "5wpUWtKjmsUySKSfxxKtRh4oQJXGBWcTh8yvomCbcnzykKpv9CrpW7SMynwbPh4cfNqiW8CQ5iVbQtSTGYhe9vW4",
  "key3": "mgnXVuByjkBdsZQZR4KLowErYXRT2HXJELgb8SeJ2ib7kCLjBpaKwXxBZGeaNWvpuMdBz75GpAWMyYk9m7SiCy2",
  "key4": "4g7imjCuS78wWAckGg25yoMgPk4HbJH13MijRuwbS7uU2E487wM8zL8tChYuJfBtbDNnViVJRFztSSurLQJR7Dhr",
  "key5": "2gcKGErwC6d4zAAs8m7nAR1g2Jb6sBFHyN6LVygCFVowhHMZ4DuE5yxWs6fR3PwLkUiV4CPR6yyVNkrshaSgVgwh",
  "key6": "zqscFPFAyscdEv87d6pFgGqMGREEPkJ24Gx47twvuwGaV23XjAvhkQo4d4RJYe3txDQPRL8qu1oPPbiZnroLiAm",
  "key7": "5WxV3PDdXFH6w7CcbV5TNx99qQKnicpN3hV4kCAEoMSLRfZrwJWTmxEzCKVPeaHw3hjuFPrE1fUGGm3i2v172LZ5",
  "key8": "5BtDrdcc1cWRf2P6CTSiJECwP1eaTuRPbZ9qhKQMaNXm6icu41BN6izPx2bo7dY6eJrXSfxqT6jc7i4cRrsnDLco",
  "key9": "2xTSU7prreCjW1sdath68zCoKVf6BGA76gQtZ2unb76HdtrVYYkR2rawotFVxjFpt3BCxDSryroPaqTPE3HeDHYh",
  "key10": "2TzdyuyryjG38kPRf3mXioF7K1d5ZMEKpbQ8iCVCMc4af26ih1bLCwLzqTssFAXhmFLgxGF6MVReqYcAtE2fU1Vp",
  "key11": "3x5uh6XuCDE4quuwni9AMSkLLQjupyWe893mft95cKkTEPsEk645M9a2oGQYynUroKCJGf4o4eFk8RswgB2vKPcD",
  "key12": "2Za4dDzZDNFW2JQqUueoNHw4yczmk9kmXSeFiHnHy5VejtAWrUho6gAwtw89tjxN2GCyTNiUHkZuvh4Zk6YyQpbY",
  "key13": "5a7niWF9oUDyex6R8xbxB3ptunKWkoP2wFrTgVbCtGU46kNsnTfsdKhY1yKKSZHWsw5phmUZdYqfT29NnGCjtDxD",
  "key14": "5tq1FCxeYy8tSMwGzu1VCaz78HPoxCaTf3ysxSAFJjbipAKYaoBqo6Hn29aTw9HrBLVfEivLs7DXxJAPAG7xdFkv",
  "key15": "3qi42mjQmCLYWS6dNorAvyK7bcxNb1CWTEirfFKVnMxahN5Z5Z96pFBymauh4kH9ugunz9FcbwRiAvtK4o5Cp2Cv",
  "key16": "2VEAKEdQqH4hZNLCXqjjoHpHje6JvqeXDG4V8kWfQtx4JudSyat4nZE1J585sJnfYywt3Wn2AWNA7551rZyKGVyg",
  "key17": "dDu2HP97qubsag2kXRAyBdAsMEp7ujaFfzu3KwuMooXRCjMTR9jAGySjwioqCfwrKEfErWdng2s7YJ6E6z7R2mQ",
  "key18": "3WFotG6LMtrxCJeWM9BMn2PLXjK3cjzjf2Myx7ZJy6Go6FKrxH9oyffjpoYGYrNMgdvtMYJWv7SbwWfU64PG75Ne",
  "key19": "3R5BhjpfozgsRaxHbZf4UyaAAWMEevz1g84UURWKwyRAbSyiVvsNCmkhoHiaadiWbgMJEVMRxDdBNi4cPZSgcb3M",
  "key20": "5mUgSVHsjouCt4GJLYyDyZq1gNB5WRKDZdo6VLZi5fvaJVgvFjxoKFHMTc3NVhgHvMXJHmRdpqwfA1EYKAUaAdKL",
  "key21": "22j3j3HV8cZDVFJ9D8C7zWtbsnWgh7e9PwtVzFWUQSnunmKpth1ARZPs2HD3vBrx5a3zmnxn1s1GCju2GqQU3Jev",
  "key22": "B6w5fEz14e7oS3Kh5hbNdJAaH5kdfLJvv1ne6TpHkuuVLGsJNnv5kpXSckQUv93qXTFsFRiTa33sHgTKuyHScMB",
  "key23": "cKArTL82TCDYdYoqp6PGDwwBRd93jjssUJUtsv8B98vE879z78cufbno2q1Th1v5firFgpCcbgUzW82GoXoM6Xw",
  "key24": "gJRxJxavSpiJaBsdbZSnfUkahcFUEtS7M6FgLxsrZdMFyCRxgQFEiiYnMU7rASgLAhcuAknFc1ptVhPy6Ntv1jR",
  "key25": "3qbkoRp9Hdio2x1X43GUPtgUgtyiQiVib9ai5TyihGdQ7HmbPTyXDzeEu9v48V1Zig8pc7Hv5cBfuEaQ8zBgk4rK",
  "key26": "3mgSFMXftB7xYz8JpPfJ1PX6aGvHVmtDEKQ7FyFFmVfRQTpcprxvxh86uyHd4ofDsvs92wNhUznq28wYpFn41gD9",
  "key27": "41TJm6w6f7jqB46RBbxdJ7urwr8a5SyXCZZ7UZ6Sgb39ZXu9VJaGJrUVN1h2UGGuKgzLmV6kEVa9sBWKbYfddQx3",
  "key28": "2W9g3uNAxAhtscEcqkhk8HvRZEsPAWCkL7bEggJyrq6ffKmfzamoaTyCBYKeCPQKX77YjqwPdt1gkGbPhTi4BWKz",
  "key29": "3qhp61zcUBMqhCYeV9jiY5H7n8v4fkqDUFMEFE2qU3oseE4PgjUQnbw69w2BAQVWnn4mq4mnjxkBTqGsDtkms9RH",
  "key30": "4cd5ip3J5cXqa6KR7wTBv9EMWNTS7UDpshDKvdeGP5HRBfHdthyEkUuDZabddn3MhcxFiCjyx4WkwfzWY8FQei2u",
  "key31": "33PFWv1q55tg3GN392wpnTzdtH9ijJ8JB6zVWBM7mvjDTVenmCHrYvLP4bixt9uQ5nTwhLmrA2f37PqCBPGpoPDK",
  "key32": "TsFYmHnRod2PwBAETabfwGqyLNoFbLrRRGkT43RBuPpcirafYvNXX2kawydnqNuU1WHAbkeByeijXgbcUeNFcnD",
  "key33": "2uCxPCqqXRJstr988mu7gthjd2xnARRbuMkj3JLbqtLerQfd93tizgDtyiEVkhCX9GzCbqZUuMf6yMUWM9qV7LTm",
  "key34": "3vn5BQLumg7ggtY9X2Mbu1ciDypb4gve1CriAiAXtK4y8qQudi6RsdwaUUgSp9VnWjTgLbK5k9KHB74V8PHJ68EG",
  "key35": "jGtqsK6CPfvDCaUSiyC1PwugFxvkzVgMNwEznzyUkVTEFzmrx4ntbVRF8sUZ9HqG7yGmcMee2jgaonjV8C8v7DW",
  "key36": "2dLXjtS4DHAA7md2FmMzRHv61DDPr41HQ41HtjoWorrGAyWMXcuQewRjPZdjVaf5bsjctoeEQ8AsSuJjtwUs8VbK",
  "key37": "PLFWMAkz7Lkg4tHxnCAD9qid7z93qaCW7jwNtsZodahKguCXA3ZYnbxooWHR79wtGNMKYPQTKVXzCAPakCpPKZv",
  "key38": "2zvFLApLucX7zBkd2PjA2kiZmAWUSNPunbmHmh4R6sA4sCKN1E7GwB9Hgv9Tg3FF1fh5if913z8xvhGpn3cHuw9E",
  "key39": "4kYgkqmvcAhfkybuZNk7dSace1F4Y98vdfdPffewLyLDRyfUqnaZZcuiWf5oMpgUfQaDKfa5wVcX3G2upVwn7ANP",
  "key40": "2fQwQFhTBULC6aWjtooLz37NJ9Xy98P5e8SkBsmCpHrXgyTKgMqdQ6X73Y9qMU11gL2UDiv2TXxTjd5ErqzoaGvA",
  "key41": "3JWsPwA35hit7wrTV2qMDZKUhvSYdnwTgRUmbf5J6Xn7nwJxT6Tae7FQEy1V4ZKn7oUAks4jJ4hdchNgZu3pS3WT"
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
