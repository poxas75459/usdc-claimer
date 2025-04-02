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
    "5j2hsKexn28Vqx7EhFv8EQYBeCNMa1AArcNc5xn2zzEuzGWGBC4AW7rqFa5pAJwgREyAUkyVBrAxdikH55dd79VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLsHBbXDjvtdhTjxHJUMBVKfFbjnDdNBBhuYaVNtiQHZ1tFX6ywEbZMRxeKciahVfyATLCfdqaCbuWpXP3TtnG1",
  "key1": "3hAwbVmW4p3pMjmBNEzDSapHdAnzB3Lfvx5Cf8ZtfrLvrbxesEUekY2YuHEYzj2sQZUka5RYZkaexAqi9qxjYWw6",
  "key2": "26sgAJkEHdkMAijgGGsWB8XDunS1PNAHPvDzaj8EpeGpfmUDPw4UT3tuikB1sSedmvzJ85Vw5475URDRVtZeB5mH",
  "key3": "5uZCD7AWuiPNFG91w56nUqWWCokgjo3Cb1nbFkD2xjYZbmuu4UDMBDpQL3aMVvuJtq4LuEHEgvLwAF6Api4ZqKA4",
  "key4": "24jkPD1SohJUG11Z6Dfs1PeW1cjPL1WvWXTpKaUDJwe8LG5z3sKomvpUXjAQBTdrUHyfLtBWXnpoQYHiYbFJwPu1",
  "key5": "2sqDxEQpaY3D4f5K16uKLSQ6mjvGi97JyputH8uECMseRseN7taq3uF6ZaXJdAn47hv4Aec5w8RNzH3BH5HCiKGs",
  "key6": "5sqCFVqGiHg4SApkat5by3Jtby8GUx7FLUN5BzsaFrQPqaPyxZqeUq76V2vDAEYBxD46sjQqsxJ4MCRrYhKwpMBJ",
  "key7": "29qxAATf5o5bqyAfxzboqGLyi9fz9eHNNxmGptSYV9YuFiyYrjeeBdTvkmpfdRFSuKGNRF29Jw6F5i3o31j4Y8p7",
  "key8": "5fpeCPuiowxqWHbpFvrReZUkhiH7nk4gJJ2WiFBvo6a6vwfGaqCpBF7zCuA9mpFQznrTx4ug6U2PbEsAD5j656fu",
  "key9": "2HGTYAyao8GdnnJhqBA2xSoFJWeqLzigYnTG2u5RPELsNK39GyV9QeqwMumbros7ayJhAWKRoWKqYh3nk7Xx6cgZ",
  "key10": "5KE5K1yTv2GFceCkfYrQN1cHYnzi5sHPLJKuQ2ubaBD9mcQLFYebMCvih16aEqGRoAGqWmVRqmBGzWiwQvmsa9Cv",
  "key11": "yBEPhJx2gwsqvZ934xpBEU36E4iJMY6DXYQxqnRKMQ3JzvmEkMoYBBG56Nb9bpEjpvu6bzUTAV5nGEkyvwtkiD6",
  "key12": "5Kf1U9JjHrcuEA7hvF6d2DEeYy7gtne1YYfsHozqRYdAuTqLUHUyXoBdA64sVAnRVw4Luo8wEPbNwEvFzAiv3NvY",
  "key13": "2CcxEQMjfMCGG6Y8NEEat9cNPaRJkWyQagEJZKRVy1uamTcHAcCvCRY7S1La2SSYMtjhzvFnX3CD7HQeVCJw1VFH",
  "key14": "4wQBDuW5kWxFPa7BdStKUvysi5Y7Ux6RAs6HXVY9jMW7YAwgcxaHpnNu2g4fz4Uf85LaUvyDSrr4wJ8fihDL8t72",
  "key15": "3Wotugrz7QU6ibrjtfDHZKurSSaEXK5ejBAnZFCNQWDaCDh7tz8p4V1ALmAy9ZemMrSoMYnMiqqmXBB5qTPERfwn",
  "key16": "RP54QT8ATzXDpzaymXUQJnNYAV7K1tJKTGfUKfZNcDv6Fm2PTsEb4MKtYV8Vqx1wCfky6WCgenLZuhN2qHJX7LF",
  "key17": "5cd2imsoKXapDFHSjTGWmHsnpp1rVCNmpGMDnUWzmx3QMGdRycqne8MYCvbbvSrK9osmuGGuf3p7i25TczqNVxTk",
  "key18": "5dSA3bKCwMeLgHxhmKLUpSgyE1nJNDog3eZS61eF9zs5rG5qmCLn6vfhL6iXNpU4cxQ54mvvUrwtM9tJMNsb9brN",
  "key19": "2UsGTwGMXTDCnoE5MvrWUmaNM3iMYMeYDDpaqu7nRS6Br755oCcP5ykv2gJtbm13D6zhjkP76Xe2u9bJNdHsonnH",
  "key20": "5m55jhHN5n4CGpCgD2ARBpx1ddR7N5BB6sWuKMjStRjhnVsTF8oQ2j5ftU6N15yjoVkSxFxSQm8UoivNXks1Aic5",
  "key21": "SmqoLHijJs64oTh1hXCTsN4CPSVGRzpVyx5McQoWisKVSsdm4SV9qzaxgNZmzsEc3oxri1sdqk7GPreaZB6uVaW",
  "key22": "3ZLmg3fGQ9y8JyCJ3idDMkwC6QrsXx9RfuJFTn9PMda9zsN98ttfskCGSmcfGpsmh9VhBND8txq33w4XnfQZXvbd",
  "key23": "3CruUY8BSNi9GNcoh5R1jD8PuQxzZgzkQrnwg3Sm9xRPvdNojnSosNzvYEPGop3HKLsFEJZpvpDkMzmZidjFyhez",
  "key24": "5ZJwgMFUv6xUKMXFfRpctai5TRX28XKV9EWLr7YptDfxGuhpPUzuW4hn8z8By8RbZEA7wqGr9iVSaSPXnY6PFWaQ",
  "key25": "4ppUSZnwjEcn2wdQZMmSvxbJ6obVL7rxoZU3sXt5A1UjfsLAgAt7GcLSU2TFhsBVLVpvn4TMsge8F9YJGhEGUJ96",
  "key26": "5a41VxhWDuKJnxUQib4EZpFtQDUMipE7H2uDQQdxskGMvrHaggMbHJfJ9SAFSJ8w9Snt9qoPxyMxH3VmHP1p1SDF",
  "key27": "4Hy4aXUdwxgaDbjNjSW7ymgDsPvMENN7wQbYhRFSWbz1LFJt7ZzYcY4ehQ1BEFBrrDdkPBrBFmGFm8BgJ9TZN3o6",
  "key28": "GBuowyvzTabPgT1PYptD4MTVExXAEeN8SDgQgrM91X4eXm944LS7m2saoTCUeYqN96BAUtkT3vsi9cTMBxaKDqD",
  "key29": "3Cru1KNdgaK5oA1G8zAqGyKag9rgP6iZBppaE6vMGt7uvMApy6dnZLAVJJiqNvBfMuZGS3GX36o7dJR9DxYHXkDT",
  "key30": "3t4y8DCNRvjnSJpbTyhsNV7XpPdppJAQwCa8cwneqx5CPAXXP46j3JhXotQtNpinsP77MhBas3uAfS8etCRXSSg5",
  "key31": "2eZgLLGsBJV1ab5NM763XjsHntpYhsfKH6AEAEAyG5LaoKBUm7rso7h2UhFVqcuHw9nm7c1zoP9Lz4Yw39Nkk5b3",
  "key32": "XBaxSc5gLR5AuJXhZHAfARKy1FCJk17T4pRatLT1dB5HTeYv1Td7WQ9pyqoehWGt21fqbE7rrJooxRDMyz83juZ",
  "key33": "2tzu2gUDzP2uLCpNMAF4sEGsLo4J7KGJ81xPyQD3ywPoJJRHaKiAycAxyZMEEeTZ1FFfmeoQkZtGHCTq4pu4nr4M",
  "key34": "5jShbUNByGhX1xRv8FFnCuU7sGZooGhkz9gtrN5kbvnAswLE8eW2p9L2i4KDwuidYviu8e9eX2iLff63wKMtcKHH",
  "key35": "5M53Hsy3qBqUBvfSNoAmdzusggyVYQpr4guSQfEF4Sj6VGvu9KSYbfkPoPTNxUPTJTDiNvvwL1o26UZ4GaV4zU4G",
  "key36": "41R8T4QYghh9j6JrtYAGxCg9E2NrtsTvYc1ZVBb6SND7vKAEVsvGXonv3GEh61tnM8RbqPPgPYt3UAXHXfh5mspJ",
  "key37": "4S9vWu9XMkvvWfKt76DxjrNuJVZiWQcATCSBhihtLRQtkysCf4tTJopkuMnAEJvJzAmzwaBfXAyPqtewxiHQs4oh",
  "key38": "4AD9AJmwRxFfU2hLPuBoexxb89iePqUEnsJQx2S8KxrWWBNus4EJ2M4i5CG859FhzkTJBwxL9sDskC9m6PzQmKYf",
  "key39": "3XQv7wFUxgEg5mhb4ZfPXqHi6cAh18VgD8392bwHNbpK2ipG9nGdjuBDbNaVAf1mGtPTVt1FP2sWqBGAL3VxwYFz",
  "key40": "FxDjnwnHdvy3goSsrtSfALCRBaeJBso35sCud4WatgkoTxwMvgXfShpnL59iuWswNUrTFoHyA79ws39LB4W8T7a",
  "key41": "3uL8bzNjU3JFa4FcJ5btmZ8WE76zj6ss81W2miKSmRRHdCUuUjQoQVWcyj2iCeFMdvKN3pKFnfS7dK7XXXrFySue",
  "key42": "3rYkFRTcmf6ENvdn2ndcoCWxUoSY1SMp9DzYvZ3DCnEbnFQZcSYXoEv18zhCrGtS1Yq2E6ox7BusJiQFsJYJX2aP",
  "key43": "4DZqShrXkGU9do5BzYwEGfAkQBypkqNU7gMA9Ah651zKBhWmnbLhrQSTqXirhgpBrmfWCH5xvAMDpXQPBsyVqtWv",
  "key44": "29XJPzeZ6WnboZT4aQswJMX97DxjA3FujMCa1F91c17tTuSBuVnMHbi1RQw1XCRVoMRQJUhBHpEDbAEeP2nera6o",
  "key45": "5pjoC3VMWSymBJ2sqHnVetT3oyypLdACzCyfkmTEWKdU5aKreu7QRnMdfgBSoX6jbPbJ7rXeoH5g2MZgF5dJtLub",
  "key46": "4QduB5kDUFaoLwUgk8TtAfi7UDdZRMG5uWZojPWmJ2QUuQ7BdhEV4YQRGjhhDpqBXKfxJVgvxRoq9VBe2Ucgps3a",
  "key47": "3fw1khqFTs7CFtgSZTKbZ4tGocxcXuRWqgNYNWu5Y8ZMCVvtqFdRQBroGS7C2Lxr61UZhG6yS4GEmfgdHoMosKAv"
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
