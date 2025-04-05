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
    "5GewgkwaTRqg3miEm9Tn1JuJtAHefN9kkhyxCr2yQR5xYovdcwbbwacJG4Bbda4GEeNsGRxf49VNRWEPPkReWN1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gip7XcZbvJVqK6wLqbWWbgLMpVE9ueUeF9y849KcrgWd4cJFQhAxUc3Y53JeFhttHiXVkdNGVSRB35QxMxtm6Wx",
  "key1": "2RVfbqF1dL8kMFMSyMvxxMMXM47zemtHsP1Yo162NjpHMmjNCbiorMkXfyxzLtYppdL6uKEvVCvLUuL1B7PJE8Qi",
  "key2": "4aQBSTPaR1gPvCNLqRtG7qFYd4kuHNyLZckqjrf299gwLf27ATrK63eYk6Z4Hdc3aBAQosRZSqjKLrkwM4TBAQ5",
  "key3": "5xeRhsA9Q1jip1EajeToM4LGM1rUMPkUsXkT7xsEw7eDcYGvvwoxWSD9G8L998HKLqLeWVbtTDzcpJdcb6tQsMm1",
  "key4": "4EjsXegyhqZBPekDu5QZ61b3TAZP8WPWiJBHiz6arQ7LDK97FDTfnDmfcQ1Qt9BMt4gALKvSBCEyz14ZQkC8wzsT",
  "key5": "3t7LTU7QjdrrE55PKXX5ZbuHffwfVi6e5vMNeJSivVjFMSHnLT5RGS7oeeD3hGgk21A5UBMYLvCBn6nCEsTgvGaU",
  "key6": "64UxDwxHRiy5DzXRGychdMbCsjrueQRMfvUEbM5UosPHaPM8UxjAan6sCmVoinjuWGBPab7Wfh6QMpafJ5PoBxJ7",
  "key7": "3gx3Vosh6FSPoxUBEz6fxETPeK8nxRPn7AfRB1Rvs88gRYW2UyRRCngSthyuMYwgFHEhpj9RvHXA6UeUTYP4s5VE",
  "key8": "5u8Gv7yTBHkK4yeqyShG2P6exHNN2WtMWwDPX94BejukCRyA3jXNR3KXaLvNxGdiuFRaFJRVRrt9xc1vVKKgwR3n",
  "key9": "2aXo6RXzi7ruktWpLNuQgz1DWSM2JeWAwGz81HxY8E8AxD28GvvC5qe5qa3aXW29dHdPTwnUZkoqjcGHKcxpEm6i",
  "key10": "53uynWxhMZtpddN1nzbQNpwUP1F2kFEYKG1HUP6C9zoTsWRdUAVmMyBLyjcon4Un4Y3u6o4TZQgEyDGP35vr919K",
  "key11": "2UJJB98sGuNUoNCBeaCmRxLe8osVsrjMYjzDXzrUGsBqHe6CUinHJ3GqesBhKu36jacCLUFzWSnax9DLfgeovnAB",
  "key12": "31gXRSLfMAgkcNRCUEuntRw48hpS8DiaLe87ctu9ofDEd4qqJ7scRc3CvCjMsspMJ7nCZQA6BonChEwEgJSQMaWt",
  "key13": "27zAyeLcC3N2MtsCq3rBgxVtpEtQh7Dme4hqKNsPmeHsVVZFDMbTvWhx3A4ookWUmVXAK5PPeHjGu4Ag3fwJtVEg",
  "key14": "4akEgc17ir7Lie7Mw3CGFJZZeLumNChxi4oNW4nPbAYdPQAeN6ySEnWCwq5uk64wL1V7fL5eJPwYABSRXkAcywii",
  "key15": "38GFfpaVJj8o2wrDB9WDqu7pztRDrMx7U9wdCabYSP3WLhHNp6tS93sH5nCbsAHxwqh5MqwtTciDbz8zNXHfy4Vj",
  "key16": "4NYxQeW6JKKPPT98nKrKnCE8YfF6vevovFzQMgZVW58mCmaZrVg95qXueYv9QSqNWJ1rYEGqo6CeZXiKAMW2VwtE",
  "key17": "4NEbSom9QKAiagivwihRN5BGNSqfoxwJgwsfkRCZiPFWj9Ld4Vcnkm4tuj1ePwyDz5J1jYdAmRtPsEGgoT5fEvFk",
  "key18": "4UkJ1LsgmzeYfzWNhopMovk1c1x4Ar2xLCiDjUT41X1Dg7HXkzExTzSKr8n68mpHqovvMMgS5Vr1ngFmw3BFeJ7m",
  "key19": "25TCigF87ZLAH83TBnKPGx2dsYt6fSdB97VS7BkXG8j79LDcVPNPHLdcfT2FVisoTyL9wBYnQPoxoS4HdhfXpePf",
  "key20": "3Mk121gWtS9x64boDW1Hg4j9JjZ8NedNnw5tRyTADKi6Kyqd9XrotE7tpcozdNrqfCvesmokQVUh2pqGy5RPtoVV",
  "key21": "3pNdmFyhqmNNtGZbroiRty5xRKzpt7zeGWdr2i5g3MDENB3ynEpS3dNmPAYWmxQLhZN6XNSebuW1vfVzJfjzaoyn",
  "key22": "Lf2gGL9PGJvfNWHH3k4crBbHpsfgvx6QPCR2QVJGWNj7EndBABxe4aCMijnXgqXCYP8Sr9jiupmDgHvJsvBaERV",
  "key23": "5a3gU9Yyuhqnd4H2vnmev5YDPLJwCVyvAJ5QdBAcvqBSs5BTvW8YguPu2426RCALBn7acfFyAvmvkZkqDqvQo3Xb",
  "key24": "3mmAFdaM92Bo6LUsxDhETVjsurThmKSzBs6w1CA5Em1GWN6Wa9vsZjTR2oefgMbJVieVLvVnDk4K3vWpMLXknfDf",
  "key25": "2UKb2nEKgop1tt1QwapMrabhu8VAwpuNRkegUotqZxKkvdHtq7Sgk7M29RQ5enkNkdPpXtaucNVGKB1X8s7duoqo",
  "key26": "2gRLQ7zhsWh7E2dcqVFm7zYgaTUZCGvW4EVogzLA2GWxMRphngWNurMHFgUw9sWkXvjYLT24RYaSLk1ifkVFQCoz",
  "key27": "PeFRjgtKb8U5usSv93doqydtgfxgtLiRzNwK9xVq5cQiPusYUZwWU7JKNcpo7ugdiTZ1oDKxi4awQReKaTYCqSy",
  "key28": "4CrGCPvK4JGQtEcAfdzDgvgnm6C8Phg37oPjsmFipY8Hb4EQVLHTXJLcNGEvzse8Fb8b25mBWVFmUGsj4AJXumDG",
  "key29": "55RBCwE43DerhQDZqcBggcjU5y9QMBPctngEdwo24rp1F7X5rxVaR5m7wTbaR9p2srz5mPQts4tAZCbruV7JddcF",
  "key30": "4K8jEYRDjgNTgaXKytewQd1x2w9TPGfCHJov7JT7wk68cXH8bGBBppY8oN71jXwhHjH2HTDWex37Z3iKY5R8zkgV",
  "key31": "SH6UzQPKBNfzodYVjFJBxiFYi3XpJqDocAvaSfuuCS3ufrjV4VLHLg4ytvZC5WT4oYBoHeSk4LYpy9hoMHZBXhM",
  "key32": "41z7j5CggMAeiTnJUwSWUVrkPvBzreARyy1ZJxDvFhSKsaAZbCqFp1mJrwVMGtucjymUZR3w5jy9je4UGd729Sgf",
  "key33": "4cKHqYBT1K1TV1NCxQaxdTGjik9mruUz5yCzibUgVbFGJKhL59GXWhW4eCpS7hBYiqyGC2R3J9TCL4ekhHvNtVA4",
  "key34": "44Ls7Bs3kSpibgRT71aYxq2CD2wcLBX6cjBx5zCeEHHfBy3WJYEnm3QUV5bvtLBeaMgT9A8dwnmbyssyB3mzgz8M",
  "key35": "5DqdTwKhhtvX2fyTm2LFZ5rLqt4wFFKKuTJYaGbn9pKiSoTrgVegczBb6cSeqQBezK83nQBMyPWDDcFCJBvtstrv",
  "key36": "3TtQyh8zLMmDskUgM5k1epRknPHuEmCQhNnqqWxZhXfMfGV3Jo8nLyGRcxi5E5iyo8YbEKhvavLeATzVBgvs4d4a",
  "key37": "g7VtvqMDmvULytsz5UGhW6TSCeJAdp2H5mXGG5pW3TiZeGZJtuYgZ5wJvyNdtkPwMEdhNUU9RXC6irDFsdR8to1"
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
