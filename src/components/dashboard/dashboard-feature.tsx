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
    "5SxH4ak2zjDq3vxZYXk4Wde4Uaoh4U2EWnZ2MUreLvkZ6ujD1JWSumsgizDr6av5kTdsJtePzEQjigN1xF5BBFhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8A7bruzLoGvJczHd6y64aheDwaA8SDMbFxhR8RRWem7UFMcojV3FcgQJPGgMjEfEig6NZ16hoHEef6ghrVHqd9k",
  "key1": "2BnG4AyraxGePYyo85UxEfr5QrfA1Pk1RBwBSAcTwhBV4fMfd15rWG6XtbdHf4f2R3hW7RV6Ah7c7LPyjAF5ugKB",
  "key2": "2F29WxpY9QY7EJMdZocsTjZAUo1gEXkvk3WLw9irnxBnn2ScF4r9Uz8Z4odwuRYg4FeXmHyRkJiVQF4hqY1HBEgE",
  "key3": "ognnPBBuYGnBKz1vuK9cJL2KCNgXF6fvQG6ugCtvRwdUm7PkM1UuFF3X1W8b74rgHv89uF6v7TteeZwa6jenfVR",
  "key4": "496Us1HK9YH9L67JsREx42XiNorQRvBQNnCAvG3JTJHpv8mCEghC7mgjnYvhWKRjNqXxybhw4Kit6QPowsTACekx",
  "key5": "2Ynbm68DuwsEqNzgPebv57mF8LRtHGsGjMjmXLqtxpz96yvTBjhyjHpfR5WkPkYa2rDe1pERRozboNmsdYhF5vFt",
  "key6": "3udQF8ZFc74c24ZLrjVnZ8NRoNwQZWERvTykQnhtib9CLBaVrhZoyb59JWYLzRFvQoiwhriNBvbEQF32pZhNPJ3h",
  "key7": "39p18J8k89joCPDCKaby2oivyKV5dtwwJxzSNap3HQu5Dvw1KJSfvyEptG8ca3k86QZdLGrNZUPXPd1YEr4TKoza",
  "key8": "58qhvKe1NHfoEc6QZVfMRoxoJnfc2Ue1ADzycGCZEHzAvGZpGo6cHZwH8c2GztKqHaroSyuMzX9cDrnXJADNgwY8",
  "key9": "4YXQ15Jr6jBs8j5Sj6dxMWCyCGHEidDaWhzRky3pAGFLUsEtqDXEhRkfQB4fCCrdCgo9tvrBQSEqjswBXNM4TR1M",
  "key10": "3RnN7D7Un73D8ieJqvawnuuPJpbiSVm5Qbhs1UEwhdqvAW2nptsG7FtEUL7gZVw5ESTCLAT8r64p7Cov9taRzdgA",
  "key11": "khxiaAdK4BGTMFd58i6JEd59HoM5BNYy43yRrFAuHrHvn2uYELZ1Yk48Lxn9aaCNuBYQhnSTSdA58K8t27dAAjN",
  "key12": "5NaN7PMq5CStLtc2p8ehkEHs1nZbkgDtDhpTm36chKUnfA4us8pRXMrej3Si6GftLNy8sqXt6q65kcpY3qRCdsST",
  "key13": "5tNx1AZjxqiEGFTLht1J4TjuHyb1rqfjZSGWefbFpgAdrJygYUqRGKoZRss2v6FB8HX6u4W39bmhpZv3rXfPVRUP",
  "key14": "29AbnPPxEpmuHn8jTTzH1hvB5XDK3GnberAEwYbSJkS57bEt344qheTRB5sSURB7EjETx7jTXEBdVYs7LRYLenCo",
  "key15": "GxYe6YSPjCWctrGjWZ5eeTLcpv714dT1qCPHKk3oQ7J3EGrCfdDAD4YXURLuEjTjEutazfFDhvi2xsPnYuXytfw",
  "key16": "5GSeHMR9rbpCNamMN3Qpy97c9C9MK2tpy5PYVPJpWvquJzDKHBcLVLZkVn9xrZrdbeBeJYuZDR8EQNcaqauwCv9J",
  "key17": "3EsZnvwbWtPPnVrPK6DzJL6ZVJWUoyMn5ThgfDy9YWjRimZ5Gr8fi3YhfmDHi7HgZ26YraUNR6JToeHc3KBKynpm",
  "key18": "56Rqdn86QUYzS4xbEPamJKXRhoB1rLFTnVNC3jQxMnWWWkFaCycwERTWLyoFQEA3ydxLWqYH3NckPKDXcRd45bgu",
  "key19": "4Mzauy6xADPePuNmstwTjbtACFLPerLpKybDtnGkagT9CZ9NfxwGVoV3brmrDfTnnMay6cG3qmDUKjWow6c7Btx1",
  "key20": "3Hp4sqS6M4EuLmPCHrFoRqipw1BgA77yHuTeDCSXT9vmPsAk4hADhmD1q3hUR8bRnGP2pTtvY9PD8mCow8391wzT",
  "key21": "473d7ArHHuKUvjPLYYkuCKnwwqVMshi4jGwsKMch5cqCTDDgznYJYLyCyD6hpFYd568ez9SSv242y1Yqsz1XDKkw",
  "key22": "2tqhZrmQfViNrVadf1fbBwftrrwP6ZmNdL8MCUk8GssjrBPphwvFXbMH5fpm7T5tiwrkYpJA3cjbocSR9TYLXS6T",
  "key23": "3V9AsynUWSnc9nU7ecM24gEjfEbcnoeaJSfAMQfk4CLVbmWba8JCrdVg3pAVZL9hTAvMy3JKz7wdcKH8sXPcA9d3",
  "key24": "43S3oFmbW1jrhitBcnwLFCSW4CUvZSUzaDB4bDPEGxQTFNYrtk2tp8tjWvVjfS949W2MUQP9gwjB6CdktTvZS5Mp",
  "key25": "44n82E5EaXbk2oowuEdEWXgCWop5mKHqKrz6T7xuRV6fHxDwmaMa5bAuDAoFSyHxXXMSp7vnj1pYW8ksGwDVDZZU",
  "key26": "JbvBWNsJ47uLTaZxzQ6Q4WpPn4WnkxPdR4d2ZCF1Z87gHmu6UXoGopCnS7wf4Vv8yBuGKjXs2JN4T3vpW8gY9UV",
  "key27": "5BExSG4jFcgR8Pxz62yuf2zSY8QH3YuuEP9j8LHX4PcFowAUDgmyd7zW6g2awj6RFUmTyCEWS8USV7hfvANyXQEY",
  "key28": "Q8oqGSQCBsGhj9s7EqMMGgFyuo2LeoNj1qgPyTArSxL61n8Bca8YVSv42DVdCtRLR4kxxK6HFpR4bARpSPAZj3M",
  "key29": "jtHs1FktaLJJdtsFZa6RCcXPWVTqv7uu7imcUzxtLZuLSed7LcN43vVSVmwFyRZ1Jq8NSB9eecXn4USnMeL8pYb",
  "key30": "3BjU2huLMi1aTbqB8oPNuC6Vn1HA5i1XUz2h6HAq9m34jd28dnEHWu241GR9cvGSJmYFuY75PRJLksqtGDRySn9E",
  "key31": "KaTvAki7aREr5BxyJn3KUe6bTHs53eUwaLgnXFT4LfJuahwypsDT2oJC35vSWV7ZsA3jDNwXjHigBWJzWLsVDKA",
  "key32": "fw6oHiFjLiWh2B9ePjctanGQDp6EoR8U6cM8SXZ1UTLkeW5bTwdeFcuFEtqP4YyK68qTQUGrS2o2Y318cNNvYaE",
  "key33": "nUZXb4ArVFAArKFqiP7BZrxPDWbJkQDSNuXPPVokKD4zAXQZmGfX5AQHCDbW18f1SUhASKctu3LWFXRZVEz16Hz",
  "key34": "4gBCNAnCqT6CcrrdXs9p5RZvLdGycQPAVh27W9kSzS649U7BRqJRMBtE2wFfXySVpg1Vgzp2jYzGwGyZsJSahX7V",
  "key35": "367Ajn6QqXriUFyAN86ipYzbaXchqFayQwZZpDfxHmGWEwpAHBxjV71RMF6q5VG9o23uR8F4avQUAP5wk7m3mRnk",
  "key36": "4fDRxAZhct92pnqQK3m3d6aj9bAWGT5YBvBCn7EtYrZk7GmdQ9a4TKCeHAPqcDJmVxRQS79WQ274bLT2o5oiFTPr",
  "key37": "5fPPGmKKo93fvqudyVwDm1eU76x6QtCjAGCdt5uon4t9GboKaxhN7FAPTL3dRXJZLFH9znpWtC8znZ7ptoGhCYP5",
  "key38": "5ynDhP8ti7bjGqqpzbYtLLcff9zCnCRzXZiWmgmGm7rin74g8fQvCsV9r8fyWaPXov71Mp9XxceEeGSyniJkFRG6",
  "key39": "Y7QQmNrBUE9z5aiVDhmTZ3rBjRBnqpei5GcXpY1qpvLqLPmQU6PuoYtfcReJTt8jdRoGUhL2Dz5xKF3gN3YqGAQ",
  "key40": "5E1LQZX7B1rB7LVrTMyT9ZNCe622EpsRDzxGCx8haErmB44fnVLPjegMFp2u1E9UMA5iH4yVsWgxZjPT3xdC5GCd",
  "key41": "4ZZ4sAqszywMCCU8dqp2v5jTQz7JdsjZeNRU5arPrMMNibh4q64CgdTjtwYU2qBcWhSekawiaKRRTaYA92e1b41W"
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
