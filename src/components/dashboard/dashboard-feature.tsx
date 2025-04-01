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
    "4bEJJcYzMwVdSs1GMWuVjCUM3t5VukLpzGqMYAabeb928yVBiJJphEEYnsUN2WLq68zJBE7xbGarQ8b5pXGnGNaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4NqB8mv6R2tL6DTqrGbPvjnt9MeTakCXPvvZe4MJbsc9Nw4Hep5oo4dMCiz32SkXLsNMvmFTBSFrucd8L75HuR",
  "key1": "4umPbimGLsu1TnaZEVM1PmexJtYX5BR8ARE45UitLUJn1zMvWbTQKGisA2frnHNmoWKMRTJxVWJPdzCpPUGv7PuZ",
  "key2": "57U9Pqeb85Fab4qe9UVp9mmEeVn2mkWg4JvyCQ4Se9qqpKzRzTEt9E4aqC7EKBEQofqwd6gaKWJip6EQ8K5L4jHN",
  "key3": "wWnMY9LAzaD1gvUPKwz7aaD2MrJ2rDDBT65MGmzqwpw2AYV7vyzNwwvfHuQXuAHcBrYdURHTizLvmn6MhQ4nag4",
  "key4": "3rNSJpXY5eZpfjvEdRUXxHrJmWw3b5NFbtLmHDSJKfu8yb4829eg4FAnGQXsF8Hww2j6BDy3N2XgXE7P1sB9VVLN",
  "key5": "45UCectgHLfYHJ5nMGyguTwpGVnF7WPEqzVxFL4J8E6CU8mDe3MMi3PhLmayNUck1rB4VsTpdD62GV6UbL25amqa",
  "key6": "2N1nAjXmSzndfUVyWsHGkZASoFbtSMepMr8UQ43xnT1mtaig7CwtRA164VULZAWm1UdrF9CqWDgNWN82Rq7GEKAY",
  "key7": "cU4LqAUR7sMthNXZ2EEA2LCXGhN1UZhY8vUSY7aCwokR6jq3WmEVt2mL3Q1gnjriJo7FicWcmS2F4Wp5SeYD6MB",
  "key8": "5ZY4kaeS2zB3fWg1RLk2hdyjBYmdSd625U9n1csCHLo6AEXWhLxWNXBkAqWnn144ELBub4jRTURbSUnW7VapkjAG",
  "key9": "5FUsVQGrfeEjQthgzVhFKpL47a7KMnC66qP5D13XD5Rk98JkDUDWMuz1JBoVSokGYArRFLugdEjXRJF6Yr6Xo6Gn",
  "key10": "4DNW5cPogGGXwnB7BQPS51WBJWgySLdkHj5XxEZrBretwAk1dEHmfWXVJWvaUqxjeHDnniAYYWx6mte9uhoYXByf",
  "key11": "5RFb1dYdkRxnpioiiALrL6dUXtv5QqFJCyNevV4acTsBBy17PQCLu81ABCuhEG3ejAdvLHyN1Xs3yJV8qKnESDzT",
  "key12": "2pQmhZZaLYLNUrp76az1ZW3tucM7FV6tbcDL9VTtqUm5ZJY536fhFV2mC2kdSkWVbx18zri37LWF5WxQDGFLshtX",
  "key13": "4Ps3MFRwYe4QcgSSkTddP661mfgvqZeGA3pBb3LVynLfCUKtt5qJNAaXDvw1CpGDjn64AUgxrRybnGsmQg9MTrDB",
  "key14": "4DnpU9mNyJVQCU9xzrDygadnP88Phm3ZPchoCCajhtmYwCs51Xzw8Yk7sJFuCyWNGKphrtM2miwByqd9pFUAwU9X",
  "key15": "5X4TgY7RKLkGx3ZBw1v49bFyf1RDk8oRqJmEqEze4EC7CjLy73fEqronhvbtKfsTRMPaVs4oz3xNvBdmvWMLcA4c",
  "key16": "2eir1tD12YthUjABv7oGme8G21SZENJfqFzEczKeB38waGqE8EheToHp5eAxaSsfPR7JHMZcJoPbuegQmpQd27TF",
  "key17": "565bpNGKM5VBaT4zsAotMFGmDXvP2qKRWdfqXJyLSdxxzu8ttiVMCJeThzdVmL6LXPYePzv7aGdnKBefQMzX3LQW",
  "key18": "QGfxUPXBhzg2LrrGS3t5JkYyGbDGNuEBth7Q2y3MuV847hK6ovAHLcPDTzZTBrVPCrxkKcHT6TQ7xu2xFCqY41Q",
  "key19": "277ccit7ufKNLuo7SRjxrgaX6F3spBW6qrDnSU61zjMpBjT4cSe6dRKUqFLub2QdLpueqchbhkhHMa4a19KF4rvw",
  "key20": "21LYUitqCBKSW7NxMHp3Xg4YvBTKPxUEECMfnNCLvzsKhWUG2m6dEn15pCQevwvBqjm7iGaPgkCbkTLM2ABCqKTt",
  "key21": "2krFX2yUESEXLYR1XJoh3xeWHBFy7UwGgSnHhjbeVwhwv4keqbkBo2wfj7coDU1BCD2zQVRmPXESXYWeGeoSqMh",
  "key22": "2XwFWbuQxAAuZRFPekdkwetuYEWXcWs7kauTxTBwzk6JPb3uZi8z2r3kJ8kmFgNY87odiK8WrVPdMhhUTd9nRL5y",
  "key23": "7FCWg7r9qsBdBhCtCHyXwDhBLM2JEFijxkFz2n46hDTpApVZvjyHQXVC8oanaBSAWrPJ1NE37HbVTFiewntQkK7",
  "key24": "3HuNjvZx35SUA1r4qCzoJAL2TifW258bbgontjyEAPBzM6TJW7qcwnuEsMcnYUxz6wzgumbnrHkAZPWJCj12qR3N",
  "key25": "22QCpqFesKKnL6JJZDFJAHhzuUYJeut4P2RWYWjZ6m5GNRqC6YnLhS9pdZmprDbvdtoLWnFAqyANPDzRhbiwFtwH",
  "key26": "48e3bwch3DpZC2CYwwW7J7x4rmtMeTB6xfqecV24sjkLyV5fNWp9JzHLh452wMSoF5TnjiD9nbzbSvt1t4YLqv69",
  "key27": "4wr7a2jDMgJFzocBAS7PLwQKx2mLG4pAvdNzqgTjm4rCKwRoLFRBGC586U2adcy1kkeFrNYCaexgFRdC6EcXLk3T",
  "key28": "3LLpW7dtxrzt7ugS8VPdq4xp7XkQSa48uA5yj7i4G2ryDStqaHwQ1Bd2piTzMMGxr6DnejvUDyDC8DCrUZC5qgvS",
  "key29": "2HeoJ88Nvz1cw5vTY4LyEXmsVnqqdXjhULsCxVAc2yMtBMvBmaAu72QtpcqqnCZzUb3L8spHNV4xYFBjKiMqEjr3",
  "key30": "46WCEGFnTS9bMb5RSfpFb9Lc2ZmDetEt9uVZDruDa9oMCBTiBtNYMYB52pnd6f49S2JiZFVvVKoVU3RVRZ5gEQUk",
  "key31": "UGMSfx2sYeAmqznzqGEfDiFK3evp3EApPJBQwtfs9HeLmPY5DfZieRAR96jX3Hbkt8kHmZrE4M3eTdBed4mKjnZ",
  "key32": "5Qizbm5kKrKrPqzXifKvwYUdSviGLUALNfpKppyG7nSdeR94hoAozKq1t9dxJYKqupmXuopakvqswV4SCNLV852J"
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
