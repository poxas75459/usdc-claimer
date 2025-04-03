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
    "2Dmk5TPq8BZaH7LuD9XBMbKoLCGUGaSdEHfzDyMHHq37K1WSoQ3WckdbzqERdq8wqDYcshZ81v55wgWE4YeBUw5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BypoRm3jvQz7UxREoGKFjnfnEv9PZcKFGsrQrATtLXDU2Hf6aiFmK5c2UFKC87VkjU9ze7bJYPR3XLCW8LuFjMz",
  "key1": "2QR4bos17urZm8XCSEXkAmgp26HhGcft9Bj3VtVYuKHF6a68tkMTRL1A6WKuajAgsLwALBtrs5K1CpEwpLtFDs5t",
  "key2": "4yJDN8FfxpTDMJwBnjfASzTw1GZGQo7YqZAeANZwAeRrbFsGakMVXkBHH65hUYUt59H14VbMZ7jiMADn6qRYxE4L",
  "key3": "2iVGXuHZp3sS2Yvy5geaSpi9scSdC61T2oGNyoro91zGjD6urNLTyAekQhirCnSCroEJpjQiDoLmBsyEMarR9Lxp",
  "key4": "r9Vk8chtuw2wHGJVH6ivnj2Q7B1dwnZ3MzgqoAnUsHvprSRoLPmYvQXwrFCiCjmkQY2jW9iDUQ21DuffMQjZ1MQ",
  "key5": "2hhkLNyjTa45WzBWzPixBduviomCCsZdcyLpuEAxrdvJWA3JDtF6J9TBjBXpaMbGcrutcSUB9fGf42rvuMZnw1bM",
  "key6": "3682Qwi8PjwDQmLJFVgMxpQQWVyQD39eZPRbAPQAheoYWhJ68yEkyeXZdCMAVzKwceCikJRHGDYdgECbsrWfHV1M",
  "key7": "2Z5o5pc6wKubtUyDuPD1FLi1frdiX4kBCqVyb3PjvA4pr7MfG3qS98PGgbD2BSiD4ps7uZob6RpedyHpJQvenWCm",
  "key8": "3Mo26tao9RJ8VcDDJmM7aTuLwJj6ExgAbTRz9HsgGGuPhEsjh9YjtBoFhfZo81JeYeFMiRmippa97BDG9yPPdrC9",
  "key9": "4SKZFKMfvkxAxMtM9mxZtkpuAe28vkM9iNvLcsbh1ugknxHoKPXAAhMwgRG1LBNcp3yYooaU54CKvfrZL15Dig3X",
  "key10": "2fekzfytLBLYroaojABUrYSSVqasHpwYHpw7pZPSKHBGMWzRADjtHPXMVyk5ULm1VCNGZazJDkQMqu12DL74PdSX",
  "key11": "2rkrTy5BhQpw4BCLaVQb798kPQfvWPK2BQwJc5TnsoJMKNjAw3emHgx6686MmYvrzkWLSeyrdGTjmaWbRnoazuiH",
  "key12": "2TyQsNzLD2LrmbUQ2yubhMySFLfecxtT4uWP7DBaVQa3eEjdHgqugX1rriQjkMJ1TNZ3NZbaY9LyLkJo6moaymVB",
  "key13": "4yowDiumT3RFgq3idUML35pvJjU2R8hqtZrtoTuz4RVQT9wYGpKhwt3EM8V6BBQ9XHWyPZotmLfs9bbfPBmRTNz7",
  "key14": "2iSEsZZsBkn7fPYZYLrGetqRbZh1iEW7E6Nhk2KhYqY1U9HhvKaaaxb1XwrDksZ8jftFT7qZ49wAMCsdHJ1UaTKB",
  "key15": "3rbfkiz2j3eW4wpPq4EAm7LeiM6oozWQ5QKFYGxWsoojGvwdPZhT2BU4kk4pvbeSa5W7ySCDJ7iHocMCLpJEshQA",
  "key16": "4AD7grN7bsRpdmyWG5jihykj5DUoSrmWZp7RmQmeEr92piJv2euuReCst2h8jswA1HDaEhgm6qHmMVTaDdKhovRx",
  "key17": "5UvhLxQae4r8Q97qZaZcNPqpPVP2WVrC19nKZjdCQGvcaS6rRBArQ5Ncw1PdaGWDhqPwAnhteAg3rc1PbgM9zPd5",
  "key18": "gbRK7wAKRvBiUfCFLrYQdfsBkayi9eeiKSnGcwdfH6HARzqk5LsiKiRmE5XeK4WLAWapmqpNp26TKZZZFmHEarV",
  "key19": "2LDcYGunc36iQgnn8jMhnznwEJ9spYtadphsbQNnUkXPrc5yrzjBWmKrFc3BkSCgtNkdSn5Zf6jxqcgdPkoZhevF",
  "key20": "GavZBxR3Fs8XZNgqxn3Ddsb4PP7hDpeRvd6R3PipFTBH1M46wd94DGY2tKrywpCNB7ZrdRx8JoH8ZDuwn6QQU2f",
  "key21": "48wuXZN93ydKi1QVsKvaySWZBYD8sWh7vJFzU3NUKztu16ZkMcCuMFAe6aRRqm8a9MwKWhSdkQUuha7wh4TqZTm8",
  "key22": "2RSFnCdXC57xDkZqM8bmN6rAn4rDsfpvGPpA2bBp5kHYJ81paVrujtjxUkUhR1prm5U5UaCjDsnnASQzp4JDnAoM",
  "key23": "3adDCQvp7Nc5WhvJWtZXF11X8tWvu7xhzSnBXWDFbG1AH7we2djrHX2H2hftwdzby6KVityZsz4paixYbE75KzEK",
  "key24": "3z7zFPc55dLXuaUcTyPSgdvW3oRC39cDrRVFcwmyE2F1bMHSScBujV446M7uVaDvPB31NEvUzGmtsNGJpfxtGYSB"
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
