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
    "2j2XVJjAzMwaDNmBjAphakrVrWsEfWHhucSHrBwF7uSm2jeLQ2dPPbaum9u9EoaKcZF6d4pi86tFM3cDXjzD9VpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SzkyyhnEt8rPnFpZ1Wam7JxNeXfL9mWXEEg3kgXwscUNcAd61wndWt1nHwgyjRK2wGj17ASahoNUpq9UQbmoZZ",
  "key1": "3uW2Js5VpaZVEWxcjb97q4GUFuJUFXJ7hczrsbqS7LgxKS7LHFt9dfacxD6a9XTiCRsc61sdCV9tpiX9euZByUQg",
  "key2": "2qtqunQuYLWtqhPbCdsY1yW6gnwAvkFaE8JBjmbNaPcY6FjEwcWLwP643eX8Qh2Fo4WFbWN33FVXSQZx1hbrRkLT",
  "key3": "4RbnSXBZJFLjGHk1BagALt3VdvvXjvZQT4XHsr3cAZdJVU4UWUa1LLSr2aEkQhL5PhZGtjcm4suukdrQSKPMZUTb",
  "key4": "3SgcUzHZincHuhS2nggg1YktbntS2W6FALgZjXnPtMRgBRGm8SBcW5nJXgjpcGWJzTKmjB6Hpmeu8nUr57uV58Vn",
  "key5": "7eQXXqxwC1wNZZVwkogfuXxXTy3vR1cTvo3Q4YHrKZhx3szohyUzVFwxwS6hY5FDdkiu6uWUdhDRkk78UR6tyke",
  "key6": "3xsuXkPn7Vc4uuRsTFMrDwX7uGqUPrbokQSeLDV92PEoZEXQs2cX6U7GXim4MUMFUD3o3KuddyuoLcrU9LkhnY6d",
  "key7": "1g2fMisH2XUCxeEhWASSn6vXLvxJWg2XkJanPdLpxYJuW93QsgzPJ6oWPdSSbddDNwSkx7HJ6xikxwb38Js2i4b",
  "key8": "tdrMeohAZXFUXs9LoeRi7WQMC8p69HeAUDzDDJsjSuA2jJNypztLxxxRjyb9coY5XdMNwocrMcXxcVJvaSUR3PF",
  "key9": "zh4vJKqDyqtKRuHjXfrgcFTnmGyQcjSFJBQWxEu7cD68df2haeg53ApkjoqK6qsbRb9m9pQH9vHjFTDZiCYDEMe",
  "key10": "RuzwmGNyvCX2j43Ujwy6DFN2k4NthPnhXv4MeH7JAHxjnab6KjNiFdggXf3SVoUQCRQh6wzXYupwjDhEish1cXA",
  "key11": "2BRryQQxTfTu5zt7uG1aar2xp6qqmHmQFeLUcvZ3Yy8hWihCZQXtiy9EpedSWNFFa23k1yQG8M3EAFvdQ5o9DtBf",
  "key12": "5CYEYehygvHqgVsRK1jTsBdk83ruXdVTmbC5e9xPj39B9ejPuu4paZ9a8miE1WEjqf7AakZqsc9bA1enaRd72hYm",
  "key13": "XcHKw2nLJSWYDm8EiDivSnijeSocKoRdr8udrNR46jgy6sLK41mjmgYeY69WbzME1RRF9CKCyMKec8wKV5k9Gxc",
  "key14": "5SHYaUDsMoqtb2xzdqPDYficUBME8odKL9tfYkjvsGS2JUxW8vskjfMpo1BxrvRQf4J98xcVJEWRK81ZajXRnK4D",
  "key15": "2Qv1qLVwWmV9CG6q8pdw5BV6ZoMesHNkz9V6voZB58V2Mk6ZxystzBxPz1XUVWrep1j7jztVJMwDuQQdfLRQmsS9",
  "key16": "xq3EmwRkbRFjrke3bStgEx8FGhkE7gGaG6XRK3EoZr4QSrCrUv1LBPCHL1n5K99rAEyviN7S32Anq7op7GCjFHh",
  "key17": "4JqMCFtXhMdx3Kv6UhWkNUrXZ8SSMiCNJjM5sJPgFSfmxWLwQx7ZfLT5Ri3SWumFNebbYN4AKPBvWn9aiZefXJt2",
  "key18": "3fSmPaMvU5iVaAG3yeXi5WtixCi5JaDNK5pZwS1eLnPH6Qc1RTdY3MnucGnUk5pF3vsdMYtNXeBj7FL2DaS8h7BK",
  "key19": "3kyKiUaZ5rnQEKurzsF3nCY5y7Q2zV5LRfjdhnmy98eBKzY2kMUcEEFkrfJki6T9DW7jHbEubcF2w12BtDUEmXfN",
  "key20": "4zPEDL9JUDBBiqoBAqmhFoVckgiCM4GryHPkwtrJRvB196XQZtsmoMLXmLHfzzX5XtixKLZvifsetKzrFhBKSiWa",
  "key21": "2S4fcgwk2AwmbUo2heopFGqhrhqvXbKKP2pfqRuqLVxzYN6DdeNeUUiJ7Py4EGHcJc9MhRK7jzRmE7CFMaXQhVvi",
  "key22": "4VEJSu1rsNFHgEXanhskPQEgnvyzKegNh2EKfJicyjBJYuHxbrXpkT8n42xUNyuQyU43C3qBmxrpPiRjwgxnizNh",
  "key23": "7yJxDswk99QaEu3Zd2XufBd4u5L4v3k3U5DXFkZG91X4wVsCwtVRR7QbGtTHppcPgFPDoNN9VRCA5jMntJqbaxm",
  "key24": "29dRwYmV2QNAGg1xa3fSkginiFccoPy16nTYhRvQ7VQ7ydN2cyvSuCCTMSnn69rLiginPGLgzkDKE7SpGDPuxvDt",
  "key25": "49tfKjEMyiHgSt4WEVrCSAfncPBuAgE2iJq7aySCZ5hbfzu4RXAkksxJP2HQzc1MPeDkSJM8gYtPDrArhsrtiWvf",
  "key26": "585TrdvwV5jXVTRre3vrcwFkie1Auo8iJ9xC3tHSR8er2aH8H6HMQCPLzaibcCM1RwCV9YU77Ktn2Kf9JW2L2RWM",
  "key27": "X5JeZAabCA2aDAjBmAGoxVM9PjdqcKRh3QsJH2AiPaGiZQzmjuXGuNbvRvwt7VHZtVUmNc1tDgdHrrwhMJFhsE1",
  "key28": "TfG4M6hf4eTWNiM2RzP3A3mZ9fha8HqFSXbotkryiK4JbpGzD4YhukYm7NTmGWmmJBx6QkizdFZvfWDN1TrUoma",
  "key29": "59VS2mG6iKmcGgtJHq62ithp5SAqLAkAu2MoJzAbN9Wdq8dQAnJjfLKX6wi5rkqXrbPpNQYDfiAfGbpUWCQqN7YW",
  "key30": "55hQM5kfrwtdBZLjghiRZo7dEapNo6K95ua1s1yLaJUAMBYJAJeKrPUe7zTccBhZ8TXKPV3ryeTR66KbREXuDpPg",
  "key31": "5T1pMpyyeziL6iMWHk6MYJgf1BAdWa2RUS4touaxuUbP5rSwCWQSZRnB8pdBXiCqgrbfcWciGAxWA5STQzRWxy5b",
  "key32": "3SYycfg4Sv4meBCMQMNYDKLy2JZkgXX1b9YvopBFeEM9VpPJAcgqjJUxH34L3qKCemFbUo4B5iPnZ9NnrxErhQBY",
  "key33": "StykcAgEeJwF1XUWTQ6R73piq3jhVWJhwe6UhArPk99Luc5ibUCgVop5MbQk6BgqsMPkL45B6mwW9cdfiGXHGzY",
  "key34": "4zQB57nwZDJd2bb84fsTiteBZaF92fi9wRXFRDozFow77NVJYqUfZiPbUkBaq5MWdQkeqbUtLFSpQgFDkJUXSP9p"
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
