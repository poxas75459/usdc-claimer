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
    "2uowMY4Sxi9GfuGUBwuB6tE16E9Nu3ejm1rJmapPHpezTXyV1D1ibqaqXvTzHReL2w8tzMV6SajUVorKgR9WjtAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpTqKEjM4q5SXV4Xd2eJEgUo55bsiH88oW6cr8PT6mKPAzP6XptP2RdKjeyLMNTUYHC71TYZ91kQDpYHpwRD45C",
  "key1": "2TPWQhE6EEYvzqkBmeaD9eGpQQVvRGMjSoZZ5sMnJWtTq81vSnVogWTn9GG6AEZFQUE1yhRYj2Ho4eogD21tCqzg",
  "key2": "3Cj3ShWpNAz8pqgyg3RGBNRx9tJsCL5yy83Nu2tCAAJnJJBP9aebkDHqTshzUvX9sTZZwbpvZJVZvzAi9LGfxWx8",
  "key3": "2JALQxrdXynVGtpzQzTt4dtHQGVj94d6oh23q39Fv35xSZQ6vjt5wGdizxxx7iXCv76pAxfkavMxY7yXfmS4qTe2",
  "key4": "HaQNuzhcDcV6bdyjxJHjfEfUzcSiDQkwhAdVXU499JC9yo622Q6aZ7DxCq8Cizt9PgTdtL5HAaUoNkok2g2kfVE",
  "key5": "4XxdketCUbUN1eQyN9EWyj58C8eg8g9RWkBn6EUG2mbyKK8xZjpAcCC9qnF7fZSphDhraAzUNJCJUJoai8zoJRDZ",
  "key6": "4BzgqAx5U2eWyciVqp8EnvRmnVjQhqc7EwtoeL5jDvMJJ9myU5HYpVpSWHBAwDcJo753rroViRzHTw6mL1xT5vg9",
  "key7": "uKnKvauBAtK8UZpgJkZDXTM7v1zUAiGNhimt3L2Rq2EegV5ZQPk9X4buGvp2nw21zWMKg4VprMK1At1ZudTHD7C",
  "key8": "5aFdzird7k62si93PkBVwJDuJQKRFKmuZJN3zAi2WXvSepj8y6MnudnbUd4iRhPp7F72TYSLaSPA6TL7WRzMpie2",
  "key9": "4gMacDYfHKrkzsfLdejEjgzeLp2j43ydjDRFngcFnTsBHkvtcoZp1Vs7K5mmEACzU8oakJXMkYWedcMuHJ3XpKbH",
  "key10": "3LxZ1Gx2vnB7A3kEB2eKeGDcb91GjTE66DsuYcdkKpyGekS4dtvq5hTYFTxgsfri55tENXXbXmhGXSvu1TQ1VjPQ",
  "key11": "awjFecAazWwZmexaj2Foxi6Wpq5nEMLTpd2ztcziyfJkMx6ek9wQqdyMa6d4AUy5rPoj1sZsM2qGZjFZmj6fBhv",
  "key12": "42YPK3YpzRQwSqPQwhPy1bfgUqzwjdXVQx5q2YAgB4HjdxSkRGUEJT8ULoKRE7NPSMCyNJTBC9dfscvX9XCbnaZt",
  "key13": "HehF57Mufq8rC3p94xEh4m3BzZmKwpa3GvS51rKWWiXoaEfWKp4yqWGxER7kghsba2ocDLdZyDCDGySR1c6awzA",
  "key14": "2BT2cfEZJ5Q7D4vPBtEDajS2anLkLa9qiQikWqhJ76MPfGiFtqPXpwvUcfUue4UP6Sj2wa9vNdB7Yx6EKAth8Ymo",
  "key15": "579xmD3s1sDBnwqMLHHAyQLWc6xoe6hbUYXXfrKxbxSvWaBceXCwgY2wi78MiBG8QKwksw92oEZn3ouy5RkFqm3A",
  "key16": "44ed2ui8xWNj1oYTukPiQ3DVB7U6niNzqggNnpgNNWJRQJPCQLKDiQigJJaVp58Wbjjf64hHgZVytpSmtS49geRf",
  "key17": "czTMgceh4REoS6UtaDxGymVJYQ2ZqJTeCrCRqPQBsp9m1wGSnabwsGf7i98yLHFQtUj9cstwKRFgx99vJu1sNmo",
  "key18": "ZBjZACkwrv2sndRyti3vRYnQCprXDg767JJyts7eZ2WBXFHahBPJx6de4k4Q5CKf5dpVtZQJtuwd79674GFPvnn",
  "key19": "3sQnz8op7Lj73gJQQyw5JMjP2gm8XAfYYaQwYVA4JGBsRi7oXDiYzW5AwiNHmZvoufxor2MPpE5ANUrF874YtvVS",
  "key20": "4UnYjq8S3zKzuMnPD4BZFWuSQc6JHqBFUzWZhDeFP44VjdZjzqPomxj8Km7ybtjsViX1FBM26VomkpfuSTmxxn8C",
  "key21": "56atxYxtqmY3JuHTLmEgji8icMTrugkexzSZQEw5HCTTfogyv7TbTkNdxRSPtRvaTnYGChXNF6BDtMSqDVZyzJkq",
  "key22": "2Ze3XGZj1ZmjPhSQskpq5CHvYxJyW5Ttr29PdFcWL3PhFLwsZrZHag3kHYHNGWnt5Nq6LcnmccjWJB9Eq1RbUQdK",
  "key23": "2WhHQsAn8DBGoPqjePh2f3n3up5w8MNFwFX24qx9XF83E9iRrwozTvG9CZdqMF3N3S9oHrE2RpvDMkxDaPfatQ3t",
  "key24": "2kSCibTiHcGegZY11hPQkwcJ7QEHVUkkzftRZQr3n2btybTABZTXJf1rnxDQUaBNuMgrJTQ5d9T2FNbVoiZzhKQg",
  "key25": "4Tic2ikDd9XSXJbY94VFuHVsuXsbEnWuAt1YnTfUssD4FybJFaxeHGFzvWeyKjUwYpVZFutEQraYNWMTAXZedczo",
  "key26": "4YvMmZ2YcarhwUwL9m9NfEa4EPmUt7cWnoGSyyKzDYLcrC5UH11FoyYPAKMPCZPWrN3BpiAMzN6eJdQDPnWzL4zr",
  "key27": "2WJK62UdUUyBXE4YDwtP5tPgvsuwnpAek2yx4XuTKRt8jGECdcemM74zjLpDhWrdkJZAj4GZnw7rQutCFfYBpjyx",
  "key28": "5AecL92B2LCcJYKKe4X7vn5FiSQF466cd1C8AQJzGjqb5DHXjyBumM2SAfEHDR7pk49fQ7AEq3dzZvTzjRvfcz9",
  "key29": "3a4GpHNAWhcPm5ipVFaqC4HgxXy6HZchvQwCoQMVaPinDCRo3gu9fnjAXBwirTMNPhvcHHZbBnAcgUPbk3tNF1J5",
  "key30": "56NufVDWubs4pQFFpfDVRZCFqCVzX7eDiNeeuKKj9BPVdZWs1so2RafTxjJrjRvbYejRTBYZwN3Vsm7FgMgaExYH",
  "key31": "2D3nreL3RhEi81HGTEx6xCBCo1RcFty2cPL7HGtJSPBWJ6JXN7BNdwBCZdtPxjMED3vwytYUMnwTYnvxPwGWzGQU",
  "key32": "5ZeGCwDL55WYMNhGj6pB5KtYYwBG8Kbr9FvHk3uvC5TLwWq1EZZ6oZbSt7HRdwKTX4VuKxYFdDFe2EYj3B5pXC5C",
  "key33": "2usFzX5HXn4Pdjm5TZGxCc1o1JJz3jjePeduMWMdRVEpnANgdiDxvo4WvNnBZZbPeJbU1jx7iiw6JoVRNjrX5cXV",
  "key34": "3QTB4GLTjkxF2znKu6oShFf9LRTkht7e3JisXZ9P7BNwMshMaLUg3Kq8fJALTFNo7pBHeqiRUGFP4po26mCqBuYo"
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
