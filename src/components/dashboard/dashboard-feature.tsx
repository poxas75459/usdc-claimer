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
    "5siow1jVfy8XXtMr7L8z5nXx3AcJVd4p1ynwXP2AP2KMVn95yMsoKqT5JPmyEhexm9pRJu1yebAHhN4sxWWBmSCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCD1hrEBxYcYQR56Wq3YAXncZxA46KC9aYHz7QFrwz9Gfng3NVYkRKToXNND1E1kZJeYxpXm3mGUVpRZo9NboLa",
  "key1": "4vJQYLsaiEX4A8yX1amEh7GtJYitnpxR6k4n2ccMdm17JP78vYCHH4BREPGT9jjsYAeMjNCZWMVPHVKYhYEcKUMM",
  "key2": "2AAkygwHttf7MH1C8U8eVm4XghPbVBAoBquJavHFj5fD7V43KUYUmTZmSuwD8Gntu2jC1oxFS4R15UebpvtUhx4f",
  "key3": "3YEUgCKbTzphjbNRg1jnhkvoCdMWnZjSMKbdcV286pGrnRPHG6f7fhBTLmw2vnKjT8pyiWBK5jxY6JuNeEHZ4XKn",
  "key4": "5drkhAemwDAJDoR7LoRMYJmqiP85Bo2zYmnNkqNWZb6kf7FrQ5ZGKJNqmBHUgSMjFaQ5qzkBgVxSu1bzKDbHRJHx",
  "key5": "2nMm8v7LyQ5kev3GRG1ZRDF5Eyfk8yBejCi3asEnFUaAmB3UBCNDW1FttPChFLSETHquFTTuBYZhu8ayEgYY8667",
  "key6": "S6zW2L8HAaWS1CF4d3dHr7qsDd71hfcniGJN35hmM81VNfeQpLh1xDQptg158DTYczPHEJ4ERiFFbS2F3D5hfcK",
  "key7": "27PE15TzwssbhZDqSvMbK57YMHXHrp1uDLyYQK3X865pe5qYKPu4Wq7rEWxtn3aeZtySbmQGdXKZoMzJmEiHv7CC",
  "key8": "4XgVeYqPZSxLmxJKYpJsk7rsrd1ttu1CD6pi8DrLQ9WAHLsgsDcnew4C8zDk52XwErDhSNpxDUFVFV2kecwJMP23",
  "key9": "5YFyckWmaVgZCTCwipEoun13ZCiMKjY8MN8gJQbvtcsuNxtVia7fG5PPpNxg9MYeDpA2yYLczbadRcWdgVN2qyjN",
  "key10": "5m5csh7VK8wgKp8XFGWXUaQYGqJfB8nBXPHe5EVxsUiCjifXm5iHNBaHpdhpEfZvooazfX8PxkFbhS5R4FaGhTPB",
  "key11": "2VhzERMHYxmQqLBuB27YiKkrAanjttn9VVE1XbfyyoJJC2sUA5jBr9KXNMKrgdv1MFLtZfveWjueV9R3MCFUPZY1",
  "key12": "5jASTST23UtKvAezkvFvUMn2fH4inVccdQ1VkVkAPBHj5aVYL9L7W28bYWNZhpBaTCHLmXz4nsSmM6QdMqJxX5bP",
  "key13": "2xPA2ybkFqY51SJAJeoxTvxUSA644Q3tUAVStyEp6c2bWo23CNmMDUGY8mtEG6HovHTS2r259XKYDSZhSBSnZcnm",
  "key14": "52sH4n1bguoJ4vxNqmGpDNEYnjmr5VRAYisWqrBe1T6WD2gZ84EAQ2XU563MZNdfASz15RVyK7AxzHqsXmKBAJao",
  "key15": "RT7zkEiFdq1n9oTJpEAtGXncNKDqfdhFu8EXiASdygGxAXng5k8zM9i89wizhix8Ej4FRwSQ9ZWsMwFeLtvnKd5",
  "key16": "4moobUNfYSmGVy7VukeLQgQu1S5tgrkLr35EVzygQncGgzwCCQ1N2kTkLzUJfByrxNwACne4wBCW7CHwsxUXSFH9",
  "key17": "5N4sWsjMnX3s4kabLpQPxzh41rzfFC4LcFNPTJ2WiLQuQ15wYVMiLh9Xvs4w4j2fV1yyHH6bkdQ2d3VbGzEQZFpQ",
  "key18": "3UpyDrkpkWB1uycNQ3UgNWmwxZTdvNPec8RMKJfsZYGU6Ntow1naN9fLPnQoMyuSzYVocHdhA7VDnQdyjjq6MMeD",
  "key19": "5xhT2VapJYhc671XJxBykWPS1kyEWjL7W324nYPAjefW885XXFDezH4BJbn2CLnxuaK2sB4o88Wj51MVvcDzqxo9",
  "key20": "2eUEmWdcormGnc9iZp8yQJVQfBEbFaLzXXS1DxXuSTfvnqzKcGqGmrMNhG88JW9KsRab4NhBTiQsuJvHwE4Yim3p",
  "key21": "56RARJ5FBQPbmXhCZFcYVr9QR83pFUUqiM7BVXL3Hh8yJdXXvGdmS2saqsTx1a1L8ExTHv1sNg4Wo4rVrLscb8A1",
  "key22": "hxZ3SXVKGEgQe6MPp75wc6HQrV2cjRTVx4yRYzhUSUhYpvGigWE9jPLvzUkcKRanT8R7NfmKaTMUdTxDyX2oTAH",
  "key23": "4nbdB3ecj3vPSKe4qjYdWhCK8xKo1Kv32oADHNAiWE1VKubMxfKdShh83AyhWcrg59k87Jq7q6pYcdwouLVgCnVg",
  "key24": "3aKhnc79K3tRLWXhHS8fx4R3mjq5UArmXFTKWUo45681fAh5SwGSgHNJYUcHAcC9YieNJ7x9DZreES1JGR9NwVfa",
  "key25": "UdMjXquBykiqg1XXAKbwB1874H6y12LczZUJmf4GyFm8wdivV4BgoQxHWRpp3ckgmfMLBs7EAuA6bFvs3cCeG2e",
  "key26": "4K4hKTNxvj3MP1qBB9hyuPpETwSZe4SkQjhwY6sd5RTQKeDgaoDxvryaK6Tp24ZaQVCvYPdfQQDAasHtifP6w7ms",
  "key27": "up2SYTTn7pqVzGaTTdNz3frjHGa6fLYWyFHtxktou5KqcTBDB7yWHr9CjSYy9UpAG3PHsEZ8Bc5MoYbGJsqxmyT",
  "key28": "82nrHb9AZqf5WvzsDXDzCoMA8ka7PNrwgr3D53kvEBCixemRfNCKjoVGR3EMDxF1tWrHAxPQf9t6bztH8ENwM7M",
  "key29": "5RN71UaLpkyUsqGWdUrCS5myXYQUTTCHQZHPHyD2XZm7n5dpfQEh3mbwrgLc47bYas3yC4N69GTwkFHmnWHvudBH",
  "key30": "57uCY1ewtBFJpYMjBLuNcsxi56QZ3pms1jEEXtyjSZGpowbQ7TBVfC77nZwXcq2KEwB2YowrrGyP4m1RK3HgCbyK",
  "key31": "28aVeuEt5Zva6Cp9ZhVBz56PUzprqx3wVSYcviLadridVMna9U3HVEq94mYXWZzrXFr4CeZ6Ay8ysevJxSLZy5oP",
  "key32": "392V5UQFGDxnvYyMos1nKUWDbEmjs6BwyBFzD8gf1SzWGXfjA6hRZPs1YZxzpimCzMLUuYAEdyjkcuD8ukkVXD2V",
  "key33": "5ZH71ALRWbRPDTcmrHSd5cjgEZZA6jCUJFgpXtg3AtuXkMWSzEWj9AGAKcsfVbKN5RygkLJ3PrQHhSFvg3iftJFr",
  "key34": "hjSpZUNMWvPYunqY51vZCAChM3aRPmMNEWhsPw9PzfmFCprrruN9XXPgHG2i4DcrcxQXJT8HGYhJVEXPB7jhG5i",
  "key35": "5YCdWX33raH2tc5S7EgibVADaEBZMEjMfTunBc8W8tRc2zzwH8bjRDokmWNkPnwgfCAxmLcTSfk4pNxjxh1U5RgJ",
  "key36": "2dVezDHvLgH9tVtXqfN2oxNkQioP4PPuqVQJ8JvbcpvqM9C6sW2x3A39Fn1rvrYwKvaytFcr1F34FJCNBtr33Eow",
  "key37": "2MoKP4PqbZJuG5AqGoHLwtXGZFfXsqsgtDHniJ7ay62xauTvaXP8wt1krq6wVS6apfwNoxtZeFUrqnFFYLkiTnmw",
  "key38": "3e8M28KHcmixbLhX9ENmPfpajvrrQE7QUeUodLhHS4bHPHbTc3UCoaoFbXQmcNjrkpjgc7WU8kNwbbmeZ5Y5Ggnb",
  "key39": "3RoXaz2pdkj5jajFcocyr5pkvJw16rFePjck2rCqQzwawM6CoXCCNQeNdMeeakCGVk6WBY3wy7nZt3BBZ3BUqjFx",
  "key40": "UG7dE8tJX5XsazzKKnLEDbceiEPZQLAoxdL7TigRz61mfuQPrj6z3BE6GTGP91ZmYXgjaVjwo67P2DzWKa3tSkX"
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
