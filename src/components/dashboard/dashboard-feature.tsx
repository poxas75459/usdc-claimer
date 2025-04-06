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
    "5cKVWHooVgyYPudYGGc7EpyyVVqxxdviqTP3FPdsGin81Fg6BWJ9HvDuSPXQroFNcN14NYgkomJB2wXmpPcbEQah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfcQfEpVg76N334PDvBUb3zqdbroYxAyNZEdDPtDEL9RidBT6EgD3Uw8iZ9sse18p6L8FGACmsvNNQdeu5y6zb4",
  "key1": "5povsNWu7yHxe4qTdyD2SzK4BdsRZ1ZuinapeTDsyA9Z1t5NBbrQzWHEgQ6X8kfPfiPnyKcusmzdtXtsSkZnPZe2",
  "key2": "AUx82DkhcFXDJxNFhyLoxLzSMVSxS8zKAxMzfbhPx4zbeEsZHdzjDMmfJd3gxeninGFWFCTBi7XMUuNg8SkY9Jr",
  "key3": "3hm78pb5y51grXSKW4c1ZFMuU6c9AEuKdfGaNnhgfKED91bXepq96aaKd5hcxh6Bk4u87Z3byrTgzBDjY7WunssT",
  "key4": "37ToMdR4DkN8A1kvQju53ZgTbYDd11Bm6NTtQokmJzLXA2KF5QHYtnYn45XTTZ15mt5mZoZrGMSQ5yhWKkeupGvu",
  "key5": "4xgGX4M2QpoFXYABAwEjEoZoKH3E9bodTRqqUGLR2muF6stYMfUNbhDGmoUCsdkd5FK88F8H6FJZuVZqDgC4E8o1",
  "key6": "f23y8WAkz9AuLhUizY45Tg3bPCBYrhSBTdxx5PEv11rskwjq33MHTTWCzeyyPXSJHHVH2sQZxuErub5U12H2rgm",
  "key7": "5QFqJPCyDFSuk8r5VaPguHFLZBMPLqqS8AW4YL7QRDewBwUR2Hca7zeqL3cnvuPMySuC7R6MT99WTGFyEeiq9Ysi",
  "key8": "ktPSTLFQdTLeFbz8REmvUKdhMDXzDHhsKYDwPmyZLP9VmQz992QJ9xnbLFnWytGykWwY1J29Aj6crmpYgQ5KZmk",
  "key9": "2o31B5uP9TaAiUhfPWRKUbQYBjAvidtfC9SrYjbCPqUNEtYLqSrGRqf7syfx4eMdhFLzotXEUraC5aVt68SLhzz3",
  "key10": "2PaqgJsKyEcKkRFieAEzBCgvw6qjjkhEsJBSQA1H1CfuSdvSm4sWc6UuwC84ixN1YejLhewQD22iaaeRKQtxkayk",
  "key11": "54J6dLBCDrMavBbTPy7TTQb1nKKhVx2GEnHWfSHFSHsD8pmhqqApyR98Ue89CCcGjriAq9ATCMsCkVqCdf2AfvxL",
  "key12": "42m1i7iM9jZJB48AvQMB7KARN5dFBra8ExQYv5hRAZYJK9aQRjeBHHFaN4NXGtPc68xXeW6ZxArfNauTiq3JNVjE",
  "key13": "5Grz5QCuzoi7TDnjSGFeK8npm4wy36MgfWwsdQC9XhL7WPRs9BxUEA2dyMynPqLk5ar7yNYYHRY1AFZmeHts7pGE",
  "key14": "5rFADnGHgP7iTR1RQXYybrbf9Pk1Tc2gtXDya19JkHNPmuwfLx2LWj5z2jDHU7fXysvvsXYBFGXhn1cFDkQ8WWvd",
  "key15": "5RUvD9n7PF1SNtUvkXyCX3mVfM5FaixzU9q3jnJHfA9Njd6SRkFEr6zotYE5No64Y6kex468RGBihbge8xtza2H2",
  "key16": "qon6cnnqfRSvrB2RKPk7VoHpTpauRtND7wVC2B68aVcuUGBSjLE9mQ8giQkLBwPadRcyXjGcYpDFaWy99M7LbtR",
  "key17": "45eVwLiZSnmzLByAo1kC2kaXVrZoRtbLF3WHgHfe6urQorCXwaPDwSqCyv86kwe5mHFot7o6cDYp1XCtM6EDWbcf",
  "key18": "5ZFcpuSRpMzfPPNzBp8FLswx1qMSWiLMFUzGx7aWLbgKPNX3tR8g8ef7J52C6JrcrFccxgqgTBCQHAvAkDnrKBnf",
  "key19": "4KVSWDc2PH3Gao68uERjkspamrajdyi7ja6Mti7jmbipP6V9X3v1tPAQXDYpQRY8CEo1xUVeKTsPXLr18kacZ4P1",
  "key20": "xm7RkoUjEsaWhmvuTx8emvuAp73G6MCLexqngbwUWnbrvCqzXpc52kYrLRMdPvuXVAT64LRM7Jx7UPa7tk9kDFM",
  "key21": "47yUwmg6a6SvKCfKaBA4QKHGXqwbABjSiSTMwHGm6oPMsyctXvkDzjZL9h5eUV2AGB5wqpDQPFaeWLdGDYZ5n5z2",
  "key22": "8UmYFmdbPP4duVUmTcDSRaN36GvEF9CunvLvKEswHaBHHDqkcPgw2ELx6oSZsdeC94cok8nniFpnGcZgeiYntZu",
  "key23": "2rcYBfKJEJc54ReSffZHCPP6xw8A4UNcsygknYhLLadcuCah2xJ9XC88J5qyCG5hwveRMFNWe6ceQ4aDjyRFsJxK",
  "key24": "3AQP8g1DYK2PQCTMGNJZKHxS7oxZaTRxBtXLdNKUrZKmkPsTSxGGgDDAaBi1KL1gCn5Mg44FEekw3cba4QQCGzeN",
  "key25": "w7rALxJ7ZiABhunS4WLbotzHJupW1qRUesvAvJfcQygWk2uzTYnvAiLxXypBfhQPLxkN2vDoD12xwNbDpYo4Uui",
  "key26": "2no3kjXvYQNySkUhfzBp9uZWjGSyXMQaAXLu3UPsdp7u7MYXuafGiwJtrr5b8pBQSitLKfeDB56nK1SuFwXASuCG",
  "key27": "RxVnLyHHuYvp3YxMJj5hfWnAxRyYBZt5AFEHB4CdJbhaZfXspb1mh6iGggkdoWQctt5nmPxSJKPZyjqunLoacmy",
  "key28": "2dmqMMCVNsbba9KU722yNNeEYKqcvq6RbwEdEcdoV9LUPt8Eia4x1ReF9syz65sgquFns2dLSgm52GF67keL7JsH",
  "key29": "MPWPcAXfCTBucJ827foMeETqPrEAe1rvZK3VkyhNvQw7LQYPXkgeFGrhBhFbpz4wfrjjSWHkMDeJWZFxeUTTGXw",
  "key30": "4W3ALqw1QbL2kAQsgW6wjBKiV96Tv2HzP5xZ6ZJoZaxg58rJRdJ5fWN82XADtfhE2G3xMGFRCqbVV9nDbTK1W3w9",
  "key31": "4VxL6BHsn8EwtDfPb6ZzDY7TJAp2WKvmTDi2FXE7bZq694sCiTkz8xiQVMDrAWTbJJg1zHWHRVyYFty7Q18FkPpV",
  "key32": "3q25ckkDFiBDRnBFzB3ZERk5Y5PtfDhoEhTriQXKFU44nPnbXGrZ6DpVbSCeBhzNmvggHMS6gdg2HDuxuxfawfzb",
  "key33": "8EnLZa4wsf96uQdyaAwKU8546UojB9vKbq2GCZzaGYzEEStc9tdMxL72dmVAELnNCFtVdieTrNBBn76N9zgEUar",
  "key34": "2HH7RwUZEukcAbVmea417EjZs52GPD1gQ8Q2yjUJE34Tw7zn7sdLFezRZ5BjffcCz5F4gzCpdDLo62UCxRXhSA21",
  "key35": "YPCirEm35YuNQT1YLWihijLyHLWvdMgwrH6f9DoDwh58fRt1nwyUY14BuqS8ftnHmcEwiqXQaP73tKbjarp5DDz",
  "key36": "391riXTmS2sCCxHca37b2RHsCXRv95GFC3tiAaV31LtZUsNSbByPTAsgq2ietUbDoNvaFYpoTa3nw3FTGuyqH1CA",
  "key37": "Ys99ffJkhJyRSkFbUMFLXM65mD5cq4xomq4Cxk1YtKoEjb5EJz5ttDD1ABN8N7mQJGZvAAcFUozHXZPca9MrasM",
  "key38": "35SCSe3LtjADUeUeXYin8x9Lc5ERtQwcwQ5Wm8U1qtgEUBnfTMYksWtE9K1r5jM2xgTcZJez4DdPZxuzmAnroGn5",
  "key39": "3bqnGWPjQM6BeyHadvKKBnmPRPbWjBXhPAiBMKkFonYb5YqAKF4X5zpnb8pGVmGijsugF1w3RMDe13h1beQxzeez",
  "key40": "26Wx8dzgBJjCMMdNyYtWWFXCrEZGwTbRT9LaVsrtE2MBiJrkDDkJTsv5rPBebkWTrJGtUZe6pkCH4jSfwrcP9Kpj",
  "key41": "SJK84CqaZp9YYV7PVwwfbvUdeqTFEwFLtyPw5V9WLuYa6yQuCnBRkyZpTo5GBv4B4AK18cMtqtiTbkqjxzHzKBx"
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
