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
    "Fjgq8iuYk2oAHVAx3AtzVcZo6RaGujHjV6fGWWaJinn17kVciZLMkju7V4NuNkC8UApEYUGUY2sXFdSerRHq9iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uR9XRoUqd1zPowwT5v1PbjEj73G25R7ZcCGcFw7qEwdcKPL6mjd9uMba6rDvDqcP2GkiJuqme3Cv2TJekUxF2P",
  "key1": "4muyaVeCAchpwKSpMzBv3YpQN6hV94SnRRQGnd6wzTipGz3rL4VqqNGBELqGbcEPaqFSi12nKA9AKyS56fySJC2g",
  "key2": "2o9LYkLsNLnuPj2cZigtrG7XNa9m1NEj2sWm3rK8AA8sJTyWShykTY3V2D69bGjxboJ72mccrFCRqnzJ8VBohyrk",
  "key3": "DuHh1RwBTJLW4vtMXcWZdFJL2zyexN9Cy1vTP4LgGX5mWXUpinAdFUriHdvnR3h4uMSQkdPFwuWtv4vMYdmhXkL",
  "key4": "2fVXqYj8G5yCq59pGztzqWLRVf1GSyvCrJXrBtrdUc5yAYRTRy288EoGTShSrD5NgejfxuLTbmw1TWAhQfaKCXcX",
  "key5": "2xw1JhzMHG3u7P2xZW4HrdLZ7rHLqcwqua4MZht5Yc49XYSWs7wc5353aBMafemJ1jFMZngV6h3jpm3jrkJeN8w7",
  "key6": "jumYz9FEeUdkrVKyx78SueJKrjdBEWYSyYkCfUThJPLN7V9VuknnCKaLLnvH331J62udkFHeH9jwYEBVoYznpCQ",
  "key7": "3T6dE5bmJgeBomeBeoxdXF1uEtxTBj3xqa1yG713MPahd51x584BbZyNPxgPavf8wY9sgcJdQP3D5wJCAeDtJ6Tg",
  "key8": "5GSRCqxX3hZRFViGUxzEAKnF37n5H4YEEcnTSpKGALifaUr72b9RRj5t4W2g4dgUTMqNGS6drwgpo44E8wq9pkV6",
  "key9": "2dQYfcFvry3Auu1Ze1wG9j4hHh7pWM2Jj8RH2u1XMFVFegSBpWPbDntpoCTkyoF3hfYvBMyRmtm8zAzonMFzTkqB",
  "key10": "5jyCchL1d1mnbFAgu16XzVTTxEV2JVs3Xo9BUWmo2xfT1HBKdejF3rjqVALDs75MXEw4jzJKh9tQvms8STGZ7wgP",
  "key11": "58jrgPnizAdCEocePzw4cfzuBXe3RrNE5LcE5Q6SKKYXvUj7xu5S5P8FxkkhyXzXM5vBCqJoWwqHvPDpMmD5wU7i",
  "key12": "34FTMhUQ6ZAQo4Qr2FLS1otX4ciduwazFA5qBkNacjwDPAQ8owMbC6APNY3LjvRfVcEYnB1ND1p8XmKgTfsphB4z",
  "key13": "MGts1CDnx1AKuyTu8Jd4weCmftLMxmpUdzm6YFSYGgVvRG7QJj8x3m4VBiFbPeLPnmSz4phaUooJbWaKKpaoEkm",
  "key14": "5PbyE4Y92hycrHNQnrGcxuZhVheHyPR6dEvZXTpnCFPGNDaaATmXvcWtqr14nWaeG5jKuoVFE28JRfRdB1G7raYc",
  "key15": "2i4FyzxjmNaVMLoBzzNjm6wjXystJsvwT9GBzLqhW6tL3fBqTMoto6Df4zofmDbcjQ7vRtyZvMhgSByMT9dpgPFe",
  "key16": "4HEDmfqjzxfUgqVkSdDGNAFRn4rLJVyb8iDjTfQ2NHbWsVRzZmCwVVTomJxdXdxjyGj6vidsB2MNQFG3unnQaiDm",
  "key17": "fG13qEuDi8wJPx63c38rFh9ah7Bu5KmF2S5roNPwzRjgGh5hxPMk7YfReNcgih9a1b3VkT1MoLMMHb2TeYibCGX",
  "key18": "3BSmhHwXnF977ZUy2vVi9yb2WyNfqSMEPMyDnyEEU8hZeJ689tzQ7ovtuoRgiRd41nAqfpje8JS4phRiWdc5yy1v",
  "key19": "4scvzyMbZ9CBKpBoTWG1jUEBpEHQ17XW2hoxGfWfL2PH8odF5gfyVk9MrBdwymg8Sxr3wMV1SgMDib8jGG2v6FZo",
  "key20": "36tJty7QaTmaS3HY3xFnmRxdMWqAxTGjz6SepJbQtpXQ4CL2i7rNWJco35g7fZY2h6Z7XQ7iC9QMDKmzmhQMMiVk",
  "key21": "FFLijb8ZtHFhHeZ37JCdndy5nrxgHwfv4j6HEmo6rqTpShwfGminBpmM2cjr8uGGRGFeoA32B6ZLri9H2MMfnFM",
  "key22": "2huYBSbvsFKryVA748j9RNjAPvvSi9SMPsvoDMMM4dXVyh8TRDj3XDouo46toG2AakVPKoyWjwPjf7UwQXShBm8R",
  "key23": "4jYR4hp1a99zU1TnpHJ1BVZSQLRKqShTHy8GjYTewyhUg5LwW1hfgZG5vwWuKQzAK3v6u1ykapzncQJXzYWKi6v4",
  "key24": "37uQYgyWjZHpgGju1KB146nDUfa7YtBHuW8fGMRHcsX3DWJe93o9FVaNQCQoKfTB9JH7s4B66MjHccfMjEXQ9sbN",
  "key25": "2GeP4q41ySXmpqHT1TP7459c5cuchecZEemcBk3L8hsEgKTyBAN7BFhPg3V4EPXAeySAW5zoYcyvFeK3DtLi6HEd",
  "key26": "5r9u4VYX27wTbqRgLXSDAvpWkTjHQ3Jn3dKftFJ8eG3ubG6gmz7ZuczHcaVhyqvjKy9smtb9Cj3CSKqgsFPvvX9W",
  "key27": "2qrw517V9WbF3kx1P73bp52jKd2iQduGrpdf2ZBycZtdQ2ujKKFHMh48zhQJRCjFfDovHzYc4fovnZwzQRgTKLcP",
  "key28": "R5Y6u7bwmtsD8V9QnBG7G1vHKTHLhwbV36RhjwKr4cLbtpjLKdNs9uUN4hMi8BGM5qynKG8ewPkyTpAEVHuEafE",
  "key29": "4a9d3YKgZtrBZcdHBmbsKnT7KSFV5C7G5X4uckZAUNTdkyRVW14DmaWTMwrcC1z8Qe2wwucv9iSqF6yY4G2MJP62",
  "key30": "5kEn1qB76W1WbZPhiS3qFjjdLtT2BaEUqGEevz3Q7NLJXCJB8fyC5T4WTtSCMY5LcpqoPuiQpQikQ372D4xJPoKn",
  "key31": "Mg87PEgjd3wkmnVYiApY7DKMB6UGNEnHE6PWSKikvJMiLtKkSMYJaa8kwmpZHiS4PASQSVdTvdvTaMa9HdAz5of",
  "key32": "57csSS7Y8rjCjtGpQDWGcEXPuib8bosRFx84m5BxK56Y29ZXgmRr9WGshhxdsxLWCnEQigzgkM4Cb2goUi7xcSqL",
  "key33": "4p2kVJGZREgRJ4qxcaH3HoSdkGBRWFxcquKZaehSfJnZGW2soPhjwtrSXuoHLw94xyUQ4c7ZAstAnrxs6MeJCJNm",
  "key34": "4uSxtNSM6uDtnjSSTkKiD4ypf9nFg3UsSBCPi2tpUMG1ziyXhc8VRQj6ePoXyZ9KXswwjmHhBSb3uTgfStKLAoHQ",
  "key35": "3navdJ2xxQEK5dNTwKi1515Dk2Vpy4HpLtvxRPQhsB4K6Ck4wWMTFje23ufvZs6r5VKVbiJDLmbtPbwVArwKAmPa",
  "key36": "5aujvKoiBPjsuQo7eQjYZTY6MKN5yE85cnRTbBf7nhejSnQC6e2CLmeUMfPnRnLan14d68gnDr3JoY1WRunNrzEg",
  "key37": "5PP8cCYjbDiyzA2yi6NMtiNCKxHNSAiG2eboE7SDnQJuti5mWwTsMsht2RD7upbTGop1HCToYvjZr3ggeLPa9dZ2"
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
