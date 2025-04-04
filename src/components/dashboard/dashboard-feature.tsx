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
    "4SbLfoeHTcMNrAqFioBDerS9WUUKU593qc8fjuVGDiYvJojWKhiGawcqYFWa9bAxsJAmShGWvG2hf9YnvmYyU62n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJVUcJCeV41pCHU5myo2GUcWdrJ17jzfsK1i69b3bUYyFD3qmDMQp3uzz3GoCAA5cwd1PyTTZ6uayfvgdxPdWcd",
  "key1": "2x6xU7zwLkBcBRJtouuV9sdaHmj1tv9YmR248BPNZ8XfabvpM34Sd546hN1CYf9sydu9GiBLdrCpvWV5vy9ehcTQ",
  "key2": "3tVxJatYPDSSZqNhidGUabY2WYCpRwudqKai1ZebZqUM5CDdVdA2vnTPUXqknMsFBv58mCS7fRULZ5kNasnCL1SG",
  "key3": "ozKajmBKL3B4sVNmU4Bd6YKXAHisku12mhfHUdgNEKu5kXe2c3nrB5eUtbDFdUgzc98QT97ZabSQ9aXBrXAvxed",
  "key4": "S38AzNJbh2o7yoZdhD1KDnrKMxhYC1JNwyCSyVnHV6sdJx7cvifheJ2dc5J9NgAh1SNm1XJA5ov1FvrKtjEhnNm",
  "key5": "2H7GHapz7F54Pucq5Z1m7zvi6ECdfALhRT1RMuhSf5QGMuvT8DgL7NczEhJwpUxcoQNxPm7f9ZqTeN7rV1GtCNyd",
  "key6": "4GXcAz6FCCnpq1CFyhwRgKVprf7fAZYdydxLdCEsYHvM7cbB1QoP9R39MNRkX3qoAzR6jUgW29MbZyJRjpUyo1dT",
  "key7": "563g6fBpL2ALXLVS3AkY5vvkXzVhWc3XQVEu4vrDwsnUbnTkaVdkkQ1A1TXVuuGbtbs5Lm6975CZeWKGdVMkKzEn",
  "key8": "5Z5QFqd3n2rFNg68oWs4T2xDSFgmtyqsczPDKPKR4i8EvMBrpBh7ZhAMQha9xJcAiSzSp1xsuXUnQCrShkYnPSKA",
  "key9": "NGYma3C5QJ7hXWcWnATCjV5D6hEw6TxBWroRpaL2KmGGRbgiF9kLNf9RT1KaCb785sh3wFi9w1FmgEAxdEUbR2Q",
  "key10": "2s1pT8ho4BLTkCdThRmzMa4hEfC16ndnTXnuywrej3v3LLtNkbk3MkYVT7uXhJZpheH8AwhHYwX2sVb2SswmRNMm",
  "key11": "3Zi1V96dkwjqB3jmYbvcSbrcSfohe9c4NBGjuhhLYRJSHvTcaxc3dxHZty3RgsfBL76ZNVga1xurTrfJkJC63Fro",
  "key12": "5e41d3mUKwgK6kjizNFC1dxuRkpDtbm9nmwe7PNXKx17WBL6gvztF5SCEuYwzx4fXZwaRyyuDs3hBpu3Xfe1Z1mM",
  "key13": "3Jxm4gr6CdHoW745qTMTRfj8Gna8Nkrk3HFRX7VUSRV6Q8pbiGG59Ds8tjTbkL7FVpDh3VL5h7YukeW6FxZKwrSN",
  "key14": "2jo7gG8RojY4wdhPm72K3kSxryxdcK4d9yerB83eCTEQ1YDWXXGW5K5rUZxj9BGtA8rgEjSg9KGt5CfUxVJG73hT",
  "key15": "3feLVWygMuX2TApcPKR1EVKjuiodrTRaQx2hPFFTp2Tsn34xeqLW5wEtc41XkAYkLEbrooSDRQsEy2Cokq3GPHAp",
  "key16": "2PBf8ygR6dTkcDwsRM6HLzfaegZA2kntb2T39j5a6aY75gwYtjY93g6reJSeuyxHerCKKPRuPsNDzwy55NjJdkXM",
  "key17": "5oB7y8mdPe3PPTQUW1NAg5ji6eqRy9wnScR5ecE31zz8XwTbnsnGt86sywvK3fkq8VtAdd9CmqqHiQHTKrx9cBKg",
  "key18": "5V653y8vnDTQo78YVdZuEAA1Z2rcg3QBQzE2sN3Vi218HoopZ54UhZpsBLpcbs72dwyDeY5BrhgpNv3KJZZhFzX8",
  "key19": "2qTjy8yJc4CRnkCz6SEzambdegpAg67Utg5ZMpdbNVHyBmh6nLHVLTn8mmhEnks243Y2Xd1J1XphSsN52sMiy45B",
  "key20": "5d5gT7G59gdnE2N4m1aY4NUBLRnBW52ZGJ4pw7dFsgiJzd6qiUg6g7ovAKBRt9An7dkNKRsUVWm6tyidgWEKyzDe",
  "key21": "55KHubyfeZ9SbriU9MZoUKGvHowyDnZZAzi8XqDM6XvFbhskYPBa1MiYk11BUDbGy9RHccSk4iev3EKvCbNM31Eg",
  "key22": "K8kNs5kqXSrNKWmTTn6ARXzg4Fd1zVJNiWMq9m8BjFyRQsiZ7J9HNCoM4diB9uyks9gXjBxGPt1t7cfTHF5Mohq",
  "key23": "owpss5bg79KAywEB2DCgAFsjx9zBVA3Zaq6dSzxLmoA2TBsS8vBDeSQTCJjMN8ye1BLHR8ud7SWbdkTb2n5wqjR",
  "key24": "63oWLHJ9mkNGn7HJhNrY6dbAVuG15PesHMLtRh3meVZrj6zUbMUMMbgBfVwsnpF8oRCen3AXjw6arfaFexP9SXrd",
  "key25": "5bvYyWsuBKWeAtUyLPjYtA8TVJTMAWuEBoLCRo5i19dPA8dQpZ4gUf567rKHkXHofsrAmNJchoqCGf43i3LCXYdZ"
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
