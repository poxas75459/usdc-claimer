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
    "4ob8dwwwXJfTbmxSctKdqqqSeUiWNPPwqDMMxNtr8fMoonENLuWGkqSEKfzgcZSPYSbxTqfN8rCehxzwFWNnGWWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wyr8Qcy2rVzGWxUBju8irRAbDqng47EYxJ3Fa47MQjy25Ebnk75YP98itqP6eKCkMYxyKppneTcwo6obezyUsgu",
  "key1": "3Ka9nzbX3eNJ1b61qEhCXKbTQHdvhasu8kRNAfcDuokXXUHGbixoFh6sXC544h9r32omTugCDmW5z2M5SL4XdRuU",
  "key2": "5K8ZAc7AAJ7DY4YPmi9yUBtH8vGr7NojDLStbP6mzrNFYZdw634uNJWYy6nRjSN97hxSqJnwaE48AzQqKLDd4pqz",
  "key3": "5uWppXBT3y1zEDKkegx7ooZmE5CHZ7FdmJQJtz2j9dU9E3vSJFNEwcptZWnbFcKb9BhshKfknmTEScpi2Cs5nGvp",
  "key4": "mA1ZWS5vMzhAYuyUyvradSxf7phjJaoWyYzCYG1UrXuR93DzjD9DwvRB8Ah6r5gTgGsxr7yoLrN7hMdHX1pByfd",
  "key5": "63bDU7TbXUsjuV1Aey6wdFUrszZtweLLr4ubxdqZaw2nxC9yPKHzQ9Aeysf7FuvdTBXpwZ4NZ4Ufxdwzoyq7ADkJ",
  "key6": "dDPveRJsEBZYRvzAkVT8NAPcRCUdjPyRn9V2WoMRSaUtogAjAKYtkX1maGTfpxEe9bc2hXrhafasdKKcY9fbFoZ",
  "key7": "3HyoQDzpzHh5rsDbQhbqsd6jH8ULhMSNKC8rVCnH6WFLfTduv68dEphBSMicXdH3AVhjTkjugcAVgP9sJffwjg45",
  "key8": "5LDZdSyGRivbF1h3EfxyGD7cLfVaSNZBw294ASv6pV9kN9rZehZWbW81fprZpuww2jNjpHUziBbtYV7bjU1ZDrdf",
  "key9": "5LQy7cvxUdUenyAs29qFoKsQvtWvsFb3kvGZ5H1vq3zrHqF4HaSME5fodjCaAwNQBKBe31LmqPK31FH9LeKrQAUW",
  "key10": "3suk8a3dDGuNSv2cAzBhHCLFWTP8PJaRDgdtuQ9hoFEwPtZJWt9UU94CRAjm3dUD5PuoVkhN8it7axM51w5CJpMa",
  "key11": "JQLiQUJ3mzTKgReUizwmPyEMSkYR99Lub2J5eHnBm3BpsPoF43Pd3yWo6y51i7gz5U9KWiHprrWWatC4pWPywfc",
  "key12": "5JfddGZZqntvDEX5fo9gNRvC8ddvvjQfoWZsSEWwx88aoZjTsfWgXikWyCHVDwVTtFGrH4moRLhCy5T1NivQ6V6a",
  "key13": "26eTJXG3StDfFazst2CkmApU7HN6G2ktrTKQfNBqmtoi1QXF4GNXbEo6SSrT5WfjmtT6gJ3DwxYDkrKuTmkdDVHd",
  "key14": "3o4FPGk3F7fQ49CayUkoT7Ps2iA4BgdzF9V4HK2uamCbkYcfpxDR41ndoPjpQhUxobJ4zcjEaUbpDRjzvbtasTfq",
  "key15": "Ex4DZm1GMQgs6xxHxURL1pjSBDEaBLtHReqkdVTuxkw6JB5dFknEnWe7hzzg3LueA3NtwBoJoxpNZB9ta2zhb62",
  "key16": "2sfruPR8evTRgPpzwgTbCnJrzaEwDBybfvuWthbffJEWHeVXvpVs8EP9oLd6NLSFXeHMTmGU6naa1X8iEJ7Qff4S",
  "key17": "63TQhZ1FUbtF63z4mk5eVHfCWppjj7pSaRzzWK8BY5C1os2wyWCGUcqJ1gcKUtF6vrR5sqMV5cipqVjeLsYkmn2c",
  "key18": "m9LtCeVPyT8UFreteYXw5i7bxzkM5ZwMduZpY3zEoFrxgTh9uhxKdYC3sErxYu5sFjET1LxrdFnvRzcmb5jsitB",
  "key19": "MbiUCFx86DY9f1SjNQZbF3XJqaKgWHHVjXcQQTbHMwoEBa5D8GXEj9rBY3997R32CxtREbTLpGNNSznptHr6V17",
  "key20": "3i4TZJF3ZQqcVy6ryYik76Do5336ytUfkNWPfM2zvvxK6pYU5vmmTjFthavaRaQmf9LkL3ZJJWCGeRiwyyhkSefZ",
  "key21": "armNLdwPauMHJAr4TbQdgvQ3stDpAvryTaRpfKP4MADVV49KNvHzbSRAZdYQ3S7omuVuY5nS4ekj42Vzn2zBss7",
  "key22": "EVdfACTt6r3kWhUUNLWoQT7SRseV5iWmEZzoSzdnmiD9Jpw1tppjFUfqMEgyEAzd99D9fZdkA7pfuc9NLPdwrvf",
  "key23": "4fXfeaSS5ymx42re5Qqkw4WSkXvjvPZU7kWtkndZrEnrP6hjV4MXszjQSsAmiZ6pDfpxrkYs1DRHZGibiTRZ6bW8",
  "key24": "4DB2Z6EJPa9kbs5v1UMaqRMXtkD9bDBu6Ds14N1teQtw4ykxpejmzBw4J5iUygo3LARiHWNuwL9bQyWRMG8fysqW",
  "key25": "4aiibJdKZxuyuUwrP9RRnEnXnGUb218rmMhhqWYPDFnvbo8aZRVjEu7xcaDNMNqH5HPz3Z9shJBKozFJDg4BLMLS",
  "key26": "66YaUwJBBBSeDsH3gbgsaAuXDD8bHw8aMei7xkjAKHEMv5rXUEvscYPCPRZSvwGVKzdopFiE336ZXkPvhcsbT6wv",
  "key27": "4baPweW6Xgmo8q3ZDnhha1jRpVGYYghVmP9NkpX3sQfR2ADnxKbU7cNm19ib1TRTt2MFG5maGkgjzpDNusWeyjJh",
  "key28": "tdmgpMqv8NVAJ1sgi9K3Zh6HCok7x9jMXeCEaoBU2tJnm57wqPbrCp7bRvGh76NRkcxt9m22Dr565xY9vyZ9TXP",
  "key29": "5XTkTL4e9TyTTMWdbibTvysdsyYUxLg5kJ8zjSNekCSHMcFuPgFeRQ78KmikseFrpCtJAiy3suXSkKT3n9rtMZRR",
  "key30": "2FjDDAJqu6UZHKfWP5G7bEJEgq2NkpMcPyqTcsV7Ui1T5kDqpi2xgV6NZZFzN77H21GUnJDFkVoMozED3HSXK42S",
  "key31": "5anHTvFGUb9K6GCuVtDy2NpdoTrrhBMuGAamkKNhPMHp71rJztvSeLEYRj1T6nfM9CgTgQzfo5p9KfMipQhoyPZr",
  "key32": "3eTYC4pprWsi6hkL17Vz2wCNznVBayho1wSKNFyRiqamAgZWgNhwyMKhnpQxrcoPv7hnJhb2QXpg5qMAaKWkewY6",
  "key33": "5WfH4WyckDb4qXL9ZtEf7ckRbx7eDBeqWiC78EKB4DDakZChp1QeUDT7NVwMXPBisQi5GXjNFegmSfRvBoN1VEea",
  "key34": "5kmNArnyUzsGUAq8mR5rE7byzxZHKwckACpAdCoU3AY7byaEPXsD4X2Pscer63na3GHykwY7tWG5fSCKmYT5eMxg",
  "key35": "3Pe7USoRsKbges1MmaimB3EV4shKgd9y8FQrKC9U7zKJrqvJSfexHu4akj2e2tp3pk5jb9aQMhxBnUzHt8xAyoj5"
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
