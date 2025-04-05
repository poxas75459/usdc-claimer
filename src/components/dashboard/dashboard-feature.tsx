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
    "JacvW4GbHZXqySYidEiZFtpevEyv6Bxf7T8Tdi8ESuz4MndqBEahzyu836AoXgS9SZTVHRRVAdVZ446i6bWy9YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gm6xto1tzUMhcmkMGmpFyLdBsNNPHp8p5UgTW5WgYq8ZtwVHTA18dNF3uEz6h7oeLh877fQ8DBAxr1WfAAZxd9y",
  "key1": "WKzaniRAN7hagUZVAb4o2PDhbYxAre9q2WEuQbMYoHMsH45UYuZw6suZEECHPnmXXM8W2Atnrc3vCA22fDnq79Z",
  "key2": "97uyAYMGWKf3ieSw8kxtNhEjVqdie6biSCW8SZ28mPnDq1YAf2EdttmCA72UsVh3c2rMQyqsmML4XJSmpmRp9RQ",
  "key3": "5nZv3ggqB5Yyqfi1nqKDwyQydFaaoyZJcdxVggZU1MpQYEF5PVRSJ4KY6y7X7BBKP2kLQmM77BWcFaCeTM6nKwgF",
  "key4": "4vtet476rdG4GCXwppdKcyYToi7JU4ewG2HaWyZnbnr27ztYb2tY6RkyPq5fPMY7UQkYoV4JABHxJLVQNPtgxY6Q",
  "key5": "df58dCHPVp48ieGVUbEidfoQewzq3tXTrMSigg3EZrFbkUBe6Qth7Bdc74m7jNCoZCD2DSG5KQHTVWBx1GdgVtv",
  "key6": "Vy2pQMxhpJoW7ewJiQb8bCLTerfCnwwW5XLVVAaTkce2creVcrcxdkUDZZQMnJNq4YxPoxFLYfZvpZafNzs9H5t",
  "key7": "3ezrEAbGthxhyzzfFTggdienMj4is255vvUc2B3Uh7m3EBJpqKX9UxeVQQHZGpWErE458vc8k77LJnjUT35HXfLz",
  "key8": "3ZTqy3M3mUWHpFMzuq9aZtKo2tekU6AXiEo723bgVsm7BEHPq9tb5mSL4998SXjpK9GxePizK4SaCigMtGxud4LX",
  "key9": "2g5P5oub59A4G1Ux1FTs5LAdvgdrbY79jz7G6TxV4Hgsi2u2q3HXwUpFbiHLZ3rM1ipMTGyr4wogA8cnu9ENpLoj",
  "key10": "5cCG8bHiiUknfr8S5Ckf2jZyKoTdYCfkEPksZfL13baDgWxNxDp7LpyqJ4qDTutNRuGCKe431iUHAXJwN2JrmDdR",
  "key11": "QddCdr9dUzJAUvkUoULkRh51hq8PbYdRE6p8scXZrSnFdFQkWAUNt9tkYozWsHidArSUKRLqwoFRqKZBA2MdR2s",
  "key12": "5rJDKeb5Ab615UUnG17Yx3xdFyEWnANwStEHsiSKPNGEkNv27XtbQCCT2cmWuBpUgMUnfjQ2E9nrJspXe4V386M8",
  "key13": "4YjTAxBB2Rm27vP5YxmhLyKa2CLMUuEjQtKPTSwhpSfA7okDBjA8hmuErHiJi2WFF4MHw3ozoWk6x4M5wq1hTaV6",
  "key14": "4g3mWjETsr4boBKx9mg5zT9qxkQxezzJbzhswvwhK8E8BX56Dsw6KMyRgSPCSLU47LiskTRQktbqMryeXetyHiw2",
  "key15": "3L4Wdeda3wKsEtgAUAwm8DWcEcGU2mfZTHWLVVif9zmogP3s26oMRNZPi7e6j1do5KUsWqhfx6KDXWNiKcPk3Cvi",
  "key16": "4KtuTe2vCX2jB1yDurxQhmdDiyUzjSJJ7F34dPjsHYRyGZj4gNa7dmZQtjNqgZDufncB3Mqs5hvD2z1VYRRVVEVz",
  "key17": "2dhaLmadmM7dJ732ngQ612RDsgMqyJJJKU1yKu2LZ9wh9ZavJ8QZejNobGJeCMrb3KXVC3N1syCRdw46GDspFxyK",
  "key18": "LT6R6PmEsXj7LE2KGaBcnpvKN7nr4VMpsz6cQgCD6kXrcpxKaitf51TnnYyh8Ga83N5Y3m4BSU7ap2stptzoXrb",
  "key19": "5Lc18LZG7YhMhzMx4RdsP7qeezW2DjiL4gyxeRTCjwymdM9ct8uoU8VZFDohCeTUjgmRCs15UedE1egd9cDqpcyz",
  "key20": "qNY3s9aM4p4NGjHF4PoR78UaE43oxkuZLthsCuBQFz2gG714Q3sfbGhCd1b7XZFn2DBrzCwtuw7GFkqi3iCXg4G",
  "key21": "347oeZbQQvrNrd6nWgi3NaPNic837vWxsnSvyf2HeNDuVDr7awp4H6dXMwoeQfTsL1boUqc8GtXZV68VesnvJPQE",
  "key22": "41RUepQLmjQGTZNRbh6imjLJB9U1wm7xxTyc7gPJtcYj5mf6HcAi8qcnkU9nBtTzSjn9EDxVQoKG1Z5T4DW8Moua",
  "key23": "3ZdaPVRGq2vjySKVi9URvnCRGMwt84vQXByUSmwJnkFbL4Cjer7BuB4wYtsBHG6fXmR8jdGGYRCqTsLAB7fD7bwP",
  "key24": "ZGcZMwZ8M3n7dExbdPmZjFC4Zcz5KqYPmF8CxemJCmZwsJi37ocRYBbiDHR3M5sBF7da2pkKw3d1TComw2NbqMR",
  "key25": "28wFFNsL2y5PcoREgbuw81LLsD48uPikzhURqs2HScbNr13AdYbGoL4hZsn4j3ab71Abfu6NMHDWL5EKYwxaFYdB",
  "key26": "ixpLnBCCV3LAUHdf5tCKKpXLJHeB2C2aDYFhyHcdi4kioareFkvpfNuokY16DxUG22jpPGMEHrVpDZKBnWK6GqA",
  "key27": "2ShHwnG6px83ZgPBu6WkQuf5RDLmaMazMX1sjb8mwrQ67mGSCno81dw7ZxCEnnSXPjuwmaLC2ZAtBbt1U7Wg5UJJ",
  "key28": "2btKsz5JHFK72ffUaM78aVSS3UnswTVkoyLJAgh87Z4q3dQMvJekFGd381EW8XfH5KhMpw5fA85m6uc7PzTreW9R",
  "key29": "PT55xSszWwsAYvRkoyJUzynunPge39xaa1Di4FeHvQvDyybWjJtzdosCo2XPBckHiZmp5ZpNtKCf3FJWYhXFkDN",
  "key30": "3758Xsn3Qxkn3sNSzPBpDEbpH1s1FVibkrw7dAZQ3U1CgW3G6hsumgRy7F12BjgSZgRL8ECBbmiyvbY5eHnzdX3o",
  "key31": "2U1wz88Es2YvJC8KCn6Bp8kJDhSkY3fxfb8fhhXPtZTR1Z3QZ5RiT1837HA2igar5aK27YmtX93FxMcZGK6proKW",
  "key32": "5je4SaVz5AAMta3gqePWUoK21TZ1ifi6fsdZy9UBgsRL5CtVp1s8bJzWvq8Dm8VtLuVW3MhMumeewWDzonfbs4kc",
  "key33": "32TEn3CS8XR5VFCNvm8SEpob7Q7r1XhHrREnoMKgqr7Za9iZJLbGBJmahskbjwuvndWzv497Bi7dMwNnURorx5gL",
  "key34": "E4R9P9XcdpMAD3iLZ2qReY2bPifsR5icE5af1HQtoBxL42HxTv7VtPWwWDgccBQwfCLDbUhZZ3eXzteZJTyzWhe",
  "key35": "XBZcXu5FXNA1VZC7KCYGuduphXrZaYrMWERwkSmHft8vJR65jd4HBL3CkyGHieg1yrkCTjCv9uN1pBQ4gARJ8Rv",
  "key36": "3ekPs4PwPQda8R98UVi97aEh2VXqyKy2QVBn1YnPyAEpNW9us7nBj8T8nn8x1seggqgrcZ78W9CefapkHD5Bm8Q8",
  "key37": "4jK6Wds3v8BayKGjuBU5e3DWbstnzJ9C3MnhH1UbCQNxZdx6FkMgGoFrfzKWDwreaS8WioNPZ1j4PHPerZTRwiRc",
  "key38": "65uTDUv4rNSc16ppRUqYE8zPCjqvyAyHgcrWx8XKBojcbqKwjckjTyanazHs548ff4n7zHhRbh46bMHpxw91zPCu",
  "key39": "367WPbAWSgBG2tp1uzgGaHjVwVFVvyaQThMnbSScq6T9JWQz8XsHi1J77dbcFZM7GrZHT8XNDHCPYJv5XLF39RSV",
  "key40": "3oGLEGNSxmDi6imqnxEjNDVrcUb3n8XYrvVASZd4v4dg7i9EYxtJAGpXr5uhChev6y6zsYTHfMuCR4hFq41XaTuu",
  "key41": "3ocSezeMfxkksSXKScEHaFUAccMCYtSLHBJQmx7pvAZzH1EUGfMVCTTW4p2Cmo9gPvc5WbXgyoQbDD8FNL6J7RgF",
  "key42": "MWaijhpC5nGDuu5vsiJ62ocmanpCeA5qYForf26ujRwtrUrYq9dpyZYbkujvLwSYxUZ9X1midRHqR3RyBDbwUSF",
  "key43": "4x9gGhKoEtA1rfvBxRJjLdytsiFwLiLaiFg3tzXvECLtDEGryhNvMNVUqyjbkhb2N6S9mSspgyGgFJRXctmN2h3Z",
  "key44": "2YMBH6WCbCaPKBmXYp4niiNK1yDV45oJks5mPECVPTYZSE6CGJgAnrfN4HqYThsnbH7hTb8hu7xgH5pVyR1ezTrV",
  "key45": "3v3Jt24n4bwG6rCg44vD5So2i9HWeZUG1gjKr357Q8u5kTEcHi8qxn8MXR4uR2mzvpxSExUEP9KCri5usj62VWHK",
  "key46": "28bQg32vLEXnhRB5gMtZKsBUydd8PjT8BKDFGif8MUWvgdqkvdCnFZHGc1wPoQeaPGpfymEaUhDXFqfm8MnAgdDn"
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
