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
    "662Bug2PRrtmBsxMFqvYEKS7SQSMES24JXpsr4WxMKhuGGoFZVYM7MqGsutyE38F9GpdZk1a6qoE3ydbu1e443RX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CGqKJYiUfPdPT9BtMq68bN8ga71KWZvQWuFvQuKxgN49ei9Mts9kHBTuwEeF3tPeyHDjYU7JhEAqAiC1yhYvsXN",
  "key1": "5Q9nP88FDHkuLcU5oZkg7RkFijcMvfCFRdR3Uro8DbrLfjMFXEdTEeDMpcaaJtyVkAKBg5V24RX972AKs8iatUeC",
  "key2": "4YBBJZBghPSziUAZbATjnHs7WkzkDWJm9QFhSDmjr9fThSrqY1vA2y5BsvdXyM3heAFVzSbqhGbzAtjWSwYejePG",
  "key3": "2dkAR61u7kTns9eWpS4KowhuJxosdXN6koD2bwvRZL6FRi58om1Ck8u4US579GX5Buaogha374zVzKE33tsLR8u8",
  "key4": "16u7tEZX13QBCB3rZ1ATvbmst5DbLX1ZVHj1s5RdbGtp7wwXqqbUtx7CFka9RztmEJ6AvzPm8jAnSRcB4q6n4tF",
  "key5": "2uRHQjXQeoFAgTFYxyN6GkwwhAppSELxtK3mKionWNkBH4YoCU3uepkESHq8j8tKfcnVqp8yi9db8buJg8gZzQ3z",
  "key6": "4TwX39Ne4kvd4ChSGmtxHk618tnitVm2v5ndS9u8tyCwuG8QJjVFYbetcY4HUVKjzqruSTA2cbkMiV8wGVtaRATZ",
  "key7": "5HrUpeq1PDRxW2Vt48huAx16n34LVmSp2qbzzz8qq6dzA6vpgM1RWSmbaT7PCo39SSi6DYV3A5duMG5KJSuQHkDe",
  "key8": "49Ba8Hkqb6CeHud5LyQxHpRzARt2QDiYs41KfX4WQ4D25w3YABpgce86xkGar5AJV77Z1qvtaEHUbDyCB7zAxduo",
  "key9": "J1sNVhJqmAV1BmYAWv1GvdRL8gGGBLCTJJxsrokEFCk6wShTEpnAHgM8ZAcKx8uT2HQ9nRbvz7LwhLnJMhLd7GK",
  "key10": "3im3FxvuPN8J77wrnw142mGKVXF47zUyasrnbjUUx9dR6gpRc7ZK4PJ8sJLE185BfkSTsMgiYLywroz4GGAzVgfc",
  "key11": "5VKx6PgBCTrNy5FDMRHcjCprK94PJq2DDvXgBiWdNvLwdh46E8dpjcUUso1PFqA2ubGud5dgPS4Fgv98J4tVQEAz",
  "key12": "2CXuJYtbXdYiYNogJZvGMmURvoZqRGr2PLyMcoDedMDewFKmGykPbMHF1fU3JHrxKnM1A3rgiDDMZQrYYYrLg1vE",
  "key13": "o9i9pHGndKBwS1GvvouYfvoZLJcyPWG5jADNvuv7RiHGpbmuepGUGw1mrhARpDLiKxdQk9gppPYiBUiT84ycyCu",
  "key14": "3fU3vFpTGG5ZT8HovEoLYwVzrzp8dFYDwZZMuMx68FDxfN4rVUYUpgM19sBf5q4tBnMKM2o35STjWzHikDUwANdx",
  "key15": "22aFjgEBtedsvGWTZqwGCFTfkKSndwm2eDA5ASiRRbn1U6AApRf9uygB7p5asYnhpXyKCaNReWiV6F9rdcsZ1b8S",
  "key16": "4FC7Ew48JQLVP91e3Y7NBZNcFaSpunE5oicZ6qjHRn1qWVTv1YgoAELioSU71xTPUhr9f7RvkvGFvj5mzA5xpSSV",
  "key17": "4buqw5c6dWnQf8yf8hT9yx3qbq2kiptKvTPgrWtXKJveEs7nLd7FCmPBQPmu8Yh3Q8tvyqeLVxgo8ZN3n6HGSDSW",
  "key18": "2NNYB9G6ywexXsnvp8FfKvuEqAigm5jWPVFbqFusYYQhSS1NvKPfLKkbEhunX3znCzhtSF6gW6zx5Qe4iH5zh7kb",
  "key19": "5DWHsxK5bJuJBzj1LvZ6QLVDAFn4uBV4nFfYAkGuvbsD3b53EtfD94zPna7eu5sfGJhmfjcJeokvz9KiM7s9q1n2",
  "key20": "4LCv5EsKmbG68bGnRo4gBPXBLbFK37NAdQerMsjmXDEstjdR8UbsS87UtHfFXX3FEtejqe1FyeNrtUnyNSNkAT5K",
  "key21": "5VZrhVGhPFF3SyUUQrsKr93iJjMgW74kthQbNy48kN6eaJgZiere1U6LdkdbCCfT3E2JHEGpTr6rXFZJAcDTjDgS",
  "key22": "AWmdzxKRMtGNoEP9zRewsEbPH3Ug2amDrSh9xofXRZiVhXBq5Kg7WHP5tKXR57JqQUobFsNYzLNnoby3Ua7MWCA",
  "key23": "4A9JK31CiLDG4b5E1oNHSU97Ahxh4451sF4kxWKVAk937SDVhbHoLnTLRRjR3dXLQ8iL47MdsYiboHfLHvHsH88w",
  "key24": "2HfoWPj7kPiXZhYx7Br1ynhZLSBcz51eLHLuLYq91M6qL5ucL5JPE69o3Le6DGTFEnHFntgtHbbYAZbKqYizxyYa",
  "key25": "3yJ8N2NQ9Xi5NB2XWam6uNMCu98tB9ajQkNboVofuzaHtXuRPxUmnWdSBZ5GwUwUqiqvN74XEnnz4v7REUQotihf",
  "key26": "2piNS4B4vMtzG4K8YCiiKCucotRtDLqjKtpyNM9mSd7xpPe6gFjfsHReoeFKycAkJmgBnJWBpGoyx5W12S8ukNQs",
  "key27": "3cvKRvSpTNsYv3m4x2ZiP4Hd7JFDmKBHiGX26cBikKErKxPAc2uQZarvwYrWrQzLZSJgnabZciXco7c5vk9Dywxq",
  "key28": "3EQ8vzXgqSrfAZDqxc2tr46nQnBpwjisDWGkBt3wCJtH7rbyUmHhroBpxL9PJM5A7nWnjsNcTDyMmswVUEpTVsrP",
  "key29": "4evmgFxEM8vjhE1CCtABjHXLY7iL5u6zf7RRiP3cH4nGHXwxUBdLoddiqnjThLAwe7EW3P2Ldc4akx9314Lx9iTk",
  "key30": "2m5xn2b41HL4mCy4k3eq6m1Ef5y1Q3XQDvjbtfhh5ywkFpd2apTMURwbysCJTL4hZADkd6KfoTzfngkGWK1RrwnB",
  "key31": "3moD12f9WRAYMsp3G4T8qzfzVEgR6VJKxpXMoHZk3xxpMPC4X3hZPcH7wGKH7VXz1noYUwaeoaSnHr14DSm1N4ua",
  "key32": "3pjvHBqh566Z9jzVzcN6kBEXxsidsMK9Ja2ye58VtrhymUZRaP1RxptVYVP5jcfaNZ5Y3vFNYk8k1EiSYy5pft6T",
  "key33": "SZ4ZLyjx6sgJKWiaQjWx5M8dZLRu81B6W8ArUD4GUDNLrnTUPND3cJsSXTcxk4dSLqk3mBT9yChqvuZbpjrbQwu",
  "key34": "25mxV2EJzciUg2khqxnseeLv42qF88tJaHFCWqqUNtZuUxYxM9hQMWxo6jBqwtdZdtu3sJjsY57iJbwGF69cnD3K"
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
