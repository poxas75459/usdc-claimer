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
    "5gY3QZFDQ9vi8Wdd6wWPazZQRkW2ReTHvWHeppvTAL67v86JngjNKoUuX7dUEsKHCboT1U6SNTavPTLXUbKLKagL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563pRSqvUqNkgEJohCvtejqjcHWv51hx6XYTW5V5oFAd44nAvHv5hRBEJpbcqztK1pz2TzgrAZ5mRecJPk27i2ay",
  "key1": "4dL6moSrny5dpmqSjga4awhbBmkWqtgGHmfDwsvWftwFkJbYAZ6fiLx3BrXKxz1xZojZeeXPVEHxjdwkcGkD6aqx",
  "key2": "3NJkBaYyYy7G95tuhTxnwnXpinbBmZyYrHQ6rfkM58DNcpsLFQMaT3bpzGqwDi9aJA1UmdU91PdeEkF4ND8Pv9zo",
  "key3": "29cN2naxMYA2nyjM1mXEAhjKdjyJGeyccZsc1RQo94iPxqDmJ3TumuxrFdeXaDjzZN1G5uUKm7BmFiEzBA4nAFJy",
  "key4": "5VsiqDuJSs6nPwFyg2v9Bb1fdAaKfBnVxd3Z4GAjQVozuQWK6UsG4rf3y1KpkTEjT8aZB5U6zuzYwQQs9UPzSYo3",
  "key5": "5svtb6L14L434SgyvqsAHVatTZoFHHeMvxm1hzeicHA3v6CkCT8GQS2h7VbF7sHoQaFNJ3Yq8HnSgNYVwuWYERYj",
  "key6": "NEDNZKNd3B2GC3CLqDp88urn7x1BcyW1EBFmkgqgdYLr5wFgy1SQTb9f1QN5Q4QKVN3LMAXBWmLjXUBNQxHXaX7",
  "key7": "5MdFtvL84d4JpbJGaBeAHafj263W34dDTM8VypEgqMu6DkLq3Z9QNueazB5xvzYaysV9WjSBhpPgbtPRm5C5rRMg",
  "key8": "pFSkJmYFh1tYHrQmoCTYjVWJHphTpHyqbesxpgJsSEACrrngL1DRKn1iKswDMQeFBkMcP9bdDMjN5XiyxGi2GwA",
  "key9": "3CnfFteQvhsFFcs3yJSPsM2BVjcfj2Dg2NvPWJZt5pbDPNFgBvghAjxfVvsAUTcphnRwuiGquVfWG2UayFmC3tMR",
  "key10": "SQZRV7AMZ8tjThdAPpLRCafMXwLHxQnj1iBJqD5wM9frJBUbVwnmuNTkCEWc2st7hSXTsKgedGdK4ahZkPRxuxU",
  "key11": "n3UebvJGxUvDuuTuUPdhArTDXjcvS6RAhw7HGk8eFBSpFqmyJhR4ppuq9FLv19evqWQAkGsJdgjAXZdZ46s7SCV",
  "key12": "93RZv8aB3E8pu8oFjPajsudvnwax7Yb8fv817xuertXbCeGhBsBAgPDxRuuWZospb1g5a85cumpyYRNjD2saap4",
  "key13": "2ZWCHR8oTBNU3brCULYStDjv3NkMe3MkhuiTWCCXvmMLGu4z77WDNbZmV6yZDtBwbXkhCwX9kSRoAmqMmGh94PAF",
  "key14": "YXNDVHotjQBy9K74ihUYHjkVFWhLnHbTBwje5EkhL69s6kBs9CFEDmgQLaEGuZpJEJNemLmqqWfzSXiDonkewWA",
  "key15": "5uFX6Bb7yqBAbXYjzBM2QF9pMxecCPvwASMVNXMcVDAXDf2HrSK96JJFj7ZbFnJ8mQdweBUoTKjGmGGtSzuKDQos",
  "key16": "3za1X2AHWksi7mfruqvunybkA1TCKsAQpRU9BqMAuVkVwpb6kParLQTANzeg3e8BEv3NEmjMFUxiSnsQMDwoBtKJ",
  "key17": "2J7dMRNtjxoLoH1bUC66PXzesb3EVbi9Ckvc8Fmi1EncMiATJWv12FLmyQvRxDg5vptzC8h5eL7uv5BYCnL8RXVP",
  "key18": "3Keey8MFYd5XkjdrzZhKKFjGpJg56SLXxFjBbHYLaLBpC5F4g3QoYEqgPT1eDyDQUU6gM5xt46DwDz95urB5gGb5",
  "key19": "4WmBxi7cpC4s8dhCYr4Fghg7xfP6kAZjrPQyWBZgiZfwDn8wD2qy19Rxb6yx6S5KUSWw5aLbaVq4VNfbosuyuK3P",
  "key20": "41zQ1kavny886KeeyeE193faeMY5NXAztaJpLy44wceeqTA3TXpxmevHRKjFR2PPCq96j6Tgde7sHSwDcekYG25C",
  "key21": "2wLa9JS6pmZYKT7SWRSjm9VfrghjnK7qZ673D4ZBoK78ViXu5R8tLUJfbfJgwtV5jn3xVWJy8v8PfsGSat5eWPG",
  "key22": "3JQUGXLFiajYhNttfvpXynwQMvjLt3XWU46MQLVwkktLMbZuadHCP19D5Gf6d7ZvgrASmGRo8Mh7GkPK1gUS8Wk1",
  "key23": "5kRcb99bjTYmX8X6zu8RhxkSGzkY3sesiAfGDJr4rzP7ghzekQcnAkS2PzgLSgM1eSyCyL1q6iKVP9afuUSKEzFV",
  "key24": "64kCp7NRMUCgKwfJVBVfM2rpXTeWUbrfQeDZEJvxiyqsG78cmeoVfig6t5ERtf5mkZKBUEBgofikYSTaxPVaSzVX",
  "key25": "nd5EQMcknZbgXtwDo6YmNXoFDpS2r5qRdXiV9rmWUdKSNEf7NEcu2hfdwUzmyebKDYEzwye4KjaMLwStKbAzkuC",
  "key26": "3e3rpWiGN4sjUSr4Sp3n7PWZSqSghgjydfnjsZq5xFMmSNNTpGF2DZa9o52CPVhX3eVHFQQ3suLvGnfahyVtBs1c",
  "key27": "3eCqFweAJbt7LjyNoDQ1HW7uDGzFXezkYoxieHj2FLbU4utrXMG6PCQDH1RqDbyxXT6J7p2UEvMcth3v6zPBk3vS",
  "key28": "42CHu7ewgZaMoCimELjLxx6jFtpHpgNsH6FUXV6B62npCwxcxeZ8xhg9SJQhwxqnHnXUz7WxH39K2ZdYsbUDXEJ9"
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
