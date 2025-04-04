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
    "2ca2MyTuSfs5adgFwXvjLviha9tbaFyXKiJbP4L7JJXyWVeMe2NcZcpbPhVqPbymQw4yseR3YiJbDd93Pk5VPGRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxBz4aBWmYdhd1YhLfGsHAS44gvAWhQoNRr1gWK4ugp9KeEQ1gfpYK4toZ2Arvn7on5C5Yx3CnFc1gLGXMgiEe1",
  "key1": "4v4Q8ktDubmyNVeKan5gt2PDvcLiAWeUkiJ4AejQ44Y84BehVFour6TuVrfqM9zicsKqfsCZbKY4TZVoJJw2jJkR",
  "key2": "3dg8Vr5LJ5YwNx8YcbPtQdZaCvgHJYcBj5TrRDQY4u4xWqRoETYGSQWApWa2P6jMGUBvEqVkaB93gyqqtFpqFRd8",
  "key3": "2hDT2Q9UVcaSLQ43q2XsYyt1EW5yegRmtZsCjhYWWrTzKN4tLkRSGDZ32goSSsvS7bCa4V2P3wGvYuFKJ3KWxZB2",
  "key4": "KCjAY8syBjqNjdR2caSKUhqhRqRjiX3McB3SUdh4eyaGNJCrQwbe6n75SXdJVTniKtDGCb3XtXAWgdjiZaDeQLn",
  "key5": "512LBsEyAnUV55dBsEVXUtZrrHNnJfSjzaNEa7TgrbbHfoedjXuDARHVTikaE6qrpyEumEHUWq6VDgNZuB8sYZHg",
  "key6": "SkRLyJn2b17tKDnPMzacYG2VdRYFQZZFhzWXVQPku1dyGRnGxzzgjPe1wsbwBvdg6rT3mZ4fC85jU9PahS3qk3y",
  "key7": "3D9FMhwMDQb2yuGncKCYcnRziDEyUoE7GeQhBbfcGhiHj7g2wC3daZxm9i2qQNhHEKGGbopmFL2wHPuTR59fQPWK",
  "key8": "yTGrRwaoGX3JRPdrF2y6tQBX26f5mkS7hosw2j9TBjmb89zMxHZvgGLWoRBzJvF5UNSVtSDvBEPMz2pgmypuBtq",
  "key9": "3mxqyBCnQSN3sBdQL4LkgXCdgbH6VB3vkRPnDuoyUzcYvqGeH3DbBcLG6wfKDhxCnCNRKXCL5RYiFp9rVhTpAVko",
  "key10": "2YrATNLX17odhXFGCytzkmD1qK29qfS2HJjCR22PCxMeL2Qkr34EFKxtN16CH5qmUNLgXiWK9CiBLdyShnJdWSnJ",
  "key11": "JRFaSjVFq6vsVwSBiboXTf4pTHPZJ1miachqmU354i1uJKfjz1sDb8uNdgoLCgZTcJ8GAoXeV4cBDKPwGCRSVSy",
  "key12": "2EgZddSzRRmYAYMStKDU2DPWU8mHdRbdwMZGCuCqHK1FDL6kUZLzBVyvbm7s2GaEdSaBKQ1rvmro2YCNT8pD1Qgt",
  "key13": "3AQtfpheFg9X23GzEosmFoVBQ2NRia1mFSPBx8k6TX5eA9iTNEqpSV2PGDYkENamuZUG8zyJF64PFLVCe3bB3q1U",
  "key14": "29QNsaUVCKjNReyhrd7ASigjypQTkFUBu1R6q5rByA1Bk3ru4cuX1CdByJAqBKTLvLsp2JRcT385ChV2tfMUy8Am",
  "key15": "hh2ERy6VTJ2oWaWgj1JKiUt5kWrw1AE9H3gxsNH4Tg1nhzb1TkYr84RqHUA7S8NMEFQd5mtiPJjfXMrApwsnrjH",
  "key16": "2YzwYUkzdhJWKKb1fBLf648zibyFeZKvdZSHpgaYUUozzwKrZRVVzR1F6wAfQzAniPAkTQxpCdBRdiiKgZPNdTKZ",
  "key17": "QPwF3cAdCVCDTDnEZQp9nkU5qPerwcyNwMGq7cn2A2DuZ7emhVLhM6GaG2ypunZkYLjf2iwcBkT1FGvYAYyjhhX",
  "key18": "3xQ1GNFknZ1wkSQBro7852JBDKsRLJTLhcLD1TaWKwAs4ahQHCi8BDjV4467ZrUwbGFu49xDbHNfRwNKKcutNwRT",
  "key19": "3uGta9ueiBMSmf8eNUPp6hoojCkxKH8p2dGh7T5viP791B5VsbnX4HJMY8NMJjtvQ71tzfpPasZW76QWcL8bb2Yi",
  "key20": "5cqU42BHsta7M1uz7qpAoFfmHH9m9AUAtejVAGH4wwwMChRLPh8GNEp3qj2kit71hf8UoAY1CKpvoTvPE23aoMtV",
  "key21": "5svgYEP5mt9H11gmQVUR4Eda5NMnoQi2RZoFmnB1Wt2Lm5FMEW1WgoRHwxDrxp8uefHKBqdXYt2ZgLVBbU3hiksJ",
  "key22": "49vxjbb46YST89KR3y4oZmp91kUxNsboatdUGNPxD8DC7xuhaRDayxjowVqYeVF9Ud3gTTEzqFtx1mP7oiidsLmH",
  "key23": "2Zz8DFcGSXbB5TJT1b1qYMJ5KyuQmfEyWbk7YrFxpSwjiZiGpP8tbRh2ZDPyFWwoDpLMGoXZyPqKtRRGPgKuqUzD",
  "key24": "KHf2b3swbbsjm2SbiBkttgAgDooRRbvYJ4Jgm2XoDaDmQb2B44941zcdDzuePEm6nETqYiu2LHfF62SvXPfWutb",
  "key25": "4kPsSDF3Z7n2KY12VzfD5FsTjRMLLxQVzY6nAyKiWtvjYFgs4zEB5UiXETujSJ4Qz8fmAd2iyhPGDz9UwEPim8CG",
  "key26": "2y97osfu1eZ8cE28Rgy1nAXUCE241Mo2r8DDshaHPN8E75KJ6eiqaPBL63dJ7pdYvw5EPZdZVuN1t4k2MFCBYjjz",
  "key27": "64SYfmKNrHvYEsuvd3fSVj5zbkQYia4V5sErvW21AtWJCr3aBv7PGBRomeFjsVGS9DzdV98nHHPahPNeZhPgNkQ9",
  "key28": "2bFfBfsjEU7nncvmDg7XDWRYVBKQcaC6YVM3Q2xrTgiu2gZCMZLzkydzcQDUVeyqjRcnigAuv9xSJDNL8TndjTPv",
  "key29": "NvBDJtiiprsdohTkkBqscR2urtSBZXn8JbreP48BRpzJ5rXNjxVjGXkeEkpMwPUZdnGJ3wXCos6jThLy4Prc2DV",
  "key30": "oJz5WakH8D8ha82j17t5eMd7zzEcoad1FKQdxspEK1aEhfe9u3iR4pLzQZt4jYLGBwaZhcR7BdPMkSaxLMb5iFg",
  "key31": "2V5kLtQst9FNHE3rb3vr3cM3318A5fpUqhMAqiLLXG9e55jycXw7p49sNxCF4drTedWED5sGw6Le3sncvrP3jzUx",
  "key32": "3HGSA7UtUfucwBbbGnd4soW5TKJXcoYUcpaoXzLhUHLFb5uQJRjJTqweQnwfDcCegWzHHixAZTg9FertfntLBtiV",
  "key33": "5dgcH7ZMeLyNBiQAQyR4yMSFh3iiindRTHxDqFzrXZBc8C39Q5gXyWpQUpJgGtVCJBoKVuKALjaHHC462czjbUEz",
  "key34": "4ysWyi76USt5DGMEAu9cHk9fzaVnwSQ38PBadiJr9YShTpwmZwkZ7YfJtL45mMf34KqgxoVRFJg9WyTvfmLops7u",
  "key35": "232BF4EwcrcuDWHuXGAxBrJs2iAaTgQFb7kpQBgmb5b6cmn514GCwzVFYuk1r8ntkmbxixePYPS4tA9h1XuG98ea",
  "key36": "3ApYtKV3Dh8QU39FDRJaTK8jMQCzRm8HVVgBKK7vVU97dXNHrcZUN9io56buDkD3L1JReoiDkjqp67vEH92YgZF5",
  "key37": "4TyYWhVjJJfpMTnsPRUoh7rNddiw3xCRwN9AqmEKVvvxfdZAeTqiWCFGAYGFkrCoGTvy5w4ia1fn3e6oWmvoZ5TZ",
  "key38": "iv8cRpYwXSjYxDPvJ2GVu5caK1XgqZFopBE4AuzjBXiHi7Gy9Ae1m5uHFMgVfcjkXQS8G68YucvnGrZVqC1QtUU",
  "key39": "515NwJJ6bBpPBc2LY2coMFL3Nj4UMFuRz1WeF5JMEU82qRfERickqYiqXARv9LqTJapCDuyka46ooYiPg7Hzajev",
  "key40": "2Q1mWLFE3Jce3QY4MpRiG91F9f5W3GnK7WJD1Uef9qxv4bsRY1fDeATRby1NXYh4DNQLkiyp3LW8NqjSCW3Vyq8w",
  "key41": "2h4fGydKBLkAkCErGC4CcJUkDEceF2n6sg1dKMvXzuBhNAJrF9Kx8mpsXcUqKZgFjbGMbhzoFz1DZUXBLMpgg1yt",
  "key42": "3aWFY1HxmyWz214jGCo5jJ4m3o6WS9vMN7YMG786ga3fRjCTTeKDFzCFkQZX1eVSca4Qg1JAk1KgHrnjSgaJFAUV"
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
