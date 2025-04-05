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
    "5bAs4TLAGzhtd8BHaJmSrWQduJUnumXhSdcpkNTLKr15y4PGS1C6GT9wg5CuHoMSVRp3aXfVWLStm4fo1Mi1CeUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4deD5gSKj9EUzBEjFR5j53zcnkW61BzUEUeMxybPW7KnT55NxqTaUGwWAPaJz2wbC67tEaLdZ4z3Le8UMcehtYSK",
  "key1": "244repN4hvSE6rwRh7VPhdznYQp5WbLRuapjj6qtZgcWfNSG2mkZfqiEeNdYuDw3131o7TvgNsG5HpN6E6hHFo1o",
  "key2": "5x4VxPKKdRx6dJT1acA2xFwLHAe1kSTuVBpyfoGkvhTVNvP778D5UhWjSxyN15zvygxkBjjT5s4eHKJ3WD4ARC5k",
  "key3": "2bpNZK8gwkwh9wUYFAFNt3UUYmnz3Y5j76Gc4D7aoshWFrKPKj62YikuP38naRx2Pk75nHCDojy3DtU4yCsafEEB",
  "key4": "KexiDmE4CD89LCf9zCXoMgGSsxv7VzCinsyVjM3fxBZs5YfXhwntvNGec1FF9BFMgNph6WYk2wfF94EDjpRcFSU",
  "key5": "2WxADu2iWAbhBLWpBvkJCvTZAeHYqvYszvBiECFdwmhoracRxZqJaME2jqdoWABPNYW7yRE91ys8AER1LFJQWTUk",
  "key6": "5tMfbCXs3Yb4UJFvPWYoFwqBodfokLkC4n3Q89itogLBbgKmn84pEHH7qJNAs9n5fHjsSoJZtsGBHt7R2HHh3Cwh",
  "key7": "5ZRbr8AEKHRRELcQfmSbv8ZBQJPAqum1JCKJwTr3mw6CtAy8jQPeBgSjjysovk8oknVBApqUQEBSwS4Dn2mYjsy9",
  "key8": "27cVRBGRv8wFpHJAsiZ4nyocDMp37XavUGAj1w3H5kK79MdB1ojqMtceftKFQUh2znTJq1vriQ3YPfaQe4H1qveS",
  "key9": "2Xg2fztLbJHYYewfufQM2G2WA6V3WTZd7niFiL1YhoeoXNv8foqD5thXBvk6EqxnAeBCFfJbFr8sFKRgM8D3NKaM",
  "key10": "5nJpgjpJqi5TF5HoRfMvvEVaRBuseb6W8oJkHY17u3NurvvhvdBvRxindwVnLKF6Fa6Sp1EFdzYMXKB9pW7ct4T6",
  "key11": "2petqBq2hXkS4NTcQfHChH4e5azqxcRsfb9jJBRyiCbMkunB21UZe28kiVLZnPWTx2XDPps6gCNbJfRsBicvhtUB",
  "key12": "2UNXwRfMihiQknKfyyCP7FtgEa2bZvNUxxcLYmGdQaTPoJHk7Zvgx6ri4jZcVT2V1sxeonPnJqxbySDNQ1fZM2G",
  "key13": "5pQVsNh1qKTkPELdSHMJrvAkybuTx549st8okHHuBAaPrgru7X7Zs1Pztuqmb33WTa2Kx3dkxbXtuCZdHhTiBA5X",
  "key14": "rvrirgoDqcUrU5DDhi3rFLxyieyBTDGvVjzBjSFYqYpfY1ipF2kgNxfNS35fwzrN2Q2XK2VcftnnuvzKdref1Zw",
  "key15": "2KdSdtGpfArBxKuxKDUJNSSdVaEaArxZ5dUoQ3MSqznm3tncBzDC15TM81Q8DPUK392gtRbmY2gVWkpk9oY6n32q",
  "key16": "GuG5SActXCqyaoF4s4vnZLFtaBUNUdpNr1g6akKCx4Q57JJ4Ep3TBcHVtWX8nCf5JBBt9HwQzmee1P2eLJtfAKr",
  "key17": "38e6yKuUdGnAMEodsbu1V1yqhrkkkE7gmTfSdiYRv5JoC94Fx889KAujDbFaJvpChaxDx8TtxnMHmqoDHBt2nn2T",
  "key18": "4KuBcDjuBuHeYDX8RVkaUxsxBEo1EUBSQWkk9upBRsnjL6Dt6gdqBtP4ZiXrfFSDqg8shdEUpB2yRQ5wTEfyMYVC",
  "key19": "2bE1UN9RwZj7Hu7KPfuDwiNGRE4iNJMkjJvc7u7KoEAFFgpao8raWC1jJR1nESQNiiwpmDpRkbHEPwGyBB5GSvjy",
  "key20": "biQgbrG1GG2ZhAFGceXGnxFPKrQQi7KJHAmN558tXvzkDuTS4hpcmf12SzDymnAKByYc5mAy2zm3Lq733FCUAwF",
  "key21": "4swhNfYe8dzGwbpgABc9H2wzDNcY2vag9jGp8HKnocG9pYrTwJ7x9LRd19QaN8Dgn81wHAyBGb7zfjucr6SP9Kof",
  "key22": "32BuiGUUXKKUE3QgKAkXCSgsiX4dR4SGxmNuh2tF4VDonPYAf1nDCch3MCcjDjGruYRRmqrxAw5qTbw1C5bcpBYB",
  "key23": "5N9vm9iDEBs6RKM7VXrnV7dmwzjvDLxS42GJbYQHkKPY8nsTxo1d8xGURGobVXsjbinVjC1wuiptQveCh6iJPtir",
  "key24": "2ywd8sU5fP2PcuEnNoEsZW5Doe3AuYBfoPxumgZsjjbE28f3v1kvvPeatvAyas8BPKKCNgZamsj346t5meoSd9vU",
  "key25": "cWXA57HxSegfNWzfa3kdrda6dcka9pu88NPfaBnx3ZhGHcCqgA2LDgLUSsKzx7vpiFyWYAwaezUvjjEfhf55QC8",
  "key26": "dnzwRg5GKqoY4efw2eTozdbKpTYzZ5YX1qmi8SumjuMCtR9YEHtMmBiWXPBzNURt1wn3tJ4FyhML24qxELwiEth",
  "key27": "422AKQ5b2gp18r3MXLXUXggrw886azfSW3uGQdrRk3Z9ydXLg8DqSGRmXEntkCMjyTrkmH9RAtaerqtdpgavt1M1",
  "key28": "kPaZ7XfzBKod9MRWVhHfPHDTDsod8apUKykxxyPoYXC8stncMHB5gycXQcJC55mZiJ7fmhS52pu7UDFWqU9FYXr",
  "key29": "4BhpCxb9NQFhoGqLgoaytxsJgxqy5XLsfy4QHeA9FGBUnnUxuVfHL7nmi7ZkKfHVoAwjzU4mLxHkbsbGoeGSog5N"
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
