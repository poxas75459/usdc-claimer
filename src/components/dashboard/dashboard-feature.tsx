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
    "5A3aEWeTgV6XGZTU9nahd7buJtUn1WVEHYD6CAF2zbUwf9ECVhHxXGTpSger3hipbtMcU27JP412U7GpGjAcR92b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XwnKB7ipqHxwb7U6ef9u5xRcqRiXZQcqq1AGoKakJCjdtv4vinqb9NmFQcp1bYDxFKoEB8QRSKZE7prdJqX8Aid",
  "key1": "5xGHEMQCrgxDwkmsAsfBopcpg3ooi4FYUBXnnCPg73xqVJyCo9QBDRS3EnTdVLigyaQEeN4GsosEj4fDmXH4trMo",
  "key2": "3BSWZS9qaroquSzdJh3SuBZ2pq9KTqDrbSTQQDvhKj5erqWiN2RtawjQffaYxSNKHiS51sTq3hZQfyz6mkfoGpnM",
  "key3": "27j1h7SSQwnAdFJgwJrTRtDT1vF7aFi2HiQBQYGTEvyzbzepW7UQZy2fym7Qr7WQ9RT4X3FveEjDLwS7BQBdQbR3",
  "key4": "5sH1wpFakATtyyJ3SMbgDjx7hkse6MQDuasMyNftAw8tBLJBwGx66iiyHS1hbZzabRovqvfe6fPgnhz7irw5SAzc",
  "key5": "FqXk6E1hLY8ir9dKZzrXRPBUJbv3jfte6DiF7hghJZcvkG6td4ZtbyCrqbE74GiBoa4QYwGwJ3xKaFU4ZLx9JVP",
  "key6": "BovkCRMNixtcnmuEZBTSrLAAryPhPSUk1y79MzJ6kguu72HNJF6eZaFtDhhfLdfNx8wNXxU3gdfbDjCso7L3uTQ",
  "key7": "5aVE167e945fhAinx11g6rsGTRjG3Ky3SDyxqZoukVVabcRJeiBRSPzgE9Luk9SntMmdpMuBAav249uPZmiUfFao",
  "key8": "42Jd5Ekvub23JVXW4v77xGVz83hdMjaPvuMdVpJxbspnbYU2t2L4wHTgpxfYNydqRvY1pMrqxN9n1trnbmpvqN25",
  "key9": "QUGx3gtkisSdNro5r9mkSB7XdXTWRSM7NZz1QTrH4k9A6TWXhr9jt8PNbW3fgfMU8omB8UV3e46eG3Qy5b45Coq",
  "key10": "q5Mmb8ykfrvD1MYJ4UQyL29jy1VZcPTWL1NueMwrT8dtvVVae3n5G7TEowiQnmitQWJt6CFc43x1UWojAaoD7KA",
  "key11": "9S2HYvfUconcDTfjwUMjxqYvqUK1Fk3HH4vmTWTjDJwNi3z7ciLqUbRTEEsrAYx5NG3146cHpYUC3xLtKcyrhci",
  "key12": "3kP4EnD64Tr69tAJ13G3ZvPgV5xZQooQJpEa8ggsuTszFnUE8dELrVSctRMAUFzH9K4wSprihfZzxB7td8zSMjHh",
  "key13": "7wLTXTdzYHjFY3rHftftQ24nqvdWt5A6JhSppNPvd5kMcMBj6kDspD7grqKAKB5wDxeXjPHd1ife8CrtX4haKkm",
  "key14": "2MuCxq5KWfUb8NoKU8U1VouVL26GsJPDzvWXUBASSbNDe7jU3q3MAUZvTUh2RNaSBtN1EgfgTuF3zBhJEcpMkXXr",
  "key15": "4edWTKTQ6rhMiH7xTpGY3Aj6ymwnnmvj4YTCsuvZ7HTM3csNN8XVUoMFb3Jmqvk4WqgJA7BYHNFdKTVJBbqaC4f6",
  "key16": "2JTMo7yzaAxTz6zPqBeThWeDVgrbJZxm8MUn3vWo9neMwn2BcdFBJS6r1oHdfWrJBA1kdM3hBMqHQR5aWaNpicWV",
  "key17": "2rDNjsV5Vf3nZqEEDoEHSWrVMNrRbVPA3Yid3Fgbnyy3zcWZLqdvUBfg13NtfM7KTTMrY9eMWTx5F68kg7VMmcAp",
  "key18": "2PBosqZ6Tu5BQxErb1LrSWexuyhCxrTv1jP4uRMTfbNXMFJqKg65Kk3iy7v1tFHp3K2VZoxKf5dxWgoKjdajL6X3",
  "key19": "6YSRyGBY3pz3zaUYVrD6NLE48TeoukMzFMBkZ1MqVDv7euSYwEFmxJvL68XPMudTVC2jdmtxdTLNYGTasZvGHNj",
  "key20": "5gdfvYfscVmdr6b2rLiuDvy8tpiSgT5DvoQMBF7ju4v2BJYcqgqFiarEtVBQEpswDX7esvNBnHdeYrNdeYhFMi2A",
  "key21": "5KgpfeeqGivmgvvwyczCmcbMR5ZPeuqj5rwid7CqS5tCvgEwFYxmsoQkPXLGLpAzqXC4FNbHy4taTBSENSUvuBQL",
  "key22": "23iNt5CJmwVDgL7W1JBGWh5qNTRWWzviVPT1MJjXyyqAQA8YAxo7D2gxe9Hhx5g4gfGKvZ1WDb2FT9G5cNtrL4df",
  "key23": "5rJFJF6cr9bjhj3Mm4VTNUtKHtJnNGngwgBofPdGzD88BxJtmqMdUELvpjtmpUmYZuovU18rSiV6bYVxaJcs4tto",
  "key24": "5LGfgGZQawDxX7Sx87EAbYXe6cm6FTHYJYExwkqjPHoqW6TWb38TRvP34fo4KGQ6Ld48gsefs72xXAfApo3yjxuK",
  "key25": "3GpVUsXkie4A3oJugvbJxsPHXTqegfkuKZsLdTnbbn5N8Rahi16SjCP4Wkz32GQR5EH4F1bWYK8KoN6DmbNf35rQ",
  "key26": "Kc3tCzW5kSvJ9zt6PKWE52YkwfJUzEHNvBCg2WzxW2qVasruyF8xSnMSfVRjxQs66QW5xJFxz3KucZtpvv5pNtP",
  "key27": "4STbca9DCYRhsToZn9fM6UpsU8yzTZEhjPHD3FkWj2RfMR68FGjAm6vtLLGNHwWtQ9Czq3PzTC5LxGZBnpaiENY",
  "key28": "2KgV61f1cUuQs9d7zFH2eTCD5Gtjobd4gGb46z3wcSFuRB9nyX9NjR2QajhcJeXCJfUGdKhKM2DsVsVEeawRW2mY",
  "key29": "2EBVVZ3NDV8gnqDBQ8jE7pMQtzAcpcb2KNF6T5XMvXTSWMgtxqr1tqukQSwsUEvmM4riLoZTTfeqqYKrmjbKd9F1"
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
