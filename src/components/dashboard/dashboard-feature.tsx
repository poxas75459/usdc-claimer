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
    "3pMsBZH7WUZrrGHP6LDcGaPkBd4wWG7QBKKZPTtfakUxF7FjqJfUfH2aUqNzMBAuxCQQR4WHegMjRUuFgqeoZPM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6293qaaQxfasrQLK3eVowiyEsv3v14jWkWqD5wQt75wFwFHHGA1PLW2fRGai1sga6dJb9wXdSu29DPfVYueU8D4",
  "key1": "2Nh2vV6ZXzYeur4xrwUVk2uoH7nMy9N2Rs4u8Ze6XyBWHPsx8q1Mt6JuPd1MUK2M2MnsczDg3ASs71LfYUR32YeR",
  "key2": "2U1Y8fjiddAkxSf4UN2vKxHfAeC4VvXZ5CHGoaJjVdWx96LjAJVv3N6tfYi9ZGCmPdTcyvkspLdLj8eBygotrRQy",
  "key3": "62CWdQkzphsp2ajcGqEM41cTXAV69pCc4nGAQR5Czvg2AQN7cS1XTTzTjPkKJ9Ksp41XtMaqSnFFm8ygQmiW9oYu",
  "key4": "3UgxAfhvh3fzWCtn3YgBW1VQDiHvwYm8e67WbkdS97q3ZgyogBFHVk7VRUC72uTA3pNCUWUdHMZeDkBLfSjjwPXG",
  "key5": "21cXJGNsUtxHAP5z4L8nVTrBeWhor5MY3Tnr8BJE21YuVE5Gd4o7kZX2m6zYupmTdMpn5NvQqccExjjPGbaSDjvr",
  "key6": "766UDHjM1VSF1ZqVNyhaXH5rA5DodKBJNvJEz2gv8khuBAUZ1Q8bWhk3PA8hcXHYkMi9F9VANYRR7wbrWhSSw4j",
  "key7": "t1RYLRY5PqoWuJoaMx14MmnXgTxJjGF4PEUq7gzQby5ospeo6sFqnXfrnySzzqqJ978QK7nwsMY8fGLegX1L8ab",
  "key8": "SkyQ9dPzBaKW1s2noDZBvyTfqRforEmkbj4RQ2F4UhsWDknJDjBUn1SK7h1R9kgdKtHr4dR9bm47vLJk32NHBgk",
  "key9": "62Rr6cDALJ5CTmJ1Lf7TXoQorP6WcnbuqXFSmSdfuBQameqdkVNURhbA4hMAtkRQiWD6zp5upsTRwDSPZciAYbGP",
  "key10": "34wLMg4SfCyPfYWSDjZ5Un3Y1ikzuHdP8AJPcxTftEkHAX5R5SwLVQgnPXgjc2CBhGCkhMjQ4SjgrfyvSBCYGrDo",
  "key11": "37df5A1hXkxZvgitzYW4p7sDtUt6DXw1VwaQSoTWTX74cW365ayQxST9atqR4b6D4baA1L5E4z67MXHjo5KR4HDn",
  "key12": "31z8Xn1QyPHM1TsgU2ZMEtRhcwzxaMtEB5WFsFWVV3kuYCbHWHVCMCFGu3bzn8jP2iTBpRnRoWtoR2RiNHQgmf3",
  "key13": "27i2tnuAVjuK5pP8G7tSwQDVzc8UfCk9UqVcr5Z8orjjb8pfQ1YUCmy9orkBwpN9kgdoSuK5SkPVMuRN9mABQYTZ",
  "key14": "3gHTxrouPFD6WC75sQmm25NgD8FYT5Pr8VBaxc4T9ztrxVMtkCrMhhAu9C3h2VUXGByS7wXxKCYiJHDQLGFhUZTa",
  "key15": "4eZYdChFH8TLUziKxhstmM1NfNT8Ur2VEPWW9Mu2fAinRXPCZFSqHLFjYkGpGh5idwU5ngAFAj2dfktgx11deWn8",
  "key16": "RBoZVroMXuypF7GX2jL4Vnpdyiyb52UidttxAmqRnLPnEzAV5tmQKCeNS5cjNVPJ6toCPpEAzMm4CmkC9UCMeUk",
  "key17": "4LgtXyY5QbgRmxCrz5npKh5isehZM8eSneLfsEh2WprJvzMUGmjo9w6JrDwJA8xK2p56foKaNyxt4xFTqD9naAkn",
  "key18": "4efZG484Cm4KngMVvW2ey5dysdQDRJ1TXeJ4UeFH8VTDf7ebqi229ckLh1t67UsEY6wVMtTNFMgvhaGUJAA7pYQm",
  "key19": "nB3HACdnMerVAjyGmHgDcPTQ3uXdn1hcEDkHyVorzdEdUDSZErESwGYDVut3EhXUTnospCFUkFuyRtFNyDEtSR8",
  "key20": "54j5KnwmXW61NpyaBB3DKEsy9yF8W3T3Y5QCy2e3vxLrBmBSjqpT5r32uX175oQbBbZVnPsmkp3mAoYmH4jcBUcN",
  "key21": "64wi3WfS7tZFVgbGxQtWAsyJhampAMukqb3j6Lrqo8bRkYCVhMBb2XDcXsgg8u6avnAePeXQG1hPCurkR5cQgH48",
  "key22": "4aSr5FJdVrc8JwCc3wUwnWFf5KKe7u2rP8RhdP4tCYzYEYmwnDGMyKQbvUGcaGchznuDhhvHyC6WxS6oUgGH4eMK",
  "key23": "4YeN1iFn2RGo4yHuz8RUJr4QFwkeFPpVApteCDNDk8BXVdZs74hkYRywRJAX3dXKfUeh1UWxyVoRZWtjKd2vPqeo",
  "key24": "3NPPzjCag8DrGFeVM1EPguoF9TYVSAAeb6ee9BR9ykF85MBm7xxJunXWLAE8ZnRE25Ya4g3jwcu7V3amTxXUALKd",
  "key25": "3G1iLQjm82bhhihgYzm4hx3qX8Z3nxBi6VeLf1MJASqzeHbkV2uKhqoLFpjAL9PDVP1CZwm1cBM7oaHkFmS3CvdD",
  "key26": "4iTvw4XDeLaqNbvNhPufdF7BqiX6ZKJTxT9pHY2P8QfgahdGbT3K1mhiDk9c7uyfWJzoB2eZAox1RnziLUEB46V3",
  "key27": "4rddZiVyWtHGqNNe5LrWYvu8QqbM8ncDmdP7ZfDk4T6xH7JbHNLbBJgaYJ9MUetF5XTPqUW5MhaLBBCPVAmFitTL",
  "key28": "3ddQaYstmCJXprjXcJknJwB8SCeM4ygCY2sk6yhYYGuHKA2J2mzpteaVKmWzZmF7kSXUdAqbEGe24qnrTBcYwHMT",
  "key29": "FVZaTSRCuQLs4n4oze3anyJ8YawCa4CdsAeuu2796AdHLwyzP7qYrkeh9E6XWE63zqYAzJi2gkGiC3f8Fpdpbyf",
  "key30": "5CQJLnVzvqNFmm7QMaK1aQR7iwiQ4qYgmhvuCdVgziyfDZWjC4ivBLbAFsxQWVHS4S62cgy9q3RTjBWcuV9EzNSH",
  "key31": "e2DRmeuzKHC4oNg15AEk7D2s3c7gFVoUR2zcnng1sJn1S6D1242v7HPdA4PtMe7kgvnjpaDQaUQPZEG8dTTUtif",
  "key32": "2K8WgvUjP7fK8Ezo3BYTyTYnJfNmgzEvDQfbstzCA1HUbycmvefC4kxHTG12KLLFwXJpbdJyEAt32WTwgaq74bmz",
  "key33": "4rxnhKpxWgwMr5iBsvcuipurew7y65S8eR1W7Aw82hnpvBivmgSEWhyyJgpyrTNYNivNvML6BTqiMAeVr6qSQ31C",
  "key34": "558KS8gFScHZq4bWy3XGXLCvNiuH3n5YUDqC3mus8aiq7PPg7ypPKKrLiSdYSXboX8jneV7XDhNyUS59eWfSETyG",
  "key35": "3CtZoUnzzQuhcHodXVXtjGBhT7efUSX292X3unXfXhQVJN1bWUfLmvuNErkVCsgx2w9sv3e5viBJCwSk7HzYZUDa",
  "key36": "4pVkSEWbbTxwJrB6ubYhuwXGazYuukRmACoF2TZAuKGVRTujm1GDiAZcJ3sjiyENQTaennnQxsJZuFAHdgU7rGRa",
  "key37": "4Ed5TnTXgzUXasycS1t4dcH4Bwyo3XTYBxJ7vSKZZoHjyMc35kjhV4paeFW4VxaPiyXUHLrwQ1bCU8J6Rb4221PT",
  "key38": "4BN4oEmyLuJjUY6P87zLMvtUvcxZK54yxFzFkWqt5h3X4aaRsXavu5MjBZmDeGodX4ktzMmpThWQYExiNjhhBybj",
  "key39": "4GRpn64kRXwqz7oV9cojwaEN4jYNmQ7gg4nzByuTY1H8K8AybZBbuV7aTiBto4CW56ahtBtvMFhEkg6WEMBvcBL",
  "key40": "jbiKEXp7Q6ghfwSfb5YAAGAie6GvSmHEETnC5N2uNfjGfSYw3rNkQzpBcEwhX2pTdCzZ4aZCeCXDzMBM6hs4hV3",
  "key41": "3YpqNcdZYfuY1bJv23Y45KHEW6meewL8vE2uywCdj9hCRBXLxC6CfFkhsPTXtQNm534cBAydDgS6M8VYVpYaBvaM",
  "key42": "63uzMuBaLXiTU6aGcfwts9CYmpa7WAKRqRCCCgEQ72zZjqC3oJUMjwhGzs2FRTM6J9U6JkEyjFEe5cDMUfJpwEmG",
  "key43": "3JmTrftbhWzmnKDbL5weUrFmFpC7Y4TLoytbv2Xjw6a25kmiK2bYWpp2qkmJ586KuJ24LAEJkxegoBCJ46HBoH2u",
  "key44": "mMCzQFDMMaMYCBE1bJinVfYByzCmVZRLhK27ejWeQXPzHQD9NEU7fwySTz6R79nsuuz6VZrxiJyvccqrCUaNed5",
  "key45": "4dJis8DUMFugSYMeFkLbM76jjseZwxurFBJhR5HRsUaaF8H267dT7z61b4mcNjiBPMUsFCnTzj5JTP8gYHvWAmcm",
  "key46": "4EYwFDvXJLjGkatMtvMjT6C6g2Qjw1rZ62HVisQdGFPAQLeyqqE235G7bF55mJvYFj1mpNapYd6SQ6h6GcaVc8A1"
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
