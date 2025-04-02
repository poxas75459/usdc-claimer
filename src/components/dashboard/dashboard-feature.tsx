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
    "2Mkpjggh4srwnkHknrsLWCKJyXEHBPCRtDoVjE3mAo3FEtC4QvdF3UCJzZwu4qnV16oYpXLCn2EMhcvo9a6m8ECm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dK5DWdKk1Uvubve7a28nevCTykTgRFuFudRcFZTNC8fFVt1znDuZRMB1m7RM1FnmTxrgXEEzGpPSe9gmw4SE4Rj",
  "key1": "pSxXw3eUa144Z1X7XktUf6VdiA56SSyRUECA2RiUC3K4gWHmPL7Xhffn61cDUbLixW3JmdNhBYkzwhXrUXGKUKv",
  "key2": "2rkbVVXEuZpDxhwSq19m8uuUwGZBR6axKZs2MomBCGCZhCm52dxfAVNsXyiD6HN6CQ1afkEz6DCyv2Dip6L9vx3S",
  "key3": "2342wdBGyY5BqmDUx1r1CMeEumDGqB7fvbMRgtHUNbCbvz9poqDMX7rToocnVHnF3ZKZFYUtEGo8QxKBmVUY7FDV",
  "key4": "5Deq4MViBAE7Fj74c2KtHJ3oJ1toPJjc2e53fUrVBXqcNyy25rDj2gVwRs9Dy5P5uh81r4xKpbnwtwMwuwqAyswo",
  "key5": "3RVvi3SWv4h9tZs48JfdvmRkutmad5jQXH83XmphHVxYSa4rcqEfKSnni5ZrhNL7KnCttYX9DDj3BkVRKfDcUwYY",
  "key6": "2TyYX6zR4iWdnAKyVh1YGrWFjBkYc8U9cQkpowMn5dXxNLW9Q1igDsTi3tPAMFCELF3nkhQad5YF8etwvL1AcYuh",
  "key7": "5FLkUQYyG4QDgRJVmZdbJwSC2FNPKz9k2o1ZLC4HE12ALqVEJBznWwXcJLoJ5TURGScGLwyYU92zBAKADiMTZy2Z",
  "key8": "3TXJXhSZkjTmygiqkMbj2awZdTYWjFZP4KXHkjtVuYT2e4bKCcGBrEVDpeiHBShGo4kY4YmYmNCJDgUdLH8EBQWS",
  "key9": "gVg7R62y7CikicGD6Q5J6j7nDRDSd9vRUQo3Bo6GX88A6sxDPPxWSAzZN8yvEwvaUhafByXrkFcT22cWWgyBYVD",
  "key10": "3ws4x72G4M2gzLNoEvmDRDGyCwuAT8KVpur2iCDg6uhnWLrMuvyALc6K8yENSaGpykvXgNsJ2nrKXFhWAU3Vd5Wc",
  "key11": "5nAAB3sPNZAWJoYteKDi7AAi3bwxmvvLr5JrhvsGRWkQAXp9wjNzQzpjc2NWk9UKm7wxVZtxqdG9QHLdzTUWntvt",
  "key12": "2YKkrjHMG4NjuXY1RgDzZfcprhkJGEXBTj9i1fyFqFpaPd8qKMrbmDEy9Up387wiQ7wtAoBhHuSFANjgRLPPuZL2",
  "key13": "4XR4AVHUZV2urAd8P8BCAupduvYUJhpmdSosAZ6nEi8536rphKtwR5k8SFxCs4EA236fLDmWSUR2q5GLZbfGMqss",
  "key14": "5xhiyUAWJeL9FQmJqAEeXwuxrMt3HN7bVkGzB1pUDe9JGB7PWQXDd3C3hm3ozfXGSFtqPXs7cyTcHd2CN59dawyr",
  "key15": "5VrFEfxqsw5Y1D8i2vQKyjhhBXdHVqjNVWPuZhKuc6zBL5W5R7ACEMbduS46kU9JgXS6RrbYe6oGhdq6YzWGkbiz",
  "key16": "2D8Z7CcU58eyXiDGmxsBCQcngTqSf9Nqxh1hH1EzPN1cbjxuUL4XmxhUc1v3EC5QjJpAvWjeS3DVNLodKMz6BnaW",
  "key17": "2KKd5bdPMDnQNR37rpka8uQyYjCePrJXmnjedvjSatvyCe2Tp2BbBogNdE7CjgKsoMPvqMd5WobqEecu5tQqPcrS",
  "key18": "3pPM5NjBT4U1HibEcNcJRvt629wpCTJjorFVApaZgkZLNDh7HXg33BmLcLWx2D4JTCbSnHPjnDwp1QfXbjHwocic",
  "key19": "4p1sgFQRXJP4eZPotsYWV34tE5WXY2ozAK6njeMZcWtomsBFuSEsEyxLEQY6hFURMz9n8gdTCbqSomGFgwkifwYT",
  "key20": "5x4mqH8VkyJ4pztvS1v5giDwTCdrPyLPqemQCWzhdrPFB3NxCiT9esAPM12r9XHocszkxeY1NgocW5pNQwGFCW2t",
  "key21": "2hxx7f4u9yzRiGCbQVanXUxYjq2mGdW6mk67Hhwn2ssqqC4AJpTzvXLNsmdrXCLPHSxg3RvTFCp83yMqmcnv8wTp",
  "key22": "61GjhHD2kK7KxypDEatURk6Ly6x4KudAkmCMDEPqnFinphGt9E34uouB2Swe2h95oq8rkXHKHSbJ8h1xNkwbqHYt",
  "key23": "4asrUtrjxyxYdQofiNszFKhSo1yktdXNtWktrtihyhtVbssxcfv62ZQmfZydfux3MVtkJhnHR2o9vGg2emifkTZE",
  "key24": "5qcJbsVC2hxZmsnDvhxtdM5x4cPY6ZvNaaFyxvdDNm1eFv5AfvcgCmMhhHwebc23RvytfwNLjDE32NGjnAH4MWvF",
  "key25": "5D1T1fhXRjPMaC7fsouVzVK9n9xu22JUh3csYepKAk4UbWyCzkYNUk2ai92eU3qr2LpZFjBD4WodtATWWtg6WJK2",
  "key26": "3AH8Pr9QsbKbpUChL6w6f61QwaPz47KDZkxCGYaiTRGS3nupYUJH43XUGGrWWMFZgsjfEBbSDHdpaNGsC3rmPPe",
  "key27": "54Yu6KH137mZecTbv1YxXRYP7Gmpcf1o43bbvCvwLD8N5zhxPRQh9RUPihSSXw9yJ1h6rFgAq4NvAu6dAphp8JLK",
  "key28": "41nLipoQ3WvR6F7dGA6qVcrxqz72VXyQkMdryhSZTpshbdqXG7BB6saARYexmqrwc5GrCFoH3mZWHyUMYcfq7zMt",
  "key29": "5XQ64gef5onrCUqDb4kWJ54qV8ys9LhaKaFsf498huoC9M9cU5xm3RbUiXs52VQ3T55VYMjoRJ5ydX8bA39teF1A",
  "key30": "5xwZujmDQTb2QygL3XXbxYwboGLn8b3SxQ9Qn95yJE9Pf5qWxkkX5pWjcuEWMpeCkRFbwzDCkSh3gYpjrQqbNw7E",
  "key31": "3mXXFy1Jef8REQdEHuNHtsT7xHRXxvoAfCsoGYKm5m5eWGXhtzpLZTZnLDYKLh73ANr1TfCjHvPFL7iggEvqGhC7",
  "key32": "4RD665FszdBodbNQQ2zVv3mg4phXKFdpGQMitpoAwb2qmkNPFeUR3x1m1fwzQZHh3ZnytGSF87cs5SdAyhzLr9bn",
  "key33": "2j6XpoNJn97ZTYN1ouw3kg2fDjSxE3RUJm7th6pUKqVXeqMiLFZCfNPTKCAR4CpgmDBadrW8dvkpa5hdPCBYzeMs",
  "key34": "5FPRXDJxtcjUJ65YF7yJ6d7D1qWThApHUNxrNKpnX3ZLhtbf1UYPe3DWYX39GFQCWuw2g76rhXFGoswqcJhaQZgr",
  "key35": "3z7SStAh9XQm4xCjqNkbow1pxAHZSGsBevMf9rLs6PHkJxnXk1YZiFBETbZepZpXAAJpVTkhqJw46u6PHDPShKcW",
  "key36": "56Xce8GxdLvktsbrGnqE7vHuGGmLwR6AttgbWK2hd3JyoNES7WWpBK6afYh8ptY1uM9FyyhEoPb3CovECvQM8nRK",
  "key37": "5YAsDM7AXQeWYVhtvQ9SxKrLwHak9XT3xCw6dERgsJPt1NPawU82FegLMz3qKB1aUxMKdyjyL9KgRNpi8fYh8Duu",
  "key38": "jdXLGyPF9Se1MqoeBteYvRjmq5zr787JytbTGzepqJNvuzLGBdEqZboWHUD1Qsu1fZrNhExVjccvqsWDHeLQjiX",
  "key39": "5dUHoFb9VZWufAGx3gQhRaPD6d84WC1tq3BHjYUNiway5h8A7sYpvAAA4nLhfRmvJLv7mbsCyZdZBnsAirV54NuN",
  "key40": "HDw8wUqtvWsnTaZgzDLdCp8sMphrVyYKkqDto96rZmTD6dF6fTBLEZsMqKrMXv8WTGpiXoi4bcnxfRdyupc2rz4",
  "key41": "dXubJzgMx5eZjcSTMHspmbYxJcFSHwCW93xsdRfgdLc6yyXYdjxCnWozHVVMwsLWkZUjvraXHL12B8jhWEM3Lzf",
  "key42": "23G4bFWU5qF5CTMovFoypxFaUg5VRdzJa36vL8trRXWPPU4m1yvSF8JX3bLvKBqHBTscCViFBmioFjvPX9QvSm4t"
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
