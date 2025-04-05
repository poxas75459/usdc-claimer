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
    "5jm5QzqVDmHanpjYtCXmWkSbFvP4j3A7eRFN5Vf374tfNRqMwkGnPZw23Zvd5UScfDpzUgtoyGSF4eXPfu63WwL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21r7RkY48PTespvRvBqnqEAkQ9qcj7gCx9sJEbbcTD61qEUybrQVLLNuxi5nqerp2oWDagUYSefCiupUWAqNT3XP",
  "key1": "5sKGGCqD57EgeckL2kUQEC4juTXaXUUrKWNhSsiGKxiweVGFJrgUmVTH6hERwrt61Q8AxsZWti1g6BVr7YVLc2QB",
  "key2": "4uWKLTb5crLoYk6e3wrg7fniSuqLfVmGAjDFBoYziZGFS9qqExwnkysLkZPwrBJVyqP8ZVW4h8mih4c4jxH29Bwn",
  "key3": "5ivt2SYhoGg3ip47XTUjbD3jkP5TqQZSQcPs9Q24NMB9uy9KVcJ1ncLXz48sbunqQxq25xvE7tcDZgBfHbiyNECJ",
  "key4": "rRMojwGgACYh5eaKHfMZv1xhkZ2pdzgMAj5LyJ5ZgzyZYY6ok6kzbYM7qnpc1UAAFVAwWZdCbSZR1StMcyTCyqf",
  "key5": "FMVpUyz2sbyCKa6pEPkps24jo5fstA4SCoq7HsqrEoWXeaTPAzxq9p1ZS3f7hMskJNGiYv3nMtdKoVgF7NALCGs",
  "key6": "36MYA3Lzgsjjh5pRq5jDr791gjDZUyabVmXzYtMGL638Hb56Fntos7Nbzp3vPp9TSuRcDukBp6ZCV1SSgFWC9FX9",
  "key7": "2jduScn39RybYNyksrRUcsZ9ojZAaJDjmdKPv4Y3dcDTvJfyDUNTQb5irN7L7xsJp7gLJZuZm5B6mj1UxcDGAqwL",
  "key8": "2NotEhqYGv2s2dWXg9BwSLez4jy3KAmwkTgRzEcf9rLFeT2udVPBvEkXiJ4HhBfXQyMc3F4z3pfYAJkkmfC4KDbN",
  "key9": "3ZZH9Yf5KQxvP1HjXTcptjLLYpra5Ks8NsqvUJcfpoKW8TedZURQFo5GsSzER8foQpEt9dKQcW7XZsH9tjsFB98X",
  "key10": "pEJtxPWm3MJ2mUuDXsFLmyuHnP9mTPCcJE6vzHJFtpkcecybCEdMPchxoEiNaCkBTU9eTexF8iDzmeNZfRsvqAh",
  "key11": "6719ejXRouKwc2PQQ18VGWuhcYAoxfa7Tynb4gtBa592qmDX3sugiejRyYtecgjZgRVpj8ep7aDDLPLd8wWSQUat",
  "key12": "FeC7ESxwLW8EdgYUBMeWhRi5xzrS4dW4bAUFAQGK399A35bo8PSADkSz1iUguCZ3xUZMN3L6U9ejMgcTmqHQ8Gh",
  "key13": "rB52QnnhXJPxvbmkBFMDWyVLoPVc4muNKeBzfvSG6Zn2TgC8gSpwRyGWp4v64sjULRmTjX6n2fC2D5nzqCMUXvN",
  "key14": "4FgRjzXcLpZSqcEQVFyNk7Vv34Fkxk2nP7q2AaDGSNEM3KVhwXrHcLhcC2xgLokETvV3EJVVtwCSNsAaiweDrj3c",
  "key15": "5vzq5cpois4naYWsN65G91hxrWVoxkuHtKKu5kfUDyTWLpL1GAsca96jk5iqBU8yBo8ywmXZ83qYQvqUfds61cDS",
  "key16": "3Ssb7UHDCVbt3raDCVftV37oGsh7FcbY4D4qV2pU4H1ynw5JDtysQbjxbcryodWGtavzHvgMq6t9cfNLrE5KED81",
  "key17": "2o5CjpKjTBu5M3VzbSPfGuMxQZqUUTVjX73NNaG3ExofsXDN1bfE4nMnioeBJLKwayfrodHHkrfeQcqmQm49kTmz",
  "key18": "5DzypyPcPHVMEqCjxgehgydwRBvAhGmD1ksmLGiQcDg7noRYrBx6rrW7DE6CbJaNPMBUxZrFXrmjjtovffZBhNsL",
  "key19": "iYTmCbYPuAV4PjdnfmWJ1M1g2zLANncmjf54R5RMjqiHzusfH537HZhacGshLoPxy18EwaL2qWyGpk3pEeX9Crj",
  "key20": "2W5VoCBTmiyYXDcQF8KntaMTrAH7cuosQmEdQPaDgo3sGZnZoCtmEZ4FfJNH7uUftyZtMEubWkrV1QLiALDDoRiW",
  "key21": "67GzUQqqbYXLYKbdr9o7ZQBpKaazVEGRnHCMKeFKx5Sbej4eoEp4QTP5cCCa4VXrv7qeTSntwxZoF6CPmmKSQMGp",
  "key22": "2J5y7qgzuzd5dpgbZNdswtzfyXhN9n5hzprpQ3uYv7K1cNFccXem2giNw1bYBKBpFpTJXvKGVkSkSLqvZarXBD3i",
  "key23": "2RsWwfAgmKNX1vAqqHoD5WfrFsVUgHQp5HgURa46hYrTFt7jWLUw9W2UijR2m3hLTvEtGBqU9ndieKTdkBTxBuWp",
  "key24": "BVULANp1XTfPo5Xeki4M447acKnA7Z7SUMbbDUTQ7iBgrytipxH75CBM17FBM7cD9yeNw2a1AJHEEDdsSkVGfQK",
  "key25": "VmGMc3HUZum2cfwNKrjV4EYGpuf2QhTrgWqSeAnzdNdvFcjzRgrqW5gvMr7HYYfWT7zXqfWt35Sw4N82c7UXXvm",
  "key26": "4AJrvLWxXdYxYnjQnTqVeB84pRmwuzfUii6V2mbLHGHdb946y1v4VcYrQdaMmXfTQoHdNMTeBXshP4e2XTDGeKnc",
  "key27": "3nwg2muXUCH1urxsQ4y7fGpWjJhiRxetAdtLhiJyHXMxKeWzdwAoYiS45shSexZ6czUiPVWaQXWFr8DdwWroN7HV",
  "key28": "85mi1yKQbg2mWNVgS8kf9FA4HNAmnRKj5f4wHQpyKZgwq72ChJWhLYxc85gAaT3JThpGDQ5TThcDf6Y23PJWp5f",
  "key29": "3XMZizJDMojYREsWH8Q1LemC8d9U6q6h1tKqXkEJbihXcuwXtu9HjtwiKamsuwgfDfakZsUvga15UmpAYVe37Grh"
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
