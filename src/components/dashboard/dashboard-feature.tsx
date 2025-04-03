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
    "4799nJ2jznUqvWoYyDbM9CnTfPPEhsui4azp1VSrfnv6n1nvto7a4VUtwFhtFQ4mTXaA6EDvtUCcTNSqonT4GVBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FhkedoucnyUe336sp3wpXaktRRxYJ4nHvRTaTmyH61hK6YDRV7idovrMT8s4VqxuYiNnDYJ6giq3hG7YTVNc6cv",
  "key1": "4o9CwaoybihR7dLCzwEu33QLu8gSR9FqJD17KpMuiHyF1cwppPvruvMs6sEb5T8cePZDrDNvfofsXtW3UVDBb3Xv",
  "key2": "5FstjBw85scV2mANDXDxkidi4gYbZVkfy6tu5SNiuY3XJbNeoafhWdKsG9b6VSppcb1gs4Uo76WStgvhLAJCLZpT",
  "key3": "5hMFvFCxpxLTCpwYE5sQrLUp1A7ZHLnvjddRjHC81Pi8abo6hykeMjAENPMTkxgzGRB4giNttGTxwgsjzqkc2rza",
  "key4": "3mXApaF7xqvLoJwzkdk9FwmQcSZRRDGRj1WTYrnc6XebafesSUqG8P4QnMSxH8VJoGajEGH4RccFsinNeEgR5xGw",
  "key5": "MxAifPTjt2MhyAXhzppmSiUmQErDW3D1eHhSVb8eVif5x52SPSp5sNup51wecRuSg2FEQzMKxQQ3UXtHYiXYmtq",
  "key6": "2zNemeYyWHWQhAjAyWbhGp89DWWV53Jjm967nYuTyrcrC4uHENY587PFBfQw6uLCr34ZrbtUNGNG8NwaqheY5ZP4",
  "key7": "2TNUnNDopo9oRzCr33ZPsFDiwF9DRDh5ksau2mqYKKcqz9TAJVAhQVfR9Du1FoBU2ARgz2ctC5t3Ckbm4VEq6wJy",
  "key8": "2dLTJ1h8GgT7PPgBdSqbvETF16oZjTWpf8cYt4gREjFkp5c9LCaR9g4GfjmGgdHGUW8tERMANfQjui24GRzPmHFU",
  "key9": "4mEGhajMkwWvU4ZuLkYUKe1LcUyCnufuUfVCyiWRz53pwwEznYFK6P8X6wSLiE3eAGJ1DNSDWnpwsrykUzdmWeGc",
  "key10": "vjjLW8nZ6GUaV3N1QEp91MYDy5CquB5dgD91N9MuxRBGp3XogAgw93y8boKZU8MxLHJZcezYw9i4M7Bra7wjDCx",
  "key11": "4TiUyZZMJ529dSNZm1xfbHtYi8yk96RKXwRTbxZjKgEvfZNkoneCd6QLWTWJ7ufd5HbQk3WWVP2XqrptpBF5DTif",
  "key12": "kf4SeGnXbSrjxeJ4UjnZ7QsPZbgtaUHZBcMH3X3apbNJVoVELVuyAeRYFuYDQBrLr7bigWFk552jdUV6MSfuaFf",
  "key13": "3gHVmdzfFd3JwUwduSjB4CFSCvBaCr55Lg6zdY98ibt3LhpC7PyQuu8xHkZRXMqVrAr1g4eyKod5o3cxsncBWyen",
  "key14": "2FkZuaX2ZAFR7yWLhj8oJ4B4Yi2TwWNSxpWE7eXb31vBNoBDCKEjpfGuMZtvcABFDeqnfAJNBeDPqUjGcdejFtAG",
  "key15": "vAqh1u3RRMThQeJSGvPw9WcRvpp49eCvn239Mzr4zRypcGTuaNRo6h1KP7wWVh6uZdvDHokUijwt3AYoetgShqc",
  "key16": "5tap36kS4Snu5cdC446G8Eni2JkEmfWqJyRgKrjyXDtRuG7o233z3KHutQdKZPqazVJTNY3iRR8iqYRKGu2Ght4g",
  "key17": "4L3gJwe9zKF9z5kuVmsGrCRb7tfZudtbbM2AQSXuCBCwNJGHUEDaqgAMKQecrhacoyjNFrW1UxqunnbnqpFxtKeK",
  "key18": "4Tt1sjKuNvtj6y41L52rH4ywMfY1eqESCB7XaH7Lr7dhAWRCaU6pZKSBV4MCdjNWTStodmBMB61mWiMG2znqCnif",
  "key19": "RhywvYzxP4hhWh42Eej8WB2TVy41cWPVHzQD7aKoKdr4gEL6a2YvFWZRNYkfgDC1AvsmTVZAf8khzWRDHzPUA3R",
  "key20": "5NDFDdvcVNsLtrY2qw5ncWWbB39VyJARiEi4q6AqtyW66kUjBvsrn1pkcRpXJjPGweaK1ts7hhmFBRSnyZZDJbZt",
  "key21": "4pxnKzunYCHSGRqdwj4oHeAq1sHXrx4QFVAJvX6t8JM8GSAF6TuMBrDcUs8c6DkLEBTt3y34eXvG8g1R8Ve9wpZE",
  "key22": "4CDjHgG3NeUvibBHG5CwU1oSxeAnBSMgwCX6Gf8uLMMUrKzqnKWTdZo41KqFBLXKuvVfCWXs3XMUPzToq1W79oEE",
  "key23": "4AJMKyzgbhfua5CjEXghSdeB4ahDBMERbKjDFS7VgFx3BR2cR5h5cTiE8npwDM924cWPm565JF4ULc9vHsU6pWyy",
  "key24": "3QkMJj4Lvpa4FQfZirfMpR8kdJcmBYSM6E7gb8XoLXEXDJPNtamBVvF1Y2SERFp4G95QvY4rc1sPzNTNznT9Jm3J",
  "key25": "2x27SaNoaduAMkviAFJGDr6JqXHRwLJ3Cq9HdEGTubc88KvxypkdVZi8uLbsCAyYm2iyumrQFf47shed9cxmEE7C",
  "key26": "2Bb52teQyBLkrsjC9Usz2kkxBV8CsUZbxovAJcGBm7jmofV8CTteDJJ1G5P8fhbwiCFWAnNV26oXRyqQoNRxgk1n",
  "key27": "2kWFyHpF7JHYuebUWBKnt7SCD5JrFDBYUnW4pCiCJxRr8Hcky5ci2eVSsQdCf8oYocEXLxTyEpjuy1Z1i3qribMt",
  "key28": "XVvYoGrNWBUGi5pP2JQ224NuX8Xt26kEeR7RXhN5VxogkPXTHhV6o1dUxDz9Mnfx3awDKJdk9QJyBj1XZxywGV4",
  "key29": "u8iSmiY2p3pyE2nm3nRxJpVE8arptronvLKrT8c3dXUWiH27PZt8U3NBY7ehtSzs7VRh948sL4vE2CJai5rquZp",
  "key30": "TDPrYzX5qvDcCgcfengVNSwyZ4DJECGaD71QEpb1Non1VFF2mfPpWCj2gDAnTJR4eZTFt2T3i5oWoCJ9aXkD4Xb",
  "key31": "4xqj7qZNAutGSt4SAPwoaqAC8BwHQA5i7sdN2pCsuuWHC6GLAiCD35fe7q4DRk9py6HpFgUj7ZaivcduSWdAY8jA",
  "key32": "5cC3FY4nu3NhuoLHbUKj7CJiHW1wbR7szKxPFVWTzVewW7srzSNbdw8cncHQwKDHJ1mty1SLweLqBpPC1SyKhUj6",
  "key33": "TPchBFSi5TE1nxVeKUrqvosTaRqdvQ123UwbhWKLthhfN29CWWd4PkkmqHAZ7kPvbsg8TUPbQ8QHbMJx73yLXbF",
  "key34": "63MZFjwEZzaY65d85BgZu3zoM9RGiWS6qVr2iziLFU2wjER2AeZmxxS9kN8PAkKg4i6aSwG8zHs6PFzxpeXyrdzK",
  "key35": "2kDjVqbZkbpZHsnvqjP7os4WzVic6goa2WpqS2bMMZGHCu43cUyetde37jTko94FYqzN5o7CUoy93bso5BCoYG91",
  "key36": "4xGoieQPS2bXbNjSfLLTvKLDrWF4B18Vjw2q1Epdthu2eyjDyFzqnZnJpUG51HJphmb1RiyMe8fBNx7EC9EoU4kS",
  "key37": "5oEiUD3Wny7pdQLB8fZoM2HcCqYGUewzy8yqUJw63WFnTpMQYwwGXJDSyVNDB4boKgfZf4o8TcApDJaXiJ7zLXPm",
  "key38": "3gSZUSCDj4vgroJkjGbqkxYQPim43miyZtgWyFygHez6LkVKYiNTasAjFRv6Tuo7S4sdEUbqnzTLaWhHyNa8finf",
  "key39": "4fRnPowKxVH7h8sv3xZ9xXjMa372qQofnRwcJbTZJnJPLuWiGFjxpFSCZKewTuw8XoLYptXcPJormV4qU6P5Zjoa",
  "key40": "276tkdpZw64XK2GijGDSGM3CsgZZfWktVMBFHHQhXXGTLWfTbUk9RqCoRi8Ej96fX173TR65vhRjHBwF8xWBibPF",
  "key41": "3hBtcDLnhv1b6Ax3RkENYd2L1Hoiso5S2mrVjhsQAQwcrd9dby8LuhEZPEYWtCbvbdM697u8Riy8yHGPmvducd7x",
  "key42": "PMG5uLsKhQBvHG3m8PUUuqbcvoB8YKV3HjPsAbg1RoGbFVNoo6YcFffnp4g14ZoNUnz1W8N1X8y87Sen9YqeAzK",
  "key43": "4W1NrEkKXtiBmrhfwgm1wUSWS8MxJv9RrE3wQ5KfK7nEQeLYnXFmRsNWXYErVeRoPwLJC2MBAqVnQ5S2gL2TbAC4",
  "key44": "2KKCNWv6SjzDJMpxNnkXhWJzJgKDrfxvtdpdAm9cRF54Tx8HqJUnNwk24XMhmkURcSUToiz23wV4kEg5m7rsoj9Q",
  "key45": "4TA4CZxtNu5QYZsYSAK18n5XmGUkZXVQD5UFgJUmpGSao8AgRN3A8QmNEmRQ2DgzaVVNFx8knKT37gXFYPR6KZjo",
  "key46": "5YMkN8Fd9PxUpdLaCtCUKxHeS8LuWxJEpZPkuaNM7W5nM77ABbZ6whjTHYrHhBxzamEJim16Wzp6cjaQv9GWiY7j",
  "key47": "jSgc2PnMJqQTnjovsYyipscF1QexAjRojdSzguSvQxkhWPrVe4eNYkF1yQM1RL8nC8ZXmoxRnm8oTb3rbJp6ea5",
  "key48": "JqGQTQevYx5DhokQarGTdWsfZ8rXNDKzxJBdqaVJbPKZiWGdbQyrGpkgbDjVcWbuTQZUAH1VgWYwKefqgzd1EEs",
  "key49": "3UAVP7UfksGRk7JpqYPcxrfV3wjp2xEKdcssbCPU33SUh5CWoQd4ANJxzg1zPLm8xeUbhxZDzUj4MTHJ5jNNqJrT"
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
