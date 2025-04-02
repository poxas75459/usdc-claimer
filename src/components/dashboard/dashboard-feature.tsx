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
    "9Qe4g8eG1vWhFpdMUfaPgiYYHwuQb3ggTytPvJdmKHeSNUtBLD1kVpRDExb1Ut6Ftn3iehnB6cqbfV3hV87QfgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLTzE6pc3rBYTD1KtBwEsMwVU1TqiRxsihV9TmiNDKt9GM5pUBcRP1PJ9ZNGAM74BBjA1GPe4AzkcWKj3RypBft",
  "key1": "2DV2Pgv76wQi5Ga9E3VvA6cmvP1pQfuYj1YJL79Wg4sdbhesWwCxjuSSc5zL4kUS6wBuY8S8DnRhNXYqEJartcCT",
  "key2": "4AwGSA6rVaUDMDkSxeCeNmJJ2hNUDVSYHAoMz1jWZJU3NNdqRg51V3YDatEoV72Hrah6jAUXiRqzRUAxGzbR9TXP",
  "key3": "4fpeRGCgTz1kcBCkUUEjXZvBHV6e5dgn93UqfM7qR5Yhr7GPPnw81jPL9W8RG4TtaxtnvPQDTb7MBZxP39a3qGM6",
  "key4": "27XSnVRtkfgiABMVJbP9HS8EMPSQPrt8UJSgx322AB3BC9YL9nf89UzipjM4jVNNLsvkUbS4pGvau8zWp3nELt67",
  "key5": "44KJc5tddj3ZH655FkSBLBzwY89pAMtR8ydpUew3Kg8bpoVVqD3Uv2nbxMjyBRGVsnNwf93qhftd6bBo5eQ39J9z",
  "key6": "2RCtor1cDoWW1LW3yzFTL3k4ZuFg8Kdr7dqpYEciGVKMiCQ2PGCv7t6btXa8vKJXF4WxaF5EU25qbrKkP5fCoNJY",
  "key7": "5SFYVpdjjHq5WQ1RwVfuQhomXDLpLonz7ME9U4tszKyedwVQZqVS6yJUAPxPvJT1cK5npUs2BSaRh22iRiUjZMuo",
  "key8": "5Sve8aobcu9ubMEeHbKg9m3QryVBSu5ExLUbHvUGxBXFTL4eAvTGaD2DDtS5U659L7D6hYM8QjKRrNXEGYR2uSNX",
  "key9": "4ok5bdD45hP6NSYMHjDH17oJUwW11zwXjeD32z4BxLUBKx5GMqw3RzXWoJs2yMLEZw4nHZCuBfUzVZGyHKt9ci4z",
  "key10": "2rtL7LwbsEfAu2RKmJ18RfKLCPGDQue4SiifNktR453QuweuKQNJmiTGNGGPQ7VUsv1oT9VAMgWCGbmVP7JnCFoX",
  "key11": "5UG19xdLAL754hiPpYZ5jf7Dyb4BemwM1P8nCbSA5m7oWRtzNQZS25yJ2vudEwP5hdukVByvMDLsiEsLG4dny7FY",
  "key12": "vqiyMCManpEkUPUEXNnoqahgUzBLZyopgHGBiWopbGPieZ9VLF5No4aHqNHM4kbHZuasP7oyumKJLMMQHES2tTP",
  "key13": "YD7iRbK3wr6qc754B6tVy1ZSRogMfNTQ2d6YcKxoWxeG7brrEzkjZES7DaDh1nP51Xocg7qZiWoQNFm1MDkP5dh",
  "key14": "67aYj78V9jNu6pVD4Zp4qqLtmRjkMRZedL4vMKYKNd9ijPGcHAaapF2GsMG169nacAKx6P2bUzsjLCFVhqob8dUt",
  "key15": "4W9Gcfxwrci7QhSaPpXPbs9oQomTftGYh1rs2SLKDZsF7GRy5E7LN4UhGmdCFNf1DWmGgdQxeuxju9URH3KEVCsh",
  "key16": "4SSb75VBWXdtK9rCfW5wwAdTjxSG5CVhAoemP4Npmzj4HDPTBjDHfDtsNooZmYUB3FA8ZTYLN1WnJGBrbW6T9RkG",
  "key17": "4piVvSZycH9Y9NND33ef81LXdvSNu5Pz1PdKhficYzWEkJfHQQAWhb9zWr6Z8U4BMgKJrSUsQnZUk2wySDcAuot8",
  "key18": "3w1x18bdMJjjj6P5YyrXpEpGZTwBB3QR3qsevFwX5nyLBSz5debmeD8Za1vZKmX2WZuqpp75sRK4m2fhSWx3U5wy",
  "key19": "osPY3Ey6cFaYqczQyEqHMCqDJk4xVaWSzwFhPM3WrnuxQqcLSCqXDrNbGnswgNW6A6z3HiTR286AwzgT87wM4H3",
  "key20": "3u3WtsQZ3XkfLiYcMDBzJSkB7LCeeuosDEVtzac9U5iQ7HFk55Zrm8cF6F74AMjQKdBhwdpvwy3tvcMUa5UDCVJ2",
  "key21": "2JRjEzqAmu4fteL52XajRQTArbzmdhndBEeyngPx8FL5YPiR2QEBLLCv12HRqz8iXfyVQQtZRtzT1eL2UssoChf2",
  "key22": "5L5EkZ9ZaKN5bHM6JPEcWxDpZ9gRoqn7X7eHayiK8YsPvc6ReDpXJ9uaoB85DRahJu5jTop4Xr8j8Ae5tqPwYAKQ",
  "key23": "5XA2TGFcrcWVyBrBRCCWHtW3QGZ1vJ7WfaGDgxBwgAsNsAQUberad9YWKWnAH9dv8RA71HVZ5zTwBLZiaMJjGDMt",
  "key24": "4EJKAPhS4h5G6j4q1545hHsKM8AUkwwB19wZzsuWSCwYBMiJgu7AnJg6uNJTvhuzEmYxurEb6kVHkpWuLjNnZoBJ",
  "key25": "2VeWUtK2JwFH29Cw3kFFL8J9XkgmwvBwvdxf6QjcNagot51ikDxZJ1CVwkG3kQRF4LJR4CtbAj9ogehZbREjrHHx",
  "key26": "4M2KwdaF3fxAohtxTA4G1WrEPbDEiivgkd4G8iwNuLFC2QmNgxrg3rgNX2hcVsFZiHRV1iWYkxwwN9g56et5oqjd",
  "key27": "4z98RMe86zRXf1DxQZWrz4yueQWh7QsDfnmJu8qvncpmJ9w6i7VxDP7Gb1M8jtDadwEgacpeNuQbUuKVpoNuW3Ms",
  "key28": "42EzSjNrPh9rpwhmENypdbqwnzg4FXhNx2nHVYy594z8a8wZEMxo2KdPtCTSaLYJQX3YfGDt5fehomRRD2PNsrh8",
  "key29": "4KTeiNuLRDXAe5QpQWeX8kqHUmFXXvcCYVxDtpE2pExgnjZcc8ubavgcrHTKfcpLrn7x6ws4zMveVNEXkzZ6oNEN",
  "key30": "3n3MuSK1RKecxfc2Mu68fBXFkS9F68ggC1VUYcsCJMrDDc6cFE39ueBXEXMPE3PvkT34NNWto6mMV8o5BkXcqBs4",
  "key31": "2kennpz5NQGY2nr8nquBM8Td5R3oksB6M3JykzkdiJ25rQg3no5ax2XvwRqPbVRLuNK4gPWYVvRF6PkSG44pzE8k",
  "key32": "66pq6y3Wy4swxGJLj8Vhy7KephVZmEYgMm8sggNyNVQ7QCihTQCtWkEy8ymu3uLFPW1fAyht6dqcC5TuUT6ooM2m",
  "key33": "27X3qTjMo7By1e1mgiof2awKKCx379kL6UuRQULfz2zdz9zX68fCuaDSH8jxaz6MdjMNeEbZpBEgSVwuxBjLsCM5",
  "key34": "26n2wWkc8SCcXgjfg4HoLLvNMXtx6a2o7o1MimzGjmdp8V7XSVkaz9tpJM6Sgwmp77K8h3xYy9fToHyTmNEcgzWo",
  "key35": "44xsf5Gks8s8fRYuEpR2YwhB93GhxVy3UJjK5hp9hK7UoPU2XMXXE6vPB8hbKk7MWornR8Ka3z3TVPFFmfGtZ74q",
  "key36": "53ZJeWNZaMboccmphaW9xXAn5dYD9oRQqEj9kyBAQpLpHxev8MTk7TJW22fCnoJU8c3GcbU35BWW7kRMa2ug1AB8",
  "key37": "t1rzs5psNS5uDrW7uy4ZpqN2kZqu2vqhN2VSFTZXVsy526fas4MfSsCSFFZutvydp9b8AZQe7ZCH6FiaFLN9oiW",
  "key38": "r9HCx8ms6wybrT31X88cyJpKTFKfxsN6jZma5dN1ycnevFQoUteec1vhKiamXzw87G5sjx69NXFQUm6c2PjWpCW",
  "key39": "4aVcMPSD8r9s1Byee5R6HKVreNpCbbW5jM4AuWqYgtP9Tz51CURPD1Sx4DpkgGk5rrC4uVwfv3TngZg5ENvf4ev5",
  "key40": "oita2mzMadcxk7BojSSc4sUhLTS3PDW7MvFowTGCPBhBX5DUp83KBryZhwZ155bn8bYe9DHv3zBLVTFqDZHQBp5",
  "key41": "3GbdxjeUxmGi8mn6pLJ6WzyuV1JvVfCop9Trx2PUkasa3PPydyDwXcQXbm61FAoctwYeUS7pC6UPgupK7T5hGJso"
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
