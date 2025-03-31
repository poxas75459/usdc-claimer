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
    "5eCfunP1eVYWNbDGCmfEmkxvHhsDXZctAYHav6cViQuPF9cUaFdQQjSsoZMKAJULXAoSVrpaAyRGM5ihvuLHKw2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lu7yNjKZbyNAUyCmXv6NmTfwp2f8BothiCyT32pgyGDnP2yvUAy6CwGQWYRmEd3NFGZD63rGF3i9yid32GcpYAc",
  "key1": "2xhNG6Wnk1rZAsWKmwkZKyHVMoFzYJjY4PWe66mSHBqHjEq3ZggjWvbmTKGGyVrhuAq9nysQYbeakorvsoiDqWWF",
  "key2": "5DqUpVcpEEUNhcioTB7BNfPpFBEsdAQzJXqJghzXfR6167jbVF7FsQyizFhsSKQ7eBeWifYsWqy2UKf5SzUbiFdv",
  "key3": "qqgD11nbXzXc6dr2iUTEDTNf4PQuXCp5N19w7T4vwHNFpZAFXzPAe1p2o3qzcZzvphiRG4kuVySHW2Nr8fV2nuq",
  "key4": "kaWospfugV8opYCvmGDjUrXLfEtN1Qeru5XXjBNdrjZitbZZzpoxeXM29t1X3eoFaVDSaDukCs9n1pJuV3CEfba",
  "key5": "3ogAM4GqxarozENhEjWx4jTuGFuFZBGGq8PvPCgAUdEuirVfu144TBsjs8MbBQvwjcAv6CaXrFJddZ6BGxgyxGBn",
  "key6": "q4zp2wc7FYiisqTfHxkEesYL6kxkziJzZiEPmkJCuLoDqA4mEnUnboW6LVt8CCvL5hgQCicLgrrJHFGMDA23eRy",
  "key7": "2mCjRbtGMdocnL4ucnVSoA7yB58twrypNH4j9WCacauM9JH7sXWJVz4GbNeURTpEr3mcj3CSfVLNXegdmiDPKsDp",
  "key8": "2jnLWx8HtmZoHXLBYye83wAbDwZWPfmYaFpUmEFKjGWomBpiVks6tEe8nrnqqhe8xf5uSQBhzmUiPGECyCSmUDg3",
  "key9": "3pN48FMy1scNQV2SukzUsQERawJ8PqA3mM1jcXu8oRSEKmNPTafk9VUgNPcsdFZ1hjBkLqWz3P6kZ3WP8APNAjY3",
  "key10": "e3SVouP7j9jsbsDy44ciVxLmSV6da143HRY9drGjvMC3VZvjsfkLoD9qDbYh53fxrGPtpJUQt1DYBxKpWahVHMu",
  "key11": "4AyGGeoHhgRiLwrW71XWgdNzAA8bWU6AfzMwHXwD85yj6ZSbbuu7ZBSHvBUjkxYWFBgowNWSbu1FX7ZN14T6uScF",
  "key12": "58k6irvNLwzD1Zz5Jz8dzd8UGebnpD9vqJh5pm1VwwFfxXiZL1eTwUwRrKgX9oW541tyUVUUWJBWee5bG8SrniZ2",
  "key13": "JYt9zsC8QWZCef7kJYxPeypWCZnNUS2eHSALARVscRQ1yb9PoquMTpnBbFDHk3k6i88BWzHt7QuE8xQKPgVV5cj",
  "key14": "4oJtgQJkFvoxxDFB8onYGmZWp7FPrnidZtX8tA4oCaWjYjsemgjawd2Nr8R7fY4xVr8uAwbLz3ECFfSGjXjyYhvP",
  "key15": "5oZUxUAAN3W1ybT1Y4wmCPagGmaEmiQdbi29ruQD3tho5moEv7jDb2WBQ1Mqwv5To7WUBkHH4G8AyKJWgJkRrHte",
  "key16": "2E9EwyQfE1C1PpqvVkJdw8AqU2dsFtAyFcnwkVjKrMZkk97MZ5DvvrCZbvrSAC1wh8HPoeDcfZjkGhsgTYMG8T5q",
  "key17": "2H56gQ6hx3FjeLZeRPhwoMeanum97JDVouDcmMoTXCD1pP5fsRZF7xjEXat1B139ssAYyD2VoGpYDNXaoMJCKBVM",
  "key18": "W5msX9pGXyACaMSbZn5g948pYuJRupRsYkLyBceUcMHS8FKhVyyCWkxETU6xTbgAku895xFLKZGhM5LS4N1NnKa",
  "key19": "5WaPtLjQWBrhqqtmWhn8HytaNNpNfHLBaYYZymtnfuh4UF2wTmstWQrExstsVs6CqCtBShLamhne8UcjhHRBPtb",
  "key20": "5rj2waajuRj83Wx8mqUWLzJzRLaDTzQFCpvT2zw9FxWaFPJtf7XKQjzf5bcHwnPR15TAMr76RcJsiNwia129sumv",
  "key21": "2NmkQ5QqAQwVEh4JRpwsRZuuGfWramhoTSGMWDxnhCXDphBgRWtV4jzP9zDe4vfkavjee8DCP5m8cH4mvxtsqraq",
  "key22": "5VkB3Zz3To7uSktwg33dMx6M1zhgx4PLVFGZqkJ34vpVCutVySBBXKtU7zdN2zHqwYkN5GCJvXKo7kvkf8wnM8Fv",
  "key23": "5jYw5KRNPBQYuKpyMfmYNsUvXnMu9fbUJw4qiLvWeYDqoo2rcqQXifYq8WW5Scgks2zDWXqDZwB69SzbjxQRZHqA",
  "key24": "5fiiRkhWXwrN2HEMUaNNrgz9pp5gJz6EMM1q94e8onWx1aYipGjGKxRzcYkeuZeMLJ32xbyPwywJtdFDsYqJ2AnW",
  "key25": "Ghr7xnjN48dfsVj4noaHLRqyfZESVjpiZ93Y6pEEdQKByCAxH1EwdcU28UWFMWLY5b8pZbQtvB8V69y4t5eYBXT",
  "key26": "4rKe6PKFZiYvM1P3Ez19EkXFUbrX67r1mjZLg23Fzt9pXeKN6G8wuB93jB9mPhS358g6pbbUrs1EfwbxaUx5wxRw",
  "key27": "5FnGn2aRhCYdEWDFgSYhGnLjtsPZ9Jic7j8sEei5CCHLr7ZpLYSJecDfpbKTjEGDdmYo9TzKAuFGUeY5RgMnVJqS"
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
