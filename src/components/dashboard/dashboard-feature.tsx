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
    "2xdCX2Ms7gazBAoC9eXYKRpduXAZovQUQtW6d18fx4mUXuNggbhuUYsdexjSweiiUgqVHGY44iwNSPfbVGBmJPjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDDLAxnUbKBphcB37Lp97G9yMKWPwPegDgUEUx4NfXCwM5hNiEehXrpTYBYNsUPx17Y11dMznxHL6XoVqMY5Ux7",
  "key1": "3FDvQzmmTz4WMN1TZxaFd7XPRs2X9SUstVw66pyNXbqiWrmQBaT8csX6qeuFpNzkTzPX5aUuiLbkg2KHihV5gWSU",
  "key2": "5mgthDcVvzLERKsewxEc2NLeioC8h6SCidYBLk8AHiFEVg99cVZAuqsmoPn6tcNgfbYgTuu8oLDnesz48y8mZzfv",
  "key3": "39HgDxV1KNnfMkZpYygiP7apxakpfAis1nV9grXdTwAKuzFwrHAUbC34rAnNghoZowJrip3bPui1J5vPnLDQcpZ2",
  "key4": "3D1gEoUUo913rBw8Wjaq39gzYsaD9mbM1f3chJVH7nAL98Hm9Rj1od8BYBEMhY83yGTWzeBCyrUHjCZzgoUno9iT",
  "key5": "5y2H4ig7kJxNr9raXkLj26rhJpxG5x5KLoMQChy3wQnMLVBr43bwKTHJiqfEWEn889AJxKhwP2R8Q7Sb8zbej78J",
  "key6": "4pQt68DDbtZuVFk3XAhgwycJbJ2NNseGxyrUcHdT1rHHnwvowPa3k2ctv6VCc6zea3gfSaujkhvwrJTBERm3H44C",
  "key7": "2twdDNrpQhKLtTvchFw4XyrZ5TUYM8p1J3GdGEdWxWY7j2z7tubEWRvUFyndj6oF92CJ4XPoZgTjQ3iJNsZJwtjG",
  "key8": "5YetJqNvgtKBgMhyaDh2opnpvHqxqFXMusGKg6tSiehEQ8AH3RNcCi3wJXLq2wjCKuigVierAHCFr37FpkFqyM7y",
  "key9": "4oXbyjUc9PoetnUE9V9ANuPeU6rTGvy1BYz2aK22wCy7ZQkrmaCTEwdrdanJqHZocUeuMXJSAQrjtB39yobqD7c9",
  "key10": "3sHFHazo7Mv17e7KEMjcxRY2NPK1oUJpU4k42Nkgote4vRNrfLUU8TzYv8qQmK8j7yMZcYHZdFsBH3GRryL3T1vL",
  "key11": "4N3Z1xFhTPPq9DvwCM1bEcqw8D73q1r8iexP6z94ogUc2CNDY45CMd6yrC4RFgQyy7EyfhSsz2bpHdF1JrFTYYCk",
  "key12": "57FTDiAzZFfhoyox7iga1mYSdoCQm5DKDYjFDN5XKM1jUpzXt4aCL2qXjDzCvVi3TnoXEjT6JVtCd4MzD5FHYfm5",
  "key13": "2mSciSvM8AqP2D9qRFerP9oER2LYSFnboiKKjr6kisaGuFVdAaegCHYj6joBdZUD5g5F4YXAtob2iXL2UW4doNb4",
  "key14": "2zU6j1cHsGZ6C5PRE4ymG1xyATHvSzBJRxbzxow8eRpEmP6Snr9Ppveg2nQG1nCn3GwJReXaRvLMrsAwDQQVP6ZJ",
  "key15": "54WV7seAu2d8GaVetpGHnxi4sct6sZ8wFpa8C9oa68fYq5L7wDrpENmejskFPSbFK2DvH8tTmBnSqWG49eYiznKU",
  "key16": "2oiCCxvp6Z9J2XwPG9RncjfEfnBR43bQaKFfVsw5TVR2o2nJ3mHXDXfxZR3NBU8xKwZu1sxQQydF6cPVdnqStJis",
  "key17": "2K3jc2vHDKRwRYFU2VvNaVFPby5jXZLxquYcbWVGk7EqMe9kUHH6hFawPZj62rbUsn2kMrEUQ9YhyAwN7CBmVQUh",
  "key18": "yr386LVY7EFGdZgMUZPk2XhCcwLSnog8LuLzzoYFMqHKh9yBEcq83R3BfjxQjvdf2HzvdGmAVg6mYDdZSS5rcUe",
  "key19": "4Th67QXik9PJyd8iuaVwSWgY1DqBjxNzXgog36dAT7Tfmacfcbvv16s8nzW6sHkqK52af54Ag674ogMhLpwvZsK1",
  "key20": "JnjP37kcSnwhnh6GoQVp5fMdTSarqnB4Ay2spZ2T8PEot97hkDbk7GGvxSW8SJTiX35GqsSESc7MzFvs2qEUHdi",
  "key21": "4he4WHzCHSUUbEp6YGGp8tpV8PVBngF3fiFuotvYUsWaNnRKEp9BvfvQP2od8tS7ugdhd8T3bEKeuRZ575dT2yBR",
  "key22": "4qaHXTQhBTA9Zvjj5RTCcLUqYsitSUSTwGWRbumL6XeKejxDXVao9UvbgZdZ6MiVaXN4n4bYkaCmrnUZRYjiEqx9",
  "key23": "5znaiDiqzkBf4aLuNyCj8wJKhDr3hCodWA6GJZQv9a5E8bihB79g6Pu38yBqCciTf6EjVPUFarnDh4Scmpjuo1iX",
  "key24": "252txFSAgST4g7aT5LS91GmM9VAEk8qv1gegVrWc2h2PpWtXCMTvh1w2bjZjUqFfEJHVYk48fgsjfqJWsu69wp2T",
  "key25": "66sMhVpPsnpuZnDrfPAHRRA7tnai4SwV7dNNEowwV5wsq1cv8EBYgXzHqgQ7m2CvwCTHiBuKSej97dbVpX4hqX4U",
  "key26": "3RSnohaFLHMun74BEXMZz3CtsDYMqpGpVrA2JaLLeRUgVCZan7oeKjKVayvUq9wzc2PrYP2xuXRSU1peXoehMLDJ",
  "key27": "3mc1TnB1f4DNYHaKJkGfVx9G6gXMYPuUqxpSZX7Zdo5cf3CJcALXYJqbiVHN5J98sC53xFdPW69fJVxvqq41ceUa",
  "key28": "2QDawjRrNTjrPSFcmRZXR9FjN9pNvSdQqkgRtuxqm1QVzw72vKuEZMtGk8FJvBQesccrH5HQ8KrK4V3X1QkcP9gW"
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
