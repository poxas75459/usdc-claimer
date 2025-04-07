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
    "4cdiJFU47Hc2rueD4hzyuX56apoT7yAQAPbj7NGYwTTsABmasiizPwacHrLgNCN9x5N7wQonukMNccbGZa9XqagU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftxdzchzhgbdPHKSPnDHuhNPbc8qA3MRCSVtmYvqGqwtpp9HpQxxU6YWnuXFhhAQchPo6fLp1YxuKzDuKcJ1JJc",
  "key1": "574e3Sj8ZCuPNZBEMer7BkJzhpfXhcmnJT19JkraCStq1pBDbapAXJGfZwnnctEMdh47UkzpwFakoFfwRCBhaKWh",
  "key2": "2eQmZuc42PEHyr5R9caUgWP2b8dZ8ctvQBYi17nTWM2Z67fAe7Ky2c5drCtYKMSpij4L9yav4NNrnY8ZK9S1BN42",
  "key3": "2GVkrwciNZmYedPh5eke9FRUUEZNETdL64L5uGi5hetVqXkNoZgWCpmBsVkyxqvxkEtXQBJiwZxHtjEgBFWD38vE",
  "key4": "4UXkhSoA1YV56AXMGGmovXC6MoNinMhh4k8y4oyhEkiYajwSfx4RCD9bSTycjLfX4SdsUPtu3fBn1VuiEJW7imTm",
  "key5": "dUBrMhkT4Lt13zE9Wy9PUV1wmXAy3V9sjA3KcVMqdMCcgiXP6Amw5RqgzkjprsBSuq41S7Npt1NjSjoKGrB3krX",
  "key6": "4nqx9taxxNKo2djXZX9sywDMgzq8WUAaLeJW6W5Kx1TS4uEhacEuQkij9pZ3X5AUF2fEaaUKAsNsR6vKXhDxtg9f",
  "key7": "5HpLTXtdksBtjmsSa5S6qw1RVessoGmDbyvJSjHnHGyeh7SuHkjtQWY9AGzUbwMJer8gwMxWi5YJfwi6ZWEhuLoP",
  "key8": "2xr5JFma8vSv1LmBNicbkQ6CtVzCGdN8St9dXynDhGv5Wzrg35Wi1mWZeT96wh7u6mujiehh1xS3acG6uRKhfSzs",
  "key9": "5oQteVFHssLmsT4RBYKHSxs7uMQvUKPXUnFCgHZLrdXP1xcVCe4dTa4NDJTS9GbsWZtbJwZepgyrBi7MrCbDF2NF",
  "key10": "5A53vK6GeHLwzDLZk6DvyiUugecoRc9CEXuoLqPoBHYjTM9kqaapFs9w2zEaajAVhPqsDKzk5K61e35PeizoQaKV",
  "key11": "4wMrFQ65CSd4fMjWJjUWPJqcuotJ5EQ6YCU5KbpUWGa3cZeayUFeB1pqar4dZKfJxroRTsR8q91mo3XgYLf9ggUr",
  "key12": "24tHawzSRDJGwmCjjrofZszVFqfiPuRUX2Wx7DcnKFAagJVuCsgQMCc7ZVRaab9wbTjUACAqesBQXZ9CsNLYww2m",
  "key13": "5JSnw4sVWzDchHwJKpGHSuHKWp7ArJCZs8jgeQUMt9aFfJg5Kydm9y9U6g72b9PVVSsixpxk42wWsokngUZSrhEK",
  "key14": "2KfZ32C5Q9y6L1GskLzJJskWmzP5PqWHmaAhMWksnbgoLuCv9hvfF6DEzeCHtR9ySJuJ398cYBREQgsmnRjmmEQT",
  "key15": "4rgJdVRZpQg1GfLwUGZmzPfdbnhdTfgMo2NuHp6qxJHoPPuyQrYzmSHGkrffZi9mtMHjGWpfVk9Gf9Wywgr3XVi7",
  "key16": "3TJXDVLSEZuBDo8WHzY2Vp9me8ncLJ6ht5oTvxWC5ZLfHAh2222GXxggt89Sk2JzLsyrveyXRRFgLyw1cHs1sak4",
  "key17": "TY1v5r3MqT1Pqs3md8SEPqxCcrNsRbhev2ztuia9ADihMvWhLojhZqu6VgvwQDjySBgf2BnCxKPFD24q5f4pMcs",
  "key18": "5zFVTcGR6b2J14poRhjwzizXbYpE4HWWwMR5S2AukogU69Ncf3Wh3QRTkB99WUcX5EfwSRMDwVVS7MVgBKJyym2G",
  "key19": "NHxhFxo9SshgJfKBg3a1CRguaxweN1jstQNHk9MfsHPbZzrjQhi68QrkutRvW2mexoB5mzGebC1nZCyaoHAmmCZ",
  "key20": "4jEZ2o3aq8yJfJnhNyJgFj9eyKvxv5BnbiTfhZSULzUhxUwE8tmx8wRogEA1aKBfF9TnWenyvJXtcu4F4sVnc2wC",
  "key21": "4macdH7PJQS8g16xjuwaYpeCkCd19HySGQWrgNTqG6mtN2HBLfTPPP2oGM8nEAt5mTYy1i29MzPzP4Vj3uqSPRRF",
  "key22": "3h67vMpn352xcDFwYRHR5PA7FW3yBbyhF16s9f1v3UiBWDvinNLKT4DrsDWQXjmoeZx7Yew4fsEWk8rDChpwy4WH",
  "key23": "44sEqZsbuY7miVA7LUaWUUoKgS98w1xjiSktLFWxazwVqLtqHmLJLJeEabemS7X4abZ9xMHGEhKJsKLD7vWXvMcZ",
  "key24": "5MUiF9jgQXMDtT4xx6S8cfgstwhtbpJ3DGyEtkXub97DUFZaKvKeN3Z5mESdhj3rdcd6YRdvGMnaGEfzexF7s1Vj",
  "key25": "3kPgWhymjY5dtvxVy1fMyh2HdZ3FCWjk4GW5xZEUrXFfbpHGkfhYgNdAZ3rsshtMMzrn1Jfs5VPLTDYAFxt8rUaT",
  "key26": "TPJwn5pz69JXtzHnFAcj15X6h5Nw6JgtbSNnBdoQiXnhB1YfYt7MnwWkp9qh4Uw979nNzYxyjJnnsRyVWR1DmQj",
  "key27": "3iPQLrgEvSJTQTTTd1gGxwBZwgrNQzqgnbyfy6NCH1QpqwXK5kG3qXEhvewiTK1Gi2CvbvhTfgQJ7AsHAXbDMM5V",
  "key28": "5kn2w62qufWKr8TfijnGhqrdpHHBAFSQpfTYAv6TerNkVjnbfaZiE7fougyuTTv2Pv7TooVsujpmarxVNYJ5e6Fu",
  "key29": "2SgJ7YLCxBKbiZgvTRNg2bmrKmZQ5z79CAwdHHdpfc6m2BHALieVy3XtadCPXUb2gRrmWuJxyM2DUsBz9cZe2HrC",
  "key30": "53UFGvHsysTAT3fwAMUj69XiLbFxFxLQSshLg3r8adK3mHSzfFeRWXvnHjWxYt6ob5583hgFLvcJiLvgZrAcfjgN",
  "key31": "5p1Tzd3g5wBgmWCJGwje3Trx5xHVzfZiRJstGuebucTJ9vRpiT33GJJ7MeP8RvDPqaKdk9DZ6bGHcrRnV9QazG4z"
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
