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
    "2iBUMLJGpHqkD71Muexaweojeqxa5p1dnc5UC1tqzrkJFusFDDDgnDAgeo98c1bY2i7Thi33WJKhkqgcBeZd1amp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XStUmtHKYX6kbvmN1i7k6LHTxRtAU3UxCBgbs9ycUVh7FWvW6F1hjjaUv4iq9Pnc3H8yEaWTj4LTQhhPZEtwkmr",
  "key1": "2RdibK3f9XbjzgrMkfFT9Mqg8FdfxkuE4nGXGnYHkXGRxftVXybzQ2zCYNbTfZCtDGsbU82ZT27djQZt8THjFZyA",
  "key2": "pczMRpns6sSdVsTNmgv3VUC3xTByhnSuhsZmuGByxJAEhBEmGxftRkaEfNa3aUSTaSffufH5xNreoX6Z4vYfWem",
  "key3": "2dCrS5mLNkpGy9ZLZryBfoVPS9Jp4fERwLUS1u8ADLaHFC2idR4jW4ZDqJ37eEMSdRqc6fq7EwEYWSqdGGvu22WW",
  "key4": "2T2D6fxUUVA51ZzzLj7NAhEDmigQLrDAo5KH9XTzVnK3cinKrD5hope6NgQoFwjjPwQEDfVyunTfwQYwbjAbkjP9",
  "key5": "2ApyNGsZAh5byvxBTrfYqy8AuZ5TybP8CekS4jVqyCotPLiHMFKuXDu2PZSjJczHVBfNuAmzsc54k88KKX34eKkM",
  "key6": "4gnS7RqkXQLyGMGkKNh1s5xkbzVmwKWcvTSDkLmg5Wsf64NfNRcrNfFaUSn7EWLmvvhmFwtf1RAoHaZZCFS14WaH",
  "key7": "2DGCu4gajE85XMLHbYrRyBBdFPGBAG3wXt4Zxw5PK21WsCE1pqe3hvFqUWmV3npbGyKvAQ2f773Qzzr5vB2Gfcaw",
  "key8": "5tyE5zamruBeEN1sJbBdiauHkP88aWTzp6Qdw152LhXTpPagSFVsxC6GuDLv3YkpdfHna4B6zC2vNAhT3EXv21Nd",
  "key9": "2y6Jw1HhPqdJfgfUN4EEMXy9QhejX4xMJ8GVuyeUFGduBfEb3txj7qgiqyptYCNbbLXnosujT3uoF7DZtEjX4UAC",
  "key10": "5gkQReHStUvZTsvj321Lyei5BjrwgUSpQGKB1jpMjb2TowkWwh149ZMDUZPgXqmJaH6qEqhLAwF78ZzsrLF1xFQT",
  "key11": "38rAgMjUCBVDYnzN3NSiYUSMFyKmAvMwaK7LXFWLvPzPSnbD6eT3PPSAq9pcCMYmA1mSFWpQpYPacaaxU64xd4eg",
  "key12": "jYTMkm3V7BFTcd3ssPJ4Fd5w3YH5kiqj9cUVxMc7Zkqb9p3GQTXxxgBA9ibCZ3Aab2wsjDtZH1GGyBSsgCDKZGi",
  "key13": "3ui6z54uzM4SvCEPtMDESsR7bCXDWSgiKNHWeEFFgzYwyFUuZEqemJHx9QZ61Bu5w3YfR9PrFqAwEKmMu7dGqiwt",
  "key14": "QeqLEZjhjQmahVRfQdCnbeJQqaFh68tyJxEJ2Boq1vEsxqktYsvtv4WL8DJVLhRNA3Kyg1qZYn8hrmydkwUniok",
  "key15": "2Lrp61bEBhUPCcYd8eaWtqgU2NXEPNrVKfg6CpKncbb3gmZSksqZ2vdYffHZLtQyr41rWuvtgGdLbBGgAJnnmDdY",
  "key16": "PhoNsx4GLNxy4CtoBww2yQc2SDrhRjxK3qo714PHaTJZv1ja3VYfEZbSnupqqw4hAxZm1kkh5MvdZzmrs3XcTNb",
  "key17": "zMFpK99ZFxZuSLdbzcupKSHCrRV3xxKTv2HeZPFBv1kcvWSr9cx6bHfyBh5U9sggrmzhkprLp5opMxB3MiJnWCB",
  "key18": "5R2F9tT2zAkBHJTYJXSzryh8aUJaZb3PgkQHQyMosNdkMoPeBWRshixXVMpXt71y53JAUsuFsfpeTiRR4Gw8XyTK",
  "key19": "4KmLhh1Wtb7t6DHrCMFDjs8t3zgbNWAU5DDbrq4acgsGd6ftvTTRZCpNLABhGo2bU3XXqd4GQa6VfqfHgCTxMD9W",
  "key20": "3PaC2e7n5i5nwfKtUcd2e4EC3Ch9QGgGrgZwEqjHCo5U3NuFaKUdTnQndkxZ1ZM9YNtff1n2KbgijtaSx2oaSkXW",
  "key21": "3YNQNk1nBzJL6CTJL1tPx53j6jp95iZUdpEQmSrLjYv7NBs3kZGFSr4ZpZqWzy5Y2ZqjFBb3U8keaRuEXRTNYsHh",
  "key22": "4yqWgLoAtGVmezpgSYtQsXBnXmcwK38PvsKmAKR38K6s1aLBPbxG5yhdGNFxWFWPS9uADu8GfnP7MsaCcmPM4Kdv",
  "key23": "2S7wAiofoHk3nz3Rjd1rHFGqcMWEvj3q6Gy6Y87c9cy2hsHXCqx5ZWF6K1TQ128CFiCiJZmYpsuSZcYf71y2gPGh",
  "key24": "5fC2Td5oFLdWcxnLgWBhPzEneynrNVMU44fH8C2hQS8ush4HTkB8Ab2ayJrRPuWsGKHLJTW9pKs9iBvc8aiWGovQ"
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
