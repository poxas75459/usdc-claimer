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
    "3CzU6Sw8jcqZso2Bh8yER6fAh3z4TutpF71RNjx9WbNQkAXXYGGxASdwNTVz2M2EoqKwBzmaWutjNuGo9zvbK2vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iLVJBx9why8F6VF6TsxLsRjie6i8U41NiByeqve2uCuVPiw1VkH7da2sRgfcTru4NHfGUMNU7kMspySrKBDt5vS",
  "key1": "XY4JYiLSrvkhscUocJidRAznMBGU68Gz1FMipmSDrptDvFBEb8kMgfmhdT4hfWMWG3e224ekkEXFZYN6QgF8drD",
  "key2": "4PhL6jFf5cFxPodixi8Dvtf7MAXmG1oXMgYq4x8z6zdqMW71F8RxD4qvE2UnbwYp3gTZJLTQkiPaE9Zdm32nXj47",
  "key3": "2MfKVWtfRSCibdVrsWbxYHSDDjWCQRmYjGwfnrUdo2wUdrcftuhq58qBcsiztKHZk2rmhyqoHrd44v5XwaSt6NNA",
  "key4": "2X6jsd6QxGhGCuvaKbA7wh9nKNaJNRGopNsWBEhVFhMMSD7BHF1vhoHKJuEnH6BZUrJ8p5t9Z825ALb2sR2Ss8bJ",
  "key5": "5wrccqVYayz4P87khxQoUUsZ3D9GtxEbHiU5jxAfbKFComJYZ1gGGTv321QGsNNSoAKHFXJGKkdosRJD3UaQdyDB",
  "key6": "2qewh9bm4rePMMcVYdN6sAH8uvLNHUmn5wKAM9LmCbRszGucUVFkdMAqcfwcchtBgBoden6V4UUY9SEzZxBvfj2g",
  "key7": "64ZMVchA3b2stmwHp14QkdFY4NBAkwnzb9jwtvu5Em6tfgtmkWhkWB8J36RzQDjgYrRmRDXCmVnAo7YTR2Ufwd2S",
  "key8": "37aRD7g9sLXyqXmZXcUvXCwzMQrW3oKgqSCjq2pQvtbe4BUtesPjUAYHRwWpeaQGQiJJE7HEgw4mppX9F1oyrkm5",
  "key9": "3meaED2G5xD5ARVidDXcthhcAcV18vuuRvDU6ZMhHJrcADs7bogzg2P4TAfDmy929o3ztuCoAqrdz9iR6cPg9rnt",
  "key10": "5FosmWUeq8fQvywisc63RegAHHPSMYWAfwr1poe7BWdWhbDwpySRkt3QXJNPYMQxX1wp3rK3QLio4qq6rnX74Pw8",
  "key11": "cNZR5i6P88icYFRNbh5JbHNatEbfuY3mtgTcCgSa1wqV2owqAwtC9yqAjn8BRg6iUkmWao9KDbKnyYSgEj4ceXy",
  "key12": "5DbM5JPC4wGh4dh6EMtr95huJWb8iMiJSJsSZvje5GMyjs2gr37n17iD2yUiQMnEsBXk15f5RXsBTAGdZZRJ8Mox",
  "key13": "3cXj3c6NtpokWhKNrqSz8pssChX4weCAMRdTLd1GSmPvdBBbj3BfnXRaneXynjdAs62BYoK53LkcUeVyMiL9CpCd",
  "key14": "3Yo1JwSKDfjFdR9CHTZCQ3yGAzqZxrpehfhedf94jgw5Zyx37iDbWxvY9V6NNRvn9gbVr3vJue1KanBwmVa7GGQL",
  "key15": "3JFKtEL2XxFeYN2iL5fR4nkhEjDoY6Mmf5ntD94vfs8cBgSsZgL5FCbVn39HJH4ibPg7tkxiDH1GQraw1joTaG8s",
  "key16": "3DrNGoizyChYvmBaGRPLB5WgyPmrL3QXfuG2Jxi8DV26sQzMVnznY6qJsWmvL1UGg9BgcpDeN1Kn8K34MJuB8Fvz",
  "key17": "5SqmYZh4ABw6tJ4kc2Twf3vwoWxwiGXW9dAhGRbWoZK9HXBtXQ5JFC1cQTMSphsP7wDnTQPYQTxccoo1fMKfXe9K",
  "key18": "3BaUGGenCRFiPDPCaFeuneMQECLV9teVziJE8dXbU336wzEdYK7nrfViXZ2jBtKcPRVvVoNbVUgCsHYRfdTzjTmg",
  "key19": "TteVdoRNhi6QayR4umkAXSWYkTpKQiF1zCmnpnFWxymhcLBLt7e1Pzbx2DN3xMo9quQrpGJA7Wk29KHdYNejTKo",
  "key20": "vEFmvjRwpRL2v4DpjTV26Qhyr7uE3CZpRpBL6A836UeiFCKTE7JngqsLXSGsSUVs4m4Qs1XqTSXZcypNHRJ8Hrj",
  "key21": "2WuARiyAGuUqSxDEwUDsvnWZAxdVABdRj6RHF7Z5a85r9yDiCq8ykfFcwHhX6aswPFCDi1HcsWCAKcGTxc2ys5jz",
  "key22": "21vx1PtJnbJhdMjaR9NYfdQmLrGmfKKZdtaZ3W2fWW31EUq8zMDf4nc8BrMmHY9pp78yvvDNiRtq63auZduqQg6V",
  "key23": "4JYJYZDsUSvRAwNnUYQ3TKrrGhRn7szeuZcDNfpnqbJni3gcC16mAvQn5ZQNa7G2GQEdqvcD5QAXr32LrV7xeqVF",
  "key24": "4cEYj6TUibF5K6ruyP5325yABuyTVvML6GZd36cC7i2mH6kcbBfUY7fAQRmMofNQHCNoxZ2ga4343S1RhcT59i7",
  "key25": "3i69oe5Vu7i5PKjePyz9NiLUzMvRz3xkBYKLmo57xgfrqKqFUw77r3aBSTB3s6fsS3aDdooTHVKKdSMGc6wXTmna",
  "key26": "8Np5SAjCj9FX4u2mpYsLtgSNAQdhnqdKdaXBqsjfMS19xwEoj1rZhCfDEBAqPsLLTwsReMnfAe59hXQrWCFqDiW",
  "key27": "2xS37eR7M7mq5Z75jcu5YhR7MQxvPKy5nQWeBc7MHyD56D2iiVUBJboow99yKYcbB1HeazrrEDWvuCzwPVvFyzFq",
  "key28": "4BPeNDr9s6mxQzZf5X2qBa3K9YiBPHAXEX12GZH1hCftcUsXAAzetcC6rkdowKcho2xSos6gX9MdCS9U58McMDSy",
  "key29": "3HaGa41g24tyjQGJoM7sbBGTJtetz8Goc2xheTWLTtjYYDoDxLKx5dG6kpzfcW6ZcTsowRwDSB83Y9Gh5nnqju7J",
  "key30": "t2kVT9faAW3u8F6biKdrLYpEQAHaS4CYHYDDYvbzo1F3W6NTgmf2J4tQZLd3YoNfn3MqaeSp5ShN5ZzHPeWtMce"
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
