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
    "evjc2Rta5DKxgYjCXkvdBVRrCUi7KDM7y3gWmtJovfUWUNdmGBPJEn8jaKrPSBMArd3VWWFAGdwv2P7Ei9WLyik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6pXV8vohiNoTkYC6saL1165LnmQZBtWpMPCvPHBLGew1uUoutuVB5WKwhBCU31wArRWS1VoxBqLtqGuHWct1Vn",
  "key1": "3AWxoLUeUdC6XwV9F5gYWNnF8a3WMY5QVU5eKpd3LoCboturCFaCiYU4DK9avxx86UJLnKSLD1AEAsDgv1vLro1H",
  "key2": "rmA5BavLfsPMQjs5gfyvvgLmymFo7Lw2vmH2dz6NVAW6VMrib2SpjtDDheXwdRB5Ts7SgkV7MDSYMPZYCuKCska",
  "key3": "cRp5idBJigpVJNB9DZrTqjEx9zUhfU4N95eUR94FnTAcie3DtqBnqEccVA5PBU6HTE3qrqgJ3jPeo9VgtnM7qu2",
  "key4": "2eiusk5PzuFMt3NVAq4CRPWAWTqhoZk9sHTNEft6f5j77mn9ui6nniqrfFtiLqyi8TULG4Hv2Fk5DeZL41zMAaeq",
  "key5": "4XTNY9R4caP9wHDW9qqTuovAfExQTFwx5dDXtei9djTwzi9NRhsYUEPWuk5s755hAhXGqr89GvBv6Dc3jkxEpx2T",
  "key6": "5i3iB8NxNL1KHfq1sojcHpmbJfLzX7TmQt3btJKzwko2fbhHBQLKocfuEUBBjTHseNHpLhvPmig13QTjXN6zvbqU",
  "key7": "66AXgYiZsG3ZCwnpg9Dqjfndn8cxGgXGjzhsi6RByrQUm72ZUW6vhaJF3PHu7XFU3hPfKjZj9yTwYhVLyvbQjn9Z",
  "key8": "2ybEBLW2HMoTMu8ugo6VDWuBTyagCR64wT8E8MsDuZrNMYEooPPE3KHuS7g21f3mdYUZ8iiuzkAXbDsgEh1MBSUZ",
  "key9": "4oZTNGzUyY9fkxWQSi1MUfNvxSetrNAZBY6UqhHZoA7wYXCdFUp1iBX1sKKUcvJbXPSqEdnLu7QjrkR5LmaWtYi7",
  "key10": "2FxsYAjsEoeqozsgBsXC4NpveoxSfvYK4EMJiMRqT2SYW4vvkCcXY1a7kc1WQCAE7TRBLuBH45Bi1XX8mJwBmFt6",
  "key11": "2mTHR44bDjUNeSRL1gRChuahpDAQECvx1m6DdxGY6qm6FXg7kzdw77XzZwbUJr985tmoTwo2JFervB87xJL9mPRx",
  "key12": "2sznjFRBgVQv8QS93hnxqfbBBc9WMKosZzxNFD8WUNryTjNVTopEmi3kfwL55RwPfFV4uKcKCcWZSVzVFfjPWBjL",
  "key13": "1hjiUjGYpuk7tn6UytN2mR8tfXCe3M85M6MUUjKKi2ntgtF859WCX6wVqhy9QdiVgrsV8AmxV7R67dJLgPrjaEL",
  "key14": "5KyeJxLFkrty5vQBuGe3ZBUpZBwg6ejZ9LXUuAcwezW9k5AFD3DagPv2tz8C6AXbJkcqopr6LpaQS1dmtHg1DTVb",
  "key15": "64tBmeHPjKbJkFMaJCY8z4a51DRDKpNNGjnbf7GFRQKiA3gCKxMka5a6emqGNxcqNDUhsqvgeDnoV4DFH1cJCoES",
  "key16": "3fxHxrr5Gro44JYWfViq945qK57pUviF2skbwwx8cLgH6x4K6wdZePvpxiLhu5VFChyP5Gb1NnWS9t2zg3DTkw7x",
  "key17": "4RpYMrQrqpXtqS4ppZvHhtEcG9nu2knF9vqzHwJdeFQPqaD7wLMSn8VmbFtu23Tqj7V9nGaToU9jKnTCBPrEocRF",
  "key18": "43RR47bc1VxpPFKaMpuqPJ1SX82cEueJLP9FWBU3Mf2iRSABBUanobAzhmYEUNKKHQN3Nz9NZSTFGnkin2btDioz",
  "key19": "3wVYbwmCr3QvXxsBHhr2Rr6uujCAGtaLpu632usuh65oqTwN1T1GBaqdq7ipdT4PmxXTjdhpvUMMz61W8aKP5SqL",
  "key20": "4CgHmyVaSUTz8KDgghppU8Tbxm6hdCKSQfrFanRdRBNr74LHxSNtwevZgPJeF8qEzTSGisdv3VaZVJBYHNZZgwFS",
  "key21": "2qe6EFxDEXDLgCNtTnJLVLxSnkxRpCQ9smqzjP6inHsbusshRAj5Hf6GUk7fj1rtGfu6esd68hkUPQBEooun9zDT",
  "key22": "4amrrjkzdSn25xeUcrqUQ4igL8GoZV5m3RdorC9GB7ykFaVM9bQzm5sPYCv18Y2fDPT7VABEyNi5Qxj7CPNbdPt2",
  "key23": "248GuRaE25tsFgArGLiedt8eNNExkkYidkm6NiojWg65cb84W8LHf6ffov8Z1NsRvRQEsunAWmjPii84MoJtMDC7",
  "key24": "AWBwXk7Tu9QjxkE7yJpo6LKU2c4umCcAK3Qek9TS9u4PQvzNSXsK6884aTfv1aY7W4wfW9CNoFdhuMEVtrip5ec",
  "key25": "ccfYxn26GyMRJpeiMxQbW2GTwBE9Mp1f8vvY7FVwtYADFqfMuyztqvtgZPWDAWonUsjfbaY4F1RDT1qu2sJxiw7",
  "key26": "oyAUFg1MvPCaeLB83KcTKTEZoNns3Bqh9rzAUwGu8aKLXb4nAuGoiLEd1jbbjQJ7HQCRR7MoS3y9hVBhp7yKu6S",
  "key27": "cdYCw72jKbwPjWVNzHwp8EPswvFQVQ5kjoVV9BRTVWj5LXWMTJqU9vC6fGobjCimb6UGoz8CWBDVp5unMmvzXfo",
  "key28": "jCPqyzSi4XfXVgNgjX91cgdC5XgqbgNANB4qWA7VckqFqkGcaFDmw2drfTgU7qesk9ozap6x7ePqg4wh6AZFhpm",
  "key29": "3ms212ERTgAcHHWmxxVwA3BeuKmer26qsjfpNSNeFwGefxW57KgsfL4f5ynDZhyVbE9HvanRFwhNFTnkdnKxwbFm",
  "key30": "5voQPepwnoAoE6rjq8PkwbXr7oS9MnUCdPwK9Bjiz35pzE81Gy7ZvLJc1mji3LGaGuMagTPpVSJPnLqrkxy4PT8p",
  "key31": "nKZygmLSysPufSwdK8dh1oWLQUnxgMNpgjsDtsdastVjFZikUNWtrGmNVerxAxnBCrfGTk1kCvt78eX5YGJviv5",
  "key32": "5YtGRpGMXVS15mw8tFMot3mCJnYprHrWHhyigsSLGbSTXskpw1RS4vzBYFExhbhu2MjasK9nmBApmhqEA3Z6hnbF",
  "key33": "2YQkdTVJqKVHLZRkivKnKgYbs5AexuRpvgQJAd5twcL72W6mPKnepLmTWFMcpaEfrkQXb8Y7K48VhX1fPiA4PT6c",
  "key34": "3QLELf7RDMUeoNsRrhUBRCU6GWn1YQT6mQRmzSBD68Lj1C7WCiWV86Nr2bhRdQqdr5iq9pw3Lr5dqAju7UjYVm3g",
  "key35": "49Tiujf6btZaMeVsuX1VJRWzPRxDjYjAczPKYtriQBp4F6ANjCZQvG7DtRygg9GKn5h5DQcUXRiwHyWKQRDu4gQ5",
  "key36": "4NTBjFbBVBczFUomZ6E3kC8QBwLrAY95Fh2Ufi4R9HdiN3AMnPmAAVUx1rkTpJ9ffQnFw6LuVvTLSaJ7DzCCJKqZ",
  "key37": "3LmBP4aG4rGpFpUgvqXWvDjcw8aHFmhyToiZuJTBv991bpEkGk5yijkro45BYMiAgjZ3DAthVPdC8pAo1fjKGibf",
  "key38": "2yS6eUJCZzpqqnMg1asqsccTSzLYuKq8DLaNMQ9sjhvt13iHNK6Q6LtzQ9XaVkVC5gS4DQ1vhWFzxfPt4xHWRVtb",
  "key39": "syrS5KtFtNyM5FYZdFdHrM2DqeZCXrDcxhYfT9bVrVxoBFBcUgJqG8hF9WEYguRTVh4ERhs3BNGXaHPPb4VMCgQ",
  "key40": "4D5PWDtNcv4iTS2V1x2YWdMhCACJw2J73SPoTYCxutfXBC3rC3VtyKUeJxgbGCKFifrpJrbmZB4bRSV84baMLG2N",
  "key41": "3ySAXHqGPtBibJBczwxiNdk4sSHdNk1xY5AVuYtZESfn6ppdogfRcnUSfwh2nq45GqEXLQMuzfxEihuirofW3X3z",
  "key42": "4H2EqsoA4k9jEwdSSHsmuyq9Cv1HBDmNxBwoX48axgjF31iMNozUnc3r3CoeaGsWrKksNFgMb3tASvHFQvymFHQy",
  "key43": "5iMV9yGmSNMb8yT1GSWxpSfdLa4vsgoKKsgwcTa7TT27YpRmXDz98mBHKvYeLkavyqXuVy7Jv3v9h2KXgGFqB2RD",
  "key44": "4VRbcL1coVjfD3YNuLs4PLPB8Jc6WUF8SvWWmpDbC8oh4hbZW7gnDmL6wMkAqcnzkfLr9sF8SFPTWFgcMDAszsjs",
  "key45": "4pvHRziU8FW6YfwBxec24FqKgzdKj6vMYzetwDKqRPDFENszcskeRT5ZeB3wQgqGXAsTAU1EbqYCgxcje6iGSAkZ"
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
