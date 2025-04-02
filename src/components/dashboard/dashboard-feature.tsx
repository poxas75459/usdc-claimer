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
    "2rq18yp7pQo3HsrtmVrXaUXnBVrHx9AZ5L4gipEP2NGJJ1MU9jW2jR6nWF52n62qhVuMFrNQfXDweNbGaro4AFTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3RUQxjAjsskomWhxroyAtwfjKWDFA4Sajkf5CNTyx7c44tkqqRmKBYznc9aeHKXSebtJJwgCkSjyHsnybrubvp",
  "key1": "5k8RknxA5Gim6ceMMHh49vyBQt9oh2Cj9dSP7zixUZJrMQw3ADHRWwZU1qBksJPmXnPnqZi2fqoknpRdqLhgnBjY",
  "key2": "5AGVb95ka5AaFHokV2Cxxs9g67nSxZPRscbXVxQfJp4LGUBujXULkR21FtyAb8CffjQnYToonSm4UVvEFLC44mFa",
  "key3": "TpxL1XR8KjEdkuXngMPrtc96PvG9SrbJsVr1iw7rEJwzzJywUZVZRqb3gipS2TfgW8BdLD3pYxV2kg44UjubKmc",
  "key4": "3iwZe4JCSVMWfBk1xwZAY7B2bGMoEqbHM3aVsaKZobgc6umGkWds8A3fzJybGSNTDiRYhPUcGFPoHV98ZRVSSiKn",
  "key5": "3fSXqM4Kc1szrVRN2GTmZFF4e7ZzqsY4paMJMqmGaNNBGVCeFBBFF7BEoGWyKSPU2yWDpDd2ytS3C4SKwhojjq22",
  "key6": "3Fhx97JdrzzA4ghJT68uDoXgpjo6kN1YRHo4aNSGn1iPrcAp5xFdizJvXu6QfNzwTXXDamLpEkss3EuozHzsTFb7",
  "key7": "2JF2dfaVg2w59RGHownwMM2RVE87QVdh84arfV6VzdYHTyuL9eHhXQS6Kj21DpBryX7nBrCScdxkgNUfLcyr7KmF",
  "key8": "5RM1UdM8zjR1WnSgBdpywjEUa4iQvgJy5vb4gRWZvQm1D6yE3pMgAxfBWhXHSSUtm1R2hh8wD2w2kw6vF6cHDSpB",
  "key9": "wCkUZhiab6QjPNQGLQsqyYkeTUC2VmgpFdq3k36gqKhANZGyefqKrSvB69akNxTTYQKBXcZiWjQfKk1iBQJYCyF",
  "key10": "5yW71Cbhbef4w8CXXmhBgNbgs6rkw83BKXFyKdzGnDMLnkMByTcKboLDnzb2XdifTmLfKSTUeH2UKTA4tAEawUky",
  "key11": "5RkKF8LEU98E9NjP4sewbzDqN3AzDbKEZNW8ehqVCKUtdShF9Kna2nBHxcK1DeRzahCj6LYbDDqbpexfgp3uietg",
  "key12": "2bQ16sD7EWCG69QQKhxkCMme6LeC7xbdfTP2VVE3p6ZEarrtvBEZK2n6PfWtkDVqymnVx2Ref4WJE4ERZmfe1W2w",
  "key13": "5z5S1Ejpvue1rX1KoXJta8Tc9FeEGJYZC6wBDWYUMTyh5w8Lak9o2dmwsJkJVw5LXh1i3wU3gAsuVPMYzHfyVtAv",
  "key14": "9tGmxTWaHyG1gUTyP7vELeirSVbAbXjcceKWrFaBR6Daar6vpxArh9iSv8XX3sxyWnGwsQK3SK1GSVTecnVjCzF",
  "key15": "5pQjHwRcz4QgGbRRNn5caHTBZ8RcLABXp75YiYCLDeiyWkzSgKqV1fyGguMNk8ELDZ79hooRRicQTTxCFn2Jts3Y",
  "key16": "2hipV9WwU2wTjtdvd9NF1Ew7h2bMsVFjjp1rrJCYQbkhVX8U516EzhD8yThbvxuJsGuzVP4A5haG6HA1vrjf6rCW",
  "key17": "5zTyjWDtFQ9GyxKn1SJwYvyWMXAwVu849FDycPGVmr3t5pQFvnioU6TADaDHxgt7Jtop3HfQeBCqg3gBuTf6bMcj",
  "key18": "yGchqp9bYmDxDzc6roRd7cBLwDm3794acBD78zFFbcH7zuNkW4jrM1t8rXxJMLrVu8SQmJ98uKp5Uy7hg6vz5ZJ",
  "key19": "2MAcnL5k373KRRX9UXuKVm2KJUBABHnCnmgLqCw1QescF4DKBvQKUj6ghz8p3vDJ3uryse5tT83f6NUQiokf3WPm",
  "key20": "2KbrBgcqWMiyvzPuLeL7QeRvcWeMG3stLEbTyTScXUJCMdfKFLAySPL2XCeEVj5d2zryPkHzm84hnHxLzR4wfjWe",
  "key21": "2cbdTLmjjNcBiwV4SbUuHPyUHVNJinAYcNDrD8UKdU8BQaRwExduSyP5MRydgKPrG5cqbp2UGY25jo2K3Qn5EPxE",
  "key22": "KYU4DBsBoeWZrcaALCWzuVZzy7zCNTBMFA5PxHMZSCVGWnBdhuW3qJK1z9Ttf34KMV7j3k6rc8vve8CaKNpyVqM",
  "key23": "5dPQY5tjvr6putFbZ4VpCQx3uqVbYhciepp9vCduXSXSkfMbTTwjWcFwA1GrFJV9Q4vcMokVQqkfbD1dRmiujoye",
  "key24": "3iYAx5LQ4AXHXWhzbEmd6MspPBE47UH5sEAsc8fi5xbFduA3Bm75UrBvFiHuzgc9Fxcr8shhYKTendk6UFPpKEDV",
  "key25": "dVqjXc2S29ABgcQJKcp7Kz55zrFTaVzxuiLTUh76WXdMqyg5m6QkWSZY4TfU6CHz1ATLzp5wDmZLCExi6ePYS11",
  "key26": "57sz538NvNWeQ4VJJQx2QoekiCGtBFYngSVk2ba2XUJLRvituQgPEmHjR3vMPd68vb43AvWcvMLURNbq4V12jqo6",
  "key27": "5QAj6HyhW8KCyNoRnd8HpKFWTb1FBCo7VJjvEy7ETH6AnVLMh5JkrFXPpc1J6UDjkdAzma6Neab2w5hkzP7vQ7iK",
  "key28": "2d9NfSvxmeBZB2a5btcBGvhaHnyEqZPaMUGPXDuRLfvwB1wLfrhkj5qJDGCFWPLHmUc3dr2fWibFH5GnB3uXVJqE",
  "key29": "4Q9yt3Vobzj2P9KYQPWMvsDqdHWRqwu6DK1515AWc3JfbF4hoiriA1akp9dMg1nCeGJAfJSboBey9qFV5wSFzazb",
  "key30": "4pRX5Daftj56yWTRFHZ4f7kJRdZmNjtFbR43o7P92XRAak3DLJcgyvn5BTDasZbqnRM9kbKdvoHEJUrrJRNmyjEV",
  "key31": "57ML6iNGwvaJrSvMGrPKXzbM76EG7S9Set8qnnKHXuvsUV8CDFzjXUjUhML2f8nYqiwWAZtda9jcN1uM29etv5P1",
  "key32": "2pB1AyC4YWAbAspghceWr1HzyiAb2oDu8yMrYPGpgbpQGif92Kf9yRKzEr6dnewXgYFvqZjb59teofrQjYoB5865",
  "key33": "26vaReeeap9J6cti7ZHSTQL5daFEi3x7AmqTS4fbWGUHm3qWRxq8HkNdmWwfuRgGz1KZmX5RRAZgk8eY3678sAQt",
  "key34": "41q52mQxRwGrMbmvMj8ANrXMeE54x2cmmpjdQ3orAyqdSNNeQ8q9Svt9HoLBstmRnaWJzcjHLH6UBiaZbEjx8463",
  "key35": "2GizWgAnyU3fgV476WELNPSZCFeSkVgWcqRvWBQwPDBzD7qUXZuanWpe1Y5KpnfSrQmRaZTsXEDnKy9n9VZu1NA3",
  "key36": "49Tims9mKs1BaRYEFbTKqyowRjYLzkwBnd85ufBYqtaVHCQ5VB2V1uFkNfrnkokZVpj9LxkHn525P4go8UmWnnGF",
  "key37": "DkwLmCd2NXh2dDVnD7cva2ui9MaYZNK3u37ExMYxCR5g8pSCMmyvKndVPvHR9DcfEVSM5kD783Z6CBmdviEAmZK",
  "key38": "3p5wfF64iorZB9q2yKLsLKNRjjRXUR6u851eEGsQRdZyvJxUiEkXdkQb84mPXdWid6egvPK45ttBKncCvnWRQ1Jc",
  "key39": "4Nhf1aXtPus2Md2vf66useRuhQ5sJPt4xGAPdjNDENE6ueRapfBPbyjJgmAZJykZmN4uc8g6E8251ByRLc97bN82",
  "key40": "2nNUGXbxpLEiydsqC6kFyPvFyp5yyzaTpKpFgHKv6EBuXCsz3oYnVgZDkwB2C3NMBpaWecxRSSvRb6oDARNjFR7x",
  "key41": "5GLMU1DtySEAhW87rrmfmXSvqkxCqfvgXYwUNYKj3aJQSuCPZ4zQrEyhhoF8xKJwCVLru8qjcEzKdkBYDRfCueJj"
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
