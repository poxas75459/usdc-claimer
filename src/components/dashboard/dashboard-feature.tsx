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
    "5EB9GFa2U8cjGKqFvz9eU98fLPBKD4jPWPxBB3dvuG4KLeyEFPKytpbmeeNzthMm23gAHCiy6H6xCDkP1tknFYJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qcf2dkPZ957qK78S5i4zr8M2S1LUj4LyqcyDppaTev5shL85r2DnKATCF6ARC9vvSu7BdpoonGmzvAvJV7Qr43F",
  "key1": "4injY7TBj2iszFngXaeuLDUd2c1ezZdFnQhd9dNr3UQpSbJMwADsRpZqvgkfVKKr51L1cvgSbYswRd5aboMUdcpD",
  "key2": "57TB1QecSzoDWoUrqViWiRoUpLSaes1dkH5so85ruyiJgM2o3BmzPozDt2FqTsFrqcUXUZt5MgBnbkXnpzGazhj8",
  "key3": "5dvwnKrjohjgos3m5PdNkHMuEG8gVvEdDghWqcr1HFaXTB9FepY7i5iuFSaKWhn4Gcp842htfV4xDCJTJkf91ryZ",
  "key4": "59bfhgBg5kKJYJXSRUmm6ZMnPWFrqTZY6MocavGCHvqpJoZzegHAGn4wt9Y8bpy1Du8foAnSQ5CZUE3erarXawfq",
  "key5": "4Ubuzp4cyxvyNDaGCQgjLYUt5m9VyvpZk2DCrvSBFwfWDB2UmnWpjYzmZHibrHESa82ZePTC3v8zs6Ah7Xpuw9jc",
  "key6": "2aS5KgeDNfp3YBT6pTcKoc6Zrt1fWKiYHQiMqjs7KgFZQsLKBd5V9ozqg4XrAJUULytX2xPqhbfbZfJ1i7bXMkRt",
  "key7": "48uj5D2EWUwhokPS8GaXRL2U711Hr4ftSrPWT6xn5T68RHgjFxaXvbQBY1jkE1nHaSiLfvdBUsBhRbDSV8N8EPQ7",
  "key8": "3bBzFphRMwesVL3mKFQFwxobYX2bUhnbbVhmJGuMjH1LQ9LA63h6Bw8gZo47NQoMsZ3mCot3DRR1FztSvxeJ2zfe",
  "key9": "5Ycw4aeggGxa3bDJH9v6vVTNVZtC9C9CE8iHRUDo6G3K78c7zH8xNaN7nDzn2xZczTrc1TT5cEU9qqkncaJxrjJB",
  "key10": "4qH1CoSLYQogMiyv4S2dzf8qp9xTxVAZA9rz449EkNJkComkHzmyhbJ8CJ7Zeg897nxMqLnmogVJz7XKC284ecT4",
  "key11": "J94m4wnEg4jK2FdAZsNXZvumUPQoBmPS6qavbnikJmkoQS6CFLqHapMJ2V5APQwThozEC7ugyWTEimwMAYaVj6N",
  "key12": "3YqsV5UbQEVy5JxXnkEed4uVebTtvNSyCHJnw6gwPRxNsi8rzGoavbkZnMkCVMZjzXpQrFutBJqhjrwwXR1R9CuE",
  "key13": "4ycK3tJ4QdUMDVA8Y6pEKr3jYY5C4NMvMKCwor6NrVGieWsTR9zJVBCgLrjxLoMsUijzhWJzQNbKje3PcvxU8K1G",
  "key14": "hJeHHnBAB2cCt7wsnBGKC3F5dhfjUi2JuRyRmw2TyjMMzzndkeA7kUgcXMKgauFp45SWy4MYZzZZYEoZzwToViY",
  "key15": "5mP3iXRpFD5o1ZZQV8UFoj4HBcYw7afsJZ4KSoifHEDkQRKpSPfjNb4AMRZu1suU6L2DzZdCjE79Cq9gNrcvLPvq",
  "key16": "4MaCqkSZz6t4VkNDna57sfn13zWVWJkKrZbs6wGsp91UwJyjNhCZidC7LQzn79pftSuMd2HhbUhsKurCmegvKWmY",
  "key17": "TsenQBVKHd7phGzTrmzpNpmNFUqdFfcsUB7jxwUn1TzoXBsTjQ6anyS5KmpdYJv3anR9VHK8bgQxoDDNT1Kptes",
  "key18": "4Y487vnPHvN4c7d196NHnoXngVHe7BzcSqYm4vP6XwE5hdmoisy7vyH2xoKC1EfU9DsRpW3KgmU6e94VEYAftnX9",
  "key19": "qvAeEkWLbCtFZ1gQZT5eK8qmysVcUHgm7TuVZn6zFXjFxKjJcXkCGByP81SDsCnfhMKtw1Db3qRdk4zarq8xYB5",
  "key20": "346QNvX6eLr6juTnXRhRrnoXTNpEE2aH1N9F7TcjchqNnbfUB8d9sYqYS4SscHanB1GXReG7jKB1qkx3RkNaQGTU",
  "key21": "grK4sTAj7U7gZRAyYMdtUVs33Vb72sLd8sVK7a5vVD4xaW2cR114FqH4u1Q8evJ9VfVkEkxixUXWHynBvMXJ4TH",
  "key22": "5HPvfFiotAMkpk8MUEkngsY87DvBUMdGV59TyivPB1TUutumFit5y2hkX2AnvhjATqC2Wd1FUUmSfx12XEiMjsTH",
  "key23": "SaXGHao1Zst33uecLa2sbS8q1xFKQ7CtcGTa5eS11qxzGfeDdHkEMAhL13WW6FrZoWzTCpnPEcbJQREK59Gt5kN",
  "key24": "5mgwCcyzzmh86DRWcDVZ6PG6LqQDa1xLvDALWWNNY8wki238r8EjQZXeJyLbdQ3WMTfhjE2D2cnRwWZT68QsniWJ",
  "key25": "3fCCVRZBVcM63UMuD16yxLayXxWpE2tHK9odbAPWo67wTWha4SxFsukV3Gs9Lo6h286go7izKuAy9XmePFBq3SiL",
  "key26": "dUxasmwVHgVRDouEQtsaTGwLhBEfiUqXa8CMKEgnvWBQ3BihSLcpWR4snPUto9h6ojLVMcMUngDfLXyXMgWmmzU",
  "key27": "5NKVKgyWGQxpxbC1WpWxoLXKpUeyyYzm9ukZuHHBHgQPnnVdQgcBFXdE8xTEVm7C4SLFt1JJLoM3VQCAJ6vcz4ge",
  "key28": "2EqdXFE3DqvPPRJrawLgiEpeApHz7FQohzb4Z44JbDun2Mk3QrGiSbW3a3cmUexuTmqELwwU7aq972t5BCtUBPss",
  "key29": "2GuMn2ZxeHjD75KkW5wm9tyh2Mj33sNJXq9dvRHzK1qvCEWtMF8ENTa7LJ9DLk3DgejE6c89a3TwFtCbquPgDbbb",
  "key30": "5PTNJoQUTZ8PJp9UDFa6fdQDcw1E7kNZxisKM5pz1H7hYx4fejg9VFMN2FE8if3eeUrfw6WgxhuFkGjfL2EXiDDc",
  "key31": "2zgG6B2mqUKZVFE4N6RZoEis2gkb9JfcXy8szx7ncxMDjXUUSHV7AUmPhuDGu9jkvT1urc3XfJfKUU2kkei5mUYA",
  "key32": "xJwThrzRmFG7cKZ7cSwcxY7W3h8Mrda6UxnYs8UgdpktCtsWW67GriS5qqmAY1xPgiiNLVmU97YPJ9pY47e6qy9",
  "key33": "upzDaZ2YFmo6654fiyEkbxHr3FAmeLQsHbWqMwtmqig2hpZ4oXvFZnRbi7Yt48kKBchEz5bJt7SgteXWqKq1Sxh",
  "key34": "3Lkpwv8xKnzbWeWzJjtXkGMBe6ATBM2B4WfGuPk8WzkNGavUckCyEgXSFw7RowPjKDPXrargpDXCW7WdmE8e75gM",
  "key35": "5JGuzHP6isDtEza1m1XfuLjC8qt2P7TEtWmg6WGAWubdjrLWbXSkr7tUJAP99rbZ38dhat1kPQZgmhsvQjzve1Tr",
  "key36": "3ZPQZMPQEVJiDARur4kbigRyJhco1jMGR2V67Us6yH8qa8Yrd6ymPJHNQTrcioLVTMZADF2HWHFFb42KRhMkhgbG",
  "key37": "2naAYugJB89fzJAQYHnoGkFeRev8xpuNSfaEoWSfugxMNckGARSoLx7XaTMKf45Yrnxt7TVVkd89XPKnGj1VB4si",
  "key38": "2yWRgZP4iYZhV6qhwvo9UCkKFQTZN1xGjUeg42bkZhqNppMXcu2TnwJ9Lo1anzEB9i2EsVT63oYUaRB3BB6VLtHL",
  "key39": "CaM1BPm4i9tmdMNsEfky6R4ydz7syuPgTwVL5Ha1q4JVXJDA3kgVfxmjqBr9KiXDf1wncr1SKn4K3RUUHF4zA8P",
  "key40": "UTGAWgKRUmgWP8qfgxxUXLqwoLQyvyaaWFSvZPcUvf9A2PCgg53hKPCrA43dZKzDSq3G7p59eRnJSTiSVvkrr9s",
  "key41": "vE3ZiVFnQDfxmJY1qWg7EEkqdHKGQJMFbKACjDyuvzVSG9yQ9fHxrDEqrKWvHmazvrnisPvF8wP6RF7EYgaRiZk"
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
