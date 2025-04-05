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
    "TcLxj2HcH9XrvxvLhvMPKR2MHDLxP9PdWTUizGTNyTSZoMs4hed1DsfpatX94UD1kfRgcvC7EcuBcQiU5anetXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hHptXa5AmPbz7FrBzC6T1KARQ3sko9Fy8f7djZd39YNS42vrz7a1VKfoxa1KUS76KJ97bymZwr4v1zJR5CesRLE",
  "key1": "5cNk8K6gr6uvxPdDT58QdqtwrYZsmqXMY6qo7iw6esMvhZWByT8kFcqjnzQGP6YWNryMoNYuBKNbjE3PcLH3X2X9",
  "key2": "3miuGyRjytqeREERqPZo1LUvf4RCqLK6ein5SrcixXfY8cGEs96zTycuFrhUB8TqJuRrgKmH2nLbLMjpb62hJCDz",
  "key3": "MvHrEoPwwWGTxtWSjALigV1cx81qcvtGkqB8KFdhANYFmRbriiZpPQNngZJN92LrGjbPZNQhsaKEt3xrpAHK1c6",
  "key4": "4UW3WnXwbd9F3VExBKRFDEbV6YY493NkVzVCCXpjNxixwQ21eXetDvV246waoTd9w7aAyCCon9JJgRyLNYBFpnv7",
  "key5": "2GTth6kU6LgzFYnFvhx14D1pb6iBM77mzj8cqenPXk5fke4a6xu9PzpTE6TsJzXgbUpevrLpxB6kCrVCv8rgh1PP",
  "key6": "3jKwgY75y2pC69G2w3BSLpLTXPqdfDUYMHAyLRf3f1uxo7mzskDtxQ6HNYgneZ92BYCaQ3gZ3La2JFqvLWdySgVL",
  "key7": "fzRf7cRHYXDfXX5hdHBjWgfkg2LiLSBttEVR5PY54n1kNu1SZsG8286sZdzudPWqDPYfU6jbYHT51pnfnGuFjUY",
  "key8": "3yCRMviAUtGtZPKUT74XQ7iy4DMjAoMGjLFfPzotCi5Tk9C3BbS3o9YUguEDyt4YFu9TX2tTj8EPDLp9jgY9RBhd",
  "key9": "Sq3NkdAmi7j1MhvfWyXRbBvMd35s4aY4vHpdKvYwQTZttwHrC3EAkp9T2duaSiWTMKC47aLaTCXerS163erNUMW",
  "key10": "3PKXZ5aQaLrRsx6dpVt61852NoZKkjwTdyd9rMAZEk1t82Mu65ZrRND4SnTJyozG6zNLhKHJdHagLQngHeFXzJFh",
  "key11": "5XTmrvFN8rM22G4RHNruMNEpiuKvreR72W43qbwQNVuu4tX7nHqKNNi9LGoAk695aPnBF9MK7d3WyUbTMZGs5Vaf",
  "key12": "iuVQYd8gEmcvvQX3WZZRbh9gSbpvy7A4XH8LeA1M1tXemXAnJfp9yvzVT8cC7fAF4eF216xPgDiU3Q7qf9mDTJN",
  "key13": "BbwsyHixTyqQ2etDtU8a9zGW2wGRegax1PpesnKT978fA2PMH8aCAX6AHJ9Yq1hwn6Ydk2VXUtEudjnWHHuy1vr",
  "key14": "4y9uuKUmEYmFd4yGSWU16BNbToNqMibQr9NxPAEmViy5oz47d8NL67aAG3WwcZhjjQ37ckm3hr8xcARLVcM7GS8s",
  "key15": "iX8RG7tuug9Cs4vxSNWhtM669V6dvk3SvoH3M11RCbMAxAzaG3JaW94wAF3nvQBvvbP7QJ4deAVwrQxHqsN8yGe",
  "key16": "2k1NwdvWq7Skz2uyxu7ES3SHC7fQ8Ny8wsWFf614BxQUxoX3ydxCMVd35eSRPvbj24o6r78tbKfXEzpoJZDUVhQo",
  "key17": "3uSJzQVF9dbj1HWfjKiUbxPEK9dPB1D7wv91uhnsrYfQqoYzm6FtYeNUEYERjy56Fj5y1LspbeJS8gdAw7jmZgrU",
  "key18": "3SWhgRkpSDKxtwwr5nLNBv2RxgqfhXeazkce5cSW9KTgfKpnYpRb7fqUwW6t412SovSeVX4GptPbk3K9aLibgyWD",
  "key19": "2QCJWSqnFUCVq1Aevi8Nn3pJSoYveHtJvfoVJRpcUKYW1bzbAp6uGPQ1hNAZWAJpzGpCVE9mhHBHPwsyUsMib7jT",
  "key20": "2Us69C5X19yeohd3S5xMF5srCc68N85z3rPk2krv3vWwGhxocj6JypivBaN1XuCN4u8xe4JxoFKSh6zDaw2hUZ8h",
  "key21": "5cW3CiiWUV1vwmJJbZKQ4LDNDUvhgFmpKtBB3F2A8B7Q1v3n9QSDvT8f6kSir3pUVJWxgY836rr9KbVaFPH4KnUu",
  "key22": "5HRNgmPFPgvEMNZJXyxx71ouLiW9f6qUrz3ffeaGvVguD9xi6BDSQmewAqxXM562dmqJCq9NJyY2fgpkXc8eRKtu",
  "key23": "3NLNhCg2pn5LC2nry8A4A1vHHXQtACXJnLFbmSKyUWCnPgsRoa7SYR6U7BBbtMnFHeVqXMj8Wt3PpTsBudYxJdjm",
  "key24": "3yyPPRNZ6CVHHcmDDi3xs73MF9Cd36tLNEDwn1uZkN6xWnqpZSYLfKDDi25kqKicSHUW54H9mw69Nzdh9HMNivhw",
  "key25": "4yrXtedzfdgS7HXUyyAu8dg6ezfb8sHGJiVacin3VJAtVGozKawjMw65r2tXEfmpAtLmiE7LTcPa5ZhQjge4SBUq",
  "key26": "LKcZmyGB3GMcPr8gdZoMzbD59jB5nyJwgrq3NwwHBLpmHyr5bbkpRuZK3w8K9ST1f8mjw8a1XWXwK6h3N88Uq6P",
  "key27": "YiUpZBABrUAyRGNiKDv3Cia7t5QfM1pLHWyoGd1FdRE7xarcPnWEQzphezR2WntM8wu3jj9iGjBJwKteKbyacdD",
  "key28": "qHeY618uEey2XYNnUXg6nAD8WyBFcoX7ciaqWNpYazwWBU6RJEbp2SeYkQvxJSLNsfs16jN9pDtwgKrYxSTKSnq",
  "key29": "4ZrcqiG7a7mvyyYpibmsHxhRhBJCFoSdUFAmnKP6rY1vgJF6h6tQ8jXq85voMXzSB6exa8iWafdJPRLJv115Uh2K"
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
