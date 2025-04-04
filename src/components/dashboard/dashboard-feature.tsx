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
    "5sHsrs4R4MfzSjjjYG5NicGJ1WRzeP8KcEWRwk2vmQQAnmXW2t5icg8YMSePNtBcbq94rLKBqxkV7JVXZsLSe1XU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8oDmXefjGoKiGhiwcWubqcDSBFuZXNecquSGLDy9HSjV2hV7FJfbgjBWaGaJXDCyrGE53JJ5fAyufRuUDLP13Fj",
  "key1": "5Z3dV81a6TamLyy9BoSU6TeAR2ksF2giYZ98N2mppJhUAK1UwqRtS5R3kncCxBdE8fu1dCJCZnYzTS6hhHfHDp2N",
  "key2": "5aykmALNNJNkB5WJPk99psyqKA2MztjLJXR1BLgc3vFSDRcRUpNMCEyuC6yvP9Ghvfcms74Tt6SgHMqoQHWxVvho",
  "key3": "e9qurqMwtNFXnBpcMKeewG8FdcNaact2GTTV8yuU4PTxhoq8mTMEhLkPYu91EcrHmDCAQhcWQhHCFCJ5Mi3tSPr",
  "key4": "4rqHqHPbSYqiVdyHybXtWd2qnjgeffsKRGQ72yTPC8Aed4JDykKM2HFXyQk1Wh29E8SC3P2invoy3WMMzzq84dJw",
  "key5": "4hwzZMnqoEQ9LNTXAvASq8SmVvqb2LsA9H1HPte6S6Q7e2e1mSfkFntafPMa9BpqnLHkk2wC6Qhmgnjnc1jZhrDi",
  "key6": "43y1ZTsDP2zR45hp1zJNSdorBjMeqUebHx2s9cWBdWPYv2bqJMtuewvfMCSMSnjBpRzLvYgbDAvPpDWSNNViokQS",
  "key7": "5EjrqwSgxfyA6tAHvn5TWZyJKq2pJi1y5yYPDBQ1UuYUXWphGfJY3iTMHgVTxZDo4aYStoihcgLpRVCQpKFaq6gF",
  "key8": "5U9T68xcLimUL3XBJQEVJDXZdNLbyjXHZJa7HqL7hrwquxVzEe6NqLBSv3xJwUYS1PBXBdNpHVtVT2vw5swSZvSE",
  "key9": "YpNWmSdWKcSRmF2P54WjiNtPKqASWxevRicCXNkeP9Ug2nYgVLvh7gxV8gp2KabD6LoztEttraXPGrif9nfXCrm",
  "key10": "nDZrMjFZ7xXiAJ85XCMhRCeX9JHLp4pXLjGChcUqg4P3zqfeXMth1g4aiJQofw8Rk22HN8WYce1zX5M99TRuqBb",
  "key11": "5pVZsm2uk7JbJrsWitDVE3W4vB7W9q3qsxHysUWNGbhEzaEASvPnzZYYW9DBGJWoo6CvDMnrWWHdP1H7SukqPtbb",
  "key12": "3Lgvszw5rncXhtd98QXpgrDuTgzJPrEHMf6DAo48YRgNknGN6DrRNWCxGCpFdZPS8Z38f9HSecsRKA8S2ss1MQYo",
  "key13": "55fcM9djghjDX7FLXFXUtM7qsqDQWPaDEeXmYcaC2ZrmCHixUxpsAmLbF5FaRg1aPEqAoEXJ4xD9U8TYQYARDZkx",
  "key14": "3nyZqMKYSdpFDRBbiRYdCLFE4jyEhrEfWfE9NNj8NQFHKy5F1fe1yHeEMBfqVT6qXUmsNTiu6apndJDKJfUNTTFp",
  "key15": "5maT5ED5Us4VK4YzpnGk1mXs8vJ9Ses8BEYRWudJTrUpALKSj8MFrGfVpMh17J3zbTptTNBrtn5TL4cztX4CFi5J",
  "key16": "3GkUyF77qNPTshxqfvTE1M8wrCwng7uTNaRRG6TV2FEC2K9rHdoKBvCzDHbPFveGfjMfTwUpUwFuentqFwbAGPyM",
  "key17": "2D58BogeAdY8LhRHhfboyreSFyoWRJQhmzjdwdwQVsdwwMmdEjUXXEWfNwJZMKCgU4Vxo1aHNmKPDKBw5pidE5VQ",
  "key18": "2ZBbtAqaHBiX45PcStGfsWqJmyZ2sN8bHPjX9gBDNDVQkT9L7TQhE1VgUPsHJWwcM5WAcRGgTRhGSzEnN2ibWMSN",
  "key19": "5KnBUQr8NmxQjV7dGaC535qhX4H1vbP3ZcMn59aXKtUyHPRFL7K6CQLD4Lj2uGiGfQFAEJrbiDNyLGX9f8ZrwDq3",
  "key20": "8K9WeY96JUY9jCsKVBqbNRpH73e1GS7iSzmm7LCBHW5W3fX332ZkqFgz4bqVL84Nfe5QpScDB54hJd7ULpno6Wz",
  "key21": "5eqjKg6ZPNpyZq8dZ1C8jVEsGQBZ1QNfttUHuqxejSNdK5PRAe4hejKasT2xLMwnLChKYh6WAYKg9n9NKZxiqF4V",
  "key22": "3tFv1gXfEhspYYhLQZLbRwAHLjLbYy5JSdofgBzhaUQvfELExByxpbf6muhq3fP423QmovKKBLSYHsD1WmnHB8EA",
  "key23": "2S1jCy5GJW4ekRr4aJ8J8wgHtXccVrP6uUckcmWv1Ykog7F7N1wEJbw3uu8jzaYVaJQE4AUfa1VnkTDp5qcSuRut",
  "key24": "2KNGfDErsixT4TXkfC4q96Gt2kpedKEqB9KBvnP3NqUurUFDgFdvaefwEPqXTmn7ugeCxvHLjin4Qn8m1f4K5oCo",
  "key25": "WazpzNeioEzqwebv6mwyC5JupuebQEDZ212kRVxvPpkthUYpDgdvWaSvyuSUFcceAGeu7GzJ1oL2uCRwURQgsib",
  "key26": "2rmbea3wD2FCbZN8XHJSMvuF9vSodSn652qmZBN1aBu68jA9fxGCXzc6e3q6gdN5tm6UiKytgUW72GnCZp75wjPc",
  "key27": "3RSLfxbaxmuE2eTLvgjTDRHJbYNmUcAHWQPos9muNyHruLTybgdVWrTp1QLVNvdUnjMC3DFLtmbDgSz9X6KAwYzY",
  "key28": "CgKHZpcdoKnuSZ6SzZRzSgttzyVLcQT4V4oDs1aF79BTyT4QU9fkiLRtC5o2yPc9P22hNZDUPkcxmwmWpr3orFF",
  "key29": "xwJ7Kc3RiKusHHp8fLDZatzPioKM8gvgJ26yxdJJQ8hzCrqhu8crU3kU1PapGvsAZ8tq7v9S3LY7h1sfzBqUsB5",
  "key30": "3fSfq2Ndrd2Z2VEDJPd5QfbzfZyUrzQq5a5cjdGRHk2PPg3SP2yp9sESdBsC5imitdrfvt471tEH3K2VmuustHtk",
  "key31": "4nqbruehKTckBpRij7XbmHLYmFY26TEA41nnFAhZavEhgc5J4sdzLtqusrXGMNAxZ1auaT5pMeyW7cwcr5fsSJmB",
  "key32": "34NoFB7FY1r5saywvsc55J9bWdRm5xiJRfgq6DfNsjrAzYzWoxKdZeQUmvqaRmFpCW8wYTYz6V6VJrsfbnhxgHKZ",
  "key33": "8kay7RZNjEbqPVHxef8ydcNdgcVQtAkb5P7kvffoJU34di9meWKkfM7FSNdBRNJzCCWgdajFcizVi4KX5L9h8hK",
  "key34": "2NF67tn8m6tZxeU5zbLypav6rA2taNKfdLNWDhMdq9RphVJseMMQ4fuBiAX1MhiPnHpRy4rizHzqy3YJAMv3n7cz",
  "key35": "2RGSjrnxfanyMYaTXmEyyoRHKJXHQMzZcwdrjbumT2R41HHECPF4Tyg7PtFwowY6yyBTGYKMsjnkk83f748JLBh2",
  "key36": "4ecb6PA6cUZj8msvseMssF497CNqWDbN5XAiEE3Swcm5zXwZ9CH7FiBaL9kBJE7tWXbKrMVR7UNxQ9Zu5DuN7yuP",
  "key37": "4d3inLuRTnA9JDEzTqyWCegBPZA7sFNikiQDZRJVHKVFNo1xE3R7QyBJcZfS3E9dxs8pBMzbr8PekC9uBALK47Hg",
  "key38": "5bARvJk4VRxGKfd5J8tuo1SMbsUwmVGbjoBrRqiavKkmw6UHs8fWXFLrPDA6W17odgDw7JXXZEzmgerbQqNRh4aY",
  "key39": "3kpZ4vTGPuGtfw62qig37rP7gv4NeCgxHtTjU47c9CFHngkbPYuYJq15Fr7Bft2tpxcWoq2WwSUduNJZs4Lkgjg8",
  "key40": "2gKw3HdDKfALsEDAumwMANfUKj4EQMUSBjsSumuCX9SBfbEBZibwit9XVfgMRRM5bkwgRb8WNp14uZ83SCbmwXVZ",
  "key41": "53EHRJrGEhr7frBMVknXWb3WwhaDEcJZuXEDuDtFbt3jT5X1YSNKhZqgfUL6hVXo9YYSMXFjHEdzxQx5ZSn11Gye",
  "key42": "ZNZC1mxtkxdYskUTqpfuVd1VSYDz9tmXEFJZ6MDRx38YbnHevc5HbU2h8afuevZgB3xcpkxRWa6b8NPgGPnWEnS",
  "key43": "64WqzZpNzBgh1ASEgmFHkR89bYpgphvzxF6bYYr4EzRqRj6WRbDAFfTD6o6VpseXX4XGdtUyphf3gjPfJw8vcb1H",
  "key44": "kaTGmypWemQizMjZF9mnaRiKiDbJYt3D2RYbsfBELFYpm63y55QvReyytGHwTYraCfgVQKSGHzQHhowXmPNXNav",
  "key45": "4u8SUJGY7o4N83NwoNsajktLdA6SuRtJMU762zFFY2Aqu1jdxhyD5d5UYk57BNfJ7YuBq8sxGRJnnbTS8r2EyBaU"
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
