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
    "127W75PNUmDSnycwpCknuw5SnYZYhXwGTBoGGyXWJrxFQzHoKLgR7LSZC3VnKrvtJhrYazTYNsUzKjV6c64ajHgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uj2SPdT3h3tZjiXZSS5hAQdGq7C5zFiNefTpGnnwtFzCsnZz17suGmwHVXgXx3fUDV7vDv9uBGugdN2sgB4LJYM",
  "key1": "2pah4sPLtQeVjAi4NW3nPUQYhD9rzvbwyXg7EfcfHB2y4VNTaDJfoyfctijQ2nxgR48GEJE8AuKMrM4sPmaGVnno",
  "key2": "EGUfi4QQSCVJGPtHbsBaUxttQ3hCZA8R1toLt9hiBZTe8tExuixxkXVinb8jLKYzqepwM137tC5UDgJZDzG5BkB",
  "key3": "5pTpQWTwoBvxYk8hzXXLs2w9fikFyy1deAZTwDKFgQsXU6M3gExcaEJGJfpeeTN7HSoLVAaQWidZ34c5HTBmpA9p",
  "key4": "4BE7uELrnB3ZP7PJgXxCqD32B97SDbXU8Kr4eRaoLbk4mee1PHKGTUhDrGrpiVUsvoguEc8Jyoh5qNztFxEYC9TJ",
  "key5": "2PzYcgoegjUuwL4UbzesCDmAPR5yZn6DVnULxcNZLekZoT6W4jJWAPcoPg1QbP9zhhdXcjS3nXKFHK52BfUsuTGH",
  "key6": "23F8xsmvwaVi63VnniBMFohzHEPHJRTwsEh6mNP68UnyKRydLxttHwasuABw7HV3mM5cG4FMhcL9CCcYpwFdg7Yb",
  "key7": "4q7qF3VVVDnJ8wHas4q9gsLHaU7HGfiwoYfrKoWAq4eFDKgQSPv28w48hmJpGbRxynvAQjVCKzpszRiuPMMkuXSk",
  "key8": "fava3wcByBokCFRLgbZgQB3RcuFPqoKxj9Zqb7tGs13K8HDcAmkDJNGBpDVnaPMF2GDgjg7dDhyC3sHiLb5FttY",
  "key9": "22uoqoD4nPN3bfiGw7QD4qfUDzyaxiQAiVnhAPcwGXbns7UGGh1ngwMvKjx3mKtMX8HTiQBmV7LYXDJweMA57tkT",
  "key10": "2ULVrDSaM4YKie2zeABctoTbu4w2hgKNfmY4YLLE1rKjJapF667zM3Q8vYPgwwdanCe3wiRf2D3ruKBnaJPvYTbj",
  "key11": "3w8djf22AuVrmXMnC34ysy2WqdSgVvgpmsU9rqQaXfU72g5td3qLijkqgBhPeZWiaTjJVJJaL9M66Tfz8Cj8yATZ",
  "key12": "tZxgx2A3tLi3KBkMqKp3gtVkL7omwuJ6YPupLqu5hxKvQTiqP2NVch1VFc5kWTGqi2Pqi8A4Pjysywt2dUychGH",
  "key13": "4emZTYe8JUmLKKLqxGFB7E8Ermc4FNSerJXScy7tuCockGQk1PY1u7PW57RYbpL3Q1hzv3NzjcNRgcTJ6v9VVpEo",
  "key14": "4LXYXdyxUjyaCA1zzUGdqpMFpzhP7xyVDcaVnU8pzqQ4rx9oGjE1DRXAapZVavUM9WqGW8v3v4T3u7eQNX5XHhDq",
  "key15": "2FkU9yzcCnqP8EdLgqNehwbNSwLH8f85VjePyTHGZgB1iV35xZ4NnnZoxvsiasnj9MsJVjVRtbAUpcNZLUNh9fK8",
  "key16": "5BqN5qKf7n7otjDCAbFP3hBWgr7gYDrk76vxZmiVzv59VSypoHTyMAPPiZiC3UccteKeCSTGKcKGJSjs5oXpLwiS",
  "key17": "4xArhowp9xUrjKU3wUWa1WCm4AM3NntMhdx4vZFv5ULC3wsecVCvdKjZdzdsU5JcwQo6ELQp7sAb4BvsYhBfp8tU",
  "key18": "2eDvc3LnVVyrow3QkwGx12qg56Ro8B85L3ZyNjx6BYLLmeE7D6DCwjZaiYcVfo8wYdTiJB9Favioun8JVtszYATu",
  "key19": "5QLmbY16HnhSNEHwJ5uY77d63rutt9n2Q8BuKGepYp6tsNwE7oW8qiXq99CmBBoKwokVmwYJgxC4nf7ZKiGssXNg",
  "key20": "2BchtT9Ubs5ajYY39m8UmZ8zuHcLRdEfQd1jnXpcSvAdyun6UEgAd8uhvnsppdTwp12c6Wj4UpcEWYEGhGinsNo1",
  "key21": "37kqXMW23AQBbw8XPUfQDycTrT9L5j2vp7JfQe3GA9sGgFviL385TQxvwvnGAsoaaz7x1JrWvWtgbMegoHBo4PEi",
  "key22": "5yB3yjuKswj6T11A5sdFJGG9TGp9jZzLuxUgH5XeH9PM4hHFwrAbz3hcqEyXoPjFCJaxtdopwPBFTzkswZFTXR4e",
  "key23": "5wBsWcPh12zwh4MoYgAcZoZunyykQxU3TMattmoTWjZKTccc5MgbDb3JRzZgDKf5VrBvEyXAUEqEPg1PFAxzqPUQ",
  "key24": "4kPC8nEXWSNpS5qNJsSKbAbnTEHQsTvnZBV9Uz9y1ZGXt3kkmQCka5gQUcjiwVVGPjxZoxMLPrExnEHagf3KCzsQ",
  "key25": "4KM6DTjxKzWSXjJiGhToC8yFqeQ8cinPmJXNLHBLMBUbs7SHAxWiAUFNarumw9XuDrVUEGdpqXWtjhMePrTJMECn",
  "key26": "5RUQLiJSRn6ycfpawAsjHtCAK7FFFaxQjcQx4vfEhDE9df1XBcMW65AJmGy5oJyqRGv294Jq2n5a3bkEAuoHZrbr",
  "key27": "2nKK1mmZY7NZVp4VazqHDn2FnAYPxg6HkNLszBfJknghoF2KuorUjehABMTtceBtJLSCpdBnW9KaMWeEryDELmAT",
  "key28": "2wQLnttMuZoQkXUuxb9GXcbWazubB4iHJFmkLuarqkL9HLkT3H7fhXQ2P35EQAUzqLBGoQtb8JVYS4HPrPRPJ2Qw",
  "key29": "4DcX1Cvvw5BJJfqzfYMjz6XXYcDsr6VTYzRsuP9KWLpn2jKGjpaMm5YYXYyQEKZ9unEYaixdBREwUVhRvCdu8mRE",
  "key30": "4XT8GzbqnzK8BVmDA6xFh8P33xHunLbETGZsPLPHaemtCuBVGtabkBbtKdo1uMHwUMuK6L22WzB1g9KuSsVHdCxy",
  "key31": "XTE7eCMnKE9HNzv8A8wc7JiCutx7HREhnZ42m4SMmuwXNguL6SjBeLFFGnVWdLXSron9jineKiY4kCT4vSt4ivf",
  "key32": "5aq2DCriaEBUj93RJfNA65AB2SLf5vaNFqFxFP9JzTE5q1VhHBdRc1Pk2rAph6Bhv5eUEgH2vQYrHzPxRRiGy8Q5",
  "key33": "44PFcSYXNZ6H82q6xH6PuGnHBf4nkDWTbuXYTSBQzNs5muo1yZ36PPPHrowAnygaTG2cUnyV9QbpLJpTTAJSrbs2",
  "key34": "5TMV1DdB2Darze8Us29S9zs49q5ZUjDqgwdPw3k9pVfvSEVfA5ZKThQHprcSQ2jUgEWraiKXX5fjv23vcwc7iKp1",
  "key35": "3qk4TiSYgJcMbAYL2T6xAhAGqf4Q53THGaGYCdLm4ZZtXgXQhsSyiTMFdfYk2ixa8tKX22HXKEZWpamcC281Dkg6",
  "key36": "4suWELfbqPHn2UPUikKeBHr9u2kxeCDQcAsP3EEnPzcDG5pkNay2pMavXEcQJgtQ6rA86MoEKPCiwJx8Xn3vCpw3",
  "key37": "55B8v34ZTNu6Ya7KF5EEvZDetUkyMgZLuTHq9HCExXkBYjQ1C3UPVUiaKy1rxUH1yYUtaJmTn7pzEYuoFtAudJPg",
  "key38": "3ByF8Rb9ZvRrPvCNzioEdTtALy44geSv22tyJoEj1PUsYrYg6unbtJ4Ek8UdQYwL99CLraN4nhs8cp2HTjpYGQbj",
  "key39": "52FZeWfrdqk6hGSuaVStF84gqag6KPKF7shg9QF5zVxb6xySc9mfhqoYJ8ty869TBiJQ7fyEHj2VBk3gmNQyXsD6",
  "key40": "5V6GmdLNuBD9epb2YZiYqWSKG84LJeXHBQqUw7HSTEZxvajUxrWVSffga8mfSGX2HN2F6BJoPRbmG9Bh73ziGaEa",
  "key41": "2B4AR6tJhfmiVFYY9agjnzhQhp3oNzPxxayTBH3c5qsngLhY7kgCryQ3xrCFjpsxCgmQBnGuLrGztxb4DJNUP66X",
  "key42": "rA3hzPcrR9Uu3KJmKmcCUGAYw5fhC2pnykPZfZF6ptcqSZUJsua6C4RgoCEwGdN2AGNRefDmjcktrx12S1PqBFP"
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
