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
    "2W9KKRDn5idSqcz5UDv7pKGjKFH3M4FQFQMBjFjmcmAhodsrmV8h7Ksg9seC5LH6L3Qnvd25xPfrKvWw2EzPdqCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSjfHkvFAu2fzWbkkmE5vHxkpN8XYS8BGMb6FS3AgS7QAgLSDQ8EbXJB5MuSSSt51214PCM9ryDb2PV8b4aXb3A",
  "key1": "3ynDwvY1KktsH5u2BYxR77bqEXcSpwYUMrYFa66F6tWXJfbtB4oT1kwQcqoMLKgfeptqxRhFMgrQriHVL4jud3BL",
  "key2": "4Z7CKkbZAWEb5RBrTmcTFW4mjLcwAQuNNSEDCmQqMtt19k9E2Bpm52QMLhChJgx2HuHvi3TPscTUrdNKA9huWzBQ",
  "key3": "2F3NaMtW1WML3j54APMfgBnjyn6MFEkWwrn2qkLPbseZohn1TDQhSRcGLJTidqWWdpbgqnF59s5GYi8qsx8TbgjY",
  "key4": "3VFPbmuy8BTDUv793L2MdcgoEZWX9gvyw1shQods1bqBYZbBTp2zivfqUnaYe73G1KwtHyQAC5WjrA3RzSQbRmrK",
  "key5": "22QoBXGucP9qUuisyJXDwAYQhz7mGCMTnyJo6JuvBSdoX2ps9K3a8hp1AMVdimsqwjLpjkqDS3YAc1NhR5uAoyYa",
  "key6": "fAKnPRjj4fTQJwsVnqEMkPLv4Y5dUxxSZjR2zZx6zD2F8NoD8SzRN7uA3bPufzzHAAFfjcbMPoHZdVM5jdQ2Bcu",
  "key7": "26RZTvHAcopbYjjb8DBt48Ey6ozPxpBEEynVksJioS7nGeajyN3Fs5HBbPwuimG4BBeEnmaof1AtKdoFMdXPuUu6",
  "key8": "57sii9xCE5SgFC9Y5BuKTFACy6zt4PJQaV3NrfHWgPfaW9CF4o2KStfA55BsdMcQTW1D2CGvQGwVar34gBZykdk1",
  "key9": "4tcAGm9KppjNngpX7nB2c5aks3qhFHXnAHevrjnm3MdcCWWTvGa81zWFo5MQ3oSjFqLWXZvQ8wMXkEPNwk2rt7tV",
  "key10": "4u3QkUQuhZy8TtAued2Whhs4VuPbBATsnxyHnUUwHmdwDJw8iNP4Ac1zkKAJbfrxN237E6yU4kWNVF1SWRNiUYdA",
  "key11": "2bpuU6Pu1ReyB3mSUcpLZKzB3BEChaKU1VbKnjVWLsKKVu2MfoPnV7jhs5zuE45SSQbW7oqykD8fmJUvaxjvN2gR",
  "key12": "5vM81AHFs5XePUW9UoYmaUKycpMS9L2vr6r2NgRfWa6WXeyNYDGFhMs4RHTTeVRSS45zpnnvip2HHQmAayHXjMS2",
  "key13": "4KdVDN9ktx7MmP7LqUyBdmxD9SUYbBLnFN8c4mXZVxSmAw5t7gPp2SCyPnDNxrh5Qz3yB6YLy77wuaibidxJLXNo",
  "key14": "v6wpQpxHPftWa4wvcWBfL1XpCTYQ84AdYyF9F5NizTTFpsJqJucXjNDeySiAjNzy7VrKCB1GgJMeiL5TG7fWqHA",
  "key15": "DLwGTz7Rpqkrp861iNpVz3HnWL5C66djBhrxHtALpY63cWMPBkjyrBrugZYiqMJdevPdLHjYqZURnSBW5EyRhs2",
  "key16": "2vVirMqnLKNM2DP43KvdwsjfsxPaLpCogUASN5pi5tuNMqCD2GsxXX6WVyvXmVk63nohBw693cgvpHC31UEvUFp8",
  "key17": "47XjJxLTf7pVbjp97HydcgVEjRkBkXB2zMzVuKSrMZJ9T6cGQLfVzT4XVgc8Km46DPkr5ETgrd6jswBj25Pfac9L",
  "key18": "24uVtPWyCn6vmsPtu9xsh8s4xb1RKPidfZ3LGjeSPooWBpqhQdnyUFd5WvAFKHKgyMVPpLLAoiygfYBonM5JFrvV",
  "key19": "5wyCeJPHvWAUZSWXaCbnJoSvKMeQKfBPy2jvyK41QJvFa918oN5wmEQapUta6oNHF3Qw9FMav4AHCGR6FZg3Sp9B",
  "key20": "4wktYie8epwrGfyWfVh9FiG589prSxLe81WX6uRGwnrTpz5RCdvsh3XmzNa736qPdfVgBAVfLdwtyDLNjJantN7c",
  "key21": "5LBuuwCVQDiAs8aGPYURavTSm9KDzGBNYmZLZj5oWeS11ANsP7R86g9F5NoVb3GyPbhwNiszSTAZ6cpZGzoFEoEj",
  "key22": "4KQf44d6C9ChRGkgHP1Vx8FcSRt7LWxfSV23TXaDGwW6Lh7MkL2abdZh9nNMxdvxCX1DiFemLaUoKLdCnT5NC4aQ",
  "key23": "3dNk4PqBjVrNPoWQ8EAAfBrv1Vxa1hDRiN1TPhsoAucvL79CyQ5GZdyiY56zKUKTXVrwAQ5bmjvwtBQeWmASgNhH",
  "key24": "3rkCSG6rekqqv4aPoukaN5JMjJh6GDN96tBgJEsCjBdCeEHMEY1rqegA4ThbpJk9DApoXwAi9CRM22KN4D7pDFjV",
  "key25": "5srxgZm4HVmVohGNSpRih3t5yv4KGERWTwuMTjsjXNEcTvRxkfRWXTmeHq9nHyzBut2rLG4aMQPKBBf1VsvKAWfU",
  "key26": "5aZQgpMLvtox9PuW3wgZzxrTS147MtGeUXgxo6zs97wjB77KBzHmQbToA9rw1dfBSUn71Ev1jSAnzDMGgjQLjdZc",
  "key27": "3efJHL5cfpE4C1Sk8hS1J3K54DgDFeqPr5rJm3EhnNsSwT5fvviJsCCwuYaZnccXsZQtvZgb8KFWo73MCFo51bSU",
  "key28": "5G8jnXSuDy1FhZPqigMDpRGzBXrmchmGDjv74kihH3k3fAd7oW5TBzGcmuA88EZRSZXnVms97PEXaimDDTMHbsCx",
  "key29": "2duc7pzrbddq6EdenSXw8Ps98jtoLjdrHsXThA5CMb5byipwPf6J9yYE4RKRrgm9KjG1LqYxoewRTGqXg2gme41B",
  "key30": "3oRc6JxbK7v1EwPXxvZCHR2xttqhK4szWR5NuzFVcJcDYjcfG1HxjmsXutwmccLXzJvMUmVdadw4MvxYMc1otmi8",
  "key31": "26ro2Tv7ePT1bhjicGu7rmd78XPgtw8sqEzYuaYm9ggex9BXC5LAKK3ixdf1VsY1Y2d3Ub4ajtHg4g8tZnScQtiL",
  "key32": "1dedfgp2SteTFqv6XJ6EajxjJicze5hYqcrWC6RCGWdMpjkcadJNjp5Cx1p5KXNg1MEue9LadKJ7FNsnojJvTh8",
  "key33": "4SjD5vjuRNn7j5sr6Ly7uG8FZkqZX3airqQ92dbWyFKAUdZT1LwbCmSHgWdhuhio8F7tGQfAYBmvrZr8pozLJej5",
  "key34": "3rHNzbSk9Wj6pY791Hh5gpSY51kdHH3JR5g8eBMWham6hnHQeKp9MyCryyCdA19ffz9o5MLi1g8hry3PwtPW8APT",
  "key35": "4oAzcCSRYpQaeCY2bnHaQ9MbV2MT2TH9TN8T8f6pwFo7rua4Rs3QSnFcAufe2HzYfWDsFxG855Am2UQjeUJBqQtK",
  "key36": "2uQH7t5XXtNBvNP2zz6Rn9Tdps6jrK7FVHD3uJvvt1tu3mKEmmhh9AXp5U2iFjfToVGx2FQtkscfjJKBReJHPmfs",
  "key37": "4HYcBGZqomtCzTWLPfAEFkfepyb7jzrVjSo2DhtDyyUCK2zc1paBiwV1fPjrU6bcrD5zQ9sCx1eH36R4e1CFEi3u",
  "key38": "4FeZitvNMAfe55RZCoxaxrXVnRSqCdkXBgtmgceww2opqmFq8qmNUEaEYDN1QWmpANeehJ9WzPvwfUxq8Vwy3eDR",
  "key39": "5miaPu21GNpoV8YuwpFRfE7yMpF8cjnRdqMEiECxogRaC9Vg1hAuJ5pMoR2ndU5c8oE3vyqCAbVicTdsAZDJvvaD",
  "key40": "27ogcMBBdXFqqz3kim2H9miuChB6imgpWhq1t9gAKyQecZ6mHMK1BxRy6cR3uueMkx5aCfhgps2D1mt51WC4cwfH",
  "key41": "KASosB1NRNxfiFtswaGkCKvnHSLfSQD3skT1BGD3tw2qgeu3v3iwxpb5u9mTVuAQz9MpjXqToCgwMM9ATDdMcZt",
  "key42": "3Lv1aYbxtTGk9c6sABk4ktbckkWgB6sW4ERYrBEvaSDPrTL2p9KqYc7EvuPGVjWoeXptuv3fjNZNBDV9w2kQNJyN",
  "key43": "5wmbU1rw6uTX1TD59cZFncEp6snDkQypcyKeyNgvhA3D9RZujrkofghsR8NLZz2bGGkDsqiquwnGBddBxdCuGKDG",
  "key44": "5dPQfXyTnAGHfdjgWxSNbzyNnFVtiHtoQqjb5Wjt7rNdWyRmCCCDTm6SWppR5KXedfxrGgU4jfPM4UdimK7V5oY4",
  "key45": "2tShCUngh6KkZ15EG2krjUFFSi24pxgeca5nYQ9SVt8xQQcu4WDdu4FeQ7Q2CPn1xgxUnw4qZYPgzs1ksmp9yqNx"
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
