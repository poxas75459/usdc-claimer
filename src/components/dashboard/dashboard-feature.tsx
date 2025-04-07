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
    "4VSXfWneNDaaK9jpknPChd8hqVv6n5QUiyyA9S9zEs4ByVQdmbcMQ12m3x4d7D6gBTvNN37aSL4uqXqdxW73oam6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ffAxoyVR7FbQeFBE8kHPfnaxWgdzUpgzbMpuGex39rVNui4n6PQDk6sR3dqzpCxHkkS1DZiQ1GmogCgojn91LtR",
  "key1": "5aEobhjgQ4Gcm7MNYZ7Yke945AMe74x7hsLmAP7fZPTQeS4KKUBQK9QWptvFVWxQTsLxzrEDrMWgXxsveExBGH1d",
  "key2": "5d3CAVf8ZZHV4u2WLwEyM8ryeRHsMTBrgbHKi21PWK7WLrnzUTCgHvW2X9ceuvS6Z3HrrGuhe8VLsJcasDhvuy5w",
  "key3": "2KhjEfLDNWL5GXB5VYbckxx5yNLH7R5wK362CgqQ7XwCCXexGBJWNoSLs8UEFjzXC4aniez7cWQafcCVo3yh4aRH",
  "key4": "59XseqvEFtM9gSXjPJbRgD1B8iXhLAbRtefBLXAMmj7CdBqP9jW9fLimxdvYx29rXsRTKhZjviXenE4SxK68Eybz",
  "key5": "2uSLgPeg7ig2s3xs2MA6TdcyfV2SsSrQvyQ964QSnP2dfXNfGBqvypcbek5PfXb3VVxuUoAFqcPR8kXHGy27ccdk",
  "key6": "4s8cUZWrHnCJMp4KJUD67ctNN3G1ETw5Yc46eC8asK5oCSBY3cKZCcumyvJzChW7VBy3nrsEbhbxfhJbCywSDC7g",
  "key7": "TCqa2WKCuMLgdLtHr1tWrxpAcXzh24R4Q6SPrXHYqf66WEAngDTJqDhLkZe56NADmeWHFztZ9PQTTFZcVgSzq4C",
  "key8": "372mwXUkd1jwPdgSqDfabaACjCna5FZuE6Gpd1wVsNwV4WFonJK8xa1MfnX8DfzRQbDhfhRA6Z3Mpqpta7TTRwZA",
  "key9": "NpuUwPeGPPXwuUivAcsZHfX5jndB112VXqGaHk5SU5zF3DCwz822uU7mp3Z2RMuzgbhAhy663G9vkpNnerKahfP",
  "key10": "5axGmEAU8StWXA7aRExt6sUNCayLQazarwSg2k65axaXBB7QPMU3CayVdeeKHBKYZyEzcT4DDA5SBX6svt4FHfv7",
  "key11": "39qmU29VF5x9L5W8F4z5nzRqYoY41t4d29cmciJE1uhjEivggfVcq7V1bD5odzLKp7rkrWaq69nomSbBKPgikAHC",
  "key12": "4tWNbsMK7R8vwZsg2ed4iegaxBkb65MYvkkSC6zSbAdHEdciNZo9xkaFaqc9AgxNGNWEBbiFZPyzMwztUKaBWMwo",
  "key13": "eKz4wa4pAerbsRM4rwYuwJidQVkV99vjRPB1g9b8TDuVQxgsdACikC9PvxDAQJtssuZFA7Sctr2ciyHX3taZvcL",
  "key14": "5hFJr8JPbY6DZdNqsrTZSACczaUjovycReU1Ki9hvxjczhFgkWQKdnZZWuejh1kTcUMWTyEeeBoKv5mnYFXpB8Tj",
  "key15": "1ztvZJs8Zy21LeuaNfXhJAMLLJ3SZzZU5p6rh5297rthYwfot6Z4GUMgrmgstgJ2QnXWzns2nMxjuFEcYszPjcy",
  "key16": "5yi4tgAEwrebU4gjJXwjQ7XfvAN39VqWUv62jR1nHMwtKqGXdZRRApoSpMuRhTZSz9pFpNvTBiCFK99weQaXMksg",
  "key17": "2MmHvri2zrM11MZN1hzRzaUe4BesLAEtTLeSP6EQDv4Hu3Fx6eBZ6itMLEKS5f5HY9ScTxxy62o94mrKRVcpTpVg",
  "key18": "a6WkoUwpJh6qcjsGkgUTxf1Uopv56TDjqT8wqMZC1CXus2naZ6ofGS2NfBTLdTeA9AXjYRgFvyFPZKc2Zmn8mVw",
  "key19": "4TFYv3RJfZLLrEbrTnsumfYVcmqZTJeSiRHKQ8o337AwYQ6gBZPmEu4Xc82DMwS5XFuVtPhvj8NsGM6S3dKkLCfq",
  "key20": "5EahkuC3xqn6i2zCwVLY7JyocuridL4JrJarcVAYmwLzVHme7e5bpBymgroww6spSJ68Auux5AvVbbFsSMV21GBq",
  "key21": "33qYdWH6JiVgAZ9AyepzGwUB4DAATjXoDoArBM3BCdeKz9KtYwdyQ9jjrgTr2HH8ZFAHpqgXq22bHg65pxGmemt7",
  "key22": "2DJbwuspyA9Euehih7224ad3vGGgNtkoJdWu9mAaVREchgFT11bJMYeRXWR6tLddx4XJSEDvZdgq5neDPJhd9u9Q",
  "key23": "55UmAWiVz4uRhF1S92N1iFkYUPDogKSJPDnBYbh8gor3TR86DUNjDYSe9tfgwyYS9bbbNjpvpfe735dLYfqeCZFp",
  "key24": "BFrJpKcp8VY5wWbwruxTDVqpkH2ZykXwJDzgmTWtb6i6yLPrPEd7Wxr5Jt1RhPrqD2nnzSCX577g1L62vMYPw4q",
  "key25": "D7eiqVGwBz9sUxWTmb13Fc9mtL9mb95wPJ1AqUwFjv8TNfEExdMZvffFyPXaLCMDsFVijMWfzRMoEx6vi7jDL4P",
  "key26": "5CJQ2FhXJQLqk8KjcoP36CE9GTUkVzNi8c1bDNFTPpQdciSrAuatahsFYu1Bqdn2wRtCAhh15WqpNB9xBQv2DLH3",
  "key27": "36w9FfojVHxkzAdbGk4A77xGgG1xrauNQCJAYeodrBZVeWotVAE5KMkxPQdvgxv9vqHrmNufrWNAZHppawCP6tCE",
  "key28": "5LSoPGDuSpfVFj9ucA8U4zDArf7eRnZU6BB2uNxhRprJu7oVb1pjcicPnPuQWTNvS8o2Fb7LZPsxJpH6svN9ZCF6",
  "key29": "JryePn2DjqYgozbJhDg7eorXTu8mPgRfV7LC15Y4TCubkq2ju8PQuV7n4XAjePoPT6432jHWjQvXEM66HrNS9rJ",
  "key30": "5AtDgQGGXzRvws6KJJq5YxHB81MeNamQi1Q3m4CHsLJ23yupcFz7SQncLkhvgqAdNddPnkgNtsVksz4G2iXwgE32",
  "key31": "2pkRUWRQjbcBKqpdoy4QRJX21DqaWTrnuiQGL4PT2yKS5SDY8mehtxXVqvVrasyA4RKyJX4D6WvnXHTRf5bNuQ6X",
  "key32": "2EF15ijggHQJsCkp5wSponswTJ3fZDFaSK7PTYHMg66ThninUNbve5HXUeeVpmM88ofMSBcEdCNV2z47GsAYtbJw",
  "key33": "7tEuWeKgg7gwXugHY4ucMGbeqnotPKP6QYPxeEHrkx1Lnfx9gHwDL2jguA8Ho2PAMHsFjrphQwyjMSwEo6r6Xw9",
  "key34": "4aBzgsiGfEfPJWMQWQhAR8RbD2eBds5QAzfESmNDjgdefTw6NZHTfNgXGSfznhLhuo3ETzMR5pvT12RCzzJMms5c",
  "key35": "2wuGejgYhw8WFSXRqKJNwWhwBh8Mq9uGMEH6NAARnZEnKB4t6GHvLke2hdhYv9KAi8AaHShch6nBDWzymeJfDCBW",
  "key36": "3Z5NNMysJ3CKbYiPHkVoJvnFiowQTwA4r1BiT5oUTJEHR3htBxngnBfVh5iTai2xqe628ZdToW7xeeBaGfzmMiGj",
  "key37": "3ungcMqYY7DQpGwwmgfZvvEbheKu5jDWf3LgrdkQSGFC6us7hbz5KhNpY7LPyrMrnh6j6ZgpF75EnfTiL6KxgXqY",
  "key38": "535fgVcnw6u7ckyKqk5KBYZrdaaXXHVNZP3v37uJtwivZakqo2XUPS3DdJQyQefdEWzbCP9eNcE3Kxk46htzgJP3",
  "key39": "osK2LpwCbAhp5bDE3ztVBEYVxByMaV7cmtsD5Dra4ScMW9nKJwK64MAhoAa3qFAjFK4FnWc9HmcUG3bDjEC5TTc",
  "key40": "3wQ2NBxNaUDTw4xtys1F3V7J1wMgfum3hfqiCC2U4S1mwRxko88TECzGMceQTxN2LAPHXKTHyfp9PNWmUiAGeRXt",
  "key41": "4gA6849haoGkQMVkR9vnBQf4QbLVYx4eLyVBVWb67tH2eT6qSz7uAQFy32KmjExwEM7X1VGpckAm6XM5iHqppWQE",
  "key42": "5EaShcV3Av8cxid3KVN9Dkh6QUfgJ8QuBWq6sdH6uPEmVs6gNHKQTsiQb9xEnz2zitAfEwL3GqJwbRAZ5w5GWsLY",
  "key43": "5nFwVZi7VbZFTGaTqDgUsScB5QJrWLE9u1Tmtfw95YdqcRRFWYUZhbtM8z7R3gJJWyXB8XTdU6kRFZ7gUtRgT53s",
  "key44": "fVGu86cGyK867DN1Z9yS27Qu18zjeTnkaoMLPWP7WdVaMXkLCTUSpazVPDq2V5yVBLrp5UTk7DfqrYVmYYpK9hV",
  "key45": "3V23mR4k8j67sVL6MmEqerJDRVwfxCqkymmfwUSNxkDnXRep3XM41GbGKhpnF9gzFQjyFjwa9BnNhHgYEjQFWWpa"
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
