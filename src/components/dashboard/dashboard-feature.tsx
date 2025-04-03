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
    "3CazE861vCQsidzLCvxK5R1puc87cbPgbsWLiHTJ75NEtKor8fvCT9nEquwpd32rMSBHLV62cm5msvP2TncYo2z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7dAMADUzeLGh5jpzm4F5ETpLgoLis8jpJnUKTN1JU4b4fjVg5tKf18zRNVtjuvz2C5taNxoB78d5LFPW6q2UN2",
  "key1": "59y5nKn4XvTQmBFd88kSnHKEuhV7bcuQc1Crisuy3Cdt9fUpS6NiURQ62fTUJt9f4k1LrMJGpSAshU2xUHhCk76L",
  "key2": "2njG5SfzAmUQ7VTFZun4HSLaw4RUmgtP3cS44BB6mexQwdzXKWjUgRxZAYKL3RvYV7N7jpzVqJgYfA9jmqTscGy",
  "key3": "5myyRCEA6TkdRJJBSa3Xd29wktNSJ9t6eXzsy57UhR2zTaNExDHH1iUavNpXMkXU9C6BoJzmfvFWS7Hg8EYSn4DB",
  "key4": "2wyXLLn4VVkBEyjp1MSxEiGrmyRwMTsUDYobDCtnkQENNKtQyeQzaR1ZsTckf4TqWCTKHCiF1nGg6PUJSkVQSgCS",
  "key5": "43kKQoVgQUDaTQGgCzAVyAbyriU8bsKVcrmam6JfSAV8JnijheBi4n45oYgcHsC1wzS1sLYtW9HkEAvBgxiRKgHt",
  "key6": "5a5ZFAE25UhP6HFdZz6NzwtQM9Y5cpUjDe9pnEUZ1c1bM3B7CESRtDj8CeZ5kFgGPfpFcco7LjvmRZ4396W8aCHL",
  "key7": "4JfSv4jnmb17X8pYrkQMXPUMhsQKge9EeNgz68e5NrUAzgFquZm7kA7NmxgwWgKhBTLxyKLjLTvA6TjU4KrtnjLQ",
  "key8": "2nBqpXA3b9AVmVZDZibf1o7XpaK4uDSH9mmNPkk8mhijUBK3quWeVmRixxQsY8y7QF1aXB4YBdMv96xZivGjCYqD",
  "key9": "2mhifyieEWhhmdKJxvUBb8qf5KVEef3eKBowanEzbgwPv6tRLsy3E2cYK5VA4SYi8sBenh77eVmYxArKmdvpYVfN",
  "key10": "2dDX6bZa2w1DQWbNQBkEJidboSptPhrspgLntUkiH8nVo9AXLakF58ckLVRP7E4AGWCEMKM44iziQ5RSicw9qmYe",
  "key11": "4s3YFUfNvW1nEYjdmHmGPbVA7EWpyAbC3rkAC8wC6f1BdpdSiyEYaR4j1Q394rqD6x18eEmBfsi7crXDtv1WcPaJ",
  "key12": "5MRnqKK2UWFidcRiPE8oSgtrPigiPtv19qFoEKqam12hhtkeuyFDMEJK7RntQKwUcYUFYY9RptTz3UEYAMTXCRR5",
  "key13": "5mUG46cUSJTSxT5Whg9RyxfEApnAsKbKYgLQRGvFcDs3d5MPmonxLhazYa3jWx18yhasvuHFfxUJsz2ZVFvWX1QU",
  "key14": "2uF9jjHLrPK8rSaXW41EEZDma9Ds3L4vb55wT7e5hzWVBY3k452iMh7TQuijufTWcaFnaqf8D4RHE3UTeqpSULWs",
  "key15": "5ozQnGsgmbvTBCa179HmTVRxvwybJ8tNNWWUmydWxrHQsd2K6jnNdr3DKyQw2XgxLbWiyaR7FRZ3h9qxSQvFMHkC",
  "key16": "2j6NKD5RRF3jUnm3JkFz1kHzeKn428fVYX2UgppVqCVL6wBDT6JCWiJ3Zj3bPNexGQpKTijXsJxLJPDdhDWFa5Rk",
  "key17": "2VwfBsoqb5R4wktmFSb1z5bacyTNHaqyqN9W6KH7GTYFGFHfxiv5Y3z82vtvkCxp93vZxZksitRjNsfDgBC7XVqm",
  "key18": "4t5vpTKDRY56xR8khW826C9SxtfgBwWZwvCbVsdpEp9pt1i2Rap1w97woCFs6FWrbfQfV5qNvQRKn3jLF32Gner2",
  "key19": "SdMZEbiLF3iDBYjGefdZbeHpZf5QhM1icJLDMvk57jQ8Tv77S9Ni4yEyfgHcDCq9N7K1ErwAAMMgviJphwisZ8m",
  "key20": "2DRYLDquPTwC51XWgF2WDjVggBCbbxsvTeQ82RgzJcWqXMFXZcwrjJmFe2jnYjKrWoubd6uctcxFppAiFre5B7AC",
  "key21": "3bMC5V4NPkXQab1Lfuajns4Lo2qw6RKtGs4q2aSYXatFSQpRgzbmz448VSvzABoAnw5ptfGJ7PEW9s68GjfXECoP",
  "key22": "XfWgbxbncmxEWZW2U2xR3Nkr3isbeNX5A922PzHe9WzLk2mdLUrbWTBVKLaF4i2QoNpPGCej8zZFZWshVA6rYaQ",
  "key23": "3UEqdgYKGhWyy3Cuvd94UP17CLL5PpzcmRgoZ9ksHNMVjR5k1H73XK7nSWyh8a4TYF8bCH4ZmpbvbpQoXp7p8fHb",
  "key24": "3ShuHzLQJ2YCAPQ5vw7R8Sz6fUCDeLPQ8EH7ez4Cx6NNnzoGRoNQJVBp7Pe2C6Yrsc2sgvZJffJFZVvT5QEVKMs7",
  "key25": "3q5yPz9LfKzwfnkf9jH2uvvwVCyi2wL9nyZn58KwRTQQRTupjXm1n7p9Ft5jNQdStFQVxNMD58sv9T7qsa5UN9Hd",
  "key26": "56G1kahw4ysD3UDKhnUqr3LrKL2yVoiCxVCnDzL7tb3489MQHe1kMmcQUTkHzGDFTB6BwyjG7auK29Cu3skCrXAp",
  "key27": "4SzWCn44bxDSS2S72P79CfPdmAQGpxmv1GSECBZQHcsosW5ocTjeYi9dHieDJ8GQ5ZjJpCfxdNUCrV4P4NCeHrzW",
  "key28": "3wFREqfJDnNzwhj6YaxhWXPjj9kgPg4GWh1ecdPBE83w6B1nk6h5p8LLiXVR9gijJbhvH8TJQu4GDwmhRAATpHpg",
  "key29": "4W4Fg4Lzs9jkJYTcxtittBYZoZTQ5n6d9zB8JRjZJ3nkRJVMKPV6MUyD2iysx2xw2cGktEQq7bbEvYkodziY7Mkg"
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
