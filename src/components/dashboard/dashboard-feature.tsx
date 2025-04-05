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
    "2E9KnP9pq5XkqqXxJFAWnxLEMQjLRsSgLFg2ovtuTCDTU12FU19fw14jxuS68dfDTnjFrKi5k92bRKowspJHXoFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atZKUMYRMQsEe6KKiXzpbznHBcpAkjNAx8Rk9cLkrGU9mcsy5Jgh351tNn5fPRLzxa29wmk56z6KKBwFSq5Rtx8",
  "key1": "Jtc6eEwvDNGqPXAiVR6CB3S73qr8MctAbyWdVMP6omqqSjEFZ4HVcU9UdPhorgi6Y6Bos98uKwqTWsPf7Ljwpak",
  "key2": "5qzVUecNy1Gh8PT9tNfQ7gAFPpgZTKtVAtrh5fdfkrsV4gjQJqczxnrHDBf1vM1dzfXV9WGuwGB6gdPijUsR6byP",
  "key3": "5mZFoDbVWkvdaVSfNbLg2cDEhBu54aHFU8sJFFP4SUJXrCk3hQrnnDXpzgQ1UBZZEqWxVTxR7CyuqWfoXusRPAUe",
  "key4": "UZdThaMxS3kDyZayV628b9rKg2RJtsaK9thvD7g7jPnn2iyyGi4iZBsLYD6ECUuf5Z9FKjE5GFMmMe7QkKtUZ6w",
  "key5": "4Kc8myTBy7Vj6uwhKq9kdap2wrCwNQoKK2ka38akPHcntQjkvUQj1SV9DGVCYQaDeL3XhpWqtDYFjDFSewEq4o4q",
  "key6": "37nsfAyJ6fJBQQeHHAJG9f7CzqPSmXgbLHeQLFoCgddTMTRyMqWbGis5dvqho3BENZZPLkKq2oRyYi2TRSUgDHe7",
  "key7": "4FwkdYtDLjg3nf9FrZZ8qDf4tvSs3HUVQsCgEjsCS4aftvzqNRbrNTFusfPHzmvwKJrxAoLVCgWvvfwfBZwXCpDq",
  "key8": "4NxD9rS1M25EWvK5BQPSQWjpVzy47b5imDbZ9X4Wrp8u3s1goTpJM3hRox2WfFdgNB9H14NYe6134efW9ZTQvQZi",
  "key9": "2rHXEpkFsuse8AFuJ4HNsgV4B2VxTAppc241zAdnAiLKiEVqDSpXwop4pn8yZHG5DMiEFJAeTkUBkDkqzQ4QuVb3",
  "key10": "rwxkZ7GB4qAfn3j2rcZ1ywhV2rWZJh4XcTUC92rE6VaTAmcqp9yhCPzDrS8LSnZsZerZyT6qjBpJhrJScSFac1K",
  "key11": "3Q5JCUFXM5q9FUBKnST97nTW7TgWMMvACqVgKHncey29dCCapXd8RjFdjEqgqUJnKBbBKxsBc7yJhL3vHqe1ue2d",
  "key12": "5BpBL3B43dCcHTzmiVo2zYdcjE17daqFLRsGAaRLihN8DHrVmTmyHd8gGzmYh4rGNAG9miAf9Q9nNCxhyqVcNMgE",
  "key13": "5Jga6KBmPkeFRSSeB2TPBnBkp7ZGejVubXkaJVMd4tamhFk1xdwhRQnECAU4N6fe5UAGjxCdsX23kYqdCSHaWUjs",
  "key14": "5QALCokpi3utgw5DgPhMuSi17iEwLnxMxFd5SdhwX9BscHQxPZZAAyYKbHksrkqcgZ1reJjZNCVRr2YnuWvt4EE",
  "key15": "n7vCGTjJjBkDMcKo6k7snzDHt4ZR84JhJxwmWt52KWLN8Wq4fcjFndifJayyjncy6Pd41N57Z5Zv76H3EJRZFLk",
  "key16": "21DDQZLrTN1Wdvw9J1eddXg3RxisJd3dWAyRNueBXiKq1gBTHzaDmp4CXsdoHbupn4B8VPifUcujd7y3buruFWti",
  "key17": "2xM4kcbvktkYBcaV2pT1DTwNuRAu5B8rvrSdB1noyge8Quf5oiXhB1ydDo3ZzGdrwdoXfz16rRgGcYMxZvtghr8B",
  "key18": "4Ad1HyYs8zPopa1ryAdQRbq5bjxfYxBH52CtQxyXixzLahsGx29oP7i5BhFMcL2YG5cSHUJuUt2FEzfk72DF9YYX",
  "key19": "AoHBp8uSuy9MPARrfHnVkW9w3qkQjranLgCUcuMRAGjhr6NtuJfkUuLDhfCvbz57V4m52YYFRwZH6YR1LF1VCaB",
  "key20": "2yZcu8BcU6kgoTFkouM2pzJhCqhApg7qjnQi8WBMbvSGJ3vSKecv4EzN5upFV1kdNLuimstBUjU5pYWX8GRKXTPS",
  "key21": "yfDE2y2tM3biTXJqcLf5u4aqZzvr31S46H5T8rDMuWzX4fUwzVRSZdg4riz69PhVpa4A1QwSSDBzHJQEUNJUCNb",
  "key22": "4FQx1bWmaC6sPqHqTYxXMkD8QUBs98KbBmvSxhk6zmu1xeNeUjpGfAeGxTHykFDiB4cbpwj2jcoKEttupC9rKiNv",
  "key23": "5q2FYt8SCgrj9mYbj3ke4sWBVxWGVmnkjVP6QURengZyaCzfJESDGfmzkJfAXvPz9vGk6CMLrPeDK5n4kgKB8g2x",
  "key24": "3aFDFzGeFNJLhvuJoQy2R7qERWqSiXdRvto595Cs7CS6VCJgMSakb4Bm7aXU4BVMVn7u5PHPPbJccoqSMiMoAzFL",
  "key25": "31BW6ZoDcvbKMoxn5w8WG5mHBydmPWgQY3DAjWX3mR9zgqEKuLtb9pRt7DGbd5HfjcZyAYrAHhrXXu84UDnrtUGn",
  "key26": "4htRKsgVCjNwmevwrpjPV9QAdicCVX9f2E2Vap4VfsQuyHvH4xiTRysC3cXdZBsQMsKdQB5atf8BehM6PdPEqtWT",
  "key27": "2gZK7NA81eMxZSoD9tKwQEpzL3iRJMa2uENYwiPW4v6nsvjmqkquT6SxkEY6bzbfqnypAz4ZFxsufpbPNa8i3tDp",
  "key28": "VuGBxwhJht3G7zhaa7abYFKRRwc4MhuqkeDALTsx1TeE6xg3niP7GNutSgqhW4UGASAMACVCafQJZVeJM6DMJfU",
  "key29": "3GnmYsiZrZHjhAyaLcbhPDATCSw2KwrQHwXXWcosP4oHjJYhFd5citdnumUzX51fRxvpBFg2cm5XJnsqnhAxFYdK",
  "key30": "3j2tU6Fzgu1SNfhjKEdRo77X7w78RvWejMrURUrY5bqPdCrqep7HqK8LdGjydeBhKfQMWdYYetprSPVKTRZRmLd4",
  "key31": "J5zFbKpr3NZTmJXZGkpwiPAFUM7WmSNpZUVYXKio5QwJzySUCD3wEP5vRwDU7P4wdCQrnJeA6936MJnbKFdYMBv",
  "key32": "2gq1DqnYDoZvaNXStSB2nY8yNZDi9MUKz9vHSGNHLxoApvksEypzApEVx4J6xHmjg8hHxXs3hXKbFx1svKdfjPkq",
  "key33": "4E2a4VMQYWFC9wK4ks9zMvHfFrrjbKS7RiHyPoAwd1MXcQnGXdoBMknciSTWKaZAGKsoDSASAddjxHjgYJd7WeBm",
  "key34": "2UGhP7ULXBNMQK1Lp33J1nLJLU8bk7FVx7kf33i6RfJvfNax9bYeMXudMnyhqnbFb54V6mbDGY5NjWppa3U7x4bU",
  "key35": "kFx1RqY1k7wKi624hEq4x3UzS3ftkXrtC6JvsbSZvY9s9CsrnBCRSGPfYruuTgzbKxJRtBNTZ9R551CAadNiCpK",
  "key36": "6SXDYjc9pCt3wNjCkfMkgH5pDh3Zi1WCopz6a3wnhfYjVbCWfhCW7WDvyWA3CuFB6YEMC6HFrKAwPaRuq3iYYDy"
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
