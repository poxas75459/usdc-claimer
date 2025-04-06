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
    "4EJkn5Ly91gg67dk84K5zd1KsXyq2kj1mq92EFXQrzhUZvxNaCJxY2G1ywXzBPyNejMtvWEAQPBRLyTHyKQGAmKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvbT2yzDymCKFJVgP2RT1CAz7rAt3SvrjvraoYdvdvCvKLbKXEroWdnvHTUwa7hTTow6PVX1PaVQp6QCQna4pNq",
  "key1": "3BEnKw1msmQ4uQucfo654cg4U2bYX1m7PQRfo9iiuCWM5kGSiajLuwMMX9KKregQJjGna7AjmHwT7BSmETjLxgtd",
  "key2": "2tPee1VMgebKwEvyaUPZacrSZTy3YSN1XbEMkGahTHsobfGXyyZ5o9zipkwJxfWPC7xEYdsuF3wDsA1ScmaBqRkE",
  "key3": "58B5rsrSLDNNh6FiBVymKnxQNQwUghAdRfDkG3w51UfAd5k7dd5vnCzdBNZFJpYbSAmDAk8CX2toaqNseu9EGcKb",
  "key4": "4SidiWQfYJvxnmgBGdVk7DKJ79Qxg3cmuVfhgF2w7MPVhHijvBSqg3XzQFHS4hgqyPxy4RAf1yYrzfGyMdWsMVJm",
  "key5": "5XjLSVapvoyp8StDYHE29KkrSykNLy9oXTtJ759H4nSVGghwsfMoZ4ZX8FVAedMK6o2LTKBUkmU7iHdYNHpwGFWn",
  "key6": "3AjJhZPVEdFDe7u9LcXKMn6eMgYNBYAAhhZ2m9emTGiMvdH9tEiBXT2HU31MY2uP9MjPt5zBCEHHyE485MxV7LCj",
  "key7": "4njC7rYhngkREBu1VpdMux79V5DN7sNJ6qZ22vnLS4c7ZPE1YL7xY6qmivk4CpwdZWPcvjWsSBd5nQBjm1hUedQn",
  "key8": "3M3MmeXHuuiiQdhQxHFUHYACGuDqKTKxvvL8thnxS6ifgFQVeQyYyuJJg25JHVA12ZL9ZSKv7nN3xfsHqcD6reUA",
  "key9": "5PSm2pREiLJoQsKn7MFUUf9yz9yL1pCPGiyLQ116PbqSugQGA1fji3VVwRamZpd7KDaeYAVqJutAanDftViMhgwr",
  "key10": "4egGizjePwbNuHyjovFFaGGekPWBY4japFFfhztoyrgSWkTUxKrSidoXYh9DM2XtEBDpHZtnXorK4S5ktv2nZGpN",
  "key11": "3K27qdg2YKWDYUB2W1sPmDBcw6CpqZr25g1iFcQLdagDHiJoP4NPfYYo1Tm4srvsmPbfKSPk7DTrwNGpPcTyN3eH",
  "key12": "41aCK5k7r7BvoddvbisZXuLyhFSLvRQ9ipkTZhu2egwimmMbuTdautYcBoCqmNURhoskn4SFY1JKtKQTS9MEq62j",
  "key13": "kVXwJ4YyCvkGxVK9nGzKFYX7PCKT3MYhdnbcfzLMAAg47yLk4Ca54iYLTZj5jJqJWnxKk4Zmi2pkvV2oQNq22XA",
  "key14": "3fsjVrwJ2Exrmbkr4UpvUws3o5LBV1d5KkBwDUDPgzxdBRPNRAHyr7ewujXzk16Rk6aYd4W766G6yDyX6K1pXwCt",
  "key15": "27gQwKxNZX6jhg9HqQSRNZjdMwvb7EbGakCCzA1sjSA1kyjCqoYzXrJXZSBFAGx94n5fo6CiUq1Sa41oseNmN3Dn",
  "key16": "3WpiYCcnirXLNcT4karGSiiD7houyPjhiv9q7vzcXvt5pouiPj5hEoXhsSx55BEvSfzjHqZUBiRrhH8MqA7MVYeY",
  "key17": "4Jh4eYLAH3xfaF8vX7HQ78Tfm8J9NxaHyWJ6CYjrAXRDoEkMdCkdwjJZvdojtdQF8WyWcX1EX6btv2hF5ybqACEy",
  "key18": "5f1Et2VPYfjYeY1685kuGTwbWsep2qpyHDCFyefmr1izWHBqHdRRifr3JSjzAuzg4T8AAQRnC79YHaCtPeX4iuvZ",
  "key19": "QiEJPneNF61YbMUzDCXgFYeLLawYrz4i8EBZTQA3xSNhabWwjkQFTkgUp3DbUHYxrGzkcfyKdArGoJt9JwX5Qa7",
  "key20": "2J76gKiregB79p4B27tFsmttWnZKYH7BquNYErVCCWTFXYwjRZojjG7K879eo8SErQBANHPdPWJVTybCHikuPztK",
  "key21": "2HgJYXmqNXSHwCMqDRh2XTeLztPXzEKeve4ajzE8ewGPGwixh9eMYJTpAqC9ZtfSftr5RF81jKgkL1kJr94JYt7R",
  "key22": "2FSGMvjnoVTptByrnaoErVaoonUQkW5LbFJZMJJVKGDGAWTeyTJhoQ95nWSHBaDLDt9ocVCuByEvZWyar6yHjaqN",
  "key23": "YrCmMcL2naL5ACcGuz5YBPNb62Y3ANKYhVG9jiFeZMxJnfULouBSt1taEgzVp8VQGWpzD7o7GpryRYU8z6GvFw2",
  "key24": "5yvCRz64baKCf3T7eus6UrqcHUJuL8mAXvRqXDfwByNLh7sbvG2b7MB6BEESPJm5bVoQJrWX69rfufeHM48ZhfFL",
  "key25": "5JUgNVyGXxtwpijasWUqNM9747d5kwfeMac96GMKYQZ65r8Dv2tMbiVCDHTwwYcPxH9mXkJ7WEAy8KZnJSchgK3g",
  "key26": "c7qtzg8j6V3Bg2vYUmyXnNjhWW3qfkh8AhXFe5XfggSsHYcGfTbVsjYvTrWak4WSySHxP3FwoWws7YwYAMDmw4M",
  "key27": "2uVZYUVPSvrKnxjNnXq789sxEuFDEcTpWeMDy8gUWcG7dzLACMJNVcUgfoSMETQVKWjHEjqPmLPpcUYibrmnQQAZ",
  "key28": "26jLe3AP2fujhZmkQpZiUtSGntB1HKt5rk4BNQuFpVmq28eh8qsAaYF3FU2tWPAWZ9ux3y5br4DYkCVtbospKcTK"
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
