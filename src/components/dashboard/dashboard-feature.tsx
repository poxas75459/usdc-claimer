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
    "5EbjZB8z4j63dRY9h8JaixXNKidPdfYwNoQnc184udfNnrjqpmwS1CRxEtvBpTmqfsq4RFxpAgqJiJizJKtQtdcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJHxqeDdcbNk2uUYdby7s63fGvW6oTvnUeRdmvjNYgxY6eKG3sFS9PFoQyPd8Tsnr1oV97S2wpvov3ZZYgrZcjX",
  "key1": "59Q2vGtohpsTVwVxNzRpxSZttBLKrEWrStGt4y4NigXBidcrVrFWESZBQieh4xqo9scyaX9vWzfLCPzDrdK7W8RG",
  "key2": "5qFqL417pMLTeNXKtH77WV3CE3Qv942wYUNqvdpFRr2SNvJoU3BKMijhiJR1akSsTM3QVRzuK2WArr3tAynLvVuY",
  "key3": "4ygf4kFUtUqAaMHT9gc3xT2QD6nMKQ6gRzMGkoryMwPVRS1Zq2s5abemavLUTDpW4VzDsamxvc1ZYRkb6mY6t6Zz",
  "key4": "5BUGz3Ut4JWnM9CEyhfhDW4rZK38FmuCuYPJFJdtHun5FneoVFfif4yKPVeBQALkEDRbT4Zvi1iw2r7TZTTCid4N",
  "key5": "2hQXwiAKEkUeQJKwwgcjdZhyRWTDJdMPw3q8b9s3wdAjtJLwHR1TgoEnqtuJnruyY6BEZuLuZ5ZFiXkhVYPPQjqf",
  "key6": "KKq1cYW3qqcxArzLLn3SHau54aqjT3LnnQ8gFhATV3XvMibGpDm6WRJ8WatJGDq6x2VpGVuQonpfLQzm54PUgGG",
  "key7": "4oGFwkpNjLmCW9gLxTtdLa8Tg331BD7BHFwapD5VmUEgBbMnUbQDfnefSe3GVZTHnGsx5cV3KxkpWfzmSSzvynpx",
  "key8": "3B3vVAGfCLDCtgFGXfp8exZnEnbwcRqzywzaw6usv6j69R4HV7ACXfQGfep4WGR6papcyTEdUrKnWV3RR1z9LRen",
  "key9": "25S4REY5RXHwphkhLhQPuGUtcx8JXzZDUbwHgT62iiGgjrZjtxAWFNmJxmH3tpCVUFhs7BAv7EP2pi9CtanKBhpx",
  "key10": "5DU1NxjjTV7aVrcswAbk7dK8VVDPg66RQLjSZ8JG6GqGuymeFCfo2YV3Paw1QqQ3SvCSg2pKe5BtwjWkBvHTmEb",
  "key11": "53K3LZkc4xNgj1QT6DjpZU4Xn1HNTqP7QyUe4rxMF8FXtzTA1bbetcvzCGU9azt3bE6qjCVjie5WXjD6CuQsHJ5G",
  "key12": "2YgCFJVCEn6cJyEqs51KUAf1Wd9Tb2rv4osyXpBNURdwi7eakDS46WybTFzNTgGhLfGPXgvddop8FbdkSbHCTKQN",
  "key13": "3DqXsHSVwLvVVRYjysVMqz6HBKX6xTLNYXiJG6aYxEwJsUkFz9sYCfWXdqAhpiwVFfgvhE1GfNKf4dTts5PwDtK1",
  "key14": "5mWFNYvsfF9dSKKWsZFeaaof1YkLL8VXbAA4eRg8U751eMSHqVn3Y2DbaZifNgWRdaUvS9wsbDJevKnFEd9UrhSg",
  "key15": "3mpGvi1r4jSyzLpheNFP5NWTDzfT6AauXmbwvcUAbcKN8V58i13RyUT8WEFQ4rycph3UXitioFScRLXWj9k7sKCf",
  "key16": "5DBT6MrWVvuU5TF6RmrgQo6ZDKnUDGqvYUFPsi2Z2yTERUSHd3YBo6ztX26ARDupBoScP5XpY3ymFveYdwCn2Wb1",
  "key17": "5U6iZw7m3qxuuCXgLUqZPovhN8asoR2yWN67ariBqXQwEHaNJopLptwRLtvPdoZMv4m1Dbmo9ijftRrofsABZ9QC",
  "key18": "5LUsU56Wb2isCyBkS4ZsAYPo4EDXcB3BAcYXM2AXFBaLr4uHr7E3XdUkUEejBcwn4jyuGxihcDgABgqfBySbpe8H",
  "key19": "5d9CKyvbT2CYfSdK723tV7mVtF9qKXqVW8niPpCWDrijrPvbEByB2ZuGKPkbMdEHey5eA6HC22C9mUxFHRSAh1iz",
  "key20": "3riwTwjqv6weiAsErM7zE5vSD9jQ1Ucfu67Dqk1BhrRxZUtpBKEWFm8zkEDQvgQKU9xRm4uXtP61HgQosXqoSPdz",
  "key21": "61QDJXx7dTHzViRgZGyoSSzmRn4eTetcUgmxmeRksyZ711pzNDDfwK2msVyDfMvTHX7vDUf7GkGFJtoZ6DHmc7VR",
  "key22": "29KZCU2mWgRZ6c1RcjNVZVqBVfQkMUkh2NF4vTP8ouC9yuGXtYihkVw6XDXSFGBrpCNCL4iXNgYHy6oyMC1JnSb1",
  "key23": "5ahHMkvMESma4h2ovww7U3ogcjys1FbeBM6a4EjY7QQBDqKcg4KgoUshGp9boCywiAJjTEuP3aRDcDZ2sJdo2KVj",
  "key24": "5i2Sx2iSMH8kb3VELZWHAnJDTYiuCjZ9EhQvsKKK9X64LveKTrtRw4NiWSjd4y5TotdCTS1LHTKNbg9pa1zUHgY4",
  "key25": "FxyXhGhv4JRnUECAusT8qNXjNizdZJ666mcuWkrqUcizP5yoS8qAJbvj8Pd2vm6ttyLVHFXU8g4G5ZvRabiAPM5",
  "key26": "5JJVcP2px1y1mqamFEoCfjGA3JF5EPuAEE2a6dKtoMAxFSH94umgkCy7BJzJ95RCxJ7pQuw2jyx39UaR7u8TDX3J",
  "key27": "2ahnZMHf6cznWUM7UJrdSrCDmEbxc9oudsBFFp1DWig5e61pMsbVprAxJZ6hZUdzRRJZcwCZae4pt2JNxHh9wZii",
  "key28": "opw7sZzbN4rcGtZmfxENEjRnE3vtzhccJpsAsvFsm97SoRgawe9V3ZEXwkhJvk4pBgvewsezsp8XRPbkoVfRxtR",
  "key29": "55kMwXjufrG3GSdcdw2URtgvZNwAtncv6vViEVz8jGRXSk6ospmQPPG9bbgSbTEsZvyctvgF21WCuNHy8cGxuDKk",
  "key30": "5HM3P46Y2M3W36GPZZq1kDDjhMA3GnEZjNHZNaujP4ZDrX9iuxbiuGfKr8Lyrf8WQ5pUtEAyEaC1PnSYmDVRma72",
  "key31": "4z3efXNAU7jiH5BbmwMqQn8e1FrCMFkAMuMEQAbAteRrGuABAjAu3j5SP1jkDZa16JoP4qaSjMzvDGVNsHhDaanW",
  "key32": "2tbiGGrnkXpeHW4zmMa4XFKL5JwEvTVnNZwxUoqWEzQ2enPdseFFZxzswSptpvqwzqzAAUneapNjG279AJZwYpTX",
  "key33": "3dDSffeM1qzK7zYJ4bt1QrgVstGByQiTbPe7DAwZzBMFUwq9932ryEQw9jFhPN7raRyLQbCPJcjHUBbnLzZsAJAA"
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
