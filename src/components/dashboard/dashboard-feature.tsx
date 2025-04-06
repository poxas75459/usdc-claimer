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
    "3qF9AbxWGrgeVeYnbfn9NM8uqhFZme2xPJSZcA2azXNToHLoQ6Xnw9wRoDy7yUMUD7ib3Nqpr16srUToY2SEkTpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JK7YdcnkLdJWaCTGTFr1VPAnYQMmhFQcFy4EutXh7G2QCEPpXttwABoFrrXk2wEX9jMeWGoH7GpY9HNzgykKiFK",
  "key1": "2ZcAVybZq67bjXQYFxva9Dn6MGYELm5Cuh4bxqsAgq8wXBCty18p9in8NFN87fh57iwgnkoZwVEPxtmKnZaKY4iK",
  "key2": "3zjNNAF33ZMJmseRDgYyi4XCrah8bcRY3CTRAhHhgUvxU13o3UTMWqbZ1uEx4YaXNU5hfZUASSZoq2Dt12eBjmHT",
  "key3": "3fAYQMpgZKtPM9dyugCHTaUfb6UAyAgzpZoyFGkF1QdxrskxFAvVDeeLCdFcRMu3wYbks7mkdQKpvnchYGMvK5RL",
  "key4": "46rxUPbhrpwSF6vmyVWkPuVS2XVicGHfNvHycJ4dSHt2tcLeY1tJq7g13zUkf3PWnkTvY75RbYCf1e6QXZJLkvYV",
  "key5": "bcHdmYiVWJLt8WwZCnHujDBXFrcUagrFNPVKEWoDs2tvsgDoKQVNKoKUV4dh6h7n4vXYemU1MmbVQ7gSZePxdoe",
  "key6": "4NpciL1EnnVbVdkTx9q13skdH1M4rmQeZhfRs2BZA5u61BuM3hC3he7YFoNB6cxSyYNMffiPfvFK6vaqeiFxPNSh",
  "key7": "5rFqxL2FLWLa7cDksLwNHdjhsb6gj93epF9gfbHnieq4TXjXx3ZTGe4T8d47yk9Fo2hkb6QUxFMPPKQyQ6DEdhaY",
  "key8": "3dUXQgeh5zbHa9VmhKy7xc7fEa1PHEvvBvzrvXNT21dVM1gyzxn81JH7LWg4Ktukdbmb633fTcQapmEBwwib3jV8",
  "key9": "5GudAkVv3MGjyzDsabmCZoU5jxTohjeeGnpb2UYegMFdjFVUedAm6Ejc6o9wVJY3Nj4vzMD6DYmoZZAF64soifgw",
  "key10": "59HCrLWSQBYiNCrGZznSmdDxbaHigCf1Bz3jFCoXTdU3SSUpAXeNmCqkS3MwfMc2BF6WS32vkfGyCjb2xJY11Keu",
  "key11": "5B5H7LECDNmQAj6xuPmjTZgeaaD2xDogSe5QbwvRFzoiFDouK1xcQiFqfba9w2xFBfPSwqkFHWMrHqaDYiHG32Ah",
  "key12": "sDKiiDkeZXEwGGhHrgGAJdj9AoEyeFx9e2YeCW4bVinNt6xyTTW5BBbmhw561veRhk1kgTr4XqgwdB9UJcDywCV",
  "key13": "FkTBtVKRcoQcPypyqfZ8wSAZQAdTAgP5wuzsfR1w5ibnGfCA5rk6ctC7sm5jM9A6F4fsr2CLXv8irjcP6LtPeUF",
  "key14": "2j3SRny474oSqnnWTsGYk3h4CzrhLRwDVdtfcPpYxR43JMZptHhfm7Paj5BEEoQ7dabxyg2zPdizaqzzmBHnkEXh",
  "key15": "3gvKpQHZhvj3mCaoN91WVKXeLWM3wgdRYheD1iK8z8XrWh4xhfeaRkXzyK13XFa7ryr3bnGdUYjJt2sGhUyDVpqP",
  "key16": "JGsHd8Lh3aocJoKgNbjcBFZAWRjHQY5rFYULuksdTf4gF4ccKKW38cAG7irz4pVitfVgoeCEEk2kzDKo5uZvRiw",
  "key17": "44zmbA6SZ7PrMNpyqKSnsyosoY9mHpCqUU2cvSVxxDLFHbcA9ZvovKr91f2oTue6qtRDgNtRFszQqE8UWrPTARPw",
  "key18": "3nVNtkBpSbqsYHpukzMZtZNLdQKvq6ccYFzisLKRhTfPYsqVNnL55YVwucv7Yx6JAJavLmnCd44kektseFZr9pmM",
  "key19": "2yCwodpcNrmMyxzKGuJGWdF6hYFKFPdjSAnJboxs5Qnz8cR55komeLfZEhB6PtvEdjZ5KV4ojBTCDrSaj99AeHW3",
  "key20": "5tGnbQzjHGnCD91gr81g1GmL84W8Z2aFkhjasMCmw7RQnZrSsSSPUEa7SxrQ2Quqa2oJtQtmQBEzShEH8aEHSaoH",
  "key21": "2JzvhVo9Gs4LJSyJgeUyr8Y6Sd6Px2eEKfCcvhtaRrx2AaReKXCywMizMpQijM28622LfKcXPzspZmGRpjgjPjou",
  "key22": "4bpmeHcBBiF6zLkyEQAf1MN7N6baCS8XiKzNWeZYytvzuenHUKP4Xa8BbSsziMj5Li3UTU5oAH93uwqgmix4buup",
  "key23": "Q3G6XRWh2BcwZXDvRhD3EmoR4LmDxLHYKuZqmjevww1nn16pspwwdB5aPcb1sxvNPoNSbSKPPhq6nkmFQwXRnGF",
  "key24": "3PxPaSHaMS73XzWSKSChAjqiGBcWz6NaFo9RH7H3epXEHkSk4C1JQD8Z1esp6NtgGeFCxjfQEb6g8wxKQEUb3Qck",
  "key25": "2SfB2MnLw5JrWVxaNMBEmfYdABtax67oyNi4zSwadzn8q1QxSWrNmXskisi8M9NtChT6pLKo2xUJRM1cCz5TBSJf",
  "key26": "waiNTapAGVX9wPV6UiYyifTqsnZjvAVbiVTTg7R6bowwaxxo176ZDThWcUE4sM319XhNA3GRvwUHmkcPiRsc1xz",
  "key27": "2difrM7NJANhWCcXQ21MH7esCCpkF2ERFcvtBrxgZDMgPPfUA1ZAmjtH9X3tzLNwiAF5BEMZ2YY34Mq879xtEfVt",
  "key28": "1kDsfzvoBAwMnrboxfCNmiimxDrbo45BpGZgmM8zDjbpPqW56vH8S8y7EFbwdKFxVT13LNufankqVBE1WEJ3hs3",
  "key29": "4k86ai8b7XwtBA99tTbuZYzHvU8fc9XAwgohJzKu2AFRZYUfkAdaoPztniyrxcctUqVBr64H7KRd23WuKRsbTDTL",
  "key30": "5anBLtkbjD8LrFeqrQm6wYmcwRxQHMFRXUT6WhByXTViB7sMEwwkAcpxiab5rf8LGiJVyMjptQgXuAZh95KpBw6U",
  "key31": "3je1gKjapSm2ooyZ2bWtZdNXxwgGvMzebFSswUFcHZSbiNqS8TvNe9ZnxBeBLS5xFsyMYZ8gW3wBBZxjwweRAPwW",
  "key32": "3CbRaYE33zFMDhicd9SozN3QRku9WYhkDLm7sVs5yjbv3wsqBNShbjNrc6UR1xwxmHMcVfK7DTZBu21Ukfriteqy",
  "key33": "3GZmNonSqUTBRJnzFSoWVLHC6BLfTXHKvUuL2qeJ3FUWZoGVyzfzmCTKf6khkqeUH43nccSje9qm8HKDKqAGpZ5S",
  "key34": "3b4iyphLVAo4njvmbZGgGE6HLUmFeufVqQuLcCMynzKG9iRdvJXntY94QMG9x9oLmbKWq2jeeLmEvBjrZo9FKtc2",
  "key35": "4HfT64GPfA4HxuQ8SFjqAU51cLFjky2SpXb8KrJ6XAuuXE27aoPZaU8QKFrSpkFcwYPSYwAwrV4157GCAWZRwK4D"
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
