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
    "3WnDEZjZKwq2nSLSzEbFjMgBQK2u185siww2UzXH9mFZBzNhQuDfgqbkD2aHTNBtZDAakB8uVetVMv315gvJQs7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVQs4yS3ZqnTJxENU9ZF6bWEjnDidRAbBDj3fYWRdJHVUDFM8JzQcV8AgoRt4SpGUqz2s8t1bmAXN4XBHEbxZmA",
  "key1": "5UT3zoBtY7Rc6HzENTFUHk2ezooWTrYS9U3gMdnkt2ZB9hxNvCP33y3mkUTSzwjPxyxmCVaBQjTGsfUfd2bf5GFB",
  "key2": "2h2UrYPraK92hkPuybaF45nUfny5PAQHLU9wYnmi3KBKGpkNxdRiLNGaYjccvqBvqDwNVmJdPFvxhcRRZujPrr2L",
  "key3": "4N3Fde2Sx2PJtbcuosVtYTxG54HwwA5rPuseVqw7DnMrbGezuWSx5cEc7jnQycR3Ufsyo14nEU7UY1EQtKb6ZTrW",
  "key4": "38CGTrdCXguU2TU2CMgFvvg4F7DqaVGjnH5nvxf6Q6QQuNenvBqyNgi3n9gbTPTHXCinvoSVSr1EKPYvJFfsqbkZ",
  "key5": "3rHN5vDMCcN9VuPLkr65N6raGRTG5d55uhU2ekJ1u9g8a1PB2f6L9viEV3gaUQLQohfnNbJH8tyjo8h1MWkts2JW",
  "key6": "5sb4FqDNnDsS8ChxyJeUR8g8exUX3BSPWY8JncxLCtu9nNsexjAEVWwkRDN3pGyrm8oM8uYiUKds2X6Jo5vV2zZo",
  "key7": "5hmhcfVRUuz99FYJy6RV3U8FL7CHiiNiECEJr132Gs2BbJjkM9jUf34Fh8snd4Zd41gyWh8crZhXwp1HD5kZajCT",
  "key8": "4MwF3xGW7udRXjVkwrHZSfkmis2uebLmP9LupYAMMWR2Bw9wR7dPUHNgeqUzuTwUjuSRQ7mJ7qkvKhqhVvWoSApS",
  "key9": "23SDb7DNAiZ2orJDrnU5pXL7xSzHK7rPDJCGrXxR2kNBqY3JFd8weUfjYGwo8Lroz7Tg9vU18vG32VMQgYGekDQP",
  "key10": "3HqJmN39mUes8EUUNLNb6FJBGpLSWYHs9iJ5YuZH34pYpt3m9wCcbF9xTfJnfNLdmV35onUdCjVrAYbC6i26Fcgs",
  "key11": "4shjNnVKXQ4Lf3zKoB9WB87GFP1WMwPtQ5CFshRcBq3TvxDWYBNd1DvGu8PwUfqTcUrBiHgdBdRk7koYSzDwMMo2",
  "key12": "2MsTQu4HF1yo5EqTYgzwnt6rCYi8e9fdAK2NqPFwSrEZWWALpaxsP3VDVtJRVcGq3Ji2uKNjWV7DGs74fcoGpg9H",
  "key13": "zGyUG554nq2ZRVSE2V9Sr2okeytDhat6Ssgv6e6zRVbbirQMm3dVujGczZ9iEUfiL4wxxnGj9JvxJb3va6kKoKD",
  "key14": "5X8D4TkxUsAY6TFfuLBs3t8ABVEagyRCUkJNHL97y5EZkn9t97Gvrfitw3e7AWF15mBCYDdkuo4t3JWQA5TX7roq",
  "key15": "2wzhFqk1Xmh1GdnhcKwZiuGq6VoHW6tEep5Ppbj4CYnGQuuW57kQjFsvQDcJ5KQ9AhqRir36BSdTw5z81WaCftB4",
  "key16": "2NfiwybJddYQpvUJY2g7qPp1zRD7zCGNEQ596YEBejjHKbJYyqq7BavoMFqYWXmXkcnyU3nBVTztjZDM5Yfijgff",
  "key17": "59LMmUX2eG2D1inBA5jvJPd6sPi1aMNYmpGp41YQWhWUnGXspKny73HQUgNzTo3642XUfSbQjWa1xqs3QjJqbZac",
  "key18": "63TSY8T6bfoRQxqNiwnJ5oeCpSe9AGbBHC4bt5hqmsz18f5FDBwLsKjGkutmKiv59bjJKhvyVFF8Vh8BzXcN8ASy",
  "key19": "5x5W8VU1Y3z4BUiyVFoygWYd2zjNJYCXeXRP1UbBakuC3QSZLuMqoaK7bxK938zYGwcVL8ARgU9WGkp3maYexQg2",
  "key20": "24mRq9C6x5StUbV9yV5dwVsRLqaBp25Mtn1uU35zFKnPSB63R1iDMW1k1nm7QXHZ1BpyvygRUbMDacfjaVmNHAyK",
  "key21": "4xuaDTcLCys5WycBFJzNvwFSeVo61zUeyj55YZjx3w22g3jn51mEYUHPk1Ft1bv8sqQUXEzfJ6guqtmTikjfX7nw",
  "key22": "5xDknhGqUuJXgwknRaQgDjzSFacBDVVRSnEKY3UmfEbTCqJR2DNxTDnUormtXKWrUzumZGtdcH4e1KA6rSoiYNkg",
  "key23": "U7AZ7s9rLpJvmF9AmkwWHHC3om5itQwK5fp6DSWGdDEvdpBRBnQPH5enNY6NtvUfyoAPEGJ3Qa7RkmbmdkTSRmZ",
  "key24": "3PVj3uKaRST8zKr1ZJPg3FCN134g5DtDxZzAMDH4ZG3wsK2rYyM7xfW9y5HGTAnMJBaz4LqusKNWw49HYcCgbxnn",
  "key25": "5XjyEiAt4tdns3m4CXYLi9QoTUVatH5E2RuCEPdgUjrmP8m4XgLTALrucUR4skqLofe4oqzzFC929qTMSNJZHbVw",
  "key26": "3VzqKFC96qqDSTR8ut6d68N2aLCiNDihjgdgtpjx2CTcMJCztCsJF11iZrpW1CXRKoYHosaamtJhAXRcFg8mMWcx",
  "key27": "5h3o9YpaQoUuEnMxaPamk37JE4prrnUXiE9o5y4bnu3augoY2mx8vLmRxUC26FU8h87xxb7cYcS2BhoYZPhVzoNc",
  "key28": "29KwwyZErHUmzjRNa7mY8bxazcY75oxnaBYGM1ftqXt1M1ozzttwxe14xFeLPkLT9JxCEzHJbtvStrg29Pn9NHWe",
  "key29": "3k2NBMxB8dZAPRTuGapqukxjLp3mXp3DHqHDKdMnSfLVFB1RXshCnrnscWvykRArkNtPyPbUGbCBwFRruM95risx",
  "key30": "4s1cuDPtkVWsN4eKH6nGvfRfuMvXTvu37uu5H7b8tMgNeBmC1bEJ2DaG1Pn87Be1qqFd8YADAb4842N6jz4vGv2n",
  "key31": "3Ndi9RrR8W4bzZEkTuw3G4RiGQU7Y3d3d641397D92TA4y1AQMJvxJgkazuPSYTxuhw8Dt27fAXunB2s3uu3CaET",
  "key32": "2mFrZFEenbNKtg9v1G1RvgbSHmwPtapq9kE27FL6RLjrDLhfSmrrrToMEj36UFBppzVDVMTo14wSHMp6EWC9qw5y",
  "key33": "hZMw486GkdyuJe9nYBWDuMMysRZnHCrbDji9p1ZDxWHHTVB6ksKAJsitM8ELrcA2CHBWBEWY4XmWURqDtTjWvAg",
  "key34": "szMdEw23LSPJLRN4N1ej5AseYCkNzuryKyArAyvNGnkZDGUx2SXaYZLqZ5cK7Cpb9hWwAGXTVXcmHmtbaXQMQUz",
  "key35": "5jFXCAy1GcSPxFCyK7ACrVpHt7CVxRWXFqYqcVbgeGijT9p8we6qrWa4te22Pw4aSKNedHsfYKuMzYR8aDkp2N1j",
  "key36": "kxHavC7RhBPHyfwXDuRjfLjnkbhjYAxheLYgzpLfNERSDCCZUArCRHGEn6vRYDTgE27GnE3LcEcijS4VEnnx8dK"
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
