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
    "2UsfTokZzrvLXTydEcZ7jh8UU6JEsb82L4mnnEZ1q9ETkb3pGF3JaLr7BTzVzYhk9KGjR1r4djaWHCVT4rZgDzRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1sS6F6Lpt7h4UgrNPPR5ViX4ZwGDAMReuJpjgx3JmZo3iY6mmV2REbTupfBqTmmTbhdyTvNMcvuU4vv2b7Fzgc",
  "key1": "2ELbi69qb5eei3M9bV2yMTUogBAt9Sb9fgb8tCjt7CztjtjUdG1QgiVHn2cemjQextmFxvsFQSUBCgeA2FHfY4ij",
  "key2": "64ECxaDwrneFs1ZprUtptL49fVpr9SqFreQGs1sDg7TkJfHE5eyjmXdUTFpAzXY8QHPiDQae9m4Cp1UGSTZXH8p2",
  "key3": "4xCLbPHCv6CH4qPPAd35pVxtBDtmCSrbTWaDvfKK4UrWcyRwKiJXVYjaBUXhSd5hyXMecnYCbWqvneJ1oj99EDzA",
  "key4": "3wyHBbSaBoCvu69hNR5Zj6LD8YvDBjT78grLEvdUhp9xjDo8XL39MJecyyJks46oiKUmPceT33TgHbkPJk19AmN2",
  "key5": "3eYquyh72UHMSFU55qfAjEsZamAw5TyxXzjRQrmD6pMR6NvLRogFsxCiPq2ctCNWTW5M3WBWUW1do7hABqRsGMxY",
  "key6": "5WxJfDcAKD52MyWjyBfBCCzK6gKQiDkcWkKX67HkEFm89SDB3Uf9xDSUucieUnFQ3svBe5fgGtS7gEWszJfgffYj",
  "key7": "5dChXmW3kHMfDFGs3QBrJ2Gy2WbPHWSUi4Gid3tKzmS7keEEw2mVXS6WyKzY1FRsWiZ6pE56p44zZKFmnjHSZD5v",
  "key8": "4rhhz9sStXSNK3SBQQ6iuaUdKg5PyW1BDkgcGX5TPk8zCrvXuKNfKjs7Whe5zUaWmmacTGr6g1hhyuDyZUL9WEDR",
  "key9": "49PhEGeDm7gDZVBp2MV7uPhGfk7dEnJnU5ukKyibGreZ3YZd7RAooa3tB3oPyR5SyGztj9BTQiirbPKFVUXrFRpK",
  "key10": "5na9Jm8FURjm46xB6XzEi5T95gVTe5zCj5AQcEE1KXvePo6X1FYn158ztpnVPY39pQ5xfwGRCtop2xv8RgwBPqJc",
  "key11": "4MYp9YAZjg9A7GLWywWYibfLzzGTefsQ58XnTTrdTcqNvbxZiaWvhUHtRwAcWpNukoAt7raBU7v6TxAzGpP42thZ",
  "key12": "3awYt3bgLECEWJ2FUJqsgFbMLTueLikhFe1XumFKJPaTQtwJjkGK7niYvh8ipMKsvx5AHS1D1px769NAY9VLYhcJ",
  "key13": "31VNHJPSj2bZ1QnVPrZ1VvqV22j1N41GhQq7i5WAJPjt3j2esvARj56pJw33Sj3eeLC5Xy4cmu45SVd9d5KbjwnS",
  "key14": "5LXZhd2juS4RiSjaQDjMyUJC5oKt8N9kaQ83V9HP2LrwBVT6UdHdsSMwA33e12zzUD8qwQoe2GfCWZS3JrpBSvds",
  "key15": "4WySh4dzitc63PFnur1GDHcNq6PkhNgwV7of91e5MUPHUcTci4z5KqW3E5vYMxABGceBoBVJ2VHy7KRsoCHUnHWZ",
  "key16": "4WBpCNNCCRTJRuBFj9SD1StfdtUBnisW2RpauFesWCgVXpaQ6JsgjNDuSTuqyjdUdUv6oNsyxkaDPFJn3b5CNUnW",
  "key17": "2GpN4QNEhKV3yMibuMMELN7NfJHvtyjD512cjiPxfoxSmYdXTxPoVS4L9BmZVH9R1K5w7b1A5F2xE7qxXjbuYdDE",
  "key18": "2mjJT8uGgwawRTBYFN5ocqTDse6FZ9jSJh94jjHgmASNkFcmygp57drxhaf1wsYnwSwaRtkY9bKoC39K8fR9rQg",
  "key19": "5mF6WHt9cNdGUguCMDbceM1Vrzhe4qTyq3Gzks7HxkKKLPvUsjsfjvhRJDKeDAv7ivuUUR8Ka7jZvecGaz3x44uU",
  "key20": "2bwpmswie6TGcAdqRWy2yqKQxHoGyd6Mu7ybDoeVfYqbvBAgrg7K7cH2tGMLwqCfyJWHWkoT2JqzdaHxNue8MSsg",
  "key21": "3krcR2T6pSLw7qobFgq2JY5fWaZn68vCqEoJGJZvZdwLGWKohz9h6pzG5qd8CGTWo8QXvNE8Li1DnkdtLFqrTQcF",
  "key22": "8hKNTfNanHkqr7UEEooiCmwGwugtpfdYoJPWcLt4QWjnbWMNSUV5jt3kjrCJMVagcQ2WhoygHwD4gqGRiTXuzEd",
  "key23": "3XEjfcxk8deGVozgRVqJ5xCitzAymCX8xgYASsUMjmQbK5o5W9QjmJUvbMHaSXvynFmBhzBQKMnLxyfuJWWegQhg",
  "key24": "5t7UCWvymXDJ61dJGNwsZWsHxaLWGQVaSh5N3xME4bePrAmhGECXT2L2x6hcdKvkFKbaRhxkPBXkVvZ68yu5GzEJ",
  "key25": "5KiFtJwh25LukMZZdmNKzYVsbQsSUoeWFRFE6pA4inJnYJuEG3kDwQcQTW8LPLfKM1VTLJm4Jpe1W7tQL9dh3973",
  "key26": "2EXDUM4W7CSHSHe6qKBFYwXd2S5GFpYBPUDMVmZzUtS2MCwWRTcbg841zBp1BYL8DzWqHhaqpWDH3uqNHzPRWaXF",
  "key27": "3U7WE1AiLNSiE39qeitQSNzVvh1v2oECEsxrSC8FUy8vhaupX1oh7fcvV5dGBpUX85KVotqRGk53X3nfoHyZ7Uvi",
  "key28": "4CbVP3VfoqzbGS7pBnbDxKW6dPWB4FnFdw5MCfpkKqU45fX25DcEiZ2bEJBbVDE4m1B4FU6HWqkKYpQwv41udvxk",
  "key29": "5bFwRWGawzB6jJmYn627gDZyD5gSYPnqEiuUjY2xUkwMxdjpgEnLYRbNVZYZCz42KNbRZskUeXd62sEWL35dNEAL",
  "key30": "2BzLpeC9U5oK8t6muntnr8kfhRjeEXVFczcg5ugNtNjKA2ghkZGMsibLGcbgof4cuGwjLAdGaACHoMNHjxWc4tf2",
  "key31": "3uuXCHW3tTvTXpLxLvPHjNB1FyHjBZsmcRQyREf66v3N2qWXPE1gbUziZwfAsR8ZELRXRY2BzJJf1Q2qrjpF675c",
  "key32": "5xfdo7gNX11hSJWMNxnZtHnG53fxt3ENH9ASfPwicB8yyKaisLhjYpvL6PFxmAvQUP1CpUP7qmyFmD8zfPTjgNJK"
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
