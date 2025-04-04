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
    "jYAbKJF1Dma3DkjKvh6TWD8pkMtuxiKq85TjabAL7c5MZFHfVWg4kHXWPqht4Z36qQDuVs4NrRnTGM4EEd1Xor6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHEaSTnEVyRFbfDvGGiHjGWQsFTkzaJGWaLgTipTxMRaQTKPFaqBHxjPFqqXRRMrAwtUZfDxV6dWm7bEvq8CB4n",
  "key1": "2t2uVMUDupBDFnAMKZYHY6yAqMFTCWX3yt4kaXGwJSNNMph3MC2X6mt6MYrhvx8KZJwFtJtFifarUJkcv6C5ceKe",
  "key2": "5buXmwjiMqdrUg4zaNP6sHan7F5h4bvUddCgXZkxrbCPpe2918iRCLjy7cRL5VC4MsYUVVWJxJLGTtLx2NEtGgDY",
  "key3": "2dZUE3DTdyp13xh4GNf7TT8P77kwYmkuz8ayjST3zCKMcsoxeg6y4ZT4qyr8sNjLPgZ53HoywBXdA5Rpi5twrJ85",
  "key4": "2Ji4QqWwqoupCSU6aNmH1BRoDWmVr8SHxmBUpH2nvXmpFgpyZPdyxioapwgiiQBYVu3okRiwruPFCQi6GMV98ih2",
  "key5": "4kp4HNVHgk2BDEXQoNvB4kx3H8c7hrpqCqWuNFEuTpozLcMxVwdj5FaZR73nwwPYX9Kkecx81zVsmsYhN31noGcq",
  "key6": "2A2Zmgi2Pcen2iyBm5fj4X7AkGvJ2TVNtvdEk9R44KmACAgCsSWCADs8N7cJRLBEiDCVdTco6r7ujybqW6gRbLor",
  "key7": "5GpnMubdwwm3FM59fKwYz3VfabErj3t5byMaeJ6LqsypVjr2rVk2qzNFKKk6wCiT1Jtx6bqgttYCZ67FZjythiAA",
  "key8": "5FgdAFhNwdevr3tMWNMozpMgp9h2YR1j1Ey2t6zT7Ge8zHDhqcgjfXXKas2xMZaC2xhtrN2ACygwaVZrBV3Kt366",
  "key9": "9x7tjqVMvi8yG6w6xKg9bkPxvJTWH7g6zmJ8xP5v8fxvWJezjuGEvDdTQ2Wms1UVuKrUGSEZTJM9Dh2gUcEtPt3",
  "key10": "2z7FkwfBHD6vznBj6snSPzKiyASKV6skAh9dCMATMMAQdktWRpcWJEmsvTwgBHEhbsp5jQ3eA8r2hB398dNCwquy",
  "key11": "5X8Zwv3XDmAvQKZzFr1s94LKeqoxMikWB3eQMYP3TNiNKfG83uydXrzrRRtCAoJF5H5LfAn1iHfTDxtB6D4v8DbD",
  "key12": "4XP4bXdAokJdQ6R7w29QqRf8Nm61eUPxy1Xyt6gqDswjB1X97doEqqw3T6SsTK8zZNdR3HD8eX2R2bggTxTt9WmW",
  "key13": "4Staqi9YMTMHLHKJggZpTau2bChrJCFD9pjDetxzJm4xmtsJptwDbnk7Q3xitB753dHe6y6GC6uprHquwo6ekmFc",
  "key14": "3hMR3GRTLwqwBW93txAukPFWPRVQSfZAP1cptieFrqoehHTRSvxtAduTSkMtNSvTce91GL2FqxzvwfCqVRxR8jb6",
  "key15": "5hH1QEQ8VZNhCxeod5GgBSb4HzwbvyJWNDK2R3Dbgc87g9tR2SGYteRg4ouErDkVvspCkGxytW1YWKiBaV3xpVUR",
  "key16": "3zn6ZbcK6GHr5vX5nDdkNPDKhfrh9BwYiKxr17f1uS5FP3XW8he49HcFafzF4AeUMkPtwWkLegPF1UQDFtEpQJGf",
  "key17": "52UFw9dGB7Q1GFgprh2bf6DBbADaBSFzARJp7dhAhq5ZJFSgWD9rYxnVHXhvPJb4ZQdVXA28zBLVQQ8W9iYvViZU",
  "key18": "5TKvz5AYDtR4JBcWfhCzHuncm6gJrffCpoRQ3UR4uGZhvWFUnFHgpbaJ26YjM1EeqRW8tAxZ5zuG6TVn2r6Wj6MA",
  "key19": "2NuaG5A9RiE66hN6597biKZXXhMLrqnoXBAf3hu9NoDjtpCQHvDnywrf8EFtu4QAb2zqCddR2CPcVGzthZfFBquL",
  "key20": "yzSP2rPoay53ijn43f9zLpfkJu8CuLXRiNHM4zGnVrynFn9R3XsRQyzDxpwG8c4XD51fX2Ppphc7vStshWNmufm",
  "key21": "49Gd8GDYr8tB9S3yLBkeNRUUugXAaWAWPkYTorr6pJV49dkZpR8A22vvs7FS5TXgbBx2jGc6eaGAFerUwanDMqBE",
  "key22": "4NXCkYhX6mZZHgyKYLXsZQrK1kYxgYT6iegd18EoK4PjNQX1Vaz7bigZWw82fHFpinXMdoPu615u1vnAvEvWHPUe",
  "key23": "53eWmV5zhPrRU7YvEiB9ZYy2tGHcLKj2jcTqgjddg8PbZVuYqramwP3F1WpeTK7Dg49qo9TWNmv4k34nunGpr9Mj",
  "key24": "WhMntnZfCD6i3AYgqcD18UdBafbxx1YKQRdoGTi5Mir1Z5XaMwFyFL7t9UtmGTet6WU3RkzVSbZCDi2wR7EfebD",
  "key25": "61DbtEC9NGnxWNjARZjtVBQrQbZJhXFnzvnNVGTybdnGtiE9DoDqWdkFpvG1wZqm5MhL3jeUTotgM87jzPvfnVrC",
  "key26": "4ZboHmsijyzwr6kvEq9ysPTnj6mxVng4DJ7mk2RPcs6RARuBCxbuooSPZeWoUjQNhUYKdqNsJAf2qNrXHpjtrBhV",
  "key27": "LVEya5ivmLyaqPyupVVLy6FBwW6JE7fXRPBtAESWWYJEvGh9eEbuuxhCdua6rFsY7v4tRUShWaVDdoRkkcpXR9w",
  "key28": "5YDwmhFBHdHnExd6AMmPmET2bvqUF1XUQ3ZUpsHWhqNc3bvJnabgN9WHHc5w7ug3jdg2dGa1MC5GtvyPTYSCXzKt",
  "key29": "4LnbNgz2jF3t8Xhxx4GEoGMP8Jh2t2AxHTNhcmDYR9d1cZAxq72bav8PwzY3sFKy8ozqxWezzEbQPmmCaTcm1VtZ",
  "key30": "62Z5zrTmaM8FvdEmrzPM3ZToQMWMTRNS5q9k6DZaiCcqEJ7ToE3t247Kh78v31PXcLytPpgXYrFjP8ypA8aDqkCi",
  "key31": "5tsYmdY4unUDJueccB4f73uy8Yn6sfqgXRXqnoNzs2uaMNbxNYm4C7gNGDsXh8N39RomVG16kgxCC9xHxovp1osy",
  "key32": "41ddEKyzSa2KhQtP9BALWK6NLPzwApWHBCec3CzeZpBFbmGscFkc4tJQYuuaU2G9xEUka3TyZnXnRwGyYsna9Nif",
  "key33": "4GWZBmiyQ9N2KSzQCsBRdSmSEkwBnzD55PFuS3kmwPqnSr4QDgaend21tHQhqUTQjCFz7VbD1UWvis1JYKsfeeuT",
  "key34": "4jtxobaGZsiQ4SocoqXDD6eWAW5uzMKivc2zPTsq8qecNfFvZWz11fmygpf28Kc1XYvWUs9ynRfnpefXL1mPjQLx",
  "key35": "3y75nPKccsVUQDvCLzNLahJTri7e9GbSh6bZJaM9fwnUXFMH6UQdf51sFP4LxY2RbYCk2NbXu1HSDNiazwWERr9i",
  "key36": "RoGfavaL8ceXmsx7oEuGhvr1vmhGJr5PcGyb9oCft2UG2wHdKwhdTft6mBwkocH3BtUasFCENXpjQhsU1YfmsgB"
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
