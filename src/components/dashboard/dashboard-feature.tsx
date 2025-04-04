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
    "2qdFHs4SVFFMwfhTGrZxpha7TMZiVXtAA9TULcKQw7a8fCnXkwZ9THvQ9aay4e9KMreF3sAfZwPoZPoxWBEmKHDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QB4kP3R1Pgm1XwW4EFPFsViJNVadQsnAXduX5iRjS1S7dcaz6LZbZvBPKnttowccarV2xHuFaDSP9rVyNjQF78",
  "key1": "24TFUbT8g6SJjFWGMqtuLLCqQmsJENmPYEico4vKS1iiD8hzGsigBJBaHYNkvA7nqkSq3dbHCXn7Rwn4TXFLnfaM",
  "key2": "5SEUr24dzqrGtBe6VwiDGZ18zK7HMHEqkKBmMHyFWfc5k3KZT899yfMoLNJFTetGep6v2hZyTLGjbuNKGpkFGa4E",
  "key3": "2tPrDyduhfYGmJaemE2nhDb9KZLjKHbZXzJ4Arw8u8ijEQn3zvvaWipxB7HXJari4xTK3po3pmg4KfrZeQRC5GzA",
  "key4": "3XYFCxsKj44mU2zKLP21G7cQZx3cvmwZD6htCL2JDs8fMCn21TnpEVUp2oxT8M7upv2MSgRnVRP8WBt6cgnWnwqY",
  "key5": "3oWT3p9HPJD9gd2DDFgatLH2KcrV6cSt7jsdf98Cuw6H6mtt4DcyEe1GtmUjTVNhqwerzEBQxZH747k8DccEkPdT",
  "key6": "3qsQjU65KBPBMUnNPADk5uffDcWz1PLug8tZXtrSZ7XKvEtDjt2hw17m9LCdF5Enb4BuizEGwumGXiqsu3hitaLs",
  "key7": "wceGSYg8uVMaXANqMg96H319gk19KzDRMi5MDzro3jM6nLmgEmmbTUFQ8pNonZeu4bK8Run77D6pTE2iShx8dyA",
  "key8": "5rreV1bkzUZ7zQ3Yhwr1pRPgXzTSBAwZHn4NFmw22hzpJCb2XTcmoG3ZzxkAuzrKm6W5PkuvnWNtFc5uz9zmCkwb",
  "key9": "64hvUdZi7K91iPmvP9KA9VVUAyAz7XJmtWrTs9vzh59FtWGViLFUjt2od1LeJFPorv3ooQxFF9RCEWKuWgEVRJDW",
  "key10": "32J6ZGUNXKbxz2xjVHKynj3vBa2GPmxK6nqNAJdv8EVf537oBgR27aRVf1pLq1REq3ArV6C58LTcTGvJNxtQ4iyj",
  "key11": "3oTcz33pKrvsdaVAfVuXJSvgb8f8PQRgbBvTUnM3crDUkVha5CDsuuSqFoMM8vnwEWTzC6uvSGYWXVVEgJ1Tczif",
  "key12": "3WE5fkp4KQtFeQyK2zKR9PJDsAXgRk973g8MrJVpUQgPYQLRaN7wvz5wucFJvDV5G46QwYde1W4G677Yco3NRijF",
  "key13": "4k6XDypzrvPWrw3N7Sf9AqPUP9B2ay724mGJoyaih6GPERN771wY5mB5upaf78h3Hj7to3osDMcCHDoiALM3oWDz",
  "key14": "22EqNiuFgepD6FoXDXrcCp7EkoEndeA8DpTx334Zi9CQqvwUyUyZMLXSPrTa3721a23w5CUqNFeC8p3SbBTTpoTz",
  "key15": "GqVZEbM7spriawwYYVXBJWLpUQSQ1fk883NwsQmL9dn9qMu5uQ8yy4P5BExwav4eVtSQZZcSemVAB12ocEc9HSR",
  "key16": "66Z5ju1mZMsxbqDyaB58yfkExBogmzedkjgZsbmXN1hPDvuu8aP99KLKLRRprfDFt5Ki95juf7d23Kx3bdodicHV",
  "key17": "58nnyRqFKWZhCwRs8ZypKhd864KSanguyY5J1Bz5BmWmNpwpRN4RFpmBy3J3Fyx6sVGPANe6SictrGa53pb5kHtw",
  "key18": "3uFCP218x6eooNZaJCHWS4ccskbDs8Fq3NeVQX1qAh3zUHZHmLny7Pa38oLFeqy1xqZCGLTacgHvkfVSn5qUgoJ6",
  "key19": "3KWNH4EPV97QqMTWAcHS4boJDx3pJL2ZzjGMCPWPL8w3XafMxzTUTsyVcFXTmXD827h97jUnjVVJwPeiy4y24LAr",
  "key20": "4TPGZoP5T3WY1sBaqSdgrntBziJrsUQ2HgTZAXi3X5k6aaSyRzzv3JXtm1DYtYzGopSLJCAMSmthcfztTVXv7WEG",
  "key21": "2pmkE7eZD4ncH4n4EA4uoXEtjhEFhrgXFP5rEVPtnbYnzg1YFau3Hd2G1Gm87DZfxVvaAufaM1ohFBXHcZ9ypABe",
  "key22": "4WGmsEXAbpTaGpAaL3d7JdobG9mWGggPYSFUWkwxEs5uUScKT8LQHWfhnf4fFs9mac3PRBGAVbPrreYKEJ4Mr1KJ",
  "key23": "3wSJ4jeo2GRowCF8G7aDGbvGDa1sHtYb8ew3to6X2F19Y6G1Zu5z2jgwnJ89BZevC8pFp16H8Qtxufz8Buu76enL",
  "key24": "4TLP7H7qjU9BEPo941FPQ6NqY6TkUBDvzw79zir2ZF2W8VDrvDDtMBVc1anZ6ZXvcaDgop3bvXfNp4VJQrumaSa9",
  "key25": "4cZ7ozCL2Tvk1tAEYDx5kmDYX28XGBowtibqcYYeLNrKAGxANCWkyKYMTLrstV5Qp7T5AAyT2aKJgtQzwUonPpfD",
  "key26": "5HUnnYHBSdfcwzzs2Grs22zMhP6UvxSWVrLPGbAJMq7cJe4B7WV74UoZuhJDnBrdLLPE5qvNdTc6QdsxnGiJeq75",
  "key27": "4fSrfBf2bsW5nsqWgQFo7X2RSuo4FtbXZAh9KouXBVpr9f1L3iJWCRDuefaHNPerL6ktB37RisoVrenHpzAdYBoE"
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
