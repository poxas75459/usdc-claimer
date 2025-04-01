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
    "5umEdco3RrMousUYPNtTwcnifmBH8KwSTAc8Q1SW9FC5wvVzZbSwBEneUG92BVcHS84DDsoEotMkB1becqsK2Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DByzFrGDjyu5tZNGFtEc73yPGo2VX4U4RLDNBjHF7UddS7kxm99irm7JPCv6ADpRcjUWsoGeAGZRc1uYUtnQbW8",
  "key1": "2cDikgq3i1kjRCnMX9jSvi1iKuKxV1r6JpK9f9bQuuCy3HSjs3Efp1Zrh96e7ZAYGCcFr9spJqDemhDb1rT6Rm15",
  "key2": "4ZXGCQDzqHFiKwW7zQMnLiuXiR9Mxh46ZpEVbtBWmNyhGgjuA34LGYFZkEdAdP8bnnaJgfnBExTsmXxrqHvwP4Vj",
  "key3": "uU8eq4SPZCiSUeRnwVWQBzwgV9dBvyQDiZiQ9yPQNck1kxgjnKvn8X5rFtdm124Li95WVXUZYJkiucpFvePHKDY",
  "key4": "2AhpzKMyeP1RfvbnCBmKx3AiCKdzYXN8dpGMvVs9PbMwFCciUHxUCK6mayuFdQSzv4RDoFNejCydya1stX2wQjDf",
  "key5": "2RdZbqo6NQEupU9CTXU4GtpWUfbNHwg7ceoZKBuE7XrssNiwN5MF2YtLX4697imSPcGLkSx2hCTZD2ouVT35Zys5",
  "key6": "3sqV15JPpTZkPqTFhsggmVEJZCHtBz1J8FhaURbhPrJB5GcCnysdMtqsQcB6ETgZ7Swz7xZZy5VMkYsH8mhjotyL",
  "key7": "MMK7BBdXRwHYLNM6WJLub2iZHnVuREEmnidiWmRA73U1PJm9ustaR1xW2mgVxM2cRC8vWTcg9JfkhumduRxVgzE",
  "key8": "n1ejszHYpCqLNhuWUKhHWBqT1QBKHC4Mz7TJ8Jgw1SCDPw4QahtXg1XmBqiWji1iA3W2bYUajopWjjmLvC8MNSe",
  "key9": "2W7DfCW8K34LNZTrtqjcjNHswDTAKeUpasmEJKyw4jZ5ZGtF6u4BL1YU1wQayXFas3Y2cHKMbfbj6FMfHXhLATJy",
  "key10": "2vGjnwjMhk73TWE8Cz3TzzDqnpyQ2wXXiALf4D5W7T98mrDguQzpS6aonfCkj2yMzxWGqj7agJh4vcZZNmB8SNQQ",
  "key11": "zgJ2oChrMJPo4MFXyMz5HLTzdTMPGiZJiAm67axVxHgsZq8eWG8YjHoQLqufCSKYUfgxqhkY6xevZGQT1K2gzji",
  "key12": "387q9cgmrfbnYMdQXnirXdvY4KL5iMgnUazcvNXPKcuk8NAfwJHDN4g7Mu4sWLPJYPW35Dgq5CM4kHm4Uygu5TJ3",
  "key13": "VhK3cQxnmKurt2sR7GTbuvuFNgZqruE8xHwvBRjfoNC7GdszfVyEprcfvw7qBrybeA8aZAShyGwNZFyGsM5pogd",
  "key14": "3BvCV1Sr185H632Cee2vuS9FXGzKuf9VFgNiBEX2utW9CZenNryaDjrvJMiXEdfmcUEH5EigwSW7wSUkRWc65Yv",
  "key15": "Z5XRiv6oR3vTJfB8qbUS3d4xpaeoRSnQwBTRiDL1fi1b5qjQChSMosKAzGfto6FDTZQzTmSMKKyRHe9jm2B5nph",
  "key16": "4nDxjSeYugwDf5JLRoSkjXL1giX1FoUKYR1NHR6o6PZNLh8AwTv9SjrHdBmJpYizhaXMAH6aJ6YpBaHLFcZ2nvAD",
  "key17": "W2qaQzSi3Smut9qHoCi5uKp4A2cUGDtteRMJCrzG8F3KHn3MoS9qhfP5mdaniZgVy5EJcKptnoxbdm6Bm3ReUdc",
  "key18": "1z5DtYBYoBJiyTbGCha8G5kwcfvK7LFfcDXF5TtrCeqV2Z3XtWSRCVijju227Rvi7xkVuFAu8zrCyhKBZwt446Q",
  "key19": "53fwdmdY9E73dDbNpw6sVjbbVLDWrmnALbNjQaNW1o9Wtonjn73awbtrY1huVb6nLdJykiKpLyakUckfSQ8qa9eM",
  "key20": "3gUgG8FM4cyPXuREZ2MesoNPBkTTkX15oDTUkc1XhtktoN1BASzsXHGWx6Bvyxc33A4U9iVDNxJqNmZYgPnRSooQ",
  "key21": "2veiGaKCSsfiFKrq1waf5R5pLsSoXWF794MdsoVUNk6kosfDd1XsfUazYYxz8wKNaQ5BQGg2eXPgu9KZPQAFEYVg",
  "key22": "3MgvLrVk4rYwBSsZcDEHBqyxLoJZorfAFvp7ZkP8vX3Eas7zHAsJ46UHAijFmFv4NJqisGdc3EVLLzzgj23F4S8A",
  "key23": "4JSTuJ4MmHHNDsLQoKicm7mPv8R2QdKyfPgrodehCGB4SLKGjCLRrMU1YgCCx5jgVCqXPZK4psiobjhKH2ZiMJhX",
  "key24": "FnkM2kWFWxL6rncvy5Cqar4RRQfXVDQnidS6i5AzoUvB7ohABoSeVQcRmdm4DFcE7QuTk1oyFesVGtGFBVoY7rD",
  "key25": "581X8Qu7tw5rXJsHAxnFK3kK5rkdADJcWpCQjodvewtYzKSSe9v2mFreKMZ2yv3SjUjQ6m79qv35F69pdsAEUsSj",
  "key26": "CFi5x1HTrjhZaP8rHmLQMEecemE6Zz4H8dsDVfzBxArZ7DCSo2bQjGjenhkH4P4iaUawB5jDQQXK2qWwcnizvYa",
  "key27": "3aSiAauh2G3xAUtcX7ZdRpteTHX3vYokEY8CKmJU5Bwo81ksA1HkgwYH9CwtJarKS2KwC3g94zEHBSW8cQsJ12Ta",
  "key28": "3HiX4RDJ79v4BYb5KRAKsVdHESRczrdJ6YjAMK9HoSbM2FtRAYzYJDjWZUX9Bvgn4NJ47xSjbYx9qRWP2wLePunY",
  "key29": "4LD8aWgysPjjdQx6bnUpkVEUBmMd4qid7hwqpoMZ77rcSmeLhQVacHQ6oTdsXHKZWDDEXSYVwPw1G1qMhY5dwq97",
  "key30": "3zWsZvunhfMRicxVxpSQBnrCZWJLpLGpDvuyWQAbeiJ1VbT8E9Wxf39RMXWUtxaRxtR6qbXmthGRrzMfcZ4QqW3d",
  "key31": "2HfeeadupQ2UVqwwCCciZzt2RARifZQPDizjAZyj24zw4y8pKPPVQzP5FDgYiAjE1awPvV3U1zobUQiijD6vuGcw",
  "key32": "2C4k3mU9eYLXYbTKCmAtfvEhi8zbqGB7tVwHxie975tbEBQVUSSRdcXqe8htqC1nTLaJScDMyYq8nvJZEvBmkKpf",
  "key33": "2Fb7kXYH9JpiJ42KP1X5ncJfbTHJiqS2cvCfKE4afkgHt284zRKmT2YVUBLQQZEwMuTTcZJmjKe9qV5MjAwL4fr2",
  "key34": "5qAfcHvAfeC1tZjzDCsYgKkaayUmTwDmpxh9LQs48G94cS7YqqjaNyw9oFwKAEe57iP2r6PMo8xhHxy8kvaDo5Ng",
  "key35": "2qT8Ya3pU4nBZ8RQMuGorZpwwg1mztzzb5ziM2RQvySU857rCkqcE8CJsuykEAHbTv7rtYXMiJv4cHpie5fSKzSt",
  "key36": "3n6dphSFjfBUbxZ997H3rsfzUkdNxics57yvpmiHTAYJ35XCLDDRgcTXELNi2mxeQdPYM78oDmM6USWU8rXCdXfF",
  "key37": "52cYLXqgvLwYBNw3REk83QFsMH4yMG57tKpn92Z4iogk5niQDBb6Es7yw2yLkxQkfLaNGkEu5ZAuRvfQipFK6wnd",
  "key38": "LNPUgqq4oLnbtbPUznWChU9CNLkgtamJjkqMSppbeuykyNKt5a3Y7wGQhBbvr9YRS9P4b5Cdn4J6ZYBVHHU8K1E",
  "key39": "4DsRTRPQwC74hn1shrwx6d5aR5CUNNU1m8cnuxwc3XZKCM8VAeWxchRBAuEJ8cvv6aD1cB5zvAaNJqSNMroYtabj",
  "key40": "5iGpvNeY9mbwDihC4d2QWBFKhxZyTuR2gyB7LxvXp8E8utazdEc4jNQEi7qEg3ynffGivuUMh62UYJsNatUbv8LR",
  "key41": "5AF5bhwjevMegg3DrwSmhCUbx792yZLTptWvVsjD6SHgAgHayQRJwTKEoJcAYjmUtfgPkCCsnhtiJnFYQHaX5p6L",
  "key42": "9H7S7Zqa42QEmioBehc8KdBUPmbWj1TkvrxNHaDcpwoHm9PacBjJ8iRcDamz8WPcq9PynFUSn2FTwaC4hZozVwt",
  "key43": "2EzTG5TueuKhTkhStqfhqxvRW3b3md3p4nfqc4Dwdjk8Lx6gPiFAFg6jhA1rxizDD7rfhhCjp3XsJJ71d4N9UzM2",
  "key44": "2roHp22EwxnkRiToV99ocjBwZBvo3fuNhMuLHZ4ecTWpZiseKLZywDYXSKdvr2wY5GqLHmgK1U4JC5yaMUPcKReF",
  "key45": "qFhReuqMdzTQXXicPLm6tCJknu7Z1tLcxUuf98zshBnsUcKb5sM1ZTssd3EwWQ6gAtAAvZ7Gsf3e1Fd4J193aQa"
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
