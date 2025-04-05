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
    "DHvSV9YtjjaCH5cc9jyT4WR99D1wz8QoDWEFaACBinpVRgEVFmmBJKcT8U4KcdndipTuZhsP2i1QSW9CNyvdeiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkYVAGUUYDMoi3e43eTJGsacdPWJmk6bideuvd1M3oHRUV3NTvb2jmsnQ7xmJFJT8VP4rwNrnJ1VbEd5Y53H5m8",
  "key1": "2hdAVV2Rk9AC3uoqjXGMexXb6Ed6GzpE4S364nwdb9sfC7pVjzvFTMyoSNAXFzByv91fhgsAzTWg8pt7mUfscp6t",
  "key2": "2bh6xJdNwsEyJ4uuJym2QVapkdbTUvDaX47whiKKwmBnjYkkVxrVuRyjQcAY1dLzLZjb8Ww9RoCs6uKTCDsf2ZWQ",
  "key3": "2Dm4GkSt5Rg8XnDfu1g69c5a66kwUVGM1k5J7RXM1HSbHsEm4C4aCYh8yRLr8NCNDJtMPo6bF8Mxe35qUWKDUebw",
  "key4": "5MNeAefY2iVXSRiapPGSC49HwVFieo5RzWsioNtKSkgzkNifH8G7m9JXcg5vuAXwLVTthFT8wQ4gT5XcL2GzHSBX",
  "key5": "K6Tnz6mAL3reAijujuet7LYsVFGT8WMedGx7wbdb4JHQuVBaVcvSA1jiEsLNF33kwJi5xUQwEq9KpL4KWS5ZtMm",
  "key6": "dCAYk4qrkRLNcMnxBD5Fs6JAXFgb2ssWeJfCdQch7xhZeYgf7FgLUTw6CE4jNZj1Rwa6zGw5fNi3Frm64JrCuuX",
  "key7": "53bi98rXmrnb2FFQXYsWshdCpHnmeZf4c2rkFttqvTPHV9juZ8zr1LRMVTsUDSDGbxBZkUKML8uA2BcQ7mEDpvJG",
  "key8": "4XAZAf4Q2je8sRv1cH2yRiUownxx1DN4cm2ZdxRLdb9fwDiGNkknTsmmLaVKHZaymguhYT6HbEPwfX3Tqgng4mDv",
  "key9": "29bS8Xd9Lrc5RYTj6cy87XcFjv4f7qHHFoccDUHKa92yfHisVxFmaYxoUfLhE37KgeY1Pqot31TcxbiwLEKGotsk",
  "key10": "4dkmdHPNZEy1HgwVB3664awzCeeJNy4GZqwjiaGjn46FpxEea5VmLWXbsTSagbNJ3AdLwQcyyR3rHwFNMVmRuXvp",
  "key11": "8Cey2jwxUMh5kG5Je3sY7yny8UJRYLmWCGRbkpVUNTpQa21iTF1pqyeX3fGLUd4nuyd6xEb7XqmHSmkX2QTBT5Z",
  "key12": "2VCqfydbDpDwyhRNa5LJX196QfHWrq8LL1NS8BFgNmowPHtY1gihJjrUfpu6HzQ4fwHL2VSJyUx21yUFeReBGy1R",
  "key13": "21kaYk3kpzMfrbmyuR7gi4Rct8e6LWaypDRbkbS5ZSiHqwHMXnbPCMxvHtGxKd87LaxDveuYmzM4hWGnnQ7Uxujj",
  "key14": "3JEvV26jWD9ctAAdEy6mhs8B391cHkjyZRa5M63NFoQcTef7whSvyBZ8egR4gnC4JbQG1Rd9rhUimz57qjF6y2Lc",
  "key15": "4vqmyNdLwFhDfn3hDmGtHswjZDPiPUnuXkQaXNNLcyeJxTy7MhdFUBKQi4g7pbJRhdXtV9QwjjwYsUC2tFejoUnC",
  "key16": "2KNBHpg2xWYMVtxm1TwYFdXGSBU2T743FYoGQ8o8eA65ZGMzHECyzPc8ZQD1987vhdLrjKHk3ors28XZ1wmKcwV1",
  "key17": "2GJ63TT72Krbhh3K1mfvBMfmp6yV7sySW8JSbiKF2izPW93ShNGXLYC436bpRzL7axGDxqhbtTyCSWmio9o8msye",
  "key18": "5Z2ovK15Dfhtv5jPgf2GTAdrMvPEtrNbF4kopizDGHixbmetbU5BWR1YWfr84P2e5TxM4gSoB7PPMXDLy8EBqjJs",
  "key19": "3FXqsx5J8vJSQPynKGxfbk4VmTAb6GRDEgUMwF6bxNAmNbFgAFQYR8T7kzizAdkG1nhpeq5shjkh7bQuDDExoh9E",
  "key20": "2oWw2vXyoFie4b94XHorMJXvo1zZ9dXWX16ayKKvCVEQJ6ZuBnFnDW6PxJkfxumpRCk2W92ZVnkeGtctUrrqFkuQ",
  "key21": "kqXpXUcwhV7axb2i7xsPzu4aWhiPKHvwNByMNpteMauxNTazwy9WG4EQPebSQv2tLx3o74cMfWsNQPUEjdYpURJ",
  "key22": "5Zm2aETuyJNzsLpPtzV7iKtYijJFcsE3nrUzFgK8RKEhj6pyvhYgLB2c7gAXgZCPALEXE1fU9oPdqzW6uk31Uqj4",
  "key23": "3ESDr9JVYEQPvtNhZvZD16tQe71s1MLCU5HE5C5twbGNFix7wQDscdnfXdEte93zBEa6nBhcyd5SrZgdWqbJ3qo1",
  "key24": "38B5s6Jhnxnj1pxSYPDH7V729C7wEVTABkD9rBgC5ybCV4NAWYch6kNa1vNmbF3W3HhMDeuDLCwiH6dbTEa93b9k",
  "key25": "3wnQGUmXWp5PqrxCj3ZDzx9ut8ki1jAoGxstbXJnMJpWuexvbyJMp6eTbnjWrDg9bbdjDmxfyCuRynM2WN8gk1PQ",
  "key26": "5Q4HJeo75xCwxdQDgCQgRB4k4adCipLQCVjHTnYPXgKNrmJT1iQtNNMjcTkc5Q5qDXYuVVcijV31rTvZJnZRaLCi",
  "key27": "4qwLgNDbGsNk8wtBsPMzxUd6bQt5Pq9kgBp42VuhveLpyrxa2ggahyfjK6sCb543JbWw8oHwgcRQKQgNNRJ1KmB8",
  "key28": "5vkc751kiK1iwPwkLd9FKtx5h1Jfs6uX8X5ePMsoCqBjVmgJhzRrrhMQzNS4gPaXC5ZkxmpfXbiDsCSAEBt1RSKJ",
  "key29": "3x7kkPtuFKTtSoHkT11qT4Xp631m4KK7iKvvyeBNjPX3Va9aNvCAUsBjGitoFNphxUradJZSkK1xLYcEaywnMkUS",
  "key30": "31obboQaU3K8Demj6BwpLm94qQSg5ZjBqbzXkRznnXpER3qNhgfqiKEfrCQsBojia64DJMPD3ubeqHn5Xh6TVSL6"
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
