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
    "59VKnxeJGLiJHR6vfSvvAQKE2PQT7HTAPVjshBW79fD2K6kaQjnwAfxxuoTsBMvGFbEdozV5pGttb9HjxqMRJXVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ibPV599N8iwqkNUnm5NyDpxTZhtQpjkjRNwFeqfsbr7Ti3YzioMJevsKjCjFo3wyzWKXFNzJa6cAZ6PSB7v95x",
  "key1": "8zW3bTdxrEbDMmpCpqsc5yPu54a66so4VFNVqMjkRWLkaKvGrVRdm3A2kicqmqGSLWin5gHoDaMZbMmE3Z9fR2U",
  "key2": "5wquGWnf5wPp9pE7ndX1RaXmnH29aYjnT6ECxdPzYEEerWNNQDdm7vEjtxnbyBapq2w1gxcr5J8YUexJjid55JbS",
  "key3": "H7LoYJGzmih2uFgypc7iCziejBTqCthWk9akAv4hLRwPCmpy3xyJoPBJG7mnCMREp9BnhcKTT3LL8nfZaimQYdY",
  "key4": "2N6beU7Vh56pLQdqHahkybqFMYN6zrhEBY8dLkwWMZ24UVSZEPeMbGcyVFjzETLmamyNrCjcsKbzXf5yTbd9mi1e",
  "key5": "414gGNjdrv5qpkf3118gSSLrY2NfzaagmMj2MNRaj6gRhU27tHUse5i4fQFR8dDP7tCyGayejBtoy4FAuaMn86nL",
  "key6": "wfjRDUxE1vQnKRUZ72Aqn4v1hNfcZ3e5x7pnWnDxpAnZwr9zWYLXNMhuasDpux2M899FLsH6R7kTpLGw1y3DH35",
  "key7": "5wZqAXDfPTWQgLEbgcCYeMJHtxroDYEpUufs5YMjXGZqAm32ihH7PTCVjj81Sdz334Ts8CL23C63Qv52dnxYyXhK",
  "key8": "2HxSrnyqjWz38uDentuRRYf35xrAA6dj9KLBD3ki9qG6Z6hB1YTB97veMmTCUQzWc1abSLMUyLhjLYLceGzwsxxR",
  "key9": "4mJUWVkoGTZmRjEe4AUxKbPJffxugdFkp37p2VWVLViW5zeqRbfXwSfBH7Rxjco7CKWi9SxuGCFiuDxz8KsLNBDR",
  "key10": "37zPcgmaL9nkRza8uRpG2dMkmpYgknoaApPsApuBh72Xhw15fQXbu3CGDXaLWzqokcwzXxyt31amaMebcpRknMxQ",
  "key11": "599KvzvS71cEYthtNwnA7Mh7Ygg6o3Zu728tXnKz2kNLbiBDvj4kRn7yrFbnhtfmvkUVHd65X67j5rXz8Ki3GW8K",
  "key12": "462aKQaU3ybUmSmt1Be3bNcTZ6J85L9Rr9tzm96RTfZGexkqhfL3mfimLmcaxCuPXrXBZoZfxSyUr61oio2A4ZLU",
  "key13": "6g8v9LR2HDmW5sUsts6QpDEgfY9Af2R7J5QeedqpEagxWmeDjRYG2u7gzPDzAetJPQnj4VGxsfjGhN4tarrFoHN",
  "key14": "4eSfd4NaQWvumyoYSph7wByTfHsq6AonxHX7BJSAu2NVpd2p7DGRg6ojoEQfytsCikfV6CDyLKe6GPdzDAhpHBgh",
  "key15": "96NfnCUJvEk98VjdazFeqLgJTb7m1QvkhcjP7msffNYsEY57huW79C8889gNLNunVt7ZPJ1vT8yZ9A8EyFe8Vw8",
  "key16": "65AqHVaxdzgFJHwbgUuWvmUFyMTtvkzwQXmZATRWUB6EMU9LdPGhTTbXrNKPj22sqhPa9o46gMkdcBGbk9ieBqPZ",
  "key17": "5LQ8A3rdxpTZghSmeSUEnE6UgVRNvzYrdwoeLVPeRAVt7ppyR7A9HW2oNYiWJWMyt397SxHLPzZsXe84JnQyGLbn",
  "key18": "32SqtpaWFMZvyN8mLFsfYtfxAJsysNbNrAwrsqo8ZCKMP9NSKf9fSQwBKttf52ULwQyt7eCah2ELzA8S41ujdG6y",
  "key19": "3CBuF9qSsURDqgnGNtTqwfxTRfLuB7e62F2vSVHX89PAumMBjn5NABY6BycjXM6CaGGUceCB4i2hEA3rhgN3Cr8V",
  "key20": "2cTKWZ2MAgQkLtn7MCyXAH4muETCkimWuwWbDkx66odRdWpZXdHVnx3De8UYzzDtJN2nPaBSv7ZaifWoTH7c7XUE",
  "key21": "KqxkfQ7cGcBfo2X8DGhr9xzHXSk9BBMow6XcQHaxE5hiYmK8cU4AGANZMHA9b3XfxnzMRBn1rxL4Hn4uCCZETSs",
  "key22": "2xU4y4Mgbj5yjKMk5pXcUbnvBsG2P2CGWUH9Z6De4mkrohUwNSoBoKVYCyT1vJhm6W5AHeuyezZQHSV44vnVgCM9",
  "key23": "3xvqgTNmaXjsWMsuuiDy3tn4PydGh4ifd7gVbFge8q46ouRnGsePWE9u9msbdoKBmZgAfVwmb2K9uMLc4DGRSpVU",
  "key24": "2or18EWvSan1hGTnTBBrA89v1G8NCvmoiD9Yg9Fg2KCxGgpT2vDwh7fiARh9Ug2fRnuvfAmTkizVe84SCadGnyyB",
  "key25": "23DZicdwhhNpPaJF1RMCkoNBafNDxyanvtj2tQz8NxoF8BQTz5S8vrsajXEPw9a5YCjPqtvxJrTW8LNn1kdSZ1GW",
  "key26": "3T5ugDc2YJSxQqCTr9cYY97r3EwmRxtUJfb3nU5Xj9BM3jPo2177KKYruG2EbrooboWr1PZVhnHKj3upjR9r23aS"
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
