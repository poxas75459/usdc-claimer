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
    "4dc4quWpdvYpfzdqLwWGx6m4AU5VRTiMSmENR1wsfpmdq4boLcRjEVS5TJdUzavSwphWSgY7YipbmEEDoJHK6TSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogufMioyN8cPNfXC2WVTtJvBkaFfix9ngkb22dVGUUSFn95B5XDgcjvyQc4v1D1xZNtoeZcFFdr2TkVPJ9pPQT9",
  "key1": "3BrVjNmQws8BTyoGaY6t4Sjj3n72yCk5CSmTXFaBV7c2GsowfPFdadFJgHYckdvSWXVXdvFm9u9SLBvd3BNJVVva",
  "key2": "4HntXdxnYgKRyXvjfoHqFmXyJ34g5PTm9wzp1QyzQsnRc6JjswSD9CZebxvodroVn8U6a82fZY9aRdzR26JLAq4J",
  "key3": "2bgFX9dMyPVN9rn9Wfsd3jaNqq1sTQVdSdjwrDKSQogAdVJmoKdQSEk2qk4Hbt2JyAkcX5iNKJYnYoydTdGbfqw8",
  "key4": "xfMVufdUwrbozPNoM51xq5hrCqmMDEGh1BG5MAfL4EPZTvXCwQBicXohnusPxpvKBZCtjYvEhhCviHS6HNeVfmY",
  "key5": "4QQbpsUmLUhg1NvUCmtQ4S2VwcifM64bhGhX5dFnFqCegRoLDsJom4QsuS7JN8A15Mry7ZwqrVaGd34cFNTCD8DR",
  "key6": "4xtKDdLbX9nGHQsqR9u1J5G2bpp6ftVGYoLd1wLGXNMewwiA38Duifg1pZ3r5Cd6kck3kF6ZpzkF6TdPp2jiK2jK",
  "key7": "36fBgdqs7svRbwqcQydoGKKwVu7sTvszet7sGyTApzSm2iUEVq83ZGP2FvWzrMp2LDvXXbfVDvRgqtKnwykZsrEb",
  "key8": "2VGo5YXeJPPVpcP6xtAqm8fHEKnW6ME87KQs4QKTVknPNXkUbzb7cannE9hDZSN4hDtH49FcQ2mMcZXYU2w24r2g",
  "key9": "67VcidWDrHVN2VnTQ1iYBrQwqM5zZ1tsyuHkqhNpxGCCr1mpj2w83j46TvZNyUA7v61sy4LSLnoMGxqWXTF2BVsr",
  "key10": "5FPqp3nesaxqCzjZb96N2WaSSSsG9Lu4FXRFHuUGjgXupEBcB3GEsgnMPz65vfhxit8VaU7frMS5FbLgQB2XFK37",
  "key11": "5Txv2hDddn8hxDQRh5iHxuSgQVNcYcs3ARrWwMtJsjVsFKZMUThcLb1aR4nSgybumHzQWZJhU1RYoDLCJJngoBAY",
  "key12": "339dBXuNFbESGHD3b7GiTCcLr1RtGg6ygfdyiW95HXp3RBEKYvm9SwdY4whVrKhQi78a1D7jspBmmWSkXBG7eK2g",
  "key13": "25LJV5xyGFCEKF1w8EBGnP4Jz2DAeUgdUu2wnWVWDXf3rh8riiJpmxN8ifyPsVTmNJ5xAJCZGZDEsFNwvtyThWSG",
  "key14": "ExCWVpaYVvC6eGMg1pW2C4DAyzsx8j9USXHBCizXnkXxaj32DWaz5GeHo4JoePJRXRB2LDpShbe9CefnKzUhKan",
  "key15": "4iyYM6hReJPeAY1zkkRztLougLc3EZriscum1osopmcE7tmCvd1xvYCVFRQ11qaybNU8b9BhFA7EcREUMp1PbLn1",
  "key16": "32wxmcEh1FweizfXq7SkMUKmAVjZRiJYaf8dmwsembf2VX5yS5RZPEmQARjC7ABaeJnKmW7wAJeTNtqM8QQTxmNZ",
  "key17": "5bDT3sySzaoPiGCmFochjkJof6gdSZ2r339QekbP67K3saMWUARAgMrVowZHPiuhk6mDLMPtadPgCi8XX1VNG8Hc",
  "key18": "4CgVF19kZPReMt4MWktn8dS2PTrYE2mWSNNadU8fa3KtCBcb2cKMvnw5MN5j2LVdzWWM8GxK9ffjXrpVaP1rW1s1",
  "key19": "24vK9gq2E4eDURwU1LgmSwiLjVsRL4BfC5hAnu73S6QXHqW5CiosuFh69ZmbSwombfcVoNnkAhqx5ygssDAexZz9",
  "key20": "2TWYvVLrnTDHxhJDyFKaaWKh8PpYTCQ8Sy7vYjtNs9frwfrQnxyTDDSKF5Q4UAPGjEjsiyKKRS8a5Yq56vG5H9TA",
  "key21": "5ynQrQ34HLhTqPsfVdEHf5fdTXhMUWdnywuJxQe29jevopzbPRnZP1kKWZZqiE5a5sPBqWWfPSksbYHacfJBW46j",
  "key22": "4Qm5iUXKvq76wS2MpLsSSnhvo3JHkbxaDoGZrYZhnDzpmYVAgSGkBsgmbqetUpZbuGK7GzAvNQjnn4uATwV4RABo",
  "key23": "3wm8n5Edgt6kAqV46h4L8xPmYYt7w7bhStZB4iBYBk6zMJUHEkD8fVgXtcRMnTd3NvKcNViVvU9QXBc94XB7Wqs",
  "key24": "2poTKoRn4ifZjsBpyYY54uXccL3MCFa84UpLxDP8vyZXHpBd18YwB5uxoqV22Ptg1TQMC52Up8G887SmQkvUZKWD",
  "key25": "27VqBLD51acRYD83i2YoQYTeYuNyjpjbfHs9nzbkKunefTFE1rzd8ZaQmg61EcxPWy7EHarXGuAQ6cctG1yAEWbA",
  "key26": "qYEgZnkbhSxcT27evJo3EDcxj8j3YiNmj6UwKFw7WthZARfkv5XEBPy1mbTAgxno4jkSnG5azPm4WUnPCScaSKc",
  "key27": "5oTVJgDGvPhpy76NwbFggRewbsj9wcBxM7AVQ3cd8T9H58j7MVZKwMiy8PwqAT9tFnnqZ8yc8gnbRmfykinSEdAh",
  "key28": "pywGB6z4opDxpPkrppZqpmMWazCswqSzbY3pr9jHQw61SzXgTVg386f9LtKQFANzE3VnvDbP9Ley3X93F3XXwzh",
  "key29": "4KVDesQ4PCgP64yAnxPFooeHbTJdE6MXD8eWPbFXUkPG4jLtPUERqaaBwdn9GifwAVWGsP5FKFjyxPCb68qp5VfR",
  "key30": "5MLAGvWPuud5vPBtG7E7cCU4XivpVEmV2JScTe34VYgnEn9iLMKLTErnyVPB3BP6dcrZwGxvTnX4DycFAX2Em21u",
  "key31": "372ecZXny5Jj5YDHDaKDxFmk7wCyzrvtdtE2ZaE77wyJNaR6ELbyXxsZhZntZcqmW38RQWy42CLTKPha2EKrouh4",
  "key32": "2ePwvLWxcQtRNFkW5NhSRwzHrR4WovSADR69LwqTk1asdw2mAahPjCagYodpNPW4tZC398JGfbM6xk5mydM5VPV4",
  "key33": "4J4BynunHXmB3W46fP6P8CMzdr9d5aNqwmXe58p1NKymNWwxXixVghuVrcyLHq6611xmSwpYeKKGw6ZKM6ivdYU",
  "key34": "Cn7MRj3Qh4Kv9b6kffA976Ci4evUC3e2uSyikAguFjgDu7LZd34VqYtTve51BcYkzhNYPVbZm3R93RgxJsdpw5G",
  "key35": "2Dd4Zzhngz3EPYb7nV2MWU1hHYCuDDPXQpCs57SjT9xs9J2Kpk7RMnJF4mPhxQUk7uSscsFKD9PVsvy9CsDdoU1V",
  "key36": "qBNp5sbLku5rKobbogGosUbndGyDWjRSJFoLyf8vzoGT9Xw1qq3CvzNA3mxKWm5F5wRd1dJ7dfgnyehZDxGxqzp",
  "key37": "38YLDJF7H2KD6YX8mHg76vxKWPXRuLqHNZMe6s6yvGq9hnnvQMubV4S7sy6Uquktsc7o4JbdkAykE9pUGumhzaZa",
  "key38": "qXHpdyjP3VyCGgmeJz1BDsynU3NDFtWR5ViEmpHzKuvRBEGPvTS7dDBsD35oq3pue1p22MRuRaz1hJEgPfX7X2E",
  "key39": "s7HVxuCibRemRfH8RQzwCYmMcgwbJGdCd1ZvpoV2Tk2bt935hS6ypUoHUm7WXmwQ1pToSrW2CajRpEdpDjNrq9E",
  "key40": "XQc742H4VSs3wQ7XMSnmSwh1KrR8jErRfQy11kwqz9vnmv7ikGWQbRtVcHUsi1n5JNLLmWF4gSsMf6rhhFPAZDz",
  "key41": "3iMgby4Xdi92jqdad13aUQZcCrF3VQqpgFQsBjcqkPW24ei3g14M6hQH6QmgCjcNgjz8s4rivFLhmwm7hU52D6zt",
  "key42": "5rTJf8p26SnYRa5CUwBRcU7oUXbY6ie3KtV6zobniohJ7Bb9wPzUmYzE3ogqqtSskEBW1TacUbXrTBCFWgT7av6B"
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
