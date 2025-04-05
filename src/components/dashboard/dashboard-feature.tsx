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
    "5cWkJPXLbEPmApnexiG9R9q7Zwb5KgAx3ZTaUa7jA5c2MBjMTibthKXqk95hygmEiFPBhx2M78AZMVfvHBHn2B7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6dhJBfrumuY9Xo1Q69aGwiTbEXDVywjfnfpNpBtPMuUcUf9YwgX7siHs1tuJoD7Y3uuMVE2hwEJmU65p58EdWV",
  "key1": "2CFBhufSK49WQx4GMahXBr4j1xR16TyDMaxEpv2ELvdK6DiNbd9S1SXZBghrMdmSG7uWj2aHJxgp4rk1ETZdrsvY",
  "key2": "2kFAc76LhzTHB6AuZ5jBe1NzfnC8Uj1CNyig3VHDcuEj1Bg6YhRCGeysTJ5ZJtmWymNNJpqGiV9gRdeNjbjz7CEF",
  "key3": "37bjF1LiT9XHFjEGEb1ZUzir84bJmQtC68hKVcSvPT74Ykmm9bnt6YBViPbfsrxVbe3JGYbxeTmVsGzVJy7D5hrG",
  "key4": "5mWND9G2DnKz2g7FshfkTgW7Wc45C11roSzfQjcpFdGgPuga5eMPM8UxgYg1tpUjNhnSfzAX7AkiSF6xWWX5VJHd",
  "key5": "3XQ2uLxDMpgMQzQ1Eh7b3GWuCCh4ScuUNJcHRPdKmUA2PiTQCMBnaFh9pqbZdpJ7HgJCMZVpLbeDMwsdiqASYSVP",
  "key6": "3tHFCPv7uXkUmPGqzkXREsNd2eHE6eciEfvwp62kfufV7vYQkVvqGAoWfyvpXrhTkTrF6Pdb3k1ktqGCJY8k54RF",
  "key7": "3pBE6gD3WTQbLThCCxmb1uriUMBVBT7TMKo4ZX2vM8NaVkP2fWd6YcSbfqtaeEpy3Nh56YJyWfvE3qM5LdfxQWnV",
  "key8": "DdydTJxnm1knrJaaUfzzLyWpfBmWB8SnBsqaUEv6QwbwrjUzZipvLsLTgFjXkecCZQPsACmZqoZUue8Efh5f3LX",
  "key9": "mSndpQsoyyuVJNKp5W2KnfXyZBdHrs2nSVivB3sXePxJGspZU8G12J6Sd9VBbQved5NxUnc1rMj2P2mNZhPeFzi",
  "key10": "Z4cqPWNHqFxjM1fm47CNFfjxR7aeajUsD6QXGff42Q7u493DHYcBsWZHUXjx5oNUrScxC2uzy53quqFBeZW2xY2",
  "key11": "4LQMHW16CdCys8184e1EA5HuDNM2XBXzRsAMdwPvXcx2U9WNuLBW9jWARq9RRhCLR1uY1hYnQ12nmKEavMmhx3z",
  "key12": "24uLmks6PQJGuU2NMP5fZizMRqGYYWd4JFGZ5zA1aHremJSAT8KXSPr4pYU8TnBcz9TTdh9eC1UdkN28dkKHfP9L",
  "key13": "4XjWMxbTmhym2qy1ZA4jFPJQvtdED2JRqsnpFVw3ks2U6j2bhUfoNPQKPkneoBPYwnoH4EVqBU3MkHK7R19xAYcH",
  "key14": "4F1msiPZLXEaNqaoppSQYJ5JKuY6THQzVp5rEhcqpNC7HpF2dwLzAK3pF2EoPddtju5u8DENNUhWFFMVuzZNcryM",
  "key15": "5Zvc5VyHMRExMnjiMe3yomrANWd5JE1FefMD2eTBoGja8cPXvVVha4Eg3w5NMjSLh61ehRk5NGaCWgZUshziG51z",
  "key16": "3D5ZkZSebu8bRyfrdevCfTsCgHDQE3efKyCeTmEwydjJvVfdKk5FCJdSL3NiYQyfbPJRWsrumfWiH82Fx7sGd4QE",
  "key17": "2ey7eN4J1NSvERrR17fijAa1AyRkhxNr9xyR8eR9DxKYbYEjHhEZ46fiVq9HCTFavMBuY569FPLsZZhWwsM7LgMC",
  "key18": "43ziLorafPc8BxdPRtY9oBQffi7N86aVRWP4ckFYuVQJgHrpwn8im59fYoq9wbXkM5xFZF1yLhRzxtUBaMr1tSb6",
  "key19": "4j5xGNJMf4MZt4xkZbkroewsD83EKhiYFVc87VaUpgsr2SwYtHtkzNY9yoB64M6wyjMDdeQa4RfnAxxaWM8fJwCA",
  "key20": "5jjEapZWvtnTrxg4FTvtYR5reKHwwpvwDSYiDsfdEbNmgFkVQtdbqnrhZKybqZ9jWh4Dxntab8qATtCjQJ1ewCtY",
  "key21": "DjLfUZXcPrcV6mdGxvRDtKmfQRf4fD8AsX4WSMdWAy1wwpStnPxXaCYBaBHF5NkDKYE8H9zEXtyN4wQ6WxxiWqP",
  "key22": "4cpQm36pPkUVmu9UXQKsBqD9LQgD5qNg8rP5RR9ZpN5n2kj3dNoC6KQPDy2JVH5E8XpbDZFKwre2xdVKtyxBCYnm",
  "key23": "2zir4a7SxY9n53Zn7uSmViGPF1WcLY5nLteNg26p1E95FZvaQgFCSBuPAq4F7e3bhy1XzCygNJ4MPYD9zaoWNUCK",
  "key24": "2JFmXMjrHDF5CEqF8FNa2ZpmxqAKn1jbCBPvT85MMHL87pkQVt3dmFYMiSN33FLgbDmzeYSvvhKiPwqrZB2ZuNeA",
  "key25": "47UyukMMwYD78bsG5Dem2DrBQtx4E1HJ9soef1SiEz9qrbPA2JsfMEeYCjFRFqvwHMqVGMAi1HcjRHFaTz4bgM2c",
  "key26": "ymCEBFQeCtyfSrodZ6obXUPTVKcDHDHSYgTsRS9mDAgnRVCfgNJr2vMkH7aWR3MbebLhKv5reW9HtgEjjVXcPzq",
  "key27": "2UbB918KwPBdg8E9fZ3HFGvGLGJks3YqJKV4JwgkSQiHEmHxnycRijxTTXdfADfj1NnLR8Cp37nnymHgAaSQBZMm",
  "key28": "MNx5DmDqELJGcLooDXs2Sdk9cTa4ge33TRQ8ZQ8gJLbxh6SZirRBMFfCm34BqGsKSWx5TcH1rSAiAXy41TMAmAr",
  "key29": "2Ptvh4fZGwtN9kXGRuFJnowv1Wd5kBzsyt8hP9rTvKShAoH8BB3A9GP5U2tU4bTJs26RgeC5RXh7nCBZu1ipTFHo",
  "key30": "5QwP1VaD5sGL9ixTsgBoA4ohMHuopMdkFwDFMYzWEa3Drewf7yRa8G9S6iK7gqy9kbNY88C5qs9gLJRwhy1636fd",
  "key31": "eV9jSDq9EL9MuAL1vYD5LMa2zXsQZyDnqC65YT7hV8XBbagqWrwTbSijJW3MALLgJdAqsKhPN9HSmaGWyn9U1L4"
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
