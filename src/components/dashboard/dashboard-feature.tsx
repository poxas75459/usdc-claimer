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
    "2b8i4ZdePrZB6TcUd3bqKnK1BVMQsbzBBLMWHRjTnb1ykfSuFFA2M8cRpdMDujUocz5zmKTYYgt627QSR5oAkcsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Hr7XEScmsHDMBQ1AwxZGrR3VdJwGFicyD8STbSVbPNzSrw75S2cPLPS16eSf1fLoYCtFqeSwhNHmgbj8WMY9j",
  "key1": "5qX8o6cgFQ3v5Cb4TmqJry1mhUPFkFqvxtkFoiinJPXmcMrA3CMQDge5VX4R8GumXm5cJ1Yhz85uuz9yph1SwEs8",
  "key2": "2m3W2MJYeQFVP4LEh5FmTYH3xQ7HihncKmke3Tg2Azu8khL9r1F8uM61Bb3hwxvr6doQvPt5yk2SiDF7Pc4L2z7Z",
  "key3": "46m5jPZmUSSNiZgjGc57k9CLRRvvXBKhTbbvugVG6LyD8CpHSqyfuUGQY9yPyKJvq3SH1AqjFbEyW82SiTFmCupN",
  "key4": "2hzkUTZZUp2qgb2t8X4AVEruqZNjFWq6CsVxjFFpRPmqJhgjfoUqSmSHSmZbocr5D3kXd2cmt9oXsU2BWa86CgSu",
  "key5": "5inzoG935k3nGsRcYQxrh8aGRyvMpRdPNHKZixTPjwczYswn3Kp7mfqCYJrL4vsYyxzFHwFiJrx4jfbKLiF3XSeh",
  "key6": "489Up4d1zBHUVxUFMxHMVDUVeGWhow6wjnmc4itYrAnEDNrU4o97Xy4FP2fdvD59UyedrxznacjbwR8kSGpXgtfq",
  "key7": "3G7Wu7WcHvpLjfp9eefeY2Z6eekHoxRXR1635Huefac1gEN8qhAc8kZXpTrik6YYDSEbb14gPbeAvcuFpxccvEjK",
  "key8": "4wKZyqy393UAW6Rjr3wRRnw5hw73HmMMyuuuAhXEzWzkHSk5Jq6R5ZQiCiBtyvsgDLiSjtnXadYdhjAzTHCa3aE1",
  "key9": "4own81NmA8FGuawPe24NMxiPFVDfFbvBwyQyyBNoXgtbYZRcnKLXoqvJnxrmTD89w4Q1PktFNWT7CgXWUZAyBRDQ",
  "key10": "4t8Dnk6XLnEiRzYxR5eQQa635ZWa8xMgjMumqVHoCpoLDDD5Sh6byHpRf5vajFepvDgaurH4yeBjtFfUo1yC9oRP",
  "key11": "32zo1mCD2KMXZP1xFFJNSxvJe3SJTk973Z3tzMs3ZVMW4HEwRhwmASLLaaBxgzoncCUQUgApW4ZRrT5FrghsbKc4",
  "key12": "22o5pqsb5BbAXEFzhPiapoN8Fyfz7ivkK6vQ4u7LdYkVMY73yHhpBHuxbbFmgH3hpvJerNZYcgeHQ7yfgR8SV5Am",
  "key13": "4XRTF7SH6CdP1RZ93ndMgUaQeZvf1Q5fzmTkQcL87nw9FRyiVnrAX7Rib6YYS3EF76bK3xAa116tFYZG8sLQEjeu",
  "key14": "1LkQmh5WEzgtEhEU5RUmYGQ6mQphtKsSpdhrJWuTGQ72M6GJefk8BoG4P1sKMz146d2BDqVykrTrn1Z6GQhvUkP",
  "key15": "Uw4YVN2m2KZETYKPRCHyWKBSJ7E61jMTkEKARmP9ASo1YBQf8kT8zLRNTG2SqDQ2SPgmjwMCyLsm3aHvQwdLizL",
  "key16": "49XxL4cxnbgjQDFwom5m3r9Ya9L5tD1e4eZdrz6VFFVh3d2LejbddyRANgJnFQy4EYrmrGgSYYD4aAsC9uawwcZT",
  "key17": "52uVFkMefLMqgbphzsBscJcPPryVPncC317eoq5C325Nn2xJCgaYuwNB483dBNWgJ6RwZRchX1XQBNk2MfoVYzPf",
  "key18": "2PUtPxnCWuGBaDitAYwSEg3X9tAMtB5Vq7RKUGY8pekN8U4xpgPeZNxSapNp18CHypTXF8uEXWkALGNeMTXm9zd8",
  "key19": "2GuNSBa9JaxUTTeg39MmksV2aoKmTmc42cc3QNRq7LGAZKxC38fwNN9BRW9vqfCanPfHujJd6hxUtMwFH6MzvVHo",
  "key20": "SH3ATJfrfffNyoLoUMsquWEBdS3g9V48aXjPLRxmoSDpAdQA1Tw3AjVer24i6E9ccF5EWUawu3cP5uqrQNBqk7y",
  "key21": "53Bqxn26XsDPvnfrCktLeQKGoiXSabhEiNUwGmBfsEpvTF3GRMPubXQtkErLb1wWXxEDbyarHc4hrbpBL7ttAtD8",
  "key22": "4QkU9VxJSTWKGuBgaKQBmoPXaBsXxXRg8eHsjbRjjgqUVnhtaT9GEjbP69funUth1WRZrdRyVGNBgUBBrHMzpvEp",
  "key23": "3aG7TmkHfh1FUYS2uZEtubb6xqY1jfL33tkKv15vUVGo4TymfFYtaZu1S7DZ9cfmdJDdqopTvuBBYNGzCwnjGYUZ",
  "key24": "2nvCcNGZC6E7VdEHsy7DYwVALn5VGWYDQvGKgGqqF7Jhpr8sJgpejNa1h2cbVesEYuxY8xVivxLDhZ2thJ6d8Fq9",
  "key25": "TkmJBZHhEKLFyD8KVcSCFkzU2FL4zWcTho6TzpwEdEm8gHMM5Mvec3fHjowegnTtw7upRhDBszgTw1DWRaechCY"
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
