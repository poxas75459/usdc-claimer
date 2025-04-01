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
    "7WZFxm4XkZQetsJa1EveaaPYB6iNCZ9NY3reB3Luu8AgARZZB28xbch52pUUm4cSTfFEuP44uwoABhMgVfdaaCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zuyjTTSX1xTD4GDG6RV5Sgrnahan6dW4it8hcSmYDjbwB4VUbxztrM3WtgPPNp1cjdxshgthCxvbwi31tZH8Sc",
  "key1": "4cgRYiA7CZrbCCVH4nnhYPdfdm5mQZLJDsHnvQ73WSu3fwDh5ypUSheUXLic4tHmp3WTamoy9dEjSgzUkQVUReeY",
  "key2": "5sHm8f5Vmp4qnxgXu86nTxAai1gSGie1Gv3aAvmJG8wYxiQjGvUsdEjKkbWXhnjEPi1rEidEbuyFSta4bFQaHZUs",
  "key3": "61xR1hyt1u27aWq4eWVZD345ntWCesshwAX348hvRXTcVFfFCW2MS1b6YYQaLQKJcHLh47cSnQx31HgwSNbcdUre",
  "key4": "2WBYTtkztzQ42qbr2XnLRSDuRUs7Hi5eEGLBmE3YLAoykDUuDe9M9RUmtLa31rLutodaYzUs6ayBvAJ5zZZAUSYU",
  "key5": "5nEhbrvQnVvRzqFP9ZBbpYd6eFCqpFt45XJeP3NehfFhWD2z9TWyYbghZaw7ozzEjyvjNGPp2trDN4ntp68M5w2m",
  "key6": "4otwZXF7MWsnjVjjhFhNRZ4id84CvHSooxibpBezqqStxZVxHf1qkCANEpLM6kqLWmm58CbSJtN5CksB9bu9h1cW",
  "key7": "4mdQfr9zrL7jk9eNQECbJ3VurhEYU6xzj6GKCfH4j5jdWAeGP98DV4Ak1KnQTY3x6ro4bFNGLKBZiA1VABDhdYWA",
  "key8": "2WbFNqwdMWPw47U52zBG7hPnCghT756iyJrJQmSvEbDg6p8z8rqKZtLR9YRzYv3d5w9TdDfaHEPaT41RftmoPG6T",
  "key9": "5cnnJSuUhsUzC85ffHWeHaSX9sNbTJPTt6xhkMR8bZKRXoxNcnWJfFogRhJw8c8BbaMofKfAX3eDHoQEN6U4EGd7",
  "key10": "42msqtLr2nSexNqk3Efv4bywUG28PtE1CecTNNRdAEK7vojp1SAiBjFNqGZdczMLqwTazvQJsnDQpeUGiyEor59o",
  "key11": "4fpT3zHWGVw5u8Nm9rbQg5j1Wn9u9b1Rr6oTkEGfRFFmACWKLQdvJ6Cd84KwHqu2nhuDJFb22Fey24sCxwMgYxgJ",
  "key12": "5GNapzhPExnVSranMttnMhsQgizKUqBtEhXwRdF5kmLvZ6oq68dyxzjmdji54xmuQK794UbdHVhmbFVUgeep6fuJ",
  "key13": "2TB5qv1HmF1Ukn2zjdvCnd3iY9wnv4a27Dopg5Yi4B9B1yBBn43TniEW9qGWXveHsRu8d2jFbQdNRwdcVuvDh8gB",
  "key14": "22CP3y9wpQyaRGUZ874g4Hdi1TDZ8NgwhSKLfNfcc6poU6znMYew62DD6AU9BJFiLiBwca97SU6g8cFd2ZaugAz2",
  "key15": "39bmCSKPxzhkoLLy9tE4xyYaHdYMP29qF4Mi8NpRkR38s9Un9qDxR5v9cieTM2A4pywW9fBL8jrwNZ6UbXfkuJKm",
  "key16": "4rV6388NmPwmKRGEesXVAdidpwxc2R2z56pAjGdas9iUu3YV1eVTKuJJs1hiULp7nsawNcxGB7W3RoodNafqoHQW",
  "key17": "4mdcae8yT3fuxGB43B5bSjxrbriUVfPySqXNWBZL3S7hNWuPtEXJkKQJcMpjJhCBeWo24WuNWS1Jf4oPZ3sEAKzk",
  "key18": "4PtERtYc2hCdUCeYZ57rP5uYZN5Hv9nj2cK1CrYoM5Hjtx3bskMmz9aZBbT8mXAoar7zqQ56PtZLjUmTQ5EDZUPk",
  "key19": "kKn1desFqmvV7uie3e55KoSqgKuB6kFNQAYzf7rye3tmzBdquRTf51AauxRYaTjWepb1CZb2NQhb6bzJd4P8b6G",
  "key20": "4BKDe7sqnqoG7buhYNE6b8NYQFzxSCws329ZdKw4t7ynV581B8eyUVf1HXxGbYYkp2Xo76cTffhiQRLEVjbNCWs2",
  "key21": "63ZPzA78Y71bhhzeTgziAwJseemeNoXQepvL1cSP7pndDiYPGH35vCweZapsSwgjpGS6i4hfhbyBDf5GheDPeLBa",
  "key22": "5XAw488bUbJTXcNo6vhEQ3cTGcWnifZk9XNopzNZaxm2Z2A7Nem8T3fCPpmJsnzzZSoNK2CnK5W8SNHDb4r9xCj3",
  "key23": "UBfkWYfyuHbQfXbvbXRcitre8NdPfH6nH5AepEqz1NB86UmgnRSNXwRrUtScVEDT8XcRvUtHo1tMKyDW6RDJFdx",
  "key24": "46MgYQ8MsrYYn14VDxUewKESiWNSX87sJVVRT73EpgUPPmmYcQMcePUPtkrbaFVnzs4mS5LqaiwW6aoAec4Bb6Ck",
  "key25": "5qeZCertZDD8QKB42xcwT8saSFidkjNweZFhNLpPRug8fU6VNDPFkKARii93zqFgYPLCJKYQgJQstASgXdmBz5ep",
  "key26": "4p8VWLXHCmZb3W7TErrAUMLNPAqnqgdJbpXVpeuXj3Yx2iAhHdBUfcPhyWoKeF7kkWCK2M7LnKn82GSHPP8pjM8w",
  "key27": "5msa3y7gfJL8cmtcXxDCmYorkyP7FN1AYjepF8hfbZ9g9KPEXg9imyWHZviiJkpPPCWmjzjZys17JJKJuYpZy69p",
  "key28": "5htRVTgX2uWdVQkqk3UiMhWqJJCyNTzbXuv71UN86iMWZPSjGePXtdZpAR5ydKtpFxaHXFkyMZdgBYM3AUGovnHM",
  "key29": "3qbtGFQpEKF9oJjC7eMBDLwv1H3otjgfAmeDYE1PhS4XjDbj8xs6KKvJArmmPeE9WdVXbKzzWapz7PYAE1vi7XvN",
  "key30": "2PjwZst1nEqWi3RB2CRwYyVVDPv5RveMb3psn7X6zApLHKKvqNmrHtESufWutyuKutbNh45x3mBHygRc69vf5Mua",
  "key31": "48pQMA3agNWZ1VSJrwQQekPqHzPwV4qbRWkWbyRQ8RMcD73ywxd6rEYFyok5NxNKCz3m1wuiSxgt36GvBnxfp8Rm",
  "key32": "3EnTHRrvkfPoFoEfq1QhUJLfVFK3vbM9ArWZFzJmeBwRRPRRD5wCtFbXpoUmSuizFfFsUGhcGrByxaqsp3ttD5Lk"
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
