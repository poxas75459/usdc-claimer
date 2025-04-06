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
    "3P8MzbjcZJs51zZg4uEzAUfBwwPhU5s1JzGkWtNs7xPtTKum7owbxQniuc8MqAUbkQMj5JNJbKPmHS3rXpWiaJrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rEuEEs9UHnAUqJX7bj1cyAaNfwKXB5nfprHfbQi2iTUHhW8dJQwssgCj6LVPdPtSmVK6LJUUrSJV1C6TSbMYpxj",
  "key1": "4TeQB2nZnurdkcP5MnceTJjDNPwweoh1V7XrJ9DAMxNt336yqYa4PzpShWERyVw3BcCivcRssmBAdENq9JpWuQ2N",
  "key2": "5pL4JEoSzTLeQtpYZVAj8PPugaXVZ5tJfgv4U3u4gpVFhT7qVLcSoebEj7LAzwnWGmZvKjceeJy9UT4a1vRBEZi",
  "key3": "3ppciZXN3Pc4tJk93HuW6t6zsZNAmnawb5nDTRTUBnwfg9y77iW4vQhPHcx89Jnnbiinjz2L6BvPu6rcpesmQ1oz",
  "key4": "pHYQbVoEGaTLnaTdBpR6HUSW5qLpqL7pRDBe29UxhtnTJyMq6NFyre7Q9CoNHodHdWsirM2QeRvp794ZERLPSZK",
  "key5": "44ySYMxL9Wf9sahxv98CfSbefqH4cVX6MLsQomEhRkrggLxEkvBH4jinucXCb2erY1vGcYzXwsCLH7g3rZa8b9ud",
  "key6": "4ryW7ygfuKutkHjjAu69yB1vUKnB3m8ek5cEbdRVU3xYRYMxrutT57bvEWtYpSKgdV3ajow7t44YXztUVqvVgCr8",
  "key7": "3reJWM9g9tw4SnKqUWAd2JFnjzGnbWTtoeEm2myw2JusZbo7rkWba44864yj7DcWwbyAP62Tf8v3gLeVZJa82J76",
  "key8": "4UCN8MneUEsM1XquUTaearqjXLibWYU8RCB72cgYkicbShNaiFY8KfpY7HXV1D9n1UxKBNoPXx6c2N5ath1eS6rW",
  "key9": "4hvTsc18bTzEaab2duFAn9N9ewQbJvBnKXmi9Sdv7ZZTFrn5cq1xSrKW8nD5svQ7dgUrCFWGT3FupaftuhjxvdPo",
  "key10": "4bPT232Jzs7aMYoZ4wnsS91pTjVMasofaHpnxzX6xXFtFrUoJUTMmxAfBGBkEp4qj7mESJGZwAYkEiSiXha9eZ3n",
  "key11": "2MF6YjHpttg3Q6GzZmemtE6hguCMF7vCTJQioktrbVYNK9noSboA34e9TJLYBQ8CMoaDEK3owANnnAKiomRwL7i3",
  "key12": "4mHtxuK9s8MWJWoaWz6m18dupwXgXfCTu5FhS2ne6j7hfsFez98RpBqbZeoQpA3E6SN4gdQicPu2ke9vwTs2N92x",
  "key13": "42zBzS6fxfpK3aNtB2WriFGAd44GLzQwXByyYCn3Rc4bkuW77iUew4HTsecFfHxyk95xBf862BysRxuRp5NgXoj6",
  "key14": "5kUYms1UhxhTkiRUwkBszK9gDQMpivFVmP9bJBfQqADacgFgLp84xDg8VdtAeVuYLCHPAbFU5VxVdzkeVyfVxNxm",
  "key15": "5z1ypzHaisCdaQmEpYkRbLnLa3Pxts1Fxyer4YRUJMycnruKc4gW5ijJKHNxU9gF5oNJUM6VTX38K2CBpuaWVLge",
  "key16": "29TrF3dDWqgb1LMQRQW9V2HYPfAkiNkHxvd6Re4N43eYhMbDCPVfs4AnfUp9jRzoqaY41y1Mp3uD9Qvc6Te8JBDL",
  "key17": "53qes9y4jrins5v1GLeWojk2f19Z42kQiLwEV92teVLg188aTLdvhsxsEYA7rJzd4n4Md66yYhaL1simjKcS7ZSo",
  "key18": "hwgGzP2nLfi2kNL7KpNqBbykTjDFKHgGcv75cao1JEyvvoGspi1rmSxq1zAm5fzvt6BbjnJx2tAodDNPmAkxkmm",
  "key19": "5UtuEq4bxmKvJCRSTHqPJfgUNedggHwcNgJSSuaoWh8CqUQDQrHPgN1M2qrp2SLu8R9bG9v6mLo4EuBgqGBbDAzS",
  "key20": "2q8FWSUyjJti8EzDjRDRe7dDRX8Gda9gWCoKo3PRxW5Z77AjGhLRfc3C8AyvdLQAy1vf87rGS9rUEDjfA1ZmtkDc",
  "key21": "2nbzyG3XrhkwmxRy5gPyjsVQpJXnXgu8DfJr7azNwm1Go3sMVjwRRsKgRnNFY2VMuDeNNJZqvc5S7VBoNFDStx1c",
  "key22": "ERbt115ofrLihND3gVXg6C1oTw3vdpedo1AEjoSHTuA3owYQDkR5vr61LDU3FtRMkJPkW8iYkwfu6gXz8HHPkZx",
  "key23": "41YqzQxqZHuys5Tp5tW9P65a248o5dgvoesYhohgTzoddRURBU7VBks3TEDB1LBNT1Ja5drGPKfgLTwC22sog4ba",
  "key24": "6RZY1Yk6zNiiAWW15q9W5WgYYkmruovk6LUFwB2x9z8VsecJuJAwzP4w4xzUHsasN2EaAWPogqnrcdEXmvYcoZH",
  "key25": "2E6WXSFwEpo99vmDDQiByB1RREAvihp7ZuT1vd8f7EVrmsVfhbrFhgvZRG7cVRfk1rCVRvBvG7fkdAWP4bzTRGQs",
  "key26": "AKBbRhLSGpk6oWPEJgr2PmSCmBhW67Z45RQbV15s2krbWjGLCN2crCEwgDP77XiELoFF1jWu6TkNhuQuGGAwkJc",
  "key27": "4bVWaRiJB1nT91YHEcBseyUjVRouksHkLpXhC6sr4qunNAfL4meghtc74rkUb3U6n7n96GptKnZUk6DUMGgUVC5N",
  "key28": "5HmyWaJfsDAor6kcAptyYAvwzqqaHYKffHLUHVE5riuG1xZhh92KDwNZJqDCZqyodRN8UwUqbXa6ckb2o2Mquzqj",
  "key29": "DRbwuTaaLseCQYKK7QyKxswMMyrWR7rysFfrM2zh2omgU3iTDuQXQ3BoDNPtQnFYfX6fZj37EXLW8UHZ9sndkQh",
  "key30": "4KQ9ffVhkAX9ELJP9LEevCu9zWuZ9q6caXGWUcBfkNeHfB2r8Pd1fkb6vTGpgASetGe9eQXSuK4RhGWnmnHTruex",
  "key31": "3NkXUgE8Ff2bESnNePaaMedhqSvEt8suHwV6scLjbwuUjfvRgd96i4h9BATqFiPut8cLqxpPcwFgMT2nYF6Wppe",
  "key32": "3Bxz4qgF5ZHB4gppoPq3TtnubTsfmF8tkiqqPdBwhmzX1Pr2QsJTxogXYnyPEiPuyFuaRY3dAmAyw6LrJYSoWnWf",
  "key33": "4NyDd3F3mSxCLf1wWexbNHkymdW1WADfkt17TwSf5qXvnpZuuD1ixhFPzohZYARSJuHxurHZYJoWFRzhpSKDW4Da",
  "key34": "3SmZFkc7Tv4THVmmaiUpTDwQWuaJPfkvGod3F6ScFFYHeuWr4yTQVKQ2Gm3zfX1riBw9ZuVVjvrxHdJq6tsCN6hV",
  "key35": "4zKt7MhRxwV5ohovsET73rPb2rDp4mB8wq6cCVYfdcioZYRDxLjwG8uZwXmASfpuAhoepyok1niNwKQxVZVpS5Je",
  "key36": "5KYQbwogRTCyavZDUczwCEMC6uFbWJJUL4EvM81scF4NEWEGRaRQrAg4yDMyZQmu7uWG4KzuUsR2Sb7KrAzUqxHF",
  "key37": "38225mjqLRZyechUVEHHPJJz24kcKaHpbkvgfT9hGgANigRmLXRPFmXXzmu1AVMtk527f8SpVycLecPaBCudFFKt",
  "key38": "3YzGT5iyFoH6N8jJqSmc3xKDkymhEEwuHKNFpNEKfzWw4Vqeo8n1kLjiK7YdbQd1nqTdST7wRiCB81nMyAy3f9Ve",
  "key39": "2e5K2wL8fmE2LkN9oTPXYtz1YrhQit7s7rKDrj9nAuq19J3r5XvCqMJxdH697HckfXCqTEDNrU5564NuiGRg6Gaw",
  "key40": "2VR9ToqER7GT6Q4ALTsgu9hGMrGyHbrKDLE1Jc3YtYKN1sdeF519y1QYZauPws7zDk6ZcEKvJGRoW8ULXJsJoPyc",
  "key41": "3zDxWWeXoXFeQhZVH2XRD8GehndWgTrdEz2fUkpyAYbnaWRJPP7F5JXS1iK26vXiFD2ytdZifYeJTZa1GS6LxZBT",
  "key42": "4aQbVuEdUTaaUzhUf4FV4aBAYpf1rWbn8vCgVVNbLTyPRdc4Z1qK95TXPxKPn7fK39msn56dCzG1LZctfC3dPpza",
  "key43": "49XimVp2LBHUpNMvykwv8fpnZvh58QqKhmXhfZ4BMVubAPiy2bEi4vsfdDQifkE4xMapGsnXuqEP1JoHBF7EJKy2",
  "key44": "22F2NhpSEwE36G77hxcswZsiR7WHnzZBQj7G87qk9an961YLwg856qdiTv12ShhUz7aKZ1QLo6rg2vTCBepEsoLm",
  "key45": "4vsk3RwALYsesvsNCeuSPNPfsETReFyZ9P3Ks8caMfvjYA9Ygr7eReqfc5ApyREZHqmquNPZBm8Ty3Yrs4XnkvTV",
  "key46": "5gqhNqTEHYWzipaUJv1wEAJebRrtS9z4Cqgbz9174TmiPZbCSpiMzzJ1iNVQA2UJWih1xrmVaQg3g3P3GRpH7X3q",
  "key47": "5Gpgwxvcg8YxvtZbBKruKdLHTtm7pkJPPQN2WMXKLVkvJVBZPd18ENRwgsDuLkefi7DreT1TR42yYSz9rMMrFVnz",
  "key48": "3gjdYuuA5jBehX6qwNPf5KFHZsfgMNcJpZXsZLamsVFcEMwG9GFRNFYSXgfcREq2ZKyYmPHQeJTtm66ouxgLqEpd",
  "key49": "65bANbfEDPfMN6auQig87yVvjTSYfixBDkYb1c88wnLfduzUo4WR5jvg6NoDM8gHFjRrEemZi3H8sL9pApJiAkbL"
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
