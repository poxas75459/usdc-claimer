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
    "25gtu5B7SFPLg4GB7KSfa54eEEaCKjd6nr4zFYxbut6mHegj2pNV4cg7KnPBTpMRPMQ9umdj77Q8dKKDiDTnrgxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXWHaD1Trt9SKmaQupVhBCNRzUcVWaS1rKPjXHrF36zkNt8BFe9AjcZYv7KYoUAT3A52pzeFPzCSbrBGTQceLPQ",
  "key1": "337tMXJeLesRNaxaYo8KK45PH8TYgkR87mA2iebsnkweS9jpaBiatDC9t2WuDsMX8KSMAnuyEaQEiUUPwGRPdNd9",
  "key2": "37WXyFj7eWSRt8noFbtVKq3wA4jvB5RD8NhBr1PXD6UokMA9jzW4wtKWdGZJTZLePUW9WGWuv2Pi7pDqdsxUaBDk",
  "key3": "5aZz5gkMYYopXfoVq6NVettK7wqMT3dZaKRvMoG3KHWeiitkBWENdzpqn2h3uJxxf8hvRaLAb9BevtyNJo3QSxZV",
  "key4": "2qQMxazTwGjhhhYjQRm9Rfenw74rcWpRZaLXXZQDrr4a6QkvNKxurfRVC8Qv6utUgCHGECGcy1LVGgC7iPiJuUZN",
  "key5": "3K7rAoq2GorqiuEEo9kKuSg4GcTstvv8XWHP84iUCd6baMUrUAvgppzP2hFsXtpHH1JWKsKqaDsCLnNJE8Hjix9X",
  "key6": "2RJf94YKJXiPqLLgsfeEQZFERLJvNMqmnaAFxGsqNV5abPiC6gE7ukNhxVh2kg7iyAFJCS6imvDZtE9Na93AXZE",
  "key7": "3dimXopZnahDJdr1BUwEeoFHfo42HAipdDneRs5wiMNwYznkV9xCCr2aXFHxcYxvdY7Mid9iUZBrytzppsaNtur1",
  "key8": "5Jz2BZy2dK5oaUXjZiGKf2o2wwD4AyiHmB95xfK3igXB5giu4bArAs5CGKYijt6iQ6KJ6NBcvGrnTpG6MZmGwM2f",
  "key9": "55HjPYQBnxh5NAeyxxwhLpTPZk4xs54pzProWLp7rUoQ5LeNgmGhG3iVtjCqnWhbbKrbzBtPQWGwCM3veGH4APzB",
  "key10": "2ztnrL7cv4aMAPYyuaCazAnHfv8Cz89uHww3vXohgDZQQnowsCG7i4qPvJH1aNUgFjdcFafpX88YAJvAbU2dRuB1",
  "key11": "4mcD58iSixSAfcPhjxnt6FmbcRzxKDFkDmgeEhzD2VZnTuo3w2wS7etCNAFPJzhGy1yUSW6K2Km99Af5RxAb4BTt",
  "key12": "eSFfKxuH5xDk1439wNLk6fDsGf4C98ZLuLWp5i8fbAoU9PUQ4o7Ux8BzaYwmLd58G7q2ufvLH4WXBoB3fmVFwmJ",
  "key13": "5ULghewURKYZf7XFDdeYSNocSj5DMCYcozxC1U5UT9krHdnc5trkBdtn9CfYUbQ8w3BG3zTSxEgUud8ejyYJLfiu",
  "key14": "3brSy4coUeRtBo1dXjpiiyx4zb3XeMQX9YmegxaCKhGmVP68iyd4Tzbf9wSR9mdenojKcmkfqqebdQKKau7fwWbS",
  "key15": "4XFzqrQLrXe2pfoHmCypq8AJ7kkV71vrBasTZUxBGhBsvHyyLwDzRgQYUe5b6ttpjGzURurnDwdTP2SrqJXo7yCv",
  "key16": "2gkYQU7BjHE87aFU8y7iDMyWqT5t6MMtxEans5P9UtcFnfsYM4a5p8MVvffjoKdrmZtWWskz67Y9Gvswp1uGvvVS",
  "key17": "3yhfHwitaE97fAQxRFmsxWNgpocybPBfjXffjZM6HKEPQgC3wn71bCCikes9WGL7GVG1hMNLw176JrRSXLvvNsKt",
  "key18": "4HwXBX7A53zo3adbxVnS9AAQ9TY8CRfsMkWSyTfwdLYxLW1UR6KPbpP28kVw28zVVs8LBGDy4nFZCFWfXKbmtMuT",
  "key19": "5DuQhLkNmjJ2TJdWeFTiVAB3eg4Vq39jJnnSBkxjzaK6GVfWYBLupDaqSe6YqFDiaVDALo1jc6RYoZuL2HkvPZrt",
  "key20": "3WSXifFyovWaH52EBr253fYyUfaFQfjv4jujmpS5gYVQHiX2JKHTxSP7VWcjxg5qgHsraWeS5xeyS8KYTymmFWv8",
  "key21": "8uiMdxvNniiEtXfKNKQatRSvBQtC85txFdENDPf2sUn3y6wypW2VYc9nnArsoFcDvC27mW9ekTUeFaFT9oc3mcC",
  "key22": "bJy66bn6rFSL9get5vv2iPGfiwaC1btCUkiCfZj1dhhyM9PFR8PNXHcF1zCGnjYxGUWE79oHqTMDgPgDLi9PwAt",
  "key23": "2wTyknAndZsNKw2YAC7u6VhtU3bpGw5xt9VxbAexDg8rDTtFdvZdSx6p9wF9Lf86TYGK9BXpq4i6yntmtKcWTWs7",
  "key24": "5VpVE58AQ2zsWHYbetYTQUgSvvqeUtvch96nMCE3EXwVAu2PNvtHY4H7QZbLaroruQAHy7YPUWgS6eKWcsbRkmP1",
  "key25": "2AdTPJMMnnPu6CZv5FVvwM639dixt9MEeesbjss5yx78Jb4HEGpJJX7Zd2JwtkATFiwx4vhh4QA7u7A6WG2WFw2p",
  "key26": "PKFK7tACz9cS4yUyYkGSBh2t4C9mMvq476zHm5mmwHwT27BK4W8nD8SY4YnaaFnPwsa3MXeE1zwS8Zg86vARu2W",
  "key27": "5r8zZ1Xw9xpLcYLYiPfqkqHBfZHyF4GWVHYuNUHAD2erHEZkDMdbedcvd4VzGARfTKhJwbUhYQT1EvTV1RRLDGcJ",
  "key28": "LXDFbrM3ohw7y4GLTLiLot54bNveGVdQuBxgN2nuEmVdEQM5xtpB5iCy3nw65a3NA8tRwzq25piscCB3qx9zoSQ",
  "key29": "3yZhjcGk1mrhexfxKApb837gxkvzgRXhfSuEMUDGmyBeXJU5b6eAYGvUwHqsCP1FtJ3kVNDiSJVrRDbALGRTTZno"
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
