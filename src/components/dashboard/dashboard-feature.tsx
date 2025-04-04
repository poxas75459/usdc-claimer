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
    "52jevEkD5GAEniDboDo88zDK3V3pnz3fCCkwfNYLfT8V3GbkvveJ3FEew4wkry2upnDctf75ATYDWmwnoLVPbXer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sG9oL7AqLrDjqc5vssVjDjLHkauXWb3qh9fJq5spYgtkoQFDGnw9omTJ52NkBcP5ZBEstvaSTsa3b9tAcHSYxvZ",
  "key1": "27qUtNeBgjgjiya9LHxphtH4S4DNEDpMzGxwYhEEH2fQEMiadRSjDZXv9jKSiuZ4HBYv83VB3q5Q473kQ4EoQMVE",
  "key2": "4GwGkEXGU6vqax5av49uz8SHT312Z4ThnV5zniTUGnNmR3ML4VbqmvY5Z5rrj3vD824ad6teS1Tf4W4aUGm8Hbt7",
  "key3": "3P13hcDpKYaKpnAHrayruH3rc4LoYXGScgybAXHdhD6sxWA5vsH8nzGj9EWSEYqNYpLT88KUApB6wmDyKPTnCVV1",
  "key4": "SwS3gRAfWzohcSsCVWQnAb8bNKZDPrSD6yo7n4ePy5Chano5NUqDDfy3xvAqELn6rrGuHxwyVR9H7HSmfo1DVnb",
  "key5": "3oxBfKqsrYV4HJ4ZKGkMN69eP3ebFjwJEmbXVitVSpQqsHdncfSEJSMUJPmYPoFeR6WLsseHdJTuKTDQ82BoPhhX",
  "key6": "5gMybL9ocLF5augS6zNTj2AvAfk7moQtRTR1Vp2SLQ2YBf8C1hhtsLnGzRLgQSVbJGTHwt1Dk94wywdkKscTTqFx",
  "key7": "38TKdZH4HzHEFMMFeU2ZhNyzWAzvze1xzD7J8GMkoRskKtcUJ8iiNEVA4ufsrCwCvudEcs5yEUxT5BNu3PGuHFLs",
  "key8": "wKPY8ZV4pbcVC3NWVXb9pa1dkEEeJGXt3PrULoeP8bxFMTWdPvk7i9TAwemapMDuQfEVErgqAj1K36cLJ1gx3Xx",
  "key9": "DuVpWtLCJEzmL9ewomjnjq5zfVBLgjCc2ZRGrEzv9gaMr2pXXdpbeH2znGppC3GKfQ2ZmM9JxxRyA9zpeXi2cgS",
  "key10": "4TL8MK6pgPjM2MT8RnWop1uw5C15ZsdFxNJwnMg5FLaX5DE719u5JgXZA7Gk5vSi8MnqXAP3QWGYpGXzF3XwYhtW",
  "key11": "F2fcXdSoHNuBRpJtRw31vNvWyKECNmv12oYvznwLHWSKf8E5A9KrCk7ZXsxgjr3TpNVVD2q7KHQ5fj4cdybzPse",
  "key12": "5WLUtaWNbBU4yP4eGFxKLjAoDWavmvDmWcjauLfPMN257gmoXwQufMf2RQwCYLd3RZsWEUyWNLtEETwftisB7Svn",
  "key13": "9LFM8guuBLAmug15F6YTsW7gh96xkvLssCHYpDNSceWE2SM5d5Jn3tK6AbFyroWvC3aqnNDAgK3ndQX4KWxw27U",
  "key14": "3r3WLjpQ5b5xrnG3sadevApPajvsdaMFnKfEsakRXMuoAxoCZE1gi47PB3rFm3zjTfYFdGDqpR2GXoJf3pyVGwxf",
  "key15": "5cHUfByeHrk7XgupcXyXfAKqP92TqGsQoS55qYZzQNCZP8sPjGbNHsrSgkA71XDxzW4VQaf6uYnRUz7pG24GHXAE",
  "key16": "4nn3TRHyiCuGbLiMtJYcP5ZZfDrfHqc3g8vMivNofihtpJP8uZk67h4EcPtc762oNok6qaZ4kw1XbVCGHrCCHy9H",
  "key17": "2iqZ7yjdG69Z3WWHhbVBzrHoH6ofANG6DennKx9yYr6qMqATaxZ5pg7hhnS35EoD8VMHFUYf2pEpFo3qSTPQ5rjp",
  "key18": "2EVSJ4egaSdXeLmTBtgqpTQAAXUYVZdiFGLh2dqSfhuCgdaELh4aEoEnDxcxAHUT75FFpDt4Fvy8Kh3fC79W8Diy",
  "key19": "w8nkWwLmXv8kdZEsHghGk3t1T3hQBD1TTXT1zqDvRuuHVzZtcetbsHX6P1BVFDT6MJj4DHPa3fMjZgzy3KEethv",
  "key20": "5vTLmyXHTN9aDApfPYStFM7Atkq3S9gUMzGGuAHjrirxF7KgCjxHhaYetU69LrhvyKhdyd2q8QCtWKokDPnYWpqn",
  "key21": "2jUCTfnSHfmGQoh2z1skfhtYGtV96muk9sawNDWojyY3XSfoxFC1YpE3vZPiYAB19PEy5kkarCw81DbesZxhBDD4",
  "key22": "vCUkCssj9A5F7DWgr8TSFW4xnAcFPUE8busiEUdaHtZpT15GLgUJNFWvyzNcosVhRqawHmjQU5ogkAuV436mHvw",
  "key23": "25UELpDfjhs8ktdNC4cFjAU8vYR7QFyyeMYJzCBdzGWkmvdYhp1VJ1gLSJgcHtgKyoWuLCAu1psCK3Q8hNz5euqq",
  "key24": "5DHubUsHLcyX5w73YBnYwhm5fvvhKwXYXQnEw7NDWSKVw6t4uNvcj3ANbarWp5nncddS5dBo3Kv6bnLQzEEzQenk"
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
