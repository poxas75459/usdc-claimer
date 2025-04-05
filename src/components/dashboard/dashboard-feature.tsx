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
    "23ZNL6xZDp4EXjdXbs3WBwQkReAUg1aojD743gHndDyfyWAZL6XpLSHRJTizWBe1Mq3esqvJXmDzH9ytpsXxzW28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAuQpmdXoDZxruGmwaWrY9PiuWHyzz9SdtXgbSb8LnxD4CV4LSBMmkvHtFfcySQwjQMxvJktZM42bfV3ZUX9hwg",
  "key1": "3m4AdkZC1xxce3Fw7LTAyHf8x6fAVXmgAdWzENASEyLSv3ARFXXZVJVst2hzQTqYCr1ZsqrDVw6n1mfXSCJi3TT",
  "key2": "2akJLmGUZcvUTXZSgWtYjkjNZPQpj8e55vHpKNpLdo5KAoJBQonBm32pmeTYRxP5KwLHQwDU1XPb3qSV5dof1Bwc",
  "key3": "2tKCCuoEtkstQbDYfuW1GhYT1Mt5gDLRHg6EDYNJG2ovHVH7sN2YATZa6hvcijUASchwJqg8PHXyT9Li96SDiPw3",
  "key4": "4adSNLqAnLRtfF1FEEnwLC3hkeJUqgUGB3MTReDAiyyx45fCvrfiHNPDbh8E4Yg8wLysSDRoTVjVCda4z6C97PAF",
  "key5": "4xahuPNDzXMkoK8g3PfaHCCEBVm45meJPhZJq4mpzZstnHtoZegFk9y3L2thd1BMvRwJcJe2jA3ENbGJfF8Vxj7T",
  "key6": "Nvqew495Vhh3vLoJffG1ZosNhRfLaEuZEdjg1FsN7xfc8fQhaSHAjhSATvkyRStySvQNkkTP1GfHhsPuVfN9Lmb",
  "key7": "3BuanpeyYT7FJ6erW7qWYjXcF3rMLLDPmJuap7kNQifcPB2kz7ccHsy2jpu2jVC5VDhSCH89stxhQNJFnhHEiSVy",
  "key8": "P5nvmRpLoKqvqBDeosGqBrGDXXP1spommMUmPW7f6k75F1GoTRxD4hEqbyiCb3JEp7uKdXdpxMLNSXsNcY5CtPW",
  "key9": "2XmHuoPtWAyvJ58KkUdUu3byrHXcdeyTDzkbuwZR4XrWt5mjdW7sEdxYzKZfXfmfLzN8ccDpiXkzY5wpnNj46p8Z",
  "key10": "29Fi9E8JfnM3TTZEfnF32RFee1nnTntr9dt2BwEzu8jbpvrrFKXFHb6W8KFQrRo7UtKPfZi4KkpEb7MWyxWFSy9H",
  "key11": "67WRtri5Cgx9ayATo6r13to9nFhrcNc9ihJFzckFXr5cg7tZVvFeKN3rQdA49ceCRELsVZr8ShXGqoiEZDB94pmz",
  "key12": "3nzFEdo4R8i7hLz7w1qMJL7LonXbdhbZ59awpP5X6PdiqzDXKkMHrPiPxJjhUGPZ6ZpuypPHADtUTCgUoTdri51W",
  "key13": "5VBTahMtBU87Su6AcdVPkzYuL6MvteGuzsogcmnCusbXhWjQqK8XV6Nd8BgbHdm4GSodS1AGZWqxbS85DfpXRzC1",
  "key14": "37scNrjftHcSnAwcLTtm6nvoMKKiJ1qcdX4utajSJLNVJFakMBWUQxaq6HyMYpLboTJna1UJosrg5dB6XVfZvFBX",
  "key15": "25qeC8vtWc9zTF6ZMH7x3Jp531k4Hd5QQ4VqDR6pAkrfxS5akGzL31mdJKaCivctoHAUjpQvWMwjHvs98FZWfLY6",
  "key16": "5eui3h7gocj1HoP9z8XaGon2Lcq8aHC69gLwwJqQQG4iRT6StT3ZGMsrGGzHbEx83Z3Wp3iaUvSNdpy1SWxgwYFQ",
  "key17": "5vfFos66pQng1gG5cFNxUPtHNBud6qwBb49WHv29Wq58rSdKn1RZaZYvCfSxuM8JbN4h23WQKm52FucXXLaUNPa8",
  "key18": "4zud2VHVHv4EiXPQzZ6ukjTgSLngqUAgRCXN9KdQ3i7SD1oaQEa7KAJrGBRw1TknLGARNKgqQhiGXX85u8NqzZCn",
  "key19": "2D9cAL91pL4vW1fjRn9678MZ37D2XJ81mDeTLhsYLjNMq82MBjtqb5ZbadoKrYkj5AtXYYct2sLC4kvzHXia6c21",
  "key20": "3RXHFZwQWffiQiD5Br8d3eGFsCR4bo3epiEiWgsiSPRrQvxEW5gYt2QXn3YLrKNTerwjNkMXMW6H393xyJPcojUB",
  "key21": "37e3BFQ1mkdscapiPUD1Pbyw7aWsbECNro3XVDQfGQUxsuZn9F9bSbukiVQxZWcDkPNeKW9V56UQc6Wi9dz2MeTJ",
  "key22": "5PygKA1Eyh6N5XbwotHPi3kTGiiG71notTCpVyFvVDzV4GQJQCv9NxTQgaV9WNRS3B2G94CWpXwYBdkryJp8j6h2",
  "key23": "22RFVS8HCQDWLEmAsJXYMU2EzJUMSa7AoALDdig99am7EudoKHjHXCCpa7aQB6mthspisdxV1YqojHDqZfLU7irM",
  "key24": "5srzBYJ2zhaqgx62To7FiZhYzFfFjQCghf68wChmkPGdgMZNgvri6AfHpBFCUWVX63eKNia1TGfHaVBcrpWKNCqZ",
  "key25": "2XwwcsZsNgjdWxJQ2HSYpHdZ7MMScjdW63ZGmvut9tVpvZFcKgyBpughJ5fKZ1jC7iCprGMD7Kcq44DotkiVCPCY",
  "key26": "3t5bcNVrbrUkkstiUJLfAac2BRx3BCVtuzchDTXDJCtsfZsXFDvWaoGdogKDpGEoqDtBpYF8UB2cKsSao2GC5WSp",
  "key27": "5cdH6rueJ8RuMxHQUdws86youQKRg91CnZStdn1KfdCxuVRcJ35UyCMN9Ze25JB2izudhG6NRCrht1QadmxsJ6WD",
  "key28": "6MTAyJM4UzqWD5GwzLD8yfm3N6HtyuaP1De8QQDzcjiQTxjNG9VyYFoibHH8eyDLUE2ZN1AwbkSm2ThLqTD6fVv",
  "key29": "3F1F57mgkp6NobaLEFSp5RoiwuYkyXqfhRikmqk785VwvNiy6JacVSqzgLZu7E9jb8KebnxSrCfDJiJjQ4WQHbt4",
  "key30": "AcbqUKVPN55NBdeuZeZCneFQSVAKYGjx4BKnV33y8A5jWireNWmN8td7EX121HSmtRXggs2n2TZw7Md9D9XGuEK",
  "key31": "ze8B4ZAJVkxY9ebVM8h57h8cihbNMtQiMpdX1wbLAxgHNe5L1AJTfNAHFS79SMWxDMv3KzV8NS9HG17FBo9uj29",
  "key32": "3TEa7eXAicYo87uU3MADxUUArNKTxPgfBpduxuADoHPqwxDMbLWAQMbmqHgsHUDhemseiqpcM7aZDBq1PCr7X3xq",
  "key33": "57vFGdCtb7e7eBbxkhPT2yMCL1gspCzZSrFJkYjHbTYd5iVn3yk41jhsWcx5mYJEq6ELiASFCKW4tAayT6KW6Wh3",
  "key34": "2LnnLx73STbNdi2vNi7KkbLHQsezuJBzDnVmi6VYFXW6QpNaMyJYgeQfNZF4as2NwaPYyAKGKeRf2iUaKtiU24HD",
  "key35": "QbEnmdBS4kQwGxq1qusPQJEUQCMJe1kDF5rgoVUL9qZT9tsVHboV2U6qPcFNHewqxd4PvDw6eB6t2R6Rq9Li2oi",
  "key36": "2db1JKJ76RjsMT3SjqvB92CXUZVH8YJxLE3gU2vG1Ja4S3mbFpMrfRieztCTjU75Xud5xWoZfnXWXRWiWPS2yCCE",
  "key37": "d9x2akZ6eKBkStp3GdwBccGtv9uBc6SSgAoq2X1BjWvzkT3MHNRdNqAkthzxcbkyfspLGhPJX8XqDKNpZvTH2RZ",
  "key38": "4jEWpmMaU9E1kRS6vZD3bwwovnC2Gt7Yog87ocGKwr9kXscmnW85UA3xLfVztMWandCDRRAeZNRhZxHgGZ8jgEPG",
  "key39": "RiMTfJsHMB43tMBZJsyPT7SAo4JauraTQphuVRVqyqLnSi5WfTb96XpFAAf3dEgiXEYEZw4NRikhj6UKWFhSedc",
  "key40": "5PNja4uKoNVE3NGEqqdwvwJ7aNdYB2wtprJv5xeV55ZEMxJpFWt5AyxfscuMHaY53xAj6rRcMfw1XBip2hugbpYm",
  "key41": "52T2eJAyLXVpbukT13pk3emcVxzEYSphSd6nopnNvMvFXNWXpZL38vbsqRrBMghommyHbgQSJ4Scph5dV2gkgo3F",
  "key42": "5sx7BXxpC4rr568Kmk2Uf23ywWX6W6BMDzmLmjWZc1ZoMorZdaQ1SWcs3dnakumZm8iA1F6ELUbdUNkZQo2LG65m",
  "key43": "3cJ3TaurXzFe8VjnNXYNsqRaewvnsQk21TKqaS85WZExP3swqcq6EiBAqvPByiEcP92grrGBitYggXJ3rrTGSmTS",
  "key44": "29xhyRojkHjMuSGRT1og8EN4knvVo1iPM6Ht9gS2EzUkAryxMJBJkqAQ9ZypZJ4StmB667UGn6oe5PQ8fc1ojBjT"
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
