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
    "5PSDZREU8pGDLVWnJtk2vwdsaQiuEk13pHL3c64ZWKBdKdGfkV7MwXoZZB1wXQCNn94LRpsmxcTrAgm67y6ybLPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckkqik9mETresn5EBDhNVNXz7drpXAu7LwyC8U3y3SN27ZB3Z5vrX5VXuhKCQJ4ALpdX5ZWi4HNPgPo2LWGahsM",
  "key1": "4VGarMT9kRTt3QGiaUuGAUkor8T468cSA2HHNpVT7Qgrno6cC66mxj11DzThfknpwSN44v4JwhtFhzQRZW2GTTQQ",
  "key2": "2v4TWCM72cih3j14Phq17mVvZqrR2UWLspvv4jytQLDxp2d3EHFf9YwCDhRvFyXZfdLf2ydsvQS5aNmUDxctZ7Nm",
  "key3": "4JJwLsu9YzF4QoWTD92aFSNfXsoiijqdGXDPYXCcCeQrW4Wg2eBZ5Yq15AYEFGS55sTwno5pmUe4SA7mWznYWRg1",
  "key4": "57d8zaUtX5Uh2Mw8Motzgjkbmg7wMvU65CoxZJxg6VLZhbvPhHAAdpF9iZp9R3uCPMA7krQwwVbRUgTv64oYy4uY",
  "key5": "2QLbLdgr8uSmiNxHDj8foXPxht7xtGJ84MVvb7UzdhoVuDW29Q6xS6cUnZ6nZHfF5GF2SFjUKxdjmmGA3BqYBXAd",
  "key6": "4NYbxTgcqVMuVsEXJctA4zdtFUgBQT3imLPSM9PEGSaGbYQbHTXsAQjytkZbrFUXpRQK4uPJKuPzU9ZLFPpqB7BR",
  "key7": "3siTeK3GBPkKuMPiN351EuLvfxYeesmJmSLKgZnbsvB7DH4hDXKndU9n99Qw5sytivt6JFg1A3LQtwQbYqwbvbua",
  "key8": "2ypF27DTUWGKuwRqZLucSK33Gi8Y7JmRgdXaFxTHUyMv1zbZjDqWfvgnR35JTYwvcgBWp8cnmkD93pdYxhsLfi7K",
  "key9": "h1ydUQFjdwSzwqmD14JpkevsEY4pxzJqB7MHedFnh6CUbyev4wUpnuDAGTLTaqTosuAoF48RsTDxLBXpoaLxc8d",
  "key10": "35hq5FRCfMkrfZxxW7ypX2KnXzrsQ3qsYt3dLRE5CeGSg3yZkMkkALNZJVoYkEQaBzZHbFkbafzdRvHG67ANvjsE",
  "key11": "39U187jP3eFSnqc2kHpCv63e7Aue6W2iABhm4jX9wRgGPLtjsyuFUJZ5uUWWaof8MpTGQKENTTxcxaKDdmmCLHyY",
  "key12": "5FBQcM3eMh4JAG5ao44tBL2AK1UEjMKMvuHrgUviTo8qUihGn3jygsjAQgaN4PCz4ThVKhUMvVA46pRVi4yiifk2",
  "key13": "3cu1gEhZmebWp2sawPhoNjxyxhTDRzfhbDhQYR18772Dx4iRiZz4cqw5LmTDYqmC21k8y7eDhot2LWL11KMvVjZR",
  "key14": "5x995v3unpXyJwBVUQDhpr7PJqJesYXnjcrS8ifQJ9qNYt3aEN2U778sHcHUMGVwNGjQc1YrEN4uRWwgjXgpzbHy",
  "key15": "33hvbboKt4tTaBT6ucXXNwnnztECEiofgViMPSudrnZSMwf6GoSuospgs5JxCxJXHWVpcMHpPPbCUmWqfaBbmwq9",
  "key16": "2xidX4GzuLrmPBStH5AmrPWdDBu1eR8kDnrfUndbeMLtvvk5WZRQM3SnbY7Jk4z6jJfPdfTDbQex9u6rd8bT46Gx",
  "key17": "5tK1XbTcYmd7EkgXmcDYMYW4Ey9Q532aCE9QmJ3yyjQTLJ2UejoU6SyjBSfGyz14YNckcaErH8MvzRGqQwQqNZD4",
  "key18": "pqTJzWmZPKaxZjbXgwqMtCdeTPKosVjwdukTjbnLQpQdEXiyDhcWjX6WE91zgvhJSWg95ikKsMrPPGx39CsL5ai",
  "key19": "35GMMQ3bKNkrbRLKaiJcBGh6fjr7QYwKnBufDEnHRMeAMjWcUqPcDAzMVKVjSTTBV5JbtyBFApparhQcxpD97sFH",
  "key20": "dAtYm1i1wh3BAgnQR2UEXUaZFWCnskzTx77bc8gJ6BurTaZe16LG1KzQ3neqx5ijfLaJZhqyh3oLZqA3yPJcosE",
  "key21": "3Lz4eFqFAfyYTsuQgNpqa7D2ZsXidmyU7Bqg8an21QdHKLy1dQvNj4d9MVdu36Y2wA17CPaiAopwBq5uK1JADSxp",
  "key22": "61XmeLhMEZFqA9kVDp3UnzSHh18UmFmo7g4awMFEzNn5fgZyWea2jEeX3nhnrMfMwej9Vwi9ptMu3xMUUNnYrBCK",
  "key23": "2RCVqmdoiAX6LmYfUhvMHdViA21T9wsQ9fmj8RqyiLYdjFvRcVpKeUFbjBbQmkLhwNTr53p9UEb5v8jtfdrHuzWV",
  "key24": "5XS6oAtsRMDh7SJkS4ytLRE2i38VcAtvk7899rhiBVEsJJMe5vKtdKA16xV5AhjMqyyMREiTmDuPhQxbk41MEEED",
  "key25": "ZphVBWufekCDWjPd9hJihRpZ5KEUVCyJHZLcmiHARYcpcrETeCnt16uKTWgYtXfDu2SbnKvPnb41ttJAa4vEg43",
  "key26": "nJpduxyWC6fXaDWStFZBRhgYVp8PiTDSjPmi1qxLufKx9kZPoKZ63Ar2jEuaFhbBDMqFXpeqnRLWooy2sGMqf19",
  "key27": "4rvmu6LPuP4jXjgDr7x7qBjKUTsH3L9jjx93vEnKXUs7AZ3PT6TWZfHpdgEzYavsmwhKWpkEw22sKRMXUPiB9Y2t",
  "key28": "3RvKTNjjfpuRcyYs5NU2e2Lqsr6gkbKwq1yz1QY8vWTEQTeWy3wKRLvPkVYxLM8ALL5aoszifFUpGWe4roCM3nLi",
  "key29": "5ahKnpfNPr8tVZdMHnxbGuGfXLUKVyryoDPrdmg7Yvrdm7wBBXn7knKWFVfprvNVLGn3nVCAt9Ra7rW3QQx2yBb9",
  "key30": "tsRugbxbc293eJwUpPUy3BdpehiWUsCjpjKaWotpBE6SURwEKL8WxkHk4joMyjNtk1eYGb4prbp71Xftfjdinq8",
  "key31": "vDofrJrfjBJL2HmufqkH4jGPPqSo1Y7oztrMJygDisFU5yDVURE7CtxccNro5fBToTDmvgyJsDqfNbuRuQyafbK",
  "key32": "3uVehXgrow89C6PDBBHN9eKKTaNqjEgzYLYf9VGFV3iFEpWPupCboAUsLyyaBBueFmTD5HeeUQyuWbpej7MXEdjf",
  "key33": "2M7jHZt1TiEaN5PpjFnJXq5E91W8dZSXfazcgFS5Lf776w88PAHbrpVgZh623TZR1PEuViALKrgF2U7S6bqGebAE",
  "key34": "2kU5gvDHo4ozyyr8qactC6Q386u98hDDipgXgFPLizJvVqW44qLE2phgd4wnM1kuFyb2tewuF15K2rrUDU29mFyK",
  "key35": "5skcm7Mb15Ud2d7MhR4iJQHu3ThdJjR2dagY5EZmyFhHtYmkj1S2pmHhVuhQzttGdZqyvVzYmg2CTM9sPbGpNG5r",
  "key36": "3ztL32jTKXA8sEGeez9m1EM3yC6cijrp6gqSrGotmAgPoVoJseMKdbru58EzyMC2MFdgL6Z1QLNe4mSDdqAd9zcA",
  "key37": "2N9w6fXEwBL9gKwM5oMCnvHZbo6UivGA1MXfJ1CQfwgnGkmUHSrokabyKJRSJenLaCMXHim4ySHDBADKnvi5oki7",
  "key38": "LVppqRzdQCBjBYiNTUSXLqFtQ5XbjJdYPqUtEzDguAF7yVtwUj1G8bbfB7vAXEtKSjU2EkQhCZJCTpRK2ZaC3MH",
  "key39": "26zkyCNBxWkCfnwKpbWS11A1x3EKbzSCtJLf6ZfpxMeJzfHSYGgRAWWjywirLFjYZ17PpRSqDXXTidfE6MdFWKua",
  "key40": "2SLVvLQ7HsnH3whwJByZFFUiS7Wn4xjDcS4B4UbT1n33CpykxCAwv7B3XRuXfyMHhDEUFn6qH2CNj8E9xeTFNDhw",
  "key41": "21o7VgEe9EzwUD8Q2pAmtfNQd5TLQr1pjNAQj2Y4ckUcdSNRUDfVXAnv8tpKNuUTFbJ6veiDvn42cSMsSov7pTEd",
  "key42": "51aFC767pmmGJ7CUnCB28CZ5VQXCda4faxf86iKxa4tVGU2EfhqYre2R9aWrfy2Ps7z5qjCXviomkq5t2zvSeh1u",
  "key43": "CHrzVTccZnDkyXpuwT4fLdkwsvFW6T6iKMjjGyAfi2uN5mpj7XsDtW9A4GApGEFsWAwHCdLy5yP3u4HQffi1gAQ",
  "key44": "wbZEjv7rJPXkL4ksWrGGvufiP85Eh2quYrrqHHSqLiaGtW5cnc7CXWQatPMz6y6EA1Y2seP3PkSwb6f4bXMYctL",
  "key45": "4BSinDqW5f9Hj2nFLjmaZ6M2YwTFGByLCbV88sbb9iAPqbN9wb3c9L9x2DA39m3b8i7V97jLJzZKT7SxetgVop2w",
  "key46": "4s48xE6jUXeuoZ7sc66y8eiyWi9ZqnwFbiUN88WEcPvVNBBcB3twtadqCZpNDEng8ByfM7dniCW4hA4AbZqEj7xR",
  "key47": "3rwBhuVSB1QN4KyWhx2v8BcfA4z5bmtLSGqXUR1Zx8G1hDASGkQQGCyBK27yLRHM3SQLcH3NQ7uRWTjzWrVz51Sg",
  "key48": "4jSh2nTGjfRShVnzRQxmfgjGfe7Zor8WM1DAY74Dcbvdrd3NVd5nhCfZnAM5rQ2MScVWZDY9VzZnW9RhiGWeVzZU"
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
