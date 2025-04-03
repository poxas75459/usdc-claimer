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
    "4HnBwwuCvQcWtUE9bUDuzyiB9X6VAQiX9AHPLZ57884evjVupb55DUCnFn4xCgpz3djUnpxEMeKdSBEJ3yBMtQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtChxEQN5ViHSuGWTgpYUkUerux4reVGwPcDHgVxpPj6V7XXFDpadTw8tDpX78DYg1vmY7Auu8HaALxLS2sGrAF",
  "key1": "58Ucg2EjEHMzz87etDJc9yRPuvboH9F3zkHSsxDwx1bjWycswrZFfWV3Pn6QWZd9opS3QC2HxJPqm8rrQ6DZJmqA",
  "key2": "FbjifnCrqEqjJoqMt5Ueji9vafcwxUKZs9HcUuLnKgoy3xqorhYW4EhU4UxZM2M83RbvZytPGUdLKjUYzXAikAC",
  "key3": "3NibLUh5SJek8UEDGMJmXscmhKeGomco87hrdmwy9mTAwtcvz1sSr48Vv3WQJ1a3SNLRGSwUz9e9UK8WEVModYYB",
  "key4": "ncZcKNWe8quXQXybpNr1zXByVEfazDgjbvF2vEzjeripTLr46BUCoHsGEXzYry57nkMQHwP4nh9onhvCmQZPDLx",
  "key5": "5H6E8nX6rxGxDhFop9caov3vfXELtRddTBz6u5aoPqVdjcaQr81vhL5xoz4fmR9n1VK4HDo4yEgKXaUSzPiEzrax",
  "key6": "39eKLYPy7UkForJafPXkwzrjWKttvckBXfP8UekM8gxRBLiWjoMLjBiJ4rBEG2MtB3mJQ5oe92f15KPqsooz4N8v",
  "key7": "2WAJB4wGgbE9Z4iosWrDaya66N3ZzUtxGh2VThJXffbEKAmsk29H5WUmSvqm8gY1HC24iagBjYgrb4vabe3nGu62",
  "key8": "5hXHfcWr93rJdojn7WzYQBZFp4rqiTqhovgKdxaaoE1XfTcy4pCGyKjGjvaYaTVogmrUr1gEeyJo6h78NzJdYhD2",
  "key9": "RtVzmJx5emEgbj3kdeWGqAQpKx4mWjVVNiK64nDaB4sMSJvPH2dS85G2dQCazdmdsirPk3U3eTHx1xbwaMimZAg",
  "key10": "4rxBvHn62zF2YDAXjG2i1EXtF217Fb5b9HZtUTNDQ5CLe5XQBRTGjMC4apB1m76Q1eG2RRNAzdPwHi6F77UXNRfA",
  "key11": "63Y2Rn2Z7hbD4rFrtTg9529zJngYn8xqJ8ktf4THgUB1VFsmXe65YFyKZnBWDyzqnceTqPiekbjkRt1JEZcwd5UX",
  "key12": "4dQQNbngRiM9K62kbWKsYZ212WhXXkscJHd27H9NopErnAsVtHRtMGmLu5vkLjGPHvT9MTNAvDcS5k77dbbHrdr7",
  "key13": "5L4PAdq11X61JFzngYT4UFdtAKf4gvxQaCvzgJWfqSDvpZC59MopQVp2f4LVwvQiMdeukt63PmgWosKdjRojS61u",
  "key14": "nYBxGLesYcwDqRYktzAHEKt3WCeoaQfe7uSedxs6B9C628ZaikKxE7irtiQHrEASyamvZZqkLL1J72e7ei3pGo5",
  "key15": "4Fj7PQKAekPaZU53xkhuHzpSkNsMiLVhN42FTmsxEN8VLRh1tZ6mcibwJwzg1RNkZoUfv3Tpg3SrdrVEpVgrSbNN",
  "key16": "LNq3faacXoQ3dP2mrKJiH3x3WhJR7atxaCoRrKDM2YMqg5f1h99b9K16EV2Q6qJZT1dxf9iCGbJ1VTZCWxVH9Xw",
  "key17": "1UvtrnzbNYjEBvNgNFM2zxuRDJzDQBYB4cgCgHP8gD2XLHMiYbHksgp2Q47idAnPMVrPn1sbykfeJz6KKapAxd5",
  "key18": "5gPTUsgZ3hBFxxWpZuHX8zPoapYPTHoRGMo2jPDpyVBbQKpzXbVq2UEgtqbFuuenBnshAD47jusMqs12H7nGoDZ1",
  "key19": "5tmDX12zpckj7pHSyjCCatUdzT9qCspUx6Wa38wL3WxR3aetCMF2VxvVQAo2NBk2uBaTuLRDkmwb3puLm7o8BNEP",
  "key20": "uh6r9ezzGW6qudQ9rwSU8cC8ixmGpDNYeJoup6Z6f6bLQ1hdvD4Mteq6xasrq9mRJ96XUektPBeP3KYDCPaxZSW",
  "key21": "3zwuwbTroNhRMD9wFx9KdvCB1tLPJUtCkY3hncYMePLofhD87xBfbRHVng4YrtTd748JouwYDtUtQ3kVterSQqq4",
  "key22": "512DYuw3uoDcnbuAD3n3FsTz8zQ2zBKe32Rpgvvc2u57mxRm43eP8uV4ZosMVKNXpSBB7RJrXke69478y6pqMpeQ",
  "key23": "5dDxPiN4cesCm6JrWXAuv8eWA8zhHGxdaZX2jbK3XSMbRRgpZqc1cgSokFF3Hzxz7HtyyxyMHyMyFSFeqt8CojjM",
  "key24": "3EdoM3CxKzBYr2L52fq6gzfUaVLeAhKpH3TvYdxWj9ANMvT3qepCQrVvhn27rJESah4XXdPSQm9BNHbjFwhYwYLT",
  "key25": "3m8ptLovdFPWjX4zcfVrFviun3ruHBch7xj3mtjmJ6Hivn4qqUx1FuBFmgaBmNxXyaNcq1sapZorR8G5fryFJKY9",
  "key26": "2niyJ1PR531CLQS34jjwYncGdch6amNfPTs7aiePSsscwusGB1Ys7Fx7aEVDFMZ9JUZmQsvibXLRq55zPMNE8eYz",
  "key27": "49kssPzkhXHyXUa7Uc7UdtyaidTZk6nTcVhQF7RUyEG8YM4Qhmoo6FM3NmBGUkNmfxrKRDX8AmmSDnyxeghWvGRS",
  "key28": "2qpWGMyAGRTYJKLAXaoeqiaecEVpFg9EYL6qcfqsxiy24Y53q4AFxVocyEsdGbuJXoSK719k2HB3MK53biSFpse6",
  "key29": "3imCQ5xDQFoufqrjDERfgu64p3oDsf4icLduqS6Q1MLhWrAiaNhZsWknLZhoE6S55RhDMB331GHRg5H3EvuFr8L6",
  "key30": "5JxV7n6yczXFy6474X3j3v7bhpxxN5byhuCTvWgmXh5Vd1FCJnkxkwreJchrNzkPscyTQgtE3CZdK4hXTcLqRGNB",
  "key31": "33Jrp7YcaeEiHyNXkJ6kCbJPw8YthtA4De25GhVA4fmPzSJEnWXPW8FyviZ2VbmueS8wUyxsXotj6QQ6bCeskym8",
  "key32": "4ceT199QsHep9iVo66a41zBz86uiAqUpufU21GPYHpFUDdGLJM1YLrG2ExysQQNPPYaBrTVKEwgoVexrNMLMLwbF",
  "key33": "62Ld2VX7myDMFgL8WnPm1WWkcV7b5hXrTXZYBxYzkYqgfds2hnheuLJEUnTPKMhmq4aZQP8VHbj4aGJ5QLJt8CgQ",
  "key34": "2G4RxoX3GFZLYTeJ4oheSD6zkmyxqTtxyBBugmaVy6YP7473Aot9atNy6a36G4U5Ai5Wc58qC52GsKUnuRPZoYsj",
  "key35": "46U5S7tVJFjsTwbdXEZimqDab15ocMQtZavhGr6gU5oai6DPoa4gSuBEGa4d6inmf1AeDgJ93yLaHi4Z7khrBD91",
  "key36": "QWEWFWpytRDL9eLuCyWKGTJoB9fL1gMNx2nuiT63i6TzFbeEFQdKBosY75AakYymM7uN98Qtz9quKNKxRB3mgoe",
  "key37": "5zMDbWNSqph11HyLWGBdhXq2EFxK3VfcApWnSjhBV3uND8ZUobkBf4wKSn1nLgHH7UPe52ggFJTDorXh3ygJLFu6",
  "key38": "4kL9LeaZe3Bxf2vbN1ZYFEz5mUpEZpYBnQUJp4EtBXX2VoV4xx3ngdnXeimksshFmtwTjJhnBRfJUoLBnkH8vSh6",
  "key39": "56W5bP9xFMGsTbST7qnhvwitLX5ges8tqXijHLk3FNvWsHN3neQ1A3rpjNwVbFUm7bpnLqE3k6fpoMNUjbyawZ2r",
  "key40": "5ZxVfSDbxadxBy4x8vsahhuz1ZLvMGBXw9qBN2AhxyzukhmYTwgAZstUmbWxUBu8n7g9QudrxHp9nH1rRpaUw5P3",
  "key41": "MAGtp5LhmXoui5sB4nntv1sv5zHEHP3mou5q6JaN4P8kHBF286oGhehJMx4NJXbXS5pAAxzQmHL7Y2vpXfQfsMS",
  "key42": "59tEdGNYifNpe41dJUpotbNbjQtGGA2Nw53EFVCZdVTuHxvq9GTtnn8mhv7rP7XsswYE6jePPtUj7tJhaP7z8dSS",
  "key43": "5GkckBHN56JZtBGnaGNpYrGbRRXhvhzhStwmSYAXvHhhV8mTnZiB3gUvkcNiANrGChWDELE6nXiFgK9x6njTvyug",
  "key44": "4NAgvU8sChYG6FXYCMjDLFKvu4u4oPL7aZTeXVWGAFBgKWxaNFtjLn4JBG8rKAPAYiDYCJTCFf62ZUF8HZo83W24",
  "key45": "3eb5UnmVGEqzjDVMm7mFHdST2FhdEuLpzQfR7Uh2vjkwnUn8C6hsDzHzXzrYWuYtRokkodv7u3vJXmcFtfjZNEy9",
  "key46": "494R7svQcM9nyWKf8HMctwzCaeHBJLsiXBvJF6R1SKPvet3EEWBB7A2zqaJVd3RdpAtR5AQ5JRV89ZADidLRjxZm",
  "key47": "4F9HVp6NQ2Ad5H9Cx9V5Tv8shjvioWdCwN77ppBQZKbGBdJSqms2i8KXE15EcFEsrNs59359QDaSwiXd4LVr6JTw",
  "key48": "ZYjMevWxA9hrxhJ5TrAEFPJ7Xtn2V4E5eyQ5eNkSDs1uFA6sP9ZgNuwSGaJ17NLL5rmfEmKVX2Au6USowvXM2mQ"
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
