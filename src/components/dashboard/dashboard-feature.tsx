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
    "2PmTas35u6RDtj1919hXXf85BJhDbmAXsEx8c8C2fRM21RdTGPBWyRcTG3nS19YycKcqW3uJ1DZ7wSYsPjj1FW8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zm7B18hMKfb3fhWQCHi1SKYEfWovvudVPchJqn1LVH9SUEfbZP69TRhNbghyjwfkfzkmqr9PTxxsECHzHyQir97",
  "key1": "4ocYk6L95GrgU2W3qP5tkQZLEutxCqDzsu8RhgrWkz8HZvZvNn9JeEnAeD9DzsqyXdzUvP6o5V12Me4BhtsfMv7r",
  "key2": "2dZpUYPvPUG8dc1wbjuVgbThcpGTAU6vViXE9H4Sa9Uy7V984ZbjuWSzxhEfDnXUKTLfdWVSdZGbkwBN9hw4eqL4",
  "key3": "pXz57dVwkAqseNvV2gr8CuMTg53n52bX8QELfEMWmbsxAaTNHfHvQwqpoSFEVJLT6c2orLrCcb6AL1oYvAFrGQ5",
  "key4": "CZ1GxeCttp1FxeWvBn4m26qH57Lhnoxfj653NHHMPnNwXb2VJjjMgQjApaT2JUNfBe5iMJEFumtGbDLg2RZU9gW",
  "key5": "3dMJZ6AakdC438RWbtuTbN2eLfaMSgEKmecqFa2rQoHoGX6EVV4ESviBT3FGig2HRWaioTQiuFS68peXQsgCUuif",
  "key6": "4m93AyJrvaWy2cSpxcmcQfaoZEE5dStSuoAPAAEEEfoPG8phzEPUzTkx1EMsvpdu13wGh7htmnTGDQWVaMwGFL8y",
  "key7": "2N5MRb1UBC3Y4miUJXJbVbgbcgPgFfnEmhvn7kzMJ35VCZa7xLXSWN5bS6FGgntWak7NpX5QnAFkk6b8FbRY4zd4",
  "key8": "2uykn8RxS4UAmTs8agKUgg8ZRHJHCuMaoYoy1yokmZb656Nwhwu7xnKJNveUcgfBWWwjKtAbudRV2cYqCWXWxHKX",
  "key9": "49iAc9eDqxKHhjTUydmvuTVf33NMCVS37zJ7QBteAqf8u6D8YdHiiqPWCbhcuq4BsfXG4hYmbTeba2cL9fTxucgu",
  "key10": "45qCiPae6KVxZy3qKHCw6rwC36HcK169GZYrM8Xjr1AyAkjAGaDAzAdVB2ryYcAAXQsMB2RjxaLNL2G9XCjzGHZP",
  "key11": "4X5xj9B3bBzXwss8twdPyFG2X5qzat5HtYneHyv7tekCr58RQuScthFhh58LCg34oGLJGJppyxi7QbjdyWuZTjAM",
  "key12": "2zd1M6vAmenRheGRb1PpcRbQMmK73y1WRrwVTkTXM2QWC1XGmGdkWwKudYWoQF8VFxqW4jxh39QKAxZcmbp4WTAf",
  "key13": "tQwRLvVzYkA1irb1M3JtCn4ddPP8V8ZFQwFnT3R2DSd3qvmHUJ8WvALUojuLPM3E8Fy1fHHAAS44x5yexZ5PdLG",
  "key14": "4UkNQ8VAvZLVCqAuis5tdQGuWnWSGCVyyms8f5SGZgDdQQ3em5TTZGYWF5Jm8eCC5Ufnp6a25od8DdAgMwFjj8Wa",
  "key15": "avbogiuqkoCqbmnhPvzzKGAZaL5yqZ9fviHwJaJhb4ay88vmbgbERDmPMrfaWxMnMqpBD48YG3Tqw93tA6wtj9e",
  "key16": "5qLog96Bs8woDyYJSvxp87keoLKDfogSNg228qQwGWtxCDLEdNMG6BhHFwukPZo2miqbJ2kEqjDx5PK7TtASvkZH",
  "key17": "n4bs7meAtehdWZA9fqdn7qn2SXvifHTrqzeah3g9A7pReeYix6YW8RYZyL6LRTA6TqwGp8CgydxfpWxrMfbFMz9",
  "key18": "38JSbCE1Gv8s1uT54zmbuTEvB8p8rXSC8KZxMcpNNQgVmash2EqJdkoXwSARh8xhZMPekKKWnn5iVmYgKFkFAYpv",
  "key19": "3PPYY2HEnFX2SciBorSCo6fPii8MJUdi1nAQjQF3SHmcc9HjBWkkFS6159q3dxxQ5qBgwmffXzsxyd2UhrpVz6cp",
  "key20": "2GicoUvou6ehHD1Qg15Am4yX4MGvbfX4zRK7CQxjJBrcqAPnsfiPAPFvXxh3meuCQbj9DTQ1KPdUVeBTK9qSFPzX",
  "key21": "Duih76xi7tr3BvQWgAi4AANRaWkHkUduL4PLQtmUJnd3JZGr3tATombPjwvuFKAQfFEues3EzQYLZwSUS9rXed2",
  "key22": "4RBrCvFg398NJn4qEXcfo9XEWYNk8kDPTVpML9BJGYUW5HAayqTcNC1yxC3i3edTZ6NhV3xUmeGZ1ycBKNk5Lbk8",
  "key23": "32262eXf4WxogHgWdDAfesdN2ioidSFMSxmuWLpWKMEupcGbRcwXoq8gxeap1ok6HmW1YEhHLuJA4UaaMGpTGxuA",
  "key24": "ecYwDph4qKprxyjwpgceZRub7SRbQovcKYTaUy7QV6LMXVswKsWim4fgvYZxMzZCERmRn43UrVbQUXdhHVLYreU",
  "key25": "xxbn4mPNF2apqQZ64NRwsrN3okNsjKyCRXAzb72r7WYQJY5YdfEf3mdC6LHdr4kTyAcZpTw9wXJm46PfHyEoCaG",
  "key26": "3haitLPVCfAtrYAGjQzmGhHfAAqjXodAM6wAJpoX8CnUuVQ7XyRkE1L6hHv37XSXXRFFvX7Zxs9gh3pbEsxzmYfG",
  "key27": "49yAYUYaGdG5DCJMe87USHCvP8KgsRqnv82EdCApqwdkrp3StbDtV4eK6X6a6hF4QQqViULPj7dMH17xScGVXB8n",
  "key28": "42BhAhyGit8evRiuXbxsZVENx7EUzgnaSrjzPJkQzD7Acy3H2M851XdHxGvL6kcXqV4tuYQZ2m4Wros5p21eotK8",
  "key29": "1nJj21xo8m9JX48wbujcmXvvsVP7v8nEhVr1o5ZNDBwixWhQEBRzwSZPFHsUQpUJ6xhJHvFSBw94bkfVTXe988K",
  "key30": "udFBPReADe368RuCSRfCXAGE67TJcuyHnRUZv3rGkS7s4oENhi39W49Fkk49Z5YVmT5aqdsakrjqm5GoMbDwkj7",
  "key31": "4nbbhUexu4jpUkNZSYzLEAqpESoGCmyia8dXez4U6wGwEqDray2LRbuHsW6kZWJbaD8sHuxdcsVzFQhdzK9fJRHb",
  "key32": "XZ7tuoSAcx15q6DuwV3ve5W1BkkHGGGNzSAsGeKrfX64D5gsfptWasdHPaj99v1iKsjvDiQF6xw4PMxzGwR5Lyv",
  "key33": "5jE9VkAMZeqUTxqWxZPzXwYqnk6azhzVM3FmqRTNiz7LdJVKBTsqK8uR1cksZKNR2tAsd76SgZQCfBSWW7njiTZh",
  "key34": "5jjCACqMhxMSEf3Y97qguqLinT6fi5Sp7Q2hnnW2zPW3Mr6oBMqETcBdS4RnnBa1cfFDwS5BifiASSppd6eyD4hM",
  "key35": "PU7yNxhz2CEJYTtQ5aE2YFZrt9Kc3rXN2nkmWdQWzahMdE6Ubp927jf7UhYEBsdWM3qtDXvZSaBEZNVSWej6Nhs"
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
