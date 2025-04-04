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
    "43vs3qxUeWWtG5oZx3Bpw9yHWV67fCVSym2W4x8rDfBiqJzE7dPJpWqgPRfgDxpuc2GnBet4bgAAeykT1JUviNrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LAzRibydVEaYCMtYmW8oTEVudwwEB3KPdEoespo8xwWdKvA9hUFqGQLxzKQhZL4k6Nh6ALJnAYRGN4ecxN8EuVJ",
  "key1": "3TVDSnwDpMpojrtWn53k15dW2MQj5jTNdzkyhhpywBtZH2fiMvX9tixgvyUEE9fHN6t1zyXa9yopVF4MhnUP9Uer",
  "key2": "5ChNC6WKTj8nSWPUy567aTR2qmioS9KCA2AY15n5Bnatb6uMhcCxUBd3CtvAEpTepTjoJztJggAZ6MVgectYDDge",
  "key3": "HYiYbh25ntdDkgLeDrSWM5quZPm1D5huWCACovVWypEDBMSdtDfVBTd3ucDg1UhsWQYet51rgmtXrAtEmGjrwCB",
  "key4": "5vMG3X6vNB2zSWgnvNArdQ82c7eQYLuT1q41ajTiyhDkrFx2tbJxDSKuEbePn858BfrDAA51ooxJdBKBiC3NuhVp",
  "key5": "5mX8YJkXnvm3GUdtEk8uENdMGMCBY9wVpx5fCdEKsDWqJLy8qy1oYKLDuWuyAHGRqAoGueBsPsNMYRjtX5bFWY6Z",
  "key6": "2H1Y8d1vGTgvWtoFs1fAziWCU7rbvUV7CYtr46u3eeJwAzCvg3BCbVyMFbz13pVbe4YtWVDKQZggyQcpwExuxu3m",
  "key7": "2oB4hGzpfHGWC79UfsBA1SiSVCC12DM7EM9f8CTMQVTXUfxhhXFvnjJK7JcScPeSiYJDs4nDrFFE82RugJxSL8P8",
  "key8": "5ci9T6pG6wJbdk5KGik2XrYFXQvWWeUE3uEq6PPKT4Teu7WULG52a2dsuguRHxVcaHyQeTxdpVUnpxsNNsbLazoV",
  "key9": "2GiAp6RzxfAb28XfrXXqCtKzYEx4Dws5UBXfzWHpwM2SueU8b35NsMY9iB8VE35SZzuBYWgQST8gtzqUV7p5wg2G",
  "key10": "vmZJMeCBnH27Me7sL3RnF5k5BTz8CDSRmf1V5xCXhn1CAfdq5LLviT1zzk9MqYNmjawYjMJPEZLuWw6QSHba5XC",
  "key11": "4BuEpj8LtVX1Ca1v5d63PduDbFj5qhPq3eAjBd8K8eR3q6HVULoeT3eUB8fYzeGqqzSXRhAvVg19fKiTnqEwfAKH",
  "key12": "D7rcS4sFWQZoUjcySqQzJNKoaonnHs1Hmn1stJDHjS13Ro3p6ETotdERrruGmjCjhZw4oUsag1PJfyfoYd5wHyD",
  "key13": "3EUP5i3P2Cr64QL85Fo5AxjKV7FDmJktJqypBetZd4UYUoAjCxEoyC3MoSHFK5GQpBFoJQ11GKbFZegk8BKmJzEZ",
  "key14": "CKaKyygEZsEgaGabvXUTs8DTGJ7za2atiEJeJCZ8swnGFtseQWUiiAGwXDD1626yezR2hZpicKQXQ1bmpSen7VX",
  "key15": "2Y5zmx3WUKfwtRsXnRz2gkPdgrr9AfPSRsbu9K9396Q6utsMNc5YmdHhTbFEKLJ2wsgri9BqQUvUxoDdeXM54veJ",
  "key16": "3NSXytjM6n3LUjc4cEqw1CBzBgsKs13xLpKXhCDiKpHiqj6NXdivteDtf7j5g4X5t9Hvyd3LwQxvcEttaLPB9QGG",
  "key17": "YgHP4Mzb23Gc64UFX7TEDcurYe7G9uagckd9zpJfDcYm9J7vJHdeSXETKfon6Tru6nmHGJVtKwsJgLX18xxEt1L",
  "key18": "3WLRNTuQzbgDL23hERdHHWcM8Q6o2cwzMERLkipg6JdMM6Z5HNEsJAZt4D8D7XSSZBn1rVZHeBwXBoMmoRF1CKhn",
  "key19": "4zsja4B9t95jyf3q9uqx7XxJ3HAA1S4oc2yaxc4GPkv9hPyge2DFSE7XvG5wSnzEnomiaerGi6At17XAC5wtubiK",
  "key20": "tuMJWNbLdpTiHb2MugrPFmpf92QHNMFySD8P2ZtomLbfm7UNrqmBGKNfCiy1RZ6bGCgfgWJAncTHwMpdn9aVZS9",
  "key21": "5cXsmkW9G98CvzjiTzbgBF11ptFT7yhThz2Aawwzrvb3C5YRADEjMw8ArmEeu3WGDiHNcJjMhaaBjrX4kNwMy7Ga",
  "key22": "4y8tV4iCvMWMJDdGd4BRP4S3jfiPcMz88Cp4ELbT7ivUrcbvNDYBJTb8mNfDuUB4uHAi71i5Mxw3PDWgpm21sV41",
  "key23": "3HQWEk1B3qRb1yJB9oFAsyKKTweDPgqBxDNHhqJ1vo9L3TH3qoe3kJBaEexovohAgmcWp62JA1EVNCkPAADSdy7n",
  "key24": "5CfR2tERA2QQYTrxtcfgxu1mBfhVZvEhx4XbRopWqiswH2p51Rjm18RX6MDRbNT7cKLYWhSJggobDuuhN6HxUsnr",
  "key25": "4fpsfvtQu7ytbADV9MRD7ikGRgiafn1Yu5s1bcRBZUBBaWR4gw63T5DM7sgSoUQZD3BEA1F2Fud2RznkV6TbnqsY",
  "key26": "5EXusWK3143LMYdDt2mNqZLeZf1o6R4tHZAWLtTWNPXk2fkgSegWNgjZxp9EL2jwKEKw7njenAd2BMERiHyuJ4J6",
  "key27": "2QdM5b2idsgR2FQaUN4A86D7jfPzkG4NDbP47xp91CDMbDjM5gLv7yM4Jnu6dg9d8QvssED8H9Tuatdw3gmhQwQn",
  "key28": "55KX8KNKkLaqvPMuCygFWtFoMR8kkiiMfBEjtQ3Zo7WedBB2rTXwdbyMogy92Lf53sXbHbr7q64gwDpzeMkZ3WrW",
  "key29": "5tJxpLRZuXZGTWqj4fFGbrGxCq1R6kjttgpQJYaGwaWehR2a1GmizRmZhodbdfLLChsarwHkX7ff4u1kRiGgDGNE",
  "key30": "2CrSGhwRpQA3LxeMVJMQ14hftTkrNR3yDAgNGpBZosCf9bkx7hYCy8RWVXTtH3hpDXDK16dTi7Prx2RvHkj6pJy2",
  "key31": "4Yy5MxYg5tSpDt3nXD6UBwpxpZEB1foHAWAN2CTD66DURBzJwwLkendq9fxemcMsia31FiCHR4x3PQfurcF5wrk6",
  "key32": "iMps6hhURVbQWrkCiqG5RxZ5zvurgabGPNceprfpLFR6zqegz7ULPL6vPqRH4yurPDaGPVEsL82kcAR9sJ6zmVn",
  "key33": "5DeLJFis1DRiDbGH53D8gFJqReTAbq9Kt8pmE46NrNTSH5GxnzvW2GkguKFYwXEEsuPMtAMxGE6f92tbk9msVnGz"
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
