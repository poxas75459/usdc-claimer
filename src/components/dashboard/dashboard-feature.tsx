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
    "Jfp8KpYUBgDZW4G9ALL8fuiQy47Az41XGVD19vCrn9KmMQs7zhjJRPtXqT3pDBQASJFETwuJKWFbnCMbniNPhjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNpeeqjTLBjHhom5xWH7fRy37sDdLEWZ7SZNGKL778Y35wGxezJWZ1tnrxKAyikg8qJ4tz8X7aRLwkPRebj4AGW",
  "key1": "2AKim4wJWiJaj9qopeERsPYUHQavxGNrAkoPAV1ojnVbHQ2gKjvmHE2m58jPiUDuCR5LWphETfktF2sVv1bgQFTn",
  "key2": "jzWt1T15CkiUMoS6U791LUatT2b8hdEU2ghPwnr3yDGh4XoptmSp3z6b8tAvYmS5uJ6Wrx2WEsWUiANHrW53zDW",
  "key3": "35WSumyAxE9iwzNgqweGR8ZNmLRNxPh4NPPQYZGy21KVEUepKApTPoHahDUjz7V2YYdJha14w9ZWdsBpCmt8dDD1",
  "key4": "DTDePePD4dUy8VyWuPv58BtBVdCHJr9wgwjsShX6GQ99XFYqPu3ubsqQnECJEBZ4xQiR4nyXMWRzUmRLZW1KzXg",
  "key5": "aiFdPyMW7UFsHJXVTsZYCMwV88fvxp84rjVpNivSZGLRDtZfSRifUz4MLMVzgJYKBGUd9WbKWfvUs776TWg7WYL",
  "key6": "39LaDjrechzYgTdYhBQV98f5nRtpkxpL9w9FQv98aFLuRHGpUohfcfbZtXqM2arMnvAusHbShQmJvSYxSiTnXLzh",
  "key7": "xeeNdMwtBYrpYME9A7xzRtY48mYjPS6NsRqCcnxB3iNqEYWdDWng2rjgXrYkWkBxsdE7Yjt94jb1EsAzDTE1DrK",
  "key8": "3BrKGixjMXAUknK6gMDrD8has6vZJtVd8gh3HaS2MkxRHEnJW3A1DT8NJ9u3yFUufV2PN5Xy8REYuhQxJpJsHP6j",
  "key9": "4wogL3otsZGgL3ZPapSJtszvN9eZH2CG9PMtBvK2zX2LBmR42sj6pdv4YjttrtCXcE1SW8fMbaQYzWKBbxLEgiKr",
  "key10": "maZVduMWXLZcpdEmLKeP2kCdpAWMQcJoLKRcMjdYx8ann1ATxmk2g9cXCA227jGA4vvfVS33p6qHAJiUoY7tRu7",
  "key11": "4qTjCHS5saimCyFP3ykuppKPV5XUHLLpnzLNPUuTovmiXbpJHTv7TqcoDzQ2ocGDXVH2tEKThFE1Ljsp96kVuhri",
  "key12": "2omVG5qtL2HVV24pB4WAufteQGdkYv7QDCbg2jbMmHHSRwxbAb6B75bRarmiY2RJGMu1NPznyVs2TE4Q9Jcb17G8",
  "key13": "3R5mXWPZZRF2J54eNgCivG2Gz4saCNpv8afhTDRybzADrhErvg1dej2ZKEWZXS6XfFozLq67co8THWcBHBca3yTp",
  "key14": "2nxxN8xz1v3cigYuE3Btn1xQ6CYcVYvMUe14fZHeWFxzC7XTV3YyWk7z8GP6iSQvRJibqP3ooef3zgrkDLBxvqUb",
  "key15": "4FsbVU11KWYPYkzd3WSU1Dx9PtYXMJdzhMjumi1nDYexpmL7b1Tm6X3CoQ7b7K3Hw7jQFj4ZEh14Rbbf3n4ifHAS",
  "key16": "2VPVHFzbXFUKJhnmZ3nxoxZbbVQnxgvudj72Dmm3tYjaDk5jebT5UdHinKz1gZG41noBeSqbYzKuka1remnSriJA",
  "key17": "5rtkW4zKfVmqSG353edSwYNv1VqBJ4kAbvTzWk6prZLfHsqGRfRM3TW9CHv8R4xyTnhGoRJU1WkyDNBWcknQ17qF",
  "key18": "1qixZ5StCjsXUMbcqHZVh6VxRmX6ZeToCkHWRDubCh2jYy4ZM2TwuuAEBh5Vf5qsrMMjhcHfHzifqXwQeHswz4E",
  "key19": "EgSwyw8Gt3YcQfzrgJuGWNaJnUXxUv27PMjCy7WrYuSYPTmtgBUtFXZA2AMmWZFfM6jQ9zTndUA9ECBTEzA5DZT",
  "key20": "4PbWHWTQ3WT5tkgMyXA4TgfEvpd9TaYacppwydVvY2zGvW6DNvWW8JZHkkTysZW3r9b7kogGVn5nMj2NDEPm9yeU",
  "key21": "39aAgTdZvd4qBctoAhh6zDJCs5PZ6D8xdVXaZpAYhUnQwe4Y85fvxWuUp6pbEahAAA6GgyZaJXcxhUWr1cnkq8LF",
  "key22": "dPRq8gtTWMNwqbc66Q5tJCQ15nns91awtmrWsPenG5EKGbP7nHskPntM3UkqRvbsAKJGaUsfggRBY7LUXFp4AUs",
  "key23": "ggKMT1osQxRdZiHSBwujPGZ1gT4yjTRboFfaRccXBbXPcK7G457n12D1GJwNLT7e8U2Rx6CMRA99gPjxXYJSHND",
  "key24": "DQCHPTEqwe9DvB7LB9hfKNGfA9agU6zpRp7cBAss8pDisR9TaBo161fA65hZLmV26DXY6MCd5a4RQAkhPPtEyGL",
  "key25": "3hmgtLVbEN7CTEHhcsDJkGXK8b2XLnQ7pvrZZdkuVNBYpyWmpohsroMtMTVtVzvXdtvNHeWZ8mzPwDJoZqBTfPPv",
  "key26": "8CvSW5xuASCwgp5waGKTWJhGbLs1SGwPNyZzKqD5epAncTrU5hg4531SzmBX48tV5sQWLScLrkbGivsGmLRWD5V",
  "key27": "4C3ECTcAEqzUcSLzyCeUtF59pgxcXvByKEap8pMLJBwVzvP7qxYFf3MQxDapdFu237P8umMNnW8CYPNU99aWDioe",
  "key28": "32Qt5534ZuedfXC3XdpV34tAigQc6cYNG567SYcfLJ3AfLgmwhWzTEhhBbBsU7hZ2gc5UbqAmGP8oRHcHtrbE3rW",
  "key29": "4uFE9keqTMnnMqSA386tpQ2DW3zMC3NWZafLcKe1sR4wh4DWD2Qv8mQkzZBBsTFyhx2hDiTmyYPEFPCBUsGNRQ7r",
  "key30": "5eTVhpHRay1MBPrrji6WcJNr88RoT35ybc37px5Y9wbefBHTmUfa7hFha5d7wwJ9jKW8zmYvpTjzQckiHo46rLcu",
  "key31": "3tLS79ovDhtm7og3iRxNAaJ9N3iPYG3N9aXB3PLbYeCqQ5h6GPQD3vhVyDVUgqtbeoZrBNzpzYGNGe8bXdjuJG9R",
  "key32": "3RmCenhR4a5nB6F6N3Logzeki7Peby1HaRhSTPCp5miaLs1wW5LEm9sjZ419zefedXwgU3iJycqH4cLxLJMHJaNU",
  "key33": "AcQsTd2YcUYDaegUmALskY7ABPrizCYwr31duzF2Mriik16cLFg2CpBdCYaSWWPMqJ8uBBassaCqkjkD13purhW",
  "key34": "45vRBfZd49fAC1zkb4iEV2NusSPdohuSzCaWFo7ALwUe1ELZdKNJGuaRiUkod2QTKMsmadrKDiNZp75beZGCz44u",
  "key35": "5K9hMgXeU1DinACj6udWzUg8AEH8txSGHEExBoGodEj7CiJ18K2Kes2qJgdjstDzrWv8Sdof1HpuoUuKf6bmyQe1",
  "key36": "3KJ7PE8EG9FdoJjvhrUHT8gNVhc61U9zrxwbpduBx2MNe44Xuj7YWDZjTpd41BLhAL6kWH5dkUxQXyKgHLtua6TP",
  "key37": "3oM2wjAgLCGzpp3WFXCTWUKPMa5Sc5Wuv1pRB6BE3JV7hz7srYHDErEmeeJA5j7vvTrHc4ijuTyFnDQY7xxuLnE9",
  "key38": "3xduddUb6yUawn7o5cBiSySiygtjCVPofv25xAq5UaXeyXqe6r5HgNEEfhSRXk4GGhirUDQF6dzqGdepgFLGEuVA",
  "key39": "53LjtVnERCqXyBbFMfneU5qdWCvSAF4m1TDyQxXYpQtAbzfVtE8eu6JaiaoYwWqkGhSvHKmiGtpgrZ7i1qqK66Er",
  "key40": "2TFixdtRdyhGB9nMvkedzWXJzbNQEsvwvHaGsMuLL774AQYAZWaEjknUBhsbHyQjxDUVrMY8NVzwwfRrMZCBGR3R",
  "key41": "KrDJzLYGKUDKnZMDqKsZYdasuM4pk2txBDiBqX5R7ZTpYtAPztRmomEBcEkPKM5defhRua1MWGq56bsv5P7LiW5",
  "key42": "LoJsKWLymJXjr3Qs9YtUo1isudeWL1x8qub4YqUbUZk83hxoPVLp8AhA93Ks7jvBXW4uAhPB2C2HN97GuFtUNjr",
  "key43": "5Z7d6WKC7uAjUsdmSBta8XXKqfeX9uQn1TnXaGFVW5BWchkd9kFggjByKQtN6mR656JpsTsNmi2wp6THLn2WcD7g",
  "key44": "3JcywL2Eg3j5UnPFrqQWEQjLRgiG7fhPkue9kqCmuSx7wJSe8La1om1RkWJJcLZFSKoAeZjkKmiD6ob3QADbSwdF",
  "key45": "2r3Q7jNxnMf7ypPXRTSjGhVvQH5Yz5Ech2L9oqV8ytLjprhVEWQfZrUpXS9RFaaEvAfNbuJecNFtBB3oatH9QMbs",
  "key46": "3X5uLdLFtRLYFpm2XaDbbFqa9bsd47FddrWgTXMHFYAbP44TM3PoY5Dr5cAcXT18F6xStjn3SHh3sp6iMJgdQb1K",
  "key47": "45ocTEP11aE5GXVbbMBzrm7JwFbXZW5wyRCXKehtWqYXShS1r1VEeVt5ZLDA8row1MXLZxSSiLVaosiWYdwLdMrt",
  "key48": "64AduQakv852UBoJNSppQxf2W6iDH9vtNwi4H4sm6ALzLWAZ9YFMTL8CHXJoUjAU88oybEbiEsdrx8pfHNHCCers",
  "key49": "69wMkb2gVGqZSfVNJBRdseoiRFnHLTJquDbSLKpGqkdpM8Wz1JQeGfv6rZJfRZ4PjAG2Kgqmz221fEeffmJiYug"
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
