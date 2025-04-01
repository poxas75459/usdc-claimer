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
    "TP9oN7fgb5kownDnUAKeyMbvnriMpZPRdEeEoWmX2i1G3nsbFVh1upnZpVXqXcP3R7nVYP3M3mw7PLKVaMzTsEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YViZGM92g6pj4FVSQSoSwW4zivo63VdPdg7efMUF2YCGENRR83NpSR9CXxFrzJ7rdakyrTu7zofGmX2qcSvgn7o",
  "key1": "3feusn5uh85MC4yCSV5GL91RbkaW8kpXoWcNsZrZX3rZJGWeZnKjwgdMP9xiyCEtLStwT6J3wkD6o7QXxxZRRifs",
  "key2": "28wv27QpDhHEjGDG7FJryajsn5d8vAgLpdAR5ttGSTReScUXhta4z7uDyfCFRoft6vgrdwHGiY764wonYNNx4DpJ",
  "key3": "4VFnXLpkqebYNzM5dKvVDm3BeaJFXkt5riaS3BfqHCiUMgheuHoumTFCPRwSjYywsbX8EN63oYctE3bUhGQjrybn",
  "key4": "qUaxsKCQisHsCfHpNbB4fTbKzyfVdoNyTfupxr8gu7zcUBKTcE2bmMrUMafQ6NoaFCSBL5A7Rn3RCEu2QcWHDgn",
  "key5": "2w98eiXLjFoEKoeJhz2LooWHqVb1Xs9B8JVuecXgQ5drq3ubBxxhtYWLNrKpDsNv5gwERTj27zLDFuaoLLU79uET",
  "key6": "41u1RMU6Nmo38fG2zcQrPAoxqKk8rtQfDbSDeNKbEWy5orShH74HS8LscRRbaRhDo2pTX4gyJMcCyNKLwbyFKXXH",
  "key7": "5TWimD4XZaJk1bTYuCCeDseiv6sUPuTFAkzT4mb5gAScGy88b9NhsnoSn6UGtinL16wZzusFe4ogMRNgEuHUWLby",
  "key8": "d4p95omej2ntt2w6AeoWopWVNm5sbJAiWTbb6GJLgjmcLy3N2jDofsochW5vcctWuwZ9pj8pXiBpDGRy4fLPm41",
  "key9": "2ErwKm4cTifhyixbK4nv4o1iuANCz77XwFLWXKvazkSEuL9ahfXJ3usrZUrnW3jXaJBrNDfBzseq446BkBHVFucg",
  "key10": "3h2CLkRW5bVXymXCF63bYiUPyCGUxDZxABK7DkzXNS3NV6zYUhcWBsADHvLmCoyUosSTRpCfxFcBb8x9KZaGDg1x",
  "key11": "5LQrFB9eQtXvJGiPJJQNpQ3XmXrfvtUDzGRgQ9GgMyavxA6N6mndistXdpk4mQLu1xwghw6tKT4QZcGKqM6eWUAv",
  "key12": "3MxgiTQaPFNeBr4kVfixRy4juUoXAu6WWr3LSztk7UpC78Pzk9UwzgoraC7qPCrbqpFQtBR9RPBXM1cfBnwGzrxJ",
  "key13": "21vmWeRfgGYrXoZ8bGFffrNeebdxbj3WDjVsp8n3a3zaB54LEWiU92AGb9iq33CeRBguR5FKmCr2ZW5L9eZwt9vN",
  "key14": "3yrX5FoBM5r6KhzQ1jcjRLvv9WZnAdjRA7684bUUjou1KtaWLXMbeCHeRGPWpAsdYNjZky1miZtJ2pYdw93uQzCd",
  "key15": "4XXeCPSbfZ6wQMn1aCidzqvMQwihRPvsGKpWPewiUDPhDhpZntYqD3hyofzWxUZ6a5rWpJu2Yjew57azoeoxHm14",
  "key16": "471tag1yEiE3U3FzXDgtGfYfCGM114zy8UyPFp7uwjqcGK1dBsSVhht1or7CncFMYMe6aJ4fCNvcSgFwNzgYTE96",
  "key17": "5vTUdV15zkxWLaBXfAghKCNEg3XfC3yQhurrXk7jiJh56xiocrkKY47gP53sxfmW9Ho2J3pthBA4v48RwLjT4vPZ",
  "key18": "2Pix6eE34EpbK5ie2TBjZLT1JSSSWNQk66jZgKCS4fdP5bLFbxiFwSxfF5Tt6Ec1UzEibf4dvXcMPtStmS73X2P9",
  "key19": "47mj9e7DSdwpEhV1rRJU5VwEYVvdozRQrgSP3zfEVXcLbU1QCs58QUHzxQAPugnD2StWdasdAuo9k66hBQbaiamt",
  "key20": "5j8TmatHSwm9vapse5LaN5MWYXx1GwRpqG7bMM1q9C5yg5UrTgMjXHub8V6ysjDehcbY2oB9jZyLiGmhkgMPbEdY",
  "key21": "4psbmQbwmCmZ1rNErtTEJ2JkwwEPicNGoDpjzA1VcFgAuxtjc9wTQWQH2ZDA34GDappKdoWNh99Fbe2pjnzWtuZY",
  "key22": "3oJ9axWjo4y8AAMzKM1umuEKjBreXAjSq5AMYgwUCAFWfc3ysXwSB3ZkGref2PCN6MKBvs4AoyBBB1JtFFNiaFqM",
  "key23": "SCFgW4vPV4MYzMu8y95EcSJY7wdFj97nNJDx8vu1XxNvso39v5RfK34uwJc3UP4KcxoxRAkPjUwEhQkCyonWH4h",
  "key24": "kBChoSnhFtKyMS5oQJiZb7mejk5UovEdGCqZEVXwFRy5GsjagTEARfK4w6GMnEm4wDA8L3KkaqfBARvVwUz8eEW",
  "key25": "2miydrqHJ15CGmvaubTHAZ6B3T9Z9kYQcPXnmqTgFs5KtLajTia1SBwCEQvZMDqpGkhZGqGvG5mtBXX1UHBMFf5f",
  "key26": "3YCWH8Mwf2gjY91HzMS9EKvnoY6zwxv51eYFDjgDttzFEBtf4dnbQoputT7gAaihNKJdDBbcVQpPuRaw3x6yPwQB",
  "key27": "5gFiBN7htJ9p2HJEF82x5dWRRRYWzY8992xLbS9WkT4v5LrxNSTz1wQrzyVQNhv8hcaUt8xw9vpwh4DKexLy6PYz",
  "key28": "3MiAbPd5Neo8oQkuQmpMrspLhYyPPpzugLg7YYKKeD9c42474cRbQ8WmZwNFbjLKZ2q4LVPkgATYssUzjZagsQ5C",
  "key29": "2ZdGyYZEMzpHJyeTDXzX5tEhbKeMF3J5Esm8v75KQQfBXH2abfUGBYS7pwNRAe6RWmYuAPkb4uRjFRmaU9qejjCA",
  "key30": "5du3uMmQc4cqHVN5j6SGvRvFpLC6CoygMfqp3bL6vuMgVZRRQr4FVqgkRmJSMmZBPPphnh59r3HnksNGPuP1F3Xc",
  "key31": "5qvgyH4HN8d2yNNmDq89i4m8YDK5zSmkDeVUmGFrsATtYTfePc3LsGHBBQi56uWtk5R44Hq5uq27ttyQyH8D3PwS",
  "key32": "2gpqbKYSwrRfRCTy67pdZwyYCAT8oGMkrtXy3mEGPP1tczWNVuaGUrz95UjXeEWtx1u8j1DMwVHmbkxezX8A6RuX",
  "key33": "27yp8XC7RK4aK9XRCWrCY6knvTjaY1eLS4rxoYbkXbGA3CQSEn9CRU5zFRkBRxM7ebAeHWb7tX3hwdhxAw9dTwwk",
  "key34": "3v89jEK25WnQ9CD3Ai1xNuYMbfBz8bxwULn37E3bzPyAvqS2qaCcK13Rs1rK6MCNCW9J4M3zNRkcnZX19JZVpxPW",
  "key35": "2otoWKH6LTCume3fTxgyKkLdHuggkQGWCt51GBU5Xjbm5UA9p7kMCt7HyVAD85hkyPmJkoUd44oxmEGdTVLhnsFb",
  "key36": "2uwukHgKaUrbMTAoWvA4kHhFpqRcXdrvDrBsie9KYDmV3kvZCbfVabNbzV1TFQr5DnMGNPL1e7gt12vbpYJEok21",
  "key37": "3CrkfzWEP7ByBXyr9a5SB3EE67KNJa3w4sq69NGy5TJUadHUtmsrEUiKG7cU7zcWxq6PAhK6PsiGPXMKdjZEAZa8",
  "key38": "2ToTfT3nSEsBvyEDTPzDXaFtPjEDSMkQrGPznYSycfEuxvA6AmgFoFL6zJTZtbsvHyMoaSzvG6PqTycBfMFbY7fP",
  "key39": "4ndWQG5yX2vkvtga18C7AsGpRu1p6jEnYitfFQvQAfBjd3f1cyw28aHz8c6y7dRHcSofyMb4rvLS16Au69h8NmhC",
  "key40": "2DXkY757yWW5PtqdkxcdSKmtJBMconPTs8EYctYFPhTgBkYx6dFFv83WvkrREzpdThu51KNtoBgW7wj3rMVwZ3Wn",
  "key41": "2i1AeFTMsaS1Q43V1fb23K9StLqJCENxbNvPCAMqbQhjfKLUuRU7bzy7ivc7y1VV1taU7aDpndFKJBvUfpbgJBrD",
  "key42": "2BV3AGzNswSLUQsjVtxDmeYD6e1mHpoFGnYtXaSoR31FfUSU7yb8WiiyWimrgXdJ1xAYxnZqfmwpTBJCgj7ZD1oi",
  "key43": "2ewHzDFDv9vF6hdnqgqKLKPaXb71hgZ3zvG5XMizGEp16ZByhPNWrnE566qvTR9snzELaCKeZa1VFp77xxTvXjJe",
  "key44": "3tEMwRmmedeW3JMAxZEeMkhEp65QLX6ejL9YBC5CyVtqnLBjRCDdXMnVrrybBza9TKRyzdezZtmejMiwA56D24Mt",
  "key45": "5e2Xh7MGUmmTcnY5Ug6YESxsgwiaDcmju8PuxzYBjKRJFC6pbU7cQC2bMYrWYgFtYBD7RJ3ufJQeLepKcbHrCTx9",
  "key46": "61aq896VVutWeJdGkxyiYXGF3LJvykCCvhUAUBGdmW6tCYqTAhkSgcquxbspoqTXhsJsjrKKRRXoGT6yUiKywpVC"
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
