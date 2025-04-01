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
    "31CepC6qdVazDhFaTymWZS6k9MUqF3BbGa7Cs9fSee6QRqhRr9oZsFUHA65QjNFsDFJoPsnwn5r2nVQ6jfNQ3L99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6631xkw5ysrE2CwvXi2HdvwqV5vVqt21FwPxWKHQ4LhW8VHYMAjdJy8Cmp6MM92Ys5V8kS2agBEvaaoDqEQ9Hjtr",
  "key1": "5do6XiZqGA4ugut9ZNbQYzt9gjUQfx6Rjw44rR6NVxKAjJZCmnQP6A63xAmVS3qocy2pPqukKwcvwHh6jFxUi5sR",
  "key2": "2yUrk7kSxCghbc9QAi8LqmXi6AZNBG5ZWTC6MP45JZk6gRhLuVkFGAammLDnzgArm71KWtE9jnfN9WqjJvda2rHk",
  "key3": "63quqaNqDbtXde3qohz5cqUGxdbtLHCc2obtHymXoCAaR3RRvY64Db8GUqsYQjrcm3sP96yqeaURvrVnQi1LTv8S",
  "key4": "vtVQcNac6qqh3GSwiV1CXpgjueHCKvEX48iK1zkYzDbAdjx4xPBufGx4HoX75cqq769Ut2NYvA8nBdkbQpDHAwk",
  "key5": "5M3viFPjNMqWT8gvqTxiZKjmBc1ebm3G9aGYqJb1mR6vKEQm5SJyr8P4FK3ErenacDr27GXL2QcSxcfm5gsQytQi",
  "key6": "3uk6krXcw27yFodwjAxuVWVwo7cVcNXPpXS3FKf9tQqd9zy77KBC92aRXUpJ2zfc67kAxgxQsmWWh7W4e4jRWa7D",
  "key7": "3N9eXPFGSAcYyY2NJvYi4eg41VEs7bBYTpw4yk9F8oozEtxWM27GMaoBZJsJmd7Lbo8XNNL4YQkCPDanm8umdLVZ",
  "key8": "4XcUYcDw2XZTu1uazbo5pPa4qfLFFNFerRobDQaJupDX8ih2PzZijeCNhkYxwKtdyxnDaVmF9JWzu4i5ZsGBuxKf",
  "key9": "2scJGxKaudYNNo8NQ5U2JXtwQbnWtJxDyByLfjgrDQvHU6oygz2cx4YvrVcy92DYXxoZcNtPgnJ7XLWCdVJ3J2b8",
  "key10": "5ef9hTQGBDZeKbqVZNEx5VDyguXTyktvZUmeh4WByNBkT2Mab4y3ea3q2ZY9bPKA1imPQevHtFkK8JEVuQvCHosN",
  "key11": "3NG2a6G2doQMdnWxSaWfhLs2rWLRqS9hScvAm8WEJvTypmGphFHMWnE69wyuVp3dDzKf1eE6QkPncLx1rsYjSfMu",
  "key12": "4h3yJNhGSbXRjpuTQsxyPZPpzAhhwaRAMyVYijxaYYJUVH451cGcHVnLDfEnMUczKJgijdkkREFtSazDZiUta2Cw",
  "key13": "k77CUfBAjiCapoKNryFXQk7Qr1gBV4rK1X2aD6NxNCfRnsYun82eCfZzdTwyQJH9YtwV4qxxoCXm9815ytM94ks",
  "key14": "48kz9VsfcPuEizgisqZJKktC5ZW3bfuDuMXqXxFtMJwK5kYGiAMntr7CmUfjzXLo6atRit4yZJEdw9LEvFXsnDxS",
  "key15": "4ZrqdRTZpcz2iwq6zyRrCoZtTbfFCGm1B9uBymoJpjSRQkgufjeWF3g9MgasWKnrP2K9u6dLdhBd79foJAToGc91",
  "key16": "26hpH14eJhDyHvZocKw9nMvs43DiYX5Tsdmz9BitZKLVeLmYSBDSoNZhtNKkHc4Ciou7Ab7kqEBQjDtUb3KRVvMx",
  "key17": "3v2KYUG4Dc5tj5Hp1nRnDhJg66JfWLaf7SLhkUHHEvqdLewF1897DJAEWqWPdEmovT2Me4WWaRK1Wk4PX9TQQUZC",
  "key18": "3xqSYZ2SkpH7XHrmoE2BffMRbYJc8nu8rcmG3VP7Jx4FSAA9zFtvANdCTAfZZKh4wHYCctWq3X7biJsgmpoCwPpX",
  "key19": "x9vi4qC7BfbKDHoyjHfoZ15qKEFuVjmLytbm1z6hkhjiutLsXb6KN8rYyMgtohpCRJgEb4N3syV9RbcGvun4Pv7",
  "key20": "6YPos94atPYbdhfxH1z9bpjv4xJze97yE9EJpinU9kwrx4GRNktWFYZmXjeDwZ42VBWE7L98WurwPxEGzxe1eY6",
  "key21": "5SuDoZEq6STpuZRXYXSpXgS8oYLsuMGVmjSinaUTf6HQhFGbhyp6UjhryksK9wg9JvQAngjqYPVsDuPeYzMq9ydK",
  "key22": "HPGDGwv3wpG2YwddBRwxD1P3R2x2znjhASbVrRK5UCvvnevpJGPawrjdrfczr34RBfTi658hAb5bPyZHKviSy79",
  "key23": "u8CZcPKAyXs3dzPrnK1AbXbgw5HkAVgHg8SiQLUNsCdeFh1TCotS9c4Xd8iTRjdibhU62XbhPRNJdaErB3cvjcE",
  "key24": "N7nh4p1Fr8o7JKbgFt12rfCx236uDHb9C6NviSg8YmRSjadV2h95uGcyBNAHpKb7TFZjhxwXeyd57tYvPbRFyYV",
  "key25": "CsMECgyNdyNGfdQGTU91tNduhEYgWpy3Dvz2ba3w6pz14fmwkEdmLBKxd7Jpjsm4iLDvrhWg6RYgj4rPocMrViG",
  "key26": "2n7B1NqnistZ1DECoioqZ3gRuYxi5QoxBBF4Y4SHSDvN1y1XfG2LfgXsxvBJ5EVqo16Z6QweVWaYTfctkgAqzihz",
  "key27": "2gcox4mkcksMJJaNWADXpVde9hAj5Jt9XkHaEz3SAQSsaN1mCQ6DacZouG6qYxafDQN8wbdS8R8t9xNsZDLp5LFY",
  "key28": "1udqmkgHfB5uZJKxnPEZdFycAb7YyorPqHg6QKApYJbYnY7FrYb8mWeCUQjkpRrSUuTefR2XNE1kS1uJH2QrJ6Z",
  "key29": "4HDScmzUk22UoPGpx52YkrsChfU2h6LgPrGf2AdRR3op9YUbb6otke77nSEnGEQnTVu8f8on7qLAHZSfoB41XCi5",
  "key30": "3F6RMsY6nMfTBd16yBzHXp9fhefViskdQREWMJ5Nb1eLz25BRn8Y4qYPQJDnJMwZDC3An8BraJpjp5jHrPw8cge5",
  "key31": "cdpDpBgrcAdEN6ZFzfpgwQtBVE2jPwM1vdRjUUBbWBTMMXc7jbge67DeStsfLD2on41Z2txgdy1uDBp86G27uqk",
  "key32": "UejLdogHNyASsyVS95joxJzeA8WwYFy4niEByA3SZSUuNmj4oELd88ovJp6ZyT5BYL7EYBW3L8ziLNyUmTKhe8Z",
  "key33": "5dWSRXed5RSMHQAn7XRCjNhfqqohCu76X5Q628VEq37iaGu6hMidMqLFhphe8uSyQocadB8YNW8E9dH1tZzaJLkr",
  "key34": "2yKbqBviSyatq3CpEm9374UnhVBcuJLQFmgHEvSS8zN4Wq7DuDMxEAzpn4RjuGM3UY8bcGb4HK6kiQNoVSiKdFc8",
  "key35": "3epRSjNnCQN4jXTeraJXwcPRR5hwHYDzPDxoc313kZQcDT91hsKigubGgs1f7YLkWsSMyoCU97bv2RPHehBHqgwr",
  "key36": "5TK183FbvZfRWkhMkWy8hdR9HA2ufkU2ArEEieUUVLDrjNyPWfKX52PU61b2WNSbmFTu3MyWGok3RRj4J1phb9f8",
  "key37": "64tDLKbZVjeCnzuP1ipCcHHonda7viAnT7ttJ2EfiQrpD8PoRoh8eWeZrqPZE6k9DcsC2K9txx2R5PyfG7twWZG8",
  "key38": "5FPEh2twSpiho7fwRCHguRPXDFRNoyQ4araSJbPFPBgoZotC1n7FmSRkJpD9v6dWawTdo7QRkLXLRz9y4kvbu2Vo",
  "key39": "3jsfJ7y1RNtpVfAxYvvCBhvBHgQN7epr3Mz6w8um527WhagqJRZxZpBboBFDdGRFq7f6WQW58JNNYbQFrTusbMwj"
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
