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
    "4X3poG8yQyD8mgo77SSuuqs2i29HaTmkrUBwttpdYXvdXXDw1cThxQYuX6qTy3fMatYjLQSVeZifGx8K6NgStbi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhThMswS2QcyzsDS2SxZqxBnXXZNchzj3tDhMTsNh4YQ5rkvmbpdeh8v2tSSgQEaT1gs82H92yHcJD56hwF8DFG",
  "key1": "RmddVDH4eCFiP1CpgsGAq9CFfd7Qr2fzdwdLqE7Gr4FBjGWzJkzfnhhLvA67szeN7q9KxBPBf2iA28K4kjMQ9hm",
  "key2": "5KXpcW3eWv6KEpMf3hARKAtHUUAaSEqVAmxXSj5SoogQV8DpLdxUJBxgMKzv5aiLrNH6JhDBZFS5KujRygA1gP7U",
  "key3": "4Uq943cDhenSRwr4SKErn831PRnuo5mvKzCgGB3xA8FEuYxMxVpZ23HpE694i2WR4JgobkvkkYw9XEg8ACfnqomR",
  "key4": "eqEUzHc169j3yyKXH9LMLNC96WKvMBCfvmExMwSKzJJYPhFxBa441CcTuVeiihUFMLcuQHi73SQ6PqkojDPAtnF",
  "key5": "4mWFmyaXmw9BBdXRHwNvK8UXkJjVtAdT6ZMiGQa66txHqPdVRK8v2uzT9iwHoSJ3iXirtE4t7B5eBbAFUrawCCdx",
  "key6": "4Ak9nHUaUoEcJ47hVeNswXfTkH8De4a4HroiCJxUEx4cDY25YVY9aM6FfHEnBTnX91hmdNH6ZirgUviNP5f1SCsH",
  "key7": "29Axw43fDb1xsdLcLg7RYYJE6YG87CDEov6t2YigKMTWcRiVtk6fx3BC4PRh9CX9E6Fnkk2qe7sLSyYJFTajVotD",
  "key8": "2dP3EbDUcNuPLWLLmqN7deTS5RK44HrzrwUiMQkAsuCKnAkBhkVaRcbrmSdSz1uG28mYS8V89SBsdfcMkCYnJsv4",
  "key9": "4LbUi97VSJneQce9YrUrNodaMw78WBDbm568jyzxSVhpLP9qeYKqm8V7uEH7K2KPDA3PGCtZcgQguYW6PMPLgMNS",
  "key10": "y5JDFy3WickyEKJmth19gUy8CipH4YhsdDShDts6TVgpVJENPhq81HbvfAjomQ49wE3ir799jcZQ6AW8hGNsu5x",
  "key11": "4mjHrf6MEKPcywVGb2quBbiFEQntbBjfmqYoMy9gThDQahbrEGmXU5sL4EyQWPzF5vfbxwfsYbLJMsDVUTrJJcSw",
  "key12": "4zadbnx45MKvjpaXpCb6LqSpg9p2yC88DFpHHKDutd3uuaPVVribJEvbVD38RLVaue3h8m5VP9H1Z3ZD3cDmJGoi",
  "key13": "5eAUj7VYc1CdSij8GE4NHiEVVjrAj1PtT5ZLPKvVYtGXdw8t3MHf3AjByZRWmNDN5nkRC3BrJGTiL8UCahZAUQrr",
  "key14": "4474fpX1bgZRo9SDxDcDEig1bh1sxdG5FV9uyqrrbLekBuaqPEo4okXo1ENSzFo2BUZf6zSJRdCYprmQNeorHYTd",
  "key15": "5qkLN3VvUWvHphDJYnwuv4XaBu3wykrvnXoqmpWjfmNHKWkNK9GFSzYzypp6riPfTt6ChJikgnhRkjCAbfPzdgiG",
  "key16": "2v9WTpSybVapF8SE4hyKs69QgYEqXXn46kYJZiZxUa6TWGMFpKL9RSLfijPnsWUZa4hamEUxQtSQYkJoYZGZfMWK",
  "key17": "HKvihTrbCv5b7mh7gNvMughyg7acuMdmGJU21SDxWMtkcVGwCTTvHo7WbC6EzeRSGyAsAk4PT8s8yeC5FyLyj7z",
  "key18": "m7Y7LoPVbnznwvfJFZRNJ7S5ncC7p96sxNJx3AY8m2aTPgJ7VMrPRsa4bvzSaFQPvw7c15Go1z1Zn7EDDQGJEjV",
  "key19": "333gueqUGtK67QsbLmHZHiE7sspwkgFPyZDTWdZpSSb6PRdztwrwNrnnakLTB6TPwJg2Hv1jTeQKmAWMUZKvqX7o",
  "key20": "2MgMWT1xX2FuHnCDLcuVZnDtVKPBzmqfgZq9PAxngYDQXedcyCNBKfduskgUtXPqHhHZSM9AtEBNhQxTMoqfPaEs",
  "key21": "3UMxbypWgkfMuwDzjd7ac2FoM9i6TMXVbMCCzJceuun5u93nWUcAyU7SJ7wib1ELRgRZrp3H2wc4DHVbf6i87gu8",
  "key22": "5u2kkL8cZ1vr4hdouuVnoqB1SuLeYZgQj8FvGEyWzWRmayMcyAfgRJhsz4SCb7pQhryfQ82FbheBcGo7HmpbiFV6",
  "key23": "3xAQvvrEshLkyoxJBywFh7mGYVENGs6Md1dzXYKMqGHpMzc1n2YjfnizdZq1ntaxRTwUbaXMksLWKF5eKfeEMfyq",
  "key24": "5LRXGXZmWHK1yiR5F6knC2tdqdHXDZFghfTEk5zRHSsxQttVvyT7PgEsdHkQe2ahaQt5nF69MvAhNJ8HnqAtcL3Q",
  "key25": "3i5NUrjtRTo1ckNeQnU5LtuVcWKsL7RGX5cHKnppf3xXbtGnFXRRMD8NzjRf7jauwRoPXaj7tszXdcGcxYQ6nfX1",
  "key26": "3YcbHHnYi725n17APuqB3RV8qGgQ4oFvimCYCF65DCccs6HtB6HWxZKXve5fjW4JNYUtX9WJZhBg1P9zborH2n4z",
  "key27": "4vWVizKiHPGKnCtt1b4muw2nXzoYxs7cZ8At4UBN2EVFDrX5mAr5hRYfRpaeJtuvFfPkggFcQeBgp1v4srg6JjXn",
  "key28": "66meqPaXrQ5TAnu8kC8sFHPv3dVKvfroCQoTZM2CxpSUixZsubZhP7HH5TnxcGd3gxqRqVPYNhTokTEcsy6ohvWz",
  "key29": "4ZRVEdtyjq2nuZZfDWPizYjaYvxd6NSoXwuHVcTnFY3Lfn5uVCbo1ZLWwTayCqB53AdKhUJ5CKsPxUGDpVRMdxLK",
  "key30": "5m1XKJ4vsXcKaqkiG8H2EV4q6TzyFGrSbaw6pn8dzawTiJPg88Gxesmuyx5xWx4d6r49oiieFCeCPac3J2TDZ51S",
  "key31": "CubnSi2SLUpUdQJq6hSSKjoRQbBfyWPnY9akxj199zkv5o5EB6VtpJRsz5JkUtnyDcEy1QsWyFuLECbF8r3xp3U",
  "key32": "4zHHLHejf2tUCXP8btT2koM67bGHS3hJhVgfnz6G4Vufxg5CTuEr8UoVZnqWhANiob7cGzeJ2Fv565Gw428PLa4h",
  "key33": "F1U3geVK2SKg33wUzQdoNMpveApKwc7SXCrjxMx11ZFz5gQJMwD9PU8snJeq2pYcGgobEkr9QSrJnitj9Wa8cWb",
  "key34": "9CifVQPfdEzRpBtW6Fe3v5HG73Dbop2tqTVRStjetrAgY2xQVq9wgot84T4Go5CSv93xZBEAKuExNAuRYo1dUJG",
  "key35": "2g9eSj6iVt7Ftv4o6QMHHa4tUDE2GUD7fQKczjPZZ6ZZiw4zPt29rXpbA5isRfgp3tULofhHRrzjQTBjbtLY14S4",
  "key36": "3oqKwXV8fiNxMgXzb4RQjfLvKPELWM6ktuMcRKBfW2vidyxw7nUSjXxPCESKkz57ppBXDzscMxX3uoyYJgA8RtR4",
  "key37": "5KvxJaygUyjPWwtFe33bqLXpD2NFUscxsdE9yWGHANsp5GBtWvtwjnJNNf9nCj48J51G6h9mohE8LEmaY3AerkKt",
  "key38": "64SgVxKbgG2NrpJut74cs4AyWRzjvoBhHxBU6SzihwZSf3WV4kBJMgjWVAGiZeUUhe2XvzFiZhLWT3sAQjLkRuhK",
  "key39": "3W7NLS7Zch3avaoHgvR1FqfTFJbmUK4kqHS44idFQU6dg1R16sEkSd72Fcud3ecrtpR6vs6HHLG9vxBRVdouaVon",
  "key40": "51UuEnHskULNyQgw4CsQi3mxxznr8xknKvBrknfpbd9wU49pLr99J2xkSWSeM4EUy6t9Nf6ahBDs8kXHdxHFZgCk",
  "key41": "4NQXLjqSWMg3cok9zXsH1MQFgC33uUuYoA9193UW65JMhfuMBdkD8Zz6tdY54pNtTRhEUFhpkAX9PtWo1NfitPBm",
  "key42": "3M5z89zqDjUtjhSRGTWx4TawKFXAbaBMkzn3Ma7chdKSf8pq1roJZbqP1iieYS8CYxY6A4K46P2UebaULngyLZQe",
  "key43": "4DCi61pxG5BXZFHhvo276Fhkv5K1mU1hZSrgx9MENbB24Nq73sYJih3vENtxexSs73diZkFRdPVGi3yvjN9qLDMC",
  "key44": "51S67GXHLbCNWoD2t26nH2ZpJGUd8vtp59B4ZGH6LViyGYZ2iRKEP24pYprho6oikEUUCUWn6Ae9asi8RrNaqEbc",
  "key45": "4pq1DGv4CEwYfxTFgg9dgXhnBgomDpnL8Q2MvinmWp7dShEzgSJ63vqrg3PWfZJATgdJDt39A1jJbWbc3R57LJX6",
  "key46": "5YR9fvhUJbj8UCnWcGpmnmc6Czr4fcw8cjAdyuHZ8ereHnPWjREWaRvhBCCJFjuvmc9K5fJsCCq3jNUTZr7CKcG1",
  "key47": "mEeRzihy8vEJpLr31vmhhU2dCtUYEvuVTt2Atn1YVcY3khqpHu8JV8HjypkyPbaBj5AbjvVSro7TYsqWu1ScHgW",
  "key48": "2gAvdZUom7NvzFBNLxEuMzbEHfj8xX54rtY8whomiQLpPFnHkQAiUZ4GenHfF1xkkhhXQNKr759ugKoanXcykGnd",
  "key49": "LGbehxakJbVKo7wRXXgT9bve2B5zYhxwykyg71ZPZRhERRc8vaYPvupUFYdfcqtHNxu3krkr3eQL6z3gJke9kTV"
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
