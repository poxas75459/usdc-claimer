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
    "3iG7JBFxiFjvBLadc4U2WMdfvYaZpJe1NjYy3pzdqncQrorS3BEJRPkK1KdJ32bVysmMpS24GL9m7hYLb2XA5iFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GZHgEGpq94RvZQPh7yMDcUvWKdNiapgFnAzjjuDeWJL8pSqhTTqQ5hKLwVYvp2jbToHRYpSniSEU6iNqWHsp1Q",
  "key1": "2mSuQzVYorrMC5fs2CtM9sQYXRk3W8jmXhn4DYbmJMFVmWQVusKgPadQnaum3LSW8mLxthdNg5nWmNZBHgJ9kvZW",
  "key2": "4RUVZABSaRgVmN1CFk9QNnLq2QthKC7b4W838R63iS1SqEShDfURiXZzAssBw9jQRU4pj2acssWsRM3g91sozQA3",
  "key3": "fBaKm2A8pfEdv3opZ8VNw3gJ7MAr3Q3qKEh1AWnvqSGVKgJJ4HqfLxUHsX9SECCfiwjAH9VWV3DWpVLdxLTufBg",
  "key4": "2mpm9ht5QyZejRcDaZFJdWShGugT4yTpeBnbZTMqHrBEbXfCDEt1XWjx7scvqE1JL4wPStLJuXX1iQj47VCyTPTB",
  "key5": "2rKKSd7RvtimD5rkDUJjp5NJagm2qm2DD2oZZ1TCPvYeeSz4zf42XrdK5d39xPGeMNEZfvsGURp84hRLmMxz4xvw",
  "key6": "ZcjwRvNPDjgFD4Tf4hTnLwbSwPfVwZG5djeB1KZRzdfPeuPpBz2VBhe5JmKMygdUUBVHdgXUT5JCxq9tEM7k5XG",
  "key7": "4fTnS84bJjkuaGu8cvTY329GcKF2LL8s1J2aw7W6wRPquy3YaB3FQKk1DwSbVbc9yV9Hza6CaF3Pwft28BjHLCc8",
  "key8": "48nkeKeuddrSN4o7kgvcXUmnqaJ4oRhER1LZ1By94iCQFGuYYk6mgVqjhUawD93dcMqpE5qSrerNmY6hpSkvXnCY",
  "key9": "3tq56KATF9N4iYFY8ciZNuC52PDLbz4WzP8yF1jLQ4gssWfB3LfBCMf1JpwibzyrEYUc32Uyr8RnU23FRH7QKokP",
  "key10": "3bX5a3tUhQN79frQzeSCJijc37dw3asvDf7nHiL4rxT8ipXfVpsvE2ZozVnwiwyV8f2ib858mLAFfQ3ub9nqCe86",
  "key11": "3tLUGc38tGm7344woEenCGGcSzn72JKYXzCUDUq2xa6RPLeGj8kDTp4JJbmdERgtwiXt7iTcY7FcRSfpW1HW6xpd",
  "key12": "55G4HuAoGqQtckZTXC5Ei4uU7BNzRMLH1CH7gjR1CcJR8i8Lw42GmVYQzQEPABRkdmMPfaKt9iNTi2Ukqvxv6Ehy",
  "key13": "MNyLXPvyUuYJhJ2zQvQ6XVzyLRYaRvgTcATuuWueCMvxMwv3DMMhqqHx4j8NWU8bcpnD1yFD23aePuMMMMqZZbK",
  "key14": "3nwz4gJxd6TEoQ4bmiJLHGpWPKQsixHnZwRnqA6WpczzWT3o5mqmENxTe9RrWHCi6kgXwJkk3cyhozNzWW6Rq4zf",
  "key15": "PSkV8cVpLvrsg4svf6gSvkKvvu8Vr9ywaFcR9cxkEc98AFhvXTvepQjshfxULJPWzGMwZmkLc9sbPCD2Q7QrUKc",
  "key16": "2SSHbwsd3i4NP9TPJFCCndWRbHG2iPRdKTRsP9ppPEWTJJntmTw8Nf55wX13zikXGuYZYDft38rb9Bz98WLgwzsa",
  "key17": "3mepQXNCpWziS5qUTeZcUP5M3iRkQ4J38s7mKTBPkMS54savzeKYxYgeNWTLXkZ6oaCWBukZ546WZoNm3tcELfhr",
  "key18": "3wWcfvCLBQzPfbZzDxz6PxKfJS9qj7x8SNeGULiN6rUBcUVfrfT9HkDxhYreBnypRUv8ZH3LG7NrQTe1Kg5QEf4x",
  "key19": "NekDiXXWBc3bkB9WZTFMzEvgXaTWEP831jX5m8YxdJWQ7MADAkNwCRh47KqsDNXSRNTe6KA3UhhFXmMG7XNHeu5",
  "key20": "3dWZBDKB17QgX44CG7MVWMEJCKrjAELh9y5E4gmaurWaoFPYAWSp7M8e4faEYAYFjJg9NdjLmLvKSp6z1dss7c4D",
  "key21": "34GjqsG7TfWY4VtE65mJ4siPu3xcX7Lp7hwMV6gcXh71G8etC86hNDtVzwLH2SQDtSCXJfqQRH36CNeoZJeKW7JG",
  "key22": "5Do8dHchcd95tpxNaoRWdzRqFDpGV9AE3Vz3cxuvBdk8cJ2XafkmLdNjxyBVr8B2FZD8ZDXSMbhhxCcUYv2xjQHL",
  "key23": "2syQj4JXbLGS5jTi73eYMtCiLt9RhkYFfN4NBLJJkcJhFTGdsUFHrutWyzjER4vpVW1mfst5aa1of3o4N2KudsmP",
  "key24": "3vCVDyY2HYsuf2Pw8FXmmmQJVknmsKqdm7piRtBsoeLEwxfxurHPowG646tfH3DzvRMPwMRau5ERDLcN4VqGBRrc",
  "key25": "4BYp9aBJcW6s5Ta1DComNXkKHTE5i9z4i652bKspyYyABFY5U4wttGhLuBEK5H3obtDK6fF3EzxUtBr9mtEBMVSm",
  "key26": "BWBaF7h6kjPnbuKjwwc86VuSA4ULM7SxwWpYzfpNAKRuH14iKY8URjFgeAyHnBQUWbbacNugyQk6CYa9WKp5Sgf",
  "key27": "dY4tyWYoEpEFmU4k2egZhSj63vdzK6dB9g54oZg7zX5qFfZFbgB47U4w3fuRwk33rxvUjXAma3NeRkt9it3CXYf",
  "key28": "51LhwQbikrHA4WyLDwHGhteGvJ1hKpyisgBy8gzhby1Dz9PcVupyFkW4rZa2u9SZpSWBxEJAD1aTMuCU1hjoWB8e",
  "key29": "SDCmz4RzWS6GVbBVnbz1UT68PK1GSykhpYvRHH8eKadTqYcv8ZcScpgQuxCnmTuyv44WT5KFcF7sHMArbTjSFES"
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
