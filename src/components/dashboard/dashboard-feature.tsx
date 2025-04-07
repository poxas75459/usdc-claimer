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
    "44CEBkVVbd5MmtgGCXfyy9kU7tzNJbTTPcYT7p3GDwCMVcUYR5MAPpJGVnzBoVD7uACo6bMKfd4rzdp81QXwBBr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enrbwqAMsadJHP2LkeiuLZcXJxSHbVw5WYP9uKjehqcu3QRMmWbhcKKi4bkLReKGv6X1ybeNRceRKqUUQP7hCk9",
  "key1": "3qh3iPyCq2v4RLPnWtpBHjiJHkekYHTu755q7c8YHYDfvvP49qrtS82VcsKgthuhRoAS4QbFhwdY616REALrhHHs",
  "key2": "2TvimQQyff3yCm67FuSzFhjFQYTrgQafkqm49e3Ugr2maYg4HfrsFyDCGhros2zGqrV5CK4NEv3rCsuhMzW2C4PZ",
  "key3": "2emhR5M33vpgGz6e6qQfzgFKuVEmvhA8z8tfhNjMaVSx57KyRycniTzVTyZc8rnShKeS1kVSbP83F4ddcyyjEXYA",
  "key4": "4aQ5SJQSM5LUFgLjxdF3F7fD9vwmPa2e1fXdYyPyPmVXDc6tdEM7vGTuvCh2MEg3Pw6kiYdhnEQx4UTAvUskLp7f",
  "key5": "5Nvk3RGzQJHHPqt9ATMrhrgJGdfCJfuoE5KJ45BvfBzJZrUoebLPbxDbtm1GGc5FUDy3koLz8tjQvhTBhvMXYv53",
  "key6": "EVD1YVPkVAbgSanrNJVdr2YSepusAcdVK8jpC22mdhHeA5pN7babPmEz7A23LimDgq6JvM1D6WPUQiQKzunSC3X",
  "key7": "2UsJFEyrt876Z6K9uNDyeU6D2ZyyUZgmhaFPjAtPDazr61zVeUV4D3VJgSECehL4CsD2GiNaXxSLJxZaxDzVhRiy",
  "key8": "3GuyR6qRNiYtgjdyZPuZnrW8GLSHng5zRqt4g4injsLDC9PJDUpW3VEfeztPftmFfFt4r3R8c4y2mXqKL9RSif2B",
  "key9": "3Sb7JB4yxkwp9Shn6CMEEhisScgr2dYPrpjBr6MMvhvXH1csxwZsyhtFbwKcG8zUKwfz5d3HoFVzkHS4J3GnQTEc",
  "key10": "5VNnKsvLgubgT8xmXVDSceuVy2JZJ848oDez91PdJ2bMihoxqB85LrBnQeWLoy422EQuRnwXJgCjsgbhG6LuJzs6",
  "key11": "512ikREXA5xeHPm3y3kWthF9oARiuU8jUCNRZt4oi9hZvebVXpwWREE1tjDX91EBe2CkH3QgbEFd2MPouPY2nmDU",
  "key12": "45P6mVRRTugxdBRBwPCcssqq2ar7MfmtaHWfinELZXZ4dSxDj5oXF5A86Pm4xGBzyH4rhSi6hwc3FPgzjf5XDWKT",
  "key13": "eJSmP9XzuzLxA4QWZQ81HCkQfKUDMbykpeLufQSHVhG7EHcgninC9h7XqeVGysZvembEMDUwNcWVPKVYDZgQvJ1",
  "key14": "Mvi2mhBeLoQ1jxGCvUF2pJDgWLc5jKPaKeQTcKxG3yUuCYubC7E5qkoMcVxiPqYSuKf1adF8gNzFsTnw6E3Gtwn",
  "key15": "33eBeWbC5ZpPGp7EgDLvHrEc2xk8QK3R4wF6Vht68qVJ37HjPaAvEZkBsgEELoLims5YkbrBXkzsLe6ZuqM3FJUx",
  "key16": "2Sa1DomVZ3HdqecrHTijjFqqDJhP4icRE9jNkD2BoZD7sUTc7dPbobgR1dMCm1b9HF9Ye6i2py75oXEdjUsLk3ZW",
  "key17": "4UyjjVEtaLCu7k9386y5MbVd76Teb11vTossfe5Pcj59ehcrwex5am58qdQyvDdAZavKULA2U8kpb1igozeQgdhM",
  "key18": "5VKe3jvSY1CBbLm8fzrFQWuJtcbiUFQ4bEojGFDi5t4GfP3zrp1ii16Gf3dJQ956yFib3NBAS8Y5erQwJUNpreg8",
  "key19": "5tLiDQN15wdCu2kSDrq9bHK8YhNFDzP573nkX19Sx7adKgSRxvYmRLCmeJ7MkViDuM8LutwUBznjxF6JeMPCrG8h",
  "key20": "32sXzYHr2zezk3RKGRRSQfsoU8CSajXmM1deJAjrZrT7ZThxnerDBDXg2A4RCG9nWx616NYAKZSsoobWfz2Rp9p7",
  "key21": "3YAcLEUxdKU2BWnZBADzJFpzPdS6DeCdSzv4nSVFdnvnAZeivboTtjzq1bWWoGr4asaRCXAfso4HL697WsspcyzX",
  "key22": "jjeQrzqbTmtpP55J9wyqCAhYpvtvTUXhzgc5erby1TWoBpXkjEcZ7LwcuR3QDuySnVwS8DyQQj9txJdFXkE1Mm9",
  "key23": "3yrpAwsVhzLPyuGx5hMjPy9qQZoWz4xsa4AHQfRpZdx19E5gFSoxRdpFbuhVFq8xHYw4sxWNygTkEzWQ6KYkELFa",
  "key24": "4uEE88Tj1x9Q3rBmWrkmS3JTpLVQgNtHv69GJMDexhhWbhLzYCJwbhmxtNY9Qi94U2K16Z73JJ6Kcj7ffq6sEZ2h",
  "key25": "RYy5MjURLcYT4NjSht4Lvy4CMYhbGHXqaFSVFHd5gjQPRf2AxKER3mYyB7gpcQdgutRixqbfveYCKrRtugQSsUB",
  "key26": "fSboNF8GdxDmBKZfbV5VbUd2Yz9okPaahdSFt9J77YBsAXAC5s9v71s25X5QRDU6GV158LBd4CosgmJZkgaAXug",
  "key27": "2kDJZJKvvF9ageUGJDx3yF1MH4dJyp4p9qveGzSmpiHLAsoRfYv7fT7SA9WYYLyaZLztg7CtEjfkLeATrYu23vXp",
  "key28": "5cHmaaxXkgSS2QnX79dAoMM4HCvX4SD68RmPtq5Pzngp7mDPzX2Ssx6LaJnFn4NPfeRsfMd7LAPe4hzxdawuhpez",
  "key29": "jF5AveGmngFWxsoTFjmU8tEWiXr6YuYvkGjKUMveykntiFo4XVDxYqHqaq5uveGE2AefQV9WS1kDwAchWSFzxrC",
  "key30": "3RLZAcaSTBWgFojrb5KfRYWziFJTx5SUPPSVjrCqu5NH9bf3cciCh4CfpaF8H4SeL6pkqcc22VFzPub6Jo1hwNjC",
  "key31": "4HVPGzHifoLSchgsjFr2uaebXezBk7e7sSau2oxhoFh9RoY4TCozA2a7KWcsWmdNKRKvfzwWTFisEYoy2JfXd7X6",
  "key32": "5MP6NvVJsMp8zKxsDBprYYPm7KCuSgcqZzJchXkqhNaFPCywHhB7ZV4hW89V6e6R7oXNcsuvpu8QDRXLc258HWfx",
  "key33": "4afc6zoRCyxAnXeNEtvrpZSjeW1pVt6oQaDa2hPgoqRh4wQrYntabiv4pNpRPQ9g7G3D2JWhnQuwPeWoG8iEFp1c",
  "key34": "3tGUSXSwQB1V9GgfajS6ziqwjZvreewiQFGvMBnQ6Tw54W1D4fEZf5g3ARUnEcZZGshEnNjH4oiYSMtU9bKZsCXs",
  "key35": "3y64P2GDKakmErit3snCf5AxahHDx4FGXhWkhdjuQAD7McgSuEQNpzMw7wH9x7mot2wJaLqPNrPNbyQpmy3vLSqp",
  "key36": "3DfyMb36ZsfmDJtGpSzSNTmDbng4r5WBi43MA6AcrV5WeZvUn1mxRUsvToxqmoBVETV2J3Q25yALTv32kZj6LsZb",
  "key37": "5SdbRnFtPKvCudEZTZEJ2nRjSZqfXREqUNmaiDpZjMZq8uZpLgqVrBcQvSiGHmy74hgGTFCXg6ywLFDTSMzFGGgo",
  "key38": "dbcrrhzS2vxAcUEFzeEUctTCEs8emSq8jMZthYG8fkNWdmsgK5pLyLoCVSKahvniuos5S4bSm5HoSiMdSk3RioC",
  "key39": "36Zx3oLw2fiG3vJH8pVvk1ReR127b5ceA2jNEApUkYCZxjPLacWTegRK2y3Vy6kthF5sHdsKCj1AX3sAcoT68Ynu",
  "key40": "3PV7gUdcoRdMpJH6rkxjNxCAgd9UzoRawHjLK2VMvCvUV2pKHuB25iPHyp4w678HbXRxHAvekHPFGWbc61bAECV5",
  "key41": "5Sf8Fgu1GMXCN3EHLxGo2pyYWnVAoRypNdtYBFSfqb41YD4qVkWuiAGTpoX78CQ9fXkWZ1G1T4EzPBQq98s97xMw",
  "key42": "3Fez7KFQSCePoUqHP5ZsXu71QWZxb4qqXHrZYNfHgawquGhQDehCnavZqjkt2opLUwgn8d7Kp1jy86g1tyB6R2ue"
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
