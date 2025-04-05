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
    "UgkmzuoFj9PrdCmmDcPvpjQXgmnvFs1SWZAgpHNJhHT5AohyqEgVqJiHrNJdgbPbs1ZcJGQizwT2m9KFHxfRa5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qJ5qdzmZkv9QsJVxgPjy3s67BDXQP73YfSGGTs3dEZVG6nmiurxVm73P8B8ywVfNZJFewZVfTeBN8SE575X3iyD",
  "key1": "21TY7mzJ6gjNKfTL2hiATAkwRUv1wso6f9xYve3Nq1NoKs5TWLN8b7B87DK6B3Dk3GvnvHCNoinUmSxZF2LJL2Ra",
  "key2": "6grFxm1u4ak9pZTHnv52thydmX39BCSkWRX6P1RFMgqaCJf25utyAGG8tXeTymmFKWcCF4r7fjJBqLkYTfhxpWx",
  "key3": "bH8kZoqMKGMravVkMQnQfLLMCf5UWnXuowdXg7shNMxACska1f9Rvq4dSZsR45XHUYc985d86hWkiMtUJnbsUvt",
  "key4": "5y89joQCzBM52YNfc9vPpjhcrZUdYsLc1HiTrUiNVP9GxNLMGPYTPxTsuidmQHrJ1mskF1M7XutEb6qSgYLec8d1",
  "key5": "2oqgarcbjknrB6K8Uu2FusN8FVrsDiiMrFNDUjgXctzro2tyUcjPDXhDvpmuyez7TcvoZt1kh8LQYA7PUj3iLfcq",
  "key6": "2d5SjZ5B6A3wfrLqBDS6iC4fmKX2Bo9VqScdYPqS5y5FZRJwf64wKUPiCoCTZfKCGpKsNkohtW4nqFtCZsubys2k",
  "key7": "4WNFDYi3GD5MfQwXpgHp38UdCKyeGfyHsHYUhrAgURNQSx24SM8S2p6ksh46tChBY5g6TErf4UW97FLVKjWfEPA1",
  "key8": "5deA1Tow3VnvSf8zNwxKPW4Z3BWNYfTkAmBwTy48H59nFcbwuWkGFCzb9C2HAmANcixbh633qCwX9vi9ZSvBPX87",
  "key9": "3WvvXmmSKx2YCx3GYUT9qh2Z2CGeoTEHWWrRiGcNiEqv3ayr7KxFoT6r36mCKi3S4Vee7gFCtrnwHkAKYEpBuc4A",
  "key10": "655EFUSoHmVBT2qgx5dyk8zYPt2dFu8UVoEZQWdJvUvZ4p6ouymEN7bjUdMk2XbGp4YUcZhxYR2Ez8v5q1nubBsP",
  "key11": "CbgH75nbaXmHVnkKFjLk2opxHTV4gVPPpEabxq1oBJkhHbM9nSouxgVaAE66PSWFUjrzXqxjZZaC7TgpnXby9n4",
  "key12": "23ZdeDumStzDSMXweYSZqXqtpkPvVpsvAzejPTJYCvUBcCXSByeEwaTxcLQBRP2NakcZ5TjvCsGFy47F9u89j1rj",
  "key13": "62a2n6JdYSeZrP4Fg2MBand7gcAqoDAPDPKGSSWTh3JXG9ae1fgQkamCGwt3wTRbb14HDq8a4qfJpyimHAN3FEmP",
  "key14": "5GfB9WuyCta8mLk1BedJa48qx4Ac9dW9qaBd6BWgF9xaSypwQLKniMkgyN2kpGyCaxeZoZb1NH1VqCz31Lj3YRUF",
  "key15": "ZhQdYmfGF4MGxWBTtgv1xU9F11rYcj9UTp6yBqXUMWfCHgG2uhz7nAcLP5s5pHXE6yuLEJgXovfuVWRBhhYE9wd",
  "key16": "C3bVkjGhTx631WZXvzffaoJXbukEuVJ2xgey87vqARB6xyz1eryk9wLy6NBekzhHaqNqXhhrCMuCSNozkYf8QAF",
  "key17": "2D5EDgYXmw5butKzHf8Rik4va24TrPjPChvVyLa8NmMBrpfZJxtVwPfsa31MQGw5qePyMz8vzd6dPHF3U5buJNa5",
  "key18": "285AuZuo1KSDoc4xgFvgeA3kSTzCXUV8kjvwpNPVKaMHmQpwqEjRgxCtwJDLwNRynSVXGhmHTmEZvLhtPFZtjUb7",
  "key19": "3TaiZkk5rgvEHhc9kDjRz9ceF89QypXmWgsu2oxkd4LBzjLJAN6SMdDK5rn1ettnhAHQ1mXpDRVds1JcnVKF7oJc",
  "key20": "22x6o4WFfs3wRQsnydSszN3M7pb5MH2kWtoHn2G1chQ1TwERVRh6sZaW4aKNVce7zC9H2miNPzyQrJp9pFHRu8Wg",
  "key21": "4vEhFTyvSJYhZtJhAW4Wx54cNyitEJLZrVW7hRSMAd81vbvaapD5mtkbtnH3k5BzTYCncJLX2J8sZTzGAzfADah5",
  "key22": "4B3tG5dSRUuoycC8JSy5d3DqwhdTbT4BDAt5AEX2RfQTi8D4GFp7KEZZ7ohRwzFGMUhpwLEDGxftzSwbBfdoUWok",
  "key23": "48DxdCLFcrBvt8FsYFcpMgaKRN49sny2cKfTnbnwYzGe7qttr3qtRSMYNs7k3KtQ6b3uynwJQrY7jMyGjY3emmaH",
  "key24": "265VVC1a3Vpxdp2mJnTHVX4uYGp17k7oiJXP5tkTRz9gBb6JAfHowRVvt1F62GC9gcttJkwJRdcgCWMaEqAgx4F3",
  "key25": "2vo8QW7cXE2YAqih56snmn46cwMbGv7GEF35VJw721khGRkzQAK3HhXnSozzMSK7Q5pCMo1GtbPHyLxuevMjJ8VR",
  "key26": "4dBBogdWQCuL1jXR4DEuuj2P97ZfB6S5sg6FycoGrcmRrogMwUccfysvJgmoaEPES9RxLHvZH2MMUnJRb93rsZy7",
  "key27": "BAi5w6L1W7WrUrRKfDLEiyzr3BhUGs1qKa78LamnEvmP6pwfcrP9WPYxxNq7hwnvzHejPbYwJTRUdUhV6uCQvwx",
  "key28": "3j7JCqwzJSqPFc5KrwQgS45fMZLnbjtHWnBD2mfeschA2SCmLq8dWHPvm9MctaM5C2StLRyknAFL2twtr5fBUufm",
  "key29": "37aSrHzFJ6VqgvX2D7aWgDrn8bvRAhAuEMTowco3aJzKR27ZveKe1boKNyxKy7Nktc3rJgpTzgENvFvGAiu3APxi",
  "key30": "4vBLzQMTJdq3zou9HyHkdk75tYFXb2GBLfGr35XYQTD8m29mpcAnu5MM8xpHs5MMZrLqL1vDqs4JwKKAmRk53pi3",
  "key31": "5jJBai9M7hL4aUYAo7Pw3DkkC6jGFvQcgHK6diKLNh8DFYR6Y3NvqwDYNxhwnSDTPjsdm83zQm9y5wbfMDV3sew5",
  "key32": "5pFezczgnAUHPZxKCuASdHL9Vj6sUB8ok36qJimB5YZwVP3XqV97Ni2egVLmgQtgPP2DrSQ2Sbdw2vgeEvBxJPSE",
  "key33": "3eAXdnGb2wQzupD5dryvVmnpoHWBMZeMYEbSg9D79ngYLRHQwEkZrdrEdPJMWKzsajzQGmLndfD1sAgrnmTFjpdg",
  "key34": "41WmMK8B5NPw2cq5cM5cNUsYWKxUTn92jumyAtiaLqNigP6MFLPUX4uzr3ourKUrvWqvJatu4yq6RhhcNKfcee5d",
  "key35": "5oQR52PAiW4M5gfNzBF3TvQsS4UqLF9XWosRCGkjdLSiBm6ciyNWTdAmrJ3i7qZo5yNiMpZP4AXsinhqENVENGin"
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
