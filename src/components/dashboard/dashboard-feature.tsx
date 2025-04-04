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
    "31K7LYjCXkNQwxNjxNvoeuqW1FZEFJ8U2n5BSfpEcsKWAgjB3x8BzYjP3p33fx67oP51opkG1E471r64EWXMCBHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGFxXk89pYLZibr2F3JeW6p2qzhmta11zowPn822REofSmXc8YWJHsMWcybUvZfdPA7X2vGpnnmW9KQrr4KgmVh",
  "key1": "4g8bsrTLDdjGpWS8Xh8gPvy2WV49x4F77vFwhSPGBWbdMEJ43brmSYPLq71iUUwGc3i7xxer6P77eJgNqGky2Prh",
  "key2": "53V2GdRxnGjSkCqGgBiKNiD2Q86PshBgC5XWDsHGtBwnLGKMRFwfPXqCAZGc2b9m2btrgu5hERP6u2STooBYFDzy",
  "key3": "5Eru5tGGAzRLx74Tp4wFu97H5SttfV3TXCifMZ3iTgwkF9BkY8HvZgE21sAK52B765rPTjDi4CXP1rPiHeMoCR3e",
  "key4": "5thXVq2KMTp5WZZtCLcM1Ruqopy4LayLDqJBPNycasoErRzSczW7LSuPogFQVgyH983oaJkDtDiewoo4DJ4rhcdb",
  "key5": "QYZB2eyxgszWFvmrcHJUJBYG3qj3QUVXoiPJLYV4nDitHGZgYXpo3KbrYgLfoXJuVGM7pkUi3iDfjeVPvN7xEoD",
  "key6": "2v8g2hwMf7jGMeuqeRuMfR6WHRdbiPBa1wrztqJe1F3Tp3Ry97zGpXxjV7sLAZHGnWmZzLuQGdFTVdEtweLmny7h",
  "key7": "471J9e8N69rbYnfUYH5n4RsDVYhpbRZzTVjeVxXHJroJSEu5TFSME8rRD8HRBxCj2wuGRZKUnhKEorXfHHFKf44r",
  "key8": "F1tfekWxXoAeE72Eur4BZX2YB4jzjdrS66TjnYhESVK3QTuKFXLuoUrZ5UHddLRCn2zwkdznpyT1gALnCVRswEg",
  "key9": "2GSmRwMcq2xrAVEPq16YFEKi9yj2LdPFGgRMcn6E54vcnXKcMG2fwDLkdZapQoNjnzKH5p5bKhSGQ5GxEYM9EyoQ",
  "key10": "59Kuf1P93e786EYkuWRs2kxdFpG3gVQYVFGEkAid7nimTWt7KcjcN69Mi5hKisTpEq31SeNnsEZV25dibsxxatXS",
  "key11": "ChaiTWFigUdjhQvzECXejV597i7Lh2ES5MCU5fHmtAj3dfduHZEw71FNK5SGj84Watzkb8nL4VZBdn2z3VTj1ZM",
  "key12": "2oDmpicispc5ZbcoFueWRaWHdne7gFS9dR6upayj4JyKpushj6SgQ9tVT56vVQvfXAFHWJAZ73wMbh9bTHhS7ktR",
  "key13": "58b46SoB5A2rphEZ6YWJiNtqSByEeZKa1kheuTZFVGCRRCfntsaXVwj4YuwVsNB12767eZoMJjgPEWZ883GKZCE2",
  "key14": "35wMXmNcCUpLNCDbSoQnENuaCG33JrMQnYCdBbMuvxfnYKM2GChBpPH7VT3GhUAPiW4NB4Lbh69qpwb1EaemPiBK",
  "key15": "25VhzCqwDTBQpv7cKf79SF31Z41dns8zHXFHyMUzvMAs25kBsDRH5g3yrK8M8Bs9pmMjYPdWFwZHPpBwHBhcRVCw",
  "key16": "5ksAYRPd9cLvWeN11nMopcCaAH3NDHapReoeicz1gcgRDAbTHbcHV89XXq8UfpDnjpKa2fxgGY7jTb4mWddpZb4e",
  "key17": "3BWnkxuYFuoL7hmHaEhb9Yg2ua7KgK1ZWiBNegxLxhWUERuYP8ARhEZt8JErrBGEsZ7Nj7LQHaZwqLkdgePND1oz",
  "key18": "SLC3grx4m56SKKyxQRU99Z3Z2ECoKij2fE7DZ8NRk6v5FCMYPUNi6RnoPCxDk9AyEe8zEM6BrwPRc1ER7CyTMHo",
  "key19": "5a7e86ja15AhyaY6HqwhHdLhU81jHdLB7vzyHFLZoCcDHyVCwDBnPr9CGm4bjM2HmpLSzjULWYsJYQLj2RV1zgwb",
  "key20": "25s5H81wQLycKHoFemJCpvxp72cLYuLz1GHMZgPGQ3HexiaEWxP3wNxkpjwaMTFNyu6yxtqjEd86PXLCTVN76qbD",
  "key21": "3KQy4fYE97gF9aDjqWSmw2bn6XJPaExNpa1vUpYViT13TpvTqt3URifFHd5FF3YHBtW9nJR25UtN4bYt8LvqMoLJ",
  "key22": "4g1yfxwKrcergv5AfQriWw1xALV3KXv35UK2Qu4Tb7RDj85UT8sCvLyVm9BqAbRZDJsj8hjHmocyXYQztJ53fGh7",
  "key23": "2fDJ4Y4kn9j4uCdarAGJqprgpR5YMpXbG2cToUFUSVco9TyEMTUVyqbU4WHF1wQGjrumnTrB6RyNpuL6b5jxnW8R",
  "key24": "4oKMXws7h2iPtBmmsGzmGLNc9c9qGjB5AkWkNYQGLWFrFUnJNWNZZF1BMobqAiUzZR1cd6YGgtYSk47ueAqrD621",
  "key25": "2eW9SmRcmWmYPWnJ8VbM4fM63C7Ym71p1Ato8of9nP58Hyf3yuxYC6SFCAyGDWaN4tgFtafyiLSUeLe16rubWczJ",
  "key26": "5heWwghS7yiG8YVFEU5g87txJKKEt45sQLvR5z6WPBFspnu1UmY1KRgip5urK6AqzaaE8yJbaWgvophFq59mVa5j",
  "key27": "V7rR1fitPEAZiSYfaQCyhFe5e1X6guscQ8M98VsPGvHa6W7sfhiNscoFi6x5njzHJHxG9CtaorVBCFfJ4M51cws",
  "key28": "5fdLqj6JKPGkfJ8DLWebusDQKrgQUm8kkP4eJMu3EMTKJfEJuCbRQsiL877nhP68tyH2kUwVpXvRkA4iFACC9di9",
  "key29": "3ZWnbPt8ougD7yxS2NoytSUwwxuTGCL7wVWEHY5vsN7Sy7sZKaWwdiBzHFxich7RQCgL74uzWEcYzK4uUuFhHfx4",
  "key30": "5FC8eTsJNwWpvETb64hAMf4nX6GUJaYUC4bHu3JbP1Rei5HNMgiLWS4rxuFKwAvU1JNF99Js8GAoc9NtbjX5seJ9",
  "key31": "3RTwPbVkH3XDKzRkjotnJeiWm4Fw43USTe6W33nfK1m4gNsLA6xZfbjMWjutPbT4ZPVT7dV8KxuJDs14JxoZ3a3N",
  "key32": "4m37Njm7xJAZqg1t7eEaT5f6t94GYH2xhaQmd6nhbx5hmuZDAe9oBg1ggJMYmPNGcLNW8kdy6xzyYh1gpms159RH",
  "key33": "5uJG5UmUHd3WxtdPdm99PtU3MJsB69esctk44beT19uipBdR7eQk6gxuCR3geADcWhgNMRwVymQWBCdnQrj3QGdU",
  "key34": "56uYWzqbKKajnh96MPJ5xQ5tm7oE5CtBa6Tpp8DhmwWgMGkt8dZcATqtumeT6bded8S8VvxPHc5tWbxFN1iRoWyF",
  "key35": "RZAi8JvNuAc9Qh3TvYoVd9URAdYhsKTd4wudS5sHZY6zxtU8tnxNNBMbiZmcB621TZ9bQt8zYwuSCkNVpQZWDoZ",
  "key36": "AVG8f9hWJAdVGixcMCeiS5sHukNsdGX3Ygt92jsRVQPkW7kStvSEzNj6K13pca54pXkMxfGuiAB2K6kxRfh1WKo",
  "key37": "4XDju7ohGBjLsu8ZymK3j7X6SKXH7bcQJuMeviASg4VeBb2bGgEY3DvwT7SgtxTapMrtnA9adtXDVcoyRTXmnGdm",
  "key38": "2tNs7YTPuRrj8RHNHLZqNMnXWTVDfrM3hTpybu7sPSiNxwq5Gnzb5QrXnd3oAP8E7HZS8eSUSF5sNCSnJ1vYvtdX",
  "key39": "5xNTwu8jbJ4RiN8BxVQ6mYK47vodoi83r4bYdLC8YapnNjNTLpQtpMLJ1nv5hamopGEcGRojDzfUCEhLo6rfUz8y",
  "key40": "aaggGBks2NBfCawEe9MXqmjFGmYmwmVcXbv8Pc72igYyNXkR6RbSpu3qJs7Wya3qtKeHXUsd4iGFo5Rn6yyx19T",
  "key41": "26zpzbh6amBfQKk8APF9LL1bc2NmkdBWwi3LshxA6tGMUces4Cg5vs6mnbLgG6q6XgcW3D5EAt8CExz1GnrsjCCM",
  "key42": "8AH2G7bmqQFxNq88Ja5HsX5Umj1qgKWXDrVUDkCNh5xXgV9SAVmvN3KLGwVkR7vPumbE96i4BZgwnNWs9LMHPLq",
  "key43": "daXmuVKCFTG2HWUUaDEhshR2vpynRgmRgmdgYZLcS9HUwh3XAab3aishcmmwwUPtAj4jmkCWCxoYK1xrivfgVbK",
  "key44": "2nLPm9PTtN7GES4sW1XHYmkGjvXWLPmGEyReKhA9jmbtZmu7gs83uwAXFzZ4GPwnYqjqZyPDBpr1Zfd2UiwegFjj",
  "key45": "4aVTa3iw3DThEz8yfgSZcdueCXwfKnzRtxKT4HonsucK2nPgyCqvX5EZDitLk5kQWkoNJQMtJLXSuH1RTPN2BnNM",
  "key46": "3tx1LfVQRUxT3xdDZJDxMDSth5P7sXqigBN8TvuW3Dgv4eHUWUTSDmbXBZWsyc3n9Av9PwfrPsfkzQpDtK4gNtdB"
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
