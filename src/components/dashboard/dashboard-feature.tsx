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
    "3FwvTCmNjPFUsV6UzNG5GmvQ2CrbV6sme7HgvAY3QsPVJLEt9rZi74aRw6WriMPgy4xvthXxzNMvzfkSJFJChEyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nS6sgqFwacdNA4MG7PVwQbmPqsX1FDFiYZqmhcevgzoCHuFVzhySoA6iBWaqkCrdLurW82aPghKSkXKKex8tyqe",
  "key1": "4rCBGb89ZtNf77ywr1tPDLRJirqb7PgPsnJhU7pLyvCt1j6UnDkhLLBVULnENeZaZRZ2pjnEHyYEMQQHHNnEXuAZ",
  "key2": "3LJcWopT8WiDUWSJMku9LpTko1KhH2AiBwRyxc87Gkq7oCc9JZNC98K3KLt5wAQj57PZDVbtcDy4phwLit2huz3i",
  "key3": "254Jfe5mjcr9p5mWpVxnwKzfc8TPmSoZ5KPpyW7ub3q1EpEF59u28Aqc6T1kEyHki8rZTgN9DvtxmAChpUFPSvZL",
  "key4": "2qiYNhRGY2tk1HUjZ3W6LpymsF87vHeYDGmeCyiQbDkK8gpH4EFSAxtNsuFmVVyafFhCDTMnBQ9BSxYK8Heqm23E",
  "key5": "4gXEeRhiKVzJ8pPuEg42evedhBT6mGYEvsjyrM2EpEjzXZZx219g8v58HUjVzS4UVduLrf7w1iL35q4DsNHdVee1",
  "key6": "3MAjWfpQ6NQPwrhEVU7z1KufPwnkVfnvTWrMhFRmkiPzCZKbPfUzTWP92pWAgAEQcWiZY3DF5aX4R9r2vzBBWVpr",
  "key7": "4aXQziYNwoh8zQELrn6hwq6Fw2MpKxQ8AuUSzVT7aLqsKQqnmF4i6cYcBANFhaXqrmKPJTRVRB99tX3YtMit5m97",
  "key8": "4KFRiwisaWSqMXdQ1wHz1PxGdaVpHxXVTSbu6XMW5q8RQ4s64EiZXCFgnkbzEMWdzSKMtR7ADrpRHU11Z9XfDCiC",
  "key9": "3xvbZwzMwhCjLKQzV2zGdEBhwGhfM7emF5jrR6T9LU5orruKaaZsiA64G1u6ycJcCctK7ivmJwsmT6pZHP4J3nam",
  "key10": "2jGSberEMidqNcsNVcsUdYDqMHZxnDPDRTK6KMLwHPLVitjfcxg17EsfL6i4hmPBzqZgESS5aCbfusduYqnqjjEu",
  "key11": "3TjsmHzziC8dPc5gzrRJ5y47aJaiWeE2WLgEbB2fnxzszx6Kka3CMVeJsnb1saX8CXqUq7DiwfpNp6nqdj5uaLbR",
  "key12": "4sFSRRAgcuCfq5CWpXxQ4MEAEivguCDb9hwu4xURGkT1CwWifhLEHN1rHoXGuyhL7KsfnqxnGqgAcb6Xsk9hUCaD",
  "key13": "X48VXV7bqx5bzhdPhUeqA6PJKmbQSB4R7aWWbBjNc1Sd6vvnHMXaGa29AAcL136d3Z2kZk61WHfDgUQxjZCMMr5",
  "key14": "DHrQ2nMLUX4sTTiB6A6mSAPBzVeZPMSfprkKqT8MFsWnr7fWLJZcCATLJJTFHUR2npbYHJksp8uZA9c7bK6R27C",
  "key15": "ptdPzxApGsXdpSM5ub6WHA1k38Rg6ZjNutdK19URUponL7oEW7HmXy587bQfeiH5GE7CRDCKsMUxMMPiKU1gX5A",
  "key16": "3UYde617q3y7U2GLfebs697tx9K6LAa9eCaSTdGXqWbVRpemCsVXtRWeq5wfBMmCxgu6RzE5DVtvJwnH5wYBUqsu",
  "key17": "3YNr5Wf7VJJVt4o1Fpz7fAY1cGzfKE3rGBhRz1W5UcK7X6fyySGGQD1d8Nrn1fyLLdVB3DGK5o7UMVH6XFRpzFC1",
  "key18": "WzpQmNPZFUnTtoydHCAqKw7sfBw8QuczxsdeJrtZio5qEceVzcujSQJF3rW5GLiQ54Z5BWeTAVpRZGe5RdotWsY",
  "key19": "5othQF2jXVYAo4arbLdzZaWu19pudL6pJNN46tZV6ARHyLQAEmspG3yhVuZVjQvFEhEqveGKqiw1AU217X3EsNZ2",
  "key20": "6TexMXnXFJmqZ6QFLEA5YoWto5hud61VHDyTZ3XXc5YaGTuBFbuZcsC2orn5kM8C4rxz1XvKcUo17hBPKo4Cu71",
  "key21": "4BsHJibMQyKMhZ3GoBSnYZpqBhSsWnVLi21EFJhDQMep6FeQkgmnjE57yWbYFxHX7ZYg1b1RvFunkcVa3vSNWGRX",
  "key22": "2tXcB7dLyrHLvonbF2K8SwwcQYAjLxQWSsQ7cwGsnQkop152RQkoMdKpDSgwpARDrjj6VCAE6bdfuqJuUJi43w3i",
  "key23": "3tBKTaf5gPZBpgFzNRmFC2SNysHh62tzTmTVoFEDoEiyzGrHJb9HZTFTzh58Mde4yBp8kyrvMiW3P2SXQmw5rKsx",
  "key24": "2Fa8xqy62pF9ee7D98vxtdLJYe9bw5CZhCk4tSeYeDk1DjpEBVEtyXpVbL5sDWkHTrwMWWRYXwUYeCyPmw5StNXE",
  "key25": "3VC3nnW9zoUALM2oGcbtJC2aYqpEaFZ9nrPdGTHGPQDxQdTKSeEfEthbBgTYNZHD79u3AnQg6fzVvJivRuYWYFAi",
  "key26": "3rpGeJMgPQt4ZL3ftaLWpomeEkFVuDb3iJxqa47iyJrVG3jRJh1JbB2vHNTvuav7sRg7BPwWMswQSEVfkdXgV4fW",
  "key27": "4pjM6Xs5g2ms8jqfJ931m3WpDnPfbHuUBrcZZVD6Qz7eUxXZrj4sForZh3SstwYWydhW9PSrkQfyuPcyhsfjK9Q8",
  "key28": "5UA23oMUAtLHbA6q9tqdGhpQesDb2LQwiStwPdJbbj8gW1QDdR4MCiX2uptsNZUFu87wGAwYDQ6gxPVwtYAjhYoB",
  "key29": "5Xy1Tjtfr1LxjbcX3Vdr6XozeXZnmPc9L8aji1UUtir8hfEHoswRrnqBT45GiEF4heN3cuAkg2apPwD2mVB5Ff9S",
  "key30": "YXQPiYko1KoPoTV5UuW2xH67sX4XiY2sMuprUTXVpy5ZgKassrZHVHAmzVAtyehRWtdZd71mahYgSNJ3FaNZbnu",
  "key31": "4GKAstsRfHEKcQ248Nk6z9qtx3PEmbdhGkWB5nTnadwyhBjR1BKCcDZ4DP1g467XVoDQ5wa4DCqX6o54oSaqq4YD",
  "key32": "49ySfhYHPde1RUxgPEdcDC4gLjDRvQ2DRFuhgXxTPVkK5zdhbzdhWgQM5mUQfVuLPxXmQB3QEFTAfFsz7dPdQ3de",
  "key33": "5zdkqFjJgzBAmN3EGWczwJWH297RgbRggnPEDfwMkuAgtdW1nJWUNPWLqTLWksHRcfFUu2iv1UDFQs6PvMgVm1Sx",
  "key34": "4o6c6MpoY8ERFqazzNPhsgUQVWoofjqUZurCSEcgwEupxDN2t4Dd2NGhKm4ZEBAe5NUA3LemTknoCQsoJmcftbdE"
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
