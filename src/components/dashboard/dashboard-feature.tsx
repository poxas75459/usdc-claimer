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
    "33XSZt7QHoxD7gCDRcDXmjNdbsDoyadM35aBvEp11wFZNa3Tw89q5j7h2G1P7JRDRHtb8PbebPc1RFDYxqPx6dfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjagxMHWWobMQReQuHeTLaPMQL5hL41FH1JyPGkyzMc6JiJpN1N1mHHSdM8a94sysHZWNoTN2HPEEJouJuZCKst",
  "key1": "18apwasCTSNgtFGJThPeA11UokN6qHrV2TzjPhdvuDQ32vSYWaFksnzfKaWyqvWrRJsbr1cUCQBfyVtnq3Pos6P",
  "key2": "3UHZjdNGAxCAdWgbFXeH4NY11FtnK4dAzW3DCYbePYaqynEfnCtvaXpUkEPJ94zxfjNtbWiLZZkCyvtktSjSTMap",
  "key3": "3uWPkEUfPdnbCR826jCDSAfH4YRHXMTKjFYTKt5RUX3Jzuvhg2iwkJ39fpf9KS7V6e58geJoLhu1Vhuy3sZo9EXW",
  "key4": "3dPXfA6j43K5PegYSvBDRsptzbWph1KyuHqvFHD1PmkS3ftZ2PAW9zgX3XMrfYm2VsVA23LqmEWepouwSuJh78yo",
  "key5": "5KKhkp6KgEMP3sGKdA6Rgfhu7jLceQ1WsyNX1nKThoaZv6jangiMrviqoteCfEGZ5mNkHMSJLgma4L5x5iCngPNG",
  "key6": "2JdQzAZx2rRfoUjHipSuTL5odBrc465zyQnaQakEjuG2S2rQKc8VDpBab6pvZtEAP8o5fJcHgnDXFpenjQ9VEXv1",
  "key7": "2VZYxoWXPJFfLGfycLQMApQdXMHhccdL6fisqkiYFt17F1MqZP7oNFVamViYc4w2CE9o3UdXJV6rBGgAsTM4iWAc",
  "key8": "33ZJSiGisKBuw494uaL9afMX29kjXapHA7fESJcapxorUHNDXAsXYqP7feXpgHC1gRt7SVQLW54kjw7PpPPsyW7Y",
  "key9": "qiznwW2xuTd65vYg3uthuWbvejEWnXR6FM8YWgfLuYTPpytw2dT61186gSnoTFDehty7rUp1D4xpMkQkMFfHaVB",
  "key10": "8Xy6LZUTGzsG6vaP6mcSz6JWoEKv6XJZaaaHZUdw5bJ9GPMojS3Ft3LAiqCTMrjXs3En98FUEmBayMVM9h1XnZ8",
  "key11": "42yGM7dW4HQhtDsVMbrdRWonZfNGR5Mfkf3VqPwUv3DxRaSrxKKUgAhazuDDJWzCiSTahoLrHa5EHpqWt34row5N",
  "key12": "hyGCQ5ETiARm8CjzNvK4nnNmxWhydLv9CfSdTGEndMXrDLUNH7JZPmRMwYU5XpbkdyRRfaUt4y134hdTVUovirT",
  "key13": "4XwZVBKY8xNqkRuNdb71TcEMLLwLodbC8a5HnMav8UrCFa8qj5JDaaS3BHprJkgVmKNeQAxedrwVTrmJmJv5K8ig",
  "key14": "2h5Sr1KcaD6gYcazt7ZtrW7nN9Z5n8KkunwQqXS2DvvzBEyKi911nxANFVUXFJXZj7iK7cev2xyLYyyjJeGhRCRG",
  "key15": "ki9bsgdWvqhZbu8dXN7o5mU5niHaAPEbrNL93buYGNMxbtmDak3tJPkXEGv5dfqAHwnPRHzwJ9oEZow5as1fddv",
  "key16": "3XrLJknSeu2YSuvWJ71FsreDhUzk5hmT6sJ62LRHhQ1LaXXMrtrgsm768KiN9trXX5s5kkQQszaCWYCAePPB5jp6",
  "key17": "3LNQga41TmgtVL3ALqHTvFAVTi89VGwHBJeofMru5Y5MrgJvPcH5ojdkXDZBicYYDixJXmyzMM3H8Kfo8aN5SWtc",
  "key18": "5ZPv3jUQ18LJPLbhYadTLYexkNwWXvgjvrirVmrS9otf62pygEnuwaSt5Lnf68YGhSyqysWaz8EhLjy7J25htuL5",
  "key19": "4DnnGWGHhxLhesT4WbFQwG3cHPRVsEDMP6s1ygBJksnhcLNHngFb1DDD9YAWQn2wLBX1LwmrCuD7S88MFYfQ6kka",
  "key20": "5WQZesqfH1gNn1NVqmNiPDoCmLwkexBAuJpnYHtVZEJU9dEqMWsQrHq4WW8joRkdUeRqwyT8ahFWNHzW4XDXAgiw",
  "key21": "QBvdMs7xEmDwixm2PceNByNXfb2zcNnqc15pJDsCgtkXS7A4bHkYCLFWuj9CHCNRdvMDnEKybSDQVrPkF7ZSaCw",
  "key22": "3Hd7pDhZMCybX26ZyvvD6F24RCbKEVebsftU7E84Noq5iNjiu9uch58MPNHvdrfFt7G2YLnkEwggjzAaYNbP9dnF",
  "key23": "5qzakpvinixNFtpW9iHhpszr1hDgeP2RsD6urV9wd5fBwPLTNLifPedDh55dhKumFppr8Nf58oUTj8LRuMS4EF7h",
  "key24": "3j4kFDw5oENxtynZB3yEq5Z9ozuo3n1UaRTU7SDrRPH7wrBEMVbU9n4ovP5gvGcnSDb3PzwysCidDC5SBtyduaZH",
  "key25": "569pLxgSC8sm5eQaTpJuRm93uWMkfVwSJuU82oETLKXhj72kS2Gc6rezvD5oTEw3ne5kwHTsCN4ZKxPCcoFLuTUY",
  "key26": "4fKtJRmJiXPewPMpb6n6iH6y5z8et2aAi5Fy1i2zSi5siqg92MuSbtg85bSFW8nzT4WKXYGZBxjMaQfihZD1UHPa",
  "key27": "32EbjGaqxhNLGapuSi13zcsmsLFF1BG5PUxwGKeZB9ZbTLEGmofzpLFdyEXmGbRZ9p186L58k1b4pu8fXXxQr4xu",
  "key28": "5tTnBPqZbqgNdZ9UMsvq8C5oBt982t3QmxPSnk6ojUJrrjpK71z21aZjh61LvjbVXLoZHPGfrXbuf8QbF46FA9d",
  "key29": "2iwjnUrKmMJPbJ6C8JKrxDBbaVkgJuL8N5YQyiHdC6szs2tsW9KZjHQCcQmfquV2WhVomvkgaLMDY7HYsropcPbf",
  "key30": "3qfoe9j5GxK1Pd39zrvFY4DUbHxjGGCHkLaBNNHmqFgQSc5GY952meR7RgLiEBazgAYqicoY1JdN3ponoyYDUy4m",
  "key31": "3cip1BTGHVCj4hfoiD9qeaBbGdNwRRzHvCpWkL1YVcpberbieaQkLNYvuthzu4KyLMurXwH2XnriQaDoKiKNu2Vh",
  "key32": "2Kgttp6JbLd54JDPZGTZ15f7WxpS2H7a4E4MCMmgU16r4K4SXEVgtBXuxarPYs7WMWUkF8i5r8VtREHBmQDg3oqn",
  "key33": "2NjEWVNgf61Y86ScCVhZwWBm9HooDSRHMjkmzazeUejigQpnXTnLFcdzCWVntiVbDqxxyCgTw9KcRm8KqFVVMpst",
  "key34": "WwHn8ApZ2jzXoK8k8ychCRxUdJe1EsypJAtCRSFAe6RG79ciiJqYnbxoWrqwuTi5MXFJohyDGE1UKYqRv5raf1X",
  "key35": "4GBauWekM6LfUnXGRcfyMQND7ZZDcxiRhHd65fBDDbHKCLWKKmCq6x2gLddG4uZ1rJe651Fw7Te3pWe3LabHibL5",
  "key36": "5az6LMDoc9FcCaBpVT9SHcH7Cj2D5HznUdNK1yNLuQ69LtZV79aPBdqXhTAf5FseYexJjn1kaNBKASnD21VaMPwQ",
  "key37": "4sMUXuFd3Ywf6rUywzdGYfBPBJiGPTREMnmmmoCpJxt4bA3H9pVKbARfAjacuMZbKGmUvcB2b7V86v3jB9AzTbz2",
  "key38": "3PrqqzPbd6nvKpgs7XiCyAsR8JZDfaxNKviX4NdsFvyM22ZNromVP8qPF3bYE54YdktP3EmQyqsHmifeEWSJfCi9",
  "key39": "38H4c9rVUyhSsC6gAJ7nMKuRAfsnE2NyUegZDWafYZdzG7fzxFvW7mfwseZKTtwspprgf6bJz14WGfs2pFSKzdjz",
  "key40": "5bAnpXEUrbRxdHRxBjbhsQ74FEssu32CuUua7UhYQbpuJvptcPLAEc5JKgYQczwahHHkbQUkp3owE4SU7xpMkhmM",
  "key41": "3gq3s5FRu2ixCQy1oY1B6GCeZDc5eZ9HDbh5fzXNgoQ6JsvNAn9hpbhtNbmR5uHZTq9Sbjoz9C1uKQakHGvBeiPe",
  "key42": "38KpPmwxsnnpH2zQxk2pqaHcHfG6iE5v6diiK2YREoV4FU3wLx5bSg1w9NYf2FxumAreP1HLZC2ttbW9hEfquaPS",
  "key43": "3bGUsJ2pTxSBmvyv1i7Us4QP2ujseAiftP6YeHQd9BWUR86NxcYKWHgXdKQTnDnHP55Qoqbfmu7PKbtpeeU23DvL",
  "key44": "ayEvvHwhqvT5RNpUYXgim7vcmf4JR4okYsju1H7m2qJWSwDFHcMFmjbonZMTbPxGh8J8nzfQBJRvxiAFzSCeijR",
  "key45": "YFgh641LgGVEWMn71d92zLjk25XWHcgzJV49schpHUsS2SvJT7sMBnJjiGHwPnDhqyzLwt8WbmmUAKnznVK5AR2"
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
