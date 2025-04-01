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
    "3kppPfmTQz7jnzvZniSZuBup1Qcq1HXan4AuYp25ZAHz5N7hvi9JqzxEWqfTpXSNjcTEFp6eYLD2rfZCKcahhPTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYwFTa4tXvoYyQMeWmNUj4jLvKNKETWBX3Hb6L8apZxeLZRxmay8c6KBhXhGMDenZaYsJ2MtmA4DKe4F5s14Rmo",
  "key1": "2Ufjydygvso7qu9RbhKUHHUfVk6Ehp71aHadtGmZcyKptbmmspS7Qeub5HXJZRpfgrGyZnLUfaxmTognAysbk3QM",
  "key2": "CEcJ2Xg9Dg5uZAzoaahP7AP5xqca324Zyh33or7iZ4WA5P4HLsKvaehLcKksTm33AYh121Amp6RBoqydoveUEMu",
  "key3": "t7UN2uxcGQfEE7hTdGVo4YyqT5MBE8wg77d4t8PmtWcDKMrrwvrrmJhqfuL6fgm7NMZc3CF4kWaTeGAc9jebpDC",
  "key4": "2BNTFbrJ9HT4i391NyRehQDiRwKuggmcLQKwiiQn81bFZGHwBhcJe6ng1qWbvQqAeExjbzRoPKhEqptJNJwqo3Bs",
  "key5": "5faQEtdDtSap6qm3Lb9y5KsxvET1rNrhQFyAZ889Spz9S6DDJCHwVa9ipr7txk8Qt8xp9U9CAwVwgh7qEZND5nCz",
  "key6": "jUB4kfq23B8Ezi7EqWffCJgFjUaNeJVi5pXSoSGMhEQXMedtXiFs2xfabUuUrf89em1rTu5hhLwdZt8VCgQvSj4",
  "key7": "3kFBcC5e9ZfMKqN4sCeCZywSM4JdryhknornXMYXmsLQ9wRdyt36qnEQa5m9VQdHhop3LM1mm8F46L2ars4xWGrF",
  "key8": "98RyW2NSFCSKRuh7c1ndefBgMjgPQEEgkM1oUbEsW62wfD5GX9vbgzuYWzSu1LPXdyEqqng24f3oWVhg7vRvgdM",
  "key9": "2zesxgy7yiCRG5yVaFzZGQFZoSceVotjKLRTFX8uFJo6XoZgqXVd8CZ4aaA2fFySTws5uEzCEa8Busaz9soW7ZXN",
  "key10": "2wGxteumE8kWo8F63WAd19nXncckuwd6tWpqFnugF6T47fFpczFLAeC27DU9kTuGc3t5cgo1UWoNtLGboUFzSYng",
  "key11": "39kHUZnMSjkqeDAP5D8jEbKPHc1MvgPM6FQY9YC2GyfeU5MZaDN8i2BYynrjNgR6cqtiRfRFrtHDnDSrgrhuMQ57",
  "key12": "5V5MsK4F16GPV1aGmx1YucTkHtoN4ovWtXHvMEnCsDLhzzHJ942SRZWpiZqFEqrLwPzuhS41Qk4LVN2E8PPNNr6q",
  "key13": "2mgcBJDV7AagfuybLVaBFT6XhKWHRAQkhrqRKyf9f3ePz7LBZFHqYBqZ7RPzWqdXwEgpMwsd5jD3c1KmXx6JjZrh",
  "key14": "3hqP8iNVF4852zgjV7hJbweppzoQqWMtV8ykx7YTX7XoxpY4HH9F7U4UEtcGMP9s65wjdEuMvBdkXMnvfRZjFiyU",
  "key15": "59mFkFPHGmGVqQmpzLUDTxW1uCxnmojLPRMUFCmsrkhZioRUQUyVSvekbmeWu5xvGxVzyWDftzTi7vto8QYcVSqM",
  "key16": "SrvkL3YQAxuEBtkM8dkYd61BiVcDMy7vuDxVrhq2xrVYYoLwmScMQvz5AMCfWaWBo6WAky6YDUG3QejvMRQcbBE",
  "key17": "3gPrkq9AscBuvzizt2KUH9WmKjjEfxWJfqhv2W6z19pZy4ZMaTxjED2kwFpD2JnJ4quPL8riNXGAZtkWo7pcq9Jf",
  "key18": "3idKjc1kVEQmymPXm4TztNibwZojEt6coFXn36brxeSzf1oL3wrJ4UmyTswu5tx5AYYYJMh967JCT8CYgp7HrSEx",
  "key19": "3iRq3QGNFqF4MwCaSr6mcpKSEDCFH9N8TXbuvUaGm5Xpss1KH41cDpYZLw9vAr2ftste2xLRwspf92knCwTDWnyK",
  "key20": "bSUKhWHf18bgHLGoPk8BJrzhxsoVJ2MknEtxeBn3c7zK35yhBvPTDqyD9Ev87SzGnnZmyi9av2hiFkeUDxM2H6n",
  "key21": "3YE9HFGZyD3BJpEn3axFXBoXeZ5VoEAz8mohPcfjLc4cAXHATvYVM5kpFYy9AdPhf3TZ2MV98Y74CR6CuNDmEhcA",
  "key22": "E6Jiwfn7SENDNCC5eYxPmZirehx6LEWVgDa1ZBx87ANqtA6NbTPkc9shkSr5dgE8oFVenJv2bXbY4kimj6CiMqF",
  "key23": "ULVBimNPfmsZ3SZ9Udahe2CaWyvQw7KJENXE7Va7kxbZo7Z7sAECgh4XRtbZrV3nSEHNfKKPRPfMGTPGaqTeJYU",
  "key24": "5XviBemka1izLsVYSMpBGH5hF9iVJeyMqTkyTSmjmdvz4Dt4FkJq3ZQbbCy4nEUkTbRYrzbERtZ9PJHor8Up5dWD",
  "key25": "3YwC66qWCUQEJYZKRAcJSaKbwmaPVTrwS2tcbHYvaHvJNzu6BS7b8ysEoaSpkNvQM7TrstXEvw5zXwWxyENZyyKw",
  "key26": "3aBv6AEXHJRX54GN7TSsdnLj4AcBawMxnmMATBdfMbK7Z97snLhNLP22fuizH8bzPZLunUHcZdiycR7bj4ASnua6",
  "key27": "4RzE5pGY7pzu262tqdHQAezbDYBzfoB4E7t1otYWAKTPVnfUNqdHtEdi2AfUGECNPnGaR1R5gv99S6qowsXEiKku",
  "key28": "2HGWiTGK6BjRJfUu4VAajXKmFRa9YwHcx1vEPjcgWcxBjMdSXz28N6h7Ci1c9HgN2zm8Lz6XtCA1BwMPgdbt5b6q",
  "key29": "2zmCdq8brDJHKQvW1kGKYeaRvVpvsjcThQqwUqukDzZDkZ4FVJrq4hEdDgGxmzoEFqrFB9dZBx5GkBTdhKTpnbXP",
  "key30": "4gfJuooGrt8zP9pcxUkxVY1JU2ShKJ8V6X6768pPy7meiVhZTFerUZK4FBhSmXsxpGa79JUzvQGna6NBTGFsHL1c",
  "key31": "4NNXnABACooFmTFnqbNUzpbTs4fiGvAoWgHdpnsNwtUsQN3xLfp463sjDHxwf9Hnz3o8iuK5BdmhJpRt2kqLVphG",
  "key32": "36jE2RovW7g1xGesKXeygidyhZdVEH5Zvietcyrvx8ukGAWbeUifPbsGEfG137RqcKyd76WgAYS5hDT4QNa2U5vR",
  "key33": "3R5k7VmECHZCTfGweWKpYzeaxv6a5Dn4x9TqD3ihtzzsJc7W4RCWJYuu8CZerJcW1csCZTs3R5PCKM6L6ys54yY7",
  "key34": "5mxsuXGUoxKmY8QofHgYenqmJyR4HJT4fg6jmFeNR9TkQAw5yTHoLdKzX6GHeqdcuCMc16XQMqodmJW2NJD9Vboe",
  "key35": "3NuzLLNSEPpg2hrAGNTy3yyZ2NRwbTW9rjjq4cvQZvATg6PMzMAVLT3ASweeZocF6YoNMfuP2gj9uiPD3iiBU9Mw",
  "key36": "5KieCE9oKhkBZPbmSH6TTvDi8mY2qfk3Ng2UvMygf5GN84v9KJZS6vKbpqVEFHhdy7VMfAEG4rUTxCsgncrUBdcj",
  "key37": "67qAP8TpaF3jJKEnwPw7LGapGG7WsEDcxJGJTJj1poLpLmULWLjpjwVm3vx1E7z8vvNcGLnzX5UBMt8YkhYvFgn9",
  "key38": "3q4MbgNma1Et2Jcpx84dNyhJUw11jTaqMTQKgWoNR6x3npsRmGjzcm581PvZhXsuBeRKpshMeQZwYFvN4bA6oc4w",
  "key39": "38iv7jnQE6xhzZ8UfZ4NdGVNoTYhJTk6eBLx2mpXRvE78YnHSDKyJyc4MWkHJy7ZwZ4DUo29EpajFUAnws1Unrwt",
  "key40": "t72FhDo6ATs59seQWfTrZXgJSpmVWPZ4bQcCYnW4P3pXPLpEvVzokfi6v4BAJ4B1iLxBg2sUqy8gS549mUBxvMg",
  "key41": "it8KfS3cWh5fsBsh15ueUX4YU5Y2kUPyCUzsrCGkwRQ6Md2eXLk8DbHc1dJ6u4Y3K7pnC8nzoyG4x27zubrNJjx",
  "key42": "64A7MU4UEZ9Gp25cZvDp2ZpLqUuCvRrZWd94L3enPbTZM6q7NnCMsnG6WyksciJ85FZogDbVFdaoDXn1kvUfo2xx",
  "key43": "2jKm92QP7h4RDoJswFABaVW1CEix4NuqJi45ADjMoQJEbTUtHH7hu9kZxh5L5sWyfF7Eyu3Yr64HiL3icztKpUd6",
  "key44": "4ZT2sBT66xJpLZt3N6RMiXcTYGkR8zmfBKHqnkqhaETJvYuF1ybccBTew2AXVdXFsXDbLoL7JTQjkn1arE5DpL4N",
  "key45": "5Z2p5Dk6ZBqC63o1K5LRxjuqkw737WUBXqiDNBf75sBFxKuhGvBbywgfpRCC7JQs7KWoVUSzSSczdHurWkT29xEb",
  "key46": "23piNuf6uzPHQMt9a56jscFZD5h3B1kqn8TP1Qy1FFbg7QkjCjGN9k179fjtSyZsm5gKGGqvNRookgxrv8kcTEK8"
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
