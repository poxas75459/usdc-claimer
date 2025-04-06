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
    "5mQa553ffx2nPFqMWXbijAqh5ySoa3STyCmYvswseq5QysJAQ8hAwK5r9eZdHQFoBxZLYTKx8AzWN3QmfHe6y5JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWHqPkLuhDJf6rw6Fb4YCZA8KeeELivbdX8SDCQ2Rd3cVMLGU8wngerWD6h46rHQucr4m1a3TypygmRtVWQULSQ",
  "key1": "cTnhEND2JmzzBEJAfTccVLxWSFxBxCqhjkEpiazBnttTihCi6d8Pi6Xi5MCNFhtsm3veqBoNWyXm5LtN6dCtuC7",
  "key2": "b3sdxSTcDQFAwoUVJcQLtpJxWyP7Z5WZ89fVTjNreLs9N2GKpCFopZYBjTyVGcf3tf55Q5NQRKM5YUiEces2HNW",
  "key3": "HtqFk4CPKU4tu2xQPqWdYpHs2ypFxteiBYif25sf4QQXV4HYtrcSCJog9NdHsqQadAKhcmL9514rVt1oXNK9ksa",
  "key4": "LKYTeA9Q4VcxwqfAi4Ke91dcE4p2YCa1rQ7rDqWbQy3BFRCd5KTSvw2RmyroTw26WtkFqCmDdLLaKGb6asvyoWH",
  "key5": "UxDLpviYoNx3Sr6UYR8WKFjNEAq534CHAVZFv83HTMiihMAmxyu9tLrTMViT7TGjiNrjeHECBKPzzfoy1Pxrirv",
  "key6": "3tvYDqgFvcjiP8z9NX3cAnFq6Bko7eEAbzsSraWWDjE6Tw3KY6VJNsLSbZmPYbLmiFstwCDrmuNaRwaxxbRToTmg",
  "key7": "2oV7EgFqkUUM9QU7XrLA5Ma7mdDY3DAR4nTaHuXW32YSZQ7JLteQwiy7d6b3motn5i6M3NKp9XesJkPGtP7nLTo1",
  "key8": "42eyowEQEnQuxfSmmakHp1nQ7AJKsrVRndr8gpRYHecggbVSnpPuhkcy29SeeGMhYa3ojcTrU9qYJJQyV9RYHsKM",
  "key9": "PcpuikSHKmw5xWp7pk5rQ4PwZvFakXmXgukKe9gnQmuHUzpQs8YLrNRcYGytR58gSqZ3z9dMLBdbpyVZrBhJMFf",
  "key10": "dwcnx1DF7j8i8qT6juFMrjtiUAwSvZjHWcHq1tf5TGh3oFyGNgvNfsBJAc1VLav9L5essUUbQWCnrU9DzRcGJaV",
  "key11": "58swLAAnv7NXySZnpNxLffaNhReXMZa2QKBHseahhVZEJSLrLEmGr7XoEjG5AyZGA7nmgPuTojw1ZCu2QnPqUGtk",
  "key12": "3aYGyfEwCtaQtJ6to9JLwZTxM4C32WV5dwfyU6j8CSNA65hvuF9sEFkXV4knQfWzsDbRbkJrZBhsUyJGatHGcxkT",
  "key13": "MQef6kigeioHt9qU1smswHiYFTGL7QMEwiKcv6BLhwdZSxyHdfGm7MAg2UDZVajY9t3YqBj35mjJXtZLgaWah8g",
  "key14": "vXH7V1CUu3VxtXPxrE1VYKEtoL29TUqxfDYeijWQPmtNLVMdcHL685aBVBHGefgVuA1FfSCfxs4tHQCVm7eftRd",
  "key15": "5ua3FE669nBJBVu6Y1RfbP47ejM9G8wzWox9ziVYRXbjYocShjvEetvhPh5vtj5Ei2k6rRaCih8LkLdWFJPabN1z",
  "key16": "2LpCSdga1DnVM7Vxy8sqeATLjRsB2wjSS85VbHdbHZ9xdEncrzgif2ZKgPx6pefZToVr6beeZ6ZG4LPkGh61W1Qb",
  "key17": "3bqXjNkgWqWXoRKVDE5dRRrWoNSbz2YVocSrh7mMLH2WdPctyopRQVRj7CWwukuB2RCFTu6P2srLDM5Rkop1UHUm",
  "key18": "5J62gSpXfvjJqg71c1V5X2v9sDXX5P1iWYhXpXhb8dPU9fY6bmCPRJjC62D7cWW6DbA72GcLr6Mb3wUgu4nEuk9Q",
  "key19": "57DX8V9hHAxa9eMZ6ovi3VnoEGz7B37aFNC6BBqMPqXvwEUU7sc5rrPJ3epjkvG5sEVzZ3uA1qR4Z4CefTEcE9Tx",
  "key20": "5hWYdDNiGCJANvJ1uqsRd89JGsgiSkvDRkUgUb7pBKwGdH6pEfccaMZs1sneLHYQYvNwitQvj2FabWL1RAhujaYA",
  "key21": "8QgeL8AzsDT89QtrGg7UL4GPTK78B7Fd2MvwVYorY7FhJX7y2Fb2XXsGpwP2ntqDYr6BNvcXVB3K9fz4wGUtH5C",
  "key22": "sFUj59VDMCB4QZs2npM7qKFKFD6Y5GjTzReh6B8oBqZoZLh8FNeXjnTGC2DU2KgVW1h4Mej4ksZTHSv91EQPT6R",
  "key23": "uHFSgxY8xq2vR8sTVmJTpEkB3jwS6jVztmmK7qSBVfaGywfcjMyVhpVCEeQc1j8QwzVWJF8M45BrREQRtca25bW",
  "key24": "5oDEsqYHbLPfz8QTDTvo6oMLb1wkntqqK8EnKyWnwHnkzU1qAfzASdZzGg53k1M6eYsuEu4Ajq7NHewc62oUeZNt",
  "key25": "eoLt8zq4VbZcD85MjnprG3ShfYcfbTCtQ2hVxU4JmPh5RL8sKeAU8PdbRqEjeTZWxMYenFfAzUseE5YZRGvZ4Rv",
  "key26": "RvzfcG3Wf21xivSJYzKhD7KiHNcwzVLmbtxQeEh8bhn9HJKvqCFqpfUnF7qC3VmjEV14zUEvLmaxR4K9ZFvtc9f",
  "key27": "5tD6bHW5kRquyTMNBKeLiQqyKwbs7P79HeT93i9wq1c7rEwUwD89Jd5CdM2oiyw5BVrf3AB28ax9CD84yKqhEam4",
  "key28": "ZbTZ3Cygj5DaFKTjaxQXbWj8bXpm5ur4T6X8xJvc2UdjbSBKZwbi2UGBFn6oetYgv24T15ixpVjXkdQ2U3h6jUe",
  "key29": "4vwyncghC7BpYJ3rmcib7BfPqPMQHwtcNWZn5LimcdimJX226Kh5pCUQA5RKhzmwRPzYS5TZupoq7Rqc8kA51i1e",
  "key30": "3PJU4ZMvX722P8u9H73D8nFJRM6rnq3gQ7nKeQAx51DvMPSxwyiD3yLxt2rxmtifXEm8HfyMZn8ma5wcVDDNXKvL",
  "key31": "58m8T1reiyv1b6wVu9CT2BbMtHzcAp4dshpnxcEm8QbTsUk8xRWTaU2Qsd8GLtK8tPPDpL1Cg8JxwMB2dQuphDaa",
  "key32": "5QgAZUUvvBGhMSmzoPYsFWtwXkmBahXhi4AGReF7CyDdN3VehTaSxhrbqcFpAGqndWkWa18hQmnPHiwVd9PwHoMD"
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
