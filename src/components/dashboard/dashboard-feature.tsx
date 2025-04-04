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
    "2tudW4CAapyxR4mH4fLGamNCt5Ud6BtU2pbTPbyuYbD9HJgobU9CrgZBdvJYLSjZofdmKVj8SYbXZAdX6jWaX5pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCEa5ggNtMcdAbQAAmzy9eZFx8Ew2Cx1jBRTFNFovH2fmxBUWKDAMVYVraBAHoiANNGQn3vVF3kg92Wswj9qEyt",
  "key1": "XBGikyh4RLSnSQ3H5ZjpDEkzQn4pXL6SKYUx5uyqk353979VPRE6BdNCzg7oQQvBbKhDxkhMjLaWmZPN1gDEevd",
  "key2": "3KYBDUbk6D4GARLSNUkwJP8oDMKuHJbjmzV1VcuDRqSMETg57hJB9CRFo4eEz3QuTcrsNjiwgm5x6g79DuCyLNUC",
  "key3": "4hfbzwDD7xdAFxn34TqBSRdFoHnM5ktEuD3DutmuQo1sjejYSmHWkW6is74fPrCWo7t1eQGi1JXPnh7FZBgCdQkm",
  "key4": "4zi9hnRqXSctnNz7ED1vFkTnrgEVFpgRnXashKixSiTv9U5fByCfr5xhHC42DPHm2e2jZs8rtxgdUoRHJWzkydTH",
  "key5": "5diGqXHhJF97hXQb5ufyaumFZvCb9iHQ3N1VNrLwGfk3LCy54BRTnnsaHVk3hGZpV2EXiTH3FdyuJxv1QXfcLbnJ",
  "key6": "bQFya7r4vK4hADoEfmz2ptTQUB48EHvjL8RCpnej5fqzkZtZYHwN52xxdHfQoVpiwBn56EthwtuhxbG6AtMwjXR",
  "key7": "id5TxZr5seZfRowbSyEPvAP9JEcMunwPMNhFZAVa9Zu5nhPhaetqxAKnoZU9BsBjwVJV7b7SYvkTko2xgjt8wWJ",
  "key8": "bcPWxfcH7hVumb6Uq8v7q2xfj9MdJvZyCJv6HD7jJFK33g5jyRJnLVrrFTMzYwPoDFwNqT7TnWUpnkDYTuPTC14",
  "key9": "2jiSYA5fxeBCyiRPNmwzR55nnDrwG6tz3CDF8NRJqL22nQGQAMhxtQJkoA8o7PuXM7zKJ85DPUJFLWBqvip9mpGy",
  "key10": "45dPpCocq9rfCuECjruJivbqD1P5GcsVE3BXcxi9m1UkZ6AgTbavNUba54PRM766JFRfEhoEsne33HZKNfB3zqhJ",
  "key11": "5bcBucY8bFYiEoU8zdQFr7MzrgaXrQVtsHgpePThMjQeMMeXHuDQippwx5fkdmxgkQn7hgzDiuhXQ3iJLCDXu5tV",
  "key12": "57yGXvi8Tt63KpHF8zmJZuxZkKbHxxvHcutRd5hJS73xH1LPxdmnTjLRNKzGMrvU3s5qQsst2VCPj6bQVUhimem6",
  "key13": "C3ZxFfdc3VjixGsKp47pgCczTivBj2zCmUHUFRYJpHDfnxfVaKWwpx8sSDReX1heHxxJ68doCygENzpRdssYY7z",
  "key14": "2nEJBXhgZfUp84avTqdqADm5pMWzjqHZjKMzCKV4HmrfrPFYZqef4YeUdcbmw5SDUgCDK9cVrHKByy3zP62RHUZX",
  "key15": "53HyLViBdHZ5vrnVxUMpK9gj3kwYNMt6sFyYve8vtstLvyQzZ5bkPwJp1cXi2EKj4X46B4R5WDxaHktPkC5HrPGX",
  "key16": "3iiknvjZ2ThpXeo7YNJ196uCDr7gq7x9Rrdiqupy5TgyoTe31tcazQekv3P4CafxK3YjgMeP7qqXSFuTn1ZBNPYj",
  "key17": "57oRDTJsDojnmSo9FDNGwFBDap3s2jGn8hPwNcLvGMZTBWWBkydSR6eCD8ewHXcQo7FoJC7bPAynVM3kRB7ToLuK",
  "key18": "2qERMKvoov7efWSgtuspqwZobTpP8ReUzp49nQM3jReoMCjxEfKEK6L1krgAemWbQECVECeTf7whhHQN3pYe733j",
  "key19": "3TCppLs27d9qPxB7adVBXXZmhBzcdqG8Gm8KhBZZKug3Z5ohxRCRJ7V51z2ZdU5KiHpvVWqPqTt8xDX7kHQcMuxs",
  "key20": "26qa51g79v4uNAMRpJxFYsGffvarCD3B47m9ijZFTtT92KtKTRStYfBPfrZQBBFHhtw1nxgYkNWooYf3PLqwqTv6",
  "key21": "SFxLCzTNfbFFbCedJh4XpS8osLShpTXAVswN8mgppw55FZ7XUBBm5GV1DfPWcEHViMMSUg4vphTLZe4f1Arrrzf",
  "key22": "5twoRJBuMJjcFxRbJhZ8LSCJYbLCL3WnfDMZQ4zzjjhd8UHQkxSsvuGMSTNVu5eaymCL1L1iUqhc3pseiBFTC7XV",
  "key23": "4mSeyEWwCnZ2TDMP8C6c566bo1zQh36ADAnYHMm3yW7Bn2qHW6tDrqP1xCe1TvThJDfzsUpwVd9jT6T7TLPWKkF4",
  "key24": "5i1tUTHVcTtPZ5XfdZ3W3oeSwHH2x7r5rdJJkGXGH6UhNb8WKZYJ9oRDXY1uVdEqs28fitrM2Hxdqxi7jYzxLLzF",
  "key25": "66AAsEPbnziwazmQ8GRp4zi9WoyFwpNNehpMFbRd58oRJTeofQAHmmsns8riMc7da4GpD3UDKaLwpXnJQutKKbZ2",
  "key26": "3ndCGN8hHRBwf1xkAgcJ4XrBoinSL6rJt539DEbZ4yMaxhu5gRRReMe6rxGBVeknRw7F8RedQK1E7GrCU4cfFwmT",
  "key27": "2nmWrEXnSS4cyxotnx8dmy8KUKAnBeWWCvU3Bdo499wF3MxoFULshvMLEsuyH1nFemLxc79oYhbrGy9NTJ3qAotV",
  "key28": "2ZVuFZiXiwc1W7ftFwJFJvEdhdX4DxpsoT76gPEEPuwgTAfNJi2b37zT3b244RW3vfQgB5vuGRE3KUtuH9qZhqup",
  "key29": "3eBhJkfEkDU4kkZFTiLaBTBrT48nbFVhhskHhtTdYJgHxLTFxvNRDuwUr7c2ZCGPKf9y1Ji1htacjY8drQEM9hh4",
  "key30": "5SHUDk4N443V6SooMDBL78CGmVWrZeUaT2xeGuthSfLbmppnF5sw4XqTHWBbBP6zpFNGe8qZNwr7aYZLawmZFKqo",
  "key31": "4X3UKvK9RddTiybiZGdwRyXvxwEEQF3gjLg12soFJNZgAT4eynpksf9Siqtv1QkMdKh8MASkuD53WcYKAkEVDEdj",
  "key32": "5vah8yQSbfSCKm8yWsJ53VoBb7YcyovQCBC9RoMjobog9NVZTwwLfwqTpG6uEKkkK1mj7B8kGmSVJwSvUHCwVKmX"
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
