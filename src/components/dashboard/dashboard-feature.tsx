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
    "rdThK7bucq4F3qGXUsanE4rFhC5k6pFeSubq6K2ppwz7bHSk7hQHZH3FSZcFPBUmfW8w5izSu4XGKJyEPH4D3Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZaEfkZ8CWnhYacVJwLeMJH93QJyznay9PfCW91iDBEAMZWmhsDXZxSKSEv1q4ATs65ajcW7iTz6b5QWqV88SKa",
  "key1": "thoKnvTW9SZVirGUq64gvMUE2kRf9z8wenttL8bSaDmrXXDwH5d4xGxrqzisjNiu9EbpJipB3nmAedaiDZKm3Gp",
  "key2": "4NDrVhq6DBkVYDChK2gwBBNKUW8BqokwLDLXPzpBd61chAt8gfBFzkvM4J45F4ZBndsC9QoTKaHgS1cHf3YXEYqo",
  "key3": "4kqpiQgM9E5BoMLRzwf7tGjvhtAHuh8GhRpPb7QNAxgD3VEFRtaBLd7Mx5WZAGPANNLDDHvtykjfA3g1kUuiTKaC",
  "key4": "5S35WhJoFFS8LzjnmjVAaLAV3wvX4MMgKd7eoXd5HGhmT2BZsYgjnsZE4U8gNGLqRTsGanTYBcRQ5grss3WnpheX",
  "key5": "4U8fAMSYL54ngBJFhBnmjr4n3N7a1hPzVFPE5rv9g4WJ9wAYc7yeRtPxWWy1KJnj6PaMtXhX7rBitWRorFsnvG6k",
  "key6": "3uzToSzw8g9YoAtHjZaerVYVdDUsWdDGrTNAibqKLqp8dkF387bWgSaySdh9CsYAycnRH7YQbBiXPcLrzK2XdQGz",
  "key7": "2Xbg8of3EVHoQZxfxjAPrykLfj6sMXgnmvBpGtyq9ZheHw49S3u2WiAGk16JJZspFzsTqDnR5iiHHEfPt34FjcFR",
  "key8": "hoMUKabX2n1vst5179B3Jt8F5cFrydSDKjEFPuRiG31HhfAZZFgR4NZiF3j8n1vdXxsrnTEsKNrskt8Q4HsH1c1",
  "key9": "5EUEQuYimWJNbDM615bJ1Z77Xmzg3ZyzFnDmP8imPGYxws4X7yyon15ZBLAmGmDJAayat8MdHm9HEPfzb3HDLLDz",
  "key10": "3YGD8i3yrgxDxJaxYFzXaryEXpKgnmY9no4j2wEvbYY7WBBQUz9ERVAyawPgi6hi6KNsJqceR6mn6t3GFMgYtN3c",
  "key11": "18FAS8NgKoocq6xsAqi9WwdAKdXzCTcozmnPdN3Ptn2g5vtNu6nutREbFRTxDpmqgySAHWTQmrarrJGKnc6fZY8",
  "key12": "4QQSPqne3d9K5TAvt5NSL2ExMhmcZ45bUZuuE67dfzaAAdT19osznEYGzV9sPnUwGeXFDgvqHtNBJ7SveHUAdSJp",
  "key13": "44mxFzXwsYp7rGixLkXeZVUJigs15AoAZdCUKotX2aVBZAZEaHbwGH6Aw3hJHs9qT7EkiTVtM8ApCmf6WkZ1KB4K",
  "key14": "4ZPsdGC2Q9v1M2VzuBadiZrPCcBz1nSBjyti8UXbYdRPnyy7SX7FgtNziwwSNaiQuNsmhner8znuE9Bi4Ku3P3As",
  "key15": "3y4LiFzz3VqdEf47bHDGnznyTTbkY2rYkkKWFosTmRDnGeVjbPj4C8pUaGUysCqrZQkvTJnevY7qfzUFWxGPazR5",
  "key16": "W2MS2CNhnmU1AJrweDqro24J8irSv94YVL9r9cpfyDjRdVEZKBVV4khbx8HYxiKmApkuLNAb9iMo1dL9JGS6KQ7",
  "key17": "TJxKnYAWPwmKd4fqUmqqjhKhjFm5oFmSS2aJQ1bRBz2hc1kXvhxccCdxoKBT3xzESpG4VsBMEmNFaMFZnffqt1k",
  "key18": "5pECMp3L4bdakXEd5VEJGzhCXx4X4rtFYzFjwwAXvq3SffhQaimo9QTwoccVoZkZLEZ8fCsPeP7kQV5ShwqSS4RE",
  "key19": "5KzoaRUEnWjjZhJSomgxjn62kVu6mFksCLzK6FowLEUN4M2ckuZ8DNpsbKo44ukfvX8ZME6ixMZPVowTj4bnRnTg",
  "key20": "65FUN5zBQ7LnkLfGxV3tC2ehVYr24sPrJd3QmUhV97fu1H9ZVTFmMatzLWjwMX5MCEBnBVrpmvQ5DpSDV2FCYtLK",
  "key21": "3vceausVr8PfR9BnyZTkcMEms9WUkQRXicsxe2jN1zP2aUUhpQzEpnayRGdvtMX3onwsuUww2UiUt5sw8P7WRwfn",
  "key22": "2drDcmfnsJotgSunc4ncJZkcdGMbCgTx2JzjF3NSW7uqER7PQz4D7Byr6jryffx6zrkSkVivsRsy12MfB4pKxtky",
  "key23": "44caZhxMdSWeBAy285rrGiU2tdhXjWLZ47CAF96wbWCeQosDofdfJtSHrrP6nUX7k1J5eBK6AysmZpvkRRjkwyR9",
  "key24": "2gpj2pAEVr9NBkqRh49h3T7ExeRHMaA1tUXEwtTHUEzvsUgsxb4cgjBtJ1PmenDJcvEV6KFFJ2pVSjRy76USPRkr",
  "key25": "2Fmwttqet3aqdaDFLHH9RgXgJMyDELt7S6fGpNFd26cMvUSWhSfVzuDntwBWyXk4En7bdUTwvsEDcx1HsA82g5q8",
  "key26": "4dFbTgxNmB5xBLGkv5awSyWG47PXzFtr9s4r68t42RuChTjXWEgtyExwecbrkyJrCdv9YC9E1zKVtRYjLwSBVSh9",
  "key27": "66SQ2w2Qeq2Cz3Ps61nGBmzLQ4A8vRDi2ygKv4vUWPAVYWzrQMWHUbK7WCCjgMxLkjLabS5tw8H3LrdbGAELQRNv",
  "key28": "qtQ7vXUhvFgc1upcgEJ2kbbsztSrHvDjiVpk45YJM8WqGjAUHGaMrNwU6j2vMwxV1yqfY2SgevZRCjKf1KgL5GJ",
  "key29": "5R9uXPFUaE8mF3ahLqREkMzfA8WuCnQHriwuoNxGRdSNTgVWxn4cuMBYtj2bNUjV9u5qBsvG9rcMBD1UgqMHYtn1"
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
