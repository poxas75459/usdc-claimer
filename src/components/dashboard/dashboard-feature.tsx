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
    "eWYXMjBK9HTc3Ay94uBWPGBr8Zwg42Y2MozaYmVKEzj4GwJ1FCqKB3mxcR3zmhwzVx6CYTwPFWx1bBZF5tPMgAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fhWbqyUhXmABJsdf6pkEiFPxN4J2c5M5ti8LdMf5nrTisPmQRp2EUp2oHWDVzuTmfQADs8BaAUcPbCwzc9no6gS",
  "key1": "4uwNoXrg9aoWHvxdvNAZmZgmqGApBUXS26qbEqgmQVsCFS4YUqJrDpyWDkZiSxGr2mge6vDw1J6RuUJHHPK7Q6vd",
  "key2": "2mZxS2f3grHfB3Mghbj85ehQMPpFVw3dwZtfkQkFL9KS1zzBQsBv7H3B2rfJaVWvVQd5cXKdWc4SCPyzeJXngzKu",
  "key3": "5rYZnzea69hQjhsw8tEeXu1Hho3Cny5NcLJ1PDHHvLZ8nxz93XRMhdh9tLDkEZeAJotm9TYABz9J8tKSJ1vgNsvm",
  "key4": "57ShMkaEMPip3xosqv9nP6fst2MXyAQx1vrfdUHfnWiTPLGEenbjokfCDnrkHMLBDs8ZsmxkSycQVsBBsLbnwqw2",
  "key5": "44hhPDboJ9xSu3cjUKbt7QMraoVpHfV1DzVJ67U8DrAUvDZC2pMEhZN9uo2H4Lc9rtVAkAUEZauio1yorN4pry2X",
  "key6": "Gf8sbAnfn3K65echGJkegiQFf3AA5ZTjoCDXCdQGUcSiHUCCoj8KqxdRFSGebCRH6b63puBcWQzgJuNn2yAhQmT",
  "key7": "4H5TGAYxgMe7dXmmHAUBmuxCGkpK3J7ZHkuSrUQHA7U1r2qKeCbaNMDMQYceezVEtZjBFBPVCcACTFuPXU44A9iZ",
  "key8": "3oiyz3wvgDYMraA1UqfCMHFcJMtGBN22ur3DxyKRL3ZHEXmunWYHbV6aEcb1iVmqfjLpYtcnVqtusxwfAhkpo5nQ",
  "key9": "3Y3NuiWqgnxtUQYoMpbYwvQodfm3cPNZaEp285jxAcaH3fTJdAFTMoD1s2METsFAvtwhxNMzsJKVEKNh63sfavAK",
  "key10": "2jDYgeSBWgUQjXw55mtuuD5T6QTr63QZFU16omC7ehmgKbwpUxybkVpxt57NKHFEAnpG7RXMhXuS958vrgBjHrbr",
  "key11": "3avQi8RsfWqTL44DxKQkogA8vj6J9EUZJiBXRyRQkq9Pw5vSfKPNY2kuHdrN2XXC3uDr7NFYsLRS2a4WyPi9uzv4",
  "key12": "41bfGNWEAVmRsocTW7yswnq95zKGPdyFR8jtTGPrJbruJsgHWWPETAt3BpkimmrtdniLeD2c7HVf3VsJmma5dBQ6",
  "key13": "hC2iV6CghmfyoSnqsaS2R7pGGCxWgCqrmYTCcydfvBpfHWSh7LyVbwrJtbo9gXPpjZTvuBKVbUrHgqcxqtybSTC",
  "key14": "66fsAg6XrsdoeH9Lggzbs27CCWNJ7ddgH6bg3Ez5xpfYHxFt8iSiP8XUd8JkTHBepHnn5GcoJsKWHoFABjnqAnAp",
  "key15": "2nh7AquxWu9BC2HfkWe7tdro7Cu9sBrLKSdRnFnZuK2oG4xDU89nLqP46v7WBowDRLdJXPcnBjk7iMz61xPgieoR",
  "key16": "573MeAuSwJomAridzhj3XgyPa3RkeRKfhxGLr9gxcrUX7dCX9Fg75K5xYVahXCK4cH7fpdmbvB8PHK6GyjKPjgu3",
  "key17": "CPnmpfw3TmdpfVi7kLbMnaiiU3VZ8eQGP4Ljq3fdFJSmdBpxNtYMBXvXF1q6jE3EJHKVWGkWDu9cRupQPvtykiL",
  "key18": "3Yd3PahtL4SW3zTCkDjRFAMRbo8vwKJBwws9JBEnGBVsyzvtLAkWudNdHP4f3VRA12MsvjNYJrwtmkht7zdiDmWF",
  "key19": "3bfzUqaABsYLmHR72rbp6z5UxLoQsGZXeH7CCd1q1iNCW1TQZHjFRn8RzMAa6AqqcVg3rq8tSDJVjfGaoEQyz1F3",
  "key20": "4eggaQyQRYyJ3mdVxW7xpMPFZ6vnS9Z9ZBwFuztZTKZJvVq2EynhzVB3TMCmSPXG4MUAM65usURjyaAUQ1cqCGDn",
  "key21": "2AB7P4RM9auzpXmSX4rm1rejVYK1vHbH1KP1tNULmxhGTW47ciJSGM3vTWC7AicFA4FZmpExb2WAXm2Fd5bwuvxF",
  "key22": "4Q6z3JC9HLgiE6mcbBBF65DzxHfL1CdgNSYFHdU867pWnqp7eSqnppHj5sC77tnw9xcNPe4eRRuYwmhtS8U98Ukv",
  "key23": "R7pN5UrSbaZbLgy4tqq6YJCk1weQDtZNb28BNR5tTvokGRp9ZBE8AjNeiqPUUfxNuUrczj7kakdkr9mJCprSEgh",
  "key24": "34UGFgcGxU1mA4BHiMoUvs4xyCte6awXhkWjfRjeJvEM5JX1zTQGProxzvSdpNxNYz9CorWheowmJYX5pQALAPbZ",
  "key25": "5XieapHj36mSQ8VdZAtZpQad8sztrQ67rpBefLzfDhScJH1abJmjxpSMiF3gMUiKgUGpEMwyXMN5UoyALZ4md2by",
  "key26": "3Dii498Rnaw4oQ4JaYmbW8mo5qoGoerpcoQmGEpkkiEdcfeGtDqPh2ympeNh355kDktMGzi2BDSLxCpbfPYJABds",
  "key27": "46ee9v6gaeMuqFPnqDvRPbhLfKanMPVtfjDatfT4Uv9zYLefsRML4MGUVbXFyX5AJ5oe1JWHANyFkVAVf9XQe6gc",
  "key28": "3nCng2bC3NqzwA3gYGwdsKk3WpxdzXJDxVxhW8QY41gPqTahsbJd1Mz1xSoF7xxoMR9gifKMwhycgqyvCpCAVyXt",
  "key29": "2skLn87HDDAUSs4ymhhC57CuVZTxkFn8ia59beLigBLEUnzLYUiHmqJP1mNDUSRTtaG8wVHoQTwzbZVhy7B37qqE",
  "key30": "3SWPakoixMmDS2ax8VYKSbVa495udfP1gX8xYS2hNpBhoyVeAg9uVDw1LFJDtewXQrN94V4Rgsn6SSknDsQMY2SQ",
  "key31": "2YpY8NXPFwNJraf9DPDmBBcZUVY4NK7gh9SDGBc4DpHzuqGuCdipk65MUT5toApT4jVxB2qEYKV7immdb8LaqWNu",
  "key32": "zm12pgDAC7AmGyQ84rZxHUD1E6zP77N9WAmCkohuW7nwPqPXNFbnhU7m21CgezZbJq4Yaf3hMVLHcCjryq3mTdZ",
  "key33": "5ZEBgnHh21UfvaPZSkNTNV26Q6iBbKVfjfkPSbJZofHRfVnJZ2h3hYEWnR3kvWXND1ZPfzi6of2E8cfZcwWodekE",
  "key34": "3N5kp3UxyonZGqXuV9E7ifRWWLNrXry1tjpLnSCRP93CLXc28BbgGLmhKbLYhYRXzLfRqQhVTHkB9BUhbCWGxqCH",
  "key35": "2DugVhSP9eGD47hJPUkYrvxFD3iA3ttwV7hykgziVUcdqTvTmE6qHEA1143HQDsg9HSfa2sheWojuG4AvjnRHj12",
  "key36": "2sx7Fvux3TDbAQjHMn5Zj2qGYEJPLjYucUZ7CzZUNC11imttGjrid5uAgsCiFckcZHeyfaBhrxf8mM3RCb1y6caY",
  "key37": "vC4zvTdTaBQNKWNchuZCNUr8DMtALRVjbWAnUChDguGQ7cNWoMYzainwkQvrwCtx8DkCPuSTdsseMWAL8qKsfHn"
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
