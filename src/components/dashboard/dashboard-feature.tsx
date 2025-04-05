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
    "34CqD6KmjwTxNw8Nnc9xdFn5f12Mvcy6nsxBrUpnpMSE3Aq7yTobskaZW2VvzfcgqjoWopdqLfFp4EVmDogFEZuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPWtgiaNW3RRo4rC1vzRKYPn9fdhmgwt44XBLp9bVuN9xQdVZKdyNdHteyMW7sTbwsLo1ViivjDCYB7dDvnibMJ",
  "key1": "4Su3jGRdMdvNyfFtkea3yYWEWf9p2JmttMfanniujZvFDstNXJbsjzbuYdfUb8WMqE5wJo2T8h48FgGRx5436pMg",
  "key2": "2ygzoSiJPGo7kQYxkgnJQgxb3RETBHTQt9xAgeqcDTrPmtZ8qQcBsur25EGdUWt7CCDDr9yDr39MHC8qYRWgpirX",
  "key3": "568ZDXvDi8fGk8kHgee8GxEkZpTZQFinpMHKKqdjskUt7RSkcvqkwqm9RheBX4Hgea6pXtDa8D7yHTMtXJ7beEUQ",
  "key4": "5EAmy9YLyjhXxhHY9ecQZ3yRBqEfuvZfzvspM42g1p78kBgEXW64YE5ehApRUvXBej622FC5KGCQvfWPbR85e9rB",
  "key5": "4oMYC1sqnn8ZwVJ26sVDK1X4hzrJyakQ2mNwzDqtsm5Tt4PiANoJ3UpuRiYnTNeZYD8nE2YJGAQRZUkFXT8aqYqp",
  "key6": "s84BEs3hL7VkK4pPz8bk4RjWEe2mYETcMKUhFmmDVhbVtVS2qWEz7THLcCFUVw75tmhYawjTQAVq3b9CXmLMhjT",
  "key7": "2tFJHkXThxjRMCawQ4wZXo3wpxqg51Ehd13Z7jRnfZmdQF6cvT7DXpUYy9AM4JtgFnZXVMn5XdTzmCbgS4BcX9wz",
  "key8": "3SqP4gGm9mPzmuqogwr6Lyg3ELSeXXmTWXbmzBKTzA9jRdJMhez4VSJ3JNFyqGSm9qBfw3Y5TYHUUhPvTCr3nE4z",
  "key9": "3QqAEjwkdccR4sVn4KFfenunrnWZBNPTWyzDJXHfPd8m6tyMZQYtVCfB1xURnELpTA5ZEH5H2Azc5TFMFLeBP6U4",
  "key10": "54D67j3fLtVkbMeWrv5JGwUmDkCtdMMokYfNQUy4UPRRamozLsAoqJMk7CJ9R3r6mDj2n6wp8eeYJP7DnMhec1yS",
  "key11": "4i2JLWT8zbVCmo5WKXmFGRk9mpj9AufJeWQi9SzWsdRAFTEUJRBovN9881AHSxqttLAVhAV4aSShQYgq1MJeQx8U",
  "key12": "26gXgqQpV7i5vKs2yQCaZAk4wvkKkmRnUqFE6vwuxS6CQNwQmG8Vxi2JfzocyyBq5uz5qLxodPLfFaDnqVrgGWmg",
  "key13": "23ykrzhEfhkDPhiJaoZKAJ3HMPcNhkwaQcuKf5NjbKe7Ceru663Dt8n8WxjdpbsQRDQz3tQbDkigAe91nRiJA2qB",
  "key14": "5YBcbxkFPhPcxWPkFgUu8zTz6Wn4kU8xBzZJmuoXYLRS8kycskqxNZosgf7Hxwgun6dG4XWE6t85s5nGBBGtQLJB",
  "key15": "3Gr9TqLBqfgw2xigBRQindJQmMf4LTiWFtLbPcF9REG5bcpo2j4fkMg8qTxHUSfZZWksD3gTmk6NsKZfwrFVvVwJ",
  "key16": "2uTHbA93i55jxMpLg53pguo6m3DPQ2MTxvMu3Y5rKCybAYzTy4oeCQxyT9bb7S25rmC57yA4c4AR6EmMrfYyJVtc",
  "key17": "21TZAk7qDhViCjDwYgodZGtgTFgCYKxC1GHd7TEeRSE79tywCdoRkeBjUvssdhp2gKNq7LetsmuygbfaXh6pmdXP",
  "key18": "2z3E87mNERL5K1YxixCzS4wyewLaXC7icwxdk3ETkWx9eVyJxvrG9bnEAK4gtbrFAussn58J1ajQLWaVFAhHqqX9",
  "key19": "43vciwHjLN5vGKcm4gRi2CoNi9c3W6UwDYJEw1KDwvqWCzwYun3CAmGm5f4Mg6DoDUbzzm2rfFmFq19NhiLkw3gA",
  "key20": "3y5VZ5uMkikjij9dxk7yzfmpytFSpBpSKg7txs3fGQ5B764Y18mSCadWNZNFwHMTxHZTVEV35EwBiZbsgredCsLD",
  "key21": "4vkRm7rh44KQoTh9pc2CS235TAKYAwmaBfYfK8i4TFmM26p2J9Vf6CXCs9fs6GPfR3MYgpgLPbCtyygTyHorBz1o",
  "key22": "5Zji1TWJRLGiYZ7QamsXKGzeeyDucSdEBnRVHiDhoyBy6ZdUmwSZVZrk8C9KosTGUBSDLySpWnikvwMz2oBNCzF3",
  "key23": "5D9onA4FgKYydgmVKDYLkswWaSs6sNogBAS5FdoyUeqxQpPY9ob6dbDrARV5Txv2DUn2RpKdCgCd1AF2s7fCHiKy",
  "key24": "4SAw8J7KbatUBkuUarzPsWyStoKbLEhDsMLo4FtXvbhobWVKzpcUpt9XwgANr3JoqujTEZSr6oEqCKdwMEp7Y3Sk",
  "key25": "BKdpMa96pw8WStTJHmg99A7HNFZXjf5YBtJnU5wmaprZj5bKCdV7DCZPZa8nTFBTFcfJCpTHFJoeLwi3MbM1Kdz",
  "key26": "46jUBrLXPDhD5sJdjH6mUptVghWeAkRMnRa5NNBCvgSnLaLG6pebrQCdRQyWAmBc8ZBHFv8TGd1RF7vTF9zusXN3",
  "key27": "4nHCuomEjsRUhffytcjmU2phNxcFTUZkMGaqApChCK7jaPSM1wRWJGjcMLx2t5qXmsH8b6uz1KpGXMNfJdknXaUA",
  "key28": "2H44icESrsxjNecHuNwksPXpc68ehLCfrtcRL8hR5BmVdZHBVAV8ukoTb7Y4T12NYpNuDtecMAnttASibMBdWdRV",
  "key29": "2oPkgP3WN5imxY3QFRGjz2RMa2Vdy6xJKZ4vSxe6E1bHkofvuGbgCibWVNZ1hUZVHSanovJs9SVyGXtmBRV7xzZj",
  "key30": "3QKjWCwhoajr2BJwjCK8Q7LBhGCBKmAHqAX6VmAA9iug7fRYcCi8Awbd1gyBuqudvuubTkhDww8SQo6hzcjBjTpD",
  "key31": "4orqM2caivbPiibx8MPpzwRBjpQhznA6DZP7SDvLEXFDisACJqjqisqsd879d9oSTQdmFYmwqPY7vxmivtUP2v7p",
  "key32": "pX6YruuCQn8Dx1aA8yGrWBA6iDU6WBBpMGjUnmV5m6LrcDgAi4uAJXG6kzEWTKhCxDfNt6dM6VYJWbtKJxQdQsa",
  "key33": "49BmaQ8fJkJHGN7u5ELVGyoRzrS3TjEuYAGjT8cnY8XjPapn5Xw7Y6JxG2gfMzXRA6N88vPsgaaXqYawz8r3jfgJ",
  "key34": "3VHEt36jC2FR4j5pswEJYaAC34kD3YaSRMCbzW5tnC3qdYxYQd1mqJSNKA7MuYsu1Q1UAiQ2mFJEy45VYoNgWb16",
  "key35": "4s77ahTRKiWpvvhG7zX2iEir5VNwERFYpvcnhafhoAYQedz7pjLEgDJ518Cbdhpgs3tqKQMUHUUChHBPgDfx2mj9",
  "key36": "3W6MWAW8CTFf21PAznFdWpXq53Ni16oRJhCATS9Yfc2Yaa73xUEZdRfV26KSPSZvMM2xpKekrAPhPaVv2Ay53AtJ",
  "key37": "oQuHTBzGEUrqrfnuNHmkcZet77ZcnuQUr7JJofSNz3mzqYDUH2LQKodGBD8hPAx3TWRZm4W8iVbAsMw4QsfQtpU"
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
