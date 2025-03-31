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
    "2DvBk8vpmHgyCsyXZY3FpXbV5CZt6XefsH2U5yLYiLK1t7jr641qZBsWxomkpX68WkBc9qCT81AgBzPtLia3nZmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iov84BbeEyEnV1qoa2FXY1ZVJsKnKB14SkGNJPHFxiXVHFdWPP2eM4ypaTsZacdxY5BLhDPefFJ1SvP99JVodoU",
  "key1": "552i5qPPqyQira2BzjcLxiFWJCrCRkXTuTHkrGbCkPc61VNbQTnvkCaAap1utxF68gmREoTr2br9PgDtLzNQWvQZ",
  "key2": "2ChCPc2yC5fRofQwpMCNX1oynnAQPtzX8h514pQ9Kcm49tWymqCWRYtky6NHRSmdLJbJA4M5415CySLwwbso6fkU",
  "key3": "3W9qtTQ8LssgEbNzQ5DtQMdMbediSsijgJRaqDdKcBZ2sCkjY99JxDRwDh9mttZM4Z9hEpmot3wg2EJN48Jag84m",
  "key4": "4f1TwQvnZnPEyNynUDC7aZcR5DohsEkKF2yfT8qdegq8X9KyQvEkDc8pk49jEG5MbspFVnjaJQPfoMEcZHL68qju",
  "key5": "4m1bZELdMJPnAMUJrEmydTwHh1jdZT3Nr2faRPEajWogp1EjmvWMSSDbuTNt5cydn7YxfqVkyoAjEYnYY36GR2Jm",
  "key6": "2Y21wNpch4nyUuxmv2N9WwZCEzRM6z1GNRAfKh4eoy8GcbBru5oQVdB6XJJarm9nhSBN161Yju6gGpijeJQ5rkja",
  "key7": "fp4hfBMoYGCUh9xNSDq3wDYkUHSEaz6HWFUjTNvZ1bRc8VJ3kaCoSGpAhLvF6gugy7YHn4Qu6t3TmTkhTZ9SxWW",
  "key8": "4tL5F5wiQxndf3Vk22jh7fJyaU2DkTwqDbBPemciWZgVC6hcMPAF1RWQGyELznydWgEYcB3euw4g9jMFCrYG2RwL",
  "key9": "2kXseVhaSZ7AzyfYezuZHMojPCovEiS4rL7trwaZzqqZJknyeDeSFKvYrd8eJZMgysXNJFpPD5hrpMqDs8Tj57K2",
  "key10": "3Xk4aHteybwyfviFWjHcWcQJuPNTNbjYzWAHwXzymYXUq8CJojQsuyrRJEx5iN3VT1gkh2VRTb2tvYxLMxepK495",
  "key11": "LEZMoc2kkVo3i9VGPD1jCmTo8KcmV1FmQanaBAFCNRdbbYWnEMzFKKTSKk2rzrivoufdPwtG5pLw2s8ZvCuRJrz",
  "key12": "m1tPaqrrL9bPBwjAzwHgrKxNg2uXMFTetQFBvG7tHtscBV6qc5KnkiPcgU7jA5hzrXCy3HSvCaLEeFvmVnRKWh2",
  "key13": "5cVQxS5JQFshdCgRtxZaraYAxnLsrfRwhQx4wtJSnjspqhgKMiSqcWQwhaPYe4eHPtXeno7LB8cEXtiFjXAhksp5",
  "key14": "39d3ngLkiKUCzLCDAEMcCEFi3e4Ae3CudqznC3g9fppebTcTM67LBSyZfif4ZjsYYVPBkf1iyKTiHr5AzTawKMmC",
  "key15": "4D2ugeXd1VD7GM5U1zSNqHFBTFX1TP3FxSXMKBHt19B5QqTSUo26t9juaybcEoa697UfuzWkFjF1oEWAMCY4UgYj",
  "key16": "4tSqBxdeL4eTtAnzRmWghgndPEVk2mngSyfcfA6kVbPQFpQr3hDURJqnU7sPaL7doBU29sfH418zZHroojVybeRr",
  "key17": "4Cf7JvMXS1Aq3upvvH9YJmCQTn7yaShuKs4ksVpoPB4y8NQLSdoYuf3KNKK3QYFzfY1d5eFRTf2SiLHy2u1tf3As",
  "key18": "2KEZwGyFRiX29G2aGMQF93K8YkBXiQmV9s8NqfrdUXU9FCByu5NBErdjfGR58KWV96HTgseAJV17A6MoG9dVeAs8",
  "key19": "2gX1wzrMjhhwv6afJqKNZNgeY4xkmCWrGfZZiXu9LbXodg6R54fkGyzEPiEuRV7Wyi6GcRukkH79xDBHDs21S6R",
  "key20": "3n8dWJBcW4bUe1qkEMFhFcS2FTBNKgMAwJZEKWBNkk4FUfMFpz2NrpKtGNxAWtHgKqrkfxbyokXud5RnDELpvRHL",
  "key21": "D7Pd9rLQTBFk7o8uPeD5gHZJzSKyNAu53GQW1ptkHhECnHDkKHYV67UKuKt6qijHvUBNXfWrQJz3UCm2QeHNuVS",
  "key22": "28Hnzs5itZXJeMqtQna8jHdmRPHD6cvCUSr5KkxaLVwNARGCEZDMNkjZRYT4q9qV8rP3gtgXdE9XC4kwjGa8hSkx",
  "key23": "5QXM4gifcpkfWxhAjVLWrhCBtxqE9EKMPMNDv7Bg88hDDNHfCDZpPkZU4XSd3w2cFZDuRzfX9nvGARfytC8xt9xc",
  "key24": "4duT7s5KgcUe66CuCB9vqZwawDtFMLN8kEKANPdmc6cPydqdceAz5R1nYUjKdvK6VzVso1miwHvTqkWT95tHab6J",
  "key25": "3ASXEJginoVy2EPzPQWu5PeA9uqPQAPMvgyv93ZR3vC6Qf3e3hiZ3QujS8w1qKgt8H7yJsPxjAkEzYXgfoMfAjd9",
  "key26": "4DyBUT4VoD5pZ59QVX8mVWrAvycSCMJuhVaHR68tsStxeyM4pfwbZRe1tFm3ouovKijDTYtRqgYL3duR8ySMtaWY",
  "key27": "5W7gumDFSV6fveM7P3DtH1kNaQxniBB5Ke9xmX69K7KFuiJu4yuiwzzPNX4A4jFRaPv52YRG5KKwTeEudF83QmrN",
  "key28": "V8TQEQD2jk4JUEDKjcNfb7s5ebTtXN3o3sUKAJwyQ4aJc19g86zUfoeu9cPASnW3C6SydZKaSeMh5sfkb4wND2T",
  "key29": "2yEajBLJHss2hCtVGLykZY9pryZnDoN93yUiDuEAsmejgRuyp3fRQWJL3Y6KKp2b2BfQ2MWHun7Rx5N2hNFHFkTx",
  "key30": "2pUwmDw3LZTu95zDccdzQ9javDhEEyhiHcVefLt6RftYnSfDyKkRuTakyFXEd7XRyTdWMardaLSCCw3ocKyV8sZE",
  "key31": "2PrZ13pwsAJuFxSZXHyurfVfV6EKJ2BrnpuK7enYKrDQKNbvFNqp79LTTaCthVWmXcPLALCuyPBQpDN9dK52qUHM",
  "key32": "2ayf8xzM5CHuHzMNj7Wooa9bJFVYFYn4XyTXEc5EZtqfJK84ZQK1jzMNBsK1fnWj5KXK78bA9vzuycqagvM1oQmt"
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
