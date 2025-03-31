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
    "3F2QJ9zZ6Ww3MW3tAGxJNUASYpdchXVVBETZQo4AHso3vtC4XDXqNLWnbUNttVFR9JAoc4oELW7gUdiAiK5Zgv5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZTYsSgUyuQKFZgQhM8jWwBC6fYt2EU1S7WvXbehReaGFgsMzQdHa8XD7xFRVTKcq1CJdayJ6i3bedXjhNFpRJm",
  "key1": "5t14WFtH4tVkuvqARGNezjGpNRPCvSdacvJayQWEBE2iUdTdWkwRHgu5wpVXVa1g7pDjrL6R1KkVWUuyHaBwvNAN",
  "key2": "2ugwsFs2psuCp9EVU4wj87PZ14o32GFiQGagCahrMyQLikCKMPNcAkseJbiNTLPUavyz8XK28J8mwpeLUoB6MxJi",
  "key3": "5sT9BuiVdTgj7mLQrGgmHaZ2yUyLCNDmz4G4bQqK1FY8LpdtJboSHAhYCSCnnH1vWZvkbWpTrCrmUPPfZGhW2sAp",
  "key4": "2dbym7nKXByZ7rLGZeKSYUa1CF8UBrWJedfieWPW6skJRLwigvhdkLszZoRssuQbeFuDD3Sst2vdLfuRDMDHH6TA",
  "key5": "53nKXz21koBbB68HBKmAba4NBfsd1fTGTpqpxNTa1ZaeVnRtBRMGWjsEyupPuaKo7aLkUks8MHoZ2bxPwpJ3i4dG",
  "key6": "3XtWLDWQcyu2BuSHwZAew3iJAFVJqPmGSPmEcPRBvb4XsTrWVyBgNBdP6Nza3REJHmQTQktxWT58oiXJSbMYGcQv",
  "key7": "2mEorxtGvCLExc4BUBK6pEFQpi9Gb2mJQfyK6absPik3HmTRjymZ5U4afsegFiGYuMZJUzjZa4SC6HPeZfApGMxh",
  "key8": "2gWmHAEPTJe5ypW26A9MHg9p9Tuf3Zrxujxkjqdk3pm8hhBnuFXaizMtuY2HmPvJzsdVvaUtg95PXdkTTiYHJSuT",
  "key9": "3RTzooFQXFEuZc85NPbR9Fm6SDVg24Pcbp8wUZY9UnDjsVULto4MghBfzFuDKxoEbsjFMb5xvdQbbxtqt2EbHtFa",
  "key10": "2Uv1BeqjmU6N68H22irCpNLrqz5NqGxp3rYhEJGTERP1rxsQPP2dTdNwyhK5Kx73nUXjNgMS3hCc67ABoFRemgMb",
  "key11": "3r4dystbRpWemsKoL2qZGAZ7VfKHPWNhiyCdMqUTYUeS6gjhCQQXvUNWPrDV1sybCV7SFAP6WQRigegcpQLcXrtE",
  "key12": "5Qgy14EZHARJpagNjTJbARpeB3Rr87k3vdfs2YtNnMiEtSLepWr6vW9qM77L7oCQdqEoaQ4SJfBTwB7YUkKRPgqF",
  "key13": "3p6TD3KrfyiUnqMSQ1DNCkdkCAFwjrVBKkCgiLGiSea9bwtnkwCKCTmWHSxRfjLpzPMPhjr4NextFtU7Nyvo6VV7",
  "key14": "2ibouKdg2nQtYSZnUvPGpFrvsoU9sZ6MVukmm72H1yaM5NoaSGTzwoazq6Sk35MLHC4N321PzGviScJCaQtYWJPD",
  "key15": "4NyCTENCxziqG9H3YDFa6obEet4tbHRppUyVQ7CcQgYXKcm8s4JKnL3eyBvxEt6rnRw1PGJDgiLMenXu6xaUdytd",
  "key16": "5Kf3LctovaFzkRtfD3TVpKs8g6PubJtXU2mDGH1FUGxiJt11tZ1rhmkEBnuNNTWvpWm3xRQ4CSpZeKEi6AsGDWx6",
  "key17": "2BKsHuNBkZ2WE9pfs4T1pnhfMq5rqgaB3RnD6tP1HkbkeaQEZWdLq6tbnkZViX64PAvBn2WVSG5D8zfiVfyjSBFc",
  "key18": "4UZ4JCuXjUCJECVsrtZ38tUsLkWERmh2ZZ4Udgjcb7dREPtq6X7PhH5X19owCb1ZY7tuw1CjYdeWHdM47wQVNwSo",
  "key19": "66mZ4BpEhuvbz9JHysHDQ6S6bMtrJmSZzmYw6oGYuv1UfSKmk3JjF4V2GG8FFNFkzWJuekDBTxtP6tTGGcVGZ7VE",
  "key20": "38qgaD6NVwKQWoMYHVogH9NN7LpFPpWKZCUDrZdFERwhPpRnDtoEUohgAUm1yf6u23LVjcHucdt4GcwS9QUpnh2a",
  "key21": "2jEHwEbXXSJX3HYHhm7eZz66NnGwBHjDRZ9PRcQKyPN6UFF9U1rgv2M31xkbvdAiC7fibD9Xshyjr9qfdqAsMznH",
  "key22": "4YpRiVYbJX142u4em2mwMFixhFvV6YJYkFhBW8VQQxEf2T7BhuRaTXDf5JXfCTRtXnzY7umENjdP7e4M9priFZR1",
  "key23": "5YAXzARKbzGSJ8bZAi18uH6azYt6QAFQSUJg8egpobka3hLnVZV4vr4nkAWwkMjpUuMyQMoxTKETfmDLrssXeubB",
  "key24": "4eEvZJRfA1AMgEfy5KVwGCj9SRLSKboxzcLxt128F2QEi1oZgUCNMWZ1Vmgv68hUK6rHqgQ7LYqbEoqRimjjWpPU",
  "key25": "M5Ejhzv9zBVirbh2dWKDfLuYpBUHExPSZ1BF5skFDPJ25fyhhTs4HwZwbFia18aCiZ3tw7JmcinDN3SkNkaeReD",
  "key26": "3HKd5K1PfbMFERhYMrr5G2TgeDmrkFmimDtFsHEGmWdq65H7mKSupfXnB162TsicnCd2m9u6G4E4v6bdw1aUgPg6",
  "key27": "2DFQgps1buVdQec76F64oaW5oV2gnVpDcRYRsvDKhZq3mJUCJBReHavUN1sB6GbCuMM9hGbPdmLx8a1E3iRPNgzk",
  "key28": "2k3dv5KdSH2bkgeHA7mUtHRt1HvgQVKZUanApLv7BJhEhNbwaNXLizYLHNEYQkkJRpe8d26WgCRbGLYVRNheGUuu"
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
