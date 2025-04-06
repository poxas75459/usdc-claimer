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
    "2naWWRSyP16c6kZCs1zoGWBAVStxKuS2DuViuWtixCGhjvqHFDjE4W5uRiFRMYcxvnXAfiZNhGfBkGPD3G4oRsvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqe6G5NMfmwDpf59uq8XBJWNfbzFjRtQGGn18Xp9TgeNiwtZvq64cxy2verReTumgS5izzuUvkg7v95b1NSDJQL",
  "key1": "2FA1iDMenhLAYit4Gb5i6UHELdfKUGXj2J3zpqguYxSRU65J4wPAg3piYMMDXqrsxgVSYhsWj2ZJrWj7GZUbQr7T",
  "key2": "5HbJfHz3gUyMBiTRq2z7HkbmTCf7TqoNhypdsKdBfGg2jNerNj8wxKp7TKb4uWJqeNDSZhKU6nVLERNEkkFHpvBH",
  "key3": "2mGETgMEYVuw8vV3jExTCKvgaewfmZubE3xCnBdqDkvo55MNoZQjkJbPqwJSostQ3RZ47noyzgyQL74EXJacR7UX",
  "key4": "2XA152DotQzQs5748QhKUztXTQkGnyYyzfncGhveprHw8tpaMKhTLhi6rpxGSQsVBYpnk4Y6KznbkaYJCSyMcu7R",
  "key5": "35dw9xguafg8VQcASf3qnXAzxrt2rqw8MhPdPcd3uKS5WKWu6FCbzTJtjoXsAZTeeWwqkhGxGgAaUnztAUa2zwNP",
  "key6": "281w5HZGYBZ7PoEaf8YKNWuPbfLhRaPc6JwRrABp7Q7HS9w9KSH9Doo9hPLL9jVZfLuqwE7exZoiBMF1XPDxWphV",
  "key7": "3UJG5VCL4tetKiDvgznaL7azvZbRmRKSaVahUQupPR5Xege8iZTAzGDYcxThpSz44fzQtokHowZtBTCsnLQnnjCR",
  "key8": "w18jjVZePG2idjvUufM6Ady7Liq4tQezdQPQuGfpuDULybr1zeHYv9dp4Y6oJHJfyeWK8PxvXFpj1nZKz8pXH7L",
  "key9": "3BDN6Ajyhhvp6RAzcvepKr8udVCFsFcxkJcFPDHUsbqkvJoVQManwqAz8JPHBVhU66CEQiNnMkpV4jXeQY2R3goY",
  "key10": "AhfVBuXeD6kuNUwFWu891R34rjaqY39c6oeuX8f7fxEDrcYiafeTE7ZCkhuUsBa5FveSBxZXZVY2m875waAiWHZ",
  "key11": "63EGYUV4Bim7Qur7X1uKCzGAty8WU6bzC7VTYEZ7swaXiRjzrmAFbXQHkaadtkayPeSgRharstxeJRHxJeFm1Dch",
  "key12": "fckUW1faahbZ8jgpZL47VP8F155YYmfG1rUUYEjw8ZHoDcraUwHieoCn5cnMNBMx9vrvRgRu2wbUVJaH6auv4dW",
  "key13": "biCbCt85KPDKNzQhExPEmcBPCcdDa5TkShrxabwhuUjCA9xA48aMUb3qK6RnZ52ZH8tPHj7KKaPFP5dMzWduRNV",
  "key14": "jhEfGnGWnfWG4uZrkFDXYC5KQtjygnaAH5NgiAZTjVXpyrsGiqPYByUPXazWdUqjDCVBpjTeFCZSLBsjajjcE2Z",
  "key15": "9iWaUwauvSufAxAR9k5A4G1ADbuX5REtzmrY7V1LxjBr1cb3XqVLXtRm98GJoHFB3RU5cukh2nUePVxCFiggpRW",
  "key16": "33FVjSz1HD4m7YQMDdbbd55X1XjoyqyL5QntBCWKrzkvcxYm28NMEU8oFwy2gtkwKit8dERDSKKaN4aU9qupSKRQ",
  "key17": "36ydk9pwbUUpdiKy8Q8vp65sJrFTHR9qvA7wwgxvfNFBLzuWaujBmVd83VgdemyoPKyPCu16oFbajz2PLwSmiZsh",
  "key18": "61ShtqeXgyBeegbQDtxZ6zRsK9xtb96Xtv7aFTQ1HEE7x8PvuzyzSv9gSr2KCb2DgR4HWnCZCSd5YfmgrNRr2cPZ",
  "key19": "3GdsHsRSmMq7W5RxYKD1yF2cUu9QRURFb1W6pTUcbKULG4MTTpHebWJBM9Q3ftgN8VGNM1hMyVPfZBhRMgNdNNkn",
  "key20": "4htnBYRzvFfXcoqm4NJxe4hDMGgQnQL9trf39UUJR8koRHrYM9iccobgmgdXyqAD1L5YNm4pEHYMsEvYbqbR4Hz2",
  "key21": "2exaKHeb4TrQAjqendhsFVRRekSm6qbFfsEP7EczVfvUqfsTveJv3MsvtTquTatDDKdJdq9cBaZNYmQ2cERVGbGa",
  "key22": "49DfknbTdPDizfLKNQJMJmjavUdC3uBbo1iWZZ5cHa1NiEXrJx2LCL9Y2WrfHnz7fbWeVaQJ6zxAZode5XCwCTcq",
  "key23": "QGT3EhjaMccvh7JBqVHs2ic7n7J3iD4i6boGMch6FjrSJ1KXfqf4kXVM8svCSs5SqVuDWUgipNHbrqVwSgh5LnA",
  "key24": "2BVJvLw8iLNCYUjcN5kvBW4Gg3ebE4cqHnSLKmtVtns4LYGWPFXbyWK2v2xGp5GGRT2U2QoBfdQ8xeADXd1BTqtn",
  "key25": "46st4q7rCjWekBCH8Ztsk4HyTqekLXnTDYq5adqthC5J2tVrvwhFnmDvJ1294tRfTJ6LzJUuaKydY74HgE9DQJHo",
  "key26": "cq1WL8vhkca5MkGFtSHpY4NuMnCr1Y2Tb1QUoeVyRT9Y3j5DXZu2bZu3spsFYEC33h1AnuKRHtcDitvY485Suxy",
  "key27": "4D1DLigzve5MRaGLowL9NdRpZpa848ZZpCVKT2vrXkRqW8T5DbHjrwXfpzGvoAJ6KY2N7TkjhcXhRZfUEcHFFqPx",
  "key28": "jngnc2pFMYe8MV23H4LNCqGjfLh4a2XFnm6iWHLcv2KdHGCCkE4U3SXYCNgiHS6hjUSRjJps5b7BCNV2YnRLpUU",
  "key29": "48CDaPa6nsiDpXzpog381TNN9Wbb8ZvimZBAL5s6hDfAApkDyLCjQHUdcgCDpbvnYfy51ddcZN6gZA4QMFxfQ1Yj",
  "key30": "4UD2DJTHxBY288ZpoMs3AeZP4a5S6zc6ToxeMKAuC3wTHPbVJqpsfj8YM53nfzW8WwpXCHDmTLxS8GMb1NwseZMs",
  "key31": "5rwGEhoFq2bsbf7wWftNEeXj8hiTqYDoKj2UHG6AEx4Vqx2fLFn5Swf6UBfahZuA1XZ7HTf43dcgPuQbX18ZSuKr",
  "key32": "24StRs6YnpX3NggN3pUkY5gj1HH2TpG6NgTvYAX5T6F2RHza8HtXkJmxrBLXaGKPJJjn42XDU8LQ7YSi1BEsGgKw",
  "key33": "5pBSv6YANNryMpp3QTGewhC7VSk6rqjXwWDkxZSBamxFB5sRTqdtgfRuWt2Ub6yUEcMYsojor4XdoyzCTiUBajSZ",
  "key34": "2wYfHpwunpiRj9iUsHbC9hq1Z7SESibN8LXVNSnwNQUWNd1gsoE5zdzBhmMjtXmtv4MNbebS4XAiK2Y9UcFxRjKd",
  "key35": "5H13rgTErZ8XtjDXaEVNB3S5ZCGB6ejkvRmPPFDGcz9GkzLiqehxSGRgP3TG9oNNkXwL27uGqy27KTNhPg517VTR",
  "key36": "2C3gDxWVNFiWUS2Jgnqw5aDiRyfUsEgrLuWYHeLBP8v3cwctt3SKUoMZAkKsZaS4fFVJpjELs7VjWvErvXQgD7Nu",
  "key37": "3eLo6ohnNtpmjzJDhKaR2CLdgJPQ4pA1mWHpe88BTkxJot1azy6Nz4ynexH2KQqNbfPJ6WQ2ZJ7uvRZAby6P1tsp",
  "key38": "2RrVxf8XGAsyENh1xMmS5efUJMYWhk719uajCdGH1VaHEM2fRt5fFi8zpdkVcAd6MxvwnwTq66nAJv8gbD6RbpSG",
  "key39": "3sjAtCcxekGtKiaKEHohhZa69VWXzPnw5X8g3UAC22mHdo1TZniTjsjhWNWbB6s3cFakwBiG4GPkfGs9k7cGUsrB",
  "key40": "2EogLoPqnMm6xGcm5qauW3v6doYTBZjxvFPfDTDUfmuiCnYLWnvWGJDQMmcUzMZU4tTFwwbCo64JgTCQKu89nMZq",
  "key41": "2Ueg6ghbT9LjJoXHwHQuRsXD3aWr8XUaZfZer8a2bQesAWRKmsCH3fkbexoeBtx2dG8NtsfMHE64CuCTsJK61b7q",
  "key42": "3KUpdzwy8N9CPcQ1qz8dfAkqaSf3m1FzHqnVJFZ2V9ao5n6hipuFRm2DVy4JMTtbELP5pu3JEk9KMio2UfDKVg61",
  "key43": "6ybRKK2trjxpx1wCn1uqmB3bAMacLDL7U2hvhVndt5hWduT9jGC3wQNRPy2pDdt2sTZFRjsFmeEjSdr1L45uVVj",
  "key44": "5bJNTKVCmARFtaYwoS4ehybS1FsVMYckjM61DuNNHzhTywJS7uhFyrPJ1SjfRvQyZnBMRH62dqXZUzADEDVhsWkV",
  "key45": "2Bdrvtiy7SmzDizG9nCK3NYUbgRmtWy7R1m1jKim4sMqDqWTDJfBNC1AvzfAs8JL7b27F5cnS54BVBAFwiupvFgv",
  "key46": "t9peJAJpJhuqT6bUBumnopVu9nHs2P8rzUVQSxRNSJUa4owpC8pcjQgwwXPm1i2Q7bpZN6wdSJ7iRvBwLhyK2af",
  "key47": "3uGXUTnuscj6dT29EKCPyX74q3yBpNnSd2tdji839pLVdx9VoB9cFpzPRdSSQ1xHCcC1SMX2Mo1btfyhQr3rYXVB",
  "key48": "4HoQ6UcF5MUUHLy9V4PutWfSP5qrTkGyX6LdVTZtPXuu8gMVMW7JyccYtP3QGiWjoVc961X7EXh29y2u2BXV1iC2",
  "key49": "2gNib6azH4bkttd2hLRw2N5qNd82AFff8ayngSwzAv5gJHFyDWBinatnJn7UFp2aJ2bYSgExbmrDxXdYg6SWRdUY"
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
