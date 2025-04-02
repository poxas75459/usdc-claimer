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
    "4o2DmviaAbhfNfgFs54nXx4t1K8G9hXu1kTGp6vEZ52auEyCDkk44Xgmwi8zPAuFEEnjTktQcHkgfaTKkNqZPX9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nAEHSPozM23yF9HxRr7HEDZbwGwNcaDjCyjtrytev8aQbnJhkGmiB2m7bgmmn5LJz2x4dwC9XsdvQoyCXJocuKc",
  "key1": "5EwbPViBxspvD35iA8Ns2QCZF8qLFRGFuCmCAUuoxjDR7VjZba1kBpKuDqLMDaKWRGaaY64PzvVsYbVZtd9srq9T",
  "key2": "2Udg2ybMHGAB6MnGpYHMq1bL6znQgZJeAkTr5kHnL297QqCUt5TTVnj6MtR3ifGvmHeFM8nJNkptG6H1rgd9wrUx",
  "key3": "4WpeWuUHLJhS5LSnsrQVpYtbThQnHWLPFc3RZBMrFB5R4MBpz1h4DsypkcKrPnbUAGfxS5LP8qomd9bFokQdhcB1",
  "key4": "64hU3ws7zQRDNiZZ9QCmTR2SWTVcTZY9YvmFukncMLWBi3jjGhgDseXFKJndjvV1Z2kXmbp4sKhtU8UZ7Z9jTZSa",
  "key5": "aQk9EUWRtxuiB2TGbd3FxGhHv73QLEksJdbCHyiWXQsETY3VyvCeMVXHToEHNfnft3nNWZPdKfQmTuzKRxW15wP",
  "key6": "4p7VefT1pFV8XcbkcvaRgKKhePcUhSGVLAJAJSjzJeAhkD2yLBMY6YxyotHLpfpQKs16rLEGxrfLTvrn9YhR2M9U",
  "key7": "2A1uy5i1SqtbgPU4Xsz2Lzscfmct7v8CMLYK5BU3wmmZ5PzLLncqsf1FQNmHCbUF6kU5rtM6di2jnnMaPyRBSwfh",
  "key8": "54Z7f1Wo56gmZGoginPS2hDHfArcVhBQXbNPwWC9p7WrLFY53CY7EdhpDVWJn8wNtKJ7pJGN1SjDpjfCmsnJiZ4h",
  "key9": "3dTCVzR2EXDoNY6tCei3oaw12rqiVHFE9oEc9J1Ypaj6wdrkteZR2UuVnG8nXKL146D3trCyJjMpmjpZtxwz4R2J",
  "key10": "5FMgEUTTsCfvohZiEHbKsmRAdRMUTZoNMmrhnTDkenCGhSPY2pmApRB3rfGQEVNEBgom4Lf978Ux2Ygd6mRkDEQS",
  "key11": "5XJMnY373X4AmRxV7WTZbUGBx2GYUFApD2g4pRJctGDWwJ3o8QTWRurTZveoTViL3rUEvPVjLEtrpjFdzHtLR4mA",
  "key12": "4oKVwwCnBDZx6ZzbuW5BMoanepMQAT9CZs4icBNX51zeAZ4qjiY1GNz46tT8TaPQbcuDe3qnZDk6UQdYyXGoBBeb",
  "key13": "5xdNG7jjhpZgXhxgckaNuL8J9wpGTH1TytRu4xgVhLJ8NFWv6QpTRnfjsGiAV2ndUYPf9WBqxKwmq6kYkp7bsW5h",
  "key14": "4XV1ciMdqtCZJ5KGD7srAKWaSFrTE9xtvaiuxEknAXXoVoQDButZ9kkSbimWF5GBRYAeTFdu737t4UJrr1p47KYs",
  "key15": "5LdkXAs1QPtyKBesqMvgaoBynYH8gqWy3zQz1Y4vSPU9ZVDqHiDmRGpADpetAF2dqK46t6pER6miBwU6XKRm75w",
  "key16": "5PmYye11QT8waePA9o9TYBL2UVrVPenzsSqsVu6ibLPUAHymHYit7CjB1G2FK3frahdTfyxPBfA9rPo8MR3iqweh",
  "key17": "5GmVDxzbTYukByqGuUPh4a25QihApyYFj1HaZxRonnfjBrbPxSYzoBRt4982B1gRuRUySFpF71PrvHJobh5pTP5",
  "key18": "4kqmpBiKTMndSSvwYdogB7N6QXopMRPiC9EqAgAwsrwLau6rA95k1bUaqSvq6Z6zC9FGpCQ2G79UVHHA65hPBwuc",
  "key19": "4qZXWdTNP6rVhGAsSDSW7eyPXjpQYLtYJzjJrFywYiBcfcuZZkHxMBMHuDGWims2k3Y3zesSiYhiVpnhY6Utju5n",
  "key20": "Kqpf6ATTNKb93rJeFGhuy8g3m2HszBHj6fL7xuvhWnuC2JUEEatLHKxceSKft9sgFCpsPq7cuQDJCMHpBiZBbc2",
  "key21": "4jhHJAAyy7vf7iXmD47fdkJqs5bNQWMRPfksUbbRH1oJN6XoiVyjh9HaFgymwyZXvnMh6zaUKPc2kGWhqvEbJzoc",
  "key22": "WbGe93T6sA7YgsjxezATz8aWtodZEiWT4erfDhrauxfmS27bK6hYKMiMdn3Vn1t5CjcECqgUrevYy77uwz235x3",
  "key23": "66QZYyG41tkP33DMcgWNemULbsFWxfDXMgPFxpFPwhq35TBD5AWnxWu4DvHkqyGibgtuBxujwAurHjaFx1gFd7Re",
  "key24": "3tKbBHXzfBWr4HrJSzRTfga2iiATFnaSWaNPR2BQvqDxkE5dZMGXUCm7mhWhMAdxbgMoRZdgi9Axs927rGyhU6ZH",
  "key25": "3cWf55H7tSVSCJXdnDct2yKRhnmCLUDnWxbGnzxPpvS7T3iu6P3f9EG1r5sSQWmb7iRpeg6QTxZkipTRBxbuqjHL",
  "key26": "TJ1dvdWRYJiecvSLrt7Tbbz5h95tdTrh8E67wiqyaU1QuVYV1gHcR55GrUES4NoqY9UJdARhCHTG2t8whjgC1T6",
  "key27": "4ZsLM5ByGwri3zxAzuHWQJTK72evEdrt1hb4v9nnRMCaW2i9EiyACFJFC2gTt8yv5tfuSambGtnWFa2yzZxJr5Qa",
  "key28": "4Up9FhgtfhoDqu3ZGHF45Gy2B23xQ9RwtdUVDGQp4irsfjpnVxTd5e8UHx2dn89XC28xBkLLhzgdNAcTPBaw7bFS",
  "key29": "2cghdG6cFfz8Wyu43KaPqUukPGDr1LZDnPfTzPWbvwAWnWydDtBsucA8xzsPMPmP8aPxkgFPmKxaLnc6Ftnyjn4m"
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
