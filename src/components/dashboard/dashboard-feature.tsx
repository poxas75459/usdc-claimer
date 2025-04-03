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
    "4BQoqyVWosw6DANHGuv9pnLtxYMLj79Ds95Knb3gxUdutUS7aRE8wb4dT8ToFPc9kzQwktcfVSWoMgS3GmFfZiZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44b57KA3Afzh1WJnaP4VQqnLJc8jKPtmWLiodoyZD81b4b29KCZAP8CPF29E5kmThuAsAJVLAPEReJazHPb2TgS1",
  "key1": "2euVr6RQ4BwfQA1iSSg8QtkezJaFipVB9EMTkBNuZVor7NwNokM9RQy3tmeHc8Yasvz2vXJg7ThGC32bffsZ8jK",
  "key2": "3F1HiJZNp1wsk3mRsseKhizeGcfatRS3eN4N3UmHc2efx287tYCFpA93WRwt5UeRyoWwipRUfpZMjqxnrTfBQEeu",
  "key3": "2GAr7b6LpU2xY2es3eq1s4zR2SwTaVj4GZS5KHRLnR5vpwARMjBzynQKMbAz2FpuBkVDtkm8f2MRYLJiU8uupddL",
  "key4": "h9z3c9rixWTFVRioQz5qBNdFAqHkE2MwGxgXqa9FNZK8o4N7nz9jVXdp7nBEfDbUeQeFTv5TY87X4Jp3ouUAsVs",
  "key5": "3xTnpxZi5VUbRHo6yGLYtmfoDSmuBLrZKpPcVMqjLV2Hndo1orgAzd1bPpnWgH1PB3bwEfWMA8CtsK48j2jWAvjB",
  "key6": "GMJGc494zPeiLt3LoVed5AykZ1ovqPSSYN51sYZEFer53Z5HARD7ug79XzTTFbdMR5JycgdNrfai7sMd8BZmhJH",
  "key7": "3zqiWoHCSrLi2y41NzbNevERUrS8eQJUPHMDdiCbDNKpXHLN7gNSwoXfWjc5Td8YSNJurpTmGwtUHponmP1S6s6Z",
  "key8": "4Di6iRqskUn1VkLBNy7G8VgjcM1ALFCJPARopE3Cx19KN8m41utLLUfTAkZAW5q8k1n8SqxVQiwm4J7jmZKRY5ii",
  "key9": "226k6AE6uYsdBmMAS4tB5TqvSwnkMTNzaR7EjFoH83nK9JXgT3HzgNBUnPv6Tnjxap5sZGyob6TrtLYuxd8PvDps",
  "key10": "5YeKoqvQPjgWNn3xZFJfKvFXD7SGQSowV8o4cvLwwhno6GTvrTp7KbgDxuBYKzNBrByxuE9K5kTRnVbCfg5aVSxV",
  "key11": "4bLFUvM33KhGfxbfPjpFWa3ZXhLbZNDkKKqs7HGxjb5BuvCrMx9qNdVSp8kSrowtf2zQny1DomeKkLRgSGnYnDuk",
  "key12": "9H1UkVKojkhp1ERikgRqcnBBomKpiwvrfZZ7yqa4xY8u9Dm1Vq87X8kyU4XTyVjmu9cewUz9C3L8eVGeVLk1mRk",
  "key13": "AB9BZbbQsH51KYgMjr5HnPe3PeHsczA5ADoQ59Xcvyiwp6B4jvYxr8XNnA2QFQUPhDgLrBuJWvVMv4zKc7d4oDv",
  "key14": "3drk8M9PXVmUzjKzZGXSfNcbpw861smPG6DJSZxbe2RBhKiAJurfPAEig33zHoiZEEJKsNCUMp6y1TvcPjcTWMZi",
  "key15": "1Wq1T2QD4GKzaagMLLrfxDm6M5muBfPEmdJcEbxhRUAXLRoQ7RVnaTQX892qg6UGX1GVab2KAv8qKZLUbzPD8c",
  "key16": "5kGvwMCNDPYo72coFtUxaf5CkzYbg87aqDr3uNw63HDbaVmFetrQxseHVLivzGRy3nDDxFUi1bXHP5muVNcMRXvm",
  "key17": "3LT8y8d3DqPxYvXcb4wH7kE2At1NwXzZ6a5q4H4UNPUsWaHvxK73zoydyKkJ8FBtAsjDWK1wCG51bhNGcP1brs4W",
  "key18": "3uPBHmoKohu4stV3muZZ83mPxxq88Py7MHrwEnhp4jsfSzBn1paWfebi3J6RUKbigU4noGq7SkHYDZj8CDwZ31iD",
  "key19": "5zVPGFF6H6euaEQfHoT3tAxK8xk4BiEdpcMnKzsXvjVwfjB4dLYkTywMa9trv1rpaN4TyJnGKnim2bLAYHCjcNz8",
  "key20": "WgsXFt9sYU37QcqMRUcEogHjkBT9r7KJKVNTJJaFA969Y2tn1XRJXUdiFMuq9BzRsGBFb7yUV81FzSAdYS1Hfbc",
  "key21": "3sgVqbUD2NGx5iQjsMpvavYVWhkcbuyAmdZyMx46YdjQAYgvC2WCEe5tFWtr9PsXFb8eHCEcQ4cVBBLLCPGb2fTu",
  "key22": "3btgCbweJ1mhMJhnwTvkDB8WXbFdF2spBJRgmGY41nhc8KA8cEpdVPi7f1tfq7KdwJBEMiAznobsMd4Ky18GA77A",
  "key23": "5UWJiCikT8nJtvMfU1Fv3ziQ94nKSP4PJYJDXF6tUBckjGWAvvgxzAdAEKv1ioy5ykXy55hrb72AuqnNWwwFVW2t",
  "key24": "2Qute3E9nrAVwp3QfDno9GBbgiyeHZQaTvVotYnt8yomrviU2LfYijzxjjaPTKqG3GQdtzYa4ccT13ZGR99191oo",
  "key25": "4yj62zpiNckT7xP3o5GaZxAEzHnWV58rmPrwLkgNBgzTDnS7J8DawiK2sBMxwbfmKSZCbVyqfePBRFaDH9txWAZt",
  "key26": "124CDhAr6QL78vnUrWVzC1Yqt8ZqE7HKqXoWWRpyckLh4g15HotTFA3RFc22zgtSwUiLipJSKG9e7JkDwhk3yoF8",
  "key27": "mUu7yKjQRQ9fsfav7maARmmmt4Y1BXAirwfXuSxas66doapYZYx2bNver3CACeatNQT3X2z5LQDdVs3ucehHQwT",
  "key28": "asfcaRSQQNfPRtNsrDpnTr1tU7N1BcizFfa4uSzCTpK6jnJCnfByuZmKtAPGV6vSiuTy4hh5ud5Z6Gs1JjVQp1v",
  "key29": "52BRDQKTeC5aNreEzSCkXSyCWykFugroydqtY2MQCPERBnQA3zGjs1sCCEqNtkd2H1cyFALWbJa3JcRBgU35L8oB",
  "key30": "2bqBaYuL2g3QZ52d7mJ5zTmejfWkLELxHtukutMmcNCDVyHn6YkYCnNqErziGt6FQqhE2JwVj531tkHbL3keoNi7",
  "key31": "2cJ2z1cmTuLrb37HCJuaEGD5fja9s6MmnY4rcPT1fHLPfyNEcw5VopHZWtbZB6jrpphgtJ5QNuDgxUzMypzH2QC",
  "key32": "4CWPnSLPhudRiNkMteqBRenT3kP3Zgnq2d9vZGU8mZdUp4hnkBs2n6sNtbWP5vz6P5C9zbhc7cbLh3cCLVsiQFK1",
  "key33": "3C92gKB6SQMqjpqGYjhq6QkKzRLFb8JuhF4H4otAepUyeAbvyyi6XfKegoNbk2pusM1dZKFmGGg135YUEKMXeSrA",
  "key34": "z5UG64MqK7e7LnYQybqgFQ2yaWdVqfPriLU2RzjgfvFSWa2gKKAttUMWc2jeyAEmY6wtzkrGpAKJVyRgbSNUyE4",
  "key35": "57hoMKpn8UkYNqDFss2d7PstzgLQn11ehqJFc9PvFKtYsHRXmdLfQHzGBHthY65SZPhr18vEdjSEQpeEeaMLAmME",
  "key36": "4BBVG9ZDSNwnWZV3ZSJX6D7hgQj6fawHtQYTxXcig4FkQiM44D6CcKLhu476x8hrjk2g9kGJjtyMiYfVhtKNMKpD",
  "key37": "3DMMqHcVrSQDgTogvHC96x9woQgtWNvrPMUhFaJXuG9SNMX44ApVDGBrqhiXUugVzFqh9N39AVioc8sEAeKR2KzC"
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
