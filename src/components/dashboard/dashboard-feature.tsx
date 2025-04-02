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
    "e3nztG3AjZBDi1ZEv5jciWGMiUA8WLxPCN2rDENmxx9tNWk8NYUmLSmmhQ3zu7G4VUPrsVgNBH5xE8GE822Aaik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmWd5GYrxxvhLDXgZu8XfYnJUwqenQ76EcftjX5XcxAm1f2bgYXMQaL6WrXsYFsEnhf1oNnotwAd1kPZQuAjfnH",
  "key1": "5nUKYTK2nULVTcZBetRpamW77vHYYr2ckuaWrQnb3sCsNgdJr7YUs94oXijDZnbfACSt4GDSm3vbdZF3Zs9d8JaD",
  "key2": "2ALgYd8mdgeZGabGtxW8DjDtbJBd65k3WFVNL8khKM58wa46drk7zPxuBYZN3Fd156mMAvFQQLnzoAU5deRUTb6T",
  "key3": "5cD71UJEfD1GCJUgdjhvF2SHxAR6gAEmd5BBFPjGL2exaqmXgirqdvgqguGhHPD3uPSx3KWSCFw4DHJ4jEohi1oq",
  "key4": "3naGRW1QhdEW4TqQ6fHFXVKg2FZx1Sev9GtY4nrWfjosZwaUGVMh7HdvhcDBgfiMF177LgurcUhtHqxAr3M8ba2a",
  "key5": "3j68Jn6Uq3QTod25Wd26a9M5RjiuuwQNXx4a3pRk4U8Ww27e7L4KVH1mft49cbCooCmgx7TrNfc1QJS3bCFihwve",
  "key6": "4QJegG79CWVaJ5s3PfquhgoLtq41mF7LgeMQa4Z2gxVMeHpYZtCmQXUibbWdqmHu8ChSH3WTyahxKK4WJUeLb43Y",
  "key7": "2bXbkuPc1iiQcWxxDJymFtQ7dQDaDKdW8ug8eK4LTBQGk6BiFfUJXoKPd85gpev6KtDNdTuymktuLVq2RgbWcCmW",
  "key8": "595gVV8EjcZ9pwYKq8NKEr4cG5EBAA9SaRStKJuLpGiioxw62vUmTD3fjaad2xYMQaE3RnfqNtZatounbg4ssAKt",
  "key9": "3LQPiFuZkh6RPUDoCGEwtNgPT3tpvqimv4whDDztYThvgBFGiou2qmvkEWUip4xG8WR2n9iwpa1DdtSe88gNhp3h",
  "key10": "P4uKhZ5N2R6edG3C7ch1ums5ax5Rkoqif9hDRB36BjqmJKp9mv6x211HTrFsG66fLJ63B4BVYcSvwWKvWtmFFtc",
  "key11": "3G2mLZbi1ftcaYzFiytYpYEBj1NgP1cKofHhDo9yRJ8SYhZk96P68TKobadKb3xKifViGEJNY2rWFeBYG24Whr1g",
  "key12": "BK4sfMVU6dPmj4434LxLKKPUu6iGcX6csX8Hpe8DFS41rNc3119YVbhH7rWexaz3iuTM2hDDwtSfc7vw4eDo8CD",
  "key13": "547oXPCGzAufoLwKgqeU2yQbwVUbMgucMJKpoXsM9aZZRQxQc5Nj8stkdaznVoCcRmLbg6hhvSj6hyvvZAuYwn9z",
  "key14": "5V7AZZfxdU81ouNwGJed78c619YpgaFhqfv2sLjfbWnt9hd2kR2x1kfcU9VE4f2LoC6FU1s1LoPNLhYHE8b9eNL3",
  "key15": "37Zbz2SJ4YGYM5YzHaohN8Q38vn7fmZaGPMqHNBW4wkWzea1no7rwTLB1vwk1PdbZWENG8JGxYTtLaYuYr1LdtEJ",
  "key16": "3hFu32JJUjKrNkgutK3iXwsWuidTcco6JbZnVsMtWtFFxCtt8PAArf14eKnqR11uSJZDVmpJv4wGwkZbyMcos42h",
  "key17": "3ekVHvH5MyB727RL5zxPKByB3KQYuFHb2C8bjtubPugNbFkuUToPV9NppAvugoqvHgKuLg6EcE5YUwMeXHELDhFx",
  "key18": "3Czbe6mN8s76BGfsm35RF4SQ97XsNrvKrpp1Sux3XAMXitSp66vsR72GsLT7ABFLL6kdfRpzYZGWVTAXomxn5js6",
  "key19": "4z82CyDLumwfyEm5Qr26Pdd2fcdLRVFarKxVJv1p87L9cDXpBi9womtPstmdUekSGbjVHCQfqHUavFS6sQaxx2NC",
  "key20": "4zrtocKCPLA8MSuJSgsRcoek17z42xdnEk2ZrxhkkVZJ329nX5CTHZpGDFuCA23cNNykiQJKnvRQehWLkbZgcEoL",
  "key21": "z24n4Vy9mmm4zuWAUyT3DkiMuU52ovQVdsL5TfMKEN9d63ghjjQUTupZoMs14cZktMEyEbwRaBHL4wHgaCVcQYW",
  "key22": "2pdKEgBGx6ef1q7ULrYC5HHXhHLh6jzRjXinK9GJ2B8QsQYf7jjAj8DSQJ2Wa7UrGTivvtuU5RMrsSNTKeLStkaz",
  "key23": "4p4hw23K4s7TZCr3P6623k1v5J5hdHroJQWUVLyPHuuc4dcwYcor1uaHdtLc2Fw6fbr3B7PzFnXT1332iFRJAMVt",
  "key24": "651CwbNZhy93GgDzGRzfC3J1oNvATFAXtm1d1R1Y2xAahnnzseiJ79tASf4nYfmL7AuA6cX6uhXxkudZN4qzpCaP",
  "key25": "BKFZyS9LojGzvhF8ByrnATJpK4eaKe4SuspK9BLucCRcbcSJbgdqxX93gZCoTX3R8d2oXTQ3zLgeYNLYKsGefJ6",
  "key26": "53de6haRhBVy2TMcnVqb29g4pqudwA68Vjs12ZTz6VqkCKVVw9Lx64WjH1w7VjvvZW79i6bbnXnLpajKpwd4zN2P",
  "key27": "4MDDSV9NjysW22DjAYVnVTnNqeH3dQ5epgtjViYURMZLjnXA9H2ZMLJpkEzvShDaVsZBwSHciBXijsA2qraK2Es6",
  "key28": "2NtjQZEbu6s2VA7eKGskH3ey16Jjke77kmHRyo84zXbgtL5Tujy8PgV2ZNBpcHJvFt58qgqXokq3G7NTcY2Kv2W9"
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
