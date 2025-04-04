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
    "5B3vUwv6TKno1WjyhRfA64uAkQTTNDnyxKBYfjeGgTGHrwNtVDurqB2nsfZVV62VK9CixU1L2wz4WCRsSjWN5tB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QukxBaYMbMSPXH7pfMqAeHF3WNjwAPEpF6sqgTEkcDGuBuSR7EWZPoGqgs6xVnPwgvRCEWvdkzcbevvEJf8N281",
  "key1": "4dNpUxNej14zjD7eKkkTWVN7hsubysjMvjHwHLr21XaZKeUx8NpEkyt1gugzh3LA3MrrUT7k39A5xrQx3RiZC7nX",
  "key2": "4jERGEzuacBme66iTTRDLcdWd3aV55XRpMnRKXLE9tVxgotBaMoZBMmhtcDLtXPNjLHx76sonNcXmqsbXQTbnpA7",
  "key3": "5jLnaHJEtm2SEUYiXuWcCpMR3wYUhrSP23HQkH3BY5ozVnTBwxDp8PBYPJbzMSFnQbB9224vYNgP7fKnFBz3ZpMk",
  "key4": "45i1p1JtJpJbUhKm7qWHu7WesqXWLYdiS44JdL4SrWoTJ9PAv9y6XMaWD2jhoJu9vGVRKovjk4mJFiQCU8dsXTgY",
  "key5": "62HXUSBgDTS6hroig5CYyB6CJd5mEuWKacqj7VX2QQmp46wPgyyZSau1Hm8Hh3RCEAEoGvgJhrWcJAuuRPYbViJg",
  "key6": "4qYNrwnw51zHN5Co2pwg6UoQu3F3oKmjhfMktztHzHodJZJDBYc3cEj3zwrNjh3GdebQGhDJnXtxXzqNxeW5gvoM",
  "key7": "4Bwd3opYac5Jc7eSfiQJMaWbu8TM17Mmaey1gESP989no799UUwxUFXnfQA1SbECFGaimKeobhk5ECQbbhbksHic",
  "key8": "4oriBprEZd7XnUUtVY28FhpfVmXxgdnxnfuWfwdfvPSQmKa8PLN5UxCS8XTZSiobuGmJCRSB6nZgSBtz7WXixp7s",
  "key9": "49kkYs3duNhdrmjhnjxTKqYyjfH9RDpfd82V8j3qjSz1wG4PGuJZ1H4p2RxByodKAz37fgWZC6nJcoyz2bxikwfs",
  "key10": "25MsCstmBixiYuxRvpJAqzWNKSZ5u1CDKdhopsbmjCrpFFazMDUCALXUA1EwrTnT4A7s749SVZsS74iqTSNKaQE3",
  "key11": "3CiQZVMUAb7FMMfSmhHjCSwbqvxWrMCS88XpCafEXvcbgzrt23EmxKmtsGdnX1q4p9mCPpYq3kQa9akQG3Wm9pEB",
  "key12": "4NsUur1QTeeMxRRdYdX6uXUichuLCNoX7nMw2npQopVw75DVKAvWZnKSfMYtQPHDGwPGkSHcrh98jFztRqYJVk7j",
  "key13": "2hSGPPSZi2wMLzE1f9hCFkQjyWXmSECgez7sTVS5F6NegnJmrkSbnYS1VUmk3xgu9QEJFEKuk7smqCDNpKVx8FHP",
  "key14": "3n7baVibBAgR9VHoVg6tfAnSZgRH3BZ4NEBZn1Aqr621XXWRt8ykX111Gjsmn2r2REThoG3wUsvewzSy8WaJpe7W",
  "key15": "nZ6rXJExdw4DbbSQbAr2XdWFizPcZbgVHu9ovq3GMjsKF2hmu2JXhQVBhEAd5jiA9hP95zdWm3EGubpMLG3DVkA",
  "key16": "3Y73G9QddqSxPDZcmMTEHtGDc29CAwRtc9oD4A4ZntAptWMvMHCDqHTxLSXp1JxqeYwyE3g8vSCPdhYQhobGGCHK",
  "key17": "urzDY5itcTCDYuyBTgbtQXvNon7E6zTDzd4EwMio2VyN9B3UtZNAvCCSaL4Hv8Qvqp33aPNqPVYtG1SmDXbbW9c",
  "key18": "2rR7oCXsyVmEkaVwxFh1HcQNVKGusVTej5EpMkbtyEyAzRopQ9pFsy5MU2v21rXX7kMxKuEUaSiUPdZxi5W6H11N",
  "key19": "2yK2t5TsTeQ5VZHtDu7icwCvfF1kkqfPzvGck6gr2dSuu2KR5tmEAo1K1pjKNiWpfhWwJZMQTkALZKSnxtQQh27P",
  "key20": "UT6eZgW7Z22PomKVLmPECVKWeSErZngLXReKXjnchuaeEkhBFSiwhysTc7W95fdALfUtCByJSw8Gh6gXsGTNvsM",
  "key21": "3Dhqa1HmbN9fRUL6Sn5tdUDhxo4rhPYgR4mkAxD34wu7kZxtoQHGDrJ8eibc7qxScLjvvEvbvidhG9nQpaXp5vD5",
  "key22": "4JFFWfARbfpEDg8kW4ZUi8a8JDsF38VQjQai9kfaUNaz68Wu3ZQgyFhPKHSsZgGawhUeGxLdyB7VkHsMxP6W4H4t",
  "key23": "2jFcoEYNH58egKgum95oGB6tjQ1fRKs6ggJcGW5qnxNgtgYEnHteGqpemVBBu2beoCTPg9TWMkWym2pvq3h18RjK",
  "key24": "h3iRzGsF9VPkG4WqgrmsizfFQA2sLfy9DzUrTsf5mFat4pLetRQEnqJ6GQQforHt1vjNsYnaHcdi8yMtzpMDF5j",
  "key25": "5EsrZpnAAM77HNycbZDApU7TypHnGJ7DrYMv7jTCX5W6ZZ1WT9SkrnL9nTX1A6uQCVgCMpofbyF9vwCKpHkwJQb2",
  "key26": "5x5CoMTaPLjGPxNCtmijFBbMoMq1Cdp9eanRHWcfdCsGpH8Jef3kcCknNxnL66Dqp8a7h697JtkE7Fmfn3pzAe8p",
  "key27": "3y85KL1yH9TwadzBoEr4U4RBMLVVKWFUc3MqdtSr3XjmC6xzqv5Jq59zH4qistjgchFL3U7BkwwQZpAPfwz1WjXM",
  "key28": "3NSPVzdjf8PnL1dB41RRGSXXAtZLFkNtyT6FbLT4nme9uu7ogyNeqPCpLCTDSq3s4kg4jPwSqd9wtywBU8SKWmkT",
  "key29": "48a7gPoziotE8iR3jQEe5HmxiiEAZxHqxcdWimy8j4PjJ7oupcR2yHNMy2JFQWc2TBpCv12TbxJBa1TXEFH5VBuz",
  "key30": "2667CKuUr8QW8fVvYnGjXvthpR1GgzkFzsHGgjhWBmUVNZA5ttLFqFMAvQK78GVrPVTVPrMconaKiw4pUDY7eYCX",
  "key31": "4yNCMvrpqF1svP7fmzMSV6cKQWr1HqACQqAQnLQ71FmnurpoXn7sQhE9VjPZGpKPR1oPnuasncD5zPCerZSzTmLR",
  "key32": "2ouD4HP9vA162NKAavWBbHwx4PXCBB6ReiJ6LfGXxApMkGf27aeDBVie9HJ6fVtgKBgfEWhqYqdcDY9HNHbS1g88",
  "key33": "4mqUVzsXKUQ6unJQb98ua7Y62RMNujc9uMsocgEwTrYizH79mmRQx8jsK7rmPRV1mAvizwkeDwMfEusoGD1gfZ11",
  "key34": "3bNCzBCKZ3YFCUA2wQ7HbvU8wqL8XMMYVZswtdKsVaqqzXo1EZkFWYYJCxStkyMmaadp8Vz2ShfAm77ZVwrt7Vyc",
  "key35": "5wMi2dMmb8xSRsz1QUMAWVBkkhUGTYKBmS8bDnUGoibQf5ziCPBYeynaEif86a1neTfnm9L17wEoMgMQdqRa78kZ",
  "key36": "2AgdzwKtM9EpJKpf1C468Rht6kDMycEwGRb7GWhcGGs5wKCoFLeQVRLHLkmZ8ERxqNqp3HPj21B2Zvgve3p8ZgoP",
  "key37": "2R3Vn1Sa2rMDAzwZYigSgdWzNkeDtFAoduSo9x4gT8pAeqNCJccd13dYHy8xvqTghboB4dqq1PDSPXUjsZioMDF5"
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
