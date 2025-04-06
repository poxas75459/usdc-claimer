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
    "3kGNeyyhCpyQfMgdpbFEKYYU2JtC4GStPwA3AWvL4Y4a1eDLqnRRqw9w6VGD7jbjx3s6jTcTrSZW6cdGSMk8Tdyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4etYU1fSzaydj6MQwsPyiDS3EaU3DFgY6QoCgALW5f1QcbSSspdwHFpckU4g4386PkNvD6uZN9Ln4naRCk6XxgmY",
  "key1": "52bsrHqV9sDdbyFKZ7CZVyZanzBYoDrxqCJKWRWR4MSWgLviHiQDtYjy4bzjjENuKvZvtNcHM4WGXH9FCNWh3RZP",
  "key2": "4v2pVK8Y63ec2aJan4MCjL9uyzhCCrecnrVxnWSfcigPHp9aJVeMUVHv4rXtooU6HktQwS5qapxJvSux2UpEt25r",
  "key3": "4TR2Kpmpw2ovT4H1vEEs2E46mrj8ZpDgaUW3d1NhMfcqX4mMCoC6GYvsdXkTvk29L8Kjiv46AQejtXqpq9zYnF27",
  "key4": "4ooaAUSCWHC1Lcvij5SDtCNoC3cx2jCA5TM8hxBUfCbMU2QNhGXBhsfqfGCoRx1tXMovfYCgK1akDujf777Zyjsa",
  "key5": "4mQAvozinRyjpiGk82Uyggqrc2eWN2rFPXgF7dV5wNErH7JjL4gsM9ctCHmwn6W1jA1PdKvWkpoJSBcNzhkucBBr",
  "key6": "5N3v2Wygwo5nqzdx67Enz7Gkpov3RxkPzkiayyhi9eEHrgjM5zm6w4UJHmbbnqqexQEayta14iU1DnjNApq9WqAV",
  "key7": "42bvb9xgt2Pb6iFTdfiqKCDNuAbZwTKPKBkWLCPAowopSxRRZoUhExLzZ1DcmnsxSdYtVrmNn9Pb19s793sD2pCW",
  "key8": "uu3tGT2n8j8mSEQuyZwq9AoLt14dxDYdSDJDyqW2NtRGAM6gu7LNwKTw73wEAanhiWsFKXJJoTpJgbdA8xVswEm",
  "key9": "4n6BsoYmMoV4wkL5543D7YnzhHk4FTfEdZZhMZUqZRrGsYRFrtUb2D1FXTyaKYJ2fjh52ek2AnYdpuPbqZsjLKv4",
  "key10": "2McYQPpZ3pHp1eiFQ8EUFTqnKJnbMJE6HsAnwcxzn5ojjuArZocifYV242MdLSM9nR2tML9x4bgjhbnaAZpUt7km",
  "key11": "wHRzm3i2Y8cxAE3hQ5VdrfxQ689HVApXwrMjMVg72yqZo8KARDoG4b23DGaNdrgvyB6KnLP1K668QXSufa1Ry9C",
  "key12": "3ynNmA95DQCvicMapVzvLe812GLgE4LLZzVhQkyjMh4FMZZUgpLCvaQt1uwf9CDNqSoChTz6viCgBK5qAA8zBja7",
  "key13": "5NPYsyRKhf9JaTeWzH27yojxZ9RQFEnYNZCz7Q8JGEzZ3UokEhgd8K9Y3ddGbQbAxZFxtf6hgQpSvNhGa7TVGn6K",
  "key14": "4QgxxETJoEFBjg2oCyyw1QCaum6cWDed71Hgh8KrkhvjhWTqtuv6dxtswXFDpKPgZ9VQV7XcZ4Q1o8unmoEkSMdN",
  "key15": "5nQWiyE786uPu9QRZJk8iiFntyoD3oorzQG2JsCyb99N2YoDpTA4ryqMHMaDgSZvJQ3Sfgj6pn6Jd1v5epK2naBF",
  "key16": "629ZU6QQRgMtvPbCnayutMaEmMB5z44z1V5cWQLCrrSFqLnpyYdXCEpBceJnmTrVbVBbqU6tJhgjEPixvd6rZoax",
  "key17": "3cY4WdsqRaM6P9Zk12BCComdpX5sEn1Qe7oGuJN9mrsAJdrVCTGDavoQribb9TfV3LMmWHh6BTTKRhm8yD5mHRid",
  "key18": "525FoT6rLoT8uqdh8SgyaMrxUHGWnEZpPvHXwySq7SuWfwAAatRWVMPJXWJd1SgVVi8kVyZNzx5hYaFmobK23Nh3",
  "key19": "4LNMFz9TacFqspvFVwZrEJMxtnMS24BfaeNhroPhFHtjqb394RTnydL9nfbw9KHjdpvXvTdRPLUQDiLoSsMTMrqF",
  "key20": "2MFyVPjG6ygTRthDZdKkpvku4pctCZDL1zv646d1fUvo4mx6dxfKw4p2BiGhKYX4eLE7cTc3gcbnE9ug4tpUScra",
  "key21": "958xFvHYgFHhNMyPWc9uRwGCXDXCzC2ueU571f45Wo7ojwSc35AnwJQBdecnAT4yKRLK18DwnPRnS32sZUwWosy",
  "key22": "4ZYQNUMdehoxeqGG4yUSKKTAtMJD3z732VHCFX285mmFKUENoEZtKkY5MNoU3oVDXbacAe3zq2JbKFsvQZUCnchM",
  "key23": "32gWy34PiHtZkc2t8VLv6H9MSPhUHsPU1EmZoxTyxbXi4vcxmtppUJSDNLQbbDcRHX8oZmpDc1EMVkB1fPZGqKw9",
  "key24": "4o1WtnugjcU8RiaZRjegsxUYfqTgK3nXmcErzqB35GS7NP2BxufPwM1haFYiA1ZCkX99jdTE8XYfhD7qWKswMX18",
  "key25": "26vXwd939LBQ3QjM2Pc3hxhNaACLJTyuFKkGxXZJHi3Mc47TDaTXDBCYdyHNajFaLSXN6VYfzDeo23Urik8VhVL4",
  "key26": "354yiFRV32uvbkiF34yjp8LLMtUMkLaxr1wMcV8GWb9MtS8Eq3hR96vfYz4YJvwWC1EgTkqCZPoCBHoYnChRfgpX",
  "key27": "4DibXAswRfsSAwCNejKZ2RT4cKUveG5G2uULLdZxSpcgTwjTqCyfi2e6vEDJXDPnVxjKhzu2ZFurffxgUBXA32bb",
  "key28": "2c1p7bs6LTppur3rGvHkYYZ7oMtrTiW9AgeN52jz51Sb2Ea83UGkgf8GHpPmPkWxSaedBTcnHpJxQye7XJSeXrnB",
  "key29": "39rYr42bt4nDtGuFvHYtKUS4ShKBK7XS2A6gur4Pgbzs5vz2EyC64n4wxWV1LjyVmbYCV5Ds2Avki4t7BD1SCJx3",
  "key30": "3CDjW3ZsAgtzaYqfUm2Wma6zywdX4f4MMH6FbK7aqasnmoPPLERAL96dUR7ghRQrou7hUFRAPrRNmWW2KyNcAJP4",
  "key31": "5BHRGK8CphH2GHUQAWcBPdUFxkHMzC3ghdpj95LMCufUY1CZy4ESRCkgCnfU56AXEC5NRkvbqy61jJZ3hFVBCPwE",
  "key32": "22mg9P5sLsBUCfs5ZBeVdNSjDiAuVYvpX9sjrV8ibg371YvUMNp47kJg94jVfSKmEYSNBfFTDxKY2p9Q7w7D8sbJ",
  "key33": "joXZ7k294aqnBKDxDpL3gNCiXEVP7up43WGHEgwMutaiEpDyjbYz3J2hpG22d1HAisvdWB5XrWY38kpBiLu7oZq",
  "key34": "wn18fzYa7V1GyeiL6rAXLvd9rCnexSNGDo3kP1oxMVbqw7Zubp7r4ERxXT25a9Pf9ZemtVsWtFpXNZxDwoNLaXz",
  "key35": "JpGhc8BbTB4vkbox7qM3rnzQocQMEpTdR5MugAhuYa1TeLFRjv9a4ynAKpUtfZytvFX7A9LJmb8r7QHRbdqmwzK",
  "key36": "36aWb4QTk1vuz6YT52gUBijc5ApVzUivoCQ6Ak1mLQ3SGmyMJM9jc6QKYjnj7XzadZgZ7RNeFh4XsqLfmFZwesa5",
  "key37": "2fuX3YjtVcXuV6khuBGDqoAwknG5Xumq951qQoEwLJqJrZXFfwQV9wn3SQHW7YgYCWLozif3j7GedhQLpTd6NG8C",
  "key38": "5yCdnyrAcxqJrsRfmP7hvKRkUaWZh5L4v6FhnJxGT3roQ36t5bn571FiEwvc2cFpBJrABqQ8bLxXWAtxyiEoUUvv",
  "key39": "3z8Asd558sTBy7XF2CehMfruXjCwb7eDjjqHN82XBgqvcfawevWnJHk41QVSNaGM7z2JVtoxHfCKGcq6M5CNxpgM",
  "key40": "4NPVd1jP998KjLXEjfUpLyfzFG5EbzqAVwgJVjddDDAqFwEDSGBsUhGk5UfsYtssKXG71NdGHGz1Esm2A3jzkeMa",
  "key41": "2cPoA4asMjtkesfWzdxTquRKWS9rnyV1kHk8RN9mDhqEQW7kD2bELx4wQhWS8oVd32AZGGHvSBrJ4xzhgHgD9N2P",
  "key42": "5Q3ZCFygH6oEkopLUzSKJT6kkgRSv4JS8GysvvxYUPMXrYhkpmNdefmkyNywMqMRCA5DY9WCYP63Ub7kEdCvM1A1",
  "key43": "367jGXCHkLdQVUj3W8JXbHrSssNUY9m2cs7bR7oK2Yp2TyY4eWhDpbvt9qbC3oP4ps3NrLR9ePG5d2UemZTv5sj2",
  "key44": "5QgkMt12QLiwi1zpYdvcdRmXwfVaaob2TAw5h2xVDkWSFMrn42JYKrJzY135A6MpJA7Zsvk9kEpP4tFD6un8sS2M"
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
