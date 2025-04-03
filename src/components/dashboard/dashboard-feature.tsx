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
    "4qPNMDLQ9LGkLFBKYueLFSPd62pp9j6KtUpJ2yxFjKAMCyWHmjCVZwUSpSSCMvQ58pSmCLQb5KftCjMeeAtTtPqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPnK9AEpiJ7e5KNB1Krf1cgeTRDCjYwM87k3y3KLK87PH2XPxGyNmDGesfhRmArctfaovGdevZ1rumkDSis5BCR",
  "key1": "2NzpgeuUnrqK8XcxNpDarUeiNjuxhvY439VfHjSs3GV9PBEu27267LiGZdnWRYXxaVGWDGjSBfhM3pUozwvt6hf3",
  "key2": "23LkXUHC4j7HuNtcEhMt9ahbZpNxcZLQi8sco5ZYzzrmaSEw1yiaaTch8b5LgsYCjyAPA1WpaodgFJhgsxwjcnwL",
  "key3": "4YUGeunz68YTf5LaJheG5XUcfF9UqfhKTsUmWddZw8oNNTfcG4vUfUzpij9AugqLw44j7kRVanYHxGapGHuJ4koz",
  "key4": "2tNAT2nUApHfAzi2mEbTaBbDgRuv5iJGXbWueoHqTk37gDgg3hCpHyrtdbM2BiwQCKs4JHB6iQUTox58gwyNpigq",
  "key5": "5Wnzb2XDHagBag2yxEiD5Unn1xWbP4MzfMaoL9h216raTWf3kW3B2FT9qhoYVeMraVB9SFTsJuhNw4rg6FFTbaPc",
  "key6": "55p3mVkyVh8KdTkwiHSG3aTsrzHPR2CiiS2P8GTDYEFKx8dxrRddU9uPtEtUYCQRKRLyjZibUy5QV2sYUuf3VRPq",
  "key7": "5SsE4ZZwYrJyDka2bwnuCdmYAnfT9dPuYRMGQ7fTTJRMTUurbH87jhaWGceMkoxXpt7FZMcsG7DR52cRDYA57AQ1",
  "key8": "tawnz17NEZX9Zi4yDmt37SFpmwHFjBXuU1swnai5BngPY3FixRewD7xmCXjmyzJ39y1GgSt2Zjc2b3HFSh2wNYU",
  "key9": "3cMnnFTzw7qQ3vAQit62y8iapQVuaKnxd8Gh4dvue7TPF5c1NXpwwMoWAfSjthuwEN5w5PCAVezWCdwB8A9iHrnB",
  "key10": "2CHvAALGn4eK87tjG3e12GAaVbL6xCncxxidV8drjbhfBcPgRvTjqk574ayYywr63LVHi4oZN19A9vdy79PrLXYB",
  "key11": "3aQWoh9fj7ouy2uZhybF75CpU1w7NrZyC4eTcabG3DW2zzP1o6xDvJqW5gtEDbt13Mor6SsGwvZycQ5zuxyCVsJY",
  "key12": "5k72H43iUQz1wcHQFy5d5Ao5ezjYyhxZvZCct4bk8edJaQo4fFxoRHji7ekWVwMVufVRU7z2NENSoGyQQAHt3KTW",
  "key13": "5yEUcubBzdfQ1hQoCifyq3fkQq21q2udKsGuPKmhUkrAbEd8oMHRrcWgxKkKTdtFshdF9FfjKBiVsyT8uBz2ku4n",
  "key14": "2pCR8SmNNzNK7p3zCzNUWjpBfVUhSLFfT9rweqv4fKhgy7SpYjv7HEAGcSZ5xQTkVjNQt8sjvQft92usrVp3d5pw",
  "key15": "3bxAnz46KxHVwAQXg1FHKxht88DY6RFhLheUL1xiEw6QXZFtMHwkyU5QG2uWTcTAZyW4PVBeXi4qdLmRh4gkc5d",
  "key16": "3QauHD8M7n69CTQpdT1itrF7RPhteaGS45ZbhhxTTjXS7CMxJVfE4UewimpkdjZNMTQdSCdTY8vmipYvoEinjWEz",
  "key17": "3teDBMGXXqdRazwuFbmM1kZzT2shmLAVSAhag76RdJbtGCG5V5rnh5FcsVpL7ioFMnKSHkTzS2tEDpc3eXbtGcS7",
  "key18": "5Rmwa2i5AcsUTbvyTGZom4yum87cquuxp9imeaYDFBrE3YvNoz9kczcMmkaraHtvb6o4EYnoaoKbhFXdUuzSCtCn",
  "key19": "5ak9WP6xGET8HYhQDz9zAipLhdnap2VqRWafrs41bhA39GaeC233DGRbdXdPujbcvBfzjAgGtZwZ1A8aTLxXDUT4",
  "key20": "2K1R5G3skh47X7eUmfZMhfazgEhAsSeVxbLaFUVtYSWbBqx5ahR4kYrg4zDho2XMyzbiG3ehCsgZxqg5LoLoCE7x",
  "key21": "3mrtb8BSfSZEoYD2YFRqH2QRF5W5yek56LUJgSzmTYyB9DX4La7RHqWzioTgbra6BVBwQjCFA2Ns68H7tWTrPbJN",
  "key22": "59C9BcgjYmGubqRBucK5UdjHPLbsGygu9yZp87QEKVoRCoiBxyD2mN2RuH8e8Y5snRkSvrvXr8DC7KH5Zmz9mDzf",
  "key23": "4p2cTSpwAjrKVB8DdpXVdxSUWxDWmsd1obED42GjES9r54a19uxgEZDE5FMivWtgEj13tW2K98kGLG3eBQZMBiVT",
  "key24": "QtK6ifhVVJKLt8XmB9L7tyZ6AtrLyfMG5W1y3R7apb7s5t1aMzi2rLvjbuoiyxUfFu4LPfnFSpxp5nMRBMQYd2o",
  "key25": "51JcnfEi3w1PNcPYXyj8W6Zzu3VLY1zxeeUnp9HdjaKBDptmqo9kFarbrBANFb3rV5u3EuPw3MP19XU9Hp8uDmpp",
  "key26": "4AdgBNhgizogYwhzhjgvn2ZFFutYkbHWAvThzkHM9S4ywfRXumwdZCXjqQm2aESN5TY68zfSYJQnznHAMahJbxZh",
  "key27": "5edcQ3s3Y6D6pjuTyFpMpa6weAEHE5mGwq3pmkft3U3KwFTZXUPek5Xq8LCSmjgRvgoQhJf7M48o9LGf6PJfa6Lt"
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
