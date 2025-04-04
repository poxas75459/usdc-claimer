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
    "4M35oED1FUu2y2LLLUCLzg9fGMFPcSeRf173xCAkBDeUfRx3XVq9qv33zdzqgQ2D7GhxTyRVZyLXpccbpcSXQdRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJyv7PZy8bRNFTJ4QkEGWbptGz3aKid1sDg54gxrig6h8FxJ4LQqg6PknpVvqtAen7Li78E67M8U2bQitK4SVdm",
  "key1": "2hvFFRGPptmLFsYeUTKuADkeem5re2ixyEuCavPvpY4YkBKZvg49MQ5UXXKTjeeV22Uyt84cvMQTUkFk9pj8QHin",
  "key2": "3Jzd1ZZbKQoVftZm9RThg1U8YoR49xErctrjTcSDWEChCuqJrbd8pXPCyXqatVp7A6MkFevUwjVmnpdMdRf72vyk",
  "key3": "28o6hfLDApgdqwc2C83xYweasFzpn9bzqnmg3EtmUnr5Rbt1zA3YXjJ88s63jaUSCErWSXTGMXUinBjQH2hCkLJc",
  "key4": "2aPbDEJzUn8qNaq7fKtdnpuCMcVbZRZ7WEmN6FJ8RbZJEePfoHBffuNrPgKUvP73ZBMysTEC1wpfEVjfN6zk3aEW",
  "key5": "52wuKRjyqdC3Z3Po6DDpmMk5p7qNRrhFSZKyhHEWmpGX49vyoa9tQVdraH6uKVgfJtdeoFGvioWHYiyntocQUimG",
  "key6": "5ERfUX6LB7EVr6dzsLzo5QkQCjmLWXd8hgDW5ZhBQVpMeFNQqe62cCLAiPSpfciTYwRgNzJJvFDNosTEWr9SWrnk",
  "key7": "29njgzbN7KCVk7StmebQ1yPTKhoBnTvX3v7fri7uDnTcuwZAqBN5p2cx4jVBrrmxh3PQdKoTqpn46xn7GXZap4VS",
  "key8": "KCbNZTGZStMhgwFvzGSHUCFNWjgQLBjNXaNrGVweWKxFZbi6PMwmEXyGoC8RSLo32MRnrH7CJo6rMQqfTXCLfFo",
  "key9": "vxnviyNBr9Z316NuUQb96kiY74emgYZz4pdeeQSyq4uLfa9PaJ72MJjVfC8MNcHWZjoL1CNVNpvau2VBK3tf3iS",
  "key10": "Z5o18mUmQXsmxNBXZEcurnNJ4Qd5BxV4FTWFPY1dkYbmDb9sdH8t3dvEdmyM6qCaMQuXD2nZN2XDZpAPydUKZWM",
  "key11": "3zcEfc3BTKsHnuJMAGDWm2V13W2YFePX1SACQu28Uwk6tGLiAfQ7XJnoqeqfLSnn4HdBVAQsFTBtFbiFvoSkMENU",
  "key12": "5Vszd8US5HBBrUCNL7PSgx9bRApjRLBR4rSLN8Cx1U5Zq4HbGTbvPSvq4Q9w3f63sQr7jVcSZ7gSuFNjq8D45Js8",
  "key13": "5SKR1UczNgZcZ6dZcpAzvtCAuqsJewPfLSj3n93cQYoAJoG2JUzF3vUpvoGBaKvhvvczhpBUX5hCJS9GxWoqzPz7",
  "key14": "5cLVWzpckZrBNpXKctBySu5EhyHkiL6V1gH8jVkUvNm7BmuhjViTEyhnHoouiQGYDVAm69jv64ybn12YtHNDhSEe",
  "key15": "4Ex8Gpnd1N8MsSzSEqZPpY8GVNuuvzTuz5rMUyexGXmMubQgNg2auHHDCaURwbhTPpRSLJoQ3uP3aRuVy637Mpjs",
  "key16": "31LnZiTdraysvngAhnUgGMEwFUHbGeKUBXnVaGkWTnM75K73m3MJ9LpAyRhiATQQdQamUWpTPcLtjiy2iRQ23T7q",
  "key17": "2vszmE6LW33Mevs51ibnABEKXkHj55L8bhuoqUZkrGXMDtN5m9MjSX8pV5k14vnGMAoqMVJnYFgoLQ65QVUErB4m",
  "key18": "2vRnquoSCdB8Bt7duYAie1UxDXpVG33kC2Ka6pGyT8nnwioATgy6Jri3iZ6xjZ9eXZPXZ9bGSP5mq2TXBjMScJPV",
  "key19": "3CytQfwES8EbsTUG7kxZELgAf7J89KbkA4pdHJP6bp57dErfUC5Dm8ZwxLU2Von9z6ZdPo81zxy7WuivNC5KPBLS",
  "key20": "5vCLE62na3R7yGzV6ekxjiPKpUgzidA4kdo6HqW1XEt6s9Nq8v5DZTjMTahP5Q4tbYCccNrZDWUbjVh8tMogc9zw",
  "key21": "Xxd1H6W42FNHkckrrcG4fJdBFwp3MpEgNj2viSqB9ws4TmNK1krK9HoE1BFKBzn8JV9KxAYbccQVyRYyUG3AdVN",
  "key22": "4kMigaJXiH9zy53XAFAvKAN7JyMR6NJF5BoZaR2evbPv8aq59HooHhzbuKAJ2K9ac4pdFeB7o43m6ncFWZVmUXhB",
  "key23": "3w4vtnMfCtmcmN32a7ETAogGY91UnGoXXVTvvCFg7x9osNhQAdkztCiDPSDhAHjPFXzdjK8FA43Mucfw3nVUwVVv",
  "key24": "3yrAVBmFcGa2DvHgPqsh98sYGYcr7sRZxi1iFcKuv91UC6ahf35iCyGbNkYupcpTN8yhs8njgT6rmjT8ZcdBSTh9",
  "key25": "3UDqsrSTTmaNNGTdJQYLRX2dr3bdMhXKQvP1eBiDET5THPoXveP7VeRXyKs3Nu44Ma1mpEwivJtWFcwnruJQfBLw",
  "key26": "56ZUh5isGSufCR982wxGwU3PMtbtuFujHYdbuPysB8P436vL2K6LDKGcM6vHB5r7Sk1DbXUF4abMG8gsrMryZ4wh",
  "key27": "36xvVHvvcV93LfbBWBinTNaNjb8DEvqu9eq8iYjyY7BohG1L4yP319giTg4VJ8ut4TH9nVxFxDPkhQU9sSRf6Jxf",
  "key28": "3N8HSohi3rvtkjdAPxMQJrTmh51m2p9ggtYe9xUKSWupiFBBFkiDBCtdBZejpvomWG71j8zJ8Anxn8J93KiNTLKL",
  "key29": "2sYrNifLXjVvw5kzChcnWHTHron8DcN4LXBfqRZcwoiP34P6c2rcmRbaCjToxbt8ukNEJPkYWD8JQUbXb89vJYwB",
  "key30": "e7QtMzVZxpNtEJ2RNHrEzDR5haHCQooNedc485NhkRyFfKRp7c6k67HsVRJBzTtwtvMSAnuGuiF5nLowuLUYcg1"
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
