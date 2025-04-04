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
    "5RpQiRjHNzzFosx8nXNGPdN3wxV18dQcKAFwQQBHb2EGZFVR2KDZKNQ8i4jaXd5fZ3f2gAa68ULdQczcJdxruRQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WiwWhj6mVNGNELbofPv5K9fxfNYQ9TbAXzSt7EJBTcFZYL6BmRZ7ysditfF19FWWuD4sDKXDrLU1C1biYCvHrmh",
  "key1": "4hp3W8FgNatJYQ5Hyn5Q2xeZTjVfTeQfQH5xAn87qEEDYSPc5tkC2uELNvQzKoDoWAbCbo2rTeb2ZDbZw7BbtV9J",
  "key2": "4m2HeXLn9xTNrioEECon22zBN8ey7YrCr94LViaijE3r8YRjUetj2V7L2zELcvLKicLTjpug539w37EkoSqfXMHm",
  "key3": "39QUYSnKmFYt6qg5PFqGguZBiiCkMkJ7YK9vbpLzxSZd71QxTjgPqrQqwUTnYgNRSLnpv9HLemCGw2FbrMjP2fkf",
  "key4": "PWa96rMMLg7W6EQ6in2ARCdvNqUowXgt1bcygoaiUYQTSTZrcVrJRrumfY1FKbN4u1z1P5YQVicT2mAdTUUCRxR",
  "key5": "2u53xBiCQ9Lwar963rcjsEuY9zHCPrsYQogzJxsMXkVmczX9r1zPvG7Ufgcfec1RnzkDUVx2LpJYKdcdoFogcuqN",
  "key6": "59WZkrMV7VPrumtCfiUef2BkkSAbDtHNHTBMbhT8dRXwe2xvRQ2eogajcCaFsMLkJckYQS87cCLpovPMWzFgT5So",
  "key7": "2RfkFk8kjoYaEUETuWraW5T6Enq9bNTPZ9e5rrR5Hu31R21hNYJ1hSNy9eTCD3Qc78cyEsni7gDZjBLYwosf4f99",
  "key8": "2EzVieeCANALdiirUXJzq8Q7xEtnQyBhkdWfSSRPLYHP6hoTzXuyw1ruCvWBfp9vCt1Q3fiw3zvuYKbQNwetWAer",
  "key9": "887uTZzNznfU566qLZTY7MaF1GUTsM5TpDVERQpRawprnxDmUyvi7SbPA7tJotNFdxKBprM1KoY8Z4yKvGQrLre",
  "key10": "5k35mMnTcVGfQXab9rH2z8zYJuYmFBWDxSU5aEXi8VaqvRJDsveuy4iQRmUZjpiPjzKE2D3xQSkUZF8F6aSiQQPX",
  "key11": "3ktrWjdBNMQEZNFgWk8AXuHN3HXNzqPrAXVbZs2V7JnqHmLbZXoa1dFhXci8z3U9kZPQA5YdUaBrzhMckWmviSPZ",
  "key12": "28Aq8VMTwpeGW8zThgc4STy7tzTdpAFh9CxsP3Gb1xET6D1L4yuDCebSVd2rPghmRfYkQ7TLUJzbJbvryUiY3GFP",
  "key13": "3rzBjrq4nxqAfrELTRjygjXWd1kaZvD2GFQ8b7TCnHSogqVvPx2gpsxGTx6txvKiKoHgkY4NehmMQkZet8MHiFQ8",
  "key14": "2xsvHnVMXaq3HbDcGkrnpY83pBZad1aixPriLANXHUARBHPWy4YHQqB8ES4sZjvUN1qFE6ZkRimcX7h9eRuCPJL5",
  "key15": "62nd8hG1YvF6KDTpxNTBotwwhWFUxJBhmQE1hjesZyrUwiEp3KiUer91qgsrWWTnXHnGSejEjhJyBLR6msNBqFuA",
  "key16": "5JH3rkKaunVCwDBkLBR1f9b6wXrSSHuFVuZGEZv728rP9Nedei6qrDPGFPCujxmYkWhh181ApksarKFkYEdJD9EJ",
  "key17": "2cfJ4fxWmcCsDWAo3pBcNwb71WVQz6c3H84Nj8BpnYK9A9KW79BvgYu423gHuQi4J5HABYjxxai2e4grFwEZXdCN",
  "key18": "e4GrEmbLWZotwPEGt4CMjpyUYjNKzcKsHP9fXWQxRmj66D52mTNX1NKZM19w1TC94uV1UETERzpS6PXqQgqHA72",
  "key19": "3fLv3FsCv2frgShF3uMwDsFDbg8qU7TzbYMZ4KD4VYgy2iYt6Ps9smcdcEqrUwK5Y9uryweqVFJCATKv8L2P2ZSW",
  "key20": "43M44CAoDGVVmhNqiFdVY4SnXYRUaSrRTk8aShs3cpG8DB9R9yzvuY9r3zQq3paS1CCBXcAYD2dWA1zQWruQRrZ7",
  "key21": "4ZAxxysQmsXgdbDifWos2CLPiUfFV1fBzsq1k8nQwe6L2Tqxg33PbfotoE77ynqgxrPW8tnocHSD22oikiNsH1Y5",
  "key22": "3eUqrwztnxYi1HeQ28J5KmfHMtex7767pbvCs2NeaBTUkmkRSjYn71LQsZtJuEo7SHmsRhKaNUFPJyc9x1jxBsRg",
  "key23": "3wVQ4oEb8JtghsGPVyKCKjGTpYdG74pjFoJukeEzqN87ydQr1afiYzTx1FL8Gn8FuNkP4nTsLN8CxHApL5ximY5y",
  "key24": "21frDYcTyTrXRVJWPQ4vVnAijWyuF5Aw691fvdvP7TttLSNk9qXLu1tH1kjjxq1f3S91gwUdXmSAK6qv7e2DkTfz",
  "key25": "2s3tgnEngzzPbBTR19j7eMYRVjUiDukUyQwvSUdyqKBXvE5wJp1YA8B1YWq58Zewsn2aAkSgfbZspLrVbXtowG8T",
  "key26": "ZHue6wPZHr4zu1KpTGTcizBQf9Vs9g4CjPmsZRZWxwkmfUWxhzTG6hZfMirm9cuVhUUXeBj3173jyTTbdHXhUrz",
  "key27": "3PsjXVUrw6hxFZLhkazExuaHGaN1e9j3YPdQJxER2tUzfjPFWvTV5S6iYvpXgrANDLXrsKtoqLWovUstuVAFGrSj",
  "key28": "4xrtvx9UxoGWoneCp32mjzGAJfGmMjLHDk4erX54xE23BQvNFWJBAudw7D1LkKnus4k35eaMNi57Xzs1AkuTxog1",
  "key29": "24jFRhLi3svd7WjMafhHFgNXDbgJXUtM1mKAHFDMXXF4CJre533X7Vbg7cRHKXorEDzHGPfrtnXvszzHH6jF5QT3",
  "key30": "FpHqEASY44ZcBrX6G3siYToH9wXsegz2npP6UzW4KdE3nK72W1UrRP5McM1d5zu7fDnJVACWwz4kTFHMvwHX1nk",
  "key31": "4P4P6EwwssGYBN4avKbobCNzJFpiaW73BPjVHhg5U5LgkR2THtjAZnEZPfuACdX9pt2ueQycpMBVzk6zMzmWWD2M",
  "key32": "2oBP8gHhSDyH5GaNEb8QCRrdSLsKQNhsgmWJCVTpGpKt6ianqx7ZriMVDNVBAhxwv8hRPXqjKxfemoqpRepeAzYJ",
  "key33": "3c1QKw7YZnybFe3hrWd4iTX7ro5EwkG7kYYY7uFiq8dpZLqJJHK9bjRjthLjKpNHyQcXVai4PwBhKatFFZpWNaVw",
  "key34": "4cToNCwbxi47xep7GLZKUEEu8nCwVQZzvrXMkkD27BAUoJCMkQotZexQxrGgxkiAjvGNTSHZEXV8BKzjc6LZH71L",
  "key35": "4hfzMXdLyf1gEEjit9QrBukrRPoXPUocH29sPKV9xetdSEMhisxdU6uNL5kS3iv5Kv2GZ73ky6USoqyL8VQu6e1f",
  "key36": "4AMKXVNWeQUzQKJHEMiyYQMVbrJpnng7ewyJiPYXZMpAjSGmDcda4EpSrQ8whFECQwdXgB4gRaZaHzgf3aCvePtn",
  "key37": "2KXYuMB4Qr86vnzWuffoU5KeUuy2Kcucv59QqJw3L36ccidfG8QZroyBMjNQbvaW52YhuWfYJCWVYaxQSxKdxFFA",
  "key38": "5iTr33E4TvLWRiut6gKvR1Cg3id4LENk5ktZRVUwxLvtHHj8Ufa3U45W8HfVtxEkxGzX2DDvYCwGPnmxZR6hNptX"
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
