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
    "37Q4ngaXr4edLzbeprDuCZW3nohwetpE4FeuPrBVHwdznv2gGqq2gcTi2YsmHipUiSgedouxkzksCcTuEJJMhnkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HdAKpTdvpvLWw5yoCenLr2KyM2jb4PgWjaQ9uBXK8imodmxCWjePnxLq5Tor7sycs8jufm28uLqZxs32vnWacM1",
  "key1": "39Y5h5guHquGSCGqdvfQY6xN4A3QDR1SNSyNyJcjyj6pSyYWZyBf41c6KKSvq1Z7tyBxH15F6KsrHcFr3vZ4qfzP",
  "key2": "5xiYvD3JpPLbYHDNmxakVDaAwQactqCx4UTAQZTieYaEe15NxQT2xZUYS1pCT85BRGuPRerQgMCbToDosuBei98c",
  "key3": "3MmsibL2ZUP19PJktrN3M45RWz6WtFT2iRMCXiJbmTzjzYjFR3mzTxuH8unQS5qjzTzTxm22ub4Kt6uqm2bTF27v",
  "key4": "4SJ3ny7fFh9MYvx8wcR7vqzvAyqPYQZRzjiJzpBoxi7LRgUtzsW2QCRsJVjfZ4Uzd2Gj4ErNtd8BCksC4j2ZVkEf",
  "key5": "43AACzSFU9zntiCuuxnPgLRZ8n8sgDJn9RACwLeGB2JobyATEY3bn89UC7SjtuuNw1vvu8LTWrrN4HsW9NhTuf8c",
  "key6": "5TfgAaXUa3Cqi1hR1GFP3mYpQH3k3fRyVeaASUYFabEXUHnacjircFgXVwfnctnifL7BCMdFGkWmmV1dnysVoZLZ",
  "key7": "4Ki9q4xhBprvvHxiwyPnByNG1iH2o71KpXEJmAKgy5Wbcx1eymD8gHv43rJTZY53VBTJcpCMnsgCTr6vvo9yw25j",
  "key8": "3mH4JwBeY84ADMZTUnPKFa8iL56nbEz4eehov1ybJVezxLPqdtioaaX9L33EizwgAdeuaCZwhL7uSPE4a9SqbeNC",
  "key9": "58UaZ9zWDxQsaGXHkd2wkz3YwDtRzfJrVkcutvVDNkioqdPgcjR4winmriBFmP9pd1cqUwH8LovyTQj7AsWMaA21",
  "key10": "63Z879cg8n2W4JrMJfeHTvmY8ePzr9Z5kg2q8foXnE32qSJxkaABKeBvWDFNEmnvSJqxqxVE2Qu8LEyDnrTWHMoN",
  "key11": "2C6TeyhjUJ9BbpUz9JDc29LtXTm8vGKT1dvmt1AQpEDYFnDpckBqVSskHBChzx1Lk3zRVNyDFetzgNdacLwMxNVW",
  "key12": "Tt3rgHXdrM8LDE6jWTkokKvLRPhSZMkoSZf6edcVnPj1zm21bknKzdKMxFurpqgGALS6TE6UrapXtD2cNq5tiFr",
  "key13": "mzRHpMcYZqBdgpypuvpUe3MkxJ6dvtDMLjvxUsmXL9KYRKStz7T5gJNjnQhw7MziBZidWgcjSn81EHH7pTczyKD",
  "key14": "2tkLBHscAsSooEBdQZGUjgifrhyVkaHzcRpK6f1DobekCcpMmPXksYo6Xp7k2k4pwpkdagc3Hg77vFcDZWvn7EvT",
  "key15": "5St7PLvNyginMN1Egvj7hq4TAbLzzcN9c46oxQsBacQp9z9KjFiMkqd5Dp9UUbnfjSawsW6fKGmdUKHw9bGqrQuV",
  "key16": "5ujQehqpEfVsXxGiCn6gxzvAhg5Pj26SHdD8i23mKs2GBUpcgPiszKAT7jdVfTVpHbyJbpBVpYMrSfBYAWX1ybTv",
  "key17": "4mfxCtj2cUkT3xfRmugqGA2N5V4LZncN4exWAxrxRHKUtzZVtk7LLDHGhtBJ6zHuJ44atFJju788NiLQY3snzPL3",
  "key18": "4hAay1max349qBWTicx9DSjpsbzKLicmtoKfEqXARysGexFBuiSsajEmwcy6kBbtBAsnhr4Y5vSVV5X2w7UgeLyN",
  "key19": "xmkW3LZ2Xgs32oTBDoddxv57W7DfgfF4xA3hFAQ5cCmC7vqSAZbdn8jku2USwzrAt1zvwFkS639UGonaozzc76H",
  "key20": "57Xh4LeeczanCTxWTwoa9wFGUz29wUYTE8uZH6UBEF9ThEautAEEkN3pVEU3xqJ4ppXicjqsnLPoyTbY3MaHqBsK",
  "key21": "51qxUQLMWabJHwq2cdkRcuwQ5PdEfeHULfYfnZnhKC6V6DqmXyRR6ntrVQtcZbGJtZS39MebDdjncZTzqL6Vj61x",
  "key22": "3LzeuMYQuNQVxTEN2hRks7TjCZteyFkxvwBzsb9ucNzsaNRejnAzfZZTFqCbzaE31cbUdN7y7bnBFb9ShCg4N2a5",
  "key23": "2Hoc3Ly9y718TcotMtSQ7wxvX7qMZDE57iCRxzvQxLD8LivKFNpiT3zRsBfgUjZrYaVQibgwerP2nhrGu4J3pSxa",
  "key24": "5T7batoqdBGyr3uWrRRajNi6QZbpReSV7WmrLx41YYNkT2HNgTNLSJH4go3FioWPT75r35Yjm5xxnsQtVA7BPCRv",
  "key25": "3PAU6bTDtRfpz8B8nGFbvnSYDpdGSjKUrKuyTBsTbcwPrdf9XzKdtB1ByuHZXJDNYMLFd5JjhvAfp6pVrrzPSm1s",
  "key26": "563yL5MKwedPVpCEVgcMhQ1Z4DzC1zKxhQ5XD87QebgMPxSAu8g51yq9kNZFaKq3gJYAMfn6quVNb5hazr6iinpC",
  "key27": "266d5gFxbYZ9EfnLCRBU8sQxxWg5xNuETzC9mbUnKcUWB6e2uu56jRHm8xQXWkrhRfiBQQswCgAUhZ3GVuF9sBsW",
  "key28": "dBQxUYtBX2twYz5T1biXuhrC6sWUnU7Zc5QX6V5r4XHG2rc339kbZDQKtW5ffWiKxk8jDvfzXDj8KaCEB5vh5Vt",
  "key29": "TaHPSmt5fwoZQQY7rmEaepMHEpgLwvDXQK61jxqJ18GsDNikSRYEybZE28jD3NXENZHHsmVpPgXqq6PEPqH7CwU",
  "key30": "25axUwd87Daq6w484N9omQpDhwSmywy5oz1r6J9nDBqMj3frt9fgYzQginpUgSizZN39jtD8eJ86RZ1qkwpnPftK",
  "key31": "429uMTegUbRt4MGCnEq7ccrKMwF327hujtyBddYE9QJdqXJedM2DSYb7kGUefjriXvFYgjMNHpEAjFwQpXsDYeM5",
  "key32": "2JaBoWca6QjgCWcUZyyAmWce6ybtBEDKxN2pCCov13SeeyDnQnDwHCNo2FaxyyNT2TWAWbTKzUqWg8yLiBM653RG",
  "key33": "3vZgjGo5vbGvkLDgxArgFM2c7GgK9cAwn8n7E3MmaCs3jLhXLWx4YBmxpNYcHg8Mmd7UfewhtW3QhyzxU3KTULHp",
  "key34": "4rBgeEcmUkYmUJc4RALYxgPqYV2RtdqTHTtJJy2Vh6pvzGS4Y6sMjkvdYffa92h7Fpe6VAoCPLzeXD5LMXFQfGWu",
  "key35": "3BJTqQU7HmpV3wP4jJsibbcJSKvPZNeouQYR5FZWrNTDDX9MRQXGjE6acuUKuZ831ptQKcaxnHrFncuCgf6XD4dW",
  "key36": "2FvZ9oWJep6dh75rdmKdr2PjDzKPGUpAmxtu2FinqjzY6VqREFhgKb4e4GR8Mv3b1BN5gmmNS7fkuCKUXiRXFRqq",
  "key37": "M2oZqT3DukVwYhbLW5KgVxTouNJwVrhTPyQLzUdVemx1ZW1tkwQEZYouTgYRAnhWahHax6BGrWp5MzDk7nAnLvm",
  "key38": "2XdTQwuGvBh1ycQsUgV6yZodThbDYMe2fuju3knwCAKfU1gfYV3FdbEpk2YxNJExwf5xG6A8ya4y7GqoYzoHm4EZ",
  "key39": "2RvKb4i6Q4k2bAxiD9Kpo8Jnf9du1tJzmzidoKZbTKcX1W6RRFSfjDeVg2yivhhVRdcan5F3AgF36SWJXkRpugcu",
  "key40": "4hynE6yfYsEdqL2NTnPdLNxwQfxPJGZcZg3mgabDezk1EmGwe2oukvueyC4q2Bgeq195bjJTTXDWwVbtiiSd5VnN"
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
