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
    "2JrgyoAjkQBEqY7Jc6oxKGrzwQcAPREoHN9DD2eZ4e8NzTs4reb5xGjMbp614znT6dJ7VqX3F31Ty9LTK4zYdbwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWwLuWMegRTubF26CQAveF441McfKCirbJqEbpfCT49Y4NcK92SQrgbWnHh8Dgb89gLs9QipFNWNvRn73pwYdZx",
  "key1": "4tGFPazPCrof4v2YbgfmaYXuSyPtWos7syA25BMkCoAUKUTP3yo9d4esuKqzFU3CQtRaVKE34XwJLqNwcD66vkiF",
  "key2": "4VQjdkDrSWRQEbs7PW8fhvHzNcKAh1aa75crrirzeHneK7SyUGkRGQVBt2yZKz4jFYfwzczz8gTpAYeMYfvMWAQj",
  "key3": "2Tr37XyravQL1Mun2Xdu4smSECjH2NGMjXcQN58ExCWN54omHNKSV5udkkFBXADxf3PsRYwRR4LJxwWmYdND6ya2",
  "key4": "3WhF7TJbX8SnZCambMeVEV5FMqeSUkiRKWfU5rdeK9PpEb4SDkiCYbyF3UDDmTuyaqN7AD9tFJ3smREKfVGbjd7u",
  "key5": "GMJ8oUsybuRbgfDXvXSkRk7aaA3EBe2iz1Wxf1GBwGtEHmdLidGcjzFEBy3v2QmreXwxBsTeZNXgZNFvK4VGGM1",
  "key6": "QM8GVZ2JKzhL3woQPVqW5Y3BSGBQwizheGK4hcZrWqvQxujCKYoK6Bo7j48C8Buw4ghAfSKjL6i4iK517w3AZpL",
  "key7": "5Rdy53iQAwFEirobavMn6b8zY6ZzCCCMRyMMsBYgUs6KP4hsJEYTf5tZrk1LFUnm5SfzhLZveHAaarM2PN9KL2DK",
  "key8": "4Mu6pegT92sD795Bc3G9bjjXqoqZF6KDTq9j96eTk4EJdTZbkntDSNd1odD76VLRvmeEBpNoTNs6huUy1WudStNv",
  "key9": "3FDc83t6C8N4xXne1jL41PYVPzh6X3SbbcNNY9cMWmY3GV4zXCWjEhgpabjL8sd7zdjKG94E8LkhsXs2c1Mgi6tq",
  "key10": "BHG6n3Ugv8G8eU1JYV4exNdfUewfKCgHQozDurtqfYngtazw5NPWbkhjX93a9NYfr7dNEeYaQYqUNgRCBqfpit2",
  "key11": "YXthQedYLuVPL7fFQ3gZr28yeKbkcg5HGeuEb6A4WGjkdY4hGZRVCv9P7xhUjqo2NdAxzBh4pE94CZWV2EnJZt5",
  "key12": "2dZ8f7ewJLdSrWDW1n7DgNATHNyhHMrTJ6mdW3L1ZPdkLhjXQ8DJJyMwboYLDRQQCKTwQxgzZhu7ABLCBj2ovWVN",
  "key13": "5pC8FzRjW1fqPd9bHev4BpT5ZrcEYw96ijxiW7zR6BYeF8gutH8V7egAs7wE193uN2Lzvoo4BsffngZUk9N37Zsh",
  "key14": "4i2wSRfxa1Dbcpy79TLLahcRdQRpvpAcKghbjwHcgxyZukoY97GYHiPbYMbiJ53UBZVzMt3SPZ7FRaQurYxL6B2H",
  "key15": "28NtrrHg49cpsYYQz6QRhZgxdtLqnJiuqo17PUDErftiQaBQ7qBh3qP6GLMXim6sa8yi6eU8JLpTSz9rEejcYJ6n",
  "key16": "4LRQPD5HxUfrz9wiDzMxdTjr4B3d24FJLoDmJEz9TihoMsfPX2v6oCxVdSqXJvxhQVABvc6apzNa6wTFTUjaYeMw",
  "key17": "4E5Nz8zi9W6jBMzMsfFLuaivWMTsXTeSs2YY2RSHpgmCW3sZqWY4yhMKZuaiWgX2nAFyhoXFn2QH5Tap2rdCSVhA",
  "key18": "2FazY7MJim2KR1eD99DoQ5RvnSUd1LFpF4Zaxxv8LpeabxeFs2zciyJmFqGuWQiweRuQx2SSYNdchQLYXkJBz8bN",
  "key19": "4kxjicP3H2sXNCC4TbTw8BobxEqdiBo5QsT31aEJfm4M9ik2sYQFUyqwSoXC9Zh8iVTiSTTieFCY8MajfAUVSYtp",
  "key20": "5BDSST7PfLSHTCdo1fi33j7ZgepQCzjdPpdcYKyQf8UDxqeMqKSPzvEqu1t37AXukKqp9wv2vsDyUbnuf9aLZiJ9",
  "key21": "2YfAgc5mkUDV3GN38KZXJzzepY9J2aMnutUeRk43TNAawnC88j55H56Ps38FVMmanx1xGkb4PHgPA6wpEigMdxNX",
  "key22": "586EHAPFKBUYvaWmKwzUt4ivNeTwMxcZ1cPTcuy1yZivsfvfK2vZiZ6ieDQ9KonMAp5jjzWMgvmwnhKLpupjfXM8",
  "key23": "46vvBFLDxzAcuVWbvGcMDhvSZA83NxZYEYSEmCCQu2VscuB9apKLVPeRL9R8Fh3tqSHRLzv3eLbgsSKMPxCsH7Rx",
  "key24": "4bMGdS8W4TaYQhhh5hwt1gCAGWb9efzu2fud9D5g7wQK9cpr9nvyRczZN6jDyiSvtVPaD47eCmmrddPhpx5yfYUe",
  "key25": "2CUTvvxBdc4G6tdrZsssTeUeUq2kiv4CyYrHDUJQYwkFJHF5cuzvCpF6WATfquo9ohoEBcukVn3DG2FG7f2dbKAD",
  "key26": "5YnoRRZid1qrDkNsXSyQUY8ubfu81cFbswaytnChXWjyUnfbsR8dFCJsXfD1FfR5tR3Tqux46Dg5Lx978aDDZgdE",
  "key27": "2gaCJnjW7prT175PReDHY7TmSqsDfj3FZ9YTT1pY2v2fLKbkPPXYaLDWRELeECwtffa8p5cVFxmxp22i6swA1dVm",
  "key28": "5PUDN64ZXaMwFpdAQjtxjvukVv94KCRyitGQapGW3Pe85vWwV7w2aTx8hvZj5fVZ6V2E8pTfmkHMnq9gFqqzg2Ly",
  "key29": "4GjhDUMrAnRVLWYHETqY8bnT3K5EjWM3H9New3p8NVhfg249osdFQc5PWuR1CYkuk5MnnnoktcUV4BrMgCoyXm3f",
  "key30": "3K6kDCYFvvbN5jNNmqEKLpaM6PNsTi6JyGqF4W9CxBz1Q5B5WkbAU8eLZt6Ww6f7CvG3jpaCHJ6AQRrhrVRLLwAv",
  "key31": "NtVdvs4GRP8ZxbywMzPJKqYa7M2KsbDj1fYXj837Jau5RhGsmCtcgKuLjo9Fj5zAhvY9CiS4i8h2EGP5du9bLDN",
  "key32": "Tzajy8pr6sRwfnF7YxajMA7UJQ9uD73VsDYoef3hMqJsLn34Up4CreMAE3AcXYSyANgirMvPbKpjYngUSxWRdf1",
  "key33": "57HH2JTjYnSitfJGv83GpQUThRVB4wAxqxG7L8tk5Qho62sNjgNJUj9bETpHwH84Mm2LjjY2CH6AavTDyai2NH9i",
  "key34": "Td7HcHvXXb9LCinpGqfkmxW3tXeZ9r6ZCuSJVu2LjJmJJS5Hm7QQzaspmUKc9hegmNGhpGYJmhZhDvD4JaTUaLs",
  "key35": "4VWaB82rdDiuimrkQ5GqU6EZbHnNA9zvYVoXaAm1btuaLxPhg8Tvs4xBdxdawN26auBNTU1z3accE62DPxfZ6N8E",
  "key36": "NAxmZDv5EFqi5z4oieHqkFMvcYLcBYHXiQf4ikM9jgScmqd5ETb2obB9TZjs49iSEBYjjQ4onWTDGaAJxo7dihx",
  "key37": "5nfwd8QGfyvjYXWKjrAp4FT8JWQkwvj6vj2qsAiHT6judJb8qddfgHNuDStCp9iXpbrfCUg2aVX7s2R6Q62AXDar",
  "key38": "2YXjdPd3eQVLVnzz1AaGnV4Ej5zZ9nLyWbNc8X9cWjBNrYGgXx1F9pbH891pu7ZXUZtyVDqUNnoqMq459Fc114Li"
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
