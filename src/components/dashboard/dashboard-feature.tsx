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
    "BWUjixjZHz7Q4AdBAQ9t1CWyni1gTonYvyoRAJS5n6Qi1u4cjVbQ7PVWCpKbwoX5rvCBaiHA3aq7xZgZtXMEyQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "giNQRRUtheW72bxxpp8vJkGAkw7QjecvACcCPbP8BWpvd9JNvY85HF2gzizGeqe1uC3qmw55X5hFd3UTvXdKuww",
  "key1": "5G3Mk2aga8s4uuobNkVQbqkYo89FzrYocvXNb7BTMWUq1nF1LfqPAFeZD7e3zUfD9QY4aoLCyzGZjDLoikUw4okt",
  "key2": "2FcqiQTY89ApRoUVn2Kr511ZCTvYDhkU2sFeCuPaScQZbjPssWKqSAn5Y7ZLrUsKC5Lkg6RizgPvCpMRmJCuudx8",
  "key3": "4FwMyAAMiSiYXJyW9RVSJouUPJFse8b74k9fArciEGYnmqCM2QyhRQwja8avSQsr1mrXBovXeoUADFm3QWFX79iG",
  "key4": "5HGaP1SPhLhmoTZXPUHmcQuSVMau5kNdsD6jwxZuLx1EJpFiNEnA1rW8YLXmR7WDnez8JQRLL5Bq1U3ukp8kRSw2",
  "key5": "4Ce9f5Ty6Cv17Dd9yGY7FLjoLNyGdNKkrsQEFWTkuzM62uAjbgryWF2LLAB7BENuM3Hb9n2KyLifHvj6Wz1w863V",
  "key6": "XT6YCJwC6quXTL58MT4PTbD4Wym4pYY9NHDPVZYwES77FwfK9cYJHRW6NhKRJiyU54n1bJ5VTPquX6iHMBycAJY",
  "key7": "2mEULachKknjz52ZVbX1pK9eTYycq8BhXVQn1mAZRQ7kFfyEdpoYgDjD5vV2WbU3UmSzZMCYFkwAs8c7thfYGnqW",
  "key8": "2nwoepDpS87n1nngU8pFBdXrLMQVbS4cSGby9LTHQJX3WUqnDpFkna67HAFy3kjK9kQeKZqJvBTXBnjpGbtw7mF2",
  "key9": "4M27QVpm8tgdv9tvQAFmhT2wXyjVVSzspFzogWVttdoJK16kSxPrGHo6Ev79u8bwpUBweGgaX7nbKiUxyD14d4KA",
  "key10": "wRdNa4SaeZbj6mgDQPrsGjxMVGGUXrr2MSHJLxhUHi4SJpfXBWRUB52v9TPpZUPG5jQf85oJQAunRuAN4GiNPk5",
  "key11": "3Ty3bEUrBTqfcaMuHUKohs9xzbh36XBScxPd6kJYWN8hQBWPVWC5HxFTcjKNh5CTAtYUch5Z5b5eXGS6wYnUYD9m",
  "key12": "287q2Avi1t1QbNhNaqb8iqT7SnWTxu6RQd7PJKF4uCQbSLWfKab7V5unnMGC6nJYTTdXhL6FKXNw3RiUHRZ1Syfk",
  "key13": "4FMQBSNnctbiV6kM68aEaydFMMsi15QnfNi6VAJ1R3m9bBtkBNR33dbRyysQPpQpeUUrJfNks86BBSE5XzRB4fED",
  "key14": "3FxMGteNAuFT7ZAX2oLZvZtSZdkEHcdqDfNJH7aTfAnSAT3LggaMGsaWqkreduHU14Zau4ZefJFQiaQHomr1y5cz",
  "key15": "2yD5ep7ZML718Jwb2XpS5wtS58PEPhC1mSs8JcijS5bMzfQzwNqt2tucfMQYzR8aRK3cppA8JZ7VPD4QAginpMwX",
  "key16": "K3ojxf2TEPofrHZqKq5SXvVXiUNFQpCsQB8ZspDcyjyswLRVRxXDVaGyhwvSKUDG3dTVeG6YHEVtRVdWg9h9Y5v",
  "key17": "3nwvr2HbNiFcBaWQo5Do1kCPMmUiLBZnv7ncuTMwhCdZ5JEzb3txnC6ujtsFRsKsqDPWvDLFjuSpN8bKPAiLfNsj",
  "key18": "4cxrR2fWtPD6zR3XVL3iHb2HZUrqyqnx5pFPCDZT8CG6yu3Dqopg6s3D7pmW5Wt2gD5PC2C5iUruRjHZujvrpXVo",
  "key19": "4dQH97nDvP7CQW24R3rJmKwRptGT5duR4RqytLUbYxSP2NsUxEEndi1nQ4dUhDemPGRHoK9ACXyz1R5TmbQtNMog",
  "key20": "4cDsQvrU9nHmmqiKVpY1k2AxjjTzPQQ4MBoXwDM6kw6Gmvp14nsKEAT9ggowg1X5tzTsqzF2VBgYuaLiu6RdokaK",
  "key21": "3xCBvzgvCnspf62mGRuwDWWEtAHDxxSeFqEL7Q3QCGmKcfqYQRBKXM9KFMxc8Zvax8ggXGZg2p4WDg6uajvJPmau",
  "key22": "2LpUiuoxEY5XEa5cjB4PcnEZao9kp8nrmwcyGw5x5y2WieJNMRakcgw7vq4d9KuGuqcpgABomH8StMTMoansb3F7",
  "key23": "5J1VPBSEyXzDz17fK1FGusJq9UQFNzeieNcZfNvhxiFz9nbE6tEoVLJUG28L6mjxHNPT3ryMXB5tq921ALGgxEPu",
  "key24": "5GAu6jtt5mpwDT1zVm9yrBgAWT3KxXLs7mLDXqdFquuw25g8XswFsAtWg8ZcKNMeRT34txX1uuf7R8ARNUS8XKeK",
  "key25": "r588Vjn7mzJKqgdXpmwtsJZDBE3LhH3vWEgVzztwGyak8gnCowaqW1yyuULYHMHHiN3ABsyEk882zvBAqor82p2",
  "key26": "6Vs47C3s9bhB2DnjkcTdaEhrhYYBcpfqgmZqQ9X2fP3iz5C4cqFbaWtnAUtJxxM7aMzF9eHNwvxWiZ9MEmtAGro",
  "key27": "5LS2G5EKVrubQJRnr3xMxMrvfieKCogMi2eutpKgg7xhbuqLj1ytqzSWXGgyUdxrhSUVgkkzE4dWvDJqtXHnxrbx",
  "key28": "4EqLQgHEzQgH2iZKdJHyT93cvkJ8QP7zLe6ZGQRSqNZVABjuyUXfJ1aKwcvsrBkvDaxx2GF714Qoqr5uCn3Ychh7"
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
