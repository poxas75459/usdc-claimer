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
    "3vWk6ququCScfLf2buQAZTUM5ZkJuKm6NH3L6LnBjfKdeya8qoKN9DMb5r37Dra47WBH4b4ZqPbZwXpiGop1jaXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGgcS2LyWXcWygFqPtCaqsB9WUqkthz4hxtChEjfYgWJD9pB4g2qiSjuzZ9cVsmmrA2noJ1492db2R7f5Tzumno",
  "key1": "4hPnqDRNx9E1azRFH3ptTcbYeMbWLWXQFDifZkD1wmngjBChM11L9Csg7Rm1Swwo3CFSm6SbeNqf5EDAoULHZH6C",
  "key2": "2He31A2hfb4LjU2sSDeyHRQKivk3aDJASbve3jyS7YY5Q88uk1VXxup2xamP9GUBy2Qmzu6j2qMSMrzr7WrKGxMa",
  "key3": "2HiNp8cjtaw52EDQxYia6tzceLr3PKfjzzC44JLr6NVyC9TLuFNPgXjmyCuCPiUsC7RrUdwSQPzs3FDCGQU9owA8",
  "key4": "vY2r8PgfZkxzghYrEtxCs1zRMMvu3UEYvX7dH23sxsxwkMAEZhSHUA69Fs2FBsuAegNhJq3NsfKxthDNQgrginA",
  "key5": "3X4AXWuzgCBi9zhELapA8WA4SzEqJ7fg5GFjgK4puczbckx1z5v1D3V5dqN6TX5sRJ6Qk4wpHPzpZxxDtxJz754e",
  "key6": "61ffzuk7XdumxJTrU7Ywcn3sbL7XicjBpyPtwL2HrEmr1j2xZrmJMb2ZjBTomKr1aTs2jd5dGU8DPYqv8t2AYBSK",
  "key7": "xwEReqKoV9PCRU1v74JpcfxLvTHgCGyPRDiPJa98nxwRH4eMMUgvkhjCAG3QkGtwx9cPcQshfFQzLAyzk9TpB5a",
  "key8": "4GmY3vgwUE7B2R8KsRWETK5hHRJEFGMns1JzLmH88zGPQNnjSEm6DW7kSU6kMGtoB7tFQhF9SKxNiQawdib5mgeA",
  "key9": "fHQV3vQ73cCLsvsnyz6ymqQwu9wNivcrWE1QFwRJBPTuC1gcrXctjshRES2kd94ScqVGbswbpeqSEQSy4rTDeMJ",
  "key10": "5NakkeYoxfH6P3kej3rtXWGxu8pqSViyq6HASX4oWohwcnpwea2caHmCB2t5sdBSAzid7x1gbYfSVJRr3ZqrzKYh",
  "key11": "5Xi2SspeEyUWt4B4ibSbUJsLiDS2NHpXsUE2Ve37CCewQ4mLXpKT6Koey2XbBpn2rwHZrx936GpRJEsTaKMZuw7o",
  "key12": "FfaYHyVb6aRcUee8EA1xEL24b6fFg2MDeteMreuwpuGZBDW2EqiLLYvBXndjUpSqDS35iVt8e8o2MbvxvSLfKjw",
  "key13": "5TiWcGMEF7nY7cfV4sE6xPwp1GXb7ALCaWYG4j74Rm3NJjSfGUWx7ML1wQJvgzzjADov1j8V6WmA7Y4vz8NPLaBT",
  "key14": "Cgyp433PFKSGGVeBPWKduNJQXHiH5ug93CiXCtYL3AdKgQFJJZq9TQ9GnWin4remkm5FHkgo4UsTLXJfv3raPuq",
  "key15": "452xijk1AH7Wq9wEH69kacu3E9s4Wxdi9GFi6t81F3wRNAkZG6xDQqT8WBfyS9FPZtCBvf11eUzZEP6ySnSqfC44",
  "key16": "4Vd7j4pAtL36SRYL7SD9n8ZWwFNxibD6pCwCKcM2noiU878ZG7ibB9Ra1acfhb2NGAeMoCWbcepxktHTH6BCLGd1",
  "key17": "4vv1NsH9uC78MMbSrukd6sPHYNNvWu1BhrYxjGLL8FDYDdadvo4eywoFALw1cCyVjLgewxw16cBkozcEZCXCbVgh",
  "key18": "2NqifVV7DBjF4Sk6d1kXmdMEpNghAW7RZdGJ6YndK32rA8Dzxi924S62GWKtoL8NVaWBbMkTph9VffsWG6BNVhpD",
  "key19": "4wtAK4gjtrxeevGaKKFHuTLaNkHFEP2Erry1JPJkax8qfj8htgFxCBncGR7ygoYaqKVX2zGiKHgzL8EJs6Gnbx1D",
  "key20": "qkJwibShSQ7rr22dGVepWmJU9sd1hrFTFxhjuQqQLkM5KkVsd6eEV6j47PwWKLNGjYtGo326oivmqz89KVtLQvy",
  "key21": "4Ry2UWymweYQkifHPiB2HMzX571Jwo4jL4UkwJeaHWzeGMYtnt5XoNXWsA96H7rByGpnutMRx2Ahj2htr4m9Wx92",
  "key22": "61SSogRYhiX9i2rjRMFSx6v27d9ozmsA6HdPs8mPDYSSfXY9BdDozqj94g2nDf7Yd9SouWVH4wB4mK9bdtmnmSzq",
  "key23": "qWCL7dBc4shUoZ5Rqrd1ZEaH3xLrZdW77ZPj1juo4ZoaKcytwCK3e8sfFDstLbq2WWGgbJ8HBVGihTM7T9ZWHgi",
  "key24": "24Q1oS9eXsRGgi9Ey2ZskPtzg5Yq8qrjccsXAdwvSVDFjsJLDY8TK72UypX4SDH7w3pQP4httKKUq9nHC1Azeu85",
  "key25": "37kQBkNyebYmyxip5dQiFhFK35cZgpYGgKUpUfJnx2hCYda1PQUktFumhMmpSS3tcaGoZhRCjtsyDcvdk1GkGX5W",
  "key26": "VYojnRGBTKPaydEVwaVpwKAjVpTmtKUs7fNKz1jDbQiCtSTcoGdovdqCBTyLUHGnH68jC43saSQEUNuEr4YqLaa",
  "key27": "247y2kRjm1iZzQYZWeCsTkxu9PmxoRnv8qqPsKv97NRmVEY1Ei41QJCqFaZsX9pRqtEivYDX27sXsso7dHqt9Gze",
  "key28": "3KsN4bG2A4waEpUtNnZjLakyucNu2nXpxP8AYyHd45CWXj8EWkSceCr7BbjH1toLdZVkrTtcvYZLsS3972gc24BA",
  "key29": "E91dYf6QGwH6k3gE6THPkwmY3r63nrf4p8mrmnzEx4R4387xAjZzwEpfs7iHfPAUwzgaieXe7GQpjjPLbUTa92J",
  "key30": "58NUFZ8THCPpYrTPMxNSMtuoAvB41ZKDVZuKYwMWhyFey7M5Veyr8cBAAVhS7Aycmq3wY1Dragm9Kt6jJ3LpEfAi",
  "key31": "2RoPQ395KXLrUDoji861VWdzmimcQBMsVrcG96qa8si7Xm4WVzCDyUhkHZSmCjVogJYfTkKQ5rBmWBN1DdyXR6mS",
  "key32": "51A8y8GyrbadoZHDqQ4AynHsEtDdweFS2vL5Gbd42NLk955gHEREvxa2oMUKQ4gdvc4nPUruGLi2rtP7T4P8x1ov",
  "key33": "467vQq8hz5i4Ue9ULRwpRZ7iYwyJx14Hj77Qykpb48dmcwdS9WmrH7Lpw97B9qdSNksKd2LgxvKCibv5TsgkcVFH",
  "key34": "25Nak9C6Jz4xHb4CLb4fExXFduU57U9DtKgRy3PYYsKMf2ZEEPbiv9ggxGjKKWimuyjRMnUy5zmyQ1jQD6qFS1LX",
  "key35": "5Q4nb16ZZDG8CcaAYMGqZBGFTpDfZLy6U9kwDD1h6hkBMNCz9ZZx2GvgS2SK9MTQ1mXM2evyfyZLEFXgfRvzspPX",
  "key36": "57XYTEzps5q5XASK247vetZgzbuAJbozFj4chKRZH8KbCA22VrY9ArCGTJqWrjRPDkVHyffJ6FuJ7vZ9BYiwvaWW",
  "key37": "2JzMijB7qxf8698CacAm1WRJkeFY8b1A4WFsKc9Fm92n5pEhEZQX5BatZf2tVL2PpBBWUYu2b1VnnEvbEUHheA4s",
  "key38": "26gbuvhDoK8DfgrDjzxwUdvLQnSZAkmfgn9ZvfAf2vrExVCVAMHybN8wDhh7KkreuroNbanJ2XpVvLUmRo2WmdGy",
  "key39": "4ojN7G5tbaU2vYwgbbegzLEQamRgdRwqhc7tqpxFEt3Vh3U4A7EpE8mRGH1TMpNAt8DCiaY8dB7x2CbtXJLC6BBs",
  "key40": "WGifAaowiextpCgWHKmzrp7PQNpYnV4bn1feAhjsqFRGrHirwDtuND7XQHP2Kfkg6vhnbirFcKL7ck1KVXY4qiq",
  "key41": "orvSqHsKeQ2dQSXhJubz9JQDmsf21AXrQQYmrpdSEXSd6gi8JH2WMmyyTmwyQfxvcwaiL4oqbifWpxkg5QmaLYe",
  "key42": "3KAg56b8qvdkA4KpHHbXvEFQBomU54uZWzQP4nzGLqrz76KXJ9f1jtQ9DZcofsR9QAsRR6xcQhxvAjo1Nw5VNAte",
  "key43": "4wRYYRXe2N1JqDTjq4ZCS2V2HhCoMh66aBA6mX9MAuqj4F8eeqxAZoqgASAHi2DtrLvhSVdV2X2VRzRc13eUkMgs"
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
