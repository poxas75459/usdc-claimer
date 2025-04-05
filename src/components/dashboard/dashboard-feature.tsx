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
    "2NabHojua3XXu5ZDLF314698yyt8e55LuP9NZMgG7kHSpLWH644ZwthFHEPRSw7EeCTtwbas3NYNUg3kHQEK3dqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4E3BTkciWx6Qc7LTxWEmqnDPRogEMCy7DQ6MsryUAETytuJ7GLgCdDLAEqEj8aBmjYhkht2zwh35xVhPrEuHfY",
  "key1": "4auqdKd12sdy8KfkrBxWuriYcteTtj8MLGWJSDuFvxAX1LwR4ftvcSvRJw3646ZP2rKihLYBnoroSh2t6gJVyJQq",
  "key2": "5EypNGXWJfWHuAXPDurGQRxrLcRCDmRimhLYF8gjsbiFh1p6KxQf97PbQMusxWkSYojB7uvhJcpmTvSWNvrpCPoD",
  "key3": "oEHFBCftHDUXfHv6xZFBc8kvZtadoAJ33G7TCQY2ojSHaJRduhBhzfquPvvzh3apxsrUJY2CVYe2XFhbKJhnLNX",
  "key4": "3vxqcuCejnGu1en3MpwibXemxpbyFog1ujK3623kS3fVtr42nxnhbdowTDBRrfJhCkHJbEbo9SjE84UDfJbeXrGr",
  "key5": "5PufSApbxzfMBWnV39jxFCbpHKUbBLBBy39aBZHmR2kkKhRxK3SEbVjhNv9a1Z2M4SqMcViv2EUWmoL2gWFQ2UyU",
  "key6": "3z7pcUKXVzp8bNVW9o7CFHgFWmNkEF8TH6bzxvuBypJH722Ns2yxNhfJwgKceYoQ7qEr2cagQwG3Cuk2r3joaCjb",
  "key7": "3WzBPV5xHzehcxULq9S9YPRuxFbHTvaoKgetaKi69aA8mD4abLDKvHrQhEMgzd8suuKN6snLAsQHhnrMznj7BsYg",
  "key8": "4HqnfhsZL1Yf7rpRgoGNTE5arrpHNUcD63SfVBRYuML5NXaYhKBVtDNS8tE3ajNScv3LGLdH3jYvmKjzykQsQMbY",
  "key9": "2YkuRHCCi4mn5mpBYtJ5TMi7H1s2BfTHDPY86347pcDpMSBypeE7dbLtfLC28A3Yqw8t8aWGTU3uCzngG4jL4cwU",
  "key10": "59tcdQD3FAAbPL6QKC4UuECKArbmAC1qrnTik6o7zazb7qddNTzs7KfSVT747ySaRQpWdDAwkdnA5Zqm6Q1rnJ3m",
  "key11": "661FT2X4AqgtZpB4dPgonf6vEURJ8JoEbJj24PoVeQzUJs2e2j65UKwKu2dutbbHpgBcHvHG9c8hidppG4Xbiroc",
  "key12": "ccknEyjY49uoWnVY7uuZWP36UMSyWtcnd4HCgq7t6dDeEFGbZbkB2yNnADjNyEbUM8r69WNYP8xvHUHig2qqHz7",
  "key13": "3MdsEp7ArQFBD2K6vCM3DJykjH5TfU5XjovPHhCJttaW1foKZjww1pGbTzbbqRB5METHnPrgcefUE5Z8khrNeWSk",
  "key14": "5KPZ4MY27bJMiR2NjQcqVf7xkScL3yUE5bQgt2UhuH4MM39rto5SBpi87daS2uk1JgoQfdxpgJGV7WXx3c4Mc1Pb",
  "key15": "3E76b8auqMrpfYPcv5xoBjrLkntrBpAeUR4qXEYD7T6mBu1yY2rDnoAZyfhcc3RxJUUZVb6nLMp9g3E8vzSVbaJ7",
  "key16": "MaeVDCzKx8NJSuBaEUfy9gLm869BkjuQMiFJM25ydNyzfW9tC1Dt3KxSYVYkPGb6SZtJh8snBGT65yMvsZoafXC",
  "key17": "3QgvPevCqqSNuq8xYf4nQdfqjA8LBTwZakY9HqcAZkMH5TiKQ1NtgJF27hZ1pveDvJj25GLDvnhrdyMnrP2eqoHy",
  "key18": "3A55j3APVDXWYtX5CAjEHmweLoMJA9AVvEaKoyGyFMqmqjCCH8xCS7xoYxABGmntf7j7W4hQMR4HrK9WYh3Xo3FV",
  "key19": "5pPpK5jJBUqoeHvBX8Amjv2kTLxd1Eauh5yp365G9gZy25Q5gPpfZ5xUTF15ngDGMD7Aer86G4TUGXjUnETraVeV",
  "key20": "4oWT77cowc2ChgbT8v8sUCqP44BdePNkJzz6ciR3tnQnocnU5EC1eF1nULtrhZQSwupPG9xbn3SXWjbyyeTng9tN",
  "key21": "4uJ53YsYLEfHrwPQfWehTaiknxPV9UDsyLcg1ZTj15ME3BHEDvR1b56FAAwaDq9oPf6LrbNTWdJhHQtECUcPEBwY",
  "key22": "2i9KGmHH2ZsmSVjdx6u6W64h7jjqy46FkqHMKQPfNYFMb82NKaeMKurBKqA4zBzFhbmZHzSNb8HYS69V9aHLQcVh",
  "key23": "3NV7CJkv3MGyiwGyJr8qGENiif1nmC9icgewH6BQyenTJM7gcitiNaUqKoKmgu8K6FL2u9sLgCGpU4yKhh739W9G",
  "key24": "5dmuUbMBPPfY4N2KGEjsJByuQgyB4erGV586YZdKUdJHCAhowpkQjnbTMgPLF81NBiorgyd9TBd1xDG1HgWvGdBM",
  "key25": "4DQLG9Q5yTBSTFoEmNyVFRaEQ8TTADkSrXqaYRqokobUj3ieAqrg13CP4wa7TbaeegfQb3uaTfeoA6HnWWP9XJZ5",
  "key26": "62KMpcxKxeSa1BgvpVx51dzcvoxpWESTbVRcC7dipZi5PCEPJHrzvg76HTLF6tbX74acgkX3c2QcL8BPF1bGrzS3",
  "key27": "3sE47B5wfJoxYirz8afM62B1aBUu6Ld6xsu5PUCRMr1bfajy2zZj7mYmTWPYq86ip4rAYwkhZik3aemNxkmR89jb",
  "key28": "ADL1s5GFeUDWHWuSnDeQkEW1DYHj1aidme5EFx8Nr8mrc1jwtcgyamWisp9yMLvghvBMH5tYMyevaeAQBn5RCfj",
  "key29": "32YPyvzjfZCoPSZecDBxoHkZB8WrtixqsnPJcuotFJ296BetcrZdpYrUGzttfbbG39Ck78NxhPmpwVd4VdnpDwRB",
  "key30": "476J6DbQvYaRX2mJVnywgWGzaLMTkQhSEGzxrTR2pYBe7pJeQ89dijiFrWKZiRci79edizkzAgudVDrdeY5iGivd"
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
