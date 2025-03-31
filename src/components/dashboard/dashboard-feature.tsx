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
    "2Mew57ZbF48YVtkrEUgBR4fXsBWkdsetc4zKMvjonT594Zm4bGHmwbrEEdKt1egRqwfJivpMChjcHDwon3fJEBLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4848zQdg7D5pnAFXgDiUi5ZWRs21TwScxbZ1fnSVZweidFuNVebRBK9jEHn3e4p5MFL2Wvry6p9AMedWJ5Dhf6PC",
  "key1": "59xiLZ3DzCQrWaD72U8jA9eq9KT2WyQLYXSX7vHxBpXNWUUhF9ULTH5icugrMEYUvtsTxvrf4sAmdL8grm9oNzTP",
  "key2": "3Qpny1HGYGtQbLWxa3Rj4pZiip1zWgK7PNe5v5jv97oc3V9D8KgPnCyAmR4iyEM8GC6wmiinYtQR79JXSGfSWEMp",
  "key3": "4oBCX4sWEKyJpcFtifoBxpiHQxXyk6vruqbx32H2ChT2eTW4yxDgGXXFfhY9zq5QJUiGNSgZoUkNDoKExiWr2yVN",
  "key4": "4Ss3F2pdTyGCzhbYt1nkZiMtAPXsBR4RUFkQxpstzadhgSCDWV7z3bVTq6iBAbkRjo1uMgfdeR8bFCTytz1gjVwG",
  "key5": "2YZMNNXpkLwhFPBw1pukKGRk4XHgo5Uas2spWDzNumUNSJfi6jkt9Cr4mbPz19weF55AmWzi9DxPvGy6BjjWwZRx",
  "key6": "4R2epGuQXGA3cCSLqJHFPNcdPCDfhbKTxBtURUp7pyw4jEWuzMhFqFHiF7f9NmzGDmQKM71TUejn1r2z7aFsVuMR",
  "key7": "vSdovD31ZtpbzEyaH3zMtRpwMk7b9Pmj73JchguGJa9TJw9PcUn7t9wtS7YfrpPFcyHDpkefxdhkVSnFBnww3Q8",
  "key8": "3UgRNa9fCpprwYxzPpDwGQkoMrED6tBtrLFPxanQe1L51MK1CQmDRdLh1Ykj6HTiTQtLtcNY2zRM7ZAEmrJpPWYc",
  "key9": "3V1tS2kW8JiAfErzKgu3Coh5kmEzbqDCJaS2JoH3tH1rMR4rEAYi1MdhYdZa55kZwZs6iJ4XhB3kHndSVc8wCajW",
  "key10": "5tSPijoMUSDDm1GJdsG7tWGzKhMsgL9pJt9guqqThJ6zkczeER8Qa4EuVsczHHgaLV1koWX6AiWi1NkGp7CoZvSy",
  "key11": "5hXdjM5tpJAri5D3ifuJLJbTGAeb3jD6G7RueAenh7bNWCvByQW1FXSWaVu539jPGpAKe7G4kLY2SfdgFStqfiVM",
  "key12": "3ZqLrwJSV2MsSrfCJoYyBNTYRqHsZZt8a8g9hhn6GnsGDH9CLPaDEu2oqG4Ue7BVSJjA13AFMPzGN8F12j7VEdHp",
  "key13": "292tdKwZ8nbQWV5r1bnrgLRCtfpvN91ZjcndYpTJks7ASUvQsamvCuJyVmCAZkrdHHuYjzyigE3wrTNxbQHowuT8",
  "key14": "51dM9Uxfcu35KSzHdiH51RNuux29QNgM6HdNiML2ZyHX8zk2XWbjWzdCbZWdcmWTNdUgU81aLcqZG8v8i6StJBpW",
  "key15": "3Xg4T62u5nzV1eYBfxXx2CwBnhRt6K2AogYBNErTwePawbDaMakypTAvzbyigahm5w7MkQqSWY8ZFSb3874T4bJ8",
  "key16": "2JRD4vXesfvdvtFNuFi5MV5nRRkyHtnCcDq8MkB3Y6hLW5gHnUrJuEthj8hZSQ7oiCstcmsZq1DBEoYXkCS69ejL",
  "key17": "659Dw1ihS2QfRobMVkPk1HHdAVJo99sag2qbYj3Cq3TMqFB9penaoTGEPJpV2HNLWRV9RLfspXkA58bUY1Z9ueZp",
  "key18": "57scTveeHk97NnPywWF971AFnYbiyF2ouemk5KkHpB1rQfBLLni41ugUGA8s1gppbNbN3rYCEz1XM2fKbBTQN1qh",
  "key19": "VGuWLouJKUzVxCJijKPnaxcY7578Wa7CCCkkPAuywJcN5LUhwAorA8XRm8GQLcawCCQg7KvhXqsqZdUcihPqohJ",
  "key20": "8GovaFUBzKVar2jRK6GFmBZUnXCQ27mHiStMj29wiUMyxefb3Dxf51mooxhARzUFog2vnKeyn5AZ16bBLzUagZH",
  "key21": "4JD1tUyWwSL6CQfgb2A6SfFnSMGfmy2EUKALd5QYLXHFwP1vypAcNjwJu5umkZ4ThMsWpo3enTHuf5PAfQNCeciw",
  "key22": "sUsf9Y1aJXqomVnnY3oxtjJ2hry722AWwRYeDMpGJV7Fo9ByZsAFhCQB2eH5VKnz3h9SNGVt4i1C3uKzqwDziXk",
  "key23": "K3UUPKmV7p7ZTDHj4CEh2LFSUU2xzjUA6iAmh1McW6KhDT89V4aPFuVSBa6kQCJbiYZbvk6NxkDfxFE93StbFnx",
  "key24": "4vZYu3mbvRoTYt52RZXgFoqRwvqnAu6Gv8G73VzAkegkbG4k2YiLXfkUFwNZdyGq7zMFm9KpPawus9j9a4vT7oDx",
  "key25": "5cgsX3bnbAUYCQjsWupoHLCjdqMNQCQFp168M4X7eH172WZhHMjaeoyLr9A1QrQkmc38hRhHGF9rjvPTWi846JKQ",
  "key26": "4tr1inzi1wZQ7K4xtuVTzFpHg7Kjw27bWCNHnAAf8eBqJjNmzrihZSktKDTAXyZdaC5wvv36WAGxRMR6ZMz7Fn8h",
  "key27": "4RexZE7upb1XjctCSucab8EuHzBjE1a6dt9WWSoMmrGAoU2tAD8bfipVWQicNjCozmvt3H3ARsPnrQjrac4whkeW",
  "key28": "56qTixETtQ8x2KkVYj8fAPPKXPCbiiU9XKq2gNGJypq6SnfehxsY8ymRzkfvkBEYSnKpg17mcMSDBeSH1N7BJRus",
  "key29": "3KxviXoGReUHNUTyFifmD4ZsfPBpvSXB8VXQHMkEVmTQ1dUSiYvMFH2QteqCFHCZTeWodKeBhddd2Z6QAPK7nMXC",
  "key30": "2SQqjgnKBEyB5of56dkk7cNXGeqDfTvzaNpTwGTbuA8ZrD7JNUEwJDqfBECnRHgSQsnfoaXJdM5QhbgU7A6bycni",
  "key31": "49VoY8h6LS2Eac22Aw9Sk3vEjS6kjejheoRcmHdxxpggVuukgqecc3VXre5pvwPqU9YjJ5CEvoYskCiRRKTvbNAE",
  "key32": "5VYmjyesBseeys5kP8wSx6NpMbU2JxMvtrawuAkFbDBJpYwD9bpcoQE6kSi1mhRsBwbGLba7nmA9HEgZERUbDVjM",
  "key33": "5veHoQDWTfpQUd6XJ3ekeaNb5Mr57t1LXmS4Rv2PfNbZKnGaTuHaMhwFkXk7CFjRqZ7qLPjKnqtJb3BeyEBjfKJx",
  "key34": "2EjEU8NFVcLcRRDVqe7jvGYU1RzbNw1ozkiL7MuEcKfyPqwszG2Fqx8QiRZrr6ZGkbkW1PPWkHbY9EEhgdrQbBbK",
  "key35": "2GFH2CEB6QjsH5KFLPUb8ugdtcQm5bYgEPCs6t5UUtLz5smxnzotqA7yVXnEipL8uNsR5WviSA1Ww6qG7rnoEheq",
  "key36": "c1kWYoAjYkw8HUAK9psUiD6c42qjTS1YhTf3NqHum7t7FwMTv7gF5k1gekUSU7PPAmDwFTANw72o6YdGemLKBrd",
  "key37": "3ENQxmJbQnuRFcSTkfuGNEFodSiwas1EpVQ1oJ8J4jpUruPEfehyGkFdtdaLEgTS54vYMW2cwdbcfPGzzVXgFJkm",
  "key38": "JeDuB9jECtjC2Vw1s9UPqm61DW5xiGJQjx76TQT7ZA4AXU9a2n9X5eWbvroejkzRn4bJ48brPKim5HsVEhJZia6",
  "key39": "4Xn4v5FNhaTFsYMk5oyfZqSD6fz3UsdAmnQZAPZLCdkX8jtEhVgUECCVv6BZyfeusNonnGLK9WX7Ftbsney7qPfR",
  "key40": "39vyC8Bcfz73mp7wZAZMkCNnYeHKBRinACRHD3MvZq7tofDiBxAkpkt83RX7L4wdGv6Xq55jnohfFR5CQch5ooSM",
  "key41": "5FEfs28CL7FNuAQ6D5xSSzv8FgGRHcPg19m5v6AKi16KVm5WJLTmwbT6haGg693R7AW7V8WnBnUsaL9WkTYGJEX2",
  "key42": "3gRQ5oHpAFKa3SZPcqG9r8Ld1BpJGXVwioS2rxZ29zeCEMszZaobajfaFcw844CC3bCASu7mr1KEQx6Q4aAaHSMT"
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
