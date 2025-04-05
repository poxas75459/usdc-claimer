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
    "3KMpz23Kz7JFEZFwARVHECK887NGeuVATuSHy4cFnrqjTKGzmK8H2mpFbrbvwfYdskpNsM6bjwkJSjdm6zAxwdRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5knnfQMvf9BwsA9BArDwXKvjfwtnYSAqVPwiaboUDpJJCFxrFJ1AuqVV9fxTTs6CVU1gza44jy3GnRwGay2BZ1",
  "key1": "2FnX5TUapCcczNvr9XEdtfWXijYMNAkrg2eNpMViChz4XJYHuGj9sQrPD73FHdmHGPpGo6NgPeyDJrzZQRUohvt9",
  "key2": "5Sf3hHB4APtg9KYibrzi8g4jXMGwtxEAgHZjLP6DPbCUYcmwViHoyhVfV26TWAFiaW9YAE1dsBaidq6VQrzRR9cC",
  "key3": "23BCr16PgbPX1fjGRbTQ4auuQZ7iMdvPiyPcXbbrNhrLkjden9VewB3L4ffH9zHthNaGtzJtZ1piSaGpr75CvzZv",
  "key4": "37fvmNpSfwGWD1hBbSzydvaLjQWKaH26pVK5X26pWZat5fPYRMdJsn56VdY5RJwbcXLrq97VrpC3WZabbdTzy3n",
  "key5": "37ktMLDBwidU828Fv4fyTQyjcSpyoxeo6ngnGyjsFppzUgwEsx8nkuyJQe8PGrAiBVchhXci1fmaLDCbdjUfcrCG",
  "key6": "2UmsYwyb5Bo6qypCZDxV5siheZeUBQsDVyvyQ3REYQLNBKUYRtuKQZLZvSTAQdzcBBJvXUsHDaBuF1UsPTtDdpjR",
  "key7": "4nDSb7K6kRdhbzsWgkHkp21iPMz2pyasrQc7Q4Vs51R4NA5Qi27PDTMRjuSvojg4wULWizqSySbNbaNmPGRUNLue",
  "key8": "46T6gZnF5Ru7ZmcVcnxqHJedu95BKkPnYKepKth2YHAFaABCBduceRWd2DNeRqGphQJ2LTy5ZoimP17Q9bzzqzhq",
  "key9": "3exXDMVLjEighTbPt75qUhGgMThRyE2obXFNmg4gJ9i38Vkop5pFPKYQYseSBE4RLSffs3oo3nVSdZtgqB89B5nw",
  "key10": "4iwvvs3qEFUxParhLSvT7DFv6tBCd3ukybbXWRom4T8WZZCLic5oH1Ssf6yZckeY4Ey7xy2uBxYDgptF1TXs6tPH",
  "key11": "4viLjJkyFsmhXRqm36CL3VdxpLEQp9HQC3cL9wnnEAeC7Hk2GwSYyNUUh1yGdLp3nVca5j7GwCyRoBUgoGLyRWg8",
  "key12": "2dTfN7kxEjQzHPqq8zxoCzFUEuwLmRUC7H3B8LQvVzL2gXJZGx5e5G38REcv7dinfHzvDC4TYBLRHZxzfE6F8hbE",
  "key13": "5qn1b9rbMyMb1soL9U8BrZUyy7aQeWRS5yKGiAx1HnEQdbSnackHSGrJLkyUstTpiUjQER41oDTd1AUTnpBxcuHB",
  "key14": "5RAi2f5uwTf8ag7r7s2EtjvceFnBsLsz9ngohz6kpfsPrAyqjzvDUZMPvvXo78o1ZyyyeNb258VFFJJXoieeEeZp",
  "key15": "zZ4ih1WV7fcCZVqtbwYNPjPPNJyLJz7jtBozGqWtpZ1mhn4rWxECuotGc4xHYJooehpKun22ZeacfbEbETNDu3k",
  "key16": "4pc6fcG7yXS51hCEYi2pkAGvojuDptYCpeS5jkKHQrFQ3bMs4MkW4ji46kCzciAMkD5QMg9VRbGkzsmyQjQqBabi",
  "key17": "38Ess5V2qTktChVXajqj3GMKfStMMiZ24hMJd2sSVh5huZjfWvZnGxm8KuQAzRTzMJGbwjxFXavKQNxtthFR9XTb",
  "key18": "3KqWZgZqwdb2SmVRJk1iZ1mim1UUXMRHc9KCEzvkWPsiLoqfeB2cBd9F4jFXCMVkRvdVEG7c3ZDpgw4TfXU74RDB",
  "key19": "3KM7FDtw264R7qkNJedNqivtXGWJNNy9Ax41j2bMp83tp58oAgquP9P1aHh8PSYQza1ed8xG5i1Q5f78Sg3Bhpe5",
  "key20": "5vsgNres1mXsfoUCg1pqqNeDxvA93hQ2BoBWJAA6x3MCjiYxLLHuAUKXLUGj1eqnjMoY1K5UAH83yEBCZJjRYHXn",
  "key21": "2Br7A139mZsHFcXyj1xEN98WkWDQzjzATnRBQzn35kRp79bpsBr5tXyS3gAe3ZSrBRQk6wAQq8h77Bpsj9p9aCpT",
  "key22": "4CGuVWQZDvTjfsFhnfznFmnJAUZy9DuqJH4xbPbnoTGy3EpFr2ZeSVGFawGzkUn5YCQm7cjW9Ffhms5rqtrm3cUS",
  "key23": "5xnxbb3CND4FaAdtar4YRujs1ikumUT4d9k4SP6YYoDg7a3wsbp16bGSejaHFwVZWAimJEM8CdWGQvustfQrWfUJ",
  "key24": "28yKYRJXSGEJmSjU6TmWdYvDa4HFzbYgEuzaa8mMM3EdJtYC15bDEGUXTk486KyP293RyoRDyBFCg1xQCnZ848EG",
  "key25": "5ggXhLC6aToGn5ZcT9Wnr45hfV2cQUEtc8dFrBZs8mXHCVBPPT4fc9SmLvSKVEHJ5cdzmKs8cs3daTT8cc26rN8i",
  "key26": "3LAmjfbCe8SrfLVJvq5vHfV6eNye9cARdT1nGi1QSXfbnV9khjhCRVdwpeAhv5igAYgoRbctDEAMCXxa8sKq3qBt",
  "key27": "3SykarBrgTWfnvoTS4LbBj1HpovPcuhtLgRwXwD317X47M4qKvyHHpgLQ4CgpbEnTVZKUhJJRsyRhfw1dU8r7FLs",
  "key28": "5D8ppjTtZ34smkhtzMLKCLAvkLsf88gXSma1hNwX6tMPvzsmKbH8YPie54yHKjpx6xdQ2Yq3fS1n6kgrJF6pvi85",
  "key29": "57kNvEsiq3uJxk7RTB34w8Gp6oDfWKwijNGtq9JN2jf6Rbp3P7u1snCnsJCUYDNpmHWKRQytfVB7gykuiCJV98KV",
  "key30": "2CP9gSqFNq977xRzy2CMmjynPwUhUvbLrYAp251ydqfjcyWg5ZQrqFt6sARwmZoycrRNjWXErr7dCav7ynwCWmfu",
  "key31": "zrC1whV2rsGAKhJ5qcE8Nu7mvJs6LZiW29ekDfwRuL5VebGF492AVYnBHjG7VK8eFwAbuGJyFC38FpudcS5qLvm",
  "key32": "yvFYRewSEBV3iFXiLGYK81gtQxfYDxrmXJuZzmNKwu2YNjqEGCYcoitVPhREtdF6473vw1Uo2GEniHh4T4QZWWn"
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
