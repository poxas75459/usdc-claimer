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
    "3sc27ySLWS6rZZwQ5QEg3RzpKqkbvWjj1T4R2DU8CSS2gvAMTpC1ckbaRDKLcLQPfQgzEXmPLWxMw2xVJ8jHL8v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GUdNuJ3JpeYia76pFxsfmEepytb64VwwcZMDFxN4XneHSQdQpQUULBNmFVNQ9nhZcBHUDtH92DUmVaTa535CFY",
  "key1": "VxrHgXaK6k69JzD4bAdBStfxyS9WzaXvLub23m9XJ2Dovz9LiUqtT8qGVYdVq8ktYwDfD7hctjmkTUUSn6ndtNW",
  "key2": "2Wv46UggjCJ6GqKrcFDC22pqQ2H6EMEBTFid3W2xxVXrbvKZb1MRMJ2yzbvse6wSbWzevaLHKzmqyTCvecpqYUTz",
  "key3": "S9EZ7vWP4UZ9DrjRTjz6untiZGeFMDnPVVnhyom5Pgto4ZJ5heEQfNw9HKarksRspNhAu2hhYvpLWLj7CsAgHCd",
  "key4": "5RUR9vAaUqudRSAgkwb7247fNX3ocNCN3BsHbpwBgVirKWEJJRjLETaEX3Rj7MMjDtvYeKZ76KFGiZtPeXXb1P7D",
  "key5": "2uTLAafC4fMphQ3ao29bcQwzpUFUFXdLPn4WVEdncoz3KmYFoxXW9ijYkssx6yjVSmjUp4QjKAm6efcBoUPwB4tw",
  "key6": "5BA3M95iBQyzjhfdBwFVtz57ks5TpCSsB9or1mRXRFzkGDZVw9Ff1E5pW272kCAtKXieX2gw2qtWa7mwP7wHQAYj",
  "key7": "5ZyxCtRaVKngCWiWyAgPE1hd2gj3k2t31mFgFfAzxPhPgUhBai2oF2KgSTxVbh3uT9fNWhgQf6MjHdXuUfKP7Cjd",
  "key8": "4r9bDFKLePz9XxPv86SB9LGhZYYQmFPLK3RZbRzNCvkqLLrBn88aehxewbiCdaiUamXDkTKsHgA76AdghLXJnZbx",
  "key9": "4DEAS1cDjXvbqzUpEdJmNayKi97ix6qaU3U2rY4zjduggWicwJrifYRQKnwCAyznAVXAmEZX34Ets6bJsUkNTiPk",
  "key10": "VsLEsjxes9A1wGW5SUy1XCfAxgtD6yYR8qsFf62bn2axDzWirVbSkVrqbczRGhURANuRY9KF58sMjSTcKXUHVFv",
  "key11": "3zuuQ12a5WdBEdiXJun5Ex3AgLWAejtpBddcnquNyvV6LrTu4vAHnpJPRK8UWp3KmvcumHjBZJaDyUKtSBv7Ckfz",
  "key12": "EoKDy4KAZiZjavwYhU7KpNvs3MyyddLjJV8gEZuWyi6368HhAfJdD1aynByVb7cGH4yRYVw8aPLGDh26SKo6r3U",
  "key13": "5KHGpqUgFqvvDCM8qXiEwVc86uPSA3gMLWSqzSDjmpQLh57fadsczXX5h5YpdH45NKmF9B9AP24rVr1kWM62kA1",
  "key14": "22nqPymu4Uy2ZEbzHW5pGouN9yMMP9vat2dLRkhctzojTtpbrQVL56RCzJYzcMtehWsqp5UeB3pHqrKidQmdF1aj",
  "key15": "3PyHJ66sfEVcvx4FqPXXGkJvApjMT7gtBVX1aqB7TjsqZ6b4KUo6QZHhdzL5mZfdosBGgp75fZbTDZJGE4RxsQV8",
  "key16": "4t9Ves2jo2JFN3hyi5bfA4zouVovbo8jvbbpGzLnPq8S9CS8Aat4xLunTDw5vnsUWrL8DM5o27g1RLg9cc9o71rs",
  "key17": "5QBEfT9Cm7W8tMyezVr5gF1pZc4XiUE3g5mvVppugr6fYszk82b9AbnSmdCaPLXA6BFdzRaEKkvrpgvZQFVBWhUA",
  "key18": "4vJX8WuvaMABxNg32XtYukbUrp4tyxnrRCLcp5RwuLSg5MuLv4Jcuvyg7eWQQ6gww3YyyWP2GgzmvqbzRvMh8dF2",
  "key19": "5wxCrqJVC64mwURYiGEHmgJuy5odgcen47WRnEbHb6cdWhu9BomR8CwPizVSjFScN7qREr9vMPaxcRFZKPHypA1h",
  "key20": "21uJ8FxqL14SBCCkiwmQriYECSkuqKt4g5Zrp7bbEykWjGe9XwRwKRhoiakL7gjdKMt7WhSzgh6jsFTRfKdMgvy9",
  "key21": "2EUQ9T8ped7ZzEerJ4rD91Mz8Qm6zvY5ziBs9KtMgkzTViQg72mDKcduUEHNbRuHL6WxNkNe6nReS6Ur2LmGdC2c",
  "key22": "5mijU4ybS3DvdoXyBn3TgocDxykZBHUN9fgAmWqEfD7uz86B9ouXzTPdsvHmw7GiKpc7aSGiTcXDZLe652HBBvDD",
  "key23": "5rVSxT1ojeoCXeDQ8hUWc8bqLWpz7kPhCHhqVBjwxZuy3Emfbb63XNNbtMgZxswuijtWDWf1xwtULeANdATaRo9q",
  "key24": "2GavAU7Fmo6jcP595xU1pNf3F6KUPGHzT3yKL4JvVhpjFWoZrBFNKgxX4qrwhJrD8gSJM4ANCfiDKejdC4qpynM1",
  "key25": "5RPKoJ2Ef5s9wkKTnUg655tDFV4yM6CV5LDG562ficb7h9PXgeTihsmJJNwYkdmmTTV3AN1SC5jvkL4MjL84ekHv",
  "key26": "2wn3NoSpTcKUgaZCFXzNFpsu1U1qEUaY3kiK5g5kgZ4n2xkQdkPhkF4XL3bdsrnsx5yqeUvQXWsKSJx5UVTfEwPp",
  "key27": "4dBzXVrTcwfTSFy5CKvSjMYcKQJjDAjAXY1g4mxm79gBwBxPnsL5JyMdMJj4mLQoFSwwaovsFL5oV4iy2SrHzm7x"
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
