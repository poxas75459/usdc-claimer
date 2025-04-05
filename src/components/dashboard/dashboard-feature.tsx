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
    "3aqEB3YVEy4DxW76osvXoLNqggeiij84KNUzzESWZwBGeZmE1L9EGY3BnmXBHjc5aSoEyKNW7WMGnvJBQgVk3QcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghY27kxXzBFpciPNkkvDqbA1XGb8N8TBqCoXi53QeJUoz5ZwL7qfEG74bBJoXjf2GfzLE5nuWiCVzH181Kr897n",
  "key1": "4YkRsh6jmoVgBdgknxec6eW5jSqjLK9mn46qe559eCtLe5XHm5eUKSeZQiLRKEobVxMQJoYFUqyNcBCe8y7ic8GK",
  "key2": "A51J1q9zveZPQV8SznXUBo5ihGDxEGz9dkGRQXJBcgPjQYjNQdfG4tMQQXUQehjTBwzZsCULcNCHGCgGvgduzFj",
  "key3": "3Xbrhcg9JWDDjYFhu5z3p5t2oFiryk1b1pnxnamioyUYCPmtiCnaTV7QTutH14YTiuFfckjEcQd14GEtcC5jh2Lq",
  "key4": "keRFFPbSD9e9f7qWpLroPwCYPFLsjWB5NMkxid3h4j3mL15hFghckd22cCYh19n2mVMvhm74fm8fXaiLbPvmjYq",
  "key5": "2nR9cPW9T2F7AaecjGdNsjdtnctTpUoQ8xSWQboFRSqGJGuvoASdpKDeAeitALFob9oZ79NAQ9A1uyJbBg26VhLh",
  "key6": "J1Cy8TbZEjMTCumFpSdcmBtrg4RVFBGHPGYDiKnYkn3v1QJapLBz7t2SrM16RZcKgE38SdcTJDFe7p1X1Ysk8RX",
  "key7": "zfQN352CEHx5HtTLhYtjWLH4GsPsVACcAt8rt3LtmfkfS1VYT9F3Qr9hNB2hvfVUHxx3Ks4YNtaQv6DRboNsjM2",
  "key8": "aMk3mF7uEscnuMmy6DfWJfmBknwDzPz4HFhcDuwjV6BqtGTiXXDPoVTob8H1W8h51WWA4UTWTQnTW1kfzRanzFw",
  "key9": "4mpCyfrJivDaVk3yhTGgoWf2qFGX1LER24J5uZ8X8eiRBvDywmqagGeBcAZKziAYKcBDQre2GM8z5ird7Ko3WFgE",
  "key10": "4mXyDwVmEbLQCc7Fd7KGJAeYMprRoci5U4ZJSdAzFogY3yDdQDJdtwp2BNSQmcjLnK82vBHWtX4xJvKYz8xyXdWo",
  "key11": "2ygFfCxRuoQA6XN3YA7FAe3gWNYBkMiGhX9UBPXR8XSy8392vcDvb7wxAnSvKJEDE43vYgfV2RUErgFe9hVRJJH9",
  "key12": "4mJ9HmRPoQJhfeznHQSHmMqonx5cFmgeECBkN22Y7TRHkSJLaV4BCSTG1y3wQF9UFE6EkGwUCXTNVDooh1aD7pWX",
  "key13": "5LpM9texCctVcxGfLZ1QhZ8HCpC2cb2ga3PJ4B1BcHT88kXsbnTSQNk86oK1gZ8ze7V6deR96adw9M8XuWtripX8",
  "key14": "3Lo4zZimq5rKaAR3NNU7XRHHPhLJDPdN8U7AgL9TtoMEgiJrLwWBJ9mcqAGiG8Wq6X91shfz9SGoptJujU1TFCMm",
  "key15": "5v94zvDG4pV9eKjU4PsetzSQSbN7JNXXecG5yox1dZWgzSBQpjyWDrENsZ76atuHjWG1xpAMWXntuLtPpfpYvtbg",
  "key16": "4X7ssRjP1kh3CHBuL127VduPJrr77fQautpeUZCGrt6cEJNRsQAMQqWzKbUfPBztUhCkX5LKuSAME2UJC6rbYFHQ",
  "key17": "oHHWfQ4vJa46Zw5i2fKQ36tPXV1WaMLyBboCTX9WXccqtk8Ncx7yEFPV4tAJRakzA5LvrdYHWJJiKARth6Niqrr",
  "key18": "3HgS2NQbgmkyjTuqXrXsCSkZk3iNv2NY6p5sAgt3ctwi2rfuogcwnJzExfRSDTQWFFyjj9bmWa6iESR3MUWLtFRH",
  "key19": "3TbomZ5KXinH3X1Tq1LedPgZ6DsMe24dv6LNJTwc5bfYXpxVWExTRocqQGmUMsnXGYwNFx3hKGodMH6TDwCwbeVL",
  "key20": "unfuoRks6kRJFWytQDeAkMFHmgQeAFiQeGTSaUFZueXoF2J71GyuNpp8UhHEpmGHfFxmmrsckjuZB81X5J6pZJo",
  "key21": "ep9MvsXxzJBM5iEAsh7wWdg2RqXAizhkCeJxkSMEaqpJZYB5uSXnRX86Bn5Q4pWTxngwN7htA9Bgr3nKypA8W15",
  "key22": "2GP9ggCLg4dGfz8WAov9YB6dMrkL6C1yf8jBHb8VbceDMz7s2mB1SjuPYyHN1sk2mLkfhRbHGTTkQ3YFoz61xPtK",
  "key23": "4WKmsAw2GJeoh5gdHmktYbui88a2W7VejDemjBidugHtyktvgLag6eKKntnfemeuaDxbbSLNjD46BUNZto8YWXDn",
  "key24": "4YK45BjcMu4Y4wPVB3gzows2c8YDzkq4f8u2pFFNP7nQu7hVPyntBcMvpMbNRFbVSuv6uJ8E8pCknAyArgSks1Hq",
  "key25": "DonVcLwPZAGuyv6ndWD5qVyBou4hfeXRyKmrK34zhCwnoctAthGqoAFtYE1h68Gpe6YKUnrZfe8GieSTcPkZwzA",
  "key26": "2NRTjPd6ZCkc57Lp7pUsNTpmdTBRPmP6f1e79fPL6cD9UEQ7hdWK3WHHEc2TiDp4UxUDcH4B1j859S5KnDwLR8bJ",
  "key27": "FCeFmktD83LyAABNKvrxwsmt866SzYXEPxFkC8NfDpBcU9jsRi1iUuSpdwQWmaDZtvL67MqPAcRSqUaE8psDQin"
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
