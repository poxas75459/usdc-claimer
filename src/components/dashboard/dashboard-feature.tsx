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
    "2tieA5GtH7VejP6AVpefD71Dm7NJkPQrZau4uUFUyxTGem4Fa1ERY6ZBkBHYYsvHvbYbh6BvkCRr68aBJJPGHLKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPvHEynhZQabAQZPRj7KR7YTHsoAdYCMqKTZxDXxMgWVcxQTvzXAQAMCEsWxWJRxYGH82LRW3ibKhm8Hy9Pn1nP",
  "key1": "5bN9ZuFvqLhoUZfBSTrPefF28Wkj9aUXQfqxxC1cEXvL7Anado2iCALdvGmQSTXpSSY17z5FzkF5dHsvMgk1Bykj",
  "key2": "ebkPkEe57rkb9nP8SGG3pKzSp3TasQytfnsMGbpXSauGr4Bx4ctqWXHyzNMkxhWiduh8Fo1Yv7BmHrDStVsnqf6",
  "key3": "2m3hvHZYBUdzzF8F8SXRRGrPQXuAsgHPJwxigsXRkoWfyHkbDemu2QZavhuxk2QATGJZPWxMvG3BbYL5tfPur7Ci",
  "key4": "tMD1PHmLmKY9vbsxHdftT5MM6WKPiZ2hB7DRDWmMbX1esynPfdT72hwKzE3RoWWdMVyiRoRvnkPmJhCE5TdCWF6",
  "key5": "3vHedj3afTbxvjVEeRD6jRVpPiVgHCmxCswVKZLDcaaepU8ydCG8SPS2kWPj1LBHna8JZSxiVCWnY2hmvKMuej9S",
  "key6": "483cq9repshd4vjfdNcrxutwLXDePeeaeAA3nWzcDiEUNv6PqdjdHr18UP17p21TnvPM1U6J4MMohDaxP3g3oNt5",
  "key7": "42MBR7vQjfGYvkqoZrvHz8uAH9P5rhTDr2ZSahgNbNA5JuJQkTVABFydWwhfbrvsDENi8EGYEotnAHFZvJ3Hpfz9",
  "key8": "x5R52RvpDU15zHh6LV1sDzAnj9uFH5fNpxceqA2zkqcKWvLnGX8CbWv6PWa2TW5gvSqt54NsGdtJ8AkVza8fsgC",
  "key9": "5hzeASuwJnJvavuFBi6LRGLhc2S6YGnDtoYubsJQbrG6zPA4VbJXd45CL8MpH5Ea7PsVcrrQgfpMQ5dTxxDQ3beE",
  "key10": "X1r1ZnXVebQA7CUwFoTMCThYMxdyjsHRQGeVqzdeqUiwotdcKSmu2nA8RkryYmHqLGgD2agnun4QhEyQ7e79fLn",
  "key11": "5NEnjbNSFRxfokSYmCt7oEd6ay96F8dCKyFSwPN1BNnG5XMrpbrK9CXArE3fjsspuSrBQT75t9bzXUk2nGZgmtjL",
  "key12": "2XF9PhWZ6gnwFfprcBq4y2mQZoJD1pQF3Lvv2e6bSqBFb3aCVbrLVo5jNUoCZVUkUwhR7FroZHuA5ebKEKahyfSF",
  "key13": "4TPdqZouf3Ss7cutEjTdaP6DTARHoJaNKmpuKttFHUb26PstwQng8sgT39fDr51CmgKqs5wkxLAURtTRkpSXowEs",
  "key14": "2B92i1gLopq8AeeQ73U8VEGvYfjRn641FVMaBkFZZf9mzcjkq7C82VGxakiBP15XbYyjfSZ48aAf7NYh8Km6WZvw",
  "key15": "4UnXPKRs2tvFH8xjfpmqS8JajUktCppFrZrSEStFXi4SbdHJgUnxPLGNJBWnaMuEB4iWidfNzwMns5p5xFWyADxY",
  "key16": "3DVazsTfwtUeU9ywtKsz6xzc2URt4zLggvU8CkchC9NY7VzkYYpimLScFKpzUC9XRk332EZ1wqGGJ9xfVeNDzbuv",
  "key17": "2zpMVdkVSjv9vVpk51RtDbPzHZZrJ5wHodqYKzjVSQo6QH4cuohLdYdj3PKtMVHa3J9ufCPEBbtdh1ebPUhBTHD9",
  "key18": "3dRoT6ddeP8WAvGhrLFsMnUJ8eTjgZMvnravC31J4HLHfze4hKuyo3tz1zy9m78qb3STWB5sLw3SMKamJgQt1xhb",
  "key19": "rkeEj5dTuuoC5Zsqx9QCQRGMsnhPuaVtPdpCnxsuCMWtUniZ2tVUMhejotVPBbVVtjBvxGFVvDVhd1M71vGUG4y",
  "key20": "65y6PqjvUQ25Aj54ocPUh3tCk1jSCQDm65NLJdGv5uTz3HgFvn1piQV3pNDQwVMhVzjcJufweamcY7W4Ya8eYSXG",
  "key21": "25nospW5XrtN6ZaLXT91NqT4kpVVp7XttPGB8aeLr8RukztckPurwqsJ78bNbgPzcBzLiUmRMwQBgzr817SeLvPE",
  "key22": "47u9e8Ucz6rhUFjA52TraGPDeq1KwB9ryLQ2fc7CdWPmR4xM6JZMqXLw1SQJkfRbSHacfELTHPbGfSHtPRy8gs3T",
  "key23": "5d6KJj2phBBH1eNK5xY37whgp925ycAJoLUCiQmoozoBxzJ5GbPAifPtiBkehFUAJX8waTmGDrEqEGe6Zvbz4mKx",
  "key24": "2wJQDNpqr5iktjfcgTcMX16WKCo54tG12y485YALmcvXYUkbxa1QPAQixjAoPq5XqxZaEJX3GZ3iq43iW7HLFfdp",
  "key25": "xN2DgVZoaHkE6SZZjpafQ9NqMTsbH7TmLtHPXR3SAvo4vx8D43VNWjQmiFxcGfx2BpFb5V23D59HJboGEi2PGxJ",
  "key26": "58CqRBD2bMMsTL1gkBhLebbPWvvQb6GLcLEctFUeYgoRMbKJL9E41WiTaKSN5X3AQ4UbFTKgPgogvVHdyjk3KhYt",
  "key27": "2pdnoj8Vt9YobuXSX1WYNvbf8z21QtKzqnUt2p9jxFmzDokbEN8xh7Tiu2ZsnvKGn8gr78PMo1oGGVNdRNKp1VDT",
  "key28": "5dc3TfafuYaXhXyNMS5pNAxNYpPebmCxqfVGTPBtfA7Vzgi2xPA9FfvnyPyaAogKPM9bt35kvvDwHiKk9PN6C16y",
  "key29": "4TkkETN5U9JpXBYs9e7hAZDXSvVqsNi4mtuFhNBrqdmCfR2N4NLMSEvMMfn1V6pH7kYktCa65Vs281kVV2sgSZ5k",
  "key30": "3qWDaQGCEgXjt7P4di6fuQZ9Xv6aoCUMiCcWP4N5P1CgCaauJwL7mPx679y7RCC7ZCXFAcacaKzJe7AahD5xieoE",
  "key31": "3ThHSsry86tGqVwCmq7qMhUGD77fYhsPPdds93jNymWBaLqKW4ywKmusN1aU4GnFN6ZdyBVUQAr7BD2XTt825Q5d",
  "key32": "wcYyVtE5YChrspeGfHHyYgaspcuczoMsYxJKpdSBR5pv2ThCeZHn51H5732Cu5BktagWEvv249v6dupmanCGJQ5",
  "key33": "WKkKBhe6Ven77KknEkrFVTbFydGSv9ThAsvxwhcKGJRYtu2wkD1ovSnqwYKjPyFvhsnm2MidKQtEjhL7d6K7fHv",
  "key34": "5ceJpENqMYJ3FpKSvtjJdNfukVGbV9TFWT7pHE6DogXTh9ZEUipauELonNEgqy67BW2YejBt6fgiyfb3PP5KdG49",
  "key35": "5kA7LQVBQoHb3Rx9SwKJqjDiLKH2SN6vZb1qgp3Pix1yJnEZJLi5BuCJCh9dwxGLKBubgQQb1zshSYmdimXsqSqd",
  "key36": "3ygKwrDGZ88u6QHNby1t7UNPRc1zTfywJRvWh9xNZvrFhpgrusxJ4ynceFuCePF5BgyP7uBcn7jGwJQeKFJXS3Va",
  "key37": "3MpwyW8Twi6ADkiLsf3sqxWvJSmqSmRgWEuBdKZpN9cVYwrBsP33JkCsbFLpc4CHAfeagbcj1Grvzakq9idChqhF",
  "key38": "4gPkbAok6KN1FRn9EA8EyHCSErzX6zj4Nc3jtUES8HNtMQexzNeN7LQgso2sT4WQMeNdAvdaoMsTLEMd3uvd75nn",
  "key39": "5ki4KP8qxVaRG4Dy7AWihodMf4kNvGersQ1QkA9ShBA9hpEbkL1uB34kgehSpVq9oJYTcVj2pojsYyUkvrnm95ow",
  "key40": "3Uy3uq99GxaeMcdaAAmT1Dw1JBV9ETGe6TvaWa9wsGdECan5NJQGMDr7aqEdnuwA6pMbaqmsoXciSeu2mj1x8f5w",
  "key41": "2K7jLKgpRaU882Y4c2eGcXaujHJYjx3Ewjh2tpLcrMbyRq1Uqr8y1yHh8suDdXog1zcUFCB9RPcdc5VVVWWggMQG",
  "key42": "5yewrVdpGYn9wYVZrn8G8pFDMFKBLfgfYAKPaq3i1p3MPTJA7eC4QVAaqmiatWPt75Myc5dDeCYmK21qtQXYCJzy",
  "key43": "2wjEkeLx9R6sV9Uv2zqSvqDPGj3b8Vk6W3vW1rKvgJUjVkTujUaeLdaTofqS4prN1WLxPJWajyPYfhJVAfKZPCTQ",
  "key44": "47aHHj2ucDsfFXYFeye8aKWjgGGG3d2dodMPeqaA6PALrCxFyy7hqR32irZgcFpgDcQTFKrKc7snuGZwdZt68MEG"
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
