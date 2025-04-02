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
    "2fzNP5yfwSbrWqerBXCjBDkbikH5iJYBQ8g7eKjULsfzTYV3aJZRHtp5ZVDZrc89oer8WRe5Xixtr42gcpFoRV1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjYZF8vJS5Ugk1unmYPT8Mgg7VdVpVwDbPJ23BMYG5XZSU8iYj6T79PffRR5iWGLPFLbZzYh1njDBDKBK8u5MRC",
  "key1": "42toRRdDHhy9JwbJEyzvC3SHtcUfMsYZ7JwVGtMjzV6QVW46RPpCiipuQf4yZQ2VuyLktCLuLwXv2ZzHTVrJ99LR",
  "key2": "26epgANS9LMe5Wy4oqiXKGSv5WdweXBNjMvMZZ1o3oGUu1DpFqAkSZcax4b5K7wnf4gAnLx73NdgFwhwBbaH5YQ4",
  "key3": "4Tircg6huwLYrmPArK3RL7uUH8bSxcLoA2VHwqbTkUr5xWQxyQqaB2LkpVStwXqyifPqkuPEpU85qU5U1Xeh7L7e",
  "key4": "5aN2nJ3gpZxVSnftiSYSim4NgJ7d5pWvxLGAHMULUBPWLCgsB4g5H7FMZ8jeLU2z3M1biguA8U5LEZNwwbQTf3HS",
  "key5": "2YUJGmw6YYXQ7vNfJsVRzGxeUtXV2Q8a3cPEyVwxHyyy8sBYvd1yxQy4PUBEVLNQyCq85KPfPdLrKZYSwqkhKYbF",
  "key6": "qw1Afr5iWVkM8Au2xFPPgtG9VtwYA1jDJUGLiowqE6FDS2tV8XtnY5HnVYun36T1LouwskTKeBkySoknjqY6RLc",
  "key7": "4YpNKMnT3ZDosYyeahxSjqZm579EraDr4RgrMdNxiec8RA2byMn3kWpYJMLpGBbFn3XqhGZsEGfwLvfQL6AL7Uxt",
  "key8": "3cZmG9AHqtTZaXbRtWLVBa9nZeE48xCqN8u6Gjs841HjcJLQR15j34QY4x9NKfD5KRHrEi1HkMwqeVfA3eYrmtpg",
  "key9": "2aeeN6PKnigwzeVUjcTSfGe6motDvQL7vzA488RPmDxCY67mn2Q9ikdvNrbga9trFd1XhybyosDitZid5KGzbjjb",
  "key10": "2omJkkhxPwWiQbJ6GkAmMZi6vPiZotfPBkm9U2rz7TMfhVi7Zuyu2AabTHJApDjZrr29XY4b25536j94THVWkftS",
  "key11": "5x1wr96etzytPn3zERpJDHGFQMyQpsmd4fCTZ1ZKLMzxoGfgovzTekaBEEMjrtsVf86xc2r7DtZMkiiLfpNSFNnJ",
  "key12": "3AY2v3ZfH9QZZCwVdNSeDfpLSnx11MyjPxXsfofeKKUXTcKDt6s378sTAwTnwRrvr53Ejk37d9HNRvrCEhNPU6eg",
  "key13": "45hbA7gvSMvoT5TPTMwChnWrqvZUQGn321FT76PGdxbBcY3nJZJgWcGsUfR1Xchcpx1Fb7aVwyXzaj1iFevHNuip",
  "key14": "5vgkXFR5iCAHzkJ16n6ywcrCS5RFbayK9HA3W2TGoPSVGFnvMr8G1UaMbxuoprZCBxSewujvLMJFJhibij7m3nuH",
  "key15": "35EJPJzU7uteNRnkRuYr1PHssgQ8EoZAn3gii5Ngy7fBeD31E9ZhascuK2stoFN9meU9uUX3SYsKMvywZdPidncX",
  "key16": "5CYjb8X27sgFAvaKy99zGvz4UeYSh9fncXGXeWVvhFmApx5c8hPuWVXA4YJNztP4xbFMz8WGmpZL3qWJMvvQibTd",
  "key17": "5rd6QmZHjaY2HEb3Dw63aWVbpjScZ3JdHGH3EPop8HtPsJYSpYkN3aPAuhaVwNqViQ2Dmm9XNqsxERWfNT9uXPPM",
  "key18": "5TSSgwAE9sBLUVCZoitRE7ygVXyRcLQYwzs5LVaWtxGEyYPRRw7K9cJha1wmwAYxWnZ8FYhWhrHGahc9aJeRxWtK",
  "key19": "4PGFzGEVVxkZW4xyemZePpkkb3SdFTQTQN6FFXUUWQeVL18qijjKvyepuh4e4qg9zgfbjsFvoXLNsi3PWTqsaLmi",
  "key20": "2ZsJyN2kGF1xFpaxX6orA4HSQ22R2RDXzM7779usEP4uYsEX8oZT5hdreJqaEjZLeLwbNke2zP5MQ6WAgyYBoo7G",
  "key21": "YSZGBq2TWdw1Gag91YRqExUiwat2kFteWo8PtLTKQRby8BXQF9EaPuFjnDGwrsh39r1M3yrceS3FiZ3nvRy2TXU",
  "key22": "4pE3M65Qi7B7Y297vamBwQ55PHorHLHmyZCQH8prZrqfi75CPoQTPMrAv2iP7nCg97FdWRDqD2EaufJxxao5kYwG",
  "key23": "3Foj91CJJg53U7nF2t6TwiVdLCCyGA19HYRThpCPBfLABk3HPDqp5x4sBcbr9ZQdbGXjxLzGYMwLhkRDtqb6GmNg",
  "key24": "dQGJVoFZnFqrsyZDUtGRrFdNLLbbcB3TDnocYQRpx2AJAs2qtSC57MmfGmZuxPtnxSUM9ZmWyF5wn31gQv437Qo"
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
