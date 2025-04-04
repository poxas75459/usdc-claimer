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
    "2dXu3SHQKkdyRmhrYjPar6sWKhN3WSnQXKPYjhScx22UXjuzpdkqcEpKZL78FnstYNhtPhm69HYkTTAm2a7QHMJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUBe67sSPHAzzUs3myCxQqHWLH29eVh8T3VfnzKbKFWXFoTTjSe6E2GqH6jizMT5fJ9kPsGX5BQtRJgym6kEes1",
  "key1": "64esCnFcteAMnJmdvrJ3Y3UxdyqtUn7kfexUVXtQZeUGG5cbviJtB8WbFRVYLKMMo4ut8Sntt4fqerTZ7tXyscwY",
  "key2": "2ncf9z9vVYdnfaa5BvC4SnqfUgvuDjA2DbeHeBUpEYSjS8irKHXWdqacHQrjiMCuoeLCFFjfx2aM63cshAb532WQ",
  "key3": "3wP8QCprG2URDqCHB8hBPBWQSwy6NmtV1wXGh9svUx5kpXRgq9dSrmQfnugWBFoX1LXR5Gvz1vkDhkcDp5gaHgsT",
  "key4": "4CRbmpzeYSXZt9ztmPgRvdWaeCUkLiHrEsNu21aSjCCETKPvzvD6YWDjaRDhxxv2ZRRwGXukEYQ7JnPa7AuL3yd2",
  "key5": "5xWcHDPHBWX7H15Y9o65aneUMgngAuUKvmZ4qaj2fL9MZe17JVcMxmtVi5FhUvWJo8CTuy2FQKJwr3cu4SAVBuoF",
  "key6": "4MQR7YPHR8jhtrruZn6o1oTd5ek4kTnp8m7itTWtEGw62qn69tvFKnLpybbiApoaZeaWqTg4kwd5vTj2YxPwAq6B",
  "key7": "3ZbSfWSkVaiPahGPC9H5e74MrJNbfJydME1gHxzVAEFQRm6SUw3rphnGiabtPLYfBh8wooNw7gHo8FnApy9w87VG",
  "key8": "4ED7gDWJx2FgiDr8sWZ1XaQXvTidEkpc4ErYFSAvQPh9Ncignxhh2aVvs5MQzUTgsr4CEGzUDRgsb29iDY6G6sQX",
  "key9": "5hNPbh98doUf7aMHVXoy3ih2FPKYFU6uKEczr9wEqHgv8nFq4DedMrG4RCGgr7aGc7RTAzaV6fWSKcbF5RKwdGpt",
  "key10": "44xVG23tQm9vw59SPm425cSTLg5EnyToMmoViseqYDttNPwiyqkyViLpeM5UMraqhsnfRSyzRdcb4QyY4h7Du2cy",
  "key11": "9uRqKVmAby6M7bF3KFcb2ViBMc4ofcj7HY7X8wQf1KsfLpZCw3M1SJLsdE3T4RWD9583V58bA8urqatDrH9iPVY",
  "key12": "xrFFpheXUzYtuDPzgvDxG1ixRkEaRZNE9tTv7PtGCtLSbLKsCmYYvYnV4dsczqRrw3eoncodXZfDFVB8RAFXYDv",
  "key13": "5GF9Z9fBwuC1JNijuq2rdEGmVmhfo8jRLhvTjg1jHdM8RWdZfCGGvcUBMmdpK4Qjh1VocYyAzXhfUWpGDFL4GwMd",
  "key14": "5iPVrn1L534rZYpq72Vccoby56y8vKc3tVBQc5JTMFMGDrc3A7Fa5MThHvCHnaRqV8KaC2nn3cfXQimNWiKjoPLZ",
  "key15": "52uAv4Tk4twZMXq8EuUcghqdp4TrKawLrrUbKx98KystBy4hLWMryXyFZVCSfTdxVFPfJkvEwRTwDP9Gg19XhmqD",
  "key16": "jXvXiR4ZawDQMbzkZztM5B1pWgMczGpWwU3kYZs69TvhMPztdKKHRx5ehbysH3GETmyRvkvqTCD8SZvwBSnWejf",
  "key17": "2xBpyx433xE7d4R9bByo9BDZjecs9T8goCbGPMb5c7SijwZgNXDSzuaEMJGe99xoXrt45URKFTwxAuLzBENgHtLx",
  "key18": "2bMyvrDRKPtBXZ299CH3XSPChGTBo3BM4S6yjzefFcHSTYifwURXKHA3yPMHUwj42oyV7VV4po1Q3CgbMpDAELwh",
  "key19": "5bX9J4k789HC4pU31dZFHe31tMeUdYvUeFFg5ZmwCNWkkESGyArFqiruFDDJG3egxNKNh4SMJP3xNCqnN1DJQcDL",
  "key20": "6J4BFja5e36LGtuL5ZYqBWsioZ88vLGXbCWuk2Za9FH3ua4J4dPGgRp7PTjQKQvuDZPJ9XDeE5jzFG6GpaFqgfT",
  "key21": "pdq4V5SjyGCQf6aHWgQ4eAxA4RjE5Px2P6YYmJe1RdpADBNPgoa8H2MuKNxxpyeFnP8RSW1QjKDCzjpUxfieZtn",
  "key22": "5dC5BZZgEwYaJLXWfTrL3c3DEfP4Sn6WQBDqE9TPAbigfPx5MLNHFYXcWRZ2csBLGVhEjNg3QWuEB6P2U9cRL3yt",
  "key23": "weiJ97ySHoN2jPCMnrq5r1Mit4crQ64rctgXMzkXazomwXXCYtZxGw6UmjeDjsM263HXrYXgsBu9gJsFoRSQ2gw",
  "key24": "aAYon57M5aHDx2YoAEhfFvRxPybrbP7oYYrATHyT1qrBXY1WjrarfmES1bbmTK5p7baK4uxkM5kMjgy9W7rmNiK",
  "key25": "5Ubiieq6447C18jLvUDakn7vyCPJCN4Z6PF5FPLaPfXeBZQ3ad3Qksczzz6C5hFvyXVCjASz5hgSq5ALQmGwvtwT",
  "key26": "3QdU1xsMG3ZxNBs5gWJGG2dFMYc8gDfKhKK1cm6VZ5xjMfFcWzN2iwpefgCtbZfErrQkb4cG5fHVia9jGQhbaxeT",
  "key27": "5bsb72NYa2FvhZZVTT9Xsxj3ksBZtQ7ixehyZRdEnQ5qLAT3pYZyKPwrc5CWoL14UrnHFWhsLJJsZtTXbpRGmBfU",
  "key28": "1vo3HWURFTr8XM4ge6VvEhmwdyxhDWy6zcKTue4FyPggQ5JiC6EhCBkMBFy2idf4DimSx9gEkWc8WAHHssH8bPT",
  "key29": "5oHg853YkvJfTKJzcEfXgRknreerZW82bkHSXFozPLiCfstWBPK2Tfeib3LZ4eYPQc4zQyMbNAFwdPC2yr2iqrYa"
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
