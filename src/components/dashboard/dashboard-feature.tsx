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
    "46M2JtF15yoB3mP9gfo8u4qGgFufz3Mie8qCCz2eALgeZBXHspnvbYHJNufJ72dD27GyitaEAs1CeXSQYJZ74jep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUQkKUqWU7woVBkp8pjhVCYzJLs7sJrm1jxs7NQb82gKd3XfPPQ7rYd65HHEzgKUW535NKSLumb8mgYs1xcbhN1",
  "key1": "3QxVvbZwUNCBBtvEv9fdMUpGWs1deb8CJkXfMBqDMnE9DRjYR5TQr3S6LK2kWbphktwsk8BcUtwRC8xtkzDxMnCh",
  "key2": "3qgWte9vfs39s77PEJGFmafpHmqhWknzF1dnXd3TqAqhXh2tPYLmjdEth3Nj8xQ9AMqQJfB9abHJdSEJoYixEcCQ",
  "key3": "4MW4q3bSER3dEJWyBPkoRU7K6PLXz9oEXQgZ7mDDRw8B2LwRyRQEs6rnpSu2TxFge1y9hPTrh1i6sCCcNjVTD6a4",
  "key4": "wg7VoskeHgcN5vzjkReBZDCJNJWjuTznPXmKJgKGGUqzdamPorqnEYG8wZQPUTEbKFDxKqv8Y3eQzNqKFkNieAf",
  "key5": "5Xp26oPQnvPWUqgLJnYGim9jo1jreYx8SjJkw7Y3WZWhP2txseWUzofnMBTxkVsFaEN4gVXgRknCFWUFFtzf9TEM",
  "key6": "3Q3r2HiZQcC1zQ91URFStBuVftH8nRXa6hukZimbjYMUQzScZLNBxZsstDj1eLenf943ufjQGcPcnjQBAJ4odQdz",
  "key7": "5tnHykaaMxHJf4oDhCox2n5hFbkyBCT4h1r57Lyr6mMUvqF2jn2GLShGE9uNDSxmcAHGs7bzeYh3z5tfp59ERTdn",
  "key8": "66F9SkpinsttdzyHJpDCe5i3SfpQUCmubiVjcv3NmykBKNtr7zSjYWDEqt2DZXMcAnxXSQnGRontb1v9im7WMvZD",
  "key9": "2yRSFsxTncLFnu7y5aKGb7Td2k5Anz5WDSiM86Gy28XQXp9kwBVkXAdQNCgpVrJEsCvYxbZBNs5UFb9WCVn9TLhe",
  "key10": "3CNddWyAwU3yEh5s5VuvmyYneekTv69DH18eSRkyf8PxMto3qKe1iMxGsZtTd7picwGRrJxauNyYm2fiNRr8uavJ",
  "key11": "2f6mxZ5Lu3JBRJ4oa4MHuv7y1CiFbSAiKiJXXjCCoFddoSB4jx274hcVy4tiyTqoDxrbawTejieYnbreibNtcKFE",
  "key12": "5PkxWH4XGdJG7JwupHVRVi6xTL8CvLts6s99wH6V2kKfc871dqHTJ4yf4B3a54DhAJqkP5Eh1vennwUTUwiMsxnc",
  "key13": "49oJwQVceVqbZeE8XRuTz8ys7a7WpzEdHyAUPFn4sRSyssQ1DRFmbh27tfbPaUem33MCRgQodJeGX4mXqbvGkfuQ",
  "key14": "LRLE1jjkX58NFkcHU8k4Qdb7dpZqweehAW6MXd5hJvFSFzE6m1GG6UoZw4rbRfdZVAa15NmtxXfVTLFGea5JYeS",
  "key15": "kfeti3fXXop4LYEbo7RE4hL8196SE3ULRrBq5GKZvFS2K7WtfW7hSiaiaVf8LiWPcrvZkLzCMNG9g35B1GQXNy9",
  "key16": "4YoEdmWzsAt1FwjrzZE62euVFGqfDbyvtJW8WvEymrr6vmqTiFkWk1PS7dZeB87pLpuWauUbXypLjkxKK9BzsEUz",
  "key17": "VzpAEVnsuwJkqaVoFyu3ce4qKPofDp4EZA2tKddrEkfCjicATPRouE9GSi8iYkRnv6siH1eyeHMo6sqEHPuf7bM",
  "key18": "26Z1qJFTfM7RuGyM8JFwsdonKn5sihjHHhxJ4QysnnE6Q6JxE8xqPB5kR3dfzMSDWFvMosiBGYNw1mR9iwqJTycQ",
  "key19": "5zRVJWjHcBDv6C5abknGKwHnktkfB6DGfjs6NMPuKo2Dr89HHitrDb7DTLm12sSwth7RG5cczD991Q8X7jj882Lp",
  "key20": "67HtpVEtf8ReF75NgHVkMQcGHU96bYTmUQfrz6RsTKkF7MFoC9mzwFhiiznEGKkz82m25YWFCm514gdoGAxV7MEK",
  "key21": "3HEvQtScSFsPrmeRZsR4RLJod2YeTyEVBwNqeipPMxVKpMAZQQnVzGvNctWCBVsy3eWhwVHYunmK9E2kmfso9qWL",
  "key22": "4zwYymnf9LgMQR47cXki6NyN6NS87HXfweqgSDcmC7gEf2weUDQYP57TnpZTYEt5fqM2NAsX3b9SS5CtrcyfA9hx",
  "key23": "2XvR8R6JTsyJDSFhLrqo7ygrqDrwXiupBEMEUonsTdXfT88LdSZ3ftUH8dEYtd776zZCMuQCPwxP8WumBH1xFjsS",
  "key24": "32NS2huKnCMUXpZvv8NYs4HRQ3CJZ4KNFs2HTtndbGs7YZEftspJzjeTUAe7JeWPUNVfeEKAWmznKcathoUFMdpe",
  "key25": "4fN19yje4251zbW9RrdekFdRCYrXbihNeNNkaDLZVj7GejAZ2dFy8Eeuftbw1CRHPGAdRMR3D5Ybpa8pjAZuWvYj",
  "key26": "35csJrGqaqeS5pNbTjbsB9cduHjR768saCkyb7jWoWHXyRZxsehTXtHvtAa22oBVWLa6QPAFcyKbpJRGNyUZdgjr",
  "key27": "3f3s6weiiwRbu5v8qfZvh1qwKWwS2EzAoWRcVFRiF8v7ARESCTmHpVminTjgwQk9TZyjqMdSyVGRfC4LzqH8ifwE",
  "key28": "3XRgE4KV6JLSaFeNdLy5wY3BKS4wd41BWwo43V4TrXFEKH7bkLtR6ERbyT4jspmtCUbFTMfFg2JFvbc8fF5ZVC9t",
  "key29": "4M7u1wpWbRHaQG5N7hBcK5BY31zcCeduKhZAkMifvakd2D98n4UPmcstzgf3ahgLHM6FDQQXC3HU482JAHKM8t5W",
  "key30": "3jaXqVuUKKERzKZ1tFc4cUvqt3zUYhM2N642mjrXmAFHRq5Wv1s8o3118hTNhJDHqtHdkVgqtgydNLKPX9pK54cK",
  "key31": "29FBdkJggNYEhnKmJLu3yoGUSr4Abc7dEiHL8cQj97LVGv94xVo9QK2KDMM9i35NPkJzb7nMEnZ1xC7ty14Kg7Sw",
  "key32": "54nmeTEWJkaqk9G4mY9Rtf8ZavBseTr3dt2ajnVKfzsTA5KcJmM1E5SCoio2rdavDFzhqPRv7HWqaJ7BpLjuQCFD",
  "key33": "2PjbtHG5M5AdhRKnoMoi18y8va6v7neU5JezaYNWST8tpYQKEzpwD858a6839K9ownEPazAHXMQUMEtmKdV82oCy",
  "key34": "GRoFn4wb5aSYAtwDuqTpXAGcRsQ2QPXg636uomeNrwKZjW1CdQRArESJuFYerpzbDye1tCeKW1MzQTqP5eCgVuq",
  "key35": "tC4GVUGEpzuuqG7d4FXgZe8dWeAobzX3C4jXupo7rS7CcGkje6ArXE38QQnnDXM6bZexAdtasbJdoYgYZZAPbBz",
  "key36": "44MgrAf1drZa49crMa9pdZD7XFyJPqvtNTiqr8DxR4o7budW8utJAiL3xYLZKDDRrTY5RGbHXNMXeLG2wvnW5Ygi",
  "key37": "V5qNgmjtPbacEAi6jqXybEgp99cFr2nCH8797cH6eRdXrRJjB1saAfGtRufQzkzU7g5BhtRkBrgJ7npbMAjrot6",
  "key38": "Sx5gFSzLgKhhhwdGpKgoLyfovcgGpWKeXx5PqbBvV3qM2iBXyhoQ1d1CqoiiP6R213JcrpGPzqTWEMNwC18uywH",
  "key39": "Vwh66zp9doJ4SowhTPFuMwUPcHQ8Zr9YSUcvXLWMr9S5AAtzWi7TL6jKh5r4665A4Squp3xAyn7fNFcHZ7RBrra",
  "key40": "3CaRR3rz8rGxynB7Ls6Zc5augyMdBUeZhGqFdtbSg4aLP8pxLEdoTtS4mNCnzKzipAExd2cG7mRzsaMMceLKkxBy",
  "key41": "5NdPgRY8zSyf2qu3D2JQ4nDU47pJGvwfq9zDh9DUg7tJqZTGmoDJgRmH2M6GwsWQgwgnRqFjskZF9AEErAF4FXfT",
  "key42": "2P9CHaCgqKDF7nzUtNTH79noTTiNSroAgNDnc3RzSguQuHXbDWeuZuYchozoHmW1KuCk9XNt7KKYTBVvawCfTs9A",
  "key43": "4LZJGAhJeGbxSdquiY8hf3TQhDgiPsTw1NdWE57voQrgvmWFV7L3madBzS4QeXzvkz8GFPRNXcrziaHGDUAWt3zD",
  "key44": "3sWfbjcZGFNwD96bQY6P1FugGLpj2UymrZoDKsvpUKhbzsEpsKdrfAixyN2shHkVQTc4WRDXnkovQ8nnxb8Fj3cV",
  "key45": "2AzPu3rPf3mJAAma5J3hMdB8uoft8MMP7f5J7rhYBDELzP5vdFrrv3mMEUtT32E9NFLcADEELZ9v9TSu9zQ67PpJ",
  "key46": "4R8c9a5v4i15Tn7uakUb6CBDy2bnCEiWiG6kjnZvKN24juo4GQJGcoPQLWQ2bUDY849mswW6hsWs4HnRoR7ZNrQV"
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
