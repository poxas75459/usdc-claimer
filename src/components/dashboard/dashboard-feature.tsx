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
    "3zhmQe2qAoAyxGRUTzfcbMAHBfBGNBEJZndstfE7dT137ko6MT9vqEvaGcbsBdvjM6t63DKTqLaUP9MYvNxnKgkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXUfS9gs6sf6uS1CbpX47qJyzr1DAFoiEdx2wd3i5zTmkeiADJwtaUx4RmrrhvJjEvdWUbQnvFp2xpcRYodeWYX",
  "key1": "4D7WhEccFFVQweiMirJuBciiaK6b68pQvAN5nj1GCkyFEEjXeQvtoSjrpyFagjiSzC8C3FKGSyR7p517Rb3uqaYx",
  "key2": "2ixJsZui9FAKSKfMwGCZjGTtbLwPQbaVcoP6jrYRhuEQVdSGic6TyTq4rN3K2EDnEUHKCJYymdBKpWiN1CFLTGKX",
  "key3": "5o234cJsMqZrMoLq4MKnJdWXeaF7QKamSGaQPLp3H3J7EroZGC31uAgpgEx9k97GxSaLcVPrGbbbG3d6KGXkdiTd",
  "key4": "39gtLXMuCsRjTvv7LpCphtkkAs8PCsCWncQJSKMpDbWiHaK695126JRQNneuM5kRioydGwbFQQ3w1MEMg8JonJbd",
  "key5": "4x3k57K9sBCQC3vGcSitfLwKamMd3yvANi8G3xN3nEQScwdgurkoiYRU4fvocu1CHi87FobqjzKRfkthaUseH5od",
  "key6": "42P6RxiBAn83FHZC1zgt48KVR6KHsBr1PZjrU8o1mXaZWJxNLwLRtvXZRUmyPh3ELVpeWE3sjHdSxcTG4uQ8whob",
  "key7": "3hGjv3gJbyaocvvAw2pbXuyiDL8GLfAeBavPgJBGmxS6zzWG5Ji7Z4D4niyNCNaEw5t8xw1MazsqQy8aUFmZcpnm",
  "key8": "XWoLjAWtmQGYN5CJEYcZRmXdBvnxmqydAyrxx2VFL5SKfbPmomfd8AEj26VhhDPdv1F3uzXvxhDKVFcZw3jcoNA",
  "key9": "V4CJWJ8KpUvVQs1n2DZ1kxz6pXkDyuyKxkVKroKQvRQvWweA1twHtWGi2gkRarr4Zi6RZkMo5gkP725VDpoJvGq",
  "key10": "zsuAyzkjxonzTC9fcofxij3vsV5NQgn6oDU2oSY7Po2AeMXK59DRzDYSw414ynyyRND9j8wa3shkHD7x9UMWea1",
  "key11": "3MyssGAGxKSxxUd1pmqt3jWjTKLzXETABRyEuahHWSb2TVD19nJbGprZG1UAHp8Zo4YUuWnSVuv5Xxn2khYy1wBQ",
  "key12": "KAVzdmduEcEwZXNZ8oe93kQNajycRHEChaEFPQBcwMYKc94GJ6sCVTrZdGjzyGjovDubEzr29eySbZFTuAjwhbw",
  "key13": "3w1YUJ4rU4ynGhMdWv12hQjhm4NGkJpSJnP7c1dKn5UwpY1BuYTm34i33QfTYAe5f1AXBx5e4G4MLTpM85Z9hxHk",
  "key14": "4UZtDWuzpDU3NrcvyTJ6PgQdhXkaESnRdk2oCyUgsAhzLqDaMCxhcAZXeGGUi7nwiGDUacBhSaMHPcXULAGgMhxA",
  "key15": "2urqjSXckcv4uTzBQZMb6SttuvTtHtLLkAkk31rtN7CgbZaKQQaCEoTjf8s73G1suVzhrAngsXyYeAcxANJ7tqhN",
  "key16": "Whgm4oMFKzwdXfRXoSXwJWxcd1hZZmHRXBKe5tuc3iWyxiuZKcW4fu5jJuGiie7CmmEMb47kHTie83iLiV25Z3e",
  "key17": "3BtzGPM6RakBY6MuiyqSQWjxmWSdAY7xNZmVvjM33abmV63PCMRUCocLh1vngBhiTibHSuC5No2ADmzck85x6kCq",
  "key18": "34jCYd2SJRcdbkimt5qgubkWzFFhRfCfUkqpgu8xPyi4wk1kDkox8moqig4zJR135w9yEEMSbofLGHB8cqp9nSE1",
  "key19": "hvwBcGnPdo98hVoS14daAATYdw5ZkoNthag23EndVw8tJMwQPTM3iCj5d3UTmUiXC9p4ZUYi4A8hLSRtznwxYHV",
  "key20": "4HqyHr3rUCjasxVSUsx3QHKq4a7ijy67j9oLFAW7A21f47m3sPK18D8rbCajqCrrGabMqJFMkdpvgaeuxcF76wPm",
  "key21": "5quYBw7jqboMvwLvpHG63HrtNo79oeFTdF6Ldifhm9MGKyngazFHXdiHskDrEXiYsxaukQmX5RVnGmFgLhHLLXU6",
  "key22": "r4o6wCcFykhVB6GpZDNdBrSfAoKzQkCyB2jdYbAuGGWs3WHSHpuZDk2VceNbkdHFnzVoNWvCreD5Rvmto3YM3zd",
  "key23": "38DhyUEuK1qbiKQAuS19QF2VD8V2trBkktGHVB3Y6HgCsLGSFJXcXTbcgRLfC9B5caK4TRHmUW58EKWxyZEaJREy",
  "key24": "CYMAhWWLKyqw2oLY88GwkAbWVbtpFizjrnj4XAFy1V835T4ZcMHox3QuLcrbFSnepQ3qU6fwwhrtp1c8x5E5cmd",
  "key25": "5EtLjCXAqMfgCVYns6nNjKc78Cu8MnNm4KuQn2juPrqEshN6q4KJx79ewz7557semAAAXwHFNSAZfyjRBXavu8yh",
  "key26": "3CseFwM6DwxQKa58zF4v5ZdoChMkaRyp3RmESPpxQya6g6xkmJy6apLqvdVqA2KsDAv6BSMVFS8MTHop7kFVDajk",
  "key27": "2jJ8hs6cx15CBwrcGBFtYh2Cd6ofZozmhkTkb2AGsayuCku9LJk3v7fG6h6kzkshqREJwvFPJR5f9VesBbaSJ1vi",
  "key28": "5QXr43k6qX9H7iJFd46BW5NRQ8izLkkGkMbchY7wi5PWoB4fwZoFzvKiLfLmCXYBKrh9zxe4AyjXECRp79UG3xWu",
  "key29": "QicMiMCeayYULyT3etHofXcGRcVw6bFExbWeotAjvaW4WQHc5PZC3zp8NWzcjYvgwycdzedmTwp7tne7bcgftMj",
  "key30": "4fMzZr4shvgqXngWuiQ23s9NrrA2fzv9DkptabsacRpmb2tUQG1WLybAvTFbG8i5z3ks72wiXJpTVJvcpJTyofPm",
  "key31": "3m3Z3SURjsLvPvZKbFyBRhUm5gPvTWo6bwcekPoVonpairE6TmEGA1uWck2GkAuzCfuQUmKfzzwh2u7d1tPY38Dj",
  "key32": "5cFxTKnSSanGY7rbRoniLdN1x2BJAnPTQrSD9gbKre2ovJ2KDVghqXHoPYeWrTHmW9wr8YGQW1q5XkjhE1NfZGu1",
  "key33": "3qRqZ3of98yKFwMrJGrZfqtWN3kCewVnUq76vykAVK7Z8NTzDiJRB6sSA2c9AynWsj2S2PV3P82Nzb1XSNHnoveS",
  "key34": "5SyBb91UtcNpebi4F1GHpbqCCi7tUr8cLQAYtSJcWJYMnEHCbhUp2GDGmPToSCAg6zvcff3Y65FgpEArFRKKGp87",
  "key35": "2MC7P3xtrLY9c9n8X35rPnAKWVhCwd1WBrVbSzLm3YLufmZNnLfw4SWMhgLgfBgcmEtZBKJfDcPksXmtcAWjuBjW",
  "key36": "3XbuaSKaXhp2ARkN1avCLkWmDXjBQSq4XS1BtuAz7RjoGLjrE3dUv7WUxbbKsHtkTukhzSsmtaihy7MxAQMtXc4j",
  "key37": "3SfLDN1A5HxVXdDqniS62T2RthX3PjBFxKCySaeeJaAWiq957SzYpU6yrBQaHngDsjBssStCTwV15BniT2brwUkS",
  "key38": "2xNmWd3Y2qfhMap72o7GcgPxRHbsZdKHuhPpxRkzaaLXvNqZd1NtVguuGEvctyMqy8pT5gvCGQ4G8hDhSmoJzqtx",
  "key39": "2jmf6FMPmYoUMohNZ48EovBUM48hJG9kWvVq7gDf1GGjsdKBYeWRaYxMykThyemQY7iQ8XxS3j8dUw77VXpCJkFn",
  "key40": "2SToNbymJGmJYekXacBhQ9emooThWBCEUVf8fpTnHbTwCkd91y79Se3h9paF5GiG45WW2wFaGkxXqXr23m6m8Utt",
  "key41": "SNV8ocu5XL5WsRA9fZ5ibNXPabNR9URxSxYeUpE5xVri7fLxCNJZfBTbuvLTGacU9v27RFB82i1uYwwgCsACUuG",
  "key42": "65eMyJNpqfabtcPRiERP2kRpQKt6VLQGGKWfkUcVrywxzVwP7VX7MqGryx5aA7XTg93FwuEErAUtW5FERrpjnbab",
  "key43": "5fe2X77DJ9BSdPBZZCq3JCJVgF5kkLHzPhTU1aQ9wLQBrR9jnZofw6sEP62C62iJGRHWkkiNJR3NGF9gSbMNo8Nk",
  "key44": "4zyG94UTjbfPXBr6RYSFdYQiwDe9AFPcAP2AJ3gACVWPbRaqHuSH53kurtJiwePgaCLaBMHv2rzNHDeifUHDpRUc",
  "key45": "YawNWRgUHF6bqVfNYXBi4auGQJzqSU2ZP1D3MHkvYXhgeomo2JyBb8PyBEGFQfy7944PCYx6Mg1WLG8Zpt5fQrd"
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
