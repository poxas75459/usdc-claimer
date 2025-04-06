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
    "iLXK2hiF4UdmPgHVEYqN5Uw9umJmer1YoJvHsSHuJbKpXhZkge2hYsb4rFgM7RiXhv1t7hZscckyhLa9YykVSwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6iWu9hTQrAfAjUntqmkiS8dteiNxSqzfCycHVsZchzNUQAFQ8VDKx6U1BTQ7UMPJQYqbr8Pz6YJjayajyTuKEwK",
  "key1": "3B3Ssegp388QdPxFY1KZnjSHFG39VMq4Kn2q7sBtU4xUB4eGZG1Ur4cWWYfVqeNxKsizFQF92QLdmTNhoyJNb6dm",
  "key2": "3vq9REs8GuoNgXytbVefwtUtemNkeCsYnz93FzY2bpH1WUhaYjyx4mAsCmFwEp8TeaLBdWLiUDPcaJCDwvZKfpYX",
  "key3": "ZoMPMXzHpDy8rMtZ4BVHtwbacLckpJKoKpsKKvDV9p9yhT4WcaUQ9iiBA8PqkHe7BhVxeSVhDo9FdbSiD931qJW",
  "key4": "4rjo5iKKm2DCauSur7WYLp9Q7cwXzrQiKYUEb6MDYZMQBx5gYXmerLNFnYfzroEhgfXVdNcwQSprco5oPegUFqBr",
  "key5": "5n1e2mvfpDkWUrExZV48nA6QVDX9aCCnQzZBF3QdhHruaR8HXiAwwBuHwTSenGzAtwmGkESAxdtL5WvKrR8f1FTY",
  "key6": "2RKqy9eHtcRdikqpVTToo8MPTMmbQiepeZuCa6gWRDnb3tUQoNCuiGikvkvHdJxDW2Y326uys8dyfQ8FAvGGqx59",
  "key7": "4ocbey3PeXyLLCDRK1CT81Uw3vbzwpxZbWXY1txnUzAwKMh9TsR6PGpMqeMtnsdHYr8PUPJuJoTBUUe42pgKwrw1",
  "key8": "2jJwv4sgKVZvEjckapyqVMLExSFekz1Ln8Ax1j96inta2jtYvu22VKXFeYMWCcjMRGStTRy295F12HBTdZcvGzxe",
  "key9": "58wr7A7fsqyEDEXbTXxgSnbkMBBUdZG47XHeWxhYPsaoYFDjgSjWBratqYvbgLCgVWQZU9XM4J8ReuGoCg3WPQ6G",
  "key10": "LEFP4xPe6x8b1uMz1GeBiADY1qT7wcNcYS4YEvaUjuU2XvnkB9K6tqMrcbQSDGi2Mr3Ca9kN8LGb9UsRFKkSRRJ",
  "key11": "2Fnw848pAEkuzNd8BPuYUxAL6R1ULzE32sAAoL6RvxChtEXsB3obGUG8JjkPpRcSbVrFwZKoQhgvUEUXEwURudtG",
  "key12": "5J4tE8idjoTaV6Uv5edVUFiFDkSEEQKjWw4hz5LwU4ryB8K7j6DzyAm1AhAY47CBmMJUyo4wPsvjget6gwhTr755",
  "key13": "3wrwCp5iyagLGdJF1zf2h8csfDyNuHzuU57rFRoZvgsQdUp2zjHhxCNBtWvppNV6QUH24cNHPze2b1a6BBBoLgsH",
  "key14": "4ySZKSJJ551wcNkb4WnTU9DRD63eXzLDdN41Qyv4rrPyoaeXp1dRzMEayTwbbvSsbvztA3uCbw36f8AWbWBiSDb5",
  "key15": "2H3QYon27xFQwRwsUsGivDZYWH8WTBgpRYenAU4JLnkZz1Ydpe7QYuuZxxSnepodLBcmF3L7n7EYkY2P95jbaGJ1",
  "key16": "3JNQ9jEh3Pz29yVnPbEbvGb8YbzYqcqvsUBBsEc8rQAyDKwZJgWru6yuPVnRdqg8s6DYLXFxdxkng5qyiipsAqot",
  "key17": "3TSB8VFSjVb4GcMPuabBYfWJQrKLy3ZoYLXEuM6hsWZFTFQTBBHN1dybLLxaZx3MopMCpBQ3tZpAuHPZrBb7YDpT",
  "key18": "5janvjujfEdfcesdazkMyjuRkKsdEXrmT1hKKXyRH2b9ZpaWDjiagXWjPUvVVmySDVVhdWkLhUuk93UNDiCnpAPP",
  "key19": "sFazi4dm8qZGZy9a11DP24oCwtbzFfUdnrk2VrJHYmBL8Jwcw1DncDhNcHte9MRT5fQFrRt49BLv5H86QV1vep1",
  "key20": "5Sb93dvJhcqHSeTrGFPVYNPGKhKgmMi3xneHUZutAHixaxmQoEFk86etK96ixeCHokDMuiP44zP6jF4Gkve6jMVG",
  "key21": "3YA1uXVsK7f8BV8K2wSjP6ZSnCaaw534r3JeGJPKyeenXhF6PPzY2NahifZjC5AgD6WHaN9iArWKVDRnGjvfvBY9",
  "key22": "3vDuXsknywqasVbvHQUrYrQmdtzn4SXV4zp1auopoZiEB5ESGtQpKyQiKtoWorBT7C3V4dZ5upgo4UJjkao2pZK6",
  "key23": "iNHfvj8ifnLWpn11dkJiTbUpVACpf6P7g2hCbfs4WP1TYS6RBywCTZVdjYLQ9yXeULWQ1BL9RGkkuoE7LxpXaQE",
  "key24": "56fH6JwgET2YCgjhhYuRrKPhosXeD8x3ZZXEooE6Xy7XoTUBNUZQ6kQfrM7u8xTjgfHkqMzP7JKr2qokoSnTKwBB",
  "key25": "2z8f2F11gYKsTeLBBtHsbZjRwPWC1G5hHQ8BcmzhWAQJuAaV17AAPicWrQvqJMrTtsXUtYxBnxzrJTYJ2VhtwSs1",
  "key26": "2DcjdS9p2LaKrqgWdTz8wN9q5T6JFiNuz8vNC2eZW6MgsMq4hDUjrtX5L5FMcZBcty9wGh7Hd5ETiRbuVin9BdqG",
  "key27": "4VAMXL3Afhb5gPybqFyYRjtcotH1q56Fh2GJqh7g2kcEMV7bPu2JARavXkBdnYNrZN7H8tVRU52UyNRKLQki9N7W",
  "key28": "eKeig81BR2XS6xCcc9qy3YeQGU9AWb2MF1y7jx2rtS2re7CeXhwiciu1W1KwCbuEAU1KCeR1avmd94uaawwDXoK",
  "key29": "2kuwWDsWPStkkQ94NR26NPLkD8gUw3j4GXRrVPXuZmaNqHckuykW1Xiy7BffJYxfebg4rqjSnXBNoC8mWDkSrwBm",
  "key30": "215KPnGPCxKVExabwsR83KP9eiHkqQfQijwV6oczgdArtFr6YT5cvv4wseyN6CdS84vAkW9TypoXUcr5wEuYbZKn",
  "key31": "4BuB8jK3Rm88krMVpqZUr7gSq8B6r9jrL6amEbiCCC9SzJvzKK46xRKiuH858uvshCDhz1Z6zaTS11YPkfCd73TB",
  "key32": "4UVXJXneSSfPUsetjhBwfsM32bGNf2vkVCkWcJTTVzKasFtuF7LEoxVW4PkD9E3PWKgfX5aZByb9nwZdPPBwNQ7b",
  "key33": "A18yyzg9fVn4siLKKfz2hKWLZGqKc7eKq7UhLx1Aiynh6oFcUsqeyKEdRvuSi9xMLV2RFbV9icxYffiApGoCFEN",
  "key34": "3EW7HFv293qa6Qz5qA5dCc3W6him2hMTXwoaMVB8VGvTV2fn2gyJQpAVPuBazDwosgiWWV7wWVdtB4onAvuVbuL4",
  "key35": "611Nnxv7kAjpCppv94ktp9prx5oYaV3C2rGWxReUyPuemceamNMCJkDyVyRmCaCg2xxLHPV9VG7iiL94yY2yPmqC",
  "key36": "Y3i1VgsuLXXZ3hhDUuZm3unPL6wB1kf8Wz7wUPYKH9MGsRxwK8sUTCHq3cxS5xkyZXF9oJj7LZTp6yT1eqxcpFD",
  "key37": "aA3JxF2tkJYGVpQ799V9cwV4bfVfsCBW4FieA5euFJX4gp7FAu1fdbszmE9ZLC1rY38jUvPRx3B7SpAMxyupPoH",
  "key38": "2jiQdyRjy8gKtj6Q2rWAHKsMmXQsSQCL5dBRdGahSPUPSJJ3pG7wVAk28QLVKoNoL93csN7JPs5EoPNyukmcTW5Z",
  "key39": "24iGwdGpbF8rGKXmgzxGSQxergpFU2VaDtRh6DWfozDNuKE6T3YAKD6QDzXmVVdoUafp774UVTvWYkPWScniccJn",
  "key40": "THNQmgWCAJDHFtK5GFKwZwejRPyD7S5XjRKJiXmEC246aw2n12QRsdKsykdRMwAuQMwg9jwYWaqn8ARV973KzF5",
  "key41": "5AXMDqgyv9WdksTC9gA7zHDRAsg5B9qeksXXTCwiFtEv4goUHduV7nWA72VHJi8RdZSjW9BFhsiXMFHcEN6zAf4r"
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
