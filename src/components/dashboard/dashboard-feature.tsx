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
    "k9NkUnHbotywvJFU7hZvCXygUW9RV8iVdz272mg5jU6yxXHLLh5hq9dANZ8hPA3UHMTmFEqCevbbzsMPqzCbFLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3oKCwCJK6xzHbDWg2ng23vDdReQxFUab9gHcVZ5snydbt2J46zwN9ttnpYtHDqUJJjhoAV1m7Kt2MEjE4SUeR9",
  "key1": "2Jbo5E2TmDAa9F52xEx8PL9MFdQNUBzjxpdPpc8k7UrRFyqpMZKmzwreUxh8QpBu6U8BD4vnveNvQJi3MJYXL1Si",
  "key2": "393uJa4QsUbUnjwVon62kQ45hvtsphuUgRUMRB4eyEtqoiUWVoLjRpRpwb3Jkz9AfeZw9xVYhu6gy1TS28xBuif9",
  "key3": "2JZGsiGgiorQ1YFsnn8stFo3kvFbfHpxQ9xQQEvoWMUDu4K5oSYyTMS9rgy7FXCrcqQB4kXdKpJTseqot468G9BU",
  "key4": "32Hb8f5XNe9ijZgFpVzFv8Kh91iokN5bPvGBzdV7k76ML38kriyc5nRdyGaq7fZbCsgkfjN3bSPFnnwr6fbYd3QV",
  "key5": "3DA47v9nwsFgDT6Zma8xY4ZAovqL8oHbTLXUGNG8qAHyrmDPiKXxuRaSf9RD8o2nviNsrS4Kw8CDj8sTwA5qmC8k",
  "key6": "4FR2Vozc7F4tgQHcXD94VsZXBEBXENiCqgFmcir5cQgxUjifrUQngo1upw3z1vAdBnZo7VTswQbpiqFKfiiiBTks",
  "key7": "5k46NScd4XqfR5bLgHk4BE2W8no9fKHhrcdFQm95mzAT5LHYYVLi4un8wutVZr2YyWmsbaLTwnnPZthp1j84c6aN",
  "key8": "4U5pjUKPZa6vJDrtapCMcEomPo3TbkRY7SvkaJjQyMHodT1RvYmbyWf5uQQoV7Nrci6Vs9g5LDavEgtDe85ZUM9r",
  "key9": "4WBGrYiqovhtGQEWXRGo6FVJ3uFswNdRwgLmpxDa5oskCg4fArgYBkN721yF1CEjBtY23bhLdkmjPGHwYsZHjg1M",
  "key10": "4oKFideyLbHfRzEMHC2jTionmDmncKDLaWcCsDfJtdnF7xLHsWict9JyZPuqC3BYZ1RBo1d1Ftah1K2srXbcjWoY",
  "key11": "3XDTaQJmetpUvM83qRyqBsxSahxnqfGW5RtfXTDcgknjEUokAZ5YLzvSYYqDfaEErfn9uaUUQBw38LJ1TXe68Zrb",
  "key12": "4VcWz2v5eLTQDvhrxLXiaWxsR1RQXXfLfWqY3vKbJuk5ribrGcSKHmwPEAG2uJ4UkPnGHLhtPnX8nFS6LtHK3fBn",
  "key13": "3zHwq29joQz9MXu8xj2vKQyKA1V9JKuyqp1wvW1zXvM7GW5qYCNx87KSZcwr9EwUXJwveeSPk5C9GTSDACwAkoii",
  "key14": "3t2NXeLUn48wPS8yqrAggcRAsUhj54ekZRkjTxt7pLp5akvTTq3mmt3kxhLdNyDwsGjqJ1simzjVpUyxsnDRBJHK",
  "key15": "bKkPbbRvmfCP8wicFkUqJBrfiFZimfCrj1msWUc8Z7Mh9uaMUGkRs6WFgeYGJEk8MxX6pin6wQEzCGcqxCziez3",
  "key16": "4sUZf8VCG1AvZSa3CoRDGqQ3B61sHgTutYqDwWiVuXXMfSexCVBaJSNFGRutUxF5VyVpLi3JLnrEmq3X2bmWpaXc",
  "key17": "2Pp7B11FQwUGLxVGTscoFjqAMZLZAQjgNVThY9HVQEuESK58z2RQTjcwMHJNsaCtLbRn6VyrnoFjJFSEatx8AFFg",
  "key18": "GVD3KTTsCsvvCyEBvGPDQhpdVjkpE6Yezmw5fa4FFEbAUvfm6rgnKETuBiDe3U2D8bMEeJo2GGzqzSgwgBLh66Z",
  "key19": "eENm35i9gL7Lz2n3rnMi7dnkwy5STj5Q2bKabyuvSp9MZT5bRZiAsgYeX9knvboUthwbczsNeSCVZ5z6D7hK33h",
  "key20": "3Tjydk6zihEic5V8FRhdnQJWoyQR9BgiFk3YfJi2B1x4ejcd4eHrnxgvbe9rHgsRguVqLeip6fdkPxeU1P2kszpc",
  "key21": "4EHdv7ZH7vRvZwR4gPuu6BBPWKCu7gTriJV2mc8XdnxFUchUsEzVxtPgEhCmtqivsnc9fhiTHoAkKPafKfcNwnJ7",
  "key22": "sMS2ThypnG3yGgUQh6cSq1e86EBe9x8FfziEK7guUWKURtgQjURAL323ger3YBAujPjL2EmeMuj4CR36JR5XNcY",
  "key23": "4yREbSizPzkR9axnm4ZbeahsDn1rGdLeei32LG4WyxCuXUHbG4ZHunqm6XEmvhxgtQBd433TEZcziAXovBHpJsZd",
  "key24": "5ATzvFHK8Th7BohqiN2nwhiY8G8u7UhFFJXwBU9UAeLfPyPifXXv544EZK1vrYxaboq8dsFCRsFUGBQpNtM8rzFG",
  "key25": "34rddygngptHzAMZrgqN9xoSoBj6zEHceHXmPuqFjaAMLtNprCuE6HuidARETftd1zpWRYcbRmqMzmCL73c1MgbD",
  "key26": "5aKY1cXShWrWPHEhKCzz2vazWuKcYpvfR8PWu1b9yMgKYPJtCwGV2ZKKb7nuw8kJEgCkvG3xUBAfFMXGXzd6azUA"
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
