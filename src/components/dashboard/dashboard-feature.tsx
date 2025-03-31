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
    "54XyXpnWNmXUcZRyLq4nCiy3DTLdvhcoeAnjmCA5XJt821xyPrUBJWuYQK1SqPkbxb5bjkPCrsGj6aFipygeEipi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ydkFeoPQkTy3cVTWu8zkdipfmZ5PzezKTarMx79k6z1NxTmoGtDe9BoBL4GnTcwWmS2LUuyyas8UQc3RbeARh1D",
  "key1": "2HBvyp59EwqrjcN44FYHzAnpF5CxTPaQUr4MoNpM5dB5kH6KXi1sqZ4HpLgCTwMjHPeSWYZNPveReQsgDPsaUE2Q",
  "key2": "4vn3zcXD8E2dW3hMwa8Z1rMYK6gJA38Lz49oRD1kzTR3xtntxaNNR8rzxtcPD4T4exX4hDSdMxbLpDHxq62eGkiX",
  "key3": "3G94GWVeem4oE3Fe7oFZ7Rx1EjsXJcAnUYvpG4rkr9aAjjXVxXM6s9skJEUr4SYdy8FQc2bNyfXc7JKrDv45R4Dh",
  "key4": "5tioZq6DKaeh76HcfCM6fLhGqhdRcoKFok4GdhnbK6eJqiM32r42NNsq72Jz2spCPhoPAKZkGVJmKPZ1RTwL87MD",
  "key5": "WAix3UDtwHpzyw6hELYjqChmdmkpV4YP3rHPys6JRDfAMxjRAjtFyGKqP2DHswDC6cioB3wPCLdYqPYTR2y9HMh",
  "key6": "2bmUPhu6cWNfEMKwJL1WQgZ1BPXXRaSf787Qc4moKT8B6agshBBqHNJvv6JyBBP6x47uk7nVbCPet4hoi2oZ4H1A",
  "key7": "2bMmiWwnJW24QeQg8o2L8TxomVYNaWEX5RFY2EBPTnfgb3NRHwLxw1bHqy3XgwZc7ZbTDVsW7dcxtZgYJ57FgWD7",
  "key8": "3wtR5q5MvNVHMTyuXgCyoCkJtavo5gchPe35jnCjcD14iaik19hMbwB2DmZhgKaG4qpz5kdQwGF6hUh1UV5GCSAG",
  "key9": "37pFBUDSiSoGt88NFK1ywgGhxWEGrRMbDkHqPVNv4Qzt9EqGN3qJmf9eb8ifcirGAk7XSfWkoAKsbrabL4YFShp1",
  "key10": "1154AL2t7K9warxBT47NaZExwJdDkE9GYkmvu6tkXtKdJB4xWeEJeYpDxXY3St8kBVA6M371TciVekCaoPppFnd",
  "key11": "3iKMYbtCByibduLKShwTxieC2Gu6haiMq2zJX9pEntZqn5hD5XzyjTqPZdCmsfQ5AxRaE7cGvHC1yrtVaLuVPuBa",
  "key12": "2kjAuuKGkjKav4QVxGPjqV9aTd9V7PVZjCLBV4h7EfSjqWUod5sqk6BdKkTUoR8TUHGaWFi7cYVX68AWtxDd3CVV",
  "key13": "4FzY8NvoZ87ann54TN24fP69fbZSMaxyk2H5ceQZcqTLTbLo1JohSVJZeFqe4wWrCUxhDSiZBjRXKXRM9TzaQtZz",
  "key14": "55H4u4h1ooXZp4eaY1qhwhGTwXVkbzJQN8DGZ5snDzG2Ec3BYmLVUjALwtcTXfeBvPPzvzcpVUVv6uQhmrHEzkQQ",
  "key15": "2zVXRnkMUx6eKCg2fmWiCwifipCaSr1h7ddFZ8q26EMnNomoWb95GpfNstanbTdiStPSL3N71RSERutUSZrWtppz",
  "key16": "VSvjczCfoapg5cy1ERHf1jxmYZRBThFXyRWSZtmvGKMmBKsrmqAddpAwAjtHMqZoJY6364jf5wmXtb9JVh6hBUj",
  "key17": "9E2Pa3L8xGHtpVc7nvqstCu2V4kdPm6RodoukdTp6Hd6B64qeGJoDJmRQBbqEbHNQF7XVctYp6AFfJF5wKGhooo",
  "key18": "25XV8KRwcLpoL4Ce2g3XbyyrtXsLFDWKvDzcFJLq6QRwNf1dMsjq1ME1i39b2ntcD9b5p1v1fUjuGn6pA1Rrndxs",
  "key19": "4J9JjTpu3nN1hr6hecUqCLchxpDFfsbWsm3cFTQYaRz6yfCPtfQCmxYt43yqN5VwoqPCTMQKteGUf5zcWaeQxkZF",
  "key20": "3LoGmh9mAt5kzgxgDbdGUsowF4WWobPGeUexmjkNtK2HfUk7XAmCNQ7ssvbWVGdYu9zBfqa1D7XGb6MjLUHaAGYa",
  "key21": "3eujzPtT8PS6dtWXFHjyERXhhFXCxJhseac7YbBjqhNGoYVvWcUr2JVPEZi9vZqgiKD3MdLbYGr9p87sA6dtvTH4",
  "key22": "2FExYogovjRoRZBDMLgiiECFAdvtpvcdLF5jQNnp6iEard3AqutkmHq4D19txyFMqqdbse9BkkhwzSHafquHB5EE",
  "key23": "5ZekaVjS6ywMeus1LyXSamqa6vhSUUvJR6mzqhU7cGVdfu6haCpnApSFj7BpLjkth1kHDK9U87dMr7PZDHP7mxfF",
  "key24": "3GK6TTqPMGsEoxKD6FwcvHuzDPbLGANSDq37WtfNJFSMU2QHmrCfcZgKqNNo9zyQu8fD4JK6Q5cDNmNfCREZNDbe",
  "key25": "46f7qkE2Xxtnz4kJfcd8U96VgfzGiJJ2cjp5j9giNe1rHAZn4oTNQefFg59dywGwXatmJHRLT4cYwat193jNTDNj",
  "key26": "5DWymHHuGedd5fNoUZKeX8vdxFKbcViBxDXbAVqWWhLEppznatwpEfXZyqZ4DM3DeefrUKRvnUaRp8mvEJnvrkRM",
  "key27": "4BqJ3br7zWiQHBmcDyDRXSCqV4s5crAkyuRUGx4by6PX9KSVnG2vJbjQZeEmMfhkWmwHyVjWmZy8k7mbSQo93L8v",
  "key28": "5WHX2bRtoKZPivC9XF3Vop8hiugVEY71VqM9w5CVq1ftg1SVD9wxNFgYXjzwLD6qcM9hUQ6LJ7pUjU9THcgAFfCG",
  "key29": "nSgxgZ5fvmStarMjG2fA24qEHppW8m8kNQTC5x9UKnonqLkbrBW1fikH9BHVtG22ZgmkQmmyiqLh8vM6DgGWAgo",
  "key30": "32NxCQr3wfKQfUjroTDY9SYBLAhTMVbo4D72eNG3DEp16m7YRH6BxV1VRPcn5qYj8MJebiB5PcBpEc4q6PiRKQ4Z",
  "key31": "4nX756AL8yhtro4mb9bsoY78W39zVsKpuv7f5CGhnz1q98FQzWZupy6drLDSGGdu1WCigG6c5QMSksNmBkZ4StAb",
  "key32": "5FsEvosDQytJL4U9J8e1ZLtVg8SgeKWLb7NgAGzPNHEmWbrmo32fYbXDUGzVqYh7bjQCbf8QdpKSz1iVvLU7YUyJ"
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
