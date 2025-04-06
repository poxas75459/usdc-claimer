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
    "3U1LSjZq7ZwSQTUuckDQjpapAxRX7Vw8muWp5JRsqx2ukzUkCBJwCwwS4oCMWqySHDwZrQBsDaE5Lr2TTxqdMJKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCuqShYeF1TCbcbR21NpRdvwbyp7EGPBf8jXo7xDHs1vFrEVA9nBE1Kvr2tNdZmEGtCyd9T75xxDRfkWP6HdKBP",
  "key1": "2E85y7qvQn1pDjQVzq3mvSKmyrYaZKra61JiUp2F4UrX4GwRy3x2LXyDDekpuMyYq4meDUnJsTXwLg7QMp7QcEJh",
  "key2": "4pf482kKfD8qsRVd6dR6dCbtguDiGjcGSA6hKF3FjbgPeJhbRzUXX3PDsZYXi6ZWYc4awUpUHXaTwS7pfy5VnZAM",
  "key3": "usniqwnckhE3hGuMrJGQuDsNSBa3umX4RoAEpMi1GLM5Pmku12caMM9BUEzBWuMdiKchz1R95GhieKG5NoWQpEp",
  "key4": "4RhJzfc2iCjL2JMENnZvbk9RnVezBc9YkpUbcLMyrBenMBGYp9zqz1cYrqUMLMiwL3PQTsKjEj39XCByQ6NhsNQe",
  "key5": "4pCW5PpABsZqo77UELpadYHtQmJAu3qAAXGNwzjSYT6eC4Za7L6yVBZDZxAVS1p2x6CSWsr5yddTv4ELaXvB259j",
  "key6": "4p119Xu5eV7RxCR2UuNMjZKyfmBwQ7URx9EEJyCH3WzVZhjugXZhE8ZUpDYixzHQZPx1YCs8h5BwEvPHkYRHG2LX",
  "key7": "K2sBZY9yXwStDaM4G62a4MJkTqX9YwuYmHsF7QL8qSMpBvK41i92DLEGVWP5QHzVsMZZy7kz2SUZMwtL6UCJsYK",
  "key8": "3p8PsjwcDHihsvoWGPe8bY66yDYWyMKZWTmHvZFtyfkhhb478cbSRY8vbNeMcyrTykmHXgwhy3BrC1kGpDdHb8P6",
  "key9": "2ZWiFxPSkyvLF1kFxyJiv1mTffGX4iKV6zdpKQtUrSt235EsFqTuPyDyRJU9bo2DN3x4fj9gAKU6AUc6A2yZHcUU",
  "key10": "39T356jfkkHYAVSG5EwwnQPkN7RLPEtHJqGduVKkQbMKjUYZB6bxf7HoPhCZ4bYk3ALJXozgCg8k6pYYshN8tctN",
  "key11": "2JtfYKteC6xTtuWDnQrkirQT5r1vxcSUJhgc1sa8YZ4TuTR4PndXpErn2AdSFQSErRR6saqKxuhjdJUeecxQpc8Y",
  "key12": "5DjKS65sx5xmGSpxz7GkE1fHHqy1Zqyed5XWnPFuvdLNx4qpD4HXe54uAAhd27viNSwqzsnd5VtuziyQASGRew68",
  "key13": "3vihEEwD154d8BsQyPmBrzM2VKXA6LMUuUMNTEfyhNejW5t1wVmQ5vJZRDnyns5KPTBN2NoYJHhBHU2bdUohB3Gc",
  "key14": "SAjTny4cSXA5WeV6mWAitg9GtAUsMCsqgFwzRp27dCttD7cmT5Tk7wDj44x2SwbzAkXjYuoNQkZtMLTLHqPuZsB",
  "key15": "vGV68AThE9oy7VAAhu5V11z2qimycaMW1LGaWFMa7jfkxp1FWkdChE3YpnjPFRoGBuoUrTMc1vcFuTnNocZfDTj",
  "key16": "2YRYsouTUMD85QpLtqKUkipnLjUYXVPMubRHY6PQw4WEzjKYd5mXPxVoywoMd6uxBAp7Gs8maaWExRkmZnRfA6L4",
  "key17": "4XTuFCdve8WKKGpZghAUqBpVivzqbfNseedtFwpj6DMGMTRrwV6v7hiQFTL9VeNWWDwdA3Zfn2bpfiutRcmoetzA",
  "key18": "4Evaezomfyj2D6rtdpEeWZKBb9fvBSRcVDjEBaLSf9ZrNhXYsZYzDnm31o3tSLJmGLRthohjm34F1ApW4Rrcpx7a",
  "key19": "2u757oMG7yTyskw72gonMCdF83MXfxSnn3RXhpL6fdRyvbQippfHkPxNr9iEkcXNBdETVVZsp11hn54uxNjipFA9",
  "key20": "2E1y2EpdtVTB9PwUipkmRaViLNxbGhNwgTaUJbY4e5vBtd4Hu9aR5DcghQWmJp5hHvh2GYttQEprNrswXU2dn7Gw",
  "key21": "4vAS7HVGdhjiZmafA5GrpmcZzfgsxPYadVETrvvTrAYpWTgGdWnt7nF9XHZpPXvne8i3nZxtuRZ3TLrBrCjEQcen",
  "key22": "2hYq5g4sYV9Fo2zNgetGFwmJKwuui5qz9r9GHrVA9VMbRF8WjLStoDSJunsc8MFpdLyKjeS5CXY3qFTDWaYdwPzq",
  "key23": "5ZsgJhrtPWRMsT8thDiyBG4Ctj9dUT4EzweYyPPraF7nFWg4HW8p32EwdriYtPhN5u9uyi1NfdSbALdsE8svjypG",
  "key24": "TywsLd8HFFhEZEGVtJ6RcqoqXPah4aNtRBfzj8MtTUiMjS8kjopspJP7HFS8qQQEadQE3VCK1Scbr1wJ4iB6dD2"
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
