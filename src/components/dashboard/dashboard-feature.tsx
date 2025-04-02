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
    "2ymaKwgkA2zDiYczqF5MccfvnMk7hxL7L7QciMj4vjZT3dU4LsEUUEkVLMsQ9M6gEFUp76XVcfyorNvKPy5RvR2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tUBoVk3r4FSs5FNYgzQtJwyesXpx2FS8T4B96RgM8DFBVjCnZ7oxFyX5qKbzjq85dd1sKrQCyqrAsn1SDwGkTPv",
  "key1": "v8ABV3jT1ZAeFx6pe6KyFLwzKciCfPAZXKZaG9fdgjZ8devMpj4mnLVSX6oYZZAUhf868faRBDSMjNEgyoWKQJo",
  "key2": "2Co85X6DjYtrjsfgy2wfnPdDu1QVxKjWUoWLbFqh3DEGocJyGBiTyjU6kjatCP9xsMU2kmSFYHxBHjtZnLCDUqcQ",
  "key3": "2xzwUFAAAF2pbELoLZ5TMuR6u34Ftpy9yyESqLJaU9KJCMp9nuFshdBV1EV4HQbwedQen1KybiMWLNirHwvJvpfi",
  "key4": "4yS9odpcDVqjGz6zoFsSQJ6dVygohiRgDcaofZhH32NSqwwskN9qBFjRthyo4QfHBFm25CKAHn4tJsYLhkaC7yx2",
  "key5": "21LyFM5yXm3HAaGgsHJKuzAzAKsuKqKmwz2FyyxzaZr6upZDqGaLikuNZ5opRT3GDMCdb6rgMbFyhULpYFpbnTeY",
  "key6": "3JfVzveF8N9QSZwQg8JYTjvfAcENp2nC7QKCBjhKModGpXsjuBRQXLxZT57LpHWbZyNJiXhyUcaLgm2oxbnse9zx",
  "key7": "zTKhKr6ZaN95TiDPdtdBHzszeKUbozeP1KB7coGFU1TeYKMNQkyFMbCXwL5E5z4ug4FRBzU5jKCvDzWrMLJaJ2D",
  "key8": "Ztr8UStvCVyCCdEqGaJAEAhra2i2uBshPLcaJaP7k16TF6PtZWV77Y8eGuJJjWeigfAFqYDE6msqQxEQD8gqDhX",
  "key9": "63Tyq8K3cSjYPYPj48L8iFLHexd5N72NdqWuYhanEDk3LAaGCS4oyHRFtxdybj8NwGKoMYmZAQqH1UGEZRSyoim9",
  "key10": "2qaH15KSkdiFXCtkpxJKBP7iPKtHhfFWrdeY2c2Y7sBzKh6EmmJGKUsbAyaL3idZjHHm24jDTxHqAPUug9dL33b9",
  "key11": "2S3hrp7CdjEvEKoVPGdeUV7TShcvZayrm2jQr24rkmJtksGwQrxeZaJGgB5BKNYSX7K2dZyaTRjuJB384t453VfF",
  "key12": "5dVvBuTnjrUankXGdEPRpJNXb35wLGqMGpskeGpnBYKpypo3ehbVdTqcqq4cKmf5FraST2M4A6sfNZTyzLDXGKC4",
  "key13": "2mK2TuwSSanQQZ71uokKybXQjk9BdCSFHEj1LR2AtZiv1VfCDqTg6Li4RvY61g4g6yYP8yR81nj94LvHb437cjwd",
  "key14": "622JWA17iGnAJS9dJ3juBMDMwbNMt6VooKE9jmSZSvd68EQGj5zZj2kbHPiNu7xrQRNqy2aPPmHLBnfB38b2MBYp",
  "key15": "5zqoZAGBCLDkeezvDsf4UkSx1tjzmyZ1a51GecD6UpAHsS17srdBSGKNsimP3yVuzFRdNiy41uSDQXYBpsTnktr2",
  "key16": "5CsmTYdRashyTTbVeJvWb4xrysiuYwMgacvAE7DAEJwfem54CGWGyZQLva1ZJXJfR2Gp5QoWkFjSMag3NeEnCPF",
  "key17": "54tQfDJa3vDLzFigyJ43PpXVRw446sSVgy5y2yvpgDwUKWNRzXuxtb5tZEKwwMPjQiMNzEuynWKmqafH8UU9JYm1",
  "key18": "58e7ESiEEX7nqVM1A3E6AeTZLvQ2pD8uEBSNu2Miw8WWGB122P84ZtmAnGHSXowPL6DcN7ZgvzbyLStBWK2xsSCk",
  "key19": "2M7yivxarvdQfFwwTpyXHAkSHqGZt2fJFcRVw8YCM2q3jKfnp3xtrMDKjgAcWjFyc8viakpcrhLGQEoj7jQ6gui3",
  "key20": "3AyhyBTPAtCqwxUoj5YovEKupQej61Qu9fHtCTjKwb44Gt667z2ddrvtcbTgBhcTwEbZq4PEjoAr2RvFhUozCJKf",
  "key21": "3fVXjSuNJsguQ78cisBKd7BksRP4S15HpxbLiKNfCq12nh7WpoT7griDzbHD1xVD7ETH1ZCPnvZayp2CehWFwfPz",
  "key22": "2U39CXGxohHed5PmMZmH3UR3t5BLJ1tLLPvbqXeNqNGfoDsZPMir2FRvE97xxeY3HENpja7Hc9k3NECizj51gK2b",
  "key23": "2cv6cmEQ8ahKEuazgVXSxvhJ6rhd6KkoazgDkKNBm5LrA1MZG2jnwG1kh4oM2gY4AZqkLwsLC5kKFDdrWY1j4wjs",
  "key24": "3YUgzgh3Pa313RKcLZqE6Y1JxXhT3JCe1CZA7cZXeWJCwjFfRBkHiQCUUPSfc1eT8Zc2n4gesxSMHNHXLrtMbkAQ",
  "key25": "63wcyo5GzRk5B1kCHWyUvi4LFSxLRdr7A919CBPLf3pi1LoVUXYpeLk9yW456KLx6HKSebMKZoQ8zPyppzFAtYNX",
  "key26": "38jCFt75d7p3NPaiuYX7SZxiF3XBWczf6nB43jkvsncrFWrZy6g4yxS7nLC5j8siLqXSJPqKdyeYXHqDp4PE5RxM",
  "key27": "3wozAivHSJcFqGJ6zYmooyXuSHwPRWM1gW1ziqA2Q1RJVgVLLqCofrWq3HdThgnLtczDBfgFvxE4H9mkXiVUyEd3",
  "key28": "2EWmbHhhByFxnHwqEUDHQnUfWLRBtJGokkuKh1HrfFYyw2LXAsBAwvcn3rw1E3PFu1H1vrmYNxnJBhWNxviWXjaa",
  "key29": "3WuSraVqTE8CgjBvamUHLhnrc7xR7jMNM7ycCkm1bg48bxMMvCgvBENscp8WnWCtqrrSwJc6Bcn6khPHGktAuDep",
  "key30": "4HvyPk8RvHKTGMnvknvf7j1pZ467QJCQhmiiCx9151pfEHE7xohFUBk74MqDRNrbE89cruFjsSbGzhZpJLbrqNSj",
  "key31": "3qXfBJUzPhAFEtsHRzi1nCr3cLcfVsNdPK71xqzagyf3X5GxJBEU5XY4iS94mUb4Bdi2LyTM9rZysxFoz82pjvG8",
  "key32": "2LT3GWgFPDmCj492SutjrUhW5vzstNYr8tZtJUQoPCgM6whJR99pbaxQmMVbY7DJLFPooEe43nNBuKudNWfdpymY",
  "key33": "4Jo7vzqN3p63yWdNHumQz8UeWkTbEMuhEur9nYtAxHZJLAzAr5N4kaRV9iN6seDDDeWP7bfgoTbZfv2SEh8khjkB",
  "key34": "3qSh34nWtetX2WZ9cdaZeURi3Ny8SXrzYZKdzdJeh9AuNRQV3ZUBLycLYkkxeRXBqdH3U24J4b1PPQ7z2xX8PrMq",
  "key35": "deSKYor5QNe6onTeKJEzT67wmQf7jbU13XWrfraZxV3cVd129mkfbgvfatDugwHhdKKf53irQPRQQ6p2wJ1Jz6L",
  "key36": "5DG362axDsb28t7RC1UMWCKG3tjQ1xDiW4B9aCMuNFpUemHPyfvAs6X3WtJiYzw7FJE9vQMuZpwYbkLZ4k9NhNqR",
  "key37": "35C8o4LK2BBQqRyrKXUyhPW1CeQUby8vYjShnujSZ44n8yiu7xvyZxZWPcVzQ2FSWEZX5pZjfcGQapkjsXKXBvPS",
  "key38": "3kXjFHHu8jEcJWzGbznbPEG2yRg9kLevk9HAmNcqpmwQVZosrV7E1XPoyzY2wsnEsTTDrwpR5TVBvZCfACAqruEt",
  "key39": "3aJNfoNo2Rca16oP76w9j42fU6cboXVpywY53dne7zsu4Mtsikc43CLe7gVxsBHDEYCVoTPwYidbpqShKwLRpK86",
  "key40": "3JodGhxpYxZ63M3CeRa2eDQmj1cXjN8BhKBgvzFcmQnh937W7MSPMYtEBh3Rw2U3Cm4CdXgRAiuSbMwWg1tWDSJB",
  "key41": "3CvSNzMQEbP1jCZdtFE2QqiF63gSzRMFL7Djgp8ZyjaHKH1fNxMSWwmVvGziem77PYhQBqZbgsf7EyRU9c9Y2CjB"
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
