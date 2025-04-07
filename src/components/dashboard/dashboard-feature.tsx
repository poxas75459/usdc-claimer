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
    "22PpwZiG44ZLDp55ifaPqSAW9oNNre36y1Eh3mLPBSwxAPR9Znn9axwS9c5mBxCumHJqadXabjGSmm5ipLjGNvsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3G7q2NEBy7yvM9NRiwcUQbMNyZvhvm2Hgy8GjyFq5rxdbXN2B3tRSk8kvHcdPxAry1vKuXkb7MwS7fBC9xMjDU",
  "key1": "WgmbAfm3azvnML3j6XvwAv2ysASDg916BVZJ8WbyxBBQ4Efv347Yjx5uaaQJSBtKZvzoFUojBp438EMz122j9jq",
  "key2": "2A842hG4RFqJ6ubQ6E9iZK8Puux1vCeX66w4YNerNhaDyhu6cL1RsqNYgcZA6Xax6k9WffVNufrNeAEp2a6cWyYb",
  "key3": "6261v17pf2T2UJg3FKFPkWsxh556ojRebxcM6uNztFJwL7hbsp43wvsmU9wUVnRwv1UGXyLjTtzBKDQKijvLafC3",
  "key4": "3neEonLXhcrKpp88nRRCuZ1ahF9ue82dsQgKZoskfzvbNWkT8ZvCYH8XdQnniSAoB6PZFYXRdmzRnH7aNDhT1apv",
  "key5": "649BC4yoK72UXaQZ5hsg7bgm6PiNpMSwXhDmXrBZGauC3qWamNFcLd3WzZg3ubQBFJfQV4HLY8CrehDMPbnfXHxB",
  "key6": "6kvVdopg8uWue2g6aGuCCKpTgY6e4REzomCcibfAiGzdNQQkWBTwkgJN6P2KaRWutdUMA8kToitGUjE68bBMihb",
  "key7": "3P7gmc4LsBqFBYzNZa9escWTBstu7EuQNLCnK31g5Py8b9mW97mZgb6DUWVAfzbFQUyvdiGPwrDHxXegQurxYh4E",
  "key8": "2gAkQzS9t9gKykdLZ5haV4wDQtbpWB36NZLSc7R4J7gxqpeKbK4FXVkVFdrZ3Yx5uzVvqUNCmnV2a1iA1sGUDEft",
  "key9": "2hFvS54e2KLVESEJVWR6zZ2rtCXVtKmWCt1ph66KAZsi9dYkaziS1ZanZQV8DvpARAHHB5zLgJd5JYuV6XRJzQum",
  "key10": "3YPmtB6UeZTK8JZRpRw49Jft7Z6Tm8H16okLFACnXPXGCjJNGy3RA2rV7QmXSEBz4bsLoeVnvxFbrefvsYYFapgy",
  "key11": "227G2qQ29fdMfs6wZbzsMDE4vpYgpmTSFeWRjLJAJ2fK6iVcaqDZ7gY8RvruK6h7vhZBHH4qkynxJw7Byy8t6w3Y",
  "key12": "3NZaC2VQ2WGfk6AsFdQHGaM98n7H66RWBApsaRHz19p7NKUfAninkwZAkJkN1LXNgt9oSdUsUhU14tV2nAUCkqRS",
  "key13": "2ePaZGYnUeYTruLxRmbzcTewejG1SJzpiE5daBzQAJW4Bzx1aRLZ7YA6XEQ66vSXRnJGNLhF2RLSRfVym6KnzfSE",
  "key14": "857yaP4J5vv8iaeUo5xp2dDUNjPkRmFo349tMjcqzRvwmyAZSi6L1askJdc57qxPGFvDBbn6kuu6bU98MWnQZ4Z",
  "key15": "525zRvb3UmLKzA2aGXfPXstjzXQskjzGdvv5g2sfKPj9g72GZ2MSbVbpZz4Qp2V2F29UN5NRXhU4vPccAv94LAmn",
  "key16": "2x2iEu3m52uUH4HxG6wZHrikyYxXFe56mGX1GBaSrm47ApbizeUYstXp3uFRhR5Gf7NF2ytBgEEwTVo9moWw6JCF",
  "key17": "4vvYLJyWyvnzNrsvqFBKScMgSNy1DwaJpAcBK1zChpT5j4WoMdX9eXQBzTXzMxkxNfEPr9qydwqcVD7VCi8ShFtM",
  "key18": "dPJQKxoXnnZL6q2C1Zd6PDcSGhEZiRV3uRP2tDLZHg5WkRj6Lh5YrQSTqAGJ3rP5LpMKYFtg99w2oNSS6PGG6dk",
  "key19": "5qFYBYo42XrwUq3vh19cHpHTbPsmGXeW6hwtvsmMyUBWRJnFxzo9tfjJRbZ7wJJ5NAeAYAsHs5nzAWjJ35xkFUEx",
  "key20": "3bGrKboVMwkrpQiobKSQHfKC366Uj6HDfvAKqnuVhUQmudhrsifhcPTATYXeDEmxN6njaCqVv4T9q8Vx7h6Te3v",
  "key21": "yyMovVb6UocjxJhTwRw79VamamZhquVR1hs5jBFmJmBwDo44Yqi8FgAmhEsFVXzgVeugNGmpWKrAGenkKCDnGpT",
  "key22": "5aEQwMoU6Zk6jjVcKy7LDxhnLc4sN3TeusA9GKY9PpF4rXP66HtMErRzvRHRWJBVqPsNHP3RECwJRq6DVVEJq2Kk",
  "key23": "3dUDWG6k6obqXJY9H4D2QkUD9pQsDEKGtUpJsq4QK93K9MNe2xgCkREFwJBBBksnWnqYTSeCWxGGfxuUEouidCyH",
  "key24": "BDVteQqM5qTM1A6dgacop7ThifxJ2BbXyDVw9XgHX9L9e5xpEfxa1rHeawpAsQ22Br7SHuc6D91pbMM1mm26Er5",
  "key25": "2HS3XGgEtEcGKjKb9BSiEaS16KPQqdGCqL5BmCmTbaFRAct5ugqvjAwF7mB9eeYAWrWJwubb3TYQxa3kX6tAh7N7",
  "key26": "2ZUueiiXeEqwCbUJXrjCYDD93iWKGHJm7zP6nLK6MJW46HZ3pExRSC9FatbCwy7q4RWVRe1gHdxamPoUYJAat5HQ",
  "key27": "m3Jnhs9ijhTq5kwArfAjKUfa6HvMuhiF7JpLgeHqpvSx1srJG1DDyDnuSsk21fHzj2FLgbonzT6F6yNHZq76NXB",
  "key28": "5PPRnfoQvBAerD5u8XKpjPrww9MbbXHYHZ8Shy7PZ5XedtQaLA7ZDwPuTTzg7ZxeNQoM42nn6s3tt271qiHDSFvp",
  "key29": "4uAqNvg7eLw1FV281VwRALhdejZGgAL3rMBxMUar5LhCaAFQaB91WgEJhsZB5TSujjV1wv85sJfDgQxiaaEVotX5",
  "key30": "4eAMtvxgV8KmzHaHj72faeDitjbxS28Xh2wLBBWdcwDpMUiNNfUEnWQwDjHjGT1GGJjWLvpW94V3k75iiuQkPorR",
  "key31": "iNTGLDTCqBjh8S6Giwff5LXRv9B87bUJrBudN6wCyC2tJwNFwHK9y3gPk221PveHxgLxYzQEAC2YsqgnJygx7cv",
  "key32": "Hbf8NYY4nRZ4w6iB9REeb48Vn8HDLHrzZcksjtNQNFe36www2RDzcjoZmGaPjRN4Haorf4JGFSiJaXVjYz8S4vC",
  "key33": "VxJkMU7JzhLPqpow1Ugc6nyDJpFsHCSukod3MhQxmhEZUZVcTuQx9PHVPL9PBoEzcgR7RhHkhJtNP1pEaYvNsDH",
  "key34": "4sGpyMoLg722eSvf6wktuRce3o6QpXM4zRnWPGwMQRhMsUnxMZAWFemaDSQrEJyKXDweCracjQV6SdtQWGuYheYK",
  "key35": "2qjeEYptjQQg4uUhEFooqGHFkTrpts4uNSTqFjNUuA9M6pR3cpN8afpCURyUKt82Thvs2TrMpfP7wdExWYekayNw",
  "key36": "3N8myQagzF6KmFNkCdw6cB3pNQpfPqWNQ4iJEEfcjxPJe2FUuz66Mn8s8ijVjxa2tZT836coj22eDYGMnTbaMNGc",
  "key37": "3RDvqLJ4nLsyZpsvssDiXAooAZWDqEvaJU4mMFrTUNuE9b5UF1AMrBLbQuahpEnB3cRvHjSqqbCK2mKCmJWkRzfr",
  "key38": "4aq1eXzwvM3u1WhaHZ385kAmKVLRNc6bo6vAqKvShkMYE6nM3vUsLTEQx1LdXeuTowJSfJoR7eviwuXT8VU6oMi6",
  "key39": "56bxVxAqMsmPC4qZoySz73Dw2G1dQ3FwDDCHivSZcT5DLXZVyp5jDcJ8m414ibtmodAmo54qBJbtzJ4sXHmJKrAq",
  "key40": "5VFWs93J7KKT8pN8yx5djGqRxKKn5GsqcCdF348efKeFPbVjrAk48k4FfRnaR2rHEok3d5Rhm9nTJYqo2a2eGVnW",
  "key41": "5LCWsdudzfBFnsKd1kzUWzyQUEz87vq2LYpkV2bDUBwi2MZPkdAyWEpvmYCA5oiUf4wBow5FfECgq9VqQEJ2GM13",
  "key42": "5Y9GVH8U4mRpC9rJ9mY52Jfs4kDQQErkhtxNpBXTXt6PJU9T8kJpdmNd21TvJjiqSVu5zwtDegGDxJKdUhAjRtZF",
  "key43": "5njKsuVTP7qYjBvTdd1JfZubPjjBfdqcboZW8zEyqWVpDS4dQNS84x9cGjwheo4Yzk3DayYbgoGbzGH2F4yLFL3s",
  "key44": "4PhAe55uQ2tF2ZoAX1gSNTgKSskNNTgyKTn6kmD17dxqv8DxLrPwJTLz4XiFqQnvE5BqXsYoYdi9MfHRpkEKLsKH"
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
