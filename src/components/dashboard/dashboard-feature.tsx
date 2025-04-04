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
    "5nYV34M3DDQkp8i8Tb9Y76yU8xDXQ9X29t5xqymkyMqEs2oHD9q5NXzetcgezDu4mdh2UUrCPAaSDwC7DdTVNEeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2og1h6W8nPYSpSR56Yy5Zm6qXtM3ewtE8D6SGhzSZxCYUYSf43MiFmnttftjeeUih7V5MUC8LGSik1wyYTq8DnCk",
  "key1": "5SzFBY3XQWqDMhxsiDykC7NbQVEm1aKfBW1J1MWXZmaAsEUNwiRUdHZYJ7oaKfkLGVxSuRf7NhLeYjUq6oEAiZkq",
  "key2": "3aNpctig9cMXgeS35LVmmYrmk8zNEkZGdJv8fczGENY7ajHKTzi5GHhG9kFt57zJfm7qey23YY9MTDLtQUbciMSM",
  "key3": "S963UgGDKMbCna88ryUgfMspERPnjJGZtRAFEKodiJqEMQSQ2G2oZS6DnxjFqD2MiyCvRhsLgH9H2auGtUzc7WN",
  "key4": "3VPZJre9YEiGVmi4fZbFcp5zkEt5vykF5PTzBjM5uX22beiThKiUVm58AWopF1tadDDaWdojmmywvGW9sEmEjpf1",
  "key5": "5wF9r7uZmh13YmHD8bFEtMuak7fcAzQcGixQZTY3VjWBaLTyioESYnT2hvc3E3nCmSPohimgj2KnBnyv1i6vMV9z",
  "key6": "3NhapxunZ9StS5BYHtgWN7ptbY5amQ4tzeYn5w65D1Ch6Sd9git1WrD6eRjKinW82gzCcVkjDtohy7HBzXTe9UEc",
  "key7": "3ZwwhVYVict4hdhSWAmkc2E2ffSjMzHjMzL6M9JtNFVttZZAzSsSuCyqU111H6JPqBjHu52sAqbVABThvxXHcwCy",
  "key8": "2jqyGwMCAJVrk6j1vS3jjf11jqxQ4VLDLHgC5ArFkeLGkRyzkCL2rHgrJHV7Hpesg7Nu1cEJK8SMrcEjutzAaTMg",
  "key9": "7SrfXsZ555dHSDR6GhAickg6hbHybUuXSfytVyK5QzxMuNkE2bnfJ5ZJnnA46EvrQ6D9aumMrHEAm6uNW71dV34",
  "key10": "3FwKAwpgwZc2KANtTBGSMZEqp6JveDqnThsWMiVsxXSsY8mTaNcTNFt7GmmxeMhqarDBSueVb1ugQZMWEW1VFFjw",
  "key11": "5shKyyVAkXCvp9Qbg9DWpmJLzRiEDy9kphiSPJAwgyBKLNfgFUW2byCqUZC3hi6QFAy6fp9qpxgZDT2j14yZdgkr",
  "key12": "2fh88raBDszW7NVnDtMsqmkmnmHFRwEMYh7rtDYyUAJVqzTb2U6fhz5wUyU1SB3Pt5RFZG2Hjr9oRyN7XsHPDocg",
  "key13": "KSbRDxx3miDcj3KixzFwKcdNvEBxuHEpoK8h38YqhAyNsj4SSpokhVLmoUB3B1u8mybs9n5MR5pUiwfPcYrYajt",
  "key14": "2EiBefxAN8unMiWJruTydn9yPamanCBUR15k9UswVa4iUiLN2LZiHtFpN6y1AePoNqYQGpUHivztAJ5Nj2eqP8SW",
  "key15": "a9K81YyhZC74VVipZ4Rpy97oWtNqrVtUh559VBzV6rCBYJQRpuUgXyqTRzPf2d8NbDpgTk7cZgYM2gJNYbjdchg",
  "key16": "tTEC8u9obrXP3szkGuNhXb5KBzeQLzwMbG3x9z6prrbJkukMi3ZNp1Snj91pNptM9L8ndBaJzAB5pqSNnCPkh9a",
  "key17": "5ih1X8kjRJZR4zomtst5FK8SRgeZDTVjr8cEu9XSmhEkgGx3ysW5H4Zgz9yU8sVPktkYoRNeNFVEV9QeQKoXzoYe",
  "key18": "kxBu2W8ejBstwGexizjjJhMkfwc1CzLN9e7r5jXMxYmk6x1ZWr3fiF4zU5joT3cCkgPXc6dbQncjKKdxqcgPSgo",
  "key19": "225iK6SMBWmyerEzo9QpCu8LyCpaWedf9iLj14PiDd8cnREQK7r31yCYfofMukYmACa1XVPbsCM7JcJwgfUfo1hz",
  "key20": "4Qzk3HSTgVDHEgbidpAaUeczqri8ydVWUuANQ2KotC129PGkrgPdmw3SxmoibaRVT4oGuW2ekTPkzwVCz7k6qaDw",
  "key21": "5MDiDxuf34P8UMmB9Ko2q9y655qfceQUWLW831ZpmYb8pJysgit6pFrbHtkQWqotXc6uAVjtSjfzAbcVeQXP2PKX",
  "key22": "wY1oQ5iWw8DP4efovq1is3292DdBrLY9pXaQUuePe1MBXLpC5cYtHbt26LhZeay92RZRHY1nhj7CxUVcjLFG54a",
  "key23": "3o6mPKfRuF8E8MNwj5Qs5GLd3T3FYpckGwt2UJmoJyeuUyqmtKpnPH77WWMQETuPbKv851xJnSUiF7ufMnawur3C",
  "key24": "2P2ghvDErtYi8yXwmATF8DpQmcWtX82sJuznVXxP3Yxnqx3GSBgQgw3mFrUwpSs2eAeTd1vavboCVxmRVeLY4pRG",
  "key25": "3fS8RkDQ313G7Qes8QK737uzSfJxFShXtnuK6hRWPsKBfnyoubowoN5ygsKNwqkStwRmXTkC1Mfs74VdSNgDd4Mm",
  "key26": "2MWzkT1TyCnTJMCwEPjaJwaDoUJcpW9BPMA6M9iPj38LY4decg2bEpy6f7NYf8R9NomhYEQ2xG2qZhfZxpQGLkVW",
  "key27": "2yfmMoFeNe5embYW5AtUKk89UTkv6zuPESQp8GQGYsanW2wFX7XEzQrAibSe7Ny8U96cfv69gc3y6py89A7BSwoc",
  "key28": "54YnQAG9JYYCxt8jnaKV1mZ1n65yYwWAoUL1DAHXkgM5ZEAJRbiiyrWwExHdbHkPVU4tiTUBYjEehCQ8TKdgdTY8",
  "key29": "dpYDbuCrg7D121npBCAYV1WoG8HxaJJUHCGWQtjxNQuYCWwZqtJVN9avd7CndKGq798zacUWziYYjaJa2HvfmMT",
  "key30": "48BdyN73ZZrieu2swCWAgczVVNNXMhczb9ExxKkYTD4CrYEmw8vgKwCG7FJs6618xi2M55KhvDzNrUDZotvSfRgo"
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
