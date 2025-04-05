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
    "3Mpovgpu58HFx3R5ChJ58CE49vKsSZci6eNUAu5Ebr131TY7PEnUEnE4y5SBSECQ38fcqNibDpgMsEuZ1NPzuoAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRbcGugYhBmUJmVVrCyoHE4ogkHCgoAe89Kb8hADi73as8wNKbv2wBLZYxujg1ZZJZwZSvoN7dKtKGCm3BAUSNL",
  "key1": "2buuSZE9knkcLKhCVhaVXDZZbJYiAGb11dZpK4WFshaPck4i9gvPJ64R8skAmsh7QTfSR7UYVJZVTwXdgnURjQXe",
  "key2": "42BnDgQEi8PLbbCoj2HaJuiMBs4kMzWA6cqgAdR8B1rUUprL38dzrkpzw2Ui7zN7qoXgs9KqCK2aDPbN2fEcRMAt",
  "key3": "2H1LxEfZ1SvakdhBiuXpdbvgsWiXfy7BKVc1ELkJ9LGvywMACTu9amrm4PWbKcYVFS941hw3rB2AR4gi1Y3pgpWB",
  "key4": "8k3xnSGhvGXXWCUmiXvZBCJC536uvZU7ao7b6Bu9MXfVBTPGFEXGkt1icex55ueWNVDVVoVjnLceorcYovtrFKJ",
  "key5": "3ZSgdGgaZYqVown2NjfUQ3XsbB6YzpUijyvY239qxB2q3ydwFCeHNSDAWscZRzuoYswRpRoepjpd9vJXpoEAXXLT",
  "key6": "5HVxWyfsUejdbCYLfqMSK8qjjjTYPPN4uEbuRMWK9rY88wYUM6LxuAwuBzx7atbYAhEabBQQnhkeqFuqBFicgsvM",
  "key7": "4jSt2mBUTG6qVRiRm9j4coMDT2EWcj5xnJX4jxcGTfE9FB22W1TxucBrAkx2o4DvmWjPxPzn6R44wSbkgJfdieZq",
  "key8": "3ys58cRaSSqgJbPn5FuNtJrjxWBX9d8DJhrAkdDzzGBnUwozHizDHcurL5oGKAV5nXYQucYLRY1QEXgrhsdbJYD3",
  "key9": "2s9RtZLj48ChDTyoTe4huDKCzfmHMWjg2Sf6cgshekJb1TVYEgMr4DiM8qAYCdeatQgc72t9KHU8c96e8Q83soF4",
  "key10": "HV1bXn3Hqy2zXV28qJqrueUfDuut6fGQ2E3ETyvZJ8WXoLNaBsVGeSzrxL3r8z6i7oZ5r5P6sjR5xeUtzEF8fxV",
  "key11": "5j99MyNc4uKTdGgivzhxMyssMqF4YFBNAFz3tXek1XmrwZ3iHmNKd22MeDJjuk2SCg9cwAaPJwZ9HdiwnhCeRyze",
  "key12": "34jNw5qMLHPrKBhadmtYY9wE2p6c3wpottoRX5mszSXgnZpnqJNddxoN4HyGcLfT5J93v1n1Zbo7GumkUaYjrSzK",
  "key13": "KGQbw69TjcGkFGk1HVYTULaTbH2F9XLsixrJkfuCckDe7gh2CEcQdXdvZvzBuHp2v3Qs5YSZbeWcbuqA22FbU2A",
  "key14": "52343BLdnDqbbNLz3zsYXnXicK7brxpsGa65PBUd4bh5barBwcJ6utmiHiZ8HNSAfMfbWBUBssxNVmQhB2sVYtY5",
  "key15": "Fig6SJnsJALehvSSjo82ixJLcj1feNTzK2VsQRTQWwMcReVyGGY96CuzuaNs3L5WcNsT4Pt3pYoSaVnti5we6SQ",
  "key16": "4HuTtC28CM3gLx6x5MTkLY4R1rDRd1URwmknHBKQmqhKGTZbD4vNaEECcGmxmRJR5M5DprQk9XqurFL4qsLqBF6X",
  "key17": "K2jaLCH2YqF4YfHU3qU7b6666MPqdvTEeoYFP7c5BgsW4bAXKZZrFo8YCTaS6TQ1LMS2YSYYy37bzH9dvQZLLkK",
  "key18": "4yn8R4oAMncNwN6U5HcgCGjqNyLvBHL8wMWMg4aBf3FMkM1dZMqMmosYtghaKUG63pdK1e4TY45yFo2hK2tGfz14",
  "key19": "YUQ69HhwUTuNz62hyQm2fjswJpwzsZBJKgAWjBuNBoQm2s4tq5M6eNKh76hiSbiNhVr2gJkYp4ex47yQkRqGXnD",
  "key20": "2bytfYLdiCYAhRfib3pRUbUoj1HnT9fhEwtDocsoxGyt9XPgyUZJxUyhfDqM1TQr66UiV9b7j1hb8qQtAP4ojmQk",
  "key21": "vQt6MeFpJ4BrN4utGGHahrtozuaX86Nw7TZivoPtWQejTw1KVcCsTHMr5dcBFaJJfrdFFWbUrBREY9nPU3PexUL",
  "key22": "27anXNzaY3gJwMDV5L54zJwnad5tRPpkyEivZGBJxZboa9apQVbqvhA9AdCMcqMD71Dv8ycg3Ri1N1m68r18iUBs",
  "key23": "xPqociQsFbeoCc7CRBZNkZgNsjy5CQkJaxLCuuo78SEk5hPdtBJdJLuiBwr8VA3ndUwH2brC3MVDAgwd6uBzSKM",
  "key24": "Gax93R31drASvYjFQJAmq9AEZ7mBhfBUSGZRq4VSumGdSZTwtYyCh1FrRpdt7Ek3ZSyC3mg67u86YrjKChcbmtG",
  "key25": "3FU5rvWYRo3w9D2feHycA14PRxgCuMHqjxuFvhKrwB6YRCRdVojCWcoc1GcUdmwkYXdc35Jq1BCXg6pArk6jmAt1",
  "key26": "5Hx9JWne5X53V2EVixEmjWicxzvphVyQsmz23WzsmtdCKHTDP3FP3pBxawJ3Z671aPtC7bAQzFLENsku5DZBuyfE",
  "key27": "5FMSLpF9KCMBiQsQovHg7JsUVi28XpmrQJAer5QHdDJmnyoUzd2CG8FhApHbAeoCxwMmenvdDM4Eu2SpUVMFX26U",
  "key28": "3RN4r7CZv1ENjywbdYCg9MZ8qKGyPYDJQsvWAPBdHXKHNzANWqABLrp642roRzhYi332o57wMAZsovVPkTEnAtgL",
  "key29": "3fMbJUUDXmAPmeaegBSPWNjJj2X6NYQkzAsXbjEfZEQEisdpSWHKispx6GhqqJTi5qcVZDhnnTHwzHECC19HvjPm",
  "key30": "qSmXr6XytVrD7rNjhwcVzNhtDytRHVkhhHgCjPc4DNqKgg8NcTMciCr11YMKHcyeDjEbMzUSd5UD4N8nC5JVWAB",
  "key31": "3sE71NAKTUQjCKWfEhb2YAJbT7esVFbkJ6JEiuwaCSfPcvsXZBPvKfJu2QuWgJPBgkxJf7c2gZiejRRaiBRNrF5c",
  "key32": "2NdnggD6TgbBLesnjaM3Xwox5kxGKdMEH3ehQBCvzgHcfuQt4otVBLzouWxBKAYXHtE8eH38rJcVR84Pq9kSTUTu",
  "key33": "4fQemqrx8be7MqRQ1CWFN9xVcK2R8Yek8JqNJavcGord3roWGN1gc2eAYkuMEhnevLC6Q6TB6GArQguAkWGdvoDp",
  "key34": "5imdsroKT7NXZFt8BiHKHHH8F3wkfMEt14Jjkd9m19UgqUkcRaNzZRucZef6WbLFuawSRvRtoY7RAUUS1uUeknr5",
  "key35": "4REYtBiVGQRrNaCxvF18fAktQBAu7rTsCjHEAE96zDLNqxikqLsL3oJJDJGLsgLUC14ogVN1Tav7ZmBpxwX1aDn3",
  "key36": "4XUGr7WCUbF2f3ZrqFote2SkMomVxa72DU5jSssNkWSQGKd7LEsKrsaVdhN7hih2sUCNhP4ae3hkBfVXThgfY37N",
  "key37": "5nKMiAc5j2XZvmeY8xTU1mchLRgpCD6nrTkiLXoHQ2bxNvT8PaXFLq337iy9SvvExKqZGk87yN6MUiZvAwREG4Dc",
  "key38": "5uwFCLDuEbybfKS2hjdzxeofAUkYRJRvcHHUPYNWXnMSntoWPW2gC3C32VbLpMwYQXLuPYxPn4cZp36uJP45c7Kh",
  "key39": "4hLMsscejQJgdBbP8yaBPfL7YnxhNKmApFYmjvirXZFscRdSk2gBqfAnUBgwoJhpqhtUPZyau4dpicYCEd9czwY4",
  "key40": "2b6wBbaQpcXDrHUrqP6dbta7ryRWETNvDYNMAWWuuCFGcZPYw433gDNNzoXjda84FwrKWA1wVzhrL9nhbTnFnCdA",
  "key41": "5VwHtiL6vefKh61MugxJXeUuTfxWYEdTmL7nDAtknk5X5AsJQL6aWgw9QMq8d51ae3fBQhNSEx2imDKRMhQfVsNL",
  "key42": "5hwEiSqmD64v8h1Mad8KpBU7CEnu8QjmmKyHHSEi8FvQ4xY1GqYgMmgbPxiaFJBZMYg9d8jrhhvZ5VWp3DwAxDcQ",
  "key43": "uQcBybD3S1UxuVBW8iMEMguQCCWb7SCPWZBF1rHzhQcXR1gRiGQ8GU6MJCXMptpZoPheRxJhhcp1tdGSBn9GE3P"
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
