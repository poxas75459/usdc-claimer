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
    "4Xr8d9b1JnAxzeqVTcFiwDQqRx6hzQuarKQFpF73y8KwvUoC1MTY53yPhemyzU6qH3yDxYEEneRfTJ7fmYXCsrBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRYavfRNXwjwJ1nNhMfkfkEqxR4PJFQuib6gjK3CCaJUrYyGNYwoBRUsC3o4YVUMK51QdkL7T6fRR3JARSwppNe",
  "key1": "2fj8ghURdYxt34hpq3k3VPrH42RqDyoGyXgXWu27AVFKyjARZwBVKF6RT8Py9DCv5awj2Q7X719J1gtnFVVbQv4n",
  "key2": "39TzyWq6nPJMotXwywNCywrqVjpq4KNKUcF1KjKpaoQYBG6Cb1n1TjHAd8JoW3SK4PWNBZsgEqcaf63ccB9kxzND",
  "key3": "29Kk6sHjjowVNaW7juSHLhvJeq8EcfzQdW2XvxeE7XuS4xugLXLApSeHNRECCwZRQ5VNDcjkY4Ny3bGYJP39w6BP",
  "key4": "2qgZCzCmi65Mp5aaLfc8GuwZD4wYD9ji1qwTFxp2cR56e2WTGugwuyud9fV637QvgHUWr1ZMgF4noMTuhhmKkE46",
  "key5": "skcPwjUdPZCUrUxs5ZR19qc3GRbmyfNKKivpsGDZxyRcE8uZBACki2aU7mBURsCqGqHk1U6FitRFxVzvbR2nf1C",
  "key6": "5mwkNTS9ADKvjiwWSFvdHekDd7NDug4VWeiAyP8pD8ffsXjXJQutBmiHi9aF9dJCcDNjSEF6vsrNT4BLtxAFezQM",
  "key7": "5Fdw5fLSbprfekFVu22evy16it5o932jovUeVqEQo79TijZuFAgQ9FGo6Fj9K89KhykPDbAYXgWvGAEUXNKULWJ8",
  "key8": "5PcEushuLjdeJpRnwssbBgi39Zvzd7DcaANtidCdmSF5AJrj1TBvBTUEPFQTfHyXtvrVU5sY79KmUyzoJn5V9XRw",
  "key9": "XMieQez5oXqyb7my7YptWRD76HuAczhLYZrGgPHMfr81GpBsjsJGqcTVr2Vrc3yUNQaoJzWG5o32bCLkQoXXefb",
  "key10": "49S8pZotxN5yBNx7NKPskmWRJueotDXSwYDQDPbiqNdyM8uF4y4DgRnDMhP4sJWe4eoK9HZgUvZSgucQiavuRLjh",
  "key11": "3yYvwP5A7WnoQYhjwvimSXshm11RpJw32KjqY1syx7M8a4wkcEATKoxNW2xTofmPyLKm7s7NCaKQNj95RASQcGb6",
  "key12": "2zMg7jmsQQ4EkyFcJmwoz2hHLoBXE9JQTaHHx7PRugj6VZgMcNPXCVjAbBD5waKmFg3sXUhneRAAUQoNw34J2b9r",
  "key13": "4nzLbDtWd7Rg6hXgw6jvr53Tih59qWU6QhHm93guHfLBi4eNm513r4XC6jXTEAQPKgmfpvzZB3TBgCiCfWccG3W3",
  "key14": "2FhLmPF79Sq4LEDrYN4ryP2fNnNkDvRavrFGXNKSgaLEFtYNCcsSx9Za8bZ7txbH2YGth1wapjNmQq8e2PUmwcGG",
  "key15": "5BgKwzQhxhHi1wLHuZnR7uPT2VDr6qhX47gWbCa1UCCQckMPdC51PBHrD4JRpK6bbvzCnRPwdz73mnFBBFbji6dK",
  "key16": "27W1WgesoXgNDA9zf9vKxti5wzG2Ry49gsZuLTpXLvtE2ShgqTaiw7QGZsjpCxSSsp6SAkf8AF5GhMGb2dcBNjaE",
  "key17": "4z85cZnvuKaPWxcVpJu8YrpozngivdGMnnoay8YNMApXZ1kTcFkR3N5harYse45UT9PGoneHdJxyf9UosWT1xoxp",
  "key18": "2318b4dAYr8H1F4a2dUzug54PoDnaKxUWfnFoxKYpEmTQD9LzPwCuKSPdXFYQVgLmx2mpi28FxfJwTB86WeT1XkY",
  "key19": "27WjWYBbzNDJ2cYDL9sUXdfdXdcbDwPBuVaqRLY1bFtZSmmwxSPcCkKNhn9RPGKEG5nRLSZdHUcKAwJfrEYcWqci",
  "key20": "3cRKRUy5pqCnsZi9WL9aQR7CbFuXGCwZe6pxupXAJm62bmndv226GNq3kdhJpfg81cwVvu2kv5nwVmYF3g5KzM4M",
  "key21": "3AiULaya25sTxXxyaXod9MF1hbHSxJ7ZjQprXJw6qk7CPoztThNgVmPtqw87DFu8w1Ciu4LyipiW8Rn8U5DpxqCn",
  "key22": "iUKJ7d3sMfmEL6nG3T2QvRAJD84qkiDLmydvcUSvb9kn8azoHfHewyBZMshY4YSom3Zh5FTUuvCYVfTKJBo2zgu",
  "key23": "2jzMXrsVhCsL7Z8m6hcWVqujqrgGBxG8ThuFVx9C495TEVcvCeAN2gL4peXLmTzskY9LY5wcqa682k4xKMVuTAAA",
  "key24": "PkR8PKTeG1tTxEJYKHUehcsrNEQcBSqLfPtTu4Ns37qZcMGVS98MUC9bgGJZUgkFVRMnUSXnhn9kUZt3H442LBe",
  "key25": "cpucr1LhWdGVTC6jif9Qfj9XJKtfbTcvo5nctpfKot49ienhJjWiK1KPwtKSdJPqMdk92HxQcJSnB7vHP9YNN8c",
  "key26": "N2e7q7xRagtFxiVDpG9rVy1x7tcDWGVLtNJQitfARi8YkV4ztTYL2354sjAsvGWrX8PcwUFKi1RWkTtomA3jccn",
  "key27": "XsxPuGDuww2gGV2qCQaHJcaxtHCvCGPcwJe4khwtowa5j3khMJvNHUTcxCmmHM4zAcCmqzkFQJgmaLjVtnMuVub",
  "key28": "4nrACrZPddZTuBwBZA3tFc63JVKGqCLzVWpDM5JQVTh54WqW6VCut67MoE2ZGEhveSMAMBdJTp5hXcz83q7V2kTH",
  "key29": "455sReAfAHs6sNHDMVkW3wmGsHKeQwCQpRqBKXjWXKdL7MzKHS9BrVZgvPfXnjdfDFuXvjCBZxeKoLhY2Wz7NLFg",
  "key30": "5ziS9Tken3LmHdh55Esh2QQNUtDysFB3hybzdbhqakHTFRbsFHUrAkBTUotnFEUCt5u9s4gg1GerTsf3RVMpbvfp",
  "key31": "36WtCKAYeTdWm9DVxMvWynYJiTWioE84qARNFTiZBJDSWnwyQ6H3CpnKrK3LdAPkwggP3iazSWzYgoPm5gaXyk1a",
  "key32": "2C49tdxmxAaWs9KzeqeMaSix2fJMspjN1Pd4bCLpioqS9nJ8oUbgcvVNt7wju9SLcSfmQduUegvAPQE5ZWP8k613",
  "key33": "5CfMdHPCGjGxSK4GmUvwSFS5c4KrepDiTKrB8AUnMcVBEeCKFkZTRRpQrkwucT9bnvEpUQegX7sEem6D1s6om7Ca"
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
