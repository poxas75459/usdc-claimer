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
    "4fE7EumPVkLou6B6gFJ3TeBLBVW5Ufu4KP1ok36Rv672Xb1qHt86jahagkSmFo3h4amSZ6uaC8gokHqhqdRdqTmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyMUCcaj8V2yDgVe3PoTuVhjqtLqPrvANWYaJX4RX61s45FcTVd93wE6di3pkZfmm26sJmo2SvKfWB69RtNzBCu",
  "key1": "5eeSPWCaw8fy64vY7XEjrVSAQ35SCMnj9YiyQmc793rX48ReaWqLgKiUSgfkvQsHWHccLgFgkudKnZGjqqrLchLk",
  "key2": "5TqgH7ZYtR9Mp2Xbt6eBmAE8Z5Q3WXMuf3g2PLsZg88iM2cRo3G7Em7v71VhJgVDH3xChiy2msspYH5CjxCbLJqh",
  "key3": "MiJwmBURG9DJjESPHU6mbL3br68JQe41LgsrftkbvhCJJuK7RaEDxKPGYHU2LY63VMpQhrqftmN5iL9b26ttSQw",
  "key4": "5yrre8dSoXdBVqPzVizuLt1ndjUMrcsRjmkw6cViSNqsMoqpBUd6ZvLAf7H7LLgQdjUXo3ZdWRyj42dyqTkZ8cGP",
  "key5": "2Ca5XLn6hzahK5Nqn8wZh4TuGzzx3xLGuvqdqwD2auEMWHDhMx5HFBPd6QvzX2fAASdgdB8DvrJFXoAXdEvMZx3d",
  "key6": "2r43Nk1P6K44xqqz2S32hvEjz6UhckNNQwJCqyrPLB7Bm4fpPq79Z5BhnKTmvBHGVuGFpJ8uTmm1wAH5ts6i8ewv",
  "key7": "4e3tmFM6XTWdjdZwMxJsAsiaSWV9Z2WkiYn5PEokBDe1DGj6Xf3jYRLHrF5b6tntrSDCqTRjm8YxR586mb1bRFs7",
  "key8": "4wiyaJSjFVF7DBL9m3uvkUMp6iu2ggb38JnZLAmGmLV8gSVyEjJ4BftpM1nVWQeUJkRdd1iGdRDJMYCPXE311oVa",
  "key9": "2FsCL4FEfsmeTG53LYtrCw8yT1tJuEM9Wjo7BemGkAyUEJgaVB7pZtFQzcLtSQfvTD43vL5PEaxCTRUJbjik9wEf",
  "key10": "aZnghGxR41Jexjpp9FENHfvfKsCwt9HdpJB1zu9vRNTWipuqa5bz4aFGzXzBX3H9XaBtakLNRtmKoeCA6nHhoMz",
  "key11": "6yU2XTf3TL8A8ahE2NiV1UyrwFxpVVpkFtK7F5vN63uuqTqYNdoczWh9XoPruRV8L5qYz5Qsa9Jnvx7SxUHVUpw",
  "key12": "5ZABYzwB1qRYHbESdo34oboFVsbmDtRCUGstsT6yn1vHcGP7teNb7WAHgByVnj9qN4DxfJmQ7B6A8u6nfb1ZFjVR",
  "key13": "2KeRXsnnULahzZRmscHrTY3mf6QtxbzDxBx8Y61mqnoVuUFo8QhLxTLcAXxTdbygQMpJDFxoCQrf364M55bwFqwY",
  "key14": "4iC5zXbCt3ECLfPW1bsGxt2oumoNodJJnMPxADABd5ZbTvsQEA2WD6wUCnfARPkhMbEaCzGScxcQQ3Xd679qzLYG",
  "key15": "4oJsbgShbKbrfaDnHea9PE7U4XeiE55kjGFG3WfSVm8jobiGKpLUuEQft4QNdgCbTqwHdRVkMbfDYoSmw1pBtKxe",
  "key16": "5cUetPhB6ejSxq5xokHVkZtrdsDEYdV9KC6NShXhyKeLFSCYuwTTSe8NZUhTbPbQkcV1zbrfVCCkuJeyU7a9gRzZ",
  "key17": "4nwNAUVshsdAFmu5bhN1oN4Bk8hkswS1Dfsi2m5rJrBrqvaHGMsWwoQ6ihmEDCyAjuFtionK1o2SdmEP3ZpNJacL",
  "key18": "5yr1T47ngz9DUzd8KrpQKqYrv5nvJBE34sThS1y8VAaB6JBweharKJYDxLDZ94ahwZkkFRt1wnR9FkdATrKU3NPp",
  "key19": "67juHM1HDSLTQ4zMhHXAAMLygfXaKJXbPy2mdX5QoJCswRRjAAYoUqf9YfvV6n2nSUXpyueeA95EHqjkXp6T9kdv",
  "key20": "4WN55E8e4HxiaquuiuqXo69kKyJ3zAPhbNeTkPfyJ5q9LTJRJbRtFHmXy7H8Ca7YfrNSxVpMYATJstMA2p7my1xZ",
  "key21": "o8AK1PgLrY44Nphz9hYanPDqDLstSmiM1rAoAjvqZBVTsyixhXqsprfSD8P1LGijpfeAsXeuCK2QJB6cdabBKn5",
  "key22": "B7QjY3vPcsTpJQNshKjoidFWEpJADKjCPjbXXGhcc9mpLbt1jDvAQLbGQkc29wLgFBzKj6tKRUx5CU6rAXvZFdi",
  "key23": "5MqVsCarFnNVaDgVSbLn5DG15sx5FzwiwkEqirFjb71foeUD9KgH5sSkxvqyBGQDf6KjbVUt8PnBtz4PmR4x4N3L",
  "key24": "22fBKTFydMib4AZMbcutQrTkcKRkp8An9AEb3DZaHcEUy5wD2q9a3YKdXPRpgD4r8tg2SttmZUhSRa8KueKKdhPd",
  "key25": "43G2ZSMeqUnrKvKz4iKGSvjH9YwsU7buHpQsrhLwjU5A6UfsvCQ7uB4qikc8RkPihG2ixqQxzTxxFDWPNgZ2EUZp",
  "key26": "38kM8TWcrvJc8xgu98v165XoPYmu1SWqz3HE7QH5nC3q9JQc9Rp1nJERjDuhjUMAR5f7irUhhFDbdYR4w18PNDrX",
  "key27": "3zAfBL51hQBJ75DZybsWEAzwM7XzW9vh6ms8uGkbP8JpiU7gxu7Qcm96ux54M7siB77XAefxY12xiz76V86Dvtna",
  "key28": "k2aVrQq6Ybq7pErMCbbjtfJVFz8ScwcQKQe5ir2JmPitriFcbF78x2mcF18s8aUbWWrJQghFHbbsg3mScNwPkrE",
  "key29": "2CqmMuY7B7mxhwxdrShVwiFk763AsjfhcS1M6so4KwpgwpyJKe16LHZwKEUS2fFYipMm3Wx3DwNuEKwaG3Kczczo",
  "key30": "53oJ6GZWcTUC3JB9YaoNfA7hNWwmppCkwRWzdHRuAUcyYkSDMAET9txMaBK3sqtwWDGeJebmedK7WvwCWCzdm4W8",
  "key31": "59BNPbH5E41bzpDXjGdh6XifYMd2SSRtXWdmxsjcrYzNEp2BEfepHYKxNvQSRbaeAawT5uiSugc1ykKruWvEzJ44",
  "key32": "34gRSbovhWNfjV1uggiKrGqrdPxGhsiX8d4F14QRVxgcmRfewHNyJ92hp7Luhb7uMWy6hkFR26w7qZMky92VvQt6",
  "key33": "p7yfC6NCtci3oB7QWeNzQhMfJwpKjFPqz3dt8qUgAhpDPDg2RW2RA9fTe7kuJWXySi9w1ALDqH2vuARwwQ4yuKE",
  "key34": "4mxuKwsptduLrEUaskkPRxNmRrLNo1tDV2pEeCXMjj558eWnpfHtdxr5FB4NdoP1voS7znPqBUdLgVpbAm6bQDy5",
  "key35": "21kd4Mn7afAYPj9ehSvEVts8Wuz7GZ9GPLCnrrbqW1iHBHYuXPTibZFSfpYPfEGSTwmBu9fW5wKMJBfzVBYPz6H2",
  "key36": "3zJAofSF9sy8dfPTWgENqNnzLcb6gqam3HXPUMnc8FeuLHCogddx9TTkyVpaXybMkQ5XQSWM8uypF627vFHYjeCe",
  "key37": "3ryNUoXFUxjjz5DvmC42wagztkkeoG7cAcXRRAx4ef9D8fvLsVu8tZtCSxiJfJYzWqowHJbPcAfsFvnwGbF7UJWz",
  "key38": "2LJk5bsQGMKHmUePo5y8BHZVvFxHCiNkMPZY6zt3eizfhzU87UYvumSTMUTiPVMDk9WxaQu9qSeMG1dwPiiEvThS",
  "key39": "oww2uTrsiR6fqFrdDYhNMP46oRgP9rZuxaJJCWckNPdNEP1oEJNQyMLbVpWrPffBgs2JzENZyMKNeMf5sgyAccc"
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
