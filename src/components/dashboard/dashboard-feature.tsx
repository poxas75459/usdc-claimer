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
    "5mNtvVUgKa3mJLX9jaE7RHYcitfmAGFrce3wLiZbgoM76Wghf921tgEMaqVCQPTzSWXNV7TipatMgSkWdzR3yEBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXqbwATHCS79F5DGgHbWp3b2QH5yJxjUNj8wu1YCkGhwWy4vhqmzuVGvLtJ3WQwc61CsfMrW1WWFiSWecSKJVnE",
  "key1": "64qZnBTN51QYgP9LiBbBNwEgTatrjAuUNwTfzq5rUgxyu1UkrahcN1ZMf3wp99Niu6C4KMSTV4NhxNQLxNNj13wm",
  "key2": "gNC3zAD72ZqzP6d15k31CwdrxGY9TRfrGjG9Renc2rLuqEYKgS3xmyrkGw6jEt6nBkw7wq4xC4nUFx8dZmHL1YA",
  "key3": "APRykZX83wyWTffemhHZZgoVDU8DtJLLjt1hncfnNBCubsdf6nhi9rCxKdatGjWgCp61ZjYJfUxatNShA7yrH6i",
  "key4": "GuDadmdeA4YKLarT9XJtJg9q6L7ZyMrPB8hct6pKA3ev4TJazUrf6HpXVGWxtCwq4nzKsuz23S3BFdXV9yQs1R9",
  "key5": "5zDRSJZa8H9S498MVf4WH58XaRBgMta8cL3vQiQTkTiEBmmwJXask4fW1qjEboD2rAcA2heE7GZa1PTFn5wqwyaF",
  "key6": "4Ae73L8eBzq5x4jFUJY4zHg1fQkujBNcr4rPvjPB4DyPCetCmDP9dFcM9sKLFB86bvCiaSnNESVZV9xgPca21obY",
  "key7": "42R4jghguJipNz8SB3b8Hd4zb3JbexityNfM9xziArjtMxuJXPHZ2mKQuyPWow2SBFCWU2zARpxzusKKDrgQg5vc",
  "key8": "4k9hvwGA6zh1okjc5dRHijL9UGKLDTzuHC3gfBkUaxHCmKfsTDirFWbxfBXoCsa8rE7CWLxD9Jn1zQKt4evtEUF5",
  "key9": "bitUFVSKtiad7UQkT83jXmAd7UXXhnx5h7V524mRtHdsoj72jixnupX7hxzRtg9jGEQNZp3DbogxNYDrEbXB6KW",
  "key10": "4HfXteTi4J7k8k3c27tDycCY2K699vYvWgEFEVgLsRWfr22f4qFado4Qpd1FPRNZ11T5Tnfh5HhcUPcyQ2QH6Gyj",
  "key11": "2LMw6dCHH9ntFsqH2FZQRXDMafdytNTiCt67aVgTyGve9GLuM3SRxLg9MwuRK8vvrBJEFa4vapMfL7wbtRBQ8KCa",
  "key12": "2tAF6y55WdpapGaMKDsSq5as8NQxGBFVcaLg97haj4ABsniXScpsQSAemYTpXPgYf6J32TJiT9sb7bqwmV5esJTx",
  "key13": "4VxLyXL3Szhgvkn4yue8yg3Q6wqvbVzLqNcCuYdjhZkJ8byzmyR7CRA9Jz7QKBMw6byd6X71RUa6QzTcTqF5t2is",
  "key14": "4DjTsB5oHDrp74fmwXV2xxsEjTjP7ie4h3S8hjxBgShY48qESf3MCZthyDYYqEm9EmZoXAZpcDGr3hHhxbRmzzhj",
  "key15": "3PZaACFYTUhmAB6VXunA4bAEwMdT4mE6VrAS9yWCNPmuYNZBEj6WRwZYTefw4bUgJ4gVEQcQcSqpX2GAvfh8jt3n",
  "key16": "2Ppx2sCnrKSw9hRfHAbksgpVABWcs3TWSSPBxgc5vesjpWVhhBP7gMGEm8Eb2yJ9xmpQabjuxQPrTkGRTHxDd7Xf",
  "key17": "4XVZPqaoj77BnLvMduwf2pABA7tK9V5a8paw6hMQ5msZ3AY4DdYJt83cHmx9S8XKPGrw1toMYSKRy6JPGyzNQGs3",
  "key18": "jJHq75PRLjWXx1nVbrNAzdsTy5WCHwXpp85grKJiBKcKfg8u3sgsh8vugu6MMEvCCKPJQZiiyUpnbbppvBwEG45",
  "key19": "2h8zsYMmmvAGW5LGfLtuKp8SfqDhhkJjGGsiga6Uh54Wb6NMWUq2anrpVZXaHota1WGvwSpmowkQQb4TcvwMJo1C",
  "key20": "5TBc6wZyMYXHdRFtvC3LDjdBSAdvYzfZGYx6coDSe7MzoHKhHA27yUDynKo4B6kYXvpe2947aRn7FYtF2qSFoE3B",
  "key21": "3X43LNhd4uHYWvMcWpXGj8EcJaYAArcZNJzyP3ZwsSv2GjAn9h9By8iTunk2zcyz9W6i29s8c4HzLUZntp3tLdpi",
  "key22": "36RFRqqNUMPvM8mJGTdRbZ2shvQGJxSfTHxm7Mt1E48EXLAzi2hBFEsQ13w1BNyAurYooZrV1mBTR929NiKW1nH8",
  "key23": "5CDgumxrStUihQQ2tjHgqHmJ9SrUMiC7xDqGGzMRvrXBi3b7XiBXgNdeLJpdXDWUyBV1hHQfnokBwvhUFjmdNeAY",
  "key24": "3DEkVXMdnnMzE4BcCQKn4ogthMURTKgTTjnj8Wv9bnmNpXCaKAjU9xTiCaFkt9iTRh5PFTBjWDi2dW6WSaepE9j1",
  "key25": "22BTfhCw4y2WXEbATpS4ma3gfke3skA7BavE63sgE2L4Lkst9BR7vS5AMeUyB7M5KcrgW5FtxPcFGcHer3bSjNp7",
  "key26": "2pkDpF8rB81myE27dq1miq8X3weq1xCTenbAbVY2Fnn3N9zSHHcccJRBHyUhStsrDYEUvhzhsG7oMRUD6DBYvKpp",
  "key27": "Ra1Axke3RkhMscnJjheWCvKuhDixCN3jhgYYA3kxucUgXynfjyjzyRrT9HtD5tnyXxEzwKCZWoDLLEwiWmiUsgk",
  "key28": "2Cq944sMhtXRShec7uftv4ns4ui6rqfwGt3SbHmuphuWHD1DoHTDmGBDUXNfDYUcj6mDeNBMNDu3Zpv9kJDBQxna",
  "key29": "38UCQcrrBXH4wTys6fQMDMRZ1mQgVGEUqbEoCTh26Q5t1ycPDfhWvsjLspf5YrdwTASRcm9upUYfpQEQNbYGKjHz",
  "key30": "3JVAGdUNdWL6C6Qd9eCzVUyTRQe2d6Agp2XdoMKkELgA3LpXUCDwcvETijjxi6jNs4VxZMeCqdd2f8KGA8ds8aWF",
  "key31": "2LWSQkWALTpdNoLod5882uBfEfGjNzHveXzCXgxFD9M117ZFYk77H2cx6roE2zHgimookkYNRN2VzN7AWpdr4uSc",
  "key32": "DjvK6N5PzJSkfEGAmkHvAwKNatn957PYkEwFN5SkeD4NasMnyoikoNCTh6v2fJWpCu787oMiEpjLq4Vy6Zr4vF9",
  "key33": "34jKMTbcKN5Jg2JRoSTh41WphpDJ3nMn2cVZPTyqe6Cuass9kW99wBjZknYBnH8XiTNAS3jGXkPrhQKMyevcwceC",
  "key34": "3bGGnY25MwDD7K9XRq2YxgbgHiHX8EUfaDMgvNKB6GzCR7ka6yTp7ekepVQZZQEYJ16tRrtwpcyEfnwdSbmPLyts",
  "key35": "Q9RPJ6Je74sjrCE9eEvsDCc6oqdfNPc49m7efuNKyB28vUGdQcnanBJtA7bodfsaKYaSSk2i2cVPAvSauBBdtk8",
  "key36": "2FfdUmAkm4BViU4iY65xbUGcmtP7f5uGkA5BoAwPh8QuEZSdHZHENazqgD5XBEy7P4PwqJo691gtXuaro94YyD5s"
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
