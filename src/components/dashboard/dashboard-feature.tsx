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
    "4TxejERp1idiYrnRnZtyUyH76WYM9FV4YXpxBNC3NiM3Qnp6tGFoiUrhvGPgiwxrop2WQ1bkuMpLnmwBUjLk1mue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYvNBNPNA2R1qsoavRMYwcuS7WHvhHWMWFUuLj6uHEGKfrTjiNzJrpgvc93udNYVsuu865cSZkUqWXTH4bYoPzN",
  "key1": "kcnawjv4jw5rKdyVhWVPcq1RRHCfqWMq2xuW6KRomJcJRwRRCRjTeWGTTY3xLPUn3pTsTp5Aguw2Kjc27sixKnE",
  "key2": "5pW5tP4vLsX74du8S43xGANeC2VGFtgLkxPo8bi6guWJfkMBPABP6mkrkeGEaq3VwYrCswNXCnCMNKixngzNd4RV",
  "key3": "5sNFCd8dszkAH8AK2Ash5hxHB8Th9dGgBvoySgQxdBJ9yA5pKrcchra9hQLxBFPeWhPsXpMxTXEum1bGk6ZWQNEw",
  "key4": "2ZJF74yVDHp29bFiVUSrKp8G5REWKzLaexbxPwDrfF6m4xFNN9mmRMvApRYLsdyG5E986p3gCk4jL2qbdnXiNWRK",
  "key5": "4dqbLaV8nSoAhcXQZxCJXJYbmajMsminnrsftDyfpg9HBxTJejvaMMjofPRFaEoP9kRyHdEqXPNVuZSxxRDvRGRk",
  "key6": "413DQYTckJxf9V9gBVLuffyxui87nes676VVq1c3DKmo2JQYbrwU4gvhCjMkawME5zazEcU7khYAAupu1ib6Lwny",
  "key7": "5WWegqmKL69aoLQiMLKtJQ1syvKsJLeLBCQLX5TnhmfCpKDvbKQY5PnT5GrGpMMs6xrHTvZEasZCvCxvSfnPw1pn",
  "key8": "5tkma94ofqwiw1r4fJNizGbpBnyTXLvcxLNPCmfzQFKtaZjCgKpm1GbxGups97aZoAv2XFfxJtZLAoEHL8Q94iQq",
  "key9": "4kmbtRrn6qJtEdQ2d37n6pgyAbes5KNLcfftaXRJ2Na7xucTRAogKE9ATf7EDeW9uWLXoG1Nhs6ivYsfbNZeagKx",
  "key10": "34neQNrhxxKXeHuuWjERPjRonyVA1uk7poS8iKySrmWg8cs3RGsnTWFsVGTmSX975pQtM8kN1ZC3sAw7HU6D3H99",
  "key11": "5neh6TErtA8b9UxQ4M3a9MDnM6SStk5amA5VkdxUCLbh48DRxJCau6ku2UbYnR4cWE9v7s2XFpCqaikypsLeTYCr",
  "key12": "5H1PefDwHSdxd2Lv9jTKoy28JBjgLEzRwtxdnUX7HxC7V44geQQrLNw9r9PYuRcUGzCcxBoqYYffPGCT1nmnay8Y",
  "key13": "8NxeKZBzLTnLiyGWwfcNG1aKzL72W2DcZwtPd5EwmMePM1f6oAZy4KBu9ZCUDWkLAShf5KtRqfCcqN6Ch768HhJ",
  "key14": "2BfaxSyovhHrMHPyMsb8e1jy9axSU6JhURakQ53QcmvZhvPJQug5Zm3TEC1NcCfMASQVp4maxv4n3cVFbArCGhwC",
  "key15": "KfM2aKmDf62BCm3hrsRWGPAgA6gVjyPPo6cUxqB1VSWfG9nHC7cqChKx9tbiojVVa5LY3YES13rW9g3E9RLE9ND",
  "key16": "5vPUjjkafuDzmv7TkNy6rFGMjRhDeQoAPNG7ZJENHmRFTyTi4VzYUHtX3KLamD1iz61iFiJeoq1UsNd9JqhDPe6V",
  "key17": "fiNNFtnrQTqH2eFeFCsixo6RJX7sTLP3jqc3UcKxpSBDCdFsTP5JQLXyaMmt5w2FZWfaE1AXrSwEdMp98fcqjg9",
  "key18": "5FKVMdmkXxn9gheMqR3AFn1w47ZcybV3MF2szqvXyqParNcGhxxJyZHf4HAi5jq26MmZHwMHAn54dM2dCcKLyh4h",
  "key19": "2PVYE71z7PWqQJyi29NKyiQvFqSLiVCFTnaGaNz7rXoMk8978D5T5aqrD3352a6WupBYsqRo2XquNksrLJPGrRB2",
  "key20": "2hKuFeUtw33jzXJcbJgSawW1jzMpzJsiw8Jar1VfFNJgzh4D31Pv9Ec8Z9UY5LMAZTe98yHENrxwArejU9ePqg6d",
  "key21": "8pVzjGG2pTsY93y2BaEBjt6aatHojQsRksUrgk3JRrcpDC2UXiZqyVz9UPjBKBv5tFCascA6ZctxyNJv3HLcXrw",
  "key22": "62ji7XmQvDcN7gZQ2kj82Ls73ZsKym1eS2RjnZsgiYg1KQXYav7VPvRpDidj9GWzQqCiwge2DpNHud5Cfz8HEXh4",
  "key23": "33ukYuaPzk4DccKPZutDbxEu2fNct78hFqParfbaJ7ziQqdjWNJ1SLSZyFbjjpeeK2uXwnSQonue2G36t5c2foho",
  "key24": "58dUsqA1nNec5jM21u8KZmevuht58yyGnpd1FFE4zuRvopRdvn328o28y6CQLTFoF4vNKktvNNCiiKUZTMVMRZkg",
  "key25": "4y8jZo3kubXCs87cZszNoGvMV6d2gaVaNL61hcRZSe5GQneWHvGaSwLPGd6gyEEK5M96ynjcJTT7ivMueeKNRtP7",
  "key26": "2eCFWRNPWES7KianQHT6qATn2SKK3d2DY1HjUBZX3EQS96Le6gyac8hYLNUK4Ltta46UpWp4UrsjPSt8t5DSp2aF",
  "key27": "45k6BzebKBbXDDJvDSdhFY3z5S8yn4TKXoM93PkeqTsodKMMVxVeEKcSk59RjLtAprow7JP6f3eHFBVCxE4s8oWX",
  "key28": "5ru4fEPd57v4nm4rGx9YBH66uBr2eg7CFChBck8ysosTWuJ26om63oEYL8FadU1gdzfAMQowCpRtttG41ts1VT51",
  "key29": "WFs9iJKjqkcAeYPZyoiiGHqMZM8Y48nuNiFXyoFvzELtKFM3e2nAdebVuTcMMJMcmLm9aaK1Y7wCmyqXo2PBXHw",
  "key30": "5bfrwdpwvsecSAjke9nnuHmVqnTrhqStNZrtmxcN8xARcgDfhEC7jCWX9MbyFrZBCuV6bBBXvyGDwuyU7qsXoS4L",
  "key31": "2d5dMKEBoZb7r3qsgMtbhwK6y9kac9cznbYrKncxJmaTXhti864vYnB3skZ87ugcT1mMTZg9QsTqQNzqDKH5AwnM",
  "key32": "34HR5F6zJtnx9aSpeS98X9gAKCqz75wyhztuDvuutpfoNuvnPVqh9FwsFaZh3hmuwNNEpsdwiZiw66gudXRU4517",
  "key33": "4WStDEA16FvBM9Qrbeg8PUUVQk2UQCa541nWWu73AYf6imNNYQaShzwN6Grt8x9tfGpnRMScas6foKzZWxKjGgZH",
  "key34": "2nMYuEQPU6Pabs7ZNzmPoVbdWSMtdVGmiat1Qkmf2EkehSaYFqAdKXmCCZK7RawSvgrpieBzuPudRJnKGxP1wew1",
  "key35": "5jguDHZrhagDobvuU52SPsCU6hv9qVXuYdpLYpiKQMMPmCmgkAbpbHVkdVWauGHerzjBnP3AT4asH48CaYxaKnj9",
  "key36": "2LwNtjt98jE1gUqcrpm2An4uVuJKiJ9mDSv7DU6rrV7gBBEqgj4NiVDouXi7mWJPW5e281jqB5wwisTrEBJC6FW3",
  "key37": "9BnEqBW7NJ7wGzMBkPRyeXoXvYVtQJzerJkuE89kun6abTAY2Lj6FhRdfyGDUTvYjnyRVExnbYDCSkDPc4jd2ec",
  "key38": "3VAPYfqN6ruBa2rAZKeAgMSSqKDBXa7pwqK62JJMxq5gaonJMXyyY5fjpvsokMCY7V8NUvYJaM5bgs3F4dr5CjZr"
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
