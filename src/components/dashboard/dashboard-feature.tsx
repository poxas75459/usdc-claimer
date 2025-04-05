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
    "3MmDAoXmbi5a8mY8TcpMWrLDR6aRyLf7NFfEkDTUBDeciiYoAiARqt7zKCFGmvik2KVMf86WAFDQ8a7PeyHggvgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3921KDNxGBwUSWms8WcMGjPKLkdJJGu8WhHgBADyx7BpDDeTumRaThihB7uUFvXfoFoQ6Rw7p73hKFCMrk68Amrk",
  "key1": "5DyyZxqi4tN47Pax3iTcXcQpXGAYCDLTvnEQ5sZU63PX5daXcqwBJAcv8NJg9N8ZqsLkAYjwVZfrThqnvtYGJUPi",
  "key2": "Ci5JKdCL3dNwcBYWy9ueYVwK5x5YxFnjQHMogH8BnsnpBqpHB6bJmtj3unjctU4xhkyydyj7RgA3HMqv2tKtYi3",
  "key3": "61T2m2PCnBEadCaMBLwvQmQYfgJtdeq1sa5J8nAGmue9ySmRkw3NgSZyL6cSQHuEmg9nnvMnJAXN7vyYqxBDXAp",
  "key4": "2S2U5rUHUBXVsS3kFc1PBo4CA4fZ7tgxfqjzYYZyXtfeVd5ZdgiXg8NJs5MDGYRvMCTspR3bUt8XGsEjzk71ZL9H",
  "key5": "tAFWcmXJhr8nNbaHGYd7anJEtEDEzVjpTVwHwUgrQSiXnnqHTXCnQ59kk5wHEps5Vhz4LhjVxVvcZ8pGp3hiL4b",
  "key6": "2oH5oHpH2pCBJKBT4KcytSwuXbfkmg878fsHqgfQPtsFqXTuxfUtvHc2V2atF7bD6rDmYkY8qPCNsC1yLNn9RNQk",
  "key7": "4DzhbQuAoCdyijCZXSapxavKk7zVg3ED5vQpqRajivNKJ8WmPjp98uzcS3EEE5mrE14e5APyceyaeK912W2rVbYg",
  "key8": "47icAhKjSy3sCkVmcGd1sYuMMU8uBctSBdQumbZwiYLm3dVzW45HkZhSMWzR9bov4Qozc8ytyFSdbumorPsFJGsb",
  "key9": "tZWwwgBb8P5uwknhg57UqEXF6ZMb56UrMvLNiEUnWAsZUEDBz3MX94q5Nu3hp1b3UGtaGjYXQLpsyKDkJczGugF",
  "key10": "3PtZUSCwZhpUTKi2SFYKs1f5V5RToaDkEvvnpVNQYrE1291AqFJFfVn8BDjFgcvpRfH2Hxy2rfkQ8XgbhQvedZKm",
  "key11": "2dxfk77GdBnNGVAgxJU79XR8z77a6wN1iHzH13xR6EqVKiXYF7hD927fZvqeUEG7qZhx9XxYPxmDH5vxBeFugUjX",
  "key12": "3nPiRYsrrmUqLKxtNQvN4f9i5vidDAYd5GQVvWoMZ4gJ2L6APSf3CCq4DvNxpTDw5m1tVE2bNiSBn82h6KYqpWr9",
  "key13": "3YoNRP11GZnSwqJq1T4N3HYV62LCXSRTuE7DZjFHbxLxMBv65BddHzjCWjC3wH5EEyyktEu5tQe7fHbVuHmfjcYr",
  "key14": "5B3sQPyzHNtfvnUykp2LhXxc6q6HRefBgfVjZyUZ1wCFL3PDFPXiyZgRrKzKutC2Sm4d2uMdaqpWH3iENgT58dL",
  "key15": "4pEynLkVnbrutX41tqeLE8wpCQKEjgq3SzQGx1TJAGD15YAsW99apwt8KapkLnGXz27w4gGyvEN5t4yMcgFj72hy",
  "key16": "hnkjktr5dm71gSKXL1uNPEv6LCPDG2pFnoNjekSLdXTMftmj9EZnBjpmt6qcnsi4cHSEC6Z6kyaqMtQFHjH8dPG",
  "key17": "5kLPeSWBT4roF9vJBQE1XDBduxu6stoA9ajADFAF22LFngoHB5wLCSrXgoA1ir4wEGGVSVsTTs5557d4w5MhsPLc",
  "key18": "p1HADievUPLmRWMqtCN7nkT6abBUFKB96Jup5wSuYKzVZiLTDLL48FEkhNX4WYnBtjMC7FMNerZzv7pNPLpb6VZ",
  "key19": "5LMoHSVk8nYJERe5JTFruX14r7oNwSFA3xmnJqNyGDGVPPnDfR6munxjnEqZUYRyqmZPviKy9iMgZ5J3UQbhKTCW",
  "key20": "4dmgyy7d3ejtRojVVjonihwhDctAtfjCSYgn5Af16Ak7VLeoyZS4riBew7FkA56mnW6pkXPYvBKhqoNCpmrSiPWr",
  "key21": "4jyz2QWWy4WWhABjqXq4vDoFgEJGDtEs6wJmxD2GHBELNZ7Zt7jsnW6BTYDTw2fSkdK4EY1uHhfzzKbYE2D46obn",
  "key22": "2YN6BsSYhfF9FEKrfeKEFP6FGReu6iePCPN2WD7KbBM4QFDsBiZ8rR8LA7utMsRh3XJADJEhEgVtrejXM9iHfcTH",
  "key23": "4wpcz4TR83GcoYceMoMn2FbF1MizdvE8zWWjGGpVc52vWSKePPDcas1rG9caG9eYEczrYhaZQRLJbkxEUGHH155S",
  "key24": "4P4qgAcKzDCwesxYkffwHwzAoVy8YD28z2FBwF3xAL44vPqkKxRdyqQ373bbE3AhcVAdATet1rQfMJKmBKam8rbF",
  "key25": "5Pyocxdg9rndeKkV3p4r7YUgEzHq8XGis7ne2HxYv9umNB2vmTEWQSYgC9J6NxbxK53rrRh2asoRNm1zvYEHSEvK",
  "key26": "52yUqX84kBEVnG9bRiRAvFQJYHLmPM3jHT2qVVJ4Lo42URMzMD8XtD9GFoSHVp7iyQuPGqUGEYzrEYCMvnMh6e9L",
  "key27": "ppn3HDBxFiApuT9uWVYgxzAFEQR8p1ZsCTxQLj3Ew3Xf2YKc924awyvdNcSjir5RXNyWJEQW8EdLeEP1PMYuPsd",
  "key28": "31QRaDd23G7b2mjAPLjXeGfpyt8EmZdE4qsg3T2nWqUcLPdAP7d3pfmmqkicc4pMiHGPpH1nxogiW1sUDhJi2cpp",
  "key29": "4ouYpKgtXRugnuobgpbN1uRZsjzByCh61GG1JJ8cALCwsqRAfW1qwhQixr9RJGYJJ1FnvmxHwxVBDspRFhdEYrq3",
  "key30": "3skNNdmN1BfSFP7BEzXHRbCYucnBo8dX5vmfcj6Yn25sRWD96KDH1RWscpVajPnpNfYqEm9tM9Vs7nBMEmqimSkX",
  "key31": "yDJ88eg7JwcrSRnQCE2oLMSvKHnVfRTYAgDLxU9AiMkHCih1f3Q2E4oyuzdkYfRygSFZzGiEDNUB4PKh7tToLfh",
  "key32": "3sJYWaHWm7WYYYHoDJjZzkSsdUQkHzSEStXhFQNJniyXnxX73ehSxwgV65QFF5NxHutTf5vCn6PwTsd38cgMXniW",
  "key33": "43vixUNyNwBHL1LqRkQfHSa6QTUsJNyEwuvR56dR7qYY94pMg1eECgr8R45q8gmcbWxfcUQLwVkksnetqMtk2bbt",
  "key34": "4RguisUs4Z7d8wo5Ajh2NBWkVZXyugPJLugqPD1vF6gBLGHsgmc2pXcifTCeyg45Un2mLVAZGz9HmuitjYwuMLSL",
  "key35": "3Mntxy7vvmg81LoRMvYXJKZ5tDg5arKyKL47sttZcjR42gj6kDhv66LcGrWuj5XvtdwxhQ9iqNPkk7moPka3DESb",
  "key36": "29FGU5bGScsqe3bbPww4ZnmuFmeaQr3eEUhHa8Qa7RGz71xJq8VRU9cY92E6haQE4boRNgGF5TsDuZpLohD4UYu2",
  "key37": "2toCQCqmks3bEUoyXyRLd8XaTMPA6DjgxfsYHsQ1eodqFA7wSPUQkhKKQ9MFueScB8wR3dLqQDu4bqMni75oeRyQ",
  "key38": "3SQwoorbK98ZZDfzA2NkRWZFiHmupg5Z8sNKbCZd2aQwZ6LY6YPyp16R3Ego7UEVpZGoGaueVEqRpyrHx5kT6b6R",
  "key39": "3JEwne4qbotUYKUNHY5fcfd1mvjdwokLN1qWxFhLB9ATHA5msLcmUTsP1ZqTFgZuWiAB4Wvs5dwaeyHNMT9soKhg",
  "key40": "21Z5os1Tz8YvihPWBCXNC7J5Dq8ckVXfp4mCyQ9bTLgqBRaKNNubAfzu8BLUV3mco3Qa1uXZYLba5oDvNVWHmAif",
  "key41": "2m7s4eHPTW4yPF8UQe6e9swMFR7zcCStax73d65J6by2TFRLAXoWTSmkoABkAUgN8ar5q5VFXXqb33jqreVQoHiN",
  "key42": "dHDs7Msk2996tAUp2C5N4WF4MEaVaA3BsiJsvAWB483iR9W3qxuCzF45tTU4eviV6BuabsggGtEpfgq9Sqkfni1",
  "key43": "5LAFGtPe6EYXSJHgoUxmzLMrt927csfuHa4UW113QyWvbTTcT3srQtbLghUeceMYbuNy7x9D6oVnNHF7HGaHk6mM",
  "key44": "43y53aedFCGLpgRAo9BhVW4WHw9GnKfi6oC8wZSepVe3Ns4Nir6tYT2cbdZ5QmcnHePcLmV9BzxWBPnqCbdXdXNq",
  "key45": "5ybGu1ejj39tGJeZnLY8ax4yvDvbzQ4rGufSgyLmJphNxm8vPbEyTdiBXDGjuR4ZRZDB5mbta6sFFCd5Wvf8SW1Z"
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
