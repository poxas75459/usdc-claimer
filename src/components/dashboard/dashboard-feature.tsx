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
    "2k6wWkSnuBnLFrGacp1QBAsB814VmTxmuBFEStWRdnKr7svqnakVTxnMQu6n5qApgv9fz1ZWgqioi6hb7YUzpgk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvWPt6ppQrFsVcqGSywSXsWQmXDzYu5ptrvnQvQ7wrx8fk7W8LeVzU4upaxFdvyvCzfprr1kQAerDYS5LnnvnQd",
  "key1": "1C1db4TJMxMpKtoi61WoWYDirt5c41YNe33WmA2YrnEpKwZGCnxAPuG54YvcnDfzstu5Zv9qeQFNzHWADjqve9u",
  "key2": "5egqA7XsdZsoVHfNyQYsSyBxkL5LBGVUG59HGpgJPzqp7LKtapoFY6FeM3YsPm7PPtPpwvUK64Yv5gb4WQphf1nU",
  "key3": "3zGBi7xUTU9TiMQHiZeu1qPf6cgQiaaopV8AiV21PmmcKjJ4fpy9fNdFoE6w5mRupv7yiw2W9PpiLssq7AhHj33w",
  "key4": "2Z8znVw8sWJu5tXTcj1Km95JXeUt8SxkUvS2DFWoNpmApjmv5fenNfumJ9coVDe3wiw5Uj8xubVB1wNEVUwTeAxc",
  "key5": "c3bHUuP7ggvPrtgDMKogpoSNK45G7BD6Pu8g7azcY3fS2CipGMsTdJZY7veiaY7p1cED8A4o9HDGfLmozfBgGt7",
  "key6": "25dYeVfrJgwhV1LC7emV74Bf1hMAmNybQz6dsJ1pegiuVs3aCNNXwcd2U9mFezrEHBXJXmusX8gFU5z8i1iz9EQ2",
  "key7": "iKyALY2DHk1hL3xVZ9iDNsS5XJixwVZGPT9GheLxSR1fssQFAK4GmqHoseUEsPFSM8hchwo99xe1MiSw6DH7ED2",
  "key8": "3oWwCbkfavdLD5TSV6s4Ke6KP1NUPbBHfujzCbHgZFVmUBhTDWVaYTcepDfvFByBwEzXjYMoDnDc9Acj8G6fbjA8",
  "key9": "5E4XhWNHn3WeL8jehriyu2XyAHsx1Zvqg8xn5ULn3cKSef2Tp7LPpu54AjUdyw9cBXDaRzHzjPom3CknfvLpwec2",
  "key10": "rHnUG9iwWn2n7UDXwgjPs8S8cBd3BMVxkTtjTS8Ho5eCfgRbozTMfUQfMrcTPRXmXHuhmfEng2FB9LG4Lbcqk64",
  "key11": "2YvQka9c1NKapY4uJHTXL4aoq4yKQgyVTFy9TxQCMqqBC7kNNwntY3VZfBursNJJCnFw7svJKGV785DpDw969cew",
  "key12": "3S2RZjwxFHW2kgWuxpsBYupLXUYkdsTJwYUwTxDzHQSNw3wSzAezP7NSbL6cLiY82TW96r787R9CiD6QHZ77qyBn",
  "key13": "51JFXMRHD4XCmpeqeTZeSyUHrXEuMpjGRS3kp98FMAQ3mTtX3rRSKqssS7z1CgL7L6R1SafmMNUAQf5Tsq5LqxNA",
  "key14": "3h6BzkF8NRHgAfHyEZyYoDWS22zfcmKmaChWCeQHcLLcEr9YMd4trxAWiH1gvHBZ1C9Y8p6UJz8Ko1C9xbKbecdT",
  "key15": "5RBRMaPd6Z1gXRD7LuobXx1UDZE8rWoEZfCm1bM9Z7Sg4zNKVCcxKbmWXiysRKMQaaYq4BXx7EZoQwNX9DL9NLKo",
  "key16": "4eGd7NE4HQL5WkvkgLbGyG2zoF94argdqSw3NiE6R3PW6UqF5A5x79XhPRuwzTFY3AbDJpNfdYq3UDQ9kfi5TVjj",
  "key17": "5dj4SBgffLggc48PTXdQRoGYJZgC2xZxM4gfNRF43Gb37J5EtMUbZaWqFfUMiV2VRGoekFo6bJkqYWeX2izsoBjq",
  "key18": "41BSB14rDSFofCqC5A186XW69hTFN2cgXXrTrbexD842U5K9WcPL41kHQDrUqrz22eQzYNNW1GkBeF9DmDENydzY",
  "key19": "2RK1nXAMk4KW9eqwC37n3b35qi8giMPwCL4fEZu8i6SRED3FqQsT7EFc5E3XbFe2ZS9wfQtfgLUid9DLmdxeQxN8",
  "key20": "5NQ6eseMG7NCZNJCCcLSY9zVdcYKGzDr5TfCnDMWBPFu7kMMenR6fYW9SPvr4EACpS74RZi4LTXmbtvt8zx2nYQz",
  "key21": "2yfoniGURRU8DtP9EYr3wzU7DBKmkio5QQTmGBSZk83EVGqCciVVTQMHY6Us8De1WkGME2XtdDWQxjmtUJ9sdi9X",
  "key22": "2dk5XQ9E839LdS9ZCexJkSWm2QKX3FbHvVxVmSjNm6ZRwjYDu4eCXTfH3bM9t35s1MueVicZ9B9k7Ydbo8rKz9oL",
  "key23": "2VpDqRaquUUfFv6yPzpc42B3sLQg3dVzjG87WdqzuWeuZGeJmoKc31gBAxkV9UqdfmXgRTcyBV3U7r9hFDQ6GQJ3",
  "key24": "5q9Km59FgPVSfoEYRmV6vDEnAwzwExVSANK5jBPLyFKJAZqTdtN7k5nLQoeJvX4CESm9Tg92q6n8dWGX8xv5X4oU",
  "key25": "4o4s6RFMfWnQoPdXxaNeotqn27zfTNaG5cuu6f9Rf6UuvwQ3MEUibva6ER33Gyg2Ts5r27pMB5KHSUEHHYGegscj",
  "key26": "1AWW5pSjzqqLFMHs4EG8Nx6Pq8CbSgz7yiWzocuikprStm27B6mUEypHJqwAfJAt2VDtvynuG2thLFFkR2MCwBR",
  "key27": "4gtdHZFerJ4yJysbaPaMr3HmxDwsFYBCwL75xZErM2M7VEfMcG7m6DLnQ5eLc3jENSjJ26Cawrf4c7zBB6KyUFWP",
  "key28": "3mk24Decz4V6QZRirQYx9c8ufLw6kZ7ySbvbzB1PhbueRdFk4sa7puYJDPdbBxsDPJshASGBdvbVQ1nALMmqbATi",
  "key29": "5rwFWuvdCZJfbv43RhBLsUDqdkSkBFwzyUM5znahScbBbZRziizQM2weuasxN5W93oXtwWB8df5PDxTBAtAtHQQZ",
  "key30": "5y94HL1Jhc9hgkTHkf38qK5gHVQUxuYTzVgwCJaRuuzFJjAgqSvmQU2e4jkYAb1WWLHBKCWYtJU79iJXgPH4YVnh",
  "key31": "4HUzSCoM7UZr4JnRm8i84qy9z8LMuu65LpBSmRc51m8zoy73SNbWyg3z1EF91X4gT5bjULK1pVQB1oxijZKfZByE",
  "key32": "Nybphjks1648L4ovEc5fuKSHieFCsEi8mUVWwW13tPitMTh1ceASTufjNEiURXx2a84xMwN3xYjfpcJqqUwE7kD",
  "key33": "zuKzdTQo5oB5fVdiCDEry4M7SP8AAwwnQK9rh8HQQ2NFjgW57EEf54taBDHhMuC6VMKGoDSQPQTFYbJE1spFqsp",
  "key34": "5Y9cVkPDwCRJD36g5dgciouGWPUWLZ6AaTWNEEMyZnc1u8YJvdFErivgqJKAEFSDQLWWYFcWS9aJwrH1nBXcLGBH",
  "key35": "5jscwp9qsG8xhL4PdoKmaUndzAx2aSdjkEYq2Sy2Te69od677zntpLTjYwBNUWYWQR7fUQZmMw27B6uUFKiEudAV",
  "key36": "4sGEZEPCXtfMyyf7KjUk9R8mL6mTwtsj69QSWu5b55bNdBGASJFBohavg5mLAbN5HyWAJ67AdDec2UqzYzqFki8d",
  "key37": "3xsMCC5MzcnJHmgquEiSSR49fsbhStbYuNBWQaKHh5q88e7hJGFMuBbo6JLLBTvWs33RYK7nV1YC14maR8MMtVF6",
  "key38": "4f3rcUPXoLy9dsqnvkcj7yRf3kEf27kENj63ihjznYHCjGmxcoSwhrsdxwMoeHh1R46VQ1mhARekJTgAt19YN5Xr",
  "key39": "5jC5TjmNFDoRmHafCLFy9whUF1dabW6bKzF4Lq5VcZYeAw4kYirvtemmq47BiZKHojZSH3KezWDqXQMX8XFdL4UD"
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
