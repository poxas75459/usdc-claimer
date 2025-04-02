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
    "5MP6DBBj2sBwGvW1si4QTNubttjanv5XnGtTmwkTEaMyX1gNCwYrUwV5DqByqE2v4p3QDbZ9Sn6dLD4WBTzxLHRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heypiveV18mJMkd9DxRHBRc78zZLzn7hadsosfhKef8kd7sMCZ4gcCqCtm6cqKynUnBFCvbF8JFyYyTsNV1qGmC",
  "key1": "5jDiEtLCgp8WTsfwC5L97jvzJWXhupy4ijo3KasgCySPZu116gBU2i33Z9xs8pSRe9zAJwwntV7nDkHrDFLgKWLF",
  "key2": "3VwfAu2zPvwK7494fVzsHsdm5qhRKzmvmHAnKSzwBFAbdgfVyxixXR9PKyhzHPrA5uAfQzwvQsAbePFEq3xEeF8m",
  "key3": "4acjLEQmifomb1CF42jsFrFzodkjM9oCM4yrRCn7qCNHUqcvwUs4iKGtaxdqnX2TPv8jaquHusDEnHoe5HKK6XMa",
  "key4": "3pqaQ6o51nssLcsC77FP4U2wsJtYonuy9AnACJD1ufE8MrBQ75gvmPU7iDd5bduQjDNm9kC1mQF4gkYw3Afn6Vfe",
  "key5": "3Lti5RhwXf7sifGW9brocadpNMbe5r8GQuy9AeHRe9tWq9mvwxcoMye4dgB5Ji8Mp54T7UHDbBYTtvkvzzSqyGvM",
  "key6": "3Kg9NpJBQgDFFBByy195umqajiLBHp19MMTQooJyQ49SmZCG6vUpNvYMvtDFJmDfJrxNExoLCXuWqMnincwVri2q",
  "key7": "67fQWDt3XpxPLfR1HYoRncrmXaPJxAuUPWxT2NWNobjDpYYCnZvDoS5RzEhRT2QUFb8RMN5LoFQ7QdQV8wcaqFwh",
  "key8": "537mr8WxjPvgwxYmwZRGFXLjcDH7UUHHvHaVHv3YDGTtd7SyQjQXWHPHeD1Gd21BHDUcXZSCzWDkLsnBSMpLjtCN",
  "key9": "2HW3N5p7b62HgRKybpuAAebbMQzx64WfJssJZPe1ktFUMJ1p8FsjLeWZSy34TnSezgwchPxKmMaDv1SCY1TR5yVd",
  "key10": "4vborAh4st5nZuR2KfNQbMbQzZjUmDJXSFrejnXw6omqMhs5ixdjfBXDFpQiZm3pitGqQHYybYHipry3YY3EELC2",
  "key11": "5jChKDiiYxCVodAS8xHHhRV2FW54AN36nD5xucTMmGcPF7uhqToiYNkx3rBskQjMGZ2qf9sdsAs7FReSZmSKvY13",
  "key12": "3WiwiYVzYt74Y2FMRW4z83MeHA91B2fcScA3AejYThew8rpL8QmpPZWJkwNW5tt1MtJNSLwnS7T4VWnP1yEeJMGW",
  "key13": "4effbUKsASVeeayh79Bbj3QML81pFx2r6JCQPfRrTP8jRTyssWsSqb6mLDdz4seKXaq7yKXwhuBG8HARPbWqm3nj",
  "key14": "qGYMuwgWCtt4SFnyKQC6nEmuGhEezu5qCwhV97pwFB5Qxk7Fz9Sm73ehE3V5fpRqcehZTa4J3XriffyNDUytDvm",
  "key15": "5yYyRFdCEo4pcpaRNmV6aMAg7mdm4VM99KDdBywNBsgr4U5SE1Bxxg3sAWzC5Ws6K6BtALwW7Y9J4uWYjANv9HPS",
  "key16": "3SsigFQDbGWt7F5Au8XQTGix46o1bHdnPmeH3UiJhfXPBbT3ghe8YL8XkjeZFFEWuK5dFUKvcvdhBQx4FJ1i7o2B",
  "key17": "3UxB5q1H3VfFAonbYxWtPRXrTeThRLFmLXMXFto2EwHo32LLHaZqLyiVYE4oFpYp1YP1gE3ehAFby4ZDKgpLtafT",
  "key18": "wi4se3mA4Vj3dNo987hSrnkxycPmTpUB7msdS8uUr9hRBmg7etnCUePAxEzQT1Vz7uAo7tZKgKqaQQmPMSntwTQ",
  "key19": "4SPT935Nac3LqSnYJvYNDiXnw4pZnYeMzJsh8EFCAcAjPsPi8VEodjKJ1ecYZLvVj9GzEssChERwgsgnF9nZ35cP",
  "key20": "e7hMhxU7E42pLUiUqbcHPPJrbUXEbdMRgVEMyt1YV4jpgxh8a8nGBK1WAHY5tYFuixMyDmyCqK1zEBsCCrAWiLW",
  "key21": "6hFFFVhmLP8vG6rchheKQrwBAnvPH59Amox8ZUtqWJpKeQrmEJfY1GAvT7uqVdzQ6xiSDMfd4Qa9umsojPZ6i2X",
  "key22": "5mphEXXXiz8R81wy1kvMh5AhK2THFv3eZ93capP84F5jYq3H118oDGbyRRKms7JbSgJkCk26poJ7wvRvbdh288z8",
  "key23": "4eJa7oCb9NB5giWfmwaxf81HXq9pZUaKXwg9AbJRvZrozBhyjxHTozAmSMSADsg4oBSt25ufzgMvHTZRWXsFHsn6",
  "key24": "3X6YEkkNjWJWhaZehPMi3YxydJn91wM2xguxsuxT89H3SoavCZ67JP4PBjCKMty5x9eXdHCmpi1NAL4Y9weZEosz",
  "key25": "2SCH99wYmExK8iHdtfFWtQQGYwAebGNwnNyRdq8sDQ4p9a9E8m2c36NjJnu12osyY1U7EHonWsY97iUSXTo3doyd",
  "key26": "4UkNdjrCcJ3UVEnDCRmuWMitLukhcLDyNu6npXgxRMx28dAv7CsXto5CxPcMpSmoS8pD2uVMDrzzAwBtiD2LTVKw",
  "key27": "4chFVBzSoVP882Dtqa7pvD3a9jXpKWnpQEPTD1VoWnz3BucDmoHuV7YEjZVLhCeFRLevTEFCUzS9FEJ7dXvgUurk",
  "key28": "3vwdzSpAnSCqMFMZSDQjhXR26muSMFaEVwVUP2W8xGz31gJ57xrSyNoWkVrxKsDsmsSkfbZcaWjYxiXFzxiTJ5jz",
  "key29": "2qk3M7MGZSTCm3V51fnwT7A6jPorfWgS6xUgoWt4g7hjkPHWUFWY6LEFqzUMeLzy9xR2phvpN6CVfkNKBY6mbmVZ",
  "key30": "QADs87aXzgxm2RCFA87g34ZtTDd8LKPhfCbsnNMKuM97Fk3sZ17Me359JYRKiusheE9zgvy4vUXMAqbm2BdG6aH",
  "key31": "5ieVAZ8bBU7DzCyNQfX5qPLWZhGLWQfDvoF8g5m4FUuV6YQTAjKtAx3L84QSLJw85dL1H6knnFvSRX7C9oLwv3Fg",
  "key32": "5G7WtTdmJ233JbXF44r11BA6RfJgchSRWe9PwxaoDAHrDY4zv8cRxfWpw7xT1g6xDV5RSo6AprY8Rz8mQzE8ZeCE",
  "key33": "37REFipHXr3Gjgvejs1An3DdiurPSFdC9BizCmXyqAzrdZJtRofBytZVKVjF8Kbo9Re6R8DWvrjS7tzLE1ZJA5nr",
  "key34": "2cpsZd8Cw6AN1PFeezVGqUeesjyghs9JpgcDAwqjUtJrspUaFMuHp1BxP3zLF1uBzqN36KCz4GRQNUVJDKNGJTky",
  "key35": "4t41NkDx4gCEiD8ERhtJKnhFR6FVP2vuoe2NGfVEcArtyz6AVQuQzMGB6j9sVXQ4dtsbu93N5UM6jo2fc7sY81wC",
  "key36": "2L2CEL3x4gb7jCwTU84wM1DHuo1CGEQVuMJ7z3kSGWR6RKTaRwkaSEMSCnMPdyymYwa3jDmmNXNfFw2TRcJy5v1g",
  "key37": "GRUYJ3GrACUwLvYZzNA6V9NXs2toAXo2bNwhvxV9rVu2NCc2kpzrNDYVcH8FcjNrrVvajs5ABrghf9o5xkF6BSD",
  "key38": "2MZD54AWRkL3EkVrmuLTHLkvePkTLy3zgfvCkVfwthdyFPBytrwTnKoaBAuPFphrZJcjGGKZDMK3qgVchKUThsxd",
  "key39": "5p3J12nQwbGruQAu24p9KYPAd5xeRa5AVjxsHfVh4mqXvVCpvwopfpgWiHfCfS1hRAgEGq2UPREAYesrhNUHrWaY",
  "key40": "7cs4dwDsvNi9avu1Hi6hTLogDNBDEccYtJRv2sMKKjtAz3o5nEssfhEgYKgWvYMTDFfy3YMrCW4VmRWPjWSwAZ8",
  "key41": "3oeTzzX4gNrpYa3CfJkHaYF43N1sSMNNYtmQR45xXD7fZWtuFMAmMwNMUaJdy5ewBMw5RhAUuqLVwA2ZUoCWjPZW",
  "key42": "3agCeFXBkRCxWhysP2NbD2sDP89PRQnrQggGefWUneziqT43XhEf4FuYnkwAcUYi2iLPx97oc3gLibwvMA9NByN5",
  "key43": "c9j176gFs5NNFmeEnWin5aPfx4gioiQ59cTbUVtk3Y3CSot2Ycf9tPcS6pLgAbru7k85GsnjbDXsmTYCGRCT4NS",
  "key44": "2DrFaK85gMqt45WVZgqvqWKhp5BG2JfNL5mFDgRpgaXcEEL3zrjFbdm2UtSknhLgBkRskwZNBU8rM127vBTGP4Kc",
  "key45": "yWt4usMxhzq6Y91vq74cwvncu6kUbkohQozAef1qawKASHiMnM7Y1yFTP9uedPhXJNsDV7NaGBokb8ZqrtvVTsZ"
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
