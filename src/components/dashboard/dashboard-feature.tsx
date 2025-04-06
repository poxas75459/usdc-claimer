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
    "3Svi5YvgMEoAYDcxd9sDPEoDF42yo5uSDvjaEttLCD8XWuKj1pKx8qvBsgEHqQzipg7deGDCw2NkiF5NDBcuiQaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SwRmmrNCzZpb8ommU4muLmb9dN5eWZ2Qdgh1TnZo85suxvesXyqeQjXrygK78wjNrsiKEXUQvWupWyvVUvK2qGM",
  "key1": "4JCCsVXLwEEW3zQcMLkqavxmzELu1Q16BhxHtm41NBxv1uHBJnHNXdqb3QwpAroNCxEQ4mjUWDEf54Fij6P1457x",
  "key2": "5FQVkWNtF4cAkWdoBkgH2qTH2BiMDsg2avNqeMUWJbPvSYcswjEQWu8PdtAd8ZCvAjMHEQtsQyppcRoV9EM6jmsG",
  "key3": "2H74w2curFuHAmGT4EENLWVJ8SCzuT5HKFo4kWTdr7M86wumpkESz9JLtFZ7v9XiozJSGeSihPA62bLYwqs3hMRw",
  "key4": "2QYjXfpTwU2VuHf1Qu2e1K7Lyo4hfNKCh6XnN2y8dxTRBMcHyXv4UatVnJNtdS1vgZzG4XJTxmbHFqifd3EDLEPp",
  "key5": "4nUsoxAZWHJ8JuhEMMLf4UZcVEsxGZ3SsY2Xid796ZgTSkBLzGTrCY2w4DqoVWYCf6sCVowysj3vHDBRU2kUqnTY",
  "key6": "4Uwx5a5u7SWzufn5sjp6n1Bjpv9iRGbzn9XhUmMUfoAt8vb6P9KwNbCyy8GpXReNfBCv6yBcYevpqobYU1yvmnnX",
  "key7": "5wp2NcdsSJTgbAu7KfeWP6acdrNStN3YMhspSnhiayqx4wyV7Sq6baZJHfFefWTPqdcecxyTS4NX7bvrSS2u7mEA",
  "key8": "4S9nbFyPokgf4ETMb5ZJ7iEZKJcbRmCvkG7uxqgjH3dsejtrvXk26h9PfbB7wiFXYnvfMh4hX7aPmK9XT6VRXQZC",
  "key9": "5f1rZifQUfbRYQnJhmNZzXU8X7cUFSjdQGFx4QjBcfGjLwogah6QJptqPAbzXvnJJ8ydMQcooHEp6PM41P1aodY6",
  "key10": "5he5dp4PXA5coZPjbKSCuQqnWApg8pevhx8S8RMRu6CNHz7cTxgpA6tPK7pEZyuqheDJ11HdtCnFZjXiLV2GT6yk",
  "key11": "33FyMyMFAEiPsaWdrwk78L4dMc6i6uifuij8MSwUwzsdknUaGmSfxruMWUeDSiPwtehUWKMxnXB42G714PPsxBDi",
  "key12": "3njgpuXB2DdKSropWoN2mKAGDgwNbm8MKLqcpx2ThywnyknybhNr3r7UhS8sZFSNceWP4MHXJsMjb8nN8SfdG9sA",
  "key13": "64tzgkhSafw6J3mKA6XhmsML5DKxYNX3TBMVvWpQt5dD6p2DCMvNhkVpWQBXQaHSCTHTWhupXfb4gazpFxDdiuJz",
  "key14": "4YhTKar9FiXctUURzcRSW3rXu72hkfJqVmo8SHdatd8wJRi2NUTDpa6hGbMakSxerpnmWxdR5p8aq5DT3pmNRhqB",
  "key15": "rY7taqXbc61htBd4L6VWtQqP93okNrUkv5xdQjm2GMiaFZPeXop3bDgkRkMaUJtKRJURfrrFLoatiKq96agofxL",
  "key16": "43agZjun46bVLUhpPYERYJCPHoYaS7FrnovpcjNR8JE7EYxw7Q96UEpye71py3YDv2exoXr5shLDqA4zBRKEvawN",
  "key17": "2wKSjot7nB5PcvvnVzhD8v8v4a2SHZo9VTQhQ4XvCK7V3mfqRBSKiHcXc8CA4ENFm3DuJ8qSxRN2VwFsHXjzggsB",
  "key18": "5YY9mB3xF3xdxAydK1gxQBrsJafxGB3FbyjJo19N4UDJf3dLCFjd5Yn6nRwRbi9CdpLb38YjtrzMfEoJzpUieqPp",
  "key19": "3ktScAHY1KUeLq6PxucRKDvXo4tZQb48FdxADgfiBQkf6ZntHsTQ5nUZGXrDaZizWDFixd19Py2w3vzbA1LiyQU2",
  "key20": "3aNaHuGaZHdCpRE6YYMLRKRP8E7yr1Q5SUjGeLhHukXWZKN9foBPM2DJRuhSP8RPQb3H55FyyRNC1SjGuzbU4hqf",
  "key21": "62AP3fPz7QEmRspBwZ8ooaJv5y1nqoawUXdqY4acbsh7SeCWWMDDozsMXrf171yH9ZaZFzguaytYv9upYqrT78Ha",
  "key22": "3QKwf9DhevyZati5xJ3jH18EFbRd3nDfx8QGxYMUhAiPVDnrQh9pMLRiAKZixePqubDXgMA73dyQ7t8RkvuUhwhr",
  "key23": "2r5EJwshPxrtEdbUs5fuJyy6cZUanJZbnKzaUKf1Rk1vJ1ULPec5VMeYydYKJwTwtcL4FvqcZpLcnk1b1kYiRMKw",
  "key24": "42Awa41Ga37LrVgjaCMystSubUFMcpok4z6WuKqaLorkJbQUwUneaPRsL5qb2QC2eaS1AZEi3GUk3jKUBcdnRfua",
  "key25": "66V3NJtGSiM8qDzHnjvhchXixDmdnJV9idZVPxcJtvLwgaUQhjhEPkaeMFbqGgZxyBxueukQLfwEMBMuKD3X15cd",
  "key26": "3Fx6beYLSBXMc4E8CN6RRVBphoW1Vaw1u3mPKdonrNgHLhiR2KHJs5CbqgvFwgYAri49rtXNDVSmotd77ZaJgbmA",
  "key27": "3DnyeVB364qxNFs21emM4gm3efRQwV2jngku47HCKgspaxnkZ92AudNrvT541XYszNryC9xmBsDodp9cSajNYLjd",
  "key28": "4PoiKDemu55L6rm7zAYij5aP6zoBQfbsaoaUYfQCcrUetkCUtxEdXZeWPGcPss3yLvxDh6rLTno67wQV67KhcA9",
  "key29": "4VW999tWuvY5bLu162256aigAKqThkFRVvCBepUzPKkonPnQFSjmE6ozX1KdRYTRypppFeN7TSfAwR587N6QhEvZ",
  "key30": "47Rg14aFuR7ukJ54K42x738irZmoxnYvja6pQ4GRtwBFXoJdqCT8kDRGqaNrg82J4QMczWdanGCKyzTv3vWKycLu",
  "key31": "4yYNQJvAkBWDkJ1WH87yxNozDEYtjAnT4DabJNca22Nch8BkmamNQcSLJRUYgtdFHgekiLcVcMZ45KazPujHcWiD",
  "key32": "2o2wEDgEQEbAXyjBaheCCvYPCYF1CZkznKHHzXmGw2ziPjZM2WLBL56mojUXaMybvEXany5dxbBeV3Hd6uWqVLGa",
  "key33": "71dGAGpD6bUg91TzDRspcXprvLCCENu8E4Xys7f95Yr3cx4M95yZY76hUAieMy2X9KRgXiM24GZ6pYGCkUHoBGV",
  "key34": "4QmxfVeioV22TtAruwATVUrVuFxoMjPrPaxzcR5wbcYWFnrtxegTcFxa3fndP2fmxrKA1CLoifGjHwF6jkgN3SNv",
  "key35": "2Dia48M9TCVwjPB9zWK1VXoy3JJUhqJTe37nH3LEobaqa78JkTi7WW1oKMVwCkB66wEAReyLJR2vqdyScEAghBbq",
  "key36": "4Ksb1DZqKCN14h1ERuP5jRPMjFeRbnAJSLxNV8LaBiDMUe38nWBwZP5BqzXafKthgRV1LvxmhUqwEG6Tiy1Wmn3F",
  "key37": "3YkwVGQLTS4b37zSVUTkUZef2VPEcqCZGqdxnGSLV4tANjg2sXChom6z9zBM8vVust4uTy41u2mQ4HSS36exXrTx",
  "key38": "3WkpnLniL66QLWd2DJ4R5Y5A4ZoR7ctxjyvKAzCLgNyuJFxEo1KeUDjEvQWMe8tT3hFZxA9UFU7NNB5EMpnyMDNk",
  "key39": "tUCMF6LFkdopE2TL4s4NjytM4uXegfJxBYqJT16KrfcAVAekFpXvbjQJwzPD8NBQPjg5NqhhdXNZQCFSSKLxe5v",
  "key40": "59C3Ns2oH5gmwNeezZFz3nGGDPsXH1QTkXf616giru3zLgF5pTWmJwZbUEHnrLZuAfGPvqAaXPU3ZJU8CXf7Wmhw",
  "key41": "5uSbBWhTHqkoVqj3XtfkeFsbR1LHVUCdLzyDsv6Fhc2X8PUYUtUACGgMxBvTELA1QcnZfAeZp2j5wPfbstJaahvK",
  "key42": "4w8BNUpYwaUsFv4F4CQXT7NUbLdv6aeVknzQWDcnW2FEgtXKVdAceFmA5pD3SU1r3FA5jmmAYeCFaQsa7jESULM1",
  "key43": "5WRBQd5jZcmTz8UHQ7iQT4mGhqaH9nYjb2SV9jJ1edUJpTLvrrmSxG6RwHJXFJWhUFo1bEEHYQ3NGUh1kHDkftnr",
  "key44": "4vgPHx35q6GhpRYUM8Z4C99iwEuuE8ytZLV94qXiPhinh66iTipLDbcNjjQztboLAb2HhG1z4tUyTXQtpDDJKMn5",
  "key45": "5cLZH5TThrjNRq2WUFcoZJzxUDnNShFNib4N7LLQMUYB2rUhpA6kQZBRc1m2pUHDWJEDHaRqWJoVuZ9gXDfj5Qqb",
  "key46": "3mLt1twaNWrQL3T8zJQUDfwrWMxXjMvFAuYEnSBgSKkxzPnqR6fxSZLC3zZE4Us7eRoJ4PgHWfeuZah4NhyoqTfs",
  "key47": "65FQsc4ZCHFNGrmm1bg7Y41dETLhMQgXSBarN3TZobmj7X1LevMPpuacaKumAqEE8hqedNqynng94qjJHCvJaMdr",
  "key48": "3Psk3VSZT9NdMMkZ7rDsPBC8ZxpbKkKThM3W6rKReaJ2fUZBDp2ZgTSJrZ9gUp7iPFtzqouyoPa2rfTfBae43xUa"
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
