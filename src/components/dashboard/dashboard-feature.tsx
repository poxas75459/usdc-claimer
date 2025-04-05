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
    "3RF9JC2w7zMgc4hy2mJwHdfUWr2Mz1FWFMES3Ti2HFEooZ9K8xtuHwK8HUFYH5SEanAoRpBcNSRgrF5dKFnogtZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZksC7S6suE8csmzcB3xgtdnjnGy7pVn8PibbTf6VcVP5vwcYPzPrPHu9LpbSbawkv1uWdawSk8tBazmba4FJS5",
  "key1": "23N9gLzXVf8C4Uj737yZWfk2ofvCLnRAxr6XAVctgTqn2ZqDZ6aAxrQeDE6M5ohTRjHXM3TRLYABVqmwQjzxqrya",
  "key2": "2r1BR6kq65zF9NH9oKrkgxnJk1J4tZaDPwVQXu61nmbALNAtqnRAzszTGKm6gWPt25EHrQtUrCS2aZNa26K32uwG",
  "key3": "4vyPufrg6SRhrAMZX5qf6tHUX6vhDx6oyTQwkfYGms4SyWTyEpHPwNf1NCKB36ayjhqqcWYF1dtmJjoYb1cjaBMo",
  "key4": "2eZFGX7ob5Qga44CqoYvEUqA8PeZLZHCTaRwg9mKvG74354aJpSiz6Mb7z3wUQ62vyaBTGgAv5TNd4H5KAqLf5iQ",
  "key5": "2Fw4MSebBoLncHLmryrnsFazd53XRMi7qNxeFgfmwjVKXnVKEGMCB1mmtxjUFqNFbh1JS9MV4MefMWyKttepP9u6",
  "key6": "594LsCceAfnQ4Ezjh4KJss7CYbcnR5xfGgjpGWpNUK44FqYHfH8HN2smjM68TzmWbKDH9VeGJCdVVWqTgiVJQatU",
  "key7": "4uBV1pv5gB8aXu6whBN7HDEEsWG2Zdi4CFVVjwmU8mbLRiVGh5qTdghaZenKYq99c4PX81E2m6i7TiniMqfAeqv8",
  "key8": "27SryXfentou4FtBmsBZoQoG8sXwmcp9TDdGKfpUJE5Rd48xpKvsHS1C2XbBQm3TgHpZNCoUfH8MYjogHytirXsD",
  "key9": "4EnUHHxJMoyGZVK5vLSHXBJ4eWTvgRBAsWpuhYVhLFCjZnUocN6CsLsBx7SP8uUAMo1oJUTUt4skcZ8Pj6UNqnn2",
  "key10": "Kfc1pR2EhfvnweqdzfuEMC7CNUSsXrnUbkc31GH7eTnG4hczguZQjfunPNBgiD4dFG7rLKXyGyJLa9gq2x3n8tp",
  "key11": "4GHWvYeYpAeTqizaQuuUM8b1XFAWwPsemypX9MnmdTr3cjFUtX6uX5MurVoh9T4QkNW6GgTLW87KxgAcfCYGTv1Q",
  "key12": "4sftrYGLBd8uFLbQbFtNUvAFwiVvkrHHMDwksJwfwuGsZiCaQ26rfoEYf3EZJb2XpUssbF1rYJHWJ4GhcmwtkTje",
  "key13": "22XZ46EmWGVHEnbKAuV63G4KBGtLa7TpzQfEzGY9rxVPirvysqV7HANSz6i3VWmwDuFddSUAZDC8KXioFDBfHNM2",
  "key14": "3zupgEvamaSKgu7HwaNjiRXFpiZxmfe1x2vALYQX8zuzCmAgLYLALMDSS1Rfd443SxyVg44jyDzsR4pQ8vyaE33Z",
  "key15": "2dXojEXC4g6tvQJdkq8xsapMZMEFGsEHkkfUur2Q24VFia8Z8B1r5kiecPe4wY52K8ftpEJPUkUBdBdo1KMtKX5d",
  "key16": "3156XhyJC5CGph4S8oApsUr5G9rPK4h1crqWRbkktRFB4XoUY1byqvSi6oxkcLWQz2Y1tHFWYy8HDsYD2EWPQXof",
  "key17": "5PD6mV9SLaSW9NbT31mDje1m3w8DEmF4wxMKPmM2RSAgBkqP28wYfCnsQkLNJdzLM8zj8XTKAeFFEt3G3VZVH75f",
  "key18": "DQoT4FGELGQ8HjAhAMB6LT7ZozQHqboeaLGq6oVyiTRXmAMVVRmHvZTft2vyRXm5XKhdjHaf8e6eBWXV11aoGbA",
  "key19": "4D7EEhMSz2oag4EewUmyyXPjdE5z2kCCbuyRW3LVAjnMMpTdsQHd35p3TXYtJdRoTnbPuM1wYhqHYyW9RhGFhZXg",
  "key20": "4jTRSJ49oK9bJKEtCxCRm6rsX7N1pnXFbM9jNZnsatMFrM5D6k4NnDqzxaNJFkujgUXkaJr5PxYUd5vUEz4kkf5h",
  "key21": "4SLnbSS7mbuuZL3aYzBiojRuF39WwozKQFRjVvhg5DfZM8r1aBm9t5usJdkoeXpiMu7UjY493tCnm6TAh2SiVNAn",
  "key22": "3q6PsZxML7hj3r8sTCxqfD53iLxD3zWv29En3mqmxpkM888TzyAV5gkgEdwSRn7mFMmX6Q3skodz4wow6phmrscr",
  "key23": "oL6kS8WrkfGzYSWNQuc4qu5Znphp6nrMtXJHTucmba1W4gA1LygPp4u3rZqtz1aFxioJ3PKB1t3kecGJeZSsDkm",
  "key24": "2ZycEWGfMLTSQu4YMhCr7P2bhSzhAE4c2Y7KtgzduWEG8sUsTAzSK5DYQMW7Gk9iZYpY5YGAPZJVbu8JECb4zdMJ",
  "key25": "3iDRq2NGyydQgig8XHwKZ2RaS3Zqf8fFHzj1kK1c5i2j4xdmR8JmiDF4MV98X8xN98jRkctTwi8PrcR1PE7fAeQ7",
  "key26": "5yJ7JanRAbNLBNnkbf8GW4DMkfxBTcAEwXtZ6VjLQSBbk8pKzfZn4v5ZXMCSAZcqXdjUY4udK28X4PmfmwD4y62m",
  "key27": "3tJUpLNR9R8p52aYx7ihcTweFdkzmdUxmrumms4svymFkZUujKYzWmn5meAiidc3tS9ErXrz6b6casZdqaKTfB8i",
  "key28": "3hx9DKJpkVwJsfrHSMJnEBYhKYbbq79Yiv9dNEPq3qKL6yzKjb9Wr7mbXWa3x5k1mZzsctbPtm81QBjXHyV9vL5W",
  "key29": "31VCs6mYe4Gm2FwcAumgjDREw6xzrR73FjGEessX5695skAeraxMxr2JgTpHMTMrJieE81xzVozb7gZQo2DtiST4",
  "key30": "YwTBsrq7yooqFc5QY1rW6H5gCmxDiN3WhoZaQqGmehC1DkE3UBUfMrmX2z7yXbmFmiQvWFPkz17vJmkDGgqgYoo"
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
