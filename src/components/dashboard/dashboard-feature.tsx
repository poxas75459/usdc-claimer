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
    "4eSXmyYqsfaetSPKA1C2ogDGbYMyeCkeu8kGf7rGLRLa8ridCJMZzrw8VvziJbMosV2zVvkAPeEoiqDQhiQqByN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PrvsdjYsQHEF3e8s15cmLaY2Fn4Dwkhvk5aucArecDaXTEjSko6Ki5SFk9dNusQEaJAUtJ6yEYbeSvLyx2nRvfW",
  "key1": "65D28Ym3qXAxko9EPZZ9BmCzPau4wZeA65ApfhPqWqLEUCUhcZXNx9thpv5wenkVmZpEVxWhfz2EhojzDZvjkFaz",
  "key2": "2XUpm16hExGTpq7oXxdvXFZN3shWXZun6ndsrLRm1pdSXcz4RHNDWTQMKZa2K3L35XFm9wxbn2t6ZEJvAmvjwzQx",
  "key3": "3py9CTzgTLmjZjhr6MxJ4tKyuyUxRqyCk5ykVKKAzaHy9kpFsin2fdncW6HcZJH5QWdN36xpbNijMpKjCjoNDgES",
  "key4": "43j4Adq7rc34WjoexQ2X9JhrXGiJFMfi1w2f6A8HkcxPgkxBpzV7KstrtUu69D1g6pqFZcBVnX4Kfo6AfBmVvR9P",
  "key5": "CmH5Jmw3dmuZiiQWLTCjrpCYzMz5rnS2q8Ld4QwwpEDXSbmaV3jtZMweKcACrVAMbhZg9jjFoLDMgB8uN2CCggu",
  "key6": "5cvjMvefcznBfikkZXssDzZwUhbREpHfKcmd3QV6Nnhkf4NCm8ThvLZJZvn7L5t5KqD4kuK2YhS89WjHduo3TsB5",
  "key7": "4JTZwVnjbb3QSN3siGnirWpwWa42x2gxmWzen1PjkRmgGdCqRHG6xnR4j9wGFkCfLyq5CcncBVoMKiHwv9bzb7gK",
  "key8": "58jVB59xpMWgcvcuFv21ZQFd8McmhniXhYrJrHu9zx2n6H9VSMEq1u8nduADWyS7BsCL3HYkWeXHjvKpW8ZgSadt",
  "key9": "5PGXxT8T2afECcs5AsyGmDtZXi4fmKfFFdJwj7Q6LFo5WwNbp1f9MsCztQjKvmKh6oubWnPrEhEdNXj7xdwYPGMW",
  "key10": "2bxNcHqmt3XdKP4u2df2rYZHrENz38AXZq8dRU7NVzuSAnQgLahVnFMyeUZVTswk3D6WA2U89tkzV1uqmT9XMMPs",
  "key11": "4mDFCnarFbzfCkp3FgNYHBpAwnyg2soVyMvQeRjBJx9e7nYK6pZePt7rNJifucqbhrTKfzww9cB5RGzVT5vLc8di",
  "key12": "5Widfw3u5VX5UB2e5DyJtCfwhN1MRLBt87JA4nHQv3aJ378koykE3xNGMRfB8yL7QKZ7rpEpZKWn55SV6B6jQMic",
  "key13": "e2ZMCJMnVJ3J9pmxHugAFEVPQ7ksTKLvpeE8RJZg9YbhHWKLgdvuPJkuMPB4PQSeK1Wd2CpEbYMmabDA4jpzxv9",
  "key14": "21fjnfr5Hqa7e3w9Yf6aNMgKLwXXFJZS93R1gK2xvN57q5CtftdKov8nriTCYfwZeTZMJQ29hCz9E57HjFfzrfnJ",
  "key15": "4z9p7BBP2NGzMPX51Xs61JqP9xz4kh3fjHN8FzJwKpU1yu5RF85hEuibMZmNWf1GEbyUsJNra1b27PcGPtfChgfm",
  "key16": "4ZWDknb5wp6H7sXPSR3qVbEg4f5eGytvGZaRxf4gcRzftmp1o6dGEihJi7mLL3oyDmG4tBhDSDNEm26jyZJWxfEG",
  "key17": "CN72VfbGhH9Fa7ULsWAWQHSt2MRZ66fCr6XvNt9CgYZJVWe1h7Ue5YYs1aMXd48K1b49F6goVjJWjtvRXFapGGh",
  "key18": "2pqaxxM4jLQ25KFTYbiQWdR6Hcbjh5PAPa1WxxWzGEL2bJK1ESya76RrBQMEd8zfTkvtC2L2tupZhAWdTV69FwuN",
  "key19": "5XbTA4a5uiVKSis2S5TZLVhDGNbu2Boex1bE3DzS8hzKycYB5P6ZiQYNtW85DHWGmMvjeheRwsm1uz2iii4sp8Q8",
  "key20": "5wC5YazqwUxeuyzwiwFpg8CjrBr6vcqqbXdxi4UG9vHJWRX7ikrHTpUnLVjeFk6EN2m8nrwjSvmpuXXGNRdxNdAX",
  "key21": "3QGGSQG9zeyJ9tRQV14k6uHh17UeaKSHAJWrPhXgGfgxsQcEqGMyacD3znZM8kBPFfFaH6m32FnA4QEoL6DUpRXS",
  "key22": "4xVYvXXN2pxQtuiTSFXPUiNu5LAfy9HnQDjbYW1KK6o7vt7sSPjBTNsWeVzqr3r4YGB5tAeeXmHpDGn6n6UobCcX",
  "key23": "2yrzC2LSFKEn1rT1qd1E3W2Wbg33RLRj7HHpjhHaBG17pKFE2Mr8SzujQQyyzj6D1wTw5tig1u5mXYVbiciVE3oG",
  "key24": "22Xk7hQc4diXjLpNJiXHjKAiA1AeekBe9QxQV5tLQwGNQ2YBys3bT63HfEgkUhxPLj3noufQ23BunPvNWTDWhoez",
  "key25": "4FL1UpCjwtKpM6idekHZCUjVLq4A4VtZ1rMv2evU66gEm8Mrg64cD82c5WVnJQXVA7CFDeKH1hNdJ6wi4QE9PmwU",
  "key26": "qwEUZPwq5xqJf9ZGzGqkGojE39yiB7FeRLsA8qmVt4NongvrsiemYgBhfzwgXigq4TqAqUt5BaYrCfbtNuFHecg",
  "key27": "dFDodjkyhXFRxs4bdqAf3SnxCj1fWu19p3nNEGV6nBagMSGTCnEjRq1pwQdXpxoVmpAjM7PrTuPtFsH8ePFaxw3",
  "key28": "2Ze6dwuSAt4XySSUajTsJ1ttziVEHdG3u8HvDkdxc65U9RVHigiALCxoEQgRLmeywEYZsn7YsYcQz3ziAtPEuNQB",
  "key29": "4QFae6AngE1DbEycT9n3zKVHfDKx51EW3d8kgf8uKE6Rq7aE7agktab7r7CenM8QcGqHm5WbDrB6YRMR1wMFjuH3"
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
