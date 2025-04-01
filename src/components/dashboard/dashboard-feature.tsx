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
    "jygWsim9YuJkqqLa6Zy85TeTsYXxmkbZYvxwq29a2pvrP1n8QWFvU3jZpuwmNRAozFnMWZejpKD3pjz51E9R3XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGisN6NYv11wuYj6zHeV46VJGUxYB1xdt42p9EvxvvPKNxgmPK5etmTnwbtmXyaC3MAH4RtsvftQ41DHNVutv6f",
  "key1": "96VQ6ATYUsRhcqCJaY436NvpZ5k2XbJNkzuce6UuxKBFkdprfMh6uhyBtEusXrZ6RDmDYQ2DqNYu36VGxBfN9Zz",
  "key2": "4AE1dLjAPuACURRVyxKqS3rgzvL9D77KmjJASnkxbJvuLkowPojBLnD75eyi6X6ha7z3CkM5yEZc5CaiH9cn7W68",
  "key3": "5dBStXGyGPs9zBj1xmgMyLMpA2HRcAyKFRDjG6M1pLCFgwHp2UZRAnSbZVBNh4qSuRamB6mK5qrajaSBMr7DZeJj",
  "key4": "3HyKUivNr4aDhuymeRKjeM9tNX7tmBJ79WTEdfE4i2bXrZ1Yq5Rcvpv5nwdnX1H9UC7a3wSWwJ3vquAGeB4CrqDY",
  "key5": "5a4X8gcxDKqR8HjtLqXsUSjsnSo3jsC7kZrwuqjcnLBDbVkPAKL5b3AAHaYe9cZ2grFVewrAQ5LztdbFiFgFDDv3",
  "key6": "GrdQDdy7KXrEQuEMxJRn1MWFSHySuHxyYadwts4RMCejtJfsxnfPf7kz2yrEru4iohZC8wUyviKktKddMz91BN3",
  "key7": "3HL72B1gTRQJrCBZtdMuV14yMgPj54sXroY6gdwfuGrpquyvJQWcvryqdSzdXUgXWDtwiPmvYCBGDpTEP1QLbMze",
  "key8": "2odcHSZweUBtod8WEv8AS7F47NSeqkbbWCmvRdv2nSSjgpdz9ZYPN5kczKQUHGh4ToCdGyGGWmXeHr15LnU2PBPw",
  "key9": "2t43N8C7UPnMwYLiyJEHi6Xd9wMir9BTFADuWQMgdDLzQZTAYf4ZUn4nWqqHMh4m7kbpA7tEStGP2zFu57iBmuoj",
  "key10": "4LMUAifsMwcrsmwMzm9RVADajsjija6ya9gWcdwhUZniJ48jxyezx3D3GwePav8KffHJEmK7FEaabVzYNoSgy91o",
  "key11": "GT1GwukcJX2VNAozqG9V62p5d7g56ChpLzskHeo4uoMUy8F9iaXaKUPPMq5VkPryhjzxFHBrPgC7hLX6nUCiMz5",
  "key12": "4z7qBoSeKx5oTrfjUs2ReqYq7Z5LTRLjJuRH7QGNV3DkNNkS1FLAE1QRWNyzPdEsCxYPMVb7qiJH5854yJcUSMHA",
  "key13": "2Sd38AZyxfPsprS6qMqYYBRUNWq5uBdYTieozDv3jGrT3oibRtC2mAtVEHtY1QYq4Pm6ba193zqMnnSfxEwHCKC",
  "key14": "4Mke71QNS9uUr5JEwNwrxYTuq2ZaWSNtQpjXJg2YEiLWmNRE9pnUw7ovRRsGgwEp5AuuT1DXcqHVSVAhwjgQ1Vc6",
  "key15": "29y8rVBi2DTc2nxkKpMSXx5g4uax9ngRaWfkk9apwPDW5EkkaUvMeuuPa6vkzzCSyswL1GG86pywtSATFtJa7jg9",
  "key16": "2pw18gBKiJACjWL3uz5cefxZ66xF6LGXsLEsM78ZK7QxtZYY1GmQHzTapc7A1ZVVvrwVSpLgxYVXW4ghFL9SDSsX",
  "key17": "3SPkTJxZD6vad5NpKPxxU46s9r1YFKP79MaJoFAMzBUHjXDxaAq3QnzcKqnzJ18rNb4ZdoHTsUk1f2TJeDYhLtRz",
  "key18": "3a77YUY9daTTQrqbrWKgA8vXunMvo78UkAG7SFyzHruLN3VSbmV2Z6tdzEwyrcG7NXV8ugV2AwS8TiZ6DFAUfRPe",
  "key19": "2JpnU8QxBXWKFAEtMigaxPhQiALJgE3Z9rhx1F3GvzRRKDuAZkSKiyFRLv1UvbaT1UpwmPFe6jUkhNxb1WnPvqed",
  "key20": "4XSDdRi6SmgPUfbBo2UF6bkbjFhFztJBFttKyqjpCAUmBb1sZyBbhkeRBDHC7KXPZmiUmiy6EkYJ4K1gmEy35poX",
  "key21": "dfFRoM3xwK9idxefJLP5NZSkENgYUNNptR4HRLovyLX9HDP6MPUyzYiEVuUJpeeYPfeVJHjTm6Whx6nJqSuFTkt",
  "key22": "5AFT9UUymm4UaUbGwq9e29QUMorue1fM3zBRbBU7LcKmE7iubRgmjai4RHeZ2hhfDRs55Ph7qo1C5jdvLiroYgSQ",
  "key23": "5mYzYpcXkKVTtWEUXi1VMdeR4iCJ59v2ihj9KZKxrzKubQgXqYqfkyReeP2SKRG4SAaYhp8BVu2bap29ehBBDKjz",
  "key24": "4VGcWQ1pGbp3QW6zWpQBzMtMDZD9Bryx9PALTeJtaRjkyEod7Mv9xBSy5zCgz2ykPMMqbHBu31EnGKPZhvRbgxUB",
  "key25": "bfbMKJhUPR1GeKVAdWi5mDFSgoetoJiLXUJJBkLEpFQQDXU8ttYqYhyUjRj4WrcKFyvSTfN6LmCkbFn7Aoso231",
  "key26": "2zEPuUBiGsoQ3FPpQGZHEa3XbFVrqD6iB4xtvafpKKR8XUSzMKLhRmZyJwSXPnSRVGHSsowdK6f5br53Whyjxt9B",
  "key27": "BuD1jA9m1TSNzj2V1kySFZJjZLsRGNd7k48PG29QxdDUy5aSps4gmw4m4b64t2oFq9H8LF4MXGFAFBM7JdQkVjH",
  "key28": "4c4Ej6XAjKnh9s5C3zGenqfVFc5ZCkoKWPgpeufJo4hTTxWp4NKo89eBP5E1Wsa7LebQFfATgmc8Y3ZCrSriD54R",
  "key29": "4c8oSYDBMQxu4zPp5odpy8N8GDvTGK92iGqitjUcjUHQvFpmVfBYuuaZexLQK4mvhPRwawfG4ovDmhgeJWyLGn7C",
  "key30": "3ZC6B6xf5Prqyg3VjLS2MVZHhLuWHRAG1JWH93SJZp1PD9PRnmNhHQz9zrUj56yqesitktboiNRYgwRJDZpibZ4g",
  "key31": "5TFtgngR2gmgUBwF2VhttkhNCt8VoZA7923Nhw9ke4Jz4bXUaGA8RgxoZDbHyX7CLBvDcSg4ZrPXy8JHDJ49Gpb7",
  "key32": "7XqipkP6tpTasYKc3uEjHhV2V5UYNZXQ3bnqdxwQQzuupgmrZQ3orpsyq3oNkUnDewLsvzVfcCFNGPnkgY9weNr",
  "key33": "5tK48pfU2nfNnFAQzQC45AMotWLvQikPv5Jy3UqD7Z8BC2SpWXzBch3EEJndgK7g8AbkeedN4UqXeocyb8r5FF17",
  "key34": "5NdVZBTGbU2Wj5bWuKj41y6VfMFNeupvYDzQb3WJHEtpLBEDPU5GtthC6oF5NugZzTaqcB7cBuPfsCyhz47DRbcu",
  "key35": "4DR1VRSq9PcsUbdVC61CmDA1tqn6T7FU6pnGfdKCh4emG7DvJtfMhEfMwX8DCnbqyxtE23W1koURYrSk3RdafvxQ",
  "key36": "2wPQBzVKGQtcDdBk1dDfqz5P6fB7aaLTYCgzX6w51QjKdDeTgkcsLKgAz5khp3WKZF1Tfowh5eK1swqUQf2SDXqD",
  "key37": "51dumkNmwfL2qx17T3nfjZ3rE2WLndWUCZXsLVg5ZjE8LuZbPpD6XN7HBUwmCnf9qrPYzhpdAUUXpr1nxT2tBcHX",
  "key38": "4mPtAz4vrR41SHJ5BVx2dE3x7MifrRDF9K9iv9zCUSmK5N6GprdkfjWUqCKzuuAb1NZ7RDjGRE2t8keCPPn7DTHx",
  "key39": "7PWMS2M9sMrFzYMHDkP5yi2CUo6L1NCpPNoJcCSvYmVqm4exH6AR2z74q2Eahh1m7ToRaeR6aREuGdD5TfPMmD6",
  "key40": "HPPtfn9SFhFn8fKwRyFEheFoiz3DSu6edzKr4fdXKkHbjatXj9R23YcUYRBEqZLd53taLjRqTMcZvdmb4nPj8b9",
  "key41": "m3ayjn5fWNPsW5RQma4usoSYPMMzFgLBa7i9msHTUrhaKMcsqgSfMwCiXMG4Rrwt82a9saW9Q45uQYYCvcNQuHZ",
  "key42": "RmoTjR8GHDu9cy7w72t4rwNBs3A2AXHPATDuRwxDmady97jiEF5Xitnzx8Pq337KBh3zYCQ11PFpaHJ9uf8VijF",
  "key43": "5XGzP2yCbJmACqGyhpDwdfDABwWQWULdBqXzG9iGmkoox8MKukeThDiqiia4vtTS8Aj6R74T11K4Vjnec6C28W7n",
  "key44": "D2yMkWRKG7jvsanqCRLVZChz7z4eSzhTQH6BWd1kd3sTcoQdtsTRWACnNDCXMp961yjgCSaR3zDWE8wjLbxqgZt",
  "key45": "47fCrinEEGhJzvL2dBQ5am4mBfUbKgoNeZpST3Kv7Wj6kabJ891d19PsqERLZojqpcK4S14uiTuXmkH56uVC9szx",
  "key46": "4DtevwJC4BeEWFfztYDa42z1rvW2cRhgAERTeK2s4YEUaWSyEPK2A3yn7afcBQ5Rd48AhZL2stHag2hjfnQk1BUg"
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
