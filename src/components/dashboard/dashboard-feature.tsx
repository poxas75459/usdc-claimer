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
    "651mH9t8YDBMZcMXG3Kd9JybUdRLgfWNXc7D7CELKjKYxxxi46Qp2yX6r9txhuVnVwcob93eYuXJG8xMct9zty92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yu4u1YH5Yc6pNFDSMfyjpWM4mYBL2xNEkVfgoPNCWRPnjMMQkWwafhjtcPtD4sGSi4dAVTrnWDXo1fqbPRJSWkd",
  "key1": "2W2NMzFvwuzFw24jWjW6xyiSvDzDwCLrijNCekMe7ivR8dJJEFE2XwXKq95k8tKUmnBaWSVWCmFMBWAgZ8MY6Yez",
  "key2": "4F8VeR4nUsuGh1m2bgcMFzPt1nmTKmmrFB1jCGtLjQR9DZhXJJSudjMDc6WccrQQ5S3mT9BqLACLmHeTfBFKdjVh",
  "key3": "2Gdxt4zjDtPxAzV5PsfDSuRZXqcQQsGmELaxMTQgtmNdUWNgg1Sfwo4vRsbyeRqYHebMUTeyc5pvyqJJrn35WaBF",
  "key4": "3CAtygPzctiFyoLeB8uNa1tVA4g3Ba3Xhhak2pqJXCFKdccPySXnqEsfjDhvxc8RUE5bB81VN3VXKFff3ghjuemK",
  "key5": "28JMCYMicgTi1rcn2T2CTb8fy5ULU6iwmoCjKt98Cz2sVuFvnjLcm3FwqLP43eAqwYDQD149Mgcf4HsD7M2vMff8",
  "key6": "5YuChAj6wp3c4QPu8PoaMCchNuWGamTxwQU4V31FC6vCg2cDEK63cffsQTpnaJwGi7PdsXZGgeiVxUuL6H6X5So8",
  "key7": "hHogBv6fPvNoKMP7rUzfS8qVfLZrpNFLRmwXSvZoTVcRdY1XSqZ5L2UBobH4kggdTDFG71iZhNpzQEuc3L763Th",
  "key8": "44DdvprG3daQubCnJQFSNK75GRD4xonmsJPEqfM5FWDukNyk1Z2Nwzz9mYXRgS3R7wh8o8gFqT5nafFfpzBDzb3T",
  "key9": "27Qz5wLLwqkDXT5kurWoHjHRAENuCpY4LYgxLG9n6bw5Dndr3GbsxfZPuxRngcb5dpkhvVUdRhJPpSpcMqebHqTw",
  "key10": "5g7PKXnfkEJNR6X4bMYmw5PShgpkcJGMkJYMTew9hKyhTqxkYY9AbzDgUeV7k9YvQfS6oijphZt3aw45STKhZvRQ",
  "key11": "5j9ovKGFNH5NoAJ3CVSGsVnqet68Pe825nRwYFkwp8tUY3PvkG5APS1bxipsNukXfQJbHkxidj8H1ceahWJ2kthe",
  "key12": "KQ3YLWivSdpeugKCYY36qURNk6fqPvgJViPaDp7Rg3p3obtbS6A7ad34mcD7jd21YZTjQe4d5nd7Nz1eg6Q5Ei8",
  "key13": "46vpkkwBaVF3YE8CEPrAi2eVC3npPiycJHsHhW7PELtfL7Xkc1ub9y3gcxupvRGpj6WUsv7MXXKM9KJvSWsLdQMm",
  "key14": "67njdDoAfqbRnbb9dcynUHVHP3zn239UF1JrSRXHNzVVyQFryCzbS8hrw1DGMUsYWfXK6fikW2n6EKVYSFDwAwh1",
  "key15": "3jmCvgWiQ3QVniav4TpjvZjJprkGDB7c3k5HYyn5b9e3c6Ksy8cEGKbMvH8USHuPRntDU2TyhuwcBYxW7nFEUYLy",
  "key16": "4vv2N1upcnmWBS2Dqqj4yKFbx2DFVZ1Zy3GLY43VPfSgTDgzmFyNJUSiSf7Jk1u9R6PmCz1RQR6n7WPx5opeMG7s",
  "key17": "3GbFn68M46xAojUCjnAXMnk3UAecLPMAw1Dw88zC7jYyqwnepZLmETBZ2FRu3Z7wDaNyitab3sGFQVFbHb5FmgZz",
  "key18": "5t8FeDNtvjHgndqxhnUKWm3sULUJka6X3BUyLvkXxHy1SivxUAvukp8u4uNStzNGspSi1xaS2gPpieXa2yFJjwjq",
  "key19": "3v3GPgMizRS2e6wtwPMfrSivMu5r5smy6U6dzGWqX26A5hkExS7oi4CU9C7BWDfhCChxhW4ZJd45Bj3q5TXgjheZ",
  "key20": "4VPJCPc9Wm32jxhBMwM2oqvBttEvs9Lgg74aVuzinn5tekD8TCEABVpcyvajuMgpi1qcS4tqDN2M7MVqVunpf82c",
  "key21": "4CFANYoruZZNbWCjAcuub2co8H3BSb6hdBbjPSGXoB2WASf1dzepFYnA7HQdhQWki6j6LT75w3VRc9eeKu3LHHiZ",
  "key22": "9nomjFXMQSsQCr8FsiMH9zFvTHxTkFVA2ivFzuNCw2daraHCiEhyxEhfic92VGQsNQRcfF3of5HZUixFuU1P6Dq",
  "key23": "tdTi96D2q1dJhWL3ZugnCRyeuuC1588wjXHZAaWDgNrCTxXyWXJESqxBE541foowERe7P5NgFY4HGYrAkJuJMZg",
  "key24": "2xv5X2EDh1DbC7pcz2SQZBcabRVhK372y1rGeK13R8KjEGwBkSr3XkqQFrHo9ZS12GV3bi3NrYe22CD1j7PFo1CB",
  "key25": "4ENHGgugcMhcafGStTuDJWN2tmoyGz5nQxviX8wZWAxqRViCvZKJXcxcS1oLwYiAdk47CebGV71yokPkFSr5qdYd",
  "key26": "4GvacJ8wdoFuc7SVrc51WUStgcPiuwrmQoujGzG9SDhPTSYTAN7NM6eorfou73fywmvXnkcNs85KQseVx9wCYeuo",
  "key27": "LJ7fNCwNQWCmQof2aWM96TVxZgEWEZe6kMNns8ePSdXDpCnAvA1oUonJYaMwvjkgFr8qAaAgp3eiUr9FferVqDm",
  "key28": "FGoN1s1KrGb4JH6x5hGGomFq9tVoGk6o71cPkNhWzgAeMPV2jdjhaSZJ4VHuAFhLVAiaotYp5gcER87xhKzj4Za",
  "key29": "3JXnrh9ZnXVdmC7qqVjQ3J6DjyiX5iHiLxeCPHvhwGUbv4uWNENmEBVbEckavto61eq1yNHBNPGJQwR7JHeTUfwy",
  "key30": "3TaKMPbuhupxfv3SeDdCsQoPn7C43QxRsWRZrDGpGoksWbpeHGGLUcwaH2tVAnsmeixNkm8KtikseP1nEpN8xyu",
  "key31": "4bAaGj3JAfouZmSdTA3VnQjPVPaBMbDJPirt5rRU93koLfp5yeTJpH2WFCHNJiZTj8u5QkjXoqTgD6nUdzMLhPF3",
  "key32": "5eAh4Jzjhr9LDx3pDesjoKqRdzHxY1JcemwFiwnC3u5recC71jq76mbTK72Kc1Cq5MozAEPnpbaqEU73mqicmng6",
  "key33": "5uD2wrok5AumamUXM6etkeX89aFNaVWb7yMyWG1sLchaxCBSzcCffUbT9BZAPM1g7QdeQ8Fm1HHtTW2C89ZxfvdK",
  "key34": "2vLQ4usHEwGiAUNpQftkdt1d67Cj6ZrXuTVauGxFfTQEvgBERV6nFVEeAAUcGhCAoFvnMjGHneFa2rdzaTYLBeYy",
  "key35": "3bRiXC42Co27FqPkDeVQ2ZFethMWupxNfS2FPv3M2L8iVGgbuQyPBZeYriUj5bCHuztj4gbLmRRsYD94piUa2BDy",
  "key36": "5NFfygeYP2yCn8MFzkRrhtfcCQquni1BLBTpySWSqc3kXRpRGRpPnV6D3GPhGBEE1JC7scKiPoW3S9i4PzK1SVHu",
  "key37": "o3FVwP5ZsQKb6gscGzXHzCwzqdNAnFGDEvFqzqMfmKf342UW2jKJDkZ8Hi4fF5E7eM5grbrfJYr8a2MqQeHrLii"
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
