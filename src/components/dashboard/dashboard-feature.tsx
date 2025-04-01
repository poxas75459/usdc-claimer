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
    "5tPyxzZ9XLCwTpC6mJPNTB9GLwtFGFZTJzpXTaSsFjmfVAKhHyuQLe5LS2Q8VdPeJvM4TanA4Zz7yF7Hrt1WE2cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZPvRi24bPrguPVLt5TGDbRc6uVHJreGzg3j46Rmrs7zHoSYVScxycn74rvst9jK1NMyPDL4yc9DboTGiokn8M",
  "key1": "37JZNjzpymtPnHd1KCLXyyA1f4u6biUPsqL4BWaGUDvADJE7kN4EKzTYBbYQTF6g71VZEfAgK8wdrPBa2vX3qAEg",
  "key2": "5LPs6hy7YrEVDXBFgBoNfkycZUGAvwU8ayjuQhwVNsH25BN89z9AtnSDRpRbrNJwM9AsRrH7gk4ZYr5KgiC1iDU1",
  "key3": "5EFv45EZ2SQZWSRyzpNDRe98YyvqYr184HFhxVN1rLVdXRsy7kVGDAo4GZJsfVhuoM4CsvCeAahEnYPgpPtBdsMX",
  "key4": "8xqomB7H7jPsb6ZLYChqEcQdAd9bxjGbE2c7Mrb7BUir1SVH8M4pzsuRM7ivGQdMMdBMQnrmBn5jmpqp8kajRav",
  "key5": "J44TbvHnacxRFbCu1AbiAM9f1VEnPJMf27TJS7HFcWyGG8EPW7q85c7z1kK4DNAmmhEPF2sy248TAgRb4kJ7ZR8",
  "key6": "2rUbgZX3fQMzMKSzLNX64aAjZLJ9UoWWVFjkoyjpHd3sLRNv9ixfsg7rfhkyQrdDxZ7KPL5HD9Xq3Zzmmsat4XTD",
  "key7": "3ZckEyYqSPAM5k94v9DvYqDhXSYXBwqzus5hzPPQjZcgmcxak7GUwJ4hKsk4UtBhncmQ9yxni5mfdBTMW3W837dh",
  "key8": "5VKnjMX71TWjmBBrJ5WWwtHPdV4X8XT2E9aEed4MwS5sDoBvBbvvF2dJWAjgkyJzrTgRrhkBubM6DRkCkYD5gwKU",
  "key9": "2f6NzCmGbospcQojUcH1uu86FJzPpt5oVt1Z5oGaGyx61YHv2aeZXZ93h7B1u9DtbyVjmzJ6NkNjGouJUFPAFHLk",
  "key10": "4owvn7dMu5rVxybLTvzMkwHjq2u6K1ZG49G4st9pKx7BesxNgaqPLLcvRvs9rvoWqTgwcUSEbshLX5tU7soPLefE",
  "key11": "2mwiW2DvsJzXbYxEUtHEE5D3Ltf4tXwP6XeGpeA4swPX4dggQ4kSV12h5QB6oTPYAm7TPuHhXJ9nvffK78NZy5dB",
  "key12": "kswpmHqiFbgGKrtHnZDX1vMY8ERdngzFm22RAU3vsr16EkbnpPdyKJKK138gfCS2yzby1uonUB7kctT17yHSFkm",
  "key13": "3FRU1tcwvcCimP4cKGMEnyv9mAdp6ezBeug4tZCSSAPUhFE7QgLNSUvF35Sty9MXWxb8K6Vza8iDjzpiHMy69omx",
  "key14": "gcCpZ6YiCKA2FPhdAQhfzLXZeoNYaGGHLAoYMQg2tf3nZRFCkFjPCrjpU146fckq4oFNPEXXMwLYCDAJJkXV78D",
  "key15": "xWxaXLtN7gNwP1K3xjHG6GdxENkRuy131dq79dkd349fE37ffp3ubfc7fjheXb52KEok2rkPvEQKMMfPUuFDxTg",
  "key16": "3GLicKYsZnsh7ph4BE7BbLL2EuDcskmcSXAhu4azQmq6797oDG1pGzeu87612iMKJLfy58tndF3gPKQ7pG2PMwRS",
  "key17": "2Vh73J7VeFbwHmGLemZLKqdjXFPYs1bZLx6BPJyiz1dLFtBVu47EC2RYrqAdmeyW4bWvPfPeZ4EZ5tN6khDP2kaP",
  "key18": "4WkJPTqgPqHdG7mzCeGSaLkamrn5PTb7gneWdXKcd4ex1nW6YKUpRRWpdNHQiH5HJSeK53vBDKCftgh4VRfayNHT",
  "key19": "3qEs6iBdoKgrNzGu6hE5BETDCV2nRhfeBi2VKHuHzr3MYR3LFoBKT5TnsuLctV7vgX8JDjpZk4xwL2RgsnoAfhJE",
  "key20": "gf2S6mgSpeK9V6GSauJirScYebeMdYiX2jJSuhvcpviucVf8GpaYKSib5sJBdexcGjYeXrSiiS9ytaDqDK7xCcd",
  "key21": "2QjomfUCdKJJTgNFdEs59nCXtZm68cEFNQe7SU2mFqEjToiDSagnaAARPsoVW337p4E6jYXuvn1mnnimFoqnGbBF",
  "key22": "3KWwCEjVa79hLAzmMgMdpLrXwwfyJC9wbarhnxsWadDiGbEk9BRLL48mfEc9BaRdcF9eZWJAyguuvkHUXW7zN5Xn",
  "key23": "3Q4nFUinnsT7tDeuT2472DnFGUm8woykqW8T9NRVnk3KB5CTm2fZdCDyB3NSbJcMBYAV5L9NoqH5rDum9dViCMLT",
  "key24": "2rbxWHbQ2z2dqoPKJhkJRzv5NfLRfe5bRDPNhQcfy48z7Hr622eVkydJtbnHVmasvayeGZUbPRUDAekHR3Cg7XxJ",
  "key25": "4ijeJ8Mis5iwwGF55Us4H7XxBiirkL3rZS5CNNGuxJaJpzEmTSf3b7MZRHYjMdp28rjRuaXec4crSwVvnWUYEtsX",
  "key26": "3kdNVzYyyxMBwfhJUpff6BdYurcc3W1B5vdtE8kTiUNhtEDvrzFirPCXoKQMXzndr9ikRqj8hWbCCkFQFZQzcE38",
  "key27": "zt5Wp7JdZF5x6pJM6yzzdjjiVtm7sB4ZvfodToBUS37vHwiJ8fc3XUZUNxLWrzRLi5mB9oLrM6GBKPZ2zZaMCm5",
  "key28": "5cZPLTrx2rKwYQL6XQ8HQXkkBDm8QEawrnbHzhQHFpnTCiUGikvQTtapGBtYhaDpKbUq9qcdkxgd46XeMUyyfJKU",
  "key29": "33z8mjAKK8tosMyog1GE9bMoX5BfqzY4cPRwqGV6phEe7qkM2WHGvNBCuZshQAtjt2HJTmYJqNzAbTacwqfLn5pt",
  "key30": "o8JM1yqt5mtYmySUadZ5TbbsJz6Q9Rz4PnWtaQJHhTqscUBVCEBHgnKeos6cbr8aPHQBYjU5fbuAMo6s4uRE8SP",
  "key31": "61qqJBARGUpP9umK8vahjkPxDr6D4tvQr1cpkbZadiqqrQ9V9zaMsK2YyzWo3o1REY6hcBuzP9iaNEPW9V8mjDUu",
  "key32": "3mYr7K7UVdtuRQn1wcCQrs5b6DGd2oSKS6TDzAVDo9aBRnkjn8vpqSLAv4Y1BN2Hv29ToCaNiuwULzNa2gZTPL8J",
  "key33": "4pHMogF1kHGvKwKXpbRdJaPFBXgghhHNqRpg1cyynqVkPCCBCXw3h6TEn4mzu5j5LKSHtcaaBxUBry2Zke8FcBmL",
  "key34": "66sN55AzXVQShZDVXDHs5huYVbDiWMeQZpZFt7SQsC4KRkyzprJqnDwKaZXXntjiVx9SbmvPypPdTfZDYt3CR6Yw",
  "key35": "5x8bdUj8bLRjtVJmsvggPiiDfoudrXnsWGPJduWAnpU5qcCvd8orvKfyd2maZUBmhnL5K2Lv56NGTjtCJgf2aqHN",
  "key36": "4V9KiWQDVBTc6FGCWPpNs4sfDZGKsiK4AyMixV1r7gaaKP8nvJYXzhbdo2P4LnCzrBe7RV4bc1mg7xXVyZhA1GrN",
  "key37": "3QgQynMGfHDgXcvhqTuixGHq9bXp6qLRPGNEGMMUTwoHGcwvxnZoaYmK2pKYmCzn4fksuAV89htyfnKadQnrVd5f",
  "key38": "pkaeY6vjZi9Fv3xWCNjA1P8kpv6wkESbGK5vEkCzaq44yp1ZwFEK5ifubj82EAguj5KmftoAqRfEuPFFbxgny6g"
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
