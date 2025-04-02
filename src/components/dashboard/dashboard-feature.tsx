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
    "4YPovPh675AJRkuPedffhHR6yH7UJZkkhCAmiV6jskVmX6FZQsuRgitkMVBa1J4RpKuYuuzqfQSR8nsaqNxcUePP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QvC8nWjBB9izkEXqg4GdFpnV5Djkm4uUUoB1MxcA3qXiWjxM2HKTjoH2RZZddZCMA3kYjeKDncH1gcTJfTFa4D",
  "key1": "4ye2oiQEMykcxjVCuwuvSXVjRSiNrNoyW4krL1DVuZfbNHdK5ciFGRnnGozVTVsxpLDiPSMR7rSrQtQ7mPeX9eYd",
  "key2": "5hfuJ7Cma7PYU9ZzqfLYasMox2zcPBQ1hT9qi9fYiVd49WkxpeDNaerkWyaaiyMyR623qK58gVhYgsBYeeshiAtM",
  "key3": "6iKMVxxVEfMNYdfXAbpxVDumNSWJ3Fyx2bqeYUJeaw7NEEK69asTXAADknLXe19np6xBfgGSccf684KPj6WhzZq",
  "key4": "4C22zFRp5BRL1fF673vZSh979VczCndJiFNC3VAESPE5DgLDoLs8dULwkPubEZqR19hiD99CTwkxXJNWwC361egC",
  "key5": "8P9Va3wYnfgWC2QgtkP7sK9x8p9vqatbcYWL2BtHscVU9a8rxHe8T2Wh44BjfXQG5eaW5JnG5hWiWwvJhWuj5zn",
  "key6": "3eBYNTnaqMofkrhFUEU6EfJXdpU7MDNozDRT1ZbPLZK3sSdouyd1RT1QHEdy52uezfQzVh2DYTKeLtMsna3STfCG",
  "key7": "4oT3CNVmXfTccywAoRbg9uh2uHrhNLAGHGGp7HfPy8VhCFLDoX8LFuZbWT8fJz7LMgC63VC2aPYFqjRwboVyWo3M",
  "key8": "4dB61oA6fhcsaBjQGqwbXU92zSbqA4gj4qSmzjFpwRhDejoHUYw3jVEF6xBainzQmjyAg6Ni1paKd2kR97sJfW9Y",
  "key9": "3KtTv8tgs272au7fgNenEKU3doShV3SLtmAee5bscjGfch5o2BWN7EvuenNQ4pp8yXLS2fN1m8rjRjWYfd7QVwK9",
  "key10": "4MW3yJBQFbpf9oATAWY3E4rBmu1aVN5rGsVmK8K3PLcxHYhTr1pmF9ArSX2n4vezTXmwYJ9bZXvDPp68i9RgM8uN",
  "key11": "3TiG9pfn1DPoujYUaq81dqp9uqcYGkKqvH245Yv4vZGjsXVg1Vj137FHzS1w9XwaYom5NTbkfWUmdpmuRUvGCSQ7",
  "key12": "2ih2oKxQsX7xNfMnFVc1N8GqzUGAGRQpsm8qFCLGySwFYoY2sfGaUxmXmNM7BsipxLhwpyr9Y4KkWdzRc44paTJk",
  "key13": "37KPgbyQ5dBBkc7ya29HVgemXgY3XtpGxQ5QtAQCUrYfMgGsTyhkfthL8rqMtegxpTikmPdMZotq5Jhs7t8KVUDH",
  "key14": "4DH9G2p8oyi97MMD9FqT1h8NnaDwZq212evXTrdpTw9ftb9a4zVNsrmdSZ93om3BQBTvvq7nsMBbkYd6jkpEJiYy",
  "key15": "5KGFYobjHeMQKmwmFTJc3ziqSUDArSrDTitkBn4juKCWzXCQUgGpumJ5ArTW267qX59zc5uUeyYqZj4kRyGLFd87",
  "key16": "PZNNdfh4Tk4BiSobABN9aHVE3y51y8rtzuoj5JhWb1x4PYxUzpUD4MJbs1Kn8z4KrTvRAmSn7kwwgvwmWT7swZx",
  "key17": "8JRsiBj8AmWeVepsCsA995DTtR2Jvzarjoe42UGozGC5nAJujxNZjJxKFGPQ2kiPEBSbFNK2n4zpMK1arsWdkFA",
  "key18": "oWbgXgngLwD7Y7HieTGKk6CVtbdmmH8R58KSVzRBeG6HaA1ZRktw7JYcPmHWyXXP18sRUyzqkgEK727erzPkS52",
  "key19": "3dTSugWEywr1U1DnQtASAzUTaLbmKZ5FE48GdG7tMiqfc9gZdQad8xr8wWXBVYwoukL11hWMrXmKKHPk4G22USqG",
  "key20": "3ddhGZ8bQYJWE2KviRdKNoNKRMkC8MSeJxn1tSLTbR3e7LgFspT7iUn4QA8hjiHByw1JgLB8J6Rwo4yXdUT8QkyH",
  "key21": "4tHT3W57Bb2NZMjyhp8mBD9CqECXGEyUngsAe5FNRpNeHB5S9NrXv2adfJ8nTiKnG3Tx29LZ8g9vkB9HSAN5Q8UA",
  "key22": "3s9W9DFnbQHwkeSttMiTj9aCHmrSLmFyAQdBcxE41a5e2ED9JCX2yAXn8okwVjNPFb5Vp7m9p8ugC32EH4ynz55q",
  "key23": "2ebndjfTQdwbvfEAfL6Aom6qrH8oMumXLd5JS2RjzVjzR5R9TA6kSqJveqbhazvktjAbscKpRm1WYx7RjbG4kx4n",
  "key24": "3K2D2A3eoTmkJnKt9uq5GcBZwG5Vdpir2CmHkHNiaYfA8Hr4JRzovvcdn7FB8oHzaNsDsqq2WGpvXLoKp2P2ojDY",
  "key25": "4oEnViwRvabCvB3z3sdCMnqJFhG6gXLsby8pgsHdpkJW21fBBTZgqfo24aADMR6z2aTzwXyB8zdLD57LxAruRjan",
  "key26": "3uk1TZPGJoaS1PZP3asAGZDwM6prKswe2GfCzAGJdQf2ohyh7KF63Wg2EJikaw6cGjYQRWDeBvtVP886sCkfR6DJ"
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
