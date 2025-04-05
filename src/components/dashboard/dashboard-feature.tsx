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
    "4oTwLDX2rhSXHzDf2immvqquFFQAXE2xWqcJ5Ygx6kf3GowSZTs4iVgVrr5RF1uyUj2ezsSBnWrQYQVrW7FcrSS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TUKUezMC5XrZ4L7zrSRBjbqMp8NA7pwkMriNkEfvhFx5SKwHfu7RP7Cm5zM25TJUdC1dqrXyFF1VJp542oo9z2D",
  "key1": "4eprxbid5Taxv86j5yLcnEKY8BigtGvRAL3QHWKKg4qeG29DPBkvP3sV9Jm8xoT6XhBB57BXBqSy7UVhozKeXFE2",
  "key2": "kphb1fwUpxbgk5Ub4n4ASwZ2BzxNyTq4ujRAiAQQeVqcq2ZykN9PH1dpJcbmMW3NXkNqXErBTmgWYrFGngUCMSV",
  "key3": "2N36Sb77dfwZPQb4NpWag1VoQKvY6sab3356LAoe1xRiXvg5KX5FY9Cdqdz9Qfd9wsXZ4P114wq321Z1oUxp3K92",
  "key4": "5Rgwo9KRnbxYRTFnskKRucuE5aRYDa84GLu8UhnbbaKjNb9DxGoBixVdbnyjGvdfPM2pfigcN89vPo8QXMTyzptC",
  "key5": "WpkCskxxz2kwqEJ3R1BwqwCduNuySTG9oBujjLxLa6up52etbChyeK3YumDFwXKsGmVUFPNMnUK1yrbXXk9eS5E",
  "key6": "5VctiazhExCQh4XDGNeStv8vSWDF2wXFiq65xFkSRJq9pFfDjJGRWiodj1vu2GKwaeuJn6XT8SXJkR4oRUTmAZ5R",
  "key7": "2pLRxjWBoT7kx9djav7WgKCoesZ2dgsyBVeKhrieHwdTSxhSMD8KGtKNkKmnRFw88KfoKNMduemG2JYnmavHrPgi",
  "key8": "3QcNiRwBdpsDQojL55h98EKU6Lop4D2npJnmXKqLbAkawYRMjgo6o9X6JMsNMLZyysK8j37oKLxoxhkqfH7r2VPm",
  "key9": "A3gitr4phHPzEjJmyJi9DQsjeeA8qDEyHN9EXeVKLP4pTRPfSp45dh2WvKnfcbtZViJe2UfQW7juWTwC218SGEF",
  "key10": "4JvLc34d7b8zcB7cm3ZvwKYNsfiMkwm48pUz7ogsybZBFVFLXDH6EtdskKGpKfLTEViXoZ7muUNxuGr1qCnfV4XD",
  "key11": "22UrX2xa3Kkuc6txp4To32HCMs1P13XTo6j9gyekCB5pwQMLFuawVz2drDQydMvCZCxUn2MPNrPp1viDb3avTTwr",
  "key12": "34D8VDKtDYHkzQ23MZzgs26hbiFnpdi5q1iQeJkVLhLZPjp3bgCHPYMDsiE1cJPtnz9FjeRBDhEX8SGozjtqyLho",
  "key13": "XwWVFmis588iVRfh9nXBU1fSZYD3QKbtibWCVHtrC7jZ6CmN987g9L7s92rnZZB81RvskoA85HiC9DEVXt1kvB6",
  "key14": "3wu52XS8cyJgjAsYmeFyo6B7krWy61YT3Y1pQGjeVUif6Hi4WEpuedbQa2x8P8nf9nx5wuabRmcSEbyjRAeC8Eky",
  "key15": "ChoTUXKTNeThP7WSe8CSZVo3XCUGe67tmv6fnyKGfhxWVG8wKR3te1sWEuMqf93Hg6tfq5KKokdYSzy9H4LLdJB",
  "key16": "3ug4gdeWWussKhebAC8udfZFYN8C1ptAswFg5hHEvgitGGb3z4HWoBdJRTWwTbhATGTTaUVvGKQvqe8qYen136Bw",
  "key17": "2SsqFEaadPfNFpYAw6b9NCKetnpaNKbLj4GxpPWFTXiJEBfzzfp9b69TnfQJi4CLWKXVrvkxoEpy2qesQuLX6vas",
  "key18": "4pq9kqgWk8o6SQmMuihTuXjT4DJa8xY1ijsDg292wimE83b8kqNfiB7ALPGAdFuLHt81nZgDEn3vUhaPU7srdPEr",
  "key19": "3LzimXuGrLcsG1CE7arsic7rZnJpxkURsXu5nP9tKT7vJoBYpX5BhCKJEzQ6if9kCkv6jhMC1Mromo6drPVE27Hm",
  "key20": "5MbQJ5TSBwnkyrbEWBGKZTegGEHHxBdRnTr6giTT7WQ8b8V5ATXnqdJ18yqpJbp2Dm9wySoZRoj91jkGxVy39cTA",
  "key21": "4a5RPXkw8qq49ojzeqzbh8HMmRsHqGgs3X5SAHEpTwivLAWywYFhCTj7BMHg8ZVufMHhf1euX4xEwy4UNbBqgPCi",
  "key22": "3gJ193eW66Fq97jWktb6tfw4dmeS9A8DfSQKKdtyQjkX4weUNsK8R4YWWDCqXyb8dAgLSbHNCwvBAKXdKUEm7zbJ",
  "key23": "4dt7d3P8QH7ZWfMuEdatutr6vFSBkvdLBLjphKo62U7aZLiCq9j3RHXog1HPH1rUFMs9iytX1u6Tx25DWc1tYpRj",
  "key24": "jSBtg5CRoBZWMjUuwgDQUHCrFXcUzE6HrkYwnAMv4Es8oTeazPAEGncEisbsDggsHDbMosrtmbkPAyvJ7FRe9kC",
  "key25": "sHzvT9AAPRaEgAQD83KvQbSTVNrHNp4VEvcH6mpzsvGMtLbk9wh9brQvs2FxC4784zdYfx4SMUsepDrTzSYA5Uu",
  "key26": "2dfw285WrF2PBFbp3utwDRWGQHCiaqyobdtR9CvH23VLL7ga8bnWyRg2NbNpBEc23mfosQojCJ7cAPBMt6jvGPwe",
  "key27": "3E7MzpdunfWJFF3e9Wt5xzfBXdXBfxU2nJpPwaEXiL3XkNNfeDkeAQe2UZAyrcxy2JBcVRqMoUjhHFyCxFmvxcN6",
  "key28": "ZRfUS8DRR4USyUdJWFg9nEd9uDs2ocvzVjLPrNfHbHHkaRCSqDA2YXPU2R7LHRYW7WbcXiCb2d4byBw3LBkvTqq",
  "key29": "2xqK9FMR1m3Scwi1fnqBPEoWg3ized2W6pFeT4pRmG1agvm9sX2BfAeWcRLqTpsVSCkGwmJmjoVqPM2MnnKGHEhb",
  "key30": "2uvoHu8hgcKEvKE23gZnHvFZ9tdJ7d551aMcAEycGhoMF4Mu667HXrgCKeYWxCuwvL7KQnr3NR2PVmHHS7rkxpgu",
  "key31": "4LXY8GM5khg9VwkSdnzYDa1s7Qg3iZgUsmfu741mT2Yr4c1LdPsWH3toSsADJ7rF9q93xvyWb3SUinZrKeoEmi7p",
  "key32": "g7FRyBXRnYbv15sjJNAWYmAdmsdnBY391VzQ9egxg7varij7n6ZXRn6t5pA52ZubAKWg6nzJWJhj7hap8K2FGY6",
  "key33": "SSb4NdBSNmfyAZBbnPtbcbHabd1dKWn9nw1Hofb4fxB96RGKGL529wmS6fuFC7rKUjAEWwHVBM1GrgFVnZTmRYk",
  "key34": "3EdPdBSJ8q67PoGKUASDvGMYRCvcnvXYK5iXMre1NxoR9cPPaEz3UGPTHSpobCVyyS7KNCtyJnfoB7vgf3UG3mfP",
  "key35": "4r6Lq3svp4irfqywrLgAwDE7rytVv7AsoJRbaRa6fZMqbHjpR9KRrk7csAkhB4dMiUV4ynM3odBU3WTXaEjaqPcp",
  "key36": "4a32V151hpg3cbN5jgXGj4roBYDLS3J1ANnSRqfJThAYLm6peDnbtPKgNucff3vWVU2URWrUjUrUPtzqidgaw2AC",
  "key37": "2HGzNr3tG2DmUPAXN2eS32yAKHXNLAYjZsgiC8muQNyc9J61z5oQcMfqci8K49CWDkcTbVCb5o9rgvDwjPSEfStB",
  "key38": "5Rqvtjv8PE6xdZ2DupLdX3PkXrnn7BTqPVwZxhZ1LNQG3UKBHXSfiGnmwUaHvBHSoHnbrfr8HohGN75QLmd94Mvy",
  "key39": "3QhpQ9RQ1YoqwFi5YgfFkTANeWFpMzH6dMDEUTdR5k5iWEJqhxtHKnkykrAwUNaA7fGwm28wzJdjpiCZ9xdNHyiv",
  "key40": "4U2gBy2Bn17HLtonn16EjKtuyiJsdXpauRQwMDHTurYHmMWP84HHHYCofEnRN3HoF5bQQF6KbA1Kyn8rX7F6Y3Nu",
  "key41": "3gp4J4RiSTTejB5H48xcX1ruRitLTRDi8R4KLVYnvXxRGzSXJbtmjkfGM1K9Fwf6CZtJrHAMUw1QXhyqgYDWdgwB",
  "key42": "5jJMBWv7Tz1vVH4rbT5Dju6pkAhRruePMRepp2r1JUGd1VtRyszzGShUQVQZK4kZgACxWJBGHAw7xSgA8tCLSUq1",
  "key43": "5VdAaRVPJYtcHjSyjm8WAbQ8BJh1Ty93Qth9u1M2oGnKqZFAimmUn6cTTPnJjwgC8i2zZKJV1cMckGKxhEkUGfrZ",
  "key44": "4a9fJJhAs7RCcpjYHAQawjhWsbrhhispkvjZGmXLnoLbjxEXmsCSkBJrK44BjbDhkCbmEta18nwDZCHDTyQyrCAS",
  "key45": "57UrMNp7aWWKXKRKkJeu3FwfJXMRin4UTuiWvBrEKtQ7xrDuQnYPSq7nbYdBJdsv9Ar4etJDwxw2nZA9Mokh8jLa",
  "key46": "2sFgZANfKro5o59a5rtxE8srQ2ZQ1eoRsdmau7PTcQ1HUnQYT44xdvyjLcCDyeYKcipuTck5msnUSBZQJPHtLZJj",
  "key47": "5KTUVKy5WrvfvUDfLsnLraWZeXW5uK6rsc8fqEPxM5sFHR4AFncch1fknWByMEZB9KndhWZaPumZmbVZrpnBfxWU",
  "key48": "2RSRGNxqpuxUTAKZ8aNERqJbJ5KbSjrVDdcN6cf5Xm5qhzvZiPKANMmG6rwZNywNJdcALb6BCDX6vdfFdkwcfnmW"
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
