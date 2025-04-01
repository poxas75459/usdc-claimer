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
    "5eTgJTAGQ5Pn36R4ykB85JukukezJdtBXHnQhBiBTHr9tpeEvxJvWyduwmAfYqCye8xY1V8nwTCHteAiGP6GQ4Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wNHXhG79kSECW3h7HNQ7BdXhncMWrYeF9n2t4s4EfQyxbLKUk3wqe842dtgZKCfijZj21mW6XAjzRVxyZTSNvTd",
  "key1": "2zpQefdbP97GfKvqQgzS9GhvVvzLUm68affRd8EkJHTEZPGr4qN3epXnvv8bKXXPLZrEsSCxRTDm1W3utA415XEQ",
  "key2": "2LhjcC8zd8Uj1HtXZCzmLy3xr4m4gLK37tnUvEP2wzx92K5LwkZYbQkegsajvz2f6kKXhDFJ1NUU9kJLa66GVUCC",
  "key3": "exq1NPKHGX98C4pfYVYocam9ZV4oCtPRPNvYZwijCBvRKdZVsx51hskXtV9ZRSRaH2CFM4Pa5jffUorjJ2BZHYF",
  "key4": "5fWw9QoKuvEvUTFv6BSVKzfXqMS3BJgttUZfCedUGtfCUmy3ZrnmcWi9noN6eKzFJCSXyVK7dsspPwuatm8CjCXS",
  "key5": "5ivaRxbBC5GSWmUzKkvLGnRAh9TRuWeawd2Fpe1yTJw4VTnwUGNSmhGu67bLLfRsGyQmSR7V75ZA1naDUZ1Hh3ZA",
  "key6": "29XFNVeZZWwQavfEDuY8GmD5DCrmhdZQjZuZm3Hg2cB27s5GVpdYRiLTsmvGKFadz6uYmoq2kzJwf37mCR4X15fP",
  "key7": "4SzBk2h37JdtUfCjur7cKVb89YCjvyiox98SoB6Aaueznp76FqrwsxjubP1GCYUm6yYFEWS5WjksH2Ht7MLfn5gt",
  "key8": "2n2x1ruL9rnVLbLx9B28URLhY9cpEvVPdCEEud5jFZTWaGi1ikvfmLG3kewKdaXw1rmBPBSAfsmwfyEPQz1ua8HU",
  "key9": "WGMjUJ15akhFTteEcrB8wG3mUoU1JiAKGsrcuEyzhHwWhNBrrWLheRkfdiyit8Yntr2ktWmmv2rAjGsQKq9dqDN",
  "key10": "5MrBVC71NAdmsaFpJuvNzjZuS9CzNX6UtUPt3w57ZkAxDZ6n3oJqu5pZJGePWcTpeA37A8obHi2equdP8UuMJVwj",
  "key11": "3M9aBng3YkBAMoVBhPJFKuWy3rvRakqukxL5rfDQc5YqKgwkL3XQAFfvqAEw6Pnw2N6mJr83KD87yNuf5S7ZT565",
  "key12": "5sEqHwV9gUFQxjrK9DeAha8w5iVgiN17P9t17Vqbi8qrKAN1UesxjcYYQspniEsgw82oipWF7c9ZQfi2CBhy7c4N",
  "key13": "5tiFMf4fuUVv7pomkVYaYCNbfGab8N5emEzddNAXjX1Gbxup88ZA9wGjJW1MorAkFET6LBqRqm148bfvuc5ArdVM",
  "key14": "5dy6hbJbSs9z3WgpeF3mTs9nV6Fhp9Abmkz3XAUKasFjceaYZCdXcU8eUUQ7C5dnNiaao3oFezRRzS4d3T3Lrbwz",
  "key15": "QB9S8BLU5LTpz4D2pqpksDX3sVXtCLiA1J1FCe9pq9qwJ7aPdPRx4VRgJ94CbGqg46eiyPhTGaegxU41pcefWLr",
  "key16": "5KB7aswQfW5ihvHRR5gyy9PTCoJ5hsP4Hg3pvXrVa182z9rnJPSAxjU5GDsNCNo91gxNghUQcGVh1Fsa2mSwgb7H",
  "key17": "2hXjYR8FLGphbBhjrDX43fbmVepMTaGttsY2KBYB1F4GB45chyApNA7BKiviVz1VynzvhrVHqvAo36rpeWVaXLwc",
  "key18": "5iQd2yon8sFdDwV9JUrjFoybZQT4W24oDg13q8WFRnfAcCGvi8r32AQgKvRTXiQuJ77DZirTfkjKfCiquHf9g8bZ",
  "key19": "3X3vMdy3JTdDspamjLLt3ALimAwHJGazhiwAH99vDfg8i2jfyKsga1VFdD6RsFWXk6rrfJ2nWuJRPWnZC7A7kdZ",
  "key20": "xoQsJ28xMQpv6YyvqLFyi6AuixE9c8N9J1ikkurASv5pBRABVW31grUV9e1eGA34u1GecwWHUrVLvnB4FCHoWNG",
  "key21": "4B81R1dhZN5zsCRcHw2CzzpVDnfkaKiyc5h9K1KNvQB63VXd7P5RhwNxTf6M3w2Muzyqy7ckk2JLRGRK1GFQvfDR",
  "key22": "uTf5FnkC1aExY8mjboYmaW7WeqcxCkxqB1FBDvUrFNyzweyktRg3gEJkfptwofPGWXJMN7cPDVnuAfVxvQ44jRd",
  "key23": "5hySbd1uoTmHMarDVFb6wNmabpgyfKRZ8FFHHEw5WaAz3pT4nAWgKbpE3BK4LWa2cHcxAhzrjXNyavnbfmJrgv1r",
  "key24": "sj8ZKtTaLYXtcKNasddvvnsCzVYp9sc4uetwr7DABVhVHBMCKyAp9XEiLXyg5MngNZwePrp6wJc6ZTL1agXtCCR",
  "key25": "2LEo4bG1SuMjC4PZsRU1hyNCyc2Lm3bSiUeXySxNYSccCbiwDPP58zjpLmsucm7S3nws2avRQokH8vMR1QozrLrb"
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
