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
    "3132ynp6aMevhwhBSWnywk4BuQYvkpupfsbW29S8qQwKny7aev53CLoCrPkfNtUpajZjB2qfigA8WkcfmPBjrY8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtuyXcSyicWkKhPy5RnLTvuLpa6HAMWadcCDhx4drR5wEe18KBgJk8qJTjwx5Q1QSpZY2YhiyFQWtce8A7MrVxA",
  "key1": "Reo4RuCk4F1xbpcgQZPS4GT64uHQK1DEyZKH4i7pCJnVV6UzEPmEQnFnUsteJSSR28mbrj6so2kiwAEDEi4Yvk3",
  "key2": "3Cm9SLgt2psZnMzKpzFq5GJXUBi1jnKQ7mfLTiyEjLQETAW3SSPy1vxb5FwwUcPzoh2tCejf6n3Ha37W5AuLxSXJ",
  "key3": "3pxDJ3iQGhgF3vymtns3bcBmCGTy9nAjwN9AZAWxLQEYrBvm1kp33Az4LoCPZtpJ87STRhYxJdFFrWJoqwYuLY3Q",
  "key4": "2iH5AN3p9CzJqufxMJWoXFrMAusg9biJBY7XtoBzHnjtmJG6M8VZnjxYbRPRiaNxQydS85AM1oC2ksP3e9SaqpZa",
  "key5": "2vULzrJV3KtaGfE2QsEw6Tm86QYafAWLJq3Ka65K3R4pev77zDGsxRKQ3XYRwkuGDxbwdacGsfZmYboU82NDxV9s",
  "key6": "Ju2MD5YH9P6t2AuixNNuyHyRiD2GoJxsmoDd55acc1NPDS9dLtxpqnF8GFCc9kFveAf6BoMntPU2HaCEyMSZTRh",
  "key7": "QpRVT8PzjFtMRTCm2U2Ks86jMrd7WHGTFrtzTeWminHF4njNdLtBQ6fL8T2xijhywd7ggq5NNHvsNsdoEPeRTdW",
  "key8": "5yQEyf4qRKC8wyxa7X5uhYuiSUoiiVLapN1tedVaW2KrQzRyLufspmrpbAbxD4YBmUK6oeWr7iKrzpUupckZxPoN",
  "key9": "4GHjoQCoqyoXZj5UBWzyg3irE6vRNxp5t6bmpoWmxMYyihtbGSDSwKuuPwPvFLwJ4se5Urc6BE1UMKRWYJfYq3fA",
  "key10": "2bHVwKYamkte9JQLG97KSyA4Se4h4os8vueeJ2wCqo42BDAhFtxaP3Khb9sYEAjyQHssX88uwJPQ14QQFW2mrHb6",
  "key11": "5HMLHX695pfmCntok2RxTPYfB1gTd1WqjGB2Q7x19JcZ51xUJvCHPzFur1n3gM6FFXUtv3vqyMUWJy2jtmg57HhJ",
  "key12": "4ffCR6CXGDtr4T4dhB9JkzXxXPKasAYQUY3ntJFNomCMmeHytxYxJXvcHQ3Yg9Y1N4x2ucaHFPBQ15pZXSbEv6M6",
  "key13": "3zFYp1q2v52cjmoRzM3pNiHV6dt9ZP5A5V7jJLK8Qmnk1tYB5xmjDLhJPs2EouVSkA9UJTT1w6VDBs1u6jyELNio",
  "key14": "4jTBvKfmZvUZxprnUx46kTzvmuJahiYohFgT6upBi6Y9vnwt27h8wbfxaL9qTTVZfUU5rmxix2NLWbUzTsdG27rC",
  "key15": "4zpb1vHkyTDjG5MvNci4iXgD8R13WWB2U1LG1PNmkaMCSuHqgQDtEqGw5cSby1gCf7HMaGP2owRfwkGfHCM8Nzjo",
  "key16": "4vC2yPXfpywvzsEpZXniZeDf8xVwQWJ8EotXhyzFebWoKFGgku5716RzGhuNCrXSMk8fWJhZBzg9d4aWNCY3MFco",
  "key17": "4ETFogMBKPu7VdUUkHvp6pWqKQLfzCXToWs6yWsY48FAA7hrN2FnJzz5k9ntyp1ZZqHmmyLNp8qmZFGsj6JKGh4e",
  "key18": "4rHUnnCqxhChCvRYQt7nFuahbrRcn9qyJfKh7gUqGiBtUzEWoJ9ypDH93jdaoCdoPSYw6xwCgdiw5gndjLt9Emwf",
  "key19": "eGM5AUnSN8awt1oczNB5zFmxjyYp4EPxu8NiitNQ7Ah9oGkpkgHs5XMhyeNJrhfq3pJW2dhHSKdXHLoEiSEWz95",
  "key20": "3KGLeY8sjBNjSjqf9waVncyQT6QzYGAH5pp5i2F1xPPVo3ECfZHqAAjW5f54E6v99nubRkphRTFX4vteHNSiVKW7",
  "key21": "2sAdM1t2mReMZiUdZDTknMySi4d6L3QXqEzeBrZ8fxjTXCnqaunGTaXGCttCYpeN1jt5vGq5P6XJmSyhaf65iuhp",
  "key22": "b2F43SFXzkeAnBXo1hfFPjCs3oBWFo6MvVhqgnocmvYzzfKFoKF6r8qWJ8gJ2VQ6vrhVkf9rSXWriPoJjHqeNQF",
  "key23": "2jDANue8RMQpNyix38EpD6rnNvaP8NaTd6bbspTnqgJFHGhoZV9jU2CyKjoXrBQjL5aaVp3PDNpsMvcYpuQqwbBk",
  "key24": "353wF2RrYE9RqFDBK7ujuSoXSv6M8goy9YiMHjmdEnJcP4yqZ8bAGGKvimAi778g6rP1N5NJtXWYbfJFsvgg5ZRa",
  "key25": "3AM8kWjqHRL5fDA5Grj3JvWUE3nn7hfFNr37QuJn51MHqig84ZMCATk4uTv1A1KjQq3JGxDhaPz6W4e4KFfg4LTG",
  "key26": "2z9h4p3Jt2chCMaBgMMDfH9YFrtGXCBUnt5XdHCRekG3gMhry7TefzFCmDn9wBonpQLLL8zP2cExvbQ4wxBe6b7a",
  "key27": "SZEjZG4yY8gM4vaaQ5JsvSvuzF2sdcC6QAC2dvymHPZybhMJk1mAFoxhYuyoTri5HRhPfasvt9mUcp9LKhr6his",
  "key28": "dDuVDVhgs157NnURSgwbjgt6idRijYWwGn64RRaNK9uHCMGHMeWqFXHrFHzCJfo7ziWYQfJSNjUueeNSLjY8kPn",
  "key29": "36F3QiP7n9JKAYNB5KgYKPsndTQgrRT3fpAGSSYRPdqNHJAvpKKaK73QpbxyiNCx53kyQfUegxHpjWUHatvmJgRB",
  "key30": "2qs6UDStsSvt87DDLFGjTGq5Q5THW7wspVFBdMy3973nt37gQquFUsaFUgGsSiX2qmiYU48FwTLaxpGqLFKDh2Dw",
  "key31": "7Y3E6nCbZRqVT3G9NHVK177yUthE59qcBtg8eEyusxRp2stsdsGsri1TR8wdjgpEu9WnKL5JDpUivhcfKpQqmzc",
  "key32": "5K8fFC2bXoxMS7VBdCfwKrV8kxXAYZMYj6SnT1RhFXof2U3iZgsCihrxYzETrgpBAT5ogiCMBJvFyDPsp163U3RP",
  "key33": "5FFsc3vwBETZiR2iFtnAS8PAtYiw8y8vW6xGjoGysUfzATFLPcbcfgZsQpSbSiXamkk6Av5xkBE9n6XhGdzw2nWp",
  "key34": "gcP5x2cMAQjLAtWQCjjvDmXFUGCJkK5LQxErhsPBfBrpK3H5hwFrFcP5FdugmCEb4p75SenMuh1nDTuXmmXJAfr",
  "key35": "5VG25DXCjajrZtuLRdCBUNRNKm4UfYZNowPqPEeDT3XWTv4HmxogAWpsQcxLqCbP9A1YKFJSjQw7TXKxaD5dHeVd",
  "key36": "4My41jsgnazijpdLFxMyMAPr2wQzg7sbQJUVu66QEmAKRNskR2ubk8aPekPESwhZSpr2Vxv3PBtAtNJBvFhhpDfe",
  "key37": "5u2mvJcqWud3uKnkRpQHC5F4wiP8zEARo2fvvERGjStzWWTSkAQq1jikyUsTe8hxhU62ZvT96uvKwXQegcCJyDBt",
  "key38": "pPGEFJVrwiBeQAhieUhYUKmqNht1fGY7HYrsVHpayiQAiZQAVxvBC2yd9VPY1kvLWKp99s9tezRKQfjcaBC3FjM",
  "key39": "vySdh7iErmcoB6D2Ehifxa112JspGTq8M86Lz8fZkMoG6XBZ3DyfmwobdwAVF93po9aJ11CJf9Jm7TVmq7wgrgC",
  "key40": "ehETiGVW7W788gCktHtmacsDhA14eX3BLGH1VC6ZeHFrpbbvmc6XZNmk5rhLRC9BjChEPVJ3SFAsWr9XiA7JV1K",
  "key41": "6ytkX1QyLbAmwig1m1BPEQCtGZdgoDEyRgJ6x2Tj2DobP9oc66jf4FVh1iX7XqyVSoyDbpAGu5CPLkUpQUyUQoH",
  "key42": "2UrPCA7hQffdXoTQkUs5vJEwQ1Gi1VCUsmCPgJHxL25eQcP9ZLovAhL7TByKY6CY56bxUESoZHMYam49LY3Vnaiy",
  "key43": "3YBE3xaGQXu43qbwZAKxqfQJSW6dAJX3N1iz5nmdq1TK4nm4vibnYnrVk9EnCa1isnPKrt5bN93dYHFmX33JA6g2"
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
