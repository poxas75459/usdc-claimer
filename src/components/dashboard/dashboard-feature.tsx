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
    "4RJCuVCNGyevg4ohpM4Yx7L5FRuhsSiXFEkcunj1cmb9S1o8DyWsooa2iNNJQ8R4udUbdbZZ2mH9GGrKeYVZhDLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGs1wSyEBzbzxmUcBMQvtMNRr3did2Wyy6PraYZXSxGSNzF25zsZvYByobUhjACqmMxsw8zm66n5oHWoqzAdSiY",
  "key1": "59Fo92DUNDj749djXP5zp6bBchA7dJBxm1VA3w9peAFg3e2hhJZcnJ4fwAwsTntegSoURvdDEF9WFjycwhQXp5Du",
  "key2": "3qauxVzrjDaxYEpF1JQ3RWmZdouT6wr7iDPgabdTp8A3zMePmpSWY29DeQQHsrdgmK3EwxRMT1rrQeG6mMt4vntD",
  "key3": "4xRLdNVKZ46YYghvWFGzTyC5H3sreb8CukTTJ5S3WBCCWPVTnj1SwPXmLrbVYaAB8vGeLfYQf3kGgt7wWph1on8B",
  "key4": "4AHkRzVYnz228JRTscR52deciZCypEndMnuwa3K6TiXquMegGa5EVtxXkGnMg66vmg39xRC6bSnfS2AKxHcDpaaC",
  "key5": "2Cu2GEVBSrHamsVad3quzWoQgUvHzJXYd4ZVTDakUuqNqVAAmFxy5XYGpEpVUwew3qyqTKFMnYsuuyeRLLVaS8v6",
  "key6": "3LFxFKhuZTXrpmadQexnypVFmoJaMCMSp2bgan93phY6Yiw9WET67c4hEtKjBgtPJGQDgwecLW26CWagWH2Wb6Lb",
  "key7": "D3vafDUx47aBtHZ5P7nwVRZqxTYUgSyGhbhMJpS3fkgGNsP3GGSzgV3BtYbDCTZcTstTkkv6AGjpjUzyrXJhBqu",
  "key8": "3Zj63mLm3BExRqKKK78GeoAx9rGLZA2fFN5LKxaoDAxLQYza7DVo2qHq9UhHLxmXqiV9uyvsMW8RWEwmijQe3JuX",
  "key9": "3WxFqL2T7rDWhwF7iRoDwBbedAKhbqkbBmVScNs27CGskHRBWd2Sv1r67YzLbMhjGkfotGQg9HtWYHLELahHNULj",
  "key10": "4kSNL589QctgBp1QxSKWXqDao4vwrs6WnKuGfsWEPw1rQEnXgFnL6sF7SG8jLg7rRhWDhgZzsLWQRb4f8RsH3d5J",
  "key11": "3Dscb9u1WjiwM426jpQ8DYcPCzDaZtbNkV1hVtQHDk8taSayqjPxLzv5sNKaYRuzNzptYLD7NmeunaTWvMzUNAYj",
  "key12": "2hZfduLgruF5WLLrdFBnnfd9SJ9DxaJXpBRqVfCxGom1GvxaHGrfdmAc6nua7saCUTPtcfx2SktRbbhVbePXUQEf",
  "key13": "4DDo9s1Gb4fxUC4bkLZQg4Cyg2Ut2CtfccqbeK2fkNjaHLc7ff8rWqUrLBm69MMMhjhCJppmm9KjGy2N5YXEwqEH",
  "key14": "4z9utV1NTrqYptmMWKX9prPtbSkUFxkDebU1rBpYLwbYEgraRbGRr6YeXDVZ1isw4kGJ2P414bCJpscXLnmHnbB",
  "key15": "3riS78rDa2VCCssh9qy9dG3Z98KwEwZ64d6jXJhq9C7737Cw9vfJEpwGToNy6dKcTPfCBsAUryjttrnVnsuR1SM1",
  "key16": "4YAmimeAxgdZ5G3PThocVHKuNmNopfYHSvLuC9RoobPLWSTuGRBNNMVHSers25dDTKhGiX3H3s3jroHCYRnm7y7g",
  "key17": "2vJYcYS9RmJsA5XFnJjivhmw6u1N96ahF8Qn13rrYTou8nAZU5mUHthoT24yYYHSiXQoQMwiLimr76YMYg9MJZmP",
  "key18": "puMJdMBeCLTnBexca1NgrrfKhFhLcK7FiifPP9gzShpzdCdGHX2V5bNDhBKHCL8PxgdKn5WHnrPkF7N9nw9ypoX",
  "key19": "5eyJPyBZvVzUeX6sYwaeoPNXJm454WichkzsGZaMJY8pCFrK7YW37ByGvcee6y3F6bf9zVcN7ofz94S6VK3QLCFM",
  "key20": "wNGG7ZK4XCKVneTtyz1iGkFywpPtpzHoZGZq42KWy7rHPPj7Kq55wEcYtjSWuLdyqfMYGnuY8UbqiFp6tjMZE77",
  "key21": "67FakXAapwzPRbQHArmcYyGk1D3Srw9teDy19DtXgKDArTvo7ZBxWNh3UueffQXuyJSFwrBN4b11CcenXhYxSqfj",
  "key22": "5oMZMi7Uq69yqZs8yf4LLE8riWSzuhP9xoq1G5hfhxFxpUiyskvycdVVu7uaBHJoEvkFXvQM1A8C1ssVQU2Pcp3K",
  "key23": "GjsgvZZjCm1xQXcBv6JvZnaEVdYoFLEZBMnb42DBXUCN9cKcopi3ztUGodQ8jzWfBGW1e5RdxmGvrnP6SGMQoBV",
  "key24": "2u7auGP7mAkzyD4cq34dUZyakyq9iwWCZehFiPb6o27rQQycntem3BfTvPukX115ULk86pPV6aeW32YibpRdNd1p",
  "key25": "2msuYH3aD8yKS3QHTnsHWFWT68fTrz5eQK5WJNvAFr8yLqatTRrSVoDD1LbwPPKyaTxGJjdWgfLjwxtHM2o9SGLc",
  "key26": "3n3znQ4QA9PLtpG55LwZR3T3cjn5hnGZprqpoDGRWYHqh7dqVaSmCivMQyUiT1CPknHmKAMMjuG5S4Hmups6pUry",
  "key27": "59gMJSYcb3csHznjEK9YnQr1fHmkpF1AvLEqRiH6cRpM756u8ndZ5bQoeeF58ahzoANfhsXaGY93Q26JerZ88eCA",
  "key28": "2Li8sVyFyECE2HgHGzwp1uFTxYycp9yfvCmh2eD9kBV4YrPgkXWtSFq7aCvMtR3hZDNfAAcFArNd3n3HMn9rbxGS",
  "key29": "4et4Zm7yYLjtAcMTdi6Ugo7iej6M8SYWUZh2cA4g292W8MDVwPdwQETajUVVj8R6jLefsuU2Wybt4yU6gPiqh1to",
  "key30": "2BXiVLqR9EAd8PtoaiwsZKbqmcYsCNgHbYKcDbKvdTmF4z31sW54k5yYyGN6Vrc85aBL8zY5jqv4RAtSQ8Upyvoc",
  "key31": "x5vfrxAiB1TwMouVeTrr84eVcnZm9ePeDhkCTRH8AKx17FmJmeCsQoLWbRfe599NLkM2sckgyWBoB9pWAXuoKXc",
  "key32": "TDGiUVVL8sjga8G5yEw252HbXnagauFfoH5qjyBkEikZcz3ZdePJDGqLeBNCGFQVU4TAy55XgGQszLeqJ4didxV",
  "key33": "PLNoirW7Q54WRVkcKCe69gc8GsEd5hLBzg2q2MH4AT3Cap4NvoyBvM32ZRtfGNEmv9qN6AzEBPkFXpPNYbBcHzF",
  "key34": "2i2jpA79RbyjXNYP2LygWSQ7K4Pn9fuRk8abjswijZu1wd5xz4vqVyTNZtp9j7CZGJUJzni4a2bY4oA2BskBauUy",
  "key35": "2a5oaMdaCat3rqau8Pp4W6smzv9fcnwYSsnX6nGGcWvAn2m82qLFtvuzCsfmHm9gi4fGekpB3Ak5PeWoR9zEJoTW",
  "key36": "5iCRmtL1d4DDSxz2vvanSbiRHyDXYDpsaCV6RTarHQnXGY9s8LKwVRWnvbHbEXp4kUrehvPwJujtXs6hHTSG9XyQ",
  "key37": "5fpA9gVi5BYXszzdTykR9FU7UobVp6LUYT764bCzgbe4J6cKJJ3nDmR1roRCqp1Ga11Jt7sK2ykCycyzT37znsbC",
  "key38": "3Bc4jyx6Nby3ZL4xgv9rMSAS8RLqgsAYKkJ6MEwDcULFDqfSRkStSYev73YSZKMZh7QVXg4kPjHrVeVPmUGQW7L5",
  "key39": "2XdzHzFeWTYBpcrEXmNSEqVfqFyfbYxf2YKP8zztwc5piD8HnZq9jyU38YimEkkMQ2cao61T2CeQcJW7iq4gxp2o",
  "key40": "4BJ4GbTutM4SgQAE37c4G4d5xeHo14qgLgoTTkmJYSwzoFPKNtVfbLAJtzxBivyAfUieMdbdYSj8P7SGS3BfyQ4L",
  "key41": "49RNQXyXCA9q4wZErQ2N6v2aAXXkeVYuTZDjFRm6rZFAPn1hrBNHKXhHewX5nZcEYXQkEo6xFv9AEGUQKhKgtuDY",
  "key42": "7ckd7ZqvuCytsHgEjf8b8LGyajUaRTbk7tdBnvbrsoajFcFVe1BT7xTWDHjhg4Ec1M1zXW3Px118JDhphkgUz6J",
  "key43": "66ZVDJeM2RqUJusGto3GBQgh7S4SPs2z8XpapsuUuLqXszeGnFJSxAhm268CxyAoNQ72xkq6xqY6ZNBD9Ugqra7P",
  "key44": "55VuNoGXLYNiiBrdmhN9Q9oVARdzU4NR4KKPDKF5i1H7ENbL1Fv6wQKRRGRvHoCiMynpZvTArj3qceidY5mbh4kL",
  "key45": "h6hrL3yx42uCYRb6hSLJ2NUSo4srDjEAsXnf9i21cZ5hUypr9UU9ortA6oGAr7Y8ZFAXXYrjP4MAJDdgjsTy34M",
  "key46": "NCjiTjgDyDk357AyU1VUUJLoMSJnnZwtzkVauWHGu2pXCtB4wJboeSAbDgYGkLcVYTsugmYsnarpricZXTsD5oT",
  "key47": "4zvBqJbzUX9ZGwAmzznXLLktadUYFFKNz6REuH71QLf3dSAWFGygaobk9MXoGBxGxxCDxY2NWKrKgKfgw3ovm4kF",
  "key48": "5WEk2KwZQaHBzxfDtMvizuAf7bbbPVqG4HSFDExZdNz4QJbcRthxpJAmdkQNJRhjCj7cBhjoBzSDr67GRAkoz37d",
  "key49": "3PW7tM3BCTiARBRsZKnxnABpN57VUYzEanPr61QDZQDW3qRQz77tAdzHRKUWpffgX5LJmwWp4yvGc46RUP5dC7EP"
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
