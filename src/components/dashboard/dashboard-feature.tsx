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
    "3bcdj7oMCbCsGPpcrbvFd8BbfsnfTfx2HfwmxigJhv4KTGmvEu2EtuBxfBLG8JrRyg4pf22BFmbEnG16Tf5d4xGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WeVy6AF2k8634S27ytx8XnKpCLjWyoMboMsbJV5FWY6rLs5exzZW8QQ75tgDKAE3iR9GmvRZu3XeEMVPHeX2Rdn",
  "key1": "3JF2pHFS7zyA8cvYhcfLHXgeHZq4mWwmNjiX14q1Rq3rSzxMd2JEf7yf2F665RBMGEYP3y2Cuqzej332VFcnxgwp",
  "key2": "43ACBSv4owNBrML8aMoEScVnsYzojWGhXqtJTNDtmnymLqiks8F154DnbXMkCd81SD8tuTrnKaA3BADTVogWu3d3",
  "key3": "4hxU3gS6puaBXzut3vcpq7VgcmfqXTUnQBu51qNyNF3SRvQKAZWorJBHaDiYKUJWidYXR7xntvD3hXmk6Z3rXMnV",
  "key4": "5jz3dDpm2MrA15EZf8HYvu5k2HD995ZeECuTGqSEsv2xTn8eVE6dYUyL8mZFeB6mvk5eHmhDzeDv2EetYzzK6dCB",
  "key5": "5FrDGkmmWsoBoHf23a2fctg18zv1futNPYjZV1xWn1v9Pte1kFUAMs4ngqR3495gk7iMjQjBcko5DKvQd9dWTYCZ",
  "key6": "4hBjNAmbnatK6Wb6t85tUrEMFiD7vmr16fuKHsv3Ncx2BBmXA4Q2rtE7DWJzqg7npKSDZ9s1b9CsUy2hnwJymEKg",
  "key7": "5LYa3dBgdUbcMgGr2yv9LyWQJBs3j4geMjBs57ZoLuVZim6n4EJDjoc1fKvmRNzhWNBho3s9pguK9uP7AiXKR88q",
  "key8": "3bJjZScTipPRagKnHiX8m11eJispXs5X15NduphzAnjrohoEC9Tz5k3xdouGXbNcnBbG21gowkd5wqGB5xHZq7mS",
  "key9": "2i9fSe6GnLk6tm7DZNBWE1Skz1BKC4greiEtyrQBsH1KhwBo6YnJuX7njfZZNwNmX8XB7ZjQWmQ45d6QjktDpxk8",
  "key10": "4XQzzFVwAQkA7MJXKAqPWHokP4ecdGBUXqzeNE8o222dcZivogXPS9pCfWvBEVVxTjvkfvTWRJARDRKQF7cZkcZe",
  "key11": "2JisNpHJmddkHHnqRNQcDgNQWc6NMTL35ELzSoJXLCGtrDVwFwgJ7i51kikbaBMbdbCTYMrcntFwDf3eCuxETxXH",
  "key12": "2qUfoEnzq8PSbYPctR2t7YaYzudmAGEXZuDnrtV2hgXdNeHrya1AmFLufHLX1zyNfFK1Zsc7yU9PL28342jaAyeQ",
  "key13": "FB5xVS2qieXu4YfCMGHDq5jR8EnUbdUFCiTZddbCPf2RJEvrSbTQGLi3xmn3xc6Ti5KzPitegHiQKNfvDfr7tT5",
  "key14": "2Poep2rFrb5B93rwHt74cXu3mDdeNGLeR5uGCth5uV1F2poECrkEXNfR6P4ApHoDZn1DuCkkSJcm7Pc5pFSF5TXv",
  "key15": "2DVb9s2aXDbnaKYNm1wf52N6watyYtcZ6WJqmWQgfdrFHFoLpsiCtS6jvgBXv1BwL7UYXHSxC6gxLi6NbqhW8CX7",
  "key16": "26vUturXi1F4VtLfdbxfKaxaoRikVSemR631TN14mVUDG2G19HXi77gjX4VvLLQyGnF7Di8wtJx9GJpaG6XBggSL",
  "key17": "xQNXfQxtaBAruCKCALY45etM9rzL6tSWwkqRi5GGB4cTXbBpErQ1qiCb65ViNYnUMqZ6puom18ySeRkRgPpeM9N",
  "key18": "3fAQM5LbucCC2H63HrtgjnCXYtNDGHDVFC6a1PhUfv2GVoYUNhigMnnK4eDn425HhtZcjU7jVNgaaRLFrhgakgzP",
  "key19": "5Gv329bSuoKJEamN5s1uXxi4RmHnymmgAvnTgJNC7PDiJuS6XrjE4Bx9nirW9oRiQDrQa48BWGjjbrAFDLbRd9vB",
  "key20": "1hx6bnkxbGPHPe1HmKaQcGBzMsDWZppcVudx43LFMrHfNEtbNjHroQkga3bN1484v8GQRnX9iMGQksYFstKjZ33",
  "key21": "4iXdANTxUZetULrVnZTheZwGYHpwBWsNiUNPuhG781hAGJWWk2on18ASBT5bnWFji4CiffBUmn8svrGT42rXv47R",
  "key22": "3ByMuegvcDMRBj1f4wzWrZB28aAa1QqBymQuKv45tgq2EohCdKsUaUqwshr9C8ogUP4b3tMZDTXg7A4uhnEBFzBs",
  "key23": "WxEUU7CwBktARuT1zandXeWJSyXEctwUGDhXmVVug9d7mWKZvXtEK6rPqNL19Z6QDGheb4qBMuu3NG5Bt9ecQcY",
  "key24": "3A1WfCULcHLr9YBbNjo8hHDe1FKg17CGY2u59rRa1nZoPwss1FRUB6zAUcKL7T39cWmAHNn6ArJHJJaEH8NURcUf",
  "key25": "21yZ1VzZewnE9F2YnVnQYSP4yLXv8WCj7BZKkEGM661AKXMsnCZxMqKzcb7f7sYJdwfQRZrH8iTvMxytq3wNLBiA",
  "key26": "4D8xKfVoNzUBKTD2VNE1CKCdtdGm1A3GEgytQkZDA4N8Cnrb96AtiHM2f9SyL1BdTBvYCAq5qGeE8o3C48yc6EQZ",
  "key27": "4b99kWLNTCEzm47ev1vnf39paSHvRiepyBHCotp8ocSJSqJGVvAsSAEGdfZV98ufo1X4Qk5W7jQKuj9BZossa4ZM",
  "key28": "2pXhjim8QPiQW1pWw9bEKQ8Hs3aq8k6YUHkX3ttjYP7zFnfqnXC73S4SYKe6ADYfzjcszWpX39YRRgUGViaE3quq",
  "key29": "2PQRW6hnGEnazFNPQSSFC4zi61fzygamFKGGebeVMfQ7QNnCg3p2hxZqhuRdUjTdfkwa6Lqm1JQZwi6izpA2NFkV",
  "key30": "3SduKkGDVDJp525VkdJaJYED12mtkev7TQqiYdkfEGuJ63TeJGUZn7kBGg8diMCTkNEfL33uVQDkj8noeMdc8Z5F",
  "key31": "57XzfEprmmnN2wwJHXdwyC9F6s144SJj6X478xxApkjnd9mwekX4ub6BdH7r22wKZ6oCSD16y8rq8cgCtrFxs7NE",
  "key32": "5crriTxwBh6DHs1DUJZX9TtywJ2zpmucjwutMkkcte554M8LSk8PzY2EYVwyYgZKwwEQDFyqZZxPyTM5f716pqYh",
  "key33": "5woyT2QVvNwktpYUgD9gb8k7ty9jqBwsGcPf8kUUq3wGU5P4epo8Uu4WYseRQcAX8kLVwFLgHC4Jv9oaMQcegEoE",
  "key34": "m62KLL3ZFXfA67YkUZFqGrGKtNXSX7rGHsgDKUkAkQZLBPKVQ9tdJpraPSDVhs9A7ZegNpaoYxLWD92q2yUSNz7",
  "key35": "3Cnvb3hpPtBwfMm8t5BySFAKumfVGY1UM5SJCjKPMpZPAkNihdUgrwdiTgTmXvB2gdeCLQdLWe2KAC6fCvSK8DYC",
  "key36": "4LTxhbDr4uhS8fXAAf75VHBETAFCTLNhoAXjS1fT4QWMtZqcgQv4KkapbhA4dKpjrpNCpHResJzSfmdukMf7zajA",
  "key37": "3KLgc6AEPDdXbHzNTiPbcmnK7E2ZaifvpjAxLS2qQcn4SR2QzdtqQ2XHRUVkspDYqYJ4qecLyawHcsCzz72NvFBC",
  "key38": "4U1thWDn4zbsbhSdBvj9WQbvFjCZTcfW8sziW6ebNgUcvzc2ooPdrbcNoGf9q749zJbtUZ9d48gDmcwHgGSTkCJ4",
  "key39": "2vtLu3Xf9iNdhh9awHZT5swVgf2Wx7YBL3QScynpuJijHy49Yr7rYP4Pmk3sA57hvFAijwWhcgLYu1PAPc6ngRvC",
  "key40": "3LCURadQtWTFub8JE9V6KecMJ6PbVbpBLtzg5nqtyKQffNLgEBGxxdxeH2VhmiWFVkhjvnyhxa7wSZ5Co6RZuBe8",
  "key41": "26u19vckq4iADbCQGqP8WwaxDivCVZgdd9WqSEtR6EkyXW4CSN6d84WGMvuLhS49Miv7Ji5hbQr7n24hnDJZPSjC"
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
