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
    "4vCnRGXCEykVwFLz5yLfwftoL7sS6NswvWXPBqDm6Qyw9e9tqc8jDDaqt7jcucykQXMwPebRn3oZEWdzEquXezyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eymo6V8n8H4uSABCUEfjLks3z4WXXB3KozvzmYMKnrnhFc2hTkXWqhbhLTUxa4fS5gsYNEW498emdNgH5i9RgbE",
  "key1": "4p1qSGcBYiYh9sHvD93iWygzuzMkC7ng2oFtemSfQTVihZnv46UVx2M914Lp3mPhenr3xoogfS2pHQ5quUFtXxVD",
  "key2": "AmcDXEBkwwmkW3UschSAUHegtps1kq12W7y2uo6RdhA1TyH8RQoFDdvrJx5zE8zybE8N4S9pFJMLkE26bRG8J9Z",
  "key3": "2poYFJotbKrRkt12ckNjAWschsbQ9zczyKKWC4DAcwGEFSaszE3L3Nvxkrkqb4AYQJ2RHGMBw5gmui8EMvBnWxNv",
  "key4": "2C4K6i9o4bCSjjdFQjznEsBzJP7cda4cMCRoYsBd6ArnXwRURDATss2ccPHdvSxK9ASN4RWnTs7vn2cTgFMe7VEs",
  "key5": "2emdVs3isWxm5aMYf252vghyy7yAcCcVbCiaTo89oYNqKJ7ypq7LxaAf5MoYruCL5eoDb9bq2ds3ox2nkbXKCmVc",
  "key6": "4nyAVuCeW2As7RFPtqXbMMVuiQjLj96g9nmFdm9AekV4GmJS95ubees34JsAXvGhjJGBGLLGqGUw5YPybrsDvWJ7",
  "key7": "4Cr6TE1wfGxBswr1Kfp4J9pFSatc7QCEaFxAU3v9RJSF9ND6znv72msSyRcgehH6zZwLRu5NQMj1y8aZFAdcYeCK",
  "key8": "55ehVQb4K9dRBWewQoZ6GKL5xRvVb6LMb9VPunGNpWgtZa88YSADycphZvFDvtEo3wJZ96ggT7UFvP8RDTosWayK",
  "key9": "4R32mPaXat2zaNSTaNrMVrm6PiMrWJB1sseKWhbYRtJctJsDfmV2k9JZc8VAc6x1Js33jUyoVsEQWATMxWuwXet6",
  "key10": "3WP9wxubtDBocT1NDShL1XhYMnfJQ4Ua8xW9qsH9v5nnGQ5HdpF484RgKbQUdvuTvo1HCdUEDxkVpiQVsyLnR598",
  "key11": "2SFeBKnoTj6unenGZd1aZwYy9QwLohpEsTKEzdJzuXJqrqYxZCZjpx1YrV5YBCPbCTqWp9S6mzCGcFwTcjTq1jBa",
  "key12": "2ffMEdgBgfnoVag7SoAgghQgnCSPuSNnyHf4j6f9opECrQvehwwqGfkpDtKm5ad9sWXwDQexgREr3gMB8eB5znYp",
  "key13": "4qZRARfQN2Zu4a9Ua4qVE9Pevg3TCKcGcoZ2iEx1KhkFGDXS1jBgwjFmyTgA6giiLUTzVsnB4qWbbFRQ7ZxxXsRd",
  "key14": "2zYHTnVsJWFJvKQ1H4awEvQFzjyqk2nrA2nKQ1bbhHHX7aacUFxqBu3ZwnbgFyRRLjR7529BEb2JiAKR36UWohki",
  "key15": "4k3XmMesThhwioJWb98QWfBFhuJfEiQ7T3ft1DCeYG7sVHZkjxkVQTCvwkTHFkXCjaFLBo3NDJAMJqMf9BJQAFdF",
  "key16": "5n78C1kupYwSK2AJzMicVNiGgjpPTa7cXSVMuby77mGD9fx15mhvUSVpGBk1pbm6DbYKJ6HkX6mi7Uos3VhNB2J7",
  "key17": "3ybovRfHgAQxqALbwndp9GDd23NSfobMuXHKVdVDEeEcLe138Zax7WX3mhKFzSftYSn4wKNcpm2nwf285XA619HT",
  "key18": "m5ustZpzbj6GKLB26dpfPbFZY4p2SM3Ef6gqUUgs1h4dc53xNYU2JfJGT3vkAJ8PbQ3xhv74TWRAiDmahjAyia2",
  "key19": "5u6aTs93X1A83iCddHdasDybiWcd9KG9NMZkhaJjAfhxdMyVeZa42m3n2LrDkqT26g2ZiAiA4Qm3mJiKFjgwEXkM",
  "key20": "2wUWrmpXq64qskLWueNp5wtLVYEmzDUMBtYVwpb8Mt3rziRLmTBESh68LgvU4rqTznX2m9Z7s4duCC6Z2aG7UrGu",
  "key21": "2YEASTgcUmsL2ZU5cXkVYEJS6bkAMYAiFuLGNihEeYmcCK1ArmU97kGKCJReJfxJaBsFGqwXAQCFHTgpLw7Xfabh",
  "key22": "1VpKwZFudP2RVg563sAGpApJHpiTyPjvi3MWe18JW9teyFrd2FAssDYajZdtTZ67v5VPQn36emTbXoZyMvevTbJ",
  "key23": "d9KwWh7oLw4oMCjSfEG6d6Fj5YrFN71uVpxz5XHBTYByfxyR8rYcogGurq9WDv5Usp43itctGPb5bVTqRAH8Knk",
  "key24": "5Q6H3GbwLm9vgK2fHuAWZHckiBnvEqMK5FcC1fWtVz7iJRLYE8XEUui2MU4cR55N8KXi4io6ZM9WF5KKWSnqWzC4",
  "key25": "32gdwQur6aKvCoUUNVBiMCZyf8aPfrZYcvGCHs6UK7UMT5BMs1GoBmw4G1MY8Kv3F6nkyFK4LxdCcWvFTmX9wALR",
  "key26": "31NYwkywZY6QBtp77WD3cdVd2KpYEsWuQRUYrzrS4KFkYcJKtqsvWsqoSojB1wbUD8HzyQiUM9hhubZv3A8Jmjax",
  "key27": "E1uz3rdj3vz3wmfRxUxEHwLcJxj2HjwmMT9G465opNfRj18f3VNTA7L6mzDKDfem2HTYa6cv7U23o3rxuRtPVJV",
  "key28": "52bpiTocC5ZViJyS1MVUCSA214Po4FPiCbXskFhRXCU2RziYQyhRRpKN7yxHWxpx7futyynYRR9AwDEjPR6BdiLR",
  "key29": "2sP9k7wQwgX37ZpDAurCMD2S18WbGorvjSrT1GJ59CWGevbTgtrPtrGSARb5VkK1Cy5MqP1SHrFWWuybgGmpNrTq",
  "key30": "5UhPemqKnBaxoFaTjufoybNmSGEGWv2FumKN2DNr9CpZU8vrc7KFTuzXdYAPgD6DtN83RYLE5AfXSH12dSDJtWpx",
  "key31": "3FdcHLxmekrvE9oGBWh7auEvjgHUX54JeMZR2VGz8ZyPaKaQ6fPeSUpuokTagYavKG1H3qGimrCcNQxHG3Wn2fuL",
  "key32": "4Qpc8jw6pMgUbqKEGedLbajsvhaQjcrpK4FLXzSZzsNSdJn5uKLMSZY4zGEyD4Gh8k2Wcz6Tq6KjEhfmMgHKY8bU",
  "key33": "4bTyBoJ4E95PaxnP3uaNsSR7Zc2w98iaVWJA4rkmnxQkr8v2ba8SrLbwaLwJnsYh9xPioPG5B8qy17BoQQwh1ig1",
  "key34": "3BvdUvSJjVH6voGbWKyg9Bfotszh9pNmNGvR3Yp4C4xGT8a7rkvi4ZpeAUnfTq6vNm2J2u1FBPD7rYAgujLKx1XV",
  "key35": "HEbnEL6UkQj3cMnmQ7PxsEjhh7bLprSf9CiB9G2tKjwCe3DZfJsyszw2Q9yPA3BPopXUiwsMysZq43xfHTKdMQT",
  "key36": "52FgmVKU9DxtLJQvY1gcUyUsMCXEs6oVqTcXrDLYqkSEsLCGkpCFdJsfEb1AnWLv3FG3mZmqL1EFQkdW5n19pyjk",
  "key37": "4wSPrgMCWKhECL4TNb9H3YA5u9rx8fu6YT9GoFsmnbyukMkXGzqj6jfLcFZGYthMpgrpDtJYfKceoFt5pSfEteMx",
  "key38": "3DJD22d7YKDVo61aB6WsQdnPLdjudHx2Hhhx7QRqieHHQZLmiarmX69wYRtRjJxNkh6vGmjWjiHmehwZwCs7V8fD",
  "key39": "2r6mca1SRSXCJbbGAD4eNTi6aKShDFqwSbYBdMWa5o1m4K7xQFA6s8qb5zozvm5oBsnfSCyE4PpiGeYBy7SwQped",
  "key40": "31KnPEitETwnvGvs7Ym5CebHSCBzsTmEbtRdr1z3X3NzaWir46Q7iYFPQZ8Bu3E3N1WPDM6Z6SSRTwdCx8VawJw7",
  "key41": "2ujtk4yCcbXJgWSFpdqQrcyN3ew7fwczGREvZbidaRcqy78zLco4r9AL53pNCS64n4e9N2UkJ5ekWwaY48RUMsvb",
  "key42": "2jo4SWmvP7pNK1gPcimBUqmhtVcarvUpZWh454TrL98QsHLXc8VAsPPHEJwFZ4xng8hzRV1XFVDA7u7UHgzRmwr6"
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
