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
    "5smsZa3XUwvzcntWfq4aeMfKdMpbnhN4tst9PTztGLbfMy9iadvWDL3Rh7aUhiHgSHGcrXvEw4Q5VNvXvpKR4B26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qJTEZUuxmnT9LkTzw7rrb5fywEncovR4KCpM8vdKEzLnJ2BQHS17N2U8DbBJyCEgHPdeRheU8GnmoQuKmjUTHjp",
  "key1": "sV9mUwuAGsHzMjUUS4J8Vi1bX7Jru8fLdsyqvuqwetsTpSv1oMubLFVfDtYQmm3pL6PzbnKLVdyF8jbmaKCgjpA",
  "key2": "5UoKTucd2o5gkYXqbVQo6V8XMi8QGUpA5BgDdVX7Azz57ek3igRt1eTMVDHTAzPiCZxSVqzJ9AAUy78N8EJQA61p",
  "key3": "2jjYsdpki8jhKZzqj8RTcjN7nKbXJZwihG5WPFa81dCMnqie5UyzLDTije9iwWCxTtRWxN6eRxkW19MDdn2PEVPx",
  "key4": "2fYEePdj6dR4evd9JstpFxLRSr8nVWemy33imjep6A4h7SeYMpxMm4aRGEB246kpeLRJsXeF1Ray8349wbWrJJpy",
  "key5": "FZqRSitpH8Cho1kvKGMJzhSJFvJp1Pemo24ri9afFmfGf27kZxCVbbwEAQe8SguPT77ufiVwFCCLCLoYtHyFy2n",
  "key6": "QkQ8SnUPp2uQhuwT7uV6N6kJ4ZtxuftmAaGJTQEAJVuWxQ9F3JCgGfVuA3cT2ZXcViJEJ7auawzB6UPe5Rk3p55",
  "key7": "2aXXgYgB5hzhkmb9mqDyUFGBC3v1CJaxBKxFvNruHFnPa581nFxKyjxWJA5cMdSgN4bkwneeZtV24D3HJ29krdhx",
  "key8": "2CQssX8LbHRN8MTg52WFH33G5dTyjebJJU7VzWQYY8vXQWg9d3ZUTxsqv8YtkSVHmyhNgqwfJBpMGofwBG6L7YVp",
  "key9": "bigZAAsvsf976TXMjaJBJAArZbZtX4K28zpxtYqw5zVf6J6bPfhAds6Arht8xqvpyoGVAcdi6dM8Xot5gSNGfrw",
  "key10": "2v8iuSBFS1hSCYYAjx27eKU2Gj4oMbNrTTGLif5s2nHY9WNAae7xWHMTA7cdu4572zoNZDDTazB156CFNspgAVNb",
  "key11": "5TfQi2c8ayzH7wouBWMQA1ng8hsbU1aixeVZ9FMK5UPgd47LNQoxMdWmFBt6fQw1CMdYgg8bH1YfHkLcqSiymCzs",
  "key12": "2GVrthT9nQ4LKNrCvPQ2pBXnxiv2KCEh7FSFBgZXwsJ5EYyTGRA3EPs43SR9YZPwMFR6mgHoZGs3MRq6Hwv6tZKD",
  "key13": "4AdwZ2FkYXfE1xqkLMqaUWzLHKUtzZKaufXeERG7D6RmshjUPC89ExJ5z9nePqmjDFxn48f88xE5oGJKChGiV5Vv",
  "key14": "4m3ZooM99HjfFKqL8fAWCBaYCVvtZaQLgCH5vJVFcfWuYyMM2Kj4Cyfz5N3p8JwHiYEF2rPPxhFCZ3gCvoC2RdLa",
  "key15": "4yqmzoX4Bw7pLP8B85YeDWWQ5b3fTYwDn1GfAHfxcvNujnTbZS1xqoe6WgyiUM7X78PQGjwZhzwbkYJ6AbBhGZei",
  "key16": "3GsCgXGqANPCcytc9TA4yjiC83v9XYAKFp56oMtLy9mJaiPeYi9kRDVB4cswsCuTpUbqg5F23vNtSopM6j4YFTsJ",
  "key17": "5Cao7pEGRF9eTqkR6P9HbNvqE8T1i22cc1K1Bxnt2QVP8sAFc7nexp4S71Ng7GH9x2bynUM7KQfxatUq7JZ2VMDv",
  "key18": "4L5YWxi7U2hYAXbaToArpWSMEiVyH7NwcRWQbBHwin5VRT1gHPkyao5SgS1eNgd5yoBYfSrURYdEC5WWhe8zKCDA",
  "key19": "5YqDPiC7eZ79QciNFpEjKwUcazFc5mzFyE4N6snAh1Nfy8iUG5tM2M1zyHdxMjPX6aHNq7ogwwnZv87XNP3s6i54",
  "key20": "459tZQjgnrGh7fdTvsB7byuULyGXMQoLt4qcGFNobouGAEpkFtiydpbajixw4iChogR3DMKp5Kd4Tv48S7iL2Dim",
  "key21": "4RpH4NcAV9DeLMamvWLCDjDXK47nMP9ipEzkZYBeohYwQFu7oibfx6txbuwvbiuJsNk4FhVCjFx6tFgXoxrDG19A",
  "key22": "n3kVzQL5MdeBnQDtdzv2TJGb8bG24M99RiXRABYHWNbSoLRfxy43cVFiahXa1zU19VBzR8WyiAUWzWhv7yrbYqu",
  "key23": "3n6nwDjYBxJFye6Z1wXVpQRrkz9uirrDEzx6HcCQeCGTC5ADC53oAwLeNh7oHHRcu7viiDnhbpfxHsfdWRPrqobM",
  "key24": "5dVEsiG35vCntPGzQHndRr9pxB5TAF1mfPEfUkidd4vB1F7hYAM5QzME2aMFbeBPTYTUD8r8dkuGXkwKNy16Nb3P",
  "key25": "5qhU9BcNH9My8uRBsAMVXHdERDuMv7UY1ga9vAodTf5GbR5SxSrA952ncZ7cM6owaxoyu4SrwsQW9SjPETmYHEYA",
  "key26": "SUhfbgbdpXcFDSF7D42MmkmzrzPTsGFUiLDd8p9VqvwHChR3YjxCHMckhavQsWs4s7s722FpiU95joHcCTtdtwg",
  "key27": "qsXzLZcDArHg5fZYFnJqLez5jKXUphyBzFS31xGNURyw2HUMLYhZwvLo7wNT8Z5mvbwp1RTHHRZowgDE6h6m421",
  "key28": "48kGw1uYs1ZzEPnnTMdipeNAwaQYZbMyrV6K4ZDjFCGmkowqfr51Z5SSW5AQGmahyN7KiaiSFZHmYkK3yqFLog1k",
  "key29": "QgrPPzyeVQYoW3vnYdgexoAEZJtGYbLhAoyZFbrTrD37DECLjPeMmtHZRVynoPEZ98DFSjd9BmnfeaeRzZ7A1mV"
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
