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
    "4imiXZGLsFQHm2k3Fig3uMBDo6sqVXoebVhYAKPm6C9n1RSFoWVrrAZP1M2PfpvPsNHwb4RZPUtQpXtNJtKStsNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626C4UbfyDhGyHFrkDPuVaaJmQj8QgbbwYzLFrqiV7fHWKYQXmzDA7KouaownHAChHpVoBvZeNHLCue2tcoUzpyv",
  "key1": "2n686D8CDsBVxTfog3HCgv6ukDU4MoSc6X8XKzmohWy36AKyATf7J6AL82DngQtdEZVkQhqvDVWH4bSPR677dw81",
  "key2": "5kGgybbsCphphRDAJRFoa1mtF9oQzoCSQeaJKtiCYH2hoQQntjv9sdUpC8dZpZ54kSLRBrB2FgY2eXvX7jKwSFvA",
  "key3": "5PUWjGZNnhxhVsNSBjXSqw19SwixhKHYLAHacppsb2FNnzqGC8qHkxuh9m7FjzsPXpygKSaTu1cfHKnf4S659wWB",
  "key4": "ecYcQFzZfttw78xX7tb3sNpjQiajnCk1XRzktLrCD3vUQFX2gFyUanJ56CaaQFHNxVmFtnYKYwqJUnW5Q1YCSFf",
  "key5": "pviAmqSo4ur38ZpyqDqzqqsBT86ajzHWQhbcWVk6iTQN3t3NXgvNPoaX64D868tWUcSRW2k2m2SVgcTnNVNAWk9",
  "key6": "5fs8Lpad7oAwvrghiopR8HV7M74SNeXyuKNMa1nuEYuu2JccoFSTTy4VvoRa3gv9eAARj6e9QKKrSmde2UxBRjxY",
  "key7": "42BLXo2MP3hz7cgXCU888opvJC4sxKqibdvs7AV8rdEyMimUwYvmaFeR5p7pySUvbkcAqw5Djya2tLULkMrAjco1",
  "key8": "58SF4aWBvEbgSArkidCj1kRNSYtkkR1bvAg5SRQS61Xa8wggG9GTs6npj28ojwi3rQ56GHwicPWvwyxhkG1U1zYM",
  "key9": "t6kMjqhWs1rrMwSfjMK9pWeVos5r24xBSBujtT8dqAepKyci467vkBDXbEYaUtGAW1gxAoqogzP7ZyLTJVWqBMF",
  "key10": "5jNVbNULtpZ17pJBB4ucpUwrQjLLTkvoASJqDBbtMs73FBc4iU3RCUmKfTH3iagDEtfjE3mACJq6pPoVWt8U7vZA",
  "key11": "265azS1ecxtTGPCkzTUctRVZWp6A7rkg5MEZQBASYjDyewDuMqWcJiJHt135wc31L96JXvd6dEd4CEXm1oWaBxVc",
  "key12": "49YyFEjTfxE61ES57zUij4DpdSRbHu59GEz7XDgT2yDdNfSKUMwYV3qqd7tswReLfKuqxrwm55eay5xVPw4abyFn",
  "key13": "QBPxpW2E1rdNuUwwwof43YKCVtGEapiYUQ9zyqJtBrY6nEmpK33oXiqC1FwBP499rJraSuCMUMMmJTbRaTvtUWW",
  "key14": "5VhM36yCAWKpbg5DpCyBrSMiD4LmB8UXfBPGYAd5MhrP9izqW4LVRndCKVVnwUxoBQ57eFXrC8oEYM63XcJdbDrX",
  "key15": "3CWSwNic2YnsDqeevLXwip6ytDCBn8fX5NbjN6LqG1zgGuMqDm5ac1PVchgwHXPsK4GxJ6urGydQ6Qpz1VFBVCE3",
  "key16": "bQ8FxJSgyL5iQ7nr4fxxsRxwe2EFecbPdnhNSkVQcKqg8UoPsF9YNNeNafYA35mHMViP1zzb2zWp8yFrZjJfCjp",
  "key17": "4vFjdGaMzSxrCd3oKRh5knrqy3Y9XPtACbuEtyfbU8xTydj1386fFExmzk1ASBda2dTScwZgpadELsNMWosXypH6",
  "key18": "5kRyFg8mF6VRAmjkczLyEYZrpNUeJqi3gVS9XuydJBSqD2WAnyaq2nr64iSSpGDWerd7UQRVhrMoPfaAhJ4Z8atX",
  "key19": "VY9zaSUM7q3iQnSv4ADhTRaZ7aRCw3Lg7eeCHEkBUi3ctyghg82osy7wDw7X3noLAHQwno7N5TUmtdP88g3E2s5",
  "key20": "3NfBZfmX7VS2ynhP5AaTEL99vmU3EKALU2EcjTxXq6ubRjhCd8o3BJZYN1TkScS7bo8YWvBnrMNgNySb7dT2WDvo",
  "key21": "2GiKN7MedLv6Ltr5RgGGtq9gdqsYCoUZvTUWj4yof3GczQGRkCvMxD5Cfh3hKxx2fXKUNJrEFGxi8APyiqm91nx1",
  "key22": "4QJwcVCT54LfU1VQr46XcooCQfkbESGqQbzDxvsQ8G5pJBcTwX9GGRTWDWZyz27dj9UaGKmX8uLjNGnAqA31QoHU",
  "key23": "3nLRjfFH5G8RyLPmvhCP5ZkGhB3UYJY5rTGMWCPq5PoTcCtbaNYTuoqPJAwjV6fsUFCwuxKyrm9XCpf8JMkpiWrA",
  "key24": "3v6Xe1Mw268HvJD9VphJLSfUNrRJVAMYX868JHSKzSMaJVumR6GxVdBvcngurEj8v5xfDJmZfdMXSxv3puTsWeum",
  "key25": "5KXavJbhMiTKtqBNzXFCCs7mwq85bLJfDJ4whRuJo2QtPcYhdif1FEf5ZeAwcWVcHCoKdtHAP9kRyjf1CWf4KpiS",
  "key26": "2V5h2knSzVSwbhWDk4cG51mRm2VJzZsz115opz8U3GCKbEYcLJCH8cGVQEWj1Hx4NdkxD3mkWTMH9DfSefjMYwFw",
  "key27": "sqDQJ1ctV2qrPvPhTxtP5GGbWHkBwTtYW4mjfhaSYtgESfVWMqEhCxWrMQYpqWG69Eaf8PL9yz4LWAZ8n2CPQko",
  "key28": "va4fUUrQh8ZAWp6yyj4yGQ3csGtQdGhY7YUCkrjU2SgtXeN66w78oZezQJq6Ny9vQQMLDBDZ1BwezcFGyWBonJ3",
  "key29": "2aM3abxhd8p3nMp3ocNEAyPGAQM3SNRhDTTbPzKLbgUyJgqwJbczi5tBd2aUJ4AdmtBzZYzX3C6da9h3ujUd4ZVT",
  "key30": "63rjiqzVFgVBu17RsSL9Zw7mWTJMU7ETtMCugD173Uauz3DBHFWtVMKjHobBH7Pvb3tncVNxWq7etSXW3S7Sm6Bq",
  "key31": "5Hu6mn7s5BAcQgn6APEb5hjBZdUFdgkYebdMcJJKxsXZs5VH2SKpwX5iJWzxHnFHSTR5m9wmkobQCtnKp2aamkFs",
  "key32": "4dJ7EeSrtM6umabWTd1RpwFVabvKoQdne5CiBx3NSTa2T6TYFpTTV7ndCwHak3oN4nAaJo9tASDtLE49wURoTkSa",
  "key33": "21AgxbeJRnUcQsfShNXGwcWrtmDx5WHDK2etH29bvhb6cqhpjzm42XJzcy1NREyFWfDosvgsDGij6wdW9TX9CvHG",
  "key34": "3t3cvn3PVanegU2B3WFQDh7ZBecccRA4EzW2Drnn28PH88LJwUn9HqNBzgcqL5iYZHqr1b4LpoCW48DZDY4X985R",
  "key35": "HZy79hsng3RvbaZTqKtbVnoou6h1weA15nLhUbtsUmBwn7fZypwRbnGhRuLNH6uVZuhXdLph9auxXYXSJKQGkMT",
  "key36": "5PzTnyVbPnFzB1fVT7boJbs19fTKR6eS1E6SdAfdDMWMvZP9AaFsXwAYQdmMhraHxZptV5qdvodardZR349AEcR6",
  "key37": "Fg4RprQk2h2jgMaB6vyzzMHf5xngusCe6fKKvAzcb1R5BWtxBVNpQEei8cdFz1q9L9sRBRozjM1csd8cKQmt17m",
  "key38": "mJJsK1gRwRXYXyoHYZFiQu1zETR2BB55tGq1dSMNbvj2VwPhx3V5zfzkt4iaGz93dRLewRXYvoENShwCHHeA8HS",
  "key39": "5wbrHMdzkBp4Kt3Pe2BMtQeVQDWcxwhLuTxHUchzFm74vk2SPoKVv9Re8MzsHWd4bz7xcX69H2rJp744mimm59xu",
  "key40": "3ba5XABJ9dJCsTKiapKP4ki3V1mHCLUJBHkf6eNtrpD5TZ3xw9vyoy64BWiZ2YTZrxhPb3gh7uH7xiTHn3ez7BZN",
  "key41": "3Ktyw9zC7EnzwWEyYZdRS2bj5NBZ17xt36mVgc25WR3tg6wgrUAbMQgHpc2eFtYhackuqms64wWyMe21LLYMPPxL",
  "key42": "5XuxEUBdxWofm1YzvHH1uetkFkoarZ68Mf5nuWam8KSd5xQ5vocvWeuwaqLNSp2BWgybTiE3qdaSu4veJUr95Fka",
  "key43": "2oacjEDYFbJ7vaV6TAetLMy9FohqVjegkvzHLpQWKLEuCenWdxP5Mpeyjmoiv4wS4cSXtBBnuNasXg3g6WcoPuqm"
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
