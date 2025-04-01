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
    "55XdeWMScyVhLgBDF9tSKqHJeEnf5xHyTnpyV4D6Tt3sDxmBUMAS6UMP61edmiLnm7XK2uxEN5Et9vVbs9eVb2iW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R3p5gpnk5yXyaLq2Fa9uEmGCURRsYgthgNQj7kBQaxjFbmJBYs4vUqzs4cYNdebUP6VcGHiEVnfPTdaaXNyKMnM",
  "key1": "22WsnF3cwBAet43zxCbDCYuGGUx3SCBrBpRTFpMFPuZp3B3QRew47nTVPoEJsGBkTvAqcyY3cM3MdZdrkBcExkaq",
  "key2": "SZdZJipXJo8MYwP7ztwyNAJksuW4wwwZb2H5hyzSYjHrtBShdsRroQtnpJQqwEPvLH3ZhnucDtBGWPiRetQMELB",
  "key3": "2jwLjPuS3J85R2T6VZDpwanmwida7jjqRjrJM81chTNFZ8qkcytn6gUCeQh4iu8s8y4iMabkvSDAREWNucMSQVj",
  "key4": "4UJiLkK9o1DMkYJ2VeMNBfSLqW8yAxdqDxcJthoFmzUu2zDUyxd8cb8eSjKjERFJHFYycyFqhTvTXH9kiKpXTCXn",
  "key5": "5kXayt8An4BzgTft72fALKv417MeA2q5XDwMej428QSfQQpzXV2PSgdoJ5pSiJyGtDXTRykBdeLE4zfE4RSGoi46",
  "key6": "3A7g1FiUWBVLVybpPHgHFN1DANzrpymGa7G3dQt6uWExxJ1H4VTUZ1ZgML8t14SANpoWuLnn8qanijTgieSZCCyP",
  "key7": "5DSJUoadCinBt9uFEVogDJPFaLHBb4d1yU7ffXb2NgHTSEosPz4J1PqNyNDEgH6Kn6ZTXoQZPigDNkz9dYxa4EAu",
  "key8": "36KaV4v7VvzhHkHAw4YbDXnuZvqZMk9vEEjBpqQEjPfeDbRxTKmL4jCZq3vF9iTgpRLrD7HrRH66K6khHS42VZGr",
  "key9": "5mTiNYR416HTrPKrpzPXaDyuLS77pwiVuENcyZsKmdhevtnUYVEj58f3MMaGumAie2FNx7QdSEdpinkMTjAXV2PJ",
  "key10": "tKz1CGDTvWtX3d8UGrqDU8rMaiYN6Nxvw75zEuhLg6Cq7Fj7mQS8dqiCMHsFchCiV1YB1di6QkQiV9fwg6Y68qG",
  "key11": "2KbSvdZXZXzjV8JePdC6EjkcQbHcqbKCtJFcSD5rQANL84v9xkiPRj7LUBfWSU9nN53GB7DBdUNEkYtZpjkV1Ygz",
  "key12": "u2n464b2V5Y6vpveHDSedpjFw8ksQ7Jagp3y7Kf6S9RVzia4sZBtr6nLnh3EgfJB7cckzuy2FPf5g1WbEBZ5MkQ",
  "key13": "u4w9ugxcyH8dwQXmkR14k8MKjjN786Pjbwjj87bpbNGaieeSBAk5cm3VvFommZEAW89TxRToqdzf3tGj3shCDdC",
  "key14": "62gh7t5H5CprmghTy3XSSCMoRb6HPGHb5YGgKUkgqSQhWFmKcQvt9UWSNoLxRuGG6qucWPeV9pXoeSneEnjWCuqf",
  "key15": "6fNbteSQQB1qdsy5YKzoymeHGhXnRs6rBM6ZYSYffaXChwMwWA47oFwZ9G6dUtCcHo1jtscAo9VbrMycgtDPSC1",
  "key16": "2TuBfbqsEV1gwK6u2wJu1kW3U1xtz9f7KBTXiJRoshE8b8mMLN8UnV8F8Wi8pvPAbmEyPVDtefEAfvn1USUb7fMX",
  "key17": "2ZMTqg6zEc6Ws6uUjgCLUbUKjsqAg4Tu1pEQkteme5Tt3dbwBYaD8zLnYZcxhjzH8GriwYuAGfJasdvA8rM15CMF",
  "key18": "2Yy2aLvy5XfWBRvRMuswJjW6j18xbTGrUTWotb7ibBPf9EuFEou2m9UqKDdJZvJhAN28pTxjS12ntAGmsfaegED2",
  "key19": "4PeVvbuuE9KUrn25gJE4Aas5HcWexSZHT3odHmEwtV399qP9cmKBjswemNyrMuFbsUrgwz1d4kocZbmQPTvrtnF3",
  "key20": "3TwFHwisGPWnWLrzDEdD1AEnRHYnrJK8DuazW5TCQCUP24HyBCDGvwvyfUBo5HSGw1MCuqXqw2FQsasPFNeE4A17",
  "key21": "4esbYiADS2Xx2Xi8vghrV8LvtLtwiXqAH6WJgDaMGFZLMDULSAZ4CgefX4ssegY1hohNE1DuQJ9VvdN5aUCZZdQG",
  "key22": "5hiXpgw6e2NoG3Y5VCPs2xLbbHwciqPaPTdJQper2AGJ7PswHoUfJ9FAjnySDzbLgvFXzFwYjNuSyhFP6tAQ5GVG",
  "key23": "2XMTeWmnR5F41runfuVW63CrA7Enhnjvojr6K73QnuUN5EKg3heAM6YaVwLXJ1EoVnAkciW9KjR2xkwq475Qv1uj",
  "key24": "42MP7kuvMuXhFYJGe4suFXXyQtoJxvb4ZdRKVy6ztWKrDtyoV8C8m8ymPX5Xu9GYjrzV9gXJvoZunUMXGCz5Jaqm",
  "key25": "gYxZsxyU7HNvuNdcmUJZKKHAYoAyfeVJ8mdE9fcykRqKAtuseUvJgs425A6s5rf9wSqHERrF8JPxaPwPu9Wia9G",
  "key26": "3enY8kK4SBaShg56i9N2Lcx8AXEe6672wmQNpoSW3Sj9qt8CXn4MhL5tHa6dEp8YfEpamAbnoLbBLg4vPGJC6WzB",
  "key27": "bTsiYoFaGPyvHdGdwfJ9Yic827iXK5Wao43nF9wevGEuYc5PTAb21kPvFg2vHyxPX7BgHFCNScffTXGTJwB85yN",
  "key28": "3haRmmHseujxLJ671FJGqbvyGKr15vB96Bed9sns5T3ygdsATcQxZwgNjgpyPW9Ai1q8v3evugZo8NazbLMngdbn"
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
