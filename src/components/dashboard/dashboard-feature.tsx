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
    "bFsVx7vKScYUuSH2WDvrMiUCZCuyTKjjTyBbrZeDjhqb1Wu9S6ZhiLJ9Mr86tz2Vm6k6J8gsQPfmcR4FrKkjfW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33GwPK8YSh3BgjEHRXNmFDj7sFfyLCjnQAN7P7GeUVdTY3bATs19bsFkVrTjzB52XFtuscha68weEjNJAMJ8xAY4",
  "key1": "5nA4KsQpT7ukvGTsLrxkyyayrBC4nsnGFZmM4pUDzg35kpvUUZMNGcWVKFo2quJXxsaH9WRenzWSsxKFbJY18EP4",
  "key2": "3Kk1v3wdnqkW49oczF2hmSrG21rda7VbtFZzTyWWmvFjFqv8vGVXiM1qR9yzK1EGCDSwyM2dNseLrcMdknSKcVLm",
  "key3": "4U59WtujwsUALFyrMS54oS65UXz42QYjzEAxwhQt2tKwmWftb6bLADj6XywoYLXoc1EugvNvticpqy1ConDiNjGn",
  "key4": "5YjMWpNKTN8p3DFpA8JB4Zwvt2sSU1YmMT2vR2Hpqay9B8Kpzy2kHfDgG2xa1QegzhDmw3quhjL8pBmN8oNL8XkM",
  "key5": "34nhsA4ZhyikY16jBNDhhQ9MqBXXVUeaCDbm8T4wJDkfXqxF4QAvePV2kjK6MNsfaxCrA6cq8oSBEHQUUBs1UGoc",
  "key6": "42tAaPkn97BxUxWDUTkxwKNdz4zyfEfEcK9Pj4XymGsEfENs6YQe8TYYTa8C7HJHcKt6RZVadUU5j6eYw8kBvEeX",
  "key7": "3ao8J1XiP9vVUmhwBpc9YGXKtBgdJ6aGt7JjSefjuQkpPj9uqDUNFmZwm2n2cpc2CCTDQZjzYSRCJuZiFwseD5vC",
  "key8": "3bFyML1Va599dFKJcNh8wZUh6aro3uQZwfvZWbcWaeFGgZN6qLGt3i4q5ykZDHqTD5dQ9bJZDpZ7FL2KWj3Es7Q9",
  "key9": "5ZdTKJju5AdLHgaTxY86bvSgyFKxv5981TZaT4zfKNfgKJvJ5ekr4oyDwHDD71yCKrzotvVGjhJVArYkR3itvhR6",
  "key10": "2HyQ3EgGu9VxH6X9prMUjHfmYswwioLvznWxMtxjcByAyU2RjauuaofjxNsgKW9JTUuuuzPrRJgpemQyGXDWSfzA",
  "key11": "4birdd67Bqy9QDKfffw3mSBZBAmmqfcuZTSHqdZMwornEvrE5ZNcXzq81nLQTmXCuY8KYyvGwnf8MXeBu5L7eHQ2",
  "key12": "5ZSz7zXa9Po4MUTJa66rX47CiwxeFGc6oRciJ5MBDYh4bjo3NgCxiX8Tvbrkcqq16JcqsxjdhUcJBtJksH9Ym9eX",
  "key13": "4x75TnZ3JmYFjjn9qioKopXVQHiue7ADV6ncmEs89Y5SxxpEdbZL3hET3BJhfmapnz48DdqJG5wWv36D71S8niUe",
  "key14": "5JCCESz9XLCbBUdvcb7vHT7mkpaxCmQqWrmfki6oVFT7jn9aSwC7bs2VQzT1WKjtHHR65zGMRDFPxCNQivkx1kHe",
  "key15": "2ws6DsZvERv7JdhLwhzwkT2fCcHXbCTGqKiUWc2TCYSJpKJsusxTvYcwMq2ij3Wz1p2Lg8Pxyz5NLGYzZHHpvaez",
  "key16": "5gTWstYzDzsPMRArvRDTPHvYSki2v2Sdqofd1AsbFFweLgFm5USgcdycW8QkEfqYdTpYrbi9eJBumEg7KZPjmEnn",
  "key17": "rjR5PdjeryLP4v7QBM2x6BMKxrgQraQ4BF8re4ofLw6Bz5zxRTEn24Q6eNosWXjKDSmyWua3rk46RwW2PbMJrFQ",
  "key18": "3eX4ohp68Zs2oGVRiVvm3LhG8Xk6KdEq6UTpsGhzFUGwibNU8bQhTLPYjNbDFKKdNo5KsfTQQySHZPVMBDMD5X7R",
  "key19": "3CMTXLysxCKzLWZ84AxKWfC2VauswZtTmXofnbwnr5Q75qzWQYJSWY7QGHGPyPDpExUaWmUuHdWu6CBSHubJUHKa",
  "key20": "3RNpgeDfC7asrTFdd11jC45pYmpJknSDkLD23Th8W5a6D4mdRkLCWxXKnnzFknQHpdgTvsMCdNxKnQcmiojpawMb",
  "key21": "2judESbkjCNQUKiVGTWoCcnA4LDF5xjVBr837Gu3Z7jTaT4zt71B43u4yS7wG46b8tS3xT4wZhiPcj8cC67bq1uL",
  "key22": "5TG9HWUR121umf3fPd5TNCcPVRKgdNgWPnjwAhKRzmYU7zA3JeT5YkXMu8dgqMFUnrAaN2op2bk7cVsoANJk5RRm",
  "key23": "C4ZBR7Sbf5XFLXfciP5bRPXef5bCEL361i4aUyPAz6FjDF76foUDtfjkiU3hVse78FW51HCLUAzdnD3VbbKZuUQ",
  "key24": "4dhNkK4h1sZfHu9NERehMVb57YFZ3QVbRZ2GfXjyeX4xtcdQW8HCMqyHpAiY4EAKw4ro4YThMdj4DUjX1yTEvnEE",
  "key25": "3gLTBDWYRZBUhhukA3YBbk9PqCaKfqo8PF5NirUK4h99tgepKxgZD7CAGUZt5dhm1CJyj9HrJAETyQF3CAqbBTDS",
  "key26": "5m9AuZE186K4iN1w3TDDHVkA8NSFgLdMeuwbqLp3izqpZWhi1rt8aa4jJV8k2orypEYbxRmU1AeRgQESguENV1NK",
  "key27": "3Ggj2vEAkXiYhCoZ4mF9uf8V2Hm2QiV6KeNsAoYpdbr9uJC12oTDUtD55BFe2gam6sXz5ZgFZ2JSeZDEbGK8LCbW",
  "key28": "2f48LqQkE8eT9gxZxL9DWZbv2usRj8bTN1PHRVa7HPv6Y5GGJj1KSW77CLwzSMofYtxVWrbvUeKMb3mBnszmN8DR",
  "key29": "47hNhooeUPE5Wb18VNVfnvfYVZyZy6ZYPjJ1E57z8PgaJeq85p7Li2CwdgZE4e56JnxzvXBWveJruunHm5yF6Diz",
  "key30": "655VCeekUhdvwyCfLiq8UUYKNn4dszyQTySyH4jixWkL28E3Ft3ufEeUdjEGYV6L1GmmCkqE5N3kGn6GYK9UNwnV",
  "key31": "3cfkwYgFCUszKybPAQ2hVRMpbHK7bzjoDzvGCdADgT3mPSocSynYjkttYmnWAA5UKkTrEHvhv7FgjMtP5AcX5raU",
  "key32": "35YbapknJJD13AuecxzGMDt95fS1kPrhkrDT2hdgDDNjRckgg8YNNJyFipyPNt45sSMpqx3KSpdHPoS27uPm1nGB",
  "key33": "3q7usMJTc491wfoQhXoCHKL1gWhPQesY9ja2c9oxzGDySPRzVp3PPsAPQPtUzMVKQGUi5gVHHvW9PhtpQmyhBHcP",
  "key34": "54PHwgWqnyLWkF89VYRTYJqW84x3QdM9t3YeuUZ7W2kT8pneX4sp2rQDtt7Xeg2e3mRd7PMnoZimmjuEKUNpNPXJ",
  "key35": "5gwtcbvc2D363VTUvCA3VCx4KCJcuMGqwaPqQW6ZqiLcQ9a15oRiPekxrpsn3vSNyDucj5NX8i7R38ukewtydEh4",
  "key36": "1U9xqufE6bonPC2EqsFKS2HYqBnb3UEsQ54CDijgssCD3yMXDHafKpr67CNATVadS3x1VT17zTqtCkmtnb4pqo3",
  "key37": "57g5ordVr2QsfbhHre2n2fwX7YVaTtFX6bLVkavGd27XhrJ1TcWSAvZHkPvK7jFNko66upYokJHHXdH3GHynkxh5",
  "key38": "2sX88i4yZELjRUKi49GAEHyhFEqH8KcmHULTcmTUzCSUpieW2UZbrHACnLSiLzhvcHbSr5n3XXmKHidfAvKijyQH",
  "key39": "cbgcbZjqq8PzZ7GrJefTget1WM5f2XpyF3saThJR1T7Kzm2i8x28FheTBBFvGLSz5n5nAQbGsztnNgeDcfvbpgK",
  "key40": "wTEnj6iHGCNuteAauxKq3Dc5FHHdSWFLhCA7R5z79CHbKD8aSzwrWDUTcZa14jeck6x5j718JVLhxa63bo8cVjc",
  "key41": "4JHTQxuWh4S3G2q1ExRsWb22zbQjCYGW9FRzoF2vAtPARk2wjespJqyuzwvrk8Mdy2etoxUb5QTFsbGkSwR7Djo",
  "key42": "4vR1Noqsj4Kmt9RwquYEnK9EptvrfZoe3TX8hRAuDk8W2d36pPYJqXJ5CTgQmBhERRUbUL7mrGgjULUBYSPQYMYj"
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
