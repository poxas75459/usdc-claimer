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
    "ByP3qTJeJ4YvsHegsAUzWezebxuBX7fobxWcGmX8CowLm7kkJqfZV7cAp15bb99EHQWjBABqB3pXs2MhvPMDatx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xJ5815NXxdy6ehhf6Wf3opLh9PpPP3auziUd3mF7xvMg3awuT1ZoTG3wjjqZbkZFcYM99Zquo2qf9V8P8sgnVC",
  "key1": "3b1x1U7B55zDT8ygGHo8wxqVBJjVeJbLDyrxuXVBnxKveAuY1zEGcUbiAboXLxczRiPneSeDu4VhR7HJuNdDnyQA",
  "key2": "RVcM4C4sg445ZhCKghm8JxiRkHP1nDto4ozp5AUgD5WPX8WFEa98hJ8zzCp3w8ccJpsFHLoWH1eSD1BDqRmV8wL",
  "key3": "5ki8GYRVQC1afouPECrtaeQ9NvrQgKGtUnt6rsvmcG1eqh47GYJm7oAySiAHu9Srja7z4PvXMXwqA1YWAqYASBEZ",
  "key4": "xtvQg59ep7JEaLRFrWWiZSymNu1NqG77a7VzDYCETNoysnajHrvV8UdLauS5AmLFkDHW2J8XCqy8JoSMw5JNwUJ",
  "key5": "44aXTJhG29reuZCBEzwGK8UVR57dZmoyVU35vgKxXPbjsbqp1Q3VUoaKPuWuPyANNZJzjfqxWU6R7Wq54asYWEJH",
  "key6": "2xYQDucWnhwfWE9cMcoUqFR7Kuvos9kPZm762Ho4TPGam9ZzuzFNr1Rw2uNysgh3dRWNuwru9PLemDAFivJSpcwn",
  "key7": "tg1U4x9qMExu2i1Wo8PUu1Bx86PntMfmVyw3o53zrrZXv2C2ub7RmZq1Tb6jSpBd25LZdyb9QhzbiLcpgNym9pd",
  "key8": "zStKGpZFs7VSmaqBRVEspETSrDe9MFMaV9MnwA11fHTP5ewayBMBfxsWQe7vhVnsr4rUSwVPnEf8tHM1f6rn8Xi",
  "key9": "4JGMaD1cyiTK63Gg4oKMcnQT5uyZ5tYFjNbbZxjuoocCTSY9CkXv8EgDdCoG96jyh9XDLvuXMpfXFYeVyeyRZBXM",
  "key10": "5hFFakDz8VC54qpL37sUagUY7c8HXttmG3b5nadbWukJBM7qU1cYiei7hWbqfuXgzUuFdhaKsnC8eZvXbyG8NswE",
  "key11": "3qRxXgH6P3rxtiJsvbcSKmRKqJsyJBi5gFpo4V5CFhVxFw4mDaNAB8u58qjibZ6egRWsfAjHycB7zwZ14UcmfNxm",
  "key12": "Uc4tqaHR1Zw2EXLxA5orEGg6uDPczb83JyTms3sD2UetiBMYKwcEebe3CbLWoozPaxPcNbrTsbBCxA5CFQTt9qb",
  "key13": "35fNV4pFdZmoervxhbVUa8HoHj817oLdJkjvK7ag1mQaJY9iajn6HZxNAfvc4QNCm1g2ktutpqTMe3diEb9mGEcu",
  "key14": "124FsoDTvdJ6p8bUWypSjXSLFEmxqncMDYRFH3cXH21f38zShL2JuWafvZu3HCswmdA8ZeGHibdv49e3VZzDpQyh",
  "key15": "326az61WieP3ku2dr3qGT7cXqXXpuFegiiUVzRMCC1dr3ecu3bVLdncEVFHtVqhn1jUh8teYjSpN5CX7qCCKb3jB",
  "key16": "4gULQXSCzXryrWDj8V1g7hPhM7NXaxgvgteKaU2GTYRJNZEVDUeQXHqBbxQAsQrod8JSej85JQPvCAoijg38ZLh1",
  "key17": "5TrRSFj8hwdhiXXPHwKeRLvYfD76NwkPd2FDKfN2HWwW9kJ9Y2hfWdi4D6FcUUp7XxSmzQagbrCBKdKiyqBQH4jh",
  "key18": "3H9ZYBWEpk3nJ8TKZgsvdVmhKinLkSuYAKeMcr5u79cmdaxnp1PDb7iBeeg7hUFMpAiHfyAvX3eMgdBL33sTyf1F",
  "key19": "3p5wFxiXibasgkis4MjmnCJDtCYAQmvdanat2mbVRivSnUA1E5ULSnd5Suk1tafgoBuAiXzja3sQXJFDVPwhhmZS",
  "key20": "4kwb54MruTcSfLPjFZ7686yR9PPkjYsofmYDWvMFuJfBa6pJyMEEvQv4a1U272Dp1Mfw2EZcE2fNPMxveXkxiGQo",
  "key21": "S9dkpy4M7TPUckH43VE85SByDYiGfQhQE1nPiJKQ1fbw3KEEraAju94SkLRzEXJHFxciej3pddS5Da82LYsf6oQ",
  "key22": "5vUJJamBju1Q4UAK6WxC7eH5TiVG7yTXiFW7p9HQdJ7pqYnCb1NftLsQ9AD1qxtyqa2VjCgnLkF7YXcmgHKdMMnW",
  "key23": "67iGRh1FL3Jzg7X5FAvpmJSK6aLUwWbipZiTxL5Tqkyv3Z5TrbLYCGR6Kpz6QdTAjNSa9rBK96XVxAPYuxcNLxeG",
  "key24": "2bG2xarJVoLMPQWa2AvVWUXLAz6aToYUPJ4ciijqisewpAuy7YgKmwMMit9d1SGh3JhWp2pdmUSQzP1A5s8SLfM3",
  "key25": "3aSHjrfvJwyy4D4f8P2GEbKsffKokcw5nemZAn7zGzYigLHaUieKV7gPSJAsQLP7Kdbj7m2Gb4wgaeJFnZiKVWg5",
  "key26": "5LoUnaADyY2wijkU2Gv1Spm9Kw7YihQ5W8FMEH2BN7rBuqTkxEhf5SVz52NQKFRzLf76zGzdLoYxABEtTuuYrZ1D",
  "key27": "5b8Q4iZ47eUhJbcQgmc68E7qrS7Qi39fxX8W9bGW1HLFE21BWzwHcyNpVYSerB82XweUsG5hC4yC5D2LPvWPuLce",
  "key28": "NATciHLYr77d5si7h2QzTx2Thg3WEz7ptEGC4vMFn419ydtWQ95ZfzPefACuJYrzK7P4fuHwnK6tftmePap54jc",
  "key29": "37aWajXgV5fYFrMqzCQVAer2vAkKFBrAEkGSjf3XzKKwE2asdYBmE4kFMzJQvz5iXApz3wS9yukaieXiawX65B1G",
  "key30": "2rNBEHx9h36ginqRoVqzVcxfBfFvEDQVru2VQCu6nGddjB1hq66tdw8dYA8wTea5sDRK2jZEXpdX9XpRWJkKTysu",
  "key31": "5nX4yMHsbjLxRSV7kYk43Pvt9j4DY4QtoVxW8x1DgrM8VK5N3xHysywvjCbfURKjAc6mMeQ4SjDHKJrye9CyzctM",
  "key32": "47BMq8Ab2pxymH9EzKg8McQ3wdHyi79PR2jjGXdc3ouFTTrWZkfYWzfnsEGcQUCy4BTdex8xv9kTUXh22bww766A",
  "key33": "5HSR1fmQ79aZoc6nvn3vXwx4oeoe9h8WMGchCRgJ4zgat1CHMvJ7esBwv1VxTxdZLvKpz6Gv994TZaJmQnfP9Rum",
  "key34": "4hpTuHHT8bn9z3THFDkJGYPofs9BvB7Som3NyKBxwxE2oPbgRvztvzEkUgjmhmjMdrAcGt3rY8zYJiXkrKPEHtYY"
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
