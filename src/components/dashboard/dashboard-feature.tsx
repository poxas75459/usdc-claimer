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
    "5aPj4c7xErQGChnYd39pwYUgdpRTAJYuZR32EEDY6ZNgsdU2Fpk3H3JEzcaEKa5pjB4F4ds1MdZ24bcivKJNb1Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36NQaxq5dm5hkJZGXj5qcKUxbufVubudFxojbuJqpYtWknSTb2bQFzwi268NGGsALegd9a9PM9rCwTkCh77LUYj1",
  "key1": "4NmzC7JNpdMC7baqn4UdbMbh2Gw7ZyTs8MU5RHkYC1Qh6bgJC9WmtsEPNUZk2abFJG4g821E5xzsC6z5JaejSiGE",
  "key2": "2JZDbqf7CwYFd7j1Q7YXHrmMVyKruXxMpiJeF2VD5KddYzFmhEGgaP9qxK7VqGscs2eyMrjAfETjYnJJYtyzy8L8",
  "key3": "55He1TmyRWm3ApidXr7sXJ5mPTZRbeRYeb13wKFNMvKGuZ5dDc7LDrV2uCytc421GdoWMvbbptqEn2fKmGfA1ck5",
  "key4": "27UuUu9JVu7QSp68haaHgyUdx6Fx9KwxCyK3xAeZXSaMFV77F3dcrsRd3gwjPRHUZLaAsNMEbv8n7kRhpjURyyN1",
  "key5": "5ddFGzU3yfRZNR9puVaUrqc9y6dx2CM8ioD1Fm8AA8PtmcHSaU4Knq6QYgyqeTJJ2aZWrpB7qXF7FvAcw1yfpSAu",
  "key6": "39SZAJsw6TB2UKxFoPaUHyD1EYqTY9BD18rgvrDYi9KfzD4d37kCRxGjxrSg8bcBJqiQEmkgV14ZEXPq1JhwpEUM",
  "key7": "2jpNMHTpAeU1AT5xLvP65HLHXuxkCEzbVKMGJp48cW2r1dehRzWwFDsCuhcu13dXqNvMywJXDjtsDh1Cfd4Gv1rc",
  "key8": "4Jwj4P9cv6K5L1HmXCWHFwS9Vex8eoPuEbe4KK37XkQmBZ9C1nSCNQnX1RzEv9woUddXtw5T2ouoMjYvRAaB9wyQ",
  "key9": "3ZrSAdexzKZppQoHwmrCRaWjKFH3sh1fTgX5EsCvPoaXjgc1GDoHxxH86iRhTQuXGDbajuPySesFmrmEEX5yR9re",
  "key10": "3JgB5JrLS2Q4BdvAnF9AR57JBS8QdAgNfYmhjuLccXfaABxJ2NtTjhzX9rQgBxmtM7GDrRM13UFx3nDazruVELWU",
  "key11": "2X5bVkyfdKQuRZCP3hnKNztrtYdQjrpPMngAKu67MrqJXMwykjhovD3B9qtohybspqnfgUvEsAUFDU7P4WYSFhBN",
  "key12": "2UeEjscuCsxdLCkJNfjQdV1pkgR23swNTunLjcZ14GrgroamwPesbZ7t1uFFnkLY3ynVVC8qkNZ2a8th4Z9hmFFj",
  "key13": "FXVAwG1mvBTSh94H54ybRKBQBUeLThuYKHz2qR763M8zKxfScgkDVieuC23LBA8bCE3cRwrreZYg8n3n2ciTc78",
  "key14": "5WVnk49mFiPHYXAQzhBvvKDVDmm8x9tsMBxAiwLx1eLavz13hDw48zXw9ZCj7fkXREoK31SdPByxcK8MZXSKxtUf",
  "key15": "ceEDZ4wFR76oo3WziBVGQWcEQQjFQBUxJ5pZ6tUAHiGrYM9JW3pxEzqMUB5cHpLxAx5YEADCvn9eMjzKdrEpw7m",
  "key16": "45pBy496PJ8zSXyhcmo9nagYEQGdApf34qwqftFmJVxBYTtsQgqJFJuH3Z3QUBPr2sKL5xanY4m1iFbkFZMVhKfx",
  "key17": "5B4utbV9qUhAqHuz1LSALcbPb6RJNgVVCyXSVPqbgkfYL1C6yqVVAWpsYPUQJTsQ3Q56rFevg8VfCxWtqHxL98Mf",
  "key18": "wAop54EFQ1GTSsRbSmvjHmuZY8ssPv1tYmov4hND8TBx3Zkqx4m39YnWJ8PsN5bSEEAxW7EbXRXrdTvPyg4JeWS",
  "key19": "2r3cLFVF4hHFL5mB89QiKXdjnzVEdogF1jY1nxYws4KKiWFz1qQKE4w8HrzAn2PyKqq9G7cKknLcyzTbubC8QxoP",
  "key20": "3cfGs8z7sAoxd4jJYTEe4ZH5ucjXGxrenXtYgWz1zqR1MEvCiUiSYX4UunRN9bSLj5WZoSqcoAgDSfkJrGKmEWxh",
  "key21": "5B9gWbLs9RyN1J3QbXpN5M4tRkJJYk9rvUpTsFPjws5JPRPA2AQyioqUw399XGbQF8PrXV88BwVhPmBEzCKLYHCh",
  "key22": "5Pvy5n5SbQS6Zk1ESRNGxUG4j2c2kqVTFHH5PQ3trrJ1CcPMEraR6DBmfF5Fj3yN2ffLRb3tqNPZ1UQgV1MKtHcv",
  "key23": "kfWiHaEb1EJNKY7GNfz53Ss9y5Z3VxRLWmnJdC5Kvm354MP2g7hGZiY8XxGTdYxTLG3nbEJgkb3mAQLHzxuQCdh",
  "key24": "HDjMwJyMisggKe6n35qf6Cowp1dRbjPuMe1uZf7eGv1q9myj5gkNYTmAs6vHPwjEpam68L1yp4hA68NwjQBr54Z",
  "key25": "316T69MEeYEwZRPgWvm5dPEXxH8ogas2suAN7RWRAN5SBTJ4BgkfDmqVZwRBv69FNTsX4UHbcwUPinp7ow1Cf7WG",
  "key26": "2cBpXJhqdCxQDE1LLo8k2PwP7CbpECZr7F8XbDKtMNbUNe1wn7reA7Vx3VJ8v2GxhtpAvcPqtPJsGsPBFD6VyqCM",
  "key27": "2DWNy1qe8QoLPWyePu4gCZiryCmYJPNPag3eHRGDm6WFirJCpZwTvk7PfUAvXx7AajsHdB9qBuD6ftHd2xzWtDFx",
  "key28": "38JW6gjMvKmTvJViatWYGPtYSt4yHfZgghT2HxSus9NLp2ahMds6Fkp1WoTiKQenvDYLX5d4nEAKvff7P113ctZQ",
  "key29": "NW6ufgZ4Rh63M8qzsZsvB3ZWD1BSc8GRFJmAGsRzdaha7NVL3tgjZojcaWfZFrPR6T62dat2dtQdLUZ2SxEm8fx"
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
