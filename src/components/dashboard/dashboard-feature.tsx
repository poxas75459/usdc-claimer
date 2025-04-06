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
    "4CKqD38mSD9mcjytbP8TFeQBDpeyBWSngyGazoW4BjFUzj7VYabuaYbi4MqgHJ3keKVnPM6J3LKLx9Vx9hXWXyhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VckGsA8VmJmBt7zbEmf2HDDr8YoxDf5vMLfTZyyQGM6pjH3fscW1LGpi9kUVraWeR6m6dbMh4XtP4MrKf2mpwD",
  "key1": "3brMNVXXjxtERo351mY9rWZPuRRJR2JAHUGWXR123yqvrYqXN1ny2e4rFhWuFLPfypxYTX4p3wtH3kJxEW9eQxd1",
  "key2": "5TeH7eyXyQhV3fheTW8TJd3agjFBWTMp86unJQaWHGgf9RkSwmL9Ue6wnBFQDMK87caaK2qQWvX3eEggrfaB6CaW",
  "key3": "3mgWUk3cJfoQoKdYr9vWTxRcD81k6LKVKLmV8HDjfhYe4PWTH5R1Z77FXPjbwU8NB5sAeA2onZ6YJPNHrMSjyL4u",
  "key4": "5qoGNFPoTo8punbPRfMUoB9ZfjtkwgNTaGG6b4FpoCpsHurjDdkpG11fAY6gdiTnTNzME5McYtiAT3ZuJCgS8AvV",
  "key5": "5QZfPSAqNcnCQHDZ9Xy4yZ6BPxiny3zL7XxSD8ieY36GfV6U6egatPSkzZL7qNyAYfjDBVSHnB7QMfVDqEtcietm",
  "key6": "3wEZBsiNc4r6kqkqtC1fxXjNqwVvFecA2N1rpPP8dgiA5Hgn38Tz9TW1XJHRSB2eu6CurremjCquKScGAvUwXRoS",
  "key7": "3feSvtMDjGFZnNovU6uPdY8tLDNeQeKeYf3A842e47eqwmdVXuYM5W3MNxpvQcuGuHsxi5HjuGMNoRHujiavePNR",
  "key8": "4LwpNhgps6C77Cxu3MYRdbAbpC7PpgT623iX2S57aADmoxQCMdnJtWp4tZvCNRku5Cie3moeccQTeM4vXaTYA2Nv",
  "key9": "3oVS5YeuMWBboR5URzwHxfWBjLXoHvYtWrLjnzpVxGABjhWtJVzH8P5t2oZmFgwCKuWX2kvUj9fJyepqCjLDdNJf",
  "key10": "1S5TQTG1kicA1fhZkidQzvm1gXpvei7pbNNsyuAHAZua8Pct1fny2wRn1gPcXPB3eSVBxr5C7mk4vgDcYmo1JF9",
  "key11": "3t2HyaLa2ieH4ik6Ji9MmYHFHJ5n9FGY2DfUfa7pvycj4WQ63TNgqRp9zBF1QZ6NJ5bVoDn7PcbLaspzFWQaWF6F",
  "key12": "5JHaPFJCwUcbcxrhYp3Xw6sc4KfGnVXHHVXpPj7zsi9Y3WzTr92ikT36wfE7Bu1tm3PHGn2KwrCftxLAuADkALsG",
  "key13": "3FJj2C1bBeE72ATiS6NiUodwopHFowx4J2q3BMs1aKKS3Cy3JhL3pMGNRUt9DzGDtWwtwyLBbQ9C5vFgf2oy8PkK",
  "key14": "ApnTxzkehHyEA13rKs7YWHMD2aKzy5izCWr3NEeaviSaYh4zvtokUHyEKejVW1aZ1uKyz1hPNh5DuhHi1g5RsiU",
  "key15": "4dBSux74kAarryMoTNbwf8QiZDnVMcMqEbj49f3saKy5VEyWDVbeNF71Fg1newe5fDgzG6NThg6gFYKKmCsMyh2y",
  "key16": "ESr2Zu21iAc9S89aaPp2Tp4yc5xqCnsiDN1TUESukfnvMgPorMtUTv8xhkhp6HEugNvEka825WjZsuMqnf2i8b8",
  "key17": "54xmvYe1Jh5yDZrdG7gdN48xsowiZSCS6oEqXFQuLNb2FUyrnbo4vpdujpxAMokQQmKhBaqL2TQrKvvt6qyUzokD",
  "key18": "2ghV1QCxowCcgNviQS5KqWQ7XZijWhTMURXHKxmSmVWTqkiuGD2w4qkjGvoFJeJQeRtjb2WzyZf8kQb3NqMkEAkN",
  "key19": "3kaybKgbpzBUgzhKfugUFaFUrzrRetEYRmy5ZMYH6rfQ3gRttXCyK1MLDrn2TQmogHdrzU1pnxxuqMZuomuytXbq",
  "key20": "37XU7DGK3xw3GeVT64exynGJkB6KkHNCRyxvNxufYetViYmADo7CKpja1a5dr5x5mwDuJZDUsfjJTAF4wD1gHDe1",
  "key21": "48NkRF6A2X61tLYCkFcE1iaPHKUBFphDbNQdNBpd89jEcFpqBjqKjWxk5dYL6VRYChT8Tvn6TByfS2c6F78PXVex",
  "key22": "4LNVdMaWQvz8ehq8Q5hZY99rtHYumjKmYJUM2ErF3fBnEDwpraxQrwQoXTQRYtctrQ6KvxhxkCEjPgna3GB29MyB",
  "key23": "5igVRnxbnuDspohiQxVLcavDArGYLyr6a7fikhiKUgJrZiZkpHeZhSKHGwTVFSZyUAEM1Vnm9jnzTyh6KTrj4Sf",
  "key24": "3QLad2ozVVj3DskLyXeEu3jjdN6uyCcwBMhjdzFSHrd8cPivEqwF4bbkfsKrDEx1jJcWjdY4U9CumAegWNEQXogZ",
  "key25": "5F1QmBrQyVLWoWqDDCcGDHBvDKApWwAqDDFP8WgKeD6DYmSQWXWF58qS3dRbHX8fZrc7dVgDR6U6Vzu8oVVYQ9PJ",
  "key26": "4ZVzPXSEapdyuVGTn6j1VTKqw26hpxN54FYg75ooiTGveEBRJJkxQUEpgbWavY4ekuqNUP9987srYWFRTsNwoSav"
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
