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
    "4knrHgtgBieeaVxctPgivqYQVX2xA8yvtaGBuz6ozCaKvus9oLaULWmqnwJKhxTj9GkhLmzRBtFuNcnLWfKYcGL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hecbft4hDYm7B1Cm8UNsCCcqrR1fma9r31GyRJB9V4XCVYB2DzmW5rZdau9VunEjQfkvigoG1PkE7ptynCjp5bV",
  "key1": "3P1JkVKK11Miu3m5QBknB7WTsasahWaQdJCzuVBBKzkmz5c5YRYPacMsAW6wCdcADRMnXWdcc8wbHZYD7Jh3UEyy",
  "key2": "85NFDMMvbN8MnkqKxaShhs9B48qBWaebj7bUtP8DPjaux98ejmir947zXRjfoU7cPPwTZMLzgzkQ8rFjVTo6DYs",
  "key3": "UhAdPSPD3FG2A2yURXXkgSA3MyyxjxyTDNCqX2nSJHXUvdrvzMZ2BT57mBDYSJFCSdbvsu6NcDdDz8vpRGrXk7B",
  "key4": "45PRczBpRM3hwYmAfk1tEQCTAAoy9qHLfUo3HsiYtrNsSbGB4JwzuiPYYdkojHmVRKeu1nT22FqCAtqPLgi6so5S",
  "key5": "DrsjoYMNBdnc2uennSmMwagcqVnR584kLgDFvB7qAR1yVabRoqDGF1ZUqzBpcGzpP3evZzqcc9jZWUW3CpkYCs6",
  "key6": "SAMWWHhg2UuJcBizjaeSRTubjdn1uzqPspfwswZgmKBFAVMPTsKi6nEVgupUGnueHyhKQbhRrZe5rZxSUhG5Yuj",
  "key7": "55ofpogeui44YK5v7BVLGsfRkBgBNssFmbgbviYaNfk8GfsttuvX1W4gguSRuJS3cRyMWScXztu4CffMsdEEEQAd",
  "key8": "53ToAvq3q2aF8yUHFbzi2XtVBTWvNHtJo29AcsDTBb5uGm425LXYYYBst9Z9PVVAorfuQdZBiufZ4Sv95Qb65P43",
  "key9": "2MiCcY36fNPpmntvzNU42goNoXMJjxFfepvKQeMAx9sFHuW7Spxubtv4tRkZfAFxM6UWS8sX544uzPQpBrfjPPCc",
  "key10": "5JAVgqzVW61ehiCLL4weVEr6UVvjbxhAef2c2p5nz9jQUb8ASszgKwwXWzRA6HwYbLLQJU2czyUuGtgcE7SB7atD",
  "key11": "3fxYtbZeVpyTLLisxofbmF3SwPLvRT24CBBf4iQLXXrsbVG4bpWunraDSGSuPzmrEfrncuQakaxZrAHL4cC2UfY6",
  "key12": "3HUwhqSBqyQnLpx5jeUaMRVPmPma79CH36cdpNv1xgeDJDkYhxVAPV3nRceXCHZY7J4xcuAY1uqTXwNbB3v8Jf4T",
  "key13": "2Efk8k1D3XJGkr894aqJMLSaMP5DKpd1WKT66drSSZjAcis5wxKn7C1HWLv4UHmxByhLR7oVQtC7kxHwSsY3VZhy",
  "key14": "5CQrLu7GfNx1cHJAZuGNjbXwEjo9ns2nwH7RCQzXVQTT6ugrnSDzBVs6jEu3NzxLFF8zDuN5TWUyswBZy1quW5gN",
  "key15": "5KssATxQ2aE1WVqrDoLPaEv7hRcx1eFdMazx2JE7mNyKzxh4AuWY33wcPawAHZqpauLc9wxryZ5eAx3SZAraXWRY",
  "key16": "3xZybPcX8havm1BePgrXGDCypt6SHQKAJRXFEzvd6CGoaLdGjNtxnJVhehEXsF7meSBcStgJo2jusmC8SEg2YGRR",
  "key17": "4E64uGL9jRHTDAaQLxHtGBivHjPrABo8nKZPrsHpi62kkRNkGZJKgahX4CaQ9gKsfwxu8W2htHadB14XZQ9j5nZQ",
  "key18": "47gTNG7B7FePGu8qNGg1wbBkkCaXa1rf1kcngeVAMJNNCZF2R49Vg5rrMTFTsziwXprHPZ7334Jb8UffieYLjPYT",
  "key19": "5o5kQvTUSWwnqz95c3Khpgj84gLFCWsLr51tUWYBnbskn4uAUk6LqNDTqKzCewEsC2ihKBCAbLfpo5uuCjVrG4iF",
  "key20": "xkwY93ss31JZzSnJLQyePCLCqnibqCnDppzxvmRrn5de3ngeCyBJWv5dJHjtXe93uKkxX5oN66YMeVz1AVhejN1",
  "key21": "3WZTYntwWVJbxXPtpx6gCZFvU7qyepwQEERXnMMQ7K2gPJRn7HxLRDVu2Ph7PbudKy2Xqww2hXG9V2LaR9mCUpv9",
  "key22": "Vtz6WK1hyZnPpppRraTn7MAYxJUzey1UXUx3vs29cn1YewsDWQCk4f7N5W25YKiMd9xkisbjxDQYPyPkFiDNgZy",
  "key23": "2rm66qS9RguqmBX2tRp9D14tJntm5xGSjF9jfMH1RHTRe6fffoW84ToujKzSCt9Mkm5cGMJPUHkzMhVC1kym1TTB",
  "key24": "5RZyRfeyzAC6pm7frtAmRdgyQYvBDv9GbgeN6qFoUi83fBxwcvRVW5HAjWeBDRBTQWLjZC9LraLAoK5YQZUebqcG",
  "key25": "3MUf7HQtJMBfkDfvPx7tzpCfWhEauGJCZmSyRVogePzcvmW7CUqj1dixJ3EoMGWkNbV7xQWuHXYPsUbNHrd3NmQh",
  "key26": "4cC9wMUWfefhmsgUxE7YUAC9iWD4fjxnfU6W4dPRRHDh3YdphpCix25XnLNYqWRnXPzhZxxwSCVEN65ar2XqQu15",
  "key27": "54S41DQHBHjy8tCq37ub1UbhaznjW7VDfqQ2KFs36riiwKH2BUsidCdm6ZoNHPjJvwZaoBvTT3h7Fb73HML2562Y",
  "key28": "4vR9k8nMtDa12syfbf44zejUX3Ma3XVrfWJfUDBNoRXzMzEfe9ih82BmxBm5e6qdeh1Q9REwQ1Xe7rL95ZbvkB7m",
  "key29": "3WHZXqYPH36nn6e2tKydYnA7rgRXHyPVrFd3Uz5QsXzZsWtrvJKSsVS4og1PVGNH6NtQna3QsxXJs4rtu4WBSn32",
  "key30": "3eWubyWBu6LCQdrSBxw3UYjTQvfC8BG4fJfojkeu6FPtwF5mZUkmQxS7fxyrWVnhN6yzjToEpEuBgGws4WWNo5A4",
  "key31": "pBYaB1ztZDVi1F5WsbeLjEjUJ7PvaSpgrqs8eyxAPJjnrhRYK5oWUfkcsd3pNL1e3qDb1PAw4aFZv125oRKHEWp",
  "key32": "7rtZWzJdq7HxxbRbjCqoMiibzKB2pfogFre4jBxFfKdHCFAZXe3qj7Vk6WFyrqJmk8wrwiQrMWpSyX74BUWNkuZ",
  "key33": "4p5CrnW5zPRfgjukD7mGcnuCCL2oPV1nbKQgKrk5xG4u7KwacE4FEhJVVpsGvpP13CGxqdBA67i3mtCvBSoB7Cy4",
  "key34": "3EgG17bzLz4gByaij2MW55GGX1GU1KwK7qbEBuiMGdEQaBBnhv3mfdLqexzSgTZSVLTWW8os6sBiWWr3LTVh8sPG",
  "key35": "5StM6gUqEDXCXHqD26WDpFhFkuRictVMZMxDWqP95vJKn8WRcZDPJyAHhDeu65DQ5gNec7zToaUDhyYN76BAH6VZ",
  "key36": "51DygrMbfpP6RbtjJ1YEhdZakCqd3njQCM1oUYQgXSznJNFMPqbXXmi1sZ2JFzDjsGhwUenjQWQKfZFKJdcZtYwj"
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
