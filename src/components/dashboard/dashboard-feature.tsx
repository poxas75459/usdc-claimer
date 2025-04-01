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
    "4z3dnjRdbDK8PQpjv4gSRJkcqbi1cfrjFnp2SoRRVPwaSPwEx1o52YBQD8tVRuSEoefmGHCB4iGmFmGEGaSPVYir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cy79ikc7b6YEQpKBVffXsVaaanxwcDGv6e4uYBSwu9dWx2v4pmWf3AnFFXSXW77WVWETrKWDmQKKAQv1b3yHGEa",
  "key1": "5vsqWWMH1fcrRYWX346XS4JpgTs1dZk6VQWGgJYrgUu9EKPBSaiHDqVjkE391khWt3LTcVsmhss8WbZZtj4adAka",
  "key2": "4Pindm4AdbnSYLm4JBF534LjoZthNQm6H5XEZ16TqNgNn6fQGN2zHeEAj9AP6xNj7e4BRsYTGKWR16ycNZ74uMyB",
  "key3": "4vajZo4tay3DR8rkAtdQpMEpLX8bo65Y2JaEiDaMDGHg5Xuu1d9LznK5ezfemCodVFZkNz9JhDd4rgVKNwrPYUMu",
  "key4": "BEFVTsbYPnD328MNysDcafWva2Lo1XGDrXeBo37RM7Cqqm9hVFhez9SxBkD3yzAzjsiEtEutrWLDmpJHajJPBe7",
  "key5": "2fj9vpbcQVRyh9fXwTXs3Jzi8kZSbUBp1Wm2x2wchnd988ri2fH3drM9SbDzfNxDFq2cRS7zgao8HMda36y1Xe2o",
  "key6": "29j1KN5xQvWJE5wA9vBHZzVELJ6S7A4UVTga23K4taVxtBe6pW42GhHdWwjGxNUrydzEE6rC6KcYvdsH47MjNso2",
  "key7": "4Dk8JhYsnbgk4SunhEx4XF44vqX8vn8svcUWDH5MQD5rDZ4R77zHNjQXcR1yPDidSxeqPyvFojNbmv7GdbXU3y7F",
  "key8": "2fxn5q28QqGCWKjjUEDjALHxDe7PofRAJpyZu8a37e2J4kej2S3Nfyi3feu5hq2ZWXDoPcMT8tj9j9sKnhVotQZT",
  "key9": "g55637qXaMHAj6vKMTVXi8DbNfkUFP6xtT64bus9Xy3D7hdmCmFdB221KatJNjZNA6iAoVH1qUbmM27XquW4kE9",
  "key10": "YbFbWHxaWk5Y1s27FMYzBDBzGJiHqANk2xpwMo3QVBeyUwJuZLuea1BqsuDGhndjHughysqRvwLadRYqfPxBSJM",
  "key11": "5SAoyyV76wZmenBKcG47DC3BWZtPVcgUR3LNWJk71ihMP2D2295ZJ6TwX8jyCECQYZVab2F3EgGVY9xEHLpiwvoz",
  "key12": "33m6MCA6iiMPWWJg8DQuSofDbhFS2GD98PQYPFf9td1zyks7FofZpRJZXaxdTLf7SKtbSxiwZUkxd1yQt5HaKHoA",
  "key13": "4gnPotUiVGCTvTWyi6zuJH1cf7NzNjDe4vEZVvY1uF7S4q6ZKc13SGobjgUd75ro9WjTNwNwnHBzSHQbQU5gYxJN",
  "key14": "4mFFzNaThQcoG7Z6xfhSGWjH9geHJP9nW3avu9ANuCJZbsEsPieqDFQhCrmYwUoLsBVxE8z2siUyUsxrs2DE5nfg",
  "key15": "25Z8psSaY1yQkvuV5B1pXAnmhajGGx1sBrhdoZkNUn1PTSvtDaPpqJjCfR1dK8joxKAqTMM2FFqLhApnYgporjxB",
  "key16": "2MwhL1mnXyVd7BjoZmoj18kWQaQfKn5WXPadHBU8ZM1NUBJFbjNYh4VbRigwFBENyQUyG5ga61Sx4iGHF2VEtbJ9",
  "key17": "5Ub5nKaCm7rL9k2nz3odcHyUET5oD4VRVgcpsQ6cWQTEyujwAVk83XwdRMRofPjeAU7jEnir2SZz69zEQWdZbVAn",
  "key18": "37fqXPt1VDT5VS3aDfjV8H22hRWs3BrXNLcAaEss7rv22dQMvpERYkdP9sJdxn4EdpXXHnFvqSj8xCEHv2xgJoZb",
  "key19": "YfAjAejDcvYb4w2auQz13exFc2XWFe929Ue4EpJQ9irRwnQdDdPUZt53shg13p5JwYsJZHC3r9Gk3ABQFE1BfDz",
  "key20": "5yG2jqdzjGRphGkxHBxJxcS9vPyNd6PFwAajCtA9E8UfvpdNdqmq6TvJor6F7oyzB1Pjg4SVAWSqy5pjrVQS8MeS",
  "key21": "5dUZ3FbU7ShnieLVidF13hWGMSCs7qcJVT5hEvZ7qf9vmeyxvo7f89ZiBC5ubt5Erfcbf4euDQiBUcH2HBTxHWTi",
  "key22": "424rNe6oz6cCBrQSyFKXkDYppYe8sCKENdNCfVeXmAdEyC7j1Vc1atgaeAAtBcw2HzewbsdLjwcR3JFHrv7TkM5P",
  "key23": "427eTs9ssdwSy8bDrdt2ZiXFFMZUqvPAVKyWMkkQfNC4EBp33mK4Lr1ZGRsrvevbXMV7TQWeGmS8c5spPCDucjhB",
  "key24": "58QjdBDWK5A1W6J3AcmUVahnJMPy7Fd9Wj3LPykhJqPReyCo2RudgNDMr2nksuCv8usNmVEKCWMuuVcpsSDfouus",
  "key25": "5H6brQSx693mn5aEHKbfTYEw1YLFdY6DUDU1wqB7SfF3yQ3e8d8tAp3B5CDU7PDP5i5LnJcSDknbjT1c4Jotb2qK",
  "key26": "433SCWXzgscftbj4T4PJXxPeGwCZuaCNYhLX9zSFiXf8w5C21gbwHMnbHRa3rDY2cCNcA4QMmye5PwJQBajeVave",
  "key27": "2CC7zfHuzYZEBXp9vEyxQeUCzENDYjmUNmpCz1mXZjj34nTWkE48owTy3qKnk1ACuSG9EpacAB55JSnYZHDEPJg3",
  "key28": "4KFX9LSW5CasXGqDj7YA15GhFvCouzwoGeQw8Z3Ym4y3VaSdkmjCbuHQdkWtPNboXQZUGWerhjn1nYRd2P3E9FrW",
  "key29": "3Vp1ieEhAZogmXGexwTMvKJw1aPVcDgUN9RSEykFvRxrYDMthUy4HFRhRd2NJNYXVf7cu3qwChX3AeLVGEV9637P",
  "key30": "58cqTG7rqVfnCDeM8x7E2bRBpo9trMBCiLko6qpAAegKRDVhEbvvXu5vT7EqnZAc3LbC3yD3mJi5y7B3KCNbuANJ",
  "key31": "2ahsMfTRjJB9EZKzZvzA4fVV6dwiebYbxjyaJ1JhEJqsUk1kJXssq8u5BeANKNjipRsfL5YYPhv9SMTm2ikzStJo",
  "key32": "2qGnaqiJCeopap1Vs5eJxVwEpHJ3V3mkgsySkmqXjaEW4UkMe5gzaVpruLXtwtnoRY7kRD4V1KWvTJGx7yb6durg",
  "key33": "onYJFwrCuqcuBdu6bXRmVgLtZj49GCPUnZhqmLT8DHx287TeES2QBN83Xxi8xhGuoDkusVumgM2cHUKUYS89Baq",
  "key34": "4jyNwETLVm842AahzzmWv127VzZ51PbUW4KtV5HWJnheyaXRsnynyzhrSV8mRramadAkx9mpJciy3s9ShuB6FQV",
  "key35": "3pzswTUD4hsv9662xDffsWPxcsWiidrQgQneC8SzcxMcFiNbSA2ScgRM3WQn8xgYyeVxP7qNPv9RcWEovfJLpYgv",
  "key36": "5FHU6iW2LuZTcAawSnaDKop4Zw1sUprZMb1d8xNuW8hH9ccd8HZ9PynhNdXqFdaZT6sNUhNCsGmC2NU8D82ZDqnr",
  "key37": "3e4ZXoP91SEbwoK587Tse4Vyvg9VFJErHqgAAGdqJd8DrfReji7BDFiyRuq4JcuHLLwnQmfyehnJXGnNqv9Set1v",
  "key38": "2CH5Sfjspy3nYeHD7knVhGofNiT1M9KQ5NWiLebJCGc2tdrnqoqfoqiuZ6yFXvH1DbzNGGqE6M3jJi2ymQfNz8Wa",
  "key39": "TZEViiznvSDBPrRWai3UGfZV8sEGApBWy7JhUdX3xnbu24rff6rUDUVrEuC9qJp7BghTPoeBdCyyPdtEKGna3YG",
  "key40": "3e71E3FXSQRjmcLSjNVWCJyCrDr5n4tdropqBDULYsiZVWwNgWjnPwx9hWNXLMeBxgR5V4J9GDwuv3ggQXdpqGCd",
  "key41": "4LBNeh3rbBcSWmZrkfu885P9jvnwrDHGJrgYFqF58FqeT6P4AtsGoL6ybcWZzHbPxxzfDPnyrp5AcoDucQoWmgAN",
  "key42": "2SZXoYoCt1JQYK6ebbWbxqnuoe5648SYLEWKJXvo6N25aQJPnEHjWsXvhwYLAKgYakwR3Qj4J7B6GvuG6vpsWy5W",
  "key43": "22FCaXQduxx7HK2NG6ogfgiUZREmzW5GQxTpHJqCBSJwTRamLYfWsFySygs5MMK8o8JNtVwdTif2LzcBwv7akWPb",
  "key44": "3ons3MpVCqRDjNdRkrgcmnDBQUNxoc46YfacjCdT5DGCkuA3f9MYHHowFuBeSMrkzMKkkhfPExYn1wtektHEzvQs",
  "key45": "DSNQ7ovdEtpCdJnkuBXKwa5BjAVmo3x9Wy1iudTmJb8poc6iJs2KHYBrW3CkLNkZHp4dFd59GRCp7LGe2EySTSy",
  "key46": "LM8VVvyv65sd1aJ47Azita32onzJAqKpVxZTHzXrxHTU2NY2aUhJeTNsnR6Vk927NG7Rghxfyid4wiJoWY7DR6d",
  "key47": "4ZHV3y7vQsnWGGjtxnqTVz42kjy6tKPSn3nBN2xmj9R9gagSipzdT199Ns8MMtDNp2mvRMTWstdSVgjS4gz1Fvvy",
  "key48": "5kJoW2tm9uzu8GfjkmoBNBRY4Ajr8iUjSFuoCDhbgYdrEshLdN9UrUHGwafYZiLvFJPyTUnvfdgskY6VX6apQJaz",
  "key49": "5byiycXZCnSRNdyAaUrrAWRZLyEcSYyKNn2uQNbZgmghcjcNHKoAYSBBZNPFCuTNPAga4QtBGnJ29vkLGA8kTrao"
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
