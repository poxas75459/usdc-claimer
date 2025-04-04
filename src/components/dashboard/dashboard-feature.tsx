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
    "3rHuSZFaqka2PMzZsMgDN1M2dMdbPPUwkwTqwnK1DtSwDTxE2GBpgKkmsiiqBynNmtmG9HfuTFkiwhtBJ2Z4ZeTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b7s5AXQcg2SNv2efe8HSFhq9YWn96mxkGEZzZtUm1Ag6EMoFv85L2mj2JDU3Dy4F1gHTxfqBSzKaaSnLpKpq4iW",
  "key1": "BCqm1vqVHYcjHo3cz2hZozSKPxUFSEPZY6aGUCTEgeKRBLwoEZEAVnSNjfZVrLLCLtKNDxxQy64LNKW47idYVrW",
  "key2": "t7qB9HiCMaDmhyA8J2eFCaQCxsEv3BxfawfmpXcTwcPrvoHMfeh7zz2uQhWRw5pH6XamKBPRpZRitNk8BQ5UcU8",
  "key3": "4npY1XVRYvySRkfLuUjDTG3tGt51huXwahDzKex7qotPFYqxsQEFWU6JwgeiyehALzMTquux4qFfPrrv7uwpqGxf",
  "key4": "48fB8v2nKuLNWeQ8evaJDomCAkQUAff8KPJ8h3PpXyx19FdZrCRHAuCCAE15Mhem3Z8awJuCAghu13TJRTUKmMoR",
  "key5": "3LyCM3gQEeMePaFXvgZfm8BYzpBwxxhwPKTotqYsLda2MVVAABNvYH2cGzK5dqRJVPuk42W8ZzVx2YWzDy1PfSid",
  "key6": "9yX1XWhDCUvF8uPHK9EVoEhcUwMGSC2FrLK3Zcg8G3j25tXceqa9mzTyekyBPpjgJFxBGg9rSzMVz2Rh7WpRQiY",
  "key7": "3etVctfseVnFZhz1E722LCEq1GJ9pDc1Bwn1Qpy311fCVKBZVPfzth6wygXAMB7Mbzq5MuscFiks4FK6sRFxbzVX",
  "key8": "2t6aSzNVA39YhiwCXj95uwe6JA8ARMdViJPreruRcjUYpQwhK15sPJgJAYgYaHywHuFexc5Q4juP7Xdditzuk3N8",
  "key9": "4erZPUmTdsmz5tTazTBWZtXQQtDU7ZtZNcnsLv3iMwo4jHqXuMRXcHatYqkXm5foaKXUt63ypPFi86V3ruuC3f3a",
  "key10": "2Sq91Jkwi7TFVYdr12e1fWwwgkj2oHnGdDRsT69ZwqTEfXBV17UdvBSr483KTPyGRvX3mms4AH9h2v6JXfUjZXmk",
  "key11": "5cbMDsGZeEFce5ubbDMoZDrTxfT85NssdDvg5ZSbkPyvvoFZwGf3osFQ6WCx6PXTCvNSGw4GUM4yRoqoa5aLDYBm",
  "key12": "2xtB8iy7cMw4Kg2w4hcDkdQoky1QZAc5ZEip3GCnBvnW5fwnJZaogsEHpn9pmcictPUcRzogaK29FSaq5KDXPCFy",
  "key13": "42eRQYQofAkpBorWWyXks4XMPWBuSrQEdC4C11U5yAir3T1bt3meHVuMkX2LriZgZqtUzAzkb6FPvihLtmVs1Qx3",
  "key14": "5YkX6ZNT77RR4LQG37v5bFfj3MMzeLY4y2d15vFzr8pPuiqMYC12xErMhszHZESuatTYyx9qq4E4TPq8Fr9S1afx",
  "key15": "52cF4rRKBmXRcm2BqX6K9uV2vwqgWnc25NufzMNkCdTX8DDXLWgZpxoPAFsToyB84jWrmFJXrFtRRMkN7j578xaq",
  "key16": "SCuY4kE7vp9Tuf9Conw9Nxte3ZoX4mcDQGcMeBbCgc2xCjh4kakmja1DLvpTf3tQ5XFGN79fPkCTGcXc4xYnfeP",
  "key17": "2ZqvxPEQG3NREcfQmUttXykahunhj4TSn7K71cvsDuuQ7ivD7A7Vd5BAEwbtaYSowyFArXrsUmZCCp3zif2CEeVV",
  "key18": "5s2ZHuDz2rKc8Vkb2MNzE2kLcfm5wE7jKZ3WLCpoZoGGpB1kcABM6tvnqHbQVoh2jNu9o4VADa2wz6aUJtpSpqRr",
  "key19": "533KLkUQQNwABtkoPhEg7siVLzYtFTYGJXtgUQPFooBAeyriHDye2fBkLNyPyTAcJePGoN5TrdwejsQ8QMR58WNV",
  "key20": "472LTbMmgj2PLDTD7igszSUPdg9F88VuqktWRXsewvSHNJ2f9ycbU1dscLfqkvS37tkMbjABVjcg4BPbpvfo7vKy",
  "key21": "rohpfgob7XBeW9GxMdoAevYYHbTcJuMhaqQw53xDXBNkDe3aXn8vMvTvL4bnHhAxCvp7LS72gTx5PF9psjUaRYi",
  "key22": "2bbqYBCkfVJgT9TDc5AXjGvQzgmxXXry3JpKSxphpKf7jayzGHP83in3JK3KrWzQrhmU7R65aqQvsmivj21Uf6Wv",
  "key23": "2JHnTo2YT3HPspjHW1T7tVjuhsfcFZVpyapymqfYpsg4knXnCu7FogaBBfUxchC3P6GyutugNnvRByfDVcipS6ij",
  "key24": "2BkHjKEWhusJYE2dnCBasKhk4sbfeGiGJ2osH8XAjWgpQE9yV9Gf5u9EwWeuNA1BkxVHhBRmH984XmeNPsTKsY8q",
  "key25": "3r1mbktKiRUp5RoxrcgMG2ukfUmLPLSvss4BhkrDHEb7reK11VWN7QXyDggCz4WGqNLbyPYSD6agTz95Yowy44Cp",
  "key26": "2JoCMVw9bk3uxchoeovEx5e9gVuWM2XsqxnMhpNmHsyQrQc5HWkdgjK4abYWgFRoMbnzHoHv52wduEBQEmX4bN1G",
  "key27": "3eoXQsVAmaA7dicy2pCj1sFiyPir3crL77fH1GxbVxufJD11AMEYdD2NQ6zhLajLAczCL41oCUDYai1Ngs9rNzqr",
  "key28": "4NYXZPFmsVAoUVa5uyDqhHTN1LG44hXf8myvn1e1Ki84ipXNenFosYL3KrBwWYN1nRkxCARsUMbMMJu56ZLPnHEh",
  "key29": "4feuFNTGPd3QtLu4yAghCTK4PBN3aid5aiP38rPKWEK6yDvuYkZRNj65trKC598U4axvjA9wHEgY6TEfhyAcpV2W",
  "key30": "29Yg8AqBJcrJALXAFc9gLmveBa64xS2D66DKFxdhyNtaHhEcW2fRfKsv8Hcti8xjQ9fGP9YaHSzS79yVd9HaF6vj",
  "key31": "3a6DHGoYcHLPxKqKYS6wSJPXBrZGVLujGk44mnJHWQcG5zamWwDgcXLPGDN14CLxXU3wvFwnrt4yCn29wiG96eTn",
  "key32": "3ATAE7EL9JzRfbu13x5EA5KXmviT6e45J7D5qgSwnoDmKppXmPAnG5PgSLmsXKyU4miALMbwLpGq1WHGam6vqTwk",
  "key33": "5nAckALYWTU6NiDPCZWgrhBUKZzSfiKoCuHs3yoEFTfuBp6HEp4JmMMwkiYmPZ3DSMBcoLFpUHGdhsE1yhdcBm1u",
  "key34": "63DLPkMj36Ecx1vKxXUKeCkPv5fn3mrVfZB81tWb3e7Bma3Cs1EnwUugoXXYNQu2MpM4RgDfAAWdQGjmeRNWQ34v",
  "key35": "3GF15KgyPdHNpyRHcyKAa3RdKDJEWLXfKNrku7cPkFQCDomCz9uSwetMHf5PLfjKUiwoeazoP3tmbPXKvqQmdeJ5",
  "key36": "5PRsurZgYPBzjyneEHTSrhj3NTEMogc2SjXkaGCA4DivFo7GEciSYKDxoYdssHt5R9S2bDuDPX2Uro3kPX7HDMQG",
  "key37": "3Ps9kRjn9tMTrj2mhLg5Yat5ZyKA4WK5DqhkV1LLYQkkMWffUsoo7Abn63Vc8DyR7Ne38h72K7VBYE78Rky52tiy",
  "key38": "EodViUv4fxMaZmVJhQz66xqCnL3UH7WMLw9qC6zXXNQK4b9H1gZX95yuoD5Ls1x9Bf7wTiHiBupqvcf96UBiPe2",
  "key39": "3ETFdSVoy5xP2F49D6tF8NteZM9xuJnMHGN8ii7P5wtbV12FdhzmeTANhV3SyNXYxQJACebewLhFma3j7YmUhL6f",
  "key40": "5YZVpKo2ecPaiW6L7cQj8B4rrJBgKkrzkmNKQ26PZ22CaDMdeE6h2Uke4jSEa6aWVxa7YrPKtTep6uRC7mSaRxpi",
  "key41": "x35wUPLGPPyoCRYeD7XEJifbHVL8pwdc9br7geix4fLueH4n6mEBKayLVYdk7bvRhQMUpdgfS56HniUkCsjQqQt"
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
