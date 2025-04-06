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
    "ZFTaU11P7HFgCxfjnobEVBBL6v3S32LkfUBVRjfE4KcVkjG4vKvBZUR9SACmxPPvWYCyHrezPFXRgybXRXhWJ89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yp5DEjXqGtoWdwpka9wWDD7XCSNqetaqqY2u3v4dZMQ56UcFZtAmGPLxXbbbhKJ8soicw4SEqrAKzbtyyUonrDT",
  "key1": "2NrTjrmNqGZFprqWav6KBLfuVZTHAFd93F7h5jmQz2uRWWBsGHhL1gK2UgYa8zEYBKpxtL3Ewrmwhusi2t9qjSYu",
  "key2": "2xGQUNzaYJu4rC7mxqq5Kkr8y8GZQ6Q1uG1hjJpRTZ1itqfuwN2dww33SPv4CgRKj8vkQ24mGVY54G4pyKkFFp4J",
  "key3": "4Tjtp6HnoAG73gYG4q18BRUYYqmiP6oEkmanoXuHVDfBmY7LmgtcYgcjVDv7wLk9YYm46mHwEXqvytwe3FRfcnsm",
  "key4": "5WoCf1SkmNfNvM7F2yKRJzJGiGwULHM95Z5HGcQNnk99UB9JAQaB3rEXy7AhwVFV3pEfpP6cXnB6pfLU19MaajaK",
  "key5": "3uH1KLWwgm4PSygnxwZHPYN6SSuN2qZqnLvypTmwEhWGgp6daVRLVq42TtwnWxyBvBHm4wLYH4MiLMaybBqJGPaK",
  "key6": "xLroC2JMnRzaTQ7wDKBbKWULCGKaZQdbx2o1d6diNZeBkqFLpKUdsp6nngyNSRJzjHiD6p7SEKKwAJQYShNiXSH",
  "key7": "y3R2psbF7PZv497vkUbF1Q9vixxuRKZ21acc46rc7E7PkQHs8rSTLAj198wjxPN4xCs5GLPjvuAD6pEfAYwAudM",
  "key8": "dXhZEeYweZWc9yKRrgzSdj22jDRpy7jmou2AXngevXdCdmHqiEdvpa3FRowJUPcN7aaGoHFRFbYoHhNTk9dbYtS",
  "key9": "5MiKT5NaaoXxv4p5powZ9Evbz8wirRS9NyZt3fjQ7LqQFku6wyHjiEFVWHdj9qiJtwgWME25tsNvQ3QFkm2JZ5F8",
  "key10": "5Qav9UeqB2h4A43e1r8JAz68MCAL9it2xtAZ1cszKeLBEGU3x5LRYHjgAd6fqg47Q95dkN6LvVgqc6xDoiBXLXzY",
  "key11": "2cEtnrugn4tNq7dyzGPDfgTR6BDjmXH42YohTphF9eyqWVPkrG3xHyXH36ktDJaR8FFj4RHLJYjgWxCdxLwH5R7H",
  "key12": "rGri4BY3qRbZhCaG4G6GBNBcZzdYKae8pyg76xtj2P36MdJyao9vfvdGVcqWyqYbDjMgmx1Dr5UUnso9wxnizHF",
  "key13": "47nwV9t6t93e5a2h4aeqSfWXPvCVsctdYWrKEnGXvH2ifeky5TsrDGo6qQYaRgWs3wqQ9rtRLUbhG9ZuH4pskM69",
  "key14": "37C2jrZ5Bh3aCp85qa8yFAvPFttmhqadDeRzP1P7Y8NBdnrvNzwjFVAtUuQ5gN2AWva5gMHUvgCneMRWPFGiijmp",
  "key15": "SWcjS1GaUD17UZdLDetJPQtB4bnW88u2idmhJSSbESEVZahjCGPFJQstuRtCDKSjhF6VgX6qZV3QReBpN6WLy2m",
  "key16": "2TnRTiwP27tZB6vtsmkNr6pNKBj8Nz53gVSHbX7jo7buE9WmnKAfsbYmB6WQFUsAbq3Pv9z8v8SCLVDS2eBTqigp",
  "key17": "35Hm2zDjR6Wp1kBAFc16XNoiXsPPj8Y6Pf8hrP7cspJch9SZukw1vfynQRdG2aRvZqG1xKNctViAmLaN91FpvrWh",
  "key18": "4i1P6EB3XTxLncZKuA6daz59iuNyUDSWYRQpiiMk4KbybtoTVhvLrQvJocoUjSapfH5suCNEEoMsu1yhbBVXju3r",
  "key19": "MgrzUhfviYoZC9Y7nFzXZgeEUY41yrEUUUkzoT65cMgcubyJCzk7R7fbEMsy7LGfMWWk3KvGaEwBgJkCpyssviu",
  "key20": "2NLsFS3LeoHoBxrNA4guR2DcmnW665wisbEd6sgYkD3MrH7PdCLdZU1eSVBUf6zmWQsBbT9o2uEYnYwE1NA8ZcUs",
  "key21": "4rDqH8mxnzCe5BxRotukV5319j8CcdRiF5WcYQ7wzG62iNkLAGDA26aAcvUUNEiQfDo8dV5r4d38YMkhzmFiqMYd",
  "key22": "2uwmLo8GCnGksA5xWGGadZ9a3PoVXzBiANQvekU6Pe4hDckGeeMcfsXSBDSyDgEaQQNXwDZiUv7YtvbTxWzZLx7U",
  "key23": "4pWk4kAMkh7TSwkoYnHnCpxsYz4PzyLcj6pEV5QXY4yz4yucNqg2D9QrYKF8YSs4gUXYig9DT4puLnXzBYUf43sp",
  "key24": "H3VUKBLEJwLnzQzthuKjXXBTYGYbdwBGsVb5LmommuMWPHiTeSK5cyxhhAnR1UXditT3RSfiMVKHeXPYLC5hvdc",
  "key25": "3yh2JD5CXSAhsCChzYEUSVLAPKNq6t3HF6KpzaEf1pgMNQ7qDXijirjJvsHNTNi3ofNUKggV1NUrTarPLw3xS8J4",
  "key26": "3Sipk1bZoAfJY6xG281skMdiArWYtm1gfNXExsE1A4nZD89d3qHzrAEpFgoyirzDDix7XwXvEh2kFDCEHT7LGQZy",
  "key27": "4YyQadNC84aRPdDtkk4zt2zJAndGQVwnnftnya1vxAwQPkCxf4FfXrXGXvdRFdcmwKnuMXXCBFwtn7df6ujnWA4B",
  "key28": "5vt55eUdeoHDpbKbwZwoNkAgCKVpBGcaLnAup6KERyrvbqB7krJAtjQMfVvFZbwKavzNL5xCmoY4SXqXRWyjAAtS",
  "key29": "5YYCwwAEwBe9ChZdXUrkidV6VFvx87gH4Q6HbL8iiUFqDnAyhV9vwaH6txqRxa6Cu94VSKvEK5VTFUKiMg6wfx47",
  "key30": "5WaJ4odpMMGHwttZyUqcQ8eoeS3nGZoxfBUTGsJ9AnJuky6mTGLNyZF1qgVJAk9bxgj8SiptbeAfFB4RNq7gW4X8",
  "key31": "2Wu7AKWY8igqDqfek8wk2xdKb6fdQbGm9GDFp6op4udgkigxzNEuj2DbnQSZQwpgaXjB6iYaXLzyYaEEom2ZMzi8"
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
