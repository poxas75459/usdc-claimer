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
    "5SBDPHaBYXWDnVWVcqHtyPpaRHgbpqWVSsd7tMT89E2fxhgYdgHEFVgMHnmEAWUaP8Es7bEHfE2VGuNJvB58e1LP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVxiW6gXT3rKoetpfuRKiUfZ9jL9Tp1LzKVEAdaVWDGcDaRpkWTQHMRvrb5MLA7qSV6zk91qrSNKpcTxsHDQvZN",
  "key1": "4NpMYsSDAVskwNhdocduPScWCyoMMb7Dcr8irR8a98ZNXRemzoXgmKSNJi8huNUTezUPYhMYk18BqTgLr4htmQvk",
  "key2": "2ztFHTtatHCsEcccQLkaUjm3YDaLMPcNjccdWKCVeTbZQt1vtf25yN3hWVbxArXPmvFrjLypZVkKZviwYW91eCrZ",
  "key3": "3WRPa5gdctyq2zwLXEUGE4BabJW4sNb3QtkWsmUpTNvumWc8rFm7eviq7V4wgwnmMrUYPGPDqYqD4e9nyYKctdym",
  "key4": "2RhmMSiKPAWB6bD5XbgdQMp873Yf7GQ8SeHDEjVP2pHSPGxciLLVMC5t6KpfjFrWAZ29912NmEpsGUD6odeUPKtv",
  "key5": "2g7A38VpnFRrewFLTvTQ5Te9xWJ8ztPWwzU4sFWjvdZzPyCGRLCkn8hFFZUZn2quXJgyDUbpC5Bf2EzAcnnz11az",
  "key6": "34Dzd9dsCqizcbcTSgQjWiBwcXepJggKnjMARzAfnmpHm2DpoN6QGAq9kXZeQ8oANTDU2ZjyrvCMLogf4jptDeTL",
  "key7": "4ogb7zcrBKxBQMjNd1XXYsbmcYxseYZ6TCTuh4MrUhDYawhTzww1zSRKfaT62ATUzcgpYXKWWw7t8WvFMo8bLu1o",
  "key8": "3rwwDBPi1f9WpaTzjemmdM91Y9fgTJsfkUkrkWB5L1CXoq5TKPWxmZznfxRmaW2B24myjBTYdYTzRWFTGaiGCpem",
  "key9": "m2yX5KG7LKm1LGTzCdpEzRb2VYPar5fYEarvk8Df32UrjFhHFekM8TWnE2PaC7CxWuoqbGy6WViriaWeq4xeKVA",
  "key10": "zPg6oudt4gH7ERQSUYy7ofcVd6numJp7uM8NVMkgP11z3SWjw1BHZ7Sxohi35Xw9rzC6Jovxi1nXEYBFhhPzXWX",
  "key11": "3cB3Z5qRJYw2pxjZNPiBwUTU3vSB19m8XiVKy2QS49BdHVPMRGE4jKg36qKd87x4ifqgPp5W2Cgqtm4eozBTqyNV",
  "key12": "4FSQw3zRgHqAUNULQsiYHxwdr5FQjcjg54CCajRVA4TZtWNaFPfJS3G4RPup5F6g2zXjSKwgx2dxnzKwEAS4hFbA",
  "key13": "5AiMomt1U52NNP5EvqoQxVbNdA3qYQT9YWya66ze74BVddpNyUivjHQG1XgP4beFNF1eU6JnJxS57C1JH7UwXAG",
  "key14": "5MnysXdZmeuq6kCd1jYPVBUuSZyyHoPYApWkuQ2QneuP6r6odJdspn99beFPaB4YYgTVxf5Z4e2CKSpwn1xvVfWm",
  "key15": "5wZQWR1KHChraHNZfLoScnZqbgp4gg5nUiicntjgBMmYqoFNmrPbpHWqy2YGAaaiABtk7t5PfWB1vRdP7m3EZoC2",
  "key16": "3eESUveHRHQVL7j5iVBhcwa4kxqbABEks7BtmXVFHqPsxcpcA9Bw4swCceGyX8kr5iBgBuubnPD5Rn4xMYVgZbUA",
  "key17": "rAvBum7VEahQEBuqH5jAxkgZZRRdvxVqtwNsDjMtuEUWZzUUAy1HnXmgevNJcSNUFWLq7oAAr314WwcdnzbxcgA",
  "key18": "26vcksfQsu6byuUXFuTxho1RuJaGZUYbwMddJpMQrsqRZkvXgn5dbDxHeiYXUE7Bu2rtLwESxQsPxgakQF8RE5pi",
  "key19": "54DL4hnN9iqxYS8zh1Y9Wj6T6SX2XuPLGgmBQu89GNyUoQMwXvdx2pUcLyJKQKrrdnTEzbbQnd1EqxqpZS1jocxw",
  "key20": "ER8WsrnWkZ8McZy3eqERW9Q1kYzp2HQFY4to3gtdbPcRrqViYBvdNcZkSdLzTT5na11srQBP3SZ363jPS56FwmB",
  "key21": "47svdYh9Q2eE7WMxcThgp36YfsPF4PYBPZ2EpSDcqb5UxDmNfM9SuAw3GfCcMp2aXjauRgGUA1ueJb9Y9Vsr7a31",
  "key22": "3ovN5NaeJh1jHiY68DA6xXtaaZw3w9TCB9hmeKfLDuoPHMigqPFjkhjDHR7tEwg9SrCCtmWR72r6KYyaAK4T72jJ",
  "key23": "5xUbu3U4eCmjXduqnUTpcEtWp74mZAKqqP3kEso1PHJLfnQM8SatnLkJKAtTCwDp3Ucz1FmjH2QhomRAmySnEiBP",
  "key24": "3bUjnL73BPUc2sSjdaZsvWkiCr5apYtLuDvmq9SymmNkGXy22K4MRf3GLwGr2YwL2dXg1asQy7q5QCKc47V2CZA1",
  "key25": "3gU1LDj6DsifRTLXNwTTAQZjPXh6K3VbctgPRezB4g46PHZCPnbD8EWimto82ovah31jsq4xuC29e2Et2HZz2KCJ",
  "key26": "WvHzbjBZYajFFe5mhHkDqFwDmGsgodRZprEJn7JF75mUMQHZd5W1zbHrRBg3k16ZDWE6S6GkotZpchKsznhf3G2",
  "key27": "4361swWyJK21yAmftEaPLNnzbniuvL6hza6KGdU3QTUidPtVwFYVKjajLYQ2ehnad7zV4vq5zuM8AMKGe1xEccEY",
  "key28": "5GFT4MgPDmfnu4hch25Lay97B5YvA5YFXpGQmxCnzDhGvxsKdCRDiXqZiPu5PiCR2aaVUnPt1xitJvbFfVNzwxpj"
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
