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
    "4i3hvPtPFVaF1WJd31rz6V12HVJvZ6JEfNCKDA6en3Xj2TdPR3oZqTmqLj1gTyZVxSJG5NWHAGpLKmM3Y9nVUHJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MCZ6NcGn9pGPKsTbM6pqtg1XGfA4a5HXWzc65y2YCDZarWJ8aLShp8njMrVUv6KjJrfgaBkqUtduhtSbZjg4yC",
  "key1": "2ztduHo83qXBbCUoKjcgWAf5sxmxCAHjUaM3oLRTTG72czo296WA6ta7w9RvLRqxKMbu1TZwJPjqhxM47q5kPSMw",
  "key2": "5R4iFh9eKwh76LDQv4j24yzpT6LNv1ZHBMSSFuvtAA8vz82V4uow6hJRzaaHKhk9tF99p43GbydkRdDJLyG1eSGx",
  "key3": "62ErDF5hvqpCY1Z6A7FcccEMeTfTVBryKFUKyQq8WWgqZSMSs4aFEjcoMgDCuw41RwmiGqsvbgt7NGghHAKan4YC",
  "key4": "2DYWqr8TyXbZprGSZBNUco6vyYc4PvJfcmZJSZfvCUKfRhjWSVtCQZB3BkVLoWroZ9MXWNQ7fGYzNwWy4jqkwtQr",
  "key5": "4uxtGTb7GXeQgko3BtXzfWDSxs3B1j3w9Donoab57WmNTn8opTTkEqyKnBJdBX6AojkduM5v3usodfxLyYGNuLyF",
  "key6": "3kGsMecRjTBKoLjLqV1JKNuJ37H6cgxVX3KaUJg8dV4i8nVpJ1aArXa7ecWyEnMnaUmkF4h5TroVnZk9ornWhFqz",
  "key7": "4KWVAPWgJ2ArVe6zFreV9KnCzGe1LTTn5J4n9U2HrrghTR6S1Am3qVxX3VYtzFZrSYz5Qy5Z3D4Ygk2orXgVv5nU",
  "key8": "4JD7QQz3FojDTKSKbbY1DUa313S4P45T3sNMeso7dSNKzEpjhZ1aCuwLiFg73hcGteKfG6yUSxwdnxyfHrcpc3Gi",
  "key9": "2vCs7KKabhhBuFqbYAXHwPM5GaaRbnSxdG6w7U8vmUJjCN8pcVm1zyBPCL1SnMGkNqJM7tbYs2Asx7e496fVLX6L",
  "key10": "5ihFkjdPfvB86gcKqMm751ykY3D8VBfVbCQ2Dm2QqUByXMT2iouPZJdqTWMLDZNMDPu9dj6v4x88t2xyTBfY9p93",
  "key11": "411SygMLyfaebVLetzHi7JHzKkDzNFxFwcspeMSUTqZCYGB5utUQcnVaMJ2n6sDNPaXZTdKSUm1PDm4oKhSZth1v",
  "key12": "3YPcr1y9XQD1inkiCs8ra1sAXWBr46ScUGn8s3De4ANTovKLkeFUFzg8Ew6Ei88qkbTRiLW16PUzyYZa6MEiy43i",
  "key13": "Puwajxa5zDFucrEqyrZnGzuGWfjJmUvYexyeDZcQU84MVenfjunaPDHwKmNhiPBdnDinTZ3JgrKjY4TdsogxZNh",
  "key14": "4udZ4oErpoRNZ7Y3QLpK66ZjUZ96S2J3rhS5LLoWCE6dmtQQ85zmt6nAcoBDJ5he89kFUm7erPn8s2tDTbACzKcd",
  "key15": "3Y5yxGjqKYW92Yx3223tmh2j5vQp9rJUx3t2b8wmiYCqNtSmi7EwDHPjFDKLgDqjDBKuyJFz4W3ZWLf2p3v2fVJx",
  "key16": "2QEi7ASkpnL1iCAnMqGNtPuePPzW5u5VWvwEhtsDpK5jQXSAjhVbUsGfrtp4Rc6u8Qphy3LZA23jEyrUjh3Dv7qn",
  "key17": "2sqkXxwVMrx91GTyEQazXT5DMPTHWsf3xuhuiTdSEiphTyKfkgU5kLqDn6PkKP8bEJ3hN9kXKSe9Hmna6YyCvhqT",
  "key18": "3BeHPeb6wjXLhL59s6U8SXxTdJCwxh2MjsexWUiKg9wzDRmwtkV5Jn2zpV9QRtVKfXXeRKfWM421r53kenXhh8yy",
  "key19": "65BSASZ1brYq6ScN7WwPU492YacKtM9ETVeL19pkrRddzMRqFXNeQvZvhfqhAdY44qn3mPBgRCsjExd9vc1wJFVa",
  "key20": "K1wccmtPPnRi9vhgZdKJvLtdrHGL3s5JASLknFUM7sRhiQPDXa2U3PeWS4QTHfRdrHDBmYHTTsPNCRBk6cvJr2Z",
  "key21": "49FhvDuPU9gqGTMRsQwx673Q4Qxidnkxfn8W32kQMXVq3opaBat5jduoXcP2fQ77iXKWi5BRFYVsgwvvNBKEtKpg",
  "key22": "4n4RmVPCZFLSt8cMLX5dSH6D3bJoehbqWv8wt7VXggfYQND4rVwURQeyAdbwpdVYBdwscnR1h1zXnGhQdW3G548Z",
  "key23": "4QJGoBphkb48nveX2hdbnazb6PiYdc4E1SK9fMyygd4S4AWZjepsA2oM4JvvCEDqZtVn9mrnMExjDdKP5aPDDnAy",
  "key24": "2NGPrkqSuPrCMo75sbjWFXan72aotPsNDjKiDJHfmh4bEyMz3zWC6c9268SAssaMwaZ8dwg4Mxe8smWGi74eSuwJ",
  "key25": "MQYhMYyFN9R5ziDguCmQV9dUeNKQnjLkhSR64ve6aQ4LNFPD5juXKYWE7WxBybESPyeAc5VkcZYWFF3vPcBGA7p",
  "key26": "2zUN31wx3nTXKo1B9dwP6SFaFVFuBm5jkN85BPPHnKAgqDwLAm44FaKMhzEaeaqobWXFgfw3FVWpVxAyXJgUBtQN",
  "key27": "5yVRNdTZvoR1RcvBjsQGSa5xaSpTgxJ7HpFUgkNHGdwQfqTQWgNq7gJtbeBvR4wK6HoT7Tp2g5pjUbZ497pxb8GG",
  "key28": "tLY9ijiwDFWhoB2eWZ2nP91s9jHC2xJNBDzW2Y76ohvXdQZJ5s5Vr91H4g9foaeFAUQjo2tvQ18gW7RjrZ1R8oA",
  "key29": "4HqQGgQRBHfgRdbqKiJY3ZiLA4WmKayo1YMJ6DEr8uAfPWjvopYmPS2WTPTc3CJNdRMcjJ8vcKgK7ERZsBK2B2Uu",
  "key30": "62Nmz9edFiSYEYKQJpiznSA5WzPFUdpdwGcKG2jQATy79tEfagoN2LXT6i61FgWtBX1ntbJUr4Zjyde6rEPSUerZ",
  "key31": "RjMLTY3S4o8aBc8X7WrakN8r6crfH7iRfPUG8pSzqBrKNY4W5w6Yp9opdvBEKoBKj3sCrDjxa7HpfFFEMM3rhQr",
  "key32": "4XtAWfCEicYtFimRXbpctuJNvjeoaDVfTw6PngPx72difkszUb87Hcy73HNTrbATT4BdhBUTUdGSKvcD4w15eTRJ"
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
