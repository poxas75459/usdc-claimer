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
    "nvdmCH5m7f3aN7mxW7vY18w8nzLRutSfHCmD8n4gwsTTiCq4vt5nWs7c6JrCEiit4NF2zstbWuD7zGw9WrX3W4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtD4sJu9Y26q7a2e5QzqwMcJihdcpMjeffNeoLsgwhpCRjF7SRgsu83fARzGRA57C6DwCPR66NrfrU7SttaH4KZ",
  "key1": "47geLktwHThis7RC2P55NMyAPfWKEanFsfkymYn2VYRtczZ4yfdSAqr8wvsop2iEAmVpdyxqCtYSgar3sjJSTWwk",
  "key2": "4GHRKSA5AEoq9F3LYLtwLvUrUXT4VWM6mz4867w9tCywHueCotF4kczfgrG2zfTM7d6RyHmSSDit9vUMPpHKcVct",
  "key3": "2dgdRDer6Rhx5N6NZMrUGh38PncdeYjh5oY2mBCHrwcszezovLYznQMNESqigxsCeNKLKbVoRPwPQYjxVbjSi8hs",
  "key4": "5JvMHctDCpaKr8TnuTmNiWtTZ5WX8cPDywgQFKY5SD3dPwB4zLGRBMooZTnNKmtJmfzJKpwqUQ7j1Y7j58uk2ofe",
  "key5": "tVp3A51v2o3r6PWuomiGSy9KhcTadHj8qqb4v6xpiob4xnMwF2LKT59usLyUbfkjqUdkZQHnD4MBK4PagGVNf57",
  "key6": "24K4PABRmUZyrvkLQTq5AnXmjmwaZ7vQHZWfLzFT7JnevTVbwZrbXmQMBPhWKZwHmhDrxpbXAe5GVPfUtA8nFNBL",
  "key7": "2YGfJVxNY9Gsvxn9YtsYTk78h5wrkqbsfB7bsJZyvuNRSf9yzGEJjycQUhr982qxjDtnYZiaGydtudJiW3ZGWZRM",
  "key8": "4DUMZ6pg1vfGnc5nr9HgXDkZB7xs6x2jSXiZmwvsFjUfmESSZfyboBZt1PapfbDbuwyFMQnoAPK7ABqE37BpSADY",
  "key9": "5G7GeW2QaHHYvGXFWq8NrT95bvGQEAUxVYpjGSXN9VkjDw4c1RUTHrNLVc5Kow3oZTHtLG4xXthdZnENsN2YuWd5",
  "key10": "64cUxcGZTLmi5dGsSuz3mr5XdoZ9NZ5oXtEKLZY3wEVqKi8nBDXQEq4P37VXv2NeuJccBdx3o9M8xBi8uVq5gbmn",
  "key11": "DxHxghnUNyN6T65rLzvhURZLrex1eeSQFvjq6o6DiqBF75znGaUQAurj5TJT8jstjgDgK9rKxP3L6WZpoQjSqzC",
  "key12": "5TdgxF9hcgMYufs3MSKc2M7RmFGXNy5E67xUpWkMd6Ctq24B2w5JZ9RDGbL7rgbRy5B22sbuh1Dt8rkKmrwvJrdA",
  "key13": "5BNMY3yGE5XX8GHKjstMDgyMkk3aXzNzYLcQUjmc9BXzzPqCamMraRVAdQLMWWYHRNiB6VK7mdarTDzMgQejJw9V",
  "key14": "YXU9XMgVgLyVtCxZuFoUYT7Sn4Xn2ErfXfCYCduAbpem2NvXnFZJP76HweGTPfCwdyGPJFHisFFXhY9kYtUsCQ1",
  "key15": "3A3vJ3yimtGYZH9wvjCQLsAEQ5quiTcyWeuumX21frRfviNdTv8sXAsb4WK62W9jHEiFPEfW4uGXAQhPEC2eLFGJ",
  "key16": "39NAf8QKyjwW971SL3fWUT5xzVxsLtxRMTziDkrppSEx5PtTxSKdkWSdMn7YBq8THVgMCKFhDb8PPGzZNMWXs7kQ",
  "key17": "3zeoCQmuxp7XkRyEm3orUdQtcNV1oDEBQfVufbnFL5vHAspVpDpQGwkz3mCnzMuvzM6jVf9ETT7TyQcJtxTeNmye",
  "key18": "5i1SdFweTuLETsb1mTugRCazQSdoXJFWJKPp6eJXXMVPD1kFVmi8DVmvQeNJqoqZqr7v2BBSYiiwWCScTso43asR",
  "key19": "V7JfAX7mW984tMqvXa6jmmjLWUQEg1XwKMjcjTQG1xsrmp9c1nc2A6G3XXVJwFJUeRML4m7fmDdcsJy6B2rVGVT",
  "key20": "3QxLf4PiebyDNin7jZXKfSEDDUTgchPcWRKukWwR1JxxvUfFB7BBCrkPZG3RWstj8ZtGAz4GM2S2q2YxFLagvU4B",
  "key21": "4UjVDxGjQEKAGZwP9aqhoDVJCwvMv7bsmkw9mDU4H7vs9mUcJqDCHKd1wbFnFVbd5eZ6TYiCJiwaPWHuxmcghyQJ",
  "key22": "3duyHAiJKxPBmNPvS7h2psmNkk15upeH7z4yYQHrHV1w96U7SSvtSEHm5c4EijDsPaTu71RkbjHioQNNyL1UjYDT",
  "key23": "QZty4x7eWbRGMc8LfCj3C3pPh13LsVfTCFTA5FSXbLNKrrFrYnhtbMP4HwuEK5wJpsfCbiZ4eeBzTCUXdD74sUt",
  "key24": "7f2xvPE7MPTWKXgsXgrqMycdHon3wLUQhj3PZhd6p49sWiEJLSd3WGtQkdFPYge9MayryFsMHXF84iK1GrKLwK1",
  "key25": "4cC5eEYHr8NubUnvqotvM2w7pQVMFRACvg7oPQffusWXuawzrfkBgQGeCR2Va5xGxEe1B5qQryqmvcPWgJkvtcBi",
  "key26": "69CCb2jpT5PBFCZ989cRxwT7CRxNRV1uKM8Nc9kwWxnM29R1PoSf7Y3FEewZoVJeeitg5yzBz2Vnfgpgh86NG2R",
  "key27": "3s6CkbjoiAY1izjAJZ11CvzfwocggbbHT6Dwmcz86HEjb4aFNh3XKdV3CAnJA3FM2TBP5uxVyQcJpEJFPgoPsfFu",
  "key28": "2h6aXjFHvbXsBFn1fprityfz772FyshQxjVwWZ3NiHAa7D21c5rLreZ5zLP6RsgXYJoUzBNU7Vrtvqx4tmzQHMBh",
  "key29": "3hTnZoSLWGjzTzj3GCzVDT7Ph4dWoFQWy353wV9qVWK7BzFcFKYEJJdS8G8vW6bBYJtcReJZHAsc4VcK4fWApt9m",
  "key30": "63m2QnkJTC79FRsTnZH37RzYs8MPRNSYA7YDNcsH1Q6cSGoQQpyueSt9Uuy9FoPDbVrU1y7rudpogZWgNafncYXF",
  "key31": "8Xy6Cxv3wmPvdJ3chYWuzPjUpi64z1ntZPMBLQmzVntz2Apo5Nx6aCeQQkXoyLceZsxNN1biEwgrLuazbN1LiRi",
  "key32": "4YqmQnX8kWEVNcHTTj4jXQsefHFDMscBhnYwNhdPerdQgcMDzMBBhpMkzfUMedsWJB3uDpoVuTXFWwwwA12hixtn",
  "key33": "pMTYis3T8xS2LFpvjmQ2vChaacTnw5WYF2ZRUMTk75oUKgAadcwdHQcy6CwRSSp2rpcEvPYQBEfsj3ThsdXquHP",
  "key34": "3LqDpzv1Ay1SbCrRPDJwe2tLR9DgnoRXaUV4KW5mH4YCM5GrFRs7qsWXQ3EV7vjpQkrtVgCR1X48zVKZJ4z9nwfU",
  "key35": "2BeqRKQtfL6AFG4PMKHxydc47TnGAfgRJ8oJVpsEW8M4BAfwzaDeZLJYeimjo3a2B61wLyVghvzsCCFQZxSXcgt7",
  "key36": "3trSQ37cKg1f1z7JBZH8oUGRQ2wvNP1zTvQPU7gtNEQJeb86nBdw2h8e7otERqkZfS2E1YMzqKAzVDSXjDcHQ7ns",
  "key37": "RAaxEESrPx7VD58g2VuQVMbgxHEtqSqZBtiaFcAgR986hFQDsNFmSC6FfxnEh3aaWYB9gxRoVGQDYxWg2TzERSq",
  "key38": "538MMjwQhKrBECjXFwUeP7xv67rnvb99r55zaY3nxPa2sGyAPrL6zn2K9nEofzdjD9wTNL7avASo68DY6YFVEuZH"
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
