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
    "4LoqiFszHxMucFiq8NT1gLGGhAVngxwW1axBusoeFsWDVduGrp95HPRxCRHoJdTLuMii9ZiDq672efJyLf7J641G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEyddGgyP3jEno8vwEHzYpicUFLrD8CsmfH5we6iEJszoXCsRpMjEifHeMHu1ALimWcog4ZGSFadKa1hF3sjGrF",
  "key1": "2Ps66ynyLdxpwvGVAuMjYnFcmu1rETf5NZTFxoTLjg5HBLr3wcQUjVMned8fQoDsQnRki5nALkvF8QD7KzPmddKS",
  "key2": "nqQxheGWJboByThMgs5X9aUocqsD1DF1xVt8PGPbUdkEmvp9pPmdx8sRAeLVV8XJk1ngHn6ex3b6odNMAEgt97j",
  "key3": "4Ywv6D2YXGxkJxT9HvxAF6vFHBBN7bkkCuCDUo1yq2LQBuPp7KsvudceGyoNVwrs62fJxzPc8ubvtgCgpDJZDj64",
  "key4": "4pJo1DpX5oTgFd5QeEetXq5yjfBE6RMT3eJ263NgzhfPn1sCBeQdgZz2jQgS2drfYuW1Xw8oU5peP7iSJmPxgt5u",
  "key5": "3zajfJVwg5ppLYG5rnAoBsJdiRohGcLSwtKL3EXmYxJubDobniZsb2ME7AHrcw3sQzHucmmvNzesrCExghw7YvQT",
  "key6": "34aZnXcPaWzsgaj7Dk9LWuae2V8TLLhPS5mt6pVdzcRUAgVdoasspEDFL33kPb1yXVrA5kDqXmaEay2v3UunYaJU",
  "key7": "4nXBpXrmJoCmsRDueBGRKZ5qhJSVUMzRxA7iKKGyddkK9Sfp5ZpHTw6zeku4nc98mGi8Lr7rY9wZ8xYMoVmizkYG",
  "key8": "5i9Dk9K5Zsip9qECr99bC8BUW9HPPeCLnztzsoRYovdbwMU8ouo3zxFT5JoTWnM3xRbFUadEq6rF2FgKgmDRg9gs",
  "key9": "2QJB7aZZ1CgxPgzA96kFxoGxVTUkkELikP6xxcSDiqeipbUdSSuCsNpwqAMyAceHbr7MDimU1Nz5jLTTwD2t4TSM",
  "key10": "4ksCv9b85PEgQnTcGTr2e6Q8dJ2uS43JiqoQbVNGZ1k3intsAiy9uRskzYV2DC4eeQchYczRRZsvMfJW6WUweZet",
  "key11": "2dxrgD6z9mfKTcG41EwsNJSfnZhXRPDbq4H2sBJFQAXzMmz6taYajjbgyAG9GUHQs7gG43ssY8vK6aFq8KXX2pnq",
  "key12": "2UQD4UXmXBGS8Xxvp8TYJpYKihQ9rYgZnBqYj7q5QWr12SEoPHBf7NdPjFSVVF3edKBherXAvRGVWaYpxLnxr7P6",
  "key13": "3DTdBvNjjcnDNqhDk9DjXguXpMB5JqyfTVswwFDUa2dKgG2wB4jWPsg1wLtQCVdkyfMm3tQpwPwUGaixF15bNLgz",
  "key14": "5JGFcvxyCyZ8o4zqzyJHdG7gMVkguGSKuazRGiGR2dkWNJkmaVkzge8VAYqVXtSGBaQf7GevxUo7afvHwX9bKvdo",
  "key15": "4vV9GyDKhpNS4Lp6iwrMQkr1PfQHip3a7n63X4atFghMf73KeKPbvt3yE7vydGUiSXqeG1FzZWtw5NNhuSowzCKp",
  "key16": "enwV5BQo5ZgfKNsCEvEiQ9Bwc3dAL2wJZ2XTg971YatVsCgs5tjacn8yymE8Nt7u8yyRBKfc29tMH6ec87mE9Sq",
  "key17": "2NsRJuJoZkQjiM1VUskXUAY2wD7sZT63RDo1qA6s6bkUGEcV8zmAZJhVH6szUGr6m99F8re7ENgLjA6ZA7G75Hag",
  "key18": "5g5P7GtFdKW1J2j7A61tgnS6AkW92gtpL5G6HTCQBRrjPN3HquKBSLKexq42tvnKsbun6wwY2ddceN52NfLS69fL",
  "key19": "hnoqjt3raUzN6SiZpFsXne4SxyNadP2VQ7nQPEZFB8JjRsXxeuBjVCknEvcD8upYpYCeMmNSGruT8gvxZ91o3y8",
  "key20": "2FkjEnNbdStMo127PCPjnRLaZ6pFrQcqeFCQtkTrXiBCWTxB7ZuYoBvnjdUaPbidutaf4Skzm4UvgtPBzXYdsmdR",
  "key21": "416qtKXTK1hLFFRUXU8twELtBVAgspLUnqFpTBhjDx3rXG4PBZkHAQp14NwEV9CTC4sEF6fUrYrk5MfC46EH8Jvo",
  "key22": "3j6F7t83Tz16wgYJeHfXFMxY13iorCkDWPx21rP9aE2QUrPsLYaSUb41fs3FexYU1gmxT9pYzwGu3iQHVBNfBCWb",
  "key23": "3ZSHFA5r6uTiTCgjbU13z6SLHzaMn28MoWnpTLCZMGLnxbhqd2yB9f8Bh7UH3M4H24JqBbew59cnqWnLc5Enbt6",
  "key24": "5v9SSUna7fjVjzR7BNfCtP5L1j83hDCvirEswrYVnRHC1NdGkH3o5x7T1zf23FWNgzLsZ6qM3XpPZPthQERBZarz",
  "key25": "58HQAbxJqTVtmhrGtqkGXTuJdZJsafW7o6ijEYdHhUesShiZgyz5B3U8dtdQJ998eAwSgVdWXexdq1EXRUXgV1cC",
  "key26": "27TEqqRcdH9BrUhZhSTm1HxTyabewxBV5NUzwvR1K9cYtZfQb2RYzZEcBGxr92Gdmtgbd8CUFo6siTNajgnHMSWM",
  "key27": "KV2JiXD83vJnWcCmL6YmVDUqzreo9KQoJ46HD79jupKS1cbRnW9iduqXgT6JrqtH7RD4XfA7KHs3ZaS2vnwGReB",
  "key28": "ChVkh3uMtvRQ5Vg7UoLU53LF7hg89aumdczpAgrLMFtCDBDkjYJwYUvzT2D8LS3n5M9XTRBvKz4x9jmGjbByDf5",
  "key29": "417PLtRwXvXmgyrmXrw1btow7qkNHGsMnaDLYvSqscZJ2pfbdrjJRDXepbkT6nSZKrFfLMyi58TxGw3LuzuQgYHd",
  "key30": "6naMpGWyoF5mM1xRMyhrsShYfJhEyNPocWiLBSZB9vSxx38z9gFPb7MBeskAZuwfaxvTdfqKdvJuyqs8mPAzpNt",
  "key31": "uZ75ZsJ6Jkmn4x38Ey55JyjwoSA5UqBrnDpnVaJPF5C7FEU4j41QD1Ka8aLVCHTQCX9x9Yx316PuFCUqGomDnh9",
  "key32": "5QftMi57AXvjyfDbBcevyKuZFVakdt2WwUgwHR6f1TVnaSDNNY99eFqQfKwJgpaXh5GMwj7bh3KC8qJBN9eC4TdM",
  "key33": "355dA66GnjdNa5iN8PiJVeoZKyU98RnzkvKhzTVwe7dmpeRpe9S1YPBCGgAMyZswjeAG73wL2SGAs8RV4k1kkxvt",
  "key34": "2AQrG3T79xSo8J1VkfXJGVq8ZeMWU3PcRCGDHHK82DXwHB1WaX4TLXyQ4qxsNKipeQrJBgrTW2YScLYZ6ERwDEkh",
  "key35": "5W4YxYucmGQ9VckmNzvSAeAyovAJ8PCvz6Zeucdi7ws9hNwMaKFXiegkfM5g3ECmz7mKcQAxbNXtQd88ac4pHjxE",
  "key36": "5gg113tAWp5oH7tRowi6ZRVdek1DhXR7gojdat2ZhUXY8vT1Hy2eZcuY5SoqkdV4EdZUA57b3jpQXkvRuDLiFPcu",
  "key37": "5ro9eam1u2JGSS8ZW6W5hEdiSuoqSpqcpVCxYXcoYxvghp3gjWFuBhpfSXkBdGFZ3dy6EJdc1YJ1W6jUSfEDyn4g",
  "key38": "2REWxFrmKzDCoVN1qR2yPD8FS9fmSeanDym3R5a4ocvEXZEMhpoWeLeaMM4ib5VJx2feJXuiP9UhSufKtk4stae2",
  "key39": "2cRqGSpzrju6kN2sapHdNAD6f7Sx8PFRN1cn7ww1dPxgAR4gMw2K6bSrmagrQM9dvmL1i2VXMXq4MNexAeMpo8ys",
  "key40": "NM5qDw66TFUUGrz48a1fQsWYkeh4YfYh2FYJuve951khKX7drpt9RsvRpQPmCCt2eUdBwtByPT9dDX6rx4PwJYj",
  "key41": "5523KEDY7EWsvzfZHdVJqzxkLE2fepwLeYpz5mQ6cPrNrGaWVhTdfErJUEaPQTj9EnP7CQmbAoGM9KoBaZ8VLDAf",
  "key42": "2j4omirh5LTCM6fto458HQLeK7nBhMp2Uu2EkGrJ5dkpSvuRiwk3mTZzAS2qk8uC7Ta2huuWA4udqePuMDUUZ16o",
  "key43": "oFV3fV2sBcfZbvSfjQjfB12ZBVkXCjy5LYLYGqZNAgUFi1hWaSGkBv9jLcKJhDJxisRK8Wksp7iQx5486ajw5L8",
  "key44": "29XKjqYcu14zX3jwpBdWZcjwzCpbzUENz3aUD9wA9R7dWY57nnszaWrzeHxTrBRcA3fVwagLVadcmNnyA7BsSiEB",
  "key45": "3AetRte2kD9DFuc5Z3H54gLNknaGuF543zBhihDmgP76RYqD5uogQ3FAZEQiLkFr9ZJ35rxnvnavoRACs2eJQ1Q7",
  "key46": "DnrB6WLahsUMRHwa2pBAc9xNVPzqB4Brj4rityYWcoerbFdWs5JvUpFb6mFYbuSYM1q5sMt4Z35eDVe9HXweRzx",
  "key47": "3BXqqX1Fxnb7Riyn1PWnkFfKUd9PXm6JjyZqSDY3ePdRnnscXLGarxn1UZafcZfnqazraBc1MsTQgLVnNcLsg3pe",
  "key48": "BhMBkE8sdHuwouoqe8fkeijpvRDHFV911unwfVte2aeziS4eZKQEsdTUJD5FNy1PAqUWm2nbT3fa1ZgRzDdP8g6",
  "key49": "5iivEjodrkGrMvaYxzq1oacfNDLq9bRzqUrwWNqzR4fVEDUYE8xAqwV5DUxHUCq2RMLWx8MVFa53B7b5hFZPv2SM"
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
