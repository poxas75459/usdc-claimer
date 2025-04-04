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
    "44TYMftJjo77Ma62GFAhiPdtFgjNHW8fVbNKqnzfCVstRkWSLhxLesE4DW65zCM9ea4sWLhCTn1TRJX1GeWTPNkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkrbnESpyu4VkEfp3Cy6Pwv7UyHryXvtnFiiQLJkqUNeHs9KneLX5hfsVdJ3SEzQMUuDgvGwDKWbNvrB9Wef6qd",
  "key1": "5UnmekmDZMPEFQiwjpaemu7L7JEwtSF8KDJwYWoWoLczKn3g7ovcLqAiAetLRVNXk185TDxF1DLWLymGRdmRRcQH",
  "key2": "5t2VUTUYSFoxNitjVSjRnLWYYNcB48AsPLGpwJgr4YzEjzEtNnqJoZePZKAFzGpw8AK2Lfp7BP7aQhez7Q49pgHp",
  "key3": "3bcVoVQgQk1TWocBHtwzJQFLjoUbvtXgDMs7GByhV2MmpG297P8GrMTYG22i94HxRCozTevrbKA2j9zk52nDpPnh",
  "key4": "37YwofTdkkZsibZHJNTL7Eu1vJTnrS7pPR5koLYsLszMrqwSMziAhdpCdqR3L68EZszEL8cbyhRisDxUFHLNy4U5",
  "key5": "5eACDkjyGjeiNZ4RBdxSwdVT2VqwGFHP8Br7LG3ueM9CN3GU9m4ukNWBJxMxq9gSJNmndJCTYLq7yMkU7aprGokz",
  "key6": "5WZBnH1Up5C56VuM571GqsD9YM2dkpebJBYfeCMVakwLfmNQJjRChoSzFscSQojJUxuHZpKiXQUYi2EQeCUFP4ox",
  "key7": "127T99ySAEVKRg3xP5A81kWwYfSk22NMMRWyBLqASRZEy69h8hjhgaTkNNGcyGytrN4hduADUFNjCEKQadMKW2XZ",
  "key8": "5XjmeTxHQ41t2ruPrM3qbgcD4xu1TZGaGiFXyMppxuutahSDsnYUHZTACZ9Sp5N665WKx6fSasMUbggWDf4tBLda",
  "key9": "5TvpqtpjVmGqtoeQ2z9cbcinUFHxM8vvBeGFLnUppu5V7cQFSQMgDx9UcMkfSkUbrRWiRVXoVKALazbBft66HeE5",
  "key10": "b3VXqedpfZwQ2YryPvgQychzvEGp9FJhY2EvwqUgdCJQjztyZnDqX4kqX9nr1yV5ogvKgXe5PSZfjwhEpCrQEPL",
  "key11": "YUHJAKViKgRqMzJA7QV3wbh3s6Vz4KMWwkv9pUo4rQcA5kYow3nXK9xcvqG13NpsJ9YvJYnCsCrd98wNcEKHZDb",
  "key12": "2fLctZVxjBfKH9ap2nRP1LJcRh5uurjtjMKBcX8LDBL9Rxznyv2QLEd8u2qSsUR5Abzwid44v5hE4gFLiCseC1F4",
  "key13": "3dhxJtA3yp3zzJnZZNSKNLDemCHW6ixb6YfaEFEUzFXgykLqqhD9cf1kkWE17noAmZpMpk15Com68teCMYu6kghT",
  "key14": "2C1SzPJ3Q2pYjVDYieGYV8hAKASwzVFjLiEkAtZumuqRvodaq4hCBcsRLYqr2H4YbjnQog11CEg2KrwtmiGqnumV",
  "key15": "4TFmWHNgoDe9DxnN3SVBfRWKrKmhw77nMXhgz8LbGT3opQ1G2VDyEALHYe31S9wLLVnt4z9kHmojHGyv18bJASwb",
  "key16": "woBN9iKJiGCTsF4paJsedfFe7FDBuuhw92kKuLBXQyRb5zuTjcHrWffmrBCWCejKoCYe8X6weezB8w6rpSYwFGN",
  "key17": "214NEHjPTE4Z9fYKVknMfuDxHrmuATGvbzVXgvfe7JNPAegkbXe7DsWmMpPBTohrv3pSSYsmXkDBRYro7tEy1hke",
  "key18": "x67Ad9ivQvKAiiEDgRmUqJRqhuGA5MFvvFZPAQAEoUWz3E4BavuxE4avfiZhep1eDgmVYeYbXCwi2ojtobq47Tv",
  "key19": "2XApJQWjLA1Dqe5BhRTn2Mf6kiPWTry23bNWw4XKUugrg4xA23qqj6H7tdviNtvdoLaSd6LRJ66PFR1FjK6SfXnQ",
  "key20": "66k5FY9kkbe9aL5JoYLvbaVxAcoYDDPVXDiPL5yhVNeKMDQavfXdCpfsPqr4kbbnw8pkDS5pwHnb3uvAqAMa5zhd",
  "key21": "4jJT2iQNAn4iTgPH1LeDpwsqJRsXxoTBtf21258ZboXWYsdsjYoDQs7W4Edfv6hFH9xAF8L3ELEX6asrgg15bPmQ",
  "key22": "5RFpSWF7DuYimhELvtjcN8kHktVa8kbx62KXb4PLUnmk583yppnAe2rSyFm2GWB8a2AMivdTzUJU33ZjZgzLGLyo",
  "key23": "2zgJk9TFbsfiL9iw5rVMLwDVSGr1a5DDuc5iz4YZph9QAooar5rZjyWRmmFrWyfZ2L4qjFQEFudvUNivKLyjvL1D",
  "key24": "yKiAW45WXra4uZDXH1AYDoatYZLkJK4u62UqiZRXFitt4M4iYbuY1kFd2pH2NohZhLTHgAeTetYwUcpvvgxinKa",
  "key25": "3EAmwdcX2bThdkCZqXRFYNHaeRWmBZSjwjZ3hRPgadbAVeGcoYoQaZY73crkz5Zsa6H5poUXDRkTrcsWXcaxSDuZ",
  "key26": "t4N8mrEN3wXSSfrho4XG8ZHnQGmpgDuxRnQ79hu2AUSJqcUMWddZHgCJH9ysQnz2knCoNCW83eApckwKPVduYj6",
  "key27": "51LQjTTmyat3NB4TdNBtuAPM2oYMWEaJEinY3JmFGgHt2n7q7cGYWbBSgC77cTcJxGX8umVfNGp1bHcS3MjXbeZR",
  "key28": "3pJpZAF7i7P86b5Upyv418FWXVXLxQFenK4aMJZwNw8NQNxWDgaR7D1SXRuY3NJGz13R6mEFfTAhc5takTBd6xuj",
  "key29": "3cbVQSuF8TZHYgNWdh9RWUUf9PEySg4aCnL9bt5fAJMrSaAaYMZZM48SmfF73NjMCmPTKBBmLTqrgXBgQE4Pc9LN",
  "key30": "5PndPDXNTxv7uLmbSoiSFmgCwko5ZMiQkeb8AQMaC1BSSxiDTceJAmsZYPNHaq6hzu7bXwdmRtTq44p7Jspx8UhT",
  "key31": "siczprg5C9SAbw7FhUnJqaZNZ753a2hfRenD1seKRVSqh3MPwZjYZsdqBHJgguzKJixDs9ncckWuHc7RtqPAzfR",
  "key32": "aFVNUFRueVKMhKPZdBM6gQcWwP3BnPyYcxV4XoqLdcCPzbvvTSpYskgVTknQHejGZWJo8FoqHkUXTogiHbRAV2D",
  "key33": "3No42DXcBUZDRyiEVdtcJ2eVo9xroyFPpbVuxfr7yqsdHMPDebQXakvYppAqjwW1dom17yJUhDFHFDTF1RJRo7v2",
  "key34": "2z9DaFK1Db2oZroiHSCTWBpD4kqvbRGpqHUtgck94KPPruaBJEEzTFXfX7wVDkGepy9tBSrJ1idaNE3GDPvyrexX",
  "key35": "5oJDrgyJfhfCgzVnWhEhe6ab7iRHRJ29CjtJBpE143K63AUEneVhhttBGRzdyHZ1ciw7mq5sbuDhvAa9YazFLzF",
  "key36": "3ipTuLKmy9YETYoKBa5h5SJSTeCFS8sC4PWodRC8dBRmAGuVycxxQfN2Xd6z7aCd3u7x1msT6xg5N7q46chUkvwt",
  "key37": "2dptTjZoCNmePXNRF5vtBLuJe5FiX7dARjduysHoj5rprVpd1CaP2Yvx8488Hr2n6JoZLw3YiBP8ijrJx4AnjD8r",
  "key38": "5VTb5YVv7juneqdYJCqZEK9AJFyQqrnmxXws1fKwQqi8o9yuvTcVes8RJAGNBeBdyvvn7u3xLmHRiP1Bo2mLVC6J",
  "key39": "2e7xyrzXTTGL3GPtrCBnRbc9Yg4bAKTZV8W9rvwrjvDtuSEzmqG719gAHCKggsYhZ7MZmUwXqq1oGAwXpX497Tm1",
  "key40": "4DZVQ9P8wxdAKzbSb4C4PUG7Es7KjZrQcm1oEJD1eYamxX2b8zVmhHnZfZThTzd8MpXKP2Z35hizSwhqtSqz9tPZ",
  "key41": "5V8eeE1kNUR1vHPumLYp26D5maSMdCRWSfwbc9EveTbt2EmKip9Hxb3LqDBHZ8XS83s6SrHxzcBFFXKAqQvbroos",
  "key42": "2mSi96jtZt3fQztbEteLCvuyAQVWkdnqLnS2eLn4r6oMzfJU2pg2aZo7znVLDco22rNc7dGC2wZ6mEuXzKadMD7U",
  "key43": "2vxDzgzQjo6QfbwSJYDY8AwDnDaqoTYxpurPT3YRznJRq6dHH16QzK7LaJzPPMmnbpg4N9nhmo1yPYt9buxmbHn6",
  "key44": "dkcBWbijjPJrG15Byt6a3kxYcNuA6uMAmQLB81r37aSSarqA5MomnG8yrRU9jkXfX8eL6qEizRQ4S83rHWgPsRe"
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
