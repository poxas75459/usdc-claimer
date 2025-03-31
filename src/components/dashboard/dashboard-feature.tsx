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
    "2t9poGG8pjec71gT9jXinVVAtdt4W8mdUz6XLBr44wG4QdEWGje9sksF1FUJpXARLeV5vjEoNatpzGPCWEe2BRhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYJUZEDWCUK2VBqS56zXXm9yZourpyT1T4Z3sN6oXdEWmFfE9m6EHmgSS33vKiGQmePk1PGLHouZwB84ijMiqUT",
  "key1": "5CzgXDpvjBUgs4vVrrzEFBXkDnTRDAJR4hwVVRSox7MrAUkLDZwBgfPaoTao3ngG9ywjmMzwRFRikA5zo2J6JNwp",
  "key2": "uKmVLgz2HYky4MRqBkfGtXSoTVjnHkmpA8r3xDBr4fgA8FeowjGACw6vNpQfcfTrwEmP2HVq9qRM2oLhCbXbe9t",
  "key3": "KYVCnQwDWH8ULGYenEdwaWEqrWYcJyimqNTUiPUrs1xETsd71ujZzwQeVuh8sA28G6zRNwDtg1o8sRH5mvsSjVK",
  "key4": "46gmwjAEJfB8fGT6CMkM4LgTUaRbGpyCTLywhQr7b8n3Hd8CAhAU94QmD2d9mud24GSsx4o48N21uJNnqDgb7R5J",
  "key5": "4aUuNsECdBqvsUKMnf6QtGwYZ67QbJt4bHayBM2DJKbXfHxoscXUivotZwmHnVgSzEzhcN3LpbuMTpEB5cWbZSUi",
  "key6": "5cUj61EeJeChxvkrKpe4nwGG3dv7RuXvRcVBkqYc47sm2APwk4mq1d8cJgXpQ6SCh3yEcGh7pdo71RSUS3hGkxkW",
  "key7": "56Uca6MDaiWKZhPqGgxw9wVjRrs1sTiibcVKRhogU62ub94LGThwL1RgB8QH9CEQtwXpjyCYUm3pmywMAGaV2v7G",
  "key8": "2La3KWY1ntPWDL9Z5pcDCVUzUaRxpRkk3Rd4Sj2mEfFDxTWsFQySUFf6jfAW2A6ecUwqmnrmQJZLiNBaWkU75tZb",
  "key9": "NeiJ3uroUHkYkhnUXMzXNQ43ekAyM7VfKWeWoDhWCAevQeFr7E3je7ydcjuAxmccTZWXeLuHgyGQkoFN6AbvdSX",
  "key10": "4Awd2smcXvGUEX9MCfe7iErVXwprNfo1Pu5jUWkjZhBoYL9GgiJV4KX4fPcHevuSPr92d6cNDQ4u4P42r8h95Rru",
  "key11": "2RK42Y7w1kCxtxq9CeQfJ4XjNsHqiCjmxwZsKhrn2cmGyBeRmcMme8BsXqSTSLNvkWbJAqrhMtKTJ31y4BixQs3U",
  "key12": "4VPBskBCibRBH6qvwiCmRp78fGq7j2HphqJa2rjfem1RbvrywDqH4MVVayc286WukmMacHQrN1s2MhbdtmLL7JU7",
  "key13": "dbeuP8X29PHVComDJCt83tCr2XLLuKK92udhxAcVdPjPbpoYPcJdnbWHnjVTf49sUzjFH3HQuqRMZRZSuRe3EJs",
  "key14": "54PQWPuajwLz4EAxuBir15JWmYkeF1Dt3LAPaD18kUP31LpUc2ore1RJPr5PFYr8maRonLtDjCLz4u2QrgsCZjT4",
  "key15": "QaNE971GsS6ystFhggERRoSk9WdvMCCW94AZBEPXoeucFveJxrb3ytKhpuc7tksb3Xm4QVkXYqynQL433Wi6dzL",
  "key16": "5SQcc8RD2T24Vvp3VjT5CUHxUhpDXpvR7oS1qNwX7zp3iSVG4kZft2PhmjMiXSYusHwst9bKu1p2fF9N3Z82ehz1",
  "key17": "3jHDpGw8xb6otVEdsu2rACfcQtKiBMnoJeJHQFU9m3kPhGSgDdfGiNvfuTiDuT315AnVvET5fCaPiuZj6utA3a9S",
  "key18": "33po7NdPGep2iZRC5EMvXavYx7yg9SmQJV61GY3ajgaDFaEnbRgZ254p1KncJPjRjQpSD71a1vi2geTLfTU7eCw7",
  "key19": "4Z1vUkvRUiixcZcSGCgzWsVnwL3b3FzHKd24MkAM6ekeTBaqD8R1XYQtMmdFvZ9jC6JoKqxPtgK5S33QKYdeqze4",
  "key20": "2Z9GSXpf8R6spJwHQD5ABoBQ33bPEsLDY57XsXj6VBJXcQH3uMwvuYxyXMc8WzhUKKJGz4QeYGV9hs594FDpN7Zx",
  "key21": "4cwEByo6nmS9i9qFmDrZQyb1caxBBRXtwZVA56W3cjQPYXDyPCkgoe7nvkjzw4HC1ZV4Feaf3vatY23vXCd92zRf",
  "key22": "5ShsrkzsH5RzfdgCQnunZJsG8JUQhApQ8CmFeXDDoJw172NYrq6ze9eteJLuCa9W7Kk29n4qLCRvijJ8TMDrXFaX",
  "key23": "ZCdjMnDAw5ULvZpJNhdAtaps8TSS3cwUbruzHtmZGrWhVv8dTh2SmPEAgFhQMmRodzbj5Zg7oGyfTULC6CzzGRb",
  "key24": "2DDkDBdQLg6qzUccfbpSjcetRLCaZpwwSviJMsdgur2JzZLnXhtP1sGogrCanusYYF8iCJjJmqGxJNTMv3woXcuP",
  "key25": "uyvipjTDhBtjypfQJt5Z6omDcGeeJ7kKxKGbo1ryEz9pNosda51wmFBvHpwnM8cNykAfi3fmz28JzQXzPH8gr8u",
  "key26": "R18BoWuhMK4hUTXjSse9mobSi7noBxMuuMxE1Qz36PjJ9xogh5y1mP1ssB4CNXZBmk5EuMgftqsUTvq8g6miNiH",
  "key27": "4hhqyt7uAF7sG6kEDoto5WYsqsadfjJ7kjbKwzupP4amjf6q5ho6YB6U2ZWsmN6DNpxgZiV3PRxz1ZdFSFLcmwXc",
  "key28": "3oZbmaHRCLgBs9mkUwEWxkDcW9F7G11nfh9oeCwztQ6va7pdAj8fuPRPgKBbz7PVEkHb7wUyn7qu9DyhpqmMkxS7",
  "key29": "2Ty5AECQsPYkkK87dcjX4fQd5Yi9LPgVF5HA4AoEjzbw1e39sCHTnR1Xe5YRraQnrvKfSwag95F5ZSKSVmJPNn91",
  "key30": "XtW3qgSgYppom9m7xCWypZUVvyxLzEHyyxt4f7QikzufpCgDwQf2dpWs2tWG514NyFjHRPfJi56FWQqXVCYNt6K",
  "key31": "2ZZBVCWs58SLDcsMY6XazEVThgomii9iSi6osrfxNve1ke9rAuGRQQJtRE6woNg7AstPtnnGjkhwTwMgZVTDcBsq",
  "key32": "31wiU1QzMNPt5xvPnahMCsyx7T3bbDx4uiU3FFVTznMAKoMNkk9h62M1tgAH57aQpWVG3hTkP6jRYcWiApWS2EmF",
  "key33": "4hWeeAuPoodHFKkRqtko19W9esNgVbrTrSP8Gk9FBLBLNNDUSedeTYv99pHfzDvE2KnKTCYrhqkanR2wJw8ttsF6",
  "key34": "59Pexgcx8sySZBrfVWkZhTBY2VUrza7S2sbfE8BPzeAZQqBBT3WvsvnaEnPeTCGAKRvTf4cscR2auH9s9GvyAsZo",
  "key35": "4ZGUYPQkgarv17goUNvpR6uojbX7j1HqtAjAxeNub8BYCgZ39iY9QeCVFyq62AY9GdeMPDk2kkAXNMmifRz7vFrq",
  "key36": "2nePrE65JauiqxynhLHPM32dZgW17L1tiWFEQBEMu9oMVbwudd9x4VWrgWWDABRYREgmpAds6pTbriWFAHnhuggj",
  "key37": "46rCUyDyySfrgdbDj2oJDUh4r7Vvg7no8TDf6oso3z1uS5on554rX2h9eT84VhBLZiJofXUeeVQDSVFCw7BEJ514",
  "key38": "5yhWAohNYE8FuDvLzKABhSrvJd8uZiSXmjsAZoJsmBvPcV4xCtagKWJ8oKvDGDKKN78itWc8SYXo3usm71LcNuAA",
  "key39": "2ZEFAN9AFyRBBxxJr8bmjso32kRMZPDB2wqXvmh8hAxQPiYLw67y1iVRcApEahD76icxBwodcovRFuWopNdkVoQd"
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
