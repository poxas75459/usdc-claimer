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
    "34aM66mfrjFNTJ1J2RD3T1coQthpcq9YM13uStKZvdufnDix74jwTk1mTdhiJyh2cFiLhSUxGugQLEVrkQVivGNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnE9i4bFx2SfNpEMrMcv7nisZTNvEnBZrQAgnzt83iWuMgQbJE2yXnh9ds2DUiFQ2sjUbNAxvywSc9erLpiqjed",
  "key1": "5i62kmgFtEedmYkgxZCmWvCu6KB1uvLYCXJmnmauQwJ8Abr3nnpp8PW7hgwvuEYBWbZohAMyjnMrXH4yDrwFd6R3",
  "key2": "55feaQCbXkPGyMHyLeSyMXS1RHCoNzXwQkEaUvxRcgtdAgPEZ9dJW4HjEUtfqEbu5UVqyZ4o9UL5hdAEpVxqfVQ",
  "key3": "4GXjW9oFmwtffci7LDfikjYiBoDCDDFPnL9ps7fJDXGS92E1SirFRLD1jhHQdbKoVFs4bVv8VimXEK7DXuGyb572",
  "key4": "5o1XdtxwCjrw6PecRcRXno1tvqPPnA9CPvw8AGjcY4XHgYNPiJRostkbr8Lnvc7A3ACiENaMrGbCSgkuFCzSXYik",
  "key5": "2B3Si8fUb7NXupH9gjWjjoSXz3zSLHLXHQyEz1mxF6mjGYoKy5oW4zN8q46iXifuyuVrPFNDbrn4TMBbPfrP6LbZ",
  "key6": "ARmwPkTX4eFXBGxiZfihqrRN42HS5Aqteu1KxEV3cjfDY8HwNuWBJQKsMmewJoK1Bf5KvHnbypMNDM74WM5gFV7",
  "key7": "CtPGEmkn9etQK61KPWpFdWMc2TLboyP3B5XoFbhEGHWxoFzmscWhYQjXmGzPW6sL3bzbEUTbhRiEZK3qJF2iUh1",
  "key8": "5a38QQDbgNZTWCQoEv6b8kHUwnn7hvFXdEamL4VyYEtkhL2PQzTs1JfZvmSy22rDE4HzTQDerqGwE4jtMF5tCDv",
  "key9": "4ZU9n9hchQfDcJu9ZjdoT3KRC6W39xBZ5DQyX2ahbhiwTxiHHNR36TTnvdpjugkwVNtszowNfCmoaSJvuk3NiwCc",
  "key10": "3pBtMLWRuBvvE1L7fd2vfMcQbrq1aUd5gAAqSrnemWhZQgzPJiZAwtWXtLfAKA234VcYNn7rAAWpx4b1km1RE51n",
  "key11": "3o8Fdd4sSBoY3qgSg5jaWmj5quzisQGjCR7WYbiMZKAhnZpeyirmyBc3qnnukXwgJY6ELygrYV72GHFybAvPQ5MR",
  "key12": "JkMmpvhwL3PJxeC66JR3XXrSxkvhZXBC5YAM1AQfQNPRjFfizzqQovkieSUS3etCx3B7i2f4YbonJRHNk781ppJ",
  "key13": "4Fvhu4nykiL97Yw5ueBEuBUNEWQy2yvFeFGHjnvbfpPgXhow3RyoWkYjhkZV3hy6ez4GoKM9hDMze6J6s1wZNJiW",
  "key14": "3CM3wSLgXWLvZjNPxuaVv7VXG1vqDmH2xuC4xEpwBvg2KuYPrYbBotyYXAegb9fWNYU7prMZ7wSmxt37vBKwLAwm",
  "key15": "2DqUAJzL6zghJakBQWaqrCo2NLDXJ4kKu2mr2P7QQzKcWZqQmhnsnx7EQJds4ioYZUxVYocQrTiRSbdoQLZpeiU5",
  "key16": "57yxfm82BbZhTzYcH13LrZ2GacNKngdacoJaXDG4yuc34rcDoPQeQ1aWx8qfxq3w1tquxL5JDNqdXbGmDEyd1qEF",
  "key17": "PyDWaoYZLVQWUnyXgamyx3Vo2KUwfwcCSSn4q6UkyGgm19yGyzjKFHh9yxRx7DU4wpByYeFKs5BjrHSc937sHXh",
  "key18": "4Q2gqwn12FGY7a5fVqGmPioMDcPFMZ94XrUuFi8PQLk4pfYbSUBbrzpgz7Bs4R2JkvZ2P4hKFCK2HXHK5t4wB9J8",
  "key19": "5AVAjuzJ18S5gf9H1unDp3TMz2HzR2kSnDXQ2muK4pfmdZP1bbNHNGAecoDAMGzcfYsAP6Y9Akf7mGFxKujPpf39",
  "key20": "3yeGjwKnWJqUGUJHEgSeJwMQyLyxiHoUSyQiELmgHKfH5mYUAWJpKib8LK2wnBeR6qG9QJcMZa3PbnZ5efHm4AJk",
  "key21": "25jqtf3a7Eif6WfwdYFJGgjZg286t9NxHwNBiqfU3xy9BT1yx6LqBWqBvduGSxRzSarKLURofGtJtGLdZZdhc4nS",
  "key22": "5kKXsisVNGRdjGEa8iyGCqpd2G9fNYHonoJXjxobm8rxnUUQgXMQ5Jrna1x56DTqary3QdiPRk95mkTDNG3pNwAt",
  "key23": "5KXigJxRF3ETf2mYNEuWJU1dcgTZfKNYf3RGiJuvaQEpvnqa5QWaPamfKR3MCbApb4cB3SJSCMT9dHBgjmY4tetq",
  "key24": "67AQB6M19r539aR56cf9ejzHAAYNwimWGm23YuevtaMBAj7zxDNh4RtjGnGYt6nJ3etFjekUQmZQNtLJM1q8kAQL",
  "key25": "3ZaFtvMU4quCkkoXRufPGW1YobRfKvhJDhPMGPYoBDXfthNVdAoKSUTTaxibrGfz7HtQJoXQb1HVnVXkNbhe1gKA",
  "key26": "56rwgtx2D4mtKCJxyUnSnS1qGbCAqdCCpN3TVxf1rGtWS6ScKYH1MBrQU6iRXWcj2HThxZAkKJ2yNrW8tBFzndui",
  "key27": "4qTJvvo9xhMPhrZpnirBp3t2C7p5vaR74wTuY91qwgpcJNMHsmiDkBpQ11F9DH3WD7cUgTcLVNfdj3Bn52CzfgWm",
  "key28": "5D9CERx3L3CiWcbPMtrSb66eGmbxoN9XZXEyiXwD9FaU1xJo6ULHumv9i1neviTC419x4A6nCroT6u9oddUg9hQr",
  "key29": "4sSdoydyuHAVW3Q8GVzTSCPB1vdVvX1xtbdP3tCRAcRTkGynZVeLAKsrwarn9XCJiY1B4RtRrLnK9TmnzwQFPidZ",
  "key30": "51nxeRAEosKiLq7b5qgUu57KAQJ3GTsn8iXoXgCGWqGnzFyGnb8BEcAntfdfHHTxyVtHQvVS5W1tHcs26soHJcnu",
  "key31": "NX9AzdzzutSaSXW8ymLtcRMuCCYtmueDuRwxBVXwmBSPB2kHQsaCHrXsQRnm58BoxoHHbo3mQfXnXSz7iggG9ib",
  "key32": "531PLZnQ3AsiDPJ8qdiVWVtQjmZbFM6gnqLHfbVhwuwDNpUvvLGbvbf9Wkywrm2WyVFvMCpk82TfTyzw5wbNXG9T",
  "key33": "3zYiBiN8gGEhEFTokstULDKwLSNQks2xVQk56Ewcn6QpVdWQcex31wN6zicLdpk9vW2G2A1Dsw7T7WXSJRcR8ro6",
  "key34": "2sBKi485qHzvubHHaeD8phnpWfFqPygKseaRLugPza68xnC256xnFjiTrcaEtfkwuXwsE97zoPgfBHQFWF5tv4TM",
  "key35": "4T4A22p3XaicKPfkLvYbsEPq5c1XpuKEaZJNbQB7SwEcyVyGJX8rzReUK24a5WjBtgAfhSGmmz77NFxtuLNpkTfN",
  "key36": "63BeL8eekhR91soxm382oKMiwo3Aj6AuyDWCkvrRk3m2km3MLXUcsbw3qkCxQsY49SpogxyoM1zHz7mKscr3H63w",
  "key37": "4TiVoUhUa97mZtSqCR7HwF6UPzNBmvpyW68QDkAkU1kepiUat99o8mVVqFJJxvhhLuSrKjCArDBpXg8EpbPGKoed",
  "key38": "3DxyCuddZAVuDt8Pu3znMmDyj5H1XjKYkgngF4eoZbNcFWQha7utTALhCKGGUF5PMDv43fDABb5NKLASpF94rXwR",
  "key39": "qEbNFossWyWLik9NZkiu8RYk8guYyEN3CnkhAt32SgWn2CTn7rMpmA137YX42eSswUwQPqMy53bVxrMkEAP1ChV",
  "key40": "5qYNesy6tYvFrKbjfvCbKQNAuPNwFNqmDNQpDEpmDfgvydgroFG24chh6mvnadwg752oata1pFZavGmUPXAPNkQi",
  "key41": "4Y18dhZJeW5AKEFqa7RJr6pKhjXv31hB6DPFjbAay1vKqZ4KgexbRWPeo1YCfBv1PnZr6FeEkZdCRy1vsfdpbMnU",
  "key42": "Bkr2TNtJitoXT3qGUCY416834sMqraKEfFyMajTnwGnuJQ6HNvsfsZ3sp2BpwVVyX6KTrYnhCzsrzhg5t99dacQ",
  "key43": "4zFC12SanX4T7S33gC72VFNH1jDjvJAo5GQezHHfFmNHn3z4G4BHfq6XaRQPaqBHYZxcqW6GRSLYkezfBHo1NtGt",
  "key44": "4xbzrZTakFseND4juQUDtCwkG46FgUPHgkGMw1ay2qqia6Lm4c9qLFnrtHWngHCFRdvDvMeAZme5rdUDngxj4gLf",
  "key45": "5RWXJXPF7GNJANWMYZNxFjiku81nNMUbruGCGkAVGxgUCXBhqeudEzZCtymQTz3GFfJsPuYmGEWL3zk7pcsDFDdp",
  "key46": "494CXbpxPBejPdSUfsgUPm69tvfYimqm7ArJDitvG5QR78Vgg2a7boHrpJZ1iyHdpJhqBMMHPm1QHL61yfBUpmN5",
  "key47": "551zbVpAe8JRQyw5RJL936wG8LDsUtTwHoq87Goa3Bhk6A26uwCpXCDWhP3466cNsmicwLpgYeyn91fkRnWGJDWM"
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
