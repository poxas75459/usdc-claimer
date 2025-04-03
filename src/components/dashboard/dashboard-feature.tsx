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
    "czNFewUX4qeYj9isjmmUzRuXLwBB1tbE7sTHpep6iCW9EJZb4FhFn5kVLo2Fzjx1WzDTy3u9Dwn5odvpixZ6gtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AC9TjW1d3pJZhgqYFH28p6R8egsdDk3BDStgBYwXNfPENPJHYG1farNYCB6b8Cd8NvssY6Jht7SatP2MGynJyNS",
  "key1": "58AgnFnkgrhBGpfjZLgoqNdQu34UxMiq12rubDNqRUXmS6DK8w6FhXD6aAGEPDTYfaAYYG3nVeQyp4LvM2hkgSts",
  "key2": "28CDot7AJKQx29aRBpb15vkSBmPbT1yxCT9WAFtL8yjVDETmFrBzMV9ryDhXLpwcDXF5YDUjtjKarjDHq5qVdEym",
  "key3": "LTHU8vwVRbjZGMFAv5sPFvZHKyCGkauZYtnVRYdHy1dw6Hyxw1uvhEUu1HRpt5Ev32G5wttY1VHizJbDnpMDsRb",
  "key4": "4NYvPGMzJdWMaYa8hV4MYXM8oyQmETgALJE5QNnkVk3Ec8LHk2QtXxAv2KDYsp7KXmD2CUkNhzNsC9DUL8cgfetc",
  "key5": "64Hq2yfmga1Xn6cZsAMXFWufD14WaZzJvvNayc6E2X7GiHPvAmsNKJ9rkdQJgYgkUWFe5snVaDMphkhmgPZG4VZq",
  "key6": "4X1ABYinQcM3kK2YCjHyH6XDKnrAVf5zDarWn96Asgj5mxX6qXF5onRvFeAF5pdSCswUmJmfaQkvWxgUcHUgu5m1",
  "key7": "CKc3JjPrLQ5pRhA49dv3T7m7WqmHMqmGMr8EJ1vqEBPhaTTTwED6WiSGHkpvs6DaM89b2ddyKwXZ5ZCf5CimkFb",
  "key8": "2U4yHSaC7d47pg9FSHhe7GXrpcLdhHFwNXDvui5KZeS4fxaUATEJvXq5Bviw4cUVWwC7xpd62FcwP8MEESNaHx8f",
  "key9": "3HnWb9K8XqiNTRKEZkfTYW47wLmhMJ2xUUTYSwf1ecN6kV93U9DrFsV6HJsfKCC1KzKrsmK7eJinsoiE46MLkhMW",
  "key10": "5GJPUwAyS6pih91kESdAVYrZCBX6Q4VitpQZujxZouvAxQD2THDw7yLdwhck3EPDVUu8wYJtcwowe9iGGxGu4zJT",
  "key11": "5UhhcJbjQ8nZQaRbdu1hYj6AEcxCA1d17pXUqzuKcaJDDKSHBEbY3SKfLBSaW3jZVnwGczJ88sJGKGLefNiAvnWu",
  "key12": "4ZLRBLuShubWrdMUsfDdcQaqEB68FbRvKLEJkbbVnGCHyaWLwquKmV4iBaGiKr1j5oSntHedvXxhBfw4kyF4eGLU",
  "key13": "4bqnzW43zvgMRKsv1UEwXNu9uto5NNLAmE9BMrRCgst2ndYkWoyoGHJpw7UiRiJP2XE3mesTXMfVodKXHC8i3qsS",
  "key14": "CPFM7YD24FEzjonKdrY8P6G6kDmPoyuSCcyWXymNxc22TvLb78xzhq9E55WtVDT1xA6oMDPKS1ZfqqzCdRFNEEr",
  "key15": "3BZjd1AonHNqQpxJWorcFWSWmscEj4bBxbNFdzgTG6PbrbLFKoUcsnYh81tBe1P5CLnv92J6DJ4CEN2vaJPBn1bD",
  "key16": "2aRr1G6oVcKEB56aWkMK336w3RhXqD7KgudpxBidsrgdwovdyMmw4djLfzBM7yoaniCEFJmRUzdBt66Hb8WNik11",
  "key17": "4vAuo4fP2tNKDG8en2eAbBNo8PJsyPjmHuT1ytf2qQZkwcLx2R77MAnWVjm1pnBexYUpWSnJrFf1eRCHzHiJpubA",
  "key18": "2S7mVThzWGJynbHa3dhktQEEpxbcyQpF9j1UZH5yhtehd73DmMFXS5eJoQvkrHHtXj5xyUpJpM7Kuiz77Dsmbh8Q",
  "key19": "3Lj39qoAWe36Gq4ETwq2DpgCe747fPGMac48ZQMtu7evgv9pmrAUk9tXZ8RDaQrSaQfVZGDnSSoPSH2Kf9mHoakC",
  "key20": "22FjerDWwWxk9CXntEe4cgV1vATNKoAuzKAzFnorBnVTQP7rQzi66K39nhaUdSVLZs5JLJ4TQdGBHVa1BYaAVEHm",
  "key21": "gB3zH8uQ6eGFuW4c2qAu9fRqTeP4k21kLgyzijvfu95BAQfu2kDWsrkiT45NihXG1CbSUnET763ADq5Pc6Y5DmE",
  "key22": "5pkbsvR9P25rikirtSo1kWBbuKiS4Jwt4snh8uPHiMh5Hny5KxuQVH6mXQuh6QswZbVDChFHRsvngkoFw4sYzPdP",
  "key23": "JY6LQ6E7cUMYzHKhfov2MLcXNXF5Vud8fvYV9y2sqownpBG5TU8uCPLKKGo7R8seDbfAQg5RGMC6BuEm4B2U3FD",
  "key24": "4B4Jo5avF9ikrhDdcRvpckN7bYMxdiUJhJyURL8YWLATFqASodkmXCachx6VaHftPry7ZSgp9MXjfmRfhRCNZxwY",
  "key25": "5Z6vuzTk6weBdWK8yfwBedqnGQ2wUoUoED2vLvBiwCEXLqoDTEN5ehXRjGpVr5hvCnFYBzqKfQjScZSRRwDof4YT",
  "key26": "g82NiWsh5dKq8yENRQdCyNtxhAXEVjtqBocS325GNjwb3ERZFgwD3n86n9nBKGNJVMMWd6NDJnEcxpTs2YHuS1z",
  "key27": "5r57LQsmXBvfxaWXhxAmSGjdjZqoxB69YUP78VstaJVpLtUBHojCUoTDu6RrjKjHQis6p8yP1U72tBYHnzt7vzq9",
  "key28": "2HHUx7g2322bffQEPrb1dYgHVAvWCVRwK9JVAujQzxgX5tVZ882F3qyw1nTdAMVWfSB6qRryyaB8z56rPtPJuS6g",
  "key29": "38rudJ1y795ty92Qr1oJ4VkQVGxpnWjtKiJCLRE7WZ51mHiR9RV5Jg1xpZWnfhuSnvyEtoPbgPzFydfzrDq8gJ36",
  "key30": "2shrh1rVe3W5vhgnobMgQ8TLDHdSk1ibhfcZGFcxKLnNabycLS4wggLw76KgqvPXC9onFpBu8yLf28RHmktq7hEc",
  "key31": "3Kcnyiahk8xJMJFPspUy3gEG6x1Ri4mgRxFVSuDQx5vTvqVU7AW8JWKjA6Mq9QbssmT9V93K4c1gpSyTn3cBA88w",
  "key32": "WKXfXJG439DeFhansjP5zwhySzdLnq3eC6D8zdqXZWDxtxKruWACMQNqbxnVAWiFMCFRHg7FneE8TjBnyEEJAxr"
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
