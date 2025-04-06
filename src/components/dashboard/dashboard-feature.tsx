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
    "2uctf71eCYDMCsuDpBQrU5Ybqrs1af1RZKTL9QFBfLrtVzZKeRXBmtgKv8bw8g8mtthmRcV33ys1jwJ3QqcPJkgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t5isJJqnaxNcLVtvp5br8bxTdeufbCFqpZGtFo4PQr3aiLem1gHseMm3vnrJZ9vATZ8tqcrN2NGE1xMiwyJnvAn",
  "key1": "5hfC5kyw2zqSXPV1pEtCSZ6uhCuWBepGeAonmDxg6DKPgkZ51DbzojDHjXL18bnXpUgn6XByqgrYrxZKozgKgZ51",
  "key2": "65e9MDi7mYPUPH9z4wm2e8iauJyeJqsS3Sm5pySJQQ4fAEqexQHKBKU3HvWvDeKP4JaF1K8iN2jjtKSGo9gByYEi",
  "key3": "4BwowBbQqrNa5BfUHGNsMa6UgSrjPZBomFpvfGa7csinP1eBUcNjSuELWJyiQsTFgLQLEM8FyJ8qNYoHtbbCt7DV",
  "key4": "2H8KPyHny6BnusiajFoNcoGE7drDCExVn8gup9WP5k6gEvFEYW6NfiWkfg4AJ98tH7iAtE1FXSasjGwNNMSwmDXt",
  "key5": "49C6mdD3zV2jDjkVzAzLS95MABcSit2Pe478kAW2b2PwAV9u8aGa56vQwz7k6yf6eQRCJPFj93rnbrG7KuikjGEj",
  "key6": "3XNqD9E3dPJDXYvyPV25u3BuWYbrEYaVvom2bMixdjPXJ7uD3jsdLfqPzYPsFzk3ugLmUL4QD19LBSZTVhFcSrQN",
  "key7": "4eia2yt75XkSs1MT1jkJXQmHoYqagUqRcFSaH22RAqyLJxo2xFdduFAngeY4riK4WuCGmR2CP1LjyoCHYWzGn8VT",
  "key8": "TJJM1n23riacp6k9vmqBRNUbwYdTJL3yQjobZXTtF6ciaf431NoNy9ewSQrAhMfijfuWmGgNPwXBpBEovrzucyr",
  "key9": "2hX1NERKpQr7oxZFXtUyqYgk94m4d4WeCrohojsjVbUFDAsW84z5uVt5PMkAHUiaoMLEqRrQy8FcxgtoG65FkuGB",
  "key10": "Ex1JG5T8QJFbfThXp6FmgR9bNDWdMQyZf7WAiQgGF2J84SotwbLJxt1eiKELtpzyF4Ky2HYpEmQpC31B3kGCE56",
  "key11": "3UHQ6Knb2FKrZ1kM2gqoRHvTjg1U2HNX322FBa1XEdsSepZKcbgqNG1PcRcu7ysdXxWH6y4PRJby6B3waBTUUQDf",
  "key12": "57fginLofzqw6LNY9GfbmcrrEAToTa2LVFeRJhV1uLDfp4WXbSCLa57syiPPwKiwDFbuUGbYk7rctXj2mmG6ksCT",
  "key13": "2g3RDTthPQpYKRT1hvMMsxcZF9Wo3nmSHm5KwJPndrJW2rTQTDZZUxXGrsbXSLS1FknU5tzp9vTdobN1VmQsgLYP",
  "key14": "4uU6RysU9VJzCbFsTWjXzN5452qMS5JswqWXbVZ4ZJ9yttsjBUqNc6BQdUTr9KHzLrPSP7Wb4XaVATrkeAfa4WZn",
  "key15": "5KWkuqjYiPQ1zh8Qrby8k4YwsqjH3P3j8W5iLo45otvr8tm7GeVWnGGb6JztU9LbiGsvdUUSkMCH4D7gjSWjUxZH",
  "key16": "5WCf4nUopGeHT9nHeG6AygHUqa4j7Dxzbu6UFCt61a6iBq4ZB58MuaSkChnJiJK3sxFqiABhsjsMYKbBH7GBsKQQ",
  "key17": "5yvGhjmtoRcFZmygSNSHGPeQkXuVXt3u3jwYqmmgVqqUhKoN7SZoLT25yeAZRnkkQ9hMdAuJ34Md3xCnnoYFeBat",
  "key18": "s1iC9t2qT5pTwWvVeDgmpioQvH82dKfLS8hpuff8PwDdbATX3ENGd7d6EmjJDXquqpzd6wV15NQFwcjF1AKLHgf",
  "key19": "yfH96kZxgs9YNCM7vfKPhsQAE8Hebodp3SM2ZGXniWu1gxPAJ9uARm2KJdzKurUVQ4Ri2FoNe3fQzj1k39GkJLU",
  "key20": "3Qsv6LgXjG9xb5V6ZXok1PwaXGEnsW9sYNWbGtmVX2APP5Dmh9GbCGwgGMtXQ2jb4rpkwyV7aDZ7v5p2dNAW2aiC",
  "key21": "X1tTSEh9x9BB5NuCsDshaaTUkeDLFYEj3zLcFH6Lx4i7CtxtvckbcZyCbzSqvk3qp1hzDiQFt1Bww2ZLhV3CmGR",
  "key22": "DYvoL67uuKmVVuh1q8MvrSAnz2KTJuvBRhVnYAcnuu4rTtS1jC2QMYhGCPMu9MUhCstW48R15C4xuWDRLZtD4eY",
  "key23": "5vEfC7K2B5eRU5RA3nLBApdEQHcQvYo4Lgcv9pTdcM34KYGSHqgcbcAwa8ahrdDj6cguHvxHZFb27ADLQbANe3Zw",
  "key24": "3G4gJPLDSM5XRDNmDfaSsn5vNEVBZLxCkoW4s8Tm4P73Q2GJ1CnXRpDujLeDFQWUxKwe6PqzV3Mjs9AtUuFbx6w3",
  "key25": "KhMsnCypEGcEf28xfJUx7mpwfX7dFXydFNE7C2cHG7C5PkAmc7KtcWQcagMqh1GY7czYuz2vchdsnVP1Vc7KSq7",
  "key26": "4ojWY4gRJcjzNhreWhE7mKAnQH9UaqYZPuZQfgGCzQQsMfTFceHoCxWGSW2ppHW61M1G9hxP42utoNjwGMPnhozZ",
  "key27": "2ArF8pepnvA8vKCL8dMtpXhgKwCr8KQpKohbr48okDcBrnQCSBREPKVGTgnTBp5658dDzzqiRX6gcWUx47wW1YUp",
  "key28": "5zxojhx9q1mEvCYh7WgE9ero9HzzTzG3mFhXDrdTp9b3zxwaccm9f5U3eswstor7iY9GKc92kECToVG1hJ6ZHLmT",
  "key29": "2v8dPt7zvLsP4fjwVPapaf75Yjx3FkKs1HKad5P3rxrCYnd6EsAMbzAAPAkhuVS6MhnafHuWkKdYxudEmPXWe65w",
  "key30": "47f3t7j34S3NqmyaPh3Ur7tKi8ktMWW1kgEbsq29EiWvqT7MW22bqvv3Vkxk7P3PYUBLAd1vJUAmK9RwpJEzcqrJ"
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
