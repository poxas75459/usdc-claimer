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
    "46HPknGwrPHHEU4JBGSJw4YXdSfsKLEA1y1fX8RWmm61sxakod2YbHWBXrdJFTmAm7N1PFUgdgzhxbGEcECiAJHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZsgqSCoVuVsHUucc4HDzxTrymBjR1eXN1pSNrrqdVcDMCEXDQ6eQiqdndF9XbfsLFNe9ijJwAh8G6Jtidm4y43",
  "key1": "4mBPckcuyN4ujPWU4p2PzVF1PEAdHALYYrcY6uVaH6rJdidprndE4EREEsuqSnL4qZwkn8G8yAt3chCAGYz4Gnwv",
  "key2": "5G9s2AZLw8bL2WZ3yH67yLVZe1kyVMU32xBGkaJQupZkJ636mfuDkay2pEyvvZ1MQXLoEhj8kgKEQvkjYVbAYGSD",
  "key3": "2rFiWmDGMC4JFAPbCM2xdF1EAQa5SiDFbgezoeJ8xEWcCqjNSVATKNy3fYyVwZeVEs2eWRKoUnFQFTJCnh3Z4Epm",
  "key4": "2HJWnp6ph36UsWrxk6TyBTcoKNt3pt6uUqpBegy3mDHaqCfqXP6dcxJdMQBHkT1ZgN9LYYKoZP2wk9krsTH85L5o",
  "key5": "3SjdNuiLVChMu8WZF8LF4UXxfSQHLLoWEwNiUEiBKjHedNizabJZ2VK5Nv3SnJXiz6SReTD8DZksXWFHxjHuMPFS",
  "key6": "wW6CFFproRrPvNZxwXptBgczrPfosek7zeC3uWkfmc1wq6kPzhkk3sRDKfTxnsrtKLsvWVKABTpce8rJUsbbtuQ",
  "key7": "5PERjurVK834uzcYyyJSJUYYzMWueu6pKGAw3uKk8L3D7yBfTKK1DNg2D6dofJhci2AKo44QVYX2KetuivpsNjre",
  "key8": "5RtHqHSw61Q16fKK4iw1xZ9sJRzxKkaL1HuuQnHLFL46pbw9Qn4LywAX3Nnfc1H5yGZYDAoPBhGPW5Exk4h47qBz",
  "key9": "3UGrNh1JUSH4tmgGRp47Bv1eQ4ncrmXQGcFH4D4DTkK29NLBwGZJEAgtZpquCL13MF5R3uxX9ySLB46f8PkYT9AW",
  "key10": "SchTLXfupgVhzwLRaqVbb9TEdjwZNu644wNhBbWvwEFGDQ58sQNDZWPEke4aB7hNjCQB1UfYyGRLCzid21TRFFD",
  "key11": "BzE36isyp2gfEWr7BkV7YLWPprMGKfrVg8X7kY1u64tg4UYc7eJ8QeRRmPJZDdtbXYTKCVHj9cUygtvQimVeBds",
  "key12": "3htmbxSoXUXVmRQgdeBuZNj9TChS3d9GchFtDkhGyouVGQ4GvVhk47NfuZevrQKbSoJjicwL4u8ZTb3BifvMQZPe",
  "key13": "3b8byaWZ7gmVaEwtGnXQRL3f2A56J5LnieJeet9yHkpqKL5LK8Xya993cEx91FSgEizigWQdLevD3eGX6HJuLbqM",
  "key14": "5NtYgLQq6qUGT4uVDGMzsGWC4HHYmM9h9jJZPzLdPARCip49gSQYvQnbu8DEUQqNoCUxqh2tGMnYnvNdm6rb1FJo",
  "key15": "3jQgmhkLjvTffsLJ4ra6Ae8nt3mxyanPB15wKnGcBMYiyrXYV1rNY4BgpE6PaUuYUVy98Xyft3mKHnAadpAZV8dr",
  "key16": "5kgc4X9VyW9BiUxqjMb6QFVYjoudkRGvYLBcBLvAMz4ZPjPS3xkQw79iS5ojQcne9fU8qBj5PN79e8Pt4ktEiUfH",
  "key17": "4VpKkzK41hbuXhBBzZFpQthtswHcg6kfaQ7ZMimTg6eHj9nAe9dWANsJvX7tK1EV7vBkVG7krGRGV6WW9AWvgUN",
  "key18": "3Evamo7Rq2ki51ji42Y6Ba3dJbo18RJXUek4wZ92FnymjiXeK2qLKbVQsGnmGkpYNkSPbFHEyNtDRpSPtdD9oEzW",
  "key19": "2ZUPV9ig3vAXkToDyNhkR1PzaHowF8NmAh6ewqmFUY9T2RE9xdLGAFfvvLXXkWQeEggEgVmWMDLzpqsSLAkKVrSf",
  "key20": "57kfrztaGQQ228LauzwgLADEuy3z7MubRuz4UqUYRXAu6aMRPUp7JsQJeiA2K4mdr779q4BXNGw72R2VznFEccDh",
  "key21": "45jJ2qtRZmHKawaYGLamH8wXSoAjdiDNWYyof2pURyaefL4vHcCGTwK2oiyjRHjcDGfVkee7ghjJ5SvFD3P2MAuj",
  "key22": "3rFMbHK1W5EtxHqftQP7opw2vvYCuFUB5HKpAuZvEEx9XCUG6zEW4nKYbWp3Ni3X7yU8RW9xQ3jCZiycoFRJamtn",
  "key23": "2GFAX2AnuwfUpu7LgArqhr27U261WpTMQYpa2L7FtjsjLsYiEktBwwwocLtUYveWYbQKD5YJUyBDNe3mAcUYbYKw",
  "key24": "3sf16Ed9cAkt1p3pRjQMtmKS3jQB79KN9EssoB2eAHWsDctMDyHRhACrCNizSWhJpqsEWCkAUpu7ihEdqeCp9gXK",
  "key25": "5aJeuz23LQ8fq2q6d6p2XBd28VMuPioNobtwmFn1jzizNypG9Bj1bKY3TFCyXqffskRTraNWbhWwCknknD7ELYND",
  "key26": "2ptSJNT3VTFNpgiDkABazYXXKFkyh2XVP7hTpmGXTNydots1HicW5KNHhizXvBSkWLcABurMefXtptW3iJJw755K",
  "key27": "5ujLXnuch7UboFTpfuvJAtbiPdQMp7XRg54GuR93zMDw4EjK14JpyvzqZcRKH4EfBLSuzhHXrwoh1ejDb6BhyPQ2",
  "key28": "247qPmaoTrLcUjGLmFUhnNYMmu6fra2a6ywKyuk3GmvPKj5zEvEba4ATwem7t13bpkSYaKmkdCCb5AYG7s5YgABz"
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
