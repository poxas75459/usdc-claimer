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
    "4YCzcHNR2b7EXdXYFtbSmeGkTeGY4ohxgg6irb1zs9rqJ8RtdLL7sQoRoApUwF6FYXGGfZH45PtiijAKDNyDzTd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8v5m2UWtTnQtmN8qBqVeyV3npDqicdgDfjoBwhEcKkJfx5gC3rFp6auvg3t2L2CUk4jMXLjdiF8mv1eWs6dWNT",
  "key1": "4x9CGdrUNiGtrdnhLmvjMpAKAnYHih6L1yKuZcWg1f1cQQ7BkuFLBzqRUYDzojHHwMBtsrrBPmt8sEbdxGFi25GX",
  "key2": "3BHzDwdQy3wqZSj6QUynargr9nCb7HE1Vw4f252gm4HgRef4watTroxqnzX8cPXh8HctvNtGBwHSF9kwQTsaUh5y",
  "key3": "khtuXhCxk3tvg9hvBMRJavxDMCsRJQgCMWcqgiZ1sJrLCKGBZMvCSrVigMnMWpccUpvPxWHXyY727M1SmJ151Z8",
  "key4": "55eWQ4q7bWKHbZN7S6Pyytgff8d5LwoubjMcBGUXhjSMvDgZMYEPQQKr39pGdkAfJorBad1tuy1SzXBkJTAwhq6a",
  "key5": "5uJnSsSMbCJ5SLEpeaoY984KyNeuyBukj3AbVwV2dviU9y6dn8TYkKTHn1Ws1VcCs6fHDC4nGWqtdCBWVd2fpFpH",
  "key6": "FtmwC3YuF6zEhkzm85VBPMyyYrx8CquEcqsrboFBbwDxeGSsHWnctMUMDzjm3akh3psEyjuoNRoMS9rWNFCD6Pk",
  "key7": "4XuC2FbN5fzZZkupwJ9PC9dCjfX41rTtYzdjJqwpxQTFYQQEAKwdJS5afi4CEYYX7Mv1odCxTD1SaQaKQnkAxgKb",
  "key8": "KCMSqrDxXcd19vpTMyz5i6RHUgFsC8bPMX8tgzzLpt1rhu83oYWegYbF3QPvbQbvKoda1bD2xYt5MdS7fLyzTAr",
  "key9": "3EmWFG9XhLF3rQdjUWnAfUdthg1dXxdThvHfurBv1jLM84BYAvnXsB8wiWqNnCfRbET6RtvjfhgmN1o3vcfSNcQd",
  "key10": "29ajepQ5hVAT6GJYsJqep5Q6TgRvXHiVKY4UxY1LwdESGHmJV7uwVsUbCUaG1Ryx5mMS9KetdeDvoixyZXrzKY89",
  "key11": "2mykoVQTRYAe9wxiGf7qrC8kmMBqhFC2S23W2TAa8cfEqbEBeSjmiuFTD6CUCQe7aApyrJkE42dqZDz4obpNZk4w",
  "key12": "4heoBrnMLPT9kdVkLbKdNKKei99dJsDj2e3FFLxoV3iqai1etGYcXQCQ7TZvdYiXq7KprnfEUSbXTUn9Dxn331qq",
  "key13": "2kkMbYBo8pL96Pdkj2eHwd6pW8ncEHxzKHHwhHEkZX1PhoSC7ZARnxTY8ouZgvRoTF8i67Q3Hto2adWJGwEavRSK",
  "key14": "5zENeZtozQBh3apKN3PN58VQ7Upr6aYWVL1dh6UdgvMTxU611JfNgzxyiLkpH4QhiFPKj77aAzb3Mjbcvkc6oRgf",
  "key15": "HU9UqTftpcVBauqecgqBNAdMiSiSXQgKck5xh6PALrVRRZRmXXsy4TuPBxNH4zTJq9hWStELUqAgqfjcpCxtpkn",
  "key16": "2WGsU6FEFfjcaxQMzy7WyNj4wQC3bXpwVq7xniawyKV5N2M816RLg62mw7UXaBQk9hQSiKw73YrBVLLUvEwZfHoQ",
  "key17": "5vPRcw97ydK9jcd5UnP2DU8YKXcUs7u6Pt6oUQB9UnaHEEK1MTiAP2WHAdTBLFXPsN9o7dzuRCv7pRjQ6TPD87G4",
  "key18": "yBK96bJfNNEkGYPEgvfpFsi8oEoWLgHgdoN9TukfuXW5XwFiYLk7c2DUKu4vNsjBe4fVn9541re3ztKf3YBXa1Y",
  "key19": "5i8LB6MZ31nuZZ16qX7PHyvJrhBzzX8iBEc93Vdgrzrvzh4ePRqRw7dcr3HpdAQFzpDMVqpok1ZZjj9WSEgE9jty",
  "key20": "3a5kGQidnPmGAVagb2u5GVu32KHvae5BYP72d12qQRgs5DCZf3YE2iBuz7crctVbNwwh8qFShHgHdhXtYd9AJFXi",
  "key21": "na3BqV9LHBFWMNZiBUpB64N6a4sN9yi47ei1SKSyiuWcmgrMLcUrt8KvxchZ5ThcMiofP7LbnwkQ7m38RdS9jL8",
  "key22": "2ANJHrwnxyqUsodct1H4ubpRsAYW6ytWh6Nq8buUryUw6j6mKte1iXoDskY5FQYNGuACLPrN8sZCcbBVcJ3qeY73",
  "key23": "nP9nPoRY945K8yGXZ5nDCMQu98s8szhAgnZZQcWLQAm7XJyz3ntPzxL2cnPaHunoC7CEZtDJ2nFKAn2v9jW63sL",
  "key24": "2QZPa4L7thDgFsGJ6hCJBe4vVZvgXXrdhJ38uNkBv7pYBUER1Es7SXQSLLgTa7b1JUZrZeLcHCSQAmXcWM7UQpk3"
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
