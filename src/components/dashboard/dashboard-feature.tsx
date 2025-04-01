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
    "24gUXFcrfhduFjgA9XCont4YQJ6XQH7YtoYQjyPpH6VUy3GhGsbnRQ2xHKuFYY43fVdQMHbCFFuCAJRHATJzk3Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SCNyUBmfkoFnFUEnzM7baxEhcC6aTDYzxgsb7LGwQvvBmBosfN62hxHDrZmwsXNpEW4AKo2FAXJcSUaoMNwP3Qt",
  "key1": "aj81bCwCHSq9rKgA5j4P6sQZhgnPie83ot7ZeysZi3dafQQ9WrEH8GURsApxDx7GUyb5GtLrW5nL1FUx292CyBi",
  "key2": "JcAhJyzcXcKnF6Ns8rMXhQ968CWsj1UnyPUW6tgxZPhGNDWMT3zX8mgPusgTGfqB2mmuwocd3B3bTV9ixty5gta",
  "key3": "4Df6p4fhByCeg2KSWSbpPecKpMCj5CaJBYdVvB9n6YPJCAL33frteFFDQKgLD3cdJM9sf9i7aN9cWgmsi8rLLCGB",
  "key4": "3PQdVdUoGeFoZQwGvGNioRCrmPfazUx9dA1c3VKvr8xqKU5A2371oXrpa3WeZ43H2WnJVQCXpVpecVtjvyjmtKT1",
  "key5": "64BaGUwHqYFG1h5DbQ1ABh4nHjhCLHVJZV6qvwQppgS8Wkrizmgu8nzNbWZDWu36YLXeCFfJEEXGno5badBaa63e",
  "key6": "2hzmPgh5tSZSxM1E8xYu6sLXFBuupajGW35SkKKsG1T2hsCM4Dk3TBjnLTQZ7iUzL1VsdwcUqoRvz3StQuFgQxdm",
  "key7": "63qRJhAtNqrUE8P3vsLYrkfKF5tNzU1MHi2hW8Qb8MSdhCi22mrV8m6CxPYPafuKVhVnUgCXNewDzLTr9J7vHKxX",
  "key8": "4wezL93bBMG8s92tvG4Fj5hn9i9GeD9sEdwqCMgKuKGLFR9FDvvsKHt3zfWMBXTwwfiWPNRkqA9rMgG4EsmbAdmU",
  "key9": "kXsAtYfGkeC8ZD5PwJ5eKc2X1CVeaWset8zeYxmGb7Rcqs9VWqW43MZ7kNnZRniwNWG5P4RL9CDcFPJsdzHd3zS",
  "key10": "4S7E82LhTQo6bBaLmM951C9QnsDBuWT9L2eJBNNm6zAT3N8YYmjpwsf17HXYn5PW78dNXyK1cdNHhcqpQ7GSNKX1",
  "key11": "sTrRDYJSuSCruF9gsx8Mv5PKJWmjgj1Q7ohJaAadukQ2rnmSQ9FNhzMKQYuL2SYNNfWuSyt5ZwMuBC6H9fJU5jJ",
  "key12": "2GmeUHCoEiCZnFC9hoTBkvoTe7s1DhCa8S6zMFJbBF5rgZ8kbCgFofTKwdX3auTv2MbNN4aSCz7cmjLJGx2X4tJM",
  "key13": "4pgAo55P48u6FrySViajcRYaneZavpkj76fF1YKxNTyfxhrJwFVdV9AqAzzLXveMSC2op68h59zCexFCJ9U5ekmQ",
  "key14": "5gtZcFxznwBQomJmR7SWpSYwCZJqZvZBnmtEfnv8qkuXb3b7UiLB8DCjuC3caECdcdXeFTzvS41vKvC9SF7AVNTD",
  "key15": "G8U99FFTjkqYtZrdVz4Zxq4W8N3eAZsXK7X1GpHSGGSE17VdYipjGM1AF3ritssB3gX27CExZH3x4yNxqRaFvj2",
  "key16": "2AxDmQBqDf3BKZfEiAWPgExYMxVmon1Vm5HgKURCuM63CTQH4vCcWCfLR9HwpucXqrsUtEsrfeygyooLW3VpQz5K",
  "key17": "2xi2KT6Qx5hCpk1fb9N5v1kT6dtYyPFyADjaqAFKNsz2BRUTc9VSuNQVtrFFxTWNegaUtv9fSaAsXVVhqFGW6Q4Y",
  "key18": "2MALGvvjgnkrybcxYguhQYbEcwAEKNwr6fGFHB6o7n7jsUGfmyD78zsirMXXUK83hDgrJXYd2PRXic5VwGjVpWQu",
  "key19": "2CjTwfjCH4gQ9dfEmFDJfHGGRtvN4q3dNJwA6iCJXgDmc8KwYkqeApEnxbRQxYCGNiMGCpewypg13TwE6X4zdxdU",
  "key20": "3dDiHGg2KLrB2yCxtcn4c5oPg9zLhPmiio4mA1i89tA6gotkQhLjqjBGPpnQkQZQ1izz962qx8Bpxfx7N312BZA7",
  "key21": "YWLHY5wehcMaENPDgHBahVX9f915U4VcBKvc4TKd1UH4zp3GnRmGhAGMT9gRHLab4DqaoEBDSvNQkn8bnT9RJ5e",
  "key22": "4incbYUJe1w1uRMjcyWHNSCi2jyYw7MXiw8zVJfAYYAeigB5TXL3mjeGukuSadLLZriE17ivzmSxraQ3ShckCikd",
  "key23": "2XLP2vJR1r3KdEPnM1yr6ibgQDmJes3RPsEU6Dgu3dPXvGGB8bLhGQAtYc6oGPptuX2bLQet8w7FepnD7uCEDwWJ",
  "key24": "7z8V86wsmgVziqHdD1N3NQaf5v738kaJrmnrwy5VMTC5u93Qsuw8hL5tf96dUyhQBPT8Lrq3HpDzou1zND37QtX"
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
