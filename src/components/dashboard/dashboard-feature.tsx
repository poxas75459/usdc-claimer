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
    "5nys9bRrepnbCLAkHqrybQDuwEWNavnk7Zjny4KyGwF8HMUxXUPDgdXzRNgFjGq6DByoFDafHfqkAxVdAJKbFNZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ec2QfUe9oQpJroDz2CJASP5wzp1v162SomFzibZsJtT8i6HzBkrs2utxbQgXWUHoreXPmuP2dDzkUp8BKqCgT7o",
  "key1": "2DdJqn125mzUKNdHMwRLdmaNwLyFhUqmTBpKVh13bPva2B3512Ut2uDHfPR846gZnf1U6CGkxferq3rUbUrafvU2",
  "key2": "3EYJFNeYnCceLf4X4UtvGjZQpx9KG223gyiwhNxhdo82TnQfwGtAGP5RVQJEdei1ritGQDJ6pHz9ZeQzhiRCTu8G",
  "key3": "34RP6rHpMPT9qjZK7rJ4SxrSRnuTmvnNBV3K68V2pUyLreaFiLpZeBq7WqYBzWsvebcauzu1x2ckfB4za1TnX7qn",
  "key4": "5kP44XqqQikLfdukaFUqaYRGNo82CxJS2hkMbmVxJLmjC5eW3Wo8phB1mZBjSnfMkVKCAqdCu1sdVxaFjAduDtan",
  "key5": "25tkrH83k6H68mYHkD9PC89gb5GwWrGzBzBHZhqWqDYfhSPTSg7iJrNQXEcLiXL5yt2wAkTJN712SR5azY7PxHma",
  "key6": "23jeVZfqnq5W1zYxK7tUJ3tQQ9uTL8cviTp5brLUDSyA9HjLwHF7XwUZybb3uwKUkDCEAkKcavpcLDR5pq37kJki",
  "key7": "TCe4wj1hbEA2CrADLoCai2C1fm15FBvDRctUqQbqTVwZ7NFq77n79SY9kw99AyKWBQp8BEuGuN6bvMLYkaXp9aA",
  "key8": "2WRwEmFC4z3dEcmEnJ8X2wy9RKe8A5du3Fcxi5TYP4RawfW654Mm9HpypupqUkvNNQivgwhiuPPFWPyJvjk4JYaQ",
  "key9": "4XiEDtfG9wEvikTrnz9jDJptMrGyW332H3BjzT7XEUpi8t3PH3sMjSLBEYQnr2eFRCiwGtDfvYYpiB7xP9mzCmhy",
  "key10": "5WJpzya8hykTvFscNj2RnW71BJ853GSJHgFyNMRNWSCXVoSabAxcUE5FcdJiXF9pwJxv25ukd3VQPvBBSxrg1s9P",
  "key11": "eBKfPvWzjkvrBEmSugWyJd9gKbsVtsoeauBLH1dJERu2trBWw75Jak2SCyNJSA8SvvaZtFQD3zJKDwcFf9RAaPu",
  "key12": "53L4RSaZ8r9Z1cRvR6Sduy6Lemtvtqs5LgQ5juUrzzFW6rcKRAjaptJqd2Y2NVoFM6fUfJp1scLJ1NTaNUpF2zzp",
  "key13": "5c2tYfkfAgbq9WbT43Tc7sn7SFvrGLvLpmqhmnhgonGz9ijY3b7ZtRKqJf99M7rrc5JF7k1aridYwUxcjvewcjmQ",
  "key14": "5o7T1ufJcWGwjGfy42XtnDpYHD5JZM4x3Epm1aXmhok1zqeH3miq651dgCdfeYuFMS9yUwqR6hoMz8RLbDPT7N5Z",
  "key15": "2Gzg4zfhtPGiEdae66CAEGMVjGfVQwaSGBL76nBuGfy39Pcia8bG9EQdxwEQuNjh4kuApgatbT5ukYf72N41R9rW",
  "key16": "4gAuHyPjtSAhWKewyF1QWjPdquZGhxZGG91mXPL6YBwvTxwLxcSAbWdwibY3RNjHdkTDyPAzyJM5sNsyYZK2q8eY",
  "key17": "3xeE8E9wdEx7kRtXxWBYWJ187maDscrPBvkEvQjm9jBkepcaruoVnKmnz4sKKWT1PJbH14J4f3vTsvm1rZRKv8at",
  "key18": "5HnCUBq57Wab1SSA7gpVKmemksnsE4pqZ6A975UBNe79k1cUAPz5N5f38dTdkG696Vyr54Dn4t2jonSr1pwueL4R",
  "key19": "4mGwDp8183ewFUQfQNSTSUWMB31ReAfkxTBv7TzVr2fQvPUS4hRipwKaFLrCN1YY1UhehNeUvrVyTPA7ux6FEBgU",
  "key20": "522w8UPz5pqr4tY4JNrvHmoPDDNNesksFFE69sMVefJ4KgGuuUKYJq9m58z1wBMpKzNVEj2FdJigMKHW5TfeRmrP",
  "key21": "2NHtTNeF8oguvUkyo41UcweCbFuqbNY2DeUTAGVUg82xx2HdMVNqGSCkbzt7ySbtRvXkEwWKHpN3L41z2kuqsjLM",
  "key22": "W7N42ozte4nkFGsTTnwPCQuSrtx6FL3uTroAZTNVvjUMmxekZa32sJngdejerszsasPmsXK7T9Et4GRfft6VKPX",
  "key23": "ooanE9FwvrRZYFUdQ3Z4gvmAQDRimCZ8itTe3rDbwmtsv4QmsyjiRNHFdL6kYV6Vh1rZBP5zxFMoDvXCzLKPedq",
  "key24": "3tLbCEUooDsSUtncRHjp2Z3Lpv3avYQGTu3WgRvQ5CPe2A5h8WW58RbHsSrBj9E6UcHbWV2p8QL3t3cMaLPaDFDo",
  "key25": "2Wek8aNmG2gcxmQUSA9Y6j26YnEjNEb3v6dJY4uRYc2kPiDS48JDevJYaN3F7FCw4XLu4EKsUVsqPJ4DjBH3XWBF",
  "key26": "24JA25h8NoNbTHuxWp41Ao2h1SpautSUJUzd7h4NHctqXk6frqQGMGmDBK7pqrrivCYTFAZboW1ztD1Qrnn5tAJk",
  "key27": "3QKW7STb8vc3Hz8JQesDPVQudyhZRAGiU8STUSHLjVGNPJarHyMgpy7wisnysyLdAjHAJhjo5GgkXG6ihEySj1AL",
  "key28": "2LxrEnrY8LrT997z4cekGWT2WnWDAhy7SkpvmqnEWLqSDsazHiWs6dvq38oiHzHyEHNGtaAjMtsy1Dxc8XMNiZjy",
  "key29": "Gxv9hY2J5DkJVBix98QpuyhBKHWRuC9GKwZARCvMseCimHibzc789ZijjDaGeXTQDeKxHXGHuxiw96dGZKohG9G",
  "key30": "3jqDSwjUA291PZbMWjNzd7wQp3XFs8ZvtgEBkBHyoG7iJXyy85LdsTPPW2TfBjxULpw8WhA7aaZnr4L8XoJhtSCB",
  "key31": "411aQYRidDBDbJw8Rf9W2RFn65GdFXGoyvZ9vxvAKhT3vLdrwxzx7KHYniznXCtoKmJxvZ2nTjodfUB7SFS923TN",
  "key32": "4mKZLxuhMkGRHqUg9zPpUiTqt4oNAU1rQaN7rjmmNcp3g3PRkLRYERN5LxCWxgPBPP6hbr3EeYj5ELdNLDskaufZ",
  "key33": "CoTorBhRycReD6iwiPbMy4s3okysJvn3ai7gfwkwWeZbLu1k4Vnv3bacJCCnLs4QndgscUCjRVZXeCxPrvpya6L",
  "key34": "kcACR8sVdiKc6B3r9juGeKqufUbuWEqekZrKLFDgm6jRek8K6TNmJWr2iEMNmSWEfVSsVA1wR8WcBxFgm36Nhb9",
  "key35": "577HNTjRTatB8PqAsyCYp2axMXkVBZXPVSWnbzv5xMX6kVWuDrpD8hEvTE4cxpTdFRmnhqv7Ev3JzQ6GdbPyKxL1",
  "key36": "2JuWSGCxx85LSR8wrD3tvWgBzUCNKDwi3F8zJS1Sa6n9nHrHJ86jbPDRUsy6YEet7GJtCVhjsW66JgnPj5GePMLG",
  "key37": "CfQmdPQrD37cNWkyvDzPvbTz6oB92c2vXYeh8hy7AyeZBAumjj9cBH8dH8RLvEyKQ8XP2xxA4zQVBy6qCPWuMhS",
  "key38": "KcP8S7JPcctssCFuFwBQohYCxK5takt3TnzJd6vpKtdCaGYBR7Ro5vLgSMDGYCi1rRqDuwbsZa2DjF7LNnY3VPJ",
  "key39": "UWhT2ZZ5nvtvASnYW6wPwLvgTpT3rVANoG9o3bpyF7engH9smG4ebKjKeFzqqck37rXMQhWzmFkfWF1EY2b47er",
  "key40": "P72rvLMjQBnYarnB6gDktNPhNS2KR7TQWwR5ZJuY4yEm4jQEWDMBxpWhb8Edhr8RZUw6WnNe3bkCgQsJ4FqTNjx",
  "key41": "z6vH7sGBQBjp2J1o4AKiPA2AWnh7hhkCB5ubojv5j79WdujgtNHzUfKM7HuJBfKRGe5FBWox5RLVunDnHPNq2y2",
  "key42": "jd66QSSZ4Bchb17Md7jJZWMnpg3Qz7mtWNDG65bqFMDEek2gfnNgcHkb7wtLEWU7rUfvhKLtuPTuKRsaMTD6VqS",
  "key43": "49RkJhh94TyR5CcL4bd4kavdbseMdiatPPRyVhC2YTgNpgwY3iabNZ91pmiZtMrTCNLHSeV4q9TqApjEVayCcCAc",
  "key44": "5HN19JHGwxgnG288MgRXZhg8TYymPk7mgtFwxRQHUsvcvHWXUDyV4Yn5NbGNbqS7MgApfJzu7RQKHgd9WVUvSJKK"
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
