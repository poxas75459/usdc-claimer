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
    "2yTF7K7nBs1URLSfe2WEJPjGtqWy198W4tDv8ePFNiZ7UueVLVdevQuPiYWRM8f3b4fr3e5q9i1Vs89CoXt2Yywn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcYJ9RaPPGHTGdgEEUBMHQARrvg5y5R2rkPgb7H8yhHE6MkC8cMmzyJCFQ6tGD8rwZx1ra3MCd6ipcKZsVySgPN",
  "key1": "5YnD6ehkWs9QaLYK9nXpakUbRrYd2of5gTz9Q2gxxWvXRV17PNusfauk2e4sVSQWx2QxtFHos1WuNKhQukvKYQi6",
  "key2": "v3nSxNiqB7PpG2E1DgVZ7FEW7ZKihiKYJgXS7RUcqAWC8wYBv5ysH2dMrtf3jH3JNkAFJBCiSgWdkc1wAHUTjDf",
  "key3": "rRtsFGigEAK7P8X82aauBp6xrqriPJLKyqjJkCsxqYGWeWSqWiFrqQ6igtMtD1EskxZAHqR6vUnQAWpSScg17Fo",
  "key4": "4CTQive35AkaP3JiP5caqWrSjTe9UKH7wo9yEGAgKV8amhyERFgcxq6eEroRd9TswkoccS6sTGy9wTXoC8VmqynK",
  "key5": "zchqPe7SKxyuBYnQtGTE5QojwutB5eDLiqwCu64g858FTouNt3DxbURkQd5LMjT9BfAnnredCtVHZzAiwtnenFS",
  "key6": "58n75HbSz2bFCoDWCNdtahBB67RHqG4Jt7ywCy7hGWXiyLsJxeny3Ku4PgDN2VCWMcCNnG9BWRkrH2oPf5T8T9Jj",
  "key7": "3VK95EJ1GwRxCdwMCruSyLp6vshDsMj2Ln47WC2JT5A6GJom2zG28WcZi7siRY3dxR1JEkRng3HNLVkg9nZLtmB2",
  "key8": "5foQ7yty8c1BxL4StsScGuC8ss45yEY9R6tv1nCavDGSf8er7bH4cphqfuXwNUkWfeYuZUKehqV4q69T6dYdiBbs",
  "key9": "4QdJEBV7XGR3soUbsj4uPhuRUonWJgKwJVo7hyohCgBGHN5z6uNbmFCuYWkaDxNH64oy7LHUF5Zy6sbe5pprxVff",
  "key10": "fkfVgfwVrBVtGZtKXTZ3oVvbvMj1KNvAJMVXgBEV4pPZYqhTT4bo2ySCdfwBTQ7YX5wHsZLX839UnJkwscavQKQ",
  "key11": "2uFM14Xw3zixdtQBbybMvSMLFFkFKASmhDiVsPSTjwRT3Q69qYo7xDP76Q2aojuSCyP1qM4U9GVSrc4YxbCkEYrC",
  "key12": "kbxq9ckfML59u4wKqrjcQJUUWBrmg3hfv8T6uCCvj27YUp3eopxRDnkQ8iy3YqSZGCJEj2G2tr5Ra2pJgdQN2YH",
  "key13": "2SwLUgB2cizixHtunsbcG9TWWaSPur4znS8rxhLtrUA7bk6QWFkaSnWSwvoCFS4iW5UT6aWwLdc9QXbMeEByMZD5",
  "key14": "3y7o1KTBbGHmCt51JV7YC6VtsAAgDjtNui1C2cvPWYNxCEe7KBcy1B2yqa9WCaYLPC1KSei2m4dYtEtNvgeidJBr",
  "key15": "rqtHGESSNMsMBuFGKak4xqy8dB6AoqWSV9faWJH18oZ68wJaWmAENqaitmViGdLUA5t6GJ2Z6yif83tDQbXvzfM",
  "key16": "3oix5S8raREJicDrzxuDeRJMcTw33aeJqqAay6hNyGi9ZZSXY2JYGVzMCHhXYpaaiyu2bvfKgsdrQkSEn1uCyTdG",
  "key17": "Hq4xok4FvDwPBCzeoJaEVDF1GTaXrytQBCBnrfXG2RgQukgetuk4NpENdYhAZFEV9WhkKHQyczWxkQxFH63iTyE",
  "key18": "3H3SVBVez5qxwXWkewokdeLGKMB8nJAewMLvU2bbpSK6cuoC1PvAZAZ4nGw3njqKkT7qfS7b3pHyG82Ff15x5TuD",
  "key19": "4u94XKXJ5RkJxi4knSR6vL5JXvHXHFWDNieUeNHWsXCrEv87CmDd3xqEDgwQ7F5azgzHLt6BGdP7QwSs58PSkzLP",
  "key20": "47DfAAwE1sBzP4N1eCsPdYPfMm8AkNos4sSvh8gtLj1HTkyjaFe86Cth3919KBSQRJFKQYCjQCpn5gTYL8QPAFG8",
  "key21": "4sCvKJzpSuHtxWBtWHeurS2MN2jphrL4kMxJSFGognmVoDGJ8rXYk6saCrtQq2EStsevAmRDKgiyQSJomN8dqi1S",
  "key22": "53N3V8zn7opHkPCoy9377GArpBaCGSGLePvPss4AtRkq9L8nu7H3gvrGreTmkcwjzjsyTUUMpRuciyHvJ7rJMPRV",
  "key23": "xNUC1sAEscMTqfrpwWWx9VXecf9hzB2udbRZZuYDHJejfR7CFHYpwsPkopWpJyzZpxHBcBqaq3aMT9mX17s3mTy",
  "key24": "4U87MHEeim4AJggRE7PjwSVtaX6sQtEEmp83sZeE3GNYT8fvw1bLq3atKZGWio86KXdopaZdNv5c2ThfwygQdD8j",
  "key25": "5iJ6ct4GHCecqPndCnzk9xeAaeL6odjGgRZc7uP1bmM51L5VJ92FKCSDpyixXZ8RrzkKLtZWZrncNerKoHkd3UUU",
  "key26": "5Jt3Ww5q8jxzA7LnmtsQayTWbmA4Wac6FgVwqfPBpMZf54yW1w9psTYFeSbRRhVPkvfiLprdLrtw5wcbxeijFE1g",
  "key27": "5StVgTUSM26F7qhcCGK92btfo28gP1jU9J6xFoHcifTy6Z1EmK1nuLy4PLZWhh98uEWWyZKnpzegLdeRyvwQvGp2",
  "key28": "52KhgdL3ebGaBMNvhkJhg88BwwZihpgBFXcPjkeEUax2HJQ9DMaNxg8SUvMygr2tF2zpdpCC9dbYiLQ9X676eyiw",
  "key29": "5QAUiHBvWiKpJqUJE6sEDeCNgydFduqHB2Ed2TXvnD1RWbRQhG9x68oAiy36TBp5U67mQHJPEMFPyCmPRZGRhnqk",
  "key30": "2QTFHQc1UfeVPZLqbiLq2yn56jk66vU7FUSPCSPPgzq1SJJKM3TqroAXpMh1ybyEyiFFng1UgpMNbPa3HNhtdCjd",
  "key31": "4AwCohV8PDQoWQNBo29QaUAmvYKnQybs8k2u1qbr79ECEEsQB59ywL5JK6Ytxa4EKDwCqD5Qb8mwqvJMHrZ7Sc7c",
  "key32": "3Ap5savo8MrvCM9AMZaazT4qNdfAs31kTdTUAwGd8W6u1mCeM5fhc4QTXw62QxqoEwokGcFVfX14ToknnhDE62uY",
  "key33": "4nkj8kU11bgcGuXb5uUQ1YqBNszu9GDkSM1CY7Mt3DWfBSLzio8yAsnTS8gWmuvt2kyTYJs3TgZ7WSMok8owQ5xr",
  "key34": "FN3t31At6MVAkqWWWaD8usYkbAaXLTC5yJYkvy3EM2iz2YkLpJJLWxe429Futty3FdqSwhNTBXGmTxQ6XiRku9j",
  "key35": "3HQ4PRBPSgBCMsEkNX4Pta6VtUMbHPZhNG8heWu2Hua42vEx7rVq541M2NymRm2VBBgQFvTiWV5Rx9bBKgCB4pjN",
  "key36": "4eni8Bjef3Q8iERJv4JTjNxXxZR2v6MKDrn55xVeMzW5dJfDEAopB3ewZuh6yjqKtLTyW6NMqBcA4rwfPPKU7G4o",
  "key37": "2cujZz8tFdwNSoc7p34ygY3YWV9hy5k2k54uc2edaabXvHtLRBhox62R6BrBjVr8FT8zqbesGnRNRDDQ5wxQEJj3",
  "key38": "5QJDU2gZ9QvGJfdvPenjjQUwVq3pQ2RtcuXg8yz98QZoNsbTAuNXAX1jNqBo6qQ57GCVi1RPxAQTQdCcrmp7vNbm",
  "key39": "3SR9XpdunPH2EJEzdXKPJsHQmPXy6TcUmAusBX7gLFxCssCRPjAKRQn7NoAQACfTxcu7m9PJkU7nJdkkdJe1EDbn",
  "key40": "3x416UHeEAUKiHK6ASFTECo6MsQaPTnj19D52Ery3SfftvWV3FCQ8SSrBm3nFdnFHv7g2PvJvRwGmEckKK4YyFKb",
  "key41": "4DdJaMHpLUwto3rb3bTexX2VzV7mfDDE2ckcjJdRQyMhW4fz8c6zDDaFW2agGtMN7qF2fKFSRtKjVRSd2WJP9wKz",
  "key42": "5AC7Gh1W7MSHt1S6uiNEDAtt3LW6dP7XGhV5P6YFYa2wNZ7B6yr1eN7A2y6G9U1xkCW8b6TYdGLveUMcVtJpjEsW",
  "key43": "CQ2yDzt6g6Ab8oEUi48Ua6TV6vvZfTpexiEkk5N3nSsTqRgmWTTLWesotPUmD5g5UjWams81dfYyg2Sparr1B2A",
  "key44": "4kKdbYG7TJrRiSsY8c9h1LE7G6eeW2YkGAgk6cYidM6NpmmDP2HvGHpKj8N3kRg6eZUXcs2ykLCQbmByfJjepeQq",
  "key45": "2N2c55e7vrNxodqvSqF3KRxNtkfN1jBVmN7skVLUJVadrTch4JENjTwkTLpxVBBZoGsdjfo7D6D7wDw5RAjwtNdu",
  "key46": "fwN3eFMRYw4nQejd44XSr5GQSr8uiBEk3C7QSmFRxXtDGZ4sPxGCAAggPTkVvLnZDwax7pLE6WNgLZgVTjmDNWy"
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
