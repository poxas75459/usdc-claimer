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
    "3vYhZh9UzbgjUwQcW3b4SWKUEosEWtrLBdA6EcTTPJj2td3WKy1cDKjcot7xrxTdkHXUEr77wmbnZs7dHWmmJCxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BY6yyphETog3gNBmxAKo6imsSJC8AHbcaqRfCUSeUa815emuSbBysJ4nDfnizBh32JNb7gchhfpGLJfpxa8bDTX",
  "key1": "5e2BR9GkuoYRGWkQaPLf3qkPCsZSwfenK9z2X62GuKLnLBF46SXsJAzAHSPE2V8BytsHrSDBZmhXm5jmoRmXqEtH",
  "key2": "2sDUZF3CLC6AM3WiCFCjLkhFutbbXHWtwpNaAKniQXdRE3u8JtjDYPo8vc6rw1i97tkoiTZ4ZfV878h1ncGePpon",
  "key3": "2s2BwQD3S4BDUPwQFSCC1QCGvtn5w7TXAR2eQcN4Y17TivJ4Di9M5E6gQdkkLY8dMVCjAVtEEhb5nEESUVtXJLEF",
  "key4": "XQU226mfVC884mcnKXFv6yZt2mr851kvZ8XFcrd9WUK1AJGmA4zFbWmUbShXE1nL2k5n7Qp3gtABfJn5nA1oJw4",
  "key5": "Pixz9aiAycQ5PuvLP3QZmC5thRN43GUqKmir7hQyqSLtPzWo2gFwRo87cRpENtDH7p4N8ZKUinGo7ww8hu97RMQ",
  "key6": "FSd1H8PoA7PPGKQWkv5yWpiHved2L4jrYLisA8165DHcimX5jbaexeLBJY8ugZGnT3bDCgf7o6JyqdH4ihd27Tm",
  "key7": "5zjsueobsAdPQDW2Tn8Ebx89KzQBFR93afiH5UyXVaw7NBZAK9KTpGUXeBNfEtERB3BcEQLF4WXSZa92phtXf2V2",
  "key8": "2hh1S8L7gPK3M3J2yTAd32nQEoEcymwuKw2r2w34eHZVsCTWcC1YRHTfMH3em9JEjwnYS2Lnwa51U9BUgHSQSttj",
  "key9": "FUe7UUDrhohLwcwJKQmbCzDVyTHqQGqNpkMeaGuyQe1mg7xeSEx3b5FxqQ7DAQLkumeqij63kKKLBy5gKpAvpBu",
  "key10": "2T2inGpPNA929bA9amacc57CauqFaYbXYFow7Q2qXYtdK3SN5DFF6cPLkqHHPc84nhGizSkWU1f753wgxAbeUNYM",
  "key11": "3cAhaLFvHARbACRoYpSdZNB1WNeQGEuGcPwBkKGLXUZEvtucW2Xz9Ko9XAQdCMWhciW1tkQZE83LmjpgCujBoyZJ",
  "key12": "jUCgEhKxxg1u1wwzYFCjE57KcRpc9oCjksJfyJvVxV4PjyEj59n7cSyTXkEkgdY983YMHdYAAvoaUZEHN5ZCo5y",
  "key13": "8XVqsnTpUChgWxupSDwwDY4BrFcrxMW1ENKSxFuewqkjqARnFUxjUen1AwkuAmaeoFNtdyBfkX3Wb3Hj9UuFEDK",
  "key14": "5xkjaPmwmR3BiHB8wHxEU5oNNgzY2kyTrMngEWecat8KhbGcXhk1S9C4eWJFL1Ry9WGkrJcjHadaWsKBJhyXcHb7",
  "key15": "kb6kAmUWoPbY7tHboLxQ5zp6i35AhyzyQAw3ZSxxcHKfU3ri9vpT2MSuWz1Gcmi1V2jHAuMroUmJXJi7ahUYP8H",
  "key16": "2kneVKPLRtCHHP4m36SAorCtcgRvNs53zrrKh5dWzQW3D5PBjw5dUr1bRU3JnfqvEq84yPpuFKaQPp58Kyp2SzKy",
  "key17": "2x3kuaRAkGcgqHCNyvbS3ofP9x4adU3vdiPNjfVdXwWZiHXH36fLu457dHRKwnb2cBYUAqqjGQdTjH2SuLXHUZhg",
  "key18": "46dwEqcybvMmtv5o7AvSJHgMtUNBJXVaghqtsmdeHEpHcc4Gy9hiNB3PCdenTRQWUDWDQ696ReWLL7tJsJG6bRWN",
  "key19": "4XU7jYUdHaFVH9R4B1kzUNTC31VLCiA28iaRmRwH1XVJxZQPWq78tGsmfEW4tX1yayCKjc8efgV296K447tC3sjc",
  "key20": "6Mb96g3sKSk1yJ8KBdM8GzYZG6x3sJzpggXSFYQwkga8TzzmLiUAM4qJDajnAN4htyZNR2Uf6eH5QYF8omT3ND7",
  "key21": "2qBpHE2GdsJJounZiX9fEheGdMPW8sgsRqkzhrMZfTMMHtnmLnx4JupwRrGgf7Ki4sJ73j8jLsW9qj9w44MWy7Ze",
  "key22": "5MmYKdK2sZodswdF2bnqJbTEarHV4T9iN77M9kzinfKcamb5rcVnV4HSQrHuuXV2b4af2j77DG2QQ2Ue1SNMG3P2",
  "key23": "4Qf3k1eJiKEEhhi17trcPCL5vvhij71nGDcaaEVvLeg8js8vGzovnWeDTx2Lgz5TC2E9VVBMmMsnL8LRhmwPJUXy",
  "key24": "5ysN2SqXFczzzRBLqG3nJSg8SxugHLCuBGS9GqzncGxf14JEzRKzXMTwgjWz4RsubGXjZvxeQsDXi2uEDU4dpSeC",
  "key25": "Di5RkUuck1q2mW3SuvYCFSVDfQcsnkcyokyvuWdZdCiD6hS2tyYtknjQ9EqSJ4TcFwDniuL6x34amgAz3YEpew9",
  "key26": "5UQYx5jnJDsEAVfWAkWxx1K4QMWcwymXuG2dfh5ADHTHhQunkGUVRy9CbVyY8zhJbFcbGQGWammzK24HGcgYFyCe",
  "key27": "fi9hSTdNSb7YnyJSEFUJoYrhcmr3DQDX1XXMEPTiV8qP6xJn8boBpSsqN13nW5egtyNtXriKQbq5ySvheaeqJA1",
  "key28": "4eoZGQkyUL8Ds28VER2t4JnbnuXsD81ZtLdpuEopNUoHnUrQjeY9EtKG5KXHRuphrKJrpPZHLZRoDDvtbxcuKvBq",
  "key29": "4nVPtKGaJTkmkeX64kTEhPoAw22WEhudb446rEpcCQkNJpuRULhzX2UCma2mMR9vNJ42k9TuwsvJ7hC5AuTxewEf",
  "key30": "58Nx692JZFZaieJL6qKazdiSgFpty2LFV17TSPBSusggZNQ4CqSEinrCtsP56jYSkyz39DqPtj9DfgG3M3sMHdtp",
  "key31": "5sowZS8YbEDzjK1tfFwT83HjMmaMjdJ89fBAWhu57jWpvnPeP3nGoq5o4wewo8nYdqfGopMQcTH3Vv2hnuVuEXFD",
  "key32": "3QHRdikNNcXE5dXhD3gxRDiV7oZMCZwvFgXoid9pzPSHEC1cdNAcznuX4kx6QRdZnro3JdnBsNrjQyGvoCYsV2iL",
  "key33": "2mqTcE8Ts7zCXp3xht1PeFtagujcYPotvsYdAC2jqA7rQviqyT74fAQVaWD1MPhZbkCcwUhdPiLYSKfwRe3euhar",
  "key34": "4RKstVpXvDykwJGUpxZoTr9nEG6FTdKM9e2ArHANMbL7k9KKwG7NARdBUhmPNf6pd2TrNdA1BYYykan6nZyuyydv",
  "key35": "2bq7XntQZVY9VBK8pW5qUK4wk6kc5fcHs1dq4t86CetDV2yxxfAvA77BdokqHPFjpK43aXGvoUzfeZ7zjFfxJBS9",
  "key36": "SRnbsfQGX1cPFA9WudegvuBYWxNxKxowFFtXZ9uRDuigxCNuuJUSFra2qhY2s8if9k9MTwXPzoBLC75iXioaT97",
  "key37": "uWZPtpivQcnDwSQ2r4N8cURs8ZjBwLsBBm6mpET2ej4r3HFzjcEL1d45E5BZ8Fmd4L7FBNEgkuZQQ2a7ViT3qBV",
  "key38": "2WnPoP97ck5vwcaruEjY9v585e86vmkQc1svU1B1wRF698BiGk9wiPNMNtxUGrDiPFNp5zjE2c3rmYYCDc7fMuxY",
  "key39": "24admLqqUHdse4S1xyD99qoufDTK5n9qi9MUt4sTVsE9k66VQt6ypv1iRFh4mVq3CjYH4Usw6qdKHAz4ovYZWKCG",
  "key40": "5CmjaC8fwgWQXBB7NiLKqu18veD9KZq9j65djLsoyJTx8XzeGPqMqVGg9pnsbrHWbw8CANPnv6BkwCsiNZTnvxDw",
  "key41": "3xvMpcwMy5ahn3mdBNC8ebZhXtPxWFTSKAhGb8NqpQFzU4btcTeayjQEzMZ4MU6Jix42VLHmZwhFGTveiEQjE1Zv",
  "key42": "4iDwj4wr1HWwd2fkaA8KT19JokxP6XZAGsDRGDGorZRiCD2qGYGNhixWU3ucT3cvdEHU6k3enyNJ5MzGzcw584gR",
  "key43": "45WxcLfaSqERQ3TAATDGppfMWomoncmVMEupFDMmaFY4bKtR5ExAbkdhqYaX9qSSVX5L2NxCvwtqxYWaKeNQwrL8",
  "key44": "3TCd4jVkwYXheBUK3o42QjQY4WxwaTVsJKi4Cqbqi2Xazk8gPzQpGKx4j15UuPPHW9fYRB9ET9xXAR55Yr4vdW6R"
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
