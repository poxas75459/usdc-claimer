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
    "4GgrGiYdEQGQgjUVDMKRyauEvEiSEL8HbJBLRqHwPU7BELg77BrgP3QYuSgYyhHzFEgnex1Cxh2uBf36wgVSfddT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xyYmbBeWbw6p6CEj2jRVymy42Xs5QnEJeBrZZ325EPfPtabZVBPf1NLsQvQwnAXFMQL96mERRKAWmrvRPwUBAvu",
  "key1": "aYmsQRiQJmL5jDVLdZrouC8Qib7jgdkTPnnoa93nYdTQ9HV8nBMbrpzw6evXysdnmiAUw6WkvF6ZmivCmahSPYJ",
  "key2": "TiRueQ7dnCfvGcXqRZudQ155rdziaGEBgCRPjQr74NTWxJsUibpCGFvB55xcSWpaSroWR7EZG6oHdKZFgZHWxU7",
  "key3": "CK8aBqVLwS8Z7k3q18qJkQqdsTJGiFeerrLszb7FPgRPAdzTXpUJz1nyR5NamypcYrfv94KKzEF3H5PqqLtkLb4",
  "key4": "4hpFJ2XR7CxvtvFZG3vaWvDWF6bZ6nesPwzgJM6LMvsFHE5q6WmdpSm6NVEsC3vptCzXCPQ1m7ebbfqiCHD98zZg",
  "key5": "2GHa2HgGEHRf5ytPLyA798u41uZjSndV1oeKsYPGENJb9Ro3XYEkex6cpb8k8vZ7U172M6KAg4nAMi3pFHmW1oEh",
  "key6": "seX2rjqDKaGaq3mJUNJ52Q9FxXgf2PmxiXwceGbJP2JRgFLLnodUhGv2xpiZJGgqCmbcvLccJ4qF5Fi4LmHonKZ",
  "key7": "4V7oQ8mn7Cu9xq7EDYsZ4GWQzXPWQcovxVEQbygSnrwPTkApDVL7pXj3wi1cpPpF62DenqsMNrBhRjEUXizWrX6",
  "key8": "3p4hq2dLdJMbgeifiMCVCJZniRpLxfgek3UNgmoTZhxvh3bfxqhFGBHo2fukAei9Bi2qfLmhaP6rwKi4u81dhXj8",
  "key9": "QmCxzbdyfofUX2UCCuQrU1hYZiUvoCuNDkrpz9natAdWUpkxy28cDM6HZdHpURNPD2MxXikAnRKsDMafV1XRZ5g",
  "key10": "39BXWUNvUhEuEdnZjriZBEjaqP6nLx5UJNeCiqW4LqE5DG4wNnF2ZPT79LST6GWxrCWaKCnWsc4jNQdQwsCohMn5",
  "key11": "3UFWvACZQjCypLPZv76vT8Dbma6TB2adYcRKkcFZGXAxAtgqRECSzcq9C3xPuP8dQAkqFwR31WkR3tGRzzu3VR2i",
  "key12": "5UbfqLRruY1MdpSZsTmqtbZUQy67AyoFD2uXbikmAWzcsSp13nEdZCSHk4soFST1AiTipv3XG1yy7WkReDLXRuq6",
  "key13": "8JZkrpxGizpkoqksLhXERT9xq4XjuJRaszc1nPmBUrbSgCMqTwiqE9RisWpoYL6UFf2RhEsTjsRB38saKEyyxn9",
  "key14": "4rWtropjDVfdtVd4zGwcrbozN5B28ynULs1tXkP8Wqg3jFg9qTyfb78ifAMq1FDvvYA7EjmWedFwBBcPUDvK7aoY",
  "key15": "4A7DWjVEuGjnwemAzfZdN1C6csy1ivzNbjRvcvMFQr7qRHJZVXYoxFuKMF5CryLaX5yhLMQKgTAngFMSRGxQb9ZC",
  "key16": "5FgsSQBf8hz3kHXGEkSPkjJYdV9PRc2uzeqY7JGBkagZcqGJz9xaddf1XZmqgjx485Fnj7ud1uPApp9V7Wo41Fbi",
  "key17": "2Ww2CBUh56dNtRxW8YV2GSFoEqDgZ1minKPYTRAuQrepUC1e5eCb82XiJ1rTbsQVev42Tp2JkPVJMj1nkYomGTW9",
  "key18": "eiUvXB8qBhsppMMcb2Q9TrFSgV2kdNM4UwjUaqBm7M2gC6pdMgrcht5HUrcm3QRB3vTNNubgJdPfqVi9pG5fGve",
  "key19": "2my9uhN1uSBnizQkg5H7LeMfQXAj59snAHtN3T2SFxmYBzfihgwnXqwC7TCuG7VwHDJukhs7yeXqbnwRam2NY2SH",
  "key20": "2dD9h2dtKMDkqH7WdCjmC952Qtq4Z6FrSgCXqZngSd2rBc2jrC3p2XAPqhTVkj2JdJRZeNySW6P8Y8RMzdSsjaGQ",
  "key21": "bG8mXESPFXmNWrdj1iBeoeEBWP7CzW2dWPXWYKy35RmHM5eyymuurTACW7SS7pDznf7gUQBRFFSvth6KZXf6EdA",
  "key22": "XsZ1HuvavVBAtyrDSLLgKrBy27ax81GHAC2pgEovTRY5fshRkFUxo186uVhazeR5mT1krU7e8jWds47xNxrMZ6g",
  "key23": "8b7rTSb6rhXP84PJeSsMYFp4yNhRaG4qZV3CpMkMm2z9GMejxA17cH814QaHrqFxbGHwnK76CrJMvQ4mEe6NYZE",
  "key24": "nuLqBR4X6adzGfpWUpfPKp7pUCbVdfoJpaLxMyorgub1F7LqWPSvk9NEp7gU6NvZhvVSXqcH9FQwKz3rCXynqqb",
  "key25": "4kRywwf3gV8kVQ7a16Qhup3CDQzjCQwRQxiZU6ziLpqWEZ7m8hhf5U9wFS2NHNYc5Hy8vVicSKiyUavXYS3daarA",
  "key26": "5gXaosM29L9SfSs6pgukbGukVfTrKMJ7gyudZyePVGh9BcgLsGC7zMXiXWV66L1okwpd5yeUMvfwmhrTydmUF3iF",
  "key27": "ZeV24kbo4SRmzhjXv8BDaCm3iZuB6ctwJCAwUeFUujd9FQy1vRm1fHKcyjzUQN5oA8BoHoBhqUGZDkpQ8C3VcES",
  "key28": "2CVkLZBN1YjstCazD1rHJ5udrga96QAY9auJnw2A5wkBonuuA6UKBJkkTJLn6aSTpb3iEVYiqxicXCHNsHPd8SiF",
  "key29": "28K8tav8KkvAcG4Ai8eWSnLDmJeJnEbumYMT2g4S7fcNpCERNUENnGTUFytUsi1fq4yssqEyicx8AJABTDDExpmE",
  "key30": "2KLgi5eFJ4Qvxq3XRYnhfLjm7gyo96ERpjqXAik12Y57nYtrh6i7byoVUd6ACXL5CCewy66bjMq46gigtiZyUCxT",
  "key31": "pPHvjWM83xDKDuraHWHYTekU2nsSBfisF6wtVCmbjVBNof2dZDS9s7VposRhuz4wKMpnHTRqb8TrJmT9nWgDepY",
  "key32": "3XJzdPG8mBCTPyCbfjN3muBpKKvzHmftQAWee3UrAYKC1ZLNtgPyEX8dFnaJhDX3BoKhtsUpuGLoboxp7kEbFGc5",
  "key33": "5icVVmPe9FEjcQqhLEDJmxc99wTofCHzyzMUaKkMiF8AwZWuntqzbXZNosnX8ZLHSR1DZFCzReCsdbxmwAwbCrhj",
  "key34": "4jKmhxpUkm1d1ToPdHSkSSn48V6EvzgHiu3ZHSaCm2E9umNLtQybY8HrBHtxq8G78gqr5ysfyntCuKnWJmniEjMf",
  "key35": "3fwVHd4oHNFHoGfXpe5qCfcMurvm2Y5RbFUyfAP7yr5gHx2YBNcfXCgtfjpXsxjJLkyQ5TApzKRUHEcSqfCLgKT1",
  "key36": "4hRJiUVmWUs389CvjpvVBNxk9RG2h8Ub2M2avDuR24nzZH6frgFJKeF8JD26CxDFdmRLdw6HchHiGPPuhJrpq6TW",
  "key37": "2RVnLkHt9ZAr6V91nXsjLQi9Mnz2XdkeBF9hnPYE9dtj7uajjjndntTcBCkqjJ62Kz9dxwA5sv1jFWz3SLUqMBeb",
  "key38": "4UC6ig7K2BS4rD7DMdWaSN9XkqZT4fPg3pFWfq2uiy8CLKmCvn63sjSzVpEDdkoYxEGZFa2cJ5F4gc4dUGnG8vtx",
  "key39": "5kxS7Fpg9PAX9Q1LKXg8RzYSEk27oCogEiBrETjRgHSYWeD6cQHhnnn2HDFDQqmSYD93b1SA8n6mbAdzdXH4SNpz",
  "key40": "2pm3oCtfEB73VjAJSduNPeHTYFypqU6kZZgqKakikUnz1GdCKD5o5BN7PHtkxYhKYfUsw3D2tZruqqaJkDQ4xhNd",
  "key41": "34E3wd5XUPNLEyT7o53GfTedxfE4xid2TMiVyRP7QSugUV2iEUrbCMa1euAqhMzLf6NV6XtXFNkTWETjdJcrh9V5",
  "key42": "3jqFhaijJLyY8QxLyVTmadtFSmkoYyajfFHsFnotuyzVFPB7kUBi9SVFdL2Zmz6MAMtbRVDADARgKBQgxCwxhS1k",
  "key43": "3GurGGaa5eohMUtFMjYqdv8qWK32u8ZTAdZaUoUYnd3p7UZgVkwBPvcXbtoxHmiCz7FemDeHVwBMLXWVymsX4Dwe",
  "key44": "3BRGtpxut17ZAnQdFLbPcLM1qhvyaMJAQnhSoW6gZYWU1mNF77NV1xr6bXRtT8SibJjVk64mK5N4MPiWi2TWbJ8a",
  "key45": "RNWAMGN5ctGL76YLPEiECQFRVPCehNSUBZbEEo6Z1Ktah9WitoMrwwQUCuJMrNJebduLgP4DDrdTtYM8kpaU5JB"
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
