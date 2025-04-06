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
    "65HYSW5ZTKBC1fssBPodj4P54EoSEd37LPiAY3oDK9pWmyv1FPupQCLQzhxpbFdTwGaZkLcJM5RzfK6F7awQNbmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGs82STmkWRctZiJHf4iPz1JSKHedrYMDZSVy5CRvUHFiaUEATeMxns3ET5f94GEfjHS7HcbmfdMVLqD19uodsZ",
  "key1": "2mcN5qgTy6KPSGTkbSqxyfvBWLdPMRFj5iK6Niu1YsFRHqmGXmdNp5QyAuXX1916dV2BHxpN6c5h6gnJdaUNdYxw",
  "key2": "4MvVVirmiAJMxHUfHKbT7i7c6D9SsYmbs9gaVsobb5bqs4qt8fbPPvZ9QXAcPafHcfisq4RATySRjWoAnXgXqQFA",
  "key3": "46K5uErK3vbtsjW4uMXEbXD8HmajiiiCcTRgsfgUc9hEyREzWewGHXp3nS1hB9jpPR83fDfbcRBLzbHdbdKjxMSe",
  "key4": "5TuG75Kxnvkt1cqpXkyizLPp3J8zR5GEDMeMnhRxw7sWqcGBzMQJTQ7cR4GCC72FzxYypYnZFEzeiDWmsJALjcBs",
  "key5": "3v9BUFobQA3R6njqysNytZrynXpM52eT8BLZCjaGUjg8Awt3W5pZDrhsNNq2eBqMHbkHK3mBX34KqUZou9y2VYfE",
  "key6": "5z6bBLq9ciEgxBbUeqYRDs72mbScicnnCsnX1TVVbEGngqasNbdvo3m5Vb1h2HJVi8qnkDtX8vkdciL7LUA8xL2q",
  "key7": "4GXu8ZSkUbrgaYYooABRKBUXeMJ6jZivHNuf93PoZ7uLDA2zCD5kP2nB6aF3zDrpMTTyMvsZnF4abbNjGSTVKG6e",
  "key8": "5yD8n3MMXNERCrgzWxhXeeGbE8U6SoaYwsVGaYSofrjZM6HQHhXMpFRXvHZhzWmq3r3Kc2FJZX8heJwVqoxjXuF9",
  "key9": "38yyJhtVNBEipUYkmkin8CQNMtWjNGaPvosit6qwqD2GC3jH44VNydxi68S2mRagpGAYQwp2sRbcwHqBNzEVhMaQ",
  "key10": "4YSRpccX9zDzVWNu3YVz2dJMegnFqcBfWscY3FGNFvjimH9PnhRSDXScQnChno2E2wiVo8VUxiBQBYdWW84ki6Wq",
  "key11": "2vVfehfXMihTy6jGonj33qbBP2j3bPXUMGd9ju9beLouy1fUGRLr7NA1YUBfqsUmp6gkRp56scufu6VY3pTtGcWA",
  "key12": "5ETDZD9DBoazjRA919oBuoYDH6ptT4L1SgyudTav7tJ4MbsNVUPde3mCiKshDQunm6Xri7PuEJYHAV1RBYHMy4XT",
  "key13": "M2YDQiVYXevx75VrxNw1c8fErZdSmYqGFXHVoGMTRCzfpgN3M4SdCHcDNtBnoMsYRwz2apko7sVuDqb3sdFdpQx",
  "key14": "23sCH9shCBu3Zi5gwRdWwLbN1jZc27D69z64WBZ5bhHsxs6cFgc171PrE7r7tyRCP2wvkQqupydKN1AZZJjvFTwu",
  "key15": "2QEwoExHPkeWsuXJsnPX8DvNNe1GVZ2SoD7Y3SaWKkLt6to3Su4iEoQCjFPHabJZNrPzq2oWAjr9Gy9UEFSbnpgv",
  "key16": "4cYU5qUwbjtQSZZfjRRxWzjyiD2j84YuqiZGDAoEY5oaGPLuDikFXy2UBSQ5qVo6cQQR6LcJmBAVCh5uTB1Dt6i4",
  "key17": "2byxgATEyvRVuVJ8x4pUkpUuAanLuAtq7LvopZyayN3wx8qe6TYg79zsWrJysRdfwBubcWcR82hyZxGpufTBvrpa",
  "key18": "46y7Jvpi3YDwjfCMY8Hu9ipQn36zdwJ3yd6L9QF5rhEARaV6F9rfBwjacavey1QRoaeSE5GVec1Z6ZNgTXsZn5w7",
  "key19": "rcB6bEhBy5KnTHtnrvaFGfYC7SSZf9NjSDCd8483oCmDDpUPtYuaw9eC9dJ1rusK5Lw7JBGoTovKUK55LX2yFoS",
  "key20": "4hzU3pUZAr4839hTE48dn2yfqSRNU4cwKveYoqkvZ5ieguLGFMETRWxzSjs2x9fwLQW4TpBxLHfoVAT5yqwdATUB",
  "key21": "3XwNBYhKT7vVAUHWAsDie25RKyQDfxUSZD53Q5PoN19XZVDVbHWCRUcFoEZjLLPCiFd8cxqsiqfvJjnPyk4DPWA4",
  "key22": "5zs3gq82NrPHNiUEDaL9mjW6DFxGL18K4sMkjzDCwz6AeUJf4NTaR4AiASrUQMeCFNdtxhJsprPh8c28NArFxB4X",
  "key23": "4Nzr87acaZh5xpjUUbJTgxPNeT9FDApZCtRMN4kq79DyexcE6cKK6XKvAudrJmB9Amw1nfPSgrK6zcdVSGJjMj9k",
  "key24": "Wo9ZvmRwZ7sbVLAbHHtFGYRSuxakY8q9TkgJRJ68n4ng7BHDwi2nernAcYhbReYt89oXV4tKF3jm3Wz3rS9tQys",
  "key25": "4TYWQNntPZAHKxKAnMhVz3qTJJ2YbvMMHSonck7AA4HTDXnzjPFmX2UsXCGWWHUwzHoWiHKE2Hs8zx2LuC5rVnH7",
  "key26": "5zcywVyhq5er7XUhAfQ471FnnELuniZWBiu31WnNHP5fmBKyaM6B8ApH5d1AZhCXNjRKtCGpujb4cXLdXebbMx7R",
  "key27": "uDTYwXVDGRsbDqrStHVwahMGL18pFwyLc8shrcsjeNVeMqq4MXWdW5yzBvkdqhZb4ps2F9Hnv53C9FWTf9Pfsr9",
  "key28": "4PcKSgDKC5MAmJm8bzBPazUAAUUuHuuCk5AqvNZXyg5gu4V96BKheayjTKKWs6MK7rTeHqVV15WhCYuab3Ffm6FP",
  "key29": "4uPLjXoFv3EioPFcqWqgfU2JykMHRoNSq6dXo7o5ZL3nbR2Yv61rTsdtCB6wRVZJK9nVEida6s7PsRJiXSL4hUkG",
  "key30": "5gXvAVLaJfhGjzUFxz5bFt1kSNZPC9qDPY6WkCWWEwhNHQjn6MCwyjmfUCDzMpog8WcJcZ19ptDuWZyV9AUfxSHk",
  "key31": "2pgdzHEr98wbfPSgsi2vrvCrfLX8tmhcMpaRTjBZqcGqtokDQmvvnbzrjYY5NGPJberBxA7P5UYqezZWkzcGYNyf",
  "key32": "3emixcRCZqZCbtGjaUe4xiKczPV7v8usRZMtJHY1kTN2uzzaMEryiavBofB2nGMNwBWvaWo6Xcj89qWdg5JGGm9m",
  "key33": "8cPH6s7fjXH6SdeUN77YqgZ5s54WMzgmWUR3mTsXRAZm71d7Vq3nuY6v2h4NaBSGPhCcedQitD9vk4TxmiBMogp",
  "key34": "41DbKdHWAqQUnHwyhAmLxHrTUkW6ECUmNHFcNkaRs6Q3MngwfGyor7cj45vLHY4TS1CptgXCGnd7XtUX7zj6xh2n",
  "key35": "3uHGx4TbUzKsNbS1GZ24ntU1zG15zhVUDXyAEV2rynVvKReQ77239bPyUUccdtjpDUSrRFq4dtTKnV2UJBHKV5AE",
  "key36": "2esJN6RY11AWVWRXX649UUJV67zHnG5WyZcNLWmV5L2KeiEQ1QUVWA6uHSM1CNtWnv8p3iffmhV14jTDyfuJ9sfm",
  "key37": "97NrEcFyRNdHuqSyzCBxwq9gHXm4UJ5jqdCLC8Chc1Hsq95ZuZDRriYYpgGtePdXrni3zmATTMP8SVWDGg6zNFt",
  "key38": "4aspVtgCR1HJnGbmZmwvhXWahwq4xPNvm3tkXVUepAZ5trdz79ym2KBHzyYkLER9cxQZyYpfaVFCP9rrQ3w2HBzd",
  "key39": "3JLtN7EcQt1bhytboGj73EdF7RjsBjkpEJaKD1eoDBHJ9E1hFikJjBgaLipVS7fuAw2NLoXVySFcKPy6neQca9AM",
  "key40": "2MXY3mT4Q3CTRNMrkNWpkojvMTBeKFWBmnCyyFGePVj7M4v9QXNBUF8TeoMwWV8dUWVpN8CvPKGAPWzyrBsgtJPN",
  "key41": "RXDBJ87RZd2CLb7XZRoba2TgYemtrpvpVomZdjoJc5joLN7usgSu7GukEQRpV3nrSZLCjvPVRTYFnJbz4Gbbgka"
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
