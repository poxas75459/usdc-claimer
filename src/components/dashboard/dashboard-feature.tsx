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
    "v6ysimGEn7aUf365u7gQqmLnmpsvDRg7hMBtRDJEKxt327NiH6ND5JmmtdwFhSrvfmBFZN2YTFgKXpf8atRy7a7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34dbRoyrnTRcWAF6uvm4NKZNxmVQUD41SHorgCiE3kL4iZqJuGjCLASY46BCuVLyUikUZLLdyJ13udhk1HaaT4eh",
  "key1": "5vQ8VzRj89dWTzU24YPRmmF89KAGNxNVVpuquvS7dxs6bBUTU9GGzSAGxNniqS8q4adAs3pgTnssSjBVkTi2tpyE",
  "key2": "4461s2HTam4YW9NBHLJG9nnzzMEWtwsNH752HrWtzd22aYyFazU6VAL5zpTWCt2S1XA7DWeM8wu85s8Ebjno9SZY",
  "key3": "3XQy8vVFtBcwwAtgQPXLsYMpQA4qZFaYWMnXkuyV7sDxpKjd4LFy3YvVugkjATar8D5nqgTRwgywM5xtQutMbDH7",
  "key4": "3WdH3rwmkjyppzjA3Fsfsvw3QYznKrNG6NFejU8oPqyNXz3uNhgcPYDsT9PejA8SS3VXbmvu5aRNpp6gQ3zBksEA",
  "key5": "3S9bpHTGwdzWXbTHtq6fZceetJnBh4HLVWdik7PGT6K13JZntbr5VpHVVdy1TSBhf2SWKgA4sN8dvbRTmuYGesjZ",
  "key6": "5dGbUCBnxzcu3YURD1ZZN3kmtnMW2rLDKijwSQoouKR4HMjq3kbdfN1jwz8tLoPGTt6KNX855qHgpcpnyZuxJHPq",
  "key7": "5xnjnUPGWRXjEFDLrxfXUcMonup86JugtFS71LAZc8zM8DWMpbbJ6KqiKtsueJwzExiwgqHEk6wtNFMhsZcmud5C",
  "key8": "4AcY7qdh3tuHm9CWmu3G4eeM8p2gjjF9V2d99RNh9c5cQbYEYKDCvUoRqihZusePYuWnoZDmpjGfhDQHseTuN9bc",
  "key9": "Hb6WToHTKir1WVwVyo5fcC1JgiNqX1SZbjBNW18Wkx2dBq1P9j529SWKhSyPKxx2t9n4w2gmLrusEUgX4RkHujj",
  "key10": "2vb9sxZswTquwYdiRW6qnNYHCajNK47HRBWxPoNvcjjdjA6cA7wigXtFTD521PdWhB9GHhdCcWPjmyy6Gr4N7C84",
  "key11": "4iwyr4MWjNKTh2Syrnwzt7jbhTTAxfLhYTK4peEyorYdfpWGNooY1jwWtSUQ95AQWoD3CMNoCXWwLtsbTQkG4a14",
  "key12": "25HPaD3UM1kkfHhKbc18TyePuWZ9v79bwqfYV4i7YQ43WWgirfwZKvbi2RPnfAKF5TJevEuAFxMgSChgJ1iPeD9X",
  "key13": "62hdmCkx6cmkf6y7M5YFfULvXysscy3vTak4gcqwcmcnrY695DwUeSq4TrFJReggHDH9XwfnqeCFeQ1DKSAox9hf",
  "key14": "2NSZnCJj7QqbrcjZKSfe8Tp68DXc5b5PEr5nFmt5d28FqLjEpPuNcaCwCyJUVcrSLb8qkXYFUSvS3mnY8ncYw5Hs",
  "key15": "4uJginDmR9kyBSiqvz8G48nSfUuVYiJyFxVBpFwNoZxieZ2XF8jRQScLTnJ2vUMHHVvfjRbGGAT9E9SQj1mZkYvh",
  "key16": "4BUyYeFEHRWkAuSogyTLNNnV3ap1tVkb7wD9BFtMC3hGzUxkRuYNECVjRxwmmP4wURjkXygkj4a9DEgkzh93dsTM",
  "key17": "2phvfkvo6st8dQx2gC79G8yBqn17jtzfUvohk9V2734bJSGbeuziRrTnr2DGCW3msifHHQFAgDDmDWXkAVeSExyB",
  "key18": "2deaeiowDo5cyvgrs4vqFPYzekJ1ZVU1rSaL3HZhgZgiCFrufxYoP1ACWXZjeLzkmcmeNr9B2h4rb6GbDTRUDg59",
  "key19": "4rvv2zrjq3f78BLY7U3fiVcoReib5EDdZyALZ5iNBmpX1LSBLAcnzzdTLqjeXH3Az2BHZUJkpuFupJmNfzs2P9NX",
  "key20": "5Zgc36HTRuhqsTab8R24onoRQVFtydNNf8hgk5QFZRWCaeZXpdXZLogGxZVXDnAkrVLpGj7xt3oa3tDA5nupajgw",
  "key21": "2m5bABcENjTwXpTRwkBRTYajabcb6UsdXs6MgzrhPa3bvetB6xWnphpBM4YXpwCxqHcBQWEDGKK6mbU8nGRcaHBL",
  "key22": "myYUk4WZjQR4WzzhKR9cdPxcQLn6imCuEGno4N4ENiAYcX14k87Lcmc6Pi17aHZyRcWGXTypWkG6PqGaGcAD9nC",
  "key23": "TdJY5NFf6zVWHPuo7LeuJbbboNavn9X8Ci8Eh8VauCsJ2j6ot5YXNoShze8JXt7NCACquzzoDhV7js2WzxQYjpS",
  "key24": "5kASfdb88wwnXNKgqoEj5ven41ZbGzDB9GjfxkXhSfdJ7TtSnKTums3W9yVBRahjMDLzjwLHpjk7ENQSnWgP2NiG",
  "key25": "51J1EhX4iYETaSsBX8GgDmLxjnyHgSFb8tNzePEZFVYfDf376g76W2kSHL57NPA77LpZn33YHDR2DTgZr4BdpxZC",
  "key26": "66MM3RTBysi85cUioTXzrj8aFLQVRWQnqwoEtTX1LvXyjm1K5U4CULdUTjYYUmogxieeQEiNPae3Mj6K6e214KnE",
  "key27": "AHv6yqZ2zVwoNp1LdQ6TYUR4FUvpaMeiKvFWPnoyigMS1KxfocRMWGp2cNWt3Cito7otXxiYkMeGveiNzUetznV",
  "key28": "3zs6MdEuCYXSmpRjyredGPmHC5riExakYxAf1JWumUjWDt3u2bs9Ct3f6shmpDvUVhwoaCHHNUtYL79CRU84GpDm",
  "key29": "3SVeDKthDLBEMagjDEcL9eABXEKBVnq5vD6LqMSqMZGB3zGKpSRpxz8kUnfWNXALVezfQg3VVtuhcMyxhYYZ3tQ4",
  "key30": "dLFYhwoCvjsU6puAdY7yB25JZJp9F8tqfkFRAThZAxyy2pFCNc1UbZd4UBE3fmEH1cNL7QmHCAnhhVYVeJqrBik",
  "key31": "4Fn6hLaWCFmPCknqKuMweexdF2q3DkkVSgWxkBZVHLRhEkb6R41GGdef2AhTeQSzkW9otT3RxVbW556GL2GWMMMC",
  "key32": "5zC9wMM9E4eSiJ3xQczrfe7CfZkmpWAK5aWrr5Xn7pvAgRFxmPbXnm7SPf6taEeKpUfhEu4Wc6NZb21Kdbvq4xD7",
  "key33": "4VfzvrzVarwoiEMGqdGKGT28SJkdpzntFikS9UV64Y61N7EZ4V93gEcQ1QWEZn65JCS4Pao6x4P4Wh6oXzaejWej",
  "key34": "32R3cdQoQ4EcKetooMoycEu4bSqFALKo49k4cbqvBLjAsFbBXaWvZu87bg5Dkd1ht6HtLXoEwVfJS8c8XcLHCnME",
  "key35": "JMdzryCaMS5nL6cgkaM8KDqiyKUnRrL14n4XKtvEvbfYHMtquqBTXEfuHTEn4itsgTxVxLVeLMS3vzyUbteEwGJ",
  "key36": "ECmR2X9HEDubiuq8ro14gPWDS41JUNpuqxXdsRzg8hbo1cpAZP6xFYXENdCpS1nXPyx8vtjeuAZjLdfF1ZTcH9W",
  "key37": "5S2PVhcxwRbqXYzm53BQPJd7of11YJTYL34L5cNLRS5rHUKLFXVwqd1VMtfPkM1SkMd2NmaV38AiKfqBPs1ZtHa5",
  "key38": "4vmJez4SZtyanrdPd2TUfmubPsAMNsXZdKmGanB8hvp9gsYczsNu1xxYwX82rx2kvG3x6KQcC6Fgp2FiyWcV9yek",
  "key39": "2Bt46JtLKjfy5i9reRwpq9AkkMiz9MSnPZQdEEbgWUyECFhKwwgszLE3W8NFQMVTBcDYWXU5DHnQqnFapBMzAkk6",
  "key40": "2tCfnQRDWi6KXM4TygHhWN7MBBiA4cJicDwN4aB2ovLipzbgjVSqqxgmabUKuFnUcf8WHTXpn2SAv3fyac6XCmAD",
  "key41": "ggrcVjkDAHQowptS62Er8EdsXrY1P8LTEJBjfqC9PQBfCrKjrHbaAXGgKFjDdpoedwZqDyUAq17ZUYpAxYU6rhC",
  "key42": "fX9hmLBD6jUREJxbKEJwpSzq4h2VQxcm7Y27ekDGV9VZ18oC2fD7fcuCnEodeyGkSX4gf7uAnC8PNfmFhuGpLrK",
  "key43": "wz7KTyJJJiSehG1DXKT9cDLCpNqxAy4hiZqrH4cd3od5UBSntPe7RKc5N17m88wTt5BbpQ9Y1jb6C3Abgr2Sq73",
  "key44": "VTXLA6aVeNcFSxB8BsxsrySs75tGWVgd9X8kha1dai9M5PurBn68Skec1JAsUzswNekKBfCZjGpBXYxZtTazRjc",
  "key45": "4bHBkvspvhTsoNEMxyifJkwVsKZKn3HPeRzroesekC7A3JG5QV2TU7cFJXH9DFQGikWWsbmvcVvVAzRDwQUCPwtV",
  "key46": "WNYer8Y4hFeihDAk8EFH96kZpm6BAKmuupcPhhdkzqydZRrnz8KeVVZoHqjMTDEK7yffT4RkwLPtMRs3Sq7rYNP",
  "key47": "2jan5kgFP9JUewZ2MkSL5KZqSSZCHnek7trHW2sg7JfZHR9Xar7oiDZx2kU5C6vzaYmpJxfN5c63wonoHt8ZGtci"
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
