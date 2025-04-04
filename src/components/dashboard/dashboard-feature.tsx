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
    "5Yv9aQaDxgN3onRaEVDGJ7uCudgJzXndWFSQMD25WHNmKA4KmD7t3ZimPKnHwsR279BCsZDHAfYq4JZE1ZN4NUuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjoBSKdbo7BJZcxhPUmmR6A8Q23fXhd8Vx6Lp3F4h2Xwf1etYCJTj2z7Xscuaucspu4YfGjU3gSLqV3yi7eWoGo",
  "key1": "Wyh8Ke6hvtqrFZ3rtQXKb6hEX6hanaXx9nX52Gw7aapUC8626tY9mXfocmdz461RS3b3MbzSvpjuGvqqb4tzDUg",
  "key2": "3hSBc46HNAzQoF2SEZXPy3F2UH85LikMzvHhYP87rRVBMg4v6EfAMRqdpeLG8s3F1j3HCZu4NwBJTvG8DoUSVrj8",
  "key3": "4xeBMjKyoDLd7tiVR2WXCUqhgWpCYscQzB32vwGK7D95px9sBt6NS4RSAYjRu6qQFdfGr2pTfgCzms7ofLwKkbBK",
  "key4": "2NnYgaP57B6bW9SL1GjfvfQKx4a6xov6B25cfdibWM3vsuz673WkGtJBVjszHgoXgvJsfneGKX26UyH6my1mpaFu",
  "key5": "5NTtkDiqhLBg8KzJxfVk59R1BHZCzqrP9VumhzQwb5j2bnDbu9jCqUdeqrJqd8xFCAza6MUDEY7sQjr5PH3tpCEt",
  "key6": "61PYMzqN3jnRgLqwjhJqGSFnyFkRKXg3ySnFtnbKKXRaRKiY9yEKJS631MDggDmndCXYMxCxHSa2g1KXa9fB6TQy",
  "key7": "55cF2v9CS8xKfAT5agyCQE3G5x8LgeEeheLcK7jT41TFyGXkSC5rJzUhSWqcQ4dNL3p78NkRorj6bQSCkvib2bEi",
  "key8": "QUYTS4W4GNrGpfHoBkgTcFPkHBPKmohWLbG1t59aC368uvfCDhLwSR1XCiKrXcJLKPsxdwdaJJRhgE3giVVCapr",
  "key9": "Jn6QXBXZM3v5haiWzUCmftLbmqUaKfTLmfKECKbE8A9M3PRAcPDiErkLcKfkuK44zJdayQ4Erb2RhcSN1AjXhtB",
  "key10": "Q2hFWUyAZPiNinAE8WtmkGD1RanfoPtXrXgWWtyAXg1b9cPTRV6VrvPhbcQpV7bvXojWVqbTu6gy5UVfEZLjT15",
  "key11": "2WyTy78mpius4DrNYtcgS8ZKLSXhfsALQk2u1prcV7BsbfPk2TVMRJ2HvC2pu3HExtp7FE7LbUeG4sWHhHTQ5KKE",
  "key12": "3QeaCxtxeqNhSytfbEUmqFoXfpLF39y6KF6cSXWjsQU5hJiJZkxXvuB2DBQ4vu4tJu531rhFGbdstWn7wKMnJuCd",
  "key13": "T7reFLt9ZmShDndkgvGGi2Zeo338oQfcybG3vQRrDavvb5MszvZaJPFaEN1ne8jxD2nUDB7t1dD69rdBVjz1oQp",
  "key14": "4j4dHdFXiiPD3agmCpoYryzCBFmKxWogvu57NgNiWttHUzebWzQuMKAcDp6LKmCNYnota8xdJjJffp5VLn2VJTrX",
  "key15": "5QW28jEqtkGZCbUMhxRMhz6AHCqGS32SbyeVdEsw52a5DMB7uNuCAzcBGfMdtmq3Bx5z7mBWEAhScJGRn8DNWECX",
  "key16": "4yRkVnhav9RiPtgTaPf4gEhA5pTtU9z5eZrs9VxwSuoLXsoeNtfVVao17kUgrecF9QQwHWtQUtbanv99MwACqiiB",
  "key17": "3CsFa6Gecgr6rLbNHXpx7hFh8umLn1ryDKf5nXzmMAdbYT8kfiVuaSFd5CcmruyoxqbbnfYsSvkLpCrJvFma6QTJ",
  "key18": "35hfNHWpXkXJD4NozUJb3TDRUDyBMBo8stBhs5PJ17eJeH6sJEv8t6BHKDXRHzVV1f7Cy2MK8eoxm9Zp4SHsjHeo",
  "key19": "4T7Nt1nQrPHSpYGWNRGctdh2TyGTd1MDDgoXzYS9YQbogVXvsB4M9z9c4FXFKZrGEL9HDPkPU3xZQhFhvQGbE1tN",
  "key20": "s4mgJW9XwERrUyzPT6nJAUeTzapZPrvsLTLUiGer1x2Vmzc7naXZhA4oGFQ2DUUCrJy7ySyWgprX5MyeX8cUYi5",
  "key21": "2PjKmSVsWr3JXaS5piav6G3rLJREGNLEpJVMBFUdbnWEpGKEjLDRFjrxdM7kE7Gq6JKqmVGbJ5BuJUrZptkgTJpk",
  "key22": "5vkRsNu249RBotwgH5UFvzVdCU6NcGVAicRvonMz3SsCXuYRhrYodnX1fhzAUr9WqSHe8PGoq61afBmZkDHuqQ1t",
  "key23": "4hUYwNqRjL5JhYFtp2TkGPWcqLmRsPFRApqZ2xC3nSW1ey8922Xckj6HWjxnAQNdoF3nSVfSouQ2rMFe13bhAzvz",
  "key24": "5NBhpfNgkYoeowuCj4Lnxn29jVQUEZzXnNFCjf3hyhfD4ApSEVUKQ5me6aosizTePNQmPDvmXdvftVdcfS69N13H"
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
