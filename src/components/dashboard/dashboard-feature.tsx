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
    "2xfW1GZbucEGqosgToVrsAr4PJoPqqQkwhwrZvevWMschKqsptk693jxjHHMkmy3pm8ep5tfydfqZjvqVMXPTJeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMtDqZinQn67AwLSxxQneKCvnB3S4ymPq1P4pSoKzdANapRGpV7hc1fZ2eZQT33Nc1mTFqrXEK2LkAxDBtZwbPN",
  "key1": "3yxGbqFF35GmFaSNTPKo1D9n9UT8T91gVEGGaKvAqPxF1TEiTAHB2zkLWs5hPcVh5wmXp81b255tx6UgxQzNyZiU",
  "key2": "3wAN5w5bZT5QChHAyWbbrGmEEbftUL4kSwpnJCyChupzZ4Amcyky9pLT7sTTKBNeZ4uTHXq2qHsdLUYMisgqtF1T",
  "key3": "ZpNEG3QymakXz4EZnR45RMbbkd4ZWKevnAEhTgdDEp5tHJ4drNGHZcyT7Rs5dDCZR3Wtmb9VHh23DkYXmriy3xL",
  "key4": "4xg6CfCngx7Q7Wh1DzztzsvMkGwErBDZBZHsEcnNRV3iMpAvTjmu4Ni9x53pk6Qjvedx7HFrHPL2wooZ9kqwDvbV",
  "key5": "25gbdvAsVJ2sMcpfHE6XN6BY4q2TUmZWXz6HWdaiK41yBa3dKUXGsjY8pTuC2a3VaFx8r3NE2hN26KA8ALY1Gsgc",
  "key6": "53uFaAh7eDRte7VhzFrRj4Fm8JX8gZj3iftWWJPh8pBVPaz9tqu7NCTkfs1e9TjQxRwkzoEyGAApgynH3wW6tNmB",
  "key7": "CchbdBA6Wp8PCatiafFQdRtnCcrGQDsVbXRwNHyFnXgUMLYcrsFSk6oqmp8MZa7E4dCfRHf85oAjsJQhW6ySUE2",
  "key8": "4Gh63R99i1xW2ntkxEBL5RMzvrarumNkZQTKFwhpQvPwwC6xgS1mc8mtic9tp6x78nKwAGht6hVYdJbzceyRvpfJ",
  "key9": "2u3PaXWNL9nn7FmzzebTuAxdXwKMLonQ9adsEeeZczhtnJeK4Mbr756nC6gjxtHEpjjDTpxZ7dJS2vXoQie3Mms",
  "key10": "5PeLqUSSqBHiqGBvnSevzKpegSv6QaGauMGX2t58kS4uHhCty2kVnUbJwwnrQ5mzBie73DjvoSXEhUuKniXRbyab",
  "key11": "4YfxSBkBLqCGjzDZK33jh8KxZWEBDTrJ9EuZvjMsS44LEE2X8BQYVJu8tcZpzCWYVwQtHGUEZrXrS6yJu2ZHSPWz",
  "key12": "3y3ChbKfBNe8QYTQipQeJSeLExKbZbruMBNBGfXh33SNaFQAp5nbSyEmXgCngC8CsBQVBp1XAKwkwmoPsssCD71A",
  "key13": "JUrcsMArgSPMaYPGWTHfekNCAmSxchP1QLQmqd7DyPNYj62dazSvbveXphY7ST7QPCaM7GgJpVkwGH1WrD5c195",
  "key14": "SLJHXb1H4ZvfACaWL3s93rhzpu6mCFn1MPgfRmpJpH9ZtEDSF3C8jPn4MAd2fJxTe7U49ts1XQTAs7XVboesRaS",
  "key15": "ox5W9qzqViL18n58L7SmXYfcx3ubUKE1m3mT6G8vdxRgiPjHPLHpVRAEaivgd3doabfK1FT1XSXLDT74ez2Bs64",
  "key16": "3DbabEfCMbBSLbWkcuR8LcF28RFdcvnrNbjmbVzcieWwnyCBzrf4dEpxV3ndqugVaVW7YjNZcX55JogbF6GohLuf",
  "key17": "5FBeQqcYp2QFaFZs97HdPNmNxPznLNznpXiJXyjMdcsU9Tr7LE1oz87nt5es6SDGMDS8mpLgLpi62k7PxeQ9xYjY",
  "key18": "5e9VMrhu3NRpNLEQ9gxyAvw9e7fzr1YTtzeMvh6gRHEmcZDegHEeZ1dYcr4hN9N6dVBb6Xc4Art5PCmDC5bfDMnB",
  "key19": "21W5Z9eBKjmv8BUiMvPiQHxP1mZjz8eozQVm72LwY37H6br6KxwoTK3vgawZYaqzgBLNMCG3or23M22rjneppVGe",
  "key20": "4fmU2A7TtFSzj6UrP4dmTeY1Q3VGrrtEdan4HV9BzYtVDYRaNuNpzUsteA5Xst9bmikEHvqPRMLxfyZsZ4MNSjgX",
  "key21": "4LEbkH3dT2FmrXgzJhZmLty1cVfkiodMShCXev3s2trgWJBZuEcnqjsW5AA25MDocdHEzMqrTXByEy9ZtapWeMAC",
  "key22": "2xWeYzuNiejK992aFysgTvrwhV5iodeth9th5fxPurn4aaj3sBdYGi4ZVCvk1L98RCz3vPGAQ5Mdn4v5L9iqyfS8",
  "key23": "5wweaPQSoSeoewybCQgsPwEwJBemduCGUyAJQe2Dc3MS5vWUGFiXD2HcNyEDsktgFVvn67wof1qJ7dUzkHvPC93a",
  "key24": "4fhmGGuQRPFxNXFTuHxZZ6VUPAE4BBr5p7Cq3taqGWXhVr8jh2iZBLaNd4AAgmiuKSWLizhPpxWdj7hyrSt4WQix",
  "key25": "4TfLZXEvVsMTaBk4zoKc9Aw9aXfiuYyxSUVumZX5MyMUq2WPZsf1bs4a7oR4Y5JgT5qzcxjBdYSDdt3hLXwodnPt",
  "key26": "4RPrdF3H7LPD2snzS5PMxkofjet1ZPgz9bBGa2rWMM9XtSg9yy5gGdPuxsNEa1BdBmRQf5SAQreWBXKU1VxVpgD8",
  "key27": "5A2HQJWL3jRCbC8rumJV9LQmNDyRra2ttdBUan18JwJci4Jh1PRw2AdRnX1KncARixKZmPF62JHWQTSVibnvJmFr",
  "key28": "2P4AJyi2DHh6iCUvocLkMe15FE81XSFzmH9L3wjSPBwdfQzVokGhX8tFj8W27mTjn4qGHYwrhMD5YBzhHR1ZkRSq",
  "key29": "3xrUi2aR71z7YBRT1hbNv9Gvw9ingwS7oS89nNbtQC5XKryFcwEaCreqSiXpuJLYazRMWZX7UsxHVMdKk2hRQbTq",
  "key30": "3Q45nvw9qjGCzZ1Dw6uUKEe64xtZ6uv9wNV1ABGKHLDGuMtyuJzUekm9zaoADS2RnrTLEfN8HJhcRbn7qzXysiy2",
  "key31": "4H3emfHuaE6bc1yqjPJcWi2M23cjuRFXHJSvmoykbEHbTfGPnndXVDACWgxpKTsRt3r6wLfaynhdpXsHR18mS4tF",
  "key32": "4KssApt1SPXFephW364kbQBMeuk2T1YSQw2U9xy8jY8DMriRRbKSQJ9WfFzh1JXHyi5vxxitqRbEubXYhzURgocH",
  "key33": "47AG6GMonJbhobB4UqKezYuFYdHuiiKjwSgwCyvBiyr5B91wYdyqKxyGwxpmFRgSwAPBjbuhqYhZgdrp19ePNsTA",
  "key34": "54eiEbPkYr5rrAS28e3aqzq8sKLdR2RdQrByLJTnHATe8dGL5ErgaiyNA1Pwb2bCpxP8pRvSgQsjANfaYgFVghU7",
  "key35": "4ityh4EkHoZTPejizgWrwYMDck5BDrmSZzv15TFa6snaXjHFBJsWCyYDLuhCcbKh6JAopm9dA4KQ71DybPKAyQbn",
  "key36": "52AbCauPNrWDu6dHvpE75Z5ieE7SfcgA7tQSftsDdjjjX3nwippBZEdCHQ7FAQQs4pnUe34GtyB88e1pQipwJz1A",
  "key37": "4v63aF51e5pXbqoKAa3zaTNPR1xeos7HTTw41GmFLsixCZaAYU2VSSv92dChj67bW6rB596JbH6wKc6H5ueUPdmA",
  "key38": "3SPSNGcPQCSQitTTFMFQDXXX1iXDeQiDiFPujR9sgcXmaZWiyponySMQ7tfNVUowt9zdryvD5xbV8xtnviSSMmaC",
  "key39": "vtBLwH3TzwTZ8GhfdzTuYuexjNZfGTBdDTMBHCTrEFKCSEEBKz3YdExiTYNBQV6H7TJZYK4WgcezqipZRFfsGD3",
  "key40": "3fpB3uGr2m8GyQpMQtkrihQsmXfoAxoH2nD8xEV1KHMiXEYmYvrNaJvYEsJCk9qg1rEFsXkXj6we5yo6UjgJQoQj",
  "key41": "2wUFV5JZzXdBSXarBzyRxnCNiS2tb1tbnEiBG5k9U7fPmsKMqYkDQSHKAnQ86g7X4wcWXk9xSsnHik7XcYNj1iZQ",
  "key42": "3VrnusctsV8fC54Uk9rVpqWW2ud3thFQSN67zBw9BUB8KiypBVDVLzz7odLiZLQYwFFSVcnBXmK98Vut8Hc8kyYi",
  "key43": "25rq9USLR2pFNZwxRHPwtABwv8G6tC2tRU32oDP3zSFBDpdzCoK2tEYCZ9AwjFjEkRK79tnvBo4PUZfUufrNf7N1",
  "key44": "2aXKLVKnrewM7agntcHE1qRERahLN8Q8Zvj4gm8TNjHDLXaJmqie9ixUZ2ERETWpgfXTouvqVzjJSVizXKfmmVTk",
  "key45": "3zYoA7W99HHTkZAjGiNWzPgL2XZqD5vg1mSQzn8xeN2oDLsxmMBsx2Apnw94fafeRqMidJ18wHJcSCNvRtjDjez6",
  "key46": "2N2Jr77rkZ6ZLe4EC4vnsoaabXm7n4RWqiUAAe8gdw5WWNF55LMsrwSTJmVqQguBpn87mt9eFvaEeyrHjx3q6AZt",
  "key47": "5Mx154QLdyoWXhM6jE7bsbXNAxzL8qUiWZ4LEMEqjVqaGMkSrdoZBgYrENkW5TE3hTyUCVCQVzgvAXtJxvHAEqzS",
  "key48": "5XgQjh4N6WJhhSp8KdN8FckZVwHEAUtJCeEACL3qcVN1ck5canzbjCJkjhdDCYo4bx8GgQqt3ZgScw77eVEMQjid",
  "key49": "2pUHoKhNgcbbPUzgvPrNK4GrQAV2JSMxagpjFeEGCfB9tfZbP52ZPnGPLQV7AqeyR3beN2hrB7PM5XqnrGfroMH2"
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
