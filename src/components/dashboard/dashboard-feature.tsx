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
    "4KRoFRVb8rMuaemrzz9sMXoXGZaGbxnjZdLR3GDAMeJMtSZtQbxZZjfJ3YHeG147zypvFcPkvwfc8qdoXAcum2oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yDfFhkqw4QPDC3yunHqVjpvwqFKzBRCRwrcCaTsahwsJbvgSatp3FLwBLWG8pnwp3Zs9Lo1VmY58UwKyDfH1Asb",
  "key1": "3bvpnLwHxfh98LaT7hJSgye17jNLyMGh89Y61jfTwiQ7C4hApNuKNkvxytc91vXPH9b7FdndGYPSNhLT7rKxb2Kz",
  "key2": "3t2LPVxFBfmXaM34RSUG3LfcoSZTqe4agnVMZzjNt1RFxKsN98FhE46uAjuv2erw3AyuCjmpAmoP8WVUDT9VP489",
  "key3": "5BtXszDzCkv9M4eqZ4KsqKsfAfC4xbsGawtYiiHgXtGF1kBWqZhGvKnNVbt3jqDK4QW2DepwypB1t7J8VVH81yTn",
  "key4": "LSFYKX85kSZQytHfRFzZ3Lom4hSBXjUSiSokYFNQVzREacJRocvgHdyhkCVC2yPWJ6oFitXPWCGTbegTAe2Vzzu",
  "key5": "4kkmegW4Y2XpqZWMd1chcZG2A7YkmVrf4ECrQhLhLgYK4S6c8JobWmGpFEGme3pSbnuTGWteb3s7cMy4LfzEjw79",
  "key6": "3tRuQnZmevGLXLUmYgXw3fB9Bnv7ePv4JYh8kc3WEG85jiSEx8YYyyZ58soJfRFYCWKsyXAqak6wcugug7UXBe9F",
  "key7": "5w3jD4KrckdDJfvURkZ4jLSobzhSN2dzrwdPqDmMHmy7hPUZEunQCAWPdRMm31CE4VSGTJmQ6qMQTd2kUuTyatsX",
  "key8": "3DHWygJawxhphk4tauj79griRFNpzsDYyopSAvLw93fTwWrci1uXzYp3LZ8jk9A3BLyrdG6XoFYSSAM64hgczju8",
  "key9": "4Y3hY8jx1syHH4AXaf34QrZuq6z8VKjnyPqoSUGS1eDaSyNiLRwTQLS8j7uw1YuYCnh77dCaKekBsZanbz7wvj5d",
  "key10": "5XNdSXuim1xT4NVGsg9RJ1ob9tn6xHG2iS7vRzgdHVqtFXgyp34Ywk7eN7J5cxHTTHvm6b7LieedpiGBdTSC8SQd",
  "key11": "4pJxrmtfSpNkknpkLmHndk317LMMk42tppZtbQJU3gYEe4UR1eZBy6Yt6VK8on2vAbhdxBPrW2vYTAU9dnHnQWSL",
  "key12": "2C6rKh5hRTcvM3J9CB8RtZEMtyySSdKYANHNgusymfHeiyWUPQYU7sWkviwxEWZJeHtcX3tvjiU8sx7hBNZnBYUR",
  "key13": "3yzy9q3CdrjRn35sj9VrGV7Aggr7eURxTCM7nKVJjdbanbuKzfNqyFXaAYVr5RU3m2orfctQSeqHajaH7MNprhQT",
  "key14": "59D73mbLFqLvCuoPPYbDxRnzhGAtEkepALGGWBAH9TGUMQmayKnFpbiLC4qUDQvFNQJMkaTiArDjSehMw5UZmxFS",
  "key15": "Vjth5bGMWFfmZSTb313uiVwwWT3SvCGsUBuZEyiNGTFJELqasfbeEtiaEgJw8k7FUa1q6p1dLbF2G2pjhq3ye9p",
  "key16": "4BMxCYkUkrjmdE1as1JKf3Au7ZKZDGAwb4bSMS5GgiwEmC3pPbFDziAbLjSgUATJc8XxkVai94pBZRzbAHZLPUST",
  "key17": "3iVp3Z69zSfzJ8BBnMXuesuyKapGLXAsrGm4hHesUXM56ArM1NbBgeFLmE7DrxDoiCzs1kzWfRKnXxiXmWCcB7r8",
  "key18": "3RFKE2LVoQa6XHPauSnmnukhA5mYXXrAyMrJzWcXY2HX59ts1GKjuUP59butz3XYqjZxzT6CsYwHGydAMP7nYVUR",
  "key19": "55WmGvkYgXuJjNAr5AWX2VJjzgsHorKn6bJRiAkxXgsCxwv5TY7qrPMBXphxcEb2okXfQQT9X6gKgPpgWPASNqre",
  "key20": "2YG9PWVhyo1bwfhbaESUMABy4yiJraw7EGeK6nXFy85gVh6hVnt1dhNmM7DFq5Ge2df4pwvGtN6H5ozPwXwRhnSQ",
  "key21": "wWskCdAqKMNnB8xPdWp2MBAEnjUfQrVd5FamUSiVzXkbEk2MnuHmx8uBBAr35yrLqWxyohMtabEXfgnEQWnzYeK",
  "key22": "5QWP2cMKkcMnxHyZ81wdboYhqAdE5PANwuUJwQcKHrszZCqZGSudvbUkxgVthJvrBoxm5T5Wx326VQZziLQ92apx",
  "key23": "5Ywht7HYsga4kmLDe6g2K2Gq9bKemVCnHh6zZPqhYtYVkSDpa7GxmqHiXacd5Dt1V57Wi6xj4vrE3cXYBCKPr4Xo",
  "key24": "31BeQqdpYCwgoMt6wmhGDzFfcViPpefkhwoVCf65LkNPu9FvSLHzJM6SnRiYENq95juHTP7G9pUh5taLwP3TAi7p",
  "key25": "28sd9Fon83c8mE1XckyDuC9mttsdpnaTvL4uTxBARSCDbp77JsJn3mSjTR99fMiQZbt2nZnkknJ8uGMAz7eGef31",
  "key26": "3CmdeLSFq4cmr6RxU4jPoBvFsCK2KYQHPs1dm36yJ1sdDjMSRzXWxfWqDksXJ1xDRZmzu26a1TVeq1FyFqYtnFhM",
  "key27": "3ZDfpeTWp9sVapmXZ2JkNaybJHXUW5BmbausSHSSYhdJNpJAxrkoEPGZtEAg39YQKj8S2MpgQAKE8suycpw3nGrU",
  "key28": "3kkqFoFRVRoqBZkse6j8GUQFf54vHhhiess9VhAk7pdcaAemTDkDbAfqdJVoofd7B3wzvFhGV5BGktzGaJ21ueS",
  "key29": "63tihvr4cNJgckQc6zbn5dqkLCUNvLhTS6E36qe7UxYBHeoJHvt5x2R3YntwiowLKTazjLdRU8pQitisKLYMkpNH",
  "key30": "2xBjhczoxtecqJ9QGj4hnv4X8sTr816Y5kDEdyUJ3yPvfWXxkJomysPs9dJ4T11Q7Sp4wuoV4euRuhKznfQeizup",
  "key31": "58etXzTf2VLjaGEk8KexkUM6GDRFhpg4HoP2Gc1rgeZUfG2vsMJ1scH1qbdcj9kAXsCr3x5pbTJmfjmgK1EvxZNp",
  "key32": "5vkCewPoYi29jzDow8QEdbe9WoPbEZv6FDr7EJ5zATcdxa841aKWYb5Z5LTTQPmBVve6zE59cNHhkJdb4tFmEvX6",
  "key33": "3BPudMgJmBBJr28mraT3b1ZdyEsabhXkzdeTtvewkPV3Eqmr1jPYdSQGARs3KZ7zPMDE6cELCb1Luz17q2maDnaL",
  "key34": "ogjrmCZXfLhSkFvuPsKEJoBXWhSas2ZBB95Y195NrULC1cHt6wW3kmnMQZs1ULbkRBwYYZj3o77Jb8tSh4KxvZc",
  "key35": "5in2crqPjz1qJdMztyxwF6ZsjYLeqxV1sgcWRjQf2YcrwYg6PNf86PW8MMSLNaTPKquD8S8XA6Dvf36xJFPdfW4p",
  "key36": "cuE2FBEsJSfGr8XUvC9RzLFzxSYzvFzbkJpDv49LDqMajzaN2cJGay8avachWa9Wya3EBmwhLyNKaDE4tCr6miR"
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
