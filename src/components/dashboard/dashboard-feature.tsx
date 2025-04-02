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
    "5aGP8bF4SQmqYbxrEaeH7BGUXohWg2rtWmJkDKzuBu9BNND9GtLzscpvLpQzpeXaj9VBF5WwhhpREQ6VhVAYb58Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hdb5p4DrCjcwnSUrz1vEcnEyx56syBzNQKGQqaGcQ1UPgvmZmLG31sT7SsfeD4XuMCcV4dMyoTWpBWqLS76Wuwa",
  "key1": "5Bsj9KAZAkQPv6NbPgGeb6852zsnAFQtWdxcJj5wvMcV4xq5ciksjc7Xf6ofkmNSBvutS1YWhiQAHdAn9V5uBg3U",
  "key2": "uTiAPGnbY5ChnEP5PJPuaXYZSBU5nfBF5pwZgVVwgSBnTWxYwudZghQhLo6uvhnJeEeYpqSvwtGTmcvmF7jBPcQ",
  "key3": "4tPHA6dqGDEbieUwY6C9ie9emPzctC7zUotTsi3ufnBSVensLCynzjqNs7JyQzHnb1D7mp8KGTPW2BpDXANTq4TL",
  "key4": "4FKpd3eD8HSdfDJjnDX1bjt95ojGpAJFPQDSpUr6t5xS3GfktzFjNo861RzQysYKHh2a7jthzL3wY1JCBnR3vHXK",
  "key5": "4sowZKbcfDhXYdwksu2WHcgZfJkYwAFVwU7yHDh66k7pxKs7RyAAz7MWQ2M5v5LCnHKHegAHoqGBdqkkRrpBUnjf",
  "key6": "5HsnHR6o7ikk9n3o6iufA8dZbufEeFwtrAHqPp1zWVyG5hSZ3jREEUV5aLSQX7xMV95R6NE8LY1YSkW69ehkqJBR",
  "key7": "5nH5nfmVEWFkY3bzw2vxfGTU9h2VSRcEiiSSXX7NuuDdStRzVLkqJ9h58SvgV611Zjb2CV8LBA2ba7TWQNvocXaH",
  "key8": "3GhSLpPtRDKKK9qNT5T7T9cKezvU6R8X2XbMnfEkvhzvjEexTyUmdx6w7LscdCbov1tE4MbuyRdFugdbJxp7doGD",
  "key9": "26KVXuQqu7uFUzr9UyVgDeJsc3JsReMDrC76xBemrdBsy1pMKjb1KYz5RoWN47cB2HWu8ijA75J3k5Yy6mjqBRL7",
  "key10": "2QNQAmhqoF8H1TnAze2ch6FXZRJuDT6PourYM6sngogP7VdvQRbQXVZwxZXySQ7c9m8vdAdAzukGE9C4wfoSqKpL",
  "key11": "5Ce2GzFFQwZtMVfdGQLr8Raj8pSqXL9ojecbzo67FaMsV5FkcyD8hzqtwmeryCM9RWqdYmsfXPsLJs2Fn4EoAdg1",
  "key12": "4TDzNLom497FsmUjiSccSzJMZw2tZFZKo7a37FY37cgCXD4wsVjz1PzYvK4NizokesJCivEDYVwywxjjXhD6Zrrp",
  "key13": "22Kerz2zSRGG2CHswZMQ69zrfwM3n21CLBVeii2pu9Yjk7rog2h2onami4hfL2HuWChfjFB9bPmpUfeAHRZWK1E1",
  "key14": "MSEnT6yENtY5afkoJ197Mu3uv89jX3w2WtEjUcKC4ij5cYFWF6Naj8iYzRwSjJ3gwgW3vQzs6zo8FZxhd2MpUq7",
  "key15": "2vrBh4kJjXchYFWCkhuYw7qZySzWeX2ZDEcdQHyyBJ4EZwoFdMd41FX7bAc82TJQkKMgE2xAwufhEb3mCtp3Lu5x",
  "key16": "5WkfzhckNDCjRzmN9udwJU9h4m1xb8fR2hhfSfshB4pZ4GnyQP1DZeqNrvz1zwPYcxq66UyeNezCMM1gh4CgNtay",
  "key17": "5SKmqdMXzsJDZDErwFE8KZvnHeL3TYXuwUBaFn5s82SpvwmmUgBbcqh4NMaF4pK2EgVWSz2cFYzRy9xsFA6e6v7a",
  "key18": "49T9aeCP1SDFLGLoF9bZjCSTiv6yvoLcwGiWbnhuVTCYxqqQzb7ZqTJKJmgu5sapkKap26SERD2QyHSrqSvRjAUp",
  "key19": "31NRM2HRVXBgb1dLXaUdkwq7uxtoGRZxCNtzZ84W21ZGxGbkpbYCMWDhU15t9PvW7aSa5Bbqfb8zwZ2amd4tKXv9",
  "key20": "L4PprUo9zy2FcfWf6aEbHURA3Cvj4NMRRwcWopdPFSq3RwYs9SkUqquaQGud44QsVPdMJb1q31TgE9wNSuzmYA5",
  "key21": "nUTyZfrbRvySi6JaE1zRNeUbUx7NJzWxNjTDRGChwaUZ5nByf7FtVFndoi27HjHzGAcDu6DoLnGWDALFjdPo3fH",
  "key22": "coDrez9sHdfUR7U6DABjdpq1ePeVpDeR4Nf9cq8KC6joXs6Nk2noAvUVQuG7aYycUM6iqiDBMhY6eog1gn24Sgj",
  "key23": "45QmoSfpC3PrC8bsWoojongrnANra7BXxXsJHfgMyVaAYxCzpHY9uxxZ2UELdd2cdP1LU2XUHQJidR8gbitUdNCG",
  "key24": "4VR49XDarczoRUj8wP5N3onuKiEZt3N3eZ341RAQjrsDU5rRNZxDNZAy6GsJS7gVF5umQZ7tVhirorhP39ZFSUZq",
  "key25": "3sf82oqjmBhTyvd9ETra6wBKBChuT6xoFJrzL925yfhsKrqjBwE1KDZWtSa4w4w2uttKJyuAdMLNvDYoQ5TkaNk1",
  "key26": "4GcfBFqJUknDSGbLFGHFU79oD3crbW1nayRdKNzmuDRMhnPmqYPoLKaeG8Li6kVVWWMmmdVES1qvwohK7vWzzevy",
  "key27": "5eYP7xVctAp1wBiQncHue21bWQ2d4CSEbydC6oVnEJgRMLQtKwj1gNxjw3pZz4h82AjKS3dnXswNeZNSE81rQgE2"
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
