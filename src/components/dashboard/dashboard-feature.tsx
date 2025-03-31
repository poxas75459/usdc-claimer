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
    "3MjJRfQh6bC79rmQd8CTV87bqZiMqyUeMCJ9dQj9G2RxUnTna1yF8fmWMZ1kgTvgKB9YMKsV6bycuLy6QcmxLoAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1su4RWtuf8S1nFSWVc2NUUdkhmUfQqMB6A7f9sS2ho2gBhrxMFcb3AcUHguSKaTVxFDWagvegzwQ6z2DZLGRaE",
  "key1": "4W1xoD71AYYdVejhScDBgq3X2VKrUJiKNVcpDUqsGX5qxUtXdDfHKXR7EdwwuvJbH5EnRZVwFThhNJ4b7fZmukNn",
  "key2": "94ay6gZ4yP7ovGf2VQTGEnZjKxGTetyLpFp1VrZH2gEX3LYyVsaT4cKysnVDFtKWoU2V1U4wrYt49X5uT3KbQFw",
  "key3": "2TfkmcVfCFzibkqoW7pk7ySxPNDNc5echXEsqYj6845XZFt8wX9qDdNLMnYjxLxNFD8y16FurGKYQU6eoMtnJGBf",
  "key4": "4cTzeZFUkfJUGhS7j9gSn3aEbfvtG5hGFxKi7hviop1RVuq2yij32wMvkRmo7oAXKbnSp2PWZPJ6dfajBMLjJKv6",
  "key5": "57FTGgzRrHWrytptsA1AaaRvo4kqeojUmM1eKXxrHyBsMu8HCvC6gDmD461zHB8cSnPSuCEh5qiAJq3S1JBDBwjQ",
  "key6": "222G1qGFLQuYYtD8VNriRp1eVcFt4vnb9tNv9dY4MnEUtUNYivP9b7zKxqgDEyNeX1e4Hm3qtgexjx4u3moGtLF9",
  "key7": "3JakNLsgP3LkqRqUASycMP6rPKFk79HDjk7sv79AdsJd17SD1YG4kJKye4QjjjvHwUZSinRzBxTfoHqxqfHg1Joy",
  "key8": "5LoGihbCJtN6xEWZEm1YDb25R3VoXV7b7JehmpxxK3u3Ei1u1Wh3FjSABpt9Fp4ndCv6ovVHLMCT4pfusEizRWvQ",
  "key9": "YcLd3LJLjh4c4WHxsTRnKV49Pxb5vV7hbkrjDJ9BKkV7D1qyHTMnw6Fpg6ajJS3uzLPQR4SVSP5KMATkDjFExbX",
  "key10": "3dyjEZcp2bo5umf2K8YUeKu6h4hJaJRTj8a1oqQJnRrevcrVAWaNoqcpW6rLVtN7g1H5rBNf6K2Hgjo1Vev4n4HV",
  "key11": "2VeYxij2shkLyEtSw1jb2ZY9hLaSNkUH6SjMDKPZLv16SAdBkpEUuX1zjvgYfVUK7gbUaECELbBokhkf7wjdQBVx",
  "key12": "4Wf4kbCLPyotvLT8Ds3n7CFnBwon47eNbNKZo2adnyNEa7CrHeFTF6KxwFJy3hpzLrkXQRVR6SAAyDvfocBByU6D",
  "key13": "5UkbGAHGsfJY3v9dBoJfRzXaPnm9tzZ4WEwk3DmbfWDEtexLvCTaK1BYkcxVoyJWESw2gK1Ddc9GfBz5DV7wXmuB",
  "key14": "3kzqKogrL6iPYo6fayjQtjVYvJoPRKKh7MWtGJn7KwURekh8RwGqbyw8ePxWXrpVVfC3RZWeWAWccLxeEGJMX25u",
  "key15": "5Y5qcJjo52oZqZK1SpuDndmwrw95rC6ciJUEwPV8AZ51y9w7qaWEkr3byJ7ePgoLV7KB8jLFagkuTsJn4k2ZBveq",
  "key16": "5qnXgZadE4UUTZ68thkAevNcDTr3rKRX5hb37UnzvUPZJM5H3wBAcFWVvPPHELM6aXyEcMwHtNi9sfjzSeZ3Lrrk",
  "key17": "2Qnow4HZxemfpxoxSGHRU51fiX2WsWLwpnmbRyH5dux626rWNdRFEiftgaBskmHAf3ahRX6GwwzxTTRd6Ef65vNe",
  "key18": "5Q1GwmvSvFDKKMtqSLvkVXu59YCc5aQH4yLh34qS3wLLP7Ry3atfiBX4b6wGbi3621srzQvxofWyRmottH2rfVWT",
  "key19": "49JzLxBsYnGFg2aCsLS95V9trQczQRvcdVMo9VUX46nBQp5zeD31qCyttHXHrLHQgMnu4LvVFaoogjtxibRx6Aw7",
  "key20": "2LKMgFUYqXi2itmKzdPzGL1mgSA2EYRordvTcnK1KVypvDGn4hn3q8yVSbXA5aAxgKk5wMybrCvdgkZasLXJYaNF",
  "key21": "5avGpBS8AyvLXcthpb9GHxHnhW5mjyFv349zQGeDmunKjY4Yu2NAMEvGuzmvun4ALT8zHqzYq6Pz7kVgvbiwVGQy",
  "key22": "3ukTwJ5akYUXwapNU7AjwaA3Ynnd6QY6iBWT7VShJzKELxvtrAphFy1Cg7Gct95T9b5ii4eHapfVSjW4STCXTdHo",
  "key23": "4w1yKPSUhvn1eVNcSP4hogrvoodNqN1sDu6M5Qy7r4TtkUcjBDC8v8XQ9bTt7Kpr6UfCf2ZfKK3gv8Cpxgo1y3k1",
  "key24": "36x67CEuS5k2WP1uK6ULZgXSc3aFjnV2DavpmkMXgREZLV9GMfHscdhrBUzKLgTC3E9xNFnZ6xc6VLLfMULNvLmM",
  "key25": "126fkrXdpKosV4tU1btRdBTA6JAmZ7bAczYPmBuaeTRKWaxjCMbyKfYiCNkBA7g18SC5UviF1J1kBj4yR8HpD5mV",
  "key26": "3ixcqVSVo8DDfcGuaCib71qwvEtJGgcPaqQMCmPJhykETaFVyWgyjgYSMdQ3GbFvCuoDVr8i3s6NeU5oNV1br5cv",
  "key27": "4dxPfyQnKRMZvdLVMY31Rx3en7idZZ1X3L6GrGbBrUkzsBS4jJB2kTb6TmSwCFCdt7xaYFeJ1ckhAUnex5paCv4n",
  "key28": "4pVNygHkD1w7wiAC6wxZoZePyWUDNUXfX9aSN3PM6Ka29YryCvh2Vvw2shg6WReCLqXWuHBGFdMfjc7fNiXikxBe"
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
