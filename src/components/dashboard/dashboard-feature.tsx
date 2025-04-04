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
    "3GvxdPYLZLFEkV6LuEegssSLbozQrozeM6nHUYJ8H1FQJkaWjJwnnyCBmyCJ4f1Nj1S9ZjzmoBThiP4toG7Wj1Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNoqMRR4B1jQbrz2aVbB3XJi1Vg7U6M8ZEo6CArmy44S2NJsDwnfT7yosR9Gk5fpZ8KGhCrS14BajCpFdJfmUt7",
  "key1": "RtMkm23n2np9fDpQoPdjhiLZfPcebq86nPvx539UYnivvnsDdV9Qn5Rem5HNgrz4A5YDwiWTLYavRExwYoj6biR",
  "key2": "n8ABqzcWRppFSz6Dvys39DS8rEQDvc8aQfoHiAa4WHSbm7UdjNDYDmaWFDWKzuV5xGMhJfFKCaZsEjdvXhpUY1b",
  "key3": "63dbWTUmkCEfWt1Dv6TBsj8sWbshrWFagHAnJ1CGkLNP4bGsEs5qbJiGQaUWBwxSF7RfSw6BzWJyWWsAeTqMAqPj",
  "key4": "2j8ViAfU8JLiqz9mM3bGgdSxW4oWKu2bhdoACuN1C3KasTvwrzJo4JZqW16eKgn6SUzR21Wg6z5HcDe7t28pq3ud",
  "key5": "2FWFWfMW7ukTR6cpZSGzJ89YXq7M74VcQauReCwmW55fCb44bNn1yW7mQn39hj9REz7uvehZMUdS3wpFiz4srx38",
  "key6": "hpXSVphHpz29dZzBgG7cLf9wzUgjbZrWiNmjmsiCr53XPRBHqrtPid4qEWBKuoweXo3AoS58jGpV253LEK5UTgp",
  "key7": "rs6t6p818VaoyQyBEqJdnpSoxb8JDAbBAqePs478VAsJkLJjPqP7zcLJ8QXNc6eCtng1Bj4uRNyQA1P1iZQHEXb",
  "key8": "594zVUzz2Rgd3F4udsfsn4pbyxreAHJfFigzKauBuw3BoLrvpidjBkcaSoz8mj4AYsYyPJrinbos9XLxmLWFnx39",
  "key9": "3JoggjsQMdQfziKrpuy9z4C9CX8HtPRvYYxB1dLDVw7RLcCaNiDiXSrzDZHvdcBheD4uahtLrkEMeB3QY2tLsX6q",
  "key10": "3mdQzR2KQZGLnP7nkRU8CFBPciaGiMRhqzH8JtJivuc1Pz446idSrhFErcAJzynPByPqrWpoJSpzYWLqSd6Nr4Qr",
  "key11": "55iH28jiaVhzFuJXVxipWspo8Pj8zqcAMo3hzbWreWE36ihJzc1crGL3hL8GKsNav9dH56at6fWMN9mGwzaEBHkY",
  "key12": "5Lph9ohRDUWzxMjLcyMVAJ1afincRsJUU8nWFu7TsUszFoHMzZejgDMgv8bqLUTRDpaeXztC61ntE8BqTz1XXA1M",
  "key13": "KR6p87ZUracfdFtHm32D9UZZN3yYMGiNUkcfTRNKi89skEFVptwhcL7GH9douSgZXJqV8iaayrJDud1pEF9MKNK",
  "key14": "5KJtiEp6ML53Gprq31NXGhPSB4wQo2rDoKRZFy9am6Kcr9wAECVCdNGxA8PVWzbsYLocU8T4et34gr7HsZjFX8mV",
  "key15": "3Fd9f8Fm5gxVbL24spmqUrMS3cjKgqfG6ASV31rWPwe2AQk5Hx69yBJVVFbhcGX8t1baF55DFSedTDLMrsP48iy2",
  "key16": "2A6cHTCdXxDn5rRzBbpMQmy1xjw1DyNfBBegNjQYfrBfmpnmLogyLGJVzBG58JigTocHjZ4a5SFgF5wKuUmVZfEg",
  "key17": "5P5xEnKoE4nxmtHfkqBPua8MzguQM2aPvAoZG5gQPZgGHXAVvD4nuMUe7LnaRYkPgnpn7jETeZjaPKk3pkMc4pfU",
  "key18": "5f9qUTEUQ4TwuihB6yV9LG4DaYWPcXkhViMNrjvtDB8aPawP7DEb35UtH4NL1PsdDUxqGyqoxSJhVQHgrGBwFVyt",
  "key19": "2o1eFeJ4goiGrtsHKdG5tvWCSDpTRn5o6cVbc4NsGKdXrY2DyiZnBz9NruQE64TKqVowtmN8cvKSknkupKMKVmZS",
  "key20": "2pxz52zdGbpMvHVYqXWhVtzNWXEYaDRboFkcYCTevePc3vWg1Dd2MFnUu5U27DvF9fn7q1z2gT5QYRzV85aNweRg",
  "key21": "4ksMPWYANvdF9vMBQsGhN3WzAF3i64pMecM3adQKStKfLzRcPpL2wf7BXCs17GsLUCPwzgrcFuC8sBJQzgnTZrrm",
  "key22": "4BWztsuaeMP9aJWBKKYJdapxsSVeJXEynHf7Nej5L8tMUCEiZZHgbTbeQ3No7VviBpgUqu5MZHKdexUkMDJAuJ1C",
  "key23": "58WpFK4CUNDF4Qshs8Y7fBzLtCXhBdzhtcQAnE8PCiJK16sBEbrHcD3f7KtwRtw7kWKQTLwdJFWxDtvE8oszdqaS",
  "key24": "5vsFpQ5HZnquwzhDyyDynyx97RShA4Zxsx1yXXxuEAeehUzAKiRwEoACApq7D5T18y2SgTE9vgdsuA4F54HFcTGC",
  "key25": "d4dhYTfNZBcQukNheBuiPMTpZqb6BVRqRPdh5KwBGbVK7p3YUE5B1jGexm2PyVhDiUWx5NViMQCwGSpezefwznd",
  "key26": "4uDM3pzTLJPpaFadWMW56kwkFP4HzGfJZ57aMVgHiA5AvSfgzDTStryayZB46m5SyxmgzrcT3A3zCRjYCY5uWNJJ",
  "key27": "5rYHHN8xYS5Ptqx7E9nbShedgePiAzBE36aDJDMmS9jnDEmMUaDryzg2sjGn6CRM5ULs9bDMXi8wm4T538wskV2J",
  "key28": "5ekryY5TiPqMGUCNqLdjMUQnGpnckabYo9SbGPqxzo1ye9StrrjHUJ3iCeKLKohcCuFBJ7NbFG9uAExfBmVbYUot",
  "key29": "3MLSLjqEdTVfmt55BYTygBNsn5cqudzAgQKWKW6Rf4aJfroqD96N3RCNceEeqHoa9g39LN5JpBpjW8VrFBF9tjWm",
  "key30": "5DMfwhPt5x1oi4ZrUF92X2vJveCSgGqSbmrWmCiRQdNqxiEqgu3DUZdbj9cwerWUJboXjkzwiRxVBU3z1q14gVrL",
  "key31": "3jE2WrUUYRJnNy9pQNS1myU2yLwTHy72kAQ9iV9VuV1PtXTKqfEkrV6ziw1BmVFUU38hP5CAjdFmrSR3pnrdPy6b",
  "key32": "2DKT1uz8AAPjRVfHpRuWSqAJLfmLShbCoXvT2Fn1ztpg2qn9RHv8ZD1o7jkswmDQcDa7JA4RGEikb7KSUhKZYs9S",
  "key33": "2s28pZyaUZ4aSzexWyq16X5AwjLwH6aqQfZwjsYNSy2JCnR3w1yHYhR1P1ov9MESJSm385Avieheb8mcPF1BugU2",
  "key34": "3Ee5VqELMEFnsZATrUihCTrv8k6MmHpCXappthEx8ucbH14nnufzuEj2RA6VUikiHuQrhapBFKeH3ZUYxSwcKrDp",
  "key35": "58capm8w2YxA3XDns5Gs3YsACivmdiG34u7k5fL5AFzhq6FyrgempfGiaGcDhRhZELWcHVCmPf5YEEAXAFM9BUkR",
  "key36": "27vZaHZBnEiGWD6mtmeAcNjHNMccEbRcCmDxZWrPVMrh7UtyUTarcdMa6iDB9XDy4Rppj9AAEy2ipDBP6hwH5y4p",
  "key37": "2XRiVw4NbidGmQzevy5DYtbSkf8jY6GYrZCikUDekwL9ZF9fBuU8EXbMMzQs69Jcy7zay6CGkcNmipD8h6uXiR3Q",
  "key38": "3hG1mXEnB7sWW9BPKTzw7qLYi6hoY28Cm9nDNeRpNTBg8ifeCV7aUpU4enyNUwVgyRjEkiVb8kmQ3VKjUMP1sYHF",
  "key39": "5Ytdbc47B1cUebkQRGVGy6woDttxs3EfUGRwHPtHwdxS6d3LXfgGzFRW61JedAnqeLfYEdh44KzGiWY4a2CpCWeW",
  "key40": "32fFGKrbH5WC1pyKSManHZv3ocx58FubGQUq8nT8LVeKfXTDmUXspqVsXrW3Nepkdx8qqP1Ndt49z1tmVdyM2NJL",
  "key41": "2cLzxABu4oaLAFnBCEXuGrXsFmhGwAahyhHogtEdtLVDF81m9brA1HhLBCasW6Tioupk2GGRKoDS4CuWEn9sQaT6",
  "key42": "KXf88jqoKTqrJobWng7dk4c8WTCZJr9eKyHoH34EQMg7fQYEaVefsuzeKuquwAz5s9vhmpYEhoiCuVqd8Ku5hPe",
  "key43": "9THzWCJS3gwV4kHSAdXFQRtHdnauBZQBMJB8gRK2xwKD9rPDwoUZjmdykMW98TvBCGEMcwMzWacTq59TWriCy7W",
  "key44": "78EDUgP9hQ2C99q6zQEkdCp15DCNEN2hpAqnaXGVeHUVnHowomhVudV8CBoXvdHDqEu8tjfkJ76ufSs916BLBKw",
  "key45": "MT5ixLiYH9T59HdnaqYJ9eW3BZFtUHF9wea1fJjpotj97NXd7m39BfTM8bZpjHzJc7b5V4KLNeP3iUZweUXqooe",
  "key46": "3jNZtDcwpuWQyFf8ZaT7AkVqcmvCNK69RTsRziJ2qkP7djWzy56YYwzzEvjsJpZuotiJEsgq3MwmPLKArHktCR1k",
  "key47": "2Ga61aUHpTN9WsXaDeE9vDQy9sdX6rh6kawJMxN4X3Ni5bDq8mLzaT76q9PY4DQcLBTJHiZJ2hoehXr2zJN1phry",
  "key48": "2V8rcpT2jJfNWjwSz9McFrtjDyFcD1Wtyshf2sFguEeyuaxjjvhsYMthxoFBT6AR3X8idFSwoGdHkcv44uL9vfsr",
  "key49": "4HJhF9pQcyqay7L8oyxsjB7QsopsmnBiSrk6Dr5s5gZc5RYXnGNWiccVvN8wystWSKHFYEBbVuUB72uvnZLx7cHM"
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
