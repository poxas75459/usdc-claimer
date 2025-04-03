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
    "3sQgH4Qn8CFLeHJJ1eo8wu5Qcp55do8GEGsGwgrfkvjZCRMXLBDJwUULgyWcrdGit84gUe8SRJneeXQc5sWEP5Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LH9REy8yLEbudXHSrTdqn5dh7Jv7BVLBc28qZSV7a5xar6VHBLfg7zTEfASREJMmbUimytkMcybRoMjxP8x7zJE",
  "key1": "4ccWfSZY6XmSjRk6XZ7rCR1ccwcXFYvXJBTreundpLk8WCR46aaEQ14FA9tV78CDsyEJMwMuyxMJR51odM4bNjPm",
  "key2": "5nt8gDxUocvvJQajFKnGEEhxAA1F4reuhDQLpu78oSxX2xmMearxxAbHE1UoPgVQbkBUuWsvVDg9h19kqF9tUXfi",
  "key3": "M2vBXPzwYGgQiNo73VabFS8LGS4xPLSWFZwhdmZ6yCzHEEzbmmBZbgRi5sGpSFQPLKh3f58XqBF79pyQPHMQkca",
  "key4": "3S1BfGo6B6wjEnAGy3T6CAcKkeKxM2yKq2MdUknUcBxCQo5fo7KHrQFA47gRJpFCyh8kzuBAFuXYpxxCUjiEyCqJ",
  "key5": "4WmXpZJfGbQSp19EkDMdpxuEecuV8iChVDHKyKjEBHdjAEVAEzbeq6UTKk5dVSbZ6uaxhHK27sCj8Dn4x4R8Bohk",
  "key6": "BzZLB64vhC782FxRL6zX7N6qYc98vRi59iQQaiFuDpGB3beDtmBvummUsQD9kDq85FBM7ySueMoMThd1cZFC2mC",
  "key7": "4bpXbWfMtUBj1DKWHHdyaTfUmvtUdFUFVPVQBcFc4nPc6RYknFJ4H9M5wDxRRkNNv6kujNCbidiqMADrh7DjMy3k",
  "key8": "411KapEeTZ6HNQmJTrwPBuRmhPfpgv5n2uqFZfKjj3mtjSkjhrYgdceoMJWFFNhcQnuFS37aC4L3foceNEQrbXZB",
  "key9": "1UPdb8LDxZ4nxehniubB9Stbcnoq3yQxWF1s3GUM8mFLxwcCuCB5og8vK9N3WvyYwKdnmFgAhgmZxWSe2HiSycv",
  "key10": "KyV1mPe6FGTv1CxgctGZvUmSCB11Mwu4xTUD9UW2zLoWgyZpd98KC25wtksj6qKCoEmRxqX5JnYDRmys6EuQS1G",
  "key11": "3wh9oPzV4GWFbRBuWuGT5wtTEio47yhqCEnKpVmAyVCUsSnbBwDYD2Zfesfk6UuMZ3xc3AHM3MZC9d3PCuBy9YEC",
  "key12": "67cAwWkTnFBcQSSvmBG2CKB86boGvRAxSU7q8zj8fnGUVV4XvFRAqdqBBgfgQ4NFEwKTcJTApoh9dDGNYHnR3hNx",
  "key13": "5jQxkh4jtPcFGy8RxDY5xN7u9ut2bxaAV718Nc9fBiLfX8qzTesvkgAxdUWSbS3HYqCNAHcY6uDNqVaSQARWSZi2",
  "key14": "4dFbnjM1KXjoaD6uiALdtsz2zaX91vD7P9KVbGuFbjUgJDb7U9R14Vwp6CSoR1fgvT4jdCaqgGesSCcAUBQZyepg",
  "key15": "RJ7KeShyqg11V8dRUSesrfxCjXxdP15GgNq1SPGmGnZodPcGdmE1iGpKZomXtjVU3r41QCJx3bZxK7t9W7kkLjR",
  "key16": "3U7Qp7PXJiNMDGAqnVTEe35ceJr9jMm1KAdQirPNn6cGXpGVBRa2unoaB2a8LsSCx5VYTW3nzusZ7F97BMHynMFb",
  "key17": "3dyU4GfScttvywPt7RcZbrJKucixLBn3EntRcqxgq9JcTaMri4Xz95E3CFvEUKJqHrnEDQU5wzCJeASHxxc3qiqD",
  "key18": "4cWKXka6eBMKr5ouEprSAVy5Pz2X4DgXrMQKequubcRSDn8mCa7coKQxtvcDaiXmPy6fjnTBtjigdvLiqcyTggtR",
  "key19": "4xvhJikGUc3Lzxw3yPYau5wwTJYZgox8W5heAcXUacnKMAcsonSa9VUqKBcamn5RRpxV9J2eGGJXHQsWT4tLazSX",
  "key20": "3Avvh1pCgt9samHJt4dkgHuTgdLYd1KMTDJRiYyowSgoe9tr6h9fK8GvqZs4PAZjLtVTZJ7uVP5ToDQWA4kbZhx9",
  "key21": "5bLeM9pwnY39RNAPCUdJ5A1qVUyhVbiHVAck6H5oyzSe57VuoMj6gRzWrBP1A9jAqc21qATsx1jmFWR4vGtUgiar",
  "key22": "XABVKkKhasWGrymxpED1adMp1Qv7dFLULkFb1kKmbFLdytM9AskEVTAW9pg429qdYr6eB3LCQg7H9csRcBVVgpj",
  "key23": "2YPm7nentkcgR9s1JJKJ5NRnQn6riqgVnEnseY6gx6RxE9gY8XLjQtiBecFh6hWNRnQqcSyPF9CM3jtiE2xoMECi",
  "key24": "8H8gK3ZrM2cg76pxDqtXYbLFJVAB4yuZiPEhrcHGKJhCtsMiSvMDdHeuUBCwocG92XjeETnSh6rHUyf6nHUkQXP",
  "key25": "21tv87H3rvxSsHHThd5JxU4ZT5yzfiWMndfpN8YgFwfUSHebVpT3EMKttQoCaDSAgw8cStppVpPw2qEhDjvBC1EE",
  "key26": "5pvTeMyEZrANdNXpQ24JcYFhdiuueVuSonLedWLf6GvTLCSAdQyYshC5LMnydbg3F9KCzdjXgJUosvKCNeBD5Fnx",
  "key27": "2UH58SsCAXbJ82PdryaCtfQbEzGgWZHAGSwPM1U5mKAhNvuREfhrA1i7mqrj9GtYruZtV9bwehhJa5jzPjG9uLto",
  "key28": "51NPaUuZ3usozbdAnEUraSFJAsoRDqUn66Mx6Dg321jtHVasNC4kCqLzmgGVhFtEmmAPNbSbaMQKCuGTXtGquRmc",
  "key29": "32hT9C11AGHmEsYG9kSfWDZgaYYNceo5FvTgvoFcaR3CcpzRtHE2NqNv9v9a4XkSyK2soFLDbZUABvMJSxP3Rt4R",
  "key30": "5AYZ13juyZPyoJYMq7hqQSU12RdmEwa8AsVmBNeTCS9GXWdBvqzTuhxtmTz5JvFrFJQc13XQudyvzdiCPLqQnPb4",
  "key31": "2t82BNtN7rWqEj6ktQsfSquTeAy8YiEy1yLSc7c85ywcaRktVGtTga9BPcfdtLPYV1423qLPrEyX1USjwrkDsvSR",
  "key32": "5WFKdNSdzyfEQkxaj7PLtZqdEfK7eUsYatmyRbards7bxhhuDMZrfTaxZVbQToAGxnc2PuVnpdh6TFZ8ptwHCFCP",
  "key33": "3uF4DBNpjY8DW6qfhJEnLNn5L33HBZkFjyK49iJZsh255onQjiJW391SSZZZFqwNo11tgq59HiMV23bdmKqWGhbU",
  "key34": "5T8xh9nESzzymvsiy6YABQekSwebF8xQCTk4cDMibD4jyrmMBidFirXZ27F28pDKofL4tDmfaeTApMTctUtEk3aq",
  "key35": "R4XqqdtPQFsidgxEwTgDJvhfPa7P8AmxpUKoC9NTgyKYqYkauvb1hLNWQPEgsU9WWbTNcRfhLFV4WPCm4dnEGu1",
  "key36": "4WuxVGrkRns3PP7RSaBG8vPMCwReSCNcCmAMGNmbJMxyDvNEG66KVAmLEgvpwJ9r5r6wWetY3qhRnxVYvcxjXxUs",
  "key37": "57p17p59wxvWvvwCAAF7tRy25QpEY3YDLh3JDpkuGaaJHpq7eqQf5VR4hASR1mpfWbLF9Ke1JRG2hZS6tCUD5DWX",
  "key38": "4PaNxMowJSaoUmRDBwPX2o1myAvG7bLQV6soRpJJgKqPtMYAi3nyMoi8GXg3xdUBmGQcpuh6Np7MWk5LkB96mDK4",
  "key39": "2UTBuBuSep8dLWfcfpGUqdXV1UpKfEmqZSWPhvsd2nvZqhyYbUFLJHvyDMMQUcTs6rkxFo1fc8pf8gxxrKoYuD82",
  "key40": "2ikuxixpKp1Sj5ThUhHtRbwivDBAU1Sy2BqXh92fMjd2SiZvxYKbCPCfFijuETs2Fms36Bd4AEgg1crxyqAP9m2B",
  "key41": "5pihqZLARJzmHnKbgUdHy1uv2ZAyMx1Z4PMyETo1k5rth8nsHHcjwph4jzncJBCcfxSWdDQAUEebNcKk7osfEdhL",
  "key42": "4YvXbuuhcut7DLMGtDa5XKMktRwUu5YwhBh3twLAPR84LvFtUSRsGryJNdtwZWBytL1ocLNPs7WvSp9UnvHbg3zw",
  "key43": "47TYKADoMmrNe36dLmAUpLCGMpTUcpr6W77c4BuKdaLCGgeVBLp8h67odrfjCq3To4mTbPQXBvsTVjtADBqo8pzi",
  "key44": "5oasF7yG7uhVoXrFc9mwzHEpkesqBnnfC5aTmuhmnHwaQkW1UUqUVwx91z333a2r5edYxN5GLSSxzsLRszFHnM44"
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
