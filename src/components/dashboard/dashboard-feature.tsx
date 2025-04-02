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
    "DF43wjTMC2tgb2UCjoDwiYsqWC4PPV8WSWfi2hzidJBGNnG8C7Q3juSb9ErRasSCUeN9RoifTzGwNqWCYGFHqWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1qdS6KdDFKmaLGjNga3FYJ39dereR2uK9CHncLW4Rhvejpg2n6Ys127RpnmiLLPbTemddYf992ygnofTvXNgPxJ",
  "key1": "2eojQM8ho9uAjyMMdp6CnixbxrzNtheywhFSy8TL16tAH2UZb61NpvfPsmJGv7ZrQTf2oBNeFCANMda2XkJdCeU4",
  "key2": "3BKKPbVVT4iuWowWDmHJEAMDB5mXdNTr97FXu7XeqKFC7UtixpUc4n21zD7NLSyEFXMJDV1dz4DFGxCSqjqfq8uB",
  "key3": "2fC4UL8qm9ESKtHUomvcHYqpdhEKh4H1wnUXBR5NaZwBhxmd9x9CGYU74hCXFmnJmW5bdfJKYYNRiBeRQGVoYTwg",
  "key4": "2DyGyTf3CXABu2BcFgv9vfWDmqTeFRJvV6qKDWLBPNcKrBuHzENXN9awYoDqN6ZEBuUbukS2gXqHHiLdypwxDR2S",
  "key5": "2pe1rKGEsKQBuHmxJRoGnrhrvUywsjr5sTu9avnRZ2k2HNVBaahugbNuJhKp9oZv9DV83ZfgUc6iKGnJo9PwWHsa",
  "key6": "yp6M6xAz2NP9SUZszk1mKFG1xawym1Q4m8TvM7bs67u1PZAsV1DUFhXa5pC9amZ3FJqdM3ia7ZanK7G2w7SSQkm",
  "key7": "ZphAPibejg1FYGCBNAH7hzEReio1dbAM9j6gW2fBVQjCr4EcTFpdw6ykHpCs1SdacRw4BhJ2Fewph8WttfTjEvZ",
  "key8": "3AoTVYpyrFm13kddUMXgyQDvMV1Fbmhn9s69o2wjn2m2fbu583phgshkNBxxkU7HVgMxGLQKBWszB1bFpAfaGM1S",
  "key9": "4thf6o1QmHi3TMYKHWrrACGtkLqJGwf4c4bvDAeKb2uFaMyF8ddHFfRG9h7GJEJZh9pM6Jc74tMS96vYAWB8rpXK",
  "key10": "2okVQnze8ppxLRG2gkAeXmbscpBgqEn6oKFCuwFwGi6PwheEkkaDrrpKgrBBc5wmBaJkPzoGQRsEjF7chnQiZWE1",
  "key11": "4czuV4dxtwsx7nm7G2QspjVPJi85qUtq9oFJREFkfafhgW1EdRfHX9EWcQNsjpWXCgDA2qtTso7AeSbNcwd8gfmG",
  "key12": "5etWmDvFk2i8oCC53sbSqKiV951BDToUgqvVYkoJwe2Xsb8YFJHSxw2wLEwCuQNqVdmKDKcVcLpA1T5Zwg6GSpnT",
  "key13": "5wPNemvUe9Ya2UUKDmVEvrgvVsjieQmAphhwgJYegV6yUKnzDJYUrgMTigtKJTBuAPiVaBU3wZbFe1cAckjKkdy9",
  "key14": "3xFqdDR9fSsYiCJFxQtgmeWGHoME6w9hbzhGqhvwjTTYmdAhn8Hw9sxsbg83qKvzMXxyfCRwzJoTt8FafrL3neb3",
  "key15": "5iDPfHLgwYXX8La8AQPDfVwA7E5PSfZdDKnD7Uub6Fwg98uLktpgW3a811Yrpz36zyXYDhoR4Ti23NxDdHMoK5YH",
  "key16": "29HggKi3iq8RNoVdzMKuZp2gQGvMPfEbrwF8vQzZJavcXBTKGKbxFz5w6nzVndjQUMb7VdRY2CqMxG1zCbPd2U1r",
  "key17": "48q5JCUxvwJio2HocuabcYG1WnxbHsM2Gkrnc4BrmuNJZbCGWcMrnqvWYcicvYkVnUMEymuyKLqsN5gGcPpFQNHX",
  "key18": "2bgmccQN5mu3kdydGL48qWmqo4ujh1ijFxDmtERkfXLLGNS8K2Xyv47Cx7HGzxt2VTeyxsMuxAmCqQ8K97Lp9mae",
  "key19": "33N7A1AQNSruFVGujfWFumD5jnT6o21zQamtnEGQD2tNsJGZJhANDr7p39QFfj4VPP7Jw8pQq39APMN76ZmR3nXb",
  "key20": "4uAfYP5tE67n3pshAwkRM2tCRKKVGqH6mcVyWUyUtxcKAb8CbrBTnMyTibaAo7EXtHGRYigULEnVDPdHxpbMvCoW",
  "key21": "SRvh51PKSYNgzYZAUaCEwSeroDfuW6HqJbhmiQAUNSNUjfcpvaN5umbDi9CmekQQCJHysvYAAQAdBg5FWgoYPzQ",
  "key22": "KFH4eSS3d7Efphaea9TmmPnWYbuUkfKcc2pGEXG8gdwLiQc6RbHNACENCXd6e1Dz4QnGNeEUbAp2qVqLEKKnGsu",
  "key23": "mBpMZW9wHTFR6v7KMr87aQqyt75xtx1mnEtswdwYgJzbgAeReC3fa7RQTcoc4w6NSzWPEkpeCZdRtgZk75UwDqb",
  "key24": "3Wk7N987F871tcx1HAgr3n19p7aZu2smFGNxRMLiqczTrZWTvzDo6i3Ct1FPzx2zh291R74ShRAeAtW4D4YeZyh",
  "key25": "2K6PBbmjE97CGboYeU2P8jBRfU5bPeHRfLbYHkwpJBDzghNnimh7Mf5ux8pzL1G2Wy4L7RPL2Vp3xuso7aMbE5dB",
  "key26": "4pLcAqPiybY2M9kXYazA4MhvQTg7D96oPRcw6yR6wcYzo67oSmQBduD4zF1ySPttbSZtHMfzW3YwqP5MWLrjJui",
  "key27": "D4aCb4GAXs1QAWFM3Qax8d2MvChy8gcs3m1CtW13TUXcH8y1Ms5byiabCpNLJXnRVZCNnYThaEPA2nb7x5M1gx4",
  "key28": "3g4qpfz1Qdhr2jJ5Da3aA1EfgN6wXcZWoXLsUPYGj1rGr5rbzywcxiDmRWZrDrEdgQ87RMyzyJE3CcKxKrJEAhmb",
  "key29": "5EDMuBc7VYTrcuUtKGwgmPDnCtLijv4QgChoV3jsUbMJmmCnm3Y8Zo4eqftoXCEr3ZLZDytesaVGstvVdxrS7yx2",
  "key30": "4seNTf65gibfrup3uTR1duWJZaN8Q7NGniwBrUkWQH5scYWNfzxP7CA7QLke8gRjtqVWQGVdqGnG7oMmvFn3HQEi",
  "key31": "mesYDPHRrtpMmq4n97ELHcqSYfyCYWxBh2BgJca26rmPdn5Y2gyByFSD6g4koaBWfxxTCmrkcGvNyohkJexdLAf",
  "key32": "4pw2o9wLjXQ6mBWzZ2o4HWiyMCedhVtLD64r8AeXKMF1hRS17MHBVxqBqTVwHcXthNcUf3hMAS4xUWbnwfgWJMrh",
  "key33": "2YU9ygJ7e3JQG28Q1HxcNRh2byBLxzC7MA8fTgHhxUSCb1e3irQbB1mMs3BmSNdF48xzcy5NinoPk7snSPwadwF5",
  "key34": "3CCHG363c1ndPMFLFjCbBCrCe3v7YPcRow4BbpwNNyEgqRsWWBgarnwR5TNs7kPdqtxEHrcKw1do9RYY6Ku5hHEu",
  "key35": "2woaRi7MkLp5QacuA6op1meqYMbQD9Df8rE7SF3m9yYHeEfhbTRz6XURd3Bu1Dopp6rLJXQzNjzw58TMRMowM6TG",
  "key36": "4zQMEum5k34ikjtQdDwD57dzL1PoBsPXmGpd76cchnYNPsmZLFeV4RLgeUUN5E9LFWWwsV2sDq67v81p7QGvdVuM",
  "key37": "4vtNesYbsM8wiePeuKGv4gDEvijE8Cr5R2b92fZfHcs7Xt7XfdngGgpw54PYv4Wm6LoBfWwKheKf4rFaZsWesBtU",
  "key38": "3WAsnguCaihpG2bmX8nR6stxX4KJrF9FxpXtUafNoKjU6HPKaBBbRbBQHad2HCEM41nqSF68qdscnU5rAmqjkCqg"
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
