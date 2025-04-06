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
    "2ctc9j7qwMd4r28HMQ3dtD8BDHAVH8JKmRcDnFv4z8jGoZZGxXBbQDNEWJji513WMmBuYfxAhEdg5XzvuEWeFSxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2QDAAmhyd7uqMm79vrtEYoBgPjxJYVsf7v1mgVNDm7abSW23eS42ePGpsesatjPJxFXTyuHDGnxy3SX5Kiszk7",
  "key1": "5gGJVpFv7d9LTWhYXwRMM3sbx11Zr5p7vMwJ5oA6sTzkSYxtQQa2puz7evcjmqk22vATi8AKh6Tss9GzomS8emTy",
  "key2": "4AFP5sHVMYNZeaJ1DQHCYFcNDyJHi4CPfSHZQcbaFDAsbBtAp2uwvvo5bhdqf9AZaNxNHTE3vg1NhCEicRNqyAMa",
  "key3": "67p2yuwM6TDqrau2LRoDTJoahPRk139PKgy57iwGzMaMREq5mWiXyXLDT3nWkJT1RQBcoEc3jc4nyx3MnrZU74oE",
  "key4": "3HaSqhs9aTa4qLLtcZ6qcHiqyxo4yREfMKMdTc4CTwv3ktsnJDFijCv52iu8F6DqdBQk16uo9uUVyvXezqT8gb4r",
  "key5": "3phe8wTdNjGcJ63dEXUWYomuaUAGmDxysv1gLypTh7j9HFof9GhKMEFCa8F8w75CAiFQ1yysnXvyzLKV6Xt2jff9",
  "key6": "4Fu6Zos73Q21MzzSuCqgG13oDtCwCR8Nkug9zSpwQBmzmzQGefLPqKLrFgAppEgTupurPdtrYmmx4UfYQjkYpeFg",
  "key7": "667KGSXogZSApZw9P2V5SmvThW53S8KAMUiTyRUf1GSuicg6B2zoU6advApZqwJwmayMqmxwgXFXxmocohzcz31r",
  "key8": "8S1wU2kMDtTiVwQ2AwhkFdzjiUWuiXqHP64uwAkvL1vLsM6B5nf73qKzVCGBwW9ndMQrAa1z82qAhCJ8jbM3VdT",
  "key9": "3zNbLSVD3QTVVM2PwVkQFASxEpLQ2UEzwNSfQoME9WkpS9msxqAgsRqxRpd7ZENNHV7WYtaPjDTpUTNtTwgrJPGZ",
  "key10": "2YpZEK4ixSaScjX49iBYWEWuCcFWUzZmf7FuVhYpRBZU86GF2XiajccfE3J4tpSN8MgAxS4af5bS9QVyHGLhmfEG",
  "key11": "2wXuXxv2FeqqSH9BUMsZma2bLW5QMDR6NuA7gh9td9ennf5LTL9CSbHBbY6z7DZh442YMqmRBFXnMxT94LdtaQso",
  "key12": "3UcT1A3KRZwSGkU4WmwueFgGWqmEG8BdKvd7BP9qWkzow4VRTguPytyEDAPQzTF238QABS6JENWCkgyiV26H1VSf",
  "key13": "48EKpgxWUs6hcTZmfnsf5C4awqQJCUkvh1VUfFsJUWYkerRMECS1q2HXSx51tydB4UsA2c5rnwwzPPUguUgYDBmQ",
  "key14": "64d6X8LuahqGQAWJqm5gXq9i5jjfzxSt5BTwbXrCNXmPefzYAmtd6f5ZUPXgvMpLVUkE8BF9faVsWdridZxh71uQ",
  "key15": "3GErpCrg2gvn6EXLq928AqeUk6EncvUAfjzYU4AVmz5tvDCCWccU4wnP9KPUersLgwAMpUx8FvaFdtZ5MmRg3k8L",
  "key16": "q5LKiEduxAyGqgZJwU6Nj9K9ja7T32mX9sYPTV7uEELJTHSAcmFN5X5o38KcHuKDyft7CgQs2ToCYQNrjaUUtTz",
  "key17": "2PD9RPgnC9UGpxaHCuqknkqnsUL2UaHM3D2wFU8Y8cXqVsfnvnHJHLazZWtnA7TWZ9TdQjA8UXpnnbXvqnpPsyC1",
  "key18": "2dS4Zxty8vjL7gMNW62HqjDoUZwmVL7mNJa1B5P7rEE2Ws1fPMn49k57PAdXBvYCzngJNpvwhFT81jyuCHDjryAm",
  "key19": "3pHJzK5DcjjUoyJBbAijbwudGoeDNBWffVA5KNwKJQy366gBStccAKoGS19uFUevcxSbpF4hJ93UcCYDkvAVBGMt",
  "key20": "5qgwffrUkfs8VZMAoD7xJPJ7p1MywxAZzka6P5uEY5x8XSxHsMoucwgMaX1gBn3zDi1ThHT6yeEGaaRm8iGjNGfA",
  "key21": "2RtX4mEk42QuPCDHAfgG4YjpFnnDXBvLZDVQB7uKGNQe2G25EHcFEg5sHfpG2VfMZVhY8GsmowNDaw4HVA2CCrHq",
  "key22": "5DTr2iskrak3htksM3Z5L1vNxbdiZVh5HmcPaLSNCCoenLFy8C9wdVbNSs53NrBKUYR94R5wmZRbDVuVjcxBkeJF",
  "key23": "4wYSDgKWzUQoLj5H3aqgssj5HXNCgJvL5dkoECBCjdJYKV8wvbYJMu4cmYu2FCBCGHQMBDuCuoqF6UmUuHoKZLAx",
  "key24": "5kDVNC7LWAaoExXuL2hpkw8xyqBzf1oqgBHj6BDjZ8Exj5C5nMdUaHkakoP8f6fWhHDXUkfpWbMB1ydLsELsXg5S",
  "key25": "4QacuNFHD2hxQ8FggE7hZzit5S3JW3tgyzyyrcpQ5KczhngKGDmYT5Pm11kv9Zx28eb1nye8UV6CGgnRq4Syy9Jj",
  "key26": "2zHJFb2A4oHPbXAy7b4gV5orgcr8HUVzDSvxRkaefGu7zCBQVF6QnFqTcjE2Z6f9mXESiMM23nr5EBuuJJejXCHn",
  "key27": "ZVDhfVK34bCE9Q51RVyntQTH6uf6k7yxaJEGJHAHRHpo3QGoAqF8PTREnEkumbbxmEswXTmiLbS9eYjrmtsnUr8",
  "key28": "xQ9JnU2daMH62qPdjR2Bo67ue6bbaPACfSajt3kEKatZUv5ax2LpzJpceiNWEKSKV9W66AnV7T7ajtA66jdbqYX",
  "key29": "4Fu6DtkxSmq1pAVEJvxtoqzEjHSdvYmazZHUKFARCBKusyn8trGpJXVeSf1AnuPfX7uxjTBCAqYvn3iF78ARTu8n",
  "key30": "3NtL2HfqqPwhjpvUQjbrQokxc1kKf3GFpDNCZdMiE8VkTtqMSWfnzvC45v3SY4wD9yTHrj5BEMtPUPS2dSXa6xdJ",
  "key31": "sy78PbuvqewmSfhCLeCrxamZH89bNyYLiJeZR6ZEtAx4pKRWd5hx2gcM6qAptA3QZ8WYLgth5JRz8n1i6bq4XHG",
  "key32": "VX6jvyTZiyPVSSb8EhmZt5SugGJRKv4W4caDnsTUDEu1RktnQMzB1qGkBn4vxbzdVaZnVmsG9Lkpb7XH9s1NCha"
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
