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
    "kJXc9poX8MU5suwuxngetSyz8wcM1HuJZosaMzLEuR111TRifiFApgVFif1JPcPszGzDCmX7Dtce7LmLv4uTkkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMQwjHjj29tnqGnNHVKccp9GFmDW5Y8qHZ97Sc3s6gNE3y3VF5NxTyo5yB4bxkKQXP1AywbwtQiYWJxy75p4LDX",
  "key1": "2iS3wJyuxeC8k1yoGqsNi6EFamuBgv8Rcbz2SnhUJ49MAzDYP2yB1XziZvj5h9U7aD4M8dZrGTdecmGTc3fx9kKP",
  "key2": "41wq2zCXGd5xyHztFCk9RuAEo4SF1Eohcm3bfbAjESrXvfCfVfLjhK1kxZhZTLDPro6rF45Hx5DFzKDEf32ejo7L",
  "key3": "2TAx1RyEs98Wi4fHU5Zzia8akDfWDS74D7yrdyFmovku7QxKhLhcHEjWanrLR98bfdp9CaA34rNpd6dAUEHv3JUu",
  "key4": "4Vdy5Sg1KtnaDdpVP8k431SKrEtkG73jwuDaNvcYgaDipvaxyJ2DcaXvKaBmctdA9159cD5YYSP6gRjNaMCF6W5M",
  "key5": "TZCf6F3ztv6h2xzgztocErc6R7DDmUs4Mj4cMRPw1P13HRgsjucHrjjZ3BYQ6DoENfnTsdax6Kc5EskrdTksDwM",
  "key6": "4QA3vj6M9cVWnU2xbZGXkSB3yiRjWet768a6FHgwdxXQ2fC9VbBNmbML5JCBP2LyeLRZK9cJNpLFEdu4QhmQN6VU",
  "key7": "4eh2A9Jyju3yLcqQpVZCq2Cr9Ha733ZUdwbGkqyYg6QimtLP3WBd9z1CvErDng71ggHLfYLe8LSrsTL3T6AwkGqg",
  "key8": "5gBBhgUfGoTRZXXrweZMb85jSWnV17d5S2ZMuBm1CHmv8tXZq9XtT8UvREa8YiFCizW2wdBr91pxZrAsCeyfMyYf",
  "key9": "2hE3gezztN5xgu3KKXhyBKeSwXjfowADJ9GiQhKogbvVuS4PG28MKeUiQipUNV8pJZS3wBQY7ksG2DW7XPgtuJpP",
  "key10": "4vYeNjspzjyPNkKhsGY4gv15BCL2QEydKuivhrct5PXqV2QRArwSZbfQMyo3bZiEPJh2t3iwNkPevNdfZsyxayDX",
  "key11": "57hgMBDmtzq61XvmmkmzbNK6MNmjQvPHFT4gHJzxfjjehfckEPamUfdVUufb4rM8CAEasVTJS4fJ8RtDd3uYzfrB",
  "key12": "2gv5nTBpq4CcYQtXfCJxBG6zydTcnnXP276LeBbskbvWz3KVcfJGEuFGUNBe9ijApxdjtr9R2TKJm771jVVvgPfD",
  "key13": "zwoq1XHMvKhhnBnqe2A4pT8R96ji4aCkwPjLr4ydWN6Sh9VHmjE9YjkPwR9U7XdrX5bGSTa8tS5pQbtHKCcCDD7",
  "key14": "3ZDXqQLbogebiFMM6uouNT8M3ZRobDPzpCZC4EnfCNiht5iA5vKKTqtZZBC7NxFBRm8Ed51MkAgwpyThoAkTEPuE",
  "key15": "5B2fxFSzJABuNoyRejGJF66eRmRFrtRFWq52BRRFymjXKpVa3AggQqu4KstfQVB6nWtEXTWFNWnA5C9CbzAxgz6W",
  "key16": "XLRxwpQ6c6XLPgzt2jzm7rQsyQj3iyeq43sv37tf5iHa4qPjVxqR3mamWhqbYNmmjCFccbq8mVDqtUevHJbcECM",
  "key17": "2V8ajH5wfPUSdxMkEF6cYRDaoCTGjGxqVzAkTEUhJbdiNk1QgD6KXnb9BJ61N4gfnWGiGnW8BHTnu5RqvuTHUA3y",
  "key18": "fqS5a14LEuVN9j2KnLuupyUQtoyFDbeQMk5zVUC3i2adkpDovGxsZxESqf9Q18L6dbodJEzySAgVKCJKqvDbozR",
  "key19": "xRwEtF7q9q7y8NCnMRtw7dWdMrPfFNQ3XgU9qq1CHjkptVVf3SiBQvGzsgWyn2bnsRn3T1hAHukbwfvRaevgQWp",
  "key20": "4cv9RKNpdtTvvnBskBnBBPJt3vAAGL3QAXtTdVfbfaw5tiM3brsyrsLERPrw2KF8SmrAfXuNCzuELiqrU25n3UvC",
  "key21": "4ucEMHW6nkrxSTKpyb638DtDkTvD94kbCZuZ64r1gWJoKtzfXDUWkBzUdJAwNyvvzCxZhcGoVGWcaYocTNoUd4uK",
  "key22": "5vDcJumxA8epKE4yadaqdEshtX42y4oLRFot8qZsmw9WHg47LJ3s5ReGFnQhUppYBzBREZF2Res6oJG36qJtjS68",
  "key23": "kdNF9QzML44MH2151tCjUHTco43ev3rtKK78K7PEnaLnC5aGMzcasnYcuXGStgaLZGTMgk7koqyqsZJJmyPiBGz",
  "key24": "bTqgVZqhkTyE2pzCKamoHDAaahrihXqXhKMissrdZbdDxjjmrDy8CGwfVKCa82L7NzCpErT7djFsrbDxjdVFncP",
  "key25": "3s1piEvcJWXLdpWwBRNrJ2PBkh3iDVpWxsP6J8gLpwtFdsFBU9QeZzD6NtKvHmbSRysXSEfU5hAD6eUckYaCvRgt",
  "key26": "3gKtQJZJ1Ed6mZUKNJnAb7zWc9rLwanbBZapA5jspdE8gXz46bbVDykRGWwmNJGuCEqMKpiEYr7zqhFeLtXN8bGw",
  "key27": "42cq5sKuHQ3t3qMmgssad2vecTvdv9Gfj3t1ZdRUZfb6JZpoDEHz42s5nZSyMzhkv9EzQ9iU2dGbhtTWJ8YoXgGN"
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
