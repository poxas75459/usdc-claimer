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
    "2jaTiLUxKEARYc8PUSrFU9rEKyuFdQfop469S8w3k2pEj4uNad6Zzn97s2vSPyVHKwW1Ss34zQAFSwV8Ni4XTc52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26wiud2eFTDyWGJVrCUGzqoAQyuSmgx1TPT1wsU6wcvUhJqMvuSaCKuRx2srZpPSyQTCMxxDJnHCMJXnRLRYFBps",
  "key1": "3qz7ZJeJhmLUkBtK3TdrhL3Jq9WMMo6s4M82RgjHiAivbNh2Ln1QzuntGzuSHPWwLX5TP5A2UGNsnzDcmSnnJCDG",
  "key2": "2ZT9A72jHcEY6wXXoT5TWnFnT61Pfjd6JiaQHjXK6entwYd1wZBepoxYCb6gzKcoiEsTr6YPx9SCFSZdHR8dJ5th",
  "key3": "2tBuA9txyigVB963zsuDWc6pcAJJc42ygKuWzhwUNiKtpzdbXYLD9M1YgUBbGUcVgtTQqdXzrJ3G2Rv3cbNJo2oX",
  "key4": "Y47CpvY2A9Vxdc1YqA5KonB5pj5PVHToKSGMXa1ExZgLLXfGMzLbj6oUjdyEGJ8dp74RSWc8aECottYuvnGCHz4",
  "key5": "vcn2buA37sdHg6gh7s98zhtcGn3GPzajV443fQyHVzLMsJ9beawhvE34guirAfN7DgcC8fu6fYmP96CF8YyYiZ2",
  "key6": "5EWEL6Sqn67ccMAsg9Vehtviivrb5o4jgKmK4DVaBGmMkmTvckhEJqEupNYXiXrTJjPEoWfNonNMKd8BjoDBVczt",
  "key7": "YsngFV9shgZoccwD8foXrKpP2bs1PLGMzP12RoD3a9JP3gqtD3PqgHcwS7iBgHd2kFEeBX5DpdoxBaMnbUzVt37",
  "key8": "5s5Kq5tBP3izdNMwMpjbJ4HWGCqkHcBhGC4pZYoZQcLrtvY4LbUyNXeaGrCREhu952rooJcdMWgQZNXFRcYLdveC",
  "key9": "2kCVCM6qXdEq7BUDwPqrJHHvXxgMB4vEqke6pxRMJYMATuNgTFcL14RByPcBfoT1zsWFsQafMVY4TjUwVQKc6XKT",
  "key10": "2sntdTanXYbN5FRU37BMekR1A4jXpE4nGXGcvyrtcgMyyYs9BLZCYd3H2KGDYioz6GqDqZ46uD5NSPjthDcAZ7xN",
  "key11": "4DUCFXEJQwPmUoFYFRp2qJmCXrnfkAPgnyoYECvaRooQzsEAkFdKH2cfL6Nrtopyox1TwRdkK5xYqV3gTuE7d6vH",
  "key12": "3wfjreWr5NrJcF9BRdRpz6CGsP1tGBMLi8F9cYofGYTDDUAemyBbPBcyErWRYyfXACtCRoxLrs7GQwZXEXNVCVKH",
  "key13": "44fhC2YX4Ao4WhW1SAWKzYvHhVnZfBMrQAWKojh7pyssf3kvWqn8ZbAnriKB2yNuxbvrLHaqrGsy8SQH9HEX8mLy",
  "key14": "3HGDPrBcxjnma11KKTcqRer3wKoYNKGDNRfKtdFaemtn2XjGemXgV9DW38bij7YHesnHdR315mj3w1cay6aaj5fp",
  "key15": "BeL2xmmZSPXutK36Wma14HpMDi5uFFoSTXtXEBSWja82BCizu3SW5nLvB3DEFpRws7jVS2uG4XbJMxP2xDLihxd",
  "key16": "5GRMWUA3KiA9RQ8XJR13LMC1gX5vyGjukgXHybnM28wqzbAz4PVcNtaxS93HMx7XEDT7ZyJbznwwMVRwnNiNkhvE",
  "key17": "3fnzsMjgzxyc19n6XAqvKH3YGzbVswwpfqWmNkeRj5eXYQvy7Sshae6EfFPXhKeHtHnwoEVDnKpxcRcTujdTn2Yc",
  "key18": "2hxjBLmHxtW8CjHHB6ap6G8yMuS3jmNng2rrD3y9RiWiHxCdz7TMWQXeBuHGizJgUVrN11F1RLrNyDThB7ibXztE",
  "key19": "3tFxRfY1arqumv5bRZYgB8cbTeGVn8tdeFTV25rc5t4gaZNz4Y5C1QhYb54wthA5WEjRw2bu4pV3wkxCi2HBP5pG",
  "key20": "5avNdmEb3PHkTPPnSof1xJuUWScc6PVnf6yu4r1guuPoRda51Cyizm5wAfTn2sWWxT53Z9YV2khbCeerv845wZeA",
  "key21": "2euR6n9bUoEV3nF5dEnrjrmA7Pe9prGnZdg8bBN312nHVqAYnXnf4Nm87gXexAeEEejMm6zU2LHFFxUpBLEe6HqN",
  "key22": "2nxqyyegmr4i6Ts8ErcYJmQJPHUeYyNMd3aFcVoToarSGaBhx9AaT19QQyG5nKopMxT6NnqUdMUzaHYeBpio7WxW",
  "key23": "2jSypYwoehf34jyif2FiRvXMLnAP4Hirrwyne8C7iWXoMsqDcwKTV7Dua3o52uqRQ28TMKqTsc6FuXr8JnzPwezu",
  "key24": "5GhA6rvYfSzL82UeJ5GUJgQzQ8fNSfbRZKTELCnwbH2zaM53AkTC4NY6Y4vkvyxJogJwQ4DJq3vhm3GUwxfYSYc6",
  "key25": "3boqtgBGDArTKkrg3WuApKEZ7WneD986QoABVAaorvmcyB3U4uEV1t4tjstPAAAM1pKMgjz7ugBQYLGea8iphCVy",
  "key26": "V6HEwqxfabvgiyuCkxwRzcTZwdWYiK7JtrZah4DZaEMrg31cuQz7efUe6EFsDyFfpvFaSSBBRkNqrizgt3gbGXP",
  "key27": "63BcJjZpNaMtdAhtXTNjfZ2XV2cMq4TtVGDyZohwJoGdUQbVhBG5i2NYx67zmeLZUPnQo6rjYiTZQHFEiiggc6YQ",
  "key28": "4xERQW6shAV9NVv152ohjvnwGFVnku82HpHojb9UoZMApwQjcJB42NwgzoZJq7n8mP7YuQXyHHptJx5Dqk1zWk5z",
  "key29": "64zK7tGcwP86fR89xYPy75g22jX5s9dySzf4CTBKRZUSuEi1cXveSqTdiQfjYx9exHFR8XZ6wrUwPhXcfgF9tSER"
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
