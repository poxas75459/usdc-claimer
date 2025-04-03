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
    "34YfjULHRQtF1KxbKqkRVxcLp5R2fsoNGhbDHgqcZ3ap78rpL7xEpPhPRovzExFZJuSqHk3cwRKgF5DcKti115kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgY9JP2QDFG5wM4HhyMnUrF1gQT9UJdMV9mdzxtQSVrGe5dkqrbnkE1FheMtxj8NDPXD17ZwDioRGo7zW87uUT",
  "key1": "3TVDz1mkeAKyPEigf4m3GtCeuUL4yWEoPpUzamjBAribWzFPCmHJ2Xchn4CPKWKNH4x8nbb5azQLtqsyp1tPuJkY",
  "key2": "4kPMjGHScNz8xAtBdx7MA8XtfyqaQyrSZLxj9yjz5rU28KzFbTG5Ano7ez7jFmotM7LFoNyjk6vwPoTx2NdB8q4f",
  "key3": "49vJwZygvQAWrNBSrX4ekzvgwGxXYHQsagZKq9QG8pGdzebnv72vsXj1ahKA9CBJm1pevudvWKWogpuxLavZZAMt",
  "key4": "5G5M4BJyKPg4nKJmyoF3Acrw6gGS76RXZPhGAmLZiRvUnLa5zom3wzVWHAdLDKC9f5BatgUQdepm4r8Ayk4aDFjK",
  "key5": "2sPjUxJ6xHFYtHRGB3zT1KKZCiRp4o6LWu5F3drDvhEjvoBWnKmQm61oKgyDd5UzLUVqFVMcJyBUQdbPFnQdVnVq",
  "key6": "2oYd9f7YoY61ZJkNeHK2kBgLPfzkL2zRVt7bdziMUux6wvvE2TeJeAQrhxKH2jEjgq9nUwbiSmQYgEFJTbV6pDaE",
  "key7": "3K5eBxYxBt1eA6BB6E7BrP3KoS6PGd57qWD4CjyCRYKMq3CRUnMEQswwkFXrLkLDgnPCau4a6pRxRi2gy9rSxxNs",
  "key8": "s4UrDrCXqFaLoHZwYK5ekgWRhThPZ5tXWPoAnADHCgLucjSZCYXUW9aTHMZtbfMwmRfamqSLDPg4wU6gcYkvxj1",
  "key9": "4HH5Yytc3PZWaB6kD9WBLZCFMpL9H3njBYWAYeMPV4Mg26SmHufg7xr7HpySszseDcksd32tw44uK3vqnkN2caLz",
  "key10": "2xKcfz6PANNSZzsukyWSD1UDw9DmU2dzjPuDicVaqcdVHgP3aHbrM4R45Qw6QawbaTYr5aS24bzusymtYN4WW2ag",
  "key11": "TyXnuj8DZKv27Kw9FxMLKsXaofWkDaWx91ssNq3iZf4PSmKQGzWgqH1gkqRa7VpoFLXe432sWSMVsGTyZKbLhgR",
  "key12": "3th4WDPvvHJEuyNPeygMRMc5GfB8rRDYZvozpthXFe7KxhPkpE1qY7TWcj6W2FU68kdkGhXmKGTFh64wnceWnPdY",
  "key13": "2x21u3zQ54bu1es4LoWtUg5FtM6eXRfsVz3q98eB3C1JjWMem3pmJ4fhnsatQaagTZB3UUTZJhvToENdxrR3JAMR",
  "key14": "3BhBbDXahmJH5r5pMSeD1fN71SbJ4QWGVPwezTYJf2vrWd1f56A9aiqfZvicsZxQmBFqtJ7aszETPyyv1LRr3Wn8",
  "key15": "2rw249xXzs9KmYqeE4uLELDGVeWGxbF9DkEuGMzEVYG3N4x1A8hd2KjUFc1impDWisHDyo3qJfEEcFQtpNrKGU9i",
  "key16": "2ZqYmSYom1wLhLwANB337oNsx8YQvbb3hbEVzwWPjzvfbKFtd7CRUPQBYUEgPcnrDcEZZzCQuaUXH3Bua4Biz1vS",
  "key17": "3ux8i2ZRJ5SAv5ByRh3JFzPpDQaagWpDshR7SEegPZwg8uKvJwpHcJz2pMCT28MnbFdmnatFv7yMPJUKUTAmxTSN",
  "key18": "4mrPTJgVSKu9mAbPmRSLXhiQKFiiJjbQREksU5VH7WJcptqrqc6pfuRB5ocduhRYzVW1Bfx4iKjadXAe27S9i2km",
  "key19": "5cfyqagVKwAqdgJCYjK3jb3xoQKbqzXNxCHeV5fDwd3RS3rBMecVdjUVNRYtgDJtpEDLr9mEEtu4zb3Cjs8AYpMr",
  "key20": "5eikNZjwtnyaLXUqdxZMhSFbKEBGSiezTVfswQ6pv6A4Trw7uhe51Bg5untiT5qyyLnFtS2Bu28qsCxCiD5XHi5a",
  "key21": "59QrSThB1yS6czHfvgTqAn1hBYLozsXkMdioDsA8JhdjW8QwVDRjzC8PedXs7SJR3iLEGc5Wg4h1dLLAzrFHtMt7",
  "key22": "5Lp6syJQKGjKm1KFTd3zMJyjfnHNrZ48Mt2VPq9ur97e1tVjBJmSniKww1TsR4cjSH33iPCWRRVCuAzD3TT3T78V",
  "key23": "4BaH6kY2c2jTq3VQqstVGX1VTZ26ykE2d6HC9RYFSvwKuBpWJc9sL4HMrhLx47sNd428WtjoCCpBMHH7zQTHVT9",
  "key24": "7WvTDSKJeZdZUazDzVNXR41quKg2TeoYtbx6qWAHdmc1KqgpJMjcnfSBpb2WX29nxeXaFMCA7CrVuLbdw1re2SP",
  "key25": "3vta9c8YGrVHb3v2sWueyCgfMb5n3tC7GYiMUgxid9GrCZhrNbEv78mpkWrVXnni4xUZ122qQEUPUEMPQhLUBcd3",
  "key26": "5HDSppv8hYY7Qb85Vjv3uSAXEHHgv4PTTsvzmsrns945jUhtbPrxuNkkzRpXxXCyn3PbobTFVDKe3FgfoFZ9ZP5u",
  "key27": "2ikrdsWVuXs8tFMFhPjL75ehbSkSb6pxVRMr7fuUgRSYHr3z2VkYhK8EzJvbFfVTzVYpp7UcPkPUFXco8hX6rduL",
  "key28": "22X6B8s2n1Geqf6hDsoXhLCYZtY4pJa1uKfLJNijtRsi9WwmSnApieMMZ6YbkjnTG3yh6skMDnBUTjfEQ6YqUJ2F",
  "key29": "4cNxhULzkjYtA1cketjcMkvR7GH1NuZX69KZNVvAvP3tqnHcDCRwBRhJP7zMepRr4LEGTshj4jvhUbVw2K2cpzkQ",
  "key30": "4o7SL7iUSKj8EvGyH358KhrRL733xuaCnRdvMrnEZ2DxQa94pNYUo4j4uFxZA1h5i8ZWtYg5YB9DFG83brpQdidH",
  "key31": "4BsLx6Sc2GPybytfRT1F9R2g632z8HkpPuF6fXZMzBALJng4hTgYe39M3j45h4LfZ5QXN6zTQg4LEPGi63S4wAav",
  "key32": "sfShYy9FNTbgtNtzE8Uvu1nWGyPumJjbKDgCG4jxsqF5rSP42GCpH9YnGeKcHit47wwwcUnZUkFAG7GQSFQ85FN",
  "key33": "2Vxm2Yb2Wzx7LCJ7tecp8kncguQsZYy1Nu9Pvg22cLcR4M2jtFfE6GuVMv2TQSJXhFFiL7thjeuQrfER29c2ktj3",
  "key34": "3hhn9PYsMYR29HGkebvZGwDWP469mc5SZ2E9fwU5R9rinEkuFWsbrnojyTXzXP4UHTKn2Mz6xP2CLEXE6jpfDDqM"
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
