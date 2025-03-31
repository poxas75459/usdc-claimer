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
    "5pgLXPUxJbTaPGzM2zoRaAmQD3HeKu694wtmsahFC67KhmXj3roPdkFrFbjZZqRrMfd99XBk89CqPPpC2LaLXThr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uN3jVUGC5Po6MLu4wErv5fxKDnvZ956NkyUGR7TJ2j8sgYHcyiNx14iiaVFz2uDhsevZggAQxGFPeabN55BWgDP",
  "key1": "pw9TQanBYJkbmxXV8ppAW8hcj2gq9ZXKMWJ16S3HBf77VBB6Zz2N7xDWqAB4hXAzJXKjai5Z1Mra3UZ2dNJHPb9",
  "key2": "4J7PY3BDFEVh1gz4U9ZavPbzXN4AXgd8wJj33k4s5hDZvuoEz3zjK5vwn7Y8PAn6SJhGa15p2vYMsmtwfJN2rQw7",
  "key3": "43rmXzDMbreFWyP2qx29RTdhG78KejFrSFw7X1EnozfXRY9K4871pL2bjQC7sWJUkj9JyjpssB8U8K819ib6oVaS",
  "key4": "4q8cERrcnhbXdNGcCt7eMvprwwgsjLf4ztd8PQdFsUon9cYKUbGt3txTci6hDYcnGLzCciPynGggYxfm2fpVrYdd",
  "key5": "2bncsz4eiqgpEUiMAYmqfhCqJeN2Q9DW61kQijYeg1EjbXjqmNWk5WHNZZEeZstNddiaQRCPS3TxEgNdQ5KBjFmQ",
  "key6": "4ukzJ4uAHYpYuHyTxtznsFrLfnwzsgtW6bWFAe5bbrL8J31BiJXqmAvWt8XqzbTgbvJpLPR1jX1gi5RQiBEfogAf",
  "key7": "2PuuKbvTXs5JjBh59JJvXQStLi78ZPNuPvEMHkGhELEqsDYXft3mQrTwqSqrrN6GduSkF11dFefH32tQEeHwyHBo",
  "key8": "4aJEsJxGmABimG3hxgkun1SuU9hDSSvxyYcNrGKE8C2yxsXe6Kbs8WJTV3nCFWe2Syqsnqguv4wDTNfWrvUYaSPk",
  "key9": "3tVqVG5rqs7u72y4BUsbR2g72CzuAGuJPTCa7uJgZb5oPYb6hgnd53kMtEyDnKQkCwoS1x6SXedK5fGqc6v5EUPR",
  "key10": "wCU9FhcZFbQZu2mgzzQ4q9aEpqkN23F4PBRQjBqP7ZR74JWt5JYV8YT3vK6rTQbRSZsWLCzjKQu1w8PvQUgtngK",
  "key11": "21qfwHAuAiW4NskNo2bYfUr38kBRhr4cn9MP2UKsDQDMNzjgg4sB7QE4UzmGxoEND8HkooEyxX1JJjsCRdyuvxkd",
  "key12": "57DPaZ7vzVdauPfQ6L8oWTbop5m7Jk34m54ocA2AcVDmE4Zk3nC3LhxSU2Ec6qDGRCJyTV1F4BHs64E1tTYWpM5q",
  "key13": "42yye64JTY3DfWMdJgAFNyPajB4aNmqzr9eNsrj5mTzGSAVEmirs2GzegLR2C2BJYMQLrkfff4iwA9HF4kciGHkm",
  "key14": "2DjmCXsVt5Yc4EVhXVBmNhhchUGfA1ivLAF6i78YCvEEhiq4qSLb95pHe5vvWgmD3ZmmddsQSMk8VvhQq2WAZBTp",
  "key15": "5KqVbnnURMZyuhkXjXigW1U6Mt22YXAB8vQQmgHoUmT3CM2S3EF2mxTAcak7z7HmJZP3Wp85B7kVPXRmRY73jXZX",
  "key16": "65r5Q5X8Q2gJ5sLAw1ieQeGwz5UHgmAhtzsJkLPqd3E6Mb6dBv2CV8MZxszrRCtTpTShKuEuGRqjV9A2zXiK2p3W",
  "key17": "4WpJqpA74Zw5Sf8JT3pfQo2dtaWAyWgGY5VXJkqZeGp18fh4UBishKcPKHnCd1hiAo2fs8AFqQVMq3jo5DFRaK4Q",
  "key18": "26YPEB82uBA7T1qR43AmdeFFiuZsZd8owG5UgAerGwo9n35CYKGmLz53RYjEeJ4C22QDdNh6M1WibLdDJ59BpF4h",
  "key19": "3eiPgNZRyqFyc1NAaBbKLbFdQWG2mjpkFHRknaFEULytqh9eYYPcwazrUdA2LvxX9Zo2M6G2RoxRnYnGjdWP3qN5",
  "key20": "5hSpjLnCmzz4GT7figcvkhSt7KMMUhawvaL2HSjW6JSqa1Tyg1bhryNdcPWrCv2xH8iTq6UjvbNYi1dTv7Rwf56p",
  "key21": "4dzMnB4Z5Ykb5JtpDLrUkcZNJNFfbs5bQicBhN8ZBMqHZ1YDYRov3B3cKC93FWoxiTPWfPxa6PWyAqhLCzdYi8G9",
  "key22": "1H2wdEA1Hfiso8AWvd3sGU51obLv2duAULGXyiBpk5FwqmtBkfoAqhErvgyTS66Sg8i6k6AETzw7QCa5StK2731",
  "key23": "663z5bxuTYsChrq1kiKS8YSFEA1YgCddo8AJTk9veyiaT6mhiRGBGzDLi5q62CrM4zaEeEp1G5weCjDs3UKR6nVm",
  "key24": "ipmEcuRzcQzC7yEQSdAx8sGrku3d1DxaJiCiEazvKCkZGNaaZoaLAfvDSjeq8qazmEviMCLCRKJZhYDfesA1WMV",
  "key25": "3ytbmc9XCNuA26kS4KCfBL7WENjeac4ZC9MAq3cgcPZvtJcizBG8YWFXUbePRzhChyzfqJJ3MksvupF3gvGyNNQ4",
  "key26": "2wrNPZPFgxGQpW8wmnHfwawHTG82sdxAM48saFoPpbLPDeVM5qXs27uwtbmGu8odxiEgdqkFscvzQCJJm9LvduDC",
  "key27": "8MMUxo6ok7MkB1ZGiHU6yS7UBPRfEo1s6Pryd5AWEh9peMc5JkqjnfDP7dwEMik3xYHdup3KRyWBnWVsZjQG3UU",
  "key28": "22jHvGFut5mU36tQQXRUMZULkMby69YyC9bq14tb8GSzvUMBjXY3iLJ6c4LwdSTRGjdVKs8BdbLSmRqJhs3oszne",
  "key29": "3e2JHyGoiNgzzEpWXbpASEsGvpXEx6qcVmi1pmWE59btP4EUeeD63eukgY2Wo74urCECGkKv9H8ynNjGNvxdiiH3",
  "key30": "43gUqbAkFH8CVDUdk4dhtXWmSCFiMwjtrb7Bmd56XgFtWRK8z6wSuBr1khNq2XFsPUU6iGdKojAkMPnKTyAPW7wT",
  "key31": "8o5ZWaeh41J2DU1aSb3cyb274nRgtjRNqKT5YzvKgfbThkr2FBDEKgN4A2iLrFqFbWq8R4mGiUunLKqjwnWvRw1",
  "key32": "rkQQ49UNQJ6hYcYvXskgqfT6NSGcjcHPKuRLkxreRgGh9iyrPyqRemiHbjf5QuBJ9t6ZsaGT4hd12udRaitrsgw",
  "key33": "Db17A8J7VNSTdokjM1QFXfDAsUDbmXj4VTC5ecD3Y583d9TmVR2zNcV7tWhc2t5icBxzKb4FrZ9dm7YGDex8kxB",
  "key34": "4zoQtvdGmEuUHz7NYdN9DyberHsqWVpATQSkqcqnfWFWLBfndqk9owViQeMcX27GyCeZHPqp1oTJzDCZaQRfmctU",
  "key35": "2adgvFReqbC3PwtrRZrKvUbvE1gZmk2PykupC4eKHcekzUeF2z6SizUgYumkCzY9WfgzMuk7S2JAExrq9BKQZe4v",
  "key36": "3683kCpqEpgE8QBWtyKUkEzBNa6yNsErseTsvzA8nJvn6ZK46WWJWmEgdLS5BwaKNRFpPdXbjHcH2Nn3QGu3ALJG",
  "key37": "4EhgeBMDWNp3y5KZkKQLFHP9Swp1tHKvPs64CnkKFr1uVVuGjcFVcfUUp3xbSy2R423s8kc6aVM1n92N7EZMgj4b",
  "key38": "28CY1ZNxSdjeJfrUDX7eZVuzgXbh59CnfAhzzWecqVBarVcXF5bYLdYv8jRp7hSK9YWDmzQCuHfBEpMzwTJqBfDR",
  "key39": "5jnq7ZjQxAb2GvimLzAxpyamhetFaehqeBN614chhGumPoT8LPc1XxWUHWLqQjiStkFpACGuw15PaXjpdJ8gHeoU",
  "key40": "352wY7pvXYygoiPojXWewHGr6Lxrf9YNTyMGbWpoxp9fPsVVLKRFeYHswo8DPmSHjVaLpBSchG5nHNjawzjxW3Tm"
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
