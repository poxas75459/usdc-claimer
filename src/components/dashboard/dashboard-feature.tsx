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
    "5xCVtVDuPJvERcQ1AVHJ48DqX9h7fgUNiyZTQQkQxdPr5PQgkME5GhLHmC4uWARqSfKThw7t6cGH5kDN9DLayD5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xi9umnWjnhrhx6QDfFVhseo2kFcrCNBeZRNhsqZc1CCoEh5p1n6GzMC7sMwJ7obWgrCz5inUS1s67vbqzJxMsmk",
  "key1": "3NUVV5QZpVo33Pu7SbkrVSHkH5V77HCifqYnuxj57HxTfqzD62LULYRbSQj2pdjnG9DXPf9nhmUjrjxWupkJU1Kg",
  "key2": "335XUXjKENBaBEjy1at7poW9eccrZWFSr1AUMtAR3Ysj38DqRLDKTMJKwX4Ar2kkBYyQ1NcmJwDY3fXAxqoeASzg",
  "key3": "25RQ7DfVrzX8W22E9Kr4oZBANsr4gYfRxwuC4tfNFCqLWbd3rBKvgmz1KT81fKe2ic4hxkeEx24MVSxJf2CemnfB",
  "key4": "3bu2s1kmZfGnQBcSMH9YiZBFSsxUNcHkjLnZhxWTQSrk8hUrSPhNPtGot3j6XEJv9Fhd6tQZCCKfF7Fjoa2uUaMd",
  "key5": "4s3B4WxDsjqVGJViwwy9k8NFnzBE8ioiCpMrb7eTZQfHrLgxeKEdA7xQfRcj1N7Sv6hXnyGKabjvySWdkaZpQWXM",
  "key6": "4S2QvSiRXYLixQvVkWiBUgrd4qFF9wPa2TXcq4aPxEGdqdwhwRCFWLm2SJycz9Hd4EbfNzCBvY6iHKUV1Zmfs4N1",
  "key7": "67BAciTt9zwdrWxnfMsLuYRr5DG9i8QgHUy2CjE51yHcCXg43Qj7My87ajBrf3jqUVCRcuUb6uT4APiki6S3vCVM",
  "key8": "5jb1acXtGrEZ3Bu77Nz7RZC4qv7ST4sKdakeBHKdvcpuMuhpRLAsxJiCDmvSqKd3Jok1aRLQuNXZdkpxeoxX39ou",
  "key9": "5m9kLBPNWBJ1n1XhrPd4XbKXn5KMP5PJoPG2mQXEvwwmWyGNAWfKCzfF3CQRMk17mTuJKKR5gKXXjLccx13hs6Qm",
  "key10": "4oZVNk2HxQow51P3Q57CSJU66QtrcenZg4ktHYv4wwYNyuM9TcAVLp7c7UBebX5mbiGUxkfd7TN9ZHBxUCWuG3uJ",
  "key11": "5pZHpWWJ6SN4ex54F1Sdn5UAm8d7QxruCdnnGFtpAEw9AjSaZYebKGdjPsLYiQWWKjDNQNDGAhv33dMNK32QCw5F",
  "key12": "idckZL5o8ZWYXXjKv5Bj4gwTM6cvoY9xDPWgGUCy6bf6ZTnuJYP92GaC24tviCsrXhdNfYCmMzUbFTtVsJrV7Z1",
  "key13": "5LLYPUTfGNEDDzNYoVqYDtmmPYjodw5h7WAjwmTfj6zqdZd3PUToG4QbrxmgZJvDwGGVn9AxY33ZHtK8xEtkvv2K",
  "key14": "HVNaUt9dMhSGWbifHPDEgiJUbFztrwxnhcXsWcE2wEHcsycnx6e55wsn6ciRNSoBj36NK5WCLHHRih1xegmfeFS",
  "key15": "3wS8LcLbcAjabqS1kVqYD6TMXiBRE6grieQe6aLvPwTPVPHqHd5CuHWZNqmf1Mv7aBEpYmLpoiEu1MHF7dUhfoKK",
  "key16": "26c24NZwLsTMFxs9Y93uXD7vc82QKiod5CUiwXcyWv2cRDdiUnsFmxVCzxpZnQY5a1Y29JEsKe8576QrwjKPRrjY",
  "key17": "4kBnpUyoA82Xa5seXVjVPZnAbUn4Yxp5f1m5Aw5nPv3BTSBngjpkGNqnjVdmhNBY5YvLcmejYAMpVNE8t9dhoraG",
  "key18": "4xgqvyZsN4fvyAL4puquwnkvTPD7Vfj6PAbtkyJfnMxKKyUNsf8PiWVnrw5fj8zcJ4ncQZrfrRNG1A6BeBYywui4",
  "key19": "4EgdtXKXtLTgTQHu7P4DEiq3KKb7UxLEefT8bSdwoZFmyyBa3HMMQaEz7TmtfUQkHcgDNPeP2LR5FvddYHNqMRgs",
  "key20": "2LcjEKMngg8mEoeWZLKXx1UMMv6NukTXtwsZohQFnDRizRAf7Rhww4UhqMeG43RzGMwXWS2XwwHGAZ5kXF7LGQSo",
  "key21": "3MzCZnfHtKS8EVxoTD3GwJuWrRUMDUijtLtusChjC7fCkGBwL5zuRN2kqkoEYccCxQSRLmqz2kVq4D7EkeQTFnMV",
  "key22": "2hvNZ69mzWfMz2DZknz6ZHjq7zXqiu9hjTy99j6HXvQVsSrxUk2hQps6unqhyak1yfnLnMm3QqotjFkje2TCuTGJ",
  "key23": "3ECsCqHsu9MhbuhBwEDdbVX7VJP4hBH1HVhheN536hyzeduNNZm9fVpV4kfnC4z2tDbcnoTwyLhnD75XYPnxNXtd",
  "key24": "53JQdhi1gqqieAqzM9QbveS9QUzWZnQ5LQgsnb4sRHh5Ko5sNHszZwfJogmNSNt5WEEnsvcHAt7DysvTnJrGYboA",
  "key25": "4KJZNqoL8VCM649W4LuAoLafd2PZt3ubQYeEYpAJXHsHgT7uibPTvRZpaTeZdCNrAFACRqHhnjeVJi3ct5fcUfkg",
  "key26": "3TMfj7k9dmR8SJecH3Tc8cmUWDBkSjkEaBmDvbK3Po61qfK7ExiTyvfFg5xPXRtgHEQSRi5urizJ55yum8hsKYdG",
  "key27": "3pSgK4gt1yLL1nGqYjSXHLyjXjAp6o5fRhp4JUQay2tEkA1zSdefMStry4gu2JRBEZzmGHNkuL6LadyzW3yj8qjX",
  "key28": "2BvrqAHscLFHnqp2R1Ve4KPpXvgpryCuNAPxLLDXD66qUpvCKhybuhzGH4o6ayEcc3LMt6Aomm4cPJAdMhaQdawg",
  "key29": "2iBbtQADetmdJd46db8tZMzHF7J4wAyZDQaebhgDpA1cvdcxa7nc9Jm4fMGfjq2XoSjkWXWkSezziKPg2N2h5Doa",
  "key30": "nvfgM6D5bh7Ph3ieZ5Eet1St9GNthPucu3qVvcfJ9wYNYPVbZ5auNShwX4hU4s9AAcmh39TZe1HpY5UPaA4aZLo",
  "key31": "5S4fPxFSkQJPjjyX8LfeUpZ1b1fQg3QBwRkhDX4KML9Dz6XBxfoim4dNy5eT82Sz1TDoLdrsKJDYLaSksPD29yiL"
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
