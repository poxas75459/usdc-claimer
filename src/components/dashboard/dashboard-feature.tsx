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
    "3GL2fnDBXUD1NYVWr15aecjDh1nKPpSawacjmy9fcpEbiZzvsukzYE5Wqwick8WHznUAQPdhUVZhmefvALk9aV86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anJY2ZacEXfezUPweaHUojtgC8gCCSr1rb6ccr3igoNtvP7i9aPvdmFEH9eygMRtX242ovc5gua1gBtUHxNe6er",
  "key1": "Sa5KHd3oZsESE57UPUCz5QfMb9Cawx6GJJx2aAVkBV1CV1ZEjEs78KqNxYJvtQGCgzg9XW5YA4dtc8Q4ua5gVJH",
  "key2": "5cg1oGyTpfjXr9kczQWrqf5XJZU5XbV4Jzrt7d8Go7PZTW94SnNvD8AKogXMoC6HL1Qh2LbmEWapgcNS9AhzUGFH",
  "key3": "2XA2jNCQY8CFnP1tzDTWmt8CQVPfRyum4fVMHVvwz2ZrM7gcTpDvTQcnHhrvoQKfXhcNCZv7tNtaoJYNS9p3bQva",
  "key4": "5y6rWzBWP83gxUJSD2voNt1mLqdbtbsCbVyFBpbeFwwbUiuXAzJNSkgWMdUfC5YaVpVcms7hRzAvxDGpSJ12TJQR",
  "key5": "4mKZ2wpSK3MPFH5Kjcm7DZYb2nEWRDrpr2pTRe4xqPrgry1pNZLoatyGSnjeQ54ycdHzBzKRVx9eciPovEfSgAbK",
  "key6": "5aymzjERktwwjUXuPcSwGrBbB3j7aUptVEHXC7ukDajoBYvRSqkW2DfeNT5ibR3G8EuiHcaL3wyeBkqXFV6WchX4",
  "key7": "3aENs5bqPbRxHzJPH3vkpPjhr1XcFiWVCYB1BmEuggw91rHp2nbYe4JVxiGHhiQUc7zX9byiQ6cxqjQUrSHFFCBD",
  "key8": "4jiJiNBCSpBhQpoGW4DonyvNiTyoG98TvmGNqviDu1KCmnM4tvXM4j2b4K6NjybJe4p2rAQLeKMGb6R1NTXdcM4E",
  "key9": "3gwHv716p8JhzBCSfJfujZjGwqKdD6nQgUjnmz7rxaY23jLo4xKdfSJAMXoxSxqbX1X8YrXa7pooAQa1VaxErTsE",
  "key10": "oPaQ4pXRYDCsrHrKwrqhZydrKJhLyozMBEquxzTHsUoPqzE1VJYUdHPipp5Sws2pfxqqhpKXtXWYSYN9SL4xJnd",
  "key11": "3Kh8WywVmjkBbMYLWzzyeFgJ88Am4vQiuWbs7rerk3ZS3TgrqqghtYqVwMmzFuXibDLim2JKD3ZRDRzrNCFZ7YTf",
  "key12": "2bpu81t7jrb7VvJ6XcsBdCftQUX8m1XoAzyh1DmFeHVFQUgpZU83suEws5sr6Ao5kRqsSDhnzKLiH2VYpQAAYfcT",
  "key13": "yQj5bXvT9d3YiVjHAUfycJMuRRmA9tSzGbzZTsqYVdCdXPSGdiRzjWWAYxinEt4iqyqfq3wAANuFxjDcACvw73Z",
  "key14": "2ENMCPgbqm2tiKbfcu91qci5LPgYEdYnwoREh5TxuKvHFjjkZFLC87VfPJtYsFpcfkMqNKpDEW9ri8d95nDd2hsN",
  "key15": "53bFRbDHXePSip72HvXemYxP9E2JezJxCyVLTE65JdMsvRRpg447WYTvgPF1EbQF9znqT8AdpenKgyCzcSHgkeyZ",
  "key16": "3nwxWfaRRf2dWwkHKfc169Rjvccn3xHspSv6rSsnGakSwxXioANc7Emk2eK1fr8fMfyJcc9kEYYTRoyfBNDi3GuE",
  "key17": "4X2nzJuiQkGhVfZnn9czLPRywYt8Ym6WsBtFmqnuJWnFFjQJZVyz9asEze1Gwh8D2xExN3FhySUjqygRfu5KYyQz",
  "key18": "3roxmExJRHoodWLQvpaKzTBtWte3FL7kmXuV8NDW6h3yvW4R9xiqJyrX89uHdJGHpVxcnurdzfNCsA4Ytga8AUZ2",
  "key19": "3JPMu8T2rnsvvnWcC8Mus6VF38e3zFyzx3FxKEh744fxbijJxHZsvEWfmekv8cUBiuiFDzYwDmyMBz6goEsMXE6a",
  "key20": "3YRHRRSvU1GidHs1XT6LXB3CjtaBcPKawyhE1mfcGDkH63qdnBXfFKaxFAVkBoWtqEkaBayGJjsMhhwuitQnDHyb",
  "key21": "2gXcGfcNr1MnkQwVvWzqzcFVJbH3Yrh7FWzEd6nsxpQNVpsoRMKqWWkFwtCJuXoykEj3o4EgBokAUoYhVdudahkE",
  "key22": "4ShbsJyUuzdNcVMwJcGozZdQrtySyYqrpGpce1iqmDdfKyEthBUUbnzKXZfAQZ8aTkEio4jSpZkdP3nTHGTT46xa",
  "key23": "529F74KKTtUNNtTZEeANGMdcWcAUzzLKknAB5Jb1xMwaZnuZ4QCZeS9BmM9Mmqhs94fnrBWrjcWahxaE2jwK2Bk2",
  "key24": "3tRb9A9Y1oyJdEiDCq3MmvpPRPEL4wSdLLk3c9xpxTox5BQSJJKXhLUYnAAyhpDyuw5HhPA2F8CN767h4s2496X",
  "key25": "4xKE8uUwAuyL6gyNSNVa6Pp63CNKAmagpNF6BN9dCQNAvMHZZV9SDjDVmhgshhnX36B5XhrYpikdUUYk8BLYa4zU",
  "key26": "5tPM8CW1tWW4gACaKBeBT5XPzKbzQe1rHMBbatXyxc3x654SZ7xd4CrLD9JVMRY6xxFaX8KDee6w7GBgsRcH7Tjn",
  "key27": "5r6RaJQe7Ks5DarMySQpLVipCwAUA9HAFR9o1LnKmaiLrWUogRVRi872on486JY3ZLH625LDRnqyUeUJn8FUH8kP",
  "key28": "2yB4d6vWCY8avzNHaPQMdpCp5Gm73Ng1KhNi96fVhrs4YgXQ9P3W277hL9EAZXA9RFNdNNJnE2EXwKGY1e52MdGk",
  "key29": "yiuok4N6GjZBGvaGFQ1Yi2wAcoqnFGBHYjfMu63G4SPEe2E2XKYc8f48mPvRf4JUzYPnhGqDVhZ6ZdbbFcQUwhx",
  "key30": "5a36b2kvYJHFJq82jnXPmj3X1WcszQSPbfnKXVJCT3q4CoWMse74p79dFpfKjfx7tuZBV9TG1DB7FQZuroP9KRKs",
  "key31": "2hALcg51Nm1HJreAqVydiHwrfKFZLq11aBn4Zyumhnn4FQir2dFRScwD1M94TEAdd271RzJZEaNRA4YJshfiAvy2",
  "key32": "4hEDftSUdHxFPVcLCcRWZpfHQrVjH5xD2Fys3fnwjChYjtHyZTHU3xhLjDVwiUJuLpHZjYHgEmdzy5huia83mnz7",
  "key33": "2RTPyZaPyCfWfRSif9MXKuB63iZkJQSgk4fbQ4XvfDbPimfEPo8af6uu3zJjMAFp3TLg5ApboTS4vZHfEhkyyt1t",
  "key34": "35J1g1MQMtots6kK3FKcbW1vRLMUDNLiQKJWqLPMeG9QUrVd6UvvYeUBgDYYpCxqCW6WkNJC85LafsJoSwJfrs8w",
  "key35": "BHSm7xiRrASRzhpMVAPFEUnk2vcyq7VXTvguy7uWbdFmkqFSt383UbCZrNXnKmX2Zzt8RpfgfAT6eGh6e68TL7J",
  "key36": "3T4qxbiXBwN3EW4AkKwoCHjSTvQDcd4natEbmVpdwTZrTBAZVRX1GwLRt6Q4WWB2WenEStJaqw3QTpBciduCufmo",
  "key37": "3caGR8sXZCrSr2xDW5sWCQmxHrcAhytYSyMXweGJk6u3pMZE7rHsJLTAtbyuP6jmtuBMSmZMT1uCKqUUCCF6wPjD",
  "key38": "uTJJMcqvnWJ477NWxfB38T7bpfxKwcVryP2bbYdWa5Kk5ur5aMcsNK3vANEKzAtgeCUf9hhQy6pRyVoiNSZ5Bpt",
  "key39": "2qqmHSAGY1rGqgrcKKFmSMUAra1v53dU2JbKKzUXRyUjmDjsdopmrGMJ8Rpv78Nqo66A2c4GQXnYbeGVqGjzqRPc",
  "key40": "5gJhKye3FSfy4saaRFFBqPDPfiti4SefPknxHqQaiqypHPA5waPkeMsunZbbCcJNGyiXVgWVCyhx1emYpq32TwGH",
  "key41": "36HZF625Y1C2A5F4UwTPMMRbjc1vvbb8PCoWhkUBjnbRnKLVhmguQS1zSxR5rQMFERNzgaKh22KzRVMWmQDrM8JJ",
  "key42": "4pQcStQZVQ1XvkziYm6G8kuvKZuQtEHosEsmLLqH8gXD6oEbpxdrhoUeBqEWybXbz5J85vH1DsVds3YAV4EVNdSg",
  "key43": "5opSqGmynN61vxchhsQzXWRBjzZBLG2Cr145K7hCZPCH2UZPQMLhQLczuSp1nkbSZFyMcE3vrREv67N1bgXhYPAc",
  "key44": "5QjKn1TeWVNvsjZBPKUKSfYARb4Uu7U2FpUuKMUxBJcJJgXYHPD8gpS7FzjMB12gsfshMdq5EwJFfMjbSZScc6jt",
  "key45": "Thk5c3KvU2zht855XgNkvZ4pCZ3Ee2Kp6KAgDfSo4CA6C3RiLF9uWLsAALNyTNyFGGsvUZWVkiAH9NU7bqjFd8x",
  "key46": "2QzpRimK2r8VzWAKcQjvNfoZtMUW7MEsmTVmk2wvL6CwAzVbDrapym43toLvqefn5jAZgbvfrUyfVsdKBvCd8RZL",
  "key47": "65Vwa7EKhHy1NZLmYvoNGxW8U65BttaNAkFAWFMS1ABVoXoJ4BmjkpPDF3SJD7Vy4gmDEhbtpviGD8X3iqw1Muti"
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
