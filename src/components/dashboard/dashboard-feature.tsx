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
    "4KeMS8u8nUSYbZX7z7hnoNCN8cprkNSd7R13EusoDhHtNaN1JsH4fiqtdYn2b2EsAnbo5VBv1gCwpYLdnHwiKsq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xo47YjdxQPGL5SDaexGB9xSj8aMuvvxeh3YuErNZ4Fs8NiAaHVpVYN1JsWSbjzxF4VZKvgAPwyvbuLy9p5khxKX",
  "key1": "3WQxgo7UqdUa1LWp1c2QoKfp1rCbEtmMwRWkUzxpH3tXt7yrmUxqnK64vggLYAhDAkpdwkRRQ3SQgWzYdRWcdE7s",
  "key2": "4NbyFWcLqm9yu6Lf6HURQvLNzoy2GgxXDtxbf8M6YnvVNWJQSM9yFQBKADB95hhqSjwJowPt3XCQ2j6Tynk8WVqg",
  "key3": "2NLz4t8edwwx2ggmkoiU26UaQsrwgDEg4t2uu4WnankRqbvwzoSh969x2tjMYBKRmoHoFiZm22WpHbVEctTSYGDh",
  "key4": "4d3n4qV51mH6KyDoNkcKvpy1vusZVPqZcCyvGwNdqr4Qsd7TN5gFMvkxr59RTSbQpL4GeTjecEXTkLE29wmmrgHz",
  "key5": "5jZEKoYPwTSet5G64G6rvfHn2riwfb4N9Eyvmpo5Stz4a3gREfrj5NGzsTDpF5HGZ4dKJTSCeHF8CKw4j9mrvmJR",
  "key6": "5SyZZKVzGGLPrRCCuMxDVhCtHLuLkALZgEdT9UxXrKsswryheT1XYxEE2gsZ8XEH6RXst453rF6LrRxjtncEf8FM",
  "key7": "5PUpSXad7CMA7ExbyrFtRt934Y9d8wyQ2jSaHMtfrLCRs1PTdffPwxstuTPnoEksy8TqkVEFTKCPFYMBxrnXyt8J",
  "key8": "2jdFA1CL7vkiTc8dFxcaWX4sFngxDwkopwigRBSTUBXa1VrUhmbnDhkDbDKEF2a1tU7sMeTYepdhHhkShXrSCVGe",
  "key9": "4hVw74epQH9wTtoziu7xmaQg2C6JzCgRh39Gt6z8QAG9YvrQx2ac1fBTFNAawC1LghJAdE5aeA49DEY4A2y7YpLn",
  "key10": "2vBmjv95k5d7ekcoo7r42vKA1mo3oMY3JYj6eMeur84SQNx7MmjdsQZVkjatCT529dEyWXyYPmxieQ1EVXae6aGF",
  "key11": "rQKKWLxSsyXDzSV3dCYpyXcZXu3D79TiZrHcjft8AP574gVvZXQC62uAZpH2N9Nwg4D6SMU1WJtVJmNnm8zCUk3",
  "key12": "b7bT6BB4qonGEuaKfgUFLExu8siTjttUtWs8aoGGJFX2ebjaDKPu87jrHK4rvJWG9eajFoxdccvRx6gmyWGNNt5",
  "key13": "44mGGzaCwn7f4MGvN9TbFJTgzMkK4XvQWTDSVey8fEBrvgkz9xxhPkcqicyKUswGjh2T12bq3pqSbAMbV7LruKo6",
  "key14": "4rgnch7XX5PCP1WJmk9nXpQ6A3jcxzfrJMBLCsM489baGFwBifNgXQWw6uRwmUfUz3f8ACWbW7D61FsHPJRHuQfS",
  "key15": "3R2pGj48J6AcSu3brWfJfHaz6H7q5iXMsz55GTnPGsuBm3WFzb4WwhmHadsS1CMtqHQtnqGa1qgxoQGptiJYiBGV",
  "key16": "4uY75NTEgTwZ7tp7syDnaE7vFg2jHjiUJeit8x2uSmK6VtSmFiwJHh5i2ULVpVgKUXge1gccaGAr9JRwCPrnFrpp",
  "key17": "ZGCVbfnPhDq3YBqjutYxar6X6VB1WyL1TH9BkHEMfvA7JVRvVqbnoSn7GrYccJw2CDGvgr1bdbUwQF1KeSB3jjS",
  "key18": "2nfyLeyTmVosP1r9FjPDRnhv4L5HPRcVEBN1x9ShQ42zyuLDFgrYGZ1S6s9F65WgAzM7zoKUjMJ7XHXatvZN1yhB",
  "key19": "2ygREd7kH4nqNCZ2NuLB1w5JfzrWzWcucR5LyoRLsy9yr392VVXTuRpt8ADTmV8MfPU4pCfn3veCYv1mmMFPyfn3",
  "key20": "3uMHbvRjKi6vwkdT3BKu9o1THrtuY224okhVKbJCeL6kKu1cGTUqEKyxSEtgdHGubbkDJvQ5uPGm2ywzBLG3jM96",
  "key21": "3d9AXqYp99hbs1EbTDK9V57vVuYX2yfSU8ikPAd5RyeUPc1Wztw5GasXWjCkd3SgtSheWYVQUinb46YwrwQRHBv7",
  "key22": "52hCx9NLWA7ukeFa1dmuZWm48MsusnqZPc9CpkLNqYcpFe96E18sFZVETpyWm1CiPADFfi1xE3G6VVEVAw1ZNQ9J",
  "key23": "3rbN3MUkHLHn4rK4XGJzwin77MDEKESWBJebHp5Xyaxn3hG72ZR2PDg3a2bkfV2SiUmYKKEULar5wHWdgBHFkd4F",
  "key24": "3YqBGoWZPEvypPn1jaPafGDtNxiCjM6N9xV8CazF3u6KMg1zKTRqKNvPGvrSh4CaWz5JJfMfUB4bRSqvR9j7GX1Q",
  "key25": "2nbrwze1fN4dtbk5wquu4xMdeQrjtzWnNsgPq3rEwK9naoSpiPTc5GuQbwqqzdTM7a1e2atibETqrjbGKxksq1Mp",
  "key26": "4hjPXVixiXszkghjPB5WTZM2t8QTdGJsq144Nr3AnNL2gwykbPaq1k5WnFnLPprWpFhJdSM2Loartv4a9J3szaFo",
  "key27": "2GJ1CW88dL6P6oaz9CWR1sJYWHSTYVLskvucr2M3J16yjnKpapahHU91squbzCafYj8vxvxprrYuizrWJhZC7zXS"
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
