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
    "5kKVREmxmg16FTLjcet38esGxL1xXWxostu8iuX5XvVQZ8eZpU5HQfrzRBMSfLdspjMiyq18gANYvbZdmwg3MFit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SckckjfwpTR2KFJmpeci4dFZkte4yntZBt79uK3bF9cTnPhESxJphf29oFoT2cLXABZbMMP66JaDT4y7d44NkpK",
  "key1": "2XaTcFnUCx6DfBcq9XkL1yV7RaQY9cJH6SdS7KE7jdJiHHzNRPZyt5Qc9kL3JQJi7trPAuzLkngf6jtBCTN6Hmex",
  "key2": "2ycRA4zCfbb9KCFMh8g6Djn7Gm8X4kLx8S9g6F66xxrnQXbeR9h4zhkazqvroXTQ5ua4PYxDtr4ShxHzHMZjFkju",
  "key3": "hMh2zKQbQMzpoqaLFroGcX4f5UGzezo22z6WBU4dcYgn56yQLXkfgaRy84R2fMTtAk8g1DHyQdMmC6A3tiwwTwG",
  "key4": "5XD2iPnnuYMoiUqFHwkf46tuXhMmm16Ui86bSn1g2buuvgkDZPkgVNLK5g4eiXH2m9Xs9c8MFMktcebn6KbMJi6w",
  "key5": "31XuVfHPdkrCgbHtEwtcbvXddJqeLMz8sGu112F8e7ywSaQyiJDCoNqhP8bUrGSQEbTMsgJuS9jsYL3PTkU1VAwC",
  "key6": "5Nwzx4wGfBBPmVB2kAZ1BN6iNuJaPFxrgtptEH7TwuszKgWiwp5w42TmfiNDND5mJarpZg5ASPkN5Skrk13ETCGY",
  "key7": "3WPwpnxjgASWmojG62zAnLRfAk51TVozhpzAXM2PHwaRgVR9s6ktegk1V8SJzGdWhPvFZiEnxdtbW5PnCpKqp3rd",
  "key8": "4L9aLhA88GYtRgScoH2xRDt6JAqbTZarQ8pEcRp2Xi9YtbSw5kx7uKZncM9rNNJiMuYaxR49hQV4Hg26Cfxgs4Th",
  "key9": "peSNsPGMLNf7wPvk6b3cuT6PYLwp66t3LgtffzK5QuzXFQepWV9qoCJjGUQvseZuoAAS542P8sCeAEFxiA2jMnN",
  "key10": "235R4B9h98RGeWsEfNk5NS57ALmXkMzRAuHKjQrJyonp2uLrgniTx9355FTSMeAMHq6agLTDQv7tbsHUdTzz7zcu",
  "key11": "5B7pVHPK9ssFZWvu3LNMyGzC5rrxjqBXWN3Uw4TZiihakxLhcaAQNUJ5jB9za7wteX2fQvRznkXsZPw8Nn17G24z",
  "key12": "4wNK6WmAVKmwGBGqfKtKNEgV4Qy735Td3JgDr4MWYUq1X6ChZrw4sR1ELuVybZdePjvAY5BY8ySxPNCCnmwv9zq4",
  "key13": "5iqVw1GdyQCQwV34h7u4yyY2Mm368kumpQqR7vTPMLWYgA23RyLMXCtBKg2APH7nWUpAxqugMmouT2vhRSUprQj2",
  "key14": "2UJ63k7uTAQWTeVjvhzrRCJB3Sic53dHTzH4Gd1yHmKWaYsVmr7i4x5S6mRbEg24KbqQuas9k3q2WCbb1CMLQeVK",
  "key15": "PCgCn9S24GD9Dcj3H4n9JxyqQGpEJg3E1ZkQ5FUGmRQq8381LqbS6RANmDVdUrrcAoPSQRPBmBe3TxsH9yGu4Cg",
  "key16": "58h1UVmNt6Ng9YFPLGms5hpLdzyyWdQjNHq2Cyzbis8jPTQQN1r5odCPrAGxKhRZB4VmQavd4VbDiMfS19DeMw2v",
  "key17": "27uFdCZiVTX3nPUatTQNFWj1H174pmq5Ayft1wEiN9BrFiUL5SA3sac7vtgY3J7D6qrdF9QajXKQTFBTP9rUGWnW",
  "key18": "5ctqHYRkSKBArC9dgChKdP1eQRcWJ7xoWNUnzUVH7zF97wM4CRtLbEjJGWQM13tiirTF1YfLhctQMg7d3czY8zs8",
  "key19": "2kbbjgrk5XRDcgV5DrnP2Hr1W8y5NjjBGt9dfUqdEN4RpMMABi31mAkWVgg8tBRftXE1XiE4K6NjaCRrdFy5BRS2",
  "key20": "4qDaad5h7CmvEuBRusZux337EPSJErfhgpMbf47YUuTv5MGDjEQCrC4mMAvFEtoR3kwkoc2JwjZVQcRAbpmi7wPw",
  "key21": "3Xy8wjfWFmQy3NEKzXChco2kw82dS2pp21MBkbBz97Wgmab56w97JBLBBeGG4aWDEA6hC4U7zK5zwB98F1g5fvpq",
  "key22": "32FpEVTQF253CoaGtnfen7WEAeuxdmKMfM4NSJqrb2jCMD1m6dPrn61qR4jcZHEJrxAJphQ8omEVbNzXJrSayhZ",
  "key23": "4nkbHZqHdJxUu4hTXVDj1i2vhP4KDjGzqdAERNCogEn5t22PL2JPEm6rhs1VH5GRBNMnEc13dDG3q4dzWfXimv4D",
  "key24": "55h1Whjxtytv3e53iGwkSMBwkhxALB5tKyfVToRuxnQayxK77yLDKGteocsA186rgP8hQnMTamEMhDr9cGU3vnSE",
  "key25": "2rKnskHNZf5PkLbtt1QGS2obhcufbGvCAmSggwwzjbJttDXi3HXLt1RG6KtHqaAkjfs9Gzr2Gx7XU9t6f1J6Q5Eq",
  "key26": "4Ne9Xk5VSivQAyBKdwipzTNCkZnjKBGhELSuKJQkBXdC65sAVV9SwQfSVsmPvwpK5kwRNs7mNtHy6ugpt7eRaxQd",
  "key27": "47AMRoKQxyjuRsqov9gWZowS15fWyhe4LQeuqyhuVZUZQjmQhGT3vNM4P9kdVjCDExbFEF6LZF3KDbHGxNEeFJR9",
  "key28": "5g7awrewz5GCx6FmqVNvUE48Ff3pp2ASzuwireKAnm97TB9vM2uj8kKr1bzHmB7buHhDZ3gmEoNzHen4uJzmdcDu",
  "key29": "573jus1niupc5wMYBUKNes8nTS8rU6Yw1cXh2Nbc6WjJD1KNibXB3qi6VqcJkXbRXnLuNKqzhwJ3WxYEArm8B4BE",
  "key30": "2ZhT5m4iLNrmBKYdjjfKSNtYfa3ZnY5JjtuBbqDESRhNt4LWRCw6nAwWwjCXeyMsAjXHHtRpp3qwkrKMVmksXX6R",
  "key31": "3a9fkaF2FiEGBN1KxeS3n3MumNKEyncdeS4GNySygVnpiBs3abiXvWnemTK8XbfsX3NrR5zbRfYPAYKpvcWfKh8m",
  "key32": "rawhhTnqYhTCFsHd67h91UCpeC4xqLwHCUc4wLYnLkCB1qsnTeYH4MKyKLgdzwEKPW5SSEHMWL7B16xPHQt1zj1",
  "key33": "4BAkyC5got9xm2HrJ9oo4wS4bWgGkZ56zkN86AjGNe98izxZ4Ws9612za9mxFSz7TwAKQiDQE5qoA5Z8NUFgsUvV",
  "key34": "2APWouggXRCnNHYn6eZVGvnGZYVfVa5cUoNJogqRvsMWCdG8UEck3XvGZhUNxUUqm92XQXiornhuU8fUYx4pisKP",
  "key35": "374aRSKNbXm98VwkmGaNqWYX8cvEh7YrtaDigVdKqyMDbLei8CeLMACc1acA2nUTfEaXKpSt6wq15mKUpCp3VjMA",
  "key36": "2eXQDNA89TPCiEWm188MJruasotr4zdwjgs86yKPPLBqEs9FtWHxo4PPuZdqGB8Fqz48ogVd7GE8YMWcCzsmKrCY",
  "key37": "Fey8LYBcTsbGTvxzHupjpNibNGakuEcmK2frEEwGaP99n9yUeoPwbsfn5WxyCVjf72CBTanNDM9VxqMiQgXdDYM",
  "key38": "2Ye6W3UHo4QaKPgQ6gWYiCTLfiSEk6XB6s8q6LPnkuH5LESPPdeo3z3q8tcus6KUqaBN2yGrcGZLJpbMagCf37i2",
  "key39": "2nPGJxaGLv8bhNDJAFkpEPEjLXRAZPtW2oeQBUpZ3bdByNACZLPuMFGZRNNxwQScNjQvFwrHuKbsBuzxf3LmqNTv"
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
