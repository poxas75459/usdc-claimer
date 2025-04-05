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
    "WDwEuE7qXVYMvi5sXsK8yi17LjoQY6Su5BAmtQC8vesAwY4rgMW927Qsr9QKzs8g3gasNsYWaM8szYcMnTsnwRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCQpGjnCHHb5sUsteWvNzr6qkWEkqkKJVUy7pLQRDLLuUKZwvVFAJuddMgpZtWbhJW6VM7mXjAQfYTBgjK96zSf",
  "key1": "3L8mkm8ZGa58jGLVHZZLE6CrnQAV2WyyU3TgvarfGgqnaKFNJVixhchqT5x7Bz4uTkY6B32MNvL9j67uUZ5GXB6j",
  "key2": "5iwJTWWcNBkJr2ZWVbe2vCXYP4GW2pKDDAkBWjeSNC9NJYmREG1dTr3wSLBeB6PJkJcCLqvUCg8bQQxP84HAbJRr",
  "key3": "33LutBQFCQv7zi5SdnEgtmvUuocffYqBP12MbHbBqMfbVK82HQKfgF4gFmSjRG1ET5arq7VBmNFgEAXZ1DoLdcc8",
  "key4": "kacp9kd9HSR7ZK2buMVwc419coNvkZMv7u2ZBqHfArXQD7VHUQAFm27f7nvvH1GRACp6e9vTgjS9pynn3NXaXSF",
  "key5": "5VDCFp5iELpgnKeTkMsroHA47ygRkBCsim6sMNsiq17Msp9Bmgo11hQhiGJ9V4LYCsQbr6krpgsEuUkqwrgJzrWd",
  "key6": "5RcsRXfadaDcbXavAELS7H8VJxWpkLSzcomo3k9VU8QWy2WoE1wXqYMBJDA8A2otSe2nwrLuLjSXyzAf4ZH51rbD",
  "key7": "4fTKQBKsn4MJNWhjxm27cGnmoJUwGor1PPBr4au9HV31VJKJ7FoKJMKuPduPm7qLfntoQmVxGikDTkYueM3c6uxS",
  "key8": "5CspQ75EwX2wPYbpD3sHRVb87W7EqHLgD4NKoLynQPGnHFGm9azf6qgrKqMGCYCuFSL6kEpej6PzdGUyB4Zhfwwm",
  "key9": "2ARA1BQ1c25q1SpqGSaMdYpHXun5r5Doqy9MQEVJCRq9Ct7om5qPp1UTiaktPWMoAJXLSMwviK5kZFUFHije1p7K",
  "key10": "4Wn2yQsMXVgGxYnJ4Z7URCabd6HZw6z4N6yyvWGVQ3BWMZiCCvHqRgp67pxQjKzcHEHw9KGH3Qdm8TP3L9TSWW6N",
  "key11": "4pyaxmTUToAUgiTyu2TdCouzEjQAx3WZtj5Ey4LfWKzUq5oJoaQAMKGREbFv5dLER4Wv47U45YHrXnnDEs97LjbG",
  "key12": "5YUCGbxv4GV4Dhi2QYV6fZ6jhBzqStNewrFjzMKfnjyomokpSEpNmN9nayBHtG7qunxmiUSzCbDsTdqFfCrM29yF",
  "key13": "2CEduptbzku7PVBusNxSqPNs9EZXom197qyt71QkAGizk9haMrMYMMiaETF3YJxjeN17jAcNS1TTCpmghZbufK6U",
  "key14": "2GLGQwcJJHhDNikBgBccQVhWZzLH7QuNaeNNt2CUp9YeEhcak9xLXZRUu6hRHoUBdPY8jFyp9t18VJ2Uw43czhhu",
  "key15": "4kn9bNj63abPhtqKYZoUSBmL9pWvpgE5JWzyWm2T2fvfjPEsUbF2Uik5SSgC3jd8bKiSEtpAFDGPyuknfdiCczCC",
  "key16": "65WY5nZuFxNuFS8wLaXRGGkz7UPiAKXt84JGis7A2VqNk253W8SHB2C1d9MSWzAtvPJwPr11NUUxgrigeoapkSZZ",
  "key17": "31F2iou5JHsMcv3jJPXgrx8WpdwBBqJ98MqVCVNombpdn5AjdyzRAyJ4q2T37H1GY5e4PMqPa4rzqBRNsqMZ4NaJ",
  "key18": "3yzWLYCAjNKxrD95CysyNZKEKw4ixPfdjwTvYTnLQxVqki2zaEQma6VNe1htefqrhPY1ayqppBSfrEtogR2YUk6V",
  "key19": "5FNz2Jo8ALGjvDJ5tpjeGv4ZbeNa5jCdTxcBxWkRjjAd7nCAtEsHEv5eb8AeFipCHCZQqUcxC95ttDuSXKhkfwbZ",
  "key20": "41Wm2GSGi7DkyXiRzuKNxHTrJJmoxYHhmH73N4b3qNzNSc7yE2KMNU9LiWkKLgwc8ieei7BXWcruaRa3uyvdifrz",
  "key21": "53J1NKHv11JTwvqPtE95rY7zL6Tg4jsKW1Hoy7Yc8urxJe9fDmmZBi4UsGkQBNymLiGNWjHh39oKjyuvhpfyQZKy",
  "key22": "66uPQEC64PjRKcL5qN4a79nbYtUixiCYUdqF5GdPj2DW3vNiMRPewJ3Rth1i3yEhh5EVAapWaUmy7SR1m9zwjkU4",
  "key23": "2UbxjraYFrt4GQ57bgm8xCicAp82UeNLrNQWfcrBeXhB3stYCGDaWatMstMydpHq6iB753Zn5chM4Y3BxsmaUr4g",
  "key24": "4wC1ENm8o7RjC4uFA8iniMF18JvCN4UzLa6MQz5Qe9Qj5TcHVD9r9AYMetFzcJgAKYvzyRHGe47RngAUmMjH1VFF",
  "key25": "5Ghbhw3eJpDXEedYnPBxd446nxa9V3DGYhrY6HVPGf22Mpasff8oP6VgFLaBh9E7vetBpsq3dwS3MSy8zGdL3FZj",
  "key26": "3zanj6M3gQkW729xgDZBr3bhwYceg3Uc3zWUkCckwHvpaoCBessG7ue7kD1TwPuHR3RG4Jzhu8tyTMtNndL8r9j2",
  "key27": "4BmdNVjGZG2KWp9snQ5u5UQQS5hK75pympi14vMDoeoaeiZ95eQv2XfuoU3T7Nt3rAUxvu1XdUE5LaAG6RfTR1BR",
  "key28": "JViYikaZXdLg3aXTykghUAYkcBVCJvUcRbSFR1ZxmCh9Eem2dCrPKyBbroGRh2Ed1u23Wo4PFWPYvFDgGEHbzH3",
  "key29": "2v1M8H1bnkogTku6Q724QFGm5BoxszwEUr5D8mbFxyxMqjuTY35bBY77MezsE8r1hcqpcg8Xv4B2HpB1N7PiLEsE",
  "key30": "4esK6qEtHmGK2rwhau46XZffhhRY8hvLx5r8HDgi9BMAJ9eBJmzXQhBNZQmx54Pw1knwQr3YLkxFa5QELzRtzpVU",
  "key31": "65Ls2Fio4n9NbmHgZjJCXBohG3C5YboAgckMJqxQAoNRHRK2bDmvLFyM8ZDGXzmfMnJHMN3ajANSzZRGtxgFjE5p",
  "key32": "4y4eYBQwzLJDMmviTSAhZf7QQpdn75b6rmqQiG5Vu4Pk1zu2BrQS8UXNcidqwcJotPihqjEjsDCfikqHa6W4QXYj",
  "key33": "TdtmqqgKnKtfZhQRn9GaBijaXoCTFBcbC7fjjbh99YGJy2pJy85XkmaEby3Xf4N47HVz8r6LqdiMYd1HcdcEMSC",
  "key34": "pXeWzQde43ToyCkaEPwpChya3izppzkvYSLrJh1VndQvzrt9LuhUDgENQAjurdpcPQXdELhJevcCjGB5TeVed4D",
  "key35": "3bxGpCuYNrFJM7sytV83iiX7trEarANZHfFpVJaKb5UT7PbV5kMna8P1Vfi14ZW36FtobgzWhZWFio2DL9uzW54Z",
  "key36": "4yACPVuNFJU6G2Rj1gaYDwZBg5pUheSzXL4bwVC9o9dPzW2LkQhgpT4tCs5yR7DYPc79ihx42U4qQ3JSoGKfhVp9",
  "key37": "5qF9kZ2UJkM6sBGQJgUkGF33EYNfqh9kvXzWwG3LKj82CZnrzHVvqT3vbqQByM4K2FEoCM5joTkdtvd8ysk9473C",
  "key38": "MdSzjK8bbsGGEEQkC5svpEf5AgKjoiJVt1BJwZVeijWFwXBrHUHM8vQ4yvkfgwGitUoPtjYu6wx9Q2YeAMBbwsH",
  "key39": "KzAUAkpVbxuuJAgxk6TnYFm6i33edf5zGrJdJ9LZmpm3V3Ma6AwwBP5fCEuS7jbgKRxw1qMd8BvDHftSW5wWoRV",
  "key40": "3XMx7yy8kSwUM7arYnfTk7E7CHHVSGCNQyJvwPyBHk7mQmwX5ZfgA64iTWAPNzYk7wD3qFDFAv4pHa8eDp4e78Pm",
  "key41": "4G237jLhYgcB5pwpDbjFXRd27sHJrFo5fqD3DjBXYioST5qdRDvAZ1XAuWrc5hHMSf12HfaSqiKGhaP5Rx2KC56o",
  "key42": "3jAeCtszdihaSSmo73DTEWvgYx3KJ3M99ymxFoNQ6dNa4eNiS4KpG5DsUhwwHH9exZVXh7tCKfd44oG52gy61URV",
  "key43": "4RJAmeYNWxifsddhubrtwhiK8dhPJiTmwhNN25ZkTsWuPEADS5oggw5gnuitmvtpqvctDgPX5QeL12fKmPzFbXbz"
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
