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
    "5XAXoLWnpyh36jXWeTVP1YqNtgMGjzDkSc4XQSKsHHKhWSxc81PsemH7ag3XHz9u1HraMYWyowy95bLNkuV5YHRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnfwQbGcStwghNBikXdhNofpe6dYvhnamVd54dR9iYNd2SNZ6HHvuzPTCd2DKcp1fhPEMvRci4m9Y88wbxDoM2G",
  "key1": "9KNiNNhTFfMvFEyGv6fvxqCdQfBu3iTcdtD39U6DkEf48L4eRCeMdVQhdxiLqYGtYhCvGKPbBuraCjNxTYpGhjb",
  "key2": "3YvaMDHJPcBQb2ApPMoFFJ62V8aD6G5snm5mCNH1yFQYH4wyBY5JA9BA3vHvpVnqCJrwMhbp97sZxk11sibmvcNL",
  "key3": "5GdcpK4xg94g73oM9w78AGUC9AWNVn6RCNuKHaFpKB59rbYdgURe4gEgSiPNx735v2bbtshFrBSyAQc7NPXcavfF",
  "key4": "2XKdXqaGFtTiP4bQSFN6LyUu96GYQp7ekZy5eJopREj5mWPYCgw7eJcjCKFmg8hVKANCdj8ev164TjNXvmU7e6Fs",
  "key5": "4NNr9AnhZ5Wa3hyyeccpzRGhGAgCdhQAzWfTzAgmuCz7Hrn4X5ZYBWrBLvQo8hbwH3kgKZMb6LsRszQFPkY5gbkE",
  "key6": "jTTU45JQL2qfjgTepLS88tvL3hhMGNQ2yY3jihEXHufZSorVS83p5bqyR3sqDSKa6poM7fGZWRJ53NbEKL2QPMw",
  "key7": "4T6jfAbTQCBQSRAFSpDBxfMS9VUEpWjQiLRxpMRAVz5KNwstCVYBkFtui3TKv6q9kanparEGEjr2AvUnm9PaxMiG",
  "key8": "4r9UGAdZjGpqxcMUjAS7gU27wFJLL8fvfm4ohr2sdJxru2nY4SeaTzeqkvhtdF51aqyMr2NKs8BQrdRpdbfzE9oM",
  "key9": "3vwgWTQEzaqqXwQSRkYiDr9tSw8tYj7s4pBVHYzeUogBbyPqhQK6eZS7yLSwK3tre8YvwFxZmARgaFq6qw2uSBKA",
  "key10": "4sExE6kg1rZpvVeBt3yvMcczqKoQejV4yLigC8pP16KE69dCpccvM5ynnmVxginntWZwpJ2fwcChgNcQ6VfpWdfS",
  "key11": "3GaawyAg3TY57LxYUDuuZ6V2V91zM4fqxgDNoSdnkae8SCZFytrr9L5XpMmkyCPFQZmqrKhJj6Ac6cKd1GaTBhKC",
  "key12": "355Hz6tvMQQDFgvSwq9nUdNXoZNEH6dGLkk3fRuP7Bd9FfPEEHsKJBZhk3b9vC1CBBVe3bdXrQ57S6UZq7kGjWXV",
  "key13": "5JJXPBVKe5MwbPL77BisV3LaZN1ZyabA8PKmqHYnT7AuEYX6JTyjgXbz5MABR9rPYK7JqAhvRHgjtb7TjxsgCjfP",
  "key14": "28f6miN7fD4E2XrfrsRWDf59CocycnK3wz5dwwPEf5oZLDSKrMGbTUjmCCrmxz7CXAWg8DzuiPqsnQ3Hqk4im1mt",
  "key15": "3YcQE1GoFZfxbg1rrPYQjcgFJCAqaY8tUeyGL1so6c6tgBSCCaSARCmKpWQfcWWYTTLS11RAXU3XQbB9bdz8vvje",
  "key16": "5vt65TGmPwrQX2ompamBQmA4JJS3ksTSFmdmFo3y26WGBFrBUSkiVCbS5SRbejjR8nyzUkzhDgrTUCZ56tkjLi1z",
  "key17": "24rzYmuSVdvq4d5CQNUQFv1wFga75SazZsusaxCFYt5TLuy7fJCoave57hfgxVFDWeDyfMS1tvPcSGJyn4BoEw1k",
  "key18": "4Ly4wtbfzukUXdFM21PvtnyUqgcRShM7B6a79N5KUZ1Ev8N8XTMvg8gEB6GzcaVEybssSYhKgp8YTrA2VNYASj8W",
  "key19": "J95seThTA2LyxpcwQ6FhAjy4yEYHwGGR9BZ4vh8278mEnfNsgZyos9K5J9D9JHmAoJGXFSFZPH93AFXthbYEJvq",
  "key20": "3qwsmyNYbAkeyhpQ71SnehvRgqdMCxQnxJdKyGeE71dZgS5fEu2iVBBTn2jQE7KN6f3vXEKrSConUbpoQ9BjawC3",
  "key21": "41F4SyDom7pNPFhCLQL9fUm5gH8sMCJhoSB5zxNuQVSiyyQha9WiePC4jLNW9gsgu7zsSpgYLPSqP6gCD1u7t3RW",
  "key22": "2ZFGpyWdryARw2dWPXUc3ZRc16MnMoWM4NQ3Ebbbo2NRjMwB1VbAYsKJESXMCxAYQ4FUMLZMPQiEHBWwei3Azvpo",
  "key23": "65Ai3ecrd45dEEJV2a8Pm1mELb4AVY2B9VSwGxxpsFXqk1H47bzTkvN6vrwZMeqHKjrR7Y7rtqWwgMM2LPJrGuCu",
  "key24": "3AnWeKJVxYxr6MG9Moy7UfM1X6Am6nBoEw7QyJK9thWunTsxrcFfFyxSsDi7P5CkAJebQW7jn7e1kK38V2sMRgfd",
  "key25": "5eZ7eECKjP6Qztgwd6Cw1jme2j258KSPYnbEn2aTAQ5TFLqN14741oTPsxv3zajGt7d3kj9Cg2Lo7V35g1rzvR3x",
  "key26": "66JzHmyC7oyanGdPeW6GGjoNtwH6QXeKkZoFVRo3YKLPPqPryNdw4rGJJBsCMehkg37JJHu6ScDmL8WPDLeZMqMq",
  "key27": "3fPLq6F8S4rXipzfYDq71qGFA3r2j3iDFB2RSL3JgvDHV6Cw9ufJAdQQvXYNhH4kMZUcFxDmYncEUEeeYaz73Yti",
  "key28": "3Bd8xQ62cH89QL8oTJmyFJaWa3w6sddfpoQRc7E7iYu1ZQL9uuyVZDntcfTVhMjv9YP9ZY8CJA4ennjfsBbwgVuL",
  "key29": "47UQRfaVqjJhXCvTktSaFsfx57Y9mdqMzRnNcRswVRmeWNiDmbmYtD8qFc52tYA5quW9wB3bLPYMe2fRCZktUeLh",
  "key30": "3hQS6YB761vvMMQYqUz6Whx9GtLn5ePXHVq3kV4zfug5KtuCW8vZ7sEGYhaCCG2BaVeEg9ZMQ8rDgfBZPzmeia2F",
  "key31": "5pob4da9SYP9YyWPib44GFz1ekGCdPccUu6rJDbMghRxZSxpq2zFpv9NyzaVa56mz35ejUVgUujmM4XCiikEzRCE",
  "key32": "3wRqcr7UNSEGKkUziUc2BFGUspffEVrKGECfccrQjqqkucz2vJTVNXkSeys3RtBHHJUcdVhDtQv2GVZAYhuWozKu",
  "key33": "DW8UbCVSC9nQAXb2t3K3b7auo5kf8JNkHtfiMWxAtiXXqoMBSYJUgyxyyvR4T48ZXmS74FMrYAv88REYD9HP2fR",
  "key34": "4rXti3hcgscHUWi9SVdeYPBASj8wESgYRriWAUPiLPJ4qxX5yzgJbKC1VyLKciED8d1QH5WCSQKBHtXU6Tv8LeBx",
  "key35": "4BH4unjrFYn3F742rnjDbzb8Ro8tyGUwyUgePVAhbHbKdVF7Fm9t8kgJWTKvhMFKRygTqJYgsDr3rq9YSxDoLd43",
  "key36": "GyN3xuci934YXS7s924ag8F6uLayVaVhkaJsrgNiWp6AUqy6VwedaRPT1cRhV1rhDr9KsJqJPG6MdxjQuAfQSiG",
  "key37": "22tfTRLKuYdG4Bo6TsXsWmkQbx8qy53YbzX78XTazvv9sLYjwzWvRBTTF1tpX6jdGzBB7iFHDJ1pTrN9TXdCMhw2",
  "key38": "2HinHXkufGPPFt6BrcrzZ9y9qC9Et5vxHhn1uVpqguF2NSZ7wk5zf8AwsFTWvYjPeQToKcKWCAj1qAz6YffXDpCm",
  "key39": "4WHDZ1kHuR2oG4RCNesBaenFhmDxdiSZktjAs3KNEoSUDRmjnP9fxvYRo9azqJwjRzARNmtHkTQVGrCycsYa4SMn",
  "key40": "47gdPFX96uDhHqY6w4uzTBKBrrqMQGV8zGPH5d3W2nveu1Khmy4MiCw395iuuQvhSyTs8FGTHvJmCEgcuwN3DgK6",
  "key41": "ybfSGmYFFvuxFgePR4JrdrRyTXDgQSgQLyqdbT1M7aPCfdFr4fy4TLGCVUHrKSAzoCJeBc8nCbq5cKmBahrBqqQ",
  "key42": "4ghhyxLAHGJGuC6q2ZMKnVaz9JxsDzQVVYvtSLL8xprXWuuBpp98m6zwXUuLGTx7ZSuHi2mrVqKpwvpfXwQETf79",
  "key43": "3ZnAjwQYK1qsoXSPaHgYcY2Tbg73CEzLStytyXEpbyNtWA5TxFDzeC2qR16wLZUoHnyZujG7LZBuKGESF35a8y7m",
  "key44": "fiofHKaDtBz277vBqbrKZyfjgi9j8RCmbeg3ErBytTSx6wnKz9p7dZjxX41UaS1MhPYPJSxDphhCRuv3h3jxWGK",
  "key45": "5v3tYSXe1mcYUWqPC6j3iWSfF69LANoKFCgCgayVp9S8gjJ9cx7t6dEuWvxEZYhum4RPxLsSHNTkTxVf7zTf4ZEm",
  "key46": "4g8LFuMXSdf36SA5rkEvLWmrmkb86DpvT52zXCswMc1fk446i4R3Rfa7uNtCdCeHnsViuFwEnD4rU8DJhRvHhaLb",
  "key47": "sfGwfeL8X8ryQSZxe8soWTrjgrYXnPvDgGL6y8hRQgGGH5jLH1q4sdgGJGcPbyN5MkS9s5EsMQUmkNHNL7KTdpZ",
  "key48": "2AwPQsdGCbE3xfWFRBpuE2Y8ZSepX7g897WYjEu7DKbvoMGpaRrXBR5d82PNjwuFrKZ5iym3LowANiVT7RobrJ5y",
  "key49": "4JJXvKAFtTzLvLjjQpKDmumodw6MV1U4wmZnq6rwurbouULKgye3PqLg1SY4prnmbRBt6kPHdV2NPTALxS5p7iVL"
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
