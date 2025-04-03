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
    "3DYG3hZbJFKnSrDT7R6cMMw8bARu1soXrJTB6Y6rWJAUng4iWQn8KcmFsBJjiZFDg5RffFqXzPws5zktSa5HNuiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h89sR4JP2EYC9Yr51VrvtWTr9rrDPUfza27vqV6GsDjgCSKY9DJ8DVcNH6pvannfhjXKB3fgwiGVsQisxRizq2j",
  "key1": "4eCRnH3NETs7YGNmoDtS1K1RELY2UZYTUTTMmoLttAdKDsbnjuNj48tn7AsCTKbeXKzSPJf1AsLeTjMFbVN9CniF",
  "key2": "5d3w25vbi5oRmxdSPt6nNQQyoCMLRMXKy1JcoQ78ygPFFos5rZjGmsFinjjALo25TPxsPNTpXu7nt5jSPWC9FHhF",
  "key3": "3Ji6LFri1BCu7rTko9CQCWMj7qScPTevSkZHpGpSP5chiV5vegcsS6raJYNppppj7tF3ViSzZBopRcmwwtLVF4rn",
  "key4": "4hbCEGJLEkS3G3ca6LwHMXt9BptmqH4iX3KGCyTCTmoYWkBXU93BTEoL9cpW6gyQBFWGu41CHcbqxrTbGWgawMPf",
  "key5": "4jPcjwmnsmfWQzsaPtcSdoQyepWkSGRSurZfm44tVAMsSa8ZfNgKpDALFUvH8FrT2ssvvuNoPYxo7jGRqpERj6xp",
  "key6": "fcw8SFxgjmvXNNMJsRUDfMuv6ZWTQNbm2uExZ7NUmYQCDC8K76LbaE1YmJrjQ9tfbfK7Xt2x1xuNcd6NAn1ZpNR",
  "key7": "2tZPSu1yELXSeSWzaVSyJxyG1MttayRVDjq9AScDmB4NbkLg8xRTjyw87C662PwSKGYZh7WjJkxebeGUGBGkL1cf",
  "key8": "5myDK7Qi2msocvfD1j5aJ7DjZnu9CVoH5y6rg4A3fT9HTLJVdzdgnrxwxrzVT7o12eeZz6CyuSV6BH8nnHD4Zzxc",
  "key9": "5h4hWQRy6EFQ4QWqFEMaqgvTBb6Jf2meVJB1ayommXCjwXfTbdUYDe2j1okVqbu1ENZTLXzBtZY636hamuD8V34i",
  "key10": "4dAbYKkT5V9fXZcy5VdmCyKCKsSEqWFuoQqRyHexHtdYfW9RUqu4Dxytryhb1z1ekuUr4poKWCT4oDNyU6KhdjcZ",
  "key11": "2r1oFtS7QMHouRFAPPWDSVnAde37T5UTxStzkLizCTqBQE8DX283rGFKNVgU8dvYh8PKDsE2ipcDDTTNjQoLXaAT",
  "key12": "3xw4PM4qoT9BjH95AFcwVPSiTkkXroEG2TWSuvLzMhJ7gALpjBtNHcnRS7kMqSo68Hqsinbfso3ZQTQDGqPmTwPi",
  "key13": "gFFtQfsJCyx8J2kFZNesTAYL7asYPjYWicvcCqb23mL5ieowFWqpAWJcBWBr6Q4C2uXQwkjedDpsrwCqPfCC8ky",
  "key14": "3hbRQZzkuc2Y8k3FSKR7NfuUYEhzpGNGk3BtxWEbLtsMaGjfsyhVFYS7GNPpEGwUgBo7eib53e3ZePMsEPLPhLy7",
  "key15": "3qe8vG9KHCtWjmkPPtgsaADNuV842MSjkbS79iCjap9pvSckceKFWQB1V9tQk5LAqakQCEjyoM4z9f49Z5tTttUC",
  "key16": "5rEMJYLAipoqK8TQr12S9w6rrF1kVCTowLacmz2rUPhvGx6GZnuTX6Y9cX1aZ5546sfSoBjX9JBkMzNToaCPAU8H",
  "key17": "HDmjyqaEiZX9ACVZF5j4uC1nnL5YobAtANHWmTpgd6niP2SypAFN9bempSknyW94SPGFdHyj4fejU8b9Zg1qbmU",
  "key18": "4LLNURKsoySPk8ZpMuJQaQoA98xjx2iPBCCFvJNUVJBMG2k3yWLzeeh5fS95ugBZSWkzbemNpQCBMCBVjrRx2xGT",
  "key19": "4CozA5UFYmcHu6nx3pFBD89LimhobAtufA1tKnzK3KTzrunQF1Vz2xYmJiNXGQnv49JK2FT7f3FRtw7CcpFLMytD",
  "key20": "5pSmWreg7TfX3j2qddJzKpE2ktcwbDSQVcFhoHK5jMeGAhrfWaiN6a2Z91nbpxhhJBdgeg5A3UMNVvN15gLLBH7Z",
  "key21": "m43kVcKZAJFrm1gLPUJhRpcxiWtU9Skzp42sTzRa99HGPK7CN6usfNMhqdn1vPLXgYVm1JWnSSrHkUuH1nSannc",
  "key22": "5bJCCyS5KckqqjU5gvWUgJbQhZScC7XXfKxoP6kwp9rJMeyG1o2YQUqzYscVwrZmgp5VrCVJLfDZAfJFZbaa4fEQ",
  "key23": "vpyFCatmX246qKfLKhBc7LSt8RByedCh4VWcBPyCaBYaEqTy5a34dMf2x1593YHHwAyVBb9La2t1wenjkGunoyr",
  "key24": "3VTMmt7Xjk9CYjK5DzeHxBF3fgovNaZx9R8sZHCpLMYHYTyQeV9DkKjHMXa99DNrSRo4ipe6aCcrpjpxq7q3quZn",
  "key25": "5oL7bScWB3VmDwcuP27zEyfrx3gnm7upYAX5AtCAWS9pJwkZpNodbLN3C648GJuus8NCxGkZY5uqRqehXkgzqPMM",
  "key26": "5QWoY8SaXsikKYwGaAAoibkdF8osxzNkHts2nkUdJUzisM9EdKEH2HHGN4ivjkZVDCDfJketZVgwDbURgoU4hLwf",
  "key27": "32H6YAqpigj1bZKHMaMG9b8SjJbMu6su7uuzX8LbBJKCUPmM5y7z57b5ZPJp3FAYzPa418RJXZAnbiZeHV3DKRn6",
  "key28": "ghakpZJetPaFitjtxQe6ZmDD2rp132buGwwzyTbF64r68TU7vNqqvy8jMomwuwTwRV9ks3aTi7vGeCtWeXBybtX",
  "key29": "2JB2yVeZfjxTGhK1JTmMgF8EJbUzmsTLCcJXRRJe9ZE8kW59ezQQEdNypyvDJv5pSvVseQvNtHQseaT9sUBDMAdr",
  "key30": "66BJPUxxFQysexdcHGRVXxeuP8zb8TMhkfb7UjWRZGxj1w936c9fmzsLWiYwVWDiq3kUujThpXHVJjZRT3tyhmzc",
  "key31": "3B3Z1yPJipsbLcJZxT6XvrhuXfoqndWwoSGViZxcw1LX1C2to2HhsEhQovWfQS6QRpQmb6sEsJbwrCZDDVbrvXgD",
  "key32": "35EtSXaecaYEah9LyVFaqE3NjF41ENsNo1zk9MhJSub3GzuUyrscRhwxQi3YjrkxB6R4mEFPSy6b8wGfnpnTeD8v",
  "key33": "5XXi7JRwFfbQ8HjdAEPqoy5AgrqKiBPpJPVB6JvNrRUQEozBGR3S6h7m6QUo1Z7Cg3gSU9LxqxF9bNe3BjTYsHg3",
  "key34": "4yqY2xqBFs1JfrUUvLPkvpGi5pu6gbz1nC5V2RCYKrSpDdut24fgRzqKqH6FBbV4erNQpzmwKUriMjmPMfzgCW67",
  "key35": "2ngqnzf4sJrAe5eEcskahKXJnE6BqMSJ2GMzwyivLvZKi51Z8576emoQQ3uoUJ4S7gZY23BFf3CyfKmjPWgaoyg",
  "key36": "2FKHvG91aMKMtEykvM5xntVU54PP5AUWbQivr6XQTocLjqkhheEtH1Y6QLCW72odsVUSbFzfoMkbZgsuPwxx18cN",
  "key37": "3Wu6v6aFu5DDuES36nVLeRJXCX33WxRLZXUojcLSPZAn6tM2hy8GpfLcLTMzbB3WhNBnC9WZ6h73vK3o219pdGVj",
  "key38": "67nZBqDVeo5HxrpFEzzHjkaCtSt4CxaMJqr1fcwsFgPfyBgm44KE9gYcKaavn43iGFn9owj85CfVaq8AXrnNsiWL",
  "key39": "4uRW72yhp8H28SsAPBQ1i3H8PKG28FVZwBgfjfMSaL2YiFizPXRZjT3kzgQmT17nXZBWWWNBnG8QFuNdd86aWLRr"
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
