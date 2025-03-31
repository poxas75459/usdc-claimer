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
    "5Ufaci7pxrXVkU1rX83oCAe2UYixRR9wt35rnc9bt9z3biuTP6gc8bdTnqKEAXBqp2VcmVtvehFX25cj47Y8hBTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPzZsFqmNdfwuRo3DXvmiXexWZQvrBnej8os8y6zym6ScYuFjcZDosRVngAWnY5QCS7WwbU1kbwTfHQ7LJeLEpd",
  "key1": "1294WYtYByQDHKKNeBdL6FYeRbHmNzQEAEJTCmLYKvcwKxoHxRGz8QHj3NM77drashYmxMKBHF4bvD1M2QQ9uyBJ",
  "key2": "ztVA1jdSmRrZsnq7gTTDTBpuWVaphUMQWrTb4dBTMsi6dX1bDviVv2Dx1bfXRRRPk79YvjwqjGRLz7HmMTT9NCh",
  "key3": "45XLEaYYNoXJJBqFnELQ95d2QCkppDLiHF8ZDT2hT1LhMqeCBwAfkfm2naBL4sF7TX3CctPudtLGtz1XNArN3Nah",
  "key4": "Czw2mLvn2JcD5kbe6EFeqiqwRMaJ2HvNLCvpfP59EugZQe4JE8GpyvubkK4Txac5Uzyx9FGG6V1tLD5ja3SBQcp",
  "key5": "389PThADq7HMiRRTZypnEom2ra2jqRbct8FBQR46spiD5KHT3UQDAaYCDrUBNHdvSwopkBiP8NiX7p8BvFFzQMWH",
  "key6": "3oh8KfyegR8Prwh2iam1g4sU4uwkTX6tKyFeSJE4WhxZ7ai2Whueef45CYh19yFgC5bomL9za5kZ5TDNopgMBusA",
  "key7": "dzqrba4BwmcJr4iJHr1TnaDK2x3XAHty4EP9o57jcxPxXEt5ZwVkRb21tKQ2h9rc1L6Yw52WU4WHjRLawsQzFfy",
  "key8": "4bcH8J5FoEYT1rSCmwsEzNVwhR4tGoMCmy2VpvLFg9R9dD3jVLguQ4g6iPzF1FeqFTex9vqGoYhv1tqTxLfi3KwJ",
  "key9": "fsXY5krUVYdGv5PCk5CdvhZWpYi3ZyJ6zvfQFhYmt6WkZtUXQB39fKLkFCBgwwmYmskb5tewc6T7Y91nZdVv9rR",
  "key10": "2dWidFJZj3JsxdkTB7yqj6jRRMDvJHYR7PhXat351FzpmwmPcos82QehPWV8Z5GeEkRyRFGqvW4cT931XDr8KX1",
  "key11": "4q1H6TP6Uc2a1Qx9mc5CLhXMJXEjyG3hkVYCW34QkYrYXBA26DW7M9EuFY6PGosvupPL6RW5xmHRVpm2gFmXFzgS",
  "key12": "38rgrS3k5HGEqh5a9q48kRLMUgKpEeqezfvMxAFA2dHPzbzdsdTgqeC3U6SZydRhKjvacdQDum5fTnBksPhB3tSM",
  "key13": "3HKyDogcc6TQdXB2NPNGDfngUNnsBSvqMSfNB997MpvVb5DBi2Tjgd65ogszgQxDwBK6MEizNpC98Zu7EHotSdh3",
  "key14": "5km7xbRP27yVdykAetvm13NhZZZR1szyvNdKWRA8cMsrseb59smVbTsw4NoywGKhRUvnhR7a9Pte2TJDnJNfFjXM",
  "key15": "2k7f49mcmMNqRA8keHzzvnvBZCzwXnDqxqDTDgmsbbM1SwcvRDD9eQnSeHLzvDPbWNXNrJVeKzn6ZGiAQv77FAQv",
  "key16": "49FpBVfeXZyCjbeMZ2ZhnqRgHKtv4zusDyoLMfvqMSSDiGr42YUqvzT7GexBFDeMVCfsv8keBhsEHL6a8ZWCdi5c",
  "key17": "26cM1mi1rLNtfVuo4Z7fTrB2AMV6kg5sJ7YhLL4h7RiQvHttZLbWkxq9z8a4A8cmZmv5mkLov2ARn3BbuhWx8dBV",
  "key18": "2dKVRqdteJ8uYWAa8aVyLzVquwggmXtGM95KHfBPC5pW4bwszWeiwVHXJLAmHWTxBTGvSQYF1ANQ6AotA5hNKuXj",
  "key19": "9QKxqijPcNUGTFHwVLsmxmGm8pwcK6h9ntGg94sS3tCcqeKMTBFsk7V9tGyWDJBokJN12bLyN1vJq4kHWA38NE5",
  "key20": "4MVHbCcMQikD8xjty2RhrzFXNqUR2cRchqyivkTTBRYLbmaEMq4SGU9a9eVAdaeAT66Xws1bTuWqi1j7CPHHcEy8",
  "key21": "2kjtmHbUj58HXpTsXSVMQQqqNB8mNCV4fEWQLi8Xt2TerDJy2BLX8RKYX3yci3xBJGC2R5wMzgpNiDimuokCchS5",
  "key22": "4ET4JkCqufpKYACBAinwPdBzxERTtYHuWbBTVAv8WYBBTnWfi5pVNctBwnAGgDqeJWcS1BfaorWsc8gtt85HGe2j",
  "key23": "RAmB3vqmSnd3LeRvYPDzpst37dm5iN3HveVSBSxLykZ3mbZzvMLYcZx3HANjyzoZphfsvHQRQkmNv5XBUKZ2nUp",
  "key24": "5j7XPi6s4Kf28h9uHRVHkMCWpyBs7KSsffo3b1p5aRwhNhpmhcdPD8oFP4DKPpYtDVDDjFJAM315PZxLwzcYzEeo",
  "key25": "2ZbwWYQ3caXgNzguc4uEGY7Xstdt5bc2KFUXyHMChzNbduk1QMSfJHtJYZ3Xd2i5Hg8yBxUJtZNqJLkHiKyhNPom",
  "key26": "3WX6Fop2a8xbJyodkYFiaURZ9AgV75rWf9dhqAqBB3BQPmqnKiT84tQW2gGZjqQ5rq7WPm4K933rouTCtXoLJR7D",
  "key27": "3bWXHGraFH9NuHfoz49SvCVKtAhi5e6gzu2WuMRdrLgS2AbYcp26kFTiUe283iv4K4JCrfccirWd825eQXVgnVC3",
  "key28": "3KhPQ15XcPPKsxsudx9tkzuo6MzADBSTSVqvHB66kfN3uHxPXK56jmri4WE3R1hhpzkVqbZEsc3dM3dS8HSB2jdm",
  "key29": "2TNSh3Sqfr9M5EkarmVAW6WnQCUBFmzedskuaxrDdBhcMNkZ121MtrYvbVAz4r7YGDMQrjT67iMw2GbobBguBXD7",
  "key30": "492LnjhHJrhaJtrPbHEGY5B7MXapu6sv7xqwY1pbY9oHqu6JhvVVvzu1R4ygqbXokCYRnDViBp1pMZu2UBfQ7UCR",
  "key31": "2mHwpbDzKqE1zcB6rDJxTvXLGg6vypZbySck852MgHoFheC9vrLj6PEbiJmrb25vtYehNMsQLjoLobmP9EMeVReP",
  "key32": "58GcGG58ZK6MakkSEzkRBHDLm641Z32nVxfcuXXa3kUAp4oT3NK25VjbEwftme43nR6biM1TGs1ZfYQTT7MT95Q9",
  "key33": "5uAPAwBsENFQHH18JtgeKwJtR9ywQKxHYaSpgQHMSRxG2B8dzLqUJswsHJszH2tWvS9Z3nai9i4KacvyAjePLduT",
  "key34": "621QUJaBrRLdX8i8C3PQpCN93x5fMKbtTm7Vp7KjXxPVwcR9RZHeAziuaGeBrDRfcxqSY8j73nq6r2Gu5FGVmQvN",
  "key35": "5zTNc6LFyFm8A2nbWmhsx1Geaecv83MGgy33AE5u146CenoUqUnRA75nCMYfwvkiokbghQGqi8LQWBoqdKPFy4ar",
  "key36": "4p9a6m6iPmPA6bL1wMB9EWL2traST2c6uBV7qofbo8SKiZfWLmsWGPuU3jyPzGk6Ri9JXvF8zLmgmzzCsDXkNSgJ",
  "key37": "2nx5DF8MT8wX7QZwvCAvJZCxzPpcUm6E889xD96hz15hkiapVvN9vaDbpp1UAnjKGBXixBS4dVmhUjUNtPPkG9Pw",
  "key38": "5wsC68vjSWgvv2RvKF3NVQXGKkCFbsHU9c6ad4uAbBs4TasM7FEGSCbUxz9hQPB7MLjeVJbgVBQRahALZDoxeFZu",
  "key39": "2ig5oX6hXd9hqimuxBLn1tNUKPbZMnctjkc4H3TpXfvGkZLvBXyGvS6EMrFrZP4tpWiFcZqkoecrutDXQAsxeSK6",
  "key40": "3CmZS2s9gpUqhr8oGWP6gHxXtBG26tHicsh8k7ZjkSjvqEbN28GE75Sa7JpanyhV5dDoxdif6E5sGTNqPWwbKiUT",
  "key41": "3WkgVhLjmREhRXwbKMpc46vBAwYQvj9nCByuYcmLH68ashZa3NEP2Uscu26TRjURZR7hVkNJywiM7dFSs1xhrQox",
  "key42": "iEDw7CAcXrbSvuWQ2u5PnUGLTqMS3D6JVYjrip3oeMhSUiQaZbYFgS5HEyEoefqXBWTe8cqo5QU8kh5YhtigCt9",
  "key43": "44Batan4w7qDQwMLJvXVYtVssCuwnjKzdeLxy21vkrg6pCPNeM3nPdMLHAU9ZhGfZYKTB5LmYPaUxHVyUcAiDFMm",
  "key44": "2fYSP49ZCPLfjgXywbg3iY9RYmD2LeYi2kpfqPCQs8gkQWNoBjY9tcqgpJ54xErczrDogE6cNep6f28ER3E1p2Sp",
  "key45": "3aisyR9X8whvRPc7J3Y6dySnQhbrTL4Y3PQFtsD7iYiTCGeST2cnHSLmHKQpodpwvb2tunzr9DNHYCZoY2hwJivr"
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
