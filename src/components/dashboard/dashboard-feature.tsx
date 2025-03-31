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
    "4pFFPja2xjAeY44HLQJLz1VWSxkrx7VTxAy3MDuSsd5Yx6SBVrzfw7oCEH4Su49dUXCaqWgD2GV7zmcUc7AwJQqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hzy3WFkUNPwMQifsnUf86pbWcfzaoRSgxnzGT9mN8ZDrWyPe57bTMKjyyJzHGFthvgzBgNWBwgVrtbysy327cjk",
  "key1": "4nWTfyLWy9iQfWQbn4soESibcviJ2rAsCUNP2Y7y6TRgwK14PpJLq9VuT4s2UL2dMRMKzHKX5uUC8Rv6yHNgLYCe",
  "key2": "5ucDCmj77bqvx887wtsdCGweyRPAydy1ARhTSivL1wV3Ye19fhFm3uT6yJMWNTTwVT5MUbYzhsUy1Y1UHjz6hgp",
  "key3": "3jm77uV9PifQakB67fYqDhKsJjr2aFvGvBPX9nBUn9j59Ajybw5XQybn7gyG7jWiKYBNvEbMNNWD6yWedbWcV5My",
  "key4": "24JeRng3HprCX8TrARaYN7i2G1fk22dgouwvm6HJALTC5Ek8qBJqVx51Lzq1gRTAbryLezSCp3Eq3HFn2ajPrrdQ",
  "key5": "2woE3R1tA2ffdaiTmfmGY4gVJs4RqL9y48MBfvEvbEr3tbRz18os4affHKfuRAzUFqXrHR62eXHrZM91JpScTnDm",
  "key6": "5rSjw5BXbZYVHS1EfpKEpXfFQAZnBtkyawu42QydR52aoNaBXgbriYt1tJAGDzDKZxxbUyhEzKx3WXVE3HaL1n1s",
  "key7": "2dhLgMEjJQa5MwAgydgSaBH2FkLAXtmAHUCyVRuHwhiEFijcPX4BSdXU13HVijztBdMgjvBWFn4uorY3DM5nrsb2",
  "key8": "2Mjt4TKh2nRVMapywNR3AWVnrrbXpuYSTCsetdbRndMdVCuzJnqVEwyuhA6DcdAJMR7CJB6EmdFShEsuRsA3L9UY",
  "key9": "1FwuFghJE3zw6BiV2VvNiPUCf8EvC8Mmzg8xMe84A2tEEeeyzwxSNHvmPDruqXN4ha3GKvrYXBPzjJMeLhvppzD",
  "key10": "47S5TQJrDsxCUZLAmMFLcfg4R5MZgTnSAyMdd8ijmuTjJBStSTEyzwXLzThM3sNHD64d1CUURoXgWdjhCrTqtPcU",
  "key11": "3H2dJkMJ25ymfmuLR25K1tipu917r4hSaBg9vPTJJotMx5F1nKmVWyP6znngt8xYCfXzWn1snKcFq4TvYzKstBLH",
  "key12": "5sQuxFRJ2EVZQeD97YqYsP2pEtpfYq2gu63QjBkq7gVyoC4BkKguT2qxv5jJUiEWyvH9esB42rNuojPF83UgToML",
  "key13": "4LpP424zm9KAPr5PU1RnrGC6Dn4MMfxizmCBEUp4ZrubxWBSzbwTSkX8iT6g2MqL7awmF7AX7LYd4zQ9r7UQG8Xs",
  "key14": "3chEsj8M87FsjAWovDukYJaCfJ2QndETKk91GDdZhDBAtE9yWh8XJEghwJg9AwmvvBGgU1xuyYFS74xGpxYXG1fh",
  "key15": "32x5o6aZc9TKxjTHAoGVXgg4vgWAArw7XnBEXvqTEZi8JASZi54oJUiV8gCSoWY9V1C6YhyznCJZ2sVUeYmksgkw",
  "key16": "25XLG5XyTxEb9hEwq57VtZuAYvKZitvfKzHEbYL55cHUw6PdfYhit9NjU7a1GzT6K9bJSkMpPR5FuUAbQzmVdPF3",
  "key17": "2L62UqfMuozbqjvvFHEQ22TZHMFYiaRPYkuSzi2vGsWZp7WyTFQhZXJby36R1k3PdKavnUTFxDvpMSqDRduffaqd",
  "key18": "3jZXaHZA5NTNJqdAQDMZk8fNNJZoidYtWR4enA6pXz4Dunt6QrRECMb5DHo5azM9wEXjDZGDoDv1ZzJt6AYhErgQ",
  "key19": "4YmWfgASrDfBxNzFmgSjYBPZRGw1mpxjTtM6c8ZnJAnFfdBLfCvcT85KeNdHh8tPJUroPwszHTSMNnaPpYqKngpr",
  "key20": "2H2HmGpo8wGWVeYTtrzefte1Q2LAeGEuSvKqjoLC8e4tmfAvrPhHpgfSHCw6ym45NGGZ33LNcdw3dmTz961JUoue",
  "key21": "EcEizLvmN93eFtb5ZoYf5EsCST3gfkrViJ4G3thUCZxzL79AAAty6t3tLDcgBFuacFrAMAkoeB9CzVRRQsgp6eu",
  "key22": "3D36ymWh8hkxZZ3LSqJWw7GvERQ6ribafWu8DcH1qP9dqxstbmRVVpxdQf88PjvNcCiyRbhWwCmh6GajyXQCjct1",
  "key23": "3ddmJJYgZ42VpaTfF669Z6uD8vshB9GTpUFiV5NqzMGr5DN7GZDoSH8t7WCzNAMFusFGuswG7MW5LGEFWyGGHdrZ",
  "key24": "4ukD9rcjq2NLT4XTqZkNHx1MxfDuYKzeMhfxQ9nGLPi1XnyDjEN4FpStLFV72d3b3Ebpvd4J1Ugm3X1fJYkc8fYz",
  "key25": "53JuNd7REBwnSfPMSqhzszG3vLXBpseaLSUBLgPZegUq26EuQ8zGihL5Nrh6fMKaTQ1QZ3L8tXFWeuTSE4Q5EpSV",
  "key26": "5rQZWup9DH4uMZ8cjqPgHwSQomV7ZXR5AtYngVsS3hxcQ5YHGf6JEfTs5zgxaVi5y9JdRw3cDvxrF88w48kTabk8",
  "key27": "2VRYewy9hdGJ5Ve8q4jgyo4b2R2JXA1hHbHUJmCUMAPmTqa6pMDksNgNtQLE8X4eDz7gxpMhZNJnnLK1uC456JEB",
  "key28": "3WmtzvykfZ1z4LuWYLHmhNKhthKqgWAi5pmCk2iR3beMnfNdPDonAE8PdSyx4pGpgNE4SKEXj386k3xT7VB1BaLU",
  "key29": "3iT9SgxjBY2CoKjPriuB9CiN1nodY3j3N3rrqpWetJFscvTNBXBLsPy1CdS26EdHmDVGBybrTiTrdG7VTBAq3EZC",
  "key30": "3g8N6BMj5r7CJt4DpCWY3Sado7kTGCnoMaqFKaVjunKjLppGu1Q9LCX5K2aiYZpXVcgtM1fe7fj86FSKUXA5yeZr",
  "key31": "ePUW68rHD1yZgX5hzjEnfL8mvBpoq339v2LNDidW9piroLz6MVngEsXAf5YuBHjyaeJ8h5EquuA8u8ov6LzdkbC",
  "key32": "ABK9AVZDY6xu8zfNBjRVGcNbVrFQfaGcKBySnpSogWPA5WvHmEdKhvQVBTPDVmmoSfZUyfhvnU6kjSTV5Sh6B5Y",
  "key33": "2CcqZhwx1mEiPxvcWWm6KAXX7UdADFKucCLuYKb6AYdc9APg3wkV2Veungz67D98fzR9GEkKkf2nyVS7LfT4NSoa",
  "key34": "5h2tZv5gq3sxVdvXN5Msz9tyWXasyHt3kfetanWNi93BnjYX575BmeuywhRfHSKnz7hqp3HC6K42qd6wQaGoY96C",
  "key35": "48BfZs3ZkM2agvLuHUrdxSfVN9C5bdzVvvcztvFi9KsDNUE2MhJTDnu2XTULe55YXiEh8BhwAob7VCYbMgcJWFvt",
  "key36": "4tVKSz9ZqPcSxoHod2Byg7eDHfzXcs7Aiuojyw2SNzFNAL92PLxvSAyWmSzfmPyz7r6BHJct5wL8TtXQapfoidAt",
  "key37": "2Urp7wLr4AjUR2qt3oTLPAp7J5rCprdhnD3UhR9rS7KBr2Kpj4fSrZ6RVBLA16FX2QvpxgWwes6moG8XMX99gbmj",
  "key38": "3PsjyqiDtTbh2MyKqXZYrLkjDLADKGfiS3XtfqzXxiLDHWRNkxddTXX69c6RRMU2sc57Nhz8YXRqAnwAGqpFdLX8",
  "key39": "5W9Kg1XYUCQuoF1v74eSUht1iwf92quU4onDcFNd3YqkdDuKxBNFQqPwdznbrF1MNM4JGkG5SQhY5pZ5sJ5fTjhE",
  "key40": "2eeqkWt4mBxZArmn5SozvgoYQPNoQzpvmDy6LV3FNh4XPzsMaPk2pyy82iGJ3tr1HtATdchwt9AWtXzyTjn1B5Wr",
  "key41": "4aQR35jp7BowRvvDAn6mRTVBsE9PoVj3i6sBLohJJz9z4iseXiZd78CSP6WRMk7zDV911mW5fkokE4YZnW3uir5B",
  "key42": "5jxEk4HDAFscEcfuyWhVrvQ2YTgfrUTSJpqzSnVfYr125KB8ikr6UuhK2pz3gFeVZvBwV42nVW8RmW3hnYeuAXfv"
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
