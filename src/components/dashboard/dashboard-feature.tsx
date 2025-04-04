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
    "3ryibywyFUA8rz7QEoXVifCNgHCpF35sZX1NpKipP8P4Zc4T2oW9EA7DtMVnWVUo26oxnoRFUbSPqhxYTnxL53AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFJNSPytkQnBB5uLPX5LwjbGRbafiDARK92D92LkBVYLR1XZS5TxP6eQHE92uQVmN7w95CmwixGXf3BQQFBbVJa",
  "key1": "2DG5YQY39C27NYB1Ky81bh9SipTTPYDpqQivdrf2NtJwPLgEidk9SH43EDrDK174HbXA1WtwokcNtxCfpA61vWzV",
  "key2": "2BzX53CkjKwpifCANsb5u2AQmgTEhiNNPUaVKs23PUvNxuvKv7ApH6KjeBi261URbnPJ63pLjTwqsa9rwHqCvpYo",
  "key3": "4WDXQUYQUjx2RXC5vmGJvvUS2qUMShKnCRUrHuLinu6wUFwAbmug3rjrNvfG7rw1RQrQNWxMiJwcoSgURUH9BJNm",
  "key4": "GT2TUYWk45X4Usi2yyBAv8PfNaYV5Kc6VsGUJusUbTuEYEKEVrVuo8iRwN8x3YmkagSzoGphixpWfEhKM5hSg8h",
  "key5": "3wjcCciPCcDDRtDDJgLx7jkiGzJezsM1bfJUvee9rNCYi45nCt5hFAPsFC1a6cUwzYzDMAhN8oS7WffgByWqPK6q",
  "key6": "4yKwcgpF1Nc3FtEwBB3iwPyNotuY8R7KjKW1ta8Xhc9sMc1AFuhuEi3rkSHS1D228hRFCfpV1fJuVx1Y3g1TBoUH",
  "key7": "3E9TJz8jeRMt1E1qCk37n1cfTpTGVGgSPYaa2BBaLVxvNUogusPsh6GrAo5kBHmpZPeogMVuX5Lm5kqsLv1v8vUe",
  "key8": "hFqkiRpMJUGDWUsqHNDhhH7vcyBvWiT4Je4cqZ5923fJ3UuGrXzSA1kbRCALKjWfwCTBwjtTSK3zaPJKkGEKywa",
  "key9": "2wvXDDvCb9qnZQScC6ydK1bXZgAKD3CX93bPV4dBp63GpJkuW48WHNrFXYf6YS18QrxyPh2k6RQfR14k7GQjAGQZ",
  "key10": "5pr1hmEBpqWMsKS3HyUqsbyQXj86xP4Z8rNZYTHTUqQqvT7SVsSKz918w4Vjz45WXBes2buqnyevrpuLDsp3K4C6",
  "key11": "prbd7RBbb1jqvj6GsvDgUr3UwEjE5iKYJthbktNeqho1Y1RGKmxFBt4xA14cSRC1myCneRKi2X69wVS6VCqGUp8",
  "key12": "5wsCk77GsZjL5pUAFqxfRa5abNG1tns3tWF75Cfw14ufAjEPNdAP2KeTVyNCd7L76fDJgRmWZigtzn6LuWhJZmMV",
  "key13": "2auHb8Pgg1oyjQsn6xruo3SyD2a1hPry54AvQuV16GwkzmXbFf8cw2kAqRs9ebiD6HFixLEN2bDnS9VA1ibsD1Ma",
  "key14": "ptWE4eRt1oJKniUcbpn3bFKa8ZX3dPB3bymMUymR8GP2xH4TXNCKJHBKfXBwsD6NqVWKTDkSEcF4L3GHTkWtL9W",
  "key15": "4obFrtiRfJ6M4tCaDzzbqN6RjpHqVPeRQGbdUWDuhBe6pKkjAPMukUJxemGyphHVtj7u41xCCfB3AwEn6xffp7tC",
  "key16": "6tvYmyRDTgoL9Ldzi8K1oLJcj8R27FAJo1hWEQg53Mn712N8vAuUqYWroUowaKGkfZ7Zs76Fen4vqqLPbu4a2U2",
  "key17": "58EgNrXcgMnmUiteMBjhTFaBjBVqjfGqwXYXg9eALqGsaHrwo3J2NGSAT2y6PkGqRY6BJwKPq2vgLMPWVTThXBiD",
  "key18": "3eYtHo5d2o3MD8A8cTMkrhg5c6BVkdH1KB78DvRhUa8733iuDN6dhkcgmsMcvLgSKv4iSr5kBVCoshhHcW4f1yPL",
  "key19": "5C2FWLcKcsiyvEFzg81K6XRFSspzRMw4jC9GPqHpi9QumuGLEyENtMpdLADLX8JPDd3AHzAPN6avy7bj1mKTBNFo",
  "key20": "4kzcc1D6nGFnm8o3UNHPpC3tVufY5oPj9WLCUehrk4toxu9B5cf2Zob9BngFXRGd2ZQZCVjoJ1eQPTv9XiapxDgG",
  "key21": "FbqTum89VjDUL21XB39Atg33QkL36tn1nSsKp8X4EsstanQMTjNtA9pcfi1zekVw7ERLCxH3uBCYReord7S4mFp",
  "key22": "5LspX55mxx5q9D9iQE895ewfwbzL39oHSaMG7E6nDjsbAT7FVPVDQ5tU61LyHnaSBNad45GxXxU2UNJwUj8ZCmot",
  "key23": "2qFaPFuL7wZuNnSmD9EPu1hUPzurz8GnFJPQRQ13oa2pyfMFJWFRmmygVMVakzLXTq8spyyp57AXSTVoGzpC9Cks",
  "key24": "wn7iJpUmBXGVp1qTsUTViLxzrChEPXwccYAbnvn5Ps64cAVHwFTxzxdGpFqpHszJEjwwLDcia5qPCFpmrdsn52e",
  "key25": "4MyfTDD6dEaEWvcYwhWBUf5s1c6bS1UjSRHUSJFV9BqgkNUu4KNoomDezXrUwsKChzmWNaqS4ZLxVNC8EiHLL6mZ",
  "key26": "4xVNTHQ4646tr3cw7UGQkcL49LVRiqioNX55h9cYGYEMGdanTNDibmUU2ieGcmVzMjHwDQDHm2AQS1TVfL4FGwnR",
  "key27": "4pyC7vozab1f3B66YrLu769HNNt3XKT9KvGntSNdkvs3VHpafHVatMfm5Ywb7tjLV4F5iBwbjrcA1UsJHbVjZj4B",
  "key28": "oTSpVNX8DvzkGBrJyuTZJ75Yqmji44nj6esYDxJyybGvRQ8hhpLiJfURxS4K3Cmi4R6nNYJUck6vx5w3dcX2vXo",
  "key29": "23PhPxkW1P9mcQ4T6tFsJmLkfQwNjZVpUwamZCrUqnd1RKX3GKUDu8CJoQUiA4S6kjp1FuWXo4Zq8DPhtTxe8apu",
  "key30": "474dGkCP8qVwmJpAqiK5DV7KoYBgRTVSfqeb6oj3GuB7mG2iwVGnAiMxATFfmpMEHaem5SzyDFVgkHDsJiWFh72Z",
  "key31": "5i9GDU2L4YfZ55JfuCtoH2RW8oiTfEm65W8YAfQbvH66rEaJ2xHPB8krqquQT7Dm3C83QFxtmvq77UQEpeWHCQ3G",
  "key32": "3auZgJTVdunXigeAusDe7UftgvcpnJrJiTgHtZSpw1WwFcDHMSuoKcyomWNeqxe9Ec1VSU98vpg9fNHCLJcWjZhu",
  "key33": "29bc58EHk1HHUe1SzBVFmT1yK7R6M9eLpjkS5LG5eT7mGASRWHb1Y4TxV4xe7R2SNxomZKjehEpmyjZzrnNtcKL8",
  "key34": "iKsV8Y5djWyHgkikcnBynJnP1gtKDwMCzfWpaTjzSmiwYHPMhZuLk9q94sYggSHGPmKgE8AdsMGbite5Zq9Xxjz",
  "key35": "ee1aXHnxmE2znssFg3fFC8AfKo92Sq6bkZdz6ZxgF97shUNmYwANbQiZMd92n21PX9JBdFo7kvFKfAEGtbxCNGS",
  "key36": "37eJuLUCbRJoQMyiSSVHMfZyiWzUTUX1mw1snL3gwAMeJAaxif5zroKguSt5FUo6fprN38Vc3YvbLFX2cSBK9ptv",
  "key37": "46pzpn9whVnznd58omdhELFv3v1m6PFC5mwNmpJ6PgpZb26znuU8uphwSy5GAHo4JyPtYACta8EFonrjPL2UiK8c",
  "key38": "2US3gsTS3NKWCavosAae8pLGSjsfiSX2vwmT5FJ9eSSS3mF5N7bbmJyJnLRqaMWyHq1hCcyqUHCGKoWAYmKiDhkf",
  "key39": "3nY31kc5YWnCmCLDJhTBzbYDvVecUh6K9JmU2qfrgPY4y6ntwUPbe65XeKb54XuqB8aWL72HiUt8JRq5BQt2GuDJ",
  "key40": "4Rz5q3y8TSSTDFGo3ADHPNAai8ma8Bd4pKXdg3bxSXC3d4jYAct8QavartMmLdmDNzbyU4s48AyxKER4DaQwyuFe",
  "key41": "2MznZUS94BLR8rUcUhYWvKEQpqJT3n4kgyvqvusERtKwD16bCs9u91NPevPX8H2ubEL9mJ4jBDVRKbrx5UGAeuZR",
  "key42": "5jeVyjetfF92vsCLaF3e63XEPtFszaydUfvA7Gi32WxQTHqy8hX9VwqW8pYznb3QEBRymrrZtkUBn3TfSRN7MvE4",
  "key43": "5Yi3Fb5ujbonL5oa25V5CaBwv59JB2N9XitDXow6wKU8tCA2WgEUFqaz8vvrcvSW9Q7fM3SGHCzg8NhkoeLLd3Yo",
  "key44": "2xbPo69gzTj9mA4qTZm3D2ahzsmGz3EpQtes1Y2bsL5gcYLfexiHtQEAA7iAyNrGxEYDRGKruBjA7J3JDZcyRDST",
  "key45": "4YkfUS3PHzn7bbrsynEvP7xwVML2GnDpaBg9JthwW1dQojiJ13yEES5yYn2eabbMcqFzEoh4UCVGcRaGsT4fbo62",
  "key46": "sv116A8K9B1cFGGLVgnG3Z44M7CJV7PaoFSSbdTX3mNreznnAuHyqRMBaXg8GFDRXJV7HtBadH2MxsLvi1i6Gpj",
  "key47": "5tQUy5fZT4cY6661VXUDnWv8p6GUc6o7JE1wdR6USuDggBtWPCaZMJjoRAZZVeRVc6QkN3pJ71ruN3ZdoK4Kp8qy"
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
