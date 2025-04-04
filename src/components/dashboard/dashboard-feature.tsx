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
    "22oweNZXE3Yi5H7VhWgJt9h1T57veCXZSU4CPZMSp1tGdHPaXWW9eDYwrXcf6iniquucu6FSAKEwkXMkYhYZft7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbXYTzT5Ngvgk3h4ynGdNoerR3hRiCDhnq2eZVtn9iVdhnPqVDefd1ZLLBiNxs3kyuyPLGSbLztXCLQdSu4UieQ",
  "key1": "5LFPJ4MMRwHrZnhVFyDHNy8VW2TVb5M7JB8BfKLoxgawPVXkqt2RDwdxpeyBG6e5CastcZVaWmGjTRwwW7QtFguH",
  "key2": "2AsqbPgyBXxfrYAaRNHfzAeby31iqaVecaKwH4Ciyi4e9JSg1Msr3UepKXh6n8VvHnXyLwhfqJfYLQCaNC9r6DMw",
  "key3": "51PjsPEvi66rmDoN5AK8Xn4ey3Qe8GMJBtfehvoG6Wpur16zGNPaT9N38GuNyU5SWPhJfyoiz3NU9LBiaCz1CHh5",
  "key4": "5LQaEBQSoMyDnKKTDe9MXLm67AxFJRm8kwo9zckDiw6jxJD7zfSrnFButPhZFDB8MA28KxSfNE3nErwYPQ8CE45b",
  "key5": "122tEdVMTUrADUMVxW7iePrPQqARUmYheAUmpLycUqtxezy6E143oWtk4ubKy3ojG4BAcH4PuNuvGb7kW6T3NBJQ",
  "key6": "3rrHzQCu8XdokZwwbUH9edCQWRVqBMRekrWZyQYzinhsBJpxf2Ab1zQstmryuCRKHfuJL7C9VbcGUJfMNbC6nYU9",
  "key7": "21yFirJeqcVkrGaAm9vuVAt8AEdgcSgxoWwH385dHoZsLuj6mMCe9XfCui45YdcehjkUSNc8szyWjd2nFa326ah1",
  "key8": "3kcixcgpNJYmNPRBNMx15jSbPJzirxyuuCU1uDvRK9yvn7VbuVtfvR1pCqQSanZ2yXDPcD6r9AWVL2cM7AhHXmeE",
  "key9": "ZaarhsAVrfHKhRgHCGevti2qaNWpXyBFgjykRF5wxJdDYLkgJCz1yAFTB5JAa7vnPd21HGiyW2dECJQ5YxrxHXF",
  "key10": "vK6nwKveKkad4Nvu8Sf8wbUzdrH8k1bsvPKGUcinJmoqppMxHkznJE4iDth9MegLh4WobR1r4beTdWfEDQteLDT",
  "key11": "5361i6Yo4uzL9LauxKPtbzXK8cjTFWNDa7QJ7id56DG9CgLReHYqsScZFwB2jgynwst2ZQssPrHzHxx78EhSUNhd",
  "key12": "2VeGsbv5jkbSzXcFTKbZievtxLHs6pUyAmCU1KLFBis5EwFvXMGiNVUKaJQ5J91SH5xS4HZswxM9NWvNeBLdbxKW",
  "key13": "5RAYW7UxwBG7p5CVQXDmqv85sfmJFi2dkA1YqFJm9H1KE1fpW4q1PbLSP1bxowS9tuxV8LhzrqNiiGQcvLToMtge",
  "key14": "4hJsi3udA7LazczhcFG7T3ypSfXW4JKg8u1ZcU8FsBZLciHZ8Vbv89sumh6VzRC59Tij5zqAXH6FK2DSQHfhfR9F",
  "key15": "3gzcdQZHFYgXtYJ9caDNAiyVPBrtz6VDfNTECKrmBjGJHecDbLQSmaw9WQfEHnMWThNNGgf4a2v9HFvKfHPWqPXK",
  "key16": "5WgtYfTymEQyBftbeXuz5tqW9mvTMWGBCPUWK4vtxEZn5qyQxMiunE4LFGE64fnfJC3EgmQBXDXGs4RBLFnGtkWq",
  "key17": "2h2UZx5Yr94tzV6JEjNKjiDikgwic1NR33Lo4dbKeYeexabaYRApfpvWayed98pRBZ9SWCwMngAByNs6fYiYVfn5",
  "key18": "2aa47HahZGiCiwGPFAVgVEZ8pVTpWAUjBUhy9Q3FuHuGnJ4fwvW1fqyeGXvn9wPg68Hy5hBKPvZigYaZSVL3pUrk",
  "key19": "4J9WiPKh8rxqihLDmYCwu3QnTJgcRqQQw7avXce5xESMFri8wkhg9YhozeQvfb3L299EkvD6vYg83fhQ8Re8oHQd",
  "key20": "4gxkvuEp8tdyMKwvkm9DbKDWSFfXdt9oS4JaFJQsvHddySp2wjYpnHVp9N9ieW7NP1SwAr5Srmg8GYYA4TNiYS4k",
  "key21": "3QjsKCMU3qTXH2199Sf2UucpgQDNzvS1kJoTu1dLWJTMtGvksHJJdbddEejiyMhmjS3yu3uVNajGmwkkUNnuYUzo",
  "key22": "RGZFemfPjuaoicsRA2xaqgNWfBGJFSKmsM6ecMTpV1WEtggECk648r34DyfT5qLGK6tBPrm9izsb8AFrkx6thkv",
  "key23": "U78sku9YA1QHRZX4YtX9peZY3HSW7Lms95bD3zePARi96cbBygG5NtPgLaKQ71adwHtybfFts2Wq274YR8Y15pC",
  "key24": "5cbBMS1zFZX9UmqLxnRFq5nq5Ka11rG5omHdgcCeBkv9Rb2pseEhqKWxyGXbqqZrSmxn51BbXLyZUHzXRxQQtvNt",
  "key25": "4Z4rbEfFUFPuFn1zZYXd5CuDzXv4KbUnufErNJmcKY5QGQiCwUzzAho3i6JWp98PXgw48WMofhSiYC5xUzmaYg7e",
  "key26": "2pghEyh5qkhTUNPktXByNqSiEAjeegKAGkbao6xCsbVMgXY2TULLTPtWyNePBJvPtrqU7XsCUkQ5QdB6VtdfF618",
  "key27": "2gnaJkKuRJA9Qo7WqTTz4wkBZfrkYnFuChCtGKu8Jhi2BnLvV7Zq2nySYHsRErfSGYp5kgai2aF7jRzdKyCow6eT",
  "key28": "5oH3XuwvHc57DVnyH3NJaktVcRdY7ojrhQ1Fo7Aavt2JBTDmEwQpoq2YiGeAhFbKHAYZXadbrz9HjA2qtcXkZ9TN",
  "key29": "4wN7Rcm492eAeRE7i1AXYxwRhf3z3gZEVPm2aap75ryXBErT4Q6JghX3cp1AJyLbU4WUv6YDpG6wbibGTxJ83fQw",
  "key30": "5fms5ocnAChQKdgkQgtHZ86GAQvqDGK6mY1oRD6T1nAG2f8qHgsqF6sFjErb6TJUpyWpDPrRsRdMg9iJ9jFJhoxj",
  "key31": "4752RGcVjfGDb4VVhwMVKL9gAjTyhE97hiX9jvFaTz88wud316RfJfdKPpbfgPVFgFutHjHYJb5Y1EkuG7nuuBWf",
  "key32": "5SZ4C7M269x74koy6Kc1kUpu4tYAfirxeLmcGrczq7BCu3CZSwpAmQU5ypucMBRHVeLcEGTCaQyq3eDp8xXZhmKk",
  "key33": "4T6tfufyvUariQBFReiRLupCkuYDYmZj2VuQE2Q8KQN6W9zq4TyJDiJ1Q3WzmKdaSzfHdtyTYLjczqPdGucKYUF9",
  "key34": "3D4Mttg2P2HvZJTDQpNQoJZ8ovDtKAF2iNWUpp2p74gkBXEV3QZ5ixnVJnTv9RGWveWmrQS6S7upYa82gZDjzV1f"
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
