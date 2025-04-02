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
    "3pUXvUEVQKGwhEJ6SffiLwWr7cz5CuQyE92Mvsxr5sMgnrdjBEcc1VqtrAUw4iiUy9hBHH9LfaCjoXHo6VoF1rhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XzpFZTUURFSxW4phmcFCYiS8zvYEccQKd7tb8LKwugkF1gcf7nKkZBrRRvXHp4nJ1GSH8hQ5EKGwYNXFZ9y1L8",
  "key1": "65xwhJxqfSsegVfhzJyXsSzw92c4HAEv4i2eNNbNkrFshuktAxJPAGRvyJ9cZx8f5AXETuddr6RSnbgoow12qaFG",
  "key2": "5ehW1xF2orwErEBMcwo3tkce3pQWQBHNv15hfvRvzx4zntS78v2EJVddNjguiFgzmUf5Pko2M2cNE4TdSeLmYFnT",
  "key3": "4Ao1d6i91MdTPvka34DxvPQdYvqmeweYU7856V2FofYztYGFatgQL1XPSJKBs1EhjErbErPVv98W8LWLUmZNDKdJ",
  "key4": "4hTccPzMrp8m383N2UeD7XzqDAW2Wep4pEfB6X3drU3vAsw5RzTzFU5WevtoUv7TyWZoHkypnNU2WgWW7VRZAYeq",
  "key5": "2YHQBsFK3KZpQE7bBt1gpNnhaFPRzKdEPWSFFSwcSu65mxf9ypcoDTCTJ3qTesXMhui4hs5G2KZtbqiguk5vty5p",
  "key6": "2RikLbJPSccHYCqQ6qqH3AV3hNS1ezabYgqpD4pKW1bbV8VKYGPFb6jkFdo65h3aYMRgwvNrRChCr3j9VetfpzTr",
  "key7": "ZjnwjTP2kBvXqumN3ijziCxSx74M3RvuToChRYVzcgyH5QwVRojt8hbpXjA2JMvZsYrRiJQNwcMZgRREKGusrjB",
  "key8": "2xvKwWjHL21XJtdrJWezFrT3BEQQ9LJKEgVK39ZEiW2vFyHvMAhpNNvsGszQMjBidEPymcXgbVWeYjXhPktVAcAn",
  "key9": "5YkXkxf79haf5xSrCkqGiXiSjE6ZYnYoLhiMfV2k1KRP7su9NWRQhA7FkzJNe8bmHs5FppgoE37BfTEhu3Pw4RfB",
  "key10": "4REDK7Jn9HXfbJtnscJDWYSjyZQ89KSS2XENM8KC1RUKFZENeVK2HXTGgV2eAUSomqb21m86FFfGE1QdDg8deZbE",
  "key11": "XBc42bD76ToA4Jz6DEYEZGuhHzGW2GJCWqk5q5LMHz5WaQgFEXX2v3yphoKwfZNCDnwFZPRbt4winaBJTKQrPts",
  "key12": "dgQhyApuCUxnNbkVc2TFL7sEGC5uos4HkMo77v2upTBq8iG9W1FCB5L7jnKKsRtM3X9HY9RHMVSraRnS8eiu7PY",
  "key13": "64LzqZBTaVWih4suZAqMiPeTxXRQHYFRpYeiWTJUnftk7Ntp3QbXpRzbzGGBdJXVmPjhJTE2rsZa2UzGw1uJTLnR",
  "key14": "5vXxYf4yfCCPAuPgxZvFbkrPadUZhRksSPEDLBvgwF233nqTuXXhLs1DH5TRo7XUxBGNtm8L7UMTmfwbKKLHEZ9Y",
  "key15": "dCRLQUGWQUbnryywVCGLYL8NMq1PSeewpiut4Qad7NsdTEaiESKEfH4SD4rfMAT2Q2cohYXUYygYMtRbZQEDPF3",
  "key16": "aGFGiRkZYpzVjziZsX1vVexVhmkPqU562wycRUY5UKtU71bsiy6VSeZPUj1GCHBHtdTLspSCPGKCr7bRY8ymYXU",
  "key17": "36sJmHWn5G1q26DzTZnMgaZmBLCsLx7d1b8KSkz88Mct4Cw1uEx8FLc2XFpZh2cSqRwZiLbDGFN3vVnu8bfdqycE",
  "key18": "ZbXnu8n7oA9MYfy4aZijhSNnqVp5TtTCK3SnqayBx91ZTqgqotur7ck8Rc2yfAP6RMgxZpThtqRMEsBciLekLTP",
  "key19": "39WWjo757ar5T6YiF63TLmqzVTJXRcuUV2rYVAX8c9sF666mZVacQq1cU2WJTJyEQfjbAPqM5g6ZWoBswax19GK6",
  "key20": "3kQUfM6grkRq8AoqxHsLXmDLqHFt3F7e7GDLRDJ1bzCzSgV21Z88siExGHx5knF6VYLfGTdgiwkx7ButNX82ttPe",
  "key21": "ZczEL1tJoTcR2YySbu6GPENN3HctjA8ggkeYVdy8v3LE1DvgUokJXL6nEXagHyfdWidvZkmWfi5dk28um4HRsph",
  "key22": "27ny2V4tYocyh936imqhBrK9mkhZ4rmbWW49ArKw9fHGsyhznWKhasTjXVcxgm9f9LhPvZfUoqx8sWekrVsZ7B8t",
  "key23": "57pnb6eyX82EkJXY3y3fRcpAp9N12XfyTqG4KxJV8vGiEEEb8R2bS3NmFdv78UmMKqUDuPjKPPpeP2Ww2bQ9VCL3",
  "key24": "44dSufQkTCKWnhX26iorfoz34pQXRVSzz5MtiFtuVo1eF93yU182hfSsE1TT6UgBZXJ24VBEcDvzbwpavDtKMkw9",
  "key25": "4epzwFuz4XxjmMSdfU2D4py4yFD8kBWXTTG9ezNJyT6wiKzx15aEipytWxveHv6Wp5vEhsCcpwTZfJgBCNoo7dSV",
  "key26": "3jDeZ3bYk2uMruaFXU2a75wT4RLHjREU2nFrTX3eGDvE3JgSbSPvU315nGGyFLnoBG5DupFMezZqgr5nUcL4BTjp",
  "key27": "4ZowNBCR5Jg6ZvJ2pRoyjLe5kbTMX1vHsZRj86t1W9cVyfWpjDvo2vcsW13mzhPjEFe7SrDofi28gh3BdudQvkUS",
  "key28": "SaDK1wDLhgYn7zfzUMHUgXjFhckSDF1D7QnVrgAjw9H757wuX1Cxiv2wR7QDrNDKG4bwBg5sGCKbMvrkSz1UKLC",
  "key29": "3w3Vz821Qoueq77fmGzKuEENHZE2VeVivXU7hekRvBPEEw8DJSxLJZ693MFd56sgeiqKnqLsLu5SNcumE4qzDJYS",
  "key30": "3PvY7wLoyd8wZAgueG9n5pT6agijN4BSd7duQVDSxBRJ3iixA4GjqZWam71Umci1Q9XEAVt8isur5gjDL3C1ABNg",
  "key31": "2vE9s3mg7dnmSz8RNxLeRs4TaV1jSoWqofcU62j59niaMNGkjnJ48FJA6gEnxsTcD9tSNw5KSiG6ph2wRELxuH1C",
  "key32": "5T6VWr1hPk6rx9KKBTtbZDC5oz8Zwz1tFXjkDwXLtDN6BvY3okdJcEcQofj3YhnHFKGBJ2C3EoUMEE2c3bCgJz6g",
  "key33": "5xu2E7dYnhZikDYtqDc5gcToRpZud76ZRvPeEaCPverJNUBHzv6jULKLggAdzJ84oLLnRYYi28721GVzXVXhAJry",
  "key34": "4nW9H7ja9Af5HnLvRPx6t6yzK283kTGM55j9mQ7uvxKZef1hWTRFgJz3Y5QsoAHj6tLUaj2VkTgcqXKAESHoPkSD",
  "key35": "3qWTgxN3ai226Rci85cMNvrQtac3iDmikeqqv71h6yLViNbn7BF4dhq8MV2GdoXJmYUDvMU72Kna9Eqje5x6C52",
  "key36": "2evpLY7ZT3QYhBiTRaC9MK4ZTU5vni4ci8Qs37qpLzugSkSjJNg9D3TsYGhahnJhj5LcGetLZ9vjVqMznKMFPh3n",
  "key37": "2z6FUyxA215YbDVs76wSHXUdL2XFoGTUW5F9swdX69y5RmqUWZA3BrgsPfKVMTmGo6Nb9YkHZyZRTKdHWFqFhVFs",
  "key38": "4TWVV4MJgcpGYA7TGu5xb4i9eZLBghYDjJNe28poiTWBmd3QMnQ4aNmk2eLM63vwm5xcpYSjWiMnAvLqN1iWF7Bn",
  "key39": "3ARcQtCxRTLJiFXiP7nRUA3BPt4hkkizRYMMNS9zQCsEao4XHVKWBSjvnRcmuR5seivbxEywqGCB7jxGrk8dD6iB",
  "key40": "59MoTfW81bBpCFzHSEn6RDbnXY51rRiqw1FLhtCTxpHzaeykcccH3TMZCzYrn7NZUQXBGZ7rwEvM7ktz4F2Mo7QF",
  "key41": "59oRTjRcay5Huhq9FemqnLD3ktKaEjMfwUD2E9uNb6AqUpvJcqv2mejKR7kGETKVyHBryadrgifRu8p8EhynmLNq",
  "key42": "2EnC5oDB3jmDmzR4xrtXcHWW3LSKBieWkomsWYzbi7UzxsLSCjN5mU2szwqi1CS7KFFvKr4XChjVy2SmLgWvieVa",
  "key43": "5zs3BtUcnJSfmAjNw319BHBhPhfTAuqkvwxM1iFLMbfWcWWcvdsFwchVgTi8yJYrjyBn64GtpcdzW2wQwuwJfxcr"
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
