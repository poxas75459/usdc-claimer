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
    "3sogKs9swFYfjWm7csvoW2Fnpi45tn3EHE5pwkwEiJeNfaGwLHxhrLpmcA1LGfoCRLSWztywceH7w81baVPT8Cvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vX3coFbW1H8pfJtYFQF4skHfoKSnAYt6cTvLfvREdoMJ1om35F7wPaX3XXcgUGUicGxGFEUpZtZADVDbvamAB9A",
  "key1": "5DHA1w95xPqhZnewcjekHrRAwXXiRcASfXr2bNED32WsteDtHpNKC5NNioovuv6fiC9sndczJDbqhuN1V97EyFsH",
  "key2": "5gM16vYtfLFvq5r7bdEnGDjpJh2Qbm6g2LTcdCEA3kEsbqp85g2KjNEwzEpKfak2cqy4jFHFte1Q9wEFhzHCjcbt",
  "key3": "kpHWGq7BiTqKTaFVirY2tdhBmDQS4Q23qD4XHD3odKMkUZWHGYRHV258aT9z84XsU59wYpbapvkcP5WVTDhzuYk",
  "key4": "4ZrSekhkm9V5kmWvpW3MJsu93EDpyhUtGSsWTA1hUJ1z4MtY1ibCBBZLXuSuNN4vyVtvGKy9VpZ64boZx383y57L",
  "key5": "2KPnqTeGFhb5M71KLve6msLgjtuUC6DFEttHSRgFSHQP71PSnP6KUPfzRaaMfJKo4ZTQqS17aZiETHK7uTnsi9Kq",
  "key6": "4XGZ17gfAnBVde9XqwHdztskBHyhVguo5BSAc5VHWqqYgPNjBabgdBaR1XH8hufRitzQkKsrnjGJzMaSdPgELPjP",
  "key7": "5WAJXSao5LLmYAdNxsDoSy4vUhHuYU4uradaAUActcjkZcAYn8UMPPyqbRi9GfbPnpz28bMf4Nkgv1oStCZP1UqC",
  "key8": "4A8f8mdLyyxwicHgwMt3Kf9LW5knFJGEZ9YcJgBJKjBiufyRcD4iFgzK7v51qEieB8qksvF6MfzRQi2tcNZUKrGA",
  "key9": "4vC7Rvw9VNP7YMKtEWWwby69DPF9MrW5fCAohHfKKq79JgzgRN7U4LbrWZcKA7yg8uyGWJfk3Dz2ihYwK8Bs9LWo",
  "key10": "5Z8WjHpUjnkSbxpnUZbx2s69JFpYminbaVQRgU4GZo5atusGS7azXwfRPktJagReQhQeJHcbuieBYjZWBuDaMh4p",
  "key11": "oavqJZf8VNZt1Pt9gyetMdDF3m8k4GKsdnYAWCaGQkYqZ5TFDgGB6CTrGAPyQZUYquVLuquoTqQtnzMJSdo2tuC",
  "key12": "3pgRABc7xi2xpNETHvLLMFCywD4CftyHAyZbGzL1CMUCoN12TyQvp8jDK483fRfQJCF7yKaepiHdZWhMDBNFPV2L",
  "key13": "4v9iSwaXWPeXQm3nCwpAdmtX7YqoY7wMxdojtwRcJBJ8Sdu5cNP3FoHSmvuMKdu1AuRt5kbB8a6EfuXLgFF8c5sb",
  "key14": "32M8UkGKTS6rz2ALi1adhvhdUrZeVbtbaoXGiK38P5PEGjRGwv3tZU7jiDmKg2xhxQtXiec9kn7wpdZbN4QAsmwR",
  "key15": "2rrn9T69PvoubE5Kq9DJmZ4Th5NtoUpwPsRz16nwupFHLDBCZgtGboNjZEJKu4ZoJNVHjhLfpwkbnDTedmHuerN9",
  "key16": "4Ai4nSbVNS3XBGpr6UKqAyEEwh6DbyhrbT6zZne4jq922Qe3x3xs3X87Aj65Jo6pYb2LqNnynPnoCkFmX9CYJFkc",
  "key17": "aZ79bPRmaLY23Yo8pahFncyB9jW67CyJARRcUcRieHPTzQuQFfJDzxVRpz1o4wwcKPQcEFdx2BEhjRmbG9iitBZ",
  "key18": "3bQSDzP9uiuBVbZmNtAUXg4eYGNj9hm9KeYFwrbiAsEkBcKhYqTRQEZDSV4xxzajF1dVuNbgtzTYACQZZQfexTpc",
  "key19": "5ZHtcawVeACEpeEndjYskJPxjyn5ZGwncewPHfDDxjcbrAiK7PbLJTe3QPdRRbkGj4JUg7hVhfMHh1VrxAfyr8uA",
  "key20": "4eyNqcozwpikjd2jxaX1nt62iBzSpabaeDzBS6PqnhnRLA96bh5eAX2xe7Cf8zdhyS6Q8cDxHSMZwYNCQxzxAxER",
  "key21": "Yy2wH6bWHFESZvKiC7VsJ4cBVEb1jfd3wqkcU8tZjC8ikXSR8cef2RjYZwQ8aNpwtyaMb6vfuREBna46WL51z8y",
  "key22": "3QXYFZNWjUCjYPTCwFonNSFK8jFVX5kYqRZipDy8xnf7ow8apRaHML3ZRPCLbJznAbMoJtUvPGdKbYruQRa53v4N",
  "key23": "YDjcAmnvmh1PzZPBDgsoEzP1HJMaotNk3JnBxKgnSuFs3RhSkcEkxQUk4qqX61AARgfEFEXz7wsy6qAiyyPK3wd",
  "key24": "MCCq5uvPFCqpT5aNmqieg4kZCfzkUzk98W34yXQb2snbvodzBNBiJbd5ZnUw2YbRZNfQwgJxrHNpTjkuskixcSE",
  "key25": "3icKBZDCi446id4xBaG9cS2NeRWnZEt4SqJ6Uf1knEA4NnfELomdWSuH6yN47xt43w7PWwZM7mTKLLPTLajVTvrp",
  "key26": "4iwigKGFv9BUP3eSDdsAS6V5EuXZNqdxxEwro8j3tJLmBhja7uvoBorJtbAsdcABrtZxirCgSVeX2PmXwihRzQy6",
  "key27": "5of74wkcPHEuL7bzzyavJcUtsiUYHQWVcLzA4eLPrqVeXFfs7WyqftfXZWpWbdW5JSibFhAkzXb33dnrjWvvsAEJ",
  "key28": "2DjUxwNMZYVihvcrLNzbARaeaNu7sYS8DxC7ipNPqj5G7AABzFAwatjTD74XX199MTMU6V5TMkWJyCqj6MjMKVPK",
  "key29": "5vvC64gbdEnMBv7XEsn9Xaw9ioZwesBPT72v4H9CN14B9T1LwQVsnZnqo3Rj9D7SAFSZMREPQgELPWgC4N3gx3ka",
  "key30": "2igiyeVNEKkjhNajAdacZxCkdvdZE96rmdFa4dMgV5wdKydj1zX7s5nTU1o6FRRGoypwr6VMPawXKchQXkrC97wi",
  "key31": "5hG4v7d45Dku6zGxr3Z6PFJzP3Dme55sbCLzgcwGWEH7vCA8NdEaoB8zJhfYrzaUmggBFemrGqNHrtQErdorcJV9",
  "key32": "3DufhKfYBYJwf5TRep2WCLzH9MskuiuCnA17MCWx1AQNZ2iGZ47Vwcjy8iSdWsFsrEWKHStUUJPUHUWy5CRwycjy",
  "key33": "CPgYFapbBArHJsWD2qDoEVrk2NJf3RzN9ArdbN4UWQivfy7ci1cgNR66YWZDNizVmrWq35vmCfPYGWZ5niaDPpj",
  "key34": "3mFGxxfuJSnUh1k68yPx2LWjZLSoQZziMXkbicGPJ6mpjXdn4DH66GyBPqtK7LXfrxyUwiTfT5gdpwsfJ4XcoSTM",
  "key35": "4EM88qPJyhU38Uxx7nbyqodgvCoSrBamjXww54SgpXsnBtBd4uuwD6yiJdVJtyhTDfkxm6xSKTcXtgWqBmPPS9MN",
  "key36": "3UypabSpPwhDwmb1Tp8AkbCWiCDigaYs1rMu6s8BjcY517L5MorWZAdn5mNY3qcdGjzJENFkFfcymm4VWK3BqC2a",
  "key37": "4BkEyZvLyU3mVBPPiUfErJj2PT9dxxuMyNeSaG5paFa8YQpio1dU3dzH3mgsLLNRf94fbmhMSmard6Vwoqo9FXA5",
  "key38": "539R3UJm437x1dhqhmvFCdXouRVhbWY4Z5A1ME3ND4D52TcybPmjaHKFTUrWeyRrRcRFmmq5Ni8tMRVUAWFEiRCw",
  "key39": "4LPVuPYycgmckm7fsnAheSMWF83g21yMattcBj7ebLp6rFPG4dTM2Vq1CSKwLLrq1UYrsKaiJjjwWnZNNKhXCCaW",
  "key40": "WKeqEQdP8kjjeh4sRHvg9QGBj68CbBwcHpqC95E6DSwFW7W2XuNmM8VqnwhbsMvnwDzUo1r3Pg9ZPXDxJvEvT6A",
  "key41": "5kfAAKSMaHeDMd8D7zqkACuz6Sd86o8BgFGjmsV4wsAYmGbGv7XMajv3s9Dtwzmbo4dn2h7BmnFG72SYmJZLYutD",
  "key42": "5bMuXsEExDQK4fBgWRB9L2nsJ1nNehH9sqxj5oG6N1i3hx21fK2evNwUYVxLVGGENKvxc73PkkgYk7CSeSm9QwyK",
  "key43": "4dfCnz1pemahX3X5Uvw7Goq1UyCA7VZwsk5hbR5nSaeoponYfLqRVfEkvAkvSpuRe6ZyqRSGF3KaTUjDQK9bG7ZZ",
  "key44": "2rqNt8hqTYzBWhdJALdEHp7gCPQ6okZmFiULSJMLFuJro7pctdRMpNUuqEWg7owV54uUSGgquMMgrzd9Ru8zV3pe"
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
