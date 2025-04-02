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
    "DFANSLKVsNYyGeFqzkKVKoWVvtSRFBNGxeJvzE7nu5YBZRufCpUbasyyBngFmk8B6XHLELocYhLgTBgHopqMtXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GwBG24davAj6zHPzfcvwaswAjiBN5sHR6KeVxqhE758ZwqVaZkpEmzyrbYK2jFmC2rysthKjwSCrkXuefQ5nGi5",
  "key1": "5D13sTgt2Vtnm3jXH2ykGtyjU2L53v17AZS4fV7EApQ5gK2rte5Zfkiz2MmTDZX4uGyBk6dY4ETL8is5j2SRQ4Qv",
  "key2": "3xGVzMvugYdVyymmKWSLNy8fb3wg4PQr49yVdimHN7avPZLmfMJXhzhEkroY1D7aJLVgcnGxyjuNQx58CnH6JoQF",
  "key3": "55WremYVbHy2V2qZfgVQE7D1SLue8DbgZwzdjq4Q9tjM9vQ6SFkLrNNENRGXyjTP5iQt7AwV263bLkSwVEixgmy8",
  "key4": "395nFVMY6PgTdD6DQQPeUyFuAJLSdMGtfYRhgEm2kfZrDwtQxYJXomoYsMY9iNfarNkS5vng8RL3LSUvR79DoWpq",
  "key5": "2oKWBpjkB1Mgcyb5Z7YEvXzSUBoHB9rvaQue5m7DmZczeVZ2dBGGaNtUXTaxZHcs38Rmdg4nmwDeEBwwxXBNjrWN",
  "key6": "kXik7UZiraxBaUGSEsKGhfcSTtfm7oxNtGVbSYeWyuib5Kog9VKZEe4d17noQMsAK8VsnZ4JHx29ahDMVntXkRE",
  "key7": "38hZGJwawyYjU1SpKQH9x85B4UPx1QBzR6gB6RRHPurvzG4hyKsbaSgwpiSUhQRxS8S3zRwMYYoqnDjhqhqY3f79",
  "key8": "4rdoPD7PJL9ZaAc45KTjGSqaErDWopPeWnXDcahj7trToHBpsUjHmND5H6RwMo6Ucxv6Q7vKMBPPq1hQ5M5igzLR",
  "key9": "33SdpaJioVXw9daW71p9gkt9nSfC71SD82qP7fs6kh3PMwm1cqpt9qJvvSPUbKkW1cS4tCyohEFZ67j16CMf7Pse",
  "key10": "oekwm7AcQ7MhLqs2csPB8TASoSBFRtSeZUGkwCKTquSYXD2jPyPqGqhqLBpUHAenEWxQuYig14AdwRQc4ManccD",
  "key11": "4Xg1k9A17YrPnDjKZeopUq8san1qGq8YLF3pjQMxVGenvN2nQ88efTbN3kKYY6XYSgtDsDKvptTMcwFFpMVY3yA4",
  "key12": "3JCGnxuCCx79WX5gxrQfK4F6dAeRSWVmunuPeYCzCGxx6N2gRkCsoRSubyRamHt3yQukunzJpS5DNukfAHURtWLj",
  "key13": "47wsoxo1rLq9pFoXDVjqoVcGVDaWArFbPmtCieGYqiN5jhSGt3KSBKfLVJAzwrbCrePD58V7fQQwHgB8f5UWsGfh",
  "key14": "5CjdhJa7trv1VEZe7yvZZFZ2S7g4DJPuDroe48YmWh1QUFhSzYRDWCNRgnBdCZYt9WZ99KTdSSGYaxW3Z55YBM4q",
  "key15": "52kAW24KJmfFFAYCi78NLzhHSBW6zuHja8S5a13yzEEUZAKRNTLmF3i1JE7YrFYVxrTT6p6JkKoDzAF2H7a9siVq",
  "key16": "2X5d5A9yig8Ku6Bgi24FhsJ4MYPCMBP5JXf8APVfKieMsPLdFx3h8H7Q246cdbnykLGRMF6hezU6hFq59kLgREsD",
  "key17": "54GaSTqHw9X9VBSB2XyVsZK5hemsU3Pw3jBiN4JCHTn5qToUVGw5ZxgnM2aJueH3ST18NJwtp8WBWvF93qqE5RVi",
  "key18": "3wGiDjTXZn7J1GwZbcCeWPBSK7iaLz7PLHZv6oP7ZfFJrz4mGNwXYdp5pnzkrmF7y2STHzY5n5SKJknq2k63YL28",
  "key19": "2zHNpADGVZ4mezh8ff3jzoZiBfdByDNS47uwgowhihX73UBLTXojYCh7GoJKiFp6wCSzzoZ8EDu4TRPfgJFQU47g",
  "key20": "XF2o8RTv7TjRhuwbcb2J2KeaodhpmHhjYRLhsSiM3M321MEhBLBQCcAUDjssK2ptpZBXj85uTQ5Y5irzN2YnsYL",
  "key21": "3GiwvEzDnFHeKACbqvWrUoKcUaSnfFbFge9R3pFYaLc4p9m7epCiXsGsU8zZc9eAfQT45CVqDqYVbFvqKTQ8Tvez",
  "key22": "4gFksxn25rx8PAuzAcJE7F14QZDZsetsdcJfkYc3MkLa1owaHDd4z9tTiMFFKr2Yy76dcHn65evmZfT2LUMSfcrL",
  "key23": "2YAXaZ7LDswEyfevNjAMAgawe2ZAxNnbJh1hcX49ADBZqVLVY1YnrrfVgTraKkpMHHnYRknECJmeSyGymzVbrjwr",
  "key24": "SfXutVorEXUrXkFpxdopBHKKUsoyerjG1BL1XWVFXV91D68U3ZbTRaxxpfRjWoitSMiLpVz6Gb3rn6dHFVSrwka",
  "key25": "5vLL9YUwzBxY8gXML21Wa3HUX71sRqVcjMVbYgiQs94HdHv4pATSnLbtWnw5KcuFiyRfHbyEVBQsyyw6KYpXG9Qn",
  "key26": "QoWPBs7Sed6TVgLZ7Q7ctNaSdrcJ2dCbxf2E1SBXUu8b9FBNKN1DPqNBWYHQvVY6hf29HYKSubECiqMhWqsBzH9",
  "key27": "27XWMjUegj1MMjrwajap4XWA3Xx4pYnBN2sQRKkzwBoVT59dwiQVoiMGYYE9LdGQ71LQMaKSynF9f6tLAyRSVWdf",
  "key28": "61KHm856UTxPRCzVn5Dne6NAAFpbatvjUGaQCAeJ3TautRXq4hXKkd2K13kv9YRNVQtAhtuKKeFzZugqLdHTa37A",
  "key29": "4WzC2eXPayjHjkhGfucG81gYWNisNM1AZUSqxdYuDecex7W8nCE1oboEicNujxmHhmck1u24w7MPc6cbUpQmk1Vb",
  "key30": "eEzwR4n3So8ih4i4z4rQrcfnYw8A2KgEEAb2PUW5VJmrVQU4GqyxR4agyTTDyAPMSEmS1oy6d4WBPki3B5qMXqN",
  "key31": "AA7SrE9UHGH3c5e3hiqyXT4mNAyK94fniNVN85wwAdPi8xWcvaL7qt3ckf8zU3JDYj31xx2XvBS869oijmx2Wfj",
  "key32": "F2vFJR3i9uiN4mJuHtcA54NJr14WAwZoTUNGr4ct6rhivonyGJrrz25hwWe67bC9uASzAjiuuJRGTAcG5shKhre",
  "key33": "2ZNvBHMuVQXYrvcmrDC2c9cpcEkeWtPKU6rnXDuTjZUYutFc5yemrovhYhtMHiafjQdQN4kXW1JKBc6qXMfCdxmA",
  "key34": "26vrVgVnbSjFfeKn1Far9ULqJ6DTDvAeR7kYkJ9ykfPaviLtkRuoLZMhxu6AJ8C68rnsHwaZGnrfyFsd6s4NNRxW",
  "key35": "5h3i7UwSGr1pZGmgUm3tcH85Yu49UJ6TcGybduknaChaL72vjuHM4kF7oGYyY4ScppjjySbhszBtg4bRRhuGRS8E",
  "key36": "2qsReH9VxYggUG4tEcgpGRZ6Phi84euLybHRThCQgDuUPsqDHJQsNnRP7NMMHLGxJv6ENawG6fgjT6b8NPDGBAb8",
  "key37": "3v2hmUYmpj1Gc6HcFVEhR1VGHeZvZubZ3xh37ZN1aQX8eRgEywrU3opTzbZwpVE6W8ZpyEgs3JDP5ci8e4ZMMmJ8",
  "key38": "2a9cLdSoVdWxmZxLNtMBsUXUbz6VqnHZuMM9SMXU5RMToneFUfaDKEeWzZTSJkm1UQy6PwxMkbafSNZ4Sx96V4CS",
  "key39": "2f98mgd9fCW7m1ra2FEwvGYhoVgAvXPirWekydXBNgkHKxdQZG3oQmoB4XZxZcT6nouH6hQSZH5t25Ky92afi8z1",
  "key40": "3moXW9Nr15E2zGw5RVWhJw1L7UtvRvAR4bkcSGjdMTzSCYvHuURReH2RXQsCjgpnGfT8MYhR4H683nZXdPgo8sMr",
  "key41": "5WqRp18iecNPu2Fi8rmwYnawpVEQngh2FLciTvUEqNvHfUD1DSU4chLsmT8fALGEwCSdbxFmJDtar6MQMnYoJsMm",
  "key42": "BwfSnHz4KuYhf9ruQKheXe22KHRJZc3rVUukGuv8c25N6hAi2tAUR1f7Ce3J9EVT2KywXPdqcYcberQoaY2sSJx",
  "key43": "wUhC2hutNAG937Zhw24164gyhshqX7HLFKQVAMCJs2JgAPAvs658qtAmeuGcZYdap9mRhAfqDEyBLbkQJ7ztTgP",
  "key44": "5pa2KxHTbAEcAe4cEcNbrLymrsyY6EtutFRxyVo5w8nvzrtucLk18Bz7j98B1wWdo4kWLaBnJQ8hsbETBYTSwxk9",
  "key45": "BccqUpWdVixtzvKf7c7bPFY8zgNQHxkUXwC3YzjsyyfdD6NDoYWVbdTAsq9xhxfy5r7i3jtR4xysV9wpeHg8yrx",
  "key46": "2p3zLEQ5EQ47YR459VYsH5KNkh8t93V3ZeNiT26XsSu55nLHWTwgfjNhuTvCnykRRos6DC4tHbETKarpEe5dmzpp",
  "key47": "4776dgn2nX8xUAwRbej7gCwhPsw8Dezqz8Xh1zyXe8Hus9R9FDBFd6Wo4mbcw29K131aaArrQzEGk4HDm3QtPK45",
  "key48": "5wTqtujs9ByjT5d7pBZ9LAQ3HJXtxQiwTQLHsFscbPAXZC9UMWdH1AjctpGumJm8B57mnWNfShZYqj8AyXcDsp6p"
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
