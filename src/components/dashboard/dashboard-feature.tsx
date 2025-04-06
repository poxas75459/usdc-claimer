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
    "5peSBvmWKbb1xLPM7vNZruP3d6KuAXqfxXj25MP9AWqPCgWdh8aDY7o5p9kMtsoocaiKEt7hAP6pPojfvpeiiWKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqasUgxzrRdemXPoCtgys8ju5mNRbQY4xn9pKcMEfPyv6JSDz6uzzYW4ZRJorMRdbaMNUHBSfEZ68TjXQmrkne4",
  "key1": "5MWpPWMUb96XvR9jecuobaisZhKKYWLQaXgRGjGc1f6B9m3zRxbmq5ZQXBrn7b5kGTxNqxPfMHQrReyouou8g2pP",
  "key2": "3k5vSmMGnyGJCeHqNfXpHCCfXrKR7HWDgVGSNBF1m2H5X3eBQbK4V9ofHXVo4LWMmwemkFoEnZnTZV6q19rKR59o",
  "key3": "21GFuR3eFbwkfbhy89XWzTWZMaojraqxBY4boCfahSFhyKXyFJX2Ztn93MhVQNWwCJHn17Sdz5cxrnhZjrisPVDu",
  "key4": "5G2Jw4TWQzpBkcv3hNy6w7jRkHFYTVby2jiFVotY8u1SpEx5KJPcrPAi3P2mGBKsg1hFMqZrNpfswKSypzrQ8L2P",
  "key5": "5FbjHpVvDcPHZFf6uMPExs93qjeUgXBePkEq9QtUAEJ1RYz5eCFeErtkQdvzJGVmRWCCzaTieULJexdTgufZJrhm",
  "key6": "2YFTBAMsUDpqFqaXkFU1tZ8gztGKru8Mb2Ym8dEUZYS2M4xBcZL8YET7BFihzibmZjccqdaDuKHLeiGJGi4EtJKG",
  "key7": "5uMqgW59H2BJriPvx6rketpqUrGDBwtRDikmJ25aZu9WWu1xyYhg5nyzYms1iarchdNaRsBDubHEhM7nXFa3g27A",
  "key8": "gPG2XvVPfK8VpfKk6zGSDEy1K43Kn1d79bCAiTmaA8Y3JJ8fSdiHW9FFcF3svyS9vyzNqDC7J1DgBvdcWqnYopo",
  "key9": "mBf9kcwysHm4TNR8YB4hFXCK2Ptfqjv4GRMb3YE9ZxMXTHsaestJPQJgvGc81Kzntp4bENKHGFvgpKLFdHPQigi",
  "key10": "41ipngtaeKTBPmKq8FJzDq1VkRbJZ6MKVYLyWhPhZkEqqCaFoGiWXzidQmgfmTAB9aoBFmaWZVoUtHgqxUKzynE9",
  "key11": "3NpSJAwZuKCdBK5V49F7FWtct125MngRi8WV25nYi2yaxrBSuhb7ubCkz9We28ApbxiL1wKVR5Jsb2DXTKNhKEMn",
  "key12": "3zqYq8avuN9jYrgjkhFeXkVVf2mM3utYULVCaYcGA8HgK3TnNc7RQWNZK8NqTFxo8ownQ2bAwz4ZSKqQCkMZyp49",
  "key13": "3hhWRTfQiM296xTo6YjjtSJmJx8rjm8uxaZSpEXG7KGgnvikQbqdvXxWLuXhgPYcvAEjkKCex1qVKtDqZsXyBtCE",
  "key14": "46LN64gGZhXn3qsNbniaYTpRLWyqoh7FtzpZbpYPMsaAyopDZaAKGFzzGHQyhEKAVoWmWHAvAQUziYn77t2v65SQ",
  "key15": "2fZw35a4g3LXnnNiLxDdQDwHn6GjxE2XTq7W6mjGQRuWCmConnCFj5gqT4NsT4QgxiLMAsCHKARpxugkDuBJu7pF",
  "key16": "5nTxKesffkQrNZk9UuJgcmPJ7AScFPBVa5pksyvsvWxZBcdns8hHFA6fjwSHa4rdDFRCvmTU6te6cEpqU6PYdyB6",
  "key17": "2j8XezuKm9ohohWztE7S1YtiXKvt1eeWrdUbok7ae9K1sU6Lzg5o9spzoZG8UNLT8cWzCxXQ83xHt8oFGnH9C4Zg",
  "key18": "39J9yFsf4Ub1myCgMDYuN3gXrKe2r5WyqzRnBoa7fhMF2PmnsD2qgJMBn8Cnj6TGGW7XZi6ETfGM3D6qasfnxkrE",
  "key19": "3EBSRNVaoPU4HVLN53uBHpS3ChxUPGqg8yQhkFrMEchiE57gNxmtYhFXHsVESQgyGCLaoQKxjhh5VK5PbZxL5wLN",
  "key20": "3qzSAMwataxdhYj2BFy7sKTz1isRTPMHfqdGsg7pFbuhgxKAnCMrAAuWak6aaUQisnBssmy33DAA2zWWzijCbotV",
  "key21": "oMkKyGPSj2y9jsWVsoShiBz95tccWfNU1wih861SbDQ1ACfRoMpFDXcgs4szpqs15G8m4XaZNEvZnQmzLs9QGNK",
  "key22": "5kjUc5meTyRPqyJB1V36U5yjHGUYA5mQjEZBo7YMqysJ4LtN6sRo3uoyjdnCEozWp6dGFNgESTFftRTCgQVr79xZ",
  "key23": "35SKWA9SNNc13dy9N4J5ZG1RsaZEGmTAQAWW4bFE3R8ySzp9yfJN8s41K7tdC92oq3J9Wdt4myhFQ2GvfLP46V95",
  "key24": "3Kc8UNoXJbehNoc4ChzsUhm3dQGDquHotsZ75xgiugSyNxpzcJkVd9gsQkUFWWuPjkoMUE6uRqihVgfqHifWSLWF",
  "key25": "ucWuSQFjwrwEX3pzda3PHQXYQ9jX2ouFPuVVbDrEqtAk8XnSWoChKjsbUxtn74gyDkwrFN3cQhUFU1z3yL4oX18",
  "key26": "LAcx4SPYxSn4D9AUkWcGVhf8psScU2hgnXAufsCzxqPNQzkTu5JBvYR6f451cjiFwgmt7ffHLdjfQCDGEbYnL3t",
  "key27": "4LEK35w7BDEfUzt9H2c5S5SJdXHkiLAaTCbqXR4pSeLBnCRFsn1sJ8vV4M8HnuRoRquV9Ba8ezqEyja4Jd5qW4Vw",
  "key28": "51WNhMwL1itkzt3ZVCdyFdcSD4husVRjFNrGJVU2jduW7PXnVDp3zMitbf5hFgjwcnC3mTufwRr8h39U3PyVTuoQ",
  "key29": "4rm2h6XABdw6YTuqt7LK98oBmZ6NJqc31g7ddbEV87jRfrmA2zUqNNyLp7oW1AKuQutjUhZaDyeq1kxKccuyTxEQ",
  "key30": "7oezaXsYM8gw4sb87yzE6SePUyKUmsdX9hLdFZXKY69reHyAQS1gEe21rSV8QesPaidaoPJb9r6RAXDoh9adK6Z",
  "key31": "m46WCdwtGWrPayjJsXtnaB8a1aWnUvuefV1rwBRhTU9EQcCBPVP66aoJ8bpkSPXcAdakybmk4EbuYt1rDKhTyMu",
  "key32": "4XesCWg7NKPAR1ygATw67E3BqedVu19Wc959EHZyfawPj75bABB9c69bpsu4Z5YRP5b8aFpv3emd1jjyaYq2FFAE",
  "key33": "3GR2xu6G6NAP52szTjDmGufrbyM9XHhyeupexL83fkouZ2hQdwquCRXPuZfdPZ89tovrSeJW7RWUSQURyJ1r5rm1",
  "key34": "rN6sS5QU5kztdRZ27LrsN7ApSPZK9r1jgZLwBhrYf9iQ8w7rtE7y6oy8oA8BAGH33sA9fWB9VLZXFycJ6FxsNBb",
  "key35": "3BDFQhjDgCj2VLUNCqvwY7F4EhJC6pEMF8J7Lzo7D8HKnRj93JSVxkJYkSbwLu6V2RRoUhPXYnPEjLuWzFyhkq1E",
  "key36": "5pwUrEG5GALxe7YRZxzc4CShWcKpJwmuMeXfHQSVDT1mtPiSF4HqN4nqVyAGq7Bs3cM6jeP7VXw1cKu7ynuSmhuu",
  "key37": "PyNQ4hbhVQgcWpH3k4m5rKNjHABJPoGguuyDU9BM1a76MYHSCvR4tQ8HNhHHPA9esHWyeu9Y3YTz3hxYLgvd3VC"
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
