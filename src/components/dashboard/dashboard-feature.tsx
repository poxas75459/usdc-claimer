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
    "5h3qroY9tQBCrmuBw992fgb4EgbKQbaEaNvwDfmpC8nE67zC2Mz4Kmpvo45yK9T4zzQy8XNmr9RLiXm9aCQbi1x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ZUo6mtUbSPAGD27dEJAP3Tp98asSwgNkAfhD7twog44TcKrELCdGSqQ6JZJaVaCVvoN5nLCt37Qv75ndNKUaGW",
  "key1": "HBDbs2N1XqsLiQL7raNt6PXPyiQyBppXCNY658AmqzuDkzFPX4t3tWTYvbrjb31MoAek4UVeeWbQjGkGH8EeNWP",
  "key2": "35nAGyTi1JzuVfwgETVGuFFUV3RqTicG22NALFcaTftHSpfd9ba6QWcabXdiD4DmFkca5tX4gf64bCZYUGQcKEb4",
  "key3": "2XB5ZPbfA3WnPFH9z1KT9EaDjCbAmnFowWxqZtBAzUGMnF6CNdvdFfJKVwoiyQyAryk9ysvSojPmCxSExwxQFqqb",
  "key4": "w1XDtdBi6dF9QbDCvXiYDr73cUXQejcXySwFDSTSgXQ7xPkmr3tKF3kvcuApWSoFT6779Ktceak7QDhXH9JtfmM",
  "key5": "wbMAD5yqP4Wnw1MwXRpKw6Kz3jC9vYeuBHGuq7Wo2b5R6VT3MUbf4uHBeBmBkumti1XWyBRseWbmrd59u8TMtZK",
  "key6": "6NXLgLNt82qKN3eJiV9tPKR6XGZ5wQirWJ1GUtE1vbf7F9tZwj78GBK3v2N1rNXK5tBxDUzuYF2nTgvoihLNLeL",
  "key7": "2w8As5XCy6Ke42nt3CvLeQy5tykYLzXixXubxuh7nfaNpDKDBvXhx23GxR8U7veLcSE9dN7YtdnkvFTvGPCJXQPC",
  "key8": "APZDg2XQ6xDWH38XyrHQS73pM8Ruj552hXCD5XFpDKB9f6dabEXku3hvcwgH2CRQT6dNiXdSVHiW4vLR8NzaoRe",
  "key9": "5mgYAJFx2yyUnZhdxuqbg9yXzXnnPiMnseCxG7y4hg3QuWdhzqQsQbjitTUTX1zUeAdVz6tyXHpxWvEBsfMd3WpL",
  "key10": "57R1TCmPtMiowNDdorvkUhRQLaej3trEsdRiysaKvKTFwmyUYkQKfgxxBgx2nxXPix4ntJqGJefN5TobpyrQpkBU",
  "key11": "5FeWXgLRfyBNy58tYtTPCoDEKSLr2mhSKgy4qRViuhf98GDsbQitvDxFXwywQFHbtYWGkkeqLMrHQ3rgMid5jLBx",
  "key12": "3m3qkFN4za7wbPKArH2oHdwYAtXRFx9zsFkFafBQCRF2UqX7LwEVZuM6yvsah4XCkbgeiyHDsdo4oQn7eMosY8cf",
  "key13": "4Eoog2RtWD81bmoAMTJhGJyv8J4gy3GrGWkUqF8osqj8tRTryFhgbah4JbgLb6zm5QjwdnkriS6i6PB9s7vmCeKh",
  "key14": "2EZqt6KBgQKwmyGWFN32TthPqCSysh2PReYtwuLf6HcZ4ugS3zjbgKhewGKrN3Uxiuuk6meBWzQh46VcCpHZ48vW",
  "key15": "5cy7NtHce35P47d6H5Etveruo5xAConMDCoyc3LBUQRCUom86zX31ka7yWWNTim5NUhMW4cYssFqLrmWFiTxUfuX",
  "key16": "43LuXuwAtfcyyFSJVEhdMTA2dTeTAsfnKQu145YH62U42aurRMZgAbyF4DRc1uDt1nBjLahTWLZSCyt6vfZY4x4L",
  "key17": "58HVLR4rNEnFYtj4zxBjjUiW6Ky3LnvaMWvoUQ9o9pyLXJqvvaeH4hB8F6PEJL4PoQyRx2sJCT3qf2nCNH6VfAJw",
  "key18": "27nyEmwdNtJMJ3QiqaRSwf75Cn5eZgczE6hnKohHemCAXFQgLd2oHvQ6pySLJYXMwuWajMD6kXNSdHcbMMoF3o2N",
  "key19": "jX9eBbSkNkn3ZkjLXDybMkWqPgtWaa5E7rbfwiKWFqhyuZgnSU3fSde9mY6E1GR3Cr7Gp5Xkro6QJL16PpQ41WW",
  "key20": "2E7YPNkPybeoaUbh1S9b5mrh9c8arJkH8GH81N5pfBHFrekqx5f9eWGksspCRt8mqveRL1nkQMtYnWfmzbNZq5MU",
  "key21": "51DERxw5QeE8vWvNCRHobtrDyyVKxJ8RGxyyHaatD7FnGqMVbVrHPfMrh5Cw9Jue3MWh4Cn4ZpvmRpZ7a3SSUW12",
  "key22": "5NtxV6JqPkECPSd2RMNS6q3pjtAp3yBD2jG2KgJNJ7gW7To3CZLXctP2HUzkGZNVByoWqXd3ab13qTRaF6bMXMho",
  "key23": "2KkhdxGtAhwZSQugeRhYzGCuUJDdVB9EdZfQu4uozWdEueyvY74ovLHwN9v8P2HmW2ZK9g6WRSD7NJksuvozC4df",
  "key24": "59d5q7ktkwc4duPTj6fY6WEZqLzCjRP3NiAhR4fKrJUaENEF68zFoM14WQZnWGtxZJjnhzEc9ddYHqCv5nPXwSRu",
  "key25": "514Egig6mpnYwe8bKyixCRFnHLuFNburm7d5TuR3rLJqhUAiaLjeULpyTtERbV4v2RBhj2KrHi7gMpuLhPAhbQmP",
  "key26": "4ZV2HfeiSNhx62z9FYZie4HdUUCv2dkkKBEcJkPPWmm9K6LSDLa5Fw6mP3qPqGL8EihK7WdTBaxRaPWi7CN9gv45",
  "key27": "2CjGrMppC2BcP6fhVTP6WLvRA37jTQfr3itRuv8j7TVpuenwjmqPVs2xAxvtt1s5BkBakFW8ToBRqothFWwXvq7x",
  "key28": "5dHQaw6zVsuh9NTjhKreLK14gdqpHZymBd36TPqpqmUMrYHLYGrM4DEMEs1GCSchsDP63KELyhdyxbwuxZSCGNCX"
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
