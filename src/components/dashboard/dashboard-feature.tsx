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
    "5ywTKpmY6jqm6KL2WTWVa6EJiERqGCC8fPDtu1oboRxcSXQzYLXRetcFjh3s7qG6vR4zVqYS8SxKYfp1fZGEUJRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AeDG8j7HQ3uNzvnBFKi21UCdDk8uUNiP9pUm1rmdxLsGjYebhPfqRFkKoFF84H9kbEjZo3UUrP2DoaaCHwJ84qn",
  "key1": "2qc29MhXytBFJtKLZ9FL5d6BwrWNvUkzBUuzXvU5DCpZ65gXZ9PYezBhZqAb3yeh7SBtr7tzFiyyGnfYXozB4YLC",
  "key2": "G4CXZnvLGbQzyiR1FrirHwTD44RQrpxQq5DNLGL5XdZQziQ8ksk5evjqrDVUJK1ZDUysCdm8NtLmkn3ffwgsSod",
  "key3": "E5R92fR3Fdhe3ER5speCPBhA7M4hJCKVrejHKQin6DQ2TyYivU4eHEcum76owthZZsBFBbG5msUiqttqMbNXPjB",
  "key4": "ib9ZgS416JuA7XHU8jtbtCGFBo3iHPrwpyNfmJLzACzK8MpsCvAA7JaFTDSbH7AwAEc8Yqbjjx8JM1pWSLvWttt",
  "key5": "4UsH62VouahMrtZACY8PK4qebQL6ZGThxEGWLbi7xte2Chv1mWfCE79NWmEUuTcdMM6ybuPyvYhqr95vo3GtU9ue",
  "key6": "6YsdB9ftTVzpWJCzriJPTQTqLotmG3HHD6be6HwGB73EooQZrVRrctmcXewiaSCh6jvpRkAXP4y3e4phonXBVAV",
  "key7": "2j8dtaLNZSVmPm1HSWYquTVXCEQGG5V9UM4riji43z2orqEd7YkovSGB2PxAZsu7dPv639UPWG1UBFSkhqfsvChS",
  "key8": "5vf1hbPDnXr3Jtg9DnBiXJsQ76ZJoKbXnvRwREmQuVLfySnrxmPg2hbiAA2s2LrxrFK7oJ6xsYA4aCwfA4w5mcQE",
  "key9": "4NsNSDSMmuSw8N81fnz6Nqe2pCP6q6q5Jfo5u27SWBm4gmx65rLhD1geDMefP6kXYzj4Yj952VGJKUCPSiksRBoT",
  "key10": "37UN4vgFkX6nXDp9MXkUnU3CNNf1dc7KZTacJxXxEfjdx1rwaFjS4DeEJW6NpdSTtZVYVmaZ7Ajz8m7HbyV4p93H",
  "key11": "2GPoyDLPaZHBuQihUgHJaBpG18rgwuZJZVrDofmCjfErSiLLfNX3rvZJ5bWrRZFEitA84MC1WCMYPbnk11kp8UXC",
  "key12": "2M6oqxgPnXCmJRhgyF1qv2UMom4i2SvPfZTZNeLYzvUFduSVjwfzsbmRoKFSCRMD2DKXF7d2an2xuc2z7T9veGaH",
  "key13": "f9BZUphbcdVkwkAsbU7MWEZ6qXBQpdTPTWJbWE78EVnfEaqgacU641TVQnRmfGVfs6iBmjYXTjXD4Tqavf4KJ3h",
  "key14": "nVBY4ZQNroomy2gasb8gyXDmLKWVdGhEKb9sHUxhAHwYNMMc8MfZVhBvtsraJx6mSBLSJViZyMnaty3MYVvuSa4",
  "key15": "5Et3HwbwgV9xX7TRV7VEAtE18BF8vpWGqNk9wo9qx1euKZ5koS1GHspvdkgoWsH9jk28XWyRDcfJf4h1vbbYg7Y2",
  "key16": "mA2YaC36AnzL5Wu6GrVM117DDPpSSQqHX3hbjAQfRqq6hfPaNLcW89mbJmuhyH7mkznoGced9THBXpAvs7oTTKt",
  "key17": "e4GRHG2yuSx2Kv4wnq9Kt9RBtSU7z1RstvpsmGgJFNBjLLi7TN3LJhwGjC1e7VpvYJGZAdoGBR18L6JsGDdxCGn",
  "key18": "2iFTGvsE9WXzCXkWftcdSrUvV9hWkQqaL8zn5VFJsPKC6wzvGmoELawQeB6qnM7jaYxjocZYDuFE5UKxXphAFVym",
  "key19": "5Wn5EhZWRMwbhVawvbbTcWha8er2wF92xfYPWGg2Y6dAhhhBJTbQ9L8wmGRp8iRXtVr9qfe3dudqp8WVFBxZJTbt",
  "key20": "2xHbtHwg4r1nUqV7pB2CRep14F7pHVUANJHcB4BW2jHs7ohLohc3TdHt7sCRwnM1aMAiAq17ft6DSwo2GNn6fWou",
  "key21": "4pUMAE7dnrx6PGaD8Gq25yaVdwJDQoGAJFKe2tFwsFytEum7fiW2kdEQZDtfrHwgsdFvrZViHqQ7qrQGVWLCEbwf",
  "key22": "W84BZUhx2Z7fmm9vi34JvnvDYdN9hjq6jMFk8PRdMXBcbhXk7GQGuEG2BYiyPewMreCektBv4S1hhvenEakrJhy",
  "key23": "2uSpfbQHGiUSpE8aVKAWm1dSyu6LV2Fy9F8jPeCuPTUg4jhZEH6drHGDtY32Lmqxj5Qrbc2CBLaDxVW5cDRn4VtY",
  "key24": "2HeVhKJT2P2T6gmZshpMsE9ktMZAf2fmN2HkJEx35fzZhFvHrhK65t2iWFZFoRbJ98DdEwHVeLHn8PAXNsEB54GW",
  "key25": "2tvintcfF58exuymt2NJJCdiqTrbdi9aKgMdTZpj4sWTfjdvaphstzk76LELvMQKMBiAmAQns2mg1JMVsWnBFu9N",
  "key26": "ue8wHYtVdWjqcWjg2v3JoCqySBkVMcotyWCuowCt2z3jqencE8WW96FTTPAygfKmDfLWrzoin9CEUNAH5dJ2tMW",
  "key27": "2yMUZZKtB297AE1N64Jf7wnkbwu1sk5SztFaeg6KemhanMfFUYUC6cL9znX8i9xs4HebYFZiZeg8cxXWMd3VXX9F",
  "key28": "SRwg5w1wBismGfq8YdhN62ZBUpfgU7dzPn1Y4jmLpXUf4KLdmbsp4CUgEoU3a7uXTMtikUhQgdcMjcaqGNe5zrE",
  "key29": "4zRhK49h6WAPUNJX8AtTJ8VJA2WbBmy7DUTzuQ2oLQfocebSdtW9NtiB5LziUJLfdKx3qg7e74kx22RAcpUQgDR7",
  "key30": "LwZYdBt6EWWyy8DNcsLtSMofNfUMfBKvMPQAi8CHvyEFLEHbbmkmdVHkxgyiWa4mcRN4rn29zVU2XLEq3Li35H6",
  "key31": "5ifDRsT3Ei5cpWZM5a8G8ySB1Rc1DfrG6pHkcShGNWGXAHR5FpUTjUjqbk6LubnDihXnRLfAubStG5ZKcV3RHRKv",
  "key32": "3NHwTrGHcfNRxUZXFEMt99qjN3HPGR8gvZUKpeAWP8uAFMhhiWzpjtw1jVZXWasbfRKb97o6dZKbHhc8nm9mRpPS",
  "key33": "57PEHmx295KKHor3HF3pAHqppC4qyYZNsU6P6GQ2XYuBUAf8wFwvbf4fZFyUeAKcKpUMpBnraSJ81zqwT7U84v5h",
  "key34": "4pP2eiuopgSDssJyNxjdDA21Eo78gnXSBLq4Gp3nb58nGxVd9ovzxzfCJfs2fmcmucvbhetfMyXBB3pKYdd37U9L",
  "key35": "2BgHQwx7sfGMy2Tnj9Ky4RAaABo3BvugHCGphAovuceQGcLobYBXf16gwxQ7MpCz1wnqbZRvqXLeDGeBwztdBUmB"
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
