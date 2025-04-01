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
    "5MeAv52JsMEMAHirchHU69Niprp7SW3iMW4eYEDRb6e2RhHphJcX39QMpqfDK1epp85cSkiU1Ztkk8iaScazJvgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8RPrDqrWXbUTeiAH3Vwn5DkcpdHvHoXMRxitGxz2BoutsXP9abkj295tX4ygqpGY7LkAV2kj4jvUwqePAZak86",
  "key1": "4cJU7VXnf2GPhucSiv45tRAwVqf7zKEWrDpYyoV7yaTupQqKnKX5DnFQHMxL7AnCng5GXYq2fPmAwyFSwcgWAsKu",
  "key2": "4Enz7G9iwW7aEaFSEf9RV7mzBcVPH5HkW9HKiZgfUVYETTSHLrEkKKJTPfpcf5PH7Jsu547vsiukCioAU297M9X6",
  "key3": "4hgZvebVHZxkHXZMNvyLW6H7sq1WCnpksAdwcjhENkKMnduQdcu9RzxidUNgcUV9h1QrjmZroRVd1efouYQwYQyA",
  "key4": "39NKmCEGiAQmMQoHfGPEphXhQSo1zN193JUJitnd5nyssbisPr4ctMdjRb1DULpstmT59p1sVBgcNc5D4qshkaH3",
  "key5": "2risN7SHFTJXfUhxxZdWrT6Z8K6iGnN2JL6vzRkLN44ZrXPKsfKDoBbZshHYpfg9kcFGxpecN5b9iwcxi6MWRx4R",
  "key6": "4CwG9uvskW6jMddYT4SnZz4XS4kNxNJ3EDwmfHFtdUcatzAm1s73jN5cfZQVmyqUoarBGv8mjkGgTxFLknbZQQhB",
  "key7": "252Lqzr5KmCAWvRqExtPHY2YkMA2JrbNdcapRaYvrM8zpJGfqPGYdHvNir2kix9YzEjHovo2h7UsjmzZmAZowLVS",
  "key8": "ebWWMKhunj9QnZXCN6K5DYHu7JsuFL4V1hEsfuTLTYzyib7HHi6jFJyeNUWXKeb4vifqtiuTbA5yLPNkrzip5u9",
  "key9": "3XJ3rysiNRVEtux7ryxFi9GxfykVujcNYkSbidpxHXoeMsa5RJon916CH9Rr2Cy5L2t4cmLncWuBPWJ2eZNjKnP4",
  "key10": "5HRLUcATSuXWy12AwEvADbZF7AkZ82uUAAvb9yFHXyZg9Hd6GUfxtP4B1GtMeoCYTv6RZ63AUqPre9mTdFWGfkKz",
  "key11": "2vyfh2SKj4sgL7jrcyt4ZhNFZyQoyid5yiPvJnnivttSKpWxfaWVb66BvEKiYnSkcMuaKQkePV8iCt5VzNfpDx2V",
  "key12": "3eyK6gKrsqPb1CqSiK7nUdHJjgaP6mMptWeAPz6ZxjjQfRmyMU9jJ8v4sDVrwzzsFx7j7Pr612rccFQoPes3rn7i",
  "key13": "5VQguLJjYFrabaDTbK6GnLCLP7rAYomPe33AskGJFZEPDA4spQ4qwK9mEHWs7Wxhw9JEfYE4iVtcHyrRGHyzdUEh",
  "key14": "2JHjktgcoF6jDdmRyQeitPwP4hS9JvsddmqrNN4pa3ZaCtcsLgtc5kYh7rRLR7pppwVvf4JbBPbFnybeENkQScPv",
  "key15": "5gDiom3piG9BzQUPiPWCqoUaJWtPLT9UWTGEQUvNAEN8JGdMHXfZ1qfeZqg5mMbf7ARUejFdpLV2Bui4AsM4x8jy",
  "key16": "SR42nBhK9gt6gJxgLw9KzMTmQBetwxoUSWVDEhy5VS2Xgt1JaUMknMDv4NbkAZ4rN13a4nGa6PWg95hRnKZGosg",
  "key17": "5DYKXuAAfeEjdjwXVfi2a6BUwfFJh78G9HUVc6RkgD3cELEUQDhcWs5AHwkVogYDnCfmgMNhzQGiiVBWnp4tBXgD",
  "key18": "4D1vCWkhJvfumMzN7N7dS9TcByQnqyNboxNxE82AtMJ619RVoMU1W2Gtrh1t16e5wob6Mv1KwSdgVReHJohj3gxd",
  "key19": "5tKWdqnMPutuYBxDtf3Rqrj3JGGZEnwA27yhzpyex6cEszvdwpKcHXhffHMqRZ1nppqxP8UmCPUdCXba9FvqDqWs",
  "key20": "41VZcPd1DknK2CEFNR5Bfo8R3jB2J7wA4jGKima8T1s6vbCe48pZDCkEy8ZvmdqY5infZwcCApue9TALLBEFgmjK",
  "key21": "rEo6fWvD5VpVP133c7sFiYi4tPcj3CJq6dqSiHMh5GuYgPHFjbAVqDTCA71VyLQrgfoNdm8fP7aKeunECbfuF7b",
  "key22": "3cpmHNcDpiPk7MwmuD1NrvzGeRfRpihY4QoiYqrxE1bMz6URTwzHUjVhSGu5fNuP64zkakvUiavEjknnHXL8PaTY",
  "key23": "hMLToyvs9yaYMHg6Pp9jW5vHYMUXxzYyk6KN3czTZck8ueUTxmHGPkaiqN7oVTrdxPFENRvVtidej4Z2gk9D7yf",
  "key24": "4VSs3R9bVQr3iCQrrR6WAtfKd6zKh7Nd4gAHYBETUKbTSfqtzrhgQrj21ZSHE4jV9gZSQgzP9ZA6TCvQhKBUADhQ",
  "key25": "4RAy1GcyNonvSKYDrtzZnosnyVTVeCDqn4z6J7H3S54yjPwa45Vy6uY98EezgSE9CRUxam77sP3QtDi6B4enov1L",
  "key26": "9YxYLSUyehfAhEnnevWXT4kSn8mWop8hUPKnAsHRsim3G4WopwBhnkpz6AX7yh5SF8b52dAxkVKXq6eQBVgZiS8",
  "key27": "4X7zuE4Tp5qPcXS4KXLeyQLJwePCdrgQuaADXzYdwHAn8nZUzdFDfCPfXbm29dNUgLKVHoboEVPvBdyvizbw4oC7",
  "key28": "2Din6gxniyrQYsJeEdrejNqwTZAw4UUYrbBx6bRCFawvMC3V2TphzxVQ9HoYCMh2CGSMUhJ8wYLuzGVDYgE1H8zg",
  "key29": "23Dg6rzS2zpWoSDaRkKMRjrtat89W7ePkaysh26eSkbct4ns49FmehgdmRbiCyLwrRBxgVPm6W2vx6oMDyghXZQw",
  "key30": "4qPd2VMsruCY87f3TECaF2j6rA4s81mtc2YQ4CLzMt4VMzNgQpVqGC5r2g1oX958bLCrRxSWZKz1tcPiFGpfSocY",
  "key31": "22tdPjkdxpW6EGkGobumYSeBcQyexV8xqNuAzqecCnmgZLsowQLrhX841AHziZjgnHbRk3i5bWHpFeuM3J6xXiq2",
  "key32": "24SbEFYr5Ds2Gxi9K96DNMPN4KvSoDNTW6tZTzg8yhP5PouDh19qQFWMSjYrBF14r53dutJpeZEYZuEZvLoZ3z4h",
  "key33": "3icCUwe16a49vDFUFfCTZDm39WNSo7nQD3X6SXsixJRAnqX7ZLBeCTbriCcMuy7wtWtBckY2o3KozZzkuuXobtgK",
  "key34": "g5n66Qmce1QnxG6ZNx8V65SyqqZxau3DziP5RHZCWQM26u9mPw3YT9uJYJaSEwxVJyHSgFkrSrxrGgREHJhpbAx",
  "key35": "3ivXjwxsvgaHv28YosDfazCR25MxDpCZtBsYNHawTuzUk9JSBpj5H4a1tUWsKvqfdkvz8Q7L9fhpSCFbwGaqeX51",
  "key36": "5u6H9NUhDm6EognsRS69LhddzW8v916V61E1KR5yFrNdfUXo4FuBnPKLinxXSo2QsT1TVCMeP9HeEbCCNDHwxGXP",
  "key37": "XtkxUxf6dUf9GUCoWwPFrXndff641FYe9qpygxsscruTrL4Y5hgEnLPFxbjz6ZzCrYQBEiRMxGu7TC3m1c1M6K5",
  "key38": "2ax3r8dhz1dxYDbYBSUygaBQVQQo9sDwFeMdK7tRKeeN2zywEawysegkc91BXj8tZKruN3wBQa1UfVKpiqVPW2G6",
  "key39": "pyHWrBnL9EnMNkP5ToEef7VsBrL7ahyEsqT2CwnRAdpJsx6b19yA8RjYm1HMTbv6eENHFyfwtnGrRvZfXMetEGF",
  "key40": "4yZZMaZ2X7rFH53uL9fGH1q3pBri35PJQmZn5dPtsLHv83b8grDBc2UbrabAYmPUfgwZEDkqsq8EpdaVCeESb7mv",
  "key41": "4Sw2o3vV3eFZfKoYCqKS8aVZhE5bsWFeeecAP63V59PZRoqUJhT5B44BQhmfzH249YRkouaaPtY2VaQY7nQ9Uzaz",
  "key42": "2hSfnmYZp55gYmMvrJLurvdmUirAm6KH88tZZ4ihK6RB4dmc9hLkgyga1q6hLR79ciPFMVr9maLtGUuyxvGC5xKb",
  "key43": "4FZeLjoTHTLg1jfK7vGHG7BkKbiz7aMM826LPou6Fws1r7HqBniAcRywPFueAiPLr7Y7yY2WiPTJZFUf8EFRyMsK",
  "key44": "2PMbwdqZetipmYHrAxMfCwcR7nG7G4dK8CQYZL8oq3HhXSZBpwYwTyKXpjpEWC62YHrqRZsX7Bbx22atCTXBepLf",
  "key45": "5c7UoiTEn3E6TFiK4XtxwHbk827gpq8GsTazPjcqBA1btHjXJdAsHC7CWYBa3aa1UiD9LjvozJXAm2A7gYR6CDE2",
  "key46": "5QYg3Vr7aFyDU6vQMMX3UJzaD46XcDHhdELkFDQ2mQX41cUEh3bn4V8tEvTXR9PM8FibxuGZSKofK1JJ225XLpLk",
  "key47": "6oAaecMx14SptHdBap7weijz3znZvH8WCbVUe73JrY55Xsamd8sGKRK9t8ewt5mjWynzT2c9sgkhrxhfj5ZxXu5",
  "key48": "2g1P21dXaHJobvbM45HHMYRv6thnbXyY7jF7PoTMixWEhB3fpeVZjmHGkfKKCndMngYJAEyj1wDviqFeeLwYPh9T"
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
