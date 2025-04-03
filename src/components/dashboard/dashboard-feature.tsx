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
    "5VsTQXs874ob5S2JdF3RgoZMAucpWVBxq5AVn5qjxF6KKFVA82iALkTifZGZuWHv5qfAoVA4PNeYiMiUSnFMdAgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mL5Ryi4hnsW5ue6t3DWH2UPx1petUi7o2kX7M1RvDNe6BuosZWfV8v2m8csQ7qwpJmfLfxTsStWr4zac5XiBJDk",
  "key1": "3GQ3kRjmr8uzfXubPKb3jQS17Pd7TtUgBE3RMGAqLxfhE8h9vYT2JkJN6V6zwAzRncnyArU4QWe4vWfNig3ZQYxQ",
  "key2": "3wzp2aksfhDARssjjzPxUth5yvyri1qXiFXZPMs7uqThtLfm779uhjd5y1Wg56gcz4N8MAksZuXgX25hYqVDCdmb",
  "key3": "3YcboWgMiLzPc5AF2LxHirRafb8Jt9BE9TtLN2wk8ThWBTYi4rEWSDRrspzk9bEbfEFtwrg4AQvXKinkj6xfFBR7",
  "key4": "2zckELxhhD1DYTgQsqR1XrDdzNbk9GBahyEnQUdFH5JwPiDXf55oW2WdgwnSvQ962Shem5SaKEdNw2oh3McE6SyS",
  "key5": "3R8gPYmVpgP6ZGPvdYzibEKMnMvZNCzksxDSuznQbDwLBH54BwZJdmnFL4TgvZDMV6r8sw4kMXSoYTX5hLV5kCHk",
  "key6": "23JX8JE44V9pJkXabPvqYa3N22LKktcpCukpZUjRGntye7dtFZ2vCphfUAc1soED7r8wpJtcPm9FhrwUUEmvNvvr",
  "key7": "29VqWsmK1KK8peA8tgx2YL2z6QmhLPATLKPnemHNY8SSBQ82FtoiMeYfPDvXfCtHRKsFcui7i5jkiccX2bFLvodt",
  "key8": "4DNEwMSx2SB1X5fomVbfpEmAU3ctrZfHaPLWwxd4G5eukuNfuLRT9VPL3mo7EBeznszpBfQVdy7kFdn58NjB9bpQ",
  "key9": "3x2Q4emqYVuLg1dYGyX4K9ahmCAR5FmALa6ioTbiTV46V4KJRokhQwtYdj6HCAKpms99A7woLswDnfrkjqcJ3dMh",
  "key10": "3jEg9S8SaxtKYdQuozMaCFuE3BjWmgQLhMAXktoB1u18u17wLYVoxiZu485oXRr1wvvwyuvt99z9JcSFT3WhP6X7",
  "key11": "46uevbE5yqyPb6LpWe9rvKPz9HnvkS9Yb2eHMauWg9cUe6K6UFC8dUaJqqrExKzKESNPevqw7ZsC9nSG9f3pqUCr",
  "key12": "5Y5Ex3UoMt3onorcqwbHtQjRhHd7Ffvhkw4qmRCE2o19yGgVigLzR4wnZXFYz3EHHgmoa4kzDRFfGVUXUf9si3ZC",
  "key13": "5nTejPsg24m6L1XY3TDFVeqcAJQ4ZEKneCnKSjTsNu1s7UFLCVQAx6T4nEehExJFJN2JwNFirBxbL1by8tNG8rwm",
  "key14": "4YU1dSXLUn5mBdjmS26ZWjbkPaQqQcpVsMV5ydsWcjpM2MaAVcmLRaSJ5tiLoV3gWAEdjyez2erdu1vhQycvWU4V",
  "key15": "5Y8udnLXkDvBgKbHSzt6v6yR2pdkn81JuiEVWjyrL97WHwCxTE4fSZnke71BMvq6ryjWVcFLy7MaUsKFa5NLFCiW",
  "key16": "4ksgsmBM5vrd9Rm3tyWqGXP7HP291GuPuNKL1Gszdxodtyc4caFAm6qmrbwpP2h8FgPVBXS1FiMEQCwpx8u3xDxU",
  "key17": "2S89kRbyPUMu6AXmgjNDtDUX1LPURU74Y145BeBuEGcAkuUif4cTvGKWNknA8CyqVGFjjUBicxzLCULFwFPyjxLv",
  "key18": "41fmugWDiEXbTcJ7uXZQ1oUnjEmb6M9gPwLnGDZrQA8K6K7JVFKZgVnhGcU7YsknpWCtQjJ8APjcoAqDSCEwaboA",
  "key19": "Y2XNcabVi9wPh7fjSDBVoroBK69JSw61Heq9fWyjxApEjhxXvFjx2cKveT1eTm5KNEMpRCZ7gu9WF36vWpCenAd",
  "key20": "2Hp1b1vrneh68gP5RLbKabkjFA133AJrHHpCEFfvZHMkjge7WCi7Xgnf156GqJDYoFAs9Zc4rs8hkhKg69BuhapV",
  "key21": "4Kc1pqLxDWS6fBfBANqktTPGitX62agQzS7KYB4qsWpRNwgD73uJYV67PNJf4v7TdZohZ2UX8BqJ4Ld7RqN2qq6G",
  "key22": "4NNYyn4WdAM1QZmNJfjNHssX2Ah9mfV3DTBxP4modRmRXQYczZKKa6kzaSyK9qDeGcpArX9BipQTtFnaE2M5nXYA",
  "key23": "2BiGsSECtwZRnm6ffv4CFfrn6XyN85iruqV1GjU5aXerCfjxY2RyRbKQfj1Zphfu5jBEZ1cFrNbBJgf9NHtbpWPk",
  "key24": "UdhVrzHPts4nZHqqFNeagV8a977ieTurvopnTC5hvEV8FU4b38Q6C1at9CzdWvGvBnW7KL492nqRy5jQ2aKWG6w",
  "key25": "45zt3QqqrqowwcctGzjiuKPYSEiatctJ1Gy8VNzmPs9PRbWhbhGgqCkT1B43E8ArRpgzB7AxX8nczwsYqoBxBS8u",
  "key26": "ZUgK3RWsnHVMpPD2jvePzQeGQzWjzWg2mRuMGcTztXF9aFHhrdc1UnPBjKTBb1rDaykMaVkox1ZmSTmxS6QTdHs",
  "key27": "4zU7PKNxUJ63pGVrDfCu7PzpvkAtxrFz8nyffaNbhxfgDzsLtdGvEANLYC39Y6M2N8HbwZnmKhXfuEY8wG2nyc6Z",
  "key28": "3gpNsqobAe8jVtGRDYSZFwueT4QkHeWXPQC5S7sMNEozANVxLYh1VVxLMWasyi5b6Y4ay34j9Vd8ArvzQBm1Mdt",
  "key29": "4CwaFsEJykWRshPESpk65gKim9fJZ4poNGxB5AymNC176KDbcgoVPJCuRf23BLnxMreS9vefZv9WmWXJoPbL8UuU",
  "key30": "5vGyxRZwjkgpGvASfCEmdqr5dY3DVmCLqmewuSqrfiRix9pWUMyVs1EPuaaEVZNJTLQgX4AyP6NR3ucj64zMw85x",
  "key31": "HaMmy4RQdUrpcWoHn6eLJmLvfDApnHGHEehMuAfE2gmVWmnHS76jwWfEzsEFx6iTUeZwPuUCMknV94srSFvwrUY",
  "key32": "5oc2BcrCndM4VT3Hns4G2zhv1djfpxj2c8ku1HCesjpnjNJnbsNh8B6hiipLiWqnXmepktMcJMnMMkayh8uRuuy7",
  "key33": "4RGGbs5QNkmTFktSFfSWBzjvDXmtXs3eqS1XfGFejiPUYrBg6KBmHYuPnZE4dCQ5jnWhfyF2KHAmEqocbEkajQnY",
  "key34": "4iteZfNEEd5eWkm9XjgoWShn21cj69cKBshjyrVNwRPdEijtiF1KieLUwEW8JuKf5sMRskHt7akAVkYrf65HuXLX",
  "key35": "Wf1pYBw1fdC4o3QLRnh7DNYTZGWhP7vzeRsQgTemB5KaKxoyJWtatr41PRaR5MSZVFHtzGVA7d5opW3BhM3AHBi",
  "key36": "4HUtz5P8jUwsjkwJyiWYR1Et4WpQhytmAhj4G9xwwAMxeN2risarJkU6SqnxUCUMZVqg3wZRcesUcCvkEiP9G46t",
  "key37": "22yURw8zY3mMEkC7ohDUmg8vQBYBnisD6MsQ8bjFdjTqSxLJGQQUaapHoMgcWzrawQGLJsbKEAgg2RLeUEviH5ff",
  "key38": "67ZW8xnNfnwQCWuJ1zwYMTpm6WxSxbLjbn2yoFfaozunTfGgB555WgEQjiXGTKoeGUuLB6KGQB6dLNJyGe5E3oP5",
  "key39": "4BGFgJofLSgppJGD9T9ojtNyfKRxPHXM7FHsEXkmEqagdwqaL4TExGZsJV47hZkoQFuniRRDjL1urCmT82xm5wMC",
  "key40": "3fKAgrJcvo2sBiik29knHMnjook7ZtjHGiihr29iEcechFxNAuuHq1kWe9tUD1PeRotDVoDMDVHuHWJQdVNQwjqS",
  "key41": "4inTyN4nf6jwo95zWBywYKs15pY9bCYt31f9Fedg1GJyZFjqChgtiuG6mTc2Z7hVdqPoP4mdmHPsThWktVJSTRKf",
  "key42": "Yg3QmgpKFQi5hZDBbWEFKvRYgtxTe6fJxD58Xzz32Mx3przGiBRq7VpHf95HPJyxEvoGQteRuAdoCTeyEZXJNrn",
  "key43": "4XtJFvZuG1xUTs6srdxQnWVMYZ6BTNhZncAJYrsi2QrUz4ZitV5kKUuCwPCsVDcQUhVB3SzMWcnRXvcjhAYsfGQo"
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
