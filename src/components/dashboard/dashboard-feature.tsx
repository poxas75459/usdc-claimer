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
    "2mTYiSBjzZMizBgxGZCYbai4CmYHuRvsnXGu9grYLRkJDRTT4s53X5PohdcFDr3bTSBvapLsazHsN7VAeg7nVYpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m59m7Pcsu6SrAmg7kBqUDL1K1btihhiQZ8wuAYixcgDAVUS4P4gPgQhcMsq9btu5HZwcCwWmvVLUKFsETTjgmHf",
  "key1": "5jeCeghvxGESVfLqXNG4waQbRTAooTLhRobEuaGjeNBpwRDmfaMat2qzZ4HLtH2hxTfwp3aHdK2WM285V51Wmkpp",
  "key2": "3eMrnEG7bDchdNzqTSDP59A6uY8EQ7RN7XwQcaqUwK35BS4CB2ES1prqWiSMdygMeBayKw2qGubEsTTUxa2yJve1",
  "key3": "5WgQgka8HH2ZcbzcfA3vNd6w9FxeTSaQfjV92tNHdvR154mQHAJf9zT5nwaD7DbnbG16UWvMDWh9dShpUXVPz1SP",
  "key4": "2F1sf2d3ncMKAhAURbt8QqKGy9iS656oK8uVvjk4EUANvWC9Vi8Zqb28CWcymBUcqstq3RidRJdQA26NFZvh3hNr",
  "key5": "242ahuKnmbqWMeFKK5TKMsVRWZAEmw6ZSrZAoSvtGjJB5PQFf6fe8a5Cs3wmyy3Cc7YPWqZ2QYqR1PEZA5fPwZyG",
  "key6": "3R3bwcVD4pMj3o1HVBwHg2mfWLgdr97EUDrBNVnS1eArUdg9ogEc38zD4EmvMaG61dJjne9qz75DwuVwBUBWgo9w",
  "key7": "JTchmiGiULfN5za73MyFMHCrMWaiagrw7tjsLjyLu3CQ3gXaMkotNBd79xH3h7dLgiKSKXGUg1QzKh7bytWGtqF",
  "key8": "5SG8jAwXSXmFKQHKh9gDKAU19mqTiTmTcCSaP9cCVxHNKiG9AT7qoJtY7QEzbCd2jtbux6fSt18XzjjVUxnDNNWc",
  "key9": "4aaUrc27cK1hYsRZW7tLDRZFz6C6t4Q25aeMkPfGofgFQLBx5o18hFkp6RqZooxi128fCyhuHuhWnMNYzyGBGW97",
  "key10": "3oMwgq2YdvrvwwfUYXZfvawPVxvakHubbz4AjLXH35yWnxR3ePUKqUT3FDTtfxeYShD59J6MMib9FazDuRPo9xkg",
  "key11": "5ZWttTv4kuGKjVkrnz1hkud2ikdxN2tLFhb9LXds2GYov3yjp9gj9q71sbgULi9aFWsqixPfsQtWr47SwzFBgGSw",
  "key12": "4DNUozX8juCryEnzWoak3Du2DYaMqKhRgyn9jTeMVAx1E8a4qVweekbPNAPe2R3SaA7GmrcpnoB5z8p4VCqeJQ4q",
  "key13": "2hHBdcVufjnDNCyXvoi8pZjD1z1R8eZvh8XnbRhW9nZsiKvsLaKQXQBjFTwrrNYzMvEXKjdqxvRT2ExaThsq21Y1",
  "key14": "4TTM34iQSz5JA8s1V5QB9hXpLtpzt9GUcLBkwwszb9vnX1aisGVbGMqoVdonokRtDjfUVJHufKqBXmUBoora4QaP",
  "key15": "2mj2o1K8iugPg7KeKq9rf9isN5KxZb62Jx7KR3WK8M9oDLvZNn1Uy7cfuNYRdnP5wKsSrELBPaGZqbQWvQSHwX2h",
  "key16": "5LJvX6Ey8hyCMnjvcarDocnxuFguE8cd4jYHpHfSvuxNAvwcjRRge1GPm7yVEvymxNcyYWW3zRYVvADz85Bdgu4c",
  "key17": "2ETB4XJ2SgCbthyKnVNoucUoh7BMX5bXE8dya8wSx4eKQwPJMVvdRkWKmnhTnyZkGbQhSN9nbacj4szhSTekHVKP",
  "key18": "2WPvHfpC3Xnq74bVZDLXndJLmct7xusCu6gJzwz8wsynHeKVY2NjQqe2r68uSVfPyAq2VmNsvEHTpp28oMWTufHn",
  "key19": "2VeBdbPDd1XuUhF8hzfhoT6cGjPC6huRTMGTeNSUYz3mF3PsHFgCrEJo1g61D225bFEtrJi9r1zRWGb7so6gyUs2",
  "key20": "2HTHeBhk6zjKynsGxSpAfdoocGFek2SE8dj3djnWkCnyC1b3Rv3cPicWM9Poa3NytR5NcQ6gYBzx8ZqwK16g3YW5",
  "key21": "2gcZkpZW2SexjxmeSwTopKbdMrRByKHorrQjiqEfYqmc6LmbafPn9KLPkZZ6qFhCNJGEnhqtLVZRc62Lxd58a5NR",
  "key22": "4aAQaV2mXtHUckEGiwKjQafYVeH56G7mkNME55dC7qNAgBqi9ADkKKUo67wyFPXaecoUJ9hkHXRFggEfayb91s5B",
  "key23": "JtivvNtReJwnsE2csnwvBRsYTCcPPALJt3bHMWYT2FrX26ej1Eq9YzXygTi72X2fQ9G9g5keVHRzy1dddcCEuyR",
  "key24": "3hL6vdXiHYknLNMgVGKBiHpWkiSLiXSN5Y1ZZet9pSaxUXSpWUjv2Tr845JFuKp92iBLqX1R3mxbJHFfHd8QLU9y",
  "key25": "4ARhAYi4g3vZtU69Q7ciZp581ugo7uiKsJbnwVXesGJwjC7dccfB1LruGCg9JRvJ1r3g9sxrgq4i7n2YEYcrHVB7",
  "key26": "5uMFvyhcTWyCYN7h5BzxXeLPZgcA2u4zkd4KoTKB1DfULwahrrrugPMCJMStCEtoAho2hcEk61LSLJCB91maZyVd",
  "key27": "4umMyidZ4Z35tc4Wkrj1pJtSmM4mgCp29Xqr52BfcPaUA9yc97wPyMxRq5Qca5R7wTkigc2c4zSpCHKfhCa5Tv5o",
  "key28": "4xfxxCZbtuufMnnfKXwxaAUvN5THQYxQ8ix2Np1dvxaJk6qMaeiHyhsPCSywpcqFrwQSHzPrmuMf3esFnHoduvG8",
  "key29": "2v8GAckCEpatapdgxB17Bxija9pEavS2sCqjTxPMzVrvcxT2bJuXwy3MyaoyqqyVSLQWbMX4DRGJHKn9Gqf2z5DP",
  "key30": "391diibXGW2hwchpVPvidUDjE9APwnaAmeBSzbjnHYqT4pPWPXxGQ1Pm2o4NpRQiowDKAMuD5NRUd6c3FhF6DQQ1",
  "key31": "gEpnJpnMr1v1X1o5voN86mbrE1BDwxtHh8HFZSwskUhADrbQ7a5oWRsTQnEkWLHn2UaSj2gKwdZyHUX1iwgPZdY",
  "key32": "VgfPbnxT4yjZSQhpJz8VPyG3C3yB8oZgCx4X2HvGgVygTJFt6Ze5gL1Ks8Vy23dS6ofgdYNBWjhzRWiPiCntmJB",
  "key33": "dUtfU6gmWbYXe9HibfiacfvhHYwPib95LkdTiuDf319KzHggtyZMVqKFq6SQoqXe5SbDeEq9wvxX3fg5kt3fR3E",
  "key34": "28Rc7pRbUs4DkyDfJEggJvvJGb3N2y4XWGjFBAos7CfF76xNgY5NUohzQiUti4oEV3m4iRh2UarmMe16sUiaYsFT",
  "key35": "2ynn164xGpbznLzdEwZKbPgNjeuiAjjsWDCwN96fUzEsiP9wrEtGu7ve5ZYEMjmesWKiHiDmKwVsZ16ZNJzknm2S",
  "key36": "5UDtY6UbC61UGWt9yTzLnhdTFEE6yeY7hZmfsAMH2Mw3aTSD2oWopkfWhBrkUyrsyPC9KcLTQXSGkkN4aH6jmnrL",
  "key37": "4sX8LNMHyVMSb2X3zBStUFD6tpeXdxCfNhhJwvB38YMNGqSwBcYzZWC1nbUeUf4h8JaRQodUaeYHfifPPS2mKmf",
  "key38": "3sEDgbSwGt6eWGF5fsgd8ANzeiFkeVdGy761QB5pL5uJmhQmck5PSfxu6h5FLRHgDdUaQfRyMvTdugGgrVNb45iF",
  "key39": "4nT8L7YLPCtK9EvuyJASZ7zcmSNfutXw9dyAi8ycsDKQb2Ce89A3xvdK6ews8qEPD39S2fSbjNAAoirfH9PqZajX",
  "key40": "2AnASFKELKBFFXUst17TRQjF3LV4CTd7RKbYqQPmPpQASFZ7aCNhRNMYTJQWarHX3W3Dq9YGamSibq1Q8airmYqx",
  "key41": "gNMfBVed3cqvwxjjqZZne1hq5isn8nUP246RpGS7aocpdtEsFTcsPzNXuHAUgLe59zWGgNc1KLte2oNJpM6oCQg",
  "key42": "25pTTFCbktED6zXhtp3SYZ9b3kczpeitmdew4En6kuwsDBF68h6UFxvmstb3BLHNDMUmkvkjVrA7YZkK1uiiqQoW",
  "key43": "2RD67LnFW5yxzbMaisNKjzmxTr53UzM51Bq8M1gr6YKiPTQnRzQNwM1dhHyUnankjW2V8ihgjuYNHDa9yB8a4Xqj",
  "key44": "62yYeNSvHbdKXdFiTNAdPViohvNfi1EiZDTA21uMs4cckLvQxnmH6xRYDHxErZSCta4cE3X7awGafwMadvZWMPg8",
  "key45": "61PFVfWzXPtsVmSbDLrdjZ2kFyroDX8aEiGz1GaxpTjcov4pP4sKrDWR8E4AxWbp84H4EkSxnqoaXP8a9GhSbHCb",
  "key46": "ygSYe2yJzBHTTs2Z5VqJXkWJCGgZgGLs2nDmzp4Qtd5rXSzPyLPoKQP7mVnpiagUWkX7CqkEdAw5HxVfHK3vKtq"
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
