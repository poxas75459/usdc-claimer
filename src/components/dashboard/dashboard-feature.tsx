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
    "3dvCH5DFwPdAjnTKGRsyw3s5Uxmf3uQzEZiy1kFn1XyJFcxGwg9eunjr3WpTMsCQksLkRB7y8KxpwR2a8JVG5eef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4qDN1MgFduFB1KPUmY6SG3CgtwxMeZf8av4jaZ5VaX1oX89N1twRLcXtT34JcCi7WpSzS8X9KFfbwBQQggoUfp",
  "key1": "32wThyFZkJWLqe4WfdhfWpqQhTxKxts15rTHuyMBYEUySHYzo8LykmpLhoyGP1Qbamzc7Mh25LNhmDJxmjVEErU4",
  "key2": "4RCK9Z5rqu44bFevEoDprY1KggWMskFX1x3P1PhvhgXfZHkoon1CqiRci6pWRyyqmD9trkFonFmiBYvwyV89NDtV",
  "key3": "2qdmfjCPxbRnXWaBTcaxs2qLb71ZFHiNCUqCcXH4g6Thy27xwv9baFd5KBinKMJukPN7yzAJLWKua4FT4ZKnby8",
  "key4": "2YBrEBijvDzAB77YVGPw2B9EJxtaXtcM3YfbnNhyp6mw1Q4BEAjMenbDeyYLHksujNvrmHNbmxhm2hWQGwjz9teq",
  "key5": "2X3Soeaxr8Fqqx1LbGquL59rWkigVh9DVExEB5RvaeWyBjMT4aMtBzdesNauQYPxb5YVDhGBvzqM78XS1kzjWEfP",
  "key6": "3pRFtirSD9md59LuEY8oY2TemUjHFKMS2vwtK7uauunCRUHpytRUJ4NWEru7WxyFCQtdz2RzPkyCjFDDUjATsJvW",
  "key7": "4qrdZdRNDhMnSFtAaju6gbLNcDCzfonbinRjHjafsi1YhumTe417ZYtaPnUnGygkSNc9NXiZbCXKgfUd7T4X7aPv",
  "key8": "4TkmM6kAwiAcWBvKzdVeTsXoLFYEFGEPB7cfd5GJgDEbMoPKLusDxkRvMGJPj8KxCoZeqjPvVssjZy9inxqBU6Ra",
  "key9": "5w21KdrRqoyPRm7mFnHbYotro7Un5iF13wXm5vDJhKvxGW14muWSwWSyQc3W3hGinFbByWx9WdgvuUvNhp6Wungx",
  "key10": "448cpSgwNe7QsNJHF3rtadC2Q9BfJiRTCDAek8gmwGrXyw4UioYmSLvKERPEugd5oqGFVvSTgnmaknDd9Wx7Hgf6",
  "key11": "LJpPa8CoTLwjXAf4TuL1xSHkAukPggUus3MwFBV71FUC58TxFFiryGK1oo4FHtFc5pMidMoPNz7a7bmUwXw5GsR",
  "key12": "4TtAmXgsMmJjAiEuWUqByshMHAQg2SCXomTJv2Sp4d6wydcrAMcD22qdQXhRELiTam6vw7a1S1th9P69t3W6nGvW",
  "key13": "j96BLJ2g313zJ39BpPsMpUZgewjQ7AvRpDS6UcVpWyLQH2HrJ4NgTQXtzxKvnAHLBnz9Synx9RWcvitExmBLMFj",
  "key14": "3XGzoeA3HpbQu2LycJ9xnZoHKmS6iiNB9GHMbH95eBzv5RTwBdwicvTm3gEaK6C9yFJbr8hGbtSSr2RoTN7Y1mdT",
  "key15": "2SNQVTxHJC1yUuUjGkxwgLspjx9mh1qBAZNYBo4FhGueKXhJoXgJp39qVU2Wbebizjt7QeDzFnhurbBHcTeNnJV2",
  "key16": "39W7P4dssn9qcozMHGMKvCurcMJCx3jNPoosUg8n12QzYRrGv6xfTyAsKrvECum6m27Nbr8dZKZv8xL2e5MyWJuw",
  "key17": "2hKqGRe4yAdnLdh1kzMeWmjb9UpEAVJdeSdDu9zi388Mn53jRC6djTfYxdUjCsiDkgr3e9jcZDgftgUsXKc1jcg1",
  "key18": "3m1DBTpnoGsncpLCEyNtT7NLGSiB4BxJR1EB3ETeeby6DPkmJRFJGsBEarMKq2ngqFbTx8deoxhGC3x7BV1pAmLH",
  "key19": "3eQGsaUV9tswjuWquxLwbHJcbEpg1eQpYPq9FGqDCNxcHJfwUG3h18EJu4K5EUquWmjmDaNhR3ofkw4WEqsXyYFw",
  "key20": "646fydViNW4souz7P9BXVomTi2zvSGMt5K1nDLmHgWbPj79NFSUJBqWPPGKnYu8QAeYZNDiagPfcuMaBPV4Mw9xc",
  "key21": "3TQXeJZjMaQuoVmjL3jWEyPg7VJonu6JU972Lij1uZPavXMULNLi3JuHdFDXVGDLdLeRokDReFtwJiUHe9MnrXBX",
  "key22": "ug2NtxFcnnuC2cJ57HMTgS56jV3vtDA9irfCL9SZBvmZGaUb5zciiND41ZQJbkmCs5fxw5DE2UgZYXzgLnRy6mH",
  "key23": "4EKKj8GJ96yzgvuxvC3JyPtKuYZCxnjKqPvLLa4tMCNRomXaX8Ac9gEpTMpAY19HsqTmjC9A1Kji7wXgnkxX44s7",
  "key24": "1QauEU6zb1Nxf39kQYgW92uBogkQDwoZq1rF4xcsedJbtrxh3q47anXxcEEWezyG9XXPnv94gY2v3dc3uUtaf1Z",
  "key25": "PQhihqKXDhjNLQxbawFLamdSwkUdcwyPAbBeaXDERQNjjr89R98sY9WkG3h37DbYsaHY9tkQYCyobfCi5NuDCpj",
  "key26": "2BeLeEWz2uPGSLU9UaqeaiVML4HgPKE6KJ7igaE93KEuCuNyeoa352jPPb3JB3kx1tfHaafW1wdDsMN7rZMnAKGc",
  "key27": "64ZLLj1S5uUPRC1bYoDUap3M6MaxX7oqANMaPT8hhUx9s9vtptJG5pdPVtuonkuyvEz3MaYryTuA669mfUEZeWzd",
  "key28": "4daS8H9fPTq93qhds5X2eirwWxUxeyusy3PA5AH1d1B2MDJavqXBkBC6QpnXgxHrZbNHjwMr4GTdcAPpDsxeGT5i",
  "key29": "351RSJTrx2qL6zSShGwSNgtVv8G54TrRCgeZCDaUSLqquAWKAUwbQucigpc4My5Qw5s5Vhiq2ofhzfZSbrBWAoRT",
  "key30": "5cPA76rBJqTwR1xsCzvvxwjKY5vhTD1mQ7jxyYkT9rGMRm6DQ7vPdkSAhvgrTekZySRhFapMiC9QUk8cXtGkUpU9",
  "key31": "5VZGg2vtxpGLR9t61XmwMmedbigQ76KJKzUpjKxr9JoX51GDwVgBMxS67YR5BdroY11XHLToeZ9MYjgh6N9mYQjG",
  "key32": "4aZzaQPofvVxvYF7GdyoEQNo3SCkvBHPppsPJbeYKPGvx5y6d5omRfaWS4nBgJKm1mdP43rbnSqv5tYtjaRGtJFn",
  "key33": "4UmxF4YzwEP3GzwzivpQNX4Y2EV5UMNbF6uLSgNY2JnmWACTzEBMZVsxJw4wBT8m5UxVwQGZNypXJMCoiNSBxmiP",
  "key34": "4TnG5nV7SzJiSdD2ZS1mXuzfgmwMbys3tAw54pCnjnmS6MnXPHmZ74TfSRbJtheEps6qpyD31oTAyX9MSLBQegkL",
  "key35": "5BFAjunFz4DPQM8zH65zk86v39AwAGv6cv8jaKGE3duwnbtNL8rrp65oVfpcfLpPKaU3mtwAVUWThfLLTpuHadEp",
  "key36": "5JHnk8KXnVtQN8qnSfdHVLvszkZfGFZGUD5YRg2JZERVWHqEcPfQA8XWkBuzFNuJJDmWmgNgbHN6Xn8xJK8QbN4k",
  "key37": "jdYHv6GgPaVeAcea3t5YnaPN7BVjDiwKHPNL6T8DKiDPG51RLggeHqB5ZDi29fegxCTd5tbUNzGDGtvw93viFvQ",
  "key38": "5MoWEuPikeiMryqxWbxzp4JKqVZxLRc4bFsTE4FhhDEQTnQ2oZtV5xxSAvxk9T6NRJyQpyiZybo5CW9ChCySdHiA",
  "key39": "3fbtNFT2FvWqMRMCBS4UqNARVhbVLnpfKEKgHceKHTNgPnARGRa57MyDNcPzoZ8JwM7PftybbXpzjhYNptUo3uDR",
  "key40": "64J4us476oZQHmnspmhCEjwM3fHRDHyLD2MoHnNwbTg3n315cFNBV9sT8PFoBA47y46a17N7bYvkXjenL3GjRTfb",
  "key41": "4Uv5xpuKhbfLCKC3aVZR62CY9d83JCG21ZbN37W1875FiGXKHDKG6Q8rXJWvAqN1JJ67mjkQveWoAWJHfUkLuJHe",
  "key42": "3MNAaGS6oso1SUY5BFrfZAjEuGtqm95oYSVMWrXpue1o1aVRpMBiTvuED5XaBVTNmuhXPApgNSjEfhsWB2RLpwqx",
  "key43": "v23jbLqWLaFYEbgghBXNT9m1qonaFMHaaackj2tiUHY8Pqzw56R1i9AJDJKUjf9QU1G1ErE88gqJDjLNsaVTUdU",
  "key44": "5srobjxCQwa9ZFUK98UDFN4XGYGvhPPzh43XcN8V6znrqjkWu7skbvxTns1BmJsqKJRER1hXC62Zyia91kgn1noB",
  "key45": "3PZmkAaeYnkk7TLGFsZEAzFMEE93HaP1xqBPmaJSJh4wZ82AgGwNpnnviDK2MbtQXviA8CAetEn7bAayJ4VWBjSJ",
  "key46": "5EQuSoTG9eeH554ygahwdnT71E991NS5wpB5isn11pqGKz5bdbueojWwsK59iurFkaPMLEvMaghirGx4JYkAKbQf",
  "key47": "2gzEC6WjDqRx865ag4RpZfWr2E39WNS18tRzaW5xYjTMjaQTo8N2h1JUuvnczaPLZnkGqfz6cCg6XcGm5tt2EhZr"
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
