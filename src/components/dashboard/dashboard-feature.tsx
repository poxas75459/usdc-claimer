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
    "3SjdgT8Q4SNBhwhGVbKiXdf6pmkmZRESrrrs5kvKBuDRGmjTkDt4hkxviyL7JLFihpyXk2cWC8LdgzU7HpLD5M2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnDmUgRwr3qQJ5BwNkYJ3DyqHCAqj3taqb6kon9jiRo4E3yyFweB9yf9C719wxCcDTFLNZLMua4d3bkjDG5ehn9",
  "key1": "5g3Do3XpQqTGeduQaFc4qs7tY7EKREKyS4aBKRmM94XBTKTKkLw6EQXgcu3ieUc2Civ7eVWmnyMFGV7hkLEVthYK",
  "key2": "31hLSJ2Prd9uFFZWXCjE822FRacqFkdffmXEiMrJrLhztFnyvU6LQyQwV5uQhE5kcmk4v7spsebYsCr5g4zKYwqM",
  "key3": "K6XG6LgczyFS5MGA5YucQirf6uKfZnVgNJosdr6MTTBVrSPSZwt7oo3VN21itRNiJ9AfLurVhBpvXqEw8PaoA5C",
  "key4": "hMErYcJaXLrogYMkAbcxawtYkz8ie5p9LyR9WsJV8rRTdvC4ZqRmNHsKcXtVVnjvCBdFxpAVZdWwp8y9BmpUTPk",
  "key5": "2aUcwMguKVNbBueMmhV634ML3KcAXZ3fK7VRJr8dPJThe9ESSfBotwBRXLLFADtRxDqYDWmy18LjCHv6aQBdFaaF",
  "key6": "5WdPrT9tfpoQYsU3YACKNU84grFAVUS9owSrxb3jaiJYvVr6ywZFAff7BVhHAvn4DjoRZwJZP2xHDMZJvtGeFnyT",
  "key7": "2yEHJ2WP6GKpawe6b2JBb4MWFDgJ1oatHttPncXn71sJEbrSzFLQXSiYMgXsi8ZeGVUNEkrJ5EzdMtHB4uURwEpT",
  "key8": "ks1Wiwhk1Wce86GNKJ5mZxGwHVwdUFLka5yasjyZFbmwcCiEDcGuU3CTB1zUcuT5rPnBKv4Uc4NpLsU7c37EMox",
  "key9": "2KSsTspE7YD2eX64h4kQiSbRc2D3mDhA8bZUeY6FfXT7ceFhyp9vo7WRafMw9LyiGzcsMqpAhaWQDjJM3QXsyVLd",
  "key10": "5mNm2d7w89dv8wHAjsDaXBENfV72mMjwWa3Kn3EztXQVUj8dz7ZJa5QySrGmu2r11nd1jbw6cVVs8165dJ1ecxRP",
  "key11": "29eMFUomTSE1BP1w1sFLN7A3YKMw3Pjh8k5KjKAn4dM8ewCW6fWPE5pTxKKvie6aBpYn8egf6gGuycziB8NCrhMh",
  "key12": "P62uiaqmvzfBErNr5ZibNjuTeD22YVXPpQy79mYYa8PqNmdvvyWHRp397dae4JZfcJgcc91ZS7wqM3Sc36UnXm9",
  "key13": "5kemK3bCYXCmSNNyj2PkcTeC6QesCfwcPxThbyiyubCrjAzom4GwY7CewQDeQC23wqqXjooCiesqV51Gv7b17EN2",
  "key14": "5VzRhFKzBE3c2qSdWaZmU4RN7pQLjcMUdpP7usS8yEPxAZ12ZTH3KexTdViHwt6UUmANWrBi1wG9Jfo7yTTYZRQ5",
  "key15": "4uLnhP746JrcqiWPJ9iMMhhnWAMfZgqRUzMS5DkiEh6AW7b4fy8mw4otqqdGdE9KWWRoXYKLwB3w8K9V4pqGTc4M",
  "key16": "396c7MNAJjhC95FmSPFmPN6La5XqtCazBnsEJR3CKgG3nacec7bbg2hFUnvodav9L9k6ZCKzQyL5uWZ69vjvNjx3",
  "key17": "4C9iKW9M17s5ocU4FNN7vMTBsfsCR28zfHh8QV844ttuNJoZhTXWvTfCxoq4xHgv8wT5XQGYptMsUjZoCeTLc9Jy",
  "key18": "3ak5wwNn4jDo66zA8dRRYrio5yZqpm7swtkCrTuRv2nZcNP9pPaWmzfpb8WaEkPhd7eaHqiQycn5DoxHBVvseiuS",
  "key19": "3q4eFURscR7TUcMjMmudWsWdhwMjcJgn5axnGC4eUSjUT8tH6wZsir5bvdHoNJzNSUfEw16C2HXPXEtm4AbUzvME",
  "key20": "2ZofvAS2aCbTZXDYwkdnw63mrstPC6a5ozrpF4HaTmVZyu9u5xdv5YYn66DF6VZzUVY2e2uLsEDnwiBCUsgrpcqk",
  "key21": "5aHZdWjZMsimuJDc2v1AHxACXVKxprWU8YtVTpUZDgU2pHAye9YPbGy7RcTmBY8pJUvngU6JGJoQoVwki1Rtfa2n",
  "key22": "562KRSnmdVRqwPeJrxVmsLHU5C7amCdqEr8uG6LEWuKbWRbsQwZX9JrsJx2S9j7LD9DbV1CdrMy9JPNXFQB6ceTj",
  "key23": "2iqh124hDfsPvhdXF2AJqfqVH7S6x1wGUrzCPR4o1MzP3rPS5d8PHYajtLYkFRQnH6pF2SLgsdAauy9BGXPmtH72",
  "key24": "WctvMhxBhvKiiURpKD9aVRmr15KqzAAZTutBVD9ZcMnpRpioTnWWkg3HJdVmU2W1gwqoj19sbtt4QcatmQpLDNT",
  "key25": "2MpPbaMnMF9zJ5PEz38EGW5KoMuUnpt5rijzryzStMKRwMPSML1bAUx95SFPj5wj8zB6giAubzKn46h76xMiGz4B",
  "key26": "5WbjjoyNmLreqZ3krQZHaNuJPRufsq5aLQZbspepxgHWMaXgoatQW9E7QdgT58t5xHavoWo32FboASDHoZiLANgN",
  "key27": "MqeuhojSXnXwoTBPAuXPC3r8D7nprzsFzrSMFThMBBhUi1Hfr9w6gLM2h3X2GwinerZ5wDbBPQ1naf6fGNDFqCJ",
  "key28": "3Vbu2KFhZ8N74AxMWCGAhBUjrKG9FMDyByofEuhiyGvSsKfj5qY32vcB7WTYmXdV77Lho8WwcydQTKjuojdrXtxK",
  "key29": "2gFcdVe3zAUfZNot1GFyxw8iN72zuHP8nU4obj1rAWU4Sw6BVYqJyWnkyRnL21BiUddhrAvEWwbqqP2LjTaRXp7B",
  "key30": "31HNT6yaCR8TTCmYBJD2gQLezzLnb5UDrSPcrsdXtTdVwVTAVpu8GapgXM7opirszs429GmdaJRNfyrLMSeW9Xu5",
  "key31": "35ntExnSuSKUuLeqj9LmiX5vdjrBVo1ifiLTNfTGKKLJQtmBdjSBXNse4jgsp5GbNuxKXiN4iBctBByX3m2yeca6",
  "key32": "4NSzr9BZKYAtGAB8BDo5ggzQLk72NjFpCgrZkKAFJNZeGZ7uFLXARjcfPq8A2g9ustHmydANsQitNAJm2gu3itrt",
  "key33": "2w4TNeuEahNyFnE65RRgeSEP933W5TeXi9kPJ4LTZ8eXXM1HtBfU94Y5MPMrRanqtDoedPFusDchvN24g3QZdLkn"
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
