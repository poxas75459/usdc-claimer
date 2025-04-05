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
    "2h8Y4KhKr6ukfyCoe9znz1uiyEupw4K1SZUzfC2mnEvLjrchud9ThYasqZ3ULjx1EZSMzevzeGtgjQDaXazdRFrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bw1fc1vm3qNHGiuaTm6xoACmY3YM62g4a9MbbHWUDGt3sVqturrCmFDNzNxd5xEECmyzEKdEf1t1oTPqMFxK2AG",
  "key1": "4doE5uKNhiKAVpbFqMszSoFcM77yhPMZF5ktj5yiZ3BPtcXpFzfFxWHNzU4KC62s6rF3fRRHuf2LqpkdVGFBZZ4d",
  "key2": "3wvf2brtqpE7nwy1u8xCwch3bH5cSJbYnP8rhbG9KoZCgmkgBtxoVyAiwMdHyjdJwMd7wLdbtpUfbA5gBxxaoDJK",
  "key3": "D8yvrrzxiDzqjJYkNZBuWtyWzeBKj7RUsNJXbbHGTRfvqFPZgGRN5mLeXnErZPm9feDDYTWySMhNaXFbNfjifL6",
  "key4": "27euEo8Logkk7qkbBeqqH2AWFdFg5BqDc1uMupf5cHAWPXRNqrkX17p4NjCirgLvzbfTQLoMBVZZYTigBxZdmuHk",
  "key5": "wZF2wHgaHiALdCPUoK42PqHRVL7XLVycXoY46kT9io59XcGgF1V7URj9sQqGSADFkqdEYJfXM4caWFSxB6Sq7bd",
  "key6": "5AZahx7xPtuJZtzZRCJ1vPs4aZM4bvX9UEcdNAKtGH1RtpYYuAHNq8LZ2o1Z31o43F3Ur3Hp3jv9D6HF67uYkCmd",
  "key7": "5a99zG17uwgG3Gn2jd9u4Tpx4YvoY9DZ1c2bSWBPh5KTHpU6KPD73iUnQr2ouKShGMTCED15rTb9281C2AmnTDtx",
  "key8": "AoYf9TvfuESJ7KY6f8gznbbqvQwMtG2bJJzSjd7uE8NWWSxaUefow2X5hk4WQh1apFPeXdqoNBce26KVU2bAm46",
  "key9": "4LFo6hqkcDDihLZ5J3iEaRaYgWn4oXgC7ioViuFnjzDyomb8qBnVhV2BuYjTB8ofqaH3MF4KX1hsEiLkt6Dd8TMG",
  "key10": "3MZvWdsxaY11pH5EYDwaEv8zdWLXGqpmaDtb4TsMjcTXXVdAJBDY7moNAtsWKcfRKtc3KPSP3Z2q9Ji5R4noYhaJ",
  "key11": "4RUi6xYUD43qiwMvqJFxqTh2BJiznwwQMSDwDgNRhY2JEugn2uKL1sCB9KB1kogiJeqLYiL3Q6nFgHPpJhAaqXF8",
  "key12": "5xA2z85CfTs7jxfzf2PLq3r9jK5K3ve4f5WXrTod3xMCAgsgt52NYYmmJQpAQmee1wjQrGPz5AvaexWG64eaaULv",
  "key13": "4Yo9oqC27YxQxkS3Wopk68hGGWr6SDcP5PoYGfT6SSrcb52NbnwXVYiPhHGV9s8YqiXGh9tc594ducMRftMZv36q",
  "key14": "6ZSHiYpuFf6JXhDoUU8UMn43cY6TkZNqfbzA8MWBisuxCUPSKE1fnFVLCqxRz1tPkGQgQqgWWQGDMuTaSXh9Kno",
  "key15": "2C7YhVh5zEBwXGyCazGSEynKFwmknsfffXY7Bix6zUdJRZjVNv1mqbBzqHMRopuX1ZudPPpQcWvgu2dcsxYFsyzG",
  "key16": "4YTo6sMJqboSc58EzqEgwGE8hyapJRuNiZt8zNLzdH675TdrMyLCzt3Wg77tiYbTYQoHC9eVSG5TtskNtaZsZc5Y",
  "key17": "5joL4wmCf2hdM5UjnqPr8w5vA8tF7GLpmJpCJkdfihZQu4r8rRqukWY62T8tj6L9Xgxhp2BitsN3bUB578EnfdSw",
  "key18": "54KMNW4xoaqWKppCyDRAQ2yTDFwM1TXpZnCo9gfebopZbAo4CJ8Vn9CSPLsyfByRiBSw4DxVyjs4qWiwssoaMFbk",
  "key19": "5g4E2gydN4bsGk2KSAJBoAsYsTsqitTNCtzhKFChVnNbZ6mBNsWbJrQGHGD52VfUR8TuYSV7XwDURiGWy1uTPoXb",
  "key20": "2gWQE8LruLreYnFqfzbVK4z4gChwrpdCb3qB4bj8BoX6AVaepjzmauCeR4QvxoRAa8BTv9q8VieSDLNZtuQ3wtC4",
  "key21": "2JfDSQhMHSvP97oVa5jcE62K9C6emYBa6urkajN7LZgxPHTTfjnrAak5iT1hgqXicCDTjNkgkeUshC9mMQ66wxmr",
  "key22": "2KPu6997Px57Dd6XcZ5PwoFbSgWRdB8GafpWoEQG6Koag1nkw7q5dX9CfPQDnhsniitiZferTKjeaj2mRQWdXCuw",
  "key23": "3pCVE17EE1cv2JzhgG7SHyX9aDM1nM2wLE2evLRJnDDMuHx4dmPCrWucgcUoBZMso8t1UA6hEspqBdQ2Hjdvt1po",
  "key24": "MHNU7sbgscswiaXkFNdoXM5fM5m2Z8CnkZcdk5h8rJDruKrqoNNGs1RjwST1C7CprV9AVKorPLimVT4Sd9wFgpR",
  "key25": "5rrrZ4p7f1QEkD5a8HFaijD7JWsCTmaSdSdm2Jk3iipbfkAPUZuy7cDDKwQLmtGncpACekWsKCfFmrqKjBsuVEWD",
  "key26": "3y16E722kkcjBEZuu6R8wvTN7Fk8VMMU6duSrY4aRdgD9X2cUYJaNqgCXnukTrCD7KDbyvhvzmpWiKYqX8LkaAZ2",
  "key27": "3NhhQyxiE13XqCLE1G9TNMCmyaciB4HHHdp3ejFmQhUCYQfteHT9frDmx2wcfxjvSUANFmNHpcqrTZqWRQ9wfjKX",
  "key28": "3wp7yfntspSQDATbsK3uzW3cbNqVTFf9yokB8xTBVb1vf28fZApQSMgchw3psyTtKsicodsDRQ3q1j1q1GDN627V",
  "key29": "39bgcphNNokRTUz14LqLj4LAa231CBEowxwhQpsv8LgFYnKCtVBoj6DLphVZdNHi3JUFSRUbvMTiy9ooQo9WrVGi",
  "key30": "2wVjH8fwr4qTd2eXCieJBvgXtowbXXqXjJnBB3huiXSYRqTKmfh66X8f6mmDWKPeW2fxEgcTLwEaMHbn56bvE9f",
  "key31": "5Ww1Pc7VM4bjrytCYY2gFaWV3zpUZNqgpjWXpikxXzwB8qCxXNHxx9pcpPFE3oz78FUpn1ED8KhYRt5wffXfnQH9",
  "key32": "22jKaaP9kCSnaqGCZ6ouj3xvxc5upJsBcxfkcTpXnSktFpeGsuCkqB17HQBALjQydCEwzXb9a5RnXYtSKXEjEiHP",
  "key33": "2TNvEF1kkoHv1vYAubyxwzrMvr2KznxyNSWkeHvCaS6eiv5hqduWEKzkcgnp6ttvwyLkPMY8Uf65eCRDBDJ9tBcZ",
  "key34": "3WGVgFTZeUDfM1LVSo8hCfpeEtZkqoGS5sGJwxDJu4iNKK6d6ZQCMHJF1XgMYv9wdPnb9RvACy8FEuhBU9PapKSv",
  "key35": "2iiMH2FeArfbfwsLtR61W3rYqwnibprin3RLJa37RJ4ZNkBEUeFZmxNPJRuiiUVtFxMFJS4aPdZUMep6kD1hYBcr",
  "key36": "2csMGcQxtDojN75N7HPQHiFRuAxkpsVZpg2nkpvvyqZ7GeRyPQREGmo3jC5k3UpRY9GWVwMoyiGE9JmQghuRbcxn",
  "key37": "4kCMf7prFs1AVrouFcP9bTV2FWFZinkh9WTNFNnuiDrH7YxcAAbD1pjXLCtYEutGTpo26uXfd2SqqZWZZ89dhYzy",
  "key38": "5eBtZ7PF33FizXWuavXrcwyCvgxKW89qVdyAMww7c5G2vVJoFJ62DhcyhWx5bCk6mu4aB3T3MwnP2nx2hDYZF1tw",
  "key39": "3txABtRKcpvd8YkJX7jGY9ETaL5jnEQrjZtQuTXMraXWJw5jriJ38ZzmFTUfbBAzSgMoscHQr4XaEPpDXjC39kFZ",
  "key40": "38NmbUCFCgPyCBjomcKhVK9x8pf39iEeWvTgjXwF7S7n9xQPTfGeKC7pzqmfdCVDV1g4fyeyj5LR2ZZMh469KmH2",
  "key41": "2WEHywk9MMNXjxjTXVYiJcRRNaCbkjmdHb5P5raQD1mhuK5ZGSLZBPycJb9mTXp3ErFEBPUtVibhca237sgzKzk2",
  "key42": "4icAcuJsaPWRXDc1CMkQqmqqu964uVkCVRKdTHp8sLy2CHiDjagCQw7NfwfuZtj72svBtHJRpoTGXpWX2TFhsQDG"
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
