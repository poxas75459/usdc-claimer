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
    "3yRuiCTxrbH4ETZBhypQ1ZHVfjn5CczXGEY59JBbNQ8RvAGM93VaLg5HQwvD92T7gjoXEM7DcAVTLz3cVQ72rUKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uuGWy2ThhLHAxXekWbzGbZJZsmsZvs8uPYePGMFPU58mTX87914zFdSwYBjKVhPrfgup62bQthfEpMJH3AYGdi",
  "key1": "xbEnMUqXDA1DeguPhG1eCtor3iByomziMWTdasN4DGrfnCLpXm9iYTQq7hmPdExftaoyk5AZw2gNfFPe8RDdGwp",
  "key2": "2z1NCQs7mJmFfCgYxbxxUcjBwXRhBadPoTsPYtyQyjJEV8n23KTeSfEsLodNZJBPPgMhs2YAtA5Tgu1SdvjTAN7e",
  "key3": "4argfg1Yt5c1inhrZFbbJh3UG8SMojXajKFQ71eWyGbr5CEyzUBAywADrCdYfvFtBu8vG5KDLBjb66RWSjpTXivR",
  "key4": "TxbZrEzJFDoCmb1kCaSyxxEgt2ejN1biWSTug5yGHFeaw86EjtUZWuX8Sw8vfPSFnNwp938sNCGw1tH7u5cgpwK",
  "key5": "XGFf38dPX2kceds5LkvssCJeRTKfTkkCb9RDXotAHdfdSrhjgasuLW8mV3n1ayjfhmHVYNHHZQW8BLYWHEso4Zh",
  "key6": "5P1bP9u5DdQtaseDNFdMQuFPewWek2hEF7PD76GvEpcHU9YbJLLiDajqFrBqTLnQm5DKXQQoRQBP6KkRJcsFqZw7",
  "key7": "5q75seUvEptHWxUQyLwnir5x8nScjDRhdT1Mx5MbLtQSE1H4NbA55xHH8BtgNri7sxHkMt1wJzpdBxtyMVpzfWEg",
  "key8": "2iYV3mfigLrXgizzfQPwsMJhasnfcCNdMANDaNYDq8eeZX2qwaoU3ssdxjYEYrdARocWRribrjM3hmq9awVXSizR",
  "key9": "2Q85xEJN76jD66McvvunkEs5uWqvfCdUnYG1YdqwQ6Zg9P7GxkLLKbY7AzvMkv5BPgZLz9rxu1yNBqSqUsFRpZM2",
  "key10": "rp62F86A1ebMKhf9uHQRc1U4SFPjZKWezbbSZA6hJfQ4VXFpKFuC1ggAt8uaszDbvmCGDtz6BA5eYtSsvZoH4br",
  "key11": "Ja1F66ZVpKTfAGXZB2qmT4dXPDpfCtMYMXmSbbYjgiFUyzUVv6BGHjNsPWLR8X8URbeRQPjpbn34Sd77s17znZR",
  "key12": "K5JoYMkXzBK82LdRUQnGRep66tN33A5qTBNBS5qhvqNCHdYY9BZGSCHC7Rmx7TussLfdk8RMs2fonwAtZuaM8ic",
  "key13": "2d4AY6Pr8AGEHkC4FGPaVtgkS8TuCVu4XsVbaJbSPzq7T5Qh4gjearB2NkJq25ksrWKm2hEhrwpCnsaYT2bhBh5x",
  "key14": "4X5MzVue8omQnhMAqjL4HeJt5xTCa5nNVdWgdWoRo89NJA3hLF4h8H6rrfNWbxEVr4qczWTioXjtpAZdikA7KEf7",
  "key15": "571CgSspkZ7X5CWEWVL3RAxgtzEPQ61jcLqqZx56PAQzvan2WxNQzM5tKwErDCR6d2d4GVBUe5bvAM2wY47F4Gei",
  "key16": "KHVCGY4kwtwr4SdxtfuffXE7oaxVCKhz1hz3BbYMvT26PkKQLNWwoGvbphGvTvmp45tyh4aubiAyDsCR26jNq7k",
  "key17": "2dzm4abHsw16rhRBvtxRDEMBDLM2uNi8DYQ5u6aoziZtWRoSRUYkQp67rxF2oWpB8fedE15WuLwMfryLe3pNn14G",
  "key18": "3K2h29sKL3dEe7B8cE4XzhAYkvYtH4sZbipp3FFqkXKn7KdcRNnRcxVSicUWNzfeu3zbihyoUhwG9Uh4Lpgi5WxB",
  "key19": "27FuHqG6WcAVABbGv6X7oHfhH33vS5M8LX3ZkypHGrkao7eX8eQmUcsWgKopCsozAp5SGcK2wZ8H77MYFjSqT6CC",
  "key20": "2ujf3n7rAaB25nV6mkFzPx3yCGDYR375EWo7fnA1b7G5c9xd2JqZhAFEyoBAsFvnt2yFZFnRfh4H29aBBUSjp1XV",
  "key21": "4x5bozkiZFWfg4bYBGvLpfam6Uze9rXYdUqjbZWppcWb4oHp3AvETUFBf1mDpi9k7aRTdw5dAkFn7YXRhRZmaaem",
  "key22": "3zyCkvCMgwyuM82ZmtST8bo3WMUL5fmq4kSBKPgVsfNWHkgkFENK84JpDF4nfLXQ58YRfdJfqu6EnXALKM5b3kH",
  "key23": "5ckpDvgqQFPkkiFeWF61EmAn7cQYZVCx9jk9q4WoxsLNEWX1UsvoSxdHPtZdZmwSoDw39WEZA2M778tdMmRxu3gx",
  "key24": "xXPKGVG4No8yiGQG2LqxPhjVfwUCsMcKXeFvdwsj5vT3xvxbgp1vrPBPfPxeQyQAurSZ735P5JQ2Viu3NqVMqnL",
  "key25": "65LtRakz5qnYLKag79YFbhiyxfLAfkqpiphNusKK3nnNViSEtMw6MVyN7BZWTQXmxoyuK9XQKvhbNcPXPhK7gBuZ",
  "key26": "5f5FkSkrknKd1ZDTqCnogYu6NP5UmsCxyuZZWYyvio7HLqNqaYu3sjKVMU3tkHcFPekSxHGFsxFFEy5a5kG1yQCW",
  "key27": "46qhFwjKKB67DGYFVGTkc4Cgyv3DRZpkakf4quQ6hHGdCAQPGLr9G8EYSWbAU24fYPdoNcZnqjDouzu9X7c3T9MY",
  "key28": "53E2WiHBb4Zz8LfqaJ9cC5B3zHUi9UmiAYsT6EjRzrUEC55fz5PJ8oJvVNuzJQNNkesRS6KmbcR1HDvgUgZhzT1q",
  "key29": "2LXcVu9zKfQHHeQ4txckwyRV1cKHrkKhbVrVPJMw1VJBW5vrMz74LhuaGufvKJV7J2LutSPXRVgwhfwYzWP34FGs",
  "key30": "vnFfUdHb4cHTB9TAbdCLpMwanvrfjzbBteC5qP4BWmWLeuD68nBLnbjopHBu3VYV8v5XQqRqWJMisL3WrbRWHUR",
  "key31": "pfHeti1ggg5nZMw6bymPPK4W6unpVqi6aKhe9A57KWfaqY4e2Swp3KbJABK195A3bcCr3vSF1seZVW32o3LBpND",
  "key32": "sEuiHijw4qHWQwG8T2EzNnfdkiqAyaf4QGML2tPLeYdvChgTWGa3ouEBg8voDo3jXND145pgFV8irpNZhisfEGf",
  "key33": "2EFYxA63tQjZqz5VkYyUCGAZGUsgD6q73d28sAj2zxHFvZta7CjAjNvEYoaHnaSuQjAf2GqfRZvRgA4HbkUaHHDd",
  "key34": "2rg5PtgbckReburGeecfccqPdsyRcdQieRhqt8RGZ63Xxik92Gp1FWWSfXr6GXyBJQdB3C4WSYfHtWgUiafcxkFt",
  "key35": "38UbpkJe2YyJwrViDynv4JvzvixHcyn24hoZEnDFv6KLWE3833epifRtdVrf67nry6NEmgy3poFsBDsUrLuGaFS5",
  "key36": "2WNwMpnnmNRqqwhwTr2w7MHsZgQwi8tnhutWpMQxW7GUYus6KyNcbn8kmyARYSeQQoasBYzKfQ9FdurCkRtDbsbe",
  "key37": "5mhcDC5JxGewnukDKm2ynTSPX5V52iPNmeQsDZ9xcXCk63grHa1X9MjnDGLaprr2N2MWLPVrA6sRGkwsAXGCeQRh",
  "key38": "3Cp4ikQJ8eZwaXHAwgUJUVeqLQNZ7728xTJJYpUxv28SHDk26h7QB9DDVfpow7vr7D7wWxUDaGQ9fk3FUZkWS4nF",
  "key39": "5wnKo9YU7JnpzNvacnG7zvkWUWZTP2ziKqQKCJ7GTHyvU2rVWwECyMTfvxtoB4gfDGnWVEeCWtJAQyvjpfZB9mMk",
  "key40": "3kESdwgQjz8qrMzDoh3JHVcHwuMTAs6daQye6FDBHHJy22fG25kqyhJBhDMUjPUjT6DSLjMAPcA3rERXCHBwTEPE",
  "key41": "2JWWpzZvgXkE74XV22TwPjnMFcVDbCbCakcEsRk5FV4GwgpaKvqQCHDFAgFmwJgWxa5H8u2Gz2bdMz9Ph1tEBRJc",
  "key42": "2E3RpaQaTSKsp276He92E6UTNfGS1WYGZaDhDhsq5AWCxEZ9R8hiw1MnmZ4Nyu1Hxh5upydiwBcxhJK9KT7ELnV1",
  "key43": "dZPghshh4SmbrpJcYBjUGK34kjCkMxNQ1XWfATg3JkhUjiEYxTc7Eb8miHjah8bEQAxVEB3Evebp6BpFUeHD3HZ",
  "key44": "4XJJ9d7csqAgKC9DA76e54x6pimVnyoRrxz9r1Vxa8tb3Pindc5o9XyGiJue3Ffa31nFeadeJDoED6HvSKed8VHx",
  "key45": "5vruGdstTBjuRpX3s66YSgdpKdEBim7vVGD8H7CAoJwqEm694hXXR6G8ytuTwuCH8wkuMLVGy3QTnctQ1u2JLV5t"
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
