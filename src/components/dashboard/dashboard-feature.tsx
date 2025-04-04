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
    "5xHTqnUdb6zjGA4TudHTkDuwd2UM4wzGVS5g2yBdcxxbCWazHvtyE2uScoNtpnd1E6kgRsix7BxRmodDiNge9SdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KSMDMWFTwQ4esskXi3FBJAQawaKwg1cg8mrzJuXHmEEPAURGVddDpNRe2nJzdSnEU1HT6KQEUwXNWAUXPifKtW",
  "key1": "5cX2DSmSLk95NdxYpBzNXUR17yenzQGGojoEN6K3aXDYkPXx84Chs6whSnUYx2EPJj1PRBb3vAXGfezzcuJpzBmK",
  "key2": "5ribHBfc27LBCM7HyimZK4QuY59j8FTDFPumTXEp3yvmYme2fWPBT1FkZvGmFNK6hULJnj15iWc1PLyiqgUXqu6u",
  "key3": "4v3ivg8hATR5CdajRVUU6vx3nWwMV8Tv9A1jpR6xSSqdBXNLbKcVjyBcbKFFvyc28bSJNydUYXYFcfWvfQkF8T6M",
  "key4": "25w7UMZj6zk2ridCmpVs5gJg7T7JJMaRgjahQUbzbZRiHWJuXY4R9DVP7HkTijGyRtEhG268VkocZqrVCp2fHjx7",
  "key5": "4avnRNaYyRVd1xSq57GeaAADdZisAwPBgtULag5SazhHCqmEJf7q6LcVg4N7nAgYkxMKpRvD1r725SUdZDvHFdLd",
  "key6": "2XLQHnwKhiGfaMnKqRydvSBMs85bnA2abksJhZXvZdPTUje4iFfUJXLF6S6BMaNNEkymkV1De4m4X3K8ncV1dxnA",
  "key7": "3XaTFPUtZaKaxv42nyf4fAHvx8URau3EWMzYK4dGy3NNzCUwAGK1y8BeFkst2GD8rQF4UmD3WNRfDNj7r87KxoEX",
  "key8": "4a4PhBr87QD6EG9FF9vRvsjWP3pNPfRkDq4ciNbUp72NnJ9QsXxLnVBpHAQR7NfbaCfs57jJfpfnMYuMCysXBvii",
  "key9": "2km3RZURA5FpHs4T1KuQ5cyKWeQWZN8WhJzfmyG44TaesGAd2mQTeo3MTJfMcC2J8bYJi237pYq6XN2VuRySyPci",
  "key10": "3qWhiB4YxC8E3byC4zttkgwNg1TYEmmrwrKmLZydX6ekDgCFDUb7JfxyKDmd7aTbj1VnS19cm5qjfaUHqWwgQLyS",
  "key11": "2FAX63vSzUCNWwegyJAqCxPjAUaGDXGLhCyLcJK1AmHhE4go44NSzLJhxjqYdTf1t873KxGm3hYRVD6Pv5bQBGQx",
  "key12": "3fy3G8F3jXqCpS9qQddeLdkdV5PKqbu594p6u8wggBcR7q7aQ1hj8ZWpQqHnUroo9CGDY9zi14scbm51FDMhwXe4",
  "key13": "2ugwmo9c4CJLBZzQyhQLLLagPnrr7D5xdKYh11GSBV43Eo9sRxWkBneTd8Ho2cFijNrA3gxr4dXkiik5Yrtb16W6",
  "key14": "4dmb9H7Pph61VkSJB7gBbrS3KYeYbHfgjrSNhseLRMk2wGmWZwALuERXh5Wt5zLtFHevAkzYn7UEPSPqYVijGnbX",
  "key15": "3enPZNrweUpYQHzXuNihoGGVVvA2He3JsBFJFYWRpKtepJh1Cc6BRcgFoa37X3m1K8Vk2CQF214pr6oDrBdr1jeB",
  "key16": "5x2GoyhuH2CGKmwSszW2y9fG6JmUYjuhtA4sUWKpf3RVxB7EbgNvAx6YyXe3GUnFHW7bsKwfC5vdhEFUukB3PYsJ",
  "key17": "3XoDeYqa6LCjiyDMT1wtj1kq7kQS5nTpB9sdCjLMuWV7xCPEXCEJss2RUf4389xZ8Xnt12fcUwfptQ3CyHLT2ktx",
  "key18": "2iZ6kHzZnwaGj87HASzXbNhAqRC8oUbk4B8tK6xaBw7LJqLt9WyuSju7FfvHghXWMsAAFfMXEtARDABrMgcRXVuR",
  "key19": "51aitWJsuCc7esfugSgseJmkcTt46qb11R9z3XfToG9pv4h2t9v4zMyC9nr9RWBJQaAxaYRug48eLExLV312Yu7c",
  "key20": "vkSeEzKC9LaYuoXubEEPoQMEqLXbsXwz2kfWb8VbCf2HdPX2peracnjDgVD1NPkr635HfJnuEaTEC44HDXBbVbt",
  "key21": "4oK7jixEk1fRvDXCS5b5Jhrw9xz6GsBKFiGLkaMcLVobLrved8kCxSWZ6s3A9TtXRgXuSmE1ZQTkppDXMmCQngMp",
  "key22": "26qaEfpoGHJ4VBbTy2Rm6aTyJyY51dsWyJASmfqvtcigimexnsvJU6TmkLQEkWDurakn9iWa3x2dPGyqcQ1Z1vWW",
  "key23": "4vakh8wsCFHjPx6fQ7JK5Zxp7ZMDoW6FeJjLWx4XjocwtjN7BYpjfewqkAvw1xuznNor3vqGMe1TsryrLDoND2j8",
  "key24": "4E2q9m3D3PSM78wMMhN9GYpPMjUhEmavTjoyTstadrBA4DZdUuCfLErpDyEobhd7a4QmpmJX6Sns1117gJwZEDY5",
  "key25": "5M9AV7U8cjG86yph5eeqZ95Rd7KCLdvudzLu6KJqDycJFYoa5Qbn7S6UbQiPvTJzxT7w7LkyH4Dqda8VWK98H1w5",
  "key26": "5jwGSXYREPDKS9Dfk6b5zvyFx7bj3zFXNmDTh6Rd24wsgw6cdjgkr43dfLs1LDqNm9FeQxdvboyUrbT8D6Su7vj4",
  "key27": "c1ZZ2t3FPupoZX1jNthuhFVJrtrQ7TsswFw75ZrLnGy36BAvVvFAbMT5r8YGR5ka5vwAvnzPoVoyvAAaut4hsb6",
  "key28": "5zrM4c38kHXBXJm4xyZpcPG25ijJyKxW8vZQHx7H71xjfj7siHxY2LcMAniQux4HUWxh7jB6oX91k4Dzm1xGxr2Q",
  "key29": "2Uu9cufCipBM2bG94mRWFqDUDmB264BQtqSwuiHD3sESW9SSEpHT5nAbr4Gbphj3m9UFsCvowT532otkGbiYmZvc",
  "key30": "45kw5h3Gu2cxWVU7SEwzB5Fb3oqSQTgZtPVrcoE1qsRVbo3uFze6HPahxN7K1GbRpiUqUvPdbpMtJXRYWFzGfYPe",
  "key31": "2eCSwYmuEFyonAq27qCfoAkfE1HBk1n3pktw5QQz3h5Aww7n1aPt5EXL9v2YeHoFxn7g7sbX5BNqEv7qtZ4DFwXS",
  "key32": "SUZhYuVy4SoSo2MQqcdpNdDj7Jd8BvoXjuEfCeQTrsjQVt3JnubqFwt2JGKmruRCkmFHWjADCje9dg2kf1RHXAS",
  "key33": "4d7wwPwCpvuJvtYHGcyrMyVwyu7VW5WC41UTmqWA4wNZ8pNMNAaYSYL2b1DeiytHxDsS5Xtth4QAh1ZWASZJKW3P",
  "key34": "2sdgHVzMAKVfKBijmraWGR3zuT5mfwMvfPaH34SfTPjYpnaSNTkzUc4oP5XbgJeCiZUAN6VSfrv6qfTp3XRwSEi6",
  "key35": "tArPy4PWVToyeYupTGuQdF8dCTS5eadNhFbBwwa32iJokgtQ6TFbKZNHUqLZM21uN3PNxdLav7wNdFD3M2me6Zb",
  "key36": "4pu3QggUsVTpBAGGkpwUcJstB6QJkXajuguLxfjaCvNJSoyHWhkg219Ci3hVJZXCe8aVh3jvX7PWqfg9AHh9ehJf",
  "key37": "2C7T3TVCLkFjFkF5qHeAtws5zxDtXExdBUH7LhztH9JMWvZ14Bj7hZXnbsmBEaVVAyRzjxSQzqwhCcv8P4oKFUyc",
  "key38": "3RZFfGw1LxdQzUC4cXk1H77PVdiS4p6S4aTxA94d43UVtTrXpLkgmFXLhuia4YTYsBvkQ7LuvDnEybkFLRTwQ6MN",
  "key39": "4CyHoFm4c2xd3UCeTqoptWAQmisj5JG2GxegrJNzL5ujuCVjKKRSeEjodywtH3QtiUNJnjuRHP5P13Wd4hSLqgFC",
  "key40": "cvpc1CVpRBFocGnyvoNcX6Ubsqz98wXWwPgJctq51TgKjqSc5Sy9XGHEFoBUBv7RQRBTHuLxQtZjeMTiiEfbNCs",
  "key41": "2KkScp7dmkG2AorygS5EDFoQdgjg5ujScfn3k4cntUdqfJKK69qkY2qYZvDrr8WuBEo4CJd2LnyzfWMowt21bufY"
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
