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
    "37KGo9zTW6aAjw2KdfPMwzCQRqb7WDQVF7Ja23dfH7F3uqDtvtr4aU86XfRBxwt4HmEQkuBPkXHB2gfe3n215oZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Bvz8EW5ud7rLYvbLGqFobaY6EKAzXuUMwukJfKm98ZxiPAHAk3WZkzfCuUT4miEptvMsiXqb36LBqMnbDdZooT",
  "key1": "2M4kHDrPaFE6SG1K6AszVgj68QUj7Y8c89JCB3c8skyJUDLJc3pHSWHMBPYvorfrfv8epkQrLLy72i3Rwq8jhcRV",
  "key2": "NB1odAoQi8zrr3rs9CHVAFioZywJHbBBKz5fQYffYw9SBokdqK79oKkjssHbya5WGtttwFkhhwufdhuht7UVxDp",
  "key3": "SD1htTJryBJ8KmuyRrEZVtycEsbg7oetxXuMn2xQLmrE9zc3rg9raTyN2WwityDFV178TWyaLi47YafkRfsBCD2",
  "key4": "61qLBHhFbZFrzwkMFHUsXgDp8HH5XZ4K1M4vS3EVwU8GQZepG2AASyXJ4ChffY8izojmsWnkQm18orRNZCz6BkPF",
  "key5": "5TDxBPYrKgG377BEyFBt5gDRcSiwG63rgymaQaSrKLMEReeWHznRJFj3vhB1sba65gSrCh1qRw9AL5muwhMTkTdo",
  "key6": "3VpKsws3q7Ef9BnoJt5GsG1CHD6WFnwGm1BhSr31JpxyNWWh1WMF5nGXeWYdSEg76Pybn4NQLehZqENJDjdPeVPW",
  "key7": "49KnyuyrVfT4SoJqnGnViwGdWQv8RmPesfQDGpHeSDKdBcCf61uKeQ8AXGBKA5hdZxYvphKTymvoGx1T6NdV3gcM",
  "key8": "2JxSFTrR2c2xv97z6KykKZybK9Hu9cgMaUGA8FFSVnhx43DCAiskfHY2CZBaPA11ZSAsmJRABp3gXeRXtEV13s87",
  "key9": "2wgTw51dEsTLv8HSVy85PU8VHwy3HgojqNX9renCFd3esmyLNNv2kpR2fZW98TF3TxuS3952vg9Q3BeubnRu5qQ2",
  "key10": "4NTL4MTo3bAn6V6UmuqcjVvDCyEqoRzLGCxUigqzdYin86uRGY9FsaNXWB9JQPMtcxCH2swE5gizJqfUquMzWf8Y",
  "key11": "2wgDEmuUgPaJBcXkq9ubQoQFQzvqGTtSpJ9CasfmyNTktGbbUBwfz8zRMjSYPNri4eEZiF3z67DDw41nAXS7zCBr",
  "key12": "5XTrLZH6XvU8cHoLpKVX9S7tCF3DPLCFE1qtG7gYxRRJ56cjQPhHRygME3qjWdFykZAAdKvCQj99nEW8qE74oyUy",
  "key13": "4ir7DPDobxuva6qzCTBCeTPSyxY6oyxabFMf34RmcpDnd7HJqcDnVstXwQsxUPY9msMjXd61QrpbUX71izPyYwHc",
  "key14": "4Q1YNsE5WGmQbnFBsb4GoyVgg4XA5eMR8bUZqAGTwQoWBtTiRPa9Sej6vr7rwMEt5e9LceCh68J7APeJGaxBTMUD",
  "key15": "21V6YqppCPhTtoHDmNp52y8wjgy6En66Ez3bUjThZ7SGG3yDV6qD25jvjjQm5A3P9MCG2X9uaNU2vmRhjnLkrCc7",
  "key16": "h1NxwyTMDizGfjU19CXGkF3W1y3iXS43Mmm5QuHmJpVwiwzhdPn2qrD83eNHZGBrBDhVKzFa83YsXMrmGsuRben",
  "key17": "2nnVEJgHAQytKaAJFtgJHB3P7WFkaZ7imcq5PJprNPhkRBy2CLZTYWKcyhqLi3NPHXyVqfXmAkUVUfH17zjAAw5m",
  "key18": "3M42NDY7z3abanNMkBWwcJwk6YKN2Upfsjokdppd5o4GH8qMgor1Hne5fWFqtzEvhvgtTLRB9Aip5cHPbTpgcHjY",
  "key19": "5dqiuzFWaiG8nEjiMmUz6ot8CMbgp6Rf3X4pLKhFiAuuKyd8redLBi6A3fUT3v8VTyuXC3r8NhYeE6a3wbzbp1g6",
  "key20": "4EPXSuCeTs3yCHJ2wBvauuhpbkAZSBMma5NyksNqNtHPPq8QiYogjxNWSBwZcpD8kNckvzrDHFTbDwho4pp686Zt",
  "key21": "5G7XDCfUmLbJRkx6TDmSF79oKCdP22Fci3rPMoYH1nMiD73SQrhCc5naYYA9r5x3UmYueXyPVN52o8WW4MDTwgKz",
  "key22": "2thJ5weQ2GAyXK539mvDJWWn4nwpWf7CGtUTxMQRTwk8XVUN9gPBdZz8K8T3bPmMhBhtEX6e81LW7fnW3uKD3iPp",
  "key23": "4CJ7U778wJcwy6jaPGAsjcXPn9Wk8JU6Q8X5dMVkbzMzTJN6hq4Cxej6atqoWhPvs3oyxPDQyHNvZy98w1bpsUsP",
  "key24": "57PaBbSoie92goTmQCt5o3SXsGmYPpz34oJqMYAdWrhNbTc14HtJmE5BBMhi77PCnmBT9vjpBwg5kBEL8DSCbSkA",
  "key25": "3WKxxTCmwWHDy5FFwHN7Q6ATUTd6Ytg8Du1CNfdHQS1idAJKVePmJ212cGv4ChPacbBGSow19qKUdJcZAMRLx6K6",
  "key26": "3Hm6UPkgxGx4qxUF7U4nnpYBNMxiVzDVrnHCzofy3F4LvizdaRj83XdTYgK7e6jA9tuVZ77zCbkwazuB2oA6KG5j",
  "key27": "43icxc4xVunCMiwEXgGwV7U3kwBFkGjZ1FqYUjcRCpCk9rYivP9vr1vVw8rywfRXjNNwSMhU2T86RLmCJJJucjpD",
  "key28": "3NUaZd7CoNQ2E7N6SDNHnLeLGPovZjDXejmCj8BuUPbEVUZgdNc1edpGNjvazu3g1cYncTcEyXGsVaNhDza5U5QT",
  "key29": "3UuZSrmwDhmkvYZC4NESMJFSPgbdjaXbDk414rRGejyDuy8WDy2kkzg9pfMNapCDGhnCQAUrLLrAspGdcRXT2fYb"
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
