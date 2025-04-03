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
    "AhxjwtKT5ocLv1e1nSQZyKVQ2vLkQzsDuNPzZ1JCPhQZMd34hALm1MFCiUfuJwjybiMGBgDVpkkCcDA59UjDEkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61XPjydx1AJLbYVicnYdcjKohJS4QXX28f3mU6r8Mf9bPUCQ4ziBeZVYysFmkfh1RHCdPA82nvEW2C5HKJXqS9Gf",
  "key1": "53nQ881S3NRmXJfXR5SzVX4PmcUHPDMqeYxxts2JwaaMfFSP79KTXsdyfMCm3Y6z6KoNNgbrMQ8V4rcCh9gFkrKh",
  "key2": "r1ybHpzSnK7qmX7P1TGD1b72cGQEWUgRBfGum1B5WMNrLJXXxoCV7ynC7U4MHiovsuTVHJ996wQDQchhYppr52q",
  "key3": "9hGAnLqA5pHYUjPRrCVkGFMJK27J6oSv2v6DwdQY2yS5nJgnCR3Tb2ZuCdHXvfS55bE1ZWsNQkj7wxM9ZKoUvag",
  "key4": "5DVecxWTUBgwS1F7r6uceegK2qGqERMRLMwKMiByMc5HoSY6LAatrU2mHnrzVh1KPd7bZEUizrn5oF45uwhsQUFV",
  "key5": "5zhXAhdWiiEY9BNGgxcgUVEDZb1iNTgfr9kMVKTLXAVgSZaWFNRp1PjSnsMe9qTge4A4QBDvRkmPdCvKK27EPwbk",
  "key6": "59aFppMtvy5wBF3HgLdSsnwtmcHryiGuF2ghKWAt7RKtp5WDfeRdsD3nc4EbWKn8Z3YUztgB48eh8Dnz19eW9oVZ",
  "key7": "4Cwhyk64c6BpXWsxxc381yopEX8STKV2SeuHZJvwcCZ1Zh75WsLxVd7J2MgVhjZNaVeo8HZKvrBqZbmV6iGTjz7a",
  "key8": "5xwwcHTQd315xBCKzHohwL8FWMMpFExAHkeqtnNtqNKM8xpAEiZcXP2oecdQBRLwKRQkeFPJuPC8bRJ5Q9CBGfcu",
  "key9": "5FcUijjFQRk5xtgbFQ7BG16birqMcB5nTgfxYLJAe3vJsJYYoddJq9YULePWo9XXhyK7GfSnaBDR8C5952B2DY5S",
  "key10": "5DQEMP2AdBtpkxJquTgh8nAZqaMZvZ49oJNFYyndqJsZhUkEzyv9s3p1K8GRLSPshbET6HaX7P4Qmj8h1XScBNrD",
  "key11": "34XhFsC99L1pEnGc1mgJKMg3nQhtPB5Cko8YQAWVpwPqfWjTGDb2htBL2YQX7FHADg7RgeJeSyJzhXm6J7asPuM5",
  "key12": "wBuHXAsnYP57S9HPU8YozsJa8NeDx5x65sk4YGGETr8Kny24kc5yUuFGQ59x3Xs6BSq6VRm5dZCTTJJKgYWbgF7",
  "key13": "2LNHrYBnwFCgNVJfVc44Ai33cFbt1HkAGoDsbX6eoTkzuURCZAHETszNqeRQKXFjRafJVkRU6EyFvMCDzs7VgkqR",
  "key14": "tG6FRdaZ8JBMY4ruSGL1BuBiWE76uuAwtxy1SK4oGA9m3CewZ8zJ2r4YRM1YuSSnCZ1r2URcmiqkFawUSf9Z2W2",
  "key15": "3cXT7j8cGeyVPgEzMudUBbXq7ryupjYUw9faybFChy7UGoP6adio1B264ntGHXp4Jyoc6v8FFBiKdNviYbkDioTX",
  "key16": "1HDS5Zcq3rKP1uTEA5WnTNcGb5XHsebSj9L662BVkvrdjDhQG1KQAMttX4Lo4pde2rb41TqRNNA8ThZAySkWMq5",
  "key17": "pmCVYbaQhruKMaEftZ5WF78SjBF6yVXzyDJBTezaRCnJBJcsjoLPpiVfkhbVDzi17ujk6jFC5nZQtPULc2DkwHB",
  "key18": "5a9wmUuHyhwrJR36QfxqsNVjXh72VobzyQE9gqMWp7vpNXbUw4i6e6WUpbGzXGT1qbwLKk9BG1oFHvrfsCMK2pd3",
  "key19": "55JTggV4yhLr4HM3j7gTjjHihhJNtdmyA5B9UVHaP8Pmrg8D2RWkVxabEttTWAYNeSq7w9NLUqwUrKzQj2R3NhDc",
  "key20": "4exDbphbyoYBSVr1YS26sQ7q1UmzACA23SyNv2qQf3EkmUyvpdz1iEnKfbLNKxy2WD9nbSJLzGufJsHBHffmY1oS",
  "key21": "4hZmMfFXuNRmHAnmU3ThFpaJARbe3CS93zqHHq9ZritT9bWeVuz2yGkrwBvdM6nxpTVkbwX9Rhr2SKUvn2nqRkmW",
  "key22": "4D5GocmGZRTF5zqq9L584uaBaYpZ6f68tEfPy5Kv8FAJo668yjq6gmh4HDp7VACvyfPceeu5WQ2EkaCAg2P3BEsx",
  "key23": "4KqbAYNtPxgHhh7ATpue8NvysXBLgSCv4sKcbeKExefAjtk2zL5kUBDZQfUdjwBAUUzhcPyLYy1fS7eb2a15acqv",
  "key24": "5DkUFU7rx911WW5FrsftNZXfRwudRqvoUq2MkPxr4qGALpi21WhUEDRreSCTypgBwz1Qq19VMJxrX1mYNGAQxCEG",
  "key25": "55jL3q7SjPrgGE8YHXEzYxfKrDRnvEKXXrbCekmosXUi4xKqJaCf8bbCamWHhxyNKzfmhaSrzqXUVRbHJCXBMJ8E",
  "key26": "2RvE9vc6d3ym8vU88CaWeqsP3BEvSa9HcVQ7ogNPdGRwjkVZaPgWUY5T5t5qzDKt1XdY7Q8QVpzSDzvktfQamRG5",
  "key27": "3P6vySDAM9zzFTdvJBvDBH3jKi65W4WTnbHWQGfyRr3LTZ3KjHKcrYuTiuBQueHSjqzvapoFSgG1Ttcvz5ufyNAu",
  "key28": "61X9hrjdXWJyTd6Ns7RBxsoRME51M4XepKtms8ABoqWsffPJqdqtDf27nzNyE8iKpov4njWAn9AeLFreEgaVdghs",
  "key29": "532SxHQokjG7Nevhcnf9T18MtLmEc6Hvdp4Zmw8N77sCAtDMT6vtC2zRQvrcVEcpc2iKPfVxDELtRkLXvS3cqqDL",
  "key30": "3VL9xA4f5ufVXhPKKf4rjARMgSfjT9gjA7UEuPYA5ZoQgUT5JMLPoVRym6ybUAzUU3vABk3HKsYv67Xpmk32tS5K",
  "key31": "21od1f7ofYjoGAZHNpumtqk2jY9s2XKz357d8urfEpJHztdV8BRKQ2iCiV8BaJqT7Xd4oWKU84m7veNSboDZzESn",
  "key32": "2LSP6Dyabi9wGeCXbs7dbSh78o65srwpVqVczc9WnvNswyhLsAACEtN76XSUznqnkEnJ3nqdn7MpkBm4Vi5mzDrU",
  "key33": "4zFPzXPDkKpMjqak4ABjieQAtAQJQSjZGsVBrVjNYNsGao6PXLMeegbrBFSYm7AaH54JLYMiaiQGC9H3T3KMK82u",
  "key34": "3qvEyrnsgx4aBvxsA5s89RfiqT1qc6zpK2YdAmxzV7hP4XVXTrbro7zdjg18cY4Efwjmv39CHCWQvC13ZkZZeVFh",
  "key35": "4Lp7FFqdePg1rShmxBKovkVkaTx2265fjzNNGsrbEmCwG62p99b9GijrdXd6w5AQvjiCQf6bUJWyNTtD5kuoDkhR",
  "key36": "3bqG35Bm9w1SrpTrARKoveAurVtUgPs8aVNow6B7qBCM7nW91U2MC69U9RF3vtWwpJ6o2t8UKW8zQTymPnrN1z5r",
  "key37": "5Dg8Er18P5Xm7qdLuJBYXPToMEZcPq4VtXM1UNKWVPe2Bg5igPmFEjQFw9mWsUi6VnAdBqzCC5sCGegUzTzFafK"
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
