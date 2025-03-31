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
    "3zrET9gfJspouYKx5PwuLoT4epTJfTjBqpsdaRdZqdtqxDYY9NFyYpXoyLHrCU1kLSZC5RUTYmPBAfG4SzKepPXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ncsRYKxMvhjjr9s4rF47uxzxd5hvDG8PhgRzpS3s4VaWPzdKby712oySSYz23sUxkvE2iXufpJxfFhVKPynco6h",
  "key1": "3RuBKTkrsQpN8y6cK4eCeWaoSydWb3DvGCgQ24bryhALhNaHzA19K1Gm2DMbJ7o7PaPLo6mq997a7sAfLuy2RZYh",
  "key2": "z3XJP9NUHkSoybN7xTbhzQdLhpSSqSQJtpcc7u6uNjqwpngfP7sNt3n1nhwQJDSi3bY7XcrMyXng8RRxRRptr9D",
  "key3": "pESQBDMBsciYz6FCE3NRGuvyFZVFdPsXodeJ4RcSHHx2uNmsQ7PyyxGPDkKGudV6rBWS2AYVsjk9HtgR72vb5Ft",
  "key4": "5DPWW2arvSPAgNU76dv7S5xWV9rJTEJyPTrL5Qv1jF5o34wymptQBdSLGndbM1oFCA7i98FohE5yHgEJTRigbfyU",
  "key5": "2fsF3BmXFKA32waCMcopN77AgTyu3x6V3NDUoo6bcufTxbD1azSjde8cs84n76uEMvkpXTJwPLAtCTXJ27Xs6KqF",
  "key6": "41cq5BAtqbA2xxTLQ2jvy3YVC2FjfCykYoPttvtyMzumo1Q6U4xwsDwYkWZXkoocGSAWcPx98A3mZibE3AWKDyyZ",
  "key7": "4rsX8VkEEUSRTj8jtcfEuBK6LDDayo94yK4AAipBqf6JiU7iUERo48tYigQ6VPW84iWVmm4kyUji535PJxkkAUK1",
  "key8": "63xaRaE9YZGxUiUvrSDzwhSeEMyZJ3ChwyaWQU43ih5AdWhNgxKsmavFDRo6Pnefcng8QPiJhAh2r314FS6hd1kJ",
  "key9": "2SrShDAUtACDnJk7XrTy5uA4ZUkgisjSb4vPvPrTG9KcxdHCFp2TegQjbpErquKuiSYVRghfNXqqKxxwhSPRfy3X",
  "key10": "3TFz2e3bwsVvRqDT57XygWnCH7FZuBwg6Z34vVhRTMT7szdBX5Vv72nPQuJPNjidN652y5tcbkWzFiQck6MDie3p",
  "key11": "2PQENtXHrPgaimKius3DNuHop5XxE2ageUPSVRBo7SCtC3xfCWGT8QsrnvRqauX7q2hUckJMMUK5snzNSE3Jdz2r",
  "key12": "4hvtrN8JyDZkekHYYXtmVT7YzKRm2YdEttuaR5us7UQFEDr7A7UEJ59vzRZ8RkH4MnLFFttsm6RJvWvi9zezMZ6b",
  "key13": "4nubafyTMjVUgvzH1Mqir3ytoew84RVjVayLgSbYFdjj3Kweb9HZyyDZXv8qwVNGmNsDdXysw9v8YyiqNowFePZt",
  "key14": "43TQd4imvahd6rb4deZMrr3hxudBrzJhjsbS7qfM2RHCU2YsaH64vSH7YxGtnrcminuNsHoFqvnUGrKuqe7vTfp1",
  "key15": "3t66AFjsAknyH1UZwF4tqWYMh6EhppTHUDmTohfZDQ7gNZndpfEd2Z7pF5doaQv4WjVP6akDVpJKECGSfszDSj5S",
  "key16": "2i3McMy7uz9KvHoW7dLS79WjhvP4Y3JMWycV1htFSh7mp7X8Ynu8SiNzEuEZadxUdK7af2Gq7dGYmCkKVxZE8XJe",
  "key17": "2UZsbfD5dUW4uXcFpTE1sH1XDD4QNJgPfQ7J5gZBPG2cbju7feLuYMomUs4NMAagLFSUds8cnH4vXqrPSnTxWyGB",
  "key18": "432LtobPRZHnYXy73ofVCp1mcuK8AL27YjX66nmyuNdWBUQ9YtMW1gVDe6DKVYDUMGuwLPA7HdAM7DxfgFdWZ2au",
  "key19": "DwcUPeiCxs26fdyeo8CrtsPmhepUTsrpXwA3z3jLGrnMMgc535yUCv2WHPwW9Kf2BkLxpSzdqYSGufgEbkNi7HE",
  "key20": "3frf4Fs2Yg1Q1c96tcaZmxeM1adFJJxGQSNrcvzT3HyiNG1njmicNC3oh2zUYnpw1T1AQ4Zd6DJfsPnecb2NGs6R",
  "key21": "HJ1nxYgUyVwaG5AVSSYYkNU2b4QumD4iitJUQ6jsr3CoDkv361TvsTChzLUt6QDYstqemjsM5prkNvrTyjHHwZk",
  "key22": "2wh7JULhj817QZj5JCXJ6hzHLudn72qJ2ywQE3qoDt6wvjFc5vf7rLEaNrw6uthjKD5PkGQaMYNovaajtkQRN3PS",
  "key23": "26stNRdTnwYHWqcwGoaVAgmyZrT926PByVBUNjcdJgNvTaapvFdYZDntRLT1iRQ9bDomQPv3tjPZoFJb1jWxfJcP",
  "key24": "4pFKFjzKCJ2fLP5RYp243oMMo165gfHrkndHbcmbuQJaT8BHWBRP78TdQh77whgUuvugCwbCYLLuEdqCEEjbrfgL",
  "key25": "4CWPvDXGwqHgJUh2RzJDBzQ1jiz4uHbSf7z6chELfNW5Nhthjq1bwSCsUUcuTrveBGCpqrunsrYnRacGhGwgEQPm",
  "key26": "HnkUzqmSf6ATmknA1aZgudjPUaPYFhQ1N6tomzVXkjBjd44GDdjKuGTebTjpxZBugb5ZcT2BYarnyq1MfX2JPZT",
  "key27": "YKpDdsxi2iwwN85E5UqG956YfRif2fbPNUewhpFWQoCmoJyqnq7q3YmxucLCcNoUkNKThDPMufhdXWXvAMNG3aF",
  "key28": "oU5UDcztr3VH3RFMxJLjaeZpfbbHfMMsYWgZoVft2eazeR596RH32J4o6haMc2bEsN4Fojiq6MiiVnyPcUqR3VT",
  "key29": "4HCkxjPBVq2dEM1DFt1bdVkUpP3PKZ43QW5cZoEMZ7iRvyMP6d5rJ7JMnaeUCyiAy76bePJmpCjUPpQjJp7Y3vDg",
  "key30": "LMz1hSQyf8V8dZqfXaGk5f6i3YWEcwusoWKbiPv9D35htJcPb1FYQqVeyZNKWTgHVGNd9THL4fYZWiPAEnVJv3p",
  "key31": "jTcfz33WVozUgAtKKUr5Wm4YsEEhrzN8LV9kaAgJHxwmFQwxyHHTHvp8KirxB2Nr76b4DkZibbofZTrwLzk7uYT",
  "key32": "3aU4KxxPK6k8UAJPLd4oacfkG9xCE3w9BtXbzT4QRPyGccWzStQQ7sPNQ5tzYsUcr2LCGeqwv8LZ9PkJNpkayurN",
  "key33": "2unPkbsLDJsnPmZoqxTFSDrfPnQPZNwoxfq4XgNh3iwR4DCkSxQHKfYjRCWc4NLPK1jBqfWKy9pnYMyh16xt6yJf",
  "key34": "36c4VtrBScxhn1svoDKSs35tmnEiyVxtNypePSZfKigHUJaHorxNtP95EnMyBr5rbvKfjctH91FDyD3f2SgHNeeY",
  "key35": "3nNBqcxezFdbABPb7bVB84qymVDu1r7m2k6hBZd1F4x6apmdTfNDJHnVNTH2bR1ncSk9jkhhU84qNrLS6YKnx8mn",
  "key36": "4Y5swePgtpe6RuHn6K8vfHwAEs9tx5yc4nXxcdnegWuRBPazpDbeisDCHfmQ7ThZDmrCsMjegk9BrV9dRPePf3h3",
  "key37": "4swWndaRqkHKnPGpGhUzp9Cf5esrfRwLDSWDHbhmkNNtZfagBHM8df9czdGqRWtNZGt3UuqghBpvMD68KowmW6RY",
  "key38": "2xKRgVmejqwQhbZoMcpEjc2xnUGdG15CgFBgEoLHYnF4dL2Syu58AWz9beG38quxjVEgiUWsW9gYBMMbarnZF3La",
  "key39": "43aKHvPH4D13ayuyEKjioYdTMscQC6DWJBEodhdA3bCffUdDXvrxyM7Fw5WDda34VoWWFTuPhwmapjG6mK5XhfWh",
  "key40": "6Z7Y8hY56oSjmvKmEfdpvYhk6TGHSY1zZzSTqnRXBxktBMyneRUFgvjbBRWoEMwAomxpDL2LecwyxpjBxKfmvrN",
  "key41": "5hBBMC5xZxmPwrUzEjjj55RX1nKBQRZ23KyEBaspiXwN8vqEKNH8rmrUpGJi6WdkicfzSaRvG6HVe1E9EcuHkur7",
  "key42": "27MZHNghocBWAYwJD39hfB1pLXHsCZcqS7zd1nAxiePquAouMZi5iH237R7wATRGY3vA5pgUak6oA79TNheurpjM",
  "key43": "32HsvCPRgwHQ3ev7Y6ysRTCdugBUDM9BYbsYGNYHjSqx3qujEJpUotqkvBjmLiHFYQ6mtqATW3yDfjcYab51Regv",
  "key44": "k43s1JF5UaBcUjdgAw6gWgMG14KLa5QXJY7WP8t5arcQrtuNjVKq2FFHGPdnbLNH1HHtrSC1M1jycGhab4oHvSL",
  "key45": "51QRb4MbmoN3KF5YMZ2Gfmp11PEqgpZ2tYByQxigxgGKJVmureW4nR7V9evtyt4j9YRkMhVHEraDyaKxhNMSVWFo",
  "key46": "45fmYcfnViK7Yw7GYR1Q6QCLq6rriofPS4LnR8ZW3ssn2vf5JLD8R3nwciYh8nKjYFzc4eAg3JKVEcSVmyHdfCui"
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
