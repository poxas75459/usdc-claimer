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
    "4qSgiRQjT7ux5EiphJL4pt1VU83LMQjPJTcAPCzQcr74AKDU55QwUKpYjfhRecd7dNXRSTsN2csZhLHiYWiuPbhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nkuyy3nKxjQ5WjTtQsg4HgAPYeWCeG8SA6NzS169TwPP3f4WxY5RxZ8kTxi7iYnvE7PhbKKZqenxqyhvwzXRMFD",
  "key1": "4SKt6LXEj6vu6FimRvuzZMjdjySWapbUf6XYzXBe72krUXZjqPaoY3cRKFX8LAybjx5Zeq2bKgzZ4HBte9aEszQL",
  "key2": "4wgxUSDgrU26KuSVLqwe32wiNT1HLco7bjC4Vh3ywYjkftN7vu1rHmgGsrykCCTUCyuDDEucbUvK2deJ4HtXPTqx",
  "key3": "T6mZkXrDT2owDRv26aqyaTmq8PoGBxLb62dEEXpsoPqAjyZT5NACMRBLrdLruAPWyeHrjbTVR8Wv7dZyPywEcti",
  "key4": "5sUE5T3AU5qQe4MuBPVH5mRwByGmvssUrNF3bZMDL5VzU58kH8u66SeiqpCbWsBmorrxeEg9p6YG2yaY8hseRUJj",
  "key5": "213t2b67Q9God9vkwUnjyEcBd1PXmrD317KJdXmS366UyFZWx3bpUCErzBHQg72mirqS7CeEUR3vGAeANfu967Lp",
  "key6": "3gW9sk2YC2hpKtdxPV5RiTLJc7EvSm2FadLowi2FV4MhMUFt9PHXinBqo2woWvBgCGSAxJs5nds5HkKXsb7ZD5ym",
  "key7": "A4PyDyTxjyK1S2vJ57J4xckoVnLsB7tdWq5C7PW7RPTW8sz6cx9J1Q5MhXSVZYejJ14Tr1ipBuM1gB4EVfkFoDt",
  "key8": "2qGHgZ1SmkirNDxfQ1jv52zkWGuLZXkb2ni8VsTKjJMXxaFk5rW5sTf22JeYnyzWu8nK8rBmfsPkVdEHESd1GppZ",
  "key9": "2ccfBbzAhMAjH8P6CmJfYqF6MffRPJYAd7QkE2qjc9QW2XJW2skTLpV6vzzqrKdv6M3TNCShS1MpPysx4QjMFYmG",
  "key10": "496nwkWoFEy8KjGpoy8qbf5X2veAoXPVmxTfcg2hpoNtxrD2Hxkae4WYvBL5RhCSVU8mf8gH97Nngbdo9L52PR69",
  "key11": "5uDwDJMF2RGKBFsvxsZUQnZMfcM664LKNeYnJAW8iqW2LvJoBsmCznXXkbC5UNTNNq4QNBpMPsT8i2UZ2Jh5jST",
  "key12": "5iqqQSo7jqyRKgcBBhex1FhgaYApyTVjaJGzSRZtWSb6ox1BScFmZ6J4Cri3wdknMiYgmEc97wpn5ZWauFDpBkYC",
  "key13": "1swtaMQfSgy6ay1xeUYYAoDD5Xh8xmKZ3HQMmirC5PcndUAFb2vgkbQzSsLTpgug4cTBwz3RJVs82VLUYu9KAho",
  "key14": "3Uv3WajaGVWRRFvmA56hFbEvMZRKSvvWMSsFMQEhSvqoYLLJZvb33kaSVdzBTm5f2cpoXiheVvL4XuDVuL4iR4sd",
  "key15": "4jA2bZa33nL7vDC6UbjUU2jzaS8LjpLnaUn699c3LmopFAFqG7ypsNzyF9Hz1nfHapsSjnpYdG6bANdx4xEBEuJQ",
  "key16": "4CJWEPLz1mEN6XchQE2NgVY2mWU2sBhPVwgdmJbAGGTnpq2NX5DypihoaAFKGwRk7WGqGNFAQnrYweZFLu8jQWBc",
  "key17": "4NogSmv3Ww25Yt926wXmTLzoqXBs3pKxvy2vjHEN1joTtPXLhQprBVFipBhwFYqJx9HWAevKHMiDToUp5gTE4cTG",
  "key18": "5qGFXkk2Nqxf7XJypr5DyqKfo8GmEmmb4fDgSTzvtktdUBBJe81i6RGyg4JgkhZgHoTJYppDPYTRiZCr9P1ezToc",
  "key19": "2hWZCskVJskVmp76wiDT3BZ8sCVkatNksoR5Ek6RNuD833SHu4Nc5tcV4pVnLeCmTo5oDPXn33vdFnc5qpQ3XLU9",
  "key20": "Ve4HBad5L6GnWNhQwiQLWDJR57ButeCQ1CD4k3T4csfMFzLPE4h5vJPTX1TuVgj7UDrJNSzLmEXMkhEiUai6XNN",
  "key21": "4ZpD7bEnVBrk2dVEF2EVtWNes5rxobn9en6X6jK5RUFZ8ArPyM6jLS87oaMsBk5jodKrQH6hEjKWP9cp87eN6CG6",
  "key22": "59GHhhuMiZYWvpB4V6A1M2P5jxzSBEG8sw1HaQjmE5gjkZ4ddPwcYrnAX4r9RuqEpPgEaotU6jBwdWaxscvGTqRg",
  "key23": "59xn7Z6syYEsBsEiadmVzwK9i8LWxdoqy1EwUUsvj61dguAhT4GPXKpTwFZdXyVQPwqUjbmsRB15rcMLpkixnhEP",
  "key24": "4XkNbbH52a4RGxGaUHfM3Hxo9JPWaSGjUe2g88DC79uNwgPjXxDUZZ3rNQknC23jntRSTpxBrquBBgMW8yfdaNT1",
  "key25": "4vM49JDiNQbgvouHYCLCmfpjNpSXGpkRNJTdkYf91Z4qoQdRHfFP8v5EByHPUtrieGBduu1fyKsthU3kShsPRTjW",
  "key26": "53ivza4YJoPM46y7cKjQMLDXtyT3NSsmHosyecNBMSScrCjsJmPKYv817Xa8BDcs1RZYd5YmaGGEruFxKV2TegDQ",
  "key27": "3Y9w5TxP2qvcWEqGxKzzc3BgBdaEYQQf6mVtwsaxEr6zUzT9dmzfuj8GGx31jLTJNbCLoQ5Urdv59zDZHsVjr7jT",
  "key28": "4AKxXkE1DSsiDPcWCmo5Fwv2z8B4Wm1rFxRgpEeMSx7fFi1zw4K7FEqdjF6MxBJfLDuTovApdH82PNkwP1gRLWky",
  "key29": "4dRw5cU4mVLJZ7cSKjkX8pfo4W5WjFY74Ji5sKv3bbprMqdzJkCA92ubQrXV8nAkLug6ruwKA4GGs4ovJSFBzdK6",
  "key30": "5paa2m6EY5o8NHMpF2jBDeqonH8A5tugAroJqaxKTf4dgqDfy9Kavf2ErPhqhVvtyPU7zeH4Xq3wMZHpuQ97vU98",
  "key31": "5HSKJf7T1TYuu9zj9aMJETy4bc47tCybWL3nKq2FhE6GQJK2R8VuqA6ijcvVYYdzyAGn2fEtmLRf9oM8q7KMpmJk",
  "key32": "grZuyHexKJLSquVYHVGj2xDPJzhgPhWh1eJjddG3c651eFbYQQdmGraDwrFQ7sRfPQV1jGDz7o3x4ttsvCqLNp6",
  "key33": "3EQ41QSXF3RTE3JhUe54bj7GQ3KTYa4DNMwCBLKhocC4tr7HNj6gVpHP5P9wxm5CKsN2wa3tbbMYbf7kMsdLNjD2",
  "key34": "4qeJTt1aGtP684vGvxZgGNh9bxRuKwRAt7A5pgxqpB4QGhBaZ3fBJhozYjpX7hXdZhYi8643FjYYF6Hu9UFYYDog",
  "key35": "2aNaXNPcLR4MEiFzVVFEDtDkRT9rUQ5ZxEQ5YGsMkynitYaDkh6p2xkyYGnMfHdCET2VnP4d4LusRH8EGsitNaDm",
  "key36": "3YDoP4u5U7RAvZupceAYiu6QUcbtxc8gYy71x8PGtmJKrJrZRZhzA9msK8UXDn4SAKta32tZZ25Kv55Km6z9zang",
  "key37": "3KZRi6MJ8ovkDAkqX5sf25cWFStUukgGTr6KMx6xLgcKEqkfATKJHpG6XSpXhyY1tbVuZmg2eCGf8v1vMxwUnVyy",
  "key38": "2Dso2B8y7JUt6waWCCwqmMchVxX4HPS3TW4WbAdYSCa7uXJ43kLKkuzAkytrmNgm1kuPSVXdtjyR6WjEsZKAYvXV",
  "key39": "tfbiAir9CCGdVzikMbYGT1EcUBVeCw86GzNn3gViwaE6UU7zHRsxrncKc7mQ3vBk9WJiAoKVLkWcfn5BkeowFXw",
  "key40": "5zx7avUjTgY9nkNFDMCeuxjdeGDqyuy4X5BwrUqzCSq1KewEeP6rTvxAQ8aeQ4jCbHRip4HrLYQ9cWDcVHzgDfNP",
  "key41": "3rDFGS8fAn4hdbT6GUiAMRhoWXHkMSfpfH8eddhMRahCu6JKnDj3hQ46ivziyeWfcCo7iBedZXWCPMj9YF1MUm1f",
  "key42": "gGEjinih7r8AUa8vEC14HRirLcYgJd53TtxJEz24quGXd7fik9s74N3DtSHdFdHQzyzZkMrXzhKbxQgdawTvTtY",
  "key43": "4mppHk59raDS5oWSfaRioZw5rfU1gyznSpj28HUuvdszsHeDR1rLuMSB5sSFTFdRHxjXSkvFLq5ZsGyK4jVnczAQ",
  "key44": "2H9wJfTVHeiFHqQsvSDsTBph5AB7oNyXd3caudVSr6Ntqmj78EGkHKGnazoBaS4K57qppRAFpLHykrm3HGXp8Dvc",
  "key45": "329C3QaaYc4Ar33HRfuCbYNp1K99aEcimxdyQbq6EcRKJ7qzaqxwD2rKtMEGonM5Z9tj1RMTZZAM8ytehSfDNq4E",
  "key46": "5ht1av5Z98JmMSVmZsRxfN1j6TwAcRq6Mosv1V9oYJrgg4WJNvqNMT9ec6YB9aiHVi3qaNFJe5rmdPArnb8scy9e"
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
