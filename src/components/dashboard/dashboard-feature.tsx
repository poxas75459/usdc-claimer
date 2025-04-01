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
    "m8UoruzvJHbXDaSr32yavgxSQ1xznyhMSzBAspVxmjuoFW69CGnw6qfS4hFD3ws42MjfwMsrhN4MxtXrA4S71oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUVSvAQmu9B9C6fqsE28yMQjd8Jx1UyHtUSso7JwANWbJzypBUpbn7mM76n58Xn1yQzQXUuo5RfdTk34A1CMyah",
  "key1": "2rJkcx5aANiqbVcomgZLj92ugzRYBkPWEUdX7VF14APJVXWQnT6uqbLjFSKF7qcWHRT6zYZRetDghQvxRh7GJjJd",
  "key2": "LYqHkJtWAA5g8qsHz9rEUdXmgarb9NVjmKQ6qx4MFPwz3hrYrQ8UTkyyL3oTuQZHRuk3miGZuuZ5TVx5YUomiqn",
  "key3": "uyo4mKejU8JWjq6tkyiWrjEGi7F8EECfgdidd6F44ovUCDNeUJczfb95G9AfsSzUmR4C2yo5wJJGU7Y9uBrcnuk",
  "key4": "4YRKqgQnAChGddbDgjE68mzt9SFZUunqjBEi3C9UoMsdy4fDE8wRnh5ULx1Xr8UzKJNJeBqmoCS4zFaFMkKovGxH",
  "key5": "3xCwS5GJbWkkfhfGQpZw7VYyxDd2UknbDfcfuzKr8Q1EnrND981exwUQnPzmakb95ofHXoxYsD5bhSHr5YbTGwLp",
  "key6": "2xtadEGZd4BzLjABXykHzUtKqaTrn8DDh7U5zjZz92rzkroBC31saFqvK9YRWJv688w8KrLG7cTa29B73G6RKiQw",
  "key7": "3BF781fDhLw8cPiuM5zcPMjGgzjtvYKyw1Rn3MB5y1x3wdCN6oaVg6XPFnHJqDs7PWTLmWSfUHKzzm2x2EgNjkpL",
  "key8": "3MjdYKwNBYxd6XHSay7zYKUPadH93bp7KNcts8541uoYFXJ8nC6YtqhpzdAhJ6gybbW9ucFcSwgNUi1QJRGZhoEZ",
  "key9": "5L4R5eN1d2XnapkJQehwun1e5359Lvra6EcTiZtobBMLks6UyhhSfiyjqbTo54z8D4hjzmJ66q17gpZtBGLFpbas",
  "key10": "2zFwi9Bg27bB67izraFSy8aFpoRZJikuRB3AN1rRFs8sUttpfPdFMAKfZHjzPFtntskowebr25J1Mqzt8xAu8WkN",
  "key11": "2858RBKp9T4Knxqh68PrVkPysd5usJ8wsfWRMLPwDZnXJJBMujvPe3NgMGsNEMyZzAJRbRryvaoRJMm8NBoi3q7o",
  "key12": "4YdsAgWgEDT3C5ez3ZX31xcs9m1tCGRkUMYoyU7xdHuoh9h6MKs9ByHGeVyouiGP7HEVvNEVFcXhUnmi3dnmL9DH",
  "key13": "3CCuEDF9AW2Sq9SviZwh2efpSWvizVWJSaEn46xPn698GTx7yRAuAXa99bPX3kuDwRHJ4tXbkoe2JUWsrXTrHaG8",
  "key14": "5s8AvdBqnrVnbpXNAh3LXfpvGD6WS2gvesesAxPfXK7xuiZryRCydo7wdAouPsYPsPtd4PQx63bFfWBckBBic5Ti",
  "key15": "3vPr2mVfzv1Fn7VzYwyEXWaHoCcWdyZQt6qRKFrDos8JBq2Upgd8insGm14eMWUAXTVryoT9bHhc73BoG9jTnCyJ",
  "key16": "4urfT89nc7QY5jpxJEnXA4GS6N11Wb5th7ABDrbs2WjiYGqLaxRb4AGTGc3yfzGvKz5dJ217Vb3tMRFPg173nWhw",
  "key17": "37KnXZecj9kEgEhcPhDe11FNkeRPu2LQYGR9YSPPKbmsVyEzfUDCoRGhDM4Ek95hia57bYoUM4bLXvoQedKv48ms",
  "key18": "G8sCdURT2ZZ6MoXG7pH2km4nncU4P6EJZNtK95WwF5yHs9gUR5QxSgwXb1uQkyRmuB3iQdUKyRhdkPhA2ibaZHD",
  "key19": "4UgvHD9Y3CvYCf8aimcyZQekd8YgWQaba3u2wtiEJPcbHQeGCctSrdebDVTCdJix4Jm8PoimBH1qBtahDX8Yy44u",
  "key20": "29aqGJxo3q9CGoD5uSg47LsGhy5d57AWr12tahghgH6Mh1AzFvafNHk359CSi21DpCuBRSMb6fzimgx4HxhoB4hx",
  "key21": "5a4pNVHDqCQNFpBwFJpkDkHyqXHNexp89pYfCoBgYvZXnZFE1nnMapU7bXe4BZ4b3Wwm4PLAz6LK1RXhJzMuHwnt",
  "key22": "2w1zGzyy5LAZX9rxerXFRg7Hm2XK4CPK1RKTsoARyrm9PnWyNWTHvxAq1vhE5dF1JUCZX1MedDajD8tyTn4qaaTA",
  "key23": "33nasgHM3oAM9XodcTxitGLieWM56C2D69QzkaYme3yG1x94zbvnfzmL4o7WiUPo5rQ7Sgkn42T9vEF5Z9ri8J6C",
  "key24": "2r8S9D2r7EnQkLsz8yQ7HBPV3dh8c2mCCMhTkuetSasnLRYVFGmRtT3qfW3tfPCGr2HUiKv8ukKhTg9eYPrPFz9k",
  "key25": "5WdyWMMdsfa7T45G1nrB3jebBCDTPG4i3yhaisycC3A9G7aZamFuyLRUXNb32SM27vRKqn816ztymGqsSJTnXXnF",
  "key26": "8paw2Yuo1tJ7upEuDNXVFhs9z4ABfMD5nppMbcmBEWPzuZEh5ME66tm5rD1ukHNUhpLqXVg47fA8huUgEV9n6Ve",
  "key27": "2FtYN479ULUwBu3BwFW7RxuzRELesWTb6td9rygxDLqbpJxvVBsmV3ftbGhJeJCbRr9tpapmHvzMXdsua43bnAXV",
  "key28": "5Z1DE2P34g8odqUQqF1Dab2eUmfT4vtDvXo31VzwZhsGDu3gPpkFqLVLwvDiqYsGuWAQ9j2m3darvCytu8hzVNxn",
  "key29": "NNT4WmFQ2p2ubEW6dUSXSFL3YSNG8VXQ5R6gVf2WSHEyLNB6pdhJJ55rG2DK8esEmmGzJLkPefSC3gdAy8azDDF",
  "key30": "5jgjZVJHH7LojUo3suqSgkwgVfwFaBA8f5LPAo2gtqLjhBKLjri2iewKvDgvwwEKJrvcdfo1t7gtQiLLRsYAx4zw",
  "key31": "2NvSsN8ZbYqxRzKgs5cMTgzEkthGpRBRohveiUrY8Q3YUoQKfz1rQT12JZp2WToVJfrWFhWnkTTYnvSazEQvejUp",
  "key32": "52xSTG9uzoxY4zCU3WdSQKuU223Hwd57KoQjoJ4Ao8q4fauBEJXGruhnXMkk9L3qynHmEYrKSu8iW8KLhWxseMVb",
  "key33": "518EoobMJCDRctwyjiktzftfarbxPPSXrUtQqSyaZCqB95y79rVjm2BW4gWUU4J7LL628VcV3rPmgH6P8P2NATTu",
  "key34": "3aV8p9EuzxrthTL2b7RNzHge5P6Eu5Y5QfVbsUctUvG3HddcbkyuWgB8TseEBnft6B8B1aZs6y61ASXa7Hd7aXnC",
  "key35": "5cbGjQWJaCRNhGHTLmvaXxD96KZFK7yj5qV7jruYcovPripbADTmtk6nUNybx1EiHpSnZ2inFmWHHeNFVkNAHGVa",
  "key36": "3nyVKTTp8c3bN63qZmdCfM7Au39xQ2xDztYRvVDppiUQRQhirtFbFWt3Lr4XW6MnVuv5aEh6ts11uGnhTn2WSeFK"
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
