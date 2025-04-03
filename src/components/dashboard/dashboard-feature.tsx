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
    "t3bDNk2GiWJjdVK3D4nq8rstck3eC6DiE15yuPjpiraVQf5RMsuY8ynkK7tS1VFRrMeSxzmi8SX3XSEi4b9R7Mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "toZA3od7UMevcsVESU4xmuiAco5oLRGHe59uPfRqz7yteoFSMAozXGBD57FV2eqXpEiWMzrMD4Tj4CpgABHcFET",
  "key1": "3b75wgwWw8HZtMb9mb96ryXydziNKW6GKMJ37po51HKX4xzVySPcDtpSAy4PEi4jbu6cYAZyJmJyQsuBZri7kVC8",
  "key2": "3VQ42QQBryKqiD6FbUmn8yxbKaWwsgNutxb1y9rGfLRx7VR3689UVWHYdGd14naRFoeXeEDkJSRqRJRg9nPByJri",
  "key3": "3inFXngUBcZcZnyAuoFxTWbqq3Fom2vbVUFfn9tWnZcGJJqtG5wGKFE3gQEYKSCmJKggGKZNyMfcDXWBQdirXAVh",
  "key4": "2UroQQXnVXRU1ZmA5XDCaHifDqAqeSwJMyemooymRSkEnjXJMLuSbN8mWtKMNayp535SMyz892Mdt6BAymNxaEBS",
  "key5": "3QYJBquQkcHP3Yr7XSvQPcWcbqHNq6893U1aexgye1Zwd485MTKBEBvbKiZcLqeGTehZhVAUgchR8kKUmk24Ghcv",
  "key6": "3eHj6mKnRdR7J1szUUas4bn27s9683XLngtg4tRaqcEeSAbZhp2AWEn5Zs1vsmdncktebQsaf1rdoyzFPnuJd14C",
  "key7": "318EcNHARhH2qcjzE7sNiVuudVqcQVCnx2TRBBhY3VK6uSX7xvTiE2b6ghoZx7vfWvVeZVKhf16DCDgagtHwTFoY",
  "key8": "4BDXZjW7AxxXQCms7TV6tEVLjkE9iDmAKz9t5uQcKqozvsrJZMbCpiBAeRB3976QE6PvC4iRzYys8i55PkdYtL6S",
  "key9": "sdz9iR3L1osGhAnHwKPuErZ4npdeYfXqMrsMugc4UsHzLAyMtaQFCxhAF82zRuKEswGpLv4TVR8GBja7VskzMBk",
  "key10": "2XAAHNXGXb6bEN9X8kmkVVd1kyHz9DPbFyzpRAWNMXqXPsu8exZSa32YekoWXxgDENAwA8TvAJkxuUCFothN5Rjz",
  "key11": "AK7FBvS24RhhYi6wyY9uiwUwujZvj58LHuMsGhDknrnxXHt5CymYJp3taqZPtkF9NPc1reYJakcKR95eNfQwCmW",
  "key12": "2MyCyYpsoR64q9NcMq7Jo5JTXGPizsoZZfqaPc3QZnBubiYKmXywB6LG5v7ogmB7ahMzzUKJ22rYQ5SQfsW3oeSf",
  "key13": "3jP59dxpF9YTiDNVXqi15W667e2AXdYS3q6VkVvRDEHpTqjCHfBtaNio4QhQeDhApifkVMtPtxpSq3thgfneyDWD",
  "key14": "dXkcXe6s1jhePyJTRYmuxkhFuLxKZaecp6GXTkGtchNup3NvDDbxAhX5mWewysPhbsHcf7jU9ZEH4XPfnoisXij",
  "key15": "3BQcZVrCGgetJ2Mt4mhxY8hoFMwC5sft2wzvU4PrRFEpsTpdBJzTv2FzoGWU7XJxhksFb8y71F9edW1S8MDhSJS",
  "key16": "5H1DpqAU7bAMLSRrg8d8MheGpw3298hSdfGsQm8uE3jPLuKzfnirWe6WuokRjSmHcJ8eywGZZdfs6vDBk9yN99Dm",
  "key17": "3GzVAQP3jEXLwjvrC35iBd5KYpnPV3Mfi8X9YM7kjtgXbncEJdEWPHub2EX1ZAt3oKxVC5pUnxPvnG13F7B8qLdg",
  "key18": "5vSWz9yRGx6Gv3HChpzy2ptXTkhVx5Muc5NRHJcmXSnWSt3txdr1kd1z1oWcEQzH9FBEsSYqzbroBQkCAxhC5pgp",
  "key19": "3KijUZyqWuh4anohAStArR3GftLJKZ78swQdM2ABcNxajaXWczvkPdtbVh93TnagyCDMNQzvZrfZgvwFrLSj6VhS",
  "key20": "7xV1tfBioXCM5sacnnvs7sFwpiW3LQnkyyVwdVdpdqBjQ8ajku32QuVxk1p3cxX9XKwS7L8iZzu2ngLHbHa4q4y",
  "key21": "4QqQtf4LGYJuAdhPqUko6L76hcLLycXNovrDwsUatvSiizkQmtGgMUjdxEmt6582m4eqRnSNWZJ7DRHn26TYXZim",
  "key22": "XfhDwGwuKPKK4PN8k7bXhFp763LKt3KtoAV1dkv29xD6FFtQA8BxNY4MUnqnEbe4L6c4cQmAa47dYtWtWaHzhVm",
  "key23": "46SY71Ah7TRh3mS1VFdJ7ZphnCu1ZUqBWT329pnT5zYjZ4yF6FLMUHSgUAFeitHQFAq7orF313NXxXjat2WRLnuT",
  "key24": "fvMJmrHDAKJMdMWSESv75QQdYksJ51HJTTYqowybpSKosCNETwtbYTRn1jeJaHpXVE8CaTRey4vYgjLi5QE9J9U",
  "key25": "3CNaNH13CavysLU1w6TsyLjRjtaDirKpohYS1ru6qdM2sCbfz51PMzQBzYEZhGSDhtcEmooRo7syqniPpR6Ao5GA",
  "key26": "6641wW5dZSG2ppMKdAb8HzJQYY17Y3iXJtAEg9RZLQmw8N1xadasZMAkgLuvSbWfgeF2wpKxuY314e5BfjnvbW2o",
  "key27": "4HgVMHDMCVZRkbm4CzbsCt2aJZRdfhEvq8ELbJXGDCRsnmeQvuTw5Pfuz7z5Pc2iFQQ2TzmCzyU78dj3DzoB617R",
  "key28": "eyZpLRvJuWUUGnwaSyFCQkKmtX8NR34e4FCQXhgV5Y4uL34ovQQgqQtSqoYPDHMnuNGtwxvrNdNpk9XmFm98Gof",
  "key29": "3foo6S1gZbtmpyqEQQ1LuvQvcqsfQm4HsZYoFSFA3VTRHDj9FQsxLwBMSZxAE1ft4ehBUDZnbtNvC9YQpfec8GDt",
  "key30": "31TXLdqiSvjoFDH8tkryPQf58gnpBRibuhv6wM458ev6zZ7hfgJwjhPpu9k7CNom9Yv7hEDAjXVF6RzKowVVd2u6"
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
