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
    "63exnrcsLMXg16ZsedU3DVcvfpya259q6egPiKM7uGFCZ2etuh55FVvRFkoWohnHHW31Ac8xpobkDzj3UYHqVrSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BinTonTdJE5YnqquusdD2hp4YpYyPGNSRSYfY5BycUdy2QiN4GRKv1YfdW8dY5JjVZiEKcmgA8sc7Agpj1fAhTF",
  "key1": "3QvWJRxEMSVdbvnYhhtr3tg1zXX1hP63g2ebjpqS4R84GpfBNCwoSsmtSiSjaGtroXgzcXBqweba4wcwqaRKZyCA",
  "key2": "4ppkgk2mXWNirRbGdo1EJR6zwqLUXcGzPrGydZMaS2Lw5EnKWx8yZAcihYcrqaQyhexQ2yTt3zwqZw2Z1D11fG5j",
  "key3": "4tEEHZajJvDN4EuRFUdJWCAqsef21aWLRHR6sgDCX3unSjjLriXanpRMTqAREQJeT7FGuRmEVtHgd864Z2MnUgwV",
  "key4": "2Ln5Ck5oDGqTGxqvTT7kSMs5bUxGdF5VQtMABbF8kpieoHwE43V8ZemvrtaCyQoXwfPdkQ4tZkh9ZkejuGL4JZyt",
  "key5": "2qqcC8TGY9TxA15RgCLgQNhgDRBQFdhpUyBE1sYPxbZV6gQPD3H5BkRjSKzVwmcJvmSNmGfh2aZAfWbUrG3LsLts",
  "key6": "ScdJ7m4bRgMULmqitHBrfPH3d15N2LBVaTGUcrYLS7P5cXn4Th7dtQaUxkPUNHyiXgYSsx2Q7xRzvkZKZKxEXpG",
  "key7": "2WQQP5inT88HUuigzfuUPnx4Uxq2AN99rx87U13WXGgLkm8r86BQVyHYZunuo6NjoTpckYqJ49NUN5qHKnBcHPPa",
  "key8": "47iaaagihgmKDJDPRpH4E8zeYwPPamZ2G5sddxUaeKLTdtpg9Xt44YdvwTSRPSpyuNomv2iGYpxBuk6uQRHELjcE",
  "key9": "2mL7r1eGPdM1vQCq3AP7vdsRhs14jTWZtNy5C3CRocbscXax8QbpoNxW4Qgr2LzhRLyykeVLQdnQcTxk3wef99uV",
  "key10": "3ufTJahGUZwhJWsDPW3CVY2MKe1wk9Rx7mHXcyP7zSELaq9qRNXhPkD9b6SuvvrFgLaNSUPAdbDUtBBC3NDkFRZL",
  "key11": "4ogM9itWT3dKZLv7cayBvdcQEREpyx13ugwGw9cm7FCUDrPumruEP925B3ty1wmPHxVKm9chc8BP1PyHBEAK39E9",
  "key12": "2vLTtPv6a7rA1c2e1GCmJio6UMq71o3PmUn8fRQ7mP8adYE2uSJXJGdUCVFfib6E8crkgG7swEeZeavmGjR25X93",
  "key13": "2r4oQnnGzg3bfVXS35s6XTATpQPFNi3BmEi3evJRbQZdGScZWMdRgiDvXpRTt8LBSH9ETZvrtCbTFS1ChT5J2Y9L",
  "key14": "2zg3xDCV9RGJ6FE8JEGqjeQHpPxtf4JhTXkuqg45oo2HGiVXxMs9vyagZNpWi58CoTvTavtsm3rNKsxjADdKLLgo",
  "key15": "RnnDCG3bAaTDkqejqUUJgMfK8MbvuGmfgcXnyg3CvMNLf9vTutgZcNwjsV2BovQwhrhh8UwsjjF1b7xaDHFqLoa",
  "key16": "37MLPkMPhHCpri5qrnnjH7KyiBgy7CfSMyso6KAAS4HRKcwKGMsQQSSqGV1f5VLXZsi6LNJvWW8AdFraRHJRi4uX",
  "key17": "2KyrEW8obziVwbWzrxTNbaHc4RLDd6wYGRbJq1F9pz6vQFDPVGTgoDQRjbqo1gcBeKYBwqDFF2Hn3EpeQYFUr96W",
  "key18": "eFrwuS89imqvShyQm7YR7KJRsPq3SY1umfFU9ZyL35UCa1RKjNUv36NbFabfZTMkAdxSua1Xm3eK1EVAThD7CcP",
  "key19": "H325iE9HCXwanFkcBCvvUVUYuoKD6f8URaheQVSkW77Mmdw6Xse9CGCktt8sFzYPdFBJ9SZwGYs8ywvuBKKasmS",
  "key20": "2Kho7NR95h876qCr2Cvz5CGmm3tcGvVbmXLEGvR1sfSXC3XAvsDsCroNxMGA3Rw8NEX11eqEx6JxbZETcsM2S13d",
  "key21": "4VkefpsCkeYu69t45Ri6EtgE8MA4Uobb96ifaqL6cVg7utvawzqwXyXS8vuKfbpwdXLn9YVeqLw98VDycGjhLHVA",
  "key22": "2VN4EC4wGctBxBdYTyRZXmqZCXnkAp7fyQ97EXHANjTW98rfDvyVBxmqBzgS2JEcvsU5KF5cquNPEUn7GxqoMk8a",
  "key23": "5eJw9N3dAasBeSTZjSb1A9xo3wjngicRyeTmuoF88sanBsVZLwBDnKn7ZZXbZBxica5TtiSVPmzXD2wWAsRYw2Sx",
  "key24": "3LKX6Jw5qnaFSkZ7ocnaMjG2JrenLAisDcTy3K49oAfVM6XAizFfTfd1kw8RG9JpskBK6EKsR7pg5JFD4SnkCSG4",
  "key25": "4Fd9GMMbxkLki9hkKxqJBJK8iCPpcR53bja9i5QnCzoKzChtxMgC26ZRVqyxywZzr3qNfp9vo2srDqnA4aC8BCxz",
  "key26": "7aAyM865c4z8G9XmYpHcjGKKsMev5eAGEMCxbMzinerteTHpYXT8SKpjt3zvc59WpjaYBJEJ2c9bT9Ukm3LNJh7",
  "key27": "2TXRS5C7ePQpBFihtgvoXhsPaamgG9XaJCGKkFWP5Q3ANLviFJfvrPNXdEZfKdSo6N6Z5F4RF268M62w6Z2Ed78a",
  "key28": "NVwRT3HCC1zNe9K9VfpBtWeKAfhoUn7dc2ys6Khnok3dexDahupYQafRboxwGk9fAJ4LeV4idZkmuxMXH2eUxcZ",
  "key29": "3UgmJGkZMSyL3PzLBr9S36AL3Ho9DSm38HqvvJnwQ1WZ48RU4sFSN9To3Mh28S7sNNSJcWrceGduQVYvspy3LMSF",
  "key30": "3GWuiWAwLshTF6SbmnBuyFVnxCBzE72yi4CXHZ7swjT4E39J8JrQX9KNMB5YCjvReWEC3G3pi8MejhUbceZabNN2"
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
