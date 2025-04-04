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
    "5Teqjr3BwjEGkqwYd19JsBh1V9M9ojeTZ1orWK8S4R1o8PEhfYLW42d5YWwdyrYeFFLvBi8AaSEvnH1rDBpstDpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNPaWpXu4LwdRwzRPKw5GRxmsStpVoMnEaenSR7Jka46T6RT1tAzYZwDtZFh74RHscKtHKCXV8evhe6mSXGSiHk",
  "key1": "MPXxWi64GKVktKzEKvukkDxfuRqxsFHveNZahKV6fujQhWXiJVn6N7RpS2unm167MVRFUBcwyJj1GnkPu2Tez5L",
  "key2": "4jSmFsxMHPeQx5hQ62haZWaxKzgne4pvyV6nEuDx1CDLJrcx3NBM6MLx12q1nkKcARsvBFXDZBmsZzxCgrabLmXX",
  "key3": "5jCN8jTCBBzQ5ui7oBfG4k8Sqousfr7fuWj1dGxRrazbSFnP3SPdXMh7kr1s9uD66MVNiUarmTfZQCWQmaa2WQCN",
  "key4": "2mvNcb6vcXfgZK3UYoaH98uGxPArp9KVMAoVXW1qD5SrnayVL7KzjsGamQjhWr88WS1zKCX4kySbuwfyS4sJuN29",
  "key5": "k1aNd2fuzqHHJRQQxjkFuG1C2ueNVB1ELFAtCNS6dPfGnfs75dNfCrVK2LuLuqD18NkkQfsqXt3TjZdfZdQwovy",
  "key6": "RZTfacnFsMzG9Hc3isfAmK7hPpfmb1XQX7AbZ32SiZzZ3QKDTv7LGgcRp3H8LmJS5h8zUmyrCBGMuJfKDanHJ16",
  "key7": "4tVsaBqvzNc5HNFtMkdyUfWVQRvV7kVSXuT5d58523wR4UFx6TYtrLwGgBaFPuKi9ViADBmK5ooPpHfYJFyCiAvJ",
  "key8": "3s1WYu5GNH4pwP7CArkiRpB9GFossmjtrdWCFeqMSfMZ14boGLUWXKGgaH8m8S7qcxBNoPKf2Md6WgwNtJQGoywQ",
  "key9": "3CrbAPMF56jEbwWKRis7QdH4qvRQ4k3ordb9BcW3kVShfFyH4igWDk5zn1vTagLiED2cWFrN6xwyuTe3PqMZtKgF",
  "key10": "fbPwVdguJNWHdkcH3WUYUWYew3VYYy1SrYCEcec567GuJUMu23Yb6dfKbZzBqiKciuurjywqA3TgNT7r4KQ6Rk8",
  "key11": "4jy3ewWfmfxD2YC8XmRYCTeLL3uE6kLJvP8HAPEBYH4AA9qzKxyiT4EgvzMkNV6ghuWnXohj4nftfabnSVpfvjn1",
  "key12": "oMvoCVvTjxRCXCKXbYDCQrLEhr1Lj9Bt21Q72HgWQU4xdHTBoMaRJ4bDqZViBUWVXqrJwvNJSegqAXySqSVKtLf",
  "key13": "SHTWZMHbrGDN3UMZHFykZ4ht7TgfGViRkn4TBU9WRjpFuefZLa5ztnxag7eJJ7TNJiULa39UXJkjXrPBVsycPwm",
  "key14": "55tLi1RpLhbqXCtfgUtRTnBJwN2JzKnnbM1d8zapm4rB6wEJAoEAVLk9DvJaZo8kGQBTWtpd5bTF96Genmy9SfcG",
  "key15": "Mv1CRR4UzbJxq7mE6M3RPXJ6WoXs2h46eAVA9tr22hD6XoPVz5iivAH7zZBg593xWeG3KiKMFMSZfWoU3n1dDW9",
  "key16": "2Jf9iQz536TPV4fAHiY9oCz1SRKS3LfzXyCCAcD1Lpxoueaw1Rcqe2NjAidg6jN9uP6ZuFkJ9bBVWttpeT9roV3R",
  "key17": "51zPhc6JBanj3YTcYpKPEkuxxXrPdNFioJHYpLHbAqtTRSAPnkmvxibe1gBMKAxrJRCWq1X7n2frq8ytBdYCkRTi",
  "key18": "5VMbuWRyjA22CAgvFw91HjfjGMSotNMSkw5Z1H1SMdnQj2AmV9ZsW4nhfvHxX7G8RWmT5DGm8GnuCu7VxzGkgv6U",
  "key19": "4KMWZWzv4JgAx6FjF6VoY4ZubsoM4HBJXuppXBtymHSZCVWnn6N45V8L9kfgiSexh933TqTWTGBstVQ9gbRXv2dc",
  "key20": "BmE4DPdUn7P21SDaNu5kdPAPXjLeEnmVrRJntB2MNoRjdYqeGb7yFZjLh4j9ZUEgat2swZ8q1mLWaNZLiqsdhea",
  "key21": "55tpot7Pmz4KynRoUt6cGFy4RnAWHHQ4Tpe7L39moVGcYyf6iXKdC4NUJfdVt4t6XhrMEZTYL9hZYB5JZSXVKwVr",
  "key22": "51ewVcWg44cqqrfiraqAPB5stp5jSdJ4ZJ23Bx89E9titPrMMicSm5r6BotHCWY6nKNGBrK7e5FcL45RT9zXbXPu",
  "key23": "5M9fqaVK6L2Q9WGtPJhfamK2gADstZ8Fua2idxc6TtfjGBZeqso4ux1FWATV5xdCY5YdcPnCxs1btFSkxgviEQxD",
  "key24": "4sc2fZb1RWuaKuwKg2ZYmBDuHZd9mMmipCgegsLsMFi9mPQKdkggnufx8cgUdKysixrCKAWiJnXwPqTkFmFynM7J",
  "key25": "41fEr4HNgkjWLi8tBwaU6JPdiBXNJiZtVv6nrqFe8AEHDZeMCTDS66oLmpmGeZe21Td82yLNSoYFeQ6ZpSgcVYYb",
  "key26": "3apEDd8945pY41MUcE9eb1XsFP1h3PteJTXeCapwojFaPxs5ey6H8Kyn19RN8YHjuMLBnXpGE2Ro9Fy6jdfgzbfo",
  "key27": "afb1nv8pTPTUsQL7fg5TEJDuiD44yp8Jcv6847jQ6tf7N5cGaNDNnd8xhLCmW8z24AcfHnRadEpVdafcgbD1vrd",
  "key28": "3Mtpi5j1q7yH8eZ82zxzcHrQnLukAqwxSjY6mFev5gioZ8UMkhJ1F9UfCtpwAQ389YosY89SWHEjH5385VzHMJAr",
  "key29": "jUfL8iaztvKCSoEHLVUw5KsrACVxu6mvCTbVrnTGhXuDTsbC8Gc5h7NCygei8iZA1AZUr72gBT9Kc9mLsRCN5D7",
  "key30": "45fboBZpYoyZ1bPgpCH5jB7W73QhLa859DyHPe5LVE85jqaauo1TC8F2sk7BuNiGrrjBKGT2QZKbmwdfh6kH9Vv8",
  "key31": "5EguSk9yFiSSUWc4vy2735eKvwz4U7uGPh35UtdpnzwF95zTFzA9BsVpj5DToodhEMhSFcPJwhKVNjyk5QiCGGHb",
  "key32": "d4buVaJaVhbkve1WseKWYVRgX4orZjTHvs88H9SPSnwmvpGtE5MQXa8ktakZqF1QRM17Xqzn2diEzpbqL2tSV4Q"
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
