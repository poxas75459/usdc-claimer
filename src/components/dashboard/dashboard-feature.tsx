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
    "5Z75Ao1r4wmHSn8ZBKTNXabDspCxtfmJo4PLy1PgvmctRRP6Lsbu12z5VR4DcQdHJMdbVoVhS69FUuN1QELEVeKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2HQsDRVoSYfLEfEhmVkPHH1tk2aXwpz34pavtTF5hQbbaRHXDKwocyYoRp3EvYxfpdkQ5wggVHDFXvPwp5dqMq",
  "key1": "3WDGmryg5yEMQbV6HqTSYjsGD9Nr2EqNWZrPdLhNuudzy8Sb4YmqEEden8TkcFdv46nz7B9iTEyxyK6QdGvaAaMj",
  "key2": "393imJAukZwR6EwNZRCWkGu6faUzT5RNmcNqhVHrSup4Bs3exL992y7VfRUqxKL3AgYVX5KoQjuZ7KbAm4U8KLjh",
  "key3": "szr1xYwp25GEW7gkrkatFRAC7N6Fe7LNk9iLAfuUM2zz8WqTyW186LVKxk9D6ygqmYjDdRBt7PJXdf1a7WJkau8",
  "key4": "5ydhspBjsFWZYKtUig7PSV9shrPbGTG6XW3qGqStG8ezN5kUp4mVKPTf2k9RMzzQ76SyiZCRxezaerU3jNxSoo8R",
  "key5": "2HUMwCPAEzi3U7NHadze4QNVaH6fSvdHaKsy8rBZYxSjuA1nDjUd5bZj7MchPtVC8wGaL6ba9GkM1F6ajCwpmro5",
  "key6": "2x8HP4Bdz3cGemJwf7727uM4BmnUAAU7BxdtnoEk4yZzMsJTi4tvagvKvMt6JHTtBwqtbEmgg3297dWwSrznsg2E",
  "key7": "4reuRUtCUGXup8T6vzaWxGPPvEAZVjo6mcdaau91SRREQamvQLVqQ3m1QLYa4S6SfJ5NXgjDPySsUxjLufCWf3dK",
  "key8": "549k89H22AdNeuQD3xupaWGKbnqLinE51G9ZmjgQe3Q2RRLYLRs87Eus5Vd9YfWjZbo16LZF4cFy3K8xoLybWWy7",
  "key9": "41jnREfE4a8ZYLqLLBBRmDSWEyh7RZcgCT4HeRWdoSWyVp6aTXwzgZazNHeTVgo72T7wmMXqUk3JCXuG7v9NJKFS",
  "key10": "eEBPGRSicsZo5YxaDtJV8hzw1r21bdPFC1zog8rcEdywYT5MTVV5Pv6mYsLB5nVftCynF6kvhAPaEWRWf22qYfR",
  "key11": "4Cu6FEKJGjfZU9KNmodGjqTL1ZYYEt5dWXrwthhqaAGXgR2eLN491kkAb39bkQDmF7KS1tSyUSTocmhSyYZNctRU",
  "key12": "2XdQNfkV9GFJqFegFWtwwY2VzcnCJXAKRJULfF7nyWAXV6Rh53STF68wwoRmwu69ETztkExiKerwsdF3UNDp2fYh",
  "key13": "4CTRj2AQpm2XZSoW7r2rZsfQBhXHUNABMV4d1kUTz5bbDy3Dsj6jxM3yAJswT3RpDVcte5gaPHV7zvyhuBUpQqap",
  "key14": "e1kX8ry6ffPG8YkcbEj2MXdMwLCWYh1fDjWcbJm7ov6DFqbGrvjnDmJghhTF3km634rNZ2FfcK7RWVeoT3N1ag7",
  "key15": "3hARLF43RNH7uUT2rNHJKGG2H5bnbWRcg5nHudXshhbyhV45Gdo8UbzWrtNR27pet1eaCHSXdJNHGVUq7rKyZfGE",
  "key16": "5vSjC1EYRRya9oZntCAVLz9AgJAPWqXgGoGA4v2w437LbQuMGa5Zr7yvXfRyFjgeiiD6bajNiGT6niv4BBcBEKAd",
  "key17": "2FLchzAwUJkydeaPrfzPZf995oiXh6emuvg3MXS8PEfU4AwQyJJDAKmu4FLjogRwyQH5Kh2PjyHf2FaKJU7dBJcF",
  "key18": "JW2U18G16LQ96shkBapdsoTwJYLz2zJ5cD1yA5BNRFGy28R415WUd28GWjtj2tEQJk7fojofBNAyNTJtQrmZZZH",
  "key19": "4xMHvS94APmsXrbnKAeeP1u8X97CQLHgATudiJNbrChmMoQqFKc3JgaKmbbeUHHaL5YzbKiYBYybRCiRXietkJPD",
  "key20": "33m3fcyeP8ocj95YVteGSpzfqpVQz9SNhL82JP9oT6NbiaZNYUBLmovRP82hkEeznAdKdz141mC93aEX2p8w2p2U",
  "key21": "618WJEL4gcBrgHwQtNjEDoLuYEXCwb7iituUbw9hWVAo25ThhUHS5B3KWqrsktMWcrGpuPKW51u8iheE72RnpAgc",
  "key22": "253mNo2NgX7N95X93G2D77px2d4JSaRNy9fEgknCsFYQaFZg1dVDrSLkb13pmtp3ygsjPPdiQtui4TECM4HDSj8E",
  "key23": "2pBCe1ZFfwn1B4nv9dPgZNtbdVpi8XdVDhq2dRCUGjm17cEdCzTXR6SyEVYZx3RvNLSCXasYu9ryJZTWe5qmdMoX",
  "key24": "5jYg4DypRQGEnrfELKHMxtQon6A1MxfAVYokRwhARHw78fcwQp2NBrKMza5TUxKyFbm54CjDzTPz7kzrJCBAxfFA",
  "key25": "5w2QkVYLohTHqmiQc8piemcznPAXBwevX8b4x5H98LmRELfTJpxhjqzPd4qye64eNK8jP6mWNUUqRmKjYe91Nj6U",
  "key26": "28UPg94AaNHPGWi6MKVpNzQNqT2Y1W2zca8JWb52nNhKbTnwauwxF9unCzmc6s7fqPAQ3QDPy6VnoUknkmcEDeNS",
  "key27": "2VThQUBNg5YxejWazGYyA3ewED8reaDgsPFqDGoL6gCsULjmcwMrf8fvCt2zCHrd6fp9yYBpua3LW2qo9XtHidbF",
  "key28": "3TBCJMZHHXmXucd9VUzpk8uYcD8TsTccgoXkFsM5uUL1yZC3Kp47SGrzDVaC3CsYWE6qJckxcP9yBgrP6bfyehUF",
  "key29": "7dsvkcRxrDV6Cdg3YbGW6ahXcbY7oa7KA18YaZnMq89Ryjtk2NwEvtJ1VWfUueaWLDecYty2bv66gi87pNhkq9o",
  "key30": "ezmLXp8ZmpxyMRc1XxUgLJvFXi1ufpeFzWAQS6BTJC4UNYNvsnCaN7BLNvQcezU3NCndS6rxFWrifUmMAcoJUwo",
  "key31": "2PjEGLmWWDsAJ82jRgGfBG6p7uVoh7izQ9rZuFGK7YCWb7vSiGNHiVGSgriPi1om2oSDyQUAPvd9XjDxzd6qATjH",
  "key32": "Jvxpx7wmaSP9HguMLfAJXXrUp73TPG9qGefc6metBZxeKeg5DawikE2pDaRsjbmoc1QdhewFinJmwFnzc5gU2GQ",
  "key33": "5VyEVAf6boCJw1rmDiv75Kba8WopnDWNYqe5pNpvAdWpySh8y7MCJfPPcsnka8UnY6rGSHZRsmd3JfkKeMTGFrFS",
  "key34": "buBPkZhop28BwbjyJkQvhbGdFQH8D4zjw3JsHTM92XvbD1y9cxT2gAx1FPxVPrL7PPdKQk5jS7hgqKgmDKLsGzy",
  "key35": "5pdTtUHFDkuAaeCRG6EAweEzA5mFRTXvkgGEAtgzeKEUi67KyYHgusScxugkEXqCQEfkKfc9KMYJG7XV2hGDbk66",
  "key36": "5VQ8LeA7UCCKZXFbHB22cBtXhj6wMQyyHVWaTAwBmE8we9Fot7XFzmgeqs1UTLCG5tAsVe2VKQKdyzQxkkEtgF4a",
  "key37": "2xcLKzySsvGpGbmKard4StedKbVvwBNtyACMQV69UD836xs9fySnGkq9w2H764D856BtQQ59YbS68hED2g8QknAv",
  "key38": "53FadnKGAJQYiHG7uzhhsEsRbbACyraauRf6SNmJQ2DNr2QwikfzW6TgWtLy96wbwfxzJm3BUdsiKVF69LVtoUTa",
  "key39": "36QcaY2iFfzGuoWE2tdHYooMyt4bbJQcB3Hw8QAtpHbJT5yTEFMUhW4fyWDCHpSYnQU2PbYqs3G13oMNoztPTgd7",
  "key40": "4RPznADVpwHMVDdmmmp8SJrCxQomHyg3QzjovubK5jXguxkDh7HLowAWm2CDuXvi8fRpWdxUnu8pB4dvbvHQzGxp",
  "key41": "2Au1FhYNUg28UAZvRzXZiYWipfgftU2Huhnf2Dm2BFNq455SGSwf3rhZTjiuMyT4FYeyQHSqAMsT8iFJKFJLdpkM"
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
