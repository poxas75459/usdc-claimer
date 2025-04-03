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
    "5SUFiwvoM9ChLdGa3Hq86jE55mPyj5fqx5DzuHRDy6e4SMvSJZn16xCbWJa5iS6Eitp4pRkXLkJCwa1xdrj2ZZKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZitJRNTEbP3vwEbeokAznK3BsXmpPn84GQHViLrwiQFuuzed4dRUa3ct8rKMmJW1pjsLKWjuNGHNsnqJUWz5GmJ",
  "key1": "57Zigs4EBCYGTqPAZybLxjTpZCpvsPWvKj8H3iEapkmkhG3TieR39kWDgkcextwvUuEQ1gMY2Wfq4qCkpnmTAFD4",
  "key2": "5QfNgduhXEsa15THrG7wB5MUPLwxG3fNpY2kB7winYvryct5nMQcy8yb92zenjBhjF6E5pQNjKM6ZXdscpPDL2hA",
  "key3": "3wUVR3SfLg76FvsWxgS9APcQEefE4Q6zcg4SsDgyMErK8JwshLAoJkhd6hA5E53SEc2sNrhs6AvVN4gTYDwQgnEh",
  "key4": "4wtiN9f1SiNGvDFmphKCCvH4WR7EVuaK3UqT4axC4deNF2KBRgfy3RKdsBwFgQyZhHTX299UnBBcvSb91uqsXjWq",
  "key5": "5Qij9YopBFF4CHFfDpght2mu3SrpzWnk1W61u9Z755h4WV2n8D9dsFjPG9N5uPobo2p1fN16sYsAVAZ63CAKhhDA",
  "key6": "524TFcY2Jnnixte1hoADFc7QWhRk5TNpC1xyjtY7Pdh6gAkn8SpYmpdGwBeLhBq8mQFQ62KPWBSbHD47QmyGtdaz",
  "key7": "4ZFNJUteADGeuKUFzgWm8WJK4iyy39MpVXs3kX3jurtVobJoFCTemLDciFEaXgFSQUshtjPZ4je894G7xPM3Kcw2",
  "key8": "5pEBegrZFr1oJzBbYwi7NzBkCU8qu17A8iH54BfJYyobznf2mHMhBx7b23Q9g386KDoo5rWto48oUYsQbEK1Gvet",
  "key9": "49vmxiE77dtwcjZaPQqcwq3JJWQveFHRT3mbxmrchdhBLTZnJmbpuCkp3c5LMMseP1Qn4XgzUodN2D5kQ2J6iSXU",
  "key10": "5uPw91jPvcm26Y8DWCp4vACaiTkMVTUWB8LHxdgp7Mo3hVwVgUwj7zLhDe9Z81dcnPzYdaKE4BwsTShMLqoQUBQN",
  "key11": "4QzQREBkeUgJciWRibDbJjM6YSPRse3mKtFukyibdFEu8zQYU9DpT9LNxfrrdYDijDLuoUaMMCEVdPhJzUwFrehX",
  "key12": "3Djtk49TBNp6hYHnZ7BfPZ5EKbqfJbAfm1H3qzovu8EVd3vz6kwdnPjreQEp8K6ns5JuniVCbjQs5WDpicv8MhXb",
  "key13": "2fafAZB3AGjbx1q6hWYigXhGiPELMVj1HFeaHH9K5pHsoHHApj7RxVczAR6n5ZcCV7ZSqkTJvx5YHLekcaf1rCxC",
  "key14": "2w7dfQsdC1Cba3cKeKLggJkYjakC4n1eEjK4VnjFGQzi5T2N3xeoFjNsGXCc1fgSpexAtxwDxQEw81MLNfNjNPBg",
  "key15": "3p7uiqjzJsrwbbyZkZsBGti8Z1tkcfXPuq7SfQFFJ2qrUbUhs6hYAoPLcxM3a873idvTawxCFZhDTvc5y6dhG2T8",
  "key16": "4Xw5qFV2P7SAWu8vfNc6r2PydL2FMS8TxQD9yknQCHAH31xgaZ3iPdyREfLEpUoXvUY23Sa9xQMhHe71KMMXNG1a",
  "key17": "5UWGiGwe8xKTvbDD4nke7cQWWyMc9GEtcLX2jsJBT3EJ7Xzjzy3NjwghpyqBDVe3BLvGzhkv3T43PgZTCRtkF7zP",
  "key18": "4crhE2PZVXeS9wUNfHnkDvVt5QnoaosCyAXW3kVHNWuuY5Coz5fnZ9GRufxoRKSekLvEVAUyFYVnTGLFCEXiY9tf",
  "key19": "2i1aGfvFZTFKvntwfipgJ8AzuWpbwDdwjUFUEfGtHLGPkxuM5WeidApQqZ3x1tCCxa2F4fmMsbZ8fCQe1GQjrytr",
  "key20": "Jz8xTBbeLzmdbThYHppWS9PjDpsk8fsuSZydv4bHwJLPmMvUoTZYCb8hzPUS2F8WxUrQXs9WEB8aDtvnSZFczon",
  "key21": "3YjYiVdnAN87GyP8CkMQG7CZoeTpNVwVXyaaqw9ujJhzt4QUnrvbEfFyHgnfsQ3fkKvvfhEkhjfJx4aZhsUFpAB7",
  "key22": "3WU1FCfMYYw3Tin7N5J6YQ1mQtju6KGqBA5rDD4bWVVTtmzFqizbdboi3ZDtbwjDagqbNWJ54JdpbbzX4m5NaKY8",
  "key23": "3BG3Ro2hLrYWceQ3AjgH7xn1MndBAt4e7PdFvGDnS5T5xxrEfeUdhxDsRCXq6c6Y3KcnT6ezbfSBt9WTpdfe7fNs",
  "key24": "Vk8L4uj4zCcKVCTpvBqgjWhWa1zUNbiWYhPLk9UoZkMKnhQYDEjCokKQxx8vDhxsnoNW6KV16Vnf6MiS4ZfZsNo",
  "key25": "5FepnAoSzdSD6o9HQ1c8EtuuC7LRSDj1gCdkco1uHexqQVV2zHC6RA3DfuKQT7tcQbiL9SheEdGTaRMMNreG7aBt",
  "key26": "2zHFgspbPiVtnZkXXvRque3FrSGHSLZ7x5Mh6cbxSDB3FznCLwiCTvx57bHGmQYLaRqWh2hmjBqtpyuyhJPvXv6X",
  "key27": "5MjBeXrfC137wyQp4eu3e2aAJLc2NLcrTVjRDTy46iJphfFAquUcrRX4e5SX7DEKAD4HfgwSaRwwngqTaQCaNNFV",
  "key28": "2FdVXvpwoXXig4Evkd77W8ST2wx8awu8ZBhitdkeobDfPgZgg8yDHA7UtN63srjquLFnww8hUzuxBHjxoXGpb39t",
  "key29": "XFBccb2sSHyPZcguT6K8sEasSGPVcYDcwJo36nAzYNcsmkmox6i5uLrJbh9tpdsw4swqwRZCR4vB8Ao5BhYexZ2",
  "key30": "3UZU5DW9MXcBNkfZCpCPPckDC16C5vgHD92Mh5i7KH13rXkhxnt4TrxTpb1oWdzydytQyiF9BaNk8Wveuj3cPDXo",
  "key31": "4U4YWYcGu7Rq1qPVwSmbbdFbj8B1oKjqS9frD2UsFBjaUwVJUBkBLN3XaT4sp9ykUvou14ycj4QzBikh6EN9kC8L",
  "key32": "DnRzc4SpepJGZFnwRUrzFAWnnHGyWzkDEGoYtXbSzd7EWbY847t39Rd8MYL5hv34CotUGeVt5ygRodsugavdxJ8",
  "key33": "2tA2TGgUYV7fFaxGQivve5qfJVa2Dc9RmrP8XrtnR49MackyEqoiNEnkKCEGm5jWND1Eg1Ev2bKjqzfw1f2yi2n6",
  "key34": "5WiNzEYtrQAWZyLYFNksA2APPxXdmCMVnEkcpz9EzU62ZMZ799TooBPnWHuDrAV471Eqn2wMwdZmseU6ZGXc73BV",
  "key35": "3RMhZC6JFgMHUei2Yo6exRfWoo4ECSoqssYUce9MV8ytavW2T3goruLGnC5RMMGjFJVtBusowvzTnwryBaUGzJPp",
  "key36": "2jXycmxvhuYEsYuAQbnNfsEvhbTqfN7SkPJhWzG3QwPT66K9ooGc5zCn8K8s56f2dCKktQ6nSPgETau4tFXkpbus",
  "key37": "5PNVkQCRBm5i7FyzGL8ijcCMrPcqvhovVSQeYxn75gxaVoQPuirAa98XG7N63U6fneDCKYKe2AV2AqkmiXjgMKJk",
  "key38": "5pjLTgtZjmxvbuHPdfFzqxiDZQg1hyC74m1XQRCYeqRRRLj3RaCyszHuNPbD7orDQys8L5g6VwsAnRundS9z3iT9",
  "key39": "5mgDbz1fXNfj5KzVGn1bC5HSSMXersKgfRji4tNM7xhcPCHSgXJojTN5PKfFx7vDuRBHhkg3tUPSXzzKRCmFuLW3",
  "key40": "5phkam4JAXTY1Ay1EFkE3yfofCzugZm19e1JEJ8nUDEooRiC6Q7cGBDcDtj91oUT1VRGvboEgvUXUGe7WWDCMxro"
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
