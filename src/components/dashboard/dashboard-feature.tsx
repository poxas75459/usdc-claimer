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
    "2x5g69JLNXk9epTJ6MyGbXiiV8wnmMVTQ8hNMU1aNTD9HUPpiZerg9yTFREoQNxBdbQEUKMuHWLHc4zTB2qU9ogG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqduXtwm11pF4XtufZWCmBchXHMy6db2jWAZHNhSbkh2su2H65MaKnXQCJpm3Ldemqy6M5kAxzyDfB3cSaoL1r3",
  "key1": "3hqPr6Wh4uTZurabS2ZaiFnQz5J5q6VSx7RDu6oDpFWWmsZ1Kbn8Md2hQtbULdq6sf7Enh2rWwHKiwqHEEgRW98R",
  "key2": "4xgTqfEMfB449HxTT2r8kdpgy3ps6QNt6nMSHcozrUHuKHcqGispdraSPfzgaJqo7GofxR4mFdJiBKSVH3RNECeR",
  "key3": "26FLR1JaAeMcbkGouGpnB8smymvygv8x4mRngUqcM1KHKHUycNerTtWhQhSdGHHACurkCaQxhNdHuifHry4zhK5K",
  "key4": "46su5CCgjR6oBZ3NJZAKsNc49ZKrQ7pDCBuksnhLmu8qspByDPZAGNotvPWxCPq2JDa2ydBDPBXb1L6Nc6KUhTqb",
  "key5": "521kkLS1pYfmYvMndYyU3Gm3fvnC7wFs53XA3dZWkwQfPoQpCpL1APWXod2UGZdWafK1Rgw1qX54rpE3pgQicZ3S",
  "key6": "65QNnABYd6oDZaocG15S3j5AQcvxo8XrQD2XM5GsdqFLE8hnrhpZy3x9c47uRQudED5ZkfbXnhPXaYLZoJCdhH1j",
  "key7": "49q4vdcR92CJaybASfHo4UHs5zAPGCfnTNgDWsppP3J7JUHV435uBgteBsvcz7gh8b4ZUnzYCBUoPBQBXSoxnDrF",
  "key8": "FBSeDAShTj8RqGUgf378KieXButLu7oACZa7CtGgWzbAEgDtV527fwLnf97nx9MbyekpJhPMYjqYDZESaqpGUKu",
  "key9": "4wqbhyC1GMBGavakpzLxAeDa2pJ9TkKL3smS4t1CvmBcdQzB1bkMMkxaMt1rePh38YGmE4N7CrbMKd1VS97due19",
  "key10": "2ozWXetH7yh8GZquxkuxjgw1vr9whLjfkXcPta3ZaP92Zg7yHTeJjPHZdhqxwVp87YkF19zU3PKPxFzEmwWYw56N",
  "key11": "44VG8Bs1MG3bQ4eHx6M1rsKoCxTEa8mASPRwwFRAVYzuWccTibGdu1ouEnXRmpzhCjgoAdoC3pgHkM8TQWyhmByF",
  "key12": "3E5rxduT9iEJ1F8Bs9dXKUkQinezPRqbvZyhzqCkxa8KwsDLS7vzAukHdanSkTbmVA8cP7hqM9eF1BYaqViirdYH",
  "key13": "63YQpMXTBEvUV2KR1qDsoZd5QtGJpBLVfWXxn8tyE47FpC2A6M6anWqnjqGV8A1wpgy3xqwCnzRmQmgy3b7P3z2K",
  "key14": "2mqVtaLbUk3LzG2sPWUWzbQ9wucHTfkSQMvYLwS8vJHoMgEGPDPAZMExzgcvZpz59XgG4BFT6MGMs4VNhXWxJJSi",
  "key15": "5JaQ7qwsT9PatXjX5B1CXpG87NUPfyuWm1oFtk2TVYLNibR45swZ71HC1wdQ5T4uD2GEsfeVheCcLhFqP5R5rskC",
  "key16": "44KRhJkWckvak5hZJwpXU9L5XRLKxjtYepFjpoxMmQbJDjckg5aR11JTXvGH9ZGHiDH2a8452VvP9k7uJwQzYgrr",
  "key17": "4JTtXbyu9Wc73MdLtVE9igwZtxYnhBaMqF589f1uekk91E4zMLivKkDCjRQxFi4ksXhgFAnni1rMsmg1a2oMh8sk",
  "key18": "4k8chw8v4QcxtCeumEC9jgT6A9nCqZ3WqHHvrkgtq4VoUzCh5BhHAvTQmtNMRqaQkyKijMYPQknQjGzxxAyUMAVG",
  "key19": "Ktvd27zziwroZRPGWXt3jSFgZUCNjqt68yCq2gKuhLp57YN4wZkgf6ERh2osRnGXDT5LVQWPWMtCQU28vGvwjZW",
  "key20": "5rCaTKo9MfjXJMnQPNUT6PVD2XxSzs4StEhSbC1GoJMT1ww2TxjN6WYFT1qaqtUUuz1JJkM8dWVThipCrZnPb4wA",
  "key21": "3zvzqYgqnxhpspx7a52pDJHxj1xVcFK9ysis6qNGsfdd7X3PPGvW5PpXc4DwU7K7sd4Sm4zZaCbHXRV3JpYAEdxN",
  "key22": "85AHTnLCWupxbT7RfnkV7hbGoG2dFKZKWUrfRgt3zUABmVgc6fuujYQJud2zmCjVyMtJoYryvFDa8iXuarBBgGD",
  "key23": "DWLfoJ6iiGzfrmJxJF1tqDt5FioZakmh172eJeDNgjvdJ99pWyZdCow48roaWcn9owhp2MRLDtBpaijsBj3i6xp",
  "key24": "4dFCwdmXTVPmCN5nKdodkJHVrEg3UYQHc1fhFtvtL3KwJi6xDdgWkKxC7se6FLhosMiGEW8mVZkpUJnshFLkW28c",
  "key25": "3v3e6tZnt2oT9nsvpAczzY52eWzvydWRth34QjGoYmWQ4oYaxXjL9SBR3YsSeDeQPpLrA3w5mmj5K8bQJhhSy2z",
  "key26": "2SfB9wRpbEKDrBQCH9KMPReqycyyJGhV9CbYGhi8cdjE83iXQsjL6Qw1XTr4nW9kXYR11GtRyGhMeu9GLkspffks",
  "key27": "4pArdH66mTaNheMGEafZyJqWjUr99Y648tqPWnDv8fxwb7TkCKhbDtg23WZnUoAqA3W9wZRQX85APeeYN61z1PBT",
  "key28": "61wVhvo3rYXB33jyA678SXxC42EV1ae7rtWsVcRkRpCvYW4zD3zRtTRhAnpuTNcipaoNVS376FRszQCG8zHtK2xh",
  "key29": "3y7McWLwsaQEXHcNma83V9DttUQwnWKdk91r1bdeJCAyHiMdhGrMkUg98eYGNDwNSuGH4jFUnyiz2VPv1nVUiHnr",
  "key30": "5JZw7RJyNbaLMaNaX5RJyNgJyqaphExBD4i9v8t7STERERdFjVaVhgjjEQbQzRSzZTPyQzdpCaWUvCTjRR69ECtL",
  "key31": "MnZ9XZXaWnK8NpAwdPKd5Mv6zLZwreHc5btvxDVPunxv9W6nFqBQCzUB4tzLEfcLHFAL4eYYD5HRUkab66BkLBi",
  "key32": "5hZyLoUgwYVbtjj97JiVPYjY9WJhVf2ZLyJoD3EMHf6uLXuJ2EyvFEwdJ4WxujsXphkZZb3aWUZfAmF8YNsLWHoY",
  "key33": "2KtV2gfQ1B8tmJUndNcDjwvfb5KFb41kp98zYpBtXYAtMxgDGyA58vMEWBVz6sqWs2HyUDJzYBKAxWKunnS7heH3",
  "key34": "5KKBadYojEffEdxANyizP7w6Mas425oqXoZgHXzvDXVGA41voqu1LZ6rHPf5QNgw2wwU6T4NZvtNvdd5HZNU5j9z",
  "key35": "taqYEWJrJ4H1vDNDfJnVXURgjGsQ9Zd7A4rrjVUUR2EsW33iEmGgRCeFSbmDvSdMESXhUZVqXHJJ1TtdMNGBG2z",
  "key36": "8ccozV3WW6m6ctwZYHCyaVGSg49xUauo5zxY5iRWUgaQor3KGUgm3nPDXG24za5WhmEhJDkRJncsEkmgdiGxiVR",
  "key37": "2m2wHxrQ6jc6BEDLyAM7voANuY7JxVPYrWEsn1j31wHZLaLtzGkp2kSPfUjapcPVUUdqSvgQ9GN9toGJ36Dyprue",
  "key38": "pwfuKAPdWEAWXgQ2ghkbZyx4jYtFpkzpK1orA5Ai8E5byAqEx9o9jHzBQhmwMT7DkssgVxBNqQ8pio4DvNCT7xm",
  "key39": "ZKCrkcAs7s4jytQCCDnP9zMgcM66oR4cyQ9NMhFJ7jyokL3HQ1ZxZCue9jvkCRQQHA1ZHcHdJS3QBBAS9kV5rj1",
  "key40": "29uZG9HXAvSmkFHVpLPptnSbxxVvhSzWWdKxwA5EGxfi39LrC3CCStpDGoq7gaouDymBxRLzpZ8zJLN5LzCnd61a",
  "key41": "3r2rC4Pr2Cvp43oQRMobc24qsGYx1PzoQpwb8wv94Lx6wz3RrhfmbzbMrwTMR69o6Uhvc97ZuikzTAUNRB97E8EM",
  "key42": "5zJTa1vgSapWFnQ7HBMwRGMY9mVpDDdX7WLYYZyLxi8gNMNRTG1kSbJjYEEQ3B4zeKGSEM3nq6YjadPdYAsdF6VB",
  "key43": "3CTNWsSvzkVLFAwDNM3cfvvjXMWyk33sshjAfnxr7VYLGiHu9e91FYgriNZvum6eHZbbXYc1Ru37rVkXMigP99zu",
  "key44": "2TrBKn5UUdB5FaC4Wy14iWTBV7XnqPK2VTJF1WNS4Z2PoNVVt6oBzy2BygeWUbhoTZyGM66H62n1Uz6NW34C13Ti",
  "key45": "Q9fxbA1pshESYdGvfb5SCyPyjnWNaYYrBeT39GGXvWJLKvDo6dHSSjydarD5deGLEKjwM4NvzAHbLuuYTE8mE2q",
  "key46": "2eDfWZZvDGreAaJk5QzaY3wwzU6NtGxMxS3reP1Q6q7vcDPbFJUDRifygJj5YanqnMf4MM5B2P1XDqVW24fnkjjY"
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
