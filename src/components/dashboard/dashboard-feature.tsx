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
    "2Cb5rMNSVhDfY6C5esKAqxYFtAbYqcK4qgq92HwZYymyzSCuxdis4CL3Z1iKmFE9x16NW3JhLyrj7UFd2HDsyZpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5En4mCDZY7BMp3PvfV2xXS7ndMhmwQiyLVigwSc631xz2RfNoNnMxuTdYComjhYyLBE1cBsDom1PjPd9teDHarm7",
  "key1": "3nC81kvv3BQhHLwc6TC1ZXWjMVQs1FLwm4rAfSTdAMZ1iGb8qkQdCDohGUPQb3UMgjhqQYw9Ra4vC3zz6PQoLfDg",
  "key2": "4h314BXQcVwz5VFUS8a2WW7ngNThnxxG7e43L67aRvEy9jdtVvWpJXMYsF8GvAZP9GXkq4ne1hZy6d1WCrziLi84",
  "key3": "3BF28SQBVuTh1xgVUziNe1xFXafaw3obzPWKZfHEMdoLLeZpXuRceQtPdM47vqUWK1K46je38qbM3rEoCHDwGia6",
  "key4": "4xTAgCvgaf6xawZMQJ5CACC3QPGwXogWZxkKk4htK9P3q9pAsMgvJb6Qt5WbmLzGV1gu6kqib4SW37eicJwWnBiE",
  "key5": "5tdmLiSCsRutnLpo9wy1GaWLVU98sMswLWXCvtVX9TbzaC9i58uWSupGdL3b4wnPwQyuPFUN5nmpoEd2TpzW33eV",
  "key6": "5M6agY8bt8hjhKMZxSc8GrJSzPj1vNMA28yjcDkEtuxCZUq3phZ4mVHMHQvfTPXFNiAWvhBpSgae7rHwFQjg7ARk",
  "key7": "4TaRcDZEjExqnrELXUNFK56p3u3reShyZusoX8CVZbqAEcqijjfZvYuh2wrtXv5C3CzriLa7UpoasRyGeJe3cBfJ",
  "key8": "5dYLAwQSsy8B7XRHNDCn6dWPKBruMvht1yuXQ2ywuXufNuyxa6DpBwtXv4vHyvWNbQkNwwMMNjhsva8CHXk5mfVH",
  "key9": "2MvPWCZEpGz6b2nTazu5QcBKns7faMBiRENT2Mfa3JU5LKLbMsXt4EGqzYeeBqzn8w7L9m5rb7dBiwuDExLAf3Yg",
  "key10": "4xqjioXfiuZSMGH2aQMqmwUDjNXBLDSDRET76Yqton2bjYg97JbfskQDWwXBT8NqRYYreU6wqZh8x11L5hHDDgTN",
  "key11": "23WH3nZCcZEGDa9xK9QgUU8scEhaux6MpB22EM6iQxsspBjr727scFgH1muFfxBTBNuRsZJnj1jLCRqDiSY6BNLK",
  "key12": "3CiAesEmBjP38xMGrdmpMMqQkBpkCvafQRaY38eBddeHDvJgQE2ACtHXEdsHzRf1SEVNozFA1SgDh6SxYUff4rHi",
  "key13": "4rYDmgG7oqB21q6UQxHx9tvUBECpRDPgJwTWjYc97UkVa9T9Ev4sksV1XvM6qutwe6gBvKGkQohFMs3Anhd4R9gC",
  "key14": "pNs6eg7YGvgSX6jBMtxyEnfSBBQmXrZTDRnAGxZ6zGRS36cGKayB8nbXermuWXV5drReERRmzazDqcMZUyUdvxR",
  "key15": "5xfEa4Dc8PwBQRULtVW2fDbzWMxiSA3A3cvpLsvnYji27x7CBXJE8gJ28wNLuVf5Tjq4aShNRzGoBxNrCs3hEHGU",
  "key16": "444t8FKmkkDPcgwmpi8onfeQ7WfAJMgLCFcsWHMhUUjddTyNWhwzPWRVn2tEkHLk8XLHSY7NKBXtopLebj6cyaEP",
  "key17": "5Jjtm1yHnCnAee4zUPDsYUWMPEU4TUVbJz6ztBY1cyZzGVjBzV6EMvQcj4xUBhwVrEjWotXyfpm1hu7kBnYZJR24",
  "key18": "4L5FmoiuxeR4YCGLYTWF2RxEBWZSe9Wde8JhvEXFLhaHQid5fkePGN7rR5K2EtZHqqiZe8Zu3oQbZmQ4USEwSEsB",
  "key19": "k3bBhpmX5qvdzoe1LqMCxXsDY54druhiN884vCpanh9iGeqWbA1kUodLWBPKZSaTN8athqx4AJSGD6qdznHma5x",
  "key20": "5EkAk2a1HNtLuaRmAULVfWSj8EReajm6gVf1nDw9fnCjLb7Mtfzt2Yiw8MbT5aBoqDFoGRnjXpPgbd1EJ6d7LCQH",
  "key21": "4TbJL5oyqiP9BnjY6ijJzGVTkKCKYGc6vUiPRZfWtrmRjBUYdz8XGtqFK82YJpqKyX2uFKwkKdgy82gjejLzGBkE",
  "key22": "4DX3iTgeokP5guGNkGXwSZSov3j4Zdaj8p5yes71hzvV5Xredz2xEFaR2L32e5DKGUSQeJssdgi51nipkmvd9Fnh",
  "key23": "4JK92Y7m5tGK8SC2Jg8Q3tKXHvwwAVwpfQ77f2VDcbBwmyK9ZCSxYtSvBDDfJaEcFzUptwM2wy2bPcJAjd7X5pFf",
  "key24": "Ki8SFi8QdPPRGBwKkzVHGw8mYBZwuLgwkRw2dJF8HQSGfgGQUSaBVbJpZdJE9dambKur86yazTB8ohFw1sbyqEv",
  "key25": "3aHuKC7KujfDNUP8FHhK2R9oLCvHBnAqkif8BjRvpArqExq2VC1nUX1hyADvrycDCT7jv3w17q7xEFLor9H7ENk1",
  "key26": "5W3x8t9zuxsEEQLGHPnr1kjnc2AuBzhyC2Hs1dpkKK6mHy34c6bBKEAM1VfHnfyPxQn5bGrabizTZxXaAGNdYTsC",
  "key27": "xNP11hVfPcnivQdN7SnHfiUh2iR6RTu5GFocrs3gZcWZaRfAMHtRf4pC8s21rP5mXoLmnE3Zzx9R6UqvFJCqVzQ",
  "key28": "39zrphTv1iBry5L3cSonvL8GBeTdueYEkj1kCUkgtxVdd7UpjinA59BpssGkkyLitN5JfANkAVPEyVSewdmppMF2",
  "key29": "3626xdQ7F28qEodVknzcwsNGAix3a9FHpVvScxrceqF7tWYjZbDwgDpnSMHc6h3Khw5b9NxMGqNjhLrm7eCUNvj3",
  "key30": "4Wh1h1rLWZB49chkyL7Atv28RQpEoGqVfrz18HGo2SRgV15xjCkKnsEgtsFQJnDVGN7kvzAUa1y1zV3TqsAEtMJ2",
  "key31": "5YV8JXfWt6G7cP1XapDLiSTeoKByFP92epqwMMP1CuyzZudoD4W2KKSH2BJsrLGvybeppm1uCBxP9J2bspgpUjE5",
  "key32": "2P8tm44mqdrhHY3h97o726WoQQ6Aujkjg3eAXkbaeeimjhPx1hcRcCXGLBtwtLQ29ynEQAEkPekHNM2VuGCZ7Dfc",
  "key33": "5zFHM3u44qzPYAPeoEfSWP8AfcPTkcbFaDik5ZPhj7nETkifZM89A27uHXKCAdj6uw4tEfq5EgmYMa7KLdmfoK1P",
  "key34": "j6EyY91jWtP4wr9tswvKBdDieyFNrRjvZt32z8oqDk94q3C28m17Gb7TdCPQsX8QpQhhzKbVsWks4xSZRLVbiQA",
  "key35": "293e5TAG5GPBBMPBGKe89QZc28gQyhfHYL2qzyvzHN6iTrVM65eTBVEXRRAp42qxrRbu5BYXSsZHc3Ty5ryUKuxe",
  "key36": "3xMMyTHBhdshoq7ouqwCi86eQjzJPvt6J8oiomRpxsvAUd5ADQPUzFsDsPdYYwzF1tLSNq88fviJ1BJK2iieGZHT"
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
