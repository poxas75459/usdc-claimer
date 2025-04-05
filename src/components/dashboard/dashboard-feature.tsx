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
    "61yPPrrPCUww4nTA9TsJF5io3ehZ5PVRwJWaxpzDWjbZDgBgxo2WTrvA8e9qFwFDjmonXox6fTfSD4WkrvD9bvSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d8rWm2GYJNWmibQJudWrLXe1GpY3oizEA1fkxNPnomefvMc4bVewYXBXMv87k2RwyoXD4w8nY4hroLqey6AoUht",
  "key1": "4wRMpviyLzgYJQy7yNHTHJpdf7ecaXujcTq7ker4uR1FxGYc5s8pEmrZXthkS7XzJDyY1YgpFfhy6KyJzEqiF19k",
  "key2": "3EiR5bev7ebrrS9DY8x7aXAic1Tha6Xunb3Fu8BsrHTXKDpZzRShTW8mZUgrKkEsSn6k6stL3mN8mAwsWk2zKi3A",
  "key3": "4hrGusfdBMBnZ5hV8wTtcNSkARBCJ8BKvM5bfwYkdWTDU4MdLYwrnV9SM8odoL31JsQhwjcER8tziDGhGb2Nru3r",
  "key4": "59fwN9RMrrBSZRVVpH85k38xi2CyU4rrFxXi2t9qxqRFgcQ2gLyXRVfKb2TthccV6kgKFDVpnV7TX2jN4QuKZDZS",
  "key5": "4vnThajnoypKfKarGLpxhGQd8G8fHQ2WCZT25NoUvXVcnAk2LFjWTsgTBf3nwoo7LVz8bQYmQ44KSp5Ew4YKp7Hn",
  "key6": "jxBxAQQsahxWwZdTZBndNwhcW7cu2wXBFvCnDdSCUujMzdQmvP6v2bpz5uKAwdi218Gb691qujXBdunKgx8vh9j",
  "key7": "iHzave25tTJCs9x9yHesHrngdYVrrgEAuauaALyg5aAHaBjjqestuPNs8EjQvjxAVPuHCn6gtHiUySk6QbJW3FE",
  "key8": "4TxvKzettqRN5z4dhfUq4qEkejyXRiJSgm9VMiCsKJTbLmfxLPN1CawVQVwjYpWbstDGY2ZBvCCWV3x86LmfmHo1",
  "key9": "wqpSZ5Vto8SYxa4ytJwsvFZdSVjQ5qUbWVoRfUhLCWnueBYeSX9MgJkoLSbU4qoPgDqo2Xy3HNtwQ2gVzRN9MaT",
  "key10": "357g7RyuE2Mp89fTaf9kwxuGcxrHZ4VC96nJc5EWf5g49Sp6xT3uoU3KwzWfk8HTzshCP8JQeNoQ7urWr6tF2SNw",
  "key11": "4Q8ugcPoanmASgLrNkacQpPnpU3EsVdbJVf4VbMATpBkE3cBd4mdGYw5qFg21h4HzTz1mpD872mtHST3VJuSyuZn",
  "key12": "465bDEwwNMTx3PuXBKgd95cS4LyWUVY6SLfQ9eBy5Mgvai9nmByzvqRPoNEzvpEYtgwcveDaCoMWNHqo3ijBkseL",
  "key13": "5tfBPPZiLiqXJsRiERnAua5Ma4aEFN4TkbQJnn44a59ENGEL66UNboJqjqKFDv8V1H8oHXBigcAvNK4h1Q8dKS1C",
  "key14": "3QnLrdyTVrkgVBihKNgDeR2g4u9ufUP3NgdtZT9zDPp8bSDyzmHNDDRbvXiwjUPd7hXaTip9EUSUQrHdecKNEMmC",
  "key15": "49nVERBRG6LiwYi4JNseeYa7xrk85biZyPaG1W4ZHcCwxH1444A4GW6cMK2uKYWq93JePy45DCvq9B1rYaQ6kMsL",
  "key16": "2B8MFjB9H12D1sWUhHUiGhfiHBuqbtE7wr3ZwdNPAyApNMTXg1pfdePVSZ2Bt6BNe5aRmd9SCKqULwV85HgBpdmk",
  "key17": "2pad9rTrteyf7wZuYLV7PNwrR6cpxqNQYCTD5uhGmrvNpwRDUX7fgZJMU1kAptcHDtPWUH1ZJ1GPWSCygk2SwTQf",
  "key18": "2HdX5CvEjxK9P4hY4qwh1PVwRPWgsgwNBFmQF4TWHsp1CiLzP1kp5XNCeBcLy8ZxpaB9Gc4wTxJ5uKiRPhFvzrv8",
  "key19": "4FqYobu5ieMyWPzXnT1tB1pfb2xTJHbKHUA4Mh1wQn7dQsVBYA9VhNHYvy8ZuouBTYUgoUj7sE8wkMLtG5PFJtRe",
  "key20": "5YrGGfHCA4UqSvX7sL6Bu93BpkPTyjYjngM7KRPEiupQzknVdvG4sB4BaiRrCkAh3dnwWUWeFqGrMTnHxRNmh8g6",
  "key21": "5xGFHPHJ6E2csDgJcBeNspBNxVtjS3iCnXwrAgzTbE7e96bQCDKWZgRLwmeHbmB6ucSt7J9C5Srm8Kj6qRvBWnaR",
  "key22": "WFeZTX3DAK3hw3DkJihrYC7gNYrM3wukiKJykXspfDLwch7MDq39PcgY8WreXVsA3UrgpmeCksKRJkn5dh8rg4t",
  "key23": "WPTTTFhRvHqcMm4cE25LbKtSJZvrYBsEZqurvkS6cbFX2RB88mzhE7Hz2FN4ptxK3x15R5TiTcHqYuHzK4QK4mK",
  "key24": "2A22ZqbTS6MZKPMY1boigUtmevJVrV8DA71wNikgvhUHZ6w4dtezS2t2P8HiXXFGn1h1vjYE9d7sYT277pA3uQFP",
  "key25": "3RihZ9TofeZ5tMutvXbgZard7oWF6MSmtmdiYdi8wtfiZ7DHM5yEeGsrCMzcRgQurzd13DbjnCjDPL9Vmi5EYew8",
  "key26": "fbV3wzRkFBBeYuqYCxpZgC5UXDxz7m9WTykU5bJ6euzQSoRNTLeKjVPJa5xajVCRN1BUJsKyKegE4C5EJpas3ve",
  "key27": "5yWAW3Prq1HtFGhLBvj9j4PB25pLnhGzKmvYTaL96d46L6jGQhREqiUSXRfTcKWsUEHXeVtCY7ZAbVgc2LPcnSd",
  "key28": "2A1Wv7DTSFHdPfYwrbUqDSrE7a8f9cyJrDfva2VuZgvTiJ6RDjsdw2iygPXt4GWujAmtYmRZ1WwRDZrbHFu7JnyG",
  "key29": "23shTLhMTv4HYHzhkFV9vsAy2vMi2N8U4fvV1wu2eCrUzXjyaNHH2d9ergaXxDb5D3AGmtgnEtswQsFhcXVSidFS",
  "key30": "4KpEQCWdwjeB3xN3yLAGCiG1HdSw6CUcyVMbkJ3GDskJw8BScSbJkg1JWTUpXLgFSkBRZfy2iqpGMpdNw13CR6M",
  "key31": "6w1yMXa6iyK37GQJZzCWaeEszn6BjhGyHmPAMYKhcLurArGDWpuvBFC5ej5xjWsMGHXCi5kBdjM8J6yc2XeE3Q1",
  "key32": "4hPdUngdGhLEon9sAsfrfXoNFYzfSc2KGtp9eBjzhivft8mpSdx2cBVF5FosMrwUk5J6GC19yYaf9q83vNrjXHV4",
  "key33": "3SMuvBgWo1QiP8XiuavAJYwa8PPmPH266fp4MA5hUVXcdEoWPv4HJ6jQR2Ag9sWgEJerp5DAXGQrgVo6fhkio3iQ",
  "key34": "4GmgaSiQHM4UMCy4EiEd49c5WuVyR5rQ2P2Y5EDHJbpVVYqQZQjLb4UqXV9emKmZuQaFZpUP6J294Jy8aVwqYs5R",
  "key35": "33hzGG6ZWx7kQ9zpVbcqoW9Wt5WUbXJf4uLrk4wFdEu1j6j54QjbtEmSyTUxifafyLXVDMN8wHwCL5QnKgvUrSQS",
  "key36": "26UYnZRDbPTKRy5Gy9Tbmi7Pxy2C9N9mcpjtPtPi1t9i1sktwmPhMKrdu19Fj6KvrBmFaH8JDszE4ssRV4BKfEEr",
  "key37": "5XXzijBbuzw69kk5wAxLdCofwB8yC4oTN3uynjUga5MbmoRjkkApbsiQC1kMLcoTebVeDZuHk2TxaBEq1p1YUCb7",
  "key38": "5tGNHkzsDTGKEknADNaBMNxocoU9fUAFVAAAW4be9KYUsdXRBq7qfrU3YzstdXg5quAbUV8ny62AtbDMRh3hpA4J",
  "key39": "2JwN1jQnxcW7Kfoih4Z1L69nY4gRC4gHFdBgJVTR6eufLhJjYE66BE2DzxRfN5gdoopkvU3eEcBe9exJmZ5hpcoW",
  "key40": "2FwFJYHMgs726muDjZTed63FCcr86VtcACv41U1FPaZaJKQcKcydmVtpNWCFzHaf9KaPfg8aRM3xipMttZG7QMny",
  "key41": "4fdBf9pwyCEM4Ps7ZFAAXKB43MnR1HsDegBtB1wL6kCHj6RmeaNVFYzMtDjiagU16rJGA9EjRLyjg8ukzsvY2p3k",
  "key42": "23EKxMbXXjZhunQwBUa7ekA1DjwsA5qoVNaSiAfJG1JGcyueHj1ri99hve8WfdNNdqjq42cGKenz1DRXPei5gcTP",
  "key43": "5g7XkZXzw22emDfMd1HR8JzX1hV2VzF1BRtx1fAZxeBT3YZ3dtCdXGe362WhBzA2aD4RDSPgkEyRqgzXg22KC5P9",
  "key44": "5LMBnRKF4oy5BQ5JD8YcWab49kLPFaisxkyRmg3QPLpxouVHm2etgGdW6jYKTBqjUqAHnaQ3vda5fseg8Zb5QSse",
  "key45": "3Bymq6dJnigPsunUS8WB5fACDCZW3pEgdbKjZd4Np8VgjkX3HrSZCQakY2a1v2s8iusThPPSVB4rec7Mz46R3D6U",
  "key46": "3hJXNRa1CXsGdGvL7q59aecKkSGsw7Zi3ipVVijp39Cp8FwH8ixE3oGpFynC9v9EbSEViRmdhAopCQd41QYeNQeL",
  "key47": "vTbSo9DXjaFu9p1hrgZdvFJicEKLWef9f2y8FcAPUQPLR8ExhJahTq28SGwYTytx4aaVuJRWGazQqfdVFghgrdC",
  "key48": "3vozX5ndMebvtZctFzWzQNFeHzCJA6aKnyC6PxNK8yxVDu5bm7ZFsHc7k2A6o4mkuFpX9sMjyHJseqq9XMZrLdXo",
  "key49": "5thXfcTiGTyz7db51BeMHyAfJ83dKDWVrbrXs3rwVQnPRYsG3HvDKqsRQQTuCCrMoCTxfZ8eqD5yy2dJRj83n3gF"
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
