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
    "h12pWutTaJVjTZUQWb3tdarUNE7HMTcV1msUgLUmFrbWgfY4Mmwmko4szzWYVJNLqsxcHvPuyE3HYU8Zmx5QoXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpvrQaPwWLktoe8pcyFXh7rSibCkaLFTsEhN668XL8bipSM9eacAhpX9uQo36S5Q9EHJYcL2qQ7UWusEHycv6qp",
  "key1": "2mu4HHBRS2eYswh6Zg9USaZcQj51aSrHmFUaHTCyrtLEfNs4KTtENW1mrCuPpYchTLQ3cHWG5MhGN8B9yfLJFgeN",
  "key2": "hyAySh9GGCjr4Ca99c8fRzT9iRdyujecLZhHjJxQ7by5AtJ697pCnXRLs2XNnt4LYJiVrm585EK7wQFr5REZ48e",
  "key3": "1f2YKRV2AbJRGPpcBwk21vvjS9ygoS3ATzB6CVmVYiSBrzXHJMiQMvoj3r3fVPn4vkpxQiys7ZH6EFvHYM5vs1Q",
  "key4": "4XabNo7DvAKhjHueU1eRN2ErLh3YnUHzdJDomrHRadhZ1He1TX8rGpgPG9iK9o8EYtwZ7qxjq5c3WthChiBoF4HA",
  "key5": "67QEZAwoBTnx9qd2ZE4VwAGooJTmnpLwaSatJnbKLYpA1bNaGoVyfYR41pctGxtkkWi6cciiuvAQCqvbxEaQD8CZ",
  "key6": "8t46T7BS4y6tkqHqph6Amtt3zEqocYgaQuQMhEAseeTmw5SirV298dN5ZsmeBba57tgaB3bAH1rUK4VXvA3NBLc",
  "key7": "2j28ZSETsTQCT2FbarMaE5C8Rnetcckq8dRaqirhzH955DDTW2gKNdYy9w1zVF7kpj3BnnBwmkN5SX2BxwEMD5aL",
  "key8": "3fqygj64FpG2F1gZZjFpwbJKNbNnMZkor7gtjT82R5DzJNUpFmtHP23wZ4cBFweoYxjvjzgTUk9nVqcTCxfFCT4B",
  "key9": "PuqKuZ2CnYQpFB5uQEnmHGCMmPj4vzXd7mi6P3VQiKgCmvBxHXpxR7RHCLWBbKcaDJq9TM4C5reiwj6gReMRM2M",
  "key10": "4qWmavKYttGcoRCDg2HyuihqQYW6nHUtvLpg8We5snSrLi6wS8R4UQveFCxePkfPx2ZhpgxZhUDR87VQdkfQSRre",
  "key11": "5hwT5GgssMKYW5iRLnpdznVSgRAZaYLL9a7oH51QQWTnyZ3VzT9JfGBFHf1csYDDWm3jqyDmxqoULwhpr6trDJiA",
  "key12": "ujD4Jbsm7taV6zoZk39t6AA2pSi2EdYVoz1QTn7hwjNzjYui6fWKLSXcrmQArEHaaF7zUsp13pPeUCrRPi9Ypby",
  "key13": "2k5qud2UoPPH8h6qsWg6ZbrN9JXdWZz2TPm9Z2nYW7UvXtLjzVfFQmNBQBMS5YTGnc96VgLvWDQ3eTGpp4pCuTP8",
  "key14": "2HJog8bVZkwg2o7vH9swRDzHTdMtZipfNA6d687MofbWuirp3PwnUj8tJEBFkaGxyro82gzAdHhmUPvbVn7QBu18",
  "key15": "6WWg1L5kCNKjDc9M5FihkquNMi2JV5GHYGjPo3Qm13Xc4WpNnyof3sj3EENMxiMapGogq6mFQXjNKKpgQTNoUWB",
  "key16": "4r6ezMa5BYXpgtEuYFUAagLkh1ZHRsiH5LVXmr3zwLdUuRH8k4u29wKrPKijsDrCmkCVW9VT4FSTui781XtcevrP",
  "key17": "4JS5KNuqPKDSWkdBzUWnrmWRsdX7gDHN1UYhsvRyZcHfHSD6XGLRVPT1yfaMTzW4PYqja2R42iGkGjMZq43GP4Hp",
  "key18": "63ypYnHM2Ra6VEXk55gJ8WiWCmdb5Jj5Hi9nhowLe1wCE5mvMfMhmGvvafzRrxPVWPYxVWCkVLN7voopLtjRBvj2",
  "key19": "2P6usJvkLsDmVg59o3rjWRZ3kTgsW4uo9jZ9WN5NTdT32cDXzT23r74QSHHtAgN5LFQeSNmRdTjwJve4zGEmiVDb",
  "key20": "9Yu5vdQZnkfhzP5xP47hf6WWoLEq1zrQ8728YzmkXxM2qbyifg8hXKDu9iTzQuhxuDdA1aXbu5SqmGs5SH43K6P",
  "key21": "56LdzWftTDkKnQg5KaN8rYZeVFGVSpHgWNdU7M1G3W7M9prXmsUaTVY8ahF2YBVHsyGCoT7eVF2AY2J7fhwMqxL",
  "key22": "2NLAe4Bq9u59cjx7wmRxYfj7JWwAR5BTyvzKDsFW6qwPnFCLeqU5zZkncyV9gcmE33m2dymUZdanphChcgkiEKdd",
  "key23": "XCauhJcufJ9wiPSEsqRmCB8sKuwuztw5rqqxrZQEsF5WpEgSjUmyFguBiikyTLu6Sh1ugmP1NGzwxAz7Xbx87RU",
  "key24": "3aAVVrT4N5UyehxHCEaWxbHjzXYVV6e919DAqCSZfhcStBQxEDfXwWk6J8CKK3uDt71PrWHGioAjxh8SugZdA8xK",
  "key25": "4E423wKK6w9AvUhDp2stp36fveefvxwTSt3XqQrxHPXLGndSg3crTDEfoS3xt3zEGYRWXJCMyvRQvYjK8sFRuEfC",
  "key26": "5tMQ4jPuVffxu7fDVMeWQYMbNBFgGN4vja8fPbAsgTnJyADtpMHxXe69S2aay213oe7WrgqKRr6QAhoG15rwYr8p",
  "key27": "3Sf4xW6k8w8CdzJfSTDY6upPgWL4x8XJ7mzU1iQjhnkGLsAzjKVfeSEJzFtgnU4DUEmkWfnACcLeGTJ3c4eMrp8g",
  "key28": "2B21hSRSoNb7DrE4xeh445fcF2J6tyWVqZcnGwV3pehUCvcjnT6sVmAaRh9Wcm8rdVhNBWeLFVsRaDwN68KXxkMB",
  "key29": "32YxqktoRbazogJ6sJCEumz8eszWMKrKn1G2w3MZ1dBRhaEdJnL31VCGHpLij28o5P5KkNzfSRip4Znk3vUkQMCv",
  "key30": "3HHGPJXToabDNj4y5LQsnaxfMgpHCDKk2NJosZJmajz9Xbv9K7DHNoWA6jywKmeXdpguiniFwjuKp8sTWV52SxQU",
  "key31": "4WKQa8Ej1iZJb5AnYUCCs8HfTu9nA1RharQcgftDGr5SHxLMfJSzYEip8fCqHpsJywRWWLwkK6uxoM5TUGBkZXRN",
  "key32": "3WzHd8EC6FqBS3nFGamGFFCEzQ9yT2hmhu7LasPdmcXt281fKPGWn8g2sjtXjperycbKPKjcyuWWDtizkDugRUqN",
  "key33": "5GHm9ZLC8ZjPqiE2iLtCvbMXzWBH6NyRxSwJtrXUAYWgzUZJ6Rka34b5fK9wZRDXr83eHq1DwiUGfF1EFMRTjv8L",
  "key34": "2mCi6a9iVMRp21ZsxjwPWua6f3iipvyR6JMhLRwjP7rTqQVpRQ3NGiq1j2VNLz7BX4cmQfRHCw159Xa4nxqWAT5j"
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
