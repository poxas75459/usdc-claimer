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
    "cDLEXjk9rogmieqyT9hXo22tuyJfG4uqRzgNifALJAyUVUgmA1pJuPcqEbDE3WNpqQNeN1enmzYAU6aTNr5r16F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39S96Yyzfqv7frND8cP1uDPmLFPrxF73iAikcN7uYKnKbrnXbztv1FNgDzsXEHJpk5DSEz269BFTcrttBcyvXTca",
  "key1": "3t6oedz3heQZBZforMWkWnTxgrNE7qrod1A86qmfHAjE74CEXyPiPJDdWGKocAXePprqdSoBKJELLvmuxwjW4EHN",
  "key2": "5MwLbrKH8WHhYH5L62mwwDz8rUwFWtfSdaH4pFQpDG6Cwgcqf6nj1twdteAoz5eJvqXwbdtJ3paEbN9VZDyFhQpz",
  "key3": "5LrQobgQzeLr6CHJmzusX6Qc9B3o3nBPAzs7vUtJXUNJJHC3Akfkb7TbAcfMZmKL4zEDyQsU2c3ttJu7AM9GYnLn",
  "key4": "5SVkM57YKCd3ZvAfZdVLyhmkoNtYT9XXDCG2JmjG5VSSyhUcx1zHHB1dgCfmq34DAPog3FosobTMdHHiN3eudeze",
  "key5": "3Y6e1XCq7XhBEueH2DpeYgN5f22pVQdDRgBuRpJRPB8882gnzagH5USALUvpWgV7s5RYzE49fU9TCkTtvHj7ZvCh",
  "key6": "3TGJygKQQzuHD2t5EGn1aqxGQffWn4UaK4bvfLDGJ4pB4PF93GT3sZPPxM3XmGxZcpTgiijMwaP9kgR3oig6AUGS",
  "key7": "2nZuie2c9TZ5rmTQ5aAiNevVQibE9U2TzWUjU2pY2ZapJjhYE5qQjMSXefVyLdNw34cjabLUSC1E4SFmHH4rQcK5",
  "key8": "5GvRHQwBCJx5Kx5KrQU1kbXHmsXcQ5xPXngkm2ng4EpDa5HnPX8YjNj2j4iMop6tJZTLPLodkAEPubjgwZM5Rzus",
  "key9": "upbPXvPjgurxE7RvUmTSC32XMXdhQ3VQv8VHXAcbEKschQtvfDCutXPnTqtyiG85XGaeQTkPX6ucWuui5zPZxRZ",
  "key10": "6cKLBgfWG4Szm8XVzYZL9BEJL8qyVx3Bw1Wzj4HbrzZYsjvmKt87fJsjwb24TdXj7KhmAm6NAS7f5qa1iCjtVbB",
  "key11": "a5is4orf2hPZa8JVFFv9YWUJEn8JoCAEYDmGi96nwnfZg7EaU3hzm2dRf9cs3HrCymFzAus9yMW8yz4sz3sTJFu",
  "key12": "3vEvoBafgcaSRaDCfTBu9dqfScovkBsKyVyVYa48rpdzfHTDNd6nnXw3zUkeHzv2or2DBwNRhdA6N9rrTwvP9ePK",
  "key13": "24efzFE7JJxEdLR6xJobGDExzfbPXQQz1GmwzDTgpYGw7ALx2A27PfxunpGryuWZ6FeYY9CGz76LdyFzL1AE2xys",
  "key14": "2VcfRdwMTkub8XBzwcad5BauWPnWraHuNhmyXmeQf5VvLvi65jmhtCX9KjcJZWjoL4uSDJzNzjgYveMQn4XYrz24",
  "key15": "4uhZ6L1hwFeeRnpwzTQen2LbfZCBn63NY1E7APnAMeJbBiKaD788r1u2qc1bQfeYwWDUT94zUe7rWSy8756uApz8",
  "key16": "3iAg5utwuqbcY1QhcuVGKZThNizWCzWAZhvLFoTAWDtU34Mft4HFAqDW7KDjKKEqYkcUQwdgTiprLVwirdFe7k4u",
  "key17": "2FnNbjGCCNKuaeDTjErxz4XHwHdtLbQDY2U9F54amMU6YZafGKWFxodGMFCPuMBvzeYYHkhAwzWkDCPV3w22jV8H",
  "key18": "3GodNvej4EZy3R35SXNvp9BvDMqo3Q8A6oKrEYas8krqqHsE5vbcgGSJptGnaRha63rCFgQHMG4B5sH4FmhQDac9",
  "key19": "TEmHCaPGwjce69oZLTJGhKAAtPPfiWhx4boLKvxQFP4gRk3CAED5yz6QCL9b4d8afhykjdRJ8Egx6FPrdnYpq5X",
  "key20": "47gVc98fAL9ydvbhroEzCPL7j6xhD5BaHS7GgzbbHWiykEzaLrk7naL8UHKBMpm2sp3p7VGJeFGZTGz4uT5irL7i",
  "key21": "4eCUAADkbwxkkyzMQ8McbndRh9K2JY9fqGu5KTifTARaiaqh6msH9oSXnrS8wBjGPp5arVaNxZw5A5hD1rHsc1Uv",
  "key22": "3pYaYLk7r7tNzbsvAvyR6XrPAFZtpDuaQ8D5Df1ywVJgWb27xvgFGzpJPXLjfvZZBHtF341ZpChfo2GXw3Y2Gmdv",
  "key23": "2ZCuohyBCnEMS1LVFvGwFMD8hWso6Q8dTidHsgsfqchuYv8fDSacmrEpn1MLAzvNrEHGft6i7iUUvXf3gYuQCVCR",
  "key24": "5qdMdJL732QpPzsbABwDnFfzJoxbf9JH6EgmcYHL1vAgkRfbzR1XuxB48doW8rvo5JiPZBAnbomXkn1hK3NPMUiN",
  "key25": "3DGsiRqLmRGRzWQd6QxZD2B3GWMMnpRKaTMMKKSu1L4pVDLy3WJxYjrA2vWofmDWJesZ6Yy6NFiqL3CYSkAuDSEX",
  "key26": "22KY4FoGg27nBsBENQF6NHsXA4VGu4TcqwdkM6QZUtK77ouFNH6jEbTRyY37QncbP1hF7BboGLoSTLLEtqYzxT4R",
  "key27": "34VcjRZox5Fdzh7qGVXQQcgeAQo4K93aZ6cU2WAbZuY332FrekYppMSDo4tmMB7cGVKa6sQCPHqVEDrs1eteB2kE",
  "key28": "2UhBJKSc7U96fhS6p9c5p2uhuiAXSWKcPhMTxfnu7j4EyYpA8mg8aRDudnREwAZBdozU8PcWQSmUWdtAUSvSwUXv",
  "key29": "5A1A3LpgrAmwzRfAafDes7XeDJ6JfVkUMxPhCuNCpQ9A1JPN2GV68RQUNKqRiPmyocr48BVNyrCGZQd4LtJem7GM",
  "key30": "2YQdmN7aUknXMXMZPBrM5omE37msNGaiKU56i4M8j5PcZaeAz1XM3DzoYSv6FSokM7BoBuanzd7BUq3hdqZKKi6Y",
  "key31": "4YD7RfoW1jrSsHHQRNph8WJbEqnXZAuQfhj9EUvJRtGSQceQp7JgiLdJEPUeo18Q7qi5EW7T4kDtJ1tnTKWEQagS",
  "key32": "4xf2yKTnv1qToz7RLTSRjktnRZokLiAwWC4uyNzEKhucyrT9EFgdBCs5M4ZrhKBf9tSUvTPGPMh8N1mCe5tCNRoY",
  "key33": "U8G6APKPLgkEtf2eVRDryzZGmAASdhai3gv67Dmn4X3yDxBjNPCA6mQ9QYMcnegktcUfjC33jwFN97oPWLbWRKz",
  "key34": "2W5C7visdofopYccd7wUzn53EeRAWJjPz8c89QxBhYaJcenH8XWzEiQr1dMn6F7tHheUFGLEoi9pcQEqjHb5ywWZ",
  "key35": "3tEooswXs7bG6Mz82ufJwYmJJ3D4MyKSPWdBTariKkxKWJBqXVSAduiysVWQXLWPMEJEBFNfVMakS6UcRgDbbAb4",
  "key36": "49k27EdeUtnBXTEETFpjZ1YVc1x4q2Yu6oj6hQGSjbtaVf4ahohfM5hCtJAB494ANowcp1xxr5WN9xCYhHsPbaFL",
  "key37": "55U5wqxpc6ThyWw6xAshmVEjYfj7YDDJcRo3w6irU6yFexfahbCbwvd1hQKqKQKNA3xLThF13UKWiTtKTaeX2zFZ",
  "key38": "5p879PEXYVktymBfSsqbf9mYpFt1YyMhWQJ5LVZ1ssgFsJudka7QDdv1qSaS7RDWFd2S8n3tKa61NZtUe1eJQQZX",
  "key39": "YufRYN5KJEJc6SeW3actv6q7f3RNMzBBHXG1vZSSBQcgAMaTMLXeguMbP5QUvsTwLDf3iCj9w5jnK2dBv9VuwwZ"
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
