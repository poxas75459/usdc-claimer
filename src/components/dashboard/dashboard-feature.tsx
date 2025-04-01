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
    "38KYSWob33Xw4JCKjpfgefhyZFyMPWZLyf9NMLZTwXuWGDEkEh7ERC47tgwSHDbdyxmr97X2Z6Rv4XTgNHe4YPuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McS31wkPcd6J7XwPL9y35fYscqycAjm4gB7H9DLvZCBJ3jbzPjm7SMyzJBWd1ZWoSqZ8cuUUbtpcx9u8SxZ46Aj",
  "key1": "BYzWyNw8Ti2p4yXsLS8j1tay32ga1gpfufxuLg4SBasEbxdoRXnecszpXxxVrxc19ZdCnhGSnUDkbx8TJ5fzNdR",
  "key2": "BmFbcGY9F37KgQZfTF9EaQwYvMBLGCRXwospbkq52derDeA5KbSCkhBYSY4XRz34mDbJ5ZwguRrG3mh2sE8n2Hy",
  "key3": "4xvrJei8PYYjcNbUMBm7ZhbM4vM3ZVQXbkBLkfxeCkDrqxcMJP4LfcMFAcWQkjSDWgLu9XhxYYHJWUnRqxB161cq",
  "key4": "4vjhrJ2YBUFT8fCJEBjtuCJkCBKomBUVqPnXp6TvMNXi3uj9tzUvusc1W7QbtQZHQiTxSSsPqWRiMt9PseWKFpKz",
  "key5": "5SHRoQFX93QipS9QFLd2Ymki1WcxobSfwezU9csaga3sqrXXXvuRgJEJKoCS9HWgiBFMfGKDS4foFCrPqfQQiEHf",
  "key6": "2eAo1REh3HiPDYTMReBPQQV8HYAzB4aaK8QNbAtqWogQqEMkExnC4RNoirxKVGmyhwcTtpXPdRWXZVKd9XUkZnrv",
  "key7": "4XE1wmWqULfgAsjt2HcRdejXTVbTbRKjieG188mhbo3WR1Kc6ewj9Xgysqj214iSuWuFhxmSf6KQ383EDXJxgQ2o",
  "key8": "44sBTnur5JmiQUYFh5gdqxR6zU5xmHPbEvNWQ99bBfDVuWbN1Ksq6GsZ6XZbt6gxSibHcUxbegTMT5KhauqLHGiN",
  "key9": "5UcczcBSUZoVsck6npumPciBTgSJejXnDZZXYpx9reutSLxZcAiDAZvvhcifvkjbfTALeWzEvofEY4mUceEp6qCy",
  "key10": "4hJUkCeorkTF6QGbr2qRpd5Hmx6KuuKxmusuzCsmwrMUyrgg1VNhe6voGRoq9khg75mQDbH7JZbf6ycbESLArHmN",
  "key11": "3QkuoEb3FFL7W5uzaipwxMyS1qXqKhjTQ2s17Cb3zhH16C9i3Gp4UJ37j3nptrDPTQ4HHrUzi6z7zh3XPBLXeYeD",
  "key12": "3S5nFGXUUq7PSXedsWRYMyL8XnuifkyZ4ME7RFzVjxAEWPqRQCv5cs9KTuHaGopegZMMJMzXy6Qzxgoo6ZQwF7AM",
  "key13": "wUF5jZqwxJcsroYR3qv7yfciWucC9LKEsLRyzzTjRfZUzpXm1v5MdWprPPwgd3PLHhECzrZit786hsiviAWvm8y",
  "key14": "3txchmWkCyjPULiZqxZP7nLQmV2EsSxNNmaqSCiid4ketKu9xMzvRr1miK5WBuHf3nPWjpEgQrFLAvUMRjkZnUrA",
  "key15": "Qg7xgqdkxJc4Bt23WhWdtSDJ4PcF7MQLvMMfynt1rYhUN8Yf8NbhQRiUS2RNb7kX6yj1dnQJbpYyQAe4zUxaRHe",
  "key16": "j2zEdoyJtGboLM8vY59VrMERnAVvG5ka3jVJUzpeN3z7tkSta1uH5VbjMXBinf2VFhJYfCVa4Bu31Vjcrw9Fdg4",
  "key17": "QhrtRrBnx46pftdnJwj89WqXiR5pPUzx4Sg4HwimdSGJuAxmt88du9W42G4wGCK344aCYHWn774DSaZsV7FDo6m",
  "key18": "5cR68tVM6JZWgSzUS8DLTMx1cN6M7Q1au69JBzjun37SsEvGPkHbSC18eo5B83iNL2kegkWzsfZLkkYqapgTHSkv",
  "key19": "5BtPDwb6CT6y4R9N7wjjWAKzyoKnardcuKTMJ34kWntteuKWPoivHbsdFrTMCatXAzcJxnA8NiH4RrtVtTJHtUA6",
  "key20": "3BtarrsaynmU9QB83PmN1tFDxJJTabYCc9P9wW4ZfdftCVS8j5fSRaECcHU2zsB4gLhYYJE9RFGBxXSRmCeeBhNv",
  "key21": "5AoZED6PVKzt4RefWG1Fhq39v4M58ixZFySmntcnipAdaTBTAUTQds5UK1A9kmwvkXPeh5PJzZXUxZxTCCcDDAii",
  "key22": "21axFLESaNAdVsKjCuTQkCWY2YRysfPPhBfW25bHp2rmAyzsRqRewjtbmiv6LTxdCH9kSSho3CzE4BG9A5xNWidH",
  "key23": "3mwzY1fcD6oHzT8XfMDCRGKuHX1zLZFJhG5EyxPqPdpXS3kMyssowGU6gatpf2MgYYWkLVGim9uJCubRgp72dmZy",
  "key24": "3J5RUfPvzsjkMNCcpRK2ehxEWPT8EkLcmReaJ83uyheLtFqgHDskA9ruuQN6p1rCB8yiNutgY1Za6A2GRwB3Do8P",
  "key25": "4sBCpug8C26i6XMFGx2eUArTQTupGr9suV6tpVAUCtF3LCLEZ9UCk85PUJ3pnhvCcSMGYnPLB4SawRJY9uhyLjgw",
  "key26": "38cuUVyrVr518cXnVC2hauQLgP8HKezUHv5z61jvpvJsTmSW5mKsnYN4FAvKg1NeLnTnaEaGiW1SZZpazejKMmXf",
  "key27": "3GatMTqXuQd6rrKno2r6UgNFJaXiEkcdvauWfksKqhf1edbfQfVdLaoCDUEfaK6A3PhRDWv8CtRiuRHDLE1UQnWh",
  "key28": "4f6z1wmsyFd8ZrX433QerZo8nfiko3VbWshDZtkQgtNd8EkMGgAy2ZfydsWQoithMJUTEHgXmHMhonNXDQrRPQiN",
  "key29": "3k6pgXodTswdTb3JcxsmKAvZTEPpE7TAxvBUzNTd4oNDFJnSFcpzHEu5zbno6MGb2E7pimgC7bMQjWYNDrm4UGsu",
  "key30": "5UT5QkrCGLAarsLdt2VY5P2dEVLpGkWcE8nqs7kg2wPWm3vsEKg98HwHFv52G3tDeP3RHqXcQ7J3VcmW8rqnaNS6",
  "key31": "5jc6sHPyKzo8N2QKd8q337SNhMqEpukZeFN2EicM5F78vziJEsvci7qT3mXRBBhDrJuprj7BXDdwz5heYrxDdfMd",
  "key32": "3Soj8DdUKjEPYtzMBMrNMwAtpG5gQWXxS5LeFtdD255Fco7JpRKpEepCU2pjnCRWJh3B7ZFPSFA4ZbeKfmwipc4d",
  "key33": "5tAv9EWykqfqhDAKnjPY8fjt3jX5EggmuGi7dx9d9mWcoJeNu18vsYUkELcuTwHNHEa79Nma1aRWfLDM5199MQGn",
  "key34": "2hziPVtLvi4PbwzofhEDcAHPT3xQ1oS5Geu1jZRAwrVya7CfGw9sZkjLorgGQRgyHbMC6uBEtLrwJUA2KqpvxmYk",
  "key35": "2fE2sYZmkS5gmReATUz66gkg1zWkVAmiTnJLqic3uraLWTpUgmjU2WrfdYZA5XPP7Z4BbKuBJ11ixZkfjpdQxkAq",
  "key36": "ZZi3zH2edfApx9NxzZKWJqCLhLQf2JLQXg7AfPPz3Po5q8uG5hWSBUnx9VeB1BkR8SyUMisBzimTc9DzCCnGZ7x",
  "key37": "4Lqn3WAbdJS7CXCGkohx1JXSJqyMECREgWbSLSpKV3Ak2TbEziW72QM8WnFEmCRpaosDRxQBds7GnqeovYKLcEzf",
  "key38": "5DngDzuUerbApiqdPv1WZi98S7hBMGvp6dyV5hzKHTExyAwHAjCJTUhLxGB43Bn7Rz7VJjBDjMFfE34k6aXzv99u",
  "key39": "xKGcKKTitQ2z8XaPx3jQAk18vkGXituEGChpXsswpeU9zquCH3X4iYBApCEQQ2dF3qguuGUXEr9dJLPL7REEtHx",
  "key40": "33us1i9qJV2vhs74sa7ykYBnSK8g5wwoNSLMKGWMiCG7QMjeigstx4Sit2SMbwhTvkMD6esih5GMxnvVS2QBBK7C",
  "key41": "nduHDHQzc9jzd7SugJr1TNyhxRZxs4D537epvxRKkKYiF9WUEnnWgpWzHkYxfKGgw9VV8pM695CKH4HVVfAfK1D",
  "key42": "saRVBQro6TomztxCFXgtQxHrrA6gYzc6UMGqUKVLg65TZMJqiSyRS2uWAte8rx66X2v3owvDtEPLwtGYvLys9Hz",
  "key43": "2WZozEjvzCHBQKL32yc1f1Yg5Sux6FtGa3F4hgVrE19TFVSbkTS1SqCRLYNMEcXExwwS2DmphA6bgvhEx2v7cWjS",
  "key44": "4Gs9JnHUA3DQNiZEHBVMxQzKu26rjD23vdM3R2bZujrPJpdGoZ6TWUS76yVDudXGYNPmRT8ifG5hnZdzvNcgg45",
  "key45": "4FrebvRgeFwmcXcDov6kt6LjLVJZHySMbUvNhGnD8n2pWQmdK85e1EoX2SVQ7R1VsVqDQMzP6v2wQDdYUZZJkxUv",
  "key46": "3Rj7WpXmm6rEzGNuxMBo4GcXstSP96zUTCCVNjujxkNvMQ3NUBQX3fa8ECjsnPZ7Uz8jSuiqwn2df5DjL74c9UG7",
  "key47": "3WC2j8xiUG8mYp1p7K1spshwGBpDKsgDB9GELgMmbYMafPsNxfG17AEL4EdCAdz1pcyky91q5Wv4rMmYJbgxq7Cp",
  "key48": "aWSt3EB89Txy5AA3dWVsAidkeyM3XVcKu5ue1CU2nW2bDsDhwskUCtUwmGFCmwkp61nrtDg1v2cSt45LPb9iHT3"
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
