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
    "RdyWSzQJ8ZoLWZgUe9GzwvzWWiKXfGMyzCTzCc7LUgGQHQTh3d1GLjdp4e2mRqJwY7L7VFsgrnsPiNwQM3XBZ43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3222cCMsSaDgy4TBHUNxj8WoEWP54SrSnxwsXrG5Vjbq7qes8BEDiHtRDcuasYXHgfYAqtpG11DJdjPbkWCFy5g7",
  "key1": "5x8fjgCcH48ZqbaRHnTyToT8wrwhD2VQ7J5o4EAGxawk1jzzxWcDXc7741jNBjzUxS7RPnmVgrSDzMHf3vvLLr57",
  "key2": "34Vwf7onpPETJQCKPhbSod7nnwcevpSBKEQvHKyJUgBJ62MdbC36esUahv6UN3mN9Hcb8eXAkgwrdSaYn1oTMBE1",
  "key3": "5Cmw28z9mC5viBavNDKFRtSvooWFN7KbacYF4NC3hEcMRRXzBEKKfF8SN6BS3tdH6UFEDDTup3VTmLRcP3LSEpXP",
  "key4": "3EDDmsGREqjx4Z2GU76vzwgEbLDL6P46xEtwNW5eAymT48F396GZPciVuP5rLVKF2iCaQek9GWNa9Sj7Df6poz9j",
  "key5": "RdjpYfjKX1RXr1VAmb91au2HkN45622ZDLvL8R3yduaQou8RJQs3vjd6scgqDkLR2Cg5Sfh3m2hiVEaprHXPXjb",
  "key6": "3GyZKEW3m2QJDTw43CUNWP1rx4oCoQU6ygHf1ZtD2gWmLSGitCjwEvh4WDpcZhACpmfZq6jcVWz3QEBCuArV8LrK",
  "key7": "2oof8E9ocDpKetGy9J93eG48CzXEf1rpteiVJfvfFYDjMEy2fEykcBrHy8rSBRiQ4r4T8cpX3Hyd8b24gPc8V8eD",
  "key8": "5Tmkdb1SbjHV5X86THf5m8ubX8tRJWiH1qriNH6S28DaDDc3d8d9MiztG7iV8F29g1ayCPpRqtM6rNwVquNreDeo",
  "key9": "CCouqSrmeN3PYj5wDrZ6EM72inGJvUy1fkbnjH7Hntmg7oE1KAMzD7ehpzFxqQD9fGUGgAfwJJQHCDSYVkHMe1S",
  "key10": "574JPRepbpKMdv5TtMayWNxBsTYXubyfi4jR5q5EVrTzanLFaa3CfbFn1MoUqaJzuaaZVr7v52bfZx1KKhUirYBw",
  "key11": "TtDu4u6kWMzSSM5QpZyKdn6fjuBwKXrRHtg7g8dotKstmQ4CQCK7xtCzRAJQHHABZ16EaKj5u3vNL6vbj8nsDBA",
  "key12": "4pMHjh7VHwzZWnDuKu73n6VRbrtPjJsU1XTdynco76CFrPUe6Tpj5pREupujVQwtPvSVgXcgBrvaCrPwN2nKo9F3",
  "key13": "3nNSNTv5qsAPGTK1bnnQCnet8fGQQ8svHX5c4qhSbVEVjqvvjRpDtQF9bY5kVkSbyg3fP6XSD2tb6AyZbZWrGL2y",
  "key14": "3iF7t7Me8vTCoqpB6LN2wD5Mr3v2GEyJFkdoavt3yCpDBojjHjKE1M6DjjQT5UNLHpXbhc2bb3JokJDjcRcBRTPH",
  "key15": "2FBqeas55KYwjjaHuvDXFddLadeNRrVsmgYHYokyb6HvqVDvxnyfokKDdpwaEcDmbjyXDdXcpHDvAqyJYc4iLSw",
  "key16": "cu3uxP18DM7MVKkqiWjLRPoZvzMZ9RyHbFgRwvbb5aQBLnRgsFLwsT9adeaHsceHjJBAb9ht6bf1E3DWBJyo7m9",
  "key17": "2EY8vfu6NbLnEEz4ndHmm71vg7YkPU3EmPqDu87LNgMEWzsj8pTUj2h4xnmjh74MhRJujBrPEvQMBdDHMDpKFrN2",
  "key18": "3bpkTHM5KPAbQWc7Xh4YqeGs6mLNhkLTmDrKz8creV2m7CP8sJ3a8UpLdk5wjTA7XMBKi9QcePFqmv54FoZz5YgX",
  "key19": "3jZcET6LQkTBXcXfFPW3AdLY6HLJijhP5DdcckLu8T1zf3JgFivzqLhmzVyvdB4dHQYcVh3Wf1TuJRtH7Uh6H2c2",
  "key20": "34t1aCroSAFYpGAZSUSup1BWrEfaSi7R8g3DCZPPsM54w2iL4sZ5UsDEDXppFhbDXHhGpzdRcbkAkF4urMtR6xVr",
  "key21": "5ikbUuws7DVHzMxSxWYSsdEKwabVm3rkxKfaFaoo44vsE7YqffqXodqekhEx6tDXCdMsQJkd2p6FXS4BZkGUz7uA",
  "key22": "3QH1WmU7uotmaCXT4bbQQCmjN8arhK6EPJ4d77SvLQ4fkPgMxCCNGqBKNbq56jTCSaaoASkizBysxcHtKrYFZcfg",
  "key23": "4D9EYFWR3zor6NoNn2A72cSa5tRGn9opJR82pf4ERyKbUCFtyrosYAyLtUpW9K6QFhQaenSptMGQWoARzfGCNy36",
  "key24": "2VFS2Ty4Xcz5wdZqRqLXYLmz8WhBJq3tamFXvQLa8QwYWQwzK8gMgZV468pqoUwWkg7jKCWiAgjcrRLgQQEX5pCn",
  "key25": "3oitiyxhLiXkDpBNed7PyWtnMVy46x9e86CVy7iQqBs7ZRyaDeK3hxyxPFc55o85DoW5oirxzHPxRTCgV3JVuB2Z",
  "key26": "5MXeD95QLBe2G6cBni7BuTnewYQL1QEPkPU6SBt45QUUFwdUwWG2T5PC4FZqYYCSeHf9aPRNyEY359r6Wz79Ly66",
  "key27": "2mxMbDkRejyg9pYQJTqx3UZsGAYM8nUq15KDC5AV1PA8ZA7bN9EDaQ2torepFshc6qEQgjWgkrTBvRSSxp9bLh7f",
  "key28": "4kPqR6dD95QeHsoU6sdq1BketB95xt1wySJ2namnhkdo7xZ4A4Pf7XG4VDu9Vr263chi7SoRCjfhDEwvK9hRDj4W",
  "key29": "4URNUGpXk5k1PiahB84NcafzJdtPN5goV3WaJk1TijiDe7phbS6wZdoxzAmm7pedL8vXpxiuCJxSWuqh9JpVr2mT",
  "key30": "e9kXExRjQkc94yQaweLB79U7bGxNFZCzby6X9Np1JjtVpwPdKeeyZDiHX7jsD1q5stRNHhSJ3ekkyUZj6Ea8SAB",
  "key31": "4axG7axJJmGrxK9LCVcUe4QtoLTkV5MTWypgYrQS3i2DpQa9sQ9jWQe5kf2e3iCux8X1n5njt6AnMdaqpToyvuRm",
  "key32": "VoVSzXHfNZYz4kvSvwjaXuf6aHVwdFpqnNWrg4uTfVMDt9YWuZtaxs6viKbXBLvtygMLMRn3TgLLcbQFFoavpiM",
  "key33": "CzAmQHVEwAcwh2BLyXFre8b9G8P2ttMWwHPDJTwKePwAaBroMxpMMHCFdugyC45r2REe7dvzZbNj4tA4ZQ5PFrG",
  "key34": "38tESQxmvbjV9EogGKmwWBpMHyY79kBg7kirGkG5Hys9idFF2aXiScaxifHLCx6RZA8ELyG3VoUmwNdbdyYyc6S7",
  "key35": "3vx6RzudohSceppW6VSV8RYAW2FNLhnfN6BNTXRWMuRUtTBYYNsagTQawavWtXtQdEA7kHLGoT9dZm1RzbCSwYrE",
  "key36": "2RmDiWSFUUtAQf4sLRX2nCrqvkGtkXxMNmdsn6fFusDc7haFcaetaHvyYyxNcJhcLZ7jaAvMLTe6cF1HkX9XB5mv",
  "key37": "3RXNzGkU5TnMN4gjCVsy3NTBGkSJDphTaaDc3Bvd2icWzXSUfg3ZDh9kuGpPRnX6mvjtrqZT4DYJpgt94PDA1fZ5",
  "key38": "4jHnAkG3ZubcERiE1Ym6HUUe61cvkYFGahnoyBtEzGHvXwjW1tSoNZakGNkcLpoQz9mQzQ9Npz8tAnKbf5cMgBTJ",
  "key39": "2XWbuS37H8P8H4ZbZDjkA2ZzrGRj3vCJuNLs3jWcHBvHbvGuwcCX3Hrwoicjr7xTsiCAbhaR9EYdKqwtd5T4ncsi",
  "key40": "5fdZ9eJDhTnn3CxdmRZtca1hRxMEtKrzPb6XSRfJNKyTy5jdV4FDxQ3frSphfLSeQvNMrLMc3AHFsohNXvJJxkvn",
  "key41": "JPkR2ogEriSeFxNK67UcknrMuRcT9zhSLAyT1ZfCXvK8ss9gNTYgtjeszHi7oLfprgQ4wSFiZN6YyNrqKeK7qDa",
  "key42": "3o6kzxLcU5keCaSCrmeNdH5Q2dcUehqDb29dqn6wdN5w2fGUeLH9ZqhmKDkH7up1YF1X148u4TdyRUmafRHehnRb",
  "key43": "BS9ufacVSBQvmNpJXMJwZTdiZS5HwLfQxYaUJc4TK8PvB4Cr7B4tpdUBt2UwarGV8tw6NhBxy42WW7sbhKf33VG",
  "key44": "4penCe5HD2W9rBWeqLNANpzqZn6fQzEg1XiaKTzzaNNgG9eubMBkW9mJNhj7XB3EuNJr6rpBBn8h8doezdisQv58",
  "key45": "EKBL1jsQ19So9MWuguzJSCat49EBXpzDePJTLjjA9PLbBkaAd3jocs6sLSrq7GVAAqpaVdfuokWerd33epuk85m",
  "key46": "5e99joFwdPPQRnhD9qqxY6hBYq39N7sfZjSvdzPEDkUJgEu8Pijn3cGDF2wnC2rDjYHJqxwFiyiycYUp2KN74Caf",
  "key47": "2f6q17XmPYRm6vjouAFhRDFoz4ffVhwjPVKNQ5a4rwMMiuyPBvxfCxevs2ngZhxQVULXhfokp7q2E4MWWMXnb8ZN",
  "key48": "t7SirANV1FTrFEw2PFyutFmBZ2NrDQs9VWz91yaEuycuZJagSE2GAXQPDwf4A2So37EqALYBsPHzoq2ySy9K7aH",
  "key49": "38b4RBmc5vcWFxCdnL9UVj74hdTDxX4r1kJFfhAwihakjgM9ghTX5TPE79srPK4Kzj9hbobBqznXJ6c9DCYrPoKL"
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
