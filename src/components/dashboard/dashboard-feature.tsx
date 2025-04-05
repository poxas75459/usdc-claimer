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
    "2sTLyAEQKGZ8rkF4uoRVze7qgXRokFyaj2Tpc2CgVHeqndDF5y64tN2xkDoJVG98SoYLW6FzM4WwXiLFiHCT4jFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ennmb6bHBrNspSCJKbFRkzHMFsrU6eKEWquTrBvczYEa4M6g4nztAkhARuGCqU8cqWHsyZW9x7uMz4LyLXSvkUX",
  "key1": "4kQVDZxQdSKZnYPhf66gv6ehoJXiXUULknn6WKoTQARURG6RmdZBhtgRzXcnXZg4aohmucMmmYkNpN77MdKAsUEV",
  "key2": "3uQPhDLtuEvog5t1f8WTbspQUhojSBdysLcxAAxaWPR599wfkwhtuJQri6ceF8Ev2PVfP4jukauWVoCi9dT6A7Li",
  "key3": "8e7mfLRcLJM3iWeW6aNmjJBFyVWfusrfDwswEH5tKFQ5XnmqbtXjesVwftVNvE6AK6y44mGyaeeFDczvNrzyyzG",
  "key4": "2CF6SjGCmkTV3DhzwgZ4XbZhSg2XazihJ9x34PDdkv9Ug8UFbmpBFcVZB4UHx1uZiUZCK68xTABnc8HxssM74FjZ",
  "key5": "tt3JW2kgYZb3wAYsLpHdFfdCFU639owYagJjt9HWaZfUGahXq8PNHjmTo9eQUgQGsKgDPiFFp7b1QBftnAXCd2b",
  "key6": "5poR89kn9TFnrgS8J4m7zjvzuQoJqaiqCk4Ai1oLo6SpibDwF7mpF4BDjAnQyzMzTnRbYHcCgkCpMuspjo51dFXa",
  "key7": "4N9Ny4awvLXnixFwVzP3dUjkdtdeFDE5Kir7P1Q4cvxZ48LBumy9V8m4sXSaqB4pWXuPNfcZYPJrYXomd5NvUak5",
  "key8": "WFkN1Rqni5JU9yc3Fok78JwMQyb9GN8rBgTH45PVGnPSkaGcRh3LGgWHyhhpxvve74HHzv4QJoHgJ9adgQGHBng",
  "key9": "4ZMafw3ZGNwwVUsNHYMChzbgytAgcGW3DxbtcTXDrFbQ2npHmpdSw4uviSibTXfR6cud1WEHN5RiZtBgjs5FUHEv",
  "key10": "5Y8Cc84Gs9akNU66NFfpbK1dxJfs2R6yHeSoi7NESt2iAw3gKaoUt4NeyMe5FFLGFWtzdvH3nkt91iPj1fG6kjyB",
  "key11": "2PhLKCQzsEVUKfCgp73oAkXEcmtxb9GD16N4vYUVzzHbgbqYKGLKeXjCvRAUbtnNYaBK2pTyWoNqvRtgVpgyGR8L",
  "key12": "2CZBUmBhwgBWGcodj3fuZjjRWb3BwthCnephSvGawUTPdemfAB6S9dNh7Wf9zfrzNTSn1xncYoQoo8isiFxZvBPQ",
  "key13": "67c8U3qsazh8fRnfLtNwy1gGY5WSb25MoanT9xVrWYBYVrTLqdrDJptnitaXiVtsByNMyAHpCCgHKransoKJiseY",
  "key14": "3oTj3PCSUE2i4JUnhaM9TyxL12VRWycuhqCxXaWpUBcdQV6JhnHd3hocxXETXy8j5b4CXq3LCd5AosRhLojVQeqr",
  "key15": "3zufnNFPgf7tUJxWznyGAfZehRPwk3ZAwDfuvpySa5CerhVWfBsiHcUv8Ye58V8VELdF1ZLK1s5DGE4akbZdmpp8",
  "key16": "5a1DdPTZDtLLy8sPsaNZ8hUi6JPH5AtpZDcZnu93fHLJfFkvTbYoGypK7VDo4QVAGqtFXmdX7UZKBf5v7rRJD25D",
  "key17": "3jpLzcaPmmoWWLN8d5KVPmqDjMRwuoAhjTqiuHKxW3R8Y2CqBQem9SNGxgc84zWFQNsDVESuZSJPS9GZeeqtUgyz",
  "key18": "2XCVJ2ZXUGK4KqLF1e1BMHNVDzntuWBzfAA8N7vLHjSTFvaHrPApKFcn7HgeHB1sEvkw8kQSvaiKwqz8s2Rur6h",
  "key19": "2yrLkeezu4Un2qnnuwPTE1hjFqjufHGKCb9nMvny4LetV5YMse2ZQSMFH8UFGVmERgwwAE9woZmfMA66CMAB6qkJ",
  "key20": "4HLV8NUayg5d2a3j8f9CpT1PSiKQmAi6km73kh4r4zryGHqNk4wgzCfd5vDzFmdsMZVktUC16sBaZsTaqMJwRdNA",
  "key21": "2EdckvMahHAVFq2u764oAQGVDXCDYXQbdxiahwngaM1UbT8ohw2yJM6EiUkJqiGXFhz2fS4amcctD266PDMvg3os",
  "key22": "3ySV9aKsnY3Gy3BkJ4cxPXxbcPR7YXQoW5zCPtpoNPBJossmGt4Fd7pnfr95mDpM4xR8ogZ3mTXvh6LPZXXwadCf",
  "key23": "4M3ihcpQJ13WpwmuMC1RkmpnWCrfAPLTViFfs751sUduBzNSycqWd7ZNbLqdgd5QDsfVmtuXqXFPadsJqq4mnFii",
  "key24": "3mwAQNxc2P4RxdD6HTPubCcaJyqudvnfypvL2tsr3jC84wdGZXQzQHib1RKsy2PzQNrH28nx1VgqTLLfzyg2wTLd",
  "key25": "5qvpAbyW74A8wYeNBGiABqmpbYUVRZ4GQsYcaVCi9x1aBhVdxfer4pVDjYwmefXJn4oGSVPFZMRQtG3Hngb2oVjf",
  "key26": "42kMHyEKB1hPoUwx6uECwTrnbhy6pmEFd2o6V6QZCb8pzXWy3ZUr5TjCHca2N26kGLvF1m8U4TPq5cJaWjPNwuQD",
  "key27": "4dNXAdx68PA56qZWkcMB2QqvdF5yijkPKL8MhAkrY89GabcZdpSosQjdK2SiNMM5zWDj22zu7BZU8sU6bveAJag7",
  "key28": "2KbsH3p4UjKSKzpE3X6wS6Bs8noSKzHAyUopC7ZVZGMPwDfo5eH1FH8TeW6gq45dF1XptAz1Di5Qz1swS8kudft",
  "key29": "3c1es31kUYDBhchGHnUNu1wyUdbEMbNdJL2x3d7yYtjDh5EXeLKveMAftzLbJDQkL86EYcfaBjEMFQsj9bSbjDXF"
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
