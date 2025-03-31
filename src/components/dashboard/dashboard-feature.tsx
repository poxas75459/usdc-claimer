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
    "55tNkjGasnfhWgwGuXCvNrN8yN81y3NQpbXJ7stBnhaoZwh266qwchnApRFMNCWygm1bn9L9wgvQm4SF4xbutLQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X53GV2SSDxFoHGzFkSU2f887GeqjfBLoKBwTBY2ngbs8EJ9PiFLbPCqMAMkmnNK8TeBpa4yTUGWjj2mNHyX4MH6",
  "key1": "7bhxkGfSarR8atKV3T5XFwKZHmYweG3G7cqoR3g3J8tw4X4t6yFDBNvPr8R17wfoV2GaohgJjnQRXvgEeeysfuq",
  "key2": "jN7WXRmqWtzXtqB7xw2s8T91z7RdSNGGFEBTFHDkWcRJ6ZWcBDxinuXG66cwuAL6GHzDsWhB9ELUHr4E4aLhk1Y",
  "key3": "3e78FbwAt4AMWBhRbcXT9Y4UESnf2KGVdSjDQPCNb4eh8RvwCFnZReyCtRzQHUMLRkMY2cVuxChnpyV6Btiwzpex",
  "key4": "3TkidFDGRtWPMRCPhUnM7ePTvYXzCuXnGfkVZJzZydfs4UEF1butLxkCgafesa681ci9rQTgCdBfh31ieGHTh54g",
  "key5": "qxq9dLx27frMW6Wmuqb7LsrAyNpMa1xioumt4qvy3fqkgz8GWSdeKtN8P3kQXFgjuaw2PJKrDv5NMZZfwjpAEsL",
  "key6": "3myHLaTERaFfhD6p2U4ETwHNRfCFdEosWeNyuhdH9NmsbPWu5Ew8FE2Stc3xrAsn1hqQvivsPJ9kwUmbUk8giitm",
  "key7": "5B2dvreW6vDRhrykGrVHHvpShXX1WeLrzz8J51QJ8ZtsbLEN8Fp3ashRzvAV7LzdHFJLBDpm4bRKpxQkeMrfB9AV",
  "key8": "23VjLR3bKoUpzDTR4KP5EoWnvfYTifqD4nxxCUtM4Phse45BBf1ALqRatz5kLxWFzmApK9qhVR9CLBPWAwjTHQgM",
  "key9": "4rPDeHZFBkNsJNjirGo89ovAjsAzUq1NzKxaohur8KvPJL7MVabZir8HcW2fayVJ5RXMPNaus5WKbaJyCFafqDjA",
  "key10": "4jnDV33zFrgShNkcUWwkGekWEMtrniNN3jkJzMCad8rcgvydR16o5mdy8jbnUwH5Uj3Uv1j8qJkhTXyc3PwBVm6b",
  "key11": "238NufwxZk6MzjNJfgw8dwr4KjPfiAUogtJXa32nxBRE6duDGC33Sa3syNLNL6ZadJjm6fNwRKFn8dgDUR537w34",
  "key12": "4uYAYTy4CMgnyfXVw2XJzaKhqmJGfphm8yXp9seBCQP9dSgw3KzpJeYbBKcejctKpXU8iY7oB6RsbFKxCycbYTS8",
  "key13": "5xjersoFjjyPcxwVjhF1kbfSJqc5LTbzsnf4j7gvszLF3DLfCHTkDenpGt9THb4N4K1i3bEEBfEwzQfahrXVnftB",
  "key14": "3ZYyjKe2sLBnsgo1nttSQmbuwTWyojvBmM4fTYM7TRJN9bTMibenwoxwY6nzupQg1H4VC9Ui6r7E7yiPVLVavEXM",
  "key15": "5WQsofsdzQGrv1fCLPTxdBTjgpRVAdGiQcHBks3nRpSguZKtvDXMTjTUZLZP1dFqvWXuCPtgKzUuapDK8Qg52659",
  "key16": "2G3b6Vox1H23514T5c33fqLe2VF2MkEAUdnzceyrdKmFv5VqAzupJFJ9DF7BUvfiyR5nt2ZNeAeG656BhkwkxYfJ",
  "key17": "4mqM3CMHqePUvLa8ZhTfTEZ3xShDT7ZVFtSgryhoanBkJUw7PeVsQNxXRPR4UvCzykf8Nxae7FiChBqSP4upAUeg",
  "key18": "5p1QAUbp9WyZ5itVVte4tMGzeeqJTSSTxhiAyCvCV4mVZ31NKpKksnYmEhYqsyB7S7GH8x4empsB5cF9v7pPjKgr",
  "key19": "QUVx85kC7NRto3vcRXL9iQaEF1oCX4sH6JSDVycN3cPMBcyiXSBKMvr1K1rcAyt2xCmGNFqLHMcDST1eBooSZQT",
  "key20": "zgBdkxa1Qz9C1zk7SD6jN5UoKDihAY2k3SX1D8HrJBpzcz4H6jjLdrdNoJCQEU35jwq6N8LpR7tW4YMhSVF85AW",
  "key21": "24EUS3PxerQmo1apASpmkLYD9ztZTMGJUodtuSnQT9giUZqrQxz75dhtmXHDgxTzNL4PFpB12hm1Pr8Nbcs39KFP",
  "key22": "3aUB2cFjWLSfysadSgFmvsrnhQg7rXJjbzMgdAXRt7HVjCM5WYsiwiJzJ757irFoxqkv6kDzkF5YxnnjuvwvsNgQ",
  "key23": "4c3CbTC1yy7ESbXR2C5UUdi691uXMp9Dz5Kcr9LHNZ9nia83cyWQou5UWHn3FWPtUEtpAVCyGULNeSXYCt76Jyet",
  "key24": "5wtjFg2naUyahHs77rts47wmJGMxuZELnAn8pA6EnzbWhoao7TC7mZydsa2YjW2c5REjzUUnZDaLAtgsFTYFhVxs",
  "key25": "3MsLB18D2yp8KfvAkyRc3Zh26BKaQimr6JpPx5UsZ64v352UNgtQ2F8bBvuqWn4AEjvy7Y9vfTcnQs5GuDq4Kafy",
  "key26": "4BEE8EMhHGxxF6APQLswFJN1vHSefUsPkoU7RCUSztmtP6JpSqjynsBcv548i7yCZXUGynNKgzpdFdBNAddRQWfK",
  "key27": "4XEwSjnj3XzbuJX9rGidCVYvhtC7bgTwEChRUwvpDN1XusEb2bH7ahou6RME7HfRPEsXwxex3UwYbpT5NKbPs6cH"
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
