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
    "2aXJi4HKpcJp97feFCguXbRbni6Q38bJQDnJQrLChkaMoFEFRKSpHyAp8MfwAWTJAE8sfE4tL6ZbBPJvG6PZgGKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e1DH1vPo1Lf4Q1j9b5scypdCiiRi6YVcnN8RqUoUjcwbcmc6RMrWepwePknB4EVXmFTzLFLsVhgLTphK8WzGH1y",
  "key1": "WA8XbAcw1vq1jRS9EKqpbe392Q11UqPYXQcjG8cGEfS2JPe9kEuDEJ1d82zKzgzr1KQR9MFoCo9Fe8wts1J2cdr",
  "key2": "3r62t8hj9QtUpBttK6CpWTt3bXKqL46ebwZ6KpaqFphCZJfUtM83EqxpYwupsmEGv2CjrK1k441KsiSU4v7M4bUk",
  "key3": "5zZZKQoUADmBoyHJuguqYURMxX85ciCjsKr1vfuQgJJT8yUvjSwUhCaA9sWyVraPEvcAgPRdpKhsRP2nBCMUzL4z",
  "key4": "3jpRjQCNy2KPHj8bEwteGNf8SaJBzFezpB3K8CfUwtYewfK4m4V8WkoW7iM5hT6sYB16ZFfqjP779HLL3DJZJtML",
  "key5": "5sHDDewsuZih9ouPkw7FY59Zm98c2D6yY6GrznJgn9PGgJZ9MhKWGF9Eatn8SniqCjK8jZfnQbs87KqnnaWYK8Nm",
  "key6": "64tqyTinatwfFmiVnTKBG4oLZouXm73q1dVLjxAotaFvvyzcZRLPaiKYbsynujyekPfkhju7McnTLsadVZWQ8DkR",
  "key7": "5fWbsKZ94fSNAW12ozrzjL4M6Vj25yfAJhn195HrrvQ9MLe4oqtTytjgkBFn54cKK8vWfRFMHBUW2HtTB4scZnKU",
  "key8": "2TbaK1meF8c8dRguQikAYoTcNBPWdAyGcm94Myy2NgdjuZuywiS2iQucqAuRRfWubXnoiTxk3dL5omvxS7AQEg44",
  "key9": "4ZXXFfn25HERP7gwkHfdbi13YvuS3bhmGNQkMrcmx2SBVFwJmWSj21tWd5NnSG3c5XMAyDqLcBG3PWiujZuYqbXC",
  "key10": "4qLPLYMMCETq563MvntpdtNgNCBAXEZiXAS2vzoRPVopR4T7u3vZpeqWMrwD4ciC7mnYfH5ZKKijCF8frwJc4DBk",
  "key11": "TinuJzwXEugUnv167fJVbj5j5VtMYiSD146bNnqpp9uiVW7V9WPcx815ELTVELKVVnprWrp4TzGUA6gVcsAZjbG",
  "key12": "6kSCakyLBWW7QCqs9aQdndbUcBNeGS2UaBgydRL1jLhW3ii4kW47xvYzpk4e8DDskUFZUDTBpvTqrsivpNVvUdx",
  "key13": "BFvz3tkTBtqDBGXkeynQzDsgjVCkbqhUSLhbipRDkhMhY1tmFJfEFuUKsStqD9w6nFuVmXB2yZrU8FZ51Y9xzTk",
  "key14": "3BfnhvbSAcTyUTK9RwYWjbGLMJ13juv7SehwyuihDaubD3TPu2EbesJNU86zkbFrTn5899aaEvzPENQo3a8BR6Wq",
  "key15": "3XCjuNfhGhFzCDbbobLDsEKLaF6nGrY6XdEwybjqkvrEZ9k2H1jEA2nctdh9bPiaxFfds6DQrm6chGWE8rWQSpN",
  "key16": "2cN2ajRns3ZPcuF28FMw1RufWXvLMQJ98oeCZoaQtN6Zmm9iR3EZMnskapV89Jc1bbUyps6a6EerBwbXodDrtE6Z",
  "key17": "f7UpuMHNB27mMQyKsryV3PY1P1Ns7cWavUVHExa8Kq4mchxgozs7RZm3VLLNMGbSamvrWnZsw5LouVU5DgYHU3B",
  "key18": "5kUYLCmxzZVn3f4gYR2U9FGk1o9yJ1UbCbfr6L8t2WLcAUz7SuktniPs6w99DQrSQsjeZMnYZfJNXRtawaSK1TWc",
  "key19": "21QEN4Qa5XJrukpzR9w6bCtFGytKQqdbKAcyEeYCqUCciCKzXQEMP76wguN2RLQJWvUV88ymAMAnovUP24iRynBo",
  "key20": "gLhHsGQKZyTf4LCGpLcTNhH6anh5mdaohJBLQJ8RSF55FEp5pwB1wmLGCw7Q9gMcWGfa6M6YjMmxkeHpcfVg4m8",
  "key21": "WKqq8pCiuU6sjLpTctYaC675X3764B3FK5CpiXyLYkdnNS6vyxdugV4h5ggTnrJEjLgiFnudyG96rNDx7vnk28J",
  "key22": "XaxUsbDnkRECoEAHo7nYzCNiptLaPuBGMLn6wtZW48pmffnsRmfkxDKghDU23y9kjKy9ycgPHNkuqXShPaveJbj",
  "key23": "3e6mjTWGGf1DxtbNf6mZT6ts3SmaWQrB9NsHDLzUFUCuofoNArb4KDtAYxFF5gNgEYN4iKfRNZCDzVvrRjLjEYyy",
  "key24": "3qnQNPpyhws1NCLsMFmJ7chyPFwCLvTvi435UgUMVoi7c4MTAuD4BY7tsHJLKdUGcEFb6juwyDN6visRyXEZNPGV",
  "key25": "raJLvUQzbUQJSSRqRnzKT1YKpBBYNDi1xqMwKC3Ee4Buzen2nSh4WoJXUgP1KCxfupgTM2c6HrHy8VsGFdanYTQ",
  "key26": "v8SH5webuSeBQM1j4eWiGqsiCewCy16MtFprRw9sAJGnUjtenGFy1wxyo1kqjvG85naFjNS2NKYfevk5gJYfMCR",
  "key27": "4AzUiHUTHJ64wyLb3WN7BKuLe7Tz3wncFuSmbMJbttpEfaaN5Diqdp5RyMgFaa7vfnp9TxR2WtnQW3Jw26Qxz4Rb"
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
