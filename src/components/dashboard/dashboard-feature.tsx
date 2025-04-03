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
    "XBu9VxWUk48PJYcD1q4okdqLxoiokn1TCTFy56DB8hxbFt3JA1kAHe4XZSMMWcwBuAdZp5bRhHv1ipmq4VVeKpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkBRvKUk25RoCkAFYfb72LabDey3KoZjVctqUr3w3FhT19S5MbKxsSFj8GFrJR1mekT8k2JiKxVsg4yW5HatYhu",
  "key1": "5tj3R7gkrym6fNsdQsS2fKwDWfu98QncNBgztgCgQH3fUv1jN68HE81a4cBA2VyXE9CLkhKoz4QdraFqBE2TjnpR",
  "key2": "3S6sP5APuL4mbyZNUTHhojLRkEnRVcwqMusfK4b5EfTg4kuDU7jjwEfPgdWUQqTWtCZDC5hzynYMEzJ7uwbLWmuq",
  "key3": "5Qa2n2TrEGWYNJB6qefQErbGgjFqedsJSc1vaZhK7E7UwHVtFTz8wnqQ5iUDhRSpfxregxCxLRSTyMeV5mq8h51W",
  "key4": "2zUP3LpcebkBZvkBNrBXNorEdeRkWr3p3f5S8JqATg3o5ny1xwtJAzbk8oV5ubDDfFMLLwvSefrb2vRAhc3qpKAn",
  "key5": "5u1jVseWrJ8WQj16vQYqa95n5Sd8BrUyYocvy7Ke6S9z5hGScYLwVEYGMBAi7iKyPtFRkmskeGWvGrmF3iAAkPVW",
  "key6": "5XV5C8McemcxG6ECz2c4iwTKVZJd3ykoHyVLGbbQCv9Voi2XjV9ZsRycNQaZTYXW7Lf4e2Rkqq1h9TSFFEPkCRo2",
  "key7": "67ASVU2RTcsDn1jeaujZYWnRP3XynmC64bdgTtxxEFX5ijRY3HYN2FagiUqYzymoNRFGRLaKXjqqzma7zztykW1G",
  "key8": "32dNX3z2FRyuzrsdcE1KVAtdzQffWhjxqbAo2swwspuQhJd2ZcaDjmrcrMs564AwYAAUhq3sx88QY7izrBWjpmyU",
  "key9": "62rnyhaKvqFBAVQGUi7fN334gyGV55ibqpVgSg8xgX6aMAa9v8QMxPZUe6nhyZ44MnRBVqV8azgD6mimv3EEEQGJ",
  "key10": "2p59ehRfGFPwXBabKU5Jdd6Xn5uyLsjDStGtv8vru8vyqfu3n4xrxhmvjAoeuJbv4ek3QGrt5fMtSV6ViiU16fmV",
  "key11": "4JfdPEayU4DRwTDq64ToCGHACGyFWpH8asctopiV3g1UnSPQTrD3BEDK2TdC6NPqPbaRPgM4xNeE66tbnQi1KjA5",
  "key12": "4Uo33yuq84LS9L66GEFAn1t2qTYQwo5AGYxgPf1NvzVkziQvmLwZddx3HQZP2evZbtRU36Z1ynL8w9FE2SusEeP5",
  "key13": "2pXmGtMtaf3a8afrwdeXcvoPodQDMLj197WstpLUbynUbspAUxNnNHMB5jFkbbUarA1zi4L5xhEipVyascAKHUgn",
  "key14": "3sdvagLEWp9xYS3FkJ7dhf5iUUeKQaCGVUKthuBAWQChajrh3GbUniGNHh54PeFkMGzsrC8uMzT6ThDh4xfqDhVo",
  "key15": "L9bRQPiGdjwP1PjdMECE7FwHA39DY1892yK6UhFDWEzfgbimGzgg7GQjCY5C8mMtN8ydLjKq2U6gxAdQbTZ2aMZ",
  "key16": "4zjEgY1mhS5kpJvBpT5euHJU2tSfPGuA7PhkhxsaRRhTWFg7EexBAK9LJqvnk3RgFJfmSMsrVgnghtpdUjarptPR",
  "key17": "bEjZs23sdpSTovxauMqW7kf57c7Gm1VGucsdrYWgTegQtfrgbKUQViHjHDcvPm55us8NeZMybBbUcupqSVnQDMa",
  "key18": "ppp4uWwPMj27tv5JaeW6L4yEEK1oSxfQkfgJcQFYb4KXvFTsRdznTGz1czokkwWgMKcP1ZE5NDyYbynGVqDeP73",
  "key19": "5m4ARFKVMXZkqtmS35J6ui6fsKm3bPR5UBNg5YeEfsAY2X3Lq2KBY5VvQxmn3auRx7ayFxSQxjmejGbKVTvT5E9",
  "key20": "3E5qTaxRPbaW8eV4RY1cQyMMAPyM7EBHs5TKRbva3E13NsSLZnYkcoqQBq6mbzPoPZU1f5tJHA1J7KK4DC3mkQoa",
  "key21": "D2XaFkTuAQuMHTvqFHdCFHuaunPtHqPZjWNzV4zvSUHcE745pRJXd2vQJrdvM3XQRYFoSYWXtAtTs5hh57aLG6R",
  "key22": "vwdk8n8499j254E6CUcHMGc7yTH7jbo3pH4UoLBimmHPRB35MkNo5ddZuJEQGDP8XqqtPLekK6kkfYTe8ETfAVU",
  "key23": "3wGTGz9z3uPqySqNB4NqWfrWcNTh3m43Frzyg9RvU4hYZvYsmGjb6PbqjByqqKYZ3guNx4cXPGXzUWTD9c4Tfc1x",
  "key24": "3rhbzViHSD2K8a2ipB6o1FxUqJaMi8Gm1jNvmkZVNJowT1wkQ8pGhy1vmDnT6RYR9j3hcZpLbLEDYdVeb4TucFfd",
  "key25": "5mQBu9E1iYThuHduNNU1Untycf7gKSSNnE6yzToatzp4fh4SnUZRPg2E5LdzwiL6PoK69TAs7yeG7bojSe4ct6P2",
  "key26": "42yR56zsEaWRX9NwVG6ktxWbPHZm2766bKkqYCFUYC15LYJyQ7pGpKjZn12Fehx7bnoNUgMqad3Mgjs3PnR71y4i",
  "key27": "4QJdE5u595o1qGd4xvWWSn3brrLv1LKeKbQm7uraUj3Hw7pcxT1uP6F9uaAvM9yhCEdJmKysNkfnKnW76Quhy3vH",
  "key28": "66d9WBfPVywqPhgQYXh8zfZcWLjhxcuY5EQKeX4pjAqpZNmB9NsHwiW2zTLPLEoUMh4JaQRbmmop7GYGvbLBPnk7",
  "key29": "3vUjyd6iqid2SZ4aYjnqUbfQBKr8G8LmxT2mw7fotBGnVP2iVXc1bPuVJoJ3Yt9euaMLEwJJHw6rK8ZpjMFKYmZQ",
  "key30": "2h5dzfVsHsekHVKXB7QhuHSM473YTkLiDxAZx7aD4tH1DHNkEmVcwNXbhXbXNnGH9smMyFna5CwETzUzob5Wu4T",
  "key31": "2n9v4fJ5ykfCwu3rQRJ49nFNsZMCGC7jbDDeJpshYQtFvATuW2X3MhghRKsE9CwiHbqaZ9RCE7jkDnvu9bApErPJ",
  "key32": "4PmeREwJ1n7oGfCgK1czXTSoYpAfNUAY6i3mBy4NdHyBK6nm2PXoPyJswN8DRPEC1pAYgzypqx3ja8jRvaJfVe3U",
  "key33": "2oQh7kiHuMBPbXr2zA93GXsukwftGU1X45e33dUioqwzfxHBGwSXmdRqHCExAbsm55RwitYuBoAXd1aeTaE3g7gP",
  "key34": "XLQKJwxbi6AmwtyXFDGnojCNy8s93mpNGqpqwnsvVwRGxAbegjay9xg3piSLBG4pRDgYo1vUp2h3W5dgsUx7UmU",
  "key35": "3QCSaxV5nQE1aNAQvukzerbjcLrzpAVFPTeidCcASR2d52Kn97zWwRjeiWpffp6ftREqB7K5KhHNZ1BbEYREetqW",
  "key36": "5DTyHZX8yZCfmn2fGTJsxhMruaj1wPt8L4buEbKp9NosJNFbmDFHkzgm2LFG25gcC4sF2XuKqZm3JhyXExatAzdH",
  "key37": "2cZKMT4npfP6ZMAhURNaj94n6cFmDB5ZVHS2q3ysbgSfLCK2SGUS8h8jxnqzARY434o8VWU5Tz9rJx8qLGcknCQg",
  "key38": "3iWPr57eke9qhhTDndpyAVhYZf94T1utj7tz7WC3cGtWaoVA75hvzzF7zz14Lh4fqe6WhpUk2C7yQEb5CEyGXDpQ"
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
