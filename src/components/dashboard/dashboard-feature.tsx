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
    "4geiNVqLfMyoWdt3mWDbPVfpCHkbtktEB2RCCHzxAsTxjYLBuNcbKv6UiYH2dqe55ZjABbmq3qYwDHQRsReCCjjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZyBhijXaCyREuDxNtEvTTMV73u2XT86xox3MHEX2MGCrK4MiY3zyy7h6NS89zt2mTUwKA56e3DWPHjK2bYsThZY",
  "key1": "2FYXRQkmaqVLoqEixijTRTLHwmgWinroi6eGvPNqzB3MVpunx13Bc5NHrgQWiecWXd88HjFALpJu2iTmNUF7Mfym",
  "key2": "5rQD7gqgJ11hbR65LsSHS9DFkg6qnPGvCaiy12YZgUab1GdGDy59dkkg8noZK6VYsroFwaqVE7ehbt6VLVmVURka",
  "key3": "2B6t96HKtMBSD725vbgE9qEdopJ9UCxSf1R8mv6weTZmvF4CsDretF6Y4uNm4rDea1HDmWNGLbvN9B8QQLeSJoFZ",
  "key4": "3VpwSLkA4b6UsxAYmVLu4QgGYgHhEYQMP8vTTMLJu9fd6yVYknbqLENi7KxJQZYZ4S9S86ez7ektkLwqPc8upkeX",
  "key5": "4zhKYKiDV5cSyawdiVAdc37kKrfhgR4N9o7A4D4PtizoraVgfiSaDpQCdMy843S6A6MgY8fDDVCYqwLzJ1Tw1mAM",
  "key6": "2tSrSgYt1hJ5YUscuTCnxXMEsZUiM9Dyhhn6KZ4s5t3wTfcuHobjidjnvSLVQok7mT7xXDuQjcF4ZNXtdvqLAxcY",
  "key7": "2HoYkYJUGUAYdhSHsDi1NjBZ4FWeJm81wAGfdzw1VU1fV3FK6jzo9bsxEvEZ9P8bjuKdv8F5tNGR5Sc1nZeuyqHf",
  "key8": "2Ksn9RrDeuWW8nXw6XZXnp3eSt6J9o8bg3DroYN97sVfX7k9R6WaKh9TkQ1VKHTffnbkEcgH91H3bEyLBFwW1Abh",
  "key9": "5GYanx9N2FEChHBKdvZqS9B64tomKunzdGSy55F1e1r9iabRed5VA4XxygLtwa61WZYs3JUx5rvC9gKCRrQE7CLi",
  "key10": "4pj1WsjR3WVTJg5wUWgZSXuT3znAD8RptDsLL5L9SMF46bdLdGWXRxYV4p578iSNCKusRwuDxCv7tX2oZLzetRoB",
  "key11": "5RsdYrA9hryTVft6GhHWCfUoufL727rEGrJcL8uZd29b7RGSKJFMUxSX6GmeRevRLKttJxUC5noE5PfwqB4NzrNZ",
  "key12": "2HXDYmYPN9RsoVdqqgXXZv7GcYigyyfodqj2HZqiWWt4kyWKL71gkXWTEcgRVu8KtgtDShX5zHCjbcRf3jdQKrvQ",
  "key13": "4b1eqMEt2kzPnGwssyMg5KGGpQ3vdtSPnvBFejtG6PPSL1N51WVPf6NwD4vfhnnkkJjMHCfYQwcrWHA4zVcURCxT",
  "key14": "4rcTYib6DKR8JxmbG4AhuN3mVvJ1dxVofskxEYtREN4kroHVrnSb2VQPjNfU1bHzaTbatL1YK4vvNkf8M6DNtkzX",
  "key15": "FCpv7trMxQjRnPXPcKLASzdACAXsvwcSKzDdyaohwH7J9fxJadUqipYUATyaJKBXzzf61QvPvDGDbjME3NDAV28",
  "key16": "hfkRLUuPvHgEtu1BhV665NDJFhguwAaorNjTwfY7BM9QdbCQJ5jpkSQfUjrhHYR3Va2Ao7fReCPt39md9ATQepW",
  "key17": "5e4Zvy5xrAYdEb59W2Dif4nfttHVEgEo4uuhGM7Dwb7XByCz9N2WQrUnawLf7m9TzxzKoYGa36fzy4BwGr3SYC63",
  "key18": "56A1MJt6qDnDMG98CTbF7aKRyru8F9DwZMLVtZfL6Pxr9MtPTu1KLvuGNcoRXqNzwurgHXjWzCTgasCdT5nvgmwQ",
  "key19": "3hXGwuwLtkMretkg9Bcnn6vSXvQFbjRshSYn6cTN3t6KqAtMdwaJBVu4CAMjSFBTt38ZEKyi6ArZRNbzdAKwMeY5",
  "key20": "4cz76PEzsRxRptqKYHArYxwwZuFjSwbfDynLRRJ4vLtWp7NhfkWK8NGWZ6BqwG7npHi8vZsBgG9Sr46uBCiNybCU",
  "key21": "D7rsrpVQcCQy5HcVoFoqKpRtW2KUtjuTNcreKLFa384XpXuFwkjaMSPSxDcafPuPMZ8DzDhq4dyKkwUH8sFfdCx",
  "key22": "spiUhENEqvosbkapVwvRkT7Nf9jQQo6oNa7TsQYgpoWvi3ibzBB5DKP56iy9ofojNMCcnGxBvuNThE8R4dDGbkN",
  "key23": "2KsJrdu7asezjNrU7SbDvQ3mfEmwbD4hp9AYf3e4jrT55jLcEKxV2SvrjrTvrGNo2agn2FWEvvHkUqH1wMHMrVoF",
  "key24": "xuYeqnEKfPhCuotw1B87zMvpe26UVqzs2p4gtC6WBNKCsN8HfXHHcsSc5vLQj6AAi7NpkV945jb1KbmDF1wFWfD",
  "key25": "P1rddJsXzD3uP4py3XJCfNwxkfcHX2j6fhw1HDoy8A4MEoodhUSXKwWdAWjS1pDtZ4yq1aSCDcjBuJo7KHWWf26",
  "key26": "3gvQHTeaBuSnGwbBXs8HHfAhKn4QVaWGsfoB5V84enfW6LKP15tT6P2Du7PNStUtgMLSof7mQxmrypxTuWycYLRB",
  "key27": "22KKYc3PTnxdW8keUhg7oXK8iMAHEyyja7BxZccaeQUTSBGzSGcVjqegaCbkioKqxosvyMxra2RV3UXUEYZBH23G",
  "key28": "3LGZCsXWmwfZoChvNFx1Rjq6VLtHA9p3yy5eXPzPQbzwqEjzJoQxy5dfioWkNwsLZ6SUf3rBnLTSGHE3XsGjj6oH",
  "key29": "39WtYwkHViwyUsCM4qZ3KknVHWqed2JjgjtkD8imKgC3ygfr5GW7jCup1xoLHgVvG1vHNvnFFNN2SGs7p2atRdAC",
  "key30": "63yapxL36tuDamGWD2Gu8HUGnouvPfVd5npmf7RdfWrtVHctSvxbaP1FBnQmSbqLxAEt8jGn7NEz7fTXgKAYtqQ3",
  "key31": "3NLwhNFNnLAv9Kotr8D8yvhiPBm48yTEzr7bgw6kBmvDp5yDAEcguQDq815PbLwnUYkGFG2Ny4bQ5ZDz9rRh6uJy",
  "key32": "jQqrmUjvhYYfFie3q6uUpiweLRvTom8P1vs1FT7uuVCRYKC4pxwuRt6tJ1eQLieGTQJrhrd4YaW2LMkK9m8gRwe",
  "key33": "3dejXXSqQcyhG9eLuN3K8KAUunMgkj3N2qSZgKYjquDqhp5sVSXRdMSGHdNbkaE6wffM4d2E3ru2xyKkKBmKqSvX"
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
