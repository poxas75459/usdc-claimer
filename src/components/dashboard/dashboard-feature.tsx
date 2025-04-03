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
    "HZHPVwGnLexF7EzxCafBUgfbE2q6VHh1wnFSdEoZCbBPPA2yMjtuqK4xADarp22eTYqHQGALzsiqhBKUJdo3JjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rPa7T1o1e3YtbXRqtSrfWUDBNjjBAXTt4Bb6y4Y8L953CAwWAidsrxGyUifXEmNoghg5PVCcE9XU6mbvTDqk1nu",
  "key1": "2NfLhx6cv7kDqbtUEgSEkEZV5CYWjDeojkPpHYgcFe25e5y7MWQ3PQkLCiZ6ykg7iG2Yk6qhGktdgfpkwh2JiSAf",
  "key2": "2CEdryFWer4Cxmzj1oUW2x9WZURyyLNQ1RhQvnK2kVEGnNh2XsLsP1jcgqffshNQrHe6aVVY3DJmPS3iqhdmhrSe",
  "key3": "4XVP8HN8dDxoFzhaKsujztDCGECWDNJ3oUX5toZtZwHhhAYJmBcKZ6rBvonvBHUM2VBv2keLa8hb7gaC8JLct3ti",
  "key4": "5mKVRee1im1aqN4CPd5A9E3A2DsptfJ1NmiCuFh6A5XG6mySdvrUaMgLxWvyW89kM7dzBfhWjEBkG67qYCpg5PHa",
  "key5": "2gMRcVTqzo66kihnJPdqJEY3iBQRoebCMfUE1mXegniHBSu7QjpCLR2NFBCw4fkgzu1xAmWrtwLc3MBLQfsCb9DK",
  "key6": "4qn2nHb9ypB8iWYNhsp7H5qSLgPs99EyZhYU9iBrX9aX1tcwWX4kBJT87mEtKn9RCN2skAdjJSC6yqEKnVPJPXov",
  "key7": "4zNQhYTbdtJRhjevQ2u2cqH5KdbykgL2M8xGjRqPJN7DQKxY66A3pfvN8VrxrksPnU6wWkpJMyYYRctPrB1QrS4F",
  "key8": "3fNJ9UeMh32SXC5rH5XTmFFWxUH5z5ojzZezRSNtGdhcncJyoq2b9q79kLDLiHMoQheq2SRfCNRCjEJp3w1m5LbW",
  "key9": "M4A2GffDqDSQgKRaXteNGcWLhG33CKhmo2dSNcky9J7dYrJArFaGbFa7UgLVbgEpbzPyCJma4Nec4rQ9iHYTw1X",
  "key10": "3Wf3LUNCvzTm5rwkzDEKWoT4pwLubJu6noJcwhYkwt6SrFNj6vKhCpU1C1YynjbcMoQ9h6h6G58XzeFytrU2pp4Q",
  "key11": "4Crj9yg5hQcZQBdz4pj4oCLTCbt1J3iFsiHrEr5hAscnwgC3jiDmmZVo8J717MCzWkDYSpUfqu1pKKtFD6LtPfD1",
  "key12": "2o3C3Fn6ZiQYFoJofZjvYpA6nCRadMR8s9fviiNi3KZrFNWYDdQqCcRC8eqmmgj7W39Y6ExqkR8araQJ7KVyCNYf",
  "key13": "4HMWUBAqSvREXA8CGZCZ7Jf7o3rep6QEWx2ggr5Pw52h9bNfZnH8ac5REHQuc14kworn6ifYeHPSi6WRzJHRuo6t",
  "key14": "5qvX8wvvzSZjbC5RB92pGkYDt4ZxJrTphUETKtqLy5jpt2Ao7Ns97WCNdMyq9unqsNQFsfNEjggk41qsqJMHqPF3",
  "key15": "vcEMcYGgsghyL2P469fQnS99zxuK6b5fn9QRjsXhkhzjK4AVyTGFkT77ymLiF93sECRAw1B7bwVL95t5DCrD5mP",
  "key16": "3EFdZewJxSgoZb362ALTQvuiEyyL5k9SMQ4gTPCrpbPdGbJxS4dgqMBzg361oa6WUS6EtZNMR2uLyufYCASK8zvJ",
  "key17": "5nWqNLXy59DT327EkPZbzy1bDkYZpHn76v7W8q3tFfHaEUdhr4TWgaqGjY2cUDovyqsZoHNsDrLeqVG9jzmLfiTx",
  "key18": "zV1hXx7Jqspm4mHUczoTPk4vzB3t5nofrmur2y3vKyosqgmA9kHEwcFGgfcspHvq27AiCbShikhgPLMTUxmCY9t",
  "key19": "4H3TXnZi3uv22gZoiDTUoN8ZN4AKkxHnBrgEUCijX8Jjobx4prbYZLvZcJg7Q62m9BzwSweFHo9mMcS6KoECFnge",
  "key20": "5yMGLzpfDitEwHvWjDpszCyGSQBznNu2uEqmbStQXrpXQeCvQX2a79sFv5QjJgPdn2cBNKXH2Ea1eYAT3MJ3xZoG",
  "key21": "qp4txHwsiSHceBTrMawVEcCAoATDSLH4v2yjWHgjeePDcxJTjmPxyny84kAQhaWJeSvgVuVq5fMaRciaNfDQc22",
  "key22": "VnCRsNoKSgc6WMLC7mWTCXdncBQDkLYz8vn4FQekVR8osxf3qiKP62oXwL7NZ9y8CWefRstxtP5jEKS72LNY1U8",
  "key23": "2WyGxsVmPDwuriXYc4G2A2qgqBzeMmUu6biC6K9oVqSVva9A6P9u1uU5UZyxKv7vru5SAXaPTMJXxp1mf7avikbQ",
  "key24": "5UTjKpFYrYVisR3u1PCSYEqZUikAjxgyzb7PXhvvwo543DpVJJSwVzxhsE9dvDxY95TVF4d5fHzE8EufnECnwwCN"
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
