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
    "YmC89BLQ7nXZAMnLRyHbewwRW7P3EFqZehABf3qyQa3XSwbZtgGPYTzvEoCsMco8dLZ1R2epuZDUqxvDh1ZTudv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65B46LiBLB71YyhZCac2K3hyh1BQnvqAKbKQbuUgW3ZZR1CkhCfpwMmUu2JRqgRbLHn4CcwqKjm4kz3tPMNkcwi9",
  "key1": "FmUHbtgZAdA6t3BhZ4LSjESKrAHmsAeehi9hsMiqxv1Fgm4FjTwjxqLimvfUfNrKniZSRvRvRKKhU7ebiQku2DF",
  "key2": "2zd9JyvP9poWkvjVRKPSwMvC4giMYHpZEvTi21TtXgbZwYUgWoNnXupWAkuqVnniQPre2sDbrSTC23bJF7zxDS3z",
  "key3": "ssqvpf3gWtdoi6W5xAsZ13gdukx2ntagGiunEqR7cvJXnrGhrzTVQRbVyLk3dqnQRPeGNXAqq9BgpHHT9bX4hrx",
  "key4": "5FTtANU9kWg3FJkcaun9Dootrv7uFCRfct4tyb39DCW5XK4LDHo98Sx6WN3mbjfMMNGaECzAa3RMgY6ui9fqsSpi",
  "key5": "2NDuuCogbg1Bz7KPccj3uybeV5Suay4zgEc3T7Eh2FxQnFDaeUE3kmVsbXnFZ2AW9ZxJ4ct3atBtiBsnNYR8XQet",
  "key6": "344ErSrkBmRwLTm2RnVdGiVYCtQMtNEHZjA5vWLdYxqry8CUSb7pmsKhLropnSqxijqht7ZwYXcHLgiLHN39x755",
  "key7": "UpwEbwoVWFQzx3PzSDUNUd1Xxi13H4MskxxSLrQsDnBsocnbqamifd9uV1BsSin96B3woGppgNvDbnafZ56xqqu",
  "key8": "4tF7LbWFWWpyNPP231jUpwrGqYyKzhzJuTvd3Kob4X8gpkoLF1K9vDeB9Gu58bFjzQFyZZiGqBNPDBuNF6FRT3hU",
  "key9": "5gdo5ZUDuLocPn7TeURB5D4S5EdsA5zn4XJsBXMjmsWhMGJTuRas93GMhPMG7k9ca3Fwdok98FRJK1y2RFDhMv4E",
  "key10": "2vyhnUnHe4FZtaoKSPd8VqBXyFQBSKKVANSoSmnsxeFqsp3cbBxevvqF2sJVcfP5jYM45EvaM7usEQ9A2myLm9Ds",
  "key11": "NhcaL15aRzWaLH7aC5CC21eJhahAeGR11e7aokxKquzEuc3cRgXKwuFqs76nmp1ffdAsH7d554EN1nWGX55TiNX",
  "key12": "4doe3QKQaggUqecm3yVeczdvuhqmhyn4e2eEK4GYQBaTKXqVevUeW9LZg3LM7dhHbSuh87PBmm4JmUHE2c6bffB6",
  "key13": "51c3SgfU7QFNfdn97b8CdJxgqo7UwbYqVBSnab933QPu8KnzBxe8iuBYZAiDrYv8QGQ8mDK57BUPUcRY2FTYxsXG",
  "key14": "2LywyTZMRAijW7C7NQL7yymSXDDHfi6HE2UEizGiwTLUTsPKiQRSBtCTBqin19qA56ka2rzrMszJHXUk7G7scgne",
  "key15": "bM9ryxgdFPndD3Y9AE1iVow5akNXvSF6SFe3myBjto1WGDAXkF6cDjH9DAckzVq26A8JrTPNWzAhSqELhWowupu",
  "key16": "52DtAtPzfpbWdYdnqw5ys2ENJfP2Wk8JWhjnP36FJ3UbriGaQURqhgr8dfrdBpQUw11dYDe3Tuu4Bj6nGb1TBV9e",
  "key17": "3E5a8VkBaBsqGAQ9iE8PniLstZWwfiEaN4ks6AXTuZrhMeULKc4qkEpa5hSpqNJ3adtLdAg79MWXgHbGhvE972AN",
  "key18": "264yUm6cjGZ3zJF2ePeAEJtraAVBCMhbMxqVhhvYh2AsfWQyWNkmQeJ5ef8EFaLKu1sWeRrjuBkyUo9SBNhQZgyF",
  "key19": "kWSPjFQpJ8XkBu6gGEXgfQM1T4N6pHbnemctvnWgBNApsoBJW17PK3GMajkjQwyZHnzT5XtuQ7v3YfFB8BmqmDe",
  "key20": "66acbSc6ZMasC5d6pBACK2EQnKbHnVKJWCK1TePyxUKwvs46rU4aRDdc137s6RZoremMDWQ8f6MvzRgWfkpABzuP",
  "key21": "4FrJ5fxnNUBXaFuz65q8JgppzJZ2NETbSSMBe3SWgXMivMkM6rHfMMiuWBRznY3wpon8ufPAUVVwubXLCjhXoHwM",
  "key22": "2hDYFFBw2M7Zq8e2jUcYrNzqL1QH7fCWNRcyQH1EpRHurchNtQhtJPmXht8EUqEC9StApNJoPugXE9tNWSzwv1W6",
  "key23": "3robCJnM8JVksAJxi8PRxhMVSJxy9xWkzHtctx1yT7JG4uQoLfSwKwbFjciV9umyB3K3ppoVmh74FRQ8dfha63Lz",
  "key24": "2jZN2ehS8T7zfoYXUe6kHVJJmMZQhGpdL4HuM9NXfUKKSZmdfj3jTptaKqxsqwJDYRrALAV5VWyyAesGwmq394Fo",
  "key25": "2Rvw3YdRf3PFyehsQoDuo6Dr1HeGJmsTrjRedrCaL6BHwZCoJhi5trJXZWUva3hkvos8Gs17VLti3kmQGZFsYz8G",
  "key26": "5wFmWCUz69SDStdPBMZWX483dfVi25nmUp5tcSUgSZBcL2NTWo2QVV2bmK4dzPL6qMbKphvWZRoLPAfJN4SpyKXX",
  "key27": "giBYLeEQcmd2BkqG24tpia7xbRpR1vNKFC3vqTVCggMLZVSQ8Nn7AiKJYLJ8fCrJJoAR3wdBq48GPxbWExVRHtX",
  "key28": "B9tZR2SmTHTj9uXgbz1HqooHDCcuBnQr1YZ3yxtxbZdSC5YrSKf9U5fjCH5k7uskrTjqXPpMR9W8ZaTaenLzT94"
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
