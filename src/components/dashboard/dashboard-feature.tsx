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
    "4HeC8HFAFwktHFg3gKeb7PSiCUH12hWfMkZTd5sNdDcDKAkj44mnh3DXhU6mpZgPwY7NXMrQV5DU8Wt5fisZV3Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UdZoPo4rPM9MzSRhemJhJwY722om5Bq9FGPcnqcxh8bbNCChm4tuK6t4MW6KYPPX7cRNTYfW3skLWucunKhTS6o",
  "key1": "3SyDkBhBVGVy9R8M5F3zWN11o39Qtioy5HJDFAhs75HmoyqMmBdvtfCEfc1UgAd7Nc6QN2uawsAiGyet5RAEAwCE",
  "key2": "4njywDL49iAt4R2FwYiKsLrz9ddA9Xn4kQGQEPL7Mptph2ydkuLJeJWvXBdwDgpC4JMyF36ZUYNgumVqsNcWzxHY",
  "key3": "4UGWvdVFQKBwp7KThCAGAbP9SxRUwqwAPF4PbxDZgQH3GBiwkGm3Hj9QyLZogB8A3DeSyoifKGAd6bkaZNm9ryoR",
  "key4": "t2EhFpKiecYfu9meHmxJ4WoHqzwQJhKMzJQfs9aGnpfDXJeDjHHhRJ5f5xkm1942iwxvo4rLWfWnNJqUzi3JMsM",
  "key5": "5MJGASedVkfNLwZiEFcaWH2LMm8jvx1aPe7pJFjaQ83wkwZ211e1SBxmymuKFrehkmuutuv7cuscqY9Hcmt4D7Ra",
  "key6": "5zXtkda2rwmywXrAZcuob3DiP9xampWTxXySs2FdTxxppvwJCuAEm7GDkN3ok1XSh4FumDUztviH2tRvcFEEJ6wq",
  "key7": "52c4sNLQxyf7Arj5X4FfSGZBUqcwTcRbRLrRf6oAMYk9qXi699jtkfBo4ssG75sG8EEES8hJVBBCRjrh1PYTd77k",
  "key8": "2mv4vXCCpGp4EV1BiUZj5TNE94Cb2wUQ1su7k6hebEda3ELfonQjyY8w1jkKfJPSQq1MeBHH37fCxXrctr8aW15V",
  "key9": "2dVEnejsLWjFJGHx9R9HHxAXimmo9b3Eejt22QuaycvUiZoKSzw6dXM7F4mNH53Ye8B4c3rqRgxt3UK6gW5wcTAh",
  "key10": "3fWjzQbi9XDSUSVNNGvM5YX91zZbnuCncDHSXuFWtMAR99UyJ95ew9NN6hj1vz1GzVmbJ23gV5E52pxG9bHW5s1Z",
  "key11": "5EJRoY2EanytzP8vsBGyatANKLunNuZHB8YHMpWgaS25LU2yp7Sg3nSY6UAjvQDYUtXS9e3Zgy2WV7gAgkv22gw6",
  "key12": "3J6to4a7s2jwCq61dmDVjEh7sn9wVBma3cWCe9WLCMRZQgf6Cj82MCoKUAdCvXtmNGirQsa7pNFWFG9UP8oZamu3",
  "key13": "3owcxtuu7zTg8wCW47g1NZ4jcWZ2z2Mjw7Xt7MLpbGv77fDaTErtHnkmE1ugeUzWiuRJUt17FPVmmximTwZnbYPQ",
  "key14": "2C2Xhc6zpM4zLK38ovtHShUNe5sHNkggTc5b9NUrFMXjUppCvs5ugeJQMUtqZBJ2LkG3m7sAdYM4unm5qnHWiJEW",
  "key15": "zhqBfWT9WCcruqrtDfh5sp4ghLMdzYD61mSsHijwwSfZRt11hgP5Pcu2qJRepotRupKQSibsXHTHZsLsfqq75jk",
  "key16": "27obbi4kEnmUZkog7grbQ1V2xgedo2H8syW6MSyfnozCxvL1khQAtujx5p96T55v6x2RszaUotd5RKPdFfC4hmyH",
  "key17": "57zmzR2Sv5etUTTcCMn43rUs9nAr8mYg1Ta9yTzAhKTijKC7zeCEkAYrjp1U1MwUvxrohkVRZqftKa1X2GJB6XFS",
  "key18": "3NY7nVYZtuUuK6KQ9BNBdhdgboXJpV6e4vYWwFf7FX4joeztp1ieuUvjgj1TkwNS9uRTrhKi54ZCqNSbUVwERUYF",
  "key19": "3DQuD7YJoZ5gfj4TNvn17FrnpBceheCxaMja4t3bjfXbx3UwJJ9rcJhdgmk7crwqF7a4sQ1urWQk6KB8E1snqege",
  "key20": "5L6ChX1Udq8rHTBAmrqvfRowZySpbWWArxH4LaWWxd3KAt7zoWn4QrRXvd6xKrd7WjqUTQgdRxWiHYSKrFYxoHc3",
  "key21": "5KA28JfdWidu7arroE38DrmhtdbndNpyNHixXNar2PGRojMRSDaTaErB8cA4BDonDbs9YSSbcuCUH4d87LwsJZFS",
  "key22": "4CUpSwLPT769L3TmMZGRG3qibStXVNLEyHNXkkevkPBwT7MSUGinvL5hqrRYanLkALi8oWhyqFbdeJopD8J7v87F",
  "key23": "3R6izrWfGUpHEF2WKAHSSrdKxjmH8B1u1pBQWHTWqbKCq4M4SDUvnhACjgMEvtM2ZWjNF32vh89k7bm3ZBYxVtKf",
  "key24": "3CvcTgUCqCcJHzDQkdDjTYwRwmx614XFrnczM9huidHV29ciz1kNBq7YjprETuk5GosWYA9NVaQ9dWk5fjejGPRd",
  "key25": "4NPzDfmswLq2eB2aBd3X5q7uHoqt8bczmeDHfMJEgQcs5bRaMRk8fiCwFs9q7zuGHnWnPehCRjzmGPYFoEch73jT",
  "key26": "5Yo4kdUZpdFEND5DdCTnp97fvAWkDEieF2aiRXwNTeA8Qhj8q1EdTj5pRJCF4sMSbeyWCzkPpa178dYzmf1nEh8W",
  "key27": "3dDqC7urXvYXqpxRUo3sWBVs3wqJ1G3iv7jgm9pXLgPsV1y1SguFeXwEYq5NYAWAeqWAjCwBNw9gLdvHT8XrxX8v",
  "key28": "owxWj5jS3SHmpN98oUoT6vHyr8okdiVqN6KbfCQDTQ51DRq6Ai5Jg8M9SnfDRsQeKfSRC7hcTspzYnNaYzPEa96",
  "key29": "3EfcWFPm1UqPEnqGxmiHtGpNyCpBjFY5CenykP52VxxWjhm1CYyvwiMyNgQvvesQiEqjQyVABXYCk2cYRjckKDeL",
  "key30": "4KRKKt481QB7rRqZaAbTWRZTCxmiEc9PU8VxvVQwqQUZ2jZ9NL1YRp3AYF3gXjiHUk3SwfVZ6dRHRPNiTRqjEoZa",
  "key31": "95G7DfFL4zZ3pN4tLwKjMX9sfi8qxQtdZCaiMUK4hbeRoWuiSWB4xhQ5wfeGb5p8nitx5nrHz8ceVKXSFNruuZ7",
  "key32": "2rk6DPeRpFnzgN47QFbZD9zM1V9uyBFFv6eJjRXRY3rsxFdYnR3mR8dpdyLA85VkHGY5ckMgi7hdzvqD482kQZ4y",
  "key33": "2EtkGBL9KnmpVa9Gzws74TRCez9DqrY1pciL6XxBS1RdQ9DCNRivF5FEvQDZZJchgYKG4TneFgUntX3oxhpeM36X",
  "key34": "3PEwR5hizozN7qLHhsHgsEwyhRSjDtdfFLvY9FcxAtWsgTNkXPss1dZzmFQn8UAoZVzErv79YeLg19WagtuES4gm",
  "key35": "5pNfyh59811bnho5ZKa4cZevngY93N61zRxbAd3wHuCXWRghfPSGMKXGzApC5yLvqiiKoJSEqtjacZCQo7WT4yEH",
  "key36": "3Uung5Cnhj24fSmk5BAV1rsELxe7gfcZemi3WGdCeq583gC565mQeZ25Zwx5oAZJBfAg8N9NJF8hCrWxVUZJ9Uzp",
  "key37": "5PvNU8y4hYeeqpWVeHxKgkUryjW33aTyMrRkxckLCWs8dDYKA3DwXm52vYyMcapdoJPeCWLjUohHCPZQ1nkk4Frh",
  "key38": "251V93ck4qHLPoiAckE6rMH72hPWv4QTVbegQ25VNRZzmZXDfkxVateUqhcw5u1icXmPkjMLSNyWG4Qp9kzKq4vE",
  "key39": "7HPKSbekYUizjm98UESBSMsm2so87czxodNuWXtJELXT7fjPNZ48d4LfmELJzG8mnmzjz5bvJXXm6YXZWehB1Ei",
  "key40": "4RrLo8jdYthD3oePgYVNvoYq72uLmYF1icpXTK6W6xBFEqe4SmnK748kGXP76oCbP29n4vwARD5CeUvrtMvus6NF",
  "key41": "BKJGG3qXWQwG2zh8twZWsaFEAJRK9ME2onUqJR4ZdB66maEDa5r5Ge8Lq8b4Ly65wfQjjxvXb6w9BH5DxeNv63w",
  "key42": "355YbLKF1n4ERgJBbN54jWbBqqUar4SXD9txqg19hMrDtJvLAU7E8KCgefQbAWcRhSvT7C74hPFZpH7hQBJfRPvj"
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
