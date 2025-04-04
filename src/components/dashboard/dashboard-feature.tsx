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
    "5p3gnALWEEQbHwqVbZR9ik1notswvzsgzTzege2DVKV1k1Bub7h3J9GVwQhj9ksc3t5Nc5cC1XGpPbgjg7nnHqz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sdjDwifSWrfPoVArTVbnwmPPcxu2i5hyUbgogEHkQuPu7r7ozH23TMjT2KzJYjHGv8qiFjxsWUXJGztU6cMW8FH",
  "key1": "u5FFE9eV3L5SRtxmimJQw5se8pRfsnPvtVWz9xDYtE5VzSrXrUc3pdoeVayaou6QnVCvwiyhJT44qFru4uAonbS",
  "key2": "2igcXStZUS7HTtqpKb5YLpbsunzbKmGrJZDkEYSHuJutADcvBndtUmwLNqanXCVanRH1NuR3ErU7LaSeZ1HqssFL",
  "key3": "5Mcre8FHUN5yx8Z2BEJwavpbZ9B8fv5Mf8n99xNaJc9pakYfQ7WC5xNc89GoJHxrfxy1kFF9sCDAoCgNvybLZpEv",
  "key4": "2LQ8JgDbgrbmtVFRphKCu696wAh4aRT4TjQPTVVnaBr1uUhke93wUSTCxgbxntjnb9FKDTw9v3mJ8A7syaS97CxU",
  "key5": "5LowL8r9KPKAmFLxL1snVRViafBwgCNL44QovMu5z6ffzG8BtjDMHSQkKrHTsFpACVQ2eb2VyMPCXZ18Bo3v2a9H",
  "key6": "63f6DTsbyzSii8shfkn8uB1v8KWWmjDwXumkQyoGEJ3g1kTRmCNgSkVwHk38avjPnqhNvaDd7paLnyorN9fyiH1h",
  "key7": "EyT1JkqHefEweH3FPsz2sRR7Rp2XJjri4eTFmm1qA9tqrsgm6SCE1N9Jqc3MEKVR2hke6drwxJsM5N262sf6ugB",
  "key8": "2MboGZwp2Lbn4sK2Tk6722Jgukdp13ZV86t5k91wf576CBEdT9cjpw4t9xEizAh1A6t1EsKhbqJPkwrtcyBajneW",
  "key9": "4MKigTUnsUCfS77UD4B58wqkHqyP4ctCsx1rQiXnGpUiBXzrnhdrpcaQoFyQroJPJBkxne9tTgnaT78yGQGgTfkn",
  "key10": "2ZEraxTeqxWjtneYe5HYRD6kmDwSrTWEX4Q6JTgUuNpNsYxJQZa8ezGbG9XycNqdzhHBGnhiuffdG2fynyS91RV3",
  "key11": "3u1EZQHXTLp5giFKRqRCGSHf4R2YnCRpZa2TneuCWA7Jjd8or1KsgVujKz42s8wWw8FWcLpdjM2o6zTgB7isoDaN",
  "key12": "5MS6hUYUZrn5PzVWCG837xzocCwhBSXNUyFgW59xr9CN9rGFX9rroqHXkouRSci6h3gfiCKuhjSbjvcgSYBkRTKb",
  "key13": "gx5cWjT8C2x8WdvY4yuQWwg2tP7LfQFvxX1uNSEcificDyZBsdFfdmYKfphRYf39Nbq7HsQDzz9uME7YMqutjeQ",
  "key14": "22BUrBGDJkBY1umiJwP852n27ZYot9GWbH3czwGkFFhd4TSGYMuCXsMsDKjXDHG7sQ5Cq4ViEhbkBvSvC9b4uPth",
  "key15": "5FTJcRX9SWbiLZ4QPcU6ho1fT52L8cbhBS5qKPnMy3g6AqMMTEsKJ2eAop3esLrJ58mDfyDWXAw3UkYh4wPpfao",
  "key16": "5w9sxkCTc46D7Xugcz2sg4j827pnTjQuMDaRfP9H6uPffK9AXexwmErj12bv7wD8gZg1VdENFc7bAyYPyhKWfVPV",
  "key17": "3VfJZDCZEi5Q38YJthVV4UWYGNXwJYBnu1as2ubCoNeecD9hdcdVjk3pLZ7GqnPmYkmnYpoas2Svb2CBv4Ckvqhe",
  "key18": "35G59szthMVhjXY9kHM6uNYSWjCwzYVRhJWscLHPKT8WB7JFbrDcswgxEn4LgU6TbbCMcXhVcAtFUNYkGEdh9Udr",
  "key19": "51DytRLW6zWWREWyBC8DuHB3WdqGTcpKF4EquNJ64tDwBJabWpA2hX3qtfwwf2vbUt5xj6FaAQF8uPT9BAUpep3U",
  "key20": "4pMXGWMvCKdaRRbDUPvXMtgC8jXJobWZ42Q9zGxL6NBUVCR7WifmsdEMDeLRep7oyaTwGDZksi55mB7g3TB9jBUq",
  "key21": "cezVqAgiQDas7GBcQ3Qoju37Kxe2zWgEvyGTrBV8tgmbaq1gxFdTsuNQJiAeHmyvyoHdEcZfYRPgiu7B24XcF6S",
  "key22": "2YiRHCGvLiGHR2fdcBnTBZr6NEKkyFbrvEgUiCmgXBiY28STSQpcd9pfmUn2UgWtrew1GewDsTyjQ3VqaZPfubij",
  "key23": "3XdMmT7JT9gtfuuUJNRDDpegNNbjgrdmfLykMrTeGAKKzEqYQzwo9rV5UgvxBxEh5kJ4GH8M1Aj7T2hRmdScF349",
  "key24": "4MDiky846ruuvCzFWyCmq1VuhQDHf1rkdfQfx19h2Ebotuhs8iaaSKcQByNWRo81nTWpYz12oq4voYZGrN8VQciG",
  "key25": "37KWYvWqv9mnw4m9cpu4APrkPtw5np8Jukz8jxrXKWqYeWXSZuhSRR5PMizkjadTZcg8pnVGsGBGMMgdYoLWYRUi",
  "key26": "Nr8MjKZaskRx1AP19shZn9kB4kLAvV2iUxfu5QKFPXriZaWArbMUy2xb4sAFK3zaRwDpXDYCNdEbgTHHpBdo1TD",
  "key27": "5P4GqsRja2fsrbKGQaRH3qUeSvYuSff6t8qoFKBuya4U8H3omcV3SJBU4DkS5vsH1nuM5msqZJiemAxtLBHR4FN3",
  "key28": "3weqi6mKJrAjvqZxyeLm9DBe8DLJZ9eeqeDRvSgJ3iYT22wH4NPfTpEyCDfpvkuup2HWSX4wazNhSaQPbjnPcjN1",
  "key29": "5j1cH3NNUaUKYaGG2v2SWUDY6Xymrghd2LNjaj2fE3C6dWUGopxGz8KH3auZojmHTZVN6BmxKM2YWfzTmFTUtFyA",
  "key30": "43sDbsxBx1fTJAZhzpu1oWzEvxxMV5qM2ZM7EVHhtGA5Kfcms3e5qMj7LhyxXFDYxbYYYvWMWMX1LfMqE4B8Zn3V",
  "key31": "4N2mqmmAf1EyFJaAAN8NzKd3SYBmASFF3pcFE6x7LjV9asMvqNUzhkgv3N1US5MqNxw78jf7gpijA8iygR8sp52D",
  "key32": "4VxYAqEB4f4BctrUYrmVMGVimTjYyq4YVX8Peir2oNf4mt2nWqq3ZV1Y5MGb1PMY13zBgMPsr9grtvePDGoUumM3",
  "key33": "5c5FSJFBZFSzoy29B41EPhH6rPvSkEjeWrrtkLhsFXs8A6mb2VZ2RNNEfDaoF3bnmrFNcECdMPF3PErxf4wkp6Jv",
  "key34": "2ccaDXxX7Zyr35FcnLv927DpebfaYTfegdnSywuLLPLMU8ahNgAm8XLriPh34rVzX5RDPkpZ9ZWDwTTSUHEoqGnH",
  "key35": "4AdbU7ChJyvGYUUrxku1N2AjW9a7RGAqzAA7qrzzf7D7qgA8Kca72BJAy8XASYxCZ9Cx3WzrbJFojfSPXku1ypb7",
  "key36": "2tbWue6ZKLSfgzji4cYrwd5NwACv4xkAe6LkjQAdpet7399uTLvn5g6bRD3xxfoBMh96iXf7SZ5tg3h7EN5JtMyH",
  "key37": "5ZnFuYHa7TxwHp3fF4Zj4ge5ExGbPtKqRsk9TAfpESxqARuMWEKHavwQTm6t8ET7s7BVSF2BF7iqQcsLmRg7NCZh",
  "key38": "3NWkEejnHr29uCYWpaLnq5VVF95bb2HhKtJsNFTeR2bANu2nRNUasi8zCyapdeKKzdf55LvRLq2p5EJY5RyVGfqP",
  "key39": "WU62p8D3phDVedJwM4QXituuenFEwEmLc4b59Czmku2afck2QnvKSSRD42ckHs32YXGSKSo6zqaHFsUGdUmfWNA",
  "key40": "3VRBcEM8WPKoXSXwhYFEvPrvpZT9jPdc9vYXWx21UAopPr6R2vqBFA6MZmDKCeU9kUxdYSJxNYWvJRd5WJtkKdjk",
  "key41": "zuHu9sZGLW3TZRFu8EHNqMEiPgQYJyiAUsGREV6wURM1gBf1u4TCU92uosBBUGjNEkLc5zaavtJhAJnoLcTjDsR"
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
