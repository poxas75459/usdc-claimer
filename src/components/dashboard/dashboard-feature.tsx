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
    "9iNceatobuXu3jKkNngDhFCZWiB2s5qo2szQ3XAUMtRZsP54urw9a47RoN2oSuDo1i5LyY2NCJyZXk6VdwMZmV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJrP6jyjNeF5wzPGwtQ4EtYb7zWC29QgFfxitgSUxETYLkqjWXALu3WiGcNYRxUJv6biS5aqc2CLFkRkJGLcoS3",
  "key1": "4LnoD8MdbAtnMKWVoAy8p4KMf3Z13cxQXFEWvnofV1n738tpbLvy71cM5Ak3e4STteWq67fk9LAuLacerEJRqvrq",
  "key2": "5LnaWd1y8sAmhjzWimXLuL3H3NpbuvHpQj9pbeekaHAMhuNpQGtJXPrsTMzZakmbE367DUqM2CYqXSsHVUVA3xKn",
  "key3": "aMwSsh7F5zrmVchArTrUYUeVuTwRBnpXccWbWnHZyfajWw6CQs7VfeaqHQnJzg18h6W7rHNi3oF1PKihyu7NPb7",
  "key4": "LzBLAYnsNbT8FoTe2TqMq4dy93x8YqeZfe6CDrBQxfYLCaHYfNd4QSM7wnM47pGdPJH2hH7KG4hqnnXaaGuLeNC",
  "key5": "3qauHiSoDgNHB1YnapnPAg4yj2nZLrko1HaY687F2Tpj4tZ3D7q5oDooMXNSBAid4tRMXxXAh4We5LLqR1EJPCAe",
  "key6": "5efzVuBLZwiEB4WVxfacD4knk6a5UMHGbe2SzXisEoa4djDLz2XpQ8LvwZiufqFBzfx8KcwRr7fWz12TLEA4qYkT",
  "key7": "22fvygkPBUob3Rj4tW8L2RGf9UqsBBSek7njPookAHGxJmd3oD7hUiPGE8BmN5qjrdUyBMgdW64pKTG5YefWmq6h",
  "key8": "3yXrwRMfxikLvha466pwAe14wQyCNt83k9LAM2CoXpcGd3qYefiJzrRMKpfUcp5E5XQXCfYU3gS16NgVgNrtNvYj",
  "key9": "2VSjPTKEj3jVDU9t9gttkZoY28pkite6c6pN1vToHuACEJs58a1jvhJ5LBa9rus6JmgoHKxoTtWUMseDzWymrhYs",
  "key10": "2jwFxhX3a8eMCwwJve51tjahHk3NEVQ2JHYJahf5ZJmqsioRhZvt7NRbQfFoTD79NUTvVMf1vfPzVQikTShp2sC5",
  "key11": "26FgXQwxPmwshCy8htYUNwi6bNXWVVDUPofEQ84MRDRQdCHHidx67KApixgXLm59gR2MsBFkzQrGCpS5sRmTZbx7",
  "key12": "5nxDG653k5wW3xzxoUeMWTQzZ12FRgjUkJpoy5xC1Y9V91WdDCyqeHZsLxPfkHYQ11sdF9VTkjcuTNEgpcBUZoPx",
  "key13": "3YSWbjsmptW2Ka1ZqrtDrJwouXNKHTzpNAibsf2BtbSgo4d1h6CATA4fYiBUtQgrmjUJE6NurCMkMCK4GSnt3W6x",
  "key14": "3dbfeZcciQ2SkJ1nsbyt2rSsAMGZDtEDkCdtMQE41SreprfTmkVD51TAhKUv2WHWMHXW7U5bwtUkDxEKZw2obnBm",
  "key15": "59g2DC6EriYWC5z2Ddpxn3oXKnfeuKZyNZtSWN1FX9SrxRoURJmzVzkGzDJB99EBC6LdZ6Eki2ZTFz5eeVQeCViA",
  "key16": "3mh6vALArkJu4jz2g2KCk4bFTKPAEWcUkeCXJ7SRASdVZ5NFAmm3neeDizXXi3jui6AnQwnddxGS4VP1tyEJycuY",
  "key17": "2s2dS9cBM3WBAmfoebE3TKhGdRfdb5xMnPvAFAwGSWZvg3zznNE7aiFf3TZMRb2EMfvTrKg8V8xMix9BR9RUWXZr",
  "key18": "5oySzgYmAq2AxTRPwVQF3egGaqqiDbWv1kV9rrk5jGRMneSgpw48aBNfhuqSQFn6NoUsMyYaoYpCsxQcqo9KoLGS",
  "key19": "4y2Cr1yuCDZriAbze1LbnqwU7LpteFxxAqyVK4LNcBivQWXz7iBdWRvNvu8rA8JNMi4yYzZ3JaUVKJPCbfUNWcMe",
  "key20": "zVrBpsVBCn911ZriqsALxcujPoKiK3RuGbw1FEKUZmUw1kFg8f2G1frQ5KckJoXKQYSunqnr5CoabtJ1eSpY3ha",
  "key21": "4pidkkwGjcD1cqgxxs2FTxh3cbchLSzvqDuBHc2NR2NzxwWtuy5LonanjuxtKAnw9N3WLXCiuvPfy7ob8TCu1HT2",
  "key22": "2hYX3Qog9KwxnATj51kGXAYrReP5nwdZrnA5rgvVJDCDTqfuXtTgxvxShtyWDsZ2RfKnFZVivqQL2zfdYMKRfnok",
  "key23": "5u7c4EoCrmPKDoVm6rABG7jf7AhTazEoXsrLTwUom67PRTPrNaE9j8HdDxDkA1RUCAeKTbP1WqKkfJGAqpmUi5A4",
  "key24": "3pzEMwYUcSFWoqMLaWu1VtixrddWNMjQXSb2Y3B5Pyo85TB75nkrDK8gAcv1iLNX1t7hYpkf53z9nqU3fuo6hnX9",
  "key25": "4y3QW9K94buSgQzkiTzVii8wT6gA45HrggEGq7EFzuSXr1fpUi3PspgzXZP5yLdxGadr2LRLxR2RB1fk1hbedUHw",
  "key26": "2aSZReHGFwu5u6tmkSdfwhRJrTNYKYbcdpy8WcRHHSCLvZk2moVEKRQb87ZkYMZVxipBgBdjozRX6s3R8hYjMb7q",
  "key27": "3QFYERNZR8rPVZVBNnvi75kajkcFvkL2H1skoZGT7dtFbvmg8GoULfKExQQnaPWrAqvHqXYibZeHVezbs1XKWx5Y",
  "key28": "5LwuoxyB6JULfrDzNhKmxXaTDNS75T5UTjoFB1PMSoJHCjLJRGtfg78AWxL51ykY51Tv3994DAZqc4Wk5DqDokJ1",
  "key29": "2x5pBVYdgV4XvnAeN2PqcL5sxn7b2gCbq6AT3ap88hjLcV4FQFPTD4m59YN9cojbmuV1FerMLBsQxUStUWobrieo",
  "key30": "3mVFcmRjynDLJT7wJDRfGuBVgof9JszBTTvG1EmVgjNCCKe66bZ7gjxRmvoxSrDZWcakckC73x6g6e9n3UVZUYvh",
  "key31": "3U8D49HGUqL59TAbi23W9S8wrYQVHjy7NrvcPhZT3HwdNM5hwXd4HzPHe4vjtjufuXqfNWF5pmjNaaZJQo5ABfas",
  "key32": "5a7T4PJZbUxACNfSKs3ZrUkarcrdApEimVg4FZJR7mYtZkkVTvms7PJxe8VcpSrt4tXnHEyHc8YkRYgeGDzrjQaN",
  "key33": "2FSgmKbseWcN6URHWmfpkxqQ6w7ErFF5iXyLHf9tHmjfLJK95C9KUjr2zNt3nr5SN5197L9VPtTxhKpsw4GVbznC",
  "key34": "3t9ZngF4Q5obAcn5F6Xfy6YWe65FeKH53vY1ahy5WkiXSvNVWJWm3qJJWqmLUkq8nXFGzyJsiGUC4sPXM57XUYuP",
  "key35": "2aG2cFPnHev1NdiB6z6nxyA9Ey9yWCTjnRe89SHtStR1ty9EHoHya1c4gMMZHatQeDWGaGwF1QeebL3Sg8PAtT4K",
  "key36": "4CDr8xNfuKuqnheZV7oA3RkuSncspX8wiSrxYypD37GYVqJV1F2TVwGXwRCpHCafZQawAS8K1chJUSqFG8ewmygh",
  "key37": "2Nkknreqp5uWTooJAVR483WR8zsoL4ZYxccvNG4DrCrRg7vsWhGorVMeqLykzm4K8FhCyVHZK5SyRUSQ9VTLfLqC",
  "key38": "2JzdAKPEKEQfC87PTEKXDz9sRrByX2L9RiAEvVg3DmXmfJps2AgqNhniavpjRHqnWc3ksipsesHvZc9tsedyHgnK",
  "key39": "oHnM6448y26Yc1RKekAMHggB1NmdCncM3YXdLTFhTLq1KVWMwC5EWru7RbFXs1Bp1x9yKgKzfNNkq3HAruTk86J",
  "key40": "Ne81TNRSYAMR28rUvWqpsijDH14dQZMbDTr681bXXG2TkcvoUFEacrqTYXRfVsens5WjU1fWS4RdywB9r94QSKW",
  "key41": "wj3fFApKyKQwtDT6dtKPSr5iokTUDTtBDZsMcg5h3AqkutNvymAtAykAEB8LFjSd2fjV6JfNyZWXoe4csnrdmHn",
  "key42": "2YtCRMbVXCgRqSfWcVNJ8jmURrnLdXoF18QP5ehKmnwquUpWJPVoYbfMY7DRB4qkbgvPSu8vLVEcALqvMDobgobs",
  "key43": "4RdjTD8LE65wzZr5m4JmYKE1Lb5jTFTra2MWG69KNTECbN67Nrmy3q7L2HZJHdkKYoFz2iWqw5mKmCSMtTRBb39u",
  "key44": "BzwsSHXMfstmYQcTChXhQ1bCMh4RpuHo2QxiEfxxLHTdoQZUodVs82rZXAXPQvdSVCDoTkXmYVFGa5WQYwWfFZt",
  "key45": "2hEHAYTqa9BDo9wWyg78ZKBBSaFzY2QKpHNKPqocABNq7y9vdqnGHtx69GAxmVMdvVNqSaj3inoP4xEPf7yNraD5",
  "key46": "3Z4brRB79qDYWhuz4msM6LK5B4UsWqhLijsTfqd1eaVDz1GwC6FLMJDmLw78yRJGkPHR8CCEs8x9zZXKkQRnA3go",
  "key47": "2xdmirq5sxDTpPRuuwGdHCNAgrxrHYRYrgLmGrk3DnMzgYoXdGTYY6bqQSq8vKsBgRru4V2dfwSZ1x314W9gogjL",
  "key48": "9ySWkxBuzSNwrCrthBSdWwwaWPmvKiEyZxF6ZifT3DqN69J6dvTTS9QsM4cmvKQ7pivgwekEv94GvFe5fW364Bs"
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
