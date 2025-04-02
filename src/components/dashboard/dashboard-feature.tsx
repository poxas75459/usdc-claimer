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
    "k1UN7VMfh2ZbnyFpNpTHqUbQSFxPFmk1QGhuFo9b1hqHayVcXUJ5PRRG3r3YT1Chd8qiKdx62zBpiMw2JKQWu9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QUxh5j9cBHMhFgKjxSLLngUxdwE11UHcTxRdvcPHk1LdRyByij2zN4V7HWY2FFytaT2e9sZBa8cDXY2pjPNWtgu",
  "key1": "3m8At5rAHLZYhFQAr9L4NtTMeuhATS9uFCwEQv6iNiPm3qoR7rHnjfacDfaKzxR4jPu7SdPXzPjMtZJL3Aomz5tD",
  "key2": "5wcK4eMtyVGb6otaXpMgUEE4TReYBM2LQPE61UkTvXYSBq1qKdzoV7s1EauYUAUyqTmqZfWiciytqfNuxzp2tv29",
  "key3": "iSSVoQUmSa5jksoyZ2Y9xBei8pmD3iwbcA1mqGjHd4nu2NS8dbE8GDu6U1MFbKWgxAy1v8Yy65TK6Xh17tVG15a",
  "key4": "2NuXzA4pgnYxzJGGfWXTPi3oB6tn6KiCsqA5VdtC8qcKCv4L7dUu9ET2JgUoZN5PCpeeBDZeavJtdu7UJ5363cDM",
  "key5": "4wwAsDEEq8koVGhL17b7srZYjUkHrRoQEgKovPJ4NtSLrzrCvYQCx8AWbBa4V4TBWXBW3w7Yveiq1kwQ3y1xdYfj",
  "key6": "67qSsyicn4K22u3Ri3mBsEB2YbN5JFTKQeTXhnkCk1gkgHNAMZ8dyLtb9n5cfWLGMbarKtHZSccbTG6rWhTjjkJk",
  "key7": "3DknRabJ2jX7qCgAoRBfpm5VnvFESSB4qXrgkoWz7t3fi3eojA4Ch3wSQY1wzjzNG2yWq59Ho6PnEtKXCNdBy2dd",
  "key8": "4QvrxsHU6b9hpdNeXgJaX6m9PRYJVQi1MFV3VBcf4PHkWsRtnZhiwdwvC2gqgsAFy6YgkbvHsxPecbDoWsqD6BPo",
  "key9": "5G4zwesVASHJMjjtRytkr2pih4H2ZzcTS3jGeVSKTXEL2FZRcb1qYU2A1jazxYiTfFf5PW5RoG3cknPrxReJkH9F",
  "key10": "3U9QsMJV94xxgNYDoPLu3Qv97aHsThkJHWW3VbhSrhh795J7NLrT92uviBV2YcTxuKpDN5haMygUZedBaYF6ozE5",
  "key11": "4kV8FfGqrezGsKRriXPcYv93tggPWcKpyCBusBNJDBVD9oYuv82vMTNpD8g8S7qijTgBgrq6LPb1nWczicRanzfe",
  "key12": "31B8GDV79ggdZYkArvhrB8aGhQxYCu6GKH1hQCQivRzBHnqHx5UfTEFGAcigAJ1UyQHM2KANZR79T5sBaL2MRDkA",
  "key13": "b96dagPP1bVHJycMtyFohA4F6r8hN5Hu7qYHjv1nps17AZpmx6rUxLjgZzbGcWTstWFmJxFRgg6ToYCtTyMvXAR",
  "key14": "4749i1UQ8nEabMfRHBNVSikz11joijSTzDigQby2rMLFa85uUA6husob8mioW5x2ReAjMwbjSZf3r97yJ7DGTEFa",
  "key15": "5Jp14TprXPNVaNLyPbekBsjqUjjQW5i14mCQeUMm2aa2yu85iVFQRbSAwWqQ7CFEW7r5tSipA64fPH1GcUEiCV5C",
  "key16": "4X52gLn3GJE9g3uYahEPdjjbY4nvs2haFgC3UwmkoiiNwnJNnApEeimBFyJmcahQbbwtHAKXGPC2v4YWTSE2dGJV",
  "key17": "4hFUAymcQo59Ni5kBjVm27WPfUyyr2kcp2crZF516gPxtN13qqNNTZAb2QciAivaKPpV3atXDJuZ9qFqaMYVMtec",
  "key18": "4wfZBLvpCv25HRbPDfnFhePqk1cHv5cBvVhQZvVmPPb1kF25VgWaaNkkXWgmvQA93L9sGvFDhzXrnLqoU7avEMsJ",
  "key19": "44nmLMknNjVJktdpsbBAXABt8Acmfogxwm8cdewoHUH7iK19czKgQUT7eLQbUYv5HCP9zu29retRG8pez5LGE2Yd",
  "key20": "237dqDGC32mKtNyd31bq5ECQ8VkwFF4ctUGruegwkChtxo517JV4Roo6iME54P5Sfa9aqBraN1dZ5ns62S6eiKSE",
  "key21": "4os5wfNAEEF5dnUEKU9C9Y6STHTMhd4NCud76dPQD6JK3JXFCurxx17SWUehK2XCh8MRR5hnsehs3Vt4NCacmy4Q",
  "key22": "oXwNEM3VRVCg7a69N1BgMRsD8LStN799qk8vKGgDKsjVjLtFRhbeGLh4HCadeDyY5zKhzGGBkLxgiVYjTCjdvfJ",
  "key23": "2PTgzDYECkeEDjRG4UvHpRZgBbHF99iaNa2eCP71C9yxPHxa1f6WbbMeSawtUogK5WoFNmugjmUBzy6gfwCJArMz",
  "key24": "vcsk1ytpGV79WEvs2r2inCRkRYYG7Hc4FAH41L98PpE5Mu5r4BPfGT2YJqa1Ch3f2aJVUomqc9C94xRWFY3jzNe",
  "key25": "3PDTPJDAdrxhYx3fejhEjALaepyGPhLipaUyfBm91ir6dKPThNbLxP48KWvDU9wnzZvMd8aWXQ2imuoGzLc2TGZT",
  "key26": "3GpRbViU6r2KFGen4LYYGqQPsXhSVc8inB2AWcm1yPiqZrGVCi4t8Nv5ecAFJX1EKaXA5WakBjKmkFNo94tkg5p6",
  "key27": "5abpZnmrixj4MyVf9PZvWn3htNc2LPNUNQH5xBReNjWLDsZ6Hxo9C3DsFpkQbGViZXvMFTBYPcuUSTVMirFjAoZi",
  "key28": "45F9YhjdYZqZoEA7onaJJceeQ5Pxce4ViTRYFxeT1N14GBwGixMTmSCATTxeWnVy87hvXgH8ipaGJnVqdfNFTou1",
  "key29": "PoApgRh314UqRj2nF6cXGJBxx9TP2QYzNK1AaP6JjaQiwgbUYHTNPCKG7yWwur43i88dA1mz4c6yhiquo9FKkrV",
  "key30": "3BVQ6NEQuksv5isdSJvN8BWLxhgKJB3Ahkqh2pK5Qc1rjsufSRcm2qv9aM6MsgR628or9Sc78dpj6jcASuZNsZEm",
  "key31": "2QXemqj86coNt7W1cBHBbTSdurys4hXnjwWe5MHNGgdcFVQ5mQD69UQa56yf7n1DonPv5PeBaoUrkN1vMWCvjr8Y",
  "key32": "64copWcZbsjbEdfKf81ipTqYmSpbGd1gB6VRQg8FUgrF9RWCabxG14LnNzUYGtnhxNGM5FymeCooubPoQvEchRVo",
  "key33": "5yT1n6BEoP6u87kNb4EucvG5iAHcMMciafRMUzwGHbv7gxAFs8Zdq585En8Z32xQAZxczaQdZMfm7iyWY3oXCAB8",
  "key34": "ZnyFYKZuNoDwp54Fhumxg6au7h3BaL1UZCWfKHw5fxQx9dc9CUQ3ouPBxBPKGxT6wqawA6XaZXfaMXUovEm9KTN",
  "key35": "5F1fHf7PY3WNoMHSkR9cjjJd5f2GRX4Ka44hBTCkTYTjcvNaKa8sECGUfU4qqsBw4eucQ8XLC1qwoJ1rhKjBLapT",
  "key36": "2VoceE2qXeCq1mc4VS9CCBufaAs2vcbHp6pc27Y6qzJFUAPWEotNdB7L6PceGXs6Wbn27vEVMmEWbL858GWXeyaf",
  "key37": "wTTDwt2uGsdw31p4Qfyz9AycszKdcDqiZxwH63Hip91vtKHa9heiexd6EqbzaKNTWNMfi3Sztpa1MLWn1AUFig4",
  "key38": "3ESU6gQUmt78FXM4bgj8ZpuAhbaPmHQYfbujFRRT9yz9CmH3qvRQMvyyCdKSUSuUJx1n6qddb1iRCNWNGZRgw2YD",
  "key39": "2KM6sXRGdoTfjgJX2v8AuWaaNxFu8CqiwvYJvRFh1dP9fvVacygN8R3JFDUAkTFzoMJCMqR42N45MYtTNWw9J9sn",
  "key40": "TedsndWnnkzboGZcs2XuinLBwKoMnSn2v32YWtgbsCctskvfcqMfy6LyisJTLJ97Nj6GNmN4VxPiMZNjxodgChz",
  "key41": "4h1gMCUnqm3j7wfTMQTCFwCahEHAEosDMP9VaXJzKaNQJCEkoJqN61esp9AxVajqyjpUp927zHGKc1LeyKDfYFrK",
  "key42": "YqqbiNUj6bvSS1SV4a63aAt6AHMsPcWHpXEd3E3JrCQk76ejDnk9qrXZ8ZMVeRVByPo4HQF2XNhGBgXYA3FmYrw",
  "key43": "4Yeavu4etsRrYcq8Zj7ADNHwjxzTr64cBNm3rYs91RxEZutt8AEju4NwG1A3gMsNWpGgohHBfNudrvTDhwqiWgfV",
  "key44": "2skjjyn6Ne3tepXRti185dcZs7PGkT6JGBmmzTHcA3mnPtbWthTXoYcjPZGuMM5bjb4GqLeu6dr4fef73gMkg1ez",
  "key45": "2yU7L2GPfvV5j1eBkB6UcZuaCBbaHhKNHGMfVCWZKyH5vu4VKdJkuQmPdqi9qhnPWAC8EfutpFhCQm5rETptjALf"
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
