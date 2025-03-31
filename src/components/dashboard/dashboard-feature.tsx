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
    "252sc927qrsZDVMkhoRjhqgDk9LinvUqwYKxgXe2qrjRPEPBuh5yDSrzntmxg6MTwJjCpuJD4s4EQsHSN5jH9xUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv2Y2WaQrMfpUFaYzzPdet4vp2hrGLSW9Pm6hgbAT9QTZPrfjsaeajptUxqiY7SbRow4T5r1etxKakBiuGDKTWJ",
  "key1": "29mrrsFpCWTBkWjtv9iM2jkhtTaD6tTx3zno9MKxRM9JXuHSYBceeu9NQt7emzGwKA9jt865hYLEeAfm5MipDSzx",
  "key2": "27XMLcAw7HLWby27a6SsJbZjyYazSXSU1BxbaS3YVVPZLHUWV3S3t761oJW3zQhjLRPm2N6c6ZakMjhcYwndYkK5",
  "key3": "32V4VUAYZsneNWVAUfqh9e1jQMpSjP1VmQZTT2qCzRVVLNxwgPgrKHskfkU766qoEYgtc3BZoYw3TGUtV7adHJoQ",
  "key4": "4TgmjYDuVxrdtE9tyy93Veq8HfGh6SbxJmW1WPoxxrtL3smqu37B5StzjBUZzTZRuUsCVJbmzSNWgTnJ1qU3MN3C",
  "key5": "5w6rsUiE1NzmvXBbQVxf9jGbscmTXsmYp76jhAqVvRkm1U2FpA5b66mJvuh4ReBecoTQUbt2kABbKL2FccNAGLDG",
  "key6": "5idquxDTpgTbmFGPc3w9KRtc1A1soGNZ2ui2wVS1sWw2rCt3GZFzLXX3hKiKpoX8xtyEjxaAQLjXieqP9eoQbdb",
  "key7": "vMEWQkbmpXWT6D3Ex4uRZUYZ2RsAA7fYkJijKu5XFUAdH8Dch2cwv7YX4B1tSVPxfArQqZM3Y3fMPrcv2b77yAL",
  "key8": "3fRCrPjUa9YHc5VRGoKE7fka7uzyV9EHDZawXKChLvwpkBKZjv7mwmYLonZcCA7cgX7L2bD5qBnkX9fxi3isRzXp",
  "key9": "5DBU2c1PTrCRdkAfRvZ6hfAP2cgSUy3su2TXRChCr82sxxJvPEfp1cp4wUfJAhou2gMpY87G1A6YkQYahx2yPBz",
  "key10": "Z718ciyHyWEdziAUymEXt6xeKYQrDZQC3oYzyWeJGxfiypAumLRDpKvidL7afx2FFtezQe1DiepgTkMEeJLuFpi",
  "key11": "4oPkfpq55oqHDWEM4gqaWrszVUZidoRn3cn9XVR8xj2G4yLPapkqFjjuoDGJNGXgvzsVsWXKbwfDZrfJX7cfDbJ2",
  "key12": "3oGtNAL25Rd2aX5m3uutZfbuptn77AqHdzoi2hq8Bm2S3y2KYYAjD7EXMBSM5dYFLNsQyFqtWYCyvKefmgYKUXBj",
  "key13": "372kBZi572EDFkPvCYw1W3DtdfKbAPdXfTAxqaJvNkuu9hNmcdvKkfr7GvzedSDREe1sxTzUi4HrAfcAe1oPKx23",
  "key14": "2eE3AcLsdAG5TZxSt98Xpt11GKsmVPEz9vtEsNZTez21g7gwKCKAGET4gZd4eVGr6aQQmeohZYfjf2cSc7L212YU",
  "key15": "31x2uxK2YiqUjvQyZERyz5YreVzDoefK2NLubCNo4Zi8xneuoz49WDNvhSrjEwPBZC7YzbTtkzQUwgWY8eLKJUUh",
  "key16": "4SXAK1mUW16WzMDvDk85zUMCoyYnZyxytLsTNM9r9AEbbzcYoP4EJerFu23Rn7bLJbanDX7SNckY1u6ZcKJQmPc6",
  "key17": "5ESp7kwL9yHQWExV6Zrp9yTvXvJMqfaTXQPYSGvGMqzpMnb8b58k5nXZFd31Ctde9roQHoN24LQ8xAXhJ4RdB4r3",
  "key18": "4RGWpTPM9RQqoZL7Ss6YKAeqhvvwph3zvcsNNq1TvUYm5k8raMXKtFSG2BxkW7SicxWPpSD3LMf4TUppweZwEUio",
  "key19": "H2veLrTt9fub6kdb5WeGYdw3Yg3itVWs4E7owHKyodqUxoTCUEdNeuaa5dT3y5LYYZBzivPnMKD5XnWtunSHeMc",
  "key20": "2ocjfzqEws18cLyoVFW8m4fBVcQ8A9ZFbK39Y4m5DpzracjTMex24rH8zeCximF1go4XQtp35V3qdmWZNsWiKPUZ",
  "key21": "3xXLruMmLKmM3RPfPFaGs94RTNN8esBGRnDwagnoVAi3LQ42gduByepeExp2ros8vN3mupgx26TvRaU8bcaixg5m",
  "key22": "4mvmBhjW2Nq6y99efnh6KhrwXYpK8qf7CstzupUyQaHHe55x8WrhtiqqHwhP7kqjeScMY3sjvp9imYxPe1mhKeKV",
  "key23": "5ev7jKzDmazp3g5FU1P5rEbkrwoWTaZX6BhwvREjQCTaxQ5JW7uS6VZe8PziYVT7RFppnSDW98N86JmwoarwXnYN",
  "key24": "5riLnj2utjjwmE8SKvXZr8VPXLWhtqpY4j2NCqqAFyNELFwaTR3mErxxfiC9UnS4nyKRqKCBBTmb8GVaHQwU6NUs",
  "key25": "5a1aPJdQuqDDz1Z6bJVqLFvsBHouCMHenuiHrw99ZP2emUFG62fsUxFUvoqfTbxzL8bY6puybdE8iUAci17nUR4T",
  "key26": "2wM1CX469jwqu2D5jwFLP5gfnf3fRce9u1frqMqWbTJ17HXEmLrFkbJ7tNRtBBBH5jN8DggdA3xRw6dnqq8P81ao",
  "key27": "5YnzNBRSSYDr46drDMLUYkn9BJDMz9R1w686ZGrJjTk8VaV31kZ3CBH62aUjLYFHZndVcnnMEKtTLVkmS8DPDmrR",
  "key28": "241XGK7PcfMzvQmjHqbiR5CqBdXoyv7RxVjCm633EEGsiJjDiYsRugKwML1sPU5pxcHdbHMRqpx6wXR6KWiMHdRR",
  "key29": "3Ra5d87ZbYzgQtP5yiSwtVxg9jg8ybrcU27uvYgNCYKrhdKjCsg83kAtqQCQqibQoRJgNeK1FrPCNbCZArKjRNpg",
  "key30": "x99dMZsYFwCWnw5cv7juLo6uNGR1Ci3mnNnvSrUAxb5GHosfuoY87CxSHZAtVjFBDQRHDPVDytu753m1jszozp2",
  "key31": "ZYQhorJ4ety3ZpyMsfudhi67oY3j6ya2PHuGwbhyT2rQWa58dBBr7gPGwS6vNQUvD8ZqW92qvzMSHxj96Rroive",
  "key32": "hQWbVxm9auoeGN76jNeYZmfLkewjF4A4dM5Qhzt6mkFgZG83Xfoc1DBD5qeVN2WcacoRQxTPv18exb3Rs3Z2BiW",
  "key33": "vf1uk9iZrdnsykkTo8qjswfZkpkQqpfuJeYxXXDeD1PfLPmjNV6AkmYoJUBFCpb6E1NS4gKp3BzDgn8tbAGxHKy"
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
