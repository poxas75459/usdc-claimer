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
    "q7q1bCdmYD962N4GquF27qBqGApzcTuATXr637mZtyoFmB8F3FTKziwoDsMLf2UBT7y1yCdzoa3NzAY3e3Scc72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLEC8fPk7h131eGZvxjL7nb9TjC7tQ7trkeUEHvTYYPwZ9q8fJkN6C4vcWa7u618QYsc21ssS7BTvnANhFvKpac",
  "key1": "5TRGFVRhcUR8rmnnPtUq8P2U2x3rW3gFsAph7YUTGGqP5n8LFdAV1M7BwQ1w7VgU93ZPS79g86gB6qup8kkNjFTt",
  "key2": "5pMf4mZn8bpZkPoqja1ZGaA5vUG3EYLU8CLj4jFstQWQf5fFmm1d8o1GWcE4TTpYA5JjWKpEM5wzNB2rKX1MxJPE",
  "key3": "ycFQefe75pH56h3kXRKNgsaiftRiN3us1zgwb5tEePJHLTocPoJ3tHBrXcYZStqmoHQgP8Z4bbiN9eLrrE45JEj",
  "key4": "3yZ1CV14quRVsSWbaC1Y76q44juXrYmFEX6DXpGuV9yMj9hmmAXVKJK4tWnyui3r6HL8Tcy2ApbuzTbSmhncvtwk",
  "key5": "2VnkSiX5yxHPpbHzcNFP9JQwua9Hze7ZHXbHe9G3TLg41nXQFDPVLx3z8hKCLZZfHeitt4DVfpr4bFmpxbXGBSG6",
  "key6": "3GcCv4HzuXeHfc6NmdBmWLPbgtjk9Vg87fgiBnhxgrz9c9j5GFteCbZjszHKNsR4jfYC6bMaRwTyKZq48eYRC52y",
  "key7": "29Gi9HPVTk3sG7WWoFr2XJcBprTdkXBvbvfoHuWKLuZgMpiAZ5nVDwEAgJ4nPDi22aQqaXmiPxGWTojCCtAzPPoj",
  "key8": "KRcchK92HLVrvz3SxgzwnveiFDdCEb65r3VkiYYsLQbtdvABH1bGiLAuuVyEGs1nfwm4iHneZh97LWqZyDP65rf",
  "key9": "5cjfjW1p1o1jPXejdWEWBxqFbYYAkPdxYWBW3sU1wWtYPgrVp9Xd3RihhK3SFPQSuufzu4C9JSfnAuu5RNR3aZ12",
  "key10": "2Dmy7qJWdyztRrzP2MdZ8pcinSVWGQoQ8Uojpn7DFRwy5ySvgceUkUmgVqt6p8MUrUrpQZZhpkVkEDrWVqv31Pxf",
  "key11": "5AEx26r1PPLus9Zw4jy96LTWwrrGbRRECH5HsghTcu21fJU6sYHVGa2CYJj5Dn468Y2QCx6bZQX7V5ChtxCoSkBh",
  "key12": "3rEWkcsK8hj1d9CFaTQBFdJcbVjsyDQFwm1XrEcjcLefySAqRv2vWuprHGQ95STWbTVyFv3wMRk3F3vSSwRf2RUP",
  "key13": "223euDEdSxVhS4DKq8mhvzoYp6p4eY953qAF5kt9yywnGT3UibAXpcegFXXznDQo1ZA9YyvXyrrMBsGqJVx3B6es",
  "key14": "RKXtxk9Rib97291yYJ8NT3L2WY2KXQYzBzEXjB4sRH1hrbydhUmJZQCkM8KyujHNBMC8XJXhYM7GBJVp1z3WkRA",
  "key15": "4TBQdvXRgx8Ud3ZvV3ZHvSxxSHikae3qS4bjhpmi5FRcUroUYz3YVfDguKfv44132rXH92MD5NvJ8rLMrPJcaPLg",
  "key16": "4ZcmwD4VjGPJcErzygyVoBmNGoU4Mbi1FwEETSYi2FCbEgCfv1E5CFxRNDiM5yWxgr2uJ6QYQbsb3yhJaZgvecQM",
  "key17": "2JUSFpViX26n5HsxqtyQs34n45RhRRCSMGeSb3NpLnRGP2NPcfc9jJfNyXbXZXTHANUFXw1jEWt1A6mrvVVUYwAB",
  "key18": "uNtTa6HcBz3mx5mq3fp2KgWJ2Dcd6QGGiWuZzXSR6K83FXX2Zc5YLhyAe9d9hFahqNjMDW16qZn9xCaXRiVCJXK",
  "key19": "FmJN118M5cscCSmQnetsqZ3wEwZcjULEVGCRHZzmuKWcRVLu9qSGD98r5HurxFc4qBAKWrBpwNqcoHgLYNPzCbL",
  "key20": "5uDmZNjgjExSYHMCU8dUfpZiSfVpZXXD2BJM8xwpJPC2bEnQTvLwiC1wgZSgR21mHHyvg9etoEpeWrHNEMv1aSpr",
  "key21": "3FGzYVKuiNURtXfcZ7xRgDLB2vAH8D3Ssyqk3ZeRy7DsDoLd2sVQk3wc4At3yyM5isHkGkWhNK3RcaCaK7RwUWUd",
  "key22": "2NGdQ3Ey2NLatuKzUm122pPrFaRmrGjy1k1CoVWJ8jwLkSsCNnjHjb2sbpCdQRHDrQNwoNwCi2JM5CQRt2BTszLa",
  "key23": "1QmbHT28cUoA7o7DotNMvmtx93S2c1ac5kmQy4bhUKwE1LFrEw4AdxukLWPuNbMZSvYCAiQ5umvt67Le4obGrgM",
  "key24": "2cLZPEGhRDotHt8acpy9E8fAqhc73YtJmYGLskUpqbL7TsNV5mpQMZGHffHPoSFMzKENmYSMoJqdetYkZsSAv773",
  "key25": "2JZLLo6bh7wrMjK42q6fgs2pHaNrESnB1BHeUExeKsQxnKbgXxLfefyyopJhg1WMkLss1vxPoUD27AZKCarFQNVf",
  "key26": "4Dd321ND6PQ7mCBTb8aCtnuu3daHfqyokuP8p9qhtBZBwEu9WtTjqu2naVawUueJi6aRhePKQT7aKBWTg5vgydof",
  "key27": "3AkRa94n6s6M5NRqjM6y1vycrypY8A6MkE5q6FBpxqXcBAjwNVEgej7s9q1f2nReQkYnhpuSqSy8yfn4b3w1eJEJ",
  "key28": "5uEBK6yMFYnjXyqpWJxrE27rEbNQcpNNxQUXDDSyEpwjcLNydsVyn8LEgFfoug8xbQodX6fguoAv9fNsYVJkz6Re"
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
