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
    "3gSepU5hndNiZwfKoJ6tkHSEYzSSx4tktKz7GahRKceuDJdEvdBrDVtELKYDzwJEXNenmmpBWgSw6cjTvXNsbfdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615DTRH79yk9cxuGTUsKy1wRpL1JoRuL81ecbJEbyVgwbhSrG3rPasNZBedpLMYahN5x2FfHt2B7AF6HLbFHLLTo",
  "key1": "3jvaVhTmdg7wgbmTMyN9BTpBrYxXmGpkUMZAzcZPnHjXiqzt6tWZ7tQw5g7WbRD9h5Xav6fXoFUb7R4yAeUXUe4w",
  "key2": "5vVM3jyWvteYjZ5graXWF4WdQpn3bk5gTDgmTmNqEkThHZAyq2Gxmt9RrE4M2w1FLQabfQbRQAheTcpXCcRjnbLP",
  "key3": "3C8YzmTKxoAFf65zZFvaAoJeQCZaKmtpYU3Bp3Fnk1TkfjM9wuiBUFmeFWRXxj7rtG1EUThMUP1Uvx7CjnYJibyr",
  "key4": "2UZ4VvzhAFRwcKHpkKS3yWxFgVyd65fmFq5zXsmMEnYBDfwtG9Hp6NRfodg3Fgcht2sXKdeBMJdxjhvKx9gnKtwZ",
  "key5": "2pZZARvoefmFNW48ipjxZwiZ8Gdr38JLnRDY5TPYh4izCWhnraLdy7Ybc4PWj27wTz1UhKZjH3ChEi5fSN1CdcTE",
  "key6": "4rrdc68Sk57GzNJpwtZochY5ufx6AaqNxmvRfxiE7Tsz1PDYpk5RaPy9WH658Z47wZtEAFR3vauU7Zbjzu8xULEz",
  "key7": "9R3cTrf8ERUhg1akzmbbtF1PhiBxfMxvh7biXdi5VStBAocC7K8Jo8BbsMZqp6wi1b7FTVmr92jagnGgy2L29i5",
  "key8": "5mh2RnXvEDYN1CjTWSJjLGhHzLiuPNjZDXgtpJdbGmED5ej1wX2yBEjZsXacHgW6hTNTQCdvoUMyNLnKD9iHhg8k",
  "key9": "2ZKEizwLMacskiMarstaZSb5nNMgAfWmAw5x5Y4b95eCg8UDQMhbnpUbrbEwQL1zr4zk157RZXGkPJaHemmeoaEw",
  "key10": "2kg8vLu48Zwy9VqZjZUiLVJj4g7Mzmz7ofGVoDCCezAR25FuXgbhwsCfutYKi2wNwbLhBY53oadh5q6G7D41Ewjv",
  "key11": "2ymFd3xWQj7k2xMxk3BKjx3p8s4YMmQvDNzWWYBsQBs8cYBSdyaxMCEfDBCxYU26efEJLFvXoFLZfXV885sstCFQ",
  "key12": "4ATWBAZ7arJQz1reX2kB9sn2PcS6SJvMEEyGLZBPyaC5ZUQD437EmgNGQqGjoCaLqipaPZh4ZcGufevMqV4Cannh",
  "key13": "3SqU1tuPqScpgyCHF97Z7Mr1h84zonFV7SBJtHFjArbkVwTS6vLGLLa6NjKwbMKB1ogptuEkEhpbxpJjjQi8asGP",
  "key14": "fxLLuDxK3r7g6foU9kcPA6EPRQULJ6T1bVt264CFqQL8qsmTiGixgfm4YbfJZb9t4kP3bpc8nYZ5bXnhHpUPcmv",
  "key15": "64zvAXu9997e7gyXuJ1e6bgVWsKucjQyc1CZjXrpRzzigFmaGybsrpYHBXryxoWcLDtrJCw6x8GHPdqXKv1e4329",
  "key16": "2T5rJwDpdPGo3mXLhj1DY1KvdU4GHFjX9b4Bw2njXguGUvWupnJ7zFwM6AXQf63gWVuoVDxPAnWH4WiNsv1XiGR1",
  "key17": "2emj3vk4VgTNMit9ee8CmqrL9RdJ1WgtP2NaQCR99vmsta9HDXAqtWbZ3KzEjo9c3bUSsXxX5poUUpDHnK5ZkkQ1",
  "key18": "zWWJDxVckftjJyAshwBgxFrE9hjqWSMB9jd6tq9Jt6BpaYsCgr5YwzENfXRvcMdf3g14MUTyG6B3RBUcfURZ2Yh",
  "key19": "479s2Xk5KREFpWJNhQVq5vQ7SyhtYCb9ZtWuCAo6JHytv5R3EgoZZW4ZRuew39bQH39dpwU4Xwtw5MhGveBmTGYY",
  "key20": "5CsaB2rhkrEecdkQWpnmXXqaAx1NHzzeDDrxQUaribQGMe1Pm5oYFWwUW3QaHi7FLSdCqdPW4NZJC8r1GwQaJQ9y",
  "key21": "2xnkBqQBEwFvjcsVyvcUyu15LXDxnoMTcNzLXcMwyvPfgdPLhz6XXoEPrk6DBTKEBYnF9L34zKAv8SWjqP4FpeeB",
  "key22": "LZWQqe3SdQ6BRasRfWg5srYFWbRTnrz6U1HG1JuZPbnXyiLGuvQmZoKDhsHoDGejpxDXCk1U2TufXYJPRUAbpEJ",
  "key23": "5cJbi9Fdkm8SmeKDKj4JK56MRT27GrYtCxC72g7T4grgf4b6WK7J38uxSMtdKKm4YjrPZD9w1FpUqdACBq3SZeXe",
  "key24": "3aMQUbp5rkXpvicAPdmh5WhsbMcpG2wQqHjEeza14wCksXG8etdjiQ5Fo8Rnf5hpztkKnahsNKhfoDrnZNrH3sZm",
  "key25": "3cQr2CMeFbM76h1b6iXVeM2CDQoe2dDN2UTzdUnUsXcVHxFrhsXZW5ao11ZTVQLdZvDYuGvmNHjMfQRaHXr479V5"
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
