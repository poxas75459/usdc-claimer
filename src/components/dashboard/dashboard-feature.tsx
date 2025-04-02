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
    "5JrTNKkx7MzbZf62oH34QaqT9kHf6Z1Reh3upkcUUumvov2aSNN51YSoUKzA1YX3QYD51WxjpmSmbUHb5iG73K7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "411SSEfv2xpUxepkdBjTFEFn6k5g3uiq2JjaSv9wQ2ardVF21gPkaayYyTU3bFJwHySxcMdmY2bWnRXBgNoRccTi",
  "key1": "BqQqUMRU4qJ4EiPkus81zQW881Hr1HSV87RkiaxdFeo5HN929Rs7e4Rk1WDoJ7TJDt55jjpz8V2tu9P6gPBnDxf",
  "key2": "4YQsKaK8FCkWvCLPSdqj8RzzLutCH8B2mRgY6od21KFSjMeQEJHX88AcSF67VPBEztuVsBu5U7SvSUeFDDnP6sVC",
  "key3": "CxvEJCDQtj8o2F1bWSPQ49epXmeQ41Xy7HcBANer8Q7rp69kGaM3MvZ9L6qpAZnbJhX74YbdFqbKpEy6VyaJKei",
  "key4": "36FczX4HQw7Tk93AJvDN6oveMwcRYTxoWzjsmNKZHt4pm34a4DKCMUoKe5Mtq4Z4M6bQAos5HUNyasFrXETM6mrd",
  "key5": "4NR6aSfLg6qz3Z4HKvd2wYUh3WgcbVds738Qj72rcLsFcR7CdQScZ7a733YPcU8i1xXPGZDHGpyaLUU3S88fAhJL",
  "key6": "4Fdy6S3WSULwSf1Ex8LP8thzu3bpBrYWhq4C7hwXNdfmxS5QHcQaoatuHn8TAL9jj1eHoP26wDJA1M9p5meQxDXD",
  "key7": "RQKHSAnVtJ4SB4tF8V55LnNzeypdPsSqBQZhLmLWtUzC3QXYU7BUzhST9XnPHfAv4xj9s3GhhLiQq9pLy5qNoTr",
  "key8": "3sXdFaNtPin3m7dCP1RRwbhXUPwacixUqqbxz4KwuoW4FK8tVg2zoQh5V7qXZbtHNGT7qyhAZ4iXz4Np3AKjPPVt",
  "key9": "2NFvyWVLJhpAaMddFqsWZCEgr488Ufvx8WUWkcg5gdF2KXvudqXYWZURAbxjEfgr3mpsBuukJRA4DdtEvoUAjfQR",
  "key10": "326yezpg4MPf1jJBWSMtTVHe2GsGj1RwbPuX99NgshyUC1QkZs6NkPnafNWyAAE7jRgfu8j7C14HQRPjwnp1Hfgs",
  "key11": "5QhkJwrQzzdv76W38jLYAjm9Y8TBPd9DwmztAKkPRh4CH6s6qhN1htqaS1rKXtkLeX4BQz9Y9Xt32eBvzGd2tFC4",
  "key12": "Pt9QqVZwwFpiiWrv67go74BQfZubWWjpYKjat6RWedN4NBeQ5pTd169MnKm6KRiL6bGSFPSQKyADMM7SB4gWC29",
  "key13": "5MXHxzkMhP9j9sjuez1GNsKJL6Qm7EwyPz8eFL7aJWtDfjE7hV1hNYGB1m5p73enaSivK96akgNCvL7hskebqk2i",
  "key14": "3AAMxKxJgHh8GxKny4hJjBVLqcZMXuZHMjvXFJ7gfBgtEXhygtpv2NGWNeutBjy2THTztkiinHhxj8YPH7NgdZjP",
  "key15": "4Cw1CicDgq2vZ4hmQqEiedLY6RzhP8QTJZdTikGqonJK8PLdZVFfwfXoijqtJLcL2qc6xRfpin4KTnoogqFBbHsx",
  "key16": "2vZ6RYpxyUBuPQ72ABx4rE6SipXHUXBmAKQWts8yYzz8dMRGjnRnY3HZSMB6nvQSbHEwp5D7JRVPE2dBdG2Umm7L",
  "key17": "3h8ugD8rgNjBT91ujs7kZyaSZETSTPhrSpCzbZ3v7r767KjyRkxndgVGLRisThesyaiDWV8ah4sUPdDhMnBYagqD",
  "key18": "4EWovRqviXaoKmbiFTPGAVLvApBFf37HUC8n61nuq3h6nXBLMuaW3J9wUnX9dw6em5XRtgtQkM5bJu7BXRxepyQv",
  "key19": "39GYCTbTHVLYDHH6PJTo5WxLgrfBrLMw2mEs53QpXQ4DwZhm5yYcFNrVuUwgNv6tCz8hE8hkt9fMTGqHGfZkyx1d",
  "key20": "66ZLiZwVtiQQ6F8TukKktFn9wtQozx8tENsYNGrgkPgL3VwTt4qLfFctHq5WbQY1n4SwrYHxnZNk17EgvZaGVjTr",
  "key21": "4nYUwFdjAGA9EB7JFEyJ8zCoRLu2YKgEjsHdp9GTCr6AQnDC6AWGUd7xSUoyKY9ze4LNUod8p4ZQiw6KaNnAHqEt",
  "key22": "4ya8PXPTLpFBBMyEc7N1dmnGn4vq6Z9PGggfzMuyk7vwkhah5FbXpsRJSmwWKCcX8mMdjtkUYZxGmuH2GnAUmiCg",
  "key23": "56WkdGw86qhaMCxAYASn4RyFMgj9d7qtpbbb3dLLuavTEdiGoeUEt1UMaNyTJdtwVV5p7cD57fYYTfeSGeWZDxsX",
  "key24": "5bK2CBpy88dHuXVLysbGLaBixPpP3WqBcD28zzmjj6Y9rziXDuuffb2bknkECr656BJPswqcuHBaUACVsprHaN9A",
  "key25": "5iAFT3Avh8DTQY1wxXJ9J22TfRPAcKgrKD646CASP9CHtSJArKLw4no1ER1aSQfpYtFE425crUKdbNijmgj9c9wu",
  "key26": "3oZyENizBPZfYgssTEA5m9t6YQgyYcUcTQeFiFnQggzHajDK1jfSFspgxK4pWkr7TCnuiBsLrmXsYswG5E8tq8zr",
  "key27": "S9o51QorMZu5QBRzrzM9MNDPQ8fAqRumjA8UbXcArsPbpF4bvB2DppNxAdyWztRpeRv365mrKaTc2kDpeGgUw5s",
  "key28": "3oAJWAX6YtsYpW5dPgSEsp1YEj6AZUr8cJeGbnkWtDRLGAxNnk4B9KvbUAq63n9cWMYUDqJJrVKwDCojxeM18pEr",
  "key29": "1MXwDmErRE5Ez8BFLRMpVx2BczdBnX24wduvBa6i211tAK2QgnfZCDSbCC25VYnkZNWwtqLhrZPdh44tsy5KMJr",
  "key30": "1CUcGjjNJAFm3AfnRuqETBS7sB7YBeFA3mtFVY3ufHaRm7KxD6fEra97wDuZeXo2X1vqR9aH1bDAxPJGznNy3Ya",
  "key31": "5rWAKksrgXg1nZeyREuji9nbEKXhwx9b8TdH1jQd7diEJ1Gzehk3Dop8cGUJSkQVY5h8z84AibVpQSJcUui3wmvy"
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
