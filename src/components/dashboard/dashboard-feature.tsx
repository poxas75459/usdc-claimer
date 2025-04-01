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
    "2msedNE8jL3doLQ6dJefndUwupXQHGvYZP2CHfu1dRJv1KJoSjkrfCc1S54tmQi3hCiN4uubtQHoER9PqDHuZQ2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFvM1VXWAMUEoZBNKGPkd9avGgKYCnJ3Fc7v59sY2imTydDQLxrVxdC9i4A9bUSzavMYpt3Nzf1Fer1T6HeESTr",
  "key1": "5NA71e3YN8C6qEnYywwGzYEV3Cdgr42xg1cXseDZ6aH1meTP7LwCXp2dV7GBV84pfre18TP8ims6iQecH9jC96xD",
  "key2": "auUsgPQRniiqBsXmXU3yviJDAuQSq17koemUaj2vyaWCufTcPRKpMczhanZ5RzoTELvARsijpMXeKPjCo1rrZAm",
  "key3": "hnJr72imgibttuyUoE6tCzdbY1HoarCujcSNxU57642NbcrtKkL8DdKYLjEdeCWZrcMaCiDZjWwYKSCcWygcGvZ",
  "key4": "3DSEAPpxQpEmpeuKVgSSiBfBPZ6cMBHBQBnbFWf9sEB6VfwzPDNfnc7xEu7nArhyN4tuJZxJfVr5MYnmMnLkbyS7",
  "key5": "3QJrVqPb6vVbFLsMVV8GgoaZrtUX5Jjryugpuwp7n1yVBbiniVpedZYgCK74BBv1g2hAGedH5VsPR2zAMY65d4rC",
  "key6": "57ADYoK35KPqdBhnk9QC1sLVK8qDXxZPY8i15GxF8wfnAPd41eKBkTFhjjb3ZUpRn1XoYUSgYUq89MrjGrzfuT5M",
  "key7": "22LatHBzwR8EpSAhYKAEGEZ6kb5YWSyt4wKFZ9Egz6obhxtYo7bn9gqQyosWqZibNT8V79yS1UFCpqPLvurHiwG9",
  "key8": "Qq3DkYmAJJ53c1U2W7fMMNv4KC2nQA5oXFLLR4oWHmubLAVZSM4hf9uVUQvv2wYUCaiDhbPG1w96jB26xafHVsD",
  "key9": "2ATWScZiniiS66epqRPVsL657rwWSnh2TAPEDEfuuuW2NLwDazV88HxR76mVHZ2Dn8MheuUhjL2qcZYNhdhmD2cC",
  "key10": "2xKJKnbRqVSpHRZSVMMR9vN1QPdiqQkAWDSFxxPotqzr62UMxvVNJUCJt9ahx2cVNa9LweNbibs3FAjVYpdAMTxx",
  "key11": "2CQvy2wnpNDLKxXSHkXwHLTHPoSvdxGj869NZyArsa14XZi2TrEzNCZ5j39ERnu4nTqius8V4Pby6LxK3gLBZwzV",
  "key12": "5rTiyZvf2ujoK2CLdnNhW1mys9LkHCWhwzU7fEtePyazgHbWRZMu5ToE8KCjoWFYPY963fjXXL8ZL76tJZubikjQ",
  "key13": "4zh11NTFZfpreaN6AVpqhvxWuGiR5wSy7cUdFpSsTbNfeRQBG4DguGxgADocuxW3i7iMKsTcXXNfh96a4dz55nq8",
  "key14": "42RSYNZE7PnPDHoqff2HfXGWQgs3gCgBQCTr2BZe3CAbwybd3hHLfYG4oRbMPNogaNCippPRft4a4jTeP15dmG5A",
  "key15": "2BsQbwo7iYbazoNXwBdJcWAHqQp9ZJWeGuP8hWoP7cB77Cy2gqprx59k3hwTkmJ3Lgdw1HU6DEwpQ4mFrUJHLK6B",
  "key16": "5uGmVRbqppHx3uc4wARhiikNbHi13biHyaCkBo5qGT2KmzQBsLPSfGtgiPhNSy8eaLTssEVMnRWP3LdkDZy8yucJ",
  "key17": "2rK1bWn4Mw78inFMLrpkRNtyPJskEr3u57fRe5wM3sT5RAbya5SxkEVBQLLioYW6puoYCGJqNARL9A15eJJwFG2L",
  "key18": "4vjvY1mxziKEADZ6VmnXJDs1VHeyYNXkHa8ZJpJrEW4gNJmvApqW3uFFMPVpvPVsG5jfHnHt6XaMSedz9iUQwVnR",
  "key19": "KSGMbhB9rZzNPVgVMtYCSjnErmyNzE1E23Ny6ZVkQb9gN11QkXuYgA2bon9v3dVRpnA5fy6UupkDf3y2EkpZexj",
  "key20": "4Uh1x9Z2RheJ6QSzCEBDNiuJMNdiopCpzGBwFeEuu3AtQFfcaUswqosC6TK5LeZ72tP4EQ7qhC3w4nQDFQYz8L53",
  "key21": "2aqQbCgRRJYe66Bns8qFXZtZ76onoPtNmsZJipUpgA8GDeY7NJ9Xcem4A2HNCFqtakQpvEdEomjiMX1Cw9shEXP8",
  "key22": "49WVMNJKkgYFgoUSCknNLNAfncvkkXnASRS65YdFeJHErDaGzcF89SCJ1unjYwR7vGv7fXBYyNkwE3poYimcBj5U",
  "key23": "5cj6t2T6rbvWzirwmccL9DiCxR2nqZKbo8zwbVjKsNpESpgK6mHRdNxMuv4JaA8hXWzVoZCcUvRyedEHfnAV3nx3",
  "key24": "62ZRCxA7jHkFGgB353jnaeU55Z9M3UsiQhzWRaR3rYNTd8LfBXSMQ3xoa8c5HZnMG9QdzYph5S5Y3XtWTdcvGMC9",
  "key25": "5phMAnethZj7ZbmCsBdY1RdNMxu5F1pjEoeHcCL5CE9QD6C6WQb4Xb7LYmVzqKwJ9GXoquQcwaDy1MRsUvdRw3iH",
  "key26": "Cq5An4nrcPVzMAxKkUBXxzYo8xue65SEuaYodJ7Y4PyTJV68tSKkCBexdfRfemH6Sp3d8DPiRN6oBr5Lx9N4urc",
  "key27": "6buMV6xXzLKTqRxBe7JGWaJddrHBCDG6EhijxksWLvikEsLA8x3WQGLUxmKQY9FTCqzgLuKBmBNaCx6nuEkiq5V",
  "key28": "67NHuKtU51uY3QwLHMPjPfGqUw2d9a3Nu6RuSdErQdn3BKEYeQcdhJS9abVUd3wMT8Z9DAXSeANFZyTtw2a4SVco",
  "key29": "52MAqDvju2dCkcs6h2Dht5XJPXBEwjwzKvZNnYjYr1Snz1R46WH2UBD33itZ3jVvvb5grs5MqiiNzthNaJ4Ph1cV",
  "key30": "5ioY7guc4Upg4hPjuotzFyhJEhwkLQmyCSe5Yh9v7LMz88KwGxbdcp9DosWiT9ioxdToJv6jBPYwEPLr3NHi8r8g",
  "key31": "4DNY4YufoPJFZz81xdDp4zq1SRuKFd77qWDcehy7hAc98hLfDcfbFDf5mQx4g3PDbE27uitLqfBK4YNjtFPUg4Wm",
  "key32": "4kn9XZ2tdUr313gPCCcG99BA65tdZAT6ZEJQaXTAJcWLnZtn7GX2P1usjnFfcqtfSsMRQ9xruTRzzobnUfStMoWi",
  "key33": "2XbdQRwxft7LdpcSQcodVDTom1j4HXS8RAgFs31yM4qTzDd4jVui8rGMJNQh96vW28nVM2j89RYxj2CfH2vuEgwv",
  "key34": "2eaAp1KHmEpUBhwkoDcptaBFT6zUJ4XXFqKPYbnpU8vEhLKaBM8gY4YF135UbwqwcU1BTZeW2PSZ7GqsL4CwGG7Z",
  "key35": "3S57Kh9YdF2q6zX6KZWNNZoUPF4XukCLR8c8jBfXk3ng3qebwu5AygEHsN2kLWjoDgPQxCEfcVnmEhXUe3vKTaj5",
  "key36": "5rL8GGfu9mVfK3DkdVfLQzErcdhAvUJwUYLREfuvqPhTEKg3MVsHnNYd86sTKLFZ3Ht3akhKbpUVHABGQsCq919g",
  "key37": "FtgSNquoD1ssrYqoeymUyFbtvafLE86HRB7TnF2Z2WAv982HQr55UXwoiqFdomrWfYvqryW7FHk6vks4tnSXdem",
  "key38": "4a7VaTGPm8jZWPCedEPXH8NNDN4eiGs2JsWaizCQqpx9b1gfUb4zyU79tb6giY7ub7gT7j66sEtSn3vHyAbkJiCW",
  "key39": "57PjSoFQSw1NMJsnhVKjjWN3rYVCC7Q1az9zPvMA2pZhpYYvaxr2vWfmDPtU4nkcHccsGB47ttPjidKz13vzpV5d"
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
