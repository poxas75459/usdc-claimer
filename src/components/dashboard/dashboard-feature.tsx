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
    "2azJsiQsesVEtmpr6YSFUHd3XcRqT6H3Jzr53EaXY498vQqcC33aNvRsGmUvZMTHJmcD3giTBNHWopvTxEAer1rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBKwvPvR3LCBKjvrS5WSg48H9hvxGnnYqWSX4ysMk16XVdLzhSXd51a2omrfABEaDR9Vp5jBr44S7pGRJiK7jzH",
  "key1": "5m8qJaFZxThyPCbDavcEeg5MTRN2y18APT3UcjZ8JZGjJeprx89zk5nTEnTYW7Nk8RGxsjUK8UoZ83JqvMPdRepJ",
  "key2": "2XnZqmxQefjPf3bZ6KoQDDDpfVDcR3gM4uLkUtJ2144knP1sP1e38VMTKSEbdvQQtWsdcjPUqCxtaEfBiRXEBc3n",
  "key3": "49qJ9qWyRn5R9xsRpGmof3cZ8pGct1s65SbrMNMyjaW2TEPpwBUnd461ce4G4K311VANV4XdLpsXVDz2dn5JFjtV",
  "key4": "3VxqWMityZbYsxw1ZDFrrPAoHrBdZuohLXG68qKj72aPk5a928shpF5Kv8C2zfJdzc3pyLpAWoDZmmnqCNpAqsnQ",
  "key5": "3HbQVaRWYe3MXCWwhombD8QHHqXxM2ceTexhxbEWjqjwkP4he7CW6GuqacAJU8hGw2biKxQdT5Nr9skMb6G1paQd",
  "key6": "4HLDfBipvo1NWPANvy8dpfUbz3wgdx9ZdM8y82U7wT2geXRsd2g4KZU37YVGawPSFrQP1WTbrFPtMnNBcaUbKm8k",
  "key7": "HwbNwpyvLkKuB8GZpKo85diW3PJ1xWdg6RzNz9BwCg8gbheWwe9vF92p29RaYr5KpL1UPQxpE9Jfr9jAjkrrspp",
  "key8": "56qEbG6pFWRpZpoYRdkbdxM1ydyeq9R4kKbz3hH4Lx8qz7nFtRUaxwtQRqymx3GNJuTQjryGUffGvGSB6AdeKTBq",
  "key9": "bdxKNBF7uQGB6qJ7BkhFdSBSpExqXtiYgCRebLpwR7KTNqz4tkUZwekoxLjni6E83ZuqerbnHbrfn47As9g3kgN",
  "key10": "CdaXdwzoqJutfqFSPLefgDu4PRjbvMZvtYWobgzvNJVKLqVjkGqPTsuK6B2SfvCErxQkdnEGYvm8cpL8BfJFbmy",
  "key11": "4hipVc7YNZViumqEZ9mA6tJD9XP52wdknQsphcK7eqPeVukwi5anXojV22LVXu2EhDBv9SoKb5md9QBepujhGXJ8",
  "key12": "4jrFJwf2YCBvZwYgkGUfjp9ZGre15R9bwiuSmLoj1MYm3sY1dF3iVudz4uP55N7SRAmg6qBsbA5kV3DLzEqKDepn",
  "key13": "2K2q9YKm1pozZsVDYZ2qTq5isWeWZhksLnzwVRKkyARdx8CnA6spWZqV7oP5Qo4WVPR2yvDnBxZeHujLDBUL6n7u",
  "key14": "4DrRMx5CJ5T8NYUs9Du3ZHqPxMETY2UeZDMDrB28fRmaqSRAL65pXFgRQPCMkJPGNWh2Nrach5d5FuXGhR51TUyR",
  "key15": "2CZA5fNN2cTJeiiPiMjN8m7wVHBkieP7tFMkZiHmGTgf9xAYpkgN8n7p5odQEmhNqaRscbVvgyhHAkhMW6iMtZVj",
  "key16": "59wdSiLdmdkTNxj9KUDmSHUerG6HkYTocETwPUoqpchi3nVR4buhSiYydz7AKvZvnUWp5mjK2kY6X21nJceYWYo2",
  "key17": "dqn4YhgQPaRc84dHTKTwDsMTFfc9CEdUAp6VyXcCYvoqSYV8KEp5qX2aYr4n6KfRKFF2M657NrDdq4kMBwbeXuv",
  "key18": "3dUr3weE9hwSUWF5Dh4ZjyimFFqiYU8A5ziGkGX7iq71P49SonpDjsDxdsYDDw3KEv5Vkc7nGFaRM5GmChJqf2mP",
  "key19": "3iFJJk7mYUQihnNqGTG5wxu4JrfE5iYjcTjHrym1zHMDcme61BGzQtYf61RwHj1bDAKsMiLKHhRFE7zscA8Ff8un",
  "key20": "2aamrQZk8vw26rnGPsqCbJmmaz4GZAmvwUJceUefR7iDeGJhBEdSdaANnvZbxB6azinU1xTb3Eq8hCwHZHVFWC3F",
  "key21": "4Hm4Hskd7CqYkUJ8BV8xPManZ7njoBoEdX9T6a1r6Nx9ndL1AwtRsNn79CVMXNuDPrR912FSM96P8BUBL7HxsfgK",
  "key22": "5PTsdjovaQWYi2mstwhcEwu6PdRPWkGzyL1iLJnCdojsULVcsS7Vuf4rtiWeRZbRjVq2NHyVPrLWGQMHm3A4Tf4r",
  "key23": "4R3HMYknZEd9D5ebceD7HDtH83yZUNuWZrn8H9S5muQKteoYd7KHTecvKrfZwEhGafGWYsquUfmijh9FdUjTHoxv",
  "key24": "3qmNNkW9X7BmQCBnnvbmGBBvvwUERDQmw46LowAqDr4yvfoZ1akZPVdEXtFU2WvEXYp9Vj6Gwi9UbnnsftifT1Ng",
  "key25": "dPryBfa9P652uPdAMdrugAyCLwBjyPdeT7eHDTxmoKNUE7CcRNBf4tT9NsbAtoa378ey5Dr6tGEjQpa65K1wbNK",
  "key26": "3AQKMHftTNri3k2kCkGDV8XQYJ4Fkapz3c9HJmEM2tWXe1WRvTjRmvk6S6JasHqHy5qkMW9yhMroTdsSAEsKRxUo",
  "key27": "YFpCajqNyCTV9mAKsti2kqH86pznMZgNyh9mfESkME8XF8xkaR9jB94NjD2fcb3sPrjxwoeREFSWvLWZUpHhWg4",
  "key28": "4Kw1NiBFnxXcNErbcY4m7N2qjdG3Z1VbgLPAGJjvabYffFLh9CxqPwLsbrmJtGbt9i37DRgqPSSSMrozZaPu1CJF",
  "key29": "2BZKkBwLap9WJk2SRaovWFwMKASKz5BgaN8dzEBXXro1j288Z5nJmbfbyXjQCFj7bcAU6YWqq8Z6CJu32MU8L9Ai",
  "key30": "3RKxfmuau5HNGRQ1Hwr39M6sViaFhgGGqi4F1cqtcbqx74k75f11Ntn7RvmwsBSPgPkmeaiQvoxc8Tn71Fji6T9r",
  "key31": "3xxBESykwdjEuiw5MWBaC4uWpPQQvmu2bWZkc4nXw8JKqyoEtVvcVAHEgyowdLW9ar4u1GFWuzLFcEQkBrt3sjQe",
  "key32": "2wcxZShAXWW3YMKPVh9QmgLKsp83P4ho8BMntzSbjgEFmkvNXx5hZiqLso3UE8ZiTZ5Nn2jcmG9iYvivquk9wbjK",
  "key33": "7PQG8GBCAEhTskKMK3qWTJ1CyGL2z92RgVyCB2VmR2CKiijGBq7xSbCBsBzxj4JzmjQ3jpkcKMoRC77owFA2EBa",
  "key34": "BMMoh7um55TGEFUkdKkZsfx5vYS5fhrjE8i2VbxwnQW2DyTHgRfTWWG8XPGuDWWM3dJ5aRR9N6bzrXZVdmGcwPE",
  "key35": "2mdJrSZMyPagdRf8hmbi9GBMhKbbX6sRLiUXJpfFEaxa8uY5t6ExtQWPL6RHtN5Dgj6K1o96GKrRaiZZryaawn8C",
  "key36": "3XvcPiF28So8YeH4sPGSBYj3GKis5KDT7qLDg4vZHXkn5C7ua6hzs6E2vKJgN9rrtVufuj8y31jK6ArjGMdmqkQy",
  "key37": "5YEmZu3Y5BmSSQEunamX4SzFV33eaFpYk86iedBCR2Y9JBZQQHynjngkjYPw4AFt3F6HUGyuoB1LH5iEuojuA7TW",
  "key38": "4Mt3SbPJxsHnFqhBRhyKyYgub5KUbCDsauWPBaSRD16aHHaVtaffAy6nSsc9M4Lr8NPk6aR52Dpisixc9j7rPbUy",
  "key39": "5pg3piN5R91PsMrdbesvU4Qr2kTRzS6jxvMWDzKvP1VtUoTrEmEoR8C1H2aQswAruvSzp8yco5LmDTyVPh8BpWoZ",
  "key40": "2YtznEuMGSbk9K655NEt9fneb5kpKFcQgk57oiGq2H9VCJwfwxrKuwdtq2NADYYhnbkbP6QkiCc6m6FktUewuiBY",
  "key41": "3uvWpmYxNCE6Y38oMaVKJLhE2z7Pazi1U8wR9cSSiC2qemNfBEGGs9USEtJBCVTxeH2TKRfDrVz533eKMpeMisjo",
  "key42": "pJVSLx7m77iiNoUdnZshQwYqTcesevCwoUrvH2Ei1Sop4J2wSAfGTUkgsgYYSADX96uDfnzQBripSX9VsVxbSK9",
  "key43": "4jo8AqZXAn2kBAWQvqrQnJnxuHBtiAQy4Q7s9aXTHVbthxkwMeVDhSnm2yyuivYT3WLUTkTHUwjY6DBoh1Kc8YXW",
  "key44": "KNHhCw577sM9d43iXNjpbsCekcrNq3KNGRmALBpCuEPDkeTByoC1wrBY4Q3wfZJDYZenKTGyFbF8HWNwZM3kP12",
  "key45": "4tBtm2888T2BrgWFNVvJvWCwuUtKuUzrnm9DxqrRDrXzqrhrhyXaizUKAqhT52Guyars1Y9EAwT3MxTYmZY3ZSkv",
  "key46": "4CZcwx237KR5fZSjrv8atAYiKC3XwFQqDFcyJmGAzGsuYeEwbTfTQgNpPJtodGsT1STa4Yd1GRaam6z8FNaC6jcs",
  "key47": "3TKapECuhAvbG1eaW7d4jbpu9EAmzpybmV6rZH4Squa1VycFLXAvAjKfXB2YipdqTFWZZRjVscfXqVENYR39LKAH"
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
