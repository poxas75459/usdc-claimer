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
    "5CAMirTJFVRprwKzZPq8vter58Tm7MUsrGFVy5bbaS2oxGUe8DA5EWQqhSt1P4kGK7VHzYSAKyMQjjY2wBxQAzDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWJrNaFKxNguxokii3L95g9LAZ1nNnpsQu5d9HDuYxpJQpRXjJLx4LBRf2AcfgpoLMiZHJ2pQK1tKXYeZMiXH7f",
  "key1": "5xe1hS1YKb73gobM3ZfCDxgdv794BBHsYexP8pN7K4Mc47gA98s1BBeJc6Z7dVrGcsr9Pm4cVpGChiGxE3mG2aZn",
  "key2": "H9j75gC2PFm1UizrLtRz6ado3whtQ1mdVkoxXA8qihkFZLWyJdkEeELbwutzAuDH95q5GRA6Z4bhL8PSuMvfKhF",
  "key3": "5v5NQKpbR4bG8xFR1zHfdKiRVMtiPSnLCPY82B18FZqGGvE2WgY3Z61UC3Bexe6ui6cTMkiH7LwDhYyFeWak1R9Q",
  "key4": "2Y7aUsNgE4cTzdfiJhkXvofwtniAkNhbuxEhsv1iYjzr9kCA23AJiMj368mTrLoTw1yA9ostXBcffY79DL9irBb6",
  "key5": "3BscCAeYBDxr7QBJEj61rmy85VWQ4cKpv1mibk8U1EFQQpnwuQEcuAWJ7WxYgSS6XZu39c8vdsCVaqpGowBTxKW",
  "key6": "FUgtPTr5YutRhMr8TEYtjTSZR2tL7UnB7D2oeQ1QjAnhx8xLAru7MAcAdGSeVydBrZ78LGM2dJSEzPUP4sYzmw9",
  "key7": "65T99S2zh3SAzy9iZL9LK9F1Uz9wCx4qtcRfkzLWr7oBwEReRRfj4sYjUfKG2ymFyMcsMFYHFfsyQBWZmZNDcnSe",
  "key8": "4Ahv3U5fFv2AtSHLKwL7vWAkaRLrRYkTmcsjBEATFVo982N6dMeKu9Prs1sksGCFLG6m7NRsnY7WyrKKJTxbc26V",
  "key9": "dN2QkreZg8uKASy8E23wpDTRzUQsqZbm4VqXhHMZVRiCzXHht6EDzoDqAErLzXeTCQyn8tNnxnya6KcNkxkG8ED",
  "key10": "5kUPpd2oH3KUTQh5dfSF4qxhDS275ofLvRuR8MKAaJ6yxWeChQKzS4uSZFcNaGC7Y6j7zMCXd8GF6q2kYSmuXLG1",
  "key11": "jDe4PdLcKan8A74Sxjfnzv4Rv6EDCh2is2PJQGD7V7wTT2fFgEAMdoD2wfHRgk7LLgpABSYehUMovi5fzphziRD",
  "key12": "34oi2YaSbAGeHoRBroi4xydPxuPSi6r1qkKe5uMx2P4mkcVjrXTfrQ3gQEwY8Tvwjv8Z4EBRnx1z2oMaxaeR2Hkp",
  "key13": "5xQjr35vo6MrtpZ5NTJAhs7FE6ocsJm7A8XJfr4VzARe5pjcdwhqsn7EfuWiNMAP9QPAAz8goZ9xD64xUuGnyLrw",
  "key14": "4QKuau1cGctkRfpDTgap7EjLh6kbXAfqdGre7DmvrAbU7iJ6QToy4DLV2w9GeKYNh9vHCS1sBwjP7H5sezeL3BQZ",
  "key15": "tWG391QANXcaNPTtyW5wEdsH8AxEnYaG6Y8aezKnXAHj7nsMePc5eKLgp9oxE8H9311u3xu5TTdrPCPASA8RRkE",
  "key16": "4DPc5Ke4fjkvmRSY97pLURSKvK5ANqrqkArsySjkRN4Kvsj5QRZybWD3Jrz7KqPSwPKJzmejDQKTjwFohCjfLpUq",
  "key17": "3udABc4kPKZUCoaNVA5x1wyAYkR2VSkz82m6NxHgjUm8ygsAUBgpLGLVxo3pdMgR93TCWt6sw6P29gb9NanPBXmt",
  "key18": "5KBvU92WG4uNAaXq1YinowGzog2J4sptRBSz8Zu48zWE8y9BRAvmTWHwGiCNsU985rfYcwPJB7UTATZDnvH2JfZY",
  "key19": "42oJYN1BYmgGYNnHiUoPz4tBK6MXctXYh77GKjWmuZ3HsVawXwZFo7PWdsj2j9Cjqy14NkWyvk2eVBr2Hmg4mxYj",
  "key20": "5JvwyW6FKX6f1XF11p5onX1bbMdfpn7n7Nyy7UpQP1jajRBtbMZwfBYTkbTGGM3k76KFcAr1Vre5ivYiry2BVm5U",
  "key21": "4C2azRPRDbQQvtsfMn5AkGLZ8bZxWAgBxV87hTDmyVTWxuz9ybgRTwZK3RiX4U3GyhSJ1Fv8iGogkVcwzy7zNmub",
  "key22": "2HLx3tH88KZACmi7amD7aMfKJ1f9xRmrnJMzor6kefshQHErChQbcZZ2N6Qv9Y3Ww5bNXxc2vxttH3dBqnbMF6wR",
  "key23": "3n6YmzVp7Pf4cQHH78xSUmgVFuVV286nG7kyWviwHaS8rAsbDPBtybijSa1JrVUmVqxBmjixt2cAWUYTBbFYmivm",
  "key24": "36icyXzUNsqZPsVB8XXeKp5fbEfkGV7TqFdBwvKzEerHWAvNKefeJHYgBtm6Teh6wjpz8Ax8oMHF91TbyrxHB4TX",
  "key25": "5G6rykqijVsvjH9kKnSDJuSiG3wYccpRHi8YynwZNqu7LfigCjsTvrx1dmRn5HAjQwwKFQbBTZC4gLn3Vy1XvDnv",
  "key26": "47VdevDfHZUpQbbaProwqobVpkZqT9pETdrFPQTJ9NhFjMiE1eRLgTS8EZ295LzqSKuP5Z8S6FGRZhHib136iV78",
  "key27": "23XRftdQVNG66HKRzizYk6QSQrJwVpuZWcYe1iyWhmvF5qBrQ1d6225Q84vCTuCyMk7juAtaZZaXzQhUa4CCyeKN",
  "key28": "2MQDDCyuAXEavD9CHQLcuAw9TtNCCtCWM687bikixnUzofQVH8bDBhMiPygb6bVJt51H1AsrPEvitULD2kZbT3TE",
  "key29": "3YgZTdB5Xkz6P7MwSFSy2jJ6bhg71MvAEgx9wtV1NKDxvgehbUaP2qLBMHu3jjbR1vmV217csZPQg2EL86HhwK28",
  "key30": "4ywKtVV1q5uZDSg9qZyApmwNFAijPoA6WisgAwtbskTKTzatMnnxGfJ9yfzo7ZFKRDEAKFhi8c2WDrUgH8LBpKbx",
  "key31": "5irtPKbFiu8qfoZMBGtT8DPptbttocTsyQt4TZQrWsVMqR8XMEpV88TcMLoxYRUYM3ApkaBSJ97J9HLvWqC7bUCw",
  "key32": "2Ch4arY18zoDotZawpfbqu6RhZE5JQkCHZuT1KpHTB1JHeXcjkZA2Azs6xAExxUCQqb5JzEF8tVk8HHwG2mAABQn",
  "key33": "4zQaqKs3ULPA1LkHxschZLCWDfcXGqzRUaH5Ur327XuLmk62wBV9nuRV5dPCZAG4jyo2MvCs3uRfwoutMZ7Cbw1m",
  "key34": "7b97ZT3EQQeeBunnsPF9x4vcXtjjeMLF4ZRZBPSYLdRn3wvtQZL32ijHoMG6uBTYbUDeeU1aF6cqwzShVyfmQVQ",
  "key35": "2fQqdCwGb1SPZLoUy2fBeVLkYSZ2hLhaxrhrgdno5vNMN4B4q1C5AMMVstUxe3DLqDiFhJeSZEiVLcNuFSom7GQ2",
  "key36": "4t6mKG9pFjc9RjJNm22vD21R7tt5bAGWAWon3aheRLvCZfVg88rwTco6PFoMhjCo2GWsxp5fJSJ7CoexGhxMGG5k",
  "key37": "GrJFnxMgy1GaPnACN4VnGnrfkUn5LFxaB8fpbuGrgC4YKoV651esFQFJuaRKKJcFBQNq6V9xZJzyGBbdWzSggE3",
  "key38": "6786KqC33eiPv8dPz4LvS9kEsPaAHgBxx3TC4uioLdzpGVJW3wqB5n52mMTZmYCgV5oiamxGwBorCAVnisV1mMM2",
  "key39": "2WH7v3P9BA5ezad16V5DqVsnvZVi7idjg9gD1kn9nFeXB2MBJLHHKGE5R575uzic9yjN8AVSz8mwGkmJU7YyAB9Z",
  "key40": "PGpF4EGGNUG7XQje6bfumSTq12xWtobxSNBwsVt6mXz7xJXbMaoHnhQtQwb1JUp7Skc42qTGhUkTv4NjvkX8VdK",
  "key41": "65eLJLmbbJUb9gfXEWPRmngqNQgAc2N19kyaizeDi4C84zWWbywqbHugdBnctF4UL6rvNXzgWiQz3xSusaHfMMxK",
  "key42": "3vEmT75MFvxbEpXyT4JjcNA6tnxrbVyvdtHHsvbMRcW9FXURUeos3UGJWjUHYqkEdFp3c9wonZVpCkpEgyMC3pWW",
  "key43": "5k6Q22LX4v19rEQ47eUTKeG9BQ7xMVPZHayZ3FcDn1v252zhf1fjGpsKCoAHZ1GuzLFxN3C3ydThxgkxf2fjCtza"
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
