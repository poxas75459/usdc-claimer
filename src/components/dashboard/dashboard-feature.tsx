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
    "4VRHox5TMY7bqT9skB2nEF9hScZXZLiVftPoYRLDyXFnAa2gJJ3saqDvDryRVRYFM7SEnJiH7mmNDEemjfUWzVCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZsCJ1Vp37iwHqjpBh29F8QzgDnrdXdSHJ8M4aWsS2ihYV7DBp4gTahDTQUGMuAj3vTkz918Svj5j3Xy7uVFKrn",
  "key1": "5LQEX7vy8nx3zwsbBhw16upYX3WYuNJUV5QSj3JETrEn4Q5ryYn6sJZ1A5s3duddXL627jsc2Tc6WZGTbEqYbFJm",
  "key2": "4hus1akXAk1VwcGRudeW2b9ozifJEx5ChZAZyHChWjvxnb1ieZc8j3TNEruUM9khdqX3RLdutCPadrDR1QxHZUA2",
  "key3": "5sVgnwGxEqYmBAkmZpeAMV3cFBtVGwW58KbWVcrNQs2B1g4mJvHLU7SpoYBNiYboZv3aYTbVYPm3ZMjsj185sF96",
  "key4": "5EE6crL8RAhf9iyGUMr3vi65U453V594R8JuN5EeoPvo5SM4BPBszs9cVwDGEWKoDc5qgqmuCdgpGycSpNAHKxs8",
  "key5": "4eV39DXZqr3girgPanCardxgSVt79WPGKnRES5bmVezNp94HRby9uHnsegGxqKZPwLw37jJUh5ZMaSFECEFRn2x9",
  "key6": "1czgugcg91yYYyZM8wY9jhow7qLn3fgCmaVKbBpaEU2gvi68HNZqpLJbtBdh4Fe7EcEjQB7fzgfsgWhZMb8bNwb",
  "key7": "5ppKQqvidajxRuTTVkBKzxFqdQwxqMyoPjkYbfLek9yGWxcErdKsQX33MhkzQ7viLFqfQJD4aTZWX3wa4USuzTii",
  "key8": "KoMJ9ea9wYh8gkCfuHiumdSW9T3BUD5whv2vBgbKa52gdJr4QK1n7ga4RNp1SnsnSM9XoB8oVZZ3bdsVygkxvtk",
  "key9": "2tcdotbBbRs5qUUSAQEMXm5Nx9UtYW2s6wjRqdAP3NANoobyZ7McCYLgjqY3tRtecGwJC49WAcm45yJ6buWQFJcY",
  "key10": "3erQqGnreE8Nu9SHt1dJ89wB3LKCWTudtTMdkm1Ki8aB1F1Vrf158EP8QZDTonZmHWXMN5SCchfdcU2hjgiiEH4k",
  "key11": "5afi36SzLsU2H6Ne1RpdM1nWVLnwHyZzvw2p8PVWYxKhe3AjWTpE8iAu689WWM5E2g7JKEf1myjjnH4iKCUXaauZ",
  "key12": "4TrHz6K2VH5xDRaJaKVPGYTosuhUBH8rzQk8PJLA9iBAVsdyzCJgAM9s1CTSu5KG3qffR14wstmBxVEANJV1jdW3",
  "key13": "2TsWVxqy7TEGeiCRSHG9MmfmACHyXUoP9B1oicKNxEaGnAJLV3w4H51DV2PfwZMzg7fUJKqRRRPi9EfQqe8Y1AvA",
  "key14": "3a5vuZqQ84tFmpxNJSf6ScA39uxbn9P6Ue2yshB6XCppyk1y4XipFnCucfHjMzdvCswvvGLS5iCqkfK2QuAa8ngB",
  "key15": "m6wEbsJqYecZJfory37jC6hjcmyHeejQVahHiF3Gj4nn3CCsU5786rjbxQxr5PbAS4qqyYaUGjcjgbENPgACEv6",
  "key16": "3HcM2XejhQdpzn7z3HuHTzJzKWDc7yZER7bxDXrHV8mRBbnoSoMz8fDMZ1HPjRpzfJpSqggcVs15TtBuyqQMYBxn",
  "key17": "5N681bTypB8W6hpiAjDGhT8NC1mv3FuSbAHzM3THez1fQJLd7nbt2LgvagFGGJTfuXmRpanpBXypBPf61XXpFSdd",
  "key18": "4FK2THRbpwQe9YPrFYvShqoNaYBPbN3YDTmJCGhtgKnASaywMWXSCEzYm7USV1GNxwpPWMqarsZydMhkCN3nG9Sr",
  "key19": "toMFXT1gTKCE9nnxxMq6aMdVr48WHE9cJ99hxKBDnPrjYW2H1bvmercYYDegYGnGHZiwbZ4rJgpkTrivR8pC8DL",
  "key20": "rd7ydbZyfbYVgncYXaktfWPnMaMH1dUWMydhqaSNzXAWRyRKEW21pHGan72ygcq7zbhyYYVz6YxBvAYvPvZcSFf",
  "key21": "3j7WDYCq5QbHVycacPuvmqsd15HtaM4gxRYiwL5Es5ZKUtCSYDpPjVBkBBVE3ZSDDjZ6zXJjo9RPLcx1BdBuXVHE",
  "key22": "5Q8DWSjSR692aiwSt21mv8qJReXe9PSHc3bAmj7WagPwUdQwS43zEpZeDJdqioK8RzGgSavkPL7smWKNjJzYQUVb",
  "key23": "5xohUQbHQVgkJhTZkNR9mst4mNnqLmgJzahoBwmpp9zvQjFhAzoG9PH2A6czGYPsQWZjDpVabo3yrnf6nkpvjmPF",
  "key24": "4PUR1JMuSTNwD3TgsdVkX9yyscFiX18MzQadAPSNiziiJBoD9e2suH5vD6iBhEuAYLeo7foPngQDAug98R4cAFUP",
  "key25": "5xRqErsfKpucGdskX16KG1JT3V9DArcRj5WRxqL9kyLgiYWfsikyUCgdLTePwF65qAyUxckfAGcZxw12ebBqhASw",
  "key26": "3EG11oF8P78sfRgYoS41KwA4SwepKWRxD6eRTBHMgNHBeReGSm3QzozCoGH1YNq75TLT9pQf3aN4LfvNegq18XWp",
  "key27": "4XQVCosEZAXdHQWbCkKW3FKNaDHRKsW7hH5C4cg9jGfAqy2iMT6g82oCgmH4h4poWPwMmcXpL7P5zH4DWYD3FSuU",
  "key28": "5KNz9VwaKEqK8u6g4TaosSzhBXkQKLFLfLW2m1mZrhwxi6uT7ekejidkKwknoUD2rFUkDSfxjGGPJmNnskdYuDgK",
  "key29": "3mibZuS1ugwmT6sgdEncwHBQCdnXz2sjfKNTDvfxP6LrY93WWtsjvXwJXYx7Y6rskBdVqwPQu1nXtGNnwHTBuGew",
  "key30": "PM3BfpG1WAQMz3w4G8Mnm1LzmCxUpSu8edHutxriPChAiSAvnpMiQAUi1nBAHCwa4JrzDYYLkWs5kX47JeuF8zK",
  "key31": "EuYtfRtnrpLiwPJq7hyW7B659bGf97aW6qSrVcBgPJFsx4VDXjdUqdoKhH34YK7iSrFw8Pdp48qv18NY2yvJ3ye",
  "key32": "2rHmMYnaE4AZ7CNDKZspyYbTwtR6Av5ryNJ8dK6qPzFaNSYa8VLo3ZKVBs2EXmFAF5aLDhRAtRLv4D78YRK55RQS",
  "key33": "3c5rQBXAiPVeQBqW2cmF4jmuRcYaQoYvw7ZY4rV8sUy155eaU7dvxwyPPfwErYPJmbXzXMp9UDcWSeTxig2CeXnr",
  "key34": "62D8NKQVHYgoUDPwsP13T6Q73dR4NpVwpDAtimKN54iRsrurWZ9TVdhWeniJnZLa8JDMVVqg4TCywGxKyTzxhcoy",
  "key35": "JjkbQa8Kj8EACUGVMpQ9ZhpUVdmVk5kSr1MtNDZC3jLrF9x15YGbMQ7t5myvrWJYX8gpRtuWTbVJjh9PWEAdacB",
  "key36": "5TWTFeUT7UwSXdqt6AJBj5Hbwp5LH2G5REKk2nS14xqLzv9C5LB1LRjFozZKHnCPsBSHNytwAThEJp2TN8cj4Yzc",
  "key37": "94XxJFzP8sV9MqxBN4MBCdzjQ9qe1bWQ56P8VxUoJZyhfdri33Lt1V6t7SfcedT9heaUrSicSsUDZoMvo6Cy6zZ",
  "key38": "3ob4nC5DNpTzujJ9yzS4eiYHQ53Q4vDnipD61bdNFMisEx3W8goNDtPDucpfSaYmDZS61muhhN7EL1wNdewJ4vUy",
  "key39": "AGMCgL1PUiFKhz9aqX4PCQrxteAYX7UCCpiL2orFoXDuUAWnwjqFAPDJSxUvuuzpRgcXNrGYYyozT85u6cBup3p",
  "key40": "49nk4wtdY9LgrzJZkNpEPBJY58nBQjzANGtobN5AxyJCNtZkPaETPLmriKVfEDeqbrm9K5CSzRsKNUGuC6bQbiYr",
  "key41": "4f4fY7JhaX7mQqqQHMRYKWQfthX5kckVzAofh384RrcPB6TpS6j7dnsy83CrBMtfq9XD7sEAJdGyZjJTRFgmpTNL"
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
