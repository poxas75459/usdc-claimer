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
    "3kYCgdx2MFRe8SZgsShKtt4AR6uztDeoqVZ64vHUmPzbz1gYEJmnQZe7DJrEpzWcqJKMfNbUhDr6bpYhdygLuvTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRHfGFduUknC2vRCgVP469tZriqyFT8A9Rg3fg75iAa4TT3zQatFEEGLGKvmMLdcMAYbKjPA3NVoZpVQ2d7dHhc",
  "key1": "4BrUJreKDPjhe8FjDeYUAnfHnpyMHEWzivK4FjsbwHpoKNjvnRsn4sJGSBm6aJ1ALhNwQzWaFpwoVM4PQ3bNvwTo",
  "key2": "66DNdxga8iyf31zzHiWXR1UFLB7FMMXuBsA3ey2kcQf6xRazjgrPyf5aJn8USQT5XxuxUp1ZNctVxxeMqyvjGZ62",
  "key3": "2rAJVjRbM6ZNUQY2zLhoigdWn5oStLi278iSw9fJgSvaWAagbiUsiyhX3rxVDcBUT2UyX12YQANPPemTVJNtbFX3",
  "key4": "67F2jaAspzT1XgHwB1apZ1u4KYw9d978bhXUXHNsZFSWXziTRgCLBWFg4jWHrSYNYeb456ajSokyfu9Q5imcyW96",
  "key5": "3dDkCLww39pMZZtWtzstDMhd2LLsKv6TFsWCtDvV6ygPS8xFVt7ovbfDcn263LBU2TD5t3V9Zv1vAaJZpmv6HF46",
  "key6": "66VnoNYi7xg9iTcWigeW9mG5xsBq15bkBud8ATaDnLaWWBboSLt52gMt6yq5xN5aiyY7zPzuvx3MS48nUAggnQ8Z",
  "key7": "33yh8jbQPetzFYMhUUQimnX2VVkmRuZ3tZFdjg9sPxkbMtR6QRQKXW7UrAWdmEtiYUWMntrfEs2oA96WGA9XvmWG",
  "key8": "4LEP2vSrWABCTSkhaLXQP1thE7bvfSZj8V6W8NWTPkZvEyMqQM15bMtrXhPMKczD6s4KiLy3LLWNB1Dp6Zjwk7oC",
  "key9": "5xfLLHoo9DQPzMJ45LAMaPru6gu74jYGjK3JTZiRKNxF74uVycqMZyY3EhjdQGie16QpQE1ghDWeVePzNfoLY8BP",
  "key10": "7iiC6XP8XYbS885V1raiA9ECWwTsgLYuAnKQqfT1araFpSG4hqnMYzDFuZQLQEbJytHspxdiUcTv8V3kT48X3D8",
  "key11": "5zkr8RqGiqp6zigognHUBrrXGKFkKTe9aLFk8mNdG2iz69g8vWDFTbD1BeqvdPyVqLk8vazKwZnQ3s81bD5nka8e",
  "key12": "5HbsNsbV4qt7cCXT56QYzb7L78Mc4PLpxYzpd6zWHdXfu5V8KHfsxUeo68skrdxec3VNdP7RsZRHUc52CTvaKJHu",
  "key13": "XYM1CTfu8aKqJd4s5EWEBCj2qciCheHBqtfAc6EgYuNhmmoXC1HWWhCPTbK9v7behiQ43owZejCmR9M9AuRkPB1",
  "key14": "3iTaRLngKzW1RcFzZgpuTKAnFT8pMod9z59nnSmEAnAxm12KJBAqbd6HVENWN7nb8bLRBVsfZQxWuQf2FSGT4tuH",
  "key15": "pu7nNijp48G6xTwoikGzDKhp9YASJNHPCGaobrgZqtkxcXjeG6KedJVduchZsb363iB3qnPqMTj27nMtMe5EL12",
  "key16": "5XX1mcH2Y5cKUaWADFe1UPrURNxgYCudrgNjpqdbBNb2VCqeh21pbpB3yXTMDax2Zsk5rAs7nZkZKvP7F3j5K8Yv",
  "key17": "fAV36StayPX8ka3fy8Gh9TMJaWrCrAzeCidWFAFaHFesr9BtqP8sKNVbrRco2NTDgxXhjyeBGdmLnMenYM5iDux",
  "key18": "vkGYcRN7UoCT7G5zJy4M7i1GVV8JkkAWwv8GfgEJemchKHndjDSRgwFGWtwUXoqT9VZog4dzdZ9X9nFr8645ycE",
  "key19": "usF563jGuGFrpt6VmiZhmEtoyzzcjSr6DpVgVJ646foN2RE6XY9Da2zbzCyYmUJCLk5zoHsb1FQC4Pa7VvbT3EX",
  "key20": "2jiRaJ9Y5GJktSSGKidyzkN83ShkiJqomYxcCvmFHUpT1VYRdZmZpjmP6z3LiHueVhstZameNWUhmFvYbCn5Jtrm",
  "key21": "4rsQvBKn57WbgPPEQ5Befho6udWhmR9Cgc7reQwYFMSzpCMitViQovkYNcRQBvQ8eCYhGt6QoCjb8hDQT8KhmDq",
  "key22": "5MqZKNVj42eL7WySh5fMiT4tGrNfQGwBqaJ64DaVCT2nfaBUWmQ18gJZUASzyb3QQbmWQvbfwXCJL9KPxCrZtWPd",
  "key23": "2R8zKWqUkuftu2gjXwjyaGFZB1EoooDPvxJrRzN67MqWM4kh6C8RqBNL4FvKi9J37VWyuFk7qNZ6axnhzj5gx817",
  "key24": "FyKzFAsTiVAT6q1jhjApCURAycXfexmeDFrz8oJLKvDQNG1dMyFZ6qeSqTojVx6Noh1nYEDLPRcUGj7E3DdfUqy",
  "key25": "2S7yUv9a51dyR8LT2q8hjHZoPWD1W2AoytUfbT6ViEu13wBSKDpUcy4jTKfvk6LGBthfPqLdvwdfGVUQiWhJqWsy",
  "key26": "4G51EZoFPWPtX2TNUUmoMTqX3MvNXRGC9wvHLVPAv467Hx7iHEuNNrK4tfyD22RR5EEacDzbscMdgFbRv52E7sUb",
  "key27": "38kmShdLpgDaiC86TvoNLro5g2rKk5Su78pUYwo1mfeNnE9vXyC4vJZxta6sfQen4bsRp5DcQBywSLtpNKEiZsQ6",
  "key28": "4XHYPJ4JR195xgxSiV1KVkX475Sn8eWULm7PqWjtmKd4B1ion3L4FDHQnpg4G67zrgtq65JrsWJ82AKFJNXG6wZE",
  "key29": "4JCiMwcfE28PrMDkPp5ASCrdB6EsGDmwW7wpRxPaWCdrtRuDJysCzaqGRUkN5dV3zcr9pnwmvUTfsRgwPrsG8nFm",
  "key30": "3N6C1EEioeDGz66jSAwxVU1eZKjw3gAGuSR8VpkKZissRk2XyFKcJ7bESgZVdUgwtGRPfM7EsPb24QvWemk9hfay",
  "key31": "asCCdsSQQ4MLXVpes2hc6VPxfAWDoY7k3MsJiPdGU5C5yuNCihKW9C4zx1ErgLasxWQnZT2x7X7rdYNuAqH6U6k",
  "key32": "3N6Z8vF9UGaycnfMGLxkMPRDe4mcyk7T7QzS4anyaQ9QMshWMnJUWiqeWdu8f1giRWruCk64Aodv2dPSL2zynqDh",
  "key33": "2YghVcZTRcZxdtaSrCiqRo9W3Vz62TWJ2VvaEY2GawxAVwMrKpctit4kfdXgf45ytn7pedKZJM29t6SKLNeiJfGp",
  "key34": "2fERXvNDdnXjiSmQC2JV4JWaKfEcKadALPEL6g6MGRTtMVCTULDLhv142XBDUCY8uQqWvwW2BbN71Chf6AKnwnPB"
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
