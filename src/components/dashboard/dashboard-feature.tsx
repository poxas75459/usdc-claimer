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
    "2Mjia7CBdnDaT6rw1NDXJfzwE6yuyuNF79AdvC92Noe8eVALyTNchB5RjmbcGRNP6A9njDxKHjDTi83nbFMJ5Txg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbr5hut35uzkn4Q1HJiZhZGC6RUsx5eMZxaLEmLqQp9UYbVRJnDP82THnJusyySyovqsijkuEPXHmtBkjima9Tn",
  "key1": "kK3SBdaktLR6X8bw77887nzPhcYCLv4pbzRv3BESPEtSJXbZtx2557W1mBbkSuLcQjn9Q5zvCTbYRNVBR1cVy7B",
  "key2": "JZeqkBm4zNfdrSpZzs7RAbqeKUncq1N9H4eHUHSPCuqS2TVcwF1WRMy2GJmDB82HK6omhGZnMSFkoupi3dxt6CU",
  "key3": "5EK5SDBXadFbsv8HeURpxUqQs1szxTi6Uv2QVJa1vfLTKrDKvyySNnhCkBWieLdYtfUVLaVxxgvGMfPqxyZ9VeD7",
  "key4": "y5hJ4JVA98QRECLG4U7CEqRNEtcy5RAEMWeiDJ3oVbMR26UJw2abFSpmxPj1Rb9EhVfVVdLM4zXmrLCcTnVcwx6",
  "key5": "4xcxLSp1UWQfAf3PuMqoC1TNGuQUiiKuHVLg94DiZWwX2gZ4FkqnZm91btRSxy7XNPotG3swE8x6S1FMvwAghRFw",
  "key6": "48S2QzP5L7bSaWE3TXzbeVDXJP6a5Lqwiw5db1W2WHJCJrCpLNyPELphr9ULaLX9mgVXNBLLKSXoqnbwwEdnNpWt",
  "key7": "3f4p1e4XGZYnZEvADq5n77d5tss542zdHEGhGmyYs9r5s5XyuWixuJgXgxiT2YcmcWTbR2Nm1HcfJ6Si5hx1tD47",
  "key8": "57jN4RJqKTeAHmdy2VforL39tj2JXM8zA5VH3XuF1dLHS3n5VHrcSWEe44vcC7wLnYZtqLoWjEGM1KD8owpwBWdQ",
  "key9": "smJJXNd5L1vujXxAymtSH2s6bqh4WVsYdmdfoVjGvhdH7F9Gg4QrTX9kXQvXjV9Py3kk1duaGwtNZmuGQiNKFJg",
  "key10": "5c8G3N2oqvzXQDdaRxiySGKNrXCLzqL6epgBvGCRLf35FieXo8H454x5RcsDAnqaKcYmLfSdYYFHcQxjZCCci7iQ",
  "key11": "3Ez2ZWQvZcRyagPwBwePhkHHMxtHEFuYTsifwMoRdSyuoYDi4NDWLUNsBShoDKp9fMWs5tgiBB6KECyveyscCes4",
  "key12": "4UwCx37SidiFSUW686aMAANkXJgFYLZ3mAsaNyhfKeWbGRFsURJtDBYTATg5F58fppLvsbRcZbweHVn3ukatKAmj",
  "key13": "4tvoDgjfqtbuYvzU8f8ZPqLtsWTKVWJQSGcEE88mhoVmL3vvXwouKRrx9TsFYe2dtFaz9mjjK6wffwmzJUKvH2SX",
  "key14": "4LiQJaRpmsMFCSaH3Cn68xENxdPW96RdGqByKG8iC4V4Cn1afepszo28ZZifkZyvNFM7zxNB9uXkrdPUrSzauVEb",
  "key15": "TERYWhPRYYThNoeUsap2oVs86ftvE86Fw8VXR6vUmGFMffCNHHFfz8aZ8iWtrs8rEiAVdtumS6QNddf2tHAfpox",
  "key16": "38kQ7ifKoFWhYt2iqRpsaSfqWjvUXidwq2dgnoN31DQ75Sn651J6C3xgMbG6RsZrfS6778WuEaUcQXwsGZTkk8Bd",
  "key17": "wdP1jBYPjq8wAhtPYiS2LupbTFW8xdRbeZsAit6HSpmBRQMsyLhnBmogcgVhZs85z4fi4UxbHXPvu67pw6hJDW3",
  "key18": "2wUqExzJoxuEAAZXNVEapLXhuwfhR86h7RvynJ4odNTrBz9NSuzaukVhCnVoWX6DyBKUh4GpbYbmecK1xJDS67jj",
  "key19": "4rXSV1fPMkhmmzUSRN1N1D5w9svGK1agvWpCsZdq2Miu4Y2yHjaSLDDHbHHmSacJiHPtxgtN3QrKcr4gWm64x5xi",
  "key20": "Mmszbj4GUk154pvtvatGDpXiSAptXdZkrv3LHLt9wzpCuJ8W7ctFb6AJ27HwL7curon5TYXB1XBzZm4M9SBHFvV",
  "key21": "4KRhrJAL4zK2pSZU6uh1u3FcvUqx5u26Bv9gpvgR7xRoLG6io9VbqEnjTU2C91bLrgBjjrvD8MoNvLQKvPnruyq9",
  "key22": "Q8VnrSaEkHFGh2QQw8JsZqbwPy9xAktBqCHd74GPseL9jbkEjfRmphZsyHH42LAUPZtpdjbbqEiekKtb61kjJty",
  "key23": "5cHy7XmGSEMRvR3n7XZvDWxKewAX1FRjroxMJaidi6UgDZ7wwUeR7f1TZECr6jKrYxQajjv587EZpKZiie6TNqqW",
  "key24": "4yXyzs6ALYpGDhurkWXX66q8keJ2xcwpRnGbt66xi1USbKpPT2cXNEnrmLfiPtU4GV7oMFEYFN3pu1syhpbaY5Nc",
  "key25": "4Gdj6tPmC2wXsySEGaq7gTCZkZYkm9vUG7SPGDSn9Nga8p5nEqGjxmWPmANeWpuFDAm8LNCoNK5bCYo7njc5ZAM9",
  "key26": "4STX9sLnfvLhNEef7UkQPosTBpZJkmefNUmPaJyypM4jUGoBdJkCnr5LDcMukV313Q8VoSSQPBDmnBzX9nZUdb2C",
  "key27": "YcXa3uuqa3RtvRrqsSpSNGc1LFae6BXQActgGoA5tc8TgWNwJgjruKW7AcVcPZVEZ5jEuykXGEoq1NQaU8h4UE9",
  "key28": "5mpyDgrGCABq6KecYXtsga3NVHbT5xZqB4iz2d24pFRgYmHACfTunKHSJvfmbKA2U4eg9vX7FfgkkkwSZUr8fPud",
  "key29": "36RdSgB78wAerwUP3YFehi2vNjFQyHASMToD1B1Qv8jSSU6KkgYdd31qGDNe3jYnf7TFEGnPjhhoEd8vcHvfWBwd",
  "key30": "3P2mEkMB5UV8fFyC6bhvKWgApsSbbmhjLrfXBtJmpAWCBqjpRMFYbe29KB84oa2aP8rKKmEJQmANqwJAzXzaNLfx",
  "key31": "4nFGTcybbhYcurwhTkvZL4JLB8hNBiP43hwVEXWMJtHgtadG3YjvCFLdynzh2aLKGSDKWnJqdua71YwEXBUmy9aY",
  "key32": "3L83fvCYXVCTKwELnMgTmUxcSUv9WwwU39FjAcPN98VgJnLpoTWVYcG2T4avGnGXL3FvkkQ2F8DEQuxXoKTn2Xx5"
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
