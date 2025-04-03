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
    "5fWR6LRPAwGj596zykh3ortJy5iNaSuCsp4CcF68abUEShCx56QDsRpggayr5CtBccoThvzLbfXxDAEmGXfxArpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T9TPy5PMvkBt8q3qGP3QT9AG9XPa3NNrToKv6tLTJneir5WsLZkvoutk77TGNNESivZvZ6B9oEMoPVvfvLT2BjL",
  "key1": "3Knp7ZfMuREDWwPSLLZb9oigy3TmjpSP31CNrLDSfW48VoddzacUW329wUrnsvpKRmbxFZ3f8QV9DxNpqDT3J7Ts",
  "key2": "487XQ58dXzPW69FPpvRdsX7oNYxX28bHtQAwYK5w1yWmMsZmn7AWCemLQhphQeWdQZwZ6WD9Dnt21SUcPzAdRnCE",
  "key3": "62SyvTTy1SZaTE6q9MuYUEcYidKCiHfsmAAJ1TPuTfp6Et3Eh9q83mxJJLiMqoMSX7yQL4wrXRUUzzw59kqjKSAt",
  "key4": "TRofseiZbi4vaHrW7ah39jYpGbCcL8rhdSuh4A6VhCK9yrm5HxTseLr4jn73yz13pHVBviKg3mbRtpjptwcqL5k",
  "key5": "V1qJ2SeQ7zi4Rr9o2oimwbNrL4QSDGRgYNreS1JzKMQUPMMedDhuJfWZ8dacNyPx6qaX2oUwPnyXFa5g8zFAPB9",
  "key6": "d3aiZrBZCHLcvfdQkUVhwoweWbtLq8Dqi6PisRei7i5VUiKiT7Ni7QvyJ9E3QQwbHSoPVB88Tn588faQCTZdH28",
  "key7": "24Uh5r9BBRFDNPDHNtQmg2hm7YkSRHUEZmCfReLNAnugzYJ9ugJQXoM3DmrZYT9q4BLMSmeyj7NmfHDYSQahQ5sJ",
  "key8": "56CSawHKHWr9FELe8fZWYGrFANUKWQqLRGcgfQFRpXZysiFgrWodv16MQ2FjWk5CZyxHPRBwynqrmMZEkXsXmeKR",
  "key9": "Z2K1P39dG9j4pmmXtkk9sDKzvJUBUDR8XscX47LFYnWi57EtMcWumW8gZyr1ndFM3fz6D1PeXqiefaUf9rEaBHW",
  "key10": "2MCiizUfsQ1einJF87XDbcTSBEamECaULhDqjdfMJkUQhegpt67PiHYvP3qSPVNAvKbubfADhFf3MpyKBRpyX6Vs",
  "key11": "5RFsckQ8btAHHBHPZbmZeKFuaQYcfpqyTgZupK35E6QWgttBMXnq9cQPMAp8CgkAfzhsDmEsXwvknoeAcuihvZRm",
  "key12": "kd3h5cm7XHVN7ZZmcsKbE7U7Tt4bKTSrnFgZGeKYo9aQF78bWc4MzgCqLPLm7M6bmW6kyvXxRdZdDoCbWtAtXuW",
  "key13": "3iMe7z6ree5d4GsYbWWWGZjDzLL7hBFULrfxyu8yL2s3pno4TKif9rmLWy2HaH6FhYuS7SYSJhsmHv8x9PVY74tc",
  "key14": "2rxpAnrLKw55W9ibu2oXggoYTrYH6LyYe9JFbUG3h92m3Xdki7twmj6vUB67dKeqEyfS6JC31TUJfFcSJqZvT3Vd",
  "key15": "56zHDPJ3XetwN3e3JkPn9GTstLDMZxEQ3ANQSGwFg9pZzfsfTxb5Et3VZdGErbJ8kbXQW9TZASoXrQHC33XuM2FD",
  "key16": "24vr8GrM2fKM5M1Tb3BtRCTySb7zWX6hXe5uV1vjs62qh7gSvnccTaoQfpWeErnzwBX6dJRqEsJzkcNv5z7ekhw5",
  "key17": "5xJtTYTdA4y7FJCvtHWYjGkRym9ceMgBNxPm4b5v2ZmbxmqxmpnPJ5pwqVD3ud2KqniVJUd1g7Q7vg28nTA18Cfh",
  "key18": "5fv6HS8u97j3icdY58GtG53VgpsHjTKHmTeYEawr14NohXSdLo7GQzye8D8hhzATiSvB3iMTYpYmyWMwUsCACbQ3",
  "key19": "4ijuJs3WJhzpn6C9patETNdvusBqssMx9UFcxvC5tV6JQSwAeA46AErVtZpAhyDJFfc9B6qjn2yzFnwV7V1Sjz6n",
  "key20": "2h1GJJpusYV2ddYvcTQSVZ1nAMiGhdnpRadCcfKXr5SGtqAQV2AXpJFGfFpFbcmmRnpxcGHdrm4pKErJtxf1YeEZ",
  "key21": "3mA7hs3X5Af23unxmyaEgFpZ8qwMkScHm5CgqWN5c7BgeTVTu2BszWyXXUmK5tkttAVC5wwBNEZd6ckiMTBEJY8h",
  "key22": "4Ev6TbvhjN7yhQjUCzA6zhpKduJZ3WP6sJFfrGMpZGLiX3c3j6xHnKsoLKfv5a1JNhnXJ8cMyoyBvbeHv1dPRQmM",
  "key23": "DYj5P3pvSwjNQv4H3BTpNx6Tueo7p1AfDGgt4wY3gqXf2koHT24vchF7uJPCP1PXaRPCtgNhh3yBTm8fu9jBY5f",
  "key24": "5241f4ZcAL41SnmyGBWavXdSnjQ8Tmt22BwEBf6VByyPEFaKq5cP1HzmdbANaUqfCRhpFZ912wAZAPz9gjZoX4sn",
  "key25": "3DPSXh3T4JtSJLvFWBeGmrXRFiTuVq1NLynBvRYeUZTV1gkTcisr98pnLEMWZUMgtkmmcDuS4EGHewZE5AChyHqw",
  "key26": "5jGzjRDUjifGZHffNQj3fsBGAZ5DCe6ca4tqtRGjrgoXp1HRnvP8TgpWEeEZpe6B6JpQkGCzKh82EjWpdCTazWUP",
  "key27": "5QGReZpWwyz17BTaFtbSqL12DWYggk9Jtp5KP23zao1FPFhvNwg89q58uycw8z1VSai2yjWatoJa5PdD8jknzxMu",
  "key28": "BAXR7mD8guqgXiCGLSnaqHDGLA3cbEaPuSZv2LNV6JgmLwMFajhRDmcmjGahAZVUzMmUFpAomaan2saBAJyvVQu",
  "key29": "3yLGfVtV6rxKiH1JFTrnRhBSTzdkHqFJmLDspenH8n92W8hE1wyfSdNvgMEgeCGZUvhqBNUMD4iQ3gGoGffFZVTt",
  "key30": "JWBcvcJetPzUvzAkusPNw5DGtvZon4AWWPGR3PabgBA16uTwpmooitpDhQ41ELcSK6xCT6VxGmkS7ubfyCXegh8",
  "key31": "o1r5Gu75n3mezFH4P9uBqt6TpEHEyYsXMg3N5zFQ2tmKZ9BFAD87yWp6yUHZjanDnVLju6bU8hQiLqhu1YnintR",
  "key32": "3oe496kbMFZiYhX6s9V6bzQQ5jxj1EGXyTXzyUrNb6TjqoW1BK9bBTczhb7UsouKw8b8uqUzLKZzZNMsqwMTuqTf"
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
