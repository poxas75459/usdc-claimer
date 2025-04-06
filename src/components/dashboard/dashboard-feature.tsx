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
    "x548MXHzTyE75Txj4GwfxZYK1Dw1Fk81QBPDGWbLS6gGsr7spBNjKwt121iz4skGNMnhAXxjK5WETxodjXMy9Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYBoWJf3jALv7gw4ibBJwdDjgmbQsBRaZtGTR8dp1bVAwVW2gSGzDvKNiUcL752GZT923Nx3QmzQTLoVCV3AuUi",
  "key1": "tPCWqemuEbPqd9YXHBtT4VZhK6FD4y5FeRUVk7bdZvXoUdJfibsw71c8WYs5hRM2wGvnDs8GCkprb1fjQaqkWTP",
  "key2": "4uDVTbDVDXyC8bqNYLfDWNuGxwHwkrykocGFZHrdb1miqfBm9VAxFCcWfhULsbrxmBvhzKJaJUX6M87viwNmn4qB",
  "key3": "3L9dc11zVbNCGxqdhYFp8rXx63MR28jEmsE3KfY2ZsoP8UcpyTTYZg86ivrpNR8czEiJLRBSGhWHcr44SasbRuRi",
  "key4": "5LFiSFm81mSNUe7A9KLDxjT5yAhuYw8HXV16anm38akxtBdmUCehzwodxPDMHMML4kiqFT8u1P9AqNj8DnbCiQDr",
  "key5": "3AEosFrVNneMRUXyzLj5Qw9imfYHCWvPekswvedrBVNLsrBPqdiNW27ruTN4ybouHPv58dSPqjnKkTVQsLz4H4uF",
  "key6": "xdHMrYcBnH3TeJ8KuMd3G1jU1pcaiH6mYby4zGQRmWFGaC48pRVaZ2zmsjFPRtUvEbfmTFfb62c7L3sfSP9yx5W",
  "key7": "3tEh9eEg4o5P6EXwQZcchn4EVNgasGzs5oWaySuXncVeeGRe1496tcHqjkY3uHsxyFuSTYHk5H67qJbgrJr7Enqt",
  "key8": "5XYVpMdaGxddokYvDrKXdDC8dM6QBr5xH2wKPcJY89uuKypVUEtkPUhZsv2KLngFNhHnqBYVcyFjsqhqe3uD1BXY",
  "key9": "4SRancy9nd4eehLzfogLV5euQE1TMbTvzpTGDcdxQrSdS87X8CyExrxiYKaZsLCwVpNfP9w7Z3orTvVo7XwvviMx",
  "key10": "5xXJvf8LaWoXATXfKD9XUNToXqCUBVPfLLBR9Uj71WDEpVP5u9PECbsPRz3CyMH21GjGb3oC7FQGkb7ynhgAYJvX",
  "key11": "3RJaPNaobB6UQUGSAfos8F336VPcb6GzxsEB4LavyD94TcUKdu6MdHLT3GandNDPMB3nizcR7zJMb2B59rG6m3eY",
  "key12": "54LA4uEHdpfDUY5hYPrPTT1w6GNdUn4eA3HF5zYgcgtYzKx9KyUUqJWDasiAueHqBXSwhCbZdVvHUTrXQriKK8JY",
  "key13": "53nJpqVj1aTCzRH4oPf772cTwMRpnk6LuRmhRMkkG4r82FYEvup9aMFjP4dSTuEkz3WHgHu2wSKvLz7CVAE55EhX",
  "key14": "JmNSpaZt5U1qZnMqXRriDF4WhvM9D7H3YfWVqv4eDX7mRdi2omt4MicL9UWZTn4mopVjeywrq7HFvN33GnXx11X",
  "key15": "48QUBbCbGkWqrhoQv2f3px1fGA8N8FcGnNwekZDU11G2YTChc2h3hUypMSa7FbKnhdpfqda3z4BS1tjzsUH2hvaL",
  "key16": "t7mosG3KNaD2VkM3yZAWFXbrzSZzQNigQbwwCqwkDwDPcnYiCrBmypfCnCrDjPAx6vf3QovBMSkkpiCVk6eFZuU",
  "key17": "5SpQmR1abb1ZzfmqZGi54f7DRjwvjKgmBoAzzK2UB7HDqz6JqnQQaQt8Bami8JuftrZbVNQpeAMdahoBaysrGqRu",
  "key18": "o9GqKJ6wrU7imfpSYhsN3pbe41z5EiyxNrXFmbFckqRyJ1jEoDV56TGLmrkNAHoeyHvNFQEmnYphAhwMeu5XxPj",
  "key19": "5H8dygT6i8FymeGkrYHdn1BZ7cGfxBL4biqP54qHwkrHkpjZJRzJh44k3Aqy6JmSCq49z5hvjBuXZnpjk3nGKtg3",
  "key20": "3frdrgGLeA1tFWxMYXa4pGJsPF7gkdMPWGLZhAeBPQLYW7MqmEBSU12r4XvC4qBCdbzSsaFzndHfMsgKoy227WFr",
  "key21": "2Nm6wpCcRXga4RUeqgsiPPUSq6TXszEQ3aUvV6uigGMH6zDqGezyfLVCYuaFSLBkTek8hWfiZZH2TH8ziMe1y6wX",
  "key22": "5tkKd3ghUxzLW7w2TLNyLftKfL3kUqtBFboEXoCV2krJxFpP1rp1ifvHY93o3yJ427XqDbYMaGkZnQxkD2TnZAi2",
  "key23": "4uwbz6PSZ3qtVrEWN2CXFDQh3XroiomC5neHQxJZ6RBXUgFdvPQWfuf7UJFXiK4Z6NC5YVZcphoUuMqiPCXf8LTY",
  "key24": "5wzvpQ45LYi1fiUEmJdqBfGb923Grka4TDQLvHzGPMRvC62G8K1382UY7o4VQJrYZMisJtZEsreqp8rB2guWgxnQ",
  "key25": "41JFZrCZ5DQujk4p3hjNF7JiEusWE68sFZ633DiFSgeS3KGR4WKSrMe1wPbPC9AUB1KFgoxYbRahT4xkwPgbTRcn",
  "key26": "3eKnSAWTHtszSXm9RVEpJGhub378kJsyEBkV7M1b6q9DSSYHqks7VeJhZoYujZzfbgyGeRQZsVEo61e3J5UUTTC1",
  "key27": "5t5UgVUEv5SsRQqJr9kWictUEB9qa4GWXk9P44sCwVJzPpfgEd1aXYTuSDLptunMSGmcGPHG6RUJTUZvE9mWdMt7",
  "key28": "281eK3rbMGdduawsyCqpehiX3fwoNUAaNgF2wxVyDzaQ6tySXcDdBJBYeCwjfez2NrSqgi2UaGPXAPLYoDgsNtqB",
  "key29": "vxeDfKipFrzoQBApSGjz3vrvqaNYZD5nv3ndPcP2Rs9iZVvqjUvnv2S2788DGfopTarwmBvPEoF4Jw45MEgqJXV",
  "key30": "3dxqpHSVYrVRdFdt3LDxeeCVjTqypvrdJqqe8LxnW4Ut5Fhtnpv4yArEJByjTgPkkKfU6fr7uLhTBBQ8dV971MWd",
  "key31": "58KPRqVWK8QAe8Tu2fHVwcrtNKqstq6t7xf4mHv4BtsXeVbHPNTZ1Cv9uZ2jSK1LgKzPLttTzC5WVj4aSDjMv4Qx",
  "key32": "28LLHPNZjMuemwEDStNxjkYxstmin4gvuVD3dZi9R1Fdy4eQjqU9ykKQjY3vNbjMKTW8f8n8m6dQMLG2Kqayrozf",
  "key33": "43aGmPmPLwfo3KGsMqeRxgT8jjZ3PiAMNq8QKkvGbD2swJyDiwpK8D5rJhirYsTv8z74am9CraEvPPFCcFPBxWxm",
  "key34": "2MUJD6BZ74bHv8g6cMJRamvFqa3dQEB11EGZ42pcig7XWTNG15BApqNKeAfWnpQxQPetaKaLKxPVTt3GkD9wUst5",
  "key35": "tussdbBuwiJEv751fLBAzg66PC37TUh4tyCWuGQp5HW6ybza9BkJ5Yk5EJoh2Cn1ceGuAJztpbMspSb7ZZU9Gzt",
  "key36": "R48HBz8otfSNfhtJm9dub8qpbVnHZc4nniwvAE8mfCR9f6Hu1P6cLYQRNxsK2mQMjyTN9tNAejNGetbcEKxKMMb"
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
