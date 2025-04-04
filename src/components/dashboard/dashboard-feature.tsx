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
    "3k8kaZLWuucL8v8Uow6ji6tRTeD3twBSAZYUiD95WFNFs2HhrREUZbW1V5itvmJsyTE3UYhL1FVKe9dJvUkygd5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8KTtDbzCKzYgBtWMwYReeTCF6EA8beMBHWa2QQMc5rRXT5uN9KdYadXfoSph1QeVhCbACy6EwF8wSGL1TzJAGJ",
  "key1": "31dDqCBRQGtyAZz4dsUgzpaUzPF1CL5e53A721k6DoQBLU8eFThepsU5UdtMXUShxqWnpSVguzYqJEXXLJws4haa",
  "key2": "2dyE4gjAzHnToPtEFrhiqvkZHYTPRJYP71dMBJE3kZQhNMxxBGpHaTYxhL7NwJzYPhyHdFLq1LmPFV59MrjFtSiv",
  "key3": "5nMZxvR4H1xC5sYgqeG8XhZ1Cz25kUzESpfefaicubxa3avnPwgB4uozNKUCaU4vcb6GXJcaoXXZmUMsNUM9PNvh",
  "key4": "FkZaF3kMTXFDqEjoFk3ZjuqUS9y7XHDeNWdysjKZaNPvG1KmUciquutc95ut7RJVzkn1sbUVvW1shGPW4J7LFmF",
  "key5": "5AnyLm5fQaNDvKDj827Eq1n3xUGopPipxXmrxTJSezzGNuvEEPEeyDocurDqjqCxPEZfG1FQnV2iMpXuu7Za6ndN",
  "key6": "48Lkev3ahYpriBLm2SDhAq4dkvX2V2C1mo7wCY7EeTQrXi2YSSWBtreAoBUZG5R6SvaYGDQR9Jk5PYXPXCdKbJr",
  "key7": "47DtsxyAAUH524qwLhCET1s28Bev3fFGkMhxAYjKZM6rNDrsycV8hxDNXuKqNzqxY8RgJnTg8SNaxUrUpQubiBCs",
  "key8": "2ywqksQLXpcdntRivj3jg35Pv1b1ua8fCJsDdSf1Ggego8YT6inTWwTRENuYBKZ3Ryd9KjYs6sCVmYXEPRDJpfQb",
  "key9": "2PhNNzfYDxqRoFGVsdYxuVoe92cWwc35W53gqHscEwJp3kC5wY61MpJRTrN5hb7QqkPbUxBLcmLGTL95TACWCphh",
  "key10": "4UxznGiQgq1gRX1xhpdrRjv3kqu3kZfyPiNZgr1ZEvWjnWo3akuRubHS2pG1kiULT9WF3VhPwEqSDW6jiiZNrpb7",
  "key11": "4QFcBK8SEhBhA81SCeExbf8np5YUiqXH53qC4nrQf1Ne8286mqW8KsagYrqz8aq8G3eeMuBLgZoN7yULEzZCwPGy",
  "key12": "3e5qnA9uJ9tm7zKNvxGNn6PDBD9zTiPPjprCtehrufK7W6EHfddvJYvC2LqggxhMYzL8FRdhxi3w1KUXcbBeDwiB",
  "key13": "53JNeXBDSRcfjQYfsJ16dGBrr9tPgQBYGpHXQup22WsaK7uSuSUr7TYp9B6q7o121tESeBamni2bAgnV8ymYkZVV",
  "key14": "4ZyLaCBAAjvAXraC21k1UiUr5zafdcH4EEyEk3yQnkgCXM5BFWDsEEghuEKczhq9zs91h9LhgQAxLNivACafRNBB",
  "key15": "aePeu1LTz5CiLsh5EDcjK8iuJusqU5YAxw54pGVi9fWiQBQxboVZc7b7AJsZsBUbuWhnJhjMWJJfqYnoEfUXAZT",
  "key16": "3ioEKv3nD7zArHCjoP9QWrLjPoVvEaLvNKfCWksdrpBjQSLkHXauCn5TqSonvXuJ2bsMvM5PWrzvvJaBYnCdbS6z",
  "key17": "41ffiMBXb4fnEQTd1L5NvUgT58q89AFbvTtvKEkG7L2k89sfLjChBBRuwh2S33YicDr7sjz4tNCkRD8KhJEZnF6o",
  "key18": "5P1W9Ub6HU9ueHUy9dn69tR3ZUZ72fPGge5AZ1hGiHbdQEvrgfr8kvwAGU3dTCoDtg9vPnBh7BcYN88WNyxniEZ5",
  "key19": "2ztzzNA9p6ZsHeYu64jGUgbTTSpVRtkKqdK46yzosXqhevCw2o7njCXbKH3yCY1DXrmrtY43NCM5P5CQkDhnmocS",
  "key20": "5sqCQ9QiykUmF5ySiknWCLiG9m4mnoYzeGVUS8uJMGvxeVQs56wm4S7WxrXhVEfqHsdPGYPs5hPCWG1Xz9grF5DW",
  "key21": "3dEkVZoHDKQM1Sd4v7GPUgaSjhNuUnbp5UNKd3BCWN7FvjWyMAwfpCCrBmQ2qgbP3v7o4TKnYhxwAJoY61nJrQWi",
  "key22": "3steyj4H9h81Sxeay9TApjMRA13kCxguUocQFABbTVabj6GgWgfdHsFXmgt4Mh5QYoGEiTHrpnD7gdekWY8RVVhM",
  "key23": "5HfWWvBTBkNp5c2dFtn3zYxBTLwUERURFiPwFDXVXojKcMmaERFZJ45wxpu5uPv9XrzhmU6k3zPWVKC3u5W3nzbs",
  "key24": "4KJNCeP35j1wTtaCSweVDCYusF9CnDtNSqSAnzcUUt6TT7YhyGE4rqhK5uu6m8UvAeo18hMjKDRHa75zuN1XkMHf",
  "key25": "5aF2ATeiGKVubH8mpQEPnnoSbtxtk42dykj7pj7r5XGUyEVoWbhRaEd1JVKcmhuVcbBHb8Ztv1KmE9Be9xMdVdDx",
  "key26": "4WBxYD3z2C78iMma14LC4en3Bb1dufkdYXRB4y15aFeCVm2w96YNMgNuhbCBxeewABKgS5HDdcVJkSSfntBvQzGp",
  "key27": "54sPigKr6FabmCuunemDDbDmK2PgDgecmVkmU6jtsaShz5oBHN43pPmdsPoJHfBNXV1DX2jExcakvtYCY1GCt121",
  "key28": "2E152j8J2wUTv6mun1pBTzRiKmGeDakxrsgTdH2j5kYvVn7quWwKAmaTQf6Lf5P89d7ob2JbRe3bj5oXEPRJe7EY",
  "key29": "2rzFH84v37VHoMTu43xgnJkfMry15DpSGRqKVpZoj415TA1UQFeRv39JmwGPTjYB6Mx7b7ChwrRpY4rvaBTnrz51",
  "key30": "5p6J4VkvdYZxhPc3kV4vYJsZ5nn43JTYBiwRY6HM8x6MuZXrW6gk1h6jmuEscB6zXXDmk9acHRHwzNiah453KveV",
  "key31": "2WExoHdqjNsDwrfXQFsdpRkiU5EEc2ZNvgskguZ6JFNUnSt97P38adZFv8b5SbzqpUGZFWBBRMdavfnW1j7P6zup",
  "key32": "5DibMWMShdUaxfnNnNFPKVhpBt1ScfSw8F4r3Z5aL5AyaDGgn2JwQWgYdNvkXZs2EA4kE7y7pCfvMymeff6sAn6d",
  "key33": "5Rm2mwBPngQzVeGtBCTRCn6FhVsNTJNg62ghdbgJwZYoCPHjeYkFsVmjWxGiBZrq1b8GLKKBi4jESLKeWnpnMorW",
  "key34": "2s6BkBuB6Dc7B7Kem41Hmen1Tm4RU7bKcyZXCqVMAtFgN9wvkcuYcrEWsu6ufeCTJgSJYCEH5ZoddLGJiuiNiNQ4",
  "key35": "57zrk2dNkB9TrWnbWzRCeRKGwhQXGpVDPoaAC54EvVdy7vTZAj658D9UwV2Rt6ESk257m7piWNZRCveu8gbbX8Pp",
  "key36": "5ekKWnR5VD2zjBroyCEZ86BfqdhMXV8hfH2wsGn2riQBAEmSunrjc3xWFc65JscowspuqzsREeYSGCBj6T2XJr25",
  "key37": "2RM33wDyiaUeEEVAY959A11e2nrHvTFFD46A3d3JKpSjX8HWpoPJKQYFcvYXReGJKQcd8hUeZrikkb914oo8RsEa",
  "key38": "4EbjTiFBUBjsEaghHxpgrZEYntJn6GKdHgBxjgJJdPnWa2gfPJjQMTUYtE779Fvvq4p2pXYjoorU97LjgRBxXxNB",
  "key39": "5St9ySe4Hjgy7s2bUzPddmRZxXGGjtZLBaFtTmcKQGgDvUpRJb2mhYV7zzECzmifrvZisVhhwX6k8YRZ75DPtBZG",
  "key40": "56L1BZ7zrfjutmDjV9ZiFfguDaSDCt7PpEDHbfA56kiKQegovniLLwLbEf8aUoNw5S6jEy3SQ96Mo2sVibykTAp4",
  "key41": "4da4B6jihjmqvF44iEP4sPVpbbRrZYpzpg5PEMrFQuzNVpbEqkaFUEpM1uJVf2x4mShE9d3gM4dTd2ABcHw68ARt",
  "key42": "3TgshD18aK7YGmtZw1vggTzG2JKuxa1BWDDKAazd8mTmBPcWrLx1cuCWRcVsRGuWELdg8btrQ8RKDiVjeVCbXfie",
  "key43": "3Gamo7sFdGfrr3zxNodKtma4PRX1cMAC3diQDA4ymWqAVPwXRpWFVUrsXW5NNJCdokW5q976tk96RZkU527787QK",
  "key44": "tRoqN6XSYp3yXcHXiy38xw6N7TU9Fj914gSdrbADcbuT8gt8p9zFx5Y6XzTESfJMAudQsnB3NjuqH6tbUK5wPxT",
  "key45": "64FqQ8uU4L8Lc6NnFMP2nFQtdBnhWst9tHhKoqGRnnMxuTsHJxAfzVYrgEp6s7hRxwbCCedScgnEkc5dsE75ycNR",
  "key46": "21vhLH21bgVyBf5GuJrP7Ayu44GGDHUCA7CmsWsUi2cuWBH48gzYoat6uWPFXsaupTo8GGw7jqXe1njwWCDVFSs6",
  "key47": "5tbu8MxvafsU14k6MK5V1vwndgZsCTXcTTxNLgFLev6vM9Z7Fai94X1xKkp45Daea28je53jmmbQeydYorHfJW9T",
  "key48": "ThoPXajE2vPxVgepjxpawLkoW9BtLN9RzugpZGx8s5NwJeVD9L54PWrHNx25u6xtQTr5Ekgngb7ZwxQsUNSL5ob",
  "key49": "2Nxq22urwLQrQcn4JwbxzZ8gb5aQgH87k3Qy2EycMh9PS6VgvCmSGCTsZ5nZqgFkR2wRhj3WCEc6baWeBwdCQ9DR"
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
