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
    "4YW4yQEKGyqtCGKDEinoGTK7bjrwMtiwLQmuE3bCzgpMrZQMaEPPQqExKp2Qb8gNEr2Q7XespBwbm69PFwy75CeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fE9N9E94xEAzcz518pEKc1J2a5ZiLnLmomHaRo2SpMi3yGpNKoSUGtQAAJ14rJD6s3xXYGpGvaf2mpjThKhFrUt",
  "key1": "4k3eVtvT3QUfgcJeYVAJ9Qz6KTgSLrpyDTcHHJsSNMkCjwvBtsS1YoVMqAiwSTm6w9rf3UZegr5Tm9862etbaYWn",
  "key2": "45eMqgN4CmQ2nMq2UdqLGunnq3iWPK1i2KnhyvfGmVU6eY9uBAnt8teXdPrhxGGHms8KZCtGAFezDd5J7pSYQRNa",
  "key3": "2wB44vhrJsKCd13y7RSXYEqvHwWDuT9gUhz4A8JKQShvy5awNhZ1UnZbwSQLHvQa7jbDnUrVwg1E1mie8Vw9hmuD",
  "key4": "2q8o4AHXVRYQx1k9LCFxJXFtAxxfLrGh4mRhxH4qrHdUVbd8Th4rgCpefS11zhE18AawShMCpTEFMddg4AqoC3Ni",
  "key5": "6sJTagtx8zy14UjsRYnCRLnZCpkyLyZHpmJBPscRQXGVbNg9xKfvfdYnviPz6Bie7oCJCMrQDKzrSoHqaoyvr3E",
  "key6": "3yGd8YSR2kzGoJFBkYENCuwCDQTXLkMAny15tg2wWYXSWknBTtpefjCJsHtyoVFVu6h8TvakzMZ7UqXap7UYHLSb",
  "key7": "gqqEgZxrf7tS58AxtrcLBNwmdSUw69mWt9PSHvUFctQJtGPChN5B5SFAAYfFNWpFBg9VqyAZ2MPLQstLMk66azy",
  "key8": "r2G7TvrYBpKghedy8P9SksrbFwgqFbqP9uspYtu632fBbQaXkiaVnzenNqCBoWDRgwwYKBqgohatpqyGhqJz9iX",
  "key9": "3TfdejQwjXhb4TfccrcEww3NJDEuvVL2YCXukeMEXCJKpjyQ2ALdBr7cMViDt8wrpgTZfRn869MFRz7N7rjDgnL5",
  "key10": "595seFXr1kMfTVoyye3hTNv4k2ucF9MzeVgTWckLHjM2yo1xHYBHcHt4HyFAmeWxuTbeu8Y6Ly1b72612w4CJPP6",
  "key11": "3NRnfVN1vAKnyuyGK3vmnz69GYUgkXQ3WAQJ4vT5WDTnYVCYDp3ZurFNyQxACtfGUU1a1cJoRvEiUGnDF2qjdzBX",
  "key12": "2PrDSfNYeJ6YW1GETmmbS1BsW92rNMSEtK3ULP7C5mUEnWyzC36MSKoViunVtY355L6RSD8Z38PTw8DwFetf871v",
  "key13": "nSF3hr9D6aDqEFQaPiiAFjPrz1EGidNmhwtTwCZnqfpHMoAgRNDZ8MyBiVRcvNFqrLDBmPV19Yc9oxAgLCZu3xt",
  "key14": "2RqSpnSLGo2zfZPq2gVBHQvKtKDufKfHw7fQ6Rdn1fnEmQpXTeN5uLRf1s4zPVyp8RdtJhHuhE9FgeZCQfR1swov",
  "key15": "yU6Cusdkj2psFdhw3o48KGzhra4XiaqquAyt5HkEton47FPhVEPV3rB4dphwZ5zh8mbPGapgZW4y7AMNXyNUPL7",
  "key16": "2rdifqNaF7qKdcw3AJ61U1GxqU85omuo1mpoBN6ifXY2pkBtQPp7fmLkGWFPSiJ1JSbwp8FAyLdFBM9oxAYXnqsn",
  "key17": "39scZQRhDqZtvaoyFa8o93TWcpfxyurFCFXUmNx5F7wzAxz4Ncd3iKx2exGqm5Tz1vAk7RC8Af1h7gnBPNSiRfFD",
  "key18": "4RXoijn5VGD4rRQQyuuyEDXzwHUt29ysBZQR2T4qXuA3RzvhVbzBhEEQjdLzpFa1KLF8uuRNuwK7SckQkuuxav79",
  "key19": "2J5YUbY6U7m1QJnHwwKKE2YCeJ1P4bq6rgFSdibThQxo47Fa9xPzccCpg9vpAEVsixMVkfHsZbiDY1rbMa93LPut",
  "key20": "3vKhuWju9a4vyPxK2ST6o6pN5VYPv9mb3b8XzxrP5Zxc3LpCCC5vWgxvhnLNWrptnt8nHvikJEJzHCMmiRkWwrYV",
  "key21": "62rzxWDG2oPU9AZRzDPtGhAu1Z9meTKh1yKGKw11aqNx4M53XRMrqvTdPPcxZevCfefxGcxCcEaxDYHqbasQzHsE",
  "key22": "3MRSSnkqeH5KDY5xiRDButxtD6MB2y9YkXS8BJfAmAuEic5RhpAzQQRGkZ8U2LgcsRkqisESrpSmvXJ1ig1A8Ak8",
  "key23": "3pXBQ8dnvB5U76W6rz1x4z6byCHhg5hLqrEtNpizawNqYxtQBfXuJ7HJJrZbdqz7AwnaHEhD62UegDVLWzEX3y9k",
  "key24": "3ogUAQSJZcrxAJWeBtm1qNJPYFLmM6aUFRkMkQfk2NzSRK4yVyF1g9afr61FZhLTdD2tvdzAZ6SM7bEXeDhNBoLM",
  "key25": "62n93CtTpd12VmFQoE2sh5MuscvYSXurwW2iRYTm6YnBZ9EvEYTs7obpTn9DVsAPpk7uVa8MVziBQXUAaEqEw58z",
  "key26": "sS7ATnK3eAQmbkxuiUUQDETx2i8aJA94gR3Csq15LhkqnAq6fVz1xuAXPcxD4BJmhPYJVY7A3oBa4F1cBNAgy6L",
  "key27": "4GfEnC2Aa2QcDo9CkbiTGews6z7nakuYtkpKzq8UVtMoTjVoVV12yoL7eyeXzo613MnPQWHVha7yc7dTwyfGwWBJ",
  "key28": "3oXR3CoPytx8786ZZVyFXioLGUHRSQQcoV3H2rETcwWZZ11nPaJ9dnx1NN9Fz6tt4RxfNKxWhueJPXeY3riXT11N",
  "key29": "2GBjTnme1gP293bLLm5UpfT4zogopgdzudcMNSji4na4ELn38yh9wTYaBwvSuRriMjivHvJ5tfM7wCKfxpKTpRmA",
  "key30": "5zRoK9Zp54GKAic1q4Rxf9kaNrYwNvUXtwekzFPvaCe8ehP4Bt1tmzdCi7fEMCQiGdTHG3urzjGTrm79u8AHewj6",
  "key31": "VVmo7v8NHL1rfc4sZ4ZQU9hL4NFZYQad3m115p7MHidDL3bti5ZKdvPs14yD879z7t8wbUmrJ8VZzJ7nwmebc39",
  "key32": "4o5nAmEFH4zwgKQotqxuh96vLyjfn2znUzxLCJxDYKkDgfcW9HstgzHkoGZ9LCBdhUsFDRa6mvZvsqMQ344LC9Gu",
  "key33": "5xwbz76wJnma8N2QUjWBSrJa8RLbrC5vkH3A51Hqs9WVMDdF1mobAMo1KV9HDwEydaj6T6fZNKVgx7pTzHvzZm5G",
  "key34": "36G3bgRfCmdMSM5WD7TLHiEe77od65r8SiFPzjA2Zu48A2bVksGuuwk1oT3ta8i5pgm8tvqr5ofHF1WWVpHq18kP",
  "key35": "GzNznRpGYbDubqtjucm9hEsx5iLod4WGPsCWp1joWg41HHQ6EpgM4P6jjigxtohz3AYktuxsJqyfPZ7kKRhhNAF",
  "key36": "5UTzTtDpbnLjoxWQ1gN7ZCLibsME9p58tWCWxauC8DE2aQeDKLepJ78g4vfKZrqvHEAW7nL9BZDa31Lz3PSEyw1H",
  "key37": "4DuqH1hhkPcnmyQpsYVW2BeRkcisG6hPFtmvAzJZkWcSghNbACETUX11auqRkFUgKtWhuH7pjLSEHUqGrNZs8aXZ"
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
