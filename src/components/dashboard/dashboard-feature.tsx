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
    "Ni3TtTSb6Y5bZDoqRSCyviypfsLh5sHST4kmANinu1yuKRvfXPQWSj5FTjXdLhH6SDc5W55nbms429iPrWyrR89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjAcerMUibQrwRkBFPuHxYcFgAmaUbEhEvY44PkxKZrPdMs9FxCE8GAEwdB9f8iCjzCT9GyFcoVJg45bJCzrsa4",
  "key1": "2gDt33yBZcVH7q4XcASJMTEH22HGVzHgDZZ9cMYk9qq6iiQhKxn4NbUmfkGZjAcy4eypJaFTwtRsFq1Ne1PE4ZuR",
  "key2": "36boWhhpcazYEDwefsrjQgPCpTy2Cx4YE1cVpJcTGF7hCXNxqNWaFFN71XEqUCc12Gqxpw7npukariHakMCWRxx5",
  "key3": "5uSCixBg88vFAYnVLpSpz5SBqAkn7k3fuGPuS2yEbHTEspKi1wMKFGkWrzBoruZGW2ANKzk3q8Y5GRwqWaedf2V1",
  "key4": "5hQtUkB5KfBbYp2Tyay7jKn2TRg9Gzi1wz7SYyPRJdjxvVmMXhJxyXwtomKH4Sbj8FTx3kNqg3cQdZFxFc9r33pe",
  "key5": "2nPUYxh8JNbAuDLrUTDAweLZDPJbcRfjwHG4JNYGKU8eSRSyAzQBdYxdqruePzKA21vFGsCKUvMpURS9eXkRchLr",
  "key6": "4rEhkx5Rm5JxV4n9JBTxQx3CpD1ahkm3AMDvvfCJ6nLpeqivneBVrECQX729Kp9yj4UYPKmZ6eon6AxhnjqBsx7r",
  "key7": "iudQqfWKbafAegJwcpMNXwGGr5MyhD75SbuQzcMf83AyPkRZebD4HGJQwnncMujmgy879d3TLdtcKyzEG5SgyBf",
  "key8": "42s3e4VeWJonwqwhVwox4aXPgtPtiwhFnm5pWPqrJ1qoJifLe2xARX4m6vQD4K7aHMsKhLFyqeDBZyUWeYDGEPGN",
  "key9": "5Pa4DmV3mGSz8xhGgieHngguM4wfmYS1N4VUhkGFxVui9EnCDpvvaeVoTzM34ccrpPhJHapxQdVJ3PBhfKJWKNp3",
  "key10": "45jiev2v77sxQhu9EEGnSsepz4FDwdeLyTB5Vuz93GsPw2MfpBeoQzeRXWmJKy4eAGFZ4UWdCZ7Xab4B7mqA6pfX",
  "key11": "39wKMC6qMapKuHRxWmY135Lvenzf8Ez6EueHEkJQHsNFmAbJQYmADJJLKqHWRYnxt22GmqvUoRUbpApFC4tkes1f",
  "key12": "ggER3DzmCXx2t458cx5zRfHgXGAnWT5fX9yXmokJ2mSnq22D9uUWc512kD7SHNBZ6hjEeX38jfhniimhC7zMRhb",
  "key13": "4fK6vnCBSLx672hzU7KgbJ2h2FspHRdUH3i3WF5hSTALD2uTXFyyHDHDYKcLMXRwBoR6JRkzwfks6aBMv3kUg4SU",
  "key14": "5UUZZPstS5vcPh7RubbB4KtEYsAXRq84mMGjNSbxetVoeqftB5ci7oAJFcLdmYw9KdGqxbrr9uiRkc1ahdxNv4Rv",
  "key15": "4Wxe2u885gzUrqf41t6k4hqkRmgUmMsNh2uZW56wR4ZZkWa8G42w3MwyaYYXJd8cwoFVCKyJw5YDWaxkPVWswM4C",
  "key16": "5Cgw41hTjSxuSMLXXvZdKL4odYpFdZshW5CoHcu9ywf3XdfZBMTTqjZTVfKnUgrPmakWDgQsAYXU1gH59Yr5WEji",
  "key17": "2RmMRTNiweKocGGzhBKjFnBB9iRrJNvBdtPNSwLSgvf9VWzAGAYj6eftQkEUqejz9PmA6tA787FqzSgrKtLhKgkj",
  "key18": "2qUEGjQSekcQxhtmKDFE7ZirGv9TLhqJUZjjDN2rY4npe96kbMqQnYJNDhRTSp4JEvcs3fhEiKLL1K4iF6ahkrgp",
  "key19": "3e9AQHKfcCZ344hccWCMLSKN8Rra18PoUYJoKZptKKiXMnK3WFF48VsDSeSTERrcb5bzFkQuy7VfUnMQwtFvmA8h",
  "key20": "285JNxdsxvMJ8DpoRAWasK3hiuNuGfQyj6pqi7jReyMfT2mDinofo8GKQbxc2zJ9inGsjXYGXzmkY61CuxCXGyQx",
  "key21": "3pAQusRkbHL29X78GbanE97aodKqkzc4322qyRcQZ9UhWUCW9uqu2Kr9NWU6RXNbxKiRxdnKDicn9S4uya4y2oYG",
  "key22": "2T6kFqDVqoJL9YZFviBJE3oU4gD6CbrVz1hAGyXZcUup5DcumNbHVHbcrb4iAoqs8McCVTL4Xt9Ha3bNeo5Gg3km",
  "key23": "2Xnzjw7zQwiy3ocRhoHNQfjUDJHH87umTn2tqsCwMeGdv3zAUZA6Ss623hSh714BKJ1gy7BQVRaka5DffTonFjjF",
  "key24": "3KuVvbv98jqnU2KknEbUVYVSRZfmiBqnMhZRqX3xVJ81Qjyw5AY3yQzLMvVj8MZgHbGfLvtRPWb5SeVUg1WqA2gw",
  "key25": "376hA1mP3N17xTu8Wib7m89uuW8GG8FGdZvtsczyZhsvKotw3mGp6eDLwmmCKR2sW8F9YDjDyjZNf1p2ykZkqzQ8",
  "key26": "BUG5H4nsDPw6tFYjf7DibFvCgcMpqsdTtybAmLBdJpK6qUewS5kKE9Sa81BnSn7Urt32s3sMBQ3L1V6xrp8q4Z4",
  "key27": "5ZmLv32pce4FES9GbSi5FpSjjN8Dtcnst8guSqAUqLiUcahdStxL9QESqFktaV9s9XY1azCARMKFbKGTwgxVatZw",
  "key28": "2btPBLxvAoEDDT7qHcDtTMXanKD6BVVGnmfGzSjdpUKumgraaktNdoGH5vyTFFFuE5vRsYQ7X7rNPNqL8Mb9N7zu",
  "key29": "3YjpWivvPpn16L2fjpntBgwWwhthmAC8TtpKBvz8s4fYwkRk6vqYjBt17cHCXJdGtMsF65Mitby48ZPcnSdtktP3",
  "key30": "5wFzEjNJj1ckSUAj8QAxmf4stDfeKB31Ukjo5aETjJoaA5igJTViJxJ7JqL9LidMETCRZonWfwhSTvNWtjxWGaG8",
  "key31": "5b8xRPEVmr4WjBigVTJLGUSMYE1MaHZWCF7SDJNf4Tgrs7H2KQSsPVXo2BVmUq5bmVakc4yBMi3Xq1JWT5MDE4D5",
  "key32": "PsGUDThq5ssQnTDPVS8RzZ4dKUN3z31yDyTSYeasRXD9EkNAAnHSeTLc8f1hRUUMiQz8JnFTn3HksvwstxkVWuj",
  "key33": "5KxfVvVeUr8YoAAQbvXStSk2RVDm3aQcYDqGFMiH3vcWDcC87QgAjutdjwFdvRNNF83M84MwTJsbEeLQjzmwkkD2",
  "key34": "2asjBRMkP9ooRCWfqv8zoSJJ1HE9gTpc6bvXE2D5fxHCfecbmeCKaHuXNhYoZerk1GRmRw26pJY3B1RM5C7NZwe3",
  "key35": "2PFAvxFq7m7sUGAeTAVDL5z33v1sNQpCKrTjEfhDRsiA46gojnasMGg4TYYBjRGMKtrcyhRWZdHg6QUye2N1GL4r",
  "key36": "2vP9frNSAvMKjbienN1YXPdL1X2SvUFpWLuq9UjthEfYi8GnrxJ1aGZrqUYowayH75zkqs8PrZAPsi7FEAG6p2rm",
  "key37": "4sPq5Uxoe5yNs8RMxB1pBgP8g7Gwf3d8UTyAfYfcMxuQUviAZj6j88vTQ2xF9UyKtECpzsmkNkSsvzLu7neR6Gz",
  "key38": "5GefZve3DnwMZazk3aFVYcWAVGYRnLYC3cqWXz9cMfREsujXGdw1TMyZmGMJHZGDG94zH82k1UZrjXyj9XM5FLb1",
  "key39": "2EboXkgwqHiBpN4cfL2QvtnZ8sDEv6cdLsSPCwyrpbjkpiqZHxH3joMPRwFGXZNnhuCyqtW1CEY5pwE48tmGuCrY",
  "key40": "7XyR45ZsWxRLZjuco5xfcuMXuhvDa92Q5p7c4otfNcwaqLL9wSMmPhjcAghZqDU6xWpmDkdqjgEpDCEggT7T6un",
  "key41": "2CnaQ1PEvqyherUz9oZRwgotyBmecvzhF7kuBPmC6iejJRvwijMjsuNuL5vyX1dBx3ENN9nsHztXcfy1PjB1JAUJ",
  "key42": "2YVehtHYtYunwkpxukyg21b92ufE6bfJnnFfuRAaFgiBT2R2rTDp6amvVAGF1FiqapsvpcA7Kj1HxEL8SqrQxVkL",
  "key43": "4AFNDKnPQuyEGrDCYZwBHNr75i7VVRvypGrqFm9KZ3GUP44wNb1wWxHTnmgDjgxMXPCQNbVkfp51AKLnxMHFwSzK"
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
