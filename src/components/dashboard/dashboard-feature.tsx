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
    "4ziJMLQvV8XfEqB2d24B49TtbrP4HgbeRNQoRxzJdHUBRUkD4Ag94xsMSugwGPavYxByXNZD4Vp27sjS17omkPLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9TANChLcqnWMbChPnxrLS4JjJWvdbS2QExpHvukubNGTAL71gUQgVXGv4sbASELJBcoGxskBMWRtjj9Sv89NJA",
  "key1": "2xFG2vGbp8XyLVy7HfbmsD1Xkpna3173JonG6PGeGPb4KGUoYA8wRWqotZKzDbVRbGsVcmVfae2hY5b5MQ1dQ54f",
  "key2": "4aq3ZoL7HQECHbzLXaHzfgkqTZqCHyRdfZFpxr2XVFq4v9rHBAGbKQqgw9QCVappCVtXT777yppFDo9t3G2rXDbx",
  "key3": "FK1qYNecuWqHb8uovSiqRTjT8M4BWLdrkwvxb8mgtj3SNUSUwyHkV1LjCT8QBLwj3Qwv7Xb33kaieby4pVKTNZ6",
  "key4": "5R9o8uSJhbcaB7ShUQJHHGB9yKWcHQRMZwd7oHNPKG4SR5hLvmUvvbmb12GarLeKrXYssVv13spnogxVjotxLQ6h",
  "key5": "37Vq2qYtHq3DNjqdmpVJzX5KyKRzuH8fGK5w4qEKCSSVpJTzYaMWMS3XV9K1UHYgcWPdhJVsgXTjd5ymF9PE712S",
  "key6": "2ZtkQN2rGv5Pa7FSuJp1z8LGHr1eArFNeWHq6NxatnSxsKbz1ebwTc4ViWpa3oDFGxNZ3wyCxVfFGiPTZrHK4qa1",
  "key7": "5WY9nEwqR5iALTwbqud1YckssyT2vuZ8qjgHy4HA1C4c2uF74TuhHafGxoEgAP2a8vT75DDkt9YFaUKozvhTcRky",
  "key8": "3tjNVviYT52UXsuPtH2gX6zSUfydVGU51H9rhwJePA5f9TU9dh4vmK7Nf2FnMjqFx3GsJzV5aPUvYpGc5rrQ5QCz",
  "key9": "3WbnZSHw9ZrDk5wdh4YWkESPkYsTefUeP4FF3hJ5sYjBoYLp5fPcNfHB4ACMZzJY1mF6nArZdifcSdqg5VNes27G",
  "key10": "bMJjiTAmfVGPd4aUXpkxeMAT5aZxSfSdm74C8LMQijEobpwFjaZjWAam7L4kpEZqvZFt4JQMX1WzkTiqenGidMX",
  "key11": "4yrKQGdL3ZXHKWyvRtNjbsHSjeS5ifgg6cezmrCsAKSZVoc6tj9bMnmAzGtw1rcX7meeGAHYyNAWTpoovwUXqSLj",
  "key12": "33cH3f321k7hk39UNxom8HN9UDUpyT37DLCT4j3RiBESHvxJ3apKgyTxHjn8rjFNSsPF4Njt7LEZTWCFBTob34Ep",
  "key13": "5T3xzGmdApwHgvMezFK2mMeXVCPEKMdJeBuEKBfjXYQdbTTNkPoQAYEfJFov417aC2wV7EU7VmZbRcdviFTrwxcD",
  "key14": "3QnJjwHPqd697sUnxfvxbaoDKjWwsismB28gxd8C8vMP6yRfuTNnytqpEBLJQxigJP3Rmru1fR432NytPef6GvRj",
  "key15": "3uPJGrqd8vpiqDyUNmKXaVcUVJyAtzFCXd5y2M8KafxpY5y97b7b5tdUbDrS5dr47juo3TKpSiiProit3DGbtSQ2",
  "key16": "GNNjKKHWDAAx6ejGfT8xwwvN1i3wyCpsgvHJGJ2AUKEaY5zNxtBwgvg13Ceo6biBZa1UKwZzTAc7H6cpPj6MXfn",
  "key17": "3XgjMMG2zB3gJhjLfsPnmB4v8Fpzby5yhKehbJUQYibTQHfnwXVbM18gKfDmejxJ9yH1rWpop2xjyRhpvU3YtR5i",
  "key18": "5u4vkTYL1LuB6eGQUmkxQuN7LrBrzc3W4YjPncNAa38yskEKYAbmioBNdqCmrUH2UEGRHZj6EiU5rSa9QhKWLSKr",
  "key19": "3HJphNXXuq962YqZgF472YoTST8EB4Fa3cMvXWK3vmrX5CkqmLz8Vv8QuPHZBZRRZiW1WWuLKwBvHK5LzVyqj6Uy",
  "key20": "22uvs3H6jsr6uQfaRaLiU9rHb6WJFouow91EGmvZpaJ39V16orGqRtmTyMQcRtyAfLavv5A9nsCXNtyyZqteUosy",
  "key21": "4Ku1FDFssHw23TrFZhMFje3JLZAcGPE7LUAktDsWgDjAzGc43LWy7m11TXMX7ogftSe3fVYpNZueWcKMSbu8Eiat",
  "key22": "xyNEX179yQvz1XRo3x4NGRJHwma4B7yEbVaomtBrGFyWGQhw68KXTCnWECGskkXrFeiJabs43H3S7eJeZZjqn3j",
  "key23": "5TLDbxXSDvjVYBTv15VBgKmrtyVruFSyxxGKWkB5iKoWzMVrztXpsKuZoYa12osNuVsgVPNffehgnYBWMgYAh7H5",
  "key24": "2tYxrcjr7EpP2Hv8DcJbBoWWh6jhj66zhMGhD4wfE44i5HXXLhwXZrkVAX44bEENXbenffL53YQkbKzuhFYbrpfq",
  "key25": "4UhDLxBGkj5UrjebHMLwVDafMGRFLemesRUTJDrpXDsoMVAjBnHfMsEWMeje8FRbS3zYwUA9zQF9PurLAJxxrZwo",
  "key26": "4xHTH8gsg41HNZWDB4sfFu1jCKt1SbzhX6wjDhgoh46PNNmkWtrUWaNCUfKZXuJsv8LMXgrZT9r6cnBKiCQkhkU5",
  "key27": "3MYf7jGoyupFj8Q3J84yyrPWFtVWc4FH6p5zuFyEpxBV52pC2KC2XdiC2ouwwZkGwp6zaCyXJiuCeBxifSxgpWsg",
  "key28": "5VbM8xpWEh7e5oQGhMy5WXkqQpvf5g2WA1JjBnVDPNe4Q3UrAKwzaLcdyWFKmKbWXQxqLKp8MyTny66pgsgcjZU9",
  "key29": "5WM6JFixdpmvabN2gVCKTGPWr83XPfjz2VQg1LzoYos4W5f56imQe6P4Dvw4isPj7v7EDv5pnFtd5EHn658N6VWi",
  "key30": "2jv4LDm3PXvmr8Eqwdu6FcXEDtkBwfGkcWP6t8VjnUmKoyaCYfgG5kMZcLcwt8PD1tTwoYZPug66bwuydfSkDEt8",
  "key31": "4zrmSvJDS3dbTdaFrk426JJNxrG3EMaXDn5TfRt4mnjtmnaLLvNpWYXgmu8yD3whvPhbxr8HPK1evCFgmnL1N6MG",
  "key32": "23gWTUQRdhUpfWUukYVS38dispkPWSpPyXmqC33fc5wvAmywFFRYZMGK77DruLQhtbMucJwE8hAHVWhhUMst9dVQ",
  "key33": "2UmzUYTsUQWTZbQ581ucvagu4qPXFAWLxJ9NSCGmZdmNBqYqonuJYhXeqCDKUmVb8T8n9pXjPMz8hLFmLB7A4W6H",
  "key34": "4wntzGfMjpSPRdPKQYj4bbwGatBckBe8ZhELHou6CiMyrhSU2ZiE7KzJVHfmg8s8s4uJBHvUvPrV2y5moeSDVGMb",
  "key35": "7c5sxi77r2q9Vhd51BKvqbWhBVADwu2D7FdwhcSfsKmhFQiLzYgRkqJWrqcmgkgy2sJ9EiyNxTgtq15JmJUVUJe",
  "key36": "3iy2MoswBZ5ugZpjR3HGUyazjSFvseteaJgsND9NckLEqx3z6oucwYjPydkfZaucVDPesFp7tH7kMqpn6pzHn32z",
  "key37": "3NbxJXvHzruuf4LSMZgPrZY8i3ZWRqFXccXJzaWXrn3PDjVtLM2xvDqojDMjPVSvv2LFt3QaEQedq1ha19ERTPHk",
  "key38": "5wpoD6x6ATpDQURaaMwjYUWUnWLE4zmZ4Mpt8WWVqY9AHLWoVKmS2bR9UiE8R6zZQej2DFN3n4ntwgLCtjrSVVVM",
  "key39": "4iDN7Vnpk1n8QzVRXxreqFXhojoQGpMAP6VgjHpuN3iJp2NFnN33dpTuzyJSfkHUU8WF78Ck3bziVhTaSFTD3sVK",
  "key40": "wzM8C2Ksn6ovLB18Lz8Y8xBvfLx49UnEVdnXPydDopEZeA3Pg1PSP4JvsxeiC5Sm3bYFRDToN1pqd28hecrbfP8",
  "key41": "5pu4YeTEtaapevzwQEgEHvpzoJdb7wnwin4aNP5pWyoYaw3mJSe5NZuk2gwxjvyfhq4ftcoriApR8KBg9VhSZGRb",
  "key42": "RoPNFrbJ5M1CwwSenp7ekPttGJVgtPNdekh4vGGKNumpoRmPtqeXvKzFtVBu5wn5NYzxo7BsTBVEDHYLzqkuCWo",
  "key43": "3ZWCbExAsHz9Ac1KGFcbUWWaPNp3ZSsxm6csqmcJquNoi8aLhuE5SWZoHS3cY41QPiP62gW7JKKtH5nz3P4LCKKs",
  "key44": "4ocwKkeCYX9GfSop4VHLzseknNs5ZUTf1hLoMGF1sa1RdApxGWGbUPkg7K17eqodCmrtTD9iVYKpvHZvkjWuvNSn",
  "key45": "rm3zFhFR6XmQuiNt8ZXE4LpdfDqREwfiS2Wty99yFZaQqR3X4LGFjLDX5bsiupaHa7LC3qtH5tEXL1oKZy32vt2",
  "key46": "41h9MbtaXfnG5xDpxvjsobQXbugnDKxuHkqn9wcauttFBAXugKNM9PdRvK5Fi4271MPPJDZJ4FhQQgZweffqnXK9",
  "key47": "4eqgHNiYAAPpbg1kHYoFUrbMLKhmYN6XCFoCeXUn5GSVBJ9RxRrj9g5SbKLXic6qP8ZX6b2FZTMCrPekFarpBTVh",
  "key48": "wQ1GijtzFukSLw4Xz86gDNP1ugoubQ3hUAM7FdBy6cUdGBD62VdBdziT8kjbK66MVkT3QNVCYgjeYE7njy9jbWf",
  "key49": "627egoRcL2WEoFBoJWa4aEUpEQSCzpjFtj8NZsk7VVtLLL3Y3P2bEUQzjseJXJpDxiG3Lj82GcQU1kUwPSj2YRH5"
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
