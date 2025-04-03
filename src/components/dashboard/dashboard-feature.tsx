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
    "2Z296q1NCDPfzh11YLoApzDLFxnRrG4VwPugydyaD59UYdtR39B76k1N8HkUeBH5cf3b5vYu2xyCzWW2KAWWayiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qspryzuVzhnfFhgbQPsWfc5Axbj48z337u1YgpXx2M76o7HhPBKa774TVXR9Smm2RbX4LpA4RfMT5fYmWfM5a4e",
  "key1": "4aKgktCWWhw8EurGisCpaywUYfqsJK4WqsCQiX8Rtjxhw92TjD1hgko6JypgLY4bh7vm4VRo4giMzETD1AfcFD22",
  "key2": "5ibV1UrDEdx1iMeE6NXqXRT1NboLPvCZcp81pYq8CgHvg9Q5UnhYmw6TatuBy6KMeuZGpWFmgVRg6UN3ycDC4F2Y",
  "key3": "2mY7V4cCvf88SPscbWLf4tSrbm4GQT2TkAqcr6jECJzC5dX1G2rCVh6VJRYE2veP2gfGPDaNa6TCbVmJTeFaNmuh",
  "key4": "29hbWA7tk7uRuVVehuXYNqoXjRqezmDuLJWeJ8pEmuAkqJehTQ485SYEWNEDoNhZkm8N3Rpfx5Gz8cXML3XKMcmo",
  "key5": "k1VTDc5Q6urTWaaPsv9je9xAsZBmzAXcjoZBvGMHnhhF4HAUGv343JHu58iXJPs4Q3AqiRtwPvrhmaJMy6dBLua",
  "key6": "5eRDE1WWYJ8ChuH7zsPiU84tc5dMKmkYXS97Goro25eoZFAW3aaWdD8TrYdwjb1SNH1NpJaU2BoC3G5QGiAftS6X",
  "key7": "xz735JXspEuD5inSqSEbrF9PDU8MZtLPwMz6dZ9PaXepHt91kUU52CgAXji4MoPEiHrtTJdPxQZxWvVdNcqpku3",
  "key8": "3qqyHF1SS2zUVD7jdJouptRBPEXz16ze2MBY51L5wHcbut79CvRYoGn8SSJD2wcKENRtAG3s6257ob9jSzdkwHbN",
  "key9": "2buSmktLnVZc9RudqQfmeY2nfywXqcGu4uySZb1XdwRQyxACcerZdTKGLb9c42biFUcvwQwjfC2r4D17nmMsP89Y",
  "key10": "3edxSGQDahhuciaNF6ahSruMtHw2NrDmxBtMiPiY5PS3r9uuLMW71rBSvTeXjA4idJwsEtCJ1osUZirdMqqFrN59",
  "key11": "2BnLUyTPB33b1zAvW2kUuGh6iz9dw59PcVKbi8AiYcLShauZtRfPWdqAonHBsNg2mpqPs91HgBX737ZL5FVBuKb8",
  "key12": "CJTGqmQM69tJskFMvWCyhqduC4rRkNwpXXU3hirHX2DEXS4vcmRQbU85mm4jRWrWjgA8h3Y2ESA2RCUuB9HPGoe",
  "key13": "89v2yPQwVA4bxMnyywNB8yUNxVNNnCWZfigPCoodykRzZRy6o36D49D4HQSYGt1HQZyNS7rYHuKfLzvpJxjvn1J",
  "key14": "2RknYiB71K61jEN752RE7uR5MHD4KKV16rLkkay24LAnHAuCDsN1hA2Z3kmCGTwg62q7JTmTzEkEhNv1daDCcBzP",
  "key15": "6FX5K5TE55L8JvtnuJVoEhow3rPRF6zWRwiUcLkKrTqtMKr2U9A5HwE3chvGagGUVxJ8cPmUvBHVG7jix1bLTWq",
  "key16": "BnaDEDcK3DewQCCo5TbLwwwcyTpZkZjYycmhTikbUBvVxDzcW7yx1abLi9fJTVF2dG7MRrkFtBkSZSMtcpXJAKG",
  "key17": "myikip5SG1dXS1gtViKm2QUvAU4w3J4G3cJ7fMW31PaVRxr2eda46tJcEjxG1YbE1uB4NhJZVuzRmhTiYdVirRr",
  "key18": "4vgxxUiFFky6KuSkaAFQtFXcUVc17Ma3xo7KggF2yvqoDiBSUAZW1EaXJ67MXnCBEVB3USqjEjSGZEL5k9TVkS9Q",
  "key19": "5RUfKc62Jo1GD8zTMi9cmhwQ6B9fVr2bebRhx4UGVhdajWZPzFc7Qa8o9q21jqqr6RmbD6TxymARA29qcqrMwyKK",
  "key20": "3fipDmAXiowDGdVGXmb5A4vnyP4h6dDWzq5g4xxLw18pTiP4T3gXDvLSzq8Y8otNfXzJdPBs2YFfT6cDvy4eKawe",
  "key21": "9h3KjEZDUdqRyfVhA5Xw1ySEVT48GHyhUoAKYxiCH5tfHFfSCZUNNqxFHKxhG8xH1Tp1JKL2WQMHGisWaVqVMiS",
  "key22": "2deEkK7EDruwuNyJaYQBMrrtGdP5hDAFAT18B8W1kMMzc1TtHHEy8qXdP4BJDsYADzxTCRLtDuCcxrsUwZ3mwmgZ",
  "key23": "2zXHizWkqaWU65vocXx6UM8qkgatsPF1FkeXyV4TVvi5aLoFoWzhcoWxHSX68Lfh4G4RaBZA9ByMz6V56MHB7vMv",
  "key24": "5kGoX5bxcyTfWsTdTpHry4ztqVuoSak3AYJRzg4vNj8gKcY1nCrUfNH2gdBarxfLCZwPEcVbaj3z8itqPkCn5hCQ",
  "key25": "4XwV6v5Aqg4FMzynmybkraWVDuwpjYfRMiozJZ33pMaKRPd2RjMB3XQdWeW1gjkEzi4Djejnxi2QX2NSs8CDp71a",
  "key26": "2JgkzZ3oLvr8Y4KHYNFqxk2DTSzLztU41Jnb37R6uAjP3ArBHhLBWy9uH8YkKsLyHD18dG73XRxyiFwAn118JV9b",
  "key27": "21e9CBiNuQxSr1VkQCnHNjsWb6Xyo1vKwHjpgcS6HzRHSCsqcLnY8GSQJxY1EpYrq5Shu1SxSL1jqiJWq6A83CFy",
  "key28": "Urb8xxk659oXYCqtRgYA2apAx3oN2Eo7QHu4QrNQkxoG7dqSvKrsZQzFzSRTAMBHXNkzXXA697zCz8iwm1Aa2Us",
  "key29": "2o1D8jy4F4W279LWPhyHj4xY6JBmGz1LkX62oFCTCLNM9ugy35oV4oiDDQBithp54J6nBrTyYgpCHgXsNh4ByuQ1",
  "key30": "62eubWhPvhaEDMBQ8KPSZNhu9FsaXFTChMTaWVeUfYH8nmp1BbnTWbPPiqDkXdztBMG9MoZC3v6atTmcADLwVRDL",
  "key31": "amJKaXXjRUcExCLNGMZG5p7NdnqKZanPE8wYMXLJju1FRt7vsTg8u9KhwP6QfNtvyrxBTuSc2Y7jfFVNJDitcev",
  "key32": "sDPHp21AnogCcXfUWhVsNWr9ihnxdBfXF2kHtQKzCFkHpF1EWHuKpTF9jBLBTrgfNB3bm5DvT5vyNtAzoafWdpe",
  "key33": "2TeG841VdMjNenxWYfnqVb93JbcUdMZSjwEEjhfEK8hB8fdv1jSuCoJbouTV9H3ztDhKS6P4MrKAQiK6enuYfiEv",
  "key34": "3fxx4EAvKsjNwQZXNFkTHgpwXs8X2BAZwwYGGDwQv99gsHJKzqdXfSGpufe9Rgd3K45gxaZgvy65ng3yW4JKcbBv",
  "key35": "3HuPt3G5PZwjF85YouMseYuwN31B7NmgHP61eVrqSKviDgdL4GHXwCpjq6AgmMnsgGaEwiu6RqStCyjBh7kZiRPT",
  "key36": "4WBavMfBg9CktBnUrELDSg3cGAKyjYfjXk8Qr5Cr882B2Y95TpjcKguSHouKAY2GeoUVsHmjSySFtZ9tqzQ89aGW",
  "key37": "5dRefdAUYL2u6QYNe57GPZMHgtuVnCbDqSQMK4Wz29jLUvMbJZJEfwATpGK2dMTVXYqMgp1NrzerVR95bhZqoaap",
  "key38": "dWJs8DEtqs55pdsqX6DcEuHjSJNETu572YME8f8aLzARV87tBUdJTYV9sFHzGXT43mo8SLcUDmz1FZCNuY1B1gJ",
  "key39": "4oE3kYebSbs3ScpAv5vGoLo9pTHZbfWmWsaHe92D3rxbTjeQVgKkuvjgvudgr1CZDtxzR4zMBmy18sQmmVzbxSG2",
  "key40": "V35QVGt3HFAAHktLSKnE2A6EwY2AvoE2HtbkBJiQbR4T4u3gdkdmthM8J3dfjsHK7SfqaCvCL2LSiBRbnYPk5zK",
  "key41": "548zjwC8uiBfokCMgVEpdzuvX987ZYQEZmyLfWN4BMHniuvYb57J4ReFNV1PegDJbb7ZyKXZemerhS5pidjCkUBy",
  "key42": "2PFEbrvVRFLgpnmQU5xjXn69TuDQVXBRPdKC9tB4mzU5Em2UqSH1pdV29ZichG8jNQ1fMmDSB7tUHAp76DAyP1vd",
  "key43": "XbEmohJQMtU5XLvWEFnQRx26HW5HUTtPZiDakUVQuJmvP191rfECf8xXTPJFnLdHHrWVm5Q63JJh6WjAZhyVPfj",
  "key44": "3zzf4Q9b51vcKs1h3bpmzTiqQ4vR9Du2RR8YyWSmGt8q8fPikve1CtgETFEJrbzj9A1jTRNpMgjuAWVp3DwRPeCK",
  "key45": "2kLJ4NrYt9ejs6Q2yT2b8v3bd4oJTaVvdUWaqn5h4EyrMXTUtAnr317tVwoN6cMh2puhJwx8FtHnR5YyarmUGaVr",
  "key46": "5NGiHNJLG1dPbnmCvBBqjTRrVf2woXowgRAtCwChxwP7F2t4J5DQgC3j242KRBmU1iePW1AyvfPTCcoNkd62aix5",
  "key47": "3gizKRd2BhoPTtdEZJSLuVHfXMaivAipjo5xFQ96gU7tSV4yF2ukbQQpGah6c1UD9HDDMuGwibko5B7jpKwRiEtp",
  "key48": "45X4e4s7M92KffhVgSfvdE1s4cZDhktTozTRpXh2a47YkYmpehq8Z6y2WiVU9uMRhivKJBFxQ1RAGQAhCxbBhTru",
  "key49": "2q7AN59mwhNkNgFqq9v4cDVNhi3MwwyE7qZ4HfSRRf7QB8fPnm7B8y1RuvfCUwopKBVdGA3QSfJDt3qy52thWDu4"
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
