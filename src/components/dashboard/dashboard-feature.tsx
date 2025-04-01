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
    "29zyP7xjmJPt9hMaHueenV6TjpJgXHZ5XcETYGgxDGRyoTWb3S5ZsCMgePHrf5Lo8ETt7sGM86FfSRoXdkHjbsDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5XGXs5urvzFsESRnPuAT1oYNcFpVfrh5RxY8jgJ5wmfAReWLzpqC8xendmtyjj2KqkRpgUop26BR1L65r1YdAR",
  "key1": "3w4hjQEJ1R66xRm69Lf693fcMhpVxNyzeiVYyuBXpxYkwMg7kga6nharP3XvKygGdwgvFkz7jKJQwZZxSdU8QxzU",
  "key2": "4HQahpLXxGWKk5cRiUQHLaBf2fb7Li53yZXK7EAESAScg3GezUGoCXHxbAyTFBXbqog4TC4B4WsVjbwYG6znkB6w",
  "key3": "21BLvYKn7DaFe2vkWEnZ1oSeDxy8ttb9UA3LrSL66BDVXgaivWmVnQQv6rHh4iAuCbK8s8uGGov4xvQhU9aHekre",
  "key4": "5zWQPppqApvLjq9oKMBCMYJhgv2mhkBNvBXmrMtT45azEdPLQQqZhtGj5NH1BbqScu2cCs2GcwArbHuG1iinFiLT",
  "key5": "5szTLkV3C57qLoomUGY5emxsHYTpg14sVQcjYeYeV6PiFSzAudphYwujZ7TEeeMfZubc7U3z4qB4CeZARAueax9b",
  "key6": "zFoP1Cjo3AdKGNushXmRMUL6kpnCUo3JH4UMvUHgbHcsgWzF1dwQy4hmYfnKei5r9ECfYrfzoTTK2HJSP67b6fY",
  "key7": "46nfzAY8qDr5qkoA4mCFPt6LpHpmnic8tRNquMKDjYGYQs6GyAjv96fSgavSVWpyLBkm72NQHt3ETmCD8hsSmsfJ",
  "key8": "3p1WPzA38H3xQcawdABsxLrVcBv817QL3KQ7HvKejznYmnBVR7kGpLqQA8sE7TRrF8s34MudUptb1zu4uNcoaKJ8",
  "key9": "4NMK8WVGuXk27FiFkfvSwmvUeb7v37P2LsvLirPerKqEtw7M3H4oAaqW1V8gbU8cfm1Pf8RT6vMS62X1PszPXLHE",
  "key10": "5bHQ48VkGKLC8hxnPsDsTeXvnfu3MrwcxTiKjaP4W7xwWyUhewU8RdpQwh7RtdhQCP4kBFQHd9o4cXcyp16m4wF6",
  "key11": "43MnytyHgxTDxvrLUjgaVFMSx6RQ8P1RLiL4gQwapxTdo5rfSbHgCid4xj8BGtQbqFd33M2BQJxMjtqYKsqn3Mvj",
  "key12": "41j3dBZK3UXPbMbNhPk8jzwjbL6EXVAxavF1HHTvesuWtxBKvkhLwuiwcN8jqQ5BBqhd7stzKTwKhSZx9rcxTtti",
  "key13": "5AgwU3PT2dgR1T3joMHPE5MXf5aBmVUCucV2RxCWqaSc2sbSsn9vWKyEGv7dp48c1mNqc8HWYW7ex414d7xXvr9Y",
  "key14": "5zyY7mVeHATWuRrP1Lz4mCxAhnepqvfARo2cS43YuYc5fYuKB6XrwNgeUBKbReagNDbGGXcQNEgNL8LMinaBrfCy",
  "key15": "3eRA5uLoNFFneeCwMWtUdPnvbem2gnLADEUFdwxdQZTfFuZirH6mjWcK4tzcubVcZNK6XkUGKYGghHBZFgE8qL2s",
  "key16": "bTjFHP5kkm2uh5eb2pioyxBkLF5XTJKsgn9dDNw3ppNtbefbjKYqHRyBfLDCs5taEC6mpYi5mYue6cBFZkumRTm",
  "key17": "UrEZo1Y7cQdrkc3naKqkbBzHDFXnmNsQNPNbzHiLHRRcYkrJHyYb1mNG52zho4SgRUxXGZS8foQvCXoCZ6TDkmt",
  "key18": "254Tj8e1WbJ52XXGDwjukYTPH5g7PExGjPWewM1LWzoMask75RnyCWcRZTSRyw6EEwsBWqSxyK9tHWyF99mMDwGN",
  "key19": "3a99RhnybdxkTSHgEWARenUjrpDUKPEJ1Fxzars9hkxUTjb4cSZaATxNBcyYRUp2V2CXAKmhTXoDo7MK4gwiX3B1",
  "key20": "5oCmTjEjnX2yBQc99mzk5aw1vM5NJJwb7gdHHrtkd698P4YRWcJeG6HR21mV9aS3stEuXMEJGqhYyMf5Qim818Vs",
  "key21": "4SWbJG3owzdeUkJCjsqfaz9DDJBbtCWmaBkWMCmKKcVf3XDB1Hb6uLHGUZD5ebEp81q5qfWNqWqRXNQ4iUyhWogu",
  "key22": "3u8zXiJjKY2fJhptXvY72cFbgUScveqcfid1S3zvSknCoKuJeTvrxfLXyRe23ALXKQyEwWNTR8bBABk7XCRoFC5C",
  "key23": "2xsfJBK2NyLgkDqyAgKabsR5JqMMcQhNhWS6CgoV8AydHj2jjK3DvMXFTXid6ya1KW5c6qbDCJeofyShasij1MWJ",
  "key24": "3KWCW4XraxAiiDWpPz2sagnU3BEBen4u1uJnTnjrrZxNmnuUywgFq3kdHNu9vyiwrSyRxpLCxvU3zaAajbF9XofN",
  "key25": "cwUviD62VHxkCXq72bjSaXomQFQf7dUVakxAZNG3qLT4b8SUuTXHtrnmpfzQ6HtBd951czbbnQAcASveTPXz5UV",
  "key26": "5N7T9tXX6rcR5V6WwW9Conbqa9erJVGkki5c7rAb9Tad87phRpn9zbsN1yxqUfbBpKdMN14BkYv1Va1r4BdzfjiX",
  "key27": "3pELBatz3D6swpePtHjJ1oP9x2PtaSqRtuKHtBcokQV6sWKcEmcPNgyvPtsyHeZyYkMAvssnGJvtncEUi94a1tvU",
  "key28": "25YcHFpbrgJQSfMGbcgnb6fkfp6CVgFuHRB5C3mmyBiDN3xxL54xvtdctg994PcBT2BZRSDv2znauw7FTNomN16a",
  "key29": "YYL8xDhCzqChiyCvAuDgThBjoHkBMCzNYP171fpP93dM8jqEFEQLtRcECYdrS2HUYzdGJN27mWDVik4U1rCSAQz",
  "key30": "3rvXWFwoQ1GwqoJz5LhmprEwEioZ2D1uPXXZBYMFYBikoe4A4PUjT9A3ZtFxZCBkGqJ3d6sPYgNCWMFY7NX6v15v",
  "key31": "4B41x82Cz4egrb4AC99ShpmANRb5aAVtmVXYznZBXGZGDwSDT37ESCmca4ZGbqB63pkUye5y5wC8CGFkjrjsaj4P",
  "key32": "4JKngnX8VK5xsPrFPmbmZV44jBSHPhGUsVV6Hh3VLjj8Rwn9SdJkD9NH2fgoif6xkVvgNhu2yaSA32C6bTnZn6CR",
  "key33": "2ySQznrYwf2uSBn5GE2HfEQA4yexP77uz3N3SU5ubuTwsgM96xuM7qvmNKVotQiwmJgjYtpPxA88Xs9vDdwfmC7y",
  "key34": "5GZaH2PTWG5mbiSRpti9Zy9Pt34g5zjDtvKKtWohJKrS6mxLiua9GZTZXvVbuEuB5TY41Nv7jFa3cAcM5fBHA7Ey",
  "key35": "3RVNwcPN8Qnx347WtEymHRTm3PqSmFCKhtGDPke3YX4oEwH83uMv2WjrSAX3FkyM3rZ3FUweyR1fxC1KWpF4HJbx",
  "key36": "66vfufGnxCfa3aUKksNTHQkoqEvr13pHmfsCG5akhBndtttNje4XiuvtTzVZT7Lv34Rfq72g5gTnuRUr1dR58rJu",
  "key37": "2YxYRTgURDFyqtUG27yCDZyfFGRHYFsCKeqT8Kx25CY169AheSxp2cjX2ASXErXLm9jtEfPF6p3P25TBUtkYxT9U",
  "key38": "5A7sW4q3GjjoHcpx9R5iMGCRrgJNvnhcvgXktsefB2g7Uxod5C2Pu6bLL2XFXaEL2opqsTDkk6fLbph4MMLX7QoR",
  "key39": "2QhT6QDsLvcD3T1a7TXBoR6yw4rCCeTWBbJBXW5qn9h2d6F3XnVR4F41QUTaxGC7UrDEcoMhaGSa64knFpfqrnBV",
  "key40": "4hmo8wyjJ6ZE6zjxqjygKp9J4YQaNDcH8MKkfqnYo1j4Gz97ixYNbRs2b8MDT9mTDr2oQfU4XRCUwb6tWXMKyLBT",
  "key41": "5uyzckgGHQXDofNLMfPD6zE6RJjGHu5WaTbYZ3LJhdKQLRNDCd5aXPUfMc4r7UVVFvsueaoyLWxgCbHJorrNTwqt",
  "key42": "4BbTkSkEGA3XExVeUE522g5nXpm5mrenWU5oYR1SPumjXsnGc2o9H3QN3sQgRQTA4c5uJx1pS6iLHXD2fJ8HDvic",
  "key43": "5VMbbEsMNZCJs7KQJiDF4sLjztJrvKbRhxaPsSBL1C4pST6gXrk9TAVb17Mdm5L9taxYWqdJWRQHwz2bwoKjXnGs",
  "key44": "4ppPJU8AEuF7ngBXmPHSQiMKPrHLcYdYFf33MQEjufeVRaFrtX387hSEVTNg159WGSE2uGke242oCA7eXy3BsNPd",
  "key45": "tGUBrf7YWXXW7dUZoAEnTJfYpeK82bjtDK5xRVUiCafbryWvFf5ECQ1Zdk7W1ccLJorimxnDxnB14SJKPZFduvp"
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
