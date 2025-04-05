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
    "4GdUy1wwGM9vshN1ymoV97Fo9wSxtTDHSLba2Dhz5QpRo8cbNaXf6Av7wMdpsdwosLN5bKdWT1Ls55W5TJskNgj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLAQuCjFDosj1CLrNFAgoJ5B81QY5hrSjYQwNBunzvhLB6zF1kyPY5o6DMUKqd2hpLc654pWhw1VNfjJ7kwMpn2",
  "key1": "acSCn4aNQfC8Eg2HtJANK4nB1HnsVYKJyKFoAhKUKxX2oekBrQnoZcZtPmfDpiAZa9CvDq8AxmSgbZT8qkc9sBT",
  "key2": "Vdiv7PNijr8TFUe5xUtu9eeaeET2AsGHMhwAiQ4sZQLCUELjS6VSAHVsFuVyfcUDrxtCcsFQMGjQbkSu1mohA1t",
  "key3": "2EiWZrMMsdQPVy2PNcMhC3ZtYGXtCYCpYzGoVmCEbuwktm1hgLTUQQLDsmqCdGxJWMyjgNDiKFZNqvaQawPqxAsb",
  "key4": "5Q4Fa4pSq2H7xyuFL1y1NazVoF5wtBGHBDnKBF7FiYW2JN8jER8tXRbzFESxuxtdaVPne3F2VP7PUDdiv2CJmVWG",
  "key5": "5nMN2gUSkikCnvqV79SfVaWVdvjwemxYBQL9HaCWi8phqG1suEkCBUaqbCY392JWo6e8vdes3yG9u3kRwpZAMdgj",
  "key6": "dK8MCWgMwG132vWc7PQsnMatwnR8n8Mhd8gyRBA8Y7CKAnok8oM2MK6PnPBeb3tN2WgkcCwUjVEFCe2WYQG6mtE",
  "key7": "62fYBVivj7Hn2f5rueczmPrwGP2cHzuHJFwfHWLfT3KGg3VJV1HpeWa2kyBCcGe8JK9UwBTh7iqz1MzFnX2N2Gpv",
  "key8": "3oDXLbWjKf75MvNZQyvjmqodLhsJw1ja5mmrgxw3vDWbtZcSsiNr6RLcEHYGyKHjpfmZB8BqJQaUTXbeNvwpg1e5",
  "key9": "551nR5fT4StphWVyPF4NmHXnMZeREhGWvYZQvYvHicNZhqjYY7M85Pf9etc76WeisCbspSRYBvrJDKe7jYCSTip5",
  "key10": "4B4oku6aXXY7f8hR9ZLrYj94qfYTmJHUJXzyTDpeB7CGBGMMHRBAs3d4brFNWbf9cMYXUDT5zsaKxTuGpSaaLC9c",
  "key11": "4G9W33JKcpvr62J4wzwwsMfHq9keEJnaTfyJtWPhqJTw9UtoW7xM2JC7RkKmC6k3u8oL1QtbPHG3k1enu3L2Mm7Q",
  "key12": "24aCDxWHiqChrKrhq3JxSF6VwmGuejfV6dn1FyBuhuKZJqyAw1cXrBM7HSJNN1Fpb5WBZb1WEpZ8UUq6yKiqAmXy",
  "key13": "4xX1UNYyiTrFsdRF2ivZT8emAH7VshfHpX6HnYMm9uwzub8yyrgKmFX6Y69kfizJnkgwLSbVMGRCkjhGqf5Yqytx",
  "key14": "4DodjejJxthKafWT2c2S28MYs8kk4scaFtfUMM6YVUk5hP4Si9iX2C6xKankbS6npj8YYT1cGFseH9ezRPt1TJUi",
  "key15": "4gsPTDxWy398ugNjaLiuuszupZxYtERyH4ZXCAGzqtx91eSxxUfpRXkKJmfWvNj4kNcTE62fLgeGMmMrrWwaMovy",
  "key16": "3hbLMgn3EkwkhEBGZMSajJojbbet4Nk7skhcvjUDo74rzh4gMYzdd2L7PGyaBRy965GU5zTm5UB1koL8JyhEmFw8",
  "key17": "4aMW4Gtd1e4BcENWXjj27pGxyiXsvaMfteqTfh1apUG4ASDN8YoZRCP9hLwfirpQ2Ht5ZDfc7K2gsVy7jmXfupa1",
  "key18": "5EuUbBuS8fz7B5iwfWyBzpUZummCHCVdikJEwVuRzuRgxt1HpiMa2rPoTzowhxe7FzoHnVxvVTqp7twbwMvb3knm",
  "key19": "3LRwE4pok7qYwetukkwk5KEdt9B8a3ikxhYPcgV6WkGvwAvXkdXLAbA3MAwgb265sfkuiMeum6DwgH1anVd4DtgR",
  "key20": "3XjjYf7dBFPPyuvZK721AQe9hWPyebV94gxn4kPmnCk3xDrbEn5JobtYyprZ39VeE9drE2ytMY7vXu58fkkAZvpk",
  "key21": "3L8JJ2DxrNZn4AR5P7TR7ujx9R8z3Lw2X2d3jT6igC2uAYbRhdwcorA1MnSSniYjtBNkqS4ztnhArK6K3cXmp8fF",
  "key22": "2PQc69SsgUsMuRt3Geu33xCuAcmmPxoSUrp9oew2kBssb7ub44ad3LTqtV3KZHWiC8FjWkM5vG8Wmz49bbBdBibo",
  "key23": "n3jE8KCAsnA3dnaA4JdJqWVehUP4TgiRMEfYMvibEJj7Q7PRK8SF9z3XhmCaRdoFFPqiou7NjTwPCvhdrAKyYbV",
  "key24": "f8UpDyF4D8r84WgWX64oxhVjL9sMHnGXswAT3fctBCVTGi7THK6xtBYzBfg7Car1n89BB3DqfK2VH3tkpPyZrES",
  "key25": "4L17QVUPPZrhoBNckZxjHbyRC2uYF662gYh5ofMkt4eYJiVDCxxLEAvduf6oVfJu8pd9xWKoaQXXigSUjqfEyxNs",
  "key26": "MfXH246KjAEwdoVrNwCPCFqvnKQSpWsuiULLyprk1Z1dtrhQHiuQ9sUojCkxg4LPRE9JZAJAyyMEzopxdBRgQcU",
  "key27": "5ZxJfyojQtQSReUZQLQBeySmz3M39PPY8vPbFERuggwuEN2nsEKg2NNCW5Agbi83TgPn2p5Frm2eucqQcf27CNTQ",
  "key28": "2Cx298uTvpHFpN2iUXtSEBAFCVCNP6wcJ6bADWgKd8WxHD4iQbUJ2bya3NqYpGvt25a4HuEwXsLhiqgRYCNxy8tm",
  "key29": "2mWWLVsBY1Cvt1BJvZPnbgyHR4E8pSDW4eqn3JPmnAnUQZM7R9BMkikJBeQMQKe2BWi7yLt8AGAtLueStjbwBJX7",
  "key30": "5gXprRLMpN9RUpuMd6RnH9H3kqish5aEcXrJVmdtUgD7LvJqdQWWyUpKKq7kfcj89GLkegjVm2QWueZZMzJk1w6U",
  "key31": "JVAjNh3N5pmQLzfxNxA8BQpXQj6nYPpSb7UbzetG6WBWytxBE8WeeX4o3r7CDTafzMekYucVBSttvnVHxf5mavt",
  "key32": "4qjK15yXLtxjiREq4QryPv5WhQV86stFG1zXwApfdW68XC4vrV6g3oNCmaGTsd5BU4QWTxSnrBq3gdYhRRdMbi2G",
  "key33": "4pe4sHbsGeVsZvpQQ7DLexzrowKQBwRvGfFp1FzEjHwJAegV26UJ2prtkyJXACELKWVguQEM2yZ5wiiu61gKEj3T",
  "key34": "2aQ51yfqmVdtyDoHMv4oT8F9L78Dj8kRUCCGndGiiMEhHgxoTdFdpGMdT8Y2bBk7FdqWjWVnXsSniK59avnf7wjW",
  "key35": "55r1Da4rgVzjsGeW7Qv3rfLeLFKJACg7iBDm3VcwuRgPyma5fTEeTn97MD8WFsi4LZobCUfKHcESKjvijPaNHZeS",
  "key36": "5qfbKdyBk1B3Xq3by21aTvT2wbQE7k5eXe44VNNmhv3DQUnFcY8txCjNA1H5LN5UtRaftxD2DKVXBvUnt9fj5b6V",
  "key37": "4sG8XkXV1Kic13APCdB9rrJQiDmY63NWn3m1XXEDHtuwQNHUnn9FvCic5VK8k91aqE9JQ5rPXsByWza3SywhV8WD",
  "key38": "5vzVBjnMBo3GdBndFqyfxPphhCDx92hnd64PnWzD83qnVdvTN2Wa1DBmZRZeJhjzm42F6tMFuoejP28XB4swbAAe",
  "key39": "5b4nRYA6z3u2zV7Siyh3tLzi4DpNo4Yq4AiXWY7eTKwCQQWF88XEjaCUQhXQZYwmWvYCzgaknMAGebjZKCvmroJy",
  "key40": "iUrYAe4H8XmArRJbrZL1k368hBHHJVRyhoJGTYAZtC7P8MpxWrjqnjcguAR872BvxzmSJsuVRYmTy6PuPBcCAQP",
  "key41": "2YWZUt6p43xhnCQwTRAEaUVoU7ECVNszy9zrBxysrHRx5P9fN1YZiuiKnPkaikdr3fwC9jbWGdk4NjaczdSc31se",
  "key42": "3LzcTqZQdqEJV1opqfjv4DXDKQdU6CvCfixPAkNY9t7H8XtoAniHXJPxySNLtfp5EyLovEBRv8FhVfkncAK82zcb"
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
