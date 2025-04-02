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
    "3fKerzky2tTSEHmcB7x9osVaasMFoRvpUCyfFnktzwVYELBWfw2bahVyFueFnzJxiryPzsBX5EGNREB2SCmnxstc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XaJrxw4VnnrYVMN76TQ7S7FW3cdtxSS7XcC7e2ARLv93YK2tKSyFsjbRoVr4gGY3Cr8zYdKuvnvtzQdFJZsoE2X",
  "key1": "5LACMZoFFEUty6LoDnF6MEHVPu53U2gWXfmCu5MwR98qpnU913mKEBwFaFi9vjEvReJve5QrUySE1EwG4dxiY4Tn",
  "key2": "3WXfcqerpbH5YoHh1mviySUCfDNMd6T2rTokvTAjBhzSjckDHYBfTbSavn17r1goVGx88XXBe9L7RPLtbGoyPx2B",
  "key3": "iRgvvHLFBJAmniTM46YzJfDFbmjX4Y5aNhQMfuEgYosKjcJ5ZhNRktkHvztFgxy6QUedFMdPntKrooVcBfvqGCx",
  "key4": "4w4AHcdbM39FKhtd1fXxPywi9Nj6pEdqXGrqqSjUKZe6RcHhHW6Ndc1yTGt9LJ6ZVoop9fMNdWEZsNcfSs61eQRF",
  "key5": "26SKoy7CDxXKAF3Ph5US1od5V1HoyMHhuurtUYYm2PKU28yqxedi4Dzeic2WUJDBxsoL6oDZVxP76giEdS43QShk",
  "key6": "5BSBUh8yzCUXvFXnBkGZ7wgU5KWjdC3pLvyEt8hCCtRwvxC3kmNxHLN8eCEVvxXgWugDqGHFJZCiyxFLba2qg2jE",
  "key7": "4pMsj3Tti8biuB7aucjKnDQD4o1YDgzd8Qw4p3YB6t4XFLJXYZ5mAspe5gW1axwBjgTMDvJQXNCndCt5aQeR5VoA",
  "key8": "4bUr6F9EpFheprRxZEHNcDUanA7WZSH4yPVsbiQ2WcVdxMt2xYGn8jn5dQZmAKsL2jTqKjAu8qLZ15tUrF5XNX3e",
  "key9": "5YYqgY1HpXEsE7Gb3HPRLVMWPX3fEMwh6w7PM8tjmt6JkQKfTZWqErLALAmsqDBGhRpgvAZAAK5xkgQaPhyG85dz",
  "key10": "XBcB2ap6bueuhkyqLUGc5aRvijtUZJjWJrRLTUM7zxnPDBhUm2x2FoWF2Pv1fyEaNzCuUJk6MjX93bEnMy8EMa4",
  "key11": "2LWMRj7nzaqyzjxBgZEyDZdtirs58oSRKwPE1GsUU28onTbMr4T5kVGnRSLRcYHH5JcFUr2ucgxyBnecB13sbivJ",
  "key12": "3GxG3gXeBJed3RVdN6Pnmcje5xBzHMnXqGsXfgBZsTTCaFymmY5cvLvoJU3mGMdSdQy3L4uXLY4qtBgahwAHXTME",
  "key13": "4mzbkTCmWGKH1akFa7sCGYRWTpZqtiGzzJMraXd1vGSuwopvAsc6PswSnht9rSrk2LPg9bEhYMBLD5ZuAbBhbYdQ",
  "key14": "btj2UCawHRKbkzSdYzwh9JQZia4a5Z35sBnTQGkj7B6abcYcoiJW4YhTBxrLqn2tmxRsFd1vuWwv1WEz85ms5bE",
  "key15": "5k9st14AY4aFxJUE5n1R9sjSrLTGWBrSgKgRG8a67QxhfYeGDciVsmRLQ5M4YLnh9yubg1x4B1DWeunXcqwkrGN7",
  "key16": "63vQcsMN9GvbMHNMqNvMk9P1Yg8xCvEd91niSbTqJg2CVJmTYpCHpDFNbnxcYxUzqizA7C1SNUtWfvtuw1Q4EzPw",
  "key17": "2MqACLFLGNSK4qEHtw1WQmYz3AGdkYqAoZKAPtfSBLBf4vDkFVhgmb6CjPP8w8CB9hfd7mVLGvjYYeAdFLvKbdRw",
  "key18": "2mCGH9TUenwJ9dpmZAX3n5R1Veoom2JEGft41Vwd6F3wHhQVGXqK1jLhuYBxDzMjVsur7Yc1HnYtSPdDkYR2N8ts",
  "key19": "5rvXpoeq1uaiXEEazYA7ioZzzg8ZT6JQdLMpG1pLZ7Mr8q41hP1djvsa46yFnFe8U1QXfo9uTrhdkndH4igjyyRn",
  "key20": "28xu7yTTSGf1aSJj2dDge5k9rpnViizGQwzq5AQBQay8VQ9rFxE79gsSApiv9hUhbvhynLo348kSWjMb1eBt4BQU",
  "key21": "24uijJpmnpLbFueRfjjVXpMuWeZFYVVJ2sbR24VDj1P4oHyA2b1DfgUs3qsbXbh3jA1srbN2pbtt94fk27cHJKNW",
  "key22": "xRLR3Hv99YLCRts4a7GDUvGxJ1ntAgrtptjwU5GAYaZEEt1W9nVwNSEsuSDQAcy9AzKHhvLJt3KJzeCiwD6XqW8",
  "key23": "2K8zDsTnQK7koZCyoJhAjmpJHQUTng2Tnt3ZH9PTJ9rwbTeMAUVvbkLJMP5FA61pgnCSamcCoh1nXSidGikxeNHG",
  "key24": "2cYxx3Y6dBTdLAkB8NyWhQwfm5Ycde9Bd8fygV6niGLnZA4TZRxJFrtBKQD5mY1V19RoJ9yuEn4xW3PuAgryNf3a",
  "key25": "64ZtvbztkbKa32UQZFHTyiURcFJVdhMYvwa6EFez7E3tCA2Wa2ygtsijwAffhbEb8iv2dq1sFy6dCLQjoD1rjsq6",
  "key26": "wM4MQGtXEzXkMELGPNfcLgvJ5khFArae2mwMiQtdyz6HJep8H8R432wJ48i8xjFcodiSNYSKpHMJdmVhobjR8Li",
  "key27": "2fgKBh7PqvfJcBAyHfpq3QSFGGyUGPDnb7qoTn9t427ceARVUKeuZRWQwAjJhnmgHje4pB3XXDvywGUQRp4MGxzy",
  "key28": "64TmNCEWxGFiydHZEk5HFtZJNBjwUzVyrMxdN7xC3dQFm4Gc9ehB3u14efaBHpTxr786hKWAkvea7dTHLCjADFnq",
  "key29": "Mx1sVeZ8RxQYnH8sBG2K1Jt13TKUJtT6URjhUBUX36ZEwbCASfoxwG5wHJtjPqpUoav5c5pywKXwAJwS4z4LH4x",
  "key30": "4Xc16epufd5xLqjwPi63iLp53UsqsBByTh8cWkF4FsC5tLwDc5zBkf2hokjwm9qMBq5zWVXekjB2e9MsoAzcWs1c",
  "key31": "65wbBXMBBn3makGd8Y3Ly7tM6XYp3ux4eDEtnS5mDJxUYRYiiN83s1Xxez15FQ38EzYyFHbeFUGHpXX4iEgKpe2N",
  "key32": "5g6R2KZmvZchJ3S1t7xDpqd9AgZRoN44x3uZRi3bLzffRsqFA92ZemjwBKtJVEgbHCrFfN3AdCfBCsLyixS4mJR7",
  "key33": "5jFFjC8hX8ZPgWrPk73ssc71KoQdQyfbyuJ3BqaRjPkjZGweRKCCR8JfnyCDNURU11qayTQLVSrQfLHTabMHCBr7",
  "key34": "3M4RfakhzN31fkn4cqKiVAwZeFDPWCpwHHW8bugvdnxeBf4cYPy1wocthfmM357dAKhoMNeYdoNpqwSC36gFfFug",
  "key35": "2j9LmvX25Ew9Dc4hSZc47w6W71QbqyHsqRLBDmQH7JmkHfWJ5LwSdEPiit8nb9tp97c7vBHY4oWBTbgCbHpNJPAJ",
  "key36": "4nPtXyhi68vw9NGcZS1qwS8VcDAav9CxkKQGakwyp6Zn3V6UFYj4haSSAzxiAAyhCnys7yYvRQxvRwcn5ouXEqCq",
  "key37": "5jEcbTieGVrXguKq9eS643T9SpknyG8mwrQQiSiPnP1DuZFiGnbTLrbo95pPZjxxZ3b7ptPe6CKdNEEtPtjTXkpB",
  "key38": "2oMCj9DEsaCq1caWcbA8jzUDYz16FioBaucRuSD1hYFJuwYLqDHvsgKr7YUAg8qtZkD9VDYFYsEYdZ25nDw3yGb9",
  "key39": "5vCHroa8vzR856UcgAputMJFAqiEcUcWZsHQ7E45MtLZ7PaMX8sNLWzAUewqcEx2pqv6eiqcRjPDxaPi3fYfVX1U",
  "key40": "2nEFzDYPNrUsdWYp2fQXdztVX8WgqD1QtGbe2VvsqkDMaW4f9tNVjwnTDoiP232qhTiuoEvMGg9c5QHdyT36Fygo",
  "key41": "3fsKayxDMsi1ZzhkPoc7GLHh5GTgFMQCk76v9KfpXoqtmRdjkjXaKHtkqyEyjqjjS78KNVsabn3ZkPBxDXHqH5qp",
  "key42": "2j8boQMPNp7LXXbSugBSsSTor5usG1WduaL5AUwTbrcJTbc9VqupGhRvoTBBhEwpzxvk1h6XjXKNmTgGPa8mgAiz",
  "key43": "N7ckZ9jatyibfAQ2wwbfrsDWswrh7r8EQENG93vAW4JnLgpT6REMvrzkTnB2JkszMMTTqPPgTLzJyt1Rhv6PzXN"
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
