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
    "2LtfZhioa6HWkPDrL6PUsZBQnFAniBMoqhkK2cv1raVUTpDUN2BCfAtjt5xzwJHUjEuygH4ZMan9jnX5zxRnTcKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7qgc8AjSfFFsgLbvWe1XrmGmCHQnkRpTdEpzBKLNZGzKip4298Wo3jmZmM6e8LCG9CCwFGFJWBBLVEZJ3YdY11",
  "key1": "2R9d2ShjfABxDQLew6onm9QV7c3CkxEbD9A5gqzxx8QdV7HvgNDcm2x9faNVu2V71BU5iXByECRUgXLpQZkotNqM",
  "key2": "3xz8JKnwg2HgsoX1tHqeCv6XwNfeVpK6DMivPjm38Q9qg9BdaC2s3FxGBGH2zAB4SNwP1ao6GkbPgNdAV8AeYUyb",
  "key3": "36qxKesJXQZQpME4hb8u4XWzHNWVZ9sJN6hxYxs2iNFNyA2mpyHibXZ6gb3eYes7NYhJmc6tfLfNLppRLE58Upr3",
  "key4": "28mQcKfx9Fik3Zvxk2B82DRFicN1AQkgf8GzH9StpowinUcPAJD3EN9Z1KFDZQafdnmLZoHqbNwbVikJF9rL5eza",
  "key5": "5kkWPRcohhsLX7LLguitedBFGr7h2nz3uPebpxBr1bVzHCaMEFiJ51C41GXFcnWtBdXjTJL4efgQjMGbn4vuhCao",
  "key6": "5RuVjb9UCNGAKsnhA9dkE4wGK5AJidJ5nURYVCcguTpsDq2KLZ7DNfv7RaJcd5w5Ckxrh7b99xcygVyofaHTZmyL",
  "key7": "2FSnhSD9wrELp5wGkHrauvvgWU48qpkyPvWRVCkhYMu7Ht9Pb2kJdLt89hTj9wWzL5g12ZztvQq2QPY4nVww5J94",
  "key8": "4LhCp7EBCAiYAVXMeTaY9Ju5Bx4Lout9eR5WkPxBQzRKVHFG6bHExJr5KkAhHeppyLDVMudcNfjZDaeS2mFXFJPQ",
  "key9": "3z8VSnVJnonNcQhMqD92RLM5ZdRnuiTGqZfPDrM4GykFrzqm875VgSEM7edU2G8fZcJvq4yw6kojL9vPPddaXTDZ",
  "key10": "2rdE4LKqhGXnFhNuydzTVuk3CKJppezZqjFXnbJWfv18BeC9MxEeQ59CtyfgLR1HBxZ1H9iT7cZGx6f4NDbsaXY6",
  "key11": "3GhmHh4hkrejRCD7sR2CMzJ8cBqdfoxB7dKgZpMrHKuDUh7BjM8o9kRrTsp1EB8EftqkE7GhswRtNsrchTyk26o8",
  "key12": "2JnJxQDPEeArg3UsYgfYRSxeCMPi47TgXsN11aw6nbBZ6L362iV6HAHGtWEvAewtbWwULxeLUdwPMB59XybAkVEw",
  "key13": "2UtDfzsbrcndJsZLWCPtRMqicujEtCD8zE49ULLX8gAoCMQQ1M3yUCVh8mu9kAnnH2ZrbkT4YDwDho5uzn1qoMsF",
  "key14": "5bF7NVoHMKuh2KTRUds8R1LCwWQdMPCuBR1qeVnUXWoeBtqNc1gWt6NN4u1BKLfPw6hUh8XEPkGFFGByVsmfKKAh",
  "key15": "56LQQ3fvk66v17oEhHdoQupuwaDwQGfpPmbhZzaQCd3uRkhQRjgQsz5NaAkH6fME7cBVXpThQBxqZuZXTeahN5wD",
  "key16": "2RctBVAAE67FviR7A1hwyqRpfvxPQWq9ftwnfWn2AkeYAji28dUcwZxpfDxSTX5Bxwn76Z65ZDnZceJvfufuK1fa",
  "key17": "5EvUvMDZsp26mQPQfu26DCVehuJvufzoxjy6dfgSsC2xq7kDxDG9aQjtBG3P1qKcCBd2ZJv6ngDyBWkvXWuhv8QN",
  "key18": "5czahUJvd3bCofYUUCPhP3C4CMu7F9oHhUt26BHHw1aPsNBXDFoMysSh1Yw7TVjzHDEUe1AbTaLw9PjBktZe968",
  "key19": "29h37GQLn5755PyMcLEFHWQAkgDbpbWHyhLe7Ag6qGAb4YnzoYApVS71bXA4TCicGuBXZEPTqLdDrjyDN6EHjZpR",
  "key20": "E1YpYcoskJJP81CcHDZPfaXCAJZmGYgSJWgLPNirchJmvefao72Hhi8n4F2gk9BerQph7y1yiwKyRKJ3ze5QWMm",
  "key21": "4MBP3R4TnmXKSNeBwzg8bYanShT1hY3319ad5KrBNzUbNwtC6WKrMo6NAQBFxiZLhdrJXB7pLWymgKSmdL4djpsq",
  "key22": "4jufdRBMJeBYhVMvZNkuMYdjMw8k67ZSEdex8dnD119BU4TeFFZEgonzt911mDyicM55UX7U9CrdJ762f3EDGT9F",
  "key23": "3rUhWP9AhncCdeA861ffgw38fkmfeSQ2rc9w24bnxbZyV3eFrBPKMgNSoe1xLu1rCKHoU73icbznFWUGb1qk9ewj",
  "key24": "3YnccTLRE2uyywfquk7Wgm9KX5DqQnzpceVKYXPGXibCdtPoBV3XMTdgPcUN5t87eBoVwBENkFzaGbSqT4NrYxuN",
  "key25": "2gvTvkMY3cTEqRnrTnV8ZZuZcaUP6nrdivxsfw2Kr4CUiyqkjKqNpKhofWsFUWyGaiHSY5bR2a5aSHtNmTX2L34h",
  "key26": "4aqbdPWDKtNErz5KdvbChN9Mp9cz4ZA22YAXvTy4AeA1v7pVM81NceCGvvYqHabyTXjUUpdRUygouceuwAXzy9yF",
  "key27": "3cbudY97GhTrd6JHNixnq84SMFXoneWZ164trVCNbSELsWZcjt6Bw55t1WsTyekE2d2ng4nhjx2PM9yrHzEipKyJ",
  "key28": "3zrzo2FAjFH8i1uFWFu8AypyqxENTajSut4Va8a565JMxpyZq2KsyJHjqTxZhd71ckMN1AADcaiRBLnQBxn2DCVw",
  "key29": "3Ex7FkDDzhUGFtYMZDTr3Efu8j2NsRdypXZ8SNobcXHkptdV9af6A7NdqHsV5Ceih4bpzKtWKhDXKRhKw35JKY2Q",
  "key30": "5FKSeLcNhbPMB8Av4Nwc2kz8vxqB4yLbTnY48SKwxjweZFHjmcocqu5smY6Nh1Yy7VupfdezWY2R6D3k39mQPAVP",
  "key31": "5PXfA1DWgerjJGrvKc4aX18aGgU9t3mgE3w37TzKqUqM9vaaGoQPiR8X9M8hnVtAXsZzTkmAdgxsPGdZ5GgXURW5"
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
