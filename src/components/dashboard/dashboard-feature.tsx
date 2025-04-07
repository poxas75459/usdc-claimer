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
    "yLNs8sq9eJQkgLRuTFexZXso32a3RuLtqDkWCFbCHhCxrB8uUss9tY2zS3jS2URjDvCfBLL68sGnyrhoENpkpby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56i7ufxiw6vGcETv37ccAk9fFJSKjxEwi3CtbSgMK9JpdZ6qt88eh4BkHsWTZEunDjvB8puCcjZmqj9m5uiDbMfj",
  "key1": "3GVsJHp7iCQiJfkc28tuovenXtK84egkLVHWKfNLzzMA3DHCCd4pZ6JEak5E99T8vysvFBgePkmxPvQfwh8X7xnh",
  "key2": "yheSWgN383rcz9nG8Y6W2Y1VdhGdaPMTLd1ajrMCPoBVLYV8kVT4B6hTPr6Wmw4pEgkHCRZ81iVeWYQyLFko6Lu",
  "key3": "4jMg4sKFkbiFquacfiuewqFoAcjjjUpTV3HKwb6fQnRnWy5MGyCBuAVVtuNj6A1W6edKG23HDPSWYKskS4EAUxJD",
  "key4": "D3EGWkjic9BrD22PsFkqYZKZ32WtTF3Fa8AfGFvtuoTBWu3NjcuRYyWjYqDVrsQn9XWKE2zVhi2vGtLPqbsigdv",
  "key5": "65cgRKBZYmKKGsFtBsLzZYRFYPxuHTH6viBpnmCXswHjHRRfTFdwY8VArX9gJEscxnvvczdwwgD2kaYPNS2qVRnY",
  "key6": "5qR2urQsrH8W19BU2JLUXQQtBR6DkxQxpx614uiGkQAKpfXcAmwbxokQDwEMvh7aQqgZ6ryJocq6pb8BgdiHKFwg",
  "key7": "btcbZxmzaN4MrXwHYotnUruwPYDwXthDPvqzCkV45ZNNoVFZewQww1zvz6TD8QYd5zgHNNRDzvTNbS3oDdt8ztE",
  "key8": "4Eq4XNQJPvdkoUzhi7cH5mhLAgC6Pp42awi73s9JzZsizK97SqZrMhgdEXKMgarCAWV4FZfrJYhqj4WyqoteiUEK",
  "key9": "fqTeefRBMs3R8Qn7ucUaPtbrf6EALNHdTyHEQjRiXVHMUDFTjhYS5NSBcgcxUqytAqnBEtbtMgxEfT4hzn5CSCp",
  "key10": "4FEvrjUY3kRJdatDmTJpxaFveE6wtBJoH4hQZfkhgxZFkgDKHRx2vPLLnqJhMjL63rZ74pAPVccfrT4ofBzAuYnt",
  "key11": "4Hf29x2Fid6WnWjx56WoVU6heqvGbcymUa8eDgehoCEzepaiSr5AQW2T88VuHdipV4yPmzUGULVD5pjHF5pV2y9a",
  "key12": "5siZTYj75tGDm4hj2KUMxue6xLeiZfQQY9NXaEZ67G1tc1Acmjg48Gb3qiDJuTJpPELhJnf21TbhNtChrv8d7gTW",
  "key13": "3mLs3EJG3Nm2UxQcKriamWxE4fuNzQHHvQ8Mzrqc23etLbApSWWmViUNwDzp9Sep7HX8BLkcviqtxzGMPfdyYH9P",
  "key14": "SzaDX9R1t5wo6Zq1pNKdkNppJga6dmztdX5dFn2ztY5BbGDFgeJTmf6LfzTV8m89ekFAF5mt6ZEJtPgUPDLk6Md",
  "key15": "4h15XN3j9gCiH1sBuNNEcnEVNpKbgHENHs4ji8GZQTDgApAqDvRnh8eZCUpFPqUKima95nFg8jiPo6GX65Qpot9B",
  "key16": "2QfRDxKjdRfecQpbbCjdtEbiFYwTMM51ZutASMomYs4FF3oUAF7WYnJPHCF5y5258MZVqAMR5GTTEVP8Lry2oaMF",
  "key17": "5TUVaa1p82rUjFg6B9NaVGu83YpcCDUwB75uhdWz7gHa7xeTKpeNX6ksNh4UKv3cRmhTpxrgPWZAZvZLpr97avWK",
  "key18": "CGxxGv8TdFDKqif4VywKvrCjmbBpr9wFGCdW3okyHpJ4gBVUwabNftPiQqycnjSKmoqy6htyNSsyRALDwruwvXu",
  "key19": "2mZTjpsZqU7THHkG2TvHzySJJKTzhZmmTkns8bFd2mtRswvM6KtsUKusjZu87HpUGmvqYVNPGdKT6gF8gQWPiQuA",
  "key20": "45m1Qyu9JxQd9mqiS8ruMtdjBfMTdjBo6ukCRnKJ6BnDZVPyE7Md8DnKJNPwxGkaWcskcSmbrwBr5ds776MwG22u",
  "key21": "2xyL4ic1sDuchdyMEGUjtGKeqHV6BsRi2gPfQKavpeqoEXbTcPpZtMEhYyQgDscZTioeHSLaPdg7SrBByDQVHjac",
  "key22": "CvhhbxyW6THMvm9ZkrGFsbyytxLii8UvSH1SDyBn4hwWorZL72y28qG4jVTeNawfKB6hffP3GCuDErcV3GzRkD1",
  "key23": "QgKwkes5moJss6CKjgN2xm2fkKpPPdJnJGW1QzrDuXroTKGNnd6ZZUnLSeM6xKNsTy43JfHrEPQakP3HH6qYxWR",
  "key24": "4DV6EYPxso3SUvxFqx8NosBXyPY29YAG6HERrWttkgv7FtbNwyarVMXM5TqQjufR7fzAQS8akMtr4UY3fXYa8iWF",
  "key25": "4zvyRCie3zLmuyb2LUMXxLkbG91qLGqGyqa5rnDpNDJ8A2PMtyVvprCjeFirXsHKpdEbgcSfMkrRD91MB6kp8UnT",
  "key26": "4YKzxfDJZuLJVopHtEFx1zePMPftXfRHg9uw2VgahowxscHvsP91QkwkWRAmWDpMybSH3pGz3QoE8QuGDwDTNcSL",
  "key27": "Du3TH7EgVCTW1NEXYyU9JPh7j2TsEBpueopi4RuEc7fX4y7ZHsr4yuq7jiqFU6cFxSyz9Ee6X6eRma2Mvc8jU2W",
  "key28": "2G6eyXh4Pj1BXWDVm7T8WzPCrmSVxUGJks3ifhNjZPfR8qSAwj86qgHk4Re7QVCzj1rw838CHvHZQaFqB6qAd8dc",
  "key29": "jarzivp5jjFYJmZoA5ULshfurBHvrKCoi3CBsgdfizGrFW6qcqea6yR3wWHmuHirbqj6BjmbJ2Z1xGjUPvUFJyG",
  "key30": "2BTTeFTdY4JPt2x3LM9pSqhFfFudbacc7wRpWifDoL2CzDchsEV3DhsXPKGJq6SbSjfMVmZFXCcHiLmpnQVettP",
  "key31": "3nrA6BWAjTDoYardWJMwAXUmpryvgZcf3ED79dLCFQMqNZNRNV8dTby8BS2CiiTAhEYyuzpvbx7dVniQ7ScT9fJS",
  "key32": "4wzCLnHGjPtKbdqWK5tidEWSy7oUrBRFo8MQxWBSh93qFKgq3KT8782auL2SMsH2U9Y7YtKKb7y24dxXFayuQY4T",
  "key33": "3n7KCBrcFhgdNtLyXSeE6LqFzNaufvGQKy7nfDTxECdwmZLbx74vq7iJJsVb9KKQsQKh7yEgjBn3D7CfSxXEupCz",
  "key34": "4HvwMNpbrVfePZxaLkN368Vuz8MTtt3E4d54EFgCHCoUXW8QhEgAujNPH86X3SiResBgKkpybCADCLyRh1LNJtQo",
  "key35": "32y16CCKrWxfyoB8ZpDCHKicSqxrfAZLgJ4SKvM7P8XTZhZTtBGFaFJz43Sc5GnqvQ4SkFVMMyWRtjNicFZBLYUV",
  "key36": "6cMw9mk7yrjUACqrbgb7V7UukDnFUzC83g3gLPteeRyqprogS8gmgpu7dBtmJxeZZL2W8NTjMKGcp7tARRb1eUr",
  "key37": "61yvYXWAa2MmrUbtn9SHkZ6ChEK9Udq6pKe2L6S6CMpa2JKAACswhcSFjWGgCiaHfPGMizZ7aLPJrjE2VMbivcbb",
  "key38": "5b1uyBdXzEL7dFJGLnpK2sf1xPYcmm2ejY41H1jdF2gmC5TjPYa24xQdC2zH8RsduRwxzAGH6gpbGqc1wetALTUk",
  "key39": "5EEgmNJvbEyLs1GUqKWSY4hHFPCGUTba4AcPaXaFi1mMymwuaUEQRVcGYvCTjtjzG8rTUGeEoUNWPM4xge4fgyWR",
  "key40": "2JKifd5Fqn5V3G88xcAuuUdajwWCNUL4VeNodC1ptKB5c7PuKjnz6S63QJxmPy5JnrFvhUtwcb5terDwdcaReSS",
  "key41": "2qm5Un25tvC3ubrYj6cBKdZAduBJrJn2AJV3P26Vy5PbYR11pKLaryV6zFRaX3jMqdvdmhWioMLAjF4AXFNVjihr",
  "key42": "i3BJ3pcWMQ3CqbeRa8jhEpYNYKpPtMkUMsNsbSs2YWcKi2DcvbtuzfN3AwUunzva6HHd97sLEeZ4iHhisgg7g7P",
  "key43": "3BbG6GB24XneTzVQaZ7wtV7Ma9FmKm3g9TD5bTbs21V8nFzcmRDQZuwsFaLsy2sa5ctMy2Se1qstJk7cYfQSM8oq",
  "key44": "63fHyXp3kKRAn12JUxmHbWnxoq1mYiMLHrLSAxBqAW9E4kANfgUA65gfd4i2reRa5ZDJwEMQ6MBk2x4Uh6rF8DBL",
  "key45": "xXV6aUm8EH5M3aTJ7ZpQ6SushAb82vPva8K7XfPXcbCNgJaKvJKfjJSccV86LL9bdPfPsyJrPkE78BxMtMq1zCT",
  "key46": "3KxwjD8PfqKdcU688E3PrZgnyAcxDkqiDhPvNBPd6zYqD5W1LKyzZU5iBV6npGGqLsMcFivM5niBDTfarKC57f86",
  "key47": "2Tu2qN5k4J16wxnQRQc2WkUUPwmH1djv2BYVchwQivWap4Ep7y7TyapUcNuSACPfbFNPQxwvbfeVZ9w2jVmxrrBo",
  "key48": "4qK3MhEATWbsiyEfj4VeeGKcsrVQhvb3iKjzDFNENXxyzvyGsosv25ayouGETyZCAGg6BrgmyLiPEsXzNFPKBQDD"
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
