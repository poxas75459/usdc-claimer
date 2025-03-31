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
    "52obvWHm4XReSYZyw4apqZVX9RLfstZ9usXAegKbb2aco3vyNKeNBf2DU4pxUs5qc7dm3o1ZYeXTqcswfbi7BtiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPZ8e2c4VGHKfJ5ruSCEvENwFBMkyWZgugKhkJ54EWrfePJmKBFu1vrwDQET5jDMZTMov6KSsfw1u3SzrGb6odU",
  "key1": "5w1Jx8XAyL4Lpr4Hs2sMMEcTcR86U13jXeKDm6VzWfHD8FTjer3PfvPVoqiyU4ivD39pVk53s9AQR3bucZ1t5TuY",
  "key2": "2pJLsmzeZxYxzZSh6kRvSeBAXy6B9FBPxt4wNcsgAgqnfesT6tUbnML3QyyQrqtcpjQnFX7TTPMXQ4xBZYYKHUhD",
  "key3": "3Q5Dodnh6wU8ByfrVgDpYhHxa4aoBGWZL36KC2fgT5R8yE6sC3UeY9dwn9nuUY2VxiUHmCjtGZ4cFSej2qV1jb3x",
  "key4": "5NFoi9gUeKsGbHyCBW8AajMkHjbRNrdi1UftEyeP1GVFTGUQvxgQKgN7zNftnFhjc5f7iAbn4KTHE97hXUGjBvfY",
  "key5": "5uYE3MpiGXPG9xxnjM3EF93E3DjVAwzNN6xUVhBWV4qN1un7X7DkyEaUoMia8Xum7N9wPBL9b4S5it8CQCK7M6Zq",
  "key6": "4ohaiNdUYpdQwN52VLhUxDBiBvZanArbmVC9eRDYAoCo9dbtYfYoiQTCm5qK6CEBxYo9iPozYdeAnejDXYtpLCDS",
  "key7": "3wMDHHfB4nm8qoHseiSgUr11W7xVmUHEmsVbAbHeYfHCbU9NW3NXMUyS6xLnQR4xqGMDrony23gNq1kXfuzHLDxJ",
  "key8": "51BAGLPrA6h7g7nTJXQaNxoBdx3XKn9TtrbRCiZv3okS3XiU9w8YWrwNNDLCtVxhfAeRmRorfPRygVoxSYkroJpK",
  "key9": "4Viz1c3RwQEM8bBaXGeFTrtdPC4eCL14737LCNKVrFPSuERvJtCcnqhtDBHwK386D4KTqtYAwyeT6PykbPwSdmPi",
  "key10": "215NkrFXuzWTcBG1EyMMjbAsuHgprb3ZGwTSM6Uyf8RUeJHxou1RSpV9a878JQpXjXJhzQTZWSqfLmpcRin1P7Nm",
  "key11": "5gcTKsY9i7pMWdfycYeS6mGKe6i2mM9F9vRj9zQyEwAJGCZ5DJAfxyjrufEMMCLR7EKbZxacnZmr85uFYdyMzdjc",
  "key12": "3oaS38wG7SC25T3qekr5xDYhEhzMadj1XKvW1N5xqzhuKMfehSGUKs3H9CFWM65hSxx2hiKvxSnapXDL1YJ9rs5f",
  "key13": "2yZm73k26o6DABzdGWEoXj28xZu761Waksx8Bf91pnh1UPk3gP3fW9eBcSxyZFDfVgJvWPgo6aEpkD6TkpYSMmg7",
  "key14": "3WEH2hfMgbXecv7ftwBXDhrLgn74XWexzBKS22QLVpHhHM8qY42BUiza9aZydJ1WRXneLEKJodv82ux173xoP2yK",
  "key15": "2U62rsUvVMhbQKqBRJJqz6oHk6RUB9Zg8eZBp35oMcWKEWngSDvDoQgbEe3DF8LAKdVSMuATRepNv5cr4bKmXMWT",
  "key16": "iGD1CNb86pW4B5VHBnikbLPwMZ2rsifRkJsTCabWM5qvJJc1J3BXcVDwBJMZ1FjjRb2w8r3vDKJ9GMTUfRoiRY4",
  "key17": "3kiDzXtde72fP29VrpWN7SjaHY2iEHBRtvsSfm2rcxtqZKZLRscLWRJy1LH513cwhdcSc31SjB2QTFMpNFWgzMjm",
  "key18": "2LKVGMPkhLGFPrUYRVhaSMktqUnNogoCGXayekDR2kA8bBkEdZnbMw34CbMU5xmAMAvZbUj6DAPzXPeEZBtb2Jw",
  "key19": "3kxVMrSC4vjp2VZJfvm18uDLFtnVutUuiqaeLavU8tS9Sd9BuahQWzWohJYDujYzqK9THJSuapJPctSjBa84Dt9P",
  "key20": "2ejwh21YHiqLdUEGfFdihbJRAB456md3PaQTwJvyG8XQLngv79RUNgp3xJhjqopFWrVjjSKeSQ86UkKKC22uRgTe",
  "key21": "2VqHLRUNtBb2SH2jB3CauePEsxKM26iEsVGmqH5zogs4YBR8jDPW61NcvL3RKudfkYmtudLAkNnz6b7btb9x37yc",
  "key22": "4GgErq2WzXmLqDFhZe2FzwfehTZwDYKiFm1TeCGb9y3KAUbBVvn2GdpRtpGMbyBbV69AQRwHe5yVAk4t2Tfw5PLW",
  "key23": "38MRMMErZkg6D7SzwznvsNpSCRmf9axQtVaAwDReoEfrV52EvyxQvQDVPPHcTHK9pmFTZKnxHezn3dijjpaMSuzb",
  "key24": "3k8rJrmFjtdr9ybBUkenCaLkVZ85izZhbVjahVBTJypwxPnjkt4ugLCt5JELXG4L2SSmKeWgHwjbm1agTPK7XhmT",
  "key25": "3Dp7rWFa5Mn5A72C9s7FTsnG76r2ZvXfht1VeN9Va2aYYWdo7u3PTDZd6jpL45vd21XRtNo11Lj47mHyffB2PD3E",
  "key26": "N5WvJRLCmHKnShHGJ4QZAntCrARfmq3UH6KTFgpCWuktFrGkXAsqmV4F3jYGKYeMp4ksiQVFwcPSjiXxG5GCL2d",
  "key27": "9FTT4c32AHkvZvRnBnvCDk7Z8aiBMXQY9ZUkQqPB8hBaz1b51YUStQ7JmELbU33aN1Lp7migZY1xGzPkuEKDuJX",
  "key28": "3SjDA8NZcZMikQWtFYrD7WvxsSsh3gmD7t6ysG6kULrtfX5arsaRcRiGzKGSQnmR3QCifdQ3bjRyWKcLmnTC8x3A",
  "key29": "y8Y5q6Zh25x311S8nNKky87WoBtQaTSbdgz835y1NGQSs7rDEAqiAUJ7NEXh1Ngp5AGgcsDHgWWzXzUNb2riaLu",
  "key30": "4GjYA3z9coFivJQxvt7FkyBgH6pwP6NiMawp1Ws4CSF7oHuoGrw58NJ1PNVdmVvug9HKLYVw2Q2kA19SZw24h2n9",
  "key31": "4exuATmoazz62oNGpc3vxS6LS7sowQYRKwTmUVTTE9CY8jSwDuW5msqUrtZJy6aHyWB3yT7gG3FnAFierpXgmeqY",
  "key32": "52HsH9VsNoFCtV5zjr8yppHEd8rwNHWMRAq7FxmXYFerU1bSHEhUAwfmT4jWprrzuceKCm3jHHwLPwj6SwW8UN2C",
  "key33": "3xqUTdJyATpaqqWNDepYJkkfgU3YL8mr8E1QK1PbfwMuDHGUcycNZuxxEttSKdnUMY4E9mwwFW3DmfW8KucfA1bW",
  "key34": "3NaAJwqaK9vjKSiq3Xet282RSEEQ2SJrzRxXJJkB6SRP187MiWqE7Ag4krdsV3vJBpzSJGFxAcjgz1Z4GPTRABAm",
  "key35": "5KoPKZtPBrxaJ4Q7kg3QD9MsDF9b2ek56YGGA1ig7Vp7dYNSJ4H2nYf4jCa8kzP4DLQ7azR5JJj53sBq7mQMMX3W",
  "key36": "4KVZ7vxdT6amBsXyCeqxvy1LuQDGdL5BAgnEArnMtqfbQ5zMEHiJp8ppvAgo1uBPumHJXx85fd5we51kHeLaFsxs",
  "key37": "bw4oDbAvm8ZMVjN24heQmKPKtVmMJYxPJPQwfB5YGnLx9fEv9JiftgwwCW3zZgoSeMjwPNK9x8aM2DBiuey2Zc6",
  "key38": "9QZ7beVKsPxNUquxpvm1G86LfEUqcxQZb2GrkrjFrAADwFqKV8KauRpZjPf9HtYKB1HUh8BPHSE53AkqBWUnyBt",
  "key39": "Ld3RnCmSFAc5E5PQqqeaZPTBof1Lc8f82RtixXJG2uVezxeCYAmeJA8wgyYVfgemFgsiDPPBiv4bxNmaMEFvy1d",
  "key40": "3Xg8LXMyyRcFTsL8cDFGLBhjEnpYs3ZVngo7YsTYkPtX29frUSEh6UYrvi1EUGLoUN31qipyGrUY9amuiNgpXxyx"
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
