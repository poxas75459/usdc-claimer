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
    "2Lzyi7n6zgkN7n3qFameh4hNF2rSwfNFmwfBLBB82MeJFP3opFS6FyjbLkpWXu65paeF91SJrheX88nLzbNmmZ3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vJgtsiqJvXMaDTmmhywNWvHAm8vjipYqtPZy1gJgRvVBzJmbH9j7L7kcBFihbwSUSPpYhwniaBRQPY2F69YjYdB",
  "key1": "128iQbh6K7XiBZaFJKEVqVWxHJnfCeXJLsjfaU1LvUB1PCs7uwiLwHy8nib477ysHpiQzic7T6HsUnojXr9Jf6Vb",
  "key2": "4V9U7P5imYV6wpWVm3sgHvZKCWR8nG8FCXp5xMceBn1kmVyMm7bEBqBaG6iNmxb9C1RbYzYJ5RoijzjTefXzWKx6",
  "key3": "2BrcYqd66fpYsRrZzTzoBW6eLSNTsvg1TQDsPJNTk9JvdC6ZtkSEvWjDLx5GAgJWEXxCBQ64HsMtpiNct6u4K7z3",
  "key4": "5g948XtoAXi5ees1HWvDtkaoYAApBKSba5ufRVS1sziDXNmPoFswPnq2LFDVS7CxhprUrqs7QS5KhTgxLJrY6nKu",
  "key5": "4meAkAFUjkJWDvMLp7SEJ3SKJgdSNHA5DpFRqKGyGxcKzY5QzqaC8PFKau12zs2zYp7Mi8w3WK4U3CdKKKdSN95G",
  "key6": "2pe1kEupdrRNXM5kB8NNDVqL9ZJTsd9PS14my2k8DL4qyTRyS8cQjkRTNCuHPzZSs3RwVSKJDR58tH8ZEZDz42wa",
  "key7": "5jDWmWv4REsmRNsh19oaU8d6ZY8ch38ppKeD9Ar4URno77TKcLNRKvdLoWY6Y9owdb8nVXPSDtDDK8gJdfJUC46r",
  "key8": "26MK8f18EfEXqUHP1Zgs3hV4ThCGu6pbnfNTFkSYTE5LrsvrYQUFwytSg9NjKDzJrePRV2MUYh8n38wQ3mCG9GNM",
  "key9": "5SuAxP2uKi6hj5ZBDTaKWKa6Km7gNVsApaH3QKXTjzC4LdqFnKUUiVW3zpQgt8A4Q2ADTKCnV6ADbpryc495AMDU",
  "key10": "rFQKsL1ZTdGLXxibiYiGwtRjpjzKDrMyrPbhCJ3oAsxAeq5xdmjZxUwYDaZtXLdmmuWCqQh8hTAtYNqTNHv7Syq",
  "key11": "23LX8hhwWUzsxmoSvccNjEE75Rkd2kFsx6piwtKf8FCnwTVv2k5u4H6ut2yb6zmyHsckGFtSpNbim7A8wL4YBKcp",
  "key12": "3w8qhEKz7sp6ChKFBn9iK9fnpRgQBRLGW9RSyLdyaR2idZCFTYhKto9eFbw7mUQJEpTtxLxRRs7W1vPugGeKmr3q",
  "key13": "3Uz2NyNNt6nf4aZXwspbg1pVLMaxbzf3NEbuupzxeb1Sai5HH4kuqz9DdVXVwcgX5tcip3AuKji45xfeVXfhxMCm",
  "key14": "HLHLC6KVZiPyBTChv3Bvnxd3FLCSnhUbceBgp95KqK3G3EfmhaAuog5jFqreLnSq2PiJC98ZUJXRfVZyFqZeX23",
  "key15": "2jPPRA9ucpbWcTAZFk5374gDdYDhisxTyMi6Yn5xz93KevH4Ax7ReQ3CuFMypHaktHd4FMNUdivkiyvPy5BYFUvg",
  "key16": "5S3AznCKLXN4o7x23nUrRCcFrKYab3FtEf7Pi33B2WQht8tV8XpcxGxwQxVyeJc81rswGvCMEPCLSW7Y6wmPZWUY",
  "key17": "4fS9cEWnza6vA6Jekb4RwEf5zMngU8YuytP5G9QhStzCbAWWvxRoyBprd97wqUuYQ8m2xPW2pCXp8VNEKEvnwQCD",
  "key18": "2jPKrTjQckSHybdUFhQ8SpYhSrERyHvVHyQsTS47DkAxHi3xT7oo7WMik5wTiU4ycJrVUV67Y7taGvJW5xjQRjre",
  "key19": "KhPp5XwEHfSsDk6XaZqBhg7gRsDGhEcaN9AWUdgh2G7gRoPPJAPSB4ExUoi4iTvqnB27a61Vwgfhck3WUxoeQnL",
  "key20": "3wboWa7Y2GFpJjDbe4UAwK8caZA3otCRrrSaXXH4yqF4KLjAncFuviTMYG5fEmHst8q7gUUTnsPGg823vhmm4CZM",
  "key21": "7TQXwXWJvmxta389D2ZSRokYUv4jzU55TLCCj3Wko6i1Re883f5dRvDBqnwf7irB6Lv2psdUsJrvQPEZzqky25G",
  "key22": "2ecCiVJHTWmqbeg6NdvKpFBCvh9NuXSxBCnXwWXbwDadFQg5ptP9pv4g24Qg6y7JoPEAMuQgZTax8vKJuDYpFmVG",
  "key23": "3EQQEBaPbU6tFxuAzNqw1JPxEtBytJ3H5x3mXvPVTfk54uNQUNM5SGaFmL5npPrKrcM6eoxvkk8LyYa7wBTCLaPj",
  "key24": "4GQKRXewEst3QX1whjiALec7iCAJsDfjugqrihDqckNLHWCduZr5Rg7CwnT7YgJe9oeEYoJ7a1MMcuZAj6AAJt11",
  "key25": "55qNNZrupogWpFD91Y3ZXy3GWJZt6bpG5c8sJ3pvvNRK71qq4N6BQZK4JRLDWR1DeTAaZtyr9eid5Pa83841dQRw",
  "key26": "24pZ4j7JHTYbxuH6CqiM72retwx6ACVEcqw6JTCGpBomDhtjyTSqkGoy5D2YF12uPZbf3H4srppVixw4jQgD8pLH",
  "key27": "4GPXvnrgiivYKqWM8gF6VYxfLfKj2KwNspoNVjuSFadH7M5vwHJR7MudBv3Zr7Ury9jwpwDiDFD4J7ngAna1ZzTe",
  "key28": "bcqzAWbBPS9v3TQv8w2yXK1UKBVDcp7hKxRmzkyTiBky79hM81ZnK4qTrcSEfi2U9X4w8YdCkGaBKRFADaWKooj",
  "key29": "dwfAPvrmxbjBvendhQbeEMPDHpaq8voxEAWuu5k6gfbH8ShvGLT2WvvEZNYbdRy9Mduar6xJWZtyToUZS18txqP",
  "key30": "4t7UhRRdAKBN3qLVemWTJnWDrUyittqjxeNFjPQwGviV3Z2sEnPY5PFue54MTwBYZQhaWagkUeaNbL9wnrjz9Y6R",
  "key31": "23cgGGfmL46wAcCZEYZmLT3iq5NbvkzStEQt3gdR29DhSh1MdRa4FtYrXv8ou9GRQa1pGhh9bYyt27VA6jBj8f7t",
  "key32": "3fuDUig9DE5o4jbBEK1DyfSY3vLUbGGDR82Z2GeaNWmBfZsPbPP5X5izVCJ3ehwucDaPibwwjS7VhQDPk1DT6wfs",
  "key33": "zWFqA3Sh9UWNZVykuh4ydqtamWyfsyGZSZ8T98v9F9wDqGXS5rDHRBmJWDkp7tzJmTL1etzpVazX8E5LRosyUm3",
  "key34": "4toXdCWJE8ihfqRBQsJssPgRvmeKrxP1YHR4bjbWK3yAxgVnPeGbUnL3AP8zKBEo1NuFAChPCgffERMjUPHEc9wH",
  "key35": "5zMGG9x7yrQTCHzCNLGy2u8bYTDZa2dktnty95658c9DYW1xJiCW3UeUHNUT3f7G5gbJucX3XujFh61Wkzpin5e",
  "key36": "3CbaSmAmNcRtxc4HY58JFW9dbqkhDeiog7j2kpc8Yf1CjUvc5C8WAgFWR3EjHkEvT7WtG6pz4YDq4T5qX1H2xMG9",
  "key37": "3ckccy62j3vA7WezsuFK8VqfUS9w4MpNDwHDDmJfPyyiyji7gWsBJjXPbvJGM5XR9NJoo6VUmzqWBSt6cDw52UMm",
  "key38": "3LftE3FWzqrci4HGKk2jCd6j9QmtSpkWM7EsnF5CE9mW3KJe8RLfu7skiTZ77yxAKhw25ahA7CmbVcCMpQqM9m7H",
  "key39": "5CqKhA3foSVJ7EKqk9xC62uYeqeem9QnzTpR2EK6C4vvhsits14VUyevQNQka6warYJgx6vXKzswybJh2YXnZ8ZN",
  "key40": "A5Y7MPnhhakikVqRSD3vanuaYJ8QapF6NFybwBLYZw63W5XMmWcjkoMvc6hGQ4PdYEkFoYJ2rEAubyuH5GT3rEC",
  "key41": "kSy5ykaSsu83XBqQ4vQuyUvcTrG22WuqbJAFxhvo7W6T6UvkETA2pg9eXK8oA5XKtVL7P2CfafdvdyT6nCGXive",
  "key42": "3aG7jes9NNfhJEwEFTXiCFeVEGfB7nLNCkK8Bw5QR2o23wDP9eH58bK8qovV2crEJYV9X6GnPMv1k2LBofgKPKja",
  "key43": "2muetdb5EkbtrZGuvfBsFHhPdpD5ByJ6ScbXghfkYRUP4KvzvKormQ3hj6Ln3ZTstYz4AToFou2Kdh5CVxnJDr9j",
  "key44": "4YQ22mmVtXMFC55PvwPkLFNmzLhQnNSat1YCsU1k6GDMHRW4eu8HCn9E6PcSTkh2fm14ABrVpbbWSG9ptn7F2C6d"
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
