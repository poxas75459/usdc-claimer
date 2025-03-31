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
    "YE8NGeCC6QxhLKK91DEJMU7dK4urcbtavNoyf9wtYNbp66731xckzD9fx9hD8pABbPACkdFLUL3b35e8bZFBsvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pe7WqxN8ixGjDQYAxkQcMNVcPfeXD6ZXS2RRpfYSZFGuuRwETKVzUbCCDzux4GquAYGN9hXeU85KkooLJTQvCQS",
  "key1": "2nLJvSBqB3pmz2x4KjN4aThqciGfhLEktpwoa4agEmxR8EXp8ez8eiFX89UuY3uvnW9MggchgMph1ZBW3ZVhiPpG",
  "key2": "H9ZXBcV2pFq9L3XCerRNS4xcVjaFXm8XZgUCSZQMQzRJBFhckWV5Cfb2TRT4NFxmbn28fFYzggP3XKLESWv71Pa",
  "key3": "4p6jBZsfNFvNHqLCdJtWJir5bPHaZbKuzEsDX2kAEC3yr1vaaKp8GHdTCAV6jPAhaD8UqH5x1nMz3vMHoKvWXct2",
  "key4": "5vEYENJQFT17KJMEvyPyC5NsyV5Fqpih9YmD1NEi1zPqpkc4VfvdkR9gqc5dMSB7BWFB56UxmgieyKHXJrN3E4xf",
  "key5": "3Vw87sUzaVQaxgkaZeBLiJk1ZaMAMjAr8hTLJRYyaLcSGRYVgW5vbeJtxqVHWWy17KFyHeKFDafjBXQcaRq1p7H4",
  "key6": "4Pez2KpQdn1uPT52bJqdj66yGfTq1Q3bgj5idjG4kLexC37reZd4wTivBhmQgVYSLESp34Hg1QLfvXGfcnf7wU7B",
  "key7": "4H4bjBK8rrdaVTwrSWSzePEuC6diPj3bp64vMrQBhc2AedcUTELyZkLHXwv6iZXJciN3n4ctKzjN4QXM1QEebcsn",
  "key8": "dgKqU1ij2NmTZHrY1vrQPvcMosxukyfV6Bqym6awXPoShpaafAn6sZzExQWL1qLXFZ2pWUbftoq5hCeobzuYonr",
  "key9": "2JkcJkyRdictorrLTQB9mM4M2eLe8EutyKGZY5H8ZJif9YFoetjQMMRBpevC15REwqEQuQGisTmDTEdr7maSL8US",
  "key10": "yFCcTKcu7M8mvExCaK6cVFFbr6X3UB4fg2DYuP1tFQdEbWpG9pxpxSt1ogXbhVoCGoYUYFhYYHiCwKw4CWZFu8w",
  "key11": "3LLBsYXvwMPMmbHjn9WT8jKtT9czj5NKkN4a7stpa7VXsBtYY6DqTbrKwbw6v47bmpMNaeHQcDy1NFwSfapEhGY8",
  "key12": "5Zj9ghH51gom4YFc6jRWYetxiFXTyJxAsxCHa6qd6Exa3ZDu3ieeGP84yaJus4bYzNs2pnhccD6hHEUPPQTXwBab",
  "key13": "5175UQ13egtNxLihovhinGaXkqxG548ZgozzsjQJwURH1sjAXY31cWPoHbERe2Pkg5k2Ne3k9WQzC6AYY7EVVvCj",
  "key14": "QLASpULRaWwT3xabDgogteYj7iunwno2qjWEbEnWrVQUcZkwHBLd4J6WuDPYx8ZEEB2UYLADr2xWo3HeimXCAcH",
  "key15": "4WmcM9yTPAM8osDjfuqM1gDySvpnqJFMjq3VMpQuiVbzRgCN7QLm3CkfAvAYcqhgdg4xCPwwqy5L4QqNbZxhRpyM",
  "key16": "4j9JBUHuiAhZQuKZNna8fuc9evMKzN1ZWuq6vuYziSigKRynRkgJJdi5hE2ayXhSbEzHX4J292rJACD8Su3WSy8T",
  "key17": "4NRddJojrpvDsSDH4j4ZPaw9sFkXFcSsu4izW9fGseetUpEZXHaEKGd3NxdHi8vv4AMA1KJzLJsqv8sm9xDvAvjZ",
  "key18": "3xQQD9BcYFSG6g3nxQo3XLTsmUUepWsp5iDDr9YdfRVRv4X6sAcxH5pU3BiEEzhJoyuF62jkoquVdhRi4DRj5YeE",
  "key19": "UTkvmRAJ9ht3FgA6XrqZLDwL4VVfVEZSLTBQ5kPiYpiBnU6VS2XaTzAhoxk1F6iAN3LNwLnar7EgoRA5B9MHQCw",
  "key20": "2CiUqKpteaWX96gNzuFxzbccXSb4DRcjX4aRqiUmq4vfgoZVGxDJPKJwGawTtJxWSaTDcArPwwAsFteFY1o18jGe",
  "key21": "4gMZDfxVS7zDqYp2pS2KDSrGNACYHYKKmHpSR1dhh3zxbwgxxkiN2xxK3i4Qz8jBqQVE8Dz2tg3jTyiCudmMJ961",
  "key22": "22kFHTkE7jRVSyrwc2587gCYdQYLxMRn9DBmJQ1NbZnx7wcproELQLMcwkYrNmxzJyoze5pK5GQrgCvc9paJuo7N",
  "key23": "2qB1FN1ieiKJLB5SueYQD795PbUHuSp9tS9R8JsVzHNqkcW59oyKdSuNStWgrEqkaXFCVmsQ44Lr2mjrijJfmMDZ",
  "key24": "5vfUn3TUsWs94WkhBKFjXArkhskjh5Canu4av2ZoLDn74faFbN7GfdoNGkZ1VqXF9EycpLkxjKqHYSG5V6rfC9ws",
  "key25": "5cKMix9V6WjkH6iRfhe33qzkPBSGb2JKN7y7PKgU2E7dCkvXv57i2sPyCTKBLJXnYhmepippbEfQEcgNw6CUAcNr",
  "key26": "4Goryj7j37XjdFaTgFDg1Wetqxo4sWvNc88k8rdiHSBeyTSsdpC3v9EGHB84ZMgcvLykCe8GAH8wf2Hpw85BNyRK",
  "key27": "2BpxKUcx2AyG7vxYcW5cf1QkizJvRasbdK8XCbX3bL4WJP4AZBtRYdxe8YX7U669mr1Bu5HM4SKne5E8vdoQuguK",
  "key28": "THikT7qv8tQDtKsexhvsQyv8tq1J8XgepTeYmeGffUc3nrvmVDzFKz5T3qqaSQhcErgJag329595pAJayMef4mW",
  "key29": "4V2z72wpRRQ4RAAW4ddeSkLjo2B5mysLZtNzvEW9xc26PZoArdcGCGgkV6DQxKhewK2ttZjKTppN31kZNiToKmRc",
  "key30": "5WUF4ZCkyU9PdR3A1djZFtNLvGgfhx3y3q2NnrY5eXmMJq52DZpfygRqtQabrUuMdnzDDpmZs4hUVhWsnNmRTwyZ",
  "key31": "4yvdTTkXmMrdLjkEeZ55YQreiQTDFHaBQuRP2k3YxaPRMZe59Ef1dCCfX6DHEjHQkuk1tnY1zttMkvjqSJXRL8UX",
  "key32": "22rLGDXxxJxRjQRjJviEeWf5FoYK66Bui6Jkhs5AkcsUzNRL4ZffkDogh6S2vWJJzFurQ2KqoP2X4zWGMdr6UtFe",
  "key33": "wwn9SC6uSjeMvKdq4BN5yzakxxaGVWkUg9gSLPjEbUggfJ9wq7NXX3HwWxNTtb8UmTM88EhckT4u48SZoQ4Xr7V",
  "key34": "3EifWU9ApUeSN9RwWPy4vtJuDzoaQyvHz4AZaBdaVG1BCEBTzfAyWmVEHUKuQ4E7qyiZboJMDbAWLnAQp4ufA9Lt"
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
