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
    "3TZnbXkC4Wgkc1Bj8BDosSeHxCxiXAUcpsDTfTmyHGeTUhLZvNuy4d7qoXv3S9jCZeewJfYR635PGFpWXn4Uf3ip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1i8dvEKU5RoQTDTjZWiW3BaoMBQaJ8mrzLaakLcxFK5cS1XsLMWSSGBprJFRewx1vT1ZEtPpqmt6pxUWpJ9GXWj",
  "key1": "3WQbrkKzi5D7q8FzRBkcV2vRg9hMkeh9fNsRdh2N88jKo2X559Vp8yCVrMcYiYk9Wn46P8nhe7fePfyvrrB174mj",
  "key2": "2aALq6abphcWsCxhEvmHL3epbZcrQZ8ddSDKL5WDVjLsh1Q8vJYu49Fe6WS4RUNxHzsryQf8P31GSMLydm1h52qr",
  "key3": "3qW2SCFMqcmjUodGegCug2HdyBQWyo9dUT8SE9fVDy9p9m79VZZioiDSGgnmpm5BFLagaJVaEd7n8Nm4MqPnp7Vn",
  "key4": "45MpXhczDaiof3KLarRQ82zPPCp3a744mWtNHkA7egQXNDcpUWZ6o6akwxbMRQDAoEwv6q4hZhyjDHuuwkPvuZPE",
  "key5": "5uCSmEmBajBWiaAMGjMFQoUqiSh1YyXXXbmiTCByTdiBaisPF2QkAgycPHWSohiuW7rKwYgw6VSV5L7HeohiD7wG",
  "key6": "33DdUQ1WB6qGM1dXhQKjtvMYTxC7DXgnsVpNUaqtoChVE43FzwPoFFp4sStRddJ8MeQM2zcmGvwcfwfw9XQZxG6X",
  "key7": "3Mt6WLABxp7Jt7wB8frdn61APYp1AY2LnFQ1CAsJnxw7iFzjhoDwnWPZUJU2ZHWHXgVHqBQTDfGFRhEBU9vJFs1q",
  "key8": "4KUqr2Y2HwLKrL4mJSAMqA3tCsnm2xRcGWfvbYax3LHFcXPUAavAHhNSXwWt5J23JQKVUWrazjnGyPqib8p9cfUH",
  "key9": "maugm6wQG3jRm9PavGaA9syf2YXusenJvZjye6qDifFCFZwSBwtKfMpqE8XJvL289QHyRfabJRBSgAR8yu9NHmc",
  "key10": "2Nd1ZVqAA2uXaamnTdD3NE3q8KXxkVC542daPDS8greVz2C5RSZ8zQJiv55NrX5AYUy69vGnhfCc1MPh7feyBYWt",
  "key11": "3e6M3jdXMpfXfMgNvhsSo8TMa1JwFsfYmgbwEWGd2kW73orSDynY8E3C5DbRsdtn24W5bSvpiQD9871zqFD2HcBp",
  "key12": "4sHG2PH9MfkzG2F9HD9rzsQAwHom7rbUtFBLXw1zZLtCbcTpREc9rBcKAab2Ay7v6df1pVhtKF227VX7w5tDsi7R",
  "key13": "3pYKPjqEmHooHt6NhgBB8cGaPnSLWWMRkzGjvNoEJpQRm8EMsgh2x43M4ZhpW5fRHWjm2hzugskBHUHfSnDZLpbu",
  "key14": "n9VTUTPQVUme7Q8JK5L667E5fvL35eUvJwwcAxAFgGaHZn7F2ED8HBVLS9XSJqSYKexw9hngy9WZJDWroj7c4rn",
  "key15": "2NGekHN4pqqtBzJpCsRGvD525afFQRyGEoxdiwZTB6USKmG23gpTR89iq2cGhtahdSek8dZJgLMxqWRTwikmiDik",
  "key16": "4XR6s4NpoXfyYM9oPVaGQe6PCETFyVdGHySn6XT9bvMkTMkgAaPpq2KQ9z455CDfL4kisKn2LxBD1oGCDQSvF5qM",
  "key17": "4kbmKmwq58Lh44FDBcGY6cBhPaRvGXMjKFi5xxZ4FuYYtf2iFvMdJLzCUWj7rdSX1p2fVk6wt3oaBqdio5NEKnKC",
  "key18": "t5Q9puxgWt2A6uFF19zPoPVzPttLiviaZTXCsXG4qMNnnpAnhGtyWoZ2GbmxW4AKiWbpsxSrgDdGDYudskja9FT",
  "key19": "4CExgHh6KsuaUW4KEnNtpAFANSvz2yYAcWGmL2Fr9r4zxkPopCJ39Vrg7kSrn5GsPAcf6ziKrEa5W8K3ZYNBrZNa",
  "key20": "34YDoFXXRgRFonDkMBJ1GYTVfDqJk7gv8yaPM6DWhYj5R6trZTNpthHdEboPpi7pM7K6s1cch4NTX4fqcY9vK7ob",
  "key21": "3eQKbMExJu2XpHxYe7CJaeWTjvBJfjddTWH1UcmdSCkXLMwXHZJPRBa5iQfbaX5VXazZU9yTK4yJ6QQRfMDmMLR5",
  "key22": "3B9uGsk5K5Zv2q7WKdLJY3prxjXzGGUAUuZqPTVeaHqoTgAWz7d23bNnotofw9pQcfoXWuLoFWXzLuvGtW37XGFS",
  "key23": "5bozGPPzwQRohjWn3gvtKKnF2Cd4RqJUyGuLgbtTWxDSu9qti4rxdBSz1su298DDuD8bZSCsaqKXnoHak1fTrBeU",
  "key24": "3K1qVeBGtcCdK9wVCWK5KUSEj1swrcQgoZSC75Fo9xcM7du2vHLGfa3uo4Edr71G6YEfxJVMNa5iZo8XHrFzFoN2"
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
