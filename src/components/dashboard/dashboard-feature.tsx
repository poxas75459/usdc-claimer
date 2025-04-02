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
    "42fg9c6cPMN5Ha1jEtuU1gecHaMSEQUwZmvDy89yZypdwatG5YLxAHFDSaqD4JDGbqNn9ErHv8JCLPe9dDy7AjyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUF6ugWtDnPWgcqhTvpL98hR2xR7rPaxzdi92STNarVCYLh1tscDvQUFWPvLWgxD9KWY9Epcw3Gk6DheCcL57UE",
  "key1": "u2RxvrCVhJBpotjR5Gpo1Re9D76F6JLCuKAFVqQ45YqLjwdG8kGR2TDWxWJd6vWstZcGGxv8TjwXuPukbjX4amN",
  "key2": "3weCWhPA49ZN2qw4kPh1sGJL2dgN9d4swArotmFv5RQZSe6ezpSL5zkyf8iKF43B3f8dmDHxcgmsMJgdERoehvbm",
  "key3": "4GK25tw71sQ94zjVB7cA2oDmGvsQ3BUywXttgKGU5j9KvAuFS5B2FWHzWrQMyPkzhcbiwDLeG8aw6tAZDEg4Sb3s",
  "key4": "3DEgGs2GvPzYuUN4fvcTuuKmTKNiCrgPxVfUSStTEYHNgjyrX5PUyyDujtfg9m3LdZk4ufWxZFD8Lt4eFgz5CH2A",
  "key5": "4PVs92oECBrgovX9x45ofmAZ78wY4jhrc79VGqCgK8SKhMcA6uRt1pAhhfjs6MEaSPHiRCQrEm8nygbGQ4gYdMZy",
  "key6": "3oARFRvdTFdzhh4bmzGQ7sMADinjGrXcz6H7xzDzJBDJpeHmvrRweeYKWzVEecmAdhmx5NRYVgUo4pjDHHJ9Qkqj",
  "key7": "3qFmrrQeUsHPryWekUHamC31iKY8J9tZ6zJczXEhn5YRDRSLvT4c1Gswimqc1sD7mVcFxKbPwiWBm3qt2UsWTWeA",
  "key8": "2i4JgAkmqoLGWDM4WYquqPSeqjdfveQyHG7EvKAJM5jSA5aYgpDG5EwE7EDKf1cYu57gwwE6qYpc7h9cLqzhNaYU",
  "key9": "5SKuUgqdLtyZrD1NrvzCqM7m78MZok5ero1pNmDPjn4SGHt333tCCXk2QtLfWD1qtmxEmw2paZ5nqqUPbENb8Yc9",
  "key10": "4VbGhdDcWFjkvjMZPLn41bPhY5sBx81fWQLP92L55KhFRe6X6cW6dJd4wP3JxVcWZyb3w2yaNzc1q9anJf4pRnfM",
  "key11": "2MuB7e4DY9Jkq5rLAnSLDpapEMz9b7ugNCGwAUnrCXLoApiGmdmyxL4D8arCuERqhQPGs7zxmoyXtLFUaJeZBS7R",
  "key12": "5JXKzipzRPxU1G83c9RPfYCFQbHvxe5gemhinc82N3VvvvjLMNgSyb4RtRxgkmDH7SY7u8oL7enMqHpEyLnEPZgS",
  "key13": "2KwpXuPisZTzXWKS72eZxytFwW18ddAghDrtKwacb2ESYqZNnByuWpLCstr96r5AiQVnasoBpcL5B9G9EFkUZgYf",
  "key14": "5yKv2ZDQAgbXRysCJh8VBreP1VHM8wdX1AazBB1Un4KuCs1LLQfCw6QL7tcNWFpF545NyNBNQFdjspLGqJiEXJnv",
  "key15": "5FnYPiyHLE1R6rFieF8RPZEgZr5Kkq9L8HgRMZrrLYXguMNpxS4hUuJW95Ao3wrg6JgmZioGqDSFQxxWpQnyrjzu",
  "key16": "dRo7MBziVyHLm8dHMCKxWdvRdNvEo7urFWkxS31eDFWMGdXGHo7pNthCug6c4wgrHyGWyuTX5ozye3cVZ8L4XVZ",
  "key17": "4spuxEXSwY5WFV7U1W8t9hYf4KBL6N23jMoEMnLvvieJvdC3zNRqUjzSZthh2L41k324GvcogmHv4p4fghEZT7pQ",
  "key18": "5yhz3BspQavaaYSsY52hvMNEkUHP1wdPbJqu94aXb8uNPhiYvdHrrUkKhTjkkRpBr7s1bdyo6LuFvoH5DariSRQX",
  "key19": "4ea4JNzxLmQDApByect4uauXPnqWNevvaLqKiXEffzN9Qq1MoD1QAhgir7Cf9HyQ9sQHYirpQSSb1m3YAwUJrmNF",
  "key20": "5v9Rs5rTX71dx7V8kgPJ9NjUJiS2hNcGfQwo4YZcZyBByadFMV7nEeFLYBt6XDGsYZWtvMzBPAZmsuJE1atAL5Z9",
  "key21": "4UJdfLNfWZFNC8bzQ2NCsnXC32c5sGRFtrDzXf36hNAuJkg7f4XkZiWoDA3qU92YjWWMSXFpp85wHe4qMPsbMymS",
  "key22": "25dkzGGagQ8EoAFntczMcJCTtCVv5XQruMXwfdUtxj6zdCogGaGkiRjHkCCNPGdGrhf99ywx2Brg96yE65Y1D4ZW",
  "key23": "fZrnw8yVnKQ8zGJMeyLyraKpNuKCdfJ7ASo73r2ViGoiX4SyZq6DeTg4fyMtqhVB41qFrrxa8MfJ6tpbn12iTyU",
  "key24": "42tKC4t55jPuYfD6eYL2Ud3NqaE2moz6kQ94LVkeQYirNkpeBVKfbva4LzWiKc9YdkbBB9GCsRaJAC8vH3mqJnx3",
  "key25": "5hbpzoDPMxeDftDwhhcCko4UpLQEPM3svPKhfk97ytcyXRWAdzgoCJQqY1iP3JZQYoTMYc7iFYH4XJbZMqKJsyhb",
  "key26": "37GuPggLu6uxx1aWoTDka6vCQ1AbZhWBx2KN1xUmUn617BftGCMRcsRFvKXJDi8MN6qroXYFgVhzK38G6DZ29X4Y",
  "key27": "29LRe3YLVKg4CZSWoSNrNfBazMGmP9VWerfLCPapAn2Xz4zicJ4ovXkBwsLXPh3LrT4xGxxUnTAdBjvafX8ymMou",
  "key28": "3WDuWPBU9byyFhoKqDQYfqJCPbZDhkZ6N3v2znrLx7PtVLMtDCuSKzSbeTx39qjguTBVZ7SWj1MGKSuY84deSnRW",
  "key29": "5x7KQ9UijuyrvbG9Z1FYnAx7pDThVUfJLZWK8iLoAmFy2r4TJuDw1u86feGUxcnh98c2RE6obzxRdG5Q6QSEaCC1",
  "key30": "LDLYJUreTWQF2fbyrs2ngKMFw1Ct8U8PHRHHje2KbHgtfsCH8cViwMpCtRefstPmaqmZXp2EqytoERRTrzR8b18",
  "key31": "4TfrBi79TfdRrKsuY7QmSiVAxkqyawDMJW7Ve6Xn6nhRoiZDpDywmczunPkQ6ruFKh8zgPfCX7f6A6kNaFWwp6CN",
  "key32": "3oxgjtJQNcMDDh63iDwG91wej4876qH8LCK9svWfXmB9Ce1fttUhWBkPuieL5Th43GVjq25QNkssB1CjuKEUBsFw",
  "key33": "5wvmSamqUF3DnbzmJyzcvUh9gMpEbvPsPWmhiLXu4BtabzkA3EoAxF3EAtBM1Xa1twJaHmbHEKzAQ1bFYrzfnLNE"
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
