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
    "2m795NhbFuRHWizTaSYxnBcDr3d4XX8XZLhqxuvW3SVu2h9H13DZskNWrMSs4hbNS9D1Pg7yh4XCd8kPMo946XVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VaEeH8qQ8Km1njpzX9DfDH1sQBHg69R11utxUhGQm5a6NjfTBMvcCTfuWkfWCG7RdLrGr6tN7XCFZBxowzUjmLU",
  "key1": "4iXFJwZK8epA8UWG7NPtgu42m62QBGDbs3acALjRQE3jJ9Le95ZmSKKwrzd1D5NnunnW7JzFr5kqKMyNbUpX62Nw",
  "key2": "38JeP7TCzhCvTkm9sRRWxwYkqQVpswGWXJWzs3bKBWEhb8s4dSpiT1RKLEwvxQgUt8VCCRWC94aA93A8zyYa8CCk",
  "key3": "2tiauck2qbNLpcG6CG3hccsmp5JetqYQeEbpudbV9tnftnsEpwiLZZuv9XNSL3jBoSVm1MQWTfuUKEpDT3U3gMAe",
  "key4": "22Q2AkvQguvJPs2LBgwfJD1S7GiWmfrgMtxXsVnz2pWpxWYoR1VqH7qU4ncbf3RpnLPBr84EseYCyhGNwSE1Jvdn",
  "key5": "hrpyeQyFZ2LTPsNxsyviNXaPcbMCQLwSz1zWJJtCSLTXJpQ7zw91oroF7T5KqhXiyD8KBnbgG3uUWkj8ALvC2oJ",
  "key6": "3GunddawW12a49BsmAdYQSnBaVTJrsSw2rfG4ukiG8yzJSHGr1P8WbVB5xf9pDijKkpbivWL6x2ZFdWxm1sJpp42",
  "key7": "2RCjtMktuPzT3be9JJKQGxaXTApBaU7cosJ1vqge6cwiAHHyz7MqNGtP7iJb8A5aTbwALs7PXVUt6dFQ3sKPRS12",
  "key8": "4hHt9662RP2h6ychcwbYo4g6kNqm9LtcJD6AeW73StKZ2UvV3UurvnoXb4T1sDyVwRcpSijRCJEQNj4vVep2MRpG",
  "key9": "2xhBL4wr14rv8Yu9DfWXjhbUxLQnmP71gPi2f8MfGepRkkZ9eYwHDwgWbQS49fgsubhhHR7ySrQAZefpLkMZ2tPf",
  "key10": "2q7UWfDFjwgMueGiQGHdtAqtP3U8nUWBFkU1UpeVTjG2TMddkRsiNjbb1S2tEWru2PEzZ186v42BEh433uYJ6BB5",
  "key11": "28it6nmZEYnKkcRWk6HY3RWagXDijPtA4BSz8voGcd36rCdWq8DnUGkFzcAjgktxv1ysNrpZAnBG7JyFHxTvZRLy",
  "key12": "3ks64TvmZMAF4sba6pN9HXKh9kJC8d74xyuLpJjpSDGxWK9awF1L88195sWeYxGFk79qn5Xh9oK4kdAiXMTuxWvL",
  "key13": "21GZJefXgr3eJrif3AHXyLRz8UKZ8fSoR5KcZJ1j89fN9NGs6GtgVAEsSBqfTprE42GZ2PdTKkZozyKXyfzK45UR",
  "key14": "382JYDdpRt5kmXiLvuAsDa4yY6rwCKjFqs42StGjyNTn5Vb59j5ohnUX1S8HaByqgiEpr7S48KvqsXnMoC9tmC96",
  "key15": "5o7iLqvrQhGApFBuV5g9ssp74CqSniiqooWezqAAKDzKC9eVADF7AiuuugqkaU462HzBFb1pozdxLCpnKyUrqvqs",
  "key16": "oMx2nEgy5yp5ikvrz88bTFhJB4aLX5JbRWrP3WkNJB5vBrHBrg5X6Uk2BVaVB6FmEyJ4ZEtakdPeiy6Gqh1o3XA",
  "key17": "2YGjNMj2J3AJ1JNKNYbbeDcrkXBQZiP54MhRNH3JGBT4zB4wwWTpgWnCKwZjnsCTKsTWyqDNVuuMBT5bJaNC9mMY",
  "key18": "3u4jKaLhD5cGZmKCC94mHYVEbpFFsZctfDYn4o2JbXFcDFSuM9NyUkidYYYXD3sW4YUSwBM1dKZguEmYvonAEF4c",
  "key19": "4mCR7CAKMqqYG6HseeEsNfHBJBx6dSbqng2tPjW9VNb23FUTL4GduXP9cVKfotN8jcXNxPH23Lpjmv6KDBABuxn8",
  "key20": "24huCtcn1ZAopwt9C5HNPvrfCZ7Fme98q2WJPCos5A6FmmTgnzqVRbFkn2EcwcW9DnK9jyXmYdYE98H54RWwpomX",
  "key21": "29Lh85ewMdGkQ8bfega36thxVXDeFvxo8FEFMtbSEud5wm2PhR3m4DUDKUR2Cu6AZtjiKX93vJhvf17BNmXZZtEb",
  "key22": "8X2Jk6onFe7kHqY7N83QSLijwCdW2gxMGyx1JDx95B2TcFhsxeqHcZrHLgf9nZCQi2hYz9twkuhnQd7ZZ2xT6ZV",
  "key23": "2wX35uB2gQTwBbYhaeBYW7LgBjrVSsKdfPaqL6tKq7cDvEJ7LZUVSBkZiHYeoAgYEw1CnYQwkVvLyVVXqxkjdo2u",
  "key24": "3cn8d3x1v89wpq5YvefAFBJotm9Gqi8mnKtfXAAJ3EYDThN532d3ExEebaZ64hArzcmxtSyUfATVK1QxGfwLCZ3L",
  "key25": "64cMkpgECRFyAzBXk8a372vduFdbWmJKCucv5zXvdhMKEiMD8gbyhGAVHiYgHcTc2emTNh7F4qvqqgD9hfNk7bwW",
  "key26": "2cmyrwcE7pT8QqZe4jQFrZF7Ns6Fxn1diBm42AUoPkp7BCCPj3aMxENUChhTiXcdKXMBUiALbGuxEa9M7zcyjahU",
  "key27": "5bgEwqhbcNNxzSUgYANmeJTShYajCD79R34ApaTUANXRD94nkh5PxPWBPvXcvfdgSoCyaXho5zv1pm9cBo6e4RUq",
  "key28": "3VzX2EreDjjQetDwTDYLmG13Jdh7BZsT9akSUPfTx6GW3FzMyPnfUcdL25AgCNmLxGLZVFBKLGN7fR8X9KbkZk33",
  "key29": "25yTSyiAwTccpCXM8X6FwZ18CSGBPEYGymVwenrgpnZPLgpEM8cuKpZr8qamJGGDLhSGb2GfefHymPAiVPZytNTK",
  "key30": "3tv1xBh9qUTKhezzsYD8oe3rKVa26Ug7KVQWCwoRJAF3WvwMo3TCNyzDwBHvGaKgNLyfzzbxfd4TPBy2b4erkZSD",
  "key31": "2frKZJnELRWxCywuawmYdc38hTUvwQb4KGfTyjT32ArZvV7jbaifUECcQu7UKX9DSWN6WVLaSUV6Gk1Lp2Kjqvgc",
  "key32": "3tQXN8gzxKotBw3oxyeKXwD77oYLP8dgpD2BqJmoMvjXesw1vroXeTdDgQvrZ177ERdnfyiBjFi996B1FDGtHQxY",
  "key33": "4Vqu6J3mrmdeu6bLsejAwNLTnM2TsPirpTX549FiA7kjJH6mMcrXuBf8rfs2rVqkkwGaCoNHMTBirmS9PRMjipXg",
  "key34": "4brxQxjehTzPmpTGrviXDgMt45vXmMXEpNwYXomD6VHnSKq1TcLiCUkW2XSfHDrBK8qCCXwJcrpV6AUVePvcsPW5",
  "key35": "35V35reeU68XbYP7ewcEY741qssPt2ve3QK8Czxq6dLAfM8d3rvQemraiNTj2PAkss3Q71dMNR4Fu7aXg6XFcyAV"
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
