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
    "5njxfKcAhaSX4WkwiB8CfpeWMTodiGsueBtwSPvhGUYeHaDHcD6uJHxbkd4NPLY55Qr2YKrk2HbysEsVb7YHsdc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boRfXmnxYBjBgenTaFTBu39yUbtJQSwJVia9yaXm4nBQsTvzWv9yEKdZ4wt7adPjFDZCMD8aUQCMaBLnkVupi4V",
  "key1": "4QzNXB2PHzTwBNtT6GFwxu5rVpCt37HFw2xDsQNXULPBreeGGUX3U8K58rTyDSfaYCwbrrdjJ13Jqjs8MmUuGicc",
  "key2": "2SZFdWnE8RpjcZxAr6CvFNYKGp5yTLWHtHoPt6NZi8T4ooVLjdZm334tMTaf9KVYHX3QieMhtJUaT5Psgim5exSV",
  "key3": "NCdF9vhfx8aeCEY8twwwotF19GAgiEApojPy7vjv8JnTTAQCt4rcpptQ6DR5AyJ3Gk3nCGMXZbTQaooCmVC3RfS",
  "key4": "4Uwv9zVwh84d2kSpx7ousdqjNjr7n1RGWp7w4JSGJx4QY1iub5jKi1h9pUfTdyjV8Hw4MJ4wMYJheX2iHR693TLJ",
  "key5": "3pLPoCGg1HGf47rJU1AJam7DZTGRx1zZ6dNQy5wBkWXMd578tu4RdWA17TzbzVVvjFHg57W8T1hnQdWM9Et2gNYB",
  "key6": "3vQ2H9poYr1wb7ds9C5rapVug89KD1U6vf4aaMT3pFkDiHiSQVBrzASHpWpyxZ9rFe3qSXwKCJtrFbbFFMoQ6bcz",
  "key7": "5eE4Dptyfdkjbk9yL2rAg8QRoQU9HLod2jaxwYG2QytWiRm4zEvkGh2FmCurSyaCH8DFirgKU1BEMBZhQWkYiKm9",
  "key8": "3csZjnKGNyN3vtM9B7MY8co2zAui82AsvVJXvXc5C7BddRSzsGYtMeFMfmJjCeDYMYkVFRCPa2DbKxnzUYcjxxmi",
  "key9": "2viXFNmvaMc1PVcQexv3WbXjw2TFMUt1AEnBS8qHM6RDMJgDfM7CBwb35EZDyrJvQi52LbsBEAHciKTZCtaVumjC",
  "key10": "34RuqgqRAkGnBsGLauUqwW3tizVntZEbXVBqs2ixYN4KF2FDz5fZ5gpGLNEWNGy5adzYQpo5ryLGUKqDkevTWZqX",
  "key11": "4r8LGK9kHvQtAiD6Ww1A5xJmNJg2L8ka5TjGSy53mGDFRH6p8bHegFJs8vjFR9FUe6qzhPd7dVZtKrxasFJBBEX3",
  "key12": "2emqdjnBZYzb2rhHNr44psgYAihxGfvwFBWzxqT14oTbZXicczm2sCgaEPGxRsB79MXbKcb2hKaGoZWfFYrJHgXj",
  "key13": "2QZcXwmGqr5jSobAM4huwCmP9G8gBYUD91in9rP75bTnLi2UmUmLzxKaLrYGfe38HpbaaWVWGAgjDdA37j6aHqkb",
  "key14": "5p2q2LxHcHVkw6E3K7eKjpnmXF6hxd4JcTmzQu5FgqM2kVKEyypQxcSGC62teomUZAF6yEbR1WBWKFDeA8A7EG3x",
  "key15": "23Qbzmv2dViGYb7FqbHustYs5r8znt4LxbUcm8GpkuVzHXTTocYX573GT12npCDHewvptNM3GRoYcYHH94rsfbxj",
  "key16": "5rD4D6rfkxYKJquXt7LcjVS4xUBUBfaavZwcJMAL2jf4dKyTDLLpgyk8bsmwcjZbBH7q9EBvmgJ8W2jfZj21qNpv",
  "key17": "2u7GjZdBu3FswkdjxdaLALPUdCqVmTDtK2sE69vMXv4JDg2TqJTtBRWMvtMT5byEyHcWr8LexGwQj3NxRv8xRcrG",
  "key18": "2ZbJs1G1HAYE94247yL7FW2iXrpa48GNSTEb8ZBKEzFHZBUbQwFRwRxBVKSPgPcrD5NCzrGMUNjhuBkiwntSgU1c",
  "key19": "ni3tuzkybfzvAU6AeBpTaYZbG9jmF2ZBeLdoT11RGS5Wefv1Tbo148afCe9xGkDZ2yCAgPkZxjUQssfty5Qy4za",
  "key20": "g17TxzkWrwHE74Rh6LjbFcY2fiWQbBQDiiVvstphfPz2pDDkPs9tj3aVshymBxA1w6v4Y9ovS26Ga6AfWfio4c5",
  "key21": "4LTx9MaK9Cu9Snh3ezb9MTasTi9xLozEBG7W6AeNVyMyGMJbddB7oEXkByViGgjNLTH3cVPWmsk4icVxxqNUs2pQ",
  "key22": "51GJmw5xadaufJtJx1GmcUpA7qqsNi2bkAqZrpoYe1tfmArC3ijysEBySyTkJqbKrKpwjbKtzgAJ3rqrvYrxg6c8",
  "key23": "5NMNW6zp2nZGverS763nVZhcou1sdWJUkn6Zh5uSetVKqT9SxciwsoDmFSnCUoVyjhW4zzUZzK14zRHg7AHaQtTe",
  "key24": "2TDfaGSo46ybzBbWSakn7amJXVrYrN7CYN2puWDt4UaVhMTSFFw4GbNUui4Um8qjcWTAHZC3qzMdY6K85hBTVdNa",
  "key25": "6661VcrLdCBSLbPwKvDSrtVvqYFGv6SsoU8CaS56egfGYUn2NBFyXRNkReQA65agtsg7yX5bDiBdXWnimqZsjX5T",
  "key26": "3ryhed8hWT1qjemYXzKtCgxMhtkMYwe8tDznUoojCz4ZDxstQHoYnUieSJp4vXMDsEe9vtRyd7MFStxUJSD4XjSR",
  "key27": "4HKkF7nnGxGQmzigvtMqTGKtxBePTbsbNSe12DsyZXMr2FcNcajM8W4aEjB71FtbDe5uwQB4ZnpXkgRMuSifZWgN",
  "key28": "5tcRByHp78cLC3YpX8cGead28cxD82Q8pv1pjqmAtVTXVT42ZRQ6HpSx6KjgeH9FabR88c5e52N8BiumjCSWoPqC",
  "key29": "2LzeX4cGkrsr6ZDiXaXhqxzNefusszQsR9pafG7diRg8HWQfKhLFqmpHnASCyPxkm9tiX7FkEwBHajovAHX7uWic",
  "key30": "5EWpxEWt4t3PVbmYwXKrZdHzbNR7RdxPEvZxjNJVdpdYwH9pQTpYVfZ1PtX8dmQM7Ab2xvck6mrpjVhaFkWBfYKD",
  "key31": "5JLMiddsG49MhGZaHFBxaTBiMuHNW9wKx865ZiJi4sumwengFsCHdxKehrue8uja45G8Ph3mPjkT2USwHNfLhL8N",
  "key32": "DMhfP3hj2nbUaYyaz1EiPi1ar9cdbFrT2WtphtHxLzdXNJWn1qH6z4Nz9h9AzBZXmv9FDB5kudpNNjijKz45gzG",
  "key33": "4qX1yxWQuQVkKM7hjuWtQbuXAU83Q6f7b7NeMo5mZC3CjbBmFDvSw7UPSM9TyugoiD4T1TsPCvQSe2WHCmvWeeWB",
  "key34": "3yYhMvaRzX6WWZx6x8w3zYjinE4QZD1puyNA7bKVuXnozHf8ri1KWETazrLy5RWLjZGdmgXcu9YNJRCyYMG5Ld9f",
  "key35": "A8AYWYdejkNEFsrfBXBqX6EyN7UdTQUrsNgTUxUBRiYpZ4mPWpskxW8Ypw6DxiHxkUt6pADdxBqaKMSDEFsVkqS",
  "key36": "3ngsjLNmQR8XgUqFW3jqy5BJWgYGiPSoZX5jPYQXiyhoetQURpA9HTNUuzx171eFbrKSmbttgVhAL8NBRaJ4KiZj",
  "key37": "41kP7Y6hg4RWtUJGi5isSoiCtjiXcLLLumFBe7iLipAqRwzvjxMBUiZkAvJNJNZzwzWsjjdH2vx1krZRtWkjPbTz",
  "key38": "JZxtTSgbY4bk5xA3nZer9eEMQDqey7DLrb1vvKCz3Q3ruds5oo5SkDTSBHDC9XbibBs9LPHk1TTkg9dAV6bGvum",
  "key39": "5e5T1Wt6MFtvcT7nABTDhwpBFX1MkxEGP58AGY1M87LLpMHts1s8EJaaYidoPFBUnw2xfuGpjWaNSvC7qPBDJDZ4",
  "key40": "5TKgzmMAgv1dvHovs35AAogNYj7zsvDZBUtjty7XJxkDX9Vi6uC3MqZoVSjofbe7EZDaRYyUJF7E4Xq2LmzdtoYV",
  "key41": "2EEkKdt5Vx1yqBNC6MzrHxJF39pookmBiESMtUg2WZdHtoRnHQmi7hqSVrr9AkqiAjPPZeBA8ZQFkAeqbBFA1UPJ",
  "key42": "3AvKEQFDT1jTpiBP8L4fXq2VDukSM2oPnohhenwr12ftu75XrT2bm2VqBGdfetKs4cZXy2T1GLLN2Q1t7vRcg642",
  "key43": "4xcrncS1cqadPSv6QgvQsvhMZGRgw66uYirbZqFcJENTQtSbRm8uNjkskHvmndjkoLVUpjFpnVSbUSqeJngKbyHH"
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
