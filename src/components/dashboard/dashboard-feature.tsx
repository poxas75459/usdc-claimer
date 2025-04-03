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
    "3CNHz9DCHVsbN6Kh4k4FbumYSKgSLNCU44xsUamxg4PmEYeXeZsY5txuv1nrEUw6fT85G3KRtzeU2q7r5UA2S3pV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqB7QrSZRizUAuSN3QjF9VuVDUDTYNVDXhVEi9iiKNxtnNV9g2wvuvNsKwhU9o32vhT658kf2tu1tjS2rzdNcZZ",
  "key1": "27Aa3U1BGDNX9TKYZhY6mHJtJHFAGjy2v9WEgHW9fd4yYj1wcSMPr5a96Fb9DxWniLMqgdddGLSKzUVFK5S2Cuvy",
  "key2": "3J52DQ7UsywgXi8V32KncC9D9XyvcGm4Bb7LuGpEts6tyE6ta2F5T1bWPwxo4jLQhKDYyrGn3STUxJZWSeH371Zg",
  "key3": "23kS6PFkUbdBGtj9DvYB8yMRdbKVqTTpKNLafMUBqVTkYv6ULGgPNMNLYNC5ZNa3QFUAuiETv8RAdXCiVc442p9R",
  "key4": "24biZHu4NsjoKTPkeCAUUi16s637i56NNbk7AbJTJ74YpzAD5TEzg5SRShnGKuw9r6b7jGYxEfm1Crw27SR5B5Vx",
  "key5": "4bkYyVYtC5x3PAzMeSUhWiL12pDmJ1gi4YZf3qSs3qo8WwTjiytMyTvPkMYw9oJrv6YSuBwizxk1qeBY3w3qMCaX",
  "key6": "4mtXTkV33kJzW4pKVc5vCkFmKRWwRxtrPcG5Gjj9ymNUsMgLtn3WosgBpbJKpGgesVGNqGa5TfG2oRu3W8qBpJC5",
  "key7": "36qVkbY1NCYhrUKyWdMji1L6fPmgyZPq4PauX2xjFTp9JAuFrPnKFi3XNsqRJAz2yzHfY2uK4J4KJeSMoxngTtN6",
  "key8": "2tFSKck2169nSjnLeyBZ2r98wp1v3iZdw2LWJoPouXij9BW4FgQR7CUYHBxZQkbZzVA8mCwq71ht71j2wbvALxTh",
  "key9": "2zdGyd8ugSh8t7QWSdHEk1KudiBUk72j1YC7KkFSEqieKVATDHJ6HGqnaV1pMBdx6QRAzAhMces6dPXXCzsvKYjQ",
  "key10": "43mhJjqV82i5CZaGcbyjcnLtuC8Bj5sfcpq5mgNXdF3pVugqR7HKFEMUrTYifhG3yYbpehS7rczMovEAmArdNVUB",
  "key11": "4Q5Mrykeyttj77Ada5GR4YQgnTdRr8t5MuTuNS9rTwrAfHrQfPzNvnWcRNwc2ZAiqWW1po1AhHTmTfcjkub4hpfp",
  "key12": "2hL2YAip7n8JVmfq93EtBsJrMhedsVaUousAZWMiBWytdL1yKd4BmVTjvM6AGLSai2wZkWKwmezpoyGPusidDyen",
  "key13": "2MQ1LRtPZxtDsu8GpyS4rdYNn61PhgSzjtNUSbF8pPRdr2NE8mGypnHHYMdekeXMJ6pGTTguBHH7kxZ6JWUJrGtf",
  "key14": "5btzKYSw1BT8vThvLHSShcEj4SBFCSSgc6CnrSefSFH4HMHystfx12VyuifQhAKUcno3tEASoUJzFX2utm2AAttQ",
  "key15": "5eHrKC6Z6mSDG9ktHxWe6Fjhha5g9QGZXWaTmEWwx2xL4c8fB6kUH6wwngdh8q24bRR1p7z86ubLN3NvMvwnpJta",
  "key16": "5Q9GXjDqJrJ8dLHXXrMAWGCKAZHS4HDSYnAZfrs1SS8JjrMre5dQS4KqqwcWT42gc1hzMsZHvPqTrirgXL3J7kfM",
  "key17": "3LByjrQvbenEu9Ves53nRP13PTwVBG3Lmv2cYCbbEuWKsjccE9pQTx8tnsUVVWELP3fVv61ZzJ1kmEaEZtUFLW8E",
  "key18": "3UvmYPmHjMnLjLCs33VEPu1uhKHkpKJxLpYAK3cNJGNJZXyoWJqwbe58yvXegS5RRdEmhdN99a5QmPBg5aDfvHjg",
  "key19": "3DMhbcGirvZ2gyK2dpRgvS5ExLr8aBnTFRvQZgBxQxYRLo547W1NiP8cjk2fLa772Ss8PUCkZXPTnuziwnTRc8KE",
  "key20": "2R9PzuTK4nEj6hsRHmK2wUyAgwiDhjpBigXfkD8em3iY2u2Y4LXvXZY8P7yr9mqqXtjrKk4z6ipCPGMYQ3zxRsgt",
  "key21": "5XBQRdm6iC3YaYHabrjAUTXAz6tvF2WcQF1hZS4tv3xgVEukyQ24EXkHybExKSSTFbuR5biKMohVNrLvyoUwSr1B",
  "key22": "522pzxVZu9tgRo86kdrummXbU8vkVToyEnkG8w3znbkW2sai4M12hgvctCbNNYx6Hvg8r6mpsNykZQNZCtYfTCvW",
  "key23": "4PkviDG3rrDpJeLF5FJ9vhcFHuVveAM4TzoczT7ZcneQXGUEGJ9ARXPDn2xgpN5a2BtubrnHM4C863FaHszVrzvj",
  "key24": "3u4wmgVJPz2rbn4Z8KUA6cQ1ouVbTzhN685TN83PQmVyPxK9NBtsRy33gPf9egZ7taYDwKfk8Jux3FcfAApffW4m",
  "key25": "41za8cA4xjTGfUMGWDrFa5T5PScfauPihcYpXb7LRDetV17P2QqDiwCqVceEifSFCrBL2sGeSndkGfv9ZisixRaU",
  "key26": "234wEzZ8npaDjTr1BfkQWGY2FysyAzkcjiEaz3THHGK6k2i7w6qgPQhL513yksTaS4SLeZdHEavSUdDBnj1SUTLG",
  "key27": "3m9ooWxm36pa7Fci3UiDGGWRd2vV7hnktfzdu37qWiEewWhfESxCTcFfJSZNDLXPSRMqNyLY81moH6TxYcVWJqyt",
  "key28": "3xrjKGjnFQBQS8kge7ugbbcHNfczcGhJb3nzCCYJRZxbcfEick9pB9qL1EoHEE8er3kyh2f1cngyiTQZUbnfGNFv",
  "key29": "23D341D1CywTutj8547r6MGc7YQsRxppBK4JuDj3PVfPQXtSFrRmggnGKY4pxEFhVHAUdxWZw2PseRH83ATN6pJr",
  "key30": "3yvQBs4C9fTXBcNWTrp9Jeh38bz1ruNdsJ835sREtFCySSf7p6pJDKNAxgwLDxLCraaxk7uBHupVfbwjA2LRZntz",
  "key31": "RHxbsm4UgUTdyW2JHPtQa3zPhtKWPSEtvs1g2P5qCRnWFUztDp7Qyp5NyWWvXHiiS5Eq7GKigpRHqLaGY4nSqUm",
  "key32": "5FL9vyrhSC9VwCiW1ndA1Nn8mc1ZD4PNGS6Wtekn3rEC9SVn8SPNpKQ76dv2DdjhoT7Zh8sJFTHy5L6hpMLRHGWG",
  "key33": "5AQjFrk693Q1AB3AbQB1bDeCNWM2hJr4u9RrWZB6tL1i1guycNnQY9oG2BkEZxjeBh6XUfnVW7mQgEos4Essq1Ca",
  "key34": "5Piv7djBwETsLEkcLB3LxVnEwJrMH1zhefYZ68s9hyT9Cy2r8CqwNXwmnFB1tkQYoqV4STP3oFuN17otFWz24CJT",
  "key35": "2YQKTxnfPVrjCCHBcqoz5cLZbYxzDRRmpFzCKQ3kSsjnZy7yPV1hviVqQqeP64MvFeDwRHpabMBJRvJPLMq8Dd2f",
  "key36": "Z6pqAnwqMEhErDoaZE4AnEW4uXhgxaXywAYXB8SBQvJMaohJdamLvQ1ptGmcEJJjQjYquqwfipzxjmKWqwBUuLy",
  "key37": "3dUT4G8FojcFih6pjGf8c6ST8kpQkvRYNewMGqMa1zFuu1DcsXKqwY9J1CDjA2ucrYUtSJA8GdKfGhWAfUXdNwN5",
  "key38": "2WQyKk3kBaMU9F8pdoVRk77hBLo1g7DGLaYkwzQbfzAVcMwRM4BtpexcismjLWUXx59vCX9qdgaUmjLk4X1jPx2M"
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
