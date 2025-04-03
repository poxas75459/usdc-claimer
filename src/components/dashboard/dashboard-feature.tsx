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
    "555o7VkPYkvpaio8V1VL62ddfXSKpZM21K4Qi8iaFg4fr1PAMKXiZ3pth1TLvL4oxiZBTTpDGaQgcMg3GB3SZp5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tx4w5kZdw5M9vAHgRWASsR7uqJDXsfcj3YgVga4dFEW8mBpGxVQ2KrsPYb5MmRcFCnY6dPNZrWq1PXhSxfUp3w6",
  "key1": "26wAAriDGUqeGjiXvkP2pUomRV4CfvwrXHbpvkdWhRdRZ7YkJm3jt3sWhuq7MGJYEZJRBqt395zdiwV3po7hZqes",
  "key2": "foVV9mfwoWMLAnxZfD9ifys1RuNrYCWqWQFh3FJmME6aGxGhMPtLdrda3RPiPBgJjvupycKHNPJtDAbcsrezB5x",
  "key3": "5sMub1EgRofJLfgDp15S4nBxLdCEqPnEWvvxddMWriNYH5QUCYCAEs3dzzjMjvhS9qk8EsuX443uAgcycDCi2gPk",
  "key4": "2x9fHrsoQasEKxW2psZBjBrqYUCxaTQWWktpeuBKCembF5pe3VE9x49qYEHb38K3EGT1K9MV1c4oFt5DjofEHLPa",
  "key5": "5PGLTQR4DBhwa3UHTY1akKwKnUNjpgciqNL7CnKpUCco2G2oY8SgfoYioHv425FFkjrp4hAF2z188VvwdvEmAkUp",
  "key6": "2Zp3kKgE1RVsTyHuEedsEdgUgWNL6hFipRgG2KgDi8pJ52XiXfj4PNWZ55Bt6NAJtTJs8RdxPqzRsqC879afKxZP",
  "key7": "2bjd7e7DL8hVtpWFWtnE2V79SaZtERVhr7pJ9LRdqTWqe3KMfoN6Dc74McKWcFBxUy1g7ei79jvxRHSqZzgAfmBj",
  "key8": "5yUsVNA5UCw8SE8RDHqnx8WUubZhEMSyf6uNCYWDmuEh6ydCTfaZK6oEarChRJ887DQ6sF4bh16wSskGMboQDMnH",
  "key9": "5AbXi4qz51Y5WzYvtkfS3ufs9P2YVTRuqzqHfBrDMR8pKpL68ARYxU4AaQrohmdjQ1FJx28Nws3dFkuUYeYK7C6d",
  "key10": "BMKMSCyDQhXqHcGUWtJDEotuM2y8M2bMh9v457HzyqozfwUWwyhQKYFwQEiLJE1N96n3yhtFajJc3Ntsc9JGK7h",
  "key11": "46Qwc1sj6SehzMiiXvcuV1xQfoSwxfPGHorGjfG2Wxry7d6ipcNRJRxVuG6Nro5P7pqrqTUqtt5bhaYF6pPDM2dw",
  "key12": "5eb1DYEFWWXfY7QGxSC2MXPk5k5xAQ25xG2XGg8aRNyGtswMw1DbXR3g25Y41UPUd64zyEdJDTK7JmNgLDAcwSai",
  "key13": "2eu7N9JQysxStWntdYMhfjHL9sjdUz7evv4ysbMjnTLDfCj3Q2dcLJ3TpKRAY8issqZHp3qqJRkuMoLfD6E78qDr",
  "key14": "3o1i8pH15NUdjKEyzjvAFXqxpvdbKh3cKL7CPNmA3aFYYJrwmu1rJ84yHwYJ8Tvf7rSKv5NhRBhVQRLyWRBeeqfx",
  "key15": "65KbmHA1owVc9mRyMyyTbae6YQ6LmK2b1MS9sEkRahU3JHG6aSSK9KHp8yYsLmi392X75PcUT24DWWLdn8CphbB4",
  "key16": "2tihPnUCwnerGpjpoWKP3NxW5HHwzhzHgoKHYBHgDxv5QRuznuywfYcha9HM5ijKwH94CTKRbSwYRY1kdPjbdaif",
  "key17": "2y5akDJMvHJKw61xwfTitL1RoCtaMbAMi3y4yKCFN4e3WCgn9ypUUS3HDFBmbGVnBM2vh3NDbggQCFPXKdQtduUz",
  "key18": "e69to3NNitgzCu169mBGnpPfNzgz5YQ5RPkfockguBzMurjNMZnjfiKPkuNKRWGKeSj4Pc8X1iid88naALp22S8",
  "key19": "2HUyP4jJXvyKXG7PyCJY9D8pHNVRbzW8NEWvSurL6qwR45eRfYMmvbpDRidPNvMB2giEjY2xT7YogQQMFYGno8hv",
  "key20": "3YZSJsmnga25sAykJ5YbSw17s3UdhY5hYLDcwkyF6RbTuffREP1W6oF4YFk6UEbgmHvrFJCuWw9gyEukRs9X64VG",
  "key21": "2NVdY9aYAd3VR33Tjy2skQaVA1QjfCLaSqHB93F5g6zwrBU1x7FGERWxaZSFBUWmJpwa2r5CPctoPqApCqiHxPC8",
  "key22": "tebm19r37hwZviDe5MnMDn64bCc4hVfuqo5FKS7DKcHZ7rycEn2ahzsbWFmnWu1CQJYUNCaaEnuZjg8jvLUTq2L",
  "key23": "2guNk7gY68dq64cfYu493ca2haEJuL4zvwvM7qMGKezEv1Q18ge3z9fu2LztrNUB9GkYBH1HGdxzpc7iFzoGmjPr",
  "key24": "38U59ZyDV3ZyPm5mePF1Nr2yoLwNpeoxrowvC6reeCJUJaAjgynWeETSU9vH7YgU86Je9KuJFQAV2je7vffE2egL",
  "key25": "vn1RVKXekHn2CKRoyhFz8cD5K5C6AbvcssPPRQSNDpC33qagmXT6pNtpN3H3pg4NUZtvRbFXib3cURW6wf3AK8S",
  "key26": "Y5i6kjYjVxR3g7UAdxHa1Bg5a5Dr2tmJozXQpojkBT1xeYDA5yxDZVkADTGGppjb5TNbr9hrJjUE4DT6jaBZnG2",
  "key27": "2GE5uRy7VXaHvB94XNvr1WRgga4UwigWmTLaECsoW1WoLbqP2r2nzv3DTrg3QMG9LYQtaRuqeJSBDhtQEtfdUvpv",
  "key28": "9awtVEXunHqhLTEPUUBGBEWxpoWGW3xnNPQ6JocYxsS3bhZwKJ52XYvWrnYytLGTFSV2F7ZdPHQopsMjSERYEpL",
  "key29": "3MVpDWxqL8ptw41UZqrLeQzyj7786hPnFNE1tcxAys2LK9AMj3AEN1cTwUbM3UK9VRxBJeHFtcEsNbB2dHduAG84",
  "key30": "4RKTrnKRnUUu47NLXbNL3JPA3FCaacfBPTfyHEJ8Ja7z87F4nw3QHEtJLSoWzHPVz8YK2FWtuq6nQQooEFVNXsJW",
  "key31": "59oxL3eG2NxX55gn1deNru1AN59Ny9RKb1VrxYTCBJuTB1F3NiXoNxAh4Kz8zMU3FzSKpxKLwwpcjRAG3SjcoqRb",
  "key32": "wFiXtGGzrSvx4V6Pa4VM6BXHCL7czKvYFuJwZdm6DiR67b779u8SfKFLrr4gBJF5JiibWAtEg8mec9onXnQTTXg",
  "key33": "2zYAHee6jXuFhiaJiiNHKxYsuzoGgCpGGSeg6gxZthrELcZrCEnJZqvCgFSgQEBqSpvBqw3rxWnEwcQJZpjmQWT4",
  "key34": "3mcmv8mGMt453cDKeSPiJoJRhVkyNuA73oLK1Q84gqyMv7Q9GyzL8m9wGuhnZrLJAr1ougAykvAh6bgmaVgv5uUm"
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
