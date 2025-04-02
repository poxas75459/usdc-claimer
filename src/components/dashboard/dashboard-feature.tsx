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
    "Z4s8VPRX18eB1vEUcxR7cVmc3ddrqT2DDANQV9wA5ynjCYrGa3scjPwq71ALmF8e4Lfa6v9CBx162AMzCDkkKdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZSm7Q3GbufKBufi7ZWCFTfaxMNXA5Ej9EVQT8521Y5bN6oiYrE9AdiCBAT7tNav9bGGrroTM2jnu4Md4UTchYJt",
  "key1": "2mYBfcU51DHmi3UjCcvPqN75d9q8tcwVW22qtGDRcHvrp9A4zya6hxyg82Xzi3asBAcC4BkRV2C6qntU1NU9inVR",
  "key2": "67qziMxPstTB2bbTQraH5VgQuPsnG9YhJz2nrHpHvvqZ68B9QyZ9ip4CSSw6e6xiq2RNYeWTNSncLGo7ShqCsGL2",
  "key3": "678EyTp488qCaRnVwnnRZi7jryw8yaVztUTXrjG8v8ogvghSMWhYk6w1NBaZRSuWni7NnxWWQofDzrd6db5xW52c",
  "key4": "4Z5MkQrxfqEAFz71VPaBx4LsuLZss4Ze8EbCNaXLYd4kAc93MxvkXH6m8MS58zfd3f8hrkKr6Rgmo4nwFJDyGfz7",
  "key5": "4tmYAf8VmmtYNvSGa7wPXGCis9zPAz5jvEnm4M71AtyD5AT4pKGFRRsFqgkbwGoVdpFjN27r7bB8247dhi9EcbpM",
  "key6": "66c3Mqft5Ko3jwi1tNfmNGqU1Ej49vg4T5SzHpqMtXJAYdgUC8XEzpa9AQ2PqFcDnasT8NF8Necw9YubR2gchTbk",
  "key7": "3vpyaz1k7ekkVrGSQNxWS6nRSzAMC5NuQNuHL433i6H1sZ8xj96YG7KJBhb4eFLo4R7hVbUPfNFBGNh8FzGGXk89",
  "key8": "4DZ1VQdj4sguBWchBLe67CLAgy7t3rntjRKTCJEsh87qkkbs7MqLgMfFj8onXgacN9i1dyoEK1bEWGURoAUGZB6E",
  "key9": "5AT8Xu189wGFGtCptxJuUccWF3aT9gsGuQ9HS7rZqsFcWNK9UGzyLSSmAwh8bRpCCLBLTgZuvnB6suL9w3CVV1wA",
  "key10": "3RCMjMSJBruzngzZXWAQWB1RWBWYykL1sMEUEWnPwZRednFVMxLq1dxXmFRfc8Nhzqm6nqZzgW78ghgYPWrL9uuS",
  "key11": "5VKkCg8FWCCmiD4GfD7imEEJMRYfqZ7rYzd91CD55hD4kgEHnG99hkZFGVCMycFLyyNko6ArWqy8YKZPL5pdKKfJ",
  "key12": "236DdZngYQMWAQ8vg5BMWjsPfdbVEdGid7rgS6GNKZKFekqhHSPA9fMBBodsgML1EgefniZ6p72MUaLgXFaZdviQ",
  "key13": "5QFZFpWNaMDNWyLk5jc3po6pWVxS7PavTfjBE3FNF9NHKucMpMunFS5idwB4PvVdVPoUWBJUk4LgZmP36Rqn5cxt",
  "key14": "3XxLd8Xv5gzBgLHihd3SRG47srGWcXMFRHd49MtmpdbmEg1cAWddtPuv12zrtjwKrE9faD9o8hcxMLghTiSk2kCf",
  "key15": "3yHZ5f1qyyPNhhisfvMh1rmoATgaAt6uXnnozPevmY2tV43zRRVQBwxAUe9g7FVzC5eb2HWc9uPgAcki7H4K8V95",
  "key16": "4hmMhK8vmdxh7RM7YD3uXM7kYNMQUjSbvFeoBr7waRkQmLjZ3VfEYqvyt55u1Wh7ZzvjLh3grYpyiT1PoJtBgNo3",
  "key17": "36dGjYTKzKoRxuFufHZDNpsLEkwzWEjSmoJP6RiidkbbRtqZsbJg4wT72vh89MKaR438ijoaUcVGdvDtJT5p7wcp",
  "key18": "5VSUiyiFumBLeB2xoAQjPU8J9BWcncYoEPtDwwVHPhQjyJJsyzrtFKewp2kemHg8odHuZuFReQjzLKvnbXb7p6Wp",
  "key19": "4ZTpMUhhtUXDMKLZYoyMYchsoTSF55u8b3ojvRYetaDR6qm22FmsYKAhm3FGCXSVY8KfHADuRsSK4HfnoTqLcutj",
  "key20": "2Z6qMprjPisVnCzpQQ5KvBqkR9HXDZQ3PR5XN5KGzTCVA6JgP1QmMWssE47aeAaC3B4YxHrA6F9PMbd69HB4Gr1V",
  "key21": "32CfRXCC6SmoQtHpnCt8dGoJSv6wmvZhbGBzyhRafJVwnWJ87bHypcaCE5JURtSN48MUpG3UdKi3EFHe9trJYPRx",
  "key22": "4Efi2YgnW2RY7KmYnBghMSS96CeKc9StWmvA6TTNLDaa1dEaFMt5PetxCTYUbBR8jwY562jfX7Vh266JEG21dy4F",
  "key23": "kdwtJewxweNfWPbhvxCHsFvtZSmgXYUaSu9xSqK9qEztuHWrqtrA7nJ3XPnoZM89S7mLbdNGYesM6vgrn1zvBAM",
  "key24": "59fS9LPF6WXfgwM8sWXjtQXmM4DR3TEqHazwuL6puXaST9RWMyuoMoGQnuEDXWPqr25cQ4YtsyZrU9acqJHbx1TX",
  "key25": "4GQCzCLSYux4CTBSJ2eyqtzW6hWd6QV1Cy1MTWw3PQ8W4r6pdDoGcEzPU4qh3dw4v6PAKkHiDBJEyLtMBsmkgXQH",
  "key26": "4RsuUox7ZGanSEE3uZNhUgu295j6ef4ZahWbvxfnkanVm9ELX1iVFQ5EEiUaaJHEDCJqtkp55si5ENMZa5uMLFZB",
  "key27": "3RQ73Zh5kgSWpfCzhsjd7gSmme6wxHCvKWqAdgTBQAAectJBUd8LccjB8VZqv5qp7QVgARGstwZotXQHoroL2G17",
  "key28": "3gWMRwqPKgRGo6FLDPx2EhBxfjsqvuq71zy8fYpabznA1PeV5kobwbp5y2Lsw19ZcKvKSsSpWQve74WM2mih8g8G",
  "key29": "4sFcw2Y7K7UBXbfrJaiA5uFQRqU9qLawzo6K1kMCPJrNxQfyfY1LuswhSrJY4ibzKerGdY5mf9JvBuSdFp8qzi2a",
  "key30": "32h7ok744YmAmf6bxFeJrBMSVNw7ZBVrFExFMH23tuMoDvDer5maPK8hWTe2pjVzFUGtCfaGcbY99pTEN2qCwW5n",
  "key31": "26w3CjJmgAfiYs9vRadbPMzfumu8vtb2jg1beTAMB7UKHFRaP7swyJg819CEVuY6FsMH6rveuWq7BUHZWGuxKUHR",
  "key32": "2PNNjqwVr41eDAA9PMkNRDWN9yXFUXp9NRiQRS3R9xdRgBBv3Lz6SHj1Goa8Ay6k1s3sN7gebQ4f3XksYJEcUmPF",
  "key33": "3DgkaKq297DZ49vMtwVNjdCJGWm7yMeP9BdKhGp3hk5Le2eauqmRYRDxew5wcTK2kTx4nBBxpJ63SsAfKSEQ4j78",
  "key34": "hTn82daDqtCLcrruMARuFkWUFY3LgA1SaGabFCs4bJnF3w5rfWbg1W1QP6ZEU2rMyKUZawfAny8rsLzQ2oh5oC7",
  "key35": "kwhWyfN7ijB18FvA7FAwhySSDg98HrhjZYwp2f4GEQk8CKD8NVCkH72oAp9FQwmGJWsjnW63umS6QSLEsGy8bAo",
  "key36": "2HkMaFm4gjdzG8VyDEWuYnawkACncUckEhRRdJzsYWNsLnsR3gehUpHVgZrpH4v7q65jnhQguFgWREbLqvjqiazP",
  "key37": "5ZKraE6caQAQSAVfWn6h4vMWztrnXhHcYx78BkCSikVgHGZ3c1nBpCWC2zbHv52mGsRH474LFNjerX7hFE5E9pSn",
  "key38": "5wSxbcLc396L9P3qeSumc9tuQ6ygShHbPaqbhVCe5E8Ddy7i9SCW1ZFAMZAn7hS8Kr9hgAi89TF8X2Kyr5GagQ3s",
  "key39": "3bVSo1PmRFUCuSaQEDpKfcGf56CcKt3kC1yDMrEoypVuwDToujzZkHaq7MDcePUquLCcgVWgQgsyBvSP6aWv2nYg"
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
