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
    "k6kg82d2JYReKbW4B34iLogujyL7tfr2J3dMyoRMLaKmJywk6tT2fypT9Sud47MjTasbEokxVTKKh4Bkgtiv6Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nud3HJ6NG2XNbtRcdZkmXfR79KLDLLEu8JBv5PBJgiP6gxPUwszht87QwUyJvAXyW6rcxJtZiY3xJfCTRyq79Hz",
  "key1": "5ZFzBPxKjYREcjY7RPQhGE6SNXqgFRw2P98X4v5nNabHhC8iss18iBK6DRegZjag4ezY29pq1YpMFejvFivs2snX",
  "key2": "1dQhdUrQDyksGnmBtVbGEWHaKXY2ewNYTXACs8Yp3CickGmdnegh5ZQMNmp6yhEHx7SnXsUmsQrarLBZisQ1b9P",
  "key3": "2ZxYp85sxKg1vUNLaGK5GFR6X95443i6Doh7ZgAcxtGHdbUGEYgpuHgBsdn8r2fbTCM2obks3fEZxHiWBTJik6Z",
  "key4": "5PtsHbxckst7u9F2P6e4Wd2fUqDHEg942bqEzH1h9o8Ae8YGjfHcTGAN7v9nXJnjS6Lb8wzDc37QEXdfe5TBdy45",
  "key5": "38bhHuE4RXpYgSXGxe5hLNwXvpMj8WVyuiN5gZgGwHQg6XPcikXtRwStTfbJP6HwfHKyW4EdMaHx7BHNA7tLGvQK",
  "key6": "41CbQVQH2vF8TtTv8fkPa48ECDSj2CTHZ3A4TFisUbNsNxfq7cxm5gvJcaoXvrrtBxgHiaZVfhYrGpchnUJCRSGu",
  "key7": "5mLRPWtAmCu9pG6df6ntVC5jfGPQts2DwKSaF2nnu8edb4YpKWWkwFbEiP1R35dYTsnxY1iLwtRQzLxdFGeJvSeG",
  "key8": "5bZ9i6gq6W6DyPYwGKhhTSv4MxD1FqdATDtdJsvAQw3dSX52sEQiU62T8y2bkfEcS5EMBh2RwYJDJEBrdv2c8fka",
  "key9": "4NhNMEJvZnW7Dpdg29H4He2RGusmHLfVzxp6k2YgnZwxkTb7fb6zBYqXV6bM6xPxJPmLRe9H9HG4DUDXDoAqHwPb",
  "key10": "3E3fPtzS6eVwozGxBZPYHwQM1s6qEdoJf2TcBaHkzcuJnfAfG54uUttoHvGC3B8RGCiArqCSRmvDFr9jqAGx7Dw8",
  "key11": "q3A5yuW9grw8byM59PeBbg8TjhWhvuVzBardxkhS6uYHRV9fDbN1zva5HEUCqs4ZhwecNySDDoBxZtnRPmK9ePK",
  "key12": "QoW1f1ogL3Z68kGTLZ5vJBwtxYwKoAmvZcjCtRr3KkpXW6DMddmJN7H5YXVaJhS8NPF48E7urmSMUHFB1RW6aXB",
  "key13": "2PWuTzcRxxg5guaJ5kE6wSX7LeW6rn3qjL6aKqeZq2tHZibZ6pZBNQK2tkLkvZKAYFGbYPEyQwrGjdEvyYpN5AMa",
  "key14": "4rmM8ic3CxqvCrqk5zCgkFbzXzFK9vKgobQ89JR8VXgcugmo3iiv2iF8i5XMefXLn16E92pBxhmDYa2q5syrN2Ca",
  "key15": "4jBTtYu6fG2S9YuCua4iGGA5yqnst8zHSieMQESxv9cJkrpCbDU79Du6MS4FwuVjsB2769BQULJxRmLDNdMC7NcF",
  "key16": "3sWgyS1MoUn5i1em2rvLHh9sMtbseFjrvHNNotM3kg1GMWZWc7QchosPMCz3wszCSfafsUSdJvt7Zd9oXUJn3gfi",
  "key17": "5PwMPg3GKyNaydRHdFkTkRp7DgHX1fZ8RKd35YL1uwfAoWWMKYSVkhP4BKo3jBm89u11NTjUEBgESVyTCpFEXgda",
  "key18": "67JW6WC3vdgGQ9mv5Ng8PWZfVYhrPNLFnQxW28crt9vNVBq6MF3z6rc5Li7MGR2s6XgYTpgiB99mysC9NVsvMQH7",
  "key19": "sJveJ9Dy5uJhbqsT1RpX6KSU1m3cD8QU9sDsdi34D5Jwo5nM5Coehr5EEsCsqJQcGjB1a1UKsfQBxNgZ49UDqhp",
  "key20": "4nnwKQYBKq2jbjqFMo3xExAxPuxqJWNQQ9TxMhtGCpUCx4S4YKijJMHhYsd6APTrBwkXUcUK9dvG3TbaJYXX7Kgy",
  "key21": "bKJHdFF3YJsbXQK1djhbgJ1pnVJay5rVG5y8ZEpbaJD3cpDDCMVR2V5Jb265yVpVabAsZThy4osFXLy9tSSqF51",
  "key22": "5vYu2nuSzYJTJX1cvvTCr4J9xfsJePuzzLJWpitxqC21cf9CyvRXAmxbu6bTqaEJEotWV6SDuKnEQk1HEBiQo8g5",
  "key23": "3egYJThyNRAHEwkx8AAZDPk46rbkPggZSU6qBuVwvoEd2kFTH3PXpY2bJuXC1GZaqnzkiTAWxcACCSz8bARUPTYE",
  "key24": "4Px7kFLqfbij6DgnVf5TYzh9WHn3MnTfcZUtUiTB5i9dbxwL1XPALQdVCfy2tGjC5GE1TfijGNjw43rNCM6PpTfX",
  "key25": "4AG6HhqAfgsMXGp4HvcR1sXa3Dp28xTir5pzYcp6TY4WoBvjxpPCSNZEXqD4Tm9SRd3UnnfaPDm5KdwYaCztHx8J",
  "key26": "5wab4tcMnxBH56aex77yPQs59uMDS8f2hS6TePsYHsfyPmxFw2WpfHKjG1s1BSrUTgenttaQ88wYVbTFndxRhzLP",
  "key27": "4dQZZNm1xkhxNUH38Jt4ES9SxphHXBuTd9LgQ68Lwug3FA1tPWaWkEE49yVvEbe7VTrAr2n6x57G9PUdaKVoi32N",
  "key28": "2MpLXnufq3q6iQJ9AvdYWRG3bV7pLwSqYQYevYkSLVtYERPcMpszmaoiY8wXYBEmihQJqk1mEyYVqd2Hsx4rY9ec",
  "key29": "2KzaLay1nDq98P2KqNXiGPr6ML2TzKXH6LpTRxcjM1NpNoRb39UDbjBJaUjoV26mM1d1rM9MH1pVTvD4JmgXNJtd",
  "key30": "2vNmW4EGt9RsgJsb6qKBhcsrS2JesYaeoaozVFA58sLRF2do6Q3PpbMmR6ksn9t8nHYxbiZ2KDMPqDLcTgbDuwLC",
  "key31": "3rDAs5wH1XTTwPqcCkMQ7FvjSoTH9VZj8zdXJwxTXNyJybD7ZYJVehMKtFY19iW3NkXTpWwn2ax4EXpp7DizNQoV",
  "key32": "25njHtcbJAK9Gftf5D6tv8VXxaauHoPGrP7LJ52bShuHHDzYbTYeSYpXvg7Z4n7sULr4Bc5wsrL47ayQjnCwtvKq",
  "key33": "4bNmvorjkVe4yKbJXTEoR76PGxUFwkhGCLhLnZMvVrvJFQzvm31DiDW7imtRt5LYagpWS2EJTtP2SjBqMYBpCEui",
  "key34": "Khdbh7Zw84B1VBCvJT5VUCmcWYCCjspumiLdmypXP4i6VmJBRQH5Ds866puM9nucdJPmuhZnCoPFMTPSsWJk6V8",
  "key35": "37qeHA4PMGTrdJHDTLv17fyY2ab9HWzm1i2tHdGMSCR2vkZszkMddWvocy2t1e7mAWQVJ2EodTK8wyzejmD4sZrM",
  "key36": "4AEZbyNaFpSr76YWUtwjBSpFbnvjaXtTd69HVukTHvDuJMuqRhGSGQ6z1AGeMux4tt6EtCw3A82gwp4mSURH3tmk",
  "key37": "2kxg2zW5W2Aq7MzG7GEBw4yzZyYgfHMsRKSkonoR7Lrz4Azwk4T1381AvuwswsT5DKDmoaPXNPpvPVeWbLiWFJff",
  "key38": "2jRQxBfAN3Y1ozoiJX34vmTtJ8ysJndXbvEcbwsVyVTEVkQEdDoFi9NVTthQcDAuQBmD4oQX9XMEoAJ2kE3f8Z5b",
  "key39": "2T7CoF4VqSVTvTWuwC1n3kwKDTtKsDh3bbaHVGmhiQ5bcNymeYpNstfDS8nJudgk47Lw8U5ydTULXGinWm9CVoqa",
  "key40": "272fmz1ZguyzSAhkydPYNiYvL8Ehj1s4RnpNf8un2kxEQrPp34thuNdSNkMQ1geqo9EDGAHRa39FuUA8hCbTGAGb",
  "key41": "3VCfWuyDq4BK7Uv8i96D7Ub8wdkaFuqSJNNMzc4vKSXYKJsUWiDjDixCZPF4t2kKcrfA2x2s3eskHrCb7znFw1ce",
  "key42": "SjaXeMPkffTG76c9xGWzaiWCbgxAXMSJLAepekPhNA6cmivRLogrAox6izZS9CZzaqee7fhsNqAeAXSwpBTHZHK",
  "key43": "2bUBU5a4iAGhaJH3xzSLxzLAHx7aW1VG2EYbLEMFSbudYL5vsGbKvobLiVojJUGRd1CornivyTT6cD7WrsiWBoJS",
  "key44": "5HtRkbNvLw42zUt4PWzfser55cajuCyUeEK7hcekutszyUjnz9a952pXNYh8xq5sKY5ySG6ejufjaYhtXMna8p1F",
  "key45": "5eexHsvQ8WsNgucMxzJGvfB26WmrnLCS3ToR4xkWeb5uCqNaVb8Guf2zwsiQYPbSJmS3YSrgFGo8BfvrJuK1dgJr"
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
