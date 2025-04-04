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
    "2QQnX14FCg3bp6b6QUYe5ZAGFjpFooAbifLNfJitod6vzQUxXTeupEXCP7CvKb2qndnrGoY7ioeHCvdn1hhGBTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cjErkdGo4YTevxZJFr2r5HVbv1u9N8HiKA674bh53oHZHrFDpbwBVXrctcjN1hKYowmsVpNwFg57CSKtGUSM1ZT",
  "key1": "5ckKQEhtHoWyUV8AJ3uxVXjisWWUXyBgfv3aWCVDXvifAEDnrwhrBZzhyc1MmGkJuujGsoTmuSo79mG2bT9xBmnT",
  "key2": "3QGqJUuVhuo9qQfRDvDV2ecH7VLVBunHhN1iuPcgCcKN1kkRCHvAeqhGZFA4GGcQ72NTcSfsnpuCrxJwJF4xgCws",
  "key3": "5aGncQUvUCgQZH5LD6YKpZvqazn7K2RXfuPDj8xHJKrMWRBuXRYz85ArjtJp77Fz3kdv2BHjMN5uSKcyipLJ9dNE",
  "key4": "3zmmj5ZoMYBmKB2CuV4W84imtwcxeXeDwkiw1qKdpF51rPwJGXXpNtv3ooX1ydJ5wRZmMkztUDuXZES1mdLnPHr4",
  "key5": "4WokNBV6FxRrgrUSrQhsLRDjAktdWMc9Ng8DirstzXrvMU2EYUFxdjELCFU6RxQDxt8AmHxTJcshXX7FpkaUBkjU",
  "key6": "5Pvjgj7t4Cs9CSYoE2WjaDZ5X7d1AxnymQ5epNcwmExWzKUF9m54hT4QySMZFNrQcahvS7H2kTa8ryzZmyGWPUxb",
  "key7": "3L5nBNKwqQwkQQycoW5mGbKM9rD8Drbdz2qno8iKXiWqJyuAUPChJEujkajNnLauaJuZffYBLRwEjXHotWA25TZh",
  "key8": "3gixFrhh7x4vVUfWBfPNp2kbQs5yj3tjp582KJTYxZYj5kaW4qjzmAn2EuwNpzdtGNt61jW3uwmGf8BHkgnVR6YM",
  "key9": "5rawr6AMaQq9KqcxhAfwGxjHM9Y8UWE6ortN6nAWLuH7KsnQRXd2upE4UnyWTTHPhSehAwkkh2nHow4NBjGfNBnt",
  "key10": "4HKUUd49gyA2ChnQrYRvF4S7MNbMui7oJF22BV4CuU4EXUoWmyc2YZGXUKfcFjbhZ59NwNSiX9zgYacD9Dyhq8fd",
  "key11": "HMH59x8gKe9ALCvbz2nk9Wu86ypWv5bMgagAfzezHxqDwjspbQaFdAi3tRiYBCUUoP2SpqfF5m5EdSbSGnEq6h5",
  "key12": "62sd8rZpcNHsocqRXaXa12Hor2kEN8WvgiVM9FATWWU7g5amCjbm3FkVBmc2vVXSMwFhkmAEKHpzbjK9sMsLNdHv",
  "key13": "4gq8RZpQa6ZaUiytBePzGhAcP7T7t6E2tBXJ1dXF3Dp65uS7ZqGsecqTNSjw5DCKB2EosSJNEtj8JoQyVcFBDeZG",
  "key14": "3eypoTtcoYMS2ehg7dSf96rX3yyiMQztRYswHg1xGrfWmicSyuXqAXEkciKbvNqZQufCq1d743o9euge4WA97uLQ",
  "key15": "2dns5gvfjs5Gtpcsy35xBc4tBLRVHzSnXQPPFH1aWBGTHC6sagUfaFNCPJfruFJQ1jRuJFYkrV9yiUW8gvHTid5P",
  "key16": "4W9rGeqDWKDCqnU6wHjjU4K5ynaDixaYRoKBJJCq8etNHyBjw16Nhdk84pjuYZnJfc1kRghsPmGByYXrE4UZcY8U",
  "key17": "T7wAkNvimMuNAuctwg7b1CXeHLDyUtb9YWoWrNFWdHusiisKJ6H5XjfPtjfN29hrbX4L1ofJiTEDdEKaMC51bZi",
  "key18": "7eWkEmtq7wPjwbAVEWS9yq86Q4xBqQ8GEhbFYHBAHTj8tFfKY9E5KihWidTV4hfeG6XDuAZsQUUgQK4pz369rjz",
  "key19": "3XxkJrQSwxCydWhgkne46H7VWwoH76QZmBVgt4QRVqbwT5uqLriJMq2hgiHcUHprQy4KC3M4dATKUatgj4YnGzGh",
  "key20": "3vDuEZHvjMbG6ErGG9djxmTnbCWSTai98b3iY7zgFnrmEp9DqkHAxdKBCEKjqiSN42gwmpMx2SxxMt7obRfp9nDJ",
  "key21": "5yEt2max9h4cj1YE6PSCZb2488TNJw9V6YYP4mt1hD2uMzfVTkDX89toFo3HuP2CuQ3Haoo5Wj64dzs2ZGeYTPLU",
  "key22": "4jMjhh3cihfs6XKEjCMt1n1Ky5jEnzBxUs9ar2xCfssygeCLRunupVdt91YQ3di1DLQxNdBLjQmbPq2AbUCqExC9",
  "key23": "48PoX5ihXW5jPTi8HmZah4wrjLn96ARxfY1B91rYTybJcS9BxFT8XLbyrGPY7HNDbeHfi9kdh6gHxVi4Smsfqvn",
  "key24": "3MmcRU4qbhTh3hUyLUG41Fk4zyFXXztjpjdx85eueWRdpUCZsRmuhJ7bxvxtALuu1qDwu3v3WtH93STfehTqNC5J",
  "key25": "siGdZVQNywSNQUoeVtytXktVVCdoyptpoFRvX9ryptNPKjDKYrTQKwwnZCCFmif1FK7iQjzMWB6kTckdGrbkzDp",
  "key26": "JcQKNHcmvWBEidKJgHAFoTcqPAh9iHhCEHKjKWeYu6Lz3NXn4CxS8oCTcyPZqDfeVVdVSbidRdwd1hfn8RH2mKx",
  "key27": "43p4uzfcELJMoZDhzprN3eLtdFBqNoK4iUbTTw6wD7uLAwsJ4kBHDQwA8v7Zb7WteM3q8SXRYEqDZD5uw5JRbhGc",
  "key28": "MzRtG6GaNwjauTRbGUuYXbAZBEfC1gF8cUpEMoYELQ7DQBpyjaTyre6HHaF5gpYn3JCxYTJWWrBpDQGZfD96ofU",
  "key29": "37Hmkxivp61FYxx4RDCdKVGQNiG2tLvYT3AkLXqGuoLnNJ4Mb8D1QuzbDTHsrPgMGHMMZNCofiNGnUX1DFfuXr3q",
  "key30": "4swpN9QkFiWygbeDe9txaD2Tu8TEqruZLj71xofmmCEnDmg4aWDfMe7Sn3zV1EX5ynYahpzxF87rnNVoj7beL7P2"
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
