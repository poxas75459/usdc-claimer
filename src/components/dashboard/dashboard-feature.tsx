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
    "3DfixDQyRZQcGQuhqNcx7z6E9fzKSL3ZvZ48fDxaCRBwt2iBQm9GuzKdeNQctARUeKuhwekxmL6FRn6PsctyWrDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bvj97hHxJxY9qWPHKZ7fauA6jsvKwSohnggqnV65L5ZrpL4NkHFKtZhWwdnKDDJz6bXMsrfKbvsBhCivYMe6Bo3",
  "key1": "5E7iE1cba1Y3aSbPPLRXxuPbcdmVsP7PAzb9ZnCDVYUWWU6PtChtjkSoa58s8uPjMii2PDGZUjMkW4rZcFVMWuJj",
  "key2": "4DWP2PQ9JVP3YQvnQ7Exxfvcd4UmCRLjmypRzpCe956X5U4AgH9NzZLVqtVDuRvoe9TdpeC34QpYryFmt4NL5tmP",
  "key3": "myMzgk5vDokS9wpDT8bs5oU8ngKu7AGRgaYn9Nh5wJxwCzCeUH2XnsRNvK96zMFSHVxDHYVR3Z5d8fPucUVkTJn",
  "key4": "tyVNPVVXeff3VxqsdzZNVnoWvnGpTTio65ahZxHmi2GcMWJX3EbgRSJhycVFXsaKdSE3ZaN7JFQbommttZr3KRP",
  "key5": "4FWa1P8Vh3Ae4XXa52TrCzBxtRtS6RpCuePA8bdcb1Vf5LsDVjXHteR1p5QvQxSbp79fzheiEFnN3pQ1VuJmLwHd",
  "key6": "drhL4wQXNezrvKHCs9EZyNZ3CqRkkvgBEaFwyJB11rpZgR2EC8vBFpPo8oYnP2TqRpVLEs59BnibN3UffVpbUUk",
  "key7": "BAoHSVFHeGGQxCFU2zvxVkzx7C3aUfgip2wTPgV4CRpP9MkTtr1AE1G67GG16WgxEMRM69kQ96CFNAf2rmQCMQ4",
  "key8": "2E3M33FQ94ggDfnVpEh9T57ayc4qeC5f2iKhdpALMkx4HCprEHj3G1ECkia23yjC6BivyGHcgCi1kNnfy5ahR2jx",
  "key9": "22X1UJVHJeAWShwQM6DDAsEEaYVPrcXxUVxPXezVQEaiiJAEnX935BxjwuVBSDXfDcEN9jxBmjtyLYPVifXR7gMc",
  "key10": "4mppPZaGnq8oJWZ26QQhU6AW83BmQVDGn1Xgr4KD6mxTyVyQ6eKnW8J2VCJzDVQ4NSYfMZocJJq3CJuYi2BsCD1a",
  "key11": "4i9cnwXH4CDWb8pAhitTiG9cAQSFGDFMccnrKEba9oZgPugDKFFaqPu1YqNNduTSFwxm8wCoEsBAMLCkMzikKhma",
  "key12": "KLEai5JqpLyBgRtoS9T9EL8NJcgfYYyPjBxD2cs1X6kd698myRpSn3e6hKgXp9nqf5wPU13ViAnpcWe16GZFFmN",
  "key13": "xNTBSc8Dspz7FsD8ciDMv3ABxDTkayqFTjkktM5VXgoYHgKfJu9YPKarVR3ff6J4ejFiFw79MbRuPgYQGqMXLfD",
  "key14": "2KcQ8g1SM3chJW7FXc1vphTYA6JwiFpcqKoWT3s8vtRs2pMA13ByKRcrBGzxvuY4PuyuhpFvEucMyFAeUu8fS2Ff",
  "key15": "4awXtxmpTorfV7sZqYrg9cix3mzLUKN8u8v4tvNTypricUNFJYi7VWt8yz7QJLmfTtwtgEdyAkyaasaf2ecCezAr",
  "key16": "398ZQz97sjPQi4e129YTu4YD3pGn4P6HGdxKyE9KLq97uYWTmsT752UUdZj5MNPE4eYWU8ifvCMUFM3edq1vgdGx",
  "key17": "M9rkpJtbc5ucEtmHD2jozAdJ5TZ8EttkwJEYLNuhgnivbkENACLRA38SUqcftS7uufYtiEBDoKdxxgFrdZYaQoq",
  "key18": "4GtxvmLGA9DqDwEUnojyzmsZTbHTBVzM1hVcdiWjx3TRSZu84k52vaa7dwyDAK6YBseCWhjZzYvQ7Rw4Jms2ZhZH",
  "key19": "Bejg6TZyn5mTxQCoE9a2vC7KXazdFgmwE3xfeMQ8nCiTEGfVB6Zzyy3WdEdQkmnwg5TjnZGnKULmVbQjZJCALjP",
  "key20": "5Y2pQ2ed2q1mNSt8wqk8oLhrjBWcBRwikbkM8xedPPzcSTfCy33vRAnroVVTNhdYzHJPB7iJdr7pLyJVTxFagkpm",
  "key21": "3LBZWYE3Z5YHdbVHD5KWHjZZAn1NKpsHtC4nTb7G7pXSGUbeNj1rpZ597r6LDm6wpDijvsPVTcENQ488QfhtBDVa",
  "key22": "222YHJFYCbDt5ypPU2saW4qyBkgbuR8C1M5HpdKC5jevLo2BbpVFnTPjBWUkUAsLQA7N3Ks1muvaUTJr5pZb1Dcs",
  "key23": "5Teau1Y81kWrnjZjQ49WLQ5XX543ng2pcDPQU11KdvVZaBerfYvh7HwUdXzHgGNHYfDZ9k1omu4xYSVRi5VTd86g",
  "key24": "57NMm932yDgmPqoXU8nbtjJMSmtxk4bispPQwsjqGACybV7E3maFWpmwGhcwQ7TsGjHU2MevSkroZw3tnBN9jKpB",
  "key25": "3dwJftUmpDDjnhJ8brSYR5TuYuMj2Ch4CPnTDY8R3zurx2HseZzLXiQEvUrLJuVmjeXbkSxFDZeFYU48QQBKBLSM",
  "key26": "2Rscq9K5NNitrSzqZAqj1p2Se1Qd7tsGLWKTP64pSN7KpymBi1F1HoCHpwPRbeR3mCwkVt7xGdsjZ4zbKqj9bw7Z",
  "key27": "5sy6ysd9pwos1X6kdGuMmNE1VuhyxRVQzuXLbED7ujDh62aLah1WuFLBG1pCKibqd2KxHZBdzhSjXpN3XBc8wm2R",
  "key28": "26cnCHG24QYQJomHvePjinpbzHrM6wwPEeujzkrwg45smAw25c66XoxSTmhhKj94ehyx4CHYDuHh62S4J6wTjmaR",
  "key29": "2XvS1huuFsi4EVDTf9jA3DAkzHCePuZVXWznAsGTo4Pt3w5XcgU43qMcoHbVPdbQxELaDPRbs2FqusMUHjkfqPMG",
  "key30": "5bF12XV7o5LFzH1xtTZTEHJmqZ8AfmBX84P2aFvowpqhibgJmbfYxs792utSeTXtj4sXmPwsescrysCWRRuPrzr2",
  "key31": "3976rR6SSRQE6hXNsnGFX8JWqTKhTd5vZ7TFh3jMmN6u2sEqdTeAwwc2QBjG7VBs4jbKkjSpDqgG5RaAL7Qcyy7r",
  "key32": "4Mgj964AGKuomg6obPHtmB5JVkcHFAfmfJb1biW819Vao3uLu56cw8SfwAYR1JosUAtBmcatW1PXBZgoqXMYDrHc",
  "key33": "4e1PKm1LUohCaapH7p3PVMphgLA5hMMBbRD4sbYeSUyoQ6PKGcnzLCrmgNGAaXgzonbRAkQqj1GWoR5zrkgVuPyW",
  "key34": "32LSA1ZEuSaH46VsHLTfdwU66d8nn6yzozUQBNkDgXzaxhJUeg2D77eug8mfD14CLThB8gk5AZzbDosSd3B69Uu2",
  "key35": "5Ka57B5CBwh2YGdtekkmZa6QpHwzYGDdYMAqT89M6NjFwoNFQBgn45fpYU1UZYMbLoX4RUiKpyKAmWQo37mU6x62",
  "key36": "JTeWFkfbXZRfark6vtVVJ3EPYEcbVL8S1eSAioPkCn48KtGtAXYe9oywTA2HuyjedUmhfjaDyF5dVmvcB7u5U85",
  "key37": "UXpc2geBF67qgMzmPXodn5JdvFaVzGSkU6c26ndo8UzmMksZCJb6wEyNwTApRAT5ZsH5RffxQS7CDv8zDuR7Wva"
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
