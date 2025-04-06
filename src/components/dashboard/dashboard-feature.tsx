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
    "5teEFkoGJ9ifeq12x8j4p7Kd64yohw4xrF8hxmANaGySvXrzS5K4oZjq7CxTYLNNuMSpJoqGS1st9athoggGVMxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8r5zn5RRSGLdrB6f35nJYmrnbRJCtv5ptWfrLUsi6Yvvos8nwRUM7CbY7xCW874FBifNRJkGWaqbrwY5VH6WUA",
  "key1": "2j6MbcNoQ2vVn9CtYPQVmcxXjm59HAUGpsh1tdjHqsnd96tB7XoDikof3VGD7HqmvCq43WXvftCA2DX3qxdcPEj5",
  "key2": "QBbG7CMyMYvVhtTnGZ2KW1kn9auuoCoeyG5BiWpZMD49uKNnv6MFoYiFeU2sG7S2EJ7hoCvh3i4XhiVrA6Kn2yU",
  "key3": "3P1VR5v282PFcQ7JLnRKSjEPc26XQrLA7tWMNcsEV7TCgSxUZnjs3rfynmieuWVYd8NGK6ju8hA5i6UW7i4MaBXj",
  "key4": "4S6eoStEoiyGKhVLfmEY9DREMkiCwVhzAebed5G5mtMp2ZKzcuwhcHhSTy1V5FvkjZgbvojvTwvJicqUJPgBPucW",
  "key5": "56XUJGKmxzbzL3GkTL9JWsWHBwVedn8h2Hh44eM5c4WtR1KeJNBE9Mc2aLx3rxZN7FjPVs8hRaxg7zrKc7ueaUJT",
  "key6": "3pE4GcVYeQJJRA3hw3UpQJCKfXHJWmfMG8hEqJzKNxCSmEiVxdj34Fw9D7rpismqsc4gdh5hLUCwb17qHpoLi4Yk",
  "key7": "4zzPZsqi1Uo8fV7eTrhMjzxb4aDBrPwKPLAQQCc4odxzjvXscxT5ztVQMqKQf2CyxjczpBF3dkPnsNbGtMc2sYb2",
  "key8": "2EDFDePZMQZz1ioJG3CRJj4YSy23tJf5aDym6iycqJiAB8fGBAZuApQRChQsA9eWFVS8Xvh2AZBRXUqWxSUk4HKJ",
  "key9": "V8c31AhV3TLkaDAbsgMoe56BSjECJun9HJsEUi6XPWCk2TrTA79VYiwAQk7qR2gQUy8VuzpoPdC19qkELaFfcms",
  "key10": "4XWXmRWRbC12UkfW4CctbMHNESCYGvC7eowVPGCZyktjTEZw1uPtdN6dC7DXWx2AGBBBPD5fmUytQLketCYJRnzm",
  "key11": "3wT3kxpZavXP24FoUgZrnomyVBAMursc5sck1w8zkifS1ean3VaCKegsA1kF8jezuEwbW6mmxTVngwv29QHW5oZg",
  "key12": "5Wc7ym8wMw4omB6TxmpLdHw7Tjms78KW3G3jru2MHwiRyURDeBmeHZnJsmnJHP1pWvzGPZSoQsLggS8Pi5MQt2UZ",
  "key13": "3eQ7So5p6Un1FvYX2ShNmYCor8T8cEaEVfuSHpepm8eQncutccTWN6VFK4ay7mPNdqHrcBvcJ6zDnLSYJRjMktfW",
  "key14": "4Pgr69DQYpXsj3zfFp7yYoaWXNSuBJykTzWKctXCVXNvh8HoZLKuioU2cby9j9DPD7sAH2M1cX6cTYt5RNaHeTPS",
  "key15": "ZUW2dpwTsHAcbrjg3Lf4rZzaftW5gDHydDDR4iaSZSiiqp2vcS5pcCJbPcKg64ZTF5tK9ZBrLeZsGWKFcbyack9",
  "key16": "4NyFEwzQfqViGJycFfcmabmzzQn9qPrA2BoX6LtcBrdqqYdp7iCGzmVo27jZzwyDdF1ausGHwMpxZwNX3E8aoUeE",
  "key17": "48LFZ7mdqpqU7UpFdwqhb6R8cgFTrXkPivf7J1HvRGdvm2TjVi8YsLBHeG6Pd6R45NDGWP6SZctaheFkovfNJBqx",
  "key18": "4MzaLmMs2gcixQBhkYqdF2g7de4JTZ9Y6gBWsvrFEcRRujcbK8vULZgZv47d7F1jjUiRGoB8yUtyPw96ikcrg8ts",
  "key19": "5yFESSbAk6nV68hfJKbpqb47X2ECuCbEBNxoWqpPBRwPM115SMNbG91Ckfn5DNYPW3TVEDv5kuVzJphNyo5Wh3dZ",
  "key20": "3necc9pLAgGHaRNZR5Km5gPPxu7Ct6C12ApZ94QK3jc89SAcX9B8nmryfNHm3fnhkUT8jdMLrsmwoM9QUrpWt19e",
  "key21": "63jYVxKNDgh73dzjyjr3ixtsbXPDahkLYgvRp5srJ2RrNHqqcnnpuZjE61MfCKBNiYeNj4rfkEPX4tY66KK41UNs",
  "key22": "YshRVS8vEGjSTsbr5KR9B1gqofpGxLAJ3FDXe5PprA6JYUf8qBxpAQegWDMqb59uxXnY7JzsqhdQRHMhaK2YxrB",
  "key23": "3swobpLLbnKprwk4YzbdJmDSQ9XMkE4LS8aht68FnKqHfq1hQkJkAeumbLyiMa97APKtNRHjD9rx2k66R62piKSg",
  "key24": "4UrBJk1PNWoUhvKFtfJ9RrsLEGR4if3jxYYwnR1LUSjwrk1cZ8XsJQQR1nQ64Dy1BmfLbMtQa6V4dtiqoTy87M2t",
  "key25": "5wz24tLnMgLbYeoXebaRysiVqQjtY8As2Z2XWraeKUNPgjXcoMha61Bro4BVz1iUJYYy9Abh3m2Sw4NEn9KvPnJM",
  "key26": "4kVqJe3pBVWV394thqdTQVj6TiLAvqprmy99pqyTMEn96pzEQXtJDyQn9z95Vey24v4Yx9gYG2mcK5CPiASMEEUL",
  "key27": "2NvvUVzv8f1ywXiFr3AydoRgfy8GPLCbukHWFhmdV5QksnggpEGsEHvjzAUQ3C3Uktr9eiv59CRyvqJzdR3AWi6Z",
  "key28": "NQegxCuC2YxK5uaZqqhtwfhmjqrqpMVEZuSdPvcck8SUiUztbgi8gGX6bQhjDyD5UFZay4yFN3uwFYXpzQr3crN",
  "key29": "51SKTcTnW9uC3W9Gtfcc4b8ap2kxKJeJJJkbzQbj52oiEEZGXGebJhPf9rUN72Gd5ijVaNaNAScsf6rG85qrK75T",
  "key30": "3gQ3ngsmRLWp6WDRezxbXhLkpKq5LZvDL58Hn52WJtV9tRf1iEUD7r2duPDDVhm2WgkuQidyzWHaa3SGkCW35hLx",
  "key31": "3apEtzPvjBRkwBDGris7JYNa9er3VEWJUfGq6K4DquXpGrx1XGxvhHwCLjG7sR8rTrNrYEBcxPbBQX9VPabu9WHa",
  "key32": "3gCswPVDZhD82HVfHjdzogHr7M7h4WZtcdta4RDKoxY44279d3xb5e8LWpzc3F58JTo1bhm4f2haCb9utss7qr7d",
  "key33": "4sVaL1gWSxPCq38Fx5rjHh2ZMDAu9gf3ADGSwj1MxckQfw7E6CisTmU1YmY5Wyt7sR91gN3axh14sigT6nf4wjiK",
  "key34": "4JLV49Vk3dY7KjwbcTX48K7JKi9KRgp1UbGFQfpr5v3EMeAo7t7rcsc7Mp8CX371SNVvRcSja4yCv1uw7EgoWCuU",
  "key35": "37Nh2CZxwtzZdLSPZHhs65hc5xKUYibd5fWcRL3KyXXs28BJyhJnqFdBSvb3YyYufKP8StyPe7AeT67oPcbLJJy9",
  "key36": "366Qi6es97aZnRpTVJTT8YVxW2TYVwSyPzXAYR2nRjFipGFNLPNhJFyXr7hk2mqQPYtasSzRG3ihNjYEYYjDfWHz",
  "key37": "3FroNHtbYqPCJv391uK6jskhCAypxwBYfXvbuyKbe8cbyZ9Fs4dWqkUBGSqRXkPdL3KuA678VpKXu1kJyNBQfgJ1"
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
