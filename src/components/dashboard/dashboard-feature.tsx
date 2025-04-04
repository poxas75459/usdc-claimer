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
    "4NU5G87oeAnPnmjxJMRHLWSHbYqcW4GPHUpJTiidyzVoP6gqnokSKDEVfqdwaN3fJ7pVnfANfssebyzgADuLT2an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31E9QzzTSK71C2kTMr6EsgGb6dzBvznEuRgMDzKBbHbCHHLnTVBcbMrDczaBbJBaXM2cg2rtWEm9MXc9HoyDH9u8",
  "key1": "56x1t5ntTBRrc3qKcKYUvuPFXTXfMXXE78kPps8jq1FPAB119NLwTRsa76Awbfm1AaChxh9BUPAWia7pk82FS3fA",
  "key2": "isysZTD2qTCr46uv43gYjJStQwdrNffKdNENuiFAsY4c2y9rVb4Gca8stwiGhHoH6K45D9ER5xxbg7zcGW8Ween",
  "key3": "3yrp9GQS9zYQJgcJ73yF7pgVJxe41pwcsjDUgwbhttZS1B8zRjytHrWEv3VGJH1JFbaLLrfnEVtUcosSo6wZVAe5",
  "key4": "2FMkGpjcsvFSLGEyCxpf93qhHZyg7cAP7aBh2LMfmXGe22ea2DJKaM722BNAzTvi82wFx1c3UFhnRK29SesEEjio",
  "key5": "2oFdddzLhKp8FhBUCbs7rgj3DfBP1zJULvKVz82C5m82nHWbpoT2TzzoBFVd8LBD8Mu3caoMDXLyXZbRsoog7uWe",
  "key6": "2oraE9rnGtFeAbjFu37J5DvyfjPhkvffNC2dPbbpY7XVbprpWJ9yMtjZoxDE9EvgfUA1NoewMof7KLyNFmpMPe5S",
  "key7": "xZPqaCyfNGoGptrDNwuRX4SryEs57FkNVUNgiM5btVTva8HvacqNQT8edMyBWzrrFNJNgQUuhFMj7xbT6V56GjG",
  "key8": "4QNtBpUevBNE8gfaDxG2UccfLtZ1JKV2j4QFWzhbeVPGNu4n83aPaR5gsHDhyiCrM6vQgJuYgqJmAvntZsCt1XwG",
  "key9": "TVWbA5QJ1W67SLU9r8ECicEFZm4cbKdtEjMM2Ztnx5B89hAFaarEankTvL9xzgMe5VVWQgxhhVD82HFouKLGH1h",
  "key10": "592DTMkTSGoKgckjrq5oPpRpm9xJeVkBpqPjs3729yYafVUmzH7mhtaSepJRc2w7QYP9NNhgNk2Twi3uHwYQFkkw",
  "key11": "3Se1USoDeVi6GJhAR4kp8gwxWWjcteJFjZpWHtRBnnXvbNMRs3p2PG2QZ8xAQKSfXLHnb1LGvQnXJ7XDFM3f32gi",
  "key12": "2rMK6e4USGv2G9paCdQoLj96sU7B2RC8ComUeq9xsGHNJtPXGXX65PrMX1A218dmEPg1bgq6pywX9E6KLvG7K12y",
  "key13": "38HtJVGeutjmq3eQ1i4FxzV4cmsBehREvCdvX3nAcnEFTBqSCaAN8ZPgVcXqpeyJX5yeRrUyp7KxaACRutf1owqx",
  "key14": "3JYU6Z2sF3emDNACJyzDkmefLyECY8PQnftGUC7c6UwoK9EGQFnzgXW52tJ7ZmbCiyumzaAVfPLfsVWNrT3VMTh1",
  "key15": "3EdK8hJ6YFiXQVv1ek2tYb4ccv8TLJFyDC44XSFgd6ARGVQ9bvsvuV87pzqBM4h5vjXfLbgP5P3Py5i7J57esa8v",
  "key16": "2paLkiWR5r5uDt8TC1hzLYCyHYiQxFqnKVnrFjzoZR27hXb653ryV9iZyzcQP9rBD2LsrBMQiPrxtM7eqsbXCCCj",
  "key17": "2yXoV9qdtNESbhY1anpirV1isbSDw7VGt4akKbasj2BFvKX6pEV4MoCVbobpyfrtJCk5ZuwUpxQndjJvVpcBojLR",
  "key18": "QWhxeMDmHwvMZ63x3gDH9MyQtAbj3VppWyzEop1Lvir92eWXffPTQZL1HLgFWyWhBRupCraVqcANSxtp3Qsm5Mk",
  "key19": "EEYwq2yF3EfTD8j8GM5iNmbPVFEosorru4fVdBAPHqmGftoaFcZb6rX2VawFQRcfYzCJxqUEfJBwhqsE698LxYL",
  "key20": "2ZY4kHo8ykV5DT7xm3DiEQCi9gr51dCZyMKys6Dn3hdfGuYcXB2J7oycR1xU5aNa1gppXkzCRx433gfna3ryshTL",
  "key21": "3XDaNQ1F8axAYYQYkQnvdET3JoYcHx8nYGbSMEDKVByaeNY75TB1Y1TrLnQDDQBrtzRUfTvcKUQTh78cGdGvHwc8",
  "key22": "4zK1w6vqJMHGCKrejKzsAxZpBVmxrQAeiCMJ5jwKif7dJiUTbyF8JvJ3pR9zmnHzuT7Noq6u9aAeYXYfWadTMUkM",
  "key23": "5FSQswR5TrzMjiQbh9DJf5qUb4x9QdFfzV1Kvb3bs2riGWmyTFXoQNYrynaRwsPcAUC2aAYVo3eUY8GehVenZYHs",
  "key24": "2zUXEvWp1RXD1rFttAqmkcW31XBF1wxVMV86UN6RQhijo7vZv7ML8eigfgQDhNKm2XwdFkjSxruhRBUKJrr52uzf",
  "key25": "XbCfk6PdSnzrDiSNdfQS7q7A5a1sAvVECUefHd5EYrKAJvd3G5shkDhvcPtGQEsjSJHis4itKkWF2tex1hyiZ5o",
  "key26": "2b8SVHSR1o1VSDSLVPZjs3sBdjgERtu2dsBkVcf22MYDB2ywYba8N3BkYkVHPDfMGgSFUs7C4CujzhcJDNTRauwA",
  "key27": "3D56bYXG4HGoGq58FJAGgMWgTAARKxkWwRxNxVRHe5hNFp82moSi6LMxc5fwxt8UG3TWsL8pQRgygdAJzA2zgZcp",
  "key28": "2BQasmhsL49G3hNjkh6aTTy8pwpXWzmcvTy3T95f8Mph1VXAP53cTp3QuFmysDjkuo7Cbrv9QYTeqeEo9P8xBtQT",
  "key29": "28rQJUnhaZyCW4W9ADfsKQjsXzyS2p9HQuBs1hRwHcKS719yQCegCASBVucHwgA3wP1aa9XnZrVdCdmh8pg8sGoC",
  "key30": "2UdbiCp8eku3oYfrbs2uHnqVGvrAMW1iM2JeG2GHxRNvseh8QZYSDqeVYMaoL454T1TBR5MPvQ18Ut72fTKPVWZk"
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
