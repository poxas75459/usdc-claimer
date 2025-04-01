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
    "5BidkrYUyxg78FLvH6VunRtMDTxXYT5FaiYskNtRjs8vt5xQBp7Vk3XrzrWHmx5Yf54ip8jibKBeNXpPue3XK1Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BSyCYm6ZSD4ckVvM5DgLWSPtXQPGcpqsTyfX6hQY6RGGKgKYBKYgjLY2e9DBYf9Tu6qcUHNcxp1kp9t6Y3dDUw",
  "key1": "FtThD5EHVhxUmw8pAzCDMVmdbVjjohp3Pk7NTtBaf7BCUDBEMZ6SzWrJEdLkeCVZPttASe14zCJq7UPGjawdxzK",
  "key2": "66vo9udRg7AfvfZsDvpgZnJGUFWFndjnnHZcnMjLnzZdhg4CwrpMbopTbwxfMjrEKM7Jf1rVRwuU2MWYbbRfuByN",
  "key3": "53yABDrrkDZpG9rFAZcug7r8snDkZnfavSodCnUqgkwnYJzv1scWtcGW9KaN1nVQtfZrt8uqTGregXAhgohGG4nQ",
  "key4": "3tuiXdE3vaAAVkgFkMbefAd7GvkXgr7X33o9389e71qT2jEZwWy8iYnSn2UgpHLcrRQwEJHUamyMQ4xBgJZVA7KD",
  "key5": "4JRrfgEjvqumLGZrhuBbRhfeJJk35Qk2Af6KfzPsWujeFmB15BMjutYN9VUt9hd15gPD1T1R8qZHoiKDmYkjTx7P",
  "key6": "3dLSe73fJRPc7ZJxwXPzLMhdZJ3qDxZzZkfBa1C3iK29wHUUrCGMUX4eR9BgGdTgH4HkhvLJXS3PhGyzbwcAfAg8",
  "key7": "yxjLZECnJJw2KB9wc7efnj3moadz6TAMT4bLLDRtCPCSP3pY1SH7HbycdYGjjz6sq57FNiinGXeC75E5vhCZtJd",
  "key8": "3aEPu26uFdubHPY4A4PXYqi8NanpFfsTz42HRzwUEdUEME9HPe9yuHh7LCgS1anrGdJvQrKwYSWAsBomZoEChq88",
  "key9": "5yEAut2wWTX9GwXxP5TTn9rfpf7c3itv1sDuCJBEjJ7ffqU1fjSwYrsf6oGQGJhFRAMgTGUVJY1aPAKGysAuraXz",
  "key10": "3hKb3WR3L5t6MbnMhGz6EBm7uf3pycfZm4wGHR5RDWKwmNigSsRUPvvmohQNT1T1XFT41EnRSNMi5tkHvJQiAfMR",
  "key11": "32ZBXNtHYecKRuus97HK5998h7JAxKBMQy84EKGeU4pD4HSK76RY6fTVy6pUusSZHfKQ8qtJbdyxwEBUeDworVDK",
  "key12": "2YzruhQKAGSafHwqPoLNngfeeZTPBoJwXTFu4knY9bnFa2SdWvw16ZgqFa2axzwBcjC3nTLghEfoSbEA6QvEZAJH",
  "key13": "JnQX1bvUsxgpQ2LRQsHXFfyzRxEN5aQr2AQc7C6nDyAx8kpzWoKBCbjUYCQGR1uXPTPgRaTFwugCroxhyQfBktm",
  "key14": "2qSJmW1UGZrBUpV4GE5y4wSxY6zc81DcMkENdKoHeaRdp8rVg5cdmvxZ7koTDCeHTRrG8J11JyuFGC1Zo2oNKbG8",
  "key15": "4c9unHjKsWBdZ1VxANCV56jECZCNLhUHNUn5L4TBXWMMGmCYm2Hi6A6YnDiEjHUXEc7kyRa1eTQjVjCz2T1y8RSu",
  "key16": "3uSsiGn5yBBDCZmJWt1S84rzYQdjuZRT4EDL2aEWFXiEh2ASS53Mxx1BmhwhzbKyHfwkoyR63ThT1rkSTCtvqdWF",
  "key17": "35zJrnHDCGDAPLxdeSeRfiCpaCENcWMVa9tsDEatfUS9ohWEvnoLWwrLmGtKzYqVv2mzoAWEces6ZKvMn5AqByeW",
  "key18": "57H422PPgtHoVKAwuKT6S6YNWrBtrMLM9c3ym9Cq7kcG6GvHtKnzmDX6j2Vs42MnX3VarabPYmt5j2Wi24KSoYR",
  "key19": "58fCuYjqskrb4F8zH7b86tsbUB2BjGiYBFbPJVaoHMk1nFe7crupSSXKzEd8c8LH5JGGazkWECRVVyefj3cGNKSf",
  "key20": "3LYN1VPoncm5bgM7QGfpqSBdiNz884Hg2yt2bmG16osWCi5yP6fyCS7Du345msHTPkU7Jdha39x5iybB6PTd4yNM",
  "key21": "3yM4ZkjXzDdY5baTqcpVaBJwxBeaF9nLVqsNUkMcJAV38a4GLK84sJs5Z4dJJ2UyUHHPwufwAXMN8PLKjiG8ZSZp",
  "key22": "xStiUsoT5epJKVNhmGUttiB9FZ5N9ppz2SyVR73VrdUPAPbTRpvZmhVx5jta8WEqfFVCt7yHW5qDGZtbpNrX1Le",
  "key23": "5XtdAohxSsgH4hu9zgge6rriwrhXMrXKA24oUECDhbUFAHbNGYe7vjwBYoXt5xT5y4VxUrPLsin8EunAZGbCweLn",
  "key24": "Ch6uxaCmHmYBLZKzMbitcEAnieD3TY5Dk875rD5m5UAMFJWf2YU4PPPkFNS8kVBEp5MoFsseg4wMio9hJWaXEps",
  "key25": "4tAPjevJ6cCkGbGocUkvKhk19L4pRaazD3oGf3snjYBRZ4gz28SAZtc9jKiJuSV5eRoCsAYdaMtbAsA2cecQrf1Z",
  "key26": "BVeZy87Um3LbMfXSxbuqsbVgCRN6yR4Es3kysDTiYfbfcSiJNN9RLtNuQ1gjTsCtVGU3tpugvZspKQhX7up2Khh",
  "key27": "n5H1bdqcw9XLekuo2pLKEEJGt4nnfDQGi4X2kSizqnpqhENrjDDAG28YbVTdDbiiVtqYkY9yyP7RocLueRpvRzM",
  "key28": "iXCUYVJSfmigeFYZSCzPUWL42Kkx2ZyX7dYzWpQjnw3NP7NNToX4jizNWFpm4beHUVAx4VLwakYpL48JgLw1eKM",
  "key29": "5UqduRUVdybGND2Bxku9vvGVC4Qk3tyh37kBrqHDqUDvBuMiNeACxqeJGMkjWfpiTwTgEtirQgjzbzvmWEiSMrmL",
  "key30": "5w13efJeQTgdaDmY7rphXKPHxF1DfcuqRHCLvcf38rYG5JVcCDaD8xUBc5QPdD84zUBxuN6deQuJJYDUyCyA41nw"
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
