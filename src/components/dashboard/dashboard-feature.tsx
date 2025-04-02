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
    "LbCX85WgzVxyUeSZEBaeZtdjjRHi59AkUchsSBbZ2xBcCZKZzJFpFWYSRmmLHBV8wqooHQP7RKRjSYsJHasoJQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmrT6NQwpVCyWnzpdikDyn4d9PC3uVusGnoJ6EZUzsfZoP8ufpfHAJu56Arm9ABSQnXr1dN1NobAwLkbhsk24X9",
  "key1": "51MifmHUmTU5JTNLK7diFsYfE3nBo6Cu8biwENpXqSRXY2V8MpkmUSHfhDtkbyAjRcEPNx2ie4qTnGnTwPr82ZKL",
  "key2": "3UJHfyj3hKr8incis4U1Pw55rqC8oqHEnWNJMsQjnZ6ZFTEA3GtDJLrD8nEhRvX2274goQxEopN4L34Ssj4XM9vr",
  "key3": "28B1DuUBNAugShYq71B2Rp5Aj4AZq3jSjjXG1ikrrVx6Tz41v3UGw65QmhDyFr5bc4L8WsStPbTvG55BJE9NH2iu",
  "key4": "5Wrr13Wu8KH9kztvWhkorN7DQw18sWoKfknPrQ7FwiC7Kv7dbVGkuZS8aNckFHrvuFkDQo4Km4R11bAPhPh3Zrj1",
  "key5": "mTpw4Cuysfvu8p7fTEkYx8iDdAhnbtFupo19D1kKYrZNmURVdoqLF5KjBp1y7sUzBzj7XBg24MLnG7JAYCUsLah",
  "key6": "5tURzUUptv7RSAfz9EKjWB9y3zVyebUPAczdiyYKTqp8jg1FFRbxsi1LiApGFAKxgy17gA7cTLuvnhP36pDLSdh6",
  "key7": "Ln9ZLsRmY7Kyeo5JKpSV56beE5rBddq7K6oowD59HjN9DvR4f1shsgWguWj1RHkScBWuSLD64mmoUa1PPd6Hhdy",
  "key8": "3bn9nLDNY7Qgnh5hRxwCNAngV1i5P4jgwvGKefUanDi4qXAjzQXucJJxWohtEbubMGhdMMGXZkqqQh5g7Kd865v9",
  "key9": "38kECakVMyoKwrkZSDdWBQAyGmx7otiCr1bV9nyB7D2DtvHqru3UAEm5FbUGmPRL2dnZNYA5VmTYYz5yyBJmeAsr",
  "key10": "oyrDbFqaEcJMsjojEvtajxugdRnLeRmHvXW6uAZkPYyynkjm3aPtmroktAEFkEBxa5BPYXJGwufbeKYj4VEpyq9",
  "key11": "fm5jnHKUvC1rWt5KRU6VNkQiSPU9BwfhXFupJfEZBJ1mCZbDDDhfkUdadRuojWrznhBckcprcpg9NZ2av4hQJWd",
  "key12": "5yEDigKciFrD8afYhPXUvFdSsfVHyr4MMKjTaNuq8gGjYFE8zw5KCmKWadvFSM6Qu218TwucFmzDXvYyjBiZCawM",
  "key13": "5L3w7FEKn55wZ4LTm1MipB6ZVQaSDQvJYFkrjNF2oktj3tTGK164p4EjUSyHLCwSYkf9unM9bs81ZFZnhxyZ4M5o",
  "key14": "47NB4PDv7Pj8UKnURMUKfkn8zMGZ9dhzKM6aHctncZqM1FrCSucskFw1ZpdyXUCjWd9M1JUmUy6vFEiX57pCWGq6",
  "key15": "2CCzNqdtSr2gAWETAG2huNc3SnDjV749ctaQa64UWyjchvtSpcy7fvY9to4Nb3xPp44iQ8JHVzfxdqcR6VA7oJLv",
  "key16": "2TJtzB63KFMrbwZgVV9uuNsWtFytbJDoBYi8FheSaztyyFndtjYq2WyDrrPiHhJV2tvUwN7Ms7zmiY9W1rYPM2p4",
  "key17": "4NokBzCxYrkzbcKeeXWsHzMB7Z4DAd1s1ZDVUNYVLy8iRnHc9fqrLrTCczXCpRxuSG374UGMfSnhzV23M2NBFfSv",
  "key18": "5M9zNSgAwP2MiZ4G6Chnstqj3RiqrHwY4MrJpzKh7kooZLjGXrmzC7NFRXoq63UzodCrq3M37iqJ53Hw66aSH5bD",
  "key19": "41b8PJvWDhezDgfVaFPwvjh6uS7yNYPY1B2dmUW7oNJW76PMEMRTPmgJwPpYyMqDmr8PvSVHgJQDDXU2kjn3Aemp",
  "key20": "5jkZ5AXL8adNMAHjzydm2yWQA1D4XFnFex3JE568beoLTQDK2ZNLQQ8wZ6DmBYYHWHFXH6VnSZzhhjt2VDjXPUD2",
  "key21": "3tMbprK5hGkTLc42WL6bod2F5kBifa7NAgvvh9Lnk5JpTia3k9AAb74fdKcFgVLKXBfE2g24yc3kKYNGPQcT28ej",
  "key22": "2pg15HK3tALHntAHvdp3doiU2fXGLZpvVUHRpVVsgJmUmNqD2FsqP6dMLTwyyfXwoGPZ3KbUcegfoijFimzDP41L",
  "key23": "34M2CbTn48seJf8CqWy8g5N69ejdnCYBKF2yUmnMhHdAzQVF86UHFdXzo5NcxzvaqZke33ZKrzcdBGWDhjHtVvJU",
  "key24": "3utXzPzphTuTxVvj3D3gBHiQt5QZknH3PYiehazsCRCANasgyhPD6r1GbmkL9pSpJfu32D7wow9GKeGN9ZhsKpCG",
  "key25": "3qLvJEcr9pn9fqhw2iJf2rbjcBbFniijWrLieN5ggiC5FrrosbLkysGK8a6ZXb8Xc68SZw1bbqCPUxx4BukUfhbJ",
  "key26": "2E2QkuLsfi6uDeCr4HwTqxnaKTEF7kbLg6iynBRms9YtZvKUP7dJCGQU6XqBarb1kW4TxfnybFsEDe3cgPVuz64B",
  "key27": "5HG9NciPGwKjH9FbdiAXzrMFjrp4DXjYoDirbqaaMmNy9fbWJTUWb3YJukxJg2G4vyVde69Qdk9Q1CNzDB9j5X1X",
  "key28": "3mEcqHE914AEMhhbhL3Z1meb6i8fFfDo9L9uNfzpM6q9Qs9kqiEjoaN7rKo9paSGvXM13F27hVwveqXxZ2vJ6fo5",
  "key29": "2ScJQQrZngVnPmvJeC6ahA3YYx9NuLgD5wAQB18si2Wzg4UsaHToHrJezBAAUGCKfvijGoZVqqJvJHbapWxvA9c1",
  "key30": "x3mBA2dhU81XJtxPPsdJMyAuyFP1pxdt4amw3sVorqRTwd7fTsvYsgMk87jzNRGeMQhAwL8c4X8wGo6sAWbwdvw",
  "key31": "25qQPNV2xe5Evm4j8QM7FHGhtddMoETg1tFv28muBcYP2FSr6hegTQCKxkjNq4kdyF6G8NFDNhL58n1UXtGtrftC",
  "key32": "tp4kggnP5afnvJeZF6kyozvMCfZuLXhLM7nYzr96EYP3t3VEk79VRVW75SiDeHTFNdVw96EzeUtGnjumDUQB7eZ",
  "key33": "4hZr6yQCeWn1q7kiEzPbGaqwHsU4n8TEj5yRYyrbzSSKSMZ4RfzqtxMiXKsDxBo4DQPYb865dzPxZDJGBLEi22Jy",
  "key34": "2nE7HqKYpFjvzT6cXimfbwFx7FF7bsNJsQxxgnJtD9DnqehxV6zPjMscpvZYHRabfn2KVXazqPH2gMvz8Tb6aANY",
  "key35": "53kes18aP7bZk3DnuvRFpNeDWq16SBmmdm4NiUhiwFQbU6CAH9HWpoYoW1hZDjhAvHVnexmKb1qo9qgNXdb4mCdq",
  "key36": "7EZ5rMibzMLBiNiUt2fbo46WdDwHXbfjVJMFYYGHuErag6u8B9xL4ZJ2XJxsyBXP5xVXuQyTh642k6XnTB7tXUq",
  "key37": "33S8JdhoLRfXpgeYRivG1t2tsmbwKcoKrbYUszBNgUf3uGxLDoRbjGAp8rGwAS83SdJZV2Esuz2qUs4efiBzHcP6"
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
