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
    "3hpa5Xxpfzfqp8t9ASncFWEaiURwfZ7W5sRMMYhMGnRiUxhzMHVzVJBSzLba5AfdgqG924z2VzvZU1ivgj9mAkz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpxF8L9yRA9tAfHvuJteTnBuoGz3pUK8h1byT6R6tphBEjZoqH7Mt6Yg7T3XHPjPynHyWyrrTtqg4uo3SzUDuP7",
  "key1": "3gkcViyumK91V14KFqaDDNrDMCKZucJtRpo1vCXdegei94XDXggHjxFiMiiVkeffiA3bVxAB8QPUYJJbvFF4LJ9N",
  "key2": "nnJ3XhRLr4WfXcfGz88ouNqM35C6kkqhtT9NrxxxGJsALXXkWjuHuAw9vWmxRuRNALPM6ctdSC31mTrTXfwDoPM",
  "key3": "oPGEFqTbehRfUiASyeKFTWKS8PMEHN8F9oqNpxveWEJ6Bv5BHBBnYHEnUvrfbMD6zogY5L6fmntK3WuuRrVmG1Z",
  "key4": "LEgcB6RPxDa38ofe3grvCSUJh6KvvB1roXsz9VPSkMRvywDbfmwBXyDmhxSssfK3AGZKQoiyuL4W9Y4W6LCwmya",
  "key5": "5Ztc27hPwozcC2AZYNfgd4QQKD2Z8EYQ3x4JbSvxXkQNympVxcDWVZAsUHr7QAgRzoRnH6fkB9qUC5134zTkmTpd",
  "key6": "pTtDJooZSaLmJXxzMAKcLYvteC7Mq6kkmrr1Wnk1aGTswYydEXJw4EYgZZA1yeBzRYgpRWZGubSYEcUiNAFuCyx",
  "key7": "2sMSnkjBrwvSkebdohjASKj5KYnFf2BKiMhmtdyVytytsnW49EynVDmP27w1GNURU8S9uDQJ8Cdby5ES66JhkNCT",
  "key8": "4Qd7WdU2ZBtcbEqq788ych1v3ZZN1K5TwfyBmgqYjtfDXaR4VW7mdbgm4CPFbAMubSZppxAUHfujYfT19ihmftGd",
  "key9": "4Hj8W4hjNZnuhXt4XgeLY9FMBwz9zwZUUSv6q22GMo3uAVrhwNFt9WDYrCebkh9FiafrkouV3WttoXfP5TxaSSNw",
  "key10": "2LFy5ViKUhqfbNUp3qVjEfhT5cniyTuFi2UBaLndutQDEK9sp36sbcMTgFN4Bf7QUwApZdpFupGxP4pZvaRA92oZ",
  "key11": "52PQdjpxVKppbHZ35861jLAC2piD1J8jPjDxkMjfh6KfCz1yff4YydGpDrvhL4dHeC1irr2d8wYbV6m2m9FKtqTE",
  "key12": "5oJJYYJUbuDkiijkzt6ugvaE58roKah4cPCt1SSmpkxamwRDSa8NZHaMJMXBhLiERujP9fB18jiKAAVGJNWJCqun",
  "key13": "2V1BT7U6ogYQRxMvA6LHi527s6Ruh9ZynRAWWUTHXKeWcBuK6DNCerzahNCLCrxUB7bMSkuyyZSP8vcMGmhGaH3S",
  "key14": "2STMyv6ExHvLUiad6rTbaiBuVFQua9zesw7txdp5uybf58CDJVQkZiKnv2wZEAJ2sXAA6XkjfP9impfStPtoj1Us",
  "key15": "3DdzYHUSZSoBibP3ZE8NTutZckpEbTfhceV7sfyK8uZtNfdiJrpWKUy5BUj7itGw8otTwnZsost2Nmpk6NPzvQSj",
  "key16": "3AfExVJ8NMieSmB244wmUQEfHhcswK4eVqB1ZuNM38rurgF9q8dMuLiX699RNTBURt7YMs71Y95Hzy5vdWnFnQfe",
  "key17": "d3CDUQGM1di9nPhTnd4vtcsUmQQdEbpeZgtHkCPtnyUK1HJvSnu4wSh1MRrrfjeGSuxtcaSfPfFDDcBHsKv6UVS",
  "key18": "4guGswMAyTwg3nmsjMa85Z7eiEHpZRkoYN7hFz3SaQt51uN64kjsJefURb7ys4TLPtiARTfiinJ6roxL336dsDH3",
  "key19": "2buDv8oBBsRaYjfjd6YG2JyprVmtM3TFKZpHigxZbEhEt8tS3DWFu7KaT7FpZrJftTisr7fqNqkxoR9XrNyRPhrU",
  "key20": "2X7zyeBW6av5eC4yxcu2CeMByj8TRXnGUWW4cm8MZFb7pyouTfdjFXgZLFdjynjKv2BJ4VMyzkMJLriq7JrHSMq6",
  "key21": "5rVgBQRXMUQ6qitFaiBnnfXfVeMjfXbN5x4uNas8BfdZdvkPkzMQaHnrBaTzmnN53EAjpRoeN1Y98zANMSiXkVoN",
  "key22": "2u9zvpsNdyBhgrpRRcxw9oP6bXihHm5qrhs6DeFWnErQeoXnEKnNhA1fvcyHoutUAtnpvWCavA5csQwYKM1KXeEJ",
  "key23": "2jwTEU4bcXopnH82axkBxZxnAsULB9b42Ru462TPLsCMzAkHsqtNqPsbYkdpJnJ1PYFKPJQKnE29ZFuM5SUdCd9G",
  "key24": "41JFhAZ3kSmcyD5cUThWbQU5qR3PKSHfbj287gf3gzyQewujUVWoBe88yLGKPcgLXddzmGfDUh2FXu1ChLJ3oakt",
  "key25": "53828D9rCLbd8oz1QQy9EXCXnCb89LTTJhme1vFLRRwX66eyNFR2nPdQ1LyNMed86nBKWTg4qcwdYZ4AmQvhx4yA",
  "key26": "3sPEACFjntGiFDDDNcLt4D1TEDcDdD8KHjw9yXyuFUifPjRygjGgsL2QwCdA9QHURJW56Svwh3Pdb7NvqFHm1QFC",
  "key27": "4tbcryg7641WRHMUYqdf5j3bf8jfwDA3yh4qANocqq8XydP7u37eaYDYWSpZzkHo9MyNByvJf8e4TztH1fYrkADd",
  "key28": "3MWG5JXKiJzZQJ8svDKHP3a5NEMfeNCgRyEkshBG7Ld9uPovVRF9X3iazr5x3B5pFc2CMHWxoLSF65qPcnP2LXTS",
  "key29": "2J6dY4RT8WqsoEmD3fYC2oVNFzrvnpT8xBmh3kWrFdhATTtjciguGYBuTXUD95HeYRktRDAAQ625CcyTVRWAeQN",
  "key30": "3xxw4rUgcqkHNCheLdS82pp6LjGk8JJfuX4PXqqeQUvp5Ze1HgR6rJERKJgkf5z5pxyxXDMpVz7D4esMVRAfHRdm",
  "key31": "5SWqyjZaycFqJk8sx1AAfPwPNEHopszBoM8egqH4JtBQo5W31znUpVJq5eSHJjEqgi4kb9iLB4wx9EnvLtao2HiJ",
  "key32": "Kf7TaULG1pcFbzA6BuAEUMBbHXCNCxyCemJC9N2At4BBqFdtBKazSLBC4uFZYPqrsen3MViojSxJ6u7dZ2HvXgk"
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
