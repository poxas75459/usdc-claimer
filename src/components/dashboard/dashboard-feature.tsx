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
    "4a76BcNsqgxnezKbuJ4FBjPqPpy6yvb4kTHugNgNqYtiGQgVqKAg4xBm5LiRq3rM4c3NCjnk9sbj2WVUsVHe2rfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkFxTgy6vFcwcKkQy56JUoQQXDzkQ8Qr89qeUiBkv7dpz9HWfUBkBx2VuFidegq1VWRyY1UVev12M8xfTq2wZHm",
  "key1": "58s9HxjbeNyZFnFMGvbFgrVy3EvfVTqJNPD8Yo3yP1TjcGPQS6FhxLHnLWtxQSkLoyXrxxnMxsV2vV2SPsdFyFyU",
  "key2": "5PWaZbDmoJpxkiWieGsy4P2fPrrDiRgtNodv7Qzhx15MMKHG8Bn3FMtx1HZJ31B5tnpg26aaoa64vwn6A2awsawd",
  "key3": "3EkNCQiZ1HdaK2yfux5nuiEiY3GNFs8bG6F4pkG5yMedZ8A8tRntH5yd8X3CYatC2VvWGVRaDkkDh9GxPjwChHTr",
  "key4": "5fmcD7bcfuYVsDoHH9wd3wrFr4RhddGz2x7sVjzDvHVWrLuGvPC53K2F6Hc8yHqFi6YiC8PnRHr7QU9PFXrPj9dF",
  "key5": "w7V7ki4sYmmKvommijNGhz6nC7htdyTNhViZoAjP7KdsMYC6wMsN2JiTX68JpMJ5wqJwgeCV3qZH6iu4YsdZ8Df",
  "key6": "3WEHcPPiacaTtrvw2piogZakpV6i9aadKtNQLESZh6XqdXUDYThJGA6CFPP1BRYTRgaJbEtDhicY3VxjjSNPMX1G",
  "key7": "3uHFoGAzpCVen5cs6Go4ns9qu2FFJf8QP4UZxenCHYYDshkpy5Gev5hF1y4dDLf5uo1VbbqbZkVvqqaZk9KVuJ9k",
  "key8": "4vQT2XUoFjYXwrSctZURN4yJMjoAzcufgNX28C3nMNQ1ZYKMH9s4m5CqTRUPMPkTGXcb23UK4twuj79XpQmZWU4A",
  "key9": "3xkhTAHE9oP6NEnDauLSUdAAvRq7upyfUoQNhUvWhNcLWAi88wh8N939T1a7vzc2fZLTinmga2ibfGSYGHgW9LHZ",
  "key10": "ixXRF7AA3sMpKiSJMBbbTwQzfcCTx7pLXcQohBQDKhGDw7Y5MT8Qd7YuznkQ4b7NgEbeSLyhTRpMBFnZXQ5h5ZV",
  "key11": "126sFpqf3mTh6dwKdyGfAcF5DLFXWPephLxCS4vYq1gNg4njJb7gjjM3S7TmJLfu5jEkd444Zx7XaPm3D8NzmwBy",
  "key12": "3jmAGJG66jswBHEJGyJoxperwuzFLXMx5WZzikxeviCXn1q1z71zT9czKFWeMbMLKXeeqy6qrHLDVyHb7nSciRL1",
  "key13": "4dr1c4WcxYeW2A5tTxpkEzgJLbS9mH9Evv7YtAoPPbix6QtSwHezNnff38dKLeZuvoaRpFkM7TVGM2LQCbygarzB",
  "key14": "3FTkNaTUKPkbGHvkUFRvUdTG4QAidgAT4sr4EYyjcPGrF2pcnqXVDzDURxSmxGFoaia8Cgzcs2WeZbcz9YRshGVh",
  "key15": "3r9TnLEdmpVG4hjnRkz9tfr41GBaeu4CMpCZKwTCZZBf4T7XWh2qJEBqiFvwc4RTTYQZfWY9t2PjAgtY72ARgKVy",
  "key16": "5C1apw6Tm4guWuxCJ3riWVM3wcZ5CmoEuaxSH4YGhtv47BTL6q6CnidEkFZdCYzVq8d6ghkB1SUXpHBD4drKX9iN",
  "key17": "s9ezMPvw8h1oiSRL8ezNKbzJm2qY9xja4n5TuVsBFkL51NwHErsDScCwkHCtoBs385DCsEKJaoVGqPgaEn59pd2",
  "key18": "AwXVULTfg7PnnnBdxT3i59iCbpi4tyRKrTQ5WhmRB7kjFDyDxHckpykz1h3tvp7P4Vzch4xKWPBQA2pA5AbJDZj",
  "key19": "41KP18UsC3xLpX4VL9fjRRBZQ4NgKJ6TWkc84sfMX3AW7beBrgE1PBk3Ax4hrTt1axLSLwkjXAFzvxKwACeHaPbD",
  "key20": "5EzHKeEc3pMFpciYVX6rufPNfZKH34M6FZsDxpahxARheNygUSR79RV3NVEwaMJEMZ32GK7Yw2axVDMUWQFAh957",
  "key21": "3BFLpr6XiJfzsBWqv6TGmrrCibTv8NWv6h6MLkgCZX3fUqR4GCAuqZbKczMnuVYx6rTcSKM7sKiHzmw1cLKeZRuP",
  "key22": "3Wi5AzVE1ueQW1r3eXEevkDQiSrq9dwE4haGoDo3CLF2hdjyjRM8sM4xzLXKgqFnm47CtyCqe2bjimSzHkpXco3q",
  "key23": "4FiNCBmZ2i8UiF5hFRgdBWwSTTPcu3JhJifH2NiiL8Qe9kX5fZJt32ZMM5iDJc1sNQnxhAWVWSZkbfxvE9oGQ9gA",
  "key24": "jbmV8rofYkQ94Zojvu77KtLDppbXEXh7KyyK6EPkmt3aFip4rMBDjd1TyGYM1XM3QxTYHtsP2Uqy3939PguyrNm",
  "key25": "5b5dMEDBnEYmXDKkLYHsUHvKiR6FduAy3Wxoj79gdq8AgmpX9afYLmZF3U6jyRgmeKshgBfyF3MCCp7b7Yj4ZC9e",
  "key26": "GLokJiV9yBwznRdQKrNNHzV6A4aJ3Z2gfWi4MbbaSkKgkY69GJurB1zstqsvfbfLVMWr8wdxtMDZGhax5T5kTb9",
  "key27": "4edRGsbKfCW2NxjFKrq2uezw4Q8HtYW9U5enHtrCxnxstTN5VZXJTg6DEzGzRNv794rRNQochB2DopXkzPqdbL9C",
  "key28": "4gnokzCBWZF2gXkWiiir9URJaXAxrmRwZpGDd79Y4XBTb1WoQ9sNs9bnjU235Y3K5bGPmhTSHTFyoKybMQ2XYArn"
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
