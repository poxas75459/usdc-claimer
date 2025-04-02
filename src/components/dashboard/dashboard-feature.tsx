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
    "3K1uFJAUyZuRLn97xeVenDmKobmGBvBr53buMZWE8xrjysrVGXvqQV6dta3Vb4LVycEnqtHJPPeyfsHtKqiPK2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMctcgAaAjdA1z2H63sxw1WexUiRF62CqotR6owCoEe6p66PcaYBFuFjGqQvmrCVeZAL8evKgwTUxU6fwVHkxRG",
  "key1": "2fJv9Z5t4zxVB7h8s9dy1RtFMGNShthM7zt89gMecsRCTwNfMZZd4fSwDfF2z1gusF2t3nYNZpf23SNZfnfauYvp",
  "key2": "4tK4VonGxagGVixjD2QkixHcZHC7k9BDgNRf1HmmS8dZjkBMTRSULMUDcxamaJMCdx58TgkcRpwy2oVurw42Vc5L",
  "key3": "tW42St71Cgbq2sqPgvUMZycWEa18iuXquwfWRtZg3XGjBk6NLMRk1rUnhAT7jwxtG4HgTgzuexa8sRz1AFfz545",
  "key4": "2TGPQuNRXQmJeQnpvoxzhBAHCw2pJfDWEhguHC9QsLYQ8XW3L6GCuPkyUEjSvEBNyVS8A1ard9YWgf31kvcafZYJ",
  "key5": "51yPH1zGneGeoC87pBit85NwunBgUFT5xo81yo9TwWuNTC6NpyfVcpBq7Euny9DPmdxiD5QpcAPX6EmfmZAk2A4J",
  "key6": "4jvtWFYkPHe3c8SoTKiPWndZTYPwcddQwsiXtFjDi4DKcuuUdNE7ZSDN5A6WzatG2w3vXAVmbsPqFDEpZyjVUzDb",
  "key7": "55y6mbWbw1KbwUvGH7gRRREaedFsWMZJi2cneMmL9yZtocNH6LGKBxmbV5vX3Fp1yL4d5xwvB4YPXSXW1pSTiXsb",
  "key8": "3HLm1nR43FW5D47kCU4bN689nXQZ7Lc6foLoBBNkXBMTzqg2YMcjqV2EMBCUvSEVWFMdY877QVWje1VeVeEBE2jv",
  "key9": "5UMd62QAFaWjcETZyBkNcqFc5rvKezTXQGbMuM3wwkpFWA8BNkwhRkogJS1tvbb2pUfBcviRhdvKpFWWm3mqhnVF",
  "key10": "2ccuJs5BEZBLaocnxWYzCP5EF6bzuMwCLas16mdfwnbBrHjX7UXg4BLqnYrnprxg8pmutPEmNdtRZgXoZpp7i1An",
  "key11": "5wtdh4Zdc64gqWbnTNPpZFadeUDQfK6heSFSMfdkkMswfRX42P764QxJCjn9cxG2BbkVFjzgxr88zfU8uCHMJRf3",
  "key12": "2y4QsyA4qp8WcabX85kzk2witzU7xpji3XsTxWdxVVpgT31Bpc57icfPpsJCE57CajV58NkjCTsagxWE8tNNGRrW",
  "key13": "5XYA1NTH2LxzMYqo8oPm7eUFUPL1tvFtRAYKEBRRkTtNr2L7SddfZhQn9vQrtW8jbzpCt7SdJGbA5dp4jbKghR3W",
  "key14": "33ybC7spFDW3B16RCYv676PxDJwV1vumPEt3uc2mZ2zkduQBjoS2CQc9Xgz7zWYv5jkEtpwvUyBGBkESmQNSkp1F",
  "key15": "4QVejpsUYfcKFhcLAzymU858GERcS3fHcLep9JQRgkkQ9YCwq5xpRFkq236yrXwyBDhWjePd4V4MVihpS6TjoSt1",
  "key16": "39zwAB3mr27QZNkCepsp7J3CjmPKe7EQK9tZAtnB1iYouSoZtouiRWvwsYxDxDKCseWoyZ4izybB4HpY6SunFMq",
  "key17": "2CpTeisYLKuoVhKSXGJh6jrmGuZwGt3yNvPZGmQ5zxNzYmzFTn1iautWqZUnpZBN8o1PoPDgLD3hKsKwrvu1UDCZ",
  "key18": "4Yg2MdEiPKUwyLwVkF3Y4GE29dp7GrdACDhM1TVtwkDdEZzRuhpf2mwfhQSLHVnRyt7oerhE7wfYwVzn15pQr48x",
  "key19": "Yi2Lo7JZKyroGfLXwaBiqM69DvEC5EVRyf5F1C5oguNBoMQpFQJdgZ5nZuTttP4jraUJPS69Bv2EkbVpeNXpH33",
  "key20": "65A7JgU21cT3iBtxsrVnEeEUivRUG11UBwZ4ohFppbyAhS7cXaNvWAc6f4JpaLyhj949o3q3YiCRtW6mxyu9iRyx",
  "key21": "3kE7EE5TEELoT4mjZoEDBG3UJ5ERizBC3vLyCgwv73shRZKWJPMVA8JikHBwwtvJAuVUarqerwBzrChkZiJTTSFQ",
  "key22": "3Cw3tnBHE2QSRN85FtWC1XcMZNqdbiJJddiiQyd7Fs5VP4Q1y3b4DS7RTeyd2EsVFm5Qru6811QmSWcCenvxvf9Y",
  "key23": "3725RMBeympmPADRAYZapY6YGD7fwJASm5HgtpAajeG5Xq7TMUZ2A5dht2AFUB4UgAGCc67P3NKfxSdcqCzTtp5M",
  "key24": "5Zu4kdSz6SmpHkshZN1zQSLeNecSVLRDk2NgxaUD59vDpn2aZMUAKAE2stCjAHJLzRCUhXauU2ycttCTCFUBrZPX",
  "key25": "4x1YMzVvNX3pyxHB7LTPSdcuBtijFLxQyPmDFkutvAX4rjU74ibbuG2D7pyJpZPPxQtNpQa1sdeedAsU9P6AKfGW",
  "key26": "6R5iQ32tgVyN5wkUhdUyp6t81w8LMBF4D5wtL5FCWU9gJRVnuS3gdLqq55X9gxFtg92nQK3iiZp2BDFdeh8BQcm",
  "key27": "63TR5UGN1tGUz3Eju73bLwaPFsur6b9Hmrb6m7H5ZvpzRZTyQLChTEymVub6fp3Z2iQebWiNW4Z7DZjxAxRqrqeZ",
  "key28": "4KAD15TQvrjd8XStAZa311rzo41XNs5ibPDCoc481B2UiGJAcP2SbLpuvBS9e33GjWXq68PqsnLLwVZXvWXpxJ4n"
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
