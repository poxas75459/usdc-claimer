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
    "3z7RmJbuuJpC4giegX7hZUtvFJUPkf1Psypsro6JquF823moRzroZjNR7ay9tBAKoREdV3MezT5eUhPKR5XfYhvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47t6zpaH9ge5DwK9BMk4J9vqYShYr2QCSUGL3x2EN5oTCfdkxwWSZKdS7YLA4BgxBWusWvZHEHAe1Fm51K9dYbcZ",
  "key1": "3kCBz7zn8vCSvApi5dn42A4BLCSqWTPMSB6uebx4dbU4Se6r5KontsanXJmxnPRC9yyteBgZgfVYD9fTEXr7FWXD",
  "key2": "pDjkYJfw7EkQi9dJ9D1f7EpxbnNUb7D9CafmigFZAkCoy67mbTUD3QpoxjpxWwFd5YVaqkjKgxLXtb4xdGLkrzt",
  "key3": "5MKnWxJooXUcdyYAEHVc6nBDNgSfAypXFyTJhrFBgrZPdJfPo73ZsfWQ6fPnc7XMJzqohLhC8SGC8HcJw6HJct68",
  "key4": "UcnSsTyb562MsFK7gDXCJedbvH6RDyDbhjronohkm81hHvnnFpu1YN2zd3Pe4ug9xFHbzLhgqFBJBSDBojy5JHT",
  "key5": "3oFvEyBfTEGLMRsCdW6HiN6pyhov4sXGU9yEPdJ2vGep91V59TuGFqBx6B6NsPvhgHXAHo6D4vUo4UbBpMLkNVYd",
  "key6": "2f9XYdVvfY6Vhfjv9Evnae8z11bM8BnwfM4yY8ZeGxeNfbCPdebtvW4r6JDJ5nsLitmcfK9SnM8dvjVMfNAxtCj1",
  "key7": "2hNpKU7bPqJPQmwZUatKFr8RBFsTDdQbfmHvSnr8SzaesQzMTwfPSwQ2mAuK7pM3UN6Nay1zcwvzy8QGh7UAQtmA",
  "key8": "348DDHZLmJseW4qpVTc26FE4g4CenZVYenikE5qv6Hpr67pbJB2HcHmNxghLZV8qYoVsZZMDcWHVDLTog5iVMAEz",
  "key9": "EZ35rDLZYC3do3PNhdPZRLpc1PKiFJBhacqwYGrsUkFUREy5GGUBoQzpoo9Voxd4jUhFkQ2qnDvNJMa9hcYDVY9",
  "key10": "62xPThdTX6yYTRYWhAbLQVNbtMz75Th1Ff7gH8uQqG4bZXvgegn6NEvDDKdyGRckNir7QNTJ92L3yxFJkFqXh2j6",
  "key11": "5qT6khYyxrHkLF9MvPut4MiUWTfntaKjudPvCnFDTc8cPQZQhWhWvaKZcSVopvognb1pRCTX2FnChnQfLm6xfbW3",
  "key12": "BLUdwPt5Koe3MgFkkkNvKJCeT1J1AvTZQThK3WSpmwt3gSqy6s6YecJJEKXRYkawKKDmgVnKxuGUAeH8fPrGNKQ",
  "key13": "4MxsFnX5qcSQnAZCShR6AeVUZTFZsnTwYKBT7DKaGCPwqXrKQvUVv4csdBoNNrki8v4jWcocnaHbRZG5oaVHvZYB",
  "key14": "5WkHjJW1WbZocqYo1gUMqarynBTzfyre6xhMzufJRbbNFs9iy2hA9m3Ft4wnXF2duyni34mvZk4sV11WHYtyM9uX",
  "key15": "2puHSzrwwwhPiH9WyEii9P7vtSqvHjVPsJXZiu2kiPuwHBkuc8amfRt6T17XDaovZiR2xSMvC6MdpQdsMH12zedD",
  "key16": "4HzwBPQ5NFcvUzdtfCVHj7SAtd51zCCi9NooknmkZb72Um9P5uYNNke9yPL2GNBRGPFpaZKcSagzPo78WU8kPdso",
  "key17": "2PUKg5cStkdBXK2Jg5WJubo1ErNW1ggKBUsd5vSJDsSoMRwYsvJWpzxeV9kqzXRhGTUeSWejxFJNspQyERzZNNfV",
  "key18": "4cPxDHucFRGr1mzXJ8bo9zxZfwJADGiB8FsARGqgfKDRsBG5FDNAtZ6C3KucVoyDW1EEt6JLPzRVagVnCjmt3iax",
  "key19": "33q8mH2LgBRWaaDE7swDeGe1JyZKNhMAErqfjTNvYGfzs6SwmY7Yez1c2sg7bMHt8zTNFDygwmC1rto1UdZhH6tF",
  "key20": "2NuzRL39eRUKvnhMjTX4pWV2Qmtv8FoMZa96QL4BoMi97bDRzip4vjQto91bTgBMq7p1xsVSSdVMzZ5n58quBBgA",
  "key21": "3wNRwjMnE6TjJuFviKjQUnDjkLBdHtt1ACZoueH5jLbsSCwnGQRjurY6rRRBWVcxFJgCMYoy4TC1uutLshLos3rd",
  "key22": "Zr379ERtWgQr8woNn83c98wRv9J62HXPBx2v2yjN3JPbK5gH1hJdbeQxghjgvJ8Qx2VQBw82wdyA6d4kmpkPiWj",
  "key23": "22eXpqayTVGcbAeG9xauQpqqrQHpiKwMa1Aysq3y7aGKHWBRqvRcxuPenbbgnG4XQKgpk2wktpgDx573pSZDodir",
  "key24": "4jnZZDBcm96WD5yqcp9j7Rp6M7xhRFdEbYeQMRV79AGisRvqaYgX7a3aQC1gpjSknR8g6xTZnRnXyyY5qSYudmV1",
  "key25": "5y6LS2vGbtoHY5te3hcM7xsc5DkVQ8JQU9EwvqaytWVDLkXMWA89igrMjzq6628X9XBSzWtNN77fgzzaFjcLerDS",
  "key26": "nAJcjwDKtURV6jH7RnsHhWKtUghe11S5DFGz9cZkHyvVwpNptiQswkNn154FYhuzQsh3WnbLXbLkiDQ1FfQnNJY",
  "key27": "3WkQ2ehGzLYouaELaq1fZmuEuCVsWNpHBf6KtturWmxEpmKX6phanqASy2ajwfwPn4wU2T4F63gUHFGdn5zV2dLT",
  "key28": "67D61rfoJ1E1BAC4M86c7JwhMwEUFr4ZpGn55WoixzxnsigzzwEeCRCMZSLw1B7Vg5ibm5NvFWaKyLRAUiL3aNdS",
  "key29": "CQsB2JNwsenEAkGV5amZmpNFwRc5eSEwAaUdQa9foBj5mgXq6xfmm3xsMVhqS8DarMCG2u1jeuibGrXYHWxs1gp",
  "key30": "3WB7Wszcxh67BYmkQk5gNsRRNqy5fzwJ6r5CPkizkL8xncVPH3pMMjvJ7kZu1AAQqpXxVhEBDN4xLnTkBy86AFDm",
  "key31": "3oL4UKs8ryn5HhHWjF2FgqLuX2AzgXxmLzJRKJD5rWuwfSm34H7FDVmSatCf9smQwwCH4RRKJQxcykvU5okuQaNV",
  "key32": "3MDChHFW3Adu42eWmrXcoyq8pwDdT7YNoAHejupozA5xq1RMKnHePMLraz1vLZ9wjUJUEPRLML3sJaZUur4n3tJE",
  "key33": "5gMAXgnPECJQn1fANZh4g4QfVVo1LwuA5Bu7LJS3yoWZQpCP7qfo23XBMvXF5qG8pFRrhkEvxQZRZdEsu1fNkbTc",
  "key34": "2X56kid7fAteVpxJjXzkU9ZNXuVNA39yoMDmBK8tkfV8nYddnHo3dgabu9Md55KUwTKn6qorLXb1NGghXXNspHFt",
  "key35": "4p65n3AbfpAFJ7W7bXBJSPngE37PM56X3U6SoXeEjkFwKzdGQcUBiYq1Xo53J7BpetyVRWpoPHssXAtRo7oX5Arq",
  "key36": "3SJsZSqU5RNCzjLvEERb8QCGRjenSTdCP5DECPmkfAa8ZKrCDh38eKe5e4GFwGrxXBWK1LBk5twnWy3BSi9rfi9F"
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
