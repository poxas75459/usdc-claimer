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
    "2Gwc9bJQaJ7PmGNy92vjxnwXQNDbe69NjpMfERPub6v86jg5aZXN1FXAc1K5RPCiFrkSjLAY9ZudV84wNdLnbggR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXPpCMQkBc3dNtQ881XAkobH3znGYrroaR4Q7YQXhgat2MkKUNGhnTmYrMJxAoaeib3RvDmMnRrtYWuNPTSTtdd",
  "key1": "aAcVDp1EbymfehBXZjxFcj3TdpGnjWCQYXouprb53eL2bj3Qvh9vDiQs2T44qxYdL1R815UtbStngFbvoTKXM9U",
  "key2": "K258ptoDLPLijGiNhxgPfDyLjSyyp1M4dHrFPHmk2y5oefgrniYWqfGxzExztot1wKqgaWWCxiyY7s3NDV3W3sJ",
  "key3": "4Pbh2hMfoLNsiQMWeDvmo9ULeqrRiTXm9KiNJh9T3BiwaN2Y94Vui3xVAnuvJjMzPzG6WMUzi8wkZpJoxUwcL2GN",
  "key4": "H98Ko7kfJ1XzgCfkz23Yb2ZqUmE1J5adRYKyLNXMMejGnJpwd2ZTKdErMkwFHMDWG4RXCdCD1wKfKQnZ5iUbEuS",
  "key5": "2vPMCECGfZNBVNeuxx9JEPBTMg5MMdJ1K3hyNe2bKKMFP1TQ7cWFKd1wYx5KUwU6wo4gJbTBkN2ddCrwa4XNwZpJ",
  "key6": "4uksuvjrkVXm2TotSPFtA6sEiUVtmP4y844tACV5QVY5dYw5eXcQJndCzYCmB5WN6pGGS7xPUaKvpKb4w14QeLNU",
  "key7": "5hHC8qjGXFMy2o4QmS3kmKxsAUAfNQ4SLtyqRuHyRWqoYBcfvGQ72wcPpJWGf3mQo4KR8Fb89hGRuVLyULQHn3fR",
  "key8": "3Ee47nb2Bcd52QQgeqKYuBbwaizdxgXktkBBytMa6M5hPubYgq2ehBLF4xgbeLDypx1Gns8Nv559ggSAmXv11zSH",
  "key9": "5HmayzbozpPJhKySGjzEtRzgpxSYV5ejpNqUBKzZJhiLM9xNf1sipMd7kNRgWKs8zvNDZJyknbfvJrSumRiEXLGz",
  "key10": "pec4goswf63i4LSwrLyQVfUbG7PvQ5AGZBU4PSqEKw7vWVEKiM4EiMksVozoiWp82Yz5DqHzvAkjePWgY1iaJwv",
  "key11": "5Vh3fT1Ax88E3nk3BNUVZn1V87RfjYfgTTsLrDvCxBBgCKFiNWedrjvzQvz16EmViV7vzpE7DCFoDimLTvBhwDo1",
  "key12": "2UidpgLmnjrqk2wTa5JRHidoZZNza9JpneqP5QDt5tSyHnFSzLwR6wnAB5bkeYwBsZw6D2st4AbZiLerEzGtEpoh",
  "key13": "2GrmwUZQVQaRkwxtReNFLCcmzQ4eRDLA3wkp5NNUUgtvU9f2mymBiyyRuy2CxZ2KshrfLaiAtwxJRUe8pA52BNQv",
  "key14": "3jxccyMp4NoQisEdSYrrLb9ntbcbYNEv55V8bAnyXy5gi9bVHkvs3bePUycEQWFg8mEgpF7r9GhU5ykWEm4zbDjD",
  "key15": "5axS78ADGMJGow8qorK21oX6jkQZvXhwiPVpzzZFjRkxCjeB5iXjXinfRp4vC8tHvEi94xpednfy23RdtP5db8RG",
  "key16": "3Ur42TxLYQBrPJzJN7rK8X1Nv6tzjMWCPafg1ZM1AY5xK7zbAWwon4vj4LbrX5D6shUxQS1bka6Y3FAYFVk1pr7m",
  "key17": "3mbR6L3a52Xj6NTYC9wjqonWaZg8zi6kwgisPD8gEnTE243ekLE4uMKiRXifwUQBp9FxCws644hC9wy7z6fj7r4b",
  "key18": "6L7kkApxDL97ZtjBsQhxYT1peoVPoeUSyFgpxbDGWSLMTEdufMxR8ZXht7xTaHYSpceduVBRKmuxrL8YHiwMJJE",
  "key19": "3FmkEoVucZ1zbwJwnhMWiCtmFHBnyX5iH5Mi7JgHyuFwisNzTZqaPWB6ZhYGQFaWG3qbmUavXqVgZjxEPcFr9JA",
  "key20": "M5P3Ab8WT7k7ArbFyKUPB5mbqREFuTL4cFZG2QDuokSofL9kqpoE5SBxZQF66NT26mbRRvVindPmeFv6yiC8mSB",
  "key21": "4dhS4o7soo2zqiPF96JLeTqJd4Ryvopzh8Vf1wWhkdiDxNQCLhna5ToSjSyA9KCgRCARhzuUYM5yWPN6AN6Jfr2A",
  "key22": "4ffTygMsvQvomwkqFiUohLi5dTNtk6XJZQjDt2cc4ottKQB48AR944ZMXmi7ytGdfhGyjKRqm3YeMrKxCFkUXTkK",
  "key23": "4wC7Bd4owQuWrU3F367sGhGXCAEnnZuTwuw6i8VPsYuV6bkLPfrR3VkPLk5SAEPokc4nhdL9GyAJ3CAVTo6BVySv",
  "key24": "2JU9Dv1MLjFvNfc5DQxwP2NBD6NAw8uHMBUPSM2k9e52BzXgVghWRbKu4b9FzDt7dQodso1HYcmB7mzZkTmfbmJk",
  "key25": "2Zj7uyGS8hncN3Jr5fhkGH4jskQ7tujiUMLe7dRGANPkW1tFc4T2UqwfWP6vMV5JQkpqS8LGvhBJtj2MRkWbYw37",
  "key26": "2V46VTLxDLa1uZY5EoSw6BcAcMaeKscfWWkbETmALBvBkwbQ61fvm3rAA6R1QGnEqQXwHeoaTNAeir7yb7GgvA7Y",
  "key27": "4iTHRV5tUEZG38CR5agDKKkmVnQKB178qF5mmjhvi4zwXpiqeTxUvs9CxQ5hD1j5q1VLpNDD3Fb8DhcxXSsvKtDL",
  "key28": "3gY2mDXW2oLCAWvJjaPkg2KLAt7PzvYJAGPWHyPDZFsDiayTVZfqhrmpXdBWYHUw5jCs7989EFeY6whkDzs65ssS",
  "key29": "4C15Wuaxv668NF2tN3VBWcz6otSqtBwU5qfuhgYwkPAE1Fr16qijoarUKf53eKxY8LKfXnPqutmfkJEcZVQcEiLP",
  "key30": "LJa7Eh215KFooDXc5e3myRUBZSMmYW2uSqbZJts3QFsHKdo9wsJnbUFZBrsXAWxJCLahzgbjyGaepYTKY7N9Rw1",
  "key31": "2Jed1Zd5NugY3ajHipmsxxu3ajp84k5ntSCGSKZukM4rptEDP7CNQNBhjasPTUA81F7g5gHqN8u94whEmvKWVtrB",
  "key32": "5yY3eUz7Ekt1JsWRPeByHDoqzcz313WDawXF4nAf22Fv1WGu32G6nnyktqs6DByMyWsGdA3gcffuUhjywhd84RFo",
  "key33": "3WHb3PfqS1jAJFBnaPvt8Do9enff8N6eCi6fZHK2rNtpuQigb5yU6NuQ2rFatQE2q6psrAjnTgsH9xzeTmAXuj38",
  "key34": "2QUVTStCHsqcm5mQkMAtJBATPDrhSyrFwMtmAqfookJWM5xrtZrHSbawqWVXZfd7kep5UkkXQJb6XA96ajvzbNif",
  "key35": "266afhyt7AWLK6mK55Fhci5tEUsfQQR446q4iiWR5nRwAMnz9pHJprpfJHHLHk2zyetPxjB7HsZFBjD2rzenfZuv",
  "key36": "EJYQBtfZoR7nRY67k3oHZ2HZn4ejapB4TsR3qwEEXTJaycfTg92SFo3MuhGSkkaf7hy1wGDr8htUA1TLRm7U8ja",
  "key37": "5nHknK26HhuPgqaqtMp1NbwF4ii9hHtx6BkVe1QKVeh7Z1L4HCsaDbpDyRAwobaznoZ9ynA8PFuJVTpNuuacs934",
  "key38": "4aFrvFtGAL1wUHfjp3Pq74pwC5Ey6vMSBFtkRjxR2X27UK6yG9rMYqUDdRqt8SUDhWXFSGMP8XUjXZKDWFSr13pF",
  "key39": "3ypuEnJWHbtgrXndbGrARSRdGGafTrhVePiug7syxVDcrsuA2ozqJ57aPoTVEGyySgdtu4WkbqaGcyp1RehpuVSP",
  "key40": "9dr3XS4VX3zKuoGtXFBCRrdyAk3UwBTofV8E4r7TTfJwHvwv1LZUx6fnB1w8tCbULdDmgBdNsoxAMEum2DzekH8",
  "key41": "2cxDDazLGcUDzfEa12tHFFHAWYQC4a8HYQM9Xf2LSBAnSu6vsFReJiYNPyCjRtnN6zUNed1uFzJrDukVSrEQki1H",
  "key42": "3C5mvZViR5ub4xFir8cMDsWbEnmGTDN8SQpeN4PDLFKGeNEqypkeCLuMkgGNn5QpDmPreHnz7AoBwCM7cCNRK4Po",
  "key43": "42jV1XvnQwSgWbvqLg2iUc9jVdr9ZmBUrSs62SRhX6Ef9dCd6GM5Qx8NW3mfo1N2EFazgVKKuxy7L7e8wVj9p3nm",
  "key44": "4tAJxMgF8hy4yxyQpyJRUV9YAM1mFek2MJSziUY1f5WgujJm8D5LU6b4QmdeeTLNR4jSqXJi5gxGNJfCVG2sSk9S",
  "key45": "3Br2hShV3YqbWjMJCkmTNNEyKXjq2B99yWH9oViKiywL1dXU6HReYiEg2W1Lnf6VrsYtYrY5Xw2atiPZM4guBtz"
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
