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
    "21JuqwC6UUAePmfHwwJZ9RH2BFDkBD47WWEuJ8eNRXYWVMSJEG8GuCshoPzTEzF79NkPX7SSg1AAMitiWZpwkHrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Hw2UFUGVAeZ85ZR4afHL313KgGpapd1ra5MYXmE6X4v5FZxU54iMUtemosFZvNN45zAiDRh5mbL2EC5b8cWjK4",
  "key1": "5B6QRrumSaRnqgMD34mNwgQduk1NnFxe94MTL6ffqsCpmVZxTvqbHtLCH2kTXEDJxWks8sxeMKJFndHLY8RfyBgk",
  "key2": "5XRBRNvfnVeuMYby4mYEsuh7C4QyRkUW99inWBF1e4UxWkccy9bQzbKpArZziLLNTx46wJFKfedZqbzFNATqQV26",
  "key3": "5n7iQM6oAo4kb17aPb3xbEC8oLZhS1tmfssxDRwabyXwnWSiMRFbmG3FNF7iQHQtaoxCwHN3smyr3FepdNiLQ8k7",
  "key4": "2FVMDHpPPJJvyYYfCQ52VojrzB7fE4ccxREFLsikQ2ZXc4YUAyDjJCGSrTHMVobtmhMXZ6LsTPCJmj9N4utGcbKs",
  "key5": "5njvcUQAq1VziJU3MGCYgQpz8G92VYeBeDRctroP3ChkVFW9Kg8Q79pZ2SZ8QmTfvySSvAY6xge5Hf431TJKf2ua",
  "key6": "3AixpiDYSpecGMh3NfpbTxVyapPZVrK1RcNC9iSwmScTLXPVvZFQyDRSF6Xr7DwASEBZyMqWGKZfeAFuHJvw29Qw",
  "key7": "gGC1r2gea3qdRZ8F6CJyx1qUpAVMiReYtJu9mNyhvKsxirvTWxjCNWCrNmkDENxm1KEm2wNzZb896KZBKraRtgq",
  "key8": "3PC1ykM7mQDhoRmxAHLaM9mGYr7iL7kcDPiqiukLBWwnu2W3t6w3QhgwxcjDTcuD2PRGEtmZoLBBfA9UkABhSXXW",
  "key9": "42vuwobbwmEwd1CirWfRMXgvdgi9pZc23ZCjGeYKPsto4iR3Kx9FpKnZEdAi9njKgkkPPw1qwnihTREB54Ax61Xv",
  "key10": "4x5ZNvVD3ohpFS7ZzWxAoMZpCScrzt1KmgCN9frV8XCQRHoZ1aBRpZTFHJou2tQn9eM6kGfRUV3YkLEZZAbbXbnj",
  "key11": "4UWDcR8wCuuP7JHfANjjUrPHH6LzhTKvEkfnux9zv5P29Lfhnud7EaKaRD6yGkHVYbngkevUHNvvUNasXDcdY5nZ",
  "key12": "tXziFr8WBzans5Ekc6gifztedWujE92RwULhVUfV2qLqVs1eqa96xiLVfQxEtQp5pF1ufB8Q6tUNUMpMm2Q2JVo",
  "key13": "4DXXTNCYUDLLctpkUV62eXhYUENSV1bSKqxDrLEbHXyYU1uyF3XzaKkR8FsHgXSN16UdtznYyVU5eT3ePCgMXDsh",
  "key14": "DPDfXkFEUJznKcnw6tTz8KbemF45v56kH3PWaXapnWB7Yo8d2cNtZueferDgwKmPfRe4YuLwxRhFxa9h6byQJGm",
  "key15": "a6Wc5dewsg4ax39WkBR7SsD9uHqQ17YUaUqRdQGdgDd8d93p7vGxUJ71DL4JwHksp8z6Vja3VNrFKZdegmMCi7j",
  "key16": "5iRY8U9um1tEgVhMkWRFHUp9TgMTeQnUx1mMMewHB6H1Ma7qiBnn6e4zqWkp42Njhr3vePZUoVYyXUSDrajZNTK6",
  "key17": "3axDnyU9mkc8xFPmqd9narDo2jiHiaG4g81GGZ2FsDwcEsVyxQYv7v5koYszMqbHioc3NXgbVfMg83CoYZmrSxZu",
  "key18": "2rH2aJGt1buUZGJJpJr6DcH2nLBU1fgiA3QA7upqS59Yn8D4m8g42NnJQkTVd6wbSwrieywNJ5wmXCh41rtRc8T7",
  "key19": "2Yhc9XnxvRzftdP3YFdrZhKYgQPZG4EUsq2mdC1wXQJ3nz3PSsf2pPUefTp8mU6fPP5HmwPkS8sojMeXTBPusTG5",
  "key20": "x7BD5o2WBsaB6fUPGUxaRGJCABGCHY5AwtPwrLGMqKZq5ZimzbmdfJKPkVMs1zHycuPKsrFtppG8vSsqgFfEK12",
  "key21": "4ywvmm3tDfPHc48bZf9RbFXFWgLL19v4X24LxCS6qwginJSp852W4sVzWS3u4bu7LNTkMdw6j1mL6jJYtikrH8EC",
  "key22": "5Ekjfe8d4gqk7G8TPC9qz6YBZLkMmhDpMQMb2oUtrbZYwTUtZHkLKmh74ss89oezTAdGqmJxRjUbjE5CWJxYwFcP",
  "key23": "43khu7tnc3J7sNLwaBiT9jwCSkn6ntRwkN3NZqH9jwde9MyM2SyP81o7fGceYUU3a5LixXBgnbNENszNpZodzyLR",
  "key24": "4UVoND8JzEgCcTRYeiimovRVXLxBeafCr7cZyUEfAnEeQs6mnk9L5vbHn6nUDYaTLXqxvjFviC6HkfJ87gfas3eM",
  "key25": "5AoPvE2vyNQD19BbuyxTr3GEC6EmJt77NX3ZHXr8ZEK17Np5okGrig2bCjgkRjDJyVk2tdTtue9DbuKe8Noa5nKd",
  "key26": "3vTSBDQDknAEzWkW3sBEzZ3rgTwzQYwycqad9sbmuKNErHQtqo6VRWZyeN4cYqi41NqiazRbrVypPavXa3Z8gwkM",
  "key27": "4XMbqzAcnKaCoVv5mn4etDM1DYPojRDNBfF23viZHRntX6EdeE7ko2mtGjyGGybGUgkHbNzikeKKheyFcoFNcvq7",
  "key28": "51CDUr4vWW2Z2jtaWbcJN5B6ewPrcfQydkDZsPs9LmK1yYauvbvbjnRcXVZM2ALqGBoMxFBfVB5xicASoKkF9oM3",
  "key29": "2WBD69jLv5Rr2wfeM85mhBnQqudRbRxf4CCDf3ns7oc4YVDcBSdBZ5bGbrz44aBNrkLsXLLaCv9nKGcjYHDdjyap",
  "key30": "286MPPWNDikAcMBnFDGwHEmGJW5Z2H1oBfwqMWWrjMTPdZwGrBweNTLrwudtFsstNC2sWNHnNnrgjt1sMbFs487v",
  "key31": "b99E4LFLRPDtTonQCDxFw4t362fZK23rzBu2qjViPk3XXVDQmqZgwgWrccCjaDa7CzKn9zpQdxowm2kxiFwQsyP",
  "key32": "2K7H3K4dkNTJbqMJ29qS23AC2ihh6PxuVK9ahbCWUN6sD8BjG4qKicDoVVqo6koqVZDMFxEEhU2QaaTquF45aXew",
  "key33": "7pHoPtvBmbP5K2ELZ4gcPQabzRpYfTjn8YjYwusMuBtNUuPNgE2PN5LX9eYcbLXJ4qTiW78fkQ34wghZyvFyhw8"
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
