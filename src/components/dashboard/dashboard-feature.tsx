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
    "5vo7wDQXPtv4wJtAqurmgY6Dvo69jLEgQTpyJoxm8vg4iT6Lc8THUqthpMDtjqxzRrShf3pytL3KAoCVPJZm3nGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjckvTCyKWvvYUiVhRGW2e6veypv9ftSgs5XTvpiPK7dPkCwx9rBJYtpkPa9779cULyKXKDsfyPRzuiHUuax3e",
  "key1": "aPVtjEXGfSKDypLPQeNthYQMr7su7t2aHXQ4QCr7zcCdMZekoyVUfuVHu9KzUNjaT529b8hFwa2qc43ndsNUfRW",
  "key2": "21Sw2BMbWS4DNj5AVs6fXw2BJuRcyKRkpevyJyo8EuXRGmwGe4L5vCWMwnANQ6qxGi3ULUL1et2mvv7R6rHPLwrh",
  "key3": "4QZFk9bPEMdZrw5BaYN1j84n3nuDpeEZweuG5uQZSDrSKUz8YFQSwMs6eyZKU8JSLgfjjsYdr6YHVpDQpsCPHVn4",
  "key4": "2CV4biVNR5NA94x8RbEfhevcTN763LyjsdK2w8X7ipJmwBEiU2e9xnEduh1wkJjbdk7UyFGRow6umKum58jWjJev",
  "key5": "2vS1mn59AN4kTB7XfLtg38wDzXcxcqtw6L7HeJAynyAVzYwDMNE6uEbqb7LCKBmxLkyPKFzHHsyFa83DJJQKjHTX",
  "key6": "382C8c9eWSeFUs7gSAsJky38A15ZVFVmGq6Yu1AeBr68atsfWAeJWm87J4QEdvWS4PfFjh9P8JXthySjyeAAkJTF",
  "key7": "2fFbBNCavU5c86LxE5W6b6C1JGUa2ciYMVgbz9bgd6ntgy23A1kVAxNCJmEpEXaG5mb3hmfzK1XNoLRUMQXRJrHv",
  "key8": "p1f5Y2vpkDkjxQbkPBqfDzVZx9qdPCNjd6g5dxu6kqqMq6XJMpUTCWS3EZFh7gwBZqCCpzk9wt3inMRKnpcWaeE",
  "key9": "5s6TZ2QdxeCqUnppzEr6pBhsZjXmd3gB5DV8547kPcvoDyXBGyrdFi2Ckb5RpRt4HiS5iYvmoS3sDmAsrUEVPwi7",
  "key10": "2zsodVvFKFAdavfb1rwMtZkDNSf24yzVyMduqjA78p23Hn2HmHySBFVhEMxCi1yxt8kJyByBBDQgcwFx8GQ8GwNa",
  "key11": "2Mtk9M3Gpgfy4Mo2BG6N6pbfGmYS3mmGPqozBtANstvbEXganuchzhnbBw4FdA3ChakUHqifvoHj6ANEqLVfjQbN",
  "key12": "bnHVuMUfG5xLZBB4VFakSEvikPFQbPSUZHkB7JLiftieqiA8hPZojJM2cntJu5ge1qgtaQpHDQ2SPUjcJrujPWS",
  "key13": "4ja9CSeQ2fce5hz56ebedyaJvEjJ7ZRN8fo6zfGAzVdr9wgTxWP5RM97xJ9aG8okrQ17PLKtjKp4Pr4hzC5uCpuF",
  "key14": "36UZ1ZqdB3aRM2T1oUCmwMhkQkXkvrebc57P9yBa1MwVQc8GipguCt4QQ9M1XWGJDMkC94QkGvX2ZeTKa8q1s91G",
  "key15": "4kGoHbFCLoKhYDbBRsxQJVbi3SfSEZMUSC3WCcNpqmWZL3iZHyQ5hg2qT6PgkVYb1og33KJ6B5WNH72X7WXZnE8N",
  "key16": "TcuJ5p6skaKC8t3UmhCxr3EYbbeRCUZucJzwx1ZVyXtUiD9fWZirQCjRBBjG6RjoZvi3wDtxay8q4NcMhP659PG",
  "key17": "5EohuaGvxtjoPGJL8j9VB1PvDfM2jwG6ZtrqXRzYXPaiyUEavPD91fnRpzSjBNfzA3H9j3briqNLAhyjTHGK2mDu",
  "key18": "4KNxtioF5ZtNCrogmBgyQdeLhdFoxwwYUjwz4xsqR61PMwXdTcUqoC1KtcESmsoDcux2okiYyVg9oF7w7UH2yknZ",
  "key19": "5wWPxJrhcnhA7QAwNbs5aeaFtX4fCQX8WFcqpJjHWJKQorGHxmQiyMk4zGLqUC9FS6sUDGU9iKEjLiQjvCF3XK9L",
  "key20": "kKFes1d77Gb15hc6WvgdirSEgZEJKZqnfSK4UnVgvCMcDkqyxAumDttaZu3qYVWbHGSb9PBixn1kKJLSi6Yk1LQ",
  "key21": "45MCxbv85my6CBvYT5dD1TZ4vPEZCT3RamRzBakYzj5r19iwNykoMY2fMMQ3S97qKqoztDywxS4fKca2w3aAXr3y",
  "key22": "2Yfv3nnXLAGfJxJZTQFNYgRfBgkHyeqnG52nrEgNeptLSgDoUq1GPkeCgHkjegNVdPGYEHH7xqKWxDsUxCvjtrHR",
  "key23": "5oa2ktYsThsNZdf93kokejR9bkLbZdWczzDVTqqNsViY2DHAgT95UbKoRhTq5hsR94zwbfHEN6kPdbuGTPRNhzP9",
  "key24": "5ia6un171Laxv9eHDVGKzBM88t1fgPEej38sUhGGiYDNxsiA6khVAzJta2RToj5aVstAmoVhfEV15Cuzu4Ar6X57",
  "key25": "55571GdrWZJpJRWgLjWnrZkZRRCcMdmPiH7h9xajpRPyshzU7fr9RtWkZFaaN6WuVyYLkXb3E9SDkRbbF1ioxJz1",
  "key26": "558DgeRotXsfCgjhTRtW9nx7ZRBKUge6R7riVyeLuZcM1Pjxyhi3ZDuFyDbqefB5gTiyTsFx62s33QzE1Pv4vxe7",
  "key27": "392zK127dwphpvdE6Xgg1y7NLoKDFQ7KNmSzDXeLw2sjMqsPvxS1ey5MZAsfuAQRzBv1v7Caje1mCD9cJj7LEU7Y",
  "key28": "4givgH91LQehy3epghZRNMzCDcucYhCvEUHVjkLjKYiQBdoWuEZGmrgsnsUBFaBbAYAnyHhocZzxbh5KDPL21rh1",
  "key29": "Nma766whVkm4XRhAeV3vRhQcHENLxzThETsnEwTY7VohEMNHfwwWkQva2CvxCxZ9LuvfFsmCFvC9DHB3Yqfb2zd",
  "key30": "2TYCepoQ2Xi6jjF7S6TLnxhi9CSRrkfNZAPkFthvBCcEYQC1snenUAF1PKz1pMEgNdbZaG5nJ2g6Qto7ptvwxpAH"
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
