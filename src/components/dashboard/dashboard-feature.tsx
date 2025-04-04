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
    "5zVxcRooi55w52NpTBzfBafDDXtPb1iYDzWroJj6sXaVzKg3t1znBEj5gSAHK6iNeTQ45ZxxGgDKtsikSEUQdcSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZYvuC6vebtgV9nneEap95G475BWJXLq3cUAiaTVZEVbLCBi5YjgnAXLvMhVu2qGGv3QNLhu8KqcLXVhcB59wa2",
  "key1": "2S5NeP6oP7hCs4u6S5QifYVcTiY8umPxNgHPCi4KzzyhKcx6TSLKbXGAHWDbQoLK9KsvDC3iNqHdHVQisZM5FDZs",
  "key2": "FAqCwK7tMcnZCaVciYGXVQ3Aw7gaubgTBfJ5ZXZL1JPawekzQVuYYNU5LRuYoCAhzCroaUgaVCqzVzSiwFfHGwj",
  "key3": "4pxb1dEUQ2YDcmzrn3MvYg6xGffMxchZMbii9zqPHvFXWQFkyYgyBFWhX9qukh469tRtUGeyRBWDaibrceXrs1SC",
  "key4": "3XT9g4GyaFrPrVU8wacsi6FYytCW965MPsuBHYgALcHXkTjiJ3EoSSJacXFfCVXxLAFFzh75KRLmRz9ycoNNmocH",
  "key5": "3ZiQurc5DnEKwPZudeDYgWq3PqE4b5Y9uUidHDU6fAhnvAor9cYSKmk6tNaZzQCkUD8HXdKwA2L7qZpYjmdj6YwN",
  "key6": "4gJSySEtky6YMNAbJFoZNZCpgB5rPJS5RpkuxjkWUJdpJw9z1bP7LYEMS5a1ZncQhkRXVVCkdb3k72GkANSrMcWq",
  "key7": "dgaiDJMsSgwF5CFiegD4QEpoPcvNt27RAjthbCjqGCp2gVnuER4avFTJZa68Cgqt7WzdpdzMcHNfobpNxGvjiDa",
  "key8": "39XJdXbMCzLkwqzxwv7GNxTCf8vLz6pEoific1HTuWXubh2Vy5As74t196dtGmaqRygYk9xpEngmyQpfwfLkjchT",
  "key9": "5VTTko8QfHWz2gJX9CRLgpwoAUu2yj9tysuvtyuzYsUQhMdG19YkfVYVWpaGmsAoNCFx8xJKc5HyA13Kd7fXknP7",
  "key10": "xjun3Pr9qLK4N1be5wWUnx51cpvda2ePiUKEzUqWg8mspwKEc4CQDmKT7b5EBy2hLjcyW1Fa8xEisUQZ5m4utHA",
  "key11": "54rm13K8TboCy7Sr8uNasVHj7zqkzzx6RA8YkRP8V1xwCDiQTSxiNCU6VLZkxstYuZom4RjRZ57fRVELtXscbi7n",
  "key12": "4g9ageLJYbEmqhhpJzqNHmN2pFLNN55nPnpvZ2peg8TxVBr4KxGKw9CW234eLPKSshZkH3rQFJ2FSoLJaGKHyL4T",
  "key13": "2MbDUW82GN251aWhvRPc2GR2szcE1UqXXs1hpoPZE8CZ1EpSNTN8XSkg6YzbHLSSqZcFBrGdLafZQJ8df1Vrsf3R",
  "key14": "3jswaFP6SSf7qUL3cLo1zUWLhWYK8EiR6cD577ko2D6HWCgCuoGRKvMRTgwT6GWdKJo51DN9Y3VgnPkDGuoZeYvD",
  "key15": "5AwZa1AV72HCVYKyPLDgXSqmzAa7jWUPxMLhozGUt888KXoJjTxMmu2BN5U3habPh6RgeWjigknXcsBBtfdvkyvc",
  "key16": "36K6kVfZbTWbVrg6D2y3GLnXNxgGCeppZjZtSjd7jKcYLo5NvF1auKXKfbZTAMBqERBZpWwCwwkX1xsGd4YVFV2i",
  "key17": "uY6QQY5LAMzVnfTBj7YuzPjCuWW9tKfV1PLUtR4aDyMCD4F7TYLSW3wJcoW9qUYCZPnLb5MRr4oyR4ptCG79LvH",
  "key18": "4bpQvergxjh59s3oKe7jEQUWykQzTRQfmpm4i3S4VvDtjKvkrZZ6yV287Fi2WuGiqV3u83dRveukLLTS317AnTFE",
  "key19": "k6qsq4rVWgYrUmVnUsoJTq5sEPLx1yvz9vz4KREA5VFyKsrh9U2YBa1Huf1W2469mtBAdTjxPnYUaMG9edSPo9C",
  "key20": "4FNv6VnXVDbCpKU3bxygPy1DK3wuyDhvePm4CVbZoi9yER2swJRbA4mattpihJMQT1JtQugXuotCYv8bFUWAmQUN",
  "key21": "eki5ZPByTeQZbrwaN6SMH2LHZekhhzEMqc9x8xnrBAgjZGyPLq8hWyAKwerwhsYuJmFu5f5Uca5Yp2yAoQKYUPj",
  "key22": "3UV1pTUA3qU4WMdPXfkLkoeJwRmr3PsnAx2DxF3KrMhKJjyXaXU9W5KvjMH5QtKUbRgDB2QmpxZP6BqScoFxeW4b",
  "key23": "2GmGYn5rnBxABf81CBTUXRgD9idopGSZzh7e9HEDRHnBgJdMLJv2S18n2j35yQUw1zziQHpUhmX8JxNpTKSJKF6V",
  "key24": "2jtPAPpacZiuYd27UxVbSN123pE4iscvsG8aiZBfwGQqqawoLfNgdAwvvHUvrJUKgYscW8osMWgLZQewcdgQZDrt",
  "key25": "vSjKNhqx4cBKvw3ZYEdhyoCMtxocRBWUGhkc9vPtwP7N6Hr3CNP3U8FvnXyoVu6FQhx5TNjdXtTBsrZEJZDRgG1"
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
