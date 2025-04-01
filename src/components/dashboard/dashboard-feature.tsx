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
    "3NANeeYhY8SCYbcy3mTpqAfFXW4o3FZhJ29r31LWsmP2DEXTTQpLNqHyvGMgbW9bXQWGB6JuFSTqRFLqjFDQ9bDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFjWBhwSpkgcN6p6CTCEA2MGt2ZbEUt7v7VELQK3tToqBAbrYhLGfeji1wJWrMcva42dieqqvipuW542Nm4KLzm",
  "key1": "3k8FBCRjCwnPTQCN96esoaM1TiJGQMhA7B6r4ikSmjcz97qHxekWX2TMGWsqJKKcTZyJbh2Y2kivU7DZTfhYfzBz",
  "key2": "5pCBPNWbPmoKAUQ8veVmvo4Pn5ARbxNmbziCmjxDiKwZUPJwpt8wEDk8GbxbTrCJNbU5pNfuJpzFAAdW3nB2Hbth",
  "key3": "ixZrAD6JCXBfBzvnwx3V8uaSuwirYb89YwxbYkSenaMdQHZ1NaBpMhwmAtSHfE5gjwtM7roWbcso7JVeA4MNKq3",
  "key4": "28g2JAC3R5aTjXFowMrA5bm1wTkKzpVT5zT5A6iaXpqsRKvR1FQHwV8hEaH9DeGALGvr5r6pNtjnNpuXJDhgTUQC",
  "key5": "kCvxmvimSv2W56R6nY7pDFSGofbxh9iALopyGYyugivZReiWbd77XvjrAGkwHJqjm8LQHNuRFFXmSFNkn6S7stX",
  "key6": "3xzGLeREMxr7ef37y1kYud4RFwJsSmn9g4rmtTZRqsrbetQYmZzANB29Z4WQZ1oqZz56qAos2GogtqnjmLfFERLH",
  "key7": "3HV4pnCzvqmvn6nQUS2JJwV8aYLFTSrtAQdYwBR4wBFNWvqYvwgRXSu52w4wyJLf3WRBynhJ4eT1N6khz6cJdhpG",
  "key8": "3LkUhCtbh5fwMfm8ZDA9aGeZUwB1SHZdbQdBFPfFNY7Eeec1a5PkgJJdLMTqSXH43YoEGj1Q1HKmSDQ2C56Gjv24",
  "key9": "55FqeC7DRUwLt77kyU6eLKdamyLo3TYGUGa2QKLh8p7VNJdqyJrJ3Uo5kcq3zE1ifVfhCGF8C8SYvTWuAF73rEan",
  "key10": "2V9hzdPohddHXHZjVpjqjNmxtdZG4rJfaYHB4zkr37qPy1d4wxpPs6LDZQFY9enrYCbJUyoUGBz7g84LH5ZLWrRH",
  "key11": "umV4hY3wiPQrYufSgFdocnkq9PSmBTwvKn1vsYW2LUy548rTPNoi96sQcpC6yRsX4pAawGwuMaJvLfiqRQBrnCN",
  "key12": "muXEkBmoWXgQsacJ17QFK7VF83EpQ8eQC5g4mddZFZ4Y9NRWa2UA6WD3RhyjiDvQ689c43xVVP2gMY8D9RTTpES",
  "key13": "5RYzaeZZhTLYkRaHv28QMZH6tAPU4ix7C6YGU3W7nayDiBQCxhqubcqYpmmhSQ9jB7M8366yXGYkmUPAvt3SgQZZ",
  "key14": "X5Nf6nfyGahwsrSCtLeHCWiwjKx24okX772GAK5EKL7RzTHvxQ8djREwVMBzNUybLCSUTSfmXYtQBXWvasSYMBg",
  "key15": "3fGwnr9vsmFU9b7jJ1AoFmFfKRmsoTKNei7DtRvZmndg5iNd6JfT7sDHHru45WTvQcgkBxxPF4EfbwHvQWKW7YLs",
  "key16": "4Tu5E1suoKWv86xL4GZUJ3D8saHgfhHgt2vCVXCNZ2R1xmUKPdx9YhvjdS94JgkLkFauFvJSDBjjf9YxGrfRHkRs",
  "key17": "27cB9BM45r6MBoHXNX79B9i7NBXKYMVX3g8ETh4t8iLZbhVnKsGHvZDaFpPfsNczzT7aguRouaFAg1rcYCGr4zHT",
  "key18": "merTgduUWwjSB7N59FUJbvzJSkX6pKjpQGMsAofi1uP9T6owtgNnZBw5xgLD9DPme6E9tqrney2o3jXDfg2byN1",
  "key19": "5KsgWnvf67S58oQLvTeKvu811sCYe6mKqHfb75AwWYYhaDo4idR6XartyYM6apzgQxBdTotUMVmVFV7Dr7L43ykN",
  "key20": "5pPpzHgtCzsqMtURziLNRWhBJhxr2q1ZkjApx2zscRtEi59JocJTph9gmLSRtxFou7FaVi8xNaByZBXZ1EbZeNwB",
  "key21": "2bGwBAfpFusJoCixvRtkGyNhki98m5QTudLWExBrc9xKxzjmgEcVEsffG7EemCtkZDn5SVNmrQPLX2R78g8GNKnQ",
  "key22": "2caiXG3rVdtMc2G4TtKsBqXoiVxDwmcBfZf9YLsLQg4V2sA3sYbTdUbBJb9bvHUr3EfKuqbUdrpAD6bUxNmJb6UN",
  "key23": "5EDmg5tkUYCjUoxNnKHfNC5VLQpUZa5HsRZtUtUfPtueE4PobEmqU3aivTtxZjmGGvK2HZJCKb9WtUyTmJHPvFzN",
  "key24": "5qqJ6vbxppGJbGBUwJq1SjeWH7uCSDREu9nACahbGC9rvCeVRG7h7yZWeNgZ5VZukwSfUHzy7WXsqmmka3RAUZfy",
  "key25": "2sRHsTym8iS4ooA8rsHgj6RuvwNy5zFnFeeABxN2aAMjfzzoSAr16oGbXeoSMLnxEDSWKiuNnCi5YoCmXrn1zpc9",
  "key26": "29pynY5mmXovAdyqfWC7SVakhqxzM3mmJLnSLrAJbD9YPXEx9JtZsfwxhfB4BnuW9n7XwSHnuGRusqeyYJiC9uR2",
  "key27": "5RAQHBuMmJUh2BMZ1e3WGHFiAd8ifbBX7JQpb98JqptTqxZCgV25zFdxrhrxFRo9t9xs8Wfy62gLcwAL9VFQ4MZU"
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
