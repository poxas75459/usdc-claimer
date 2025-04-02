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
    "bjtyQvMTfFL3g5PEDRqV9ggtV6zSGdfzsPSqqXjmUpwzdCB5BeT6qfnn19E9t2LhjE96qjLim6UJ3VxZE1a1ATd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHjruH4FNYMqr1faPEBghTmoFQ3TSUKLhx5z5BgNTXqobeda3rsC4cf2T13UgsxFiVCuUCbVB82sRez3CuzHpM8",
  "key1": "5rXgY1rxWu9fCW9jeKHk7dr2b6vqjaamTHwhrT2zV1CsGNfVppEumpuqfcSy8kTeN1n2rxkdvrofrgfSFF5tewDP",
  "key2": "2Yw8zGWwwRtK6cS72DtCvfbb9cjDF6CAWHFCoz4w2cfEWZG24TudT44fiGJpYS9ftgHMd3zr1N4tqggCGGuHqBz4",
  "key3": "5YcdCqURfyAACQhXR4JyMVbRVynQZ4PaPJEBDurykbJLpUS6G4WFm9VvPouUuq8Ttsc4bQedQ5htcWcjUU2xTcT5",
  "key4": "iDHRm6zVYZyEiU9UjyAAMBVFKeRQour9M4GTULxizW89oqYKiVWobXeFGahwCGfmztPkiiQPTaztN4FEumb7WCA",
  "key5": "2nQq6wjEDoWLAumrNkjrqmQND4VcvLCJPqkvJgbqwYY6MD1U2D39BvJCidPNHrUKn2xaxnpkRWwpSrcAgYENUiAp",
  "key6": "4NoUrYuP8ji8memrkbs5AarfBWWfNZwa3XHnGHkL57zESKk6rE9ihyFu9gfvfYUiC2UyhebJjMaovYRutWq5JxkW",
  "key7": "DFDo2RmDuxroqeDiBH2Y4zw9jWaiQS3Y4xzajvgMZWPg3FXVShmcjpjQmv9xcquq85nhZ8NaDAKxT4YkPn3UUSu",
  "key8": "bmES4Wy2zV9XsuZbDB5bdARRPPYeSC4SbvnRx2ngMGFmAJrQXyuFPyKJzvEuyyZRP1BMFgnK1vuizxEkrpMK1z7",
  "key9": "41uMi1sAfotcn9SwJsjV4uA6vxmWRWAT8WqUucrZHVyg6oSC3XpCsk8Fiuw24z1kJm6SxbB9cd8o7deWZL4BmBSw",
  "key10": "37pukF2P4paxbqyer4oSGrotpCZs5XD5NARCwibDBt1pPw5wwpK2b4VJX5bDnhegDKWwyyqFPnioXtKGSz7HexuE",
  "key11": "4u2CZgdGyZQxaiNKCfyLEbhvdyfa4Aj87rzwM5LWp9okbbo53zqfzjqAvyZThHSq1RTcLH6oQinc1e4PLXYHvQCo",
  "key12": "5Q2P2j8FE284gXF45Ybm4MYiB5kNFeDKAxfs9zD8bEYi6qaviEZZdCG5xSjzbZUpgZsshkaxKibV4j9yfYc9EyM8",
  "key13": "BT6DRq9tWCDYYVmUJPWHZiWqmDJtybUdDLJRKbtjCucFs51aZWRHR6V7CNkh3yn1evgdVuCs3pWCb5AnUM2Wq2Y",
  "key14": "64mVnWNosN5WVAobyafmZedXNfEDVUBK4PdPHAhrheQZ67uuAYhuirDKjnHP9HdscuEKMRUSHmZn4c3K1Z9LHSA7",
  "key15": "2gHa2uMMpTvAtwM95Cd2C9Tmzn1JJ6UN9hdbVxSx6eY2h4qYrMJfL85RSUAA26apQxxJm5Zif8aDAQEh43vxkJS5",
  "key16": "48q2ETFn5Hr9wqGQSAfdt62tqtUKsqRwD796KE5BTLnohkpNp2FfiwNPEXmxj7vQaVCEtdELCyCYyKcCFCsKSd8",
  "key17": "WhVFjqm526JKgb9VZZf1AcU4fDRsSpc42rKxUqxRUE7Gd5sweNQyTZxoP9sZW9EaMtMXnKjRsSgroWwSs6Vw1d9",
  "key18": "49A4HdCvpdau9iYw6y5oUJ583uvAku2bzSoVhsVaZ7GUEzPvqjFXMuGNCMwtjK96w3Jz4zZNywykVRtTYa7KQuV8",
  "key19": "4bWCzKFxyt3bNwHcDtqxPPb1s3yq56V7jCR2gVFHrY7eQDCuHcawwCaCoXDqmqfZCcQiMLxEfga7unmYqmTcXQnW",
  "key20": "5MLYM6wT4itEjR3VWRKa6tRNXjhbrLDYUbK1yc43VzAVad6QSJmJNyERJq3XjdMfKBbJg7diQyp2cqxtqnvazrEU",
  "key21": "23ToLSzR8Xm3Vsy5S3G4PWzUxSU57WrtUkRFMLGtsqBjAK75GgFF4auK9FaTpBBrkn9ngVKbzTHaHCSv6CN6YtHU",
  "key22": "3N9KKQKzTP7LKLQkhBo1HWzwSuT1QBtLmaaNVmc7AnPHSs3YvdZbNQ3EjTZ5mhMdd4qB8JQ8igRHLJRbDHKKMRHC",
  "key23": "64HDc3LGZpqBtrVVQxn5NuoVXbdEcBUjUQJePbaBkBYRXqF7Lg6dTaayPH3pUgXVDrhZidpqvYkV5gMyKFvr3xep",
  "key24": "2p5LzeU8v1satmgDEgyTe5TW4Nj8SQey36ydNuUZdazuxfipFEWTzu3yS4pEXw7dmwcENCsAqode7qPVuaGYX11k",
  "key25": "3hygVuy8adQVbQPZk253xCgp9kgjC7CX1XD58gu2Q57B8f2Xwq5QerwPPje2X7Z1HAjZrkabA2xkywuPNihUZZRQ",
  "key26": "3Jt7uabTpenPvRKbT5fKL3cTvJ7ob5zQde3QCCRpwzEjuX9b8zu9PUX6v347xUdwooicDC1j7f7Bn9UC7msc6Uac",
  "key27": "Mrz4qQ6wKPMVJF7Krix6k89NwqfBcix64mV7QVXpJHqvQ4gQT8qwKpZ1CgKyYmCJGDiAT6vemjgcRhMCTvzcJLE"
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
