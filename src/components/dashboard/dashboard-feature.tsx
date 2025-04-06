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
    "4R1ggwn6hPVugkNnVcnuACDNaEfSbB3sPuS7pS26FYXP6fmHKhncdVF84mChoBFANzXVdZvTe38qruhLcxtbhy4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ML4HqzBWttyqJ28Ux9zd44YR3iiLtT4CamRXWhsYvT22zen8KnFPa6JnQJ1DcqGsK15ubuL8wgNh4tos1DyS74Q",
  "key1": "3aP5TqtJRgibYU2sYfrrNhFSRmDDezr75NVSdZhzHpxrE9NUPahxuwFjifgHRGGPni7JBRRPzLYV7v2wikJvSwuK",
  "key2": "5LsPGhA8yTT7XZkyoFphh9P4mPrQiUs8KgRwYR1NG2JTNZJfDRyhy92PQeEYz7JdNoyPmonHVoXZiUNmRtCFVZem",
  "key3": "rqhG7EMyjEYffHVo51619wXfBpUoXwGDJqP1m5jMKtX9NHJSVNH3XcydxvidHA1DeNCRZ3UK5HxGKZvvPTouads",
  "key4": "5ER5He6cWQSh42dzBVCcjALVNC4Ma8zXaJe5fH9jFq7t9UYR1c69XsH1Xnvo9hffzhiZAxLBKN3FpF9yZS93KB13",
  "key5": "hsUbnSLsj82yQPUJTZVNzC4W911vgF4koxWL7UU45GrJqmVMmj5BneE1DUPRDZZV4mLUZyx92krg188tE3huAMN",
  "key6": "66EfNxGvo5P8Hd7kLKQx5533uxaQcHTD9p8ic3tiD1qhwN6zAEigPgkf7s8EHBrsyfFrhssu2ueDEugEnmPZ2BTg",
  "key7": "3E7xg5keRopXtVSS6PnVbT4ESYXVLedyzFevFm2ces84Dj6KbjaMSum9co2SjYqmkDZDDh2nsrLshBnmFCAntBat",
  "key8": "3WJkD2kF7C3eWvFNHFWb3wJeKyF6z8Ca7bMpdGX9thvirbGfutF7NUZMETFMnJN58Si5gFRQ65zpLWeG4T54Hr37",
  "key9": "4wjwhLPQGx66BzkeeGZFSd1BaioehgFy9b68pXJdVZCeDz6sgTBWEJ3kds7p2ovgtY4Jvk5oBYaPB9oZUGPnEfuQ",
  "key10": "2Q7ASF6Jgw7Y5d2b39Z2X9gu61E3Eor1rKhCDf63XBrSGpMVwLBmnjXv3b6ynRx3h2mYkM3TKtsWBmhsLYaNFFzc",
  "key11": "1r9dHCiUsSXKbaqUk8D9dzD2uJCaCpwCfJCHLaa3AXskzJu4NxyyNG4tbcgXsteYyeXLcdCeFnVEiLzhSiyj55n",
  "key12": "4VFMXc7kr87U2dFkZjneCeLfKwyZdg2NgU8XGLobvoEZZCdQoKtUBjAzpBx8EjdEggJmTEe8QAxnSAeRQvtsjboe",
  "key13": "2MpCSka9tAvixjoZHoX9Fe86431MM3wzNNyvwaUZ8CgLYXD41VqTioExsetwcxtu1sPxfm7oWGyUMHPRC2nrtSc2",
  "key14": "2C2JSa32xuFdE9MfRwH5e7e74yqXpk62Ctpb1N8jRMpWc7qxqMvbYAop95pG6UZWcbRqWfMEMZ2twk8h9BWGYujK",
  "key15": "qvoaxYc4k8kh5wGNV498VRVTvdoTdHskcaHYxfbkuDDz5cuL4yoMqMuTHNdYMk6itSKjsqk2t2pb3Z15oh3DY2n",
  "key16": "NaiRypaaMBGSseyNGZNWFE3YDmdDSVgxfzvLgmsuoFC7hhntNqqNdA3xGmHJ9ZmNWApYnXG1KMuLouH22ZuwZK8",
  "key17": "5GMjjDyP3p8g91Muf548JvbFMB2XC5EGFjAf25shTeemE8AfiqHKHU8grM9wBZfCMc5oV8G7t4dtd4hPtrA1RFVN",
  "key18": "2ip9p9CcCUBJcV5gjR6PMZbpk1g6uR56c1FDja2AfVw8AfgGsG5mdcrFJ8xoCthUdmomAPWKAV3SYMHPBE1dAqga",
  "key19": "2p8T7Gv6hvcdFA6tnEdxfWTRXqmDNvfHH3753ZjZoADSRRuNv6QnuWpDEuBmWQdYZLzK46WGKtRGK2PM1b1kzUQp",
  "key20": "4Ds2LE1pXayAesxCYbK6kQyRT9aUBSP2SrTyLzXJ8f2GwtzSgp2A9p6zUJnCtQ4nDJvoKYQ9KUShP3WaGaXcoatq",
  "key21": "5wandRebaf11MpmtiTZX3VDS2mQqZbLmDk7v7Gah7xZVimRm94J5fyMVdxDfjc2JTqNTWxCLv717wDEmaSz7fVb",
  "key22": "2FbcsYDbeJkvSxQgseWj2xPnpPXLQS2yddLHqWKxwBykGbr8HrVUkZSghajrnNY8ZriW255XUSms6RvH6aHYMbNQ",
  "key23": "5ycpNLjGbH4j8WSFGUP8iLFoDyU28PAoidtgAfACaTdTVPyR3eo194DhsyL9pBWRb2dBvWLe87veYzScffvSAmta",
  "key24": "3eurtZTmmJFvdF9D6F4TVYuQembdo7naCVz7TEWfJhMzxMGF74eFf3ckj4PYPx6SsqNQes6xLi287AByKQy7o3ZS",
  "key25": "4fWJDDvSWXqz2jc2YpV6MoXJnu8odhvmupUREE768wu3ADxEW9UcFk5EaAma9Fy88XuuGah6wVQnz57J72FUKcgf",
  "key26": "2Do1yv26qGHvNC9odTCKRLPW4CMMuhGdH8bkuqe57UUbeT3Qdbw5pRbi6scSpGTXRy9g88LR5c2D4LknTcLjiufw"
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
