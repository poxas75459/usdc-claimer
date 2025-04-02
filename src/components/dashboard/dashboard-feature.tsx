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
    "5wqF6sJRx5EGXHPxDLfvkqMwaqhEX21kypUXVgaqND3myNMWWhosZSKea6S7daueQ5se7XTKxa8kckC1hFiVzGdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABCuHrSQB1JEkfYkfXxUpPHLogiKcXrNaknkhvyrV7KPXkudssxsG7EByw6LGLeAovkbpJxTVKwHkkngGdKrfXh",
  "key1": "3kQiUyj4YMszz1mMs43txxECQCfuSdXc6HryM7Wy6bwBjhSC5smWREUXYokaHd9qYxak8Y28NmEiPLjr5wu12p8X",
  "key2": "eNrP8ZHuQBWUJRT7wVyebTQhu5NUCQ8AUVaVP68t3EZm2bVKzUFF5mq9EcqAJvtFBnHzvvEyQRpV3UHMju45SPY",
  "key3": "5jhZYuVejesnHUcfscVnawn6654eBktytH9XGV3aaQaVL2n7G8YGD5umbCYVN7WQpGGrJTSfS8mjfX32wjcwGBBM",
  "key4": "5ZYe2NKLhtbemMZrkchv3wKqxWDByyBP2VNLW4GNBJSGS3HMR5oXLBKaFQEr3922JqTFBvL4WLLkc6okhtDi8FJe",
  "key5": "5sCZyKTdD4mW3ro8kaQATTRzPhyjtRpQuGLsjDBFFvNVx5FyRDipQvfmGgyffhcgduUn9LbYhBmtQLFY9ufcAh1V",
  "key6": "4Bnm7XFUMWkG5bsYAM7qi5uWMPmdNhhP2NQobZn3kjEepKv6Ro2uMgDGJ9nvjWCCfF1N2iYSM4R6eCuJomahccg8",
  "key7": "4NGcCzAQaPja9H3S88eDU8dFxUN89E8q12apTua16poXMk68VqMLFFhbufBg2b3sxDap6xHJKmosdyjPMcMqG744",
  "key8": "UTHjFo7aMoDCVrK67Hc45dGxVtB6cBfdxEMD2d1kpNAQyo3hXzi7RXdeHg1Ri1CqJVDp4axUVepGh7jPKqoAckA",
  "key9": "4ConADKmRpUtC2qAGno55WYqUnSAqpMg6WusGZRETnMC1XT21Y9gP2phLng5Cc3yxMGXYpwfrRPWebJKVtVJ1jhV",
  "key10": "4vkX6NGWHx3oJHbpU4KbySz4dDKQAx1YwVLyoGaoGSMhySbKQDjLm7CJ8Pd8fjgAvUzU4WxFiZuyKiN23fvM4QBh",
  "key11": "ddVEayMeFcdVupUzu55PvYSquvzszpW2YHA7BjtDU2PsTWc2y8ekGhBgyXaPvP7QF14TNup7tCwfWRHdpfs35nW",
  "key12": "2gL2MexLdVZRk1aB9qXEvQ5sqSmW6tTPGTR6bCseiHyVDWvYR7DMjhw1ckEzyKJNPDEq7QggYphBKkHoEfiL9PqH",
  "key13": "4SzKNaRWaYTiLqbEJMgQVELRotGJ9HKWZzRxeEKbrXYWURdQY2TM99ZyeJeBtPr5LCu5mLfBUgn1jPv2HoZQhSSB",
  "key14": "3S4pwmBtjmCwzVv171M9DLrBHAw88XGSkcm9XEvUTL9NLqp59ZxXg7dZYju7fM77CGD2a4K7iJt9bz4vJDH7Fzrg",
  "key15": "4dG18q26Um7zjKenYCt585YSwyBFoPTVTYk1jeR5sCjYWkDn1eGHXYdsyZUb3QfpLsAW2MR2g3qAdAuzKJg8sBQi",
  "key16": "MWnpEFJ4K4uUXJEvMN6W8FE2Zpp39YvgbovVPhrCyNasZg6oX14sUN4f1QcBrR9sTrMaq2C9VYCVE1KxSEJ5B6H",
  "key17": "3B2ckJZtqFNd8hENYzZcg9e3zb1vN7aPY29uE1YBJVVYYAumU1QKGE8w12PLXwenDP8iXYYwuEk66wtFM8PkUmhK",
  "key18": "2GBDhovDf45ipFpFFpR9EeaN3MmNWXbPVz3ySCbqDoUg6TABvdFhS8E2bc2K6HXkEbVW87bcW54oUjDgNE1vp5ys",
  "key19": "3deb6jeBXihceZ4empvsik62SzH5833XsjnbHrniBFvvsC9ZLqog1XebUKPgaCaYFS7Q5edMYUG9c1F1Qdcot5EH",
  "key20": "2hZvikjaJqKK4wnnf9XFqpNtrk4GTsn8KrFYabW1fsftsyGZMmeDXk8V7XCaFU5K14akoChyfv2PHE5PHJqcVW3r",
  "key21": "4Mqb3S4yoobm88dfNjkFxrc2hdHYUk9N8MxLKj4D6Dn8Y3FDN6hGjK65aZNUn4b66gqD7zJmbcRmULRyFNnthT6c",
  "key22": "2EGWqLHQYugcizxWgrL6ojecfUh1dzPQarArt1KPVkCGpjXKFkkAmG59RkS5rFEgrYnjts6ZweAGchyeyBTKPzLD",
  "key23": "3AEeKsAA5TMoTzvA4EsQKeSPNT6j6fBp3TkoSeS8rA4mFiCJacyqcvwPds5QQfCrfZXxbtTrw6z1XLSJSzDNsCCC",
  "key24": "3jhToHLv68rUFgDch4Mja3jYWAqiWR28NPPWGvxdij8AEYVugcbvCd3iiUAdvATsF91CMznwy7wL67uMAg1dPSHT",
  "key25": "3Vj5oRBoNkvm3VB2fSiSHreRQzcxmEFzUbVV7gm6jsbkvhhevJAcUigx1teBAvdwjrtK9uS8TkGNbFAm9EtMCFs3",
  "key26": "xpAB8gVhaysC7jYAcnU3mXefnqZtn4hSCxsrkpPE4GYUWmecw2EDp5VGPcnd4wTGL9tqXPGp5SKWw5SPVeFuyN6",
  "key27": "unPCuKfC833Tp2pbkaN4EkhGvhhXsZB4ywXgevDgPXc2py849wRZfoPpY4nRc4p4aZx99LnMw6piVusFt5u3hHM",
  "key28": "4ErKHQ6mMinCnFKfwCzYiQBubUmbGLtFnX93BPyvkwr34EisfnvzVGTsAazB95Tw1wsmqCxSYtiJLPuKjmLsh2Lj",
  "key29": "9a3zzHbXM4uDb3vNjH4Zbj4zaUKHd9pVHCey2iNadRP1xzY4pWFjCLR5D4xzo976yhVGPBNKHWGVzAJGwmTdUXP",
  "key30": "2x78jang44GG25aRPHFa91ZdN3HMH3Y8X727AqFTQAKptkQDUbmiKZxb8PajQwt9k2GnN4S4B15Vkp7CG3dxfQ2",
  "key31": "5yiyzmrFXYhLSJTsxoT4vCQ6wWwCkziQh7B58VPcreKx7oV68HNvbG7j52TcyuVsj4H9BsFUsQKdUX78WGxuFbZM",
  "key32": "61Fq5BGN8EDwyUXgHVQR1iFq2RWPtEUPWGdx3UBzKhwnXJA6S9VDtwqoK4J5fXs1VPU4Cd4pbEJ5tt9CM4jb4NU3",
  "key33": "3XewTP7X5nzizDPs1d3ngqEw2RLNcgxY8K6FpNLzysHZsrQjVbn2anBikY3FQT5BEZYygDGdopctkjAJ5hHg2NAj",
  "key34": "4ZWpJVGkMDSJYyUZWjE28xL5JFwZSvPFrxqZpapHB2briq3W2Me83NEDN2KArakctPGGVDCzhtgjZLgCLiFG8XkW",
  "key35": "21xbaSj7VLwWeNGkMp9SaY3DkC4NgsixHjCocUr57K1nW9rgYoc9sWchs2CWvqBydXbTgqHeW6kQeq7Q75ZaLiBS",
  "key36": "3gt7mBpPtW5KtvYBe3Fsozm1yvu1L2dmyyvJGphJ81oYQPLe3T6cNELhDnvnmL8RcjRF9X8amZXVmyePBRfpfKju",
  "key37": "is6QZ4E9uaQkMq8WMApBVwyouYVtRbnDG6QJZBg6pmEEntRMBC1PnvttLTEUjLvGMsrrgXkK8V5E9tTJANmA63F"
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
