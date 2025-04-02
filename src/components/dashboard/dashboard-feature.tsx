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
    "2UdXJ9kEZWqQUQvVTCMLqrT8hYWpTdervr9PAunX2n35QcZVB1pgTwyRpP44ciZDrwyCyaV7KkEmSbgpjkduYPqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xbs9M8mrjTTBTgxSQ52AaSB6S8PJoHDhLv7HfLyDVMRA9zRhn7vovVszEBHvG9cR1RdPNbSw3UV96JKNbk5FmY8",
  "key1": "3wq6pkEpBHjAfQgz5h8rZpYSacrBj8yytaq6AQcxzxSpoC4Eu7rcxfNzzZpEWF9MpbPjrPrP8HG8juuDACmXS5Ti",
  "key2": "2mFP5qoZFoVaH3KoGT4Jgi3SFXWmVdPJkRQtgvyVZk8T2uATE2Cy2zPynNxMTAyQ9TymJJMVUaPesAyJHCiev8NH",
  "key3": "5aqhqaKkej95uP8EGjVW52gUbb5pVJwLJAnJbfGyZyhF6XMeMo5Vgcf79xPDaKrVrJfdnJgHhzyKcg3GDniTrBMg",
  "key4": "4Cv9RmZDGXkuCvAqB9s8LKvm7Xx6zZP78WMaBiQRxfg1SeVqXhn1vaEg3WYBhGTZBSgoEokMc6ef5zNM182yWJq7",
  "key5": "5EUjAjWxnhMsAzyguDNLh1CB3Rv7XiCwEbEaqG8fYiaCgQyd5cVFJQVQScANSDaLVwBxLZJ7anuRxph6uBmHWiNL",
  "key6": "3HiDiyRq62ixJSGi3519MKPqt8wRs1EHpNm97o5juChYZKTVsjS9M9Hv8PrY7uPmJGZcs6m1j8vWWNK6yJ7Ju4rg",
  "key7": "3KV5KFaefhzjwgjwZxohyMUA4Q7hQW9xr7i8vGxkSjERUjzJx6w1CWqYmitnx1r6v9HNzdKgs37Ctpq9GYdu4G7m",
  "key8": "7Q3iuc4Sq2rHQYdoMhHEVHz8dNNUKv9Nu1UYe6xM1EJgF3uPtZZkcdcTTfVVM7oHRVvSK5cxKjHC76SUEm2cMFn",
  "key9": "4CKzeZWEnMsjsDL2PSoewJxwdkejPELsT4UfdKDTdb8Egz8ypRYQ1evqFACQ5J7nwRhBzAEmM6f3MKL26LrQ6Lim",
  "key10": "4xsHZqeGpnfzsFq7HyMAze9tRSoEFYrLj3yK4GaNHBdujjuD1QqWvztgWkJ24gkq7i3mEvcvrAJBsf8aDZJTZP2k",
  "key11": "5fMqjRLm2QVeyku6cZPhYcYrt38Y66dRL6rZKHb8qBhbthQTo7TAou3usnUi1WmCyYLXu2jQgNTNGyKMTezvar6A",
  "key12": "33xHuLBHeUonebRcNsPRa7Zyrt3eUzxY7Xs7PTMKSFkpWUNtc3ShXGWkromSmzDWK5Xz5DUGVYv98MUQE9ibvAFL",
  "key13": "3aezUeN9S42nrCF6WgZJUd4Qi3um7WXTwp6wBYGgMmGsSSdkwwZNsPRXwjcxE7yfKoVBJBX1d6JYoPkdQUZ1boy9",
  "key14": "4bjrF3Vru8VJLbTtqy3YtvqQmFDv5A5kktEneKbyUv7yq2J4339FGkr1xDMmovY9DB5RWcXVBi3HpgBng3ESdntX",
  "key15": "K2LyxCf38dkCfSWd7crQqSr5Xh9rLcHC1DfwRwxAhvauHv9T3dBDe5XPX9qZMg9YRHWgCRConmo1B7bNAGdQy6r",
  "key16": "4VPQBPTi8dCDmUBhFg8Qi1i2szPDTiYzjCqsWDAHJEr4kQxwKJSUN7si6jTxhfj7Hbx1Z8ggzGypYibg4xnVB3Uk",
  "key17": "4AKp5sGo8NnXubYJp3fWjzGHEEFuPqrzsni77pqPTE6WckuUL7o2JucxuiyJwrETQcNeSjsmGGbEHcFbNLXTi5Y8",
  "key18": "5t25eKJF85KZdPCPxk2rqtydngiGmQrqVAtN8J4R5xL7bLn4fidZ3thHNviJY3KDvAJCFot9GQNvN6dyPZBbaupD",
  "key19": "5SEDt5ezmhiGH29eWnD9pvqDhnWe8F3m5yXhqTvq9Hphb8715jf3qhxovuFu95Ux2mDSnjDqmzzdg3uiFNn5TNDt",
  "key20": "38YEEmvhRKH2Rdr9kqhPZhFb3m6HehUshu7BAUu2afU555gGLhovRL6AjhPuzw9n963FQapMF5jWnWEDbuQ92LN4",
  "key21": "NGAz8Tu55BnHz6Q9ykYpTpDo3ecqgVajNYBwJB1xjRCyp829FqfNCJXtw62puzGssVVJxWCpedyK2x6m12sZfxX",
  "key22": "5p1U1Y89kth6wat2DKVNJD8zEusSeNP3HWHLbcvm4wXNbxixP6CnFdy9mAeD1yu2EEZijPbYWZrQDDy8rXiZxKsQ",
  "key23": "3NJ1W1uy6fEbGuJzaSmp8uW9WW2fQHxWjWabqiYqSvXd6fz4hKaw9gHsqaHKVVufyh5E2PqrK5zYWmRqDxL656zG",
  "key24": "4gMJvZbA9q2coEAb5KUPLY747mFYEKzcsAETLTWWDcocc6KMWbBe4qVDD4dymnYK8XndwEagJi8JhJG3VeWpF2Cw",
  "key25": "2F8nzXziy8jBVdrCrKFLvowabZmvaNJbLWtgXsAzA7GJPNHUC7Woq6ZWQz2gzYtV8R3ra26GjVWYVTADVHwGFhFs",
  "key26": "3kRJfv8ug5JRJHB8YAHeDiYZ5EdMCBJ8z62dGmbg4ZnExVZXJk4Ve7sMLUqiY6m1fWL2bPTM2rSdXtENqQg7CebF",
  "key27": "3FdCsi3UfLhBETB8QU61vqEJfPqeomHvk49AFSKrmF2RF3SExCybZheBi5Vaymg7CKoY3icmnX4Laqwe6feN6Uds",
  "key28": "2vqjvTBnddBAyrktNxd3oEAAitVa9WeHRn6BArvZD2oXnvw87MW2AzaBMhX4iGHaWz6vXgB71zKmFRbURaaCvMAn",
  "key29": "3zUhNUp2ZuZUq3murpRTHDXUxMehaVjp45Uf2LWEtSvSbaLhpphuK3spoS8DohtCa5vTHs4YAfVmULFCbYuvtbWu",
  "key30": "4dvMcH1bgHBmiZZzqNxByRt85uPgfdFCoKYtu8JN6mJdNtwjjY1MjZeF4kL3iWPiGeFzq1FU8eShr67e4TLqf8Vz",
  "key31": "29o1ENvZNfmobCxQG3veTJGo3NjRFeF3dvfYxJRm2m6bDMPsrqcQzbBXg4Ms41Txaew4bKhni6V1ptbpBi3ENSFK",
  "key32": "ku1DL5p38cRGyQGvFVXCaCrw5rPfkrk9zh1Nr3dPwCt16UtV6Pw7mL95Bax8g4dRtreAGfeVQcvejW4QpS5YP8D"
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
