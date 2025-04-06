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
    "3Y6vbHrUYzSjgK1NtbKE5gTsTd9wPCdgUfwAHUhcup8y6R8nx3tBjh9xfiNyYDsZVkvrEWYXAC8bqv6mxHRMd1Hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "265vuM1kPJ9L655kBnayCthkxyKa5oVQdx916Eecqx4LtWmod9gAMCkAKykKhPQxNty1QXYTE8rCUzm5yboUGhg4",
  "key1": "3NKyAp48W67AS5kMmYFLUPfCxbKD9iK7H4dqPKpB9G1wELNGagyC4wEEY3aBAbopk6w7cHPUJRSdKUev9DuuyvP6",
  "key2": "4igmte4Rq1aFVtZJ97cvvH9eSz3v1NsuD7ve7TUH7iqRFrX57upybrf8U4Y1mFLmiRSAAwoADrB8UeTroiBDbs5F",
  "key3": "43zExZSN1RpwtmE1Vr7q3JkGow74zYHkN3mUJdGho1N3KvwBGWimT92wSaysxvkyRAFnZD7gnGd9uv7tpLwqoHMy",
  "key4": "3rdacJEjeMemsp9m9uUB96G19iiQQCaCesxnJ4hUgqRcn5r4QpD6i44HkfJ13yUAixP65RQzk2vNsJGtL8brMPfw",
  "key5": "5pFV2HMgvBe9yBJ4rjDLJz8WQwk8nD5mENC2eXy8pMaiKBUK8PLo8GVuJzPKBTnfp7AtgmWoJmJXw1Vjz759VUCA",
  "key6": "qHy65ca8dhFBrxZLLRqqVsmcfiMXzfbD6bWQzzENaHjYU6frXmhyNgvnv384XkLfUHcAsxZHoVuTzn1thZStrd6",
  "key7": "4DFnD3cJ8drmPMwWG2HvczTv8yTSDAnBArV7AWRbbTBcq8zNXQxY63U5NwHs6qWz6UeZQHjvNFkYGPVp3kH8sV1z",
  "key8": "5KkmZc76WCRtB9y2SRmsqUd8iyfhUEe9GtKUZNaktMv2rLXq7eVpbdmUkTVJP6Hoj6ktLomawHgqC5mf6fS2BUa8",
  "key9": "4i69LVcNSHUEyuRFFk27AHtACFiUb2BnVKTj3DHQxuSAVC45dn1dNxGWe9EjiBHuNwFfRDA7vMcCWPmsxYaetq23",
  "key10": "vSCMgRqiu7y6oMbhUzh6pAFtduKgqwH2PHhZbFXz3ULBvGXxrNEjV4UbyvMDUVitUuak4T5iJPqBPYGvC9suBCv",
  "key11": "3PNpkspKdpmuC7TyYbB2nr8pGisDzR9Gjqb8DjzYqafhgqqqaGBGHUea5KdgP8azEYgFFwoK5qqnz3HCJu7V6XuF",
  "key12": "636r6JHFKsposgD7FhXdXEPiwib6ULVmNNbZrTpQFmgDVp61HvexaNYqnu4wTAwzPGS7cTXPaJ86ZSD8EXoSBFBU",
  "key13": "5VZJDXMnkepdbPYJfyhX8WCAouuHgqcLCFZk5cYqwiV2jjPH232aFGFw9U1ppaLDCjD9vboExwxkwvZYdCnpQUu2",
  "key14": "5bijayvfJUCU7kzuWpC8dBDEjoXSexhEVmmk22wi32T7AJgrLWHEzuoLuP7dtZDFP8EE2c7zXtt6ReFkxQe9QyL",
  "key15": "5BtqrvvQKq8EdtDXkWi9PqFzjVsA7z1rqW8mdWggHbNaX34caKJ3n3bDcS88okFQSFaEc1DfXsrfawpBRVAUJb6q",
  "key16": "5xDDk9kKwUrLy6oKWoAXoSVMafVktENWN5TupviWajEgfrtM5jmtJUHs1dR1BT2up1ueuT5tG5KjXMdF6F9ZnisA",
  "key17": "3aBVjEcKnVtaqvPwbyk6NkbHn3qvR1A9GjQWDN7YvYJaXWgt29PJzh6J5oSNpdU1Nsz1AJdXRtpwsR3YuV7zNU6R",
  "key18": "4CL8ajyoLh1NQbvRsaygm39b8KzUpVEiR8s7Kyad978bTrr7tk2acEUJKBrp3Rq1o6YLLQaigxNLqbyfDuE1yT8C",
  "key19": "Nc2DKr12WdS9wVM3g2njsRFYuX1hY6ekVgM82UCXHwJ4FGZLrfvmbP8pQiSCagb65u3DPN5KisNPEcB6hqURNeg",
  "key20": "fRdQHAMFcXREcensES7YXUbQMaSYnGXTzM93MHhNMc2iGYsjW8B2nwJfeT1hm9hSXEmToK3zPJyWNUpUC1oTMpo",
  "key21": "9NEDHM7kxM3hrgVaxPqKmz6GT5cmZg86NdrnsdM9SyFxtXQsnyzeyf1hSCwGoamWD8vuYGguY6tebMHik4saMXK",
  "key22": "2v4bWpsdw4euBMdf3ze5tTZbZzqNxrqEqbMK6tWxdyDKjXvbYEKdVrHHdJKpMnCfxUn5qxzQwFK6oz4KkaVouJXG",
  "key23": "GAxSzB2TwNsDwU8iQFPvHistzmjKCofEg8aPW7YYpxQ4M3eg1PCatGbdg8w9qTDEb5xyTr2szFp7JMGX3j1sYiH",
  "key24": "2pdHhDQZ7TBsbNXQAhGmRjP3FQzmDUidd52nN3ZPE3VqU6fQTYSktzjQ3Rk3rWmafFqXx1Adpe1a7FBgpcf8waEg",
  "key25": "7JUf4ZWfJLkCCzrpB5XQVHbZBZP3a7TJ9zLzoxhe2FATLihXqBrwq9Sng7cxh4TiEy9PWsLrxByshni57VCdC63",
  "key26": "3XMjVnwgbCoA9mazN61B3K9kSXRwYn31Yk7BbcqqtXQN6LrvfMaCHWpbhu3FUE6bS1HbtawFBpc8wKMptikNjXSn",
  "key27": "4A5hrxb6b4Cu8XzgF4yy9nbnfLrrzYXNB3aYTfnArL9Apuhq1XC8GQr6VrN9xyNbwA23yRcwzeSH5XeabQAJXxcc",
  "key28": "3eimkSzqeeRpbpvTfdjhx3eCpoApyVCn71nS8z5cuirnrESWPEXWebrdrUtaM1oZ1jnG8v5oXXD1UoL8xJygpJFP",
  "key29": "3HxPcts9h12YjGkLgzcoKr7qXduG4LYTnJpHM8wwFF3noCFNZKMwnCQcJDynmUv1Vj8pFUisH5W5CmC5HEdBZRwt"
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
