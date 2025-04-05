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
    "4zKwedRPRL58S2vWzEG1FDF2oq9NW9HJ1iSSmu866qC8EoJNk2vokNFyRMF1zm7V3AGmKgSAFXnrnFf3QHzD8bXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zj4rZRKMDUrXoWwScGJfEjEXH6yNaVGpjUC6HNhE54jfw6yasfMHM66A1yWKnMN5niLcBj4CxqiJ2JWZ5R5AKug",
  "key1": "G8jGC8abL1x5BDYmX3BGVEcmwfsP5Gxg9teGWV8TH3UNniVQjvMheTbXPk9fnfTrJ6K1sbJLCWnYxdUFUVeSFmq",
  "key2": "3YMsRnYwNiFYt9A1Ki9tm1tcJHqzR5WtVz9xh4v2wx66RMYdboU55VwTPfUqJvgptJm8HpZM51eCmLEuhAZboVg7",
  "key3": "5sqtp3WwCUnbDsCpBMm4NhUHUU7XaHm1DxHvYtecB399BcNXZ2sR96pSg12KxunhhZUd6HU726KzkoaU9WRWNv1s",
  "key4": "HRVrwxo637tbizS8EHASmGhMoFJyoNSxKxJLk1befGnSvpJN7qFyFad8j4PJNcF6ZKRgYFGQjToaMhmALwMBnqK",
  "key5": "24TQNHKBxZrzZphDAYw9k1N87kHFhaR2BavHnyPY3ojkDt89FN6gb2zXGqsnc9s6eSVCYXVWgrqDMHV1YZA9KCD4",
  "key6": "4tKNcssF6twH9jLwMr1tois8UM36qWQdC3Cbwtm4mCidcUuR3sGFCcDh5CJ9i9ThnikrSuLDJtDn7P7QJV74E2H4",
  "key7": "2tyvNdNmQ5NZdhHsroqeaCPYN2MeCX2Ms2WQV5gHAJJBPxdHu5kywSfmfXSSo1KuEc1PnwH3MxtwTNQwi9MJqcG6",
  "key8": "4zovf5fzYpnUWSCLXpZnwtE1YTCmbC8552g7CPXaQfPWXY6kTeLT1fQzTETctv6ZUs8u4LanGyQ58EHYaZ2Qj8Gz",
  "key9": "2EFaL5wKVXNYytk5pnh5E52PiUDYuFE8BBSFpAMsU8AH9UY8NbwA5aGf9bxV9BsW6HyunGhnYRQkCtFbZEmc513A",
  "key10": "2hbMmHhdP6PPNX56YYV858KWBVMDQt4jGNperSQN85Rp9WMbMawZQHuhKTu4tLSMgz4nqm7gkSMu1MMhx8vqJi1y",
  "key11": "5bM43Run9AbzPtPMPWTFcBbPw9CjPAhEc2UMNojZKNydnAdKUttQhGwCgeNWgN1EMvt4ecDgmhzgUx4E7hybN3sL",
  "key12": "2dQ8tSH39sC3PoH45sLqeACNCFchxJD2NZa54NyCWpbWM3M12Dt7nAGMhr9SykF5AEkGkwWuzLLAgGu7g31uHuMZ",
  "key13": "41vVivUnisDc3Pv14RrX7hxZ53TXnFCaMF5udTagdfMKz9ShG9n1B9cLzcySy1vXAfmNkQhGQpbj1JmE2Vnj8c4z",
  "key14": "2oCM4MtxvL4cAYehHwuwUUhLBhp5hy6xpijnU2PmeQ7yiMryqAdmG8ybhHdqw9RDbn2oq9iMPdDAK3hWFNng2QcM",
  "key15": "4nvsP3uDwwb6ie7HxFGYGSarw6XD3161sTRsAyr8UepiRYWc5pMdcUU9qUUxcef1kSjiXdZwCgCayyScWZz2aCi4",
  "key16": "5GBFmWpA7iqV2vwY1wMEZoXf6khet6MHupYwFRGFG4xncixBRMZKQE1GozfJDFVnyoz2bixDxsz5kp2n97nMheED",
  "key17": "2YXMxvQK3er8qgQEttUUWF7ZZ37maWhRGyQSaF8Ar6uikymfkp8YJ6BMcXTScssAJ1sbEX1PhJtR25kHCFDe1Bm7",
  "key18": "5HYAbtarS8s7ge2HiXZG9n7JtnVfTXnCBviSyDrwWeUFQ1W2QhZWh3W5qaoVDFQ7g51JsJ5GeFtW4mRAR1iFSeSY",
  "key19": "1AB2n4TMPGXvfb2zjjJ4qEWKn5rQsbxv9Stqet13PQ9L2wcdm55UaPbQ4n5r5qKJdiFH79VsY55ubv6BGjKkuq7",
  "key20": "4kby342a6hUGGo6uha43R8NXwZWn3UqwSiHcdZ2vYx74rfqfVUtVb1KnaivVbKKZtWtd8iTSimf4VnWhMSk6TNm4",
  "key21": "2QcksGx52P3BLqdW4EtgK3EgNwSGvgm6qBpXcAGTgjsEBjiJvxPtBLcggUogvNk7sH43PoqRswEQ2Zsay1zSJvhr",
  "key22": "48iK8rhUc1nLY95cRH8GG1H8g4uvD1iMxK97X1XJFkyqZzcBbJa1ZtQV8UpcYr7ZVx4FyGpafrRix4QeTmZMmozY",
  "key23": "LUgi2WDC3jxsYXRf9Ag3DrixkRiDqmW3V7y7j2dPt6KKHv2eCtPdnYagimqikoZVmVFiMxgDG4EMww5SywAJewV",
  "key24": "4XivHy29NsJa4F2At27azquCEvrXJgud6WNkTB8BzEXyBBSbPrbh36ZssMxkf5Xp44W4Xy5rTPPgs6PzJrGXeRC8",
  "key25": "hKvJdiJ73J5sbtd8keUEMxyTVAtzZUdF3jEaDxKoX8HB7yWhfZyrdwDj25n9hRTJyU2XHvzyYPS2Fxk9RRe8qvN",
  "key26": "T4DJJPfqPzfjCSEvvS8KjvdmCSx2bpsTWk4myiZUoV8y8faMZvVqS8STihnW5jbKLC3LF7M3SduGaoPo4uKErFh",
  "key27": "3Z9bKDvUUp2LX1AJcFrfPUo2Ca6ZYwHwnN5DfFT3ztspwFrEznbw9oNGakKrKi1HgkJFVKjCmvYzhAzbuBfDFFSY",
  "key28": "KTYrvTRMbBZkfgdH9Ch2P89vp5U7sA1JBiGoLYcZZjyRQTKxwvJZYguTbEqihopsBZe4KLGcogNwxSQvC8K8jPG",
  "key29": "64LjYvoZYVGnExhvZfkRHgXRUJNxn27fFaQ9UxB43Tdf7xtLCvpd487TuB1FnRqzaAeMkWss6D5PwJ9XwxLsq6q",
  "key30": "5x1gh9yP8QrBMAVErV2iCciorzFGgnRFBjUfXEkWZ1t4YsxB2XKXkVbwKdyHmd6UZqVZtKoHFJSoDqQLeS31DGok",
  "key31": "2yY7j6zwaTP9vV2wh9M9gHYwo4oBXChACrR3ZtZiezUhV4pZfDboBmxAHyfGiB5LkmwXsLt6476ESyqyPj78wTBH",
  "key32": "4Gu7MiPbiAGTnT4T2ZYfuAqYRf1GVYJoAeh5j2sCh3bL7q63SDr2hdFFdTfQoy1B1WGUuvynpiwrtAJ7BnojRJCY",
  "key33": "5afHLNGVtfGTx7TKibhPXs32Gp5ENAvRKv7nWLQR3MqDkBr3BCGGwoTgDqMXsRNfcZ6coeb2QvkWbLEDvamkZpv",
  "key34": "6L3kV7aygcqXRgPii5jwuqnfKYxAhqHLpPp61TrC3R3umSKNHh2kHTYMM43vfQDCCB5BwVF1Gbxwhy5kpbenyQY",
  "key35": "4qTi3wNCiLpyRRv6YFZqs3EccsqhS8fJEHhenAcT77U3AYUGvrtRXhDJYM75GdQdDa1UugumUYCdjLc6Vu8A7JHr"
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
