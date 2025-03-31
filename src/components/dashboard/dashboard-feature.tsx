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
    "4S9ypPhBcJDnMqBwdWPACBvr3VgzWbhRJb7ouboPFw7G7prc5pEKFn1vdFadGReJUBXCkysvq2uHe5FX5t8NGLvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XiH17M1HGcg4qaEBmh793qEuRVEJdRibuQ6hSCNDZscozrU6fZQ6kkpRcNryFNsRzusmNT1TwwhBkqKr4n8YTm8",
  "key1": "2aJ3ysZt1tv38qA9piaxRGUpTGXdNuQRdn6qA3QLVL6bnafsRztCZPkMEMDXX2BdGz5MbTYnv1ACFrVwRKySGmA7",
  "key2": "hJbgHeurzgAr3ChjTmVfw3A5yuGPyXgsvBk4eB7jygh3f7vEqmr4o9knr6kC9XxtkA7QtzKvEJuEdxBbribhXGV",
  "key3": "2VhgKhTAJ2VKFNo1zT9vxCpohubnQZWboJpXnAubz8a2pmK8kVXpeeVNSLACefuWKQsGDdn2DgkNwFYi56ZpDExh",
  "key4": "5TP7s6gVu2SDAymE92UL3DNzEKuCCEYo1NbnA6Abz35abwSw4k5YFzVNRuf9D5zaYo7WmvC6RCMujjpwdANMjoYp",
  "key5": "2y9FojNuH3qUP8NSkVyQUYKSGijdfVjsojTh14WvVjyoYTZ6iCMU3SsPUh67ZAgbQGKy9VWpjPr2eCMFSBp82LhQ",
  "key6": "2Dorq5ZjHxRTC13BV79WQKdQSAT7LDtfPai4L2yHbAxQe6y6EnjkMmh5CCUQZGb6cMnnMHpEuNbsHeHF7rofUxmg",
  "key7": "4J3mo5NhVwB6Shqe7yNUV6MMk3WhEVEhe83YZ8PktWqA7SG9LdtY4sgR92zMCyyhicgQM7MYoA6bPi6HXZ1Y3TBm",
  "key8": "2bEZPSCDzLVS8kGLg4ocTwBXEgcn1sPN5F56S3iuzcu9ioSfbfeSJkqhgfCFcHdNudWemnNTp2dtwGFW3mLs56a8",
  "key9": "3UdsJ4JThsNtqvXg76YveYeD39s7p8mn8siShvpECqFD24Nn8UvwixVmKmgrxJd6HvJYtau4NAWjkr5nDNo185fQ",
  "key10": "2mWxHEBr5bqaVM4szCSrQmNd9HaaYAoNKFenndESqTK2X2LDbscEmSER2BGw73WVKRqJyGroH3gwPnysSwkCbjpn",
  "key11": "4M9VcXt4STnQVuvzzwSoTVnRn2ETiZ36jxoCxJ1GxUHkqvZGVqo9jnpRpbCTLHxoDz32aMFW3FYTu4aikUwUeabP",
  "key12": "4ZLq4uTSmHdsSV3q3M5EcaHBnicoRNY822qHfqQWsVp8mWAK395YqjPbwa1MLuzJxzm5AiTQUpWi4rGFwJXiHVSd",
  "key13": "3bzhtBW16BYDtjnKZnm8KMCdgjTxsH8bqLeJFpWwbDv7VNh2zzNosrPELL7FkoENgjSvYg4EusS6dj6PiTQbfcN1",
  "key14": "4k6egVAE9k8mWjhxdySu8HWHhXHFqhFFXMieQ8USs6FcBNxs5bZ1yijFp3rzrUhRQuc9qjUvLcUBrWowTaY8sDHE",
  "key15": "4WQSbSjnLdBd6xmc7Ku3yPDuaFatZjMWRviUqn7o79ERo1HeMWXthr8mA6cDrNF2bXikDY8AnTKNJwGczMu59Mc8",
  "key16": "2KhVMA67w7E1TaPDeS4FDdWANtmew8FzZ71Mwh8KmPiRtemgCnBEMnTqQWktjde47Ddssz5Zqae7XHXfxcAuuwAv",
  "key17": "4zk6GpHeDs4Q4kvyoQwoc2MhjUHcwC4jPrGUZAyzWqWrXgNvUcvtyB7BCYFPCeh2QX2QFWXaN5KtEncysDZfQiSU",
  "key18": "284YaEiHNoUaQNrJPAUasUX8vx91qmydgX5teGcRgHYzQzuVFAB3tF95vwRCJxq8bW7Mq7xQxFytUbuJQ9NQmPcs",
  "key19": "4zS2fLpfPhLPz1Ns6xNCAfFBdMWBGc7JyNLrScEA4peVeqvRBssWUnUp9W8ESEqhZPCLU2bfw4AttVJpK2pgSZG",
  "key20": "4f8WVd8rSxkj7qSt8RYNpzSxmjVueyjhQRAmbGwgn5mJVXHcphsaNNvmixLVcbfRnuwnmZFeqP35diUD5Tn8xWfN",
  "key21": "4dPCXZNAvkyGDGDUZpn9FUweD6TFzUL2vqW14QQkHeHoNeAHf4dUyiv2dksa25LmBcpXpJUNve9r2HudoENG14A4",
  "key22": "43eXm4tYQWAdJzB1HJY8q6Box8YJXhrPHtHsqno53QJX4QrdAbgxggJMsqXSkqkGY9NYZbjS3MNTzixu2SwBfa4f",
  "key23": "37fzN1LZ1EcHdJc7LaGBuMy6fAjKzDPvNEYVV4oPJeYPp5vCMmsNSAasUPugBxaEjEgLDtRgvZZEKMsppqyCTAqq",
  "key24": "5qzMxWGyHrpXfDFrcXzdg4tXAK9QpLSzKokbB6uATGU8RBeMq2yrXK8jRWAjPGAPr3hTER6jrxnyP1UWJHaRaAdq",
  "key25": "LSCQBZfjja1BBVx2S8B8Y7v8LNowdqZLAXst6ATMqQcWDsG3jLnrZPZrDJj9cgeY4Rf8bGoc86rTNcPfLoaHWLa",
  "key26": "3ANoANRSXeif7J1p1ozEqQ2qVpKKQPuHbadoXS3ZqSTAyCv8TdxpYbjpL5HjBQMsuGsUGU88r7PXtcPFp2q2tmF2",
  "key27": "dUjFhL3toKSsQz8bLS7xsF1GduUJeZ5CbfReGCDZLS2beX4vHhixEH5piPhV8me3PCi8iUKUPaXWRB1W76AYdVT",
  "key28": "2jqzGhUFYS3GKD8haHQPLxaM8AQAQS7Y4DfAMGP4kUeSw7QtVH4jutxnUiqFHL3j7HUvAf1PC491nJfUs9Snhz1e",
  "key29": "31hGfUvzW8y48urTvhhpwZfKrXrWHcb7ngTfrMLdwBMTCw3t6R6zanUbqJjTHEvHpYf8AukH5scy4RMnc6q4kygF",
  "key30": "47BB6wfi2fqbbSZ5FXgmiRj6bv7yh2gp35yDLfihZFv2iV5QjavLUbvmzJREnV77eHGAVww1n1eB11284xfmgEs3"
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
