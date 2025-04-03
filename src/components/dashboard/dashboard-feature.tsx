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
    "4XtADbfqs7DAJ7rzAqcGPRnPisvkDnLhh9P6uB4tu55B37tu1Jawppo236o4ynwPDu3etdYps7oMbG9SQG59bond"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EXDaKZJpMtkRfszJheTCLu47tMEW5cWGgHYG1pNxwsz4aqMkBUcEwzswvisDfUEcnUxxHAhE1RvW152pKxGPAbn",
  "key1": "5uWrA2rGQeGQQiizJziBJBFAGjGNLq9rs3F4W8sLy2vGvwzGe75tqAkaoxFp9x3QAa5nBrTiQFQdmNC1KG2fYAT7",
  "key2": "3ey2apRQmXPKMJwBx5J8kqShULdYHcQLuQGJ8NHuF5es4UL8BK2F9gmPYjmVx3pBxi7u9MThqxUQgZu5AAqjUram",
  "key3": "5KNMY86Gs2gajVZ5TMo8NH1vGg51ZShuMGcASSPS61L8yPRMEFjAECKcQUM89xn38E8ibujrVDetJndeS2dpQgTb",
  "key4": "4jCeD3GaeaJL9LWdVspcuqujDoHH2ywLZehQahnSG2yBaLuiygGM7r8cqVEucs5X97WtzTQZmtYSFQzu1qwNv28r",
  "key5": "3jHT1Xq1GHH2BEdnrbTTqZrBdH46thytjgyhg8HgSiRRbVL1eiikSXxXDqQdBh1g43nrjnsW3tWqz35ysR9u3ZSh",
  "key6": "46BEULZFc2xoDhhnNaRX6h7tfunTHDbJEeZPjkBwtCALew1utE8mCrCmUAYyC2p7Qo7saUSyYD8k8nWoTGdjmdPp",
  "key7": "3cpXPJdCT6JpRxUEaLBXSmr3Lw7Sh8nRSiPr56LdgxKXVusfTUedDxagXEq4afcUDe2pUybiFxyZ1AfuBfVnyQnx",
  "key8": "2UR6PD8QDAALRBWRyndwJKFGSV4uXPHgzs9eEXWohHZinWgsgMzkaGVfoB3eXzzDbsBezBLTyr2tBp2yAeQRHGfn",
  "key9": "5dqWZ491K2XBoRGvT8PqwrJVVNTzam12A5TesZ93WSbwGBAe1uRejzB2NUiNqeZLGXbF97wuDch7XpagJsLC1cEa",
  "key10": "66sPjgxMC6CFqDFP4WVkTKQtBJSFBpgdmVS1e69gvSQuVSK8TQ2EgazXMnkynueQs3DiJ29KTd15yFCgyjqZ6oiH",
  "key11": "4itKxnUJRfi766LotzvPSAncUNhy9JCCA69zdLfdZ9Ptusr3m8qwRxf4zzqx5E8tt1DaetncVHVwNztSTnWw11xv",
  "key12": "5WgcZWiuEMXHHsCmWgvCPycpL4yYUmBaf3gQUpexG7mwqh22HrxQEj2doNzKXRvx3122HDaSBpNJ1orKK3BQRfLq",
  "key13": "3b2UYRjvueAdQ7sGiz4LLXqfy8ZaWXea2V5rgd3xCrdDrrNWfYQcXKg7isn8PCcuD3kw1Hzsnpz25nU9H7m19bMj",
  "key14": "5ciKGpn12zkBEsEdikFXzNqHJHEixtJbEeAkyNJ1SzCuDWBZ8yLRNVtQHmMcFaQnLdJ75oVX3grwzznvYPsPxhXt",
  "key15": "5Mny6xfdP7ZPpPXvgGkbAK5XWrp3sie6NHaxPbth7VHo7mpb1yFM2YDDXhF3Byw9wAPggXAYLqiA5LdSWCu15N4L",
  "key16": "3HYZ5nsRXrf93HkYrHgtwPzgSTw3uDeuAMFbiHMY2qWnPguve7ePoWL4H6HusEJbCUxWwY1Snsc4rrSZ6dXefTV3",
  "key17": "5vp9YYLUVGbD7iz6J66XNjxTBHa9rARBRZsTZpUY1iHxKKCwQPW8WNVCWvQs4RqwGbNrC4Z2GPcKXejvsELv4Yzt",
  "key18": "5K4W6VAMGmCh8YArGHQPVr1NkwYpu9cqsSfDqboSUqHCn2rZze47BdAW9E6DaBSwh83eodpaePFAYBpJE5N2Tmgv",
  "key19": "3x1vfZpneKozEXddE1Dir8eUizbGec6ELmhpiC2K8DjBFsPgCJywnYgmdcUYSBUEDTd5jKW1tj5UW8z2uKQJetLS",
  "key20": "3E4xo2EZ6fHun4wY9JWXJJ8UhABL3MCysLSBKc1jgvx3VUAiNY7BgYNHBzXpqLgPRB2fUWf1CCRpLwQsEZevg59q",
  "key21": "L7SWUUPxm46QRjf6smDtzk1J9CMXU4jvqEQeu8UZFS3z811q7xcLsm1nYERkkwY4iiWpCML3xYy2xkm5nWsqYL4",
  "key22": "3uJshECG21kUKuBcnjjSZZYAmGt2CAeeEsavQjQs76BiVkB9LKfxaH3KDZgEyeCUqvrP6rKrMy1hDQKGA1t4A4B7",
  "key23": "2hNTCqSyiEbPXtnokyZ9pnGUQZQpLtu3d3SxH2UqeaNjxvcHmJGrYoeXrn1DDoXDkxb4zDs9SXpoxhPUcFDQ2Wf2",
  "key24": "3WtWnYbGEq11m1GcsegnvE6YsH8zCK4mFPPDzNSS2hyFuBRVmfxf7i6Hyiv5G5FPCq8Qt87ov3vWUV7v9fKFCScz",
  "key25": "3smbkS7YNDZWXB3tVQqaNbpFMGXTCGxp89H3yry1ZvcSvHPcMmxFi6Y9spSxfdU1gZapN6jchFxjj2uDgwZC78hC",
  "key26": "43TZtzZc7aAyHSdTnBZ4P5ZYEFi1qL18Fq11qsDUp1wd9nVpjeURWxxXrkJ1p7ivqquH17hSM9jyBenPS13taBXt",
  "key27": "xgtcfjHqURHp1SHK2b1ynwFQARHkvfnFiUGQPrQi1v5VTqwE846rWbPvzfBAk6rd5Q6yYtQJvM8UDuKrD1MxvKK",
  "key28": "3V3kNq7uJFgsUBjUrV3ccFo9CvpcYFRnjF3ufFutndUK16BX6HZxtBwNdk4hapDVNphUxmtCSSfv42BQmG2WyfvG",
  "key29": "5LFbYjDbDPJ3NxD9db31xFa2WrQkuX3edQitYNwRACMfFWTTPcK8Jsd5JBs2imEvGDmddTE54rxVKxG3FoaFhVf5",
  "key30": "21ABD3fiSMTWTqtRaroGPowM2mSZnfAvUMEG2wjkq5wN1xKhwcpHmotZ998ixYDMSg77DC3gw2Zw677pnPrp7Kpz",
  "key31": "KkgGzRUA1kZc71BBBtTLUjhN71xvvXCuDTBLtvrT55kU7Ucj2N6abbWtoCUyu4dyHoi6zAY7Z98ZEaGtxYc6NaV",
  "key32": "5Bs6e1pFHQUjE717SkDkxGFaABSYL23tNzZ5KmYReWFXwori3PcPBXRo5FaVTj6CSaJZz9mvJTHV7vSe7wd7z9xJ",
  "key33": "xwrLe8b4iynsxbAaU2vgCgxRSJsirwvKNNyQ1yf7dfvaACa4VvEkaSTzXkWSCqPqJKuYHmUXeVhDqp7YkgRuMj4",
  "key34": "RzpJ92MfgnDAHfiV8TXJKGW1E2khiqrXNiyyPWyEsXYtRQjZEBcCrVb9aeCc9vAmyZUHssCLsBEGTpBvp5JJsAG"
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
