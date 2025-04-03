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
    "gWeQfrLBj7BoCu4Fh3LttxQKAYn3ngvymu7f8tLjPBnnQwUhz3yxZK6qde5hcDtsffcNLLrguthweBxoxt4Qg61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZzPq2731uxePvV4btbYY4LtCqFQALMFA1oSyEatz5SAbUnF4o5K7hiAwfoveMJGMrEbqqwg6vhhvBWGnKKsDrxa",
  "key1": "4hbVe7vhhLFXodb9fpTGQLq6Bucr3wyn6hg9CLpHZecBZhvYbogVxRavu7w5Ab76CEe9v4h2CtQsVTMLDBM8iKWR",
  "key2": "38mRSeXEnP6DziUw6euvCjVBtUwTYzjpf5DKPKM5KY6jNStiDQU3DXF8zULqsX6rVzwnPVatPRgRqj8wqw7AUmza",
  "key3": "32reLTxXgxGMMBnSLr7SUJu8s2bBNxhn3NLWgDTz5XYVmuNYhRVvE6kQweuZE1Svt9zh2cPhAAfbdtmHzBSSEaWo",
  "key4": "34hM9AHroB9b3u1Ru43GiEcK8mzHssCWsZx1DaL2Fpddc9kWWRg4ksFVFvHsaFQcJbn1nKkJhY42nntH4a9dh2Yt",
  "key5": "GtNrAGr6CwELXwKdgUjUJ6LLjNtLmVYEqYfFvUf5N8EFcPVQW9xo1dEbrTVQQpJeLU8CUSbSbULkbmCfz7PY7rE",
  "key6": "3cU9sjBWnXBPQciCrBWwFzVHwiWkRVA92PC4eCMqiPUiRH7CQB1ZNZxUsN9BKHwPcdocx1XDjAZSVrs4R3KcMj4A",
  "key7": "3AQBNsf55CWgWPJbwZ3X4evTF8GNTfSfvor7Ba37EU5EyRQxjFfFgcz6mDYbRBX7vthdsp2RU6tqn73v8WSVmFbM",
  "key8": "4rKmetWepdJswmmeSj1az1FmxkKNYGLK4zgqWHaCgcCHfum3vFDgSZiqDMb6z9j8eum2UM2kkwz4P3JgZ4jd1rKK",
  "key9": "2g1sizT6QLauXkUpdXYLipC1EQ7bkHj3PZf89rPtkEMexyX3eXL8rorZCWwEjy5NWFrAs5WkCqgubKpbiw7VuZyi",
  "key10": "4y8TXbmSgypMEYnFaTUiLs38TkXzWYnqxU6849CazmxNxPYVXWxnNfM1vseK2vDjTnKsXuJGSKuTPjVPpp7NdmMW",
  "key11": "FX9p6x9aRG7LjyosoKgjAVpWG4Acyr1WLfMbDPR8XYod6R7S6DRG7iUDZksqYkWQ1hbBRXJ78k6BsAPfqyYq85v",
  "key12": "2v8VMvPvFC5X7UCCq9T2brzXAbqegNF8fxAMSv24n688KkQz7EUEASpg5EUmaNQuyq3cjFAHXMP5JyrA6CstRKkn",
  "key13": "4HsnBmU968zurNrHPjRgabqDHNkEPGGrEB2RQhHqAmdgFNNwW2Ddrg5pBpSFnB78vQD7WHS1s37bRJ6WDgPw8kx9",
  "key14": "2FjbkHZCnePekhGKmJcXDTsRPqVAVL3biHu3CSd3NGKXBuT7AD9FnhsZdh7mvJ83qsCNWCLgjEiaiYAnrbe4aAfq",
  "key15": "59BwtVSXaKnJNkxo9h1WhMbaLEPBn7NUDzyva1XaRiLeuZt8njwNcrj4r2RuMpZucgzDa1GBJV4efL7QCfrnBHLy",
  "key16": "5Lo8JBuB1ina5q3ZDWig2KdDp9cocEhtU35JhLcxu9tQPBf9d4ikpAvpQWuhFfafjEEmFwTxR8KjNgAiz7rrsxwE",
  "key17": "2J9f9Jt32zgtptKnBypzCSd7rcqUjkiydnweYBocB8DKjaTUdSXhWsyG6u6zyK2Xj2RkoPvvmc78JkxcGwgdGYz6",
  "key18": "KWmLMbKTu1BNkDM9DhbdAdXxNHZTFeyhoFgjTFFbmyxHcDZGsRBRNezQwPW3JRmzgt2Fafb6YeC7ogmGJ93cuMM",
  "key19": "3S1cwQQVsH4yzcx5T1hw5F454DcGyFUAiS82cdeq2yeuzZPDMocLGyHBj8yxZFDY8aYUb21S3NybAnVbEJ2pb3tk",
  "key20": "5Tq4euQZNnheykLVkkEorkS4nbGxYkBbDvkq8NkTiZsAyZbs8Q7xrm262JuTZtJ2srssbv9sF2tbUGwU1AtpW1Gi",
  "key21": "3YivZEiUVBMCDktA6rbMqLKatuSbpXQTKt6UaAcE9EeCv5am4f3JBuy8JTKjiSEa37U9aGHmvxCpf1o7JU3qEyK7",
  "key22": "397akxNXnRg1biiGmT2T1cnXkpD8vdyRUB1vxrZCAY6Qfha9pG9PR1FGgnvbPYC7SbbWUprx9Be3qPAsgNkgWMTH",
  "key23": "2cBGZLeheRDAdBb78iq5cqGkJQD4TD3X6HeUWVzMnHrKGFTp3ZtMexBTmuD9b945HFeDVJuEsGoeq8Cdhq86Gih3",
  "key24": "22HJWFVDT9t7xGeu5vSjdBxA22hKchJDsxtncWGb8EHMdyfgzgc3GWwiLSXDAzVkb1gnyNXxHLK5tLD6PQhmpKvz",
  "key25": "4ifBZGiA13UG6e2Jxy1dyyqcp5ihy2FBu2wsZLd88v79gCrHSKf1CF8fK9zL26ddmgRDFY3E5RRuPB42D4wTopzy",
  "key26": "5FhAVXezw9XbKgojHL64grtTfgQJ4LjRrHvSNCC9ccPMQWnTCQZeDRoTpop27WJVPDDBDDenq7zVCTQA8f2Wwcjo",
  "key27": "4GLUcZYqud5FbwYcxo58ENdW5bfbJDXuSSikiUeVjUDjTvkUfX2dcAxeAChymKJsUUVoymPREtUNhDhTia3iGpaD",
  "key28": "QivwrX5ue7fCSfmnW59RGuHWcnPNixYUHsDaFfEv7ni2nX9pbDdZWpyzEexMDYzVhHaNxmpWZeXpDLY8s3jaGJJ",
  "key29": "oGtTDCQ2SRDBe211NoLVxaid3juppkjroBQGYbjjrnkJrenVB4WnVBR53UB7At1kaH1UxgMrmtwfHnnwyApXXMj",
  "key30": "pnEHuWUTx8RCE7dV2JLDxqWy5qN4QjqCweeBgVUTSc1uDSWkjhZ74WBsnTBVMtnyKYvk4TgUfhnQWnoJbZhaPrS",
  "key31": "5xqkH9D4D8F11XYDVsz8DW5SvQscXrHRu7UYztYXSzbqd4cGSu5RGSYBbdYgBS2EgQAZKaqyiSiGLcVM2SNSquvn",
  "key32": "5LAqiUtDyHtAjgFeeycAcD84RU2qbun6ZthrKknxPC6JtNr9XtgNYnocBLnVXQz5tFHJ64oCogKLTdeUg6aTU9yE",
  "key33": "2TmPkbQ8febdYhJP5mzrZxmmMtSYkd2czzwYYgUKJwM4D8crcdBQ3tm3o3E7NAhGoG7jCiUw9T73Wb3YdVHivUqk",
  "key34": "3BoWic99qFtNxDk1V8QCziHxk6xqwWpforB1Zxvk4nNWnE75QrPs42YWLeJ3jzRsc5ek9LVurUeytXA3Bx5ihP39",
  "key35": "KJ2eMdXxz9v3A5LpXH9nCpFAmynTtjuhYnHPjkEewPsBv7EgaTiNMwidXuWGPaontqtZpq9x1s2cAAaopGAZFVL",
  "key36": "QtAaJbTvEUVt912tVDmoQHJ81qFkLygsY5TANikUDs44CXgLYufTMoRd1s4TXC5mbLevkpZMEHbnEeSYNznxL35",
  "key37": "2hMV1B7kce5vtyZBCHfbWcsS3pze3xuiH4794oFDwFLxe4RFQb6GT9sfEQs9GsJqUtHjhyDjC5cna4TzWY9yo4Q2",
  "key38": "27YkM5X8ND7z8zxwvr4kswyi37sMqXB1Fsc9siq2uCcxM7VMJHKaU8LL4j9wvwktofUkW4UkLRTRWqJxohkxroYH",
  "key39": "2ZoJhK929tqrZfUYFLbSfbVKQe11AMafH477XUW4ceZVo4SpLanPvggWGTPwCtZHCrNEnYQ3kCwSwvufNSX5ATct",
  "key40": "bEAPG95tyGtiscBbsGKT3QdAdLQW7XqYWQLSAgYpSFpWt56G7K2kXUiNkvxHQp5SQ45igFHmL7RcbKaUMiX7PpX",
  "key41": "44iAJcKGNiV3ZY7oH1jkoW2Nt7h1UV7CoC5mEmWLC18qybkDPdN5viWx49bxvamBa8DCeadM8qFXoJWSQ9rwwPhA",
  "key42": "5bsbtoKxVZXfhxiWfUzmFWKNe9LaQqj6Mge1dUzYaxJznhGraweesKLtCd23grgquFBQy1T8RBSQrHzLG1U7pJ45",
  "key43": "uqZqT3hk6psBXGomgpTrYzdWbC5ww3jc3hHPuiquvmn7yR5wTFJqWTrBVsNZYBK47DmRXsome2F7jcoS3CMNtzP",
  "key44": "54xK24wMRXQ9gyLUUZiTqbqxdXrRzuZJsZoxvmCgqfqKhiCrqFJA7GePnMwXuNYFarth5Rz5cyEeTqMQBf1DktTM",
  "key45": "4K92jdsYN21sxJQivG6FBgN3FyGNvXbxJpz45XQHP2xMqYoRpwv6TDCytK6dqjq7uM2jt4hgW7VRs9e2DddCSd1j",
  "key46": "taHzDqoAdsgt8jgcJY2Z7FkzacKYiPnAB3UDp5cTrj9dqkjb1Kar3dZBufW3isszkPGZDa1ytTSgmp7KsXT2G8n",
  "key47": "5oJtVTqcX3XjpM9NZHpYRzGB1deHhXtqa9fHTnqt5nDQYDKGwf3SHFoS3GwjPdrJY4guDW5Zw7SQQhhK1XDjW4MV",
  "key48": "5ADNAXWJZA8iF6kis1MLiDsDtjyiqVvoQaMZYBmRJtmhhn4FGKmDmAMrgdHtLPNn2jcQB1SHqN9HZvciMieaipxF"
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
