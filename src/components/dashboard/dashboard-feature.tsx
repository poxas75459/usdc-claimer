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
    "2hxUqoMzcErXgY3a1yM5xvWDyhaJCxkdjMN5qe4yqSgxLqB47gEc6jy8FpbMdu8ohF9raS3VjU4qFnhy6G7wYDsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkAsaDpiyxNFzxHnTwJna7NiWq2ctWnzuuWzNguUb6H1ykEVvmxAJCfbHNu23kkWuQ4nFbvVoGXfV25tCrzASv9",
  "key1": "65Fa6jKNejTRHZREDNjw6F26xTZYbHtknJRwNFhFbjdfkGfTVvjv5UcoUqbFJ5SxfKGEQYhJ8Cc2qBCicrKfh9Ws",
  "key2": "3U6RhyxSny5x56k6nBaqBMNE64kzixZrbaPA8EYQA9vXN6VHGuu8HKb5uU7twM4F55qdLMXPgKbxk694w2LoGEac",
  "key3": "2yRgFtHYDdzrHNfq9mneq75PSPaVWPv6wi6eLZw65VKt6w8oConwpc7KwsEJJ1tyfhBBQtPZBa4voBNLHQxGPmKM",
  "key4": "4b459wiVDpDF2UBwrtdT1AbdWLwAL5qQateRqw68E9hToK9oXSJxEa4odog9h3uiWhiks1yA4kEwZoQyB3rjYidM",
  "key5": "3dGJ7z92CeJs48UsADBhgzzTUBB8oEA9y3VTem7hDSQRA2FnDikttt1St3hLvBvJwByg2d5rqsx1Z1qCCYokaH8E",
  "key6": "5d4z2ZKiGp9rPbvFSbyedKJagTeggRZYkxC93YxP2h2yChPpCwFGekqutRPAzDjXCCA1Jkaz8DiMfYC3rMsKbrkV",
  "key7": "2kRx6QA9kucMuM5D7TmHWE5zLnDavm5XEi3EkqkV8xdEkYzqXF3BHKh3p5tGEN9ot8rqL6rHTUByjXswbwcXEMJq",
  "key8": "bpsXgW1wHDDGB4hWcfPdC4i8mW3SCSCvP3uy1VKbaJWUxDo7dkv89Tyfh8598hqvMjDRCb3YdewVP4aAHzik8My",
  "key9": "37rEfhdxdp96WhsuHLetxJynLyf5NvNQDw3g5uG9UKkWJwZXiLoxwXbMDPP8eiZWxXkrhCS3rnfLqP8tYv9hkDXZ",
  "key10": "4X8CZwS7J5KpudBQpV9PQhJTzbg8MuH2EytbTesu2WgwENmxQ2B1ZsCj6sBvAtEbV2k7b1ZJ4PVhRLnivPnaWB7P",
  "key11": "353AGetxYzQ9A5dJpj7GT6Denffigw9U13Y4s64whGD7kHWi1S5wHNxkC9u8wK74XnaJ1x8Xk5ZLEurgkXXgdjHF",
  "key12": "5EGAj9cebXsUMBf5rsykbJ6Cw5ZnrhU2WZfzzo3SuokgYE8tPNQpYGcv32xVAWa7un4M739GZ6d3sJC6HqTBB1Ms",
  "key13": "3HUcsbNR1pDNo7FvHrMD8r2SHJSV46KuE3jnTnKrKxmaoF34b4gKsGYW1v6kkQZyUghbPZEhTgy9Lqsx3GUJ5c8B",
  "key14": "37Wzdk4Vxy3HBNcbLQMr8JE47X7uMvMFAxaq4vUEE6m1eVufhYWxD4adS6Hmck2b4CWHNrwAMPnhp8avkGzMuNXa",
  "key15": "cgdFn7pTMkHKQ58PUjfcLj5miDv3LsCTPhwfkE5cTEVRKuY9h39aQntf8WHjGMNsSi61QPHqy2bH9d8AWtR8ptq",
  "key16": "5zierPYEjJUyoZcKCCDV7M1Ji6difsZUtSJQnW8iNMSbLSFRUqT9ZQH3r6mk297vC7oi7rTNsSvjoeCHfhAstz6w",
  "key17": "cBFpqmwuPjMFuumoow3dymBE2eBxiYFvr2mWUkEbQzb85m29zRtkwLbpts5Me8Rta3cyzZFrBrFSdtGY4b6ZFcd",
  "key18": "2P9H6L2bzubN2iw1rmbNfHDehWfBVKA6yP2gknoxfyvZi9sMp5rM3kgWsm7P7zge3dGsEQeudQGrYMxyXdZWVzmy",
  "key19": "5QrUifQ4fik3XPUtPxapaoDRyA9JF2p1byejmgQB82qYxbk9GaSQ2aEAyLJidch8YpyT9x3xEfVMHTtYxrCnp1Zo",
  "key20": "2ji5e3N67mrempfmUTV9Dk92pm2Qfvf7MQSiW1RYKYc64NYybrCnVyyLAh7HDMYtiVP8ZEMZGoyaUS6pg2Ef3zTB",
  "key21": "2N5BdbfHvwEW4mH26VkyGMP79HsV48CBJNuihpUvDn9ffdvyD8t3abe3iETpzJbH74SX7hJRGZGfAzpHWQWy2Ldj",
  "key22": "4aJwYkMzg6t2A6hWLSGugkGvxyfcTQSRmt4giAQTxRcFvJbDdBu7yxPfhEsKfPaq659wXn2XzvaM3fNaNZqffqpi",
  "key23": "32wqXMajVhQL8Xx9UaE7VjHehqBPgSfHcuJMcvSuHVizC9UNwSHs13ka1w2DY1dEZqvYjBZxBw8eMnwcCZQk7qia",
  "key24": "43rkjQXJiRbm1V6MWPSfHRbRca1hhppQ7trbYQwv5MDovzsuwYMxNoYz7kXNFpE7SoQfdve2oaYJaex7mK4okTV2",
  "key25": "2WBXwbicT2FADJEPAXC8H7Xx6zNBEV4dot8kgAiCL1eV2TFpMEUqncNkE9iQ7Zuhde7UUvxKmSwgDWiC3nurABpn",
  "key26": "48uWo4tEviVxGcmHX2hnRDTVXZinv1jvA3LjrZTfG5E4tHL7eo92YUxvVpWfP3esJbnLTJk9VKaNwR16pcYknwDx",
  "key27": "5Jy3NkMotrX2fzhrbudPsp6XtNE9Few8YyRcBGFiMgDLDyZqJeLQJWemMxHPPkhhQ3yvHji3MBGTAw8MQkLb7aPb",
  "key28": "4bAZWapjwvpR2p8UGgkFGEo8P4vHou86dMDYUoudiNfjG5NivhpTqTarkYiPSW3QKhtoXvyFBXS6RMVAF8Nok3gK"
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
