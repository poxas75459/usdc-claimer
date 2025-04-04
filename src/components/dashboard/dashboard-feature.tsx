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
    "5RvZ9m8BwonyjnnECcAcH63JRU8PwRuwBfM8cTXcJysCyJNjJwU7VuHzbWPM8PNXbR4sDbqWVgyf9ghKGdrGrmD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qh7KASVkSHAAeJpZ1ouQCwJLrJVVzM6ZPjGHbYSmybViYAhwvAk6afSZ7xrBU6xTDDbnTZM6Tud1YnKH4o1VaKE",
  "key1": "45fvfUUd6XBFq6oAVi61xuXGUbd82wHoyDPSVUTFeN7QG7zJrRuL5m3pYSM8WBiioxudQwm9aVxFhERCzjCGB8of",
  "key2": "5NxCvDVXc9utsa3xkqPQht7Rv2AHv1SmNjaMmGonhD11DnqjUNXKVLgQvaEDbzFGsUV6r1W2nJbKtW5r9M8tjz3d",
  "key3": "4FgXTDknAPksBJZqRYX5shxewPLaq4D93YWZCZoihGcmAtuUT7HBneXiVm4DLjUcb3nLx7vL23oTbzofDwSmHDkc",
  "key4": "22HpCjFHLahxaUkuV4hRdxBwp3v7J2yZqSPNGfyhsnr9KoKDxebHZvypxuuk71W5qLh2X2PcEzXPteEWt1RQaeTN",
  "key5": "2n8DDc48nsZbCoN9ZM2gxVAci7FvcCzrhaeYiGj8MapbmAn6xtMMcBDiPP6cqVccT1caFYwQ57roSjRcLtco5avy",
  "key6": "mCX4s9kb1a8WUQKN2VMtTggeytrRBWSzNfpPBsJKJgJdU3Vocjz5ZkSZ7jPzjC3qshUikjh2PcTsx2TFkTJDENN",
  "key7": "2fyfzBnt4neFTwnWzbiZGZLAzZ3y8d8kxRgu93ZQ8jMECe2wT6FehND8ZT2t1XxMJTTjSvgzKrBQjph7UfUgFobu",
  "key8": "5sPhjiSbTxVj6NVXhQD9tHqFFZ1MvVUMZaL1XQA5mF6b13AHJWeRugYDmMDPmi3doDPXCyupbV2iSt1jC2zWEVcz",
  "key9": "5dz2BSAr48xf7tUzqLSgm529QzPn2zKaX76ng7yxfm8j6DDKJCRqF91KGbVdkGygqVgqF1FJwtHSckqfLWopLRty",
  "key10": "dRLmv2qjNECbFkCqUJCHzhtp6KeznMo6ehK5Kzo4PDW4zbDaN7cCAAfEF5aoGaRAZTiPBesSuUMd84Jp1vz5XHr",
  "key11": "3wFgAuSD7MfkJazwPrkiJSFjUP5kL5KxzG99L1cS6zFHVuUNiDDBgTgHQYNNp8cq96jZAULuGAyFXVSPJ4RcSMk8",
  "key12": "5GV6tHnzwaLekdQQo6woaTtk7hKJGcFJZjUVqAAoMHUnrNAh7B7XTaNb2PzfJKeZtSTqckCcJQDDaePxwwoMAWVQ",
  "key13": "4eA6x7UReg6PkGpwRa4kAgi2cryE94wLXkqq7vm9hW6tKy7wBHeV1uzuPZ4GD131ntgdPUsfBeacSz1BUfGS6axh",
  "key14": "4svdMuDhnPtDZh1WR9beAk8SruZ7XxE3tu7rd9k9Gziz1D1bGnm61VpvBdBzaQz6pcuYeniHABsFgJ6391UNct8P",
  "key15": "48XTwe57w2BApsT7RYmnZQuJU2mHAd2EojKkBvoW9NW7VGT1PVrewvp5axBqA28LwHkqXUnDaWo934nxjK5aPpAf",
  "key16": "3jfdLQ1wsN9cTvw9Zouc7SXiAMDZ52yg6vE5nozobu15NKYtsyWfvqV9UpYC9oADY4ikGiXnSt7Tig9yRo1jLsDb",
  "key17": "4ZW1DCDZTKwmXMQ13zGrhjvqhZpX6bz19FLyo1ZdBiAsTzzF6LKEJie7kbgyoxoAV5gfczFHV7K844kkgSfvE4Uc",
  "key18": "47hb7znJzi97S3NmC242Ymn2nKwJTbhyuQnyaxqEQ2uJkiRz5B737ngCTMaicCWGmVpbvekkyyawvQk7fLDvaCCn",
  "key19": "63mqeGodJKQAk2adf3PvNuXibwUZtyumL5nE1yUSAmN81Htk9L8H3ZEjqnkhHnL1cdq78fCc9kfDJAziNBSX1Fhf",
  "key20": "3qa98XX5iKfcM2CwJMk8FcEC27rSxL8oqgBtGNuDVNEsk9ri8KJioLUwasJWo8ZE6rYZLz5TezQoQFpDTQP48GnE",
  "key21": "sKRXjJW4uUuzM8H2RgURbhjMhY5TKySR7MGBwRpUZiDGDb1SZHre4mWwEfThVBy27RsEpWij2rQboMUHFpa3RWh",
  "key22": "46D1wsfGvFpsxL1LKh1hiR4H5Szi9pCoUeiV3nyBbYVeApBzCEC3LMA3L5yA22BWSYqE32HUNvwuuGCs9rv7qMu9",
  "key23": "W85TEFUdTQtka9YoqryzEMebGiCbQ9z1whMQn3Xt8hmGAAkbh5RNGL6VfXa4rW5LfMMRqTxkx1SgTMEPnWrJtaF",
  "key24": "3SMvaakz9jX6oG9VoNMCcHmFypfQif7UXw5JbP6wLQn1H3RfoLnEyFhJCrbi2rMMV6k9WBoiUsY22DPMbVVMFerV",
  "key25": "4rh5fJe1v5ELScyG3p1eEmvLNC4xAz5XdnVyymSkEJztFRQihcvR6Pt8cDcha9y8GKWHurdEeTuBtVi3DnoJ1wHU",
  "key26": "5fvCzf2hA4oo1U1pgSfouws1F2Teh6HvzcxhWy5JZVnw5UM5V3Ny84fJKvKH4DmnjBnHNkSuYFyqGZknnawyVqpt",
  "key27": "4LrBAhBwYenfnhgkLsSMbNAU9yiVVABrcvMR5sGeUkfAbazAJmNygK8fqfEoGF9SXf28dPfYtLUw2Grbbrk9V6J6",
  "key28": "2QQeu5Em3EQm1f2zETRXVS9SPFcPS2C9GTkmT7nii1tqN6Cpuhjo8gEdTJCvseMhDCL8ugBsNKZ7ufsm2TwFoD9n",
  "key29": "bYud8WRvcpdTA4WmzCZP2dtQKqn5AXFvxeTc66vz5E2ivfKWCUv5ykZzHvJmdYXJwcBJXeRXNtiqJtG2NgCwds6",
  "key30": "4hiRxMSz1rbvq4ASVnnt8EGSXZ6qEmH6B6kzXgfNQJud6VWUNGqAYfFBSV5WM1yCafw5rbyhXeumZCzVvCDxoumY",
  "key31": "4hC1owki74aEQPCcZSSuMtkTJHKqZUTJWmx8EAonTVJfoWGYvZCDwcCHbo3WYNR4M7mWgPAY3P2MARKTHkYwpr99",
  "key32": "5r6jDCghJxmqwrZevrYdcARjq4L9uzSdQ6hiVwUUmT4GfRv7kTcQDrgYFeEYkYZizMUqhaWumYJmrB2W1YixZAMZ",
  "key33": "3JqbxKMHwhqypTUeD2NpkkZxRMz6VZtdAiyHxCvJQYNMsJfvVmJrAc1qoFtPk9WgdgYBoZGhasktAnYKzCv3BVdh",
  "key34": "2h7Zaez85XmCUjDkpaF7urh89tWH2ry1AEEoKBZM2LigpQ6YahMvSjdySYFWBXCK2cqmFh8qtstBP2mrFLWM8pse",
  "key35": "5n4gqmY7f6aEMvks1G5FT8EB7F6kLGJpwDu6o8J4FM87BDEBvQDjnwxWM1P7G9z51vh7WRu32aCfeht7zPGFMVf4",
  "key36": "EXxyCh2rDmKWH4sxhhAx3Z6Zf16BCkNUAJgR4jnHad4pWjuP3bYyXLYvb8gxUCmkebaqvtpskEu9RS7rdaghQC8",
  "key37": "5qgjT7tTaqk8rnxqzhWkpYc2hysKvYbgdoh2trtptowzP8fakkNUq3iFFVgEgSio5Y6KTuDkUa3da1d6LAPaxpMB",
  "key38": "5dZzT7p34QWHYpwoThXVx5zHhK5Br4g4rpZ1nSbVbFKnpBWbRdWqJxYRDvFA2CWwzMsecsxunXX8ffZieMXLNdPr",
  "key39": "39nEQv3vgoQXjFS8Aebormchq4aUi8PwbqsvFAxFop8XQU3VFC2ww8AQw3ben4ma2F9sWdyWuy4QWBsq4KodVM1n",
  "key40": "Ya2ADYYabHVzkjwZRSoGAKNhui7b7SM224XJsMkaWNw67h2fARUv9bMA68NgEn87CVg56vJK3JMVdYPmGMdpsJb",
  "key41": "5KGkaqDnmJz9W4jR5T4mrcopKNrAAYZKNRcQ92KTGT245w7hQsbyPrU4LQTEhg7LvwGChELoPBh3akbALooM9RR4",
  "key42": "2FFhHbMYJnWdUepzzKgBvKPF2Ag5iLFaRGXmnZEvGSPZeGxCExvRyGkaJUp3f4GY9awDGVnTUmMJitg8DcJ4dbs9",
  "key43": "PddhTi5jLbwk5V8xDMDmQaCqp4HnL8jFThJZ2b4xDH13WDFVjsRPBmSrh3YNSwbgbnWcAxJpuPNbQZGMS8ucX8P"
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
