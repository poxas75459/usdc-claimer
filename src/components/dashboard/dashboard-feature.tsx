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
    "JcBSudMyKqFVmoNXwVDdvkxoFxf4SeqvnRJZUj8aDpMP1Ct4MeF1Mm3Zdj1HqWqmTPDoGLNy2PJ1fvmXjb3dEpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvJooktSB5jim9hgtHuZhmcb5iGcC7DBCuTrUSwHrkSCZ9ycNWQxMU3qJ1UVt1zBFuq3vGq2QHuundzPJhmLxYF",
  "key1": "2f2dCLvDreyxzw6PCQarfhfe6FiE5LeaEWkGE7JJRugTdMdrdv8HTLR3QVenHp9cg3vnoeV46RxNSNFbc9Yc18zE",
  "key2": "4W3WBdkK2i9DemphMCjoDt2jHLNbSc1W14ofvFA4aTyRrjUdtPtzK9ghCTFHRvyx8xrFpnAerTyBmmoM59BJFKx",
  "key3": "4XSB6t1nswKWu3dH3bahdU7zmhnMZSnnwAqqY98wgdNXP8c7A1Wt6TX8iyvMEQVzNnuAbMxxLZETqDiUMBd5MZhH",
  "key4": "26iVqjMDmzsqoSaju4iEbxDB8fYKNtzrak5vRf6nDxm5f9jZND9cutPiB1tXaCbUx62i42nV4gMkrUsQgptsbG1j",
  "key5": "4KqXaBnxQ3YBWMhfXJmWzsL5cU78aZiSuPWoLJFfe37jKF57VpXL4o7xKEapLEHKfbghEuAGmMZnz3mHyicrWpaB",
  "key6": "59DoDTUk27YoFGSdCCX3e1aW4GCUkV4DF1muv37xAJhdo44HBS38eAPBAwxe6ZRnGnGSdZrV7RsD9ou4cu8AYs1R",
  "key7": "2UsZUhYK7qc2dCSLVE9V6hC97VfhWeWCPS5yeTgVuHJn4ZXueHfAeiJKWFApV1Yjw6VUkndBahqqvw6EtfEwxg5Q",
  "key8": "5ctey32ug5d8gnoHGccw9cYYHjbYhV5oYJm6y7rG24p3wGSfUt1TwN6Ycn2XTxeVkjFxcBXDvso63cnHoi76WW1J",
  "key9": "2P65bdKPNvWuDDLi3PJ9CeRe1QsR7S7Q3B2Km4nZEcEHCFwVPxBhQyA8pwzkW3NaMfeLcZvzt8RmGisE3nVoQC1Z",
  "key10": "4rLxs8HgaLnmR4eHfL3sTzf7qNcogGbGuwifyAaHs7VcPwCojj6piMTCVaBjjoJUE9tbzyDSDcH3fr7fGnRYu73C",
  "key11": "33iF9dkSJc7LXrXaJ7KGKr3d4P8fG5a3h3ENgffduCgMAsETsHAWPXU84SVPVg9zaTVGLtqo5HfZ8ovvYJT8nTp4",
  "key12": "56jAoLkdN2MYhp1tt3v38Z2gyese4C4reBXjmsxXVwVakVMXt1DYoDDPC6GdteWVXktwrrkABcBFouJsfXoKDrVM",
  "key13": "2wN9Qq5nTgkG3cQqBMBE9exzjut4xY9MRQqZmTPJw9ooehQB1z4sNigdB2PaBVZGV2h5A4YBTykjYHf1S1wUVw67",
  "key14": "21H22AUWa5z4gWaLV7ZeyMSR1fRuQLUj7XDHurjtvoW6XVuv7A1bkiw2V7JQjLSBkfCnGPmuEodYjuUf2rSwESu9",
  "key15": "33YP9rkYZ2q1mPtuzfYYB412KPsdFxaqiriksmyDhdMmCtQn8ieZt5tdtqV82kE7BMzhasAjjnvMsZNiaq4Ygzvz",
  "key16": "LeHmyu24q7yd3jkwDiPzauAqBtK77TYUAM6JywBPQeEPcW6kH3yfLoM4Dt3hnHYdxyDaxs95NVzRD6uYATLVrsW",
  "key17": "3s2nXksNL3PHA6FRDkxw2WudBh7QDJ2vj4XZ7o3LnjjGNt6wXo7ZHxLdiiPiHeq8A6WW9oPAfLLsuiBhY86oNKsD",
  "key18": "4N2nJfjgk6Zb7zmTFbzSNwKF7taoZEXhpanG6F8NeeyH5roKWFkvS7J1aXfVUCbgq9ruzhHFv1JPCRTsucfDiXk3",
  "key19": "38QrxwLXF1tdctmUoUMkQNpYZufrRHFvZZTaUssqmLj49eGuhw1BZPMXoPpqb9aCwZQf2cpNdJaTaXiNDBD21H1e",
  "key20": "LAyGgMe1HzPgi7DUWdMaWWZxivDspMDnt8YpbQrDeNSveEsq3ATGvr2kF5zbMvgbD6WxsvhibB8yzahytafX99z",
  "key21": "5p1NetSKPFT5eY7L1M5igfhnS3kr3KHpDfosJjBUonQodxU8MVAkrVeJjePBCZ9dfYfm7SB1JEZ4hm1NbJk1zACh",
  "key22": "4YpX4B1iAgFf6PsETPA3xyf5oXrARhift6KcmLnFFT5jyEdP8eS9wJ6hZVwKvwDT64vXC6S9vARZZU8atbcCaqSU",
  "key23": "2qUMkxxTZs5wFkfA9rqpoF8mGozp4tq3wgWLChbAM5w6pw99Vu3fB76URy9FuYDY7wdSP16u9RbqX1JeWUpqoi2M",
  "key24": "CF2mAL6khn6NyFQaWcmhzm4Cqz9xtVajFYjf1QEk4UT5MhGT3gj1U9ejssVQmsQjCnd5Eb2Hni6ZoxGkmmcGbpG",
  "key25": "5tRMvGC23FXj5CkBfuYTVTbCkvLRFact4NtmPC9AkZ9haNLd2BJsBrBE5SEVALXkQrgvPB9r9F2cxzrwdBnJBdhz",
  "key26": "4TjSSj4ptDj61ZKfnCWcGwzy3tkaHY2YAUQBYzpKbD1bVNCcsPyPWrAxUNsWxNLHqh5bReYrcg3aC77yj9tdrjs8",
  "key27": "4AYSCqwfWDMFGFXwtToT5fvoSV2R3o6t83U3EHiCdyby8ivLqoPLnkRae8Bw3wc3mh6dnZNKm1QEx8AXqdC25L5p",
  "key28": "2BjUYW45ePCP7zspp5ZoeRdvVmG7ywYzuEmeWrxzCKzVdyS8oVzvS2PYwak7rLvLwjsrkn2gLWKMHz8b693TaRrf",
  "key29": "2pHJj11yYwhmzH66oJZeunPCb1ZK1XcwBpEu3PNZKa1tBHB1DrhJGkGgf6ne7DfHXHbS2wR6tg5mjzLhE7WoWatk",
  "key30": "67j8ScBKgG7M1duMHdgx6VwAsuh55Cu5BUAMmZXikXMSGhgZuBbiRR5EqYEitPerbFibG9gDkQWL16DsoBe7nQXo",
  "key31": "4gD4SfQ6ohMu2bEAjq8KEBYFeGwvDkwwcFwpSDEXShiU23ytbqm2HYP1GVG7sQHtARKmbZ7hkqqRiGtkBDYYvDpA",
  "key32": "4wjtnmVRKWQjeHYEyWjyUddKk9RwnXNT7Dt3PsmJ6Ng3nL3jHzJm9RZ38BefQ3y1AQs71PshhqUsfiZrFU9479aR",
  "key33": "3uv7KL5DbHx98NEATWGVJBcBNPgSukBkEobYb4Mx878AhPL12bbWor1oPcdEvonyjY9fvPhVnWQfkPFCmk3oAyEm",
  "key34": "5pgq8AV8MB1CDdb3SsTvDjPmEJG4Mh3Tcvytgs2F4zAsPVvdRHrM1iA3bU2tthiKt2TgRFGgxnE83Dw5onqeUYxQ",
  "key35": "3Rf2zwWWjYp4LKjvyG2f5aQeQA4QkVgtzLB7diydWW3MGamWyc3x3shPQU6udxB3GHrj6qwqNhH5tELq3cAbD4rs",
  "key36": "32pmXTuTp9v2o9niAtSZ1TFa3DFRMtH8gLykqMT244q5xVgGbWfvJepAmj7Kk12K8ou5qF1BJB6jfELrK8MoAfVF",
  "key37": "3uB3dVVZSNJohFTjrUKc4A8f9JUMRkE4z88kVedPVzoHHXSws6Zyg8EJxSruzcbkYu64enU59i6ikC1uER2tA1Yk",
  "key38": "3WHHfdNEtiofM1w3rsY3HXZhv2XoXw5rj79mFk38Tnuy6yVzoPGmb7qT859xqxkZTc8kuAUWwjSaM5jyeZ831BJA",
  "key39": "4nBsUTW9xBFyA9KUTqyHtFCk1sc1TFFUmeKSHcqgseNre3t713wGbzVaDvKZofNJbYxUBBpJkEtWRBneEuDf2pTn",
  "key40": "2WtWet2sz1pw3TXuhQzRA9vgYZQ9D32yDJ9Mxx8TsXA2YQBdMCkpCCQHLofea5dGTLVoN1zPK9d4hSXBNHrFJwfs",
  "key41": "4K7HrUpojqpezgvj6m2ADqFhSEpDocwYh8K2CgU46Aqa4dymq9GJRPWYFk61tYZja4wbxS6MZQY3CGQhx99hrLht",
  "key42": "4aa1akxw9V34B9qmnVo4rVt5ua9jtUCdpn4e4C6eHFQ1adiJarXX7pDR1pBaUJc18H2L5DhxHm4rnmc8NwHYCTZe",
  "key43": "54sHU4EiqQpwswfuXTKjXxaXTBYABUMwfABmGQp8N7Hha8PrzqoCfdHdxTCzYHtZ1X1p4j72c67gTs1hQvqt9HbT",
  "key44": "3k1Wa2MnDWRmDxnKMCzcj3nAaQio6psRYSRfScFF9yj5hQGuXXHdputy8eQ6NCVc3jdeMFXiKeCjhjVQCxaTJ5M5",
  "key45": "srWJQTDFjQ2JUurSR2b9hju6syW6RXpobgVxV8jvp1fDZuCBSj4ugVb3mUkZZWta477TYBHa6cxtPoH7LbS3tvz",
  "key46": "3ZqMX8DANETXjUpt8nGPu1RfqckxMBdgxLxBobaxTETiqc2qaZfBSDSBcziznXYx3Wapx6uxiXmSHdERTHonNjHh",
  "key47": "TMomUXK5bhfxnpzVhzdsucU9eW24igzopMBRyYMBSnezaYpri8mT2TsYPkSD74CZ8kW7duJJFhuvMbfciWNftP6",
  "key48": "4LBWw2aMyTkLUSwesjdB4gRfmpGASDpthC5HV3bNRkJsG97hDhdMfieRZ3gVQj44QHsnCTiKqeJootaYnhWuY4yT",
  "key49": "4u3AWGmH22TKS7V5KmPV1fspdbwU7xwsV7U7Arf1f5HWopBZBn3H5yfJtGYg75PnbDztMFpY8mDctwEwxqUtEirT"
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
