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
    "5RmkmaqueHWWahqc35jk7AzvCP175v6UR2rLX4qACm4e1HTGdGXYg5HAH39iKfiwzKdLgY93oKYQASd4ZV5Wy3Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ci9Jy9CLj8rgGoaFoMamyy2qv36ux2n6E5TsauV1kFwVg4qEj62yw2T3KmTgkcNZ6UztcwUbGrDURkAHcA1Ww6B",
  "key1": "23pmPEqT3Bmqkpj1kPGqfKERqP2D99XPGPinaq7tm5Ks1ieu3ZvVbXXYQ7E9ekBcLx73U2T61adG1mJTAtGzw5Lx",
  "key2": "2pMm3v9LoiFA7dW1QrhAqVhRKfo3Z4PeQW2KHS8fxETzU3EdAupePQLzH6FYLDsm5HP6dQ8jGi7stV1RBka1qrnV",
  "key3": "5eVN9515xmivtQ6GAojqd8zapjoqXda8uXWuhkGP5GLrJcdVAcLsXnfPTV6hyw6rtLhe3yT4Cf9uHvJwoqRih4ZC",
  "key4": "3KafD79yFGApgGKTJNfkDUsGVQYqcn67T5kB7p6eJNkGbQmPS2LjNREtsV6JbPucD8zwcPmgQtY7BvpNDiyyVUwa",
  "key5": "5jVcrtfcWsmfbfu9wxn21kmMfW9z4gM4GrvqkCuoQTo8SXKrdy1MJQp2jZpQsG3PS1hXhPMrLJnH5UuRwi8RhVZu",
  "key6": "5AGoVRKAWaQggYMTGRmpwj65jbpxNYAHUJNNeDzVKiwQmzcpiozmKo3ZsNjNMcTWAp9xaC8hN9ugWHcK5325hd34",
  "key7": "41WmzD9CsZBSuk1y5vyagfSwWJqKARutDWd9m4UvvTT65WieR5utNg3UJafsNVyp3di6FjEmEW1VjB2zmqXAZDFk",
  "key8": "4MLoAQMVM6tvaU7VhkzK87hk8rZxvFi9jh1bNG7Mqqbw1mABx3hTsjpdrEDUGuZZFgR59tewHK5ac7sYFSpjx4H8",
  "key9": "jwEpsY1LECScEfAMzxEcAvkXYtQQPnL9vW4qwuR5d7CSro4fXnfKYR6SrrefbQ2nS871CjM8NJZu6dMtaGremr4",
  "key10": "57NAhhL56DjSnfe75pLwHABNMAuRfSwku6G4WWB6jCymrxC5PoAQTGktfhhE3cKvnYpFyEjEEGV1pXtyG5Z5m9Jv",
  "key11": "46Zc4xYfYhSQUq7mqfbd7FExSpRTTqxTfyfgVfo6owaoqhhQJeyFbbXkoyHZw17M6wZRUizZVmT5dA2GpnJnvj5v",
  "key12": "5JD5JccyVd1jxm7Pdvd5JyFxfFeof7EeGo3jcTwDLtGti84UjxZxMuc7Z7M4qTnnZaT2Rvmvas4TMopAx993Kihv",
  "key13": "JejB7e1m6gQMmaZMwVnTDaShqQU48BKUvGNZ6ckeoGBgVeKzz1chSy3MebpFdw7qQsu4KogKgwn45sqd4BeP2Nm",
  "key14": "4cJC4ZqbbdRUvUmL2295YHkg8sJSneghXao4596oQ26wkU3vTkuC4caUouFuyAtHLuvZ4cDU4VjRmpASgvcoPf84",
  "key15": "2Qgg7y8Rw7nCAT1nEcEjYCzsYX6aWK3pqdSP6BpPdRPv7jsYgfRNT9xMMS78heBBBAQngbxtrT6wd5Bd4BQA9oNr",
  "key16": "5dvTnKCy6vVVQcKdLp2fcPdBD6AGej6jftx9KAQF3VMSJ3sGc8bYyX1XfCBn6STeCqaKGkaf8xthLukWNtEVKmQs",
  "key17": "3caLnGeQEXKYhtwJBmVZvhVafkrrkWnxG55wzaRnYR8PbtTmkH3f7ejdR87UgBDJSJGamCajJVawXoj8L5ZF6chx",
  "key18": "6WAs1onZ4SvDN2Yf7YyJMuPgeUNhpdkr5XHCQW3Z2VFo6zf9V3UbwJFcBsWEq5avZPAk6x1LmYabrpiwT8NRHno",
  "key19": "67Akps5vswaFSA612asjVCTG2F6fFkSNMovv41cVokV4XBfNcZYjRz83z99XBsUmCSiHrdMvz8NJ2fLyiPQvnwno",
  "key20": "631mZRbcEH6ShBvwqhYRebQWf2ZZXGkwkbF7rMV2iRUH2oU1cmWgx4XZ8bwApRbNu4qXc5c3Np6C64jbrNQiGjqi",
  "key21": "2QTeBquhxWqiYN77oFFA5TPceX2Tq6ZZikPrFXEMvxaFQsGEpekKNvAJ8MvqAKsQHhmEVjtyHxR2Zy1Jiofygbtc",
  "key22": "3QMtu4K3cpuw1TYWwT4dpi5jsnaGfE8EAxoRmKTz54HhBzoQYY3c8hf75KVA7WyFKXQsH4kiN8SdKVXBBih2KYjr",
  "key23": "5KsFyJ3tPxEbNFWcdJj5eDf1LwfVfUfaVwBCwMiVgNyg52MdUsMQwgWNcp2PuhT2Bm5ZfAdX9DFsegvMUy38hcPV",
  "key24": "53fEiQhXbbXAAVRcAdpQnNLwKxuKbjJZhkZxSbYEC4C9FQKv926uso8gf2kkcenqGGjipoTozhcrVsFF1fJTypjE",
  "key25": "5c8bZr73KJ4WhEi8Yh4tukKjjqEvL7d5d1QeX29uoJLjJZ7hb8hjJJRrb9N22zU1q8GjtYyCpED5vsSFdDErP46w",
  "key26": "4KdPdz3vQF7ZnhVW7XT1Jirzzr29GyRxYTRwFvRf5NLxRxtbZDbCrbrT9qPEi9VmZDQ5b6TSXUfce5faMSKEM8p4",
  "key27": "2mD5V5AFATaiRNsFXsmnyXvTAfEaa2CEK2rkgQhfHSs81Yrmbv2ocMUVSmD7bGpwoSL6XdMJG8EsdTpG4kfLTgqA",
  "key28": "J1ewuyp76uzNDrLqkczn9WB4Mz5gGitZjHVdWoWQcPr54GXiFNRQVYmwXjdi7KW3zPHKr7U3VdExL9ohpXAYf5V",
  "key29": "597AGSzE6qdGnGzPpLpZnwFar3nv1FzrW1UZLHCFUiEL49LjMNRW7kp7k1ZGfTxra8EpPCNFHqpScBhzcss2ChrN",
  "key30": "2rihAnDScUxsUYdpXMQnCKNkLVM5uNHmyfB3BAD1B5yCtFCSLkmbb9oHu4VgtJPQV8dbPqeiJ1CXX5a2JBL9oXLF",
  "key31": "fH2HdAqyPLvPEPwHG69RguTVt31BdX4Zbexj7WfETGoGZMqxgeTj9YXooAyfbcacmrt1inFJn4cnBsFSUs29ULv",
  "key32": "3ws45cyRiouHuA598DJXRa5qyMUGouVjEzSb5HW4Eng6w4FbDWScFag9Taus5tXkotgihp5HmMDJVJFJJUM8NVTn",
  "key33": "5phA1rpBmaEygirFBQjopETRftUQvGUgZdZeqZGmYam6L7dgoZMfxdRGJgp6XApPYpFtJx3PEYgCWGAZFXsM9dra"
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
