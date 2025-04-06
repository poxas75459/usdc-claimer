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
    "4wCVDsE6XLSjjyMNJRUmoULBWHUNANLa3o9GQ76JUw6E8Hv4So7h8HWL1JKp5umPEkuKF2ASsju8KgKSyhyXNSvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPAebJXYJF7vRRigen3smgtxvocboVBNKcntpJUGCqdSCGU15Qog8FBnXYi3PnFu9jc41QSrN6LCMzUopYWx7XE",
  "key1": "v7BbCDy5KRNSfVj3hCoYQNVytxBur9EHKWXz4kT9KcixaVGc3XKtHGV5Tut9gCEh6mJdwDfcLvthS4bKhQoeYJy",
  "key2": "2JWW5nGkPx9DuCtdySjRG9XJGSBU7hJnpVZhtXU7Z9BLc5VixGXCxemLTV1LgwUyfYSZ8yYHMsrb1thbPK5fAjAV",
  "key3": "5cCuibQMC6yP2SVqr9na4aws8N6RYiwtEMAvejLtE2LcbYVDhE8yGhfqPVySo9btiojrDqEkWxzasrJXUPz2Miur",
  "key4": "22gRCNA18qrLSaNLRubWGhjKLrQbNWoiZ7Fa36rXgA3QvyuUcZro3gqF81mYX1sGjUsBd85uvyfwwE1QdkywSTT1",
  "key5": "a9baMkDaBWAi5Hbxh3TDycpfPQ8eeESLrcmnzMjksNuesPX2qQE6uYjhLRrE626d8QbTMmrKURpw9r3p5LsWBHC",
  "key6": "4VHLCegQ1QRrd6Lmv147GPaPYdbztCUesHJvnwMJyE4zGYeEfgJbads8XKftjmeua4C4dLS4TrJ2YpzxV5LG7AE7",
  "key7": "4P5ZsPvpUgZNvooFPjP5AZ2ZYXisr26KEwHbbpJTMoSEFfiBivZu2sUqXYSRp4tUfzurXix6idUrNKp2FGJyE4SK",
  "key8": "pX8LBV3XyjjZvHSTcSJwsp45ZpWXFeUMJ6MzbRQZPNX9Zr9ouRYYjvMN2jL8mwyCQwMV6z2bEcvN5j7E9DqDaF6",
  "key9": "2ZQ4ZygeZAahf9izWGEvALqnNFr6afsGwfJE23kiKajknwNLMkN3hWJ9RnJa9pmPmGd665F4ozMwULgPr5Q1keCz",
  "key10": "5LU3FpKoNnuS22DzpLrgKSYQcAyQXHCzREfjsDBNrxRUS3oZix4ijbPQer2uukLokaYBqjChXVxdBCSDseBibVP4",
  "key11": "5Ya27h9weUNKVP5NMA6ckQnjqKKnJ71CzKevLJqVcnGgVZLrqr5XbXQYrjY2GGeEs2ttGSJvkxdeaSvMFG8r4X6X",
  "key12": "4H2wXJRCZtfAzMarH5xaKPQCXxRPhgaUnLksyk7KKCkYtsbRts8At8iJxwFCrJdbh3tHqQatHYAAyGPYDGMuV76i",
  "key13": "2TSUm3qBedFhg4VG87w9qEaECm6j5kMFwXqvHrBSA29C26PAjjwcwZeehT1hUUwxNFhkHj4pMFxwq9hYhzJ9AjZD",
  "key14": "2XkhqVGaZw3BZVcJmziKH8MXaeL4vjoedA2FM2UdZY3h2cCqoPBKFxGkMYsFcX6cqQ6b1M2cW6H27USuQHwQ43zs",
  "key15": "5yJMsq48yuYUqMDrKat9abAnS9Z5phGSRqzMSCMQj6pTD6NtvASyBUz58PZnf4g6tTbvaXMcDtWiJHhJwqDpYRQx",
  "key16": "62H7GHf16gn3WvcR8ioNsnwmq3YpkGxrDBGwx2QMhazKfT11aqekpyoRg8Y3Zj1xMaAoD7GodoFUQ8WkfHkuKJLB",
  "key17": "2rZWFihYmXYTE6aWUpEnoYy8PfzA47BBFh9Yj69tRFjZmP6taGN1VQVrDhj1yz3dm2AhjnHjQvLpqZpLGZApteWL",
  "key18": "3d1Ytp5xyKJP26Q5m7x9ozftrHqMhzaobCrbEnTdZAf4Xyu1zP1fC3t7iFMtfRZ1MvdaiANM9J5qUDzohXEgLWXF",
  "key19": "4uDd5yW6r9K4orFRajT7hWM9FurZxefmQpn75jFMthCYqaNt8BWN7tneSfubDJpnsxZpwL1go4kCRvNtPpv5Qbw4",
  "key20": "3m6njbYGgMXcWRWRqWyGxSvSbYN3rhHktsrrV754r3z8wgCUx8onKV16SpWXAthcpHMPr1C7cdMDtfSVEY9AXZEr",
  "key21": "msetePg2eemNWV8KrfmyDsU4jSBTs3VMFfpnYUwJhmMgSF8af1AnfQNFJpQkkWhzHVPaH1LeoHhPYNsn9zw612m",
  "key22": "2GXAdvxo6EgqFMBLAxzJ5RBsSYfanxkijwtEteAmADeCyV3fAGEsSw1t7MS5LLpiZFai3vyKk9RHroDwRB1sZGrw",
  "key23": "3fweuvvZTmex3B7Jnw2zqntjp1hk7JnFMM78TGTSjtbhaEQRTb11K2wfGBBaLHoY6tFaEHQCRQ9r473cbw8hMgb9",
  "key24": "pAMeg2fdp8it4jtA6R9buKmFUsoupE5PKBrea43Ro3N43ycQnwm8QWo6RmXQnYSGe1hkh9AR9n8c2giqnTEpAzs",
  "key25": "3KX6WVmUpUwTcypzNLTbJePXWVwERLpgw78EFEx8CRenSnyb8PcBmb1X4wgUJDRuAooxVEdSjvFpb8SZEBtnfQ3j",
  "key26": "5rV8hDMGL2dn6PSf7SbYwuVN9CHrpF3a4hoEKMZFZ5x1tEbnGgeAGVMjDy3QNpprALKpRuA3baieEZzdnyqe9Cvk",
  "key27": "QVPfwyaM8ot3RTZysAoMVtxP7JNRiF6hUsv3ePhCEnhDy88YX1dPu2ZjCTJh1XA4RnAAptxqGGRycjdJ6u3WLHa",
  "key28": "5EDt22EDNy622VUVehivCBQSE9DYYjLYUQMkeXrmoYENqoopeoSUF9qSdCTW2R66pff2YjR26o98xfFWqL2Ae65m",
  "key29": "3HUAuyNAStPeUvXdTFYfLG4Czys8AwacTcvYkjkT27aq1DQ9QFYnJ5xRztLtJGxQB2KHU2p3NRmmP7a2eL6e3H5L",
  "key30": "5iVi4im77qmMBCkgPp4pfiTxTxEJjb9i6t5NvttJbx9iXoKStzMKcxqD2e8iWge8uu8eKMvqDUuXbwVj3dR9fvGA",
  "key31": "WVMFfH7Gqfvi8trqDE3FGSSujkoEASdcSej2WoMEMJsdRh9a2P5WKStZ53r7QiYbFXKVYA4GoQTLbAgRSXvdwji",
  "key32": "5PKEmXZEm1WC2ShsuwwbejXG1C6ArTHvvrGwj4XGd3GsuUcUfUXiegiPALY47KvibwtmCrKTrBKMvu64Xk74mF5G",
  "key33": "5XAXEz8dq4DEDofFZJnX4bLvuWpgeM74goVh5RvFfcRhpABG2CHh1cENBtT9dFK7ypPDQ3jPZ5CiHQXss9UjLbqE",
  "key34": "2TGqgnDkz4pMgaZHeh1fKJFgAZqzgTh8FMyKRzjxm8KQhCou2d4fZoLfhoT3qo6NHAeXFAZp4KnFnC9QiuGBBNUX",
  "key35": "keZmnHZr4c9hKLGMc5rb11d6LmYrnRmU5VxJGNHQGwktFefnwXxdnycXkA4zWDf4oHYyZx81Lx4w8kZL9P33ZHz",
  "key36": "5RtKAjEZ4QAayxQYCvudysYZrNiAs1aEgj8iyXnY2dKVtJD7k4P7QffPLYzdvu7sMZbKxmEuTF84ezqLbDqqGkQA",
  "key37": "41xgGNdc2ekdhyBkkxpUDbVx9pCKX1nubGw3xBHDH3c1392vbRsyhtacBcfhf53z8rck7W3qHqwHwtivU8Xfo2Rx",
  "key38": "2RfsbU3UeuisHJF1T4Sep3yRrYEUqnpuCAFYuBhQyFTbea13gxJmy5X8RjbEmg1TbKPkSFrdiFWQrFiqZPBbxe9g",
  "key39": "wrpWTf1yNrzWcEwFhKbKBPFfRN1WZ2CtR3sLbcaEJ85vuitokARPfCWgf8DYFMmXSCNmYkSCUuh8GuZZbYg38cG",
  "key40": "5onLcxnM7eXTFdZh1Dor2a3tZLpUjPJpCJVo3PsKninpue5Dqrd6ECYfiVAn3ujTcT4t1wRW3TsMiwZCXP4ZbCY8",
  "key41": "3sqgiXEaJaV3oxvJVRiZ7GH7uzhxzTssZ84C346cmnVpxur7f7UuaRAC8vvFQ8gGS49H8k5DiAXELPo9ChsUQjzP",
  "key42": "65et31jMRfjsqxydWqmfEhEAcGZ4jQLizrYFP9e3Zfw5cRN5rtgwDQT78WvrNyQ9iBWkZ7HuNm5mgQckDKPqmjfj",
  "key43": "2yF7LsNeDwKtu3DUKcPqozqzhWZ9BgDGkjtweMoM2x6ZbEKG9epYSTFfhzDpcDec1zLFMfiuJ7Za7JpFDBPTTqg1"
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
