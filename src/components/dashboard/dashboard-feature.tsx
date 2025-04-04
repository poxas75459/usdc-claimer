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
    "2SLTPpMVhkW5hfg5m69FXmmaWWEUWwemCfKFfUUc4mVtrgRyHN2sVPAVNXe3PjbwfCFGbxLCwrQNpMqjRFUDS1Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYYpUmJs4noH9h2e7UvZwRUvfQbxKVA3nv2kDNUy7vrm6uczvmEV9EkFzMp3fPB3QboRpCqApATnc2tHq3yR1ox",
  "key1": "8CxKUuS2HnQXhdCpxi6HqjSSJg8VBrKS7qfXnszBeGF8HJU5aNdX7UEKBHpXwqdkZP9VKcW4Ass4E1WbX3WjV7z",
  "key2": "5YVzSTDPfYdGwDaxNeWcv2ymQvwpmMwGGBFUnqtUmNdJbQEkSAAbKr58riis8g3eHe8cRgmNQQyHRnAfkcSYUDs2",
  "key3": "NKv3D9tqM3f7mNA8xW4QK9b4gFtAfZamgnQQb6ki99s6xACzUQYyDBGB22RhxAZXuSvGGAp3ranyEnY5Yf4QwHH",
  "key4": "4wgTZ2qWSj6dbTcv9D3C2WPpc6DEmsftY33v3MkdSyZt9FyS6Jjz8str5JkeCeqvdKPFsJ9YcdXmhF6GgYgvp7Vd",
  "key5": "2QsDVust4nEv2fo9FBkv77NjduUXBsnPYWT1AcCu7x1gjayn8ir8gyvnQDmnm5J7wqs4o6dSjZQcWsEhhEL9NKrM",
  "key6": "4jVfN22UyVkmchdrBQ78XonStX4gMj1upD9cYQcizFg1cToFfgymD1PmVjV1KJdKeF9X6tWgeQuBdcEeEUeMALZP",
  "key7": "4d4qrVUwXKqo1mqSBq7u4hVQz6jDYEnnZbCJXmRg1xitqqaSEW6MMZTuNjhfh33E6bW8miQYWzKqNp9Mx1Xu58wp",
  "key8": "3RKZHbSsALXJpBgXbJPFYJmijfB25HEadYrEyJ1VmLkrdNeqHQ6dpiDKon4JgUwtmVZ3uuoxiMYmm3uhmruEa2UJ",
  "key9": "3BzLfeyf8p2fmQbre3Efc5PQ7xi2TwLGdyoSoegyVoe11nU9DJQhT2seqYAF2CFRCS8ZbrXfCw36jFPBU7ocXwRp",
  "key10": "2tLzdMgqmRRoyHqdagetSeDNLiNmuP35FrkzUWpz6U2599X37t9DRw9Z7i4Ws2BiTK8F6UYF5b3N2CUB2iAnchg2",
  "key11": "EF9E2A1VKECs7Lz7Zd76CecSTj6NVZBsEWn85baEZkikFqvyDWUhtFVcucDZPX7eyikkrQJU7qA9eog6m6n89gj",
  "key12": "3R7Yqr7nCZmAonsvKxrQLP4XU7v2pmE6sYHJBTAX2Cthy6G9Rb1B9iqfRgbf8n4n3a8VXVDmtjmv5KKjHzp1YMeB",
  "key13": "tRro9egpPh2Pivvu45L3Kt1Tpa1rAPb7h5YNXtijYCE3Z7rcYFqqMZPLBQGEd3wp48YznDLAVSyHZvkfyK2s3g8",
  "key14": "2cMq4b4nuLY7U2y7YcQyrJZDGRJJN1knpv74mrwwCmJE4fnXvoTJJbkEhpvcHTd4y1RLLgQX49pybuT4KepxsWcZ",
  "key15": "5LHbND39EqsSfYddrsSPhY2Jg2aVz9EAqPcTM54WfTwnDCFBYF87xgo45MGyceNDeFy24HdZgR9W8Re5uFgTZ6BV",
  "key16": "hPaNUw8Zer3zFKumcoeWreF1ifNjaTVc8DiAzhYVFxkmLU6fGVY8JL1CQQdFvqe9ChKzxMi5WQ3tk1CdrRTdxcB",
  "key17": "RYHiRVGnoXen2jg2ZXaAUeG56SEsstx14MKj7p18ZsYEsdVJM4BtRuBEyvC6b4aZXjnrhC5WcPeRj6k92cqAhK1",
  "key18": "28gzEZihzysDzz3CWabuyVxYBEJHRLRVzFBG6HS77fp3DSuz9JJBfnfzwHnZyVQGXtLeNrQWQZXcgP2sSbtZYQap",
  "key19": "pUEciaXxMqAzLqJGh1Vuy3X8YEbiZDv1HoKdAy1EHL3gZPiq4o8KgXa77s59rnc8VntxPgGyT3CCVeTvyEyoyjH",
  "key20": "5fwy64ZD25N1nkBqth8R4pTLhjMjr9Fw5ZxSVLbGZ8QnNa4NDogekydtQ39mANtSUYwbwqEcATiN89H58zziAsZr",
  "key21": "3CasrAM3JYmyHg1GtwZfKpcnCPKToHQjUswV1uLdeU6Hd7h91tWqEJCXQ33LtVfdC28gojsx1d9rKuGPGYjdB15G",
  "key22": "3ae9N18rsfZ7GXZrGYnrXaRAFBgKYXB5qsTiyGBoUYd6RgnBiDDgt4MYXaUfK9A2VBcbnTR4fo9YLJpTArgXP9dq",
  "key23": "3X3fLgN88jNJuv3oxHWbr56H8YybXfPu92PHFZG9LgWmsKRzoJ7hXq4c4XzBQ8KR6J9iuhf1MhoKYyvVZYtAdRUp",
  "key24": "2WLvLPaV8nDBXouXSDgSzE66k1SGVo6Eomwia66yZ7dY31jEK2WPTHjUrDNMHC7rSv7dLGeCM7LsCxZCgCjbQFsz",
  "key25": "46nt1ywQGFXSihynFniCHa9VVCpFYG2UR5H1bg1ZfGypL8Sm65RpaG6W3cBw9Dvqs3PpMvecqr9K31Nyce9kozDr",
  "key26": "W7eyLRb5aKqaQiH8igvMYLxbuZpMGbpZSQ73J5LcvaqpJrMmb2ySQwuCDujuiQoRVkCQjHQJ7hq71kXDoZMKMZZ",
  "key27": "4ENT68s7mR6nfq9LTHGHmkghm73fr54K9myRyqm6DsQFArKN9XtZdmEaQtnMYPoWpR6sb8WEKiFz49EJAp6NQMBP",
  "key28": "3UHQFZpDNNge51dnLP2gJ39jEpfnUEpYoo8Rt7inMH6coEZcrEHdqKdtojqF3JjxEZzbhTmdoJjwksp1m7YgtT2Q",
  "key29": "dWRsbjMP5ZioVNGqqHCsUXBg3Gb6Ku2mRD2WXhrniUHRdsVYRhFppcbozXjcv7mLUrF8SpS8Urb62Mjf8PLq8EX",
  "key30": "4v6MCFJFFKtnJS45XakA2HYwxidkv9FiZgu22hwxXpuCP31NRWoRYcWPAC8Z76DryPqu4DVaGt98JNNdBEdEZgPB",
  "key31": "42FmtjS5skuP4KSFS1N4917MHPkQRCGoA8PWAEKPyuPzPFRaqAXBEEGxMdW6YpPvrzdw7WNFysPUdryN3Gf2DE3A",
  "key32": "5J3yVqcP7iq27X8kdvEPbXvKq4MYd7UMu2iodb7rxHaE37YXaKy3T5GDuEbpEL1jCedWeQ88PSbYUracx1k9pFWV",
  "key33": "5qnHaV9y5enb3RCGzsGKiNhvbUbTFhGAcbx7YHeJYXj2X29TEFRVPnmhv4jpg3tQNZrZXHLr54hUAReAHqcYMsoi",
  "key34": "5Qdd63cWBtkxux3VxF8yAx43DajPguLn3PVKVBzDdgvwCsxufkqSrbhVhh115P25uddtPrzzDzWjupZpzV9BJD9g",
  "key35": "3f1Ep8DecgHyvX8cQKUNgG2qJdmzNag7tgEtd9Krcx7pe7HmBwdHQHg7zZoqvmtqeZsAAYG6RbRVHwYVvZposu7S",
  "key36": "tEJj98c76GR7udmZ2aHmE8nYNSeZdvNZNBjRAsJbvty7navXEjUFNBE7LsMNAJMd5ws6Wqzu8Ja5BhKLQFbBMaS",
  "key37": "2y4he3cXC4uN58F11vxKZwwxNRscoevtqLLXE9vKAbpSZs82vBD7Hvgx74ofYY53Qr6aTxVrjhzeKQaLZqPdcEV7",
  "key38": "5H7u6B7RQKeesLhb8NgB512hAUpBdq92QShtLJDhjqgyfAMzhFkSoPYbVGbh9CmT6TXdiuYg1uxSGdmeVTo3wefk",
  "key39": "R4zFbYCB2gaRb8t4oLtP1fvvgQCqauGr1fuZBL7uaF83bSrNv5sHndHJmyobB926zi7fMaPFS1Q4G9WwpjaWSCW",
  "key40": "2XYmRx4LYsgY7xsjoi4rskEiP8yxQiN7pAGKoHPYBw7W1a5HJ1EeBq6kDv5FA6z33CeoR3dwFmoKh9qTtYn7RU3X",
  "key41": "3zX7LjmiVoGHg9s3MvPqSfnSZ2GACHqk3MH1Ath8ArJW6wSytW8dDHzK5RAeieDUMXtGdjkjpJq2BJwyYnWFs7ej",
  "key42": "3qBVb6kioP3eQVtf9Yxktx5y5HdZLgwmpLzKVyNWJnGV38JeWJixCnmyu34Y6zcWrcJgdJYiy6aMjSBdhPBLwRr1",
  "key43": "4JDcVK9sQBozFXSNJBxNrGWC6BWdvaWbxMJMH7CuxExWqqpP5Rm72tx77n49F7GcsuYCRBQyZ6PWWz8rGHtsuZUX",
  "key44": "3qH8V4dkhxfQ6SSujBrD6MVCZu1o2qoNb361cbUaPfU2PH7YDrkENZriKhhRXmxbHFFMo3C5mdwydvnorWY8hZJ4",
  "key45": "5CfeCt3YGvVpS7WRYEbJNKEYm7TP9j4vBHvR9D6C5iE7qCJAvUsXJ5vPsbzPqswqbBpa4JRY9UYhgn7aGwZKj2F",
  "key46": "pW1zHbRVhc83114nC23KMj1XHSLymsvLbcKbs77NSWcYzzTYKhCSE9FYycRRqvME6BReWLZAPHfCQyfnocuN9QN",
  "key47": "48p9AvQj2933iaSRtgNe29t1Eo12PTZSnzJHW9Mc8q8M1y8p2N8k7vmJkMzjvgywZWs3SAVQmMrznJoEmhy4gu3y",
  "key48": "44EJz2e37f6tbpKVwGrdGBqHXQas3bEyD6BnpnABagij7RRj6BupX67FaBa6PWctQsre87kDBYYedqnmw9DTPPjr",
  "key49": "5sxVgC5jj1MVfpmtbm9kxmpVgffnV3vgMfBitY1NbfDPgATqecHDdXVfDqDocaSVfmhPav4P7d4DT3TgjR6wpoM4"
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
