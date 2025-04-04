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
    "3KR8vCQJERpActfRig1Bcqdf8ikFyeNdvN4BQUJMhmSmatkrvxjvzRLMJEwqcf3r3crfi63SXUN7vxM9s9fU5RKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDK3ZZK3wZQiDpC3cVPm9xydQ2kyvsTXkRM9XcbicR8pEqHBMaiCd5UL6Buigo5aZJ6Bfee9yn9hA4136vsu5Z9",
  "key1": "cBareQjf69xzeEyebUmZTb4Q38Pz5Eh52sJjbMXWABmnPDLEjc2VJnP1RXDuhiT1tx6BW3gLj6hP9KhkGf8h4TX",
  "key2": "4UiogznZQGpuphLQjVk924bcuVW9ZiJ65zhv7ivtEXWkKeTK56d5jpXJR5B9aWyHbidTaGdMChgDNb8xMQCoz1yG",
  "key3": "t6AfsaxXc4TZGjjPARSkKERFDPRvDdDwHgMmMFg9SBYdqA85ectLFftJtKAJsK3pquA2SSEGDxB5jeqLdB1TXUx",
  "key4": "4VxcrDg9mEgQJJKt3hYu39461rgian6eaazQ62PEa7SxsN5MkG3EZURt83JxtPVFzM5q56ES9GRMfXpRbJoZnXTD",
  "key5": "dGZ3ZMs2WDFcdi28id3vJrE9d5WMHVW4HGcrPw7biogMbCXpuAtDvH8XiV2B5fDBCtvHTrC1GcMYhejKqNYu61X",
  "key6": "2eGdR3od9dHwNRtWB6Gp4TcxQtZ7YAFDYwUjGEGUnjXcVUMUpEnTe8YyPkko7oziuEjaovm4DuLwEQD97MUG94z9",
  "key7": "4t732RvBQqVD7AFWvVAmosDYMMR1d4iLZx6H593m1pt7mff9Gvit7J2fvwuziqFpkxCVzfrQhFLfQ65svBDNNG6X",
  "key8": "3xn4PKSSaedwPHDjsASWL9qrUn1FnQs4Yw1Tyuy7EZqA4ugk9Teq3DRKy9ks27Xp1SPFQ4p9J1YwmNda5eBFHDVN",
  "key9": "33uSf9T6c5bMD5TtzuNiGqpM3PGUQWUJPKg9F5rXNkk9iSGC4bBYE5ET4qeuu8vV73o7xYiidUuywkZWhbCRYNN",
  "key10": "2YPtmk1dkL46wRfyVUd1c1jqJpSL7vxRo1SrS2wzkxU4BWyW5tmvn2XaJX6hQ4UkX1QUAYFk96o6eFHLpYCPqfyU",
  "key11": "5U2T7fcYeWtceELXTtk1DF94kwih5pgN3W9Gin2LZdTQimm775Jh9smFksERhv2caNwnBrtxXPLnXPNEtJ9uiCDx",
  "key12": "3yZu24bMfGryqv51d8zgwjQNBYZ7KbGaXPJGcQ127A6yJrtznivBAgGTAq9aj8gUdXZV4gcdu95cgzqwTNiCXJMh",
  "key13": "2jYjy1SPHx2zRRdiq88HyCNsjAVC1GerhZ14fnHidZ6P79FqMGa4X432PSDfPKGjq9h6saYFatwupjTn8CPDP7tP",
  "key14": "ZBnDxVsykB8QiZa6wVKEMMYARUXVMQSjWbjqXWBszh8McHQ85ZQFN4fxVoLeoCyC3qhN2X2U8xXZZ1UBvVsoPCu",
  "key15": "5rrddETaF65ZdCpg9M7iB5VhYETRxC4vrJG3m6FvLQ98tek28rrJg8HZ3GBscY6bd6W8GePGtnwLnu8LnZuDwDCS",
  "key16": "4igSEGRiyoYpiYtsXhQWKFCMM57BFue2UJLHF7tKpF2pn7dTo1VQSb11C9ShXqZ2wRXj6rPWUdff9RVfJ7soBpWp",
  "key17": "ZSnAFPTieRq3nKAJ44uVz8DDaCt9tNoEqaio3uv336Mhjuqc3MZQhyNr236KeC3Mk1qm3vWzHiqqEbDiDWdJwQB",
  "key18": "66MrzgoCNVJvcR4JtzpBnxKqA3pB69vJrAyVTKS112BfCAn4PWin59K5A4BRtYqYP6iC2MLYTkcEcLuF9yhVERPd",
  "key19": "pJwT3kAXuKtMGeaJWWtvPnyEDxt3T52QoyMXHrEQnyCKiUF4Dw38fc3Tyzm9eQSm3fPhjJDgZUUcoHzBE9uyKAg",
  "key20": "2n63cDRsxqUrVjiLHBkqaommS7KphjTRJ1e76RUWxX9Cy62xuGBPUzQzrFf3DoeKJPm9hLJKhHTnc4k49iTJFqDz",
  "key21": "4vdTzzCGB4CyVgxAzxkyvovZX5WypmDFPibNPG3WvPmeCPYMncsu8mcNNaB5XEEA9sQKyDtWXsJWs2X9XCRREEtn",
  "key22": "3Yjrc3XRj87TsULKdzdKn5ybKyuZj1swxqHbWP4zHVujHBRXY8Zjjet7snidvts19qYdapsPeZzSC8bNtfkAuTVp",
  "key23": "56qKZ3PpyRirv1peDnd4uFSwA9JS7CvCHAtrfbdo63tLv4G1NDQuE1gDySvw2a58nSZmrjPtJ4RJK2PbLiSHdewe",
  "key24": "5CsWLkwiXrd5igU7VwUyoqrDHdSBroTsh3xeDRWqLMBT4WpWi6HdZ3TZYJn16VrnZe1xi3ZkoFVtyFgDxQ5QRBHZ",
  "key25": "5vDhTgjhckK17tQbw4o9w3QhPGeodTrRwdrKwWGtGmZPbis2xE88monkGaSryQHqMeNgPtee3tjCxvTfEYjTPSY4",
  "key26": "5pgyJhuXzB7Juy6RXeZUmh4SJrBX5Qrw5TTa1uQZfHbRayzFojgbv2DiuDT7wtJsU1nA4xBLJExJB8EFNHgXdPSg",
  "key27": "5LbDAkUzV75xSQfDG849nw5Y8JrMMK2wPFQPEXSaBfaZVeTMgmeveZZUZNBCuNsXZMkubWfQH5yDdemz8ZuEbpF6",
  "key28": "4SRsgbXqt6goQ8veTVYt91WWjbeJMEPFiZ52sdb5nwnQM7ghmx27DRnbK3YLoFdCm8oQNN7w14bp4RAcyzQVvvbg",
  "key29": "4T6UBYSfVS6oyZBoms4rzzSnb9Lb3pgV6xMPHr4e2onwKggqm2Z4XSKEeqqEqSzunr6u1fTstmToyU1cwgy5hEvy",
  "key30": "4wGuXft2eUvUFbkEBGQJEvHatheY1itNP4kGx6mkJ6ukVzhYPwqnJerLJC3TQzMrkZ7Bwm8EX9xQDv6NuB72r1Ym",
  "key31": "55ux4y1PboLUHPcCzDYRwqfYF1znptiouWUmiXKu35f5Hm1z6de9gmkMMHGESFWNPeCVSiitgDUj6cpeXFFoVXAJ",
  "key32": "3taZTfMm7cxUKEJAgS8BiynC16LPjYXG31s7dtmbwmCUkkvnSGLFnvJ6mJrZ4Dgzt4ofKWSuid24bMSCn5MUvnis",
  "key33": "3Ff9RY6ePJGUMQostzRAEN6UyvcPUGwCBgeNkXfeM5znxfCQAG8bppUt6cZUjzV7JeiCt426qcELhpqSXdzHhMhT",
  "key34": "31eEkqEzrWBM3W1odGfvSU7z9NNRGBCC8otra38smrDqhsAiZ5hpbc61uSERgkrMhf6fp8vskmqbfLfWGgNyrXMY",
  "key35": "2sy3b2c75o9jH3bWHkp8k4ZNJK89MzVwGUGAYoQCvp3Vq6kTXxzvQ4ycKfgThxqArnxGQm1Q6Yu17hp95uZvRbGb",
  "key36": "5veUjyXbx8n92TsXvTG72qx6bAHeecxsk6sKEYwdxTKk9R7bC96mh5Es1mVTvKkQ5pLdbWiE328DoaHnPgLBGrMV"
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
