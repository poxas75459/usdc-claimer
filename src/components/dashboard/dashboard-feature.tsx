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
    "5EQWBJVm7FcsjPdDm6wkRgwyESJcGM18EjUeXBiGoDBe3z9Bi7Q42ES7yPL4nbAPs88HK9snwDFe9c8CY18pQFJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7g4Puqj9UhDM7Cy9hUc94W7d8U4oUVTpDCXHJovdNXeXvRwKCUDy2yKJXqK2K2RwYWmVPGKoD6M9g18AfDfjNi",
  "key1": "3PTXcMsx8gStbfSVt1Xr7SsXUP64yrSqnAifBBEVpw4aGAR7sWTEAJbYb8e8nZTpJ63ft5MpksZCaWSQHzvMKk7z",
  "key2": "5NXZDCj5jG4k8sGtgvBYpn61J2E4FBHzo8zeMNY2JoPJibMvfDzcuLY9WYXceDDnhk7KV8pk5gwcawPzEUbmRFKn",
  "key3": "4rc6np7FtRCLFoon3MeMD6wuQxUViKVk6NiyMAtPK4w3BFzN4o1TvZMoTqog5HhTBxxyjH8np6EihVHeZdXf4BgU",
  "key4": "c6T4hzoUPZo1aBqDBuZqCKStPhvHDwvJSzosmWNKNvtd1U6PEPfVXfxEXEdAYuYVframw2mPWhAC1B5njYPdZi2",
  "key5": "5uN2i1QAMDGdHR64AC1VKDsQn5BFz33QK8HaktuJFZYyiq9KYPhbXYuUkEvbftdFnwM8jig9kQqX9ZCN6iQBzkjw",
  "key6": "58CRcAehAbQw681c1YspHS5uvHonfiLdYmdrXmucXVtnCvaWN8KWBhQ6atsPFmWoUm5KVGoudvTDzcTW6kbP1BQk",
  "key7": "3kEdvECY2b6nUG79MtG6KtpkevUwBzveKtMU2spRbZ8J6jb3anHyV5JQYdFpk2z3WYAaauci1rcDQh2vmDPGZSin",
  "key8": "Gb856ySWAZKHdm8bsRfeoVL6Kh4bCaF6XV5fmGBKCw9MetrK5aquX37iCERq9C8xMQ3vXMLvHX8kpQ3YozVS211",
  "key9": "4r7A2zHBXJVvczfwkB2HXtvkqxqTeHbxPNG1bpUeh3Zvd4FZw1PSscfgR7HrHxZUkqaW5eeS3QQFHBA7veJR78Wg",
  "key10": "4kfaKG2DnmV1Eki5HVax1pfFhBooZuJUdh8jeM9xQ5mRMUFzmm7yg2P5nvQvnR85t9Cgkh7BYDXGsGzdhohyRVET",
  "key11": "3a3J4vt9yWYHG88139JaSqp4Fv6TwCbbjftWAa1VXbQ2yVFyvr1SX9owzQW3esDcJRGMbpBx75iyW6F5bUgkUaAf",
  "key12": "4gDENzANjdiYGrKuiSqbEiRgj3Ye8ouX5awuFeXntBDpynW328J3NPdParKQ57daE5rN2XfyiAtvQL9HeJzVtDqY",
  "key13": "4g9w3XUTkKGJg39xiDAKJWuiK7jt3nfxCkzjF8FcBeRkGySXFSxBLfWkaa99d2mhggPBsJrohbF4s1zEqqJuEpf4",
  "key14": "3U9hKU2NTCCF7E7bZ3mZ1STfhPqLd8zUXheCnP65HGNqwfDg92qeYH4BM6S2zXe7ATRLQw4viiZUMPU2cmdmEVFW",
  "key15": "3v5Y87xMhCQAAAmsMBJ4FJ8ozS8V8wFckkw7vjgd7jgr2VfVX4s5niKehtqQAkUdm2c8DbW7PqNGXEYjkhghpjeW",
  "key16": "5B2sc7Bf7on12xxHS5zTM2f4uhnUftpn4KmcCbyY5GjEwE5Fokymck3bHyNdqfhX2A7tSyWK1m7p6x7r5w9cSXiW",
  "key17": "CHoVUjj7ye3wwaAmP78VhLx9N1YUMvB6Lf1k8WGNKqPTkYd5QYjPs6evEZSPPYY4R9dmAJ3HJPuX4aoxeeu7Xdq",
  "key18": "5fpGvcX4ryAfzxKfyJKxbujmuYHtkXYkWRAvUTUEko2t4v4yv2UwQBtWsASttJESYrR6v5A4iBYoytGcPqZzXZZf",
  "key19": "48pFMwGrbduPtnegTiZg7Bog86PRJ9ycF4gpqUgdxBxHz4QF5qmA7PQYTTk97zB1pA94FXNDACD2wLk2MgodHdj5",
  "key20": "5xdq8sAX6rWcJVVtWVMLczno8ETQqY1sWq6g4ptrNN8rwNihx94xfqS6szL336By7Sm6YhPHxEWcCkLn6kfxztA9",
  "key21": "3MH6em16AEPm28TRWKPifah3zb5GArb5FqRFSgMrNSs4RAH7vb5zngLGgckynwturEPG24aWxF7VhP4FmTQ8z1HB",
  "key22": "5RfLoe6sGySZtpR6vGr5s24jMX87SECUVjfVhz5WKX8SoiouwtWJUMxAuNrMUrm3fh7FneySoizGsYrMV3wkaomb",
  "key23": "oHf6Cw3TUpQzdeN3hjwRwsHmJ59BSq6wMh9B2tdUptzpk45Zr85AESp22o6ghERHpub8EGFsj89ZKMxcvpFgT94",
  "key24": "PoK51dcXDo8SdM3qh2ioWSPUgmc14rCgSwSYhFUjM5DdQufs28vDsSExrjmR17XSiWbPsiSDU8XHf8FvP9jGkHC",
  "key25": "5kWfVfoNAG6J5fmAU7H5Xd73JFKnptahHzb2ZkFyz657LeJMrJXL1Mr8qkq1JC5sp416qUUrRkfp68RCQPfBKkum"
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
