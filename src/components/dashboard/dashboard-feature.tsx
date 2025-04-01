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
    "5Mq2DYv9ekZuCyga5oxX51uFySQSivMfGxbQzx8tzpVEgzcSjHcyVHWmk3J8JzTUbXmJVkjoCaqi3b46qcndkfEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emHynPyJLroDhrJSYzXbgUjxEkWxdxkLsUioFm8VWLDuby4FYGatQd4K3s7BmfbMYZSF53rLHhGxK4LRw96Tj9g",
  "key1": "4dsDts574mZThJKKoYepBQFLbsHW7XfHatSCvJWMu2fMHKP7FcSNq2dGabpvJmi1SrVSCeW7uyS3h1oiudAqzEa3",
  "key2": "32D5QkVaQipuJQJz1psBhX5ybX3x7gyLi9No4hLiHL5yz3grqSuz5JBTVyFVMssLYKNQhB4rLst8MSgozqS5YiH8",
  "key3": "5V5iU1WdQdZ3t2m7VYKw11KXxuA56EwDtnvznxD8v8g3opBYs1Je4hLcCo2ZwpZtFGukn5U29cCnFtA7fW9zSj8a",
  "key4": "5fjtjaUt47Xnn8rLUA3VEDbdB893dQrFgYah2hubeWLKAq87P2p6SNcpTcTix4EEtoCgpvYPziZpPPDZ1j1M87yr",
  "key5": "5HFeaxefk2knXM4GLmMJJ9gwwe9Mz1kdoUWm8SwuoWDHaW4Zdbaq3dybnyFmuaXVmxe5SdVEvoo3PKc7SoY5ryQx",
  "key6": "3TjLRdRAWvmDvJjfxhiygXPuYMz64B96hqqQckqnUrCsG9qcUs3x3fNrBMGcc526cpDRrbPjyt73XwrCqLvxRuru",
  "key7": "nWbWFt5wnitr1ZHnWGiXW7d3WJBxokEGoJ4x5593CS2SRedxSG5gMtC6jCN7c9dfYGgWumsVyYngkZL1GUjPWsQ",
  "key8": "5RaVkXuP1cWCKPLhkurtMKqPA6thwUZsUG3upKCYWTwJiu2yTDupYxDtTTMtjVeFXyEbNwopdLCHrJmLp9YjQfTs",
  "key9": "33oKxaZtRuG6nc9sXsa4n8L1yujPCRhD22cvKqZY7uagwFwmwSbPWJr1JBPP8XNP5TUQdFMACaLhFZuQxRvZAyoD",
  "key10": "LMk8UJpD84TkMJjfQP73ZFndAAhR7GRyjveZxPdebg9nE3bZiRRXbsQNwh299YGA98BeN4x9BtgUkXFkHnyqDdg",
  "key11": "4mVQYXUM95LW99yCiaDEJtwTKYy7UKDAUes6MFsUGu45we5USPh9XP3uHAENH335A3iLeS4okjE1GgQpCHvqDKsZ",
  "key12": "4poAfNiustT3JF2taPhqGrgKFVkpFAi1Es7DJGrdekANPKNMwEe2zdoWCawmmEChVsDybwjxBLs96SBh6AhpYsyD",
  "key13": "2LSe1K4JzoC6vXR54mD2wBeNBktoF6KEpGhDHnddSow3aMSMtj79aQcFerZAcQhGWPd7UDodTandVdaQMdUg8vm3",
  "key14": "54mp7dg4fz44JV6nrZr4Wyn44jCBLfacv5A2G7G4xPzDTTXx5X85uVVDva48kxNnN4nkio4x78rrt9WNcBi2E4wD",
  "key15": "4BfrQZEYsKe66P4eGqwized8hKAdtFhRdEF2LLjdo3P1WoFhJTsG3jdEJNJcVnttk7jFEdDkDxcAyj6iQgsiErCe",
  "key16": "2Z99sW2XiTFcysefu1fVRybgYMc9NZQgjuVayz5AYLWpVrAL8skbj6gardq16He8EoTYg8j6HGWtgU26FFKgZtEr",
  "key17": "4i6UsgYJD3X61PkJjjGQ5Xd6Pg97EvBueea36UTL1Uiy6QcaD39mpgR91MQuwxU5Dp1mq9yYU8NKq3NGZ6V7MgDX",
  "key18": "SjPQU6vswyyCME3XpQ4bJ4ZmDDvk7qrLVFVdcuXfk3uHrjwSwpkMLXtiR4Vw5dgXRtGWYrid6as77raDHSS7Xre",
  "key19": "4SU4yK6Fqz2ozjsPhniv6arfPhS8Td1fLJLoX6tyN6qG49gQCgT8RyYLhhA877ALsQFj4Ea6u4Cvt9pEysfNbq7y",
  "key20": "Jj5DTq1HfVNNpseo16PkK7rRaUa2fdVFvqWTTPsFypAJSAoWsvfYdJQDsyZoPsZJPw763FiiebxCN7GnhMxCSME",
  "key21": "3w1sXTeTHKkiU5zNLBJHgHg9V5at9wdayfCTeXpT9KA8RVbpwJJJUR39BQRsfXv18ovwtdrmtYk5wu83ydJQuTG",
  "key22": "2Lh73LCsRUxG59X6nsRG1AEj6XyCkvRydL35m6ezZ45pSN9qbZ3BGyhEx2WDTDd4aGVLsxCkCVasuaqMVJFZPVD7",
  "key23": "5XnvS1VuDkD3aBHkykSS5joz7UC2EHChq1WVjuvrRnKFoEFCZJtqn6iZgFxt2kHKvg3yJ4uPeAeHHN9vUDPSpF88",
  "key24": "25CYQoWMbuk9YgT7NT7eZNbABBzzoNFwpRanUQFUPKhtrVRGfERFuw1Hbcjo6jVPtjhqGXYcyY7yG6wG6fG2cPmM",
  "key25": "4ygukWSH81WKFaBQaiYinEKnhZU6vziTt3ZMTcn34YGoAafyAY4QYF5SRyeAvWsKyypD9RNY3fXTdEwtVhV4E5EQ",
  "key26": "4hgnXiQQ8pvNa1fY2NFKbgD3XaLoTPFGE7uq24erSbKmysYb2LN2X2sVoZUtTccR9T1H6perF2iW7qHeeaJFwZfi",
  "key27": "uaxXcHt4Z4ZbzQCCzyjcZcXMmxDCtTcCyLZT657kwFie49Bk4rWuVi71dPhMPRFYgGsGiCh4ZWGvW9uNQ8cP2vB",
  "key28": "SdQxkaxXduCwSP7geqzCTeNHJPdRZu8LrMs8CQPcrQpeVTZJCddWRLPeexcuqKyd9VrW176rpNDvMJJYm7Yp9p2",
  "key29": "57CgeGVdyJSANvqSiY5TL5n2eQRQuDxAwqXB1dW2DKMggmoP9t1ce5gVBaCB9D1WZStaJhcwJ3zLQAL7mHafmSJi",
  "key30": "5qT3vdviU9XyfTkDPjZcDSKEGNrEmRp54AFqsTV8qx27caEGdLTYN4HUQ2MpZQqiYuQWo3na5ZdjygFtycmyVshG",
  "key31": "241d7jE4sRQGFVdTv1CqWJYcKCvpKDvnasmTnDxVcoTLi4zPMRgWSh8sTwgiyN2Fe1RHj6CvA2MZJkYt8VG7PDiY",
  "key32": "5FrnquCvxtR5XLd5wssRfxX1ov6ew9zHgLU5A8eu4oSgUBv1Yo34arBKX9gu6ToB3oLUSvTi9aqhGrJj1gRDJmdJ",
  "key33": "pZDaY2EvRCaygFbwAxZec1nhPUh3J57SPB5hpqxeafSGRNr1b2pnenYnLQjDZ4DZyifEjYq95XHHumckJCUHFH7",
  "key34": "54FpryAheasKYhHVTusZoJJazygpYqjTk7gHycvKw3wtmkA7Rz5AirnjSxcqTvmwUtosBprVNsDQCpEiBLxZ4ARq",
  "key35": "3Lt1rF6ZjhF1kjsZMS4PMqcxRbd2whci2cp7M5Cy4vGZY1NK6Y67732TQaiVfsd7UnV4ksByE9EY7dFXqajdobw1"
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
