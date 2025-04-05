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
    "tRW31baNXTENXLVFVdKum65RdFiCxsVUMt8Qg7yh8QEqCZyV7fR3TsPVSZDDE8r9EsSzkpceKjAW3FP3mQ9HQbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDE1a45K5CNfhCgGCvALGcWUCkSfTYFBiCfze73jiGyddAWHorL3XvPnNPRw1vSVwzD61FDEmNrXSWk3rX9uJuJ",
  "key1": "5x5Qxxgg9tb4PTpuP5hgsqcRuALtoiZcbn1W8JmCVezvU1vcjhDTweafFp22FDWmDwxySs8RxqBJgzeS7aFjgLNz",
  "key2": "oWMQzf9Dv4aUpVgRb5D1ZKCpZn9dHtgBfrPW6c4agTqBLodsUi8PKCP8Xcxjipc9Z4jXE239Z5SPaFcGfR1NCmc",
  "key3": "XR8YBg2bAe4aAYvXbqRRBPhLzKarz5s3LvEGmXjsvQcNdYNDtVtRanbRWUHaC9M4Nnr42swcgEvrWKp4GtzdhWk",
  "key4": "4d8XNzbfCgWc33bzV7sPRpy7xX9BReZ2DWuPiFvCBe5sXqY98LSKDHELRXFpn8kk3MSSgMHVpcMjbv6LDjdpHd76",
  "key5": "35LMLJ7sddBdVAvCz4TDagd1TYPqrgy6yfJWwaBDLccUxxnV6W3skVijjt6RzAchYXN59iNXDmgQcgxJtwts55gf",
  "key6": "3BvVj9ihDhuJ2zg1Lht4BgCwZLP9X8ZXsWqHDpnS2VJ1kwFyYSV7CPkLgyaRUqF3gkiLvRtGHFHjnqpSgy87znaq",
  "key7": "4mvkD3DrBKkpiGQEgXfkrZgGN1t75xx6ygc8ePZ1qYPuDaS6BwHs9pgora2QMbqXK5PxUFt69UZNCDa9Rr7cWzNi",
  "key8": "RFKGFLMp4zEJhot1t7YKyTbguSKgmbU5hapiJW66YZM5JFnumhriGdJuobYo5VYztdBPR24Qj9KYHwQf4TeYczT",
  "key9": "5TWeVaGS7zAkArydY4b7huiEN6HruCnT8fvF8S9iybCGQGjNPKHySVKFoWEuUuCVoGqU8onRVeD7AXDRqXK6hMtH",
  "key10": "4WdcVW2bQoCKc3BtY1CXPxVB6yTZiMLw4SYXjVsP29e3nHKjAsCwv5Y2UvfSdomgRGKM5MSCAQBvS6fWszLuQ3oD",
  "key11": "2BM12r6R9pU54nGkz6QjWPGn6U6j1oe7x9jPP14Ym4rPNA7TjxWTPzBKpP4TejbpYNaSMfCuB578Vq7aurN7Fiug",
  "key12": "k1P5Mip8abkZmZnEP1UmjuhZjjBZMzw1hhriRTkNcKAiZnXyYuTx68oYoEFfnrHvdBtquhHZoniUuQG5pci6EsD",
  "key13": "63VVzyZ1br8yz7xL1UiJ73yZQPwF7zF5TP2NRFvYUE7sXB3U4ogUBMmeU3HSTUkMTqjmy5G77RiGWVX9HYJztYJL",
  "key14": "22y4t4NzDWzm2EGfv2iyG2PDatq4BpHTeh4Bm3CWbAK88WhGt4SmpkYRoXuTFnh4Uq8zUc5rfnacf24qCNxsk5MC",
  "key15": "5naLUPBULz5UbJLVcKuxFsedvCUrF1GHLTpS5KgLRCwTHtuMREQQuTDEFU7w7jq5DSwbyFZsUsKpVHw8jNbyCXQY",
  "key16": "2bjnGz7NxCDYwketAzuYXWf1JZmtYYWBn8td8awJrxutLZYHKAzevMLhfLRWYEWcTbbvKZpevjUkCE5jTgAqn8BC",
  "key17": "4npSYapu8geZdzcKwVyEow7FDGWemyYdnURvzT5sqMdK8tA5kunUahZveYuLZX3mNaRJVxcHoid7RiDZxJutHgrj",
  "key18": "4F1VsVxqxSyuTJHpKvCZ9qq6DZ1qauGriTarmQVGcAdx4eeVaBnxq4TPbQAhZpb3nDhTZH5rTE5vF6rqgnxCeqTi",
  "key19": "2a6hPpQypFwGL4nWSf2Cobpcw2YQrHojei6ZsyqsWzwJ4QdvxtBQALh8wboT4ye2fm8esYHqToLV12jrNbSvJyZC",
  "key20": "5sE7q8dHR3XFw3QoCCy4gyVowKndAY3w2gefMEr4YYf5JtwMm4DAJd5g9ZEyUC6GLehz4BfCorh6uHU9AthcVsQa",
  "key21": "ecP7DaCAQ9cWtMy8UyLLdJezk6MTCqUeqkwMQiPfrYju3qGTeGkAZETKSDW1WAcfteTesBk9emHY2AT2eRsMLeH",
  "key22": "3bQqN46QmbZMqgz2sehyNxnXHjxCuabjkueLzDcFa5hTuNNwXrMAuhrZwzENiniDbsRfbEJHuxsYwW8YYb1sqraC",
  "key23": "3XF3uB363YbaCycGJ1fjiUt9DG6RZUpd4qa5NPzcthrkNNhN32QtFpjautUeFHN5QiXQqd4UrvgSs5q4h6EmYr5T",
  "key24": "31rZMQDfdiYLAZi7FqR7mLfCvr5YR2MH9qkLzLmKJPmBnamji4gr5om9BtVAwhrw1P6a7BcGma9kxx3NjXbKq24w",
  "key25": "2PX5j8sEc5YH62nNTRM5zjWCkfZNYBko1eGfn6zpoCXn233a7998Tkeu7KGf2D11e5vhMNGF6R2GLwVhrfLpC6bv",
  "key26": "URGTnZLbyWUHGu4JL9p3oN6p7id82n2kMFAy7sAm7NnzhyCv1pJquxvXwiJRvyUNDQBM8Mbs1eFshbaJyv2eJQK"
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
