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
    "3AKniF8suydvt4CigUd2qzuWYvZgaeVSkN5V4aHrHt3hMGkbj74tTsErnLKkNo2ifepLeHDsGvgnx8w7bqgoWPCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MbUCtSydF8iaBzfBRQURiALu4uk2qaEL8mABMf3TjgA3WSa2u5BnED7LULvuaPydXk1LxEKGx5kRJShLVrVXW5R",
  "key1": "23tki9cTF8NGinMaXBWpsXwYdgmTVJDVyr9NHpKTh8eUuusL9j1uw8HtMEVkF4iy3f2Yc8whCecjisk2K3PDhYzZ",
  "key2": "oAqTe2ewjsZf8E9TEvLNzMaPi4BHbrFZYQ85y9DxhFeYUsCW61F4VxZziLBqsFni1tvW7z59CAbn6zYVD7hdLy7",
  "key3": "3fsms4gDZRq6aYtQanDF97nwXeFBBhnT6egiKdsPNctFCdhD1wKTT4w81bscqoFiD1y7Zj1MyN8VwsQxpDCEUXgi",
  "key4": "4KGcABKC3WNu26PQyFaNy6nKkNVdoawkePRTG79X2Qmh6ojFAhE7dnLiqc7eGNNi5bvWDZqr1Kc8kHn44wE6GX5S",
  "key5": "uLK3yLtKw3whPPePhJgEBHV2jAMwFYUsSutToH8s36c1sL2FbZn3gwCB96xUoFPbUYv6wguwYbvgQft1cYtUn2u",
  "key6": "4cr3tFY4U9zxm9kXGgAsM4uCSrF66f9QQdohvrS3a5Gk1ua7H3ELhHoxfRYfwXeeAY3p2K33PdjeWZeiBS5Cyd6f",
  "key7": "4KLfr6WzPbzDYky9t7deyBHVBCFQNoqvYahdV3Ew8XPEtAi1GS5x9qwWee2x99GyJuaDdPqqjK9DzsLX9nGN3L9o",
  "key8": "4GRQ8ccHuqgSf6U94KvYHe4rWbRMhRVXYrHXWn3AGfeCfVAvt6wzKJHU9AGFDBHskAdCB5BGdkzxNoGXaMv4yULX",
  "key9": "62rBtNNVieHSem3D9J3pC7cUyeTFGJWfTumcM6obeB7Mp8QC53G76TFAgj9yQjLjzqdSRqHkQekknhwTqt2UQf9U",
  "key10": "2iJs79Us4PgiitH9tFSuqRKsxeRYuQsd5S5Q2QhsaJYszbanHwdF3qDb5ZizLhsiyhRiPkyxxqBW7qRnv3WAKe4s",
  "key11": "3BzwPKX13uoq9JMM83v6xGN28GYaRJEBSsqSivMz9tQ92AeFWkDwXAsoDqGBGBhosiwQkirv2pw7gUc86xCEeEaC",
  "key12": "3cPczCuAHczgEAjmbo94gNJ6RF6R6AMBEorU9TmSH4RnfZvGvZXijfofPobtuGj9mc49uTS9VFASBNZ3vHUfGnAn",
  "key13": "56pDNjb65HQVQ5PdbCxU2NGAgUJzALo5QW22JDghjnE7tzPdx9tKKoKxJ742vR49Qu5AJ7YkoBNDugHdUenfUvT2",
  "key14": "5R55A2yi43dLvWFPJ8sfy2uqWj7F871vAenoC2E5PbD7SyTUkphc2hSzeNyrbAa4Svf6U2U6r5gnGdyg69Beeute",
  "key15": "5Hki8QfrYFoKBMxroGBQ1ETpF5BKZeBqy11K4MCNsjyPHGbVg1FsCD588opsg2pGzEqFa2jZ2291zehswKCavt5t",
  "key16": "5uzsy5vfRa8yAYKG6odT7biU7xSszELwzxARMAK7fsAvtr2CXzovU1PTdcZ4M3mwQo8Q3wh2frnuMMaHSBwB8sSe",
  "key17": "ru3Q83z3kqY9bY1zVc2bkEdipM9Rzzr6ua6mNT5LT5193PDegq52R18gZkyLnn8GCFfwM7g9PuamWYJ68D74Woi",
  "key18": "3f1LKCAbaWkbW2vB9StHY1gAQX8scb6zXCttDZNK2cCbfsDNmoWSgxEkimkuUaKJ26g7a3Na6vqZouUGpu4oUpoD",
  "key19": "jthjVbfac3fV6vh8tEQesAQ4s1T48X92NiFErV9uZimsmNTqTiPHmXyn5a7qDdTuFeqfH3uRgp8NuSHuNvBEuKd",
  "key20": "43Uo1mGj54HrGYB3QoUNzTHJEi4bdLv19DaqMgQxxfg7CNoim7uLSfktcgcZs2qhSScY9rksrR2MmyeNJX1uzLiW",
  "key21": "im8M5q235XS8bMuf6UpDpyUJEXTMWKbUYEzroj1wV9jtWHGbxCny1rBb9f9AWaZvFZzPQxR4Gp86CPamTeoGKVv",
  "key22": "3hnzhLkkrgG4ZKH2L5VD1kgCsK15rhq12KxstMFMVP1ioXyD4S63EMtwPsimEnsdRoTtWGWsRAiinz5HzCVp1R6r",
  "key23": "5MBA17pUKTeJSo55tdyzVSgSzVM42MEWUqz8EQHn7daApdw4XPrJ4iFvN9xb31ZecFrTTU5fD3BDXWeNrbyAyLDp",
  "key24": "xQCr1swpzxLN4z2W8FrC8XBbhch4JBtKLzRRznyn43YCvmBaw8MMpyJ31GMT71PGCEzKnHG76biNeaR5MjtSSN9",
  "key25": "2k6q8e4ASq2cZhpCRe9e3QUAjmEhLDN9b7YZjcbQdJFCN8Q17GHGpU24LDMcu3dEXc685JK7jhNCW8Pohdtr4tfU",
  "key26": "5EzzmpLj9FtmfiDJBV3bGuTUYDyg5fWYXDVqnMWRP9iCM1ASjtE8y94GSoE7KJRUSVjWCxW7m3pjTBipe3Vn49aD",
  "key27": "2P4CqdzDfYaFo5UFPBnzD8Uzg6Sxg9iRLxVp6BF9DGkMMMRtkqjkFnDr769Ehk248Ur2CVdYpEVQDwxo5oC9gUHd",
  "key28": "5BmMtacFEGxqrKPh4E4MF2WUgzQz9zePTBDkeBwR1TeFkv2jWp83PEnaCiwC4EM74BxYaCQ5XAGiaaPpBQ7cKS1k",
  "key29": "4eB4jmMCCEsQZWNduAVV25bDh85EEECdNS8pvkYMGBbcqmHy1tMVh8XYv9umkgqbgS3a8oabw7VWDcfQ3RXHzM9n",
  "key30": "46mFnCMcE8tpko7i2LU5tT7RUG8CXPdam6w9fZhK4FfBzGFHRKGzf9KN5R9d8WgzDwJsCHMegBGdhmyp2vrgAph",
  "key31": "3HLqK61Vv3qWys51GkJN86jVhyvLN9LxfvbnGmEogeUNRQVTzDo6mgDt1VPtL4rNirbwZaAAyYMatbbiusXtaqHm",
  "key32": "4xj6HKk4Jmv3RgYvUPCL6kbdJTmtgFTVsH4LBU2Fg955xWXzYiAMPpzaaEUsPcfpEiNWKZwz7VupcpKRV2fpdhcr",
  "key33": "4KaQfpTS399w1rn4CXEgmfnuzuqwyG1b9uqGMhLcdUcckaaD5KXRDqFufKrfmgbcSfLA744vr53JGEcunNxVSERJ",
  "key34": "5J3u9pr6UkLyDz8BmCLGzbMyneJ9y1H7yrmRdSDp76AH39QQ7Gkm7zjEPh5aA8soxYV2eQfewFeSjJVxxTT7gxVh",
  "key35": "2hDGeY7PkoiGwLKigyGbi4raf9Qv8sJjw21ktJVKtCCYUvYhT9JKurMR9a2RHWaNBtAnvjYjsssvs1gNW4JF8dAN",
  "key36": "PtsZSPTkk8vgZbqKG7xJ5qLE4ChnJERinX7Cq3Vzuhha2yXj6rbnBiqDwhLmkH83qw3Nnh7ZCPnae8V4r2WLKPn",
  "key37": "2zfgEvTuxAh3NHuPoMnb9XSKUVSrFa8SppwdRGQwHLsuhCHzYTduxEuucg7TKhRwMndaMMLMuyejwiTpg4vCTq49",
  "key38": "4shY4DEHdjYe1GPfHyJ5pctCRi8JKGXaPM6xWU8AbQNkXHaVmTRea4nePVLtXUZw7uSDY33oWf2pfyQirTVqQS7y",
  "key39": "5odKhoyPNSMGKr9idNMogbKqTUEGtWm9HJ9GJhD6wmpDM2jM3Avk4d7dBo9urCuf5iHGT3E1rgYdDmgyfxEP63Ry",
  "key40": "5zFr2UjMPNgaUzTxVMg4FQqcey3z55BzLJZBWYggC6xwA4fiDghpZZ8UZkiUn9JUDJLKf3vxHg7T3xw3neQ3ThTg",
  "key41": "5ev7ovkchfcUobEYTSHQHzBjdFxn1K3aiy8kQctwt85fuyiv5ULBtRgPMbNX1c7VFSbCRoar1BUVDrc9r99UPn8R",
  "key42": "3yfGgAP7FPLmWzugs1txFJhNQpaEGYRX6xsUgMqQdYPuLYtPDx4a68WBPKGFpAtMymdcMPrs2oHuyAtA6do3jY5y",
  "key43": "4bcWmtK7vf3Nv4e4U7M6EJ2re17gRqSwMBdBdR8VdmkrxijcZNymoFCYshfHMSEhZh2LJKc14AZqbxMcMeq2hYdd",
  "key44": "3cPYR3yAM46CEJgX7SBx2ATxiHHio68wGrXjdHrjenn592Jg3TbbJt4XxuXQ5Se9J1U9ZdUEXnpF3g8sPTfHE8ya",
  "key45": "YVBLUaMZanjkuAPTycpPWYBABUtfCLZuymEoxCxh1w4vauZoskPRtVZRcG1fFwko7nZh5e41yZHpqnsdMMoMsjY",
  "key46": "5RvDHqnEF1sPAfQGQKQNdzTikHoBbGQhHesrEkoA8ZWqH16UnB8hmQLZfjDp2VaGx3id3NZpRQL4mVPWxRAeqYj4",
  "key47": "2fLf3kHYZd9CWQa1vk2m3jS2Wc6BoWm5Qs1UQ3m4sgfQKZgJQ8WvySEiXDjLPRYxoMru2ZncD6aVjdFZr89YweKx",
  "key48": "2CAB5QsMCAEcQs145GbwUUQbaEsf7in66hfFAYmDz1oGgV9L6ruGV6CLsu8d4CpUXMRPwRKFaUADpTVC5arwxALA"
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
