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
    "3CgZPexbtu2HnmTN3hwX2F8qenZroDRsd4QeKtmVncwdcdjsL1FquzfPDztmC7xFaNsVLPEvFmfpGu5AWGMaGT1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bh62hwqU6MjMbSyBk8RTKyN6igv6p15HxWR9HTnhwrvUbHvFR6bmaNEFDiu84Z3Enyqn4oKgFwgxEhp3fqw2w1",
  "key1": "5XhXbLnVENfNBQtNmpRUJcbdF1aVxweBzUnQBoL7YZJvd1AQqXDZ7tYiUmHFiN7rnuv4aCi8kVcmi8DEGmtXdTcf",
  "key2": "2Wb3GaVMbV9XirGMHYPRZ9iQUYHmP24w5BVXek33NCfJbrrZELcWdJPR1AeBC7yr3h2wqpRWp4FS2P33jD5aKMvv",
  "key3": "64j2DBYXvRa3LiPDLkaztE7TQ7yUoJdWDbfD3cxnvS6vHiTAzMpnRGEn8tUHL91yZYVuxz5cuvkVuQufXQqRToED",
  "key4": "3SxNRoK2MD71PXkCn8TkgMph73PCoYi3UFBiNqg1ZfeMpzEtdzp96sKnCGoD3ZiX6UqTjcnKCwiz1CFApLfH7bnr",
  "key5": "VanvoDcTHX8DbQVuECta3hjjkAkMYU6qocXDvvZRrMajZaoWkdLJQpYY1jKprpFrxUtyYjEzdSoHouDUaGAWKn1",
  "key6": "3FjX8QvNpWDH1wQot8FG5sLLxfqPgGbRdJGq4eWeqMhJKbSSgdKCf73qDX1rN5a8BQQTtrEhiRkRF3ZXi6u3Uk8J",
  "key7": "3cjyVwmeYdoHWnL5tQNKoyC89WVRYeppTUoVjAYRYFdQ5xDha8MvgWhNDN8NHVWon1r2vWXFGJsKd3UNAV9BC4TF",
  "key8": "2iWYGA5iAZctQ96WNTGhQ46WJAKmTx6m8poWMXHzi5HQjrGJbHUHoXpTBVQ6aP6JEk1xsFw65TuaAikGWnSfLZAZ",
  "key9": "286CUtLn1XQG5PPcSWj5z69B3RpB7CKnDYwTN8Ab1hr6jdzjDKAaaYVKd2GK5Y85onT7ehQy9Zr5ABo6waUDPHx2",
  "key10": "4Z5pL1t6fXiusFzne3rZmgRVwMnhT3rS4WE2u9pVvubNSiLa6igM1JEMRWXRkCpvurSFwZmEo5QZVbm144AxaMVc",
  "key11": "4MBRB4kjs2X4BY5rqcqVNvUyaHCFwynmm6qD1vKWx8ejwT7mayeeLWtzTXnAE4wftWiHrtEgk5tvZwcCYhuLAbH",
  "key12": "DAYDQA9YyezBdHhYnKb6WuTPjoYExYScwBCZympbUeCLmo4nX1FYeKgmzgqHaT2bEei9TxgXbQvcS1R6Hn2WBQa",
  "key13": "3X5Wh6bvNqo3WGTZfbgK74MBWDN3RY61dmRGaj1GyjHfFrCpv6AY3QrB4ZjcXBfUNhndw1yAUQKPBuHZZ2pxqV8h",
  "key14": "4MKHzey5XKm4TU6agB8UipabzayE5S5UiK3bijHxVM3CRr1dDrtzD2ssU6h3sgp6aSW8pbYTuvN9L2duEos32CFF",
  "key15": "4veqxRHTvdaTVhxE67GSmt6LfBTe8vAvCznrt7EnG2bpwkPa76sjSHTSk7DBV1V3u4Keb9pTPwt7SBezNkL4wAPy",
  "key16": "2LZtEsunAbc9LhS2rCUpdR1UjTGgnJGv22wXZdwf7napcxaojjQ7St4K7RmGPF1uE43znwjcQu7fMLLyR5nvMxgM",
  "key17": "4BRwTh34pQZoYaLH2qcA21qS8yvXtPK5Mr1izggSvz66sHfXwf8BJ78mMYWpWogQpq2ggYqqYykWkHYCG4EhrXc3",
  "key18": "3P8gREhDPNEsxyXw9eJ4FD4GaifKycSEehDdSny6RvaUJaL1NY4GUmtom2yEy8JTiiR3ifWeyD65tnaTrxyXk5CC",
  "key19": "5mL1zjhBovPJwpZokAB8DRDrTAJijX19bgS9cmS5UXDi26nFEoKdERTh8UhzdakpGSeT48jJZoN6nA3WgeVVMMSB",
  "key20": "4HoEaBMn1T94nWXcEYih1gEVNJ3jdfi6sV1ipin3hAsG9qAivvY7vYXQMitQX2U8xjF36MRnENzA4a6MR6CR8qMN",
  "key21": "3KcoAcp1Ch7uSCCUxodEHkDjLDJQ4fWrEdQ1cUG6tXq9dog7LRsqcR7ikiZXBppJHmPV5iEQwb5NfVJFz2g4gaCv",
  "key22": "2baW19sFx4apVz14xfUXoQYrhLx8ttQE5CZZE2rud4qdWfvTA7AnMqzmiyyqpxZwxTGRp2oHZVyrQdRMYU6vrZ4N",
  "key23": "4MVUat9sRpmJvLrEJSNGa5rGaUeRTusTtfVAKT3CwjUnYZgmPkCchwCzUQxaiYdTApfYSGmBpu1ULdXmrDGBcG5J",
  "key24": "4srAXhuQHfLpkzSEeGJG2poGZxp8pdddwni82vQzFcep4kcPTz1MXECWjNW9U7dVN9jYbdQWQXtuGPELmz6nzSnr",
  "key25": "m5BzfC5FwR1TLfD1mpz9q8fecXifrQr2f7WE56QCrbgKwUbfAqWvP5Z4vw9kmSGbuMXoAE1HFfakYduya7EjGEK",
  "key26": "4WvPNP5ZzUk6YLg3bdPms8HrFJtAEmttnQML1ncq5TAUYfYYLkhwbp3KPe1tBKZ4fVZSD4EhDMKdRGx4uPsBsqPB",
  "key27": "3De6BCSPG3UsXLgfU3UDt61ErmoSVPPvP6MBiVdaHQ3XCyVdtqMwcV3zrsQHDyvCXDLhRB5J33d3msUikBZSoY9M",
  "key28": "2cYcmzZKHR7e4ZoyCKSJ9vYMsbbikTEv5CtaL5x6ZHvQbpxbey3fG91vyK1YyZ4jb3zwZt7tSszUoJu4LRRkPmYz",
  "key29": "5ZcJNdu71d9gM2jGBtJfLuR97GGmUsbrhL1gwp5XAT4xMdEr3GL58Eo9zoMRc5zJh6EpCJiLgu3RKMESiVKmUxqY",
  "key30": "5ivJMwTpknXixwargksexnpnJHi4UakHNsRgcWnuoA6RHZjpsii8q8N5RXFT1CXhb3koXXqM1riG2J95ymAesFQj",
  "key31": "57bVygo9uRwT11mvtrJPocBQgWou4wro7SynDgPrknMQG3DTEzhFNQpPt5gXRakHrQTw1aWjZV6Ph1oAAkJg6t2m",
  "key32": "616CWJVHawgU1NmUDnb5aLbJcHV2Qn1gWuWsNGMefgGbm4NEm7bEE7WAtMQHKF5s51ZSxmNUysvuHZK6sfxd6ZB8",
  "key33": "4qddxPCbZXkZ1n8h8Ebc4bxPZVgRFUEf2A3pDmE3q4UxkdVBurPRiDPs44WEDXgu5nAVJcvMNNB42JyQFTUdptgc",
  "key34": "5qUusNFQtDJiWRUwiNdqHvXa7pUdwrRE8K5iRSYyWtAagrzmUUkMBdtSiiXfnkMDi8XQu5LHjQxeHvdGbtADUHzy",
  "key35": "4SRsqFnyuDtSvkd6xjsWcQKWdU3mER4kxKgXdVgmqbdDrjNf8eyzqeYdfN5XbFpBGeSgMAPUE3VtxdG5AhYc4M1T",
  "key36": "ZT8HqvwxTYxCndWGWXMMweCvPdJbpUu6DiGjVo6tGJgokagLKrcVXSZSPWQuJDsadsXtfDAFLS3v6arBo6MoHYy",
  "key37": "5wCBRaeAcELzmS32V7uHWCQx7XBSKcmzC5K8rTMfpVHKekuSwJEYWWXpk7xb4bzFVAQKgFFkiLToZ3PBzRG175n7",
  "key38": "4QZ6mToYPRtDW3MQkJFyHUJcp8hFRCytQ1MHARvxw3Rp64MDU1oAYykcxw3CDSLGZry19R81CJzG86msQuUF2LEr",
  "key39": "2N85VaAmxmm7k3f1rkbLjbdxZJBUBzWaKyoEH1rXWE1jRrsBd8WgLcpQDK8aK1skk3has2DkLPsWr8qmyhm2Di2f",
  "key40": "4WkkP5sk5Nr3ipAc9EnGHx3UA9hXf9QN5rSHmD4RQQnZc1aoEWhu5Eh5qYCnW9Lw8qUJmwjLAiueWYSgo8DgWcHi",
  "key41": "P7S8Xp26TZ3BfkvKgkoJpPA6UKmtqyRHAxavf8VyyyCnHYtmd3EjV8F2FuMKw5u4QCKhpU1eqJzs3YpS2B46q9t",
  "key42": "wJXuT4Zqx8urgpiftD4jhXMTudGx1kUpFP4ECPheo6w8K2uHyFpfPCLxcpsTGRiYLz5XZUXUNuUt1vYqtWnbB2Q",
  "key43": "2SEqVe8KEerrAeB4J5Bdv6nK7BSf5b2a4xHviF5nKopqAdRdit3LztjbrrWGEMUVV61YgaGsjFXt8e5mARJhJk4r",
  "key44": "4ey5uT35ZqFjaMHUov2kLNHAAj6raNh3exyrwG51gnhZTgBfdf1gLWBsYsGd5w21kBWLU2ETQfTeiDcN9kH8m2VM"
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
