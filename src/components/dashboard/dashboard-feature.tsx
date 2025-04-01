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
    "3a5fnCBWAga3PY2c7uk4xt3ThW14dVV4kAFFvrHnMJHWNHP6K8dZnkiZsWJ1fVBJzqKUTxgqCq2ZiuKfywXTCkvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSJqvY9mKbqzuWXoneJESac6XUk9PJ5h8GepkpU5PHd6Mzvivf666VQAc4m3zduzSUSdo1ciWtDvhWxCamATNyK",
  "key1": "3sQjhXoDU4AgRBhhap6ocWeZ9EBeEBJ5oc7VmKPSB1DEdG6Z7azUv46xf8Z8CRd4X9KCK3LywcZwBxcsyq5CAbne",
  "key2": "48gcZAgvSbSthaziE2JMdXEt1sKY9H9DwfkW8CshJxY4oHYJKMdsHQ26GYVg4zc1cFEVWYd9BtobsC89P65wKpab",
  "key3": "3F8dDRGqztAfqxqv6ocj332R5itsZs7iaUm1g1rhDfyXeeaifbZFLhThprKq2JL9tmPkJYxMhJhLZE4hEnmjikvi",
  "key4": "4EcBgkKhu36Vud2Byds3waJy9HrDPvPezPsjD7e88Lmh1pJCLFnzks897Kvs1884Lov6J4K2coNFtN3msJhfmNjQ",
  "key5": "uw5cuVssry5bM468mqrexNKtKPKp3HsFKooexa9LogGxjhyqPNN3K3FLdNqij8vFynqJndsFTZSVdzgELC4ALmx",
  "key6": "4kPbNDvnwzfsxfVc4vDbsxLAZW8VjNoMdzL16p6kvKHj7mxrwwossBNt4TmauMuzVdMU1uA9xnk6WPM9YZoXaWsu",
  "key7": "2ULu87ZAhiCH57XvvSTgXbbb3VrUqaZn8qE5FEQvgLTxGJR1Dq8FqGVtPRLHRGLGQkhJevmcNjjbMfEMDdR2VrGY",
  "key8": "5Yr5hZZa9rPQNLvnx9zhB9VByYe9qk8r4P5iGune6Ka8rrLoaoRv27Kn12uhcu9Cukfq2iZS2gw3k5tnQRLEZeaT",
  "key9": "FaMfZjmBwEhESHJb2qAbi9NA8KV7hhRz8e3rVLGCWr6ZANZiEPkVN11SPyrDx6pwxHrfpQc3wyG17m6wrEjinbc",
  "key10": "5LAYfzpVV3uFg6X7VD89xzyK2R5nN42Y3VsWiwEBV4c2LpVcoYqd2EQNqnYuEHxbtsNCAWahdf9hSCrSATN5Vtu9",
  "key11": "4DbNbLzav7ikFtAKees42LELqez3J4WVWpZXzwwqBeJfQBm6JbwogBbNSEpb5GSicZ2Ms4bDTtNnmBHKmLfUKyAQ",
  "key12": "2m41YzfcpKeoiCSwxaW2DeMH74Vx7FJMFA47xU2AiP1CZ62NBDes5qBxzPBKRMnaXDPn9Hdd2JSGNDrDHERFu3R8",
  "key13": "dNL1kHh6MpWKSzkjUit5Now7xdFeqJ4SyydpbQFQjfhWe2nKBXQLUUqtHHb4PF9xq4tJ4DKYP2zsoQMybBCn89i",
  "key14": "2xpkJHKmfCF6ttYm2ByEnPT5jbjwc3uQHy4Sb5pAXvZ9EQsmecqqByThjC5VfJ2cK4qqWsEDajuv1Ea6jLH9GgaQ",
  "key15": "EknNdBGXArpaSdUixNJuu6AtuieAkVyQ7GcJwgaoo5i43ioXBr2oUbtxwyv4bms1jGUS2Jd4cvwupPfZjY15Nv5",
  "key16": "2LWLEPTvYwAULwxbceq6eAstyAMP4sLMzc4uihYMDvAUSKkwoRZMFhxRHXTGABuXiN9Qtth3h8Qu2PZjGeJsaCXu",
  "key17": "44BNwXpHzch9U9DXPZsawyMC3PZsvFQdVeAYQTdj24vHTvnu6z5X1gnBxYLhaL8qD4WCJt2qDp9yUhDhnH2czHnH",
  "key18": "2pgw78Dm6E37SzPzbKxCjjS5tFYNZSsk8wkBxHpCrCnerx1UYPK2ZfiGvwrQCYHx2mbmq2EwjpL5LpqVebgNMbMd",
  "key19": "4V5QFSTX5kpvx2A3mQRrigKUicYVE27iVbMC9pzbWYrku9jBSViyqkqAuSGSQAv4nyBgnfKj6kxyk4UV6J3yFhZT",
  "key20": "3yerZET4uJ5P3heUjWq9prwviN9xxRDmwP3jjQ18WwNmDDQsUQzhxzAHNLq5zVRPTnH4bmxKjQ16yJBrkNC28esS",
  "key21": "5TPJrdHUyae64vLVSDbJTczA6cF5WpCDaCtT76hL29iHRqcmTAuB6s2CWzaGLrWkzKDEsMfDKKmshDP21tsCEU8Y",
  "key22": "25Bttfw4DVmDBzjKM2Tpa6mRr6ex16uHP9ihdrLFz7G47ug7jMM7m43sLbhV3Gw6NZm3k1TnMac8wc7DUe6qwnbx",
  "key23": "3eSihStRWRmL8PbsZXz9HgFd9EUEDW7aE9zRyeE4rWdebG4feP98xAfoXrN9G2aML2U6m1cvJ7JZXRp3DegMFMMe",
  "key24": "4vfq6nWHL8fPKz7mYjoGL8hRheEB2FmRi6DcgFg1i2aWvBBnXYhKQXjXtfBpcXPsNMTu6sKmBMUeGhokPp6uvVRy",
  "key25": "fwuRDrucVaJrd7t9pPmxLpinpEhDjDE1MDQj6doDy4pAFfxEdUKsXNZEzfMT5gPqTUczoZdyma2f2nHqn4W3WCf",
  "key26": "64WozafQBiG4yXB4dxj5rjwQP7yVsvLKFh9gpiZAHXYoWN8chQPbPz7m5vSaiUjUNAMo9N6hfSu458ewjxBEtieq",
  "key27": "5hGea3hohYJYoJQRCmac4LLVLXEgguw11CUe6D8jSqYRBSM29mypA5hYfbm91iUcASikrQYaTp4xh3hJmC7qrcEK",
  "key28": "3UBxnPzQhJeFEuSfv8CdLQwHLPNDZFNvdxVaUzEebsESvkp9TzhTFdxLQp68a1q33YPeVaYzfBwwqRaVAY5Cew1d",
  "key29": "3LiENxLveFfeQW9vCUq7QecCnHFNGRB3rN6TZHmrqfESQzico2VRrXwqodpoPQFg7Vbsr2LgShcMCW8VLpau6FQY",
  "key30": "4SEX4F1rUUzxGxDvtA56iXXP76ctH72oV2krm9mwtrunfhZc4mhPFu6nfKtiUfKKVQ5e8SANAGWBmA2yu643vgEz",
  "key31": "4KghF9GKrzy5YfnBF3rP3e6CdS9h2xD5ftzd3wToxxiBtE4YK28LUTJsVUaVwuywznie8V1xKsBmFc5pnE693nt4",
  "key32": "4PKq4B7hUH1ypk7nWM5oZRCSd4obKc3Bumdnj8JgbbWB5Gna2YGJhLg3mSpG85d5UeU8aEEzJES6fHG3LiUBCKro",
  "key33": "3xtFFfFcENvhgrn85sbUMLhSTRdYP9uKtkjZoGbx4yRdUY61gbSZqe5S79Yo3KFwfs81xeP2pYa1orMM7ubHJUiu",
  "key34": "4Rr6CKykPaGZLcwUjrnU5rdSrjsJyYfed1EkRS4vPYDXPJTNce7BGq4j2W2s8dh1Hjun2wrC3Xn4p4K9YuwGbvt1",
  "key35": "4mrr2iN7yu1Tu7YjM9CStAkFBdoxj91UUWwugNHErr2qoQNCyJSLcfeXtnC1fVpkNr5Q7D6VmY14AbrBBKAnkmJi",
  "key36": "4wQGCWmCRSg1QiRk83mX61bCEKuuvxWSzKp3XJYXr3EDNXJXbCzZ2imsSVVcG4wVegku6Bp1EFSnFudij598dFSK"
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
