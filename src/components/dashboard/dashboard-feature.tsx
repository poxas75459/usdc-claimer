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
    "3UiEw7pNcLhH22aXgaNnHakcBFvFB5mtDeCHsDVRN3LwGBzuwkwfw1uN3J5BFpcHcS6C1qGspJdhVP3VB1v7xmtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2656Wzp1EhicDbhVDPqswRtjHBtdmuBqZw9vVge4sfLyhWTRiz6UWGDGdgemEHanUoHvMHYrqv7HXQdBVbkVH3S6",
  "key1": "VVMVTknLgcTW5PCqTG4sxhwsmkJLX5nZSwZcbE2uUeUvnF8yCQkxu4kZeALSiZHGRoMBa79dDyoXnB8PgbN6yvV",
  "key2": "3brqWG2ePkdJDrQBUq3DyHmxZijGJdKpemKWGkHtjdg9LZJTYb2b7KB3SiJjZJZnndxmkrsgRa42sBDU2BkTrHan",
  "key3": "2TqBtVonmt77TkwJRwKWYZRTi7Rft9ma2c9kBPccPFgj8bE6bkiiAz2ADEWHaacrMDResNqCBXeVZcBbktuf1Yn7",
  "key4": "3rCfE9oLmANDww3AxAEVQ5Xh5GeySWcdGLV2gqUNpB1ZTrWJx6H8Ag8RsL8ZajHg9qxKD8dnqxTtHWHHnYqbt2Fe",
  "key5": "4aix721qnzog82r8D2LiBKMoadB62ogzNjobcyeCLGz53M51xyTqJj159FrzFZEhEhezqQtdBUm6Ka3NKxcFh6Fm",
  "key6": "5UBMsWBvXzGKau4ZWfpfyC7SMpYGdjLBdqwU1ZPmp8p3JQpqG57xMG2HyFEDiC8L4Nam3pJoA2sMdAkmLy6FvEtP",
  "key7": "4xYrHw9LbH9jGPxBKSBU2MojhV8PXQVeWa6q9WqSy5Qme9v8CnZt6zy3SswJFMzXmLeCx4cdGzBsHBiWdrc3sSfQ",
  "key8": "4X4taYbkxqt6XRwwP3zb2iA4QZJgdYbMN8CvrE4HHycnjj7LF1VQ3hg17tTa1ajqNaWfnPV8GJurFBpYT3BtgkTf",
  "key9": "3bmGHV8EV9q65fSKbZxEXntN478guZ7dbCmQW267DrJo2TwJQqkTcCBGEAa6z75ZEwNz5uHa3twUjCSpGBhgNU9r",
  "key10": "3MsQafvyuKMdR7Q9dKF8jNvazUeesnCB1dxU3rhf7hq9e85NKpnDxtGhvwJwpXQBqJq9kddNYzp4obDuARwidceV",
  "key11": "xEo3v6XUS3GfCwfUL1TC4DcN8sdVTUnVnmNEmGwxQWFcEMEa2dErUTsp6GetvTNFT6YYTNS5BSb9WmNcn8FCSBQ",
  "key12": "5tPJmXLWVrAH5AjiofNzr3ywjAc1Gn2qCzaHB8jqxGt9hPnPu2cAeffKoodFZqQ8qB8aGoUjbezXRmkQHmtAPpDY",
  "key13": "3DGrekon2DQMZVwiSHYCJheKhGJ3r9ZMRcxcdpYNDBMDuDMFiqeZgbLd5kstkrjKcPq1eeUfsS5eWvs8LU1tDFu5",
  "key14": "qnA83djoHg7So84KJW3SyCG9H9P86rhzEYVQde7bfXKPafsG4MRAJFAAVfGMcyVmDnzsc13UjxpC381XfFDpEwH",
  "key15": "4W8MwsQpRHwoCZU3Cirp44Xa4UjKYgMe1pf4FmHEZvLgoJukroXHJAx9fZos81T4gqVieHMLRBUkNm5KWj7ZAp8u",
  "key16": "5d6s3fFGA6qBMoRA9SuMZzqbTW2Jg7T5Jrj1xGz1vXtxHfHAn4jdrHmhEYgRk8Y5d5y9Y1yDYFBjq6EhcADVj53d",
  "key17": "33ZazVNHsMSoDvJF7H7fT9mN3d8a7K4iGMNmfmYwjMJsK4ej7rURW6BCHiX7mtvSPQMdUS7x8c3MKDJMiLXLTDU5",
  "key18": "R5ZyNZvGUQYPu1tkkKzNa2zuG1D3nxRay2SBVCyZ6er4iMX7Gvk4Yx4DjiVWyVEXPvSLiGgVaiQrhrQNxcSBG1M",
  "key19": "3juoSi7TXstcsZamfB7oqbfMrY3adq49CPtnhwNn7DkZeEuA752TMapsCdnYoUJsBDENkJgG1dXGYNMjBUS64CvT",
  "key20": "ZpuMkzFTfLEqNHn1CKf3fjCtmy1gqjh1Y8Fxc9SzPATg1jJbWS5pJwXMCJtTK2P38WCyhhWMMEGqH3mfD7wTXdt",
  "key21": "UdeEYzW3iCMGFG9XBzkaDHqQRdnhfUcShBWMr3FUeDAWT4TGr6TUrEmaiRUbexDGBYkT8Dko4sGbWjdAseQS2HA",
  "key22": "3gLxKKfcwuxv2Mz3a6emqGsAfMXL5WRL95EWN2tzFVYqwQ6cParzKZ8UU2hDFcnnFh8GDMb382M6J4LT14kdDZEr",
  "key23": "3Sj66HjmVn69L6HLE3Mv3MmL2igBqUM7ggMxo87Qz4yNGT3BFpSbAbCXq3py5RPqLLFudNc9LKD8TPr5JkfVcwzL",
  "key24": "557sZdRfj1P737VggvTvM4LNLAgS9faaMAird3UTqG5mqvmGy8xnWWsxSadB3F4PUjHuXuLb93sxazYr6B6ehFDN",
  "key25": "2ELnvSmetVEvPdkDAQ1hn6Wa9tHHpnT418Go7U9nS1nRcELVmF8DLDfcJ6m8AdQfc4ZFPWdFvCKarZxwaKCHdF7r",
  "key26": "3Wzk74T1rSS9ijr5xQHxewg89GgmmFPXy16eyZuWMBBH3nG4d9NHKm4b2bvGtGQxsR4waenGfRg8Xzy2xtrbQ4Ty",
  "key27": "2YCwfCQxFMrmCCvqvz8qQG4WGm8VAWp5aEdQx3F373dmEg25ZiYiusMzcFEmzhdxNHJpoWhJxxg1a11LyMMZTR9E",
  "key28": "4DTXHrtGgkNoqqyQy6CB3mp9DTAhD8EmbSCk34ZD8ApbZ5zLS275kmGhfH1FxySGjVwZnJSC7h1i7X2rBskt8tcq",
  "key29": "2JnY1CDu21MWjcA95bdEg3AURH4359HxzGgyQZuVCkFPgVm7sQPmji1jeS5t6MpQ1mUb1ibfDFodTHxVGmVUP5kp",
  "key30": "iij6Ejg9ZEA9vMwD1mbmEsyUG8Q3yTHLKzVLSqsMzHBthdBFcnMdCsPQmV3mzk48bhTRwzJf9psyTBrz4PL94sj"
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
