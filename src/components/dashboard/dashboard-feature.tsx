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
    "3KSYiEjdt1oLPgG6xrpec8kLBg5vkzKLrSRMVr6K29ggvfw9yu5uapi1PPcnJk2UwCtvqEnFFhw1gV18k3VwJPeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bxn6uhNSxDNcqfk5FqkVvuC3tSAG4FuZpQ3kjongKV268hTNMkDJQxjMMBShDspoVQRK1cHSJXQhpLaK9R6k1Y",
  "key1": "h3NWSXT3Zkx9qGSCg8jCJy1kAvSduQNnTXponJ7CQ6LVEb2ngH1ZVUEWMSSo4jsAw3ffuuZJrY2M8Y35HJY7awb",
  "key2": "t6y1UHPqs2zqDg8EioDrX4oj1j2onQnDXuB5LdYtpz5PGUzopczGXAgWTs3JFkCqNwdtkqMgL82eVwb9FiqcgZs",
  "key3": "4S3at7YWFG5j19RHNFQBUDFr6wT8BX8ehrjFrracCUAL6E5LEgW5BwbnV3tEcK118CvWHbC2eL6NtsPzEoQmjx3y",
  "key4": "qDbDimMrhspgBiHLEgVdLZUchHpuKJoDXe2Ro4Q7Dg2DTxirrXNnFBCbKh6MC2mJ9AftQrL1yP8Zzf3juqCZyT8",
  "key5": "5QS8qWn45fKxTd9W2WRBaaefszxgYYM7zVYRqUinGGfM4FfeHsfSuRkXnNMYnRBqgUkZ4FenAtbRdkWXpnUdwWAS",
  "key6": "eQbfUxsPDWpu9i1PKn7L8sfkTtoFRWDdGLuSeiwiixvFsTdVgu3ibo8r63Bg2SKa1kJMfGLngYbUts7xECxfpLQ",
  "key7": "2Rk1u3VRGvxqBjTWaP59htEUijp57QgLqvBNxPqMnvcxiCfR8gYgm3xtsXZvr72tJeTuJr55Ury4LPoaySzhfhFB",
  "key8": "4HoTVpQRqtYMpTdAEbHtajGoi1ejK5kiYpMTGrz5uNED9865G6cTQWFhMjhPq8VwT3h4QdpMjDCSDq3FkVv8cgP7",
  "key9": "4w1xtRRryLKw3qvjsPDgCWUG5xMnXQjL32jJrq2d7mJEgJ5gAZft2BBUDsiMN4c7uhhqKBZGEqnXxtrkBei2sME9",
  "key10": "2xfQBdp444gYT2DGq1skjCAzpEv5QitsBRviBMmiSRS2tLmikAXAz6s5aFYAQQULxgKNWQE2WB7YxYaKxKz9xWPv",
  "key11": "2ZABygwzeWDF9RzR9wHbKQ9XdYpetJYkTKZUS3CBjvMyth2T7aPo13i9ZtMSnGZmaWbzUSMr9t8yyeukmKQALgWY",
  "key12": "3rSEURrpecViH7mgLw8Pm3rNZ4qHwu74wGVrVV2ypQMW9g92A4xE3pALkZ94UxvwYiVsR9DJeojKLMdrA2wuzHJS",
  "key13": "3KMsj2uA1oNp5aewD2LFeHibHyXuGruesFvHgNt3aTYLVm5AK8WB8J2HeDPw26Pc6HEZjfW3CTheDTsNgVMg5BC6",
  "key14": "4JsMk3eMG32kqpvgzwtvhgnrnbTZhi5MrqtLfHZhLGWniMrSWKrf9qwdvBbg7fLcRMvEWoCwHjitMVjb7kSKLjH",
  "key15": "45aDf4jSihbaSSnfLofbwscUeEx41CeS5ZGkbc7KjcuKKKUFXVtDk7s4pyyteu1DN1fq6hGUkwBSnCJD24MxhdEd",
  "key16": "KCMTe21EKkB1v9zfn8ohxb8xT3afHMm559EerHXTMSS1RjM8oQyo5Jddbb9aGksGaAuoAj41h4mcMEmKXquohWU",
  "key17": "3KuomUHvrxBjDB2VrvwGopySxG3BqjdBGwraEpRq6HTomU9g8mpibFUUDSackmAKRY6jEEJEzsFsYfEtcwiKSCii",
  "key18": "HtfoTMFmfvtMeAN5ZrmbMmCjssZD2LsTuefDWou1S9RP9ELNe3Gkcj2xBFuPyQmTfNDJyjhUgj78D26VgYGmKyf",
  "key19": "5Hdn9zX5oZgqC7HU7DDL4N48yFovj19a15XxCQYrSJGMWs36rvcq1GVwp6GjFgNwEz7GR4sP9RmyJdjvRNZwEbYx",
  "key20": "4fJ4qJHuAwqnZn4FsKnNDUVRVPh7BevnMvRuMLF5UqGhY9S5yKY95oTecKCbxETHhe5RsMVCwgYzVLU81qS9XNub",
  "key21": "3favmwLLGMLQQhfnpkQZkxxpN27wuWVuAPE4rccrVXQav2krZzCHkdaHuNEPLzccxWkbJqELNvCQ5GdC1qcDuQR5",
  "key22": "ZhQ1LKeFrmVtPqaDSxc9N1csZgEaWvUHriLFwp5bKyHCgrXYQodzLPo6AM6q2Vp9uCtkiYEDZF988KhvrFGM6vH",
  "key23": "5rALbeBCi2SgqNmCiKFKtbqewbi9it48FG1Cpt6MThyVFD1TvoSrNkaDrQNHzk1jRfNV4dokW5qU99bqdQHYjS56",
  "key24": "3gA8RAgqdTUtBtKUMWfyeXftqqv7QkiSuwk8j5pzTqYihxWy9CWXEbywCqJCLPjLxApMkzDbyBXuJ4yCiRisaEE5",
  "key25": "4VRFDiXD6GnvA45tvykNpNQrLWwumuovk6jipriKotHJxYMmsQTXjvWsmF8fxYV41yDNmyDQmw37yx2mkNAQ7w27",
  "key26": "UjJdohoVX5WSQL7Z43bGRngfm7WtCm6X5vZqsCjJUgyZBNiFE22VvnSZjkACiA5UH3pEHR3KwfGom5akSpBsft7",
  "key27": "5LgJv9WmZcGdAuheHVfrQbyMHXokEdpo38ysatCxTtWgZaDmZwGj9HH4xCMMFNhC8zdZzxAQnqpp8xdTr3bcxBk2",
  "key28": "5RhbPtgpswJv3evmXfKSoRw7QvJhMEbVzDTFt4K3cUdqEgPtJBZ7mxK9234qQgEMBfLTsCLqBDrQmXqkryDLBZFv",
  "key29": "4UiptpkkM2VeW1WcNPagVTGX8bwjxKVaxZ9fQJjPAtagLneYG8CpNhCJYR6QzZfSZwRfzWpbu5uz7UnpmM8PWxGe",
  "key30": "5FcgXxURd9u8M2GR7nDXfECFVZnGLftFuW2Bggft6FsQCAPs5tEFwrhpCcsp777uf4GvithuVfFfQUkuiRUGcGn9",
  "key31": "4UmLZbDhKeRskRVy1Ew7hdggJewSvDeo3n7v2MdqJ8VSJqnkWhgDMUARaAPioRqzFznQMUGCjF4aBLFCpF2ofFko",
  "key32": "38Y1sohJ4UNvDeExq6GAJzseWAipKPtNfGEmCzHVoHRcRpsyahPrR81b81BpWA2ByPC29bjW8rHvxyn5WBtqjwkE",
  "key33": "4ahyE7EMYGdrmXSqDXgMh4WuQrqRKCYEv9zf2vpEnAMgBNktj7SCksK4LpjdA8xbunRpuQ4QogJKtpA8EDMX8uPu",
  "key34": "2QDy6tNhGDqjLH7iMzzUrJNqa24Szs5DLystAzRpWK951WhYjo1naba6rPXat3nJniUZLDgk2iFa42ZTvs9irTVo",
  "key35": "4wXBXhZxwJjom2mT9xorj527mubZhW6JSTTy5dUyG32w57ETfgFuccPuwDFiJsana6Sqfjc4Jona3DHcZRHJUs1Z",
  "key36": "x9QYHcC6xqe9Dqq6FrGbuyLMP171Ne2n7sA1xrLq1dCBPkinUgoVyothtLm2jwH6Uuf3og8eC6mwzqdy4UiaZBS",
  "key37": "43Zo7TDQPsbkLtvwhanHBBV9uvm7nM3PeMi5BawpFBY1myYRjJMNKVGszV351SUY34ZEXdKFAzq7bW5qQHUyYZKs",
  "key38": "cqukzEnpaLjNpP8rtq5wgdyfV4vGgQUGuKFuz77QnmiWuuZdKJQr1hT7kGuePpcManWuXffLvi5QFhWo9rNn17u",
  "key39": "5U4pjGpbnyzxKvskF9rQ4EZhVukZ5cJVC8Zxxog3BuBgaAmFqzPDgKGFMA9wtnMTDKU9grfMQgzf9zh5MyTnPpxd",
  "key40": "3dhkHRZxVBdBBAu85BHmQnZDHV865Ekp5yR9bueMmSHSupRh8a3qjPS6e5wF9Vw3dacvU7ahKXQRMpqvxWusLTTq"
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
