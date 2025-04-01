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
    "yo9myoNMFWxH69wKz4E7H3XknKHYbY5pHFZncBuSwATLKeiDCtaJpXqJs333bqg5uet6KthGV4Exws1zwwdwaLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bPc9it7x3oYfB3KUCQ7dWM6XufGHd6tfJu2AZffWasW1u6KpxxDQUNimsGzUV2JBtswDZNTbtgtaoVvpndQeSwB",
  "key1": "y1E2wzXUxYRCfrnE5axNk2TkuiG6QQoVfyWEtGERboKEK6yTwkDfUAquRg3jdmSqPYo7tvBVjzn1HQJbqxCo2ad",
  "key2": "5beyPxd55i1zufxTDDWNC2xtBXjvghB5pEN2DzJMHgsUkDmcNPgSXX1jP4n82zFUexRApUdUpGEGg8P9FX3TcK74",
  "key3": "5aupCzCwiEfQt6CHTdk5t5777FAwoesSZSk24Y9yiK3Ug9n9L1RnofrNUb7p4sz2DS6YMJK2RmpagTKLxd6zNREH",
  "key4": "2RxNNfFU4ufpvNUsuJe5CovQrczyAuQSmWPgePHJJ6pde6A6HPv66XT3u38DLyaqKuWDY1TvLnYXeoPVfwPgBoPT",
  "key5": "53tqGFYDobJfY1Tq6z1VKQcJjYN5ftXzpYvdFLnn7nWMQ6aAkBM6UKq8R8v71PPapbS1bPkWRxYRwpwyoBHXzA2f",
  "key6": "3pHSsymRGSHXzzqdXyCGGzwxtePJHECDBizKv34w4SkJNUNAMgmyYPXfG6LJTUnti7WtXLnN5c98RxLsr5WzDEsq",
  "key7": "31aE4erE7DsMBRu3E1gfzNgA87yypy2qdqH45qcUQjDZMKjTH1v1T17pL6Wwf4K8uAqSQj3zbWVEg2ayULTpmpsu",
  "key8": "aSRaMJrHNRdv6u2SHseFnxEJ3b8kFAD3cN8FKEvJV9dY3E5BCfMnQTY4hUTQdL7aNaghX4i4asiHXVeZg3XU7bD",
  "key9": "4wcXuLWRwJp8fsQZCJK5aNSJYQR7PV2Ey6oHMVoKR43Mvp18nmPFhZXmUzHhWSAsG2a9eA5wwWbD2eh6KhJxejWW",
  "key10": "5V1mtpQNiUaRw811pmqWtQQH7d8JtBxcqZaDYPTF68LY7TCFycduZwMi4kPrwMv2nGzQFTimsm6JEFWyvGUC78c1",
  "key11": "48WC6H3UQV446966owdwWqSEFzkMuAxiFK35Wrajudw2bpN27addkRisjDfGP7nZhXjVBNgeqt62awk9sSY2g9pr",
  "key12": "48z1BAxXpAjFU1eR2Uop7skwUkREDVPax9FH2K6dsRR5wXhm3nmojQMJnRQpBPWWachDgrv67Ypy3TWhXGzerjC1",
  "key13": "33tDxhLQ1orugWPpzLD5SxEPSknvcQvNsxVmZCSV6WCJwiv35sPnuGXM6fHF7y9ctooHQ3z5Dy6ui4eh2gxnDsVP",
  "key14": "2dCcmgJqGeXXgv5GPPzfZAKSELq87NiMp896epfi3oCTWyVDkbgUsc8bnSAuguRnM4BGNDUzzC3kEPFSK6XjC9mR",
  "key15": "4dUfY5nxzuGAdeZQoZJnY7VcnybUgRgn7vmuCQMQdcmrpEQEWb2emxZTfFrAZHV5uBjqGmC1rEroBP8C6kM1vyto",
  "key16": "61M1SnK8EWnQoH37mVGtuCAGSWTX42aZxadpScRS63ZmuPVtNDkJDH7F6EmC9XLU3e5f6rgW6RQpknci38CAzbgB",
  "key17": "2TybPPD5VuzhE846LWCSnHs7XbEFZ4ebYY3aHCMsKeehi1KUX5WMgQJhnubMU7CjvwKV1RQZiPJELsKBtp3LK5j7",
  "key18": "5QkrH4r2qZh8TLgvUJNokQqL1vPJpnwRKJnfMBJQmWnaNuCYMD7xBonvaF6gvSa1bbtXDX9YNoihockNd8xHHwwv",
  "key19": "5qBMgtSXdoKcMMkXEFfDfnW4LTA8moigye1K7vPNRyhL6edGYHLUtkSYdWoDHKpqkAgoxposL96R8dV2nPy8CCxb",
  "key20": "mw4nk7jXoniZVGssHmWsXAqxdDgAKm2ZMx94kfUgysK1ikCj1krFLCrPaYniWGELzucL7eZYBb6BsKc4X8xfnnj",
  "key21": "bNcE2EWQYgvChbU3pRcXUtn4Q4npeUMr51XhZvB7zwXrKswS8DJa1cPWqUFYo93W3b6RvgMYXX4U851yMnhBpcJ",
  "key22": "dNWT4MzaFicwPq4eHL6NpAoG5ESRNyRzYvzkQLSRt2Knj2PLVnUvS3LKNustVmmMauC9Wa63XyHGSnAAH4LXKkb",
  "key23": "5oSnT4w7HwQ69pQJH18unqZ67rsip6F4T4pqEJc1DgZ1z7swyGhwU4B4y5mCH44r3HVcRd6Uvj4LrZr73dvSdADs",
  "key24": "28VdRTMyWvMGF3XsFibc398rEGd32T6oZWgcHWeZsxZXNwBRLnEERwwkGVj98MXk4CGnBWpZzk8x8mWcysjYhibY",
  "key25": "5Xh8Mnc4zu6y9NSVb4ivyVKr7eHKjRUZvdtTh4fRSFNgCLDjW8ABuYpKFSAco7GGiPk3NURq7kE2dy6KQqftRqg",
  "key26": "fXTcSjfPjZrahT5foTeJpgu5PXv1u1Am5WLu37P6dNnTX6PHwWEGUrE92DiRTzJm9u7m25ardH3A7vWw9QbzWES",
  "key27": "28Qu4pYZqVaMHqRBtPCovVgmFYHvrHhhejgxrhK1BCq5z5dnfcE6upS1RGp6Wv1eGepTi447uVMnxhqDFurWoY98",
  "key28": "iSeeGeU4jUHwPdwaQD4PWHWjYvRDmd27Ep8wSPFg1FaQM5eRHEpLEzf46brsTmBhuVJ1Mxsmu2yozXj4hWvuoWc",
  "key29": "37VDNWPj3AH4doTdnxKcqUiEd9znNAjq5BkdfJEXvPmRxy5ejshztVwBiEc5Lgijfa7qahdgZ1zDwauw8bLB6yz1",
  "key30": "888epWHRKRV3wtuP1N8QNxk5DGUBnxwvmPT5ZFrHEnoHdCQkFWZkYkNhaMfjkFv9Yhyajq82M767imKwT1GJ42s",
  "key31": "2Tcbi4faFhvG1Dx6AZnMrJgJrBocPzABRDvH1RCFASuTYm2RUiBXY6JjALs1EkKsjQV735cXmKDpmy7KqQsyZPBM",
  "key32": "3D9eTAFD4Zc9tQgPKBZ1mSvUiDPSFUGjmm5j78zBxZnBfQCsPKLeChX6udTNjx89syCBWnKGQECFQAx1FD5gUZrT",
  "key33": "22yqRynFvfaRSh5qSni5TzszEASVmzgUBSHJZtQ1A8S4VNMUtjEm7Xq3tXCFm1R5GrxVtKwAAfCKRkt2hTgFsHm5",
  "key34": "56G4i4PKMGjcME4eEo66zMuaanR6xv3xc2UPRNnUzw9MJS1WDSbL6EyznH95LwEu5tTVkWK5Pi2QhWtrX1Kkxxun",
  "key35": "3x5AV1EBp9SAEvUKfuCd6sW8L1xhTZ4a1PaFrb2gi6XrR896TJB5ALahxupCsimx8K92kDyEyBQnCFrx9o5AMBTv",
  "key36": "5hYa4CbS4JZpg1ebN8D97eJar5D3pxo5DwnMkJsRYVFQXzw6yhtK3mnF9SBZVBbxTuPrmHpnbSHjpVN3rTmWRtCQ",
  "key37": "5bSHDFAWUNMDkpND5JQxeq1WPdsg5oNXBvGaoboXfyQfjXxxzqoshPJC3CKJzH8kpsQAHeBvPoeFKgsE64e6Heza",
  "key38": "5mwx4gBJUTSGxCYcd3LrzZ2utoNhKgQ3sMcHux3i4eGvJUxdNrpLBfHiBRFttXQXZsidfEGU8v11W5Xjn5wSaoSG",
  "key39": "3BVgdsZUwPGMJ2XBG1bnP6GsjoyeoXGMVjywNmgpJZ5iAtSQWiAH4BH6pCBcyAEUNoMjxPKx7tJGv8ngL4kZuHCY",
  "key40": "3kkVeJeRQNzXzg1vofKCFmJ3eJSjfCG9u95LujJwrejNSRcfGJtjwH9DKa52fHhrn1YUtgtEDDD6zjtvnioGGycZ",
  "key41": "3R19AEQgCrsVSbR9sxw3uTtkULQAxStWbcXkrupqNkMUgf25tWHYnuANbmvQEMPLtR6eYBkLtgXdek4FKMSq9D2E",
  "key42": "3CKBocq6yPLT3BA1XRQHBs88d5khytvVbc6osXZb61PTege3s9bZ4TgsLimrVjfZ9FuyKtad9UmsAEVc7DprkHDA"
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
