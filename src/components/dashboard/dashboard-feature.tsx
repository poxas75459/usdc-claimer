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
    "4nFEcTE9MNPZXDVSgUs3viv22NfGdcFBM1PAxyNR36eQM1f61apDjsYPNUnRaeQjQNN3nbcUK6sL9Xane1qxTz5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJbAN5FPFkjJvXRkxj1R7xBduA73M5gQS6WX17u1UHBgNGwcp9CtQDhYPNkWZvLBHxNcK5jEhGppTATmCbnrxwp",
  "key1": "6sSs3p7H66HGknBMNH4LQ2YXPHGGaLwg4Db2PUjZojcRy25VtjzDMLaf6ak7xQb89icB7HKcKG1faFtBwBYUoix",
  "key2": "2gG7gojWF8EoJTftKxEW3GUyRhd67kEG1cBShWrLR4J6nW3N6p8HxZq6ockZgXajpeEkrtRSYFCgVXJawhkP5RCP",
  "key3": "3aFfcFAiszGMPjupDvE3DWRf43LwKEJJPi1p1sxiv4ona87sPb6dQog7v2KqmmdB2c9oLAMPqTuKibjExZXwHq6K",
  "key4": "4xnoBgLsXx5UJQZ1y2zJECfZ8AfgpjxVyDsGaSiGNHdmZ8itDcD6aLKQU7XmaxS9puAQwVv9VoZQZBTV9zMYe1c6",
  "key5": "289EiZEyFjV6njxgSQpG66d7D6DuWNpueud3r5tUVmFh3wCApYhn9z4A7jzF6bUWxeUdSuLHpVTCEkkLt4p9E9fk",
  "key6": "4veFX9CkVF8kpddLrBCzJZtjrAtJJzsg44d7o5u6cmdMzcA4nutKrSn6gZaY6HrcLTw7ho6VmRRCrevfRrWeTS2q",
  "key7": "NbdmS2CrAK4r7a23WhD3RRLeU6jtd9M2e6KTwNzEevFQu8cGY7ShV851CX8CDX9CTqmVJfRkEs97HKndWzHJ1pR",
  "key8": "Dkrqg75wPEMrC8LDECdfz3Exi3xukT5JLfog3Z9ijxDFRjA1mA1U9nwGGJvq4rFJCUgbsDoyu1gjDZs4BE9ZSyG",
  "key9": "2psWWDfi5W5AR86eKdApVAGkya1huupv2LZgpsEUSyeaDA44oTrtDKmZr6FshKfptkVHXhfZ9Vi1wj1KtuLrf6wn",
  "key10": "qAfRVLfnctc2cZFmLoGYFEJ7EY9boeiFpDU66ywGfmGP6FP8MQzgjUQDGkg9PzJe13jxScju57RF3jfawtESSDz",
  "key11": "124B4aA5YRjq66URbzbEWzkds27WjEmjjsCikwjujAZDBECUjSN7Enx1EMzUQrUwkXgyvsokxbEGyYJYGcCuAbfF",
  "key12": "49V5XQ4QgCFgxw55SmA8hNGyo212q8KxCvroyYpRnfT7bdoVQqfkJCtiAhKMSeuSXQYcRHKPXoa87ZZTZjBm4bYW",
  "key13": "4mJLip1dPfGzSgYLhjTZGRKGbwAzUWdFDuJ7YSS2c95j6wAyrjiezGaERE4Zs8fXwt41iC9shCxGE2wwQDtFZyaY",
  "key14": "4sJTKhKC2eLTKR9xSo1vbTrHQBrmnPetmGqKDwNSa6MwCLToq6Lce97QDoWNmLMup7bW86k5S36TKVv1YaHJRXfV",
  "key15": "xwNooLPXheyzB3rhdFY7KxcX4Jzk5S7Zq6g9S1XodYAG9RQ4T2uRmsWKiLqajyeKKk6kghqXvPhNZco5KD6eYRa",
  "key16": "2gnM9fLTJvCQErVyMp7RyG5PrPbQKjNbWBRRECMbJ9BGJf82aQBs7NpQzUhWzTtjhiaeubBaZNNo22Lxaf6YP2B1",
  "key17": "3fAm5tUGqgZeHUxFDAtDNbECMsVEa2Pp7BUi2puUXyuF6jykV7jB3ZKvriNexfyXmiDzuAAYNWVXaAF2nEZTAP7v",
  "key18": "4uWFnVHf72z4wp9xwzVVtp6sR4wrFAXjUXZLqB7k4CoMjvdBGGcgmJfQLXdx7VaLuLoAiu2YH1hrGjxdJkGFGeS9",
  "key19": "3AP9M7qCj6piMsrDYELx64yz68ix8w26GAmKrP4wq9GUouVNmrhyKWUp1M3juJtefK5SmYG7Tpv5AhfB5naCRQKH",
  "key20": "bzPGnW4qZq7guMu9x189RJoU5VqHNzYWr6GJjdounNhFW1UxvEJT8L8GJWcX6Bh6r7YzCPaCSZWYgjUjcSgwdQY",
  "key21": "2N6mmS3DigHQqVxUX39BKkFq1pAezzD7saVuHcmhVfd7dRpRPit3Z5XPtkdJhiuCiMsPrACaxYsZ2pBCoLAihJUw",
  "key22": "x3ws5UVi8NeN2jebDQzZtxXxEcNLsbMy2oFQizezHVJo7NQQMQMSxrQ88caHXEHt3fJCkmALUCvfuYtt52ZrixH",
  "key23": "2weyWzSqHjEmsv8HRXktVr4VyfzR6SBCjiJ5nftGc31mPyxe6p2pVGATCGCNxreG1YZACrt7dqP4qr3zb2uHLWxb",
  "key24": "2vRSDgsW8gLia2hmDrQxvVMKueJJgzJRV6CVwAxdER9oEvScbiKn92qufW58gyXnt5RBHN5monsXLDgAopUcZRbQ",
  "key25": "5U5RaYsXoVLCjvZF6VzSpbwGhQhjUwFnjArYdc1N2KoHuLDD9E3r6Jhrj6BA52PzqaSj6RAaP7x3852Xq2puf4Md",
  "key26": "5W62apd5j7RujnavzsbZ1immN2zHTwasmGCZzkr5U3mCNB59CcUDZopmcwJ8P6pZTn8mPWc1JYQ88kaxGgPKppLP",
  "key27": "5UVs1tvke7JCwoqWJ9YsTbpgCwmLe9AFekoNQwE7reRWgqg9WDGaeBEvBNBVytQSVysEygKN4JTDBYTK1etznyjU",
  "key28": "3uA5QNVqhT5q41WKc3MwigwHFchghjAef8tqkfogEb4XVyGcGz6822zA2Lk3QLRTCcmmixwt7rpYfbnePQoRqch9",
  "key29": "3uq8qV24iecB3SYuVsRBb7ZwTr7Wdmkpvhbg4iD9qxEouhQTgKAy3KaCv3jKtJu5pMEFrUQKW4j6fXG4MWsn784W",
  "key30": "5YcUmRiw82veGAyJfYF9DRRXK6tEmD2dAKPGrVzkUUBq8uB8WKDfoR9BnTcHvJ4sPntjHngsdZc8ABxePuZMpkie",
  "key31": "YQbB6vfQX2DmXt2mEMNwTEtbRLFdqVL9bLVTuHsC4a7dkRFWtXkuufZTz6dpD1rnQs1jqj9Bs3puaJu11bVJvZf",
  "key32": "5UWsW2iNq62LCckodjhJ4EDdyPWcbXk7AYxig25zMK4LbnuK5NxoLiN9DGJoLm4egC687qqKdemkUYPFHf9EUrAw",
  "key33": "4fHdYb1mp3Qc5mZ7knkKsksGneAk3edWxVwU3rjgfRB1tuCTv33ycMvi8CPTucPGanpAGkvqhqMGqm6tPzEbpR54",
  "key34": "4PbgSPhfhqcJ2NzpMQJNcbgjeQ6ZnmhATyRGfPjWi2rjkYk3iocGysD5vnabRN3WWiQYRZj2nsM8vJBLy9UZNYTC",
  "key35": "3CRGBVdfTqQ1M3QMKpAmbJ4ot72nDCENznMXbSn6v8c5zhW3dkRWDbNCLiTW6oG8CTfzyoGjbiyvRRCv9SkuD4fh",
  "key36": "3829Jr8AsbK2RJCuhxNEHctJAuqFwHUrwH3v3KNzaaWzmkVVTF3jNF95nhysPo99fnDPyBQt4jSe1CtszQsDbVSp",
  "key37": "64HxqwtfWHkD33VKazrzLEuFWC9mcycoEjYnK1fSfo8usGCBzSm2V3sehQAoRvCywEhXiU6p6FzYiLxYLLizU5ob",
  "key38": "3b1RyDLe4ofcB2dnSCXpjpKzrKYwbeAPUSJ2J2bKcEVY9oeDimTr4tvmDD7pKoibSmWf8BELDfWeH7iKUL3SqiCa",
  "key39": "5G4yFie6yAsCogjzK63AoLPt4ajNNQBSijyeg8FC9WgjFFaM8eXpJD4eqRmYB9eCWAfrXVs66jWFtwowxtY8x66M",
  "key40": "88fk5vKtgtknBUgQ5giU8V8McJS3PexR1a6EFH4JHy63DZAsrjiqqTeHT2JtPRPBo8qb1YJr2UCd7R5ooVoHRNu",
  "key41": "EJuXCG4pJwh5HYuNMANFtfx1CMaZK1wg1NqivMLqCeHws1Zw7NiCJy7mi7JthZsX3c4tai4kDjP1Xg4WAyJ6itx",
  "key42": "5hBDpGfAarZXqdcJHX9YkGKoFJx7fXivBJwCRY3zi3LvSXJVpvePv7DPbo6kEEL2KUmEDRGZdnLA5Vqbx1kZCN3Q",
  "key43": "2oxsv8syYvsfLVUAzt53eBktRkjabmZknNQNjvNUqPKyUL87w2JVAidYjDaWuhiauc25sWAw1fBDZPimWbtTs1wC"
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
