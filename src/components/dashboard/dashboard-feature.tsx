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
    "3ddGCxJnm6WCEuQ9BEuhLVdNYBc1hoKyqxcRbsTcdMoaKJmu84fHuRxd24azjixergvmiDzPUPzgTNw3ceF6Lf77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDcUZGUakwuGTSeTheWiTzsK8qMBWqZ2tUr1bXUa2pmvZqZevPX2npvZ4nZDcekNpuPGPEN23BsU6G7SutYNiX8",
  "key1": "22eMBnmT3fJQCEaXR8MgDGNSey7vV3pDWqMTtm9xWhWwmcTwGo9UDBpjwu2d31NptkQuWE8v9t3RGZd44B4bHx88",
  "key2": "3CYBQgV8UQV5ByfpmWPtEYHMnahrh2UG1GwiMWXiaSL5SV3ZgPyXNF8XY93urwN2PnoTLPgRVxpYhBcKBs3dUJ9n",
  "key3": "379y6yTiK5mV7Cjec2PSrbLjQaHbxtoYkN3nECLVrMgGwknGG61b5T8he6wEoNQZ2jvsY6uG5y2qNRZa67P62byp",
  "key4": "5SZZq1Wcqsqu4QyDg1jMoqsbTZnxxeYs3x6wmXc7unsPerTJuzk51JC8RgnXxJJnzMUL3C2enUKzqyYHLnG194Qi",
  "key5": "3gLhvxNHYrrNsk1ytUFxnP4UTR594obE3pjZNBkdJcwGw4BqmV16oo4wbZQpdr8qAD6CRnTLiEKK4xype2BS9xck",
  "key6": "K4aaj8VYG8J84qnSzNfLbhkKraCjDnsEnGEit4fbjoGfhf8jVmFTYMEpz5Aye3bnsRDWMtHDC2JcFX2AGRUKjEy",
  "key7": "3YFJpvkeerU25GW3X1RwqMS3P7vwMBDoCvXmhugAwShAtjckEtNmEPcYLYdmfEhJmmfFWvAUFSHJgqw4yD1L5YF",
  "key8": "21xABMLcHQ2cy3M8MpwLffzELKJBiTFHrFqd1oWr9VcKgCwAPQzWFSwkFFwjtJqsAN5pGKHpo2z6RPmKZvdwhLzE",
  "key9": "3j8nqbAQx97ZF7SkV4hh6iLVyxRzjYG2652sE2iEZxvCsf4BDJjNGUXvTfg161TGgjPrXhKx9BEyoSNKpcCRrioT",
  "key10": "2zm2NCGVL4NXv6taGAp2CX9NR9BSoKomATTHDMT2w2VgRkEBdKNbjnyGv3ZzKGBKdLc8phevTgZpopdc69Z1wkve",
  "key11": "3kCDJYRdsiVz6RimLm5xEyTc5mB1JXU3oVVCPwQD4DcdCT28SbxS48g8WQnX8fMDETHdbGXeLpNAJCwzXEjyyKde",
  "key12": "D8CkA21xw1bH5DUkPGK54LNGK1i8TX1EHK1ta5TyvufFbySDzFm3vQGKmsFWet1vEHcfEY9SecotdpAk2Hs8UQ6",
  "key13": "5ZAAeHfxWRzsuTsNsGFcSXzmkkqvU2EEDkWkpUTRdAR5MKuzgNwtQgcQYkGUxtwu5uLprwh5mJQPxma6TCYsjugA",
  "key14": "3VYw4zZ2jajenYaS9yjnmd5AMPzvVXse2k6kSbaLLLtSjkhnf297LfjWMJ2wg7TdN2j3rjxao6p81Jc5GXD68nDb",
  "key15": "4iuBriStwzjoybJbZ2XeKszMj6GtAFz8vmfDqfi98VtgLKUNr6ZLHbRRENQFnZtKVSSGP9jxjdrz24ub9QJr1m91",
  "key16": "mRkTmVeTEX1v1DTxuYWGnGAf5o3DkfWag18M3y97cYSKGHM5SbWxf4CPKWETAXPYiYM2kmoEub1taH7fTb483Lr",
  "key17": "2B49ddXLCd97SvjzxjEVTiUs4EjxeNmXCxCZgkTVZoxYJ6KGh6Eh31EShoZ4DhpwqVsPeVju6UA3geTBK3CE5ytC",
  "key18": "2YAVKXAAVKFbbqdTrgdR4owSnfqXKbxEpwHcNvX1od5Db5qgQFY79u4N8Je1bpMCq5yn2N3bEnAwKvR4RqLaGLBk",
  "key19": "FLU3MeX3oAVcnhgji5Zf7ew5WdgPCMNXjNwN3XiTMScZ4u3MCxEwQ4wJPrPGYEjxCECj6k9LBZ7CjaQgj7pXeG6",
  "key20": "3G1bnprGWUCUYmXv3PtwhJMnzaU1YC8Z34yNKdrf7xedo19dbiRv6LWzALimDwqejKJxi2iMPNH7W9PwvXwa3kZz",
  "key21": "4uCdAS1q63HW6wPEYTKWUMdG7aeZ9MxsaQwRD4xjuJ6oQ2Ck7fLg92TxduGvXbKud5gmkf2EeLuRwuv6kpxWj9JN",
  "key22": "5PP3GtvCnsqa8RZ9DcZY6iBTTiSBDWBZycboxLYiq4AtKaVAA3Y6Yf114Pj3RoKGUxQTLZ6S1EDy69639kBEiQwM",
  "key23": "4DmwprC1ma2mwGtmfPiY6Pvy8TQzRKGwQjMJgwCs8p6PzZpudWT9r1Rg27RpRdm5AgTDcP6Sb7VDKQjNPm4uho8r",
  "key24": "2E8qu9b1QCWJtprQcMWLVv8KvV9B6D8Z5EXJUD7KE6anZxxCqZbqxVMULF4EaR9XRyLDTs3rv3NaorEcf65KTHNs",
  "key25": "58Tx6fzjdfufC1f4mZhJwiSTbCepMCBfaffssFyogsyuo9kz5DSYTpg8Uo1Rv6wQxBLJHRBtkJFrMWUf6cUo5CXU",
  "key26": "5ecjBCktFygLC83xZELqPmcSkKHrnCBqcvw2JRLBxYm4gvWfE6WEdWW9byTheyCVezxgJ8FZQ8kwqaeBcYzsXJj6",
  "key27": "6382i8fSxbG9s9qwakAnNNdS6D7wrxA1PBytnh8JxB25Xe4SqD6Mz8SY6gXJLDXpN73aD4HVyZ7YQsHbE67dUxMi",
  "key28": "5oE7RJcygcJGv1mDiFDc6gpJHSGwLtLPcKUDwG2M6WixbEBk8sjkLxDi4qBvryZZ3K2m2q1yifQrzhF4U43DL3e7",
  "key29": "4xJ69YkwSJYedKk2mCoNTvVS416GpdcXww2f2Zv27hjAsZuoo3YU1TzV5XXx3fosQuReMxW41gd2Y2ceU44mHbjP",
  "key30": "5zyHNE6NCXyuEBJ26p7ANkWCLoGd8WEamPmow2DspRoAvbiUCiU2qJ4PUHBxrukvqZm315QUFRmozhfxo4C8JQhK",
  "key31": "4VNTAMSmsMrpKMzMXM3nuYBerercmFRMLq1vXCwWXWkGN6PtDAVeB1rD5gmSfUWWJYtpNrhU2aphw2KqKvm1Wt3c",
  "key32": "29EeyKrKxgfae3YDdrm43Rjj28YBTNA53vHJ1ykQHjto97vriZzvykQeHtwyTKdYb3UkU9LbjtzCQMgRA4uCJBiU",
  "key33": "9SN9rq3acZ1qf6w3GHu7wB8Qp7u3rx1F2JkpT3N5yLANERejZr6VvFLpnFfL8DsQKPVMcWtEWV2WmWsPf579fZj",
  "key34": "5XL3QmJPn2APDRigYeBsfGKVCsTrJdB2qxHSQVAp3GNJ6u1B7MKCWC4dYLTh472P2HoSEgAuTYrx8nnq3kTgaVcb",
  "key35": "4wFWBsvdKnTMCmHxHKcWs85vnFAzgpQGNFB9SxHu9dkVJHKp5iTsHdokpeZp1YyqS1H8YbVYzgHhu1sUXpfM3YXV",
  "key36": "586GgoRhozmi6sigbpSvkVpVGkaRn2osBSVT3DeyCQhdEdFpq5uRtDibvfR3JyFGxS54cevL8osMG9hFvyrgxxXE",
  "key37": "4iB5gMKdcssecYrniiHm4NuddgsHXJ5XoDp5b9jedQ6pYFE8jCQGQoC66BePnJ2F9CckmaVR3yhjb8tZb3iHZTDs",
  "key38": "4paeagiiLdR7UTdoRS3SuWrt37oNYzbS8tJoM2PLCnRzDMdQRErdSqrGutZzHD4vwFmA8V2XtE87mVT46UCFSdyX",
  "key39": "5Zva3mAL4Ltim3amZBoRmi38RnhTnvDftPJaju9FfA273g9TfZc6MeEyNzyuGxCLUeyFTeoaTME1T1CTVkuGSHbv",
  "key40": "4PciP2wkTK4Gigcg8ovNjtBhJRAU3dWdnwfR7ALbdTh4Wb5kp6sf7zwLYZb6RJpn8MCpsefTi3HyGbDfduTcRB1S",
  "key41": "5QmLbwZf6YvNRbCkbjyiRsDd1yPJQyNzRaRMmZJBM8NBj6zbFVYWaR7rkuEiDmGgSnVeCSMiVzykLJrRqrQsvaw1",
  "key42": "37ZMx4EUS8f5JfFExg7kkDHJtggw9kA7duvRQogyH4RoEzYLruPZue1wEFvoyh6Yy3AgXt9eFutTe3D7gB5RgJ7",
  "key43": "53jobg88rdyss9QT5w3n1XYNK1cUcyzrpgvsb6q8VDzyQDt4M5QC1xNvb3GjrZotcfCMuxTdZW9L3ftet9xXJgDJ",
  "key44": "3i3RE1SJbF5Q5zoYRCCPeKu42zYzYhXLKkZSAkfyr6qboh44NSmmkngMQnK8NnFaY9C31hLVupLyQ2oBoqRyagYQ",
  "key45": "4LQVbygYWxb6izV9yfEgAm1gxFqr1bW1eoFfEbkNPYAGwuznMj5yxxw567qdT2kpuRS9BghebeF4jz2dFJmzMubg",
  "key46": "3ndM7KUsSXKVEdsthqHTXpoP4vdG7RktVZtwAjUfq249o6Ets2Ngoynr2wRDdUEcdZqvrnhVBh3h2zRzTVE4MAEC",
  "key47": "4zLnaooL6WK5454gYwuY666UFEwXexUvgTZT4oeY5pCV4H73AoVvNEeKG622S6b43JMpFTCLcnPhghvvxqqkEaLY"
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
