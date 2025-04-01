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
    "25tiBKeszUUbx5oaRAcRJrv9ykBzUxqDvytSwjJyHgF7K44SxYGNH2ZHhe1fEgkb7aASEQYzpV1fbXN91MZBWa8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GvdZay6futGeUyCRjuqqr1AyB4obYBEqcirPjn88m4ucuz2ZZZcXtdxdh8j991rMBruJweMGZxsW37qyqfDWuK",
  "key1": "3aZwZ3FXAv87rJptxvfBNA4is8VUqt4sGFvGMvXHH7ojG7bzccodzRhWEy2dnpM45iWX5X21T68TkWeCyhrotH6q",
  "key2": "27AnvZzW75EvhcuHjFTLhVveg96UKM6cQ99nEkQAJA7Ke71jp2LQaXwjocZDuDq99XxvoHoX1vPansTPg5aCxShC",
  "key3": "4AaS1JopSnV6rYWX5LPwFBN4Qmp1D7LmqRMhjxRqWTakmGjkZ6dsfbZCTjQyGgWzPtdjsdKycJ1ChhSuNZdzwY2Q",
  "key4": "QZFKDw2sDFHDLZXt61S3HXiutfrxyY8YepNKUisnyVRUVB3txAFvUCbQj6m4DFEuNuu3FJH5w7kxMFdd2kD4okw",
  "key5": "5PwES1G6Npq2etbJshLxtAKd8T3LkZUjcPiaMy3PgZPMyiw9AJfvfJ2NTWZWV4xYXQbV8z9E94CUk12cT3SfcL7X",
  "key6": "YwLTMZ8NBzrRxzo687uaWYiQgXAkb8JmFZ2PGsDkpE4qMShhREmMGpPxYFazL9em57GMnYnkgc7ZRqtMdKNkvu6",
  "key7": "2kjuxSYm5ieY5ZPgMVZrtGsK4d9196oRx7vqvDaGXA3UhdBjQcomV9aMpXTKEn7QLDfh9d5PePYqVazFYdyMr4zP",
  "key8": "2EsDhqjFPud5CqA4kP4bg8923aYB9iasrFn1gxyd7LrZsYXZ483ddd1fX2NTYYM4kvkbAKJcu9F4Hs3LafLCr6P4",
  "key9": "58M7bAreSugqrKk3euqm4Ag1JuNxTLLtwV7tUCqK3yqnUywaMvsHfBBWmXr2S1RfLstVTjpjSefY7FA69J2yQ6gt",
  "key10": "5X7iTvSUbbasiTQ55wpfBpg7j6nYYY6HDhLoXQfdUcjcqmZC4VKzAdmbeiBmyV36StiK3nuHFryHy8D7YzhZGKVR",
  "key11": "5d1baWkdbQJYsQgVa4FQJ1XKuh8KEkdr1849Jkfr2M4B8aKDRALipBojWehyxnSbAsYYNXUq88YDDPkM8B7cBp2A",
  "key12": "VTApwxJEkgjPkegQvLia4juNGwjYgZa1zx17y5mQkA7W83fTL5xHhv2xm83nXi5t2iKw6s5LnXg7HGLV7YNwvev",
  "key13": "4ERDs5jTBVzW7bhGnWqEYNkWxGuMg15fq6Zvudk6ftRkmp4kJnuGAKMrPSoGLrkwo4zfNiiKgP6VYeDA8aqDjvEr",
  "key14": "4V5ktQU1MhKFsbcaBBubSNB5vKSGaZQP6M1cAHwm7LwdVKyD9veNCzxU2MRbUJMe1Pci5X3bNfqT1Q3qRAWKRbzG",
  "key15": "yRz7dW8DN5zYm3LES9PV5oUh1PUzE9VdQCR22CynyUome6v5ud7xCQfwLcrGy37KzHNxCWPY3LcBQviLn7Bidi5",
  "key16": "3LMfArN1Dri9bdf33MBzCycKUqD7vcsTfJB79w1oLBLByrUppQPo2iNPpTauf11Rh8eNDjaMS9bxVmhHU2peu3fY",
  "key17": "2o12bNX8JmyuRHCBmiyDTdt2JR7fvXvBNqqN6D4L5aSkDb8gRVw2ivT5v7EC8HGT4FCDo6ZQUKDZhBc3AcERqRxa",
  "key18": "51ATDxbRoCEVZfoDbu3fNP4U78odTWomJwyNHdpCFo9YtszVAE78yXcqkqKaiH1yMEeM5Q8qTa2d1bc7uxV2pK2H",
  "key19": "2FZFC7q4TzbCBzUvoC9EVHoNBrWYSWdYkUEdviAuzgavSBU8E2DzgitGU5JwyiJZZ1C7CDqYx1CWrziyJ7SWhS7r",
  "key20": "5Pa6cNByBLwACUvcnWyFdxWG4FN1GznuwW1iw8Frov9gY9iV5ecMuTvJzHLZWu3b8oiS3gRPM32YwB6gnWiebdi5",
  "key21": "5G9QJFhUK453LxvG2byr8xohHQTV8u7g47D7Fjm4fqaDbJx1XT8ZkWdiXZCM5Sjw4srGjaBimLC6CrTjZzwpwkFM",
  "key22": "3npUondsk5kSW3pDVsuQscnBAeKzJyjg9CDDxBwJcMe2svZQua8a8niquNAbY7CXsLYXhSQegF9jRtSCAMNEkYXT",
  "key23": "3RQV3vMwNGo3272AMdqUveGuidXqNTkwU7zPHf8WmQZqMNPZ2NtaZE8ZdxikuW5ZVgZuqveYtxAZn3yPNeKRf6fh",
  "key24": "2HnRbj9de5z6QLjtcSVeLrCcyJzWpHcpJnVNcZv96efx6JJkn6rGhvdLmz7A2p55Fjv9BGQo1WBpZin1DzZVA3ea",
  "key25": "5DTKaAQDQFZhoTZpeUVw841TqpYE6oFq6NCzPVXSnPjgUdPPxaqQLUL5N8CPqhZsVA1Bf9PB3SYDAfCi3YREdzoM",
  "key26": "WSpBRQJKSQ4ggUL1HqMoXAi9MsRbmt65asrxHTZzAxwtcKK14NujoeT1hf77tLqKSYgXomk6JsiexPNs1pLACp4",
  "key27": "565uBucvPMfwxtzpzEUWyzMtDgKoFf8Qp52HWAUZC3uzqzcPD7B6T828oMkMVpUsuWVqMx3NapGAGBLEcjuXv6A6",
  "key28": "5nUZaxxLG3epErSThjWVCyjkmEoF8kQ9EySHtc5wv7Fb9nK6yM2neoD6gGkr1LhEwCAbTjEMCzCikyuaKvff6K2o"
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
