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
    "3wJX2Ddghae4MxDvtvPqcUGVqPtmd3mJxdef2R5sQLTcC1UkvNqkaGRKHS6b8d2dKKN8AmC8iRthLnw9YmUFPLTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4wMjRpkLAfQiGxPS2XTEnXxryaXNnSH4f8MsmvXCvDYDRhmJtzEKapLCgjyiwxLCAXEdufeHB98nGmhntC5kc2",
  "key1": "5fJtWfUQydvdQJNGPt4qb6CcNUgZnUH6H4jAu8St8GdjrP1cB1CCv5CammwXdUQ1wh6K9D2urDN61U3BwwAPvsZe",
  "key2": "3FtcwDZjfkzNqmBJR12iG5Sxgr5WXtCfLFCk2vdKeBmBh2w3ABFDSPyPw7VGNVaVVJgwYSYgeaMfAmKMH8BsZDX1",
  "key3": "2NSCZmkbVDWGj3RCPTikFG2T5nZNofvMm5mfNaTHb6yGbBzMDP5czBjA8yk6e2zF3tZhXBU7yxoYw18ubATbsrcj",
  "key4": "2TufHCEX19WUhG5ohRZLmwe2YDZWToD3dCrNbUpr92mfEce7yLYDydxDtMX6V5XTANjeRYLTVbbpNj5szaYx9QY5",
  "key5": "553CLXtSb9BCSgaAgiaL3QgR5Qvp9VvATcj3KxWQDLjGNGeiXdHE2zTpyB4yCRoepGCuqBLv4Pu7maWBqqiXSrTx",
  "key6": "3XztZwywm6QbE1tmpJUfUBZgqppMgN6G7mRyEnMLRiDiHYLFNGou74tTqqXpKzAvcw6DWmifqkGga6WY7agkcYNs",
  "key7": "38Nzvmp2sVotWBcwvN4CHqqXaPseEoQW8CBPR26gCw7EJ8sZBEFYwYprs4TwCN8PEsMvpwkgx6izDeZRERhPiGv",
  "key8": "4JcVGq43hzTkZYZWjUpKWbWZbqEhndDAK5H8uCp2xA11pW5gdDCfnUeVmiwMDoDGGMvQfp1qgjYRCMF2uSWRYxt7",
  "key9": "4KwZP1nCFm9W1nCZttm11Cmw2ajUsNZm22SpC9UGmKLdh28USX1cCdEDv69od5zjr78wTSJvMBt1wF5x7zFERDhR",
  "key10": "4pxnBNzhoJeAsYGjRaAUNVFBRm8EYgKG9eBdJahrhhsQHTiscZSHqQLdSHtmzbhxAid7aWS5BGU5hRL8vdJocQoK",
  "key11": "4PRRwdVzp791F7tr5Cxv8xxiMuo6yfgyJ6CsNpGS19XGS71pNJzKbwJb1dY7gKQC7gob6G95xKk3askwy1ane9xT",
  "key12": "JV8M4nQf1SkULp99xKPWvkN2q8CS9D5fAZ6ERYdf6eGhPmjya3gLJu2CRPvE5UH9vYRp4i7rvLzL2vsZLc4GQGM",
  "key13": "CWoMEtJVGhTZioxyWgiS8AXmiUVdgjg95c7uBPLDSSa22wZbMMd1enADvA1UK8VcKNWvND3fqz4gpMpDELpmLgq",
  "key14": "3Cu3YBTZFBSZrgGAMNvKpgMDbJosjTx7sZwHA5EzB3rNkj4qvjWEsTPWPZpgyqJYVjQgYBSqDmg6eHGUCmLaK2xZ",
  "key15": "2MhKXhTLLiMTMrMGA29ii6CdjFyv7ckMinasKdxRUp9ovLXEcq9214PNLuyPLuZwepyXU9G4V9ZUxnrdAHejKKaU",
  "key16": "2nFNhAu34cYp87UorWjuBa4Ags7PQmXZ6m5NNPCnY9YWAVfSQoDn66kuWd8icfE2vund8fJiV5h5LqUdPqNu7bFB",
  "key17": "LJDGEFHiPNkMEor6Kni3cJgAiRE9xQByvzB1zGnnNf1yWod7pWbn5VmUxCuEsW5f6B4ZXQ4raWzrHanB8NecPMJ",
  "key18": "2fv9w8cpUVMPyz7bgVAS5Wzc5RvdUAmEDApVhmkrMpU4vDYdmv9egaPV7cTxwkBk8XiQEqT3yn5gRbacdQ3gtL3L",
  "key19": "y6ZiyeHaspxAgmmKcdo3LY8g2SAVysavHM9B9PhnmbxmDsqXD1Hp9xSdD4bLStSpweJQApvCHoHCvPERwGuo2WG",
  "key20": "4eVXS43UoRBMotrSmni45qV7AwjnERgmjfZu4VB8Mt1hjKFEWbxsPYnVHYJSTv96fBZn6uDeWLm8FMoPvg2iU2sG",
  "key21": "5zqxBJace7JSuydk5y39p5yvEBM6FXZHXsoVb3WpiExJpZm2iNH19aj5zDMCP4kjLCTr1CFJ1CFMKUoZYKygRyLL",
  "key22": "2QBjN9d4L2sQ5B3NqcyxhAFBrd6YaaLhMCw14CNvzcVGpWpDjErhdCHtKfLXQx2vH8C4JfMwbQkRUXVUPHDy4h23",
  "key23": "4y8hxZFvvsW8cazuJWjGdR3Sr8ed5CHMva7xFQAJ2REgCwfjVhWAcs557CaFvPJ6wthD5tBHjyLTcuuZUGiBMNCB",
  "key24": "4oQLRYLL3MRfwEVRMnnsURdL2gNvsd5heDZxTPtLGam1kMy9sLKfhHzBJ7DL4WJTzam2o7CuNZde8MC1nM37Yg3m",
  "key25": "1Ng5AXuhiNyBXhrcWVNG2PrQqoxMceSAFs1QM7zpFevoDtUBHjgUkMRRYweCtCK7MR146TvqhdCxPqgPBhoTt7T",
  "key26": "2fA5TTQX8LoAc3X66zCnQQ3PK2HNjQ7utKEH3ocYEXrJR6KdgEjBJiWAGMqybKv2ezq9fZuHFtVHsAHuu75pkV8B",
  "key27": "2R8Ru62eU72rHzw7GcCKJpTB6UHwHFykfq6ERLm5QZykd4gMmHvqDhH4Q48DJAoVcA9tKbhmpGF7CX2pUWd2xhRu",
  "key28": "3sEGwPexwJNLKshXQjeSkZhvrAa2hmiAZ3E3enxdayqZjC6MCtgegTTHVrXMw8uRQtEBpqVFSBN2ZBLMVKydBVxf",
  "key29": "2PKLXB4MSAobBBL15EhindiXsMT6WL26SbqKsbRopkMnpUc9yhqFGisBLE5tLE9vMVNEpiQ4y7AyS28mvZCcUb8Q",
  "key30": "2qzHaPRvmCPVaW476MnbGWMNbP2ccsJ9ekB19bFJ2DhqeGKXwhjxTxPfXdSGwSh9bGd5dV4U9M9PUCA4mpnQVuU6",
  "key31": "9kTh5m8xrRsWyRpYcPJpNtUsbgu3JDNKAbYxEvN81GdRQopnHGq5nDgpDiGk6Cb8RvWexYyrBktySvsjrdKpGcG",
  "key32": "2j2WDvqTfH4DbSubsjPottAAoA8Ta3FVMXTDCwVH85AwCTBrmy7YihKvtcgDEzM2Dbbqgztpt8AWza6zxUBdV2UY"
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
