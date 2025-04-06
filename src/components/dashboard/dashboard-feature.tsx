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
    "oLYpS78MQJLYggyBDFgeC4dcC9eqL5fM4L31UHQ6dVa98QMjDWzNsXtH42mKDyzvCxvFxkrsphjgekUv7zWeRjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S79kkdoY3iQPZ7vWTnryVmeb8J1kVRwvg5Mi2vnv36vPHGRfJbDeapXaKeNMrWEGr9Qdz3nAUB8UZgh1KgYL4pN",
  "key1": "3rNBoURFEQSaXNeNvrZhRUdKsrVP4pbbaeWHXte3KZXEUoKqD1zSgjMFFJFdSSi84Vp2j5F4Fs95QHcH19shd5zX",
  "key2": "2H4g6MdJfz8N54U75bDuHUVv2uATPLzYfNQMQ4CNJ8vH1hQ2KEVxukxyjiwN7nxNfA4Fi16PQLKwtAcAB3LSJeXg",
  "key3": "5TuWdGXc2Tp3tnVSfDsCkhBvp3KXKFtHjKaPP6By14uabzWdBDHthHVgDAvYSCgNPGvZXwmvXBanFrtUK3w5GTfA",
  "key4": "MF5JEsVCqyeYE4wfKN166ZZQNTT2PD741JGHKNtTBs5PudATfeA5uT5L7nwkDmr9D8WxwvFxk7jpA8LbENG1Y95",
  "key5": "2jDA2oSrkNgoKjvdF81xtSVVMmK6CuWEt4Ry5ion6SjtX7GPc2k9j3UQsi2v5q9few5SrVcd3Qjw4iZYSfMD4Pk",
  "key6": "5FVf7EwVfJByp7Vk4pN9dmbvraud15Sgey2AjsxhFn2WsYM9Gpe3bVKCJKyYHEGuDTBMTmfaydbwhLhzfZJMN1Mu",
  "key7": "5LsxWwG62ygzvRQhWCMASTDPLgGZk6S8KGEWzYDGfYbp8aSi4uJeduw7cLU94tRjUMgnWA9yjtt9jFvaPoWpgmVV",
  "key8": "5NL8Zz9qqh4kwaqHVbdiQiohpyvgoLSuaQiy8JYYiXD9jxmUyk9LDXiUGkuSrNq144LLaW1yPyjh7XH8Qa5dGEmH",
  "key9": "3Kog5p62u2RjU5B8D32TfHEb1s6MCLyNTnY2atcjFuJB95n3BFhEHYcnVKrBbYSZDob1CFRvNZKN3D8YKwfX21fv",
  "key10": "3r1qNBJjrYRnZRAvs8z1yxLtVDewKUVCrz2RnU5PPqCkHcAMEgNhLAmyeY6MG2XHDwLKQE6u6DdT4tMKMmXSXsxw",
  "key11": "rJ8h7X49FNazYu987BQQTq6e5o6Tnm3hqmvyUYkeXtrJ6zVmen9wKzeRQdMjRrVjyKrs6ceP27CMZDY57b85xvx",
  "key12": "3ezBU4wQBc2uX5CpGUozp1drBGz55Psx5oWaiTt7oMPYJW4zbpgAzMwQfGdDjGnqBxbbs95K6wxTSUaNzADHfm1g",
  "key13": "43R827wnbT3rXuG4zqS7dGbLWYFuWiCk1oQsbNAPRFu9h7aqaAdC6D3jXp2ZUZvyFRdn521ZFtvAVcxEAxUWtAuq",
  "key14": "5VFKJyUuQ5VEz1wwMeVqtVrBTZ6WSSTJwsG9rqP5cGWWsdC3qqEJgog2UyXAFE8q8JYFcCFj5C66gDDvuTqWPNTS",
  "key15": "FD3WzjBZp5kwswxoxrHWDF6CJQLapR4Se2wCmXg31JvXQgtJyz7M3gDRzieoKu2qHvRMSzpDfBD1uUUGuGBRhVH",
  "key16": "2UosoDwUZLcxEemGf4yn3MU7heqtzW6epWB53h2pppxsn6vHVbJPULuyUcdpCnkVbdKyxDNZtqrP4TBeL2NUPWVr",
  "key17": "FkZdsoEsTdyBV1NPcxWqn5vPqmMUjyFxdMnuVHKtaXvcsEdLncXeis38QkUzZWH31LxhxZwDmferiQmKFCxs35m",
  "key18": "4wRvLBbnjgfaPTAggyCHhjyMQ3TEcE53XFfmnY6btdYkQCvZ2FGcwQLnrnJy44ym3FcSZBDZvJsX1xb9J7bukWJ4",
  "key19": "3En2oTKfVp8Cqigw7uTNLEwjTak7zUkTGNBXW3MBCKqjk7aieUZLgjekJEKDFngJUyZNESjqDFG5NzJJK5qofEqt",
  "key20": "51UkhDnSLFQS5rgm62AvJUqW8odyfhJBr2X8N3fTSEneCSJDJV9cuXcSJXUYB7z7ivmnqpXpetdxQNDKZmeCRdTS",
  "key21": "zbgQ1fLQXzDLQxWVVZECqqtzsxhpEpWywCJAs3j2u47hWFZERUCHRDBJK8b6xA7Vq2RMKWNtTngtELPrQmVy4ep",
  "key22": "4fCXmqDEw6CFCVFp6GmZntUo5kyDFdKFmZ2PJ9QCS1ari2Fwh4pNj59fafxk3UtHrke2Vh7HjvAkyLUeNpEob1Fe",
  "key23": "3cNaxgMm5o8nCi4uALcyhu4rAFV2rKHTe3r4hMpFbv2RP6GCbsvXeypqmZq4m9ne9hj4JgR17mCJPtYG8JhhkXv5",
  "key24": "aSJyfUg7D7qP4UrLHAu2RgZhtdQ2JtAiiLqfab7k3jxK4KAP3iLRbvfXfcgcw6H11KRYStgHqe17N3VzqPA9Wn4",
  "key25": "3YVCPnvBAQSjdBoKhGm6g3r3oBWpTDtwtswFvDg3yYJcD3oVpZUh33uQeyispjra9M2SpE4FRZfSvm8puGURAcv3",
  "key26": "5e2rx7EGRfZVuroU2xLhMnFfVckvfxZWtPekg9JkAC5PemaxZJeKKhYzMJZqfJKqcznTwaFL6KwrjMTUoWhHm4zS",
  "key27": "J8AYxSUBPyM7B71ri3WyksXukvny1zApSZsJ7HaznBCQwuFRH8oQKJ3UkqEShipUbUdyUd2jqukKRNx79Yf6r55"
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
