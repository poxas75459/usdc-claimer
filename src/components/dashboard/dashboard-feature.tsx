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
    "4rUJTE1xxNsQNmxiguHJqh9LB2qzyDZERFZULxbDzcx25pKb6ZxM5K5sHSjKiTqPqVhzcVJ6VvYz45uaaHD3MGqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUG9ApukWWs3BUqjk1sqyZZVHGdZTnZk1TtcanGdREzesY6PS7RUn3WWkihqmhFSEkEHNc6MfRD3HtsKHcqud5D",
  "key1": "3yNgs2QW3dFpHKYB6yxB7mRmy32iRy389aeV2zoknGiCUfb3bbyZPz1WJBBDAEQAUeM16ALb2NZzyVyn4hh42gJE",
  "key2": "3wYbDwUQi3Txet442pAJMrrXfb1isXNaSqfrFENr2FC8gPm9dnB2XLTn3kEK5z2b2nvRXE4AojrxfxDnwkSKQijX",
  "key3": "6KSvhhmJtasVsuz8rtJfXxcvLxVkLHtSU2dLRtWE4ee6uXu1TcZirytSSvEJg8SPDhD97jTkNASUnp2tJx1A6ja",
  "key4": "28ECVTyLKhawcc8zTu6nSS4mKRXWQoP7EM3FqpYk8gev7vZJ9Evrn9V2FEBph6ccEBecHKbZPFdm9pUyqAaSEpfb",
  "key5": "KdJe1sMGCtBqgdYzDRAknKqjnN8jxAaDjXy6ZnpfVxzfJxZiFAfPkCpEg7JpfXajTmqKSJt9mcnePX3Qa29gzRv",
  "key6": "MybjjnamvRgFhWAaWbDD5QbH2fW1qg4RskbLdK3heFpGpqw2otvyJxDpLG3H6wC2zorSPwzrEnbDdnCKM3ggfKk",
  "key7": "4A4xFhpc7dGKbpyppQC8kmKBBgnHna38s8MM6cygdTWFzYbGYVDNZqVbxHQ5Zp7gdKYkJezvk9uhsGCFXarRrDyh",
  "key8": "3T14rHSBy81xejbiYM7TqgYKVHGTKvPtoXpA9GXs6ftuu71MhRSuvUuWLaAVp8ZCr2BE5mgepR8APGVibNfPLpZm",
  "key9": "4Qih1wkZ3mdC7niwegvfFvxR92ghmMMY2AnN2yjDRG6tjDwqwJ5MUWP16fL2T2eMENboF2jhVc4o9uwpn7ysnqUh",
  "key10": "y2BF7tqT9cmq9eQA72yqyUc9VCsmZtfPUjUjSEXkhuimm6Gqb8UmMCRfX7Hd6Rk383a9JJa2ZjQVK7HxjNHNVyF",
  "key11": "aJmFFPJPfQEtPYRZNTVEFfmHrScKrYXyqz4THTumk9BeZZq5DpfjX45EZQTwcaSsQZvcYHyiy8mpV5pTyE7p5m6",
  "key12": "4EKonCn1SueWAj4UK8jLeAP5Xq7iWK3mdCPUzob2F6WPt2YtW9MoqJAuK138Cd8or35pxjmE8itQRUsDHuzpACHB",
  "key13": "3sNqu9uNMoZGa36Q8HW8vre5Crx6K13X7sddfibXacEZs2WF6VDBfCWqo3y2pNfz83H2aHHXrn7inobv2aan2Np7",
  "key14": "4URn1zoKvXSdLpxZzwkVvZevwK8v5trEWzrp5UQj5aB6HNVE3QK4578fzXevGKGb62SN7FpLKbnek3U3hnAKizxA",
  "key15": "4bCUUCuq1oWnquDiodk1ZHyU5b6SpKtcprSxx5iHLJ7vwpDoz4LqnfkWzUokVWsdxam2cn2bbPyZA1Kj1ktUnA7K",
  "key16": "5L7zqWVYKGLvPEjAdNkMWW7eJfD1teTksWWLYndNJRQsLjKxAurnRFUdrtESwZoWbzVsGhZ1VhJWmW3HbSvkimL2",
  "key17": "5KazQoHjNVjEoAMrv9YHV3Ai4b2gBN6CQG3s6AVHAnBPaNP74HiRkojmZaVj6WTpqq9APiAQXrQJUAwhjUypCyCc",
  "key18": "5RFXa92srzSmBHcYfuvCnc8cVbdansSdms7JbJyRfRcmkhUi5RD7u8shvKDQrYicmU7VKArgvQHtgCAq9KCKrhsH",
  "key19": "3fSLeE6LbSUKC2uh5AfyvWyssf9vLA2DzXaY7udKFx7544jrCeH7dT2zeEJ5eKCWGJgUwnyAtAbWUyPBKgDdBTxt",
  "key20": "5yF39JnSU7jYoPfg6dsgHk9LQp5nq9hqEESWUsAENwufmRypef5CoJvNYBqy1oe1P1ds4iu65zTXkvvwRqr5YQNi",
  "key21": "3HGLpqQDNMBgmx9vV7rvYoA5ukeU4Tz18L129vXd8CrFQmGbnmx5A1aq8iqiEtoKQxx2oPa8BdGdqp1vd8c7hDtM",
  "key22": "4LE3KGmq1J5CPdcGGSWF3LeqHiBRnjwJyPiBe81mMh6HQDNfqHDKRyFVP8x1Zz7BoC2xXnnN9tGx21QLcBhoxTaS",
  "key23": "6Tn3ukdahGExcfR9U2xpv5kLfxiyjc7z6tVbGDNMAcAMcZBD9dpmvUDyhzwfe5Ukq7YCTvhWK98VgztZu4N68WU",
  "key24": "X64XxrUs5wQkKmdXCseukEgFXuThcMLtvUABthQDHdeC2cnBa8yAeaNDzBvQxEkkVrwZM49awZP5ykvzM6gKfp7",
  "key25": "4pmV5dJG3JBWD8KSbDZQH5LoFt4hPAgEW4SX2ZuTAnhJt7xhLhbJeSX8DYcwnsj8a8kWKSgzwwd2mim49nGuzkGe",
  "key26": "5dLN6ThF9vJTVp5YrQRHfeSno5Eg3N7r5ZZMCarGxF1S1aVZ4jwV74pEvMhDJ2Wv9ZbRJqJnbA4R9sSAubDKpXJ8",
  "key27": "67XFsq4ZsgLjEDh4LvsUrynZesynBsBaWuDdqo6DGE6Nsh6KXrEnY95Doo7Qxcj4k9Qwte9yi4oyCefthnayYMYU",
  "key28": "2XJgfDGkeAqbrTWDNs6954BP7sTdwk4M4ncpN3LDydqa5uXCKhoeC5jjvJY4erzGANwfpPACPTi6ABpwSftHnELA",
  "key29": "2LAMzq2WjeAgUfyCwvVMTx75yoWrVzfJ4RMMe81afcKKbF5J2RzQVVPt31yARzsf8bGThHAGsqsY5A11a18cBTnE",
  "key30": "272FXeebWN41wAu2rcSkvTp4rGE27QAd2Jjxcqp1TbHmR4ohCk5VjVRRAaQx7Atwja7mn7XeAXxZqd3ZSbVNqthK",
  "key31": "5qShcCTy35QBrxnc6psnxn6qizMzDXtzePT54GHFCKnxLMP3U9rDqEKcaiom9NpWxrtH6VL1Ks9V8i5LVvP3tJ5A",
  "key32": "2ioZfs2KhrYBrEn2pZDEWnMAekY52wGosZ5PMiaKHY72sfhHosMjBAdvFzFVi6dm7VH55d4TEngqunvgjBJMuJub",
  "key33": "3Tdc8bS9wZ3FiTgcafQ32SWaQ7ouoskQqGcXU8qhkaEiGURPpp8miWJvNWEqTtbj4gboB4jSBx2txNvpP5jrMJj8",
  "key34": "3rLTvuA5w1GuECbVFpP5Ke1DFkg9pGjsBJwH1qvWVaUz7MLNZx5j8bya7rqa4z6Zxk569e5ew6pgAdAZzwiRodaG",
  "key35": "39d7Aiz5AEP5a3gVuBCfCwT8ecdXoJRhgTcRveTVpsqZHsr44K1jenqVhkrAiGCLRgRN4fhjSdJkgoiDXDDkGiCj",
  "key36": "3RJGsE1DkxDWmdcsu5wGW3nTheyTdRUJaZ2ah6kj71eMtMr6u1syhmNUPM7HicRc7RfktYdVqvqErVjjMvLZhg9U",
  "key37": "tXhCXosSFrxbufTaxzMzm3FDU5VCcygHYu5TvkZqegHxQgyaXsFyfgVX9Jor3zCd2aARBYmjSftJC2UmsGGQF3S",
  "key38": "55xNiePsQgKrrC7yQD1WdWnfpFzjUxbvnqDhFzJSdkgbrc6yTtxcowE6gMEvBwjmFsHHu4Mk2zHefxLhDv5umP2B"
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
