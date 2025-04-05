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
    "1Cpxk7R4zLomHNRsfMhusWhZ96in8G1rZsFHazbkvNsBLJbneA5FbYukrVFiQhSQZd1SktArJVc96SajLwAtxty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBSsVEMDYDX2KS5sG1teoxtVEWV9Ng9exx9Mr7yMuxAy4CjYYnmmhfgK7vsA4oFcmpG2GHMi2gbwNWoWXy4HgHc",
  "key1": "JDEP317TGVtpMcr6E5zbUFqNdYukQVWrHGQ5b2PmMVfcxMs8dKBa4z9uKnzhag8hBC72H9w8E19QC2r2zxMmGzz",
  "key2": "4LqbqfWecGQpq6mspCNjDXPxrfTMPwmdpRKZMYSN6AwNtvTdjWSxTiLFjMP9axSHGa93RoYdUQPzSSZJNug3S2aR",
  "key3": "3x4HgSyip2ZWA8XrekbYSPNmjAffTiZ9srrsZ7SED8wxNcU9f12PuKxKbhHbr9uzubmjCdRSwCQ4VHmQEpPbMx5x",
  "key4": "38Lqmhg4D2aaTD9zkTTS7Q48ji1mc4FAYVCE1MJMwEh7WtojZJXuiRL5rZgRB7YF4WuvbzWPADAY7Rqq2p9hHENo",
  "key5": "2aYc8kxBBBfeM8CSKeQdiwwr5UAsUBBGSThSfjmC1EjRqJVUGuoSGfyzhH8rJXAAeUEHd7mfMFQDNLatyzQ6J1sL",
  "key6": "35GJGyaaUekWHsnv69KdNFrt4tywY44t87sWC1aJRVxtEn85YDKDs92nQjFJzFasgFapdD6d4Lv2k5mfJnzzF9jW",
  "key7": "2LsyLgMsWKp96VYo5LRujjLFZAT82CucWjgSXpqGdvEre89UL57NaSFm4CiXf65gNkE43DuvyJYFTjoFjsZejBfF",
  "key8": "5DohbM2kjDy2HDrkYzCQHoWikwCRmEgphevPSQtVhvGMj33FpM2444cFArsJDd5mQv8gE7WY4BobTLFhuijQGxXw",
  "key9": "2j433uzaB7X5H1VzYr3xE9btT3F2z6FZvouBbCRapVCrYUp6MZasusgtbFfH4bgvn57n7P6QH7AcHaSo5UUVtz79",
  "key10": "2TR9JL5kKPzjCdV8sYG14c6vcnf6dDxmy6UmxSX6HNVV4uTs5W46KA8X1a4B5mcWDKGAKoRZeRfsA3hKNmD4U9yp",
  "key11": "3ewevBp14mtLbumzURdggjD9okRTNzwXQgsA5w9D1sz531H7t4iPbNgXsC6goMsmQpnUsB5gCcc1Kx7X1Rq6L9FY",
  "key12": "2YdMedbsb95NZnTTn5D4Gz23Ej1LM9SjcooCuu4tDWo6GZmWN4cdVj332FveUhgqUqpo23rokuGGP13sJNLcAHyC",
  "key13": "g6zaJw21go8u3aequRPq85VewbowzGAfLqqmbWs8F2tGnL1xGwY94riz1RqzbUUDDJAbGCThmFb2Afm5NsGBtje",
  "key14": "2UdVQr54hrdp2kotr8TQHCS8GgP9g5EwYSoKxbHXEqdgQLkKtdyeSWZTuRrCwCUMboNaxq47748arz77ARLjXu5e",
  "key15": "2gC6tYJVBEqo3DV6YcNNfSvKPiNxigJ2Ewa9i5PuEuXQxpYkD8s1TaGtaB9QmCxozV9fpBPKVyfBp543fcw8UGfa",
  "key16": "BqjpteXM9L6m7pYE6c6aSk5Xqed7tsU12USjJiRgA3gUCwYDhNV7vWyHLj9RxSynsGTvwV8Siikf4hY4V9CySiF",
  "key17": "4nS13HzMoB2Na22VGyWBMiLm1XNSzVw4dnvTrejRygnFnu29DTyzRiACJeaY9bNGxxFoUjDGEJd2BfAKzVi8xMVv",
  "key18": "c365ga5xt5TjopmmudRECMdEFwCi6YGkE82rEXGDG9hRw3rv3msiTwGmPz3gJrYmkPTjk6SJBjceqzyML1FndFZ",
  "key19": "5ZVskZ6ki4PX32kEiYwaULcB2oC5yHywJBaNvJ1qpqGnHemBgnn3KyTem3gF69m6QQbFyzgMc6i1fTUmfZCEHtK3",
  "key20": "2BWPM8U1RG4FH6bQZ1eLbo2Bb17N4ZEoE59NPqGxsSfknfc95JG1fvSg2z3LnAG2JrYG6w9ATLW6WD6boLmYNcBA",
  "key21": "oBANuBt2C6LbcUoMuiunju836RiRGSjhzyRi1ZM5nZNgF9k4zoMYk2cWSAxmgMhBGSbLmnw19k4cgjn68N5HC2F",
  "key22": "SErph9VV2d8MLcr9oBJvcZFi5hz2UuaomNcCmXuPj26KAhsutiurdgFEoUYr9ovk92uJSuHLH3o6pbgXMCLjz7S",
  "key23": "51rKsYBbjVyYQji4tPbaGc3hnZPwDAsy136t6jwp5SQZc7AtkrQX4N62QqDjF5qkUSEnGKyEVYPGEs2YABz7CfbX",
  "key24": "23uysvoS9C9ETf9Bq6CDAK3zKo3N3EHdH2oFekB43ifKxe9EsthfqqFxf5YtPBjYx8TzRS8Kyig6aqweNQL5goVP",
  "key25": "2pcU81ybAiTueSp2bSiGwqe4su7wENjQgZhGWZCTWYPGW9mP9qauP9iyo5L1oMj81kZDgfF2VthyMcNejJJQFZJ9",
  "key26": "4vbzierUS3fe5wn8f7VTdLDjK6yR2XpovQSue7GqHZJbUC9TLzsjb461oz1Tn3QMrs7jKXc7kM69nDMq5QunJjjS",
  "key27": "QK65pK9bJZ3dzHrYfmKc4qaktihfZq2VKZ9dyLVnKTdJdWa1QwnuPt8yopwzdJh4d7PpHsxnqAr2v3NZjNbah4Q",
  "key28": "5URYkPHGdSwFJT51pDJsaFt6U7pr7TWWbrJ51EBmESP79wK5ER2w8dyAt8zJ3D5JNJdSurzVs3LJNiiFRBmDf9VD",
  "key29": "5rht1JmXDVm8aRybjisDMTbmVDsZet86fk8FRDGrFiHWdLvXtA2xGmf62FWQNfSzGEZvmge3jSykHvdybw123BYx",
  "key30": "3JU98YdHqTsKgs82NGazuwxwc34t8jncp2BJfkMqNR4tuToQLJzg1JbaVgHEF4wapN5BMga93Yq9BTZU7ispaqP1",
  "key31": "2yWE7fPcpZR92YLX43CCyLz2hEaMtmMNfhyKfSnGvCf8VbDrTWwJvDZJfV1quSxeVjkZteYEX8SSLhLk33NTpf9Y",
  "key32": "48ZFRGeSyRfXEfLPqSyB9NYq2J2gS7eUQY3bBhf2pyTTbFoVBKc76aLF5w3pfom19PqV1bbidTnFLNif5VN8AiGW",
  "key33": "4Fk9gXFUBznMSss4wEZYjRu3uVNsTdVSsRJeYGNGMqh9uFwDHKhmANKtznuWTTpfA83BDY4ym7VYavDfv1GZFMJ7",
  "key34": "3DAXYNCDyR61CnSfLH7aJViBYHPGj6S5EkoFPcXaesepqUVn8nWtGYcCT3r1fFkpiKrQ6t1kmgwYduQB8YveETQc",
  "key35": "4kffZ1dF2cjHAt1msRhFTFAJB3pksyLxiqGK2PJAqiDVj1CauPkdiB3DHyTCDNNgKNRiTaw1LTzK6pAwcGL52tqF",
  "key36": "5JTaL8ZHFBgrJwpPG29YD9wLikXppsRTaxiPjZtYYMV3E8yj7rhWcyUhWSh35zEHZoWrUwrxhyM3vNHLmnDfU95t",
  "key37": "4tf8xhvPjUHA4i4QVdthekupAR6mAmthTsuzi7smgUy4Q13S8kdzARCMocgCrDHGatBR6Ykv7nmSHzfvjVPJV5EC",
  "key38": "3kVLzcPxaqyV4mGXQhEo5TCHppYndTTgjFHvnKMDtNGJkjjvVnS4FGYuPDkzwAFsuV2nvkgQxHvU4suiXPAmPbxQ",
  "key39": "RYzhL6JS3WsbA58FZU1STQarpEyZEGxZqnEqvdkJb5pqgeSy3vLuyjbhSqBjKeKQL3Lhe11FtipgNqLqZPzfe7Z"
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
