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
    "3c8NpdgwwASeNTNSUPAKK2tSppSnFK6CQ9CucGE4PFsa3PEfLubqeRWUf6TPtYQUuPLq7nkuSPN9QYYrgLg7Yugk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XD8EhVRPPtnHEccQn7KJWRJWxiKxwZpVTnNDT2o3RvafUzby9gE8WTWEghupLyn9DxWKbjQKMDJU1AQr6Y2oZdT",
  "key1": "32Qu8eqSGUyny9qr3mNCjPjYaMLv2t459LfhL3vrWpdLdMZuDyntSYweoypDjXVUZVmZXjsSzNWajHzrdyS4XCdG",
  "key2": "32TWumDJvnqfPb4LNTCgUgUbb3uLKsQZ4XzHiV5tDenxzsHtKvNTAHv5UTd9NmtAcQXz8TmENCsuZ6UfdCcKrBit",
  "key3": "4hKQtsXXbRHNWe1RrRti5PFX6qN4TcaxuEv1wi4jFnZ6d6fZC8e9uTdEzyo7qqcH3reRPso24QJtKoFjbzYg3K6t",
  "key4": "oCwHjmphmqonJ3FL1h5rnnzsnCdqNX9C3CySUJysoqbXp8keCwTP5N9mE7rPaS6LzzDw1CcpvrERbspuraSscP1",
  "key5": "5HNjF67kUFu6ovEkfbUspwATZFtvn2NV8euiUzLwQyqcjEjN7Ttzt25eCmhaPGkHZtEP7BFNEZ94xZXSfg6JNhzQ",
  "key6": "4NVoebCfpygNijoo1gJcWXaLufaMk2pJQjJQiU4oQf8Muv1rMFpLP2JTubqJuJ99CUtVKFk2G37UWsfLBHSGxSLM",
  "key7": "5hbRiNSwZaugu4JU2QEaFQfm3ZKuX1DjpQqRYoFCxSZiBYDxfqwWCnxFShGnusQ4LxARWrJVQmoV5mfyGMRHYrS1",
  "key8": "47B3qxxWChEsS1yAB8NvutViXWDBg6M56ELRHaLo5eJMg5NXFxmYcVzZxH4fkzRbDqxbTswsvipSV34i7d9NZJen",
  "key9": "3Y5oVC2N7kH1moj5nhPTd4XzjA2gSLuLkjKUT5F1en9rPrg5LNTE4E8CSyWPcHJjY3BTDj3VuMU4LqrqBeJtbaHo",
  "key10": "4Fon8G21ryT6GTuMnTJb7u5hfE56ii6GdJjS2j3SQqXrVFfukDEeCrNe1V6CrLVDvvFqWADgNiDhCVqmHTjDTGEL",
  "key11": "VVisCtHtQDu6re9isyAnHve3ji7Fbq8C2bAnTjZwrUMYZAyF22sFxCQBtZvZRwBAiPVWXwqP5e68QCtv8gAtoik",
  "key12": "4JTkUPjkpwUSPWovuQ1XKVCuMk34ztefyjPpMBFGJM82ahkcUXcPGfVhVC6dMdjj6sSUFTH2YJW8wi31gYHgJ4ux",
  "key13": "2vXyVL3tVm5ADAVEvmcFsSv5Mvqv9vmHaThMBUFiR5ub8hEG8SoCgcK2939rG5R5kUqwvUUpYZkgpwr4Q62xbpHL",
  "key14": "kh6m1oW3g2ZJLc127oTdWQP2AdU2NeSXHsEens4hRgN1b1kcgnVffRoFHQS5Ysg2XbxYxnKBt1Vk1yMmitaM9CH",
  "key15": "2BoqXcLTXgbE3NgomidBDqTuui7zFL9UVYFJzMnsDP7u4UmG78tYD7T7Gg7DiBJt63pKRjyFNBrv6RtQPwsA1jvy",
  "key16": "3gH8jiVeDytggAMpm6jmyTiVB2y9n4YawMoxSRCewFZKYrYyZACGNke2dm66yRzPYWCgAHwWJBeLsizhYF4jgEmG",
  "key17": "2aymgs2ePzE8NyqBcegXgtHN15eUvSRfCKmtyeLN7fs8C3sMa3wQgTiB14y5GzbuyukahTQVUtU7QZGYRu7tMv6f",
  "key18": "VPdewfkbr5Xx7uxhnM3RBTPdVJcg9rswKuvZH9KshQK82adgS5KBJwFdRCHe7k7DWPvTmcqY3YcDbcL3WUL6Sjn",
  "key19": "3Tzw2Aid4x6CSougbcrP3Cy6zdfpP1sq7TpRV6uepo2jgNsPjXLbznsJR3f5eSFjPkvK5y2bG94K6UqmGCvAvcHS",
  "key20": "4ZVQnDBZP1EirF2ziuFRriJn19yZx577ZYUwEi2soHsf8T7rhoRTTfofufNH8pcJL4i8uZohzefHaJNRTWipKKKi",
  "key21": "29zkmvMPUYWgZBz1Y97CoQsdbLSocjetK4GC8VVkV4sB326qATSHuSsvMYGaweerVWM9uHSWW7trpesZH6GT4GzA",
  "key22": "zzZQsp7a21sdaFnF8XWULSbD5zvyxXPuQvi9upLM3ofC8YxPb9oPAE7Jg2gwVbdozwosrg6m6mF5EwsaZ95FXeb",
  "key23": "5p8r9r7ZjHoK1Mm53tbUMRGBGQtYDGqxVeDr4CxdazoPbz7E7a4shA95akD2ayR6MJ7N4cDUfBKnrSgNsc2ZkyLq",
  "key24": "VPkWhUyP1BDoctDEYMJWxnbTvUW9koT1bBKQtg3B1tQUeEXT7mxrn4KHDdi9UdH76V54kBDKaZmfPhjxMQkk2DF",
  "key25": "4orcFGnCmZDJffdBeEnH7AfA7by93sb6jvPdWsWDQxTZGEL6ipqZ1vzF98JLHsh326ar8QUXbxx23Dt7jeNnhgR9",
  "key26": "F2fUFgqjRLz5RbEpuoW8nfRV42a4jvSZ4hMkhk8KombuS1kPBpTNsksChwaTNoDXCVqX3ext13cB1QGkkiu2LJG",
  "key27": "3Z1s7j1oxBALYaXbTHBdeAQocnTbg4o56gdjGKwA57QBqKWXNNHg2K1iwGy4biuESTZAdoDCaDGn2sZUHw8pM13o",
  "key28": "VPsei6MC56bidkJmhb2XGEEpsUTuSzYsuNWDmAHPrh6TuCjaukYJNejLyLHWjX6TRdbthTFddiJmS36A5nfoyra",
  "key29": "3T4ZC4DVQhK8W2Nj94TNFrY8cxhHhBhJVc2JZAZEWGSEdcjAgmFPF47XDG1FjgAgfBdo4W34yE68FX9wbegmXEtY"
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
