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
    "2FxuJTiQrqFxeknhhBWUGpjsL4biZLwGWfrW2fv79Bx5C2xFjtxnLupqjhLDCnRuhGtcH3fBs4VA9jPTQBekzwNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtBaYE7sash9B2u8ADD2zth8DGUCmBa3gQjhnYFxSwgeweUUSyiCSnMtG7MqPfEQZhBnqYEznw1UHdnWU8XiZKj",
  "key1": "4sQiLff4xr9Xb8E9Q6MspXB3NvJSqqUQNDDWB78RQrpTUofaKqq19eXVhxbCghCmbHmagTo77dAQ7wa3tzBQpnz5",
  "key2": "4hXrJvXYgXm87yRWHPJZRfaaSC11McWy6NGZZEzTZ7ZTyEcfaZmmvah3vRnPSBnBeMie1fzVt9qPfBqeCbnmfekV",
  "key3": "2Q41Lcv7tuYBrVChJ3GCYmXAoyyKyeLwtEcwyCh4NLPsU8oUMXj2Djr4eAdWR9WqYWARcEDpB9PTPRgQxiVTtsJd",
  "key4": "ENvtvwnbGZQtiFnFwk4ESgtgaAwhrwT57ZW2SQTiaS45zmgp56bCUJkQw9gytbZcPoxpmja4GmpWcN1dbKJiuJY",
  "key5": "UweYXYt7XhjnmVrmZBwmEf3sxJXcj2bRFHj7UWmwiztKfnZzVRUTJaYs7zWqbr8iZEqMSAHy1Hksu1icYFfS96r",
  "key6": "3jjQwNWZZgrunDXjk9EEaVtJ9MLNaXmXi2UjAkQESz7V4mvFZ4dP6PkxM6YSuXFpYJcwXYFCKEhkqVbStYKBRqto",
  "key7": "p5B6rJ7BBitrKZDC64EsUHw9RtxTm7czGULcKtSowUJs9hHptLstzB73uF5chn6TyBcfcrCzBXirwGb8cRDAob2",
  "key8": "4ySCevM1CyqwJGKcw47u5US3sLVddYW9B8yiCFWdnVZWZH3ehDJXbsswgaUumtcFLD8MRCxhzhT13eLZt59A4PnR",
  "key9": "5jx4LxqqDongwgzcQ3VYLXHW28iEcCH8sQj9t38HofmtDJkzSqBbGah3tiUDSsd3APRXYQYwZEg3g2AEmUcRBwu8",
  "key10": "3JJXe5fYFVikYmPdfTbAmc2CQJMJeNc34E5V8UAvDe7TX3D5TYmchQDeCHoyKhSxF6Cxp4YLaoEiPu4WaHwPZEnQ",
  "key11": "49PDgin858GP5HLC3NZVGAzgEFq8F4ZiPhZm8UufgZU419Jk9fzxeZMt58TPE5obFFmbhefcoR3KgSkckJiX1r9Q",
  "key12": "34Kdc2bdKEENuyV6AdfTBBSVmK9rFiBz1gRAidjUzZkfvq3YWBSefnAd1zhxiswZYZQzvtUnyhiYU2d7DLaDy8xw",
  "key13": "2FBpNjBnwG4BXsyCCHGnwpzVRzhvouHPXc4AqFsxs9uWe3L4qherR2oJRW1cm8GvbyMjjaA7JsYss2Xn6gmuPZb4",
  "key14": "266eqpE9L7y5Wu2X2oNjf5tprXucK7Uo63pk9PTH7LJbvm2cRk8Y1TEpuMH4uj7gJdqf4Q94VpfACFpgBXYEgxZE",
  "key15": "2YNJKhZNbu8eAAgsbUwK97rpUE6mzoxmupwQLTh36L12oir5UfgZNWLGwzD3sXMNg3RBwoEpTN4TuGRaexvCZrw7",
  "key16": "5mhNGvXMsoYeYS62Uuf5ECefeD83eL2XSDmFmAZ2KLStfmBb9VnMey9bgbSbzEi2J5v8b1z9J6PDUMbkAVLjCVqB",
  "key17": "28t2ZRxqtRNHtF7T6kqQJbMaKAnta82TrQDTibgRfEtYciuby7WqgSZp411BbkHMyvXLLGVCMt2E55GPSBym2Np2",
  "key18": "5xsE4qXwCdUDKrhebA1qnWtTUZbPxdiQYeZ4zVhPb1vZDTxhMimhn1WuBHLP1kmcQX95tAhwtXJeW8cNkdCBaieq",
  "key19": "4ZUgahdUgtz16i6EGQUkbSHvJowq7GZKqRo9dbyqXbLDLCvx247LGvkSFtGYSzJdxYBW8CexBng39JZiHxuUXQT6",
  "key20": "4VkZTLqTkgy5BMoFVLDqVDghKxkKZefgN4L2w6ExZQDFVUCn2oDLpDDia5UHKo1j7zJNkBAGqRfAFZh7bhziU9Jc",
  "key21": "5WyCiSuU228Z7XrcHnTV8xofvfsjvr7ziQ3M3ESmcZY56gQRCQYTD3T7F3sWitdxRuaMGMcKRHnoL1z3fsNF9Fqm",
  "key22": "39cS7gtbyumRrGqqvtWLNGRkVf8vZg4T5dfT5J9WLwbLwZSNohpJ3EdA5gHxptEj9HZoG5gN7y3vxo993RBeaUyc",
  "key23": "2KH6AsvmbBUAWnbm9h6sqMSrHsphPoCY88UhfdEc5eM7jPuQxKU7vqB59m1kJoVWiiMwcw1LoSL3Mn9DKYchLqkh",
  "key24": "471btMwD5sdzHTkFR3jMkWd4MXugMyGrXoekiGr5w76Fv69wZDFb83W1GuUYH2WEi1pJndXiHvf4aV54E776dm2w",
  "key25": "4QAzYJo11rSUeaExF5ZGLAs2yJaKhearnru9BfKdjhMvMkvazf8H2b8AhW6NE2t7uA4WCLQWcPWKCsGwm9jFC28g",
  "key26": "kwxHk4uoMqpckAgWYiuwC8N8kKCDKrPc6NxiUTsPShoTtq7thJw8Turx87dxCqxHjghkUmLkCKJmFJUadt4GgTy",
  "key27": "2LhNR5oiEFgKk7v5jiNcN7DC3ANrckcXXdWwzCUxd3zkkXK4nHjtdgXaYxZ55v3AzSfFAPf4pjEwx536rqE9zPv5",
  "key28": "2fGpkoWDVRQmDagDpNExNaAEohpLmjRrb6zZScmv7pYneFmnTvJx94CYLm2ARzhW5ynhifEJHV7zeGtPNeR87yU5",
  "key29": "4zRbvvpY7Lm9epA8CV2dQm9UPpnZz38ckmpWjXKLvynzB6BrcXTDLqQHBF21EkBYbp8B4tKCEyfo7QS2offfRW8q",
  "key30": "5WtH1tNe8Kb4QcC7z8Qyd4hFZRHMr33qUKvBgBfZvS3VsiircZC14qrbbGmD3HmF1PadPfTQDvMZq43RVqkgv3sP",
  "key31": "4zsxQnpe8UfLHCWB413a9oZ8HgVAU5ZCfFCW5MwWLgvMLAFR8cPuf2tXquf5agJeLopYUhpMQt2KkMgdfTjANKYS",
  "key32": "GvaHxPQiS37PqqNiQzC13NFmyx22Frjzk3kHsQh5eWmtcBxsveWHVRFVLku9TTUMEpZfgbxPVK41KdzwvMHsc4h",
  "key33": "5U4gVj6T5vNK4Nk1wMQQnYh6rjFYK3P6QuemxzDuxcVxYv5yY337W2uc8ZAji6aANk8mieQk2q2JUHBgoVDSZh7D",
  "key34": "vgdPDQpFEoAJpKFmMjvTaKsjysbdNTxq7UqQ39GK7x5b7GAyB1a4yCcsvoYBia36xcg52ozfZbM9WtyJuhfsAQn",
  "key35": "4beLoXb4w76BDmEQGhPkpsvG7GSyHQ1f82EfcY9fbkiXJkaboT6dUFi9MYjkkL4smQbLd7BQJ5x52u6hG8ginLT4",
  "key36": "2GTavSDF4oAuzsx4EbVDcNvMjE7WhnfA4H2UDKHbCDXj1d59dYhVQa2mHaxeiC4QZ8YD5v4z5mLS5BvTD8zhXBbF",
  "key37": "2yHaVv9S1SMmCWnQ96nbE1tH61efXP2Rxwqoi13YGW9sDvyZx9BWrf41CsFiwgUXbv97uPVsaQQ6bwpJjuKUJW8a",
  "key38": "42QeW4ByqWabiPb1hAyVqm8ZX5jdzVC3chvE2vm6fMoXEcV7MvSLhA7SPQx2Gk4WZDLzKvowvAsLGDwRUSgP972b",
  "key39": "3rb1d8vajbudNPNVFrrzF9Vf9bGG3wqQ9u8MsN9AsdXfu4zVaNRC7K2EawW1tZdKoA276Vp6mvTvvtA5j7v1n6q5",
  "key40": "3YNJW7C94pPmLnFzFzuEUUD7zR16qCqe3hyhZHeyZTaGC36xNr5fNdrSYTazHxMfenz9U3YRa9cVpfXGnyjSxH3s",
  "key41": "5CAWkpn6HsD45k8T24UwfUJzFHa471xhAeYAbMgKVzRSE1EZfUTf9hUHJ5qPTKAFYHsm5yTe3BN5xG9zbTkLdZwb",
  "key42": "4ZYNJt8A7zxq7ffX9DsMiS4MT7pc2XDHi2bSa4ZhnY9UNZEkhUPS7ptPj9bwtihhqiwPLrxh3ncwsLNEG3GwtkFj",
  "key43": "qYJ81ML4V1rtCcvmW7Ue5GecqEAkKu7Wcu98McepHVdYj2xFKaJkbaGsAFP4EBn5C5LcFGvkGo5pVxuQuAvLrNA",
  "key44": "5rpB88zSejWCLm1Voc5J5rYTigZ5K4gkRYadiERNtbqRCFXAUkA5m6tG2PUmDrivTdAWBHa76swa1oEVrpehaUi3",
  "key45": "C2x15QXN4oGyo9QFSGXgEApkXV4xjYmBy8vfQbn9zgGTVfWaRSd8mBN5GBFSiscq5x77Si5Ti26RLKDw3TykVBA",
  "key46": "cV7UoCEL2ng1sawj5qfP9CS948rG4Gk32VvvrAQ5sfuc8rP3WuafgyAigbFxXDiYmU6DrTRSbKYKtwEvGnc8Vyt",
  "key47": "2XdiC3szshxFpwC66JdD3n6X38jC9rFrakh2JBkGcvwdFhoL8uww74spCTBGZjAt2mki3vUK5BHUAmcEsWcodb4L",
  "key48": "4nNYfvzKqqG8piRe41padu52n7yaGjJt6E22gdxUCEoRsJCaqBaV8hWYtZKh4NLaMtFqeQSNhDExFKHLFC2Bapkf"
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
