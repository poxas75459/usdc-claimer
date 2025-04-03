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
    "2h7iD1haQ7CwnLEXJ6LBJ2cu47XU2XtVAnZDdj6mMuKCFfZGE5ShoPuPfYaYtqT8SocaupiTqJaUgpbcK6iUMZL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dv4qxjfWxFmaj4GS2vZme45uKHWhWz9JC9BNNqPRvhsLPHgKCcEqxxBNNggtYAEamHfESYxsk8GdAhmi8ieA6nK",
  "key1": "kyfHsfq3sJCpqBaQe25fw2XGbrhTjP31zrYcD75XaDetcRXF6MXfFQXCSGM6mnfakaUdzvx31r7tBq6o8aa4Eh4",
  "key2": "2i28qCRhJvCUvsf2sMtGXkNCMTJB64yDWajcnH3eCaUkB7CC7owqYfHcKh6773aL9iHAWXVZGE3fxvor4gbXxg5d",
  "key3": "589A45gKTawAGNKKRR5fm8tRAPGiSmdb8zggapoDtnkXJQsmf4LcGF9ZA2Mx2LA92Uz4xeFZG9XwEETpWvZ8du2v",
  "key4": "1ZeH8faEhGD42s7BvBfTR4mNG9i9wTuAKqb7xzsCesBp5dBjCC7muoJPBnCgugyKeUM5xXKSRXvJpRgJp24pDA5",
  "key5": "3tpoNrPjHHPNrEwmGVW6LjNeqhkPSttNoynRoFvD91ihoMse9gBAi5xceh7FR6PJoe3Vcr1dVtxPSYGJRgHF67B3",
  "key6": "Q3FjKD5qp7w7MoED3GhcQBeTCwCduKPvcnVQZfU6ko2PQ6oSeLKSsZfnMoNEiqzL2aGgCGDVDyZzLxXHu9kZMPD",
  "key7": "5mUHhKcDhzKvQ6N6LkcusHKD1sTT8dDd24w4GUM4Mf9Bk1KpqeSXQJK2N82zVBCvmup6LT6KRWSCJDAsVa6FooNi",
  "key8": "5Z9VpvF18wy5HtrtkfPYGTt72LoM6SRRxe7Pnrzg1eCeVoA3DWn8G78mg6d2D7wLGMmR6jT11sD5H8M6gfL4bCkN",
  "key9": "3nqF367wHnRUmBbg5i32QdGafTaWKFzRmQ24EA1FRoyhpb9iHVCdafrsxesKYaqyZMxJ4xNjxqiDeWAVmnmzWvBD",
  "key10": "3q1rPc6XpmqyHqwauYBQVjve1NfCkqX2TcFMHdNVp6hGQVsCizf1ApjQGCyyUBjFfNZKHmvxV1Xam4oZyn52Gp7z",
  "key11": "XPniwYpvnUEVqickgyRcAcTh6gu4fM4cLXS5To7sjhysLSYUtk3tpxoBPL6QmiUdNWT32TWUVg2dJvkbZ7ZBVkW",
  "key12": "5KViLzmB4cdcwG8JhG8P1NkLhdFjU2Nnm7VXYRwiPYDbxpV5uCm9o1TYwBMaC5xVfke8c75bgK4KPoYXkt1ss6zc",
  "key13": "5Uq8WnApPoiBjABxko1ygBqAkjCWJkywWVXNNTn264wwGHD3NL92sRDtJkwmgcwE8RoviUjDB6cRz8Knrqr9mTY5",
  "key14": "4NGgU1aiXxTJjtEUnrsK9wzrUx2deaVGqjFLPLeizv6ADhwMSrcnBo8aBZJcLqdrgJjx9pzSQMgwqr29HYqLtzuD",
  "key15": "46F8KyzBt3v3XChVJNuqH6wJAWfMSCV9oS7N7iyncvPSguL7iHZ21Ea8zZxGiaeh9zhs3ny6fQJH6vwveNgEqErp",
  "key16": "36ZtmPWLK6dXhy16pbr4ZUDUtTFhe7xm78UcWdKg8HqDzaJH8XvvvRHDMZEqy361G18aS5YKozuGFejFkskuaM53",
  "key17": "26MwULLnNMbhub5dDwEXwyZyERqxkajKVRB8gogcMZ43nJqCv3KeU7s5pZcmYfMjzHe9t1LjJnvs5YEMxTg81DVW",
  "key18": "3DRhbrnQeF6AFn2JsBrdrjUySkKjXMrnU85VnmiFo8W55s7bUZUApVA6adraRhGPNK6HZJ34bYM5b5oCPJcMG62g",
  "key19": "2a6htjbicLqXVaMnSysG7a3AKJrYNsJsLsPhqaUQTR9N9ygZ4yZ9z1oMXY6dJvmtQEFQmgssDW9qtSEZkUpuALp5",
  "key20": "DRJfrWbSCiatH41W2qyqcLhkVDgyxhhURaahAixj7LZyMCTaebufiJqsh56rGk5r1Z8KQuPX6GG2tdGoLZF18Jj",
  "key21": "4hEYF96hHtA6b4SFH6cZfGkDQzRtxq3EMyi1TvCsqKm4E2MEUn3UqkYc5pJnnCQSxVuKPe1ne4dYBDRt7jVfWPZs",
  "key22": "2Y9a26gXWEtvha6y58xr2iTkKLc3xGRMJY1Uz6ywFbG8zfJqxto9V8kkYZue4srvx9SwjbofrvsfD8b6pruCsQF9",
  "key23": "5VGHZYSvUVHgF1GmvJzM6XPV6QdQhrLf7Ujdefw17irF86uRYXE9VS37nWgxuxqnbeEJ94ua1JzorFpqAmwxmLMp",
  "key24": "447SxNX4T8dLwYwKFbd5vDhYHvmkSQ4vCntQmL41wWr7yD1LRYDtStmpyCvPgRWiymXjWPBxzPDeCxww41BGjtxh",
  "key25": "5RTPUg8UF19oi7BUGNVXpHZH17MAPPgWmPExdSCGavNNXTT7BjRM74Lp8xwgPorvo21mc5TBBTo9AFFa923mJMLK",
  "key26": "5xRN1JaBWpf4rU64sRijCbVnurEv6eiECcFFdC5WWgLS67G1uN5oytnz5XjQwYdE3TEfesTrKh9dQVdsB5Dnn3Rd",
  "key27": "5wA4ce8uFhdneEUZ8jLEwnoP2QSo2A36Wv4RuqoiSoDHn2wNJiCdnQ6jDC2iY91kwXtHBscqyx9px4W3f7poQus3",
  "key28": "3odjcpB2RuM8kRYz3wse18Q7UCZWn9jGST94ayhkNJyxHXFWyT3z1jyptsY2ZYGxLf2DKuz9Z65aUQ3iWxVG9dyx",
  "key29": "d6sfCefXdmAwMjPcXNGPANobAvef5UCXqVLioGmoBeZCZt1hwEdNmExrNRBLn3oV7wewG5NpAtyw7fUdoknXGWq",
  "key30": "2jPwNuZcqiwPjwDBu7uxmxzXUtenoEUP9nREH5d4bRpGw3sHWBK7ubjZoe2cbH1qBoGT2RwjLGjxfBGv5fnF2gRr",
  "key31": "42S8M7w1dnSBV9LopTFL2m1pTMf7j1tEviDJj2TbokKX5tJVQRoQjvQS2FGnvSME17AbW4i7kha9kb1NANhobibH",
  "key32": "agWkWGJaNX3ja5sMpWPRvsNry1tcg5JaqztiJjrfhnr1MZZ5rC6MZ6bvv72h3vE8NpAC14ziBkR92Tadvh8VUER",
  "key33": "2Tqz3SVxtcCxEV3YUMhoaBfKfdrUpYTswW2CcsL6fYi34pUjBjMcXVL3hz736xB8HgA8AR9wHBinvnA4Yjq6ajeQ",
  "key34": "2LVxjzisPfstfAFKYGjYCD9EmY9iaodYnFqLqPvEq1eeWTratLFMUeYaA71q77uZ5hqNWyMcGr9sCyQUcSfZfUit",
  "key35": "5bgbaV92SrwpwGWNTM888rw1WKagmhfoC17QgC8LEj8ezbMFgYFDy5PDVx4qd4ur363Ehf3Msh4vBHzx7V1h46mp",
  "key36": "5V6PST47yTp5wxiY4eHjNS9fAHVrJs1rr8ciXXJiy5YMWifs8koBuh17yNTbAwNt9icKfR3vG3kA4MBCUY9tfFMw",
  "key37": "2ohDTF3rnksfsZhvkWvzBJjVrFVbEeshxiNrThyJvPn7uUnCnjDmYPLBhLSuhigESGwcZyWDCedrBVxyWgz7YPvp",
  "key38": "5Nh86q66eSKiwZD8g76Dh7sJMpnSaARmoeQFDHPar1QDwC8AoRteGxDi8TrgeQe71HfvEi7coWz5gGcUezF4Wecq",
  "key39": "4kcioyexzP8TRjcAbh6pQHmLrTZAro1v8JaTuRx3kpdpRSpGCe9n7T83Wyrh4JQC1BPitHswEce3TEvosfacCaA3",
  "key40": "2dVe1esvRU4MhbsNaggrA7pgVaCByNfkLk71eW1wiCRs99kUzdj335Bf2gFTqJ3Y4DodfLHa1pi7mqSpV5BJCeSm",
  "key41": "2eQP88AyX57cTEB6AzAzdLzwThWegz3qhV4CxZ9hnr8z9GCiyiHm5HQ5EzoYwHEg2wRfA2de3TYHAV5YGQ1nSEue",
  "key42": "4W7YTkfHhFRuf7voRYMcbBPtFZX3gbqftndY7U4UvppeH6iEUqoEPX2tULaqzi1ZYZ64ofoPinnyvamzKNjcwREN",
  "key43": "5qfpTG9gbik4QQC9SxxGXppqqJNvGn3M4aZtdW6wPhaugKbSurhMgCHVzhFDSNFbEP6AgoujoXXB5ub5jqvcoL5s",
  "key44": "3bd5dye8B3rtEtEK8m14GoKDJdNpPxrUyrRTusPWzz84tkfL2iFEZZgpP9JCNb5Jn255njBgC2GyF6Ne2zdnsXch",
  "key45": "2DBeA5wogXnyWVahGGFdSgW77BrxYYRkhbdpDuP4VkgDbfPyhMv8TnFjEfcyVZru6dhRjY1K3pSdAkFVseXAvNdp",
  "key46": "4rz9ecTW8pReSWWB1mKrhZxQQgSqagEvB3BtVPM6PzFHFoDJbinou3CDavqxujKPPS98fVytiZjBexwyXBLmEosr"
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
