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
    "59QYhgke83yiZoYNggywq2G5Z2XTFq4vagg9DsqxJuAmTbqjDRoRsDRHsWtozg5egqFP4kzE6pDrVwT1Ak8MSrxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jcch4NG2qkJaYngDVhzRCDK8F7uGKVmNc1uz7tiCgEk9HeHYVQMxnU8kwQULtHZoCoa8XogVyan7EP1tnTuBaDF",
  "key1": "54sAQaDc3RQdkJZwttyRdnj4x6qMq68bnsG5uMCi1C6cjkj9CDWDpqDjCePP9xVgKGqXih8UFcDsYXDy2cHFJycV",
  "key2": "3MrsAfnRwfqnHA8EgV7VPTzh37uFFQwn2ZnPuoU7DhgDx7web5TztRD2Fj3uUTHU5gG7cchAASS4VtBc7a1cM62f",
  "key3": "2kqaXrwNrzQ8YoFVnkPTNUMVMxBa1pGjdJx2BuNreGzuE1vCb7BDQPVDQoaQDcckaAp12ybtYpMHt65kpKeAZfno",
  "key4": "4xMpSgPS3VqBJH3rQQv53uqAFqsoCuc92dbUp8djturFgswWc2NZfFyKHLSBBqXAHD2osbDmXVMrZbQrLptgWw1f",
  "key5": "5ofzgRahZW6j5ReffeqKJmdtaWvnzNF4c2xDNCEmigArwJEvSzxXUkTdMTDmQJVF6bEK4yXLrisYpL6kpD4Kiapt",
  "key6": "2sxxHubmcDURkuDwPEcRP76gP3zK8kR4HYq5DjqqcgYjHWvmKXtjzRv9aKE26fQkyjEm8mvMi9mENeSY5yZNZVDR",
  "key7": "614QbVCAw8sBvbfr9MgiLuQv691Mt1eSxk1ZN9Y1Qp5vRmJaNL3bszEMKZ5L1VDSjeLdV8VBBEXdvHmUg2px1rN5",
  "key8": "3WHgFc3W6xdYdJFaVBnFQ6xNuDX2Lf66i5NGCC352Hfowh7RWnCT7MFxNHCwhgRx3ewbM8itqeW5cUPcLYZA4fnH",
  "key9": "5wfH8ZwXdQK9W25yvkSX7dFnCab4Z2kcGrVR8rTBk3uDbwLLPM6uRh5b5iAbhc354xQasFfPFN2qTK4hrssRd1EF",
  "key10": "MqC65tWjrgMgmL9H6WT8yKxeQg1nLazrrCxvr2cMPZr9qG7vWJ3Mij7TXzURezkhfNZvTPzE4oZSzL2qcaexN4C",
  "key11": "53ZiPP5sWJwdisPGzwJ5VHfDpK5GUPKq9PLqwNvEdy8Q4fuN7DVwfDgPgFK226qE5YtsnJ8rCKmwiNYwXntf2Vsk",
  "key12": "4fXjwcifxYPJRfGoxbdiD1NZJXSTTH6EXmTLjyYRQHnJCigcBwhhakWEXLktkTV5GYL14kz1PzA6Rb3vuSqoxSsQ",
  "key13": "4vba38CzMhmo51Bc9JAJV9v2X9z8xF6vbXfhzUk2WXZrMuUPKqDChD5jXQ13c2bWZ9vUAWBi9GQTtKC5bCBLQoJ",
  "key14": "3b7yuxkUPKBxPfNhZtqy5gMmNFVSJFqupNdGym7UukYc9bQMG4GPKAXQoCHES1vCLncX8vPehUi5ovu5M9rMri3r",
  "key15": "3K4B2Rq8NQet6qte8h7dDrkHHKjPH4AbcrjPnwejZ2hQkAxDxzMqAJrcCg5mdYkmkJJZ3ZJvkMj7fMToKJYV2z2U",
  "key16": "2Q4nRbwZavp37cUMYFkPDpDmve863A2PGaXpwCQoQZVyz7HBC3CSwacEuMfD2dX67KaYvLfub1jyBNMEATTSEfpY",
  "key17": "35aCRsmdw4DJ3u9aoVck6j5JAkGZARDtCnu51PFCJZTEFSvuwc2K3kffiLj5niDo5GcGwJubHwGzLdA8q2PHqv7u",
  "key18": "5iK9w9pqfsUA6HiWZ7bsWiapKVXTxFYEfWMCtupqWDZzZ7iNtq8wXDRG1b895UoykMVohr4xpF2x5TewoWu4W3x2",
  "key19": "5oxJhKETdQj15AHu2VZ69KAtt3WNGQxW1AXYae2qgSvtDk7xn74WVJyS3QZ8tMG4Up8q4eoYvRdQMicxCtdyThUt",
  "key20": "45GEs5WWzADVTFCL55r27eLadhxLdLYrNC4LoTHanpeS7mpCxd8TjgHkN13gt2T2HPKpjef8zZqjremvs75qH5G6",
  "key21": "2zabQdhGH3rPQx8uKvC5kbdu1FoNqUTmYg9c4x54WeHYx8FiZX2uLmmLSif1NGubtBp14wjqwU36pdgtmnStLT5k",
  "key22": "2j8qT9xEq63CzrvsZiY25msXpReJizfMGaYPPBqwZMDXwQLieEWg2DP7RuFv3uCeoBJ5TzP3uHSjx1XRqRioDd2Q",
  "key23": "3jXiFSMBziWBh6kwof5PpSZrSou5ozcNTnPQJQRT9kDsJDRjBBBCdtcWHfVCBsAEG4TjzquBTwayG3ckA7kELRAU",
  "key24": "1stk7vxaoY6EgsXpAC4nJYs337ZxSwpq6TQn3hKNegQqqu2BhZTXivSmpPcgHofXEebJ1nP6PKTv3m8WhraiY6y",
  "key25": "55twAUtztbTsYAyCwKoX7ji3RLqJ1qdNsrAEK4ifDKhnre38UdiMVq4YFHCnPNMvMx55iKxVMkyAvS9dfzaQDkhX",
  "key26": "25BsLVSGzcDkJcNCS9urLtRJiodoVnzisjVBbcEGLxkqEQFTNwepuS3YZnfiKhbwBgjmMgNhjyYQzABCVgdqKPxq",
  "key27": "NdeCJTXgcTUtHwrx1FqFyoqF5xwCwsjcYnRuqYi5YMHeTMcjpXhGvfLURZuRi99SSUaYEhFcEjGm7kHjbk7xdGJ",
  "key28": "CTtQ4PTTZ75Lk5B3zncKzT3DMpRfHew286uRQ3vzNaK8D6gWGu45rbg3kAvbKyDyrS5GKxcsrvQWRhdknTnGJQe",
  "key29": "mSALqM9ABrR1hHZr5N7yzrTFrwSFQu5KwgNAiBienje9RfxquP5fiENXtWq7EvgqvpcSExeo59rd5QoXkdqvLKB",
  "key30": "5ydR8vouicJ9R4JW7W6N7N9M9bE8BbtmKg48sHEvyn4xVMFdLYo7AQ6LGuxABVbDXjGJpdDMqPFaZoiseshuDPYr",
  "key31": "GRr83xYWaDWFZVv3paj71BKqpvfXLvJDALiebPmNAbVP3EdvnAwAcx7rfci5kHn5xwV7b2a2yUmtn5FxztQ7Mtg",
  "key32": "5wXGrt8YiuEBC4DoojTjWYuqGW9uPpvSwBcp5wh5Bi2Ro4TerNzaR5ZHnxUKGC9mszhwdNQoNaiwDLXGcUP2WPnu",
  "key33": "5PuXg3n9qCP85CxiG1qkxGjpRQvPxaKfmzp6biD5Uxw3dmq4R4e6UhhWP2jMj7tFzNxAWyEfcVCvxvf6iPRWk37Q",
  "key34": "2ZVSixuZQ83kfJxjAQjDbtKcvRsvEyzqzihMVZveRdC1Q6NwmSxMEPG4Rz2FnniTsXA9QwFsqmcNCVcFS8YX1aH3",
  "key35": "31DrzNKx6Z4eYgJKSBsNmjJcXVyhgXdXVdD7nTkazhDUGQvqVvtdrWKgVr2awf6XPAWQYdcrVDvwEgM8pEBUySdG",
  "key36": "4qiyFFeNtg4k9x9dVuShP4qYaP1EghKhctUMhqe16pAdVk4DEQ7xtsN1y4PSp9sZVrCwSCXjZXofHVeTazV449BY",
  "key37": "4WdnWR59cfzTmxG3WVwRSPavBYsSEtkHNMt1cgUfF651GbNBPM2X6hAvo7t65vzNfr4Y4xEHmSBRgVRcC3U9hKb7",
  "key38": "2a6JqswCJXLvwNuYjj1WkL82PVB74dNCDnJFcjepd19q5xcNJzBRq6iUF34ByuNffnVp1QfrPzBAq5VMwhRqYnQa",
  "key39": "3VuXBfKUJSdASXASwQeGnpAJq3cTYAM2nfoUzFRt1RNuzTmNLPEtdJBX8ugDTG4ng8ymNk6cGBJZq9MkrkG4Vhtm",
  "key40": "5K3D8YKbgiKA1uz4tpK9MZBCuBgWtFFiBKhAFYfQ6tpdZJk2nLgz5qgeWfWaK2tdq8E1BT4kM3WcSTShwQ1vQCds",
  "key41": "so1DVHFJi623qrMJZqoCsqjvtUNAKvtdueMvZkUiBtUvShB7GWgvcTiYoUZKtsxwECmBAe33mafMioAGQGJv3uK",
  "key42": "4aWRJaDCvm1jtnKGaWJ2hMG1YeBLEXLUiBwyfeFw49AtNS1kDnipJhTBRdLAzj31Dns3A2xMmwd6uWLUnNrBV8t8",
  "key43": "HHVF3yRNfeAtzzsKuKtXzGzCBdXHQ7iXkwq6BPz7VgpAxwVyeKve9rj3nwDrJ7jjzTLq7p2LpGHXXaeavzRofQg",
  "key44": "jmP79bsgBSSrzPBjzhng61nVxkuwGaAWepzZzUxyYHrcn52bc1kqDZ2NTbt3t4RRUUBh93XpQJpZjvA8kPywwTw",
  "key45": "4WX2um1sqCFDb2Tqpm1qh3wPYahm47d74xYRQ9JkyDgYLnoLaYZ1r67A35PezzSBzAo38MhvRGn5diHGEauu8CyX",
  "key46": "2gaiGphvJv1a9TZXCk7LC444DFXyE46vWe59hHva5zcfjGgSidfv2yjLpiQcybHQbW2c4m27FbMXJ3uJBWRzkQPi",
  "key47": "39RaqaW8L2GSwR26tqQjDSDgzz2CzpoPu5TXdpzjAQmVrKCjT6nbbwCZMyFtdDHD38mY9ik2kA78r2BdFTSV1pzP",
  "key48": "4Ax59dkZtu68Z6K1uXbFWhZS3CsPHSNj37gmWduHBnb3wd1vcXpneBBJd5oJHzKcQM6afphVnAU1VFHULoyWi2xD"
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
