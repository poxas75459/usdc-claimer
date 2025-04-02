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
    "5xz8JitA4ceQy9HVYiLShBTk3HFuDFEfWeN8Ve8jiB2mtA3G2wZTiTRkg2mCZCn1kh1EGQVdtg2GLmX3EAXywHRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62eQCt35hcdVycus7qmP5K6FkMUtTgt5m9gn22MqT2MBjDo81oXXM6LejNqGREp2YKH8Viik9XbQ4dp7qU5t7yGV",
  "key1": "46chq8coA899ZGUt2tyqvFHxzy84v3EGum6iHQEfAkBp8hPut9n5EbmCQ8VWvUmqXBgBUyfywujE8JDRege2U3zA",
  "key2": "32XXLUUb7yU2EvVLhr8USPYRueD9rdhy4gxoKGCvYkCURVqDeXmwfosRHGrKo2XwqW6XponcWKbcfcb96qDoDsbn",
  "key3": "2hAMM62RQsLovc6KtJkBMxAcxBZ8xMVaLcVQEgNCsBKMeLVvtf8Y6Ysy1DrwTAduSYU8i91pgnK8BB5QHA7d7qiH",
  "key4": "67Q6wa4hrgY3SiuyifLLTvD9oMUMLKCBRjUUrQ9LkZbkGUBwdTDqzzFQcAJcDRQJE8mrQ3rCwWcECcM6rPLELMyV",
  "key5": "2iZd3CM4BZxcFCU71RS5ESiz6ZEZtrzLYjErdbE7NfrcpWMZV5yARYF8ipd15vzyS67kNzjHLcA1qnfiHiMYXPji",
  "key6": "XFjLrpJUaeo2et1zJBiWie72a1Hwi4zmknRsesdtzqjFs11AkGuj7J9FuFPy9KK33iSvhDwcyA5Eg2SYKutVEjP",
  "key7": "5Yuvaki4BDisbMtGPVutqpb4Fyts4MNvsRVa3RyfhdFnrnePVVvYviCTC31gTkoHukqoDj7EKLDapj482gXZiPnw",
  "key8": "2vs9VmELe5SjEPj4n1vEhJqdFafKXUs33daBV5vj8vBqx23Z9qzeG3BhL91KZT5o74fHGEjsuepNv1itBjGMjFpZ",
  "key9": "234M1hEgefivUcvbcbUiJZh4rgwDCTEVmQFKw8ZPYnCcMDMSMc8NaYQiq553at5BnEegxun8qacXKgpfSnazaowL",
  "key10": "2py3cFNhT8cjhJsTLrGqS8Ug4KKZcsufaSijenTaYe9sUeqTYpR7KXanyaivurjCQt34jqZviFX4divQVnhF1ZnY",
  "key11": "3YGGbggr6odgcdKJa3Rjfu6Kf1LrTQcmAZoM8wjyae6t139qosdJByQynT7sT1VxtjKLuGhU5QqzTYXEBBLZEYWD",
  "key12": "5Rru33MLeqqfNCmgqRpu2Kf89aUtzKhTrU6Qs4wuduwQ5rFYVh88kzAW6QLHzJvEM7hrHqKv3uWwZbjVLqA9QPKZ",
  "key13": "4JrVubeDLcD3FyR8f7QGJ45td4sAvfAQ3f1VUgt1sGTYPaKv1Jg2uTFTz3K8E47kQjvJHJe8gVht5QJk1X8VhNem",
  "key14": "29mAKkfhUR9d46RPhvaWgw4xnL1GFjRqXqMCFwrwLrAKmnSxWvze7eSzy4XfauTwZcc1NTLW1fwoECwFfyrcXi9m",
  "key15": "5bg5F34QGDLbWt5GUKSrXWHipnz5DisAjHFdyPkELJRmguSS8Gs1yhT6oXndwLjHf7kGgzDYxxE7EAL6zm5gsVid",
  "key16": "3KWrce5KFUBFeDDdNvrVTHL2qi1ezhP7WJj1bC3vtdDm56dPnqtYbYwkgXVx7pwHpmKjguwKvLzzBMTXs83crTaZ",
  "key17": "3xLJmpy43yC7YjG1p4hEkS61NKJCCJk9t2meKiLo9QWyjfjaro7PjeKuapE2VeoH8XEzsf6zvUwoNRhUmK5iYtNw",
  "key18": "3dpq9TozW21qCAoLm7ogZSKc2s4oUPDYJwNDwrfb4ekscVeFtsHCtGWfP57RUJXmyMb3NzK7wnJZNfit1Mi4L8ys",
  "key19": "4jLaVvqA1Xe1EBcMiByyHyyeVwAWCEumy6UPA1Lt36g3q6tjaGbXY44Wi9Wp7gFmDGzTsGDgiUsXdtyhHCYDWGwF",
  "key20": "2d2t9WW6zZiZEDu5DnWVkjTyW5KkuGWvQkoLUAcVmYpgAouj116JUws7w7bPgsbSRoiYBVtiSzhamygzhSrBvnpe",
  "key21": "2uYr9nGbo4UJJ7fjKrmJ9UVGKdMZJtQi9UD8NGbF8ZN1Lg9z1zmSJHhSxKRCJF5A6RHSdgNGnqGAUZuYsv2fUktc",
  "key22": "3KC77CE6gDSiz534jhJwENJ8dN5isFWwf9f3TzdQThTSeZZS8EPzM83uVcuvvb21gXfBr3hfhGEt17T6p1oVQiEN",
  "key23": "Tp78RuBZP74SfsX8nXr6U6XA3QSbX6u5Jeh8ovnDnr57bq2BPZgUbKMSwG9aKsjjfNSGAvwvQfUDHpuszGcG5FK",
  "key24": "pBKg1ntvoUSLYxcMheBNXtWdPq1p7FkCYEBabBNcV3pT271ynp5VkoJeDELsRs46eYUD5cavWoMUXhH3JHACRf1",
  "key25": "3yqAFbDk7gHSYMSwgvHNYv7Lnjzpp8a4735ooz94YqfWrHq8NaxxHQ1VtQ4EF6nsdnegchVVtKzkCtScWuB25Gty",
  "key26": "4FU34kf7JEyPTfZLuVBsFKkzhJ2FB2LGd1CL39deAr6obH8yVExZMQAxrneHYcbM8zVJrNFGJfa7CLmBJbywMzVy",
  "key27": "5LbujRgHeHPGBgTcyVKVB9Mn1KuBNC834iEqL2gKBMCuSRwTHe436Snnj1XZSJt6QHAqPbGPLF2Kek6QghtrUsqy",
  "key28": "49dFgMfcxweKHF5XhSefMFWAi9gWQHxGrCYRXJK4Wk3pfEXTb4WMtAxA9Ev5nksXY5g6XNUKPgpKHCzVE6TJAAuP",
  "key29": "4MktynhmULQrjxj8sYDaCM3ZgPKcVSQDSqNFeSyaA8j3H6o5ykjkS4C5iayXkzLgWhsYfLYxkKGFV9cnWHSRZjyM",
  "key30": "5hCQ8P3N8qEJeJycQecsQzm96im3xu1Uyfwb2JkUVEcM8tRMxzNktQE86W8fkjDPLeaJsmVpHZZALHgp8eTkprr1",
  "key31": "3fU6NC6qi8hM93kys4FvLZHi2VncgfBpfUeBSES4eVJwd3vAk2aeN2zhnWA53NSE4xZJ4SMckaKp9UhsKogRmHFG",
  "key32": "jVEssbxZmXCtY5ozcxsJJTsF7c9vJFcCZaBM94H6bXAM1jvWg2XmqkRjKNLZbQrLvkbPWofjYoAzWE9VmuaihJ6",
  "key33": "5yjYRnkqAHdy9aWF2jBRBsGwQBjovPR2gLyXAL4NpoWpQRkzGWZvjHP6ZdUKeL5omN5qK5Dt1eVrxM92votbPPFA",
  "key34": "5QaUVWA4at4pSGAn5TZVjE9qYSmNjFfrPkyjhnTWpEVmEcCD6jbdzhDbncNXWAUZPA6zCU4BTDxysXUm4AeFuV2r",
  "key35": "TaVuYNtTw4MHms6Ds1kb8wmrhtmnE6hE2pKn3TYPSmS1EMSwYNVsgjTCoy2LAR93nVQuSA1sqojJXAiTVagWsmQ",
  "key36": "2JqR4EJogab7J6t6hvcrgu3kHLyvzWAgqMoWMF9AwGhtmTEGC36AeeoB5pDMV1btL4SvXE7jCPgbwcaeg4nxwp96"
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
