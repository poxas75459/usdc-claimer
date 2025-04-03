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
    "24St9cBEdDqhjqNoKeqcDF9HqZ9gWq3v5smj5F5QriQSjBnmiPPyU7vR11WBW7Kd3jwKoXkUfvhqHg6AjBzXS1ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kr3pRiGtdBYgWjjwQU7Pw5msffgzKcxgQvZ9snWtQv97JTVWNmrBxMx91rHD7qd8fi5wJDW3QfeUsuz92k9Pzf",
  "key1": "3qQrn3DRyqtk2yuK2iCeepiKnYwVNUnwgdHHUUZ1wZH9gqSEAx6sBLatwrqSG5gXaMBcJaLNnyxreTJyFC8AHjab",
  "key2": "4SB4gdkJt1ECemRZYTwdRzPADQM7zCuFWz4cDiRqeFy4RKancwt9dVbkttMTVS8G5nvoqrB86nV7Q4yKzvu3stJ1",
  "key3": "34cUcAdEuJ4myU3mn1THPGpHHMDUUQC35N1x3UtJJAvVfAb6SCUQGQL49U1GJWT2zUjG64nVmtMZ4G6yCjZM4ie6",
  "key4": "4gGN4ZvBBgcx6uuUeD8DR9ZyTuKVs3DjcA5JY67yLRTqJVcxwvAWW1uF4pJnn617pgMBxjqw4h63WvD1YLE95ZPa",
  "key5": "uyXyuuhVmNzi9H8KmVkT4FmfLVqvQ5n9eqmU4vP7qH1LrS9Dqik1PAtw5v3JEsKhRZQMjQtcELSzXwdpBdTzvGK",
  "key6": "2UaLGrYtNP4PB9s87mh5PVZevFyCEN9Xaz8hYjDgo8w6hNri8n6g2cr8R1XSdM2TaNTPJ1AJptyXit5ovAJQWHDo",
  "key7": "f7Vaas9HyxYVU4raSQFNL1xyoPB1RZGgPVEAAe6gBMNp6vFJKr5LWyd3wQnZoXB4WoM122NcTY97g783y2toNSE",
  "key8": "LjDPTF86MokV91F5jspj8uyASgJ9B7oa4VfKteLGioSnHq4DHRW94dawKc2Y8FDLjB21RdRGCcbUXtsZi5EnqxK",
  "key9": "2Js3PfoJsnQ56X6fSkMj4gixivNmNA2f2mmZozuwTQzTvbkdG221EqrbAwL1KRYdBxShGoY5uDbvHccghQG4MTW3",
  "key10": "3SG2zY7KAAsfB2ipvM4fzwh9MrUvukbXzMuT2TMC7k2VSyDVzzu45Jvap8Ea6KBX7ABhLjVoiNPgSzx7adncEyxR",
  "key11": "qn34BW17tYgV6oCbN6UoW67rUmoRAnWHvGvbPft7i14kTMa72Jq8FGvNQSN7f8L4MRKWkuy3DYE18jrAHohDkVj",
  "key12": "5unTvNFs2FwdSDT9kBgioncV8XhvqPNbPpg5XEbpXSTk2zvvxZU8GNvfxhLWpk7kAXW5gULZkTRa2Sdt2kSxySGY",
  "key13": "2mv9QCbNDDc8hJhZN3WQimoeSrCYJdiEkMNcg43ysu236tuFnH1JFvecKeW9kdxMHQwiv6HsMJR5eZMCi6ErYjJ8",
  "key14": "4E8rkfTqrQEiSGkxSqM2dEgbE4HXc5VASZ1xz9VyHRVrppvutFM27FsbdozeAzQ66YW5ZRQgim86qvA3ge6vQDVe",
  "key15": "eRpGDecUTCuAaR8mmzQqoXWr6hYPYuUc1qL66k8kiF2dv2zqKBmMK5xZvnmYMooAr7N1UueFWSbwtLnfm2sbNXg",
  "key16": "4UjsjFPAbHG1wExhvzaJSzyAk2hAAVTZhgdQ2tswL7esy6eZiY66z4svbNkeRaLkqw79MJbG4P4a46hiVhKsn37y",
  "key17": "NoyLuTccuz2EGcjp7RwjdzGkHHV7SQd6Ub9PK1kHFxapHC4PSjgUHMQtuLLpdo2crLs2M2v3aGycYUuBkXTz6kf",
  "key18": "5U2iSdWPkQwfHTBa7yPi9aT3PtAjsR55ec7hJftYzrfqHofewjVtiDESfKB1VZghc45Fwhn8Hk9jYSXKHYfjkvAG",
  "key19": "4KyVum6bBmCmRpf719njdubNX17WdwishQzazbnHQ9MdUg8JwxvhQdtXZUKHXWtLm6fetLsF4DggU5MZXr869or8",
  "key20": "2J2GGGrzm9yRd5GM7i7HxNZRfSWoDWyyTd3DPYdVWqM1qfJyCFJJiDJZ3mj6Dun194wLg16ap92dVvZFZ8NQ5z3S",
  "key21": "2tbFkzngwC4hcezyZLY6kcFpEh12povqZfuf2ZjhcWu3EiTYpqwY6gmSSkg5N455SCerGDCM5piGNXrKo4TzA6p",
  "key22": "1CNq29eaFQPCDrfmLxy572TcoPXr3zCYCYVBSpd8FsJeaTo9EQvnhRsuexvkLU3ipCQLi3ADQcmkNb3Fzw1YFvy",
  "key23": "47P5C88yExemDRpgMsA7EexrPadwbLQjwHUR5X2hUZLNoEJrfZqU4ZYZRsrktjc4ZW93A9prJwj76YnVJRCjZswh",
  "key24": "65Kdmn1ZHemtu26BxVStzpKP7vsbXMHdhQGVLu4fxJkzqnhkrax3prhfm8KBtQ1tUzcFUKv4ZxSuLco6ZTe4ycvS",
  "key25": "3PSk8orBrftichSCBMy4XGHneoCdQg4pmbwyYEu6xEKsvzrFEwQ7iYrCQqV1BuUgw7Y5yRjk22aco2WdjJqTdp3d"
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
