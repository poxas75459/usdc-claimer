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
    "2oke1XNt6D8Gh4WaTuiWVEfzLh2Bkvu8Q4KtCoiLTqJoookXkEtHj6ZoVsE9TTo4wA3H2metK9obekpN3BjSaZ9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n63xHCCS1yNjZmYGRe1ZACmZUoqAzC5ru6YewP5oweUtxSnpzovQm8F4N29dZkTtK2o1fzita2nHR7mSv3HkNFM",
  "key1": "5RX5y6kkJ6EJSrDtg1kf14Gbh42znyJJvUJPToXrqhrDGSjp78kb2Af3LavLrhozTFsbU8fs5daAYyeuFxpP23o1",
  "key2": "23x2BpFGwjCrCrJa3LKZgiTc6BV6c5buqCgSUm3GR4Jp1dE5js5MBCjQC7m7AaxjrVWCKvTL8AmmCcxftAV2Ffc8",
  "key3": "4HSkcaom1fMPpM5cADAhQfqqgtwaZ6D9SSAZq7FrJLANGdLgPjzHvDc5bDDeFUzbpyFjpQPAuV9R9Mb1QvqR9DrZ",
  "key4": "4H2eVPH6EsKM3doFouUi8ykXCCyZqpPkqLpiHWDMwao8LJMzgWDBWwpJW3Gn6qtaMpFKKbzDJvUgKuq75r64edbT",
  "key5": "2Biq7H3LNq4cJ2tfS7UQpbK1sCT8EDC2yxiAZtj9iEWPgsC5rKavja8tSSJvXq646PPokNR9Kjvz5Akm3sBxKxHm",
  "key6": "3J8g7z9CcATUMewXCDVaqu3vyZbvy3C2G6JCX63m2SXnW2TGFTcrUp5Agg2Bz7HpNBmgXVwhjzXz85dSVT7jWvXm",
  "key7": "2eGSvFAa6rEUw6fRtmRyUemBXP8hyQJMjGpTrRThzcRuhfXU6v3mHQkf7Htd6ULtbiza5qeEickRTMd2iwDeFfzt",
  "key8": "2b95mAbi4xEb6BkjLUdWX6BzJHTTFUP81jTygd4j6bER75FJ9B3g7kX4Trci7RjRa9LXhfErwshHckibXRVcykGm",
  "key9": "47PC6ezkqco7pfkPSRRVbLuGzKbeXAvvmXYcRbM1qsNZTfogLQKW7pmFdzAn1gjHpG7eodkZfDpRWCbh7pVJjUSe",
  "key10": "p1WxGJHSuNZKiEUZ9yZutkjhKenqMne6ABih8j1X8RctMmWfCX9d97KuDTgwPL9AzDkwseyNtKtzmcqSX9RqF9f",
  "key11": "5mxJ4FLiDinyAf6X1CA1g54JL6ts2tq8GxZiwiFm9RLUq2WwpUaxkYsE3i35QXURAMkW8SMbme53fm3SwqCEHW79",
  "key12": "3qK8yYRnwHTfCweUDF12E9f2myXz6mnkowJmcjeSgh1uRanKBjjTJh2fKjjmCxsDpfuQsuwi1c4whSVPtsddwHq4",
  "key13": "4LyGJCXbKBnGTgmgPAruxtAP8HHYY6ziRkGfSsB9qP4sTYzrYHN7tyPLmt6bBu1LaHZhRkh6jHFiwijneHGBV1Vx",
  "key14": "3LKgU5bGWizvfLKFMXyNoRUueSGXKT8EAgV1CsYQRLhRyzMBw27gsRXJYFoGudcuLpob8HUuTEQKLNaNWyhX3GbV",
  "key15": "5DUiysp6GoCZAxPUiVYrpzvn8L3pB5uvwN15BCSGftm7rjh6TZLL65nd12DnVF45YAhskqW4rBBdHYWjVfEfeCUJ",
  "key16": "4s1fH1S8T55rcfy4bZrq9JT2xn2tScSadeoRqjdWaHpMiz5NpCzFgFJ42XbTfmoidD9dQdN7URidnUJcy8ZzbUtR",
  "key17": "bVPLaiAacRKjAP4xKuw6J34bhyxFzR2WnrBppdHWLKBTDYCMCuLy6rV8Angv1YPn4Ls5KUHPkFCv5dmQ8BSxQH2",
  "key18": "5XgkyGLgJkqeqFrRGKD6nh7pjMFT6pWmGEnZzp6ngP69zVM8CRqdtd5k4np5fVpXpcdY84L6sSsNTHEACsWMgn4N",
  "key19": "5CRc9UCwrMGtk81D4nib5Viavn88Vg7S4pCV7Q8s8VQgWsDdEtX8jnmuM2kkcF7Nv2N2Gbwp5XBPMAQGuBbge2ty",
  "key20": "VSUatoZZvtRkGDWwC7Fm6APcnm8cdvuc7SHtkKh5rm9udBb7TqERCDnYXYq7KFSh3L3Aq2qkTxvEuVT2xj45NqR",
  "key21": "5uAhZkCaWguf42ijT2HxemzV2wNWM1PiJ39X6yVZjagc7kJ7JXPy6WTbVcBZnMbqbEndHEBp4RnAXqcJMY4uNMhe",
  "key22": "3qxs9Gzjj5QoFDHhk4DtZrC1L6441f3sSfRt6GoB1dXrhybtjhSierdKSbVfHSsUwomL3AmMz6o56ztjJGMBqScz",
  "key23": "3GPMyaK4pVYjCGEAoBcbHi9QSyGcuAx8mcWmjX8ojUojivYK5FFzezAYbCTKQypzwjC1rGpsxyvLosiJo9E9sApu",
  "key24": "4ascZKjZ8EwKMXfvoc8FrsvzuCqu5WJbRgPhuNBxBadtyNnTM9C54gUJ3aBdmUPW3ZBZG3V841RQEudu9xcY3Uo8",
  "key25": "3Uy7AA3KHXdX1HidL6KQmGtSGURuiMzirvD1H16NF8JVp74RNNjtp1r3YxMwDSSQb7aPrZsMtsSdUjYvJut3x9zJ",
  "key26": "4Gnm4vaq8pQypFtcQSJ7SxxNBbKeTVwumSUBJNxqu9ZTJdSnNFLdHcWnmqgWWQ46Yrx3D74bu84rhznwopxaUXPt",
  "key27": "ugzYD57KTdRG2ozNxCAYGeX8kYTaSrb4Mhb9XtAFbq15bhJQKfjGV6DmD1pPhYBbB6KdockpCFzKm4AxCmw6Vok",
  "key28": "4CRyLzEN3suwZ5PZmzXyiQd8MRy11csPHDoC7Edh6orw345vEQzzQiopBDpWNY4vYNiTHHNV3RMjwgzV2aF6hhEq",
  "key29": "4EcNAoLRXyMCTUzQGnLUjMxj3uoerKUgGtfZuqH3PUvs9j1GX7ZbJbScoqyoMfjMUDs3X29qUFdS4Jcg1qwcwFfb",
  "key30": "5uoL66haSpXvEGfTXYGPeGy6DFVcoiT9ar8CN6bow7o4PAHqQMMWQng8tVKum6ZpHELbJqESXMfoFkwCHaRvtvgy",
  "key31": "3Bwjg29rDZSXPHZwsLj9iyzakGi4XLdyMjhH6paV6buyusT6ATfW9RgYDTJWT97Acvv17VAuf95GTtmJN2VVsUbc",
  "key32": "5GG6bFq8DFqTYCKUHxzaqmeLqfp8e1acjXJ14RqrKLu5jUrZtBT1iiF48UJ8X4eAkd4TuhtjtdgqzTTvnkDTjR13",
  "key33": "4ayaUNEGTZtqCgMKnW4STSGd7Szke3W1ZksVjeV1jM2g6fKnzBYj6KLFJ3iG8VjN6jTdUDY28b8dFznhwtvRgna9",
  "key34": "3627vL1CS3Cto6AGX9vAhY6u23KVgGxAooaTuke9duPnh34Y1ZYcUPW1MAVv1LvrdQNrrNjDpCxAnDB3u14p8syG",
  "key35": "rdr7yYzeHbRZT1ag6fWs64guNpTZScKeyg7Aez1zxb9pf7NMg5aj2DwtvYwNUZMxHZDgj7fRBzQaioYbQWYWw1V",
  "key36": "5C4stfF62ZdkxZYE8FErT3DPjGBKea9CGWjFy7S46utHhAEYYFi1T8D9NJMmXegAziSp7KS55ha7Th869s3JGnJz",
  "key37": "328Am4N4579E3UgGJ7HyrDxMpjERYhYyp4fYiMSEqQw6jbFirpT373zKNm4UVMQZbkJWjyBvcMkafBouNGv87EAv",
  "key38": "5CiXKgKofCgKHumZC5fCuszbFMxTrC7Rp4AyzSuVe5dNYuzJfmqnZLqccsFMotNjgjH4yBoC1oiyDhSukUpGZNU3",
  "key39": "nzrLqtK2nzTmGLaE93gJs3SAVjhLeFwc2bmc74iBfTByC2mXHbtUzRt3WM5mJokrdXjcMTH77MUhnkiDz5DZzNw",
  "key40": "4NJ3i8nCgA7hPYoHjhurpgTUuCY8dNWWUw7tm4KQqukB6sDpsTYkMtRXCnZhXCcaamUBoLjsqBpCsZJDvCw78s8p",
  "key41": "3sBGPAMJawHC1py3boUYuaTZ2o1q3D4gweb8he3L6ATTuwkXxboEzcmrnDnCCpChiYY9bRaQXwjKrBNfpG3tnMkc",
  "key42": "3ojd32Pcme2fUSoK2PL9qZzHb5DF2sZmYgMvP9Ms24wbdN2im6bK5t4tKwahSVWJpsUhoMuovhniVKsTxadMNAsP",
  "key43": "4qTia4gnMsXHBP5sP5xVSQtetu78XfwTKNxd7Pgh2nVjN6sw7qyN8sTqfYjZQPts8Y77k6peGFr5s9B3ksijwydw",
  "key44": "2YFud6eqYBMZ7FJ8wCsUQYfYtwhUpmxtccQW3r7NpWHMuanZxRPEbu2uXvxBz8TvsDWzMJLq4cAyC89DDVHwsK1h",
  "key45": "3bjqsLEUab6KYJwKYCQ2JhmqHMxBHKU9d1kjKe2cq6UxhaxdkHYRSobJxfoV8cQFEMz7uxht1SfpBdHSfNe4R5m5"
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
