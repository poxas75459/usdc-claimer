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
    "5YHJYQQJ8jwFjH3o1WPp8mzWgW4K5CmkQWi62E3rbmEsJKfKydwpaT3eH3M6ThENq5aeVXC5e6iRU16TwTGBYMAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGdQuNRgNeJWtKwWWWCa3Z43o2S45s8CQt93VuV8YCntnUEKtbwYnQQNsmquFbaf6gNSnb52xnHUZQrp5ZBPcwG",
  "key1": "4F6oYHj4bTaBgToQFRYt9DEQD337ELw8fYTCDaVVAYzr5yubtLE9Zr12Uy8CEJvxQrwmRucDNDzaAJyUpm1rEM8U",
  "key2": "4vCEdvzunSNLtRiVBEETGT33EqbYKGRUsrMMhxsv6pw6ZRP4RRGifPfADYe1XqAfdnQLkKsCKxkhowytffjLXmHd",
  "key3": "2Y43VU1xk1EQspEsMYuUM81MvYcmghBKcNwCSvErV545jMD7xjM5BVqkfRMYDrKgth7DLiu5Ce9cTMWYtCDnZNKT",
  "key4": "2v2aonMqdytUwLnt2pCcbQnvhqi82ejfjkk7x56q9SA3cRqZxMUUoxwXXXymoUjUW1SaWp6DNJFWkPbw3hQSeRAV",
  "key5": "4rCZWsBY8WB7SS4cSAswiwMEtzp3sS2wxrFqJP7smRr7KDUFByKmjc9QL37JjVFUBUrYnhpaY131u1tdgHjqRYrc",
  "key6": "5s17y8x9HQMXWrPJXbNaoVQyH1bzWCfe83R77GwmuFzKNHhywngLPQFsgmoqJp817FNEz56L2ohtuwRcWTZoDH7u",
  "key7": "fRCYSWW7i1kzpnseNMoBWs2fY8YF9YLrRSAWGxYjEyB12XREe8irQjhH6ApVYLZgvsAtkghxEXhiu7jHiqTBkjW",
  "key8": "4eUB7tscTYEKLJvWGKoDWCBe1svPGs42iHTjm6DMxq7VQv9AwjFCp1Qm1QHrdrTdUWB2Vf2gjV43UvQn5BN9Bivd",
  "key9": "35b6zsGcrYJGCVHtfmfGS8ftssjiueFSmmLyUHLQSsXYi1WYFzjwsxuziTEg3Du5bg3YtvuBe8hVowycwYpnNHXn",
  "key10": "4ZKqJUdwmeRHaxhdsE1vCZ15J9cNzgGjyCU8MW5kfgnpsVBpc1uJuZUER5oyKFTXuZ37n1bJCR9iuczAPHfEdiye",
  "key11": "LGSdhDV3Pn5BpSYUBPCETih3Wh3dUFa9WPVRHgF2YaNvJYZxJtA9VyQqWsVkQpGnYLUujHMbwvxcgFbyJShFVGJ",
  "key12": "4mmpHtDWaENH7VtWZdte8c7vd58A9bHAftu85hQVYTGYdKjZiJcXpxuwZ6a4WZapMc1QLoJHAU5XSaGb5Dy7Ktm4",
  "key13": "4Lk21fLY2mMNpDWduZQUDiN4pTt2wCU3sb3m9Q7qZj19c8yfXpE7U4bSSf2fcLsYikXtVCbRqpUsADg3sJ21JRmX",
  "key14": "3jGKXoTQMSxJeSGFtHiWNVdkX2nSoDSzKcBHRd7jywdnnv5Sf463BB54woYAFJcS91HgoQcj98QURXyUw8ymJmRh",
  "key15": "3sZhFHY8pLCV7D6uEVrSfZjRwrCvXPxet5fU4XpUEMxuFwt57cFfNH9UxPuCg5W6QQTfsVb91SQaf6z8JjWMD1C3",
  "key16": "5UFzTRRRNgUmrEFpH2rL66m5i7ZR7oo6acke4Z63kzgcCCFc8DzMi92rNfmw6yRodNjezZmU8cB8ivuHVDpbSj52",
  "key17": "B3kMLrNbjNmZVG352mjYXxEEYbWbRtupPopVh128hhF1xT2T834ByrRchnLmRE8THXzfDdba9DcVfomZuzSp32q",
  "key18": "2DMNUifFh7VW6SPG6yjRMsakQUgeXYPGoLXqfZvrez24NZfWVdyxgSsF8872FK8NpLzfBwxk9BCfruG2Hq6sX4jZ",
  "key19": "MZR3A84Se5g5YyVy2DTSN2szxoyA3gbkAwqq98a3dsHQjWgR6H785ik5c51sxd26QYCdQhrT3KyphjCDGBtJXHu",
  "key20": "556KsYwFcstiu8ZX7YMvHe1Zfwo5jwuSvw2iTxbMNBGhmgDU81cWSvhjF5Evc1GpVmF5x1mhJZXYeCWA1pgyhqKX",
  "key21": "2BYmHgM3PUxd87eB5pLPVKFQVaetcPFzpZdJyVTq8priW6BEdm5jZp18ZGHJKaY3AFV3yxT3g8Lmwuj6TBWS6Qoi",
  "key22": "4dAzfuKzqkryEkg41pRmxgp6PQur3XfugxLewmkB7c9Cwgkv4g9ivbQXqaxKEJ9cbvofWpmP9JJHbfDY7fstneyJ",
  "key23": "5hcwzqqUnDr9LimXzicEeLG5LWgACs41FNsjq7bSVuSbXd6TrwgD9U5BBor9pTSr8GJosTrV1aRLCHEHHqREdu9C",
  "key24": "5gzas9JpoFBo6wJJT5imyyY7rAx7fQPJ16BBqdwNHta9gHwBbs5mXC88SAE5Upg6znt3L3PJvTpDB8qJya1HfjPs",
  "key25": "58z8SxcFG1KMNEGmu7KxYK6pmrpziun3ZWaVRh4Vc9giXQJdmKhwXsrEm3oeWbPQmC4vrVZCDp7cFCPKKaCizWnK",
  "key26": "4DxyfvJGBU37MVMUpEwJspjqwQzkJnegXpRboQxL7cnrhFU3KGxtvwURCFzm9V6znj81BgbXeB1jpRRb9a8GLhoo",
  "key27": "Ru4aPxrzWLrhsL7ppteYBLBCmGM2MMNt7yMc8rimWWBhfoxv98P7G4Rbe8QeUDyWD2NZpfUrvEQLA3YdLMnPDtW",
  "key28": "epSEEFttewsMaFUABApMmaJtyzLrF1nh6vmPf4fmpnHMj5Z6mkzsNexcob8UL1nyj9yAYei5iG7rB4qYn6Fyd6q",
  "key29": "29sCSLYE2r1cPhmax6iTig1eFPeouv4BjGqDkXLBzmg9VEpgzXcGLnAEN8Ai5E4fzZLTPfnurMo98wHHEAaMupNL",
  "key30": "3SV2iUsdi1mMR8FwkgRZ54JrwoFFCUE8q9WoARkQnJGj7zGNWA5rKB792DXbMxs2gr6Xa4cPFcq7Ex6eGxJYNhq1",
  "key31": "7XhxKgRGh1bLcMD7WfL6VbrAR32qsiZo4UULuo54xQvW7N6kraF3qA1Au33Xk7nih8XMvoqnsoRUfgBjUpZMo1g",
  "key32": "3BnpDnvMKq9qSejfGvVxycBAghUU8UTsFSpASD8Zs6hm2rM7YkaDwaHAA7XwFcv76TLzrTCz46tYnQknW4FuEtPR",
  "key33": "2tvYHPjoUnRJ9LhipBmWg7EuSiwf3YFWj7ukBLmn4KNVyCAki7iRkcS1ZP1BM7nVPhbZhcfhdDZfeo9BC4tYXYDk",
  "key34": "2tzozRZfhoSw5KbyKBLfHZ9cSGSXojgMFLfSFm9Tyer1KCsVSacJyUL1UE9uzw4kERGqF8JWcFWpwJVDyGWLi7jC"
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
