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
    "Bt4behT4BZeUmrX2GymG3s2rKBVJSrjAdvng8tQE6c8NS2JFppASbrJ6XqBwfYMKd6xRaEm2ZzuEBqTBroRfJmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297QavPUD3SVomEQBMH227yMJi6XjmS7b4Dy2sgX2dsVLzQdw6jR38k7qAjWsX42yxxAFZZ2gCsQLqDq3MtsPV3j",
  "key1": "u6a5F3tD38Thmp6dRHkHsa4EponJRRAYtHeGT6dbrJrGQcpkRwoNb9BZ4ZRBTRGM65XBXatVQPe5Nn6rfM173kR",
  "key2": "3YQBpAsAiUEpMMqVbvtFHRoLP2Tnbe5Xn6pVrJwNQJxtTrZKqfNPJ23JeP6kX9ofVsQeYnTf8PbGheJ9Whd7cmRt",
  "key3": "4T8Hu3tmJRg1ARgStkNqifrCSTZaQQnXU3HekFeLbBtwWuyfGxpkBjF8ihRzH9yqgmHZeNRnSTaZR6Wt9i3CSvqr",
  "key4": "5drvxsV2o8TdzMJ5nBR4iJpUx9iSoHsriG6JsBXDQ6j1RHy769itdmm8iySsNeziqEscwbSsFhmfKbevpmnA7tPR",
  "key5": "Q12SsbUXom65Vx98dxof8qYTBZxBZSiosifGCx2JTqqagpcJ1nJVf35pMpRqcbWmjfvidEg2s94cu88cgPwbbFn",
  "key6": "4ekNbw1k3e4EKMAPeV4oAXda8qE1wnEKBUAbrkC9f9wiNaUv2aGhghoYuDs8RM6RF5AEBMcaPQLcp81zcMzUQdXq",
  "key7": "5FPKtprQgXJM6f1CWthWeViJniY4ZoNg6Fc3sgsyW9ZkLSwfpcZLR4S5QAN4cr3MZprLsHMVy7ZDseMKzqs4pQj4",
  "key8": "2M2zBf1ZbPN1tK5S3nxgX66mV278A9G6UXkr2URdaFgvgF2qorx8f3uL9DqP2hVaCFcrgGLRqYc9x3s5kaJ1KhoT",
  "key9": "pfwonLrZHhUCneMWZJuZV21gXwBPa156HWFtHgRoDCWSgatLzhHTNmTizFxxSHykfXE8981r8D7oZBWCbacaVKx",
  "key10": "46fv5wPY9qK7vbhCr3Jyo6nw1RYrhP93qTbKKc1vRQNr4gCy51VGz7ACARTucg8L8apJzbPsEcQ5pgKWheJBEceY",
  "key11": "3ZgPRM38FNnWStBQXsD5WgQM5QH8ubfbB2Vkdbup3gju1xUnbqKshaxiRPWSeRQmvvWhqZKqdZ8CqLB4rNW2Qk1S",
  "key12": "3jiEZwXgGFA3VXjLJkDGbT1qhTaeK3oYSYSctyc4rWnzCf3GcoTP4Z6pYRpSKJm43Lnw8jxC2PwPEhzgrpeEdtuk",
  "key13": "nDU6y4nq3qgXr3vhyQMvsQAJP6v3CLMHcZLfRJuAJT8WawmgN2qGPUttZ3pcHbt9HojAKu9a77T1NKW8jLt1BSw",
  "key14": "2kJEa5CXTPnnmb6U4JJZqVNh7YVh2F2rSVEPbHSeDEwbStGnsmjRx1o1j9L5XT4WATx1g6aS4p7rTZ691f9dLj3f",
  "key15": "4dh97icanraN3emn7n2SFW48uPFfx4BPrwwjNaVVVBD4jatnW74iBk2np5wY3MZLu1VVwhY84g2KQQMfBtSCaEHw",
  "key16": "5NZqEQBaodhC7DBPJ8haDUpmhotQzpAV63TmyGpYaUfQMefj9wFd1rm1oXZDj6neuZq8GMuJXn6R4jWDVj4H5XFc",
  "key17": "4RyooEFWWDFibPUJXLke7dF1Gzt6Ts9xtGQxA4x2sekTha8dzwj1JmHaAMY3QfBVDdfbCQtgeUc2KyUVEEJi215o",
  "key18": "4jMG3eLuTKpj7fhFMhQYYApZjLAvacUumF6hrLq7WNS2bFTMP1kwjFMaHXf1kGoGBbEghm9iyc74N7o9vVbBTwdp",
  "key19": "4rnaXe6zm5JJadpZATUdAFttgWPZKBf7baM3t9U1VWUiD3y7Zp8d3ZFyRjyzNDdTBQNjaYeFQHGbGDfmF2NomgCG",
  "key20": "32i8VRATK4MotXmUmxUWtef9c2n2iXzuywGuLvKZYUjN2g37tTtqNtJaZ2Dr53weeUWZZNdDBmJjwCdeFAyQ1oJV",
  "key21": "5eY3Tc7zv2P5GsWNMbxnJCdvbB3Rx8z6AVau3MvEciphdbiScci1sLHwgfCoR6pw6hSDm95gMAQkUEFcqXP8ciuk",
  "key22": "Lw6A5gAuJUNvhDqa8BJkyDpLaH3bU5U2rP5SH6y8vvPzgLsXxY8VDk73EeFHWgMeVdiciWjqu4knMpWbFidPGEj",
  "key23": "2FcFRUpknKdnXmSbBb9XZEwrCzFEyg2NLvBatQjt66Nca2C4CkkfASVVC1mjkLp3UjtRa8dSYQvrNNTF1xjqLY8U",
  "key24": "y4tgE7AhL1JR6536EbEFAGssZpPmWQ8XFxg3zGTRBAUXXEwX34Lye4KLGiBM1Y59JqRAYCMgTXcz3dixsHPRgAN",
  "key25": "3NKqe5HoLhpziFuzSP7iyj1hmh9JQBNR8whEbVLgjMWRTcennfUQNSWDK3iWc46Km1pxWebo2WYXsX3zuv5i6REx",
  "key26": "3TciaNrCSRdAVyqSPA3bc5igMsc95U9miH4PXXEiS1zVGcZatkz1pDbJ9Dx21qd8ciqRGn6m1JL4LSsBY1z7FN9o",
  "key27": "23cTUzk2y49HQN5ddRLzGibRBF5G8jzoHQCo82LWz4eF2MfpxdEXKqP6Kj9ZEkfJUahs6na1HZTgFnQUYiyMemHm",
  "key28": "3agFiqL4586tzWkRMEnhNH4MnGjCqC5BYXtKhcKH7xkLooud9UvsKVyDnUZX7rv4PDvZM7m49afX21zUUEK6ssTp",
  "key29": "67iNYghGwoKZuvFznoBaS4WykyhsusP9x4mnypZJKYrx1B93r7NfNi54dMJUnTZztjvtBP4fiEvLDqEj1HQfRvba",
  "key30": "3h24osxaviLsboNdgum4NwTkWgHQSwJUUrG1E8nV6t4QqNd68LpK5JDQfe4dedtE8JEWJwUMgLCn1otNrjNMYTc8",
  "key31": "WU3UPmWr4Xz9fiysfoh7K78iPRCUNXXSJYqAiCEPTEjvh3wPtSzhQVndRa6sbX7QXdCpVFAWXi4Y4yfqhNuRYXF",
  "key32": "33pRFBip76J1eiEX2hJScqw22LY8kD9qL5CfbpXdeH2VCVNvCCtbL5QvLK81QvNtM6HWKTp2GCd4vA81iJ4PNrxt",
  "key33": "3jYynq7uuJfqzGmeczj36o5FX7huVCzh4rLBBbuh8NYGdUBtBq6aEH8uR3X3JUDKY2oSHfFqWBgRcjtJ6voWVNeh",
  "key34": "4Pv8ueCQBhtUWVYUmDHyKLZevWRZk6FQQTGiKKVARt3az5LCSyNa62oMyK2NLznWKRY36WH5iMpdQNtp9dsxgt7J",
  "key35": "3o1Kn9PqQ6Ztr1sor56BkhA9YX73KCuae8mDVwXSSXtLhaE1Vec76voT9u1ivCxRdEreg5BzFM1jVitVzCCM6hQy",
  "key36": "3HuiqXADEtPGDL49wFWsYm1CSP11yADgFgQSwm4f4bgKbhJ3xXq5xLbdVippGYXHH2K7wYzVMu6j6y92NHAHyZyS",
  "key37": "2ph4jowtQoXt5CPrn1uwjdsgLWWQqZEBaJ8y8jeWWKeLQz7gzTQPehFW2qLJRskMAAsHxDbwp3Vx7nNo557cEbPZ",
  "key38": "whdooJtCDCKADhFSPEccFabY6WMg5U4jwCnYDp2gQkPBV5b6mzNTEgRvY8yW74s9aGes3JJzzJmXjuLqdqVfH8R",
  "key39": "4DiV9MX7WbstYQFyCm5av4JGgM5NpTmFkJYMoKJuaysNhBigKssykHYb88jzzjJXHYmQ29jm1tNonv7WfaeUsu7W",
  "key40": "3xRv74XJeEpjoXwrdh99waYmCm5qbLRu7H337NcLm4G5YrSyUgaTjruprW5jrKhg5kPzqb5v8K1KqB1sx5caNuLS"
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
