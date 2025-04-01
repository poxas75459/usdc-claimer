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
    "2YUFN8XwTB28orWQJMSGYVPwpTRQ3C6PFxfimpTpeAaFnmYPsfuk6eY43euzpcV4heGi6ZcbhrPgC8dqp4tKLWzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beHXX8A9ZcwnQcg4B6zkkJ9kqb9bYziWA41fgLA4VqBpwEqDSdNKzxBGrhuBP9jbsB4YZ7xnKtKwU7L9wG7ec9J",
  "key1": "mUXv1vqVCgnSMUECzN2wGMsTu87oVJzYxXnLjLhnNLXCwaP3abyhnZ5Zm6zCb8AHYMzpbppKktPb1ddGR655L5J",
  "key2": "3UhXadnHKh6b1x6AiREhkZK6Qeu814mTi3Fhm65tJye649xjiGk5qaZ6RFyyLeNdUhBH5CkDoGJCCBz4xHdxJxT9",
  "key3": "2YsUu3rGCpfJEMamAhCYkPeQz3zXH77pD2RU8akKdkRai8jfo1SJr6YGfqWPt19BeYT1S8U4Wfceh8XUWQRbgEh6",
  "key4": "276bW3hMWghwKhuUihVRVAqmzFFpgzm54mDAZ6Hg9fbthqV7D9WrruttouZeqTp4M98Q7adrhUzWiFeJB2wjLWfs",
  "key5": "3MxcX56JGoxoFk5bomJaf8dGLFmjkZesq63yQfroFSwqnjXHRHJCZLdmz9w7n687JGvtQDLjAAGU5LWCQYCztPLs",
  "key6": "3JP6BeKq4vcmQosnhAipQaqeo99nyahhtKopE2kufmqoNQyo4PtV92ZK9qonYeCibsJZpCeaaEF44xHfxYrZSZNx",
  "key7": "3yxroY243ytbbtubcGy1sALsReuJZwTqwm54eRBkKtSozQ28PmHoboHnGiqnZ6GRraBja8DAST3R1Gj2cz8KDj4i",
  "key8": "4UTQo2X6dv9dpwdbzD3AK1rpBKo32cCsKaT8fRhsbX63DDBcxxcs9Aq7KJuWUHtLuaSCBnVJeTe4bSR7jcwZeSVN",
  "key9": "5rtAFwUebMXJgbRtFNLfKuSBU9A1w17LLFPhCuxjWE2EHE8b2PjVz8yT2qF3wbtgQA9t7akzZUC6oxrq3ER62ipv",
  "key10": "5wYw89LozcvGcoAQ2fRMUTqE8571tAWELyVi275CqRR15v6vi28hTDVJTGofLCKbq6SCKAZ9CQyDMTqVMKMmgQiM",
  "key11": "3C5HJeT8iw8xC25wGJ2uwMyE8HcfW1yxFUhMD7dUFoZF235NWcbbfPhBfcZr1XpdYkJPdMUPcjaytTaisHHVsYAH",
  "key12": "3RnUZtYg8Y8Asia2rFoJGdEx5cAo1wuFYGoeGX2LkqbQjuwEEJ2qNeGp3fHQs9wR53HGdhHzQu8BwDYiju3vP1GQ",
  "key13": "2txBZwS8hdAyVWzJT1hLamv7KZwpjKiYhtNQnjKS6GmKUyZiGqrPMcDRA1ZsS4xX7DFnc9ykpb1ghmbcdG2WUdeH",
  "key14": "5wL4k3RmrPKu8FT6TekwGEYXCDhvyzJWUm5JWzYNuzSeCM4r4cM9Pgk49rUCnXwoadQwcprAzzNVw7Uj4pvq9Vpk",
  "key15": "2titsnT768fQnuz5oNxjTrauER857ufqSmwsQPVDXXKM9s2xPV3dvLNk5BvYKadVYye5hnkGjCYPhndd1Y7EEHfE",
  "key16": "3mcTHFDwXucp4kUzxKM2JsiPK3ntZiULgRJLR69NvGJXj2z1rq6MANNvKx8HnjQgJKpbts1cXX4P6KFZQvaMxwx8",
  "key17": "GNiguaE4sK1So4ExkmJ3jMdi4fwc4gjoaewuWjGErYT3u1u8YTwzv3799otzmNEHkw9PrHcJ9DE59nVzrvJ4X23",
  "key18": "4z4q9BvjBNJPSaLQyQWUY8korvfAQ9Wn1V6TLow7bkcP19wfBsacCEFWjEDmGwV9tS5kFeBwqRTx8ySRZV4qXkXS",
  "key19": "e28sQCt6goy1KuYM4LVQ24ZYyV5ARga89yDVYnXGCB33qNDQyAPhwtiY4GzpRtVuZYvKgVnRC6hoXKy7hHZSZys",
  "key20": "CN1rKvoXBgSMv3PjM9PZTtj7w3soJQWRYBGaLkEthSpWa9V5WPrrhTJoxrgHK1L7vEEPXntuDmxuRM8QPFWdth9",
  "key21": "YAZuQBp2wAzov627dqxY4zsvGHbhKTKRXS2TK9Q3jCfXgAd6CKR74qqCmb4EnHKgydphnnPhwFYAJuf9fup6h1k",
  "key22": "5KG7TYWrLaV9UgezpsD9CgJT54RfuXYwwQJe1UvG8iBxbXHrtpYPLxotTCgthQ8nVe2vUVY4w2jLwLRf5AzzST5x",
  "key23": "4g5LKPKvHSuL2hDEXWZPbyeC4gkaCR2YJz8uagWmtCaXadMpBdwr28o6S13jfTLjwZm8eS3i6GN1hHy7agxiWaAn",
  "key24": "eGkd9o3EUMXUP5XjisRT2DXsBeT5P1eaQKwdXVXgGgGax6sFxKNbS4KuSXz6dMVUgJLJSPnNaxe4btUkwq6F9jG",
  "key25": "27nbwT57Fj823vCyHqtbL8Ff6nGgB2mdwfSmr2Lh4RsGjZFMhDKpSBXVMkubqMoZtYuqD85yhCNyYGBNFt9awhfk"
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
