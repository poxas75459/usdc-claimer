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
    "4qLurLMDnYAhGNB34feD2UpDEBei7RwKyHDGY55fmFnD8Hq2ca2c1GxjYp6P1RzKf6SY94f4F6QotQ3FikVEvTtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brMdNH8KB6csM6E4gS5uEhrn7gcTZ9nT546HtE2rLjuTu6ZcgtDM41LwrvYYBxUS5XzxvNSwAniTkTfRXPbJkaj",
  "key1": "PuvdDjhhtQ6PAU9F5zhv3TD1CsvVgMoc3sMUXRvmHF7sXZsHN8nHDULgbohE3deDCPgrYdR5D7u4m2jhzCyDbCn",
  "key2": "61fzBbapEYMYny8vyT96c4bShewM38naDqLuRwPok45ZZsp4BQnTy9Qi6PpyJeKGj2BJ9d4KqrtiR1KJigyJBjn7",
  "key3": "2vWeuZ3MMUhCKfaseZM8HQsQHub5VE8mC4prkfgnx2zrtnnPpMmGVN6VEDKzdx3vd5LeZDttUunwuZTTFMX4691G",
  "key4": "5iscyGPnUsUMtQZrx8f12UxLmnoYB2tXNxUhGTYbRqttiKqgz9Lge1EmV4Z3n7oehCP2sgyNMEJvKGmyiJYt3NLw",
  "key5": "3J6zVMyPXkuRxbmEuwbitGQuYTxFb5E3MSCoeCSxbodxn1mHKzHMAZ6xumwqEBYEDC6Q6FLaYzFeUwehAh9J5tGa",
  "key6": "62GmZnepH2KscJRX4GtBcur5Bb3AQGW6AP855YwQb8S2TbcZVgTTZJiYDSkVfQKCBpscTpdZxGazexWUfsr9ZcMs",
  "key7": "6tKWQxXVbRk6TNZ7YhCD6BkcV1LVq9jvPTGa2bfjscDv567S7AvKieQ99JA1dP15XWttT7VdMz6sE2CZLsSP9Tx",
  "key8": "2ZiPEV9ZFBmtJnwzSzFd1z6sWC9MpFVZ5fVxkHUbgqYDDWSYgLXPBze6i286KcprkWK5HEXhHApbcbd4orZHmc1E",
  "key9": "5hfwX7BW5QC8Jriy747Wsq8MY61YrHBJMUKhcb3rKevQkXEvtMS2Qs6iQsZZa7duAXE4RfQQv4EtypGtYhH58LGW",
  "key10": "527LeyLLWKkJCepNvGwMfe5p23jtVgubpJkeZpVLYVrmBqXUE73k6oyrNLHjvWHe6dZkfe7SfTxf9CCPGHM7vaWP",
  "key11": "64vJadwnd4UHAwvDEF7U4AGD1wrfDiH8iDByMym8wuyvfsuZJbD8VxK4CRRweZH4bR5H8wS46TvmHAPJJGfLutyu",
  "key12": "5kMhsps1iHK47Um81gRt14HUqAg4KByZ8uiYUka3kgD74ukBjzQAKjuhopRjh1XZVCSpicVkcckyqHX1Duyg8qoR",
  "key13": "oVVGB6zZVW1uim5LS2sHtdszYWGnvsP5TaVvDSDuikiTv3EJjc76zzhaQokoeicSDaQjwUYYU1Pa43LAFfr2kdy",
  "key14": "5sbd1KiVxxmLcZTzX8HxyEWBnmucExu21SBsno6GWQuYEaLdCBU3b74DWSVGjoDbp4otsD83sDijHsCjJpmPeay3",
  "key15": "63adSGHRmX3XCLykony392y4ELQgfW6CuhLqGnk7q14VH87vihnVY7xvuvbp9CoxCcuN5G2mFPWHvtuoWh2n6g5R",
  "key16": "3n6VuuX9jUcZtPXojNuqaqVd7rMjpM48L7zxsrw5fmUNxyLaCgEKgzKWeM6zMroaxnac8V6JoDpA2i2Y1mUNWkTF",
  "key17": "EFXbvt4XLomzsmwaYuzprv9pKNYSCL8rqD1C93Pj9kEeBpxujMsfR8fkfaXiRcY3x4Xstx5sBgsDUr9mkkCrJGt",
  "key18": "2QRKHUidAV7axaiVP2H786Yo82TAGncoi7aDptxEvjG61rRLRP3RjpNmDpTc5MeUYNmpyECs3qKdYKMFN1j2ia2A",
  "key19": "5J3jLpEt1Cgqpus4ihJmx9XPq8vcWPRgqaLf8eMXdMexpCYvoE3FB6XJAquBVk74vNuxrntjxXvCov5q3bg9spj",
  "key20": "3RTqbQSiu4Fzg7oZqhzH8bugAEPWE18czGhQ9DYcsqZu2MisXGGtzPR3BGfrNrYR4fCzNyGo4LcHfXqkekux8Qad",
  "key21": "35CND3bc6qTMUKi8tzf46kUXms1xZBygkYJmnYY23EsZL94DUtMPJRgs3Vf9jyjZ4HjeLaWVStnCpw5s2QLdvLN1",
  "key22": "ESh5rQNdmEg6sPPaKM1j96VWi1MexkhDznjPT3mEx5c1YQna2h9jeHxxaL2c7KFuYrEDji9gEtCiBfyANmzE7uG",
  "key23": "2pHxY7cuxfqV9cfocBRy5c1v4kgPFmzf1m1tqfDQSquLkrH8P94TPLVgz42ZSL5y1V2gkCKS7AqWNad2GVPPUi4Z",
  "key24": "4cdMEP1yZu22kTwqJK3EPkvme2uQ6naBn1dUEeqH1cKdWNreutXTeJaMXE1bPoqBBhY7F26yquQH9kJty1sL7gbV",
  "key25": "es5ibb2mvfBhu4oNyYGftgzNTN52uqeHcerNcFYujbTzTDGFZfTCcos6zh8Kt2X6vk2xuP59dX1AntMqj151egM",
  "key26": "9oPeKV8p8RDF4a9VnwarjHsGPt6hmNUMf9xVfpVtgHNWocELD9A7FKhsNdCAvCfjeLeL8oSHS2gC1hNDx8vNzEX",
  "key27": "4XC1W6KedaFSudTB7YPYvZSwry5jHhE6ymssLHWvE4K1MyHg87NW7EmPkE4AthtV95vzJTr2EHEAB7xebXgtXt3W",
  "key28": "5GVnv9JES1NGqGTT6jDu3yDNBvqSZoi61EQQYG4xAWAj9RZLLQHJbu8ftwRDahYLx9pMdikRMehG2SZtqE1zFVs9",
  "key29": "5WgGnagfuc4GViiQXVcTCNdgxuk9m97frSjUvX5CqunT18nVaKaJvZFFANLs5Hw6FVEEpFksCvCPeuA7PMyRJKMi",
  "key30": "4GxRWf6vkeFB9bGPBah68ddRfnBPwa22RqsEmLcjeJ3vcfG9Avi4Zryhx2eZVYNgbxTfT7YvJYUvgR3BWzPwBDCn",
  "key31": "4qnKMm25JdatV1HVHi5haLGKdoHd5kmGmP7LsZSPbJHSayFG8pjRkqZei98gSC3bQFU6g6Hn4SCfe8hb4oJV6hYk",
  "key32": "nMLVrkF1LPFuE9gFbMiqmPwwm7ofGP7odFK8qoDG5KG48wECDDyzbvL5EaBEuEk2NhhzhmwUA4PbMFDfdpU27Mu",
  "key33": "21qQ2mEmWQ99WSFwm5ZnwMHYV32U5jiDhL9KorBbXoNyEymTBTfxUPfrEx8Y76FMNMjtV96DCPoeXLLQnhLCpG8s",
  "key34": "2UyJB7aQ1h92rRwywFxQwzk1mRKNbJTXLcdK4LrP8U7f4CgF1T6FFTDF6JUqPJUnaehBBLWbyFxhqx5wf29iFbuj",
  "key35": "3abFo7Gd7yw4rrN2F5RSRJzG43GsYbxHCxPtPvLZrcX2DH6swtzx6zGHvXRDvQHYgEFoRtS5t7TgAZMsa8wDbCgz",
  "key36": "618gh6oRS4wd3pTRshG4452E6ruzYsHLyWxf8JVaF3UT2ikJEbENU6yXoA4GdJDSNAuq1YswJGDCme6pJrv6SmX8",
  "key37": "3XspN7t15u1nPVpTkcDEjZ1YNgtg4GRJDUNcwTjSCpATrC3P7BZDCxDJWP6LPgTPrCckKiXTZw9fJjwX9fRmpmvb",
  "key38": "5JQJPofppB2CJXxXeb1qDPLrwegL7kxVyYDow5khMfs5GU2dnHrwdUamsyFyPspK91rEsxU6Ff6B383RzuCpdGYr",
  "key39": "2TpjboBrSJkbYyUy3U1cHCjYsAi6vfgARntQ8VVJK5qwes5AQ2FZFRKEQkS9TfhNTud9WDoaSQvdaQsy58tpyHmv",
  "key40": "4SXj6oeMtcMSozdNBcdwAVhnBYRXSTSyHF96Hi87gVHMFpfmDeUbJ1hrUcHk79BnhHPfVR3jdqrUFaaB91LYdnJK",
  "key41": "4oVY7Uc5eo7Uo4Lcfg5xTvGu2oKtkfQif8e9oPB6LfYSKuQj7kVafCPpa7bZQt6gaB576REgS46PxLcnpZyS2QkH",
  "key42": "2TQPxT9v1sssEhu73gf3QQuKHLsZn2xvT5bXnvRJbYEs8fA4fQz8dPWW4hoUAB3QnA7vZoM5NAgu5mH599D8J3MW",
  "key43": "4SwFST3uTjetqMgsfGvPVZELbv7gdWkbprXts3KmyhdBNYmRJfH7WtSfRdWFBCuPYECjx74fvVnWRrt6FRETEa6f",
  "key44": "2dRUtdwjEBWDzUJ4drBnnuKmPZZtnGUSwy5XRHncuiiBAs5AKWyiqDjHT9hC5dVzvMoAU7UH9KtmZCQuVgf1dPFG",
  "key45": "48XVuc3mKXhMDcohhqudtqwmtJVEdWBkEXH3NcHENXetYcTtXYs4bPUDiKXszZy8ptV3MTEtuZgZuUkPu2KJdZAE",
  "key46": "5fjDnsdPrafM9XzYzNngafbY4o4aEjKhkFN9EbyPaP7DgQiHqTNWn85dhSjdDe5GwvgnheVexJP9yxdCreSe7JKX",
  "key47": "E7VdSRMhNAQMSEcNGd6BqrHifrtF5b6vwVcraExdkiyYTKYadAPjF7hDd9ffHpaUu3NYryAxr4t5jogj2zsXd8z"
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
