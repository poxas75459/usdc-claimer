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
    "2wRk7m3f2B1zLj4CS5v3K6yq7fbFkRkVPyABThjRNmJZc169Jn3AcNjk989LU1CoQL8MrqLzdAVkbPbwhke6UY7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LsxcF9zyHK3a3y75ayHjPEtHTB3kXSpxmWHdVdwWR3xUPmRQxjLKLyfRyeWSALXopppdMmJdQr2spcnF7dYBdqk",
  "key1": "ncZ82Uup4Eb67uohSfWyrps2P56SNcDhAE8FLTwPt1vFXjSKdssxnvQn2q5iS7LhXYzdQAxtof9A87CyenTtzqF",
  "key2": "2Vrn6ua7SaLxLJvN8Pr1aoAmuJM6ayjRGBAaQYst1RmhYKqMukj4vzNN5kBjGYwKEBiBAEqSBNH9ZP7wkzrJxYut",
  "key3": "4nd6BY4UdnztnTQnoKCyxo18JAtY4cW3FuJWKykNEeZ8ohE3J9CmkwD6xHak1pisNCpRkXw6abKZESpmMNfqqbGj",
  "key4": "3PaDbSmbr6hL9W5bALDaq4GUEnpnr9ytG6oQDL4oerS9BiuPPgN8R3NHnkD3QQMEnC311JHJG6C8LYNNsNK825FU",
  "key5": "4eaUhChep47QJEJ5eKY2wyqLKF4H6a58QJ2MnjKgFj5xrdPFhSX8fmyj3Z2yzov3FVPin7drv3vJGTo3xXBusbiH",
  "key6": "4CXCdoLjaWnyf5rvmTRS5KaqC7SDkBMzo9Z498YiXmUBWBkhy1ruCQaUonuqcLAxh9VC2LYCzNM7e1XCr6PmNcQZ",
  "key7": "5XjnJJZ8rtYu6Vf6BAFeqqctg5h2EFydFgmyJxAoh7PrNtUeBAnQKmubsZSuDVSqPZSHHRtHXCPQTm5BWWx2fb5X",
  "key8": "R7cv7Q83CiFMZD1R1nfuqzt71FuXPchxm9jGuKhGUduNJCW7icUVJho3RYXbMyCVSV89MjPDy11PKuvcYt6jsv4",
  "key9": "4Rqd65HGGJkvTTsPxT7RjnjQaiEGBjbq7X2YgaBGaiHjTqbzGWL82RvXzzSuqdWPwY7B2shDwGswWEAhTcae1Jxo",
  "key10": "wNUjbdoXt996JCrGGichTFMhfdtp3jUWFhkswitWBuC9x8n6X7RGMHfbs9EJKybCTCyyKWxfkJ5JecEGjMtRZ7R",
  "key11": "2U1fueA8cwZmW2G2sFj3YGGYXm4qW7L7jYL19i8Q45Byr3Tms2dbFLUhR87sJYU5bb8HMEZYAfGZVb8Q9rEppQs3",
  "key12": "4ZZuzcqVVNEDcaYcCgR1XEJNG2P3dpWbusicepYMjd4DWE2DPcBaZWLsok5t1A7ysEm21yakLEyijq1pDk6Rk43J",
  "key13": "5ZAxau4s5j2B7EBQJjhDVMxHmytwTLmNM4dkH8UKQqWkN7zZa3ys9Ae4m1SCUG947BYBXvr9Js4mwU5QptmPRBfm",
  "key14": "3ptu9t9hfBHe3p46DYLwCod4PS5rxHPx3VJQLLfXXeVz7trALVJzvu94PcLJozSrx6V91UCjGMAGoUDvufUfnRBZ",
  "key15": "5DwTKGnbNEaW67gYpNyGa5fr1CusrqqVkfjkSejjJCCQuuMykhqgwsjpuYknsRR5dxSsKfCyxMYHeyKcwGAtSpjb",
  "key16": "3z1yfdqFbpQfbyg41fsPGQ3t4e4fk3D1LwtCkxZpXmdQfLsJNGBR6JP91rUHnoth1WGXkrzik8ccknNYQ2JBi9Az",
  "key17": "5HhtTXgq8he6wdrp33gRBLXA7gFHDJmhFcb6RYNmaSxC3yWnMHSinpd8JmGLX2uAohnuTDVrcGaQGAv6X45spixL",
  "key18": "rU64m8fej9HNiywYiakadb7ujmt7P9LB5cCW7dChKsExnkc7JTXE3bdBYscfek3FfziYMTR322nrojkhRJuChPe",
  "key19": "3uFEZCPXMYbXhc1D714ovv1wwaCPT4saSvJjmp3NmPkK71iSdNDuDxDp95ZozbLR7gjkktvm4VGFCULvhcnVqXK3",
  "key20": "3N6kEeWHRDfuoaAKGByLcgKzNapE31tnwhCHKukQfZB4bdWEm82b6nPW7hajoSzMPmbVCFZSw2Z4gzo3QmDtTktU",
  "key21": "5wbRVdCP3SBv8EVhpQvNHobHcSy1xQaSCrysH8K4pgeYJwRALGfLbAqJiL6tzfi8bYFKYoZzdq1tJC6eBhKN6Mkq",
  "key22": "5McT7Cm9NYHirmCJgM2AmJ851ahqMEmxvjJjyCuCST11L4cjz1E6LXW7ffyhdp8cDdarF5MLm4tWemy74NyesEii",
  "key23": "2K7TSw1zhj8atws26JrNtnxqzPvF2FHWhUcZu1b2v449pQc2VfRrEHamj5C3eTdpGjfMUDWTaCqmZRzSULuyrgJj",
  "key24": "2HtmAf7U79ageQEaSAZoUZM6TtHwMWVhB1xLh7u25AukdPNLZKsCvAxiAj4NCUMxF2FuQfUyw6wTsPuggVKJy89t",
  "key25": "342vmEBuWYfcfJuCXtkKESxsDRcUuL5UcWBd7AReLdfBHLaE5iHejQVNEVAd8SkUuMAxFgBkzJRv9pXumTZQ4g1q",
  "key26": "4ddxpXXhwwxN9zfYLbBCME1HzF1cKytAnAUwFBEULswuEhJRCThBKv98dQHFjvthZmXvypdndhjWN1zReXpdZy8C",
  "key27": "3mbh1RiEwnJ9RdKYgSvqfQgHGdybqL5ArDV9TAwBT7BTnYBub3QGh6Qr6DGP92ZXRVP43M5tZBKRzEp5n67yC4qv",
  "key28": "65R5gr8ixQX924yw4mJohSiB4mtXQx1ZFhxDqDS55gaBVM3c26YV5iZHmqjq8p6tCZkUr5aA6mQw8qMJPTas48o7",
  "key29": "4qjxfXZFEL9QtyWzMaByHbXiccxEbVmJB9A96tUm5CDYCgQGFvp9fBsbdHoJDUwUXp1HmnE54p7gvHSnpxNQeWkr"
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
