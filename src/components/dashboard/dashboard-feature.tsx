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
    "3ttHC62UbGpCdeHiiTGv5XakJEmv2FrC5VicJXLPGZX7DPfbDwAEoURfahfEK4yTVNPzZYUnAVqRucFHaNVhX2Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UT6oH2dL2hdeLZPAtNB8vDtLSvvztTapAjKqEE8HdoceYqkSxbx3L4xEqLntDgghPJLotv5cUXWjmQsJefms8S",
  "key1": "4w4BoU3Ra4yRkjRzoTCnZNNZ39bwbq6fshEg1yu6Wfm8HACdUs5yFuhV6B9PUHTFTqg9VskYWx4jHxiM4Xjq4FCz",
  "key2": "3FY5fZrr9SeGWdgwA6zfAis397g8L5UvbSpp4EDnapSxxuNkYWkWcmsPMRM53XGUgHuKdBnd65Sk6PTTZGXwLqLL",
  "key3": "2DniuBCP92Wu8rZWTJ2YhYbBc88YXyUuXnMw7QxrcPHa7C3268V1xoLVMQqbdXSfxjs6TwEuoVn2fcVnnfBc4ALx",
  "key4": "3fCu6BeGB9XqLjpWyGdAPyfUaq7ACNMyz7xWj5eRZ5niMSAjpXNt2RMLikekPEYCUor9Mcuxu3HMX99ZU4ZEeEfM",
  "key5": "5TMvm6HUSdPtYW8wY3orhxCdnsusZNEBxy4CAdavo6NCvRgfN4UvQND28ukQ13voQMmSJo8MPCH6TE4ZXJzUkBk7",
  "key6": "3QM3bS1HDFQmzFpuJjk6TzFc4boPvAczupvk6Tq1e7xS9rP673ggbwz8gyw9maDmnyKtwfGb1P1tFXXzz9MtMrcS",
  "key7": "4HKVJxvxJuvBdrpLhF1ZWqzgKtpyKrKq38msjzHTTQ7nU3TpnHUcWBbEgHvGCUHYaz4Un6cGwC9Yz2QrqADG1daW",
  "key8": "4BkP23PwUo2hyaUqAEzZGrYFXBVP29UWp3if4n7baWtHVTwDT7Y4D5pkiQtwXp6gke5KTmLoNd5tvGKt5QGQh4SJ",
  "key9": "surUAekw6HmZLaTRjU2i8gKRkmTr4TJbU2eMmkW6HPJL6CX4cxFHPBANLRpsizSqFu26C3yJ5kkDTBSvkT3QuWs",
  "key10": "3kyAnsnGU6rW4yA8aYoNtJHRPit3eGgm9CxZBhhrJbKAVk4uupUSrQpyhd2GZxZ9CtNgbnfTGQMZusR5KaWPKzGh",
  "key11": "3cf5AoT8ZWx9x4rFvYsizzvK71ECb6RswUS4zxNkpVefzuEBjULKus176zzYnQCbqyAuj9Ufpnqia628CWZ3pe8J",
  "key12": "EsLAHMopFxexDt43Q5ZCKgmWjZAPGCFxHTMw588Y52fxdqGvuFBEWzmgNxa9rxCkrRTNjGCrEvuuS75MqqXeDsc",
  "key13": "4Po3fwDi9axG2ahPPYrzEAoddaNYxSFDv99xdxcQepbpEsg3E52vmRus8tt8hn7YaPjgb1ZRZ3wcDKaqgauMi7Vw",
  "key14": "66SeaHWqsDjAD1VdG6XY7x1dzJirGuwpgg8Fqc5xae1rHPDnrrKeZ85Nc533L2Y6PQdQKNKHB4BB3pshZ1GrALzU",
  "key15": "5TSKoMjx68veE1HkDF1XPJG9KWYzgsnUVDeVPN8xc6o73jvxQM9TwVFAf7bn4H4vreiPJ5QaS6kABQLe3DqyyJC7",
  "key16": "3e6gHMJhXT6B1zpbApTjy444Arfy8o4NLwkewx1xvyKVNpTKV2kQcEmKQn3ZCLMoj6CV9F3CSs5tnSCh9ozMCHTQ",
  "key17": "5J3oBt54C1RCbXiJQVE7HEJZfWrnEczsa3CLiwdBvJVWD98HZ1q9bhKzfr7ZZjSdVEM2bwbx6Z748Xrut7ZW7yPM",
  "key18": "Y3AQNjpyopU1MitaVpXgsVqWjiALRwejcS54HW2H6SfuGuo8BFWT4Fn6d2Dq92XyCe3ZTq8mPEiQnnAWGa5fjss",
  "key19": "4h98XzvxmfQHbNh5Vty63CKDEsNBJza5iv4wFp1BZvrbpKsY4EdWZsniDk67ETFSXqsFWChEwxCe1MgiP1YfscJV",
  "key20": "3qEP8DtkF36GmuGYhA9U7meVWKmd6EmDoNWd94s3waTFLZHyiytKN1kA6r4rU2kCji2Hvw6QKgFis8iztML7fFNX",
  "key21": "x6UyvNELWHcr324MwhRhEUHWgHHkrtT2tfG2NV2PmW4BA6qyF2KXzdVbehHnJKKZdJZEEThcYKvbFfGegue71H4",
  "key22": "65a6mMWVhhPngbKFCsdK7AhDNYzjRd1fTEiyYj5x5q9cyXe9M1nVPGySHaT4TiiAfJyMfqxXv7Pm5Fgwp4mZgTK6",
  "key23": "5Kcq4cyjyoUnvMRReZ2G1CSUNQBP2SFRXsUv45BBjCj61ofvmjEPA9Y33s2JwKoZaAhofySTPbsLxqUooZC5FWj6",
  "key24": "3Et15Prc4VvD7ekqxfpAGYMb3mNEyYiCo5LeG5KvQoPhM7zsVP9jEiRxd7DD4pC66ibtrKRrdMNYRqKg6pgxG3kP",
  "key25": "FsWPkh4Wfj5nHXUeCnHfKvM9yiZpPnQAUpMKQ1naShDnRmXkyqmnd8r1xKX2vE42wWspSEtmBqXLHnSjb1tQ93N",
  "key26": "s3kkKPFy3usxZkYU5J8QyXEoGy6f87uUpEGjb2iC9u7R1JxDS1mzf8aFZJbJvYTbpwjUHu3h3EFT2fKazKGDSgT",
  "key27": "3n5vkrpxuP9aEyRyELtxSgcGYV8jLa4bhDNpMjajd1pv79HJS4dcnMTL8zvAs6jLP8aJdgRm4SvWzwKoQedGRfFY",
  "key28": "4f7nghnKqbQ8PHJT5bHWtKwGV7i7p3osubadiw94STFKWEo6tFtdTFWENU5U5Bi6oeYRh9V2TW4gUpp18QL9qRay",
  "key29": "bARynHyVm2KRB3jGs968fpVJw17tQrqVsUBxsXDeE3T5P8zH3g9NtKttQgt3K45ryiN14vHDz154WTMAHQENSYo",
  "key30": "5DthzM6u4NHWh5H2rBAT8sZZnYX2B3fo3E5Y4mEXE4XmUXnAXEuEsZX3dCg7ckGmJQw4V6t6236CYKm9DwZwHVfy",
  "key31": "5d6GSJGJWzfrraASAw5ithC3ZYc83Y1VoifP1JRGw6VRLVGQQmjLGtHmVpQm1r8D47Wk5bdfuhnpYK9vWYoHk3gC",
  "key32": "QytZzeWteHtkbNz6578fSB8PP1Y9cMQbDy31aXLgjQF5Udzk7Nmcboc9nhF4u29QWjaNMnyXi7s3AZqUNkxZF5F",
  "key33": "2HzS7Z5uEXEnLFEGUdHhwjF8qJBMsiWSrGSajCPVaqKavfC1zG7BeScZB1yAuKW36qTJx5gxDR5THeKH3hR1Zwe7",
  "key34": "23M9TToCgoeLkTfSKjne2n9oQX2UK8giMyp7Nd1dxxW9ECdVbYy148MbkAj7S9KhvD5LAF8ycaEUfb2Zi5Udq6X2",
  "key35": "3PdUjVoyKW3r3jPzj4ugpLTPZ66YHcYYn1uPS2hmeFnuRj2QqHtpTjw1Egn9tEgrKYBK4rCsg9aYPRpLQ4qP3Zf2",
  "key36": "4fXEcnaxPZFhQ9R4QRqDTjg5c1hZpyipm1of76EjvyEk4ssJGPYydymVfNmz1jzVZDb1n8nDg5VdXT4g4YFDZZyg",
  "key37": "xJkSzw9L5mQkEBtnFjgeMmPQphvSH99kvwrgSWYUfQ6CjPzFC5dok5gj4tMf6LLNfkjJz7Lz6aZq74ezp5ACrxd"
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
