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
    "2Mgh4Rv34pj1MH7M9Rm1YWx9AYgDTiZxEy2j7Z3oZkmyvWZQcKwf1dK7LLMY15Vw1VauRsFh4taCdNUa5FU2RftQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yc9wXyWSiKatU9ixi5uQunp6ac5aKjrdPonpMbfifikyjFLAJ2BRJpS9BeabbrDSpaYSaMB86CRq19JNLmJ29hK",
  "key1": "3EZ7P1kymDKsLPtn4UMmwXBBuiE9CW5sBqZpwYTmLkjGJd3CnYt8WQo3oqqXCLhNCUVWpmJv2WFA9dDw5s1rJqvU",
  "key2": "5qgWszi63s3qu9XVNj6mgx64PpJRi8WQuxKWcmcxzp2pZxshpeq1gFCv5r31ppAUE9tTcuewnfYQKVq3RPwHHsAK",
  "key3": "Xp3Mhpo4S3dWJwK8GXaSFFJu4CvgALPQtdXNFX8FJkBDMBuAjHhaacCRACGSLrAmR8JhA6FhicEb443R2ZhNA2r",
  "key4": "3WQfsRD4r1m4HLaf86aAKXbD29pnGUuu8nJqW54QwPDnzQtHN79AQvNVg2MfZmT78MX2zbgvvnrMbkVPPpmBfHDG",
  "key5": "5Huq3g9CLeF6wnDdymXX2s9xeAdxaDuobrMQfYHsvFrusAuP7wMm7Dz5HQajcAXPqMkfFaNDhsJFtP4ZrLvsPXtf",
  "key6": "kUdg9xw6aSKvmpguJEy7CoVFJSao41QWvtii4Mf28ZYdxjBEGtrfYHU6ukmVo915UAzUk46DWC1uj5o7HBcMgb6",
  "key7": "5AoiyZjLZ2xzgxyfSLRe3AJzdQiy2a1LvqQDEk3oao2yqy99GRyM5YuBCFWdEduxBouHNHiYoKUtjBx28j7zsSx1",
  "key8": "QHQoCK7iLRYu7bftJfq8XND1cqyMnjLCTVZ4Ye9Lewc2z4btmg9MdZZT4QWiVgGMNHd6KPsZT5yUUqXEK3wXBTx",
  "key9": "3aRrUb6WDDvbmfTG1F9cqKnxi52aPENVupjerAkReko5BGKivZrCi1YbZUbR69adMWrm6z6rjpPNd49dvxinnLtZ",
  "key10": "uz2t5sHSEHm5bUVbCzgbipAPGYQxYxaHRkbpo8i8oTfUpeR3fvhQDYHoeWECuk7zNNyxm9Raf582HvLxFZVsvK9",
  "key11": "4KDXhXt5dHDcxfHoBCpxGmiY2wezFz5mT22kVMdDyvcjUssuBgtjZWg23rq6PjkLJNd1PBtirDskPEaJr1vUM45q",
  "key12": "27FH69NLHTjdkzrT6fYujGriT3krpmDJ2sJKX5fX2mo3SioGCskEZEkaK2CZTCzP8egKTeqDTeAUxz6nSmCoCYHf",
  "key13": "UoX9bESV3YZawyoqtU6umsfTaxALqsD5fsBFVtjMkTKL8rZeG87gc1z9EmmX13XAUwqRypLLrArXKGYfwUDZKX2",
  "key14": "5sewqHmyNA5nnzLeUQ5RzNkZaQVNnXjr6UMWgBvpo8WEyNXe9gpEpDP4cWVewroX1AxjyHXhFYuRMBQTjYZNaeMF",
  "key15": "3NV1HViAQEzm3GAmRsq6FktS1B5kx5C8j9WxtxezvDywLDceq1WvBoaV9rC5sPKDVuNcKCyQ7BDcczWtyRfbSUmC",
  "key16": "4pzG9ZugFmXyx1RJm5w9kTdgFV1EAtn9i152ViACbXCEFbVw1NQwECfRRM5dCfQmNr9xmPjzem6MGqvLk3fFJzyx",
  "key17": "2dHsEWpFZa13QxgVx5QAdxQeMEka7jK6G35SBMnrYTeRsG74U1fhk1B2WrwnLg5uN2EDrrhXcd4dE7qCa98EVkVc",
  "key18": "3yBwTe27SJ4N18fpfudtCFgWhm5zA6FCYeiPWcK1dHphrZzNK6vd4WgdkdmPPxj2KWXhDKC6ww7yHCcwk1sch31i",
  "key19": "67oQHo58AWcEaYBRab7cinvLimUTXDe1bT9Xa6rdBtd541TbWvxBrZVL8TagQSGoAgM2RvFium3ddAvDJnDAPZFe",
  "key20": "64YPSnvkyFqhLWHvcPjB3yozwB9KxMbntLtE81DHTiYcwPUdhXKt2bBEdqVJ11FqfRqcvxiMRaUL4QUMxkR3Y6FJ",
  "key21": "21pf5ga3QuivjeMtVU18CmTZuM5rDCkaB2rS9DeAoiZwUeXh7rDsgh6eiGDDn57QD69HLh2S18AC5iWxa9VEsjoq",
  "key22": "5wjP5YULR9Gg3rAqFSBcfMxbPFFMHygUDZPwxjYoeCPp8q5z1S3g5hvEwfr4sH4Av6isAbMmaWn8hTfahWBbq53o",
  "key23": "28GWHQaWtyMeyi2G3tXnqRPygBxBac3qaEj5pTV6euPYMbAiCEk8VCBCfhUkiTEede9y8wdeBxtpMyaMbmPxM7BM",
  "key24": "2N4TcB1z1kkjSS7fiaH6JvEmwnscHtZnu4b8D5iVNvjoSec6p1aAbQRkYVpHJf67KjkeEkFGnwJYj2U5U1fcVJNW",
  "key25": "65KuuJ7DJiDNEqMagVAQbdExevqhBAF63Pifh5Sg9hwYoWrCUMBKUVCPwSgZ4U6kKdKgPvSVTw1hKzAovVbndHf7",
  "key26": "4TfdKy7U9JdZnvHZ2gYtuJiE4HeG6TfgfdBHFmn1RAf1JAuqRNiUfzntgenBC6ynpYdMSww46kJSbGizHSb9S6Tk",
  "key27": "3jwkuZ3UBX9kXXR4VZG9BJPKmr2X3embxeS981yHkPncBmYbLVXmJxAVsqxVeJGLLtT88YNzhtw8uPY2uoJ5tbbu",
  "key28": "2n6eqLykZwLxVyJfurmqgSGAekJkHgKW3ZUs4jEB5ho2Y8bQFF2HAybFf5hwRj8rguoepfCLqTcRnuCyRmTkemRz",
  "key29": "NyHx6haffDgfKHbmJt4RxEAkYCaX2GrK3B1YkeKmiYyQGVpRUS6K3rp8oMhc4Mx88e2gKymkWWiRejVTXeS9oqR",
  "key30": "36J1TEjfxZk8dADpKuVBV7CbPiB8mgWrNwCpPaFYwHEGQT7iB8ffzrbCA63qCDoBrVoKFL6J7a8uMcoCGqDXRUtc",
  "key31": "25XuxbeXpkgV4hZaqtk3jUqGwDCJ2kTLC7BfDzB3zQfpS1E1GjNNf5rbiKrFPhgTLZPKrii8CP7kiWVsPC3oEfsk",
  "key32": "5NtaLq7yAEAFS3qiCTQNp8TYVBRbXW2qygiJsB5AUvuwtBkx9b2PEJ5qCGdd9g17PfKz3kqFQxqqJkLjKJccaqwz",
  "key33": "3hKAJryPBwPGJoRbY6UeFoXbtJqQSS41sxX72faj24mYUHvTuaRhx9vxauic716Kgv1VacZCxu7iYYhEpxJ7EBzy",
  "key34": "5WNGGxbpqQotmHEkBbKQx9macLgAbZ9ed8w5pXFugWNtr4Rg6og4MTFbAuJND9Vs9TXB2xS8Hh7Terqn7ibCn4pb",
  "key35": "Ky2UwHaGhErajFyXb72wxLMmyeYNnGVFVy37dPRefvfHxTVgiNdF79dih2Z4Eg6rSA7GYDiMEmSRC1jebAqjkrZ",
  "key36": "57E4vYs4RKBbRwXyLAdxXDUUjG1SMSy9Uk8q1SxVym3TPVREeQJtB7Yrh9qdU1wzaUrBt2LTGpQxtD5XJqdwi8PL",
  "key37": "4NhbhN2K6sS5BMdFsDktXoFyMdLRFh5144myFDwAcBe88SLw5TshKKjyJJ6SxpWmnqdEpDa39WvxLttvxSxbN3Wz",
  "key38": "2kg2o9kK933NFfyLBaCDqTcakLLYK9NDNiztUpbBbvh1bTGXGPyrkBR9TuLju4ZfdfJV6GoqRHMhds23gwGiAwhc",
  "key39": "5LMDb3BofUVGiMUz6JFtN7XDjvFLBEF5amRC1785oPBMJbDitKAZ7KQtYEPJujK9M8iD4ZjpsEki3zgtAvBkXMPP",
  "key40": "3Z2o77NArKzungAhcxq2iquFpPNCQMmoev8nv9mCM7GM9WhQtg3Lrz74NLQFYAbxNSb8XGJ3v3Bre7K9QLun1u2x",
  "key41": "3D32rLF4NTLVvdjQcG5WzauBUtnZWMxMuEmvppQuUfFBSVZJhZQSiGpvbYNhicCR3azPaUYijdQqE9ziL5a98FJK",
  "key42": "478sqNzEajkXwLBN7VBhBTdR5SKi1SRQLHw1jqiQ6YK5bZDgSg3gCNo7KA8cBdXxvrrNyeF953m5MPie3fgRv6dX",
  "key43": "2xJLA5nwHoGfkJsFMt7BAWhBUbCWQZkW8RHZJtcWEzxELpzz7sHBRbqMJzrGzMvqVpBmpKxS1baR77MemPy1GXgy",
  "key44": "XQHcywoRXh2tedquiDXcJiU8Yf14MwX6FSY5JMdu56367yRZbnP51FshHCkyKkWYNyfdMQPxRB8AfCP54D4tyWN",
  "key45": "4WN37dRYqQaGKfn1CqiPBD91fa4fLArtZmR3bSn1s7yd13GYHTxHHyPCYvacR7V4LRD6wDvumfYp1iLR1AQDG7FW"
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
