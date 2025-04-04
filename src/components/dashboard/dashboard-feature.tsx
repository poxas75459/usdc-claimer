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
    "2ugY2udQ1STXLmxS6MAtvQ8utJZeGVJM7G2CFxiuRYNGQRnjRd3pkTaT4UwLvK4AmEAawtH4B1v9xpkBDojuTLDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTc4Fq6bUZGCXMDgredKaS5Ts7SkfR7aVtXXpPYgwFAfsKvbwbGSwxcJSVfBtqFAUjXvBwz5B1scZ1fDQ77xiwK",
  "key1": "5RJEhuNQH8jBXR9vsycfQc2pNUU8fHAXS5CrgpgEX5FtPjsDA7kwaZ4YtRVkdDaqew6U1z7bX32zRMgBjSW7YgVH",
  "key2": "37KZkwhBpJaZTtj92L7UterK3ed19ZUQgGDenj6LqdXt1jihcUXzY9CcgzJ47F2nPmUnPwMDyU65WdRzWo998KTc",
  "key3": "2cUZvF6F9UVaFKMZCcmkAJSPPLELjqqdeUAjES6M5ufrVLunCFeE5AgaPPBQXsMWWXV74j8rEk4mSKQRXB9Ltn3w",
  "key4": "3GJuCdgZphPTuCMLZY1eGn4PjoQ9RGNt1m2xxtieLSFUnNcrEioJkATEqys2SZw987AQyacQrNSfZzztsMWnB8mV",
  "key5": "5MCntygneD4ZVPMWGmFj8Fp2fkcnaFSSyRZ5pN4FnHKQbZCCHokejtRV1ZSDFUZkYqxGnMM4uk8opmdfvNMg1EGR",
  "key6": "46xQAGWfquFgKSjLkckEptHVEEqfuTkFTMhKHu1XL8Yk43teu59j1GB2PcK3bJetiJMWC7yyrfjfMrYS3dbsLrMJ",
  "key7": "ixZU1kb6WtdzoYWvfWKRZnRa7KJthcHD5nVGkLsWSFBf7E4kL3A8crijS1Nx9ujjuNHCSxaVfSYoujGgpVu1pwG",
  "key8": "58Xa1nKQ4Ba1vzhnscevaWrTFgb9g6w4ov9pQ4T4sFCS5EZgn6TPc4VHmy4fdyWhxCF87FqMnhi3F4JLtqVeTUJZ",
  "key9": "J64WnudrpM5TeoQJFe1A7Lpo9HsEAWTgWHM8mGPWg5VSi5xTzkomhrKUANuVyrwBoEGfdMuE4z5rjckUMHeqFty",
  "key10": "5BGbUc8kgyBfbXbBZ1Rs9jusQiGqrFfEinSH52JEFv9hHJkQYxWKqeUN754ThzRM8xWJscHYQfiVJvfRqDnFYV1k",
  "key11": "4fYZrZN2uGzTu75ibQQZaTpDEiToBagV8SQkdWaG84BBDTJQHY8u6K5rjmfo8YP2DGueMMcM7iW1tUmEGcTpJCen",
  "key12": "5qd8Y223AnGXhhU6BM2oNMPpGm1Rqj9QHB5iEKAMtoB4gXFSqpav42fMYgvAVDhUGcxgLDZXKkYzdKt1P3pv76bp",
  "key13": "3cS2pW7aoQUCabQbbo8LkzEF6952o7mmvQVUdNdWB9827Tqe2vVxhfv4hygsWarTshssUUgYZjxa54CMbeDUik3c",
  "key14": "4XrGy6Nqjy82hwUG1gG8t2PDfcUz3oZp2jLYjuRaR3ZaPK96jB16RV6PRYBWT5vrPaqgqxGUzussaN4vC3cxkXxn",
  "key15": "66nrVZuL7qxPNGZixeNKZp6TAfwMeLocX8gp1QN7cnRaDaYKb86knxbfgmkJwgdE7YG15wd97FjJDoNzQqaMoidQ",
  "key16": "5jH5z9cmQiSgF5BB8YYNwBDXgzcEZ67qoQfLrtk65TwF3hkrvRyuvf3UoS4eS8eomxP6wA98fNMJ6Ese39gwsLQ1",
  "key17": "613xKpsDQzcmxQYMkGDbQgmeFfMjPDyLaLXoPiTnTAoBDtyS64kdeY2syBZYTS1gtxRFS6HqVhNqwQNMgXjv3ky9",
  "key18": "655ULLtPKQnSLe3PwmwBkdNRySweEScHqf6PHxLZQnYxjHtVEtPW4axhqtw8hxLgz2H64QRUTyVMSJH71VTKEZfo",
  "key19": "4gyEVUsrm9kWR7hucv2YNihH2YkgzTry6eKD4ctahZ7yqbDsh5ixTi5W6H7XPVhrWJh7YY54C74MhwgCe4N1EAtH",
  "key20": "2T84Sc1S96T6sN7wUUMoYK4Dh8yZjBporbJ3ybcEG5PHS8Qjjk7C8ReYApeKUhnipdmcXtSxgdh5LvAAxysqbwza",
  "key21": "4nMdgFvZZgmkqUyME21GpXsM6RGAs82s58dFYpi7SE5hENBndznvgKpY6NQoK9HhmWyhkukAwgGPwx5wqHpVrGfK",
  "key22": "3FqQFbKCpm4KWKfPmuARJHZT3SwhsRggryfKMgGia2ZCcmquPjuDMBFVPutNquSfRqnscWy3yLipasy6F9m83v3G",
  "key23": "Fzx876zhyAFenQACAmTQVQBJkNX9xtaxiK7yRJxVMwtsa4duiH5b685DwNaLetA1kwgY2KQupec21rAkGzE6L3Z",
  "key24": "2bofBTF9GVoqPfEtyUdmvCMPwvHkLWHm9rgZiUXa4xWqNUYLJXLzUd2pc5MVxqQPWLFokSt582UoJNN98rmnUhqb",
  "key25": "GkP1H1zZmP1g9djJ1W5V7J7VAfpYEonPb9racVAksf3PkfXJdPacGjoVjyrtB68sao6X2QPzzSgKNDQ7JAr2XuT",
  "key26": "4rZSfpbN49QGmCWW2zy185EDuZEm1Rsr3hnZsCao4XLifHregNvd6LTvxcQBiUGCFZfoof3nNeABQfyjan2GWzW1",
  "key27": "5BpeTFvwfYRBmcN6QMXLraP25WFafswqC7gVHP4WPAz72BhKMdPbdw8uj137B6tH9pfbRownHnV6vjdbnjZDUQMu",
  "key28": "48D4Cog7QacUzgK25YYLhngxZAUg6GTqDtQ9pA6CpgwydP2EuTpV3kEaLiHf6UkGtWPmQSdiLUKKWpG5r4osCWFM",
  "key29": "2q34HqGmDxpQ5VPTZvjzxqe8svYTqKQybFL3PcFxPUPP521bVU9MjQZFwpoEY9SNhwRzcUXkWGHVpvyrzkDunnN9",
  "key30": "5mUTuUePNwWtQNBosTwiv8eRK23gxEhy7e3ynetiJsvHRmfpqczZMB79vxt4s1bNqigTigVxnuxHC8dbWvCfjg4i",
  "key31": "5c5gBPdr4RdPJStpGtqBSbMPMmefCdaPrLPU7Zqiuk9q6mXCRuBrhXhaFGPgKKv6HZ2o1dQrsMsiA6S8oKDApgxy",
  "key32": "49gPguRkxzwZXJWumQUfGYEiZ4Vu1yofRfz91MYZsYbAxWhye1UuWNBHmSkse114hbb6UkJVs7wXamfRW44ji9mU",
  "key33": "5pivaMhmQQt2N6fTzocsPbyMWGZHVw3pkLKjjqdNqNYRMbmvVdCcxG4DmJyJacCKn1AkAkNNpRsnW1SQWzrMaXVd",
  "key34": "64PiPraAptq1UxpCt1sCKX8zT2ZayV9vBconGwu1hRojgSywu9H5UU2RwfQRg8iZKL4ocogJHMpn7NZYhCdibmGk",
  "key35": "128VtY1Mmxsmh5983f8aNHg4gA4K6BtGyew1SCzAjrV6GYWp6j3AQHfwBy1SGXnCnYsfzB5ghkiuMztahV2WhdLZ",
  "key36": "2zpjWMjUt2HvfYXrncSWGcVq8hgGZftqDd6ZVTHS2nEfQgqpNgoogVbxBa8QNCGjQZVBfqVQmSDAxgxrd4AKvMGe",
  "key37": "3fajvcBFodNzXjEA2j7dhfsxQP5zvtuRZsdRxYHXpmyUAdrAX3jZphmx4rcqSgdYHexixC6ws6j1GGafmRwhWYXm",
  "key38": "5DM6XjPewUp1xWX2yS9whHrUEqovjSxbRE2n5R3S9BcbNfF9Z1ZEuuDc1Y7hXhYnUg9efwjhcvGDBV1Ee859YxB1",
  "key39": "3qLPinLvt6KbF9pPngWhBn44CsV2dFRRnJuFPJvBuj8wyZRj9kD43fY5HkbpFC9UAAaXS3JB2SQYDBk46FLQ2ozy",
  "key40": "ZsqPXnLKuGYAeB7UkRh1RuSd23WabNbDE2JjcgwrQcTKVFve95JTVj83UGUa1t41513m7VJYS56jNPjtFDDFKLo"
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
