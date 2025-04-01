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
    "2Xju6X23HMwcPypyjQR5PraB9i3FPyTfvPt3RCfQF1uwmrmJEZSDnXt1kV2721SyefRUqxbpEAWtvDkkTxUhSkuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMZNVhkTYxn8x87q6aB3jJKiyJuFwh6s9HG3uLrjKg4CK3DYYkGev1dD7qKgiRzpFmKUS2yzzNZV99kTCjj2NCp",
  "key1": "3M7MSoTe4EQtNMJfQKdr51G9r85HZYEXeAa7C6s9pXL7quZc6frgvoctfJK885cohgq4NPAjNJa1AiX8A9UXVbzx",
  "key2": "5u8WRLY4U9MbR39VpvZafJCdxKTv6th7c163LX3HJYTML5U5cFKsGvYi3vVB3DBm366iTKourfn5i4gkaqLm4wEW",
  "key3": "4wXBuGoa3o4RopybQVXGkYCh3NSx66LFJzbBGiPPpA8dNSyFBSgHtih6ZiunU15ZcmCJZHuyMFDbwa9ASaqf9oHW",
  "key4": "sm9R5ZCzQmXaD626sHfLxiDb6VgLALnb5x6qVyLnvVDK5R7ZxFT7eFAVtzR4FYy6t5191hqUEkaFzqnYTh9D8vJ",
  "key5": "3e5tmnkuYxUJrnUowc3RzvWDCjstTX8RtkptmmQKWepYGcHrRk97F7Gp99nyaEPaWvf8m8Y8KSGzgqxbaYwfNZEx",
  "key6": "3LfgSpsCZLqUS2RcwBVzWURJ7Pa5w4pY8AMamavxbHnMMJEix4TNpd56e9AiwP7arYdTvPyP7Bj8ePZvQdd174C7",
  "key7": "iHdBvfrX42kYB627J84rdgv2xGcx53Kr7HrowLzipFFDuyVW86aEqCYqpR45sWuFVK6naoJHPFudTkgf932Pty2",
  "key8": "66Gu6wBjyMfQQQefT6GvWcuHxXwbMnMxU1ZTvvJ35EY21uaoZu4QMth6amtjH5fEcMQiYZc6PLfr1eHDKEFVHpmb",
  "key9": "4Tzx9MsXrpHmedb4zN8LtGCXo3gPyMzqctfRf9HGDPbfuFqtx2xJqsdkH87eZHuN6AWifoWUyGe23CqpWbsrSMHW",
  "key10": "23pYQ2fXbGQWWC4SamM7uAEAR2afQf4C76pFBjzoFFSQ8y4a8rGY3SaRuFiysVeH1owYQDsw9w6WpzwLzW5uAKQ4",
  "key11": "5kvTCJWkGhndFG6sYrShGoTpLhXEdAVuXHkW85ARpCVKL5VH6foMsScYaeBbLRtUsgSaSLosZ1rQYz16RpvMvTca",
  "key12": "47DNsfX1E78xsTpUgnUGB6SsY25c8ueRAJb7VSTKgAiecVtejWa7HCg1fxz33eemZS1PQtyt7XDk7YfnamK9jhXi",
  "key13": "b6nzcVaG9TaMuRLNnE625LvLCkNWPdB9SL7yyJ5RcV7xWamPdRT5mkZNe9xuxykcMwP5Tx2RvFFECPRcqMFecis",
  "key14": "5iMiZYdVFCn6j2JFWmdTEkuEhRdAXdjxWEaXDgsmqJt15Psm7BZP4XxkbxxeK8xPSdXDpapP2UxSb8VMGC2PN9jj",
  "key15": "2gQtUqvrK3zPEJHUMnsMPBN5RJEXCwXi9RqP5tyX5MoyeVyKtY7YwvPVPZ27mwANyjS3d633JbGsQki4b67kVsjy",
  "key16": "4MoXjVMsMKDJQoTqxy5ZgaPXHaU4jPKX8W5sHHEK7CdFC4oRFmWLj8LfE1PuZn9awDmkiqB9cQ4pvPaYmSXtCAXZ",
  "key17": "gtaYBtmr1gJJvg1CtjRwGdhAw1Y1JjoYLHiFXmfLqDLMAuJ2WPsjYx1wJM6gWtfr2PzHAdRV6HShd6TyCGj5Qsu",
  "key18": "4E5QkXJsrvtNy2H9A7J4zf3YMhrN7DMDWs7qSvvJh4vj5yX2s5hZ57jTSRXHkJn8TsyBzuhb8RMtPDcykg7NWJFg",
  "key19": "4M55H6dmohfFeTU4m27Ja35FF91hAzVVeencpcTGNtKP6GUjwetwazsifuJKS8huDeiPRWsk1JixcVFjQ1SvQq4p",
  "key20": "4EaPQ8jQ6uBCuzJnNsdrsBZYeTr77dfR7H8YiHMxMj2BDM9PdpXw29bEWLEd1dW4xV283cQ8xS6ySHVQSxrLcfnP",
  "key21": "35jJCdmL8fHmQLr9jeKwXNzaTqbpCLmbvVYNa7PPd8jMfsSL42S8JYw3HiNEqx6PeCDjBsgDQLegw7x86KupWdU",
  "key22": "2deMLW2kU2FSE5ArztKUaoee69Pr7t2dc4jSdcyQNxcdtvZzve1rJjb47vwcaNuXesRYfwmgaJfQ7pgbSoh9rzuW",
  "key23": "4pYZrwaYJUi9kz9sLuHvQJeJVk5ok91wYupcdDcCUWr9q6NozSyjYTTPtn8kFHCnskGwMbNokAVmPFoAN6DRZSwK",
  "key24": "D4heeDUAAQM1kBqcGRQ8RFGnTANVGSWcBJgo9bLFdtQCx4JFXY2Zngs881AMUnNiJk9CruichSvEsgJgjAund3s",
  "key25": "53v9hLfAa7ShLrDqcy9Q1HMjmSFg7BT1QTnAH5r2gy8dLpMeeYQywHrMeZbf35wRquhpoiW5T3njKbCF22zJf83y",
  "key26": "4iwRN463SzpTXQo6TyuzkBT5ePAoU97T8uy7HCeCghocjGLRtnVAQzfGRdXdXJevmFPiA9qJYWC5YzNp21P3i3Sh",
  "key27": "3zKapYhfEgjqyReShhiATetMi92iW35H44mHw9nXRFuWquLAmKdMKMyCB5Mv4G47tEifEZcE7ZRhhLVGRycnLxBH"
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
