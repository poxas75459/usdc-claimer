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
    "61csJ3P6AGjATZpLerwJXk6AHQr9qhHFP9Ce2sgo8yoNqpVEqQXuTC92Rj68x1AQ1pQAMMwMkFA68JKZzwuWLJLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jk4L73dWNcYHMg4XhhuTFRSmCyBYcpETmBi41cwE5GNMdAQCQ2QnhDg9uz9ZWmv45drqPnV3rRSrCj7Lvc6zaaq",
  "key1": "64FGpQqnVbd48yHdtnsL7FrxqpkRx6EeELRtpJ1bvruRBhHXjsGRtbX27MtX2SvXtGiqHXkabpWZz4Sgfe73brLt",
  "key2": "2Gk6ZVaFoNg2nQxSVE3VHLoKCVUiKcFDR3Y3wnGtXvkRAz11V7B74oNkWHwLgyrhfpPXQNJyxD1CDHLUFETwi4xo",
  "key3": "5oB45gJYKLcc5o5YkAPrjmdM3W541boHoxdrxsdGgM1pCZdntHzuJrnQNHaFRPWc62qEvvcA8xeqdd2xLszkG3XS",
  "key4": "4Y6e6WrUvYfks4J9gcgt7MhupPc75dpEcK3CuBYD6AGWsTVvTKxkxMdRDLRCJppXDD4a2xvv13nJaKKCcxPQWbYf",
  "key5": "43MhbcdvgQeKeKQWr9hMkxsGNjvbkU8Er6PsV78f62SyGgxUVGGcvdr2DxmgfxMyq2wZgrxmn798KhLfTouUDyKu",
  "key6": "27rjaBqXj15rxm5jH3xBEa4MFQzrhSXaSrKRJPvy3GGgMMT8Wrs6UQrZPLPiYVDFyGTtS4spgLeYVf92mS1p9hQY",
  "key7": "3tFSEvHf1o9MGz2b2syL5c8DqZuPPyrTnYFT5UjAi7sDXkqgvPYVV9MKdRodm5BDBKWwE335pR9rNYTqd3w1xP1Y",
  "key8": "5VQdYDnsrsBJ1riRm92b2StR13AmUHzj6h4gkSUbk7rKmsMKQgGqvMroniVhh4XUBmYK9aWjteeAXFCbff6QjDhp",
  "key9": "5BdTUoKiWrSpuwMztoMM1fZ23JKwpsGRiZh3sp4Z9NW13gU9GLiDhUd7Lz8Wpg1RG6GBgNFapDwHnZ3YSdhPqU6u",
  "key10": "5rsJaDQnCuaNAFRQDdUEN8ZEJofN19zTEXHzBFjyuWcVFzShgYdSdKs9iAQk398kECACxtqSq9AdZndRuesaNYZ8",
  "key11": "A8ncePDDiRY9LGRohZfpzoa1QpYBfKkXiLZVeJd4LmXJvfubFyaxEZbzUjBuXB4ZJdm5F1JWbNccJddu5W3M94T",
  "key12": "2R4LaUnfcnrSY4AgtpGiG132vtgzcrc2CydGUwuJz8GWkq9xQdandNXWTsQkNcjMbzPPQhfB7Yo5YUQBMwwvXPyk",
  "key13": "5wKkwNYUsCrENbY3rBvALNBkxoTr5agM6vPxvMPYwcEKwSkJUC8xw9ZLjuJArEjZVj6x3kjDzTot89ajAShxSfcy",
  "key14": "4zXeGrLsPQimzQBBvzvsQfUXFw6y11Rf3zxLBbCi1iDdXJXivdoxGACadtTbRSPzSsiiXKPFdWGMWBv5YUewsBmM",
  "key15": "qX79Hqdwr6bXm85tm6Gt8JX7F1bEKYywegKfK1azq5kuWPD8tF2pkY3vvX1ZXutV9JUnyQjv51D3mUkwPYfaL5K",
  "key16": "2Ux6eU7Rxqv3NRDsKPiJrjW5cgo8CaAbUhdnUqsnBtaEgTaHGgwhnnhoySY6qtHaeocGwRTkeVQpKUGK3VXS6WMv",
  "key17": "4w725pCod7DMMn2L2PS4tmqFt6mNUWKZYUKLncNA8ccJ1aSNYWJxDxKoDk7iTGuxS2orU9W7H9YW5tebJKBMKLrL",
  "key18": "4iucE6mfjdQFMLopTxRPMZb4fejZuP1mqR1SFLkX7hjxzQWjuiN7tREvUHewDFR8WPDieTwzYbWA21W5JspvmmtF",
  "key19": "122gzGwpvvUcGdNvd8AWzJmixUEHSV68By8fAJQ9rkX9b8wNdzXHwiuxLHqJEN3HA2pf9APwAksPjgLzKDigktUt",
  "key20": "Gsti3PReZC1XDYbnXemoux7WNQFW7pCM39KBZPXbAavW96aM7NSzD6G413mwAy9RRFgBejR2dyQYBvDPtBND2hZ",
  "key21": "4s71fZZHaBgGzXh9mv8jZio629qZFBuff15RNgeAPYCNRAvL61LK3oGfRWMuiBtYL95whxcqE1YdvEnWNontejh8",
  "key22": "2BbCo1xNo9m9hQoLK5ySYgqVHR1FBhUB24jHm5a9XbRJSt74A3DMBKAFDNswm1xVtnw9bJtJZUkdDoJdqXp4Ljru",
  "key23": "4uM36HwZs1tHwXvRjcMPGgTasFLQ84uVAH2SXvU9sG1nYZuZajpfrRep79mr1occn7imqWxKdeDWUTQY73QGHzJ4",
  "key24": "2rXBRZgQZmyFTUdhFYAJUNvVPsG6nNUVweVf8PRxJvRRrBFRWnuDoznE8je3zaXNGPSP8jH8RXWUPvoAVFsCcVjK"
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
